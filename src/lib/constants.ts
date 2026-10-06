import { ShowcaseProject, PricingTier, AdminFeature, BrandTheme } from "@/types";

export const BRAND = {
  name: "Mechatron Lab Solutions",
  parentCompany: "Mechatron Lab",
  tagline: "Pre-Built White-Label E-Commerce Platform",
  heroTitle: "Own Your Complete Online Store, Mobile Apps & Admin CRM",
  heroSubtitle:
    "A pre-built, easily configured e-commerce solution deployed directly onto your private cloud (AWS, Google Cloud, or Azure). You own 100% of your customer data, servers, and source code. Keep every dollar of your sales with zero platform cuts.",
  subdomains: {
    solutions: "https://solutions.mechatronlab.com",
    express: "https://express.mechatronlab.com",
    whitelabel: "https://white-label-solution.mechatronlab.com",
  },
  contact: {
    email: "contact@mechatronlab.com",
    whatsapp: "+919887998663",
    whatsappUrl: "https://wa.me/919887998663?text=Hi%20Mechatron%20Lab%2C%20I%20am%20interested%20in%20your%20White-Label%20E-Commerce%20Solution.",
  },
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "turnkey-setup",
    name: "Turnkey Launch Package",
    tagline: "Pre-built, customized with your branding, and deployed directly onto your cloud in 14 to 21 days.",
    badge: "Most Popular",
    isPopular: true,
    prices: {
      USD: { amount: 4999, period: "one-time setup" },
      EUR: { amount: 4599, period: "one-time setup" },
      GBP: { amount: 3999, period: "one-time setup" },
      INR: { amount: 399000, period: "one-time setup" },
    },
    deliverables: [
      "Custom Branded Online Store (High-speed web storefront)",
      "Ready-to-Publish Mobile Apps for Android (Play Store) & iPhone (App Store)",
      "All-in-One E-Commerce Admin Panel & Customer CRM",
      "Multi-Warehouse Inventory & Automatic Dispatch Workflow",
      "Direct Deployment to your private AWS, Google Cloud, or Azure account",
      "Payment Gateways: Stripe, PayPal, Razorpay, Cashfree, UPI & Cash on Delivery (COD)",
      "Automated Tax Invoicing (GST with 18% breakdowns, EU VAT, or US Sales Tax)",
      "30 Days of Dedicated Post-Launch Support & Technical Handover",
    ],
    specs: [
      { label: "Deployment", value: "On Your Cloud" },
      { label: "Platform Cut", value: "0% (Zero Fees)" },
      { label: "Launch Time", value: "2–3 Weeks" },
    ],
    ctaText: "Schedule Technical Demo",
  },
  {
    id: "source-code-license",
    name: "Full Source Code & IP License",
    tagline: "100% full source code ownership with unrestricted commercial rights. Host anywhere, customize forever.",
    badge: "Full Ownership",
    prices: {
      USD: { amount: 1999, period: "add-on license" },
      EUR: { amount: 1849, period: "add-on license" },
      GBP: { amount: 1599, period: "add-on license" },
      INR: { amount: 149000, period: "add-on license" },
    },
    deliverables: [
      "100% Full, Clean Source Code (No encrypted files, no locks)",
      "Complete Web Storefront Codebase (Next.js & React)",
      "Cross-Platform Mobile Apps Codebase (Flutter for iOS & Android)",
      "Complete Server Backend & Secure Database (Node.js & MongoDB / Firebase)",
      "Complete Admin Panel & CRM Codebase",
      "Full Database Architecture & Deployment Documentation",
      "Perpetual Commercial Rights (Customize, host, or resell to your own clients)",
      "Zero Monthly License Fees — Run it on your servers forever",
    ],
    specs: [
      { label: "Code Access", value: "Full Git Repos" },
      { label: "License Rights", value: "100% Perpetual" },
      { label: "Vendor Lock-in", value: "Zero (None)" },
    ],
    ctaText: "Get Source Code License",
  },
  {
    id: "dedicated-support",
    name: "Dedicated Developer Support",
    tagline: "Experienced full-stack engineers to build custom integrations, sync your ERP, or add bespoke features.",
    badge: "Flexible Retainer",
    prices: {
      USD: { amount: 20, period: "per hour / dev" },
      EUR: { amount: 19, period: "per hour / dev" },
      GBP: { amount: 16, period: "per hour / dev" },
      INR: { amount: 1500, period: "per hour / dev" },
    },
    deliverables: [
      "Senior Full-Stack Developer assigned to your project",
      "Custom ERP, Accounting & Warehouse (WMS) Integrations",
      "Bespoke B2B Wholesale Pricing, Quotation & Checkout Logic",
      "Ongoing Server Optimization, Cloud Backups & Security Updates",
      "Direct Communication Channel via Slack, Microsoft Teams, or WhatsApp",
      "Available on flexible hourly blocks or dedicated monthly retainers",
    ],
    specs: [
      { label: "Rate", value: "$20 / hr" },
      { label: "Billing", value: "Timesheet / Block" },
      { label: "SLA Response", value: "< 4 Hours" },
    ],
    ctaText: "Hire Dedicated Engineers",
  },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "mechatron-lab",
    title: "Mechatron Lab",
    tagline: "Industrial Robotics, Technical Spares & DIY Project Kits",
    industry: "Hardware, Electronics & Robotics",
    description:
      "A high-volume technical store offering 1,000+ hardware components, DIY car & drone kits, an AI shopping assistant, real-time GST pricing, and a native Android app.",
    url: "https://mechatronlab.com",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN",
    badge: "Active Client Store",
    accentColor: "from-blue-600 to-cyan-500",
    screenshotUrl: "/showcase/mechatron-store.png",
    metrics: [
      { label: "Products Listed", value: "1,000+ SKUs" },
      { label: "Real Sessions", value: "5,000+" },
      { label: "App Installs", value: "500+" },
      { label: "Warehouses", value: "Multi-Hub" },
    ],
    features: [
      "AI Shopping Assistant to help buyers find technical parts",
      "Configurable DIY Project Kit product builder",
      "GST compliant tax calculation breakdown (base + 18%)",
      "Android mobile app synchronized with live warehouse inventory",
    ],
    techTags: ["Next.js", "Flutter", "Firebase", "MongoDB", "GCP"],
  },
  {
    id: "estore-alley",
    title: "eStoreAlley",
    tagline: "Retail & Wholesale E-Commerce Directory & Marketplace",
    industry: "Multi-Vendor & Directory",
    description:
      "An international marketplace directory connecting retail and wholesale merchants with buyers. Includes multi-store vendor listings, global Stripe checkout, verified business profiles, and a dedicated mobile app on Google Play.",
    url: "https://estorealley.web.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.estorealley.app&hl=en_IN",
    badge: "Active Client Store",
    accentColor: "from-emerald-500 to-teal-400",
    screenshotUrl: "/showcase/estorealley-store.png",
    metrics: [
      { label: "Platform Type", value: "Multi-Store" },
      { label: "Global Gateway", value: "Stripe v3" },
      { label: "Sales Channels", value: "B2B + B2C" },
      { label: "Google Play App", value: "Live" },
    ],
    features: [
      "Tiered pricing visibility for retail shoppers vs wholesale buyers",
      "Global multi-currency payment processing via Stripe",
      "Cross-border shipping options and verified merchant profiles",
      "Dedicated mobile marketplace app on Google Play",
    ],
    techTags: ["Next.js", "Flutter", "Firebase", "Stripe API"],
  },
  {
    id: "style-gear",
    title: "Style Gear",
    tagline: "Contemporary D2C Lifestyle & Apparel Storefront",
    industry: "Fashion & Lifestyle",
    description:
      "A polished, fast-loading apparel store crafted for the modern online shopper. Features high-resolution imagery, instant size and color variant selectors, and lightning-fast mobile checkout.",
    url: "https://stylegear.co.in",
    badge: "Active Client Store",
    accentColor: "from-rose-500 to-amber-500",
    screenshotUrl: "/showcase/stylegear-store.png",
    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Mobile Shoppers", value: "85%" },
      { label: "Checkout Rate", value: "4.2%" },
      { label: "Apps Ready", value: "iOS + Android" },
    ],
    features: [
      "Instant variant switching for sizes, colors, and cuts",
      "High-resolution product lookbook and image zoom",
      "One-click UPI, Cards, and Express Checkout",
      "Instagram & WhatsApp direct customer ordering",
    ],
    techTags: ["Next.js", "Tailwind CSS", "Flutter", "Stripe / UPI"],
  },
];

export const ADMIN_FEATURES: AdminFeature[] = [
  {
    id: "multi-warehouse",
    title: "Multi-Store & Warehouse Stock Management",
    subtitle: "Manage inventory across multiple cities and fulfillment centers in one dashboard.",
    icon: "Building2",
    description:
      "Easily track exact physical stock across all your store locations, regional warehouses, or fulfillment centers. When an order arrives, the system routes dispatch to the closest warehouse with available stock to cut shipping times and delivery costs.",
    keyCapabilities: [
      "Location-specific inventory counts for every product and variant",
      "Automatic order dispatch routing based on customer postal / zip code",
      "Separate staff access permissions for individual warehouse managers",
    ],
    auditProof: "Tested and proven in active client stores managing inventory across multiple regional hubs.",
  },
  {
    id: "demand-forecasting",
    title: "Smart Stock Alerts & Reorder Reminders",
    subtitle: "Never lose a sale to an out-of-stock best-seller again.",
    icon: "TrendingUp",
    description:
      "The system monitors your daily sales pace and calculates exactly how many 'Days of Stock' you have left for every product. Visual badges alert you when stock is 'Healthy' or 'Needs Reorder' well before your shelves run empty.",
    keyCapabilities: [
      "Automatic sales velocity tracking over 7, 30, 90, and 365 days",
      "Clear visual warnings when inventory drops below your safe threshold",
      "Detailed category-level sales revenue and unit breakdown",
    ],
    auditProof: "Verified tracking 3,000+ units across 200+ products with automatic reorder warning thresholds.",
  },
  {
    id: "profit-margin-engine",
    title: "Live Profit & Margin Tracking per Order",
    subtitle: "See your real profit on every sale after product costs and shipping.",
    icon: "DollarSign",
    description:
      "Most e-commerce platforms only show top-line revenue without factoring in what you paid your suppliers. Our admin panel matches your purchase invoice costs directly against each sale, calculating your exact gross margin and net profit in real time.",
    keyCapabilities: [
      "Record supplier purchase costs against every product SKU",
      "Instant gross profit % and net margin calculations on every invoice",
      "Customer credit ledger and pending payment collection tracking",
    ],
    auditProof: "Proven in active client stores tracking invoice sales against supplier costs with instant margin reports.",
  },
  {
    id: "visual-dashboard-builder",
    title: "Drag-and-Drop Homepage & Layout Customizer",
    subtitle: "Update store banners, featured collections, and sale strips with zero coding.",
    icon: "LayoutGrid",
    description:
      "Give your marketing team full freedom. Change your homepage banners, promotional announcement strips, featured product rows, or holiday sales with simple visual toggles—independently for desktop and mobile viewports.",
    keyCapabilities: [
      "Independent layout controls for Desktop and Mobile shopping views",
      "Pre-built layout blocks: Hero Banners, Product Shelves, Promo Strips, Image Carousels",
      "Instant visual preview with zero code changes or redeployments needed",
    ],
    auditProof: "Active in live client stores driving dynamic homepage layout tiles across desktop and mobile screens.",
  },
  {
    id: "omnichannel-orders",
    title: "Complete Order Processing & Customer CRM",
    subtitle: "Manage web, mobile app, phone, COD, and wholesale orders in one clean pipeline.",
    icon: "ShoppingBag",
    description:
      "Track every customer order through a simple, organized workflow: Placed → Accepted → Dispatched → Delivered. Create phone orders on behalf of customers, generate shareable cart links for social sales, and manage wholesale dealer discounts.",
    keyCapabilities: [
      "Accept Cash on Delivery (COD), UPI, Cards, Bank Transfer, and Store Pickup",
      "Shareable cart links for WhatsApp and social media customer inquiries",
      "B2B wholesale customer accounts with custom pricing and credit limits",
    ],
    auditProof: "Active order processing pipeline handling multi-channel payments, automated shipping labels, and customer histories.",
  },
];

export const BRAND_THEMES: BrandTheme[] = [
  {
    id: "robotics-tech",
    name: "Electronics, Tools & Hardware",
    industryName: "Hardware, Electronics & Robotics",
    primaryColor: "#0284c7",
    secondaryColor: "#0f172a",
    accentGradient: "from-sky-500 via-blue-600 to-indigo-700",
    storeName: "Modern Hardware Store",
    heroHeadline: "Precision Sensors, Drone Kits & IoT Modules",
    sampleProduct: {
      name: "Line Follower Robot Kit with Arduino Controller",
      category: "DIY Project Kits",
      price: "$24.50",
      rating: "4.9 ★ (120+ orders)",
    },
  },
  {
    id: "marketplace-directory",
    name: "eStoreAlley Wholesale & Marketplace",
    industryName: "Wholesale & Multi-Vendor Directory",
    primaryColor: "#059669",
    secondaryColor: "#064e3b",
    accentGradient: "from-emerald-500 via-teal-600 to-cyan-700",
    storeName: "eStoreAlley Directory & Market",
    heroHeadline: "Verified Wholesale Manufacturers & Global Directory",
    sampleProduct: {
      name: "Bulk Order: 50x Smart Bluetooth Transceivers",
      category: "Wholesale Electronics",
      price: "$299.00",
      rating: "5.0 ★ (Verified Supplier)",
    },
  },
  {
    id: "fashion-apparel",
    name: "Fashion, Apparel & D2C Brands",
    industryName: "D2C Fashion & Apparel",
    primaryColor: "#e11d48",
    secondaryColor: "#18181b",
    accentGradient: "from-rose-500 via-pink-600 to-amber-500",
    storeName: "Style Streetwear Store",
    heroHeadline: "Contemporary Urban Apparel & Everyday Essentials",
    sampleProduct: {
      name: "Waterproof Techwear Parka - Obsidian Edition",
      category: "Outerwear & Jackets",
      price: "$89.00",
      rating: "4.8 ★ (340+ orders)",
    },
  },
  {
    id: "artisan-gourmet",
    name: "Specialty Food, Grocery & Retail",
    industryName: "Specialty Food, Coffee & Retail",
    primaryColor: "#d97706",
    secondaryColor: "#292524",
    accentGradient: "from-amber-500 via-orange-600 to-yellow-500",
    storeName: "Artisan Coffee Roastery",
    heroHeadline: "Fresh Roasted Single-Origin Specialty Coffee",
    sampleProduct: {
      name: "Monsooned Malabar Arabica - Whole Bean 500g",
      category: "Specialty Roast",
      price: "$18.00",
      rating: "4.9 ★ (500+ subscribers)",
    },
  },
];
