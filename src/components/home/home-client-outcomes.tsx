import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "@/components/fade-up";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { outcomePhotoCoverPosition } from "@/lib/outcome-photo-cover-focus";
import { IMAGE_PATHS } from "@/lib/public-images";

type Variant = "pulse" | "aurora" | "waves" | "grid" | "lattice";

type OutcomeIndex = 1 | 2 | 3 | 4 | 5;

const OUTCOMES: {
  title: `outcome${OutcomeIndex}Title`;
  forClients: `outcome${OutcomeIndex}ForClients`;
  forPractice: `outcome${OutcomeIndex}ForPractice`;
  imageAlt: `outcome${OutcomeIndex}ImageAlt`;
  variant: Variant;
  /** Only `lattice`: moves mauve accent + glow in 500×500 art (default 250,250). */
  latticeFocal?: { x: number; y: number };
  span: string;
  accent: string;
  isFeature: boolean;
}[] = [
  {
    title: "outcome1Title",
    forClients: "outcome1ForClients",
    forPractice: "outcome1ForPractice",
    imageAlt: "outcome1ImageAlt",
    variant: "pulse",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "var(--brand)",
    isFeature: true,
  },
  {
    title: "outcome2Title",
    forClients: "outcome2ForClients",
    forPractice: "outcome2ForPractice",
    imageAlt: "outcome2ImageAlt",
    variant: "waves",
    span: "",
    accent: "var(--brand-secondary)",
    isFeature: false,
  },
  {
    title: "outcome3Title",
    forClients: "outcome3ForClients",
    forPractice: "outcome3ForPractice",
    imageAlt: "outcome3ImageAlt",
    variant: "lattice",
    /* Off-centre: avoids mauve dot sitting in awkward middle of 16:9 crop */
    latticeFocal: { x: 202, y: 158 },
    span: "",
    accent: "var(--brand-deep)",
    isFeature: false,
  },
  {
    title: "outcome4Title",
    forClients: "outcome4ForClients",
    forPractice: "outcome4ForPractice",
    imageAlt: "outcome4ImageAlt",
    variant: "aurora",
    span: "",
    accent: "var(--brand)",
    isFeature: false,
  },
  {
    title: "outcome5Title",
    forClients: "outcome5ForClients",
    forPractice: "outcome5ForPractice",
    imageAlt: "outcome5ImageAlt",
    variant: "grid",
    span: "",
    accent: "var(--brand-secondary)",
    isFeature: false,
  },
];

export async function HomeClientOutcomes() {
  const t = await getTranslations("Home");

  return (
    <section
      className="home-band-full home-band--outcomes-grid py-24 sm:py-28 lg:py-32"
      aria-labelledby="home-outcomes-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2
            id="home-outcomes-heading"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--text)]"
          >
            {t("outcomesTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-[1.65] text-[var(--text)] opacity-90 sm:text-xl">
            {t("outcomesLead")}
          </p>
        </FadeUp>

        {/* Bento grid — featured 2x2 anchor + 4 standard cards */}
        <ul className="mt-16 grid auto-rows-[minmax(200px,1fr)] gap-4 sm:auto-rows-[minmax(240px,1fr)] sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <FadeUp key={o.title} delay={((i % 3) + 1) as 1 | 2 | 3} className={o.span}>
              {o.isFeature ? (
                <li className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[420px]">
                  <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                    <BrandAtmosphere variant={o.variant} latticeFocal={o.latticeFocal} />
                  </div>
                  <div className="absolute inset-0 z-[1] opacity-[0.55]">
                    <Image
                      src={encodeURI(IMAGE_PATHS.home.outcomePhotos[i])}
                      alt={t(o.imageAlt)}
                      fill
                      className="object-cover"
                      style={{ objectPosition: outcomePhotoCoverPosition(i) }}
                      sizes="(max-width: 1024px) 100vw, min(1200px, 66vw)"
                      priority={i === 0}
                    />
                  </div>
                  {/* Bottom scrim for text */}
                  <div
                    className="absolute inset-x-0 bottom-0 z-[2] h-[55%]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(8,39,33,0) 0%, rgba(8,39,33,0.5) 50%, rgba(8,39,33,0.92) 100%)",
                    }}
                    aria-hidden
                  />

                  <div className="relative z-10 p-7 sm:p-9">
                    <span className="inline-flex items-center rounded-full border border-[var(--brand)]/25 bg-[var(--surface)]/90 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--brand-strong)] shadow-sm backdrop-blur-md">
                      {t("outcomeFeaturedEyebrow")}
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-white drop-shadow-md sm:text-3xl md:text-[2rem]">
                      {t(o.title)}
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/75 bg-[color-mix(in_srgb,var(--surface)_96%,transparent)] px-4 py-3 shadow-[0_8px_28px_rgba(14,61,52,0.14)] backdrop-blur-xl sm:px-4 sm:py-3.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-secondary)] sm:text-sm">
                          {t("benefitLabelClients")}
                        </p>
                        <p className="mt-2 text-base leading-snug text-[var(--text)] sm:text-[1.0625rem] sm:leading-relaxed">
                          {t(o.forClients)}
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/75 bg-[color-mix(in_srgb,var(--surface)_96%,transparent)] px-4 py-3 shadow-[0_8px_28px_rgba(14,61,52,0.14)] backdrop-blur-xl sm:px-4 sm:py-3.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-strong)] sm:text-sm">
                          {t("benefitLabelPractice")}
                        </p>
                        <p className="mt-2 text-base leading-snug text-[var(--text)] sm:text-[1.0625rem] sm:leading-relaxed">
                          {t(o.forPractice)}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--surface)] shadow-[var(--shadow-card)] ring-1 ring-[var(--border)] transition duration-500 hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-raised)]">
                  {/* Accent stripe top */}
                  <div
                    className="absolute left-0 right-0 top-0 z-10 h-1"
                    style={{ background: o.accent }}
                    aria-hidden
                  />

                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                      <BrandAtmosphere variant={o.variant} latticeFocal={o.latticeFocal} />
                    </div>
                    <div className="absolute inset-0 z-[1] opacity-[0.55]">
                      <Image
                        src={encodeURI(IMAGE_PATHS.home.outcomePhotos[i])}
                        alt={t(o.imageAlt)}
                        fill
                        className="object-cover"
                        style={{ objectPosition: outcomePhotoCoverPosition(i) }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-heading text-lg font-semibold leading-snug text-[var(--text)] sm:text-xl">
                      {t(o.title)}
                    </h3>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-[var(--muted)] sm:text-[1.0625rem]">
                      {t(o.forClients)}
                    </p>
                    {t(o.forPractice).trim() !== "" ? (
                      <p
                        className="mt-3 border-t border-[var(--border)] pt-3 text-sm font-medium leading-snug sm:text-base"
                        style={{ color: o.accent }}
                      >
                        <span className="font-semibold uppercase tracking-wider opacity-80">{t("outcomeForPracticePrefix")} </span>
                        <span className="text-[var(--text)]/75">{t(o.forPractice)}</span>
                      </p>
                    ) : null}
                  </div>
                </li>
              )}
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
