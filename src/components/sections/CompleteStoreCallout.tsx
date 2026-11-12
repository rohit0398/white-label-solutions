"use client";

import { ECOMMERCE_PATHS } from "@/lib/solution-paths";
import { englishMessage } from "@/lib/messages";
import { useSite } from "@/components/site/SiteProvider";
import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";
import React from "react";
import { Globe, Smartphone, ShieldCheck } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteStoreCallout() {
  const { language, currency } = useSite();

  return (
    <CompletePackageCallout
      wide
      badge={englishMessage("CompleteShortDramaCallout.all.in.one.short.drama.suite.b8cf31a")}
      title={englishMessage("ecommerce.complete.e.commerce.store.513e59f")}
      subtitle={englishMessage("ecommerce.pre.built.production.ready.architecture.desi.3d7f316")}
      price={displayPackagePrice(FAMILY_PACKAGE.ecommerce, language, currency)}
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Globe,
          title: englishMessage("CompleteStoreCallout.next.js.16.web.storefront.27975e3"),
          desc: englishMessage("EcommerceCallout.storefront"),
        },
        {
          icon: Smartphone,
          title: englishMessage("CompleteStoreCallout.native.ios.android.apps.433bd0f"),
          desc: englishMessage("EcommerceCallout.apps"),
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
      ctaText={englishMessage("CompleteShortDramaCallout.view.platform")}
      ctaHref={ECOMMERCE_PATHS.platform}
    />
  );
}
