import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// Next.js already emits `<meta name="robots" content="noindex">` for not-found responses.
export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-sm font-semibold tracking-[0.18em] text-[var(--brand-muted)]">404</p>
      <h1 className="mt-3 font-heading text-3xl text-[var(--brand-heading)]">{t("title")}</h1>
      <p className="mt-4 text-base leading-relaxed text-[var(--brand-muted)]">{t("body")}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-primary)] px-5 py-2.5 font-medium text-white"
        >
          {t("home")}
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--brand-border)] px-5 py-2.5 font-medium text-[var(--brand-heading)]"
        >
          {t("contact")}
        </Link>
      </div>
    </div>
  );
}
