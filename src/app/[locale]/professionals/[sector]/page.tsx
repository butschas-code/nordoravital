import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { RichLine } from "@/components/rich-line";
import { RecommendedProducts } from "@/components/professionals/recommended-products";
import { SectorBookingForm } from "@/components/professionals/sector-booking-form";
import { SectorHero } from "@/components/professionals/sector-hero";
import { SECTOR_SLUGS, type SectorSlug } from "@/lib/sector-slugs";
import { Link } from "@/i18n/navigation";
import type {
  ProfessionalProductsCopy,
  ProfessionalSectorContent,
} from "@/types/professional-page";

type Props = { params: Promise<{ locale: string; sector: string }> };

export function generateStaticParams() {
  return SECTOR_SLUGS.map((sector) => ({ sector }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sector, locale } = await params;
  if (!SECTOR_SLUGS.includes(sector as SectorSlug)) {
    return {};
  }
  const messages = (await import(`../../../../../messages/${locale}.json`)).default as {
    ProfessionalPages: Record<string, ProfessionalSectorContent>;
  };
  const page = messages.ProfessionalPages[sector];
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ProfessionalSectorPage({ params }: Props) {
  const { sector } = await params;
  if (!SECTOR_SLUGS.includes(sector as SectorSlug)) {
    notFound();
  }

  const messages = await getMessages();
  const pages = messages.ProfessionalPages as Record<string, ProfessionalSectorContent>;
  const content = pages[sector];
  const products = messages.ProfessionalProducts as ProfessionalProductsCopy;
  if (!content) {
    notFound();
  }

  return (
    <div className="space-y-16 md:space-y-20">
      <SectorHero content={content} />

      <section className="space-y-4" aria-labelledby="workflow-heading">
        <h2
          id="workflow-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-3xl"
        >
          <RichLine text={content.workflowTitle} />
        </h2>
        <p className="max-w-3xl text-[var(--brand-muted)]">
          <RichLine text={content.workflowIntro} />
        </p>
        <ul className="max-w-3xl list-disc space-y-3 pl-5 text-[var(--brand-muted)]">
          <li>{content.workflow1}</li>
          <li>{content.workflow2}</li>
          <li>{content.workflow3}</li>
        </ul>
      </section>

      <section className="space-y-6" aria-labelledby="testimonials-heading">
        <h2
          id="testimonials-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-3xl"
        >
          {content.testimonialsTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <figure className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-5">
            <blockquote className="text-sm leading-relaxed text-[var(--brand-heading)]">
              &ldquo;
              <RichLine text={content.quote1} />
              &rdquo;
            </blockquote>
            <figcaption className="mt-3 text-xs text-[var(--brand-muted)]">
              — {content.quote1Author}
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-5">
            <blockquote className="text-sm leading-relaxed text-[var(--brand-heading)]">
              &ldquo;
              <RichLine text={content.quote2} />
              &rdquo;
            </blockquote>
            <figcaption className="mt-3 text-xs text-[var(--brand-muted)]">
              — {content.quote2Author}
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-5">
            <blockquote className="text-sm leading-relaxed text-[var(--brand-heading)]">
              &ldquo;
              <RichLine text={content.quote3} />
              &rdquo;
            </blockquote>
            <figcaption className="mt-3 text-xs text-[var(--brand-muted)]">
              — {content.quote3Author}
            </figcaption>
          </figure>
        </div>
      </section>

      <RecommendedProducts copy={products} />

      <section
        className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] px-6 py-10 text-center sm:px-10"
        aria-labelledby="sector-cta-heading"
      >
        <h2
          id="sector-cta-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-3xl"
        >
          <RichLine text={content.ctaTitle} />
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--brand-muted)]">
          <RichLine text={content.ctaLead} />
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            {content.ctaBookDemo}
          </Link>
          <Link
            href="/pilot"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--brand-primary)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--brand-primary)] transition hover:bg-[var(--brand-primary)]/10"
          >
            {content.ctaPilot}
          </Link>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="sector-form-heading">
        <p
          id="sector-form-heading"
          className="mx-auto max-w-2xl text-center text-base font-medium leading-relaxed text-[var(--brand-heading)]"
        >
          {content.ctaFormBridge}
        </p>
        <SectorBookingForm
          categoryLabel={content.categoryLabel}
          sectorSlug={sector}
        />
      </section>
    </div>
  );
}
