import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "@/components/fade-up";
import { HowItWorksCta } from "@/components/how-it-works/how-it-works-cta";
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero";
import { HowItWorksSections } from "@/components/how-it-works/how-it-works-sections";
import { stripRichTags } from "@/lib/i18n-rich";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const hw = messages.HowItWorks as { title: string; metaDescription: string };
  return {
    title: `${stripRichTags(hw.title)} | Nordora Vital`,
    description: hw.metaDescription,
  };
}

export default async function HowItWorksPage() {
  return (
    <div className="flex flex-col gap-0">
      <HowItWorksHero />
      <HowItWorksSections />

      <section className="home-band-full home-band--welcome py-16 md:py-20 lg:py-24">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <HowItWorksCta />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
