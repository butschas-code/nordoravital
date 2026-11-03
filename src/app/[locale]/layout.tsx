import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PostHogAnalytics } from "@/components/posthog-analytics";
import { SanzaBoldener } from "@/components/sanza-boldener";
import { SkipLink } from "@/components/skip-link";
import { routing, type Locale } from "@/i18n/routing";
import { OG_LOCALE } from "@/lib/page-metadata";
import { PRO_SHARE_IMAGE, getIndexableOrigin } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E3D34",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Defaults shared by every surface. Nothing here may depend on the request: pages are
 * built ahead of time, so each surface layout (`(pro)`, `home`, `gateway`) sets its own
 * origin, and each page sets its canonical and hreflang via `pageMetadata`.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(getIndexableOrigin("pro")),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Nordora Vital",
      locale: OG_LOCALE[locale] ?? "en_US",
      type: "website",
      images: [PRO_SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [PRO_SHARE_IMAGE.url],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

/**
 * Shell shared by every surface. Header, footer, cookie banner and Organization JSON-LD
 * live in the surface layouts, so the deck and the local flyer previews get none of them.
 */
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable} font-sans h-full`}>
      <body className="min-h-full overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--text)] antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SkipLink />
          <SanzaBoldener />
          {children}
          <PostHogAnalytics />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
