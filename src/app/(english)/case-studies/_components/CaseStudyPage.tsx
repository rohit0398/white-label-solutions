import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { Screenshot } from "@/components/ui/Screenshot";
import { CASE_STUDIES_PATH, type CaseStudy } from "@/lib/content/case-studies";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

export function caseStudyMetadata({ title, description, path, image }: CaseStudy): Metadata {
  const pageTitle = `${title} | Case Study`;
  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: { title: pageTitle, description, url: path, images: [image] },
    twitter: { card: "summary_large_image", title: pageTitle, description, images: [image] },
  };
}

interface CaseStudyPageProps {
  study: CaseStudy;
  challenge: string;
  actions: ReactNode;
  features: { title: string; description: string }[];
  outcome: string;
  children?: ReactNode;
  nextStep: {
    title: string;
    description: string;
    packageId: string;
    solution: { href: string; label: string };
    guide: { href: string; label: string };
  };
}

export function CaseStudyPage({ study, challenge, actions, features, outcome, children, nextStep }: CaseStudyPageProps) {
  const breadcrumb = generateBreadcrumbSchema(SITE_URL, [
    { name: "Home", item: "/" },
    { name: "Case studies", item: CASE_STUDIES_PATH },
    { name: study.title, item: study.path },
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumb} />
      <Navbar />
      <main className="flex-1 space-y-12 pb-16 pt-8 sm:space-y-16 sm:pb-24 sm:pt-12">
        <header className="wrap-wide">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-x-2 text-sm text-ink-3">
            <Link href="/" className="py-1 hover:text-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={CASE_STUDIES_PATH} className="py-1 hover:text-ink">Case studies</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">{study.category}</span>
          </nav>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{study.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">{challenge}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>
        </header>

        <div className="wrap-wide">
          <Screenshot src={study.image} alt={study.alt} caption={study.caption} priority sizes="(min-width: 1088px) 1040px, calc(100vw - 48px)" />
        </div>

        <section className="wrap-wide" aria-labelledby="what-we-built">
          <h2 id="what-we-built" className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">What we built</h2>
          <dl className="grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="border-t border-line p-5 first:border-t-0 sm:p-6 sm:even:border-l sm:nth-2:border-t-0">
                <dt className="font-semibold">{feature.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight">Project outcome</h2>
            <p className="mt-2 leading-relaxed text-ink-2">{outcome}</p>
          </div>
        </section>

        {children}

        <section className="wrap-wide">
          <div className="rounded-2xl border border-line bg-wash p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">{nextStep.title}</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{nextStep.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <DemoButton tierId={nextStep.packageId}>Book a walkthrough</DemoButton>
              <Link href={nextStep.solution.href} className={buttonClass("secondary")}>{nextStep.solution.label}</Link>
            </div>
            <Link href={nextStep.guide.href} className="mt-4 inline-flex min-h-11 items-center text-sm text-ink-2 underline underline-offset-4 hover:text-ink">
              {nextStep.guide.label}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
