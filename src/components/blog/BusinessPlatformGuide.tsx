import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { ContactWhatsAppLink } from "@/components/site/ContactForm";
import { Screenshot } from "@/components/ui/Screenshot";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { businessPlatformGuide } from "@/lib/content/business-platform-guides";
import { additionalPlatform } from "@/lib/content/additional-platforms";
import type { AdditionalPlatformId } from "@/lib/additional-platform-paths";
import { SITE_URL } from "@/lib/site-config";
import { BRAND } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/schema";

export function businessPlatformGuideMetadata(platformId: AdditionalPlatformId): Metadata {
  const guide = businessPlatformGuide(platformId);
  const platform = additionalPlatform(platformId);
  const url = `/blog/${guide.slug}`;
  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: url, languages: {} },
    openGraph: { type: "article", title: guide.seoTitle, description: guide.description, url, images: [{ url: platform.image, alt: platform.title }], publishedTime: guide.datePublished },
    twitter: { card: "summary_large_image", title: guide.seoTitle, description: guide.description, images: [platform.image] },
  };
}

export default function BusinessPlatformGuide({ platformId }: { platformId: AdditionalPlatformId }) {
  const guide = businessPlatformGuide(platformId);
  const platform = additionalPlatform(platformId);
  const path = `/blog/${guide.slug}`;
  const whatsapp = new URL(BRAND.contact.whatsappUrl);
  whatsapp.searchParams.set("text", `Hi, I read the ${guide.title} guide. I’d like a walkthrough and quote for ${platform.title}.`);
  const dateLabel = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(guide.datePublished));
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink" data-guide-platform={platformId}>
      <JsonLd schema={generateBreadcrumbSchema(SITE_URL, [{ name: "Home", item: "/" }, { name: "Blog", item: "/blog" }, { name: guide.title, item: path }])} />
      <JsonLd schema={{
        "@context": "https://schema.org", "@type": "Article",
        "@id": `${SITE_URL}${path}#article`,
        headline: guide.title, description: guide.description,
        mainEntityOfPage: SITE_URL + path, image: SITE_URL + platform.image,
        author: { "@type": "Organization", name: "Mechatron Lab Solutions", url: `${SITE_URL}/about` },
        publisher: { "@type": "Organization", name: "Mechatron Lab Solutions", url: SITE_URL },
        datePublished: guide.datePublished,
      }} />
      <JsonLd schema={generateFaqSchema(guide.faqs)} />
      <Navbar />
      <main className="flex-1 pb-20 pt-12 sm:pt-14">
        <article className="wrap space-y-12" lang="en">
          <header className="space-y-5">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-ink-3">
              <Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span>
              <Link href="/blog" className="underline underline-offset-4">Blog</Link>
            </nav>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{guide.title}</h1>
            <p className="text-sm text-ink-3">By <Link href="/about" className="underline underline-offset-4">Mechatron Lab Solutions</Link> · Published <time dateTime={guide.datePublished}>{dateLabel}</time></p>
            <p className="text-lg leading-relaxed text-ink-2">{guide.intro}</p>
          </header>

          <section id="live-demo" aria-labelledby="demo-heading" className="space-y-5 rounded-xl border border-line bg-wash/30 p-5 sm:p-6">
            <h2 id="demo-heading" className="text-2xl font-semibold tracking-tight">{platform.demos.length ? "Try the live demo" : "See the product screens"}</h2>
            <p className="leading-relaxed text-ink-2">{platform.demoIntro}</p>
            <Screenshot src={platform.image} alt={`${platform.reference} ${platform.title} screens`} sizes="(min-width: 704px) 608px, calc(100vw - 92px)" />
            {platform.demos.length > 0 && (
              <ul className="space-y-2 text-sm">{platform.demos.map(demo => <li key={demo.href}><a href={demo.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">{demo.label} →</a></li>)}</ul>
            )}
            <p className="text-sm text-ink-2">Price on request. Discuss the product, branding, integrations, and delivery plan in a walkthrough.</p>
            <div className="flex flex-wrap items-center gap-4">
              <DemoButton tierId={platformId} trackingPlacement={`${guide.slug}-demo`}>Request a walkthrough</DemoButton>
              <ContactWhatsAppLink href={whatsapp.toString()} placement={`${guide.slug}-demo`} className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Ask on WhatsApp</ContactWhatsAppLink>
            </div>
            <Link href={platform.path} className="inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4">Explore the {platform.title.toLowerCase()} →</Link>
          </section>

          <nav aria-label="Article contents" className="space-y-3 rounded-xl border border-line p-5">
            <h2 className="font-semibold">In this guide</h2>
            <ol className="space-y-3 text-sm">{guide.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="underline underline-offset-4">{section.title}</a></li>)}</ol>
            <a href="#launch-checklist" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Launch checklist</a>
          </nav>
          {guide.sections.map(section => (
            <section id={section.id} key={section.id} className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph} className="leading-relaxed text-ink-2">{paragraph}</p>)}
              {section.bullets && <ul className="list-disc space-y-2 pl-5 text-ink-2">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
              {section.source && <p className="text-sm text-ink-3">Reference: <a href={section.source.href} className="underline underline-offset-4">{section.source.label}</a>.</p>}
            </section>
          ))}
          <section id="launch-checklist" className="scroll-mt-24 space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">Launch checklist</h2>
            <LaunchSteps steps={guide.checklist} compact />
          </section>
          <section id="questions" className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
            <div className="divide-y divide-line">{guide.faqs.map(faq => <details key={faq.q} className="py-4"><summary className="cursor-pointer font-medium">{faq.q}</summary><p className="mt-3 leading-relaxed text-ink-2">{faq.a}</p></details>)}</div>
          </section>
          <section id="next-step" className="space-y-4 rounded-xl border border-line bg-wash/30 p-5 sm:p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Review the platform and discuss the launch</h2>
            <p className="leading-relaxed text-ink-2">Bring the workflows and integrations needed for the first release. We’ll review the relevant product and quote the agreed scope. Price on request.</p>
            <DemoButton tierId={platformId} trackingPlacement={`${guide.slug}-quote`}>Discuss the launch</DemoButton>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm"><Link href={platform.path} className="underline underline-offset-4">View the product details</Link><Link href="/solutions#other-platforms" className="underline underline-offset-4">Explore the software catalog</Link><Link href="/blog" className="underline underline-offset-4">Browse more guides</Link></div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
