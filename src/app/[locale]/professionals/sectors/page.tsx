import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { BrandArc } from "@/components/brand-arc";
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

  const statLabels: Record<string, { value: string; label: string }[]> = {
    en: [
      { value: "16", label: "Specialized Clinical Sectors" },
      { value: "0 min", label: "Hands-On Table Disruption" },
      { value: "15", label: "Chronobiological Programs" },
      { value: "60,000+", label: "Active European Treatments" },
    ],
    de: [
      { value: "16", label: "Spezialisierte Praxisfelder" },
      { value: "0 min", label: "Therapeutische Mehrarbeit" },
      { value: "15", label: "Chronobiologische Programme" },
      { value: "60.000+", label: "Aktive Behandlungen Europaweit" },
    ],
    lv: [
      { value: "16", label: "Klīniskās & labsajūtas nozares" },
      { value: "0 min", label: "Papildu terapeita laiks" },
      { value: "15", label: "Hronobioloģiskās programmas" },
      { value: "60 000+", label: "Aktīvi Eiropas lietotāji" },
    ],
    ru: [
      { value: "16", label: "Специализированных направлений" },
      { value: "0 мин", label: "Дополнительного времени врача" },
      { value: "15", label: "Хронобиологических программ" },
      { value: "60 000+", label: "Активных пользователей в Европе" },
    ],
  };

  const currentStats = statLabels[locale] ?? statLabels.en;

  return (
    <article className="site-marketing-root overflow-hidden">
      <JsonLd data={jsonLdData} />

      {/* ═════════ CINEMATIC HERO (Sales Blueprint) ═════════ */}
      <section
        className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
        aria-labelledby="sectors-hero-heading"
      >
        <div className="relative min-h-[min(680px,86svh)] lg:min-h-[min(78dvh,720px)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/professionals-hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Dark gradient overlay */}
          <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />

          {/* Drifting BrandArc watermark */}
          <div className="arc-watermark" aria-hidden>
            <div className="campaign-arc-drift absolute -right-32 -top-32">
              <BrandArc color="#FFFFFF" size={760} className="opacity-[0.08]" />
            </div>
          </div>

          {/* Hero text & CTAs */}
          <div className="relative z-10 mx-auto flex min-h-[min(680px,86svh)] max-w-[1200px] flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-8 lg:min-h-[min(78dvh,720px)] lg:pb-24 lg:pt-36 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <FadeUp immediate delay={1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#efe9e2] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a3c2b0] shadow-[0_0_8px_#a3c2b0]" />
                  {content.eyebrow}
                </div>
              </FadeUp>
              <FadeUp immediate delay={2} className="mt-5">
                <h1
                  id="sectors-hero-heading"
                  className="font-heading text-[clamp(2.1rem,6vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {content.title}
                </h1>
              </FadeUp>
              <FadeUp immediate delay={3} className="mt-6">
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/92 [text-shadow:0_1px_10px_rgba(0,0,0,0.3)] sm:text-lg">
                  {content.subtitle}
                </p>
              </FadeUp>
              <FadeUp immediate delay={4} className="mt-8 sm:mt-10">
                <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-5">
                  <a
                    href="#sectors-directory"
                    className="btn-primary group inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                  >
                    <span>
                      {locale === "de"
                        ? "16 Fachbereiche erkunden"
                        : locale === "lv"
                          ? "Pētīt 16 klīniskās nozares"
                          : locale === "ru"
                            ? "Смотреть 16 направлений"
                            : "Explore 16 Clinical Sectors"}
                    </span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </a>
                  <a
                    href="https://cal.eu/nordoravital/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-white inline-flex w-full items-center justify-center sm:w-auto"
                  >
                    {locale === "de"
                      ? "Praxis-Erstgespräch buchen"
                      : locale === "lv"
                        ? "Pieteikt iepazīšanās zvanu"
                        : locale === "ru"
                          ? "Забронировать консультацию"
                          : "Schedule Practice Consultation"}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ 4-METRIC STAT STRIP ═════════ */}
      <section
        className="campaign-stat-strip relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-7 sm:py-12 md:py-14"
        aria-label="Sector directory statistics"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-4">
            {currentStats.map((stat, i) => (
              <li key={i} className="px-2 py-4 sm:px-5 sm:py-3 md:px-6">
                <FadeUp delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="grid grid-cols-[4.75rem_minmax(0,1fr)] items-center gap-4 text-left sm:flex sm:flex-col sm:items-center sm:text-center md:items-start md:text-left">
                    <span className="font-heading text-[2.4rem] font-bold leading-none tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.45)] sm:text-[clamp(2.2rem,4.8vw,3.2rem)]">
                      {stat.value}
                    </span>
                    <span className="text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.11em] text-[var(--brand-secondary)]/95 sm:mt-3 sm:text-xs sm:tracking-[0.14em] md:text-sm md:tracking-[0.16em]">
                      {stat.label}
                    </span>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Directory Filter, Grid & Workflow Simulator */}
      <div id="sectors-directory">
        <ProfessionalDirectoryView content={content} locale={locale} />
      </div>
    </article>
  );
}
