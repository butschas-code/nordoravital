import type { CampaignPageContent } from "@/types/campaign-page";

type MassageLocale = "en" | "de" | "lv";

const images = {
  hero: "/images/campaign/day-spa-hero.jpg",
  problem: "/images/campaign/chiro-block-1.jpg",
  fits: [
    "/images/campaign/spa-fit-pre-treatment.jpg",
    "/images/campaign/chiro-fit-applicators.jpg",
    "/images/campaign/spa-fit-relaxation.jpg",
    "/images/campaign/day-spa-fit-signature.jpg",
  ],
  practice: "/images/campaign/chiro-for-practice.jpg",
} as const;

const common = {
  en: {
    metaTitle: "Massage Practices | sanza × Nordora Vital",
    metaDescription:
      "A calm, structured wellbeing layer for clinical, sports, Thai, Ayurveda and relaxation massage practices.",
    segmentName: "Massage Practices",
    heroKicker: "For massage practices where every detail shapes the session",
    heroHeadline: "Help every massage begin calmer and end more completely.",
    heroSubhead:
      "Whether your work is clinical, restorative, Ayurvedic, Thai or deeply relaxing, the quality of the session depends on more than technique alone.\r\n\r\n<strong>sanza</strong> adds a quiet, technology-led wellbeing layer before, during or after massage — helping clients settle into the experience while your hands-on work remains entirely yours.",
    heroCtaPrimary: "Discover sanza for massage",
    heroValueProps: [
      "For clinical and ritual massage",
      "Simple therapist-led setup",
      "No change to your core technique",
    ],
    demoRequestMessage:
      "I'd like to arrange a sanza demo and receive more information for a massage practice.",
    quickStats: [
      { value: "15", label: "structured wellbeing programs" },
      { value: "1", label: "simple system for the whole team" },
      { value: "10–15 min", label: "for arrival or closing rituals" },
      { value: "0", label: "changes to your massage technique" },
    ],
    problemEyebrow: "The session begins before the first touch.",
    problemTitle: "Your hands can do their best work when the client has truly arrived.",
    problemBody:
      "Some clients come in hurried, guarded, overstimulated or unable to switch off. Others need time to move from conversation into stillness. That transition can take up the first part of a session, regardless of whether the massage is clinical, sports-focused, Thai, Ayurvedic or purely restorative.\r\n\r\n<strong>sanza</strong> gives you a simple way to shape that transition. A quiet program before the massage helps turn arrival into a deliberate part of the experience — so the room feels calmer, the session feels more considered, and clients feel looked after from the beginning.",
    solutionEyebrow: "The sanza layer",
    solutionTitle: "A structured wellbeing ritual around the hands-on work only you can provide.",
    solutionBody:
      "<strong>sanza</strong> combines gentle PEMF, structured biofrequency programs and targeted light applicators in guided sessions. Use the mat while you prepare the room, add a pad or targeted applicator during suitable parts of the massage, or offer a short closing program before the client returns to their day.\r\n\r\nIt does not replace massage, diagnose conditions or dictate your method. It simply gives your practice another way to create calm, continuity and a more distinctive client experience.",
    solutionSpecs: [
      {
        title: "Integrated",
        body: "PEMF, structured biofrequency and targeted light in one coordinated system.",
      },
      {
        title: "Adaptable",
        body: "Suitable around clinical, sports, Thai, Ayurvedic and relaxation massage formats.",
      },
      {
        title: "Simple",
        body: "Numbered programs and modular applicators make daily use easy for the team.",
      },
    ],
    fitsTitle: "Where sanza fits in a massage practice",
    fitsEyebrow: "Integration",
    fitsLead:
      "Use it where it supports your flow. Your massage remains the centre of the session.",
    fitsItems: [
      {
        title: "Calm arrival",
        body: "A short mat program while the client settles and you prepare for the hands-on session.",
      },
      {
        title: "Targeted support",
        body: "Use a pad or applicator around selected areas when it suits your professional approach.",
      },
      {
        title: "Closing ritual",
        body: "Finish with a quiet program that creates a gentler transition back into the client's day.",
      },
      {
        title: "Premium combined session",
        body: "Create a longer signature booking that pairs your massage tradition with a structured sanza experience.",
      },
    ],
    whatChangesTitle: "What changes when sanza joins your massage room",
    whatChangesEyebrow: "Experience",
    whatChangesPatientsTitle: "For your clients",
    whatChangesPatientsItems: [
      "A clearer transition into and out of the massage",
      "A session that feels calm, considered and complete",
      "A distinctive experience they can remember and request again",
    ],
    whatChangesPracticeTitle: "For your practice",
    whatChangesPracticeItems: [
      "A premium addition that complements rather than replaces your work",
      "New options for signature sessions, upgrades and repeat bookings",
      "A simple point of difference across clinical and wellbeing-led massage",
    ],
    socialProofLabel: "Built around your method",
    socialProofQuote:
      "The therapist remains the reason clients return. sanza helps the whole experience support that work.",
    socialProofAttribution: "Nordora Vital · Professional partner programme",
    demoStepsEyebrow: "What happens after you contact us",
    demoStepsTitle: "See how sanza fits your massage style.",
    demoStepsLead:
      "We tailor the demonstration to your rooms, session length, massage traditions and preferred client flow.",
    demoSteps: [
      {
        title: "Short fit call",
        body: "We learn whether your work is clinical, sports-focused, Ayurvedic, Thai, relaxation-led or a mix.",
      },
      {
        title: "Practical demonstration",
        body: "You experience the programs and explore realistic touchpoints around your current sessions.",
      },
      {
        title: "Clear next steps",
        body: "If it fits, we recommend a setup and onboarding path. If not, you still leave informed.",
      },
    ],
    finalCtaTitle: "Let your massage remain the craft. Make the whole session feel more complete.",
    finalCtaBody:
      "Arrange a no-pressure demonstration tailored to your practice and massage style.",
    finalCtaPrimary: "Arrange a massage-practice demo",
  },
  de: {
    metaTitle: "Massagepraxen | sanza × Nordora Vital",
    metaDescription:
      "Eine ruhige, strukturierte Wellbeing-Ergänzung für therapeutische, sportliche, Thai-, Ayurveda- und Entspannungsmassagen.",
    segmentName: "Massagepraxen",
    heroKicker: "Für Massagepraxen, in denen jedes Detail die Sitzung prägt",
    heroHeadline: "Lassen Sie jede Massage ruhiger beginnen und vollständiger enden.",
    heroSubhead:
      "Ob therapeutisch, regenerativ, ayurvedisch, Thai oder tief entspannend: Die Qualität einer Sitzung hängt von mehr als der Technik allein ab.\r\n\r\n<strong>sanza</strong> ergänzt die Massage davor, währenddessen oder danach um eine ruhige, technologiegestützte Wellbeing-Ebene. Ihre manuelle Arbeit bleibt dabei vollständig Ihre.",
    heroCtaPrimary: "sanza für Massage entdecken",
    heroValueProps: [
      "Für therapeutische und rituelle Massage",
      "Einfaches Setup für Therapeuten",
      "Keine Änderung Ihrer Kerntechnik",
    ],
    demoRequestMessage:
      "Ich möchte eine sanza-Demo vereinbaren und weitere Informationen für eine Massagepraxis erhalten.",
    quickStats: [
      { value: "15", label: "strukturierte Wellbeing-Programme" },
      { value: "1", label: "einfaches System für das ganze Team" },
      { value: "10–15 Min", label: "für Ankunft oder Ausklang" },
      { value: "0", label: "Änderungen an Ihrer Massagetechnik" },
    ],
    problemEyebrow: "Die Sitzung beginnt vor der ersten Berührung.",
    problemTitle: "Ihre Hände können am besten arbeiten, wenn der Kunde wirklich angekommen ist.",
    problemBody:
      "Manche Kunden kommen gehetzt, angespannt, überreizt oder unfähig abzuschalten. Andere brauchen Zeit, um vom Gespräch in die Ruhe zu finden. Dieser Übergang kann den ersten Teil einer Sitzung beanspruchen – unabhängig davon, ob die Massage therapeutisch, sportlich, Thai, ayurvedisch oder rein entspannend ist.\r\n\r\n<strong>sanza</strong> gibt Ihnen eine einfache Möglichkeit, diesen Übergang bewusst zu gestalten. Ein ruhiges Programm vor der Massage macht das Ankommen zu einem festen Teil der Erfahrung – damit der Raum ruhiger wirkt, die Sitzung durchdachter erscheint und sich Kunden von Anfang an gut aufgehoben fühlen.",
    solutionEyebrow: "Die sanza-Ebene",
    solutionTitle: "Ein strukturiertes Wellbeing-Ritual rund um die manuelle Arbeit, die nur Sie leisten können.",
    solutionBody:
      "<strong>sanza</strong> verbindet sanftes PEMF, strukturierte Biofrequenzprogramme und gezielte Lichtapplikatoren in geführten Sitzungen. Nutzen Sie die Matte während der Vorbereitung, ergänzen Sie geeignete Massagephasen mit Pad oder Applikator oder bieten Sie ein kurzes Abschlussprogramm an, bevor der Kunde in den Alltag zurückkehrt.\r\n\r\nsanza ersetzt keine Massage, stellt keine Diagnosen und schreibt Ihnen keine Methode vor. Das System gibt Ihrer Praxis lediglich eine weitere Möglichkeit, Ruhe, Kontinuität und ein unverwechselbares Kundenerlebnis zu schaffen.",
    solutionSpecs: [
      {
        title: "Integriert",
        body: "PEMF, strukturierte Biofrequenz und gezieltes Licht in einem abgestimmten System.",
      },
      {
        title: "Anpassbar",
        body: "Passend rund um therapeutische, sportliche, Thai-, Ayurveda- und Entspannungsmassagen.",
      },
      {
        title: "Einfach",
        body: "Nummerierte Programme und modulare Applikatoren erleichtern die tägliche Nutzung.",
      },
    ],
    fitsTitle: "Wo sanza in eine Massagepraxis passt",
    fitsEyebrow: "Integration",
    fitsLead:
      "Nutzen Sie sanza dort, wo es Ihren Ablauf unterstützt. Ihre Massage bleibt das Zentrum der Sitzung.",
    fitsItems: [
      {
        title: "Ruhiges Ankommen",
        body: "Ein kurzes Mattenprogramm, während der Kunde zur Ruhe kommt und Sie die manuelle Sitzung vorbereiten.",
      },
      {
        title: "Gezielte Ergänzung",
        body: "Nutzen Sie Pad oder Applikator an ausgewählten Bereichen, wenn es zu Ihrem professionellen Ansatz passt.",
      },
      {
        title: "Abschlussritual",
        body: "Beenden Sie die Sitzung mit einem ruhigen Programm für einen sanfteren Übergang zurück in den Alltag.",
      },
      {
        title: "Premium-Kombinationssitzung",
        body: "Verbinden Sie Ihre Massagetradition mit einer strukturierten sanza-Erfahrung zu einem längeren Signature-Angebot.",
      },
    ],
    whatChangesTitle: "Was sich verändert, wenn sanza in Ihren Massageraum kommt",
    whatChangesEyebrow: "Erfahrung",
    whatChangesPatientsTitle: "Für Ihre Kunden",
    whatChangesPatientsItems: [
      "Ein klarerer Übergang in die Massage und zurück in den Alltag",
      "Eine Sitzung, die ruhig, durchdacht und vollständig wirkt",
      "Eine unverwechselbare Erfahrung, an die man sich erinnert und die man erneut bucht",
    ],
    whatChangesPracticeTitle: "Für Ihre Praxis",
    whatChangesPracticeItems: [
      "Eine Premium-Ergänzung, die Ihre Arbeit unterstützt statt ersetzt",
      "Neue Möglichkeiten für Signature-Sitzungen, Upgrades und Folgebuchungen",
      "Ein einfacher Unterschied im therapeutischen wie im wellnessorientierten Massagebereich",
    ],
    socialProofLabel: "Rund um Ihre Methode entwickelt",
    socialProofQuote:
      "Der Therapeut bleibt der Grund, warum Kunden wiederkommen. sanza hilft der gesamten Erfahrung, diese Arbeit zu unterstützen.",
    socialProofAttribution: "Nordora Vital · Professionelles Partnerprogramm",
    demoStepsEyebrow: "Was nach Ihrer Anfrage passiert",
    demoStepsTitle: "Erleben Sie, wie sanza zu Ihrem Massagestil passt.",
    demoStepsLead:
      "Wir stimmen die Demonstration auf Ihre Räume, Sitzungsdauer, Massagetraditionen und Ihren bevorzugten Kundenablauf ab.",
    demoSteps: [
      {
        title: "Kurzes Vorgespräch",
        body: "Wir lernen, ob Sie therapeutisch, sportlich, ayurvedisch, mit Thai-Massage, entspannungsorientiert oder gemischt arbeiten.",
      },
      {
        title: "Praktische Demonstration",
        body: "Sie erleben die Programme und erkunden realistische Einsatzpunkte rund um Ihre bestehenden Sitzungen.",
      },
      {
        title: "Klare nächste Schritte",
        body: "Wenn es passt, empfehlen wir Setup und Einführung. Wenn nicht, gehen Sie trotzdem informiert heraus.",
      },
    ],
    finalCtaTitle: "Ihre Massage bleibt das Handwerk. Die gesamte Sitzung wird vollständiger.",
    finalCtaBody:
      "Vereinbaren Sie eine unverbindliche Demonstration, abgestimmt auf Ihre Praxis und Ihren Massagestil.",
    finalCtaPrimary: "Demo für Massagepraxen vereinbaren",
  },
  lv: {
    metaTitle: "Masāžas prakses | sanza × Nordora Vital",
    metaDescription:
      "Mierīgs, strukturēts labsajūtas papildinājums ārstnieciskajai, sporta, taizemiešu, ājurvēdas un relaksējošajai masāžai.",
    segmentName: "Masāžas prakses",
    heroKicker: "Masāžas praksēm, kurās katra detaļa veido seansa pieredzi",
    heroHeadline: "Palīdziet katrai masāžai sākties mierīgāk un noslēgties pilnīgāk.",
    heroSubhead:
      "Neatkarīgi no tā, vai strādājat ar ārstniecisko, atjaunojošo, ājurvēdas, taizemiešu vai dziļi relaksējošo masāžu, seansa kvalitāti nosaka ne tikai tehnika.\r\n\r\n<strong>sanza</strong> pievieno klusu, tehnoloģiski vadītu labsajūtas slāni pirms masāžas, tās laikā vai pēc tās. Jūsu darbs ar rokām paliek pilnībā jūsu ziņā.",
    heroCtaPrimary: "Atklājiet sanza masāžai",
    heroValueProps: [
      "Ārstnieciskajai un rituālajai masāžai",
      "Vienkārša lietošana terapeitam",
      "Bez izmaiņām jūsu pamatmetodē",
    ],
    demoRequestMessage:
      "Vēlos pieteikt sanza demo un saņemt vairāk informācijas masāžas praksei.",
    quickStats: [
      { value: "15", label: "strukturētas labsajūtas programmas" },
      { value: "1", label: "vienkārša sistēma visai komandai" },
      { value: "10–15 min", label: "ierašanās vai noslēguma rituālam" },
      { value: "0", label: "izmaiņu jūsu masāžas tehnikā" },
    ],
    problemEyebrow: "Seanss sākas pirms pirmā pieskāriena.",
    problemTitle: "Jūsu rokas var strādāt vislabāk, kad klients ir patiesi ieradies.",
    problemBody:
      "Daži klienti ierodas steigā, saspringuši, pārslogoti vai nespējot atslēgties. Citiem vajadzīgs laiks, lai no sarunas pārietu mierā. Šī pāreja var aizņemt seansa pirmo daļu neatkarīgi no tā, vai masāža ir ārstnieciska, sporta, taizemiešu, ājurvēdas vai relaksējoša.\r\n\r\n<strong>sanza</strong> sniedz vienkāršu veidu, kā šo pāreju veidot apzināti. Klusa programma pirms masāžas padara ierašanos par pārdomātu pieredzes daļu — telpa kļūst mierīgāka, seanss šķiet pilnīgāks un klients jūtas aprūpēts jau no sākuma.",
    solutionEyebrow: "sanza slānis",
    solutionTitle: "Strukturēts labsajūtas rituāls ap darbu ar rokām, ko varat sniegt tikai jūs.",
    solutionBody:
      "<strong>sanza</strong> apvieno maigu PEMF, strukturētas biofrekvenču programmas un mērķētus gaismas aplikatorus vadītos seansos. Izmantojiet paklāju, kamēr sagatavojat telpu, piemērotos masāžas posmos pievienojiet spilventiņu vai aplikatoru, vai piedāvājiet īsu noslēguma programmu pirms klienta atgriešanās ikdienā.\r\n\r\nsanza neaizstāj masāžu, nenosaka diagnozes un nediktē jūsu metodi. Sistēma vienkārši sniedz praksei vēl vienu veidu, kā radīt mieru, nepārtrauktību un atšķirīgu klienta pieredzi.",
    solutionSpecs: [
      {
        title: "Integrēts",
        body: "PEMF, strukturētas biofrekvences un mērķēta gaisma vienā saskaņotā sistēmā.",
      },
      {
        title: "Pielāgojams",
        body: "Piemērots ārstnieciskās, sporta, taizemiešu, ājurvēdas un relaksējošās masāžas formātiem.",
      },
      {
        title: "Vienkāršs",
        body: "Numurētas programmas un modulāri aplikatori atvieglo ikdienas lietošanu komandai.",
      },
    ],
    fitsTitle: "Kur sanza iederas masāžas praksē",
    fitsEyebrow: "Integrācija",
    fitsLead:
      "Izmantojiet to tur, kur sanza atbalsta jūsu darba plūsmu. Masāža paliek seansa centrā.",
    fitsItems: [
      {
        title: "Mierīga ierašanās",
        body: "Īsa paklāja programma, kamēr klients nomierinās un jūs sagatavojaties darbam ar rokām.",
      },
      {
        title: "Mērķēts papildinājums",
        body: "Izmantojiet spilventiņu vai aplikatoru izvēlētās zonās, ja tas atbilst jūsu profesionālajai pieejai.",
      },
      {
        title: "Noslēguma rituāls",
        body: "Noslēdziet seansu ar klusu programmu, radot maigāku pāreju atpakaļ klienta ikdienā.",
      },
      {
        title: "Premium apvienotais seanss",
        body: "Izveidojiet garāku īpašo piedāvājumu, kas savieno jūsu masāžas tradīciju ar strukturētu sanza pieredzi.",
      },
    ],
    whatChangesTitle: "Kas mainās, kad sanza ienāk jūsu masāžas telpā",
    whatChangesEyebrow: "Pieredze",
    whatChangesPatientsTitle: "Jūsu klientiem",
    whatChangesPatientsItems: [
      "Skaidrāka pāreja uz masāžu un atpakaļ ikdienā",
      "Seanss, kas šķiet mierīgs, pārdomāts un pilnīgs",
      "Atšķirīga pieredze, ko atcerēties un vēlēties atkārtot",
    ],
    whatChangesPracticeTitle: "Jūsu praksei",
    whatChangesPracticeItems: [
      "Premium papildinājums, kas papildina, nevis aizstāj jūsu darbu",
      "Jaunas iespējas īpašajiem seansiem, papildpakalpojumiem un atkārtotiem pierakstiem",
      "Vienkāršs atšķirības punkts gan ārstnieciskajā, gan labsajūtas masāžā",
    ],
    socialProofLabel: "Veidots ap jūsu metodi",
    socialProofQuote:
      "Terapeits paliek iemesls, kāpēc klienti atgriežas. sanza palīdz visai pieredzei atbalstīt šo darbu.",
    socialProofAttribution: "Nordora Vital · Profesionālo partneru programma",
    demoStepsEyebrow: "Kas notiek pēc pieteikuma",
    demoStepsTitle: "Uzziniet, kā sanza iederas jūsu masāžas stilā.",
    demoStepsLead:
      "Mēs pielāgojam demonstrāciju jūsu telpām, seansa ilgumam, masāžas tradīcijām un vēlamajai klienta plūsmai.",
    demoSteps: [
      {
        title: "Īsa atbilstības saruna",
        body: "Noskaidrojam, vai strādājat ar ārstniecisko, sporta, ājurvēdas, taizemiešu, relaksējošo masāžu vai to kombināciju.",
      },
      {
        title: "Praktiska demonstrācija",
        body: "Jūs izmēģināt programmas un izpētāt reālus lietošanas punktus ap esošajiem seansiem.",
      },
      {
        title: "Skaidri nākamie soļi",
        body: "Ja sanza der, iesakām uzstādījumu un ieviešanas ceļu. Ja nē, jūs tāpat iegūstat skaidrību.",
      },
    ],
    finalCtaTitle: "Masāža paliek jūsu meistarība. Padariet visu seansu pilnīgāku.",
    finalCtaBody:
      "Piesakiet demonstrāciju bez spiediena, pielāgotu jūsu praksei un masāžas stilam.",
    finalCtaPrimary: "Pieteikt demo masāžas praksei",
  },
} as const;

function buildMassageContent(locale: MassageLocale): CampaignPageContent {
  const copy = common[locale];

  return {
    ...copy,
    heroValueProps: [...copy.heroValueProps],
    quickStats: [...copy.quickStats],
    solutionSpecs: [...copy.solutionSpecs],
    fitsItems: [...copy.fitsItems],
    whatChangesPatientsItems: [...copy.whatChangesPatientsItems],
    whatChangesPracticeItems: [...copy.whatChangesPracticeItems],
    demoSteps: [...copy.demoSteps],
    heroImage: images.hero,
    heroTextAlign: "left",
    contactCategory: "therapists",
    problemImage: images.problem,
    fitsImages: [...images.fits],
    whatChangesPracticeImage: images.practice,
    finalCtaTrustItems:
      locale === "de"
        ? ["Demo vor Ort", "Klare Setup-Empfehlung", "Kein Druck"]
        : locale === "lv"
          ? ["Demo uz vietas", "Skaidrs uzstādījuma ieteikums", "Bez spiediena"]
          : ["On-site demo", "Clear setup recommendation", "No pressure"],
  };
}

export const MASSAGE_CAMPAIGN_CONTENT: Record<
  MassageLocale,
  CampaignPageContent
> = {
  en: buildMassageContent("en"),
  de: buildMassageContent("de"),
  lv: buildMassageContent("lv"),
};
