import { setRequestLocale } from "next-intl/server";
import { ContactDrawerProvider } from "@/components/contact/contact-drawer-context";
import { CookieBanner } from "@/components/cookie-banner";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/** Professional site (pro.nordoravital.com): header, footer and the contact drawer. */
export default async function ProLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ContactDrawerProvider>
      <OrganizationJsonLd locale={locale} surface="pro" />
      <div className="flex min-h-full flex-col">
        <SiteHeader />
        <main id="main-content" className="layout-main flex flex-col gap-0 flex-1 px-4 pb-12 pt-0 sm:px-6 md:px-8 lg:mx-auto lg:max-w-[1200px] lg:px-10 [&:has(.campaign-page-root)]:pb-0 [&:has(.site-marketing-root)]:px-0 [&:has(.site-marketing-root)]:pb-0 [&:has(.site-marketing-root)]:sm:px-0 [&:has(.site-marketing-root)]:md:px-0 [&:has(.site-marketing-root)]:lg:max-w-none [&:has(.site-marketing-root)]:lg:px-0">
          {children}
        </main>
        <SiteFooter />
      </div>
      <CookieBanner />
    </ContactDrawerProvider>
  );
}
