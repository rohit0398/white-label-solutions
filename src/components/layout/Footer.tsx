import React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";

const columns = [
  {
    title: "Work",
    links: [
      { label: "Mechatron Lab", href: "/case-studies/mechatron-lab" },
      { label: "eStoreAlley", href: "/case-studies/estorealley" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "What's included", href: "/solutions/ecommerce" },
      { label: "Compared to Shopify", href: "/compare/shopify-alternative" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: BRAND.contact.email, href: `mailto:${BRAND.contact.email}` },
      { label: "WhatsApp", href: BRAND.contact.whatsappUrl, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap-wide py-16 grid gap-10 sm:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold">Mechatron Lab</p>
          <p className="mt-2 text-ink-3 leading-relaxed">
            E-commerce stores and apps, set up on your own cloud.
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
        <p>© 2026 Mechatron Lab</p>
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
