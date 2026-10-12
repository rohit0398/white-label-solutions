import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Layers,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Engineering & Growth Blog | Mechatron Lab",
  description:
    "In-depth engineering guides on software development costs, video streaming platforms, mobile app architecture, and private cloud infrastructure.",
  keywords: [
    "software engineering blog",
    "video streaming architecture",
    "short drama app development",
    "ecommerce website development cost",
    "custom software development guide",
    "private cloud software architecture",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Software Engineering & Growth Blog | Mechatron Lab",
    description:
      "In-depth engineering guides on software development costs, video streaming platforms, mobile app architecture, and private cloud infrastructure.",
    url: "/blog",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering & Growth Blog | Mechatron Lab",
    description:
      "Engineering guides on software development costs, video streaming, and private cloud architecture.",
    images: ["/og-image.png"],
  },
};

export default function BlogIndexPage() {
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
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mechatron Lab E-Commerce Insights & Architecture Blog",
    description:
      "Engineering guides, real cost breakdowns, and technical roadmaps for launching modern e-commerce stores and mobile apps.",
    publisher: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      url: siteUrl,
    },
  };

  const posts = [
    {
      slug: "ecommerce-website-development-cost",
      category: "Pricing & ROI",
      title: "E-Commerce Website Development Cost in 2026: Agency Quotes vs. SaaS Taxes vs. Pre-Built Ownership",
      excerpt:
        "A realistic breakdown of what it actually costs to build, launch, and host an e-commerce platform. Compare traditional $40k–$80k agency quotes, ongoing Shopify fees ($26k+ over 3 years), and pre-built private cloud deployment.",
      readTime: "8 min read",
      date: "October 2026",
      featured: true,
      tags: ["Development Cost", "Shopify ROI", "SaaS Comparison"],
    },
    {
      slug: "ecommerce-website-development",
      category: "Web Engineering",
      title: "Complete Guide to E-Commerce Website Development: Modern Architecture, Gateways & Launch Strategy",
      excerpt:
        "Learn how to build a high-speed online storefront with sub-second page loads, automated multi-rate tax invoices, and multi-warehouse inventory without accumulating legacy technical debt.",
      readTime: "10 min read",
      date: "October 2026",
      featured: false,
      tags: ["Next.js", "Web Development", "Cloud Architecture"],
    },
    {
      slug: "ecommerce-app-development",
      category: "Mobile Apps",
      title: "E-Commerce App Development: How to Launch Native iOS & Android Shopping Apps in 2–4 Weeks",
      excerpt:
        "Over 73% of retail orders occur on smartphones. Discover how to deploy unified Flutter mobile shopping apps under your own developer accounts with free push alerts and zero in-app sales cuts.",
      readTime: "9 min read",
      date: "October 2026",
      featured: false,
      tags: ["Flutter", "iOS & Android", "App Store Publishing"],
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
          __html: JSON.stringify(blogSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header (Centered) */}
          <div className="text-center max-w-3xl mx-auto space-y-4 flex flex-col items-center">
            <nav className="flex items-center justify-center gap-2 text-xs font-mono text-ink-3">
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
              <span>/</span>
              <span className="text-ink">Blog</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              <span>Engineering Guides &amp; Market Insights</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.08] text-ink">
              E-Commerce Architecture, Development Costs &amp; Growth Guides.
            </h1>

            <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto">
              Transparent research, architectural deep dives, and commercial guides to help brand owners and technical founders launch faster without recurring software fees.
            </p>
          </div>

          {/* Posts Grid with Generous Card Width and Polished UI/UX */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
            {posts.map((post) => {
              const icon =
                post.category === "Pricing & ROI" ? (
                  <TrendingUp className="h-3.5 w-3.5 text-accent shrink-0" />
                ) : post.category === "Web Engineering" ? (
                  <Layers className="h-3.5 w-3.5 text-accent shrink-0" />
                ) : (
                  <Smartphone className="h-3.5 w-3.5 text-accent shrink-0" />
                );

              return (
                <article
                  key={post.slug}
                  className="group p-6 sm:p-7 rounded-2xl border border-line bg-wash/40 hover:bg-wash hover:border-ink/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer relative"
                >
                  <div>
                    {/* Top Badge Strip (whitespace-nowrap & shrink-0 ensure reading time and category never cut) */}
                    <div className="flex items-center justify-between gap-3 text-xs font-mono text-ink-3 mb-4">
                      <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-line bg-wash text-ink text-[11px] font-medium">
                        {icon}
                        <span>{post.category}</span>
                      </span>
                      <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 text-xs text-ink-3 font-medium">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Title with full card link */}
                    <h2 className="text-lg sm:text-xl font-semibold text-ink tracking-tight group-hover:text-accent transition-colors leading-snug mb-3">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt with comfortable line-height and generous display */}
                    <p className="text-sm text-ink-2 leading-relaxed mb-5">
                      {post.excerpt}
                    </p>

                    {/* Tags Strip */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-ink-3 px-2 py-0.5 rounded bg-paper border border-line"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-line/60 flex items-center justify-between z-10">
                    <span className="text-xs font-mono text-ink-3">{post.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-accent group-hover:translate-x-1 transition-all">
                      <span>Read guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Solution Cross-Sell Banner (Centered card, content centered, buttons on bottom) */}
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl border border-line bg-wash/50 shadow-xs mt-16 text-center space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-accent/20 bg-accent/10 text-xs font-mono text-accent font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready to Launch?</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink max-w-2xl mx-auto">
              Deploy Your Web Storefront &amp; Native Mobile Apps in 2–4 Weeks
            </h3>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto">
              Skip the 6-month custom development cycle. Get a production-ready Next.js store, Flutter iOS &amp; Android apps, and central operations CRM deployed directly onto your private cloud for a flat one-time fee.
            </p>

            {/* Trust Checklist - Centered */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-3 font-mono pt-2">
              <span className="inline-flex items-center gap-1.5">✓ Private AWS / GCP / Azure deployment</span>
              <span className="inline-flex items-center gap-1.5">✓ Full commercial source code available</span>
              <span className="inline-flex items-center gap-1.5">✓ 0% platform commission</span>
            </div>

            {/* Bottom Buttons - Centered */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
              <DemoButton size="md" />
              <Link
                href="/solutions/ecommerce"
                className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-lg border border-line bg-paper hover:bg-wash hover:border-ink/40 text-ink font-medium text-sm transition-all cursor-pointer active:scale-98"
              >
                <span>View Solution</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
}
