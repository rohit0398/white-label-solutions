import React from "react";
import Link from "next/link";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

const linkCls = "text-ink underline underline-offset-4 decoration-line hover:decoration-ink";

export function Work() {
  return (
    <Section
      id="work"
      index="03"
      title="Stores running on it today"
      intro="Three businesses in different industries, each on its own cloud account."
    >
      <ul className="border-t border-line">
        {SHOWCASE_PROJECTS.map((p) => (
          <li
            key={p.id}
            className="py-8 border-b border-line grid gap-5 sm:grid-cols-[1fr_11rem] sm:gap-8 sm:items-start"
          >
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <span className="text-sm text-ink-3">{p.industry}</span>
              </div>
              <p className="mt-2 text-ink-2 leading-relaxed">{p.description}</p>
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {p.url.replace("https://", "")} ↗
                </a>
                {p.playStoreUrl && (
                  <a href={p.playStoreUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    Android app ↗
                  </a>
                )}
                {p.caseStudyUrl && (
                  <Link href={p.caseStudyUrl} className={linkCls}>
                    Case study →
                  </Link>
                )}
              </p>
            </div>
            {p.screenshotUrl && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block overflow-hidden rounded-md border border-line bg-wash"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.screenshotUrl}
                  alt=""
                  loading="lazy"
                  className="block w-full aspect-[16/10] object-cover object-top"
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
