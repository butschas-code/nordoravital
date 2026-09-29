"use client";

import { useState } from "react";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";

type Locale = "en" | "de" | "lv" | "ru";

interface ClinicWorkflowSimulatorProps {
  locale: string;
  defaultSectorId?: string;
}

interface WorkflowStep {
  phase: string;
  timeframe: string;
  title: string;
  description: string;
  patientState: string;
  practitionerAction: string;
}

interface SectorWorkflow {
  id: string;
  name: string;
  tag: string;
  headline: string;
  steps: WorkflowStep[];
  patientBenefits: string[];
  practiceBenefits: string[];
}

const CLINIC_SIMULATOR_DATA: Record<Locale, {
  eyebrow: string;
  title: string;
  subtitle: string;
  sectorLabel: string;
  workflowTimelineLabel: string;
  patientStateLabel: string;
  practitionerLabel: string;
  bilateralHeader: string;
  forPatients: string;
  forPractice: string;
  bookClinicDemo: string;
  requestInformation: string;
  stats: { value: string; label: string }[];
  sectors: SectorWorkflow[];
}> = {
  en: {
    eyebrow: "Interactive Clinic Integration",
    title: "How sanza fits into your treatment room without changing your clinical work",
    subtitle: "Explore how 10–15 minutes of non-invasive frequency support transforms patient arrival, hands-on treatment, and departure across different healthcare and wellness settings.",
    sectorLabel: "Select your clinical setting",
    workflowTimelineLabel: "Visit Flow & Timing",
    patientStateLabel: "Patient state",
    practitionerLabel: "Practitioner workflow",
    bilateralHeader: "Bilateral value generated during the visit",
    forPatients: "For Your Patients & Clients",
    forPractice: "For Your Practice & Clinical Staff",
    bookClinicDemo: "Book on-site clinic demo",
    requestInformation: "Request clinic pilot outline",
    stats: [
      { value: "0 min", label: "Disruption to hands-on clinical therapy" },
      { value: "10–15 min", label: "Arrival settling on the table" },
      { value: "15", label: "Numbered pre-set clinical programs" },
      { value: "1 Session", label: "Staff onboarding time" },
    ],
    sectors: [
      {
        id: "physio",
        name: "Physiotherapy & Rehab",
        tag: "Clinical Practice",
        headline: "Patients arrive less guarded so hands-on work begins faster.",
        steps: [
          {
            phase: "Phase 1: Arrival & Settling",
            timeframe: "0 – 12 min",
            title: "Pre-Treatment Arrival Routine",
            description: "The patient lies down on the treatment table on the sanza mat while the therapist finishes notes or washes hands.",
            patientState: "Guarded shoulders drop, shallow breathing deepens, muscle hyper-tonicity begins to release before physical touch.",
            practitionerAction: "Zero wasted table minutes: you begin physical examination on a patient who is already receptive.",
          },
          {
            phase: "Phase 2: Therapeutic Window",
            timeframe: "12 – 35 min",
            title: "Hands-On Clinical Treatment",
            description: "Therapist conducts standard manual therapy, dry needling, joint mobilization, or exercise guidance without change.",
            patientState: "Higher tissue compliance and less guarding during deeper mobilizations.",
            practitionerAction: "Your treatment stays 100% yours; optional targeted laser pen or pad on acute focal areas.",
          },
          {
            phase: "Phase 3: Close-Out & Exit",
            timeframe: "35 – 45 min",
            title: "Decompression & Integration",
            description: "A short soothing frequency program while the patient reorients, schedules the next visit, and dresses.",
            patientState: "Smooth transition back into daily motion; reduced post-treatment soreness or disorientation.",
            practitionerAction: "Patient leaves feeling genuinely cared for, creating stronger referrals and higher compliance.",
          },
        ],
        patientBenefits: [
          "Less anxiety and muscular resistance on the treatment table",
          "Deeper relaxation during uncomfortable manual techniques",
          "Feeling looked after from the moment they step into the room",
        ],
        practiceBenefits: [
          "Saves 5–8 minutes of table time spent calming anxious patients",
          "Distinctive premium quality that differentiates your clinic",
          "Simple controller interface that any assistant can manage",
        ],
      },
      {
        id: "chiro",
        name: "Chiropractic & Manual Therapy",
        tag: "Manual & Spine",
        headline: "Quieting nervous system bracing before spinal adjustments.",
        steps: [
          {
            phase: "Phase 1: Table Arrival",
            timeframe: "0 – 10 min",
            title: "Autonomic Nervous Downregulation",
            description: "Patient lies on the mat to soften sympathetic tension before adjustments.",
            patientState: "Paraspinal musculature begins to relax; thoracic breathing softens.",
            practitionerAction: "Review posture analysis and imaging while the patient settles on the table.",
          },
          {
            phase: "Phase 2: Specific Adjustment",
            timeframe: "10 – 25 min",
            title: "Precision Hands-On Work",
            description: "Chiropractor delivers targeted spinal adjustments and joint work with reduced involuntary resistance.",
            patientState: "Less guarding and muscle splinting during cavitation and mobilization.",
            practitionerAction: "Less physical effort required from practitioner; higher tactile feedback.",
          },
          {
            phase: "Phase 3: Post-Adjustment Integration",
            timeframe: "25 – 30 min",
            title: "Decompression Routine",
            description: "Brief 5-minute program allowing tissue adjustment to integrate smoothly.",
            patientState: "Grounded feeling; no sudden dizziness when standing up.",
            practitionerAction: "Explain home exercises while patient finishes resting.",
          },
        ],
        patientBenefits: [
          "Easier, less stressful spinal adjustments with less bracing",
          "Enhanced feeling of spinal ease that lasts after leaving the clinic",
          "A calm clinic ritual they eagerly anticipate each week",
        ],
        practiceBenefits: [
          "Reduced physical strain on chiropractor's wrists and shoulders",
          "Fewer difficult table moments with hyper-sensitive patients",
          "Strong word-of-mouth as patients rave about visit comfort",
        ],
      },
      {
        id: "sports",
        name: "Sports Medicine & Athletic Centers",
        tag: "Athletic Recovery",
        headline: "Down-regulating cortisol and athletic fatigue after intense competition.",
        steps: [
          {
            phase: "Phase 1: Post-Effort Arrival",
            timeframe: "0 – 15 min",
            title: "Systemic Recovery Induction",
            description: "Athlete enters recovery lounge or treatment room immediately following exertion.",
            patientState: "Elevated heart rate and cortisol begin shifting towards parasympathetic rest.",
            practitionerAction: "Prepare diagnostics, massage therapy, or hydration without rushing.",
          },
          {
            phase: "Phase 2: Targeted Modalities",
            timeframe: "15 – 40 min",
            title: "Multimodal Regeneration",
            description: "Combine mat with localized cold laser/light applicator on stressed joints, hamstrings, or knees.",
            patientState: "Targeted soothing of acute muscular fatigue and inflamed tendons.",
            practitionerAction: "Supervise athlete protocols with zero extra staffing required.",
          },
          {
            phase: "Phase 3: Recovery Station Exit",
            timeframe: "40 – 45 min",
            title: "Session Completion",
            description: "Athlete finishes with lighter legs, relaxed muscles, and clearer focus.",
            patientState: "Readiness for sleep and faster turn-around for tomorrow's training.",
            practitionerAction: "Log session metrics and readiness scores.",
          },
        ],
        patientBenefits: [
          "Noticeably lighter legs and reduced delayed-onset muscle soreness",
          "True central nervous system recovery, not just passive sitting",
          "Competitive edge in multi-day training or match schedules",
        ],
        practiceBenefits: [
          "Establishes your facility as an elite high-performance recovery center",
          "Attracts professional clubs, competitive athletes, and dedicated runners",
          "Plug-and-play recovery station runs itself with zero staff friction",
        ],
      },
      {
        id: "dental",
        name: "Dental & Clinic Spaces",
        tag: "Chairside Calm",
        headline: "Transforming dental chair anxiety into calm patient cooperation.",
        steps: [
          {
            phase: "Phase 1: Pre-Procedure",
            timeframe: "0 – 10 min",
            title: "Waiting & Chairside Calming",
            description: "Patient holds hand electrodes or rests against ergonomic pad before anesthesia or drilling.",
            patientState: "Heart rate normalizes, dental white-coat anxiety drops significantly.",
            practitionerAction: "Prepare sterile tray and anesthetic while patient relaxes.",
          },
          {
            phase: "Phase 2: Procedure Window",
            timeframe: "10 – 40 min",
            title: "Comfort-Supported Dentistry",
            description: "Standard restorative, surgical, or hygiene procedures under relaxed conditions.",
            patientState: "Less jaw tightening, fewer involuntary startle reflexes, steady breathing.",
            practitionerAction: "Procedure proceeds smoothly with fewer interruptions and pauses.",
          },
          {
            phase: "Phase 3: Post-Procedure Decompression",
            timeframe: "40 – 45 min",
            title: "Gentle Chairside Exit",
            description: "5-minute recovery signal helping local blood flow and easing procedure numbness stress.",
            patientState: "Walks out calm rather than exhausted by tension.",
            practitionerAction: "Clear aftercare instructions absorbed with full patient attention.",
          },
        ],
        patientBenefits: [
          "Noticeably reduced fear and tension before dental procedures",
          "Less jaw fatigue and post-treatment soreness",
          "A relaxing dental experience they share with family and friends",
        ],
        practiceBenefits: [
          "Faster, smoother procedures with cooperative, relaxed patients",
          "Stand-out reputation as a dental practice where treatment feels calm",
          "Higher patient retention and acceptance of comprehensive treatment plans",
        ],
      },
    ],
  },
  de: {
    eyebrow: "Interaktive Praxis-Integration",
    title: "Wie sich sanza in Ihren Behandlungsraum einfügt – ohne Ihre klinische Arbeit zu verändern",
    subtitle: "Erfahren Sie, wie 10–15 Minuten sanfte Frequenzunterstützung die Patientenankunft, manuelle Behandlung und Verabschiedung spürbar aufwertet.",
    sectorLabel: "Wählen Sie Ihr Fachgebiet",
    workflowTimelineLabel: "Ablauf & Zeitfenster der Sitzung",
    patientStateLabel: "Zustand des Patienten",
    practitionerLabel: "Ablauf für das Praxisteam",
    bilateralHeader: "Beidseitiger Mehrwert während des Besuchs",
    forPatients: "Für Ihre Patienten & Klienten",
    forPractice: "Für Ihre Praxis & Ihr Team",
    bookClinicDemo: "Vor-Ort-Demo in der Praxis anfordern",
    requestInformation: "Praxis-Pilotkonzept anfordern",
    stats: [
      { value: "0 Min.", label: "Unterbrechung Ihrer manuellen Therapie" },
      { value: "10–15 Min.", label: "Sanfte Ankunft auf der Liege" },
      { value: "15", label: "Voreingestellte Programme" },
      { value: "1 Termin", label: "Einweisung des Praxisteams" },
    ],
    sectors: [
      {
        id: "physio",
        name: "Physiotherapie & Reha",
        tag: "Klinische Praxis",
        headline: "Patienten kommen weniger verspannt an, sodass Sie schneller effektiv behandeln können.",
        steps: [
          {
            phase: "Phase 1: Ankunft & Einstimmung",
            timeframe: "0 – 12 Min.",
            title: "Ankunftsprogramm auf der Liege",
            description: "Der Patient legt sich auf die sanza-Matte auf der Behandlungsliege, während der Therapeut die Dokumentation abschließt.",
            patientState: "Hochgezogene Schultern sinken, die Atmung vertieft sich, die muskuläre Schonhaltung löst sich vor der ersten Berührung.",
            practitionerAction: "Keine verlorene Behandlungszeit: Sie beginnen mit einem bereits empfänglichen, entspannten Patienten.",
          },
          {
            phase: "Phase 2: Therapeutisches Fenster",
            timeframe: "12 – 35 Min.",
            title: "Manuelle & klinische Therapie",
            description: "Therapeut führt gewohnte manuelle Handgriffe, Triggerpunkt- oder Mobilisationstechniken ohne Einschränkung durch.",
            patientState: "Bessere Gewebereaktion und weniger Abwehrspannung bei tieferen Griffen.",
            practitionerAction: "Ihre Behandlung bleibt zu 100 % Ihre Sache; optional gezielter Laserstift auf fokale Zonen.",
          },
          {
            phase: "Phase 3: Ausklang & Verabschiedung",
            timeframe: "35 – 45 Min.",
            title: "Dekompression & Übergang",
            description: "Ein kurzes beruhigendes Abschlussprogramm, während der Patient sich sammelt und den nächsten Termin vereinbart.",
            patientState: "Sanfte Rückkehr in den Alltag; weniger Nachwehen und Beschwerden nach der Sitzung.",
            practitionerAction: "Patient verlässt die Praxis mit dem Gefühl echter Fürsorge – stärkt Empfehlungen.",
          },
        ],
        patientBenefits: [
          "Weniger Anspannung und Ängstlichkeit auf der Liege",
          "Angenehmeres Erlebnis auch bei fordernden manuellen Techniken",
          "Gefühl von ganzheitlicher Betreuung ab der ersten Minute",
        ],
        practiceBenefits: [
          "Spart 5–8 Minuten Einlaufzeit zur Beruhigung nervöser Patienten",
          "Spürbare Premium-Qualität, die Ihre Praxis klar hervorhebt",
          "Einfache Bedienung, die jede Assistenzkraft sofort beherrscht",
        ],
      },
      {
        id: "chiro",
        name: "Chiropraktik & Manualtherapie",
        tag: "Wirbelsäule & Gelenke",
        headline: "Dämpft muskuläre Schutzspannungen vor der Justierung ab.",
        steps: [
          {
            phase: "Phase 1: Liegen-Ankunft",
            timeframe: "0 – 10 Min.",
            title: "Vegetative Entspannung",
            description: "Patient liegt auf der Matte, um sympathische Anspannung vor der Justierung abzubauen.",
            patientState: "Paravertebrale Muskeln entspannen; die Atmung wird ruhig und tief.",
            practitionerAction: "Befunde und Bildgebung sichten, während der Patient zur Ruhe kommt.",
          },
          {
            phase: "Phase 2: Gezielte Justierung",
            timeframe: "10 – 25 Min.",
            title: "Präzise manuelle Arbeit",
            description: "Der Chiropraktiker führt gezielte Impulse mit deutlich geringerem Patientenwiderstand durch.",
            patientState: "Weniger Schreckreflexe und Verkrampfung während der Justierung.",
            practitionerAction: "Spürbar weniger Kraftaufwand für den Therapeuten; feineres Tastgefühl.",
          },
          {
            phase: "Phase 3: Nachruhe & Integration",
            timeframe: "25 – 30 Min.",
            title: "Kurze Nachruhe",
            description: "5-minütiges sanftes Frequenzprogramm zur Stabilisierung.",
            patientState: "Geerdetes Körpergefühl; kein plötzlicher Schwindel beim Aufstehen.",
            practitionerAction: "Alltags- und Haltungsempfehlungen in ruhiger Atmosphäre erklären.",
          },
        ],
        patientBenefits: [
          "Leichtere, stressfreie Justierungen ohne Verkrampfen",
          "Nachhaltiges Gefühl von Ausrichtung und Entlastung",
          "Ein geschätztes Praxisritual, auf das sich Patienten freuen",
        ],
        practiceBenefits: [
          "Geringere körperliche Belastung für Handgelenke und Rücken des Therapeuten",
          "Deutlich weniger schwierige Liegen-Momente bei Schmerzpatienten",
          "Hohe Weiterempfehlungsrate durch außergewöhnlichen Behandlungskomfort",
        ],
      },
      {
        id: "sports",
        name: "Sportmedizin & Leistungszentren",
        tag: "Sportregeneration",
        headline: "Senkt Stresshormone und beschleunigt die Regeneration nach Höchstbelastungen.",
        steps: [
          {
            phase: "Phase 1: Ankunft nach Belastung",
            timeframe: "0 – 15 Min.",
            title: "Systemische Regenerations-Induktion",
            description: "Athlet begibt sich nach dem Training oder Wettkampf auf die sanza-Matte.",
            patientState: "Puls und Cortisolspiegel sinken zügig in Richtung parasympathischer Ruhe.",
            practitionerAction: "Vorbereitung von Diagnostik oder gezielter Massage ohne Zeitdruck.",
          },
          {
            phase: "Phase 2: Gezielte Applikatoren",
            timeframe: "15 – 40 Min.",
            title: "Multimodale Regeneration",
            description: "Kombination aus Ganzkörpermatte und gezieltem Kaltlaser auf Knie, Achillessehne oder Oberschenkel.",
            patientState: "Gezielte Beruhigung strapazierter Sehnen und ermüdeter Muskelfasern.",
            practitionerAction: "Betreuung des Sportlers ohne zusätzlichen Personalaufwand.",
          },
          {
            phase: "Phase 3: Abschluss",
            timeframe: "40 – 45 Min.",
            title: "Abschluss der Regeneration",
            description: "Sportler steht mit spürbar leichteren Beinen und frischem Kopf auf.",
            patientState: "Verbesserte Schlafbereitschaft und schnellere Frische für die nächste Einheit.",
            practitionerAction: "Dokumentation und Belastungssteuerung abschließen.",
          },
        ],
        patientBenefits: [
          "Spürbar leichtere Muskulatur und verringerter Muskelkater",
          "Echte Erholung des Nervensystems statt bloßem Sitzen",
          "Klarer Wettbewerbsvorteil bei eng getakteten Wettkampftagen",
        ],
        practiceBenefits: [
          "Positioniert Ihr Zentrum als moderne High-End-Regenerationsstätte",
          "Attraktiv für Profivereine, Leistungssportler und ambitionierte Amateure",
          "Automatisierte Station ohne Bindung von Therapeutensekunden",
        ],
      },
      {
        id: "dental",
        name: "Zahnarztpraxen & Kliniken",
        tag: "Stuhl-Entspannung",
        headline: "Verwandelt Behandlungsangst in ruhige Patienten-Kooperation.",
        steps: [
          {
            phase: "Phase 1: Vorbereitung",
            timeframe: "0 – 10 Min.",
            title: "Beruhigung im Behandlungsstuhl",
            description: "Patient hält Handelektroden oder ruht auf dem Rückenpad vor Injektion oder Bohrung.",
            patientState: "Puls normalisiert sich, Anspannung und Weißkittel-Syndrom lassen nach.",
            practitionerAction: "Instrumente und Betäubung in ruhiger Atmosphäre vorbereiten.",
          },
          {
            phase: "Phase 2: Behandlung",
            timeframe: "10 – 40 Min.",
            title: "Ruhiger Eingriff",
            description: "Zahnärztliche Behandlung unter deutlich gelasseneren Bedingungen.",
            patientState: "Weniger Verkrampfen des Kiefers, kein plötzliches Zusammenzucken.",
            practitionerAction: "Eingriff läuft flüssig und ohne zeitraubende Unterbrechungen.",
          },
          {
            phase: "Phase 3: Nachruhe",
            timeframe: "40 – 45 Min.",
            title: "Sanfter Ausstieg",
            description: "5 Minuten sanfter Ausklang zur Milderung des Taubheitsgefühls.",
            patientState: "Verlässt den Stuhl entspannt statt erschöpft von innerer Abwehr.",
            practitionerAction: "Nachsorgehinweise werden vom Patienten voll aufmerksam wahrgenommen.",
          },
        ],
        patientBenefits: [
          "Deutlich weniger Angst vor Injektionen und Bohrungen",
          "Keine Kieferverspannung nach langen Sitzungen",
          "Ein Zahnarztbesuch, der positiv im Gedächtnis bleibt",
        ],
        practiceBenefits: [
          "Reibungslose Behandlungen mit entspannten Patienten",
          "Hervorragender Ruf als einfühlsame, moderne Zahnarztpraxis",
          "Höhere Treue und leichtere Zustimmung zu umfassenden Sanierungen",
        ],
      },
    ],
  },
  lv: {
    eyebrow: "Interaktīvā klīnikas integrācija",
    title: "Kā „sanza“ iekļaujas jūsu kabinetā — nemainot jūsu klīnisko darbu",
    subtitle: "Uzziniet, kā 10–15 minūšu maiga frekvenču iedarbība pārveido pacienta ierašanos, ārstēšanas gaitu un iziešanu no telpas.",
    sectorLabel: "Izvēlieties savu nozari",
    workflowTimelineLabel: "Vizītes gaita un laika posmi",
    patientStateLabel: "Pacienta stāvoklis",
    practitionerLabel: "Speciālista darba plūsma",
    bilateralHeader: "Abpusējs ieguvums vizītes laikā",
    forPatients: "Jūsu pacientiem un klientiem",
    forPractice: "Jūsu praksei un komandai",
    bookClinicDemo: "Pieteikties demonstrācijai klīnikā",
    requestInformation: "Pieprasīt prakses pilotprogrammu",
    stats: [
      { value: "0 min", label: "Traucējumi praktiskajam klīniskajam darbam" },
      { value: "10–15 min", label: "Mierīga iekārtošanās uz galda" },
      { value: "15", label: "Iepriekš sagatavotas klīniskās programmas" },
      { value: "1 sesija", label: "Personāla apmācības laiks" },
    ],
    sectors: [
      {
        id: "physio",
        name: "Fizioterapija un rehabilitācija",
        tag: "Klīniskā prakse",
        headline: "Pacienti ierodas mazāk saspringti, tāpēc praktiskais darbs sākas ātrāk.",
        steps: [
          {
            phase: "1. posms: Ierašanās un iekārtošanās",
            timeframe: "0 – 12 min",
            title: "Ierašanās programma uz galda",
            description: "Pacients apguļas uz procedūru galda uz sanza paklāja, kamēr terapeits sagatavo pierakstus vai mazgā rokas.",
            patientState: "Saspringtie pleci nolaižas, elpošana kļūst dziļāka, muskuļu pretestība mazinās pirms pirmā pieskāriena.",
            practitionerAction: "Neviena zaudēta minūte: jūs sākat pārbaudi ar pacientu, kurš jau ir atvērts un mierīgs.",
          },
          {
            phase: "2. posms: Terapeitiskais logs",
            timeframe: "12 – 35 min",
            title: "Praktiskā manuālā terapija",
            description: "Terapeits veic ierasto manuālo darbu, mobilizāciju vai vingrojumu vadību bez jebkādām izmaiņām.",
            patientState: "Labāka audu reakcija un mazāka aizsardzība dziļāku manipulāciju laikā.",
            practitionerAction: "Jūsu terapija paliek pilnībā jūsu; pēc izvēles var pievienot lāzeru lokālām zonām.",
          },
          {
            phase: "3. posms: Noslēgums un atgriešanās",
            timeframe: "35 – 45 min",
            title: "Dekompresija un integrācija",
            description: "Īsa nomierinoša programma, kamēr pacients pieceļas un vienojas par nākamo vizīti.",
            patientState: "Vienmērīga pāreja atpakaļ ikdienas kustībās; mazāks pēcprocedūras stīvums.",
            practitionerAction: "Pacients aiziet ar patiesu aprūpes sajūtu, radot spēcīgu mutvārdu ieteikumu plūsmu.",
          },
        ],
        patientBenefits: [
          "Mazāks satraukums un muskuļu pretestība uz procedūru galda",
          "Patīkamāka sajūta pat prasīgu manuālo manipulāciju laikā",
          "Pilnvērtīgas aprūpes sajūta no pirmās minūtes kabinetā",
        ],
        practiceBenefits: [
          "Ietaupa 5–8 minūtes, kas parasti paiet saspringta pacienta nomierināšanai",
          "Taustāma kvalitāte, kas izceļ jūsu klīniku starp konkurentiem",
          "Vienkārša vadība, ko jebkurš asistents apgūst dažu minūšu laikā",
        ],
      },
      {
        id: "chiro",
        name: "Hiropraktika un manuālā terapija",
        tag: "Mugurkauls un locītavas",
        headline: "Nomierina nervu sistēmas aizsargreakciju pirms korekcijas.",
        steps: [
          {
            phase: "1. posms: Iekārtošanās",
            timeframe: "0 – 10 min",
            title: "Veģetatīvā atslābināšanās",
            description: "Pacients apguļas uz paklāja, lai mazinātu simpātisko spriedzi pirms korekcijas.",
            patientState: "Mugurkaula apkārtējie muskuļi atslābst; elpošana kļūst lēna un ritmiska.",
            practitionerAction: "Pārskatiet rentgenus un stājas analīzi, kamēr pacients aprimst.",
          },
          {
            phase: "2. posms: Mugurkaula korekcija",
            timeframe: "10 – 25 min",
            title: "Precīzs manuālais darbs",
            description: "Speciālists veic korekciju ar ievērojami mazāku pacienta pretestību.",
            patientState: "Mazāk izbīļa refleksu un muskuļu spazmu manipulācijas laikā.",
            practitionerAction: "Nepieciešama mazāka fiziskā piepūle; labāka taustes atgriezeniskā saite.",
          },
          {
            phase: "3. posms: Noslēguma miers",
            timeframe: "25 – 30 min",
            title: "Stabilizācijas pauze",
            description: "5 minūšu maiga programma pēc korekcijas.",
            patientState: "Stabila un piezemēta sajūta; nav reiboņa pieceļoties.",
            practitionerAction: "Izskaidrojiet mājas vingrojumus mierīgā atmosfērā.",
          },
        ],
        patientBenefits: [
          "Vieglāka, mazāk traumējoša mugurkaula korekcija",
          "Ilgstoša līdzsvara un brīvības sajūta ķermenī",
          "Kabineta rituāls, uz kuru pacients nāk ar prieku",
        ],
        practiceBenefits: [
          "Mazāka slodze uz speciālista plaukstām un pleciem",
          "Daudz mazāk sarežģītu brīžu ar bailīgiem pacientiem",
          "Augstāka pacientu lojalitāte un ieteikumu skaits",
        ],
      },
      {
        id: "sports",
        name: "Sporta medicīna un centri",
        tag: "Sporta atjaunošanās",
        headline: "Pazemina kortizolu un paātrina reģenerāciju pēc lielām slodzēm.",
        steps: [
          {
            phase: "1. posms: Ierašanās pēc slodzes",
            timeframe: "0 – 15 min",
            title: "Sistēmiskās reģenerācijas sākums",
            description: "Sportists pēc treniņa vai sacensībām iekārtojas atpūtas zonā uz paklāja.",
            patientState: "Pulss un stress strauji pārslēdzas uz atjaunošanās fāzi.",
            practitionerAction: "Sagatavojiet testus vai masāžu bez steigas.",
          },
          {
            phase: "2. posms: Mērķtiecīgie aplikatori",
            timeframe: "15 – 40 min",
            title: "Multimodālā atjaunošana",
            description: "Kombinējiet paklāju ar vēso lāzeru uz ceļiem vai muskuļu cīpslām.",
            patientState: "Lokāls atvieglojums pārslogotām cīpslām un nogurušiem muskuļiem.",
            practitionerAction: "Sportists veic procedūru bez nepieciešamības pēc papildu personāla.",
          },
          {
            phase: "3. posms: Seansa noslēgums",
            timeframe: "40 – 45 min",
            title: "Gatavība rītdienai",
            description: "Sportists pieceļas ar vieglākām kājām un skaidru prātu.",
            patientState: "Labāka sagatavotība miegam un nākamās dienas startam.",
            practitionerAction: "Piefiksējiet atjaunošanās rādītājus.",
          },
        ],
        patientBenefits: [
          "Ievērojami mazāks muskuļu sāpīgums nākamajā rītā",
          "Patiesa centrālās nervu sistēmas atpūta",
          "Priekšrocība turnīros un saspringtā treniņu grafikā",
        ],
        practiceBenefits: [
          "Nodrošina jūsu centram modernu elites līmeņa reputāciju",
          "Piesaista profesionāļus un prasīgus amatierus",
          "Automātiska stacija, kas darbojas pati par sevi",
        ],
      },
      {
        id: "dental",
        name: "Zobārstniecības klīnikas",
        tag: "Miers krēslā",
        headline: "Pārvērš bailes un trauksmi mierīgā sadarbībā ar pacientu.",
        steps: [
          {
            phase: "1. posms: Sagatavošanās",
            timeframe: "0 – 10 min",
            title: "Nomierināšanās krēslā",
            description: "Pacients tur rokas elektrodus vai atbalstās pret muguras spilvenu pirms anestēzijas.",
            patientState: "Pulss normalizējas, satraukums un balto halātu sindroms mazinās.",
            practitionerAction: "Sagatavojiet instrumentus un anestēziju mierīgā gaisotnē.",
          },
          {
            phase: "2. posms: Procedūra",
            timeframe: "10 – 40 min",
            title: "Rāma ārstēšana",
            description: "Zobārstniecības procedūra daudz mierīgākos apstākļos.",
            patientState: "Mazāks žokļa saspringums, nav pēkšņu satrūkšanās kustību.",
            practitionerAction: "Ārstēšana norit ātri un bez liekiem pārtraukumiem.",
          },
          {
            phase: "3. posms: Pēcaprūpe",
            timeframe: "40 – 45 min",
            title: "Maigs nobeigums",
            description: "5 minūšu atjaunošanās signāls, kas palīdz atgūties no anestēzijas stresa.",
            patientState: "Iziet no kabineta mierīgs, nevis pārguris no spriedzes.",
            practitionerAction: "Pacients pilnībā uztver un atceras pēcaprūpes norādījumus.",
          },
        ],
        patientBenefits: [
          "Ievērojami mazākas bailes pirms procedūrām un anestēzijas",
          "Mazāks žokļa nogurums un pēcaprūpes diskomforts",
          "Pieredze, kuru pacienti ar pārliecību iesaka citiem",
        ],
        practiceBenefits: [
          "Raita un prognozējama ārstēšana ar sadarbīgiem pacientiem",
          "Klīnikas kā saudzīgas un premium līmeņa iestādes reputācija",
          "Lielāka uzticība un gatavība veikt kompleksu ārstēšanu",
        ],
      },
    ],
  },
  ru: {
    eyebrow: "Интерактивная интеграция в клинику",
    title: "Как sanza встраивается в рабочий процесс кабинета без изменения лечебного протокола",
    subtitle: "Узнайте, как 10–15 минут бесконтактного частотного воздействия меняют состояние пациента при входе, во время терапии и при выходе из кабинета.",
    sectorLabel: "Выберите направление практики",
    workflowTimelineLabel: "Этапы и тайминг визита",
    patientStateLabel: "Состояние пациента",
    practitionerLabel: "Действия специалиста",
    bilateralHeader: "Двусторонняя выгода за время приема",
    forPatients: "Для ваших пациентов и клиентов",
    forPractice: "Для клиники и медицинского персонала",
    bookClinicDemo: "Заказать демонстрацию в клинике",
    requestInformation: "Получить план пилотного проекта",
    stats: [
      { value: "0 мин", label: "Вмешательства в мануальный протокол" },
      { value: "10–15 мин", label: "Мягкое расслабление на кушетке" },
      { value: "15", label: "Готовых клинических программ" },
      { value: "1 сессия", label: "Время обучения команды" },
    ],
    sectors: [
      {
        id: "physio",
        name: "Физиотерапия и реабилитация",
        tag: "Клиническая практика",
        headline: "Пациенты приходят менее зажатыми, поэтому терапия начинается быстрее.",
        steps: [
          {
            phase: "Этап 1: Прибытие и подготовка",
            timeframe: "0 – 12 мин",
            title: "Вводная программа на кушетке",
            description: "Пациент ложится на мат sanza на терапевтическом столе, пока специалист завершает записи в карте или моет руки.",
            patientState: "Поднятые плечи опускаются, дыхание углубляется, защитный гипертонус спадает еще до первого прикосновения рук.",
            practitionerAction: "Ни одной потерянной минуты: вы начинаете осмотр пациента, который уже расслаблен и готов к работе.",
          },
          {
            phase: "Этап 2: Терапевтическое окно",
            timeframe: "12 – 35 мин",
            title: "Мануальная и аппаратная работа",
            description: "Специалист выполняет привычные мануальные техники, мобилизацию суставов или упражнения ЛФК без изменений.",
            patientState: "Лучший отклик тканей и меньше сопротивления при глубокой проработке.",
            practitionerAction: "Ваше лечение остается на 100% вашим; по желанию подключается лазер на триггерные зоны.",
          },
          {
            phase: "Этап 3: Завершение и интеграция",
            timeframe: "35 – 45 мин",
            title: "Декомпрессия и плавный выход",
            description: "Короткая успокаивающая программа, пока пациент одевается и записывается на следующий визит.",
            patientState: "Плавное возвращение к дневным делам; меньше постпроцедурной боли и головокружения.",
            practitionerAction: "Пациент уходит с ощущением глубокой заботы, что усиливает доверие и рекомендации.",
          },
        ],
        patientBenefits: [
          "Меньше тревоги и зажатости на терапевтической кушетке",
          "Комфортное перенесение глубоких мануальных манипуляций",
          "Ощущение заботы о человеке в целом с первой минуты визита",
        ],
        practiceBenefits: [
          "Экономит 5–8 минут времени приема, уходивших на снятие стресса пациента",
          "Яркое конкурентное отличие среди клиник города",
          "Простое управление, с которым справится любой ассистент",
        ],
      },
      {
        id: "chiro",
        name: "Хиропрактика и мануальная терапия",
        tag: "Позвоночник и суставы",
        headline: "Снятие защитного спазма мышц перед трастовой коррекцией.",
        steps: [
          {
            phase: "Этап 1: Подготовка на кушетке",
            timeframe: "0 – 10 мин",
            title: "Вегетативное успокоение",
            description: "Пациент отдыхает на мате для снятия симпатического тонуса перед манипуляцией.",
            patientState: "Паравертебральная мускулатура расслабляется; дыхание становится ровным.",
            practitionerAction: "Оценка рентгенограмм и осанки, пока пациент успокаивается.",
          },
          {
            phase: "Этап 2: Коррекция",
            timeframe: "10 – 25 мин",
            title: "Прицельная манипуляция",
            description: "Хиропрактик выполняет коррекцию при минимальном сопротивлении пациента.",
            patientState: "Отсутствие защитного спазма мышц во время импульса.",
            practitionerAction: "Требуется меньше физических усилий специалиста; выше тактильная точность.",
          },
          {
            phase: "Этап 3: Стабилизация",
            timeframe: "25 – 30 мин",
            title: "Короткая декомпрессия",
            description: "5-минутная программа для плавной адаптации нервной системы.",
            patientState: "Ощущение заземления и легкости; нет головокружения при подъеме.",
            practitionerAction: "Рекомендации по домашним упражнениям в спокойной обстановке.",
          },
        ],
        patientBenefits: [
          "Легкая и безболезненная коррекция позвоночника без напряжения",
          "Стойкое ощущение освобождения и легкости в теле",
          "Приятный ритуал, которого пациенты ждут с нетерпением",
        ],
        practiceBenefits: [
          "Снижение физической нагрузки на кисти и спину врача",
          "Меньше стрессовых моментов с тревожными пациентами",
          "Высокий процент сарафанных рекомендаций благодаря комфорту",
        ],
      },
      {
        id: "sports",
        name: "Спортивная медицина и центры",
        tag: "Спортивное восстановление",
        headline: "Быстрое снижение кортизола и восстановление после пиковых нагрузок.",
        steps: [
          {
            phase: "Этап 1: Прибытие после тренировки",
            timeframe: "0 – 15 мин",
            title: "Системная регенерация",
            description: "Спортсмен располагается на мате в зоне восстановления сразу после нагрузки.",
            patientState: "Пульс снижается, организм переходит в парасимпатический режим.",
            practitionerAction: "Подготовка тестов, компрессионной терапии или массажа без спешки.",
          },
          {
            phase: "Этап 2: Прицельные аппликаторы",
            timeframe: "15 – 40 мин",
            title: "Локальное восстановление",
            description: "Сочетание мата и холодного лазера на перегруженные связки, колени или бедра.",
            patientState: "Снятие воспалительного напряжения и ускорение лимфотока.",
            practitionerAction: "Контроль процесса без отвлечения персонала на ручную работу.",
          },
          {
            phase: "Этап 3: Завершение",
            timeframe: "40 – 45 min",
            title: "Готовность к следующему старту",
            description: "Спортсмен встает с легкими ногами и ясной головой.",
            patientState: "Готовность к качественному ночному сну и завтрашней тренировке.",
            practitionerAction: "Фиксация параметров восстановления в журнале.",
          },
        ],
        patientBenefits: [
          "Заметно меньше крепатуры и тяжести в мышцах на следующий день",
          "Глубокая разгрузка центральной нервной системы",
          "Преимущество в плотном соревновательном графике",
        ],
        practiceBenefits: [
          "Премиальный статус современного центра спортивного восстановления",
          "Привлечение профессиональных атлетов и беговых клубов",
          "Автономная станция, работающая без постоянного контроля персонала",
        ],
      },
      {
        id: "dental",
        name: "Стоматологические клиники",
        tag: "Спокойствие в кресле",
        headline: "Превращение страха перед стоматологом в спокойное сотрудничество.",
        steps: [
          {
            phase: "Этап 1: Подготовка",
            timeframe: "0 – 10 мин",
            title: "Снятие тревоги в кресле",
            description: "Пациент держит ручные электроды или опирается на подушку sanza перед анестезией.",
            patientState: "Пульс замедляется, уходит страх белого халата и паника перед сверлением.",
            practitionerAction: "Подготовка стерильного столика и анестетика в спокойной обстановке.",
          },
          {
            phase: "Этап 2: Процедура",
            timeframe: "10 – 40 мин",
            title: "Спокойное лечение",
            description: "Выполнение лечебных или хирургических манипуляций при полном спокойствии пациента.",
            patientState: "Челюсть расслаблена, нет судорожного сжатия кулаков и вздрагиваний.",
            practitionerAction: "Врач работает быстрее и точнее, не отвлекаясь на паузы.",
          },
          {
            phase: "Этап 3: Завершение",
            timeframe: "40 – 45 мин",
            title: "Мягкий выход",
            description: "5 минут успокаивающей частоты для снятия стресса от анестезии.",
            patientState: "Уходит из клиники в ясном уме, а не измотанным борьбой со страхом.",
            practitionerAction: "Пациент внимательно воспринимает все рекомендации по уходу.",
          },
        ],
        patientBenefits: [
          "Заметное снижение тревоги перед уколом и бормашиной",
          "Отсутствие мышечной усталости челюсти после долгого приема",
          "Положительный опыт, которым охотно делятся со знакомыми",
        ],
        practiceBenefits: [
          "Предсказуемый и быстрый ход приема со спокойными пациентами",
          "Репутация клиники высочайшего комфорта и заботы",
          "Высокая лояльность и готовность к комплексному плану лечения",
        ],
      },
    ],
  },
};

export function ClinicWorkflowSimulator({ locale, defaultSectorId = "physio" }: ClinicWorkflowSimulatorProps) {
  const activeLocale: Locale = locale === "de" || locale === "lv" || locale === "ru" ? locale : "en";
  const data = CLINIC_SIMULATOR_DATA[activeLocale];

  const [activeSectorId, setActiveSectorId] = useState<string>(defaultSectorId);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentSector = data.sectors.find((s) => s.id === activeSectorId) ?? data.sectors[0];
  const activeStep = currentSector.steps[activeStepIndex] ?? currentSector.steps[0];

  const handleSelectSector = (id: string) => {
    setActiveSectorId(id);
    setActiveStepIndex(0);
  };

  return (
    <div className="clinic-workflow-simulator w-full rounded-[24px] border border-[#d8cec2] bg-[#fbf7ef] p-5 shadow-[0_4px_24px_rgba(30,42,34,0.06)] sm:p-8 md:p-10">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
          {data.eyebrow}
        </p>
        <h3 className="mt-2 font-heading text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold tracking-tight text-[#1e2a22]">
          {data.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-[#1e2a22]/80 sm:text-[1.05rem]">
          {data.subtitle}
        </p>
      </div>

      {/* Quick stats ribbon */}
      <div className="mt-8 grid grid-cols-2 gap-3 border-y border-[#d8cec2]/70 py-4 sm:grid-cols-4 sm:gap-4">
        {data.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="font-heading text-xl font-bold text-[#0e3d34] sm:text-2xl">
              {stat.value}
            </span>
            <p className="mt-0.5 text-xs text-[#1e2a22]/70">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Sector tabs */}
      <div className="mt-8">
        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#6f8a7a]">
          {data.sectorLabel}
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {data.sectors.map((sector) => {
            const isSelected = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => handleSelectSector(sector.id)}
                className={`rounded-xl border p-3.5 text-left transition-all ${
                  isSelected
                    ? "border-[#0e3d34] bg-[#0e3d34] text-white shadow-md"
                    : "border-[#d8cec2] bg-white text-[#1e2a22] hover:border-[#6f8a7a] hover:bg-[#f6f1ea]"
                }`}
              >
                <span
                  className={`inline-block rounded px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#6f8a7a]/15 text-[#3b5748]"
                  }`}
                >
                  {sector.tag}
                </span>
                <p className="mt-2 text-sm font-bold leading-snug sm:text-base">
                  {sector.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Headline for active sector */}
      <div className="mt-6 rounded-xl border border-[#d8cec2] bg-white px-5 py-3.5 text-center text-sm font-medium text-[#1e2a22] shadow-sm">
        💡 <span className="font-bold">{currentSector.name}:</span> {currentSector.headline}
      </div>

      {/* Main Timeline Bento */}
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        {/* Left: Step Stepper & Active Phase Details (7 cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#d8cec2] bg-white p-6 lg:col-span-7 sm:p-7">
          <div>
            <div className="flex items-center justify-between border-b border-[#d8cec2]/60 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
                {data.workflowTimelineLabel}
              </span>
              <span className="text-xs font-bold text-[#0e3d34]">
                Step {activeStepIndex + 1} of {currentSector.steps.length}
              </span>
            </div>

            {/* Stepper buttons */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {currentSector.steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.phase}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`rounded-lg p-2.5 text-center transition ${
                      isActive
                        ? "bg-[#0e3d34] text-white shadow-sm"
                        : "bg-[#f6f1ea] text-[#1e2a22] hover:bg-[#efe9e2]"
                    }`}
                  >
                    <span className="block text-[0.7rem] font-semibold opacity-80">
                      {step.timeframe}
                    </span>
                    <span className="block truncate text-xs font-bold">
                      {step.phase.split(":")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step card detail */}
            <div className="mt-6 space-y-4 rounded-xl border border-[#d8cec2] bg-[#fbf7ef] p-5">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-heading text-lg font-bold text-[#1e2a22]">
                  {activeStep.title}
                </h4>
                <span className="rounded-full bg-[#0e3d34]/10 px-2.5 py-0.5 text-xs font-bold text-[#0e3d34]">
                  {activeStep.timeframe}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#1e2a22]/85">
                {activeStep.description}
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-lg border border-[#d8cec2] bg-white p-3">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-[#6f8a7a]">
                    👤 {data.patientStateLabel}
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-[#1e2a22]/90">
                    {activeStep.patientState}
                  </p>
                </div>
                <div className="rounded-lg border border-[#d8cec2] bg-white p-3">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-[#6f8a7a]">
                    🩺 {data.practitionerLabel}
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-[#1e2a22]/90">
                    {activeStep.practitionerAction}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-2 border-t border-[#d8cec2]/60 pt-4">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="rounded-lg border border-[#d8cec2] px-3.5 py-1.5 text-xs font-semibold text-[#1e2a22] transition hover:bg-[#f6f1ea] disabled:opacity-30"
            >
              ← Previous
            </button>
            <button
              type="button"
              disabled={activeStepIndex === currentSector.steps.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(currentSector.steps.length - 1, prev + 1))}
              className="rounded-lg bg-[#0e3d34] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#11463b] disabled:opacity-30"
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Right: Bilateral Value Generated (5 cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#d8cec2] bg-white p-6 lg:col-span-5 sm:p-7">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
                {data.bilateralHeader}
              </p>
              <h4 className="mt-1 font-heading text-lg font-bold text-[#1e2a22]">
                {currentSector.name}
              </h4>
            </div>

            {/* Patients list */}
            <div>
              <span className="inline-block rounded bg-[#6f8a7a]/15 px-2 py-0.5 text-xs font-bold text-[#2e6955]">
                {data.forPatients}
              </span>
              <ul className="mt-2.5 space-y-2">
                {currentSector.patientBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[#1e2a22]/85">
                    <span className="mt-0.5 text-[#2e6955]">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice list */}
            <div>
              <span className="inline-block rounded bg-[#8e6f7c]/15 px-2 py-0.5 text-xs font-bold text-[#704d5e]">
                {data.forPractice}
              </span>
              <ul className="mt-2.5 space-y-2">
                {currentSector.practiceBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[#1e2a22]/85">
                    <span className="mt-0.5 text-[#704d5e]">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2.5 pt-5 border-t border-[#d8cec2]/60">
            <ContactDrawerTrigger
              options={{ professionalCategory: "physiotherapists" }}
              className="btn-primary inline-flex justify-center text-center text-xs sm:text-sm"
            >
              {data.bookClinicDemo}
            </ContactDrawerTrigger>
            <ContactDrawerTrigger
              options={{ professionalCategory: "physiotherapists", message: "Please send the clinic pilot outline." }}
              className="btn-outline inline-flex justify-center text-center text-xs sm:text-sm"
            >
              {data.requestInformation}
            </ContactDrawerTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}
