import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface, getSiteSurface } from "@/lib/domains";
import { getHomeDisplayPath, getHomeSharedCopy, homeLocale } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

type Props = { params: Promise<{ locale: string }> };

const experienceImages = [
  IMAGE_PATHS.home.outcomePhotos[1],
  "/images/sanza recovery 01.jpg",
  IMAGE_PATHS.home.outcomePhotos[2],
  IMAGE_PATHS.home.productMat,
  IMAGE_PATHS.home.twoPathsB,
  IMAGE_PATHS.home.outcomePhotos[3],
  IMAGE_PATHS.lifestyle.pillarLight,
  IMAGE_PATHS.home.welcomeSide,
] as const;

const heroImage = "/images/homeuse-experiences-hero.jpg";
const introImage = "/images/homeuse-experiences-intro.jpg";
const momentImage = "/images/homeuse-experiences-moment.jpg";
const sessionImage = "/images/homeuse-experiences-session.jpg";
const ctaImage = "/images/homeuse-experiences-cta.jpg";

const pageCopy = {
  "en": {
    "metaTitle": "sanza Experiences for Home | Daily Wellness Rituals | Nordora Vital",
    "metaDescription": "Discover sanza home wellness experiences for better evenings, recovery at home, work-from-home reset, travel recovery, sleep rituals and calm performance.",
    "eyebrow": "sanza Experiences",
    "headline": "Make your home the place you recover better.",
    "subheadline": "sanza helps you create structured moments of calm, recovery and reset around the way you actually live.",
    "heroBody": [
      "After work, after training, before sleep or whenever your body needs support — sanza helps you turn a simple pause into a real wellness session at home.",
      "Choose the experience that fits the moment: calm, recharge, recovery, sleep preparation or daily reset.",
      "With PEMF, biofrequency programs, mat, pads, hand electrodes and cold-laser light support, sanza gives you a system you can actually use — again and again.",
    ],
    "heroAlt": "Premium editorial home wellness scene in warm evening light",
    "introEyebrow": "The home as a wellness environment",
    "introHeadline": "Your home should be the place where your body finally gets to arrive.",
    "introBody": [
      "But often, the day follows you through the door — work in your shoulders, training in your legs, stress still sitting in the room.",
      "sanza helps you create the transition modern life often misses: a real reset moment at home, after work, after movement, before sleep, or whenever the day has taken too much from you.",
      "It does not turn your home into a clinic. It helps your home become what you need it to be — calmer, softer, and ready to support you.",
    ],
    "introAlt": "Architectural home wellness corner with warm light and natural materials",
    "momentsEyebrow": "Choose the moment",
    "momentsHeadline": "One system. Different ways to reset your day.",
    "momentsLead": [
      "sanza fits where the pressure usually builds: the evening that still feels too fast, the body that needs time after effort, the home office that never quite switches off, the night that needs a softer beginning.",
      "Choose the moment you want to change. sanza gives you a clear way to enter it.",
    ],
    "techEyebrow": "How the session takes shape",
    "techHeadline": "One system. Different ways to experience it.",
    "techBody": "sanza adapts to the kind of pause you need. Use the mat for a broad full-body session, pads for areas that feel loaded, hand electrodes for a more tactile experience, or cold-laser light support when you want focused attention on one point.",
    "techItems": [
      [
        "Mat",
        "For broad reset sessions when the whole body needs a clear pause.",
      ],
      [
        "Pads",
        "For moments when specific areas feel loaded after the day.",
      ],
      [
        "Hand electrodes",
        "For a tactile session that feels active, present and easy to repeat.",
      ],
      [
        "Cold-laser light",
        "For focused light support when one point needs more attention.",
      ],
    ],
    "habitEyebrow": "When it becomes part of the room",
    "habitHeadline": "The system you trust is the one you actually use.",
    "habitBody": "sanza does not need a special room or a perfect routine. It becomes useful when it has a place in your day: the chair after work, the sofa before bed, the quiet corner after training, the shared evening moment when the home starts to soften.",
    "suggestedPrograms": "Suggested programs",
    "experiences": [
      {
        "title": "Better Evenings",
        "copy": [
          "The day does not always end when you close the door.",
          "Sometimes it stays in your shoulders, your breathing, your mood, your room. sanza helps you create a clear evening shift — lower the light, start the session, and give your body a reason to stop carrying the pace of the day.",
          "Use it when you want the evening to feel like yours again.",
        ],
        "programs": [
          "Arrival Reset",
          "Deep Calm",
        ],
        "alt": "Elegant evening living room prepared for a calm home wellness session",
      },
      {
        "title": "Recovery At Home",
        "copy": [
          "Effort needs an ending.",
          "After training, travel, long hours on your feet or a demanding week, sanza gives recovery a place in your home. A session creates a clear pause after activity — so your body is no longer asked to keep going, holding, compensating or responding.",
          "Use it when you want recovery to begin before exhaustion takes over.",
        ],
        "programs": [
          "Post-Workout Recovery",
          "Weekend Recharge",
          "Leg Lightness",
        ],
        "alt": "Refined home recovery environment after sport",
      },
      {
        "title": "Work From Home Reset",
        "copy": [
          "When your home is also your workspace, the boundary can disappear.",
          "The laptop closes, but your body may still feel switched on. sanza gives the end of the workday a physical signal: a session, a chair, a quieter room, a different state.",
          "Use it when you need your home to stop feeling like the office.",
        ],
        "programs": [
          "Arrival Reset",
          "Back & Shoulder Ease",
          "Deep Calm",
        ],
        "alt": "Modern work-from-home space transitioning into an evening wellness ritual",
      },
      {
        "title": "Travel Recovery",
        "copy": [
          "After flights, hotels, driving and constant movement, your system needs something familiar.",
          "sanza helps you rebuild rhythm when your day has been shaped by airports, schedules, waiting rooms and stimulation.",
          "It gives the body a simple signal: you have arrived.",
        ],
        "programs": [
          "Arrival Reset",
          "Leg Lightness",
          "Sleep Preparation",
        ],
        "alt": "Elegant travel recovery scene at home with a calm wellness mat ritual",
      },
      {
        "title": "Couples Rituals",
        "copy": [
          "Some evenings do not need more conversation. They need less noise.",
          "sanza can become a shared pause — one person starts, the room slows down, and the evening changes without needing effort, performance or planning.",
        ],
        "programs": [
          "Deep Calm",
          "Sleep Preparation",
          "Weekend Recharge",
        ],
        "alt": "Calm home wellness environment with a peaceful evening atmosphere",
      },
      {
        "title": "Calm Performance",
        "copy": [
          "You cannot stay clear by pushing all the time.",
          "sanza supports the part of performance that happens away from output: returning, settling, recovering and building the steadiness to meet the next day well.",
          "Use it when you want to come back sharper, not more strained.",
        ],
        "programs": [
          "Morning Activation",
          "Post-Workout Recovery",
          "Deep Calm",
        ],
        "alt": "Premium calm performance home scene in a sophisticated interior",
      },
      {
        "title": "Wellness Spaces",
        "copy": [
          "A corner becomes meaningful when your body knows what happens there.",
          "With sanza, a chair, a lamp, a mat or a quiet part of the room can become your reset point — a place you return to because it already knows its purpose.",
          "The technology stays simple. The effect on the room is what matters.",
        ],
        "programs": [
          "Weekend Recharge",
          "Deep Calm",
          "Arrival Reset",
        ],
        "alt": "Luxury home wellness corner with warm architectural light and natural textures",
      },
      {
        "title": "Sleep Rituals",
        "copy": [
          "Sleep begins before bed.",
          "sanza helps you protect the last part of the evening — the time when light gets softer, stimulation drops, and your body is no longer pulled into the next task, message or thought.",
          "Use it when you want the night to begin with more calm.",
        ],
        "programs": [
          "Sleep Preparation",
          "Deep Calm",
        ],
        "alt": "Premium sleep ritual scene with warm evening light and quiet atmosphere",
      },
    ],
    "ctaHeadline": "Design your own home wellness ritual.",
    "ctaBody": "Choose the moment you want to protect: your evening, your recovery, your sleep, your weekend or the first quiet minutes after coming home.",
    "ctaAlt": "Cinematic modern home at night with warm architectural lighting",
  },
  "de": {
    "metaTitle": "sanza-Erlebnisse für zu Hause | Tägliche Wellness-Rituale | Nordora Vital",
    "metaDescription": "Entdecke sanza-Wellness-Erlebnisse für zu Hause für bessere Abende, Erholung zu Hause, Erholung nach der Arbeit im Homeoffice, Erholung auf Reisen, Schlafrituale und ruhige Leistungsfähigkeit.",
    "eyebrow": "sanza-Erlebnisse",
    "headline": "Machen Sie Ihr Zuhause zu dem Ort, an dem Sie sich besser erholen.",
    "subheadline": "sanza hilft Ihnen dabei, strukturierte Momente der Ruhe, Erholung und des Resets ganz nach Ihrem Lebensrhythmus zu gestalten.",
    "heroBody": [
      "Nach der Arbeit, nach dem Training, vor dem Schlafengehen oder wann immer Ihr Körper Unterstützung braucht – sanza hilft Ihnen, eine einfache Pause in eine echte Wellness-Sitzung zu Hause zu verwandeln.",
      "Wählen Sie das Erlebnis, das zum Moment passt: Ruhe, Auftanken, Erholung, Schlafvorbereitung oder täglicher Reset.",
      "Mit PEMF, Biofrequenzprogrammen, Matte, Pads, Handelektroden und Kaltlaserlicht-Unterstützung bietet Ihnen sanza ein System, das Sie tatsächlich nutzen können – immer wieder.",
    ],
    "heroAlt": "Premium-Redaktionelle Home-Wellness-Szene in warmem Abendlicht",
    "introEyebrow": "Das Zuhause als Wellness-Umgebung",
    "introHeadline": "Ihr Zuhause sollte der Ort sein, an dem Ihr Körper endlich ankommen kann.",
    "introBody": [
      "Doch oft folgt Ihnen der Tag durch die Tür – Arbeit in den Schultern, Training in den Beinen, Stress, der noch im Raum hängt.",
      "sanza hilft Ihnen, den Übergang zu schaffen, den das moderne Leben oft vermissen lässt: einen echten Reset-Moment zu Hause, nach der Arbeit, nach der Bewegung, vor dem Schlafengehen oder wann immer der Tag Ihnen zu viel abverlangt hat.",
      "Es verwandelt dein Zuhause nicht in eine Klinik. Es hilft deinem Zuhause, das zu werden, was du brauchst – ruhiger, sanfter und bereit, dich zu unterstützen.",
    ],
    "introAlt": "Architektonische Wellness-Ecke zu Hause mit warmem Licht und natürlichen Materialien",
    "momentsEyebrow": "Wähle den Moment",
    "momentsHeadline": "Ein System. Verschiedene Wege, deinen Tag neu zu starten.",
    "momentsLead": [
      "sanza passt dort hin, wo sich der Druck meist aufbaut: der Abend, der sich immer noch zu schnell anfühlt, der Körper, der nach Anstrengung Zeit braucht, das Homeoffice, das nie ganz abschaltet, die Nacht, die einen sanfteren Beginn braucht.",
      "Wählen Sie den Moment, den Sie verändern möchten. sanza bietet Ihnen einen klaren Weg dorthin.",
    ],
    "techEyebrow": "So gestaltet sich die Sitzung",
    "techHeadline": "Ein System. Verschiedene Möglichkeiten, es zu erleben.",
    "techBody": "sanza passt sich der Art von Pause an, die Sie brauchen. Verwenden Sie die Matte für eine umfassende Ganzkörpersitzung, Pads für Bereiche, die sich belastet anfühlen, Handelektroden für ein taktileres Erlebnis oder Kaltlaserlicht-Unterstützung, wenn Sie Ihre Aufmerksamkeit auf einen bestimmten Punkt richten möchten.",
    "techItems": [
      [
        "Matte",
        "Für umfassende Reset-Sitzungen, wenn der ganze Körper eine klare Pause braucht.",
      ],
      [
        "Pads",
        "Für Momente, in denen sich bestimmte Bereiche nach dem Tag belastet anfühlen.",
      ],
      [
        "Handelektroden",
        "Für eine taktile Sitzung, die sich aktiv, präsent und leicht wiederholbar anfühlt.",
      ],
      [
        "Kaltlaserlicht",
        "Für gezielte Lichtunterstützung, wenn ein Punkt mehr Aufmerksamkeit benötigt.",
      ],
    ],
    "habitEyebrow": "Wenn es Teil des Raums wird",
    "habitHeadline": "Das System, dem du vertraust, ist das, das du tatsächlich nutzt.",
    "habitBody": "sanza benötigt keinen speziellen Raum oder eine perfekte Routine. Es wird nützlich, wenn es einen Platz in deinem Tag hat: der Sessel nach der Arbeit, das Sofa vor dem Schlafengehen, die ruhige Ecke nach dem Training, der gemeinsame Abendmoment, wenn die Atmosphäre zu Hause sanfter wird.",
    "suggestedPrograms": "Empfohlene Programme",
    "experiences": [
      {
        "title": "Bessere Abende",
        "copy": [
          "Der Tag endet nicht immer, wenn du die Tür schließt.",
          "Manchmal bleibt er in deinen Schultern, deinem Atem, deiner Stimmung, deinem Zimmer. sanza hilft dir, einen klaren Übergang zum Abend zu schaffen – dimme das Licht, starte die Sitzung und gib deinem Körper einen Grund, das Tempo des Tages hinter sich zu lassen.",
          "Nutze es, wenn du möchtest, dass sich der Abend wieder wie dein eigener anfühlt.",
        ],
        "programs": [
          "Ankunfts-Reset",
          "Tiefe Ruhe",
        ],
        "alt": "Elegantes Abendwohnzimmer, vorbereitet für eine ruhige Wellness-Session zu Hause",
      },
      {
        "title": "Erholung zu Hause",
        "copy": [
          "Anstrengung braucht ein Ende.",
          "Nach dem Training, einer Reise, langen Stunden auf den Beinen oder einer anstrengenden Woche gibt sanza der Erholung einen Platz in deinem Zuhause. Eine Session schafft eine klare Pause nach der Aktivität – damit dein Körper nicht mehr dazu aufgefordert wird, weiterzumachen, durchzuhalten, zu kompensieren oder zu reagieren.",
          "Nutzen Sie es, wenn Sie möchten, dass die Erholung beginnt, bevor die Erschöpfung überhandnimmt.",
        ],
        "programs": [
          "Erholung nach dem Training",
          "Auftanken am Wochenende",
          "Leichtigkeit in den Beinen",
        ],
        "alt": "Eine raffinierte Umgebung für die Erholung zu Hause nach dem Sport",
      },
      {
        "title": "Reset für die Arbeit von zu Hause aus",
        "copy": [
          "Wenn Ihr Zuhause gleichzeitig Ihr Arbeitsbereich ist, kann die Grenze verschwinden.",
          "Der Laptop ist zugeklappt, aber Ihr Körper fühlt sich vielleicht immer noch auf Hochtouren. sanza gibt dem Ende des Arbeitstages ein physisches Signal: eine Sitzung, einen Stuhl, einen ruhigeren Raum, einen anderen Zustand.",
          "Nutzen Sie es, wenn Ihr Zuhause sich nicht mehr wie ein Büro anfühlen soll.",
        ],
        "programs": [
          "Ankunfts-Reset",
          "Entspannung für Rücken und Schultern",
          "Tiefe Ruhe",
        ],
        "alt": "Moderner Homeoffice-Bereich, der in ein abendliches Wellness-Ritual übergeht",
      },
      {
        "title": "Erholung auf Reisen",
        "copy": [
          "Nach Flügen, Hotels, Autofahrten und ständiger Bewegung braucht Ihr Körper etwas Vertrautes.",
          "sanza hilft Ihnen, Ihren Rhythmus wiederzufinden, wenn Ihr Tag von Flughäfen, Zeitplänen, Warteräumen und Reizen geprägt war.",
          "Es gibt dem Körper ein einfaches Signal: Sie sind angekommen.",
        ],
        "programs": [
          "Ankunfts-Reset",
          "Leichtigkeit in den Beinen",
          "Schlafvorbereitung",
        ],
        "alt": "Elegante Erholung nach der Reise zu Hause mit einem ruhigen Wellness-Mattenritual",
      },
      {
        "title": "Paarrituale",
        "copy": [
          "Manche Abende brauchen nicht mehr Gespräch. Sie brauchen weniger Lärm.",
          "sanza kann zu einer gemeinsamen Pause werden – eine Person beginnt, der Raum verlangsamt sich, und der Abend verändert sich, ohne dass Anstrengung, Leistung oder Planung nötig sind.",
        ],
        "programs": [
          "Tiefe Ruhe",
          "Schlafvorbereitung",
          "Wochenend-Auftanken",
        ],
        "alt": "Ruhige Wellness-Umgebung zu Hause mit einer friedlichen Abendatmosphäre",
      },
      {
        "title": "Ruhige Leistung",
        "copy": [
          "Man kann nicht klar bleiben, wenn man ständig unter Druck steht.",
          "sanza unterstützt den Teil der Leistung, der abseits der Leistung stattfindet: Zurückkehren, zur Ruhe kommen, sich erholen und die Beständigkeit aufbauen, um den nächsten Tag gut zu meistern.",
          "Nutze es, wenn du klarer zurückkommen willst, nicht angespannter.",
        ],
        "programs": [
          "Morgendliche Aktivierung",
          "Erholung nach dem Training",
          "Tiefe Ruhe",
        ],
        "alt": "Hochwertige, ruhige Leistungsumgebung zu Hause in einem eleganten Interieur",
      },
      {
        "title": "Wellness-Räume",
        "copy": [
          "Eine Ecke gewinnt an Bedeutung, wenn Ihr Körper weiß, was dort geschieht.",
          "Mit sanza können ein Stuhl, eine Lampe, eine Matte oder eine ruhige Ecke des Raums zu Ihrem Reset-Punkt werden – ein Ort, an den Sie zurückkehren, weil er seinen Zweck bereits kennt.",
          "Die Technologie bleibt einfach. Was zählt, ist die Wirkung auf den Raum.",
        ],
        "programs": [
          "Wochenend-Auftanken",
          "Tiefe Ruhe",
        ],
        "alt": "Luxuriöse Wellness-Ecke für zu Hause mit warmem architektonischem Licht und natürlichen Texturen",
      },
      {
        "title": "Schlafrituale",
        "copy": [
          "Der Schlaf beginnt schon vor dem Zubettgehen.",
          "sanza hilft dir dabei, den letzten Teil des Abends zu schützen – die Zeit, in der das Licht sanfter wird, die Reize nachlassen und dein Körper nicht mehr von der nächsten Aufgabe, Nachricht oder dem nächsten Gedanken in Anspruch genommen wird.",
          "Nutze es, wenn du möchtest, dass der Abend ruhiger beginnt.",
        ],
        "programs": [
          "Schlafvorbereitung",
          "Tiefe Ruhe",
        ],
        "alt": "Premium-Schlafritualszene mit warmem Abendlicht und ruhiger Atmosphäre",
      },
    ],
    "ctaHeadline": "Gestalte dein eigenes Wellness-Ritual für zu Hause.",
    "ctaBody": "Wähle den Moment, den du schützen möchtest: deinen Abend, deine Erholung, deinen Schlaf, dein Wochenende oder die ersten ruhigen Minuten nach der Rückkehr nach Hause.",
    "ctaAlt": "Filmreifes, modernes Zuhause bei Nacht mit warmer architektonischer Beleuchtung",
  },
  "lv": {
    "metaTitle": "sanza pieredzes mājās | Ikdienas labsajūtas rituāli | Nordora Vital",
    "metaDescription": "Atklājiet sanza mājas labsajūtas pieredzes labākām vakara stundām, atjaunošanai mājās, atpūtai pēc darba no mājām, atjaunošanai pēc ceļojuma, miega rituāliem un mierīgai darbībai.",
    "eyebrow": "sanza pieredzes",
    "headline": "Padariet savu māju par vietu, kurā jūs atgūstat spēkus.",
    "subheadline": "sanza palīdz jums radīt strukturētus mieru, atgūšanos un atjaunošanos brīžus, ņemot vērā jūsu reālo dzīvesveidu.",
    "heroBody": [
      "Pēc darba, pēc treniņa, pirms miega vai kad vien jūsu ķermenim nepieciešams atbalsts — sanza palīdz jums pārvērst vienkāršu pauzi par īstu labsajūtas sesiju mājās.",
      "Izvēlieties pieredzi, kas atbilst brīdim: miers, enerģijas uzlādēšana, atgūšanās, sagatavošanās miegam vai ikdienas atjaunošanās.",
      "Ar PEMF, biofrekvences programmām, paklāju, spilventiņiem, roku elektrodiem un aukstā lāzera gaismas atbalstu sanza piedāvā sistēmu, ko varat izmantot atkārtoti.",
    ],
    "heroAlt": "Augstākās kvalitātes mājas labsajūtas aina siltā vakara gaismā",
    "introEyebrow": "Mājas kā labsajūtas vide",
    "introHeadline": "Jūsu mājām vajadzētu būt vietai, kur jūsu ķermenis beidzot var atpūsties.",
    "introBody": [
      "Taču bieži vien diena seko jums pāri slieksnim — darbs plecos, treniņš kājās, stresa sajūta joprojām telpā.",
      "sanza palīdz radīt pāreju, kāda mūsdienu dzīvē bieži trūkst: īstu atjaunošanās brīdi mājās, pēc darba, pēc kustībām, pirms miega vai kad vien diena ir prasījusi no jums pārāk daudz.",
      "Tas nepārvērš jūsu mājas par klīniku. Tas palīdz jūsu mājām kļūt par to, kas jums nepieciešams — mierīgākām, maigākām un gatavām jūs atbalstīt.",
    ],
    "introAlt": "Arhitektonisks mājas labsajūtas stūrītis ar siltu gaismu un dabīgiem materiāliem",
    "momentsEyebrow": "Izvēlieties brīdi",
    "momentsHeadline": "Viena sistēma. Dažādi veidi, kā atjaunot savu dienu.",
    "momentsLead": [
      "sanza iederas tur, kur parasti uzkrājas spriedze: vakarā, kas joprojām šķiet pārāk straujš, ķermenī, kam pēc piepūles vajadzīgs laiks, mājas birojā, kas nekad pilnībā neizslēdzas, naktī, kam vajadzīgs maigāks sākums.",
      "Izvēlieties brīdi, ko vēlaties mainīt. sanza sniedz jums skaidru ceļu, kā tajā iekļūt.",
    ],
    "techEyebrow": "Kā veidojas sesija",
    "techHeadline": "Viena sistēma. Dažādi veidi, kā to izbaudīt.",
    "techBody": "sanza pielāgojas tam pārtraukuma veidam, kas jums nepieciešams. Izmantojiet paklāju plašai visa ķermeņa sesijai, spilventiņus vietām, kur jūtat spriedzi, rokas elektrodus taktilākai pieredzei vai aukstā lāzera gaismas atbalstu, ja vēlaties koncentrēties uz vienu punktu.",
    "techItems": [
      [
        "Paklājs",
        "Plašām atjaunojošām sesijām, kad visam ķermenim nepieciešama skaidra pauze.",
      ],
      [
        "Spilventiņi",
        "Brīžiem, kad pēc dienas jūtat spriedzi konkrētās vietās.",
      ],
      [
        "Rokas elektrodus",
        "Taktilai sesijai, kas liekas aktīva, klātesoša un viegli atkārtojama.",
      ],
      [
        "Aukstā lāzera gaisma",
        "Koncentrētai gaismas atbalstam, kad vienam punktam nepieciešama lielāka uzmanība.",
      ],
    ],
    "habitEyebrow": "Kad tas kļūst par telpas daļu",
    "habitHeadline": "Sistēma, kurai uzticaties, ir tā, ko patiešām izmantojat.",
    "habitBody": "Sanzai nav nepieciešama īpaša telpa vai perfekta rutīna. Tā kļūst noderīga, kad tai ir vieta jūsu dienā: krēsls pēc darba, dīvāns pirms gulētiešanas, klusais stūrītis pēc treniņa, kopīgais vakara brīdis, kad mājās sāk valda miers.",
    "suggestedPrograms": "Ieteicamās programmas",
    "experiences": [
      {
        "title": "Labākas vakara stundas",
        "copy": [
          "Diena ne vienmēr beidzas, kad aizverat durvis.",
          "Dažreiz tā paliek jūsu plecos, elpā, noskaņā, telpā. sanza palīdz radīt skaidru pāreju uz vakaru — samaziniet gaismu, sāciet sesiju un dodiet ķermenim iemeslu pārtraukt turpināt dienas ritmu.",
          "Izmantojiet to, kad vēlaties, lai vakars atkal justos kā jūsu.",
        ],
        "programs": [
          "Atgriešanās",
          "Dziļš miers",
        ],
        "alt": "Eleganta vakara viesistaba, sagatavota mierīgai mājas labsajūtas sesijai",
      },
      {
        "title": "Atgūšanās mājās",
        "copy": [
          "Pūlēm ir nepieciešams noslēgums.",
          "Pēc treniņa, ceļojuma, ilgām stundām kājās vai nogurdinošas nedēļas sanza nodrošina atgūšanās vietu jūsu mājās. Sesija rada skaidru pauzi pēc aktivitātes — tādējādi jūsu ķermenim vairs nav jāturpina darboties, jāiztur, jākompensē vai jāreaģē.",
          "Izmantojiet to, kad vēlaties, lai atgūšanās sāktos, pirms pārņem izsmelšana.",
        ],
        "programs": [
          "Atgūšanās pēc treniņa",
          "Atjaunošanās nedēļas nogalē",
          "Kāju vieglums",
        ],
        "alt": "Izsmalcināta atgūšanās vide mājās pēc sporta",
      },
      {
        "title": "Atjaunošanās pēc darba no mājām",
        "copy": [
          "Kad jūsu mājas ir arī jūsu darba telpa, robeža var pazust.",
          "Portatīvais dators ir aizvērts, bet jūsu ķermenis joprojām var justies ieslēgts. sanza dod darba dienas beigām fizisku signālu: sesiju, krēslu, klusāku telpu, citu stāvokli.",
          "Izmantojiet to, kad vēlaties, lai jūsu mājas vairs neizskatītos kā birojs.",
        ],
        "programs": [
          "Atjaunošanās pēc ierašanās",
          "Muguras un plecu atslābināšana",
          "Dziļš miers",
        ],
        "alt": "Mūsdienīga darba no mājām telpa, kas pāriet vakara labsajūtas rituālā",
      },
      {
        "title": "Atjaunošanās ceļojumos",
        "copy": [
          "Pēc lidojumiem, viesnīcām, braukšanas un nepārtrauktas kustības jūsu organismam ir nepieciešams kaut kas pazīstams.",
          "sanza palīdz atjaunot ritmu, kad jūsu dienu ir veidojuši lidostas, grafiki, uzgaidāmās telpas un stimulācija.",
          "Tas dod ķermenim vienkāršu signālu: jūs esat ieradušies.",
        ],
        "programs": [
          "Ierašanās atjaunošana",
          "Kāju vieglums",
          "Sagatavošanās miegam",
        ],
        "alt": "Eleganta ceļojuma atgūšanās aina mājās ar mierīgu labsajūtas paklāja rituālu",
      },
      {
        "title": "Pāru rituāli",
        "copy": [
          "Dažās vakaros nav vajadzīgas garas sarunas. Tām vajag mazāk trokšņa.",
          "sanza var kļūt par kopīgu pauzi — viens cilvēks sāk, telpa palēninās, un vakars mainās bez piepūles, izrādes vai plānošanas.",
        ],
        "programs": [
          "Dziļš miers",
          "Sagatavošanās miegam",
          "Atjaunošanās nedēļas nogalē",
        ],
        "alt": "Rāma mājas labsajūtas vide ar mierīgu vakara atmosfēru",
      },
      {
        "title": "Rāms sniegums",
        "copy": [
          "Jūs nevarat saglabāt skaidru prātu, visu laiku spiežot uz priekšu.",
          "sanza atbalsta to snieguma daļu, kas notiek ārpus rezultāta: atgriešanās, iekārtošanās, atgūšanās un stabilitātes veidošana, lai labi sagaidītu nākamo dienu.",
          "Izmantojiet to, kad vēlaties atgriezties asāks, nevis vairāk saspringts.",
        ],
        "programs": [
          "Rīta aktivizēšana",
          "Atgūšanās pēc treniņa",
          "Dziļš miers",
        ],
        "alt": "Augstākās klases mierīga snieguma mājas vide izsmalcinātā interjerā",
      },
      {
        "title": "Labklājības telpas",
        "copy": [
          "Stūrītis kļūst nozīmīgs, kad jūsu ķermenis zina, kas tur notiek.",
          "Ar sanza krēsls, lampa, paklājs vai klusa telpas daļa var kļūt par jūsu atjaunošanās punktu — vietu, uz kuru jūs atgriežaties, jo tā jau zina savu mērķi.",
          "Tehnoloģija paliek vienkārša. Svarīgs ir efekts uz telpu.",
        ],
        "programs": [
          "Atpūta nedēļas nogalē",
          "Dziļš miers",
        ],
        "alt": "Luksusa mājas labsajūtas stūrītis ar siltu arhitektonisko apgaismojumu un dabīgām faktūrām",
      },
      {
        "title": "Miega rituāli",
        "copy": [
          "Miegs sākas jau pirms gulētiešanas.",
          "„sanza“ palīdz jums saglabāt vakara pēdējo daļu — laiku, kad gaisma kļūst maigāka, stimulācija samazinās un jūsu ķermeni vairs neaizrauj nākamais uzdevums, ziņa vai doma.",
          "Izmantojiet to, ja vēlaties, lai nakts sāktos mierīgāk.",
        ],
        "programs": [
          "Sagatavošanās miegam",
          "Dziļš miers",
        ],
        "alt": "Augstākās klases miega rituāla aina ar siltu vakara gaismu un klusu atmosfēru",
      },
    ],
    "ctaHeadline": "Izveidojiet savu mājas labsajūtas rituālu.",
    "ctaBody": "Izvēlieties brīdi, kuru vēlaties pasargāt: savu vakaru, atpūtu, miegu, nedēļas nogali vai pirmās klusās minūtes pēc atgriešanās mājās.",
    "ctaAlt": "Kinofilmas cienīga moderna māja naktī ar siltu arhitektonisko apgaismojumu",
  },
} as const;

type ExperienceCopy = {
  title: string;
  copy: readonly string[];
  programs: readonly string[];
  alt: string;
  image: (typeof experienceImages)[number];
};

function isExperienceCopy(experience: ExperienceCopy | undefined): experience is ExperienceCopy {
  return Boolean(experience);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[homeLocale(locale)];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    metadataBase: new URL(getOriginForSurface("home")),
    alternates: {
      canonical: "/sanza-experiences",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${getOriginForSurface("home")}/sanza-experiences`,
      siteName: "Nordora Vital Home",
      type: "website",
    },
  };
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
        light ? "text-[#cfe1d2]" : "text-[#6f8a7a]"
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
  variant?: "primary" | "secondary" | "light";
}) {
  const className =
    variant === "primary"
      ? "bg-[#0e3d34] text-[#f7faf7] shadow-[0_18px_42px_rgba(14,61,52,0.16)]"
      : variant === "light"
        ? "border border-[#f7faf7]/45 bg-[#f7faf7]/12 text-[#f7faf7]"
        : "border border-[#0e3d34]/18 bg-[#f7faf7]/72 text-[#0e3d34]";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={`inline-flex min-h-12 items-center justify-center rounded-[8px] px-6 text-[0.95rem] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f8a7a] ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-[8px] px-6 text-[0.95rem] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f8a7a] ${className}`}
    >
      {children}
    </Link>
  );
}

function MomentFlow({
  experiences,
  eyebrow,
  headline,
  lead,
  suggestedPrograms,
}: {
  experiences: ExperienceCopy[];
  eyebrow: string;
  headline: string;
  lead: string | readonly string[];
  suggestedPrograms: string;
}) {
  const focusExperiences = [experiences[0], experiences[1], experiences[2], experiences[7]].filter(
    isExperienceCopy,
  );
  const leadParagraphs = Array.isArray(lead) ? lead : [lead];

  return (
    <section className="relative overflow-hidden bg-[#f2f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="sanza-experience-reveal lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-heading text-[clamp(2.45rem,5vw,5.7rem)] leading-[1] tracking-normal text-[#17221d]">
            {headline}
          </h2>
          <div className="mt-7 flex max-w-[600px] flex-col gap-5 text-[1.08rem] leading-[1.75] text-[#1e2a22]/82 sm:text-[1.2rem]">
            {leadParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="mt-10 overflow-hidden rounded-[8px] bg-[#dce8df]">
            <div className="relative aspect-[4/5] min-h-[360px]">
              <Image
                src={momentImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 420px"
              />
            </div>
          </figure>
        </div>

        <div className="divide-y divide-[#c7d6cb] border-y border-[#c7d6cb]">
          {focusExperiences.map((experience, index) => (
            <article
              key={experience.title}
              className="sanza-experience-reveal grid gap-5 py-9 sm:py-11 md:grid-cols-[0.32fr_0.68fr] md:gap-10"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div>
                <p className="max-w-[18rem] text-[0.82rem] font-semibold leading-6 text-[#6d6158]">
                  {suggestedPrograms}: {experience.programs.join(" / ")}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-[clamp(1.8rem,3vw,3.3rem)] leading-[1.02] tracking-normal text-[#17221d]">
                  {experience.title}
                </h3>
                <div className="mt-4 flex max-w-[620px] flex-col gap-4 text-[1.02rem] leading-[1.78] text-[#1e2a22]/86">
                  {experience.copy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection({
  eyebrow,
  headline,
  body,
  items,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  items: readonly (readonly [string, string])[];
}) {
  const productImages = [
    IMAGE_PATHS.home.productMat,
    IMAGE_PATHS.home.productPad,
    IMAGE_PATHS.home.productHandElectrode,
    IMAGE_PATHS.home.productPen,
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#102f29] px-5 py-20 text-[#f7faf7] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <figure className="sanza-experience-reveal overflow-hidden rounded-[8px] bg-[#f2f7f3]">
          <div className="relative aspect-[16/10] min-h-[340px]">
            <Image
              src={sessionImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 560px"
            />
          </div>
        </figure>

        <div className="sanza-experience-reveal">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="font-heading text-[clamp(2.3rem,5vw,5.4rem)] leading-[1] tracking-normal">
            {headline}
          </h2>
          <p className="mt-7 max-w-[650px] text-[1.08rem] leading-[1.78] text-[#eef5ef]/84 sm:text-[1.2rem]">
            {body}
          </p>

          <div className="mt-10 divide-y divide-[#eef5ef]/18 border-y border-[#eef5ef]/18">
            {items.map(([title, itemBody], index) => (
              <div key={title} className="grid gap-5 py-6 sm:grid-cols-[112px_1fr] sm:items-center">
                <div className="relative h-24 overflow-hidden rounded-[8px]">
                  <Image
                    src={productImages[index]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl leading-tight tracking-normal">{title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-[1.65] text-[#eef5ef]/78">
                    {itemBody}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HabitSection({
  experiences,
  suggestedPrograms,
  eyebrow,
  headline,
  body,
}: {
  experiences: ExperienceCopy[];
  suggestedPrograms: string;
  eyebrow: string;
  headline: string;
  body?: string | readonly string[];
}) {
  const selectedExperiences = [experiences[4], experiences[5], experiences[6]].filter(
    isExperienceCopy,
  );
  const bodyParagraphs = body ? (Array.isArray(body) ? body : [body]) : [];

  return (
    <section className="relative overflow-hidden bg-[#f7faf7] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="sanza-experience-reveal">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-heading text-[clamp(2.4rem,5vw,5.2rem)] leading-[1] tracking-normal text-[#17221d]">
              {headline}
            </h2>
            {bodyParagraphs.length > 0 ? (
              <div className="mt-7 flex max-w-[650px] flex-col gap-5 text-[1.08rem] leading-[1.75] text-[#1e2a22]/82 sm:text-[1.2rem]">
                {bodyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div className="sanza-experience-reveal relative min-h-[340px] overflow-hidden rounded-[8px] bg-[#dce8df] sm:min-h-[440px]">
            <Image
              src={IMAGE_PATHS.home.personalSettings}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 600px"
            />
          </div>
        </div>

        <div className="mt-14 divide-y divide-[#c7d6cb] border-y border-[#c7d6cb]">
          {selectedExperiences.map((experience, index) => (
            <article
              key={experience.title}
              className="sanza-experience-reveal grid gap-5 py-8 md:grid-cols-[0.3fr_0.7fr] md:gap-12"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div>
                <h3 className="font-heading text-[clamp(1.55rem,2.7vw,2.6rem)] leading-tight tracking-normal text-[#17221d]">
                  {experience.title}
                </h3>
                <p className="mt-3 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-[#6f8a7a]">
                  {suggestedPrograms}: {experience.programs.join(" / ")}
                </p>
              </div>
              <div className="max-w-[680px] text-[1.02rem] leading-[1.76] text-[#1e2a22]/86">
                {experience.copy.map((paragraph) => (
                  <p key={paragraph} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function SanzaExperiencesPage() {
  const locale = homeLocale(await getLocale());
  const copy = pageCopy[locale];
  const shared = getHomeSharedCopy(locale);
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const programsHref = getHomeDisplayPath(surface, "/programs");
  const experiences: ExperienceCopy[] = copy.experiences.map((experience, index) => ({
    ...experience,
    image: experienceImages[index],
  }));
  const heroBody = copy.heroBody;

  return (
    <HomeSiteLayout>
      <main className="site-marketing-root sanza-experiences-page">
        <section
          className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
          aria-labelledby="homeuse-experiences-heading"
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
              <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
                <p className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                  {copy.eyebrow}
                </p>
                <h1
                  id="homeuse-experiences-heading"
                  className="font-heading text-h1 text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {copy.headline}
                </h1>
                <div className="mt-6 ml-auto flex max-w-[58ch] flex-col gap-4 text-lg leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.30)]">
                  {heroBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-10 flex flex-col items-end gap-3 sm:flex-row sm:justify-end sm:gap-4">
                  <Link href={programsHref} className="btn-primary inline-flex justify-center">
                    {shared.common.viewPrograms}
                  </Link>
                  <a href={shared.shopUrl} className="btn-ghost-white inline-flex justify-center">
                    {shared.common.exploreShop}
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
              <h2 className="font-heading text-[clamp(2.25rem,5vw,5rem)] leading-[1.01] tracking-tight text-[#17221d]">
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
                  alt={copy.introAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 560px"
                />
              </div>
            </figure>
          </div>
        </section>

        <MomentFlow
          experiences={experiences}
          eyebrow={copy.momentsEyebrow}
          headline={copy.momentsHeadline}
          lead={copy.momentsLead}
          suggestedPrograms={copy.suggestedPrograms}
        />

        <SystemSection
          eyebrow={copy.techEyebrow}
          headline={copy.techHeadline}
          body={copy.techBody}
          items={copy.techItems}
        />

        <HabitSection
          experiences={experiences}
          suggestedPrograms={copy.suggestedPrograms}
          eyebrow={copy.habitEyebrow}
          headline={copy.habitHeadline}
          body={"habitBody" in copy ? copy.habitBody : undefined}
        />

        <section className="relative isolate overflow-hidden px-5 py-20 text-[#f7faf7] sm:px-8 sm:py-28 lg:px-10">
          <Image
            src={ctaImage}
            alt=""
            fill
            className="-z-20 object-cover object-center"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061a16]/95 via-[#082721]/68 to-[#082721]/38"
          />
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="font-heading text-[clamp(2.4rem,5.8vw,5.8rem)] leading-[1] tracking-tight">
              {copy.ctaHeadline}
            </h2>
            <p className="mx-auto mt-7 max-w-[720px] text-[1.1rem] leading-[1.78] text-[#eef5ef]/86 sm:text-[1.22rem]">
              {copy.ctaBody}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink href={shared.shopUrl} variant="light">
                {shared.common.viewShop}
              </CtaLink>
              <CtaLink href={programsHref} variant="light">
                {shared.common.explorePrograms}
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
    </HomeSiteLayout>
  );
}
