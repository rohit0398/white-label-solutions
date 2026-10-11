import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://solutions.mechatronlab.com");

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

  const shortDramaAlternates = {
    languages: {
      en: `${baseUrl}/solutions/short-drama`,
      es: `${baseUrl}/es/solutions/short-drama`,
      de: `${baseUrl}/de/solutions/short-drama`,
      fr: `${baseUrl}/fr/solutions/short-drama`,
      hi: `${baseUrl}/hi/solutions/short-drama`,
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
    // E-Commerce Website Development Solution
    {
      url: `${baseUrl}/solutions/ecommerce-website-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // E-Commerce Mobile App Development Solution
    {
      url: `${baseUrl}/solutions/ecommerce-app-development`,
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
    // Short-Drama Base Platform (All Languages)
    {
      url: `${baseUrl}/solutions/short-drama`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: shortDramaAlternates,
    },
    {
      url: `${baseUrl}/es/solutions/short-drama`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: shortDramaAlternates,
    },
    {
      url: `${baseUrl}/de/solutions/short-drama`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: shortDramaAlternates,
    },
    {
      url: `${baseUrl}/fr/solutions/short-drama`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: shortDramaAlternates,
    },
    {
      url: `${baseUrl}/hi/solutions/short-drama`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: shortDramaAlternates,
    },
    // Short-Drama App Development Solution
    {
      url: `${baseUrl}/solutions/short-drama-app-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Short-Drama Web Platform Solution
    {
      url: `${baseUrl}/solutions/short-drama-website-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cinematic Video Streaming Development Solution
    {
      url: `${baseUrl}/solutions/ott-video-streaming-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cinematic OTT Mobile App Development Solution
    {
      url: `${baseUrl}/solutions/ott-app-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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
    // Engineering Blog & Growth Guides
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/ecommerce-website-development-cost`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/ecommerce-website-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/ecommerce-app-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
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
