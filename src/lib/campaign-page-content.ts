import type { CampaignPageContent } from "@/types/campaign-page";
import type { CampaignSlug } from "@/lib/campaign-slugs";
import type { Locale } from "@/i18n/routing";

type ContactCategory = NonNullable<CampaignPageContent["contactCategory"]>;

type CampaignInput = {
  segmentName: string;
  metaDescription: string;
  contactCategory?: ContactCategory;
  heroImage?: string;
  heroTextAlign?: "left" | "right";
  heroKicker: string;
  heroHeadline: string;
  heroSubhead: string;
  heroCtaPrimary: string;
  heroCtaSecondary?: string;
  heroValueProps?: [string, string, string];
  quickStats?: CampaignPageContent["quickStats"];
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  problemImage?: string;
  solutionTitle: string;
  solutionBody: string;
  fitsTitle: string;
  fitsLead?: string;
  fitsImages?: string[];
  fitsImagePositions?: string[];
  fitsItems: { title: string; body: string }[];
  whatChangesPatientsTitle?: string;
  whatChangesPatientsItems: string[];
  whatChangesPatientsImage?: string;
  whatChangesPatientsImagePosition?: string;
  whatChangesPracticeTitle?: string;
  whatChangesPracticeItems: string[];
  whatChangesPracticeImage?: string;
  whatChangesPracticeImagePosition?: string;
  socialProofQuote: string;
  finalCtaTitle: string;
  finalCtaBody: string;
  finalCtaPrimary: string;
  finalCtaSecondary?: string;
};

const COMMON_STATS: CampaignPageContent["quickStats"] = [
  { value: "15", label: "Numbered programs" },
  { value: "1", label: "Controller, runs itself" },
  { value: "10 min", label: "Staff onboarding" },
  { value: "0", label: "Workflow redesign" },
];

const COMMON_SPECS: CampaignPageContent["solutionSpecs"] = [
  { title: "PEMF", body: "Pulsed electromagnetic field — gentle, non-invasive." },
  { title: "Chronobiological", body: "Frequency programs aligned to body rhythms." },
  { title: "Modular", body: "Mat, pad and targeted applicators for different rooms." },
];

const COMMON_DEMO_STEPS: CampaignPageContent["demoSteps"] = [
  {
    title: "Short fit call",
    body: "We clarify your setting, room flow, audience, and the questions you want answered.",
  },
  {
    title: "Practical demo",
    body: "You experience the programs, applicators, and setup in a context close to your daily work.",
  },
  {
    title: "Clear next steps",
    body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed.",
  },
];

const LOCALIZED_COMMON = {
  en: {
    quickStats: COMMON_STATS,
    solutionSpecs: COMMON_SPECS,
    solutionEyebrow: "The sanza layer",
    fitsEyebrow: "Integration",
    fitsLead:
      "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients / clients",
    whatChangesPracticeTitle: "For your practice",
    socialProofLabel: "Why partners ask to see it",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead:
      "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: COMMON_DEMO_STEPS,
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign",
    ] as [string, string, string],
    requestPrefix: "I'd like to arrange a sanza demo and receive more information for",
  },
  de: {
    quickStats: [
      { value: "15", label: "Nummerierte Programme" },
      { value: "1", label: "Steuerung, läuft selbst" },
      { value: "10 Min", label: "Team-Einweisung" },
      { value: "0", label: "Ablauf neu planen" },
    ] as CampaignPageContent["quickStats"],
    solutionSpecs: [
      { title: "PEMF", body: "Pulsierendes elektromagnetisches Feld — sanft, nicht-invasiv." },
      { title: "Chronobiologisch", body: "Frequenzprogramme im Einklang mit Körperrhythmen." },
      { title: "Modular", body: "Matte, Pad und gezielte Applikatoren für unterschiedliche Räume." },
    ] as CampaignPageContent["solutionSpecs"],
    solutionEyebrow: "Die sanza-Ebene",
    fitsEyebrow: "Integration",
    fitsLead:
      "Einige einfache Kontaktpunkte rund um die Arbeit, die Sie bereits leisten. Die Erfahrung verändert sich, Ihr Kernangebot bleibt Ihres.",
    whatChangesTitle: "Was sich verändert, wenn sanza in Ihren Raum kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten / Kunden",
    whatChangesPracticeTitle: "Für Ihre Praxis",
    socialProofLabel: "Warum Partner es erleben möchten",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was nach Ihrer Anfrage passiert",
    demoStepsTitle: "Ein einfacher Demo-Weg, passend zu Ihrem Umfeld.",
    demoStepsLead:
      "Kein Druck, kein Standard-Pitch. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen, wo sanza sinnvoll passen könnte.",
    demoSteps: [
      {
        title: "Kurzes Vorgespräch",
        body: "Wir klären Ihr Umfeld, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten.",
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben Programme, Applikatoren und Setup in einem Kontext, der Ihrer täglichen Arbeit nahekommt.",
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir Setup, Onboarding und Preise. Wenn nicht, gehen Sie trotzdem informiert heraus.",
      },
    ] as CampaignPageContent["demoSteps"],
    heroValueProps: [
      "Demo vor Ort",
      "Klare Setup-Empfehlung",
      "Kein neuer Ablauf",
    ] as [string, string, string],
    requestPrefix: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen erhalten für",
  },
  lv: {
    quickStats: [
      { value: "15", label: "Numurētas programmas" },
      { value: "1", label: "Vadība, darbojas pati" },
      { value: "10 min", label: "Komandas ievadapmācība" },
      { value: "0", label: "Darba plūsmas pārveide" },
    ] as CampaignPageContent["quickStats"],
    solutionSpecs: [
      { title: "PEMF", body: "Pulsējošs elektromagnētiskais lauks — maigs, neinvazīvs." },
      { title: "Hronobioloģisks", body: "Frekvenču programmas saskaņā ar ķermeņa ritmiem." },
      { title: "Modulārs", body: "Paklājs, spilvens un mērķtiecīgi aplikatori dažādām telpām." },
    ] as CampaignPageContent["solutionSpecs"],
    solutionEyebrow: "sanza slānis",
    fitsEyebrow: "Integrācija",
    fitsLead:
      "Daži vienkārši pieskāriena punkti ap darbu, ko jau veicat. Pieredze mainās, bet jūsu pamatpakalpojums paliek jūsu.",
    whatChangesTitle: "Kas mainās, kad sanza ienāk jūsu telpā",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem / klientiem",
    whatChangesPracticeTitle: "Jūsu praksei",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofAttribution: "Nordora Vital · Profesionālo partneru programma",
    demoStepsEyebrow: "Kas notiek pēc pieteikuma",
    demoStepsTitle: "Vienkāršs demo ceļš, pielāgots jūsu videi.",
    demoStepsLead:
      "Bez spiediena un bez standarta pārdošanas runas. Pastāstiet, kā darbojas jūsu telpa, un mēs parādīsim, kur sanza varētu iederēties.",
    demoSteps: [
      {
        title: "Īsa atbilstības saruna",
        body: "Noskaidrojam jūsu vidi, telpas plūsmu, auditoriju un jautājumus, uz kuriem vēlaties atbildes.",
      },
      {
        title: "Praktisks demo",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādījumu kontekstā, kas ir tuvs jūsu ikdienas darbam.",
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas der, ieskicējam uzstādījumu, ieviešanu un cenas. Ja nē, jūs tāpat iegūstat skaidrību.",
      },
    ] as CampaignPageContent["demoSteps"],
    heroValueProps: [
      "Demo uz vietas",
      "Skaidra uzstādījuma vadība",
      "Bez darba plūsmas pārveides",
    ] as [string, string, string],
    requestPrefix: "Vēlos pieteikt sanza demo un saņemt vairāk informācijas par",
  },
} as const;

function makeCampaignPage(input: CampaignInput, locale: "en" | "de" | "lv" = "en"): CampaignPageContent {
  const common = LOCALIZED_COMMON[locale];
  return {
    segmentName: input.segmentName,
    metaTitle: `${input.segmentName} | sanza × Nordora Vital`,
    metaDescription: input.metaDescription,
    heroImage: input.heroImage,
    heroTextAlign: input.heroTextAlign,
    heroKicker: input.heroKicker,
    heroHeadline: input.heroHeadline,
    heroSubhead: input.heroSubhead,
    heroCtaPrimary: input.heroCtaPrimary,
    heroCtaSecondary: input.heroCtaSecondary,
    heroValueProps: input.heroValueProps ?? common.heroValueProps,
    contactCategory: input.contactCategory ?? "other",
    demoRequestMessage: `${common.requestPrefix} ${input.segmentName}.`,
    quickStats: input.quickStats ?? common.quickStats,
    problemEyebrow: input.problemEyebrow,
    problemTitle: input.problemTitle,
    problemBody: input.problemBody,
    problemImage: input.problemImage,
    solutionEyebrow: common.solutionEyebrow,
    solutionTitle: input.solutionTitle,
    solutionBody: input.solutionBody,
    solutionSpecs: common.solutionSpecs,
    fitsTitle: input.fitsTitle,
    fitsEyebrow: common.fitsEyebrow,
    fitsLead:
      input.fitsLead ??
      common.fitsLead,
    fitsImages: input.fitsImages,
    fitsImagePositions: input.fitsImagePositions,
    fitsItems: input.fitsItems,
    whatChangesTitle: common.whatChangesTitle,
    whatChangesEyebrow: common.whatChangesEyebrow,
    whatChangesPatientsTitle: input.whatChangesPatientsTitle ?? common.whatChangesPatientsTitle,
    whatChangesPatientsItems: input.whatChangesPatientsItems,
    whatChangesPatientsImage: input.whatChangesPatientsImage,
    whatChangesPatientsImagePosition: input.whatChangesPatientsImagePosition,
    whatChangesPracticeTitle: input.whatChangesPracticeTitle ?? common.whatChangesPracticeTitle,
    whatChangesPracticeItems: input.whatChangesPracticeItems,
    whatChangesPracticeImage: input.whatChangesPracticeImage,
    whatChangesPracticeImagePosition: input.whatChangesPracticeImagePosition,
    socialProofLabel: common.socialProofLabel,
    socialProofQuote: input.socialProofQuote,
    socialProofAttribution: common.socialProofAttribution,
    demoStepsEyebrow: common.demoStepsEyebrow,
    demoStepsTitle: common.demoStepsTitle,
    demoStepsLead: common.demoStepsLead,
    demoSteps: common.demoSteps,
    finalCtaTitle: input.finalCtaTitle,
    finalCtaBody: input.finalCtaBody,
    finalCtaPrimary: input.finalCtaPrimary,
    finalCtaSecondary: input.finalCtaSecondary,
  };
}

export const CAMPAIGN_PAGE_CONTENT: Partial<Record<CampaignSlug, CampaignPageContent>> = {
  "sporta-medicina": makeCampaignPage({
    segmentName: "Sports Medicine & Recovery Centres",
    metaDescription:
      "Structured PEMF wellbeing technology for sports medicine and recovery centres that want athletes to feel a more complete recovery experience.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/sports-medicine-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For performance-focused practices that take the full athlete experience seriously",
    heroHeadline: "Give athletes more than treatment. Give them a recovery experience.",
    heroSubhead:
      "<strong>sanza</strong> brings structured PEMF wellbeing technology to sports medicine settings — helping athletes settle faster, feel more grounded between sessions, and associate your facility with results they can feel.",
    heroCtaPrimary: "Book a sports recovery demo",
    heroValueProps: ["Facility walkthrough", "Recovery-zone setup", "Easy for staff"],
    quickStats: [
      { value: "15", label: "ways to support athlete recovery" },
      { value: "1", label: "simple system for your whole team" },
      { value: "10 min", label: "to shift the state they arrive in" },
      { value: "0", label: "disruption to your treatment flow" },
    ],
    problemEyebrow: "The gap between treatment and true recovery",
    problemTitle: "Athletes often arrive wired before the work begins.",
    problemBody:
      "You already have the clinical expertise. Shockwave, manual therapy, ultrasound, diagnostics — the technical side is covered. But athletes are often still wired when they walk in: cortisol elevated, nervous system running hot from training or competition. The environment around your treatment matters. And right now, most sports medicine facilities feel the same as a GP office.",
    problemImage: "/images/campaign/sports-medicine-block-1.jpg",
    solutionTitle: "Give athletes something to feel — beyond the treatment itself.",
    solutionBody:
      "<strong>sanza</strong> uses PEMF technology with structured frequency programs to deliver a full-body calming signal. It is a premium wellbeing layer that helps athletes downregulate, settle, and feel more present. In a sports medicine context, that means a facility athletes talk about because it feels different.",
    fitsTitle: "Where sanza fits in your session flow",
    fitsItems: [
      {
        title: "Pre-treatment",
        body: "Run a settling program before demanding manual work or diagnostics — athlete arrives 'on,' leaves the program calmer and more cooperative.",
      },
      {
        title: "Post-treatment decompression",
        body: "A structured close-out program helps the body transition out of a clinical intervention — perceived care goes up dramatically.",
      },
      {
        title: "Between sessions",
        body: "Use the sanza mat as a premium waiting/rest station — turns passive wait time into active recovery experience.",
      },
    ],
    whatChangesPatientsItems: [
      "A recovery environment that feels intentional, not clinical",
      "Something they can feel and describe to teammates → word-of-mouth",
      "Consistency: every visit has a structured, premium quality",
    ],
    whatChangesPracticeItems: [
      "A signature element that sets you apart from generic sports clinics",
      "Stronger retention: athletes come back for how they feel here",
      "Easy to staff — programs run on a simple controller, no additional training needed",
    ],
    whatChangesPracticeImage: "/images/campaign/sports-medicine-for-practice.jpg",
    socialProofQuote:
      "Used by performance-focused practices across Europe. We'll show you exactly how <strong>sanza</strong> integrates into your recovery flow — without disrupting a single appointment.",
    finalCtaTitle: "Used by performance-focused practices across Europe.",
    finalCtaBody:
      "We'll show you exactly how sanza integrates into your recovery flow — without disrupting a single appointment.",
    finalCtaPrimary: "Schedule a facility walkthrough",
  }),

  hiropraktika: makeCampaignPage({
    segmentName: "Chiropractic & Manual Therapy Practices",
    metaDescription:
      "A premium wellbeing layer for chiropractic and manual therapy practices where the room can help patients settle before hands-on work begins.",
    contactCategory: "therapists",
    heroImage: "/images/campaign/chiro-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For practices where tissue response begins before you touch the patient",
    heroHeadline: "Give your patients more than an adjustment.",
    heroSubhead:
      "<strong>sanza</strong> helps you turn the whole chiropractic visit into a calmer, more complete experience — before, during and after your hands-on work. Patients feel more at ease, more cared for, and more connected to your practice. Your treatment flow stays exactly as it is.",
    heroCtaPrimary: "See how it works in a chiro room",
    quickStats: [
      { value: "15", label: "programs for calmer visits" },
      { value: "1", label: "simple system for the whole team" },
      { value: "10 min", label: "to shift the room’s state" },
      { value: "0", label: "changes to your hands-on work" },
    ],
    problemEyebrow: "Stop losing treatment time to tension you did not create.",
    problemTitle: "Your hands know what to do.",
    problemBody:
      "But when a patient arrives guarded, braced, distracted or nervous, you are not only working with the spine — you are working against the state they brought into the room.\n\n<strong>sanza</strong> helps you change that context.\n\nIt gives your chiropractic room a calm, structured layer around the work you already do, so patients settle faster, feel safer on the table, and experience the visit as more complete. Less resistance. More trust. A better start for the adjustment — and a better feeling when they leave.",
    problemImage: "/images/campaign/chiro-block-1.jpg",
    solutionTitle: "sanza settles the nervous system before you start.",
    solutionBody:
      "A 10–15 minute PEMF arrival program on the sanza mat creates a shift in how patients feel — quieter, more grounded, less braced. The chronobiological frequency signal is gentle, non-invasive, and compatible with chiropractic work. Your adjustment follows a body that has already started to let go. The quality of your work stays the same — what changes is what you're working with.",
    fitsTitle: "Where sanza fits in your session flow",
    fitsImages: [
      "/images/campaign/chiro-fit-arrival.jpg",
      "/images/campaign/chiro-fit-applicators.jpg",
      "/images/campaign/chiro-fit-decompression.jpg",
    ],
    fitsItems: [
      {
        title: "Arrival mat program",
        body: "Patient lies on the sanza mat while you review their notes. By the time you're ready, they're ready.",
      },
      {
        title: "Targeted applicators",
        body: "Optional pen or pad applicator for the neck/shoulder region before cervical work — a short, local comfort moment.",
      },
      {
        title: "Post-adjustment decompression",
        body: "A 5-minute closing program creates a calm, grounded transition back to the patient's day.",
      },
    ],
    whatChangesPatientsItems: [
      "Less bracing, faster release, more complete relaxation during adjustments",
      "A practice that feels considered and premium — not just functional",
    ],
    whatChangesPracticeItems: [
      "Fewer difficult table moments",
      "A clear differentiator: your practice has something others don't",
      "Patients describe it — and refer others to experience it",
    ],
    whatChangesPracticeImage: "/images/campaign/chiro-for-practice.jpg",
    whatChangesPracticeImagePosition: "50% 32%",
    socialProofQuote:
      "Most chiropractors want to try it once and decide. That's exactly what we offer.",
    finalCtaTitle: "Most chiropractors want to try it once and decide.",
    finalCtaBody: "That's exactly what we offer — a no-pressure demo in your practice.",
    finalCtaPrimary: "Book a no-pressure demo",
  }),

  "joga-meditacija": makeCampaignPage({
    segmentName: "Yoga & Meditation Studios",
    metaDescription:
      "Grounding PEMF wellbeing technology for yoga and meditation studios where presence is the product.",
    contactCategory: "therapists",
    heroImage: "/images/campaign/yoga-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For studios where presence is the product",
    heroHeadline: "Give your students more than a class. Give them a state they want to return to.",
    heroSubhead:
      "<strong>sanza</strong> adds a quiet grounding layer to your studio experience — helping students arrive, soften, practice and leave with a deeper sense of calm. It supports the atmosphere you already work so hard to create, without changing how you teach.",
    heroCtaPrimary: "Experience sanza in your studio",
    heroValueProps: ["Studio experience session", "Quiet technology", "Premium rituals"],
    quickStats: [
      { value: "15", label: "ways to deepen the class experience" },
      { value: "1", label: "simple system for your studio" },
      { value: "10 min", label: "to help students arrive" },
      { value: "0", label: "changes to your teaching flow" },
    ],
    problemEyebrow: "Your students come to class carrying the day with them.",
    problemTitle: "They may be lying on the mat, but part of them is still in the car, in the inbox, in the meeting, in the noise they just came from.",
    problemBody:
      "As a studio owner, you know how much of the first part of class is spent helping people arrive — softening the breath, calming the nervous system, bringing attention back into the body.\n\n<strong>sanza</strong> supports that transition.\n\nIt adds a quiet, structured grounding layer to your studio, helping students settle more quickly, feel more present in the practice, and leave with the kind of calm they want to return to.\n\nNot to replace your teaching.\nTo help the room support it.",
    problemImage: "/images/campaign/yoga-block-1.jpg",
    solutionTitle: "sanza is grounding technology for spaces that value presence.",
    solutionBody:
      "PEMF signals work below the threshold of awareness — a structured, full-body electromagnetic input that supports the shift from sympathetic to parasympathetic state. Think of it as a tuning fork for the room. Students don't need to understand it. They just feel different — calmer, more arrived, more ready to go inward. Your teaching lands in a body that has already started to soften.",
    fitsTitle: "Where sanza fits in your studio",
    fitsImages: [
      "/images/campaign/yoga-fit-pre-class.jpg",
      "/images/campaign/yoga-fit-savasana.jpg",
      "/images/campaign/yoga-fit-private.jpg",
      "/images/campaign/yoga-fit-workshop.jpg",
    ],
    fitsItems: [
      { title: "Pre-class", body: "Mat programs running 10–15 min before students begin. They lie down, the room does the settling." },
      { title: "Savasana enhancement", body: "Run a decompression program during final rest — makes savasana feel longer, deeper, more complete." },
      { title: "Private sessions", body: "Use with individual clients as part of a premium 1:1 experience, especially for trauma-aware or restorative work." },
      { title: "Workshops & retreats", body: "A structured opening/closing ritual that becomes a signature element of your events." },
    ],
    whatChangesPatientsTitle: "For your students",
    whatChangesPatientsItems: [
      "They arrive stressed and leave genuinely settled — not just stretched",
      "Savasana feels different. Deeper. They notice.",
      "Your studio becomes associated with a specific quality of experience",
    ],
    whatChangesPracticeTitle: "For your studio",
    whatChangesPracticeItems: [
      "A premium offering that supports your pricing",
      "Students stay loyal because the experience is irreplaceable",
      "Teachers find the room easier to work with from the first breath",
    ],
    whatChangesPracticeImage: "/images/campaign/yoga-for-studio.jpg",
    socialProofQuote:
      "I want this in my studio. — Every studio owner who experiences <strong>sanza</strong> for the first time.",
    finalCtaTitle: "One session. You'll feel what your students will feel.",
    finalCtaBody:
      "We offer a personal experience session for studio owners before any commitment. Come in. Lie on the mat. Decide from there.",
    finalCtaPrimary: "Book your experience session",
  }),

  "sporta-zales": makeCampaignPage({
    segmentName: "Gyms, CrossFit & Fitness Facilities",
    metaDescription:
      "A premium recovery and decompression station for gyms, CrossFit boxes, and fitness facilities that want stronger retention.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/gym-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For facilities that know retention is the real game",
    heroHeadline: "Make your gym the place members come to recover, not just train.",
    heroSubhead:
      "Every gym can offer equipment.\nFewer can offer a recovery experience members remember.\n\n<strong>sanza</strong> gives your facility a premium decompression layer after training — helping members slow down, reset and feel genuinely looked after. That feeling becomes part of your brand.",
    heroCtaPrimary: "Add a recovery station to your gym",
    heroValueProps: ["One recovery station", "Zero extra staff", "Premium member ritual"],
    quickStats: [
      { value: "15", label: "recovery programs members can feel" },
      { value: "1", label: "simple system your team can run" },
      { value: "10 min", label: "to create a premium reset moment" },
      { value: "0", label: "changes to your training offer" },
    ],
    problemEyebrow: "Take the member experience beyond the workout.",
    problemTitle: "Your gym already gives members a place to train, perform and push themselves.",
    problemBody:
      "<strong>sanza</strong> helps you extend that experience into what happens after the effort: a calm, structured recovery moment that feels premium, intentional and genuinely valuable.\n\nIt gives members another reason to stay longer, feel better when they leave, and associate your facility with more than equipment or classes. Not a replacement for what you already do well — a simple way to make the whole visit feel more complete.",
    problemImage: "/images/campaign/gym-block-1.jpg",
    solutionTitle: "sanza: a recovery station your members will actually use and talk about.",
    solutionBody:
      "A sanza station — mat, controller, clear program menu — gives members a 15–20 minute structured PEMF decompression experience after training. Full-body settling, nervous system downregulation, a genuine end-of-workout signal for the body. No staff required to run it. Members choose it themselves from the program menu. It becomes a ritual. It becomes part of why they stay.",
    fitsTitle: "Where sanza fits in your facility",
    fitsImages: [
      "/images/campaign/gym-fit-recovery-zone.jpg",
      "/images/campaign/gym-fit-membership-tier.jpg",
      "/images/campaign/gym-fit-hiit.jpg",
      "/images/campaign/gym-fit-pt-closeout.jpg",
    ],
    fitsItems: [
      { title: "Standalone recovery zone", body: "One mat, one controller, one corner. Members book 15-minute slots post-training." },
      { title: "Premium membership tier", body: "Include sanza access in a premium tier — increases per-member revenue with zero additional staff cost." },
      { title: "CrossFit / HIIT settings", body: "After high-intensity sessions, a structured decompression program is exactly what the nervous system needs." },
      { title: "Personal training add-on", body: "PTs can include sanza as a 10-minute close-out — adds value and increases PT rebooking." },
    ],
    whatChangesPatientsTitle: "For your members",
    whatChangesPatientsItems: [
      "A post-workout experience that feels premium and intentional",
      "Better sleep, more even energy in the days after hard training — they notice and they say so",
      "A reason to stay in your facility longer and invest more",
    ],
    whatChangesPracticeTitle: "For your facility",
    whatChangesPracticeItems: [
      "A genuine differentiator competitors cannot copy overnight",
      "Stronger retention data from members using recovery zones",
      "Word-of-mouth: 'have you tried the recovery mat at X gym?'",
    ],
    whatChangesPracticeImage: "/images/campaign/gym-for-facility.jpg",
    socialProofQuote: "One station. Zero extra staff. A reason to renew.",
    finalCtaTitle: "One station. Zero extra staff. A reason to renew.",
    finalCtaBody:
      "Talk to us about a pilot in your facility — we'll configure the right setup for your floor plan and membership model.",
    finalCtaPrimary: "Talk to us about a pilot",
  }),

  veterinarija: makeCampaignPage({
    segmentName: "Veterinary Clinics",
    metaDescription:
      "Gentle PEMF wellbeing technology for veterinary clinics that want a calmer environment for animals, owners, and teams.",
    contactCategory: "clinics",
    heroKicker: "For practices where animal stress is your professional challenge",
    heroHeadline: "Calmer animals. Smoother procedures. Better outcomes for everyone.",
    heroSubhead:
      "<strong>sanza</strong> PEMF wellbeing technology has a direct application in veterinary settings — helping animals arrive less stressed and settle faster before procedures. A better experience for the patient, the owner, and your team.",
    heroCtaPrimary: "Find out how sanza works for vet practices",
    problemEyebrow: "Stress changes everything in a veterinary visit",
    problemTitle: "A calmer environment can change the whole room.",
    problemBody:
      "An anxious dog doesn't lie still. A stressed cat elevates its heart rate and temperature. An agitated horse resists every step. Stress in the animal makes your work harder, increases procedural risk, and leaves owners feeling that their pet suffered more than necessary. Pharmacological sedation has its place — but there are many cases where a calmer environment, before you start, would make the whole visit go differently.",
    solutionTitle: "sanza creates a calmer environment — for animals, owners, and your team.",
    solutionBody:
      "PEMF signals have been studied and applied in animal wellness contexts across Europe. The same chronobiological frequency approach that helps humans settle and downregulate works across mammalian nervous systems. A sanza mat in your waiting or pre-procedure area creates a structured calming input — gentle, non-invasive, and easy to position as a premium care layer.",
    fitsTitle: "Where sanza fits in your clinic",
    fitsItems: [
      { title: "Pre-procedure settling area", body: "A sanza mat in a quiet corner — animals rest on it before examination or treatment." },
      { title: "Post-procedure recovery", body: "Run a gentle decompression program during post-anesthesia recovery — supports calm re-orientation." },
      { title: "Owner experience", body: "The owner sees a premium, intentional environment and feels their animal is being cared for completely." },
      { title: "Physio-adjacent services", body: "For clinics offering animal physio or rehabilitation, sanza integrates naturally as a pre/post adjunct." },
    ],
    whatChangesPatientsTitle: "For animals and owners",
    whatChangesPatientsItems: [
      "Less pre-procedure anxiety in sensitive animals",
      "Smoother, calmer start to examinations and interventions",
      "Owners see visible evidence that care goes beyond the minimum",
    ],
    whatChangesPracticeItems: [
      "Visible evidence that this clinic does things differently",
      "Owners leave recommending you because the experience was different",
      "Fewer restraint moments, calmer room energy, less adrenal fatigue across the day",
    ],
    socialProofQuote:
      "A handful of progressive vet clinics across Europe already use <strong>sanza</strong>. We'd like to show you why.",
    finalCtaTitle: "Progressive vet clinics across Europe already use sanza.",
    finalCtaBody: "We'd like to show you why — and how it would work in your practice.",
    finalCtaPrimary: "Request a veterinary practice demo",
  }),

  jahsanas: makeCampaignPage({
    segmentName: "Equestrian Centres & Stables",
    metaDescription:
      "Structured PEMF wellbeing for equestrian centres and stables that take horse wellness as seriously as performance.",
    contactCategory: "sports-performance",
    heroKicker: "For stables that take horse wellness as seriously as performance",
    heroHeadline: "For stables that take horse wellness as seriously as performance.",
    heroSubhead:
      "<strong>sanza</strong> PEMF technology is used in equine performance and wellness settings across Europe — supporting calmer horses, faster settling after transport or competition, and a premium care standard that discerning owners expect.",
    heroCtaPrimary: "Learn how equestrian facilities use sanza",
    problemEyebrow: "A stressed horse is an underperforming horse",
    problemTitle: "Daily care needs a systematic, non-invasive support tool.",
    problemBody:
      "Transport stress. Pre-competition tension. Post-event fatigue. Horses carry stress in their bodies in ways that directly affect performance, recovery, and trainability. What most stables don't have is a systematic, non-invasive tool for helping horses downregulate — something that works between the vet and the stable, in the daily rhythm of care.",
    solutionTitle: "sanza: structured PEMF wellbeing for equine environments.",
    solutionBody:
      "PEMF technology has a documented history of use in equine settings — joint comfort, soft-tissue applications, and general wellness support. The sanza system brings a structured, programmable PEMF experience into your stable or treatment area. Full-body mats sized for equine use, targeted applicators for limbs and local areas, and a control system your staff can operate reliably.",
    fitsTitle: "Where sanza fits in your stable",
    fitsItems: [
      { title: "Post-transport settling", body: "Horses arriving from long transport or competition benefit from a structured PEMF program during the initial rest period." },
      { title: "Pre-training warm-up support", body: "A short program before demanding work — horses that start calmer respond more consistently." },
      { title: "Premium livery service", body: "Offer sanza sessions as part of a premium livery package — a tangible differentiator owners will pay for." },
      { title: "Rehabilitation support", body: "For horses recovering from injury or surgery, sanza adds a gentle, non-clinical comfort layer." },
    ],
    whatChangesPatientsTitle: "For horses and owners",
    whatChangesPatientsItems: [
      "More consistent settling after stress events",
      "A structured daily wellbeing ritual that experienced riders and owners recognise and value",
    ],
    whatChangesPracticeTitle: "For your stable",
    whatChangesPracticeItems: [
      "A premium service offer that no other stable in Latvia currently has",
      "Higher-value owner relationships with clients who see investment in their horse's wellbeing",
    ],
    socialProofQuote:
      "Used at performance stables in Germany, Austria, and Switzerland. Now available through Nordora Vital in Latvia.",
    finalCtaTitle: "Used at performance stables in Germany, Austria, and Switzerland.",
    finalCtaBody: "Now available through Nordora Vital in Latvia. Schedule a stable consultation.",
    finalCtaPrimary: "Schedule a stable consultation",
  }),

  "vecu-cilveku-aprupe": makeCampaignPage({
    segmentName: "Nursing Homes & Senior Care Facilities",
    metaDescription:
      "A gentle, structured PEMF wellbeing experience for senior care environments where comfort and dignity matter every day.",
    contactCategory: "clinics",
    heroKicker: "For facilities where comfort and dignity are the measure of quality",
    heroHeadline: "Comfort, calm, and dignity — for every resident, every day.",
    heroSubhead:
      "<strong>sanza</strong> brings a gentle, structured wellbeing experience to senior care environments — supporting relaxation, comfort, and a sense of being genuinely cared for. Safe, non-invasive, and easy for care staff to deliver.",
    heroCtaPrimary: "Find out how sanza works in senior care",
    problemEyebrow: "The gap between safety and genuine wellbeing",
    problemTitle: "Residents need more than safety. They need comfort that is felt.",
    problemBody:
      "Your residents are safe. They're fed and sheltered and medically monitored. But the lived experience of being in a care facility — the ambient stress, the loss of autonomy, the overstimulation of shared spaces — takes a toll that clinical care doesn't address. Families notice when their loved one seems more agitated, less settled, less themselves. You notice too. What residents need, in addition to medical care, is a consistent, gentle signal that their comfort matters.",
    solutionTitle: "sanza: a daily comfort ritual for residents who deserve more than clinical care.",
    solutionBody:
      "sanza uses gentle PEMF frequency signals to create a full-body calming experience — no needles, no medications, no active effort required from the resident. They lie or sit on the mat, the program runs, and the structured electromagnetic signal does the rest. For care staff, it is a premium tool they can offer with dignity — something that says: we thought about how you feel, not just what you need.",
    fitsTitle: "Where sanza fits in your facility",
    fitsItems: [
      { title: "Morning settling program", body: "A gentle arrival routine after breakfast — helps residents start the day from a calmer baseline." },
      { title: "Afternoon rest enhancement", body: "Run programs during the natural afternoon rest period — deeper, more restorative rest." },
      { title: "Individual comfort sessions", body: "Offered to residents with higher anxiety or chronic discomfort as a personalised care element." },
      { title: "Family visit preparation", body: "A short settling program before family visits can meaningfully improve the quality of those interactions." },
    ],
    whatChangesPatientsTitle: "For your residents",
    whatChangesPatientsItems: [
      "A daily experience of comfort and genuine care — not just clinical management",
      "A sense of ritual and calm that improves mood and quality of daily life",
    ],
    whatChangesPracticeTitle: "For your facility",
    whatChangesPracticeItems: [
      "Visible evidence that this facility invests in the whole person — families notice and tell others",
      "Stronger confidence in care quality, stronger word-of-mouth referrals",
      "A tool for difficult moments — something kind and effective that doesn't require a prescription",
    ],
    socialProofQuote:
      "Senior care facilities across Europe use <strong>sanza</strong> as a daily resident wellbeing programme.",
    finalCtaTitle: "Senior care facilities across Europe use sanza as a daily resident wellbeing programme.",
    finalCtaBody: "We'd like to show you how it would work in your facility.",
    finalCtaPrimary: "Book a care facility consultation",
  }),

  "spa-viesnicas": makeCampaignPage({
    segmentName: "Spa Hotels & Resorts",
    metaDescription:
      "Premium PEMF wellbeing technology for spa hotels and resorts looking for a guest experience that stands apart.",
    contactCategory: "beauty-cosmetic",
    heroImage: "/images/campaign/spa-hotel-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For properties that take the guest experience seriously",
    heroHeadline: "Give your guests a wellness experience they cannot get everywhere.",
    heroSubhead:
      "Your spa already offers comfort, care and atmosphere. <strong>sanza</strong> helps you add a new layer to that experience: a calm, technology-led reset that feels premium, memorable and quietly different.\n\nGuests do not only remember the treatment menu. They remember how deeply they switched off, how cared for they felt, and whether the experience gave them something worth talking about. <strong>sanza</strong> gives your spa a distinctive wellbeing moment that supports five-star positioning without changing your existing treatments.",
    heroCtaPrimary: "Explore sanza for your spa",
    heroValueProps: ["Showcase presentation", "Premium positioning", "Low operational complexity"],
    quickStats: [
      { value: "15", label: "premium wellbeing programs" },
      { value: "1", label: "simple system your team can run" },
      { value: "10 min", label: "to create a memorable reset" },
      { value: "0", label: "changes to your spa menu" },
    ],
    problemEyebrow: "Give guests a reason to talk about your spa after they leave.",
    problemTitle: "Your guests can find a sauna, massage and relaxation room in almost every premium hotel.",
    problemBody:
      "What they cannot find everywhere is a wellness experience that feels genuinely new, deeply calming and worth remembering.\n\nThat is the opportunity.\n\n<strong>sanza</strong> helps you add a distinctive, technology-led reset to your spa — not another standard treatment on the menu, but a premium wellbeing moment guests can feel immediately. It makes your spa experience more complete, more differentiated and more likely to become the part of the stay they mention to someone else.",
    problemImage: "/images/campaign/spa-hotel-block-1.jpg",
    solutionTitle: "sanza: the experience guests can't get anywhere else in Latvia.",
    solutionBody:
      "sanza is a professional PEMF wellbeing system — a premium wellness technology that uses chronobiological electromagnetic frequency programs to create a full-body grounding and settling experience. It is not massage. It is not heat. It is something distinctly different — a deep, quiet settling that guests feel as a kind of profound relaxation they immediately want again. Position it as a signature programme. Name it as yours.",
    fitsTitle: "Where sanza fits in your spa",
    fitsImages: [
      "/images/campaign/spa-fit-signature.jpg",
      "/images/campaign/spa-fit-pre-treatment.jpg",
      "/images/campaign/spa-fit-relaxation.jpg",
      "/images/campaign/spa-fit-retreat.jpg",
    ],
    fitsItems: [
      { title: "Signature programme", body: "The sanza session — a 45–60 min premium booking combining PEMF mat with targeted applicators." },
      { title: "Pre-treatment preparation", body: "Run a 15-min settling before a massage or facial — the treatment lands in a body that's already open." },
      { title: "Relaxation room feature", body: "A sanza station in the relaxation area — guests use it between treatments or as a standalone experience." },
      { title: "Retreat and couples offers", body: "Integrate into retreat packages or create a premium couples session with two mats and one programme." },
    ],
    whatChangesPatientsTitle: "For your guests",
    whatChangesPatientsItems: [
      "An experience they haven't had before and want to come back for",
      "A sense of deep rest that differentiates your spa from every other luxury option",
      "Something they describe to friends in a way that creates genuine curiosity",
    ],
    whatChangesPracticeTitle: "For your property",
    whatChangesPracticeItems: [
      "A category-defining offer in the Latvian market",
      "Premium pricing justification — technology + experience = perceived value",
      "Higher spa revenue per guest without increasing staff ratios",
    ],
    whatChangesPracticeImage: "/images/campaign/spa-for-property.png",
    socialProofQuote:
      "A handful of premium European spas and wellness hotels already feature <strong>sanza</strong>.",
    finalCtaTitle: "Premium European spas and wellness hotels already feature sanza.",
    finalCtaBody: "We'd like to show you what it looks like in a luxury spa context.",
    finalCtaPrimary: "Request a spa showcase presentation",
  }),

  "golfa-klubi": makeCampaignPage({
    segmentName: "Golf Clubs",
    metaDescription:
      "Premium PEMF wellbeing technology for golf clubs that want a post-round recovery ritual worthy of their members.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/golf-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For clubs where the member experience extends beyond the 18th hole",
    heroHeadline: "Make the post-round experience feel as refined as the club itself.",
    heroSubhead:
      "Your members do not come only for the course. They come for the feeling of the whole club — the pace, the service, the atmosphere, and how they feel after a round.\n\n<strong>sanza</strong> helps you extend that experience beyond the 18th hole with a premium recovery and relaxation moment members can actually feel. A calm, technology-led reset for the clubhouse, performance lounge or wellness area — designed to make your club feel more complete, more memorable, and harder to compare.",
    heroCtaPrimary: "See how golf clubs use sanza",
    quickStats: [
      { value: "15", label: "post-round wellbeing programs" },
      { value: "1", label: "simple system your team can run" },
      { value: "10 min", label: "to create a refined recovery moment" },
      { value: "0", label: "changes to your clubhouse flow" },
    ],
    problemEyebrow: "Give your members a better way to recover after the round.",
    problemTitle: "Your club already delivers the course, the service and the atmosphere your members expect.",
    problemBody:
      "<strong>sanza</strong> helps you extend that standard into what happens after play.\n\nGolf asks a lot from the body — back, hips, shoulders, calves, and the nervous system after hours of focus and movement. Many members finish the round feeling good, but carrying tension, stiffness or fatigue into the rest of their day.\n\nThat is where your club can stand apart.\n\n<strong>sanza</strong> adds a calm, premium recovery moment to the clubhouse experience — something members can feel, remember and talk about. Not as a medical service. As a refined wellbeing layer that makes the whole club experience feel more complete.",
    problemImage: "/images/campaign/golf-block-1.jpg",
    solutionTitle: "sanza: a post-round recovery ritual that becomes part of your club culture.",
    solutionBody:
      "A sanza station in your clubhouse — locker room adjacent, or as a dedicated recovery room — offers members a structured 15–20 minute PEMF decompression session after their round. Full-body settling, targeted applicators for the areas that took the load, and a quiet premium feel. Members who try it once use it every time. It becomes part of why they play here.",
    fitsTitle: "Where sanza fits in your club",
    fitsImages: [
      "/images/campaign/golf-fit-event.jpg",
      "/images/campaign/golf-fit-clubhouse.jpg",
      "/images/campaign/golf-fit-post-round.jpg",
      "/images/campaign/golf-fit-recovery-room.jpg",
    ],
    fitsImagePositions: ["50% 36%", "50% 36%", "50% 36%", "50% 50%"],
    fitsItems: [
      { title: "Recovery room", body: "A dedicated, quietly branded space — one mat, ambient light, 15-min programs on a clear menu." },
      { title: "Pro shop add-on", body: "Offer sanza sessions at the pro shop desk as a premium post-lesson or post-round add-on." },
      { title: "Corporate day feature", body: "Include a sanza recovery session in premium corporate golf day packages." },
      { title: "Membership tier", body: "Include sanza access in a premium membership tier — increases per-member value." },
    ],
    whatChangesPatientsTitle: "For your members",
    whatChangesPatientsImage: "/images/campaign/golf-for-members.jpg",
    whatChangesPatientsItems: [
      "A post-round recovery option they can feel — not just a hot shower",
      "A club that has invested in their comfort at a level that signals real quality",
    ],
    whatChangesPracticeTitle: "For your club",
    whatChangesPracticeImage: "/images/campaign/golf-for-club.jpg",
    whatChangesPracticeItems: [
      "A premium differentiator in a competitive market",
      "An additional revenue line with minimal operating cost",
      "Members who feel their membership investment is fully justified",
    ],
    socialProofQuote:
      "A club that takes its members' recovery as seriously as their game. That's the positioning <strong>sanza</strong> supports.",
    finalCtaTitle: "A club that takes its members' recovery as seriously as their game.",
    finalCtaBody: "Talk to us about how sanza would work in your clubhouse.",
    finalCtaPrimary: "Talk to us about your club",
  }),

  "tenisa-klubi": makeCampaignPage({
    segmentName: "Tennis Clubs",
    metaDescription:
      "Structured PEMF wellbeing technology for tennis clubs that want a post-match recovery offer members remember.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/tennis-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For facilities that understand member retention is earned between sessions",
    heroHeadline: "Your members train hard. Give them a recovery experience that matches.",
    heroSubhead:
      "<strong>sanza</strong> brings structured PEMF wellbeing technology to tennis clubs — a premium post-match recovery offer that sets your facility apart and keeps members invested in being here.",
    heroCtaPrimary: "See how tennis clubs use sanza",
    quickStats: [
      { value: "15", label: "recovery programs for players" },
      { value: "1", label: "simple system your team can run" },
      { value: "10 min", label: "to help players reset after court time" },
      { value: "0", label: "changes to your club operations" },
    ],
    problemEyebrow: "Give your players a recovery standard that matches their training.",
    problemTitle: "Your players invest serious time, energy and ambition into every match, lesson and training session.",
    problemBody:
      "<strong>sanza</strong> helps your club support what happens after that effort: recovery, regeneration and the return to readiness.\n\nTennis loads the shoulder, elbow, hips, calves and nervous system again and again. A structured post-court reset gives players a premium way to downshift, recover and feel prepared for the next session.\n\nFor your club, it becomes more than an amenity. It is a visible upgrade to your training environment — a way to support players better, strengthen your performance offer, and make your club feel more complete.",
    problemImage: "/images/campaign/tennis-block-1.jpg",
    solutionTitle: "sanza turns your changing room into a recovery destination.",
    solutionBody:
      "A sanza station — simple, premium, easy to use — gives your members a 15–20 minute structured PEMF decompression option after training or a match. Full-body mat for overall settling, targeted applicator for shoulder or elbow if needed. No staff required. Members run the program themselves from a clear menu. It becomes a post-match ritual.",
    fitsTitle: "Where sanza fits in your facility",
    fitsImages: [
      "/images/campaign/tennis-fit-recovery-room.jpg",
      "/images/campaign/tennis-fit-lounge.jpg",
      "/images/campaign/tennis-fit-performance.jpg",
      "/images/campaign/tennis-fit-tournament.jpg",
    ],
    fitsImagePositions: ["50% 50%", "50% 50%", "50% 50%", "64% 32%"],
    fitsItems: [
      { title: "Post-match recovery station", body: "One mat, one corner, clear program menu. Members use it after a session." },
      { title: "Junior programme add-on", body: "Include sanza access for junior players — parents notice and appreciate the investment." },
      { title: "Coaching partnership", body: "Coaches include sanza in their session programmes — a premium add-on for individual coaching." },
      { title: "Tournament day experience", body: "Offer sanza to tournament participants as part of the event experience." },
    ],
    whatChangesPatientsTitle: "For your members",
    whatChangesPatientsImage: "/images/campaign/tennis-for-members.jpg",
    whatChangesPatientsItems: [
      "A structured recovery ritual they'll build into every club visit",
      "Reduced post-session fatigue — they train more consistently and more frequently",
    ],
    whatChangesPracticeTitle: "For your club",
    whatChangesPracticeImage: "/images/campaign/tennis-for-club.jpg",
    whatChangesPracticeItems: [
      "A tangible differentiator no competitor on your street currently offers",
      "Higher visit frequency from members who have another reason to be here",
      "A facility invested in the whole player experience, not just court time",
    ],
    socialProofQuote: "No competitor on your street currently offers this.",
    finalCtaTitle: "Give your club a recovery offer players will remember.",
    finalCtaBody:
      "Book a facility consultation and we’ll show you where sanza fits into your club — from post-match recovery and coaching programmes to tournament days and premium member experiences.",
    finalCtaPrimary: "Book a facility consultation",
  }),

  "gimenes-arsti": makeCampaignPage({
    segmentName: "General Practitioners",
    metaDescription:
      "A premium, non-clinical wellbeing layer for family practices where patient trust is built visit by visit.",
    contactCategory: "clinics",
    heroKicker: "For family practices where patient trust is built visit by visit",
    heroHeadline: "Your patients trust you with their health. Give them something that adds to that trust.",
    heroSubhead:
      "<strong>sanza</strong> offers family practices a premium, non-clinical wellbeing layer — helping anxious patients settle before consultations, and giving your practice a quality of experience that goes beyond the appointment itself.",
    heroCtaPrimary: "Learn how sanza fits a GP practice",
    problemEyebrow: "White-coat anxiety is real. And it is yours to manage.",
    problemTitle: "A waiting room can do more than wait.",
    problemBody:
      "Patients arrive at GP appointments stressed — about diagnoses, tests, and what they might hear. Elevated blood pressure readings. Guarded histories. Patients who take three questions to say the thing they actually came to say. This is normal. It is also manageable — if the environment before the consultation works differently.",
    solutionTitle: "A waiting room that does more than wait.",
    solutionBody:
      "A sanza mat in your consultation room or a quiet corner of your waiting area creates a different kind of pre-appointment experience. Patients who spend 10 minutes in a structured PEMF settling program arrive at the consultation calmer, more present, and more communicative. The appointment simply goes better.",
    fitsTitle: "Where sanza fits in your practice",
    fitsItems: [
      { title: "Waiting room wellbeing", body: "A sanza mat available during the wait — opt-in, clearly explained, always available." },
      { title: "Pre-consultation settling", body: "Used in a small preparation room before sensitive or high-anxiety appointments." },
      { title: "Post-visit recovery", body: "For patients leaving after difficult news or demanding procedures — a short decompression program before they go back out." },
    ],
    whatChangesPatientsItems: [
      "Less anxiety, more openness during the consultation itself",
      "A practice experience that feels premium and genuinely caring",
    ],
    whatChangesPracticeItems: [
      "Better quality consultations in less time",
      "Patients who recommend you specifically because of how the visit felt",
    ],
    socialProofQuote: "A practice that feels premium from entry to exit.",
    finalCtaTitle: "A practice that feels premium from entry to exit.",
    finalCtaBody: "Request a demo and see how sanza fits your patient flow.",
    finalCtaPrimary: "Request a practice demo",
  }),

  fizioterapeiti: makeCampaignPage({
    segmentName: "Independent Physiotherapists",
    metaDescription:
      "A premium wellbeing tool for independent physiotherapists who want every session to feel complete and memorable.",
    contactCategory: "physiotherapists",
    heroKicker: "For solo practitioners whose reputation is the entire business",
    heroHeadline: "You work with your hands. Let the room work with you.",
    heroSubhead:
      "<strong>sanza</strong> gives independent physiotherapists a premium tool that elevates every session — preparing the patient before you begin and extending the quality of care after you finish. A professional edge that's entirely yours.",
    heroCtaPrimary: "See how independent physios use sanza",
    problemEyebrow: "As a solo practitioner, your reputation is your entire business",
    problemTitle: "Every part of the session should communicate quality.",
    problemBody:
      "You're not competing on price. You're competing on quality, on trust, on the feeling your patients get when they're in your room. Every session is a vote — for loyalty, for referrals, for the reputation that fills your calendar without advertising. The question isn't whether you're good at what you do. The question is whether every part of the experience communicates that — before, during, and after your hands-on work.",
    solutionTitle: "sanza is the upgrade that clients feel and remember.",
    solutionBody:
      "A sanza system gives you 15 numbered programs, a full-body mat, and targeted applicators — all in a setup that one person can run without assistance. Start the session with a settling program while you review your notes. Close with a decompression sequence. Use the pen applicator for targeted comfort moments. Your clinical work doesn't change. What changes is that every patient experiences a complete, considered, premium session from start to finish.",
    fitsTitle: "Where sanza fits your practice",
    fitsItems: [
      { title: "Solo setup", body: "The entire system is operated from one control hub. No assistant needed. You set it, it runs." },
      { title: "Session integration", body: "10-min arrival program + your treatment + 5-min closing program. One seamless experience." },
      { title: "Premium positioning", body: "Raise your session rate to reflect the technology you offer. Patients who experience it understand the value immediately." },
    ],
    whatChangesPatientsItems: [
      "Patients feel the difference and describe it specifically to others",
      "The referral they give is not 'go see a physio' — it's 'go to this practice'",
    ],
    whatChangesPracticeItems: [
      "A complete, premium session that fills your calendar through referrals",
      "A solo practice that competes with — and wins against — larger clinics on experience",
    ],
    socialProofQuote:
      "Patients who experience <strong>sanza</strong> ask about it specifically when referring others.",
    finalCtaTitle: "Book a personal demo for independent practitioners.",
    finalCtaBody: "We'll come to your practice. You'll see it in your room, with your table.",
    finalCtaPrimary: "Book a personal demo",
  }),

  poliklinika: makeCampaignPage({
    segmentName: "Polyclinics & Multi-Speciality Clinics",
    metaDescription:
      "A consistent, premium wellbeing layer for multi-speciality clinics where patient experience is a business asset.",
    contactCategory: "clinics",
    heroKicker: "For clinic owners who know that patient experience is a business asset",
    heroHeadline: "A clinic this complete deserves an experience to match.",
    heroSubhead:
      "<strong>sanza</strong> brings a consistent, premium wellbeing layer to multi-speciality clinics — supporting patient calm across departments and giving your facility a distinguishing quality that patients talk about and recommend.",
    heroCtaPrimary: "Learn how polyclinics use sanza",
    problemEyebrow: "High volume doesn't have to mean low experience",
    problemTitle: "Patients remember how your facility felt.",
    problemBody:
      "Polyclinics see dozens of patients a day across multiple departments. The pressure on staff is real. The margin for individual attention is slim. And yet patients form their impression of your facility not from clinical outcomes alone — but from how they felt walking in, waiting, and leaving. In a competitive healthcare environment, that impression is a business asset. Right now, most multi-speciality clinics feel the same.",
    solutionTitle: "One system, multiple departments, consistent premium quality.",
    solutionBody:
      "sanza integrates at the facility level — a mat in the main waiting area, dedicated units in high-anxiety departments, and optional session rooms for specialised wellbeing programmes. The system is standardised and easy for staff to manage. Patients experience the same calming quality across departments. Your clinic becomes known for something specific: the place that genuinely cares about how you feel.",
    fitsTitle: "Where sanza fits in your facility",
    fitsItems: [
      { title: "Central waiting area", body: "A sanza station patients can opt into before any appointment — immediately signals premium care." },
      { title: "Department-level integration", body: "Prioritise departments where patient anxiety is highest — the ROI in smoother consultations is immediate." },
      { title: "Staff wellbeing", body: "A sanza session room available to clinical staff — supports resilience in high-demand environments." },
      { title: "Branded programme", body: "Offer a Wellbeing Protocol under your clinic brand — a sanza-powered signature service." },
    ],
    whatChangesPatientsItems: [
      "A visit experience they describe specifically — and recommend specifically",
      "Lower anxiety before high-stress appointments",
    ],
    whatChangesPracticeItems: [
      "Patient reviews that mention the experience, not just the clinical outcome",
      "A facility reputation that drives new patient acquisition without marketing spend",
    ],
    socialProofQuote:
      "The place that genuinely cares about how you feel — that's the positioning <strong>sanza</strong> creates.",
    finalCtaTitle: "Schedule a facility-level consultation.",
    finalCtaBody: "We'll map sanza to your room layout and patient flow — no commitment required.",
    finalCtaPrimary: "Schedule a facility-level consultation",
  }),

  "spa-wellness": makeCampaignPage({
    segmentName: "Day Spas & Wellness Centres",
    metaDescription:
      "A premium, technology-led wellness experience for day spas and wellness centres that want a memorable signature offer.",
    contactCategory: "beauty-cosmetic",
    heroKicker: "For spas where the guest experience is the product",
    heroHeadline: "The most memorable treatment you'll ever offer doesn't need a therapist in the room.",
    heroSubhead:
      "<strong>sanza</strong> is a premium, technology-led wellness experience that spa guests feel deeply and come back for — without adding complexity to your operations or pressure to your staff.",
    heroCtaPrimary: "Discover sanza for your spa",
    problemEyebrow: "When your guests have experienced everything, what do you offer next?",
    problemTitle: "Your loyal guests expect you to stay ahead of the curve.",
    problemBody:
      "Your loyal guests have had the hot stone massage. The signature facial. The body wrap. They return because they love you — but their expectations rise every time. Staying ahead of that curve without expanding your team or your footprint is the challenge every serious spa owner knows well.",
    solutionTitle: "sanza: the experience they haven't had yet — anywhere.",
    solutionBody:
      "A sanza session uses structured PEMF frequency programs to create a full-body experience of deep, quiet settling that guests cannot easily explain but immediately want to repeat. It's not heat. It's not pressure. It's something underneath both — a resonance that feels like the body finally remembering how to stop. Position it as your premium tier. Name it as your own. Let the results do the marketing.",
    fitsTitle: "Where sanza fits in your spa",
    fitsItems: [
      { title: "Signature 60-min session", body: "High-margin, low-overhead, waitlisted within weeks of launch." },
      { title: "Treatment enhancer", body: "15-min sanza pre-treatment before massage or facial — an upsell guests request by name after the first time." },
      { title: "Membership feature", body: "Include sanza access in your premium membership — anchor for retention and per-member spend." },
      { title: "Retail crossover", body: "Guests who love the technology ask about home units — a natural conversation Nordora Vital supports." },
    ],
    whatChangesPatientsTitle: "For your guests",
    whatChangesPatientsItems: [
      "An experience they haven't had and will come back for",
      "Guests rebook before they leave the building — consistently",
    ],
    whatChangesPracticeTitle: "For your spa",
    whatChangesPracticeItems: [
      "A signature offer that creates demand no marketing budget can replicate",
      "Premium pricing supported by a genuinely premium experience",
      "Retail revenue from guests who want to extend the experience at home",
    ],
    socialProofQuote: "Guests who try it once rebook before they leave the building.",
    finalCtaTitle: "Talk to us about launching sanza in your spa.",
    finalCtaBody: "A showcase presentation tailored to your facility — at no cost.",
    finalCtaPrimary: "Talk to us about launching sanza",
  }),
};

export const CAMPAIGN_PAGE_CONTENT_DE: Partial<Record<CampaignSlug, CampaignPageContent>> = {
  "sporta-medicina": makeCampaignPage({
    segmentName: "Sportmedizin & Recovery-Zentren",
    metaDescription:
      "Strukturierte PEMF-Wellbeing-Technologie für Sportmedizin und Recovery-Zentren, die Athleten ein vollständigeres Regenerationserlebnis bieten möchten.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/sports-medicine-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für performance-orientierte Praxen, die das gesamte Athletenerlebnis ernst nehmen",
    heroHeadline: "Geben Sie Athleten mehr als Behandlung. Geben Sie ihnen ein Recovery-Erlebnis.",
    heroSubhead:
      "<strong>sanza</strong> bringt strukturierte PEMF-Wellbeing-Technologie in sportmedizinische Settings — damit Athleten schneller zur Ruhe kommen, sich zwischen Terminen geerdeter fühlen und Ihre Einrichtung mit einer spürbaren Qualität verbinden.",
    heroCtaPrimary: "Sport-Recovery-Demo buchen",
    heroValueProps: ["Facility-Walkthrough", "Recovery-Zone Setup", "Einfach fürs Team"],
    quickStats: [
      { value: "15", label: "Möglichkeiten, Athlete Recovery zu unterstützen" },
      { value: "1", label: "einfaches System für Ihr ganzes Team" },
      { value: "10 Min", label: "um den Ankommenszustand zu verändern" },
      { value: "0", label: "Störung Ihres Behandlungsablaufs" },
    ],
    problemEyebrow: "Die Lücke zwischen Behandlung und echter Regeneration",
    problemTitle: "Athleten kommen oft noch hochgefahren an.",
    problemBody:
      "Ihre klinische Expertise ist da. Diagnostik, manuelle Therapie, Ultraschall, Recovery-Protokolle — die technische Seite ist abgedeckt. Doch Athleten kommen häufig mit einem noch aktiven Nervensystem an: Training, Wettkampf, Druck. Das Umfeld rund um die Behandlung zählt. Viele sportmedizinische Einrichtungen fühlen sich trotzdem wie normale Praxen an.",
    problemImage: "/images/campaign/sports-medicine-block-1.jpg",
    solutionTitle: "Geben Sie Athleten etwas, das sie über die Behandlung hinaus spüren.",
    solutionBody:
      "<strong>sanza</strong> nutzt PEMF-Technologie mit strukturierten Frequenzprogrammen als premium Wellbeing-Ebene. Sie unterstützt Athleten dabei, herunterzufahren, anzukommen und präsenter zu werden. Im sportmedizinischen Kontext entsteht dadurch ein Umfeld, über das Athleten sprechen, weil es sich anders anfühlt.",
    fitsTitle: "Wo sanza in Ihren Ablauf passt",
    fitsItems: [
      { title: "Vor der Behandlung", body: "Ein beruhigendes Programm vor anspruchsvoller manueller Arbeit oder Diagnostik." },
      { title: "Nach der Behandlung", body: "Ein strukturierter Abschluss hilft beim Übergang aus der Intervention zurück in den Tag." },
      { title: "Zwischen Terminen", body: "Die sanza-Matte wird zur premium Ruhe- und Recovery-Station statt passiver Wartezeit." },
    ],
    whatChangesPatientsItems: [
      "Ein Recovery-Umfeld, das bewusst und nicht klinisch wirkt",
      "Etwas, das sie fühlen und Teamkollegen beschreiben können",
      "Jeder Besuch bekommt eine konsistente premium Qualität",
    ],
    whatChangesPracticeItems: [
      "Ein Signature-Element statt generischer Sportklinik",
      "Stärkere Bindung durch ein Gefühl, zu dem Athleten zurückkehren",
      "Einfach zu betreuen — klare Programme, einfache Steuerung",
    ],
    whatChangesPracticeImage: "/images/campaign/sports-medicine-for-practice.jpg",
    socialProofQuote:
      "Genutzt von performance-orientierten Praxen in Europa. Wir zeigen genau, wie <strong>sanza</strong> in Ihren Recovery-Flow passt — ohne einen Termin zu stören.",
    finalCtaTitle: "Genutzt von performance-orientierten Praxen in Europa.",
    finalCtaBody:
      "Wir zeigen Ihnen, wie sanza in Ihren Recovery-Flow passt — ohne einen einzigen Termin zu stören.",
    finalCtaPrimary: "Facility-Walkthrough vereinbaren",
  }, "de"),

  hiropraktika: makeCampaignPage({
    segmentName: "Chiropraktik & manuelle Therapie",
    metaDescription:
      "Eine premium Wellbeing-Ebene für Chiropraktik und manuelle Therapie, damit Patienten vor der Arbeit auf der Liege besser ankommen.",
    contactCategory: "therapists",
    heroImage: "/images/campaign/chiro-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Praxen, in denen Gewebeantwort beginnt, bevor Sie berühren",
    heroHeadline: "Geben Sie Ihren Patienten mehr als eine Justierung.",
    heroSubhead:
      "<strong>sanza</strong> hilft Ihnen, den gesamten chiropraktischen Besuch in eine ruhigere, vollständigere Erfahrung zu verwandeln — vor, während und nach Ihrer Arbeit mit den Händen. Patienten fühlen sich entspannter, besser umsorgt und stärker mit Ihrer Praxis verbunden. Ihr Behandlungsablauf bleibt genau so, wie er ist.",
    heroCtaPrimary: "Demo im Chiro-Raum anfragen",
    quickStats: [
      { value: "15", label: "Programme für ruhigere Besuche" },
      { value: "1", label: "einfaches System für das ganze Team" },
      { value: "10 Min", label: "um den Zustand des Raums zu verändern" },
      { value: "0", label: "Änderungen an Ihrer Handarbeit" },
    ],
    problemEyebrow: "Verlieren Sie keine Behandlungszeit mehr an Spannung, die Sie nicht verursacht haben.",
    problemTitle: "Ihre Hände wissen, was zu tun ist.",
    problemBody:
      "Wenn ein Patient angespannt, geschützt, abgelenkt oder nervös ankommt, arbeiten Sie nicht nur mit der Wirbelsäule — Sie arbeiten gegen den Zustand, den er mit in den Raum bringt.\n\n<strong>sanza</strong> hilft Ihnen, diesen Kontext zu verändern.\n\nEs gibt Ihrem chiropraktischen Raum eine ruhige, strukturierte Ebene um die Arbeit, die Sie bereits tun. Patienten kommen schneller zur Ruhe, fühlen sich sicherer auf der Liege und erleben den Besuch als vollständiger. Weniger Widerstand. Mehr Vertrauen. Ein besserer Start für die Justierung — und ein besseres Gefühl beim Gehen.",
    problemImage: "/images/campaign/chiro-block-1.jpg",
    solutionTitle: "sanza beruhigt das Nervensystem, bevor Sie beginnen.",
    solutionBody:
      "Ein 10–15-minütiges Ankommprogramm auf der sanza-Matte schafft ein ruhigeres, geerdeteres Körpergefühl. Das Signal ist sanft, nicht-invasiv und kompatibel mit manueller Arbeit. Ihre Behandlung bleibt dieselbe — aber das, womit Sie arbeiten, verändert sich.",
    fitsTitle: "Wo sanza in Ihren Ablauf passt",
    fitsImages: [
      "/images/campaign/chiro-fit-arrival.jpg",
      "/images/campaign/chiro-fit-applicators.jpg",
      "/images/campaign/chiro-fit-decompression.jpg",
    ],
    fitsItems: [
      { title: "Ankommprogramm", body: "Der Patient liegt auf der Matte, während Sie Notizen prüfen. Wenn Sie bereit sind, ist er es eher auch." },
      { title: "Gezielte Applikatoren", body: "Kurze lokale Komfortmomente für Nacken oder Schulter vor gezielter Arbeit." },
      { title: "Abschluss-Dekompression", body: "Ein 5-Minuten-Programm schafft einen ruhigen Übergang zurück in den Tag." },
    ],
    whatChangesPatientsItems: [
      "Weniger Schutzspannung und vollständigere Entspannung",
      "Eine Praxis, die durchdacht und hochwertig wirkt",
    ],
    whatChangesPracticeItems: [
      "Weniger schwierige Liegenmomente",
      "Ein klarer Unterschied zu anderen Praxen",
      "Patienten beschreiben es weiter und empfehlen die Erfahrung",
    ],
    whatChangesPracticeImage: "/images/campaign/chiro-for-practice.jpg",
    whatChangesPracticeImagePosition: "50% 32%",
    socialProofQuote:
      "Die meisten Chiropraktiker möchten es einmal ausprobieren und dann entscheiden. Genau das bieten wir an.",
    finalCtaTitle: "Einmal ausprobieren und dann entscheiden.",
    finalCtaBody: "Wir bieten eine unverbindliche Demo in Ihrer Praxis.",
    finalCtaPrimary: "Unverbindliche Demo buchen",
  }, "de"),

  "joga-meditacija": makeCampaignPage({
    segmentName: "Yoga- & Meditationsstudios",
    metaDescription:
      "Grounding PEMF-Wellbeing-Technologie für Yoga- und Meditationsstudios, in denen Präsenz das eigentliche Produkt ist.",
    contactCategory: "therapists",
    heroImage: "/images/campaign/yoga-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Studios, in denen Präsenz das Produkt ist",
    heroHeadline: "Geben Sie Ihren Schülern mehr als eine Klasse. Geben Sie ihnen einen Zustand, zu dem sie zurückkehren möchten.",
    heroSubhead:
      "<strong>sanza</strong> ergänzt Ihr Studioerlebnis um eine ruhige Grounding-Ebene — sie hilft Schülern anzukommen, weicher zu werden, zu praktizieren und mit einem tieferen Gefühl von Ruhe zu gehen. Sie unterstützt die Atmosphäre, an der Sie bereits so bewusst arbeiten, ohne zu verändern, wie Sie unterrichten.",
    heroCtaPrimary: "sanza im Studio erleben",
    heroValueProps: ["Studio-Erfahrung", "Stille Technologie", "Premium-Rituale"],
    quickStats: [
      { value: "15", label: "Wege, das Klassenerlebnis zu vertiefen" },
      { value: "1", label: "einfaches System für Ihr Studio" },
      { value: "10 Min", label: "damit Schüler wirklich ankommen" },
      { value: "0", label: "Änderungen an Ihrem Unterrichtsablauf" },
    ],
    problemEyebrow: "Ihre Schüler bringen den Tag mit in die Klasse.",
    problemTitle: "Sie liegen vielleicht auf der Matte, aber ein Teil von ihnen ist noch im Auto, im Posteingang, im Meeting, im Lärm, aus dem sie gerade kommen.",
    problemBody:
      "Als Studioinhaber wissen Sie, wie viel des ersten Teils einer Klasse damit verbracht wird, Menschen beim Ankommen zu helfen — den Atem weicher werden zu lassen, das Nervensystem zu beruhigen, die Aufmerksamkeit zurück in den Körper zu bringen.\n\n<strong>sanza</strong> unterstützt diesen Übergang.\n\nEs ergänzt Ihr Studio um eine ruhige, strukturierte Grounding-Ebene, damit Schüler schneller zur Ruhe kommen, präsenter in der Praxis sind und mit der Art von Ruhe gehen, zu der sie zurückkehren möchten.\n\nNicht, um Ihren Unterricht zu ersetzen.\nSondern damit der Raum ihn unterstützt.",
    problemImage: "/images/campaign/yoga-block-1.jpg",
    solutionTitle: "sanza ist Grounding-Technologie für Räume, die Präsenz schätzen.",
    solutionBody:
      "PEMF-Signale wirken unterhalb der bewussten Wahrnehmung als strukturierter Ganzkörper-Impuls. Schüler müssen es nicht verstehen. Sie fühlen sich anders — ruhiger, angekommener, bereit nach innen zu gehen. Ihre Lehre landet in einem Körper, der bereits weicher geworden ist.",
    fitsTitle: "Wo sanza in Ihr Studio passt",
    fitsImages: [
      "/images/campaign/yoga-fit-pre-class.jpg",
      "/images/campaign/yoga-fit-savasana.jpg",
      "/images/campaign/yoga-fit-private.jpg",
      "/images/campaign/yoga-fit-workshop.jpg",
    ],
    fitsItems: [
      { title: "Vor der Klasse", body: "Mattenprogramme laufen 10–15 Minuten vor Beginn. Die Schüler legen sich hin, der Raum übernimmt das Ankommen." },
      { title: "Savasana vertiefen", body: "Ein Dekompressionsprogramm während der Endruhe lässt Savasana länger und vollständiger wirken." },
      { title: "Private Sessions", body: "Als Teil einer hochwertigen 1:1-Erfahrung, besonders bei restorative oder trauma-sensibler Arbeit." },
      { title: "Workshops & Retreats", body: "Ein strukturierter Auftakt und Abschluss als Signature-Ritual Ihrer Events." },
    ],
    whatChangesPatientsTitle: "Für Ihre Schüler",
    whatChangesPatientsItems: [
      "Sie kommen gestresst an und gehen wirklich gesetzter — nicht nur gedehnt",
      "Savasana fühlt sich anders an. Tiefer. Sie merken es.",
      "Ihr Studio wird mit einer bestimmten Erlebnisqualität verbunden",
    ],
    whatChangesPracticeTitle: "Für Ihr Studio",
    whatChangesPracticeItems: [
      "Ein Premium-Angebot, das Ihre Preise unterstützt",
      "Loyalität, weil die Erfahrung schwer ersetzbar ist",
      "Lehrer erleben den Raum vom ersten Atemzug an leichter",
    ],
    whatChangesPracticeImage: "/images/campaign/yoga-for-studio.jpg",
    socialProofQuote:
      "Das will ich in meinem Studio. — Viele Studioinhaber nach der ersten <strong>sanza</strong>-Erfahrung.",
    finalCtaTitle: "Eine Session. Sie fühlen, was Ihre Schüler fühlen werden.",
    finalCtaBody:
      "Wir bieten eine persönliche Experience Session für Studioinhaber vor jeder Entscheidung.",
    finalCtaPrimary: "Experience Session buchen",
  }, "de"),

  "sporta-zales": makeCampaignPage({
    segmentName: "Fitnessstudios, CrossFit & Trainingsflächen",
    metaDescription:
      "Eine premium Recovery- und Dekompressionsstation für Fitnessflächen, die Mitgliederbindung ernst nehmen.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/gym-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Einrichtungen, die wissen: Retention ist das eigentliche Spiel",
    heroHeadline: "Machen Sie Ihr Gym zu dem Ort, an den Mitglieder nicht nur zum Trainieren, sondern auch zum Erholen kommen.",
    heroSubhead:
      "Jedes Gym kann Geräte anbieten.\nWeniger können ein Recovery-Erlebnis bieten, an das Mitglieder sich erinnern.\n\n<strong>sanza</strong> gibt Ihrer Einrichtung eine premium Dekompressions-Ebene nach dem Training — damit Mitglieder langsamer werden, resetten und sich wirklich gut aufgehoben fühlen. Dieses Gefühl wird Teil Ihrer Marke.",
    heroCtaPrimary: "Recovery-Station fürs Studio anfragen",
    heroValueProps: ["Eine Recovery-Station", "Kein Extra-Personal", "Premium-Ritual"],
    quickStats: [
      { value: "15", label: "Recovery-Programme, die Mitglieder spüren" },
      { value: "1", label: "einfaches System für Ihr Team" },
      { value: "10 Min", label: "für einen premium Reset-Moment" },
      { value: "0", label: "Änderungen an Ihrem Trainingsangebot" },
    ],
    problemEyebrow: "Führen Sie das Mitgliedererlebnis über das Workout hinaus.",
    problemTitle: "Ihr Gym gibt Mitgliedern bereits einen Ort zum Trainieren, Leisten und Fordern.",
    problemBody:
      "<strong>sanza</strong> hilft Ihnen, dieses Erlebnis auf das zu erweitern, was nach der Anstrengung passiert: einen ruhigen, strukturierten Recovery-Moment, der premium, bewusst und wirklich wertvoll wirkt.\n\nEs gibt Mitgliedern einen weiteren Grund, länger zu bleiben, sich beim Gehen besser zu fühlen und Ihre Einrichtung mit mehr als Geräten oder Kursen zu verbinden. Kein Ersatz für das, was Sie bereits gut machen — sondern eine einfache Möglichkeit, den gesamten Besuch vollständiger wirken zu lassen.",
    problemImage: "/images/campaign/gym-block-1.jpg",
    solutionTitle: "sanza: eine Recovery-Station, die Mitglieder wirklich nutzen und weitererzählen.",
    solutionBody:
      "Eine sanza-Station — Matte, Steuerung, klares Programmmenü — bietet 15–20 Minuten strukturierte PEMF-Dekompression nach dem Training. Kein Personal muss sie bedienen. Mitglieder wählen selbst ein Programm. Es wird Ritual und Grund, länger zu bleiben.",
    fitsTitle: "Wo sanza in Ihre Fläche passt",
    fitsImages: [
      "/images/campaign/gym-fit-recovery-zone.jpg",
      "/images/campaign/gym-fit-membership-tier.jpg",
      "/images/campaign/gym-fit-hiit.jpg",
      "/images/campaign/gym-fit-pt-closeout.jpg",
    ],
    fitsItems: [
      { title: "Standalone Recovery-Zone", body: "Eine Matte, eine Steuerung, eine Ecke. Mitglieder buchen 15-Minuten-Slots nach dem Training." },
      { title: "Premium-Mitgliedschaft", body: "sanza-Zugang als Teil eines Premium-Tiers — mehr Umsatz pro Mitglied ohne Personalkosten." },
      { title: "CrossFit / HIIT", body: "Nach hoher Intensität ist strukturierte Dekompression genau das, was das Nervensystem braucht." },
      { title: "Personal Training Add-on", body: "Trainer schließen Sessions mit 10 Minuten sanza ab — mehr Wert, mehr Rebooking." },
    ],
    whatChangesPatientsTitle: "Für Ihre Mitglieder",
    whatChangesPatientsItems: [
      "Ein Post-Workout-Erlebnis, das premium und bewusst wirkt",
      "Mehr Ruhe und gleichmäßigere Energie nach hartem Training",
      "Ein Grund, länger in Ihrer Einrichtung zu bleiben",
    ],
    whatChangesPracticeTitle: "Für Ihre Einrichtung",
    whatChangesPracticeItems: [
      "Ein echter Unterschied, den Wettbewerber nicht über Nacht kopieren",
      "Stärkere Bindung durch nutzbare Recovery-Zonen",
      "Mundpropaganda: Hast du die Recovery-Matte dort schon probiert?",
    ],
    whatChangesPracticeImage: "/images/campaign/gym-for-facility.jpg",
    socialProofQuote: "Eine Station. Kein Extra-Personal. Ein Grund zu verlängern.",
    finalCtaTitle: "Eine Station. Kein Extra-Personal. Ein Grund zu verlängern.",
    finalCtaBody:
      "Sprechen Sie mit uns über einen Pilot in Ihrer Einrichtung — passend zu Grundriss und Mitgliedschaftsmodell.",
    finalCtaPrimary: "Über einen Pilot sprechen",
  }, "de"),

  veterinarija: makeCampaignPage({
    segmentName: "Tierarztpraxen",
    metaDescription:
      "Sanfte PEMF-Wellbeing-Technologie für Tierarztpraxen, die eine ruhigere Umgebung für Tiere, Besitzer und Teams schaffen möchten.",
    contactCategory: "clinics",
    heroKicker: "Für Praxen, in denen Tierstress eine fachliche Herausforderung ist",
    heroHeadline: "Ruhigere Tiere. Glattere Abläufe. Besser für alle im Raum.",
    heroSubhead:
      "<strong>sanza</strong> PEMF-Wellbeing-Technologie passt direkt in tiermedizinische Umfelder — als ruhigeres Vorfeld für Tier, Besitzer und Team.",
    heroCtaPrimary: "sanza für Tierarztpraxen kennenlernen",
    problemEyebrow: "Stress verändert jeden Tierarztbesuch",
    problemTitle: "Eine ruhigere Umgebung kann den ganzen Raum verändern.",
    problemBody:
      "Ein ängstlicher Hund liegt nicht still. Eine gestresste Katze reagiert körperlich. Ein unruhiges Pferd widersteht jedem Schritt. Stress macht Ihre Arbeit schwerer und lässt Besitzer fühlen, dass ihr Tier mehr gelitten hat als nötig. Eine ruhigere Umgebung vor Beginn kann vieles verändern.",
    solutionTitle: "sanza schafft eine ruhigere Umgebung — für Tiere, Besitzer und Ihr Team.",
    solutionBody:
      "PEMF-Signale werden in europäischen Tier-Wellbeing-Kontexten genutzt. Eine sanza-Matte im Warte- oder Vorbereitungsbereich gibt einen strukturierten, sanften und nicht-invasiven Beruhigungsimpuls. Sie positionieren es als Premium-Care-Ebene, nicht als medizinische Behandlung.",
    fitsTitle: "Wo sanza in Ihre Praxis passt",
    fitsItems: [
      { title: "Vorbereitungsbereich", body: "Eine sanza-Matte in einer ruhigen Ecke — Tiere ruhen vor Untersuchung oder Behandlung." },
      { title: "Nach Eingriffen", body: "Ein sanftes Dekompressionsprogramm während der Erholung unterstützt ruhige Re-Orientierung." },
      { title: "Besitzererlebnis", body: "Besitzer sehen ein bewusstes Umfeld und fühlen, dass ihr Tier ganzheitlich umsorgt wird." },
      { title: "Physio-nahe Leistungen", body: "Bei Tierphysio oder Reha integriert sich sanza natürlich vor oder nach der Session." },
    ],
    whatChangesPatientsTitle: "Für Tiere und Besitzer",
    whatChangesPatientsItems: [
      "Weniger Vorstress bei sensiblen Tieren",
      "Ruhigerer Start in Untersuchungen und Interventionen",
      "Besitzer sehen, dass Fürsorge über das Minimum hinausgeht",
    ],
    whatChangesPracticeItems: [
      "Sichtbarer Beweis, dass Ihre Praxis anders arbeitet",
      "Besitzer empfehlen Sie, weil die Erfahrung anders war",
      "Weniger Haltemomente, ruhigere Raumenergie, weniger Erschöpfung im Team",
    ],
    socialProofQuote:
      "Einige progressive Tierarztpraxen in Europa nutzen <strong>sanza</strong> bereits. Wir zeigen Ihnen warum.",
    finalCtaTitle: "Progressive Tierarztpraxen in Europa nutzen sanza bereits.",
    finalCtaBody: "Wir zeigen Ihnen, warum — und wie es in Ihrer Praxis funktionieren würde.",
    finalCtaPrimary: "Demo für Tierarztpraxis anfragen",
  }, "de"),

  jahsanas: makeCampaignPage({
    segmentName: "Reitzentren & Ställe",
    metaDescription:
      "Strukturiertes PEMF-Wellbeing für Reitzentren und Ställe, die Pferdewohlbefinden so ernst nehmen wie Leistung.",
    contactCategory: "sports-performance",
    heroKicker: "Für Ställe, die Pferdewohlbefinden so ernst nehmen wie Leistung",
    heroHeadline: "Für Ställe, die Pferdewohlbefinden so ernst nehmen wie Performance.",
    heroSubhead:
      "<strong>sanza</strong> PEMF-Technologie wird in europäischen Pferde-Performance- und Wellbeing-Umfeldern eingesetzt — für ruhigere Pferde, besseres Ankommen nach Transport oder Wettkampf und einen Premium-Pflegestandard.",
    heroCtaPrimary: "sanza für Reitanlagen kennenlernen",
    problemEyebrow: "Ein gestresstes Pferd ist ein Pferd unter seinem Potenzial",
    problemTitle: "Tägliche Pflege braucht systematische, nicht-invasive Unterstützung.",
    problemBody:
      "Transportstress, Turnierspannung, Ermüdung nach Belastung — Pferde tragen Stress im Körper. Das beeinflusst Leistung, Erholung und Trainierbarkeit. Was vielen Ställen fehlt, ist ein systematisches, nicht-invasives Werkzeug für die tägliche Routine zwischen Tierarzt und Stall.",
    solutionTitle: "sanza: strukturiertes PEMF-Wellbeing für Pferdeumfelder.",
    solutionBody:
      "PEMF-Technologie hat eine etablierte Geschichte im Pferdebereich. sanza bringt eine programmierbare, strukturierte PEMF-Erfahrung in Stall oder Behandlungsbereich: Matten, gezielte Applikatoren und eine Steuerung, die Personal zuverlässig bedienen kann.",
    fitsTitle: "Wo sanza in Ihren Stall passt",
    fitsItems: [
      { title: "Nach Transport", body: "Ein strukturiertes Programm während der ersten Ruhephase nach Anreise oder Wettkampf." },
      { title: "Vor dem Training", body: "Ein kurzes Programm vor anspruchsvoller Arbeit — Pferde starten aus einem ruhigeren Zustand." },
      { title: "Premium-Livery", body: "sanza-Sessions als Teil eines hochwertigen Einstellpakets, das Besitzer nachvollziehen." },
      { title: "Reha-Begleitung", body: "Als sanfte, nicht-klinische Komfortebene während Erholungsphasen." },
    ],
    whatChangesPatientsTitle: "Für Pferde und Besitzer",
    whatChangesPatientsItems: [
      "Konsequenteres Ankommen nach Stressereignissen",
      "Ein tägliches Wellbeing-Ritual, das erfahrene Reiter und Besitzer erkennen und schätzen",
    ],
    whatChangesPracticeTitle: "Für Ihren Stall",
    whatChangesPracticeItems: [
      "Ein Premium-Service, den kaum ein Stall in Lettland bietet",
      "Höherwertige Beziehungen zu Besitzern, die Investition in Pferdewohl sehen",
    ],
    socialProofQuote:
      "Genutzt in Performance-Ställen in Deutschland, Österreich und der Schweiz. Jetzt über Nordora Vital in Lettland verfügbar.",
    finalCtaTitle: "Genutzt in Performance-Ställen in Deutschland, Österreich und der Schweiz.",
    finalCtaBody: "Jetzt über Nordora Vital in Lettland verfügbar. Vereinbaren Sie eine Stall-Beratung.",
    finalCtaPrimary: "Stall-Beratung vereinbaren",
  }, "de"),

  "vecu-cilveku-aprupe": makeCampaignPage({
    segmentName: "Pflegeheime & Senioreneinrichtungen",
    metaDescription:
      "Eine sanfte, strukturierte PEMF-Wellbeing-Erfahrung für Senioreneinrichtungen, in denen Komfort und Würde täglich zählen.",
    contactCategory: "clinics",
    heroKicker: "Für Einrichtungen, in denen Komfort und Würde Qualität messen",
    heroHeadline: "Komfort, Ruhe und Würde — für jeden Bewohner, jeden Tag.",
    heroSubhead:
      "<strong>sanza</strong> bringt eine sanfte, strukturierte Wellbeing-Erfahrung in Senioreneinrichtungen — zur Unterstützung von Entspannung, Komfort und dem Gefühl, wirklich umsorgt zu sein.",
    heroCtaPrimary: "sanza in der Seniorenpflege kennenlernen",
    problemEyebrow: "Die Lücke zwischen Sicherheit und echter Lebensqualität",
    problemTitle: "Bewohner brauchen mehr als Sicherheit. Sie brauchen spürbaren Komfort.",
    problemBody:
      "Ihre Bewohner sind sicher, versorgt und medizinisch begleitet. Doch die gelebte Erfahrung in einer Einrichtung — Grundanspannung, weniger Autonomie, geteilte Räume — belastet. Familien bemerken Unruhe oder weniger Gelöstheit. Zusätzlich zur Pflege braucht es ein sanftes, wiederkehrendes Signal: Ihr Komfort zählt.",
    solutionTitle: "sanza: ein tägliches Komfort-Ritual für Bewohner.",
    solutionBody:
      "sanza nutzt sanfte PEMF-Frequenzsignale für eine Ganzkörper-Wellbeing-Erfahrung — ohne Nadeln, Medikamente oder aktive Mitarbeit. Bewohner liegen oder sitzen auf der Matte, das Programm läuft. Für Pflegekräfte ist es ein würdevolles Werkzeug, das zeigt: Wir denken daran, wie Sie sich fühlen.",
    fitsTitle: "Wo sanza in Ihre Einrichtung passt",
    fitsItems: [
      { title: "Morgenroutine", body: "Ein sanftes Programm nach dem Frühstück als ruhiger Start in den Tag." },
      { title: "Nachmittagsruhe", body: "Programme während der natürlichen Ruhezeit für tieferes, erholsameres Ausruhen." },
      { title: "Individuelle Komfort-Sessions", body: "Für Bewohner mit mehr Unruhe oder chronischem Unwohlsein als personalisiertes Element." },
      { title: "Vor Familienbesuchen", body: "Ein kurzes Programm kann Begegnungen für unruhige Bewohner erleichtern." },
    ],
    whatChangesPatientsTitle: "Für Ihre Bewohner",
    whatChangesPatientsItems: [
      "Ein tägliches Erlebnis von Komfort und echter Fürsorge",
      "Ein Ritual von Ruhe, das Stimmung und Tagesqualität unterstützt",
    ],
    whatChangesPracticeTitle: "Für Ihre Einrichtung",
    whatChangesPracticeItems: [
      "Sichtbarer Beweis, dass die ganze Person zählt",
      "Mehr Vertrauen in Pflegequalität und stärkere Empfehlungen",
      "Ein hilfreiches Werkzeug für schwierige Momente ohne Rezept",
    ],
    socialProofQuote:
      "Senioreneinrichtungen in Europa nutzen <strong>sanza</strong> als tägliches Bewohner-Wellbeing-Programm.",
    finalCtaTitle: "Senioreneinrichtungen in Europa nutzen sanza täglich.",
    finalCtaBody: "Wir zeigen Ihnen, wie es in Ihrer Einrichtung funktionieren würde.",
    finalCtaPrimary: "Beratung für Pflegeeinrichtung buchen",
  }, "de"),

  "spa-viesnicas": makeCampaignPage({
    segmentName: "Spa-Hotels & Resorts",
    metaDescription:
      "Premium PEMF-Wellbeing-Technologie für Spa-Hotels und Resorts, die ein erinnerungswürdiges Gästeerlebnis suchen.",
    contactCategory: "beauty-cosmetic",
    heroImage: "/images/campaign/spa-hotel-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Häuser, die das Gästeerlebnis ernst nehmen",
    heroHeadline: "Geben Sie Ihren Gästen ein Wellness-Erlebnis, das sie nicht überall bekommen.",
    heroSubhead:
      "Ihr Spa bietet bereits Komfort, Fürsorge und Atmosphäre. <strong>sanza</strong> hilft Ihnen, diesem Erlebnis eine neue Ebene hinzuzufügen: einen ruhigen, technologiegestützten Reset, der premium, erinnerungswürdig und leise anders wirkt.\n\nGäste erinnern sich nicht nur an die Behandlungskarte. Sie erinnern sich daran, wie tief sie abgeschaltet haben, wie umsorgt sie sich fühlten und ob das Erlebnis ihnen etwas gab, worüber sie sprechen möchten. <strong>sanza</strong> gibt Ihrem Spa einen unverwechselbaren Wellbeing-Moment, der eine hochwertige Positionierung unterstützt, ohne Ihre bestehenden Behandlungen zu verändern.",
    heroCtaPrimary: "sanza fürs Spa entdecken",
    quickStats: [
      { value: "15", label: "premium Wellbeing-Programme" },
      { value: "1", label: "einfaches System für Ihr Team" },
      { value: "10 Min", label: "für einen erinnerungswürdigen Reset" },
      { value: "0", label: "Änderungen an Ihrer Spa-Karte" },
    ],
    problemEyebrow: "Geben Sie Gästen einen Grund, nach der Abreise über Ihr Spa zu sprechen.",
    problemTitle: "Sauna, Massage und Ruheraum finden Ihre Gäste in fast jedem Premium-Hotel.",
    problemBody:
      "Was sie nicht überall finden, ist ein Wellness-Erlebnis, das sich wirklich neu, tief beruhigend und erinnerungswürdig anfühlt.\n\nGenau darin liegt die Chance.\n\n<strong>sanza</strong> hilft Ihnen, Ihrem Spa einen unverwechselbaren, technologiegestützten Reset hinzuzufügen — nicht noch eine Standardbehandlung auf der Karte, sondern einen premium Wellbeing-Moment, den Gäste sofort spüren. Dadurch wirkt Ihr Spa-Erlebnis vollständiger, differenzierter und wird eher zu dem Teil des Aufenthalts, den Gäste jemand anderem erzählen.",
    problemImage: "/images/campaign/spa-hotel-block-1.jpg",
    solutionTitle: "sanza: das Erlebnis, das Gäste in Lettland kaum anderswo bekommen.",
    solutionBody:
      "sanza ist ein professionelles PEMF-Wellbeing-System, das chronobiologische Frequenzprogramme für eine tiefe, stille Erdung nutzt. Es ist keine Massage und keine Wärme. Es ist ein eigenständiges Erlebnis, das Gäste sofort wiederholen möchten. Positionieren Sie es als Signature-Programm unter Ihrer Marke.",
    fitsTitle: "Wo sanza in Ihr Spa passt",
    fitsImages: [
      "/images/campaign/spa-fit-signature.jpg",
      "/images/campaign/spa-fit-pre-treatment.jpg",
      "/images/campaign/spa-fit-relaxation.jpg",
      "/images/campaign/spa-fit-retreat.jpg",
    ],
    fitsItems: [
      { title: "Signature-Programm", body: "Die sanza-Session als 45–60 Minuten Premium-Buchung mit Matte und Applikatoren." },
      { title: "Vorbereitung", body: "15 Minuten sanza vor Massage oder Facial — die Behandlung trifft auf einen bereits geöffneten Körper." },
      { title: "Relaxation-Room Feature", body: "Eine sanza-Station im Ruhebereich, zwischen Treatments oder als Standalone-Erlebnis." },
      { title: "Retreats & Paare", body: "In Retreats integrieren oder als premium Couples Session mit zwei Matten anbieten." },
    ],
    whatChangesPatientsTitle: "Für Ihre Gäste",
    whatChangesPatientsItems: [
      "Ein Erlebnis, das sie noch nicht hatten und wiederholen möchten",
      "Tiefe Ruhe, die Ihr Spa von anderen Luxusoptionen unterscheidet",
      "Etwas, das sie Freunden neugierig beschreiben",
    ],
    whatChangesPracticeTitle: "Für Ihr Haus",
    whatChangesPracticeItems: [
      "Ein kategoriestiftendes Angebot im lettischen Markt",
      "Premium-Preise mit Technologie + Erlebnis begründbar",
      "Mehr Spa-Umsatz pro Gast ohne höhere Personalquote",
    ],
    whatChangesPracticeImage: "/images/campaign/spa-for-property.png",
    socialProofQuote:
      "Einige premium europäische Spas und Wellness-Hotels führen <strong>sanza</strong> bereits.",
    finalCtaTitle: "Premium-Spas in Europa führen sanza bereits.",
    finalCtaBody: "Wir zeigen Ihnen, wie es in einem Luxus-Spa-Kontext aussieht.",
    finalCtaPrimary: "Spa-Showcase anfragen",
  }, "de"),

  "golfa-klubi": makeCampaignPage({
    segmentName: "Golfclubs",
    metaDescription:
      "Premium PEMF-Wellbeing-Technologie für Golfclubs, die ihren Mitgliedern ein post-round Recovery-Ritual bieten möchten.",
    contactCategory: "sports-performance",
    heroKicker: "Für Clubs, in denen das Mitgliedererlebnis über das 18. Loch hinausgeht",
    heroHeadline: "Das 19. Loch war immer Erholung. Heben Sie diese Idee an.",
    heroSubhead:
      "<strong>sanza</strong> bringt premium PEMF-Wellbeing-Technologie in Golfclubs — als Recovery- und Entspannungserlebnis nach der Runde, passend zum Anspruch Ihrer Mitglieder.",
    heroCtaPrimary: "sanza für Golfclubs kennenlernen",
    problemEyebrow: "Erwarten Ihre Mitglieder Recovery auf Clubniveau?",
    problemTitle: "Die meisten Clubs enden bei Dusche und Bar.",
    problemBody:
      "Golf ist körperlich. Rücken, Hüfte, Schultern und Waden tragen vier Stunden Platz. Viele Mitglieder sind aktiv, aber mit Spannung, früheren Verletzungen oder Steifheit unterwegs. Nur wenige Clubs bieten mehr als das Übliche. Wer es tut, fällt sofort auf.",
    solutionTitle: "sanza: ein Post-Round-Ritual, das Teil Ihrer Clubkultur wird.",
    solutionBody:
      "Eine sanza-Station im Clubhaus oder Recovery-Raum bietet 15–20 Minuten strukturierte PEMF-Dekompression nach der Runde. Full-body Setting, gezielte Applikatoren und ein leises premium Gefühl. Wer es einmal nutzt, nutzt es wieder.",
    fitsTitle: "Wo sanza in Ihren Club passt",
    fitsItems: [
      { title: "Recovery-Raum", body: "Ein ruhiger, gebrandeter Raum — eine Matte, Licht, 15-Minuten-Programme." },
      { title: "Pro-Shop Add-on", body: "sanza-Sessions als premium Zusatz nach Lektion oder Runde." },
      { title: "Corporate Days", body: "Als besonderes Element in hochwertigen Corporate-Golfpaketen." },
      { title: "Mitgliedschafts-Tier", body: "sanza-Zugang im Premium-Tier erhöht Wert und Bindung." },
    ],
    whatChangesPatientsTitle: "Für Ihre Mitglieder",
    whatChangesPatientsItems: [
      "Eine spürbare Recovery-Option nach der Runde",
      "Ein Club, der sichtbar in Komfort und Qualität investiert",
    ],
    whatChangesPracticeTitle: "Für Ihren Club",
    whatChangesPracticeItems: [
      "Ein premium Differenzierungsmerkmal",
      "Zusätzliche Umsatzlinie mit geringen Betriebskosten",
      "Mitglieder erleben ihre Investition als stärker gerechtfertigt",
    ],
    socialProofQuote:
      "Ein Club, der Recovery so ernst nimmt wie das Spiel. Genau diese Positionierung unterstützt <strong>sanza</strong>.",
    finalCtaTitle: "Ein Club, der Recovery so ernst nimmt wie das Spiel.",
    finalCtaBody: "Sprechen Sie mit uns darüber, wie sanza in Ihr Clubhaus passt.",
    finalCtaPrimary: "Über Ihren Club sprechen",
  }, "de"),

  "tenisa-klubi": makeCampaignPage({
    segmentName: "Tennisclubs",
    metaDescription:
      "Strukturierte PEMF-Wellbeing-Technologie für Tennisclubs, die Mitgliedern ein erinnerungswürdiges Post-Match-Recovery-Angebot machen möchten.",
    contactCategory: "sports-performance",
    heroKicker: "Für Anlagen, die wissen: Mitgliederbindung entsteht zwischen den Sessions",
    heroHeadline: "Ihre Mitglieder trainieren hart. Geben Sie ihnen Recovery, die dazu passt.",
    heroSubhead:
      "<strong>sanza</strong> bringt strukturierte PEMF-Wellbeing-Technologie in Tennisclubs — ein premium Post-Match-Recovery-Angebot, das Ihre Anlage unterscheidet.",
    heroCtaPrimary: "sanza für Tennisclubs kennenlernen",
    problemEyebrow: "Nach dem Match kommt oft nichts. Das ist eine verpasste Chance.",
    problemTitle: "Das Erlebnis sollte nicht an der Grundlinie enden.",
    problemBody:
      "Tennisspieler geben auf dem Platz alles: Schulter, Ellbogen, Wade, laterale Bewegung, Wiederholungen, Wettkampfspannung. Danach Handtuch, Dusche, Parkplatz. Clubs, die einen Grund schaffen zu bleiben, zu regenerieren und sich umsorgt zu fühlen, bauen andere Loyalität auf.",
    solutionTitle: "sanza macht Ihre Umkleide zur Recovery-Destination.",
    solutionBody:
      "Eine sanza-Station gibt Mitgliedern 15–20 Minuten strukturierte PEMF-Dekompression nach Training oder Match. Matte, gezielte Applikatoren, klares Menü, kein Personalaufwand. Es wird ein Post-Match-Ritual.",
    fitsTitle: "Wo sanza in Ihre Anlage passt",
    fitsItems: [
      { title: "Post-Match Recovery", body: "Eine Matte, eine Ecke, klares Programmmenü. Mitglieder nutzen es nach der Session." },
      { title: "Junior-Programm", body: "sanza-Zugang für Junioren — Eltern bemerken die Investition in Betreuung." },
      { title: "Coaching-Pakete", body: "Trainer integrieren sanza als premium Zusatz in Einzelstunden." },
      { title: "Turniertage", body: "sanza als Teil des Eventerlebnisses macht Ihren Club erinnerbar." },
    ],
    whatChangesPatientsTitle: "Für Ihre Mitglieder",
    whatChangesPatientsItems: [
      "Ein strukturiertes Recovery-Ritual bei jedem Clubbesuch",
      "Weniger Erschöpfung nach Sessions — sie trainieren konstanter",
    ],
    whatChangesPracticeTitle: "Für Ihren Club",
    whatChangesPracticeItems: [
      "Ein greifbarer Unterschied, den Wettbewerber nicht bieten",
      "Höhere Besuchsfrequenz durch einen weiteren Grund hier zu sein",
      "Eine Anlage, die das ganze Spielerlebnis ernst nimmt",
    ],
    socialProofQuote: "Kein Wettbewerber in Ihrer Straße bietet das aktuell.",
    finalCtaTitle: "Kein Wettbewerber in Ihrer Straße bietet das aktuell.",
    finalCtaBody: "Buchen Sie eine Facility-Beratung und sehen Sie, wie sanza passt.",
    finalCtaPrimary: "Facility-Beratung buchen",
  }, "de"),

  "gimenes-arsti": makeCampaignPage({
    segmentName: "Hausarztpraxen",
    metaDescription:
      "Eine premium, nicht-klinische Wellbeing-Ebene für Hausarztpraxen, in denen Vertrauen Besuch für Besuch entsteht.",
    contactCategory: "clinics",
    heroKicker: "Für Familienpraxen, in denen Vertrauen Besuch für Besuch entsteht",
    heroHeadline: "Ihre Patienten vertrauen Ihnen ihre Gesundheit an. Geben Sie ihnen etwas, das dieses Vertrauen stärkt.",
    heroSubhead:
      "<strong>sanza</strong> bietet Hausarztpraxen eine premium, nicht-klinische Wellbeing-Ebene — damit ängstliche Patienten vor Gesprächen ruhiger ankommen und die Praxis über den Termin hinaus hochwertig wirkt.",
    heroCtaPrimary: "sanza für Hausarztpraxen kennenlernen",
    problemEyebrow: "White-Coat Anxiety ist real. Und Sie müssen sie mit auffangen.",
    problemTitle: "Ein Wartezimmer kann mehr tun als warten.",
    problemBody:
      "Patienten kommen gestresst: wegen Diagnosen, Tests, Unsicherheit. Erhöhte Werte, zurückhaltende Gespräche, Antworten, die erst nach mehreren Fragen kommen. Das ist normal. Es ist aber beeinflussbar, wenn das Umfeld vor dem Gespräch anders arbeitet.",
    solutionTitle: "Ein Wartezimmer, das mehr tut als warten.",
    solutionBody:
      "Eine sanza-Matte im Sprechzimmer oder ruhigen Wartebereich schafft ein anderes Vor-dem-Termin-Erlebnis. Nach 10 Minuten strukturiertem PEMF-Settling kommen Patienten oft ruhiger, präsenter und offener ins Gespräch.",
    fitsTitle: "Wo sanza in Ihre Praxis passt",
    fitsItems: [
      { title: "Wartezimmer-Wellbeing", body: "Eine sanza-Matte während der Wartezeit — freiwillig, klar erklärt, jederzeit verfügbar." },
      { title: "Vor schwierigen Gesprächen", body: "In einem kleinen Vorbereitungsraum vor sensiblen oder angstbesetzten Terminen." },
      { title: "Nach dem Besuch", body: "Kurze Dekompression nach schwierigen Nachrichten oder belastenden Prozeduren." },
    ],
    whatChangesPatientsItems: [
      "Weniger Anspannung und mehr Offenheit im Gespräch",
      "Eine Praxis, die premium und wirklich fürsorglich wirkt",
    ],
    whatChangesPracticeItems: [
      "Bessere Gesprächsqualität in weniger Zeit",
      "Patienten empfehlen Sie wegen des Gefühls des Besuchs",
    ],
    socialProofQuote: "Eine Praxis, die sich vom Eingang bis zum Ausgang hochwertig anfühlt.",
    finalCtaTitle: "Eine Praxis, die sich vom Eingang bis zum Ausgang hochwertig anfühlt.",
    finalCtaBody: "Fordern Sie eine Demo an und sehen Sie, wie sanza in Ihren Patientenfluss passt.",
    finalCtaPrimary: "Praxis-Demo anfragen",
  }, "de"),

  fizioterapeiti: makeCampaignPage({
    segmentName: "Selbstständige Physiotherapeuten",
    metaDescription:
      "Ein premium Wellbeing-Werkzeug für selbstständige Physiotherapeuten, die jede Session vollständiger und erinnerbarer machen möchten.",
    contactCategory: "physiotherapists",
    heroKicker: "Für Solo-Praktiker, deren Ruf das gesamte Geschäft ist",
    heroHeadline: "Sie arbeiten mit Ihren Händen. Lassen Sie den Raum mitarbeiten.",
    heroSubhead:
      "<strong>sanza</strong> gibt selbstständigen Physiotherapeuten ein premium Werkzeug, das jede Session aufwertet — vor dem Beginn und nach dem Abschluss Ihrer Arbeit.",
    heroCtaPrimary: "sanza für unabhängige Physios ansehen",
    problemEyebrow: "Als Solo-Praktiker ist Ihr Ruf Ihr gesamtes Geschäft",
    problemTitle: "Jeder Teil der Session sollte Qualität vermitteln.",
    problemBody:
      "Sie konkurrieren nicht über Preis, sondern über Qualität, Vertrauen und das Gefühl im Raum. Jede Session entscheidet über Loyalität, Empfehlungen und den Ruf, der Ihren Kalender füllt. Die Frage ist nicht, ob Sie gut sind. Die Frage ist, ob jedes Detail das zeigt.",
    solutionTitle: "sanza ist das Upgrade, das Kunden fühlen und erinnern.",
    solutionBody:
      "Ein sanza-System bietet 15 nummerierte Programme, Matte und gezielte Applikatoren — bedienbar von einer Person. Starten Sie mit einem Ankommprogramm, schließen Sie mit Dekompression ab, nutzen Sie Applikatoren für Komfortmomente. Ihre klinische Arbeit bleibt gleich. Die Session fühlt sich vollständiger an.",
    fitsTitle: "Wo sanza in Ihre Praxis passt",
    fitsItems: [
      { title: "Solo-Setup", body: "Das gesamte System läuft über eine Steuerung. Kein Assistent nötig." },
      { title: "Session-Integration", body: "10 Minuten Ankommen + Behandlung + 5 Minuten Abschluss. Eine nahtlose Erfahrung." },
      { title: "Premium-Positionierung", body: "Erhöhen Sie Ihren Satz passend zur Technologie. Patienten verstehen den Wert sofort." },
    ],
    whatChangesPatientsItems: [
      "Patienten fühlen den Unterschied und beschreiben ihn konkret weiter",
      "Die Empfehlung lautet nicht nur 'geh zu einem Physio', sondern 'geh in diese Praxis'",
    ],
    whatChangesPracticeItems: [
      "Eine vollständige premium Session, die Empfehlungen stärkt",
      "Eine Solo-Praxis, die über Erfahrung mit größeren Kliniken konkurriert",
    ],
    socialProofQuote:
      "Patienten, die <strong>sanza</strong> erleben, fragen bei Empfehlungen gezielt danach.",
    finalCtaTitle: "Buchen Sie eine persönliche Demo für Selbstständige.",
    finalCtaBody: "Wir kommen in Ihre Praxis. Sie sehen es in Ihrem Raum, an Ihrer Liege.",
    finalCtaPrimary: "Persönliche Demo buchen",
  }, "de"),

  poliklinika: makeCampaignPage({
    segmentName: "Polikliniken & Mehrfach-Fachkliniken",
    metaDescription:
      "Eine konsistente premium Wellbeing-Ebene für Multi-Speciality-Kliniken, in denen Patientenerfahrung ein Business Asset ist.",
    contactCategory: "clinics",
    heroKicker: "Für Klinikinhaber, die Patientenerfahrung als Business Asset verstehen",
    heroHeadline: "Eine so vollständige Klinik verdient ein Erlebnis, das dazu passt.",
    heroSubhead:
      "<strong>sanza</strong> bringt eine konsistente, premium Wellbeing-Ebene in Mehrfach-Fachkliniken — für mehr Ruhe über Abteilungen hinweg und eine Qualität, über die Patienten sprechen.",
    heroCtaPrimary: "sanza für Polikliniken kennenlernen",
    problemEyebrow: "Hoher Durchsatz muss kein niedriges Erlebnis bedeuten",
    problemTitle: "Patienten erinnern, wie sich Ihre Einrichtung angefühlt hat.",
    problemBody:
      "Polikliniken sehen täglich viele Patienten in mehreren Abteilungen. Der Druck auf Personal ist real, individuelle Aufmerksamkeit knapp. Doch Patienten bewerten nicht nur Ergebnisse, sondern wie sie ankamen, warteten und gingen. In einem kompetitiven Umfeld ist dieses Gefühl ein Asset.",
    solutionTitle: "Ein System, mehrere Abteilungen, konsistente premium Qualität.",
    solutionBody:
      "sanza integriert sich auf Einrichtungsebene: im Wartebereich, in Abteilungen mit hoher Anspannung, optional in Wellbeing-Räumen. Das System ist standardisiert und für Teams leicht zu handhaben. Patienten erleben dieselbe beruhigende Qualität über Abteilungen hinweg.",
    fitsTitle: "Wo sanza in Ihre Einrichtung passt",
    fitsItems: [
      { title: "Zentraler Wartebereich", body: "Eine sanza-Station, die Patienten vor jedem Termin freiwillig nutzen können." },
      { title: "Abteilungsintegration", body: "Priorität für Bereiche mit hoher Patientenanspannung." },
      { title: "Team-Wellbeing", body: "Ein sanza-Raum für klinisches Personal als Resilienz-Angebot." },
      { title: "Gebrandetes Programm", body: "Ein Wellbeing-Protokoll unter Ihrer Klinikmarke als Signature Service." },
    ],
    whatChangesPatientsItems: [
      "Ein Besuchserlebnis, das sie konkret beschreiben und empfehlen",
      "Weniger Anspannung vor belastenden Terminen",
    ],
    whatChangesPracticeItems: [
      "Bewertungen, die das Erlebnis erwähnen, nicht nur das Ergebnis",
      "Ein Ruf, der neue Patienten ohne zusätzliche Werbung anzieht",
    ],
    socialProofQuote:
      "Der Ort, der sich wirklich darum kümmert, wie man sich fühlt — diese Positionierung schafft <strong>sanza</strong>.",
    finalCtaTitle: "Vereinbaren Sie eine Beratung auf Einrichtungsebene.",
    finalCtaBody: "Wir mappen sanza auf Raumlayout und Patientenfluss — unverbindlich.",
    finalCtaPrimary: "Facility-Beratung vereinbaren",
  }, "de"),

  "spa-wellness": makeCampaignPage({
    segmentName: "Day Spas & Wellness-Zentren",
    metaDescription:
      "Eine premium, technologiegestützte Wellness-Erfahrung für Day Spas und Wellness-Zentren, die ein erinnerbares Signature-Angebot suchen.",
    contactCategory: "beauty-cosmetic",
    heroKicker: "Für Spas, in denen das Gästeerlebnis das Produkt ist",
    heroHeadline: "Die erinnerbarste Behandlung braucht keinen Therapeuten im Raum.",
    heroSubhead:
      "<strong>sanza</strong> ist eine premium, technologiegestützte Wellness-Erfahrung, die Gäste tief spüren und wieder buchen — ohne mehr Komplexität für Ihr Team.",
    heroCtaPrimary: "sanza für Ihr Spa entdecken",
    problemEyebrow: "Wenn Gäste alles erlebt haben, was bieten Sie als Nächstes?",
    problemTitle: "Ihre Stammgäste erwarten, dass Sie einen Schritt voraus bleiben.",
    problemBody:
      "Hot Stone, Signature Facial, Body Wrap — loyale Gäste lieben Sie, aber ihre Erwartungen steigen. Vorne zu bleiben, ohne Team oder Fläche zu erweitern, ist die Herausforderung jedes ernsthaften Spa-Betreibers.",
    solutionTitle: "sanza: das Erlebnis, das sie noch nicht hatten.",
    solutionBody:
      "Eine sanza-Session nutzt strukturierte PEMF-Frequenzprogramme für eine tiefe, stille Ganzkörper-Erfahrung. Nicht Wärme, nicht Druck — etwas darunter. Positionieren Sie es als Premium-Tier, geben Sie ihm Ihren Namen und lassen Sie das Erlebnis sprechen.",
    fitsTitle: "Wo sanza in Ihr Spa passt",
    fitsItems: [
      { title: "Signature 60-Minuten Session", body: "Hohe Marge, geringe Komplexität, schnell als Premium-Angebot etabliert." },
      { title: "Treatment Enhancer", body: "15 Minuten sanza vor Massage oder Facial als Upsell, den Gäste nachfragen." },
      { title: "Membership Feature", body: "sanza-Zugang in der Premium-Mitgliedschaft stärkt Bindung und Spend." },
      { title: "Retail Crossover", body: "Gäste fragen nach Home Units — Nordora Vital unterstützt die natürliche Beratung." },
    ],
    whatChangesPatientsTitle: "Für Ihre Gäste",
    whatChangesPatientsItems: [
      "Ein Erlebnis, das sie noch nicht hatten und wieder buchen",
      "Gäste buchen wieder, bevor sie das Haus verlassen",
    ],
    whatChangesPracticeTitle: "Für Ihr Spa",
    whatChangesPracticeItems: [
      "Ein Signature-Angebot, das Nachfrage schafft",
      "Premium-Preise durch ein wirklich premium Erlebnis",
      "Retail-Umsatz mit Gästen, die das Erlebnis zuhause verlängern möchten",
    ],
    socialProofQuote: "Gäste, die es einmal probieren, buchen wieder, bevor sie gehen.",
    finalCtaTitle: "Sprechen Sie mit uns über den Start von sanza in Ihrem Spa.",
    finalCtaBody: "Eine auf Ihre Einrichtung zugeschnittene Showcase-Präsentation — kostenlos.",
    finalCtaPrimary: "Über sanza im Spa sprechen",
  }, "de"),
};

export const CAMPAIGN_PAGE_CONTENT_LV: Partial<Record<CampaignSlug, CampaignPageContent>> = {
  "sporta-medicina": makeCampaignPage({
    segmentName: "Sporta medicīnas un atjaunošanās centri",
    metaDescription:
      "Strukturēta PEMF labsajūtas tehnoloģija sporta medicīnas un atjaunošanās centriem, kas vēlas pilnīgāku sportista pieredzi.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/sports-medicine-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Praksēm, kas nopietni uztver visu sportista pieredzi",
    heroHeadline: "Dodiet sportistiem vairāk nekā ārstēšanu. Dodiet viņiem atjaunošanās pieredzi.",
    heroSubhead:
      "<strong>sanza</strong> ienes strukturētu PEMF labsajūtas tehnoloģiju sporta medicīnas vidē — palīdzot sportistiem ātrāk nomierināties, justies stabilāk starp sesijām un saistīt jūsu centru ar sajūtu, ko viņi pamana.",
    heroCtaPrimary: "Pieteikt sporta atjaunošanās demo",
    heroValueProps: ["Telpas apskate", "Recovery zonas uzstādījums", "Vienkārši komandai"],
    quickStats: [
      { value: "15", label: "veidi, kā atbalstīt sportistu atjaunošanos" },
      { value: "1", label: "vienkārša sistēma visai komandai" },
      { value: "10 min", label: "lai mainītu stāvokli, ar kādu viņi ierodas" },
      { value: "0", label: "traucējumu jūsu ārstēšanas plūsmai" },
    ],
    problemEyebrow: "Plaisa starp ārstēšanu un patiesu atjaunošanos",
    problemTitle: "Sportisti bieži ierodas pārāk uzvilkti.",
    problemBody:
      "Jūsu klīniskā kompetence ir skaidra. Diagnostika, manuālā terapija, procedūras — tehniskā puse ir segta. Taču sportisti bieži ienāk ar aktīvu nervu sistēmu pēc treniņa vai sacensībām. Vide ap ārstēšanu ir svarīga, bet daudzi sporta medicīnas centri joprojām jūtas kā parasta prakse.",
    problemImage: "/images/campaign/sports-medicine-block-1.jpg",
    solutionTitle: "Dodiet sportistiem kaut ko sajūtamu arī ārpus pašas procedūras.",
    solutionBody:
      "<strong>sanza</strong> izmanto PEMF tehnoloģiju ar strukturētām frekvenču programmām kā premium labsajūtas slāni. Tas palīdz sportistiem piebremzēt, iejusties un justies klātesošākiem. Rezultātā jūsu vide jūtas citādi — un par to runā.",
    fitsTitle: "Kur sanza iederas jūsu sesijas plūsmā",
    fitsItems: [
      { title: "Pirms procedūras", body: "Nomierinoša programma pirms prasīgas manuālas darba vai diagnostikas." },
      { title: "Pēc procedūras", body: "Strukturēts noslēgums palīdz ķermenim pāriet ārā no intervences." },
      { title: "Starp sesijām", body: "sanza paklājs pārvērš gaidīšanu premium atjaunošanās pieredzē." },
    ],
    whatChangesPatientsItems: [
      "Atjaunošanās vide, kas jūtas apzināta, nevis klīniska",
      "Kaut kas, ko sportists sajūt un apraksta citiem",
      "Katram apmeklējumam ir konsekventa premium kvalitāte",
    ],
    whatChangesPracticeItems: [
      "Signature elements, kas atšķir no parastiem sporta centriem",
      "Spēcīgāka noturēšana caur sajūtu, pie kuras sportisti atgriežas",
      "Vienkārši komandai — skaidras programmas un vadība",
    ],
    whatChangesPracticeImage: "/images/campaign/sports-medicine-for-practice.jpg",
    socialProofQuote:
      "Performance orientētas prakses Eiropā jau izmanto šo pieeju. Mēs parādīsim, kā <strong>sanza</strong> iederas jūsu recovery plūsmā.",
    finalCtaTitle: "Performance orientētas prakses Eiropā jau izmanto sanza.",
    finalCtaBody: "Parādīsim, kā sanza iederas jūsu atjaunošanās plūsmā, netraucējot nevienu pierakstu.",
    finalCtaPrimary: "Pieteikt telpas apskati",
  }, "lv"),

  hiropraktika: makeCampaignPage({
    segmentName: "Hiropraktika un manuālā terapija",
    metaDescription:
      "Premium labsajūtas slānis hiropraktikas un manuālās terapijas praksēm, kur pacients var iejusties pirms darba sākuma.",
    contactCategory: "therapists",
    heroImage: "/images/campaign/chiro-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Praksēm, kur audu atbilde sākas pirms pieskāriena",
    heroHeadline: "Dodiet saviem pacientiem vairāk nekā korekciju.",
    heroSubhead:
      "<strong>sanza</strong> palīdz pārvērst visu hiropraktikas vizīti mierīgākā, pilnīgākā pieredzē — pirms, laikā un pēc jūsu darba ar rokām. Pacienti jūtas brīvāk, vairāk aprūpēti un vairāk saistīti ar jūsu praksi. Jūsu ārstēšanas plūsma paliek tieši tāda pati.",
    heroCtaPrimary: "Apskatīt sanza hiropraktikas telpā",
    quickStats: [
      { value: "15", label: "programmas mierīgākām vizītēm" },
      { value: "1", label: "vienkārša sistēma visai komandai" },
      { value: "10 min", label: "lai mainītu telpas stāvokli" },
      { value: "0", label: "izmaiņu jūsu darbā ar rokām" },
    ],
    problemEyebrow: "Beidziet zaudēt ārstēšanas laiku spriedzei, ko neesat radījuši.",
    problemTitle: "Jūsu rokas zina, ko darīt.",
    problemBody:
      "Kad pacients ierodas saspringts, aizsargājošs, izklaidīgs vai nervozs, jūs nestrādājat tikai ar mugurkaulu — jūs strādājat pret stāvokli, ko viņš ienes telpā.\n\n<strong>sanza</strong> palīdz mainīt šo kontekstu.\n\nTas pievieno hiropraktikas telpai mierīgu, strukturētu slāni ap darbu, ko jau veicat. Pacienti ātrāk nomierinās, jūtas drošāk uz galda un piedzīvo vizīti kā pilnīgāku. Mazāk pretestības. Vairāk uzticības. Labāks sākums korekcijai — un labāka sajūta, dodoties prom.",
    problemImage: "/images/campaign/chiro-block-1.jpg",
    solutionTitle: "sanza palīdz nervu sistēmai nomierināties pirms sākuma.",
    solutionBody:
      "10–15 minūšu ierašanās programma uz sanza paklāja rada mierīgāku, stabilāku sajūtu. Signāls ir maigs, neinvazīvs un savietojams ar manuālo darbu. Jūsu terapija paliek tā pati — mainās tas, ar ko jūs strādājat.",
    fitsTitle: "Kur sanza iederas jūsu plūsmā",
    fitsImages: [
      "/images/campaign/chiro-fit-arrival.jpg",
      "/images/campaign/chiro-fit-applicators.jpg",
      "/images/campaign/chiro-fit-decompression.jpg",
    ],
    fitsItems: [
      { title: "Ierašanās programma", body: "Pacients guļ uz paklāja, kamēr jūs pārskatāt piezīmes. Kad jūs esat gatavs, viņš ir gatavāks." },
      { title: "Mērķēti aplikatori", body: "Īsi lokāli komforta brīži kakla vai plecu zonai pirms konkrēta darba." },
      { title: "Noslēguma dekompresija", body: "5 minūšu programma rada mierīgu pāreju atpakaļ dienā." },
    ],
    whatChangesPatientsItems: [
      "Mazāk aizsargsaspringuma un pilnīgāka atslābšana",
      "Prakse, kas jūtas pārdomāta un premium",
    ],
    whatChangesPracticeItems: [
      "Mazāk sarežģītu brīžu uz galda",
      "Skaidra atšķirība no citām praksēm",
      "Pacienti par to stāsta un iesaka pieredzi",
    ],
    whatChangesPracticeImage: "/images/campaign/chiro-for-practice.jpg",
    whatChangesPracticeImagePosition: "50% 32%",
    socialProofQuote: "Daudzi hiropraktiķi vēlas to vienreiz izmēģināt un tad izlemt. Tieši to mēs piedāvājam.",
    finalCtaTitle: "Izmēģināt vienreiz un tad izlemt.",
    finalCtaBody: "Piedāvājam demo jūsu praksē bez spiediena.",
    finalCtaPrimary: "Pieteikt demo bez spiediena",
  }, "lv"),

  "joga-meditacija": makeCampaignPage({
    segmentName: "Jogas un meditācijas studijas",
    metaDescription:
      "Zemējoša PEMF labsajūtas tehnoloģija jogas un meditācijas studijām, kur klātbūtne ir galvenā pieredze.",
    contactCategory: "therapists",
    heroImage: "/images/campaign/yoga-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Studijām, kur klātbūtne ir produkts",
    heroHeadline: "Dodiet saviem audzēkņiem vairāk nekā nodarbību. Dodiet viņiem stāvokli, pie kura gribas atgriezties.",
    heroSubhead:
      "<strong>sanza</strong> pievieno jūsu studijas pieredzei klusu zemējuma slāni — palīdzot audzēkņiem ierasties, kļūt mierīgākiem, praktizēt un aiziet ar dziļāku miera sajūtu. Tas atbalsta atmosfēru, kuru jūs jau tik rūpīgi veidojat, nemainot to, kā jūs mācāt.",
    heroCtaPrimary: "Izmēģināt sanza studijā",
    heroValueProps: ["Studijas pieredze", "Klusa tehnoloģija", "Premium rituāli"],
    quickStats: [
      { value: "15", label: "veidi, kā padziļināt nodarbības pieredzi" },
      { value: "1", label: "vienkārša sistēma jūsu studijai" },
      { value: "10 min", label: "lai palīdzētu audzēkņiem ierasties" },
      { value: "0", label: "izmaiņu jūsu mācīšanas plūsmā" },
    ],
    problemEyebrow: "Jūsu audzēkņi nāk uz nodarbību ar visu dienu sev līdzi.",
    problemTitle: "Viņi varbūt guļ uz paklāja, bet daļa no viņiem vēl ir mašīnā, e-pastā, sapulcē, troksnī, no kura tikko atnākuši.",
    problemBody:
      "Kā studijas īpašnieks jūs zināt, cik liela nodarbības pirmā daļa bieži paiet, palīdzot cilvēkiem ierasties — mīkstināt elpu, nomierināt nervu sistēmu, atgriezt uzmanību ķermenī.\n\n<strong>sanza</strong> atbalsta šo pāreju.\n\nTas pievieno jūsu studijai klusu, strukturētu zemējuma slāni, palīdzot audzēkņiem ātrāk nosēsties, būt klātesošākiem praksē un aiziet ar tādu mieru, pie kura viņi grib atgriezties.\n\nNevis lai aizstātu jūsu mācīšanu.\nBet lai telpa to atbalstītu.",
    problemImage: "/images/campaign/yoga-block-1.jpg",
    solutionTitle: "sanza ir zemējuma tehnoloģija telpām, kur vērtē klātbūtni.",
    solutionBody:
      "PEMF signāli darbojas zem apzinātas uztveres kā strukturēts visa ķermeņa impulss. Audzēkņiem tas nav jāsaprot. Viņi vienkārši jūtas citādi — mierīgāki, vairāk ieradušies un gatavāki doties iekšup.",
    fitsTitle: "Kur sanza iederas jūsu studijā",
    fitsImages: [
      "/images/campaign/yoga-fit-pre-class.jpg",
      "/images/campaign/yoga-fit-savasana.jpg",
      "/images/campaign/yoga-fit-private.jpg",
      "/images/campaign/yoga-fit-workshop.jpg",
    ],
    fitsItems: [
      { title: "Pirms nodarbības", body: "Programmas darbojas 10–15 minūtes pirms sākuma. Audzēkņi apguļas, telpa palīdz nomierināties." },
      { title: "Savasana padziļināšana", body: "Dekomresijas programma noslēgumā ļauj atpūtai justies dziļākai un pilnīgākai." },
      { title: "Privātās sesijas", body: "Premium 1:1 pieredzēm, īpaši restorative vai trauma-sensitive darbam." },
      { title: "Darbnīcas un retrīti", body: "Strukturēts atvēršanas un noslēguma rituāls jūsu pasākumiem." },
    ],
    whatChangesPatientsTitle: "Jūsu audzēkņiem",
    whatChangesPatientsItems: [
      "Viņi ierodas stresā un aiziet patiesi mierīgāki",
      "Savasana jūtas citādi. Dziļāk. Viņi to pamana.",
      "Studija asociējas ar konkrētu pieredzes kvalitāti",
    ],
    whatChangesPracticeTitle: "Jūsu studijai",
    whatChangesPracticeItems: [
      "Premium piedāvājums, kas atbalsta cenu",
      "Lojalitāte, jo pieredze ir grūti aizstājama",
      "Skolotājiem telpa ir vieglāk vadāma jau no pirmās elpas",
    ],
    whatChangesPracticeImage: "/images/campaign/yoga-for-studio.jpg",
    socialProofQuote: "Es to gribu savā studijā. — bieža reakcija pēc pirmās <strong>sanza</strong> pieredzes.",
    finalCtaTitle: "Viena sesija. Jūs sajutīsiet to, ko sajutīs audzēkņi.",
    finalCtaBody: "Piedāvājam personīgu pieredzes sesiju studiju īpašniekiem pirms jebkādām saistībām.",
    finalCtaPrimary: "Pieteikt pieredzes sesiju",
  }, "lv"),

  "sporta-zales": makeCampaignPage({
    segmentName: "Sporta zāles, CrossFit un fitnesa telpas",
    metaDescription:
      "Premium atjaunošanās un dekompresijas stacija fitnesa telpām, kas nopietni uztver biedru noturēšanu.",
    contactCategory: "sports-performance",
    heroImage: "/images/campaign/gym-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Telpām, kas zina: noturēšana ir īstā spēle",
    heroHeadline: "Padariet savu sporta zāli par vietu, kur biedri nāk ne tikai trenēties, bet arī atjaunoties.",
    heroSubhead:
      "Jebkura sporta zāle var piedāvāt aprīkojumu.\nMazāk ir tādu, kas var piedāvāt atjaunošanās pieredzi, ko biedri atceras.\n\n<strong>sanza</strong> pievieno jūsu telpai premium dekompresijas slāni pēc treniņa — palīdzot biedriem palēnināties, restartēties un justies patiesi aprūpētiem. Šī sajūta kļūst par daļu no jūsu zīmola.",
    heroCtaPrimary: "Pievienot recovery staciju",
    heroValueProps: ["Viena recovery stacija", "Bez papildu personāla", "Premium rituāls"],
    quickStats: [
      { value: "15", label: "recovery programmas, ko biedri sajūt" },
      { value: "1", label: "vienkārša sistēma jūsu komandai" },
      { value: "10 min", label: "premium reset brīdim" },
      { value: "0", label: "izmaiņu jūsu treniņu piedāvājumā" },
    ],
    problemEyebrow: "Paplašiniet biedra pieredzi ārpus treniņa.",
    problemTitle: "Jūsu sporta zāle jau dod biedriem vietu, kur trenēties, sasniegt un izaicināt sevi.",
    problemBody:
      "<strong>sanza</strong> palīdz šo pieredzi pagarināt uz to, kas notiek pēc piepūles: mierīgu, strukturētu atjaunošanās brīdi, kas jūtas premium, apzināts un patiesi vērtīgs.\n\nTas dod biedriem vēl vienu iemeslu palikt ilgāk, justies labāk, kad viņi dodas prom, un saistīt jūsu telpu ar vairāk nekā aprīkojumu vai nodarbībām. Tas neaizstāj to, ko jūs jau darāt labi — tas ir vienkāršs veids, kā padarīt visu apmeklējumu pilnīgāku.",
    problemImage: "/images/campaign/gym-block-1.jpg",
    solutionTitle: "sanza: recovery stacija, ko biedri tiešām lietos un pieminēs.",
    solutionBody:
      "sanza stacija — paklājs, vadība, skaidra programmu izvēlne — dod 15–20 minūšu strukturētu PEMF dekompresiju pēc treniņa. Personāls nav vajadzīgs. Biedri paši izvēlas programmu. Tā kļūst par rituālu un iemeslu palikt.",
    fitsTitle: "Kur sanza iederas jūsu telpā",
    fitsImages: [
      "/images/campaign/gym-fit-recovery-zone.jpg",
      "/images/campaign/gym-fit-membership-tier.jpg",
      "/images/campaign/gym-fit-hiit.jpg",
      "/images/campaign/gym-fit-pt-closeout.jpg",
    ],
    fitsItems: [
      { title: "Atsevišķa recovery zona", body: "Viens paklājs, viena vadība, viens stūris. Biedri rezervē 15 minūtes pēc treniņa." },
      { title: "Premium abonements", body: "sanza piekļuve premium līmenī — lielāka vērtība bez papildu personāla." },
      { title: "CrossFit / HIIT", body: "Pēc augstas intensitātes strukturēta dekompresija ir tieši vajadzīgais signāls." },
      { title: "Personāltreniņu papildinājums", body: "Treneri sesiju noslēdz ar 10 minūtēm sanza — vairāk vērtības un atkārtotu rezervāciju." },
    ],
    whatChangesPatientsTitle: "Jūsu biedriem",
    whatChangesPatientsItems: [
      "Pēc-treniņa pieredze, kas jūtas premium un apzināta",
      "Vairāk miera un vienmērīgākas enerģijas pēc smagiem treniņiem",
      "Iemesls palikt zālē ilgāk un ieguldīt vairāk",
    ],
    whatChangesPracticeTitle: "Jūsu telpai",
    whatChangesPracticeItems: [
      "Atšķirība, ko konkurenti nevar ātri nokopēt",
      "Spēcīgāka noturēšana caur reāli lietojamu recovery zonu",
      "Sarunas: vai tu jau izmēģināji recovery paklāju?",
    ],
    whatChangesPracticeImage: "/images/campaign/gym-for-facility.jpg",
    socialProofQuote: "Viena stacija. Bez papildu personāla. Iemesls pagarināt abonementu.",
    finalCtaTitle: "Viena stacija. Bez papildu personāla. Iemesls pagarināt abonementu.",
    finalCtaBody: "Parunāsim par pilotu jūsu telpā — atbilstoši plānojumam un abonementu modelim.",
    finalCtaPrimary: "Parunāt par pilotu",
  }, "lv"),

  veterinarija: makeCampaignPage({
    segmentName: "Veterinārās klīnikas",
    metaDescription:
      "Maiga PEMF labsajūtas tehnoloģija veterinārajām klīnikām, kas vēlas mierīgāku vidi dzīvniekiem, saimniekiem un komandai.",
    contactCategory: "clinics",
    heroKicker: "Praksēm, kur dzīvnieku stress ir profesionāls izaicinājums",
    heroHeadline: "Mierīgāki dzīvnieki. Vienmērīgākas procedūras. Labāk visiem telpā.",
    heroSubhead:
      "<strong>sanza</strong> PEMF labsajūtas tehnoloģijai ir tiešs pielietojums veterinārajā vidē — kā mierīgāka sagatavošanās dzīvniekam, saimniekam un komandai.",
    heroCtaPrimary: "Uzzināt, kā sanza der vet praksēm",
    problemEyebrow: "Stress maina visu veterināro vizīti",
    problemTitle: "Mierīgāka vide var mainīt visu telpu.",
    problemBody:
      "Trauksmains suns neguļ mierīgi. Saspringts kaķis reaģē ar visu ķermeni. Stress padara darbu grūtāku un saimniekam rada sajūtu, ka dzīvnieks cietis vairāk nekā vajadzētu. Dažkārt mierīgāka vide pirms sākuma maina visu vizīti.",
    solutionTitle: "sanza rada mierīgāku vidi — dzīvniekiem, saimniekiem un komandai.",
    solutionBody:
      "PEMF signāli tiek izmantoti dzīvnieku labsajūtas kontekstos Eiropā. sanza paklājs gaidīšanas vai sagatavošanas zonā rada strukturētu, maigu un neinvazīvu nomierinošu impulsu kā premium aprūpes slāni.",
    fitsTitle: "Kur sanza iederas jūsu klīnikā",
    fitsItems: [
      { title: "Sagatavošanās zona", body: "sanza paklājs klusā stūrī — dzīvnieks atpūšas pirms apskates vai procedūras." },
      { title: "Pēc procedūras", body: "Maiga dekompresijas programma atveseļošanās laikā palīdz mierīgai pārorientācijai." },
      { title: "Saimnieka pieredze", body: "Saimnieks redz apzinātu vidi un jūt, ka dzīvnieks tiek pilnīgāk aprūpēts." },
      { title: "Fizio un rehabilitācija", body: "Klīnikām ar dzīvnieku fizio sanza dabiski iederas pirms vai pēc sesijas." },
    ],
    whatChangesPatientsTitle: "Dzīvniekiem un saimniekiem",
    whatChangesPatientsItems: [
      "Mazāk stresa jutīgiem dzīvniekiem pirms procedūras",
      "Mierīgāks sākums apskatēm un manipulācijām",
      "Saimnieks redz aprūpi, kas pārsniedz minimumu",
    ],
    whatChangesPracticeItems: [
      "Redzams pierādījums, ka klīnika dara lietas citādi",
      "Saimnieki iesaka jūs, jo pieredze bija citāda",
      "Mazāk turēšanas brīžu un mierīgāka telpas enerģija",
    ],
    socialProofQuote:
      "Vairākas progresīvas veterinārās klīnikas Eiropā jau izmanto <strong>sanza</strong>. Mēs parādīsim, kāpēc.",
    finalCtaTitle: "Progresīvas veterinārās klīnikas Eiropā jau izmanto sanza.",
    finalCtaBody: "Parādīsim, kāpēc — un kā tas darbotos jūsu praksē.",
    finalCtaPrimary: "Pieteikt veterinārās prakses demo",
  }, "lv"),

  jahsanas: makeCampaignPage({
    segmentName: "Jāšanas centri un staļļi",
    metaDescription:
      "Strukturēts PEMF labsajūtas risinājums jāšanas centriem un staļļiem, kas zirgu labsajūtu uztver tikpat nopietni kā sniegumu.",
    contactCategory: "sports-performance",
    heroKicker: "Staļļiem, kas zirgu labsajūtu uztver tikpat nopietni kā sniegumu",
    heroHeadline: "Zirgu labsajūta ir daļa no snieguma standarta.",
    heroSubhead:
      "<strong>sanza</strong> PEMF tehnoloģija tiek izmantota zirgu performance un labsajūtas vidēs Eiropā — mierīgākiem zirgiem pēc transporta vai sacensībām un premium aprūpes standartam.",
    heroCtaPrimary: "Uzzināt, kā sanza izmanto staļļos",
    problemEyebrow: "Saspringts zirgs nespēj parādīt pilnu potenciālu",
    problemTitle: "Ikdienas aprūpei vajadzīgs sistemātisks, neinvazīvs atbalsts.",
    problemBody:
      "Transporta stress, sacensību spriedze, nogurums pēc slodzes — zirgi nes stresu ķermenī. Tas ietekmē sniegumu, atjaunošanos un trenējamību. Daudziem staļļiem trūkst sistemātiska, neinvazīva rīka ikdienas aprūpes ritmā.",
    solutionTitle: "sanza: strukturēts PEMF labsajūtas risinājums zirgu videi.",
    solutionBody:
      "PEMF tehnoloģijai ir lietošanas vēsture zirgu aprūpē. sanza ienes programmējamu PEMF pieredzi stallī vai aprūpes zonā: paklāji, mērķēti aplikatori un vadība, ko personāls var droši lietot.",
    fitsTitle: "Kur sanza iederas jūsu stallī",
    fitsItems: [
      { title: "Pēc transporta", body: "Strukturēta programma pirmajā atpūtas periodā pēc brauciena vai sacensībām." },
      { title: "Pirms treniņa", body: "Īsa programma pirms prasīga darba — zirgs sāk no mierīgāka stāvokļa." },
      { title: "Premium livery", body: "sanza sesijas kā augstākas klases aprūpes pakas daļa." },
      { title: "Rehabilitācijas atbalsts", body: "Maigs, neklīnisks komforta slānis atjaunošanās laikā." },
    ],
    whatChangesPatientsTitle: "Zirgiem un īpašniekiem",
    whatChangesPatientsItems: [
      "Konsekventāka nomierināšanās pēc stresa notikumiem",
      "Ikdienas labsajūtas rituāls, ko pieredzējuši jātnieki un īpašnieki novērtē",
    ],
    whatChangesPracticeTitle: "Jūsu stallim",
    whatChangesPracticeItems: [
      "Premium pakalpojums, kāda Latvijā ir maz",
      "Augstākas vērtības attiecības ar īpašniekiem, kuri redz ieguldījumu zirga labsajūtā",
    ],
    socialProofQuote:
      "Izmanto performance staļļos Vācijā, Austrijā un Šveicē. Tagad pieejams Latvijā caur Nordora Vital.",
    finalCtaTitle: "Izmanto performance staļļos Vācijā, Austrijā un Šveicē.",
    finalCtaBody: "Tagad pieejams Latvijā caur Nordora Vital. Piesakiet staļļa konsultāciju.",
    finalCtaPrimary: "Pieteikt staļļa konsultāciju",
  }, "lv"),

  "vecu-cilveku-aprupe": makeCampaignPage({
    segmentName: "Senioru aprūpes iestādes",
    metaDescription:
      "Maiga, strukturēta PEMF labsajūtas pieredze senioru aprūpes vidēm, kur komforts un cieņa ir kvalitātes mērs.",
    contactCategory: "clinics",
    heroKicker: "Iestādēm, kur komforts un cieņa nosaka kvalitāti",
    heroHeadline: "Komforts, miers un cieņa — katram iemītniekam, katru dienu.",
    heroSubhead:
      "<strong>sanza</strong> ienes senioru aprūpē maigu, strukturētu labsajūtas pieredzi — atbalstot relaksāciju, komfortu un sajūtu, ka par cilvēku patiesi rūpējas.",
    heroCtaPrimary: "Uzzināt, kā sanza darbojas senioru aprūpē",
    problemEyebrow: "Plaisa starp drošību un patiesu labsajūtu",
    problemTitle: "Iemītniekiem vajag vairāk nekā drošību. Vajag sajūtamu komfortu.",
    problemBody:
      "Iemītnieki ir drošībā, paēduši un aprūpēti. Bet dzīve aprūpes iestādē — fona stress, mazāka autonomija, koplietošanas telpu pārstimulācija — ietekmē ikdienas sajūtu. Ģimenes pamana nemieru. Personāls arī. Papildus aprūpei vajadzīgs maigs, regulārs signāls: jūsu komforts ir svarīgs.",
    solutionTitle: "sanza: ikdienas komforta rituāls cilvēkiem, kuri pelnījuši vairāk nekā klīnisku aprūpi.",
    solutionBody:
      "sanza izmanto maigus PEMF frekvenču signālus visa ķermeņa labsajūtas pieredzei — bez adatām, medikamentiem vai aktīvas piepūles. Cilvēks guļ vai sēž uz paklāja, programma darbojas. Personālam tas ir cieņpilns rīks, kas saka: mēs domājam par to, kā jūs jūtaties.",
    fitsTitle: "Kur sanza iederas jūsu iestādē",
    fitsItems: [
      { title: "Rīta rutīna", body: "Maiga programma pēc brokastīm mierīgākam dienas sākumam." },
      { title: "Pēcpusdienas atpūta", body: "Programmas dabiskajā atpūtas laikā dziļākai atjaunošanai." },
      { title: "Individuālas komforta sesijas", body: "Iemītniekiem ar lielāku trauksmi vai hronisku diskomfortu." },
      { title: "Pirms ģimenes apmeklējumiem", body: "Īsa programma var uzlabot satikšanās kvalitāti nemierīgiem iemītniekiem." },
    ],
    whatChangesPatientsTitle: "Jūsu iemītniekiem",
    whatChangesPatientsItems: [
      "Ikdienas komforta un patiesas rūpes pieredze",
      "Miera rituāls, kas atbalsta garastāvokli un dienas kvalitāti",
    ],
    whatChangesPracticeTitle: "Jūsu iestādei",
    whatChangesPracticeItems: [
      "Redzams pierādījums, ka rūpējaties par visu cilvēku",
      "Spēcīgāka ģimeņu uzticība un ieteikumi",
      "Palīdzīgs rīks grūtiem brīžiem bez receptes",
    ],
    socialProofQuote:
      "Senioru aprūpes iestādes Eiropā izmanto <strong>sanza</strong> kā ikdienas labsajūtas programmu.",
    finalCtaTitle: "Senioru aprūpes iestādes Eiropā izmanto sanza ikdienā.",
    finalCtaBody: "Parādīsim, kā tas varētu darboties jūsu iestādē.",
    finalCtaPrimary: "Pieteikt aprūpes iestādes konsultāciju",
  }, "lv"),

  "spa-viesnicas": makeCampaignPage({
    segmentName: "Spa viesnīcas un kūrorti",
    metaDescription:
      "Premium PEMF labsajūtas tehnoloģija spa viesnīcām un kūrortiem, kas vēlas atšķirīgu viesu pieredzi.",
    contactCategory: "beauty-cosmetic",
    heroImage: "/images/campaign/spa-hotel-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Īpašumiem, kas nopietni uztver viesu pieredzi",
    heroHeadline: "Dodiet viesiem labsajūtas pieredzi, ko nevar saņemt visur.",
    heroSubhead:
      "Jūsu spa jau piedāvā komfortu, rūpes un atmosfēru. <strong>sanza</strong> palīdz pievienot šai pieredzei jaunu slāni: mierīgu, tehnoloģijā balstītu reset brīdi, kas jūtas premium, atmiņā paliekošs un klusi atšķirīgs.\n\nViesi neatceras tikai procedūru sarakstu. Viņi atceras, cik dziļi viņi atslēdzās, cik aprūpēti jutās un vai pieredze deva viņiem kaut ko, par ko ir vērts pastāstīt. <strong>sanza</strong> dod jūsu spa atšķirīgu labsajūtas brīdi, kas atbalsta augstvērtīgu pozicionējumu, nemainot esošās procedūras.",
    heroCtaPrimary: "Izpētīt sanza jūsu spa",
    quickStats: [
      { value: "15", label: "premium labsajūtas programmas" },
      { value: "1", label: "vienkārša sistēma jūsu komandai" },
      { value: "10 min", label: "atmiņā paliekošam reset brīdim" },
      { value: "0", label: "izmaiņu jūsu spa ēdienkartē" },
    ],
    problemEyebrow: "Dodiet viesiem iemeslu runāt par jūsu spa arī pēc aizbraukšanas.",
    problemTitle: "Saunu, masāžu un relaksācijas telpu viesi var atrast gandrīz katrā premium viesnīcā.",
    problemBody:
      "Ko viņi nevar atrast visur, ir labsajūtas pieredze, kas jūtas patiesi jauna, dziļi nomierinoša un atmiņā paliekoša.\n\nTā ir iespēja.\n\n<strong>sanza</strong> palīdz pievienot jūsu spa atšķirīgu, tehnoloģijā balstītu reset pieredzi — nevis vēl vienu standarta procedūru sarakstā, bet premium labsajūtas brīdi, ko viesi sajūt uzreiz. Tas padara jūsu spa pieredzi pilnīgāku, atšķirīgāku un daudz ticamāk par to uzturēšanās daļu, ko viņi piemin kādam citam.",
    problemImage: "/images/campaign/spa-hotel-block-1.jpg",
    solutionTitle: "sanza: pieredze, ko viesi Latvijā reti var saņemt citur.",
    solutionBody:
      "sanza ir profesionāla PEMF labsajūtas sistēma, kas izmanto hronobioloģiskas frekvenču programmas dziļai, klusai stabilizējošai pieredzei. Tā nav masāža un nav siltums. Tā ir atsevišķa premium pieredze, ko viesi vēlas atkārtot.",
    fitsTitle: "Kur sanza iederas jūsu spa",
    fitsImages: [
      "/images/campaign/spa-fit-signature.jpg",
      "/images/campaign/spa-fit-pre-treatment.jpg",
      "/images/campaign/spa-fit-relaxation.jpg",
      "/images/campaign/spa-fit-retreat.jpg",
    ],
    fitsItems: [
      { title: "Signature programma", body: "45–60 minūšu premium rezervācija ar paklāju un aplikatoriem." },
      { title: "Pirms procedūras", body: "15 minūtes sanza pirms masāžas vai sejas procedūras." },
      { title: "Atpūtas zonas elements", body: "sanza stacija relaksācijas zonā starp procedūrām vai kā atsevišķa pieredze." },
      { title: "Retreati un pāri", body: "Iekļaujiet vairākdienu programmās vai izveidojiet premium pāru sesiju." },
    ],
    whatChangesPatientsTitle: "Jūsu viesiem",
    whatChangesPatientsItems: [
      "Pieredze, kādas viņiem vēl nav bijis un pie kuras gribas atgriezties",
      "Dziļas atpūtas sajūta, kas atšķir jūsu spa",
      "Kaut kas, par ko viņi stāsta ar ziņkāri",
    ],
    whatChangesPracticeTitle: "Jūsu īpašumam",
    whatChangesPracticeItems: [
      "Kategoriju veidojošs piedāvājums Latvijas tirgū",
      "Premium cenu pamatojums: tehnoloģija + pieredze",
      "Lielāki spa ieņēmumi uz viesi bez personāla slodzes palielinājuma",
    ],
    whatChangesPracticeImage: "/images/campaign/spa-for-property.png",
    socialProofQuote:
      "Dažas premium Eiropas spa un wellness viesnīcas jau piedāvā <strong>sanza</strong>.",
    finalCtaTitle: "Premium spa Eiropā jau piedāvā sanza.",
    finalCtaBody: "Parādīsim, kā tas izskatās luksusa spa kontekstā.",
    finalCtaPrimary: "Pieteikt spa prezentāciju",
  }, "lv"),

  "golfa-klubi": makeCampaignPage({
    segmentName: "Golfa klubi",
    metaDescription:
      "Premium PEMF labsajūtas tehnoloģija golfa klubiem, kas vēlas biedriem piedāvāt post-round recovery rituālu.",
    contactCategory: "sports-performance",
    heroKicker: "Klubiem, kur biedru pieredze turpinās aiz 18. bedrītes",
    heroHeadline: "19. bedrīte vienmēr ir bijusi par atjaunošanos. Paceliet šo nozīmi augstāk.",
    heroSubhead:
      "<strong>sanza</strong> ienes premium PEMF labsajūtas tehnoloģiju golfa klubos — atjaunošanās un relaksācijas pieredzi pēc raunda, kas atbilst biedru standartam.",
    heroCtaPrimary: "Uzzināt, kā golfa klubi izmanto sanza",
    problemEyebrow: "Vai jūsu recovery piedāvājums atbilst biedru gaidām?",
    problemTitle: "Lielākā daļa klubu apstājas pie dušas un bāra.",
    problemBody:
      "Golfs ir fizisks. Mugura, gurni, pleci un ikri nes četras stundas laukumā. Daudzi biedri ir aktīvi, bet ar uzkrātu saspringumu. Tikai daži klubi piedāvā ko vairāk par ierasto — un tie uzreiz izceļas.",
    solutionTitle: "sanza: post-round rituāls, kas kļūst par kluba kultūras daļu.",
    solutionBody:
      "sanza stacija kluba mājā vai recovery telpā dod 15–20 minūtes strukturētas PEMF dekompresijas pēc raunda. Tā ir klusa, premium un neprasa neko vairāk kā apgulties.",
    fitsTitle: "Kur sanza iederas jūsu klubā",
    fitsItems: [
      { title: "Recovery telpa", body: "Klusā, zīmolota telpā — paklājs, gaisma, 15 min programmas." },
      { title: "Pro shop papildinājums", body: "sanza sesijas kā premium papildinājums pēc nodarbības vai raunda." },
      { title: "Corporate dienas", body: "Īpašs elements premium korporatīvajiem golfa pasākumiem." },
      { title: "Premium biedrība", body: "sanza piekļuve premium līmenī palielina vērtību un noturēšanu." },
    ],
    whatChangesPatientsTitle: "Jūsu biedriem",
    whatChangesPatientsItems: [
      "Sajūtama atjaunošanās iespēja pēc raunda",
      "Klubs, kas redzami iegulda komfortā un kvalitātē",
    ],
    whatChangesPracticeTitle: "Jūsu klubam",
    whatChangesPracticeItems: [
      "Premium atšķirības elements",
      "Papildu ieņēmumu līnija ar zemām darbības izmaksām",
      "Biedri jūt, ka ieguldījums klubā ir pamatots",
    ],
    socialProofQuote:
      "Klubs, kas recovery uztver tikpat nopietni kā spēli. Tieši šo pozicionējumu atbalsta <strong>sanza</strong>.",
    finalCtaTitle: "Klubs, kas recovery uztver tikpat nopietni kā spēli.",
    finalCtaBody: "Parunāsim, kā sanza iederētos jūsu kluba mājā.",
    finalCtaPrimary: "Parunāt par jūsu klubu",
  }, "lv"),

  "tenisa-klubi": makeCampaignPage({
    segmentName: "Tenisa klubi",
    metaDescription:
      "Strukturēta PEMF labsajūtas tehnoloģija tenisa klubiem, kas vēlas biedriem piedāvāt pamanāmu recovery pieredzi.",
    contactCategory: "sports-performance",
    heroKicker: "Telpām, kas saprot: biedru noturēšana rodas starp sesijām",
    heroHeadline: "Jūsu biedri trenējas smagi. Dodiet viņiem atjaunošanos, kas tam atbilst.",
    heroSubhead:
      "<strong>sanza</strong> ienes strukturētu PEMF labsajūtas tehnoloģiju tenisa klubos — premium post-match recovery piedāvājumu, kas atšķir jūsu klubu.",
    heroCtaPrimary: "Uzzināt, kā tenisa klubi izmanto sanza",
    problemEyebrow: "Pēc spēles bieži nav nekā. Tā ir palaista iespēja.",
    problemTitle: "Pieredzei nevajadzētu beigties pie gala līnijas.",
    problemBody:
      "Tenisisti atdod visu laukumā: plecs, elkonis, ikri, intensīva kustība un sacensību spriedze. Tad dvielis, duša, auto. Klubi, kas rada iemeslu palikt, atjaunoties un justies aprūpētiem, veido cita veida lojalitāti.",
    solutionTitle: "sanza pārvērš ģērbtuvi par recovery galamērķi.",
    solutionBody:
      "sanza stacija dod biedriem 15–20 minūtes strukturētas PEMF dekompresijas pēc treniņa vai spēles. Paklājs, aplikators plecam vai elkonim, skaidra izvēlne un bez personāla slodzes.",
    fitsTitle: "Kur sanza iederas jūsu klubā",
    fitsItems: [
      { title: "Post-match recovery", body: "Viens paklājs, viens stūris, skaidra programmu izvēlne." },
      { title: "Junioru programma", body: "sanza piekļuve jaunajiem spēlētājiem — vecāki novērtē ieguldījumu aprūpē." },
      { title: "Treneru pakas", body: "Treneri iekļauj sanza kā premium papildinājumu individuālajām nodarbībām." },
      { title: "Turnīru dienas", body: "sanza kā daļa no pasākuma pieredzes padara klubu atmiņā paliekošu." },
    ],
    whatChangesPatientsTitle: "Jūsu biedriem",
    whatChangesPatientsItems: [
      "Strukturēts recovery rituāls katrā kluba apmeklējumā",
      "Mazāks nogurums pēc sesijām un konsekventāki treniņi",
    ],
    whatChangesPracticeTitle: "Jūsu klubam",
    whatChangesPracticeItems: [
      "Taustāma atšķirība, ko konkurenti nepiedāvā",
      "Lielāks apmeklējumu biežums, jo ir vēl viens iemesls būt klubā",
      "Klubs, kas rūpējas par visu spēlētāja pieredzi",
    ],
    socialProofQuote: "Neviens konkurents jūsu ielā šobrīd to nepiedāvā.",
    finalCtaTitle: "Neviens konkurents jūsu ielā šobrīd to nepiedāvā.",
    finalCtaBody: "Piesakiet konsultāciju un redziet, kā sanza iederētos.",
    finalCtaPrimary: "Pieteikt telpas konsultāciju",
  }, "lv"),

  "gimenes-arsti": makeCampaignPage({
    segmentName: "Ģimenes ārstu prakses",
    metaDescription:
      "Premium, neklīnisks labsajūtas slānis ģimenes ārstu praksēm, kur uzticība veidojas katrā vizītē.",
    contactCategory: "clinics",
    heroKicker: "Ģimenes praksēm, kur pacienta uzticība veidojas vizīti pēc vizītes",
    heroHeadline: "Pacienti uztic jums savu veselību. Dodiet viņiem pieredzi, kas šo uzticību stiprina.",
    heroSubhead:
      "<strong>sanza</strong> piedāvā ģimenes praksēm premium, neklīnisku labsajūtas slāni — palīdzot satrauktiem pacientiem nomierināties pirms konsultācijas.",
    heroCtaPrimary: "Uzzināt, kā sanza iederas ģimenes praksē",
    problemEyebrow: "Baltā halāta trauksme ir reāla",
    problemTitle: "Uzgaidāmā telpa var darīt vairāk nekā gaidīt.",
    problemBody:
      "Pacienti ierodas satraukti par diagnozēm, analīzēm un neziņu. Paaugstināti rādītāji, piesardzīgas atbildes, sarunas, kas atveras tikai pēc vairākiem jautājumiem. Tas ir normāli, bet vidi pirms konsultācijas var veidot citādi.",
    solutionTitle: "Uzgaidāmā telpa, kas dara vairāk nekā gaida.",
    solutionBody:
      "sanza paklājs konsultāciju telpā vai klusā gaidīšanas zonā rada citu pirms-vizītes pieredzi. Pēc 10 minūtēm strukturētas PEMF nomierināšanās pacients bieži ienāk sarunā mierīgāks un klātesošāks.",
    fitsTitle: "Kur sanza iederas jūsu praksē",
    fitsItems: [
      { title: "Uzgaidāmās telpas labsajūta", body: "sanza paklājs gaidīšanas laikā — brīvprātīgi, skaidri izskaidrots." },
      { title: "Pirms jutīgām konsultācijām", body: "Mazā sagatavošanās telpā pirms satraucošām vizītēm." },
      { title: "Pēc vizītes", body: "Īsa dekompresija pēc smagām ziņām vai prasīgām procedūrām." },
    ],
    whatChangesPatientsItems: [
      "Mazāk trauksmes un vairāk atvērtības konsultācijā",
      "Prakses pieredze, kas jūtas premium un patiesi rūpīga",
    ],
    whatChangesPracticeItems: [
      "Labāka sarunas kvalitāte īsākā laikā",
      "Pacienti iesaka jūs arī tāpēc, kā vizīte jutās",
    ],
    socialProofQuote: "Prakse, kas jūtas premium no ieejas līdz izejai.",
    finalCtaTitle: "Prakse, kas jūtas premium no ieejas līdz izejai.",
    finalCtaBody: "Piesakiet demo un redziet, kā sanza iederas jūsu pacientu plūsmā.",
    finalCtaPrimary: "Pieteikt prakses demo",
  }, "lv"),

  fizioterapeiti: makeCampaignPage({
    segmentName: "Neatkarīgi fizioterapeiti",
    metaDescription:
      "Premium labsajūtas rīks neatkarīgiem fizioterapeitiem, kuri vēlas katru sesiju padarīt pilnīgāku un atmiņā paliekošu.",
    contactCategory: "physiotherapists",
    heroKicker: "Solo speciālistiem, kuru reputācija ir viss bizness",
    heroHeadline: "Jūs strādājat ar rokām. Ļaujiet telpai strādāt kopā ar jums.",
    heroSubhead:
      "<strong>sanza</strong> dod neatkarīgiem fizioterapeitiem premium rīku, kas paaugstina katras sesijas pieredzi — pirms jūs sākat un pēc tam, kad pabeidzat.",
    heroCtaPrimary: "Apskatīt sanza neatkarīgiem fizio",
    problemEyebrow: "Solo praksē reputācija ir viss bizness",
    problemTitle: "Katra sesijas daļa lai komunicē kvalitāti.",
    problemBody:
      "Jūs nekonkurējat tikai ar cenu. Jūs konkurējat ar kvalitāti, uzticību un sajūtu telpā. Katra sesija ietekmē lojalitāti, ieteikumus un reputāciju, kas aizpilda kalendāru.",
    solutionTitle: "sanza ir uzlabojums, ko klienti sajūt un atceras.",
    solutionBody:
      "sanza sistēma dod 15 programmas, paklāju un mērķētus aplikatorus — viss lietojams vienam cilvēkam. Sāciet ar ierašanās programmu, noslēdziet ar dekompresiju. Jūsu klīniskais darbs nemainās, bet sesija jūtas pilnīgāka.",
    fitsTitle: "Kur sanza iederas jūsu praksē",
    fitsItems: [
      { title: "Solo uzstādījums", body: "Visa sistēma darbojas no vienas vadības. Asistents nav vajadzīgs." },
      { title: "Sesijas integrācija", body: "10 minūtes ierašanās + terapija + 5 minūtes noslēgums." },
      { title: "Premium pozicionējums", body: "Sesijas cenu var pamatot ar tehnoloģiju, ko pacients sajūt." },
    ],
    whatChangesPatientsItems: [
      "Pacienti sajūt atšķirību un konkrēti par to stāsta",
      "Ieteikums kļūst nevis 'ej pie fizio', bet 'ej uz šo praksi'",
    ],
    whatChangesPracticeItems: [
      "Pilnīga premium sesija, kas stiprina ieteikumus",
      "Solo prakse konkurē ar lielākām klīnikām caur pieredzi",
    ],
    socialProofQuote:
      "Pacienti, kas izmēģina <strong>sanza</strong>, to īpaši piemin, iesakot citiem.",
    finalCtaTitle: "Pieteikt personīgu demo neatkarīgiem speciālistiem.",
    finalCtaBody: "Atbrauksim uz jūsu praksi. Redzēsiet to savā telpā un pie sava galda.",
    finalCtaPrimary: "Pieteikt personīgu demo",
  }, "lv"),

  poliklinika: makeCampaignPage({
    segmentName: "Poliklīnikas un daudznozaru klīnikas",
    metaDescription:
      "Konsekvents premium labsajūtas slānis daudznozaru klīnikām, kur pacienta pieredze ir biznesa aktīvs.",
    contactCategory: "clinics",
    heroKicker: "Klīniku īpašniekiem, kas zina: pacienta pieredze ir biznesa aktīvs",
    heroHeadline: "Tik pilnīgai klīnikai pienākas pieredze, kas tai atbilst.",
    heroSubhead:
      "<strong>sanza</strong> ienes daudznozaru klīnikās konsekventu, premium labsajūtas slāni — mierīgākai pacienta pieredzei dažādās nodaļās.",
    heroCtaPrimary: "Uzzināt, kā poliklīnikas izmanto sanza",
    problemEyebrow: "Liels apjoms nenozīmē zemu pieredzi",
    problemTitle: "Pacienti atceras, kā jūsu iestāde jutās.",
    problemBody:
      "Poliklīnikas ik dienu apkalpo daudz pacientu vairākās nodaļās. Personāla slodze ir reāla. Tomēr pacienti iespaidu veido ne tikai pēc rezultāta, bet arī pēc tā, kā viņi ieradās, gaidīja un aizgāja.",
    solutionTitle: "Viena sistēma, vairākas nodaļas, konsekventa premium kvalitāte.",
    solutionBody:
      "sanza integrējas iestādes līmenī: gaidīšanas zonā, nodaļās ar augstāku trauksmi un īpašās labsajūtas telpās. Sistēma ir standartizēta un komandai viegli vadāma.",
    fitsTitle: "Kur sanza iederas jūsu iestādē",
    fitsItems: [
      { title: "Centrālā gaidīšanas zona", body: "sanza stacija, ko pacienti var izmantot pirms jebkura pieraksta." },
      { title: "Nodaļu integrācija", body: "Prioritāte nodaļām, kur pacienta trauksme ir augstāka." },
      { title: "Personāla labsajūta", body: "sanza telpa klīniskajam personālam noturības atbalstam." },
      { title: "Zīmolota programma", body: "Labsajūtas protokols zem jūsu klīnikas zīmola." },
    ],
    whatChangesPatientsItems: [
      "Vizītes pieredze, ko viņi konkrēti apraksta un iesaka",
      "Mazāk trauksmes pirms sarežģītiem pierakstiem",
    ],
    whatChangesPracticeItems: [
      "Atsauksmes piemin pieredzi, ne tikai klīnisko rezultātu",
      "Reputācija, kas piesaista jaunus pacientus",
    ],
    socialProofQuote:
      "Vieta, kas patiesi rūpējas par to, kā jūs jūtaties — šo pozicionējumu rada <strong>sanza</strong>.",
    finalCtaTitle: "Pieteikt iestādes līmeņa konsultāciju.",
    finalCtaBody: "Piemeklēsim sanza jūsu telpu plānojumam un pacientu plūsmai.",
    finalCtaPrimary: "Pieteikt iestādes konsultāciju",
  }, "lv"),

  "spa-wellness": makeCampaignPage({
    segmentName: "Dienas spa un wellness centri",
    metaDescription:
      "Premium, tehnoloģijā balstīta wellness pieredze dienas spa un wellness centriem, kas vēlas spēcīgu signature piedāvājumu.",
    contactCategory: "beauty-cosmetic",
    heroKicker: "Spa centriem, kur viesu pieredze ir produkts",
    heroHeadline: "Atmiņā paliekošākajai procedūrai nav vajadzīgs terapeits telpā.",
    heroSubhead:
      "<strong>sanza</strong> ir premium, tehnoloģijā balstīta wellness pieredze, ko viesi dziļi sajūt un vēlas atkārtot — bez papildu sarežģītības komandai.",
    heroCtaPrimary: "Atklāt sanza savam spa",
    problemEyebrow: "Kad viesi ir izmēģinājuši visu, ko piedāvāt tālāk?",
    problemTitle: "Lojāli viesi sagaida, ka būsiet soli priekšā.",
    problemBody:
      "Karsto akmeņu masāža, signature sejas procedūra, ietīšana — viņi jūs mīl, bet gaidas aug. Palikt priekšā bez komandas vai telpas paplašināšanas ir izaicinājums katram nopietnam spa īpašniekam.",
    solutionTitle: "sanza: pieredze, kādas viņiem vēl nav bijis.",
    solutionBody:
      "sanza sesija izmanto strukturētas PEMF frekvenču programmas dziļai, klusai visa ķermeņa pieredzei. Tā nav siltums un nav spiediens. Tā ir premium pieredze, ko varat nosaukt savā vārdā.",
    fitsTitle: "Kur sanza iederas jūsu spa",
    fitsItems: [
      { title: "Signature 60 min sesija", body: "Augsta marža, zema sarežģītība, skaidrs premium piedāvājums." },
      { title: "Procedūras pastiprinātājs", body: "15 minūtes sanza pirms masāžas vai sejas procedūras kā upsell." },
      { title: "Membership elements", body: "sanza piekļuve premium abonementā noturēšanai un lielākam tēriņam." },
      { title: "Retail pāreja", body: "Viesi jautā par mājas iekārtām — Nordora Vital atbalsta sarunu." },
    ],
    whatChangesPatientsTitle: "Jūsu viesiem",
    whatChangesPatientsItems: [
      "Pieredze, kādas nav bijis un pie kuras atgriežas",
      "Viesi rezervē vēlreiz, pirms iziet no ēkas",
    ],
    whatChangesPracticeTitle: "Jūsu spa",
    whatChangesPracticeItems: [
      "Signature piedāvājums, kas rada pieprasījumu",
      "Premium cena ar patiesi premium pieredzi",
      "Retail ieņēmumi no viesiem, kas vēlas turpināt pieredzi mājās",
    ],
    socialProofQuote: "Viesi, kas izmēģina vienreiz, rezervē vēlreiz pirms aiziešanas.",
    finalCtaTitle: "Parunāsim par sanza ieviešanu jūsu spa.",
    finalCtaBody: "Prezentācija, pielāgota jūsu telpai — bez maksas.",
    finalCtaPrimary: "Parunāt par sanza spa",
  }, "lv"),
};

export function getCampaignPageContent(
  slug: CampaignSlug,
  locale: Locale,
): CampaignPageContent | null {
  if (locale === "de") {
    return CAMPAIGN_PAGE_CONTENT_DE[slug] ?? CAMPAIGN_PAGE_CONTENT[slug] ?? null;
  }
  if (locale === "lv") {
    return CAMPAIGN_PAGE_CONTENT_LV[slug] ?? CAMPAIGN_PAGE_CONTENT[slug] ?? null;
  }
  return CAMPAIGN_PAGE_CONTENT[slug] ?? null;
}
