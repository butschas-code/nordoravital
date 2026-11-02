import { getOriginForSurface } from "@/lib/domains";
import { ROOT_INDEXABLE_ORIGIN } from "@/lib/seo";

export const dynamic = "force-static";

const PRO = getOriginForSurface("pro");
const HOME = getOriginForSurface("home");

// Wording follows PRODUCT.md: wellbeing positioning only, no medical claims.
const BODY = `# Nordora Vital

> Nordora Vital SIA (Ādaži, Latvia) is the sanza partner for Latvia and the Baltics. sanza is an in-room wellbeing system that combines PEMF, structured frequency programmes and targeted applicators to support comfort, calm and relaxation. It complements professional care and is not a medical treatment, diagnostic tool or replacement for clinical work.

The site is available in English, German, Latvian and Russian (/en, /de, /lv, /ru).

## For professionals (${PRO})

- [Overview](${PRO}/en): sanza for clinics, therapists, physiotherapists, dentists, spas and sports facilities
- [How it works](${PRO}/en/how-it-works): technologies, applicators and programmes
- [Offers](${PRO}/en/offers): packages for practices
- [Professionals by sector](${PRO}/en/professionals/sectors)
- [Comparisons](${PRO}/en/compare): sanza next to other PEMF systems, red light and cold plunge
- [Pilot programme](${PRO}/en/pilot)
- [Contact and demo requests](${PRO}/en/contact)

## For home use (${HOME})

- [Overview](${HOME}/en)
- [How it works](${HOME}/en/how-it-works)
- [Programmes](${HOME}/en/programs)
- [FAQ](${HOME}/en/faq)

## Company

- [Gateway](${ROOT_INDEXABLE_ORIGIN})
- [Imprint](${PRO}/en/imprint)
- [Privacy policy](${PRO}/en/privacy)
- Contact: info@nordoravital.com
`;

export function GET() {
  return new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
