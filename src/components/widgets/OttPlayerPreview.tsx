"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import React, { useState } from "react";
import { Play, Lock, Sparkles, Smartphone, Monitor, Heart, Share2, Volume2, Film, CheckCircle2 } from "lucide-react";

type FormatMode = "vertical" | "cinematic";

interface OttPlayerPreviewProps {
  format?: "vertical" | "cinematic" | "both";
}

export function OttPlayerPreview({ format = "both" }: OttPlayerPreviewProps) {
  const translateCopy = useMessages();

  const [mode, setMode] = useState<FormatMode>(format === "cinematic" ? "cinematic" : "vertical");
  const [unlocked, setUnlocked] = useState(false);

  const activeMode = format === "vertical" ? "vertical" : format === "cinematic" ? "cinematic" : mode;

  return (
    <div className="rounded-2xl border border-line bg-wash/50 p-5 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        <div className="space-y-1">
          {activeMode === "vertical" && format === "vertical" ? (
            <>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/10 text-[11px] font-mono text-accent font-semibold">
                <Smartphone className="h-3 w-3" />
                <span>{translateCopy(englishMessage("OttPlayerPreview.vertical.drama.engine.b0783ad"))}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("OttPlayerPreview.interactive.short.drama.player.preview.9.16.3b53815"))}</h3>
              <p className="text-xs sm:text-sm text-ink-3">{translateCopy(englishMessage("OttPlayerPreview.preview.the.60fps.vertical.swipe.gestures.ep.c0f7dba"))}</p>
            </>
          ) : activeMode === "cinematic" && format === "cinematic" ? (
            <>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/10 text-[11px] font-mono text-accent font-semibold">
                <Monitor className="h-3 w-3" />
                <span>{translateCopy(englishMessage("OttPlayerPreview.cinematic.video.engine.e434c3a"))}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("OttPlayerPreview.interactive.cinematic.video.player.preview.1.312e830"))}</h3>
              <p className="text-xs sm:text-sm text-ink-3">{translateCopy(englishMessage("OttPlayerPreview.preview.the.desktop.smart.tv.widescreen.play.39ff0f4"))}</p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/10 text-[11px] font-mono text-accent font-semibold">
                <Sparkles className="h-3 w-3" />
                <span>{translateCopy(englishMessage("OttPlayerPreview.video.streaming.architecture.7466060"))}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("OttPlayerPreview.private.cloud.video.engines.2e7ae4f"))}</h3>
              <p className="text-xs sm:text-sm text-ink-3">{translateCopy(englishMessage("OttPlayerPreview.select.a.format.below.to.preview.the.player.5f7fedc"))}</p>
            </>
          )}
        </div>

        {/* Switcher tabs (ONLY rendered if format === 'both') */}
        {format === "both" && (
          <div className="inline-flex rounded-xl border border-line bg-paper p-1 self-start sm:self-auto shrink-0 shadow-xs">
            <button
              type="button"
              onClick={() => setMode("vertical")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeMode === "vertical"
                  ? "bg-ink text-paper font-semibold shadow-xs"
                  : "text-ink-3 hover:text-ink hover:bg-wash"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>{translateCopy(englishMessage("OttPlayerPreview.9.16.short.dramas.reelshort.752245f"))}</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("cinematic")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeMode === "cinematic"
                  ? "bg-ink text-paper font-semibold shadow-xs"
                  : "text-ink-3 hover:text-ink hover:bg-wash"
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>{translateCopy(englishMessage("OttPlayerPreview.16.9.cinematic.netflix.0e4299e"))}</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Interactive Screen */}
      {activeMode === "vertical" ? (
        <div className="grid lg:grid-cols-[1fr_22rem] gap-8 items-center">
          {/* Mock Smartphone Frame with Realistic AI Asset + Interactive Paywall Overlay */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] border-4 border-line bg-black overflow-hidden shadow-2xl flex flex-col justify-between p-4 text-white select-none">
              {/* Background Mock Video Atmosphere */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/showcase/ott-drama-app.jpg"
                alt={translateCopy(englishMessage("OttPlayerPreview.9.16.short.drama.mobile.app.interface.5cc7807"))}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-1 pointer-events-none" />

              {/* Top HUD with Mechatron Short Logo */}
              <div className="relative z-10 flex items-center justify-between text-xs pt-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono border border-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/favicon.png"
                    alt="Mechatron Lab"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 rounded object-contain shrink-0"
                  />
                  <span>{translateCopy(englishMessage("OttPlayerPreview.ep.14.of.75.1ce0cc5"))}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-300/40 font-mono text-[11px] font-semibold">
                  <Sparkles className="h-3 w-3" />
                  <span>{translateCopy(englishMessage("OttPlayerPreview.vip.access.dccbb80"))}</span>
                </div>
              </div>

              {/* Interactive Cliffhanger Paywall Drawer */}
              <div className="relative z-10 my-auto text-center px-2 space-y-3">
                {!unlocked ? (
                  <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 space-y-2.5 shadow-2xl">
                    <div className="h-10 w-10 mx-auto rounded-full bg-accent/20 text-accent flex items-center justify-center border border-accent/30">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-white">{translateCopy(englishMessage("OttPlayerPreview.next.cliffhanger.episode.15.bac2ee5"))}</p>
                      <p className="text-[11px] text-white/70">{translateCopy(englishMessage("OttPlayerPreview.free.preview.complete.unlock.with.vip.pass.o.ba3438f"))}</p>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() => setUnlocked(true)}
                        className="w-full py-2.5 px-3 rounded-xl bg-accent text-paper font-semibold text-xs hover:opacity-95 active:scale-95 transition-all shadow-md cursor-pointer"
                      >{translateCopy(englishMessage("OttPlayerPreview.watch.ad.to.unlock.episode.30s.954888f"))}</button>
                    </div>
                    <p className="text-[10px] text-white/50">{translateCopy(englishMessage("OttPlayerPreview.simulate.rewarded.ad.subscription.unlock.ef26363"))}</p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-950/85 backdrop-blur-xl border border-emerald-500/40 space-y-2 animate-fade-in shadow-2xl">
                    <div className="h-10 w-10 mx-auto rounded-full bg-accent text-paper flex items-center justify-center shadow-lg">
                      <Play className="h-5 w-5 fill-current translate-x-0.5" />
                    </div>
                    <p className="text-xs font-semibold text-emerald-200">{translateCopy(englishMessage("OttPlayerPreview.episode.15.unlocked.ee3eaac"))}</p>
                    <p className="text-[11px] text-white/80">{translateCopy(englishMessage("OttPlayerPreview.ad.verified.auto.playing.60fps.vertical.dram.8e0e662"))}</p>
                    <button
                      type="button"
                      onClick={() => setUnlocked(false)}
                      className="text-[10px] text-emerald-300 underline underline-offset-2 hover:opacity-80 pt-1 block mx-auto cursor-pointer"
                    >{translateCopy(englishMessage("OttPlayerPreview.reset.simulation.a1e7367"))}</button>
                  </div>
                )}
              </div>

              {/* Bottom Drama Controls & Social Rail */}
              <div className="relative z-10 space-y-3 pb-1">
                <div className="flex items-end justify-between">
                  <div className="space-y-1 max-w-[78%]">
                    <p className="text-xs font-semibold text-white truncate drop-shadow-md">{translateCopy(englishMessage("OttPlayerPreview.echoes.of.betrayal.f62428e"))}</p>
                    <p className="text-[10px] text-white/80 line-clamp-2 leading-relaxed drop-shadow-xs">{translateCopy(englishMessage("OttPlayerPreview.eliza.confronts.julian.about.the.hidden.clau.01b84b1"))}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2.5 text-white/90">
                    <div className="flex flex-col items-center gap-0.5">
                      <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />
                      <span className="text-[10px] font-mono">{translateCopy(englishMessage("OttPlayerPreview.28.4k.52d7d8b"))}</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Share2 className="h-4.5 w-4.5" />
                      <span className="text-[10px] font-mono">{translateCopy(englishMessage("OttPlayerPreview.share.09ca55c"))}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* Details & Monetization Points */}
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{translateCopy(englishMessage("OttPlayerPreview.viral.micro.drama.mechanics.f26fa75"))}</span>
            </span>

            <h4 className="text-2xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("OttPlayerPreview.vertical.short.drama.reels.engine.9.16.3d265c3"))}</h4>
            <p className="text-sm text-ink-2 leading-relaxed">{translateCopy(englishMessage("OttPlayerPreview.engineered.specifically.for.the.high.margin.f675071"))}</p>

            <ul className="space-y-3 text-xs font-medium text-ink-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.fluid.60fps.gesture.swiping.b3fe8a8"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.native.vertical.swipe.transitions.on.ios.and.4fc3028"))}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.vip.subscriptions.svod.08c0726"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.offer.weekly.monthly.and.annual.all.access.v.d0494d8"))}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.rewarded.video.ads.avod.afc773c"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.free.tier.viewers.watch.a.short.30s.rewarded.cc5d45e"))}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.automated.episode.paywalls.c4e155a"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.configure.free.teaser.episodes.e.g.ep.1.5.fr.0de2e59"))}</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_22rem] gap-8 items-center animate-fade-in">
          {/* Mock Widescreen Desktop / TV Player with AI Asset */}
          <div className="relative aspect-video rounded-2xl border border-line bg-black overflow-hidden shadow-2xl flex flex-col justify-between text-white select-none group">
            {/* Background Asset */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/showcase/ott-cinematic-web.jpg"
              alt={translateCopy(englishMessage("OttPlayerPreview.16.9.cinematic.video.streaming.web.interface.7ebdc6e"))}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/70 z-1 pointer-events-none" />

            {/* Top Bar with Mechatron Short Logo */}
            <div className="relative z-10 flex items-center justify-between text-xs p-4 sm:p-5">
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/favicon.png"
                  alt="Mechatron Lab"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded object-contain shrink-0"
                />
                <span className="font-semibold text-sm sm:text-base tracking-tight text-white drop-shadow-md">{translateCopy(englishMessage("OttPlayerPreview.cyber.horizon.da67662"))}</span>
                <span className="px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent text-[10px] font-mono font-semibold">{translateCopy(englishMessage("OttPlayerPreview.4k.hdr.52998f0"))}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-[11px] font-mono bg-black/60 px-2 py-0.5 rounded border border-white/10">{translateCopy(englishMessage("OttPlayerPreview.1080p.abr.299d66b"))}</span>
                <Volume2 className="h-4 w-4" />
              </div>
            </div>

            {/* Center Play Beacon */}
            <div className="relative z-10 my-auto text-center space-y-2">
              <div className="h-12 w-12 sm:h-14 sm:w-14 mx-auto rounded-full bg-accent/95 text-paper flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-xl">
                <Play className="h-6 w-6 fill-current translate-x-0.5" />
              </div>
              <p className="text-xs font-mono text-white/80 drop-shadow-md">{translateCopy(englishMessage("OttPlayerPreview.click.to.resume.s2.e1.ldquo.neo.terra.rdquo.346e7ad"))}</p>
            </div>

            {/* Bottom Controls Strip */}
            <div className="relative z-10 space-y-2 p-4 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="flex items-center justify-between text-xs text-white/80">
                <span className="font-mono text-[11px]">28:14 / 52:00</span>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span>{translateCopy(englishMessage("OttPlayerPreview.audio.english.5.1.320ed6a"))}</span>
                  <span>{translateCopy(englishMessage("OttPlayerPreview.subtitles.on.en.es.de.617adad"))}</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-1/2" />
              </div>
            </div>
          </div>

          {/* Details & Monetization Points */}
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-line bg-paper text-ink font-mono text-xs font-semibold">
              <Film className="h-3.5 w-3.5" />
              <span>{translateCopy(englishMessage("OttPlayerPreview.netflix.prime.video.format.0ea64f0"))}</span>
            </span>

            <h4 className="text-2xl font-semibold tracking-tight text-ink">{translateCopy(englishMessage("OttPlayerPreview.cinematic.widescreen.video.engine.16.9.8abe984"))}</h4>
            <p className="text-sm text-ink-2 leading-relaxed">{translateCopy(englishMessage("OttPlayerPreview.designed.for.high.definition.series.movies.d.8e06316"))}</p>

            <ul className="space-y-3 text-xs font-medium text-ink-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.hls.js.adaptive.bitrates.e57d478"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.dynamic.switching.between.1080p.720p.480p.an.e551845"))}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.multi.language.subtitles.4909f52"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.webvtt.subtitle.track.synchronization.for.gl.c5ea9b9"))}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.recurring.svod.subscriptions.d77f9b3"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.direct.stripe.billing.for.monthly.quarterly.af8f41c"))}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{translateCopy(englishMessage("OttPlayerPreview.cross.device.resume.2d1e3dd"))}</strong>{translateCopy(" ")}{translateCopy(englishMessage("OttPlayerPreview.seamless.continue.watching.sync.between.mobi.a8cf775"))}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
