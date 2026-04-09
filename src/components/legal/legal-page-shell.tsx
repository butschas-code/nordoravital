import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  kicker?: string;
  children: ReactNode;
}

/**
 * Shared layout shell for all legal / compliance pages.
 * Uses the home-band--welcome full-bleed header treatment and a clean prose body.
 */
export function LegalPageShell({ title, subtitle, kicker = "Legal", children }: Props) {
  return (
    <>
      {/* ── Full-bleed header band ── */}
      <div className="home-band-full home-band--welcome pb-12 pt-12 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
            {kicker}
          </p>
          <h1 className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-tight text-[var(--text)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm text-[var(--muted)]">{subtitle}</p>
          )}
        </div>
      </div>

      {/* ── Prose content ── */}
      <div className="legal-prose mx-auto w-full max-w-[720px] px-0 py-10 md:py-14">
        {children}
      </div>
    </>
  );
}
