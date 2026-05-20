import Image from "next/image";
import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { CookieBanner } from "@/components/cookie-banner";
import { ContactDrawerProvider } from "@/components/contact/contact-drawer-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeaderDesktopNav } from "@/components/site-header-desktop-nav";
import { SiteHeaderMobileNav } from "@/components/site-header-mobile-nav";
import { Link } from "@/i18n/navigation";
import { getSiteSurface } from "@/lib/domains";
import { getHomeDisplayPath, getHomeSharedCopy } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

export async function HomeSiteNav({ locale }: { locale: string }) {
  const copy = getHomeSharedCopy(locale);
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const homePath = (path = "") => getHomeDisplayPath(surface, path);
  const navItems = [
    { label: copy.nav.home, href: homePath(), external: false },
    { label: copy.nav.experience, href: homePath("/how-it-works"), external: false },
    { label: copy.nav.programs, href: homePath("/programs"), external: false },
    { label: copy.nav.sanzaExperiences, href: homePath("/sanza-experiences"), external: false },
    { label: copy.nav.faq, href: homePath("/faq"), external: false },
    {
      label: copy.nav.contact,
      href: "#contact",
      external: false,
      action: "contact",
      drawerOptions: { drawerType: "homePersonal" },
    },
    { label: copy.nav.shop, href: copy.shopUrl, external: true },
  ] as const;
  const desktopNavItems = navItems.filter((item) => item.label !== copy.nav.shop);

  return (
    <header className="sticky top-0 z-[90] overflow-visible border-b border-[var(--border)] bg-[var(--brand-header-bg)] shadow-[0_1px_0_rgba(30,42,34,0.05)] backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex min-h-[88px] max-w-[1200px] items-center justify-between gap-4 px-4 py-2 sm:min-h-[92px] sm:gap-6 sm:px-6 md:px-8 lg:gap-3 lg:px-6 xl:px-8 min-[1360px]:gap-5 min-[1360px]:px-10">
        <Link
          href={homePath()}
          aria-label="Nordora Vital Home"
          className="group flex min-w-0 shrink-0 items-center overflow-visible"
        >
          <span className="relative block h-[60px] w-[220px] shrink-0 min-[400px]:w-[280px] sm:h-[80px] sm:w-[420px] md:w-[460px] lg:w-[220px] min-[1360px]:w-[280px]">
            <Image
              src={IMAGE_PATHS.brand.logo}
              alt=""
              fill
              priority
              className="object-contain object-left transition group-hover:opacity-95"
              sizes="(max-width: 399px) 220px, (max-width: 639px) 280px, (max-width: 767px) 420px, 460px"
            />
          </span>
        </Link>

        <nav
          aria-label="Home"
          className="hidden flex-1 justify-center min-[1360px]:block"
        >
          <SiteHeaderDesktopNav links={desktopNavItems} />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SiteHeaderMobileNav links={[...navItems]} className="flex items-center min-[1360px]:hidden" />
          <div className="hidden items-center gap-2 sm:gap-3 min-[1360px]:flex">
            <LanguageSwitcher />
            <a
              href={copy.shopUrl}
              className="btn-primary inline-flex min-h-11 px-4 py-2 text-[0.9rem]"
            >
              {copy.nav.shop}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export async function HomeSiteFooter() {
  const copy = getHomeSharedCopy(await getLocale());
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const legalPath = (path: string) => getHomeDisplayPath(surface, path);
  const legalLinks = [
    { label: copy.footer.imprint, href: legalPath("/imprint") },
    { label: copy.footer.privacy, href: legalPath("/privacy") },
    { label: copy.footer.terms, href: legalPath("/terms") },
    { label: copy.footer.cookies, href: legalPath("/cookie-policy") },
  ] as const;

  return (
    <footer className="relative overflow-hidden border-t border-[#d8cec2] bg-[#0e3d34] px-5 py-10 text-[#f6f1ea] sm:px-8">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(246,241,234,0.12),transparent_34%),radial-gradient(circle_at_92%_28%,rgba(165,133,146,0.18),transparent_32%)]"
      />
      <div className="relative mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="max-w-[44rem] text-sm leading-7 text-[#efe9e2]/82">
            {copy.footer.note}
          </p>
          <nav aria-label="Home legal" className="mt-5">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#efe9e2]/78">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="underline underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8cec2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold text-[#efe9e2] lg:items-end">
          <a
            href="https://pro.nordoravital.com"
            className="underline underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8cec2]"
          >
            {copy.footer.pro}
          </a>
          <p className="text-sm font-medium text-[#efe9e2]/62">{copy.footer.company}</p>
        </div>
      </div>
    </footer>
  );
}

export async function HomeSiteLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <ContactDrawerProvider>
      <div className="home-site-root min-h-dvh overflow-x-clip bg-[#f6f1ea] text-[#1e2a22]">
        <HomeSiteNav locale={locale} />
        {children}
        <SiteFooter localeOverride={locale} />
        <CookieBanner />
      </div>
    </ContactDrawerProvider>
  );
}
