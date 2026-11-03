import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  HomeClosing,
  HomeHero,
  HomeManifesto,
  HomeOrigin,
  HomeScene,
  HomeTrySession,
} from "@/components/home/home-story-sections";
import { HomePillars } from "@/components/home/home-pillars";
import { HomeSystemSnapshot } from "@/components/home/home-system-snapshot";
import { HomeClientOutcomes } from "@/components/home/home-client-outcomes";
import { HomeRollout } from "@/components/home/home-rollout";
import { HomeProfessionals } from "@/components/home/home-professionals";
import { FloatingDemoCta } from "@/components/home/floating-demo-cta";
import { proPageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return proPageMetadata(locale, "", t("title"), t("description"));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomeStory");

  return (
    <div className="site-marketing-root flex flex-col gap-0">
      {/* Belief first, product second: hero → manifesto → a scene from the patient's side. */}
      <HomeHero />
      <HomeManifesto />
      <HomeScene />

      <div className="flex flex-col gap-0">
        <HomeClientOutcomes />
        {/* Manufacturer credibility stands in for customer proof until pilots exist. */}
        <HomeOrigin />
        <HomeTrySession />
        {/* Technology and rollout follow as proof, not as the pitch. */}
        <HomePillars />
        <HomeSystemSnapshot />
        <HomeRollout />
        <HomeProfessionals />
      </div>

      <HomeClosing />

      {/* Sticky floating CTA — appears after scrolling past the hero */}
      <FloatingDemoCta label={t("ctaFeelShort")} message={t("tryMeetMessage")} />
    </div>
  );
}
