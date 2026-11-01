"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import { imageDimensions } from "@/lib/image-dimensions";
import React from "react";
import Image from "@/components/ui/LocalizedImage";
import { ExternalLink, Smartphone } from "lucide-react";

interface AppScreen {
  src: string;
  title: string;
  subtitle: string;
}

const SCREENS: AppScreen[] = [
  {
    src: "/showcase/mechatron-app/screen-2.png",
    title: englishMessage("MobileAppScreenshots.storefront.catalog.79138b3"),
    subtitle: englishMessage("MobileAppScreenshots.instant.search.sub.category.tabs.live.stock.8199619"),
  },
  {
    src: "/showcase/mechatron-app/screen-3.png",
    title: englishMessage("MobileAppScreenshots.product.specifications.afb326c"),
    subtitle: englishMessage("MobileAppScreenshots.pinouts.datasheets.wholesale.tiers.add.to.ca.c330fc5"),
  },
  {
    src: "/showcase/mechatron-app/screen-4.png",
    title: englishMessage("MobileAppScreenshots.1.tap.checkout.97f041f"),
    subtitle: englishMessage("MobileAppScreenshots.upi.cards.cod.automated.tax.invoice.routing.e2be60b"),
  },
  {
    src: "/showcase/mechatron-app/screen-5.png",
    title: englishMessage("MobileAppScreenshots.order.tracking.alerts.ce718e0"),
    subtitle: englishMessage("MobileAppScreenshots.real.time.dispatch.status.airway.bill.push.a.426c43e"),
  },
];

export function MobileAppScreenshots() {
  const translateCopy = useMessages();

  return (
    <div className="space-y-4">
      {/* Top Header Bar */}
      <div className="p-4 rounded-xl border border-line bg-wash/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-ink text-paper flex items-center justify-center shrink-0">
            <Smartphone className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-xs font-semibold text-ink uppercase tracking-wider font-mono">{translateCopy(englishMessage("MobileAppScreenshots.live.production.build.android.ios.97e6e3f"))}</h3>
            <p className="text-xs text-ink-3">{translateCopy(englishMessage("MobileAppScreenshots.actual.application.screens.from.mechatron.la.daf92ea"))}</p>
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper text-xs font-mono text-ink hover:border-ink/60 transition-colors shadow-2xs self-start sm:self-auto"
        >
          <span>{translateCopy(englishMessage("MobileAppScreenshots.view.on.google.play.5733cc6"))}</span>
          <ExternalLink className="h-3.5 w-3.5 text-ink-3" />
        </a>
      </div>

      {/* Screenshots Grid / Scroll Area */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto pb-2">
        {SCREENS.map((screen, idx) => (
          <div
            key={idx}
            className="group flex flex-col rounded-2xl border border-line bg-paper overflow-hidden shadow-2xs hover:shadow-md hover:border-ink/40 transition-all duration-300"
          >
            {/* Phone Screen Frame */}
            <div className="relative aspect-[9/19] w-full bg-wash/40 overflow-hidden border-b border-line/50">
              <Image
                src={screen.src}
                {...imageDimensions(screen.src)}
                sizes="(max-width: 640px) 45vw, 260px"
                alt={translateCopy(screen.title)}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Label */}
            <div className="p-3 bg-paper space-y-0.5">
              <span className="text-[11px] font-mono text-accent font-semibold block">
                0{translateCopy(idx + 1)} · {translateCopy(screen.title)}
              </span>
              <p className="text-[11px] text-ink-3 line-clamp-2 leading-relaxed">
                {translateCopy(screen.subtitle)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
