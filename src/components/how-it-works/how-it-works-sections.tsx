import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "@/components/fade-up";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { IMAGE_PATHS } from "@/lib/public-images";
import { richParts } from "@/lib/i18n-rich";

/* ─── Icon set ──────────────────────────────────────────────────── */
function PemfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="2" />
      <path d="M7.5 7.5a6 6 0 0 0 0 9" />
      <path d="M16.5 7.5a6 6 0 0 1 0 9" />
      <path d="M4.5 4.5a10 10 0 0 0 0 15" />
      <path d="M19.5 4.5a10 10 0 0 1 0 15" />
    </svg>
  );
}
function BioIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M3 12h2l2-6 3 12 3-9 2 3h3" />
      <circle cx="20" cy="12" r="1.5" />
    </svg>
  );
}
function LaserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      <path d="M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
    </svg>
  );
}

/* ─── Outcome icons ──────────────────────────────────────────────── */
function OutcomeIcon({ index }: { index: number }) {
  const icons = [
    // calm / less stress
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>,
    // steady energy
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>,
    // local release / location
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>,
    // softer landing / leaf
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2 22 L12 12" />
      <path d="M12 2c0 0 10 4 10 10s-10 10-10 10V2z" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

const OUTCOME_BORDER_COLORS = [
  "var(--brand)",
  "var(--brand-secondary)",
  "var(--brand-deep)",
  "var(--brand)",
] as const;

/* ─── Equipment product cards ────────────────────────────────────── */
const EQUIPMENT = [
  {
    src: IMAGE_PATHS.home.productGenerator,
    label: "Generator",
    className: "object-contain object-bottom",
  },
  {
    src: IMAGE_PATHS.home.productMat,
    label: "MAT",
    className: "object-cover object-center",
  },
  {
    src: IMAGE_PATHS.home.productPad,
    label: "PAD",
    className: "object-cover object-center",
  },
  {
    src: IMAGE_PATHS.home.productPen,
    label: "PEN",
    className: "object-cover object-center",
  },
] as const;

/* ══════════════════════════════════════════════════════════════════ */
export async function HowItWorksSections() {
  const t = await getTranslations("HowItWorks");

  const block5Items = t.raw("block5Items") as string[];
  const block6SetupItems = t.raw("block6SetupItems") as string[];
  const trustCards = t.raw("trustCards") as { title: string; body: string }[];

  const techItems = [
    {
      stepLabel: t("tech1StepLabel"),
      kicker: t("tech1Kicker"),
      title: t("tech1Title"),
      whatIsLabel: t("tech1WhatIsLabel"),
      whatIs: t.rich("tech1WhatIs", richParts.default),
      scienceLabel: t("tech1ScienceLabel"),
      science: t.rich("tech1Science", richParts.default),
      atmosphere: "pulse" as const,
      imageRight: false,
      accent: "var(--brand)",
    },
    {
      stepLabel: t("tech2StepLabel"),
      kicker: t("tech2Kicker"),
      title: t("tech2Title"),
      whatIsLabel: t("tech2WhatIsLabel"),
      whatIs: t.rich("tech2WhatIs", richParts.default),
      scienceLabel: t("tech2ScienceLabel"),
      science: t.rich("tech2Science", richParts.default),
      atmosphere: "waves" as const,
      imageRight: true,
      accent: "var(--brand-secondary)",
    },
    {
      stepLabel: t("tech3StepLabel"),
      kicker: t("tech3Kicker"),
      title: t("tech3Title"),
      whatIsLabel: t("tech3WhatIsLabel"),
      whatIs: t.rich("tech3WhatIs", richParts.default),
      scienceLabel: t("tech3ScienceLabel"),
      science: t.rich("tech3Science", richParts.default),
      atmosphere: "lattice" as const,
      imageRight: false,
      accent: "var(--brand-deep)",
    },
  ] as const;

  return (
    <>
      {/* ══ BLOCK 1: Intro — welcome band with image ═══════════════════ */}
      <section
        id="hiw-intro"
        className="home-band-full home-band--welcome py-20 sm:py-24 md:py-28"
        aria-labelledby="hiw-intro-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-20">

            {/* Text column */}
            <div>
              <FadeUp>
                <h2
                  id="hiw-intro-heading"
                  className="font-heading text-[clamp(2rem,4.4vw,2.95rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)] [&_strong]:font-bold"
                >
                  {t.rich("introP1Head", richParts.default)}
                </h2>
                <div className="mt-6 space-y-6 text-lg leading-[1.65] text-[var(--muted)] md:text-[1.125rem] md:leading-[1.7] max-w-[68ch]">
                  {(
                    [
                      ["introP1Rest", true] as const,
                      ["introP2", false] as const,
                      ["introP3", false] as const,
                      ["introP4", false] as const,
                      ["introP5a", false] as const,
                      ["introP5b", false] as const,
                      ["introP6", false] as const,
                    ] as const
                  ).map(([key, lead]) => (
                    <p
                      key={key}
                      className={
                        lead
                          ? "text-[var(--text)] font-medium text-xl leading-snug md:text-[1.35rem] md:leading-snug"
                          : undefined
                      }
                    >
                      {t.rich(key, richParts.default)}
                    </p>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Image column */}
            <FadeUp delay={1} className="relative lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
                {/* Atmosphere overlay */}
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/sanza%20comfort%20routines%2001.png"
                    alt={t("introImageAlt")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Subtle green tint at top */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-32"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(14,61,52,0.18) 0%, transparent 100%)",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ BLOCK 2: Three Technologies — DARK pillar band ═════════════ */}
      <section
        id="hiw-three-tech"
        className="home-band-full home-band--pillars py-20 md:py-28 lg:py-32"
        aria-labelledby="hiw-three-tech-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-sm">
              {t("block2Kicker")}
            </p>
            <h2
              id="hiw-three-tech-heading"
              className="font-heading text-[clamp(2.1rem,5.2vw,3.65rem)] font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.3)]"
            >
              {t("block2Title")}
            </h2>
            <p className="mx-auto mt-8 max-w-[65ch] text-lg leading-[1.65] text-white/85 md:text-xl md:leading-[1.65]">
              {t.rich("block2Lead", richParts.onDark)}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══ BLOCK 3: Quick overview — two-paths warm band ═══════════════ */}
      <section
        id="hiw-overview"
        className="home-band-full home-band--two-paths py-16 md:py-20 lg:py-24"
        aria-labelledby="hiw-overview-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="w-full max-w-none">
            <h2
              id="hiw-overview-heading"
              className="font-heading text-[clamp(1.75rem,3.9vw,2.55rem)] font-bold leading-[1.12] tracking-tight text-[var(--text)] [text-wrap:balance]"
            >
              {t.rich("block3Title", richParts.default)}
            </h2>
            <p className="mt-5 max-w-[65ch] text-lg leading-[1.65] text-[var(--muted)] md:text-xl md:leading-[1.65]">
              {t.rich("block3Lead", richParts.default)}
            </p>
          </FadeUp>

          <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: t("block3Item1Title"),
                body: t.rich("block3Item1Body", richParts.default),
                icon: <PemfIcon />,
                delay: 1 as const,
                step: "01",
                color: "var(--brand)",
              },
              {
                title: t("block3Item2Title"),
                body: t.rich("block3Item2Body", richParts.default),
                icon: <BioIcon />,
                delay: 2 as const,
                step: "02",
                color: "var(--brand-secondary)",
              },
              {
                title: t("block3Item3Title"),
                body: t.rich("block3Item3Body", richParts.default),
                icon: <LaserIcon />,
                delay: 3 as const,
                step: "03",
                color: "var(--brand-deep)",
              },
            ].map((item) => (
              <FadeUp key={item.step} delay={item.delay}>
                <div className="card-brand outcome-shimmer flex h-full flex-col gap-4 p-7">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: item.color }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="font-heading text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                      style={{ color: item.color }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--text)] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-[1.65] text-[var(--muted)] md:text-[1.0625rem]">
                    {item.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={4} className="mt-14 w-full max-w-none">
            <p className="border-t border-[var(--border)] pt-10 text-lg font-medium leading-[1.65] text-[var(--text)] md:max-w-[65ch] md:text-xl">
              {t("block3Closing")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══ BLOCK 4: Technology deep-dives — system-visual light band ══ */}
      <section
        id="hiw-tech-details"
        className="home-band-full home-band--system-visual py-16 md:py-20 lg:py-24"
        aria-labelledby="hiw-tech-details-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="w-full max-w-none pb-14 md:pb-16">
            <h2
              id="hiw-tech-details-heading"
              className="font-heading text-[clamp(1.75rem,3.9vw,2.5rem)] font-bold leading-[1.12] tracking-tight text-[var(--text)] [text-wrap:balance]"
            >
              {t.rich("block4Title", richParts.default)}
            </h2>
            <p className="mt-5 max-w-[65ch] text-lg leading-[1.65] text-[var(--muted)] md:text-xl md:leading-[1.65] [&_strong]:font-semibold [&_strong]:text-[var(--text)]">
              {t.rich("block4Lead", richParts.default)}
            </p>
          </FadeUp>

          <div className="space-y-0">
            {techItems.map((tech, i) => (
              <FadeUp key={tech.stepLabel} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className={`grid items-center gap-10 border-t border-[var(--border)] py-16 md:py-20 md:gap-16 lg:grid-cols-2 ${
                    tech.imageRight ? "" : "lg:[&>*:first-child]:order-last"
                  }`}
                >
                  {/* Atmosphere graphic panel */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
                    <BrandAtmosphere variant={tech.atmosphere} />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="mb-2 font-heading text-base font-semibold tracking-tight text-[var(--text)] md:text-lg">
                        {tech.stepLabel}
                      </p>
                      <p
                        className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-[0.8125rem]"
                        style={{ color: tech.accent }}
                      >
                        {tech.kicker}
                      </p>
                      <h3 className="font-heading text-[clamp(1.45rem,3.1vw,2.15rem)] font-bold leading-snug tracking-tight text-[var(--text)]">
                        {tech.title}
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {/* What it is */}
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] md:p-7">
                        <p
                          className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-[0.8125rem]"
                          style={{ color: tech.accent }}
                        >
                          {tech.whatIsLabel}
                        </p>
                        <p className="text-base leading-[1.65] text-[var(--text)] md:text-[1.0625rem] [&_strong]:font-semibold">
                          {tech.whatIs}
                        </p>
                      </div>

                      {/* Science behind it */}
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-7">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[0.8125rem]">
                          {tech.scienceLabel}
                        </p>
                        <p className="text-base leading-[1.65] text-[var(--muted)] md:text-[1.0625rem] [&_strong]:font-semibold [&_strong]:text-[var(--text)]">
                          {tech.science}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={2} className="mt-14 w-full max-w-none border-t border-[var(--border)] pt-11 md:mt-16 md:pt-12">
            <p className="max-w-[65ch] text-lg font-medium leading-[1.65] text-[var(--text)] md:text-xl [&_strong]:font-semibold">
              {t.rich("block4Closing", richParts.default)}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══ BLOCK 5: Outcomes — dark green pillars band (lead + notice + cards) ══ */}
      <section
        id="hiw-outcomes"
        className="home-band-full home-band--pillars py-16 md:py-20 lg:py-24"
        aria-labelledby="hiw-outcomes-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="mx-auto max-w-[65ch] text-center">
            <p
              id="hiw-outcomes-heading"
              className="font-heading text-[clamp(1.55rem,3.2vw,2.15rem)] font-bold leading-snug tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.3)]"
            >
              {t.rich("block5Lead", richParts.onDark)}
            </p>
            <p className="mt-6 text-lg leading-[1.65] text-white/85 md:text-xl md:leading-[1.65]">
              {t.rich("block5SubLead", richParts.onDark)}
            </p>
          </FadeUp>

          <FadeUp delay={1} className="mt-12">
            <p
              id="hiw-outcomes-notice-heading"
              className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-sm"
            >
              {t("block5WhatNoticeTitle")}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {block5Items.map((item, i) => {
                const parts = item.split(" — ");
                const headline = parts[0] ?? item;
                const detail = parts[1] ?? "";
                return (
                  <FadeUp key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                    <div
                      className="outcome-shimmer card-brand flex h-full flex-col gap-4 !bg-white p-7 text-[var(--text)] shadow-[var(--shadow-card)]"
                    >
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                        style={{ background: OUTCOME_BORDER_COLORS[i] }}
                      >
                        <OutcomeIcon index={i} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[var(--text)] md:text-xl">
                        {headline}
                      </h3>
                      {detail && (
                        <p className="text-base leading-[1.6] text-[var(--muted)]">{detail}</p>
                      )}
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ BLOCK 6: System setup — partner-visual warm band ═══════════ */}
      <section
        id="hiw-system"
        className="home-band-full home-band--partner-visual py-16 md:py-20 lg:py-24"
        aria-labelledby="hiw-system-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Section header */}
          <FadeUp>
            <h2
              id="hiw-system-heading"
              className="font-heading text-[clamp(1.75rem,3.85vw,2.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
            >
              {t("block6Title")}
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 lg:items-start">
            {/* Left: Equipment list + setup items */}
            <div className="space-y-8">
              <FadeUp delay={1}>
                <p className="mb-5 text-base font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {t.rich("block6SetupLabel", richParts.preserveBrandCase)}
                </p>
                <ul className="space-y-4">
                  {block6SetupItems.map((item, i) => {
                    const parts = item.split(" — ");
                    const name = parts[0] ?? item;
                    const desc = parts[1] ?? "";
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[var(--shadow-card)]"
                      >
                        <div
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                          style={{ background: "var(--brand)" }}
                          aria-hidden
                        >
                          {i + 1}
                        </div>
                        <div>
                          <span className="text-base font-semibold text-[var(--text)] md:text-[1.0625rem]">{name}</span>
                          {desc && (
                            <span className="text-base text-[var(--muted)] md:text-[1.0625rem]"> — {desc}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </FadeUp>
            </div>

            {/* Right: Product photo grid */}
            <FadeUp delay={1}>
              <div className="grid grid-cols-2 gap-4">
                {EQUIPMENT.map((eq) => (
                  <div
                    key={eq.label}
                    className="card-brand group relative aspect-square overflow-hidden"
                  >
                    <Image
                      src={eq.src}
                      alt={`sanza ${eq.label}`}
                      fill
                      className={`transition-transform duration-500 group-hover:scale-105 ${eq.className}`}
                      sizes="(max-width: 768px) 45vw, 22vw"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 px-3 py-2"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(14,61,52,0.75) 0%, transparent 100%)",
                      }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
                        {eq.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ BLOCK 7: Manufacturer trust — factual, brief ═════════════ */}
      <section
        id="hiw-manufacturer"
        className="home-band-full home-band--welcome py-16 md:py-20 lg:py-24"
        aria-labelledby="hiw-manufacturer-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:items-start">
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)] sm:text-sm">
                {t("trustKicker")}
              </p>
              <h2
                id="hiw-manufacturer-heading"
                className="font-heading text-[clamp(1.75rem,3.85vw,2.6rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
              >
                {t.rich("trustTitle", richParts.default)}
              </h2>
              <p className="mt-5 max-w-[58ch] text-lg leading-[1.65] text-[var(--muted)] md:text-xl md:leading-[1.65]">
                {t.rich("trustLead", richParts.default)}
              </p>
              <a
                href="https://www.sanza.eu/home-main-de"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-btn)] border border-[var(--border)] bg-white/70 px-5 text-sm font-semibold text-[var(--brand-deep)] transition hover:border-[var(--brand)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                {t("trustSourceLabel")}
              </a>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustCards.map((card, index) => (
                <FadeUp key={card.title} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                  <article className="card-brand h-full bg-white/80 p-6">
                    <p className="mb-3 font-heading text-lg font-bold leading-snug text-[var(--text)]">
                      {card.title}
                    </p>
                    <p className="text-base leading-[1.65] text-[var(--muted)]">
                      {card.body}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
