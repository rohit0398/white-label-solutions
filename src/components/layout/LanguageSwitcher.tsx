"use client";

import React from "react";
import { LANGUAGES } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { Language } from "@/types";

export function LanguageSwitcher() {
  const { language, setLanguage } = useSite();
  return (
    <label className="inline-flex items-center gap-2 text-sm text-ink-3">
      <span>Language</span>
      <select
        id="footer-language"
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-transparent text-ink-2 hover:text-ink border-b border-line focus:outline-none focus:border-ink py-0.5 cursor-pointer"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
