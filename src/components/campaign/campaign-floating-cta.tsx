import type { ContactDrawerOptions } from "@/components/contact/contact-drawer-context";
import { FloatingCtaPill } from "@/components/floating-cta-pill";

/**
 * Campaign variant of the sticky CTA pill — same behaviour as the homepage
 * pill, with a localised label supplied by the campaign content.
 */
export function CampaignFloatingCta({
  label,
  options,
}: {
  label: string;
  options?: ContactDrawerOptions;
}) {
  return <FloatingCtaPill label={label} options={options} showAfter={540} />;
}
