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

  const ecommerceAlternates = {
    languages: {
      en: `${baseUrl}/solutions/ecommerce`,
      es: `${baseUrl}/es/solutions/ecommerce`,
      de: `${baseUrl}/de/solutions/ecommerce`,
      fr: `${baseUrl}/fr/solutions/ecommerce`,
      hi: `${baseUrl}/hi/solutions/ecommerce`,
    },
  };

  const ottAlternates = {
    languages: {
      en: `${baseUrl}/solutions/ott-streaming`,
      es: `${baseUrl}/es/solutions/ott-streaming`,
      de: `${baseUrl}/de/solutions/ott-streaming`,
      fr: `${baseUrl}/fr/solutions/ott-streaming`,
      hi: `${baseUrl}/hi/solutions/ott-streaming`,
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
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // E-Commerce Solution (All Languages)
    {
      url: `${baseUrl}/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: ecommerceAlternates,
    },
    {
      url: `${baseUrl}/es/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ecommerceAlternates,
    },
    {
      url: `${baseUrl}/de/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ecommerceAlternates,
    },
    {
      url: `${baseUrl}/fr/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ecommerceAlternates,
    },
    {
      url: `${baseUrl}/hi/solutions/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ecommerceAlternates,
    },
    // OTT Streaming Solution (All Languages)
    {
      url: `${baseUrl}/solutions/ott-streaming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: ottAlternates,
    },
    {
      url: `${baseUrl}/es/solutions/ott-streaming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ottAlternates,
    },
    {
      url: `${baseUrl}/de/solutions/ott-streaming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ottAlternates,
    },
    {
      url: `${baseUrl}/fr/solutions/ott-streaming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ottAlternates,
    },
    {
      url: `${baseUrl}/hi/solutions/ott-streaming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: ottAlternates,
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
    // Company & Contact
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Trust, Legal & Policies
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
