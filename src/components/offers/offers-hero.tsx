import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMAGE_PATHS } from "@/lib/public-images";
import { BrandArc } from "@/components/brand-arc";
import { richParts } from "@/lib/i18n-rich";

export async function OffersHero() {
  const t = await getTranslations("Offers");

  return (
    <section
      className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--bg)]"
      aria-labelledby="offers-hero-heading"
    >
      <div className="relative min-h-[min(92vh,880px)] lg:min-h-[min(86vh,780px)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGE_PATHS.offers.hero}
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden
          />
        </div>

        {/* Gradient overlay — same pattern as home hero */}
        <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />

        {/* Extra mauve warmth for the offers page */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 85% 20%, rgba(165,133,146,0.18) 0%, transparent 55%)",
          }}
          aria-hidden
        />

        {/* BrandArc watermark */}
        <div className="arc-watermark" aria-hidden>
          <BrandArc
            color="#FFFFFF"
            size={700}
            className="absolute -right-24 -top-24 opacity-[0.06]"
          />
        </div>

        {/* Content — right-aligned like how-it-works hero */}
        <div className="relative z-10 mx-auto flex min-h-[min(92vh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(86vh,780px)] lg:pb-20 lg:pt-24 lg:px-10">
          <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
            <h1
              id="offers-hero-heading"
              className="fade-up font-heading text-h1 text-white"
            >
              {t("title")}
            </h1>
            <p className="fade-up fade-up-delay-1 mt-6 text-lg leading-relaxed text-white/90">
              {t.rich("heroSubhead", richParts.onDark)}
            </p>
            <div className="fade-up fade-up-delay-2 mt-10 flex flex-col items-end gap-3 sm:flex-row sm:justify-end">
              <Link href="/pilot" className="btn-primary inline-flex justify-center">
                {t("ctaBookDemo")}
              </Link>
              <Link href="#offers-overview" className="btn-ghost-white inline-flex justify-center">
                {t("overviewKicker")} ↓
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
