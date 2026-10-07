export type Region = "US" | "EU" | "UK" | "IN";

export type Currency = "USD" | "EUR" | "GBP" | "INR";

export type Language = "en" | "es" | "de" | "fr" | "hi";

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  isPopular?: boolean;
  prices: Record<Currency, { amount: number; period?: string }>;
  deliverables: string[];
  ctaText: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  industry: string;
  description: string;
  url: string;
  playStoreUrl?: string;
  caseStudyUrl?: string;
  screenshotUrl?: string;
}

export interface AdminFeature {
  id: string;
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}
