import React from "react";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    when: "Day 1",
    title: "A 30-minute call",
    text: "We look at your catalogue, payment needs and target markets, and agree on scope and price.",
  },
  {
    when: "Week 1",
    title: "We brand it",
    text: "Your logo, colours, domain, payment gateways and tax rules. We import your products if you have them.",
  },
  {
    when: "Week 2–3",
    title: "We deploy to your cloud",
    text: "Everything is installed in your AWS, Google Cloud or Azure account, and the apps go to the stores under your name.",
  },
  {
    when: "After launch",
    title: "You take over",
    text: "You get the admin passwords, server keys and documentation, plus 30 days of support from us.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" index="02" title="How it works">
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
