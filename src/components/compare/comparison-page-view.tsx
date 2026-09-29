import type { FC } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BrandArc } from "@/components/brand-arc";
import { CampaignFloatingCta } from "@/components/campaign/campaign-floating-cta";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { FadeUp } from "@/components/fade-up";
import { JsonLd } from "@/components/seo/json-ld";
import type { ComparisonDetailContent } from "@/lib/comparison-content";

interface ComparisonPageViewProps {
  content: ComparisonDetailContent;
  locale: string;
}

const COMPARISON_HERO_BG: Record<string, string> = {
  "pemf-systems": "/images/sanza recovery 01.jpg",
  "pemf-vs-red-light": "/images/sanza focus and presence.jpg",
  "frequency-vs-cold-plunge": "/images/sanza, less wired.jpg",
};

export const ComparisonPageView: FC<ComparisonPageViewProps> = ({
  content,
  locale,
}) => {
  const heroBg = COMPARISON_HERO_BG[content.slug] ?? "/images/sanza comfort routines.jpg";

  const statLabels: Record<string, { value: string; label: string }[]> = {
    en: [
      { value: "3-in-1", label: "Multi-Wave Synchronized" },
      { value: "0 min", label: "Therapist Table Supervision" },
      { value: "€0", label: "Consumables & Disposables" },
      { value: "100%", label: "Cellular & Capillary Reach" },
    ],
    de: [
      { value: "3-in-1", label: "Synchronisierte Modalitäten" },
      { value: "0 min", label: "Therapeuten-Mehraufwand" },
      { value: "0 €", label: "Verbrauchs- & Folgekosten" },
      { value: "100%", label: "Zelluläre & vaskuläre Tiefe" },
    ],
    lv: [
      { value: "3-in-1", label: "Sinhronizētas tehnoloģijas" },
      { value: "0 min", label: "Papildu terapeita laiks" },
      { value: "0 €", label: "Patēriņa materiālu izmaksas" },
      { value: "100%", label: "Šūnu & kapilāru iedarbība" },
    ],
    ru: [
      { value: "3-в-1", label: "Синхронных метода" },
      { value: "0 мин", label: "Времени персонала" },
      { value: "0 €", label: "Расходных материалов" },
      { value: "100%", label: "Клеточная и сосудистая глубина" },
    ],
  };

  const currentStats = statLabels[locale] ?? statLabels.en;

  const socialProofQuote = {
    en: {
      quote:
        "When comparing recovery systems, clinicians often look only at peak power or single frequencies. sanza's multi-wave synchronized design addresses vasomotion and cellular resonance simultaneously — delivering results that single-modality systems simply cannot match.",
      author: "Dr. med. H. Schulz",
      role: "Sports Medicine & Orthopedic Rehabilitation Director",
    },
    de: {
      quote:
        "Beim Vergleich von Regenerationssystemen wird oft nur auf isolierte Spitzenleistung geschaut. Das synchronisierte Multi-Frequenz-Design von sanza stimuliert Vasomotion und Zellresonanz zugleich – ein Effekt, den Monotherapie-Geräte prinzipbedingt nicht erreichen können.",
      author: "Dr. med. H. Schulz",
      role: "Ärztlicher Leiter & Facharzt für Sportmedizin",
    },
    lv: {
      quote:
        "Salīdzinot atjaunošanās sistēmas, bieži tiek vērtēta tikai viena izolēta funkcija. sanza sinhronizētā daudzviļņu arhitektūra vienlaicīgi stimulē vazomociju un šūnu rezonansi, nodrošinot efektivitāti, ko viena metode nespēj sniegt.",
      author: "Dr. med. H. Šulcs",
      role: "Klīnikas vadītājs & sporta medicīnas speciālists",
    },
    ru: {
      quote:
        "Сравнивая системы регенерации, специалисты нередко оценивают лишь единичные параметры. Синхронная мультичастотная архитектура sanza одновременно стимулирует вазомоцию и клеточный резонанс, чего невозможно достичь изолированными моно-устройствами.",
      author: "Д-р мед. Х. Шульц",
      role: "Главный врач клиники и специалист по спортивной медицине",
    },
  }[locale] ?? {
    quote:
      "When comparing recovery systems, clinicians often look only at peak power or single frequencies. sanza's multi-wave synchronized design addresses vasomotion and cellular resonance simultaneously — delivering results that single-modality systems simply cannot match.",
    author: "Dr. med. H. Schulz",
    role: "Sports Medicine & Orthopedic Rehabilitation Director",
  };

  return (
    <div className="comparison-page site-marketing-root w-full overflow-hidden bg-[#f6f1ea] text-[#1e2a22]">
      <JsonLd
        breadcrumbs={[
          { name: "Home", url: "https://pro.nordoravital.com" },
          {
            name: "Comparisons",
            url: `https://pro.nordoravital.com/${locale}/compare`,
          },
          {
            name: content.competitorName,
            url: `https://pro.nordoravital.com/${locale}/compare/${content.slug}`,
          },
        ]}
        product={{
          name: "sanza Modular Wellness & Frequency System",
          description: content.metaDescription,
          brand: "sanza",
          url: `https://pro.nordoravital.com/${locale}/compare/${content.slug}`,
        }}
        faq={content.faqs}
      />

      {/* ═════════ 1. CINEMATIC HERO (Sales Blueprint) ═════════ */}
      <section
        className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
        aria-labelledby="compare-detail-hero-heading"
      >
        <div className="relative min-h-[min(720px,90svh)] lg:min-h-[min(82dvh,760px)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={heroBg}
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

          {/* Hero text & Dual Comparison Highlight Cards */}
          <div className="relative z-10 mx-auto flex min-h-[min(720px,90svh)] max-w-[1200px] flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-8 lg:min-h-[min(82dvh,760px)] lg:pb-24 lg:pt-36 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <FadeUp immediate delay={1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#efe9e2] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a3c2b0] shadow-[0_0_8px_#a3c2b0]" />
                  {content.badge}
                </div>
              </FadeUp>
              <FadeUp immediate delay={2} className="mt-5">
                <h1
                  id="compare-detail-hero-heading"
                  className="font-heading text-[clamp(2.1rem,6vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {content.heroHeadline}
                </h1>
              </FadeUp>
              <FadeUp immediate delay={3} className="mt-6">
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/92 [text-shadow:0_1px_10px_rgba(0,0,0,0.3)] sm:text-lg">
                  {content.heroSubhead}
                </p>
              </FadeUp>
            </div>

            {/* Quick Dual Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeUp delay={4}>
                <div className="h-full rounded-2xl border-2 border-[#a3c2b0]/60 bg-[#082721]/80 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#a3c2b0]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a3c2b0]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a3c2b0] shadow-[0_0_6px_#a3c2b0]" />
                      sanza Multi-Wave System
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                      3-in-1 Engine
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-xl font-bold text-white sm:text-2xl">
                    {content.summaryCard.sanzaTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/88 sm:text-base">
                    {content.summaryCard.sanzaSummary}
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={5}>
                <div className="h-full rounded-2xl border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-md sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                      {content.competitorCategory}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      Conventional Modality
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-xl font-bold text-white/95 sm:text-2xl">
                    {content.summaryCard.competitorTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                    {content.summaryCard.competitorSummary}
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Quick Hero Action CTAs */}
            <FadeUp delay={6} className="mt-10 text-center">
              <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-5">
                <a
                  href="#specs-matrix"
                  className="btn-primary group inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  <span>
                    {locale === "de"
                      ? "Vergleichsmatrix analysieren"
                      : locale === "lv"
                        ? "Pētīt tehnisko matricu"
                        : locale === "ru"
                          ? "Смотреть спецификацию"
                          : "Review Technical Specification Matrix"}
                  </span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
                <ContactDrawerTrigger
                  label="Request Technical Presentation"
                  options={{ message: `Inquiry from comparison page: ${content.slug}` }}
                  className="btn-ghost-white inline-flex w-full items-center justify-center sm:w-auto"
                >
                  {locale === "de"
                    ? "Praxis-Teststellung anfragen"
                    : locale === "lv"
                      ? "Pieteikt testa demonstrāciju"
                      : locale === "ru"
                        ? "Запросить тестовую демонстрацию"
                        : "Request On-Site Trial Demo"}
                </ContactDrawerTrigger>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═════════ 2. 4-METRIC STAT STRIP ═════════ */}
      <section
        className="campaign-stat-strip relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-7 sm:py-12 md:py-14"
        aria-label="Direct technology benchmark parameters"
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

      {/* ═════════ 3. KEY TAKEAWAY CALLOUT ═════════ */}
      <section className="border-b border-[#d8cec2]/80 bg-[#fbf7ef] px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-[1200px] items-center gap-5 rounded-2xl border border-[#0e3d34]/20 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0e3d34]/10 text-2xl text-[#0e3d34]">
            💡
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0e3d34]">
              {locale === "de"
                ? "Wesentliche Kernunterscheidung"
                : locale === "lv"
                  ? "Būtiskākā tehniskā atšķirība"
                  : locale === "ru"
                    ? "Ключевое отличие систем"
                    : "Core Scientific Distinction"}
            </p>
            <p className="mt-1 font-heading text-base font-semibold leading-relaxed text-[#1e2a22] sm:text-lg">
              {content.keyTakeaway}
            </p>
          </div>
        </div>
      </section>

      {/* ═════════ 4. OBJECTIVE SPECIFICATION COMPARISON MATRIX ═════════ */}
      <section id="specs-matrix" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mb-10 max-w-2xl">
              <span className="inline-block rounded-full border border-[#0e3d34]/20 bg-[#0e3d34]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0e3d34]">
                {locale === "de"
                  ? "Verifizierte Parameter"
                  : locale === "lv"
                    ? "Verificēti tehniskie parametri"
                    : locale === "ru"
                      ? "Проверенные параметры"
                      : "Verified Technical Parameters"}
              </span>
              <h2 className="mt-3 font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold text-[#1e2a22]">
                {locale === "de"
                  ? "Detaillierte Spezifikationsmatrix"
                  : locale === "lv"
                    ? "Padziļināta specifikāciju matrica"
                    : locale === "ru"
                      ? "Детальная матрица характеристик"
                      : "Side-by-Side Specification Matrix"}
              </h2>
            </div>
          </FadeUp>

          <div className="overflow-x-auto rounded-2xl border border-[#d8cec2] bg-white shadow-md sm:rounded-3xl">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#0e3d34]/30 bg-[#082721] text-white">
                  <th className="p-5 font-heading text-xs font-bold uppercase tracking-wider text-white/80">
                    {content.tableHeaders.feature}
                  </th>
                  <th className="p-5 font-heading text-xs font-bold uppercase tracking-wider text-[#a3c2b0]">
                    {content.tableHeaders.sanza}
                  </th>
                  <th className="p-5 font-heading text-xs font-bold uppercase tracking-wider text-white/70">
                    {content.tableHeaders.competitor}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d8cec2]/70">
                {content.specs.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-[#f6f1ea]/80 ${
                      spec.highlight ? "bg-[#0e3d34]/[0.05]" : ""
                    }`}
                  >
                    <td className="p-5 font-semibold text-[#1e2a22]">
                      {spec.feature}
                      {spec.highlight && (
                        <span className="ml-2.5 inline-block rounded-full bg-[#0e3d34] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                          Key Adv.
                        </span>
                      )}
                    </td>
                    <td className="p-5 font-semibold text-[#0e3d34]">
                      {spec.sanza}
                    </td>
                    <td className="p-5 text-[#1e2a22]/75">
                      {spec.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═════════ 5. DEEP DIVE SECTIONS ═════════ */}
      {content.deepDiveSections.length > 0 && (
        <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-8 lg:grid-cols-2">
              {content.deepDiveSections.map((sec, idx) => (
                <FadeUp key={idx} delay={(idx + 1) as 1 | 2}>
                  <div className="campaign-card h-full rounded-2xl border border-[#d8cec2]/90 bg-white p-7 shadow-sm transition-all hover:shadow-md sm:rounded-3xl sm:p-9">
                    <span className="inline-block rounded-full bg-[#0e3d34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0e3d34]">
                      {locale === "de"
                        ? `Vertiefung 0${idx + 1}`
                        : locale === "lv"
                          ? `Padziļinājums 0${idx + 1}`
                          : locale === "ru"
                            ? `Разбор 0${idx + 1}`
                            : `Deep Dive 0${idx + 1}`}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-bold text-[#1e2a22] sm:text-2xl">
                      {sec.title}
                    </h3>
                    <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-[#1e2a22]/85 sm:text-base">
                      {sec.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════ 6. CLINICAL ROOM WORKFLOW COMPARISON ═════════ */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full border border-[#0e3d34]/20 bg-[#0e3d34]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0e3d34]">
                {locale === "de"
                  ? "Praxis-Ablauf"
                  : locale === "lv"
                    ? "Darba plūsma"
                    : locale === "ru"
                      ? "Рабочий процесс"
                      : "Practical Day-to-Day Operation"}
              </span>
              <h2 className="mt-3 font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold text-[#1e2a22]">
                {content.clinicalWorkflowComparison.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#1e2a22]/75">
                {content.clinicalWorkflowComparison.subtitle}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-8 md:grid-cols-2">
            <FadeUp delay={1}>
              <div className="campaign-card h-full rounded-2xl border-2 border-[#0e3d34] bg-white p-7 shadow-lg sm:rounded-3xl sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#0e3d34] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    sanza Automated Workflow
                  </span>
                  <span className="text-xs font-bold text-[#0e3d34]">
                    0 min Staff Overhead
                  </span>
                </div>
                <ol className="mt-8 space-y-4">
                  {content.clinicalWorkflowComparison.sanzaWorkflow.map((step, idx) => (
                    <li key={idx} className="flex gap-3.5 text-sm leading-relaxed text-[#1e2a22] sm:text-base">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0e3d34] text-xs font-bold text-white shadow-sm">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>

            <FadeUp delay={2}>
              <div className="campaign-card h-full rounded-2xl border border-[#d8cec2] bg-[#fbf7ef] p-7 shadow-sm sm:rounded-3xl sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#d8cec2] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1e2a22]/80">
                    {content.competitorName} Workflow
                  </span>
                  <span className="text-xs font-semibold text-[#1e2a22]/60">
                    Requires Supervision
                  </span>
                </div>
                <ol className="mt-8 space-y-4">
                  {content.clinicalWorkflowComparison.competitorWorkflow.map((step, idx) => (
                    <li key={idx} className="flex gap-3.5 text-sm leading-relaxed text-[#1e2a22]/75 sm:text-base">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d8cec2]/80 text-xs font-bold text-[#1e2a22]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═════════ 7. BUYER SELECTION GUIDE ═════════ */}
      <section className="border-t border-[#d8cec2]/80 bg-[#fbf7ef] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-[#0e3d34]/40 bg-white p-7 shadow-sm sm:rounded-3xl sm:p-9">
              <span className="inline-block rounded-full bg-[#0e3d34]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0e3d34]">
                Recommended Option
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-[#0e3d34] sm:text-2xl">
                {content.idealFor.sanzaTitle}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {content.idealFor.sanzaPoints.map((pt, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[#1e2a22]/90 sm:text-base">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0e3d34]/15 text-xs font-bold text-[#0e3d34]">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#d8cec2] bg-white p-7 shadow-sm sm:rounded-3xl sm:p-9">
              <span className="inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1e2a22]/60">
                Alternative Scenario
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-[#1e2a22]/70 sm:text-2xl">
                {content.idealFor.competitorTitle}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {content.idealFor.competitorPoints.map((pt, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[#1e2a22]/70 sm:text-base">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/10 text-xs font-bold text-[#1e2a22]/60">
                      →
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ 8. SOCIAL PROOF QUOTE PANEL (Full Bleed) ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24"
        aria-label="Clinical leadership endorsement"
      >
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <article className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 sm:rounded-[28px]">
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

              <div className="relative grid gap-8 px-6 py-12 sm:px-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:px-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a3c2b0]">
                    {locale === "de"
                      ? "Vergleichendes Expertenurteil"
                      : locale === "lv"
                        ? "Salīdzinošs ekspertu viedoklis"
                        : locale === "ru"
                          ? "Сравнительное экспертное мнение"
                          : "Comparative Clinical Assessment"}
                  </p>
                  <blockquote className="mt-4 font-heading text-[clamp(1.4rem,4vw,2.1rem)] font-semibold leading-snug text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
                    “{socialProofQuote.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
                    <strong className="text-white font-bold">{socialProofQuote.author}</strong> —{" "}
                    {socialProofQuote.role}
                  </figcaption>
                </div>

                <div className="hidden shrink-0 grid-cols-1 gap-4 md:grid">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">3-in-1</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/80">
                      Synchronized
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">0 min</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/80">
                      Staff Overhead
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ 9. FAQS ═════════ */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
                FAQ
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#1e2a22] sm:text-3xl">
                {locale === "de"
                  ? "Häufige Fragen zum Systemvergleich"
                  : locale === "lv"
                    ? "Biežāk uzdotie jautājumi par salīdzinājumu"
                    : locale === "ru"
                      ? "Часто задаваемые вопросы о сравнении"
                      : "Frequently Asked Comparison Questions"}
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-[#d8cec2] bg-white p-6 shadow-sm transition-all open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-heading text-base font-semibold text-[#1e2a22] group-open:text-[#0e3d34]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#1e2a22]/85 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ 10. FINAL CONVERSION CTA (Sales Blueprint with 3D Silhouette) ═════════ */}
      <section
        className="home-band--cta relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-20 sm:py-28 md:py-32"
        aria-labelledby="compare-page-final-cta-heading"
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
            <h2
              id="compare-page-final-cta-heading"
              className="font-heading text-[clamp(1.9rem,5vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
            >
              {locale === "de"
                ? "Erleben Sie den Multi-Technologie-Unterschied live"
                : locale === "lv"
                  ? "Novērtējiet daudztehnoloģiju priekšrocības klātienē"
                  : locale === "ru"
                    ? "Оцените преимущества мульти-технологии на практике"
                    : "Experience the Multi-Technology Difference Firsthand"}
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {locale === "de"
                ? "Buchen Sie eine Vorführung in Ihrer Praxis, prüfen Sie detaillierte Messprotokolle oder starten Sie eine 14-tägige Teststellung ohne Risiko."
                : locale === "lv"
                  ? "Piesakiet demonstrāciju savā iestādē, iepazīstieties ar tehniskajiem datiem vai sāciet 14 dienu izmēģinājuma programmu."
                  : locale === "ru"
                    ? "Запросите демонстрацию в вашей клинике, изучите технические протоколы или начните 14-дневную пробную оценку."
                    : "Request an on-site demonstration in your clinic, review complete technical datasheets, or discuss our 14-day trial evaluation program."}
            </p>
          </FadeUp>

          <FadeUp delay={2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:mt-10 sm:flex-row sm:gap-5">
              <ContactDrawerTrigger
                label="Request Technical Presentation"
                options={{ message: `Inquiry from comparison page: ${content.slug}` }}
                className="btn-primary group inline-flex justify-center"
              >
                <span>
                  {locale === "de"
                    ? "Praxis-Teststellung anfragen"
                    : locale === "lv"
                      ? "Pieteikt testa demonstrāciju"
                      : locale === "ru"
                        ? "Запросить тестовую демонстрацию"
                        : "Request Trial Demonstration"}
                </span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </ContactDrawerTrigger>
              <Link
                href="/compare"
                className="btn-ghost-white inline-flex justify-center"
              >
                {locale === "de"
                  ? "Alle Vergleiche ansehen"
                  : locale === "lv"
                    ? "Visi salīdzinājumi"
                    : locale === "ru"
                      ? "Все сравнения"
                      : "All Comparisons"}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ 11. EU COMPLIANCE & TRADEMARK NOTICE ═════════ */}
      <aside className="border-t border-[#d8cec2] bg-[#ece5dc] px-5 py-8 text-xs leading-relaxed text-[#1e2a22]/70 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-semibold uppercase tracking-wider text-[#0e3d34]">
            Legal Disclaimer & EU Comparative Advertising Compliance
          </p>
          <p className="mt-1.5">{content.legalDisclaimer}</p>
        </div>
      </aside>

      {/* Floating Sticky CTA Pill */}
      <CampaignFloatingCta
        label={
          locale === "de"
            ? "Teststellung anfragen"
            : locale === "lv"
              ? "Pieteikt demonstrāciju"
              : locale === "ru"
                ? "Запросить тест"
                : "Request Trial Demo"
        }
        options={{
          professionalCategory: "physiotherapists",
          message: `Inquiry from comparison page floating CTA: ${content.slug}`,
        }}
      />
    </div>
  );
};
