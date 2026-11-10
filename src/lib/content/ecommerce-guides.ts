import type { PackageId } from "@/lib/pricing-catalog";

interface CommerceGuide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  datePublished: string;
  image: { src: string; alt: string; section: string; example: { href: string; label: string } };
  offer: { href: string; label: string; tierId: PackageId };
  sections: { id: string; title: string; paragraphs: string[]; bullets?: string[] }[];
  checklist: { title: string; text: string }[];
  links: { href: string; label: string }[];
  sources?: { href: string; label: string }[];
}

export const ECOMMERCE_GUIDES = {
  website: {
    slug: "ecommerce-website-development",
    title: "How to Plan an E-Commerce Website Launch",
    description: "Plan your online store around product pages, payments, stock, fulfillment, and launch tests. See when a hosted store or a custom storefront makes sense.",
    intro: "Start with one complete order. A buyer should be able to find the right product, see the shipping cost, pay, and receive a confirmation. Your team should be able to fulfill, cancel, and refund that same order.",
    datePublished: "2026-10-02",
    image: {
      src: "/showcase/commerce-storefront.webp",
      alt: "Mechatron Lab online store with product categories and electronics listings",
      section: "catalog",
      example: { href: "/solutions/ecommerce-website-development#work", label: "Browse the live storefront examples" },
    },
    offer: { href: "/solutions/ecommerce-website-development", label: "Explore e-commerce website development", tierId: "web-launch" },
    sections: [
      { id: "platform", title: "Choose a store model", paragraphs: ["A hosted platform can work well if its themes, checkout, and fulfillment tools meet your needs. A storefront deployed in your own cloud can give you more control over integrations and how the store works. Plan who will handle monitoring, backups, and software updates.", "Write down the workflows that would justify custom work. Examples include quoting for wholesale buyers, stock across multiple warehouses, or a checkout that connects to an existing order system."] },
      { id: "catalog", title: "Design the catalog around how people shop", paragraphs: ["Use categories and filters customers understand. Give each product a clear name, useful images, price, availability, and shipping details. For products with variants, show what changes when the buyer chooses a size, color, or model.", "Link category pages to products through normal navigation so visitors and search engines can reach them. Keep displayed prices and stock consistent with any Product structured data you publish."] },
      { id: "checkout", title: "Test checkout and fulfillment together", paragraphs: ["Decide which payment methods, delivery zones, and invoice requirements apply. Test checkout on a real phone and verify the matching order in the admin panel."], bullets: ["Make shipping charges clear before payment.", "Check what happens when a payment fails or the buyer retries.", "Place a test order, reserve stock, dispatch it, and verify cancellation and refund handling."] },
    ],
    checklist: [
      { title: "Prepare the catalog", text: "Gather products, variants, photos, prices, and starting stock." },
      { title: "Set up checkout", text: "Confirm payments, delivery, invoices, and the return policy." },
      { title: "Run test orders", text: "Verify payment, stock updates, emails, and refunds." },
      { title: "Publish and monitor", text: "Check the live domain, order alerts, and the first transactions." },
    ],
    links: [{ href: "/blog/ecommerce-website-development-cost", label: "Compare website development costs" }, { href: "/case-studies/mechatron-lab", label: "See the electronics storefront case study" }],
    sources: [{ href: "https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure", label: "Google’s guide to e-commerce site structure" }, { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "Google’s Product structured data guidance" }],
  },
  app: {
    slug: "ecommerce-app-development",
    title: "How to Plan an E-Commerce App Launch",
    description: "Plan iOS and Android shopping apps around repeat orders, catalog sync, physical goods checkout, device testing, and app store review.",
    intro: "A shopping app makes sense when it gives people a reason to return, such as quick reordering, saved products, or delivery updates. Start by deciding what repeat customers should be able to do faster.",
    datePublished: "2026-10-03",
    image: {
      src: "/showcase/commerce-app-checkout.webp",
      alt: "Checkout screen from the Mechatron Lab Android app",
      section: "payments",
      example: { href: "/solutions/ecommerce-app-development#work", label: "Find the live Android app listings" },
    },
    offer: { href: "/solutions/ecommerce-app-development", label: "Explore e-commerce app development", tierId: "app-launch" },
    sections: [
      { id: "scope", title: "Decide what the app adds", paragraphs: ["Your website can remain the entry point for shoppers arriving through search or shared links. An app can make repeat purchases and order tracking easier. Compare those benefits with the cost of maintaining and testing another customer channel.", "Confirm which system owns products, prices, accounts, and inventory. If the app connects to an existing store, review its APIs and work through how orders, refunds, and stock changes will sync."] },
      { id: "payments", title: "Choose checkout for physical goods", paragraphs: ["Apple and Google distinguish physical goods from digital purchases. For physical products, use an appropriate merchant checkout and review the current store rules. Payment providers can still charge processing fees.", "Test failed payments, duplicate taps, and confirmation after the buyer returns to the app. Make sure an uncertain payment status has a clear recovery path." ] },
      { id: "publishing", title: "Prepare your store submissions", paragraphs: ["Set up developer accounts under your business. Prepare the listings, privacy information, screenshots, support details, and any test access reviewers need.", "Plan time for Apple and Google to review the apps after submission. Test checkout, order notifications, sign-in, and account changes on both platforms before you submit."] },
    ],
    checklist: [
      { title: "Choose a repeat purchase flow", text: "Identify the main task shoppers should complete in the app." },
      { title: "Connect products and orders", text: "Confirm where prices, inventory, and customer orders are managed." },
      { title: "Test on iOS and Android", text: "Check real orders, returns, and payment recovery on both platforms." },
      { title: "Submit and review", text: "Submit under your developer accounts and respond to review feedback." },
    ],
    links: [{ href: "/blog/ecommerce-website-development", label: "Plan the web storefront" }, { href: "/case-studies/mechatron-lab", label: "See a live shopping app case study" }],
    sources: [{ href: "https://developer.apple.com/app-store/review/guidelines/#goods-and-services-outside-of-the-app", label: "Apple App Store Review Guidelines" }, { href: "https://support.google.com/googleplay/android-developer/answer/9858738?hl=en", label: "Google Play payments policy" }],
  },
  cost: {
    slug: "ecommerce-website-development-cost",
    title: "E-Commerce Website Development Cost and Ongoing Fees",
    description: "Compare store setup, hosting, payment fees, support, and source code licensing. See published prices for the website, shopping apps, and complete platform.",
    intro: "The build price is one part of your store budget. Compare the same deliverables across proposals, then add the costs of operating the store after launch.",
    datePublished: "2026-10-01",
    image: {
      src: "/showcase/commerce-marketplace.webp",
      alt: "eStoreAlley online marketplace storefront",
      section: "scope",
      example: { href: "/case-studies/estorealley", label: "See the wholesale and retail marketplace case study" },
    },
    offer: { href: "/solutions/ecommerce#pricing", label: "View e-commerce platform pricing", tierId: "launch" },
    sections: [
      { id: "scope", title: "Compare like-for-like launch scope", paragraphs: ["A storefront, shopping apps, and a complete store with central inventory cover different jobs. List the launch channels, product count, payment methods, warehouses, and integrations before comparing prices.", "A hosted store may be a practical starting point for standard workflows. A private cloud deployment can fit teams that want more control over integrations and operations. A custom build may make sense if your workflows fall outside an existing package."] },
      { id: "running-costs", title: "Budget for monthly operating costs", paragraphs: ["Include hosting, monitoring, backups, support, and payment processing. For a hosted store, check the subscription, paid extensions, and any third-party transaction fees for your plan, country, and payment setup.", "Build a 12-month estimate by adding setup and optional licenses to recurring costs, then model payment fees using your expected order volume. Ask what happens to the bill when order volume, catalog size, or support needs change."] },
      { id: "source-code", title: "Price the source code license separately", paragraphs: ["Our launch fee covers deployment for the selected package. The commercial source code license is an optional add-on. Ask which repositories, setup documentation, and rights the license covers. Confirm who manages backups and future releases."] },
    ],
    checklist: [
      { title: "List launch requirements", text: "Specify storefront, apps, warehouses, payments, and integrations." },
      { title: "Separate one-time costs", text: "Compare setup, migration, custom work, and optional source licensing." },
      { title: "Estimate ongoing costs", text: "Include hosting, processing fees, support, and subscriptions." },
      { title: "Check the proposal", text: "Confirm acceptance tests, ownership, and who operates the store." },
    ],
    links: [{ href: "/compare/shopify-alternative", label: "Compare Shopify with a private cloud store" }, { href: "/blog/ecommerce-website-development", label: "Read the store launch guide" }],
    sources: [{ href: "https://www.shopify.com/pricing", label: "Shopify plan pricing" }, { href: "https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees", label: "Shopify third-party transaction fees" }],
  },
} satisfies Record<string, CommerceGuide>;

export type EcommerceGuideKey = keyof typeof ECOMMERCE_GUIDES;
export const ECOMMERCE_GUIDE_UPDATED = "2026-11-10";
