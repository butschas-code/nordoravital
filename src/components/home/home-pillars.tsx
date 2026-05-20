import { getTranslations } from "next-intl/server";
import { FadeUp } from "@/components/fade-up";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { DarkMarketingCard } from "@/components/home/dark-marketing-card";
import { richParts } from "@/lib/i18n-rich";

type PillarIconId = "pemf" | "bio" | "light";

const PILLARS: {
  iconId: PillarIconId;
  variant: "pulse" | "waves" | "lattice";
  titleKey: "pillarPemfTitle" | "pillarBioTitle" | "pillarLightTitle";
  bodyKey: "pillarPemfBody" | "pillarBioBody" | "pillarLightBody";
  teaserKey: "pillarPemfTeaser" | "pillarBioTeaser" | "pillarLightTeaser";
  delay: 1 | 2 | 3;
  index: string;
}[] = [
  {
    iconId: "pemf",
    variant: "pulse",
    titleKey: "pillarPemfTitle",
    bodyKey: "pillarPemfBody",
    teaserKey: "pillarPemfTeaser",
    delay: 1,
    index: "01",
  },
  {
    iconId: "bio",
    variant: "waves",
    titleKey: "pillarBioTitle",
    bodyKey: "pillarBioBody",
    teaserKey: "pillarBioTeaser",
    delay: 2,
    index: "02",
  },
  {
    iconId: "light",
    variant: "lattice",
    titleKey: "pillarLightTitle",
    bodyKey: "pillarLightBody",
    teaserKey: "pillarLightTeaser",
    delay: 3,
    index: "03",
  },
];

function PillarIcon({ id }: { id: PillarIconId }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
  };
  if (id === "pemf") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2" />
        <path d="M7.5 7.5a6 6 0 0 0 0 9" />
        <path d="M16.5 7.5a6 6 0 0 1 0 9" />
        <path d="M4.5 4.5a10 10 0 0 0 0 15" />
        <path d="M19.5 4.5a10 10 0 0 1 0 15" />
      </svg>
    );
  }
  if (id === "bio") {
    return (
      <svg {...common}>
        <path d="M3 12h2l2-6 3 12 3-9 2 3h3" />
        <circle cx="20" cy="12" r="1.5" />
      </svg>
    );
  }
  // light
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M5.6 5.6l1.4 1.4" />
      <path d="M17 17l1.4 1.4" />
      <path d="M5.6 18.4l1.4-1.4" />
      <path d="M17 7l1.4-1.4" />
    </svg>
  );
}

export async function HomePillars() {
  const t = await getTranslations("Home");

  return (
    <section
      className="home-band-full home-band--pillars py-24 sm:py-28 lg:py-32"
      aria-labelledby="pillars-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section header — large, dramatic */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2
            id="pillars-heading"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.3)]"
          >
            {t.rich("pillarsSectionTitle", richParts.onDark)}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.65] text-white/92 sm:text-xl [&_strong]:font-semibold">
            {t.rich("clientExperienceBody", richParts.onDark)}
          </p>
        </FadeUp>

        <ul className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7">
          {PILLARS.map((pillar) => (
            <li key={pillar.titleKey}>
              <FadeUp delay={pillar.delay} className="h-full">
                <DarkMarketingCard
                  title={t(pillar.titleKey)}
                  body={t(pillar.bodyKey)}
                  cta={t(pillar.teaserKey)}
                  href="/how-it-works"
                  titleInsetClassName="right-20"
                  media={
                    <>
                      <BrandAtmosphere variant={pillar.variant} />
                      <div
                        className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#061a16]/92 via-[#082721]/45 to-transparent"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute left-5 top-4 select-none font-heading text-[3.5rem] font-bold leading-none text-[#0E3D34]/40"
                        aria-hidden
                      >
                        {pillar.index}
                      </span>
                      <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md">
                        <PillarIcon id={pillar.iconId} />
                      </div>
                    </>
                  }
                />
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
