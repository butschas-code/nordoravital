import type { ReactNode } from "react";

/** Rich-text parts for next-intl `t.rich()` — bold brand word `sanza` and other `<strong>` spans. */
export const richParts = {
  default: {
    strong: (chunks: ReactNode) => (
      <strong className="font-semibold text-[var(--text)]">{chunks}</strong>
    ),
  },
  onDark: {
    strong: (chunks: ReactNode) => (
      <strong className="font-semibold text-white">{chunks}</strong>
    ),
  },
  onDarkMuted: {
    strong: (chunks: ReactNode) => (
      <strong className="font-semibold text-white/85">{chunks}</strong>
    ),
  },
  /** Use inside `uppercase` kickers/labels so the brand word stays lowercase. */
  preserveBrandCase: {
    strong: (chunks: ReactNode) => (
      <strong className="font-semibold lowercase">{chunks}</strong>
    ),
  },
} as const;

export type RichPartsMode = keyof typeof richParts;

/** Strip simple HTML tags for metadata / plain-text fallbacks. */
export function stripRichTags(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}
