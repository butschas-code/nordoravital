import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMAGE_PATHS } from "@/lib/public-images";
import { SECTOR_SLUGS, type SectorSlug } from "@/lib/sector-slugs";
import { FadeUp } from "@/components/fade-up";
import { ProfessionalsHero } from "@/components/professionals/professionals-hero";
import { ProfessionalsGrid, type SectorItem } from "@/components/professionals/professionals-grid";

const SECTOR_META: Record<
  SectorSlug,
  {
    icon: string;
    titleKey: `sector${string}Title`;
    imageAltKey:
      | "sectorTherapistsImageAlt"
      | "sectorBeautyImageAlt"
      | "sectorSportsImageAlt"
      | "sectorPhysioImageAlt"
      | "sectorDentistsImageAlt"
      | "sectorClinicsImageAlt";
    proTeaserKey:
      | "proTeaserTherapists"
      | "proTeaserBeauty"
      | "proTeaserSports"
      | "proTeaserPhysio"
      | "proTeaserDentists"
      | "proTeaserClinics";
    popupKey:
      | "popupTherapistsBody"
      | "popupBeautyBody"
      | "popupSportsBody"
      | "popupPhysioBody"
      | "popupDentistsBody"
      | "popupClinicsBody";
  }
> = {
  therapists: {
    icon: IMAGE_PATHS.sectors.therapists,
    titleKey: "sectorTherapistsTitle",
    imageAltKey: "sectorTherapistsImageAlt",
    proTeaserKey: "proTeaserTherapists",
    popupKey: "popupTherapistsBody",
  },
  "beauty-cosmetic": {
    icon: IMAGE_PATHS.sectors["beauty-cosmetic"],
    titleKey: "sectorBeautyTitle",
    imageAltKey: "sectorBeautyImageAlt",
    proTeaserKey: "proTeaserBeauty",
    popupKey: "popupBeautyBody",
  },
  "sports-performance": {
    icon: IMAGE_PATHS.sectors["sports-performance"],
    titleKey: "sectorSportsTitle",
    imageAltKey: "sectorSportsImageAlt",
    proTeaserKey: "proTeaserSports",
    popupKey: "popupSportsBody",
  },
  physiotherapists: {
    icon: IMAGE_PATHS.sectors.physiotherapists,
    titleKey: "sectorPhysioTitle",
    imageAltKey: "sectorPhysioImageAlt",
    proTeaserKey: "proTeaserPhysio",
    popupKey: "popupPhysioBody",
  },
  dentists: {
    icon: IMAGE_PATHS.sectors.dentists,
    titleKey: "sectorDentistsTitle",
    imageAltKey: "sectorDentistsImageAlt",
    proTeaserKey: "proTeaserDentists",
    popupKey: "popupDentistsBody",
  },
  clinics: {
    icon: IMAGE_PATHS.sectors.clinics,
    titleKey: "sectorClinicsTitle",
    imageAltKey: "sectorClinicsImageAlt",
    proTeaserKey: "proTeaserClinics",
    popupKey: "popupClinicsBody",
  },
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = (await import(`../../../../messages/${locale}.json`)).default as {
    ProfessionalsIndex: { metaTitle: string; metaDescription: string };
  };
  return {
    title: m.ProfessionalsIndex.metaTitle,
    description: m.ProfessionalsIndex.metaDescription,
  };
}

export default async function ProfessionalsIndexPage() {
  const t = await getTranslations("ProfessionalsIndex");
  const tHome = await getTranslations("Home");

  const sectors: SectorItem[] = SECTOR_SLUGS.map((slug) => {
    const meta = SECTOR_META[slug];
    return {
      slug,
      icon: meta.icon,
      title: tHome(meta.titleKey),
      teaser: t(meta.proTeaserKey),
      imageAlt: tHome(meta.imageAltKey),
      popupBody: t(meta.popupKey),
    };
  });

  const explainerLines = t("explainerBody").split("\n");

  return (
    <>
      {/* ── Hero ── */}
      <ProfessionalsHero />

      {/* ── Explainer band — home-band--welcome style ── */}
      <div className="home-band-full home-band--welcome py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">

            {/* Left: main explainer */}
            <FadeUp>
              <p className="font-heading text-[clamp(1.25rem,2.5vw,1.6rem)] font-semibold leading-snug text-[var(--text)]">
                {explainerLines[0]}
              </p>
              {explainerLines[1] && (
                <p className="mt-5 text-base leading-[1.75] text-[var(--muted)]">
                  {explainerLines[1]}
                </p>
              )}
            </FadeUp>

            {/* Right: gating note */}
            <FadeUp delay={1}>
              <div className="rounded-2xl border border-[var(--brand-secondary)]/30 bg-gradient-to-br from-[var(--surface)] to-[rgba(165,133,146,0.07)] p-6 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-secondary)]/15">
                    <svg className="h-4 w-4 text-[var(--brand-secondary)]" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-secondary)]">
                    Professional access
                  </p>
                </div>
                <p className="text-sm leading-[1.7] text-[var(--muted)]">
                  {t("gatingNote")}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ── Cards band — home-band--pillars dark ── */}
      <div className="home-band-full home-band--pillars py-20 md:py-28 lg:py-32">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">

          {/* Section header */}
          <FadeUp>
            <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-white">
                {t("cardsInstruction")}
              </h2>
            </div>
          </FadeUp>

          {/* Interactive card grid */}
          <ProfessionalsGrid
            sectors={sectors}
            labels={{
              learnMore: tHome("learnMore"),
              popupClose: t("popupClose"),
            }}
          />
        </div>
      </div>

      {/* ── CTA band — light band (matches welcome / explainer) ── */}
      <div className="home-band-full home-band--welcome py-20 md:py-24 lg:py-28">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <div className="mx-auto max-w-[540px] text-center">
              <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-[var(--text)]">
                {t("ctaHeadline")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                {t("ctaSubhead")}
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Link href="/pilot" className="btn-primary inline-flex justify-center">
                  {t("ctaCta")}
                </Link>
                <Link href="/how-it-works" className="btn-outline inline-flex justify-center">
                  {t("ctaSecondaryCta")}
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
