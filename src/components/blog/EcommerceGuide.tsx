import { ECOMMERCE_PATHS } from "@/lib/solution-paths";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { DemoButton } from "@/components/site/DemoButton";
import { LaunchTimeline } from "@/components/ui/LaunchTimeline";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { Screenshot } from "@/components/ui/Screenshot";
import { ECOMMERCE_GUIDES, ECOMMERCE_GUIDE_UPDATED, type CommerceGuide, type EcommerceGuideKey } from "@/lib/content/ecommerce-guides";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { displayPackagePrice, type PackageId } from "@/lib/pricing-catalog";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

const packages: { label: string; href: string; launch: PackageId; source: PackageId }[] = [
  { label: "Storefront and admin", href: ECOMMERCE_PATHS.web, launch: "web-launch", source: "web-source-code" },
  { label: "iOS and Android apps", href: ECOMMERCE_PATHS.app, launch: "app-launch", source: "app-source-code" },
  { label: "Complete e-commerce platform", href: ECOMMERCE_PATHS.platform, launch: "launch", source: "source-code-license" },
];

export function ecommerceGuideMetadata(guideKey: EcommerceGuideKey): Metadata {
  const guide: CommerceGuide = ECOMMERCE_GUIDES[guideKey];
  const { slug, description, image } = guide;
  const title = guide.seoTitle ?? guide.title;
  const url = `/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url, images: [image.src], publishedTime: guide.datePublished, modifiedTime: guide.dateModified ?? ECOMMERCE_GUIDE_UPDATED },
    twitter: { card: "summary_large_image", title, description, images: [image.src] },
  };
}

export function EcommerceGuide({ guideKey }: { guideKey: EcommerceGuideKey }) {
  const guide: CommerceGuide = ECOMMERCE_GUIDES[guideKey];
  const path = `/blog/${guide.slug}`;
  const showPricing = guideKey === "cost";
  const modified = guide.dateModified ?? ECOMMERCE_GUIDE_UPDATED;
  const dateLabel = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(modified));
  const relatedLinks = [...guide.links, ...Object.values(ECOMMERCE_GUIDES)
    .filter(item => item.slug !== guide.slug)
    .map(item => ({ href: `/blog/${item.slug}`, label: item.title }))]
    .filter((item, index, links) => links.findIndex(other => other.href === item.href) === index);
  const breadcrumbs = generateBreadcrumbSchema(SITE_URL, [
    { name: "Home", item: "/" }, { name: "Blog", item: "/blog" }, { name: guide.title, item: path },
  ]);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: SITE_URL + path,
    image: [SITE_URL + guide.image.src],
    inLanguage: "en",
    author: { "@type": "Organization", name: "Mechatron Lab Engineering Team", url: SITE_URL + "/about" },
    publisher: { "@type": "Organization", name: "Mechatron Lab Solutions", url: SITE_URL },
    datePublished: guide.datePublished,
    dateModified: modified,
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbs} />
      <JsonLd schema={article} />
      <Navbar />
      <main className="flex-1 pb-20 pt-14 sm:pt-10">
        <article className="wrap space-y-12" lang="en">
          <header className="space-y-5">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-ink-3">
              <Link href="/" className="underline">Home</Link><span>/</span>
              <Link href="/blog" className="underline">Blog</Link>
            </nav>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{guide.title}</h1>
            <p className="text-sm text-ink-3">By <Link href="/about" className="underline">Mechatron Lab Engineering Team</Link> · {modified === guide.datePublished ? "Published" : "Updated"} <time dateTime={modified}>{dateLabel}</time></p>
            <p className="text-lg leading-relaxed text-ink-2">{guide.intro}</p>
            <a href={showPricing ? "#packages" : "#launch-checklist"} className="inline-block text-sm font-medium underline underline-offset-4">
              {showPricing ? "Jump to package prices" : "Jump to the launch checklist"}
            </a>
          </header>
          {guide.showLiveExamples && (
            <>
              <section id="launch-cta" className="space-y-4 rounded-xl border border-line bg-wash p-5">
                <LaunchTimeline />
                <DemoButton tierId={guide.offer.tierId} trackingPlacement={`${guide.slug}-top`}>Discuss the platform and admin tools</DemoButton>
              </section>
              <section id="live-examples" aria-labelledby="commerce-live-title" className="space-y-4">
                <h2 id="commerce-live-title" className="text-2xl font-semibold tracking-tight">See the live stores and shopping apps</h2>
                <p className="leading-relaxed text-ink-2">Browse the shopper experience below. For migration, warehouse rules, and integrations, ask for an admin walkthrough.</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {SHOWCASE_PROJECTS.slice(0, 2).map(project => (
                    <li key={project.id} className="space-y-3 rounded-xl border border-line bg-wash p-5">
                      <h3 className="font-semibold">{project.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Open the website</a>
                        {project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">View the Android app</a>}
                        {project.caseStudyUrl && <Link href={project.caseStudyUrl} className="underline underline-offset-4">Read the case study</Link>}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
          <nav aria-label="Article contents" className="space-y-3 rounded-xl border border-line p-5">
            <h2 className="font-semibold">In this guide</h2>
            <ol className="space-y-2 text-sm">
              {guide.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="underline underline-offset-4">{section.title}</a></li>)}
              {showPricing && <li><a href="#packages" className="underline underline-offset-4">Compare published package prices</a></li>}
              <li><a href="#launch-checklist" className="underline underline-offset-4">Launch checklist</a></li>
            </ol>
          </nav>
          {guide.sections.map(section => (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph} className="leading-relaxed text-ink-2">{paragraph}</p>)}
              {"bullets" in section && section.bullets && <ul className="list-disc space-y-2 pl-5 text-ink-2">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
              {section.id === guide.image.section && (
                <div className="space-y-3">
                  <div className={guideKey === "app" ? "mx-auto w-full max-w-56" : undefined}>
                    <Screenshot src={guide.image.src} alt={guide.image.alt} sizes={guideKey === "app" ? "224px" : "(min-width: 704px) 656px, calc(100vw - 48px)"} />
                  </div>
                  <Link href={guide.image.example.href} className="inline-block text-sm underline underline-offset-4">
                    {guide.image.example.label}
                  </Link>
                </div>
              )}
            </section>
          ))}
          {showPricing && (
            <section id="packages" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Compare published package prices</h2>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">E-commerce launch fees and optional source code licenses in US dollars</caption>
                  <thead className="bg-wash"><tr><th scope="col" className="p-3">Package</th><th scope="col" className="p-3">Launch</th><th scope="col" className="p-3">Optional license</th></tr></thead>
                  <tbody>
                    {packages.map(row => (
                      <tr key={row.launch} className="border-t border-line">
                        <th scope="row" className="p-3 font-medium"><Link href={row.href} className="underline underline-offset-4">{row.label}</Link></th>
                        <td className="whitespace-nowrap p-3">{displayPackagePrice(row.launch, "en-US")}</td>
                        <td className="whitespace-nowrap p-3">{displayPackagePrice(row.source, "en-US")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-ink-2">Prices are in US dollars. Budget separately for hosting, processing fees, and any custom work.</p>
            </section>
          )}
          <section id="launch-checklist" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight">Launch checklist</h2>
            <LaunchSteps steps={guide.checklist} compact />
          </section>
          <section className="space-y-4 rounded-2xl border border-line bg-wash p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Discuss your e-commerce launch</h2>
            <div className="flex flex-wrap items-center gap-4">
              <DemoButton tierId={guide.offer.tierId}>Request a walkthrough</DemoButton>
              <Link href={guide.offer.href} className="text-sm underline underline-offset-4">{guide.offer.label}</Link>
            </div>
          </section>
          <nav aria-label="Related guides and case studies" className="space-y-3 border-t border-line pt-6">
            <h2 className="text-lg font-semibold">Related reading</h2>
            <ul className="space-y-2 text-sm">{relatedLinks.map(({ href, label }) => <li key={href}><Link href={href} className="underline underline-offset-4">{label}</Link></li>)}</ul>
          </nav>
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Sources</h2>
            <ul className="space-y-2 text-sm">{guide.sources?.map(({ href, label }) => <li key={href}><a href={href} className="underline underline-offset-4">{label}</a></li>)}</ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
