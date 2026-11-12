"use client";

import { ECOMMERCE_PATHS, OTT_PATHS } from "@/lib/solution-paths";

import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import { priceText } from "@/lib/pricing-catalog";


import { trackWhatsAppClick } from "@/lib/analytics";
import Image from "@/components/ui/LocalizedImage";
import { localizedPath } from "@/lib/site-config";
import React, { useState } from "react";
import Link from "@/components/ui/LocalizedLink";
import { Button } from "@/components/ui/Button";
import { Menu, X, Sun, Moon, MessageSquare, ChevronDown } from "lucide-react";
import { useContactWhatsApp } from "@/components/site/useContactWhatsApp";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export function Navbar() {
  const translateCopy = useMessages();
  const whatsappUrl = useContactWhatsApp();

  const { openDemo, theme, toggleTheme, language } = useSite();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<"ecommerce" | "drama" | "ott">("ecommerce");
  const t = TRANSLATIONS[language];

  const homeHref = language === "en" ? "/" : `/${language}`;

  const solutions = [
    // E-Commerce
    {
      title: englishMessage("ecommerce.complete.e.commerce.store.513e59f"),
      desc: englishMessage("Navbar.next.js.storefront.flutter.apps.crm.fc8477c"),
      href: ECOMMERCE_PATHS.platform,
      price: priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")),
      group: "ecommerce",
    },
    {
      title: englishMessage("Footer.e.commerce.mobile.app.e48da2f"),
      desc: englishMessage("Navbar.native.ios.android.apps.with.flutter.6fa4704"),
      href: ECOMMERCE_PATHS.app,
      price: priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")),
      group: "ecommerce",
    },
    {
      title: englishMessage("Footer.e.commerce.website.e37a1d0"),
      desc: englishMessage("Navbar.web.storefront.operations.crm.1c4add5"),
      href: ECOMMERCE_PATHS.web,
      price: priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")),
      group: "ecommerce",
    },

    // Short-Drama
    {
      title: englishMessage("ShortDrama.top.platform.title"),
      desc: englishMessage("Navbar.vertical.reels.apps.web.player.cms.ed6db0f"),
      href: SHORT_DRAMA_PATHS.platform,
      price: priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")),
      group: "drama",
    },
    {
      title: englishMessage("Footer.short.drama.mobile.app.96b0c6e"),
      desc: englishMessage("Navbar.native.9.16.apps.with.vip.passes.ads.c86a0f8"),
      href: SHORT_DRAMA_PATHS.app,
      price: priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")),
      group: "drama",
    },
    {
      title: englishMessage("Footer.short.drama.website.486bf53"),
      desc: englishMessage("Navbar.mobile.first.9.16.web.player.cms.3794858"),
      href: SHORT_DRAMA_PATHS.web,
      price: priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")),
      group: "drama",
    },

    // Cinematic OTT
    {
      title: englishMessage("OttOverview.platform.title"),
      desc: englishMessage("Navbar.16.9.web.portal.mobile.apps.video.cms.c017d6a"),
      href: OTT_PATHS.platform,
      price: priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")),
      group: "ott",
    },
    {
      title: englishMessage("Footer.cinematic.ott.mobile.app.b41f93e"),
      desc: englishMessage("Navbar.16.9.streaming.apps.with.tv.casting.5a138f5"),
      href: OTT_PATHS.app,
      price: priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")),
      group: "ott",
    },
    {
      title: englishMessage("Footer.cinematic.ott.website.43c6b97"),
      desc: englishMessage("Navbar.16.9.widescreen.portal.adaptive.hls.5e2efde"),
      href: OTT_PATHS.web,
      price: priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")),
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
    { label: englishMessage("Footer.engineering.blog.e223c12"), href: "/blog" },
    { label: englishMessage("Footer.about.mechatron.lab.1d844e8"), href: "/about" },
    { label: t.nav.faq, href: `${homeHref}#faq` },
    { label: englishMessage("Footer.contact.engineering.e0ef092"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="wrap-wide h-16 flex items-center justify-between gap-2 sm:gap-6">
        <Link
          href={homeHref}
          id="nav-home"
          className="inline-flex items-center gap-2 sm:gap-2.5 hover:opacity-85 transition-opacity shrink-0 group"
        >
          <Image
            src="/brand/favicon.png"
            sizes="28px"
            alt="Mechatron Lab"
            width={28}
            height={28}
            className="h-7 w-7 sm:h-6.5 sm:w-6.5 rounded-md object-contain shadow-2xs transition-transform duration-200 group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight">
            <span className="text-[13px] sm:text-[15px] font-semibold tracking-tight text-ink leading-none">
              Mechatron Lab
            </span>
            <span className="text-[10px] sm:text-[15px] font-mono sm:font-normal tracking-wide sm:tracking-normal text-ink-3 uppercase sm:capitalize leading-none mt-1 sm:mt-0">{translateCopy(englishMessage("ecommerce.solutions.05b004a"))}</span>
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
              <span>{translateCopy(t.nav.solutions)}</span>
              <ChevronDown className={`h-3.5 w-3.5 text-ink-3 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-ink" : ""}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute -left-20 top-full pt-1 w-[720px] z-50 animate-fade-in">
                <div className="rounded-xl border border-line bg-paper/98 backdrop-blur-md p-3 shadow-2xl">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Column 1: E-Commerce */}
                    <div className="space-y-1">
                      <div className="px-2 pt-1 pb-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">{""}{translateCopy(englishMessage("HomeHero.e.commerce.d395b71"))}{""}</div>
                      {solutions.filter((s) => s.group === "ecommerce").map((s) => (
                        <Link
                          key={s.href}
                          href={s.href.startsWith("/") ? localizedPath(s.href, language) : s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-2 rounded-lg hover:bg-wash transition-colors group"
                        >
                          <div className="font-semibold text-xs text-ink group-hover:text-accent transition-colors block break-words">
                            {translateCopy(s.title)}
                          </div>
                          <div className="flex items-center justify-between gap-2 mt-0.5">
                            <p className="text-[11px] text-ink-3 leading-snug line-clamp-2">
                              {translateCopy(s.desc)}
                            </p>
                            <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-wash border border-line/80 text-ink-2 self-start mt-0.5">
                              {translateCopy(s.price)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: Short-Drama */}
                    <div className="space-y-1">
                      <div className="px-2 pt-1 pb-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">{""}{translateCopy(englishMessage("Navbar.short.drama.eb04980"))}{""}</div>
                      {solutions.filter((s) => s.group === "drama").map((s) => (
                        <Link
                          key={s.href}
                          href={s.href.startsWith("/") ? localizedPath(s.href, language) : s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-2 rounded-lg hover:bg-wash transition-colors group"
                        >
                          <div className="font-semibold text-xs text-ink group-hover:text-accent transition-colors block break-words">
                            {translateCopy(s.title)}
                          </div>
                          <div className="flex items-center justify-between gap-2 mt-0.5">
                            <p className="text-[11px] text-ink-3 leading-snug line-clamp-2">
                              {translateCopy(s.desc)}
                            </p>
                            <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-wash border border-line/80 text-ink-2 self-start mt-0.5">
                              {translateCopy(s.price)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Column 3: Cinematic OTT */}
                    <div className="space-y-1">
                      <div className="px-2 pt-1 pb-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">{""}{translateCopy(englishMessage("Navbar.cinematic.ott.f0c3153"))}{""}</div>
                      {solutions.filter((s) => s.group === "ott").map((s) => (
                        <Link
                          key={s.href}
                          href={s.href.startsWith("/") ? localizedPath(s.href, language) : s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-2 rounded-lg hover:bg-wash transition-colors group"
                        >
                          <div className="font-semibold text-xs text-ink group-hover:text-accent transition-colors block break-words">
                            {translateCopy(s.title)}
                          </div>
                          <div className="flex items-center justify-between gap-2 mt-0.5">
                            <p className="text-[11px] text-ink-3 leading-snug line-clamp-2">
                              {translateCopy(s.desc)}
                            </p>
                            <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-wash border border-line/80 text-ink-2 self-start mt-0.5">
                              {translateCopy(s.price)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-line flex items-center justify-between px-2 text-xs font-mono">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-ink-3 hover:text-ink transition-colors"
                    >{translateCopy(englishMessage("Navbar.all.architectures.catalogs.2965d22"))}</Link>
                    <Link
                      href="/blog"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-ink-3 hover:text-accent transition-colors"
                    >{translateCopy(englishMessage("Navbar.engineering.guides.417cd40"))}</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {desktopLinks.map((l) => (
            <Link key={l.href} href={l.href.startsWith("/") ? localizedPath(l.href, language) : l.href} className="hover:text-ink hover:-translate-y-0.5 transition-all duration-150">
              {translateCopy(l.label)}
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
            title={translateCopy(theme === "dark" ? englishMessage("Navbar.switch.to.light.theme.f90085f") : englishMessage("Navbar.switch.to.dark.theme.5ec71e4"))}
            aria-label={translateCopy(englishMessage("Navbar.toggle.color.theme.e4c72aa"))}
          >
            {translateCopy(theme === "dark" ? (
              <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45 text-ink" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12 text-ink" />
            ))}
          </button>

          {/* Direct WhatsApp Live Chat Button with Active Radar Ping & Hover Physics */}
          <a
            id="nav-whatsapp-chat"
            href={whatsappUrl} onClick={() => trackWhatsAppClick("Navbar")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-8 w-8 inline-flex items-center justify-center text-accent bg-accent/5 hover:bg-accent/15 rounded-md border border-accent/30 hover:border-accent hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs animate-pulse-glow shrink-0"
            title={translateCopy(englishMessage("Navbar.chat.with.us.on.whatsapp.instant.reply.59363a1"))}
            aria-label={translateCopy(englishMessage("Navbar.direct.whatsapp.live.chat.106f2a2"))}
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
            {translateCopy(t.nav.bookDemo)}
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="nav-menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            className="sm:hidden h-8 w-8 inline-flex items-center justify-center text-ink-2 hover:text-ink hover:bg-wash rounded-md border border-line hover:border-ink/40 transition-all duration-200 cursor-pointer active:scale-90 shrink-0"
            aria-expanded={open}
            aria-label={translateCopy(englishMessage("Navbar.toggle.navigation.menu.461b06a"))}
          >
            {translateCopy(open ? (
              <X className="h-4 w-4 transition-transform duration-150 rotate-90" />
            ) : (
              <Menu className="h-4 w-4 transition-transform duration-150" />
            ))}
          </button>
        </div>
      </div>

      {open && (
        <nav id="nav-mobile" className="sm:hidden border-t border-line bg-paper/98 backdrop-blur-md max-h-[85vh] overflow-y-auto">
          <div className="wrap-wide py-4 space-y-4">
            {/* Solutions Segmented Mobile Category Switcher */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-mono text-ink-3 uppercase tracking-wider">{translateCopy(englishMessage("Navbar.platform.architectures.48c6b3b"))}</span>
                <Link
                  href="/solutions"
                  onClick={() => setOpen(false)}
                  className="text-[11px] font-mono text-accent hover:underline flex items-center gap-1"
                >
                  <span>{translateCopy(englishMessage("Navbar.all.9.3802278"))}</span>
                  <span className="text-[10px]">→</span>
                </Link>
              </div>

              {/* Segmented Category Buttons */}
              <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-wash/80 border border-line">
                <button
                  type="button"
                  onClick={() => setMobileCategory("ecommerce")}
                  className={`py-1.5 px-2 text-xs rounded-lg transition-all text-center cursor-pointer ${
                    mobileCategory === "ecommerce"
                      ? "bg-paper text-ink shadow-xs border border-line/60 font-semibold"
                      : "text-ink-3 hover:text-ink font-medium"
                  }`}
                >{translateCopy(englishMessage("Navbar..retail.85e8170"))}</button>
                <button
                  type="button"
                  onClick={() => setMobileCategory("drama")}
                  className={`py-1.5 px-2 text-xs rounded-lg transition-all text-center cursor-pointer ${
                    mobileCategory === "drama"
                      ? "bg-paper text-ink shadow-xs border border-line/60 font-semibold"
                      : "text-ink-3 hover:text-ink font-medium"
                  }`}
                >{translateCopy(englishMessage("Navbar..drama.4ad7b80"))}</button>
                <button
                  type="button"
                  onClick={() => setMobileCategory("ott")}
                  className={`py-1.5 px-2 text-xs rounded-lg transition-all text-center cursor-pointer ${
                    mobileCategory === "ott"
                      ? "bg-paper text-ink shadow-xs border border-line/60 font-semibold"
                      : "text-ink-3 hover:text-ink font-medium"
                  }`}
                >{translateCopy(englishMessage("Navbar..ott.5157cb3"))}</button>
              </div>

              {/* Active Category Solutions (3 Cards Only) */}
              <div className="space-y-1.5">
                {solutions
                  .filter((s) => s.group === mobileCategory)
                  .map((s) => (
                    <Link
                      key={s.href}
                      href={s.href.startsWith("/") ? localizedPath(s.href, language) : s.href}
                      onClick={() => setOpen(false)}
                      className="block p-2.5 rounded-xl border border-line/70 bg-wash/40 hover:bg-wash hover:border-ink/30 transition-all active:scale-[0.99] group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors leading-tight">
                          {translateCopy(s.title)}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-ink-2 px-1.5 py-0.5 rounded bg-paper border border-line shrink-0">
                          {translateCopy(s.price)}
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-3 mt-1 leading-snug line-clamp-1">{translateCopy(s.desc)}</p>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Standard Links */}
            <div className="pt-2 border-t border-line">
              <ul className="space-y-1">
                {mobileLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href.startsWith("/") ? localizedPath(l.href, language) : l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-2 px-2.5 rounded-md text-ink-2 hover:text-ink hover:bg-wash text-sm font-medium transition-colors"
                    >
                      <span>{translateCopy(l.label)}</span>
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
                {translateCopy(t.nav.bookDemo)} →
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackWhatsAppClick("Navbar"); setOpen(false); }}
                className="w-full h-10 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 flex items-center justify-center gap-2 text-accent font-medium text-sm transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{translateCopy(englishMessage("Hero.chat.on.whatsapp.8eb8a88"))}</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
