import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { BrandArc } from "@/components/brand-arc";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { ProgramLibraryExperience } from "@/components/home-site/program-library-experience";
import { getOriginForSurface } from "@/lib/domains";
import { homeLocale } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

type Props = { params: Promise<{ locale: string }> };

const pageCopy = {
  "en": {
    "metaTitle": "sanza Home Programs | Calm, Recovery & Sleep Rituals | Nordora Vital",
    "metaDescription": "Explore sanza home wellness programs for evening reset, deep calm, sleep preparation, post-workout recovery, morning activation and daily balance.",
    "eyebrow": "Programs",
    "headline": "Choose the state your day needs next.",
    "subheadline": [
      "After work, before sleep, after sport, or whenever your system feels overloaded, sanza gives the session a clear direction.",
      "Start with the state you want to move toward: calmer, clearer, lighter, more rested, or ready for what comes next.",
    ],
    "introEyebrow": "Why programs matter",
    "introHeadline": "Less guessing. A clearer next session.",
    "introBody": [
      "Many home wellness devices ask you to choose the setting, duration, intensity, accessory and timing before you even begin.",
      "Sanza turns that into a practical choice. Pick the moment: morning activation, focus, recovery after movement, calm after stress, or preparation for sleep. The program shapes the session around that need.",
    ],
    "introAlt": "Controller and accessories beside a mat in a calm evening home routine",
    "libraryEyebrow": "Program library",
    "libraryHeadline": "One library. Four simple ways to start.",
    "libraryBody": [
      "Programs group the same core technologies into practical body states: activation, focus, calm, recovery, sleep preparation, lightness, stability and targeted support.",
      "Vital, Alpha and Sport are for days that need more clarity, presence or movement readiness. Relax, Sleep and Anti-Stress are for slowing down, settling the body, and preparing for a quieter evening.",
      "Lymph, Bone, Acute and Soothing Support focus the session on a more specific body area or recovery moment. Manual keeps the system open for chosen settings, while Favourites lets you save the combinations that become part of your own rhythm.",
      "Use the ready-made programs first. Then adjust, repeat and save what works. The library stays simple at the start, but becomes personal with use.",
    ],
    "librarySource": "Source material describes Vital as activating, Alpha as concentration-enhancing, Relax as relaxing/regenerating, Sleep as sleep-supporting, Sport as activating/performance-oriented, Anti-Stress as muscle-relaxing, plus Manual for freely chosen parameters and Favourites for saving selected settings.",
    "libraryTechnologies": [
      "PEMF",
      "Biofrequencies",
      "Light support",
    ],
    "libraryGroups": [
      {
        "title": "Activation and focus",
        "programs": [
          "Vital",
          "Alpha",
          "Sport",
        ],
      },
      {
        "title": "Calm and recovery",
        "programs": [
          "Relax",
          "Sleep",
          "Anti-Stress",
        ],
      },
      {
        "title": "Targeted body support",
        "programs": [
          "Lymph",
          "Bone",
          "Acute",
          "Soothing Support",
        ],
      },
      {
        "title": "Personal settings",
        "programs": [
          "Manual",
          "Favourites",
        ],
      },
    ],
    "heroPrimary": "View the library",
    "heroSecondary": "Get guidance",
    "useWhen": "Use when",
    "setup": "Suggested setup",
    "programs": [
      {
        "name": "Arrival Reset",
        "useWhen": "After work, travel, errands or a noisy day.",
        "copy": "For the moment you arrive home before your system has caught up. Arrival Reset creates a clean break between the outside world and the evening, so home starts to feel like return instead of continuation.",
        "setup": "Mat or hand electrodes.",
        "alt": "A calm home at dusk prepared for an arrival reset wellness ritual",
      },
      {
        "name": "Deep Calm",
        "useWhen": "In the evening or during emotionally full days.",
        "copy": "For the moments when the room needs to slow down with you. Deep Calm gives heavy evenings a quieter structure, with less input and more space to settle.",
        "setup": "Mat, dim light, quiet room.",
        "alt": "Soft evening home wellness scene with a quiet mat ritual",
      },
      {
        "name": "Sleep Preparation",
        "useWhen": "Before bedtime.",
        "copy": "A soft final ritual before night. Use Sleep Preparation when screens are done, the room is quiet, and bedtime needs a clear beginning instead of an abrupt stop.",
        "setup": "Mat, low light, no phone.",
        "alt": "Warm bedroom-like wellness setting prepared before sleep",
      },
      {
        "name": "Post-Workout Recovery",
        "useWhen": "After gym, sport, tennis, golf, cycling, running or physical work.",
        "copy": "For the part of training that happens after the effort. Post-Workout Recovery completes the arc: movement, cooldown, reset, then a body that can come back down.",
        "setup": "Mat or targeted accessory.",
        "alt": "A refined home recovery setting after physical activity",
      },
      {
        "name": "Morning Activation",
        "useWhen": "At the start of the day.",
        "copy": "For mornings that need definition before momentum. Morning Activation helps the day begin with steadiness, not urgency.",
        "setup": "Hand electrodes or mat.",
        "alt": "Soft morning light in a refined home wellness corner",
      },
      {
        "name": "Back & Shoulder Ease",
        "useWhen": "After desk work, driving or carrying tension through the upper body.",
        "copy": "For the areas that often carry the day first. Back & Shoulder Ease gives focused attention after desk work, driving, or long hours in one position.",
        "setup": "Light applicator or mat.",
        "alt": "A targeted comfort-focused home ritual with the light applicator",
      },
      {
        "name": "Leg Lightness",
        "useWhen": "After standing, walking, travel or sport.",
        "copy": "For legs that feel heavy after movement, standing, travel or long sitting. Leg Lightness is a simple lower-body reset for evenings after being on your feet.",
        "setup": "Mat or targeted accessory.",
        "alt": "A calm lower-body reset ritual arranged around the sanza mat",
      },
      {
        "name": "Weekend Recharge",
        "useWhen": "On slower days.",
        "copy": "A longer ritual for the days with room to pause. Weekend Recharge is less about fixing one moment and more about giving restoration a proper place in the week.",
        "setup": "Full setup.",
        "alt": "A full sanza home setup prepared for a slow weekend ritual",
        "contain": true,
      },
    ],
    "choosingEyebrow": "Choosing your first program",
    "choosingHeadline": "Start with the moment you want to change first.",
    "choosingBody": "You do not need to understand every frequency, setting or accessory before beginning. Start from real life: how the day feels, where your body feels overloaded, and what state you want to move toward.",
    "startingPoints": [
      "If evenings feel heavy or your system needs time to settle, begin with Arrival Reset or Deep Calm.",
      "If bedtime feels rushed and your mind stays active too long, begin with Sleep Preparation.",
      "If your body works hard through sport, training or physical days, begin with Post-Workout Recovery.",
      "If mornings feel slow, scattered or difficult to enter, begin with Morning Activation.",
    ],
    "choosingClose": "The best first program is the one you can repeat. That is where Sanza becomes useful: a simple structure you can return to whenever your body needs support.",
    "ctaHeadline": "Not sure where to begin?",
    "ctaBody": "Tell us how your day usually feels, and we will help you choose the first programs, setup and routine that make sense at home.",
    "ctaEyebrow": "Personal guidance",
    "ctaNotes": [
      "Setup choice",
      "First programs",
      "Daily rhythm",
    ],
    "ctaActionText": "Share your routine. We will help you choose a clear first setup.",
    "ctaButton": "Ask for guidance",
    "heroAlt": "Active home wellness scene with sanza helping during a focused reset session",
    "choosingAlt": "Program selection on a premium controller in a warm home setting",
    "ctaAlt": "Warm calm home interior with wellness mat and soft lighting",
  },
  "de": {
    "metaTitle": "sanza Home-Programme | Rituale für Ruhe, Erholung und Schlaf | Nordora Vital",
    "metaDescription": "Entdecken Sie die sanza Home-Wellness-Programme für den abendlichen Reset, tiefe Ruhe, Schlafvorbereitung, Erholung nach dem Training, morgendliche Aktivierung und tägliches Gleichgewicht.",
    "eyebrow": "Programme",
    "headline": "Wählen Sie den Zustand, den Ihr Tag als Nächstes braucht.",
    "subheadline": [
      "Nach der Arbeit, vor dem Schlafengehen, nach dem Sport oder wann immer sich Ihr System überlastet anfühlt, gibt sanza der Sitzung eine klare Richtung.",
      "Beginnen Sie mit dem Zustand, den Sie anstreben: ruhiger, klarer, leichter, ausgeruhter oder bereit für das, was als Nächstes kommt.",
    ],
    "introEyebrow": "Warum Programme wichtig sind",
    "introHeadline": "Weniger Rätselraten. Eine klarere nächste Sitzung.",
    "introBody": [
      "Bei vielen Wellnessgeräten für zu Hause musst du Einstellung, Dauer, Intensität, Zubehör und Zeitpunkt auswählen, bevor du überhaupt anfängst.",
      "Sanza macht daraus eine praktische Entscheidung. Wähle den Moment: morgendliche Aktivierung, Konzentration, Erholung nach Bewegung, Ruhe nach Stress oder Vorbereitung auf den Schlaf. Das Programm gestaltet die Sitzung entsprechend diesem Bedarf.",
    ],
    "introAlt": "Controller und Zubehör neben einer Matte bei einer entspannten Abendroutine zu Hause",
    "libraryEyebrow": "Programmbibliothek",
    "libraryHeadline": "Eine Bibliothek. Vier einfache Einstiegsmöglichkeiten.",
    "libraryBody": [
      "Die Programme fassen die gleichen Kerntechnologien zu praktischen Körperzuständen zusammen: Aktivierung, Konzentration, Ruhe, Erholung, Schlafvorbereitung, Leichtigkeit, Stabilität und gezielte Unterstützung.",
      "Vital, Alpha und Sport sind für Tage gedacht, an denen mehr Klarheit, Präsenz oder Bewegungsbereitschaft gefragt sind. Relax, Sleep und Anti-Stress dienen dazu, das Tempo zu drosseln, den Körper zur Ruhe zu bringen und sich auf einen ruhigeren Abend vorzubereiten.",
      "Lymph, Bone, Acute und Soothing Support konzentrieren die Sitzung auf einen spezifischeren Körperbereich oder einen Erholungsmoment. Manual hält das System offen für eigene Einstellungen, während du mit Favorites die Kombinationen speichern kannst, die Teil deines eigenen Rhythmus werden.",
      "Nutzen Sie zunächst die vorgefertigten Programme. Passen Sie dann an, wiederholen Sie und speichern Sie, was funktioniert. Die Bibliothek bleibt zu Beginn einfach, wird aber mit der Nutzung persönlicher.",
    ],
    "librarySource": "Das Quellenmaterial beschreibt Vital als aktivierend, Alpha als konzentrationsfördernd, Relax als entspannend/regenerierend, Sleep als schlaffördernd, Sport als aktivierend/leistungsorientiert, Anti-Stress als muskelentspannend sowie Manual für frei wählbare Parameter und Favoriten zum Speichern ausgewählter Einstellungen.",
    "libraryTechnologies": [
      "PEMF",
      "Biofrequenzen",
      "Lichtunterstützung",
    ],
    "libraryGroups": [
      {
        "title": "Aktivierung und Fokus",
        "programs": [
          "Vital",
          "Alpha",
          "Sport",
        ],
      },
      {
        "title": "Ruhe und Erholung",
        "programs": [
          "Relax",
          "Schlaf",
          "Anti-Stress",
        ],
      },
      {
        "title": "Gezielte Körperunterstützung",
        "programs": [
          "Lymphe",
          "Knochen",
          "Akut",
          "Beruhigende Unterstützung",
        ],
      },
      {
        "title": "Persönliche Einstellungen",
        "programs": [
          "Manuell",
          "Favoriten",
        ],
      },
    ],
    "heroPrimary": "Bibliothek anzeigen",
    "heroSecondary": "Anleitung erhalten",
    "useWhen": "Anwendungszeitpunkt",
    "setup": "Empfohlene Einstellung",
    "programs": [
      {
        "name": "Ankunfts-Reset",
        "useWhen": "Nach der Arbeit, einer Reise, Besorgungen oder einem lauten Tag.",
        "copy": "Für den Moment, in dem du nach Hause kommst, bevor dein System wieder auf dem Laufenden ist. Ankunfts-Reset schafft eine klare Trennung zwischen der Außenwelt und dem Abend, sodass sich das Zuhause wie eine Rückkehr anfühlt statt wie eine Fortsetzung.",
        "setup": "Matte oder Handelektroden.",
        "alt": "Ein ruhiges Zuhause in der Abenddämmerung, vorbereitet für ein Ankunfts-Reset-Wellnessritual",
      },
      {
        "name": "Tiefe Ruhe",
        "useWhen": "Am Abend oder an emotional intensiven Tagen.",
        "copy": "Für die Momente, in denen der Raum mit Ihnen zur Ruhe kommen muss. Deep Calm verleiht anstrengenden Abenden eine ruhigere Struktur, mit weniger Reizen und mehr Raum zum Abschalten.",
        "setup": "Matte, gedämpftes Licht, ruhiger Raum.",
        "alt": "Sanfte Abend-Wellness-Szene zu Hause mit einem ruhigen Mattenritual",
      },
      {
        "name": "Sleep Preparation",
        "useWhen": "Vor dem Schlafengehen.",
        "copy": "Ein sanftes Abschlussritual vor der Nacht. Verwenden Sie Sleep Preparation, wenn die Bildschirme ausgeschaltet sind, der Raum ruhig ist und die Schlafenszeit einen klaren Anfang statt eines abrupten Endes braucht.",
        "setup": "Matte, gedämpftes Licht, kein Handy.",
        "alt": "Warme, schlafzimmerähnliche Wellness-Umgebung, vorbereitet vor dem Schlafengehen",
      },
      {
        "name": "Erholung nach dem Training",
        "useWhen": "Nach dem Fitnessstudio, Sport, Tennis, Golf, Radfahren, Laufen oder körperlicher Arbeit.",
        "copy": "Für den Teil des Trainings, der nach der Anstrengung stattfindet. „Erholung nach dem Training“ schließt den Kreis: Bewegung, Abkühlung, Zurücksetzen, dann ein Körper, der zur Ruhe kommen kann.",
        "setup": "Matte oder gezieltes Zubehör.",
        "alt": "Eine raffinierte Umgebung für die Erholung zu Hause nach körperlicher Aktivität",
      },
      {
        "name": "Morgenaktivierung",
        "useWhen": "Zu Beginn des Tages.",
        "copy": "Für Morgen, die Klarheit brauchen, bevor Schwung entsteht. Die Morgenaktivierung hilft, den Tag mit Gelassenheit statt mit Eile zu beginnen.",
        "setup": "Handelektroden oder Matte.",
        "alt": "Sanftes Morgenlicht in einer raffinierten Wellness-Ecke zu Hause",
      },
      {
        "name": "Entspannung für Rücken und Schultern",
        "useWhen": "Nach der Arbeit am Schreibtisch, dem Autofahren oder Anspannungen im Oberkörper.",
        "copy": "Für die Bereiche, die oft als Erste den Tag tragen. „Back & Shoulder Ease“ schenkt gezielte Aufmerksamkeit nach der Arbeit am Schreibtisch, dem Autofahren oder langen Stunden in einer Position.",
        "setup": "Lichtapplikator oder Matte.",
        "alt": "Ein gezieltes, auf Komfort ausgerichtetes Ritual für zu Hause mit dem Lichtapplikator",
      },
      {
        "name": "Leg Lightness",
        "useWhen": "Nach dem Stehen, Gehen, Reisen oder Sport.",
        "copy": "Für Beine, die sich nach Bewegung, Stehen, Reisen oder langem Sitzen schwer anfühlen. „Leg Lightness“ ist ein einfacher Reset für den Unterkörper am Abend, nachdem man auf den Beinen war.",
        "setup": "Matte oder gezieltes Zubehör.",
        "alt": "Ein ruhiges Reset-Ritual für den Unterkörper rund um die Sanza-Matte",
      },
      {
        "name": "Weekend Recharge",
        "useWhen": "An ruhigeren Tagen.",
        "copy": "Ein längeres Ritual für Tage, an denen Raum zum Innehalten ist. Bei „Weekend Recharge“ geht es weniger darum, einen bestimmten Moment zu korrigieren, sondern vielmehr darum, der Erholung einen festen Platz in der Woche einzuräumen.",
        "setup": "Komplette Ausstattung.",
        "alt": "Eine vollständige Sanza-Heimausstattung, vorbereitet für ein entspanntes Wochenendritual",
        "contain": true,
      },
    ],
    "choosingEyebrow": "Die Wahl deines ersten Programms",
    "choosingHeadline": "Beginne mit dem Moment, den du als Erstes verändern möchtest.",
    "choosingBody": "Sie müssen nicht jede Frequenz, Einstellung oder jedes Zubehör verstehen, bevor Sie beginnen. Gehen Sie vom Alltag aus: Wie fühlt sich der Tag an, wo fühlt sich Ihr Körper überlastet an und in welchen Zustand möchten Sie gelangen?",
    "startingPoints": [
      "Wenn sich die Abende schwer anfühlen oder Ihr System Zeit braucht, um zur Ruhe zu kommen, beginnen Sie mit „Arrival Reset“ oder „Deep Calm“.",
      "Wenn die Schlafenszeit gehetzt wirkt und Ihr Geist zu lange aktiv bleibt, beginnen Sie mit „Sleep Preparation“.",
      "Wenn dein Körper durch Sport, Training oder körperliche Anstrengung stark beansprucht ist, beginne mit „Post-Workout Recovery“.",
      "Wenn sich der Morgen langsam, unkonzentriert oder schwer in Gang kommend anfühlt, beginne mit „Morning Activation“.",
    ],
    "choosingClose": "Das beste erste Programm ist das, das man wiederholen kann. Hier kommt Sanza ins Spiel: eine einfache Struktur, auf die du zurückgreifen kannst, wann immer dein Körper Unterstützung braucht.",
    "ctaHeadline": "Du weißt nicht, wo du anfangen sollst?",
    "ctaBody": "Erzähl uns, wie sich dein Tag normalerweise anfühlt, und wir helfen dir dabei, die ersten Programme, die Einrichtung und die Routine auszuwählen, die zu dir nach Hause passen.",
    "ctaEyebrow": "Persönliche Beratung",
    "ctaNotes": [
      "Einrichtungsauswahl",
      "Erste Programme",
      "Täglicher Rhythmus",
    ],
    "ctaActionText": "Teile deine Routine mit uns. Wir helfen dir dabei, eine klare erste Einrichtung auszuwählen.",
    "ctaButton": "Lass dich beraten",
    "heroAlt": "Aktive Wellness-Szene zu Hause mit sanza, das bei einer konzentrierten Erholungssitzung hilft",
    "choosingAlt": "Programmauswahl auf einem Premium-Controller in einer gemütlichen Wohnumgebung",
    "ctaAlt": "Gemütliches, ruhiges Wohnambiente mit Wellness-Matte und sanfter Beleuchtung",
  },
  "lv": {
    "metaTitle": "sanza mājas programmas | Miers, atjaunošanās un miega rituāli | Nordora Vital",
    "metaDescription": "Iepazīstieties ar sanza mājas labsajūtas programmām vakara atpūtai, dziļam mieram, miega sagatavošanai, atjaunošanai pēc treniņa, rīta aktivizēšanai un ikdienas līdzsvaram.",
    "eyebrow": "Programmas",
    "headline": "Izvēlieties stāvokli, kāds jūsu dienai ir nepieciešams nākamajā brīdī.",
    "subheadline": [
      "Pēc darba, pirms miega, pēc sporta vai kad vien jūsu organisms jūtas pārslodzēts, sanza dod sesijai skaidru virzienu.",
      "Sāciet ar stāvokli, uz kuru vēlaties virzīties: mierīgāku, skaidrāku, vieglāku, atpūtušāku vai gatavu tam, kas nāk tālāk.",
    ],
    "introEyebrow": "Kāpēc programmas ir svarīgas",
    "introHeadline": "Mazāk minējumu. Skaidrāka nākamā sesija.",
    "introBody": [
      "Daudzas mājas labsajūtas ierīces prasa izvēlēties iestatījumus, ilgumu, intensitāti, piederumus un laiku, pirms pat sākat.",
      "Sanza pārvērš to praktiskā izvēlē. Izvēlieties brīdi: rīta aktivizēšanās, koncentrēšanās, atgūšanās pēc kustībām, miers pēc stresa vai sagatavošanās miegam. Programma veido sesiju atbilstoši šai vajadzībai.",
    ],
    "introAlt": "Kontrolieris un piederumi blakus paklājam mierīgā vakara mājas rutīnā",
    "libraryEyebrow": "Programmu bibliotēka",
    "libraryHeadline": "Viena bibliotēka. Četri vienkārši veidi, kā sākt.",
    "libraryBody": [
      "Programmas apvieno vienādas pamattehnoloģijas praktiskos ķermeņa stāvokļos: aktivizācija, koncentrēšanās, miers, atgūšanās, sagatavošanās miegam, vieglums, stabilitāte un mērķtiecīgs atbalsts.",
      "Vital, Alpha un Sport ir paredzētas dienām, kad nepieciešama lielāka skaidrība, klātbūtne vai gatavība kustībām. Relax, Sleep un Anti-Stress ir paredzētas, lai palēninātu tempu, nomierinātu ķermeni un sagatavotos klusākai vakara daļai.",
      "Lymph, Bone, Acute un Soothing Support koncentrē sesiju uz konkrētāku ķermeņa zonu vai atveseļošanās brīdi. Manual saglabā sistēmu atvērtu izvēlētajiem iestatījumiem, savukārt Favourites ļauj saglabāt kombinācijas, kas kļūst par daļu no jūsu paša ritma.",
      "Vispirms izmantojiet gatavās programmas. Pēc tam pielāgojiet, atkārtojiet un saglabājiet to, kas darbojas. Sākumā bibliotēka ir vienkārša, bet, lietojot to, tā kļūst personiska.",
    ],
    "librarySource": "Avota materiāls apraksta Vital kā aktivizējošu, Alpha kā koncentrāciju veicinošu, Relax kā relaksējošu/reģenerējošu, Sleep kā miegu veicinošu, Sport kā aktivizējošu/uz sniegumu orientētu, Anti-Stress kā muskuļus atslābinošu, kā arī Manual brīvi izvēlētiem parametriem un Favourites izvēlēto iestatījumu saglabāšanai.",
    "libraryTechnologies": [
      "PEMF",
      "Biofrekvences",
      "Gaismas atbalsts",
    ],
    "libraryGroups": [
      {
        "title": "Aktivizēšana un koncentrēšanās",
        "programs": [
          "Vital",
          "Alpha",
          "Sport",
        ],
      },
      {
        "title": "Miers un atjaunošanās",
        "programs": [
          "Relax",
          "Sleep",
          "Anti-Stress",
        ],
      },
      {
        "title": "Mērķtiecīgs ķermeņa atbalsts",
        "programs": [
          "Limfa",
          "Kauli",
          "Akūts",
          "Nomierinošs atbalsts",
        ],
      },
      {
        "title": "Personīgie iestatījumi",
        "programs": [
          "Manual",
          "Izlase",
        ],
      },
    ],
    "heroPrimary": "Apskatīt bibliotēku",
    "heroSecondary": "Saņemt norādījumus",
    "useWhen": "Kad lietot",
    "setup": "Ieteicamā konfigurācija",
    "programs": [
      {
        "name": "Atgriešanās atjaunošana",
        "useWhen": "Pēc darba, ceļojuma, darīšanām vai trokšņainas dienas.",
        "copy": "Brīdim, kad ierodaties mājās, pirms jūsu organisms ir paspējis atgūties. Ierašanās atjaunošana rada skaidru pārtraukumu starp ārpasauli un vakaru, tāpēc mājas sāk justies kā atgriešanās, nevis turpinājums.",
        "setup": "Paklājs vai rokas elektrodas.",
        "alt": "Mierīga māja krēslas stundā, sagatavota ierašanās atjaunošanas labsajūtas rituālam",
      },
      {
        "name": "Dziļais miers",
        "useWhen": "Vakarā vai emocionāli piesātinātās dienās.",
        "copy": "Brīžiem, kad telpai ir jāpalēninās kopā ar jums. Deep Calm piešķir smagām vakara stundām klusāku struktūru, ar mazāku informācijas plūsmu un vairāk telpas, lai atslābtu.",
        "setup": "Paklājs, vājš apgaismojums, klusa telpa.",
        "alt": "Maiga vakara mājas labsajūtas aina ar klusu paklāja rituālu",
      },
      {
        "name": "Sleep Preparation",
        "useWhen": "Pirms gulētiešanas.",
        "copy": "Maigs noslēguma rituāls pirms nakts. Izmantojiet Sleep Preparation, kad ekrāni ir izslēgti, telpa ir klusa un gulētiešanai nepieciešams skaidrs sākums, nevis pēkšņs pārtraukums.",
        "setup": "Paklājs, vāja gaisma, bez tālruņa.",
        "alt": "Siltā, guļamistabai līdzīgā labsajūtas vide, kas sagatavota pirms miega",
      },
      {
        "name": "Atgūšanās pēc treniņa",
        "useWhen": "Pēc sporta zāles, sporta, tenisa, golfa, riteņbraukšanas, skriešanas vai fiziska darba.",
        "copy": "Treniņa daļai, kas notiek pēc piepūles. „Atgūšanās pēc treniņa” noslēdz ciklu: kustība, atdzišana, atjaunošanās, tad ķermenis, kas var atgriezties normālā stāvoklī.",
        "setup": "Paklājs vai mērķtiecīgs piederums.",
        "alt": "Izsmalcināta atveseļošanās vide mājās pēc fiziskās aktivitātes",
      },
      {
        "name": "Rīta aktivizēšana",
        "useWhen": "Dienas sākumā.",
        "copy": "Rītiem, kuriem nepieciešama skaidrība pirms enerģijas uzkrāšanas. Rīta aktivizēšana palīdz dienai sākties ar stabilitāti, nevis steigu.",
        "setup": "Roku elektrodus vai paklāju.",
        "alt": "Maiga rīta gaisma izsmalcinātā mājas labsajūtas stūrītī",
      },
      {
        "name": "Muguras un plecu atvieglojums",
        "useWhen": "Pēc darba pie galda, braukšanas ar auto vai spriedzes uzkrāšanās augšējā ķermeņa daļā.",
        "copy": "Tām zonām, kas bieži vien pirmās izjūt dienas nogurumu. Muguras un plecu atvieglojums sniedz mērķtiecīgu uzmanību pēc darba pie galda, braukšanas vai ilgstošas atrašanās vienā pozā.",
        "setup": "Vieglais aplikators vai paklājs.",
        "alt": "Mērķtiecīgs, uz komfortu vērsts mājas rituāls ar vieglo aplikatoru",
      },
      {
        "name": "Kāju vieglums",
        "useWhen": "Pēc stāvēšanas, iešanas, ceļošanas vai sporta.",
        "copy": "Kājām, kas jūtas smagas pēc kustības, stāvēšanas, ceļošanas vai ilgstošas sēdēšanas. Kāju vieglums ir vienkārša apakšējās ķermeņa daļas atjaunošana vakaros pēc ilgstošas stāvēšanas.",
        "setup": "Paklājs vai mērķtiecīgs piederums.",
        "alt": "Rāms apakšējās ķermeņa daļas atjaunošanas rituāls, kas veidots ap sanza paklāju",
      },
      {
        "name": "Weekend Recharge",
        "useWhen": "Lēnākās dienās.",
        "copy": "Garāks rituāls dienām, kad ir laiks apstāties. Weekend Recharge ir ne tik daudz par viena brīža labošanu, cik par to, lai atjaunošanai atvēlētu pienācīgu vietu nedēļā.",
        "setup": "Pilna komplektācija.",
        "alt": "Pilna sanza mājas komplektācija, kas sagatavota lēnam nedēļas nogales rituālam",
        "contain": true,
      },
    ],
    "choosingEyebrow": "Pirmās programmas izvēle",
    "choosingHeadline": "Sāciet ar brīdi, kuru vēlaties mainīt vispirms.",
    "choosingBody": "Pirms sākt, nav nepieciešams izprast katru frekvenci, iestatījumu vai piederumu. Sāciet no reālās dzīves: kā jūtas diena, kur ķermenis jūtas pārslodzēts un uz kādu stāvokli vēlaties virzīties.",
    "startingPoints": [
      "Ja vakari jūtas smagi vai organismam nepieciešams laiks, lai atgūtos, sāciet ar „Ierašanās atjaunošanu” vai „Dziļo mieru”.",
      "Ja pirms gulētiešanas jūtas steiga un prāts paliek aktīvs pārāk ilgi, sāciet ar „Sagatavošanos miegam”.",
      "Ja jūsu ķermenis smagi strādā sportojot, trenējoties vai fiziski aktīvās dienās, sāciet ar Post-Workout Recovery.",
      "Ja rīti šķiet lēni, izkliedēti vai grūti sākt, sāciet ar Morning Activation.",
    ],
    "choosingClose": "Labākā pirmā programma ir tā, kuru var atkārtot. Tieši šeit noder Sanza: vienkārša struktūra, pie kuras varat atgriezties, kad vien jūsu ķermenim nepieciešams atbalsts.",
    "ctaHeadline": "Nezināt, ar ko sākt?",
    "ctaBody": "Pastāstiet mums, kā parasti jūtas jūsu diena, un mēs palīdzēsim izvēlēties pirmās programmas, iestatījumus un rutīnu, kas ir piemērota lietošanai mājās.",
    "ctaEyebrow": "Personīga konsultācija",
    "ctaNotes": [
      "Iestatījumu izvēle",
      "Pirmās programmas",
      "Ikdienas ritms",
    ],
    "ctaActionText": "Dalieties ar savu rutīnu. Mēs palīdzēsim izvēlēties skaidru sākotnējo konfigurāciju.",
    "ctaButton": "Lūdziet padomu",
    "heroAlt": "Aktīva mājas labsajūtas aina ar sanza palīdzību koncentrētas atjaunošanās sesijas laikā",
    "choosingAlt": "Programmu izvēle uz premium kontrolieri siltā mājas vidē",
    "ctaAlt": "Siltā, mierīgā mājas interjera ar labsajūtas paklāju un maigu apgaismojumu",
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
      canonical: "/programs",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${getOriginForSurface("home")}/programs`,
      siteName: "Nordora Vital Home",
      type: "website",
    },
  };
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
        light ? "text-white/72" : "text-[#6f8a7a]"
      }`}
    >
      {children}
    </p>
  );
}

export default async function ProgramsPage({ params }: Props) {
  const { locale: routeLocale } = await params;
  const locale = homeLocale(routeLocale);
  const copy = pageCopy[locale];

  return (
    <HomeSiteLayout locale={locale}>
      <main className="site-marketing-root">
        <section
          className="home-hero--programs relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
          aria-labelledby="homeuse-programs-heading"
        >
          <div className="relative min-h-[min(92dvh,880px)] lg:min-h-[min(88dvh,800px)]">
            <div className="absolute inset-0">
              <Image
                src={IMAGE_PATHS.home.programsHero}
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
                <p className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                  {copy.eyebrow}
                </p>
                <h1
                  id="homeuse-programs-heading"
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
                  <a href="#program-library" className="btn-primary inline-flex justify-center">
                    {copy.heroPrimary}
                  </a>
                  <ContactDrawerTrigger
                    className="btn-ghost-white inline-flex justify-center"
                    options={{ drawerType: "homePersonal" }}
                  >
                    {copy.heroSecondary}
                  </ContactDrawerTrigger>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <Eyebrow>{copy.introEyebrow}</Eyebrow>
              <h2 className="font-heading text-[clamp(2.35rem,5vw,5rem)] leading-[1.01] tracking-tight text-[#17221d]">
                {copy.introHeadline}
              </h2>
              <div className="mt-7 flex max-w-[650px] flex-col gap-5 text-[1.07rem] leading-[1.78] text-[#1e2a22]/90 sm:text-[1.18rem]">
                {copy.introBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-[8px] shadow-[0_28px_90px_rgba(30,42,34,0.10)] sm:min-h-[420px]">
              <Image
                src={IMAGE_PATHS.home.programsWhyMatter}
                alt={copy.introAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 520px"
              />
            </div>
          </div>
        </section>

        <section
          id="program-library"
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] scroll-mt-28 overflow-hidden bg-[#092d27] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_44%_52%_at_10%_0%,rgba(165,133,146,0.2),transparent_68%),radial-gradient(ellipse_54%_60%_at_92%_18%,rgba(111,138,122,0.18),transparent_66%)]"
          />
          <div className="relative mx-auto max-w-[1180px]">
            <ProgramLibraryExperience
              eyebrow={copy.libraryEyebrow}
              headline={copy.libraryHeadline}
              body={copy.libraryBody}
              technologies={copy.libraryTechnologies}
              groups={copy.libraryGroups}
              images={{
                mat: IMAGE_PATHS.home.productMat,
                handElectrode: IMAGE_PATHS.home.productHandElectrode,
                targetedBodySupport: IMAGE_PATHS.home.targetedBodySupport,
                personalSettings: IMAGE_PATHS.home.personalSettings,
                lifestyle: IMAGE_PATHS.home.ritualPostActivityRecovery,
              }}
            />
          </div>
        </section>

        <section className="bg-[#0e3d34] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-center">
            <div>
              <Eyebrow light>{copy.choosingEyebrow}</Eyebrow>
              <h2 className="max-w-[720px] font-heading text-[clamp(2.2rem,5vw,4.9rem)] leading-[1.01] tracking-tight">
                {copy.choosingHeadline}
              </h2>
              <div className="mt-7 flex max-w-[650px] flex-col gap-5 text-[1.05rem] leading-[1.76] text-white/82 sm:text-[1.16rem]">
                <p>{copy.choosingBody}</p>
              </div>
            </div>
            <div className="grid gap-3">
              {copy.startingPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[8px] border border-[#efe9e2]/18 bg-[#f6f1ea]/8 px-5 py-5 text-[1rem] font-semibold leading-7 text-white"
                >
                  {point}
                </div>
              ))}
              <p className="rounded-[8px] border border-[#efe9e2]/18 bg-[#f6f1ea] px-5 py-5 text-[1rem] font-semibold leading-7 text-[#0e3d34]">
                {copy.choosingClose}
              </p>
              <ContactDrawerTrigger
                className="btn-secondary mt-3 inline-flex justify-center"
                options={{ drawerType: "homePersonal" }}
              >
                {copy.heroSecondary}
              </ContactDrawerTrigger>
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
