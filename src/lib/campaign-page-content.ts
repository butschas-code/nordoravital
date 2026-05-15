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
  whatChangesTitle?: string;
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
  {
    title: "Integrated stack",
    body: "sanza layers PEMF, structured biofrequency and cold laser/light in one coached session — unlike single-modality devices that only isolate one signal.",
  },
  {
    title: "Orchestrated programmes",
    body: "Fifteen numbered routines sequence arrival, reset and closure so modalities reinforce each other — not improvised one-offs.",
  },
  {
    title: "Modular applicators",
    body: "Mat, pad, hand electrodes and targeted laser pens — one hub, room-flexible setups.",
  },
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
    solutionEyebrow: "Integrated PEMF, biofrequency and laser",
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
      {
        title: "Integrierter Stack",
        body: "sanza kombiniert PEMF, strukturierte Biofrequenz und Kaltlaser/Licht in einer geführten Session — nicht nur ein einzelnes Signal wie bei Einzelmodalitäten.",
      },
      {
        title: "Orchestrierte Programme",
        body: "Fünfzehn nummerierte Abläufe strukturieren Ankunft, Reset und Ausklang — die Modalitäten verstärken sich, statt improvisiert zu wirken.",
      },
      {
        title: "Modulare Applikatoren",
        body: "Matte, Pad, Handelektroden und Laserstifte — ein Hub, flexibel nach Raum-Einsatz.",
      },
    ] as CampaignPageContent["solutionSpecs"],
    solutionEyebrow: "PEMF · Biofrequenz · Laser",
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
      {
        title: "Integrētā kombinācija",
        body: "sanza programmās vienā sesijā sajauc PEMF, strukturētās biofrekvences un vēso lāzera/gaismas signālus — nevis vienu izolētu tehnoloģiju.",
      },
      {
        title: "Saskaņotas programmas",
        body: "Piecpadsmit numurētas secības veido ierašanos, resetu un noslēgumu, lai modalitātes vienu otru pastiprinātu.",
      },
      {
        title: "Modulāri aplikatori",
        body: "Paklājs, spilvens, roku elektrodi un lāzera pildspalvas — viena vadība, telpai pielāgojams komplekts.",
      },
    ] as CampaignPageContent["solutionSpecs"],
    solutionEyebrow: "PEMF + biofrekvences + lāzers",
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
    whatChangesTitle: input.whatChangesTitle ?? common.whatChangesTitle,
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
  "sporta-medicina": {
    segmentName: "Sports Medicine & Recovery Centres",
    metaTitle: "Sports Medicine & Recovery Centres | sanza × Nordora Vital",
    metaDescription: "Structured PEMF wellbeing technology for sports medicine and recovery centres that want athletes to feel a more complete recovery experience.",
    heroImage: "/images/campaign/sports-medicine-hero.jpg",
    heroTextAlign: "right",
    heroKicker: "For performance-focused practices that take the full athlete experience seriously",
    heroHeadline: "Give athletes more than treatment. Give them a recovery experience.",
    heroSubhead: "<strong>sanza</strong> brings structured PEMF wellbeing technology to sports medicine settings — helping athletes settle faster, feel more grounded between sessions, and associate your facility with results they can feel.",
    heroCtaPrimary: "Book a sports recovery demo",
    heroValueProps: [
      "Facility walkthrough",
      "Recovery-zone setup",
      "Easy for staff"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Sports Medicine & Recovery Centres.",
    quickStats: [
      {
        value: "15",
        label: "ways to support athlete recovery"
      },
      {
        value: "1",
        label: "simple system for your whole team"
      },
      {
        value: "10 min",
        label: "to shift the state they arrive in"
      },
      {
        value: "0",
        label: "disruption to your treatment flow"
      }
    ],
    problemEyebrow: "The gap between treatment and true recovery",
    problemTitle: "Athletes often arrive wired before the work begins.",
    problemBody: "You already have the clinical expertise. Shockwave, manual therapy, ultrasound, diagnostics — the technical side is covered. But athletes are often still wired when they walk in: cortisol elevated, nervous system running hot from training or competition. The environment around your treatment matters. And right now, most sports medicine facilities feel the same as a GP office.",
    problemImage: "/images/campaign/sports-medicine-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "Give athletes something to feel — beyond the treatment itself.",
    solutionBody: "<strong>sanza</strong> uses PEMF technology with structured frequency programs to deliver a full-body calming signal. It is a premium wellbeing layer that helps athletes downregulate, settle, and feel more present. In a sports medicine context, that means a facility athletes talk about because it feels different.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your session flow",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsItems: [
      {
        title: "Pre-treatment",
        body: "Run a settling program before demanding manual work or diagnostics — athlete arrives 'on,' leaves the program calmer and more cooperative."
      },
      {
        title: "Post-treatment decompression",
        body: "A structured close-out program helps the body transition out of a clinical intervention — perceived care goes up dramatically."
      },
      {
        title: "Between sessions",
        body: "Use the sanza mat as a premium waiting/rest station — turns passive wait time into active recovery experience."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients / clients",
    whatChangesPatientsItems: [
      "A recovery environment that feels intentional, not clinical",
      "Something they can feel and describe to teammates → word-of-mouth",
      "Consistency: every visit has a structured, premium quality"
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "A signature element that sets you apart from generic sports clinics",
      "Stronger retention: athletes come back for how they feel here",
      "Easy to staff — programs run on a simple controller, no additional training needed"
    ],
    whatChangesPracticeImage: "/images/campaign/sports-medicine-for-practice.jpg",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "Used by performance-focused practices across Europe. We'll show you exactly how <strong>sanza</strong> integrates into your recovery flow — without disrupting a single appointment.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Used by performance-focused practices across Europe.",
    finalCtaBody: "We'll show you exactly how sanza integrates into your recovery flow — without disrupting a single appointment.",
    finalCtaPrimary: "Schedule a facility walkthrough"
  },
  hiropraktika: {
    segmentName: "Chiropractic & Manual Therapy Practices",
    metaTitle: "Chiropractic & Manual Therapy Practices | sanza × Nordora Vital",
    metaDescription: "A premium wellbeing layer for chiropractic and manual therapy practices where the room can help patients settle before hands-on work begins.",
    heroImage: "/images/campaign/chiro-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For practices where tissue response begins before you touch the patient",
    heroHeadline: "Give your patients more than an adjustment.",
    heroSubhead: "<strong>sanza</strong> helps you turn the whole chiropractic visit into a calmer, more complete experience — before, during and after your hands-on work. Patients feel more at ease, more cared for, and more connected to your practice. Your treatment flow stays exactly as it is.",
    heroCtaPrimary: "See how it works in a chiro room",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "therapists",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Chiropractic & Manual Therapy Practices.",
    quickStats: [
      {
        value: "15",
        label: "programs for calmer visits"
      },
      {
        value: "1",
        label: "simple system for the whole team"
      },
      {
        value: "10 min",
        label: "to shift the room’s state"
      },
      {
        value: "0",
        label: "changes to your hands-on work"
      }
    ],
    problemEyebrow: "Stop losing treatment time to tension you did not create.",
    problemTitle: "Your hands know what to do.",
    problemBody: "But when a patient arrives guarded, braced, distracted or nervous, you are not only working with the spine — you are working against the state they brought into the room.\r\n\r\n<strong>sanza</strong> helps you change that context.\r\n\r\nIt gives your chiropractic room a calm, structured layer around the work you already do, so patients settle faster, feel safer on the table, and experience the visit as more complete. Less resistance. More trust. A better start for the adjustment — and a better feeling when they leave.",
    problemImage: "/images/campaign/chiro-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza settles the nervous system before you start.",
    solutionBody: "A 10–15 minute PEMF arrival program on the sanza mat creates a shift in how patients feel — quieter, more grounded, less braced. The chronobiological frequency signal is gentle, non-invasive, and compatible with chiropractic work. Your adjustment follows a body that has already started to let go. The quality of your work stays the same — what changes is what you're working with.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your session flow",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/chiro-fit-arrival.jpg",
      "/images/campaign/chiro-fit-applicators.jpg",
      "/images/campaign/chiro-fit-decompression.jpg"
    ],
    fitsItems: [
      {
        title: "Arrival mat program",
        body: "Patient lies on the sanza mat while you review their notes. By the time you're ready, they're ready."
      },
      {
        title: "Targeted applicators",
        body: "Optional pen or pad applicator for the neck/shoulder region before cervical work — a short, local comfort moment."
      },
      {
        title: "Post-adjustment decompression",
        body: "A 5-minute closing program creates a calm, grounded transition back to the patient's day."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients / clients",
    whatChangesPatientsItems: [
      "Less bracing, faster release, more complete relaxation during adjustments",
      "A practice that feels considered and premium — not just functional"
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "Fewer difficult table moments",
      "A clear differentiator: your practice has something others don't",
      "Patients describe it — and refer others to experience it"
    ],
    whatChangesPracticeImage: "/images/campaign/chiro-for-practice.jpg",
    whatChangesPracticeImagePosition: "50% 32%",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "Most chiropractors want to try it once and decide. That's exactly what we offer.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Most chiropractors want to try it once and decide.",
    finalCtaBody: "That's exactly what we offer — a no-pressure demo in your practice.",
    finalCtaPrimary: "Book a no-pressure demo"
  },
  "joga-meditacija": {
    segmentName: "Yoga & Meditation Studios",
    metaTitle: "Yoga & Meditation Studios | sanza × Nordora Vital",
    metaDescription: "Grounding PEMF wellbeing technology for yoga and meditation studios where presence is the product.",
    heroImage: "/images/campaign/yoga-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For studios where presence is the product",
    heroHeadline: "Give your students more than a class. Give them a state they want to return to.",
    heroSubhead: "<strong>sanza</strong> adds a quiet grounding layer to your studio experience — helping students arrive, soften, practice and leave with a deeper sense of calm. It supports the atmosphere you already work so hard to create, without changing how you teach.",
    heroCtaPrimary: "Experience sanza in your studio",
    heroValueProps: [
      "Studio experience session",
      "Quiet technology",
      "Premium rituals"
    ],
    contactCategory: "therapists",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Yoga & Meditation Studios.",
    quickStats: [
      {
        value: "15",
        label: "ways to deepen the class experience"
      },
      {
        value: "1",
        label: "simple system for your studio"
      },
      {
        value: "10 min",
        label: "to help students arrive"
      },
      {
        value: "0",
        label: "changes to your teaching flow"
      }
    ],
    problemEyebrow: "Your students come to class carrying the day with them.",
    problemTitle: "They may be lying on the mat, but part of them is still in the car, in the inbox, in the meeting, in the noise they just came from.",
    problemBody: "As a studio owner, you know how much of the first part of class is spent helping people arrive — softening the breath, calming the nervous system, bringing attention back into the body.\r\n\r\n<strong>sanza</strong> supports that transition.\r\n\r\nIt adds a quiet, structured grounding layer to your studio, helping students settle more quickly, feel more present in the practice, and leave with the kind of calm they want to return to.\r\n\r\nNot to replace your teaching.\r\nTo help the room support it.",
    problemImage: "/images/campaign/yoga-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza is grounding technology for spaces that value presence.",
    solutionBody: "PEMF signals work below the threshold of awareness — a structured, full-body electromagnetic input that supports the shift from sympathetic to parasympathetic state. Think of it as a tuning fork for the room. Students don't need to understand it. They just feel different — calmer, more arrived, more ready to go inward. Your teaching lands in a body that has already started to soften.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your studio",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/yoga-fit-pre-class.jpg",
      "/images/campaign/yoga-fit-savasana.jpg",
      "/images/campaign/yoga-fit-private.jpg",
      "/images/campaign/yoga-fit-workshop.jpg"
    ],
    fitsItems: [
      {
        title: "Pre-class",
        body: "Mat programs running 10–15 min before students begin. They lie down, the room does the settling."
      },
      {
        title: "Savasana enhancement",
        body: "Run a decompression program during final rest — makes savasana feel longer, deeper, more complete."
      },
      {
        title: "Private sessions",
        body: "Use with individual clients as part of a premium 1:1 experience, especially for trauma-aware or restorative work."
      },
      {
        title: "Workshops & retreats",
        body: "A structured opening/closing ritual that becomes a signature element of your events."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your students",
    whatChangesPatientsItems: [
      "They arrive stressed and leave genuinely settled — not just stretched",
      "Savasana feels different. Deeper. They notice.",
      "Your studio becomes associated with a specific quality of experience"
    ],
    whatChangesPracticeTitle: "For your studio",
    whatChangesPracticeItems: [
      "A premium offering that supports your pricing",
      "Students stay loyal because the experience is irreplaceable",
      "Teachers find the room easier to work with from the first breath"
    ],
    whatChangesPracticeImage: "/images/campaign/yoga-for-studio.jpg",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "I want this in my studio. — Every studio owner who experiences <strong>sanza</strong> for the first time.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "One session. You'll feel what your students will feel.",
    finalCtaBody: "We offer a personal experience session for studio owners before any commitment. Come in. Lie on the mat. Decide from there.",
    finalCtaPrimary: "Book your experience session"
  },
  "sporta-zales": {
    segmentName: "Gyms, CrossFit & Fitness Facilities",
    metaTitle: "Gyms, CrossFit & Fitness Facilities | sanza × Nordora Vital",
    metaDescription: "A premium recovery and decompression station for gyms, CrossFit boxes, and fitness facilities that want stronger retention.",
    heroImage: "/images/campaign/gym-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For facilities that know retention is the real game",
    heroHeadline: "Make your gym the place members come to recover, not just train.",
    heroSubhead: "Every gym can offer equipment.\r\nFewer can offer a recovery experience members remember.\r\n\r\n<strong>sanza</strong> gives your facility a premium decompression layer after training — helping members slow down, reset and feel genuinely looked after. That feeling becomes part of your brand.",
    heroCtaPrimary: "Add a recovery station to your gym",
    heroValueProps: [
      "One recovery station",
      "Zero extra staff",
      "Premium member ritual"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Gyms, CrossFit & Fitness Facilities.",
    quickStats: [
      {
        value: "15",
        label: "recovery programs members can feel"
      },
      {
        value: "1",
        label: "simple system your team can run"
      },
      {
        value: "10 min",
        label: "to create a premium reset moment"
      },
      {
        value: "0",
        label: "changes to your training offer"
      }
    ],
    problemEyebrow: "Take the member experience beyond the workout.",
    problemTitle: "Your gym already gives members a place to train, perform and push themselves.",
    problemBody: "<strong>sanza</strong> helps you extend that experience into what happens after the effort: a calm, structured recovery moment that feels premium, intentional and genuinely valuable.\r\n\r\nIt gives members another reason to stay longer, feel better when they leave, and associate your facility with more than equipment or classes. Not a replacement for what you already do well — a simple way to make the whole visit feel more complete.",
    problemImage: "/images/campaign/gym-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza: a recovery station your members will actually use and talk about.",
    solutionBody: "A sanza station — mat, controller, clear program menu — gives members a 15–20 minute structured PEMF decompression experience after training. Full-body settling, nervous system downregulation, a genuine end-of-workout signal for the body. No staff required to run it. Members choose it themselves from the program menu. It becomes a ritual. It becomes part of why they stay.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your facility",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/gym-fit-recovery-zone.jpg",
      "/images/campaign/gym-fit-membership-tier.jpg",
      "/images/campaign/gym-fit-hiit.jpg",
      "/images/campaign/gym-fit-pt-closeout.jpg"
    ],
    fitsItems: [
      {
        title: "Standalone recovery zone",
        body: "One mat, one controller, one corner. Members book 15-minute slots post-training."
      },
      {
        title: "Premium membership tier",
        body: "Include sanza access in a premium tier — increases per-member revenue with zero additional staff cost."
      },
      {
        title: "CrossFit / HIIT settings",
        body: "After high-intensity sessions, a structured decompression program is exactly what the nervous system needs."
      },
      {
        title: "Personal training add-on",
        body: "PTs can include sanza as a 10-minute close-out — adds value and increases PT rebooking."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your members",
    whatChangesPatientsItems: [
      "A post-workout experience that feels premium and intentional",
      "Better sleep, more even energy in the days after hard training — they notice and they say so",
      "A reason to stay in your facility longer and invest more"
    ],
    whatChangesPracticeTitle: "For your facility",
    whatChangesPracticeItems: [
      "A genuine differentiator competitors cannot copy overnight",
      "Stronger retention data from members using recovery zones",
      "Word-of-mouth: 'have you tried the recovery mat at X gym?'"
    ],
    whatChangesPracticeImage: "/images/campaign/gym-for-facility.jpg",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "One station. Zero extra staff. A reason to renew.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "One station. Zero extra staff. A reason to renew.",
    finalCtaBody: "Talk to us about a pilot in your facility — we'll configure the right setup for your floor plan and membership model.",
    finalCtaPrimary: "Talk to us about a pilot"
  },
  "vecu-cilveku-aprupe": {
    segmentName: "Nursing Homes & Senior Care Facilities",
    metaTitle: "Nursing Homes & Senior Care Facilities | sanza × Nordora Vital",
    metaDescription: "A gentle, structured PEMF wellbeing experience for senior care environments where comfort and dignity matter every day.",
    heroKicker: "For facilities where comfort and dignity are the measure of quality",
    heroHeadline: "Comfort, calm, and dignity — for every resident, every day.",
    heroSubhead: "<strong>sanza</strong> brings a gentle, structured wellbeing experience to senior care environments — supporting relaxation, comfort, and a sense of being genuinely cared for. Safe, non-invasive, and easy for care staff to deliver.",
    heroCtaPrimary: "Find out how sanza works in senior care",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Nursing Homes & Senior Care Facilities.",
    quickStats: [
      {
        value: "15",
        label: "Numbered programs"
      },
      {
        value: "1",
        label: "Controller, runs itself"
      },
      {
        value: "10 min",
        label: "Staff onboarding"
      },
      {
        value: "0",
        label: "Workflow redesign"
      }
    ],
    problemEyebrow: "The gap between safety and genuine wellbeing",
    problemTitle: "Residents need more than safety. They need comfort that is felt.",
    problemBody: "Your residents are safe. They're fed and sheltered and medically monitored. But the lived experience of being in a care facility — the ambient stress, the loss of autonomy, the overstimulation of shared spaces — takes a toll that clinical care doesn't address. Families notice when their loved one seems more agitated, less settled, less themselves. You notice too. What residents need, in addition to medical care, is a consistent, gentle signal that their comfort matters.",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza: a daily comfort ritual for residents who deserve more than clinical care.",
    solutionBody: "sanza uses gentle PEMF frequency signals to create a full-body calming experience — no needles, no medications, no active effort required from the resident. They lie or sit on the mat, the program runs, and the structured electromagnetic signal does the rest. For care staff, it is a premium tool they can offer with dignity — something that says: we thought about how you feel, not just what you need.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your facility",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsItems: [
      {
        title: "Morning settling program",
        body: "A gentle arrival routine after breakfast — helps residents start the day from a calmer baseline."
      },
      {
        title: "Afternoon rest enhancement",
        body: "Run programs during the natural afternoon rest period — deeper, more restorative rest."
      },
      {
        title: "Individual comfort sessions",
        body: "Offered to residents with higher anxiety or chronic discomfort as a personalised care element."
      },
      {
        title: "Family visit preparation",
        body: "A short settling program before family visits can meaningfully improve the quality of those interactions."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your residents",
    whatChangesPatientsItems: [
      "A daily experience of comfort and genuine care — not just clinical management",
      "A sense of ritual and calm that improves mood and quality of daily life"
    ],
    whatChangesPracticeTitle: "For your facility",
    whatChangesPracticeItems: [
      "Visible evidence that this facility invests in the whole person — families notice and tell others",
      "Stronger confidence in care quality, stronger word-of-mouth referrals",
      "A tool for difficult moments — something kind and effective that doesn't require a prescription"
    ],
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "Senior care facilities across Europe use <strong>sanza</strong> as a daily resident wellbeing programme.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Senior care facilities across Europe use sanza as a daily resident wellbeing programme.",
    finalCtaBody: "We'd like to show you how it would work in your facility.",
    finalCtaPrimary: "Book a care facility consultation"
  },
  "spa-viesnicas": {
    segmentName: "Spa Hotels & Resorts",
    metaTitle: "Spa Hotels & Resorts | sanza × Nordora Vital",
    metaDescription: "Premium PEMF wellbeing technology for spa hotels and resorts looking for a guest experience that stands apart.",
    heroImage: "/images/campaign/spa-hotel-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For properties that take the guest experience seriously",
    heroHeadline: "Give your guests a wellness experience they cannot get everywhere.",
    heroSubhead: "Your spa already offers comfort, care and atmosphere. <strong>sanza</strong> helps you add a new layer to that experience: a calm, technology-led reset that feels premium, memorable and quietly different.\r\n\r\nGuests do not only remember the treatment menu. They remember how deeply they switched off, how cared for they felt, and whether the experience gave them something worth talking about. <strong>sanza</strong> gives your spa a distinctive wellbeing moment that supports five-star positioning without changing your existing treatments.",
    heroCtaPrimary: "Explore sanza for your spa",
    heroValueProps: [
      "Showcase presentation",
      "Premium positioning",
      "Low operational complexity"
    ],
    contactCategory: "beauty-cosmetic",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Spa Hotels & Resorts.",
    quickStats: [
      {
        value: "15",
        label: "premium wellbeing programs"
      },
      {
        value: "1",
        label: "simple system your team can run"
      },
      {
        value: "10 min",
        label: "to create a memorable reset"
      },
      {
        value: "0",
        label: "changes to your spa menu"
      }
    ],
    problemEyebrow: "Give guests a reason to talk about your spa after they leave.",
    problemTitle: "Your guests can find a sauna, massage and relaxation room in almost every premium hotel.",
    problemBody: "What they cannot find everywhere is a wellness experience that feels genuinely new, deeply calming and worth remembering.\r\n\r\nThat is the opportunity.\r\n\r\n<strong>sanza</strong> helps you add a distinctive, technology-led reset to your spa — not another standard treatment on the menu, but a premium wellbeing moment guests can feel immediately. It makes your spa experience more complete, more differentiated and more likely to become the part of the stay they mention to someone else.",
    problemImage: "/images/campaign/spa-hotel-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza: the experience guests can't get anywhere else in Latvia.",
    solutionBody: "sanza is a professional PEMF wellbeing system — a premium wellness technology that uses chronobiological electromagnetic frequency programs to create a full-body grounding and settling experience. It is not massage. It is not heat. It is something distinctly different — a deep, quiet settling that guests feel as a kind of profound relaxation they immediately want again. Position it as a signature programme. Name it as yours.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your spa",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/spa-fit-signature.jpg",
      "/images/campaign/spa-fit-pre-treatment.jpg",
      "/images/campaign/spa-fit-relaxation.jpg",
      "/images/campaign/spa-fit-retreat.jpg"
    ],
    fitsItems: [
      {
        title: "Signature programme",
        body: "The sanza session — a 45–60 min premium booking combining PEMF mat with targeted applicators."
      },
      {
        title: "Pre-treatment preparation",
        body: "Run a 15-min settling before a massage or facial — the treatment lands in a body that's already open."
      },
      {
        title: "Relaxation room feature",
        body: "A sanza station in the relaxation area — guests use it between treatments or as a standalone experience."
      },
      {
        title: "Retreat and couples offers",
        body: "Integrate into retreat packages or create a premium couples session with two mats and one programme."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your guests",
    whatChangesPatientsItems: [
      "An experience they haven't had before and want to come back for",
      "A sense of deep rest that differentiates your spa from every other luxury option",
      "Something they describe to friends in a way that creates genuine curiosity"
    ],
    whatChangesPracticeTitle: "For your property",
    whatChangesPracticeItems: [
      "A category-defining offer in the Latvian market",
      "Premium pricing justification — technology + experience = perceived value",
      "Higher spa revenue per guest without increasing staff ratios"
    ],
    whatChangesPracticeImage: "/images/campaign/spa-for-property.png",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "A handful of premium European spas and wellness hotels already feature <strong>sanza</strong>.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Premium European spas and wellness hotels already feature sanza.",
    finalCtaBody: "We'd like to show you what it looks like in a luxury spa context.",
    finalCtaPrimary: "Request a spa showcase presentation"
  },
  "golfa-klubi": {
    segmentName: "Golf Clubs",
    metaTitle: "Golf Clubs | sanza × Nordora Vital",
    metaDescription: "Premium PEMF wellbeing technology for golf clubs that want a post-round recovery ritual worthy of their members.",
    heroImage: "/images/campaign/golf-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For clubs where the member experience extends beyond the 18th hole",
    heroHeadline: "Make the post-round experience feel as refined as the club itself.",
    heroSubhead: "Your members do not come only for the course. They come for the feeling of the whole club — the pace, the service, the atmosphere, and how they feel after a round.\r\n\r\n<strong>sanza</strong> helps you extend that experience beyond the 18th hole with a premium recovery and relaxation moment members can actually feel. A calm, technology-led reset for the clubhouse, performance lounge or wellness area — designed to make your club feel more complete, more memorable, and harder to compare.",
    heroCtaPrimary: "See how golf clubs use sanza",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Golf Clubs.",
    quickStats: [
      {
        value: "15",
        label: "post-round wellbeing programs"
      },
      {
        value: "1",
        label: "simple system your team can run"
      },
      {
        value: "10 min",
        label: "to create a refined recovery moment"
      },
      {
        value: "0",
        label: "changes to your clubhouse flow"
      }
    ],
    problemEyebrow: "Give your members a better way to recover after the round.",
    problemTitle: "Your club already delivers the course, the service and the atmosphere your members expect.",
    problemBody: "<strong>sanza</strong> helps you extend that standard into what happens after play.\r\n\r\nGolf asks a lot from the body — back, hips, shoulders, calves, and the nervous system after hours of focus and movement. Many members finish the round feeling good, but carrying tension, stiffness or fatigue into the rest of their day.\r\n\r\nThat is where your club can stand apart.\r\n\r\n<strong>sanza</strong> adds a calm, premium recovery moment to the clubhouse experience — something members can feel, remember and talk about. Not as a medical service. As a refined wellbeing layer that makes the whole club experience feel more complete.",
    problemImage: "/images/campaign/golf-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza: a post-round recovery ritual that becomes part of your club culture.",
    solutionBody: "A sanza station in your clubhouse — locker room adjacent, or as a dedicated recovery room — offers members a structured 15–20 minute PEMF decompression session after their round. Full-body settling, targeted applicators for the areas that took the load, and a quiet premium feel. Members who try it once use it every time. It becomes part of why they play here.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your club",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/golf-fit-event.jpg",
      "/images/campaign/golf-fit-clubhouse.jpg",
      "/images/campaign/golf-fit-post-round.jpg",
      "/images/campaign/golf-fit-recovery-room.jpg"
    ],
    fitsImagePositions: [
      "50% 36%",
      "50% 36%",
      "50% 36%",
      "50% 50%"
    ],
    fitsItems: [
      {
        title: "Recovery room",
        body: "A dedicated, quietly branded space — one mat, ambient light, 15-min programs on a clear menu."
      },
      {
        title: "Pro shop add-on",
        body: "Offer sanza sessions at the pro shop desk as a premium post-lesson or post-round add-on."
      },
      {
        title: "Corporate day feature",
        body: "Include a sanza recovery session in premium corporate golf day packages."
      },
      {
        title: "Membership tier",
        body: "Include sanza access in a premium membership tier — increases per-member value."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your members",
    whatChangesPatientsItems: [
      "A post-round recovery option they can feel — not just a hot shower",
      "A club that has invested in their comfort at a level that signals real quality"
    ],
    whatChangesPatientsImage: "/images/campaign/golf-for-members.jpg",
    whatChangesPracticeTitle: "For your club",
    whatChangesPracticeItems: [
      "A premium differentiator in a competitive market",
      "An additional revenue line with minimal operating cost",
      "Members who feel their membership investment is fully justified"
    ],
    whatChangesPracticeImage: "/images/campaign/golf-for-club.jpg",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "A club that takes its members' recovery as seriously as their game. That's the positioning <strong>sanza</strong> supports.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "A club that takes its members' recovery as seriously as their game.",
    finalCtaBody: "Talk to us about how sanza would work in your clubhouse.",
    finalCtaPrimary: "Talk to us about your club"
  },
  "tenisa-klubi": {
    segmentName: "Tennis Clubs",
    metaTitle: "Tennis Clubs | sanza × Nordora Vital",
    metaDescription: "Structured PEMF wellbeing technology for tennis clubs that want a post-match recovery offer members remember.",
    heroImage: "/images/campaign/tennis-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For facilities that understand member retention is earned between sessions",
    heroHeadline: "Your members train hard. Give them a recovery experience that matches.",
    heroSubhead: "<strong>sanza</strong> brings structured PEMF wellbeing technology to tennis clubs — a premium post-match recovery offer that sets your facility apart and keeps members invested in being here.",
    heroCtaPrimary: "See how tennis clubs use sanza",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Tennis Clubs.",
    quickStats: [
      {
        value: "15",
        label: "recovery programs for players"
      },
      {
        value: "1",
        label: "simple system your team can run"
      },
      {
        value: "10 min",
        label: "to help players reset after court time"
      },
      {
        value: "0",
        label: "changes to your club operations"
      }
    ],
    problemEyebrow: "Give your players a recovery standard that matches their training.",
    problemTitle: "Your players invest serious time, energy and ambition into every match, lesson and training session.",
    problemBody: "<strong>sanza</strong> helps your club support what happens after that effort: recovery, regeneration and the return to readiness.\r\n\r\nTennis loads the shoulder, elbow, hips, calves and nervous system again and again. A structured post-court reset gives players a premium way to downshift, recover and feel prepared for the next session.\r\n\r\nFor your club, it becomes more than an amenity. It is a visible upgrade to your training environment — a way to support players better, strengthen your performance offer, and make your club feel more complete.",
    problemImage: "/images/campaign/tennis-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza turns your changing room into a recovery destination.",
    solutionBody: "A sanza station — simple, premium, easy to use — gives your members a 15–20 minute structured PEMF decompression option after training or a match. Full-body mat for overall settling, targeted applicator for shoulder or elbow if needed. No staff required. Members run the program themselves from a clear menu. It becomes a post-match ritual.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your facility",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/tennis-fit-recovery-room.jpg",
      "/images/campaign/tennis-fit-lounge.jpg",
      "/images/campaign/tennis-fit-performance.jpg",
      "/images/campaign/tennis-fit-tournament.jpg"
    ],
    fitsImagePositions: [
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "64% 32%"
    ],
    fitsItems: [
      {
        title: "Post-match recovery station",
        body: "One mat, one corner, clear program menu. Members use it after a session."
      },
      {
        title: "Junior programme add-on",
        body: "Include sanza access for junior players — parents notice and appreciate the investment."
      },
      {
        title: "Coaching partnership",
        body: "Coaches include sanza in their session programmes — a premium add-on for individual coaching."
      },
      {
        title: "Tournament day experience",
        body: "Offer sanza to tournament participants as part of the event experience."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your members",
    whatChangesPatientsItems: [
      "A structured recovery ritual they'll build into every club visit",
      "Reduced post-session fatigue — they train more consistently and more frequently"
    ],
    whatChangesPatientsImage: "/images/campaign/tennis-for-members.jpg",
    whatChangesPracticeTitle: "For your club",
    whatChangesPracticeItems: [
      "A tangible differentiator no competitor on your street currently offers",
      "Higher visit frequency from members who have another reason to be here",
      "A facility invested in the whole player experience, not just court time"
    ],
    whatChangesPracticeImage: "/images/campaign/tennis-for-club.jpg",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "No competitor on your street currently offers this.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Give your club a recovery offer players will remember.",
    finalCtaBody: "Book a facility consultation and we’ll show you where sanza fits into your club — from post-match recovery and coaching programmes to tournament days and premium member experiences.",
    finalCtaPrimary: "Book a facility consultation"
  },
  "gimenes-arsti": {
    segmentName: "General Practitioners",
    metaTitle: "General Practitioners | sanza × Nordora Vital",
    metaDescription: "A premium, non-clinical wellbeing layer for family practices where patient trust is built visit by visit.",
    heroImage: "/images/campaign/gp-hero.jpg",
    heroKicker: "For family practices where patient trust is built visit by visit",
    heroHeadline: "Make every appointment feel more complete.",
    heroSubhead: "Your medical work is the centre of the visit. <strong>sanza</strong> strengthens the experience around it — with a structured wellbeing reset before or after the consultation that helps patients feel more present, more receptive and more looked after.\r\n\r\nIt gives your family practice a concrete, non-clinical wellbeing offer patients can actually feel, without changing your medical workflow or making clinical claims.",
    heroCtaPrimary: "Learn how sanza fits a GP practice",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for General Practitioners.",
    quickStats: [
      {
        value: "15",
        label: "Structured wellbeing programs"
      },
      {
        value: "1",
        label: "Simple system your team can run"
      },
      {
        value: "10 min",
        label: "To support the visit experience"
      },
      {
        value: "0",
        label: "Changes to your medical workflow"
      }
    ],
    problemEyebrow: "Help patients get more from the care you already provide.",
    problemTitle: "You know how much patient state affects the appointment.",
    problemBody: "Some arrive rushed, tense, overstimulated or anxious. They may sit guarded, struggle to relax during examination, or leave with the sense that the visit was medically correct but emotionally incomplete.\r\n\r\n<strong>sanza</strong> helps your practice improve the experience around treatment.\r\n\r\nIt gives patients a simple, non-clinical wellbeing reset before or after the medical appointment — helping the visit feel more structured, more supportive and more complete. Your diagnosis, treatment decisions and medical workflow stay exactly as they are. <strong>sanza</strong> simply strengthens the care environment around them.",
    problemImage: "/images/campaign/gp-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "A waiting room that does more than wait.",
    solutionBody: "A sanza mat in your consultation room or a quiet corner of your waiting area creates a different kind of pre-appointment experience. Patients who spend 10 minutes in a structured PEMF settling program arrive at the consultation calmer, more present, and more communicative. The appointment simply goes better.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your practice",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/gp-fit-waiting-room.jpg",
      "/images/campaign/gp-fit-preparation-room.jpg",
      "/images/campaign/gp-fit-post-visit.jpg"
    ],
    fitsItems: [
      {
        title: "Waiting room wellbeing",
        body: "A sanza mat available during the wait — opt-in, clearly explained, always available."
      },
      {
        title: "Pre-consultation settling",
        body: "Used in a small preparation room before sensitive or high-anxiety appointments."
      },
      {
        title: "Post-visit recovery",
        body: "For patients leaving after difficult news or demanding procedures — a short decompression program before they go back out."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients / clients",
    whatChangesPatientsItems: [
      "Less anxiety, more openness during the consultation itself",
      "A practice experience that feels premium and genuinely caring"
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "Better quality consultations in less time",
      "Patients who recommend you specifically because of how the visit felt"
    ],
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "A practice that feels premium from entry to exit.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "A practice that feels premium from entry to exit.",
    finalCtaBody: "Request a demo and see how sanza fits your patient flow.",
    finalCtaPrimary: "Request a practice demo"
  },
  zobarstnieciba: {
    segmentName: "Dentists & Dental Clinics",
    metaTitle: "Dentists & Dental Clinics | sanza × Nordora Vital",
    metaDescription: "A structured, non-clinical wellbeing layer for dental clinics that want calmer visits, smoother patient experience, and a more complete feeling of care.",
    heroImage: "/images/campaign/dentist-hero.jpg",
    heroTextAlign: "right",
    heroKicker: "For dental practices where comfort changes the whole visit",
    heroHeadline: "Help patients feel more at ease before they sit in the chair.",
    heroSubhead: "<strong>sanza</strong> adds a calm, structured wellbeing layer to your dental practice — helping patients settle before appointments, feel more supported around treatment, and leave with a stronger sense of care. Your clinical work stays exactly as it is. The experience around it becomes better.",
    heroCtaPrimary: "Book a dental clinic demo",
    heroValueProps: [
      "Dental clinic walkthrough",
      "Clear room setup",
      "No protocol changes"
    ],
    contactCategory: "dentists",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Dentists & Dental Clinics.",
    quickStats: [
      {
        value: "15",
        label: "Comfort-focused wellbeing programs"
      },
      {
        value: "1",
        label: "Simple system your team can run"
      },
      {
        value: "10 min",
        label: "To help patients settle before treatment"
      },
      {
        value: "0",
        label: "Changes to your dental workflow"
      }
    ],
    problemEyebrow: "What you already know",
    problemTitle: "Dental anxiety changes the whole appointment.",
    problemBody: "You know the patient who arrives tense before anything has happened. Shoulders high. Jaw tight. Hands gripping the armrest. They may trust you, but their body has not caught up yet.\r\n\r\nThat state affects the whole visit. The greeting, the chair, the explanation, the first instrument, the moment before local anaesthetic, the time after treatment. Even when your clinical work is excellent, a patient who feels braced can experience the appointment as harder than it needs to be.\r\n\r\n<strong>sanza</strong> helps your practice support that moment differently.\r\n\r\nIt gives patients a simple, non-clinical wellbeing reset before or after treatment — helping the visit feel more considered, more comfortable and more complete. Not as dentistry. As a better way to prepare and care for the person around the dental work.",
    problemImage: "/images/campaign/dentist-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "A calmer patient experience around the dental work you already do.",
    solutionBody: "<strong>sanza</strong> is a professional PEMF wellbeing system designed for practices that care how every visit feels. It can be used before appointments, between treatment steps, or after longer sessions as a short, structured comfort ritual.\r\n\r\nThe system works through a mat, pad, hand electrodes or targeted applicators, depending on the space and use case. Your dental treatment stays exactly as it is. <strong>sanza</strong> simply adds a quiet wellbeing layer around it — so the practice feels more human, more premium and more supportive from arrival to departure.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your dental clinic",
    fitsEyebrow: "Integration",
    fitsLead: "Use sanza only where it belongs: as a clearly separated, non-clinical wellbeing moment around dental care.",
    fitsImages: [
      "/images/campaign/dentist-fit-01.jpg",
      "/images/campaign/dentist-fit-02.jpg",
      "/images/campaign/dentist-fit-03-full.jpg",
      "/images/campaign/gp-fit-post-visit.jpg"
    ],
    fitsImagePositions: [
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "50% 50%"
    ],
    fitsItems: [
      {
        title: "Pre-treatment settling",
        body: "Run a short 10–15 minute wellbeing program before longer appointments, first-time visits, aesthetic procedures or patients who arrive visibly tense.\r\n\r\nThe patient has a moment to settle before entering the chair — and your team starts from a better human context."
      },
      {
        title: "Before high-anxiety procedures",
        body: "Offer sanza as an optional comfort step before treatments that patients often anticipate with stress: injections, drilling, extractions, implants, root canal appointments or complex restorative work.\r\n\r\nNo clinical claims. No replacement for anaesthesia, sedation or medical protocols. Just a structured way to support the patient experience before the work begins."
      },
      {
        title: "Post-treatment decompression",
        body: "After longer appointments, patients often leave still activated — jaw tired, nervous system high, mind processing what happened.\r\n\r\nA short post-visit reset helps the appointment end more gently and makes the whole experience feel more complete."
      },
      {
        title: "Built for staff, not specialists",
        body: "The system is simple: numbered programs, one controller, clear use cases. Your reception team, assistant or practice manager can learn the setup quickly.\r\n\r\nNo new clinical protocol. No treatment redesign. No pressure on the dentist."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your practice",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients",
    whatChangesPatientsItems: [
      "A more considered experience before, during and after dental care",
      "A comfort option they can feel without medication or clinical complexity",
      "A practice visit that feels calmer, more premium and more human",
      "A stronger sense that the whole person is being looked after, not only the teeth"
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "A clear differentiator in a competitive dental market",
      "A premium patient-experience upgrade without changing treatment protocols",
      "More memorable visits, especially for anxious or aesthetic patients",
      "A stronger reason for patients to recommend the practice beyond technical quality"
    ],
    whatChangesPracticeImage: "/images/campaign/dentist-outcomes-practice.jpg",
    whatChangesPracticeImagePosition: "50% 66%",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "Patients may choose you for dental expertise. They recommend you when the whole visit feels cared for.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Add a comfort layer patients will remember.",
    finalCtaBody: "See how sanza could fit into your dental practice — before treatment, around longer procedures, and after appointments where the patient experience matters most.",
    finalCtaPrimary: "Book a dental clinic demo"
  },
  poliklinika: {
    segmentName: "Polyclinics & Multi-Speciality Clinics",
    metaTitle: "Polyclinics & Multi-Speciality Clinics | sanza × Nordora Vital",
    metaDescription: "A consistent, premium wellbeing layer for multi-speciality clinics where patient experience is a business asset.",
    heroImage: "/images/campaign/poliklinika-hero.jpg",
    heroKicker: "For clinic owners who know that patient experience is a business asset",
    heroHeadline: "Make your clinic feel as complete as the care you provide.",
    heroSubhead: "Your polyclinic already brings multiple specialists, diagnostics and treatments under one roof. <strong>sanza</strong> helps you strengthen what connects all of it: the patient experience.\r\n\r\nIt adds a consistent, non-clinical wellbeing layer around appointments — giving patients a structured way to reset before or after visits across departments. For your clinic, it becomes a visible quality upgrade: more considered, more memorable, and easier to distinguish from other medical centres.",
    heroCtaPrimary: "Learn how polyclinics use sanza",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Polyclinics & Multi-Speciality Clinics.",
    quickStats: [
      {
        value: "15",
        label: "Structured patient-experience programs"
      },
      {
        value: "1",
        label: "System your team can manage"
      },
      {
        value: "10 min",
        label: "Before or after appointments"
      },
      {
        value: "0",
        label: "Disruption to clinical operations"
      }
    ],
    problemEyebrow: "Give every department a stronger patient experience.",
    problemTitle: "Your clinic already works across complexity.",
    problemBody: "Consultations, diagnostics, procedures, follow-ups, different specialists, different patient needs. That is exactly why the experience around the appointment matters.\r\n\r\nPatients may come for medical expertise, but they also notice how the visit feels: whether the environment is organised, whether they feel looked after, whether the clinic feels modern, considered and worth returning to.\r\n\r\n<strong>sanza</strong> helps you add one consistent wellbeing layer across the patient journey — before or after appointments, in selected departments, or as part of premium care pathways. It gives your clinic a visible quality upgrade patients can feel, while your medical workflows stay exactly as they are.",
    problemImage: "/images/campaign/poliklinika-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "One system, multiple departments, consistent premium quality.",
    solutionBody: "sanza integrates at the facility level — a mat in the main waiting area, dedicated units in high-anxiety departments, and optional session rooms for specialised wellbeing programmes. The system is standardised and easy for staff to manage. Patients experience the same calming quality across departments. Your clinic becomes known for something specific: the place that genuinely cares about how you feel.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your facility",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/poliklinika-fit-waiting.jpg",
      "/images/campaign/poliklinika-fit-department.jpg",
      "/images/campaign/poliklinika-fit-staff.jpg",
      "/images/campaign/poliklinika-fit-programme.jpg"
    ],
    fitsItems: [
      {
        title: "Central waiting area",
        body: "A sanza station patients can opt into before any appointment — immediately signals premium care."
      },
      {
        title: "Department-level integration",
        body: "Prioritise departments where patient anxiety is highest — the ROI in smoother consultations is immediate."
      },
      {
        title: "Staff wellbeing",
        body: "A sanza session room available to clinical staff — supports resilience in high-demand environments."
      },
      {
        title: "Branded programme",
        body: "Offer a Wellbeing Protocol under your clinic brand — a sanza-powered signature service."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients / clients",
    whatChangesPatientsItems: [
      "A visit experience they describe specifically — and recommend specifically",
      "Lower anxiety before high-stress appointments"
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "Patient reviews that mention the experience, not just the clinical outcome",
      "A facility reputation that drives new patient acquisition without marketing spend"
    ],
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "The place that genuinely cares about how you feel — that's the positioning <strong>sanza</strong> creates.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Schedule a facility-level consultation.",
    finalCtaBody: "We'll map sanza to your room layout and patient flow — no commitment required.",
    finalCtaPrimary: "Schedule a facility-level consultation"
  },
  "spa-wellness": {
    segmentName: "Day Spas & Wellness Centres",
    metaTitle: "Day Spas & Wellness Centres | sanza × Nordora Vital",
    metaDescription: "A premium, technology-led wellness experience for day spas and wellness centres that want a memorable signature offer.",
    heroImage: "/images/campaign/day-spa-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For spas where the guest experience is the product",
    heroHeadline: "Give guests a wellness experience they cannot get everywhere.",
    heroSubhead: "Your spa already creates atmosphere, care and escape. <strong>sanza</strong> helps you add something guests immediately understand as different: a quiet, technology-led wellbeing experience that helps them reset, decompress and feel deeply looked after.\r\n\r\nIt becomes a premium treatment moment without needing constant therapist time, complex protocols or operational pressure. A simple addition that makes your spa feel more distinctive, more complete and more worth returning to.",
    heroCtaPrimary: "Discover sanza for your spa",
    heroValueProps: [
      "On-site demo",
      "Clear setup guidance",
      "No workflow redesign"
    ],
    contactCategory: "beauty-cosmetic",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for Day Spas & Wellness Centres.",
    quickStats: [
      {
        value: "15",
        label: "Premium wellbeing programs"
      },
      {
        value: "1",
        label: "Simple system your team can run"
      },
      {
        value: "10 min",
        label: "To create a deeper reset"
      },
      {
        value: "0",
        label: "Pressure on therapist capacity"
      }
    ],
    problemEyebrow: "Give loyal guests a new reason to be impressed.",
    problemTitle: "Your best guests already trust your spa.",
    problemBody: "They know your treatments, your therapists, your atmosphere, your standard of care. That is why they return.\r\n\r\nBut loyalty also raises expectations.\r\n\r\nAt some point, another massage, facial or seasonal ritual is not enough to feel new. Your guests want the same excellence they love — with a fresh layer of discovery, depth and perceived value.\r\n\r\n<strong>sanza</strong> helps you add that next layer without expanding your team, rebuilding your rooms or adding pressure to your therapists. It gives guests a premium, technology-led wellbeing experience they can feel immediately: quiet, deep, memorable and different from the usual spa menu.\r\n\r\nNot a replacement for what already works.\r\nA stronger reason for loyal guests to say: “You need to try this.”",
    problemImage: "/images/campaign/day-spa-block-1.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "sanza: the experience they haven't had yet — anywhere.",
    solutionBody: "A sanza session uses structured PEMF frequency programs to create a full-body experience of deep, quiet settling that guests cannot easily explain but immediately want to repeat. It's not heat. It's not pressure. It's something underneath both — a resonance that feels like the body finally remembering how to stop. Position it as your premium tier. Name it as your own. Let the results do the marketing.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsed electromagnetic field — gentle, non-invasive."
      },
      {
        title: "Chronobiological",
        body: "Frequency programs aligned to body rhythms."
      },
      {
        title: "Modular",
        body: "Mat, pad and targeted applicators for different rooms."
      }
    ],
    fitsTitle: "Where sanza fits in your spa",
    fitsEyebrow: "Integration",
    fitsLead: "A few simple touchpoints around the work you already do. The experience changes, while your core service stays yours.",
    fitsImages: [
      "/images/campaign/day-spa-fit-signature.jpg",
      "/images/campaign/day-spa-fit-treatment-enhancer.jpg",
      "/images/campaign/day-spa-fit-membership.jpg",
      "/images/campaign/day-spa-fit-retail.jpg"
    ],
    fitsItems: [
      {
        title: "Signature 60-min session",
        body: "High-margin, low-overhead, waitlisted within weeks of launch."
      },
      {
        title: "Treatment enhancer",
        body: "15-min sanza pre-treatment before massage or facial — an upsell guests request by name after the first time."
      },
      {
        title: "Membership feature",
        body: "Include sanza access in your premium membership — anchor for retention and per-member spend."
      },
      {
        title: "Retail crossover",
        body: "Guests who love the technology ask about home units — a natural conversation Nordora Vital supports."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your space",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your guests",
    whatChangesPatientsItems: [
      "An experience they haven't had and will come back for",
      "Guests rebook before they leave the building — consistently"
    ],
    whatChangesPracticeTitle: "For your spa",
    whatChangesPracticeItems: [
      "A signature offer that creates demand no marketing budget can replicate",
      "Premium pricing supported by a genuinely premium experience",
      "Retail revenue from guests who want to extend the experience at home"
    ],
    whatChangesPracticeImage: "/images/campaign/day-spa-hero.jpg",
    socialProofLabel: "Why partners ask to see it",
    socialProofQuote: "Guests who try it once rebook before they leave the building.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your setting.",
    demoStepsLead: "No pressure, no generic pitch. Tell us how your space works, and we will show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We clarify your setting, room flow, audience, and the questions you want answered."
      },
      {
        title: "Practical demo",
        body: "You experience the programs, applicators, and setup in a context close to your daily work."
      },
      {
        title: "Clear next steps",
        body: "If it fits, we outline the recommended setup, onboarding path, and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "Talk to us about launching sanza in your spa.",
    finalCtaBody: "A showcase presentation tailored to your facility — at no cost.",
    finalCtaPrimary: "Talk to us about launching sanza"
  }
};


export const CAMPAIGN_PAGE_CONTENT_DE: Partial<Record<CampaignSlug, CampaignPageContent>> = {
  "sporta-medicina": {
    segmentName: "Sportmedizin- und Regenerationszentren",
    metaTitle: "Sportmedizin- und Regenerationszentren | sanza × Nordora Vital",
    metaDescription: "Strukturierte PEMF-Wellness-Technologie für Sportmedizin- und Regenerationszentren, die Sportlern ein umfassenderes Regenerationserlebnis bieten möchten.",
    heroImage: "/images/campaign/sports-medicine-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für leistungsorientierte Praxen, die das gesamte Sportlererlebnis ernst nehmen",
    heroHeadline: "Bieten Sie Sportlern mehr als nur eine Behandlung. Bieten Sie ihnen ein Regenerationserlebnis.",
    heroSubhead: "<strong>sanza</strong> bringt strukturierte PEMF-Wellness-Technologie in die Sportmedizin – und hilft Sportlern, sich schneller zu erholen, sich zwischen den Trainingseinheiten geerdeter zu fühlen und Ihre Einrichtung mit spürbaren Ergebnissen in Verbindung zu bringen.",
    heroCtaPrimary: "Buchen Sie eine Demo zur Sportregeneration",
    heroValueProps: [
      "Rundgang durch die Einrichtung",
      "Einrichtung der Regenerationszone",
      "Einfach für das Personal"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für Sportmedizin- und Regenerationszentren erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Möglichkeiten, die Regeneration von Sportlern zu unterstützen"
      },
      {
        value: "1",
        label: "einfaches System für Ihr gesamtes Team"
      },
      {
        value: "10 Min.",
        label: "um den Zustand zu verändern, in dem sie ankommen"
      },
      {
        value: "0",
        label: "Störung Ihres Behandlungsablaufs"
      }
    ],
    problemEyebrow: "Die Lücke zwischen Behandlung und echter Regeneration",
    problemTitle: "Sportler kommen oft überdreht an, bevor die Arbeit beginnt.",
    problemBody: "Sie verfügen bereits über das klinische Fachwissen. Stoßwellen, manuelle Therapie, Ultraschall, Diagnostik – die technische Seite ist abgedeckt. Aber Sportler sind oft noch überdreht, wenn sie hereinkommen: erhöhter Cortisolspiegel, ein durch Training oder Wettkampf überreiztes Nervensystem. Die Umgebung Ihrer Behandlung spielt eine Rolle. Und derzeit fühlen sich die meisten sportmedizinischen Einrichtungen genauso an wie eine Hausarztpraxis.",
    problemImage: "/images/campaign/sports-medicine-block-1.jpg",
    solutionEyebrow: "Die Sanza-Ebene",
    solutionTitle: "Geben Sie Sportlern etwas, das sie spüren können – über die Behandlung hinaus.",
    solutionBody: "<strong>sanza</strong> nutzt PEMF-Technologie mit strukturierten Frequenzprogrammen, um ein beruhigendes Signal an den gesamten Körper zu senden. Es ist eine Premium-Wellness-Ebene, die Sportlern hilft, sich zu entspannen, zur Ruhe zu kommen und sich präsenter zu fühlen. Im sportmedizinischen Kontext bedeutet das eine Einrichtung, über die Sportler sprechen, weil sie sich anders anfühlt.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Polster und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihren Behandlungsablauf passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kerndienstleistung Ihre bleibt.",
    fitsItems: [
      {
        title: "Vor der Behandlung",
        body: "Führen Sie ein Beruhigungsprogramm durch, bevor Sie anspruchsvolle manuelle Arbeit oder Diagnostik durchführen – der Sportler kommt „aufgedreht“ an und verlässt das Programm ruhiger und kooperativer."
      },
      {
        title: "Entspannung nach der Behandlung",
        body: "Ein strukturiertes Abschlussprogramm hilft dem Körper, sich von einer klinischen Intervention zu lösen – die wahrgenommene Fürsorge steigt deutlich."
      },
      {
        title: "Zwischen den Sitzungen",
        body: "Nutzen Sie die sanza-Matte als hochwertige Warte-/Raststation – verwandelt passive Wartezeit in ein aktives Erholungserlebnis."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn Sanza in Ihren Raum integriert wird",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten/Kunden",
    whatChangesPatientsItems: [
      "Eine Erholungsumgebung, die bewusst gestaltet wirkt, nicht klinisch",
      "Etwas, das sie spüren und ihren Teamkollegen beschreiben können → Mundpropaganda",
      "Konsistenz: Jeder Besuch ist strukturiert und von höchster Qualität"
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Ein Alleinstellungsmerkmal, das Sie von gewöhnlichen Sportkliniken abhebt",
      "Stärkere Kundenbindung: Sportler kommen wieder, weil sie sich hier wohlfühlen",
      "Einfache Bedienung – Programme laufen über einen einfachen Controller, keine zusätzliche Schulung erforderlich"
    ],
    whatChangesPracticeImage: "/images/campaign/sports-medicine-for-practice.jpg",
    socialProofLabel: "Warum Partner sich das ansehen wollen",
    socialProofQuote: "Wird von leistungsorientierten Praxen in ganz Europa genutzt. Wir zeigen Ihnen genau, wie <strong>sanza</strong> sich in Ihren Erholungsablauf integriert – ohne einen einzigen Termin zu stören.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Ablauf, zugeschnitten auf Ihre Umgebung.",
    demoStepsLead: "Kein Druck, kein generisches Verkaufsgespräch. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Kennenlerngespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Kontext, der Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie trotzdem gut informiert."
      }
    ],
    finalCtaTitle: "Wird von leistungsorientierten Praxen in ganz Europa genutzt.",
    finalCtaBody: "Wir zeigen Ihnen genau, wie sanza sich in Ihren Regenerationsablauf integriert – ohne einen einzigen Termin zu stören.",
    finalCtaPrimary: "Rundgang durch Ihre Einrichtung vereinbaren"
  },
  hiropraktika: {
    segmentName: "Chiropraktik- und Manualtherapie-Praxen",
    metaTitle: "Chiropraktik- und Manualtherapie-Praxen | sanza × Nordora Vital",
    metaDescription: "Eine hochwertige Wohlfühlumgebung für Chiropraktik- und Manualtherapie-Praxen, in der sich Patienten bereits vor Beginn der manuellen Behandlung entspannen können.",
    heroImage: "/images/campaign/chiro-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Praxen, in denen die Gewebereaktion bereits beginnt, bevor Sie den Patienten berühren",
    heroHeadline: "Bieten Sie Ihren Patienten mehr als nur eine Justierung.",
    heroSubhead: "<strong>sanza</strong> hilft Ihnen dabei, den gesamten Chiropraktik-Besuch zu einem ruhigeren, umfassenderen Erlebnis zu machen – vor, während und nach Ihrer manuellen Behandlung. Patienten fühlen sich wohler, besser betreut und stärker mit Ihrer Praxis verbunden. Ihr Behandlungsablauf bleibt dabei genau so, wie er ist.",
    heroCtaPrimary: "Sehen Sie, wie es in einem Chiropraktikraum funktioniert",
    heroValueProps: [
      "Vor-Ort-Demo",
      "Klare Einrichtungsanleitung",
      "Keine Umgestaltung des Arbeitsablaufs"
    ],
    contactCategory: "therapists",
    demoRequestMessage: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für Chiropraktik- und manuelle Therapiepraxen erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Programme für ruhigere Besuche"
      },
      {
        value: "1",
        label: "einfaches System für das gesamte Team"
      },
      {
        value: "10 Min.",
        label: "um die Atmosphäre im Raum zu verändern"
      },
      {
        value: "0",
        label: "Änderungen an Ihrer manuellen Arbeit"
      }
    ],
    problemEyebrow: "Verlieren Sie keine Behandlungszeit mehr durch Anspannung, die Sie nicht verursacht haben.",
    problemTitle: "Ihre Hände wissen, was zu tun ist.",
    problemBody: "„Wenn ein Patient jedoch zurückhaltend, angespannt, abgelenkt oder nervös zu Ihnen kommt, arbeiten Sie nicht nur an der Wirbelsäule – Sie arbeiten gegen den Zustand an, den der Patient mit in den Raum gebracht hat.\r\n\r\n<strong>sanza</strong> hilft Ihnen, diesen Kontext zu verändern.\r\n\r\nEs verleiht Ihrer Chiropraktikpraxis eine ruhige, strukturierte Atmosphäre rund um Ihre Arbeit, sodass sich Patienten schneller entspannen, sich auf dem Tisch sicherer fühlen und den Besuch als umfassenderer Erlebnis empfinden. Weniger Widerstand. Mehr Vertrauen. Ein besserer Start für die Behandlung – und ein besseres Gefühl beim Verlassen der Praxis.“",
    problemImage: "/images/campaign/chiro-block-1.jpg",
    solutionEyebrow: "Die Sanza-Schicht",
    solutionTitle: "Sanza beruhigt das Nervensystem, bevor Sie beginnen.",
    solutionBody: "Ein 10–15-minütiges PEMF-Ankunftsprogramm auf der Sanza-Matte bewirkt eine Veränderung im Befinden der Patienten – sie fühlen sich ruhiger, geerdeter und weniger angespannt. Das chronobiologische Frequenzsignal ist sanft, nicht-invasiv und mit chiropraktischer Arbeit kompatibel. Ihre Behandlung folgt einem Körper, der bereits begonnen hat, loszulassen. Die Qualität Ihrer Arbeit bleibt unverändert – was sich ändert, ist das, womit Sie arbeiten.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Pad und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihren Behandlungsablauf passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um die Arbeit, die Sie bereits leisten. Das Erlebnis verändert sich, während Ihr Kerndienstleistung Ihre bleibt.",
    fitsImages: [
      "/images/campaign/chiro-fit-arrival.jpg",
      "/images/campaign/chiro-fit-applicators.jpg",
      "/images/campaign/chiro-fit-decompression.jpg"
    ],
    fitsItems: [
      {
        title: "Ankunftsmattenprogramm",
        body: "Der Patient liegt auf der sanza-Matte, während Sie seine Unterlagen durchgehen. Wenn Sie bereit sind, ist er es auch."
      },
      {
        title: "Gezielte Applikatoren",
        body: "Optionaler Stift- oder Pad-Applikator für den Nacken-/Schulterbereich vor der Arbeit an der Halswirbelsäule – ein kurzer, lokaler Moment der Entspannung."
      },
      {
        title: "Dekompression nach der Behandlung",
        body: "Ein 5-minütiges Abschlussprogramm sorgt für einen ruhigen, geerdeten Übergang zurück in den Alltag des Patienten."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihre Praxis kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten/Kunden",
    whatChangesPatientsItems: [
      "Weniger Anspannung, schnellere Entspannung, tiefere Entspannung während der Behandlungen",
      "Eine Praxis, die durchdacht und hochwertig wirkt – nicht nur funktional"
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Weniger schwierige Momente am Behandlungstisch",
      "Ein klares Alleinstellungsmerkmal: Ihre Praxis hat etwas, was andere nicht haben",
      "Patienten beschreiben es – und empfehlen es weiter, damit andere es erleben können"
    ],
    whatChangesPracticeImage: "/images/campaign/chiro-for-practice.jpg",
    whatChangesPracticeImagePosition: "50% 32%",
    socialProofLabel: "Warum Partner darum bitten, es zu sehen",
    socialProofQuote: "Die meisten Chiropraktiker wollen es einmal ausprobieren und dann entscheiden. Genau das bieten wir an.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Prozess, der auf Ihre Praxis zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihre Praxis funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Praxisumgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Umfeld, das Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Die meisten Chiropraktiker möchten es erst einmal ausprobieren und dann entscheiden.",
    finalCtaBody: "Genau das bieten wir an – eine unverbindliche Demo in Ihrer Praxis.",
    finalCtaPrimary: "Buchen Sie eine unverbindliche Demo"
  },
  "joga-meditacija": {
    segmentName: "Yoga- und Meditationsstudios",
    metaTitle: "Yoga- und Meditationsstudios | sanza × Nordora Vital",
    metaDescription: "Erdende PEMF-Wellness-Technologie für Yoga- und Meditationsstudios, in denen Achtsamkeit das Produkt ist.",
    heroImage: "/images/campaign/yoga-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Studios, in denen Achtsamkeit das Produkt ist",
    heroHeadline: "Bieten Sie Ihren Schülern mehr als nur einen Kurs. Bieten Sie ihnen einen Zustand, in den sie zurückkehren möchten.",
    heroSubhead: "<strong>sanza</strong> verleiht Ihrem Studioerlebnis eine ruhige, erdende Komponente – und hilft den Schülern, anzukommen, sich zu entspannen, zu üben und mit einem tieferen Gefühl der Ruhe wieder zu gehen. Es unterstützt die Atmosphäre, die Sie bereits mit so viel Mühe schaffen, ohne Ihre Unterrichtsmethode zu verändern.",
    heroCtaPrimary: "Erleben Sie sanza in Ihrem Studio",
    heroValueProps: [
      "Studio-Erlebnis-Session",
      "Ruhige Technologie",
      "Premium-Rituale"
    ],
    contactCategory: "therapists",
    demoRequestMessage: "Ich möchte eine sanza-Vorführung vereinbaren und weitere Informationen für Yoga- und Meditationsstudios erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Möglichkeiten, das Kurserlebnis zu vertiefen"
      },
      {
        value: "1",
        label: "einfaches System für Ihr Studio"
      },
      {
        value: "10 Min.",
        label: "um den Teilnehmern zu helfen, zur Ruhe zu kommen"
      },
      {
        value: "0",
        label: "Änderungen an Ihrem Unterrichtsablauf"
      }
    ],
    problemEyebrow: "Ihre Teilnehmer kommen mit dem Alltag im Gepäck zum Kurs.",
    problemTitle: "Sie liegen vielleicht auf der Matte, aber ein Teil von ihnen ist noch im Auto, im Posteingang, im Meeting, in dem Lärm, aus dem sie gerade gekommen sind.",
    problemBody: "Als Studiobetreiber weißt du, wie viel Zeit zu Beginn einer Stunde darauf verwendet wird, den Teilnehmern zu helfen, sich einzufinden – den Atem zu beruhigen, das Nervensystem zu entspannen und die Aufmerksamkeit wieder auf den Körper zu lenken.\r\n\r\n<strong>sanza</strong> unterstützt diesen Übergang.\r\n\r\nEs verleiht deinem Studio eine ruhige, strukturierte Grundlage, die den Teilnehmern hilft, sich schneller einzufinden, sich in der Praxis präsenter zu fühlen und mit einer inneren Ruhe nach Hause zu gehen, zu der sie gerne zurückkehren möchten.\r\n\r\nNicht, um Ihren Unterricht zu ersetzen.\r\nSondern damit der Raum ihn unterstützt.",
    problemImage: "/images/campaign/yoga-block-1.jpg",
    solutionEyebrow: "Die Sanza-Schicht",
    solutionTitle: "Sanza ist eine Erdungstechnologie für Räume, in denen Präsenz großgeschrieben wird.",
    solutionBody: "PEMF-Signale wirken unterhalb der Wahrnehmungsschwelle – ein strukturierter, den ganzen Körper umfassender elektromagnetischer Impuls, der den Übergang vom sympathischen zum parasympathischen Zustand unterstützt. Stellen Sie sich das wie eine Stimmgabel für den Raum vor. Die Teilnehmer müssen das nicht verstehen. Sie fühlen sich einfach anders – ruhiger, geerdeter, bereit, nach innen zu gehen. Dein Unterricht findet in einem Körper statt, der bereits begonnen hat, sich zu entspannen.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Polster und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in dein Studio passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um die Arbeit, die du bereits machst. Das Erlebnis verändert sich, während dein Kernangebot dein eigenes bleibt.",
    fitsImages: [
      "/images/campaign/yoga-fit-pre-class.jpg",
      "/images/campaign/yoga-fit-savasana.jpg",
      "/images/campaign/yoga-fit-private.jpg",
      "/images/campaign/yoga-fit-workshop.jpg"
    ],
    fitsItems: [
      {
        title: "Vor dem Kurs",
        body: "Mat-Programme, die 10–15 Minuten vor Beginn der Stunde laufen. Die Teilnehmer legen sich hin, der Raum kommt zur Ruhe."
      },
      {
        title: "Savasana-Erweiterung",
        body: "Führen Sie während der abschließenden Ruhephase ein Entspannungsprogramm durch – so fühlt sich Savasana länger, tiefer und vollständiger an."
      },
      {
        title: "Privatstunden",
        body: "Einsatz bei Einzelkunden als Teil eines Premium-1:1-Erlebnisses, insbesondere für traumabewusste oder regenerative Arbeit."
      },
      {
        title: "Workshops & Retreats",
        body: "Ein strukturiertes Eröffnungs-/Abschlussritual, das zu einem Markenzeichen Ihrer Veranstaltungen wird."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Raum einzieht",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Teilnehmer",
    whatChangesPatientsItems: [
      "Sie kommen gestresst an und gehen wirklich entspannt – nicht nur gedehnt",
      "Savasana fühlt sich anders an. Tiefer. Das merken sie.",
      "Ihr Studio wird mit einer besonderen Erlebnisqualität assoziiert"
    ],
    whatChangesPracticeTitle: "Für Ihr Studio",
    whatChangesPracticeItems: [
      "Ein Premium-Angebot, das Ihre Preisgestaltung unterstützt",
      "Schüler bleiben treu, weil das Erlebnis unersetzlich ist",
      "Lehrer finden den Raum vom ersten Atemzug an leichter zu nutzen"
    ],
    whatChangesPracticeImage: "/images/campaign/yoga-for-studio.jpg",
    socialProofLabel: "Warum Partner danach fragen",
    socialProofQuote: "„Ich möchte das in meinem Studio.“ – Jeder Studiobetreiber, der <strong>sanza</strong> zum ersten Mal erlebt.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Pfad, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein generisches Verkaufsgespräch. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihr Publikum und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Kontext, der Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Eine Sitzung. Sie werden spüren, was Ihre Schüler spüren werden.",
    finalCtaBody: "Wir bieten Studiobesitzern eine persönliche Erprobungssitzung an, bevor Sie sich festlegen. Kommen Sie herein. Legen Sie sich auf die Matte. Entscheiden Sie dann.",
    finalCtaPrimary: "Buchen Sie Ihre Erprobungssitzung"
  },
  "sporta-zales": {
    segmentName: "Fitnessstudios, CrossFit- und Fitnesseinrichtungen",
    metaTitle: "Fitnessstudios, CrossFit- und Fitnesseinrichtungen | sanza × Nordora Vital",
    metaDescription: "Eine Premium-Erholungs- und Entspannungsstation für Fitnessstudios, CrossFit-Boxen und Fitnesseinrichtungen, die ihre Mitgliederbindung stärken möchten.",
    heroImage: "/images/campaign/gym-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Einrichtungen, die wissen, dass Mitgliederbindung das A und O ist",
    heroHeadline: "Machen Sie Ihr Fitnessstudio zu einem Ort, an den Mitglieder kommen, um sich zu erholen – nicht nur um zu trainieren.",
    heroSubhead: "Jedes Fitnessstudio kann Geräte anbieten.\r\nNur wenige können ein Erholungserlebnis bieten, an das sich die Mitglieder gerne erinnern.\r\n\r\n<strong>sanza</strong> verleiht Ihrer Einrichtung nach dem Training eine erstklassige Entspannungszone – damit Ihre Mitglieder zur Ruhe kommen, neue Energie tanken und sich wirklich gut aufgehoben fühlen können. Dieses Gefühl wird Teil Ihrer Marke.",
    heroCtaPrimary: "Erweitern Sie Ihr Fitnessstudio um eine Erholungsstation",
    heroValueProps: [
      "Eine Erholungsstation",
      "Kein zusätzliches Personal",
      "Ein Premium-Erlebnis für Ihre Mitglieder"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Ich möchte eine Sanza-Vorführung vereinbaren und weitere Informationen für Fitnessstudios, CrossFit- und Fitnesseinrichtungen erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Erholungsprogramme, die Ihre Mitglieder spüren können"
      },
      {
        value: "1",
        label: "einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min.",
        label: "um einen Premium-Moment der Erholung zu schaffen"
      },
      {
        value: "0",
        label: "Änderungen an Ihrem Trainingsangebot"
      }
    ],
    problemEyebrow: "Erweitern Sie das Mitgliedererlebnis über das Training hinaus.",
    problemTitle: "Ihr Fitnessstudio bietet Mitgliedern bereits einen Ort, an dem sie trainieren, Leistung bringen und an ihre Grenzen gehen können.",
    problemBody: "<strong>sanza</strong> hilft Ihnen dabei, dieses Erlebnis auf die Zeit nach dem Training auszuweiten: einen ruhigen, strukturierten Moment der Erholung, der sich hochwertig, bewusst gestaltet und wirklich wertvoll anfühlt.\r\n\r\nEs gibt Ihren Mitgliedern einen weiteren Grund, länger zu bleiben, sich beim Verlassen des Studios besser zu fühlen und Ihre Einrichtung mit mehr als nur Geräten oder Kursen in Verbindung zu bringen. Kein Ersatz für das, was Sie bereits gut machen – sondern eine einfache Möglichkeit, den gesamten Besuch als rundum gelungen zu empfinden.",
    problemImage: "/images/campaign/gym-block-1.jpg",
    solutionEyebrow: "Die Sanza-Ebene",
    solutionTitle: "Sanza: Eine Erholungsstation, die Ihre Mitglieder tatsächlich nutzen und über die sie sprechen werden.",
    solutionBody: "Eine Sanza-Station – Matte, Steuerung, übersichtliches Programmmenü – bietet Mitgliedern nach dem Training ein 15–20-minütiges, strukturiertes PEMF-Entspannungserlebnis. Ganzkörperentspannung, Beruhigung des Nervensystems, ein echtes Signal für den Körper, dass das Training beendet ist. Es ist kein Personal erforderlich, um die Station zu bedienen. Die Mitglieder wählen sie selbst aus dem Programmmenü aus. Es wird zu einem Ritual. Es wird zu einem Grund, warum sie bleiben.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, die auf den Körperrhythmus abgestimmt sind."
      },
      {
        title: "Modular",
        body: "Matte, Pad und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihre Einrichtung passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um das, was Sie bereits tun. Das Erlebnis verändert sich, während Ihr Kerngeschäft das Ihre bleibt.",
    fitsImages: [
      "/images/campaign/gym-fit-recovery-zone.jpg",
      "/images/campaign/gym-fit-membership-tier.jpg",
      "/images/campaign/gym-fit-hiit.jpg",
      "/images/campaign/gym-fit-pt-closeout.jpg"
    ],
    fitsItems: [
      {
        title: "Eigenständige Erholungszone",
        body: "Eine Matte, ein Controller, eine Ecke. Mitglieder buchen 15-Minuten-Slots nach dem Training."
      },
      {
        title: "Premium-Mitgliedschaftsstufe",
        body: "Beziehen Sie den Zugang zu sanza in eine Premium-Stufe ein – steigert den Umsatz pro Mitglied ohne zusätzliche Personalkosten."
      },
      {
        title: "CrossFit-/HIIT-Umgebungen",
        body: "Nach hochintensiven Trainingseinheiten ist ein strukturiertes Entspannungsprogramm genau das, was das Nervensystem braucht."
      },
      {
        title: "Ergänzung zum Personal Training",
        body: "PTs können sanza als 10-minütigen Abschluss einbauen – das schafft Mehrwert und erhöht die Buchungsrate für PT."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Raum kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Mitglieder",
    whatChangesPatientsItems: [
      "Ein Erlebnis nach dem Training, das sich hochwertig und bewusst gestaltet anfühlt",
      "Besserer Schlaf, gleichmäßigere Energie in den Tagen nach hartem Training – sie merken es und sagen es auch",
      "Ein Grund, länger in Ihrer Einrichtung zu bleiben und mehr zu investieren"
    ],
    whatChangesPracticeTitle: "Für Ihre Einrichtung",
    whatChangesPracticeItems: [
      "Ein echtes Alleinstellungsmerkmal, das Wettbewerber nicht von heute auf morgen kopieren können",
      "Stärkere Bindungsdaten von Mitgliedern, die Erholungszonen nutzen",
      "Mundpropaganda: „Hast du schon die Erholungsmatte im Fitnessstudio X ausprobiert?“"
    ],
    whatChangesPracticeImage: "/images/campaign/gym-for-facility.jpg",
    socialProofLabel: "Warum Partner darum bitten, es zu sehen",
    socialProofQuote: "Eine Station. Kein zusätzliches Personal. Ein Grund zur Verlängerung.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Pfad, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen Ihnen, wo Sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Kontext, der Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Eine Station. Kein zusätzliches Personal. Ein Grund zur Verlängerung.",
    finalCtaBody: "Sprechen Sie mit uns über einen Pilotversuch in Ihrer Einrichtung – wir konfigurieren die richtige Einrichtung für Ihren Grundriss und Ihr Mitgliedschaftsmodell.",
    finalCtaPrimary: "Sprechen Sie mit uns über einen Pilotversuch"
  },
  "vecu-cilveku-aprupe": {
    segmentName: "Pflegeheime & Seniorenbetreuungseinrichtungen",
    metaTitle: "Pflegeheime & Seniorenbetreuungseinrichtungen | sanza × Nordora Vital",
    metaDescription: "Ein sanftes, strukturiertes PEMF-Wellnesserlebnis für Einrichtungen der Seniorenbetreuung, in denen Komfort und Würde jeden Tag zählen.",
    heroKicker: "Für Einrichtungen, in denen Komfort und Würde der Maßstab für Qualität sind",
    heroHeadline: "Komfort, Ruhe und Würde – für jeden Bewohner, jeden Tag.",
    heroSubhead: "<strong>sanza</strong> bietet ein sanftes, strukturiertes Wohlfühlerlebnis in der Altenpflege – es fördert Entspannung, Wohlbefinden und das Gefühl, wirklich umsorgt zu werden. Sicher, nicht-invasiv und für das Pflegepersonal einfach anzuwenden.",
    heroCtaPrimary: "Erfahren Sie, wie sanza in der Seniorenbetreuung funktioniert",
    heroValueProps: [
      "Vor-Ort-Demonstration",
      "Eindeutige Einrichtungsanleitung",
      "Keine Umgestaltung der Arbeitsabläufe"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "Ich möchte eine sanza-Demonstration vereinbaren und weitere Informationen für Pflegeheime und Seniorenbetreuungseinrichtungen erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Nummerierte Programme"
      },
      {
        value: "1",
        label: "Steuerung, läuft von selbst"
      },
      {
        value: "10 Min",
        label: "Einarbeitung des Personals"
      },
      {
        value: "0",
        label: "Umgestaltung der Arbeitsabläufe"
      }
    ],
    problemEyebrow: "Die Kluft zwischen Sicherheit und echtem Wohlbefinden",
    problemTitle: "Bewohner brauchen mehr als nur Sicherheit. Sie brauchen spürbaren Komfort.",
    problemBody: "Ihre Bewohner sind in Sicherheit. Sie werden versorgt, haben ein Dach über dem Kopf und werden medizinisch überwacht. Doch die tatsächliche Erfahrung des Lebens in einer Pflegeeinrichtung – der allgegenwärtige Stress, der Verlust der Selbstständigkeit, die Reizüberflutung in den Gemeinschaftsräumen – fordert ihren Tribut, den die klinische Versorgung nicht auffängt. Angehörige bemerken es, wenn ihre Liebsten unruhiger, weniger ausgeglichen oder weniger sie selbst zu sein scheinen. Auch Sie bemerken es. Was die Bewohner zusätzlich zur medizinischen Versorgung brauchen, ist ein beständiges, sanftes Signal, dass ihr Wohlbefinden zählt.",
    solutionEyebrow: "Die Sanza-Ebene",
    solutionTitle: "Sanza: ein tägliches Wohlfühlritual für Bewohner, die mehr als nur klinische Versorgung verdienen.",
    solutionBody: "Sanza nutzt sanfte PEMF-Frequenzsignale, um ein beruhigendes Ganzkörpererlebnis zu schaffen – ohne Nadeln, ohne Medikamente und ohne aktive Anstrengung seitens des Bewohners. Sie liegen oder sitzen auf der Matte, das Programm läuft, und das strukturierte elektromagnetische Signal erledigt den Rest. Für das Pflegepersonal ist es ein hochwertiges Hilfsmittel, das sie mit Würde anbieten können – etwas, das sagt: Wir haben darüber nachgedacht, wie Sie sich fühlen, nicht nur, was Sie brauchen.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Biorhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Polster und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihre Einrichtung passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um die Arbeit, die Sie bereits leisten. Das Erlebnis verändert sich, während Ihr Kerndienstleistung Ihre bleibt.",
    fitsItems: [
      {
        title: "Morgen-Entspannungsprogramm",
        body: "Eine sanfte Routine nach dem Frühstück – hilft den Bewohnern, den Tag aus einer ruhigeren Ausgangsbasis zu beginnen."
      },
      {
        title: "Verbesserung der Nachmittagsruhe",
        body: "Führen Sie Programme während der natürlichen Nachmittagsruhe durch – für eine tiefere, erholsamere Ruhe."
      },
      {
        title: "Individuelle Komfort-Sitzungen",
        body: "Werden Bewohnern mit erhöhter Angst oder chronischen Beschwerden als personalisiertes Pflegeelement angeboten."
      },
      {
        title: "Vorbereitung auf Familienbesuche",
        body: "Ein kurzes Beruhigungsprogramm vor Familienbesuchen kann die Qualität dieser Interaktionen deutlich verbessern."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Raum kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Bewohner",
    whatChangesPatientsItems: [
      "Ein tägliches Erlebnis von Komfort und echter Fürsorge – nicht nur klinisches Management",
      "Ein Gefühl von Ritual und Ruhe, das die Stimmung und die Lebensqualität verbessert"
    ],
    whatChangesPracticeTitle: "Für Ihre Einrichtung",
    whatChangesPracticeItems: [
      "Sichtbarer Beweis, dass diese Einrichtung in den ganzen Menschen investiert – Familien bemerken dies und erzählen es weiter",
      "Stärkeres Vertrauen in die Pflegequalität, mehr Weiterempfehlungen durch Mundpropaganda",
      "Ein Hilfsmittel für schwierige Momente – etwas Freundliches und Wirksames, das keine Verschreibung erfordert"
    ],
    socialProofLabel: "Warum Partner danach fragen",
    socialProofQuote: "Seniorenpflegeeinrichtungen in ganz Europa nutzen <strong>sanza</strong> als tägliches Programm für das Wohlbefinden der Bewohner.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Ablauf, der auf Ihre Einrichtung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihre Einrichtung funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Einrichtung, die Raumaufteilung, die Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Umfeld, das Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Senioreneinrichtungen in ganz Europa nutzen sanza als tägliches Wohlfühlprogramm für ihre Bewohner.",
    finalCtaBody: "Wir möchten Ihnen gerne zeigen, wie es in Ihrer Einrichtung funktionieren würde.",
    finalCtaPrimary: "Buchen Sie eine Beratung für Ihre Pflegeeinrichtung"
  },
  "spa-viesnicas": {
    segmentName: "Spa-Hotels & Resorts",
    metaTitle: "Spa-Hotels & Resorts | sanza × Nordora Vital",
    metaDescription: "Hochwertige PEMF-Wellness-Technologie für Spa-Hotels und Resorts, die ein einzigartiges Gästeerlebnis bieten möchten.",
    heroImage: "/images/campaign/spa-hotel-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Häuser, denen das Gästeerlebnis am Herzen liegt",
    heroHeadline: "Bieten Sie Ihren Gästen ein Wellness-Erlebnis, das sie nicht überall finden.",
    heroSubhead: "Ihr Spa bietet bereits Komfort, Pflege und Atmosphäre. <strong>sanza</strong> hilft Ihnen dabei, diesem Erlebnis eine neue Dimension zu verleihen: einen ruhigen, technologiegestützten Neustart, der sich hochwertig, unvergesslich und auf subtile Weise anders anfühlt.\r\n\r\nGäste erinnern sich nicht nur an die Behandlungsauswahl. Sie erinnern sich daran, wie tief sie abschalten konnten, wie gut sie sich umsorgt fühlten und ob das Erlebnis ihnen etwas bot, worüber es sich zu sprechen lohnt. <strong>sanza</strong> schenkt Ihrem Spa einen unverwechselbaren Wohlfühlmoment, der Ihre Fünf-Sterne-Positionierung untermauert, ohne Ihre bestehenden Behandlungen zu verändern.",
    heroCtaPrimary: "Entdecken Sie sanza für Ihr Spa",
    heroValueProps: [
      "Präsentation",
      "Premium-Positionierung",
      "Geringer Betriebsaufwand"
    ],
    contactCategory: "beauty-cosmetic",
    demoRequestMessage: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für Spa-Hotels & Resorts erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Premium-Wellnessprogramme"
      },
      {
        value: "1",
        label: "einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min.",
        label: "um ein unvergessliches Erlebnis zu schaffen"
      },
      {
        value: "0",
        label: "Änderungen an Ihrem Spa-Angebot"
      }
    ],
    problemEyebrow: "Geben Sie Ihren Gästen einen Grund, nach ihrer Abreise von Ihrem Spa zu schwärmen.",
    problemTitle: "Ihre Gäste finden in fast jedem Premium-Hotel eine Sauna, einen Massageraum und einen Ruheraum.",
    problemBody: "Was sie jedoch nicht überall finden, ist ein Wellness-Erlebnis, das sich wirklich neu anfühlt, tief beruhigend wirkt und in Erinnerung bleibt.",
    problemImage: "/images/campaign/spa-hotel-block-1.jpg",
    solutionEyebrow: "PEMF · Biofrequenz · Laser",
    solutionTitle: "Das ist die Chance.",
    solutionBody: "<strong>sanza</strong> ist ein professionelles Wellbeing-System, das PEMF, strukturierte Biofrequenzprogramme und Kaltlaser in einer Signature-Reihenfolge bündelt — kein Einzeltechnik-Schalterkasten. Es ist keine Massage und keine Wärme — Gäste spüren ein tiefes, ruhiges Settling, das sie sofort wiederholen möchten. Positionieren Sie es als Signature-Programm unter Ihrer Marke.",
    solutionSpecs: [
      {
        title: "<strong>sanza</strong> hilft Ihnen dabei, Ihrem Spa einen unverwechselbaren, technologiegestützten Reset hinzuzufügen – keine weitere Standardbehandlung auf der Karte, sondern einen Premium-Wellness-Moment, den Gäste sofort spüren können. Es macht Ihr Spa-Erlebnis vollständiger, einzigartiger und erhöht die Wahrscheinlichkeit, dass es zu dem Teil des Aufenthalts wird, von dem sie anderen erzählen.",
        body: "Die sanza-Ebene"
      },
      {
        title: "sanza: das Erlebnis, das Gäste nirgendwo sonst in Lettland finden.",
        body: "sanza ist ein professionelles PEMF-Wellness-System – eine Premium-Wellness-Technologie, die chronobiologische elektromagnetische Frequenzprogramme nutzt, um ein Ganzkörper-Erlebnis der Erdung und Beruhigung zu schaffen. Es ist keine Massage. Es ist keine Wärme. Es ist etwas ganz anderes – eine tiefe, ruhige Entspannung, die Gäste als eine Art tiefgreifende Entspannung empfinden, die sie sofort wieder erleben möchten. Positionieren Sie es als Ihr Signature-Programm. Geben Sie ihm Ihren Namen."
      },
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      }
    ],
    fitsTitle: "Frequenzprogramme, abgestimmt auf den Körperrhythmus.",
    fitsEyebrow: "Chronobiologisch",
    fitsLead: "Modular",
    fitsImages: [
      "/images/campaign/spa-fit-signature.jpg",
      "/images/campaign/spa-fit-pre-treatment.jpg",
      "/images/campaign/spa-fit-relaxation.jpg",
      "/images/campaign/spa-fit-retreat.jpg"
    ],
    fitsItems: [
      {
        title: "Matte, Pad und gezielte Applikatoren für verschiedene Räume.",
        body: "Integration"
      },
      {
        title: "Wo sanza in Ihr Spa passt",
        body: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kernangebot das Ihre bleibt."
      },
      {
        title: "Signature-Programm",
        body: "Die sanza-Sitzung – eine 45–60-minütige Premium-Buchung, die die PEMF-Matte mit gezielten Applikatoren kombiniert."
      },
      {
        title: "Vorbereitung auf die Behandlung",
        body: "Führen Sie vor einer Massage oder Gesichtsbehandlung eine 15-minütige Beruhigungsphase durch – die Behandlung wirkt auf einen Körper, der bereits offen ist."
      }
    ],
    whatChangesTitle: "Eine Sanza-Station im Ruheraum – Gäste nutzen sie zwischen den Behandlungen oder als eigenständiges Erlebnis.",
    whatChangesEyebrow: "Besonderheit im Ruheraum",
    whatChangesPatientsTitle: "Retreat- und Paarangebote",
    whatChangesPatientsItems: [
      "Integrieren Sie Sanza in Retreat-Pakete oder gestalten Sie eine Premium-Paarsitzung mit zwei Matten und einem Programm.",
      "Ergebnisse",
      "Was sich ändert, wenn Sanza in Ihren Raum Einzug hält"
    ],
    whatChangesPracticeTitle: "Für Ihre Gäste",
    whatChangesPracticeItems: [
      "Ein Erlebnis, das sie noch nie hatten und für das sie wiederkommen möchten",
      "Ein Gefühl tiefer Entspannung, das Ihr Spa von allen anderen Luxusangeboten abhebt",
      "Etwas, das sie ihren Freunden so schildern, dass es echte Neugier weckt"
    ],
    whatChangesPracticeImage: "/images/campaign/spa-for-property.png",
    socialProofLabel: "Für Ihr Haus",
    socialProofQuote: "Ein marktbestimmendes Angebot auf dem lettischen Markt",
    socialProofAttribution: "Rechtfertigung für Premium-Preise – Technologie + Erlebnis = wahrgenommener Wert",
    demoStepsEyebrow: "Höhere Spa-Umsätze pro Gast ohne Erhöhung des Personalschlüssels",
    demoStepsTitle: "Warum Partner danach fragen",
    demoStepsLead: "Eine Handvoll europäischer Premium-Spas und Wellnesshotels setzen bereits <strong>sanza</strong> ein.",
    demoSteps: [
      {
        title: "Nordora Vital · Professionelles Partnerprogramm",
        body: "Was passiert, nachdem Sie uns kontaktiert haben"
      },
      {
        title: "Ein einfacher Demo-Ablauf, der auf Ihre Umgebung zugeschnitten ist.",
        body: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen."
      },
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Umgebung, den Raumaufbau, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      }
    ],
    finalCtaTitle: "Praktische Demo",
    finalCtaBody: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Umfeld, das Ihrer täglichen Arbeit nahekommt.",
    finalCtaPrimary: "Klare nächste Schritte"
  },
  "golfa-klubi": {
    segmentName: "Golf Clubs",
    metaTitle: "Golf Clubs | sanza × Nordora Vital",
    metaDescription: "Premium PEMF wellbeing technology for golf clubs that want a post-round recovery ritual worthy of their members.",
    heroImage: "/images/campaign/golf-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "For clubs where the member experience extends beyond the 18th hole",
    heroHeadline: "Machen Sie das Erlebnis nach der Runde so hochwertig wie den Club selbst.",
    heroSubhead: "Ihre Mitglieder kommen nicht nur wegen des Golfplatzes. Sie kommen wegen des Gesamtgefühls, das der Club vermittelt – dem Tempo, dem Service, der Atmosphäre und dem Gefühl, das sie nach einer Runde haben.\r\n\r\n<strong>sanza</strong> hilft Ihnen dabei, dieses Erlebnis über das 18. Loch hinaus zu verlängern – mit einem erstklassigen Moment der Erholung und Entspannung, den Ihre Mitglieder wirklich spüren können. Ein ruhiger, technologiegestützter Neustart für das Clubhaus, die Performance-Lounge oder den Wellnessbereich – entwickelt, damit sich Ihr Club vollständiger, unvergesslicher und unvergleichlicher anfühlt.",
    heroCtaPrimary: "Erfahren Sie, wie Golfclubs sanza nutzen",
    heroValueProps: [
      "Vor-Ort-Vorführung",
      "Eindeutige Anleitung zur Einrichtung",
      "Keine Umgestaltung der Arbeitsabläufe"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Ich möchte eine sanza-Vorführung vereinbaren und weitere Informationen für Golfclubs erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Wellness-Programme nach der Runde"
      },
      {
        value: "1",
        label: "einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min",
        label: "um einen ganz besonderen Moment der Erholung zu schaffen"
      },
      {
        value: "0",
        label: "Änderungen am Ablauf in Ihrem Clubhaus"
      }
    ],
    problemEyebrow: "Bieten Sie Ihren Mitgliedern eine bessere Möglichkeit, sich nach der Runde zu erholen.",
    problemTitle: "Ihr Club bietet bereits den Platz, den Service und die Atmosphäre, die Ihre Mitglieder erwarten.",
    problemBody: "<strong>sanza</strong> hilft Ihnen dabei, diesen Standard auch auf die Zeit nach dem Spiel auszuweiten.\r\n\r\nGolf verlangt dem Körper viel ab – Rücken, Hüften, Schultern, Waden und das Nervensystem sind nach stundenlanger Konzentration und Bewegung stark beansprucht. Viele Mitglieder beenden die Runde mit einem guten Gefühl, tragen aber dennoch Verspannungen, Steifheit oder Müdigkeit in den Rest ihres Tages mit.\r\n\r\nGenau hier kann sich Ihr Club von anderen abheben.\r\n\r\n<strong>sanza</strong> bereichert das Clubhaus-Erlebnis um einen ruhigen, erstklassigen Moment der Erholung – etwas, das Mitglieder spüren, in Erinnerung behalten und über das sie sprechen können. Nicht als medizinische Dienstleistung. Sondern als raffinierte Wellness-Komponente, die das gesamte Club-Erlebnis noch vollständiger macht.",
    problemImage: "/images/campaign/golf-block-1.jpg",
    solutionEyebrow: "Die Sanza-Station",
    solutionTitle: "Sanza: Ein Erholungsritual nach der Runde, das Teil Ihrer Clubkultur wird.",
    solutionBody: "Eine Sanza-Station in Ihrem Clubhaus – direkt neben der Umkleide oder als eigener Erholungsraum – bietet Mitgliedern nach ihrer Runde eine strukturierte 15- bis 20-minütige PEMF-Entspannungssitzung. Ganzkörperentspannung, gezielte Applikatoren für die beanspruchten Bereiche und eine ruhige, hochwertige Atmosphäre. Mitglieder, die es einmal ausprobieren, nutzen es jedes Mal. Es wird zu einem Grund, warum sie hier spielen.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Polster und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihren Club passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kerngeschäft Ihr eigenes bleibt.",
    fitsImages: [
      "/images/campaign/golf-fit-event.jpg",
      "/images/campaign/golf-fit-clubhouse.jpg",
      "/images/campaign/golf-fit-post-round.jpg",
      "/images/campaign/golf-fit-recovery-room.jpg"
    ],
    fitsImagePositions: [
      "50% 36%",
      "50% 36%",
      "50% 36%",
      "50% 50%"
    ],
    fitsItems: [
      {
        title: "Erholungsraum",
        body: "Ein eigener, dezent gebrandeter Bereich – eine Matte, gedämpftes Licht, 15-minütige Programme auf einem übersichtlichen Menü."
      },
      {
        title: "Pro-Shop-Zusatzangebot",
        body: "Bieten Sie sanza-Sitzungen am Pro-Shop-Schalter als Premium-Zusatz nach dem Unterricht oder nach der Runde an."
      },
      {
        title: "Angebot für Firmenveranstaltungen",
        body: "Beziehen Sie eine sanza-Erholungssitzung in Premium-Pakete für Firmen-Golftage ein."
      },
      {
        title: "Mitgliedschaftsstufe",
        body: "Beziehen Sie den sanza-Zugang in eine Premium-Mitgliedschaftsstufe ein – steigert den Wert pro Mitglied."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Club kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Mitglieder",
    whatChangesPatientsItems: [
      "Eine Erholungsmöglichkeit nach der Runde, die sie spüren können – nicht nur eine heiße Dusche",
      "Ein Club, der in ihren Komfort auf einem Niveau investiert hat, das echte Qualität signalisiert"
    ],
    whatChangesPatientsImage: "/images/campaign/golf-for-members.jpg",
    whatChangesPracticeTitle: "Für Ihren Club",
    whatChangesPracticeItems: [
      "Ein Premium-Unterscheidungsmerkmal in einem wettbewerbsintensiven Markt",
      "Eine zusätzliche Einnahmequelle bei minimalen Betriebskosten",
      "Mitglieder, die das Gefühl haben, dass sich ihre Investition in die Mitgliedschaft voll und ganz lohnt"
    ],
    whatChangesPracticeImage: "/images/campaign/golf-for-club.jpg",
    socialProofLabel: "Warum Partner sich das ansehen wollen",
    socialProofQuote: "Ein Club, der die Erholung seiner Mitglieder genauso ernst nimmt wie ihr Spiel. Das ist die Positionierung, die <strong>sanza</strong> unterstützt.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Pfad, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihr Club funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Kennenlerngespräch",
        body: "Wir klären Ihre Räumlichkeiten, Raumaufteilung, Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Umfeld, das Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Ein Club, der die Erholung seiner Mitglieder genauso ernst nimmt wie ihr Spiel.",
    finalCtaBody: "Sprechen Sie mit uns darüber, wie sanza in Ihrem Clubhaus funktionieren würde.",
    finalCtaPrimary: "Sprechen Sie mit uns über Ihren Club"
  },
  "tenisa-klubi": {
    segmentName: "Tennisclubs",
    metaTitle: "Tennisclubs | sanza × Nordora Vital",
    metaDescription: "Strukturierte PEMF-Wellness-Technologie für Tennisclubs, die ihren Mitgliedern ein Regenerationsangebot nach dem Spiel bieten möchten, an das sie sich gerne erinnern.",
    heroImage: "/images/campaign/tennis-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Einrichtungen, die wissen, dass Mitgliederbindung zwischen den Trainingseinheiten entsteht",
    heroHeadline: "Ihre Mitglieder trainieren hart. Bieten Sie ihnen ein Regenerationserlebnis, das dem gerecht wird.",
    heroSubhead: "<strong>sanza</strong> bringt strukturierte PEMF-Wellness-Technologie in Tennisclubs – ein erstklassiges Erholungsangebot nach dem Spiel, das Ihre Anlage von anderen abhebt und dafür sorgt, dass Ihre Mitglieder gerne hier bleiben.",
    heroCtaPrimary: "Sehen Sie, wie Tennisclubs sanza nutzen",
    heroValueProps: [
      "Vor-Ort-Demo",
      "Klare Einrichtungsanleitung",
      "Keine Umgestaltung der Arbeitsabläufe"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für Tennisclubs erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Regenerationsprogramme für Spieler"
      },
      {
        value: "1",
        label: "einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min.",
        label: "um Spielern zu helfen, sich nach dem Spiel zu erholen"
      },
      {
        value: "0",
        label: "Änderungen am Clubbetrieb"
      }
    ],
    problemEyebrow: "Bieten Sie Ihren Spielern einen Regenerationsstandard, der ihrem Training entspricht.",
    problemTitle: "Ihre Spieler investieren viel Zeit, Energie und Ehrgeiz in jedes Spiel, jede Unterrichtsstunde und jede Trainingseinheit.",
    problemBody: "<strong>sanza</strong> hilft Ihrem Verein dabei, die Phase nach dem Training zu unterstützen: Erholung, Regeneration und die Rückkehr zur Spielbereitschaft.\r\n\r\nTennis belastet immer wieder Schultern, Ellbogen, Hüften, Waden und das Nervensystem. Ein strukturierter Reset nach dem Spiel bietet Spielern eine erstklassige Möglichkeit, einen Gang zurückzuschalten, sich zu erholen und sich auf die nächste Trainingseinheit vorzubereiten.\r\n\r\nFür Ihren Verein ist dies mehr als nur eine Annehmlichkeit. Es ist eine sichtbare Aufwertung Ihrer Trainingsumgebung – eine Möglichkeit, Spieler besser zu unterstützen, Ihr Leistungsangebot zu stärken und Ihrem Verein ein Gefühl der Vollständigkeit zu verleihen.",
    problemImage: "/images/campaign/tennis-block-1.jpg",
    solutionEyebrow: "Die sanza-Station",
    solutionTitle: "sanza verwandelt Ihre Umkleidekabine in einen Ort der Erholung.",
    solutionBody: "Eine sanza-Station – schlicht, hochwertig, benutzerfreundlich – bietet Ihren Mitgliedern nach dem Training oder einem Spiel eine 15–20-minütige, strukturierte PEMF-Entspannungsmöglichkeit. Ganzkörpermatte zur allgemeinen Entspannung, bei Bedarf gezielte Applikatoren für Schultern oder Ellbogen. Kein Personal erforderlich. Die Mitglieder steuern das Programm selbst über ein übersichtliches Menü. Es wird zu einem Ritual nach dem Spiel.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Pad und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihre Einrichtung passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kerngeschäft das Ihre bleibt.",
    fitsImages: [
      "/images/campaign/tennis-fit-recovery-room.jpg",
      "/images/campaign/tennis-fit-lounge.jpg",
      "/images/campaign/tennis-fit-performance.jpg",
      "/images/campaign/tennis-fit-tournament.jpg"
    ],
    fitsImagePositions: [
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "64% 32%"
    ],
    fitsItems: [
      {
        title: "Erholungsstation nach dem Spiel",
        body: "Eine Matte, eine Ecke, übersichtliches Programmmenü. Mitglieder nutzen es nach einer Trainingseinheit."
      },
      {
        title: "Ergänzung zum Juniorenprogramm",
        body: "Bieten Sie Juniorenspielern Zugang zu sanza – Eltern bemerken und schätzen diese Investition."
      },
      {
        title: "Coaching-Partnerschaft",
        body: "Trainer integrieren sanza in ihre Trainingsprogramme – ein Premium-Pluspunkt für individuelles Coaching."
      },
      {
        title: "Erlebnis am Turniertag",
        body: "Bieten Sie sanza den Turnierteilnehmern als Teil des Veranstaltungserlebnisses an."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Raum kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Mitglieder",
    whatChangesPatientsItems: [
      "Ein strukturiertes Erholungsritual, das sie in jeden Clubbesuch integrieren",
      "Geringere Ermüdung nach dem Training – sie trainieren konsequenter und häufiger"
    ],
    whatChangesPatientsImage: "/images/campaign/tennis-for-members.jpg",
    whatChangesPracticeTitle: "Für Ihren Club",
    whatChangesPracticeItems: [
      "Ein greifbares Alleinstellungsmerkmal, das derzeit kein Mitbewerber in Ihrer Straße bietet",
      "Höhere Besuchsfrequenz von Mitgliedern, die einen weiteren Grund haben, hier zu sein",
      "Eine Anlage, die in das gesamte Spielererlebnis investiert, nicht nur in die Spielzeit"
    ],
    whatChangesPracticeImage: "/images/campaign/tennis-for-club.jpg",
    socialProofLabel: "Warum Partner danach fragen",
    socialProofQuote: "Kein Mitbewerber in Ihrer Straße bietet dies derzeit an.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Pfad, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihr Club funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Kontext, der Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Bieten Sie Ihrem Verein ein Regenerationsangebot, an das sich die Spieler erinnern werden.",
    finalCtaBody: "Buchen Sie eine Standortberatung und wir zeigen Ihnen, wo sanza in Ihren Verein passt – von Regenerations- und Trainingsprogrammen nach dem Spiel bis hin zu Turniertagen und Premium-Erlebnissen für Mitglieder.",
    finalCtaPrimary: "Buchen Sie eine Standortberatung"
  },
  "gimenes-arsti": {
    segmentName: "Hausärzte",
    metaTitle: "Hausärzte | sanza × Nordora Vital",
    metaDescription: "Eine hochwertige, nicht-klinische Wohlfühlkomponente für Hausarztpraxen, in denen das Vertrauen der Patienten von Besuch zu Besuch wächst.",
    heroImage: "/images/campaign/gp-hero.jpg",
    heroKicker: "Für Hausarztpraxen, in denen das Vertrauen der Patienten von Besuch zu Besuch wächst",
    heroHeadline: "Sorgen Sie dafür, dass sich jeder Termin vollständiger anfühlt.",
    heroSubhead: "Ihre medizinische Arbeit steht im Mittelpunkt des Besuchs. <strong>sanza</strong> bereichert das Erlebnis rund um diese Arbeit – mit einem strukturierten Wohlfühl-Reset vor oder nach der Konsultation, der den Patienten hilft, sich präsenter, aufnahmefähiger und besser betreut zu fühlen.\r\n\r\nEs bietet Ihrer Hausarztpraxis ein konkretes, nicht-klinisches Wohlfühlangebot, das Patienten tatsächlich spüren können, ohne Ihren medizinischen Arbeitsablauf zu verändern oder klinische Versprechen abzugeben.",
    heroCtaPrimary: "Erfahren Sie, wie sich sanza in eine Hausarztpraxis einfügt",
    heroValueProps: [
      "Vor-Ort-Demonstration",
      "Eindeutige Anleitung zur Einrichtung",
      "Keine Umgestaltung der Arbeitsabläufe"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "Ich möchte eine sanza-Demonstration vereinbaren und weitere Informationen für Hausärzte erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Strukturierte Programme zur Förderung des Wohlbefindens"
      },
      {
        value: "1",
        label: "Einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min.",
        label: "Zur Verbesserung des Patientenerlebnisses beim Arztbesuch"
      },
      {
        value: "0",
        label: "Änderungen an Ihren medizinischen Arbeitsabläufen"
      }
    ],
    problemEyebrow: "Helfen Sie Ihren Patienten, mehr aus der Versorgung herauszuholen, die Sie bereits bieten.",
    problemTitle: "Sie wissen, wie sehr der Zustand des Patienten den Termin beeinflusst.",
    problemBody: "Manche kommen gehetzt, angespannt, überreizt oder ängstlich. Sie sitzen vielleicht zurückhaltend da, haben Mühe, sich während der Untersuchung zu entspannen, oder gehen mit dem Gefühl, dass der Besuch zwar medizinisch korrekt, aber emotional unvollständig war.\r\n\r\n<strong>sanza</strong> hilft Ihrer Praxis, das Erlebnis rund um die Behandlung zu verbessern.\r\n\r\nEs bietet Patienten vor oder nach dem Arzttermin eine einfache, nicht-klinische Möglichkeit, ihr Wohlbefinden wiederherzustellen – so wirkt der Besuch strukturierter, unterstützender und vollständiger. Ihre Diagnose, Ihre Behandlungsentscheidungen und Ihre medizinischen Abläufe bleiben genau so, wie sie sind. <strong>sanza</strong> stärkt lediglich das Betreuungsumfeld rund um diese Aspekte.",
    problemImage: "/images/campaign/gp-block-1.jpg",
    solutionEyebrow: "Die Sanza-Ebene",
    solutionTitle: "Ein Wartezimmer, das mehr kann als nur warten.",
    solutionBody: "Eine Sanza-Matte in Ihrem Sprechzimmer oder in einer ruhigen Ecke Ihres Wartebereichs schafft ein ganz neues Erlebnis vor dem Termin. Patienten, die 10 Minuten in einem strukturierten PEMF-Entspannungsprogramm verbringen, kommen ruhiger, präsenter und kommunikativer zur Sprechstunde. Der Termin verläuft einfach besser.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Pad und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihre Praxis passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kerngeschäft das Ihre bleibt.",
    fitsImages: [
      "/images/campaign/gp-fit-waiting-room.jpg",
      "/images/campaign/gp-fit-preparation-room.jpg",
      "/images/campaign/gp-fit-post-visit.jpg"
    ],
    fitsItems: [
      {
        title: "Wohlbefinden im Wartezimmer",
        body: "Eine sanza-Matte, die während der Wartezeit zur Verfügung steht – freiwillig, klar erklärt, immer verfügbar."
      },
      {
        title: "Beruhigung vor der Konsultation",
        body: "Einsatz in einem kleinen Vorbereitungsraum vor sensiblen oder besonders angstbesetzten Terminen."
      },
      {
        title: "Erholung nach dem Besuch",
        body: "Für Patienten, die nach schwierigen Nachrichten oder anspruchsvollen Eingriffen gehen – ein kurzes Entspannungsprogramm, bevor sie wieder hinausgehen."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihre Praxis kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten/Kunden",
    whatChangesPatientsItems: [
      "Weniger Angst, mehr Offenheit während der Konsultation selbst",
      "Ein Praxiserlebnis, das sich hochwertig und aufrichtig fürsorglich anfühlt"
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Bessere Beratungsqualität in kürzerer Zeit",
      "Patienten, die Sie speziell aufgrund ihres Besuchsempfindens weiterempfehlen"
    ],
    socialProofLabel: "Warum Partner sich das ansehen wollen",
    socialProofQuote: "Eine Praxis, die sich vom Betreten bis zum Verlassen hochwertig anfühlt.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Ablauf, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein allgemeines Verkaufsgespräch. Erzählen Sie uns, wie Ihre Praxis funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Kontext, der Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Eine Praxis, die sich vom Betreten bis zum Verlassen hochwertig anfühlt.",
    finalCtaBody: "Fordern Sie eine Demo an und sehen Sie, wie sanza zu Ihrem Patientenfluss passt.",
    finalCtaPrimary: "Praxis-Demo anfordern"
  },
  zobarstnieciba: {
    segmentName: "Zahnärzte & Zahnkliniken",
    metaTitle: "Zahnärzte & Zahnkliniken | sanza × Nordora Vital",
    metaDescription: "Ein strukturiertes, nicht-klinisches Wohlfühlkonzept für Zahnkliniken, die sich ruhigere Besuche, ein angenehmeres Patientenerlebnis und ein umfassenderes Gefühl der Fürsorge wünschen.",
    heroImage: "/images/campaign/dentist-hero.jpg",
    heroTextAlign: "right",
    heroKicker: "Für Zahnarztpraxen, in denen Komfort den gesamten Besuch verändert",
    heroHeadline: "Helfen Sie Patienten, sich wohler zu fühlen, bevor sie sich auf den Stuhl setzen.",
    heroSubhead: "<strong>sanza</strong> fügt Ihrer Zahnarztpraxis eine ruhige, strukturierte Wohlfühlkomponente hinzu – sie hilft Patienten, sich vor dem Termin zu entspannen, sich während der Behandlung besser unterstützt zu fühlen und mit einem stärkeren Gefühl der Fürsorge nach Hause zu gehen. Ihre klinische Arbeit bleibt genau so, wie sie ist. Das Erlebnis drumherum wird besser.",
    heroCtaPrimary: "Buchen Sie eine Demo für Zahnkliniken",
    heroValueProps: [
      "Rundgang durch die Zahnklinik",
      "Einfache Raumaufteilung",
      "Keine Änderungen am Protokoll"
    ],
    contactCategory: "dentists",
    demoRequestMessage: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für Zahnärzte und Zahnkliniken erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Komfortorientierte Wohlfühlprogramme"
      },
      {
        value: "1",
        label: "Einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min",
        label: "Um Patienten zu helfen, sich vor der Behandlung zu entspannen"
      },
      {
        value: "0",
        label: "Änderungen an Ihrem zahnärztlichen Arbeitsablauf"
      }
    ],
    problemEyebrow: "Was Sie bereits wissen",
    problemTitle: "Zahnarztangst verändert den gesamten Termin.",
    problemBody: "Sie kennen sicher den Patienten, der schon angespannt ist, bevor überhaupt etwas passiert ist. Die Schultern hochgezogen. Der Kiefer angespannt. Die Hände krampfen sich an die Armlehnen. Er mag Ihnen zwar vertrauen, aber sein Körper hat das noch nicht ganz begriffen.\r\n\r\nDieser Zustand prägt den gesamten Besuch. Die Begrüßung, den Behandlungsstuhl, die Erklärungen, das erste Instrument, den Moment vor der Lokalanästhesie, die Zeit nach der Behandlung. Selbst wenn Ihre klinische Arbeit hervorragend ist, kann ein Patient, der sich angespannt fühlt, den Termin als schwieriger empfinden, als er sein müsste.\r\n\r\n<strong>sanza</strong> hilft Ihrer Praxis, diesen Moment anders zu gestalten.\r\n\r\nEs bietet Patienten vor oder nach der Behandlung einen einfachen, nicht-klinischen Wohlfühl-Reset – damit sich der Besuch durchdachter, angenehmer und vollständiger anfühlt. Nicht als Zahnmedizin. Sondern als eine bessere Art, den Menschen rund um die zahnärztliche Behandlung vorzubereiten und zu betreuen.",
    problemImage: "/images/campaign/dentist-block-1.jpg",
    solutionEyebrow: "Die Sanza-Schicht",
    solutionTitle: "Ein entspannteres Patientenerlebnis bei den zahnärztlichen Behandlungen, die Sie bereits durchführen.",
    solutionBody: "<strong>sanza</strong> ist ein professionelles PEMF-Wellness-System, das für Praxen entwickelt wurde, denen es wichtig ist, wie sich jeder Besuch anfühlt. Es kann vor Terminen, zwischen Behandlungsschritten oder nach längeren Sitzungen als kurzes, strukturiertes Wohlfühlritual eingesetzt werden.\r\n\r\nDas System funktioniert je nach Platzangebot und Anwendungsfall über eine Matte, ein Polster, Handelektroden oder gezielte Applikatoren. Ihre zahnärztliche Behandlung bleibt dabei unverändert. <strong>sanza</strong> fügt ihr lediglich eine ruhige Wohlfühlkomponente hinzu – so wirkt die Praxis vom Eintreffen bis zum Verlassen menschlicher, hochwertiger und unterstützender.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Kissen und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihre Zahnarztpraxis passt",
    fitsEyebrow: "Integration",
    fitsLead: "Setzen Sie sanza nur dort ein, wo es hingehört: als klar abgegrenzter, nicht-klinischer Wohlfühlmoment rund um die Zahnbehandlung.",
    fitsImages: [
      "/images/campaign/dentist-fit-01.jpg",
      "/images/campaign/dentist-fit-02.jpg",
      "/images/campaign/dentist-fit-03-full.jpg",
      "/images/campaign/gp-fit-post-visit.jpg"
    ],
    fitsImagePositions: [
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "50% 50%"
    ],
    fitsItems: [
      {
        title: "Beruhigung vor der Behandlung",
        body: "Führen Sie vor längeren Terminen, Erstbesuchen, ästhetischen Eingriffen oder bei Patienten, die sichtlich angespannt ankommen, ein kurzes 10–15-minütiges Wohlfühlprogramm durch."
      },
      {
        title: "Vor stark angstbesetzten Eingriffen",
        body: "Der Patient hat einen Moment Zeit, sich zu beruhigen, bevor er auf den Behandlungsstuhl Platz nimmt – und Ihr Team startet aus einer besseren zwischenmenschlichen Ausgangslage."
      },
      {
        title: "Vor Eingriffen mit hohem Angstpotenzial",
        body: "Bieten Sie sanza als optionalen Komfortschritt vor Behandlungen an, die Patienten oft mit Stress erwarten: Injektionen, Bohren, Extraktionen, Implantate, Wurzelbehandlungen oder komplexe restaurative Arbeiten."
      },
      {
        title: "Für Mitarbeitende gebaut, nicht für Spezialisten",
        body: "Keine klinischen Angaben. Kein Ersatz für Anästhesie, Sedierung oder medizinische Protokolle. Nur eine strukturierte Methode, um das Patientenerlebnis vor Beginn der Behandlung zu unterstützen."
      }
    ],
    whatChangesTitle: "Nach längeren Terminen verlassen Patienten die Praxis oft noch in einem angespannten Zustand – mit müdem Kiefer, einem überreizten Nervensystem und Gedanken, die das Geschehene verarbeiten.",
    whatChangesEyebrow: "Entspannung nach der Behandlung",
    whatChangesPatientsTitle: "Für Ihre Patienten",
    whatChangesPatientsItems: [
      "Ein kurzer Reset nach dem Besuch hilft, den Termin sanfter ausklingen zu lassen und sorgt dafür, dass sich das gesamte Erlebnis vollständiger anfühlt.",
      "Entwickelt für Mitarbeiter, nicht für Spezialisten",
      "Das System ist einfach: nummerierte Programme, ein Controller, klare Anwendungsfälle. Ihr Empfangsteam, Ihre Assistenz oder Ihr Praxismanager können die Einrichtung schnell erlernen.",
      "Ein stärkeres Gefühl, dass der ganze Mensch gesehen wird, nicht nur die Zähne"
    ],
    whatChangesPracticeTitle: "Kein neues klinisches Protokoll. Keine Neugestaltung der Behandlung. Kein Druck auf den Zahnarzt.",
    whatChangesPracticeItems: [
      "Ergebnisse",
      "Was sich ändert, wenn sanza in Ihre Praxis kommt",
      "Für Ihre Patienten",
      "Ein durchdachteres Erlebnis vor, während und nach der zahnärztlichen Behandlung"
    ],
    whatChangesPracticeImage: "/images/campaign/dentist-outcomes-practice.jpg",
    whatChangesPracticeImagePosition: "50% 66%",
    socialProofLabel: "Eine Komfortoption, die sie ohne Medikamente oder klinische Komplexität spüren können",
    socialProofQuote: "Ein Praxisbesuch, der ruhiger, hochwertiger und menschlicher wirkt",
    socialProofAttribution: "Ein stärkeres Gefühl, dass der ganze Mensch betreut wird, nicht nur die Zähne",
    demoStepsEyebrow: "Für Ihre Praxis",
    demoStepsTitle: "Ein klares Alleinstellungsmerkmal in einem umkämpften Dentalmarkt",
    demoStepsLead: "Eine Aufwertung des Patientenerlebnisses auf Premium-Niveau, ohne Behandlungsprotokolle zu ändern",
    demoSteps: [
      {
        title: "Unvergesslichere Besuche, insbesondere für ängstliche oder ästhetisch orientierte Patienten",
        body: "Ein stärkerer Grund für Patienten, die Praxis über die technische Qualität hinaus weiterzuempfehlen"
      },
      {
        title: "Warum Partner darum bitten, es zu sehen",
        body: "Patienten wählen Sie vielleicht wegen Ihrer zahnmedizinischen Kompetenz. Sie empfehlen Sie weiter, wenn sich der gesamte Besuch wie eine Rundum-Betreuung anfühlt."
      },
      {
        title: "Nordora Vital · Professionelles Partnerprogramm",
        body: "Was passiert, nachdem Sie uns kontaktiert haben"
      }
    ],
    finalCtaTitle: "Ein einfacher Demo-Pfad, der auf Ihre Umgebung zugeschnitten ist.",
    finalCtaBody: "Kein Druck, kein Standard-Verkaufsgespräch. Erzählen Sie uns, wie Ihre Praxis funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    finalCtaPrimary: "Kurzes Kennenlerngespräch"
  },
  poliklinika: {
    segmentName: "Polikliniken & Facharztzentren",
    metaTitle: "Polikliniken & Facharztzentren | sanza × Nordora Vital",
    metaDescription: "Eine einheitliche, hochwertige Wohlfühlumgebung für Facharztzentren, in denen das Patientenerlebnis ein geschäftlicher Vorteil ist.",
    heroImage: "/images/campaign/poliklinika-hero.jpg",
    heroKicker: "Für Klinikbetreiber, die wissen, dass das Patientenerlebnis ein geschäftlicher Vorteil ist",
    heroHeadline: "Sorgen Sie dafür, dass sich Ihre Klinik genauso umfassend anfühlt wie die von Ihnen angebotene Versorgung.",
    heroSubhead: "Ihre Poliklinik vereint bereits zahlreiche Fachärzte, Diagnosemöglichkeiten und Behandlungsmethoden unter einem Dach. <strong>sanza</strong> hilft Ihnen dabei, das zu stärken, was all dies verbindet: das Patientenerlebnis.\r\n\r\nEs ergänzt Termine um eine einheitliche, nicht-klinische Ebene des Wohlbefindens – und bietet Patienten so eine strukturierte Möglichkeit, sich vor oder nach Besuchen in verschiedenen Abteilungen zu erholen. Für Ihre Klinik bedeutet dies eine sichtbare Qualitätssteigerung: durchdachter, einprägsamer und leichter von anderen medizinischen Zentren zu unterscheiden.",
    heroCtaPrimary: "Erfahren Sie, wie Polikliniken sanza nutzen",
    heroValueProps: [
      "Vorführung vor Ort",
      "Klare Einrichtungsanleitung",
      "Keine Umgestaltung der Abläufe"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "Ich möchte eine sanza-Vorführung vereinbaren und weitere Informationen für Polikliniken und Facharztzentren erhalten.",
    quickStats: [
      {
        value: "15",
        label: "strukturierte Programme für das Patientenerlebnis"
      },
      {
        value: "1",
        label: "System, das Ihr Team bedienen kann"
      },
      {
        value: "10 min",
        label: "vor oder nach Terminen"
      },
      {
        value: "0",
        label: "Störung des klinischen Betriebs"
      }
    ],
    problemEyebrow: "Geben Sie jeder Abteilung ein stärkeres Patientenerlebnis.",
    problemTitle: "Ihre Klinik arbeitet bereits mit hoher Komplexität.",
    problemBody: "Beratungen, Diagnostik, Behandlungen, Nachsorge, verschiedene Fachärzte, unterschiedliche Patientenbedürfnisse. Genau deshalb ist das Erlebnis rund um den Termin so wichtig.\r\n\r\nPatienten kommen zwar wegen der medizinischen Kompetenz, aber sie nehmen auch wahr, wie sich der Besuch anfühlt: ob die Umgebung gut organisiert ist, ob sie sich gut betreut fühlen, ob die Klinik modern und durchdacht wirkt und ob sie gerne wiederkommen würden.\r\n\r\n<strong>sanza</strong> hilft Ihnen dabei, eine einheitliche Ebene des Wohlbefindens in den gesamten Patientenverlauf zu integrieren – vor oder nach Terminen, in ausgewählten Abteilungen oder als Teil von Premium-Versorgungspfaden. Es verleiht Ihrer Klinik eine spürbare Qualitätssteigerung, während Ihre medizinischen Arbeitsabläufe genau so bleiben, wie sie sind.",
    problemImage: "/images/campaign/poliklinika-block-1.jpg",
    solutionEyebrow: "Die sanza-Ebene",
    solutionTitle: "Ein System, mehrere Abteilungen, gleichbleibend hohe Qualität.",
    solutionBody: "sanza lässt sich auf Einrichtungsebene integrieren – eine Matte im Hauptwartebereich, spezielle Einheiten in Abteilungen mit hohem Angstpotenzial und optionale Behandlungsräume für besondere Wohlfühlprogramme. Das System ist standardisiert und für das Personal einfach zu handhaben. Die Patienten erleben in allen Abteilungen dieselbe beruhigende Wirkung. Ihre Klinik wird für etwas Bestimmtes bekannt: als der Ort, an dem man sich wirklich darum kümmert, wie Sie sich fühlen.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Auflage und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihre Einrichtung passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kerngeschäft das Ihre bleibt.",
    fitsImages: [
      "/images/campaign/poliklinika-fit-waiting.jpg",
      "/images/campaign/poliklinika-fit-department.jpg",
      "/images/campaign/poliklinika-fit-staff.jpg",
      "/images/campaign/poliklinika-fit-programme.jpg"
    ],
    fitsItems: [
      {
        title: "Zentraler Wartebereich",
        body: "Eine sanza-Station, die Patienten vor jedem Termin nutzen können – signalisiert sofort erstklassige Betreuung."
      },
      {
        title: "Integration auf Abteilungsebene",
        body: "Priorisieren Sie Abteilungen, in denen die Angst der Patienten am größten ist – der Nutzen reibungsloserer Konsultationen wird sofort spürbar."
      },
      {
        title: "Wohlbefinden des Personals",
        body: "Ein sanza-Behandlungsraum, der dem klinischen Personal zur Verfügung steht – unterstützt die Belastbarkeit in anspruchsvollen Umgebungen."
      },
      {
        title: "Markenprogramm",
        body: "Bieten Sie ein Wohlfühlprotokoll unter Ihrer Klinikmarke an – einen von sanza unterstützten, besonders wiedererkennbaren Service."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihre Einrichtung kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten/Kunden",
    whatChangesPatientsItems: [
      "Ein Besuchs-Erlebnis, das sie konkret beschreiben – und konkret weiterempfehlen",
      "Geringere Angst vor stressigen Terminen"
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Patientenbewertungen, die das Erlebnis erwähnen, nicht nur das klinische Ergebnis",
      "Ein Ruf Ihrer Einrichtung, der ohne Marketingausgaben neue Patienten anzieht"
    ],
    socialProofLabel: "Warum Partner danach fragen",
    socialProofQuote: "Der Ort, der sich wirklich darum kümmert, wie Sie sich fühlen – das ist die Positionierung, die <strong>sanza</strong> schafft.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Vorführungsablauf, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein generisches Verkaufsgespräch. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Kennenlerngespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Vorführung",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Umfeld, das Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Einführungsprozess und die Preise. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Vereinbaren Sie eine Beratung auf Einrichtungsebene.",
    finalCtaBody: "Wir passen sanza an Ihren Raumaufbau und Patientenfluss an – ganz unverbindlich.",
    finalCtaPrimary: "Vereinbaren Sie eine Beratung auf Einrichtungsebene"
  },
  "spa-wellness": {
    segmentName: "Day Spas & Wellnesszentren",
    metaTitle: "Day Spas & Wellnesszentren | sanza × Nordora Vital",
    metaDescription: "Ein erstklassiges, technologieorientiertes Wellnesserlebnis für Day Spas und Wellnesszentren, die ein unvergessliches Alleinstellungsmerkmal suchen.",
    heroImage: "/images/campaign/day-spa-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Spas, in denen das Gästeerlebnis das Produkt ist",
    heroHeadline: "Bieten Sie Ihren Gästen ein Wellnesserlebnis, das sie nicht überall finden.",
    heroSubhead: "Ihr Spa bietet bereits Atmosphäre, Pflege und Entspannung. <strong>sanza</strong> hilft Ihnen dabei, etwas hinzuzufügen, das Ihre Gäste sofort als etwas Besonderes wahrnehmen: ein ruhiges, technologiegestütztes Wellness-Erlebnis, das ihnen hilft, sich zu erholen, abzuschalten und sich rundum umsorgt zu fühlen.\r\n\r\nEs wird zu einem exklusiven Behandlungserlebnis, ohne dass ständige Anwesenheit von Therapeuten, komplexe Abläufe oder betrieblicher Druck erforderlich sind. Eine einfache Ergänzung, die Ihr Spa unverwechselbarer, vollständiger und lohnenswerter macht – ein Ort, an den man gerne zurückkehrt.",
    heroCtaPrimary: "Entdecken Sie sanza für Ihr Spa",
    heroValueProps: [
      "Vor-Ort-Vorführung",
      "Eindeutige Einrichtungsanleitung",
      "Keine Umgestaltung der Arbeitsabläufe"
    ],
    contactCategory: "beauty-cosmetic",
    demoRequestMessage: "Ich möchte eine sanza-Vorführung vereinbaren und weitere Informationen für Day Spas & Wellnesszentren erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Premium-Wellnessprogramme"
      },
      {
        value: "1",
        label: "Einfaches System, das Ihr Team bedienen kann"
      },
      {
        value: "10 Min",
        label: "Für eine tiefgreifende Erholung"
      },
      {
        value: "0",
        label: "Belastung der Therapeutenkapazitäten"
      }
    ],
    problemEyebrow: "Geben Sie treuen Gästen einen neuen Grund, begeistert zu sein.",
    problemTitle: "Ihre besten Gäste vertrauen Ihrem Spa bereits.",
    problemBody: "Sie kennen Ihre Behandlungen, Ihre Therapeuten, Ihre Atmosphäre und Ihren Betreuungsstandard. Deshalb kommen sie wieder.\r\n\r\nDoch mit der Treue steigen auch die Erwartungen.\r\n\r\nIrgendwann reicht eine weitere Massage, Gesichtsbehandlung oder ein saisonales Ritual nicht mehr aus, um ein Gefühl der Neuheit zu vermitteln. Ihre Gäste wünschen sich dieselbe Exzellenz, die sie so schätzen – ergänzt um eine neue Dimension der Entdeckung, Tiefe und wahrgenommenen Wertigkeit.\r\n\r\n<strong>sanza</strong> hilft Ihnen dabei, diese nächste Ebene hinzuzufügen, ohne Ihr Team zu vergrößern, Ihre Räume umzugestalten oder Ihre Therapeuten zusätzlich zu belasten. Es bietet Gästen ein erstklassiges, technologiegetriebenes Wellness-Erlebnis, das sie sofort spüren können: ruhig, tiefgehend, unvergesslich und anders als das übliche Spa-Angebot.\r\n\r\nKein Ersatz für das, was bereits funktioniert.\r\nEin stärkerer Grund für treue Gäste zu sagen: „Das musst du unbedingt ausprobieren.“",
    problemImage: "/images/campaign/day-spa-block-1.jpg",
    solutionEyebrow: "Die Sanza-Ebene",
    solutionTitle: "Sanza: das Erlebnis, das sie noch nirgendwo erlebt haben.",
    solutionBody: "Eine Sanza-Sitzung nutzt strukturierte PEMF-Frequenzprogramme, um ein Ganzkörpererlebnis tiefer, stiller Entspannung zu schaffen, das Gäste nicht leicht beschreiben können, aber sofort wiederholen möchten. Es ist keine Wärme. Es ist kein Druck. Es ist etwas, das darunter liegt – eine Resonanz, die sich anfühlt, als würde sich der Körper endlich wieder daran erinnern, wie man zur Ruhe kommt. Positionieren Sie es als Ihr Premium-Angebot. Geben Sie ihr einen eigenen Namen. Lassen Sie die Ergebnisse für sich sprechen.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Frequenzprogramme, abgestimmt auf den Körperrhythmus."
      },
      {
        title: "Modular",
        body: "Matte, Polster und gezielte Applikatoren für verschiedene Räume."
      }
    ],
    fitsTitle: "Wo sanza in Ihr Spa passt",
    fitsEyebrow: "Integration",
    fitsLead: "Ein paar einfache Berührungspunkte rund um Ihre bestehende Arbeit. Das Erlebnis verändert sich, während Ihr Kernangebot das Ihre bleibt.",
    fitsImages: [
      "/images/campaign/day-spa-fit-signature.jpg",
      "/images/campaign/day-spa-fit-treatment-enhancer.jpg",
      "/images/campaign/day-spa-fit-membership.jpg",
      "/images/campaign/day-spa-fit-retail.jpg"
    ],
    fitsItems: [
      {
        title: "Signature-60-Minuten-Sitzung",
        body: "Hohe Margen, geringe Betriebskosten, Warteliste innerhalb weniger Wochen nach Einführung."
      },
      {
        title: "Behandlungsverstärker",
        body: "15-minütige Sanza-Vorbehandlung vor Massage oder Gesichtsbehandlung – ein Upsell, den Gäste nach dem ersten Mal namentlich anfragen."
      },
      {
        title: "Mitgliedschaftsfunktion",
        body: "Beziehen Sie den Zugang zu Sanza in Ihre Premium-Mitgliedschaft ein – ein Anker für Kundenbindung und Umsatz pro Mitglied."
      },
      {
        title: "Crossover im Einzelhandel",
        body: "Gäste, die die Technologie lieben, fragen nach Geräten für zu Hause – ein natürliches Gespräch, das Nordora Vital unterstützt."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Spa-Bereich kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Gäste",
    whatChangesPatientsItems: [
      "Ein Erlebnis, das sie noch nie hatten und für das sie wiederkommen werden",
      "Gäste buchen nach, bevor sie das Gebäude verlassen – und das regelmäßig"
    ],
    whatChangesPracticeTitle: "Für Ihren Spa",
    whatChangesPracticeItems: [
      "Ein Signature-Angebot, das eine Nachfrage schafft, die kein Marketingbudget nachbilden kann",
      "Premium-Preise, gestützt durch ein echtes Premium-Erlebnis",
      "Umsatz aus dem Einzelhandel durch Gäste, die das Erlebnis zu Hause fortsetzen möchten"
    ],
    whatChangesPracticeImage: "/images/campaign/day-spa-hero.jpg",
    socialProofLabel: "Warum Partner danach fragen",
    socialProofQuote: "Gäste, die es einmal ausprobieren, buchen erneut, bevor sie das Gebäude verlassen.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Ablauf, der auf Ihre Umgebung zugeschnitten ist.",
    demoStepsLead: "Kein Druck, kein allgemeiner Verkaufsvortrag. Erzählen Sie uns, wie Ihr Raum funktioniert, und wir zeigen Ihnen, wo Sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Beratungsgespräch",
        body: "Wir klären Ihre Umgebung, den Raumablauf, Ihre Zielgruppe und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Demo",
        body: "Sie erleben die Programme, Applikatoren und die Einrichtung in einem Kontext, der Ihrer täglichen Arbeit nahekommt."
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, skizzieren wir die empfohlene Einrichtung, den Onboarding-Prozess und die Preisgestaltung. Wenn nicht, gehen Sie dennoch gut informiert."
      }
    ],
    finalCtaTitle: "Sprechen Sie mit uns über die Einführung von sanza in Ihrem Spa.",
    finalCtaBody: "Eine auf Ihre Einrichtung zugeschnittene Präsentation – kostenlos.",
    finalCtaPrimary: "Sprechen Sie mit uns über die Einführung von sanza"
  }
};


export const CAMPAIGN_PAGE_CONTENT_LV: Partial<Record<CampaignSlug, CampaignPageContent>> = {
  "sporta-medicina": {
    segmentName: "Sporta medicīnas un atveseļošanās centri",
    metaTitle: "Sporta medicīnas un atveseļošanās centri | sanza × Nordora Vital",
    metaDescription: "Strukturēta PEMF labklājības tehnoloģija sporta medicīnas un atveseļošanās centriem, kas vēlas sportistiem nodrošināt pilnvērtīgāku atveseļošanās pieredzi.",
    heroImage: "/images/campaign/sports-medicine-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Praktizētājiem, kas koncentrējas uz sniegumu un nopietni uztver sportista pieredzi",
    heroHeadline: "Piedāvājiet sportistiem vairāk nekā tikai ārstēšanu. Piedāvājiet viņiem atveseļošanās pieredzi.",
    heroSubhead: "<strong>sanza</strong> ievieš strukturētu PEMF labklājības tehnoloģiju sporta medicīnas vidē — palīdzot sportistiem ātrāk atgūties, justies stabilāk starp treniņiem un saistīt jūsu iestādi ar rezultātiem, ko viņi var sajust.",
    heroCtaPrimary: "Rezervējiet sporta atveseļošanās demonstrāciju",
    heroValueProps: [
      "Iestādes apskats",
      "Atveseļošanās zonas iekārtošana",
      "Viegli personālam"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Es vēlētos noorganizēt sanza demonstrāciju un saņemt vairāk informācijas par sporta medicīnas un atveseļošanās centriem.",
    quickStats: [
      {
        value: "15",
        label: "veidi, kā atbalstīt sportistu atveseļošanos"
      },
      {
        value: "1",
        label: "vienkārša sistēma visai jūsu komandai"
      },
      {
        value: "10 min",
        label: "lai mainītu stāvokli, kādā viņi ierodas"
      },
      {
        value: "0",
        label: "traucējumi jūsu ārstēšanas procesā"
      }
    ],
    problemEyebrow: "Atšķirība starp ārstēšanu un patiesu atveseļošanos",
    problemTitle: "Sportisti bieži ierodas uzbudināti, pirms darbs sākas.",
    problemBody: "Jums jau ir klīniskā pieredze. Šokviļņi, manuālā terapija, ultraskaņa, diagnostika — tehniskā puse ir nodrošināta. Taču sportisti bieži vien ierodas pārāk uzbudināti: paaugstināts kortizola līmenis, nervu sistēma pārkarusi no treniņiem vai sacensībām. Ārstēšanas videi ir nozīme. Un pašlaik lielākā daļa sporta medicīnas iestāžu izskatās tāpat kā ģimenes ārsta kabinets.",
    problemImage: "/images/campaign/sports-medicine-block-1.jpg",
    solutionEyebrow: "Sanza slānis",
    solutionTitle: "Piedāvājiet sportistiem kaut ko, ko sajust — ne tikai pašu ārstēšanu.",
    solutionBody: "<strong>sanza</strong> izmanto PEMF tehnoloģiju ar strukturētām frekvenču programmām, lai nodrošinātu nomierinošu signālu visam ķermenim. Tas ir augstākās klases labsajūtas elements, kas palīdz sportistiem nomierināties, atslābināties un justies klātesošākiem. Sporta medicīnas kontekstā tas nozīmē, ka sportisti par šo iekārtu runā, jo tā sniedz atšķirīgas sajūtas.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvenču programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu seansu plūsmā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsItems: [
      {
        title: "Pirms ārstēšanas",
        body: "Pirms prasīga manuāla darba vai diagnostikas palaidiet nomierinošu programmu — sportists ierodas „ieslēgts”, bet pēc programmas aiziet mierīgāks un sadarbīgāks."
      },
      {
        title: "Dekompresija pēc ārstēšanas",
        body: "Strukturēta noslēguma programma palīdz ķermenim pāriet no klīniskas iejaukšanās — uztveramā aprūpe ievērojami uzlabojas."
      },
      {
        title: "Starp sesijām",
        body: "Izmantojiet sanza paklāju kā augstākās klases gaidīšanas/atpūtas vietu — pārvērš pasīvo gaidīšanas laiku aktīvā atveseļošanās pieredzē."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem / klientiem",
    whatChangesPatientsItems: [
      "Atgūšanās vide, kas liekas apzināta, nevis klīniska",
      "Kaut kas, ko viņi var sajust un aprakstīt komandas biedriem → mutvārdu reklāma",
      "Konsistence: katram apmeklējumam ir strukturēta, augstākās kvalitātes pieredze"
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Atšķirības elements, kas jūs izceļ no parastajām sporta klīnikām",
      "Spēcīgāka klientu piesaistīšana: sportisti atgriežas tāpēc, kā viņi šeit jūtas",
      "Viegli apkalpot — programmas darbojas ar vienkāršu kontrolieri, nav nepieciešama papildu apmācība"
    ],
    whatChangesPracticeImage: "/images/campaign/sports-medicine-for-practice.jpg",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "To izmanto uz sniegumu orientētas prakses visā Eiropā. Mēs parādīsim jums, kā tieši <strong>sanza</strong> integrējas jūsu atveseļošanās procesā — netraucējot nevienu vizīti.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad jūs ar mums sazināties",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms jūs pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrosim jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties saņemt atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināsiet programmas, aplikatorus un uzstādīšanu vidē, kas ir tuvu jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja risinājums ir piemērots, mēs izklāstīsim ieteicamo konfigurāciju, ieviešanas procesu un cenas. Ja nē, jūs joprojām saņemsiet visu nepieciešamo informāciju."
      }
    ],
    finalCtaTitle: "To izmanto uz rezultātiem orientētas prakses visā Eiropā.",
    finalCtaBody: "Mēs parādīsim, kā tieši „sanza“ integrējas jūsu atveseļošanās procesā — netraucējot nevienu iepriekš ieplānoto vizīti.",
    finalCtaPrimary: "Piesakieties uz iepazīšanās vizīti"
  },
  hiropraktika: {
    segmentName: "Kiropraktikas un manuālās terapijas prakses",
    metaTitle: "Kiropraktikas un manuālās terapijas prakses | sanza × Nordora Vital",
    metaDescription: "Augstākās kvalitātes labsajūtas risinājums kiropraktikas un manuālās terapijas praksēm, kur telpa palīdz pacientiem nomierināties pirms praktiskā darba sākuma.",
    heroImage: "/images/campaign/chiro-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Praksēm, kur audu reakcija sākas, pirms jūs pieskaraties pacientam",
    heroHeadline: "Piedāvājiet saviem pacientiem vairāk nekā tikai korekciju.",
    heroSubhead: "<strong>sanza</strong> palīdz jums pārvērst visu kiropraktikas apmeklējumu par mierīgāku un pilnīgāku pieredzi — pirms, laikā un pēc praktiskā darba. Pacienti jūtas brīvāk, aprūpētāki un vairāk saistīti ar jūsu praksi. Jūsu ārstēšanas process paliek tieši tāds, kāds tas ir.",
    heroCtaPrimary: "Redziet, kā tas darbojas kiropraktikas telpā",
    heroValueProps: [
      "Demo uz vietas",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešams pārveidot darba plūsmu"
    ],
    contactCategory: "therapists",
    demoRequestMessage: "Es vēlos noorganizēt sanza demo un saņemt vairāk informācijas par kiropraktikas un manuālās terapijas praksēm.",
    quickStats: [
      {
        value: "15",
        label: "programmas mierīgākām vizītēm"
      },
      {
        value: "1",
        label: "vienkārša sistēma visai komandai"
      },
      {
        value: "10 min",
        label: "lai mainītu telpas atmosfēru"
      },
      {
        value: "0",
        label: "izmaiņas jūsu praktiskajā darbā"
      }
    ],
    problemEyebrow: "Pārstājiet zaudēt ārstēšanas laiku spriedzes dēļ, ko neesat radījuši jūs.",
    problemTitle: "Jūsu rokas zina, ko darīt.",
    problemBody: "\"Taču, ja pacients ierodas piesardzīgs, saspringts, izklaidīgs vai nervozs, jūs nestrādājat tikai ar mugurkaulu — jūs cīnāties pret to stāvokli, kādā viņš ienācis telpā.\r\n\r\n<strong>sanza</strong> palīdz jums mainīt šo kontekstu.\r\n\r\nTas piešķir jūsu kiropraktikas kabinetam mierīgu, strukturētu atmosfēru ap darbu, ko jūs jau darāt, tāpēc pacienti ātrāk nomierinās, jūtas drošāk uz galda un uztver vizīti kā pilnīgāku. Mazāk pretestības. Lielāka uzticēšanās. Labāks sākums korekcijai — un labākas sajūtas, kad pacienti dodas prom.\"",
    problemImage: "/images/campaign/chiro-block-1.jpg",
    solutionEyebrow: "Sanza slānis",
    solutionTitle: "Sanza nomierina nervu sistēmu, pirms jūs sākat.",
    solutionBody: "10–15 minūšu PEMF ievadprogramma uz sanza matrača rada izmaiņas pacienta pašsajūtā — viņš jūtas mierīgāks, stabilāks un mazāk saspringts. Hronobioloģiskais frekvences signāls ir maigs, neinvazīvs un saderīgs ar kiropraktisko darbu. Jūsu korekcija seko ķermenim, kas jau ir sācis atslābināties. Jūsu darba kvalitāte paliek nemainīga — mainās tikai tas, ar ko jūs strādājat.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu seansu plūsmā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/chiro-fit-arrival.jpg",
      "/images/campaign/chiro-fit-applicators.jpg",
      "/images/campaign/chiro-fit-decompression.jpg"
    ],
    fitsItems: [
      {
        title: "Ierašanās matrača programma",
        body: "Pacients guļ uz sanza matrača, kamēr jūs pārskatāt viņa piezīmes. Kad jūs esat gatavs, arī viņš ir gatavs."
      },
      {
        title: "Mērķtiecīgi aplikatori",
        body: "Papildu pildspalvas vai spilventiņa aplikators kakla/plecu zonai pirms darba ar kakla skriemeļiem — īss, lokāls komforta brīdis."
      },
      {
        title: "Dekompresija pēc korekcijas",
        body: "5 minūšu noslēguma programma rada mierīgu, stabilu pāreju atpakaļ uz pacienta ikdienu."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpai",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem/klientiem",
    whatChangesPatientsItems: [
      "Mazāk sasprindzinājuma, ātrāka atbrīvošanās, pilnīgāka relaksācija korekciju laikā",
      "Praksē, kas izskatās pārdomāta un augstvērtīga — ne tikai funkcionāla"
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Mazāk grūtu brīžu uz galda",
      "Skaidrs atšķirības faktors: jūsu praksei ir kaut kas, kas citiem nav",
      "Pacienti to apraksta — un iesaka citiem to izmēģināt"
    ],
    whatChangesPracticeImage: "/images/campaign/chiro-for-practice.jpg",
    whatChangesPracticeImagePosition: "50% 32%",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Lielākā daļa kiropraktiķu vēlas to izmēģināt vienu reizi un tad izlemt. Tieši to mēs piedāvājam.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpa, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpas plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu apstākļos, kas ir tuvi jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas der, mēs izklāstām ieteicamo uzstādīšanu, ievadkursu un cenas. Ja nē, jūs joprojām saņemat informāciju."
      }
    ],
    finalCtaTitle: "Lielākā daļa kiropraktiķu vēlas to izmēģināt vienu reizi un tad pieņemt lēmumu.",
    finalCtaBody: "Tieši to mēs piedāvājam — demonstrāciju bez spiediena jūsu praksē.",
    finalCtaPrimary: "Rezervējiet demonstrāciju bez spiediena"
  },
  "joga-meditacija": {
    segmentName: "Jogas un meditācijas studijas",
    metaTitle: "Jogas un meditācijas studijas | sanza × Nordora Vital",
    metaDescription: "PEMF labklājības tehnoloģija, kas palīdz sakņoties, jogas un meditācijas studijām, kurās galvenais produkts ir klātbūtne.",
    heroImage: "/images/campaign/yoga-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Studijām, kurās galvenais produkts ir klātbūtne",
    heroHeadline: "Piedāvājiet saviem studentiem vairāk nekā vienkārši nodarbību. Piedāvājiet viņiem stāvokli, uz kuru viņi vēlas atgriezties.",
    heroSubhead: "<strong>sanza</strong> piešķir jūsu studijas pieredzei klusu, zemes enerģiju — palīdzot studentiem ienākt, atslābināties, praktizēt un aiziet ar dziļāku mieru. Tas atbalsta atmosfēru, kuru jūs jau tik cītīgi cenšaties radīt, nemainot jūsu mācīšanas veidu.",
    heroCtaPrimary: "Izmēģiniet sanza savā studijā",
    heroValueProps: [
      "Studijas pieredzes sesija",
      "Klusa tehnoloģija",
      "Premium rituāli"
    ],
    contactCategory: "therapists",
    demoRequestMessage: "Es vēlētos noorganizēt sanza demonstrāciju un saņemt vairāk informācijas par jogas un meditācijas studijām.",
    quickStats: [
      {
        value: "15",
        label: "veidi, kā padziļināt nodarbības pieredzi"
      },
      {
        value: "1",
        label: "vienkārša sistēma jūsu studijai"
      },
      {
        value: "10 min",
        label: "lai palīdzētu studentiem iekļauties"
      },
      {
        value: "0",
        label: "izmaiņas jūsu mācīšanas plūsmā"
      }
    ],
    problemEyebrow: "Jūsu studenti ierodas nodarbībā, līdzi nesot savu dienu.",
    problemTitle: "Viņi varbūt guļ uz paklāja, bet daļa no viņiem joprojām atrodas mašīnā, e-pasta iesūtnē, sanāksmē, troksnī, no kuras viņi tikko ir atnākuši.",
    problemBody: "Kā studijas īpašnieks jūs zināt, cik liela nodarbības pirmā daļa bieži paiet, palīdzot cilvēkiem ierasties — mīkstināt elpu, nomierināt nervu sistēmu, atgriezt uzmanību ķermenī.\n\n<strong>sanza</strong> atbalsta šo pāreju.\n\nTas pievieno jūsu studijai klusu, strukturētu zemējuma slāni, palīdzot audzēkņiem ātrāk nosēsties, būt klātesošākiem praksē un aiziet ar tādu mieru, pie kura viņi grib atgriezties.\n\nNevis lai aizstātu jūsu mācīšanu.\nBet lai telpa to atbalstītu.",
    problemImage: "/images/campaign/yoga-block-1.jpg",
    solutionEyebrow: "„Sanza“ slānis",
    solutionTitle: "„Sanza“ ir zemējuma tehnoloģija telpām, kurās tiek novērtēta klātbūtne.",
    solutionBody: "PEMF signāli darbojas zem apziņas sliekšņa — tas ir strukturēts, visam ķermenim paredzēts elektromagnētisks impulss, kas veicina pāreju no simpatiskā uz parasimpatisko stāvokli. Uztveriet to kā telpas skaņošanas dakšu. Studentiem nav nepieciešams to saprast. Viņi vienkārši jūtas citādi — mierīgāki, vairāk klāt, gatavāki doties iekšējā ceļojumā. Jūsu mācības nonāk ķermenī, kas jau ir sācis mīkstināties.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu studijā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap darbu, ko jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/yoga-fit-pre-class.jpg",
      "/images/campaign/yoga-fit-savasana.jpg",
      "/images/campaign/yoga-fit-private.jpg",
      "/images/campaign/yoga-fit-workshop.jpg"
    ],
    fitsItems: [
      {
        title: "Pirms nodarbības",
        body: "Paklāju programmas, kas darbojas 10–15 minūtes pirms studenti sāk nodarbību. Viņi guļ, telpa palīdz atslābināties."
      },
      {
        title: "Savasanas uzlabošana",
        body: "Palaidiet dekompresijas programmu pēdējās atpūtas laikā — tas padara savasanu garāku, dziļāku, pilnīgāku."
      },
      {
        title: "Privātās nodarbības",
        body: "Izmantojiet ar individuāliem klientiem kā daļu no premium 1:1 pieredzes, īpaši traumu apzināta vai atjaunojoša darba gadījumā."
      },
      {
        title: "Darbnīcas un atpūtas nometnes",
        body: "Strukturēts atklāšanas/noslēguma rituāls, kas kļūst par jūsu pasākumu raksturīgu elementu."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpai",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu studentiem",
    whatChangesPatientsItems: [
      "Viņi ierodas stresā un aiziet patiesi nomierināti — ne tikai izstaipīti",
      "Savasana izjūta ir citāda. Dziļāka. Viņi to pamanīs.",
      "Jūsu studija tiek saistīta ar īpašu pieredzes kvalitāti"
    ],
    whatChangesPracticeTitle: "Jūsu studijai",
    whatChangesPracticeItems: [
      "Premium piedāvājums, kas atbalsta jūsu cenu politiku",
      "Studenti paliek lojāli, jo pieredze ir neaizstājama",
      "Skolotājiem ir vieglāk strādāt telpā jau no pirmā elpas vilciena"
    ],
    whatChangesPracticeImage: "/images/campaign/yoga-for-studio.jpg",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Es to gribu savā studijā. — Katrs studijas īpašnieks, kurš pirmo reizi izmēģina <strong>sanza</strong>.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpa, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpas plūsmu, auditoriju un jautājumus, uz kuriem vēlaties atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu kontekstā, kas ir tuvs jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas der, mēs izklāstām ieteicamo uzstādīšanu, ievadkursu un cenas. Ja nē, jūs joprojām aizietat informēts."
      }
    ],
    finalCtaTitle: "Viena sesija. Jūs sajutīsiet to, ko sajutīs jūsu studenti.",
    finalCtaBody: "Mēs piedāvājam personīgu pieredzes sesiju studiju īpašniekiem pirms jebkādu saistību uzņemšanās. Nāciet iekšā. Apgulstieties uz matrača. No turienes izlemiet.",
    finalCtaPrimary: "Rezervējiet savu pieredzes sesiju"
  },
  "sporta-zales": {
    segmentName: "Sporta klubi, CrossFit un fitnesa centri",
    metaTitle: "Sporta klubi, CrossFit un fitnesa centri | sanza × Nordora Vital",
    metaDescription: "Augstākās klases atpūtas un relaksācijas zona sporta klubiem, CrossFit zālēm un fitnesa centriem, kas vēlas palielināt apmeklētāju lojalitāti.",
    heroImage: "/images/campaign/gym-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Tiem centriem, kas saprot, ka lojalitāte ir galvenais mērķis",
    heroHeadline: "Padariet savu sporta klubu par vietu, kurā apmeklētāji nāk atpūsties, nevis tikai trenēties.",
    heroSubhead: "Ikviens sporta klubs var piedāvāt aprīkojumu.\r\nTaču tikai nedaudzi spēj nodrošināt atpūtas pieredzi, ko apmeklētāji atceras.\r\n\r\n<strong>sanza</strong> nodrošina jūsu klubam augstākās klases relaksācijas zonu pēc treniņa — palīdzot apmeklētājiem atslābināties, atjaunot spēkus un justies patiesi aprūpētiem. Šī sajūta kļūst par jūsu zīmola sastāvdaļu.",
    heroCtaPrimary: "Iekārtojiet savā sporta klubā atveseļošanās staciju",
    heroValueProps: [
      "Viena atveseļošanās stacija",
      "Nav nepieciešams papildu personāls",
      "Ekskluzīvs rituāls kluba biedriem"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Es vēlos noorganizēt „Sanza“ demonstrāciju un saņemt vairāk informācijas par sporta klubiem, CrossFit un fitnesa centriem.",
    quickStats: [
      {
        value: "15",
        label: "atveseļošanās programmas, ko kluba biedri var izbaudīt"
      },
      {
        value: "1",
        label: "vienkārša sistēma, ko var vadīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "lai radītu ekskluzīvu atjaunošanās brīdi"
      },
      {
        value: "0",
        label: "izmaiņas jūsu treniņu piedāvājumā"
      }
    ],
    problemEyebrow: "Paplašiniet kluba biedru pieredzi ārpus treniņa.",
    problemTitle: "Jūsu sporta klubs jau piedāvā biedriem vietu, kur trenēties, sasniegt rezultātus un pārvarēt sevi.",
    problemBody: "<strong>sanza</strong> palīdz jums paplašināt šo pieredzi, iekļaujot tajā arī to, kas notiek pēc treniņa: mierīgu, strukturētu atpūtas brīdi, kas rada ekskluzīvu, apzinātu un patiesi vērtīgu sajūtu.\r\n\r\nTas sniedz apmeklētājiem vēl vienu iemeslu palikt ilgāk, justies labāk, kad viņi dodas prom, un saistīt jūsu sporta klubu ar kaut ko vairāk nekā tikai aprīkojumu vai nodarbībām. Tas nav domāts kā aizstājējs tam, ko jūs jau darāt labi — tas ir vienkāršs veids, kā padarīt visu apmeklējumu pilnīgāku.",
    problemImage: "/images/campaign/gym-block-1.jpg",
    solutionEyebrow: "„Sanza“ zona",
    solutionTitle: "„Sanza“: atpūtas zona, ko jūsu apmeklētāji patiešām izmantos un par ko runās.",
    solutionBody: "„Sanza“ zona — paklājs, vadības pults, pārskatāms programmu izvēlnes — nodrošina apmeklētājiem 15–20 minūšu strukturētu PEMF dekompresijas pieredzi pēc treniņa. Visa ķermeņa atslābināšanās, nervu sistēmas nomierināšana — īsts signāls ķermenim par treniņa beigām. Tās darbībai nav nepieciešams personāls. Apmeklētāji to izvēlas paši no programmu izvēlnes. Tas kļūst par rituālu. Tas kļūst par vienu no iemesliem, kāpēc viņi paliek.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu telpās",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap to darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/gym-fit-recovery-zone.jpg",
      "/images/campaign/gym-fit-membership-tier.jpg",
      "/images/campaign/gym-fit-hiit.jpg",
      "/images/campaign/gym-fit-pt-closeout.jpg"
    ],
    fitsItems: [
      {
        title: "Atsevišķa atpūtas zona",
        body: "Viens paklājs, viens kontrolieris, viens stūrītis. Biedri rezervē 15 minūšu laiku pēc treniņa."
      },
      {
        title: "Premium līmeņa biedra karte",
        body: "Iekļaujiet sanza piekļuvi premium līmenī — palieliniet ieņēmumus no viena biedra bez papildu personāla izmaksām."
      },
      {
        title: "CrossFit / HIIT iestatījumi",
        body: "Pēc augstas intensitātes nodarbībām strukturēta dekompresijas programma ir tieši tas, kas nepieciešams nervu sistēmai."
      },
      {
        title: "Personīgā trenera papildpakalpojums",
        body: "Personīgie treneri var iekļaut sanza kā 10 minūšu noslēgumu — tas pievieno vērtību un palielina personīgā trenera pakalpojumu atkārtotu rezervēšanu."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu biedriem",
    whatChangesPatientsItems: [
      "Pieredze pēc treniņa, kas liekas premium un apzināta",
      "Labāks miegs, vienmērīgāka enerģija dienās pēc smagas treniņa — viņi to pamanījuši un saka",
      "Iemesls palikt jūsu sporta klubā ilgāk un ieguldīt vairāk"
    ],
    whatChangesPracticeTitle: "Jūsu sporta klubam",
    whatChangesPracticeItems: [
      "Īsts atšķirības faktors, ko konkurenti nevar kopēt vienā dienā",
      "Labāki lojalitātes rādītāji no dalībniekiem, kuri izmanto atpūtas zonas",
      "Mutvārdu reklāma: „Vai esat izmēģinājuši atpūtas paklāju X sporta klubā?”"
    ],
    whatChangesPracticeImage: "/images/campaign/gym-for-facility.jpg",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Viena stacija. Nulles papildu personāls. Iemesls atjaunot līgumu.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms jūs pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss saskaņošanas zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu vidē, kas ir tuvu jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja risinājums ir piemērots, mēs izklāstīsim ieteicamo konfigurāciju, ieviešanas procesu un cenas. Ja nē, jūs joprojām būsiet informēts."
      }
    ],
    finalCtaTitle: "Viena stacija. Nulles papildu personāls. Iemesls atjaunot.",
    finalCtaBody: "Runājiet ar mums par izmēģinājuma projektu jūsu iestādē — mēs konfigurēsim pareizo uzstādījumu jūsu telpu plānam un dalības modelim.",
    finalCtaPrimary: "Runājiet ar mums par izmēģinājuma projektu"
  },
  "vecu-cilveku-aprupe": {
    segmentName: "Pansionāti un aprūpes iestādes senioriem",
    metaTitle: "Pansionāti un aprūpes iestādes senioriem | sanza × Nordora Vital",
    metaDescription: "Maiga, strukturēta PEMF labklājības pieredze aprūpes vidē senioriem, kur komfortam un cieņai ir nozīme ik dienu.",
    heroKicker: "Iestādēm, kur komfortu un cieņu uzskata par kvalitātes rādītāju",
    heroHeadline: "Komforts, miers un cieņa — katram iemītniekam, katru dienu.",
    heroSubhead: "<strong>sanza</strong> nodrošina maigu, strukturētu labsajūtas pieredzi aprūpes iestādēs senioriem — veicinot relaksāciju, komfortu un sajūtu, ka par viņiem patiesi rūpējas. Droša, neinvazīva un aprūpes personālam viegli lietojama.",
    heroCtaPrimary: "Uzziniet, kā „Sanza“ darbojas senioru aprūpē",
    heroValueProps: [
      "Demo uz vietas",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešama darba plūsmas pārveidošana"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "Es vēlētos noorganizēt „Sanza“ demo un saņemt vairāk informācijas par pansionātiem un senioru aprūpes iestādēm.",
    quickStats: [
      {
        value: "15",
        label: "Programmu skaits"
      },
      {
        value: "1",
        label: "Vadības pults, darbojas automātiski"
      },
      {
        value: "10 min",
        label: "Personāla apmācība"
      },
      {
        value: "0",
        label: "Darba plūsmas pārveidošana"
      }
    ],
    problemEyebrow: "Atšķirība starp drošību un patiesu labklājību",
    problemTitle: "Iedzīvotājiem nepieciešams kas vairāk nekā tikai drošība. Viņiem nepieciešams sajūtams komforts.",
    problemBody: "Jūsu iemītnieki ir drošībā. Viņiem tiek nodrošināta ēdināšana, pajumte un medicīniskā uzraudzība. Taču dzīves pieredze aprūpes iestādē — vides radītais stress, autonomijas zaudēšana, pārāk intensīvā stimulācija koplietošanas telpās — rada sekas, kuras klīniskā aprūpe nespēj novērst. Ģimenes pamanīs, ja viņu mīļais cilvēks šķitīs satraukts, nemierīgs vai vairs nebūs pats sevi. To pamanīsiet arī jūs. Papildus medicīniskajai aprūpei iemītniekiem ir nepieciešams pastāvīgs, maigs signāls, kas liecina, ka viņu labsajūta ir svarīga.",
    solutionEyebrow: "Sanza slānis",
    solutionTitle: "Sanza: ikdienas komforta rituāls iemītniekiem, kuri ir pelnījuši vairāk nekā tikai klīnisko aprūpi.",
    solutionBody: "Sanza izmanto maigus PEMF frekvences signālus, lai radītu nomierinošu pieredzi visam ķermenim — bez adatām, bez zālēm, bez aktīvas iemītnieka līdzdalības. Viņi guļ vai sēž uz paklāja, programma darbojas, un strukturētais elektromagnētiskais signāls dara pārējo. Aprūpes personālam tas ir augstākās kvalitātes rīks, ko viņi var piedāvāt ar cieņu — kaut kas, kas saka: mēs domājām par to, kā jūs jūtaties, nevis tikai par to, kas jums nepieciešams.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvenču programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Moduļveida",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu iestādē",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu pamatpakalpojums paliek jūsu.",
    fitsItems: [
      {
        title: "Rīta nomierināšanas programma",
        body: "Maiga ierašanās rutīna pēc brokastīm — palīdz iemītniekiem sākt dienu no mierīgākas sākuma pozīcijas."
      },
      {
        title: "Pēcpusdienas atpūtas uzlabošana",
        body: "Palaidiet programmas dabiskajā pēcpusdienas atpūtas periodā — dziļāka, atjaunojošāka atpūta."
      },
      {
        title: "Individuālās komforta sesijas",
        body: "Tiek piedāvātas iemītniekiem ar paaugstinātu trauksmi vai hronisku diskomfortu kā personalizēta aprūpes sastāvdaļa."
      },
      {
        title: "Sagatavošanās ģimenes apmeklējumiem",
        body: "Īsa nomierināšanās programma pirms ģimenes apmeklējumiem var nozīmīgi uzlabot šo mijiedarbību kvalitāti."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpai",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu iemītniekiem",
    whatChangesPatientsItems: [
      "Ikdienas komforta un patiesas aprūpes pieredze — ne tikai klīniska aprūpe",
      "Ritualitātes un mierīguma sajūta, kas uzlabo garastāvokli un ikdienas dzīves kvalitāti"
    ],
    whatChangesPracticeTitle: "Jūsu iestādei",
    whatChangesPracticeItems: [
      "Redzams pierādījums, ka šī iestāde investē visā cilvēkā — ģimenes to pamanīs un pastāstīs citiem",
      "Lielāka pārliecība par aprūpes kvalitāti, vairāk ieteikumu no mutes mutē",
      "Rīks grūtiem brīžiem — kaut kas laipns un efektīvs, kam nav nepieciešama recepte"
    ],
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Senioru aprūpes iestādes visā Eiropā izmanto <strong>sanza</strong> kā ikdienas iemītnieku labklājības programmu.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrosim jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties saņemt atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikācijas un uzstādīšanu kontekstā, kas ir tuvs jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas ir piemērots, mēs izklāstām ieteicamo uzstādīšanu, ieviešanas procesu un cenas. Ja nē, jūs joprojām saņemat informāciju."
      }
    ],
    finalCtaTitle: "Senioru aprūpes iestādes visā Eiropā izmanto sanza kā ikdienas iedzīvotāju labklājības programmu.",
    finalCtaBody: "Mēs vēlētos parādīt jums, kā tas darbosies jūsu iestādē.",
    finalCtaPrimary: "Rezervējiet konsultāciju aprūpes iestādē"
  },
  "spa-viesnicas": {
    segmentName: "Spa viesnīcas un kūrorti",
    metaTitle: "Spa viesnīcas un kūrorti | sanza × Nordora Vital",
    metaDescription: "Augstākās klases PEMF labklājības tehnoloģija spa viesnīcām un kūrortiem, kas vēlas nodrošināt viesiem neatkārtojamu pieredzi.",
    heroImage: "/images/campaign/spa-hotel-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Viesnīcām, kuras nopietni uztver viesu pieredzi",
    heroHeadline: "Piedāvājiet saviem viesiem tādu labsajūtas pieredzi, kādu viņi nevar gūt visur.",
    heroSubhead: "Jūsu spa jau tagad piedāvā komfortu, aprūpi un patīkamu atmosfēru. <strong>sanza</strong> palīdzēs jums šai pieredzei piešķirt jaunu dimensiju: mierīgu, uz tehnoloģijām balstītu atjaunošanos, kas rada ekskluzīvu, neaizmirstamu un klusi atšķirīgu sajūtu.\r\n\r\nViesi atceras ne tikai procedūru klāstu. Viņi atceras, cik dziļi viņi atslāba, cik aprūpēti viņi jutās un vai šī pieredze deva viņiem kaut ko, par ko ir vērts runāt. <strong>sanza</strong> sniedz jūsu spa atšķirīgu labsajūtas mirkli, kas atbalsta pieczvaigžņu pozicionējumu, nemainot jūsu esošās procedūras.",
    heroCtaPrimary: "Iepazīstieties ar „sanza“ savam spa",
    heroValueProps: [
      "Prezentācijas paraugs",
      "Augstākās klases pozicionējums",
      "Vienkārša lietošana"
    ],
    contactCategory: "beauty-cosmetic",
    demoRequestMessage: "Vēlos pieteikties uz „sanza“ demonstrāciju un saņemt vairāk informācijas par spa viesnīcām un kūrortiem.",
    quickStats: [
      {
        value: "15",
        label: "augstākās klases labsajūtas programmas"
      },
      {
        value: "1",
        label: "vienkārša sistēma, ko var pārvaldīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "lai radītu neaizmirstamu atpūtu"
      },
      {
        value: "0",
        label: "izmaiņas jūsu spa piedāvājumā"
      }
    ],
    problemEyebrow: "Dodiet viesiem iemeslu runāt par jūsu spa arī pēc tam, kad viņi būs aizbraukuši.",
    problemTitle: "Gandrīz katrā premium klases viesnīcā jūsu viesi var atrast saunu, masāžu un atpūtas telpu.",
    problemBody: "Taču ne visur viņi var atrast tādu labsajūtas pieredzi, kas šķiet patiesi jauna, dziļi nomierinoša un atcerēšanās vērta.",
    problemImage: "/images/campaign/spa-hotel-block-1.jpg",
    solutionEyebrow: "PEMF + biofrekvences + lāzers",
    solutionTitle: "Tā ir jūsu iespēja.",
    solutionBody: "<strong>sanza</strong> ir profesionāla labsajūtas sistēma, kas vienā vizītē sajauc PEMF, strukturētās biofrekvenču programmas un vēso lāzera/gaismas slāņus — tas nav tikai vienvirziena PEMF salons. Tas nav klasiska masāža vai siltums; viesi jūtas dziļi nomierināti un grib atkārtot. Pozicionējiet kā savu signature programmu.",
    solutionSpecs: [
      {
        title: "<strong>sanza</strong> palīdz jūsu spa piedāvājumam pievienot unikālu, uz tehnoloģijām balstītu atjaunošanos — nevis vēl vienu standarta procedūru izvēlnē, bet premium klases labsajūtas mirkli, ko viesi var izjust uzreiz. Tas padara jūsu spa pieredzi pilnīgāku, atšķirīgāku un palielina iespēju, ka tā kļūs par to uzturēšanās daļu, par kuru viņi stāstīs citiem.",
        body: "sanza slānis"
      },
      {
        title: "sanza: pieredze, ko viesi nevar iegūt nekur citur Latvijā.",
        body: "sanza ir profesionāla PEMF labsajūtas sistēma — premium klases labsajūtas tehnoloģija, kas izmanto hronobioloģiskas elektromagnētiskā lauka frekvenču programmas, lai radītu visa ķermeņa zemējuma un nomierināšanas pieredzi. Tā nav masāža. Tā nav siltuma terapija. Tā ir kaut kas pilnīgi atšķirīgs — dziļa, klusa nomierināšanās, ko viesi izjūt kā dziļu relaksāciju, kuru viņi uzreiz vēlas atkārtot. Pozicionējiet to kā savu firmas programmu. Nosauciet to par savu."
      },
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      }
    ],
    fitsTitle: "Frekvenču programmas, kas pielāgotas ķermeņa ritmiem.",
    fitsEyebrow: "Hronobioloģisks",
    fitsLead: "Modulārs",
    fitsImages: [
      "/images/campaign/spa-fit-signature.jpg",
      "/images/campaign/spa-fit-pre-treatment.jpg",
      "/images/campaign/spa-fit-relaxation.jpg",
      "/images/campaign/spa-fit-retreat.jpg"
    ],
    fitsItems: [
      {
        title: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām.",
        body: "Integrācija"
      },
      {
        title: "Kur sanza iederas jūsu spa",
        body: "Daži vienkārši saskares punkti ap to darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu."
      },
      {
        title: "Firmveida programma",
        body: "Sanza seanss — 45–60 minūšu premium rezervācija, kas apvieno PEMF matu ar mērķtiecīgiem aplikatoriem."
      },
      {
        title: "Sagatavošanās pirms procedūras",
        body: "Veiciet 15 minūšu nomierināšanos pirms masāžas vai sejas procedūras — procedūra iedarbojas uz ķermeni, kas jau ir atvērts."
      }
    ],
    whatChangesTitle: "Sanza stacija atpūtas zonā — viesi to izmanto starp procedūrām vai kā atsevišķu pieredzi.",
    whatChangesEyebrow: "Atpūtas telpas funkcija",
    whatChangesPatientsTitle: "Atpūtas un pāru piedāvājumi",
    whatChangesPatientsItems: [
      "Integrējiet atpūtas paketes vai izveidojiet premium pāru seansu ar diviem matračiem un vienu programmu.",
      "Rezultāti",
      "Kas mainās, kad Sanza pievienojas jūsu telpai"
    ],
    whatChangesPracticeTitle: "Jūsu viesiem",
    whatChangesPracticeItems: [
      "Pieredze, kādu viņi nav piedzīvojuši iepriekš un kāpēc vēlas atgriezties",
      "Dziļas atpūtas sajūta, kas atšķir jūsu spa no visām pārējām luksusa iespējām",
      "Kaut kas, ko viņi apraksta draugiem tā, ka rada patiesu interesi"
    ],
    whatChangesPracticeImage: "/images/campaign/spa-for-property.png",
    socialProofLabel: "Jūsu iestādei",
    socialProofQuote: "Kategoriju definējošs piedāvājums Latvijas tirgū",
    socialProofAttribution: "Premium cenu pamatojums — tehnoloģija + pieredze = uztveramā vērtība",
    demoStepsEyebrow: "Augstāki spa ieņēmumi no viena viesa, nepalielinot personāla skaitu",
    demoStepsTitle: "Kāpēc partneri vēlas to redzēt",
    demoStepsLead: "Daži premium Eiropas spa un wellness viesnīcas jau izmanto <strong>sanza</strong>.",
    demoSteps: [
      {
        title: "Nordora Vital · Profesionālā partneru programma",
        body: "Kas notiek pēc tam, kad sazināties ar mums"
      },
      {
        title: "Vienkārša demonstrācija, kas veidota atbilstoši jūsu vidē.",
        body: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu."
      },
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrosim jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties atbildes."
      }
    ],
    finalCtaTitle: "Praktiska demonstrācija",
    finalCtaBody: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu vidē, kas ir tuvu jūsu ikdienas darbam.",
    finalCtaPrimary: "Skaidri nākamie soļi"
  },
  "golfa-klubi": {
    segmentName: "Golfa klubi",
    metaTitle: "Golfa klubi | sanza × Nordora Vital",
    metaDescription: "Augstākās klases PEMF labklājības tehnoloģija golfa klubiem, kas vēlas saviem biedriem piedāvāt pēcspēles atjaunošanās rituālu, kas ir viņiem piemērots.",
    heroImage: "/images/campaign/golf-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Klubiem, kur biedru pieredze neaprobežojas tikai ar 18. bedrīti",
    heroHeadline: "Padariet pēcspēles pieredzi tikpat izsmalcinātu kā pats klubs.",
    heroSubhead: "Jūsu biedri nenāk tikai golfa laukuma dēļ. Viņi nāk, lai izbaudītu visa kluba atmosfēru — ritmu, apkalpošanu, gaisotni un to, kā viņi jūtas pēc spēles.\r\n\r\n<strong>sanza</strong> palīdz jums pagarināt šo pieredzi arī pēc 18. bedrītes, piedāvājot kluba biedriem patiesi izjūtamu atpūtu un relaksāciju. Mierīga, tehnoloģijām balstīta atjaunošanās kluba namā, atpūtas telpā vai veselības zonā — izstrādāta, lai jūsu klubs šķistu pilnīgāks, neaizmirstamāks un grūtāk salīdzināms.",
    heroCtaPrimary: "Uzziniet, kā golfa klubi izmanto „sanza“",
    heroValueProps: [
      "Demo klātienē",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešams pārveidot darba plūsmu"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Es vēlos pieteikties uz „sanza“ demo un saņemt vairāk informācijas par golfa klubiem.",
    quickStats: [
      {
        value: "15",
        label: "labklājības programmas pēc spēles"
      },
      {
        value: "1",
        label: "vienkārša sistēma, ko var pārvaldīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "lai radītu izsmalcinātu atpūtas brīdi"
      },
      {
        value: "0",
        label: "izmaiņas kluba darba plūsmā"
      }
    ],
    problemEyebrow: "Piedāvājiet saviem biedriem labāku veidu, kā atgūt spēkus pēc spēles.",
    problemTitle: "Jūsu klubs jau nodrošina laukumu, servisu un atmosfēru, kādu gaida jūsu biedri.",
    problemBody: "<strong>sanza</strong> palīdz jums šo standartu attiecināt arī uz to, kas notiek pēc spēles.\r\n\r\nGolfa spēle prasa daudz no ķermeņa — muguras, gūžām, pleciem, kājām un nervu sistēmai pēc stundām ilgas koncentrēšanās un kustībām. Daudzi kluba biedri pēc spēles jūtas labi, taču pārējā dienas daļā jūt spriedzi, stīvumu vai nogurumu.\r\n\r\nTieši šeit jūsu klubs var izcelties.\r\n\r\n<strong>sanza</strong> piešķir kluba pieredzei mierīgu, augstvērtīgu atpūtas brīdi — kaut ko, ko biedri var sajust, atcerēties un par ko runāt. Ne kā medicīnisku pakalpojumu. Kā izsmalcinātu labsajūtas slāni, kas padara visu kluba pieredzi pilnīgāku.",
    problemImage: "/images/campaign/golf-block-1.jpg",
    solutionEyebrow: "„Sanza“ zona",
    solutionTitle: "„Sanza“: atpūtas rituāls pēc spēles, kas kļūst par daļu no jūsu kluba kultūras.",
    solutionBody: "„Sanza“ zona jūsu kluba telpās — blakus ģērbtuvei vai kā atsevišķa atpūtas telpa — piedāvā kluba biedriem strukturētu 15–20 minūšu ilgu PEMF relaksācijas seansu pēc spēles. Atpūta visam ķermenim, mērķtiecīgi aplikatori zonām, kas visvairāk noslogotas, un klusa, ekskluzīva atmosfēra. Biedri, kas to izmēģina vienreiz, izmanto to katru reizi. Tas kļūst par vienu no iemesliem, kāpēc viņi spēlē tieši šeit.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu klubā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap to darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/golf-fit-event.jpg",
      "/images/campaign/golf-fit-clubhouse.jpg",
      "/images/campaign/golf-fit-post-round.jpg",
      "/images/campaign/golf-fit-recovery-room.jpg"
    ],
    fitsImagePositions: [
      "50% 36%",
      "50% 36%",
      "50% 36%",
      "50% 50%"
    ],
    fitsItems: [
      {
        title: "Atpūtas telpa",
        body: "Speciāli iekārtota, klusa telpa ar zīmolu — viens paklājs, vides apgaismojums, 15 minūšu programmas skaidrā izvēlnē."
      },
      {
        title: "Papildinājums profesionālajā veikalā",
        body: "Piedāvājiet sanza sesijas profesionālajā veikalā kā premium papildinājumu pēc nodarbības vai spēles."
      },
      {
        title: "Korporatīvās dienas piedāvājums",
        body: "Iekļaujiet sanza atpūtas sesiju premium korporatīvo golfa dienu paketēs."
      },
      {
        title: "Biedru līmeņi",
        body: "Iekļaujiet sanza piekļuvi premium biedru līmenī — tas palielina vērtību uz vienu biedru."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu biedriem",
    whatChangesPatientsItems: [
      "Atpūtas iespēja pēc spēles, ko viņi var izjust — ne tikai karsta duša",
      "Klubs, kas ir investējis viņu komfortā tādā līmenī, kas liecina par patiesu kvalitāti"
    ],
    whatChangesPatientsImage: "/images/campaign/golf-for-members.jpg",
    whatChangesPracticeTitle: "Jūsu klubam",
    whatChangesPracticeItems: [
      "Premium atšķirības faktors konkurētspējīgā tirgū",
      "Papildu ieņēmumu avots ar minimālām ekspluatācijas izmaksām",
      "Biedri, kuri uzskata, ka viņu ieguldījums biedra statusā ir pilnībā attaisnojams"
    ],
    whatChangesPracticeImage: "/images/campaign/golf-for-club.jpg",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Klubs, kas savu biedru atpūtu uztver tikpat nopietni kā viņu spēli. Tā ir pozicionēšana, ko atbalsta <strong>sanza</strong>.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms jūs pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu vidē, kas ir tuvu jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja risinājums ir piemērots, mēs izklāstām ieteicamo konfigurāciju, ieviešanas procesu un cenas. Ja nē, jūs joprojām saņemat visus nepieciešamos datus."
      }
    ],
    finalCtaTitle: "Klubs, kas savu biedru atveseļošanos uztver tikpat nopietni kā spēli.",
    finalCtaBody: "Pārrunājiet ar mums, kā sanza darbosies jūsu kluba telpās.",
    finalCtaPrimary: "Pārrunājiet ar mums par savu klubu"
  },
  "tenisa-klubi": {
    segmentName: "Tenisa klubi",
    metaTitle: "Tenisa klubi | sanza × Nordora Vital",
    metaDescription: "Strukturēta PEMF labklājības tehnoloģija tenisa klubiem, kas vēlas piedāvāt saviem biedriem pēcspēles atgūšanās risinājumu, ko tie atcerēsies.",
    heroImage: "/images/campaign/tennis-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Iestādēm, kas saprot, ka biedru lojalitāte tiek veidota starp treniņiem",
    heroHeadline: "Jūsu biedri smagi trenējas. Piedāvājiet viņiem atgūšanās pieredzi, kas tam atbilst.",
    heroSubhead: "<strong>sanza</strong> piedāvā strukturētu PEMF labklājības tehnoloģiju tenisa klubiem — augstākās kvalitātes atgūšanās piedāvājumu pēc spēles, kas izceļ jūsu iestādi un liek biedriem turpināt šeit trenēties.",
    heroCtaPrimary: "Uzziniet, kā tenisa klubi izmanto sanza",
    heroValueProps: [
      "Demo uz vietas",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešams pārveidot darba plūsmu"
    ],
    contactCategory: "sports-performance",
    demoRequestMessage: "Es vēlos noorganizēt sanza demo un saņemt vairāk informācijas par tenisa klubiem.",
    quickStats: [
      {
        value: "15",
        label: "atjaunošanās programmas spēlētājiem"
      },
      {
        value: "1",
        label: "vienkārša sistēma, ko var vadīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "lai palīdzētu spēlētājiem atjaunoties pēc laika uz korta"
      },
      {
        value: "0",
        label: "izmaiņas jūsu kluba darbībā"
      }
    ],
    problemEyebrow: "Piedāvājiet saviem spēlētājiem atjaunošanās standartu, kas atbilst viņu treniņiem.",
    problemTitle: "Jūsu spēlētāji iegulda daudz laika, enerģijas un centības katrā spēlē, nodarbībā un treniņā.",
    problemBody: "<strong>sanza</strong> palīdz jūsu klubam nodrošināt atbalstu pēc intensīvas slodzes: atveseļošanos, reģenerāciju un gatavības atgūšanu.\r\n\r\nTeniss atkārtoti noslogo plecus, elkoņus, gurnus, kājas un nervu sistēmu. Strukturēta atjaunošanās pēc treniņa sniedz spēlētājiem lielisku iespēju atslābināties, atgūt spēkus un justies gataviem nākamajai nodarbībai.\r\n\r\nJūsu klubam tas kļūst par kaut ko vairāk nekā vienkārši ērtību. Tas ir redzams jūsu treniņu vides uzlabojums — veids, kā labāk atbalstīt spēlētājus, stiprināt jūsu piedāvājumu un padarīt jūsu klubu pilnīgāku.",
    problemImage: "/images/campaign/tennis-block-1.jpg",
    solutionEyebrow: "„Sanza“ slānis",
    solutionTitle: "„Sanza“ pārvērš jūsu ģērbtuvi par atpūtas vietu.",
    solutionBody: "„Sanza“ stacija — vienkārša, augstākās klases, viegli lietojama — piedāvā jūsu apmeklētājiem 15–20 minūšu strukturētu PEMF dekompresijas iespēju pēc treniņa vai sacensībām. Viss ķermeņa paklājs vispārējai relaksācijai, vajadzības gadījumā — mērķtiecīgs aplikators pleciem vai elkoņiem. Nav nepieciešams personāls. Apmeklētāji paši vadītu programmu, izmantojot skaidru izvēlni. Tas kļūst par rituālu pēc sacensībām.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu objektā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap to darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/tennis-fit-recovery-room.jpg",
      "/images/campaign/tennis-fit-lounge.jpg",
      "/images/campaign/tennis-fit-performance.jpg",
      "/images/campaign/tennis-fit-tournament.jpg"
    ],
    fitsImagePositions: [
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "64% 32%"
    ],
    fitsItems: [
      {
        title: "Atpūtas stacija pēc spēles",
        body: "Viens paklājs, viens stūrītis, skaidra programmu izvēlne. Klubi to izmanto pēc treniņa."
      },
      {
        title: "Papildinājums junioru programmai",
        body: "Iekļaujiet sanza piekļuvi junioru spēlētājiem — vecāki to pamanīs un novērtēs šo ieguldījumu."
      },
      {
        title: "Sadarbība ar treneriem",
        body: "Treneri iekļauj sanza savās treniņu programmās — tas ir augstākās klases papildinājums individuālajai apmācībai."
      },
      {
        title: "Pieredze turnīra dienā",
        body: "Piedāvājiet sanza turnīra dalībniekiem kā daļu no pasākuma pieredzes."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu klubiem",
    whatChangesPatientsItems: [
      "Strukturēts atgūšanās rituāls, ko viņi iekļaus katrā kluba apmeklējumā",
      "Samazināts nogurums pēc treniņa — viņi trenējas regulārāk un biežāk"
    ],
    whatChangesPatientsImage: "/images/campaign/tennis-for-members.jpg",
    whatChangesPracticeTitle: "Jūsu klubam",
    whatChangesPracticeItems: [
      "Konkrēts atšķirības faktors, ko pašlaik nepiedāvā neviens konkurents jūsu ielā",
      "Biežāki apmeklējumi no biedriem, kuriem ir vēl viens iemesls šeit būt",
      "Iekārta, kas ieguldīta visā spēlētāju pieredzē, nevis tikai laukumā pavadītajā laikā"
    ],
    whatChangesPracticeImage: "/images/campaign/tennis-for-club.jpg",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Pašlaik neviens konkurents jūsu ielā to nepiedāvā.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss ievada zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties saņemt atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu vidē, kas ir tuvu jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja risinājums ir piemērots, mēs izklāstīsim ieteicamo uzstādīšanu, ievadkursu un cenas. Ja nē, jūs joprojām saņemsiet visu nepieciešamo informāciju."
      }
    ],
    finalCtaTitle: "Piedāvājiet savam klubam atgūšanās programmu, ko spēlētāji atcerēsies.",
    finalCtaBody: "Piesakieties uz konsultāciju par telpām, un mēs parādīsim, kur sanza iederas jūsu klubā — sākot no atgūšanās pēc spēles un treniņu programmām līdz turnīru dienām un premium locekļu pieredzēm.",
    finalCtaPrimary: "Piesakieties uz konsultāciju par telpām"
  },
  "gimenes-arsti": {
    segmentName: "Ģimenes ārsti",
    metaTitle: "Ģimenes ārsti | sanza × Nordora Vital",
    metaDescription: "Augstākās kvalitātes, neklīniska labklājības platforma ģimenes ārstu praksēm, kur pacientu uzticība veidojas ar katru vizīti.",
    heroImage: "/images/campaign/gp-hero.jpg",
    heroKicker: "Ģimenes ārstu praksēm, kur pacientu uzticība veidojas ar katru vizīti",
    heroHeadline: "Padariet katru vizītiPadariet katru vizīti pilnvērtīgāku.",
    heroSubhead: "Jūsu medicīniskā darbība ir vizītes galvenais elements. <strong>sanza</strong> papildina šo pieredzi — piedāvājot strukturētu labsajūtas atjaunošanu pirms vai pēc konsultācijas, kas palīdz pacientiem justies klātesošākiem, atsaucīgākiem un labāk aprūpētiem.\r\n\r\nTas sniedz jūsu ģimenes ārsta praksei konkrētu, ar medicīnu nesaistītu labsajūtas piedāvājumu, ko pacienti patiešām var izjust, nemainot jūsu medicīnisko darba plūsmu un neizvirzot klīniskas pretenzijas.",
    heroCtaPrimary: "Uzziniet, kā „Sanza“ iederas ģimenes ārsta praksē",
    heroValueProps: [
      "Demo klātienē",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešams pārveidot darba plūsmu"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "Es vēlētos noorganizēt „Sanza“ demo un saņemt vairāk informācijas ģimenes ārstiem.",
    quickStats: [
      {
        value: "15",
        label: "Strukturētas labklājības programmas"
      },
      {
        value: "1",
        label: "Vienkārša sistēma, ko var pārvaldīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "Lai uzlabotu vizītes pieredzi"
      },
      {
        value: "0",
        label: "Izmaiņas jūsu medicīniskajā darba plūsmā"
      }
    ],
    problemEyebrow: "Palīdziet pacientiem gūt lielāku labumu no aprūpes, ko jūs jau sniedzat.",
    problemTitle: "Jūs zināt, cik lielā mērā pacienta stāvoklis ietekmē vizīti.",
    problemBody: "Daži ierodas steigā, saspringti, pārāk uzbudināti vai satraukti. Viņi var sēdēt aizsargāti, grūti atslābināties izmeklēšanas laikā vai aiziet ar sajūtu, ka vizīte bija medicīniski pareiza, bet emocionāli nepilnīga.\r\n\r\n<strong>sanza</strong> palīdz jūsu praksei uzlabot pieredzi saistībā ar ārstēšanu.\r\n\r\nTas sniedz pacientiem vienkāršu, neklīnisku labsajūtas atjaunošanu pirms vai pēc ārsta apmeklējuma — palīdzot vizītei justies strukturētākai, atbalstošākai un pilnīgākai. Jūsu diagnoze, lēmumi par ārstēšanu un medicīniskā darba plūsma paliek tieši tādi, kādi tie ir. <strong>sanza</strong> vienkārši stiprina aprūpes vidi ap tiem.",
    problemImage: "/images/campaign/gp-block-1.jpg",
    solutionEyebrow: "„Sanza“ slānis",
    solutionTitle: "Uzgaidāmā telpa, kas piedāvā vairāk nekā vienkārši gaidīšanu.",
    solutionBody: "„Sanza“ paklājs jūsu konsultāciju telpā vai klusā uzgaidāmās telpas stūrītī rada pavisam atšķirīgu pieredzi pirms vizītes. Pacienti, kas 10 minūtes pavada strukturētā PEMF relaksācijas programmā, ierodas uz konsultāciju mierīgāki, klātbūtnē esošāki un atvērtāki sarunai. Vizīte vienkārši norit labāk.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu praksē",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/gp-fit-waiting-room.jpg",
      "/images/campaign/gp-fit-preparation-room.jpg",
      "/images/campaign/gp-fit-post-visit.jpg"
    ],
    fitsItems: [
      {
        title: "Labklājība uzgaidāmajā telpā",
        body: "Sanza paklājs, kas pieejams gaidīšanas laikā — brīvprātīga izvēle, skaidri izskaidrots, vienmēr pieejams."
      },
      {
        title: "Noskaņošanās pirms konsultācijas",
        body: "Izmanto nelielā sagatavošanās telpā pirms jutīgām vai lielu trauksmi izraisošām vizītēm."
      },
      {
        title: "Atgūšanās pēc vizītes",
        body: "Pacientiem, kuri dodas prom pēc grūtām ziņām vai sarežģītām procedūrām — īsa relaksācijas programma, pirms viņi atgriežas ārpus telpas."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem / klientiem",
    whatChangesPatientsItems: [
      "Mazāk trauksmes, lielāka atvērtība paša apmeklējuma laikā",
      "Pieredze, kas liek justies kā VIP un patiesi rūpējas"
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Labākas kvalitātes konsultācijas īsākā laikā",
      "Pacienti, kuri jūs ieteic tieši tāpēc, kā viņi jutās apmeklējuma laikā"
    ],
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Prakse, kas liek justies kā VIP no ieejas līdz izejai.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācija, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties saņemt atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu kontekstā, kas ir tuvs jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas ir piemērots, mēs izklāstām ieteicamo uzstādīšanu, ievadīšanas procesu un cenas. Ja nē, jūs joprojām saņemat informāciju."
      }
    ],
    finalCtaTitle: "Praksē, kas no ieejas līdz izejai rada premium sajūtu.",
    finalCtaBody: "Pieprasiet demonstrāciju un redziet, kā sanza iederas jūsu pacientu plūsmā.",
    finalCtaPrimary: "Pieprasiet prakses demonstrāciju"
  },
  zobarstnieciba: {
    segmentName: "Zobārsti un zobārstniecības klīnikas",
    metaTitle: "Zobārsti un zobārstniecības klīnikas | sanza × Nordora Vital",
    metaDescription: "Strukturēts, ar klīnisko vidi nesaistīts labklājības elements zobārstniecības klīnikām, kas vēlas nodrošināt mierīgākas vizītes, patīkamāku pacientu pieredzi un pilnīgāku aprūpes sajūtu.",
    heroImage: "/images/campaign/dentist-hero.jpg",
    heroTextAlign: "right",
    heroKicker: "Zobārstniecības praksēm, kurās komforts maina visu vizīti",
    heroHeadline: "Palīdziet pacientiem justies mierīgāk, pirms viņi apsēžas krēslā.",
    heroSubhead: "<strong>sanza</strong> piešķir jūsu zobārstniecības praksei mierīgu, strukturētu labklājības slāni — palīdzot pacientiem nomierināties pirms vizītes, justies atbalstītiem ārstēšanas laikā un aiziet ar spēcīgāku aprūpes sajūtu. Jūsu klīniskais darbs paliek tieši tāds, kāds tas ir. Pieredze ap to kļūst labāka.",
    heroCtaPrimary: "Rezervējiet zobārstniecības klīnikas demo",
    heroValueProps: [
      "Zobārstniecības klīnikas apskats",
      "Skaidra telpas iekārtojuma",
      "Nekādas izmaiņas protokolā"
    ],
    contactCategory: "dentists",
    demoRequestMessage: "Es vēlos pieteikties uz sanza demonstrāciju un saņemt vairāk informācijas par zobārstiem un zobārstniecības klīnikām.",
    quickStats: [
      {
        value: "15",
        label: "Uz komfortu vērstas labsajūtas programmas"
      },
      {
        value: "1",
        label: "Vienkārša sistēma, ko var vadīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "Lai palīdzētu pacientiem nomierināties pirms ārstēšanas"
      },
      {
        value: "0",
        label: "Izmaiņas jūsu zobārstniecības darba plūsmā"
      }
    ],
    problemEyebrow: "Ko jūs jau zināt",
    problemTitle: "Bailes no zobārsta maina visu vizīti.",
    problemBody: "Jūs noteikti pazīstat pacientu, kurš ierodas saspringts, pirms vēl kaut kas ir noticis. Pacelti pleci. Saspringta žokļa. Rokas cieši satverušas atzveltnes. Varbūt viņš jums uzticas, bet viņa ķermenis vēl nav tam pielāgojies.\r\n\r\nŠis stāvoklis ietekmē visu vizīti. Sveicienu, sēžošanu krēslā, izskaidrojumu, pirmo instrumentu, brīdi pirms vietējās anestēzijas, laiku pēc ārstēšanas. Pat ja jūsu klīniskais darbs ir izcils, pacients, kurš jūtas saspringts, var uztvert vizīti kā grūtāku, nekā tai vajadzētu būt.\r\n\r\n<strong>sanza</strong> palīdz jūsu praksei atbalstīt šo brīdi citādāk.\r\n\r\nTas sniedz pacientiem vienkāršu, neklīnisku labsajūtas atjaunošanu pirms vai pēc ārstēšanas — palīdzot vizītei justies pārdomātākai, ērtākai un pilnīgākai. Ne kā zobārstniecība. Kā labāks veids, kā sagatavot un rūpēties par cilvēku ap zobārstniecības darbu.",
    problemImage: "/images/campaign/dentist-block-1.jpg",
    solutionEyebrow: "Sanza slānis",
    solutionTitle: "Mierīgāka pacientu pieredze saistībā ar zobārstniecības pakalpojumiem, kurus jūs jau sniedzat.",
    solutionBody: "<strong>sanza</strong> ir profesionāla PEMF labsajūtas sistēma, kas izstrādāta klīnikām, kurām rūp, kā pacients jūtas katrā apmeklējuma reizē. To var izmantot pirms vizītes, starp ārstēšanas posmiem vai pēc garākām procedūrām kā īsu, strukturētu labsajūtas rituālu.\r\n\r\nSistēma darbojas, izmantojot paklāju, spilventiņu, rokas elektrodus vai mērķtiecīgus aplikatorus, atkarībā no telpas un lietošanas gadījuma. Jūsu zobārstnieciskā ārstēšana paliek tieši tāda, kāda tā ir. <strong>sanza</strong> vienkārši pievieno klusu labsajūtas slāni ap to — tādējādi klīnika no ierašanās brīža līdz aizbraukšanai šķiet cilvēcīgāka, augstvērtīgāka un atbalstošāka.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvenču programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Moduļu sistēma",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kā sanza iederas jūsu zobārstniecības klīnikā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Izmantojiet sanza tikai tur, kur tam ir vieta: kā skaidri nošķirtu, neklīnisku labsajūtas brīdi zobārstniecības aprūpes kontekstā.",
    fitsImages: [
      "/images/campaign/dentist-fit-01.jpg",
      "/images/campaign/dentist-fit-02.jpg",
      "/images/campaign/dentist-fit-03-full.jpg",
      "/images/campaign/gp-fit-post-visit.jpg"
    ],
    fitsImagePositions: [
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "50% 50%"
    ],
    fitsItems: [
      {
        title: "Pirms ārstēšanas nomierināšanās",
        body: "Pirms garākiem apmeklējumiem, pirmreizējiem apmeklējumiem, estētiskām procedūrām vai pacientiem, kuri ierodas redzami saspringti, veiciet īsu 10–15 minūšu labsajūtas programmu."
      },
      {
        title: "Pirms augstas trauksmes procedūrām",
        body: "Pacientam ir brīdis, lai nomierinātos pirms sēšanās krēslā — un jūsu komanda sāk darbu labvēlīgākā cilvēciskā kontekstā."
      },
      {
        title: "Pirms procedūrām, kas rada lielu trauksmi",
        body: "Piedāvājiet Sanza kā papildu komforta posmu pirms ārstēšanas, ko pacienti bieži gaida ar stresu: injekcijas, urbšana, ekstrakcijas, implanti, sakņu kanālu ārstēšana vai sarežģīti restaurācijas darbi."
      },
      {
        title: "Veidots personālam, ne speciālistiem",
        body: "Nav klīnisku apgalvojumu. Nav aizstājējs anestēzijai, sedācijai vai medicīniskajiem protokoliem. Tikai strukturēts veids, kā atbalstīt pacienta pieredzi pirms darba sākuma."
      }
    ],
    whatChangesTitle: "Pēc garākiem apmeklējumiem pacienti bieži vien aiziet joprojām uzbudināti — ar nogurušu žokli, uzbudinātu nervu sistēmu un prātu, kas apstrādā notikušo.",
    whatChangesEyebrow: "Dekompresija pēc ārstēšanas",
    whatChangesPatientsTitle: "Jūsu pacientiem",
    whatChangesPatientsItems: [
      "Īsa atpūta pēc apmeklējuma palīdz vizītei beigties maigāk un liek visai pieredzei justies pilnīgākai.",
      "Izstrādāts personālam, nevis speciālistiem",
      "Sistēma ir vienkārša: numurētas programmas, viens kontrolieris, skaidri lietošanas gadījumi. Jūsu reģistratūras komanda, asistents vai prakses vadītājs var ātri apgūt iestatīšanu.",
      "Spēcīgāka sajūta, ka tiek aprūpēts viss cilvēks, ne tikai zobi"
    ],
    whatChangesPracticeTitle: "Nav jauna klīniskā protokola. Nav nepieciešams pārveidot ārstēšanu. Nav spiediena uz zobārstu.",
    whatChangesPracticeItems: [
      "Rezultāti",
      "Kas mainās, kad sanza pievienojas jūsu praksei",
      "Jūsu pacientiem",
      "Pārdomātāka pieredze pirms, zobārstniecības aprūpes laikā un pēc tās"
    ],
    whatChangesPracticeImage: "/images/campaign/dentist-outcomes-practice.jpg",
    whatChangesPracticeImagePosition: "50% 66%",
    socialProofLabel: "Komforta iespēja, ko viņi var izjust bez medikamentiem vai klīniskas sarežģītības",
    socialProofQuote: "Vizīte praksē, kas šķiet mierīgāka, ekskluzīvāka un cilvēcīgāka",
    socialProofAttribution: "Spēcīgāka sajūta, ka tiek rūpēts par visu cilvēku, ne tikai par zobiem",
    demoStepsEyebrow: "Jūsu praksei",
    demoStepsTitle: "Skaidrs atšķirības faktors konkurētspējīgajā zobārstniecības tirgū",
    demoStepsLead: "Augstvērtīgāka pacientu pieredze, nemainot ārstēšanas protokolus",
    demoSteps: [
      {
        title: "Neaizmirstamākas vizītes, īpaši pacientiem, kuriem ir trauksme vai kuri pievērš uzmanību estētikai",
        body: "Spēcīgāks iemesls pacientiem ieteikt klīniku, ne tikai tehniskās kvalitātes dēļ"
      },
      {
        title: "Kāpēc partneri vēlas to redzēt",
        body: "Pacienti var izvēlēties jūs zobārstniecības kompetences dēļ. Viņi jūs ieteiks, ja visa vizīte radīs sajūtu, ka par viņiem rūpējas."
      },
      {
        title: "Nordora Vital · Profesionālā partneru programma",
        body: "Kas notiek pēc tam, kad sazināties ar mums"
      }
    ],
    finalCtaTitle: "Vienkārša demonstrācijas programma, kas veidota atbilstoši jūsu vidē.",
    finalCtaBody: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms jūs pieņemat lēmumu.",
    finalCtaPrimary: "Īss iepazīšanās zvans"
  },
  poliklinika: {
    segmentName: "Poliklīnikas un daudzprofilu klīnikas",
    metaTitle: "Poliklīnikas un daudzprofilu klīnikas | sanza × Nordora Vital",
    metaDescription: "Vienots, augstākās kvalitātes labklājības risinājums daudzprofilu klīnikām, kur pacientu pieredze ir uzņēmuma vērtība.",
    heroImage: "/images/campaign/poliklinika-hero.jpg",
    heroKicker: "Klīniku īpašniekiem, kuri apzinās, ka pacientu pieredze ir uzņēmuma vērtība",
    heroHeadline: "Padariet savu klīniku tikpat pilnvērtīgu kā jūsu sniegto aprūpi.",
    heroSubhead: "Jūsu poliklīnikā jau vienuviet ir pieejami daudzi speciālisti, diagnostikas pakalpojumi un ārstēšanas metodes. <strong>sanza</strong> palīdz jums stiprināt to, kas visu to saista kopā: pacienta pieredzi.\r\n\r\nTas piešķir vizītēm vienotu, ar medicīnu nesaistītu labklājības dimensiju — sniedzot pacientiem strukturētu iespēju atgūt spēkus pirms vai pēc vizītēm dažādās nodaļās. Jūsu klīnikai tas kļūst par redzamu kvalitātes uzlabojumu: pārdomātāku, atmiņā paliekošāku un vieglāk atšķiramu no citiem medicīnas centriem.",
    heroCtaPrimary: "Uzziniet, kā poliklīnikas izmanto „sanza“",
    heroValueProps: [
      "Demo klātienē",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešams pārveidot darba plūsmu"
    ],
    contactCategory: "clinics",
    demoRequestMessage: "Es vēlētos noorganizēt „sanza“ demo un saņemt vairāk informācijas par poliklīnikām un daudzprofilu klīnikām.",
    quickStats: [
      {
        value: "15",
        label: "Strukturētas pacientu pieredzes programmas"
      },
      {
        value: "1",
        label: "Sistēma, ko var pārvaldīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "Pirms vai pēc vizītēm"
      },
      {
        value: "0",
        label: "Klīniskās darbības traucējumi"
      }
    ],
    problemEyebrow: "Nodrošiniet labāku pacientu pieredzi katrā nodaļā.",
    problemTitle: "Jūsu klīnika jau strādā sarežģītās situācijās.",
    problemBody: "Konsultācijas, diagnostika, procedūras, pēcoperācijas aprūpe, dažādi speciālisti, dažādas pacientu vajadzības. Tieši tāpēc tik svarīga ir pieredze, kas saistīta ar vizīti.\r\n\r\nPacienti var ierasties, lai saņemtu medicīnisko palīdzību, taču viņi pievērš uzmanību arī tam, kāda ir vizītes atmosfēra: vai vide ir sakārtota, vai viņi jūtas aprūpēti, vai klīnika rada iespaidu par modernu, pārdomātu vietu, kurā ir vērts atgriezties.\r\n\r\n<strong>sanza</strong> palīdz jums pievienot vienotu labklājības slāni visā pacienta ceļojumā — pirms vai pēc vizītēm, atsevišķās nodaļās vai kā daļu no augstākās kvalitātes aprūpes procesiem. Tas sniedz jūsu klīnikai redzamu kvalitātes uzlabojumu, ko pacienti var sajust, vienlaikus saglabājot jūsu medicīniskos darba procesus tieši tā, kādi tie ir.",
    problemImage: "/images/campaign/poliklinika-block-1.jpg",
    solutionEyebrow: "„Sanza“ slānis",
    solutionTitle: "Viena sistēma, vairākas nodaļas, nemainīgi augsta kvalitāte.",
    solutionBody: "„Sanza“ integrējas iestādes līmenī — paklājs galvenajā uzgaidāmajā telpā, specializētas vienības nodaļās ar augstu trauksmes līmeni un papildu telpas specializētām labsajūtas programmām. Sistēma ir standartizēta un personālam viegli pārvaldāma. Pacienti visās nodaļās izjūt vienādu nomierinošo efektu. Jūsu klīnika kļūst pazīstama ar kaut ko īpašu: kā vieta, kur patiesi rūpējas par to, kā jūs jūtaties.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvences programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Moduļveida",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu iestādē",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap to darbu, ko jūs jau darāt. Pieredze mainās, bet jūsu pamatpakalpojums paliek nemainīgs.",
    fitsImages: [
      "/images/campaign/poliklinika-fit-waiting.jpg",
      "/images/campaign/poliklinika-fit-department.jpg",
      "/images/campaign/poliklinika-fit-staff.jpg",
      "/images/campaign/poliklinika-fit-programme.jpg"
    ],
    fitsItems: [
      {
        title: "Centrālā uzgaidīšanas zona",
        body: "Sanza stacija, kuru pacienti var izvēlēties pirms jebkuras vizītes — uzreiz liecina par augstākās kvalitātes aprūpi."
      },
      {
        title: "Integrācija nodaļu līmenī",
        body: "Dodiet priekšroku nodaļām, kur pacientu trauksme ir vislielākā — ieguldījuma atdeve, nodrošinot raitākas konsultācijas, ir tūlītēja."
      },
      {
        title: "Personāla labklājība",
        body: "Sanza seansu telpa, kas pieejama klīniskajam personālam — veicina izturību vidē ar augstām prasībām."
      },
      {
        title: "Zīmola programma",
        body: "Piedāvājiet labklājības protokolu ar jūsu klīnikas zīmolu — sanza nodrošinātu firmas pakalpojumu."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem / klientiem",
    whatChangesPatientsItems: [
      "Vizītes pieredze, ko viņi konkrēti apraksta — un konkrēti iesaka",
      "Mazāka trauksme pirms stresa pilnām vizītēm"
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Pacientu atsauksmes, kas min pieredzi, nevis tikai klīnisko rezultātu",
      "Iestādes reputācija, kas veicina jaunu pacientu piesaisti bez mārketinga izdevumiem"
    ],
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Vieta, kas patiesi rūpējas par to, kā jūs jūtaties — tā ir pozicionēšana, ko rada <strong>sanza</strong>.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācija, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpas, un mēs parādīsim, kur sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss iepazīšanās zvans",
        body: "Mēs noskaidrojam jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas, aplikatorus un uzstādīšanu kontekstā, kas ir tuvs jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas ir piemērots, mēs izklāstām ieteicamo uzstādīšanu, ievadīšanas procesu un cenas. Ja nē, jūs joprojām saņemat informāciju."
      }
    ],
    finalCtaTitle: "Piesakieties uz konsultāciju par iekārtām.",
    finalCtaBody: "Mēs pielāgosim sanza jūsu telpu izkārtojumam un pacientu plūsmai — bez saistībām.",
    finalCtaPrimary: "Piesakieties uz konsultāciju par iekārtām"
  },
  "spa-wellness": {
    segmentName: "Dienas spa un veselības centri",
    metaTitle: "Dienas spa un veselības centri | sanza × Nordora Vital",
    metaDescription: "Augstākās klases, uz tehnoloģijām balstīta veselības pieredze dienas spa un veselības centriem, kas vēlas izveidot neaizmirstamu, unikālu piedāvājumu.",
    heroImage: "/images/campaign/day-spa-hero.jpg",
    heroTextAlign: "left",
    heroKicker: "Spa centriem, kur viesu pieredze ir pats produkts",
    heroHeadline: "Piedāvājiet viesiem tādu veselības pieredzi, kādu viņi nevar gūt visur.",
    heroSubhead: "Jūsu spa jau tagad rada atmosfēru, rūpes un iespēju atslābināties. <strong>sanza</strong> palīdzēs jums pievienot kaut ko, ko viesi uzreiz uztvers kā kaut ko īpašu: klusu, uz tehnoloģijām balstītu labsajūtas pieredzi, kas palīdzēs viņiem atjaunot spēkus, atslābināties un justies patiesi aprūpētiem.\r\n\r\nTas kļūst par izsmalcinātu procedūru brīdi, kam nav nepieciešama terapeita pastāvīga klātbūtne, sarežģīti protokoli vai darbības spiediens. Vienkāršs papildinājums, kas padara jūsu spa izcilāku, pilnīgāku un tādu, kurā ir vērts atgriezties.",
    heroCtaPrimary: "Atklājiet „sanza“ savam spa",
    heroValueProps: [
      "Demonstrācija uz vietas",
      "Skaidras uzstādīšanas instrukcijas",
      "Nav nepieciešams pārveidot darba plūsmu"
    ],
    contactCategory: "beauty-cosmetic",
    demoRequestMessage: "Es vēlos pieteikties uz „sanza“ demonstrāciju un saņemt vairāk informācijas par dienas spa un veselības centriem.",
    quickStats: [
      {
        value: "15",
        label: "Augstākās kvalitātes labsajūtas programmas"
      },
      {
        value: "1",
        label: "Vienkārša sistēma, ko var pārvaldīt jūsu komanda"
      },
      {
        value: "10 min",
        label: "Lai panāktu dziļāku atjaunošanos"
      },
      {
        value: "0",
        label: "Spiediens uz terapeitu darba slodzi"
      }
    ],
    problemEyebrow: "Dodiet pastāvīgajiem viesiem jaunu iemeslu, lai viņi būtu pārsteigti.",
    problemTitle: "Jūsu labākie viesi jau uzticas jūsu spa.",
    problemBody: "Viņi pazīst jūsu procedūras, jūsu terapeitus, jūsu atmosfēru un jūsu aprūpes standartu. Tāpēc viņi atgriežas.\r\n\r\nTaču lojalitāte rada arī augstākas prasības.\r\n\r\nKādu brīdi vairs nepietiek ar vēl vienu masāžu, sejas procedūru vai sezonas rituālu, lai justos kā no jauna. Jūsu viesi vēlas to pašu izcilību, ko viņi mīl — papildinātu ar jaunu atklājumu slāni, dziļumu un uztveramo vērtību.\r\n\r\n<strong>sanza</strong> palīdz jums pievienot šo nākamo slāni, nepaplašinot komandu, nepārbūvējot telpas un neuzliekot papildu spiedienu terapeitiem. Tas sniedz viesiem augstākās klases, uz tehnoloģijām balstītu labsajūtas pieredzi, ko viņi var izjust uzreiz: klusu, dziļu, neaizmirstamu un atšķirīgu no parastā spa piedāvājuma.\r\n\r\nTas nav aizstājējs tam, kas jau darbojas.\r\nTā ir spēcīgāka iemesla dēļ, kāpēc lojāliem viesiem ir vērts teikt: „Tev tas ir jāizmēģina.”",
    problemImage: "/images/campaign/day-spa-block-1.jpg",
    solutionEyebrow: "„Sanza“ slānis",
    solutionTitle: "„Sanza“: pieredze, kādu viņi vēl nav piedzīvojuši — nekur citur.",
    solutionBody: "„Sanza“ seansā tiek izmantotas strukturētas PEMF frekvenču programmas, lai radītu visam ķermenim dziļu, mierīgu atslābumu, ko viesi nevar viegli izskaidrot, bet ko viņi uzreiz vēlas atkārtot. Tas nav siltums. Tas nav spiediens. Tas ir kaut kas, kas atrodas zem abiem — rezonanse, kas liek justies, it kā ķermenis beidzot atcerētos, kā apstāties. Pozicionējiet to kā savu premium līmeņa piedāvājumu. Nosauciet to pēc saviem ieskatiem. Ļaujiet rezultātiem veikt mārketingu.",
    solutionSpecs: [
      {
        title: "PEMF",
        body: "Impulsu elektromagnētiskais lauks — maigs, neinvazīvs."
      },
      {
        title: "Hronobioloģisks",
        body: "Frekvenču programmas, kas pielāgotas ķermeņa ritmiem."
      },
      {
        title: "Modulārs",
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori dažādām telpām."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu spa",
    fitsEyebrow: "Integrācija",
    fitsLead: "Daži vienkārši saskares punkti ap darbu, ko jau veicat. Pieredze mainās, bet jūsu galvenais pakalpojums paliek jūsu.",
    fitsImages: [
      "/images/campaign/day-spa-fit-signature.jpg",
      "/images/campaign/day-spa-fit-treatment-enhancer.jpg",
      "/images/campaign/day-spa-fit-membership.jpg",
      "/images/campaign/day-spa-fit-retail.jpg"
    ],
    fitsItems: [
      {
        title: "60 minūšu firmas seanss",
        body: "Augsta peļņas norma, zemas izmaksas, gaidīšanas saraksts jau pāris nedēļas pēc atklāšanas."
      },
      {
        title: "Procedūras papildinājums",
        body: "15 minūšu sanza procedūra pirms masāžas vai sejas procedūras — papildus pakalpojums, ko viesi pēc pirmās reizes pieprasa vārdā."
      },
      {
        title: "Biedru programma",
        body: "Iekļaujiet sanza piekļuvi savā premium biedru programmā — tas ir pamats klientu piesaistīšanai un izdevumiem uz vienu biedru."
      },
      {
        title: "Mazumtirdzniecības paplašināšana",
        body: "Viesi, kam patīk šī tehnoloģija, interesējas par ierīcēm mājām — tas ir dabisks sarunas pavērsiens, ko atbalsta Nordora Vital."
      }
    ],
    whatChangesTitle: "Kas mainās, kad sanza pievienojas jūsu telpām",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu viesiem",
    whatChangesPatientsItems: [
      "Pieredze, kādu viņi vēl nav piedzīvojuši un kāpēc atgriezīsies",
      "Viesi veic atkārtotu rezervāciju, pirms pamet ēku — pastāvīgi"
    ],
    whatChangesPracticeTitle: "Jūsu spa",
    whatChangesPracticeItems: [
      "Firmveida piedāvājums, kas rada pieprasījumu, ko nevar atkārtot neviens mārketinga budžets",
      "Premium cenas, ko atbalsta patiesi premium pieredze",
      "Mazumtirdzniecības ieņēmumi no viesiem, kuri vēlas pagarināt pieredzi mājās"
    ],
    whatChangesPracticeImage: "/images/campaign/day-spa-hero.jpg",
    socialProofLabel: "Kāpēc partneri vēlas to redzēt",
    socialProofQuote: "Viesi, kuri to izmēģina vienreiz, veic atkārtotu rezervāciju, pirms pamet ēku.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācija, kas veidota atbilstoši jūsu vidē.",
    demoStepsLead: "Bez spiediena, bez vispārīgiem pārdošanas trikiem. Pastāstiet mums, kā darbojas jūsu telpa, un mēs parādīsim, kur Sanza varētu iederēties, pirms pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss saskaņošanas zvans",
        body: "Mēs noskaidrosim jūsu vidi, telpu plūsmu, mērķauditoriju un jautājumus, uz kuriem vēlaties saņemt atbildes."
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināsiet programmas, aplikatorus un uzstādīšanu vidē, kas ir tuvu jūsu ikdienas darbam."
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja tas der, mēs izklāstīsim ieteicamo uzstādīšanu, ieviešanas procesu un cenas. Ja nē, jūs joprojām saņemsiet informāciju."
      }
    ],
    finalCtaTitle: "Runājiet ar mums par sanza ieviešanu jūsu spa.",
    finalCtaBody: "Jūsu iestādei pielāgota prezentācija — bez maksas.",
    finalCtaPrimary: "Runājiet ar mums par sanza ieviešanu"
  }
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
