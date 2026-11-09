import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";
import { HowItWorksCta } from "@/components/how-it-works/how-it-works-cta";
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero";
import { HowItWorksSections } from "@/components/how-it-works/how-it-works-sections";
import { stripRichTags } from "@/lib/i18n-rich";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { proPageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) return {};
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const hw = messages.HowItWorks as { metaTitle: string; metaDescription: string };
  return proPageMetadata(locale, "how-it-works", `${stripRichTags(hw.metaTitle)} | Nordora Vital`, hw.metaDescription);
}

export default async function HowItWorksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
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
