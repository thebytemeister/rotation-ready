/* Women's Health — question bank part 2 (contraception + OB) */
window.__ROT = window.__ROT || {};
window.__ROT["womens-health"] = window.__ROT["womens-health"] || {};
window.__ROT["womens-health"].questions = (window.__ROT["womens-health"].questions || []).concat([

  /* ============ CONTRACEPTION & INFERTILITY ============ */
  {
    id: "con-01", cat: "contraception",
    stem: "A 24-year-old woman requests birth control pills. She has migraines preceded by 20 minutes of flashing zigzag lines in her vision. Blood pressure is normal and she does not smoke. What is the most appropriate recommendation?",
    choices: [
      "A progestin-only method such as the implant or progestin-only pill",
      "A standard combined oral contraceptive",
      "A low-dose estrogen combined pill",
      "The contraceptive vaginal ring"
    ],
    answer: 0,
    exp: "Migraine with aura is an absolute contraindication to all estrogen-containing contraception (pill, patch, ring) because of synergistic ischemic stroke risk. Progestin-only methods — implant, levonorgestrel IUD, progestin-only pills, Depo — are safe alternatives. Lowering the estrogen dose does not remove the contraindication.",
    tip: "Scan contraception stems for the word 'aura.' If it's there, every estrogen option is automatically wrong."
  },
  {
    id: "con-02", cat: "contraception",
    stem: "A 26-year-old woman had unprotected intercourse 4 days ago and wants the most effective option to prevent pregnancy. She is also interested in long-term contraception. What do you recommend?",
    choices: [
      "Copper IUD insertion",
      "Oral levonorgestrel now",
      "Combined OCPs started today",
      "Wait and take a pregnancy test in 1 week"
    ],
    answer: 0,
    exp: "The copper IUD is the most effective emergency contraception (>99%), remains effective up to 5 days after intercourse, and provides ongoing contraception for a decade — perfectly matching her goals. Levonorgestrel's efficacy falls significantly by day 4; ulipristal would be the better oral choice at this point but still trails the IUD.",
    tip: "EC effectiveness ladder: copper IUD > ulipristal > levonorgestrel. 'Most effective' + 'wants ongoing contraception' double-points to the IUD."
  },
  {
    id: "con-03", cat: "contraception",
    stem: "A 21-year-old woman chooses depot medroxyprogesterone acetate (Depo-Provera) for contraception. About which adverse effect carrying a boxed warning should she be counseled?",
    choices: [
      "Loss of bone mineral density",
      "Ovarian cysts",
      "Severe hypertension",
      "Hepatic adenoma"
    ],
    answer: 0,
    exp: "DMPA carries an FDA boxed warning for loss of bone mineral density, which is largely reversible after discontinuation; counseling also covers weight gain, irregular bleeding, and delayed return of fertility (up to 10–18 months). Encourage calcium, vitamin D, and weight-bearing exercise.",
    tip: "Each contraceptive has one signature fact the exam fixates on. Depo's is bone density."
  },
  {
    id: "con-04", cat: "contraception",
    stem: "A 29-year-old woman and her 31-year-old partner have been attempting pregnancy for 14 months without success. Her cycles are regular, every 28 days. What is the most appropriate initial test?",
    choices: [
      "Semen analysis",
      "Hysterosalpingogram",
      "Diagnostic laparoscopy",
      "Antral follicle count by ultrasound"
    ],
    answer: 0,
    exp: "Male factor contributes to roughly half of infertility cases, and semen analysis is noninvasive and inexpensive — it is always part of the initial evaluation, alongside confirming ovulation. Invasive tests like HSG and especially laparoscopy come later in the algorithm.",
    tip: "Start cheap and noninvasive. When 'semen analysis' appears in an infertility question, it is almost always the first step."
  },
  {
    id: "con-05", cat: "contraception",
    stem: "During an infertility evaluation, which test best confirms that a woman with 28-day cycles is ovulating?",
    choices: [
      "Serum progesterone drawn on approximately day 21",
      "Serum estradiol on day 3",
      "LH level on day 1 of menses",
      "Endometrial biopsy in the follicular phase"
    ],
    answer: 0,
    exp: "A mid-luteal serum progesterone (about 7 days before expected menses — day 21 of a 28-day cycle) above 3 ng/mL confirms ovulation, since progesterone is produced by the corpus luteum only after an egg is released. Day-3 labs assess ovarian reserve, not ovulation.",
    tip: "Anchor it to physiology: progesterone only exists in quantity AFTER ovulation, so you measure it mid-luteal."
  },
  {
    id: "con-06", cat: "contraception",
    stem: "A 30-year-old woman with PCOS has been unable to conceive due to anovulation. She has lost weight and optimized lifestyle factors. What is the first-line agent for ovulation induction?",
    choices: [
      "Letrozole",
      "Combined oral contraceptives",
      "Metformin monotherapy",
      "Human chorionic gonadotropin injections"
    ],
    answer: 0,
    exp: "Letrozole, an aromatase inhibitor, is first-line for ovulation induction in PCOS, with higher live-birth rates than clomiphene in this population. OCPs prevent pregnancy, and metformin alone is inferior for achieving live birth.",
    tip: "PCOS + wants baby = letrozole. PCOS + doesn't want baby = OCPs. Two flashcards, many points."
  },
  {
    id: "con-07", cat: "contraception",
    stem: "A 33-year-old woman is 4 weeks postpartum and exclusively breastfeeding. She wants to start hormonal contraception today. Which option is most appropriate?",
    choices: [
      "Progestin-only pill",
      "Combined estrogen-progestin pill",
      "Contraceptive patch",
      "Vaginal ring"
    ],
    answer: 0,
    exp: "Progestin-only methods can begin immediately postpartum and do not affect milk supply. Estrogen-containing methods (pill, patch, ring) are avoided in the early postpartum period because of elevated VTE risk and potential effects on lactation — generally deferred at least 3–6 weeks, longer when breastfeeding.",
    tip: "Postpartum + breastfeeding = progestin-only. All three wrong answers here are the same drug class in disguise — spotting that kills 3 distractors at once."
  },

  /* ============ NORMAL PREGNANCY & PRENATAL CARE ============ */
  {
    id: "ob-01", cat: "pregnancy",
    stem: "A patient's last menstrual period began on March 10. Using Naegele's rule, what is her estimated date of delivery?",
    choices: [
      "December 17",
      "December 10",
      "January 3",
      "November 27"
    ],
    answer: 0,
    exp: "Naegele's rule: add 7 days to the first day of the LMP, then subtract 3 months (and add a year). March 10 + 7 days = March 17; minus 3 months = December 17. First-trimester ultrasound remains the most accurate dating method when available.",
    tip: "Do the math in the stated order (add 7 first, then subtract months) — flipping the order is how people end up one week off."
  },
  {
    id: "ob-02", cat: "pregnancy",
    stem: "A healthy 27-year-old G1P0 presents for a routine visit at 26 weeks' gestation. Which screening test is most appropriate at this visit?",
    choices: [
      "50-g 1-hour glucose challenge test",
      "Group B Streptococcus rectovaginal culture",
      "Cell-free DNA aneuploidy screening",
      "Rubella titer"
    ],
    answer: 0,
    exp: "Universal screening for gestational diabetes with the 50-g, 1-hour glucose challenge occurs at 24–28 weeks. GBS culture belongs at 36–37 weeks, cfDNA screening is offered from 10 weeks, and rubella immunity is checked at the initial visit.",
    tip: "Match the test to the week and the question answers itself: 10 cfDNA / 18-22 anatomy / 24-28 glucose / 28 RhoGAM / 36-37 GBS."
  },
  {
    id: "ob-03", cat: "pregnancy",
    stem: "A 30-year-old G2P1 at 28 weeks is blood type A, Rh-negative, with a negative antibody screen. The father's Rh status is unknown. What is the most appropriate management?",
    choices: [
      "Administer anti-D immune globulin (RhoGAM) now",
      "Repeat the antibody screen at 36 weeks and treat only if positive",
      "Withhold RhoGAM unless the newborn is Rh-positive",
      "Transfuse Rh-negative blood prophylactically"
    ],
    answer: 0,
    exp: "Unsensitized Rh-negative women receive anti-D immune globulin routinely at 28 weeks, again within 72 hours of delivering an Rh-positive infant, and after any potential fetomaternal hemorrhage (bleeding, trauma, amniocentesis, ectopic, miscarriage). Waiting until delivery risks sensitization during the third trimester.",
    tip: "RhoGAM timing is a pure memorization point: 28 weeks + 72 hours post-delivery + any bleeding event. Free points if you know it cold."
  },
  {
    id: "ob-04", cat: "pregnancy",
    stem: "A 24-year-old G1P0 at 36 weeks' gestation has a positive group B Streptococcus rectovaginal culture. She has no drug allergies. What is the most appropriate management?",
    choices: [
      "Intravenous penicillin G during labor",
      "Oral amoxicillin for 10 days now",
      "IV penicillin now and during labor",
      "Cesarean delivery to prevent transmission"
    ],
    answer: 0,
    exp: "GBS colonization is treated with intrapartum IV penicillin G to prevent early-onset neonatal sepsis. Treating before labor doesn't eradicate colonization (it recolonizes), and cesarean delivery does not reliably prevent transmission and isn't indicated for GBS alone.",
    tip: "The key word is 'intrapartum.' Antibiotics given at any other time are distractors."
  },
  {
    id: "ob-05", cat: "pregnancy",
    stem: "A 28-year-old woman planning pregnancy had a previous child with spina bifida. What dose of folic acid should she take, beginning at least 1 month before conception?",
    choices: [
      "4 mg daily",
      "400 mcg daily",
      "1 mg daily",
      "No supplementation needed if diet is adequate"
    ],
    answer: 0,
    exp: "Women with a prior pregnancy affected by a neural tube defect take high-dose folic acid, 4 mg daily, starting at least a month before conception and through the first trimester. Average-risk women take 400 mcg daily. Diet alone is unreliable for this level of supplementation.",
    tip: "Two folic acid numbers: 400 mcg routine, 4 mg with prior NTD or antiepileptic use — a 10-fold jump."
  },
  {
    id: "ob-06", cat: "pregnancy",
    stem: "A laboring G1P0 has regular contractions every 3 minutes. Cervical examination shows 8 cm dilation, 100% effacement, and +1 station. Which stage and phase of labor is she in?",
    choices: [
      "First stage, active phase",
      "First stage, latent phase",
      "Second stage",
      "Third stage"
    ],
    answer: 0,
    exp: "The first stage of labor lasts from onset until complete (10 cm) dilation; the active phase begins at about 6 cm, so 8 cm places her in first stage, active phase. The second stage spans full dilation to delivery of the infant, and the third stage ends with delivery of the placenta.",
    tip: "Active labor now officially starts at 6 cm. Stems quoting 4–5 cm are testing whether you'll prematurely call it 'active.'"
  },
  {
    id: "ob-07", cat: "pregnancy",
    stem: "During labor, a fetal heart tracing shows decelerations that begin after the peak of each contraction and return to baseline after the contraction ends. What is the most likely cause?",
    choices: [
      "Uteroplacental insufficiency",
      "Fetal head compression",
      "Umbilical cord compression",
      "Maternal fever"
    ],
    answer: 0,
    exp: "Decelerations that lag behind the contraction — beginning after its peak — are late decelerations, indicating uteroplacental insufficiency. Initial management: reposition the mother, give oxygen and IV fluids, and stop oxytocin; if they persist, expedite delivery. Early decels mirror contractions (head compression, benign) and variables are abrupt (cord compression).",
    tip: "VEAL CHOP: Variable–Cord, Early–Head, Accels–Okay, Late–Placenta. Match the timing word in the stem to the mnemonic."
  },

  /* ============ PREGNANCY COMPLICATIONS ============ */
  {
    id: "pc-01", cat: "complications",
    stem: "A 27-year-old woman with 7 weeks of amenorrhea has right lower quadrant pain and light spotting. She is hemodynamically stable. β-hCG is 4,100 mIU/mL, and transvaginal ultrasound shows no intrauterine pregnancy and a 2.4-cm right adnexal mass without cardiac activity. She has no liver or kidney disease. What is the most appropriate management?",
    choices: [
      "Methotrexate",
      "Emergent laparotomy",
      "Repeat hCG in 1 week and re-image",
      "Misoprostol"
    ],
    answer: 0,
    exp: "An hCG above the discriminatory zone (~3,500) with no intrauterine pregnancy on transvaginal ultrasound plus an adnexal mass establishes ectopic pregnancy. She meets methotrexate criteria: stable, unruptured, mass <3.5 cm, no fetal cardiac activity, hCG <5,000. Watchful waiting at this hCG level risks rupture; surgery is for instability, rupture, or methotrexate contraindications.",
    tip: "Memorize the methotrexate eligibility checklist as a package — stems are engineered to either satisfy all criteria or obviously break one."
  },
  {
    id: "pc-02", cat: "complications",
    stem: "A 34-year-old G1P0 at 35 weeks has a blood pressure of 168/112 mm Hg, severe headache, and 3+ proteinuria. Platelets are 88,000/µL. In addition to antihypertensive therapy and delivery planning, what medication should be started immediately?",
    choices: [
      "Intravenous magnesium sulfate",
      "Oral low-dose aspirin",
      "Furosemide",
      "Phenytoin"
    ],
    answer: 0,
    exp: "She has preeclampsia with severe features (BP ≥160/110, thrombocytopenia, headache). IV magnesium sulfate is given for eclamptic seizure prophylaxis, alongside antihypertensives such as labetalol or hydralazine, with delivery as the definitive treatment. Aspirin is for prevention earlier in pregnancy, and magnesium is superior to conventional anticonvulsants here.",
    tip: "Severe preeclampsia = three simultaneous moves: magnesium, BP control, plan delivery. The question usually asks for the one not already listed in the stem."
  },
  {
    id: "pc-03", cat: "complications",
    stem: "A woman receiving a magnesium sulfate infusion for severe preeclampsia becomes lethargic. Examination shows absent deep tendon reflexes and a respiratory rate of 7 breaths per minute. After stopping the infusion, what is the most appropriate treatment?",
    choices: [
      "Intravenous calcium gluconate",
      "Naloxone",
      "Sodium bicarbonate",
      "Flumazenil"
    ],
    answer: 0,
    exp: "Absent reflexes and respiratory depression indicate magnesium toxicity; the antidote is IV calcium gluconate, which directly antagonizes magnesium's effects. Lost deep tendon reflexes are the earliest warning sign — check them serially in every patient on magnesium.",
    tip: "Tox questions reward instant pairs: magnesium → calcium gluconate, opioids → naloxone, benzos → flumazenil. No partial credit for hesitation."
  },
  {
    id: "pc-04", cat: "complications",
    stem: "A 31-year-old G3P2 at 31 weeks presents with painless, bright-red vaginal bleeding that started after intercourse. Fetal heart tones are reassuring and her abdomen is soft and nontender. What is the most appropriate next step?",
    choices: [
      "Transabdominal ultrasound before any cervical examination",
      "Immediate digital cervical examination",
      "Sterile speculum exam followed by digital exam",
      "Discharge home with pelvic rest instructions"
    ],
    answer: 0,
    exp: "Painless third-trimester bleeding is placenta previa until proven otherwise, and a digital cervical exam can provoke catastrophic hemorrhage — ultrasound must localize the placenta first. Management of confirmed previa includes pelvic rest and cesarean delivery; discharge without localization is unsafe.",
    tip: "'Painless bleeding' + any answer choice with fingers in the cervix = automatic elimination. The exam tests this restraint constantly."
  },
  {
    id: "pc-05", cat: "complications",
    stem: "A 29-year-old G2P1 at 34 weeks presents after a motor vehicle collision with constant severe abdominal pain and dark vaginal bleeding. The uterus is rigid and tender, and fetal monitoring shows recurrent late decelerations. What is the most likely diagnosis?",
    choices: [
      "Placental abruption",
      "Placenta previa",
      "Vasa previa",
      "Uterine rupture"
    ],
    answer: 0,
    exp: "Painful bleeding with a rigid, tender uterus and fetal distress after trauma is placental abruption — premature separation of the placenta. Other major risks include hypertension, cocaine use, and smoking; severe cases cause DIC. Previa is painless, vasa previa presents with fetal bleeding at membrane rupture, and uterine rupture classically follows prior uterine surgery with loss of fetal station.",
    tip: "Build the contrast table in your head: previa = painless/soft; abruption = painful/rigid; rupture = prior C-section + 'something gave way.'"
  },
  {
    id: "pc-06", cat: "complications",
    stem: "A 30-year-old G1P0 at 27 weeks has a 1-hour glucose challenge of 162 mg/dL, followed by a 3-hour 100-g OGTT with three abnormal values. Two weeks of diet and exercise fail to control fasting glucose. What is the first-line pharmacologic therapy?",
    choices: [
      "Insulin",
      "Glyburide",
      "Sitagliptin",
      "GLP-1 receptor agonist"
    ],
    answer: 0,
    exp: "Gestational diabetes not controlled by lifestyle measures is treated first-line with insulin, which does not cross the placenta. Oral agents like metformin or glyburide are second-line alternatives in select situations, and newer agents lack pregnancy safety data. Untreated GDM risks macrosomia, shoulder dystocia, and neonatal hypoglycemia.",
    tip: "Pregnancy pharm defaults to the oldest, best-studied option. For glucose in pregnancy, that's insulin."
  },
  {
    id: "pc-07", cat: "complications",
    stem: "An 8-week pregnant woman has nausea and vomiting several times daily but maintains her weight and stays hydrated. Dietary modification has not helped. What is the most appropriate first-line pharmacologic therapy?",
    choices: [
      "Pyridoxine (vitamin B6) plus doxylamine",
      "Ondansetron",
      "Promethazine",
      "Methylprednisolone"
    ],
    answer: 0,
    exp: "First-line pharmacotherapy for nausea and vomiting of pregnancy is pyridoxine, alone or combined with doxylamine — safe and effective. Ondansetron and promethazine are reserved for refractory cases, and steroids are a last resort for severe hyperemesis. True hyperemesis gravidarum (weight loss >5%, ketosis) warrants IV fluids and thiamine before dextrose.",
    tip: "Stepwise ladders are testable at the BOTTOM rung. The 'best initial' answer is rarely the strongest drug on the list."
  },
  {
    id: "pc-08", cat: "complications",
    stem: "A 24-year-old woman at 9 weeks' gestation has vaginal spotting and mild cramping. The cervical os is closed. Ultrasound shows an intrauterine pregnancy with normal fetal cardiac activity. What is the diagnosis?",
    choices: [
      "Threatened abortion",
      "Inevitable abortion",
      "Incomplete abortion",
      "Missed abortion"
    ],
    answer: 0,
    exp: "Vaginal bleeding before 20 weeks with a closed cervical os and a viable intrauterine pregnancy defines threatened abortion — the only type that can continue to a normal pregnancy. An open os makes it inevitable; passed tissue with an open os is incomplete; fetal demise with a closed os and no symptoms is missed. Give RhoGAM if she is Rh-negative.",
    tip: "Classify abortions with just two findings: is the os open or closed, and has tissue passed? Build that 2×2 and these become free points."
  },

  /* ============ LABOR, DELIVERY & POSTPARTUM ============ */
  {
    id: "pp-01", cat: "postpartum",
    stem: "Ten minutes after a vaginal delivery and intact placenta delivery, a woman has brisk vaginal bleeding. The uterine fundus is soft, boggy, and above the umbilicus. What are the most appropriate initial interventions?",
    choices: [
      "Bimanual fundal massage and intravenous oxytocin",
      "Immediate hysterectomy",
      "Uterine artery embolization",
      "Vaginal packing alone"
    ],
    answer: 0,
    exp: "A boggy uterus signals uterine atony, the cause of about 80% of postpartum hemorrhage. First-line management is bimanual fundal massage with IV oxytocin; escalation includes methylergonovine (avoid in hypertension), carboprost (avoid in asthma), misoprostol, tranexamic acid, balloon tamponade, and surgery last. The placenta was intact, making retained tissue less likely.",
    tip: "Treatment-order questions: pick the least invasive effective step. Hysterectomy sitting among the choices is bait."
  },
  {
    id: "pp-02", cat: "postpartum",
    stem: "During a vaginal delivery of an infant with an estimated weight of 4,300 g, the fetal head delivers but then retracts against the perineum, and gentle downward traction fails to deliver the anterior shoulder. What is the most appropriate next maneuver?",
    choices: [
      "Hyperflex the maternal hips onto the abdomen and apply suprapubic pressure",
      "Apply firm fundal pressure",
      "Attempt immediate vacuum extraction",
      "Perform emergency cesarean delivery without further maneuvers"
    ],
    answer: 0,
    exp: "The turtle sign indicates shoulder dystocia. The first maneuvers are McRoberts positioning (sharply hyperflexing the hips) combined with suprapubic — never fundal — pressure, which resolves most cases. Fundal pressure worsens impaction and risks uterine rupture; vacuum on an impacted shoulder compounds injury. Complications include brachial plexus palsy and clavicular fracture.",
    tip: "One word separates right from catastrophic: SUPRApubic pressure helps, FUNDAL pressure harms."
  },
  {
    id: "pp-03", cat: "postpartum",
    stem: "Two days after a cesarean delivery, a 26-year-old woman has a temperature of 38.7°C, uterine fundal tenderness, and foul-smelling lochia. What is the most appropriate treatment?",
    choices: [
      "Intravenous clindamycin plus gentamicin",
      "Oral nitrofurantoin",
      "Oral dicloxacillin",
      "Supportive care; this is normal involution"
    ],
    answer: 0,
    exp: "Postpartum fever with uterine tenderness and foul lochia is endometritis — the most common postpartum infection, with cesarean delivery the biggest risk factor. Treatment is broad-spectrum IV clindamycin plus gentamicin until afebrile 24–48 hours. Nitrofurantoin treats cystitis and dicloxacillin treats mastitis; neither covers this polymicrobial pelvic infection.",
    tip: "Localize postpartum fever by exam: tender uterus = endometritis, tender red breast = mastitis, dysuria = UTI. The exam finding picks the antibiotic."
  },
  {
    id: "pp-04", cat: "postpartum",
    stem: "Five days after delivering a healthy infant, a 31-year-old woman reports tearfulness, irritability, and trouble sleeping. She is eating well, caring for the baby attentively, and denies thoughts of self-harm or harming the infant. What is the most appropriate management?",
    choices: [
      "Reassurance with scheduled follow-up within 2 weeks",
      "Start sertraline",
      "Psychiatric hospitalization",
      "Start an antipsychotic"
    ],
    answer: 0,
    exp: "Mood lability peaking around postpartum day 4–5 with preserved function and no concerning thoughts is postpartum blues, which affects most new mothers and resolves within 2 weeks — reassurance and follow-up suffice. Symptoms lasting beyond 2 weeks or impairing function suggest postpartum depression (screen with the Edinburgh scale, treat with therapy and an SSRI); any psychotic features or thoughts of harm are an emergency.",
    tip: "The differentiators are duration (2-week line) and function. Read the stem for both before touching the answers."
  },
  {
    id: "pp-05", cat: "postpartum",
    stem: "A 33-year-old woman suffered a massive postpartum hemorrhage requiring transfusion. Six weeks later, she has been unable to produce breast milk, remains amenorrheic, and feels profoundly fatigued with dizziness on standing. What is the most likely diagnosis?",
    choices: [
      "Postpartum pituitary necrosis (Sheehan syndrome)",
      "Postpartum thyroiditis",
      "Postpartum depression",
      "Prolactinoma"
    ],
    answer: 0,
    exp: "Severe obstetric hemorrhage can infarct the enlarged, hyperemic pituitary, causing Sheehan syndrome — panhypopituitarism whose earliest clue is failure of lactation (lost prolactin), with amenorrhea (lost gonadotropins) and adrenal insufficiency symptoms (lost ACTH). Workup shows low pituitary hormones; treatment is hormone replacement, corticosteroids first.",
    tip: "The stem formula is rigid: big hemorrhage + can't breastfeed = Sheehan. The hemorrhage detail exists solely to give it away."
  },
  {
    id: "pp-06", cat: "postpartum",
    stem: "A 47-year-old G3P3 leaks small amounts of urine when she coughs, laughs, or plays tennis. She has no urgency or nocturia, and post-void residual is normal. What is the most appropriate initial management?",
    choices: [
      "Pelvic floor muscle (Kegel) training",
      "Oxybutynin",
      "Midurethral sling surgery",
      "Indwelling catheter"
    ],
    answer: 0,
    exp: "Leakage with increases in intra-abdominal pressure and no urgency is stress urinary incontinence from urethral hypermobility. First-line treatment is pelvic floor muscle training (with weight loss if applicable); pessaries and midurethral slings follow if conservative care fails. Antimuscarinics like oxybutynin treat urge incontinence, a different mechanism.",
    tip: "Match the verb to the type: leaks when she LAUGHS = stress = Kegels; leaks when she suddenly MUST GO = urge = bladder training/antimuscarinics."
  },
  {
    id: "pp-07", cat: "postpartum",
    stem: "A 62-year-old G4P4 reports a sensation of vaginal fullness and a bulge that worsens by the end of the day. Examination during Valsalva shows descent of the anterior vaginal wall. She wants to avoid surgery. What is the most appropriate management?",
    choices: [
      "Vaginal pessary with pelvic floor muscle training",
      "Anterior colporrhaphy",
      "Hysterectomy",
      "Oral oxybutynin"
    ],
    answer: 0,
    exp: "Anterior vaginal wall descent is a cystocele. For a patient declining surgery, a vaginal pessary combined with pelvic floor muscle training is the appropriate conservative management. Colporrhaphy is the surgical repair she has declined, and oxybutynin addresses overactive bladder, not prolapse.",
    tip: "When the stem states a preference ('wants to avoid surgery'), it has already eliminated the surgical answers for you. Take the gift."
  }
]);
