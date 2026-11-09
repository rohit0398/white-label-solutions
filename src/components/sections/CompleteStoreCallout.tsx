"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import { priceText } from "@/lib/pricing-catalog";
import React from "react";
import { Store, Globe, Smartphone, ShieldCheck } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteStoreCallout() {
  const translateCopy = useMessages();

  return (
    <CompletePackageCallout
      wide
      badge={translateCopy(englishMessage("CompletePackageCallout.all.in.one.package.a1ef02a"))}
      title={translateCopy(englishMessage("CompleteStoreCallout.looking.for.the.complete.e.commerce.solution.d0fc478"))}
      subtitle={translateCopy(englishMessage("CompleteStoreCallout.need.both.the.web.storefront.and.mobile.shop.ec80da2"))}
      price={priceText(englishMessage("CompleteOttCallout..price.launch.6843b00"))}
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Globe,
          title: englishMessage("CompleteStoreCallout.next.js.16.web.storefront.27975e3"),
          desc: englishMessage("CompleteStoreCallout.sub.second.page.speeds.headless.checkout.dyn.2aa2cdd"),
        },
        {
          icon: Smartphone,
          title: englishMessage("CompleteStoreCallout.native.ios.android.apps.433bd0f"),
          desc: englishMessage("CompleteStoreCallout.flutter.3.x.native.binaries.published.under.29ffc51"),
        },
        {
          icon: ShieldCheck,
          title: englishMessage("CompleteStoreCallout.central.operations.crm.0482e78"),
          desc: englishMessage("CompleteStoreCallout.multi.warehouse.stock.automated.gst.vat.tax.c61f64d"),
        },
      ]}
      guarantees={[
        "Deployed to your AWS / GCP / Azure",
        "100% Data & User Ownership",
        "0% Platform Commission",
      ]}
      ctaText={priceText(englishMessage("CompleteStoreCallout.explore.complete.store.package.price.launch.87a5a05"))}
      ctaHref="/solutions/ecommerce"
    />
  );
}
