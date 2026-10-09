import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { RefreshCcw, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Mechatron Lab Solutions",
  description:
    "Transparent refund, cancellation, and 30-day warranty policy for Mechatron Lab white-label software deployments, source code licensing, and engineering services.",
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | Mechatron Lab Solutions",
    description: "Clear, transparent refund terms and 30-day post-launch warranty guarantees.",
    url: "/refund-policy",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy | Mechatron Lab Solutions",
    description: "Transparent commercial refund terms and 30-day post-launch warranty.",
    images: ["/og-image.png"],
  },
};

export default function RefundPolicyPage() {
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
        name: "Refund Policy",
        item: `${siteUrl}/refund-policy`,
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
            <span className="text-ink">Refund Policy</span>
          </nav>

          <header className="space-y-4 border-b border-line pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <RefreshCcw className="h-3.5 w-3.5 text-accent" />
              <span>Commercial Terms &amp; Guarantees</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-sm font-mono text-ink-3">
              Last Updated: October 2026 · Effective Date: January 1, 2026
            </p>
          </header>

          {/* Quick Summary Card */}
          <div className="p-6 rounded-xl border border-line bg-wash space-y-3">
            <h2 className="text-sm font-semibold tracking-tight text-ink flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Policy Summary at a Glance</span>
            </h2>
            <p className="text-xs text-ink-2 leading-relaxed">
              We provide enterprise-grade white-label software systems. Because our deployments involve tailored engineering labor, cloud environment provisioning, and proprietary source code delivery, our policy is structured around fair milestones, a 100% pre-kickoff refund right, and an included 30-day full warranty.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-ink-2">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">1. Pre-Deployment Cancellations &amp; Full Refunds</h2>
              <p>
                Clients may cancel an order and request a <strong>100% full refund</strong> of their initial deposit under the following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>Cancellation is requested in writing within 48 hours of invoice payment AND prior to the formal kickoff call and initial cloud provisioning.</li>
                <li>No access to proprietary Git source code repositories or build credentials has been issued.</li>
                <li>Refunds are processed back to the original payment method (Stripe, bank wire, or UPI) within 5–7 business days at zero processing penalty.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">2. Milestone Delivery &amp; Source Code Delivery</h2>
              <p>
                White-label deployment projects involve intellectual property delivery and allocated engineering sprints:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li><strong className="text-ink">Launch Package ($4,999):</strong> Structured with clear delivery milestones. Payments allocated to completed milestones (e.g., custom branding configuration, payment gateway setup, App Store &amp; Play Store builds, cloud provisioning) are non-refundable once approved by the client.</li>
                <li><strong className="text-ink">Source Code License ($1,999):</strong> Due to the immediate delivery of unencrypted, irrevocable Git repositories containing proprietary architecture, source code license fees are non-refundable once repository access has been granted.</li>
                <li><strong className="text-ink">Hourly Developer Time ($20/hr):</strong> Billed based on logged engineering hours. Unused prepaid hourly blocks may be refunded upon written request with 7 days&apos; notice.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">3. Included 30-Day Post-Launch Warranty</h2>
              <p>
                To give every client complete confidence, every Launch tier deployment includes an unrestricted <strong>30-day technical warranty</strong>:
              </p>
              <div className="p-4 rounded-lg border border-line bg-wash space-y-2 text-xs text-ink-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Bug Fix Guarantee:</strong> Any functional errors, checkout edge cases, broken API endpoints, or mobile app crashes originating from the core deliverable are resolved at zero cost.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Store Approval Guarantee:</strong> If Apple App Store or Google Play Store requests technical adjustments for submission compliance, our engineers perform all necessary code adjustments at zero fee.</span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">4. Third-Party Services &amp; Cloud Fees</h2>
              <p>
                Because all servers, databases, and third-party APIs are provisioned directly in your corporate accounts:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-2">
                <li>Mechatron Lab does not bill for third-party hosting, bandwidth, or app store developer accounts.</li>
                <li>Underlying cloud provider costs (AWS, Google Cloud, Azure, Cloudflare Stream) and Apple/Google developer program fees are subject to the respective providers&apos; billing policies and are not refundable by Mechatron Lab.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">5. How to Submit a Refund or Warranty Request</h2>
              <p>
                To request a project cancellation, milestone review, or warranty ticket:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-ink-2">
                <li>Send an email to <a href={`mailto:${BRAND.contact.email}`} className="text-ink underline">{BRAND.contact.email}</a> with the subject line <em>&quot;Billing &amp; Refund Request - [Your Company Name]&quot;</em>.</li>
                <li>State your project invoice number, payment date, and the specific reason for your request.</li>
                <li>Our engineering operations team will review your account and issue a formal written response within 2 business days.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-ink">6. Contact Information</h2>
              <div className="p-4 rounded-lg border border-line bg-wash space-y-1 text-xs font-mono text-ink-2">
                <p><strong className="text-ink">Entity:</strong> Mechatron Lab Solutions</p>
                <p><strong className="text-ink">Billing Inquiries:</strong> {BRAND.contact.email}</p>
                <p><strong className="text-ink">Phone / WhatsApp:</strong> {BRAND.contact.whatsappDisplay}</p>
                <p><strong className="text-ink">Response Time:</strong> Under 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
