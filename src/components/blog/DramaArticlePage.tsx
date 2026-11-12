import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShortDramaLiveAccess } from "@/components/sections/ShortDramaLiveAccess";
import { MicroDramaAppPreview } from "@/components/sections/MicroDramaAppPreview";
import { Screenshot } from "@/components/ui/Screenshot";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { buttonClass } from "@/components/ui/Button";
import { ContactWhatsAppLink } from "@/components/site/ContactForm";
import { DemoButton } from "@/components/site/DemoButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND } from "@/lib/constants";
import {
  DRAMA_ARTICLES,
  MICRO_DRAMA_APP_CHECKLIST_SLUG,
  MICRO_DRAMA_BUILDERS_SLUG,
  MICRO_DRAMA_LAUNCH_SLUG,
  MICRO_DRAMA_PUBLISHING_SLUG,
  MICRO_DRAMA_SOURCE_CODE_SLUG,
  dramaArticle,
} from "@/lib/content/short-drama-articles";
import { displayPackagePrice, packageAmount, type PackageId } from "@/lib/pricing-catalog";
import { SHORT_DRAMA_PACKAGES, type ShortDramaOffer } from "@/lib/short-drama-offers";
import { SITE_URL } from "@/lib/site-config";

const articleImage = "/showcase/microdrama-catalog.webp";
const updated = "2026-11-10";
const articleDateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });
const articleNextSteps: Partial<Record<string, {
  title: string;
  text: string;
  links: { href: string; label: string }[];
  offer?: ShortDramaOffer;
  whatsappMessage?: string;
}>> = {
  [MICRO_DRAMA_BUILDERS_SLUG]: {
    title: "Ask for a walkthrough with one series",
    text: "Tell us where viewers will watch and how you want to charge for episodes. We can show you the viewer and publishing flows for the package you’re considering.",
    links: [
      { href: SHORT_DRAMA_PATHS.platform, label: "Explore the white-label micro drama platform" },
      { href: `/blog/${MICRO_DRAMA_SOURCE_CODE_SLUG}`, label: "Read about source code and hosting" },
    ],
    whatsappMessage: "Hi, I read your micro drama app builders guide and would like to discuss a white-label launch.",
  },
  [MICRO_DRAMA_LAUNCH_SLUG]: {
    title: "Talk through your launch plan",
    text: "Tell us where viewers will find your series, which devices they use, and how you want to offer paid access. We can walk you through the package that fits your first release.",
    links: [
      { href: "/blog/short-drama-app-development-cost#packages", label: "Compare package prices" },
      { href: `/blog/${MICRO_DRAMA_BUILDERS_SLUG}`, label: "Compare white-label app builders" },
      { href: `/blog/${MICRO_DRAMA_APP_CHECKLIST_SLUG}`, label: "Use the iOS and Android launch checklist" },
    ],
    whatsappMessage: "Hi, I read your micro drama launch guide and would like help choosing between a website and mobile apps.",
  },
  [MICRO_DRAMA_SOURCE_CODE_SLUG]: {
    title: "Review the handover before choosing a package",
    text: "Tell us which platforms you plan to launch and who will maintain them. We can walk you through the accounts, deployment, and optional source code license for that package.",
    links: [{ href: SHORT_DRAMA_PATHS.platform, label: "Explore the complete Micro Drama platform" }],
    whatsappMessage: "Hi, I read your micro drama source code guide and would like to discuss hosting and the source code license.",
  },
  [MICRO_DRAMA_PUBLISHING_SLUG]: {
    title: "See how a series is published",
    text: "Tell us about a series you plan to launch. We can show how to add it to the admin panel, set free and VIP access, and check the result on the viewer side.",
    links: [{ href: SHORT_DRAMA_PATHS.platform, label: "See the platform and admin tools" }],
    whatsappMessage: "Hi, I read your micro drama publishing guide and would like to see the admin panel and publishing flow.",
  },
  [MICRO_DRAMA_APP_CHECKLIST_SLUG]: {
    title: "Review your iOS and Android launch plan",
    text: "Tell us which markets you plan to launch in, whether your store accounts are set up, and how viewers should get VIP access. We can discuss the app package and what you’ll need for submission.",
    links: [{ href: SHORT_DRAMA_PATHS.app, label: "Explore the iOS and Android app package" }],
    offer: "app",
    whatsappMessage: "Hi, I read your micro drama app launch checklist and would like help planning an iOS and Android release.",
  },
  "short-drama-app-development": {
    title: "Choose where viewers will watch",
    text: "Start with the format that fits your audience. Compare the app and website offers, or see how an entertainment studio launched its vertical player and publishing workflow.",
    links: [
      { href: `/blog/${MICRO_DRAMA_LAUNCH_SLUG}`, label: "Compare launching on web or apps first" },
      { href: `/blog/${MICRO_DRAMA_BUILDERS_SLUG}`, label: "Compare white-label and custom options" },
      { href: `/blog/${MICRO_DRAMA_PUBLISHING_SLUG}`, label: "See how to publish a series" },
      { href: SHORT_DRAMA_PATHS.app, label: "iOS and Android apps" },
      { href: SHORT_DRAMA_PATHS.web, label: "Short Drama website" },
      { href: "/case-studies/short-drama-platform", label: "Short Drama case study" },
    ],
  },
  "build-app-like-reelshort": {
    title: "Plan your first release",
    text: "Bring one series and the features you want viewers to try. We can help you scope a first release around your own catalog.",
    links: [
      { href: SHORT_DRAMA_PATHS.app, label: "Explore Short Drama app development" },
      { href: "/blog/short-drama-app-development-cost#packages", label: "Compare launch packages and prices" },
    ],
  },
  "build-app-like-dramabox": {
    title: "Test episode access with a sample series",
    text: "Bring a sample series and your proposed access rules. Ask to see how a free episode, a paid episode, and a failed purchase work in the app.",
    links: [{ href: "/blog/short-drama-monetization", label: "Compare Short Drama monetization models" }],
  },
  "short-drama-app-development-cost": {
    title: "Get an estimate for your launch",
    text: "Tell us which screens you need, the size of your starting catalog, and whether you need a source code license.",
    links: [
      { href: `${SHORT_DRAMA_PATHS.platform}#pricing`, label: "See complete platform pricing" },
      { href: `/blog/${MICRO_DRAMA_BUILDERS_SLUG}`, label: "Compare software providers" },
    ],
  },
  "short-drama-monetization": {
    title: "Try the viewer access flow",
    text: "Open the demo to see how viewers move from a free episode to VIP access. For coins or rewarded ads, ask which rules are available for your launch.",
    links: [{ href: "#live-demo", label: "Try the MicroDrama demo" }],
  },
};
const adminEpisodes = {
  src: "/showcase/microdrama-admin-episodes.webp",
  alt: "MicroDrama admin panel showing episode numbers, season, and publishing status",
};
const adminEpisodesWithCaption = { ...adminEpisodes, caption: "MicroDrama’s admin panel shows episode order and publishing status." };
const articleVisuals: Partial<Record<string, {
  previewSection?: string;
  screenshots?: Partial<Record<string, { src: string; alt: string; caption?: string }>>;
}>> = {
  [MICRO_DRAMA_BUILDERS_SLUG]: { screenshots: { "live-demo-checklist": adminEpisodesWithCaption } },
  [MICRO_DRAMA_PUBLISHING_SLUG]: {
    screenshots: {
      "create-a-series": {
        src: "/showcase/microdrama-admin-series.webp",
        alt: "MicroDrama series catalog showing artwork, series status, and the Add button",
      },
      "add-and-order-episodes": adminEpisodes,
      "feature-the-series": {
        src: "/showcase/microdrama-admin-home-sections.webp",
        alt: "MicroDrama Home Sections showing widget order, series counts, and status",
      },
    },
  },
  "short-drama-app-development": { previewSection: "viewer", screenshots: { operations: adminEpisodesWithCaption } },
  "build-app-like-reelshort": { previewSection: "mvp" },
  "build-app-like-dramabox": { screenshots: { operations: adminEpisodesWithCaption } },
  "short-drama-monetization": { screenshots: { vip: adminEpisodesWithCaption } },
};

export function articleMetadata(slug: string): Metadata {
  const article = dramaArticle(slug);
  const url = `/blog/${slug}`;
  const title = article.seoTitle ?? article.title;
  return { title, description: article.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description: article.description, url, images: [articleImage], publishedTime: article.datePublished, modifiedTime: article.dateModified },
    twitter: { card: "summary_large_image", title, description: article.description, images: [articleImage] },
  };
}

function PackageComparison() {
  const rows: { label: string; base: PackageId; source: PackageId; href: string }[] = [
    { label: "Apps, website and CMS", base: "short-drama-base", source: "short-drama-source-code", href: SHORT_DRAMA_PATHS.platform },
    { label: "Native apps + CMS", base: "short-drama-app-launch", source: "short-drama-app-source-code", href: SHORT_DRAMA_PATHS.app },
    { label: "Web player + CMS", base: "short-drama-web-launch", source: "short-drama-web-source-code", href: SHORT_DRAMA_PATHS.web },
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
  const { previewSection, screenshots } = articleVisuals[slug] ?? {};
  const nextStep = articleNextSteps[slug];
  const articleDate = article.dateModified ?? article.datePublished ?? updated;
  const whatsappUrl = nextStep?.whatsappMessage ? new URL(BRAND.contact.whatsappUrl) : undefined;
  if (whatsappUrl && nextStep?.whatsappMessage) whatsappUrl.searchParams.set("text", nextStep.whatsappMessage);
  const showPackageComparison = slug === "short-drama-app-development-cost" || slug === MICRO_DRAMA_BUILDERS_SLUG;
  return <div className="min-h-screen flex flex-col bg-paper text-ink">
    <JsonLd schema={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description,
      mainEntityOfPage: url, url, image: `${SITE_URL}${articleImage}`, inLanguage: "en",
      author: { "@type": "Organization", name: "Mechatron Lab Engineering Team", url: `${SITE_URL}/about` },
      publisher: { "@type": "Organization", name: "Mechatron Lab Solutions", url: SITE_URL },
      datePublished: article.datePublished, dateModified: articleDate }} />
    <JsonLd schema={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ] }} />
    <Navbar />
    <main className="flex-1 pt-14 sm:pt-10 pb-20">
      <article className="wrap space-y-12" lang="en">
        <header className="space-y-5">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-3 flex flex-wrap gap-2"><Link href="/blog" className="underline">Blog</Link><span>/</span><Link href={SHORT_DRAMA_PATHS.platform} className="underline">Short drama</Link></nav>
          <p className="text-xs font-mono uppercase tracking-wider text-accent">Guides for studios and founders</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">{article.title}</h1>
          <p className="text-sm text-ink-3">By <Link href="/about" className="underline">Mechatron Lab Engineering Team</Link> · {article.datePublished && !article.dateModified ? "Published" : "Updated"} <time dateTime={articleDate}>{articleDateFormat.format(new Date(articleDate))}</time></p>
          <p className="text-lg leading-relaxed text-ink-2">{article.intro}</p>
          <aside className="p-5 rounded-xl bg-wash border border-line"><p className="font-semibold mb-2">Before you start</p><p className="text-ink-2 leading-relaxed">{article.takeaway}</p></aside>
          {showPackageComparison && <a href="#packages" className="inline-block text-sm underline underline-offset-4">See packages and prices</a>}
        </header>
        <ShortDramaLiveAccess emphasis="both" landing />
        <nav aria-label="Article contents" className="rounded-xl border border-line p-5 space-y-3"><h2 className="font-semibold">In this guide</h2><ol className="space-y-2 text-sm text-ink-2">{article.sections.map(section => <li key={section.id}><a className="underline underline-offset-4" href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>
        {article.sections.map(({ id, ...section }) => <section key={id} id={id} className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
          {section.paragraphs.map((paragraph, i) => <p key={i} className="text-ink-2 leading-relaxed">{paragraph}</p>)}
          {section.options && (
            <ul className="divide-y divide-line rounded-xl border border-line bg-wash">
              {section.options.map(option => (
                <li key={option.href} className="space-y-2 p-5">
                  <h3 className="font-semibold">{option.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{option.text}</p>
                  <Link href={option.href} className="inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4">{option.linkLabel}</Link>
                </li>
              ))}
            </ul>
          )}
          {section.bullets && <ul className="list-disc pl-5 space-y-2 text-ink-2 leading-relaxed">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.builderComparison && (
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[36rem] text-left text-sm leading-relaxed">
                <caption className="sr-only">Micro drama app providers and what to verify</caption>
                <thead className="bg-wash"><tr>
                  <th scope="col" className="p-4">Provider</th>
                  <th scope="col" className="p-4">Published offering</th>
                  <th scope="col" className="p-4">What to verify</th>
                </tr></thead>
                <tbody>{section.builderComparison.map(row => (
                  <tr key={row.href} className="border-t border-line align-top">
                    <th scope="row" className="p-4 font-medium"><Link href={row.href} className="underline underline-offset-4">{row.name}</Link></th>
                    <td className="p-4 text-ink-2">{row.offering}</td>
                    <td className="p-4 text-ink-2">{row.verify}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {section.checklist && <LaunchSteps steps={section.checklist} compact />}
          {id === previewSection && (
            <div className="space-y-3">
              <p className="text-sm text-ink-3">MicroDrama’s mobile website shows how viewers browse the catalog and preview an episode.</p>
              <MicroDramaAppPreview animated={false} />
            </div>
          )}
          {screenshots?.[id] && (
            <Screenshot
              {...screenshots[id]}
              sizes="(min-width: 704px) 656px, calc(100vw - 48px)"
            />
          )}
        </section>)}
        {showPackageComparison && <PackageComparison />}
        {nextStep && <section className="space-y-4 rounded-2xl border border-line bg-wash p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">{nextStep.title}</h2>
          <p className="leading-relaxed text-ink-2">{nextStep.text}</p>
          <div className="flex flex-wrap items-center gap-4">
            <DemoButton tierId={SHORT_DRAMA_PACKAGES[nextStep.offer ?? "platform"]} trackingPlacement={nextStep.whatsappMessage ? slug : undefined}>Request a walkthrough</DemoButton>
            {whatsappUrl && (
              <ContactWhatsAppLink href={whatsappUrl.toString()} placement={slug} className={buttonClass("secondary")}>Chat on WhatsApp</ContactWhatsAppLink>
            )}
            {nextStep.links.map(({ href, label }) => <Link key={href} href={href} className="text-sm underline underline-offset-4">{label}</Link>)}
          </div>
        </section>}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sources and further reading</h2>
          {!article.datePublished && <p className="text-sm text-ink-3">App features and provider prices can change. The apps discussed here are independent of our product.</p>}
          <ul className="list-disc pl-5 space-y-2 text-sm">{article.sources.map(source => <li key={source.url}><a href={source.url} className="underline underline-offset-4">{source.title}</a></li>)}</ul>
        </section>
        <nav aria-label="Related short-drama guides" className="border-t border-line pt-8 space-y-4"><h2 className="text-xl font-semibold">More short-drama guides</h2><ul className="space-y-3">{DRAMA_ARTICLES.filter(item => item.slug !== slug).map(item => <li key={item.slug}><Link href={`/blog/${item.slug}`} className="text-ink-2 underline underline-offset-4">{item.title}</Link></li>)}</ul></nav>
      </article>
    </main><Footer />
  </div>;
}
