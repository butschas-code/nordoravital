import { getTranslations } from "next-intl/server";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { Link } from "@/i18n/navigation";
import { richParts } from "@/lib/i18n-rich";

export async function HowItWorksCta() {
  const t = await getTranslations("HowItWorks");

  return (
    <div
      className="relative overflow-hidden rounded-3xl px-8 py-12 text-center sm:px-12 sm:py-16"
      style={{
        background:
          "radial-gradient(ellipse 75% 90% at 20% 20%, rgba(111,138,122,0.22) 0%, transparent 55%), radial-gradient(ellipse 60% 80% at 85% 80%, rgba(165,133,146,0.14) 0%, transparent 50%), linear-gradient(160deg, var(--surface) 0%, var(--bg) 55%, var(--panel) 100%)",
      }}
    >
      {/* Decorative concentric rings — top-right */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 opacity-[0.07]"
        aria-hidden
      >
        {[40, 70, 100, 130].map((r, i) => (
          <div
            key={r}
            className="absolute inset-0 rounded-full border border-[var(--brand)]"
            style={{
              transform: `scale(${r / 40})`,
              animation: `breathe ${6 + i * 1.2}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Kicker */}
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)] sm:text-sm sm:tracking-[0.14em]">
        {t("ctaKicker")}
      </p>

      {/* Heading */}
      <h2
        className="font-heading text-[clamp(1.65rem,3.8vw,2.45rem)] font-bold leading-snug tracking-tight text-[var(--text)]"
      >
        {t.rich("ctaTitle", richParts.default)}
      </h2>

      {/* Body */}
      <p className="mx-auto mt-5 max-w-[65ch] text-lg leading-[1.65] text-[var(--muted)] md:text-xl">
        {t.rich("ctaBody", richParts.default)}
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <ContactDrawerTrigger className="btn-primary">
          {t("ctaBookDemo")}
        </ContactDrawerTrigger>
        <Link href="/offers" className="btn-outline inline-flex px-10 py-3">
          {t("ctaSecondaryOffers")}
        </Link>
      </div>
    </div>
  );
}
