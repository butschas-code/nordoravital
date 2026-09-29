import Image from "next/image";
import { BrandArc } from "@/components/brand-arc";
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

export function HomeSeoLanding({ content, locale }: HomeSeoLandingProps) {
  const calDiscoveryUrl = "https://cal.eu/nordoravital/discovery-call";
  const homeOrigin = getOriginForSurface("home");
  const canonicalUrl = `${homeOrigin}/${locale}/${content.slug}`;

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
    <article className="site-marketing-root home-seo-landing">
      {/* Schema.org Structured Data */}
      <JsonLd data={jsonLdData} />

      {/* ── 1. Hero ── */}
      <section
        className="home-hero--home relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
        aria-labelledby="seo-hero-heading"
      >
        <div className="relative min-h-[min(90dvh,840px)] lg:min-h-[min(85dvh,780px)]">
          <div className="absolute inset-0">
            <Image
              src={content.heroImage}
              alt={content.headline}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
          <div className="arc-watermark" aria-hidden>
            <BrandArc
              color="#FFFFFF"
              size={700}
              className="absolute -right-24 -top-24 opacity-[0.06]"
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[min(90dvh,840px)] max-w-[1200px] flex-col justify-end px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:px-8 lg:min-h-[min(85dvh,780px)] lg:px-10 lg:pb-20 lg:pt-24">
            <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
              <p className="campaign-eyebrow campaign-eyebrow--responsive-right mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#a3c2b0]">
                {content.eyebrow}
              </p>
              <h1
                id="seo-hero-heading"
                className="font-heading text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.08] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]"
              >
                {content.headline}
              </h1>
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] md:ml-auto">
                {content.subheadline}
              </p>
              <div className="mt-8 flex flex-col items-end gap-3 sm:flex-row sm:justify-end sm:gap-4">
                <a
                  href={calDiscoveryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex justify-center"
                >
                  {content.ctaPrimary}
                </a>
                <ContactDrawerTrigger
                  options={{ drawerType: "homePersonal" }}
                  className="btn-ghost-white inline-flex justify-center"
                >
                  {content.ctaSecondary}
                </ContactDrawerTrigger>
              </div>
              <p className="mt-4 text-xs tracking-wide text-white/70">
                ✓ {content.heroNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem Section ── */}
      <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16">
          <FadeUp>
            <p className="campaign-eyebrow campaign-eyebrow--left mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
              {content.problemEyebrow}
            </p>
            <h2 className="font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-[#1e2a22]">
              {content.problemTitle}
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-[1.78] text-[#1e2a22]/88 sm:text-[1.12rem]">
              {content.problemBody.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={1}>
            <div className="relative min-h-[380px] overflow-hidden rounded-[24px] border border-[#d8cec2] bg-[#efe9e2] shadow-[0_4px_24px_rgba(30,42,34,0.08)] sm:min-h-[480px]">
              <Image
                src={content.problemImage}
                alt={content.problemTitle}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 540px"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 3. Multi-Technology Solution ── */}
      <section className="home-band-full home-band--pillars py-20 text-[#f6f1ea] sm:py-24 lg:py-28">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <p className="campaign-eyebrow campaign-eyebrow--center mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                {content.solutionEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.9rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-white">
                {content.solutionTitle}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 sm:text-lg">
                {content.solutionBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.solutionSpecs.map((spec, idx) => (
              <FadeUp key={spec.title} delay={Math.min(idx + 1, 6) as 1 | 2 | 3}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15 sm:p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 font-heading text-lg font-bold text-white">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-white">
                    {spec.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {spec.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Interactive Session Simulator ── */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <HomeSessionSimulator locale={locale} />
          </FadeUp>
        </div>
      </section>

      {/* ── 5. Step-by-Step Ritual Sequence ── */}
      <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <p className="campaign-eyebrow campaign-eyebrow--center mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
                {content.ritualEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[#1e2a22]">
                {content.ritualTitle}
              </h2>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.ritualSteps.map((step, idx) => (
              <FadeUp key={step.step} delay={Math.min(idx + 1, 6) as 1 | 2 | 3}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#d8cec2] bg-white p-7 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-bold text-[#6f8a7a]">
                        {step.step}
                      </span>
                      <span className="rounded-full bg-[#6f8a7a]/15 px-2.5 py-0.5 text-xs font-semibold text-[#2e6955]">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#1e2a22]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1e2a22]/85">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Bilateral Benefits: Body & Mind ── */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <p className="campaign-eyebrow campaign-eyebrow--center mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
                {content.outcomesEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[#1e2a22]">
                {content.outcomesTitle}
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FadeUp delay={1}>
              <div className="h-full rounded-2xl border border-[#d8cec2] bg-white p-7 shadow-sm">
                <span className="inline-block rounded-full bg-[#6f8a7a]/15 px-3 py-1 text-xs font-bold text-[#2e6955]">
                  🌿 For Your Physical Body
                </span>
                <ul className="mt-5 space-y-3.5">
                  {content.bodyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-[#1e2a22]/90">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6f8a7a]/20 text-[#2e6955]">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={2}>
              <div className="h-full rounded-2xl border border-[#d8cec2] bg-white p-7 shadow-sm">
                <span className="inline-block rounded-full bg-[#8e6f7c]/15 px-3 py-1 text-xs font-bold text-[#704d5e]">
                  🧠 For Your Mind & Energy
                </span>
                <ul className="mt-5 space-y-3.5">
                  {content.mindBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-[#1e2a22]/90">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8e6f7c]/20 text-[#704d5e]">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 7. Austrian Engineering Credibility ── */}
      <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[960px] rounded-2xl border border-[#d8cec2] bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8a7a]">
            {content.trustEyebrow}
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-[#1e2a22] sm:text-3xl">
            {content.trustTitle}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#1e2a22]/85">
            {content.trustBody}
          </p>
        </div>
      </section>

      {/* ── 8. Frequently Asked Questions ── */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <p className="campaign-eyebrow campaign-eyebrow--center mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
              FAQ
            </p>
            <h2 id="faq-heading" className="font-heading text-3xl font-bold tracking-tight text-[#1e2a22]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#d8cec2]/80 rounded-2xl border border-[#d8cec2] bg-white p-6 shadow-sm sm:p-8">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold text-[#1e2a22] sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1e2a22]/85 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ── */}
      <section className="home-contact-band relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="home-contact-band__inner mx-auto max-w-[960px] text-center">
          <p className="campaign-eyebrow campaign-eyebrow--center mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
            {content.eyebrow}
          </p>
          <h2 className="font-heading text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-tight text-[#1e2a22]">
            {content.ctaHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-[62ch] text-lg leading-relaxed text-[#1e2a22]/90">
            {content.ctaBody}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={calDiscoveryUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex justify-center"
            >
              {content.ctaPrimary}
            </a>
            <ContactDrawerTrigger
              options={{ drawerType: "homePersonal" }}
              className="btn-outline home-contact-outline inline-flex justify-center"
            >
              {content.ctaSecondary}
            </ContactDrawerTrigger>
          </div>
        </div>
      </section>
    </article>
  );
}
