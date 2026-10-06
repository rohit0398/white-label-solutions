"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Currency, Language } from "@/types";
import { BRAND } from "@/lib/constants";
import { LANGUAGES, TRANSLATIONS } from "@/lib/translations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  MessageSquare,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  Layers,
} from "lucide-react";

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  currentLanguage?: Language;
  onLanguageChange?: (l: Language) => void;
  onOpenBookModal: () => void;
}

export function Navbar({
  currentCurrency,
  onCurrencyChange,
  currentLanguage = "en",
  onLanguageChange,
  onOpenBookModal,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const markets = [
    { code: "USD" as Currency, label: "United States (USD)", flag: "🇺🇸", symbol: "$", lang: "en" as Language },
    { code: "EUR" as Currency, label: "Europe (EUR)", flag: "🇪🇺", symbol: "€", lang: "en" as Language },
    { code: "GBP" as Currency, label: "United Kingdom (GBP)", flag: "🇬🇧", symbol: "£", lang: "en" as Language },
    { code: "INR" as Currency, label: "India (INR)", flag: "🇮🇳", symbol: "₹", lang: "en" as Language },
  ];

  const activeMarket = markets.find((m) => m.code === currentCurrency) || markets[0];

  // Streamlined 4 core navigation items to prevent navbar congestion
  const navLinks = [
    { name: t.nav.showcase, href: "/#showcase" },
    { name: t.nav.adminTour, href: "/#admin-tour" },
    { name: t.nav.pricing, href: "/#pricing" },
    { name: t.nav.shopifyAlt, href: "/compare/shopify-alternative" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/30 transition-all">
              <div className="h-full w-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <Layers className="h-5 w-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight">
                  Mechatron<span className="text-cyan-400">Lab</span>
                </span>
                <Badge variant="cyan" size="sm">
                  Solutions
                </Badge>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wider">
                WHITE-LABEL COMMERCE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Spacious and Uncluttered */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools: Unified Synced Currency & Language + WhatsApp + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Unified Region / Market Selector (Synced Currency & Language) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/90 text-xs font-semibold text-slate-200 hover:border-slate-500 transition-colors"
                title="Choose Market & Currency"
              >
                <Globe className="h-3.5 w-3.5 text-cyan-400" />
                <span>
                  {activeMarket.flag} {activeMarket.code} ({activeMarket.symbol})
                </span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </button>

              {regionDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl glass-panel shadow-2xl p-2 z-50 border border-slate-700 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800">
                    Select Market & Currency
                  </div>
                  {markets.map((m) => (
                    <button
                      key={m.code}
                      onClick={() => {
                        onCurrencyChange(m.code);
                        onLanguageChange?.(m.lang);
                        setRegionDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        currentCurrency === m.code
                          ? "bg-blue-600/20 text-cyan-300 border border-blue-500/30"
                          : "hover:bg-slate-800 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{m.flag}</span>
                        <div>
                          <div className="font-semibold text-white">{m.label}</div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {m.symbol} One-Time Pricing
                          </div>
                        </div>
                      </div>
                      {currentCurrency === m.code && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      )}
                    </button>
                  ))}

                  {/* Quick Language Override Strip */}
                  <div className="pt-2 border-t border-slate-800 px-2 pb-1">
                    <div className="text-[10px] font-mono text-slate-400 mb-1.5">
                      Language Override:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            onLanguageChange?.(l.code);
                          }}
                          className={`px-2 py-1 text-[11px] rounded-lg font-medium transition-colors ${
                            currentLanguage === l.code
                              ? "bg-blue-600 text-white font-bold"
                              : "bg-slate-800/80 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          {l.flag} {l.code.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick WhatsApp Link */}
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-xl transition-colors border border-emerald-500/20"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="h-4 w-4" />
            </a>

            {/* Schedule Demo CTA */}
            <Button
              variant="glow"
              size="sm"
              onClick={onOpenBookModal}
              className="gap-2 shrink-0 shadow-lg shadow-blue-500/20"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
              <span>{t.nav.bookDemo}</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          {/* Synced Market & Currency */}
          <div className="space-y-2 pb-3 border-b border-slate-800">
            <span className="text-xs text-slate-400 font-mono">Market & Currency</span>
            <div className="grid grid-cols-2 gap-1.5">
              {markets.map((m) => (
                <button
                  key={m.code}
                  onClick={() => {
                    onCurrencyChange(m.code);
                    onLanguageChange?.(m.lang);
                  }}
                  className={`px-3 py-2 text-xs rounded-xl flex items-center justify-between border transition-colors ${
                    currentCurrency === m.code
                      ? "bg-blue-600/30 border-blue-500/50 text-white font-bold"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-300"
                  }`}
                >
                  <span>{m.flag} {m.code}</span>
                  <span className="text-[11px] font-mono text-slate-400">{m.symbol}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs text-slate-400 font-mono">Language</span>
            <div className="flex gap-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLanguageChange?.(l.code)}
                  className={`px-2 py-1 text-xs rounded-md ${
                    currentLanguage === l.code
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                  title={l.label}
                >
                  {l.flag} {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="glow"
              className="w-full shadow-lg shadow-cyan-500/20"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookModal();
              }}
            >
              Book Live Store Demo
            </Button>
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-500/30 text-emerald-300 bg-emerald-500/10 text-xs font-semibold"
            >
              <MessageSquare className="h-4 w-4" />
              Instant WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
