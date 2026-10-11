export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(siteUrl: string, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item.startsWith("http") ? it.item : `${siteUrl}${it.item}`,
    })),
  };
}

export function generateFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export interface SoftwareSchemaOptions {
  name: string;
  description: string;
  price: string;
  url: string;
  operatingSystem?: string;
  applicationCategory?: string;
  ratingValue?: string;
  reviewCount?: string;
  siteUrl?: string;
}

export function generateSoftwareSchema({
  name,
  description,
  price,
  url,
  operatingSystem = "iOS, Android, Web, Cloud",
  applicationCategory = "BusinessApplication",
  ratingValue = "4.9",
  reviewCount = "48",
  siteUrl = "https://solutions.mechatronlab.com",
}: SoftwareSchemaOptions) {
  const fullUrl = url.startsWith("http") ? url : `${siteUrl}${url}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    operatingSystem,
    applicationCategory,
    description,
    offers: {
      "@type": "Offer",
      price: price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: fullUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    },
    provider: {
      "@type": ["Organization", "ProfessionalService"],
      name: "Mechatron Lab Solutions",
      url: siteUrl,
      description:
        "Software development company and engineering agency specializing in custom OTT video streaming platforms, 9:16 short-drama apps, and white-label e-commerce architectures.",
    },
  };
}
