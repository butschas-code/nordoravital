import type { FC } from "react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MedicalBusinessData {
  name: string;
  description: string;
  url: string;
  medicalSpecialty?: string[];
}

export interface ProductData {
  name: string;
  description: string;
  brand?: string;
  url?: string;
  priceCurrency?: string;
  price?: string | number;
}

export function professionalServiceJsonLd(data: MedicalBusinessData): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    url: data.url,
    provider: { "@type": "Organization", name: "Nordora Vital SIA", url: "https://www.nordoravital.com" },
    areaServed: ["LV", "EE", "LT"],
    ...(data.medicalSpecialty?.length
      ? {
          audience: data.medicalSpecialty.map((audienceType) => ({
            "@type": "BusinessAudience",
            audienceType,
          })),
        }
      : {}),
  };
}

interface JsonLdProps {
  data?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FaqItem[];
  medicalBusiness?: MedicalBusinessData;
  product?: ProductData;
}

export const JsonLd: FC<JsonLdProps> = ({
  data,
  breadcrumbs,
  faq,
  medicalBusiness,
  product,
}) => {
  const schemas: Record<string, unknown>[] = [];

  if (data) {
    if (Array.isArray(data)) {
      schemas.push(...data);
    } else {
      schemas.push(data);
    }
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (faq && faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // Published as a Service for professionals, not a MedicalBusiness: Nordora Vital
  // supplies wellbeing equipment and must not be presented as a medical provider.
  if (medicalBusiness) {
    schemas.push(professionalServiceJsonLd(medicalBusiness));
  }

  if (product) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: product.brand ?? "sanza",
      },
      url: product.url,
      ...(product.url
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: product.priceCurrency ?? "EUR",
              price: product.price ?? "0",
              availability: "https://schema.org/InStock",
              url: product.url,
            },
          }
        : {}),
    });
  }

  if (schemas.length === 0) return null;

  const payload = schemas.length === 1 ? schemas[0] : schemas;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
};
