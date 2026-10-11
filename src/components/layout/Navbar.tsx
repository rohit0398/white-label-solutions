"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Sun, Moon, MessageSquare, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export function Navbar() {
  const { openDemo, theme, toggleTheme, language } = useSite();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const homeHref = language === "en" ? "/" : `/${language}`;

  const solutions = [
    // E-Commerce
    {
      title: "Complete E-Commerce Store",
      desc: "Next.js storefront, Flutter apps & CRM",
      href: "/solutions/ecommerce",
      price: "$4,999",
      group: "ecommerce",
    },
    {
      title: "E-Commerce Website",
      desc: "Web storefront & operations CRM",
      href: "/solutions/ecommerce-website-development",
      price: "$2,999",
      group: "ecommerce",
    },
    {
      title: "E-Commerce Mobile App",
      desc: "Native iOS & Android apps with Flutter",
      href: "/solutions/ecommerce-app-development",
      price: "$2,999",
      group: "ecommerce",
    },

    // 9:16 Short-Drama
    {
      title: "Complete Short-Drama Suite",
      desc: "Vertical reels apps, web player & CMS",
      href: "/solutions/short-drama",
      price: "$4,999",
      group: "drama",
    },
    {
      title: "Short-Drama Mobile App",
      desc: "Native 9:16 apps with VIP passes & ads",
      href: "/solutions/short-drama-app-development",
      price: "$2,999",
      group: "drama",
    },
    {
      title: "Short-Drama Web Platform",
      desc: "Mobile-first 9:16 web player & CMS",
      href: "/solutions/short-drama-website-development",
      price: "$2,999",
      group: "drama",
    },

    // 16:9 Cinematic OTT
    {
      title: "Complete Cinematic OTT Suite",
      desc: "16:9 web portal, mobile apps & Video CMS",
      href: "/solutions/ott-streaming",
      price: "$4,999",
      group: "ott",
    },
    {
      title: "Cinematic Web Streaming",
      desc: "16:9 widescreen portal & adaptive HLS",
      href: "/solutions/ott-video-streaming-development",
      price: "$2,999",
      group: "ott",
    },
    {
      title: "Cinematic OTT Mobile App",
      desc: "16:9 streaming apps with TV casting",
      href: "/solutions/ott-app-development",
      price: "$2,999",
      group: "ott",
    },
  ];

  const desktopLinks = [
    { label: t.nav.work, href: `${homeHref}#work` },
    { label: t.nav.pricing, href: `${homeHref}#pricing` },
  ];

  const mobileLinks = [
    { label: t.nav.work, href: `${homeHref}#work` },
    { label: t.nav.pricing, href: `${homeHref}#pricing` },
    { label: "Engineering Blog", href: "/blog" },
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
              <div className="absolute -left-20 top-full pt-1 w-[720px] z-50 animate-fade-in">
                <div className="rounded-xl border border-line bg-paper/98 backdrop-blur-md p-3 shadow-2xl">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Column 1: E-Commerce */}
                    <div className="space-y-1">
                      <div className="px-2 pt-1 pb-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">
                        E-Commerce
                      </div>
                      {solutions.filter((s) => s.group === "ecommerce").map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-2 rounded-lg hover:bg-wash transition-colors group"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-semibold text-xs text-ink group-hover:text-accent transition-colors block truncate">
                              {s.title}
                            </span>
                            <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.2 rounded bg-wash border border-line/80 text-ink-2">
                              {s.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-ink-3 leading-snug mt-0.5 line-clamp-2">
                            {s.desc}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: 9:16 Short Drama */}
                    <div className="space-y-1">
                      <div className="px-2 pt-1 pb-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">
                        9:16 Short-Drama
                      </div>
                      {solutions.filter((s) => s.group === "drama").map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-2 rounded-lg hover:bg-wash transition-colors group"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-semibold text-xs text-ink group-hover:text-accent transition-colors block truncate">
                              {s.title}
                            </span>
                            <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.2 rounded bg-wash border border-line/80 text-ink-2">
                              {s.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-ink-3 leading-snug mt-0.5 line-clamp-2">
                            {s.desc}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Column 3: 16:9 Cinematic OTT */}
                    <div className="space-y-1">
                      <div className="px-2 pt-1 pb-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">
                        16:9 Cinematic OTT
                      </div>
                      {solutions.filter((s) => s.group === "ott").map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-2 rounded-lg hover:bg-wash transition-colors group"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-semibold text-xs text-ink group-hover:text-accent transition-colors block truncate">
                              {s.title}
                            </span>
                            <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.2 rounded bg-wash border border-line/80 text-ink-2">
                              {s.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-ink-3 leading-snug mt-0.5 line-clamp-2">
                            {s.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-line flex items-center justify-between px-2 text-xs font-mono">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-ink-3 hover:text-ink transition-colors"
                    >
                      All architectures &amp; catalogs →
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-ink-3 hover:text-accent transition-colors"
                    >
                      Engineering Guides →
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
          {/* Theme Toggle (Dark ↔ Light) */}
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
            className="group relative h-8 w-8 inline-flex items-center justify-center text-accent bg-accent/5 hover:bg-accent/15 rounded-md border border-accent/30 hover:border-accent hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs animate-pulse-glow shrink-0"
            title="Chat with Us on WhatsApp (Instant Reply)"
            aria-label="Direct WhatsApp live chat"
          >
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 pointer-events-none">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent border-2 border-paper" />
            </span>
          </a>

          {/* Book a Demo Button */}
          <Button
            id="nav-book-demo"
            size="sm"
            onClick={() => openDemo()}
            className="animate-pulse-ink hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 shrink-0 text-xs sm:text-sm font-medium"
          >
            {t.nav.bookDemo}
          </Button>

          {/* Mobile Hamburger Toggle */}
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
        <nav id="nav-mobile" className="sm:hidden border-t border-line bg-paper/98 backdrop-blur-md max-h-[85vh] overflow-y-auto">
          <div className="wrap-wide py-4 space-y-4">
            {/* E-Commerce Solutions Section */}
            <div className="space-y-1">
              <p className="text-[11px] font-mono text-ink-3 uppercase px-2.5">E-Commerce Solutions</p>
              {solutions.filter((s) => s.group === "ecommerce").map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2.5 rounded-md text-ink hover:bg-wash transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{s.title}</span>
                    <span className="text-[10px] font-mono text-ink-3 px-1.5 py-0.5 rounded bg-wash border border-line shrink-0">
                      {s.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-ink-3 block mt-0.5">{s.desc}</span>
                </Link>
              ))}
            </div>

            {/* 9:16 Short Drama Solutions Section */}
            <div className="space-y-1 pt-2 border-t border-line/60">
              <p className="text-[11px] font-mono text-ink-3 uppercase px-2.5">9:16 Short-Drama Solutions</p>
              {solutions.filter((s) => s.group === "drama").map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2.5 rounded-md text-ink hover:bg-wash transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{s.title}</span>
                    <span className="text-[10px] font-mono text-ink-3 px-1.5 py-0.5 rounded bg-wash border border-line shrink-0">
                      {s.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-ink-3 block mt-0.5">{s.desc}</span>
                </Link>
              ))}
            </div>

            {/* 16:9 Cinematic OTT Solutions Section */}
            <div className="space-y-1 pt-2 border-t border-line/60">
              <p className="text-[11px] font-mono text-ink-3 uppercase px-2.5">16:9 Cinematic OTT Solutions</p>
              {solutions.filter((s) => s.group === "ott").map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2.5 rounded-md text-ink hover:bg-wash transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{s.title}</span>
                    <span className="text-[10px] font-mono text-ink-3 px-1.5 py-0.5 rounded bg-wash border border-line shrink-0">
                      {s.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-ink-3 block mt-0.5">{s.desc}</span>
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
                onClick={() => setOpen(false)}
                className="w-full h-10 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 flex items-center justify-center gap-2 text-accent font-medium text-sm transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
