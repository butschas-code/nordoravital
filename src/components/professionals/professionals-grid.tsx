"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { SectorSlug } from "@/lib/sector-slugs";

export interface SectorItem {
  slug: SectorSlug;
  icon: string;
  title: string;
  teaser: string;
  imageAlt: string;
  popupBody: string;
}

interface ProfessionalsGridProps {
  sectors: SectorItem[];
  labels: {
    learnMore: string;
    popupClose: string;
  };
}

/** Renders text with every occurrence of "sanza" as lowercase bold. */
function WithBoldSanza({ text }: { text: string }) {
  const parts = text.split(/\bsanza\b/gi);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <strong className="font-bold">sanza</strong>
          )}
        </span>
      ))}
    </>
  );
}

export function ProfessionalsGrid({ sectors, labels }: ProfessionalsGridProps) {
  const [openSlug, setOpenSlug] = useState<SectorSlug | null>(null);

  const openSector = sectors.find((s) => s.slug === openSlug) ?? null;
  const close = useCallback(() => setOpenSlug(null), []);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll to top each time a new popup opens
  useEffect(() => {
    if (openSlug && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [openSlug]);

  useEffect(() => {
    if (!openSlug) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openSlug, close]);

  useEffect(() => {
    document.body.style.overflow = openSlug ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openSlug]);

  return (
    <>
      {/* ── Sector cards — glass on dark ── */}
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => (
          <li key={sector.slug}>
            <button
              onClick={() => setOpenSlug(sector.slug)}
              className="glass-card-dark group flex h-full w-full flex-col p-6 text-left focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2"
              aria-haspopup="dialog"
            >
              {/* Icon chip */}
              <div className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-white/[0.16]">
                <div className="relative h-6 w-6">
                  <Image
                    src={sector.icon}
                    alt={sector.imageAlt}
                    fill
                    className="object-contain brightness-0 invert opacity-70 transition group-hover:opacity-90"
                    sizes="24px"
                  />
                </div>
              </div>

              {/* Text */}
              <h2 className="text-[0.95rem] font-semibold leading-snug text-white">
                {sector.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {sector.teaser}
              </p>

              {/* CTA row */}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-white/50 transition-colors group-hover:text-white/80">
                <span>{labels.learnMore}</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* ── Popup overlay — portalled to document.body to escape stacking context ── */}
      {openSlug && openSector && createPortal(
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={openSector.title}
        >
          {/* Blurred backdrop */}
          <div
            className="absolute inset-0 cursor-pointer bg-[var(--brand-deep)]/50 backdrop-blur-md"
            onClick={close}
            aria-hidden
          />

          {/* Glass popup card */}
          <div className="relative flex max-h-[min(90dvh,680px)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/92 shadow-[0_32px_80px_rgba(14,61,52,0.28)] backdrop-blur-2xl">
            {/* Inner gradient tint */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(145deg, rgba(111,138,122,0.07) 0%, rgba(165,133,146,0.04) 60%, transparent 100%)",
              }}
              aria-hidden
            />

            {/* Top accent bar */}
            <div
              className="h-[3px] w-full"
              style={{ background: "linear-gradient(to right, var(--brand), var(--brand-secondary))" }}
            />

            <div key={openSlug} ref={scrollRef} className="relative overflow-y-auto p-5 sm:p-10">
              {/* Close button */}
              <button
                onClick={close}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--muted)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--panel)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-2 sm:right-5 sm:top-5 sm:h-9 sm:w-9"
                aria-label={labels.popupClose}
              >
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 pr-8 sm:gap-4 sm:pr-0">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--panel)] sm:h-13 sm:w-13">
                  <div className="relative h-7 w-7">
                    <Image
                      src={openSector.icon}
                      alt={openSector.imageAlt}
                      fill
                      className="object-contain"
                      sizes="28px"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--brand)]">
                    sanza for
                  </p>
                  <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                    {openSector.title}
                  </h3>
                </div>
              </div>

              {/* Teaser */}
              <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--brand-strong)]">
                {openSector.teaser}
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-[var(--border)]" />

              {/* Body — split on double newlines, bold every "sanza" */}
              <div className="space-y-4">
                {openSector.popupBody.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[0.95rem] leading-[1.78] text-[var(--text)]">
                    <WithBoldSanza text={para} />
                  </p>
                ))}
              </div>

              {/* Close CTA */}
              <div className="mt-8">
                <button
                  onClick={close}
                  className="btn-outline w-full justify-center"
                >
                  {labels.popupClose}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
