import React from "react";
import Image from "next/image";
import { ExternalLink, Smartphone } from "lucide-react";

interface AppScreen {
  src: string;
  title: string;
  subtitle: string;
}

const SCREENS: AppScreen[] = [
  {
    src: "/showcase/mechatron-app/screen-2.png",
    title: "Storefront & Catalog",
    subtitle: "Instant search, sub-category tabs & live stock",
  },
  {
    src: "/showcase/mechatron-app/screen-3.png",
    title: "Product Specifications",
    subtitle: "Pinouts, datasheets, wholesale tiers & add-to-cart",
  },
  {
    src: "/showcase/mechatron-app/screen-4.png",
    title: "1-Tap Checkout",
    subtitle: "UPI, Cards, COD & automated tax invoice routing",
  },
  {
    src: "/showcase/mechatron-app/screen-5.png",
    title: "Order Tracking & Alerts",
    subtitle: "Real-time dispatch status, airway bill & push alerts",
  },
];

export function MobileAppScreenshots() {
  return (
    <div className="space-y-4">
      {/* Top Header Bar */}
      <div className="p-4 rounded-xl border border-line bg-wash/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-ink text-paper flex items-center justify-center shrink-0">
            <Smartphone className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-ink uppercase tracking-wider font-mono">
              Live Production Build · Android &amp; iOS
            </h4>
            <p className="text-xs text-ink-3">
              Actual application screens from Mechatron Lab on Google Play Store
            </p>
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper text-xs font-mono text-ink hover:border-ink/60 transition-colors shadow-2xs self-start sm:self-auto"
        >
          <span>View on Google Play</span>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screen.src}
                alt={screen.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Label */}
            <div className="p-3 bg-paper space-y-0.5">
              <span className="text-[11px] font-mono text-accent font-semibold block">
                0{idx + 1} · {screen.title}
              </span>
              <p className="text-[11px] text-ink-3 line-clamp-2 leading-relaxed">
                {screen.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
