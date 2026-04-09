import type { CSSProperties } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { richParts } from "@/lib/i18n-rich";
import { FooterSocialPlaceholders } from "@/components/footer-social-placeholders";
import { LanguageSwitcher } from "@/components/language-switcher";
import { IMAGE_PATHS } from "@/lib/public-images";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = new Date().getFullYear();

  const siteLinks: { href: string; label: string }[] = [
    { href: "/how-it-works", label: tNav("howItWorks") },
    { href: "/offers", label: tNav("offers") },
    { href: "/professionals", label: tNav("professionals") },
    { href: "/contact", label: tNav("contact") },
  ];

  const linkClass =
    "text-white/85 transition hover:text-[var(--brand-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)]";

  /** Same stack as `.site-footer--brand` in globals — inline so it wins over Tailwind layers. */
  const footerBackground: CSSProperties = {
    backgroundColor: "#082721",
    backgroundImage: [
      "radial-gradient(ellipse 65% 55% at 18% 25%, rgba(111, 138, 122, 0.32) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 70% at 88% 75%, rgba(165, 133, 146, 0.18) 0%, transparent 52%)",
      "radial-gradient(ellipse 90% 60% at 50% 110%, rgba(80, 112, 64, 0.24) 0%, transparent 60%)",
      "linear-gradient(168deg, #082721 0%, #0e3d34 45%, #11463b 100%)",
    ].join(", "),
  };

  return (
    <footer
      className="site-footer--brand mt-auto w-full overflow-hidden border-t border-white/10 text-[#f6f1ea]"
      style={footerBackground}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group mb-4 inline-block">
              <span className="relative block h-9 w-[132px] sm:h-10 sm:w-[148px]">
                <Image
                  src={IMAGE_PATHS.brand.logo}
                  alt={tNav("brandLabel")}
                  fill
                  className="object-contain object-left brightness-0 invert opacity-[0.92]"
                  sizes="148px"
                />
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-small leading-relaxed text-white/75 [&_strong]:font-semibold [&_strong]:text-white">
              {t.rich("tagline", richParts.onDark)}
            </p>
          </div>

          {/* Site nav */}
          <div className="lg:col-span-3">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              {t("sectionSite")}
            </h2>
            <nav aria-label={t("sectionSite")}>
              <ul className="flex flex-col gap-2.5 text-sm">
                {siteLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              {t("sectionLegal")}
            </h2>
            <nav aria-label={t("sectionLegal")}>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/imprint" className={linkClass}>
                    {t("linkImprint")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={linkClass}>
                    {t("linkPrivacy")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass}>
                    {t("linkTerms")}
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className={linkClass}>
                    {t("linkCookiePolicy")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Lang + Social */}
          <div className="flex flex-col gap-8 lg:col-span-3">
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                {t("sectionLanguage")}
              </h2>
              <LanguageSwitcher appearance="onDark" />
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                {t("sectionSocial")}
              </h2>
              <FooterSocialPlaceholders
                appearance="onDark"
                linkedInLabel={t("socialLinkedIn")}
                instagramLabel={t("socialInstagram")}
                facebookLabel={t("socialFacebook")}
              />
              <p className="mt-2 max-w-xs text-xs text-white/50">{t("socialNote")}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">{t("rights", { year })}</p>
          <p className="text-xs text-white/50">Nordora Vital SIA</p>
        </div>
      </div>
    </footer>
  );
}
