import type { Metadata } from "next";
import { cfLiepajaContent } from "@/lib/proposals/cf-liepaja-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = cfLiepajaContent(locale);
  const ogLocale = locale === "en" ? "en_GB" : "lv_LV";

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/images/proposals/cf-liepaja/gym-floor.webp",
          width: 2000,
          height: 1116,
          alt:
            locale === "en"
              ? "Concept visualization: a sanza relaxation station in a functional fitness gym"
              : "Koncepta vizualizācija: sanza atpūtas stacija funkcionālā fitnesa zālē",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: ["/images/proposals/cf-liepaja/gym-floor.webp"],
    },
  };
}

export default function CfLiepajaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
