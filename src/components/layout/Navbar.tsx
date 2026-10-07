"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const { language, openDemo, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const links = [
    { label: t.nav.solutions, href: "/solutions/ecommerce" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.faq, href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="wrap-wide h-16 flex items-center justify-between gap-2 sm:gap-6">
        <Link href="/" id="nav-home" className="text-[15px] font-semibold tracking-tight hover:opacity-85 transition-opacity shrink-0">
          Mechatron Lab <span className="text-ink-3 font-normal hidden min-[400px]:inline">Solutions</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-7 text-sm text-ink-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink hover:-translate-y-0.5 transition-all duration-150">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Theme Toggle (Dark ↔ Light) with Smooth Micro-Rotation */}
          <button
            id="nav-theme-toggle"
            type="button"
            onClick={toggleTheme}
            className="h-8 w-8 inline-flex items-center justify-center text-ink-2 hover:text-ink hover:bg-wash rounded-md border border-line hover:border-ink/40 transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45 text-ink" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12 text-ink" />
            )}
          </button>

          {/* Direct WhatsApp Live Chat Button with Active Radar Ping & Hover Physics */}
          <a
            id="nav-whatsapp-chat"
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-8 w-8 inline-flex items-center justify-center text-accent bg-accent/5 hover:bg-accent/15 rounded-md border border-accent/30 hover:border-accent hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs animate-pulse-glow shrink-0"
            title="Chat with Us on WhatsApp (Instant Reply)"
            aria-label="Direct WhatsApp live chat"
          >
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            {/* Live Online Ping Beacon */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 pointer-events-none">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent border-2 border-paper" />
            </span>
          </a>

          {/* Book a Demo Button with Active Living Pulse & Spring Hover Elevation */}
          <Button
            id="nav-book-demo"
            size="sm"
            onClick={() => openDemo()}
            className="h-8 px-2.5 sm:px-3.5 text-xs font-medium whitespace-nowrap animate-pulse-ink hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] transition-all duration-200 shrink-0"
          >
            <span className="hidden min-[420px]:inline">{t.nav.bookDemo}</span>
            <span className="min-[420px]:hidden">Book Demo</span>
          </Button>

          {/* Mobile Menu Icon Toggle Button */}
          <button
            id="nav-menu-toggle"
            type="button"
            className="sm:hidden h-8 w-8 inline-flex items-center justify-center text-ink-2 hover:text-ink hover:bg-wash rounded-md border border-line hover:border-ink/40 transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="h-4 w-4 text-ink transition-transform duration-200" />
            ) : (
              <Menu className="h-4 w-4 text-ink transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav id="nav-mobile" className="sm:hidden border-t border-line bg-paper/98 backdrop-blur-md">
          <div className="wrap-wide py-4 space-y-3">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2 px-2.5 rounded-md text-ink-2 hover:text-ink hover:bg-wash text-sm font-medium transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="text-xs text-ink-3">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-line space-y-2.5">
              <Button
                id="nav-mobile-book-demo"
                size="md"
                onClick={() => {
                  setOpen(false);
                  openDemo();
                }}
                className="w-full justify-center h-10 text-sm font-medium"
              >
                {t.nav.bookDemo} →
              </Button>

              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-md border border-accent/30 bg-accent/10 text-accent font-medium hover:bg-accent/20 text-sm transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp (Instant Reply)</span>
              </a>

              <div className="flex items-center justify-between py-1.5 px-1 text-xs text-ink-3">
                <span>Appearance</span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-line bg-wash text-xs font-mono text-ink hover:border-ink/40 transition-colors cursor-pointer"
                >
                  {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                  <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
