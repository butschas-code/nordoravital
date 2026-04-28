import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, Manrope } from "next/font/google";
import { ContactDrawerProvider } from "@/components/contact/contact-drawer-context";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default as {
    Meta: { title: string; description: string };
  };
  return {
    title: messages.Meta.title,
    description: messages.Meta.description,
    metadataBase: new URL("https://nordoravital.com"),
  };
}

function isDeckPath(pathname: string) {
  return /^\/(de|en|lv)\/deck\/?$/.test(pathname);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "de" | "en" | "lv")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const heads = await headers();
  const pathname = heads.get("x-nordora-pathname") ?? "";
  const deckFullscreen = isDeckPath(pathname);

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
        <NextIntlClientProvider locale={locale} messages={messages}>
          {deckFullscreen ? (
            children
          ) : (
            <ContactDrawerProvider>
              <div className="flex min-h-full flex-col">
                <SiteHeader />
                <main className="layout-main flex flex-col gap-0 flex-1 px-4 pb-12 pt-0 sm:px-6 md:px-8 lg:mx-auto lg:max-w-[1200px] lg:px-10">
                  {children}
                </main>
                <SiteFooter />
                <CookieBanner />
              </div>
            </ContactDrawerProvider>
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
