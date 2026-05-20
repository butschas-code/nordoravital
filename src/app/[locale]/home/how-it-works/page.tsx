import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { headers } from "next/headers";
import { BrandArc } from "@/components/brand-arc";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { DarkMarketingCard } from "@/components/home/dark-marketing-card";
import { Link } from "@/i18n/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface, getSiteSurface } from "@/lib/domains";
import { getHomeDisplayPath, getHomeSharedCopy, homeLocale } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

type Props = { params: Promise<{ locale: string }> };

const sectionImages = [
  IMAGE_PATHS.home.howItWorksIntro,
  IMAGE_PATHS.home.productGenerator,
  IMAGE_PATHS.home.productMat,
  IMAGE_PATHS.home.productHandElectrode,
  IMAGE_PATHS.home.productPen,
] as const;

const pageCopy = {
  "en": {
    "metaTitle": "How sanza works | Home Wellness System | Nordora Vital",
    "metaDescription": "Discover how sanza works at home through structured programs, comfortable accessories and calm wellness rituals for recovery, sleep preparation and daily reset.",
    "eyebrow": "How Sanza works",
    "headline": "How Sanza works at home",
    "subheadline": [
      "Sanza combines selected wellness programs with different accessories: mat, pads, hand electrodes and light applicator, so you can support your body in the way that fits the moment.",
    ],
    "heroAlt": "Elegant home wellness ritual in a warm modern interior",
    "sections": [
      {
        "eyebrow": "What Sanza is",
        "headline": "A complete home system for calm, recovery and daily reset.",
        "body": [
          "Sanza combines PEMF, biofrequency programs and cold-laser light support with practical accessories like the mat, pads and hand electrodes.",
          "Each session is built for a specific moment in your day: settling after work, preparing for sleep, recovering after movement, easing into calm or recharging when you feel drained.",
          "You do not need to build your own routine or understand every setting. You choose the program, use the matching accessory and let Sanza create a structured wellness session at home.",
        ],
        "alt": "sanza controller, mat and accessories arranged for a home wellness ritual",
        "imageClassName": "object-contain p-8 sm:p-12",
      },
      {
        "eyebrow": "The center of the system",
        "headline": "The controller",
        "body": [
          "The controller is where every session begins.",
          "It holds the programs, connects with the accessories and keeps the experience simple from start to finish.",
          "You do not need to adjust complex settings or build your own routine. Choose what you need: calm, recovery, sleep preparation, activation or a focused reset, and start.",
        ],
        "alt": "sanza controller for home wellness sessions",
        "imageClassName": "object-contain p-10 sm:p-16",
      },
      {
        "eyebrow": "Full-body support",
        "headline": "The mat",
        "body": [
          "The mat is where you can fully let go.",
          "Use it when your body feels tired, tense or overloaded: after work, before sleep, after activity or whenever you want to slow down.",
          "Lie down, start the program and give your body time to settle. For many people, this becomes the easiest way to create a real pause at home.",
        ],
        "alt": "sanza mat in a calm home wellness setting",
        "imageClassName": "object-cover",
      },
      {
        "eyebrow": "Deeper contact",
        "headline": "Hand electrodes",
        "body": [
          "The hand electrodes bring the session closer to you.",
          "Hold them when you want a more direct connection during shorter sessions, focused breaks, breathing moments or times when your mind feels busy.",
          "They are simple to use and easy to add when you want the session to feel more present and personal.",
        ],
        "alt": "hand electrodes used during a quiet home reset ritual",
        "imageClassName": "object-cover",
      },
      {
        "eyebrow": "Targeted light support",
        "headline": "Light applicator",
        "body": [
          "The light applicator is for moments when you want to give extra attention to one area of the body.",
          "Use it after training, after a long day at the desk, or whenever a specific area feels like it needs more care.",
          "It adds focused light support to your Sanza session, so you can care for your body in a more precise way at home.",
        ],
        "alt": "light applicator prepared for a targeted home wellness ritual",
        "imageClassName": "object-cover",
      },
    ],
    "trust": {
      "eyebrow": "Why Sanza feels different",
      "headline": "A complete home wellness system with real substance behind it.",
      "body": [
        "Sanza is built by sanza International GmbH, a family company based in Salzburg with more than two decades of experience.",
        "The system brings together German-made hardware, PEMF, biofrequency programs, a cold-laser light applicator and practical accessories, from the mat and pads to the hand electrodes.",
        "With 60,000+ long-term users, Sanza is not a short-lived wellness gadget. It is a developed device family designed for regular use at home.",
      ],
      "source": "Manufacturer background",
    },
    "program": {
      "eyebrow": "Structured experiences",
      "headline": "Made for the moments your body needs support.",
      "body": [
        "The value of sanza is not only the hardware.",
        "The real difference is the program structure behind the experience.",
        "Each program is designed around a specific moment:",
      ],
      "moments": [
        "calming down",
        "preparing for sleep",
        "recovering after activity",
        "resetting after travel",
        "creating a steadier start into the day",
      ],
      "close": "Instead of random use, sanza creates repeatable rituals that fit naturally into everyday life.",
    },
    "ritual": {
      "eyebrow": "The ritual",
      "headline": "Three ways Sanza supports your body at home",
      "body": [
        "Sanza combines PEMF, biofrequencies and cold-laser light in one home system. Each input works differently, so you can choose the kind of support your body needs in that moment.",
        "PEMF works through the mat, pads or applicators. It uses gentle pulsed electromagnetic fields to support your body’s natural electrical activity, helping you settle, recover and shift out of daily overload.",
        "Biofrequencies work through the hand electrodes. They use a gentle microcurrent with selected frequency programs, giving you a more direct, contact-based session when you want focus, balance or a clearer reset.",
        "Cold-laser light is used locally. You place the light applicator on a specific area when you want more targeted support, after sport, after long hours at a desk, or when one part of the body needs extra attention.",
        "Together, these three technologies make Sanza more than a mat. You choose the program, use the matching accessory and create a calm, recovery-focused session at home.",
      ],
      "alt": "Cinematic evening relaxation scene in a warm home atmosphere",
    },
    "ctaHeadline": "Contact us to find out more.",
    "ctaBody": "Tell us what you want to support at home and we will help you understand which setup, accessories and first programs make sense for your routine.",
    "ctaEyebrow": "Personal guidance",
    "ctaNotes": [
      "Setup choice",
      "First programs",
      "Daily rhythm",
    ],
    "ctaActionText": "Tell us a little about your routine, and we will help you find a simple place to start.",
    "ctaButton": "Contact us to find out more",
    "ctaAlt": "Luxury modern home wellness interior at night with soft warm lighting",
  },
  "de": {
    "metaTitle": "So funktioniert Sanza | Home Wellness System | Nordora Vital",
    "metaDescription": "Entdecken Sie, wie Sanza zu Hause durch strukturierte Programme, komfortables Zubehör und ruhige Wellness-Rituale für Erholung, Schlafvorbereitung und täglichen Reset funktioniert.",
    "eyebrow": "So funktioniert Sanza",
    "headline": "So funktioniert Sanza zu Hause",
    "subheadline": [
      "Sanza kombiniert ausgewählte Wellness-Programme mit verschiedenen Zubehörteilen: Matte, Pads, Handelektroden und Lichtapplikator, damit Sie Ihren Körper genau so unterstützen können, wie es dem Moment entspricht.",
    ],
    "heroAlt": "Elegantes Wellness-Ritual zu Hause in einem warmen, modernen Interieur",
    "sections": [
      {
        "eyebrow": "Was ist Sanza?",
        "headline": "Ein komplettes System für zu Hause für Ruhe, Erholung und den täglichen Reset.",
        "body": [
          "Sanza kombiniert PEMF, Biofrequenzprogramme und Kaltlaserlichtunterstützung mit praktischem Zubehör wie der Matte, den Pads und den Handelektroden.",
          "Jede Sitzung ist auf einen bestimmten Moment Ihres Tages zugeschnitten: zur Entspannung nach der Arbeit, zur Vorbereitung auf den Schlaf, zur Erholung nach körperlicher Aktivität, zum Eintauchen in die Ruhe oder zum Auftanken, wenn Sie sich erschöpft fühlen.",
          "Sie müssen keine eigene Routine entwickeln oder jede Einstellung verstehen. Sie wählen das Programm, verwenden das passende Zubehör und lassen Sanza eine strukturierte Wellness-Sitzung zu Hause gestalten.",
        ],
        "alt": "Sanza-Controller, Matte und Zubehör, arrangiert für ein Wellness-Ritual zu Hause",
        "imageClassName": "object-contain p-8 sm:p-12",
      },
      {
        "eyebrow": "Das Herzstück des Systems",
        "headline": "Der Controller",
        "body": [
          "Der Controller ist der Ausgangspunkt jeder Sitzung.",
          "Er enthält die Programme, verbindet sich mit dem Zubehör und sorgt von Anfang bis Ende für ein unkompliziertes Erlebnis.",
          "Sie müssen keine komplexen Einstellungen vornehmen oder Ihre eigene Routine erstellen. Wählen Sie, was Sie brauchen: Ruhe, Erholung, Vorbereitung auf den Schlaf, Aktivierung oder einen gezielten Reset, und legen Sie los.",
        ],
        "alt": "Sanza-Controller für Wellness-Sitzungen zu Hause",
        "imageClassName": "object-contain p-10 sm:p-16",
      },
      {
        "eyebrow": "Ganzkörperunterstützung",
        "headline": "Die Matte",
        "body": [
          "Auf der Matte können Sie sich vollkommen entspannen.",
          "Verwenden Sie sie, wenn sich Ihr Körper müde, angespannt oder überlastet anfühlt: nach der Arbeit, vor dem Schlafengehen, nach körperlicher Aktivität oder wann immer Sie einen Gang zurückschalten möchten.",
          "Legen Sie sich hin, starten Sie das Programm und geben Sie Ihrem Körper Zeit, zur Ruhe zu kommen. Für viele Menschen ist dies der einfachste Weg, zu Hause eine echte Auszeit zu schaffen.",
        ],
        "alt": "sanza-Matte in einer ruhigen Home-Wellness-Umgebung",
        "imageClassName": "object-cover",
      },
      {
        "eyebrow": "Tieferer Kontakt",
        "headline": "Handelektroden",
        "body": [
          "Die Handelektroden bringen die Sitzung näher zu Ihnen.",
          "Halten Sie sie in der Hand, wenn Sie während kürzerer Sitzungen, gezielter Pausen, Atemübungen oder in Momenten, in denen Ihr Geist beschäftigt ist, eine direktere Verbindung wünschen.",
          "Sie sind einfach zu verwenden und lassen sich leicht hinzufügen, wenn Sie die Sitzung präsenter und persönlicher gestalten möchten.",
        ],
        "alt": "Handelektroden im Einsatz während eines ruhigen Reset-Rituals zu Hause",
        "imageClassName": "object-cover",
      },
      {
        "eyebrow": "Gezielte Lichtunterstützung",
        "headline": "Lichtapplikator",
        "body": [
          "Der Lichtapplikator ist für Momente gedacht, in denen Sie einem bestimmten Körperbereich besondere Aufmerksamkeit schenken möchten.",
          "Verwenden Sie ihn nach dem Training, nach einem langen Tag am Schreibtisch oder wann immer ein bestimmter Bereich mehr Pflege zu benötigen scheint.",
          "Er ergänzt Ihre Sanza-Sitzung um gezielte Lichtunterstützung, sodass Sie Ihren Körper zu Hause präziser pflegen können.",
        ],
        "alt": "Lichtapplikator, vorbereitet für ein gezieltes Wellness-Ritual zu Hause",
        "imageClassName": "object-cover",
      },
    ],
    "trust": {
      "eyebrow": "Warum Sanza anders ist",
      "headline": "Ein komplettes Wellness-System für zu Hause mit echter Substanz dahinter.",
      "body": [
        "Sanza wird von der Sanza International GmbH hergestellt, einem Familienunternehmen mit Sitz in Salzburg und mehr als zwei Jahrzehnten Erfahrung.",
        "Das System vereint in Deutschland gefertigte Hardware, PEMF, Biofrequenzprogramme, einen Kaltlaser-Lichtapplikator und praktisches Zubehör, von der Matte und den Pads bis hin zu den Handelektroden.",
        "Mit über 60.000 Langzeitnutzern ist Sanza kein kurzlebiges Wellness-Gadget. Es ist eine ausgereifte Gerätefamilie, die für den regelmäßigen Gebrauch zu Hause konzipiert ist.",
      ],
      "facts": "",
      "source": "Hintergrund des Herstellers",
    },
    "program": {
      "eyebrow": "Strukturierte Erlebnisse",
      "headline": "Entwickelt für die Momente, in denen Ihr Körper Unterstützung braucht.",
      "body": [
        "Der Wert von Sanza liegt nicht nur in der Hardware.",
        "Der eigentliche Unterschied ist die Programmstruktur hinter dem Erlebnis.",
        "Jedes Programm ist auf einen bestimmten Moment ausgerichtet:",
      ],
      "moments": [
        "Beruhigung",
        "Vorbereitung auf den Schlaf",
        "Erholung nach körperlicher Aktivität",
        "Regeneration nach einer Reise",
        "Ein ausgeglichener Start in den Tag",
      ],
      "close": "Anstelle von zufälliger Nutzung schafft Sanza wiederholbare Rituale, die sich ganz natürlich in den Alltag einfügen.",
    },
    "ritual": {
      "eyebrow": "Das Ritual",
      "headline": "Drei Wege, wie Sanza Ihren Körper zu Hause unterstützt",
      "intro": "Eine sanza Sitzung ist darauf ausgelegt, unkompliziert zu wirken.",
      "steps": "[\"Sie wählen das Programm.\",\"Sie kommen im Raum an.\",\"Der Raum wird langsamer.\",\"Das Ritual beginnt.\"]",
      "close": "Mit der Zeit verbinden viele Menschen diese Momente mit Übergang, Ruhe und Regeneration.",
      "alt": "Filmische Abendentspannung in warmer Wohnatmosphäre",
      "body": [
        "Sanza vereint PEMF, Biofrequenzen und Kaltlaserlicht in einem System für zu Hause. Jede Anwendungsform wirkt auf unterschiedliche Weise, sodass Sie genau die Unterstützung wählen können, die Ihr Körper gerade benötigt.",
        "PEMF wirkt über die Matte, die Polster oder die Applikatoren. Es nutzt sanfte gepulste elektromagnetische Felder, um die natürliche elektrische Aktivität Ihres Körpers zu unterstützen und Ihnen dabei zu helfen, zur Ruhe zu kommen, sich zu erholen und sich von der täglichen Überlastung zu befreien.",
        "Biofrequenzen wirken über die Handelektroden. Sie nutzen einen sanften Mikrostrom mit ausgewählten Frequenzprogrammen und bieten Ihnen eine direktere, kontaktbasierte Sitzung, wenn Sie Konzentration, Ausgeglichenheit oder einen klareren Neustart wünschen.",
        "Kaltlaserlicht wird lokal angewendet. Sie platzieren den Lichtapplikator auf einer bestimmten Stelle, wenn Sie eine gezieltere Unterstützung wünschen – nach dem Sport, nach langen Stunden am Schreibtisch oder wenn ein Teil des Körpers besondere Aufmerksamkeit benötigt.",
        "Zusammen machen diese drei Technologien Sanza zu mehr als nur einer Matte. Sie wählen das Programm, verwenden das passende Zubehör und schaffen sich zu Hause eine ruhige, auf Erholung ausgerichtete Sitzung.",
      ],
    },
    "ctaHeadline": "Kontaktieren Sie uns, um mehr zu erfahren.",
    "ctaBody": "Sagen Sie uns, was Sie zu Hause unterstützen möchten, und wir helfen Ihnen dabei, herauszufinden, welche Ausstattung, welches Zubehör und welche ersten Programme für Ihren Alltag sinnvoll sind.",
    "ctaEyebrow": "Persönliche Beratung",
    "ctaNotes": [
      "Auswahl der Ausstattung",
      "Erste Programme",
      "Täglicher Rhythmus",
    ],
    "ctaActionText": "Erzählen Sie uns ein wenig über Ihren Alltag, und wir helfen Ihnen dabei, einen einfachen Einstieg zu finden.",
    "ctaButton": "Kontaktieren Sie uns, um mehr zu erfahren",
    "ctaAlt": "Luxuriöses, modernes Home-Wellness-Interieur bei Nacht mit sanfter, warmer Beleuchtung",
  },
  "lv": {
    "metaTitle": "Kā darbojas sanza | Mājas labsajūtas sistēma | Nordora Vital",
    "metaDescription": "Atklājiet, kā sanza darbojas mājās, izmantojot strukturētas programmas, ērtus piederumus un mierīgus labsajūtas rituālus atveseļošanai, miega sagatavošanai un ikdienas atjaunošanai.",
    "eyebrow": "Kā darbojas Sanza",
    "headline": "Kā Sanza darbojas mājās",
    "subheadline": [
      "Sanza apvieno izvēlētas labsajūtas programmas ar dažādiem piederumiem: paklāju, spilventiņiem, roku elektrodu un gaismas aplikatoru, lai jūs varētu atbalstīt savu ķermeni tādā veidā, kas atbilst konkrētajam brīdim.",
    ],
    "heroAlt": "Elegants mājas labsajūtas rituāls siltā, modernā interjerā",
    "sections": [
      {
        "eyebrow": "Kas ir Sanza",
        "headline": "Pilnīga mājas sistēma mieram, atgūšanai un ikdienas atjaunošanai.",
        "body": [
          "Sanza apvieno PEMF, biofrekvences programmas un aukstā lāzera gaismas atbalstu ar praktiskiem piederumiem, piemēram, paklāju, spilventiņiem un roku elektrodu.",
          "Katra sesija ir veidota konkrētam brīdim jūsu dienā: atpūtai pēc darba, sagatavošanai miegam, atgūšanai pēc kustībām, mierīgai noskaņai vai enerģijas uzlādēšanai, kad jūtaties izsmelti.",
          "Jums nav jāizveido sava rutīna vai jāizprot katrs iestatījums. Jūs izvēlaties programmu, izmantojat atbilstošo piederumu un ļaujat Sanza izveidot strukturētu labsajūtas sesiju mājās.",
        ],
        "alt": "Sanza kontrolieris, paklājs un piederumi, kas sakārtoti mājas labsajūtas rituālam",
        "imageClassName": "object-contain p-8 sm:p-12",
      },
      {
        "eyebrow": "Sistēmas centrs",
        "headline": "Kontrolieris",
        "body": [
          "Kontrolieris ir vieta, kur sākas katra sesija.",
          "Tajā ir saglabātas programmas, tas savienojas ar piederumiem un nodrošina vienkāršu pieredzi no sākuma līdz beigām.",
          "Jums nav jāpielāgo sarežģīti iestatījumi vai jāizveido sava rutīna. Izvēlieties to, kas jums nepieciešams: miers, atgūšanās, sagatavošanās miegam, aktivizēšanās vai koncentrēta atjaunošanās, un sāciet.",
        ],
        "alt": "Sanza kontrolieris mājas labsajūtas sesijām",
        "imageClassName": "object-contain p-10 sm:p-16",
      },
      {
        "eyebrow": "Atbalsts visam ķermenim",
        "headline": "Paklājs",
        "body": [
          "Paklājs ir vieta, kur varat pilnībā atslābināties.",
          "Izmantojiet to, kad jūsu ķermenis jūtas noguris, saspringts vai pārslodzēts: pēc darba, pirms miega, pēc aktivitātes vai kad vien vēlaties palēnināt tempu.",
          "Apsēdies, sāc programmu un dod savam ķermenim laiku atslābināties. Daudziem cilvēkiem tas kļūst par vienkāršāko veidu, kā radīt īstu pauzi mājās.",
        ],
        "alt": "Sanza paklājs mierīgā mājas labsajūtas vidē",
        "imageClassName": "object-cover",
      },
      {
        "eyebrow": "Dziļāks kontakts",
        "headline": "Roku elektrodus",
        "body": [
          "Roku elektrodus padara sesiju tuvāku tev.",
          "Turiet tos rokās, ja vēlaties tiešāku saikni īsākās sesijās, koncentrētos pārtraukumos, elpošanas brīžos vai brīžos, kad jūsu prāts ir aizņemts.",
          "Tos ir vienkārši lietot un viegli pievienot, ja vēlaties, lai sesija būtu klātbūtnīgāka un personiskāka.",
        ],
        "alt": "roku elektrodus izmanto klusā mājas atjaunošanās rituālā",
        "imageClassName": "object-cover",
      },
      {
        "eyebrow": "Mērķtiecīgs gaismas atbalsts",
        "headline": "Gaismas aplikators",
        "body": [
          "Gaismas aplikators ir paredzēts brīžiem, kad vēlaties pievērst papildu uzmanību vienai ķermeņa zonai.",
          "Izmantojiet to pēc treniņa, pēc garas dienas pie rakstāmgalda vai jebkurā brīdī, kad jūtat, ka konkrētajai zonai nepieciešama papildu aprūpe.",
          "Tas pievieno mērķtiecīgu gaismas atbalstu jūsu Sanza sesijai, lai jūs varētu precīzāk rūpēties par savu ķermeni mājās.",
        ],
        "alt": "gaismas aplikators, sagatavots mērķtiecīgam mājas labsajūtas rituālam",
        "imageClassName": "object-cover",
      },
    ],
    "trust": {
      "eyebrow": "Kāpēc Sanza ir citāda",
      "headline": "Pilnīga mājas labsajūtas sistēma ar reālu pamatu.",
      "body": [
        "Sanza ir izstrādājis sanza International GmbH, ģimenes uzņēmums, kas atrodas Zalcburgā un kam ir vairāk nekā divdesmit gadu pieredze.",
        "Sistēma apvieno Vācijā ražotu aparatūru, PEMF, biofrekvences programmas, aukstā lāzera gaismas aplikatoru un praktiskus piederumus, sākot no paklāja un spilventiņiem līdz rokas elektrodiem.",
        "Ar vairāk nekā 60 000 ilgtermiņa lietotājiem Sanza nav īslaicīga labsajūtas ierīce. Tā ir izstrādāta ierīču sērija, kas paredzēta regulārai lietošanai mājās.",
      ],
      "facts": "",
      "source": "Ražotāja informācija",
    },
    "program": {
      "eyebrow": "Strukturētas pieredzes",
      "headline": "Radīts brīžiem, kad jūsu ķermenim nepieciešams atbalsts.",
      "body": [
        "Sanza vērtība ir ne tikai aparatūra.",
        "Patiesā atšķirība ir pieredzes pamatā esošā programmu struktūra.",
        "Katra programma ir izstrādāta konkrētam brīdim:",
      ],
      "moments": [
        "nomierināšanai",
        "gatavošanās miegam",
        "atgūšanās pēc aktivitātes",
        "atjaunošanās pēc ceļojuma",
        "stabilāka dienas sākuma radīšanai",
      ],
      "close": "Tā vietā, lai lietotu pēc nejaušības principa, Sanza rada atkārtojamus rituālus, kas dabiski iekļaujas ikdienas dzīvē.",
    },
    "ritual": {
      "eyebrow": "Rituals",
      "headline": "Trīs veidi, kā Sanza atbalsta jūsu ķermeni mājās",
      "intro": "sanza sesija ir veidota tā, lai justos vienkārša.",
      "steps": "[\"Jūs izvēlaties programmu.\",\"Jūs iekārtojaties telpā.\",\"Telpa kļūst lēnāka.\",\"Rituāls sākas.\"]",
      "close": "Laika gaitā daudzi cilvēki šos mirkļus sāk saistīt ar pāreju, mieru un atjaunošanos.",
      "alt": "Kinematogrāfiska vakara relaksācijas aina siltā mājas atmosfērā",
      "body": [
        "Sanza vienā mājas sistēmā apvieno PEMF, biofrekvences un aukstā lāzera gaismu. Katrs no šiem elementiem darbojas atšķirīgi, tādējādi jūs varat izvēlēties tieši to atbalstu, kāds jūsu organismam konkrētajā brīdī ir nepieciešams.",
        "PEMF darbojas caur paklāju, spilventiņiem vai aplikatoriem. Tas izmanto maigus pulsējošus elektromagnētiskos laukus, lai atbalstītu jūsu organisma dabisko elektriskās aktivitāti, palīdzot jums nomierināties, atgūt spēkus un atbrīvoties no ikdienas pārslodzes.",
        "Biofrekvences darbojas caur rokas elektrodu. Tās izmanto maigu mikrostrāvu ar izvēlētiem frekvenču programmām, nodrošinot jums tiešāku, uz kontaktu balstītu seansu, kad vēlaties koncentrēties, atgūt līdzsvaru vai skaidrāk atjaunot spēkus.",
        "Aukstā lāzera gaisma tiek izmantota lokāli. Jūs novietojat gaismas aplikatoru uz konkrētu zonu, kad vēlaties mērķtiecīgāku atbalstu – pēc sporta, pēc ilgām stundām pie rakstāmgalda vai kad kādai ķermeņa daļai nepieciešama papildu uzmanība.",
        "Kopā šīs trīs tehnoloģijas padara Sanza par kaut ko vairāk nekā vienkārši paklāju. Jūs izvēlaties programmu, izmantojat atbilstošo piederumu un radāt mierīgu, uz atveseļošanos vērstu seansu mājās.",
      ],
    },
    "ctaHeadline": "Sazinieties ar mums, lai uzzinātu vairāk.",
    "ctaBody": "Pastāstiet mums, ko vēlaties veicināt mājās, un mēs palīdzēsim jums saprast, kāda iekārta, piederumi un pirmās programmas ir piemērotas jūsu ikdienas ritmam.",
    "ctaEyebrow": "Individuāla konsultācija",
    "ctaNotes": [
      "Iekārtas izvēle",
      "Pirmās programmas",
      "Ikdienas ritms",
    ],
    "ctaActionText": "Pastāstiet mums nedaudz par savu ikdienas ritmu, un mēs palīdzēsim jums atrast vienkāršu sākuma punktu.",
    "ctaButton": "Sazinieties ar mums, lai uzzinātu vairāk",
    "ctaAlt": "Luksusa moderns mājas labsajūtas interjers naktī ar maigu, siltu apgaismojumu",
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
      canonical: "/how-it-works",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${getOriginForSurface("home")}/how-it-works`,
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

export default async function TheSanzaExperiencePage({ params }: Props) {
  const { locale: routeLocale } = await params;
  const locale = homeLocale(routeLocale);
  const copy = pageCopy[locale];
  const shared = getHomeSharedCopy(locale);
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const programsHref = getHomeDisplayPath(surface, "/programs");

  const systemIntro = copy.sections[0];
  const accessorySections = copy.sections.slice(1);

  return (
    <HomeSiteLayout locale={locale}>
      <main className="site-marketing-root">
        <section
          className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
          aria-labelledby="homeuse-how-heading"
        >
          <div className="relative min-h-[min(92dvh,880px)] lg:min-h-[min(88dvh,800px)]">
            <div className="absolute inset-0">
              <Image
                src={IMAGE_PATHS.home.howItWorksHero}
                alt=""
                fill
                priority
                className="absolute inset-0 h-full w-full object-cover object-center"
                aria-hidden
                sizes="100vw"
              />
            </div>
            <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
            <div className="arc-watermark" aria-hidden>
              <BrandArc
                color="#FFFFFF"
                size={700}
                className="absolute -right-24 -top-24 opacity-[0.06]"
              />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[min(92dvh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(88dvh,800px)] lg:px-10 lg:pb-20 lg:pt-24">
              <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
                <h1
                  id="homeuse-how-heading"
                  className="font-heading text-h1 text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {copy.headline}
                </h1>
                <div className="mt-6 max-w-[58ch] space-y-4 text-lg leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.30)] md:ml-auto">
                  {Array.from(Array.isArray(copy.subheadline) ? copy.subheadline : [copy.subheadline]).map(
                    (paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ),
                  )}
                </div>
                <div className="mt-10 flex flex-col items-end gap-3 sm:flex-row sm:justify-end sm:gap-4">
                  <Link href={programsHref} className="btn-primary inline-flex justify-center">
                    {shared.common.viewPrograms}
                  </Link>
                  <Link href={shared.shopUrl} className="btn-ghost-white inline-flex justify-center">
                    {shared.common.exploreShop}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <p className="campaign-eyebrow campaign-eyebrow--left mb-5 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
                {systemIntro.eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[#1e2a22]">
                {systemIntro.headline}
              </h2>
              <div className="mt-6 max-w-[640px] space-y-5 text-[1.05rem] leading-[1.76] text-[#1e2a22]/90 sm:text-[1.12rem]">
                {systemIntro.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-[0_18px_54px_rgba(30,42,34,0.10)]">
              <Image
                src={IMAGE_PATHS.home.howItWorksIntro}
                alt={systemIntro.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 560px"
              />
            </div>
          </div>
        </section>

        <section className="home-band-full home-band--pillars relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 text-[#f6f1ea] sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[720px]">
              <p className="campaign-eyebrow campaign-eyebrow--left mb-5 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                {copy.program.eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-white">
                {copy.program.headline}
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
              {accessorySections.map((section, index) => (
                <DarkMarketingCard
                  key={section.headline}
                  title={section.headline}
                  eyebrow={section.eyebrow}
                  body={
                    <div className="flex flex-col gap-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  }
                  titleInsetClassName="right-6"
                  media={
                    <>
                      <Image
                        src={sectionImages[index + 1]}
                        alt={section.alt}
                        fill
                        className={`${section.imageClassName} transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]`}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 31vw"
                      />
                      <div
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,22,0.03)_0%,rgba(6,26,22,0.08)_34%,rgba(6,26,22,0.88)_100%)]"
                        aria-hidden
                      />
                    </>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-center">
            <div className="relative min-h-[300px] overflow-hidden rounded-[8px] border border-[#d8cec2] bg-[#efe5d6] shadow-[0_28px_90px_rgba(30,42,34,0.10)] sm:min-h-[420px]">
              <Image
                src={IMAGE_PATHS.home.howItWorksTechnologies}
                alt={copy.ritual.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 520px"
              />
            </div>
            <div>
              <h2 className="font-heading text-[clamp(2.35rem,5vw,5rem)] leading-[1.01] tracking-tight text-[#17221d]">
                {copy.ritual.headline}
              </h2>
              <div className="mt-7 max-w-[660px] space-y-5 text-[1.08rem] leading-[1.78] text-[#1e2a22]/90 sm:text-[1.18rem]">
                {copy.ritual.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="home-trust-section px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="home-trust-shell mx-auto max-w-[980px] p-6 sm:p-9 lg:p-12">
            <div className="max-w-[760px]">
              <Eyebrow>{copy.trust.eyebrow}</Eyebrow>
              <h2 className="max-w-[720px] font-heading text-[clamp(2.05rem,4.3vw,4.2rem)] leading-[1.03] tracking-tight text-[#17221d]">
                {copy.trust.headline}
              </h2>
              <div className="mt-6 max-w-[680px] space-y-5 text-[1.04rem] leading-[1.78] text-[#1e2a22]/90 sm:text-[1.15rem]">
                {Array.from(Array.isArray(copy.trust.body) ? copy.trust.body : [copy.trust.body]).map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="home-contact-cta-section px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="home-contact-cta mx-auto grid max-w-[980px] overflow-hidden rounded-[8px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="home-contact-cta-copy p-6 sm:p-9 lg:p-12">
              <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/72">
                {copy.ctaEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.9rem)] font-bold leading-[1.02] tracking-tight text-white">
                {copy.ctaHeadline}
              </h2>
              <p className="mt-6 max-w-[620px] text-[1.04rem] leading-[1.74] text-white/82 sm:text-[1.15rem]">
                {copy.ctaBody}
              </p>
              <div className="mt-9 grid gap-3 text-[0.95rem] font-semibold text-white sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {copy.ctaNotes.map((note) => (
                  <p key={note} className="home-contact-cta-note">
                    {note}
                  </p>
                ))}
              </div>
            </div>
            <div className="home-contact-cta-action p-6 sm:p-8 lg:p-10">
              <p className="max-w-[18rem] text-[1rem] leading-7 text-[#1e2a22]/78">
                {copy.ctaActionText}
              </p>
              <ContactDrawerTrigger
                className="btn-secondary mt-6 inline-flex w-full justify-center"
                options={{ drawerType: "homePersonal" }}
              >
                {copy.ctaButton}
              </ContactDrawerTrigger>
            </div>
          </div>
        </section>
      </main>
    </HomeSiteLayout>
  );
}
