/* Women's Health — module metadata, categories, advice & study guide */
window.__ROT = window.__ROT || {};
window.__ROT["womens-health"] = window.__ROT["womens-health"] || {};
window.__ROT["womens-health"].module = {
  id: "womens-health",
  name: "Women's Health",
  icon: "🌸",
  examName: "Women's Health EOR",
  tagline: "Built around the PAEA Women's Health End-of-Rotation blueprint: OB, GYN, breast, contraception & everything between.",

  categories: [
    { id: "menses",        name: "Menstruation & Menopause",        icon: "🩸" },
    { id: "infections",    name: "Vaginitis, STIs & PID",           icon: "🦠" },
    { id: "neoplasms",     name: "GYN Neoplasms & Screening",       icon: "🎗️" },
    { id: "breast",        name: "Breast Disorders",                icon: "🎀" },
    { id: "contraception", name: "Contraception & Infertility",     icon: "💊" },
    { id: "pregnancy",     name: "Normal Pregnancy & Prenatal Care",icon: "🤰" },
    { id: "complications", name: "Pregnancy Complications",         icon: "🚨" },
    { id: "postpartum",    name: "Labor, Delivery & Postpartum",    icon: "👶" }
  ],

  advice: [
    "<b>Two-pass method:</b> On pass one, answer everything you know in under ~60 seconds and flag the rest. On pass two, return to flags. This guarantees you bank every easy point before time pressure hits.",
    "<b>Read the actual question first.</b> Jump to the last sentence of the stem (\"What is the most appropriate next step?\") before reading the vignette — then you read the story already knowing what you're hunting for.",
    "<b>Predict before you peek.</b> Try to answer in your head before looking at the choices. If your prediction is listed, that's powerful evidence it's right and the distractors lose their pull.",
    "<b>Eliminate two, then commit.</b> Almost every question has two obviously wrong answers. Cross them off, make your best call between the rest, and move on. A 50/50 you commit to beats a 100% you never reach because you ran out of time.",
    "<b>Don't change answers without a reason.</b> Only switch if you find concrete evidence you misread something. First instincts are right more often than not.",
    "<b>Key words change everything:</b> \"most common,\" \"most likely,\" \"initial step,\" \"definitive,\" \"confirmatory.\" The <i>initial</i> test (ultrasound) and the <i>definitive</i> test (biopsy) are usually both in the choices — read which one they want.",
    "<b>Never leave a blank.</b> There's no penalty for guessing. Pick a 'letter of the day' for total unknowns and keep moving.",
    "<b>Keep an error log.</b> After every quiz, write one sentence per miss: \"Lesson: painless 3rd-trimester bleeding = previa, no digital exam.\" The Missed tab here collects them automatically — drill it until it's empty.",
    "<b>Simulate the real thing weekly.</b> Use Exam Sim mode with the timer. Test-day anxiety shrinks when the format feels boring and familiar.",
    "<b>Test-day reset:</b> If panic spikes mid-block, put the pencil down for 20 seconds and breathe in 4, hold 7, out 8. One slow breath costs you nothing; spiraling costs you ten questions."
  ],

  topics: [
    /* ---------- menses ---------- */
    {
      cat: "menses", title: "Amenorrhea — the workup",
      bullets: [
        "<b>Primary:</b> no menses by age 15 <i>with</i> normal secondary sex characteristics, or by 13 with none. <b>Secondary:</b> no menses ×3 months (previously regular) or ×6 months (irregular).",
        "Step 1 in EVERY amenorrhea question: <b>pregnancy test</b> (hCG). It is always the first answer.",
        "Then: TSH, prolactin, FSH. <b>High FSH</b> = ovarian failure (Turner 45,X if primary; primary ovarian insufficiency if &lt;40). <b>Low/normal FSH</b> = hypothalamic (stress, athletics, eating disorders) or pituitary.",
        "Turner syndrome: short stature, webbed neck, streak ovaries, ↑FSH — diagnose with <b>karyotype</b>.",
        "Functional hypothalamic amenorrhea (female athlete triad): low energy availability + menstrual dysfunction + low bone density. Treat the energy deficit."
      ],
      pearl: "Amenorrhea question? The answer is hCG first. Every time. Even when the vignette screams something else."
    },
    {
      cat: "menses", title: "PCOS",
      bullets: [
        "<b>Rotterdam criteria — need 2 of 3:</b> oligo/anovulation, hyperandrogenism (hirsutism, acne, or ↑testosterone), polycystic ovaries on ultrasound.",
        "Associated: obesity, insulin resistance, ↑LH:FSH ratio, acanthosis nigricans, infertility.",
        "Not pregnancy-seeking → <b>combined OCPs</b> first line (regulates cycles, lowers androgens) + weight loss. Metformin for metabolic features.",
        "Wants pregnancy → <b>letrozole</b> is first-line ovulation induction (beats clomiphene in PCOS).",
        "Chronic anovulation = unopposed estrogen = <b>↑ endometrial cancer risk</b> — another reason to cycle them with OCPs or progestins."
      ],
      pearl: "Overweight patient + irregular periods + hirsutism = PCOS until proven otherwise. First-line depends on one question: does she want to get pregnant?"
    },
    {
      cat: "menses", title: "Dysmenorrhea, AUB & PMDD",
      bullets: [
        "<b>Primary dysmenorrhea</b> (teens, normal exam, prostaglandin-driven): <b>NSAIDs</b> started at or just before menses onset; OCPs second line.",
        "<b>Secondary dysmenorrhea</b> red flags: pain starting years after menarche, dyspareunia, infertility → think endometriosis (definitive dx: laparoscopy) or adenomyosis (boggy, globular, tender uterus).",
        "<b>AUB in women ≥45</b> (or younger with obesity/anovulation risk): <b>endometrial biopsy</b> to exclude hyperplasia/cancer.",
        "Acute heavy bleeding stabilization: IV estrogen or high-dose OCP taper; chronic AUB: OCPs, levonorgestrel IUD (great for menorrhagia), tranexamic acid.",
        "<b>PMDD</b>: severe mood symptoms confined to the luteal phase, resolve with menses → <b>SSRIs</b> first line (daily or luteal-phase only)."
      ],
      pearl: "16-year-old with crampy periods and a normal exam needs ibuprofen, not an ultrasound. 46-year-old with new heavy irregular bleeding needs a biopsy, not reassurance."
    },
    {
      cat: "menses", title: "Menopause & GSM",
      bullets: [
        "Diagnosis is clinical: <b>12 consecutive months of amenorrhea</b> (average age 51-52). Labs rarely needed; FSH is elevated.",
        "Vasomotor symptoms (hot flashes, night sweats): most effective tx = <b>systemic HRT</b> — use lowest dose, shortest duration; women with a uterus must get estrogen + progestin (unopposed estrogen → endometrial cancer).",
        "HRT contraindications: breast cancer, CAD, prior VTE/stroke, undiagnosed vaginal bleeding, active liver disease.",
        "Nonhormonal options for hot flashes: SSRIs/SNRIs (venlafaxine, paroxetine), gabapentin, fezolinetant.",
        "<b>Genitourinary syndrome of menopause</b> (dryness, dyspareunia, recurrent UTI) with no vasomotor symptoms → <b>low-dose vaginal estrogen</b>, not systemic."
      ],
      pearl: "If her ONLY complaint is vaginal dryness/dyspareunia, the answer is vaginal (local) estrogen — systemic HRT is the trap answer."
    },

    /* ---------- infections ---------- */
    {
      cat: "infections", title: "Vaginitis: BV vs Candida vs Trich",
      bullets: [
        "<b>Bacterial vaginosis:</b> thin gray-white discharge, fishy odor, pH &gt;4.5, <b>clue cells</b>, + whiff test. NOT inflamed (no itching/redness). Tx: <b>metronidazole</b> ×7d. Partners NOT treated.",
        "<b>Candida:</b> thick white 'cottage cheese' discharge, intense itching, normal pH (&lt;4.5), <b>pseudohyphae on KOH</b>. Tx: fluconazole 150 mg ×1 or topical azoles. Risk: antibiotics, diabetes, pregnancy.",
        "<b>Trichomoniasis:</b> frothy yellow-green malodorous discharge, <b>strawberry cervix</b>, pH &gt;4.5, motile flagellated organisms on wet mount. Tx: <b>metronidazole — and treat the partner</b> (it's an STI; the other two are not).",
        "Counsel about alcohol with metronidazole (disulfiram-like reaction)."
      ],
      pearl: "Three discharges, three buzzwords: clue cells = BV, pseudohyphae = yeast, motile organisms + strawberry cervix = trich. Only trich gets partner treatment."
    },
    {
      cat: "infections", title: "Chlamydia, Gonorrhea, Syphilis, HSV, HPV",
      bullets: [
        "<b>Chlamydia</b> (most common bacterial STI; often asymptomatic): NAAT to diagnose. Tx: <b>doxycycline 100 mg BID ×7d</b>; in pregnancy: <b>azithromycin 1 g ×1</b> + test of cure in 4 weeks. Screen all sexually active women ≤24 annually.",
        "<b>Gonorrhea:</b> ceftriaxone 500 mg IM ×1 (add doxy if chlamydia not excluded). Can cause disseminated infection: arthritis-dermatitis syndrome.",
        "<b>Syphilis:</b> painless chancre (primary) → rash on palms/soles + condyloma lata (secondary). Screen with RPR/VDRL, confirm treponemal. Tx all early stages: <b>benzathine penicillin G 2.4 MU IM ×1</b>. Pregnant + PCN-allergic → desensitize, still give penicillin.",
        "<b>HSV:</b> painful grouped vesicles/ulcers; dx PCR. Acyclovir/valacyclovir for episodes or daily suppression. Pregnancy: <b>suppression from 36 weeks</b>; active lesions in labor = cesarean.",
        "<b>HPV:</b> 6 & 11 → genital warts; <b>16 & 18 → cervical cancer</b>. Gardasil routinely at 11-12 (can start 9, catch-up through 26)."
      ],
      pearl: "Painful ulcer = herpes. Painless ulcer = syphilis. Palms-and-soles rash = secondary syphilis. These three associations alone earn multiple points per exam."
    },
    {
      cat: "infections", title: "PID & its aftermath",
      bullets: [
        "Diagnosis is clinical: lower abdominal pain + <b>cervical motion tenderness</b> (chandelier sign), uterine or adnexal tenderness ± fever, discharge. Caused by chlamydia/gonorrhea ascending.",
        "<b>Outpatient tx: ceftriaxone 500 mg IM ×1 + doxycycline ×14d + metronidazole ×14d.</b>",
        "Admit for: pregnancy, tubo-ovarian abscess, failed oral therapy, vomiting/unable to tolerate PO, severe illness.",
        "<b>Tubo-ovarian abscess:</b> PID + adnexal mass on imaging → admit, IV antibiotics ± drainage.",
        "<b>Fitz-Hugh–Curtis:</b> PID + RUQ pain from perihepatitis ('violin-string' adhesions).",
        "Long-term complications: infertility, <b>ectopic pregnancy</b>, chronic pelvic pain — this is why aggressive treatment matters."
      ],
      pearl: "Sexually active woman + lower abdominal pain + cervical motion tenderness = treat as PID. The bar for treating is intentionally low because the cost of missing it is fertility."
    },

    /* ---------- neoplasms ---------- */
    {
      cat: "neoplasms", title: "Cervical cancer screening & dysplasia",
      bullets: [
        "<b>Start Paps at 21</b> regardless of sexual debut. <b>21–29: cytology alone every 3 years.</b> 30–65: cytology q3y, OR primary hrHPV q5y, OR co-testing q5y. Stop at 65 with adequate prior negative screening.",
        "No screening &lt;21 and no routine screening after hysterectomy for benign disease.",
        "Persistent high-risk <b>HPV (16/18)</b> is THE cause of cervical cancer. Other risks: smoking, immunosuppression, early coitarche, multiple partners.",
        "Abnormal cytology → reflex HPV / colposcopy per ASCCP risk-based guidelines; high-grade lesions (CIN 2-3) → excision (LEEP) or ablation.",
        "Classic cancer presentation: <b>postcoital bleeding</b>; advanced: watery malodorous discharge, pelvic pain. Diagnose with biopsy."
      ],
      pearl: "Memorize '21, 3, 30, 5': start at 21, every 3 years; at 30 you may switch to HPV-based testing every 5."
    },
    {
      cat: "neoplasms", title: "Uterus: fibroids & endometrial cancer",
      bullets: [
        "<b>Leiomyomas (fibroids):</b> most common benign uterine tumor; heavy prolonged menses, bulk symptoms, <b>enlarged, firm, irregular ('lumpy'), NON-tender uterus</b>. Dx: pelvic ultrasound. Estrogen-sensitive — grow in pregnancy, shrink after menopause.",
        "Fibroid tx ladder: observation if asymptomatic → OCPs/levonorgestrel IUD/tranexamic acid for bleeding → GnRH agonist (leuprolide) to shrink pre-op → myomectomy (fertility-sparing) or hysterectomy (definitive).",
        "<b>Endometrial cancer:</b> most common GYN malignancy. <b>Postmenopausal bleeding = endometrial cancer until proven otherwise → endometrial biopsy</b> (TVUS stripe ≤4 mm is reassuring, but biopsy is definitive).",
        "Risk = unopposed estrogen: obesity, chronic anovulation/PCOS, nulliparity, early menarche/late menopause, tamoxifen, estrogen-only HRT with intact uterus. Protective: OCPs, pregnancy.",
        "<b>Adenomyosis:</b> endometrial glands in myometrium — heavy painful menses + symmetrically enlarged, <b>boggy, TENDER</b> uterus (vs fibroids: irregular, non-tender)."
      ],
      pearl: "Any blood from a postmenopausal uterus buys a biopsy. 'She's probably just atrophic' is how test questions (and real patients) get hurt."
    },
    {
      cat: "neoplasms", title: "Ovary: cysts, torsion & cancer",
      bullets: [
        "<b>Simple functional cyst</b> &lt;5 cm in a premenopausal woman, asymptomatic → expectant management, repeat US in 6-8 weeks. Most resolve.",
        "<b>Ruptured cyst:</b> sudden unilateral pain mid-cycle, often after intercourse, free fluid on US, hemodynamically stable → supportive care/analgesia.",
        "<b>Ovarian torsion:</b> sudden severe unilateral pain + nausea/vomiting + adnexal mass; Doppler may show ↓flow but <b>normal Doppler does NOT exclude it</b> → urgent laparoscopy with detorsion. Surgical emergency — the ovary is dying.",
        "<b>Ovarian cancer:</b> insidious — bloating, early satiety, pelvic pressure, weight change in a woman 50+. Epithelial type most common. CA-125 supports/monitors (NOT a screening test). Risks: BRCA1/2, family hx, nulliparity; OCPs are protective.",
        "Postmenopausal adnexal mass + ascites or ↑CA-125 → surgical exploration/gyn-onc referral."
      ],
      pearl: "Vague GI complaints + bloating in an older woman: examine the pelvis before blaming IBS. Ovarian cancer whispers."
    },

    /* ---------- breast ---------- */
    {
      cat: "breast", title: "Benign breast disease",
      bullets: [
        "<b>Fibroadenoma:</b> young woman (15-35), firm, rubbery, <b>mobile</b>, well-circumscribed, painless mass. Workup for &lt;30: <b>ultrasound</b> (dense tissue makes mammography poor). Observe or excise.",
        "<b>Fibrocystic changes:</b> bilateral lumpy, ropy, <b>cyclically tender</b> breasts, worst premenstrually. Reassurance; supportive bra, ± evening primrose/decreased caffeine.",
        "<b>Simple cyst:</b> US shows anechoic fluid; aspirate if symptomatic — clear fluid + resolution = done; bloody fluid or recurrence → send cytology/biopsy.",
        "<b>Mastitis</b> (lactating, fever, focal wedge of redness): <b>dicloxacillin or cephalexin + CONTINUE breastfeeding/emptying</b>. No improvement or fluctuant mass → ultrasound for <b>abscess</b> → needle aspiration/I&D.",
        "<b>Intraductal papilloma:</b> most common cause of <b>unilateral bloody nipple discharge</b>, often no mass → needs duct excision to exclude carcinoma.",
        "Galactorrhea (bilateral milky, non-lactating): check pregnancy test, <b>prolactin, TSH</b>, review meds (antipsychotics)."
      ],
      pearl: "Age drives breast imaging: under 30 → ultrasound first; 30+ → diagnostic mammogram ± ultrasound. Any suspicious mass ultimately needs tissue (core biopsy)."
    },
    {
      cat: "breast", title: "Breast cancer & screening",
      bullets: [
        "<b>USPSTF (2024): screening mammography every 2 years for ALL women 40–74.</b> High-risk (BRCA, chest radiation) get earlier/supplemental MRI screening.",
        "Most common type: <b>invasive ductal carcinoma</b>; most important risk factors: age, female sex, BRCA1/2, first-degree family hx, prolonged estrogen exposure.",
        "Red flags: hard fixed irregular mass, skin dimpling, nipple retraction, bloody discharge, axillary nodes. Workup: diagnostic mammogram + US → <b>core needle biopsy</b>.",
        "<b>Paget disease of the breast:</b> chronic eczematous, scaly, ulcerated nipple that doesn't respond to topical steroids → biopsy; associated with underlying DCIS/invasive cancer.",
        "<b>Inflammatory breast cancer:</b> rapidly progressive red, warm, swollen breast with <b>peau d'orange</b> — looks like mastitis but in a non-lactating woman or one not responding to antibiotics → skin punch + core biopsy. Aggressive.",
        "Receptors drive therapy: ER/PR+ → tamoxifen (premenopausal) or aromatase inhibitor (postmenopausal); HER2+ → trastuzumab."
      ],
      pearl: "'Mastitis' that fails antibiotics in a test question is inflammatory breast cancer until biopsied. Don't take the abx-refill bait."
    },

    /* ---------- contraception ---------- */
    {
      cat: "contraception", title: "Contraceptive methods & contraindications",
      bullets: [
        "Most effective reversible methods = <b>LARCs</b>: implant (etonogestrel) and IUDs — typical-use failure &lt;1%.",
        "<b>Combined hormonal contraception (pill/patch/ring) — absolute no-go's:</b> migraine WITH aura, smoker ≥35 y/o (≥15 cigs/day), history of VTE/stroke/CAD, breast cancer, uncontrolled HTN, &lt;21 days postpartum, major surgery with immobilization, active liver disease.",
        "If combined is contraindicated → progestin-only pill, implant, Depo, or IUD are fine for almost everyone.",
        "<b>Copper IUD:</b> hormone-free, 10+ years; downside: heavier crampier menses (avoid in menorrhagia). <b>Levonorgestrel IUD:</b> lighter or absent menses — bonus treatment for heavy bleeding.",
        "<b>Depo-Provera:</b> shot q3 months; black-box <b>reversible bone density loss</b>, weight gain, and delayed return to fertility (up to ~10-18 months).",
        "Noncontraceptive OCP perks: ↓ovarian & endometrial cancer, ↓dysmenorrhea, cycle control, ↓acne."
      ],
      pearl: "Migraine with aura + estrogen = stroke risk = wrong answer. The question will dangle a combined pill at her — hand her a progestin-only or LARC option instead."
    },
    {
      cat: "contraception", title: "Emergency contraception",
      bullets: [
        "<b>Copper IUD: most effective EC</b>, works up to 5 days after intercourse — and she leaves with ongoing contraception.",
        "<b>Ulipristal (ella):</b> effective up to 120 hours, prescription only; better than levonorgestrel days 3-5 and at higher body weight.",
        "<b>Levonorgestrel (Plan B):</b> OTC, best within 72 hours; effectiveness drops with time and at higher BMI.",
        "None of these disrupt an established pregnancy — they delay/prevent ovulation or fertilization."
      ],
      pearl: "Ranking to memorize: copper IUD > ulipristal > levonorgestrel. If the stem says 'most effective,' it's the IUD."
    },
    {
      cat: "contraception", title: "Infertility workup",
      bullets: [
        "Define infertility: no conception after <b>12 months</b> of regular unprotected intercourse (&lt;35 y/o) or <b>6 months</b> if ≥35.",
        "Start with the simple stuff: <b>semen analysis</b> (male factor ≈ 40-50% of cases, cheap, noninvasive) + confirm ovulation with <b>mid-luteal (day ~21) serum progesterone</b>.",
        "Tubal patency: <b>hysterosalpingogram (HSG)</b> — especially with a history of PID, ectopic, or endometriosis.",
        "Ovarian reserve if ≥35: AMH, day-3 FSH.",
        "PCOS-related anovulation → <b>letrozole</b> for ovulation induction."
      ],
      pearl: "Test-takers reflexively jump to the female workup. Check the partner's semen analysis first — it finds the answer half the time at a fraction of the cost."
    },

    /* ---------- pregnancy ---------- */
    {
      cat: "pregnancy", title: "Prenatal care timeline (memorize this!)",
      bullets: [
        "<b>EDD — Naegele's rule:</b> LMP + 7 days − 3 months (+1 year). First-trimester ultrasound is the most accurate dating method.",
        "<b>Initial visit labs:</b> CBC, type & screen (Rh!), rubella & varicella immunity, HBsAg, HIV, syphilis, urine culture, chlamydia/gonorrhea, Pap if due. Offer cfDNA aneuploidy screening from 10 weeks.",
        "<b>10-12 wk:</b> fetal heart tones by Doppler. <b>18-22 wk:</b> anatomy ultrasound. Quickening ~18-20 wk (primip), 16-18 (multip). Fundal height ≈ gestational age ±2 cm after 20 wk.",
        "<b>24-28 wk:</b> 50-g 1-hour glucose challenge (GDM screen) + repeat CBC. <b>27-36 wk: Tdap (every pregnancy)</b>. <b>28 wk: RhoGAM if Rh-negative</b> and unsensitized.",
        "<b>36-37 wk:</b> GBS rectovaginal swab → intrapartum penicillin if positive.",
        "Folic acid: <b>400 mcg daily</b> for everyone (start before conception); <b>4 mg if prior neural tube defect</b> or on antiepileptics. Visits: q4wk to 28, q2wk to 36, weekly to delivery."
      ],
      pearl: "The week numbers ARE the test: 10 cfDNA, 18-22 anatomy, 24-28 glucose, 27-36 Tdap, 28 RhoGAM, 36-37 GBS. Make it a song if you have to."
    },
    {
      cat: "pregnancy", title: "Normal labor & delivery",
      bullets: [
        "<b>Stage 1:</b> onset → full dilation (10 cm). Latent phase up to 6 cm; <b>active phase begins at 6 cm</b> (faster dilation expected). <b>Stage 2:</b> full dilation → delivery of baby. <b>Stage 3:</b> delivery of placenta (normal &lt;30 min).",
        "True labor = regular painful contractions + <b>cervical change</b>. Braxton-Hicks = irregular, no cervical change.",
        "Rupture of membranes confirmed by pooling, <b>ferning</b>, nitrazine (blue/alkaline) or commercial tests.",
        "Reassuring fetal heart tracing: baseline 110-160, moderate variability, accelerations. <b>Late decelerations = uteroplacental insufficiency</b> → reposition, O2, fluids, stop oxytocin; persistent → expedite delivery. Variable decels = cord compression.",
        "Cardinal movements: engagement → descent → flexion → internal rotation → extension → external rotation (restitution) → expulsion."
      ],
      pearl: "Decel mnemonic VEAL CHOP: Variable=Cord, Early=Head compression (benign), Accels=OK, Late=Placental insufficiency (the scary one)."
    },

    /* ---------- complications ---------- */
    {
      cat: "complications", title: "Ectopic pregnancy",
      bullets: [
        "Classic triad: <b>amenorrhea + unilateral pelvic pain + vaginal bleeding</b>. Biggest risk factors: prior ectopic, PID/tubal damage, tubal surgery, IUD in place (rare overall but if pregnant, think ectopic).",
        "<b>β-hCG above the discriminatory zone (~3,500) with NO intrauterine pregnancy on transvaginal US = ectopic until proven otherwise.</b>",
        "<b>Methotrexate</b> if: hemodynamically stable, unruptured, mass &lt;3.5 cm, no fetal cardiac activity, hCG &lt;5,000, reliable follow-up, no contraindications (breastfeeding, immunodeficiency, liver/renal disease).",
        "Rupture signs (severe pain, peritoneal signs, shoulder pain, hypotension) → <b>emergent laparoscopy/laparotomy</b>.",
        "Follow hCG to zero after treatment; give RhoGAM if Rh-negative."
      ],
      pearl: "Any reproductive-age woman with abdominal pain gets a pregnancy test. The deadliest miss in this blueprint is the ruptured ectopic nobody tested for."
    },
    {
      cat: "complications", title: "Hypertensive disorders of pregnancy",
      bullets: [
        "<b>Gestational HTN:</b> ≥140/90 ×2 after 20 weeks, no proteinuria. <b>Preeclampsia:</b> that BP + proteinuria OR end-organ signs (platelets &lt;100k, Cr ↑, LFTs ↑, pulmonary edema, headache/visual changes).",
        "<b>Severe features:</b> BP ≥160/110, the end-organ findings above → <b>IV magnesium sulfate (seizure prophylaxis) + antihypertensives (labetalol, hydralazine, nifedipine) + delivery planning</b>. Definitive cure = delivery of the placenta.",
        "<b>Eclampsia</b> = seizures → magnesium bolus, protect airway, deliver once stable. <b>HELLP</b> = Hemolysis, Elevated Liver enzymes, Low Platelets ± RUQ pain — can occur with normal BP!",
        "<b>Magnesium toxicity:</b> first sign = <b>loss of deep tendon reflexes</b>, then respiratory depression → antidote: <b>IV calcium gluconate</b>.",
        "Prevention in high-risk women (prior preeclampsia, chronic HTN, diabetes, CKD, multiples): <b>low-dose aspirin starting at 12 weeks</b>.",
        "ACEIs/ARBs are contraindicated in pregnancy — switch to labetalol or nifedipine."
      ],
      pearl: "Headache + visual changes + RUQ pain after 20 weeks = severe preeclampsia. Check reflexes on every mag patient; absent DTRs = grab the calcium gluconate."
    },
    {
      cat: "complications", title: "Bleeding in pregnancy",
      bullets: [
        "<b>First trimester</b> — abortion types by two findings (os + contents): <b>threatened</b> (closed os, viable IUP — only one that may continue normally), <b>inevitable</b> (open os), <b>incomplete</b> (open os, some tissue passed), <b>complete</b> (everything passed, os closing), <b>missed</b> (fetal demise, closed os, no symptoms).",
        "Management of early loss: expectant, misoprostol, or D&C (required if infected/septic or unstable). Always RhoGAM if Rh-negative.",
        "<b>Placenta previa:</b> PAINLESS bright-red bleeding in 3rd trimester; placenta over the os. <b>NO digital cervical exam!</b> Diagnose with ultrasound; pelvic rest; cesarean delivery.",
        "<b>Placental abruption:</b> PAINFUL bleeding + rigid, tender uterus ± fetal distress; risks: HTN/preeclampsia, <b>cocaine</b>, trauma, smoking, prior abruption. Can cause DIC. Unstable or term → deliver.",
        "<b>Uterine rupture</b> (prior classical cesarean, labor): sudden tearing pain, loss of fetal station, fetal bradycardia → emergent laparotomy."
      ],
      pearl: "Third-trimester bleeding: painless = previa (ultrasound BEFORE any fingers), painful + board-like uterus = abruption. This contrast is basically guaranteed to appear."
    },
    {
      cat: "complications", title: "GDM, hyperemesis & preterm issues",
      bullets: [
        "<b>GDM screening at 24-28 wk:</b> 50-g 1-hr challenge; if ≥130-140 → confirm with 100-g 3-hr OGTT. Management: diet/exercise first; pharm first-line = <b>insulin</b>. Risks: macrosomia, shoulder dystocia, neonatal hypoglycemia; mom's later T2DM (screen 4-12 wk postpartum with 75-g OGTT).",
        "<b>Hyperemesis gravidarum</b> = intractable vomiting + >5% weight loss/ketosis. First-line pharm for nausea of pregnancy: <b>pyridoxine (B6) ± doxylamine</b>; severe → IV fluids, ondansetron/metoclopramide, thiamine before dextrose.",
        "<b>Preterm labor</b> (20-37 wk, contractions + cervical change): <b>betamethasone</b> for lungs (&lt;37 wk, biggest benefit &lt;34), tocolytics (nifedipine, indomethacin &lt;32 wk) to buy 48 hrs, <b>magnesium for neuroprotection &lt;32 wk</b>, penicillin if GBS unknown.",
        "<b>PPROM:</b> rupture before labor &lt;37 wk — sterile speculum exam (pooling/ferning), <b>avoid digital exams</b>, latency antibiotics, steroids; deliver if infection (chorioamnionitis: maternal fever + fundal tenderness + fetal tachycardia → ampicillin/gentamicin + delivery).",
        "Prevent recurrent preterm birth: vaginal progesterone for short cervix."
      ],
      pearl: "Failed the 1-hour glucose? That's a SCREEN — the answer is the 3-hour OGTT, not a GDM diagnosis, not insulin yet. Watch the step you're on."
    },

    /* ---------- postpartum ---------- */
    {
      cat: "postpartum", title: "Delivery emergencies & PPH",
      bullets: [
        "<b>Postpartum hemorrhage</b> = ≥1000 mL or bleeding + hypovolemia signs. The 4 T's: <b>Tone (atony — 80%)</b>, Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy).",
        "<b>Atony</b> (boggy soft uterus): <b>bimanual fundal massage + IV oxytocin</b> first → add methylergonovine (NOT if hypertensive), carboprost (NOT if asthmatic), misoprostol, TXA → balloon tamponade → OR.",
        "<b>Shoulder dystocia</b> ('turtle sign' — head retracts): call for help → <b>McRoberts maneuver (hyperflex hips) + suprapubic pressure</b> → rotational maneuvers/posterior arm. NEVER fundal pressure. Complications: brachial plexus injury (Erb palsy), clavicle fracture.",
        "<b>Retained placenta</b> (>30 min): controlled traction, manual extraction; accreta spectrum if it won't separate.",
        "Umbilical <b>cord prolapse</b>: cord felt/seen after ROM + fetal bradycardia → elevate presenting part, knee-chest position, emergent cesarean."
      ],
      pearl: "Boggy uterus + bleeding = massage and oxytocin before anything fancy. Know the two drug vetoes: methylergonovine–hypertension, carboprost–asthma. Tests love those."
    },
    {
      cat: "postpartum", title: "Postpartum fever & mood",
      bullets: [
        "<b>Endometritis</b> (most common postpartum infection, especially after cesarean): fever ≥24 h postpartum + uterine fundal tenderness + foul lochia → <b>IV clindamycin + gentamicin</b>.",
        "Postpartum fever ddx by site/timing: UTI, wound infection, mastitis, septic pelvic thrombophlebitis (spiking fevers despite abx → add anticoagulation).",
        "<b>Postpartum blues</b> (up to ~80%): tearfulness/mood swings peaking day 4-5, <b>resolves by 2 weeks</b>, functioning preserved → reassurance + follow-up.",
        "<b>Postpartum depression:</b> symptoms ≥2 weeks, impaired function, guilt/anhedonia; screen with <b>Edinburgh scale</b>; tx therapy + SSRI (<b>sertraline</b> preferred while breastfeeding). Onset can be anytime in the first year.",
        "<b>Postpartum psychosis</b> (delusions, hallucinations, thoughts of harming self/infant) = <b>emergency — hospitalize</b>.",
        "<b>Sheehan syndrome:</b> pituitary infarction after massive PPH → <b>failure to lactate</b>, amenorrhea, fatigue/adrenal insufficiency."
      ],
      pearl: "Blues vs depression is a timing-and-function question: under 2 weeks and still functioning = blues; over 2 weeks or can't function = depression. Any psychotic feature = hospital, now."
    },
    {
      cat: "postpartum", title: "Pelvic floor: prolapse & incontinence",
      bullets: [
        "<b>Pelvic organ prolapse</b> (cystocele/rectocele/uterine): bulge sensation, pelvic pressure, worse with standing/end of day; risks: vaginal deliveries, age, obesity, chronic straining.",
        "First-line: <b>pelvic floor muscle training (Kegels) + pessary</b>; surgery for symptomatic prolapse that fails conservative care.",
        "<b>Stress incontinence:</b> leaks with cough/sneeze/laugh/exercise (urethral hypermobility) → Kegels/pelvic floor PT first, pessary, midurethral sling if refractory.",
        "<b>Urge incontinence</b> (overactive bladder): sudden 'gotta go' + frequency/nocturia → bladder training + antimuscarinics (oxybutynin) or mirabegron.",
        "<b>Overflow:</b> dribbling + incomplete emptying (neurogenic, obstruction) → check post-void residual.",
        "Mixed pictures: treat the dominant symptom first."
      ],
      pearl: "Leak with a laugh = stress (think Kegels). Leak after a sudden urge = urge (think bladder training/antimuscarinics). The vignette verb tells you the answer."
    }
  ]
};
