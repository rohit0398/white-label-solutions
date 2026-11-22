import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { ContactWhatsAppLink } from "@/components/site/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ScreenshotGallery } from "@/components/ui/ScreenshotGallery";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { ShortDramaCardRail } from "@/components/sections/ShortDramaCardRail";
import { additionalPlatform } from "@/lib/content/additional-platforms";
import { ADDITIONAL_PLATFORM_GUIDE_SLUGS, SOLUTIONS_CATALOG_PATH, OTHER_PLATFORMS_HREF, type AdditionalPlatformId } from "@/lib/additional-platform-paths";
import { additionalPlatformSchema } from "@/lib/additional-platform-seo";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/schema";
import { BRAND } from "@/lib/constants";
import { SITE_URL } from "@/lib/site-config";

export default function AdditionalPlatformPage({ id }: { id: AdditionalPlatformId }) {
  const platform = additionalPlatform(id);
  const whatsappUrl = new URL(BRAND.contact.whatsappUrl);
  whatsappUrl.searchParams.set("text", `Hi, I’d like a walkthrough and quote for ${platform.title}.`);
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink" data-page-family={id}>
      <JsonLd schema={additionalPlatformSchema(id)} />
      <JsonLd schema={generateBreadcrumbSchema(SITE_URL, [{ name: "Home", item: "/" }, { name: "Solutions", item: SOLUTIONS_CATALOG_PATH }, { name: platform.title, item: platform.path }])} />
      <JsonLd schema={generateFaqSchema(platform.faqs)} />
      <Navbar />
      <main className="flex-1">
        <section className="wrap-wide grid items-center gap-10 py-16 sm:py-24 lg:min-h-[640px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-ink-3"><Link href={SOLUTIONS_CATALOG_PATH} className="inline-flex min-h-11 items-center hover:text-ink">Solutions</Link><span aria-hidden="true" className="mx-2">/</span><span>{platform.title}</span></nav>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">White-label software</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">{platform.heading}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">{platform.intro}</p>
            <p className="mt-4 text-sm text-ink-3">Built for {platform.audience.charAt(0).toLowerCase() + platform.audience.slice(1)}.</p>
            <p className="mt-6 font-semibold">Price on request</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <DemoButton tierId={id} trackingPlacement={`${id}-hero`}>Request a walkthrough</DemoButton>
              <a href="#live-demo" className={buttonClass("secondary")}>See the examples<ArrowRight aria-hidden="true" className="ml-2 size-4" /></a>
            </div>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-line bg-wash shadow-xl">
            <Image src={platform.image} alt={`${platform.reference} ${platform.title} interface`} fill sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw" preload className="object-contain" />
          </div>
        </section>

        <Section id="live-demo" title={platform.demos.length ? "Try the live demo" : "See the platform in a walkthrough"} intro={platform.demoIntro} wide>
          {platform.demos.length > 0 && <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{platform.demos.map(demo => <li key={demo.href}><a href={demo.href} target="_blank" rel="noopener noreferrer" className="flex h-full min-h-16 items-center justify-between gap-5 rounded-xl border border-line bg-wash/40 p-5 text-sm font-medium transition-colors hover:border-ink-3">{demo.label}<ArrowRight aria-hidden="true" className="size-4 shrink-0" /></a></li>)}</ul>}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <DemoButton tierId={id} variant="secondary" trackingPlacement={`${id}-demo`}>Request a guided demo</DemoButton>
            <ContactWhatsAppLink placement={`${id}-demo`} href={whatsappUrl.toString()} className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4"><MessageSquare aria-hidden="true" className="size-4" />Ask on WhatsApp</ContactWhatsAppLink>
          </div>
        </Section>

        <Section id="features" title="Features" wide>
          <ShortDramaCardRail label="Platform features" desktopColumns="md:grid-cols-2 lg:grid-cols-3">{platform.features.map(feature => <li key={feature.title} className="rounded-xl border border-line bg-wash/30 p-5 sm:p-6"><Check aria-hidden="true" className="mb-4 size-5 text-accent" /><h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-2">{feature.text}</p></li>)}</ShortDramaCardRail>
        </Section>

        <section aria-label="Platform screens and workflows" className="border-t border-line py-20 sm:py-28"><div className="wrap-wide space-y-24 sm:space-y-36">
          {platform.modules.map(module => <div id={module.id} key={module.id} className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"><div><h2 className="text-3xl font-semibold leading-tight tracking-tight">{module.title}</h2><p className="mt-5 leading-relaxed text-ink-2">{module.text}</p><ul className="mt-5 space-y-3">{module.points.map(point => <li key={point} className="flex gap-3 text-sm"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{point}</li>)}</ul></div><div className="min-w-0"><ScreenshotGallery label={module.title} images={module.images} portrait={module.portrait} previousLabel="Previous screenshot" nextLabel="Next screenshot" /></div></div>)}
        </div></section>

        <Section id="workflow" title="How the platform works" wide><LaunchSteps steps={platform.workflow} /></Section>
        <Section id="launch" title="Plan the launch around the business" intro="Start with a walkthrough of the existing product. We agree the scope, branding, integrations, and delivery plan before work starts." wide>
          <LaunchSteps compact steps={[
            { title: "Review the product", text: "Walk through the relevant screens and roles with the people who will use them. Confirm the workflows and builds needed for launch." },
            { title: "Agree the scope and quote", text: "List branding, integrations, hosting, release work, support, and any source-code licensing in the proposal. Pricing and delivery dates follow that scope." },
            { title: "Configure and test", text: "Prepare the agreed branding and accounts, test the business workflows, and review access permissions with the team." },
            { title: "Deploy and hand over", text: "Complete the agreed release checks and handover. Third-party service fees, ongoing support, and additional changes are confirmed in the proposal." },
          ]} />
        </Section>
        <Section id="faq" title="Questions before the launch" wide><div className="divide-y divide-line">{platform.faqs.map(faq => <details key={faq.q} className="group py-5"><summary className="cursor-pointer text-lg font-medium">{faq.q}</summary><p className="mt-3 max-w-3xl leading-relaxed text-ink-2">{faq.a}</p></details>)}</div></Section>
        <Section id="pricing" title="Discuss the scope and get a quote" intro="Price on request. Tell us the platform, target market, workflows, and integrations you need." wide>
          <div className="flex flex-wrap gap-3"><DemoButton tierId={id} trackingPlacement={`${id}-quote`}>Request a quote</DemoButton><ContactWhatsAppLink placement={`${id}-quote`} href={whatsappUrl.toString()} className={buttonClass("secondary")}>Talk on WhatsApp</ContactWhatsAppLink></div>
          <Link href={OTHER_PLATFORMS_HREF} className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">Explore the other platforms<ArrowRight aria-hidden="true" className="size-4" /></Link>
          <Link href={`/blog/${ADDITIONAL_PLATFORM_GUIDE_SLUGS[id]}`} className="mt-3 flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">Read the {platform.title.toLowerCase()} launch guide<ArrowRight aria-hidden="true" className="size-4" /></Link>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
