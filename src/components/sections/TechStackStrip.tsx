"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
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
  headline = englishMessage("home.production.tested.technologies.zero.outdated.28783bc"),
  subheadline = englishMessage("TechStackStrip.deployed.to.your.corporate.cloud.in.2.4.week.0a1aa1a"),
}: TechStackStripProps) {
  const translateCopy = useMessages();

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
    { name: "Flutter 3.x", desc: englishMessage("TechStackStrip.native.ios.android.60fps.swiper.8556668"), icon: Smartphone },
    { name: "Next.js 16", desc: englishMessage("TechStackStrip.mobile.first.vertical.web.player.de59e85"), icon: Layers },
    { name: "Cloudflare Stream", desc: englishMessage("TechStackStrip.adaptive.hls.video.transcoding.4741d48"), icon: Film },
    { name: englishMessage("TechStackStrip.apple.play.store.070a631"), desc: englishMessage("TechStackStrip.in.app.purchase.vip.passes.3127556"), icon: CreditCard },
    { name: englishMessage("TechStackStrip.admob.unity.46a5b2f"), desc: englishMessage("TechStackStrip.rewarded.video.ads.avod.35e15cc"), icon: Zap },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.aws.cloudflare.42f155a"), icon: Lock },
  ];

  const shortDramaAppStack = [
    { name: "Flutter 3.x", desc: englishMessage("TechStackStrip.native.ios.android.60fps.swiper.8556668"), icon: Smartphone },
    { name: englishMessage("TechStackStrip.apple.play.store.070a631"), desc: englishMessage("TechStackStrip.in.app.purchase.vip.passes.3127556"), icon: CreditCard },
    { name: englishMessage("TechStackStrip.admob.unity.46a5b2f"), desc: englishMessage("TechStackStrip.rewarded.video.ads.avod.35e15cc"), icon: Zap },
    { name: "Cloudflare Stream", desc: englishMessage("TechStackStrip.adaptive.hls.video.ingest.e14ffaf"), icon: Film },
    { name: englishMessage("TechStackStrip.firebase.apns.f1a1e51"), desc: englishMessage("TechStackStrip.automated.episode.push.alerts.5348ca7"), icon: Bell },
    { name: englishMessage("home.private.cloud.vpc.b8691a9"), desc: englishMessage("TechStackStrip.100.client.owned.aws.cloud.1dc6608"), icon: Lock },
  ];

  const shortDramaWebStack = [
    { name: "Next.js 16", desc: englishMessage("TechStackStrip.mobile.first.vertical.web.player.de59e85"), icon: Layers },
    { name: englishMessage("TechStackStrip.hls.js.engine.aa7ede5"), desc: englishMessage("TechStackStrip.sub.second.buffer.auto.scaling.73bfb86"), icon: Film },
    { name: englishMessage("TechStackStrip.stripe.billing.9517bf0"), desc: englishMessage("TechStackStrip.direct.recurring.vip.subscriptions.1c8d683"), icon: CreditCard },
    { name: "Cloudflare Stream", desc: englishMessage("TechStackStrip.zero.egress.wholesale.cdn.0bbdc46"), icon: ShieldCheck },
    { name: englishMessage("TechStackStrip.deep.link.sharing.2c3b621"), desc: englishMessage("TechStackStrip.instant.social.playback.links.1fe7738"), icon: Share2 },
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
        { label: englishMessage("TechStackStrip.mutual.nda.on.request.ee5b3d3"), icon: Lock },
        { label: englishMessage("TechStackStrip.100.private.cloud.vpc.aws.cloudflare.9448706"), icon: Server },
        { label: englishMessage("TechStackStrip.signed.drm.url.video.stream.protection.751c48e"), icon: ShieldCheck },
        { label: englishMessage("TechStackStrip.unencrypted.git.repositories.delivered.30b5811"), icon: Code2 },
      ]
    : [
        { label: englishMessage("TechStackStrip.mutual.nda.on.request.ee5b3d3"), icon: Lock },
        { label: englishMessage("TechStackStrip.100.private.cloud.vpc.zero.multi.tenancy.ec6dcaf"), icon: Server },
        { label: englishMessage("TechStackStrip.pci.dss.level.1.tokenized.checkout.8d345d9"), icon: ShieldCheck },
        { label: englishMessage("TechStackStrip.unencrypted.git.repositories.delivered.30b5811"), icon: Code2 },
      ];

  return (
    <section className="border-y border-line bg-wash py-10">
      <div className="wrap space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">{translateCopy(englishMessage("TechStackStrip.modern.engineering.stack.4f4abf1"))}</p>
            <h2 className="text-lg font-semibold tracking-tight text-ink mt-0.5">
              {translateCopy(headline)}
            </h2>
          </div>
          <span className="text-xs font-mono text-ink-3 hidden sm:inline">
            {translateCopy(subheadline)}
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
                  <p className="font-semibold text-xs text-ink tracking-tight">{translateCopy(item.name)}</p>
                  <p className="text-[11px] text-ink-3 leading-snug mt-0.5">{translateCopy(item.desc)}</p>
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
                <span>{translateCopy(a.label)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
