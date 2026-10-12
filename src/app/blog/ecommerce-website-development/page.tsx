import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { BRAND } from "@/lib/constants";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Code2,
  Layers,
  Zap,
  ShieldCheck,
  Server,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Store,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development Guide 2026 | Mechatron Lab",
  description:
    "Learn how to build a high-speed e-commerce website with sub-second page loads, automated tax invoicing, and multi-warehouse inventory with zero SaaS fees.",
  keywords: [
    "ecommerce website development",
    "build ecommerce website",
    "ecommerce web development guide",
    "custom ecommerce website development",
    "nextjs ecommerce architecture",
    "self hosted ecommerce platform",
  ],
  alternates: {
    canonical: "/blog/ecommerce-website-development",
  },
  openGraph: {
    title: "E-Commerce Website Development Guide 2026",
    description:
      "Learn how to build a high-speed e-commerce website with sub-second page loads, automated tax invoicing, and multi-warehouse inventory with zero SaaS fees.",
    url: "/blog/ecommerce-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "article",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Development Guide 2026 | Mechatron Lab",
    description:
      "Learn how to build a high-speed e-commerce website with sub-second page loads and zero SaaS fees.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceWebDevBlogPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "E-Commerce Website Development",
        item: `${siteUrl}/blog/ecommerce-website-development`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: `${siteUrl}/blog/ecommerce-website-development`,
    headline: "Complete Guide to E-Commerce Website Development: Modern Architecture, Gateways & Launch Strategy",
    description:
      "A strategic roadmap for building high-converting, self-hosted e-commerce websites with Next.js, Flutter, and PostgreSQL.",
    image: [`${siteUrl}/og-image.png`],
    author: {
      "@type": "Organization",
      name: "Mechatron Lab Engineering Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/logo_icon.svg`,
      },
    },
    datePublished: "2026-10-02",
    dateModified: "2026-10-11",
  };

  const architecturalPillars = [
    {
      title: "Sub-Second Next.js Storefront",
      desc: "Server-side rendering (SSR) and React Server Components deliver Core Web Vitals with under 0.9s load times, boosting Google SEO rankings and mobile conversion rates.",
      icon: Zap,
    },
    {
      title: "Multi-Currency & Regional Gateways",
      desc: "Direct integration with Stripe, PayPal, Apple Pay, Google Pay, Razorpay, Cashfree, UPI, and Cash on Delivery with zero middleman commission markups.",
      icon: ShieldCheck,
    },
    {
      title: "ACID PostgreSQL Relational Inventory",
      desc: "Robust relational data integrity prevents overselling across multiple warehouses and synchronizes web and mobile orders in real time.",
      icon: Server,
    },
    {
      title: "Automated Tax Compliance",
      desc: "Built-in invoicing engines generate accurate GST, European Union VAT, or US state sales-tax invoices for every order automatically.",
      icon: Layers,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-14 sm:py-20">
        <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Header */}
          <div className="space-y-6 border-b border-line pb-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-ink">Blog</Link>
              <span>/</span>
              <span className="text-ink">E-Commerce Website Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <Code2 className="h-3.5 w-3.5 text-accent" />
              <span>Engineering Guide &amp; Best Practices</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-[1.12]">
              Complete Guide to E-Commerce Website Development: Modern Architecture, Gateways &amp; Launch Strategy
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-ink-3 pt-2">
              <span>By Mechatron Lab Engineering Team</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Updated October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                10 min read
              </span>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="p-6 sm:p-8 rounded-2xl border border-line bg-wash space-y-3">
            <h2 className="text-base font-semibold text-ink flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Key Takeaway</span>
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Modern <strong>e-commerce website development</strong> has evolved past slow, monolithic platforms. Successful brands are moving to lightweight, headless Next.js architectures deployed on private cloud servers (AWS, Google Cloud, Azure). This eliminates recurring platform commissions, provides sub-second load times for Google Core Web Vitals, and guarantees 100% data ownership.
            </p>
          </div>

          {/* Body Prose */}
          <div className="prose prose-neutral max-w-none text-ink-2 space-y-8 leading-relaxed text-base sm:text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                1. Why Traditional E-Commerce Stacks Are Failing Growing Brands
              </h2>
              <p>
                When companies choose to <strong>develop an e-commerce website</strong>, they historically faced an uncomfortable trade-off:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm sm:text-base">
                <li>
                  <strong>Legacy PHP Monoliths (WooCommerce, Magento):</strong> Heavy database queries, frequent plugin security vulnerabilities, and slow page loads exceeding 3.5 seconds.
                </li>
                <li>
                  <strong>Proprietary SaaS Platforms (Shopify, BigCommerce):</strong> Fast setup, but steep transaction taxes (up to 2% GMV cut) and zero source code custody.
                </li>
              </ul>
              <p>
                In 2026, the modern standard is a <strong>decoupled, pre-built Next.js storefront</strong> backed by high-performance relational databases and deployed directly in the client&apos;s own private cloud account.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                2. The Four Pillars of Modern E-Commerce Architecture
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                {architecturalPillars.map((p, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-line bg-paper space-y-2">
                    <div className="h-9 w-9 rounded-lg bg-wash border border-line flex items-center justify-center text-accent mb-2">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                    <p className="text-xs text-ink-2 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                3. B2B vs. D2C: What Your E-Commerce Platform Needs to Support
              </h2>
              <p>
                Many businesses operate a hybrid model selling directly to consumers (D2C) while also supplying wholesale distributors (B2B). Building separate websites for both is inefficient.
              </p>
              <p>
                Your central e-commerce platform should natively support:
              </p>
              <div className="space-y-3 not-prose">
                <div className="p-4 rounded-xl border border-line bg-paper flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Tiered Wholesale Pricing &amp; Minimum Order Quantities (MOQ)</h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Approved business accounts see custom discounted tier pricing upon login, with volume threshold rules applied automatically during checkout.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-line bg-paper flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Multi-Hub Inventory Routing</h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Orders are automatically routed to the nearest regional warehouse with available stock, minimizing shipping transit times and lowering courier costs.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-line bg-paper flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Native Invoicing &amp; Quotation Requests</h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      B2B clients can generate PDF proforma invoices, request custom quotes, and pay via bank transfer or credit terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                4. Why Pre-Built Production Architecture Beats 6-Month Custom Builds
              </h2>
              <p>
                Traditionally, engaging an <strong>ecommerce website development company</strong> meant waiting 4 to 8 months and paying $40,000–$80,000 before generating a single dollar in revenue.
              </p>
              <p>
                With Mechatron Lab&apos;s pre-built architecture:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-sm sm:text-base">
                <li>The core commerce logic, cart, checkout, payment webhooks, and multi-warehouse CRM are already battle-tested.</li>
                <li>Your deployment is configured with your branding, catalog, and custom domain in just <strong>2 to 4 weeks</strong>.</li>
                <li>You receive full source code access and own the deployment 100% on your own private cloud account.</li>
              </ul>
            </section>
          </div>

          {/* Related Architecture Guides (Internal Topic Cluster Linking) */}
          <div className="pt-8 border-t border-line space-y-4">
            <h3 className="text-lg font-semibold text-ink">
              Related E-Commerce Architecture Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/ecommerce-website-development-cost"
                className="group p-5 rounded-xl border border-line bg-wash/50 hover:bg-wash hover:border-ink/40 transition-all block"
              >
                <span className="text-[11px] font-mono text-accent font-medium block mb-1">
                  Pricing &amp; ROI · 8 min read
                </span>
                <h4 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                  E-Commerce Website Development Cost in 2026: Agency Quotes vs. SaaS Taxes vs. Pre-Built
                </h4>
                <p className="text-xs text-ink-3 mt-2 line-clamp-2">
                  Compare traditional $40k–$80k agency quotes, ongoing Shopify fees ($26k+), and pre-built ownership.
                </p>
              </Link>
              <Link
                href="/blog/ecommerce-app-development"
                className="group p-5 rounded-xl border border-line bg-wash/50 hover:bg-wash hover:border-ink/40 transition-all block"
              >
                <span className="text-[11px] font-mono text-accent font-medium block mb-1">
                  Mobile Apps · 9 min read
                </span>
                <h4 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                  E-Commerce App Development: Launch Native iOS &amp; Android Apps in 2–4 Weeks
                </h4>
                <p className="text-xs text-ink-3 mt-2 line-clamp-2">
                  Launch Flutter shopping apps under your developer accounts with 0% platform commission and push notifications.
                </p>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-8 sm:p-10 rounded-3xl border border-line bg-wash space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Get Started
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                Launch Your Custom-Branded Online Store in 2–4 Weeks
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed max-w-2xl">
                Explore our production-ready e-commerce platform package. Web storefront, native Flutter mobile apps, and central operations CRM deployed on your cloud with zero monthly software fees.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <DemoButton size="md" />

              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-sm transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
                <span className="text-xs">↗</span>
              </a>

              <Link
                href="/solutions/ecommerce"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-80"
              >
                <span>Explore Full Store Architecture</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
