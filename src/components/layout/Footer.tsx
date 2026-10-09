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
      title: t.footer.colWork,
      links: [
        { label: "Mechatron Lab", href: "/case-studies/mechatron-lab" },
        { label: "eStoreAlley", href: "/case-studies/estorealley" },
      ],
    },
    {
      title: t.footer.colProduct,
      links: [
        { label: "All Solutions", href: "/solutions" },
        { label: t.footer.whatsIncluded, href: "/solutions/ecommerce" },
        { label: "OTT & Short Dramas", href: "/solutions/ott-streaming" },
        { label: t.footer.comparedToShopify, href: "/compare/shopify-alternative" },
        { label: t.footer.pricing, href: `${language === "en" ? "/" : `/${language}`}#pricing` },
      ],
    },
    {
      title: t.footer.colContact,
      links: [
        { label: BRAND.contact.email, href: `mailto:${BRAND.contact.email}` },
        { label: "WhatsApp", href: BRAND.contact.whatsappUrl, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="wrap-wide py-16 grid gap-10 sm:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold">{BRAND.name}</p>
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
      <div className="wrap-wide pb-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm text-ink-3">
        <p>© 2026 {BRAND.name}. {t.footer.copyright}</p>
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
