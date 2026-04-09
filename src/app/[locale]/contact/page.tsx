import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/contact/contact-form";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = (await import(`../../../../messages/${locale}.json`)).default as {
    Contact: { metaTitle: string; metaDescription: string };
  };
  return {
    title: m.Contact.metaTitle,
    description: m.Contact.metaDescription,
  };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <div className="space-y-12 pt-8 md:space-y-16 md:pt-10">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="text-lg leading-relaxed text-[var(--brand-muted)]">{t("lead")}</p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-12">
        <ContactForm />

        <aside className="space-y-6 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[var(--brand-heading)]">
            {t("legalTitle")}
          </h2>
          <div className="space-y-4 text-sm text-[var(--brand-muted)]">
            <p className="font-medium text-[var(--brand-heading)]">{t("companyName")}</p>
            <p className="whitespace-pre-line">{t("address")}</p>
            <p>
              <span className="font-medium text-[var(--brand-heading)]">
                {t("vatLabel")}:{" "}
              </span>
              {t("vatNumber")}
            </p>
            <p>
              <span className="font-medium text-[var(--brand-heading)]">
                {t("email")}:{" "}
              </span>
              <a
                href={`mailto:${t("companyEmail")}`}
                className="text-[var(--brand-primary)] underline-offset-2 hover:underline"
              >
                {t("companyEmail")}
              </a>
            </p>
            <p>
              <span className="font-medium text-[var(--brand-heading)]">
                {t("phone")}:{" "}
              </span>
              <a
                href={`tel:${t("companyPhoneTel")}`}
                className="text-[var(--brand-primary)] underline-offset-2 hover:underline"
              >
                {t("companyPhone")}
              </a>
            </p>
          </div>
          <nav className="border-t border-[var(--brand-border)] pt-6 text-sm" aria-label="Legal">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--brand-primary)] underline-offset-2 hover:underline"
                >
                  {t("privacyLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-[var(--brand-primary)] underline-offset-2 hover:underline"
                >
                  {t("imprintLink")}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[var(--brand-muted)]">{t("legalNote")}</p>
          </nav>
        </aside>
      </div>
    </div>
  );
}
