"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export interface FaqProps {
  id?: string;
  index?: string;
  title?: string;
  intro?: string;
  items?: { q: string; a: string }[];
}

export function Faq({ id = "faq", index, title, intro, items }: FaqProps = {}) {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const activeItems = items || t.faq.items;
  const activeIndex = index !== undefined ? index : t.faq.index;
  const activeTitle = title || t.faq.title;
  const activeIntro = intro !== undefined ? intro : t.faq.intro;

  return (
    <Section
      id={id}
      index={activeIndex}
      title={activeTitle}
      intro={activeIntro}
    >
      <div className="divide-y divide-line border-y border-line">
        {activeItems.map((faq, idx) => (
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
