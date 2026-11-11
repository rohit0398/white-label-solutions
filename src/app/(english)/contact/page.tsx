import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm, ContactWhatsAppLink } from "@/components/site/ContactForm";
import { BRAND } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

const title = "Contact Us for a Demo or Project Quote";
const description = "Request a demo or discuss your e-commerce, short drama, or OTT project. Send an inquiry or reach us on WhatsApp or by email.";
const canonical = "/contact";
const images = ["/og-image.png"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, images },
  twitter: { card: "summary_large_image", title, description, images },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: title,
        description,
        url: SITE_URL + canonical,
        mainEntity: { "@id": SITE_URL + "/#organization" },
      }} />
      <JsonLd schema={generateBreadcrumbSchema(SITE_URL, [
        { name: "Home", item: "/" },
        { name: "Contact", item: canonical },
      ])} />
      <Navbar />

      <main className="wrap-wide flex-1 pb-16 pt-8 sm:pb-24 sm:pt-12">
        <header className="mb-8 max-w-3xl sm:mb-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-ink-3">
            <Link href="/" className="py-1 hover:text-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">Contact</span>
          </nav>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Talk to us about your project</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
            Ask for a walkthrough or tell us about the e-commerce, short drama, or OTT platform you want to launch.
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <section className="rounded-2xl border border-line p-5 sm:p-6" aria-labelledby="contact-direct">
            <h2 id="contact-direct" className="text-lg font-semibold">Contact us directly</h2>
            <ul className="mt-2 divide-y divide-line">
              <li>
                <ContactWhatsAppLink placement="ContactPage" className="group flex min-h-11 items-center gap-3 py-3">
                  <MessageSquare aria-hidden="true" className="size-5 shrink-0 text-accent" />
                  <span className="min-w-0">
                    <span className="block font-medium group-hover:underline">Chat on WhatsApp</span>
                    <span className="text-sm text-ink-2">{BRAND.contact.whatsappDisplay}</span>
                  </span>
                </ContactWhatsAppLink>
              </li>
              <li>
                <a href={`mailto:${BRAND.contact.email}`} className="group flex min-h-11 items-center gap-3 py-3">
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-ink-3" />
                  <span className="min-w-0">
                    <span className="block font-medium group-hover:underline">Send an email</span>
                    <span className="text-sm text-ink-2 [overflow-wrap:anywhere]">{BRAND.contact.email}</span>
                  </span>
                </a>
              </li>
            </ul>
            <p className="mt-3 border-t border-line pt-4 text-sm leading-relaxed text-ink-2">
              If you already have a brief, send it by email with your target launch date and the features you need.
            </p>
          </section>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
