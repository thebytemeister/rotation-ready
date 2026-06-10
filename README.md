# 🩺 RotationReady — PA EOR Study Studio

A fun, interactive study guide + practice-test app built for PA students prepping for
**PAEA End of Rotation (EOR) exams**. No installation, no account, no internet required —
it's a single web app that runs straight from this folder.

Ships fully loaded with a **Women's Health** module (57 exam-style questions with
explanations, 40 flashcards, and a high-yield study guide) organized around the PAEA
Women's Health EOR blueprint.

---

## ▶️ How to run it

**Just double-click `index.html`.** That's it — it opens in your browser and works offline.

Tip: right-click `index.html` → *Send to → Desktop (create shortcut)* and rename it
something motivational. 💪

All progress (scores, streaks, XP, missed questions, exam date) is saved automatically in
the browser via localStorage — so always use the same browser to keep the streak alive.

---

## ✨ What's inside

| Mode | What it does |
|---|---|
| 🏠 **Home** | Exam-date countdown, mastery-by-topic bars (find weak areas fast), streak, XP & level, recent exam scores |
| 📖 **Study** | Test-day strategy guide (built for test anxiety) + high-yield study guide with 💎 pearls per blueprint topic |
| 🃏 **Flashcards** | Flip cards by topic; "Again later" recycles a card back into the deck until it sticks |
| ⚡ **Quiz** | Pick topics & length, get instant feedback with full explanations and 🧠 test-taking tips after every question |
| ⏱️ **Exam Sim** | Real test conditions: ~1 min/question timer, no feedback until the end, flag-for-review, question palette, score report by topic |
| 🔁 **Missed** | Every question ever missed collects here until it's answered correctly — the highest-yield drill there is |

Confetti is involved when scores are good. This is non-negotiable. 🎉

---

## 🔄 Changing rotations (the whole point!)

Each rotation lives in its own folder under `data/` and is registered in
[`data/manifest.js`](data/manifest.js). The rotation picker in the app's header switches
between any rotations listed there — each keeps its own progress, colors, and content.

### Adding the next rotation (e.g., Pediatrics) in 2 steps

**Step 1 — Generate the content.** Open Claude Code in this folder and paste a prompt like:

> Add a new **Pediatrics** rotation to my RotationReady app. Study the existing
> `data/womens-health/` files (`module.js`, `flashcards.js`, `questions-1.js`,
> `questions-2.js`) and create the same structure in `data/pediatrics/`, registered under
> the id `"pediatrics"`. Base the categories on the **PAEA Pediatrics EOR topic list**.
> Write ~55 board-style questions with explanations and test-taking tips, ~40 flashcards,
> and a high-yield study guide with pearls, matching the tone and quality of the Women's
> Health module. Then register it in `data/manifest.js` with a fun icon and a new accent
> color.

**Step 2 — Refresh the browser.** The new rotation appears in the header dropdown. Done.

The same recipe works for any rotation: Family Medicine, Internal Medicine, Emergency
Medicine, Surgery, Pediatrics, Psychiatry/Behavioral Health — each has a published PAEA
EOR blueprint to anchor the content.

### Data format (if you want to hand-edit)

Each rotation folder contains plain JavaScript files that register data:

- `module.js` — name, icon, categories, test-day advice, study-guide topics (with pearls)
- `flashcards.js` — `{ cat, front, back }` cards
- `questions-*.js` — `{ id, cat, stem, choices[], answer (index), exp, tip }` questions

Questions can be split across multiple `questions-*.js` files; they concatenate
automatically. Add or edit content freely — just keep `id`s unique (they key the
progress tracking).

---

## ⚠️ The fine print

This is a **study aid built with love, not a medical reference**. Content was written to
reflect commonly tested guidelines as of 2026, but guidelines change and exams vary —
always verify against current course materials, PAEA blueprints, and primary sources.
Spotted an error? Edit the question file directly, or ask Claude Code to fix it.

Good luck on the Women's Health EOR. You've got this. 🌸
