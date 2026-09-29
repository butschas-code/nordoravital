"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BrandArc } from "@/components/brand-arc";
import { CampaignFloatingCta } from "@/components/campaign/campaign-floating-cta";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { ClinicWorkflowSimulator } from "@/components/professionals/clinic-workflow-simulator";
import { FadeUp } from "@/components/fade-up";
import { CAMPAIGN_SHARE_ALIASES, type CampaignSlug } from "@/lib/campaign-slugs";
import type {
  ProfessionalCategoryGroup,
  ProfessionalDirectoryContent,
} from "@/lib/professional-directory-content";

interface ProfessionalDirectoryViewProps {
  content: ProfessionalDirectoryContent;
  locale: string;
}

const SOCIAL_PROOF_QUOTES: Record<
  string,
  { quote: string; attribution: string; role: string; stat1: { val: string; lbl: string }; stat2: { val: string; lbl: string } }
> = {
  en: {
    quote:
      "Integrating sanza into our daily protocol delivered immediate vascular and microcirculatory benefits without adding a single minute of therapist hands-on time.",
    attribution: "Dr. med. H. Schulz",
    role: "Clinical Director & Orthopedic Rehabilitation Director",
    stat1: { val: "100%", lbl: "Passive Room Flow" },
    stat2: { val: "0 min", lbl: "Staff Overhead" },
  },
  de: {
    quote:
      "Die Integration von sanza in unsere Behandlungsabläufe brachte signifikante mikrozirkulatorische Effekte – ohne eine einzige zusätzliche Minute Behandlungszeit durch unsere Therapeuten.",
    attribution: "Dr. med. H. Schulz",
    role: "Ärztlicher Leiter & Facharzt für Orthopädische Rehabilitation",
    stat1: { val: "100%", lbl: "Passiver Ablauf" },
    stat2: { val: "0 min", lbl: "Therapeuten-Mehraufwand" },
  },
  lv: {
    quote:
      "sanza integrēšana mūsu ikdienas protokolā sniedza tūlītējus mikrocirkulācijas uzlabojumus, neprasot ne minūti papildu terapeita klīniskā darba.",
    attribution: "Dr. med. H. Šulcs",
    role: "Klīnikas vadītājs & rehabilitācijas nodaļas vadītājs",
    stat1: { val: "100%", lbl: "Pasīva plūsma" },
    stat2: { val: "0 min", lbl: "Papildu personāla laiks" },
  },
  ru: {
    quote:
      "Интеграция sanza в наши ежедневные протоколы обеспечила выраженный эффект улучшения микроциркуляции без дополнительных затрат времени медперсонала.",
    attribution: "Д-р мед. Х. Шульц",
    role: "Главный врач клиники ортопедической реабилитации",
    stat1: { val: "100%", lbl: "Пассивный протокол" },
    stat2: { val: "0 мин", lbl: "Времени персонала" },
  },
};

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

  const socialProof = SOCIAL_PROOF_QUOTES[locale] ?? SOCIAL_PROOF_QUOTES.en;

  return (
    <div className="professional-directory-view mx-auto max-w-[1240px] px-4 pb-24 pt-10 sm:px-6 md:px-8 lg:px-10">
      {/* ═════════ DIRECTORY FILTER BAR & SEARCH ═════════ */}
      <div className="flex flex-col gap-5 border-b border-[#d8cec2]/80 pb-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-[#0e3d34] text-white shadow-md ring-2 ring-[#0e3d34]/20 scale-[1.02]"
                    : "border border-[#d8cec2] bg-white/90 text-[#1e2a22] hover:border-[#0e3d34]/40 hover:bg-white hover:text-[#0e3d34]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              locale === "de"
                ? "Fachbereich oder Stichwort suchen..."
                : locale === "lv"
                  ? "Meklēt nozari vai atslēgvārdu..."
                  : locale === "ru"
                    ? "Поиск направления или услуги..."
                    : "Search sector or protocol..."
            }
            className="w-full rounded-full border border-[#d8cec2] bg-white px-4 py-2.5 pl-10 text-xs text-[#1e2a22] placeholder:text-[#1e2a22]/50 shadow-sm focus:border-[#0e3d34] focus:outline-none focus:ring-2 focus:ring-[#0e3d34]/20"
          />
          <svg
            className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-[#1e2a22]/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
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

      {/* ═════════ SECTORS BENTO GRID ═════════ */}
      <div className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f8a7a]">
            {locale === "de"
              ? `Zeige ${filteredSectors.length} von ${content.sectors.length} Fachbereichen`
              : locale === "lv"
                ? `Rāda ${filteredSectors.length} no ${content.sectors.length} nozarēm`
                : locale === "ru"
                  ? `Показано ${filteredSectors.length} из ${content.sectors.length} направлений`
                  : `Showing ${filteredSectors.length} of ${content.sectors.length} clinical sectors`}
          </p>
          {selectedCategory !== "all" && (
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs font-semibold text-[#0e3d34] hover:underline"
            >
              {locale === "de"
                ? "Filter zurücksetzen"
                : locale === "lv"
                  ? "Atiestatīt filtru"
                  : locale === "ru"
                    ? "Сбросить фильтр"
                    : "Reset filter"}
            </button>
          )}
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSectors.map((sector, idx) => {
            const href = getSectorHref(sector.slug);
            return (
              <FadeUp key={sector.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="campaign-card group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#d8cec2]/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0e3d34]/60 hover:shadow-xl sm:rounded-3xl">
                  {/* Photo Header with Zoom Effect */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e3d34]/10">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 380px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      aria-hidden
                    />
                    {/* Index watermark */}
                    <span
                      aria-hidden
                      className="absolute left-4 top-3 font-heading text-2xl font-bold text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {/* Category pill badge */}
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#0e3d34] shadow-sm backdrop-blur-md">
                      {sector.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="font-heading text-xl font-bold leading-snug text-[#1e2a22] transition-colors group-hover:text-[#0e3d34]">
                        {sector.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#1e2a22]/80">
                        {sector.summary}
                      </p>
                      <div className="mt-4 rounded-xl border border-[#d8cec2]/80 bg-[#fbf7ef] p-3 text-xs leading-relaxed text-[#1e2a22]">
                        <strong className="font-bold text-[#0e3d34]">
                          {locale === "de"
                            ? "Praxis-Integration:"
                            : locale === "lv"
                              ? "Prakses plūsma:"
                              : locale === "ru"
                                ? "В интеграции:"
                                : "Clinical Flow:"}
                        </strong>{" "}
                        {sector.workflowHighlight}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-[#d8cec2]/60 pt-4">
                      <Link
                        href={href}
                        className="group/btn inline-flex w-full items-center justify-between rounded-xl bg-[#0e3d34] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#11463b] hover:shadow-md"
                      >
                        <span>{content.viewSectorPage}</span>
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* ═════════ CLINIC WORKFLOW SIMULATOR (Interactive Showcase) ═════════ */}
      <section className="mt-28">
        <FadeUp>
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border border-[#0e3d34]/20 bg-[#0e3d34]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0e3d34]">
              {content.workflowEyebrow}
            </span>
            <h2 className="mt-3 font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold tracking-tight text-[#1e2a22]">
              {content.workflowTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#1e2a22]/75">
              {locale === "de"
                ? "Erleben Sie interaktiv, wie sanza sich nahtlos in Ihren Praxisrhythmus vor, während oder nach der Hauptbehandlung einfügt."
                : locale === "lv"
                  ? "Interaktīvi pārbaudiet, kā sanza iekļaujas jūsu kabineta darba plūsmā pirms, paralēli vai pēc pamatprocedūras."
                  : locale === "ru"
                    ? "Узнайте интерактивно, как sanza интегрируется в график процедур до, во время или после основного приема."
                    : "Simulate step-by-step room flow integration before, during, or after primary therapeutic interventions."}
            </p>
          </div>
        </FadeUp>
        <ClinicWorkflowSimulator locale={locale} />
      </section>

      {/* ═════════ SOCIAL PROOF QUOTE PANEL (Full-Bleed Sales Blueprint) ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-28 w-screen max-w-[100vw] py-16 sm:py-20 md:py-24"
        aria-label="Clinical leadership endorsement"
      >
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <article className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 sm:rounded-[28px]">
              {/* Background photo & overlay */}
              <div className="absolute inset-0">
                <Image
                  src="/images/campaign/quote-background.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "linear-gradient(115deg, rgba(8,39,33,0.92) 0%, rgba(14,61,52,0.78) 45%, rgba(165,133,146,0.55) 100%)",
                  }}
                />
              </div>

              {/* Quote Content & Stat Chips */}
              <div className="relative grid gap-8 px-6 py-12 sm:px-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:px-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a3c2b0]">
                    {locale === "de"
                      ? "Klinische Praxiserfahrung"
                      : locale === "lv"
                        ? "Klīniskā prakses pieredze"
                        : locale === "ru"
                          ? "Опыт клинической практики"
                          : "Clinical Practice Experience"}
                  </p>
                  <blockquote className="mt-4 font-heading text-[clamp(1.4rem,4vw,2.1rem)] font-semibold leading-snug text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
                    “{socialProof.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
                    <strong className="text-white font-bold">{socialProof.attribution}</strong> —{" "}
                    {socialProof.role}
                  </figcaption>
                </div>

                {/* Mini Stat Chips */}
                <div className="hidden shrink-0 grid-cols-1 gap-4 md:grid">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">
                      {socialProof.stat1.val}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/80">
                      {socialProof.stat1.lbl}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">
                      {socialProof.stat2.val}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/80">
                      {socialProof.stat2.lbl}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ SECTOR FAQS ═════════ */}
      <section className="mt-28 rounded-2xl border border-[#d8cec2] bg-white p-8 sm:p-12 sm:rounded-3xl shadow-sm">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
              {content.faqEyebrow}
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#1e2a22] sm:text-3xl">
              {content.faqTitle}
            </h2>
          </div>
        </FadeUp>

        <div className="mt-10 divide-y divide-[#d8cec2]/80">
          {content.faqs.map((faq, fIdx) => (
            <FadeUp key={faq.question} delay={((fIdx % 3) + 1) as 1 | 2 | 3}>
              <div className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-heading text-base font-bold text-[#1e2a22] sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#1e2a22]/85 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═════════ FINAL CTA BAND (Sales Blueprint with 3D Silhouette) ═════════ */}
      <section
        className="home-band--cta relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-28 w-screen max-w-[100vw] overflow-hidden py-20 sm:py-28 md:py-32"
        aria-labelledby="sectors-final-cta-heading"
      >
        <div className="campaign-cta-glow" aria-hidden />
        <div className="arc-watermark" aria-hidden>
          <div className="campaign-arc-drift absolute -left-32 -bottom-32">
            <BrandArc color="#FFFFFF" size={680} className="opacity-[0.08]" />
          </div>
        </div>

        {/* Floating 3D Generator Silhouette */}
        <div
          className="pointer-events-none absolute right-[-5rem] top-1/2 hidden -translate-y-1/2 opacity-[0.22] lg:block"
          aria-hidden
        >
          <Image
            src="/images/sanza_generator_611_shadow.png"
            alt=""
            width={440}
            height={440}
            className="select-none"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a3c2b0]">
              {content.ctaEyebrow}
            </p>
            <h2
              id="sectors-final-cta-heading"
              className="mt-3 font-heading text-[clamp(1.9rem,5vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
            >
              {content.ctaTitle}
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {content.ctaBody}
            </p>
          </FadeUp>

          <FadeUp delay={2}>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <ContactDrawerTrigger
                label={content.ctaPrimary}
                options={{
                  professionalCategory: "physiotherapists",
                  message: "Inquiry from sectors directory: requesting clinical consultation and on-site pilot trial.",
                }}
                className="btn-primary group inline-flex justify-center"
              >
                <span>{content.ctaPrimary}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </ContactDrawerTrigger>
              <ContactDrawerTrigger
                label={content.ctaSecondary}
                options={{
                  professionalCategory: "physiotherapists",
                  message: "Please send the sector clinical integration overview and pricing datasheets.",
                }}
                className="btn-ghost-white inline-flex justify-center"
              >
                {content.ctaSecondary}
              </ContactDrawerTrigger>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Floating Sticky CTA Pill */}
      <CampaignFloatingCta
        label={content.ctaPrimary}
        options={{
          professionalCategory: "physiotherapists",
          message: "Inquiry from sectors directory floating CTA: requesting practice demonstration.",
        }}
      />
    </div>
  );
}
