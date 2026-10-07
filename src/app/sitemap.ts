import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://white-label-solutions.vercel.app");

  const homeAlternates = {
    languages: {
      en: baseUrl,
      es: `${baseUrl}/es`,
      de: `${baseUrl}/de`,
      fr: `${baseUrl}/fr`,
      hi: `${baseUrl}/hi`,
    },
  };

  const now = new Date();

  return [
    // English Root
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: homeAlternates,
    },
    // Spanish
    {
      url: `${baseUrl}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: homeAlternates,
    },
    // German
    {
      url: `${baseUrl}/de`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: homeAlternates,
    },
    // French
    {
      url: `${baseUrl}/fr`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: homeAlternates,
    },
    // Hindi
    {
      url: `${baseUrl}/hi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: homeAlternates,
    },
    // Content / Solution Pages
    {
      url: `${baseUrl}/compare/shopify-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/mechatron-lab`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/estorealley`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
