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
    id: "turnkey-setup",
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
