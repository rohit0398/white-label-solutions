"use client";
import { useMessages } from "@/components/site/useMessages";

import Link from "@/components/ui/LocalizedLink";
import { usePathname } from "next/navigation";
import { localizedPath, basePath, LOCALIZED_PATHS, type LocalizedPath } from "@/lib/site-config";
import React, { useState, useRef, useEffect } from "react";
import { INTERFACE_COPY } from "@/lib/translations/interface";
import { LANGUAGES } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { Globe, ChevronDown, Check } from "lucide-react";

export function LanguageSwitcher() {
  const translateCopy = useMessages();

  const { language } = useSite();
  const pathname = usePathname();
  const ui = INTERFACE_COPY[language];
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!LOCALIZED_PATHS.includes(basePath(pathname || "/") as LocalizedPath)) {
    return <span className="text-xs text-ink-2" lang="en">English</span>;
  }

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        id="footer-language-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={translateCopy(currentLang?.label || "English")}
        className="inline-flex items-center gap-1.5 px-2.5 py-2.5 rounded-md border border-line bg-wash/50 hover:bg-wash hover:border-ink/30 text-xs font-mono text-ink-2 hover:text-ink transition-all cursor-pointer select-none"
      >
        <Globe className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
        <span className="font-medium text-ink">{translateCopy(currentLang?.label || "English")}</span>
        <ChevronDown
          className={`h-3 w-3 text-ink-3 transition-transform duration-200 ${
            open ? "rotate-180 text-ink" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="navigation"
          aria-label={translateCopy(ui.language)}
          className="absolute bottom-full mb-2 right-0 z-50 w-36 rounded-xl border border-line bg-paper/98 backdrop-blur-md p-1.5 shadow-xl space-y-0.5 animate-fade-in"
        >
          <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-ink-3 select-none">
            {ui.language}
          </div>
          {LANGUAGES.map((l) => {
            const isSelected = l.code === language;
            return (
              <Link
                key={l.code}
                href={localizedPath(pathname || "/", l.code)}
                hrefLang={l.code}
                lang={l.code}
                aria-current={isSelected ? "page" : undefined}
                onClick={() => {
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-3 text-xs rounded-lg transition-colors cursor-pointer text-left ${
                  isSelected
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-ink-2 hover:bg-wash hover:text-ink"
                }`}
              >
                <span>{translateCopy(l.label)}</span>
                {translateCopy(isSelected && <Check className="h-3.5 w-3.5 text-accent shrink-0" />)}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
