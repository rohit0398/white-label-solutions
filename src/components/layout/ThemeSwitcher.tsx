"use client";
import { useMessages } from "@/components/site/useMessages";

import React from "react";
import { useSite } from "@/components/site/SiteProvider";
import { INTERFACE_COPY } from "@/lib/translations/interface";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const translateCopy = useMessages();

  const { theme, toggleTheme, language } = useSite();

  const ui = INTERFACE_COPY[language];
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-3 hover:text-ink transition-colors cursor-pointer select-none"
      title={translateCopy(theme === "dark" ? ui.light : ui.dark)}
    >
      {translateCopy(theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />)}
      <span>{translateCopy(theme === "dark" ? ui.light : ui.dark)}</span>
    </button>
  );
}
