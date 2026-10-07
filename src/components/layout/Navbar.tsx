"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const { language, openDemo } = useSite();
  const [open, setOpen] = useState(false);
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const links = [
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.faq, href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="wrap-wide h-16 flex items-center justify-between gap-6">
        <Link href="/" id="nav-home" className="text-[15px] font-semibold tracking-tight">
          Mechatron Lab <span className="text-ink-3 font-normal">Solutions</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-8 text-sm text-ink-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button id="nav-book-demo" size="sm" onClick={() => openDemo()}>
            {t.nav.bookDemo}
          </Button>
          <button
            id="nav-menu-toggle"
            className="sm:hidden text-sm text-ink-2 hover:text-ink"
            aria-expanded={open}
            aria-controls="nav-mobile"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="nav-mobile" className="sm:hidden border-t border-line">
          <ul className="wrap-wide py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink-2 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
