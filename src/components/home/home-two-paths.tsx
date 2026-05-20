import { getTranslations } from "next-intl/server";
import { FadeUp } from "@/components/fade-up";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { richParts } from "@/lib/i18n-rich";

export async function HomeTwoPaths() {
  const t = await getTranslations("Home");

  const cards = [
    {
      title: "twoPathsCard1Title" as const,
      forPractice: "twoPathsCard1ForPractice" as const,
      forClients: "twoPathsCard1ForClients" as const,
      tag: "twoPathsCard1Tag" as const,
      variant: "grid" as const,
    },
    {
      title: "twoPathsCard2Title" as const,
      forPractice: "twoPathsCard2ForPractice" as const,
      forClients: "twoPathsCard2ForClients" as const,
      tag: "twoPathsCard2Tag" as const,
      variant: "waves" as const,
    },
  ];

  return (
    <section
      className="home-band-full home-band--two-paths py-24 sm:py-28 lg:py-32"
      aria-labelledby="home-two-paths-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2
            id="home-two-paths-heading"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--text)]"
          >
            {t("twoPathsTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-[1.65] text-[var(--text)] opacity-90 sm:text-xl">
            {t.rich("twoPathsLead", richParts.default)}
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={((i % 2) + 1) as 1 | 2} className="h-full">
              <article className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[520px]">
                <BrandAtmosphere variant={c.variant} />

                {/* Taller scrim on mobile so titles never sit on the light art alone */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[85%] md:h-[72%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,39,33,0) 0%, rgba(8,39,33,0.35) 22%, rgba(8,39,33,0.62) 48%, rgba(8,39,33,0.9) 100%)",
                  }}
                  aria-hidden
                />
                {/* Extra depth on narrow screens */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#061a16]/95 via-[#061a16]/55 to-transparent md:hidden"
                  aria-hidden
                />

                {/* Content: eyebrow → headline → columns (correct reading order) */}
                <div className="relative z-10 flex flex-col p-6 sm:p-9">
                  <p className="mb-2 inline-flex w-max max-w-full items-center rounded-full border border-white/25 bg-[#082721]/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.13em] text-white/95 shadow-sm backdrop-blur-md md:mb-3 md:border-[var(--brand)]/25 md:bg-[var(--surface)]/92 md:text-[var(--brand-strong)]">
                    {t(c.tag)}
                  </p>
                  <h3 className="font-heading text-3xl font-bold leading-[1.12] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-4xl">
                    {t(c.title)}
                  </h3>
                  <div className="two-paths-micro-row mt-6 sm:mt-7">
                    <div className="two-paths-micro-cell">
                      <div className="two-paths-micro-surface flex min-h-0 flex-1 flex-col rounded-2xl border border-white/70 bg-[color-mix(in_srgb,var(--surface)_96%,transparent)] px-5 py-4 shadow-[0_8px_32px_rgba(14,61,52,0.12)] backdrop-blur-xl sm:px-6 sm:py-5 md:border-white/80 md:bg-[color-mix(in_srgb,var(--surface)_94%,var(--panel))] md:shadow-[0_12px_40px_-8px_rgba(14,61,52,0.14)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-strong)] sm:text-sm">
                          {t("twoPathsMicroPracticeLabel")}
                        </p>
                        <p className="mt-2.5 flex-1 text-base leading-relaxed text-[var(--text)] sm:text-[1.0625rem] sm:leading-[1.65]">
                          {t(c.forPractice)}
                        </p>
                      </div>
                    </div>
                    <div className="two-paths-micro-cell">
                      <div className="two-paths-micro-surface flex min-h-0 flex-1 flex-col rounded-2xl border border-white/70 bg-[color-mix(in_srgb,var(--surface)_96%,transparent)] px-5 py-4 shadow-[0_8px_32px_rgba(14,61,52,0.12)] backdrop-blur-xl sm:px-6 sm:py-5 md:border-white/80 md:bg-[color-mix(in_srgb,var(--surface)_94%,var(--panel))] md:shadow-[0_12px_40px_-8px_rgba(14,61,52,0.14)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-strong)] sm:text-sm">
                          {t("twoPathsMicroPatientsLabel")}
                        </p>
                        <p className="mt-2.5 flex-1 text-base leading-relaxed text-[var(--text)] sm:text-[1.0625rem] sm:leading-[1.65]">
                          {t(c.forClients)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
