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
    metaDescription: "A calm, structured wellbeing layer for physiotherapy clinics — patients arrive more settled, relax faster on the table, and leave feeling genuinely looked after.",
    heroImage: "/images/campaign/physio-hero-premium.jpg",
    heroTextAlign: "left",
    heroKicker: "For physiotherapists who want every session to begin better",
    heroHeadline: "You do the therapeutic work. <strong>sanza</strong> helps your patients settle into it.",
    heroSubhead: "Some patients arrive tense, guarded, or hard to calm. <strong>sanza</strong> gives you a simple wellbeing layer around your existing work — helping the room feel calmer, the session feel more complete, and your patients feel more looked after. Your clinical treatment stays yours.",
    heroCtaPrimary: "Book a clinic demo",
    heroValueProps: [
      "On-site clinic demo",
      "Clear pricing conversation",
      "No clinical changes"
    ],
    contactCategory: "physiotherapists",
    demoRequestMessage: "I'd like to arrange a sanza demo and receive more information for a physiotherapy / rehabilitation clinic.",
    quickStats: [
      {
        value: "15",
        label: "Structured wellbeing programs"
      },
      {
        value: "1",
        label: "Simple system for your treatment room"
      },
      {
        value: "10 min",
        label: "To shift the patient's state"
      },
      {
        value: "0",
        label: "Disruption to your hands-on work"
      }
    ],
    problemEyebrow: "What you deal with every day",
    problemTitle: "Your treatment starts before your hands do.",
    problemBody: "You know the patient who walks in already braced. Shoulders high. Breath shallow. Guarding before you even begin.\r\n\r\nYou can have the right technique, the right plan and the right clinical reasoning — and still lose the first part of the session to tension, hesitation and resistance that came into the room with them.\r\n\r\n<strong>sanza</strong> helps you change that starting point.\r\n\r\nIt gives your treatment room a calm, structured layer around the work you already do, so patients settle faster, feel safer on the table, and arrive in a better state for therapy.\r\n\r\nNot because your treatment needs replacing.\r\nBecause your work deserves a patient who is ready to receive it.",
    problemImage: "/images/campaign/physio-landing.jpg",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "A calmer patient is a more treatable patient.",
    solutionBody: "<strong>sanza</strong> is a professional PEMF wellbeing system built for clinics and treatment rooms. Chronobiological electromagnetic frequency signals create a structured, full-body settling effect — delivered through a mat, pad, or targeted applicators before or during your session. No pills, no protocols to redesign. Your physiotherapy stays exactly as it is. <strong>sanza</strong> just makes the room feel different — quieter, more grounded — from the moment your patient lies down.",
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
        body: "Mat, pad and targeted applicators for any room."
      }
    ],
    fitsTitle: "Where sanza fits in your session flow",
    fitsEyebrow: "Integration",
    fitsLead: "Three short rituals — before, between, and after the work you already do. Patients feel the difference. Your clinical time stays yours.",
    fitsImages: [
      "/images/campaign/physio-before-treatment.jpg",
      "/images/campaign/physio-built-for-staff.jpg",
      "/images/campaign/physio-close-out-decompression.jpg",
      "/images/campaign/physio-fit-hero.jpg"
    ],
    fitsItems: [
      {
        title: "Before treatment begins",
        body: "Run a 10–15 min arrival program while the patient settles on the table. They're calmer when your hands-on work starts."
      },
      {
        title: "Between modalities",
        body: "A short frequency pause while you prepare the next step — keeps the patient grounded and reduces 'reset time'."
      },
      {
        title: "Close-out decompression",
        body: "A short program before the patient leaves — they transition back into their day more smoothly. Fewer post-visit complaints, stronger word-of-mouth."
      },
      {
        title: "Built for staff, not specialists",
        body: "15 numbered programs. Your team learns it in one session. After that, it runs itself."
      }
    ],
    whatChangesTitle: "What changes when sanza joins your room",
    whatChangesEyebrow: "Outcomes",
    whatChangesPatientsTitle: "For your patients",
    whatChangesPatientsItems: [
      "Less guardedness on the table → better tissue response",
      "A sense of being genuinely cared for — not just treated",
      "More consistent experience across visits"
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "Smoother appointment starts — fewer wasted minutes",
      "A tangible 'premium' quality patients mention and remember",
      "A differentiator no other physio clinic on your street has"
    ],
    socialProofLabel: "Heard from our partners",
    socialProofQuote: "Clinics that introduce <strong>sanza</strong> consistently report that patients describe visits as more complete — not just effective, but comfortable from start to finish.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    socialProofImage: "/images/campaign/physio-quote-background.jpg",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "A simple demo path, built around your clinic.",
    demoStepsLead: "No pressure, no sales theatre. Tell us about your rooms and patient flow, and we'll show you where sanza could fit before you make any decision.",
    demoSteps: [
      {
        title: "Short qualification call",
        body: "We confirm your clinic type, treatment rooms, patient volume and the questions you want answered."
      },
      {
        title: "Hands-on clinic demo",
        body: "You and your team experience the programs, applicators and practical setup in a real treatment context."
      },
      {
        title: "Fit and next steps",
        body: "If it makes sense, we outline the recommended package, onboarding plan and pricing. If not, you still leave informed."
      }
    ],
    finalCtaTitle: "See what sanza looks like in a physio room.",
    finalCtaBody: "Open the short contact form and we'll come back with demo availability, practical answers, and the information you need to judge whether sanza belongs in your clinic.",
    finalCtaPrimary: "Request a clinic demo",
    finalCtaSecondary: "See how sanza works"
  },
  de: {
    segmentName: "Physiotherapie- und Rehabilitationspraxen",
    metaTitle: "Physiotherapie- und Rehabilitationspraxen | sanza × Nordora Vital",
    metaDescription: "Eine ruhige, strukturierte Wohlfühlatmosphäre für Physiotherapiepraxen – Patienten kommen gelassener an, entspannen sich schneller auf der Liege und verlassen die Praxis mit dem Gefühl, wirklich gut betreut worden zu sein.",
    heroImage: "/images/campaign/physio-hero-premium.jpg",
    heroTextAlign: "left",
    heroKicker: "Für Physiotherapeuten, die sich einen besseren Start in jede Sitzung wünschen",
    heroHeadline: "Sie übernehmen die therapeutische Arbeit. <strong>sanza</strong> hilft Ihren Patienten dabei, sich darauf einzulassen.",
    heroSubhead: "Manche Patienten kommen angespannt, zurückhaltend oder schwer zu beruhigen an. <strong>sanza</strong> bietet Ihnen eine einfache Wohlfühl-Erfahrung rund um Ihre bestehende Arbeit – damit der Raum ruhiger wirkt, die Sitzung vollständiger erscheint und Ihre Patienten sich besser betreut fühlen. Ihre klinische Behandlung bleibt Ihre Sache.",
    heroCtaPrimary: "Buchen Sie eine Klinik-Demo",
    heroValueProps: [
      "Vor-Ort-Demo in Ihrer Klinik",
      "Klares Preisgespräch",
      "Keine klinischen Änderungen"
    ],
    contactCategory: "physiotherapists",
    demoRequestMessage: "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für eine Physiotherapie-/Rehabilitationsklinik erhalten.",
    quickStats: [
      {
        value: "15",
        label: "Strukturierte Wohlfühlprogramme"
      },
      {
        value: "1",
        label: "Einfaches System für Ihren Behandlungsraum"
      },
      {
        value: "10 Min.",
        label: "Um den Zustand des Patienten zu verändern"
      },
      {
        value: "0",
        label: "Beeinträchtigung Ihrer praktischen Arbeit"
      }
    ],
    problemEyebrow: "Womit Sie täglich zu tun haben",
    problemTitle: "Ihre Behandlung beginnt, noch bevor Sie Ihre Hände ansetzen.",
    problemBody: "„Sie kennen den Patienten, der schon mit angespannter Haltung hereinkommt. Die Schultern hochgezogen. Flacher Atem. Abwehrhaltung, noch bevor Sie überhaupt angefangen haben.",
    problemImage: "/images/campaign/physio-landing.jpg",
    solutionEyebrow: "Die sanza-Ebene",
    solutionTitle: "Sie können die richtige Technik, den richtigen Plan und die richtige klinische Argumentation haben – und dennoch den ersten Teil der Sitzung an Anspannung, Zögern und Widerstand verlieren, die der Patient mit in den Raum gebracht hat.",
    solutionBody: "<strong>sanza</strong> kombiniert PEMF, strukturierte Biofrequenz und Kaltilaser/Licht in choreografierten Abläufen — ein beruhigendes Ganzkörper-Erlebnis über das hinaus, was alleinige PEMF-Matten erreichen. Matte, Pad, Handelektroden und gezielte Applikatoren flechten diese Schichten in Ankunft, Reset und Abschluss rund um die Physiotherapieeinheit ein. Die klinische Arbeit bleibt unverändert — der Raum wirkt jedoch von der ersten Minute an ruhiger und stimmiger.",
    solutionSpecs: [
      {
        title: "<strong>sanza</strong> hilft Ihnen, diesen Ausgangspunkt zu verändern.",
        body: "PEMF plus Biofrequenz plus Laser im selben geführten Ablauf — der Kernunterscheid gegenüber Einzeltechnik-Angeboten."
      },
      {
        title: "Es verleiht Ihrem Behandlungsraum eine ruhige, strukturierte Atmosphäre rund um die Arbeit, die Sie bereits leisten, sodass sich Patienten schneller entspannen, sich auf der Liege sicherer fühlen und in einem besseren Zustand zur Therapie erscheinen.",
        body: "Fünfzehn nummerierte Programme, auf die Teams jede Schicht zurückgreifen können."
      },
      {
        title: "Nicht, weil Ihre Behandlung ersetzt werden muss.",
        body: "Sondern weil Ihre Arbeit einen Patienten verdient, der bereit ist, sie anzunehmen.“"
      }
    ],
    fitsTitle: "Ein ruhigerer Patient ist ein besser behandelbarer Patient.",
    fitsEyebrow: "Die sanza-Schicht",
    fitsLead: "<strong>sanza</strong> ist ein professionelles PEMF-Wellness-System, das für Kliniken und Behandlungsräume entwickelt wurde. Chronobiologische elektromagnetische Frequenzsignale erzeugen einen strukturierten, den ganzen Körper umfassenden Beruhigungseffekt – vermittelt durch eine Matte, ein Polster oder gezielte Applikatoren vor oder während Ihrer Sitzung. Keine Tabletten, keine Protokolle, die neu gestaltet werden müssen. Ihre Physiotherapie bleibt genau so, wie sie ist. <strong>sanza</strong> sorgt einfach dafür, dass sich der Raum anders anfühlt – ruhiger, geerdeter – von dem Moment an, in dem sich Ihr Patient hinlegt.",
    fitsImages: [
      "/images/campaign/physio-before-treatment.jpg",
      "/images/campaign/physio-built-for-staff.jpg",
      "/images/campaign/physio-close-out-decompression.jpg",
      "/images/campaign/physio-fit-hero.jpg"
    ],
    fitsItems: [
      {
        title: "PEMF",
        body: "Pulsierendes elektromagnetisches Feld – sanft, nicht-invasiv."
      },
      {
        title: "Chronobiologisch",
        body: "Eine kurze Frequenzpause, während Sie den nächsten Schritt vorbereiten – sorgt dafür, dass der Patient geerdet bleibt, und verkürzt die „Reset-Zeit“."
      },
      {
        title: "Abschließende Dekompression",
        body: "Ein kurzes Programm, bevor der Patient geht – so kehrt er reibungsloser in seinen Alltag zurück. Weniger Beschwerden nach dem Besuch, stärkere Mundpropaganda."
      },
      {
        title: "Entwickelt für das Personal, nicht für Spezialisten",
        body: "15 nummerierte Programme. Ihr Team lernt sie in einer Sitzung. Danach läuft alles von selbst."
      }
    ],
    whatChangesTitle: "Was sich ändert, wenn sanza in Ihren Behandlungsraum kommt",
    whatChangesEyebrow: "Ergebnisse",
    whatChangesPatientsTitle: "Für Ihre Patienten",
    whatChangesPatientsItems: [
      "Weniger Zurückhaltung auf der Liege → bessere Gewebereaktion",
      "Das Gefühl, wirklich umsorgt zu werden – nicht nur behandelt",
      "Einheitlichere Erfahrung über alle Besuche hinweg"
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Reibungsloserer Beginn der Termine – weniger Zeitverlust",
      "Eine spürbare „Premium“-Qualität, die Patienten erwähnen und in Erinnerung behalten",
      "Ein Alleinstellungsmerkmal, das keine andere Physiotherapiepraxis in Ihrer Straße hat"
    ],
    socialProofLabel: "Das sagen unsere Partner",
    socialProofQuote: "Praxen, die <strong>sanza</strong> einführen, berichten durchweg, dass Patienten die Besuche als umfassender beschreiben – nicht nur effektiv, sondern von Anfang bis Ende angenehm.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    socialProofImage: "/images/campaign/physio-quote-background.jpg",
    demoStepsEyebrow: "Was passiert, nachdem Sie uns kontaktiert haben",
    demoStepsTitle: "Ein einfacher Demo-Ablauf, zugeschnitten auf Ihre Praxis.",
    demoStepsLead: "Kein Druck, kein Verkaufsgeschwätz. Erzählen Sie uns von Ihren Räumen und dem Patientenfluss, und wir zeigen Ihnen, wo sanza passen könnte, bevor Sie eine Entscheidung treffen.",
    demoSteps: [
      {
        title: "Kurzes Qualifikationsgespräch",
        body: "Wir klären Ihren Kliniktyp, die Behandlungsräume, das Patientenaufkommen und die Fragen, die Sie beantwortet haben möchten."
      },
      {
        title: "Praktische Klinik-Demo",
        body: "Sie und Ihr Team erleben die Programme, Applikatoren und die praktische Einrichtung in einem echten Behandlungskontext."
      },
      {
        title: "Eignung und nächste Schritte",
        body: "Wenn es Sinn macht, stellen wir Ihnen das empfohlene Paket, den Einführungsplan und die Preise vor. Wenn nicht, gehen Sie dennoch gut informiert nach Hause."
      }
    ],
    finalCtaTitle: "Sehen Sie, wie sanza in einem Physiotherapieraum aussieht.",
    finalCtaBody: "Öffnen Sie das kurze Kontaktformular und wir melden uns mit Terminvorschlägen für eine Demo, praktischen Antworten und den Informationen, die Sie benötigen, um zu beurteilen, ob sanza in Ihre Klinik passt.",
    finalCtaPrimary: "Klinik-Demo anfordern",
    finalCtaSecondary: "Sehen Sie, wie sanza funktioniert"
  },
  lv: {
    segmentName: "Fizioterapijas un rehabilitācijas klīnikas",
    metaTitle: "Fizioterapijas un rehabilitācijas klīnikas | sanza × Nordora Vital",
    metaDescription: "Rāms, strukturēts labklājības slānis fizioterapijas klīnikām — pacienti ierodas mierīgāki, ātrāk atslābst uz galda un aiziet ar sajūtu, ka par viņiem patiesi rūpējas.",
    heroImage: "/images/campaign/physio-hero-premium.jpg",
    heroTextAlign: "left",
    heroKicker: "Fizioterapeitiem, kuri vēlas, lai katra seansa sākums būtu labāks",
    heroHeadline: "Jūs veicat terapeitisko darbu. <strong>sanza</strong> palīdz jūsu pacientiem iekļauties tajā.",
    heroSubhead: "Daži pacienti ierodas saspringti, atturīgi vai grūti nomierināmi. <strong>sanza</strong> sniedz jums vienkāršu labklājības slāni ap jūsu esošo darbu — palīdzot telpai justies mierīgākai, seansam justies pilnīgākam un jūsu pacientiem justies labāk aprūpētiem. Jūsu klīniskā ārstēšana paliek jūsu ziņā.",
    heroCtaPrimary: "Piesakieties uz klīnikas demonstrāciju",
    heroValueProps: [
      "Demonstrācija klīnikā",
      "Skaidra saruna par cenām",
      "Nekādas izmaiņas klīniskajā darbā"
    ],
    contactCategory: "physiotherapists",
    demoRequestMessage: "Es vēlos pieteikties uz sanza demonstrāciju un saņemt vairāk informācijas par fizioterapijas/rehabilitācijas klīniku.",
    quickStats: [
      {
        value: "15",
        label: "Strukturētas labklājības programmas"
      },
      {
        value: "1",
        label: "Vienkārša sistēma jūsu ārstniecības telpai"
      },
      {
        value: "10 min",
        label: "Lai mainītu pacienta stāvokli"
      },
      {
        value: "0",
        label: "Traucējumi jūsu praktiskajam darbam"
      }
    ],
    problemEyebrow: "Ar ko jūs saskaraties katru dienu",
    problemTitle: "Jūsu ārstēšana sākas, pirms jūs sākat strādāt ar rokām.",
    problemBody: "Jūs pazīstat pacientu, kurš ienāk jau saspringts. Pleci pacelti. Elpa sekla. Aizsargājas, pirms jūs pat esat sācis.\r\n\r\nJums var būt pareizā tehnika, pareizais plāns un pareizais klīniskais pamatojums — un jūs joprojām zaudējat sesijas pirmo daļu spriedzei, vilcināšanās un pretestībai, kas ienāca telpā kopā ar viņiem.\r\n\r\n<strong>sanza</strong> palīdz jums mainīt šo sākuma punktu.\r\n\r\nTā piešķir jūsu ārstniecības telpai mierīgu, strukturētu slāni ap darbu, ko jūs jau darāt, lai pacienti ātrāk nomierinātos, justos drošāk uz galda un ierastos labākā stāvoklī terapijai.\r\n\r\nNe tādēļ, ka jūsu ārstēšanai ir nepieciešama aizstāšana.\r\nTādēļ, ka jūsu darbs ir pelnījis pacientu, kurš ir gatavs to saņemt.",
    problemImage: "/images/campaign/physio-landing.jpg",
    solutionEyebrow: "Sanza slānis",
    solutionTitle: "Mierīgāks pacients ir vieglāk ārstējams pacients.",
    solutionBody: "<strong>sanza</strong> ir profesionāla PEMF labklājības sistēma, kas izstrādāta klīnikām un ārstniecības telpām. Hronobioloģiskie elektromagnētiskie frekvences signāli rada strukturētu, visam ķermenim paredzētu nomierinošu efektu — to nodrošina paklājs, spilventiņš vai mērķtiecīgi aplikatori pirms vai sesijas laikā. Bez tabletēm, bez nepieciešamības pārveidot protokolus. Jūsu fizioterapija paliek tieši tāda, kāda tā ir. <strong>sanza</strong> vienkārši padara telpu citādu — klusāku, mierīgāku — no brīža, kad jūsu pacients apgūstas.",
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
        body: "Paklājs, spilventiņš un mērķtiecīgi aplikatori jebkurai telpai."
      }
    ],
    fitsTitle: "Kur sanza iederas jūsu seansu plūsmā",
    fitsEyebrow: "Integrācija",
    fitsLead: "Trīs īsi rituāli — pirms, starp un pēc darba, ko jūs jau veicat. Pacienti jūt atšķirību. Jūsu klīniskais laiks paliek jūsu rīcībā.",
    fitsImages: [
      "/images/campaign/physio-before-treatment.jpg",
      "/images/campaign/physio-built-for-staff.jpg",
      "/images/campaign/physio-close-out-decompression.jpg",
      "/images/campaign/physio-fit-hero.jpg"
    ],
    fitsItems: [
      {
        title: "Pirms ārstēšanas sākuma",
        body: "Palaidiet 10–15 minūšu ierašanās programmu, kamēr pacients iekārtojas uz galda. Viņi ir mierīgāki, kad sākas jūsu praktiskais darbs."
      },
      {
        title: "Starp procedūrām",
        body: "Īsa frekvences pauze, kamēr jūs gatavojaties nākamajam solim — palīdz pacientam saglabāt līdzsvaru un samazina „atjaunošanās laiku”."
      },
      {
        title: "Noslēguma dekompresija",
        body: "Īsa programma pirms pacients dodas prom — viņi vieglāk atgriežas savā ikdienas ritmā. Mazāk sūdzību pēc apmeklējuma, labāka mutiskā reklāma."
      },
      {
        title: "Izstrādāts personālam, nevis speciālistiem",
        body: "15 numurētas programmas. Jūsu komanda to apgūst vienā sesijā. Pēc tam sistēma darbojas pati."
      }
    ],
    whatChangesTitle: "Kas mainās, kad „sanza“ ienāk jūsu kabinetā",
    whatChangesEyebrow: "Rezultāti",
    whatChangesPatientsTitle: "Jūsu pacientiem",
    whatChangesPatientsItems: [
      "Mazāka aizsargātība uz galda → labāka audu reakcija",
      "Sajūta, ka par viņiem patiesi rūpējas — nevis tikai ārstē",
      "Vienotāka pieredze visās vizītēs"
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Raitāka vizītes sākšana — mazāk iztērētu minūšu",
      "Taustāma „premium” kvalitāte, ko pacienti piemin un atceras",
      "Atšķirības faktors, kāds nav nevienai citai fizioterapijas klīnikai jūsu ielā"
    ],
    socialProofLabel: "Ko saka mūsu partneri",
    socialProofQuote: "Klīnikas, kas ievieš <strong>sanza</strong>, vienbalsīgi ziņo, ka pacienti apraksta vizītes kā pilnīgākas — ne tikai efektīvas, bet arī ērtas no sākuma līdz beigām.",
    socialProofAttribution: "Nordora Vital · Profesionālā partneru programma",
    socialProofImage: "/images/campaign/physio-quote-background.jpg",
    demoStepsEyebrow: "Kas notiek pēc tam, kad sazināties ar mums",
    demoStepsTitle: "Vienkārša demonstrācijas programma, kas veidota, ņemot vērā jūsu klīnikas vajadzības.",
    demoStepsLead: "Bez spiediena, bez pārdošanas trikiem. Pastāstiet mums par savām telpām un pacientu plūsmu, un mēs parādīsim, kur sanza varētu iederēties, pirms jūs pieņemat lēmumu.",
    demoSteps: [
      {
        title: "Īss kvalifikācijas zvans",
        body: "Mēs apstiprinām jūsu klīnikas veidu, ārstniecības telpas, pacientu skaitu un jautājumus, uz kuriem vēlaties saņemt atbildes."
      },
      {
        title: "Praktiska klīnikas demonstrācija",
        body: "Jūs un jūsu komanda izmēģināt programmas, aplikatorus un praktisko uzstādīšanu reālā ārstniecības kontekstā."
      },
      {
        title: "Piemērotība un nākamie soļi",
        body: "Ja tas ir lietderīgi, mēs izklāstīsim ieteicamo paketi, ieviešanas plānu un cenas. Ja nē, jūs joprojām saņemsiet visu nepieciešamo informāciju."
      }
    ],
    finalCtaTitle: "Redziet, kā sanza izskatās fizioterapijas telpā.",
    finalCtaBody: "Atveriet īso kontaktformu, un mēs sazināsimies ar jums, lai informētu par demonstrācijas pieejamību, sniegtu praktiskas atbildes un informāciju, kas jums nepieciešama, lai izlemtu, vai sanza ir piemērota jūsu klīnikai.",
    finalCtaPrimary: "Pieprasiet klīnikas demonstrāciju",
    finalCtaSecondary: "Redziet, kā darbojas sanza"
  }
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
