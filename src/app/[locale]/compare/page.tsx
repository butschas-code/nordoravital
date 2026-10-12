import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BrandArc } from "@/components/brand-arc";
import { CampaignFloatingCta } from "@/components/campaign/campaign-floating-cta";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { FadeUp } from "@/components/fade-up";
import { JsonLd } from "@/components/seo/json-ld";
import { routing, type Locale } from "@/i18n/routing";
import { COMPARISON_HUB_CONTENT, type ComparisonSlug } from "@/lib/comparison-content";
import { getOriginForSurface } from "@/lib/domains";
import { pageAlternates } from "@/lib/seo";

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
    alternates: pageAlternates(getOriginForSurface("pro"), locale, "compare"),
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://pro.nordoravital.com/${locale}/compare`,
      siteName: "Nordora Vital",
      type: "website",
      images: [
        {
          url: "/images/Sanza mat 01.jpg",
          width: 1200,
          height: 630,
          alt: content.headline,
        },
      ],
    },
  };
}

const COMPARISON_IMAGES: Record<ComparisonSlug, string> = {
  "pemf-systems": "/images/Sanza mat 01.jpg",
  "pemf-vs-red-light": "/images/02_sanza_twinc_700.jpg",
  "frequency-vs-cold-plunge": "/images/sanza recovery 01.jpg",
};

export default async function ComparisonHubPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISON_HUB_CONTENT[safeLocale];

  const statLabels = {
    en: [
      { value: "3-in-1", label: "Synchronized Modalities" },
      { value: "40+", label: "Microcirculation Protocols" },
      { value: "0 min", label: "Operator Table Disruption" },
      { value: "100%", label: "German Medical Engineering" },
    ],
    de: [
      { value: "3-in-1", label: "Synchronisierte Modalitäten" },
      { value: "40+", label: "Mikrozirkulations-Protokolle" },
      { value: "0 min", label: "Therapeuten-Mehraufwand" },
      { value: "100%", label: "Deutsche Medizintechnik" },
    ],
    lv: [
      { value: "3-in-1", label: "Sinhronizētas tehnoloģijas" },
      { value: "40+", label: "Mikrocirkulācijas protokoli" },
      { value: "0 min", label: "Papildu terapeita laiks" },
      { value: "100%", label: "Vācu medicīnas inženierija" },
    ],
    ru: [
      { value: "3-в-1", label: "Синхронных метода" },
      { value: "40+", label: "Протоколов микроциркуляции" },
      { value: "0 мин", label: "Времени персонала" },
      { value: "100%", label: "Немецкая мед. инженерия" },
    ],
  };

  const currentStats = statLabels[safeLocale];

  const socialProofText = {
    en: {
      quote:
        "Most wellness facilities invest in disjointed single modalities that sit idle or require heavy supervision. Having synchronized PEMF, bio-frequencies, and soft laser in a single 16-minute mat ritual transformed our patient compliance and recovery metrics.",
      author: "Dr. med. H. Schulz",
      role: "Clinical Director & Sports Medicine Specialist, European Wellness Institute",
    },
    de: {
      quote:
        "Viele Praxen investieren in isolierte Einzelgeräte, die viel Personal binden. Die Kombination aus synchronisiertem PEMF, Frequenzen und Softlaser auf einer einzigen Matte revolutionierte unsere Patienten-Compliance und Behandlungseffizienz.",
      author: "Dr. med. H. Schulz",
      role: "Ärztlicher Leiter & Facharzt für Sportmedizin, European Wellness Institute",
    },
    lv: {
      quote:
        "Lielākā daļa centru iegulda atsevišķās iekārtās, kas prasa nepārtrauktu personāla uzraudzību. Sinhronizēts PEMF, biofrekvences un mīkstais lāzers vienā 16 minūšu seansā būtiski uzlaboja mūsu pacientu atbilstību un atjaunošanās rādītājus.",
      author: "Dr. med. H. Šulcs",
      role: "Klīnikas vadītājs & sporta medicīnas speciālists",
    },
    ru: {
      quote:
        "Большинство клиник покупают разрозненные аппараты, требующие постоянного внимания персонала. Синхронное сочетание PEMF, биочастот и мягкого лазера на одном мате изменило приверженность пациентов и ускорение регенерации.",
      author: "Д-р мед. Х. Шульц",
      role: "Главный врач клиники и специалист по спортивной медицине",
    },
  }[safeLocale];

  return (
    <div className="comparison-hub site-marketing-root overflow-hidden bg-[#f6f1ea] text-[#1e2a22]">
      <JsonLd
        breadcrumbs={[
          { name: "Home", url: "https://pro.nordoravital.com" },
          {
            name: "Technology Comparisons",
            url: `https://pro.nordoravital.com/${locale}/compare`,
          },
        ]}
      />

      {/* ═════════ CINEMATIC HERO (Sales Blueprint) ═════════ */}
      <section
        className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
        aria-labelledby="compare-hero-heading"
      >
        <div className="relative min-h-[min(680px,88svh)] lg:min-h-[min(78dvh,720px)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/references/lifestyle/wellness-room-natural-materials.jpg"
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
          <div className="relative z-10 mx-auto flex min-h-[min(680px,88svh)] max-w-[1200px] flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-8 lg:min-h-[min(78dvh,720px)] lg:pb-24 lg:pt-36 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <FadeUp immediate delay={1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#efe9e2] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a3c2b0] shadow-[0_0_8px_#a3c2b0]" />
                  {content.badge}
                </div>
              </FadeUp>
              <FadeUp immediate delay={2} className="mt-5">
                <h1
                  id="compare-hero-heading"
                  className="font-heading text-[clamp(2.1rem,6vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {content.headline}
                </h1>
              </FadeUp>
              <FadeUp immediate delay={3} className="mt-6">
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/92 [text-shadow:0_1px_10px_rgba(0,0,0,0.3)] sm:text-lg">
                  {content.subhead}
                </p>
              </FadeUp>
              <FadeUp immediate delay={4} className="mt-8 sm:mt-10">
                <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-5">
                  <a
                    href="#comparisons-grid"
                    className="btn-primary group inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                  >
                    <span>
                      {safeLocale === "de"
                        ? "Vergleiche im Detail ansehen"
                        : safeLocale === "lv"
                          ? "Pētīt salīdzinājumus"
                          : safeLocale === "ru"
                            ? "Изучить сравнения"
                            : "Explore Head-to-Head Comparisons"}
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
                    {safeLocale === "de"
                      ? "Technisches Fachgespräch buchen"
                      : safeLocale === "lv"
                        ? "Pieteikt tehnisko konsultāciju"
                        : safeLocale === "ru"
                          ? "Запросить тех. презентацию"
                          : "Schedule Technical Walkthrough"}
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
        aria-label="Technology benchmark statistics"
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

      {/* ═════════ SCIENTIFIC CONTEXT INTRO ═════════ */}
      <section className="border-b border-[#d8cec2]/80 bg-[#fbf7ef] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
            {safeLocale === "de"
              ? "Wissenschaftliche & Technische Differenzierung"
              : safeLocale === "lv"
                ? "Zinātniskā & tehniskā diferencēšana"
                : safeLocale === "ru"
                  ? "Научная и техническая дифференциация"
                  : "Scientific & Technical Rationale"}
          </p>
          <p className="mt-4 font-heading text-lg font-medium leading-relaxed text-[#1e2a22] sm:text-xl">
            {content.introText}
          </p>
        </div>
      </section>

      {/* ═════════ COMPARISON BENTO GRID ═════════ */}
      <section id="comparisons-grid" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full border border-[#0e3d34]/20 bg-[#0e3d34]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0e3d34]">
                {safeLocale === "de"
                  ? "Objektive Gegenüberstellung"
                  : safeLocale === "lv"
                    ? "Objektīvs salīdzinājums"
                    : safeLocale === "ru"
                      ? "Объективное сравнение"
                      : "Verified Modality Analysis"}
              </span>
              <h2 className="mt-3 font-heading text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight text-[#1e2a22]">
                {safeLocale === "de"
                  ? "Wählen Sie den passenden Technologievergleich"
                  : safeLocale === "lv"
                    ? "Izvēlieties atbilstošo salīdzinājumu"
                    : safeLocale === "ru"
                      ? "Выберите интересующее сравнение"
                      : "Select a Head-to-Head Technology Comparison"}
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-8 md:grid-cols-3">
            {content.cards.map((card, idx) => {
              const imageSrc = COMPARISON_IMAGES[card.slug];
              return (
                <FadeUp key={card.slug} delay={(idx + 1) as 1 | 2 | 3}>
                  <article className="campaign-card group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#d8cec2]/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0e3d34]/60 hover:shadow-xl sm:rounded-3xl">
                    {/* Visual Photo Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e3d34]/10">
                      <Image
                        src={imageSrc}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        sizes="(max-width: 767px) 100vw, 380px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        aria-hidden
                      />
                      <span
                        aria-hidden
                        className="absolute left-4 top-3 font-heading text-2xl font-bold text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#0e3d34] shadow-sm backdrop-blur-md">
                        {card.tag}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <h3 className="font-heading text-xl font-bold leading-snug text-[#1e2a22] transition-colors group-hover:text-[#0e3d34]">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#1e2a22]/80">
                          {card.description}
                        </p>
                        <div className="mt-5 rounded-xl border border-[#d8cec2]/80 bg-[#fbf7ef] p-3.5 text-xs leading-relaxed text-[#1e2a22]">
                          <strong className="font-bold text-[#0e3d34]">
                            {safeLocale === "de"
                              ? "Kernunterschied:"
                              : safeLocale === "lv"
                                ? "Būtiskākā atšķirība:"
                                : safeLocale === "ru"
                                  ? "Ключевое отличие:"
                                  : "Key Distinction:"}
                          </strong>{" "}
                          {card.keyDifference}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-[#d8cec2]/60 pt-4">
                        <Link
                          href={`/compare/${card.slug}`}
                          className="group/btn inline-flex w-full items-center justify-between rounded-xl bg-[#0e3d34] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#11463b] hover:shadow-md"
                        >
                          <span>{card.cta}</span>
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          >
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════ SOCIAL PROOF QUOTE PANEL (Full-Bleed Sales Blueprint) ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24"
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
                    {safeLocale === "de"
                      ? "Expertenurteil aus der Praxis"
                      : safeLocale === "lv"
                        ? "Klīniskā eksperta atziņa"
                        : safeLocale === "ru"
                          ? "Экспертное мнение"
                          : "Clinical Expert Insight"}
                  </p>
                  <blockquote className="mt-4 font-heading text-[clamp(1.4rem,4vw,2.1rem)] font-semibold leading-snug text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
                    “{socialProofText.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
                    <strong className="text-white font-bold">{socialProofText.author}</strong> —{" "}
                    {socialProofText.role}
                  </figcaption>
                </div>

                {/* Mini Stat Chips */}
                <div className="hidden shrink-0 grid-cols-1 gap-4 md:grid">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">3-in-1</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/80">
                      {safeLocale === "de"
                        ? "Synchronisierte Felder"
                        : safeLocale === "lv"
                          ? "Sinhroni lauki"
                          : safeLocale === "ru"
                            ? "Синхронных поля"
                            : "Synchronized Engines"}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">0 min</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/80">
                      {safeLocale === "de"
                        ? "Mehraufwand"
                        : safeLocale === "lv"
                          ? "Personāla laiks"
                          : safeLocale === "ru"
                            ? "Времени персонала"
                            : "Staff Overhead"}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ FINAL CTA BAND (Sales Blueprint with 3D Silhouette) ═════════ */}
      <section
        className="home-band--cta relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-20 sm:py-28 md:py-32"
        aria-labelledby="compare-final-cta-heading"
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
              {safeLocale === "de"
                ? "Objektive Beratung"
                : safeLocale === "lv"
                  ? "Objektīva konsultācija"
                  : safeLocale === "ru"
                    ? "Экспертная консультация"
                    : "Objective Evaluation"}
            </p>
            <h2
              id="compare-final-cta-heading"
              className="mt-3 font-heading text-[clamp(1.9rem,5vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
            >
              {safeLocale === "de"
                ? "Erleben Sie die Multi-Frequenz-Wirkung in Ihrer Praxis"
                : safeLocale === "lv"
                  ? "Pārbaudiet daudzfrekvenču iedarbību savā praksē"
                  : safeLocale === "ru"
                    ? "Оцените мультичастотную терапию в вашей практике"
                    : "Experience the Multi-Frequency Difference Firsthand"}
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {safeLocale === "de"
                ? "Buchen Sie eine unverbindliche Vorführung, testen Sie das Gesamtsystem 14 Tage vor Ort oder besprechen Sie Ihre individuellen Praxisanforderungen mit unseren Spezialisten."
                : safeLocale === "lv"
                  ? "Piesakiet bezmaksas demonstrāciju savā kabinetā, novērtējiet sistēmu 14 dienu izmēģinājumā vai apspriediet integrāciju ar mūsu speciālistiem."
                  : safeLocale === "ru"
                    ? "Запросите демонстрацию в вашей клинике, протестируйте систему в течение 14-дневного пилотного периода или обсудите детали с нашими инженерами."
                    : "Schedule an on-site demonstration in your facility, evaluate complete technical datasheets, or discuss our 14-day clinical trial program."}
            </p>
          </FadeUp>

          <FadeUp delay={2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:mt-10 sm:flex-row sm:gap-5">
              <ContactDrawerTrigger
                label="Request Trial Demonstration"
                options={{
                  professionalCategory: "physiotherapists",
                  message: "Inquiry from Technology Comparison Hub: requesting on-site trial demonstration.",
                }}
                className="btn-primary group inline-flex justify-center"
              >
                <span>
                  {safeLocale === "de"
                    ? "Praxis-Teststellung anfragen"
                    : safeLocale === "lv"
                      ? "Pieteikt testa demonstrāciju"
                      : safeLocale === "ru"
                        ? "Запросить тестовую демонстрацию"
                        : "Request Trial Demonstration"}
                </span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </ContactDrawerTrigger>
              <a
                href="https://cal.eu/nordoravital/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-white inline-flex justify-center"
              >
                {safeLocale === "de"
                  ? "Fachgespräch vereinbaren"
                  : safeLocale === "lv"
                    ? "Pieteikt zvanu ar ekspertu"
                    : safeLocale === "ru"
                      ? "Забронировать звонок"
                      : "Schedule Discovery Call"}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ EU COMPLIANCE & TRADEMARK DISCLAIMER ═════════ */}
      <section className="border-t border-[#d8cec2] bg-[#ece5dc] px-5 py-10 text-xs leading-relaxed text-[#1e2a22]/75 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="font-heading font-bold uppercase tracking-wider text-[#0e3d34]">
            {content.complianceNoteTitle}
          </h3>
          <p className="mt-2">{content.complianceNoteBody}</p>
        </div>
      </section>

      {/* Floating Sticky CTA Pill */}
      <CampaignFloatingCta
        label={
          safeLocale === "de"
            ? "Teststellung anfragen"
            : safeLocale === "lv"
              ? "Pieteikt demonstrāciju"
              : safeLocale === "ru"
                ? "Запросить тест"
                : "Request Trial Demo"
        }
        options={{
          professionalCategory: "physiotherapists",
          message: "Inquiry from comparison hub floating CTA: requesting on-site demo.",
        }}
      />
    </div>
  );
}
