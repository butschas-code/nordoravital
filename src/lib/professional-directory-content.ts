import {
  type CampaignSlug,
} from "@/lib/campaign-slugs";

export type ProfessionalCategoryGroup =
  | "all"
  | "clinical"
  | "manual"
  | "sports"
  | "clubs"
  | "hospitality";

export interface ProfessionalSectorDirectoryItem {
  slug: CampaignSlug;
  category: ProfessionalCategoryGroup;
  name: string;
  badge: string;
  summary: string;
  workflowHighlight: string;
  image: string;
}

export interface ProfessionalDirectoryContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  allFilter: string;
  clinicalFilter: string;
  manualFilter: string;
  sportsFilter: string;
  clubsFilter: string;
  hospitalityFilter: string;
  viewSectorPage: string;
  workflowEyebrow: string;
  workflowTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  sectors: ProfessionalSectorDirectoryItem[];
}

export const PROFESSIONAL_DIRECTORY_DATA: Record<
  "en" | "de" | "lv" | "ru",
  ProfessionalDirectoryContent
> = {
  en: {
    metaTitle: "Professional Healthcare & Wellness Sectors Directory | sanza × Nordora Vital",
    metaDescription:
      "Explore the complete directory of 16 professional sectors integrating sanza: physiotherapy, chiropractic, sports medicine, dental clinics, alternative therapy, gyms, and luxury spas.",
    eyebrow: "Sector Solutions Directory",
    title: "A calm wellbeing layer for every professional treatment setting",
    subtitle:
      "From clinical rehabilitation and manual therapy to high-performance athletic facilities and luxury wellness spas — discover how sanza integrates into your rooms without changing your core work.",
    allFilter: "All Sectors (16)",
    clinicalFilter: "Clinical & Medical",
    manualFilter: "Manual & Holistic",
    sportsFilter: "Sports & Athletics",
    clubsFilter: "Racket & Golf Clubs",
    hospitalityFilter: "Luxury Spas & Hotels",
    viewSectorPage: "View Sector Landing Page",
    workflowEyebrow: "Operational Flow",
    workflowTitle: "How sanza integrates into professional workflows",
    faqEyebrow: "Clinic Questions",
    faqTitle: "Frequently asked questions by practice owners",
    faqs: [
      {
        question: "Does sanza interfere with medical diagnoses or therapeutic protocols?",
        answer:
          "No. sanza is positioned as a complementary in-room wellbeing system using non-invasive PEMF, biofrequency microcurrent, and focused light. It does not replace your clinical reasoning, diagnostic procedures, or manual techniques.",
      },
      {
        question: "How long does it take for staff to learn the system?",
        answer:
          "Training takes approximately 10 to 15 minutes. The controller operates via 15 numbered pre-set programs, requiring no complex parameter tuning during a busy clinic shift.",
      },
      {
        question: "Can we test sanza in our own clinic before making a commitment?",
        answer:
          "Yes. We offer an on-site clinic demonstration and pilot evaluation path so practice owners and therapists can experience the arrival and settling effect in their actual rooms.",
      },
      {
        question: "What applicators are recommended for treatment rooms?",
        answer:
          "Most clinical practices utilize the full-body mat on their treatment table, supplemented with hand electrodes for autonomic grounding and targeted laser/light pens for focal tissue support.",
      },
    ],
    ctaEyebrow: "Clinic Trial & Demo",
    ctaTitle: "Experience sanza in your actual treatment rooms.",
    ctaBody:
      "We will arrange a hands-on on-site clinic demonstration tailored to your space, patient flow, and scheduling requirements. No pressure, no sales theater.",
    ctaPrimary: "Request clinic demo",
    ctaSecondary: "Download pilot outline",
    sectors: [
      {
        slug: "fizioterapija",
        category: "clinical",
        name: "Physiotherapy & Rehabilitation",
        badge: "Rehab Clinics",
        summary: "Patients arrive less guarded, relax faster on the table, and respond more readily to manual mobilization and exercises.",
        workflowHighlight: "10-min arrival mat program before physical touch begins",
        image: "/images/campaign/physio-hero-premium.jpg",
      },
      {
        slug: "sporta-medicina",
        category: "sports",
        name: "Sports Medicine & Recovery Centers",
        badge: "Athletic Performance",
        summary: "Down-regulates post-competition cortisol, eases delayed-onset muscle soreness, and creates an elite recovery station.",
        workflowHighlight: "Automated systemic recovery station runs without extra staffing",
        image: "/images/campaign/sports-medicine-hero.jpg",
      },
      {
        slug: "hiropraktika",
        category: "manual",
        name: "Chiropractic & Manual Therapy",
        badge: "Spine & Joints",
        summary: "Quiets involuntary spinal bracing and muscular splinting so precise adjustments require less physical effort.",
        workflowHighlight: "Paraspinal muscle relaxation prior to spinal adjustment",
        image: "/images/campaign/chiro-hero.jpg",
      },
      {
        slug: "alternativie-terapeiti",
        category: "manual",
        name: "Alternative Therapists & Naturopaths",
        badge: "Holistic Health",
        summary: "A gentle PEMF and biofrequency layer supporting nervous system regulation alongside homeopathic and naturopathic consultations.",
        workflowHighlight: "Creates a calm holding environment before and after consultations",
        image: "/images/campaign/alternative-therapists-hero.jpg",
      },
      {
        slug: "zobarstnieciba",
        category: "clinical",
        name: "Dental Clinics & Surgery",
        badge: "Chairside Calm",
        summary: "Dissipates white-coat syndrome and procedural fear, creating relaxed chairside cooperation during dental treatments.",
        workflowHighlight: "Handheld electrodes calm cardiac rate before local anesthesia",
        image: "/images/campaign/dentist-fit-01.jpg",
      },
      {
        slug: "gimenes-arsti",
        category: "clinical",
        name: "General Practice & Family Doctors",
        badge: "Medical Practices",
        summary: "A soothing waiting room and preparation layer that helps patients arrive grounded and attentive for consultations.",
        workflowHighlight: "Turns anxious waiting room minutes into constructive calm",
        image: "/images/campaign/gp-fit-waiting-room.jpg",
      },
      {
        slug: "poliklinika",
        category: "clinical",
        name: "Polyclinics & Integrated Centers",
        badge: "Healthcare Centers",
        summary: "High-throughput departmental wellbeing stations serving multiple medical specialties with zero staff overhead.",
        workflowHighlight: "Standardized 15-minute reset protocols across outpatient wards",
        image: "/images/campaign/poliklinika-fit-waiting.jpg",
      },
      {
        slug: "vecu-cilveku-aprupe",
        category: "clinical",
        name: "Senior Care & Assisted Living",
        badge: "Elder Care",
        summary: "Gentle non-pharmacological comfort support promoting physical relaxation, circulation, and quiet night-time settling.",
        workflowHighlight: "Comfortable bedside and lounge relaxation rituals",
        image: "/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg",
      },
      {
        slug: "masaza",
        category: "manual",
        name: "Massage & Bodywork Practices",
        badge: "Bodywork",
        summary: "Pre-softens tight fascia and muscular hyper-tonicity before deep tissue, Thai, sports, or relaxation bodywork.",
        workflowHighlight: "Client arrives relaxed so therapist does not lose the first 15 minutes",
        image: "/images/campaign/massage-hero.jpg",
      },
      {
        slug: "joga-meditacija",
        category: "sports",
        name: "Yoga & Meditation Studios",
        badge: "Mind-Body",
        summary: "Grounding bio-electromagnetic signals that deepen savasana, ease transition into meditation, and anchor private 1:1 sessions.",
        workflowHighlight: "Signature savasana and workshop decompression rituals",
        image: "/images/campaign/yoga-hero.jpg",
      },
      {
        slug: "sporta-zales",
        category: "sports",
        name: "Gyms & CrossFit Facilities",
        badge: "Fitness Clubs",
        summary: "Turn passive member departures into a premium post-workout recovery station that drives retention and premium memberships.",
        workflowHighlight: "Self-service recovery station operated directly by members",
        image: "/images/campaign/gym-hero.jpg",
      },
      {
        slug: "padel-klubi",
        category: "clubs",
        name: "Padel Clubs & Academies",
        badge: "Racket Sports",
        summary: "Post-match recovery lounge stations that ease arm, shoulder, and knee strain after fast-paced court play.",
        workflowHighlight: "Extends clubhouse dwell time and enhances member satisfaction",
        image: "/images/campaign/padel-recovery-room.jpg",
      },
      {
        slug: "tenisa-klubi",
        category: "clubs",
        name: "Tennis Clubs & Facilities",
        badge: "Racket Sports",
        summary: "Accelerates recovery for tennis elbow, shoulder fatigue, and leg stiffness between tournament matches and league play.",
        workflowHighlight: "Clubhouse recovery zone supporting competitive players",
        image: "/images/campaign/tennis-fit-recovery-room.jpg",
      },
      {
        slug: "golfa-klubi",
        category: "clubs",
        name: "Golf Clubs & Resorts",
        badge: "Country Clubs",
        summary: "Relieves lumbar compression and rotational swing fatigue after 18 holes, giving members a signature clubhouse experience.",
        workflowHighlight: "Post-round spinal decompression station in locker rooms",
        image: "/images/campaign/golf-fit-recovery-room.jpg",
      },
      {
        slug: "spa-viesnicas",
        category: "hospitality",
        name: "Spa Hotels & Destination Resorts",
        badge: "Luxury Hospitality",
        summary: "Elevates guest room amenities, couples rituals, and thermal suite relaxation with high-end Austrian wellness technology.",
        workflowHighlight: "Pre-treatment relaxation enhancer or private suite ritual",
        image: "/images/campaign/spa-fit-signature.jpg",
      },
      {
        slug: "spa-wellness",
        category: "hospitality",
        name: "Day Spas & Thermal Wellness",
        badge: "Day Spas",
        summary: "Creates differentiated signature treatment packages and tactile recovery zones that justify premium pricing.",
        workflowHighlight: "Signature treatment booster and lounge enhancement",
        image: "/images/campaign/day-spa-fit-signature.jpg",
      },
    ],
  },
  de: {
    metaTitle: "Professionelle Branchen-Übersicht für Praxen & Kliniken | sanza × Nordora Vital",
    metaDescription:
      "Entdecken Sie alle 16 professionellen Fachbereiche für sanza: Physiotherapie, Chiropraktik, Sportmedizin, Zahnarztpraxen, Naturheilkunde, Fitness und Spas.",
    eyebrow: "Branchenlösungen & Praxisverzeichnis",
    title: "Eine ruhige Wohlfühlebene für jedes professionelle Behandlungsumfeld",
    subtitle:
      "Von klinischer Rehabilitation und Manualtherapie über Hochleistungs-Sportzentren bis hin zu Luxus-Spas – erfahren Sie, wie sanza Ihre Räume bereichert, ohne Ihre Kernarbeit zu stören.",
    allFilter: "Alle Branchen (16)",
    clinicalFilter: "Klinisch & Medizinisch",
    manualFilter: "Manuell & Ganzheitlich",
    sportsFilter: "Sport & Leistung",
    clubsFilter: "Tennis-, Padel- & Golfclubs",
    hospitalityFilter: "Luxus-Hotels & Spas",
    viewSectorPage: "Branchen-Landingpage ansehen",
    workflowEyebrow: "Praxisablauf",
    workflowTitle: "Wie sich sanza in professionelle Arbeitsabläufe einfügt",
    faqEyebrow: "Fragen von Praxisinhabern",
    faqTitle: "Häufige Fragen zur Einführung in Praxen",
    faqs: [
      {
        question: "Greift sanza in medizinische Diagnosen oder Protokolle ein?",
        answer:
          "Nein. sanza ist als ergänzendes Wohlfühlsystem mit nicht-invasivem PEMF, Biofrequenz und Kaltlicht konzipiert. Es ersetzt weder Ihre klinische Beurteilung noch manuelle Techniken.",
      },
      {
        question: "Wie lange dauert die Einweisung des Teams?",
        answer:
          "Die Einarbeitung dauert etwa 10 bis 15 Minuten. Das System verfügt über 15 vordefinierte Programme und erfordert keine aufwendigen Einstellungen im Praxisalltag.",
      },
      {
        question: "Können wir sanza vor einer Entscheidung in der Praxis testen?",
        answer:
          "Ja. Wir bieten Praxiseigentümern und Therapeuten eine Vor-Ort-Demonstration und Pilotphase an, um den beruhigenden Effekt direkt im Behandlungsalltag zu erleben.",
      },
      {
        question: "Welche Applikatoren eignen sich für Behandlungsräume?",
        answer:
          "In der Regel wird die Ganzkörpermatte auf der Behandlungsliege genutzt, ergänzt durch Handelektroden zur vegetativen Erdung und gezielte Laserstifte für Problemzonen.",
      },
    ],
    ctaEyebrow: "Praxis-Demo & Pilotierung",
    ctaTitle: "Erleben Sie sanza direkt in Ihren Behandlungsräumen.",
    ctaBody:
      "Wir vereinbaren eine unverbindliche Vor-Ort-Demonstration, exakt abgestimmt auf Ihre Räumlichkeiten und Ihren Patientenablauf. Ohne Verkaufsdruck.",
    ctaPrimary: "Praxis-Demo anfordern",
    ctaSecondary: "Pilotkonzept herunterladen",
    sectors: [
      {
        slug: "fizioterapija",
        category: "clinical",
        name: "Physiotherapie & Rehabilitation",
        badge: "Reha-Praxen",
        summary: "Patienten kommen gelöster an, entspannen schneller auf der Liege und sprechen besser auf manuelle Techniken an.",
        workflowHighlight: "10-minütiges Ankunftsprogramm vor der ersten Berührung",
        image: "/images/campaign/physio-hero-premium.jpg",
      },
      {
        slug: "sporta-medicina",
        category: "sports",
        name: "Sportmedizin & Regenerationszentren",
        badge: "Sportleistung",
        summary: "Senkt Stresshormone nach harten Einheiten, beschleunigt die Geweberegeneration und schafft eine erstklassige Erholungsstation.",
        workflowHighlight: "Automatisierte Erholungsstation ohne zusätzlichen Personalbedarf",
        image: "/images/campaign/sports-medicine-hero.jpg",
      },
      {
        slug: "hiropraktika",
        category: "manual",
        name: "Chiropraktik & Manualtherapie",
        badge: "Wirbelsäule & Gelenke",
        summary: "Dämpft reflektorische Schutzspannungen der paraspinalen Muskulatur, sodass Justierungen mit weniger Kraftaufwand gelingen.",
        workflowHighlight: "Gewebeentspannung vor dem manuellen Impuls",
        image: "/images/campaign/chiro-hero.jpg",
      },
      {
        slug: "alternativie-terapeiti",
        category: "manual",
        name: "Heilpraktiker & Naturheilkunde",
        badge: "Ganzheitliche Medizin",
        summary: "Sanfte Frequenz- und PEMF-Unterstützung für vegetative Balance rund um homöopathische und naturheilkundliche Behandlungen.",
        workflowHighlight: "Schafft einen ruhigen Rahmen vor und nach der Beratung",
        image: "/images/campaign/alternative-therapists-hero.jpg",
      },
      {
        slug: "zobarstnieciba",
        category: "clinical",
        name: "Zahnarztpraxen & Kliniken",
        badge: "Entspannung im Stuhl",
        summary: "Baut Weißkittel-Syndrom und Behandlungsangst ab – für ruhige Kooperation während zahnmedizinischer Eingriffe.",
        workflowHighlight: "Handelektroden beruhigen den Puls vor der Anästhesie",
        image: "/images/campaign/dentist-fit-01.jpg",
      },
      {
        slug: "gimenes-arsti",
        category: "clinical",
        name: "Hausarztpraxen & Allgemeinmedizin",
        badge: "Arztpraxen",
        summary: "Eine wohltuende Vorbereitung im Warte- oder Vorbereitungsbereich, damit Patienten entspannt ins Arztgespräch gehen.",
        workflowHighlight: "Verwandelt Wartezeit in constructive Entspannung",
        image: "/images/campaign/gp-fit-waiting-room.jpg",
      },
      {
        slug: "poliklinika",
        category: "clinical",
        name: "Polikliniken & Medizinische Zentren",
        badge: "Ärztehäuser",
        summary: "Abteilungsübergreifende Wohlfühlstationen für hohe Patientenzahlen ohne zusätzlichen Personalaufwand.",
        workflowHighlight: "Standardisierte 15-Minuten-Abläufe in der Ambulanz",
        image: "/images/campaign/poliklinika-fit-waiting.jpg",
      },
      {
        slug: "vecu-cilveku-aprupe",
        category: "clinical",
        name: "Seniorenpflege & Seniorenresidenzen",
        badge: "Pflegeeinrichtungen",
        summary: "Sanfte, nicht-medikamentöse Wohlfühlrituale für mehr körperlichen Komfort, Durchblutung und abendliche Ruhe.",
        workflowHighlight: "Erholsame Rituale im Ruheraum oder am Pflegebett",
        image: "/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg",
      },
      {
        slug: "masaza",
        category: "manual",
        name: "Massagepraxen & Bodywork",
        badge: "Körpertherapie",
        summary: "Lockert feste Faszien und Gewebespannungen vor, sodass Therapeuten nicht die ersten 15 Minuten mit Vorarbeiten verlieren.",
        workflowHighlight: "Klient entspannt vorab auf der Liege",
        image: "/images/campaign/massage-hero.jpg",
      },
      {
        slug: "joga-meditacija",
        category: "sports",
        name: "Yoga- & Meditationsstudios",
        badge: "Mind-Body",
        summary: "Erdende Schwingungen, die Savasana vertiefen, den Einstieg in Meditation erleichtern und 1:1-Einheiten aufwerten.",
        workflowHighlight: "Exklusive Savasana- und Workshop-Rituale",
        image: "/images/campaign/yoga-hero.jpg",
      },
      {
        slug: "sporta-zales",
        category: "sports",
        name: "Fitnessstudios & CrossFit-Boxen",
        badge: "Fitnessanlagen",
        summary: "Verwandelt das Training in ein ganzheitliches Erlebnis mit eigener Regenerationsstation – für stärkere Mitgliederbindung.",
        workflowHighlight: "Selbstbedienungs-Erholungsstation für Mitglieder",
        image: "/images/campaign/gym-hero.jpg",
      },
      {
        slug: "padel-klubi",
        category: "clubs",
        name: "Padelclubs & Hallen",
        badge: "Racketsport",
        summary: "Regenerationsstationen nach dynamischen Matches zur Entlastung von Schultern, Ellbogen und Beinen.",
        workflowHighlight: "Verlängert die Verweildauer im Clubhaus",
        image: "/images/campaign/padel-recovery-room.jpg",
      },
      {
        slug: "tenisa-klubi",
        category: "clubs",
        name: "Tennisclubs & Akademien",
        badge: "Racketsport",
        summary: "Unterstützt beanspruchte Schlagarme, Achillessehnen und Knie zwischen anstrengenden Matches und Turnieren.",
        workflowHighlight: "Erholungszone für leistungsorientierte Spieler",
        image: "/images/campaign/tennis-fit-recovery-room.jpg",
      },
      {
        slug: "golfa-klubi",
        category: "clubs",
        name: "Golfclubs & Resorts",
        badge: "Golfsport",
        summary: "Löst Rotationsbelastung und Verspannungen im Lendenwirbelbereich nach 18 Löchern – ein Premium-Angebot im Clubhaus.",
        workflowHighlight: "Wirbelsäulen-Dekompression nach der Runde",
        image: "/images/campaign/golf-fit-recovery-room.jpg",
      },
      {
        slug: "spa-viesnicas",
        category: "hospitality",
        name: "Spa-Hotels & Wellness-Resorts",
        badge: "Luxushotellerie",
        summary: "Bereichert Ruheräume, Paar-Suiten und Behandlungsrituale mit anspruchsvoller österreichischer Wellness-Technologie.",
        workflowHighlight: "Vorbehandlung oder privates Suiten-Ritual",
        image: "/images/campaign/spa-fit-signature.jpg",
      },
      {
        slug: "spa-wellness",
        category: "hospitality",
        name: "Day Spas & Thermen",
        badge: "Day Spas",
        summary: "Schafft unverwechselbare Behandlungspakete und Liegebereiche, die erstklassige Preise rechtfertigen.",
        workflowHighlight: "Signature-Erlebnis zur Aufwertung von Massagen",
        image: "/images/campaign/day-spa-fit-signature.jpg",
      },
    ],
  },
  lv: {
    metaTitle: "Profesionālo nozaru katalogs klīnikām un centriem | sanza × Nordora Vital",
    metaDescription:
      "Iepazīstiet visu 16 profesionālo nozaru katalogu: fizioterapija, hiropraktika, sporta medicīna, zobārstniecība, alternatīvā terapija, fitnesa klubi un spa.",
    eyebrow: "Nozaru risinājumu katalogs",
    title: "Mierīgs labsajūtas slānis katrai profesionālajai videi",
    subtitle:
      "No klīniskās rehabilitācijas un manuālās terapijas līdz sporta centriem un luksusa spa — uzziniet, kā sanza iekļaujas jūsu telpās, nemainot jūsu pamatdarbu.",
    allFilter: "Visas nozares (16)",
    clinicalFilter: "Klīnikas un medicīna",
    manualFilter: "Manuālā un holistiskā aprūpe",
    sportsFilter: "Sports un sniegums",
    clubsFilter: "Tenisa, padela un golfa klubi",
    hospitalityFilter: "Luksusa spa un viesnīcas",
    viewSectorPage: "Skatīt nozares lapu",
    workflowEyebrow: "Darba plūsma",
    workflowTitle: "Kā sanza iekļaujas profesionāļu ikdienā",
    faqEyebrow: "Klīniku vadītāju jautājumi",
    faqTitle: "Biežāk uzdotie jautājumi par ieviešanu",
    faqs: [
      {
        question: "Vai sanza iejaucas medicīniskajā protokolā?",
        answer:
          "Nē. sanza ir labsajūtas atbalsta sistēma ar maigu PEMF, biofrekvencēm un gaismu. Tā neaizstāj jūsu ārstēšanas plānu vai manipulācijas.",
      },
      {
        question: "Cik ilgā laikā personāls apgūst sistēmu?",
        answer:
          "Apmācība aizņem aptuveni 10–15 minūtes. Pultij ir 15 numurētas programmas, kas neprasa sarežģītus iestatījumus.",
      },
      {
        question: "Vai varam izmēģināt sanza savā klīnikā?",
        answer:
          "Jā. Mēs piedāvājam demonstrāciju uz vietas un pilotprogrammu, lai jūs varētu novērtēt efektu savā ikdienas darbā.",
      },
      {
        question: "Kādi aplikatori ir piemēroti procedūru telpām?",
        answer:
          "Visbiežāk izmanto visa ķermeņa paklāju uz kušetes, rokas elektrodus un lāzera aplikatoru noslogotām zonām.",
      },
    ],
    ctaEyebrow: "Demonstrācija klīnikā",
    ctaTitle: "Izmēģiniet sanza savās procedūru telpās.",
    ctaBody:
      "Mēs organizēsim bezmaksas demonstrāciju uz vietas, kas pielāgota jūsu telpām un pacientu plūsmai.",
    ctaPrimary: "Pieteikt klīnikas demo",
    ctaSecondary: "Lejupielādēt pilotprogrammas plānu",
    sectors: [
      {
        slug: "fizioterapija",
        category: "clinical",
        name: "Fizioterapija un rehabilitācija",
        badge: "Rehabilitācija",
        summary: "Pacienti ierodas mazāk saspringti, ātrāk atslābst uz galda un labāk reaģē uz manuālajām manipulācijām.",
        workflowHighlight: "10 minūšu ierašanās programma pirms speciālista pieskāriena",
        image: "/images/campaign/physio-hero-premium.jpg",
      },
      {
        slug: "sporta-medicina",
        category: "sports",
        name: "Sporta medicīna un atjaunošanās",
        badge: "Sporta sniegums",
        summary: "Pazemina stresa līmeni pēc slodzēm, paātrina reģenerāciju un rada premium atpūtas zonu sportistiem.",
        workflowHighlight: "Automātiska atjaunošanās stacija bez personāla piesaistes",
        image: "/images/campaign/sports-medicine-hero.jpg",
      },
      {
        slug: "hiropraktika",
        category: "manual",
        name: "Hiropraktika un manuālā terapija",
        badge: "Mugurkauls",
        summary: "Atslābina mugurkaula apkārtējos muskuļus, lai korekcija prasītu mazāku piepūli un neradītu pretestību.",
        workflowHighlight: "Muskuļu sagatavošana pirms manuālā impulsa",
        image: "/images/campaign/chiro-hero.jpg",
      },
      {
        slug: "alternativie-terapeiti",
        category: "manual",
        name: "Alternatīvā terapija un naturopātija",
        badge: "Holistiskā veselība",
        summary: "Maigs frekvenču slānis nervu sistēmas līdzsvaram homeopātijas un naturopātijas seansu laikā.",
        workflowHighlight: "Mierīga vide pirms un pēc konsultācijas",
        image: "/images/campaign/alternative-therapists-hero.jpg",
      },
      {
        slug: "zobarstnieciba",
        category: "clinical",
        name: "Zobārstniecības klīnikas",
        badge: "Miers krēslā",
        summary: "Kliedē bailes un spriedzi zobārsta krēslā, radot mierīgu sadarbību procedūras laikā.",
        workflowHighlight: "Elektrodi nomierina pulsu pirms anestēzijas",
        image: "/images/campaign/dentist-fit-01.jpg",
      },
      {
        slug: "gimenes-arsti",
        category: "clinical",
        name: "Ģimenes ārstu prakses",
        badge: "Medicīna",
        summary: "Mierpilna uzgaidāmā telpa, kas palīdz pacientam noskaņoties kvalitatīvai vizītei pie ārsta.",
        workflowHighlight: "Uzgaidāmā laika pārvēršana miera brīdī",
        image: "/images/campaign/gp-fit-waiting-room.jpg",
      },
      {
        slug: "poliklinika",
        category: "clinical",
        name: "Poliklīnikas un medicīnas centri",
        badge: "Centri",
        summary: "Universālas labsajūtas stacijas nodaļās ar lielu pacientu plūsmu bez papildu personāla slodzes.",
        workflowHighlight: "Standartizēti 15 minūšu atpūtas protokoli",
        image: "/images/campaign/poliklinika-fit-waiting.jpg",
      },
      {
        slug: "vecu-cilveku-aprupe",
        category: "clinical",
        name: "Senioru aprūpes nami un rezidences",
        badge: "Senioru aprūpe",
        summary: "Maiga, neinvazīva labsajūtas procedūra fiziskam komfortam, asinsritei un vakara mieram.",
        workflowHighlight: "Mierpilni rituāli atpūtas telpās vai pie gultas",
        image: "/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg",
      },
      {
        slug: "masaza",
        category: "manual",
        name: "Masāžas prakses",
        badge: "Ķermeņa terapija",
        summary: "Sagatavo muskuļus un fascijas, lai masieris nezaudētu pirmās 15 minūtes sasprindzinājuma kliedēšanai.",
        workflowHighlight: "Klients apguļas uz paklāja pirms seansa",
        image: "/images/campaign/massage-hero.jpg",
      },
      {
        slug: "joga-meditacija",
        category: "sports",
        name: "Jogas un meditācijas studijas",
        badge: "Mind-Body",
        summary: "Piezemējošas frekvences, kas padziļina savasanu un palīdz noskaņoties meditācijai.",
        workflowHighlight: "Īpaši noslēguma un darbnīcu rituāli",
        image: "/images/campaign/yoga-hero.jpg",
      },
      {
        slug: "sporta-zales",
        category: "sports",
        name: "Fitnesa klubi un CrossFit zāles",
        badge: "Fitness",
        summary: "Atjaunošanās stacija, kas veicina biedru lojalitāti un rada jaunu pievienoto vērtību treniņam.",
        workflowHighlight: "Pašapkalpošanās atjaunošanās zona biedriem",
        image: "/images/campaign/gym-hero.jpg",
      },
      {
        slug: "padel-klubi",
        category: "clubs",
        name: "Padela klubi",
        badge: "Rakešu sports",
        summary: "Atpūtas stacijas pēc intensīvām spēlēm roku, plecu un ceļu atslogošanai.",
        workflowHighlight: "Pagarina biedru uzturēšanās laiku klubā",
        image: "/images/campaign/padel-recovery-room.jpg",
      },
      {
        slug: "tenisa-klubi",
        category: "clubs",
        name: "Tenisa klubi un akadēmijas",
        badge: "Rakešu sports",
        summary: "Atbalsta noslogotos elkoņus un muskuļus starp turnīru spēlēm.",
        workflowHighlight: "Spēlētāju atjaunošanās zona kluba telpās",
        image: "/images/campaign/tennis-fit-recovery-room.jpg",
      },
      {
        slug: "golfa-klubi",
        category: "clubs",
        name: "Golfa klubi un kūrorti",
        badge: "Golfs",
        summary: "Atslogo mugurkaulu un mazina nogurumu pēc 18 bedrītēm kluba telpās.",
        workflowHighlight: "Muguras atslogošanas zona pēc spēles",
        image: "/images/campaign/golf-fit-recovery-room.jpg",
      },
      {
        slug: "spa-viesnicas",
        category: "hospitality",
        name: "Spa viesnīcas un kūrorti",
        badge: "Viesmīlība",
        summary: "Papildina numuru ērtības un pāru procedūras ar izsmalcinātu Austrijas tehnoloģiju.",
        workflowHighlight: "Rituāls pirms procedūras vai privātajos numuros",
        image: "/images/campaign/spa-fit-signature.jpg",
      },
      {
        slug: "spa-wellness",
        category: "hospitality",
        name: "Dienas spa un termālie kompleksi",
        badge: "Spa kompleksi",
        summary: "Rada unikālas procedūru paketes un relaksācijas zonas, kas pamato premium cenu.",
        workflowHighlight: "Ekskluzīvs rituāls pirms vai pēc masāžas",
        image: "/images/campaign/day-spa-fit-signature.jpg",
      },
    ],
  },
  ru: {
    metaTitle: "Каталог профессиональных направлений для клиник и центров | sanza × Nordora Vital",
    metaDescription:
      "Полный каталог 16 профессиональных сфер интеграции sanza: физиотерапия, хиропрактика, спорт, стоматология, натуропатия, фитнес и спа.",
    eyebrow: "Каталог отраслевых решений",
    title: "Атмосфера спокойствия для каждого профессионального кабинета",
    subtitle:
      "От клиник реабилитации и мануальной терапии до центров спорта и роскошных спа — узнайте, как sanza обогащает рабочее пространство без вмешательства в медицинский протокол.",
    allFilter: "Все направления (16)",
    clinicalFilter: "Клиническая медицина",
    manualFilter: "Мануальные и холистические практики",
    sportsFilter: "Спорт и реабилитация",
    clubsFilter: "Теннисные, падел и гольф-клубы",
    hospitalityFilter: "Спа-отели и курорты",
    viewSectorPage: "Перейти к странице направления",
    workflowEyebrow: "Рабочий процесс",
    workflowTitle: "Как sanza встраивается в график специалистов",
    faqEyebrow: "Вопросы владельцев практик",
    faqTitle: "Часто задаваемые вопросы о внедрении",
    faqs: [
      {
        question: "Вмешивается ли sanza в протокол лечения врача?",
        answer:
          "Нет. sanza является сопутствующей системой релаксации на основе PEMF, биочастот и света. Она не заменяет врачебные манипуляции или протоколы реабилитации.",
      },
      {
        question: "Сколько времени занимает обучение персонала?",
        answer:
          "Около 10–15 минут. Пульт оснащен 15 готовыми программами, не требующими сложных настроек во время приема пациентов.",
      },
      {
        question: "Можно ли протестировать систему в нашей клинике?",
        answer:
          "Да. Мы организуем выездную демонстрацию и пилотный период, чтобы специалисты оценили эффект расслабления в реальных кабинетах.",
      },
      {
        question: "Какая комплектация подходит для кабинетов?",
        answer:
          "Обычно используется коврик на кушетку для снятия общего тонуса, электроды в руки и точечный лазер для триггерных зон.",
      },
    ],
    ctaEyebrow: "Демонстрация в клинике",
    ctaTitle: "Протестируйте sanza в вашем кабинете.",
    ctaBody:
      "Мы проведем демонстрацию в вашей клинике, адаптированную под ваш график и поток пациентов. Без давления и навязывания.",
    ctaPrimary: "Заказать демонстрацию",
    ctaSecondary: "Скачать план пилота",
    sectors: [
      {
        slug: "fizioterapija",
        category: "clinical",
        name: "Физиотерапия и реабилитация",
        badge: "Реабилитация",
        summary: "Пациенты приходят менее зажатыми, быстрее расслабляются на столе и лучше откликаются на мануальную терапию.",
        workflowHighlight: "10 минут на мате перед началом мануальной работы",
        image: "/images/campaign/physio-hero-premium.jpg",
      },
      {
        slug: "sporta-medicina",
        category: "sports",
        name: "Спортивная медицина и центры",
        badge: "Спорт высших достижений",
        summary: "Снижает уровень кортизола после нагрузок, снимает крепатуру и создает автономную станцию регенерации.",
        workflowHighlight: "Автономная станция восстановления без участия персонала",
        image: "/images/campaign/sports-medicine-hero.jpg",
      },
      {
        slug: "hiropraktika",
        category: "manual",
        name: "Хиропрактика и мануальная терапия",
        badge: "Позвоночник и суставы",
        summary: "Снимает спазм околопозвоночных мышц, позволяя выполнять манипуляции без сопротивления пациента.",
        workflowHighlight: "Расслабление мышц спины перед импульсом",
        image: "/images/campaign/chiro-hero.jpg",
      },
      {
        slug: "alternativie-terapeiti",
        category: "manual",
        name: "Альтернативная медицина и натуропатия",
        badge: "Холистическое здоровье",
        summary: "Мягкая частотная поддержка для вегетативного баланса на приемах гомеопатов и натуропатов.",
        workflowHighlight: "Создает атмосферу доверия и покоя до и после беседы",
        image: "/images/campaign/alternative-therapists-hero.jpg",
      },
      {
        slug: "zobarstnieciba",
        category: "clinical",
        name: "Стоматологические клиники",
        badge: "Спокойствие в кресле",
        summary: "Снимает синдром белого халата и панику перед анестезией, обеспечивая спокойный ход приема.",
        workflowHighlight: "Электроды стабилизируют пульс перед вмешательством",
        image: "/images/campaign/dentist-fit-01.jpg",
      },
      {
        slug: "gimenes-arsti",
        category: "clinical",
        name: "Семейная медицина и терапия",
        badge: "Врачебные практики",
        summary: "Зона расслабления в зоне ожидания, подготавливающая пациентов к конструктивному диалогу с врачом.",
        workflowHighlight: "Превращает тревожное ожидание в полезный отдых",
        image: "/images/campaign/gp-fit-waiting-room.jpg",
      },
      {
        slug: "poliklinika",
        category: "clinical",
        name: "Поликлиники и медицинские центры",
        badge: "Многопрофильные центры",
        summary: "Универсальные релаксационные станции для отделений с высоким потоком без затрат времени врачей.",
        workflowHighlight: "Стандартизированные 15-минутные протоколы",
        image: "/images/campaign/poliklinika-fit-waiting.jpg",
      },
      {
        slug: "vecu-cilveku-aprupe",
        category: "clinical",
        name: "Уход за пожилыми и пансионаты",
        badge: "Гериатрический уход",
        summary: "Мягкий физический комфорт, улучшение микроциркуляции и спокойный сон без лишних медикаментов.",
        workflowHighlight: "Приятные сеансы в комнате отдыха или у кровати",
        image: "/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg",
      },
      {
        slug: "masaza",
        category: "manual",
        name: "Массажные кабинеты и бодиворк",
        badge: "Телесные практики",
        summary: "Предварительно расслабляет фасции и мышцы, экономя первые 15 минут работы массажиста.",
        workflowHighlight: "Клиент ложится на мат перед массажем",
        image: "/images/campaign/massage-hero.jpg",
      },
      {
        slug: "joga-meditacija",
        category: "sports",
        name: "Студии йоги и медитации",
        badge: "Mind-Body",
        summary: "Частоты заземления, углубляющие шавасану и помогающие войти в глубокую медитацию.",
        workflowHighlight: "Фирменный ритуал шавасаны и семинаров",
        image: "/images/campaign/yoga-hero.jpg",
      },
      {
        slug: "sporta-zales",
        category: "sports",
        name: "Фитнес-клубы и залы CrossFit",
        badge: "Фитнес",
        summary: "Станция быстрого восстановления после тренировки, повышающая лояльность членов клуба.",
        workflowHighlight: "Зона самообслуживания для атлетов",
        image: "/images/campaign/gym-hero.jpg",
      },
      {
        slug: "padel-klubi",
        category: "clubs",
        name: "Падел-клубы",
        badge: "Ракетный спорт",
        summary: "Разгрузка плеч, локтей и коленей после динамичной игры на корте.",
        workflowHighlight: "Увеличивает время пребывания гостей в клубе",
        image: "/images/campaign/padel-recovery-room.jpg",
      },
      {
        slug: "tenisa-klubi",
        category: "clubs",
        name: "Теннисные клубы и академии",
        badge: "Ракетный спорт",
        summary: "Снижает риск теннисного локтя и снимает усталость ног между матчами турнира.",
        workflowHighlight: "Зона релаксации для теннисистов в клубе",
        image: "/images/campaign/tennis-fit-recovery-room.jpg",
      },
      {
        slug: "golfa-klubi",
        category: "clubs",
        name: "Гольф-клубы и резорты",
        badge: "Гольф",
        summary: "Разгружает поясницу от ротационной нагрузки после 18 лунок в клубной зоне.",
        workflowHighlight: "Декомпрессия спины после игры в гольф",
        image: "/images/campaign/golf-fit-recovery-room.jpg",
      },
      {
        slug: "spa-viesnicas",
        category: "hospitality",
        name: "Спа-отели и велнес-курорты",
        badge: "Премиум-отели",
        summary: "Обогащает отдых в люксах и спа-сьютах высокими австрийскими технологиями.",
        workflowHighlight: "Ритуал перед процедурой или в номере отеля",
        image: "/images/campaign/spa-fit-signature.jpg",
      },
      {
        slug: "spa-wellness",
        category: "hospitality",
        name: "Дневные спа и термы",
        badge: "Дневные спа",
        summary: "Создает авторские пакеты процедур и премиальные зоны релаксации.",
        workflowHighlight: "Фирменный ритуал в дополнение к массажу",
        image: "/images/campaign/day-spa-fit-signature.jpg",
      },
    ],
  },
};

export function getProfessionalDirectoryContent(locale: string): ProfessionalDirectoryContent {
  const activeLocale: "en" | "de" | "lv" | "ru" =
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en";
  return PROFESSIONAL_DIRECTORY_DATA[activeLocale];
}
