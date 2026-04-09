import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeUp } from "@/components/fade-up";
import { IMAGE_PATHS } from "@/lib/public-images";
import { richParts } from "@/lib/i18n-rich";
import { RoiCalculator } from "@/components/offers/roi-calculator";

/* ─── Format overview icons ──────────────────────────────────────── */
function ArrivalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
      <circle cx="12" cy="12" r="4" />
      <path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
function DecompIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M3 12 Q6 8 9 12 T15 12 T21 12" />
      <path d="M3 17 Q6 13 9 17 T15 17 T21 17" />
      <path d="M3 7 Q6 3 9 7 T15 7 T21 7" />
    </svg>
  );
}
function MembershipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
function StaffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const FORMAT_ACCENT_COLORS = [
  "var(--brand)",
  "var(--brand-secondary)",
  "var(--brand-deep)",
  "var(--brand)",
] as const;

/* ══════════════════════════════════════════════════════════════════ */
export async function OffersSections() {
  const t = await getTranslations("Offers");

  const whatIsLabel = t("formatCardWhatIsLabel");
  const positionLabel = t("formatCardPositionLabel");

  const formatCards = [
    {
      step: "01",
      icon: <ArrivalIcon />,
      title: t("format01Title"),
      whatIs: t.rich("format01WhatIs", richParts.default),
      position: t("format01Position"),
      accent: FORMAT_ACCENT_COLORS[0],
    },
    {
      step: "02",
      icon: <DecompIcon />,
      title: t("format02Title"),
      whatIs: t.rich("format02WhatIs", richParts.default),
      position: t("format02Position"),
      accent: FORMAT_ACCENT_COLORS[1],
    },
    {
      step: "03",
      icon: <MembershipIcon />,
      title: t("format03Title"),
      whatIs: t.rich("format03WhatIs", richParts.default),
      position: t("format03Position"),
      accent: FORMAT_ACCENT_COLORS[2],
    },
    {
      step: "04",
      icon: <StaffIcon />,
      title: t("format04Title"),
      whatIs: t.rich("format04WhatIs", richParts.default),
      position: t("format04Position"),
      accent: FORMAT_ACCENT_COLORS[3],
    },
  ] as const;

  return (
    <>
      {/* ══ BLOCK 1: Intro — welcome band ═════════════════════════════ */}
      <section
        id="offers-intro"
        className="home-band-full home-band--welcome py-16 sm:py-20 md:py-24"
        aria-labelledby="offers-intro-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-x-20 lg:gap-y-0">

            {/* Text column */}
            <div>
              <FadeUp>
                <h2
                  id="offers-intro-heading"
                  className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]"
                >
                  {t("overviewTitle")}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-[var(--muted)] md:text-[1.05rem]">
                  <p className="text-[var(--text)] font-medium leading-relaxed text-[1.05rem] md:text-lg">
                    {t.rich("overviewLead", richParts.default)}
                  </p>
                  <p>{t.rich("lead", richParts.default)}</p>
                </div>
              </FadeUp>
            </div>

            {/* Image column — intrinsic height so tops align with heading; no extra letterboxing */}
            <FadeUp delay={1} className="relative w-full self-start lg:sticky lg:top-28">
              <Image
                src={IMAGE_PATHS.offers.introGenerator}
                alt={t("introGeneratorImageAlt")}
                width={611}
                height={457}
                className="h-auto w-full max-w-full object-contain object-left lg:max-w-none lg:object-right"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ BLOCK 2: Service Formats Overview — dark pillars band ══════ */}
      <section
        id="offers-overview"
        className="home-band-full home-band--pillars py-16 md:py-20 lg:py-24"
        aria-labelledby="offers-overview-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <h2
              id="offers-overview-heading"
              className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.3)]"
            >
              {t("formatsTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {t.rich("formatsLead", richParts.onDark)}
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {formatCards.map((card, i) => (
              <FadeUp key={card.step} delay={((i + 1) % 5) as 1 | 2 | 3 | 4}>
                <div className="outcome-shimmer card-brand flex h-full flex-col gap-4 border-l-4 !bg-white p-6 text-[var(--text)] shadow-[var(--shadow-card)] " style={{ borderLeftColor: card.accent }}>
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: card.accent }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="min-w-0 flex-1 font-heading text-base font-bold leading-snug text-[var(--text)]">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                        {whatIsLabel}
                      </p>
                      <div className="mt-2 text-sm leading-relaxed text-[var(--text)]">{card.whatIs}</div>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                        {positionLabel}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{card.position}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ROI calculator */}
      <section
        id="offers-roi"
        className="home-band-full home-band--partner-visual py-16 md:py-20 lg:py-24"
        aria-labelledby="offers-roi-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <h2
              id="offers-roi-heading"
              className="font-heading text-[clamp(1.65rem,3.8vw,2.4rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]"
            >
              {t.rich("roiTitle", richParts.default)}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {t.rich("roiLead", richParts.default)}
            </p>
          </FadeUp>

          <FadeUp delay={1} className="mt-10">
            <RoiCalculator />
          </FadeUp>
        </div>
      </section>

      <section
        id="offers-cta"
        className="home-band-full home-band--welcome py-16 md:py-20 lg:py-24"
        aria-labelledby="offers-final-cta-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-12 text-center sm:px-12 sm:py-16"
              style={{
                background:
                  "radial-gradient(ellipse 75% 90% at 20% 20%, rgba(111,138,122,0.22) 0%, transparent 55%), radial-gradient(ellipse 60% 80% at 85% 80%, rgba(165,133,146,0.14) 0%, transparent 50%), linear-gradient(160deg, var(--surface) 0%, var(--bg) 55%, var(--panel) 100%)",
              }}
            >
              <h2
                id="offers-final-cta-heading"
                className="font-heading text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold leading-snug tracking-tight text-[var(--text)]"
              >
                {t.rich("finalCtaTitle", richParts.default)}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                {t("finalCtaBody")}
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/pilot" className="btn-primary">
                  {t("ctaBookDemo")}
                </Link>
                <Link href="/contact" className="btn-outline">
                  {t("finalCtaTalkToUs")}
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
