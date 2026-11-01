"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import { priceText } from "@/lib/pricing-catalog";

import React, { useState } from "react";
import Link from "@/components/ui/LocalizedLink";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { ShoppingBag, Smartphone, Tv, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export function HomePlatformsDeck() {
  const translateCopy = useMessages();

  const [activeTab, setActiveTab] = useState<"ecommerce" | "short-drama" | "ott">("ecommerce");

  const tabs = [
    { id: "ecommerce" as const, label: englishMessage("HomePlatformsDeck.01.e.commerce.architecture.17c10e7"), icon: ShoppingBag },
    { id: "short-drama" as const, label: englishMessage("HomePlatformsDeck.02.9.16.short.drama.reels.8aa469c"), icon: Smartphone },
    { id: "ott" as const, label: englishMessage("HomePlatformsDeck.03.16.9.cinematic.video.a39039f"), icon: Tv },
  ];

  return (
    <Section
      id="platforms"
      index={translateCopy(englishMessage("HomePlatformsDeck.01.production.platforms.c4770e5"))}
      title={translateCopy(englishMessage("HomePlatformsDeck.three.pre.built.foundations.deployed.in.week.1186e44"))}
      intro={translateCopy(englishMessage("HomePlatformsDeck.every.system.is.battle.tested.under.real.use.d3401fe"))}
      wide
    >
      <div className="wrap-wide space-y-8">
        {/* Minimalist Horizontal Tab Switcher */}
        <div className="flex flex-wrap gap-2 border-b border-line pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-ink text-paper font-semibold shadow-xs"
                    : "bg-wash text-ink-2 hover:bg-wash/80 hover:text-ink border border-line"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{translateCopy(tab.label)}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: E-Commerce */}
        {activeTab === "ecommerce" && (
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
                <span>{translateCopy(englishMessage("HomePlatformsDeck.flagship.suite.0812fed"))}{" "}{translateCopy(priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")))}</span>
                <span className="text-ink-3">{translateCopy(englishMessage("HomePlatformsDeck..modular.from.d4a0d49"))}{" "}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("HomePlatformsDeck.high.speed.online.storefront.native.shopping.e41ca42"))}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{translateCopy(englishMessage("HomePlatformsDeck.a.unified.omnichannel.retail.stack.next.js.1.241b8df"))}</p>

              <ul className="space-y-2.5 text-xs text-ink-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.sub.second.page.speeds.with.headless.checkou.f02a121"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.native.flutter.ios.android.shopping.apps.pub.7e1c3ae"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.central.crm.with.real.p.l.margin.tracking.an.0eab5b0"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.0.gmv.commission.you.keep.100.of.customer.pa.9645409"))}</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/ecommerce"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-xs font-mono transition-all shadow-xs"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.explore.e.commerce.suite.fa022db"))}{translateCopy(priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")))})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/solutions/ecommerce-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.only.mobile.app.f214c27"))}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))})</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="/solutions/ecommerce-website-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.only.website.682c7b8"))}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))})</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Screenshot
                src="/showcase/mechatron-store.png"
                alt={translateCopy(englishMessage("HomePlatformsDeck.mechatron.lab.e.commerce.store.running.on.pr.47957db"))}
                caption={translateCopy(englishMessage("HomePlatformsDeck.production.next.js.storefront.sub.second.pag.b710403"))}
                priority
              />
            </div>
          </div>
        )}

        {/* Tab 2: 9:16 Short Drama */}
        {activeTab === "short-drama" && (
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
                <span>{translateCopy(englishMessage("HomePlatformsDeck.flagship.suite.0812fed"))}{" "}{translateCopy(priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")))}</span>
                <span className="text-ink-3">{translateCopy(englishMessage("HomePlatformsDeck..modular.from.d4a0d49"))}{" "}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("HomePlatformsDeck.9.16.vertical.short.drama.streaming.platform.182355e"))}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{translateCopy(englishMessage("HomePlatformsDeck.launch.your.branded.reelshort.dramabox.style.6510935"))}</p>

              <ul className="space-y-2.5 text-xs text-ink-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.native.flutter.vertical.swiper.with.zero.buf.cf4498b"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.mobile.first.next.js.web.player.capturing.in.8606ca2"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.pure.svod.avod.monetization.weekly.monthly.v.d25330f"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.automated.cloudflare.stream.transcoding.with.cc231d4"))}</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/short-drama"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-xs font-mono transition-all shadow-xs"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.explore.short.drama.suite.85ba4f7"))}{translateCopy(priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")))})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/solutions/short-drama-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.only.mobile.apps.c745225"))}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))})</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="/solutions/short-drama-website-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.only.website.682c7b8"))}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))})</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Screenshot
                src="/showcase/ott-drama-app-showcase.jpg"
                alt={translateCopy(englishMessage("short-drama.9.16.vertical.short.drama.mobile.app.interfa.3939b91"))}
                caption={translateCopy(englishMessage("short-drama.native.9.16.drama.apps.60fps.swipe.vip.acces.90dfd5d"))}
              />
            </div>
          </div>
        )}

        {/* Tab 3: 16:9 Cinematic Video */}
        {activeTab === "ott" && (
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
                <span>{translateCopy(englishMessage("HomePlatformsDeck.flagship.suite.0812fed"))}{" "}{translateCopy(priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")))}</span>
                <span className="text-ink-3">{translateCopy(englishMessage("HomePlatformsDeck..modular.from.d4a0d49"))}{" "}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("HomePlatformsDeck.16.9.cinematic.video.streaming.netflix.prime.362d5b8"))}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{translateCopy(englishMessage("HomePlatformsDeck.a.cinema.grade.video.streaming.service.for.m.cbb801e"))}</p>

              <ul className="space-y-2.5 text-xs text-ink-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.sub.second.adaptive.hls.bitrates.4k.1080p.72.76d8942"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.1.tap.tv.casting.via.google.chromecast.apple.791823f"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.encrypted.local.video.downloads.for.offline.33c9246"))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.direct.svod.recurring.vip.subscriptions.via.557feee"))}</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/ott-streaming"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-xs font-mono transition-all shadow-xs"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.explore.cinematic.suite.e969ae8"))}{translateCopy(priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")))})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/solutions/ott-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.only.mobile.apps.c745225"))}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))})</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="/solutions/ott-website-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>{translateCopy(englishMessage("HomePlatformsDeck.only.website.682c7b8"))}{translateCopy(priceText(englishMessage("HomePlatformsDeck..price.web.launch.b516fa1")))})</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Screenshot
                src="/showcase/ott-cinematic-web.jpg"
                alt={translateCopy(englishMessage("HomePlatformsDeck.16.9.cinematic.video.streaming.web.portal.in.6322ea5"))}
                caption={translateCopy(englishMessage("ott-streaming.next.js.16.9.widescreen.streaming.hub.contin.3eed242"))}
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
