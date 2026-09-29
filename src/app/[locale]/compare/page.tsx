import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeUp } from "@/components/fade-up";
import { JsonLd } from "@/components/seo/json-ld";
import { routing, type Locale } from "@/i18n/routing";
import {
  COMPARISON_HUB_CONTENT,
} from "@/lib/comparison-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISON_HUB_CONTENT[safeLocale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://pro.nordoravital.com/${locale}/compare`,
      languages: {
        en: "https://pro.nordoravital.com/en/compare",
        de: "https://pro.nordoravital.com/de/compare",
        lv: "https://pro.nordoravital.com/lv/compare",
        ru: "https://pro.nordoravital.com/ru/compare",
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://pro.nordoravital.com/${locale}/compare`,
      siteName: "Nordora Vital",
      type: "website",
    },
  };
}

export default async function ComparisonHubPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISON_HUB_CONTENT[safeLocale];

  return (
    <div className="comparison-hub min-h-screen bg-[#f6f1ea] text-[#1e2a22]">
      <JsonLd
        breadcrumbs={[
          { name: "Home", url: "https://pro.nordoravital.com" },
          {
            name: "Technology Comparisons",
            url: `https://pro.nordoravital.com/${locale}/compare`,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#d8cec2] bg-gradient-to-b from-[#082721] to-[#0e3d34] px-5 py-20 text-[#f6f1ea] sm:px-8 sm:py-28 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(111,138,122,0.25),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#efe9e2] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a58592]" />
              {content.badge}
            </div>
            <h1 className="mt-4 font-heading text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.08] tracking-tight text-white">
              {content.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#efe9e2]/85 sm:text-xl">
              {content.subhead}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Intro explainer */}
      <section className="border-b border-[#d8cec2] bg-[#fbf7ef] px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-4xl text-sm leading-relaxed text-[#1e2a22]/85 sm:text-base">
            {content.introText}
          </p>
        </div>
      </section>

      {/* Comparison Cards Grid */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-3">
            {content.cards.map((card, idx) => (
              <FadeUp key={card.slug} delay={(idx + 1) as 1 | 2 | 3}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-[#d8cec2] bg-white p-7 shadow-sm transition hover:border-[#0e3d34] hover:shadow-md">
                  <div>
                    <span className="inline-block rounded-md bg-[#6f8a7a]/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2e6955]">
                      {card.tag}
                    </span>
                    <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-[#1e2a22] group-hover:text-[#0e3d34]">
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#1e2a22]/80">
                      {card.description}
                    </p>
                    <div className="mt-5 rounded-lg border border-[#d8cec2]/80 bg-[#fbf7ef] p-3 text-xs text-[#1e2a22]/85">
                      <strong className="text-[#0e3d34]">Key distinction:</strong>{" "}
                      {card.keyDifference}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#d8cec2]/60">
                    <Link
                      href={`/compare/${card.slug}`}
                      className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[#0e3d34] transition group-hover:translate-x-1"
                    >
                      {card.cta}
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Box */}
      <section className="border-t border-[#d8cec2] bg-[#ece5dc] px-5 py-10 text-xs leading-relaxed text-[#1e2a22]/75 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="font-heading text-sm font-bold text-[#0e3d34]">
            {content.complianceNoteTitle}
          </h3>
          <p className="mt-2 max-w-4xl">{content.complianceNoteBody}</p>
        </div>
      </section>
    </div>
  );
}
