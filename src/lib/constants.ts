import { ShowcaseProject, PricingTier, AdminFeature, Faq } from "@/types";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@mechatronlab.com";
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919887998663").replace(/[^0-9]/g, "");
const whatsappDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98879 98663";
const whatsappPrefill = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_PREFILL_TEXT ||
    "Hi Mechatron Lab, I am interested in your White-Label E-Commerce Solution."
);

export const BRAND = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Mechatron Lab Solutions",
  parentCompany: "Mechatron Lab",
  subdomains: {
    solutions: "https://solutions.mechatronlab.com",
    express: "https://express.mechatronlab.com",
    whitelabel: "https://white-label-solution.mechatronlab.com",
  },
  contact: {
    email,
    whatsapp: `+${whatsappNumber}`,
    whatsappDisplay,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${whatsappPrefill}`,
  },
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "Store, apps and admin, branded and deployed to your cloud in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 4999, period: "one-time" },
      EUR: { amount: 4599, period: "one-time" },
      GBP: { amount: 3999, period: "one-time" },
      INR: { amount: 399000, period: "one-time" },
    },
    deliverables: [
      "Web storefront in your branding",
      "Android and iOS apps, published under your developer accounts",
      "Admin panel and CRM with multi-warehouse inventory",
      "Stripe, PayPal, Razorpay, Cashfree, UPI and cash on delivery",
      "Automatic GST, VAT or US sales-tax invoices",
      "Deployment to your AWS, Google Cloud or Azure account",
      "30 days of support after launch",
    ],
    ctaText: "Book a demo",
  },
  {
    id: "source-code-license",
    name: "Source code",
    tagline: "Add-on. The full repositories, with the right to change, host or resell them.",
    prices: {
      USD: { amount: 1999, period: "one-time" },
      EUR: { amount: 1849, period: "one-time" },
      GBP: { amount: 1599, period: "one-time" },
      INR: { amount: 149000, period: "one-time" },
    },
    deliverables: [
      "Storefront (Next.js), apps (Flutter), backend and admin",
      "Unencrypted Git repositories",
      "Database and deployment documentation",
      "Perpetual commercial licence, no recurring fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "dedicated-support",
    name: "Developer time",
    tagline: "Engineers for integrations, ERP sync or custom features.",
    prices: {
      USD: { amount: 20, period: "per hour" },
      EUR: { amount: 19, period: "per hour" },
      GBP: { amount: 16, period: "per hour" },
      INR: { amount: 1500, period: "per hour" },
    },
    deliverables: [
      "ERP, accounting and warehouse integrations",
      "B2B pricing, quotations and custom checkout logic",
      "Hosting upkeep, backups and security updates",
      "Hourly blocks or a monthly retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const ECOMMERCE_APP_PRICING_TIERS: PricingTier[] = [
  {
    id: "app-launch",
    name: "Mobile Launch",
    tagline: "Native iOS & Android apps, branded and published to your developer accounts in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 2999, period: "one-time" },
      EUR: { amount: 2749, period: "one-time" },
      GBP: { amount: 2399, period: "one-time" },
      INR: { amount: 249000, period: "one-time" },
    },
    deliverables: [
      "Native iOS & Android apps built from unified Flutter codebase",
      "Published under your Apple Developer & Google Play Console accounts",
      "Free unlimited push notifications (FCM & APNs)",
      "Native biometric login (Face ID & Touch ID)",
      "In-app checkout (Apple Pay, Google Pay, Stripe, PayPal, UPI, COD)",
      "Real-time API sync with your product catalog and inventory",
      "30 days of post-launch support & store review guarantee",
    ],
    ctaText: "Book app demo",
  },
  {
    id: "app-source-code",
    name: "Source code",
    tagline: "Add-on. The full Flutter mobile app repository with full custody.",
    prices: {
      USD: { amount: 999, period: "one-time" },
      EUR: { amount: 920, period: "one-time" },
      GBP: { amount: 799, period: "one-time" },
      INR: { amount: 79000, period: "one-time" },
    },
    deliverables: [
      "Complete Flutter mobile application source code",
      "iOS and Android build configurations and pipeline scripts",
      "Unencrypted Git repository access",
      "Perpetual commercial licence, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "app-developer-time",
    name: "Developer time",
    tagline: "Engineers for custom mobile features or backend API sync.",
    prices: {
      USD: { amount: 15, period: "per hour" },
      EUR: { amount: 14, period: "per hour" },
      GBP: { amount: 12, period: "per hour" },
      INR: { amount: 1200, period: "per hour" },
    },
    deliverables: [
      "Custom mobile screens, brand widgets & checkout logic",
      "Shopify, WooCommerce, ERP, or custom backend API integration",
      "App Store compliance updates & version releases",
      "Hourly blocks or a monthly retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const ECOMMERCE_WEB_PRICING_TIERS: PricingTier[] = [
  {
    id: "web-launch",
    name: "Web Launch",
    tagline: "High-speed storefront and Admin CRM, branded and deployed to your cloud in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 2999, period: "one-time" },
      EUR: { amount: 2749, period: "one-time" },
      GBP: { amount: 2399, period: "one-time" },
      INR: { amount: 249000, period: "one-time" },
    },
    deliverables: [
      "Sub-second Next.js web storefront in your branding (< 0.9s load time)",
      "Operations Admin CRM with multi-warehouse inventory",
      "Stripe, PayPal, Apple Pay, Google Pay, Razorpay, UPI & COD",
      "Automatic GST, EU VAT, or US sales-tax invoices",
      "Deployment to your AWS, Google Cloud or Azure account",
      "SEO Core Web Vitals optimization & structured data",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book web demo",
  },
  {
    id: "web-source-code",
    name: "Source code",
    tagline: "Add-on. The full storefront, backend, and CRM repositories.",
    prices: {
      USD: { amount: 999, period: "one-time" },
      EUR: { amount: 920, period: "one-time" },
      GBP: { amount: 799, period: "one-time" },
      INR: { amount: 79000, period: "one-time" },
    },
    deliverables: [
      "Next.js storefront, backend API, and Admin CRM repositories",
      "Unencrypted Git repository access with architecture docs",
      "Database schema and cloud deployment scripts",
      "Perpetual commercial licence, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "web-developer-time",
    name: "Developer time",
    tagline: "Engineers for ERP integrations, custom checkout or UI design.",
    prices: {
      USD: { amount: 15, period: "per hour" },
      EUR: { amount: 14, period: "per hour" },
      GBP: { amount: 12, period: "per hour" },
      INR: { amount: 1200, period: "per hour" },
    },
    deliverables: [
      "ERP, accounting, CRM, and warehouse integrations",
      "B2B pricing, quotations, and custom checkout rules",
      "Hosting upkeep, backups, and security updates",
      "Hourly blocks or a monthly retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "mechatron-lab",
    title: "Mechatron Lab",
    industry: "Electronics and robotics parts",
    description:
      "1,000+ SKUs, two warehouses, GST invoicing, an AI parts assistant and an Android app.",
    url: "https://mechatronlab.com",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN",
    caseStudyUrl: "/case-studies/mechatron-lab",
    screenshotUrl: "/showcase/mechatron-store.png",
  },
  {
    id: "estore-alley",
    title: "eStoreAlley",
    industry: "Wholesale and retail marketplace",
    description:
      "Multi-vendor directory with separate wholesale pricing, Stripe checkout and an Android app.",
    url: "https://estorealley.web.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.estorealley.app&hl=en_IN",
    caseStudyUrl: "/case-studies/estorealley",
    screenshotUrl: "/showcase/estorealley-store.png",
  },
  {
    id: "style-gear",
    title: "Style Gear",
    industry: "Fashion",
    description: "Apparel store with size and colour variants, image zoom and UPI checkout.",
    url: "https://stylegear.co.in",
    screenshotUrl: "/showcase/stylegear-store.png",
  },
];

export const ADMIN_FEATURES: AdminFeature[] = [
  {
    id: "multi-warehouse",
    title: "Stock across warehouses",
    description: "Counts per location. Orders ship from the nearest warehouse that has the item.",
  },
  {
    id: "reorder-alerts",
    title: "Reorder alerts",
    description: "Shows how many days of stock are left, based on how fast each product sells.",
  },
  {
    id: "profit",
    title: "Profit per order",
    description: "Supplier costs are matched against each sale, so you see margin, not just revenue.",
  },
  {
    id: "orders",
    title: "Orders and customers",
    description: "Web, app, phone, COD and wholesale orders in one list, with each customer's history.",
  },
  {
    id: "layout",
    title: "Homepage editor",
    description: "Change banners and featured products on desktop and mobile without a developer.",
  },
];

export const FAQS: Faq[] = [
  {
    q: "How much does a pre-built ecommerce website and mobile app package cost?",
    a: "Our Launch package is a transparent, one-time fee of $4,999 (₹3,99,000). This includes your custom-branded Next.js web store, Flutter iOS and Android apps published to the App Store and Google Play under your developer accounts, central operations CRM with multi-warehouse inventory, and private cloud deployment. There are zero monthly software fees and 0% sales commission.",
  },
  {
    q: "Why is this platform built with Next.js and Flutter?",
    a: "Next.js delivers sub-second page loads, server-side rendering for top Google SEO rankings, and fast checkout performance. Flutter allows us to deliver high-performance native iOS and Android apps from a single codebase with native biometric login and push notifications.",
  },
  {
    q: "How does the total 3-year cost compare to Shopify?",
    a: "Over 3 years, a Shopify store typically costs $26,000+ ($10,764 in plan fees, $10,000+ in 2% transaction fees on $500k GMV, plus $5,400+ in app store subscriptions) while you own zero code. With Mechatron Lab, you pay $4,999 once plus raw cloud hosting (~$30/mo = $1,080 over 3 years), saving over $20,000 while owning your platform completely.",
  },
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
];

// --- Short-Drama (9:16 Vertical Reels) Pricing Tiers ---

export const SHORT_DRAMA_BASE_PRICING_TIERS: PricingTier[] = [
  {
    id: "short-drama-base",
    name: "Complete Drama Suite",
    tagline: "Both 9:16 vertical drama mobile apps AND responsive web player + Video CMS in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 4999, period: "one-time" },
      EUR: { amount: 4599, period: "one-time" },
      GBP: { amount: 3999, period: "one-time" },
      INR: { amount: 399000, period: "one-time" },
    },
    deliverables: [
      "9:16 vertical short-drama Flutter iOS & Android apps",
      "Next.js 16 mobile-first web streaming portal & catalog",
      "TikTok-style 60FPS vertical swipe player with chapter scrubbers",
      "Weekly, monthly & annual VIP subscription passes via Stripe & In-App Purchases",
      "Rewarded video ads (AVOD) integration via Google AdMob & VAST",
      "Video CMS with teaser episode paywall rules & drop-off analytics",
      "Cloudflare Stream automated encoding with zero bandwidth markup",
      "Published under your Apple & Google Play developer accounts",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book drama suite demo",
  },
  {
    id: "short-drama-source-code",
    name: "Source code",
    tagline: "Add-on. The full Flutter mobile apps, Next.js web player, and Video CMS repositories.",
    prices: {
      USD: { amount: 1999, period: "one-time" },
      EUR: { amount: 1849, period: "one-time" },
      GBP: { amount: 1599, period: "one-time" },
      INR: { amount: 149000, period: "one-time" },
    },
    deliverables: [
      "Full Flutter apps, Next.js web portal, and Video CMS repositories",
      "Unencrypted Git repository access with architecture documentation",
      "Cloudflare Stream encoding & DRM signed token scripts",
      "Perpetual commercial license, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "short-drama-developer-time",
    name: "Developer time",
    tagline: "Engineers for custom payment gateways, ad networks, or creator tooling.",
    prices: {
      USD: { amount: 20, period: "per hour" },
      EUR: { amount: 18, period: "per hour" },
      GBP: { amount: 16, period: "per hour" },
      INR: { amount: 1500, period: "per hour" },
    },
    deliverables: [
      "Custom payment gateway and local wallet integrations",
      "Rewarded video ad networks (Google AdMob, AppLovin, Unity Ads)",
      "App Store compliance updates & version releases",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const SHORT_DRAMA_APP_PRICING_TIERS: PricingTier[] = [
  {
    id: "short-drama-app-launch",
    name: "Drama App Launch",
    tagline: "Native 9:16 vertical drama apps (iOS & Android) and Video CMS deployed in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 2999, period: "one-time" },
      EUR: { amount: 2749, period: "one-time" },
      GBP: { amount: 2399, period: "one-time" },
      INR: { amount: 249000, period: "one-time" },
    },
    deliverables: [
      "9:16 vertical short-drama Flutter iOS & Android apps",
      "TikTok-style 60FPS vertical swipe player with chapter scrubbers",
      "Weekly & monthly VIP subscription passes via Apple StoreKit & Google Play",
      "Rewarded video ads (AVOD) integration via Google AdMob",
      "Cloudflare Stream automated encoding with zero bandwidth markup",
      "Video CMS with episode paywall rules & drop-off analytics",
      "Published under your Apple & Google Play developer accounts",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book drama app demo",
  },
  {
    id: "short-drama-app-source-code",
    name: "Source code",
    tagline: "Add-on. The full Flutter mobile apps and Video CMS repositories.",
    prices: {
      USD: { amount: 999, period: "one-time" },
      EUR: { amount: 920, period: "one-time" },
      GBP: { amount: 799, period: "one-time" },
      INR: { amount: 79000, period: "one-time" },
    },
    deliverables: [
      "Full Flutter mobile apps and Video CMS repositories",
      "Unencrypted Git repository access with architecture documentation",
      "Cloudflare Stream encoding & DRM signed token scripts",
      "Perpetual commercial license, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "short-drama-app-developer-time",
    name: "Developer time",
    tagline: "Engineers for custom payment gateways, ad networks, or creator tooling.",
    prices: {
      USD: { amount: 15, period: "per hour" },
      EUR: { amount: 14, period: "per hour" },
      GBP: { amount: 12, period: "per hour" },
      INR: { amount: 1200, period: "per hour" },
    },
    deliverables: [
      "Custom payment gateway and local wallet integrations",
      "Rewarded video ad networks (Google AdMob, AppLovin, Unity Ads)",
      "App Store compliance updates & version releases",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const SHORT_DRAMA_WEB_PRICING_TIERS: PricingTier[] = [
  {
    id: "short-drama-web-launch",
    name: "Drama Web Launch",
    tagline: "Mobile-first 9:16 vertical web streaming portal and Video CMS deployed in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 2999, period: "one-time" },
      EUR: { amount: 2749, period: "one-time" },
      GBP: { amount: 2399, period: "one-time" },
      INR: { amount: 249000, period: "one-time" },
    },
    deliverables: [
      "Next.js 16 responsive 9:16 mobile-first web streaming portal",
      "Sub-second HLS vertical player with continuous autoplay & chapter scrubbers",
      "Stripe recurring billing for weekly, monthly & annual VIP passes",
      "Pre-roll & rewarded video ads integration for web browsers",
      "Video CMS with episode paywall rules & drop-off analytics",
      "Search-engine-optimized series, episode & synopsis pages",
      "Deployed directly onto your private cloud with 0% platform cuts",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book drama web demo",
  },
  {
    id: "short-drama-web-source-code",
    name: "Source code",
    tagline: "Add-on. The full Next.js web portal, Video CMS, and backend repositories.",
    prices: {
      USD: { amount: 999, period: "one-time" },
      EUR: { amount: 920, period: "one-time" },
      GBP: { amount: 799, period: "one-time" },
      INR: { amount: 79000, period: "one-time" },
    },
    deliverables: [
      "Next.js web portal, Video CMS, and backend repositories",
      "Unencrypted Git repository access with architecture documentation",
      "Cloudflare Stream encoding & DRM signed token scripts",
      "Perpetual commercial license, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "short-drama-web-developer-time",
    name: "Developer time",
    tagline: "Engineers for custom payment gateways, ad networks, or creator tooling.",
    prices: {
      USD: { amount: 15, period: "per hour" },
      EUR: { amount: 14, period: "per hour" },
      GBP: { amount: 12, period: "per hour" },
      INR: { amount: 1200, period: "per hour" },
    },
    deliverables: [
      "Custom payment gateway and Stripe customer portal setup",
      "Custom analytics & user retention funnel tracking",
      "SEO enhancements and international localization",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

// Alias for existing imports
export const SHORT_DRAMA_PRICING_TIERS = SHORT_DRAMA_APP_PRICING_TIERS;

// --- Cinematic OTT (16:9 Widescreen) Pricing Tiers ---

export const CINEMATIC_OTT_BASE_PRICING_TIERS: PricingTier[] = [
  {
    id: "cinematic-base",
    name: "Complete OTT Suite",
    tagline: "Both 16:9 widescreen web portal AND native mobile apps + Video CMS in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 4999, period: "one-time" },
      EUR: { amount: 4599, period: "one-time" },
      GBP: { amount: 3999, period: "one-time" },
      INR: { amount: 399000, period: "one-time" },
    },
    deliverables: [
      "16:9 widescreen Next.js 16 web portal & series catalog",
      "Flutter iOS & Android native streaming apps with offline download & TV cast",
      "Sub-second buffer via HLS.js adaptive bitrates (1080p, 720p, 480p, 360p)",
      "Stripe recurring billing & In-App Purchase VIP passes (SVOD)",
      "Video CMS with cloud encoding pipeline (Cloudflare Stream / AWS)",
      "Video Ads (AVOD) integration via Google AdMob & VAST standards",
      "Search-engine-optimized series, episode & synopsis title pages",
      "Deployed directly onto your private cloud with 0% platform cuts",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book complete OTT demo",
  },
  {
    id: "cinematic-base-source-code",
    name: "Source code",
    tagline: "Add-on. The full Flutter mobile apps, Next.js web portal, and Video CMS repositories.",
    prices: {
      USD: { amount: 1999, period: "one-time" },
      EUR: { amount: 1849, period: "one-time" },
      GBP: { amount: 1599, period: "one-time" },
      INR: { amount: 149000, period: "one-time" },
    },
    deliverables: [
      "Full Flutter apps, Next.js web portal, and Video CMS repositories",
      "Unencrypted Git repository access with architecture documentation",
      "Automated cloud transcoding scripts with DRM token security",
      "Perpetual commercial license, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "cinematic-base-developer-time",
    name: "Developer time",
    tagline: "Engineers for Smart TV apps, custom DRM or live linear streaming sync.",
    prices: {
      USD: { amount: 20, period: "per hour" },
      EUR: { amount: 18, period: "per hour" },
      GBP: { amount: 16, period: "per hour" },
      INR: { amount: 1500, period: "per hour" },
    },
    deliverables: [
      "Smart TV app builds (Android TV, Apple TV, FireTV)",
      "Google Widevine & Apple FairPlay DRM integration",
      "Live 24/7 linear channel stream ingest & HLS transcode sync",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const CINEMATIC_OTT_WEB_PRICING_TIERS: PricingTier[] = [
  {
    id: "cinematic-web-launch",
    name: "Cinematic Web Launch",
    tagline: "16:9 widescreen streaming web portal and Video CMS, branded and deployed in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 2999, period: "one-time" },
      EUR: { amount: 2749, period: "one-time" },
      GBP: { amount: 2399, period: "one-time" },
      INR: { amount: 249000, period: "one-time" },
    },
    deliverables: [
      "16:9 widescreen Next.js 16 video portal & series catalog",
      "Sub-second buffer via HLS.js adaptive bitrates (1080p, 720p, 480p, 360p)",
      "Multi-language subtitle strips (WebVTT) & audio track selectors",
      "Stripe recurring billing for monthly, quarterly & annual VIP passes",
      "Video CMS with cloud encoding pipeline (Cloudflare Stream / AWS)",
      "Search-engine-optimized series, episode & synopsis title pages",
      "Deployed directly onto your private cloud with 0% platform cuts",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book web streaming demo",
  },
  {
    id: "cinematic-web-source-code",
    name: "Source code",
    tagline: "Add-on. The full Next.js video portal, Video CMS, and backend repositories.",
    prices: {
      USD: { amount: 999, period: "one-time" },
      EUR: { amount: 920, period: "one-time" },
      GBP: { amount: 799, period: "one-time" },
      INR: { amount: 79000, period: "one-time" },
    },
    deliverables: [
      "Next.js web streaming portal, Video CMS & API repositories",
      "Unencrypted Git repository access with architecture documentation",
      "Automated cloud transcoding scripts with DRM token security",
      "Perpetual commercial license, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "cinematic-web-developer-time",
    name: "Developer time",
    tagline: "Engineers for Smart TV apps, custom DRM or live linear streaming sync.",
    prices: {
      USD: { amount: 15, period: "per hour" },
      EUR: { amount: 14, period: "per hour" },
      GBP: { amount: 12, period: "per hour" },
      INR: { amount: 1200, period: "per hour" },
    },
    deliverables: [
      "Smart TV app builds (Android TV, Apple TV, FireTV)",
      "Google Widevine & Apple FairPlay DRM integration",
      "Live 24/7 linear channel stream ingest & HLS transcode sync",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const CINEMATIC_OTT_APP_PRICING_TIERS: PricingTier[] = [
  {
    id: "cinematic-app-launch",
    name: "Cinematic App Launch",
    tagline: "Native 16:9 widescreen streaming apps (iOS & Android) and Video CMS in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 2999, period: "one-time" },
      EUR: { amount: 2749, period: "one-time" },
      GBP: { amount: 2399, period: "one-time" },
      INR: { amount: 249000, period: "one-time" },
    },
    deliverables: [
      "Flutter iOS & Android 16:9 cinematic widescreen mobile apps",
      "Adaptive multi-bitrate HLS playback with picture-in-picture & TV casting",
      "Apple In-App Purchase & Google Play Billing for VIP subscriptions",
      "Pre-roll and mid-roll video ads integration (AVOD)",
      "Offline video download encryption for on-the-go viewing",
      "Video CMS with cloud encoding pipeline (Cloudflare Stream / AWS)",
      "Published directly under your Apple & Google Play developer accounts",
      "30 days of post-launch engineering support",
    ],
    ctaText: "Book streaming app demo",
  },
  {
    id: "cinematic-app-source-code",
    name: "Source code",
    tagline: "Add-on. The full Flutter mobile apps and Video CMS repositories.",
    prices: {
      USD: { amount: 999, period: "one-time" },
      EUR: { amount: 920, period: "one-time" },
      GBP: { amount: 799, period: "one-time" },
      INR: { amount: 79000, period: "one-time" },
    },
    deliverables: [
      "Full Flutter mobile apps and Video CMS repositories",
      "Unencrypted Git repository access with architecture documentation",
      "Automated cloud transcoding scripts with DRM token security",
      "Perpetual commercial license, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "cinematic-app-developer-time",
    name: "Developer time",
    tagline: "Engineers for Smart TV apps, custom DRM or live linear streaming sync.",
    prices: {
      USD: { amount: 15, period: "per hour" },
      EUR: { amount: 14, period: "per hour" },
      GBP: { amount: 12, period: "per hour" },
      INR: { amount: 1200, period: "per hour" },
    },
    deliverables: [
      "Smart TV app builds (Android TV, Apple TV, FireTV)",
      "Google Widevine & Apple FairPlay DRM integration",
      "Live 24/7 linear channel stream ingest & HLS transcode sync",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

// Aliases for existing imports
export const CINEMATIC_OTT_PRICING_TIERS = CINEMATIC_OTT_WEB_PRICING_TIERS;
export const OTT_PRICING_TIERS = CINEMATIC_OTT_BASE_PRICING_TIERS;


export const OTT_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "episodic-entertainment-app",
    title: "Episodic Comedy & Short Series App",
    industry: "Short Video Series & Entertainment",
    description:
      "Episodic short series and entertainment application built and deployed by our team, powering millions of active Android viewers with low-latency edge caching and fast vertical browsing.",
    url: "https://play.google.com/store/apps/details?id=com.app.alright&hl=en_IN",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.alright&hl=en_IN",
    screenshotUrl: "/showcase/ott-drama-app.jpg",
  },
  {
    id: "plus305",
    title: "305+ TV Network",
    industry: "Live TV Channels & Video on Demand",
    description:
      "24/7 linear live TV broadcast stream and on-demand video catalogue. Cross-platform responsive playback with adaptive multi-bitrate HLS streaming.",
    url: "http://play.google.com/store/apps/details?id=tv.network.plus305&hl=en_IN",
    playStoreUrl: "http://play.google.com/store/apps/details?id=tv.network.plus305&hl=en_IN",
    screenshotUrl: "/showcase/ott-cinematic-web.jpg",
  },
];

export const ALL_HOME_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  ...OTT_SHOWCASE_PROJECTS,
  ...SHOWCASE_PROJECTS.slice(0, 2),
];

export const OTT_FAQS: Faq[] = [
  {
    q: "How does Cloudflare Stream video pricing work?",
    a: "Cloudflare Stream charges raw wholesale usage fees directly to your account: approximately $1.00 per 1,000 minutes of video viewed, with $0 egress bandwidth markups. You pay Cloudflare directly with zero middleman markup from us.",
  },
  {
    q: "What ongoing server and infrastructure costs should I expect?",
    a: "Because the platform is deployed in your private cloud, you pay standard wholesale cloud infrastructure costs directly to your providers (e.g. VPS/database hosting typically $30–$80/mo depending on traffic, plus Cloudflare Stream video usage). We charge $0 recurring platform software fees and take 0% of your sales.",
  },
  {
    q: "How does subscription and video ad monetization work?",
    a: "You can offer monthly or annual VIP streaming subscriptions (via Stripe, Apple App Store, and Google Play Billing) or offer ad-supported free tiers with video ads integrated via Google AdMob and VAST advertising standards.",
  },
  {
    q: "Can we stream both 9:16 vertical short dramas or 16:9 widescreen films on the same platform?",
    a: "Yes. The platform includes a dual-engine player. You can configure shows as vertical short dramas (which launch into the 60FPS vertical swipe viewer) or as widescreen movies and series (which launch into the 16:9 cinematic player).",
  },
  {
    q: "Do you take any percentage cut of our subscriptions or ad earnings?",
    a: "Zero. We take 0% commission. Payment processors (Stripe, Apple In-App Purchase, Google Play Billing) and ad networks deposit 100% of your revenue directly into your account.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes. All our tiers include full Git source code rights without obfuscation or encrypted binaries, so your team has total independence.",
  },
];
