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
    "Konkrēts sanza piedāvājums CF Liepāja: programmas, personāla ievadīšana, biedra lietošana un stacijas noslodze.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Sagatavots CF Liepāja",
  heroHeadline: "Viena stacija. Viens biedrs.\nNumurēta programma.",
  heroSubhead:
    "Pēc HYROX, funkcionālā treniņa vai pieaugušo boksa biedrs apguļas uz MAT. Personāls vai pats biedrs palaiž programmu kontrollerī. Sesija ir 16 minūtes.",
  heroNote:
    "Koncepta vizualizācija. Attēli rāda iespējamo izvietojumu, nevis uzstādītu iekārtu.",
  heroCtaPrimary: "Vienosimies par demonstrāciju",
  heroCtaSecondary: "Uzzināt par izmēģinājuma iespējām",
  heroCtaSecondaryHref: TRIAL,
  heroValueProps: ["15 programmas", "16 min", "1 biedrs"],
  contactCategory: "sports-performance",
  demoRequestMessage:
    "CF Liepāja — vēlamies demonstrāciju un kopīgi noteikt, kuras programmas, kurš palaiž sesiju un kāds pieraksts der klubam.",
  quickStats: [
    { value: "15", label: "numurētas programmas kontrollerī" },
    { value: "16 min", label: "sesija" },
    { value: "10–15 min", label: "lai iepazīstinātu komandu" },
    { value: "3", label: "sesijas stundā, viena stacija" },
  ],
  problemEyebrow: "Kā tas izskatās zālē",
  problemTitle: "Stacija blakus treniņam, nevis tā vietā.",
  problemBody:
    "Viena MAT vieta, kontrolleris uz galdiņa, PAD tikai tad, ja izvēlaties lokālu aplikatoru. Biedrs paliek apģērbts un apguļas. Vienā brīdī uz stacijas ir viens cilvēks, tāpēc laiks ir jāpieraksta.\n\n<strong>sanza</strong> ir labsajūtas tehnoloģija, nevis medicīniska ārstēšanas metode. Bērnu un jauniešu boksa grupām šo nepiedāvājam.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  solutionEyebrow: "Kas notiek sesijā",
  solutionTitle: "Komanda iemācās vienreiz. Programma pēc tam iet pati.",
  solutionBody:
    "Kontrollerī ir 15 numurētas programmas. Parametrus treniņa laikā nav jāregulē. Numurētas programmas palaišana aizņem mazāk nekā 15 sekundes.",
  solutionPrograms: [
    { name: "Sport", detail: "Aktivizācija pirms aktivitātes" },
    { name: "Vital", detail: "Rīta aktivizācija" },
    { name: "Alpha", detail: "Mierīga koncentrēšanās un gatavība" },
    { name: "Relax", detail: "Atjaunojoša atbalsta programma" },
    { name: "Anti-Stress", detail: "Līdzsvarojoša relaksācija" },
  ],
  solutionProgramNote:
    "Kontrollerī ir arī Sleep, Lymph un Manual. Kopā ir 15 numurētas programmas. Klubs izvēlas, kuras no tām biedri redz.",
  solutionSpecs: [
    {
      title: "Personāls",
      body: "Treneri vai reģistratūra apgūst kontrolleri vienā 10–15 minūšu ievadē. Pēc tam viņi zina, kuru numuru palaiž pirms treniņa un kuru pēc.",
    },
    {
      title: "Biedrs",
      body: "Pēc pirmās reizes biedrs var nospiest to pašu numuru pats. Klubs var arī atstāt palaišanu reģistratūrai vai trenerim. Abos gadījumos ir pieraksts.",
    },
    {
      title: "Laiks",
      body: "Sporta lietojumā sesija ir 5–10 minūtes. Ar apgulšanos un pieceļšanos rēķiniet aptuveni 15 minūtes uz vienu biedru.",
    },
  ],
  fitsEyebrow: "Trīs reāli brīži CF Liepāja dienā",
  fitsTitle: "Pirms treniņa, pēc treniņa vai atsevišķs laiks.",
  fitsLead:
    "Viena stacija, viens biedrs. 15 minūšu logs dod apmēram 4 maiņas stundā. Ja stacija ir vaļā divas noslogotas stundas, tie ir apmēram 8 pieraksti. Četras stundas — apmēram 16. Pieci pieraksti dienā kalkulatorā ir piesardzīgs piemērs, nevis griesti.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Pirms treniņa",
      body: "5–10 minūtes. Sport, ja biedrs grib ieslēgties, vai Alpha, ja viņš atnāk sasprindzis. Tad iet uz HYROX, funkcionālo treniņu vai boksu.",
    },
    {
      title: "Pēc treniņa",
      body: "5–10 minūtes uz MAT. Relax vai Anti-Stress. Biedrs pieceļas un iet prom. Treniņa grafiks nemainās.",
    },
    {
      title: "Atsevišķs pieraksts",
      body: "Starp smagiem blokiem — savs 15 minūšu logs. Reģistratūra iedod laiku, lai divi biedri neierodas uz vienu MAT.",
    },
  ],
  whatChangesEyebrow: "Kas ko dara",
  whatChangesTitle: "Personāls sagatavo. Biedrs apguļas.",
  whatChangesPatientsTitle: "Biedra soļi",
  whatChangesPatientsItems: [
    "Pieraksta 15 minūtes pirms vai pēc sava treniņa",
    "Apguļas apģērbts uz MAT. PAD liek tikai tad, ja šī konfigurācija ir izvēlēta",
    "Palaiž norunāto numuru vai gaida, kamēr to izdara personāls, un pieceļas, kad programma beidzas",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "Personāla soļi",
  whatChangesPracticeItems: [
    "MAT, kontrolleris uz galdiņa, un PAD tikai kā izvēle. Vieta ir nodalīta no treniņu zonas",
    "Viena 10–15 minūšu ievade treneriem vai reģistratūrai. Nekādu frekvenču regulēšanas maiņas laikā",
    "Pieraksta sistēma: viens biedrs, viens logs. Pieaugušie. Ne junioru boksa grupas",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote:
    "Komanda iemācās kontrolleri vienā īsā ievadē. Pēc tam numurētu programmu var palaist personāls vai pats biedrs.",
  socialProofAttribution: "Nordora Vital · piedāvājums CF Liepāja",
  demoStepsEyebrow: "Kā klubs to pārdod",
  demoStepsTitle: "Trīs veidi, kā 15 minūšu logu pārvērst ieņēmumos.",
  demoStepsLead:
    "Kalkulators augstāk rāda piesardzīgu piemēru: €10 × 5 pieraksti dienā × 22 dienas = €1 100 bruto mēnesī. Tas nav pieprasījuma solījums un nav peļņa.",
  demoSteps: [
    {
      title: "Maksas sesija",
      body: "Biedrs nopērk vienu 15 minūšu logu pirms vai pēc treniņa. Personāls vai biedrs palaiž norunāto programmu.",
    },
    {
      title: "Sesiju komplekts",
      body: "Regulārs biedrs nopērk vairākus tādus logus un izmanto tos pēc pieraksta.",
    },
    {
      title: "Premium abonements",
      body: "Noteiktā abonementā ir iekļauts saskaņots skaits sanza logu. Skaits tiek noteikts kopā ar klubu.",
    },
  ],
  finalCtaTitle: "Nākamais solis ir parādīt kontrolleri jūsu komandai.",
  finalCtaBody:
    "Demonstrācijā palaižam programmu, iziet 10–15 minūšu ievadi un kopā izvēlamies, kuras programmas CF Liepāja piedāvā un kurš nospiež startu.",
  finalCtaPrimary: "Vienosimies par demonstrāciju",
  finalCtaSecondary: "Uzzināt par izmēģinājuma iespējām",
  finalCtaSecondaryHref: TRIAL,
};

export const cfLiepajaPageEn: CampaignPageContent = {
  segmentName: "CF Liepāja",
  metaTitle: "A concrete sanza setup for CF Liepāja — Nordora Vital",
  metaDescription:
    "How CF Liepāja would run sanza: programs, a 10–15 minute staff introduction, member start, and how many sessions one station can turn.",
  heroImage: IMAGES.hero,
  heroImagePosition: "22% center",
  heroTextAlign: "right",
  heroKicker: "Prepared for CF Liepāja",
  heroHeadline: "One station. One member.\nA numbered program.",
  heroSubhead:
    "After HYROX, functional training, or adult boxing, a member lies on the MAT. Staff, or the member, starts a program on the controller. Each session is 16 minutes.",
  heroNote: "Concept visualization. The images show a possible layout, not installed equipment.",
  heroCtaPrimary: "Arrange a demonstration",
  heroCtaSecondary: "Ask about trial options",
  heroCtaSecondaryHref: TRIAL_EN,
  heroValueProps: ["15 programs", "16 min", "1 member"],
  contactCategory: "sports-performance",
  demoRequestMessage:
    "CF Liepāja — we want a demonstration and to decide together which programs you offer, who presses start, and how booking works.",
  quickStats: [
    { value: "15", label: "numbered programs on the controller" },
    { value: "16 min", label: "session" },
    { value: "10–15 min", label: "to introduce the team" },
    { value: "3", label: "sessions an hour, one station" },
  ],
  problemEyebrow: "How it sits in the gym",
  problemTitle: "A station beside training, not instead of it.",
  problemBody:
    "One MAT, the controller on a side table, and the PAD only if you choose a local applicator. The member stays dressed and lies down. One person at a time, so the slot is booked.\n\n<strong>sanza</strong> is wellness technology, not a medical treatment. We do not offer this to junior boxing groups.",
  problemImage: IMAGES.equipment,
  problemImagePosition: "center",
  solutionEyebrow: "What a session actually is",
  solutionTitle: "The team learns it once. The program then runs itself.",
  solutionBody:
    "The controller has 15 numbered programs. Nobody adjusts frequencies during a busy floor. Starting a numbered program takes under 15 seconds.",
  solutionPrograms: [
    { name: "Sport", detail: "Activation before activity" },
    { name: "Vital", detail: "Morning activation" },
    { name: "Alpha", detail: "Calm focus and readiness" },
    { name: "Relax", detail: "Regeneration-style support" },
    { name: "Anti-Stress", detail: "Balancing relaxation" },
  ],
  solutionProgramNote:
    "Sleep, Lymph and Manual are on the controller too. The full set is 15 numbered programs. The club chooses which of them members see.",
  solutionSpecs: [
    {
      title: "Staff",
      body: "Coaches or reception learn the controller in one 10–15 minute introduction. After that they know which number to run before training and which after.",
    },
    {
      title: "Member",
      body: "After a first introduction, a member can press that same number. The club can also keep start with reception or a coach. Either way, the slot is booked.",
    },
    {
      title: "Time",
      body: "In the sports use, the program is 5–10 minutes. With lying down and getting up, plan about 15 minutes per member.",
    },
  ],
  fitsEyebrow: "Three real moments in a CF Liepāja day",
  fitsTitle: "Before training, after training, or a slot of its own.",
  fitsLead:
    "One station, one member. A 15-minute window is about 4 turns an hour. Two busy hours is about 8 bookings. Four hours is about 16. Five bookings a day in the calculator is a cautious example, not the ceiling.",
  fitsImages: [IMAGES.journey, IMAGES.member, IMAGES.corner],
  fitsImagePositions: ["8% center", "62% center", "center"],
  fitsItems: [
    {
      title: "Before training",
      body: "5–10 minutes. Sport if the member wants to switch on, or Alpha if they arrive wound up. Then they go to HYROX, functional training, or boxing.",
    },
    {
      title: "After training",
      body: "5–10 minutes on the MAT. Relax or Anti-Stress. They get up and leave. The class schedule does not change.",
    },
    {
      title: "A booked slot",
      body: "Between heavy blocks, its own 15-minute window. Reception gives the time so two members do not arrive for one MAT.",
    },
  ],
  whatChangesEyebrow: "Who does what",
  whatChangesTitle: "Staff prepare it. The member lies down.",
  whatChangesPatientsTitle: "What the member does",
  whatChangesPatientsItems: [
    "Books 15 minutes before or after their own session",
    "Lies down dressed on the MAT. The PAD is used only if that configuration is chosen",
    "Starts the agreed number, or waits while staff do it, and gets up when the program ends",
  ],
  whatChangesPatientsImage: IMAGES.journey,
  whatChangesPatientsImagePosition: "center",
  whatChangesPracticeTitle: "What staff do",
  whatChangesPracticeItems: [
    "MAT, controller on a side table, PAD only as an option. The spot is set apart from the training floor",
    "One 10–15 minute introduction for coaches or reception. No frequency adjustments during a class",
    "A booking rule: one adult member, one window. Not the junior boxing groups",
  ],
  whatChangesPracticeImage: IMAGES.corner,
  whatChangesPracticeImagePosition: "center",
  socialProofLabel: "Nordora Vital",
  socialProofQuote:
    "The team learns the controller in one short introduction. After that, a numbered program can be started by staff or by the member.",
  socialProofAttribution: "Nordora Vital · proposal for CF Liepāja",
  demoStepsEyebrow: "How the club sells it",
  demoStepsTitle: "Three ways to turn a 15-minute window into revenue.",
  demoStepsLead:
    "The calculator above uses a cautious example: €10 × 5 bookings a day × 22 days = €1,100 gross per month. That is not a demand forecast and it is not profit.",
  demoSteps: [
    {
      title: "Paid session",
      body: "A member buys one 15-minute window before or after training. Staff or the member starts the agreed program.",
    },
    {
      title: "Session package",
      body: "A regular member buys several of those windows and uses them by booking.",
    },
    {
      title: "Premium membership",
      body: "A chosen membership includes an agreed number of sanza windows. The number is set with the club.",
    },
  ],
  finalCtaTitle: "The next step is to show the controller to your team.",
  finalCtaBody:
    "In the demonstration we run a program, walk through the 10–15 minute introduction, and choose together which programs CF Liepāja offers and who presses start.",
  finalCtaPrimary: "Arrange a demonstration",
  finalCtaSecondary: "Ask about trial options",
  finalCtaSecondaryHref: TRIAL_EN,
};

export function cfLiepajaContent(locale: string): CampaignPageContent {
  return locale === "en" ? cfLiepajaPageEn : cfLiepajaPage;
}
