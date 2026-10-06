export type Region = "US" | "EU" | "UK" | "IN";

export type Currency = "USD" | "EUR" | "GBP" | "INR";

export type Language = "en" | "es" | "de" | "fr" | "hi";

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  prices: Record<Currency, { amount: number; period?: string }>;
  deliverables: string[];
  specs: {
    label: string;
    value: string;
  }[];
  ctaText: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  tagline: string;
  industry: string;
  description: string;
  url: string;
  playStoreUrl?: string;
  badge: string;
  accentColor: string;
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  techTags: string[];
  screenshotUrl?: string;
}

export interface AdminFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  keyCapabilities: string[];
  auditProof: string;
}

export interface BrandTheme {
  id: string;
  name: string;
  industryName: string;
  primaryColor: string;
  secondaryColor: string;
  accentGradient: string;
  storeName: string;
  heroHeadline: string;
  sampleProduct: {
    name: string;
    category: string;
    price: string;
    rating: string;
  };
}
