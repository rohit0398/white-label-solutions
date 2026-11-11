"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import React from "react";

const TICKER_ITEMS = [
  {
    title: "Mechatron Lab",
    detail: englishMessage("LiveTicker.1.000.hardware.skus.live.android.app.active.4de9e88"),
  },
  {
    title: "eStoreAlley",
    detail: englishMessage("LiveTicker.b2b.wholesale.marketplace.stripe.checkout.ac.b571d59"),
  },
  {
    title: "Style Gear",
    detail: englishMessage("LiveTicker.d2c.fashion.store.native.mobile.app.active.c66e800"),
  },
  {
    title: englishMessage("LiveTicker.0.commission.e1f4858"),
    detail: englishMessage("LiveTicker.keep.100.of.sales.profit.on.your.private.clo.8bc0473"),
  },
  {
    title: englishMessage("LiveTicker.cloud.native.1c57266"),
    detail: englishMessage("LiveTicker.deployed.to.aws.google.cloud.azure.213439b"),
  },
  {
    title: englishMessage("LiveTicker.code.ownership.80ca3ae"),
    detail: englishMessage("constants.add.on.the.full.repositories.with.the.right.fc5bba1"),
  },
];

export interface LiveTickerProps {
  items?: { title: string; detail: string }[];
  ariaLabel?: string;
}

export function LiveTicker({ items, ariaLabel }: LiveTickerProps = {}) {
  const translateCopy = useMessages();

  const activeItems = items || TICKER_ITEMS;
  // Duplicate array once for seamless infinite continuous scroll
  const duplicated = [...activeItems, ...activeItems];

  return (
    <div
      aria-label={translateCopy(ariaLabel ?? englishMessage("LiveTicker.live.platform.status.and.production.stores.t.2abc1a3"))}
      className="border-y border-line bg-wash/60 py-3 overflow-hidden select-none"
    >
      <div className="animate-marquee flex items-center gap-10 text-xs font-mono text-ink-2">
        {duplicated.map((item, index) => (
          <div key={index} className="flex items-center gap-2.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-semibold text-ink">{translateCopy(item.title)}:</span>
            <span className="text-ink-2">{translateCopy(item.detail)}</span>
            <span className="text-line ml-4">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
