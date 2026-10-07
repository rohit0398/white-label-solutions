import React from "react";
import { FAQS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

export function Faq() {
  return (
    <Section
      id="faq"
      index="05"
      title="Frequently asked questions"
      intro="Clear answers regarding hosting, code ownership, mobile apps and migration."
    >
      <div className="divide-y divide-line border-y border-line">
        {FAQS.map((faq, idx) => (
          <details key={idx} className="group py-5 text-sm cursor-pointer transition-colors">
            <summary className="flex items-center justify-between font-medium text-ink list-none focus:outline-none select-none hover:text-ink/75 active:scale-[0.99] transition-all">
              <span className="pr-4">{faq.q}</span>
              <span className="font-mono text-ink-3 transition-transform duration-200 group-open:rotate-45 shrink-0 text-base leading-none">
                +
              </span>
            </summary>
            <p className="mt-3.5 text-ink-2 leading-relaxed pr-6 text-[14px]">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
