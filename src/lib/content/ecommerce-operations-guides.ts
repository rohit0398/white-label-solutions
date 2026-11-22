import type { CommerceGuide } from "@/lib/content/ecommerce-guides";
import { ECOMMERCE_PATHS } from "@/lib/solution-paths";

export const ECOMMERCE_OPERATIONS_GUIDES = {
  migration: {
    slug: "move-to-white-label-ecommerce-platform",
    title: "Moving an Online Store to a White-Label E-Commerce Platform",
    seoTitle: "E-Commerce Platform Migration: Catalog, Orders & SEO",
    description: "Plan an e-commerce platform migration around products, customer access, orders, payments, and SEO. Use a staged checklist before switching the live store.",
    intro: "An existing store has more to move than its product photos. Customers may be waiting for orders, old product links may bring search traffic, and stock can change while the new store is being prepared. A good migration plan protects those everyday tasks while giving the new platform a clear scope.",
    datePublished: "2026-11-22",
    dateModified: "2026-11-22",
    showLiveExamples: true,
    image: {
      src: "/showcase/commerce-storefront.webp",
      alt: "Mechatron Lab electronics storefront with product categories and catalog cards",
      section: "catalog-mapping",
      example: { href: "https://mechatronlab.com", label: "Browse the live Mechatron Lab store" },
    },
    offer: { href: ECOMMERCE_PATHS.platform, label: "Explore the white-label e-commerce platform", tierId: "launch" },
    sections: [
      {
        id: "choose-the-move", title: "Define what the new platform needs to change",
        paragraphs: [
          "Write down why the business is moving. It might need shopping apps, stock across several warehouses, control over integrations, or a different operating arrangement. Compare those requirements with the existing store before choosing software. Moving a standard store to your own cloud also gives the team responsibility for infrastructure, monitoring, backups, and future updates.",
          "Separate a white-label launch from a custom migration. The standard software can already exist while importing a particular catalog, preserving order history, or connecting an ERP still needs additional work. Bring sample exports and a list of current extensions to the first walkthrough. Ask which pieces fit the base package and which require a separate quote.",
        ],
        bullets: ["What problem should the move solve?", "Which website and app features must work on day one?", "Which external systems own products, stock, customers, and accounting?", "Who will operate the store after handover?"],
      },
      {
        id: "catalog-mapping", title: "Map products and variants before importing everything",
        paragraphs: [
          "Use stable product and variant identifiers to map the old catalog to the new one. A size or color variant may need its own SKU, price, image, and inventory record. Treat categories, attributes, tax settings, shipping information, and discontinued items as part of the import rather than loose text to repair later.",
          "Start with a representative sample: a simple product, a product with several variants, an out-of-stock item, a discounted item, and anything with unusual delivery requirements. Compare the source export with the rendered product and admin record. Count variants and stock by location as well as products; matching the headline product count does not prove the import is correct.",
          "Move image references and downloadable product information deliberately. Check that the destination owns or can access the files and that old image URLs are handled where they matter. Keep an untouched source export and record the import rules so a later retry does not create duplicate products.",
        ],
      },
      {
        id: "customers-and-orders", title: "Plan customer access and open orders separately",
        paragraphs: [
          "Customer records, passwords, consent records, and historical orders may have different portability limits. Do not promise that every customer can use an old password until the team has checked the source system and authentication format. A secure account-activation or password-reset process may be the appropriate route.",
          "Choose how to handle open orders, partially shipped orders, refunds, and returns placed before the move. Historical data can remain read-only in an archive while new orders use the new system, or an agreed subset can be imported. Preserve the identifiers your support and accounts teams use to find a purchase. Test that a customer is not sent a second confirmation simply because an old order was imported.",
          "For integrations, agree which system is allowed to update each field. Two systems both writing stock or prices can create loops and stale values. Document the sync direction, failure alerts, and how staff recover a failed update before retiring the old connection.",
        ],
      },
      {
        id: "preserve-search-links", title: "Protect useful product and category URLs",
        paragraphs: [
          "Export the old product and category URLs and identify the pages that receive search visits, links, or campaign traffic. Keep a useful URL where the new system can support it. When it must change, map it to the corresponding destination and test the permanent redirect. Avoid sending every removed product to the homepage; the destination should serve the same purpose where one exists.",
          "Check the new pages' canonical URLs, titles, product information, and navigation. Publish links from categories to products instead of relying only on a search box. Review the sitemap and remove staging restrictions from the intended public pages when launching. Keep unavailable staging copies out of the public index.",
          "Google advises planning URL changes carefully and monitoring the old and new pages. Search visibility can fluctuate during recrawling, so a migration cannot honestly promise unchanged rankings. Record a baseline for important pages and watch Search Console, traffic, redirect errors, and sales after the move. If only the platform changes, do not change the domain and URL structure without a business reason.",
        ],
      },
      {
        id: "test-real-orders", title: "Rehearse checkout, stock changes, and payment recovery",
        paragraphs: [
          "Test a complete physical-goods order on the website and any apps included in the release. Check address entry, shipping cost, payment, order creation, stock allocation, customer messages, dispatch, cancellation, and a refund. Include an interrupted connection and a customer returning to checkout after a successful payment.",
          "Stripe's Checkout guidance explains why fulfillment cannot rely only on the shopper reaching a success page. The store needs a reliable way to receive the payment outcome and prevent a repeated notification from creating duplicate fulfillment. Apply equivalent tests to the payment provider you actually use, including cash on delivery if that is part of the business.",
          "Compare expected totals with the order and provider records. A successful test in the payment provider does not establish that the inventory, invoice, and shipping systems agree. Let the operations team run the rehearsal rather than checking only the storefront appearance.",
        ],
      },
      {
        id: "cutover-and-monitoring", title: "Assign the final switch and the recovery plan",
        paragraphs: [
          "Choose a quieter trading period and assign owners for the domain, imports, payment settings, stock reconciliation, and customer support. Capture the final changes since the rehearsal so orders and stock are not lost between exports. Decide when the old checkout stops accepting new orders and where staff should handle outstanding ones.",
          "Define the conditions that would pause the move or require recovery. Restoring an old site does not automatically undo orders and payments already accepted by the new one, so the recovery plan needs transaction reconciliation as well as a backup. Keep the old records available for the agreed period and investigate the first real orders promptly.",
        ],
      },
    ],
    checklist: [
      { title: "Review a sample export", text: "Map products, variants, images, customer access, and location stock." },
      { title: "Map important links", text: "Preserve useful URLs or test redirects to the equivalent product and category pages." },
      { title: "Rehearse an order", text: "Verify payment, inventory, shipping, cancellation, and refund behavior." },
      { title: "Own the live switch", text: "Assign the final sync, checkout change, monitoring, and transaction recovery." },
    ],
    links: [
      { href: "/blog/multi-warehouse-ecommerce-inventory", label: "Plan inventory across multiple warehouses" },
      { href: "/blog/ecommerce-website-development-cost", label: "Separate launch costs from migration and operating costs" },
      { href: "/compare/shopify-alternative", label: "Compare a hosted store with a private cloud platform" },
      { href: "/case-studies/mechatron-lab", label: "See the electronics storefront case study" },
    ],
    sources: [
      { href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes", label: "Google Search Central: planning and monitoring URL changes" },
      { href: "https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure", label: "Google Search Central: e-commerce navigation and product discovery" },
      { href: "https://docs.stripe.com/checkout/fulfillment?ui=full-page", label: "Stripe: fulfilling payments and handling repeated notifications" },
    ],
  },
  inventory: {
    slug: "multi-warehouse-ecommerce-inventory",
    title: "Multi-Warehouse E-Commerce: Inventory, Orders, and Fulfillment",
    seoTitle: "Multi-Warehouse E-Commerce Inventory & Order Management",
    description: "Plan stock, order routing, transfers, returns, and store/app inventory across multiple warehouses. Use practical tests to evaluate an e-commerce platform.",
    intro: "A product can be in stock somewhere and still be impossible to ship to a particular customer. Once a store uses more than one warehouse, the storefront, payment flow, and dispatch team need to agree on what is available and where each order will be fulfilled. This guide explains the decisions to make before choosing a multi-warehouse e-commerce platform.",
    datePublished: "2026-11-22",
    dateModified: "2026-11-22",
    showLiveExamples: true,
    image: {
      src: "/showcase/commerce-admin.webp",
      alt: "E-commerce reference admin panel for catalog, orders, and store operations",
      section: "one-catalog-location-stock",
      example: { href: "/case-studies/mechatron-lab", label: "Read the multi-warehouse store case study" },
    },
    offer: { href: ECOMMERCE_PATHS.platform, label: "Explore the store, apps, and admin platform", tierId: "launch" },
    sections: [
      {
        id: "one-catalog-location-stock", title: "Use one catalog with stock recorded by location",
        paragraphs: [
          "Keep the identity of the product separate from the places that hold it. A variant should have a stable identifier, while its quantities belong to warehouse records. Otherwise the same product can appear twice in the catalog just because it is stored in two buildings, making prices, photos, and stock harder to maintain.",
          "Our e-commerce offering includes a shared admin panel and multi-warehouse inventory. Use the walkthrough to check how the catalog connects to each location and to the website and shopping apps. If the business already has a warehouse or accounting system, agree whether it remains the stock authority and how the new storefront receives updates.",
          "Established platforms also treat locations and inventory states as separate operational concepts. Shopify's documentation is a useful reference for the questions to ask; it does not mean another platform implements every Shopify workflow. Evaluate the screens and behavior you will actually use.",
        ],
      },
      {
        id: "sellable-and-reserved-stock", title: "Define which stock the customer can buy",
        paragraphs: [
          "Physical stock, reserved stock, and sellable stock answer different questions. Items already committed to orders, damaged returns, and stock still in transit should not be treated as immediately available just because they appear in a total. Define when a checkout reserves a unit and what releases that reservation after failure or expiry.",
          "For example, suppose warehouse A holds 12 units and warehouse B holds seven. If four units at A are committed to orders and two at B cannot be sold, the simple sellable total is 13, not 19. This is a planning example. Delivery restrictions or a safety buffer could reduce what a particular shopper can buy further.",
          "Ask the supplier to show two buyers trying to purchase the last unit, a payment retry, and an order cancellation. The important result is consistent stock and recoverable orders, not a fast-moving stock counter. Reservation timing, overselling prevention, and backorders need explicit acceptance tests for the chosen integration.",
        ],
      },
      {
        id: "routing-decisions", title: "Agree order-routing rules with the dispatch team",
        paragraphs: [
          "The closest warehouse may be a sensible default, but it may not have every item or serve the destination. An order-routing rule must balance available stock, delivery coverage, packing capability, carrier cost, and the promise made at checkout. Shopify documents examples such as reducing split shipments and choosing suitable locations in sequence.",
          "Write down a realistic mixed basket. If warehouse A has a camera and warehouse B has its battery, should the system split the shipment, transfer stock, offer a later date, or decline that delivery promise? Each choice changes shipping charges, customer messages, and the work done by the dispatch team. Advanced routing is a workflow to confirm, not a capability to infer from the phrase multi-warehouse.",
        ],
        bullets: ["Which warehouses can deliver to this address?", "Can one location fulfill the whole order?", "Are split shipments allowed and who pays for them?", "Can an operator override allocation, and is the change recorded?", "What happens when stock changes after allocation?"],
      },
      {
        id: "transfers-and-returns", title: "Track transfers and returns without inventing stock",
        paragraphs: [
          "Moving five units between warehouses should not temporarily turn five units into ten. Define separate dispatch and receipt steps and decide whether in-transit units are sellable. Record the item, quantity, origin, destination, and staff action so a missing carton can be investigated.",
          "A returned order also needs a decision before the units become available again. The return may arrive at a different warehouse, require inspection, or be unsuitable for resale. Separate the customer refund from the warehouse receiving and disposition steps. Ask which controls exist in the standard software and which need additional integration or operating procedures.",
          "Run a periodic stock count and record adjustments with a reason. A system that only overwrites the quantity leaves the team unable to explain why a shelf and a report disagree. Reconcile both the total and the location balances after a transfer, cancellation, and return.",
        ],
      },
      {
        id: "website-and-app-sync", title: "Keep website and app orders on the same rules",
        paragraphs: [
          "A shopping app is another way to buy from the same business, not an excuse to maintain a second stock spreadsheet. Product availability, price, delivery options, and order status should come from agreed shared systems. Define how a temporarily offline device refreshes its basket before the customer pays.",
          "Include provider-confirmed payments in the order workflow. Stripe explains why relying only on the success page is not sufficient for reliable fulfillment. Test the equivalent behavior for the chosen provider, including delayed payment results and duplicate notifications, so the order is neither shipped twice nor lost when the customer closes the app.",
          "If an ERP, marketplace, or warehouse tool also sells the same units, list its update direction and failure behavior. A manual export once per day may fit some businesses but will not produce real-time availability. Be clear about the service the integration actually provides.",
        ],
      },
      {
        id: "evaluate-with-an-order", title: "Evaluate the platform with a difficult order",
        paragraphs: [
          "Bring a small catalog and two warehouse balances to the walkthrough. Place one normal order, one mixed-warehouse basket, and one last-unit purchase. Then cancel an order, receive a transfer, and process a returned item. Ask an operator to explain every quantity change from the records.",
          "A live storefront is useful for seeing the shopper experience, but warehouse rules need a separate admin demonstration. Bring the dispatch and accounts teams into that review. Agree the included workflows, any custom connectors, and who handles discrepancies after launch before choosing a package.",
        ],
      },
    ],
    checklist: [
      { title: "Map products to locations", text: "Use consistent variant identifiers and reconcile the starting balances." },
      { title: "Define sellable stock", text: "Agree reservations, payment expiry, safety stock, and out-of-stock behavior." },
      { title: "Rehearse fulfillment", text: "Test mixed baskets, routing changes, transfers, returns, and duplicate payment results." },
      { title: "Assign reconciliation", text: "Make one team responsible for adjustments, failed syncs, and periodic counts." },
    ],
    links: [
      { href: "/blog/move-to-white-label-ecommerce-platform", label: "Plan an existing store migration" },
      { href: "/blog/ecommerce-app-development", label: "Plan iOS and Android shopping apps" },
      { href: "/blog/ecommerce-website-development-cost", label: "Budget for the platform and its operation" },
      { href: "/case-studies/mechatron-lab", label: "See the Mechatron Lab store case study" },
    ],
    sources: [
      { href: "https://help.shopify.com/en/manual/inventory-and-locations", label: "Shopify: inventory quantities, states, and locations" },
      { href: "https://help.shopify.com/en/manual/fulfillment/setup/order-routing", label: "Shopify: order-routing rules and fulfillment locations" },
      { href: "https://docs.stripe.com/checkout/fulfillment?ui=full-page", label: "Stripe: reliable order fulfillment after checkout" },
    ],
  },
} satisfies Record<string, CommerceGuide>;
