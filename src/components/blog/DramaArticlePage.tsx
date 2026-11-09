import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShortDramaLiveAccess } from "@/components/sections/ShortDramaLiveAccess";
import { MicroDramaAppPreview } from "@/components/sections/MicroDramaAppPreview";
import { Screenshot } from "@/components/ui/Screenshot";
import { DemoButton } from "@/components/site/DemoButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { DRAMA_ARTICLES, dramaArticle } from "@/lib/content/short-drama-articles";
import { displayPackagePrice, packageAmount, type PackageId } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";

const articleImage = "/showcase/microdrama-catalog.webp";
const articleVisuals: Partial<Record<string, { previewSection?: string; adminSection?: string }>> = {
  "short-drama-app-development": { previewSection: "viewer", adminSection: "operations" },
  "build-app-like-reelshort": { previewSection: "mvp" },
  "build-app-like-dramabox": { adminSection: "operations" },
  "short-drama-monetization": { adminSection: "vip" },
};

export function articleMetadata(slug: string): Metadata {
  const article = dramaArticle(slug);
  const url = `/blog/${slug}`;
  return { title: `${article.title} | Mechatron Lab`, description: article.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.title, description: article.description, url, images: [articleImage] },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [articleImage] },
  };
}

function PackageComparison() {
  const rows: { label: string; base: PackageId; source: PackageId; href: string }[] = [
    { label: "Apps, website and CMS", base: "short-drama-base", source: "short-drama-source-code", href: "/solutions/short-drama" },
    { label: "Native apps + CMS", base: "short-drama-app-launch", source: "short-drama-app-source-code", href: "/solutions/short-drama-app-development" },
    { label: "Web player + CMS", base: "short-drama-web-launch", source: "short-drama-web-source-code", href: "/solutions/short-drama-website-development" },
  ];
  return <section id="packages" className="space-y-4">
    <h2 className="text-2xl font-semibold">Compare our published launch packages</h2>
    <p className="text-ink-2 leading-relaxed">Prices below are in US dollars. Source code is an optional extra. Content, hosting, streaming fees and custom changes are charged separately.</p>
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full text-left text-sm"><caption className="sr-only">Short-drama deployment and optional source-code prices in USD</caption>
        <thead className="bg-wash"><tr>{["Offer", "Deployment", "Source add-on", "Combined"].map(label => <th key={label} scope="col" className="p-4 font-semibold">{label}</th>)}</tr></thead>
        <tbody>{rows.map(row => <tr key={row.base} className="border-t border-line"><th scope="row" className="p-4 font-medium"><Link href={row.href} className="underline underline-offset-4">{row.label}</Link></th>
          <td className="p-4 whitespace-nowrap">{displayPackagePrice(row.base, "en-US")}</td>
          <td className="p-4 whitespace-nowrap">{displayPackagePrice(row.source, "en-US")}</td>
          <td className="p-4 whitespace-nowrap">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(packageAmount(row.base) + packageAmount(row.source))}</td>
        </tr>)}</tbody>
      </table>
    </div>
    <p className="text-sm text-ink-3">Each package includes 30 days of support after launch. We’ll confirm source-code access, any extra features and ongoing support in your proposal.</p>
  </section>;
}

export default function DramaArticlePage({ slug }: { slug: string }) {
  const article = dramaArticle(slug);
  const url = `${SITE_URL}/blog/${slug}`;
  const { previewSection, adminSection } = articleVisuals[slug] ?? {};
  return <div className="min-h-screen flex flex-col bg-paper text-ink">
    <JsonLd schema={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description,
      mainEntityOfPage: url, url, image: `${SITE_URL}${articleImage}`, inLanguage: "en",
      author: { "@type": "Organization", name: "Mechatron Lab Engineering Team", url: `${SITE_URL}/about` },
      publisher: { "@type": "Organization", name: "Mechatron Lab Solutions", url: SITE_URL }, dateModified: "2026-11-02" }} />
    <JsonLd schema={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ] }} />
    <Navbar />
    <main className="flex-1 pt-14 sm:pt-10 pb-20">
      <article className="wrap space-y-12" lang="en">
        <header className="space-y-5">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-3 flex flex-wrap gap-2"><Link href="/blog" className="underline">Blog</Link><span>/</span><Link href="/solutions/short-drama" className="underline">Short drama</Link></nav>
          <p className="text-xs font-mono uppercase tracking-wider text-accent">Guides for studios and founders</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">{article.title}</h1>
          <p className="text-sm text-ink-3">By <Link href="/about" className="underline">Mechatron Lab Engineering Team</Link> · Updated <time dateTime="2026-11-02">2 November 2026</time></p>
          <p className="text-lg leading-relaxed text-ink-2">{article.intro}</p>
          <aside className="p-5 rounded-xl bg-wash border border-line"><p className="font-semibold mb-2">Before you start</p><p className="text-ink-2 leading-relaxed">{article.takeaway}</p></aside>
          <div className="flex flex-wrap gap-4 text-sm"><a href="#live-demo" className="underline underline-offset-4">Try our web, iOS and Android demos</a><a href="#packages" className="underline underline-offset-4">See packages and prices</a></div>
        </header>
        <nav aria-label="Article contents" className="rounded-xl border border-line p-5 space-y-3"><h2 className="font-semibold">In this guide</h2><ol className="space-y-2 text-sm text-ink-2">{article.sections.map(section => <li key={section.id}><a className="underline underline-offset-4" href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>
        {article.sections.map((section, index) => <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
          {section.paragraphs.map((paragraph, i) => <p key={i} className="text-ink-2 leading-relaxed">{paragraph}</p>)}
          {section.bullets && <ul className="list-disc pl-5 space-y-2 text-ink-2 leading-relaxed">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.id === previewSection && (
            <div className="space-y-3">
              <p className="text-sm text-ink-3">MicroDrama’s mobile website shows how viewers browse the catalog and preview an episode.</p>
              <MicroDramaAppPreview animated={false} />
            </div>
          )}
          {section.id === adminSection && (
            <Screenshot
              src="/showcase/microdrama-admin-episodes.webp"
              alt="Mechatron Lab MicroDrama episode list and publishing status"
              sizes="(min-width: 704px) 656px, calc(100vw - 48px)"
              caption="MicroDrama’s admin panel shows episode order and publishing status."
            />
          )}
          {index === 1 && <div className="pt-5"><ShortDramaLiveAccess emphasis="both" landing /></div>}
        </section>)}
        <PackageComparison />
        <section className="rounded-2xl border border-line bg-wash p-6 sm:p-8 space-y-4"><h2 className="text-2xl font-semibold">Tell us about your short-drama app</h2><p className="text-ink-2 leading-relaxed">Tell us who you want to reach, whether you have your dramas ready, and whether you need a website, mobile apps or both. We’ll explain what’s included and what would need extra work.</p><div className="flex flex-wrap gap-4 items-center"><DemoButton tierId="short-drama">Request a demo</DemoButton><Link href="/solutions/short-drama" className="text-sm underline">Explore the short drama platform</Link></div></section>
        <section className="space-y-4"><h2 className="text-xl font-semibold">Sources and further reading</h2><p className="text-sm text-ink-3">Sources checked on 2 November 2026. App features and provider prices can change. Brand names are used as references; our product is not affiliated with them.</p><ul className="list-disc pl-5 space-y-2 text-sm">{article.sources.map(source => <li key={source.url}><a href={source.url} className="underline underline-offset-4">{source.title}</a></li>)}</ul></section>
        <nav aria-label="Related short-drama guides" className="border-t border-line pt-8 space-y-4"><h2 className="text-xl font-semibold">More short-drama guides</h2><ul className="space-y-3">{DRAMA_ARTICLES.filter(item => item.slug !== slug).map(item => <li key={item.slug}><Link href={`/blog/${item.slug}`} className="text-ink-2 underline underline-offset-4">{item.title}</Link></li>)}</ul></nav>
      </article>
    </main><Footer />
  </div>;
}
