import type { FC } from "react";
import { Link } from "@/i18n/navigation";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { FadeUp } from "@/components/fade-up";
import { JsonLd } from "@/components/seo/json-ld";
import type { ComparisonDetailContent } from "@/lib/comparison-content";

interface ComparisonPageViewProps {
  content: ComparisonDetailContent;
  locale: string;
}

export const ComparisonPageView: FC<ComparisonPageViewProps> = ({
  content,
  locale,
}) => {
  return (
    <div className="comparison-page w-full overflow-hidden bg-[#f6f1ea] text-[#1e2a22]">
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

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden border-b border-[#d8cec2] bg-gradient-to-b from-[#082721] to-[#0e3d34] px-5 py-20 text-[#f6f1ea] sm:px-8 sm:py-28 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(111,138,122,0.25),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#efe9e2] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a58592]" />
              {content.badge}
            </div>
            <h1 className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white">
              {content.heroHeadline}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#efe9e2]/85 sm:text-xl">
              {content.heroSubhead}
            </p>
          </FadeUp>

          {/* Quick Dual Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeUp delay={1}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8">
                <span className="inline-block rounded-md bg-[#6f8a7a]/40 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  3-in-1 Platform
                </span>
                <h2 className="mt-3 font-heading text-xl font-bold text-white sm:text-2xl">
                  {content.summaryCard.sanzaTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#efe9e2]/80 sm:text-base">
                  {content.summaryCard.sanzaSummary}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={2}>
              <div className="h-full rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md sm:p-8">
                <span className="inline-block rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {content.competitorCategory}
                </span>
                <h2 className="mt-3 font-heading text-xl font-bold text-white/90 sm:text-2xl">
                  {content.summaryCard.competitorTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  {content.summaryCard.competitorSummary}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 2. Key Takeaway Callout ── */}
      <section className="border-b border-[#d8cec2] bg-[#fbf7ef] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1200px] items-center gap-4">
          <span className="text-2xl" aria-hidden>
            💡
          </span>
          <p className="text-sm font-medium leading-relaxed text-[#1e2a22] sm:text-base">
            <strong className="font-semibold text-[#0e3d34]">Core Distinction:</strong>{" "}
            {content.keyTakeaway}
          </p>
        </div>
      </section>

      {/* ── 3. Objective Specification Comparison Matrix ── */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6f8a7a]">
                Verified Technical Parameters
              </span>
              <h2 className="mt-2 font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#1e2a22]">
                Side-by-Side Specification Matrix
              </h2>
            </div>
          </FadeUp>

          <div className="overflow-x-auto rounded-2xl border border-[#d8cec2] bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#d8cec2] bg-[#fbf7ef]">
                  <th className="p-4 sm:p-5 font-heading text-xs font-bold uppercase tracking-wider text-[#6f8a7a]">
                    {content.tableHeaders.feature}
                  </th>
                  <th className="p-4 sm:p-5 font-heading text-xs font-bold uppercase tracking-wider text-[#0e3d34]">
                    {content.tableHeaders.sanza}
                  </th>
                  <th className="p-4 sm:p-5 font-heading text-xs font-bold uppercase tracking-wider text-[#1e2a22]/70">
                    {content.tableHeaders.competitor}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d8cec2]/60">
                {content.specs.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={`transition hover:bg-[#f6f1ea]/60 ${
                      spec.highlight ? "bg-[#0e3d34]/[0.03]" : ""
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-[#1e2a22]">
                      {spec.feature}
                      {spec.highlight && (
                        <span className="ml-2 inline-block rounded bg-[#6f8a7a]/20 px-1.5 py-0.5 text-[0.65rem] font-bold text-[#0e3d34]">
                          Key
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-[#0e3d34]">
                      {spec.sanza}
                    </td>
                    <td className="p-4 sm:p-5 text-[#1e2a22]/75">
                      {spec.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. Deep Dive Sections ── */}
      {content.deepDiveSections.length > 0 && (
        <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-10 lg:grid-cols-2">
              {content.deepDiveSections.map((sec, idx) => (
                <FadeUp key={idx} delay={(idx + 1) as 1 | 2}>
                  <div className="rounded-2xl border border-[#d8cec2] bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="font-heading text-xl font-bold text-[#1e2a22]">
                      {sec.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#1e2a22]/85 sm:text-base">
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

      {/* ── 5. Clinical Room Workflow Comparison ── */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp>
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6f8a7a]">
                Practical Day-to-Day Operation
              </span>
              <h2 className="mt-2 font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#1e2a22]">
                {content.clinicalWorkflowComparison.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#1e2a22]/75">
                {content.clinicalWorkflowComparison.subtitle}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeUp delay={1}>
              <div className="h-full rounded-2xl border-2 border-[#0e3d34] bg-white p-6 shadow-md sm:p-8">
                <span className="rounded-full bg-[#0e3d34] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  sanza Workflow
                </span>
                <ol className="mt-6 space-y-4">
                  {content.clinicalWorkflowComparison.sanzaWorkflow.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[#1e2a22] sm:text-base">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0e3d34]/10 text-xs font-bold text-[#0e3d34]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>

            <FadeUp delay={2}>
              <div className="h-full rounded-2xl border border-[#d8cec2] bg-[#fbf7ef] p-6 shadow-sm sm:p-8">
                <span className="rounded-full bg-[#d8cec2] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1e2a22]/80">
                  {content.competitorName} Workflow
                </span>
                <ol className="mt-6 space-y-4">
                  {content.clinicalWorkflowComparison.competitorWorkflow.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[#1e2a22]/75 sm:text-base">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d8cec2]/60 text-xs font-bold text-[#1e2a22]">
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

      {/* ── 6. Buyer Selection Guide ── */}
      <section className="border-t border-[#d8cec2] bg-[#fbf7ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#d8cec2] bg-white p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold text-[#0e3d34]">
                {content.idealFor.sanzaTitle}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {content.idealFor.sanzaPoints.map((pt, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-[#1e2a22]/85">
                    <span className="text-[#0e3d34]">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#d8cec2] bg-white p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold text-[#1e2a22]/70">
                {content.idealFor.competitorTitle}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {content.idealFor.competitorPoints.map((pt, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-[#1e2a22]/70">
                    <span className="text-[#6f8a7a]">→</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQs ── */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="mb-10 text-center">
              <h2 className="font-heading text-2xl font-bold text-[#1e2a22] sm:text-3xl">
                Frequently Asked Comparison Questions
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-[#d8cec2] bg-white p-5 shadow-sm transition open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-heading text-base font-semibold text-[#1e2a22] group-open:text-[#0e3d34]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#1e2a22]/85">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Conversion CTA ── */}
      <section className="relative overflow-hidden border-t border-[#d8cec2] bg-[#0e3d34] px-5 py-16 text-center text-[#f6f1ea] sm:px-8 sm:py-20">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Experience the multi-technology difference firsthand
          </h2>
          <p className="mt-3 text-sm text-[#efe9e2]/80 sm:text-base">
            Request an on-site demonstration in your clinic, review complete technical datasheets, or discuss our 14-day trial evaluation program.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ContactDrawerTrigger
              label="Request Technical Presentation"
              options={{ message: `Inquiry from comparison page: ${content.slug}` }}
              className="btn-primary inline-flex justify-center"
            >
              Request Trial Demonstration
            </ContactDrawerTrigger>
            <Link
              href="/compare"
              className="btn-ghost-white inline-flex justify-center"
            >
              All Comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. EU Compliance & Trademark Notice ── */}
      <aside className="border-t border-[#d8cec2] bg-[#ece5dc] px-5 py-8 text-xs leading-relaxed text-[#1e2a22]/70 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-semibold uppercase tracking-wider text-[#0e3d34]">
            Legal Disclaimer & EU Comparative Advertising Compliance
          </p>
          <p className="mt-1.5">{content.legalDisclaimer}</p>
        </div>
      </aside>
    </div>
  );
};
