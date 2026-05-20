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
      <header className="max-w-[65ch] space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="text-xl leading-relaxed text-[var(--brand-muted)] md:text-[1.25rem] md:leading-[1.6]">{t("lead")}</p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-12">
        <ContactForm />

        <aside className="space-y-6 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[var(--brand-heading)]">
            {t("legalTitle")}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[var(--brand-muted)]">
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
                className="link-inline"
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
                className="link-inline"
              >
                {t("companyPhone")}
              </a>
            </p>
          </div>
          <nav className="border-t border-[var(--brand-border)] pt-6 text-base" aria-label="Legal">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy"
                  className="link-inline"
                >
                  {t("privacyLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="link-inline"
                >
                  {t("imprintLink")}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[var(--brand-muted)]">{t("legalNote")}</p>
          </nav>
        </aside>
      </div>
    </div>
  );
}
