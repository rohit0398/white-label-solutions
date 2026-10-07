import { Language } from "@/types";

export interface TranslationDictionary {
  nav: {
    solutions: string;
    work: string;
    pricing: string;
    faq: string;
    bookDemo: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    anchors: {
      storefront: string;
      apps: string;
      admin: string;
    };
    ctaDemo: string;
    ctaWork: string;
    facts: string;
  };
  whatYouGet: {
    index: string;
    title: string;
    intro: string;
    tabs: {
      storefront: string;
      apps: string;
      admin: string;
    };
    modules: {
      storefront: {
        title: string;
        summary: string;
        caption: string;
        highlights: { label: string; value: string }[];
      };
      apps: {
        title: string;
        summary: string;
        caption: string;
        highlights: { label: string; value: string }[];
      };
      admin: {
        title: string;
        summary: string;
        caption: string;
        highlights: { label: string; value: string }[];
      };
    };
    adminHeading: string;
    adminFeatures: {
      title: string;
      description: string;
    }[];
    appStoreBadge: string;
    webStoreBadge: string;
  };
  howItWorks: {
    index: string;
    title: string;
    badge: string;
    steps: {
      when: string;
      title: string;
      text: string;
    }[];
  };
  work: {
    index: string;
    title: string;
    intro: string;
    androidApp: string;
    caseStudy: string;
    projects: {
      title: string;
      industry: string;
      description: string;
    }[];
  };
  pricing: {
    index: string;
    title: string;
    intro: string;
    currencyLabel: string;
    popularBadge: string;
    tiers: {
      name: string;
      tagline: string;
      ctaText: string;
      deliverables: string[];
    }[];
    tco: {
      title: string;
      subtitle: string;
      colItem: string;
      colMechatron: string;
      colShopify: string;
      rows: {
        label: string;
        mechatron: string;
        shopify: string;
      }[];
    };
    calculator: {
      headline: string;
      subtitle: string;
      salesVolume: string;
      comparisonTitle: string;
      shopifyLabel: string;
      mechatronLabel: string;
      savingsTitle: string;
      savingsSubtitle: string;
      savingsAction: string;
    };
  };
  faq: {
    index: string;
    title: string;
    intro: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  closing: {
    headline: string;
    description: string;
    ctaDemo: string;
    whatsappText: string;
  };
  leadModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    optional: string;
    companyPlaceholder: string;
    submitBtn: string;
    submitting: string;
    whatsappText: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  footer: {
    tagline: string;
    colWork: string;
    colProduct: string;
    colContact: string;
    whatsIncluded: string;
    comparedToShopify: string;
    pricing: string;
    copyright: string;
  };
}

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिंदी" },
];
