import { getTranslations } from "next-intl/server";
import { IMAGE_PATHS } from "@/lib/public-images";
import { BrandArc } from "@/components/brand-arc";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { OptimizedBackgroundVideo } from "@/components/optimized-background-video";
import { richParts } from "@/lib/i18n-rich";

export async function HowItWorksHero() {
  const t = await getTranslations("HowItWorks");

  return (
    <section
      className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--bg)]"
      aria-labelledby="how-it-works-hero-heading"
    >
      <div className="relative min-h-[min(92dvh,880px)] lg:min-h-[min(88dvh,800px)]">
        <div className="absolute inset-0">
          <OptimizedBackgroundVideo
            src={IMAGE_PATHS.hero.howItWorksHeroVideo}
            poster={IMAGE_PATHS.hero.backgroundPhoto}
            priority
          />
        </div>

        <div
          className="home-hero-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />

        <div className="arc-watermark" aria-hidden>
          <BrandArc
            color="#FFFFFF"
            size={700}
            className="absolute -right-24 -top-24 opacity-[0.06]"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(92dvh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(88dvh,800px)] lg:pb-20 lg:pt-24 lg:px-10">
          <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
            <h1
              id="how-it-works-hero-heading"
              className="fade-up font-heading text-[clamp(2.1rem,4.9vw,3.35rem)] font-bold leading-[1.12] tracking-tight text-white [&_strong]:font-semibold"
            >
              {t.rich("heroTitle", richParts.onDark)}
            </h1>
            <p className="fade-up fade-up-delay-1 mt-6 max-w-[52ch] text-xl leading-[1.65] text-white/90 md:ml-auto md:text-2xl md:leading-[1.55] [&_strong]:font-semibold">
              {t.rich("heroSubhead", richParts.onDark)}
            </p>
            <div className="fade-up fade-up-delay-2 mt-10 flex justify-end">
              <ContactDrawerTrigger className="btn-primary inline-flex justify-center">
                {t("heroPrimaryCta")}
              </ContactDrawerTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
