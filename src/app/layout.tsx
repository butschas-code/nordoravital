import type { ReactNode } from "react";
import "./globals.css";

/**
 * Root layout: no `<html>` here — see `app/[locale]/layout.tsx` (required by next-intl for `lang`).
 * Global styles are imported here so every route receives the brand CSS even if a child layout changes.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
