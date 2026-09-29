import Image from "next/image";
import { BrandArc } from "@/components/brand-arc";
import { CampaignFloatingCta } from "@/components/campaign/campaign-floating-cta";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { FadeUp } from "@/components/fade-up";
import { HomeSessionSimulator } from "@/components/home/home-session-simulator";
import { JsonLd } from "@/components/seo/json-ld";
import { getOriginForSurface } from "@/lib/domains";
import type { HomeSeoPageContent } from "@/lib/home-seo-pages-content";

interface HomeSeoLandingProps {
  content: HomeSeoPageContent;
  locale: string;
}

function IconCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function HomeSeoLanding({ content, locale }: HomeSeoLandingProps) {
  const calDiscoveryUrl = "https://cal.eu/nordoravital/discovery-call";
  const homeOrigin = getOriginForSurface("home");
  const canonicalUrl = `${homeOrigin}/${locale}/${content.slug}`;

  // Stat metrics based on slug
  const stats =
    content.slug === "recovery"
      ? [
          { value: "16 min", label: locale === "de" ? "Dauer des Mattenrituals" : locale === "lv" ? "Paklāja seansa ilgums" : locale === "ru" ? "Длительность сеанса" : "Mat ritual duration" },
          { value: "3-in-1", label: locale === "de" ? "Synchronisierte Frequenzen" : locale === "lv" ? "Sinhronizētas tehnoloģijas" : locale === "ru" ? "Синхронных метода" : "Combined technologies" },
          { value: "0 min", label: locale === "de" ? "Umkleide- oder Wasseraufwand" : locale === "lv" ? "Pārģērbšanās laiks" : locale === "ru" ? "Время на переодевание" : "Prep or cleanup friction" },
          { value: "60,000+", label: locale === "de" ? "Aktive Anwender in Europa" : locale === "lv" ? "Lietotāju Eiropā" : locale === "ru" ? "Пользователей в Европе" : "Active European users" },
        ]
      : content.slug === "sleep"
      ? [
          { value: "10–16 min", label: locale === "de" ? "Abendliches Liegen-Ritual" : locale === "lv" ? "Vakara rituāls" : locale === "ru" ? "Вечерний сеанс" : "Evening rest ritual" },
          { value: "Delta/Theta", label: locale === "de" ? "Frequenz-Entspannung" : locale === "lv" ? "Frekvenču iedarbība" : locale === "ru" ? "Частотная релаксация" : "Brainwave entrainment" },
          { value: "100%", label: locale === "de" ? "Sanft & ohne Chemie" : locale === "lv" ? "Bez medikamentiem" : locale === "ru" ? "Без препаратов" : "Non-invasive & drug-free" },
          { value: "60,000+", label: locale === "de" ? "Zufriedene Anwender" : locale === "lv" ? "Lietotāju Eiropā" : locale === "ru" ? "Пользователей в Европе" : "Long-term users" },
        ]
      : [
          { value: "Alpha", label: locale === "de" ? "Frequenzen für mentale Ruhe" : locale === "lv" ? "Prāta atslodzes frekvences" : locale === "ru" ? "Альфа-ритмы для мозга" : "Brainwave calming" },
          { value: "15", label: locale === "de" ? "Voreingestellte Programme" : locale === "lv" ? "Gatavas programmas" : locale === "ru" ? "Готовых программ" : "Pre-set programs" },
          { value: "0", label: locale === "de" ? "Bildschirmreize währenddessen" : locale === "lv" ? "Ekrāna kairinājumi" : locale === "ru" ? "Зрительных стимулов" : "Screen stimulation" },
          { value: "60,000+", label: locale === "de" ? "Langzeit-Anwender" : locale === "lv" ? "Lietotāju Eiropā" : locale === "ru" ? "Пользователей в Европе" : "Active European users" },
        ];

  // Structured Data Schema.org
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `sanza Home Wellness System — ${content.headline}`,
      description: content.metaDescription,
      image: `${homeOrigin}${content.heroImage}`,
      brand: {
        "@type": "Brand",
        name: "sanza",
      },
      manufacturer: {
        "@type": "Organization",
        name: "sanza International GmbH",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Austria",
        },
      },
      category: "Wellness & Recovery Equipment",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        price: "4990",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
      },
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
          item: `${homeOrigin}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: content.eyebrow,
          item: canonicalUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: content.ritualTitle,
      description: content.subheadline,
      step: content.ritualSteps.map((step, idx) => ({
        "@type": "HowToStep",
        position: idx + 1,
        name: step.title,
        text: step.body,
      })),
    },
  ];

  return (
    <article className="site-marketing-root home-seo-landing flex flex-col gap-0">
      {/* Schema.org Structured Data */}
      <JsonLd data={jsonLdData} />

      {/* ═════════ 1. HERO ═════════ */}
      <section
        className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
        aria-labelledby="seo-hero-heading"
      >
        <div className="relative min-h-[min(820px,94svh)] lg:min-h-[min(86dvh,820px)]">
          <div className="absolute inset-0">
            <Image
              src={content.heroImage}
              alt={content.headline}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />

          <div className="arc-watermark" aria-hidden>
            <div className="campaign-arc-drift absolute -right-32 -top-32">
              <BrandArc color="#FFFFFF" size={780} className="opacity-[0.08]" />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[min(820px,94svh)] max-w-[1200px] flex-col justify-end px-5 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-24 md:px-8 lg:min-h-[min(86dvh,820px)] lg:pb-24 lg:pt-28 lg:px-10">
            <div className="ml-auto w-full max-w-xl text-left sm:max-w-2xl md:text-right">
              <span className="campaign-eyebrow campaign-eyebrow--responsive-right inline-block max-w-full text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.12em] text-white/90 sm:text-[0.875rem] sm:tracking-[0.18em]">
                {content.eyebrow}
              </span>

              <h1
                id="seo-hero-heading"
                className="mt-4 font-heading text-[clamp(2.1rem,6.5vw,3.65rem)] font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.6)]"
              >
                {content.headline}
              </h1>

              <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/92 [text-shadow:0_1px_14px_rgba(0,0,0,0.45)] sm:text-lg md:ml-auto">
                {content.subheadline}
              </p>

              {/* Three trust pills */}
              <div className="mt-6 flex flex-wrap items-center justify-start gap-2 md:justify-end">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
                  ✓ {locale === "de" ? "Österreichische Entwicklung" : locale === "lv" ? "Austrijas inženierija" : locale === "ru" ? "Австрийская разработка" : "Austrian engineering"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
                  ✓ {locale === "de" ? "100% bekleidet anwendbar" : locale === "lv" ? "100% apģērbā" : locale === "ru" ? "В обычной одежде" : "100% clothed ritual"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
                  ✓ {content.heroNote}
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-4 md:justify-end">
                <a
                  href={calDiscoveryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary group inline-flex justify-center"
                >
                  {content.ctaPrimary}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <IconArrow />
                  </span>
                </a>
                <ContactDrawerTrigger
                  options={{ drawerType: "homePersonal" }}
                  className="btn-ghost-white inline-flex justify-center"
                >
                  {content.ctaSecondary}
                </ContactDrawerTrigger>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ 2. QUICK STAT STRIP ═════════ */}
      <section
        className="home-band-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] border-y border-white/10 bg-[#082721] py-8 sm:py-10 text-white"
        aria-label="Overview statistics"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs uppercase tracking-[0.14em] text-white/75 sm:text-[0.8125rem]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ 3. PROBLEM SECTION ═════════ */}
      <section
        className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="problem-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16">
            <FadeUp>
              <span className="campaign-eyebrow campaign-eyebrow--left inline-block text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.11em] text-[var(--brand-strong)] sm:text-sm sm:tracking-[0.16em]">
                {content.problemEyebrow}
              </span>

              <h2
                id="problem-heading"
                className="mt-3 font-heading text-[clamp(1.9rem,4.5vw,2.85rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
              >
                {content.problemTitle}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-[1.0625rem]">
                {content.problemBody.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8">
                <ContactDrawerTrigger
                  options={{ drawerType: "homePersonal" }}
                  className="btn-primary inline-flex justify-center"
                >
                  {content.ctaSecondary}
                </ContactDrawerTrigger>
              </div>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-card)] ring-1 ring-[var(--border)] sm:rounded-3xl">
                <Image
                  src={content.problemImage}
                  alt={content.problemTitle}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═════════ 4. MULTI-TECHNOLOGY SOLUTION ═════════ */}
      <section
        className="home-band-full home-band--pillars relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="solution-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <span className="campaign-eyebrow campaign-eyebrow--center inline-block text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.11em] text-white/75 sm:text-sm sm:tracking-[0.16em]">
                {content.solutionEyebrow}
              </span>

              <h2
                id="solution-heading"
                className="mt-3 font-heading text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.4)]"
              >
                {content.solutionTitle}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 sm:text-lg">
                {content.solutionBody.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.solutionSpecs.map((spec, idx) => {
              const specImages = [
                "/images/02_sanza_mat_700.jpg",
                "/images/sanza hand electrode 01.jpg",
                "/images/02_sanza_pen_700.jpg",
              ];
              const specImage = specImages[idx % specImages.length];
              return (
                <FadeUp key={spec.title} delay={Math.min(idx + 1, 6) as 1 | 2 | 3}>
                  <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-[#07251f]/90 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-[#07251f] sm:rounded-3xl">
                    {/* Applicator Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                      <Image
                        src={specImage}
                        alt={spec.title}
                        fill
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        sizes="(max-width: 767px) 100vw, 380px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07251f] via-transparent to-transparent"
                        aria-hidden
                      />
                      <span className="absolute left-4 top-3 font-heading text-xl font-bold text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Card Text Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <h3 className="font-heading text-xl font-bold leading-snug text-white">
                          {spec.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                          {spec.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════ 5. INTERACTIVE SESSION SIMULATOR ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[#fbf7ef] py-16 sm:py-20 md:py-24"
        aria-label="Interactive Session Simulator"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <HomeSessionSimulator locale={locale} />
          </FadeUp>
        </div>
      </section>

      {/* ═════════ 6. STEP-BY-STEP RITUAL SEQUENCE ═════════ */}
      <section
        className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24"
        aria-labelledby="ritual-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="campaign-eyebrow campaign-eyebrow--center inline-block text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.11em] text-[var(--brand-strong)] sm:text-sm sm:tracking-[0.16em]">
                {content.ritualEyebrow}
              </span>
              <h2
                id="ritual-heading"
                className="mt-3 font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--text)]"
              >
                {content.ritualTitle}
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.ritualSteps.map((step, idx) => {
              const ritualImages = [
                "/images/sanza calmer arrivals.jpg",
                "/images/sanza comfort routines.jpg",
                "/images/sanza a softer landing.jpg",
              ];
              const ritualImg = ritualImages[idx % ritualImages.length];
              return (
                <FadeUp key={step.step} delay={Math.min(idx + 1, 6) as 1 | 2 | 3}>
                  <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#d8cec2] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0e3d34]/60 hover:shadow-xl sm:rounded-3xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0e3d34]/10">
                      <Image
                        src={ritualImg}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        sizes="(max-width: 767px) 100vw, 380px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        aria-hidden
                      />
                      <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-0.5 text-xs font-bold text-[#0e3d34] shadow-sm backdrop-blur-md">
                        {step.duration}
                      </span>
                      <span className="absolute left-4 top-3 font-heading text-2xl font-bold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                        {step.step}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#1e2a22]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#1e2a22]/80 sm:text-base">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════ 7. BILATERAL OUTCOMES (BODY & MIND) ═════════ */}
      <section
        className="home-band-full home-band--pillars relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="outcomes-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp className="max-w-2xl">
            <span className="text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.11em] text-white/72 sm:text-sm sm:tracking-[0.16em]">
              {content.outcomesEyebrow}
            </span>
            <h2
              id="outcomes-heading"
              className="mt-3 font-heading text-[clamp(1.8rem,5vw,2.7rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.4)]"
            >
              {content.outcomesTitle}
            </h2>
          </FadeUp>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Physical Body Card */}
            <FadeUp delay={1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] shadow-2xl backdrop-blur-md sm:rounded-3xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/sanza recovery 01.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--brand)]/60 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#082721]/90 via-[#082721]/40 to-transparent"
                    aria-hidden
                  />
                  <p className="absolute bottom-5 left-5 right-5 text-sm font-bold uppercase tracking-[0.14em] text-white sm:left-6 sm:text-base">
                    🌿 {locale === "de" ? "Für Ihren physischen Körper" : locale === "lv" ? "Fiziskajam ķermenim" : locale === "ru" ? "Для физического тела" : "For Your Physical Body"}
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                  {content.bodyBenefits.map((benefit, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-white/90">
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/40 text-[var(--brand-secondary)] ring-1 ring-white/20"
                      >
                        <IconCheck />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>

            {/* Mind & Energy Card */}
            <FadeUp delay={2}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] shadow-2xl backdrop-blur-md sm:rounded-3xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/sanza focus and presence.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--brand-secondary)]/50 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#082721]/90 via-[#082721]/40 to-transparent"
                    aria-hidden
                  />
                  <p className="absolute bottom-5 left-5 right-5 text-sm font-bold uppercase tracking-[0.14em] text-white sm:left-6 sm:text-base">
                    🧠 {locale === "de" ? "Für Geist & Nervensystem" : locale === "lv" ? "Prātam un enerģijai" : locale === "ru" ? "Для нервной системы и энергии" : "For Your Mind & Nervous System"}
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                  {content.mindBenefits.map((benefit, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-white/90">
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-secondary)]/30 text-[#f6f1ea] ring-1 ring-white/20"
                      >
                        <IconCheck />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═════════ 8. SOCIAL PROOF / QUOTE SECTION ═════════ */}
      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[var(--bg)] py-16 sm:py-20 md:py-24"
        aria-label="Credibility and origin"
      >
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <article className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)] sm:rounded-[28px]">
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
                      "linear-gradient(115deg, rgba(8,39,33,0.92) 0%, rgba(14,61,52,0.82) 45%, rgba(165,133,146,0.6) 100%)",
                  }}
                />
              </div>

              <div className="relative grid gap-8 px-6 py-12 sm:px-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:px-16">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.14em] text-white/75 sm:text-xs">
                    {content.trustEyebrow}
                  </p>
                  <blockquote className="mt-4 font-heading text-[clamp(1.35rem,4vw,2.1rem)] font-semibold leading-snug text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
                    “{content.trustTitle}”
                  </blockquote>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                    {content.trustBody}
                  </p>
                </div>

                <div className="hidden shrink-0 grid-cols-1 gap-4 md:grid">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">60,000+</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-white/75">
                      {locale === "de" ? "Langzeit-Anwender" : locale === "lv" ? "Lietotāju Eiropā" : locale === "ru" ? "Пользователей" : "European Users"}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-center backdrop-blur-md">
                    <div className="font-heading text-3xl font-bold text-white">2000</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-white/75">
                      {locale === "de" ? "Gegründet in Salzburg" : locale === "lv" ? "Dibināts Zalcburgā" : locale === "ru" ? "Основан в Зальцбурге" : "Founded in Salzburg"}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* ═════════ 9. FREQUENTLY ASKED QUESTIONS ═════════ */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6f8a7a]">
                FAQ
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#1e2a22] sm:text-3xl">
                {locale === "de" ? "Häufige Fragen zu diesem Ritual" : locale === "lv" ? "Biežāk uzdotie jautājumi" : locale === "ru" ? "Частые вопросы" : "Frequently Asked Questions"}
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-[#d8cec2] bg-white p-5 shadow-sm transition open:shadow-md sm:p-6"
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

      {/* ═════════ 10. FINAL CTA (WITH 3D SILHOUETTE) ═════════ */}
      <section
        className="home-band--cta relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32"
        aria-labelledby="final-cta-heading"
      >
        <div className="campaign-cta-glow" aria-hidden />
        <div className="arc-watermark" aria-hidden>
          <div className="campaign-arc-drift absolute -left-32 -bottom-32">
            <BrandArc color="#FFFFFF" size={680} className="opacity-[0.08]" />
          </div>
        </div>

        {/* Floating product silhouette */}
        <div
          className="pointer-events-none absolute right-[-4rem] top-1/2 hidden -translate-y-1/2 opacity-[0.2] lg:block"
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
              id="final-cta-heading"
              className="font-heading text-[clamp(1.85rem,6vw,3.1rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]"
            >
              {locale === "de"
                ? "Geben Sie Ihrem Körper das richtige Signal."
                : locale === "lv"
                ? "Sniedziet savam ķermenim pareizo signālu."
                : locale === "ru"
                ? "Подарите телу правильный импульс."
                : "Give your body the right restorative signal."}
            </h2>
          </FadeUp>

          <FadeUp delay={1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {content.subheadline}
            </p>
          </FadeUp>

          <FadeUp delay={2}>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={calDiscoveryUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary group inline-flex justify-center"
              >
                {content.ctaPrimary}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <IconArrow />
                </span>
              </a>

              <ContactDrawerTrigger
                options={{ drawerType: "homePersonal" }}
                className="btn-ghost-white inline-flex justify-center"
              >
                {content.ctaSecondary}
              </ContactDrawerTrigger>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Floating CTA Pill */}
      <CampaignFloatingCta
        label={content.ctaPrimary}
        options={{ drawerType: "homePersonal" }}
      />
    </article>
  );
}
