import React from "react";
import {
  ShieldCheck,
  Lock,
  Code2,
  Server,
  CreditCard,
  Layers,
  Zap,
  Bell,
  Film,
  Smartphone,
  Tv,
  Download,
  Share2,
} from "lucide-react";

export type TechStackMode =
  | "all"
  | "web"
  | "app"
  | "short-drama"
  | "short-drama-app"
  | "short-drama-web"
  | "ott"
  | "ott-web"
  | "ott-app";

export interface TechStackStripProps {
  mode?: TechStackMode;
  headline?: string;
  subheadline?: string;
}

export function TechStackStrip({
  mode = "all",
  headline = "Production-Tested Technologies. Zero Outdated Legacy Code.",
  subheadline = "Deployed to your corporate cloud in 2–4 weeks",
}: TechStackStripProps) {
  // Stacks
  const webStack = [
    { name: "Next.js 16", desc: "React Server Components Storefront", icon: Layers },
    { name: "TypeScript 5.x", desc: "Type-Safe Enterprise Architecture", icon: Code2 },
    { name: "PostgreSQL", desc: "ACID Relational Database & Inventory", icon: Server },
    { name: "Cloudflare", desc: "Global Edge CDN & DDoS Shield", icon: ShieldCheck },
    { name: "Private AWS / GCP", desc: "100% Client-Owned Private VPC", icon: Lock },
    { name: "Stripe & PayPal", desc: "0% Commission Direct Payouts", icon: CreditCard },
  ];

  const appStack = [
    { name: "Flutter 3.x", desc: "Native iOS & Android Mobile Apps", icon: Code2 },
    { name: "Dart / Skia", desc: "60 FPS Hardware-Accelerated Rendering", icon: Zap },
    { name: "Firebase & APNs", desc: "Free Unlimited Push Notifications", icon: Bell },
    { name: "PostgreSQL API", desc: "ACID Central Cloud Synchronization", icon: Server },
    { name: "Private AWS / GCP", desc: "100% Client-Owned Private VPC", icon: Lock },
    { name: "Apple & Google Pay", desc: "0% Commission Direct Payouts", icon: CreditCard },
  ];

  const ecommerceAllStack = [
    { name: "Next.js 16", desc: "React Server Components Storefront", icon: Layers },
    { name: "Flutter 3.x", desc: "Native iOS & Android Mobile Apps", icon: Code2 },
    { name: "PostgreSQL", desc: "ACID Relational Database & Inventory", icon: Server },
    { name: "Cloudflare", desc: "Global Edge CDN & DDoS Shield", icon: ShieldCheck },
    { name: "Private AWS / GCP", desc: "100% Client-Owned Private VPC", icon: Lock },
    { name: "Stripe & PayPal", desc: "0% Commission Direct Payouts", icon: CreditCard },
  ];

  const shortDramaAllStack = [
    { name: "Flutter 3.x", desc: "Native iOS & Android 60FPS Swiper", icon: Smartphone },
    { name: "Next.js 16", desc: "Mobile-First Vertical Web Player", icon: Layers },
    { name: "Cloudflare Stream", desc: "Adaptive HLS Video Transcoding", icon: Film },
    { name: "Apple & Play Store", desc: "In-App Purchase VIP Passes", icon: CreditCard },
    { name: "AdMob & Unity", desc: "Rewarded Video Ads (AVOD)", icon: Zap },
    { name: "Private Cloud VPC", desc: "100% Client-Owned AWS/Cloudflare", icon: Lock },
  ];

  const shortDramaAppStack = [
    { name: "Flutter 3.x", desc: "Native iOS & Android 60FPS Swiper", icon: Smartphone },
    { name: "Apple & Play Store", desc: "In-App Purchase VIP Passes", icon: CreditCard },
    { name: "AdMob & Unity", desc: "Rewarded Video Ads (AVOD)", icon: Zap },
    { name: "Cloudflare Stream", desc: "Adaptive HLS Video Ingest", icon: Film },
    { name: "Firebase / APNs", desc: "Automated Episode Push Alerts", icon: Bell },
    { name: "Private Cloud VPC", desc: "100% Client-Owned AWS Cloud", icon: Lock },
  ];

  const shortDramaWebStack = [
    { name: "Next.js 16", desc: "Mobile-First Vertical Web Player", icon: Layers },
    { name: "HLS.js Engine", desc: "Sub-Second Buffer Auto-Scaling", icon: Film },
    { name: "Stripe Billing", desc: "Direct Recurring VIP Subscriptions", icon: CreditCard },
    { name: "Cloudflare Stream", desc: "Zero-Egress Wholesale CDN", icon: ShieldCheck },
    { name: "Deep-Link Sharing", desc: "Instant Social Playback Links", icon: Share2 },
    { name: "Private Cloud VPC", desc: "100% Client-Owned Account", icon: Lock },
  ];

  const ottAllStack = [
    { name: "Next.js 16", desc: "16:9 Widescreen & Smart TV Portal", icon: Layers },
    { name: "Flutter 3.x", desc: "Native iOS, Android & TV Apps", icon: Smartphone },
    { name: "Cloudflare & AWS", desc: "Multi-Bitrate 1080p/4K Transcode", icon: Film },
    { name: "AirPlay & Cast", desc: "1-Tap TV Casting & Background Audio", icon: Tv },
    { name: "Stripe & In-App", desc: "Direct SVOD VIP Subscriptions", icon: CreditCard },
    { name: "Private Cloud VPC", desc: "100% Client-Owned Private VPC", icon: Lock },
  ];

  const ottWebStack = [
    { name: "Next.js 16", desc: "16:9 Widescreen & TV-Ready Hub", icon: Layers },
    { name: "HLS.js Adaptive", desc: "Sub-Second First Frame Buffer", icon: Film },
    { name: "Stripe Billing", desc: "Direct Recurring SVOD VIP Passes", icon: CreditCard },
    { name: "Cloudflare Stream", desc: "Wholesale CDN Video Pipeline", icon: ShieldCheck },
    { name: "PostgreSQL", desc: "ACID Metadata & Video Database", icon: Server },
    { name: "Private Cloud VPC", desc: "100% Client-Owned Account", icon: Lock },
  ];

  const ottAppStack = [
    { name: "Flutter 3.x", desc: "Native iOS & Android Streaming Apps", icon: Smartphone },
    { name: "AirPlay & Chromecast", desc: "1-Tap Big-Screen TV Casting", icon: Tv },
    { name: "Offline Storage", desc: "Encrypted Local Downloads", icon: Download },
    { name: "Apple & Play Store", desc: "In-App Purchase VIP Passes", icon: CreditCard },
    { name: "Cloudflare Stream", desc: "Multi-Bitrate Adaptive HLS", icon: Film },
    { name: "Private Cloud VPC", desc: "100% Client-Owned AWS Account", icon: Lock },
  ];

  const stackMap: Record<TechStackMode, typeof webStack> = {
    all: ecommerceAllStack,
    web: webStack,
    app: appStack,
    "short-drama": shortDramaAllStack,
    "short-drama-app": shortDramaAppStack,
    "short-drama-web": shortDramaWebStack,
    ott: ottAllStack,
    "ott-web": ottWebStack,
    "ott-app": ottAppStack,
  };

  const stack = stackMap[mode] ?? ecommerceAllStack;

  const isVideo = mode.startsWith("short-drama") || mode.startsWith("ott");

  const assurances = isVideo
    ? [
        { label: "Mutual NDA on Request", icon: Lock },
        { label: "100% Private Cloud VPC (AWS / Cloudflare)", icon: Server },
        { label: "Signed DRM URL Video Stream Protection", icon: ShieldCheck },
        { label: "Unencrypted Git Repositories Delivered", icon: Code2 },
      ]
    : [
        { label: "Mutual NDA on Request", icon: Lock },
        { label: "100% Private Cloud VPC (Zero Multi-Tenancy)", icon: Server },
        { label: "PCI-DSS Level 1 Tokenized Checkout", icon: ShieldCheck },
        { label: "Unencrypted Git Repositories Delivered", icon: Code2 },
      ];

  return (
    <section className="border-y border-line bg-wash py-10">
      <div className="wrap space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              Modern Engineering Stack
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-ink mt-0.5">
              {headline}
            </h3>
          </div>
          <span className="text-xs font-mono text-ink-3 hidden sm:inline">
            {subheadline}
          </span>
        </div>

        {/* 6-Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-line bg-paper/60 hover:bg-paper hover:border-ink/30 transition-all duration-200 flex flex-col justify-between space-y-2 group"
              >
                <div className="h-7 w-7 rounded-lg bg-wash border border-line flex items-center justify-center text-ink-2 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-ink tracking-tight">{item.name}</p>
                  <p className="text-[11px] text-ink-3 leading-snug mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Guarantees Strip */}
        <div className="pt-2 border-t border-line/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink-3">
          {assurances.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{a.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
