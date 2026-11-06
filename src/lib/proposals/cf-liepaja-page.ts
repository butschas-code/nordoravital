import type { CampaignPageContent } from "@/types/campaign-page";
import { trialMailto } from "@/lib/proposals/cf-liepaja";

const TRIAL = trialMailto();
const TRIAL_EN = trialMailto("en");

const IMAGES = {
  hero: "/images/proposals/cf-liepaja/gym-floor.webp",
  equipment: "/images/proposals/cf-liepaja/setup-station.webp",
  journey: "/images/proposals/cf-liepaja/journey.webp",
  member: "/images/proposals/cf-liepaja/hero-session.webp",
  corner: "/images/proposals/cf-liepaja/corner-club.webp",
} as const;

const PROGRAMS_LV = [
  { name: "Sport", detail: "Aktivizācija pirms aktivitātes" },
  { name: "Vital", detail: "Rīta aktivizācija" },
  { name: "Alpha", detail: "Mierīga koncentrēšanās un gatavība" },
  { name: "Relax", detail: "Atjaunojoša atbalsta programma" },
  { name: "Anti-Stress", detail: "Līdzsvarojoša relaksācija" },
] as const;

const PROGRAMS_EN = [
  { name: "Sport", detail: "Activation before activity" },
  { name: "Vital", detail: "Morning activation" },
  { name: "Alpha", detail: "Calm focus and readiness" },
  { name: "Relax", detail: "Regeneration-style support" },
  { name: "Anti-Stress", detail: "Balancing relaxation" },
] as const;

/** Same content shape as the professional sales pages, written for CF Liepāja. */
export const cfLiepajaPage: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "16 minūšu sesija CF Liepāja klubā — Nordora Vital",
  metaDescription:
    "sanza CF Liepāja: 16 minūšu sesija. Vienas nedēļas izmēģinājums. Noteikumus pārrunājam zvanā.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Sagatavots CF Liepāja",
  heroHeadline: "Viena stacija. Viens biedrs.\n16 minūšu sesija.",
  heroSubhead:
    "Pēc HYROX, funkcionālā treniņa vai pieaugušo boksa biedrs apguļas uz MAT un palaiž programmu. Sesija ir 16 minūtes. Personālam nav jābūt klāt.",
  heroNote:
    "Koncepta vizualizācija. Attēli rāda iespējamo izvietojumu, nevis uzstādītu iekārtu.",
  heroCtaPrimary: "Vienas nedēļas izmēģinājums",
  heroCtaSecondary: "Noteikumi zvanā",
  heroCtaSecondaryHref: TRIAL,
  heroValueProps: ["16 min", "1 biedrs", "1 nedēļa"],
  contactCategory: "sports-performance",
  demoRequestMessage:
    "CF Liepāja — vēlamies pārrunāt vienas nedēļas sanza izmēģinājumu. Noteikumus gribam noskaidrot zvanā.",
  quickStats: [
    { value: "16 min", label: "sesija" },
    { value: "1", label: "biedrs uz stacijas" },
    { value: "1 nedēļa", label: "izmēģinājums" },
    { value: "Zvans", label: "noteikumi tiek pārrunāti" },
  ],
  problemEyebrow: "Kā tas izskatās zālē",
  problemTitle: "Stacija blakus treniņam, nevis tā vietā.",
  problemBody:
    "Viena MAT vieta un kontrolleris. Biedrs paliek apģērbts un apguļas. Vienā brīdī uz stacijas ir viens cilvēks.\n\n<strong>sanza</strong> ir labsajūtas tehnoloģija, nevis medicīniska ārstēšanas metode. Bērnu un jauniešu boksa grupām šo nepiedāvājam.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  solutionEyebrow: "Kas notiek sesijā",
  solutionTitle: "Komanda iemācās vienreiz. Programma pēc tam iet pati.",
  solutionBody:
    "Sporta klubam: Sport, Vital, Alpha, Relax un Anti-Stress. Katra sesija ir 16 minūtes.",
  solutionPrograms: [...PROGRAMS_LV],
  solutionSpecs: [
    {
      title: "Programma",
      body: "Sport, Vital, Alpha, Relax un Anti-Stress. Sesija ir 16 minūtes.",
    },
    {
      title: "Palaišana",
      body: "Biedrs var palaist programmu pats. Personālam nav jābūt klāt katrā sesijā.",
    },
    {
      title: "Izmēģinājums",
      body: "Viena nedēļa. Noteikumus pārrunājam zvanā.",
    },
  ],
  fitsEyebrow: "Trīs reāli brīži CF Liepāja dienā",
  fitsTitle: "Pirms treniņa, pēc treniņa vai atsevišķs laiks.",
  fitsLead: "Viena stacija, viens biedrs. Sesija ir 16 minūtes.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Pirms treniņa",
      body: "16 minūtes. Sport vai Alpha. Tad HYROX, funkcionālais treniņš vai bokss.",
    },
    {
      title: "Pēc treniņa",
      body: "16 minūtes. Relax vai Anti-Stress. Treniņa grafiks nemainās.",
    },
    {
      title: "Atsevišķs laiks",
      body: "Savs 16 minūšu laiks. Uz stacijas ir viens biedrs.",
    },
  ],
  whatChangesEyebrow: "Kas ko dara",
  whatChangesTitle: "Klubs izlemj, kurš palaiž sesiju.",
  whatChangesPatientsTitle: "Biedrs",
  whatChangesPatientsItems: [
    "Var apgulties un palaist programmu pats",
    "Sesija ir 16 minūtes",
    "Personāls nav obligāts",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "Ja klubs tā grib",
  whatChangesPracticeItems: [
    "Var iepazīstināt komandu ar kontrolleri",
    "Palaišanai nav jāpaliek personālam",
    "Vienā brīdī viens pieaugušais biedrs. Ne junioru boksa grupas",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote: "Sesija ir 16 minūtes. Vienas nedēļas izmēģinājums. Noteikumus pārrunājam zvanā.",
  socialProofAttribution: "Nordora Vital · piedāvājums CF Liepāja",
  demoStepsEyebrow: "Kā sākt",
  demoStepsTitle: "Vienas nedēļas izmēģinājums.",
  demoStepsLead: "Noteikumus pārrunājam zvanā.",
  demoSteps: [
    {
      title: "Zvans",
      body: "Pārrunājam vienas nedēļas izmēģinājuma noteikumus.",
    },
    {
      title: "Izmēģinājums",
      body: "Viena nedēļa klubā.",
    },
    {
      title: "Sesija",
      body: "Katra sesija ir 16 minūtes. Biedrs var palaist programmu pats.",
    },
  ],
  finalCtaTitle: "Vienas nedēļas izmēģinājums.",
  finalCtaBody: "Noteikumus pārrunājam zvanā.",
  finalCtaPrimary: "Vienas nedēļas izmēģinājums",
  finalCtaSecondary: "Noteikumi zvanā",
  finalCtaSecondaryHref: TRIAL,
};

export const cfLiepajaPageEn: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "A 16-minute session for CF Liepāja — Nordora Vital",
  metaDescription:
    "sanza at CF Liepāja: a 16-minute session. A one-week trial. The terms are discussed on a call.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Prepared for CF Liepāja",
  heroHeadline: "One station. One member.\nA 16-minute session.",
  heroSubhead:
    "After HYROX, functional training, or adult boxing, a member lies on the MAT and starts a program. Each session is 16 minutes. Staff do not have to be there.",
  heroNote: "Concept visualization. The images show a possible layout, not installed equipment.",
  heroCtaPrimary: "One-week trial",
  heroCtaSecondary: "Terms on a call",
  heroCtaSecondaryHref: TRIAL_EN,
  heroValueProps: ["16 min", "1 member", "1 week"],
  contactCategory: "sports-performance",
  demoRequestMessage:
    "CF Liepāja — we want to discuss a one-week sanza trial. We want the terms on a call.",
  quickStats: [
    { value: "16 min", label: "session" },
    { value: "1", label: "member on the station" },
    { value: "1 week", label: "trial" },
    { value: "Call", label: "terms are discussed" },
  ],
  problemEyebrow: "How it sits in the gym",
  problemTitle: "A station beside training, not instead of it.",
  problemBody:
    "One MAT and the controller. The member stays dressed and lies down. One person at a time.\n\n<strong>sanza</strong> is wellness technology, not a medical treatment. We do not offer this to junior boxing groups.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  solutionEyebrow: "What a session actually is",
  solutionTitle: "The team learns it once. The program then runs itself.",
  solutionBody:
    "For a sports club: Sport, Vital, Alpha, Relax and Anti-Stress. Each session is 16 minutes.",
  solutionPrograms: [...PROGRAMS_EN],
  solutionSpecs: [
    {
      title: "Program",
      body: "Sport, Vital, Alpha, Relax and Anti-Stress. The session is 16 minutes.",
    },
    {
      title: "Start",
      body: "A member can start the program. Staff do not have to be there for every session.",
    },
    {
      title: "Trial",
      body: "One week. The terms are discussed on a call.",
    },
  ],
  fitsEyebrow: "Three real moments in a CF Liepāja day",
  fitsTitle: "Before training, after training, or a slot of its own.",
  fitsLead: "One station, one member. The session is 16 minutes.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Before training",
      body: "16 minutes. Sport or Alpha. Then HYROX, functional training, or boxing.",
    },
    {
      title: "After training",
      body: "16 minutes. Relax or Anti-Stress. The class schedule does not change.",
    },
    {
      title: "A slot of its own",
      body: "Its own 16 minutes. One member on the station.",
    },
  ],
  whatChangesEyebrow: "Who does what",
  whatChangesTitle: "The club decides who starts the session.",
  whatChangesPatientsTitle: "Member",
  whatChangesPatientsItems: [
    "Can lie down and start the program",
    "The session is 16 minutes",
    "Staff are not required",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "If the club wants",
  whatChangesPracticeItems: [
    "The team can be shown the controller",
    "Start does not have to stay with staff",
    "One adult member at a time. Not the junior boxing groups",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote:
    "The session is 16 minutes. A one-week trial. The terms are discussed on a call.",
  socialProofAttribution: "Nordora Vital · proposal for CF Liepāja",
  demoStepsEyebrow: "How to start",
  demoStepsTitle: "A one-week trial.",
  demoStepsLead: "The terms are discussed on a call.",
  demoSteps: [
    {
      title: "Call",
      body: "We discuss the terms of a one-week trial.",
    },
    {
      title: "Trial",
      body: "One week at the club.",
    },
    {
      title: "Session",
      body: "Each session is 16 minutes. A member can start the program.",
    },
  ],
  finalCtaTitle: "A one-week trial.",
  finalCtaBody: "The terms are discussed on a call.",
  finalCtaPrimary: "One-week trial",
  finalCtaSecondary: "Terms on a call",
  finalCtaSecondaryHref: TRIAL_EN,
};

export function cfLiepajaContent(locale: string): CampaignPageContent {
  return locale === "en" ? cfLiepajaPageEn : cfLiepajaPage;
}
