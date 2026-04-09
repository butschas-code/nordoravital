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
      className="home-band-full home-band--two-paths py-20 md:py-28 lg:py-32"
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
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
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
                  className="absolute inset-x-0 bottom-0 h-[78%] md:h-[64%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,39,33,0) 0%, rgba(8,39,33,0.22) 28%, rgba(8,39,33,0.55) 55%, rgba(8,39,33,0.82) 100%)",
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
                  <p className="mb-2 inline-flex w-max max-w-full items-center rounded-full border border-white/25 bg-[#082721]/60 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/95 shadow-sm backdrop-blur-md md:mb-3 md:border-[var(--brand)]/22 md:bg-[var(--surface)]/88 md:text-[var(--brand-strong)]">
                    {t(c.tag)}
                  </p>
                  <h3 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl [text-shadow:0_1px_14px_rgba(0,0,0,0.45)]">
                    {t(c.title)}
                  </h3>
                  <div className="two-paths-micro-row mt-5">
                    <div className="two-paths-micro-cell">
                      <div className="two-paths-micro-surface flex min-h-0 flex-1 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/96 px-4 py-3 shadow-sm backdrop-blur-sm md:border-white/25 md:bg-white/[0.14] md:shadow-[0_8px_40px_-12px_rgba(8,39,33,0.35)] md:backdrop-blur-xl">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)] md:text-white/80">
                          {t("twoPathsMicroPracticeLabel")}
                        </p>
                        <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-[var(--text)] md:text-white md:[text-shadow:0_1px_2px_rgba(0,0,0,0.22)]">
                          {t(c.forPractice)}
                        </p>
                      </div>
                    </div>
                    <div className="two-paths-micro-cell">
                      <div className="two-paths-micro-surface flex min-h-0 flex-1 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/96 px-4 py-3 shadow-sm backdrop-blur-sm md:border-white/25 md:bg-white/[0.14] md:shadow-[0_8px_40px_-12px_rgba(8,39,33,0.35)] md:backdrop-blur-xl">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)] md:text-white/80">
                          {t("twoPathsMicroPatientsLabel")}
                        </p>
                        <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-[var(--text)] md:text-white md:[text-shadow:0_1px_2px_rgba(0,0,0,0.22)]">
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
