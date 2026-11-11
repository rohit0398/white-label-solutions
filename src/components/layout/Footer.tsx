"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import Image from "@/components/ui/LocalizedImage";
import { trackWhatsAppClick } from "@/lib/analytics";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import Link from "@/components/ui/LocalizedLink";
import { BRAND } from "@/lib/constants";
import { CASE_STUDIES_PATH } from "@/lib/content/case-studies";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { useSite } from "@/components/site/SiteProvider";
import { useContactWhatsApp } from "@/components/site/useContactWhatsApp";
import { TRANSLATIONS } from "@/lib/translations";

const footerLinkClass = "flex min-h-11 items-center py-1 text-ink-2 transition-colors [overflow-wrap:anywhere] hover:text-ink md:min-h-7";

export function Footer() {
  const translateCopy = useMessages();
  const whatsappUrl = useContactWhatsApp();
  const groupId = useId();
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

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
        { label: englishMessage("ShortDrama.top.platform.title"), href: "/solutions/short-drama" },
        { label: englishMessage("Footer.short.drama.mobile.app.96b0c6e"), href: "/solutions/short-drama-app-development" },
        { label: englishMessage("Footer.short.drama.website.486bf53"), href: "/solutions/short-drama-website-development" },
        { label: englishMessage("OttOverview.platform.title"), href: "/solutions/ott-streaming" },
        { label: englishMessage("Footer.cinematic.ott.mobile.app.b41f93e"), href: "/solutions/ott-app-development" },
        { label: englishMessage("Footer.cinematic.ott.website.43c6b97"), href: "/solutions/ott-website-development" },
      ],
    },
    {
      title: englishMessage("Footer.company.work.82a90e2"),
      links: [
        { label: englishMessage("Footer.engineering.blog.e223c12"), href: "/blog" },
        { label: t.footer.comparedToShopify, href: "/compare/shopify-alternative" },
        { label: englishMessage("Footer.caseStudies"), href: CASE_STUDIES_PATH },
        { label: englishMessage("Footer.about.mechatron.lab.1d844e8"), href: "/about" },
      ],
    },
    {
      title: englishMessage("Footer.trust.legal.6b59f03"),
      links: [
        { label: englishMessage("Footer.privacy.policy.9db108b"), href: "/privacy" },
        { label: englishMessage("Footer.terms.of.service.0c8a9a9"), href: "/terms" },
        { label: englishMessage("Footer.refund.policy.d5527d0"), href: "/refund-policy" },
        { label: BRAND.contact.email, href: `mailto:${BRAND.contact.email}` },
        { label: englishMessage("Footer.whatsapp.support.aeef9c6"), href: whatsappUrl, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-wash/30">
      <div className="wrap-wide grid gap-y-4 py-5 text-sm md:grid-cols-[1.1fr_1.15fr_1fr_1fr] md:gap-x-5 md:py-8 lg:gap-x-8">
        <div className="min-w-0">
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
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-ink-3 md:text-sm">
            {translateCopy(t.footer.tagline)}
          </p>
          <Link href="/contact" className="mt-1 inline-flex min-h-11 items-center text-sm font-medium text-ink underline-offset-4 hover:underline md:min-h-7">
            {translateCopy(englishMessage("Footer.contact.us.9ad0ccf"))}
          </Link>
        </div>
        <div className="divide-y divide-line border-y border-line md:contents md:divide-y-0">
          {columns.map((col, index) => {
            const panelId = `${groupId}-${index}`;
            const expanded = expandedGroup === col.title;
            const label = translateCopy(col.title);

            return (
              <div key={col.title} className="min-w-0">
                <h2 className="text-sm font-semibold text-ink">
                  <span className="hidden md:block">{label}</span>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setExpandedGroup(expanded ? null : col.title)}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 text-start md:hidden"
                  >
                    {label}
                    <ChevronDown aria-hidden="true" className={`size-4 shrink-0 text-ink-3 motion-safe:transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                </h2>
                <ul id={panelId} className={`${expanded ? "block" : "hidden"} pb-2 md:mt-2 md:block md:pb-0`}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          onClick={() => trackWhatsAppClick("Footer")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={footerLinkClass}
                        >
                          {translateCopy(link.label)}
                        </a>
                      ) : (
                        <Link href={link.href} className={footerLinkClass}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-line/60">
        <div className="wrap-wide flex flex-col gap-2 py-3 text-xs text-ink-3 md:flex-row md:items-center md:justify-between md:gap-4">
          <p className="leading-relaxed">
            © 2026 {translateCopy(BRAND.name)}. {translateCopy(t.footer.copyright)}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 md:shrink-0 md:justify-end">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
