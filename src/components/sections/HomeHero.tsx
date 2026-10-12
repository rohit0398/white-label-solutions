"use client";

import React from "react";
import Link from "next/link";
import { useSite } from "@/components/site/SiteProvider";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Smartphone, Tv, MessageSquare, ArrowRight } from "lucide-react";

export function HomeHero() {
  const { openDemo } = useSite();

  const platformCards = [
    {
      title: "E-Commerce",
      badge: "Next.js + Flutter + CRM",
      desc: "Sub-second web store, native shopping apps, and multi-warehouse inventory CRM.",
      href: "/solutions/ecommerce",
      price: "$4,999",
      icon: ShoppingBag,
    },
    {
      title: "9:16 Short Drama",
      badge: "ReelShort & DramaBox Style",
      desc: "60FPS vertical swipe apps, mobile-first web player, and cliffhanger paywalls.",
      href: "/solutions/short-drama",
      price: "$4,999",
      icon: Smartphone,
    },
    {
      title: "16:9 Cinematic OTT",
      badge: "Netflix & Prime Style",
      desc: "Widescreen 4K HDR web portal, TV-ready mobile apps, and central Video CMS.",
      href: "/solutions/ott-streaming",
      price: "$4,999",
      icon: Tv,
    },
  ];

  return (
    <section id="hero" className="pt-16 sm:pt-28 pb-16 sm:pb-20">
      <div className="wrap space-y-6">
        {/* Subtle Status Beacon */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2 select-none shimmer-badge hover:border-ink/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span>Private Cloud Deployment · 2–4 Weeks · 0% Revenue Cut</span>
        </div>

        {/* Concise Direct Headline */}
        <h1 className="text-[2.4rem] sm:text-[3.7rem] font-semibold tracking-[-0.035em] leading-[1.05] max-w-4xl text-ink">
          Production-Ready Platforms. Deployed Directly to Your Cloud.
        </h1>

        {/* Minimalist Subtitle */}
        <p className="text-lg sm:text-xl text-ink-2 leading-relaxed max-w-3xl">
          High-performance Next.js web applications, native Flutter iOS &amp; Android apps, and backoffice management consoles for E-Commerce, 9:16 Short Drama, and 16:9 Cinematic Video. Pay once. You keep 100% of your revenue.
        </p>

        {/* Dual Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Button
            size="md"
            onClick={() => openDemo()}
            className="animate-pulse-ink hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.96] transition-all duration-200"
          >
            <span>Book a platform walkthrough</span>
            <span className="text-paper/70 font-mono text-xs">→</span>
          </Button>

          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-[15px] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0 active:scale-[0.96] transition-all duration-200 animate-pulse-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
          </a>
        </div>

        <p className="pt-2 text-xs font-mono text-ink-3">
          Deployed to your AWS / GCP / Cloudflare account · Full source code option · Keep 100% of sales
        </p>

        {/* 3 Quick-Launch Platform Cards */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {platformCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="p-5 rounded-2xl border border-line bg-wash/40 hover:bg-paper hover:border-ink/40 transition-all duration-200 group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-ink group-hover:text-accent transition-colors">
                    {card.price}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base text-ink group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-ink-3 mt-0.5">{card.badge}</p>
                  <p className="text-xs text-ink-2 leading-relaxed mt-2">{card.desc}</p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-semibold text-accent group-hover:underline">
                  <span>Explore Architecture</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
