import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface, getSiteSurface } from "@/lib/domains";
import { getHomeDisplayPath, getHomeSharedCopy, homeLocale } from "@/lib/home-copy";

type Props = { params: Promise<{ locale: string }> };

const shopUrl = "https://nordoravital.sanzanet.com/shop-en";
const heroImage = "/images/homeuse-faq-hero.jpg";
const introImage = "/images/homeuse-experiences-intro.jpg";
const ctaImage = "/images/homeuse-experiences-cta.jpg";

const pageCopy = {
  "en": {
    "metaTitle": "sanza Home FAQ | Nordora Vital",
    "metaDescription": "Answers to common questions about using sanza at home, including sessions, accessories, safety, routines and choosing the right setup.",
    "eyebrow": "FAQ",
    "headline": "Questions before you begin",
    "subheadline": "Feel clear before your first session.",
    "heroBody": "sanza is designed to be easy to use at home, but it is normal to want clear answers before you start. Here you will find what matters most: how the system works, how the accessories are used, how to choose a program, what to consider for daily use, and when to ask for individual guidance.",
    "heroClosing": "Start informed. Use it with confidence.",
    "introEyebrow": "Clear before complicated",
    "introHeadline": "Before you bring a wellness system into your home, you should understand what it does, how it fits into your day and what to expect from your first sessions.",
    "introBody": [
      "sanza is made for ordinary moments that matter: the evening shift after work, recovery after effort, preparing for sleep, slower weekends and the times when your body needs a clear pause.",
      "This FAQ gives you simple, direct answers — so you can choose your program, use the accessories correctly and begin with confidence.",
    ],
    "faqs": [
      [
        "What does sanza feel like?",
        "Most people experience sanza as a quiet, structured wellness session. The feeling depends on the program, accessory and setting, but the experience is designed to be calm, simple and easy to repeat.",
      ],
      [
        "Is sanza difficult to use?",
        "No. You choose a program, connect the accessory and start the session. The system is designed for everyday use at home without complicated setup.",
      ],
      [
        "How long is a session?",
        "Session length depends on the selected program. The goal is to make each session easy to fit into a realistic daily or weekly rhythm.",
      ],
      [
        "Can I use sanza every day?",
        "Many people build sanza into regular routines, such as evening reset, sleep preparation or recovery after activity. Always follow the usage guidance provided with your device.",
      ],
      [
        "Is sanza a medical device?",
        "The home experience should be understood as a wellness ritual. It is not presented as a replacement for medical advice, diagnosis or treatment.",
      ],
      [
        "Who should not use sanza?",
        "People with implanted electronic devices, pregnancy, serious medical conditions or specific health concerns should consult a qualified healthcare professional before use and follow the safety guidance provided with the device.",
      ],
      [
        "Which accessory should I start with?",
        "For most home users, the mat is the easiest foundation. Hand electrodes and the light applicator can add more focused session options depending on the way you want to use sanza.",
      ],
      [
        "Can two people use it?",
        "sanza can become part of a shared home wellness rhythm, but sessions are normally experienced individually depending on the setup and accessory being used.",
      ],
      [
        "Does it make noise?",
        "The experience is designed to be quiet and easy to integrate into a calm room setting.",
      ],
      [
        "How is it different from a simple wellness mat?",
        "sanza is built around a controller, accessories and structured programs. The experience is not only about lying on a mat. It is about choosing a clear ritual for a specific moment.",
      ],
      [
        "Do I need a special room?",
        "No. A quiet corner, bedroom, recovery room or calm living space is enough. Light, sound and atmosphere can make the ritual feel more complete, but the system is designed for real homes.",
      ],
      [
        "Can I use it after sport?",
        "Yes. Many home users use sanza as part of a post-activity recovery ritual after training, sport or physically demanding days.",
      ],
      [
        "Can I travel with sanza?",
        "That depends on your setup and the accessories you use. Some users build sanza into their home rhythm, while others use selected accessories after travel to help reset their routine.",
      ],
      [
        "How do I know which setup is right for me?",
        "Start with the main reason you want sanza. If you want evening calm, choose a calm-focused setup. If you want recovery after sport or travel, choose a recovery-focused setup. If you want the full experience, choose the complete home setup.",
      ],
      [
        "Can sanza help me sleep?",
        "sanza includes sleep-preparation rituals, but it should not be presented as a medical sleep treatment. Think of it as a structured wind-down experience that helps create a calmer transition before bed.",
      ],
      [
        "Are there studies or university partners behind sanza?",
        "sanza.eu lists research references and university partners including Uni Graz, Uni Budapest, Uni Mainz and the University of Physical Education. We present this as manufacturer-published background information and recommend reviewing the original sanza.eu materials for details.",
      ],
    ],
    "researchEyebrow": "Studies and partners",
    "researchHeadline": "A brief overview of the research names listed by sanza.eu.",
    "researchBody": "The manufacturer presents sanza alongside several university-linked references. For home users, the important point is simple: the system is not an anonymous gadget. It has a documented manufacturer background, named research partners and downloadable study references on sanza.eu.",
    "researchNote": "This overview is informational. It should not be read as a medical claim, treatment promise or guarantee of personal results.",
    "researchSource": "View manufacturer study overview",
    "researchPartners": [
      {
        "name": "Uni Graz",
        "topic": "Cell and nervous-system related EMF references listed by sanza.eu.",
      },
      {
        "name": "Uni Budapest",
        "topic": "Cognitive-performance research reference, including BDNF, as described by sanza.eu.",
      },
      {
        "name": "Uni Mainz",
        "topic": "Endurance and regeneration-related reference listed by sanza.eu.",
      },
      {
        "name": "University of Physical Education",
        "topic": "Overview of EMF use in sports contexts, as presented on sanza.eu.",
      },
    ],
    "safetyHeadline": "A calm ritual still deserves responsible use.",
    "safetyBody": "sanza is designed for wellness use at home. Always follow the device instructions and safety guidance. If you have a medical condition, implanted electronic device, are pregnant or have specific health concerns, consult a qualified healthcare professional before use.",
    "ctaHeadline": "Still deciding which setup fits?",
    "ctaBody": "Tell us how you want to use sanza: for calm, recovery, sleep preparation, performance or home rituals. We will guide you toward the right setup.",
    "heroAlt": "Calm premium home wellness interior with mat and accessories",
    "safetyAlt": "Instruction booklet and wellness accessories in a premium home environment",
    "ctaAlt": "Warm quiet home wellness corner with soft light and refined materials",
  },
  "de": {
    "metaTitle": "sanza Home FAQ | Nordora Vital",
    "metaDescription": "Antworten auf häufig gestellte Fragen zur Nutzung von sanza zu Hause, einschließlich Sitzungen, Zubehör, Sicherheit, Routinen und der Wahl der richtigen Konfiguration.",
    "eyebrow": "FAQ",
    "headline": "Fragen vor dem Start",
    "subheadline": "Schaffen Sie Klarheit vor Ihrer ersten Sitzung.",
    "heroBody": "sanza ist für die einfache Nutzung zu Hause konzipiert, aber es ist normal, dass Sie vor dem Start klare Antworten wünschen. Hier finden Sie das Wichtigste: wie das System funktioniert, wie das Zubehör verwendet wird, wie Sie ein Programm auswählen, was Sie beim täglichen Gebrauch beachten sollten und wann Sie individuelle Beratung einholen sollten.",
    "heroClosing": "Informiert starten. Mit Zuversicht nutzen.",
    "introEyebrow": "Einfachheit vor Komplexität",
    "introHeadline": "Bevor Sie ein Wellness-System in Ihr Zuhause holen, sollten Sie verstehen, was es bewirkt, wie es in Ihren Alltag passt und was Sie von Ihren ersten Sitzungen erwarten können.",
    "introBody": [
      "sanza ist für die alltäglichen Momente gemacht, die zählen: die Abendzeit nach der Arbeit, die Erholung nach Anstrengung, die Vorbereitung auf den Schlaf, entspannte Wochenenden und die Zeiten, in denen Ihr Körper eine klare Pause braucht.",
      "Diese FAQ geben dir einfache, direkte Antworten – damit du dein Programm auswählen, das Zubehör richtig verwenden und mit Zuversicht beginnen kannst.",
    ],
    "faqs": [
      [
        "Wie fühlt sich sanza an?",
        "Die meisten Menschen erleben sanza als eine ruhige, strukturierte Wellness-Sitzung. Das Gefühl hängt vom Programm, dem Zubehör und der Einstellung ab, aber das Erlebnis ist so konzipiert, dass es ruhig, einfach und leicht wiederholbar ist.",
      ],
      [
        "Ist sanza schwer zu bedienen?",
        "Nein. Du wählst ein Programm aus, schließt das Zubehör an und startest die Sitzung. Das System ist für den täglichen Gebrauch zu Hause ohne komplizierte Einrichtung konzipiert.",
      ],
      [
        "Wie lange dauert eine Sitzung?",
        "Die Sitzungsdauer hängt vom ausgewählten Programm ab. Das Ziel ist es, jede Sitzung leicht in einen realistischen täglichen oder wöchentlichen Rhythmus einzubauen.",
      ],
      [
        "Kann ich sanza jeden Tag verwenden?",
        "Viele Menschen integrieren sanza in ihre regelmäßigen Routinen, wie zum Beispiel den abendlichen Reset, die Schlafvorbereitung oder die Erholung nach körperlicher Aktivität. Befolgen Sie stets die mit Ihrem Gerät gelieferten Anwendungshinweise.",
      ],
      [
        "Ist sanza ein Medizinprodukt?",
        "Die Anwendung zu Hause sollte als Wellness-Ritual verstanden werden. Sie ist nicht als Ersatz für ärztlichen Rat, Diagnose oder Behandlung gedacht.",
      ],
      [
        "Wer sollte sanza nicht verwenden?",
        "Personen mit implantierten elektronischen Geräten, Schwangere, Personen mit schweren Erkrankungen oder spezifischen gesundheitlichen Bedenken sollten vor der Anwendung einen qualifizierten Arzt konsultieren und die mit dem Gerät gelieferten Sicherheitshinweise befolgen.",
      ],
      [
        "Mit welchem Zubehör sollte ich beginnen?",
        "Für die meisten Privatanwender ist die Matte die einfachste Grundlage. Handelektroden und der Lichtapplikator können je nach gewünschter Nutzung von sanza gezieltere Anwendungsmöglichkeiten bieten.",
      ],
      [
        "Können zwei Personen es nutzen?",
        "sanza kann Teil eines gemeinsamen Wellness-Rhythmus zu Hause werden, aber die Anwendungen werden je nach Einrichtung und verwendetem Zubehör normalerweise individuell durchgeführt.",
      ],
      [
        "Macht es Geräusche?",
        "Das Erlebnis ist so konzipiert, dass es leise ist und sich leicht in eine ruhige Raumumgebung integrieren lässt.",
      ],
      [
        "Wie unterscheidet es sich von einer einfachen Wellness-Matte?",
        "sanza basiert auf einem Controller, Zubehör und strukturierten Programmen. Bei der Erfahrung geht es nicht nur darum, auf einer Matte zu liegen. Es geht darum, ein klares Ritual für einen bestimmten Moment zu wählen.",
      ],
      [
        "Brauche ich einen speziellen Raum?",
        "Nein. Eine ruhige Ecke, ein Schlafzimmer, ein Erholungsraum oder ein ruhiger Wohnbereich reichen aus. Licht, Klang und Atmosphäre können das Ritual vollständiger wirken lassen, aber das System ist für echte Wohnräume konzipiert.",
      ],
      [
        "Kann ich es nach dem Sport nutzen?",
        "Ja. Viele Privatanwender nutzen sanza als Teil eines Erholungsrituals nach dem Training, Sport oder körperlich anstrengenden Tagen.",
      ],
      [
        "Kann ich sanza mit auf Reisen nehmen?",
        "Das hängt von deiner Konfiguration und dem verwendeten Zubehör ab. Manche Nutzer integrieren sanza in ihren häuslichen Rhythmus, während andere ausgewähltes Zubehör nach Reisen nutzen, um ihre Routine wiederherzustellen.",
      ],
      [
        "Woher weiß ich, welche Konfiguration für mich die richtige ist?",
        "Beginnen Sie mit dem Hauptgrund, warum Sie sanza nutzen möchten. Wenn Sie abendliche Ruhe suchen, wählen Sie eine auf Ruhe ausgerichtete Konfiguration. Wenn Sie Erholung nach dem Sport oder einer Reise suchen, wählen Sie eine auf Erholung ausgerichtete Konfiguration. Wenn Sie das volle Erlebnis wünschen, wählen Sie die komplette Konfiguration für zu Hause.",
      ],
      [
        "Kann sanza mir beim Einschlafen helfen?",
        "sanza umfasst Rituale zur Schlafvorbereitung, sollte jedoch nicht als medizinische Schlafbehandlung dargestellt werden. Betrachten Sie es als ein strukturiertes Entspannungserlebnis, das einen ruhigeren Übergang vor dem Schlafengehen schafft.",
      ],
      [
        "Gibt es Studien oder universitäre Partner hinter sanza?",
        "sanza.eu listet Forschungsreferenzen und universitäre Partner auf, darunter die Universität Graz, die Universität Budapest, die Universität Mainz und die Universität für Sportwissenschaften. Wir präsentieren dies als vom Hersteller veröffentlichte Hintergrundinformationen und empfehlen, die Originalmaterialien auf sanza.eu für Details zu prüfen.",
      ],
    ],
    "researchEyebrow": "Studien und Partner",
    "researchHeadline": "Ein kurzer Überblick über die von sanza.eu aufgeführten Forschungsnamen.",
    "researchBody": "Der Hersteller präsentiert sanza zusammen mit mehreren universitären Referenzen. Für Privatanwender ist der wichtige Punkt einfach: Das System ist kein anonymes Gadget. Es verfügt über einen dokumentierten Herstellerhintergrund, namentlich genannte Forschungspartner und auf sanza.eu herunterladbare Studienreferenzen.",
    "researchNote": "Dieser Überblick dient der Information. Er sollte nicht als medizinischer Anspruch, Behandlungsversprechen oder Garantie für persönliche Ergebnisse verstanden werden.",
    "researchSource": "Übersicht über die Herstellerstudien anzeigen",
    "researchPartners": [
      {
        "name": "Uni Graz",
        "topic": "Von sanza.eu aufgeführte Referenzen zu EMF im Zusammenhang mit Zellen und dem Nervensystem.",
      },
      {
        "name": "Uni Budapest",
        "topic": "Referenz zur kognitiven Leistungsforschung, einschließlich BDNF, wie von sanza.eu beschrieben.",
      },
      {
        "name": "Uni Mainz",
        "topic": "Von sanza.eu aufgeführte Referenz zu Ausdauer und Regeneration.",
      },
      {
        "name": "Universität für Sportwissenschaften",
        "topic": "Übersicht über den Einsatz von EMF im Sportkontext, wie auf sanza.eu dargestellt.",
      },
    ],
    "safetyHeadline": "Ein Ritual der Ruhe verdient dennoch einen verantwortungsvollen Umgang.",
    "safetyBody": "sanza ist für den Wellness-Einsatz zu Hause konzipiert. Befolgen Sie stets die Gebrauchsanweisung und die Sicherheitshinweise des Geräts. Wenn Sie unter einer Erkrankung leiden, ein implantiertes elektronisches Gerät tragen, schwanger sind oder bestimmte gesundheitliche Bedenken haben, konsultieren Sie vor der Anwendung einen qualifizierten Arzt.",
    "ctaHeadline": "Sie sind sich noch nicht sicher, welches Setup zu Ihnen passt?",
    "ctaBody": "Teilen Sie uns mit, wie Sie sanza nutzen möchten: zur Entspannung, Erholung, Schlafvorbereitung, Leistungssteigerung oder für Rituale zu Hause. Wir helfen Ihnen dabei, das richtige Setup zu finden.",
    "heroAlt": "Ruhiges Premium-Wellness-Interieur für zu Hause mit Matte und Zubehör",
    "safetyAlt": "Anleitungsheft und Wellness-Zubehör in einer hochwertigen Wohnumgebung",
    "ctaAlt": "Gemütliche, ruhige Wellness-Ecke zu Hause mit sanftem Licht und edlen Materialien",
  },
  "lv": {
    "metaTitle": "sanza Home FAQ | Nordora Vital",
    "metaDescription": "Atbildes uz bieži uzdotajiem jautājumiem par sanza lietošanu mājās, tostarp par sesijām, piederumiem, drošību, rutīnām un pareizās konfigurācijas izvēli.",
    "eyebrow": "FAQ",
    "headline": "Jautājumi pirms sākšanas",
    "subheadline": "Sajūtiet skaidrību pirms pirmās sesijas.",
    "heroBody": "sanza ir izstrādāta, lai to būtu viegli lietot mājās, taču ir normāli vēlēties skaidras atbildes, pirms sākat. Šeit atradīsiet to, kas ir vissvarīgākais: kā sistēma darbojas, kā lietot piederumus, kā izvēlēties programmu, ko ņemt vērā ikdienas lietošanā un kad lūgt individuālu konsultāciju.",
    "heroClosing": "Sāciet informēti. Lietojiet to ar pārliecību.",
    "introEyebrow": "Skaidrība pirms sarežģītības",
    "introHeadline": "Pirms iegādājaties veselības sistēmu mājās, jums vajadzētu saprast, ko tā dara, kā tā iederas jūsu ikdienā un ko gaidīt no pirmajām sesijām.",
    "introBody": [
      "sanza ir radīta svarīgiem ikdienas brīžiem: vakara atpūtai pēc darba, atgūšanai pēc piepūles, sagatavošanai miegam, lēnākām brīvdienām un brīžiem, kad jūsu ķermenim nepieciešama skaidra pauze.",
      "Šie bieži uzdotie jautājumi sniedz vienkāršas, tiešas atbildes — lai jūs varētu izvēlēties programmu, pareizi lietot piederumus un sākt ar pārliecību.",
    ],
    "faqs": [
      [
        "Kāda ir sajūta, lietojot sanza?",
        "Lielākā daļa cilvēku sanza uztver kā klusu, strukturētu labsajūtas sesiju. Sajūta atkarīga no programmas, piederuma un iestatījumiem, bet pieredze ir veidota tā, lai būtu mierīga, vienkārša un viegli atkārtojama.",
      ],
      [
        "Vai sanza ir grūti lietojama?",
        "Nē. Jūs izvēlaties programmu, pievienojat piederumu un sākat sesiju. Sistēma ir paredzēta ikdienas lietošanai mājās bez sarežģītas uzstādīšanas.",
      ],
      [
        "Cik ilgi ilgst seanss?",
        "Seansa ilgums ir atkarīgs no izvēlētās programmas. Mērķis ir panākt, lai katru seansu varētu viegli iekļaut reālajā dienas vai nedēļas ritmā.",
      ],
      [
        "Vai es varu lietot sanza katru dienu?",
        "Daudzi cilvēki iekļauj sanza savā ikdienas rutīnā, piemēram, vakara atpūtai, sagatavošanai miegam vai atgūšanai pēc aktivitātes. Vienmēr ievērojiet lietošanas norādījumus, kas pievienoti jūsu ierīcei.",
      ],
      [
        "Vai sanza ir medicīnas ierīce?",
        "Pieredze mājās ir jāuztver kā labsajūtas rituāls. Tā nav paredzēta kā medicīniskas konsultācijas, diagnozes vai ārstēšanas aizstājējs.",
      ],
      [
        "Kam nevajadzētu lietot sanza?",
        "Cilvēkiem ar implantētiem elektroniskiem ierīcēm, grūtniecēm, cilvēkiem ar nopietnām veselības problēmām vai konkrētām veselības bažām pirms lietošanas jākonsultējas ar kvalificētu veselības aprūpes speciālistu un jāievēro ierīcei pievienotie drošības norādījumi.",
      ],
      [
        "Ar kuru piederumu man sākt?",
        "Lielākajai daļai mājas lietotāju paklājs ir vienkāršākais pamats. Rokas elektrodus un gaismas aplikatoru var izmantot, lai pievienotu vairāk mērķtiecīgas sesijas iespējas atkarībā no tā, kā vēlaties lietot sanza.",
      ],
      [
        "Vai to var lietot divi cilvēki?",
        "sanza var kļūt par daļu no kopīga mājas labsajūtas ritma, bet sesijas parasti tiek veiktas individuāli atkarībā no iestatījumiem un izmantotajiem piederumiem.",
      ],
      [
        "Vai tas rada troksni?",
        "Pieredze ir veidota tā, lai būtu klusa un viegli integrējama mierīgā telpā.",
      ],
      [
        "Kā tas atšķiras no vienkārša veselības paklāja?",
        "sanza ir veidota ap kontrolieri, piederumiem un strukturētām programmām. Pieredze nav tikai par to, ka guļ uz paklāja. Tā ir par skaidra rituāla izvēli konkrētam brīdim.",
      ],
      [
        "Vai man ir vajadzīga īpaša telpa?",
        "Nē. Pietiek ar klusu stūrīti, guļamistabu, atpūtas telpu vai mierīgu dzīvojamo telpu. Gaisma, skaņa un atmosfēra var padarīt rituālu pilnīgāku, bet sistēma ir izstrādāta reālām mājām.",
      ],
      [
        "Vai to var izmantot pēc sporta?",
        "Jā. Daudzi mājas lietotāji izmanto sanza kā daļu no atveseļošanās rituāla pēc treniņa, sporta vai fiziski smagas dienas.",
      ],
      [
        "Vai ar sanza var ceļot?",
        "Tas atkarīgs no jūsu konfigurācijas un izmantotajiem piederumiem. Daži lietotāji iekļauj sanza savā mājas ritmā, bet citi izmanto atsevišķus piederumus pēc ceļojuma, lai palīdzētu atjaunot savu ikdienas ritmu.",
      ],
      [
        "Kā es varu zināt, kura konfigurācija man ir piemērota?",
        "Sāciet ar galveno iemeslu, kāpēc jūs vēlaties sanza. Ja vēlaties vakara mieru, izvēlieties uz mieru vērstu konfigurāciju. Ja vēlaties atgūties pēc sporta vai ceļojuma, izvēlieties uz atgūšanos vērstu konfigurāciju. Ja vēlaties pilnīgu pieredzi, izvēlieties pilnīgo mājas konfigurāciju.",
      ],
      [
        "Vai sanza var palīdzēt man aizmigt?",
        "sanza ietver rituālus, kas sagatavo miegu, bet to nevajadzētu uzskatīt par medicīnisku miega ārstēšanu. Uztveriet to kā strukturētu atslābšanas pieredzi, kas palīdz radīt mierīgāku pāreju pirms gulētiešanas.",
      ],
      [
        "Vai aiz sanza stāv pētījumi vai universitāšu partneri?",
        "sanza.eu uzskaita pētījumu atsauces un universitāšu partnerus, tostarp Grācas Universitāti, Budapeštas Universitāti, Maincas Universitāti un Fiziskās izglītības universitāti. Mēs to prezentējam kā ražotāja publicētu pamatinformāciju un iesakām izlasīt sīkāku informāciju sanza.eu oriģinālajos materiālos.",
      ],
    ],
    "researchEyebrow": "Pētījumi un partneri",
    "researchHeadline": "Īss pārskats par pētījumu nosaukumiem, kas uzskaitīti sanza.eu.",
    "researchBody": "Ražotājs prezentē sanza kopā ar vairākiem ar universitātēm saistītiem atsauces materiāliem. Mājas lietotājiem svarīgākais punkts ir vienkāršs: sistēma nav anonīms sīkrīks. Tai ir dokumentēts ražotāja fons, nosaukti pētniecības partneri un lejupielādējamas pētījumu atsauces sanza.eu.",
    "researchNote": "Šis pārskats ir informatīvs. To nevajadzētu uztvert kā medicīnisku apgalvojumu, ārstēšanas solījumu vai personīgu rezultātu garantiju.",
    "researchSource": "Skatīt ražotāja pētījumu pārskatu",
    "researchPartners": [
      {
        "name": "Grazas universitāte",
        "topic": "Sanza.eu uzskaitītās atsauces par šūnu un nervu sistēmu saistībā ar EMF.",
      },
      {
        "name": "Budapeštas universitāte",
        "topic": "Atsauces par kognitīvo sniegumu, tostarp BDNF, kā aprakstīts sanza.eu.",
      },
      {
        "name": "Maincas universitāte",
        "topic": "Sanza.eu uzskaitītās atsauces par izturību un reģenerāciju.",
      },
      {
        "name": "Fiziskās izglītības universitāte",
        "topic": "Pārskats par EMF izmantošanu sporta kontekstā, kā prezentēts sanza.eu.",
      },
    ],
    "safetyHeadline": "Pat mierpilns rituāls prasa atbildīgu lietošanu.",
    "safetyBody": "sanza ir paredzēta labsajūtas veicināšanai mājās. Vienmēr ievērojiet ierīces lietošanas instrukcijas un drošības norādījumus. Ja Jums ir veselības problēmas, implantēta elektroniska ierīce, esat grūtniece vai Jums ir konkrētas bažas par veselību, pirms lietošanas konsultējieties ar kvalificētu veselības aprūpes speciālistu.",
    "ctaHeadline": "Vēl neesat izlēmuši, kāda konfigurācija Jums piemērota?",
    "ctaBody": "Pastāstiet mums, kā vēlaties izmantot sanza: mieram, atpūtai, miega sagatavošanai, veiktspējas uzlabošanai vai mājas rituāliem. Mēs palīdzēsim Jums izvēlēties pareizo konfigurāciju.",
    "heroAlt": "Mierīgs premium klases mājas labsajūtas interjers ar paklāju un piederumiem",
    "safetyAlt": "Lietošanas instrukcija un labsajūtas piederumi premium klases mājas vidē",
    "ctaAlt": "Siltā, klusā mājas labsajūtas stūrītis ar maigu apgaismojumu un izsmalcinātiem materiāliem",
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[homeLocale(locale)];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    metadataBase: new URL(getOriginForSurface("home")),
    alternates: {
      canonical: "/faq",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${getOriginForSurface("home")}/faq`,
      siteName: "Nordora Vital Home",
      type: "website",
    },
  };
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
        light ? "text-[#d8cec2]" : "text-[#6f8a7a]"
      }`}
    >
      {children}
    </p>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[#0e3d34] text-[#f6f1ea] shadow-[0_18px_42px_rgba(14,61,52,0.20)] hover:bg-[#507040]"
      : "border border-[#f6f1ea]/45 bg-[#f6f1ea]/12 text-[#fffaf2] hover:bg-[#f6f1ea]/20";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-[8px] px-6 text-[0.95rem] font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8cec2] ${className}`}
    >
      {children}
    </a>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
  index,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  index: number;
}) {
  return (
    <details
      open={defaultOpen}
      className="group sanza-experience-reveal border-t border-[#c7d6cb] py-8 last:border-b sm:py-10"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <summary className="grid cursor-pointer list-none gap-5 text-left marker:hidden md:grid-cols-[0.24fr_0.76fr] md:gap-10">
        <span className="text-[0.82rem] font-semibold leading-6 text-[#6d6158]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-start justify-between gap-5">
          <span className="font-heading text-[clamp(1.28rem,2.25vw,2.15rem)] leading-[1.08] tracking-normal text-[#17221d]">
            {question}
          </span>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#c7d6cb] bg-[#f7faf7] text-[1.25rem] leading-none text-[#0e3d34] transition group-open:rotate-45">
            +
          </span>
        </span>
      </summary>
      <p className="mt-5 max-w-[68ch] text-[1.03rem] leading-[1.78] text-[#1e2a22]/86 md:ml-[calc(24%+2.5rem)]">
        {answer}
      </p>
    </details>
  );
}

export default async function HomeFaqPage() {
  const locale = homeLocale(await getLocale());
  const copy = pageCopy[locale];
  const shared = getHomeSharedCopy(locale);
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const programsHref = getHomeDisplayPath(surface, "/programs");
  const faqs = copy.faqs.map(([question, answer]) => ({ question, answer }));
  const heroBody = [copy.subheadline, copy.heroBody, copy.heroClosing];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <HomeSiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="site-marketing-root sanza-experiences-page">
        <section
          className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
          aria-labelledby="homeuse-faq-heading"
        >
          <div className="relative min-h-[min(92dvh,880px)] lg:min-h-[min(88dvh,800px)]">
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt={copy.heroAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />

            <div className="relative z-10 mx-auto flex min-h-[min(92dvh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(88dvh,800px)] lg:px-10 lg:pb-20 lg:pt-24">
              <div className="mr-auto w-full max-w-xl pb-4 text-left sm:ml-auto sm:mr-0 sm:max-w-2xl sm:text-right">
                <p className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                  {copy.eyebrow}
                </p>
                <h1
                  id="homeuse-faq-heading"
                  className="mr-auto max-w-[11ch] whitespace-normal break-words font-heading text-h1 text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)] sm:ml-auto sm:mr-0 sm:max-w-none"
                >
                  {copy.headline}
                </h1>
                <div className="mt-6 mr-auto flex w-full max-w-xs flex-col gap-4 text-[0.98rem] leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.30)] sm:ml-auto sm:mr-0 sm:max-w-[58ch] sm:text-lg">
                  {heroBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:justify-end sm:gap-4">
                  <Link href={programsHref} className="btn-primary inline-flex justify-center">
                    {shared.common.viewPrograms}
                  </Link>
                  <a href={shopUrl} className="btn-ghost-white inline-flex justify-center">
                    {shared.common.viewShop}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[#f7faf7] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-center">
            <div className="sanza-experience-reveal">
              <Eyebrow>{copy.introEyebrow}</Eyebrow>
              <h2 className="font-heading text-[clamp(2.25rem,5vw,5rem)] leading-[1.01] tracking-normal text-[#17221d]">
                {copy.introHeadline}
              </h2>
              <div className="mt-7 flex max-w-[650px] flex-col gap-5 text-[1.07rem] leading-[1.78] text-[#1e2a22]/90 sm:text-[1.18rem]">
                {copy.introBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <figure className="sanza-experience-reveal overflow-hidden rounded-[8px] bg-[#dce8df]">
              <div className="relative min-h-[380px] sm:min-h-[540px]">
                <Image
                  src={introImage}
                  alt={copy.safetyAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 560px"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f2f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <div className="sanza-experience-reveal lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2 className="font-heading text-[clamp(2.4rem,5vw,5.4rem)] leading-[1] tracking-normal text-[#17221d]">
                {copy.headline}
              </h2>
              <p className="mt-7 max-w-[540px] text-[1.08rem] leading-[1.75] text-[#1e2a22]/82 sm:text-[1.2rem]">
                {copy.subheadline}
              </p>
            </div>
            <div>
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#102f29] px-5 py-20 text-[#f7faf7] sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="sanza-experience-reveal">
              <Eyebrow light>{copy.researchEyebrow}</Eyebrow>
              <h2 className="font-heading text-[clamp(2.3rem,5vw,5.4rem)] leading-[1] tracking-normal">
                {copy.researchHeadline}
              </h2>
              <p className="mt-7 max-w-[650px] text-[1.08rem] leading-[1.78] text-[#eef5ef]/84 sm:text-[1.2rem]">
                {copy.researchBody}
              </p>
              <p className="mt-6 max-w-[650px] border-l border-[#eef5ef]/32 pl-5 text-[0.98rem] font-medium leading-7 text-[#eef5ef]/78">
                {copy.researchNote}
              </p>
              <a
                href="https://www.sanza.eu/home-main-de"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[8px] border border-[#f7faf7]/45 bg-[#f7faf7]/12 px-6 text-[0.95rem] font-semibold text-[#f7faf7] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8cec2]"
              >
                {copy.researchSource}
              </a>
            </div>
            <div className="sanza-experience-reveal divide-y divide-[#eef5ef]/18 border-y border-[#eef5ef]/18">
              {copy.researchPartners.map((partner) => (
                <article
                  key={partner.name}
                  className="grid gap-5 py-6 sm:grid-cols-[0.36fr_0.64fr] sm:items-start"
                >
                  <h3 className="font-heading text-[clamp(1.45rem,2.4vw,2.25rem)] leading-tight tracking-normal text-[#f7faf7]">
                    {partner.name}
                  </h3>
                  <p className="text-[0.98rem] leading-7 text-[#eef5ef]/78">
                    {partner.topic}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-5 py-20 text-[#f7faf7] sm:px-8 sm:py-28 lg:px-10">
          <Image
            src={ctaImage}
            alt={copy.ctaAlt}
            fill
            className="-z-20 object-cover object-center"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061a16]/95 via-[#082721]/68 to-[#082721]/38"
          />
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="font-heading text-[clamp(2.4rem,5.8vw,5.8rem)] leading-[1] tracking-normal">
              {copy.ctaHeadline}
            </h2>
            <p className="mx-auto mt-7 max-w-[720px] text-[1.1rem] leading-[1.78] text-[#eef5ef]/86 sm:text-[1.22rem]">
              {copy.ctaBody}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink href="mailto:info@nordoravital.com">
                {shared.common.bookIntro}
              </CtaLink>
              <CtaLink href={shopUrl} variant="secondary">
                {shared.common.viewShop}
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
    </HomeSiteLayout>
  );
}
