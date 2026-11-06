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

/** Same content shape as the professional sales pages, written for CF Liepāja. */
export const cfLiepajaPage: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "Jauna labsajūtas pieredze CF Liepāja klubā — Nordora Vital",
  metaDescription:
    "sanza CF Liepāja: 16 minūšu sesija uz MAT, programmas sporta klubam un vienas nedēļas izmēģinājums. Noteikumus pārrunājam zvanā.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Sagatavots CF Liepāja",
  heroHeadline: "Viena stacija. Viens biedrs.\n16 minūšu sesija.",
  heroSubhead:
    "Pēc HYROX, funkcionālā treniņa vai pieaugušo boksa biedrs apguļas uz MAT. Programmu palaiž biedrs. Sesija ir 16 minūtes. Personālam nav jābūt klāt.",
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
    { value: "MAT", label: "viena vieta zālē" },
    { value: "1 nedēļa", label: "izmēģinājums" },
  ],
  problemEyebrow: "Kā tas izskatās zālē",
  problemTitle: "Stacija blakus treniņam, nevis tā vietā.",
  problemBody:
    "Viena MAT vieta, kontrolleris uz galdiņa, PAD tikai tad, ja izvēlaties lokālu aplikatoru. Biedrs paliek apģērbts un apguļas. Vienā brīdī uz stacijas ir viens cilvēks.\n\n<strong>sanza</strong> ir labsajūtas tehnoloģija, nevis medicīniska ārstēšanas metode. Bērnu un jauniešu boksa grupām šo nepiedāvājam.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  solutionEyebrow: "Kas notiek sesijā",
  solutionTitle: "Komanda iemācās vienreiz. Programma pēc tam iet pati.",
  solutionBody:
    "Sesija ir 16 minūtes uz MAT. Sporta klubam: Sport, Vital, Alpha, Relax un Anti-Stress. Biedrs izvēlas programmu un palaiž to. Personālam nav jābūt klāt.",
  solutionPrograms: [
    { name: "Sport", detail: "Aktivizācija pirms aktivitātes" },
    { name: "Vital", detail: "Rīta aktivizācija" },
    { name: "Alpha", detail: "Mierīga koncentrēšanās un gatavība" },
    { name: "Relax", detail: "Atjaunojoša atbalsta programma" },
    { name: "Anti-Stress", detail: "Līdzsvarojoša relaksācija" },
  ],
  solutionSpecs: [
    {
      title: "Programma",
      body: "Sport, Vital, Alpha, Relax un Anti-Stress. Sesija ir 16 minūtes.",
    },
    {
      title: "Palaišana",
      body: "Biedrs apguļas un palaiž programmu. Personāls var būt klāt, bet tas nav vajadzīgs.",
    },
    {
      title: "Vieta",
      body: "Viena MAT vieta un kontrolleris. PAD tikai tad, ja izvēlaties lokālu aplikatoru. Vienā brīdī viens biedrs.",
    },
  ],
  fitsEyebrow: "Trīs reāli brīži CF Liepāja dienā",
  fitsTitle: "Pirms treniņa, pēc treniņa vai atsevišķs laiks.",
  fitsLead:
    "Viena stacija, viens biedrs. Sesija ir 16 minūtes. Cik sesiju dienā sanāk, atkarīgs no tā, kā klubs iedod laiku. Kalkulators zemāk ir piemērs, nevis prognoze.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Pirms treniņa",
      body: "16 minūtes. Sport pirms aktivitātes vai Alpha mierīgai koncentrēšanai un gatavībai. Tad HYROX, funkcionālais treniņš vai bokss.",
    },
    {
      title: "Pēc treniņa",
      body: "16 minūtes uz MAT. Relax vai Anti-Stress. Biedrs pieceļas un iet prom. Treniņa grafiks nemainās.",
    },
    {
      title: "Atsevišķs laiks",
      body: "Savs 16 minūšu laiks starp treniņiem. Uz stacijas ir viens biedrs. Kā šo laiku iedod, izlemj klubs.",
    },
  ],
  whatChangesEyebrow: "Kas ko dara",
  whatChangesTitle: "Klubs izlemj, kurš palaiž sesiju.",
  whatChangesPatientsTitle: "Biedrs",
  whatChangesPatientsItems: [
    "Apguļas apģērbts uz MAT. PAD liek tikai tad, ja šī konfigurācija ir izvēlēta",
    "Palaiž programmu pats. Sesija ir 16 minūtes",
    "Personāls nav obligāts",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "Ja klubs tā grib",
  whatChangesPracticeItems: [
    "MAT un kontrolleris var stāvēt atsevišķi no treniņu zonas",
    "Komandu var iepazīstināt ar kontrolleri. Palaišanai nav jāpaliek personālam",
    "Vienā brīdī viens pieaugušais biedrs. Ne junioru boksa grupas",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote: "Sesija ir 16 minūtes. Vienas nedēļas izmēģinājums. Noteikumus pārrunājam zvanā.",
  socialProofAttribution: "Nordora Vital · piedāvājums CF Liepāja",
  demoStepsEyebrow: "Kā klubs to var piedāvāt",
  demoStepsTitle: "Trīs veidi, kā 16 minūšu sesiju pārvērst ieņēmumos.",
  demoStepsLead:
    "Kalkulators augstāk rāda piemēru: €10 × 5 sesijas dienā × 22 dienas = €1 100 bruto mēnesī. Tas nav pieprasījuma solījums un nav peļņa. Sesiju skaitu ievada klubs.",
  demoSteps: [
    {
      title: "Maksas sesija",
      body: "Biedrs nopērk vienu 16 minūšu sesiju pirms vai pēc treniņa.",
    },
    {
      title: "Sesiju komplekts",
      body: "Regulārs biedrs nopērk vairākas sesijas un izmanto tās pēc sava laika.",
    },
    {
      title: "Premium abonements",
      body: "Noteiktā abonementā ir iekļauts saskaņots skaits sanza sesiju. Skaits tiek noteikts kopā ar klubu.",
    },
  ],
  finalCtaTitle: "Vienas nedēļas izmēģinājums.",
  finalCtaBody:
    "Noteikumus pārrunājam zvanā. Izmēģinājuma laikā klubs redz, kā 16 minūšu sesija iekļaujas viņu dienā.",
  finalCtaPrimary: "Vienas nedēļas izmēģinājums",
  finalCtaSecondary: "Noteikumi zvanā",
  finalCtaSecondaryHref: TRIAL,
};

export const cfLiepajaPageEn: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "A concrete sanza setup for CF Liepāja — Nordora Vital",
  metaDescription:
    "sanza at CF Liepāja: a 16-minute session on the MAT, the sports-club programs, and a one-week trial. The terms are discussed on a call.",
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
    { value: "MAT", label: "one place in the gym" },
    { value: "1 week", label: "trial" },
  ],
  problemEyebrow: "How it sits in the gym",
  problemTitle: "A station beside training, not instead of it.",
  problemBody:
    "One MAT, the controller on a side table, and the PAD only if you choose a local applicator. The member stays dressed and lies down. One person at a time.\n\n<strong>sanza</strong> is wellness technology, not a medical treatment. We do not offer this to junior boxing groups.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  solutionEyebrow: "What a session actually is",
  solutionTitle: "The team learns it once. The program then runs itself.",
  solutionBody:
    "The session is 16 minutes on the MAT. For a sports club: Sport, Vital, Alpha, Relax and Anti-Stress. The member chooses a program and starts it. Staff do not have to be there.",
  solutionPrograms: [
    { name: "Sport", detail: "Activation before activity" },
    { name: "Vital", detail: "Morning activation" },
    { name: "Alpha", detail: "Calm focus and readiness" },
    { name: "Relax", detail: "Regeneration-style support" },
    { name: "Anti-Stress", detail: "Balancing relaxation" },
  ],
  solutionSpecs: [
    {
      title: "Program",
      body: "Sport, Vital, Alpha, Relax and Anti-Stress. The session is 16 minutes.",
    },
    {
      title: "Start",
      body: "The member lies down and starts the program. Staff can be there. They do not have to be.",
    },
    {
      title: "Place",
      body: "One MAT and the controller. The PAD only if you choose a local applicator. One member at a time.",
    },
  ],
  fitsEyebrow: "Three real moments in a CF Liepāja day",
  fitsTitle: "Before training, after training, or a slot of its own.",
  fitsLead:
    "One station, one member. The session is 16 minutes. How many sessions fit in a day depends on how the club gives out the time. The calculator below is an example, not a forecast.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Before training",
      body: "16 minutes. Sport before activity, or Alpha for calm focus and readiness. Then HYROX, functional training, or boxing.",
    },
    {
      title: "After training",
      body: "16 minutes on the MAT. Relax or Anti-Stress. The member gets up and leaves. The class schedule does not change.",
    },
    {
      title: "A slot of its own",
      body: "Its own 16 minutes between training blocks. One member on the station. The club decides how that time is given out.",
    },
  ],
  whatChangesEyebrow: "Who does what",
  whatChangesTitle: "The club decides who starts the session.",
  whatChangesPatientsTitle: "Member",
  whatChangesPatientsItems: [
    "Lies down dressed on the MAT. The PAD is used only if that configuration is chosen",
    "Starts the program. The session is 16 minutes",
    "Staff are not required",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "If the club wants",
  whatChangesPracticeItems: [
    "The MAT and controller can sit apart from the training floor",
    "The team can be shown the controller. Start does not have to stay with staff",
    "One adult member at a time. Not the junior boxing groups",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote:
    "The session is 16 minutes. A one-week trial. The terms are discussed on a call.",
  socialProofAttribution: "Nordora Vital · proposal for CF Liepāja",
  demoStepsEyebrow: "How the club can offer it",
  demoStepsTitle: "Three ways to turn a 16-minute session into revenue.",
  demoStepsLead:
    "The calculator above uses an example: €10 × 5 sessions a day × 22 days = €1,100 gross per month. That is not a demand forecast and it is not profit. The club enters the number of sessions.",
  demoSteps: [
    {
      title: "Paid session",
      body: "A member buys one 16-minute session before or after training.",
    },
    {
      title: "Session package",
      body: "A regular member buys several sessions and uses them in their own time.",
    },
    {
      title: "Premium membership",
      body: "A chosen membership includes an agreed number of sanza sessions. The number is set with the club.",
    },
  ],
  finalCtaTitle: "A one-week trial.",
  finalCtaBody:
    "The terms are discussed on a call. During the trial the club sees how a 16-minute session fits their day.",
  finalCtaPrimary: "One-week trial",
  finalCtaSecondary: "Terms on a call",
  finalCtaSecondaryHref: TRIAL_EN,
};

export function cfLiepajaContent(locale: string): CampaignPageContent {
  return locale === "en" ? cfLiepajaPageEn : cfLiepajaPage;
}
