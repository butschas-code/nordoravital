"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

export function FloatingDemoCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-5 z-50 transition-all duration-500 sm:right-8"
      style={{
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <Link
        href="/pilot"
        className="group relative flex items-center gap-2.5 rounded-full bg-[var(--brand-deep)] px-5 py-3 text-sm font-semibold text-white shadow-2xl ring-1 ring-white/10 transition duration-300 hover:bg-[var(--brand)] hover:scale-105 hover:shadow-[0_8px_32px_rgba(14,61,52,0.45)]"
        tabIndex={visible ? 0 : -1}
      >
        Book a demo
        <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>→</span>
      </Link>
    </div>
  );
}
