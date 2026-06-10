/* Women's Health — question bank part 4 (OB deep-dive wave) */
window.__ROT = window.__ROT || {};
window.__ROT["womens-health"] = window.__ROT["womens-health"] || {};
window.__ROT["womens-health"].questions = (window.__ROT["womens-health"].questions || []).concat([

  /* ============ GYN ROUND-OUT ============ */
  {
    id: "mm-11", cat: "menses",
    stem: "A 54-year-old breast cancer survivor on no current endocrine therapy has severe hot flashes disrupting her sleep. She cannot take estrogen. Which medication is the most appropriate?",
    choices: [
      "Venlafaxine",
      "Combined estrogen-progestin therapy",
      "Vaginal estrogen ring",
      "Black cohosh supplements"
    ],
    answer: 0,
    exp: "With a history of breast cancer, systemic estrogen is contraindicated, so vasomotor symptoms are managed with nonhormonal agents: SNRIs like venlafaxine, SSRIs, gabapentin, or fezolinetant. Vaginal estrogen treats genitourinary symptoms, not hot flashes, and herbal supplements lack consistent evidence. (If she were on tamoxifen, avoid paroxetine and fluoxetine — strong CYP2D6 inhibitors.)",
    tip: "When a stem blocks estrogen, the test wants the named nonhormonal alternative — venlafaxine is the classic. Bonus pairing: tamoxifen + paroxetine = drug interaction trap."
  },
  {
    id: "inf-12", cat: "infections",
    stem: "The mother of a healthy 11-year-old girl asks about preventing HPV-related cancers. What do you recommend?",
    choices: [
      "HPV vaccination now, as part of routine vaccination at age 11–12",
      "Wait until she is sexually active",
      "HPV vaccination only if her Pap test is abnormal",
      "Vaccination is unnecessary if she receives regular Pap tests as an adult"
    ],
    answer: 0,
    exp: "HPV vaccination is routinely recommended at age 11–12 (it can start at 9), with catch-up through age 26 — and it works best given BEFORE exposure, which is exactly why waiting for sexual activity is wrong. Pap testing doesn't begin until 21 and detects disease rather than preventing infection; vaccination and screening are complementary.",
    tip: "Prevention questions reward 'earlier than feels intuitive.' The vaccine's value is highest before any exposure — that logic IS the answer."
  },
  {
    id: "con-10", cat: "contraception",
    stem: "A 27-year-old woman with a BMI of 32 requests oral emergency contraception 4 days (96 hours) after unprotected intercourse. She declines an IUD. Which option is most appropriate?",
    choices: [
      "Ulipristal acetate",
      "Levonorgestrel",
      "Combined estrogen-progestin (Yuzpe) regimen",
      "No oral option works after 72 hours"
    ],
    answer: 0,
    exp: "Ulipristal acetate maintains efficacy through 120 hours and outperforms levonorgestrel between 72 and 120 hours and at higher body weight — both factors apply here. Levonorgestrel is best within 72 hours and loses efficacy at BMI ≥30; the Yuzpe regimen is least effective with the most side effects.",
    tip: "Two stem details — 'past 72 hours' or 'elevated BMI' — both point the oral-EC answer to ulipristal. This question planted both."
  },

  /* ============ NORMAL PREGNANCY & PRENATAL CARE ============ */
  {
    id: "ob-12", cat: "pregnancy",
    stem: "A 38-year-old G1P0 at 16 weeks has a positive cell-free DNA screen for trisomy 21. She wants to know definitively whether her fetus is affected. What is the most appropriate next step?",
    choices: [
      "Amniocentesis for diagnostic karyotype",
      "Repeat cell-free DNA testing",
      "Termination counseling based on the screen alone",
      "Detailed ultrasound alone to confirm"
    ],
    answer: 0,
    exp: "Cell-free DNA is a screening test — even with excellent sensitivity, a positive result requires diagnostic confirmation by karyotype before any irreversible decision: amniocentesis from 15 weeks (or CVS at 10–13 weeks earlier in pregnancy). Repeating the screen adds nothing, and ultrasound findings are supportive, not diagnostic.",
    tip: "Screen vs diagnostic is a whole question genre: cfDNA/quad screen = screening; CVS/amnio = diagnosis. Never let a stem act on a screen alone."
  },
  {
    id: "ob-13", cat: "pregnancy",
    stem: "A 26-year-old G1P0 at 32 weeks has a fundal height of 37 cm. Her dating was confirmed by first-trimester ultrasound. What is the most appropriate next step?",
    choices: [
      "Obstetric ultrasound",
      "Reassurance — this is within normal variation",
      "Immediate induction of labor",
      "Repeat fundal height in 4 weeks"
    ],
    answer: 0,
    exp: "After 20 weeks, fundal height in centimeters should match gestational age within about 2–3 cm. A 5-cm discrepancy warrants ultrasound to evaluate the causes of size-greater-than-dates: polyhydramnios, multiple gestation, macrosomia (think gestational diabetes), or fibroids. Waiting a month delays evaluation of all of them.",
    tip: "Fundal height is a screening tape measure — any significant mismatch buys an ultrasound, never reassurance and never delivery."
  },
  {
    id: "ob-14", cat: "pregnancy",
    stem: "A 24-year-old G1P0 at 19 weeks reports brief, sharp right groin pains when she rolls over in bed or stands quickly. The pain resolves in seconds. Abdominal exam is benign, the cervix is long and closed, and fetal heart tones are normal. What is the most likely diagnosis?",
    choices: [
      "Round ligament pain",
      "Acute appendicitis",
      "Preterm labor",
      "Ovarian torsion"
    ],
    answer: 0,
    exp: "Momentary sharp groin pain triggered by sudden position change in the second trimester, with a completely reassuring exam, is round ligament pain — stretching of the ligament as the uterus grows. Treatment is reassurance, slower position changes, and acetaminophen. Appendicitis is progressive with tenderness; torsion is severe and persistent with vomiting; labor requires contractions and cervical change.",
    tip: "Benign-discomfort questions test your restraint. Seconds-long, movement-triggered, normal exam = reassure. Persistent, progressive, or systemic = investigate."
  },
  {
    id: "ob-15", cat: "pregnancy",
    stem: "A 25-year-old woman at 10 weeks' gestation in October has never received this season's influenza vaccine and is found to be nonimmune to rubella. What is the correct immunization plan?",
    choices: [
      "Inactivated influenza vaccine now; MMR after delivery",
      "Both influenza and MMR vaccines today",
      "MMR today; influenza vaccine after delivery",
      "Defer all vaccines until after delivery"
    ],
    answer: 0,
    exp: "Inactivated influenza vaccine is recommended in any trimester — pregnant women are high-risk for severe influenza. MMR and varicella are LIVE attenuated vaccines, contraindicated during pregnancy, so the rubella-nonimmune mother is vaccinated immediately postpartum (breastfeeding is compatible). Deferring the flu shot leaves her exposed all season.",
    tip: "Sort vaccines into two buckets: give in pregnancy (inactivated flu, Tdap 27–36 wk, COVID), never in pregnancy (MMR, varicella, live nasal flu). The postpartum MMR is the recurring detail."
  },
  {
    id: "ob-16", cat: "pregnancy",
    stem: "An uncomplicated 29-year-old G2P1 reaches 41 weeks' gestation with a normal NST and amniotic fluid volume. The cervix is unfavorable. What is the most appropriate management?",
    choices: [
      "Induction of labor with cervical ripening",
      "Expectant management until 43 weeks",
      "Immediate cesarean delivery",
      "Weekly visits with no additional testing"
    ],
    answer: 0,
    exp: "At 41 weeks, induction of labor is recommended (and should not extend past 42 weeks) because stillbirth, macrosomia, oligohydramnios, and meconium aspiration risks climb in post-term pregnancy. An unfavorable cervix is managed with ripening agents (prostaglandins, balloon), not surgery. Expectant management beyond 42 weeks accepts rising fetal risk for no benefit.",
    tip: "The post-term clock: offer induction at 41 weeks, don't pass 42. An 'unfavorable cervix' means add ripening — it never means cesarean."
  },
  {
    id: "ob-17", cat: "pregnancy",
    stem: "A 31-year-old G2P1 at 37 weeks has a fetus confirmed to be in frank breech presentation. She strongly desires a vaginal delivery. Amniotic fluid is normal and there are no contraindications to labor. What should be offered?",
    choices: [
      "External cephalic version",
      "Scheduled cesarean delivery today without discussion of alternatives",
      "Internal podalic version in early labor",
      "Awaiting spontaneous version until 40 weeks"
    ],
    answer: 0,
    exp: "External cephalic version — manually rotating the fetus to cephalic through the maternal abdomen — is offered at or after 37 weeks for breech presentation, succeeding roughly half the time and reducing cesarean rates. It's done at 37+ weeks so that if complications force delivery, the fetus is term. Spontaneous version after 37 weeks is uncommon, and internal version is reserved for second twins.",
    tip: "Breech timeline: before 36 weeks, many babies turn themselves — do nothing. At 37, offer ECV. If ECV fails or is declined, planned cesarean."
  },
  {
    id: "ob-18", cat: "pregnancy",
    stem: "A healthy 27-year-old G1P0 at 24 weeks is noted to have a grade 2/6 soft systolic ejection murmur at the left sternal border. She is asymptomatic with normal vital signs and no history of cardiac disease. What is the most appropriate management?",
    choices: [
      "Reassurance — this is a normal finding of pregnancy",
      "Urgent echocardiogram and cardiology referral",
      "Cardiac MRI",
      "Activity restriction until delivery"
    ],
    answer: 0,
    exp: "Plasma volume rises ~40–50% in pregnancy, producing a flow murmur: a soft systolic ejection murmur is found in the vast majority of pregnant women and is benign in the absence of symptoms. By contrast, any DIASTOLIC murmur, a loud (≥3/6) systolic murmur, or symptoms like syncope or dyspnea at rest warrant echocardiography.",
    tip: "Normal pregnancy changes the exam loves: soft systolic murmur, mild dyspnea of pregnancy, physiologic dilutional anemia, ↑GFR. Know what NOT to work up."
  },
  {
    id: "ob-19", cat: "pregnancy",
    stem: "A 30-year-old woman with well-controlled hypothyroidism on levothyroxine 75 mcg daily learns she is 6 weeks pregnant. What change in her thyroid management should be anticipated?",
    choices: [
      "Her levothyroxine requirement will increase — check TSH now and titrate the dose up",
      "Levothyroxine should be stopped because it is teratogenic",
      "Her dose will need to be halved to protect the fetus",
      "No monitoring is needed until the third trimester"
    ],
    answer: 0,
    exp: "Levothyroxine requirements rise 25–50% in pregnancy (estrogen increases thyroid-binding globulin, and the fetus depends on maternal T4 in the first trimester before its own thyroid functions). TSH is checked at confirmation of pregnancy and every 4 weeks through mid-pregnancy while titrating up. Untreated maternal hypothyroidism impairs fetal neurodevelopment — levothyroxine is protective, not teratogenic.",
    tip: "A common pre-emptive instruction: 'take two extra doses per week once your pregnancy test is positive.' Direction of change — UP — is the testable fact."
  },
  {
    id: "ob-20", cat: "pregnancy",
    stem: "A 26-year-old G1P0 is treated for a symptomatic E. coli urinary tract infection at 14 weeks; the same culture also grew group B Streptococcus at 10⁴ CFU/mL. What does the GBS finding change about her delivery plan?",
    choices: [
      "She should receive intrapartum penicillin prophylaxis without needing the 36-week screening culture",
      "Nothing — only the 36-week culture determines prophylaxis",
      "She needs an elective cesarean delivery",
      "She should take daily penicillin until delivery"
    ],
    answer: 0,
    exp: "GBS bacteriuria at ANY point in pregnancy indicates heavy maternal colonization, so she automatically receives intrapartum penicillin prophylaxis — the 36–37-week screening culture is skipped because the answer is already known. (The same automatic-prophylaxis rule applies to a previous infant with GBS disease.) Continuous antepartum antibiotics don't eradicate colonization, and cesarean doesn't prevent transmission.",
    tip: "Two tickets to automatic intrapartum penicillin: GBS in the urine anytime this pregnancy, or a prior GBS-affected baby. No culture needed for either."
  },

  /* ============ PREGNANCY COMPLICATIONS ============ */
  {
    id: "pc-14", cat: "complications",
    stem: "A 32-year-old G1P0 at 33 weeks has blood pressures of 146/94 and 148/92 six hours apart. Urine protein-to-creatinine ratio is normal, platelets and LFTs are normal, and she has no headache or visual symptoms. What is the diagnosis?",
    choices: [
      "Gestational hypertension",
      "Preeclampsia",
      "Chronic hypertension",
      "Preeclampsia with severe features"
    ],
    answer: 0,
    exp: "New hypertension (≥140/90 twice, at least 4 hours apart) after 20 weeks WITHOUT proteinuria or end-organ features is gestational hypertension. Adding proteinuria or end-organ signs upgrades it to preeclampsia; BP ≥160/110 or organ dysfunction makes it severe. Hypertension predating 20 weeks would be chronic. She still needs close surveillance — up to half progress to preeclampsia.",
    tip: "The hypertensive-disorders ladder is a sorting question: when it started (before/after 20 wk), proteinuria or organ signs (yes/no), severe-range numbers (yes/no). Three checks, one diagnosis."
  },
  {
    id: "pc-15", cat: "complications",
    stem: "A 29-year-old G1P0 is diagnosed with a dichorionic-diamniotic twin pregnancy at her first-trimester ultrasound. About which complication — the most common in twin gestations — should she be counseled?",
    choices: [
      "Preterm labor and delivery",
      "Twin-to-twin transfusion syndrome",
      "Post-term pregnancy",
      "Fetal macrosomia"
    ],
    answer: 0,
    exp: "Preterm birth is the most common complication of multiple gestation — over half of twins deliver before 37 weeks. Twin-to-twin transfusion syndrome is serious but occurs in monochorionic (shared-placenta) twins, not di-di. Twins also raise risks of preeclampsia, GDM, anemia, and PPH, while post-term pregnancy and macrosomia run the opposite direction.",
    tip: "'Most common' beats 'most dramatic.' TTTS is the famous answer, but it's wrong for di-di twins — the boring statistical answer (preterm birth) wins."
  },
  {
    id: "pc-16", cat: "complications",
    stem: "Moments after spontaneous rupture of membranes at term, a laboring patient has painless vaginal bleeding and the fetal heart tracing abruptly changes to a sinusoidal pattern with bradycardia. Antenatal ultrasound had noted fetal vessels crossing the internal os. What is the most appropriate management?",
    choices: [
      "Emergent cesarean delivery",
      "Expectant management with maternal repositioning",
      "Amnioinfusion",
      "Oxytocin augmentation to expedite vaginal delivery"
    ],
    answer: 0,
    exp: "Vasa previa — fetal vessels running over the os unprotected by cord or placenta — tears when membranes rupture, and the blood lost is FETAL blood: a term fetus has only ~250 mL total. Painless bleeding at ROM with immediate fetal deterioration (sinusoidal pattern, bradycardia) demands emergent cesarean. Known vasa previa is delivered by scheduled cesarean around 34–37 weeks before labor ever starts.",
    tip: "Bleeding-at-ROM logic: mom looks fine but the baby crashes instantly = the blood is the baby's = vasa previa. Mom unstable, baby initially okay = think maternal sources."
  },
  {
    id: "pc-17", cat: "complications",
    stem: "A 30-year-old G1P0 at 32 weeks has an estimated fetal weight at the 6th percentile. Which surveillance tool best assesses placental function and guides delivery timing in fetal growth restriction?",
    choices: [
      "Umbilical artery Doppler velocimetry",
      "Maternal serum alpha-fetoprotein",
      "Weekly maternal weight checks",
      "A single biophysical profile at 36 weeks"
    ],
    answer: 0,
    exp: "In fetal growth restriction (EFW <10th percentile), umbilical artery Doppler is the key surveillance tool: rising resistance signals placental insufficiency, and absent or reversed end-diastolic flow is an ominous finding that drives early delivery (reversed flow → deliver promptly). Surveillance is serial — Dopplers plus NST/BPP — not a single late test.",
    tip: "The Doppler severity ladder: normal → elevated resistance → absent end-diastolic flow → REVERSED flow. Each step moves delivery earlier; 'reversed' is the alarm bell."
  },
  {
    id: "pc-18", cat: "complications",
    stem: "A 26-year-old G1P0 at 36 weeks with preeclampsia suddenly has a generalized tonic-clonic seizure in triage. What is the first-line drug to control and prevent further seizures?",
    choices: [
      "Magnesium sulfate IV",
      "Lorazepam IV",
      "Phenytoin IV",
      "Levetiracetam IV"
    ],
    answer: 0,
    exp: "Eclamptic seizures are treated with magnesium sulfate — a 4–6 g IV bolus, then continuous infusion — which outperforms benzodiazepines and phenytoin for both controlling and preventing eclamptic seizures. Conventional antiepileptics are reserved for seizures refractory to magnesium. After stabilization, delivery is the definitive treatment.",
    tip: "Everywhere else in medicine, seizure = benzodiazepine. In eclampsia, the answer is magnesium — the exception is exactly why it's tested."
  },
  {
    id: "pc-19", cat: "complications",
    stem: "A 28-year-old G1P0 at 40 weeks and 5 days has an amniotic fluid index of 4 cm (oligohydramnios) on routine post-dates testing. The NST is reactive. What is the most appropriate management?",
    choices: [
      "Induction of labor",
      "Continued expectant management with repeat testing in 1 week",
      "Maternal oral hydration alone and recheck in 2 weeks",
      "Amnioinfusion as an outpatient"
    ],
    answer: 0,
    exp: "Oligohydramnios at or beyond term reflects declining placental function and is an indication for delivery — combined with her post-dates status, induction is clearly appropriate. Waiting a week or two accepts rising stillbirth risk for a fetus already showing reduced reserve; amnioinfusion is an intrapartum tool for cord compression, not outpatient management.",
    tip: "Low fluid at term = the placenta is winding down = deliver. 'Term + any compromise' questions almost always end in induction."
  },

  /* ============ LABOR, DELIVERY & POSTPARTUM ============ */
  {
    id: "pp-13", cat: "postpartum",
    stem: "A G1P0 at term has been at 7 cm dilation for 4 hours. An intrauterine pressure catheter shows contractions totaling 140 Montevideo units per 10 minutes. The fetal tracing is category I. What is the most appropriate management?",
    choices: [
      "Oxytocin augmentation",
      "Immediate cesarean delivery for arrest of labor",
      "Forceps-assisted delivery",
      "Discontinue monitoring and allow ambulation only"
    ],
    answer: 0,
    exp: "Active-phase arrest can only be diagnosed with ADEQUATE contractions — at least 200 Montevideo units. At 140 MVU her labor is protracted from inadequate power, so the answer is oxytocin augmentation, not surgery. Cesarean for arrest requires ≥6 cm, ruptured membranes, and no cervical change for 4 hours with adequate contractions (or 6 hours with inadequate ones despite oxytocin).",
    tip: "Before accepting 'arrest of labor,' check the Montevideo units in the stem: under 200 = augment first. The 200 MVU number is the whole question."
  },
  {
    id: "pp-14", cat: "postpartum",
    stem: "After a vaginal delivery with a midline tear, examination shows a perineal laceration extending through the perineal muscles and involving the external anal sphincter, with intact rectal mucosa. How is this laceration classified?",
    choices: [
      "Third degree",
      "Second degree",
      "First degree",
      "Fourth degree"
    ],
    answer: 0,
    exp: "Laceration degrees: first — vaginal mucosa and perineal skin; second — into the perineal muscles; third — involving the anal sphincter complex; fourth — through the rectal mucosa. Sphincter involvement with intact rectal mucosa is third degree, requiring careful layered repair to prevent future anal incontinence.",
    tip: "Climb the anatomy: skin → muscle → sphincter → rectal mucosa = 1° → 2° → 3° → 4°. Find the deepest structure named in the stem and you're done."
  },
  {
    id: "pp-15", cat: "postpartum",
    stem: "During an otherwise normal labor, a 33-year-old woman suddenly becomes severely dyspneic and cyanotic, then hypotensive and unresponsive. She is intubated and resuscitated; shortly afterward she bleeds profusely from IV sites and the uterus, with labs showing low fibrinogen and elevated D-dimer. What is the most likely diagnosis?",
    choices: [
      "Amniotic fluid embolism",
      "Eclampsia",
      "Aspiration pneumonia",
      "Anaphylaxis to oxytocin"
    ],
    answer: 0,
    exp: "The catastrophic triad of sudden hypoxia, cardiovascular collapse, and then DIC during labor or immediately postpartum is amniotic fluid embolism — an anaphylactoid reaction to amniotic fluid entering the maternal circulation. Management is entirely supportive: airway, pressors, massive transfusion protocol for the coagulopathy, and perimortem cesarean if arrest occurs. Eclampsia seizes; AFE collapses and bleeds.",
    tip: "Three-beat rhythm = AFE: can't breathe → crashes → bleeds everywhere. The DIC after collapse is the distinguishing beat no mimic has."
  },
  {
    id: "pp-16", cat: "postpartum",
    stem: "Two weeks postpartum, a 27-year-old woman believes her baby has been replaced by an impostor and reports hearing a voice commenting on her actions. She has slept little for days and her speech is disorganized. What is the most appropriate management?",
    choices: [
      "Emergency psychiatric hospitalization",
      "Outpatient sertraline with follow-up in 2 weeks",
      "Reassurance that postpartum blues resolve on their own",
      "A trial of zolpidem for sleep"
    ],
    answer: 0,
    exp: "Delusions, hallucinations, and disorganization in the postpartum period are postpartum psychosis — a psychiatric emergency with real risk of infanticide and suicide, requiring immediate hospitalization and never leaving the mother alone with the infant. It is most often a bipolar-spectrum presentation; outpatient SSRIs and reassurance are dangerous undertreatment.",
    tip: "The postpartum mood triage has exactly one emergency: any psychotic feature = hospital, today. Everything else in the stem is noise once a delusion appears."
  },
  {
    id: "pp-17", cat: "postpartum",
    stem: "Immediately after delivery of the placenta with vigorous cord traction, the patient becomes hypotensive and bradycardic with heavy bleeding. The uterine fundus is no longer palpable abdominally, and a smooth, beefy-red mass is visible at the introitus. After stopping uterotonics, what is the most appropriate next step?",
    choices: [
      "Immediate manual replacement of the uterus through the cervix",
      "Begin high-dose oxytocin immediately",
      "Pack the vagina and observe",
      "Methylergonovine IM now"
    ],
    answer: 0,
    exp: "An absent abdominal fundus plus a mass at the introitus with vasovagal shock is uterine inversion — the fundus has turned inside out, usually after excessive cord traction. Management: stop uterotonics (they trap the inversion), immediately push the fundus back through the cervix manually (uterine relaxants like nitroglycerin or terbutaline can help), and only AFTER replacement give uterotonics to prevent recurrence and atony.",
    tip: "Inversion is a sequence question: relax → replace → THEN contract. Any uterotonic given before the uterus is back in place is the trap."
  },
  {
    id: "pp-18", cat: "postpartum",
    stem: "A breastfeeding mother 3 weeks postpartum has a tender, firm lump in the upper outer quadrant of one breast. She is afebrile, the overlying skin is normal, and she feels well. What is the most appropriate management?",
    choices: [
      "Continue breastfeeding with warm compresses and massage directed toward the nipple",
      "Dicloxacillin for 10 days",
      "Stop breastfeeding from the affected side",
      "Ultrasound-guided drainage"
    ],
    answer: 0,
    exp: "A tender lump without fever, erythema, or systemic symptoms is a plugged duct — managed conservatively with continued frequent nursing (starting on the affected side), warm compresses, and massage toward the nipple. Antibiotics enter when fever and a red, wedge-shaped area appear (mastitis); drainage is for a fluctuant abscess. Stopping nursing worsens stasis and invites mastitis.",
    tip: "Lactation spectrum by fever and skin: lump alone = plugged duct; + fever and redness = mastitis; + fluctuance = abscess. Each step adds exactly one intervention."
  },
  {
    id: "pp-19", cat: "postpartum",
    stem: "Twelve days after a vaginal delivery, a 30-year-old woman has recurrent heavy vaginal bleeding with passage of clots. She is afebrile with a soft abdomen; the uterus is slightly enlarged and the cervical os is open. What is the most appropriate next step?",
    choices: [
      "Pelvic ultrasound to evaluate for retained products of conception",
      "Reassurance that this is normal lochia",
      "Immediate hysterectomy",
      "Oral iron supplementation alone"
    ],
    answer: 0,
    exp: "Secondary postpartum hemorrhage (24 hours to 12 weeks after delivery) is most often caused by retained products of conception, subinvolution of the placental site, or endometritis. With an open os and recurrent bleeding, pelvic ultrasound looks for retained tissue; management then includes uterotonics and suction curettage if products are seen. Normal lochia steadily lightens — it doesn't return as heavy clots at day 12.",
    tip: "Late postpartum bleeding = look INSIDE the uterus first (ultrasound). The diagnostic step beats both the shrug (reassurance) and the sledgehammer (hysterectomy)."
  },
  {
    id: "pp-20", cat: "postpartum",
    stem: "At her 6-week visit, a breastfeeding mother scores 16 on the Edinburgh Postnatal Depression Scale, with anhedonia, guilt, and poor concentration for the past month. She denies suicidal ideation and psychotic symptoms but is struggling to function. She wants to continue breastfeeding. What is the most appropriate pharmacologic choice?",
    choices: [
      "Sertraline",
      "Lithium",
      "Paroxetine is contraindicated so no medication can be offered",
      "Alprazolam as needed"
    ],
    answer: 0,
    exp: "This is postpartum depression — more than 2 weeks of symptoms with functional impairment — and treatment combines psychotherapy with an SSRI. Sertraline is the preferred choice during breastfeeding because of minimal transfer into milk. Untreated maternal depression carries its own substantial risks to mother and infant, so 'no medication' is not the safe answer it pretends to be.",
    tip: "Breastfeeding-compatible psych answer = sertraline, almost reflexively. And remember the framing: treating the mother IS protecting the baby."
  }
]);
