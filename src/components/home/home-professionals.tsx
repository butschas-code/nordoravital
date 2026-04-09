import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { richParts } from "@/lib/i18n-rich";
import { FadeUp } from "@/components/fade-up";
import { type SectorSlug } from "@/lib/sector-slugs";

type IconId =
  | "therapists"
  | "beauty"
  | "sports"
  | "physio"
  | "dentists"
  | "clinics";

const SECTORS: {
  slug: SectorSlug;
  icon: IconId;
  titleKey:
    | "sectorTherapistsTitle"
    | "sectorBeautyTitle"
    | "sectorSportsTitle"
    | "sectorPhysioTitle"
    | "sectorDentistsTitle"
    | "sectorClinicsTitle";
  teaserKey:
    | "sectorTherapistsTeaser"
    | "sectorBeautyTeaser"
    | "sectorSportsTeaser"
    | "sectorPhysioTeaser"
    | "sectorDentistsTeaser"
    | "sectorClinicsTeaser";
}[] = [
  {
    slug: "therapists",
    icon: "therapists",
    titleKey: "sectorTherapistsTitle",
    teaserKey: "sectorTherapistsTeaser",
  },
  {
    slug: "beauty-cosmetic",
    icon: "beauty",
    titleKey: "sectorBeautyTitle",
    teaserKey: "sectorBeautyTeaser",
  },
  {
    slug: "sports-performance",
    icon: "sports",
    titleKey: "sectorSportsTitle",
    teaserKey: "sectorSportsTeaser",
  },
  {
    slug: "physiotherapists",
    icon: "physio",
    titleKey: "sectorPhysioTitle",
    teaserKey: "sectorPhysioTeaser",
  },
  {
    slug: "dentists",
    icon: "dentists",
    titleKey: "sectorDentistsTitle",
    teaserKey: "sectorDentistsTeaser",
  },
  {
    slug: "clinics",
    icon: "clinics",
    titleKey: "sectorClinicsTitle",
    teaserKey: "sectorClinicsTeaser",
  },
];

function SectorIcon({ id }: { id: IconId }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
  };
  switch (id) {
    case "therapists":
      // calming hands / leaf + drop
      return (
        <svg {...common}>
          <path d="M12 4c2 2 3.5 4 3.5 6.5S13.8 15 12 15s-3.5-2-3.5-4.5S10 6 12 4z" />
          <path d="M6 20c3-1 4.5-3 5.5-5" />
          <path d="M18 20c-3-1-4.5-3-5.5-5" />
        </svg>
      );
    case "beauty":
      // sparkle + circle
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="M5.5 5.5l1.4 1.4" />
          <path d="M17.1 17.1l1.4 1.4" />
          <path d="M5.5 18.5l1.4-1.4" />
          <path d="M17.1 6.9l1.4-1.4" />
        </svg>
      );
    case "sports":
      // dumbbell / activity
      return (
        <svg {...common}>
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <rect x="5" y="9" width="3" height="6" rx="0.6" />
          <rect x="16" y="9" width="3" height="6" rx="0.6" />
          <path d="M8 12h8" />
        </svg>
      );
    case "physio":
      // spine dots
      return (
        <svg {...common}>
          <path d="M12 3c-2 2-2 4 0 6s2 4 0 6 0 4 0 6" />
          <circle cx="12" cy="5" r="0.9" fill="currentColor" />
          <circle cx="12" cy="9" r="0.9" fill="currentColor" />
          <circle cx="12" cy="13" r="0.9" fill="currentColor" />
          <circle cx="12" cy="17" r="0.9" fill="currentColor" />
          <circle cx="12" cy="21" r="0.9" fill="currentColor" />
        </svg>
      );
    case "dentists":
      // tooth shape
      return (
        <svg {...common}>
          <path d="M8 3c-2 0-3.5 1.5-3.5 4 0 2 .5 3 1 5 .4 1.5.5 3 1 5 .3 1.2 1 2 1.7 2 .7 0 1.2-.8 1.5-2 .3-1.3.4-2.5.8-3.5.3-.7 .7-.9 1.5-.9s1.2.2 1.5.9c.4 1 .5 2.2.8 3.5.3 1.2 .8 2 1.5 2 .7 0 1.4-.8 1.7-2 .5-2 .6-3.5 1-5 .5-2 1-3 1-5 0-2.5-1.5-4-3.5-4-1 0-1.8.3-2.5.7C13.3 3.3 12.7 3 12 3c-.7 0-1.3.3-2 .7C9.3 3.3 8.7 3 8 3z" />
        </svg>
      );
    case "clinics":
      // building / plus
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="13" rx="1.2" />
          <path d="M4 12h16" />
          <path d="M10 8V5" />
          <path d="M14 8V5" />
          <path d="M12 14v4" />
          <path d="M10 16h4" />
        </svg>
      );
  }
}

export async function HomeProfessionals() {
  const t = await getTranslations("Home");

  return (
    <section
      id="professionals"
      className="home-band-full home-band--pillars scroll-mt-24 py-20 md:py-28 lg:py-32"
      aria-labelledby="professionals-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Large background watermark word */}
        <div
          className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none overflow-hidden"
          aria-hidden
        >
          <span className="block font-heading text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/[0.06] lg:text-[12rem]">
            For You
          </span>
        </div>

        {/* Section header */}
        <FadeUp className="relative mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2
              id="professionals-heading"
              className="font-heading text-[clamp(1.95rem,4.6vw,3rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.3)]"
            >
              {t.rich("professionalsTitle", richParts.onDark)}
            </h2>
          </div>
          <Link
            href="/professionals"
            className="inline-flex self-start rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.14] md:self-auto"
          >
            {t("professionalsExploreApplications")}
          </Link>
        </FadeUp>

        {/* Grid — equal height per row: stretch li → FadeUp → Link; teaser flex-1 fills */}
        <ul className="relative grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector, i) => (
            <li key={sector.slug} className="h-full min-h-0">
              <FadeUp
                delay={(Math.min(i + 1, 6)) as 1 | 2 | 3 | 4 | 5 | 6}
                className="flex h-full min-h-0 flex-col"
              >
                <Link
                  href={`/professionals/${sector.slug}`}
                  className="group card-brand flex min-h-0 flex-1 flex-col gap-4 p-6"
                >
                  {/* Icon badge with hover accent */}
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--brand)]/20 bg-[var(--brand)]/10 text-[var(--brand-strong)] transition group-hover:border-[var(--brand)]/40 group-hover:bg-[var(--brand)]/18 group-hover:text-[var(--brand-deep)]">
                    <SectorIcon id={sector.icon} />
                  </div>

                  <h3 className="font-heading text-h3 text-[var(--text)]">
                    {t(sector.titleKey)}
                  </h3>
                  <p className="min-h-0 flex-1 text-small leading-relaxed text-[var(--muted)]">
                    {t(sector.teaserKey)}
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[var(--brand)] transition group-hover:gap-2.5 group-hover:text-[var(--brand-strong)]">
                    {t("learnMore")}{" "}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
