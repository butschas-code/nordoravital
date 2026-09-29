import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMAGE_PATHS } from "@/lib/public-images";
import { SECTOR_SLUGS, type SectorSlug } from "@/lib/sector-slugs";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { FadeUp } from "@/components/fade-up";
import { ProfessionalsHero } from "@/components/professionals/professionals-hero";
import { ProfessionalsGrid, type SectorItem } from "@/components/professionals/professionals-grid";
import { ClinicWorkflowSimulator } from "@/components/professionals/clinic-workflow-simulator";
import { JsonLd } from "@/components/seo/json-ld";

const DIRECTORY_BANNER_DATA: Record<
  "en" | "de" | "lv" | "ru",
  {
    badge: string;
    title: string;
    description: string;
    cta: string;
    pills: string[];
  }
> = {
  en: {
    badge: "Specialized Clinical Sectors",
    title: "Looking for a dedicated workflow for your field? Explore all 16 sectors",
    description:
      "From physiotherapy, chiropractic, and sports medicine to dental lounges, day clinics, and recovery spas — see customized room workflows and practice economics.",
    cta: "Explore all 16 Sectors →",
    pills: [
      "Physiotherapy",
      "Chiropractic",
      "Sports Medicine",
      "Dental Practice",
      "Day Clinics",
      "Spas & Wellness",
      "Rehabilitation",
      "Massage Therapy",
    ],
  },
  de: {
    badge: "Spezialisierte Fachbereiche",
    title: "Suchen Sie eine spezifische Nische? Entdecken Sie alle 16 Fachbereiche",
    description:
      "Von Physiotherapie, Chiropraktik und Sportmedizin bis hin zu Zahnarztpraxen, Tageskliniken und Day Spas – maßgeschneiderte Behandlungsabläufe und Wirtschaftlichkeit.",
    cta: "Alle 16 Fachbereiche ansehen →",
    pills: [
      "Physiotherapie",
      "Chiropraktik",
      "Sportmedizin",
      "Zahnmedizin",
      "Tageskliniken",
      "Spas & Wellness",
      "Rehabilitation",
      "Massagepraxis",
    ],
  },
  lv: {
    badge: "Specializēts katalogs",
    title: "Meklējat savu konkrēto nozari? Izpētiet visas 16 specializētās jomas",
    description:
      "No fizioterapijas, kiropraktikas un sporta medicīnas līdz zobārstniecības klīnikām, dienas centriem un spa – pielāgotas telpu plūsmas un prakses ekonomika.",
    cta: "Skatīt visas 16 nozares →",
    pills: [
      "Fizioterapija",
      "Kiropraktika",
      "Sporta medicīna",
      "Zobārstniecība",
      "Dienas klīnikas",
      "Spa un labsajūta",
      "Rehabilitācija",
      "Masāžas saloni",
    ],
  },
  ru: {
    badge: "Отраслевой справочник",
    title: "Ищете своё точное направление? Ознакомьтесь со всеми 16 секторами",
    description:
      "От физиотерапии, остеопатии и спортивной медицины до стоматологии, дневных стационаров и спа-отелей — индивидуальные протоколы и экономика кабинета.",
    cta: "Смотреть все 16 секторов →",
    pills: [
      "Физиотерапия",
      "Остеопатия",
      "Спортивная медицина",
      "Стоматология",
      "Дневные клиники",
      "Спа и велнес",
      "Реабилитация",
      "Массажные кабинеты",
    ],
  },
};

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

export default async function ProfessionalsIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("ProfessionalsIndex");
  const tHome = await getTranslations("Home");
  const safeLocale = (locale === "de" || locale === "lv" || locale === "ru" ? locale : "en") as "en" | "de" | "lv" | "ru";
  const directoryBanner = DIRECTORY_BANNER_DATA[safeLocale];

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
      <JsonLd
        breadcrumbs={[
          { name: "Home", url: "https://pro.nordoravital.com" },
          { name: "Professionals", url: `https://pro.nordoravital.com/${locale}/professionals` },
        ]}
        medicalBusiness={{
          name: "Nordora Vital — Professional Systems",
          description: t("metaDescription"),
          url: `https://pro.nordoravital.com/${locale}/professionals`,
          medicalSpecialty: [
            "Physiotherapy",
            "SportsMedicine",
            "Chiropractic",
            "Rehabilitation",
            "Dentistry",
          ],
        }}
      />

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
                    {t("gatingLabel")}
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

      {/* ── 16 Specialized Sectors Callout Band ── */}
      <div className="border-t border-[#d8cec2]/80 bg-[#f4eee6] py-14 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[24px] border border-[#0e3d34]/15 bg-gradient-to-br from-[#0e3d34] to-[#082721] p-8 text-white shadow-xl sm:p-12 md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(246,241,234,0.15),transparent_70%)]"
              />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#efe9e2] backdrop-blur-sm">
                    {directoryBanner.badge}
                  </span>
                  <h3 className="mt-4 font-heading text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold leading-tight text-white">
                    {directoryBanner.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#efe9e2]/85">
                    {directoryBanner.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {directoryBanner.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-white/90 ring-1 ring-white/15"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end">
                  <Link
                    href="/professionals/sectors"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-[#0e3d34] shadow-md transition hover:bg-[#f6f1ea] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {directoryBanner.cta}
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Interactive Clinic Workflow Simulator ── */}
      <div className="border-t border-[#d8cec2] bg-[#fbf7ef] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <ClinicWorkflowSimulator locale={locale} />
          </FadeUp>
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
                <ContactDrawerTrigger className="btn-primary inline-flex justify-center">
                  {t("ctaCta")}
                </ContactDrawerTrigger>
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
