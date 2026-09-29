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

  if (medicalBusiness) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: medicalBusiness.name,
      description: medicalBusiness.description,
      url: medicalBusiness.url,
      medicalSpecialty: medicalBusiness.medicalSpecialty,
    });
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
    });
  }

  if (schemas.length === 0) return null;

  const payload = schemas.length === 1 ? schemas[0] : schemas;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
};
