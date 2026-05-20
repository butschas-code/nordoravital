import type { CSSProperties } from "react";
import Image from "next/image";
import { headers } from "next/headers";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { richParts } from "@/lib/i18n-rich";
import { FooterSocialPlaceholders } from "@/components/footer-social-placeholders";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getSiteSurface, HOME_DOMAIN, PRO_DOMAIN } from "@/lib/domains";
import { getHomeDisplayPath, getHomeSharedCopy, homeLocale } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

export async function SiteFooter({ localeOverride }: { localeOverride?: string } = {}) {
  const locale = homeLocale(localeOverride ?? (await getLocale()));
  const homeCopy = getHomeSharedCopy(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const year = new Date().getFullYear();
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const useLocalLinks = surface === "local";
  const proHref = (path = "") =>
    useLocalLinks ? `/${locale}${path}` : `https://${PRO_DOMAIN}/${locale}${path}`;
  const homeHref = (path = "") => {
    const displayPath = getHomeDisplayPath(useLocalLinks ? "local" : "home", path);
    return useLocalLinks ? `/${locale}${displayPath}` : `https://${HOME_DOMAIN}/${locale}${displayPath}`;
  };

  const professionalLinks: { href: string; label: string }[] = [
    { href: proHref(), label: t("proHome") },
    { href: proHref("/how-it-works"), label: tNav("howItWorks") },
    { href: proHref("/offers"), label: tNav("offers") },
    { href: proHref("/professionals"), label: tNav("professionals") },
    { href: proHref("/contact"), label: tNav("contact") },
  ];

  const homeuseLinks: { href: string; label: string }[] = [
    { href: homeHref(), label: t("homeuseHome") },
    { href: homeHref("/how-it-works"), label: t("homeuseExperience") },
    { href: homeHref("/programs"), label: t("homeusePrograms") },
    { href: homeHref("/sanza-experiences"), label: t("homeuseExperiences") },
    { href: homeHref("/faq"), label: t("homeuseFaq") },
    { href: homeCopy.shopUrl, label: t("homeuseShop") },
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
          <div className="lg:col-span-3">
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
            <p className="mt-3 max-w-[min(65ch,32rem)] text-small leading-relaxed text-white/75 [&_strong]:font-semibold [&_strong]:text-white">
              {t.rich("tagline", richParts.onDark)}
            </p>
          </div>

          {/* Professional sitemap */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/55 sm:text-sm">
              {t("sectionProfessional")}
            </h2>
            <nav aria-label={t("sectionProfessional")}>
              <ul className="flex flex-col gap-2.5 text-base">
                {professionalLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Homeuse sitemap */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/55 sm:text-sm">
              {t("sectionHomeuse")}
            </h2>
            <nav aria-label={t("sectionHomeuse")}>
              <ul className="flex flex-col gap-2.5 text-base">
                {homeuseLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/55 sm:text-sm">
              {t("sectionLegal")}
            </h2>
            <nav aria-label={t("sectionLegal")}>
              <ul className="flex flex-col gap-2.5 text-base">
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
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/55 sm:text-sm">
                {t("sectionLanguage")}
              </h2>
              <LanguageSwitcher appearance="onDark" />
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/55 sm:text-sm">
                {t("sectionSocial")}
              </h2>
              <FooterSocialPlaceholders
                appearance="onDark"
                linkedInLabel={t("socialLinkedIn")}
                instagramLabel={t("socialInstagram")}
                facebookLabel={t("socialFacebook")}
              />
              <p className="mt-2 max-w-[min(65ch,22rem)] text-sm leading-relaxed text-white/55">{t("socialNote")}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55 sm:text-base">{t("rights", { year })}</p>
          <p className="text-sm text-white/55 sm:text-base">Nordora Vital SIA</p>
        </div>
      </div>
    </footer>
  );
}
