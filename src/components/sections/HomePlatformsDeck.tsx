"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { ShoppingBag, Smartphone, Tv, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export function HomePlatformsDeck() {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "short-drama" | "ott">("ecommerce");

  const tabs = [
    { id: "ecommerce" as const, label: "01 E-Commerce Architecture", icon: ShoppingBag },
    { id: "short-drama" as const, label: "02 9:16 Short Drama Reels", icon: Smartphone },
    { id: "ott" as const, label: "03 16:9 Cinematic Video", icon: Tv },
  ];

  return (
    <Section
      id="platforms"
      index="01 · Production Platforms"
      title="Three Pre-Built Foundations. Deployed in Weeks."
      intro="Every system is battle-tested under real user traffic and customized for your brand. Deployed directly into your private cloud account with zero recurring software rent."
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
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: E-Commerce */}
        {activeTab === "ecommerce" && (
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
                <span>Flagship Suite · $4,999</span>
                <span className="text-ink-3">· Modular from $2,999</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                High-Speed Online Storefront &amp; Native Shopping Apps
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                A unified omnichannel retail stack. Next.js 16 web storefront with sub-second page loads, cross-platform Flutter mobile apps for iOS and Android, and an operations CRM managing multi-warehouse stock and automated tax invoices.
              </p>

              <ul className="space-y-2.5 text-xs text-ink-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Sub-second page speeds with headless checkout and instant inventory reservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Native Flutter iOS &amp; Android shopping apps published under your developer accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Central CRM with real P&amp;L margin tracking and automated dispatch routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>0% GMV commission · You keep 100% of customer payments directly via Stripe / UPI</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/ecommerce"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-xs font-mono transition-all shadow-xs"
                >
                  <span>Explore E-Commerce Suite ($4,999)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/solutions/ecommerce-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>Only Mobile App ($2,999)</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="/solutions/ecommerce-website-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>Only Website ($2,999)</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Screenshot
                src="/showcase/mechatron-store.png"
                alt="Mechatron Lab e-commerce store running on private cloud"
                caption="Production Next.js Storefront · Sub-Second Page Speeds · Real-time Cloud Inventory"
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
                <span>Flagship Suite · $4,999</span>
                <span className="text-ink-3">· Modular from $2,999</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                9:16 Vertical Short-Drama Streaming Platform
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Launch your branded ReelShort &amp; DramaBox-style streaming platform. Addictive 60FPS vertical swipe gestures on mobile apps, instant-play mobile web player for social traffic, cliffhanger episode paywalls, VIP subscriptions, and Video CMS.
              </p>

              <ul className="space-y-2.5 text-xs text-ink-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Native Flutter vertical swiper with zero-buffering pre-cached episode transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Mobile-first Next.js web player capturing instant play from TikTok &amp; Instagram links</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Pure SVOD &amp; AVOD monetization: Weekly/Monthly VIP passes and rewarded video ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Automated Cloudflare Stream transcoding with zero bandwidth markups</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/short-drama"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-xs font-mono transition-all shadow-xs"
                >
                  <span>Explore Short-Drama Suite ($4,999)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/solutions/short-drama-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>Only Mobile Apps ($2,999)</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="/solutions/short-drama-website-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>Only Website ($2,999)</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Screenshot
                src="/showcase/ott-drama-app-showcase.jpg"
                alt="9:16 vertical short-drama mobile app interface"
                caption="Native 9:16 Drama Apps · 60FPS Swipe · VIP Access · Cloudflare Stream Ingest"
              />
            </div>
          </div>
        )}

        {/* Tab 3: 16:9 Cinematic Video */}
        {activeTab === "ott" && (
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
                <span>Flagship Suite · $4,999</span>
                <span className="text-ink-3">· Modular from $2,999</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                16:9 Cinematic Video Streaming (Netflix &amp; Prime Style)
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                A cinema-grade video streaming service for movies, documentaries, and episodic seasons. Responsive Next.js widescreen web portal, native mobile streaming apps with 1-tap TV casting (Chromecast &amp; AirPlay), and administrative Video CMS.
              </p>

              <ul className="space-y-2.5 text-xs text-ink-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Sub-second adaptive HLS bitrates (4K, 1080p, 720p, 480p) via multi-CDN edge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>1-tap TV casting via Google Chromecast &amp; Apple AirPlay with lockscreen playback controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Encrypted local video downloads for offline viewing during air travel and commutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Direct SVOD recurring VIP subscriptions via Stripe, Apple StoreKit &amp; Google Play</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/ott-streaming"
                  className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-xs font-mono transition-all shadow-xs"
                >
                  <span>Explore Cinematic Suite ($4,999)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/solutions/ott-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>Only Mobile Apps ($2,999)</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="/solutions/ott-website-development"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-2 hover:text-ink underline underline-offset-4"
                >
                  <span>Only Website ($2,999)</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Screenshot
                src="/showcase/ott-cinematic-web.jpg"
                alt="16:9 cinematic video streaming web portal interface"
                caption="Next.js 16:9 Widescreen Streaming Hub · Continue Watching · Genre Carousels"
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
