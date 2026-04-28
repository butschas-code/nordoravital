"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { BrandArc } from "@/components/brand-arc";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { outcomePhotoCoverPosition } from "@/lib/outcome-photo-cover-focus";
import { IMAGE_PATHS } from "@/lib/public-images";
import { richParts } from "@/lib/i18n-rich";

const SLIDE_COUNT = 11;

/** Clears fixed `DeckLogo` — use on the main content column */
const DECK_TOP_PAD = "pt-[6.5rem] sm:pt-[7.25rem]";

/** Centered headline + lead (light slides) */
const DECK_HEAD_CENTER = "mx-auto w-full max-w-4xl text-center px-1";

function useDeckNav(count: number) {
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const m = /^#(\d+)$/.exec(window.location.hash);
    if (!m) return 0;
    const n = Number.parseInt(m[1], 10) - 1;
    return n >= 0 && n < count ? n : 0;
  });

  const go = useCallback(
    (n: number) => {
      setIndex(Math.max(0, Math.min(count - 1, n)));
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setIndex((i) => Math.min(count - 1, i + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setIndex(count - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  useEffect(() => {
    const onHash = () => {
      const m = /^#(\d+)$/.exec(window.location.hash);
      if (!m) return;
      const n = Number.parseInt(m[1], 10) - 1;
      if (n >= 0 && n < count) setIndex(n);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [count]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index]);

  return { index, go };
}

function DeckFooterChrome({ index }: { index: number }) {
  const hash = `#${index + 1}`;
  const langLink =
    "text-white/55 underline-offset-2 transition hover:text-white/90 hover:underline";
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-2 border-t border-white/10 bg-[#070a09] px-4 py-2 font-sans text-[0.68rem] tracking-wide sm:flex-row sm:gap-8">
      <div className="flex items-center gap-3 text-white/45">
        <span className="tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(SLIDE_COUNT).padStart(2, "0")}
        </span>
        <span className="hidden text-white/35 sm:inline">·</span>
        <span className="hidden text-white/35 sm:inline">← → space · Home · End</span>
      </div>
      <nav className="flex items-center gap-5" aria-label="Deck language versions">
        <a href={`/en/deck${hash}`} className={langLink}>
          English
        </a>
        <a href={`/de/deck${hash}`} className={langLink}>
          Deutsch
        </a>
        <a href={`/lv/deck${hash}`} className={langLink}>
          Latviešu
        </a>
      </nav>
    </div>
  );
}

/** Same top-left placement on every slide; height is ~3× the previous deck mark */
function DeckLogo({ invert = false }: { invert?: boolean }) {
  return (
    <div className="pointer-events-none absolute left-5 top-5 z-20 sm:left-8 sm:top-6">
      <Image
        src={IMAGE_PATHS.brand.logo}
        alt="Nordora Vital"
        width={480}
        height={120}
        className={`h-[4.5rem] w-auto sm:h-[5.25rem] ${invert ? "brightness-0 invert opacity-90" : ""}`}
        sizes="(max-width: 640px) 60vw, 420px"
        priority
      />
    </div>
  );
}

/** Exact 16:9 stage — letterboxed on ultrawide / tall screens */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden bg-[var(--bg)] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
      style={{
        width: "min(100vw, calc((100dvh - 36px) * 16 / 9))",
        height: "min(calc(100dvh - 36px), calc(100vw * 9 / 16))",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Slide 1: Deck hero (static mat photo + site overlay) ───────────────── */
function SlideHero() {
  const t = useTranslations("Home");

  return (
    <div className="relative flex h-full w-full flex-col justify-end">
      <div className="absolute inset-0">
        <Image
          src={encodeURI(IMAGE_PATHS.deck.slide1Background)}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
      </div>
      <div className="arc-watermark pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <BrandArc color="#FFFFFF" size={520} className="absolute -right-16 -top-16 opacity-[0.06] sm:size-[700]" />
      </div>
      <DeckLogo invert />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-end px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20">
        <div className="mx-auto w-full max-w-3xl pb-2 text-center sm:max-w-3xl">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white sm:mb-4 sm:text-[0.75rem] [&_strong]:normal-case [&_strong]:font-semibold">
            {t.rich("heroKicker", richParts.onDark)}
          </p>
          <h1 className="font-heading text-[clamp(1.35rem,3.6vw,2.65rem)] font-bold leading-[1.08] tracking-tight text-white">
            {t("heroHeadline")}
          </h1>
          <p className="mt-4 text-[clamp(0.9rem,1.9vw,1.1rem)] leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            {t.rich("heroSubheadline", richParts.onDark)}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 2: Welcome / problem framing ───────────────────────────────── */
function SlideWelcome() {
  const t = useTranslations("Home");

  return (
    <div className="relative home-band--welcome flex h-full w-full flex-col overflow-hidden">
      <DeckLogo />
      <div
        className={`grid min-h-0 flex-1 grid-rows-1 gap-6 px-5 pb-10 sm:gap-8 sm:px-8 sm:pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch lg:gap-10 lg:px-10 lg:pb-8 ${DECK_TOP_PAD}`}
      >
        <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-y-auto text-center lg:py-1">
          <h2 className="font-heading text-[clamp(1.25rem,3.2vw,2.35rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
            {t("welcomeP1")}
          </h2>
          <div className="mt-5 space-y-3 text-[clamp(0.8rem,1.35vw,0.98rem)] leading-relaxed text-[var(--muted)] sm:mt-6 sm:space-y-4">
            <p className="text-[var(--text)]">{t.rich("welcomeP2", richParts.default)}</p>
            <p>{t.rich("welcomeP3", richParts.default)}</p>
          </div>
        </div>
        {/* `fill` + next/image needs a non-zero box; lg:min-h-0 + items-center collapsed this column */}
        <div className="relative min-h-[14rem] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] sm:min-h-[18rem] lg:h-full lg:min-h-[16rem] lg:rounded-3xl">
          <Image
            src={encodeURI(IMAGE_PATHS.deck.slide2Welcome)}
            alt={t("outcome2ImageAlt")}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

const DECK_SLIDE3_TWO_PATHS_CARDS: {
  title: "twoPathsCard1Title" | "twoPathsCard2Title";
  tag: "twoPathsCard1Tag" | "twoPathsCard2Tag";
  forPractice: "twoPathsCard1ForPractice" | "twoPathsCard2ForPractice";
  forClients: "twoPathsCard1ForClients" | "twoPathsCard2ForClients";
  variant: "grid" | "waves";
  /** Presentation accent — tag tint + card wash */
  accent: "sage" | "mauve";
}[] = [
  {
    title: "twoPathsCard1Title",
    tag: "twoPathsCard1Tag",
    forPractice: "twoPathsCard1ForPractice",
    forClients: "twoPathsCard1ForClients",
    variant: "grid",
    accent: "sage",
  },
  {
    title: "twoPathsCard2Title",
    tag: "twoPathsCard2Tag",
    forPractice: "twoPathsCard2ForPractice",
    forClients: "twoPathsCard2ForClients",
    variant: "waves",
    accent: "mauve",
  },
];

/* ─── Slide 3: Two paths — deck scale (large type + saturated brand color) */
function SlideExperience() {
  const t = useTranslations("Home");

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 10% 20%, rgba(111, 138, 122, 0.55) 0%, transparent 50%),
            radial-gradient(ellipse 85% 75% at 95% 75%, rgba(165, 133, 146, 0.5) 0%, transparent 52%),
            radial-gradient(ellipse 70% 60% at 50% -5%, rgba(200, 230, 210, 0.2) 0%, transparent 45%),
            radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 40%),
            linear-gradient(155deg, #061a16 0%, #0E3D34 32%, #0a2822 58%, #152a22 100%)
          `,
        }}
        aria-hidden
      />
      <DeckLogo invert />
      <div
        className={`relative z-[1] flex min-h-0 flex-1 flex-col px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-8 ${DECK_TOP_PAD}`}
      >
        <div className={`${DECK_HEAD_CENTER} max-w-4xl shrink-0`}>
          <h2 className="font-heading text-[clamp(1.25rem,3.2vw,2.35rem)] font-bold leading-[1.1] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]">
            {t("twoPathsTitle")}
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-[min(12rem,40vw)] max-w-full rounded-full bg-gradient-to-r from-[#6F8A7A] via-[#A58592] to-[#6F8A7A] opacity-95 sm:mt-4"
            aria-hidden
          />
        </div>
        {/* sm+: subgrid — row2 flexes so white panels sit low; row3 auto height, equal across both columns */}
        <div className="mt-5 flex min-h-0 flex-1 flex-col gap-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:grid-rows-[auto_minmax(0,1fr)_auto] sm:gap-x-6 sm:gap-y-0 lg:gap-x-7">
          {DECK_SLIDE3_TWO_PATHS_CARDS.map((c) => (
            <article
              key={c.title}
              className={`group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl ring-2 sm:row-span-3 sm:grid sm:min-h-0 sm:grid-rows-subgrid sm:rounded-3xl ${
                c.accent === "sage"
                  ? "shadow-[0_28px_70px_-22px_rgba(14,61,52,0.45),0_12px_40px_-16px_rgba(111,138,122,0.22)] ring-[#6F8A7A]/55"
                  : "shadow-[0_28px_70px_-22px_rgba(74,48,56,0.38),0_12px_40px_-16px_rgba(165,133,146,0.28)] ring-[#A58592]/50"
              }`}
            >
              <BrandAtmosphere variant={c.variant} />
              <div
                className={`pointer-events-none absolute inset-0 z-[1] ${
                  c.accent === "sage"
                    ? "bg-gradient-to-br from-[#6F8A7A]/38 via-[#6F8A7A]/12 to-transparent"
                    : "bg-gradient-to-br from-[#A58592]/36 via-[#A58592]/10 to-transparent"
                }`}
                aria-hidden
              />
              <div
                className="absolute inset-x-0 bottom-0 z-[1] h-[80%] sm:h-[70%]"
                style={{
                  background:
                    c.accent === "sage"
                      ? "linear-gradient(180deg, rgba(6,26,22,0) 0%, rgba(111,138,122,0.35) 18%, rgba(14,61,52,0.72) 48%, rgba(4,22,18,0.97) 100%)"
                      : "linear-gradient(180deg, rgba(6,26,22,0) 0%, rgba(165,133,146,0.32) 20%, rgba(14,61,52,0.68) 50%, rgba(4,22,18,0.97) 100%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%] bg-gradient-to-t from-[#061a16]/92 via-[#082721]/45 to-transparent sm:hidden"
                aria-hidden
              />
              <div className="relative z-10 flex shrink-0 flex-col px-5 pb-0 pt-5 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
                <p
                  className={`mb-2 inline-flex w-max max-w-full items-center rounded-full border-2 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] shadow-sm sm:mb-2.5 sm:px-4 sm:py-2 sm:text-[0.72rem] ${
                    c.accent === "sage"
                      ? "border-[#6F8A7A]/65 bg-[#0E3D34]/88 text-[#E8F0EA]"
                      : "border-[#C4A8B5]/75 bg-[#4A3038]/88 text-[#F5EAED]"
                  }`}
                >
                  {t(c.tag)}
                </p>
                <h3 className="font-heading text-[clamp(1.05rem,2.5vw,1.75rem)] font-bold leading-[1.12] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
                  {t(c.title)}
                </h3>
              </div>
              {/* Pushes micro panels to the bottom; absorbs extra vertical space */}
              <div className="min-h-0 flex-1 sm:h-full" aria-hidden />
              <div className="two-paths-micro-row relative z-10 min-h-0 px-5 pb-5 pt-4 sm:min-h-0 sm:px-6 sm:pb-6 sm:pt-4 lg:px-7 lg:pb-7">
                <div className="two-paths-micro-cell">
                  <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-[#6F8A7A]/55 bg-white shadow-[0_12px_32px_-8px_rgba(14,61,52,0.35)] sm:rounded-[1.35rem]">
                    <div className="shrink-0 px-4 pb-0 pt-3 sm:px-4 sm:pt-3.5 lg:px-5 lg:pt-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#0E3D34] sm:text-[0.7rem] lg:text-[0.72rem]">
                        {t("twoPathsMicroPracticeLabel")}
                      </p>
                    </div>
                    <p className="min-h-0 flex-1 overflow-y-auto px-4 py-2 text-[clamp(0.78rem,1.2vw,0.98rem)] leading-relaxed text-[#082721] sm:px-4 sm:pb-3.5 sm:pt-1 lg:px-5 lg:pb-4">
                      {t(c.forPractice)}
                    </p>
                  </div>
                </div>
                <div className="two-paths-micro-cell">
                  <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-[#6F8A7A]/55 bg-white shadow-[0_12px_32px_-8px_rgba(14,61,52,0.35)] sm:rounded-[1.35rem]">
                    <div className="shrink-0 px-4 pb-0 pt-3 sm:px-4 sm:pt-3.5 lg:px-5 lg:pt-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#0E3D34] sm:text-[0.7rem] lg:text-[0.72rem]">
                        {t("twoPathsMicroPatientsLabel")}
                      </p>
                    </div>
                    <p className="min-h-0 flex-1 overflow-y-auto px-4 py-2 text-[clamp(0.78rem,1.2vw,0.98rem)] leading-relaxed text-[#082721] sm:px-4 sm:pb-3.5 sm:pt-1 lg:px-5 lg:pb-4">
                      {t(c.forClients)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: Three technologies ───────────────────────────────────────── */
function SlideThreeTech() {
  const t = useTranslations("HowItWorks");

  const items = [
    {
      src: IMAGE_PATHS.deck.slide4ThreeTechLeft,
      label: t("block3Item1Title"),
      body: t("block3Item1Body"),
    },
    {
      src: IMAGE_PATHS.home.productHandElectrode,
      label: t("block3Item2Title"),
      body: t("block3Item2Body"),
    },
    {
      src: IMAGE_PATHS.home.productPen,
      label: t("block3Item3Title"),
      body: t("block3Item3Body"),
    },
  ];

  return (
    <div className="home-band--system-visual relative flex h-full w-full flex-col overflow-hidden">
      <DeckLogo />
      {/* Title + lead on top; three product cards in one horizontal row pinned to the bottom */}
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-12 pt-[6.5rem] sm:px-8 sm:pb-14 sm:pt-[7.25rem] lg:px-10 lg:pb-16 lg:pt-28">
        <div className={`min-h-0 shrink-0 overflow-y-auto ${DECK_HEAD_CENTER}`}>
          <h2 className="font-heading text-[clamp(1.25rem,3.2vw,2.35rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
            {t.rich("block2Title", richParts.default)}
          </h2>
          <div className="mx-auto mt-5 max-w-3xl space-y-3 text-[clamp(0.8rem,1.35vw,0.98rem)] leading-relaxed text-[var(--muted)] sm:mt-6 sm:space-y-4">
            <p>{t.rich("block2Lead", richParts.default)}</p>
          </div>
        </div>
        <div className="mt-auto grid min-h-0 w-full grid-cols-3 gap-2 pt-6 sm:gap-4 sm:pt-8">
          {items.map((item, idx) => (
            <article
              key={item.label}
              className="flex min-w-0 flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 p-2 shadow-[var(--shadow-card)] sm:rounded-3xl sm:p-4"
            >
              {/* Same 4:3 box. Left + middle use object-cover when source isn’t 4:3; right (pen) stays contain for native 4:3. */}
              <div className="relative mb-2 aspect-[4/3] w-full shrink-0 overflow-hidden sm:mb-3">
                <Image
                  src={encodeURI(item.src)}
                  alt=""
                  fill
                  className={
                    idx === 2
                      ? "object-contain object-center"
                      : "object-cover object-center"
                  }
                  sizes="(max-width: 640px) 30vw, 33vw"
                />
              </div>
              <h3 className="text-center font-heading text-[0.65rem] font-bold leading-snug text-[var(--text)] sm:text-[0.85rem] md:text-[0.9rem]">
                {item.label}
              </h3>
              <p className="mt-2 text-center text-[0.58rem] leading-snug text-[var(--muted)] sm:text-[0.72rem] sm:leading-relaxed md:text-[0.76rem]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const SYSTEM_BULLETS: { titleKey: string; bodyKey: string }[] = [
  { titleKey: "systemBullet1Title", bodyKey: "systemBullet1Body" },
  { titleKey: "systemBullet2Title", bodyKey: "systemBullet2Body" },
  { titleKey: "systemBullet3Title", bodyKey: "systemBullet3Body" },
  { titleKey: "systemBullet4Title", bodyKey: "systemBullet4Body" },
];

const PRODUCT_STRIP: { src: string; label: "systemProductLabelGen" | "systemProductLabelMat" | "systemProductLabelPad" | "systemProductLabelPen" }[] = [
  { src: IMAGE_PATHS.home.productGenerator, label: "systemProductLabelGen" },
  { src: IMAGE_PATHS.home.productMat, label: "systemProductLabelMat" },
  { src: IMAGE_PATHS.home.productPad, label: "systemProductLabelPad" },
  { src: IMAGE_PATHS.home.productPen, label: "systemProductLabelPen" },
];

/* ─── Slide 5: System snapshot (real product photography) ───────────────── */
function SlideSystem() {
  const t = useTranslations("Home");

  return (
    <div className="relative home-band--system-visual flex h-full w-full flex-col overflow-hidden">
      <DeckLogo />
      <div
        className={`grid min-h-0 flex-1 grid-rows-1 gap-5 px-5 pb-8 sm:gap-6 sm:px-8 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-8 lg:px-10 lg:pb-8 ${DECK_TOP_PAD}`}
      >
        <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-y-auto">
          <div className={DECK_HEAD_CENTER}>
            <h2 className="font-heading text-[clamp(1.15rem,2.8vw,2rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
              {t.rich("systemTitle", richParts.default)}
            </h2>
            <p className="mt-3 text-[clamp(0.78rem,1.25vw,0.95rem)] leading-relaxed text-[var(--muted)] sm:mt-4">
              {t.rich("systemLead", richParts.default)}
            </p>
          </div>
          <ul className="mx-auto mt-4 w-full max-w-2xl space-y-2 text-left sm:mt-5 sm:space-y-2.5">
            {SYSTEM_BULLETS.map((b, i) => (
              <li
                key={b.titleKey}
                className="flex gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2.5 text-[0.72rem] shadow-sm sm:gap-3 sm:px-3.5 sm:py-3 sm:text-[0.78rem]"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[0.65rem] font-bold text-white sm:h-6 sm:w-6 sm:text-xs"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="font-semibold leading-snug text-[var(--text)]">{t(b.titleKey)}</span>
                  <span className="leading-snug text-[var(--muted)]">{t(b.bodyKey)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-h-0 min-w-0 flex-col justify-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--surface)] via-[var(--panel)] to-[var(--panel-deep)] shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] sm:rounded-3xl">
            <Image
              src={encodeURI(IMAGE_PATHS.home.systemHero)}
              alt={t("systemImageAlt")}
              fill
              className="object-contain p-1 drop-shadow-2xl sm:p-2"
              sizes="(max-width:1023px) 100vw, 50vw"
            />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-1.5 sm:mt-4 sm:gap-2">
            {PRODUCT_STRIP.map((item) => (
              <div
                key={item.src}
                className="relative aspect-square overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm sm:rounded-2xl"
              >
                <Image
                  src={encodeURI(item.src)}
                  alt={t(item.label)}
                  fill
                  className="object-contain p-1 sm:p-1.5"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const OUTCOME_FIRST_FOUR = [
  { title: "outcome1Title" as const, clients: "outcome1ForClients" as const, practice: "outcome1ForPractice" as const, alt: "outcome1ImageAlt" as const, i: 0 },
  { title: "outcome2Title" as const, clients: "outcome2ForClients" as const, practice: "outcome2ForPractice" as const, alt: "outcome2ImageAlt" as const, i: 1 },
  { title: "outcome3Title" as const, clients: "outcome3ForClients" as const, practice: "outcome3ForPractice" as const, alt: "outcome3ImageAlt" as const, i: 2 },
  { title: "outcome4Title" as const, clients: "outcome4ForClients" as const, practice: "outcome4ForPractice" as const, alt: "outcome4ImageAlt" as const, i: 3 },
];

/* ─── Slide 6: Outcomes bento (4 tiles) ─────────────────────────────────── */
function SlideOutcomes() {
  const t = useTranslations("Home");

  return (
    <div className="relative home-band--outcomes-grid flex h-full w-full flex-col overflow-hidden">
      <DeckLogo />
      <div className={`flex min-h-0 flex-1 flex-col px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-8 ${DECK_TOP_PAD}`}>
        <div className={`${DECK_HEAD_CENTER} max-w-3xl`}>
          <h2 className="font-heading text-[clamp(1.15rem,3vw,2rem)] font-bold leading-[1.06] tracking-tight text-[var(--text)]">
            {t("outcomesTitle")}
          </h2>
          <p className="mt-2 text-[clamp(0.78rem,1.3vw,0.92rem)] text-[var(--muted)] sm:mt-3">{t("outcomesLead")}</p>
        </div>
        <ul className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
          {OUTCOME_FIRST_FOUR.map((o) => (
            <li
              key={o.title}
              className="relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-[var(--border)] sm:min-h-[200px] sm:rounded-3xl"
            >
              <Image
                src={encodeURI(IMAGE_PATHS.home.outcomePhotos[o.i])}
                alt={t(o.alt)}
                fill
                className="object-cover"
                style={{ objectPosition: outcomePhotoCoverPosition(o.i) }}
                sizes="25vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 z-[1] h-[68%]"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(8,39,33,0.48) 40%, rgba(8,39,33,0.9) 100%)",
                }}
                aria-hidden
              />
              <div className="relative z-10 p-4 sm:p-5">
                <h3 className="font-heading text-[clamp(0.95rem,2.6vw,1.35rem)] font-bold leading-[1.12] tracking-tight text-white">
                  {t(o.title)}
                </h3>
                <p className="mt-2 line-clamp-2 text-[clamp(0.78rem,1.85vw,1.02rem)] leading-snug text-white/92 sm:mt-2.5 sm:line-clamp-3 sm:leading-relaxed">
                  {t(o.clients)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Deep-dive rows — copy + atmosphere variants match `/how-it-works` block 4 (tech details). */
const DECK_HIW_TECH_ROWS = [
  {
    atmosphere: "pulse" as const,
    accent: "var(--brand)",
    imageRight: false,
    kicker: "tech1Kicker",
    title: "tech1Title",
    whatIsLabel: "tech1WhatIsLabel",
    whatIs: "tech1WhatIs",
    scienceLabel: "tech1ScienceLabel",
    science: "tech1Science",
  },
  {
    atmosphere: "waves" as const,
    accent: "var(--brand-secondary)",
    imageRight: true,
    kicker: "tech2Kicker",
    title: "tech2Title",
    whatIsLabel: "tech2WhatIsLabel",
    whatIs: "tech2WhatIs",
    scienceLabel: "tech2ScienceLabel",
    science: "tech2Science",
  },
  {
    atmosphere: "lattice" as const,
    accent: "var(--brand-deep)",
    imageRight: false,
    kicker: "tech3Kicker",
    title: "tech3Title",
    whatIsLabel: "tech3WhatIsLabel",
    whatIs: "tech3WhatIs",
    scienceLabel: "tech3ScienceLabel",
    science: "tech3Science",
  },
] as const;

/* ─── Slides 7–9: One technology per slide (how-it-works copy + BrandAtmosphere) ─ */
function SlideTechDetail({ rowIndex }: { rowIndex: 0 | 1 | 2 }) {
  const t = useTranslations("HowItWorks");
  const row = DECK_HIW_TECH_ROWS[rowIndex];
  const n = rowIndex + 1;

  return (
    <div className="relative home-band--system-visual flex h-full w-full flex-col overflow-hidden">
      <DeckLogo />
      <div
        className={`grid min-h-0 flex-1 grid-cols-1 gap-5 px-5 pb-8 sm:gap-6 sm:px-8 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-8 lg:px-10 lg:pb-8 ${DECK_TOP_PAD}`}
      >
        <div
          className={`flex min-h-0 min-w-0 flex-col justify-center ${row.imageRight ? "lg:order-2" : ""}`}
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--surface)] via-[var(--panel)] to-[var(--panel-deep)] shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] sm:rounded-3xl lg:mx-0 lg:max-w-none">
            <BrandAtmosphere variant={row.atmosphere} />
            <div className="pointer-events-none absolute inset-0 flex items-end p-4 sm:p-6" aria-hidden>
              <span
                className="font-heading text-[clamp(2.5rem,10vw,4.5rem)] font-bold leading-none opacity-[0.16]"
                style={{ color: row.accent }}
              >
                {String(n).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`flex min-h-0 min-w-0 flex-col justify-center overflow-hidden ${row.imageRight ? "lg:order-1" : ""}`}
        >
          {/* Kicker / title: same scale as slide 4 (HowItWorks) + slide 5 system band */}
          <p
            className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.7rem]"
            style={{ color: row.accent }}
          >
            {t(row.kicker)}
          </p>
          <h2 className="mt-2 font-heading text-[clamp(1.25rem,3.2vw,2.35rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:mt-3">
            {t(row.title)}
          </h2>
          {/* Copy blocks: same card shell + type scale as SlideSystem bullets */}
          <div className="mt-4 grid gap-2 sm:mt-5 sm:gap-2.5">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2.5 shadow-sm sm:px-3.5 sm:py-3">
              <p
                className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:mb-2 sm:text-[0.7rem]"
                style={{ color: row.accent }}
              >
                {t(row.whatIsLabel)}
              </p>
              <p className="text-[0.72rem] leading-relaxed text-[var(--text)] sm:text-[0.78rem]">
                {t.rich(row.whatIs, richParts.default)}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2.5 shadow-sm sm:px-3.5 sm:py-3">
              <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] sm:mb-2 sm:text-[0.7rem]">
                {t(row.scienceLabel)}
              </p>
              <p className="text-[0.72rem] leading-relaxed text-[var(--muted)] sm:text-[0.78rem]">{t(row.science)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTechPemf() {
  return <SlideTechDetail rowIndex={0} />;
}
function SlideTechBiofrequency() {
  return <SlideTechDetail rowIndex={1} />;
}
function SlideTechColdLaser() {
  return <SlideTechDetail rowIndex={2} />;
}

const ROLLOUT_STEPS = [
  { n: 1, titleKey: "rolloutStep1Title", detailKey: "rolloutStep1Detail" },
  { n: 2, titleKey: "rolloutStep2Title", detailKey: "rolloutStep2Detail" },
  { n: 3, titleKey: "rolloutStep3Title", detailKey: "rolloutStep3Detail" },
  { n: 4, titleKey: "rolloutStep4Title", detailKey: "rolloutStep4Detail" },
] as const;

/* ─── Slide 10: Rollout — 2×2 step grid, presentation-scale type ─────────── */
function SlideRollout() {
  const t = useTranslations("Home");

  return (
    <div className="relative home-band--system-visual flex h-full w-full flex-col overflow-hidden">
      <DeckLogo />
      <div
        className={`mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-5 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-8 ${DECK_TOP_PAD}`}
      >
        <div className={`${DECK_HEAD_CENTER} max-w-4xl shrink-0`}>
          <h2 className="font-heading text-[clamp(1.2rem,3.2vw,2.35rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
            {t.rich("rolloutTitle", richParts.default)}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[clamp(0.85rem,1.5vw,1.05rem)] leading-relaxed text-[var(--muted)] sm:mt-4">
            {t("rolloutLead")}
          </p>
        </div>

        <p className="mt-5 shrink-0 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)] sm:mt-6 sm:text-[0.78rem]">
          {t("rolloutWeeksIntro")}
        </p>

        <ol className="mt-4 grid min-h-0 flex-1 grid-cols-1 content-start gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6">
          {ROLLOUT_STEPS.map((step) => (
            <li
              key={step.n}
              className="flex min-h-0 min-w-0 flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-5 shadow-[var(--shadow-card)] ring-1 ring-[var(--border)]/60 sm:flex-row sm:items-start sm:gap-5 sm:rounded-3xl sm:p-6 lg:p-7"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)] font-heading text-lg font-bold text-white shadow-[0_8px_24px_-6px_rgba(14,61,52,0.45)] sm:h-14 sm:w-14 sm:text-xl"
                aria-hidden
              >
                {step.n}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-[clamp(0.95rem,2.2vw,1.28rem)] font-bold leading-snug tracking-tight text-[var(--text)]">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 text-[clamp(0.82rem,1.5vw,1.05rem)] leading-relaxed text-[var(--muted)] sm:mt-3 sm:leading-[1.55]">
                  {t.rich(step.detailKey, richParts.default)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const DECK_CLOSING_SITE_URL = "https://nordoravital.com";

/* ─── Slide 11: Closing — hero + website & contact (no CTAs) ──────────────── */
function SlideClosing() {
  const t = useTranslations("HowItWorks");
  const tHome = useTranslations("Home");
  const tContact = useTranslations("Contact");

  const mail = tContact("companyEmail");
  const phone = tContact("companyPhone");
  const phoneTel = tContact("companyPhoneTel");

  return (
    <div className="relative flex h-full w-full flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={encodeURI(IMAGE_PATHS.offers.hero)}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#061a16]/95 via-[#082721]/55 to-[#082721]/25"
          aria-hidden
        />
      </div>
      <DeckLogo invert />
      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-10 pt-16 text-center sm:px-10 sm:pb-12">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80">{tHome("deckClosingKicker")}</p>
        <h2 className="mt-3 font-heading text-[clamp(1.2rem,3.2vw,2.35rem)] font-bold leading-[1.06] tracking-tight text-white">
          {t.rich("ctaTitle", richParts.onDark)}
        </h2>
        <p className="mt-4 text-[clamp(0.82rem,1.45vw,1.05rem)] leading-relaxed text-white/88">
          {t.rich("ctaBody", richParts.onDark)}
        </p>

        <div className="mt-8 rounded-2xl border border-white/18 bg-[#061a16]/55 px-5 py-6 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:mt-10 sm:px-8 sm:py-7">
          <dl className="m-0 grid gap-5 sm:grid-cols-3 sm:gap-6">
            <div className="min-w-0 sm:text-center">
              <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/55">{t("closingWebsiteLabel")}</dt>
              <dd className="m-0 mt-2">
                <a
                  href={DECK_CLOSING_SITE_URL}
                  className="break-all text-[clamp(0.9rem,1.6vw,1.08rem)] font-semibold text-white underline decoration-white/35 underline-offset-[5px] transition hover:decoration-white/80"
                >
                  {t("closingWebsiteDisplay")}
                </a>
              </dd>
            </div>
            <div className="min-w-0 sm:text-center">
              <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/55">{tContact("email")}</dt>
              <dd className="m-0 mt-2">
                <a
                  href={`mailto:${mail}`}
                  className="break-all text-[clamp(0.9rem,1.6vw,1.08rem)] font-semibold text-white underline decoration-white/35 underline-offset-[5px] transition hover:decoration-white/80"
                >
                  {mail}
                </a>
              </dd>
            </div>
            <div className="min-w-0 sm:text-center">
              <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/55">{tContact("phone")}</dt>
              <dd className="m-0 mt-2">
                <a
                  href={`tel:${phoneTel}`}
                  className="text-[clamp(0.9rem,1.6vw,1.08rem)] font-semibold text-white underline decoration-white/35 underline-offset-[5px] transition hover:decoration-white/80"
                >
                  {phone}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-white/12 pt-4 text-center text-[0.72rem] leading-snug text-white/65 sm:mt-6 sm:text-[0.76rem]">
            {tContact("companyName")}
          </p>
        </div>
      </div>
    </div>
  );
}

const SLIDES = [
  SlideHero,
  SlideWelcome,
  SlideExperience,
  SlideThreeTech,
  SlideSystem,
  SlideOutcomes,
  SlideTechPemf,
  SlideTechBiofrequency,
  SlideTechColdLaser,
  SlideRollout,
  SlideClosing,
];

export function DeckPresentation() {
  const { index } = useDeckNav(SLIDE_COUNT);

  const Slide = SLIDES[index];

  return (
    <div className="flex h-dvh w-screen flex-col overflow-hidden bg-[#070a09]">
      <div className="flex min-h-0 flex-1 items-center justify-center p-0 sm:p-2">
        <Stage>
          <div className="absolute inset-0 overflow-hidden">
            <Slide key={index} />
          </div>
        </Stage>
      </div>
      <DeckFooterChrome index={index} />
    </div>
  );
}
