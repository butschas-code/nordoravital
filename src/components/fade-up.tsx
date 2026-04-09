"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Extra Tailwind / CSS classes added only after element is visible */
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Whether to run the animation immediately (no IntersectionObserver) */
  immediate?: boolean;
};

const DELAY_CLASSES: Record<number, string> = {
  0: "fade-up",
  1: "fade-up fade-up-delay-1",
  2: "fade-up fade-up-delay-2",
  3: "fade-up fade-up-delay-3",
  4: "fade-up fade-up-delay-4",
  5: "fade-up fade-up-delay-5",
  6: "fade-up fade-up-delay-6",
};

export function FadeUp({ children, className = "", delay = 0, immediate = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? DELAY_CLASSES[delay] : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
