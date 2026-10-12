"use client";

import React, { useState } from "react";
import { Play, Lock, Sparkles, Smartphone, Monitor, Heart, Share2, Volume2, Film, CheckCircle2 } from "lucide-react";

type FormatMode = "vertical" | "cinematic";

export function OttPlayerPreview() {
  const [mode, setMode] = useState<FormatMode>("vertical");
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="rounded-2xl border border-line bg-wash/50 p-5 sm:p-8 space-y-8">
      {/* Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/10 text-[11px] font-mono text-accent font-semibold">
            <Sparkles className="h-3 w-3" />
            <span>Dual-Engine Video Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
            One Private Cloud Backend. Two Flagship Viewing Experiences.
          </h3>
          <p className="text-xs sm:text-sm text-ink-3">
            Switch between 9:16 vertical drama reels and 16:9 cinematic widescreen formats below to preview both player engines.
          </p>
        </div>

        <div className="inline-flex rounded-xl border border-line bg-paper p-1 self-start sm:self-auto shrink-0 shadow-xs">
          <button
            type="button"
            onClick={() => setMode("vertical")}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              mode === "vertical"
                ? "bg-ink text-paper font-semibold shadow-xs"
                : "text-ink-3 hover:text-ink hover:bg-wash"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span>9:16 Short Dramas (ReelShort)</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("cinematic")}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              mode === "cinematic"
                ? "bg-ink text-paper font-semibold shadow-xs"
                : "text-ink-3 hover:text-ink hover:bg-wash"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            <span>16:9 Cinematic (Netflix)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Screen */}
      {mode === "vertical" ? (
        <div className="grid lg:grid-cols-[1fr_22rem] gap-8 items-center">
          {/* Mock Smartphone Frame with Realistic AI Asset + Interactive Paywall Overlay */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] border-4 border-line bg-black overflow-hidden shadow-2xl flex flex-col justify-between p-4 text-white select-none">
              {/* Background Mock Video Atmosphere */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/showcase/ott-drama-app.jpg"
                alt="9:16 Short Drama Mobile App Interface"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-1 pointer-events-none" />

              {/* Top HUD */}
              <div className="relative z-10 flex items-center justify-between text-xs pt-2">
                <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-mono border border-white/20">
                  Ep. 14 of 75
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-300/40 font-mono text-[11px] font-semibold">
                  <Sparkles className="h-3 w-3" />
                  <span>VIP ACCESS</span>
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
                      <p className="text-xs font-semibold text-white">
                        Next Cliffhanger: Episode 15
                      </p>
                      <p className="text-[11px] text-white/70">
                        Free preview complete. Unlock with VIP pass or watch a short video ad.
                      </p>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() => setUnlocked(true)}
                        className="w-full py-2.5 px-3 rounded-xl bg-accent text-paper font-semibold text-xs hover:opacity-95 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        Watch Ad to Unlock Episode (30s) →
                      </button>
                    </div>
                    <p className="text-[10px] text-white/50">Simulate rewarded ad / subscription unlock</p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-950/85 backdrop-blur-xl border border-emerald-500/40 space-y-2 animate-fade-in shadow-2xl">
                    <div className="h-10 w-10 mx-auto rounded-full bg-accent text-paper flex items-center justify-center shadow-lg">
                      <Play className="h-5 w-5 fill-current translate-x-0.5" />
                    </div>
                    <p className="text-xs font-semibold text-emerald-200">Episode 15 Unlocked!</p>
                    <p className="text-[11px] text-white/80">
                      Ad verified · Auto-playing 60FPS vertical drama stream...
                    </p>
                    <button
                      type="button"
                      onClick={() => setUnlocked(false)}
                      className="text-[10px] text-emerald-300 underline underline-offset-2 hover:opacity-80 pt-1 block mx-auto cursor-pointer"
                    >
                      Reset simulation
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Drama Controls & Social Rail */}
              <div className="relative z-10 space-y-3 pb-1">
                <div className="flex items-end justify-between">
                  <div className="space-y-1 max-w-[78%]">
                    <p className="text-xs font-semibold text-white truncate drop-shadow-md">
                      Echoes of Betrayal
                    </p>
                    <p className="text-[10px] text-white/80 line-clamp-2 leading-relaxed drop-shadow-xs">
                      Eliza confronts Julian about the hidden clause in her grandfather&apos;s will.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2.5 text-white/90">
                    <div className="flex flex-col items-center gap-0.5">
                      <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />
                      <span className="text-[10px] font-mono">28.4k</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Share2 className="h-4.5 w-4.5" />
                      <span className="text-[10px] font-mono">Share</span>
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
              <span>Viral Micro-Drama Mechanics</span>
            </span>

            <h4 className="text-2xl font-semibold tracking-tight text-ink">
              9:16 Vertical Short-Drama Reels
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed">
              Engineered specifically for the high-margin micro-drama boom (ReelShort, DramaBox, ShortMax format). 60- to 90-second episodes designed for addictive binge watching and high-LTV subscription &amp; ad funnels.
            </p>

            <ul className="space-y-3 text-xs font-medium text-ink-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Fluid 60FPS Gesture Swiping:</strong> Native vertical swipe transitions on iOS &amp; Android built with Flutter.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>VIP Subscriptions (SVOD):</strong> Offer weekly, monthly, and annual all-access VIP passes via Apple StoreKit, Google Play Billing &amp; Stripe.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Rewarded Video Ads (AVOD):</strong> Free-tier viewers watch a short 30s rewarded video ad (Google AdMob / Unity Ads) to unlock subsequent episodes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Automated Episode Paywalls:</strong> Configure free teaser episodes (e.g., Ep 1–5 free) and gate the remaining episodes in the Video CMS.
                </span>
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
              alt="16:9 Cinematic Video Streaming Web Interface"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/70 z-1 pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs p-4 sm:p-5">
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-sm sm:text-base tracking-tight text-white drop-shadow-md">
                  CYBER HORIZON
                </span>
                <span className="px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent text-[10px] font-mono font-semibold">
                  4K HDR
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-[11px] font-mono bg-black/60 px-2 py-0.5 rounded border border-white/10">1080p ABR</span>
                <Volume2 className="h-4 w-4" />
              </div>
            </div>

            {/* Center Play Beacon */}
            <div className="relative z-10 my-auto text-center space-y-2">
              <div className="h-12 w-12 sm:h-14 sm:w-14 mx-auto rounded-full bg-accent/95 text-paper flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-xl">
                <Play className="h-6 w-6 fill-current translate-x-0.5" />
              </div>
              <p className="text-xs font-mono text-white/80 drop-shadow-md">Click to Resume S2:E1 &ldquo;Neo-Terra&rdquo;</p>
            </div>

            {/* Bottom Controls Strip */}
            <div className="relative z-10 space-y-2 p-4 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="flex items-center justify-between text-xs text-white/80">
                <span className="font-mono text-[11px]">28:14 / 52:00</span>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span>Audio: English [5.1]</span>
                  <span>Subtitles: On (EN/ES/DE)</span>
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
              <span>Netflix / Prime Video Format</span>
            </span>

            <h4 className="text-2xl font-semibold tracking-tight text-ink">
              16:9 Cinematic Video Streaming
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed">
              Designed for high-definition series, movies, documentaries, and live channels. Delivers adaptive multi-bitrate HLS streaming across desktop web, mobile browsers, and connected TV devices.
            </p>

            <ul className="space-y-3 text-xs font-medium text-ink-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>HLS.js Adaptive Bitrates:</strong> Dynamic switching between 1080p, 720p, 480p, and 360p based on viewer bandwidth.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Multi-Language Subtitles:</strong> WebVTT subtitle track synchronization for global international viewership.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Recurring SVOD Subscriptions:</strong> Direct Stripe billing for monthly, quarterly, and annual VIP streaming passes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Cross-Device Resume:</strong> Seamless continue-watching sync between mobile app and web player.
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
