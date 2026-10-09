import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { BRAND } from "@/lib/constants";
import {
  MessageSquare,
  Mail,
  Clock,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Book Architecture Demo | Mechatron Lab Solutions",
  description:
    "Get in touch with Mechatron Lab software engineers. Schedule a live demonstration of our white-label e-commerce or OTT video platform, ask technical questions, or chat directly via WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Engineering & Book Live Demo | Mechatron Lab Solutions",
    description: "Connect with our engineering team for live software demonstrations and custom quotes.",
    url: "/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mechatron Lab Solutions | White-Label Architecture",
    description: "Direct contact, live WhatsApp chat, and scheduled technical demos.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://white-label-solutions.vercel.app";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Mechatron Lab Solutions",
    description: "Contact and software consultation page for Mechatron Lab Solutions.",
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      url: siteUrl,
      email: BRAND.contact.email,
      telephone: BRAND.contact.whatsappDisplay,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: BRAND.contact.whatsappDisplay,
          contactType: "customer service",
          email: BRAND.contact.email,
          availableLanguage: ["English", "Spanish", "German", "French", "Hindi"],
        },
      ],
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
        name: "Contact Us",
        item: `${siteUrl}/contact`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="wrap-wide space-y-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink">Contact</span>
          </nav>

          {/* Page Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <Headphones className="h-3.5 w-3.5 text-accent" />
              <span>Direct Engineering Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Let&apos;s Build Your Platform.
            </h1>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Have questions about our white-label architectures, source code licensing, or deployment timeline? Talk directly with our core engineering team. No aggressive sales pitches—just technical clarity.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl border border-accent/40 bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all duration-200 group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-accent font-semibold flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                      </span>
                      Instant Response Channel
                    </span>
                    <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                      Chat on WhatsApp
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-ink-2 leading-relaxed">
                  Message us directly to see live Android/iOS APK builds, examine admin panel screencasts, or discuss deployment timelines.
                </p>
                <p className="mt-4 text-xs font-mono font-medium text-accent">
                  {BRAND.contact.whatsappDisplay} →
                </p>
              </a>

              {/* Email Card */}
              <div className="p-6 rounded-2xl border border-line bg-wash space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-ink-3">Official Inquiries</span>
                    <h3 className="text-base font-semibold text-ink">Direct Email</h3>
                  </div>
                  <div className="h-9 w-9 rounded-lg bg-paper border border-line flex items-center justify-center text-ink-2">
                    <Mail className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-xs text-ink-2">
                  Send RFP documents, NDA requests, or architecture diagrams:
                </p>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="inline-block text-xs font-mono text-ink underline hover:text-accent pt-1"
                >
                  {BRAND.contact.email}
                </a>
              </div>

              {/* Guarantees Grid */}
              <div className="p-6 rounded-2xl border border-line bg-wash space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-ink-3">
                  Enterprise Consultation Promises
                </h4>
                <ul className="space-y-3 text-xs text-ink-2">
                  <li className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-ink">2-Hour SLA:</strong> Quick turnaround on all business day requests.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-ink">Mutual NDA Ready:</strong> We sign non-disclosure agreements before technical deep-dives.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-ink">Private Cloud Handover:</strong> 100% data sovereignty in your own AWS/GCP/Azure account.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Globe2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-ink">Global Coverage:</strong> Serving clients across North America, Europe, UK, and India.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
