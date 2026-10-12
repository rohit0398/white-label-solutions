import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { BRAND } from "@/lib/constants";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Smartphone,
  Bell,
  Fingerprint,
  Zap,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce App Development Guide: iOS & Android | Mechatron Lab",
  description:
    "Launch branded mobile shopping apps for iOS & Android in 2–4 weeks. Flutter architecture, 0% app store sales cuts, and automated push notifications.",
  keywords: [
    "ecommerce app development guide",
    "ecommerce mobile app development",
    "flutter ecommerce app",
    "shopping app development",
    "white label ecommerce app",
    "ios android shopping app development",
  ],
  alternates: {
    canonical: "/blog/ecommerce-app-development",
  },
  openGraph: {
    title: "E-Commerce App Development Guide: iOS & Android",
    description:
      "Launch branded mobile shopping apps for iOS & Android in 2–4 weeks. Flutter architecture, 0% app store sales cuts, and automated push notifications.",
    url: "/blog/ecommerce-app-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "article",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce App Development Guide: iOS & Android | Mechatron Lab",
    description:
      "Launch branded mobile shopping apps for iOS & Android in 2–4 weeks with 0% commission.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceAppDevBlogPage() {
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
        name: "E-Commerce App Development",
        item: `${siteUrl}/blog/ecommerce-app-development`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: `${siteUrl}/blog/ecommerce-app-development`,
    headline: "E-Commerce App Development: How to Launch Native iOS & Android Shopping Apps in 2–4 Weeks",
    description:
      "A comprehensive guide detailing the engineering, policy compliance, and conversion mechanics of launching branded mobile commerce applications.",
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
    datePublished: "2026-10-03",
    dateModified: "2026-10-11",
  };

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
              <span className="text-ink">E-Commerce App Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <Smartphone className="h-3.5 w-3.5 text-accent" />
              <span>Mobile Engineering &amp; Conversions</span>
            </div>

            <AnimatedHeadline
              as="h1"
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-[1.12]"
            >
              E-Commerce App Development: How to Launch Native iOS &amp; Android Shopping Apps in 2–4 Weeks
            </AnimatedHeadline>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-ink-3 pt-2">
              <span>By Mechatron Lab Engineering Team</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Updated October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                9 min read
              </span>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="p-6 sm:p-8 rounded-2xl border border-line bg-wash space-y-3">
            <h2 className="text-base font-semibold text-ink flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Why Mobile Apps Matter</span>
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Mobile commerce accounts for over <strong>73% of total global e-commerce transactions</strong>. Dedicated mobile shopping apps convert at <strong>3x to 5x higher rates</strong> than mobile web browsers due to instant biometric checkout (Face ID), offline catalog caching, and free push notification re-engagement.
            </p>
          </div>

          {/* Body Prose */}
          <div className="prose prose-neutral max-w-none text-ink-2 space-y-8 leading-relaxed text-base sm:text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                1. Mobile Web vs. Native Mobile Apps: The Conversion Gap
              </h2>
              <p>
                Most online stores invest thousands in paid ads driving traffic to a mobile website, only to experience cart abandonment rates exceeding 80%.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 not-prose pt-2">
                <div className="p-5 rounded-2xl border border-line bg-paper">
                  <span className="text-xs font-mono text-ink-3 uppercase">Mobile Web Browsers</span>
                  <h3 className="text-lg font-semibold text-ink mt-1">Average 1.8% Conversion</h3>
                  <ul className="text-xs text-ink-2 mt-3 space-y-2">
                    <li>• Slow cold loads over cellular connections</li>
                    <li>• Shoppers must manually type passwords</li>
                    <li>• Cluttered browser address bars &amp; reload friction</li>
                    <li>• Re-engagement requires costly remarketing ads</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-line bg-paper border-accent/40 bg-accent/5">
                  <span className="text-xs font-mono text-accent uppercase font-semibold">Native Mobile Apps</span>
                  <h3 className="text-lg font-semibold text-ink mt-1">Average 4.2%+ Conversion</h3>
                  <ul className="text-xs text-ink-2 mt-3 space-y-2">
                    <li>• 60 FPS hardware-accelerated smooth browsing</li>
                    <li>• Instant 1-tap biometric login (Face ID / Fingerprint)</li>
                    <li>• Persistent shopping cart saved on device</li>
                    <li>• Free lock-screen push notifications (0% ad spend)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                2. The 0% Commission Rule Most Founders Don&apos;t Know
              </h2>
              <p>
                A common misconception among retailers is that Apple and Google take a 30% cut of all in-app sales.
              </p>
              <p>
                <strong>This is 100% false for physical retail e-commerce.</strong> Under Apple App Store Guideline 3.1.1 (Exemption for Physical Goods and Services), online retailers are explicitly exempt from using Apple In-App Purchase:
              </p>
              <blockquote className="p-4 rounded-xl border border-line bg-paper text-sm text-ink italic not-prose">
                &ldquo;If your app enables people to purchase physical goods or services that will be consumed outside of the app, you must use other payment methods such as Apple Pay, credit cards, or PayPal.&rdquo;
              </blockquote>
              <p>
                This means you keep <strong>100% of your sales revenue</strong>, paying only standard credit card processing fees (e.g. Stripe, PayPal, Razorpay) directly into your merchant bank account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                3. Key Architectural Must-Haves in an E-Commerce App
              </h2>
              <p>
                When selecting an <strong>ecommerce app development company</strong> or deploying a pre-built mobile app, verify these core technical capabilities:
              </p>
              <div className="space-y-3 not-prose">
                <div className="p-4 rounded-xl border border-line bg-paper flex items-start gap-3">
                  <Zap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Single Unified Codebase (Flutter 3.x)</h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Maintains feature parity between iPhone and Android users while cutting development and maintenance costs by 50%.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-line bg-paper flex items-start gap-3">
                  <Bell className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Free Unlimited Push Notifications</h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Built with Google Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs). Send abandoned cart reminders, flash sale announcements, and live order tracking without per-message third-party fees.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-line bg-paper flex items-start gap-3">
                  <Fingerprint className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Native Biometric Authentication</h4>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Shoppers authenticate seamlessly via Face ID or fingerprint sensors, eliminating forgotten passwords and drop-offs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink tracking-tight">
                4. App Store Approval: Why Ownership Matters
              </h2>
              <p>
                Never let an agency publish your mobile shopping app under their own developer account.
              </p>
              <p>
                At Mechatron Lab, we build and deploy your apps directly to your corporate <strong>Apple Developer Program</strong> ($99/year) and <strong>Google Play Console</strong> ($25 one-time) accounts. This guarantees:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-sm sm:text-base">
                <li>Your company name appears as the developer in the App Store.</li>
                <li>You retain 100% legal ownership of your app listings, reviews, and customer database.</li>
                <li>You never suffer vendor lock-in if you ever choose to bring development in-house.</li>
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
                href="/blog/ecommerce-website-development"
                className="group p-5 rounded-xl border border-line bg-wash/50 hover:bg-wash hover:border-ink/40 transition-all block"
              >
                <span className="text-[11px] font-mono text-accent font-medium block mb-1">
                  Web Engineering · 10 min read
                </span>
                <h4 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                  Complete Guide to E-Commerce Website Development: Modern Architecture &amp; Gateways
                </h4>
                <p className="text-xs text-ink-3 mt-2 line-clamp-2">
                  Learn how to build high-speed storefronts with Next.js, sub-second page loads, and multi-warehouse sync.
                </p>
              </Link>
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
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-8 sm:p-10 rounded-3xl border border-line bg-wash space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Mobile-First Retail
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                Launch Your iOS &amp; Android Apps in 2–4 Weeks
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed max-w-2xl">
                Inspect our live mobile shopping applications or book an interactive walkthrough. 100% App Store publishing guarantee under your developer accounts with zero ongoing platform fees.
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
                href="/solutions/ecommerce-app-development"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-80"
              >
                <span>View Mobile App Solution Page</span>
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
