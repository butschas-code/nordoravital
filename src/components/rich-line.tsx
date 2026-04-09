import type { ReactNode } from "react";

const variantClass: Record<"default" | "onDark" | "muted", string> = {
  default: "font-semibold text-[var(--text)]",
  onDark: "font-semibold text-white",
  muted: "font-semibold text-[var(--muted)]",
};

/**
 * Renders trusted i18n strings that may contain `<strong>...</strong>` (e.g. bold **sanza**).
 */
export function RichLine({
  text,
  variant = "default",
}: {
  text: string;
  variant?: keyof typeof variantClass;
}): ReactNode {
  const strongClass = variantClass[variant];
  const parts = text.split(/(<strong>[\s\S]*?<\/strong>)/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^<strong>([\s\S]*)<\/strong>$/);
        if (m) {
          return (
            <strong key={i} className={strongClass}>
              {m[1]}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
