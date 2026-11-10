import { ECOMMERCE_GUIDES } from "@/lib/content/ecommerce-guides";
import { DRAMA_ARTICLES } from "@/lib/content/short-drama-articles";
import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import { Sparkles, ChevronRight } from "lucide-react";

import { BlogGrid, BlogPost } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Engineering & Architecture Blog | E-Commerce, Short Drama & OTT | Mechatron Lab",
  description:
    "Engineering guides on vertical short drama apps, adaptive OTT video streaming, e-commerce development costs, and private cloud architecture.",
  keywords: [
    "software engineering blog",
    "video streaming architecture",
    "short drama app development",
    "ott video streaming development",
    "ecommerce website development cost",
    "custom software development guide",
    "private cloud software architecture",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering & Architecture Blog | E-Commerce, Short Drama & OTT",
    description:
      "Engineering guides on vertical short drama apps, adaptive OTT video streaming, e-commerce development costs, and private cloud architecture.",
    url: "/blog",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Architecture Blog | E-Commerce, Short Drama & OTT",
    description:
      "Engineering guides on software development costs, vertical short drama, OTT video streaming, and private cloud architecture.",
    images: ["/og-image.png"],
  },
};

export default function BlogIndexPage() {
  const siteUrl = SITE_URL;

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
    name: "Mechatron Lab Software Architecture & Engineering Blog",
    description:
      "Technical blueprints, infrastructure cost comparisons, and engineering guides for launching e-commerce, 9:16 short drama, and cinematic OTT streaming platforms.",
    publisher: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`,
      },
    },
  };

  const posts: BlogPost[] = [
    ...DRAMA_ARTICLES.map((article): BlogPost => ({ slug: article.slug, category: "Short Drama", pillar: "short-drama", title: article.title, excerpt: article.description, readTime: "Launch guide", date: "November 2026", featured: article.slug === "short-drama-app-development", tags: ["Short Drama", "Launch Planning", "Monetization"] })),
    {
      slug: "ott-video-streaming-development",
      category: "OTT Streaming",
      pillar: "ott",
      title: "OTT Streaming Development Guide for Web and Mobile",
      excerpt:
        "Plan an OTT streaming service for web and mobile. Compare adaptive playback, content protection, TV casting, and launch costs.",
      readTime: "12 min read",
      date: "November 2026",
      featured: true,
      tags: ["HLS Streaming", "Widevine DRM", "TV Cast", "Video CMS"],
    },
    {
      slug: ECOMMERCE_GUIDES.cost.slug,
      category: "Pricing & ROI",
      pillar: "ecommerce",
      title: ECOMMERCE_GUIDES.cost.title,
      excerpt: ECOMMERCE_GUIDES.cost.description,
      readTime: "Launch guide",
      date: "November 2026",
      featured: false,
      tags: ["Development Cost", "Source Code", "Hosting"],
    },
    {
      slug: ECOMMERCE_GUIDES.website.slug,
      category: "Web Engineering",
      pillar: "ecommerce",
      title: ECOMMERCE_GUIDES.website.title,
      excerpt: ECOMMERCE_GUIDES.website.description,
      readTime: "Launch guide",
      date: "November 2026",
      featured: false,
      tags: ["Storefront", "Checkout", "Fulfillment"],
    },
    {
      slug: ECOMMERCE_GUIDES.app.slug,
      category: "Mobile Apps",
      pillar: "ecommerce",
      title: ECOMMERCE_GUIDES.app.title,
      excerpt: ECOMMERCE_GUIDES.app.description,
      readTime: "Launch guide",
      date: "November 2026",
      featured: false,
      tags: ["iOS and Android", "Checkout", "App Store Review"],
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

      <main className="flex-1 py-16 sm:pt-12 sm:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header (Centered) */}
          <div className="text-center max-w-3xl mx-auto space-y-4 flex flex-col items-center">
            <nav className="flex items-center justify-center gap-2 text-xs font-mono text-ink-3">
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
              <span>/</span>
              <span className="text-ink">Blog</span>
            </nav>

            <div>
              <HeadingBadge category="default">
                Engineering Guides &amp; Market Insights
              </HeadingBadge>
            </div>

            <AnimatedHeadline
              as="h1"
              className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.08] text-ink"
            >
              Software Architecture, Streaming Engines &amp; Development Costs.
            </AnimatedHeadline>

            <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto">
              Transparent research, architectural deep dives, and commercial guides to help founders launch E-Commerce, 9:16 Short Drama, and 16:9 Cinematic Video platforms without recurring software rent.
            </p>
          </div>

          {/* Interactive Filterable Blog Grid */}
          <BlogGrid posts={posts} />

          {/* Multi-Platform Solution Cross-Sell Banner */}
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl border border-line bg-wash/50 shadow-xs mt-16 text-center space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-accent/20 bg-accent/10 text-xs font-mono text-accent font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Turnkey Private Cloud Foundations</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink max-w-2xl mx-auto">
              Deploy Production-Tested Software to Your Cloud in 2–4 Weeks
            </h3>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto">
              Skip multi-month custom development cycles. Get pre-built, battle-tested software foundations deployed directly onto your private AWS, GCP, or Cloudflare accounts with 0% revenue cuts.
            </p>

            {/* Trust Checklist - Centered */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-3 font-mono pt-2">
              <span className="inline-flex items-center gap-1.5">✓ Private AWS / GCP / Cloudflare deployment</span>
              <span className="inline-flex items-center gap-1.5">✓ Full commercial Git repository rights</span>
              <span className="inline-flex items-center gap-1.5">✓ 0% platform sales commission</span>
            </div>

            {/* Bottom Buttons - Centered */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <DemoButton size="md" />
              <Link
                href="/solutions/ecommerce"
                className="inline-flex items-center gap-1.5 px-4 h-11 rounded-lg border border-line bg-paper hover:bg-wash text-ink text-xs font-mono font-medium transition-colors"
              >
                <span>E-Commerce ({displayPackagePrice(FAMILY_PACKAGE.ecommerce, "en-US")})</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/solutions/short-drama"
                className="inline-flex items-center gap-1.5 px-4 h-11 rounded-lg border border-line bg-paper hover:bg-wash text-ink text-xs font-mono font-medium transition-colors"
              >
                <span>Short Drama ({displayPackagePrice(FAMILY_PACKAGE["short-drama"], "en-US")})</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/solutions/ott-streaming"
                className="inline-flex items-center gap-1.5 px-4 h-11 rounded-lg border border-line bg-paper hover:bg-wash text-ink text-xs font-mono font-medium transition-colors"
              >
                <span>OTT Streaming ({displayPackagePrice(FAMILY_PACKAGE["ott-streaming"], "en-US")})</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
}
