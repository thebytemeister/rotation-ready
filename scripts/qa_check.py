#!/usr/bin/env python3
"""RotationReady data QA — run from repo root."""
import re
import glob
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WH = ROOT / "data" / "womens-health"


def main():
    errors = []
    ids = []
    q_cats = Counter()
    for f in sorted(glob.glob(str(WH / "questions-*.js"))):
        text = Path(f).read_text(encoding="utf-8")
        file_ids = re.findall(r'id:\s*"([^"]+)"', text)
        ids.extend(file_ids)
        q_cats.update(re.findall(r'cat:\s*"([^"]+)"', text))
        stems = len(re.findall(r'\bstem:\s*"', text))
        if stems != len(file_ids):
            errors.append(f"{Path(f).name}: {len(file_ids)} ids vs {stems} stems")

    fc_cats = Counter()
    fc_total = 0
    for f in sorted(glob.glob(str(WH / "flashcards*.js"))):
        text = Path(f).read_text(encoding="utf-8")
        n = len(re.findall(r'\bfront:\s*', text))
        fc_total += n
        fc_cats.update(re.findall(r'cat:\s*"([^"]+)"', text))

    print(f"Questions: {len(ids)}")
    print(f"Flashcards: {fc_total}")

    dupes = [i for i, c in Counter(ids).items() if c > 1]
    if dupes:
        errors.append(f"Duplicate question IDs: {dupes}")
    else:
        print("Duplicate IDs: none")

    print("\nQuestions by category:")
    for cat, n in sorted(q_cats.items()):
        print(f"  {cat}: {n}")
    print("\nFlashcards by category:")
    for cat, n in sorted(fc_cats.items()):
        print(f"  {cat}: {n}")

    manifest = (ROOT / "data" / "manifest.js").read_text(encoding="utf-8")
    for f in sorted(glob.glob(str(WH / "questions-*.js"))):
        name = f"womens-health/{Path(f).name}"
        if name not in manifest:
            errors.append(f"Missing from manifest.js: {name}")
    for f in sorted(glob.glob(str(WH / "flashcards*.js"))):
        name = f"womens-health/{Path(f).name}"
        if name not in manifest:
            errors.append(f"Missing from manifest.js: {name}")

    sw = (ROOT / "sw.js").read_text(encoding="utf-8") if (ROOT / "sw.js").exists() else ""
    for f in sorted(glob.glob(str(WH / "questions-*.js"))) + sorted(glob.glob(str(WH / "flashcards*.js"))):
        name = f"womens-health/{Path(f).name}"
        if sw and name not in sw:
            errors.append(f"Missing from sw.js PRECACHE: {name}")

    if errors:
        print("\nERRORS:")
        for e in errors:
            print(f"  - {e}")
        raise SystemExit(1)
    print("\nQA data checks: PASS")


if __name__ == "__main__":
    main()