import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { RichLine } from "@/components/rich-line";
import type { ProfessionalSectorContent } from "@/types/professional-page";
import { IMAGE_PATHS } from "@/lib/public-images";

type Props = {
  content: ProfessionalSectorContent;
};

export async function SectorHero({ content }: Props) {
  const t = await getTranslations("Home");

  return (
    <section
      className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden"
      aria-labelledby="sector-hero-heading"
    >
      <div className="relative min-h-[min(52vh,520px)]">
        <div className="absolute inset-0">
          <Image
            src={IMAGE_PATHS.hero.backgroundPhoto}
            alt={t("heroImageAlt")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-heading)]/80 via-[var(--brand-heading)]/60 to-[var(--brand-heading)]/85 dark:from-black/75 dark:via-black/60 dark:to-black/80"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(52vh,520px)] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 md:px-8 md:pb-16 md:pt-28 lg:px-10">
          <p className="mb-2 max-w-2xl text-xs font-medium uppercase tracking-[0.2em] text-white/90 sm:text-sm">
            <RichLine text={content.heroKicker} variant="onDark" />
          </p>
          <h1
            id="sector-hero-heading"
            className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            <RichLine text={content.heroTitle} variant="onDark" />
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            <RichLine text={content.heroSubtitle} variant="onDark" />
          </p>
        </div>
      </div>
    </section>
  );
}
