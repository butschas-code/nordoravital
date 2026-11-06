import { CampaignLanding } from "@/components/campaign/campaign-landing";
import { RevenueCalculator } from "@/components/proposals/cf-liepaja/revenue-calculator";
import { cfLiepajaContent } from "@/lib/proposals/cf-liepaja-page";
import { setRequestLocale } from "next-intl/server";

export default async function CfLiepajaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const language = locale === "en" ? "en" : "lv";

  return (
    <CampaignLanding
      content={cfLiepajaContent(language)}
      locale={language}
      campaignSlug="sporta-zales"
      heroOverlayClassName="home-hero-overlay home-hero-overlay--cf-lighter pointer-events-none absolute inset-0"
      includeJsonLd={false}
      showWorkflowSimulator={false}
      showSocialProof={false}
      insertBeforeDemo={
        <section className="bg-[var(--bg)] pb-4 sm:pb-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
            <RevenueCalculator locale={language} />
          </div>
        </section>
      }
    />
  );
}
