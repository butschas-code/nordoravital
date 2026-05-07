"use client";

import { useEffect, useState } from "react";
import {
  useContactDrawer,
  type ContactDrawerOptions,
} from "@/components/contact/contact-drawer-context";

/**
 * Sticky bottom-right CTA pill — appears once the visitor has scrolled past
 * the hero so it never competes with the primary hero CTAs.
 * Mirrors the homepage `FloatingDemoCta` but takes a localised label.
 */
export function CampaignFloatingCta({
  label,
  options,
}: {
  label: string;
  options?: ContactDrawerOptions;
}) {
  const [visible, setVisible] = useState(false);
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 540);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-5 z-50 transition-[opacity,transform] duration-300 ease-[var(--ease-out)] sm:right-8"
      style={{
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={() => openDrawer(options)}
        className="group relative flex items-center gap-2.5 rounded-full bg-[var(--brand-deep)] px-5 py-3 text-sm font-semibold text-white shadow-2xl ring-1 ring-white/10 transition-[background-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--brand)] hover:shadow-[0_8px_32px_rgba(14,61,52,0.45)]"
        tabIndex={visible ? 0 : -1}
      >
        {label}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </button>
    </div>
  );
}
