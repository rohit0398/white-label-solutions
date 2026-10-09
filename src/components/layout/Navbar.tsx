"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Navbar() {
  const { language, openDemo, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const homeHref = language === "en" ? "/" : `/${language}`;

  const solutions = [
    {
      title: "E-Commerce Platform",
      desc: "Online store, iOS/Android apps & Admin CRM",
      href: "/solutions/ecommerce",
      badge: "Retail",
    },
    {
      title: "OTT & Short Video Dramas",
      desc: "9:16 vertical reels & Netflix-style streaming",
      href: "/solutions/ott-streaming",
      badge: "Video",
    },
  ];

  const desktopLinks = [
    { label: t.nav.work, href: `${homeHref}#work` },
    { label: t.nav.pricing, href: `${homeHref}#pricing` },
  ];

  const mobileLinks = [
    { label: t.nav.work, href: `${homeHref}#work` },
    { label: t.nav.pricing, href: `${homeHref}#pricing` },
    { label: "About Mechatron Lab", href: "/about" },
    { label: t.nav.faq, href: `${homeHref}#faq` },
    { label: "Contact Engineering", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="wrap-wide h-16 flex items-center justify-between gap-2 sm:gap-6">
        <Link
          href={homeHref}
          id="nav-home"
          className="inline-flex items-center gap-2 sm:gap-2.5 hover:opacity-85 transition-opacity shrink-0 group"
        >
          <img
            src="/brand/logo_icon.svg"
            alt="Mechatron Lab"
            width={28}
            height={28}
            className="h-7 w-7 sm:h-6.5 sm:w-6.5 rounded-md object-contain shadow-2xs transition-transform duration-200 group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight">
            <span className="text-[13px] sm:text-[15px] font-semibold tracking-tight text-ink leading-none">
              Mechatron Lab
            </span>
            <span className="text-[10px] sm:text-[15px] font-mono sm:font-normal tracking-wide sm:tracking-normal text-ink-3 uppercase sm:capitalize leading-none mt-1 sm:mt-0">
              Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-7 text-sm text-ink-2">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSolutionsOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 hover:text-ink hover:-translate-y-0.5 transition-all duration-150 cursor-pointer py-2"
            >
              <span>{t.nav.solutions}</span>
              <ChevronDown className={`h-3.5 w-3.5 text-ink-3 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-ink" : ""}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute -left-3 top-full pt-1 w-72 z-50 animate-fade-in">
                <div className="rounded-xl border border-line bg-paper/98 backdrop-blur-md p-2 shadow-xl space-y-1">
                  {solutions.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-wash transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-ink group-hover:text-accent transition-colors">
                          {s.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-wash border border-line text-ink-3">
                          {s.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-3 mt-0.5 leading-snug">
                        {s.desc}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-line">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-2.5 py-1 text-[11px] font-mono text-ink-3 hover:text-ink transition-colors"
                    >
                      Browse all architectures →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {desktopLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink hover:-translate-y-0.5 transition-all duration-150">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Theme Toggle (Dark ↔ Light) - Desktop Only in Header, on Mobile it is in the Drawer */}
          <button
            id="nav-theme-toggle"
            type="button"
            onClick={toggleTheme}
            className="hidden sm:inline-flex h-8 w-8 items-center justify-center text-ink-2 hover:text-ink hover:bg-wash rounded-md border border-line hover:border-ink/40 transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
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
            onClick={() => trackWhatsAppClick("Navbar")}
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
            className="animate-pulse-ink hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 shrink-0 text-xs sm:text-sm font-medium"
          >
            {t.nav.bookDemo}
          </Button>

          {/* Mobile Hamburger Toggle with Active Tactile Micro-Press */}
          <button
            id="nav-menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            className="sm:hidden h-8 w-8 inline-flex items-center justify-center text-ink-2 hover:text-ink hover:bg-wash rounded-md border border-line hover:border-ink/40 transition-all duration-200 cursor-pointer active:scale-90 shrink-0"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <X className="h-4 w-4 transition-transform duration-150 rotate-90" />
            ) : (
              <Menu className="h-4 w-4 transition-transform duration-150" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav id="nav-mobile" className="sm:hidden border-t border-line bg-paper/98 backdrop-blur-md">
          <div className="wrap-wide py-4 space-y-3">
            {/* Solutions Section */}
            <div className="space-y-1">
              <p className="text-[11px] font-mono text-ink-3 uppercase px-2.5">Platform Solutions</p>
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-md text-ink hover:bg-wash text-sm font-medium transition-colors"
                >
                  <div>
                    <span className="block">{s.title}</span>
                    <span className="text-[11px] text-ink-3 block font-normal">{s.desc}</span>
                  </div>
                  <span className="text-xs text-ink-3">→</span>
                </Link>
              ))}
            </div>

            {/* Standard Links */}
            <div className="pt-2 border-t border-line">
              <ul className="space-y-1">
                {mobileLinks.map((l) => (
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
            </div>

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
                onClick={() => {
                  setOpen(false);
                  trackWhatsAppClick("Navbar-Mobile");
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-md border border-accent/30 bg-accent/10 text-accent font-medium hover:bg-accent/20 text-sm transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp (Instant Reply)</span>
              </a>

              {/* Theme Switcher inside Mobile Side Menu */}
              <div className="flex items-center justify-between py-2 px-2.5 rounded-lg border border-line bg-wash text-xs text-ink-2">
                <div className="flex items-center gap-2">
                  {theme === "dark" ? (
                    <Moon className="h-4 w-4 text-accent" />
                  ) : (
                    <Sun className="h-4 w-4 text-accent" />
                  )}
                  <span className="font-mono text-ink">Appearance</span>
                </div>
                <button
                  type="button"
                  id="nav-mobile-theme-toggle"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-line bg-paper text-xs font-mono text-ink hover:border-ink/40 transition-colors cursor-pointer"
                  aria-label="Toggle theme in mobile menu"
                >
                  <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                  <span className="text-[10px] text-ink-3 underline">Change</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
