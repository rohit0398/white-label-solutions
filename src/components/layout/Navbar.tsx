"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MessageSquare } from "lucide-react";

export function Navbar() {
  const { language, openDemo } = useSite();
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
      <div className="wrap-wide h-16 flex items-center justify-between gap-6">
        <Link href="/" id="nav-home" className="text-[15px] font-semibold tracking-tight hover:opacity-85 transition-opacity">
          Mechatron Lab <span className="text-ink-3 font-normal">Solutions</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-7 text-sm text-ink-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink hover:-translate-y-0.5 transition-all duration-150">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Direct WhatsApp Live Chat Button with Active Radar Ping & Hover Physics */}
          <a
            id="nav-whatsapp-chat"
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-accent bg-accent/5 hover:bg-accent/15 rounded-md border border-accent/30 hover:border-accent hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs animate-pulse-glow"
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
            className="animate-pulse-ink hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] transition-all duration-200"
          >
            {t.nav.bookDemo}
          </Button>

          <button
            id="nav-menu-toggle"
            className="sm:hidden text-sm text-ink-2 hover:text-ink p-1"
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
          <ul className="wrap-wide py-2 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-ink-2 hover:text-ink text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-line">
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-accent font-medium hover:underline text-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp (Instant Reply)</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
