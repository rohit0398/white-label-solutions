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
        { label: "E-Commerce Platform", href: "/solutions/ecommerce" },
        { label: "OTT & Short Dramas", href: "/solutions/ott-streaming" },
        { label: t.footer.comparedToShopify, href: "/compare/shopify-alternative" },
        { label: t.footer.pricing, href: `${language === "en" ? "/" : `/${language}`}#pricing` },
        { label: t.nav.faq, href: `${language === "en" ? "/" : `/${language}`}#faq` },
      ],
    },
    {
      title: "Company & Work",
      links: [
        { label: "About Mechatron Lab", href: "/about" },
        { label: "Contact Engineering", href: "/contact" },
        { label: "Mechatron Lab Store", href: "/case-studies/mechatron-lab" },
        { label: "eStoreAlley Case Study", href: "/case-studies/estorealley" },
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
              src="/brand/logo_icon.svg"
              alt="Mechatron Lab"
              width={20}
              height={20}
              className="h-5 w-5 rounded object-contain shrink-0"
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
      <div className="wrap-wide pb-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-xs sm:text-sm text-ink-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p>© 2026 {BRAND.name}. {t.footer.copyright}</p>
          <span className="hidden sm:inline">·</span>
          <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link href="/refund-policy" className="hover:text-ink transition-colors">Refund Policy</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-ink transition-colors">Contact Us</Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
