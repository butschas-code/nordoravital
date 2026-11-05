import { CfLiepajaProposal } from "@/components/proposals/cf-liepaja/proposal-view";
import { setRequestLocale } from "next-intl/server";

export default async function CfLiepajaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CfLiepajaProposal />;
}
