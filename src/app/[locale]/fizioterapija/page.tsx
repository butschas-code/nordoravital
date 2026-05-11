import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CampaignLanding } from "@/components/campaign/campaign-landing";
import { routing, type Locale } from "@/i18n/routing";
import type { CampaignPageContent } from "@/types/campaign-page";

type Props = { params: Promise<{ locale: string }> };

/** Segment 01 · Physiotherapy & Rehabilitation Clinics — copy in EN/DE/LV. */
const CONTENT: Partial<Record<Locale, CampaignPageContent>> = {
  en: {
    segmentName: "Physiotherapy & Rehabilitation Clinics",
    metaTitle: "Physiotherapy & Rehabilitation Clinics | sanza × Nordora Vital",
    metaDescription:
      "A calm, structured wellbeing layer for physiotherapy clinics — patients arrive more settled, relax faster on the table, and leave feeling genuinely looked after.",

    heroImage: "/images/campaign/between_modalities-02.jpg",
    heroKicker: "For physiotherapists who want every session to begin better",
    heroHeadline: "You do the therapeutic work. <strong>sanza</strong> helps your patients settle into it.",
    heroSubhead:
      "Some patients arrive tense, guarded, or hard to calm. <strong>sanza</strong> gives you a simple wellbeing layer around your existing work — helping the room feel calmer, the session feel more complete, and your patients feel more looked after. Your clinical treatment stays yours.",
    heroCtaPrimary: "Book a clinic demo",
    heroValueProps: ["On-site clinic demo", "Clear pricing conversation", "No clinical changes"],
    contactCategory: "physiotherapists",
    demoRequestMessage:
      "I'd like to arrange a sanza demo and receive more information for a physiotherapy / rehabilitation clinic.",

    quickStats: [
      { value: "15", label: "Numbered programs" },
      { value: "1", label: "Controller, runs itself" },
      { value: "10 min", label: "Onboarding for staff" },
      { value: "0", label: "Workflow changes" },
    ],

    problemEyebrow: "What you already know",
    problemTitle: "The first five minutes decide the next fifty.",
    problemBody:
      "Your patients often arrive tense. Chronic pain, post-surgical anxiety, first-time nerves — the first five minutes of every session can go either way. When a patient is guarded, muscles resist, cooperation is lower, and you spend part of your clinical time managing the room instead of doing the work. That's not a clinical failure. It's a context problem.",
    problemImage: "/images/campaign/physio-landing.jpg",

    solutionEyebrow: "The sanza layer",
    solutionTitle: "A calmer patient is a more treatable patient.",
    solutionBody:
      "<strong>sanza</strong> is a professional PEMF wellbeing system built for clinics and treatment rooms. Chronobiological electromagnetic frequency signals create a structured, full-body settling effect — delivered through a mat, pad, or targeted applicators before or during your session. No pills, no protocols to redesign. Your physiotherapy stays exactly as it is. <strong>sanza</strong> just makes the room feel different — quieter, more grounded — from the moment your patient lies down.",
    solutionSpecs: [
      { title: "PEMF", body: "Pulsed electromagnetic field — gentle, non-invasive." },
      { title: "Chronobiological", body: "Frequency programs aligned to body rhythms." },
      { title: "Modular", body: "Mat, pad and targeted applicators for any room." },
    ],

    fitsTitle: "Where sanza fits in your session flow",
    fitsEyebrow: "Integration",
    fitsLead:
      "Three short rituals — before, between, and after the work you already do. Patients feel the difference. Your clinical time stays yours.",
    fitsImages: [
      "/images/campaign/physio-before-treatment.jpg",
      "/images/campaign/physio-built-for-staff.jpg",
      "/images/campaign/physio-close-out-decompression.jpg",
      "/images/campaign/physio-fit-hero.jpg",
    ],
    fitsItems: [
      {
        title: "Before treatment begins",
        body: "Run a 10–15 min arrival program while the patient settles on the table. They're calmer when your hands-on work starts.",
      },
      {
        title: "Between modalities",
        body: "A short frequency pause while you prepare the next step — keeps the patient grounded and reduces 'reset time'.",
      },
      {
        title: "Close-out decompression",
        body: "A short program before the patient leaves — they transition back into their day more smoothly. Fewer post-visit complaints, stronger word-of-mouth.",
      },
      {
        title: "Built for staff, not specialists",
        body: "15 numbered programs. Your team learns it in one session. After that, it runs itself.",
      },
    ],

    whatChangesTitle: "What changes when sanza joins your room",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients",
    whatChangesPatientsItems: [
      "Less guardedness on the table → better tissue response",
      "A sense of being genuinely cared for — not just treated",
      "More consistent experience across visits",
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "Smoother appointment starts — fewer wasted minutes",
      "A tangible 'premium' quality patients mention and remember",
      "A differentiator no other physio clinic on your street has",
    ],

    socialProofLabel: "Heard from our partners",
    socialProofQuote:
      "Clinics that introduce <strong>sanza</strong> consistently report that patients describe visits as more complete — not just effective, but comfortable from start to finish.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    socialProofImage: "/images/campaign/physio-quote-background.jpg",

    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your clinic.",
    demoStepsLead:
      "No pressure, no sales theatre. Tell us about your rooms and patient flow, and we'll show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short qualification call",
        body: "We confirm your clinic type, treatment rooms, patient volume and the questions you want answered.",
      },
      {
        title: "Hands-on clinic demo",
        body: "You and your team experience the programs, applicators and practical setup in a real treatment context.",
      },
      {
        title: "Fit and next steps",
        body: "If it makes sense, we outline the recommended package, onboarding plan and pricing. If not, you still leave informed.",
      },
    ],

    finalCtaTitle: "See what sanza looks like in a physio room.",
    finalCtaBody:
      "Open the short contact form and we'll come back with demo availability, practical answers, and the information you need to judge whether sanza belongs in your clinic.",
    finalCtaPrimary: "Request a clinic demo",
    finalCtaSecondary: "See how sanza works",
  },

  de: {
    segmentName: "Physiotherapie- & Rehabilitationskliniken",
    metaTitle: "Physiotherapie- & Rehabilitationskliniken | sanza × Nordora Vital",
    metaDescription:
      "Eine ruhige, strukturierte Wohlfühlebene für Physiotherapie-Praxen — Patienten kommen entspannter an, lösen sich schneller auf der Liege und gehen mit dem Gefühl, wirklich umsorgt worden zu sein.",

    heroImage: "/images/campaign/between_modalities-02.jpg",
    heroKicker: "Für Physiotherapeuten, die jede Sitzung besser beginnen lassen möchten",
    heroHeadline: "Sie leisten die therapeutische Arbeit. <strong>sanza</strong> hilft Ihren Patienten, darin anzukommen.",
    heroSubhead:
      "Manche Patienten kommen angespannt, geschützt oder schwer zur Ruhe. <strong>sanza</strong> ergänzt Ihre bestehende Arbeit um eine einfache Wohlfühlebene — der Raum fühlt sich ruhiger an, die Sitzung vollständiger, und Patienten fühlen sich spürbar besser umsorgt. Ihre klinische Behandlung bleibt bei Ihnen.",
    heroCtaPrimary: "Demo in Ihrer Praxis",
    heroValueProps: ["Demo in Ihrer Praxis", "Klares Preisgespräch", "Keine klinischen Änderungen"],
    contactCategory: "physiotherapists",
    demoRequestMessage:
      "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für eine Physiotherapie- oder Rehabilitationspraxis erhalten.",

    quickStats: [
      { value: "15", label: "Nummerierte Programme" },
      { value: "1", label: "Steuerung, läuft selbst" },
      { value: "10 Min", label: "Einarbeitung für das Team" },
      { value: "0", label: "Änderungen am Ablauf" },
    ],

    problemEyebrow: "Was Sie längst kennen",
    problemTitle: "Die ersten fünf Minuten entscheiden über die nächsten fünfzig.",
    problemBody:
      "Ihre Patienten kommen oft angespannt. Chronische Schmerzen, postoperative Ängste, erstmalige Unsicherheit — die ersten fünf Minuten jeder Sitzung können in jede Richtung kippen. Ein verspannter Patient hält Muskulatur zurück, kooperiert weniger, und Sie verbringen einen Teil Ihrer klinischen Zeit damit, den Raum zu managen statt zu arbeiten. Das ist kein klinisches Versagen. Es ist ein Kontextproblem.",
    problemImage: "/images/campaign/physio-landing.jpg",

    solutionEyebrow: "Die sanza-Ebene",
    solutionTitle: "Ein ruhigerer Patient ist ein besser behandelbarer Patient.",
    solutionBody:
      "<strong>sanza</strong> ist ein professionelles PEMF-Wohlfühlsystem für Praxen und Behandlungsräume. Chronobiologische elektromagnetische Frequenzsignale erzeugen einen strukturierten, ganzkörperlichen Beruhigungseffekt — über Matte, Pad oder gezielte Applikatoren, vor oder während Ihrer Sitzung. Keine Tabletten, keine neuen Protokolle. Ihre Physiotherapie bleibt genau so, wie sie ist. <strong>sanza</strong> verändert nur, wie sich der Raum anfühlt — ruhiger, geerdeter — vom Moment, in dem sich der Patient hinlegt.",
    solutionSpecs: [
      { title: "PEMF", body: "Pulsierendes elektromagnetisches Feld — sanft, nicht-invasiv." },
      { title: "Chronobiologisch", body: "Frequenzprogramme im Einklang mit Körperrhythmen." },
      { title: "Modular", body: "Matte, Pad und gezielte Applikatoren für jeden Raum." },
    ],

    fitsTitle: "Wo sanza in Ihren Ablauf passt",
    fitsEyebrow: "Integration",
    fitsLead:
      "Drei kurze Rituale — vor, zwischen und nach Ihrer Arbeit. Patienten spüren den Unterschied. Ihre klinische Zeit bleibt Ihre.",
    fitsImages: [
      "/images/campaign/physio-before-treatment.jpg",
      "/images/campaign/physio-built-for-staff.jpg",
      "/images/campaign/physio-close-out-decompression.jpg",
      "/images/campaign/physio-fit-hero.jpg",
    ],
    fitsItems: [
      {
        title: "Vor der Behandlung",
        body: "Ein 10–15-minütiges Ankommprogramm, während sich der Patient auf der Liege einrichtet. Wenn Sie loslegen, ist er ruhiger.",
      },
      {
        title: "Zwischen Modalitäten",
        body: "Eine kurze Frequenzpause, während Sie den nächsten Schritt vorbereiten — der Patient bleibt geerdet, weniger 'Reset-Zeit'.",
      },
      {
        title: "Abschluss-Dekompression",
        body: "Ein kurzes Programm vor dem Verlassen — der Patient gleitet sanfter zurück in seinen Tag. Weniger Beschwerden, stärkere Mundpropaganda.",
      },
      {
        title: "Für Teams, nicht für Spezialisten",
        body: "15 nummerierte Programme. Ihr Team lernt es in einer Schicht. Danach läuft es von selbst.",
      },
    ],

    whatChangesTitle: "Was sich verändert, wenn sanza in Ihren Raum einzieht",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten",
    whatChangesPatientsItems: [
      "Weniger Anspannung auf der Liege → bessere Gewebeantwort",
      "Das Gefühl, wirklich umsorgt zu sein — nicht nur behandelt",
      "Konsistentere Erfahrung über alle Besuche hinweg",
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Reibungslosere Terminstarts — weniger verschenkte Minuten",
      "Eine spürbare Premium-Qualität, die Patienten erwähnen und in Erinnerung behalten",
      "Ein Differenzierungsmerkmal, das nicht jede Physiopraxis in Ihrer Umgebung hat",
    ],

    socialProofLabel: "Stimmen aus dem Partnerprogramm",
    socialProofQuote:
      "Praxen, die <strong>sanza</strong> einführen, berichten durchweg, dass Patienten den Besuch als vollständiger beschreiben — nicht nur wirksam, sondern angenehm von Anfang bis Ende.",
    socialProofAttribution: "Nordora Vital · Partnerprogramm",
    socialProofImage: "/images/campaign/physio-quote-background.jpg",

    demoStepsEyebrow: "Was passiert nach Ihrer Anfrage",
    demoStepsTitle: "Ein einfacher Demo-Weg, passend zu Ihrer Praxis.",
    demoStepsLead:
      "Kein Druck, keine Verkaufsinszenierung. Sie erzählen uns kurz von Ihren Räumen und Abläufen, und wir zeigen, wo sanza sinnvoll passen könnte.",
    demoSteps: [
      {
        title: "Kurzes Vorgespräch",
        body: "Wir klären Praxistyp, Behandlungsräume, Patientenfluss und die Fragen, die Sie beantwortet haben möchten.",
      },
      {
        title: "Demo vor Ort",
        body: "Sie und Ihr Team erleben Programme, Applikatoren und praktischen Aufbau im Behandlungskontext.",
      },
      {
        title: "Passung und nächste Schritte",
        body: "Wenn es passt, erhalten Sie Paketempfehlung, Onboarding-Plan und Preise. Wenn nicht, gehen Sie trotzdem informiert heraus.",
      },
    ],

    finalCtaTitle: "Sehen Sie, wie sanza in einem Physio-Raum wirkt.",
    finalCtaBody:
      "Öffnen Sie das kurze Kontaktformular. Wir melden uns mit Demo-Verfügbarkeit, praktischen Antworten und den Informationen, die Sie brauchen, um ruhig zu entscheiden, ob sanza in Ihre Praxis passt.",
    finalCtaPrimary: "Demo in der Praxis anfragen",
    finalCtaSecondary: "So funktioniert sanza",
  },

  lv: {
    segmentName: "Fizioterapijas un rehabilitācijas klīnikas",
    metaTitle: "Fizioterapijas un rehabilitācijas klīnikas | sanza × Nordora Vital",
    metaDescription:
      "Mierīgs, strukturēts labsajūtas slānis fizioterapijas klīnikām — pacienti ierodas mierīgāki, ātrāk atslābst uz galda un aiziet ar sajūtu, ka par viņiem patiesi parūpējušies.",

    heroImage: "/images/campaign/between_modalities-02.jpg",
    heroKicker: "Fizioterapeitiem, kuri vēlas, lai katra vizīte sāktos labāk",
    heroHeadline: "Jūs veicat terapeitisko darbu. <strong>sanza</strong> palīdz pacientiem tajā iejusties.",
    heroSubhead:
      "Daži pacienti ierodas saspringti, aizsargājoši vai grūti nomierināmi. <strong>sanza</strong> pievieno jūsu esošajam darbam vienkāršu labsajūtas slāni — telpa jūtas mierīgāka, vizīte pilnīgāka, un pacienti jūtas vairāk aprūpēti. Jūsu klīniskā terapija paliek jūsu rokās.",
    heroCtaPrimary: "Pieteikt demo klīnikā",
    heroValueProps: ["Demo jūsu klīnikā", "Skaidra cenu saruna", "Bez klīniskām izmaiņām"],
    contactCategory: "physiotherapists",
    demoRequestMessage:
      "Vēlos pieteikt sanza demo un saņemt vairāk informācijas fizioterapijas / rehabilitācijas klīnikai.",

    quickStats: [
      { value: "15", label: "Numurētas programmas" },
      { value: "1", label: "Vadība, darbojas pati" },
      { value: "10 min", label: "Komandas ievadapmācība" },
      { value: "0", label: "Darba plūsmas izmaiņu" },
    ],

    problemEyebrow: "Tas, ko jau zināt",
    problemTitle: "Pirmās piecas minūtes izšķir nākamās piecdesmit.",
    problemBody:
      "Jūsu pacienti nereti ierodas saspringti. Hroniskas sāpes, satraukums pēc operācijas, pirmā apmeklējuma nervozitāte — katras sesijas pirmās piecas minūtes var pavērsties uz jebkuru pusi. Kad pacients ir saspringts, muskuļi pretojas, sadarbība ir vājāka, un daļu klīniskā laika jūs pavadāt, vadot situāciju telpā, nevis veicot darbu. Tā nav klīniska neveiksme. Tā ir konteksta problēma.",
    problemImage: "/images/campaign/physio-landing.jpg",

    solutionEyebrow: "sanza slānis",
    solutionTitle: "Mierīgāks pacients ir vieglāk ārstējams pacients.",
    solutionBody:
      "<strong>sanza</strong> ir profesionāla PEMF labsajūtas sistēma, veidota klīnikām un procedūru telpām. Hronobioloģiski elektromagnētiski frekvenču signāli rada strukturētu, visa ķermeņa nomierinošu efektu — caur paklāju, spilvenu vai mērķtiecīgiem aplikatoriem pirms vai sesijas laikā. Nekādu tablešu, nekādu protokolu pārveidošanas. Jūsu fizioterapija paliek tieši tāda, kāda tā ir. <strong>sanza</strong> tikai maina to, kā telpa jūtas — klusāka, stabilāka — no brīža, kad pacients apgulstas.",
    solutionSpecs: [
      { title: "PEMF", body: "Pulsējošs elektromagnētiskais lauks — maigs, neinvazīvs." },
      { title: "Hronobioloģisks", body: "Frekvenču programmas saskaņā ar ķermeņa ritmiem." },
      { title: "Modulārs", body: "Paklājs, spilvens un mērķtiecīgi aplikatori jebkurai telpai." },
    ],

    fitsTitle: "Kur sanza iederas jūsu sesijas plūsmā",
    fitsEyebrow: "Integrācija",
    fitsLead:
      "Trīs īsi rituāli — pirms, starp un pēc tā darba, ko jau veicat. Pacienti jūt atšķirību. Jūsu klīniskais laiks paliek jūsu.",
    fitsImages: [
      "/images/campaign/physio-before-treatment.jpg",
      "/images/campaign/physio-built-for-staff.jpg",
      "/images/campaign/physio-close-out-decompression.jpg",
      "/images/campaign/physio-fit-hero.jpg",
    ],
    fitsItems: [
      {
        title: "Pirms procedūras",
        body: "10–15 min ierašanās programma, kamēr pacients iekārtojas uz galda. Kad sākat darbu ar rokām, viņš ir mierīgāks.",
      },
      {
        title: "Starp procedūrām",
        body: "Īsa frekvenču pauze, kamēr sagatavojat nākamo soli — pacients paliek nostabilizēts, mazāk 'restartēšanās laika'.",
      },
      {
        title: "Noslēguma dekompresija",
        body: "Īsa programma pirms došanās prom — pacients atgriežas savā dienā vienmērīgāk. Mazāk sūdzību, spēcīgāks ieteikums.",
      },
      {
        title: "Veidots komandai, ne speciālistiem",
        body: "15 numurētas programmas. Jūsu komanda apgūst tās vienā sesijā. Tālāk tās darbojas pašas.",
      },
    ],

    whatChangesTitle: "Kas mainās, kad sanza ienāk jūsu telpā",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem",
    whatChangesPatientsItems: [
      "Mazāks saspringums uz galda → labāka audu atbildes reakcija",
      "Sajūta, ka par viņiem patiesi rūpējas — ne tikai ārstē",
      "Konsekventāka pieredze visos apmeklējumos",
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Vienmērīgāks vizītes sākums — mazāk zaudēto minūšu",
      "Taustāma 'premium' kvalitāte, ko pacienti piemin un atceras",
      "Atšķirīga iezīme, kādas nav katrai fizioterapijas klīnikai jūsu apkārtnē",
    ],

    socialProofLabel: "No partneru programmas",
    socialProofQuote:
      "Klīnikas, kas ievieš <strong>sanza</strong>, konsekventi ziņo, ka pacienti apraksta vizītes kā pilnīgākas — ne tikai efektīvas, bet patīkamas no sākuma līdz beigām.",
    socialProofAttribution: "Nordora Vital · Profesionālo partneru programma",
    socialProofImage: "/images/campaign/physio-quote-background.jpg",

    demoStepsEyebrow: "Kas notiek pēc pieteikuma",
    demoStepsTitle: "Vienkāršs demo process, pielāgots jūsu klīnikai.",
    demoStepsLead:
      "Bez spiediena un bez pārspīlētas pārdošanas. Pastāstiet par savām telpām un pacientu plūsmu, un mēs parādīsim, kur sanza varētu iederēties.",
    demoSteps: [
      {
        title: "Īsa noskaidrošanas saruna",
        body: "Precizējam klīnikas tipu, procedūru telpas, pacientu plūsmu un jautājumus, uz kuriem vēlaties atbildes.",
      },
      {
        title: "Demo klīnikā",
        body: "Jūs un komanda izmēģināt programmas, aplikatorus un praktisko uzstādījumu reālā procedūras kontekstā.",
      },
      {
        title: "Atbilstība un nākamie soļi",
        body: "Ja tas der, ieskicējam ieteicamo komplektu, ieviešanas plānu un cenu. Ja nē, jūs tāpat iegūstat skaidrību.",
      },
    ],

    finalCtaTitle: "Apskatiet, kā sanza izskatās fizio kabinetā.",
    finalCtaBody:
      "Atveriet īso kontaktformu, un mēs atbildēsim ar demo iespējām, praktiskām atbildēm un informāciju, kas vajadzīga, lai mierīgi izvērtētu, vai sanza iederas jūsu klīnikā.",
    finalCtaPrimary: "Pieteikt demo klīnikā",
    finalCtaSecondary: "Kā darbojas sanza",
  },
};

function getContent(locale: string): CampaignPageContent | null {
  return CONTENT[locale as Locale] ?? null;
}

export function generateStaticParams() {
  return routing.locales.filter((l) => CONTENT[l]).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  if (!content) return {};
  return { title: content.metaTitle, description: content.metaDescription };
}

export default async function FizioterapijaPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const content = getContent(locale);
  if (!content) notFound();
  return <CampaignLanding content={content} />;
}
