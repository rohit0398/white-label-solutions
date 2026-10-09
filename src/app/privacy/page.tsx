import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Mechatron Lab Solutions",
  description:
    "Privacy Policy for Mechatron Lab Solutions. Learn how we handle your personal data, lead inquiries, analytics, and Google Ads measurement in accordance with GDPR, CCPA, and global privacy standards.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Mechatron Lab Solutions",
    description: "Our commitment to data sovereignty, user privacy, and transparent measurement.",
    url: "/privacy",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Mechatron Lab Solutions",
    description: "Transparent privacy policy and data governance for enterprise software clients.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
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
        name: "Privacy Policy",
        item: `${siteUrl}/privacy`,
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
            <span className="text-ink">Privacy Policy</span>
          </nav>

          <header className="space-y-4 border-b border-line pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              <span>Data Protection &amp; Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm font-mono text-ink-3">
              Last Updated: October 2026 · Effective Date: January 1, 2026
            </p>
          </header>

          {/* Quick Summary Card */}
          <div className="p-6 rounded-xl border border-line bg-wash space-y-3">
            <h2 className="text-sm font-semibold tracking-tight text-ink flex items-center gap-2">
              <Lock className="h-4 w-4 text-accent" />
              <span>Core Privacy Commitment</span>
            </h2>
            <p className="text-xs text-ink-2 leading-relaxed">
              Mechatron Lab builds white-label software deployed into our clients’ own private cloud infrastructure. We do not sell personal data, we do not host your end-customer databases on shared multi-tenant servers, and we only collect contact information necessary to provide software architecture demonstrations, quotes, and developer engineering support.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-ink-2">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">1. Information We Collect</h2>
              <p>When you interact with our website or book a software demonstration, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li><strong className="text-ink">Inquiry Information:</strong> Name, work email address, telephone/WhatsApp number, company name, and your selected software solution package.</li>
                <li><strong className="text-ink">Communications Data:</strong> Direct correspondence sent via WhatsApp or email, including project specifications and technical requirements.</li>
                <li><strong className="text-ink">Device &amp; Telemetry Data:</strong> IP address, browser type, device identifiers, and aggregated browsing patterns collected via cookies and measurement tags.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">2. How We Use Your Information</h2>
              <p>We process collected data for the following legitimate commercial purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>To schedule, configure, and conduct personalized live demonstrations of our e-commerce and OTT video streaming platforms.</li>
                <li>To prepare technical proposals, source code licensing agreements, and architecture deployment roadmaps.</li>
                <li>To deliver post-launch developer support, system maintenance, and warranty services.</li>
                <li>To measure marketing campaign efficacy, evaluate conversion metrics, and optimize digital advertising ROI.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">3. Google Ads, Analytics &amp; Consent Mode v2</h2>
              <p>
                Our website utilizes the Google Tag (gtag.js) for conversion measurement and Google Ads advertising optimization.
              </p>
              <p>
                In compliance with European Economic Area (EEA) and United Kingdom regulations, we have implemented <strong>Google Consent Mode v2</strong>. By default, marketing and advertising cookie storage (<code className="font-mono text-xs bg-wash px-1 py-0.5 rounded">ad_storage</code>, <code className="font-mono text-xs bg-wash px-1 py-0.5 rounded">ad_user_data</code>, and <code className="font-mono text-xs bg-wash px-1 py-0.5 rounded">ad_personalization</code>) is set to a denied state until you grant affirmative consent via our on-site cookie banner.
              </p>
              <p>
                You may update your consent choices at any time by clearing your browser cache or clicking our preferences control.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">4. Client Data Sovereignty (Zero Data Multi-Tenancy)</h2>
              <p>
                A core value proposition of our white-label solution is full infrastructure ownership:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>Once deployed, your e-commerce store, customer database, order histories, and OTT streaming catalog reside entirely in your private AWS, Google Cloud, Azure, or Cloudflare accounts.</li>
                <li>Mechatron Lab maintains zero backdoors, zero telemetry taps, and zero access to your end-consumer transactions after project handover.</li>
                <li>We take 0% revenue commissions and hold zero custody over your payment processor balances (Stripe, PayPal, Apple StoreKit, Google Play).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">5. International Data Rights (GDPR, CCPA &amp; DPDP Act)</h2>
              <p>
                Depending on your geographic jurisdiction (European Union, United Kingdom, California, or India), you possess statutory rights regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li><strong className="text-ink">Right of Access &amp; Portability:</strong> Request a copy of the personal contact data we hold on you.</li>
                <li><strong className="text-ink">Right to Rectification:</strong> Request correction of inaccurate or incomplete contact records.</li>
                <li><strong className="text-ink">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your inquiry data from our internal CRM records.</li>
                <li><strong className="text-ink">Right to Object / Opt-Out:</strong> Withdraw consent for marketing analytics and direct communication at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please email us directly at <a href={`mailto:${BRAND.contact.email}`} className="text-ink underline">{BRAND.contact.email}</a>. Requests are fulfilled within 30 calendar days at zero fee.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">6. Contact &amp; Data Controller Information</h2>
              <p>
                For any inquiries, requests, or privacy concerns regarding this policy, contact our designated privacy team:
              </p>
              <div className="p-4 rounded-lg border border-line bg-wash space-y-1 text-xs font-mono text-ink-2">
                <p><strong className="text-ink">Legal Entity:</strong> Mechatron Lab Solutions</p>
                <p><strong className="text-ink">Inquiries Email:</strong> {BRAND.contact.email}</p>
                <p><strong className="text-ink">WhatsApp / Telephone:</strong> {BRAND.contact.whatsappDisplay}</p>
                <p><strong className="text-ink">Geographic Coverage:</strong> United States, United Kingdom, European Union, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
