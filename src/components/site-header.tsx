import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { LanguageSwitcher } from "@/components/language-switcher";
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
    <header className="sticky top-0 z-50 overflow-visible border-b border-[var(--border)] bg-white shadow-[0_1px_0_rgba(30,42,34,0.06)]">
      <div className="mx-auto flex min-h-[88px] max-w-[1200px] items-center justify-between gap-4 px-4 py-2 sm:min-h-[92px] sm:gap-6 sm:px-6 md:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center overflow-visible"
          aria-label={t("brandLabel")}
        >
          {/* Responsive logo: smaller on narrow phones to leave room for header buttons */}
          <span className="relative block h-[60px] w-[220px] shrink-0 min-[400px]:w-[280px] sm:h-[80px] sm:w-[420px] md:w-[460px]">
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
          className="hidden flex-1 justify-center lg:block"
          aria-label="Main"
        >
          <ul className="flex flex-nowrap items-center justify-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap rounded-lg px-3 py-2.5 text-base font-normal tracking-tight text-[var(--muted)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="block whitespace-nowrap rounded-lg px-3 py-2.5 text-base font-normal tracking-tight text-[var(--muted)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SiteHeaderMobileNav links={navLinks} />
          <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
            <LanguageSwitcher />
            <ContactDrawerTrigger />
          </div>
        </div>
      </div>
    </header>
  );
}
