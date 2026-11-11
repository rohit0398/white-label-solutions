"use client";

import { homePlatforms } from "@/components/sections/home-platforms";
import { useSite } from "@/components/site/SiteProvider";
import { useMessages } from "@/components/site/useMessages";
import { CurrencySelector } from "@/components/ui/CurrencySelector";
import Link from "@/components/ui/LocalizedLink";
import { Section } from "@/components/ui/Section";
import { englishMessage } from "@/lib/messages";
import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";

export function HomePricing() {
  const translateCopy = useMessages();
  const { language, currency } = useSite();

  return (
    <Section id="pricing" title={englishMessage("HomePricing.title")} intro={englishMessage("EcommercePricing.intro")} wide>
      <div className="space-y-6">
        <CurrencySelector />
        <ul className="grid gap-3 md:grid-cols-3">
          {homePlatforms.map(({ family, title }) => (
            <li key={family} className="space-y-2 rounded-xl border border-line bg-wash/40 p-5">
              <h3 className="font-semibold">{translateCopy(title)}</h3>
              <p className="text-sm font-medium text-ink-2">
                {translateCopy.format("EcommerceHero.setupPrice", { value0: displayPackagePrice(FAMILY_PACKAGE[family], language, currency) })}
              </p>
              <Link href={`/solutions/${family}#pricing`} className="inline-block text-sm font-medium underline underline-offset-4">
                {englishMessage("HomePricing.viewPackages")}
              </Link>
            </li>
          ))}
        </ul>
        <div id="comparison" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/compare/shopify-alternative" className="underline underline-offset-4">{englishMessage("EcommercePricing.compare")}</Link>
        </div>
      </div>
    </Section>
  );
}
