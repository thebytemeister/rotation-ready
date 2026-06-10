"use strict";
/* ============================================================
   RotationReady — PA EOR Study Studio
   Vanilla JS, no build step, works offline from file://
   ============================================================ */

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const APP = {
  rotation: null,   // manifest entry
  data: null,       // assembled rotation data
  view: "home",
  quiz: null,
  exam: null,
  flash: null,
};

const LEVEL_TITLES = ["Pre-PA", "Didactic Dynamo", "Rotation Rookie", "Clinical Ace", "EOR Slayer", "PANCE Prodigy", "Attending Whisperer"];
const XP_PER_LEVEL = 150;
const BACKUP_VERSION = 1;

let deferredInstallPrompt = null;

function isAndroid() { return /Android/i.test(navigator.userAgent); }
function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isSamsungBrowser() { return /SamsungBrowser/i.test(navigator.userAgent); }
function isInstalled() {
  return window.matchMedia("(display-mode: standalone)").matches
    || window.matchMedia("(display-mode: fullscreen)").matches
    || window.navigator.standalone === true;
}
function canUsePwa() { return location.protocol !== "file:" && ("serviceWorker" in navigator); }

function installButtonLabel() {
  if (deferredInstallPrompt) return "Install app";
  if (isAndroid()) return "Install app";
  if (isIOS()) return "Add to Home Screen";
  return "Install app";
}

function installHintText() {
  if (isInstalled()) return "RotationReady is on your home screen — opens fullscreen and works offline.";
  if (deferredInstallPrompt) {
    return isAndroid()
      ? "Tap Install — Android will add a real app icon to your home screen. Works offline after the first open (great for hospital dead zones)."
      : "Tap below to add RotationReady to your home screen. Works offline after the first visit.";
  }
  if (isAndroid()) {
    return "Add RotationReady to your Samsung home screen for fullscreen study sessions that work offline — perfect between patients or in dead zones.";
  }
  if (isIOS()) {
    return "Add RotationReady to your home screen for fullscreen study that works offline.";
  }
  return "Install for fullscreen study sessions that work offline after your first visit.";
}

function installStepsText() {
  if (isInstalled() || deferredInstallPrompt) return "";
  if (isAndroid() && isSamsungBrowser()) {
    return "<b>Samsung Internet:</b> tap ☰ (menu) → <b>Add page to</b> → <b>Home screen</b>.<br><b>Or in Chrome:</b> tap ⋮ → <b>Install app</b>.";
  }
  if (isAndroid()) {
    return "<b>Chrome on Android:</b> tap ⋮ (three dots, top right) → <b>Install app</b> or <b>Add to Home screen</b>.";
  }
  if (isIOS()) {
    return "<b>Safari:</b> Share → <b>Add to Home Screen</b>.";
  }
  return "Browser menu → <b>Install app</b> or <b>Add to Home screen</b>.";
}

function shouldShowInstallBanner() {
  if (!canUsePwa() || isInstalled()) return false;
  if (gstore().dismissedInstallBanner) return false;
  return isAndroid() || isIOS() || !!deferredInstallPrompt;
}

function renderInstallBanner() {
  if (!shouldShowInstallBanner()) return "";
  const title = isAndroid() ? "📲 Install on your phone" : "📲 Install app";
  const body = isAndroid()
    ? "Get a home-screen icon that opens fullscreen and <b>works offline</b> — ideal on Samsung between patients or where signal drops."
    : "Add to your home screen for fullscreen study that works offline.";
  return `<div class="card install-banner">
    <h2>${title}</h2>
    <p class="sub">${body}</p>
    <div class="btn-row">
      <button type="button" class="btn" data-action="promptInstall">${esc(installButtonLabel())}</button>
      <button type="button" class="btn ghost small" data-action="dismissInstallBanner">Not now</button>
    </div>
    ${installStepsText() ? '<p class="sub install-steps">' + installStepsText() + "</p>" : ""}
  </div>`;
}

/* ---------------- storage ---------------- */
function store() {
  try { return JSON.parse(localStorage.getItem("rr:" + APP.rotation.id)) || {}; }
  catch (e) { return {}; }
}
function saveStore(s) { localStorage.setItem("rr:" + APP.rotation.id, JSON.stringify(s)); }
function gstore() {
  try { return JSON.parse(localStorage.getItem("rr:global")) || {}; }
  catch (e) { return {}; }
}
function saveGstore(g) { localStorage.setItem("rr:global", JSON.stringify(g)); }

function allProgressKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("rr:")) keys.push(k);
  }
  return keys;
}

function exportProgress() {
  const data = {};
  for (const k of allProgressKeys()) {
    try { data[k] = JSON.parse(localStorage.getItem(k)); }
    catch (e) { data[k] = localStorage.getItem(k); }
  }
  const payload = {
    version: BACKUP_VERSION,
    app: "RotationReady",
    exportedAt: new Date().toISOString(),
    rotations: (window.STUDY_MANIFEST && window.STUDY_MANIFEST.rotations || []).map(r => r.id),
    data,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "rotationready-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  const where = isAndroid() ? "Check your Downloads folder (or the notification shade)." : "Keep this file somewhere safe.";
  setImportStatus("Backup downloaded — " + where + " Email or cloud-drive it so you can import on a new phone.", "ok");
}

function importProgress(file, merge) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(reader.result);
        if (!payload || payload.app !== "RotationReady" || !payload.data || typeof payload.data !== "object") {
          rej(new Error("Not a valid RotationReady backup file."));
          return;
        }
        if (payload.version > BACKUP_VERSION) {
          rej(new Error("This backup was made with a newer version of RotationReady. Update the app first."));
          return;
        }
        const keys = Object.keys(payload.data).filter(k => k.startsWith("rr:"));
        if (!keys.length) {
          rej(new Error("Backup file contains no progress data."));
          return;
        }
        if (!merge) {
          for (const k of allProgressKeys()) localStorage.removeItem(k);
        }
        for (const k of keys) {
          localStorage.setItem(k, JSON.stringify(payload.data[k]));
        }
        res({ keys: keys.length, exportedAt: payload.exportedAt });
      } catch (e) { rej(e); }
    };
    reader.onerror = () => rej(reader.error || new Error("Could not read file."));
    reader.readAsText(file);
  });
}

function setImportStatus(msg, kind) {
  const el = $("#importStatus");
  if (!el) return;
  el.textContent = msg || "";
  el.className = "sub settings-status" + (kind ? " " + kind : "");
}

function updateOfflineStatus() {
  const el = $("#offlineStatus");
  if (!el) return;
  const swOk = "serviceWorker" in navigator && location.protocol !== "file:";
  const online = navigator.onLine;
  if (location.protocol === "file:") {
    el.innerHTML = "Opened as a local file — quizzes work, but <b>install &amp; offline cache need a web server</b> (GitHub Pages or <code>npx serve</code>). Double-click still works for studying.";
    return;
  }
  if (!swOk) {
    el.textContent = online ? "Browser doesn't support offline install." : "You're offline. Reconnect once to cache the app.";
    return;
  }
  if (isInstalled()) {
    el.textContent = "Installed app mode — studying offline from cache. Progress saves on this device.";
    return;
  }
  el.innerHTML = online
    ? (isAndroid()
      ? "Online — open once to cache everything. Then install from above (⋮ → Install app in Chrome) for offline study anywhere."
      : "Online — content caches after your first visit. Install for offline study.")
    : "Offline mode active — you're studying from cache. Progress still saves locally.";
}

function updateInstallSection() {
  const section = $("#installSection");
  if (!section) return;
  if (!canUsePwa()) {
    section.classList.add("hidden");
    return;
  }
  section.classList.remove("hidden");
  const hint = $("#installHint");
  const steps = $("#installSteps");
  const btn = $("#installBtn");
  if (hint) hint.textContent = installHintText();
  if (steps) {
    const t = installStepsText();
    steps.innerHTML = t;
    steps.style.display = t ? "" : "none";
  }
  if (btn) {
    if (isInstalled()) {
      btn.textContent = "✓ Installed";
      btn.disabled = true;
    } else {
      btn.textContent = installButtonLabel();
      btn.disabled = false;
    }
  }
}

async function promptInstallApp() {
  if (isInstalled()) return;
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    try {
      const choice = await deferredInstallPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setImportStatus("Installed — look for the RotationReady icon on your home screen.", "ok");
      }
    } finally {
      deferredInstallPrompt = null;
      updateInstallSection();
      if (APP.view === "home") render();
    }
    return;
  }
  if (!canUsePwa()) {
    setImportStatus("Install needs the GitHub Pages link — not a saved file on your phone.", "err");
    return;
  }
  openSettings();
  setImportStatus(installStepsText().replace(/<[^>]+>/g, ""), "ok");
}

function openSettings() {
  const modal = $("#settingsModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  setImportStatus("");
  updateOfflineStatus();
  updateInstallSection();
}

function closeSettings() {
  const modal = $("#settingsModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function touchStreak() {
  const g = gstore();
  const today = new Date(); today.setHours(0,0,0,0);
  const t = today.getTime();
  if (g.streakLast === t) { /* already counted today */ }
  else if (g.streakLast === t - 86400000) { g.streakCount = (g.streakCount || 0) + 1; g.streakLast = t; }
  else { g.streakCount = 1; g.streakLast = t; }
  saveGstore(g);
  renderChips();
}
function streakCount() {
  const g = gstore();
  if (!g.streakLast) return 0;
  const today = new Date(); today.setHours(0,0,0,0);
  return (g.streakLast >= today.getTime() - 86400000) ? (g.streakCount || 0) : 0;
}
function addXP(n) {
  const g = gstore();
  g.xp = (g.xp || 0) + n;
  saveGstore(g);
  renderChips();
}
function levelInfo() {
  const xp = gstore().xp || 0;
  const lv = Math.floor(xp / XP_PER_LEVEL) + 1;
  const title = LEVEL_TITLES[Math.min(lv - 1, LEVEL_TITLES.length - 1)];
  return { xp, lv, title, into: xp % XP_PER_LEVEL };
}

/* ---------------- data loading ---------------- */
function loadScript(src) {
  return new Promise((res, rej) => {
    const el = document.createElement("script");
    el.src = src;
    el.onload = () => res();
    el.onerror = () => rej(new Error("Failed to load " + src));
    document.head.appendChild(el);
  });
}

async function selectRotation(id) {
  const rot = window.STUDY_MANIFEST.rotations.find(r => r.id === id);
  if (!rot) return;
  if (!window.__ROT || !window.__ROT[id] || !window.__ROT[id].module) {
    for (const f of rot.files) {
      try { await loadScript("data/" + f); }
      catch (e) { console.error(e); }
    }
  }
  const parts = (window.__ROT || {})[id];
  if (!parts || !parts.module) {
    $("#app").innerHTML = '<div class="card center"><p>⚠️ Could not load data for ' + esc(rot.name) + '. Check the files listed in data/manifest.js.</p></div>';
    return;
  }
  APP.rotation = rot;
  APP.data = Object.assign({}, parts.module, {
    flashcards: parts.flashcards || [],
    questions: parts.questions || [],
  });
  APP.quiz = APP.exam = APP.flash = null;

  document.documentElement.style.setProperty("--accent", rot.accent || "#e84d8a");
  document.documentElement.style.setProperty("--accent2", rot.accent2 || "#8e54e9");

  const g = gstore(); g.lastRotation = id; saveGstore(g);
  $("#rotationSelect").value = id;
  renderChips();
  go("home");
}

/* ---------------- helpers ---------------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function catName(id) {
  const c = APP.data.categories.find(c => c.id === id);
  return c ? c.name : id;
}
function catIcon(id) {
  const c = APP.data.categories.find(c => c.id === id);
  return c ? c.icon : "📌";
}
function qById(id) { return APP.data.questions.find(q => q.id === id); }

function fcKey(card) {
  const plain = String(card.front).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return card.cat + "::" + plain.slice(0, 120);
}

function recordFcGot(card) {
  const s = store();
  s.fcstats = s.fcstats || {};
  const k = fcKey(card);
  const st = s.fcstats[k] || { g: 0, a: 0 };
  st.g++; st.last = Date.now();
  s.fcstats[k] = st;
  saveStore(s);
}

function recordFcAgain(card) {
  const s = store();
  s.fcstats = s.fcstats || {};
  const k = fcKey(card);
  const st = s.fcstats[k] || { g: 0, a: 0 };
  st.a++; st.last = Date.now();
  s.fcstats[k] = st;
  saveStore(s);
}

function recordAnswer(qid, correct) {
  const s = store();
  s.qstats = s.qstats || {};
  const st = s.qstats[qid] || { a: 0, c: 0 };
  st.a++; if (correct) st.c++;
  st.last = Date.now();
  s.qstats[qid] = st;
  s.missed = s.missed || {};
  if (correct) delete s.missed[qid]; else s.missed[qid] = true;
  saveStore(s);
  touchStreak();
  if (correct) addXP(10);
}

function prepQuestions(qs) {
  // wrap each question with shuffled choices
  return qs.map(q => ({
    q,
    choices: shuffle(q.choices.map((t, i) => ({ t, correct: i === q.answer }))),
    chosen: null,   // index into shuffled choices
    flagged: false,
  }));
}

function accuracyByCategory() {
  const s = store();
  const stats = s.qstats || {};
  const out = {};
  for (const c of APP.data.categories) out[c.id] = { a: 0, c: 0 };
  for (const q of APP.data.questions) {
    const st = stats[q.id];
    if (st && out[q.cat]) { out[q.cat].a += st.a; out[q.cat].c += st.c; }
  }
  return out;
}

/* ---------------- navigation / render ---------------- */
function go(view) {
  // pause exam timer if leaving exam view
  if (APP.view === "exam" && view !== "exam" && APP.exam && APP.exam.timerId) {
    clearInterval(APP.exam.timerId); APP.exam.timerId = null;
  }
  APP.view = view;
  render();
}

function renderChips() {
  $("#streakChip").textContent = "🔥 " + streakCount();
  const li = levelInfo();
  $("#xpChip").textContent = "⭐ Lv " + li.lv + " · " + li.title;
}

function render() {
  $$("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.arg === APP.view));
  const v = APP.view;
  let html = "";
  if (!APP.data) html = '<div class="card center"><p>Pick a rotation above to begin.</p></div>';
  else if (v === "home") html = renderHome();
  else if (v === "study") html = renderStudy();
  else if (v === "flash") html = renderFlash();
  else if (v === "quiz") html = renderQuiz();
  else if (v === "exam") html = renderExam();
  else if (v === "missed") html = renderMissed();
  $("#app").innerHTML = html;
  afterRender();
}

function afterRender() {
  if (APP.view === "exam" && APP.exam && APP.exam.running && !APP.exam.timerId) {
    APP.exam.timerId = setInterval(examTick, 1000);
  }
}

/* ================= HOME ================= */
function renderHome() {
  const d = APP.data;
  const s = store();
  const stats = s.qstats || {};
  const seen = Object.keys(stats).filter(id => qById(id)).length;
  const total = d.questions.length;
  let attempts = 0, corrects = 0;
  for (const id in stats) { if (qById(id)) { attempts += stats[id].a; corrects += stats[id].c; } }
  const acc = attempts ? Math.round(100 * corrects / attempts) : null;
  const missedN = Object.keys(s.missed || {}).filter(id => qById(id)).length;
  const li = levelInfo();

  // exam countdown
  let cdHtml = "";
  if (s.examDate) {
    const days = Math.ceil((new Date(s.examDate + "T00:00:00") - new Date()) / 86400000);
    cdHtml = days >= 0
      ? '<div class="days">' + days + '</div><div><b>day' + (days === 1 ? "" : "s") + ' until your ' + esc(d.examName) + '</b><br><span class="sub">You\'ve got this. One block at a time. 💪</span></div>'
      : '<div><b>Exam day has passed — go celebrate! 🎉</b><br><span class="sub">Set a new date when the next rotation starts.</span></div>';
  } else {
    cdHtml = '<div><b>When is the big day?</b><br><span class="sub">Set your exam date to start the countdown.</span></div>';
  }

  // weak areas
  const byCat = accuracyByCategory();
  let catRows = "";
  for (const c of d.categories) {
    const st = byCat[c.id];
    const pct = st.a ? Math.round(100 * st.c / st.a) : null;
    catRows += '<div class="cat-row"><div class="cat-head"><span>' + c.icon + " " + esc(c.name) + '</span><span>' + (pct === null ? "not started" : pct + "% · " + st.a + " answered") + '</span></div>' +
      '<div class="bar thin"><i style="width:' + (pct === null ? 0 : pct) + '%"></i></div></div>';
  }

  const examHist = (s.exams || []).slice(-5).reverse().map(e =>
    '<div class="result-item ' + (e.pct >= 70 ? "good" : "bad") + '">📋 ' + new Date(e.date).toLocaleDateString() + " — <b>" + e.pct + "%</b> (" + e.correct + "/" + e.total + ")</div>"
  ).join("") || '<p class="sub">No simulated exams yet — try Exam Sim when you\'re ready.</p>';

  return `
  ${renderInstallBanner()}
  <div class="card" style="background:linear-gradient(120deg, color-mix(in srgb, var(--accent) 9%, #fff), color-mix(in srgb, var(--accent2) 9%, #fff))">
    <h2>${d.icon} ${esc(d.name)} Rotation</h2>
    <p class="sub">${esc(d.tagline || "")}</p>
    <div class="btn-row">
      <button class="btn" data-action="startCram" title="Questions: misses + weakest topics + unseen">🔥 Cram quiz</button>
      <button class="btn" data-action="startCramFlash" title="Flashcards: again-later cards + weakest topics + unseen">🔥 Cram cards</button>
      <button class="btn ghost" data-action="nav" data-arg="quiz">⚡ Quick Quiz</button>
      <button class="btn ghost" data-action="nav" data-arg="flash">🃏 Flashcards</button>
      <button class="btn ghost" data-action="nav" data-arg="study">📖 Study Guide</button>
    </div>
  </div>

  <div class="card">
    <div class="countdown">${cdHtml}
      <span style="margin-left:auto"><input type="date" id="examDate" value="${s.examDate || ""}" data-action-change="setExamDate"></span>
    </div>
  </div>

  <div class="grid4">
    <div class="stat"><div class="big">${seen}/${total}</div><div class="lbl">Questions seen</div></div>
    <div class="stat"><div class="big">${acc === null ? "—" : acc + "%"}</div><div class="lbl">Accuracy</div></div>
    <div class="stat"><div class="big">${streakCount()} 🔥</div><div class="lbl">Day streak</div></div>
    <div class="stat"><div class="big">${li.xp} ⭐</div><div class="lbl">XP · ${esc(li.title)}</div></div>
  </div>

  <div class="grid2" style="margin-top:16px">
    <div class="card">
      <h2>🎯 Mastery by topic</h2>
      <p class="sub">Aim your study time at the lowest bars.</p>
      ${catRows}
    </div>
    <div class="card">
      <h2>📋 Recent exam sims</h2>
      ${examHist}
      ${missedN ? '<div class="btn-row"><button class="btn small ghost" data-action="nav" data-arg="missed">🔁 Review ' + missedN + ' missed question' + (missedN === 1 ? "" : "s") + '</button></div>' : ""}
    </div>
  </div>`;
}

/* ================= STUDY GUIDE ================= */
function renderStudy() {
  const d = APP.data;
  let html = `
  <div class="card">
    <h2>🧠 Test-Day Strategy (read me first!)</h2>
    <p class="sub">Built for people who know the material but freeze on standardized tests.</p>
    <ul class="advice-list">${d.advice.map(a => "<li>" + a + "</li>").join("")}</ul>
  </div>
  <div class="card">
    <h2>📖 High-Yield Study Guide</h2>
    <p class="sub">${esc(d.examName)} blueprint topics. Open a section, skim the bullets, memorize the pearls.</p>
  </div>`;

  for (const c of d.categories) {
    const topics = d.topics.filter(t => t.cat === c.id);
    if (!topics.length) continue;
    html += '<div class="cat-section-title">' + c.icon + " " + esc(c.name) + "</div>";
    for (const t of topics) {
      html += `<details class="topic"><summary>${esc(t.title)}</summary><div class="body">
        <ul>${t.bullets.map(b => "<li>" + b + "</li>").join("")}</ul>
        ${t.pearl ? '<div class="pearl"><b>💎 Pearl:</b> ' + t.pearl + "</div>" : ""}
      </div></details>`;
    }
  }
  return html;
}

/* ================= FLASHCARDS ================= */
function startFlash(catId) {
  let cards = APP.data.flashcards;
  if (catId && catId !== "all") cards = cards.filter(c => c.cat === catId);
  APP.flash = {
    cat: catId || "all",
    deck: shuffle(cards),
    i: 0,
    done: 0,
    total: cards.length,
    flipped: false,
    cram: null,
  };
}

function renderFlashSetup() {
  const d = APP.data;
  const cramCard = `<div class="card cramcard">
    <h2>🔥 Cram Cards</h2>
    <p class="sub">Builds a focused deck from cards you've marked <b>Again later</b>, your three weakest quiz topics, plus fresh cards you haven't mastered yet. Great for quick reps between patients.</p>
    <div class="btn-row"><button class="btn" data-action="startCramFlash">Build my cram deck →</button></div>
  </div>`;
  const opts = ['<option value="all">All topics (' + d.flashcards.length + ")</option>"]
    .concat(d.categories.map(c => {
      const n = d.flashcards.filter(x => x.cat === c.id).length;
      return '<option value="' + c.id + '">' + c.icon + " " + esc(c.name) + " (" + n + ")</option>";
    })).join("");
  return cramCard + `<div class="card">
    <h2>🃏 Flashcards</h2>
    <p class="sub">Flip, learn, recycle anything that doesn't stick.</p>
    <h3>Topic</h3>
    <select id="flashTopic" class="inline" style="width:100%;max-width:320px;margin-bottom:12px">${opts}</select>
    <div class="btn-row"><button class="btn" data-action="startFlashDeck">Start deck →</button></div>
  </div>`;
}

function renderFlash() {
  const d = APP.data;
  if (!APP.flash) return renderFlashSetup();
  const f = APP.flash;
  const inCram = !!f.cram;

  const opts = ['<option value="all">All topics (' + d.flashcards.length + ")</option>"]
    .concat(d.categories.map(c => {
      const n = d.flashcards.filter(x => x.cat === c.id).length;
      return '<option value="' + c.id + '"' + (f.cat === c.id ? " selected" : "") + ">" + c.icon + " " + esc(c.name) + " (" + n + ")</option>";
    })).join("");
  const topicSelect = inCram
    ? '<span class="sub">🔥 Cram deck</span>'
    : '<select class="inline" data-action-change="flashFilter">' + opts + "</select>";

  if (!f.deck.length || f.i >= f.deck.length) {
    return `<div class="card">
      ${inCram ? '<div class="cramstrip">🔥 <b>Cram deck complete!</b> ' + cramFlashDesc(f.cram) + "</div>" : ""}
      <div class="qmeta"><span>🃏 Flashcards</span>${topicSelect}</div>
      <div class="empty"><span class="bigemoji">🎉</span>
      ${f.total ? "Deck complete! <b>" + f.done + "</b> cards mastered this round." : "No cards in this deck yet."}
      <div class="btn-row" style="justify-content:center">
        ${inCram ? '<button class="btn" data-action="startCramFlash">🔥 New cram deck</button>' : ""}
        <button class="btn${inCram ? " ghost" : ""}" data-action="flashRestart">🔄 Go again</button>
        ${inCram ? '<button class="btn ghost" data-action="flashDone">🃏 Pick a new deck</button>' : ""}
      </div></div>
    </div>`;
  }

  const card = f.deck[f.i];
  const pct = Math.round(100 * f.done / f.total);
  return `<div class="card">
    ${inCram ? '<div class="cramstrip">🔥 <b>Cram deck:</b> ' + cramFlashDesc(f.cram) + "</div>" : ""}
    <div class="qmeta">
      <span>${inCram ? "🔥 " : ""}Card ${f.done + 1} of ${f.total}</span>
      ${topicSelect}
    </div>
    <div class="bar thin" style="margin-top:8px"><i style="width:${pct}%"></i></div>
    <div class="flash-stage">
      <div class="flash-card${f.flipped ? " flipped" : ""}" data-action="flashFlip">
        <div class="flash-face front">
          <div class="tag">${catIcon(card.cat)} ${esc(catName(card.cat))}</div>
          <div class="txt">${card.front}</div>
          <div class="hint">tap to flip ✨</div>
        </div>
        <div class="flash-face back">
          <div class="tag">Answer</div>
          <div class="txt">${card.back}</div>
          <div class="hint">tap to flip back</div>
        </div>
      </div>
    </div>
    <div class="flash-controls">
      <button class="btn again" data-action="flashAgain">🔁 Again later</button>
      <button class="btn got" data-action="flashGot">✅ Got it!</button>
    </div>
  </div>`;
}

/* ================= QUIZ ================= */
function renderQuiz() {
  if (!APP.quiz) return renderQuizSetup();
  if (APP.quiz.finished) return renderQuizResults();
  return renderQuizQuestion();
}

function renderQuizSetup() {
  const d = APP.data;
  const cramCard = `<div class="card cramcard">
    <h2>🔥 Cram Mode</h2>
    <p class="sub">Highest-yield sessions built from your weak spots — no setup required.</p>
    <div class="btn-row">
      <button class="btn" data-action="startCram">Cram quiz →</button>
      <button class="btn ghost" data-action="startCramFlash">Cram cards →</button>
    </div>
  </div>`;
  const cats = d.categories.map(c => {
    const n = d.questions.filter(q => q.cat === c.id).length;
    return `<label class="on"><input type="checkbox" class="quizCat" value="${c.id}" checked>${c.icon} ${esc(c.name)} (${n})</label>`;
  }).join("");
  return cramCard + `<div class="card">
    <h2>⚡ Quick Quiz</h2>
    <p class="sub">Instant feedback with full explanations after every question — the best way to learn.</p>
    <h3>Topics</h3>
    <div class="checks" id="quizCats">${cats}</div>
    <h3>How many questions?</h3>
    <div class="checks" id="quizLen">
      <label class="on"><input type="radio" name="qlen" value="10" checked>10 — coffee break</label>
      <label><input type="radio" name="qlen" value="20">20 — solid session</label>
      <label><input type="radio" name="qlen" value="999">All of them — beast mode</label>
    </div>
    <div class="btn-row"><button class="btn" data-action="startQuiz">Start quiz →</button></div>
  </div>`;
}

function startQuiz(questionList, lenWanted) {
  const qs = shuffle(questionList).slice(0, lenWanted);
  APP.quiz = { qs: prepQuestions(qs), i: 0, correct: 0, finished: false, results: [] };
  render();
}

/* ---- Cram Mode: misses + weakest topics + unseen filler ---- */
const CRAM_TARGET = 25;
const CRAM_FLASH_TARGET = 20;

function weakCategories() {
  const byCat = accuracyByCategory();
  return APP.data.categories
    .map(c => ({ id: c.id, acc: byCat[c.id].a ? byCat[c.id].c / byCat[c.id].a : 0.6 }))
    .sort((a, b) => a.acc - b.acc)
    .slice(0, 3)
    .map(r => r.id);
}

function buildCram() {
  const d = APP.data;
  const s = store();
  const stats = s.qstats || {};
  const missedMap = s.missed || {};

  // rank categories weakest-first; unstarted sit at 0.6 so true weak spots
  // outrank them but they still beat mastered topics
  const weakCats = weakCategories();

  const missed = Object.keys(missedMap).map(qById).filter(Boolean);
  const unseenWeak = d.questions.filter(q => !stats[q.id] && weakCats.includes(q.cat) && !missedMap[q.id]);
  const seenWeak = d.questions
    .filter(q => stats[q.id] && weakCats.includes(q.cat) && !missedMap[q.id])
    .sort((a, b) => (stats[a.id].last || 0) - (stats[b.id].last || 0)); // least recently seen first
  const unseenOther = d.questions.filter(q => !stats[q.id] && !weakCats.includes(q.cat));

  const target = Math.min(CRAM_TARGET, d.questions.length);
  const pick = [];
  const used = new Set();
  const take = arr => { for (const q of arr) { if (pick.length >= target) break; if (!used.has(q.id)) { used.add(q.id); pick.push(q); } } };

  take(shuffle(missed));
  const nMissed = pick.length;
  take(shuffle(unseenWeak));
  const nWeakNew = pick.length - nMissed;
  take(seenWeak);
  const nReview = pick.length - nMissed - nWeakNew;
  take(shuffle(unseenOther));
  const nFresh = pick.length - nMissed - nWeakNew - nReview;

  return { qs: pick, counts: { missed: nMissed, weakNew: nWeakNew, review: nReview, fresh: nFresh }, weakCats };
}

function buildCramFlash() {
  const d = APP.data;
  const fcstats = store().fcstats || {};
  const weakCats = weakCategories();
  const all = d.flashcards.map(card => ({ card, key: fcKey(card) }));

  const struggling = all.filter(x => {
    const st = fcstats[x.key];
    return st && st.a > st.g;
  });
  const unseenWeak = all.filter(x => !fcstats[x.key]?.g && weakCats.includes(x.card.cat));
  const reviewWeak = all
    .filter(x => {
      const st = fcstats[x.key];
      return st?.g && weakCats.includes(x.card.cat) && (st.a > 0 || (st.last || 0) < Date.now() - 7 * 86400000);
    })
    .sort((a, b) => (fcstats[a.key].last || 0) - (fcstats[b.key].last || 0));
  const unseenOther = all.filter(x => !fcstats[x.key]?.g && !weakCats.includes(x.card.cat));

  const target = Math.min(CRAM_FLASH_TARGET, all.length);
  const pick = [];
  const used = new Set();
  const take = arr => {
    for (const x of arr) {
      if (pick.length >= target) break;
      if (!used.has(x.key)) { used.add(x.key); pick.push(x.card); }
    }
  };

  take(shuffle(struggling));
  const nAgain = pick.length;
  take(shuffle(unseenWeak));
  const nWeakNew = pick.length - nAgain;
  take(reviewWeak);
  const nReview = pick.length - nAgain - nWeakNew;
  take(shuffle(unseenOther));
  const nFresh = pick.length - nAgain - nWeakNew - nReview;

  return { cards: pick, counts: { again: nAgain, weakNew: nWeakNew, review: nReview, fresh: nFresh }, weakCats };
}

function startCramFlash() {
  const c = buildCramFlash();
  if (!c.cards.length) { alert("No flashcards available for a cram deck yet!"); return; }
  APP.flash = {
    cat: "cram",
    deck: shuffle(c.cards),
    i: 0,
    done: 0,
    total: c.cards.length,
    flipped: false,
    cram: c,
  };
  APP.view = "flash";
  render();
}

function cramFlashDesc(c) {
  const parts = [];
  if (c.counts.again) parts.push("<b>" + c.counts.again + "</b> need review");
  if (c.counts.weakNew) parts.push("<b>" + c.counts.weakNew + "</b> new from weak topics");
  if (c.counts.review) parts.push("<b>" + c.counts.review + "</b> weak-topic review");
  if (c.counts.fresh) parts.push("<b>" + c.counts.fresh + "</b> fresh");
  return parts.join(" · ") + " &nbsp;🎯 " + c.weakCats.map(id => catIcon(id) + " " + esc(catName(id))).join(", ");
}

function cramDesc(c) {
  const parts = [];
  if (c.counts.missed) parts.push("<b>" + c.counts.missed + "</b> missed");
  if (c.counts.weakNew) parts.push("<b>" + c.counts.weakNew + "</b> new from weak topics");
  if (c.counts.review) parts.push("<b>" + c.counts.review + "</b> weak-topic review");
  if (c.counts.fresh) parts.push("<b>" + c.counts.fresh + "</b> fresh");
  return parts.join(" · ") + " &nbsp;🎯 " + c.weakCats.map(id => catIcon(id) + " " + esc(catName(id))).join(", ");
}

function renderQuizQuestion() {
  const z = APP.quiz;
  const item = z.qs[z.i];
  const q = item.q;
  const answered = item.chosen !== null;
  const letters = "ABCDE";

  const choices = item.choices.map((c, i) => {
    let cls = "choice";
    if (answered) {
      if (c.correct) cls += " correct";
      else if (i === item.chosen) cls += " wrong";
    }
    return `<button class="${cls}" data-action="quizAnswer" data-arg="${i}" ${answered ? "disabled" : ""}><span class="letter">${letters[i]}</span><span>${c.t}</span></button>`;
  }).join("");

  let feedback = "";
  if (answered) {
    const right = item.choices[item.chosen].correct;
    feedback = `<div class="explain${right ? "" : " bad"}">
      <div class="verdict">${right ? "✅ Nailed it!" : "❌ Not this time — and that's how we learn."}</div>
      ${q.exp}
    </div>` + (q.tip ? '<div class="tipbox">🧠 <b>Test tip:</b> ' + q.tip + "</div>" : "") +
    `<div class="btn-row"><button class="btn" data-action="quizNext">${z.i + 1 < z.qs.length ? "Next question →" : "See my results 🎉"}</button></div>`;
  }

  return `<div class="card">
    ${z.cram ? '<div class="cramstrip">🔥 <b>Cram session:</b> ' + cramDesc(z.cram) + "</div>" : ""}
    <div class="qmeta">
      <span>${z.cram ? "🔥 " : ""}Question ${z.i + 1} / ${z.qs.length}</span>
      <span>${catIcon(q.cat)} ${esc(catName(q.cat))} · Score ${z.correct}/${z.i + (answered ? 1 : 0)}</span>
    </div>
    <div class="bar thin" style="margin-top:8px"><i style="width:${Math.round(100 * z.i / z.qs.length)}%"></i></div>
    <div class="stem">${q.stem}</div>
    <div class="choices">${choices}</div>
    ${feedback}
  </div>`;
}

function renderQuizResults() {
  const z = APP.quiz;
  const pct = Math.round(100 * z.correct / z.qs.length);
  if (pct >= 75) setTimeout(confetti, 300);
  const missed = z.qs.filter(it => !it.choices[it.chosen].correct);
  const missedHtml = missed.length
    ? missed.map(it => '<div class="result-item bad"><b>' + catIcon(it.q.cat) + " " + esc(catName(it.q.cat)) + ":</b> " + it.q.stem + "<br><b>Answer:</b> " + it.q.choices[it.q.answer] + "</div>").join("")
    : '<p class="sub">Perfect round — nothing missed! 🏆</p>';
  return `<div class="card center">
    <h2>${pct >= 75 ? "🎉 Crushed it!" : pct >= 50 ? "💪 Solid work!" : "🌱 Growth round!"}</h2>
    ${scoreRing(pct)}
    <p class="sub">${z.correct} of ${z.qs.length} correct · +${z.correct * 10} XP earned</p>
    ${z.cram ? '<p class="sub">🔥 Missed bank after this session: <b>' + Object.keys(store().missed || {}).filter(id => qById(id)).length + "</b> question(s) left to conquer</p>" : ""}
    <div class="btn-row" style="justify-content:center">
      ${missed.length ? '<button class="btn" data-action="quizRetryMissed">🔁 Retry the ' + missed.length + ' missed</button>' : ""}
      ${z.cram ? '<button class="btn" data-action="startCram">🔥 New cram session</button>' : ""}
      <button class="btn ghost" data-action="quizAgain">⚡ New quiz</button>
    </div>
  </div>
  <div class="card"><h2>Review</h2><div class="result-list">${missedHtml}</div></div>`;
}

/* ================= EXAM SIM ================= */
const EXAM_SECONDS_PER_Q = 60;

function renderExam() {
  if (!APP.exam) return renderExamSetup();
  if (APP.exam.finished) return renderExamResults();
  return renderExamRun();
}

function renderExamSetup() {
  const total = APP.data.questions.length;
  return `<div class="card">
    <h2>⏱️ Exam Simulator</h2>
    <p class="sub">Real test conditions: a running clock, no feedback until the end, and a flag button for the two-pass strategy. The real ${esc(APP.data.examName)} gives you about a minute per question — so does this.</p>
    <h3>Length</h3>
    <div class="checks" id="examLen">
      <label class="on"><input type="radio" name="elen" value="20" checked>20 questions · 20 min</label>
      <label><input type="radio" name="elen" value="40">40 questions · 40 min</label>
      <label><input type="radio" name="elen" value="999">Full bank (${total}) · ${total} min</label>
    </div>
    <div class="btn-row"><button class="btn" data-action="startExam">Start the clock →</button></div>
  </div>`;
}

function startExam(len) {
  const qs = shuffle(APP.data.questions).slice(0, len);
  APP.exam = {
    qs: prepQuestions(qs),
    i: 0,
    secondsLeft: qs.length * EXAM_SECONDS_PER_Q,
    running: true,
    finished: false,
    timerId: null,
  };
  render();
}

function examTick() {
  const e = APP.exam;
  if (!e || !e.running) return;
  e.secondsLeft--;
  const chip = $("#examTimer");
  if (chip) {
    chip.textContent = fmtTime(e.secondsLeft);
    chip.classList.toggle("low", e.secondsLeft <= 120);
  }
  if (e.secondsLeft <= 0) submitExam(true);
}
function fmtTime(s) {
  s = Math.max(0, s);
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
}

function renderExamRun() {
  const e = APP.exam;
  const item = e.qs[e.i];
  const q = item.q;
  const letters = "ABCDE";
  const choices = item.choices.map((c, i) =>
    `<button class="choice${item.chosen === i ? " picked" : ""}" data-action="examChoose" data-arg="${i}"><span class="letter">${letters[i]}</span><span>${c.t}</span></button>`
  ).join("");

  const palette = e.qs.map((it, i) =>
    `<button class="${it.chosen !== null ? "answered " : ""}${i === e.i ? "current " : ""}${it.flagged ? "flagged" : ""}" data-action="examNav" data-arg="${i}">${i + 1}</button>`
  ).join("");

  const answeredN = e.qs.filter(it => it.chosen !== null).length;

  return `<div class="card">
    <div class="qmeta">
      <span>Question ${e.i + 1} / ${e.qs.length}</span>
      <span class="timerchip${e.secondsLeft <= 120 ? " low" : ""}" id="examTimer">${fmtTime(e.secondsLeft)}</span>
    </div>
    <div class="stem">${q.stem}</div>
    <div class="choices">${choices}</div>
    <div class="btn-row">
      <button class="btn ghost small" data-action="examPrev" ${e.i === 0 ? "disabled" : ""}>← Back</button>
      <button class="btn ghost small" data-action="examFlag">${item.flagged ? "🚩 Unflag" : "🏳️ Flag for review"}</button>
      <button class="btn small" data-action="examNext" ${e.i === e.qs.length - 1 ? "disabled" : ""}>Next →</button>
      <span style="margin-left:auto" class="sub">${answeredN}/${e.qs.length} answered</span>
    </div>
    <div class="palette">${palette}</div>
    <div class="btn-row"><button class="btn" data-action="examSubmit">Submit exam ✔</button></div>
  </div>`;
}

function submitExam(auto) {
  const e = APP.exam;
  if (!e || e.finished) return;
  const unanswered = e.qs.filter(it => it.chosen === null).length;
  if (!auto && unanswered > 0 && !confirm("You still have " + unanswered + " unanswered question" + (unanswered === 1 ? "" : "s") + ". Submit anyway?")) return;
  if (e.timerId) { clearInterval(e.timerId); e.timerId = null; }
  e.running = false;
  e.finished = true;
  e.correct = 0;
  for (const it of e.qs) {
    const right = it.chosen !== null && it.choices[it.chosen].correct;
    if (right) e.correct++;
    recordAnswer(it.q.id, right);
  }
  const pct = Math.round(100 * e.correct / e.qs.length);
  const s = store();
  s.exams = s.exams || [];
  s.exams.push({ date: Date.now(), correct: e.correct, total: e.qs.length, pct });
  saveStore(s);
  render();
}

function renderExamResults() {
  const e = APP.exam;
  const pct = Math.round(100 * e.correct / e.qs.length);
  if (pct >= 75) setTimeout(confetti, 300);

  // by-category breakdown
  const byCat = {};
  for (const it of e.qs) {
    byCat[it.q.cat] = byCat[it.q.cat] || { a: 0, c: 0 };
    byCat[it.q.cat].a++;
    if (it.chosen !== null && it.choices[it.chosen].correct) byCat[it.q.cat].c++;
  }
  let catRows = "";
  for (const cid in byCat) {
    const st = byCat[cid];
    const p = Math.round(100 * st.c / st.a);
    catRows += '<div class="cat-row"><div class="cat-head"><span>' + catIcon(cid) + " " + esc(catName(cid)) + "</span><span>" + st.c + "/" + st.a + "</span></div><div class='bar thin'><i style='width:" + p + "%'></i></div></div>";
  }

  const review = e.qs.map((it, n) => {
    const right = it.chosen !== null && it.choices[it.chosen].correct;
    return `<div class="result-item ${right ? "good" : "bad"}">
      <b>Q${n + 1} ${right ? "✅" : "❌"}</b> ${it.q.stem}<br>
      ${right ? "" : "<b>Your answer:</b> " + (it.chosen === null ? "<i>blank</i>" : it.choices[it.chosen].t) + "<br>"}
      <b>Correct:</b> ${it.q.choices[it.q.answer]}<br>
      <span class="sub">${it.q.exp}</span>
    </div>`;
  }).join("");

  return `<div class="card center">
    <h2>${pct >= 75 ? "🎉 You'd pass with style!" : pct >= 60 ? "💪 Almost there — review and rematch!" : "🌱 Good reps. Every miss is a future point."}</h2>
    ${scoreRing(pct)}
    <p class="sub">${e.correct} of ${e.qs.length} correct</p>
    <div class="btn-row" style="justify-content:center">
      <button class="btn" data-action="examAgain">⏱️ New exam sim</button>
      <button class="btn ghost" data-action="nav" data-arg="missed">🔁 Drill my misses</button>
    </div>
  </div>
  <div class="grid2">
    <div class="card"><h2>By topic</h2>${catRows}</div>
    <div class="card"><h2>Pacing</h2><p class="sub" style="line-height:1.7">Time used: <b>${fmtTime(e.qs.length * EXAM_SECONDS_PER_Q - Math.max(0, e.secondsLeft))}</b> of ${fmtTime(e.qs.length * EXAM_SECONDS_PER_Q)}.<br>On the real exam, bank ~1 minute per question. Flag anything that takes longer than 90 seconds and come back on pass two.</p></div>
  </div>
  <div class="card"><h2>Full review</h2><div class="result-list">${review}</div></div>`;
}

/* ================= MISSED ================= */
function renderMissed() {
  const s = store();
  const ids = Object.keys(s.missed || {}).filter(id => qById(id));
  if (!ids.length) {
    return `<div class="card"><div class="empty"><span class="bigemoji">🌟</span>
      No missed questions waiting for review.<br>Answer questions in Quiz or Exam Sim and anything you miss collects here until you beat it.
    </div></div>`;
  }
  const list = ids.map(id => {
    const q = qById(id);
    return '<div class="result-item bad">' + catIcon(q.cat) + " <b>" + esc(catName(q.cat)) + ":</b> " + q.stem + "</div>";
  }).join("");
  return `<div class="card">
    <h2>🔁 Missed Question Bank (${ids.length})</h2>
    <p class="sub">These stay here until you answer them correctly. Beating your old misses is the highest-yield studying there is.</p>
    <div class="btn-row"><button class="btn" data-action="missedDrill">🥊 Drill all ${ids.length} now</button></div>
    <div class="result-list">${list}</div>
  </div>`;
}

/* ================= score ring & confetti ================= */
function scoreRing(pct) {
  const r = 60, c = 2 * Math.PI * r;
  const off = c * (1 - pct / 100);
  return `<div class="scorering"><div class="ring-wrap">
    <svg class="ring" width="140" height="140">
      <defs><linearGradient id="gradRing" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent2)"/>
      </linearGradient></defs>
      <circle class="track" cx="70" cy="70" r="${r}" fill="none" stroke-width="12"/>
      <circle class="fill" cx="70" cy="70" r="${r}" fill="none" stroke-width="12"
        stroke-dasharray="${c}" stroke-dashoffset="${off}"/>
    </svg>
    <div class="ring-label">${pct}%<small>score</small></div>
  </div></div>`;
}

function confetti() {
  const old = $("#confetti"); if (old) old.remove();
  const cv = document.createElement("canvas");
  cv.id = "confetti";
  cv.width = innerWidth; cv.height = innerHeight;
  document.body.appendChild(cv);
  const ctx = cv.getContext("2d");
  const colors = [getComputedStyle(document.documentElement).getPropertyValue("--accent"), getComputedStyle(document.documentElement).getPropertyValue("--accent2"), "#f0b429", "#1fa36a", "#4a7dff"];
  const ps = Array.from({ length: 140 }, () => ({
    x: Math.random() * cv.width,
    y: -20 - Math.random() * cv.height * 0.5,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 8,
    vy: 2.5 + Math.random() * 3.5,
    vx: -1.5 + Math.random() * 3,
    rot: Math.random() * Math.PI,
    vr: -0.15 + Math.random() * 0.3,
    col: colors[Math.floor(Math.random() * colors.length)],
  }));
  let frames = 0;
  (function loop() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const p of ps) {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (++frames < 220) requestAnimationFrame(loop);
    else cv.remove();
  })();
  // safety net: if the tab is backgrounded, rAF can stall indefinitely —
  // force-remove the overlay after a few seconds regardless.
  setTimeout(() => { const c = $("#confetti"); if (c) c.remove(); }, 6000);
}

/* ================= events ================= */
document.addEventListener("click", e => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const act = el.dataset.action;
  const arg = el.dataset.arg;

  if (act === "nav") go(arg);

  /* quiz */
  else if (act === "startQuiz") {
    const cats = $$(".quizCat:checked").map(i => i.value);
    const lenEl = document.querySelector('input[name="qlen"]:checked');
    const len = lenEl ? parseInt(lenEl.value) : 10;
    const pool = APP.data.questions.filter(q => cats.includes(q.cat));
    if (!pool.length) { alert("Pick at least one topic!"); return; }
    startQuiz(pool, len);
  }
  else if (act === "quizAnswer") {
    const z = APP.quiz; const item = z.qs[z.i];
    if (item.chosen !== null) return;
    item.chosen = parseInt(arg);
    const right = item.choices[item.chosen].correct;
    if (right) z.correct++;
    recordAnswer(item.q.id, right);
    render();
  }
  else if (act === "quizNext") {
    const z = APP.quiz;
    if (z.i + 1 < z.qs.length) { z.i++; render(); }
    else { z.finished = true; render(); }
  }
  else if (act === "quizRetryMissed") {
    const missed = APP.quiz.qs.filter(it => !it.choices[it.chosen].correct).map(it => it.q);
    startQuiz(missed, missed.length);
  }
  else if (act === "quizAgain") { APP.quiz = null; render(); }
  else if (act === "startCram") {
    const c = buildCram();
    if (!c.qs.length) { alert("No questions available for a cram session yet!"); return; }
    APP.quiz = { qs: prepQuestions(shuffle(c.qs)), i: 0, correct: 0, finished: false, results: [], cram: c };
    APP.view = "quiz";
    render();
  }
  else if (act === "startCramFlash") startCramFlash();

  /* flashcards */
  else if (act === "startFlashDeck") {
    const sel = $("#flashTopic");
    startFlash(sel ? sel.value : "all");
    render();
  }
  else if (act === "flashDone") { APP.flash = null; render(); }
  else if (act === "flashFlip") { APP.flash.flipped = !APP.flash.flipped; render(); }
  else if (act === "flashGot") {
    const f = APP.flash;
    const card = f.deck[f.i];
    if (card) recordFcGot(card);
    f.done++; f.i++; f.flipped = false;
    touchStreak(); addXP(2);
    render();
  }
  else if (act === "flashAgain") {
    const f = APP.flash;
    const card = f.deck.splice(f.i, 1)[0];
    if (card) recordFcAgain(card);
    const insertAt = Math.min(f.deck.length, f.i + 4 + Math.floor(Math.random() * 3));
    f.deck.splice(insertAt, 0, card);
    f.flipped = false;
    render();
  }
  else if (act === "flashRestart") {
    if (APP.flash.cram) startCramFlash();
    else startFlash(APP.flash.cat);
    render();
  }

  /* exam */
  else if (act === "startExam") {
    const lenEl = document.querySelector('input[name="elen"]:checked');
    startExam(lenEl ? parseInt(lenEl.value) : 20);
  }
  else if (act === "examChoose") {
    const ex = APP.exam; const item = ex.qs[ex.i];
    item.chosen = (item.chosen === parseInt(arg)) ? null : parseInt(arg);
    // auto-advance if newly answered and not last question
    if (item.chosen !== null && ex.i < ex.qs.length - 1) ex.i++;
    render();
  }
  else if (act === "examNav") { APP.exam.i = parseInt(arg); render(); }
  else if (act === "examPrev") { APP.exam.i = Math.max(0, APP.exam.i - 1); render(); }
  else if (act === "examNext") { APP.exam.i = Math.min(APP.exam.qs.length - 1, APP.exam.i + 1); render(); }
  else if (act === "examFlag") {
    const item = APP.exam.qs[APP.exam.i];
    item.flagged = !item.flagged;
    render();
  }
  else if (act === "examSubmit") submitExam(false);
  else if (act === "examAgain") { APP.exam = null; render(); }

  /* missed */
  else if (act === "missedDrill") {
    const s = store();
    const qs = Object.keys(s.missed || {}).map(qById).filter(Boolean);
    startQuiz(qs, qs.length);
    APP.view = "quiz";
    render();
  }

  /* settings / backup / install */
  else if (act === "openSettings") openSettings();
  else if (act === "closeSettings") closeSettings();
  else if (act === "exportProgress") exportProgress();
  else if (act === "triggerImport") $("#importFile").click();
  else if (act === "promptInstall") promptInstallApp();
  else if (act === "dismissInstallBanner") {
    const g = gstore(); g.dismissedInstallBanner = true; saveGstore(g);
    render();
  }
});

// checkbox/radio pill styling + change-based actions
document.addEventListener("change", e => {
  const el = e.target;
  if (el.matches(".checks input")) {
    if (el.type === "radio") {
      $$('input[name="' + el.name + '"]').forEach(r => r.closest("label").classList.toggle("on", r.checked));
    } else {
      el.closest("label").classList.toggle("on", el.checked);
    }
  }
  const act = el.dataset.actionChange;
  if (!act) return;
  if (act === "setExamDate") {
    const s = store(); s.examDate = el.value || null; saveStore(s); render();
  }
  else if (act === "flashFilter") { startFlash(el.value); render(); }
});

$("#rotationSelect").addEventListener("change", e => selectRotation(e.target.value));

const importInput = $("#importFile");
if (importInput) {
  importInput.addEventListener("change", async e => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    const replace = confirm(
      "Import backup?\n\nOK = replace ALL current progress with this backup\nCancel = merge (keep current data for anything not in the backup)"
    );
    const merge = !replace;
    setImportStatus("Importing…");
    try {
      const result = await importProgress(file, merge);
      const when = result.exportedAt ? new Date(result.exportedAt).toLocaleDateString() : "unknown date";
      setImportStatus("Restored " + result.keys + " data key(s) from backup dated " + when + ".", "ok");
      renderChips();
      if (APP.rotation) go("home");
      else render();
    } catch (err) {
      setImportStatus(err.message || "Import failed.", "err");
    }
  });
}

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  updateInstallSection();
  if (APP.view === "home") render();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  updateInstallSection();
  updateOfflineStatus();
  if (APP.view === "home") render();
});

window.addEventListener("online", updateOfflineStatus);
window.addEventListener("offline", updateOfflineStatus);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSettings();
});

/* ================= init ================= */
(function init() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(err => console.warn("SW registration failed:", err));
  }

  const m = window.STUDY_MANIFEST;
  if (!m || !m.rotations || !m.rotations.length) {
    $("#app").innerHTML = '<div class="card center"><p>⚠️ No rotations found in data/manifest.js</p></div>';
    return;
  }
  $("#rotationSelect").innerHTML = m.rotations.map(r => '<option value="' + r.id + '">' + r.icon + " " + esc(r.name) + "</option>").join("");
  const last = gstore().lastRotation;
  const startId = m.rotations.some(r => r.id === last) ? last : m.rotations[0].id;
  renderChips();
  updateOfflineStatus();
  selectRotation(startId);
})();
