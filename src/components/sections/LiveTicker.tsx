import React from "react";

const TICKER_ITEMS = [
  {
    title: "Mechatron Lab",
    detail: "1,000+ Hardware SKUs Live · Android App Active",
  },
  {
    title: "eStoreAlley",
    detail: "B2B Wholesale Marketplace · Stripe Checkout Active",
  },
  {
    title: "Style Gear",
    detail: "D2C Fashion Store · Native Mobile App Active",
  },
  {
    title: "0% Commission",
    detail: "Keep 100% of Sales Profit on Your Private Cloud",
  },
  {
    title: "Cloud Native",
    detail: "Deployed to AWS · Google Cloud · Azure",
  },
  {
    title: "Code Ownership",
    detail: "100% Git Repository Access · Zero Vendor Lock-In",
  },
];

export interface LiveTickerProps {
  items?: { title: string; detail: string }[];
  ariaLabel?: string;
}

export function LiveTicker({ items, ariaLabel }: LiveTickerProps = {}) {
  const activeItems = items || TICKER_ITEMS;
  // Duplicate array once for seamless infinite continuous scroll
  const duplicated = [...activeItems, ...activeItems];

  return (
    <div
      aria-label="Live platform status and production stores ticker"
      className="border-y border-line bg-wash/60 py-3 overflow-hidden select-none"
    >
      <div className="animate-marquee flex items-center gap-10 text-xs font-mono text-ink-2">
        {duplicated.map((item, index) => (
          <div key={index} className="flex items-center gap-2.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-semibold text-ink">{item.title}:</span>
            <span className="text-ink-2">{item.detail}</span>
            <span className="text-line ml-4">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
