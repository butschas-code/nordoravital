import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface } from "@/lib/domains";
import {
  HOME_SITE_PAGES,
  HOME_SITE_SLUGS,
  isHomeSiteSlug,
} from "@/lib/home-site-content";
import { homeLocale } from "@/lib/home-copy";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return HOME_SITE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isHomeSiteSlug(slug)) return {};
  const page = HOME_SITE_PAGES[slug][homeLocale(locale)];
  return {
    title: `${page.eyebrow} | Nordora Vital Home`,
    description: page.description,
    metadataBase: new URL(getOriginForSurface("home")),
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${page.eyebrow} | Nordora Vital Home`,
      description: page.description,
      url: `${getOriginForSurface("home")}/${slug}`,
      siteName: "Nordora Vital Home",
      type: "website",
    },
  };
}

export default async function HomeSiteDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isHomeSiteSlug(slug)) notFound();

  const page = HOME_SITE_PAGES[slug][homeLocale(locale)];

  return (
    <HomeSiteLayout locale={locale}>
      <main>
        <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(111,138,122,0.17),transparent_30%),linear-gradient(145deg,#fbf7ef_0%,#f1e8da_56%,#e5d8c8_100%)]"
          />
          <div className="mx-auto max-w-[980px]">
            <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#6f8a7a]">
              {page.eyebrow}
            </p>
            <h1 className="max-w-[820px] font-heading text-[clamp(2.35rem,5.2vw,5.1rem)] leading-[1.01] tracking-tight text-[#17221d]">
              {page.title}
            </h1>
            <p className="mt-7 max-w-[690px] text-[1.08rem] leading-[1.74] text-[#1e2a22]/90 sm:text-[1.22rem]">
              {page.description}
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mx-auto grid max-w-[980px] gap-px overflow-hidden rounded-[8px] border border-[#d8cec2] bg-[#d8cec2]">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="grid gap-5 bg-[#fffaf2]/72 p-7 sm:grid-cols-[0.34fr_1fr] sm:p-9"
              >
                <h2 className="font-heading text-[1.35rem] leading-tight text-[#1e2a22]">
                  {section.title}
                </h2>
                <p className="max-w-[62ch] text-[1rem] leading-[1.76] text-[#1e2a22]/90">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </HomeSiteLayout>
  );
}
