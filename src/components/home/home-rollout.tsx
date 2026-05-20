import { getTranslations } from "next-intl/server";
import { richParts } from "@/lib/i18n-rich";
import { Link } from "@/i18n/navigation";
import { FadeUp } from "@/components/fade-up";

const ROLLOUT_STEPS = [
  { n: 1 as const, titleKey: "rolloutStep1Title" as const, detailKey: "rolloutStep1Detail" as const },
  { n: 2 as const, titleKey: "rolloutStep2Title" as const, detailKey: "rolloutStep2Detail" as const },
  { n: 3 as const, titleKey: "rolloutStep3Title" as const, detailKey: "rolloutStep3Detail" as const },
  { n: 4 as const, titleKey: "rolloutStep4Title" as const, detailKey: "rolloutStep4Detail" as const },
];

export async function HomeRollout() {
  const t = await getTranslations("Home");

  return (
    <section
      className="home-band-full campaign-band-soft py-24 sm:py-28 lg:py-32"
      aria-labelledby="home-rollout-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <FadeUp className="mx-auto max-w-md text-center sm:max-w-lg">
          <h2
            id="home-rollout-heading"
            className="font-heading text-[clamp(1.95rem,4.6vw,3rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
          >
            {t.rich("rolloutTitle", richParts.default)}
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-[var(--text)] opacity-90 sm:text-xl">
            {t("rolloutLead")}
          </p>
        </FadeUp>

        <FadeUp delay={1} className="mx-auto mt-10 w-full max-w-md sm:max-w-lg">
          <p className="mb-2.5 text-left text-sm font-semibold uppercase tracking-[0.13em] text-[var(--brand-strong)]">
            {t("rolloutWeeksIntro")}
          </p>
          <ol className="m-0 list-none space-y-2.5 p-0">
            {ROLLOUT_STEPS.map((step) => (
              <li
                key={step.n}
                className="flex gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3.5 text-base shadow-sm transition duration-300 hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-raised)]"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white shadow-sm"
                  aria-hidden
                >
                  {step.n}
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-semibold leading-snug text-[var(--text)]">{t(step.titleKey)}</span>
                  <span className="leading-relaxed text-[var(--muted)]">
                    {t.rich(step.detailKey, richParts.default)}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </FadeUp>

        <FadeUp delay={2} className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex">
              {t("stepsCtaContact")}
            </Link>
            <Link href="/pilot-program" className="btn-outline inline-flex">
              {t("stepsCtaPilot")}
            </Link>
          </div>
          <p className="mx-auto max-w-2xl text-center text-lg leading-[1.65] text-[var(--text)] opacity-90 sm:text-xl">
            {t.rich("rolloutCtaNote", richParts.default)}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
