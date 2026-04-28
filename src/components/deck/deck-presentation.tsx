"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { BrandArc } from "@/components/brand-arc";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { IMAGE_PATHS } from "@/lib/public-images";
import { richParts } from "@/lib/i18n-rich";

const SLIDE_COUNT = 11;

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

function DeckLogo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <div className={className}>
      <Image
        src={IMAGE_PATHS.brand.logo}
        alt="Nordora Vital"
        width={160}
        height={40}
        className={`h-6 w-auto sm:h-7 ${invert ? "brightness-0 invert opacity-90" : ""}`}
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

/* ─── Slide 1: Home hero (video + site overlay) ─────────────────────────── */
function SlideHero() {
  const t = useTranslations("Home");

  return (
    <div className="relative flex h-full w-full flex-col justify-end">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={encodeURI(IMAGE_PATHS.hero.backgroundPhoto)}
        >
          <source src={IMAGE_PATHS.hero.backgroundVideo} type="video/mp4" />
        </video>
        <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
      </div>
      <div className="arc-watermark pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <BrandArc color="#FFFFFF" size={520} className="absolute -right-16 -top-16 opacity-[0.06] sm:size-[700]" />
      </div>
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" invert />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-end px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20">
        <div className="ml-auto w-full max-w-xl pb-2 text-right sm:max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white sm:mb-4 sm:text-[0.75rem] [&_strong]:normal-case [&_strong]:font-semibold">
            {t.rich("heroKicker", richParts.onDark)}
          </p>
          <h1 className="font-heading text-[clamp(1.35rem,3.6vw,2.65rem)] font-bold leading-[1.08] tracking-tight text-white">
            {t("heroHeadline")}
          </h1>
          <p className="mt-4 text-[clamp(0.9rem,1.9vw,1.1rem)] leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            {t.rich("heroSubheadline", richParts.onDark)}
          </p>
          <div className="mt-6 flex flex-col items-end gap-2 sm:mt-8 sm:flex-row sm:justify-end sm:gap-3">
            <Link href="/pilot-program" className="btn-primary inline-flex justify-center px-5 py-2.5 text-sm sm:px-6 sm:py-3">
              {t("ctaBookDemo")}
            </Link>
            <Link href="/how-it-works" className="btn-ghost-white inline-flex justify-center px-5 py-2.5 text-sm sm:px-6 sm:py-3">
              {t("heroSecondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 2: Welcome / problem framing ───────────────────────────────── */
function SlideWelcome() {
  const t = useTranslations("Home");

  return (
    <div className="home-band--welcome flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="grid min-h-0 flex-1 grid-rows-1 gap-6 px-5 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-8">
        <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-y-auto">
          <h2 className="font-heading text-[clamp(1.25rem,3.2vw,2.35rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
            {t("welcomeP1")}
          </h2>
          <div className="mt-5 space-y-3 text-[clamp(0.8rem,1.35vw,0.98rem)] leading-relaxed text-[var(--muted)] sm:mt-6 sm:space-y-4">
            <p className="text-[var(--text)]">{t.rich("welcomeP2", richParts.default)}</p>
            <p>{t.rich("welcomeP3", richParts.default)}</p>
          </div>
        </div>
        <div className="relative min-h-[180px] shrink-0 overflow-hidden rounded-2xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] sm:min-h-[220px] lg:min-h-0 lg:rounded-3xl">
          <Image
            src={encodeURI("/images/sanza hand electrode 01.jpg")}
            alt={t("welcomeImageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 38vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: In-room layer (client experience) ────────────────────────── */
function SlideExperience() {
  const t = useTranslations("Home");

  return (
    <div className="home-band--partner-visual flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="grid min-h-0 flex-1 grid-rows-1 items-stretch gap-6 px-5 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-8">
        <div className="flex min-h-0 flex-col justify-center overflow-y-auto">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            {t("benefitLabelClients")}
          </p>
          <p className="mt-3 font-heading text-[clamp(1.05rem,2.6vw,1.85rem)] font-bold leading-[1.15] tracking-tight text-[var(--text)]">
            {t("twoPathsTitle")}
          </p>
          <div className="mt-4 text-[clamp(0.8rem,1.35vw,1rem)] leading-relaxed text-[var(--muted)]">
            {t.rich("clientExperienceBody", richParts.default)}
          </div>
        </div>
        <div className="relative min-h-[200px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-[var(--border)] sm:min-h-[240px] lg:min-h-0 lg:rounded-3xl">
          <Image
            src={encodeURI(IMAGE_PATHS.home.twoPathsA)}
            alt={t("twoPathsCard1ImageAlt")}
            fill
            className="object-cover"
            sizes="45vw"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: Three technologies ───────────────────────────────────────── */
function SlideThreeTech() {
  const t = useTranslations("HowItWorks");

  const items = [
    { icon: IMAGE_PATHS.pillars.pemf, label: t("block3Item1Title"), body: t("block3Item1Body") },
    { icon: IMAGE_PATHS.pillars.biofrequency, label: t("block3Item2Title"), body: t("block3Item2Body") },
    { icon: IMAGE_PATHS.pillars.light, label: t("block3Item3Title"), body: t("block3Item3Body") },
  ];

  return (
    <div className="home-band--system-visual flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="flex min-h-0 flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
        <h2 className="max-w-4xl font-heading text-[clamp(1.2rem,3.1vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
          {t.rich("block2Title", richParts.default)}
        </h2>
        <p className="mt-3 max-w-3xl text-[clamp(0.8rem,1.35vw,1rem)] leading-relaxed text-[var(--muted)] sm:mt-4">
          {t.rich("block2Lead", richParts.default)}
        </p>
        <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
          {items.map((item) => (
            <article
              key={item.label}
              className="flex min-h-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-[var(--shadow-card)] sm:rounded-3xl sm:p-5"
            >
              <div className="relative mx-auto mb-3 h-12 w-12 shrink-0 sm:mb-4 sm:h-14 sm:w-14">
                <Image src={item.icon} alt="" fill className="object-contain" sizes="56px" />
              </div>
              <h3 className="text-center font-heading text-[0.85rem] font-bold leading-snug text-[var(--text)] sm:text-[0.95rem]">
                {item.label}
              </h3>
              <p className="mt-2 flex-1 text-center text-[0.72rem] leading-relaxed text-[var(--muted)] sm:text-[0.8rem]">
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
    <div className="home-band--system-visual flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="grid min-h-0 flex-1 grid-rows-1 gap-5 px-5 py-8 sm:gap-6 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-8 lg:px-10 lg:py-8">
        <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-y-auto">
          <h2 className="font-heading text-[clamp(1.15rem,2.8vw,2rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
            {t.rich("systemTitle", richParts.default)}
          </h2>
          <p className="mt-3 text-[clamp(0.78rem,1.25vw,0.95rem)] leading-relaxed text-[var(--muted)] sm:mt-4">
            {t.rich("systemLead", richParts.default)}
          </p>
          <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
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

/* ─── Slide 6: Two paths (same card DNA as homepage) ────────────────────── */
function SlideTwoPaths() {
  const t = useTranslations("Home");

  const cards = [
    {
      title: "twoPathsCard1Title" as const,
      forPractice: "twoPathsCard1ForPractice" as const,
      forClients: "twoPathsCard1ForClients" as const,
      tag: "twoPathsCard1Tag" as const,
      variant: "grid" as const,
      photo: IMAGE_PATHS.home.twoPathsA,
      alt: "twoPathsCard1ImageAlt" as const,
    },
    {
      title: "twoPathsCard2Title" as const,
      forPractice: "twoPathsCard2ForPractice" as const,
      forClients: "twoPathsCard2ForClients" as const,
      tag: "twoPathsCard2Tag" as const,
      variant: "waves" as const,
      photo: IMAGE_PATHS.home.twoPathsB,
      alt: "twoPathsCard2ImageAlt" as const,
    },
  ];

  return (
    <div className="home-band--two-paths flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="flex min-h-0 flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[clamp(1.2rem,3.2vw,2.2rem)] font-bold leading-[1.06] tracking-tight text-[var(--text)]">
            {t("twoPathsTitle")}
          </h2>
          <p className="mt-2 text-[clamp(0.78rem,1.35vw,0.95rem)] leading-relaxed text-[var(--muted)] sm:mt-3">
            {t.rich("twoPathsLead", richParts.default)}
          </p>
        </div>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-2xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] sm:min-h-0 sm:rounded-3xl"
            >
              <Image
                src={encodeURI(c.photo)}
                alt={t(c.alt)}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="50vw"
              />
              <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
                <BrandAtmosphere variant={c.variant} />
              </div>
              <div
                className="absolute inset-x-0 bottom-0 z-[2] h-[72%]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,39,33,0) 0%, rgba(8,39,33,0.35) 35%, rgba(8,39,33,0.78) 100%)",
                }}
                aria-hidden
              />
              <div className="relative z-10 flex flex-col p-4 sm:p-6">
                <p className="mb-1.5 inline-flex w-max max-w-full items-center rounded-full border border-white/25 bg-[#082721]/55 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-md sm:text-[0.62rem]">
                  {t(c.tag)}
                </p>
                <h3 className="font-heading text-lg font-bold leading-tight text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:text-xl">
                  {t(c.title)}
                </h3>
                <div className="two-paths-micro-row mt-3">
                  <div className="two-paths-micro-cell">
                    <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/20 bg-white/[0.12] px-3 py-2 backdrop-blur-md sm:rounded-2xl sm:px-3.5 sm:py-2.5">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/75">
                        {t("twoPathsMicroPracticeLabel")}
                      </p>
                      <p className="mt-1.5 text-[0.72rem] leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] sm:text-[0.78rem]">
                        {t(c.forPractice)}
                      </p>
                    </div>
                  </div>
                  <div className="two-paths-micro-cell">
                    <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/20 bg-white/[0.12] px-3 py-2 backdrop-blur-md sm:rounded-2xl sm:px-3.5 sm:py-2.5">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/75">
                        {t("twoPathsMicroPatientsLabel")}
                      </p>
                      <p className="mt-1.5 text-[0.72rem] leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] sm:text-[0.78rem]">
                        {t(c.forClients)}
                      </p>
                    </div>
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

const OUTCOME_FIRST_FOUR = [
  { title: "outcome1Title" as const, clients: "outcome1ForClients" as const, practice: "outcome1ForPractice" as const, alt: "outcome1ImageAlt" as const, i: 0 },
  { title: "outcome2Title" as const, clients: "outcome2ForClients" as const, practice: "outcome2ForPractice" as const, alt: "outcome2ImageAlt" as const, i: 1 },
  { title: "outcome3Title" as const, clients: "outcome3ForClients" as const, practice: "outcome3ForPractice" as const, alt: "outcome3ImageAlt" as const, i: 2 },
  { title: "outcome4Title" as const, clients: "outcome4ForClients" as const, practice: "outcome4ForPractice" as const, alt: "outcome4ImageAlt" as const, i: 3 },
];

/* ─── Slide 7: Outcomes bento (4 tiles) ─────────────────────────────────── */
function SlideOutcomes() {
  const t = useTranslations("Home");

  return (
    <div className="home-band--outcomes-grid flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="flex min-h-0 flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[clamp(1.15rem,3vw,2rem)] font-bold leading-[1.06] tracking-tight text-[var(--text)]">
            {t("outcomesTitle")}
          </h2>
          <p className="mt-2 text-[clamp(0.78rem,1.3vw,0.92rem)] text-[var(--muted)] sm:mt-3">{t("outcomesLead")}</p>
        </div>
        <ul className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
          {OUTCOME_FIRST_FOUR.map((o) => (
            <li
              key={o.title}
              className="relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-[var(--border)] sm:min-h-[180px] sm:rounded-3xl"
            >
              <Image
                src={encodeURI(IMAGE_PATHS.home.outcomePhotos[o.i])}
                alt={t(o.alt)}
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 z-[1] h-[62%]"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(8,39,33,0.5) 45%, rgba(8,39,33,0.88) 100%)",
                }}
                aria-hidden
              />
              <div className="relative z-10 p-3 sm:p-4">
                <h3 className="font-heading text-[0.8rem] font-bold leading-tight text-white sm:text-[0.9rem]">
                  {t(o.title)}
                </h3>
                <p className="mt-1 line-clamp-2 text-[0.62rem] leading-snug text-white/85 sm:line-clamp-3 sm:text-[0.68rem]">
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

const OFFER_CARDS = [
  {
    title: "arrivalTitle" as const,
    desc: "arrivalDescription" as const,
    icon: IMAGE_PATHS.offers.arrival,
    minKey: "arrivalMin" as const,
    maxKey: "arrivalMax" as const,
  },
  {
    title: "decompTitle" as const,
    desc: "decompDescription" as const,
    icon: IMAGE_PATHS.offers.decompression,
    minKey: "decompMin" as const,
    maxKey: "decompMax" as const,
  },
  {
    title: "membershipTitle" as const,
    desc: "membershipDescription" as const,
    icon: IMAGE_PATHS.offers.membership,
    minKey: null,
    maxKey: null,
  },
  {
    title: "staffTitle" as const,
    desc: "staffDescription" as const,
    icon: IMAGE_PATHS.offers.staff,
    minKey: null,
    maxKey: null,
  },
];

/* ─── Slide 8: Offers / commercial formats ──────────────────────────────── */
function SlideOffers() {
  const t = useTranslations("Offers");

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[var(--bg)]">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="flex min-h-0 flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-8">
        <h2 className="max-w-3xl font-heading text-[clamp(1.15rem,2.9vw,1.95rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-3xl text-[clamp(0.75rem,1.25vw,0.9rem)] leading-relaxed text-[var(--muted)] sm:mt-3">
          {t.rich("lead", richParts.default)}
        </p>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
          {OFFER_CARDS.map((c) => (
            <article
              key={c.title}
              className="flex min-h-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-card)] sm:rounded-3xl sm:p-4"
            >
              <div className="relative mx-auto h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                <Image src={c.icon} alt="" fill className="object-contain" sizes="48px" />
              </div>
              <h3 className="mt-2 text-center font-heading text-[0.8rem] font-bold text-[var(--text)] sm:mt-3 sm:text-[0.88rem]">
                {t(c.title)}
              </h3>
              <p className="mt-2 flex-1 text-center text-[0.65rem] leading-relaxed text-[var(--muted)] sm:text-[0.72rem]">
                {c.minKey && c.maxKey
                  ? t(c.desc, { min: t(c.minKey), max: t(c.maxKey) })
                  : t.rich(c.desc, richParts.default)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const SECTOR_ROW = [
  { title: "sectorTherapistsTitle", teaser: "sectorTherapistsTeaser", icon: IMAGE_PATHS.sectors.therapists },
  { title: "sectorBeautyTitle", teaser: "sectorBeautyTeaser", icon: IMAGE_PATHS.sectors["beauty-cosmetic"] },
  { title: "sectorSportsTitle", teaser: "sectorSportsTeaser", icon: IMAGE_PATHS.sectors["sports-performance"] },
  { title: "sectorPhysioTitle", teaser: "sectorPhysioTeaser", icon: IMAGE_PATHS.sectors.physiotherapists },
  { title: "sectorDentistsTitle", teaser: "sectorDentistsTeaser", icon: IMAGE_PATHS.sectors.dentists },
  { title: "sectorClinicsTitle", teaser: "sectorClinicsTeaser", icon: IMAGE_PATHS.sectors.clinics },
] as const;

/* ─── Slide 9: Who it’s for ─────────────────────────────────────────────── */
function SlideProfessionals() {
  const t = useTranslations("Home");

  return (
    <div className="home-band--welcome flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="flex min-h-0 flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-8">
        <h2 className="max-w-3xl font-heading text-[clamp(1.1rem,2.8vw,1.9rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
          {t.rich("professionalsTitle", richParts.default)}
        </h2>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
          {SECTOR_ROW.map((s) => (
            <div
              key={s.title}
              className="flex min-h-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm sm:rounded-3xl sm:p-4"
            >
              <div className="relative mx-auto h-9 w-9 shrink-0 sm:h-10 sm:w-10">
                <Image src={s.icon} alt="" fill className="object-contain" sizes="40px" />
              </div>
              <h3 className="mt-2 text-center font-heading text-[0.72rem] font-bold text-[var(--text)] sm:text-[0.78rem]">
                {t(s.title)}
              </h3>
              <p className="mt-1 flex-1 text-center text-[0.62rem] leading-snug text-[var(--muted)] sm:text-[0.68rem]">
                {t(s.teaser)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center sm:mt-5">
          <Link href="/professionals" className="btn-outline inline-flex px-5 py-2 text-sm">
            {t("professionalsExploreApplications")}
          </Link>
        </div>
      </div>
    </div>
  );
}

const ROLLOUT_STEPS = [
  { n: 1, titleKey: "rolloutStep1Title", detailKey: "rolloutStep1Detail" },
  { n: 2, titleKey: "rolloutStep2Title", detailKey: "rolloutStep2Detail" },
  { n: 3, titleKey: "rolloutStep3Title", detailKey: "rolloutStep3Detail" },
  { n: 4, titleKey: "rolloutStep4Title", detailKey: "rolloutStep4Detail" },
] as const;

/* ─── Slide 10: Rollout ─────────────────────────────────────────────────── */
function SlideRollout() {
  const t = useTranslations("Home");

  return (
    <div className="home-band--sectors flex h-full w-full flex-col overflow-hidden">
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" />
      <div className="mx-auto flex min-h-0 w-full max-w-[720px] flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:py-12">
        <h2 className="text-center font-heading text-[clamp(1.1rem,2.8vw,1.85rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]">
          {t.rich("rolloutTitle", richParts.default)}
        </h2>
        <p className="mt-3 text-center text-[clamp(0.78rem,1.25vw,0.92rem)] leading-relaxed text-[var(--muted)] sm:mt-4">
          {t("rolloutLead")}
        </p>
        <p className="mb-2 mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)] sm:mb-2.5 sm:mt-8 sm:text-[0.7rem]">
          {t("rolloutWeeksIntro")}
        </p>
        <ol className="m-0 max-h-[min(50dvh,420px)] list-none space-y-2 overflow-y-auto p-0 sm:max-h-none sm:space-y-2.5">
          {ROLLOUT_STEPS.map((step) => (
            <li
              key={step.n}
              className="flex gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2.5 text-[0.72rem] shadow-sm sm:gap-3 sm:px-3.5 sm:py-3 sm:text-[0.8rem]"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[0.6rem] font-bold text-white sm:h-6 sm:w-6 sm:text-xs"
                aria-hidden
              >
                {step.n}
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-semibold leading-snug text-[var(--text)]">{t(step.titleKey)}</span>
                <span className="leading-snug text-[var(--muted)]">
                  {t.rich(step.detailKey, richParts.default)}
                </span>
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
          <Link href="/contact" className="btn-primary inline-flex px-5 py-2.5 text-sm">
            {t("stepsCtaContact")}
          </Link>
          <Link href="/pilot-program" className="btn-outline inline-flex px-5 py-2.5 text-sm">
            {t("stepsCtaPilot")}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 11: CTA (offers-style hero photography) ─────────────────────── */
function SlideClosing() {
  const t = useTranslations("HowItWorks");
  const tHome = useTranslations("Home");

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
      <DeckLogo className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6" invert />
      <div className="relative z-10 px-5 pb-10 pt-16 sm:px-10 sm:pb-12">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80">{t("ctaKicker")}</p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(1.2rem,3.2vw,2.35rem)] font-bold leading-[1.06] tracking-tight text-white">
          {t.rich("ctaTitle", richParts.onDark)}
        </h2>
        <p className="mt-4 max-w-2xl text-[clamp(0.82rem,1.45vw,1.05rem)] leading-relaxed text-white/88">
          {t.rich("ctaBody", richParts.onDark)}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pilot-program" className="btn-primary inline-flex px-6 py-3">
            {t("ctaBookDemo")}
          </Link>
          <Link href="/offers" className="btn-ghost-white inline-flex px-6 py-3">
            {tHome("learnMore")}
          </Link>
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
  SlideTwoPaths,
  SlideOutcomes,
  SlideOffers,
  SlideProfessionals,
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
