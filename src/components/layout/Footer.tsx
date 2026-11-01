"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import Image from "@/components/ui/LocalizedImage";
import { trackWhatsAppClick } from "@/lib/analytics";
import { localizedPath } from "@/lib/site-config";
import React from "react";
import Link from "@/components/ui/LocalizedLink";
import { BRAND } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export function Footer() {
  const translateCopy = useMessages();

  const { language } = useSite();
  const t = TRANSLATIONS[language];

  const columns = [
    {
      title: englishMessage("ecommerce.solutions.05b004a"),
      links: [
        { label: englishMessage("Footer.all.architectures.b75fb98"), href: "/solutions" },
        { label: englishMessage("ecommerce.complete.e.commerce.store.513e59f"), href: "/solutions/ecommerce" },
        { label: englishMessage("Footer.e.commerce.mobile.app.e48da2f"), href: "/solutions/ecommerce-app-development" },
        { label: englishMessage("Footer.e.commerce.website.e37a1d0"), href: "/solutions/ecommerce-website-development" },
        { label: englishMessage("Footer.complete.short.drama.suite.2191d19"), href: "/solutions/short-drama" },
        { label: englishMessage("Footer.short.drama.mobile.app.96b0c6e"), href: "/solutions/short-drama-app-development" },
        { label: englishMessage("Footer.short.drama.website.486bf53"), href: "/solutions/short-drama-website-development" },
        { label: englishMessage("Footer.complete.cinematic.ott.suite.8180988"), href: "/solutions/ott-streaming" },
        { label: englishMessage("Footer.cinematic.ott.mobile.app.b41f93e"), href: "/solutions/ott-app-development" },
        { label: englishMessage("Footer.cinematic.ott.website.43c6b97"), href: "/solutions/ott-website-development" },
      ],
    },
    {
      title: englishMessage("Footer.company.work.82a90e2"),
      links: [
        { label: englishMessage("Footer.engineering.blog.e223c12"), href: "/blog" },
        { label: t.footer.comparedToShopify, href: "/compare/shopify-alternative" },
        { label: englishMessage("Footer.2.4m.short.drama.app.case.study.d1ce8ad"), href: "/case-studies/short-drama-platform" },
        { label: englishMessage("Footer.24.7.linear.ott.network.case.study.7abd557"), href: "/case-studies/ott-streaming-network" },
        { label: englishMessage("Footer.mechatron.lab.store.c3f3334"), href: "/case-studies/mechatron-lab" },
        { label: englishMessage("Footer.estorealley.case.study.99a7857"), href: "/case-studies/estorealley" },
        { label: englishMessage("Footer.about.mechatron.lab.1d844e8"), href: "/about" },
        { label: englishMessage("Footer.contact.engineering.e0ef092"), href: "/contact" },
      ],
    },
    {
      title: englishMessage("Footer.trust.legal.6b59f03"),
      links: [
        { label: englishMessage("Footer.privacy.policy.9db108b"), href: "/privacy" },
        { label: englishMessage("Footer.terms.of.service.0c8a9a9"), href: "/terms" },
        { label: englishMessage("Footer.refund.policy.d5527d0"), href: "/refund-policy" },
        { label: BRAND.contact.email, href: `mailto:${BRAND.contact.email}` },
        { label: englishMessage("Footer.whatsapp.support.aeef9c6"), href: BRAND.contact.whatsappUrl, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="wrap-wide py-16 grid gap-10 sm:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/brand/favicon.png"
              sizes="22px"
              alt="Mechatron Lab"
              width={22}
              height={22}
              className="h-5.5 w-5.5 rounded object-contain shrink-0"
            />
            <p className="font-semibold">{translateCopy(BRAND.name)}</p>
          </div>
          <p className="mt-2 text-ink-3 leading-relaxed">
            {translateCopy(t.footer.tagline)}
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-ink-3">{translateCopy(col.title)}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  {translateCopy("external" in l && l.external ? (
                    <a
                      href={l.href.startsWith("/") ? localizedPath(l.href, language) : l.href}
                      onClick={() => trackWhatsAppClick("Footer")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-2 hover:text-ink"
                    >
                      {translateCopy(l.label)}
                    </a>
                  ) : (
                    <Link href={l.href.startsWith("/") ? localizedPath(l.href, language) : l.href} className="text-ink-2 hover:text-ink">
                      {translateCopy(l.label)}
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap-wide pb-12 pt-6 border-t border-line/60 flex flex-col md:flex-row gap-6 md:items-center justify-between text-xs text-ink-3">
        <div className="space-y-2">
          <p className="font-medium text-ink-2">
            © 2026 {translateCopy(BRAND.name)}. {translateCopy(t.footer.copyright)}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-3">
            <Link href="/privacy" className="hover:text-ink transition-colors">{translateCopy(englishMessage("Footer.privacy.policy.9db108b"))}</Link>
            <span aria-hidden="true" className="text-line">·</span>
            <Link href="/terms" className="hover:text-ink transition-colors">{translateCopy(englishMessage("Footer.terms.of.service.0c8a9a9"))}</Link>
            <span aria-hidden="true" className="text-line">·</span>
            <Link href="/refund-policy" className="hover:text-ink transition-colors">{translateCopy(englishMessage("Footer.refund.policy.d5527d0"))}</Link>
            <span aria-hidden="true" className="text-line">·</span>
            <Link href="/contact" className="hover:text-ink transition-colors">{translateCopy(englishMessage("Footer.contact.us.9ad0ccf"))}</Link>
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
