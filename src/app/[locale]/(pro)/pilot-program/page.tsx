import { permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function PilotProgramRedirect({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  permanentRedirect(`/${locale}/pilot`);
}
