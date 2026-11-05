import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#14171b",
};

export const metadata: Metadata = {
  title: "CF Liepāja × Sanza — koncepta vizualizācija",
  description:
    "Individuāli sagatavots Sanza koncepts CF Liepāja: kompakta atpūtas stacija pēc treniņa, bez izmaiņām esošajā treniņu piedāvājumā.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: "CF Liepāja × Sanza — koncepta vizualizācija",
    description:
      "Individuāli sagatavots Sanza koncepts CF Liepāja: kompakta atpūtas stacija pēc treniņa, bez izmaiņām esošajā treniņu piedāvājumā.",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "/images/proposals/cf-liepaja/gym-floor.webp",
        width: 2000,
        height: 1116,
        alt: "Koncepta vizualizācija: Sanza atpūtas stacija funkcionālā fitnesa zālē",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CF Liepāja × Sanza — koncepta vizualizācija",
    description:
      "Individuāli sagatavots Sanza koncepts CF Liepāja: kompakta atpūtas stacija pēc treniņa.",
    images: ["/images/proposals/cf-liepaja/gym-floor.webp"],
  },
};

/**
 * THESIS: A private concept for one club. The Sanza station is shown inside a working gym before any sales argument. Refuses the generic wellness landing page and the medical brochure.
 * OWN-WORLD: Charcoal #14171b, warm lamp light only inside the photographs, Manrope headlines, Inter body, Nordora moss solely for the demonstration action, CF Liepāja’s white mark and red-striped gym photographs as the other identity.
 * STORY: Kaspars and Oskars see the station, the member path, three ways to offer it, and an illustrative gross-revenue sheet, then email Sascha.
 * FIRST VIEWPORT: Full-bleed gym visualization. Headline and the exact concept label sit on the lower third. The demonstration link is in the top bar.
 * FORM: Brief-pinned private proposal. No concept-seed roll. Signature interaction: equipment hotspots that open the real product photograph.
 * FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
 */
export default function CfLiepajaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-cf-proposal className="contents">
      <div
        hidden
        dangerouslySetInnerHTML={{
          __html: `<!--
THESIS: A private concept for one club. The Sanza station is shown inside a working gym before any sales argument. Refuses the generic wellness landing page and the medical brochure.
OWN-WORLD: Charcoal #14171b, warm lamp light only inside the photographs, Manrope headlines, Inter body, Nordora moss solely for the demonstration action, CF Liepāja’s white mark and red-striped gym photographs as the other identity.
STORY: Kaspars and Oskars see the station, the member path, three ways to offer it, and an illustrative gross-revenue sheet, then email Sascha.
FIRST VIEWPORT: Full-bleed gym visualization. Headline and the exact concept label sit on the lower third. The demonstration link is in the top bar.
FORM: Brief-pinned private proposal. No concept-seed roll. Signature interaction: equipment hotspots that open the real product photograph.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
        }}
      />
      {children}
    </div>
  );
}
