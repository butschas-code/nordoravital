import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteHeaderDesktopNav } from "@/components/site-header-desktop-nav";
import { SiteHeaderMobileNav } from "@/components/site-header-mobile-nav";
import { IMAGE_PATHS } from "@/lib/public-images";

export async function SiteHeader() {
  const t = await getTranslations("Nav");

  const navLinks = [
    { href: "/how-it-works", label: t("howItWorks") },
    { href: "/offers", label: t("offers") },
    { href: "/professionals", label: t("professionals") },
    { href: "https://nordoravital.sanzanet.com/shop-en", label: t("visitShop"), external: true },
  ];

  return (
    <header className="sticky top-0 z-[90] overflow-visible border-b border-[var(--border)] bg-[var(--brand-header-bg)] shadow-[0_1px_0_rgba(30,42,34,0.05)] backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex min-h-[88px] max-w-[1200px] items-center justify-between gap-4 px-4 py-2 sm:min-h-[92px] sm:gap-6 sm:px-6 md:px-8 lg:gap-3 lg:px-6 xl:gap-6 xl:px-10">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center overflow-visible"
          aria-label={t("brandLabel")}
        >
          {/* Responsive logo: smaller on narrow phones to leave room for header buttons */}
          <span className="relative block h-[60px] w-[220px] shrink-0 min-[400px]:w-[280px] sm:h-[80px] sm:w-[420px] md:w-[460px] lg:w-[240px] xl:w-[300px]">
            <Image
              src={IMAGE_PATHS.brand.logo}
              alt=""
              fill
              className="object-contain object-left transition group-hover:opacity-95"
              sizes="(max-width: 399px) 220px, (max-width: 639px) 280px, (max-width: 767px) 420px, 460px"
              priority
            />
          </span>
        </Link>

        <nav
          className="hidden flex-1 justify-center xl:block"
          aria-label="Main"
        >
          <SiteHeaderDesktopNav links={navLinks} />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-2 xl:gap-3">
          <SiteHeaderMobileNav links={navLinks} className="flex items-center xl:hidden" />
          <div className="hidden items-center gap-2 sm:gap-3 xl:flex">
            <LanguageSwitcher />
            <ContactDrawerTrigger className="btn-primary inline-flex whitespace-nowrap px-4 py-2 text-[0.95rem] xl:px-[1.125rem] xl:text-base" />
          </div>
        </div>
      </div>
    </header>
  );
}
