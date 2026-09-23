"use client";

import { useEffect, useState } from "react";
import {
  useContactDrawer,
  type ContactDrawerOptions,
} from "@/components/contact/contact-drawer-context";

type Props = {
  label: string;
  options?: ContactDrawerOptions;
  /** Scroll offset (px) after which the pill appears — past the hero CTAs. */
  showAfter?: number;
};

/**
 * Sticky bottom-right CTA pill, shared by the homepage and the campaign pages.
 * Appears once the visitor scrolls past the hero and hides again over the
 * footer, where it would otherwise cover the legal line and social links.
 */
export function FloatingCtaPill({ label, options, showAfter = 540 }: Props) {
  const { openDrawer } = useContactDrawer();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > showAfter);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastHero && !footerInView;

  return (
    <div
      className="fixed bottom-6 right-4 z-50 max-w-[calc(100vw-2rem)] transition-[opacity,transform] duration-300 ease-[var(--ease-out)] sm:right-8 sm:max-w-sm"
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
        className="group relative flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--brand-deep)] px-5 py-3 text-left text-[0.9375rem] font-semibold leading-snug text-white shadow-2xl ring-1 ring-white/20 transition-[background-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--brand)] hover:shadow-[0_8px_32px_rgba(14,61,52,0.45)] sm:text-base"
        tabIndex={visible ? 0 : -1}
        data-pressable
      >
        <span className="line-clamp-2">{label}</span>
        <span
          aria-hidden
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        >
          →
        </span>
      </button>
    </div>
  );
}
