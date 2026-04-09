import { getTranslations } from "next-intl/server";
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
      <p className="text-kicker mb-4">{t("ctaKicker")}</p>

      {/* Heading */}
      <h2
        className="font-heading text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold leading-snug tracking-tight text-[var(--text)]"
      >
        {t.rich("ctaTitle", richParts.default)}
      </h2>

      {/* Body */}
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
        {t.rich("ctaBody", richParts.default)}
      </p>

      {/* CTA */}
      <div className="mt-10">
        <Link href="/pilot" className="btn-primary">
          {t("ctaBookDemo")}
        </Link>
      </div>
    </div>
  );
}
