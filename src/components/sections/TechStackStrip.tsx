"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import { ShortDramaCardRail } from "@/components/sections/ShortDramaCardRail";
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
  type LucideIcon,
} from "lucide-react";

export type TechStackMode =
  | "all"
  | "home"
  | "web"
  | "app"
  | "short-drama"
  | "short-drama-app"
  | "short-drama-web"
  | "ott"
  | "ott-web"
  | "ott-app";

export interface TechStackStripProps {
  wide?: boolean;
  mode?: TechStackMode;
  id?: string;
  headline?: string;
  subheadline?: string;
  children?: React.ReactNode;
}

export function EngineeringCard({
  icon: Icon,
  title,
  description,
  compact = false,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <li className="group flex min-w-0 flex-col justify-between gap-2 rounded-xl border border-line bg-paper/60 p-3.5 transition-colors hover:border-ink/30 hover:bg-paper">
      <div className={`${compact ? "size-7" : "size-8"} flex items-center justify-center rounded-lg border border-line bg-wash text-ink-2 transition-colors group-hover:border-accent/40 group-hover:text-accent`}>
        <Icon className="size-4" aria-hidden="true" />
      </div>
      <div>
        <p className={`font-semibold tracking-tight text-ink ${compact ? "text-xs" : "text-sm"}`}>{title}</p>
        {description && (
          <p className={`mt-0.5 leading-snug text-ink-3 ${compact ? "text-[11px]" : "text-xs"}`}>{description}</p>
        )}
      </div>
    </li>
  );
}

export function TechStackStrip({
  wide = false,
  mode = "all",
  id,
  headline = englishMessage("home.production.tested.technologies.zero.outdated.28783bc"),
  subheadline = englishMessage("TechStackStrip.deployed.to.your.corporate.cloud.in.2.4.week.0a1aa1a"),
  children,
}: TechStackStripProps) {
  const translateCopy = useMessages();
  const hlsStream = {
    name: englishMessage("ShortDrama.top.stack.hls"),
    desc: englishMessage("ShortDrama.top.stack.hlsDescription"),
    icon: Film,
  };

  // Stacks
  const webStack = [
    { name: "Next.js 16", desc: englishMessage("TechStackStrip.react.server.components.storefront.fa5575b"), icon: Layers },
    { name: englishMessage("TechStackStrip.typescript.5.x.7374c4f"), desc: englishMessage("TechStackStrip.type.safe.enterprise.architecture.0dfc9a5"), icon: Code2 },
    { name: "PostgreSQL", desc: englishMessage("TechStackStrip.acid.relational.database.inventory.1cea1cd"), icon: Server },
    { name: "Cloudflare", desc: englishMessage("TechStackStrip.global.edge.cdn.ddos.shield.59c3301"), icon: ShieldCheck },
    { name: englishMessage("TechStackStrip.private.aws.gcp.f411d1f"), desc: englishMessage("TechStackStrip.100.client.owned.private.vpc.3fc1e66"), icon: Lock },
    { name: englishMessage("TechStackStrip.stripe.paypal.24806b5"), desc: englishMessage("TechStackStrip.0.commission.direct.payouts.6ae1c13"), icon: CreditCard },
  ];

  const appStack = [
    { name: "Flutter 3.x", desc: englishMessage("TechStackStrip.native.ios.android.mobile.apps.c15539e"), icon: Code2 },
    { name: englishMessage("TechStackStrip.dart.skia.9d361fa"), desc: englishMessage("TechStackStrip.60.fps.hardware.accelerated.rendering.541811b"), icon: Zap },
    { name: englishMessage("TechStackStrip.firebase.apns.1422050"), desc: englishMessage("TechStackStrip.free.unlimited.push.notifications.21d4e7a"), icon: Bell },
    { name: englishMessage("TechStackStrip.postgresql.api.d034608"), desc: englishMessage("TechStackStrip.acid.central.cloud.synchronization.8daa44c"), icon: Server },
    { name: englishMessage("TechStackStrip.private.aws.gcp.f411d1f"), desc: englishMessage("TechStackStrip.100.client.owned.private.vpc.3fc1e66"), icon: Lock },
    { name: englishMessage("TechStackStrip.apple.google.pay.9255eca"), desc: englishMessage("TechStackStrip.0.commission.direct.payouts.6ae1c13"), icon: CreditCard },
  ];

  const ecommerceAllStack = [
    { name: "Next.js 16", desc: englishMessage("TechStackStrip.react.server.components.storefront.fa5575b"), icon: Layers },
    { name: "Flutter 3.x", desc: englishMessage("TechStackStrip.native.ios.android.mobile.apps.c15539e"), icon: Code2 },
    { name: "PostgreSQL", desc: englishMessage("TechStackStrip.acid.relational.database.inventory.1cea1cd"), icon: Server },
    { name: "Cloudflare", desc: englishMessage("TechStackStrip.global.edge.cdn.ddos.shield.59c3301"), icon: ShieldCheck },
    { name: englishMessage("TechStackStrip.private.aws.gcp.f411d1f"), desc: englishMessage("TechStackStrip.100.client.owned.private.vpc.3fc1e66"), icon: Lock },
    { name: englishMessage("TechStackStrip.stripe.paypal.24806b5"), desc: englishMessage("TechStackStrip.0.commission.direct.payouts.6ae1c13"), icon: CreditCard },
  ];

  const shortDramaAllStack = [
    { name: "Flutter 3.x", desc: englishMessage("ShortDrama.top.stack.mobileCodebase"), icon: Smartphone },
    { name: "Next.js 16", desc: englishMessage("ShortDrama.top.stack.webFramework"), icon: Layers },
    hlsStream,
    { name: englishMessage("TechStackStrip.apple.play.store.070a631"), desc: englishMessage("ShortDrama.top.stack.nativeBilling"), icon: CreditCard },
    { name: englishMessage("TechStackStrip.admob.unity.46a5b2f"), desc: englishMessage("TechStackStrip.rewarded.video.ads.avod.35e15cc"), icon: Zap },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.aws.cloudflare.42f155a"), icon: Lock },
  ];

  const shortDramaAppStack = [
    { name: "Flutter 3.x", desc: englishMessage("ShortDrama.top.stack.mobileCodebase"), icon: Smartphone },
    { name: englishMessage("TechStackStrip.apple.play.store.070a631"), desc: englishMessage("ShortDrama.top.stack.nativeBilling"), icon: CreditCard },
    { name: englishMessage("TechStackStrip.admob.unity.46a5b2f"), desc: englishMessage("TechStackStrip.rewarded.video.ads.avod.35e15cc"), icon: Zap },
    hlsStream,
    { name: englishMessage("TechStackStrip.firebase.apns.f1a1e51"), desc: englishMessage("ShortDrama.top.stack.notificationDelivery"), icon: Bell },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.aws.cloud.1dc6608"), icon: Lock },
  ];

  const shortDramaWebStack = [
    { name: "Next.js 16", desc: englishMessage("ShortDrama.top.stack.webFramework"), icon: Layers },
    { name: englishMessage("TechStackStrip.hls.js.engine.aa7ede5"), desc: englishMessage("ShortDrama.top.stack.browserPlayback"), icon: Film },
    { name: englishMessage("TechStackStrip.stripe.billing.9517bf0"), desc: englishMessage("ShortDrama.top.stack.webBilling"), icon: CreditCard },
    hlsStream,
    { name: englishMessage("TechStackStrip.deep.link.sharing.2c3b621"), desc: englishMessage("ShortDrama.top.stack.episodeRouting"), icon: Share2 },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.account.6f0bc49"), icon: Lock },
  ];

  const ottAllStack = [
    { name: "Next.js 16", desc: englishMessage("TechStackStrip.16.9.widescreen.smart.tv.portal.32673de"), icon: Layers },
    { name: "Flutter 3.x", desc: englishMessage("TechStackStrip.native.ios.android.tv.apps.014934c"), icon: Smartphone },
    { name: englishMessage("TechStackStrip.cloudflare.aws.0bffcf1"), desc: englishMessage("TechStackStrip.multi.bitrate.1080p.4k.transcode.0a99ce2"), icon: Film },
    { name: englishMessage("TechStackStrip.airplay.cast.dd49670"), desc: englishMessage("TechStackStrip.1.tap.tv.casting.background.audio.c5c7100"), icon: Tv },
    { name: englishMessage("TechStackStrip.stripe.in.app.625c549"), desc: englishMessage("TechStackStrip.direct.svod.vip.subscriptions.b3b8e44"), icon: CreditCard },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.private.vpc.3fc1e66"), icon: Lock },
  ];

  const ottWebStack = [
    { name: "Next.js 16", desc: englishMessage("TechStackStrip.16.9.widescreen.tv.ready.hub.7724228"), icon: Layers },
    { name: englishMessage("TechStackStrip.hls.js.adaptive.da7bc87"), desc: englishMessage("TechStackStrip.sub.second.first.frame.buffer.ff38dee"), icon: Film },
    { name: englishMessage("TechStackStrip.stripe.billing.9517bf0"), desc: englishMessage("TechStackStrip.direct.recurring.svod.vip.passes.4af2864"), icon: CreditCard },
    { name: "Cloudflare Stream", desc: englishMessage("TechStackStrip.wholesale.cdn.video.pipeline.948274f"), icon: ShieldCheck },
    { name: "PostgreSQL", desc: englishMessage("TechStackStrip.acid.metadata.video.database.02c3bc7"), icon: Server },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.account.6f0bc49"), icon: Lock },
  ];

  const ottAppStack = [
    { name: "Flutter 3.x", desc: englishMessage("TechStackStrip.native.ios.android.streaming.apps.374750a"), icon: Smartphone },
    { name: englishMessage("TechStackStrip.airplay.chromecast.35a8d61"), desc: englishMessage("TechStackStrip.1.tap.big.screen.tv.casting.cd744b0"), icon: Tv },
    { name: englishMessage("TechStackStrip.offline.storage.b7efd1b"), desc: englishMessage("TechStackStrip.encrypted.local.downloads.71341f8"), icon: Download },
    { name: englishMessage("TechStackStrip.apple.play.store.070a631"), desc: englishMessage("TechStackStrip.in.app.purchase.vip.passes.3127556"), icon: CreditCard },
    { name: "Cloudflare Stream", desc: englishMessage("TechStackStrip.multi.bitrate.adaptive.hls.a0f4270"), icon: Film },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.aws.account.11d95aa"), icon: Lock },
  ];

  const stackMap: Record<TechStackMode, typeof webStack> = {
    all: ecommerceAllStack,
    home: [
      ecommerceAllStack[0],
      ecommerceAllStack[1],
      ecommerceAllStack[2],
      hlsStream,
      ecommerceAllStack[4],
      ecommerceAllStack[5],
    ],
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
  const wideLayout = wide || isVideo;
  const stackLabel = translateCopy(englishMessage("TechStackStrip.modern.engineering.stack.4f4abf1"));
  const cards = stack.map(({ name, desc, icon }) => (
    <EngineeringCard key={name} icon={icon} title={translateCopy(name)} description={translateCopy(desc)} compact={!wideLayout} />
  ));

  const assurances = isVideo
    ? [
        { label: englishMessage("TechStackStrip.mutual.nda.on.request.ee5b3d3"), icon: Lock },
        { label: englishMessage("TechStackStrip.100.private.cloud.vpc.aws.cloudflare.9448706"), icon: Server },
        {
          label: englishMessage("ShortDrama.top.stack.signed"),
          icon: ShieldCheck,
        },
        {
          label: englishMessage("ShortDrama.top.stack.source"),
          icon: Code2,
        },
      ]
    : [
        { label: englishMessage("TechStackStrip.mutual.nda.on.request.ee5b3d3"), icon: Lock },
        { label: englishMessage("TechStackStrip.100.private.cloud.vpc.zero.multi.tenancy.ec6dcaf"), icon: Server },
        ...(mode === "home" ? [] : [{ label: englishMessage("TechStackStrip.pci.dss.level.1.tokenized.checkout.8d345d9"), icon: ShieldCheck }]),
        { label: englishMessage("ShortDrama.top.stack.source"), icon: Code2 },
      ];

  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={wideLayout ? "border-t border-line bg-wash pt-10 pb-16 sm:pt-12 sm:pb-20" : "border-y border-line bg-wash py-10"}
    >
      <div className={wideLayout ? "wrap-wide space-y-8" : "wrap space-y-8"}>
        <div className={wideLayout ? "space-y-2" : "flex flex-col justify-between gap-4 sm:flex-row sm:items-center"}>
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">{stackLabel}</p>
            <h2
              id={id ? `${id}-heading` : undefined}
              className={wideLayout ? "mt-1 text-xl font-semibold tracking-tight text-ink sm:text-2xl" : "text-lg font-semibold tracking-tight text-ink mt-0.5"}
            >
              {translateCopy(headline)}
            </h2>
          </div>
          <p className={wideLayout ? "text-sm font-mono text-ink-3" : "text-xs font-mono text-ink-3 hidden sm:inline"}>
            {translateCopy(subheadline)}
          </p>
        </div>

        {/* 6-Technology Grid */}
        {wideLayout ? (
          <ShortDramaCardRail label={stackLabel} desktopColumns="md:grid-cols-3 lg:grid-cols-6">{cards}</ShortDramaCardRail>
        ) : (
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{cards}</ul>
        )}

        {/* 4 Guarantees Strip */}
        <div className={wideLayout
          ? "grid gap-4 border-t border-line/60 pt-5 text-xs font-mono text-ink-3 sm:grid-cols-2"
          : "pt-2 border-t border-line/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink-3"}
        >
          {assurances.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{translateCopy(a.label)}</span>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </section>
  );
}
