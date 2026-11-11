import type { Metadata } from "next";
import { Closing } from "@/components/sections/Closing";
import { Faq } from "@/components/sections/Faq";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomePlatformsDeck } from "@/components/sections/HomePlatformsDeck";
import { HomePricing } from "@/components/sections/HomePricing";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { Section } from "@/components/ui/Section";
import { ALL_HOME_SHOWCASE_PROJECTS } from "@/lib/constants";
import { getLocaleMessages } from "@/lib/locale-messages";
import { createLocalizer, englishMessage } from "@/lib/messages";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/schema";
import { languageAlternates, localizedPath, SITE_URL } from "@/lib/site-config";
import { LOCALIZED_SEO } from "@/lib/translations/seo";
import type { Language } from "@/types";

const { title, description, ogLocale } = LOCALIZED_SEO.en;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/", languages: languageAlternates("/") },
  openGraph: { title, description, url: "/", siteName: "Mechatron Lab Solutions", locale: ogLocale, type: "website", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

const launchSteps = [
  { title: englishMessage("HomeRollout.choose.title"), text: englishMessage("HomeRollout.choose.text") },
  { title: englishMessage("HomeRollout.prepare.title"), text: englishMessage("HomeRollout.prepare.text") },
  { title: englishMessage("ShortDramaRollout.review.title"), text: englishMessage("HomeRollout.review") },
  { title: englishMessage("ShortDramaRollout.launch.title"), text: englishMessage("HomeRollout.launch") },
];

export default function HomePage({ language = "en" }: { language?: Language }) {
  const translateCopy = createLocalizer(language, getLocaleMessages(language));
  const estimate = englishMessage("HomeRollout.estimate");
  const storeReview = englishMessage("ShortDramaRollout.storeReview");
  const faqs = translateCopy([
    {
      q: englishMessage("home.what.types.of.software.platforms.can.you.dep.c2835b7"),
      a: englishMessage("HomeChooser.intro"),
    },
    {
      q: englishMessage("home.where.is.the.software.hosted.618b963"),
      a: englishMessage("home.everything.is.deployed.directly.to.your.own.37a28aa"),
    },
    {
      q: englishMessage("home.do.you.take.any.percentage.or.commission.fro.82af2f9"),
      a: englishMessage("constants.no.you.pay.once.for.the.setup.and.then.only.ea16151"),
    },
    {
      q: englishMessage("home.can.i.buy.only.the.mobile.apps.or.only.the.w.0a48b5a"),
      a: englishMessage("HomePricing.packageChoice"),
    },
    {
      q: englishMessage("HomePricing.licenseQuestion"),
      a: englishMessage("HomePricing.licenseAnswer"),
    },
    {
      q: englishMessage("home.how.fast.can.we.launch.faefa06"),
      a: translateCopy(estimate) + " " + translateCopy(storeReview),
    },
  ]);

  return (
    <div data-page-family="home" data-page-template="shared" className="flex min-h-screen flex-col bg-paper text-ink">
      <JsonLd schema={generateBreadcrumbSchema(SITE_URL, [
        { name: translateCopy(englishMessage("ecommerce.home.70f8bb9")), item: localizedPath("/", language) },
      ])} />
      <JsonLd schema={generateFaqSchema(faqs)} />

      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <HomePlatformsDeck />
        <TechStackStrip
          mode="home"
          wide
          headline={englishMessage("HomeRollout.techTitle")}
          subheadline={englishMessage("HomeRollout.cloud")}
        />
        <Work id="work" index="" title={englishMessage("HomeProof.projects")} intro="" projects={ALL_HOME_SHOWCASE_PROJECTS} wide />
        <Section id="how-it-works" title={englishMessage("HomeRollout.title")} intro={estimate} wide>
          <LaunchSteps steps={translateCopy(launchSteps)} />
          <p className="mt-5 text-sm leading-relaxed text-ink-2">{translateCopy(storeReview)}</p>
        </Section>
        <HomePricing />
        <Faq id="faq" index="" title={englishMessage("home.frequently.asked.questions.d790b40")} items={faqs} />
        <Closing
          headline={englishMessage("home.ready.to.launch.on.your.own.private.cloud.b2ee231")}
          description={englishMessage("HomeRollout.closing")}
          ctaDemo={englishMessage("HomeHero.book.a.platform.walkthrough.b209190")}
        />
      </main>
      <Footer />
    </div>
  );
}
