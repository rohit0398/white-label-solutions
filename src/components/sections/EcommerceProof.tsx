"use client";

import { ArrowUpRight } from "lucide-react";
import { useMessages } from "@/components/site/useMessages";
import Link from "@/components/ui/LocalizedLink";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { englishMessage } from "@/lib/messages";

const linkClass = "inline-flex min-h-8 items-center gap-1.5 text-sm font-medium underline underline-offset-4";

export function EcommerceProof({ offer = "all" }: { offer?: "all" | "app" | "web" }) {
  const translate = useMessages();
  const appsOnly = offer === "app";
  const projects = appsOnly ? SHOWCASE_PROJECTS.filter(project => project.playStoreUrl) : SHOWCASE_PROJECTS;

  return (
    <section id="work" aria-labelledby="live-stores-title" className="wrap-wide pb-12 sm:pb-16">
      <div className="space-y-4 rounded-xl border border-line bg-wash/50 p-5 sm:p-7">
        <h2 id="live-stores-title" className="text-xl font-semibold tracking-tight">
          {translate(appsOnly ? englishMessage("EcommerceProof.appTitle") : englishMessage("EcommerceProof.title"))}
        </h2>
        <ul className={appsOnly ? "grid gap-3 sm:grid-cols-2" : "grid gap-3 sm:grid-cols-3"}>
          {projects.map((project) => (
            <li key={project.id} className="min-w-0 rounded-lg border border-line bg-paper p-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-ink-2">{translate(project.industry)}</p>
              <div className="mt-2 flex flex-wrap gap-x-3">
                {!appsOnly && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {translate(englishMessage("EcommerceProof.openStore"))}
                    <ArrowUpRight aria-hidden="true" className="size-3 shrink-0" />
                  </a>
                )}
                {offer !== "web" && project.playStoreUrl && (
                  <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {translate(englishMessage("Work.google.play.store.4afdf34"))}
                    <ArrowUpRight aria-hidden="true" className="size-3 shrink-0" />
                  </a>
                )}
                {project.caseStudyUrl && <Link href={project.caseStudyUrl} className={linkClass}>{englishMessage("EcommerceProof.caseStudy")}</Link>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
