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

export const OTT_PRICING_TIERS: PricingTier[] = [
  {
    id: "ott-streaming",
    name: "Launch",
    tagline: "Apps, web streaming portal and Video CMS, branded and deployed to your cloud in 2–4 weeks.",
    isPopular: true,
    prices: {
      USD: { amount: 4999, period: "one-time" },
      EUR: { amount: 4599, period: "one-time" },
      GBP: { amount: 3999, period: "one-time" },
      INR: { amount: 399000, period: "one-time" },
    },
    deliverables: [
      "9:16 vertical drama reels or 16:9 cinematic video player engines",
      "Android and iOS Flutter apps, published under your developer accounts",
      "Next.js responsive web streaming portal & series catalog",
      "Video CMS with retention analytics and automated transcoding pipeline",
      "SVOD subscriptions (Apple StoreKit, Google Play Billing & Stripe)",
      "Video Ads (AVOD) integration via Google AdMob & VAST standards",
      "Deployment to your Cloudflare Stream & AWS accounts",
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
      "Mobile apps (Flutter), web portal (Next.js), Video CMS & backend",
      "Unencrypted Git repositories with architecture documentation",
      "Cloudflare Stream & AWS encoding pipeline scripts",
      "Perpetual commercial licence, zero recurring software fees",
    ],
    ctaText: "Ask about the licence",
  },
  {
    id: "dedicated-support",
    name: "Developer time",
    tagline: "Engineers for Smart TV apps, custom DRM or custom feature builds.",
    prices: {
      USD: { amount: 20, period: "per hour" },
      EUR: { amount: 19, period: "per hour" },
      GBP: { amount: 16, period: "per hour" },
      INR: { amount: 1500, period: "per hour" },
    },
    deliverables: [
      "Smart TV apps (Android TV, Apple TV, FireTV)",
      "Custom DRM (Google Widevine & Apple FairPlay) integration",
      "Custom payment gateways, local ad networks & CRM sync",
      "Hourly blocks or a dedicated monthly developer retainer",
    ],
    ctaText: "Talk to us",
  },
];

export const OTT_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "alright",
    title: "Alright",
    industry: "Short Video Series & Comedy Entertainment",
    description:
      "Episodic short series and comedy entertainment application with millions of active Android viewers. Low-latency video caching and fast vertical browsing.",
    url: "https://play.google.com/store/apps/details?id=com.app.alright&hl=en_IN",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.alright&hl=en_IN",
  },
  {
    id: "plus305",
    title: "305+ TV Network",
    industry: "Live TV Channels & Video on Demand",
    description:
      "24/7 linear live TV broadcast stream and on-demand video catalogue. Cross-platform responsive playback with adaptive multi-bitrate HLS streaming.",
    url: "http://play.google.com/store/apps/details?id=tv.network.plus305&hl=en_IN",
    playStoreUrl: "http://play.google.com/store/apps/details?id=tv.network.plus305&hl=en_IN",
  },
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
