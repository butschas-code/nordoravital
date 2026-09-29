"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { ClinicWorkflowSimulator } from "@/components/professionals/clinic-workflow-simulator";
import { CAMPAIGN_SHARE_ALIASES, type CampaignSlug } from "@/lib/campaign-slugs";
import type {
  ProfessionalCategoryGroup,
  ProfessionalDirectoryContent,
} from "@/lib/professional-directory-content";

interface ProfessionalDirectoryViewProps {
  content: ProfessionalDirectoryContent;
  locale: string;
}

export function ProfessionalDirectoryView({ content, locale }: ProfessionalDirectoryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProfessionalCategoryGroup>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSectors = useMemo(() => {
    return content.sectors.filter((sector) => {
      const matchesCategory =
        selectedCategory === "all" || sector.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        sector.name.toLowerCase().includes(q) ||
        sector.summary.toLowerCase().includes(q) ||
        sector.badge.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [content.sectors, selectedCategory, searchQuery]);

  const getSectorHref = (slug: CampaignSlug) => {
    if (locale === "de") {
      const alias = CAMPAIGN_SHARE_ALIASES.de[slug];
      return `/${alias ?? slug}`;
    }
    if (locale === "en") {
      const alias = CAMPAIGN_SHARE_ALIASES.en[slug];
      return `/${alias ?? slug}`;
    }
    return `/${slug}`;
  };

  const filterTabs: { id: ProfessionalCategoryGroup; label: string }[] = [
    { id: "all", label: content.allFilter },
    { id: "clinical", label: content.clinicalFilter },
    { id: "manual", label: content.manualFilter },
    { id: "sports", label: content.sportsFilter },
    { id: "clubs", label: content.clubsFilter },
    { id: "hospitality", label: content.hospitalityFilter },
  ];

  return (
    <div className="professional-directory-view mx-auto max-w-[1200px] px-4 pb-20 pt-8 sm:px-6 md:px-8 lg:px-10">
      {/* Directory Filter Bar & Search */}
      <div className="mt-8 flex flex-col gap-4 border-b border-[var(--brand-border)] pb-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  isSelected
                    ? "bg-[#0e3d34] text-white shadow-sm"
                    : "border border-[#d8cec2] bg-white text-[#1e2a22] hover:bg-[#f6f1ea]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sectors..."
            className="w-full rounded-full border border-[#d8cec2] bg-white px-4 py-2 pl-9 text-xs text-[#1e2a22] placeholder:text-[#1e2a22]/50 focus:border-[#0e3d34] focus:outline-none"
          />
          <svg
            className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-[#1e2a22]/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Results Count & Grid */}
      <div className="mt-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-[#6f8a7a]">
          Showing {filteredSectors.length} of {content.sectors.length} sectors
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSectors.map((sector) => {
            const href = getSectorHref(sector.slug);
            return (
              <div
                key={sector.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#d8cec2] bg-white shadow-sm transition hover:shadow-md hover:border-[#6f8a7a]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e3d34]/10">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#0e3d34] backdrop-blur-sm">
                    {sector.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#1e2a22] group-hover:text-[#0e3d34]">
                      {sector.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#1e2a22]/80 sm:text-sm">
                      {sector.summary}
                    </p>
                    <div className="mt-4 rounded-lg bg-[#f6f1ea] p-2.5 text-xs text-[#1e2a22]/90">
                      <span className="font-bold text-[#2e6955]">Flow:</span> {sector.workflowHighlight}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#d8cec2]/60">
                    <Link
                      href={href}
                      className="inline-flex w-full items-center justify-between rounded-lg bg-[#0e3d34] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#11463b]"
                    >
                      <span>{content.viewSectorPage}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Clinic Workflow Simulator */}
      <section className="mt-24">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
            {content.workflowEyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#1e2a22]">
            {content.workflowTitle}
          </h2>
        </div>
        <ClinicWorkflowSimulator locale={locale} />
      </section>

      {/* FAQ Section */}
      <section className="mt-24 rounded-2xl border border-[#d8cec2] bg-white p-8 sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
            {content.faqEyebrow}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#1e2a22] sm:text-3xl">
            {content.faqTitle}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[#d8cec2]/80">
          {content.faqs.map((faq) => (
            <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
              <h3 className="text-base font-bold text-[#1e2a22]">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1e2a22]/85">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-20 rounded-2xl bg-[#0e3d34] p-8 text-center text-white sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a3c2b0]">
          {content.ctaEyebrow}
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
          {content.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          {content.ctaBody}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <ContactDrawerTrigger
            options={{ professionalCategory: "physiotherapists" }}
            className="btn-primary inline-flex justify-center bg-white text-[#0e3d34] hover:bg-white/90"
          >
            {content.ctaPrimary}
          </ContactDrawerTrigger>
          <ContactDrawerTrigger
            options={{ professionalCategory: "physiotherapists", message: "Please send the clinic pilot outline." }}
            className="btn-ghost-white inline-flex justify-center"
          >
            {content.ctaSecondary}
          </ContactDrawerTrigger>
        </div>
      </section>
    </div>
  );
}
