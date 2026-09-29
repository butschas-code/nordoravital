"use client";

import { useState } from "react";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";

type Locale = "en" | "de" | "lv" | "ru";

interface HomeSessionSimulatorProps {
  locale: string;
}

interface RitualConfig {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  recommendedDuration: number;
  frequencies: string;
  description: string;
  sensation: string;
  applicators: {
    mat: { active: boolean; note: string };
    electrodes: { active: boolean; note: string };
    laser: { active: boolean; note: string };
  };
  outcomes: string[];
}

const SIMULATOR_DATA: Record<Locale, {
  eyebrow: string;
  title: string;
  subtitle: string;
  goalLabel: string;
  applicatorsLabel: string;
  durationLabel: string;
  frequencyLabel: string;
  sensationLabel: string;
  outcomesLabel: string;
  bookWalkthrough: string;
  askQuestion: string;
  matName: string;
  electrodesName: string;
  laserName: string;
  rituals: RitualConfig[];
}> = {
  en: {
    eyebrow: "Interactive Session Simulator",
    title: "Experience how a sanza home session works",
    subtitle: "Select your daily objective to explore the sequence, active applicators, and chronobiological frequency programs.",
    goalLabel: "Choose your focus",
    applicatorsLabel: "Active applicators in this ritual",
    durationLabel: "Session duration",
    frequencyLabel: "Frequency spectrum",
    sensationLabel: "What you feel",
    outcomesLabel: "How it supports you",
    bookWalkthrough: "Book a personal introduction",
    askQuestion: "Ask a question",
    matName: "Full-Body Mat",
    electrodesName: "Biofrequency Electrodes",
    laserName: "Targeted Light / Laser",
    rituals: [
      {
        id: "recovery",
        name: "Post-Workout Recovery",
        subtitle: "For muscles, joints, and physical fatigue after exercise or movement",
        badge: "Athletic & Movement",
        recommendedDuration: 16,
        frequencies: "1.5 Hz – 28 Hz (Pulsed EMF + Microcurrent)",
        description: "Sequenced to support muscle recovery, cellular recharge, and down-regulation following training, cycling, running, or physically demanding work.",
        sensation: "Gentle warmth along the spine and thighs, gradual release of muscle guarding, settling into deep physical stillness.",
        applicators: {
          mat: { active: true, note: "Full-body induction supporting overall circulation and recovery" },
          electrodes: { active: false, note: "Optional: held for focused biofrequency reset" },
          laser: { active: true, note: "Placed on localized muscle groups, knee joints, or tendons" },
        },
        outcomes: [
          "Eases post-effort stiffness and tight muscular guarding",
          "Accelerates transition into parasympathetic regeneration",
          "Helps legs and back feel lighter for the next day's training",
        ],
      },
      {
        id: "sleep",
        name: "Deep Rest & Sleep Preparation",
        subtitle: "For evening wind-down, quieting the racing mind, and circadian settling",
        badge: "Evening Wind-Down",
        recommendedDuration: 24,
        frequencies: "0.5 Hz – 4 Hz (Delta-dominant entrainment)",
        description: "Chronobiological calming frequencies calibrated for the evening hours, signaling to the nervous system that daytime vigilance is complete.",
        sensation: "Deep rhythmic grounding, softening of the breath, pleasant heaviness in limbs, mental chatter quieting.",
        applicators: {
          mat: { active: true, note: "Primary full-body relaxation surface before transitioning into bed" },
          electrodes: { active: true, note: "Held gently in relaxed hands to ground autonomic nervous tension" },
          laser: { active: false, note: "Usually not active during sedative evening rituals" },
        },
        outcomes: [
          "Smoother, unhurried transition from active day into deep restorative sleep",
          "Quiets late-night mental hyper-vigilance without pharmaceuticals",
          "Waking up feeling genuinely recharged rather than groggy",
        ],
      },
      {
        id: "stress-reset",
        name: "Daily Stress & Screen Reset",
        subtitle: "For long desk hours, cognitive overload, and desk-bound posture tension",
        badge: "Mental Decompression",
        recommendedDuration: 12,
        frequencies: "7.83 Hz – 14 Hz (Schumann resonance & Alpha band)",
        description: "A compact 12-minute reset designed for the transition between office/screen work and private home life, clearing sympathetic tension.",
        sensation: "Unclenching of neck and jaw muscles, deeper diaphragmatic breathing, clear mental pause.",
        applicators: {
          mat: { active: true, note: "Full spine decompression and postural reset" },
          electrodes: { active: true, note: "Microcurrent balance for mental clarity and sensory recalibration" },
          laser: { active: true, note: "Applied to cervical neck or upper shoulder trigger points" },
        },
        outcomes: [
          "Reverses the braced posture of long desk and screen hours",
          "Creates a clean separation between high-pressure workday and relaxed evening",
          "Restores cognitive clarity and emotional equilibrium",
        ],
      },
    ],
  },
  de: {
    eyebrow: "Interaktiver Session-Simulator",
    title: "Erleben Sie, wie eine sanza-Sitzung zu Hause abläuft",
    subtitle: "Wählen Sie Ihr tägliches Ziel, um Ablauf, aktive Applikatoren und chronobiologische Frequenzprogramme zu erkunden.",
    goalLabel: "Wählen Sie Ihren Schwerpunkt",
    applicatorsLabel: "Aktive Applikatoren in diesem Ritual",
    durationLabel: "Dauer der Einheit",
    frequencyLabel: "Frequenzspektrum",
    sensationLabel: "Was Sie spüren",
    outcomesLabel: "Wie es Sie unterstützt",
    bookWalkthrough: "Persönliche Einführung buchen",
    askQuestion: "Eine Frage stellen",
    matName: "Ganzkörpermatte",
    electrodesName: "Biofrequenz-Handelektroden",
    laserName: "Gezieltes Licht / Laser",
    rituals: [
      {
        id: "recovery",
        name: "Erholung nach dem Sport",
        subtitle: "Für Muskeln, Gelenke und körperliche Ermüdung nach Bewegung und Belastung",
        badge: "Sport & Bewegung",
        recommendedDuration: 16,
        frequencies: "1,5 Hz – 28 Hz (Pulsierende Magnetfelder + Mikrostrom)",
        description: "Choreografiert zur Förderung der Muskelregeneration, zellulären Aufladung und Beruhigung nach Ausdauer, Kraftsport oder fordernden Arbeitstagen.",
        sensation: "Wohltuende Wärme entlang der Wirbelsäule und Oberschenkel, spürbares Lösen von Muskelanspannung, tiefe körperliche Ruhe.",
        applicators: {
          mat: { active: true, note: "Ganzkörper-Induktion zur Förderung der Durchblutung und Erholung" },
          electrodes: { active: false, note: "Optional: in Händen gehalten für gezielten Biofrequenz-Reset" },
          laser: { active: true, note: "Auf beanspruchte Muskelpartien, Sehnen oder Kniegelenke gerichtet" },
        },
        outcomes: [
          "Lindert Steifheit nach dem Training und muskuläre Schonhaltung",
          "Beschleunigt den Übergang in die parasympathische Regeneration",
          "Sorgt für leichtere Beine und spürbare Frische für die nächste Einheit",
        ],
      },
      {
        id: "sleep",
        name: "Tiefenruhe & Schlafvorbereitung",
        subtitle: "Für das abendliche Herunterfahren, Gedankenruhe und zirkadiane Ausrichtung",
        badge: "Abendritual",
        recommendedDuration: 24,
        frequencies: "0,5 Hz – 4 Hz (Delta-orientierte Entspannung)",
        description: "Chronobiologische Beruhigungsfrequenzen für die Abendstunden, die dem Nervensystem signalisieren, die Wachsamkeit des Tages sanft loszulassen.",
        sensation: "Tiefes rhythmisches Geerdetsein, sanfteres Ein- und Ausatmen, angenehme Schwere in Armen und Beinen, nachlassender Gedankenstrom.",
        applicators: {
          mat: { active: true, note: "Zentrale Liegefläche für die Ganzkörper-Entspannung vor dem Schlafen" },
          electrodes: { active: true, note: "In den Händen gehalten zur Beruhigung autonomer Nervenanspannung" },
          laser: { active: false, note: "In beruhigenden Abendritualen in der Regel nicht aktiviert" },
        },
        outcomes: [
          "Reibungsloser Übergang von einem anstrengenden Tag in erholsamen Nachtschlaf",
          "Beruhigt nächtliche Reizüberflutung ganz ohne medikamentöse Hilfsmittel",
          "Aufwachen mit frischer Energie statt bleierner Trägheit",
        ],
      },
      {
        id: "stress-reset",
        name: "Täglicher Stress- & Bildschirm-Reset",
        subtitle: "Für lange Schreibtischstunden, mentale Überreizung und Verspannungen",
        badge: "Mentale Dekompression",
        recommendedDuration: 12,
        frequencies: "7,83 Hz – 14 Hz (Schumann-Resonanz & Alphawellen)",
        description: "Ein 12-minütiger Zwischenstopp zwischen Bildschirmarbeit und privater Lebenszeit, um sympathische Anspannung rasch abzubauen.",
        sensation: "Spürbares Entspannen von Nacken und Kiefer, vertiefte Bauchatmung, ein Moment echter Klarheit.",
        applicators: {
          mat: { active: true, note: "Ganzkörperliche Entlastung der Wirbelsäule und Haltungskorrektur" },
          electrodes: { active: true, note: "Mikrostrom-Impulse zur sensorischen Entlastung und mentalen Frische" },
          laser: { active: true, note: "Gezielt auf Nacken- und Schulterpunkte aufgelegt" },
        },
        outcomes: [
          "Gleicht die gebeugte Haltung langer Schreibtisch- und Telefonstunden aus",
          "Schafft eine spürbare Grenze zwischen geschäftlicher Hektik und entspanntem Feierabend",
          "Bringt geistige Klarheit und emotionale Gelassenheit zurück",
        ],
      },
    ],
  },
  lv: {
    eyebrow: "Interaktīvais seansa simulators",
    title: "Izbaudiet, kā norit „sanza“ mājas labsajūtas seanss",
    subtitle: "Izvēlieties savu dienas mērķi, lai izpētītu seansa gaitu, aktīvos aplikatorus un hronobioloģiskās frekvences.",
    goalLabel: "Izvēlieties savu fokusu",
    applicatorsLabel: "Šajā rituālā aktīvie aplikatori",
    durationLabel: "Seansa ilgums",
    frequencyLabel: "Frekvenču spektrs",
    sensationLabel: "Kādas ir sajūtas",
    outcomesLabel: "Kā tas jums palīdz",
    bookWalkthrough: "Pieteikt personīgu ievadu",
    askQuestion: "Uzdot jautājumu",
    matName: "Visa ķermeņa paklājs",
    electrodesName: "Biofrekvenču rokas elektrodi",
    laserName: "Mērķtiecīgā gaisma / lāzers",
    rituals: [
      {
        id: "recovery",
        name: "Atgūšanās pēc aktivitātes",
        subtitle: "Muskuļiem, locītavām un fiziskam nogurumam pēc treniņa vai kustības",
        badge: "Sports un kustība",
        recommendedDuration: 16,
        frequencies: "1,5 Hz – 28 Hz (Impulsu EMF + mikrostrāvas)",
        description: "Pielāgots muskuļu reģenerācijai, šūnu enerģijas atjaunošanai un nomierināšanai pēc treniņa, skriešanas vai smagas darba dienas.",
        sensation: "Patīkams siltums mugurkaula un kāju zonā, muskuļu sasprindzinājuma atlaišana, dziļš fizisks miers.",
        applicators: {
          mat: { active: true, note: "Visa ķermeņa iedarbība vispārējai asinsritei un atjaunošanai" },
          electrodes: { active: false, note: "Pēc izvēles: turēti rokās mērķtiecīgam biofrekvences resetam" },
          laser: { active: true, note: "Novietots uz noslogotām muskuļu grupām vai ceļa locītavām" },
        },
        outcomes: [
          "Mazina stīvumu un muskuļu pretestību pēc fiziskas piepūles",
          "Paātrina pāreju uz parasimpātisko reģenerāciju",
          "Palīdz kājām un mugurai justies vieglāk nākamās dienas kustībām",
        ],
      },
      {
        id: "sleep",
        name: "Dziļa atpūta un sagatavošanās miegam",
        subtitle: "Vakara nomierināšanās, prāta klusums un bioloģiskā ritma atgūšana",
        badge: "Vakara rituāls",
        recommendedDuration: 24,
        frequencies: "0,5 Hz – 4 Hz (Delta frekvenču ierosināšana)",
        description: "Hronobioloģiskas frekvences vakara stundām, kas dod nervu sistēmai skaidru signālu, ka dienas spriedze ir beigusies.",
        sensation: "Dziļa ritmiska piezemētība, elpas nomierināšanās, patīkams smagums locekļos, domu plūsmas norimšana.",
        applicators: {
          mat: { active: true, note: "Galvenā visa ķermeņa virsma pirms iekāpšanas gultā" },
          electrodes: { active: true, note: "Turami plaukstās, lai nomierinātu veģetatīvās nervu sistēmas trauksmi" },
          laser: { active: false, note: "Vakara nomierinošajos rituālos parasti netiek izmantots" },
        },
        outcomes: [
          "Rāma un vienmērīga pāreja no saspringtas dienas uz dziļu, atjaunojošu miegu",
          "Mazina nakts nemieru bez medikamentiem",
          "Rīta pamošanās ar patiesu enerģiju un skaidru prātu",
        ],
      },
      {
        id: "stress-reset",
        name: "Ikdienas stresa un ekrāna atslodze",
        subtitle: "Ilgām stundām pie datora, mentālai pārslodzei un kakla savilkumiem",
        badge: "Prāta atslodze",
        recommendedDuration: 12,
        frequencies: "7,83 Hz – 14 Hz (Šūmaņa rezonanse un Alfa ritmi)",
        description: "Kompakts 12 minūšu resets starp darba ekrāniem un privāto vakara mieru, lai noņemtu simpātisko spriedzi.",
        sensation: "Kakla un žokļa muskuļu atslābums, dziļāka diafragmas elpošana, skaidra mentāla pauze.",
        applicators: {
          mat: { active: true, note: "Mugurkaula atslogošana un stājas līdzsvarošana" },
          electrodes: { active: true, note: "Mikrostrāvas līdzsvars maņu atslogošanai un skaidrībai" },
          laser: { active: true, note: "Novietots uz kakla vai trapeces muskuļa savilktajiem punktiem" },
        },
        outcomes: [
          "Kompensē pie rakstāmgalda un ekrāna pavadīto stundu saspringumu",
          "Nodrošina skaidru robežu starp steidzīgu darba dienu un mierīgu mājas vakaru",
          "Atgriež prāta mieru un emocionālo līdzsvaru",
        ],
      },
    ],
  },
  ru: {
    eyebrow: "Интерактивный симулятор сеанса",
    title: "Узнайте, как проходит домашний сеанс sanza",
    subtitle: "Выберите вашу цель на день, чтобы увидеть этапы сеанса, активные аксессуары и частотные программы.",
    goalLabel: "Выберите цель сеанса",
    applicatorsLabel: "Аксессуары в этом ритуале",
    durationLabel: "Длительность",
    frequencyLabel: "Спектр частот",
    sensationLabel: "Ощущения во время сеанса",
    outcomesLabel: "Что это дает вашему организму",
    bookWalkthrough: "Забронировать консультацию",
    askQuestion: "Задать вопрос",
    matName: "Коврик на все тело",
    electrodesName: "Биочастотные электроды",
    laserName: "Точечный лазер / свет",
    rituals: [
      {
        id: "recovery",
        name: "Восстановление после нагрузок",
        subtitle: "Для мышц, суставов и снятия усталости после спорта и активности",
        badge: "Спорт и движение",
        recommendedDuration: 16,
        frequencies: "1,5 Гц – 28 Гц (Импульсное ЭМП + микротоки)",
        description: "Программа для ускорения мышечного восстановления, клеточной перезарядки и снятия защитного мышечного зажима.",
        sensation: "Мягкое тепло вдоль позвоночника и бедер, отпускание мышечного спазма, ощущение глубокого физического покоя.",
        applicators: {
          mat: { active: true, note: "Общее воздействие на все тело для улучшения микроциркуляции" },
          electrodes: { active: false, note: "По желанию: в ладонях для прицельного биочастотного сброса" },
          laser: { active: true, note: "Точечно на уставшие мышечные группы или суставы" },
        },
        outcomes: [
          "Снимает мышечную забитость и скованность после тренировок",
          "Ускоряет переход в парасимпатическую фазу клеточного восстановления",
          "Дарит ногам и спине чувство легкости и готовности к следующему дню",
        ],
      },
      {
        id: "sleep",
        name: "Глубокий отдых и подготовка ко сну",
        subtitle: "Вечернее замедление, отключение беспокойных мыслей и настройка биоритмов",
        badge: "Вечерний ритуал",
        recommendedDuration: 24,
        frequencies: "0,5 Гц – 4 Гц (Дельта-волны для глубокого сна)",
        description: "Хронобиологические частоты, откалиброванные для вечера, подающие нервной системе мягкий сигнал завершения дневного режима.",
        sensation: "Глубокое ритмичное заземление, замедление дыхания, приятная тяжесть в теле, стихание мыслей.",
        applicators: {
          mat: { active: true, note: "Основная поверхность для расслабления всего тела перед сном" },
          electrodes: { active: true, note: "В ладонях для снятия вегетативного напряжения" },
          laser: { active: false, note: "Обычно не используется в вечерних успокаивающих сессиях" },
        },
        outcomes: [
          "Естественный переход от суеты дня к глубокому и непрерывному сну",
          "Успокаивает перевозбужденный ум без медикаментозных средств",
          "Утреннее пробуждение с ясной головой и восстановленными силами",
        ],
      },
      {
        id: "stress-reset",
        name: "Снятие стресса и экранной перегрузки",
        subtitle: "Для долгих часов за компьютером, ментального выгорания и зажимов шеи",
        badge: "Ментальный сброс",
        recommendedDuration: 12,
        frequencies: "7,83 Гц – 14 Гц (Резонанс Шумана и Альфа-ритмы)",
        description: "12-минутная пауза между экранами монитора и домашним отдыхом для быстрого снятия симпатического стресса.",
        sensation: "Расслабление зажатой шеи и челюсти, глубокий вдох, ощущение тишины и перезагрузки.",
        applicators: {
          mat: { active: true, note: "Разгрузка позвоночника и восстановление осанки" },
          electrodes: { active: true, note: "Микротоковый баланс для сенсорной разгрузки и ясности" },
          laser: { active: true, note: "На область шеи или спазмированные трапеции" },
        },
        outcomes: [
          "Нейтрализует последствия долгой сидячей работы перед экраном",
          "Создает четкую границу между рабочими дедлайнами и семейным вечером",
          "Возвращает эмоциональное равновесие и концентрацию",
        ],
      },
    ],
  },
};

export function HomeSessionSimulator({ locale }: HomeSessionSimulatorProps) {
  const activeLocale: Locale = locale === "de" || locale === "lv" || locale === "ru" ? locale : "en";
  const data = SIMULATOR_DATA[activeLocale];

  const [activeRitualId, setActiveRitualId] = useState<string>("recovery");
  const [selectedDuration, setSelectedDuration] = useState<number>(16);

  const currentRitual = data.rituals.find((r) => r.id === activeRitualId) ?? data.rituals[0];

  const handleSelectRitual = (id: string) => {
    setActiveRitualId(id);
    const ritual = data.rituals.find((r) => r.id === id);
    if (ritual) {
      setSelectedDuration(ritual.recommendedDuration);
    }
  };

  return (
    <div className="home-session-simulator w-full rounded-[24px] border border-[#d8cec2] bg-[#fffaf3] p-5 shadow-[0_4px_24px_rgba(30,42,34,0.06)] sm:p-8 md:p-10">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
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

      {/* Goal Selector Tabs */}
      <div className="mt-8">
        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#6f8a7a]">
          {data.goalLabel}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {data.rituals.map((ritual) => {
            const isSelected = ritual.id === activeRitualId;
            return (
              <button
                key={ritual.id}
                type="button"
                onClick={() => handleSelectRitual(ritual.id)}
                className={`relative flex flex-col rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-[#1e3d34] bg-[#0e3d34] text-white shadow-md ring-2 ring-[#0e3d34]/20"
                    : "border-[#d8cec2] bg-white text-[#1e2a22] hover:border-[#6f8a7a] hover:bg-[#f6f1ea]"
                }`}
              >
                <span
                  className={`inline-block self-start rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#6f8a7a]/15 text-[#3b5748]"
                  }`}
                >
                  {ritual.badge}
                </span>
                <span className="mt-2 text-base font-bold leading-snug sm:text-lg">
                  {ritual.name}
                </span>
                <span
                  className={`mt-1 line-clamp-2 text-xs leading-relaxed ${
                    isSelected ? "text-white/80" : "text-[#1e2a22]/70"
                  }`}
                >
                  {ritual.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Display Bento */}
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        {/* Left: Signal & Applicators panel (7 cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#d8cec2] bg-[#fbf7ef] p-6 lg:col-span-7 sm:p-7">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d8cec2]/70 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
                  {data.frequencyLabel}
                </span>
                <p className="font-heading text-lg font-bold text-[#1e2a22]">
                  {currentRitual.frequencies}
                </p>
              </div>

              {/* Duration picker */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#1e2a22]/70">
                  {data.durationLabel}:
                </span>
                <div className="flex rounded-lg border border-[#d8cec2] bg-white p-0.5">
                  {[12, 16, 24].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDuration(d)}
                      className={`rounded-md px-2.5 py-1 text-xs font-bold transition ${
                        selectedDuration === d
                          ? "bg-[#0e3d34] text-white"
                          : "text-[#1e2a22]/75 hover:bg-[#f6f1ea]"
                      }`}
                    >
                      {d}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Signal Waveform Visualizer */}
            <div className="relative my-6 overflow-hidden rounded-xl border border-[#1e3d34]/15 bg-[#0e3d34] p-5 text-white">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#82a390] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#82a390]" />
                  </span>
                  sanza PEMF Generator & Chrono Signal
                </span>
                <span>{selectedDuration} Minutes • Auto-Program</span>
              </div>

              {/* Animated waveform SVG */}
              <div className="my-3 h-16 w-full">
                <svg
                  viewBox="0 0 500 64"
                  fill="none"
                  preserveAspectRatio="none"
                  className="h-full w-full stroke-[#a3c2b0]"
                  strokeWidth="2.5"
                >
                  <path
                    d={
                      activeRitualId === "recovery"
                        ? "M0,32 Q25,8 50,32 T100,32 T150,12 T200,32 T250,52 T300,32 T350,10 T400,32 T450,54 T500,32"
                        : activeRitualId === "sleep"
                        ? "M0,32 Q40,16 80,32 T160,32 T240,20 T320,32 T400,44 T480,32 L500,32"
                        : "M0,32 Q15,12 30,32 T60,32 T90,16 T120,32 T150,48 T180,32 T210,14 T240,32 T270,50 T300,32 T330,16 T360,32 T390,48 T420,32 T450,18 T480,32 L500,32"
                    }
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
              </div>

              <p className="text-xs italic text-white/80">
                {currentRitual.description}
              </p>
            </div>

            {/* Active Applicators */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
                {data.applicatorsLabel}
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {/* Mat */}
                <div
                  className={`rounded-lg border p-3 text-xs ${
                    currentRitual.applicators.mat.active
                      ? "border-[#1e3d34]/25 bg-white text-[#1e2a22]"
                      : "border-dashed border-[#d8cec2] bg-[#f6f1ea]/60 text-[#1e2a22]/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className={currentRitual.applicators.mat.active ? "text-[#2e6955]" : "text-gray-400"}>
                      ●
                    </span>
                    {data.matName}
                  </div>
                  <p className="mt-1 leading-snug">{currentRitual.applicators.mat.note}</p>
                </div>

                {/* Electrodes */}
                <div
                  className={`rounded-lg border p-3 text-xs ${
                    currentRitual.applicators.electrodes.active
                      ? "border-[#1e3d34]/25 bg-white text-[#1e2a22]"
                      : "border-dashed border-[#d8cec2] bg-[#f6f1ea]/60 text-[#1e2a22]/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className={currentRitual.applicators.electrodes.active ? "text-[#2e6955]" : "text-gray-400"}>
                      ●
                    </span>
                    {data.electrodesName}
                  </div>
                  <p className="mt-1 leading-snug">{currentRitual.applicators.electrodes.note}</p>
                </div>

                {/* Laser */}
                <div
                  className={`rounded-lg border p-3 text-xs ${
                    currentRitual.applicators.laser.active
                      ? "border-[#1e3d34]/25 bg-white text-[#1e2a22]"
                      : "border-dashed border-[#d8cec2] bg-[#f6f1ea]/60 text-[#1e2a22]/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className={currentRitual.applicators.laser.active ? "text-[#2e6955]" : "text-gray-400"}>
                      ●
                    </span>
                    {data.laserName}
                  </div>
                  <p className="mt-1 leading-snug">{currentRitual.applicators.laser.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sensation & Outcomes panel (5 cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#d8cec2] bg-white p-6 lg:col-span-5 sm:p-7">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
                {data.sensationLabel}
              </p>
              <div className="mt-2 rounded-xl bg-[#f6f1ea] p-4 text-[0.92rem] leading-relaxed text-[#1e2a22]">
                &ldquo;{currentRitual.sensation}&rdquo;
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
                {data.outcomesLabel}
              </p>
              <ul className="mt-3 space-y-2.5">
                {currentRitual.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-xs text-[#1e2a22]/90 sm:text-sm">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6f8a7a]/20 text-[#2e6955]">
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-[#d8cec2]/60 sm:flex-row">
            <a
              href="https://cal.eu/nordoravital/discovery-call"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex flex-1 justify-center text-center text-xs sm:text-sm"
            >
              {data.bookWalkthrough}
            </a>
            <ContactDrawerTrigger
              options={{ drawerType: "homePersonal" }}
              className="btn-outline inline-flex flex-1 justify-center text-center text-xs sm:text-sm"
            >
              {data.askQuestion}
            </ContactDrawerTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}
