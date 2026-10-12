"use client";

import React from "react";
import Link from "next/link";
import { useSite } from "@/components/site/SiteProvider";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { MessageSquare } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SolutionAnchor {
  label: string;
  href: string;
}

export interface SolutionHeroProps {
  id?: string;
  breadcrumbs: BreadcrumbItem[];
  badge: string;
  headline: string;
  subtitle: string;
  anchors?: SolutionAnchor[];
  ctaDemoText?: string;
  tierId?: string;
  footerNote?: string;
}

export function SolutionHero({
  id = "hero",
  breadcrumbs,
  badge,
  headline,
  subtitle,
  anchors,
  ctaDemoText = "Book a Live Platform Walkthrough",
  tierId,
  footerNote = "Published under your developer accounts · Full source code option · Keep 100% of revenue",
}: SolutionHeroProps) {
  const { openDemo } = useSite();

  return (
    <section id={id} className="pt-16 sm:pt-28 pb-16 sm:pb-20">
      <div className="wrap space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span>/</span>}
              {b.href ? (
                <Link href={b.href} className="hover:text-ink transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-ink">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Ambient Active Status Beacon */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2 select-none shimmer-badge hover:border-ink/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span>{badge}</span>
        </div>

        {/* Primary Page Headline */}
        <AnimatedHeadline
          as="h1"
          className="text-[2.3rem] sm:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.06] max-w-4xl text-ink"
        >
          {headline}
        </AnimatedHeadline>

        {/* Subtitle / Value Proposition */}
        <p className="text-lg sm:text-xl text-ink-2 leading-relaxed max-w-3xl">
          {subtitle}
        </p>

        {/* Living Platform Anchors with Micro-Animations */}
        {anchors && anchors.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-ink-2">
            {anchors.map((a, idx) => (
              <a
                key={idx}
                href={a.href}
                className={`${
                  idx % 2 === 0 ? "animate-float-slow" : "animate-float-reverse"
                } px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs`}
              >
                {a.label}
              </a>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            size="md"
            onClick={() => openDemo(tierId)}
            className="animate-pulse-ink hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.96] transition-all duration-200"
          >
            <span>{ctaDemoText}</span>
            <span className="text-paper/70 font-mono text-xs">→</span>
          </Button>

          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-[15px] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0 active:scale-[0.96] transition-all duration-200 animate-pulse-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
          </a>
        </div>

        {/* Quality Assurances / Footer Note */}
        {footerNote && (
          <p className="pt-4 text-xs font-mono text-ink-3">
            {footerNote}
          </p>
        )}
      </div>
    </section>
  );
}
