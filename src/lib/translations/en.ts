import { TranslationDictionary } from "./types";

export const en: TranslationDictionary = {
  nav: {
    solutions: "Solutions",
    work: "Work",
    pricing: "Pricing",
    faq: "FAQ",
    bookDemo: "Book a demo",
  },
  hero: {
    badge: "2–4 Week Delivery · 0% Revenue Cut · Private Cloud (AWS · GCP · Azure)",
    headline: "Own your store, your apps, and your code.",
    subtitle:
      "We set up a complete online store, Android and iOS apps and an admin panel on your own cloud account. You pay once. You keep every sale.",
    anchors: {
      storefront: "01 Storefront",
      apps: "02 Mobile Apps",
      admin: "03 Admin CRM",
    },
    ctaDemo: "Book a demo",
    ctaWork: "See live stores",
    facts: "From $4,999 one-time · 0% commission · Live in 2–4 weeks",
  },
  whatYouGet: {
    index: "01",
    title: "What you get",
    intro:
      "Your brand on the web, Google Play, and the App Store. Fully synchronized across one private cloud backend.",
    tabs: {
      storefront: "01 Storefront (Web)",
      apps: "02 Native Apps (iOS & Android)",
      admin: "03 Admin & CRM (Operations)",
    },
    modules: {
      storefront: {
        title: "High-speed online store",
        summary:
          "A fast storefront in your colours and typography. Search, product variants, tax-correct checkout, and SEO are built in. Customers pay by card, UPI, PayPal, or cash on delivery.",
        caption:
          "Sub-second responsive web storefront running directly on client-owned cloud servers.",
        highlights: [
          { label: "Page speed", value: "< 0.9s load time" },
          { label: "Gateways", value: "Stripe, PayPal, UPI, COD" },
          { label: "Tax compliance", value: "Automated GST / VAT / Sales Tax" },
        ],
      },
      apps: {
        title: "Branded mobile shopping apps",
        summary:
          "Built from a unified Flutter codebase and published under your company's Google Play and Apple App Store accounts. Push notifications, offline caching, and biometric login are included out of the box.",
        caption:
          "Native mobile apps connected in real time to the cloud catalog and warehouse database.",
        highlights: [
          { label: "Codebase", value: "Flutter (Single Source)" },
          { label: "App Stores", value: "Google Play + Apple App Store" },
          { label: "Engagement", value: "Free push notifications & Biometrics" },
        ],
      },
      admin: {
        title: "All-in-one Admin Panel & CRM",
        summary:
          "Your central operations dashboard. Manage inventory across multiple warehouses, monitor low-stock reorder velocity, calculate true profit per order against supplier costs, and visually edit layouts without code.",
        caption:
          "The operations dashboard used daily to manage multi-hub fulfillment and customer history.",
        highlights: [
          { label: "Operations", value: "Multi-warehouse fulfillment" },
          { label: "Profit tracking", value: "Real margins after COGS" },
          { label: "Content editor", value: "Visual no-code banner updates" },
        ],
      },
    },
    adminHeading: "Admin Panel Capabilities Included",
    adminFeatures: [
      {
        title: "Stock across warehouses",
        description: "Counts per location. Orders ship from the nearest warehouse that has the item.",
      },
      {
        title: "Reorder alerts",
        description: "Shows how many days of stock are left, based on how fast each product sells.",
      },
      {
        title: "Profit per order",
        description: "Supplier costs are matched against each sale, so you see margin, not just revenue.",
      },
      {
        title: "Orders and customers",
        description: "Web, app, phone, COD and wholesale orders in one list, with each customer's history.",
      },
      {
        title: "Homepage editor",
        description: "Change banners and featured products on desktop and mobile without a developer.",
      },
    ],
    appStoreBadge: "Google Play Store",
    webStoreBadge: "Web Store",
  },
  howItWorks: {
    index: "02",
    title: "How it works",
    badge: "Skip the 6-month build · Launch your store & apps in 2–4 weeks",
    steps: [
      {
        when: "Day 1",
        title: "Discovery & Scope Call",
        text: "A 30-minute call to review your catalogue, payment gateways, regional tax requirements, and cloud preferences.",
      },
      {
        when: "Week 1",
        title: "Branding & Storefront Customization",
        text: "Your logo, brand fonts, colors, custom domain, and tax calculation rules are applied. We import your existing product catalogues.",
      },
      {
        when: "Week 2–3",
        title: "Private Cloud Deployment & App Builds",
        text: "Everything is deployed directly to your private AWS, GCP, or Azure account. Flutter mobile applications are built and tested for iOS and Android.",
      },
      {
        when: "Week 3–4",
        title: "App Store Publishing & Production Handover",
        text: "Apps are submitted to Apple App Store and Google Play under your corporate developer accounts. You receive all master server keys, database access, and 100% source code.",
      },
      {
        when: "After launch",
        title: "30-Day Engineering Warranty",
        text: "You retain full independence with 0% platform cuts, backed by 30 days of dedicated engineering warranty and setup support.",
      },
    ],
  },
  work: {
    index: "03",
    title: "Stores running on it today",
    intro: "Three businesses in different industries, each on its own private cloud account.",
    androidApp: "Android app",
    caseStudy: "Case study",
    projects: [
      {
        title: "Mechatron Lab",
        industry: "Electronics and robotics parts",
        description:
          "1,000+ SKUs, two warehouses, GST invoicing, an AI parts assistant and an Android app.",
      },
      {
        title: "eStoreAlley",
        industry: "Wholesale and retail marketplace",
        description:
          "Multi-vendor directory with separate wholesale pricing, Stripe checkout and an Android app.",
      },
      {
        title: "Style Gear",
        industry: "Fashion",
        description:
          "Apparel store with size and colour variants, image zoom and UPI checkout.",
      },
    ],
  },
  pricing: {
    index: "04",
    title: "Pricing",
    intro:
      "Stop renting your store. Buy it once, own it forever. Fixed one-time setup with zero recurring platform cuts.",
    currencyLabel: "Select currency",
    popularBadge: "Most popular",
    tiers: [
      {
        name: "Launch",
        tagline: "Store, apps and admin, branded and deployed to your cloud in 2–4 weeks.",
        ctaText: "Book a demo",
        deliverables: [
          "Web storefront in your branding",
          "Android and iOS apps, published under your developer accounts",
          "Admin panel and CRM with multi-warehouse inventory",
          "Stripe, PayPal, Razorpay, Cashfree, UPI and cash on delivery",
          "Automatic GST, VAT or US sales-tax invoices",
          "Deployment to your AWS, Google Cloud or Azure account",
          "30 days of support after launch",
        ],
      },
      {
        name: "Source code",
        tagline: "Add-on. The full repositories, with the right to change, host or resell them.",
        ctaText: "Ask about the licence",
        deliverables: [
          "Storefront (Next.js), apps (Flutter), backend and admin",
          "Unencrypted Git repositories",
          "Database and deployment documentation",
          "Perpetual commercial licence, no recurring fees",
        ],
      },
      {
        name: "Developer time",
        tagline: "Engineers for integrations, ERP sync or custom features.",
        ctaText: "Talk to us",
        deliverables: [
          "ERP, accounting and warehouse integrations",
          "B2B pricing, quotations and custom checkout logic",
          "Hosting upkeep, backups and security updates",
          "Hourly blocks or a monthly retainer",
        ],
      },
    ],
    tco: {
      title: "3-Year Total Cost of Ownership (TCO) Comparison",
      subtitle: "What a typical merchant spends over 36 months of selling online.",
      colItem: "Item",
      colMechatron: "Mechatron (Your Cloud)",
      colShopify: "Shopify Plus / SaaS",
      rows: [
        {
          label: "Initial setup & launch",
          mechatron: "one-time setup",
          shopify: "$10,000 – $25,000+ agency setup",
        },
        {
          label: "3-year software license fees",
          mechatron: "$0 (zero recurring SaaS fee)",
          shopify: "$72,000+ ($2,000/mo min)",
        },
        {
          label: "3-year cloud infrastructure",
          mechatron: "~$720 – $1,440 (~$20–$40/mo direct to your AWS / GCP)",
          shopify: "Included in SaaS bill",
        },
        {
          label: "3-year transaction commission (1.5% on $50k/mo GMV)",
          mechatron: "$0 (direct bank/gateway fees only)",
          shopify: "~$27,000+ in platform cuts",
        },
        {
          label: "Full source code & database ownership",
          mechatron: "100% full ownership option",
          shopify: "0% (vendor lock-in)",
        },
        {
          label: "Total 3-year estimated cost",
          mechatron: "~$5,719 – $6,439 (one-time setup + real hosting)",
          shopify: "$90,000 – $150,000+ (base + apps + cuts)",
        },
      ],
    },
    calculator: {
      headline: "Own your platform. Keep 100% of your sales.",
      subtitle:
        "Interactive 3-year savings calculator: drag the monthly revenue slider to see your savings against Shopify cuts.",
      salesVolume: "Monthly sales volume:",
      comparisonTitle: "Estimated 3-Year Total Cost Comparison",
      shopifyLabel: "Shopify Plus / SaaS (Base + 1.5% GMV fee + plugins):",
      mechatronLabel: "Mechatron (One-time setup + your cloud hosting bill):",
      savingsTitle: "Estimated 3-Year Merchant Savings",
      savingsSubtitle: "Retain 100% GMV with 0% SaaS take rate",
      savingsAction: "Unlock full margins",
    },
  },
  faq: {
    index: "05",
    title: "Frequently asked questions",
    intro: "Clear answers regarding hosting, code ownership, mobile apps and migration.",
    items: [
      {
        q: "Where is the store hosted?",
        a: "In your own AWS, Google Cloud or Azure account. We set it up there and hand you the admin passwords, database keys and domain settings. Your customer data never sits on our servers.",
      },
      {
        q: "Is there a monthly fee?",
        a: "No. You pay once for the setup and then only your own cloud bill, which is usually $20–50 a month for a small to mid-size store. We take no commission on sales.",
      },
      {
        q: "Do I get the source code?",
        a: "With the source code licence, yes: the storefront, the Flutter apps, the backend and the admin, as plain Git repositories. You can change it, host it anywhere, or resell it to your own clients.",
      },
      {
        q: "How do the mobile apps work?",
        a: "They're built with Flutter, so one codebase produces both the Android and iOS apps. They're published under your developer accounts and support push notifications and biometric login.",
      },
      {
        q: "Can you move our data from Shopify or WooCommerce?",
        a: "Yes. We move your products, categories, images and customers, and set up 301 redirects so you keep your search rankings.",
      },
      {
        q: "Which payment methods and taxes are supported?",
        a: "Stripe and PayPal for international orders, and Razorpay, Cashfree, UPI and cash on delivery for India. GST, EU VAT or US sales-tax invoices are generated for every order.",
      },
    ],
  },
  closing: {
    headline: "Your cloud. Your customer data. Your code.",
    description:
      "Ready to launch on your own AWS, GCP, or Azure account? Schedule a 30-minute walkthrough with our engineering team to review the architecture, live apps and sandbox.",
    ctaDemo: "Book a demo",
    whatsappText: "Or message on WhatsApp",
  },
  leadModal: {
    title: "Book a demo",
    subtitle:
      "A 30-minute call. We show you a live store and app and answer questions about your setup.",
    nameLabel: "Name",
    namePlaceholder: "Full name",
    emailLabel: "Work email",
    emailPlaceholder: "name@company.com",
    phoneLabel: "Phone or WhatsApp",
    phonePlaceholder: "Mobile or WhatsApp number",
    companyLabel: "Company",
    optional: "(optional)",
    companyPlaceholder: "Your store or company name",
    submitBtn: "Book demo call →",
    submitting: "Sending request...",
    whatsappText: "Or message us on",
    successTitle: "Thanks",
    successDesc: "We'll email you within one business day to pick a time.",
    closeBtn: "Close",
  },
  footer: {
    tagline: "E-commerce stores and apps, set up on your own cloud.",
    colWork: "Work",
    colProduct: "Product",
    colContact: "Contact",
    whatsIncluded: "What's included",
    comparedToShopify: "Compared to Shopify",
    pricing: "Pricing",
    copyright: "100% Client Cloud Ownership. All rights reserved.",
  },
};
