import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { IMAGE_PATHS } from "@/lib/public-images";
import { BrandArc } from "@/components/brand-arc";

export async function ProfessionalsHero() {
  const t = await getTranslations("ProfessionalsIndex");

  return (
    <section
      className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--bg)]"
      aria-labelledby="professionals-hero-heading"
    >
      <div className="relative min-h-[min(72vh,680px)] lg:min-h-[min(68vh,620px)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGE_PATHS.professionals.hero}
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden
          />
        </div>

        {/* Gradient overlay — same layered wash as other heroes */}
        <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />

        {/* Extra sage warmth for professionals page — from left, professional tone */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 75% at 10% 75%, rgba(111,138,122,0.22) 0%, transparent 52%)",
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

        {/* Content — right-aligned */}
        <div className="relative z-10 mx-auto flex min-h-[min(72vh,680px)] max-w-[1200px] flex-col justify-end px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:px-8 lg:min-h-[min(68vh,620px)] lg:pb-16 lg:pt-20 lg:px-10">
          <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
            <h1
              id="professionals-hero-heading"
              className="fade-up fade-up-delay-1 font-heading text-h1 text-white"
            >
              {t("heroHeadline")}
            </h1>
            <p className="fade-up fade-up-delay-2 mt-6 text-lg leading-relaxed text-white/90">
              {t("heroSubhead")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
