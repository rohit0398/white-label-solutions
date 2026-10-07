import React from "react";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    when: "Day 1",
    title: "Discovery & Scope Call",
    text: "A 30-minute call to review your catalogue, payment gateways, regional tax requirements, and cloud preferences.",
  },
  {
    when: "Week 1",
    title: "Branding & Storefront Customization",
    text: "Your logo, brand fonts, colors, custom domain, and tax calculation rules are applied. We import your existing product catalogues.",
  },
  {
    when: "Week 2–3",
    title: "Private Cloud Deployment & App Builds",
    text: "Everything is deployed directly to your private AWS, GCP, or Azure account. Flutter mobile applications are built and tested for iOS and Android.",
  },
  {
    when: "Week 3–4",
    title: "App Store Publishing & Production Handover",
    text: "Apps are submitted to Apple App Store and Google Play under your corporate developer accounts. You receive all master server keys, database access, and 100% source code.",
  },
  {
    when: "After launch",
    title: "30-Day Engineering Warranty",
    text: "You retain full independence with 0% platform cuts, backed by 30 days of dedicated engineering warranty and setup support.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" index="02" title="How it works">
      <div className="mb-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash/60 text-xs font-mono text-ink-2 shadow-2xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span>Turnkey Delivery Guarantee: Live in 2–4 weeks</span>
      </div>

      <ol className="relative border-l border-line ml-1 space-y-12">
        {steps.map((s) => (
          <li key={s.title} className="pl-8 relative">
            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-paper border border-ink" />
            <p className="font-mono text-xs text-ink-3">{s.when}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-ink-2 leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
