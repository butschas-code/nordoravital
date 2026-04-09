import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "@/components/fade-up";
import { richParts } from "@/lib/i18n-rich";

export async function HomeWelcome() {
  const t = await getTranslations("Home");

  return (
    <section
      className="home-band-full home-band--welcome py-20 sm:py-24 md:py-28"
      aria-labelledby="home-welcome-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div>
            <FadeUp>
              <h2
                id="home-welcome-heading"
                className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]"
              >
                {t("welcomeP1")}
              </h2>
            </FadeUp>

            <FadeUp delay={1} className="mt-10 space-y-4 text-[1rem] leading-relaxed text-[var(--muted)]">
              <p className="text-[var(--text)]">
                {t.rich("welcomeP2", richParts.default)}
              </p>
              <p>{t.rich("welcomeP3", richParts.default)}</p>
              <p>{t.rich("welcomeP4", richParts.default)}</p>
            </FadeUp>
          </div>

          <FadeUp delay={1} className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
              <Image
                src="/images/sanza%20hand%20electrode%2001.jpg"
                alt={t("welcomeImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
