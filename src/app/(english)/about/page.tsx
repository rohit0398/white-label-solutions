import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { CASE_STUDIES_PATH } from "@/lib/content/case-studies";
import { BRAND } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

const title = "About Mechatron Lab Solutions";
const description = "Meet the team behind our white-label e-commerce, short drama, and OTT platforms. See how we scope, deploy, and hand over your software.";
const canonical = "/about";
const images = ["/og-image.png"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, images },
  twitter: { card: "summary_large_image", title, description, images },
};

const platforms = [
  { name: "E-commerce", description: "A storefront, shopping apps, and an admin panel to manage products and orders.", href: "/solutions/ecommerce" },
  { name: "Short drama", description: "Apps and a website for vertical episodes, with tools for publishing and managing access.", href: "/solutions/short-drama" },
  { name: "OTT streaming", description: "A streaming website and apps with a dashboard to manage your video catalog.", href: "/solutions/ott-streaming" },
];

const delivery = [
  { title: "Scope and costs", description: "We agree on the features, integrations, and launch plan before work starts. We outline hosting and other third-party costs so you can budget for them." },
  { title: "Deployment to your accounts", description: "We set up the platform in your branding and deploy it to the cloud account agreed for the project. When apps are in scope, we help prepare them for submission under your developer accounts." },
  { title: "Handover and support", description: "We walk your team through the admin panel and agree on post-launch support. A source code license is available as an add-on." },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: title,
        description,
        url: SITE_URL + canonical,
        mainEntity: { "@id": SITE_URL + "/#organization" },
      }} />
      <JsonLd schema={generateBreadcrumbSchema(SITE_URL, [
        { name: "Home", item: "/" },
        { name: "About", item: canonical },
      ])} />
      <Navbar />

      <main className="wrap-wide flex-1 space-y-12 pb-16 pt-8 sm:space-y-16 sm:pb-24 sm:pt-12">
        <header className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-ink-3">
            <Link href="/" className="py-1 hover:text-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">About</span>
          </nav>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">About {BRAND.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
            We build e-commerce, short drama, and OTT platforms for businesses that want to launch under their own brand. We start with working software and adapt it to your catalog, customers, and launch requirements.
          </p>
          <Link href={CASE_STUDIES_PATH} className={buttonClass("secondary", "md", "mt-6")}>See our case studies</Link>
        </header>

        <section aria-labelledby="about-platforms">
          <h2 id="about-platforms" className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">What we build</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {platforms.map((platform) => (
              <li key={platform.href}>
                <Link href={platform.href} className="group flex h-full flex-col gap-2 rounded-2xl border border-line bg-wash p-5 transition-colors hover:border-ink-3 sm:p-6">
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-semibold">{platform.name}</span>
                    <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-ink-3 group-hover:text-ink" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-2">{platform.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about-delivery">
          <h2 id="about-delivery" className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">How we work with you</h2>
          <dl className="divide-y divide-line border-y border-line">
            {delivery.map((item) => (
              <div key={item.title} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-5">
                <dt className="font-semibold">{item.title}</dt>
                <dd className="max-w-2xl text-sm leading-relaxed text-ink-2 sm:text-base">{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-2xl border border-line bg-wash p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Tell us what you’re building</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">Share your launch plans and the features you need. We can walk you through the relevant platform and discuss what needs custom work.</p>
          <Link href="/contact" className={buttonClass("primary", "md", "mt-5")}>Contact us</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
