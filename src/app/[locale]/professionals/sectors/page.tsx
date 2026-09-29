import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/fade-up";
import { JsonLd } from "@/components/seo/json-ld";
import { ProfessionalDirectoryView } from "@/components/professionals/professional-directory-view";
import { routing, SITE_LOCALES, type Locale } from "@/i18n/routing";
import { getOriginForSurface } from "@/lib/domains";
import { getProfessionalDirectoryContent } from "@/lib/professional-directory-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getProfessionalDirectoryContent(locale);
  const proOrigin = getOriginForSurface("pro");

  const languages: Record<string, string> = {};
  for (const loc of SITE_LOCALES) {
    languages[loc] = `${proOrigin}/${loc}/professionals/sectors`;
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    metadataBase: new URL(proOrigin),
    alternates: {
      canonical: `/${locale}/professionals/sectors`,
      languages,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${proOrigin}/${locale}/professionals/sectors`,
      siteName: "Nordora Vital Professional",
      type: "website",
      images: [
        {
          url: "/images/professionals-hero.jpg",
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: ["/images/professionals-hero.jpg"],
    },
  };
}

export default async function ProfessionalSectorsDirectoryPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const content = getProfessionalDirectoryContent(locale);
  const proOrigin = getOriginForSurface("pro");
  const canonicalUrl = `${proOrigin}/${locale}/professionals/sectors`;

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Nordora Vital Professional Sectors Hub",
      description: content.metaDescription,
      url: canonicalUrl,
      medicalSpecialty: [
        "Physiotherapy",
        "Chiropractic",
        "SportsMedicine",
        "Dentistry",
        "HolisticMedicine",
      ],
      offers: {
        "@type": "Offer",
        name: "On-site clinic demonstration and pilot evaluation",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: content.title,
      description: content.subtitle,
      itemListElement: content.sectors.map((sector, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: sector.name,
        description: sector.summary,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${proOrigin}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Professionals",
          item: `${proOrigin}/${locale}/professionals`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: content.eyebrow,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <article className="site-marketing-root">
      <JsonLd data={jsonLdData} />

      {/* Directory Hub Hero */}
      <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px] text-center">
          <FadeUp>
            <p className="campaign-eyebrow campaign-eyebrow--center mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
              {content.eyebrow}
            </p>
            <h1 className="font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-bold tracking-tight text-[var(--brand-heading)]">
              {content.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
              {content.subtitle}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Directory Filter, Grid & Workflow Simulator */}
      <ProfessionalDirectoryView content={content} locale={locale} />
    </article>
  );
}
