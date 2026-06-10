/* QA: cram + exam logic smoke tests (node scripts/qa_logic.mjs) */
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const WH = "data/womens-health";

function loadQuestions() {
  const files = readdirSync(WH).filter(f => f.startsWith("questions-")).sort();
  const questions = [];
  for (const f of files) {
    const t = readFileSync(join(WH, f), "utf8");
    for (const block of t.split(/\{\s*\n/).slice(1)) {
      const id = block.match(/id:\s*"([^"]+)"/)?.[1];
      const cat = block.match(/cat:\s*"([^"]+)"/)?.[1];
      if (id && cat) questions.push({ id, cat });
    }
  }
  return questions;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCram(questions, stats, missedMap, categories, target = 25) {
  const byCat = {};
  for (const c of categories) byCat[c.id] = { a: 0, c: 0 };
  for (const q of questions) {
    const st = stats[q.id];
    if (st && byCat[q.cat]) { byCat[q.cat].a += st.a; byCat[q.cat].c += st.c; }
  }
  const rank = categories
    .map(c => ({ id: c.id, acc: byCat[c.id].a ? byCat[c.id].c / byCat[c.id].a : 0.6 }))
    .sort((a, b) => a.acc - b.acc);
  const weakCats = rank.slice(0, 3).map(r => r.id);
  const qById = id => questions.find(q => q.id === id);
  const missed = Object.keys(missedMap).map(qById).filter(Boolean);
  const unseenWeak = questions.filter(q => !stats[q.id] && weakCats.includes(q.cat) && !missedMap[q.id]);
  const seenWeak = questions.filter(q => stats[q.id] && weakCats.includes(q.cat) && !missedMap[q.id])
    .sort((a, b) => (stats[a.id].last || 0) - (stats[b.id].last || 0));
  const unseenOther = questions.filter(q => !stats[q.id] && !weakCats.includes(q.cat));
  const pick = [];
  const used = new Set();
  const take = arr => { for (const q of arr) { if (pick.length >= target) break; if (!used.has(q.id)) { used.add(q.id); pick.push(q); } } };
  take(shuffle(missed));
  take(shuffle(unseenWeak));
  take(seenWeak);
  take(shuffle(unseenOther));
  return { pick, weakCats };
}

const cats = [
  { id: "menses" }, { id: "infections" }, { id: "neoplasms" }, { id: "breast" },
  { id: "contraception" }, { id: "pregnancy" }, { id: "complications" }, { id: "postpartum" },
];
const questions = loadQuestions();
const ids = questions.map(q => q.id);
let errors = 0;

if (new Set(ids).size !== ids.length) { console.error("FAIL: duplicate ids"); errors++; }
if (questions.length < 133) { console.error(`FAIL: expected >=133 questions, got ${questions.length}`); errors++; }

const stats = {};
const missedMap = { "br-01": true, "con-02": true, "neo-03": true };
for (const id of ["br-01", "con-02", "neo-03", "ob-05", "pc-08"]) {
  stats[id] = { a: 3, c: id.startsWith("ob") ? 3 : 0, last: Date.now() - 100000 };
}
const cram = buildCram(questions, stats, missedMap, cats);
if (!cram.pick.length) { console.error("FAIL: cram empty"); errors++; }
if (!cram.pick.some(q => missedMap[q.id])) { console.error("FAIL: cram missing misses"); errors++; }
console.log(`Cram: ${cram.pick.length} q, misses included=${cram.pick.filter(q => missedMap[q.id]).length}, weak=${cram.weakCats.join(",")}`);

const examQs = shuffle(questions).slice(0, Math.min(999, questions.length));
if (examQs.length !== questions.length) { console.error("FAIL: full bank exam count"); errors++; }
console.log(`Exam full bank: ${examQs.length} questions (${examQs.length} min)`);

if (errors) process.exit(1);
console.log("QA logic checks: PASS");