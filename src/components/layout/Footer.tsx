"use client";

import React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export function Footer() {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const columns = [
    {
      title: "Solutions",
      links: [
        { label: "All Architectures", href: "/solutions" },
        { label: "Complete E-Commerce Store", href: "/solutions/ecommerce" },
        { label: "E-Commerce Mobile App", href: "/solutions/ecommerce-app-development" },
        { label: "E-Commerce Website", href: "/solutions/ecommerce-website-development" },
        { label: "Complete Short-Drama Suite", href: "/solutions/short-drama" },
        { label: "Short-Drama Mobile App", href: "/solutions/short-drama-app-development" },
        { label: "Short-Drama Website", href: "/solutions/short-drama-website-development" },
        { label: "Complete Cinematic OTT Suite", href: "/solutions/ott-streaming" },
        { label: "Cinematic OTT Mobile App", href: "/solutions/ott-app-development" },
        { label: "Cinematic OTT Website", href: "/solutions/ott-website-development" },
      ],
    },
    {
      title: "Company & Work",
      links: [
        { label: "Engineering Blog", href: "/blog" },
        { label: t.footer.comparedToShopify, href: "/compare/shopify-alternative" },
        { label: "2.4M+ Short-Drama App Case Study", href: "/case-studies/short-drama-platform" },
        { label: "24/7 Linear OTT Network Case Study", href: "/case-studies/ott-streaming-network" },
        { label: "Mechatron Lab Store", href: "/case-studies/mechatron-lab" },
        { label: "eStoreAlley Case Study", href: "/case-studies/estorealley" },
        { label: "About Mechatron Lab", href: "/about" },
        { label: "Contact Engineering", href: "/contact" },
      ],
    },
    {
      title: "Trust & Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: BRAND.contact.email, href: `mailto:${BRAND.contact.email}` },
        { label: "WhatsApp Support", href: BRAND.contact.whatsappUrl, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="wrap-wide py-16 grid gap-10 sm:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/brand/favicon.png"
              alt="Mechatron Lab"
              width={22}
              height={22}
              className="h-5.5 w-5.5 rounded object-contain shrink-0"
            />
            <p className="font-semibold">{BRAND.name}</p>
          </div>
          <p className="mt-2 text-ink-3 leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-ink-3">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-2 hover:text-ink"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-ink-2 hover:text-ink">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap-wide pb-12 pt-6 border-t border-line/60 flex flex-col md:flex-row gap-6 md:items-center justify-between text-xs text-ink-3">
        <div className="space-y-2">
          <p className="font-medium text-ink-2">
            © 2026 {BRAND.name}. {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-3">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-line">·</span>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
            <span aria-hidden="true" className="text-line">·</span>
            <Link href="/refund-policy" className="hover:text-ink transition-colors">
              Refund Policy
            </Link>
            <span aria-hidden="true" className="text-line">·</span>
            <Link href="/contact" className="hover:text-ink transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <ThemeSwitcher />
          <div className="h-4 w-px bg-line" aria-hidden="true" />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
