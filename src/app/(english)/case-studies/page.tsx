import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { CASE_STUDIES, CASE_STUDIES_PATH } from "@/lib/content/case-studies";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

const title = "E-commerce, Short Drama & OTT Case Studies";
const description = "See what we built for online retailers, a short drama studio, and a broadcaster, with storefronts, app listings, and product demos to explore.";
const images = [CASE_STUDIES.electronics.image];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: CASE_STUDIES_PATH },
  openGraph: { title, description, url: CASE_STUDIES_PATH, images },
  twitter: { card: "summary_large_image", title, description, images },
};

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <JsonLd schema={generateBreadcrumbSchema(SITE_URL, [
        { name: "Home", item: "/" },
        { name: "Case studies", item: CASE_STUDIES_PATH },
      ])} />
      <Navbar />
      <main className="wrap-wide flex-1 pb-16 pt-8 sm:pb-24 sm:pt-12">
        <header className="mb-8 max-w-3xl sm:mb-10">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Case studies</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
            See how teams built short drama apps, streaming services, and online stores. Each study explains what the team needed, what we built, and what they could do with it.
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2">
          {Object.entries(CASE_STUDIES).map(([id, study]) => (
            <li key={study.path}>
              <Link href={study.path} aria-labelledby={`study-${id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-wash transition-colors hover:border-ink-3">
                <div className="relative aspect-video overflow-hidden border-b border-line bg-paper">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(min-width: 1088px) 510px, (min-width: 640px) calc(50vw - 34px), calc(100vw - 48px)"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-sm text-ink-3">
                    {study.category}{"previewLabel" in study && ` · ${study.previewLabel}`}
                  </p>
                  <h2 id={`study-${id}`} className="mt-1 text-xl font-semibold tracking-tight">{study.title}</h2>
                  <p className="mb-4 mt-2 text-sm leading-relaxed text-ink-2">{study.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium group-hover:underline group-hover:underline-offset-4">
                    Read case study <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
