import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMAGE_PATHS } from "@/lib/public-images";
import { BrandArc } from "@/components/brand-arc";
import { richParts } from "@/lib/i18n-rich";

export async function HomeHero() {
  const t = await getTranslations("Home");

  return (
    <section
      className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--bg)]"
      aria-labelledby="home-hero-heading"
    >
      <div className="relative min-h-[min(92vh,880px)] lg:min-h-[min(88vh,800px)]">
        {/* Layer 1: full-bleed background video (muted + playsInline required for autoplay) */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={IMAGE_PATHS.hero.backgroundPhoto}
            aria-hidden
          >
            <source src={IMAGE_PATHS.hero.backgroundVideo} type="video/mp4" />
          </video>
        </div>

        {/* Layer 2: smooth layered overlay — see `.home-hero-overlay` in globals.css */}
        <div
          className="home-hero-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />

        {/* Arc watermark */}
        <div className="arc-watermark" aria-hidden>
          <BrandArc
            color="#FFFFFF"
            size={700}
            className="absolute -right-24 -top-24 opacity-[0.06]"
          />
        </div>

        {/* Copy + CTAs — right-aligned */}
        <div className="relative z-10 mx-auto flex min-h-[min(92vh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(88vh,800px)] lg:pb-20 lg:pt-24 lg:px-10">
          <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
            <p className="fade-up mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white [&_strong]:normal-case [&_strong]:font-semibold">
              {t.rich("heroKicker", richParts.onDark)}
            </p>
            <h1
              id="home-hero-heading"
              className="fade-up fade-up-delay-1 font-heading text-h1 text-white"
            >
              {t("heroHeadline")}
            </h1>
            <p className="fade-up fade-up-delay-2 mt-6 text-lg leading-relaxed text-white/90">
              {t.rich("heroSubheadline", richParts.onDark)}
            </p>
            <div className="fade-up fade-up-delay-3 mt-10 flex flex-col items-end gap-3 sm:flex-row sm:justify-end sm:gap-4">
              <Link href="/pilot" className="btn-primary inline-flex justify-center">
                {t("ctaBookDemo")}
              </Link>
              <Link href="/how-it-works" className="btn-ghost-white inline-flex justify-center">
                {t("heroSecondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
