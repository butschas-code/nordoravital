import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ContactDrawerProvider } from "@/components/contact/contact-drawer-context";
import { CookieBanner } from "@/components/cookie-banner";
import { PostHogAnalytics } from "@/components/posthog-analytics";
import { SanzaBoldener } from "@/components/sanza-boldener";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { routing, type Locale } from "@/i18n/routing";
import type { SiteSurface } from "@/lib/domains";
import {
  ROOT_INDEXABLE_ORIGIN,
  getIndexableOrigin,
  localizedUrl,
  organizationJsonLd,
  pageAlternates,
  splitPublicPath,
} from "@/lib/seo";

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

const OG_LOCALE: Record<string, string> = {
  de: "de_DE",
  en: "en_US",
  lv: "lv_LV",
  ru: "ru_RU",
  tr: "tr_TR",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const heads = await headers();
  const surface = heads.get("x-nordora-surface") as SiteSurface | null;
  const pathname = heads.get("x-nordora-pathname") ?? `/${locale}`;
  const { path } = splitPublicPath(pathname);
  const indexableSurface =
    surface === "pro" || surface === "home" || surface === "root" ? surface : "pro";
  const origin = getIndexableOrigin(indexableSurface);
  const isGateway = surface === "root" || path === "gateway";
  const isDeck = path === "deck" || path.startsWith("deck/");
  const messages = (await import(`../../../messages/${locale}.json`)).default as {
    Meta: { title: string; description: string };
  };
  const canonical = isGateway ? ROOT_INDEXABLE_ORIGIN : localizedUrl(origin, locale, path);
  const siteName = indexableSurface === "home" ? "Nordora Vital Home" : "Nordora Vital";

  return {
    title: messages.Meta.title,
    description: messages.Meta.description,
    metadataBase: new URL(origin),
    alternates: isGateway
      ? { canonical: ROOT_INDEXABLE_ORIGIN }
      : pageAlternates(origin, locale, path),
    openGraph: {
      title: messages.Meta.title,
      description: messages.Meta.description,
      url: canonical,
      siteName,
      locale: OG_LOCALE[locale] ?? "en_US",
      type: "website",
    },
    robots: isDeck
      ? { index: false, follow: true }
      : { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

function isDeckPath(pathname: string) {
  const locales = routing.locales.join("|");
  return new RegExp(`^\\/(${locales})\\/deck/?$`).test(pathname);
}

function isGatewayPath(pathname: string) {
  if (pathname === "/") return true;
  const locales = routing.locales.join("|");
  return new RegExp(`^\\/(${locales})\\/gateway/?$`).test(pathname);
}

function isHomePath(pathname: string) {
  const locales = routing.locales.join("|");
  return new RegExp(`^\\/(${locales})\\/home(\\/|$)`).test(pathname);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const heads = await headers();
  const pathname = heads.get("x-nordora-pathname") ?? "";
  const surface = heads.get("x-nordora-surface");
  const deckFullscreen = isDeckPath(pathname);
  const indexableSurface =
    surface === "pro" || surface === "home" || surface === "root" ? surface : "root";
  const messagesForSchema = (await import(`../../../messages/${locale}.json`)).default as {
    Meta: { description: string };
  };
  const organizationSchema = organizationJsonLd(
    getIndexableOrigin(indexableSurface),
    messagesForSchema.Meta.description,
  );
  const gatewayOnly = surface === "root" || isGatewayPath(pathname);
  const homeOnly = surface === "home" || (surface !== "pro" && isHomePath(pathname));

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} font-sans h-full`}
    >
      <body
        className={
          deckFullscreen
            ? "h-full overflow-hidden bg-[#070a09] font-sans text-[var(--text)] antialiased"
            : "min-h-full overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--text)] antialiased"
        }
      >
        {!deckFullscreen ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
            }}
          />
        ) : null}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SanzaBoldener />
          {deckFullscreen || gatewayOnly || homeOnly ? (
            children
          ) : (
            <ContactDrawerProvider>
              <div className="flex min-h-full flex-col">
                <SiteHeader />
                <main className="layout-main flex flex-col gap-0 flex-1 px-4 pb-12 pt-0 sm:px-6 md:px-8 lg:mx-auto lg:max-w-[1200px] lg:px-10 [&:has(.campaign-page-root)]:pb-0 [&:has(.site-marketing-root)]:px-0 [&:has(.site-marketing-root)]:pb-0 [&:has(.site-marketing-root)]:sm:px-0 [&:has(.site-marketing-root)]:md:px-0 [&:has(.site-marketing-root)]:lg:max-w-none [&:has(.site-marketing-root)]:lg:px-0">
                  {children}
                </main>
                <SiteFooter />
              </div>
            </ContactDrawerProvider>
          )}
          {!deckFullscreen ? <CookieBanner /> : null}
          <PostHogAnalytics />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
