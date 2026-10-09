import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { BRAND, SHOWCASE_PROJECTS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
import {
  ShieldCheck,
  Code2,
  Percent,
  Rocket,
  CheckCircle2,
  Server,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Mechatron Lab Solutions | Our Engineering Philosophy",
  description:
    "Learn about Mechatron Lab Solutions. We build enterprise-grade white-label e-commerce and OTT video streaming platforms deployed directly to client cloud infrastructure with zero SaaS rent.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mechatron Lab Solutions | Engineering Freedom Over SaaS Rent",
    description: "Production-ready software platforms deployed to your private cloud with unencrypted source code rights.",
    url: "/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mechatron Lab Solutions",
    description: "The white-label engineering alternative to monthly SaaS taxes and vendor lock-in.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://white-label-solutions.vercel.app";

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mechatron Lab Solutions",
    description: "About Mechatron Lab Solutions and our white-label software engineering philosophy.",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      url: siteUrl,
      logo: `${siteUrl}/brand/logo_icon.svg`,
      description:
        "Engineering white-label e-commerce and OTT streaming platforms deployed to clients' private clouds.",
      email: BRAND.contact.email,
      telephone: BRAND.contact.whatsappDisplay,
    },
  };

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
        name: "About Us",
        item: `${siteUrl}/about`,
      },
    ],
  };

  const tenets = [
    {
      icon: Server,
      title: "1. 100% Private Cloud Custody",
      desc: "We deploy directly into your private AWS, Google Cloud, Azure, or Cloudflare accounts. You own the root credentials, the database clusters, and the customer records. We operate zero shared multi-tenant databases.",
    },
    {
      icon: Code2,
      title: "2. Full Unencrypted Codebase Ownership",
      desc: "Our source code licenses provide raw Git repositories: Next.js web storefronts, native Flutter mobile applications, and backend microservices. No obfuscated binaries, no vendor lock-in, and no hidden dependencies.",
    },
    {
      icon: Percent,
      title: "3. 0% Revenue Take-Rate Guarantee",
      desc: "We charge zero GMV percentage fees, zero per-transaction cuts, and zero per-subscriber taxes. 100% of your earnings flow straight into your connected Stripe, PayPal, Apple StoreKit, or Google Play accounts.",
    },
    {
      icon: Rocket,
      title: "4. Rapid Velocity with 30-Day Warranty",
      desc: "Why spend 9–12 months and $80,000+ building an e-commerce or streaming system from scratch? Our production-tested architectures launch in 2 to 4 weeks with a complete 30-day bug warranty included.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-16 sm:py-24 space-y-20">
        <div className="wrap-wide space-y-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink">About Us</span>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Our Mission &amp; Engineering Thesis</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-tight">
              Software Ownership Over Monthly SaaS Rent.
            </h1>
            <p className="text-base sm:text-lg text-ink-2 leading-relaxed">
              Mechatron Lab was built on a straightforward conviction: growing businesses should own their core digital infrastructure, not rent it forever under compounding monthly fees and revenue take-rates.
            </p>
          </div>

          {/* SaaS Rent vs Mechatron Lab Comparison Grid */}
          <div className="p-8 sm:p-10 rounded-2xl border border-line bg-wash space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                The Problem with Traditional Software Models
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                Modern software providers have turned foundational software into an endless subscription trap. Compare the two paths available to businesses today:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border border-red-500/20 bg-paper/50 space-y-4">
                <span className="text-xs font-mono text-red-500 uppercase tracking-wider font-semibold">
                  Path A: The Monthly SaaS Trap (Shopify, Vimeo OTT)
                </span>
                <ul className="space-y-2.5 text-xs text-ink-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>$299–$2,000/month recurring subscription rent that never ends.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>1% to 2% transaction take-rates penalizing your revenue growth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Separate $50–$300/mo app store fees for basic features like reviews, filters, and mobile apps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Zero access to underlying source code. You are locked in forever.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-accent/40 bg-accent/5 space-y-4">
                <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                  Path B: The Mechatron Lab Model (Full Asset Ownership)
                </span>
                <ul className="space-y-2.5 text-xs text-ink-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Transparent One-Time Fee:</strong> Pay once, own your production platform forever.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>0% Commission:</strong> 100% of revenue flows directly to your Stripe/bank account.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Native Mobile Apps Included:</strong> Flutter iOS &amp; Android published under your developer accounts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Full Unencrypted Code Rights:</strong> Optional complete Git repository ownership for perpetual control.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4 Core Tenets */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Our Four Core Tenets
              </h2>
              <p className="text-xs sm:text-sm text-ink-3">
                How our engineering team designs and delivers software assets to every client.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {tenets.map((t) => (
                <div key={t.title} className="p-6 rounded-2xl border border-line bg-wash space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-paper border border-line flex items-center justify-center text-accent">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{t.title}</h3>
                  <p className="text-xs text-ink-2 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proven Live Deployments Showcase */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Battle-Tested in Live Production
              </h2>
              <p className="text-xs sm:text-sm text-ink-3">
                Real applications, verified Google Play store distributions, and enterprise volumes.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...SHOWCASE_PROJECTS.slice(0, 2), ...OTT_SHOWCASE_PROJECTS].map((p) => (
                <div key={p.id} className="p-5 rounded-xl border border-line bg-wash space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-paper border border-line text-ink-3">
                      {p.industry}
                    </span>
                    <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                    <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline pt-2"
                    >
                      <span>View Live App</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl border border-line bg-wash text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Ready to Own Your Software Platform?
            </h2>
            <p className="text-sm text-ink-2 max-w-xl mx-auto leading-relaxed">
              Book a live screen-share demonstration with our engineering leads or chat with us on WhatsApp to discuss your project specifications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoButton className="w-full sm:w-auto h-11 px-8 text-sm">
                Book a Live Demo
              </DemoButton>
              <Link
                href="/contact"
                className={buttonClass("secondary", "md", "w-full sm:w-auto h-11 px-8 text-sm")}
              >
                Contact Engineering
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
