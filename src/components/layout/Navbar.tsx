"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Currency } from "@/types";
import { BRAND } from "@/lib/constants";
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
  onOpenBookModal: () => void;
}

export function Navbar({
  currentCurrency,
  onCurrencyChange,
  onOpenBookModal,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies: { code: Currency; label: string; symbol: string }[] = [
    { code: "USD", label: "US Dollar", symbol: "$" },
    { code: "EUR", label: "Euro (EU)", symbol: "€" },
    { code: "GBP", label: "British Pound", symbol: "£" },
    { code: "INR", label: "Indian Rupee", symbol: "₹" },
  ];

  const navLinks = [
    { name: "Live Showcase", href: "#showcase" },
    { name: "Admin Tour", href: "#admin-tour" },
    { name: "Brand Preview", href: "#brand-previewer" },
    { name: "Architecture", href: "#architecture" },
    { name: "Commercial Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
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

          {/* Action Tools: Currency Switcher + WhatsApp + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 text-xs font-semibold text-slate-200 hover:border-slate-500 transition-colors"
              >
                <Globe className="h-3.5 w-3.5 text-slate-400" />
                <span>{currentCurrency}</span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl glass-panel shadow-2xl py-1 z-50 border border-slate-700">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onCurrencyChange(c.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800/80 transition-colors ${
                        currentCurrency === c.code
                          ? "text-cyan-400 font-semibold bg-blue-500/10"
                          : "text-slate-300"
                      }`}
                    >
                      <span>{c.code}</span>
                      <span className="text-slate-500 font-mono">
                        {c.symbol}
                      </span>
                    </button>
                  ))}
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
              className="gap-2"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
              <span>Book Demo</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
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
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs text-slate-400 font-mono">Currency</span>
            <div className="flex gap-1.5">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => onCurrencyChange(c.code)}
                  className={`px-2 py-1 text-xs rounded-md ${
                    currentCurrency === c.code
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {c.code}
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
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookModal();
              }}
            >
              Book Technical Demo
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
