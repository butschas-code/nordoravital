import { getTranslations } from "next-intl/server";
import { getIndexableOrigin, organizationJsonLd } from "@/lib/seo";

/** Organization schema for one surface; rendered by that surface's layout. */
export async function OrganizationJsonLd({
  locale,
  surface,
}: {
  locale: string;
  surface: "pro" | "home" | "root";
}) {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const schema = organizationJsonLd(getIndexableOrigin(surface), t("description"));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
