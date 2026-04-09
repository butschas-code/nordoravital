import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("Nav");

  return (
    <div className="py-20 text-center">
      <p className="text-lg text-[var(--brand-heading)]">404</p>
      <Link href="/" className="mt-4 inline-block text-[var(--brand-primary)] underline">
        {t("home")}
      </Link>
    </div>
  );
}
