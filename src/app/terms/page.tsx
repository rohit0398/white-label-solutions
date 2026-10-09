import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { Scale, CheckCircle2, ShieldCheck, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Licensing | Mechatron Lab Solutions",
  description:
    "Terms of Service and Commercial Software Licensing for Mechatron Lab white-label platforms. Clear terms on source code ownership, private cloud deployment, warranties, and zero-commission guarantees.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service & Commercial Licensing | Mechatron Lab",
    description: "Clear terms on source code ownership, cloud deployment, and commercial rights.",
    url: "/terms",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Licensing | Mechatron Lab",
    description: "Enterprise software licensing terms, cloud custody, and warranty guarantees.",
    images: ["/og-image.png"],
  },
};

export default function TermsOfServicePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://white-label-solutions.vercel.app";

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
        name: "Terms of Service",
        item: `${siteUrl}/terms`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="wrap space-y-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink">Terms of Service</span>
          </nav>

          <header className="space-y-4 border-b border-line pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <Scale className="h-3.5 w-3.5 text-accent" />
              <span>Commercial Terms &amp; Licensing Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm font-mono text-ink-3">
              Last Updated: October 2026 · Effective Date: January 1, 2026
            </p>
          </header>

          {/* Quick Summary Card */}
          <div className="p-6 rounded-xl border border-line bg-wash space-y-3">
            <h2 className="text-sm font-semibold tracking-tight text-ink flex items-center gap-2">
              <Code2 className="h-4 w-4 text-accent" />
              <span>Licensing Overview</span>
            </h2>
            <p className="text-xs text-ink-2 leading-relaxed">
              Our white-label solutions are licensed on a transparent, one-time fee basis with zero monthly platform software rent and 0% revenue commissions. You own your deployment, your customer records, and have the option for 100% full unencrypted source code rights.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-ink-2">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">1. Scope of Services</h2>
              <p>
                Mechatron Lab Solutions (&quot;Mechatron Lab&quot;, &quot;we&quot;, &quot;us&quot;) provides pre-built, production-ready white-label software engineering services:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li><strong className="text-ink">White-Label E-Commerce Platform:</strong> Next.js web storefront, Flutter native iOS &amp; Android mobile apps, and central operations Admin Panel &amp; CRM.</li>
                <li><strong className="text-ink">White-Label OTT &amp; Short Drama Platform:</strong> 9:16 vertical short drama apps (ReelShort style), 16:9 cinematic streaming web portal, and Video CMS with Cloudflare Stream encoding integration.</li>
                <li><strong className="text-ink">Cloud Deployment &amp; Handover:</strong> Direct infrastructure provisioning inside the client&apos;s designated cloud account (AWS, Google Cloud, Azure, or Cloudflare).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">2. Commercial Licensing &amp; Source Code Rights</h2>
              <p>
                Depending on the chosen package, licensing grants the following rights:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li><strong className="text-ink">Launch Package ($4,999 one-time):</strong> Grants a perpetual, royalty-free commercial license to deploy and operate the branded web portal, iOS app, Android app, and Admin console for your business entity.</li>
                <li><strong className="text-ink">Source Code License ($1,999 one-time add-on):</strong> Grants full access to unencrypted Git repositories (Next.js storefront, Flutter apps, backend microservices, and database schemas) with the unrestricted legal right to modify, self-host, and extend without recurring license fees.</li>
                <li><strong className="text-ink">Restrictions:</strong> You may not publicly re-license, open-source, or distribute the raw codebase as an unbranded template marketplace asset in direct competition with Mechatron Lab.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">3. Infrastructure Ownership &amp; Third-Party Costs</h2>
              <p>
                To ensure complete data sovereignty:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>All cloud servers, databases, CDN bandwidth, and video encoding services are provisioned directly in the client&apos;s corporate cloud accounts.</li>
                <li>The client pays raw usage costs directly to cloud providers (e.g. AWS, GCP, Cloudflare Stream). Mechatron Lab adds zero markup on underlying cloud hosting bills.</li>
                <li>The client maintains direct developer relationships with Apple Developer Program ($99/year) and Google Play Console ($25 one-time) for mobile app publishing.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">4. 0% Revenue Commission Guarantee</h2>
              <p>
                Mechatron Lab charges zero percentage fees, zero GMV take-rates, and zero subscriber taxes on client transactions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>100% of customer purchases, subscriptions, and ad earnings flow directly into your connected payment gateways (Stripe, PayPal, Apple StoreKit, Google Play Billing, AdMob).</li>
                <li>We hold zero financial custody over your operating funds or payouts.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">5. Warranty, SLA &amp; Post-Launch Support</h2>
              <p>
                Every Launch deployment includes a comprehensive <strong>30-day post-launch warranty</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>We correct any functional bugs, checkout exceptions, or API discrepancies identified in the core deliverable at zero additional charge.</li>
                <li>Subsequent feature enhancements, third-party ERP integrations, or ongoing DevOps upkeep are available through our dedicated engineering support tier at $20 / hour.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">6. Payment Terms &amp; Refund Policy</h2>
              <p>
                Custom software deployment projects involve allocated engineering time and intellectual property delivery:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>Project milestones are typically structured as 50% upon contract commencement and 50% upon production deployment and store handover.</li>
                <li>Due to the immediate provisioning of proprietary repositories and engineering labor, fees paid toward completed milestones are non-refundable once source code access has been delivered.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">7. Governing Law &amp; Dispute Resolution</h2>
              <p>
                These terms are governed by commercial software contracts under mutual jurisdiction. Any disputes shall first be resolved through good-faith executive discussion, followed by binding commercial arbitration if necessary.
              </p>
              <div className="p-4 rounded-lg border border-line bg-wash space-y-1 text-xs font-mono text-ink-2">
                <p><strong className="text-ink">Entity:</strong> Mechatron Lab Solutions</p>
                <p><strong className="text-ink">Legal Inquiries:</strong> {BRAND.contact.email}</p>
                <p><strong className="text-ink">Phone / WhatsApp:</strong> {BRAND.contact.whatsappDisplay}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
