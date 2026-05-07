import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BrandArc } from "@/components/brand-arc";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { FadeUp } from "@/components/fade-up";
import { RichLine } from "@/components/rich-line";
import { CampaignFloatingCta } from "@/components/campaign/campaign-floating-cta";
import { IMAGE_PATHS } from "@/lib/public-images";
import type { CampaignPageContent } from "@/types/campaign-page";

type Props = { content: CampaignPageContent };

/* ── Inline icon set (currentColor) ─────────────────────────────── */

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const DEMO_OPTIONS = (
  message: string,
  professionalCategory: NonNullable<CampaignPageContent["contactCategory"]> = "other",
) => ({
  professionalCategory,
  message,
});

/* ── Image rotation pools ───────────────────────────────────────── */

const FITS_IMAGES = [
  "/images/sanza calmer arrivals.jpg",
  "/images/sanza a softer landing.jpg",
  "/images/sanza comfort routines.jpg",
  "/images/sanza focus and presence.jpg",
];

const WHAT_CHANGES_IMAGES = {
  patients: "/images/sanza, less wired.jpg",
  practice: "/images/sanza a softer landing.jpg",
};

const PROBLEM_IMAGE = "/images/sanza, less wired.jpg";

const SOCIAL_PROOF_BG = "/images/campaign/quote-background.jpg";

/* ──────────────────────────────────────────────────────────────────
   Shared layout for the 15 Latvia-outreach landing pages.
   Alternates dark and light bands for visual rhythm; every section
   carries imagery; cards use grid stretch + flex column for equal heights.
   ────────────────────────────────────────────────────────────────── */

export async function CampaignLanding({ content }: Props) {
  const heroTextAlign = content.heroTextAlign ?? "right";
  const heroCopyClass =
    heroTextAlign === "left"
      ? "mr-auto w-full max-w-xl text-left sm:max-w-2xl"
      : "ml-auto w-full max-w-xl text-right sm:max-w-2xl";
  const heroCtaClass =
    heroTextAlign === "left"
      ? "flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-4"
      : "flex flex-col items-stretch justify-end gap-3 sm:flex-row sm:items-center sm:gap-4";
  const heroEyebrowClass =
    heroTextAlign === "left"
      ? "campaign-eyebrow campaign-eyebrow--left inline-block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/85"
      : "campaign-eyebrow inline-block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/85";
  const heroOverlayClass =
    heroTextAlign === "left"
      ? "home-hero-overlay home-hero-overlay--left pointer-events-none absolute inset-0"
      : "home-hero-overlay pointer-events-none absolute inset-0";
  const fitsImages = content.fitsImages ?? FITS_IMAGES;

  return (
    <div className="campaign-page-root flex flex-col gap-0">
      {/* ═════════ HERO ═════════ */}
      <section
        className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
        aria-labelledby="campaign-hero-heading"
      >
        <div className="relative min-h-[min(86dvh,820px)] lg:min-h-[min(82dvh,780px)]">
          <div className="absolute inset-0">
            {content.heroImage ? (
              <Image
                src={content.heroImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            ) : (
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay muted loop playsInline preload="auto"
                poster={IMAGE_PATHS.hero.backgroundPhoto}
                aria-hidden
              >
                <source src={IMAGE_PATHS.hero.backgroundVideo} type="video/mp4" />
              </video>
            )}
          </div>

          <div className={heroOverlayClass} aria-hidden />

          <div className="arc-watermark" aria-hidden>
            <div className="campaign-arc-drift absolute -right-32 -top-32">
              <BrandArc color="#FFFFFF" size={760} className="opacity-[0.07]" />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[min(86dvh,820px)] max-w-[1200px] flex-col justify-end px-4 pb-28 pt-20 sm:px-6 sm:pb-32 sm:pt-24 md:px-8 lg:min-h-[min(82dvh,780px)] lg:pb-32 lg:pt-28 lg:px-10">
            <div className={heroCopyClass}>
              <FadeUp immediate delay={1}>
                <p className={heroEyebrowClass}>
                  {content.heroKicker}
                </p>
              </FadeUp>
              <FadeUp immediate delay={2} className="mt-4">
                <h1
                  id="campaign-hero-heading"
                  className="font-heading text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-tight text-white whitespace-pre-line [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  <RichLine text={content.heroHeadline} variant="onDark" />
                </h1>
              </FadeUp>
              <FadeUp immediate delay={3} className="mt-7">
                <p className="text-lg leading-relaxed text-white/92 [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]">
                  <RichLine text={content.heroSubhead} variant="onDark" />
                </p>
              </FadeUp>

              <FadeUp immediate delay={5} className="mt-10">
                <div className={heroCtaClass}>
                  <ContactDrawerTrigger
                    label={content.heroCtaPrimary}
                    options={DEMO_OPTIONS(content.demoRequestMessage, content.contactCategory)}
                    className="btn-primary group inline-flex justify-center"
                  >
                    {content.heroCtaPrimary}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </ContactDrawerTrigger>
                  {content.heroCtaSecondary ? (
                    <Link href="/how-it-works" className="btn-ghost-white inline-flex justify-center">
                      {content.heroCtaSecondary}
                    </Link>
                  ) : null}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ STAT STRIP ═════════ */}
      <section
        className="campaign-stat-strip relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-12 sm:py-14"
        aria-label="Quick facts"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <ul className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {content.quickStats.map((stat, i) => (
              <li key={i} className="px-4 py-2 sm:px-6">
                <FadeUp delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <span className="font-heading text-[clamp(2.2rem,4.8vw,3.2rem)] font-bold leading-none tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
                      {stat.value}
                    </span>
                    <span className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]/95">
                      {stat.label}
                    </span>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═════════ PROBLEM (light, image collage) ═════════ */}
      <section
        className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-24 sm:py-28"
        aria-labelledby="campaign-problem-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
            <div>
              <FadeUp>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-strong)]">
                  {content.problemEyebrow}
                </p>
              </FadeUp>
              <FadeUp delay={1}>
                <h2
                  id="campaign-problem-heading"
                  className="mt-3 font-heading text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
                >
                  {content.problemTitle}
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="mt-6 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  <RichLine text={content.problemBody} />
                </p>
              </FadeUp>
            </div>

            {/* Problem image */}
            <FadeUp delay={2} className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
                <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
                  <Image
                    src={content.problemImage ?? PROBLEM_IMAGE}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--brand-deep)]/30 via-transparent to-[var(--brand-secondary)]/15"
                    aria-hidden
                  />
                </div>

              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═════════ SOLUTION (dark) ═════════ */}
      <section
        className="home-band-full home-band--quotes relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-24 sm:py-28 md:py-32"
        aria-labelledby="campaign-solution-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Header — full-width centred */}
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {content.solutionEyebrow}
            </p>
            <h2
              id="campaign-solution-heading"
              className="mt-3 font-heading text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.4)]"
            >
              <RichLine text={content.solutionTitle} variant="onDark" />
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              <RichLine text={content.solutionBody} variant="onDark" />
            </p>
          </FadeUp>

          {/* 3 spec cards — horizontal, full-width, generous padding */}
          <FadeUp delay={2}>
            <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
              {content.solutionSpecs.map((spec, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm"
                >
                  {/* Icon */}
                  <span
                    aria-hidden
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-white"
                  >
                    {i === 0 && (
                      /* PEMF — pulse / electromagnetic wave */
                      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                        <path d="M2 14h4l3-8 4 16 3-10 3 6 3-4h4" />
                      </svg>
                    )}
                    {i === 1 && (
                      /* Chronobiological — clock with rhythm arc */
                      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                        <circle cx="14" cy="14" r="10" />
                        <path d="M14 8v6l4 2" />
                        <path d="M5 5c2.4-2 5.5-3 9-3" strokeOpacity={0.45} />
                        <path d="M23 5c2 2.4 3 5.5 3 9" strokeOpacity={0.45} />
                      </svg>
                    )}
                    {i === 2 && (
                      /* Modular — layered grid */
                      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                        <rect x="3" y="3" width="9" height="9" rx="2" />
                        <rect x="16" y="3" width="9" height="9" rx="2" />
                        <rect x="3" y="16" width="9" height="9" rx="2" />
                        <rect x="16" y="16" width="9" height="9" rx="2" />
                      </svg>
                    )}
                  </span>
                  {/* Text */}
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/50">
                      {spec.title}
                    </p>
                    <p className="mt-3 text-[1rem] leading-relaxed text-white/90">{spec.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ HOW IT FITS (light, equal-height image cards) ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[var(--bg)] py-24 sm:py-28"
        aria-labelledby="campaign-fits-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-strong)]">
              {content.fitsEyebrow}
            </p>
            <h2
              id="campaign-fits-heading"
              className="mt-3 font-heading text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
            >
              {content.fitsTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <RichLine text={content.fitsLead} />
            </p>
          </FadeUp>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-7" style={{ gridAutoRows: "1fr" }}>
            {content.fitsItems.map((item, idx) => (
              <li key={idx} className="h-full">
                <FadeUp delay={Math.min(idx + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6} className="h-full">
                  <article className="campaign-card group flex h-full min-h-[320px] flex-col overflow-hidden">
                    {/* Header image strip */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={fitsImages[idx % fitsImages.length]}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
                        aria-hidden
                      />
                      <span
                        aria-hidden
                        className="absolute left-5 top-4 font-heading text-[2.6rem] font-bold leading-none text-white/95 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="absolute bottom-4 left-5 right-5 font-heading text-lg font-semibold leading-snug text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.6)]">
                        <RichLine text={item.title} variant="onDark" />
                      </h3>
                    </div>
                    {/* Body */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="leading-relaxed text-[var(--muted)]">
                        <RichLine text={item.body} />
                      </p>
                    </div>
                  </article>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═════════ WHAT CHANGES (dark, two equal cards w/ header images) ═════════ */}
      <section
        className="campaign-no-grid home-band-full home-band--pillars relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-24 sm:py-28"
        aria-labelledby="campaign-changes-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              {content.whatChangesEyebrow}
            </p>
            <h2
              id="campaign-changes-heading"
              className="mt-3 font-heading text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.4)]"
            >
              {content.whatChangesTitle}
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-7 md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
            {[
              {
                title: content.whatChangesPatientsTitle,
                items: content.whatChangesPatientsItems,
                image: content.whatChangesPatientsImage ?? WHAT_CHANGES_IMAGES.patients,
                imagePosition: content.whatChangesPatientsImagePosition,
                accent: "from-[var(--brand-secondary)]/45 to-transparent",
              },
              {
                title: content.whatChangesPracticeTitle,
                items: content.whatChangesPracticeItems,
                image: content.whatChangesPracticeImage ?? WHAT_CHANGES_IMAGES.practice,
                imagePosition: content.whatChangesPracticeImagePosition,
                accent: "from-[var(--brand)]/55 to-transparent",
              },
            ].map((col, i) => (
              <FadeUp key={i} delay={(i + 1) as 1 | 2} className="h-full">
                <article className="group flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] shadow-2xl backdrop-blur-md">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={col.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      style={col.imagePosition ? { objectPosition: col.imagePosition } : undefined}
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${col.accent}`}
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#082721]/85 via-[#082721]/30 to-transparent"
                      aria-hidden
                    />
                    <p className="absolute bottom-5 left-6 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/95">
                      {col.title}
                    </p>
                  </div>
                  <ul className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed text-white/90">
                        <span
                          aria-hidden
                          className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/40 text-[var(--brand-secondary)] ring-1 ring-white/20"
                        >
                          <IconCheck />
                        </span>
                        <span>
                          <RichLine text={item} variant="onDark" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ SOCIAL PROOF (light w/ image-bg quote panel) ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[var(--bg)] py-24 sm:py-28"
        aria-label={content.socialProofLabel}
      >
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <article className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
              <div className="absolute inset-0">
                <Image
                  src={SOCIAL_PROOF_BG}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "linear-gradient(115deg, rgba(8,39,33,0.92) 0%, rgba(14,61,52,0.78) 45%, rgba(165,133,146,0.55) 100%)",
                  }}
                />
              </div>
              <div className="relative grid gap-8 px-6 py-14 sm:px-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:px-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                    {content.socialProofLabel}
                  </p>
                  <blockquote className="mt-5 font-heading text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-snug text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
                    “<RichLine text={content.socialProofQuote} variant="onDark" />”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-white/75">
                    — {content.socialProofAttribution}
                  </figcaption>
                </div>
                {/* Mini stat block */}
                <div className="hidden shrink-0 grid-cols-1 gap-4 md:grid">
                  {content.quickStats.slice(0, 2).map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/20 bg-white/8 px-5 py-4 text-center backdrop-blur-md"
                    >
                      <div className="font-heading text-2xl font-bold text-white">{s.value}</div>
                      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-white/75">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ DEMO HANDOFF (light, conversion reassurance) ═════════ */}
      <section
        className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-20 sm:py-24"
        aria-labelledby="campaign-demo-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14">
            <FadeUp>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-strong)]">
                  {content.demoStepsEyebrow}
                </p>
                <h2
                  id="campaign-demo-heading"
                  className="mt-3 font-heading text-[clamp(1.85rem,3.8vw,2.55rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
                >
                  <RichLine text={content.demoStepsTitle} />
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  <RichLine text={content.demoStepsLead} />
                </p>
                <div className="mt-8">
                  <ContactDrawerTrigger
                    label={content.heroCtaPrimary}
                    options={DEMO_OPTIONS(content.demoRequestMessage, content.contactCategory)}
                    className="btn-primary group inline-flex justify-center"
                  />
                </div>
              </div>
            </FadeUp>

            <ol className="grid gap-4 sm:grid-cols-3 lg:gap-5">
              {content.demoSteps.map((step, i) => (
                <li key={i} className="h-full">
                  <FadeUp delay={Math.min(i + 1, 3) as 1 | 2 | 3} className="h-full">
                    <article className="campaign-card flex h-full flex-col p-6 sm:p-7">
                      <span className="campaign-step-num" aria-hidden>
                        {i + 1}
                      </span>
                      <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-[var(--text)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        <RichLine text={step.body} />
                      </p>
                    </article>
                  </FadeUp>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═════════ FINAL CTA (dark, glow + product silhouette) ═════════ */}
      <section
        className="home-band--cta relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-28 sm:py-32"
        aria-labelledby="campaign-final-cta-heading"
      >
        <div className="campaign-cta-glow" aria-hidden />
        <div className="arc-watermark" aria-hidden>
          <div className="campaign-arc-drift absolute -left-32 -bottom-32">
            <BrandArc color="#FFFFFF" size={680} className="opacity-[0.07]" />
          </div>
        </div>

        {/* Floating product silhouette — right side, faint */}
        <div
          className="pointer-events-none absolute right-[-6rem] top-1/2 hidden -translate-y-1/2 opacity-[0.18] lg:block"
          aria-hidden
        >
          <Image
            src="/images/sanza_generator_611_shadow.png"
            alt=""
            width={420}
            height={420}
            className="select-none"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <h2
              id="campaign-final-cta-heading"
              className="font-heading text-[clamp(2rem,4.6vw,3.1rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
            >
              <RichLine text={content.finalCtaTitle} variant="onDark" />
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
              <RichLine text={content.finalCtaBody} variant="onDark" />
            </p>
          </FadeUp>

          <FadeUp delay={2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ContactDrawerTrigger
                label={content.finalCtaPrimary}
                options={DEMO_OPTIONS(content.demoRequestMessage, content.contactCategory)}
                className="btn-secondary group inline-flex justify-center"
              >
                {content.finalCtaPrimary}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <IconArrow />
                </span>
              </ContactDrawerTrigger>
              {content.finalCtaSecondary ? (
                <Link href="/how-it-works" className="btn-ghost-white inline-flex justify-center">
                  {content.finalCtaSecondary}
                </Link>
              ) : null}
            </div>
          </FadeUp>

        </div>
      </section>

      <CampaignFloatingCta
        label={content.heroCtaPrimary}
        options={DEMO_OPTIONS(content.demoRequestMessage, content.contactCategory)}
      />
    </div>
  );
}
