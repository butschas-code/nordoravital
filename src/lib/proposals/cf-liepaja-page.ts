import type { CampaignPageContent } from "@/types/campaign-page";

/** Prefilled contact-drawer text (matches mailto intent in cf-liepaja.ts). */
const DEMO_CONTACT_LV =
  "CF Liepāja — vēlamies vienoties par sanza demonstrāciju un pārrunāt, kā vienas nedēļas izmēģinājums varētu darboties jūsu klubā. Lūdzam ierosināt laiku zvanam.";
const DEMO_CONTACT_EN =
  "CF Liepāja — we would like to arrange a sanza demonstration and explore how a one-week trial could work at your facility. Please suggest a time for a call.";
const TRIAL_CONTACT_LV =
  "CF Liepāja — vēlamies pārrunāt vienas nedēļas sanza izmēģinājumu. Lūdzam komerciālos noteikumus izklāstīt zvanā.";
const TRIAL_CONTACT_EN =
  "CF Liepāja — we would like to discuss a one-week sanza trial. Please outline the commercial terms on a call.";

const IMAGES = {
  hero: "/images/proposals/cf-liepaja/gym-floor.webp",
  equipment: "/images/proposals/cf-liepaja/setup-station.webp",
  journey: "/images/proposals/cf-liepaja/journey.webp",
  member: "/images/proposals/cf-liepaja/hero-session.webp",
  corner: "/images/proposals/cf-liepaja/corner-club.webp",
} as const;

/** Same content shape as the professional sales pages, written for CF Liepāja. */
export const cfLiepajaPage: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "Jauna atjaunošanās pieredze CF Liepāja klubā — sanza — Nordora Vital",
  metaDescription:
    "Koncepts, kā sanza stacija varētu izskatīties CF Liepāja zālē: programmas, biedru pieredze un ilustratīvs ieņēmumu piemērs — demonstrācija un izmēģinājums pēc vienošanās.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Sagatavots CF Liepāja",
  heroHeadline: "Jauna atjaunošanās pieredze\nCF Liepāja klubā.",
  heroSubhead:
    "Dodiet biedriem īpašu labsajūtas pieredzi pirms vai pēc treniņa — vienlaikus veidojot papildu ieņēmumu iespēju klubam.",
  heroCtaPrimary: "Iepazīties ar konceptu",
  heroCtaPrimaryHref: "#campaign-problem-heading",
  heroCtaSecondary: "Vienoties par demonstrāciju",
  heroCtaSecondaryContactMessage: DEMO_CONTACT_LV,
  primaryContactDrawerLabel: "Vienoties par demonstrāciju",
  heroValueProps: ["16 min", "SANZA", "CF Liepāja"],
  contactCategory: "sports-performance",
  demoRequestMessage: DEMO_CONTACT_LV,
  trialRequestMessage: TRIAL_CONTACT_LV,
  quickStats: [
    { value: "16 min", label: "strukturēta sesija" },
    { value: "5", label: "programmas šim fokusam" },
    { value: "€", label: "ilustratīvs piemērs" },
    { value: "Zvans", label: "demonstrācija un izmēģinājums" },
  ],
  problemEyebrow: "Izvietojums zālē",
  problemTitle: "Viena kompakta SANZA stacija. Pielāgojama jūsu telpai.",
  problemBody:
    "Iespaidojieties, kā biedri varētu izmantot īpašu labsajūtas pieredzi tieši CF Liepāja zālē: ērts sanza MAT, kompakts kontrolleris un izkārtojums, ko pielāgot pieejamajai telpai.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  problemImageCaption:
    "Koncepta vizualizācija — piemēra izvietojums, nevis esošā iekārta CF Liepāja.",
  disclosureFooter:
    "<strong>sanza</strong> ir labsajūtas tehnoloģija, nevis medicīniska ārstēšana. Piedāvājums nav paredzēts bērnu un jauniešu boksa grupām.",
  technologySection: {
    eyebrow: "Tehnoloģija",
    title: "Vairāk nekā vienkārša atpūta.",
    intro:
      "SANZA apvieno impulsa elektromagnētisko lauku (PEMF) tehnoloģiju ar izvēlamām labsajūtas programmām, veidojot strukturētu pieredzi, kas vērsta uz relaksāciju un labbūtību.",
    pemfLine:
      "PEMF nozīmē vadāmus, zema līmeņa frekvenču elektromagnētiskus impulsus, kas tiek nodoti caur MAT.",
    highlights: [
      {
        label: "Tehnoloģija",
        body: "Programmētas PEMF pieredzes, ko nodrošina sanza sistēma.",
      },
      {
        label: "Ērtums",
        body: "Biedri paliek pilnībā apģērbti un atpūšas uz MAT.",
      },
      {
        label: "Vienkāršība",
        body: "Vienkārša programmas izvēle un laika kontrolēta sesija.",
      },
    ],
  },
  solutionEyebrow: "Programmas",
  solutionTitle: "Komanda iepazīstas vienreiz. Pēc tam viss notiek vienkārši.",
  solutionBody:
    "Pieejamas labsajūtas programmas, kas pielāgotas sporta videi. Katrai sesijai ir skaidrs, laika kontrolēts formāts.",
  solutionPrograms: [
    { name: "Sport", detail: "Aktivizācija pirms aktivitātes" },
    { name: "Vital", detail: "Rīta aktivizācija" },
    { name: "Alpha", detail: "Mierīga koncentrēšanās un gatavība" },
    { name: "Relax", detail: "Atjaunojoša atbalsta programma" },
    { name: "Anti-Stress", detail: "Līdzsvarojoša relaksācija" },
  ],
  solutionClosingStatement:
    "Biedrs izvēlas piemērotu programmu un izbauda strukturētu sesiju. Klubs izlemj, kā sesijas tiek piedāvātas un ieplānotas.",
  fitsEyebrow: "Biedru pieredze",
  fitsTitle: "Labsajūtas pieredze, kas iekļaujas treniņu rutīnā.",
  fitsLead: "Trīs veidi, kā šo piedāvāt biedriem atbilstoši jūsu grafikam.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Pirms treniņa",
      body:
        "Biedri var atvēlēt brīdi, lai nomierinātos un gatavotos pirms HYROX, funkcionālā treniņa vai boksa nodarbības.",
    },
    {
      title: "Pēc treniņa",
      body:
        "Dodiet biedriem ērtu vietu, kur atslābināties un izbaudīt īpašu labsajūtas pieredzi pēc prasīga treniņa.",
    },
    {
      title: "Atsevišķa labsajūtas sesija",
      body:
        "Piedāvājiet SANZA kā patstāvīgu labsajūtas pakalpojumu neatkarīgi no nodarbību grafika.",
    },
  ],
  whatChangesEyebrow: "Integrācija",
  whatChangesTitle: "Vienkārši ieviest. Viegli integrēt.",
  whatChangesPatientsTitle: "Jūsu biedriem",
  whatChangesPatientsItems: [
    "Ērta pieredze, paliekot apģērbtiem",
    "Vienkārša programmas izvēle uz kontrollera",
    "Īpaša labsajūtas pieredze tieši zālē",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "Jūsu klubam",
  whatChangesPracticeItems: [
    "Kompaktas uzstādīšanas iespējas",
    "Elastīga pierakstu un grafika organizēšana",
    "Viegli lietojama ikdienā pēc komandas iepazīstināšanas; uzraudzība un uzturēšana pēc jūsu kluba kārtības",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote: "",
  socialProofAttribution: "Nordora Vital · piedāvājums CF Liepāja",
  demoStepsEyebrow: "Ieņēmumi",
  demoStepsTitle: "Jauna pieredze biedriem. Jauna ieņēmumu iespēja CF Liepāja.",
  demoStepsLead:
    "Kalkulators rāda piemēru: €10 × 5 sesijas dienā × 22 dienas = €1 100 bruto mēnesī. Pieprasījums un rentabilitāte atkarīga no cenas, noslogojuma, iekārtas izmaksām un izdevumiem.",
  demoStepsSecondaryCta: "Pārrunāt vienas nedēļas izmēģinājumu",
  demoStepsSecondaryContactMessage: TRIAL_CONTACT_LV,
  demoSteps: [
    {
      title: "Atsevišķa maksas sesija",
      body: "Biedrs iegādājas vienu sesiju pirms vai pēc treniņa pēc jūsu cenrāža.",
    },
    {
      title: "Priekšapmaksāts sesiju komplekts",
      body: "Regulārs biedrs iegādājas vairākas sesijas un izmanto tās pēc pieraksta.",
    },
    {
      title: "Premium abonementa uzlabojums",
      body: "Noteiktā abonementā iekļauts saskaņots sesiju skaits; nosacījumus nosaka kopā ar klubu.",
    },
  ],
  finalCtaTitle: "Uzziniet, ko SANZA varētu dot CF Liepāja.",
  finalCtaBody:
    "Vienosimies par demonstrāciju un pārrunāsim, kā vienas nedēļas izmēģinājums varētu darboties jūsu telpā. Novērtējiet sistēmu klātienē un izvērtējiet, vai tā atbilst jūsu biedriem un biznesam.",
  finalCtaPrimary: "Vienoties par SANZA demonstrāciju",
  finalCtaPrimaryContactMessage: DEMO_CONTACT_LV,
  finalCtaSecondary: "Pārrunāt vienas nedēļas izmēģinājumu",
  finalCtaSecondaryContactMessage: TRIAL_CONTACT_LV,
};

export const cfLiepajaPageEn: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "A new recovery experience for CF Liepāja — sanza — Nordora Vital",
  metaDescription:
    "Concept for how a sanza station could look at CF Liepāja: programs, member experience, and an illustrative revenue example — demonstration and trial by arrangement.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Prepared for CF Liepāja",
  heroHeadline: "A new recovery experience\nfor CF Liepāja.",
  heroSubhead:
    "Give your members a dedicated wellness experience before or after training — while creating an additional revenue opportunity for your club.",
  heroCtaPrimary: "Explore the concept",
  heroCtaPrimaryHref: "#campaign-problem-heading",
  heroCtaSecondary: "Arrange a demonstration",
  heroCtaSecondaryContactMessage: DEMO_CONTACT_EN,
  primaryContactDrawerLabel: "Arrange a demonstration",
  heroValueProps: ["16 min", "SANZA", "CF Liepāja"],
  contactCategory: "sports-performance",
  demoRequestMessage: DEMO_CONTACT_EN,
  trialRequestMessage: TRIAL_CONTACT_EN,
  quickStats: [
    { value: "16 min", label: "structured session" },
    { value: "5", label: "programs in this focus" },
    { value: "€", label: "illustrative example" },
    { value: "Call", label: "demo and trial" },
  ],
  problemEyebrow: "In the gym",
  problemTitle: "One compact SANZA station. Designed for your space.",
  problemBody:
    "Imagine offering your members a dedicated wellness experience directly inside CF Liepāja — a comfortable sanza MAT, a compact controller, and a layout adapted to the space you have.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  problemImageCaption:
    "Concept visualization — example installation, not existing equipment at CF Liepāja.",
  disclosureFooter:
    "<strong>sanza</strong> is wellness technology, not medical treatment. This offer is not intended for junior boxing groups.",
  technologySection: {
    eyebrow: "Technology",
    title: "More than a place to rest.",
    intro:
      "SANZA combines pulsed electromagnetic field (PEMF) technology with selectable wellness programs, creating a structured experience focused on relaxation and well-being.",
    pemfLine: "PEMF uses controlled, low-frequency electromagnetic pulses delivered through the MAT.",
    highlights: [
      {
        label: "Technology",
        body: "Programmed PEMF experiences delivered through the sanza system.",
      },
      {
        label: "Comfort",
        body: "Members remain fully clothed and relax on the MAT.",
      },
      {
        label: "Simplicity",
        body: "Straightforward program selection and a timed session format.",
      },
    ],
  },
  solutionEyebrow: "Programs",
  solutionTitle: "The team learns it once. The program then runs itself.",
  solutionBody:
    "Wellness programs suited to a sports environment. Each session follows a clear, time-based format.",
  solutionPrograms: [
    { name: "Sport", detail: "Activation before activity" },
    { name: "Vital", detail: "Morning activation" },
    { name: "Alpha", detail: "Calm focus and readiness" },
    { name: "Relax", detail: "Regeneration-style support" },
    { name: "Anti-Stress", detail: "Balancing relaxation" },
  ],
  solutionClosingStatement:
    "Members select a suitable program and enjoy a structured session. The club decides how sessions are offered and scheduled.",
  fitsEyebrow: "Member experience",
  fitsTitle: "A wellness experience that fits their training routine.",
  fitsLead: "Three ways to offer this alongside your schedule.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Before training",
      body:
        "Members can take a moment to relax and prepare mentally before their HYROX, functional fitness, or boxing session.",
    },
    {
      title: "After training",
      body:
        "Give members a comfortable place to unwind and enjoy a dedicated wellness experience after demanding training.",
    },
    {
      title: "Dedicated wellness session",
      body: "Offer SANZA as a standalone wellness service, independent of the class schedule.",
    },
  ],
  whatChangesEyebrow: "Integration",
  whatChangesTitle: "Simple to introduce. Easy to integrate.",
  whatChangesPatientsTitle: "For your members",
  whatChangesPatientsItems: [
    "Comfortable, fully clothed sessions",
    "Straightforward program selection on the controller",
    "A dedicated wellness experience in the gym",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "For your club",
  whatChangesPracticeItems: [
    "Compact installation options",
    "Flexible scheduling and booking",
    "Straightforward day-to-day use after staff onboarding — supervision and maintenance according to your club’s policy",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote: "",
  socialProofAttribution: "Nordora Vital · proposal for CF Liepāja",
  demoStepsEyebrow: "Revenue",
  demoStepsTitle: "A new experience for members. A new revenue opportunity for CF Liepāja.",
  demoStepsLead:
    "The calculator shows an example: €10 × 5 sessions a day × 22 days = €1,100 gross per month. Demand and profitability depend on pricing, utilization, equipment costs, and operating expenses.",
  demoStepsSecondaryCta: "Discuss a one-week trial",
  demoStepsSecondaryContactMessage: TRIAL_CONTACT_EN,
  demoSteps: [
    {
      title: "Individual paid sessions",
      body: "A member pays for a session before or after training at your published price.",
    },
    {
      title: "Prepaid session packages",
      body: "A regular member buys several sessions and uses them by booking.",
    },
    {
      title: "Premium membership upgrades",
      body: "A chosen membership includes an agreed number of sessions; terms are set with the club.",
    },
  ],
  finalCtaTitle: "See what SANZA could bring to CF Liepāja.",
  finalCtaBody:
    "Let’s arrange a demonstration and explore how a one-week trial could work at your facility. Experience the system firsthand and evaluate whether it fits your members and your business.",
  finalCtaPrimary: "Arrange a SANZA demonstration",
  finalCtaPrimaryContactMessage: DEMO_CONTACT_EN,
  finalCtaSecondary: "Discuss a one-week trial",
  finalCtaSecondaryContactMessage: TRIAL_CONTACT_EN,
};

export function cfLiepajaContent(locale: string): CampaignPageContent {
  return locale === "en" ? cfLiepajaPageEn : cfLiepajaPage;
}
