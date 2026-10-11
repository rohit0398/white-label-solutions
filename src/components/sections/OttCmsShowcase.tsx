import React from "react";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { Sparkles, Server, Zap, ShieldCheck, DollarSign } from "lucide-react";

interface OttCmsShowcaseProps {
  index?: string;
}

export function OttCmsShowcase({ index = "02" }: OttCmsShowcaseProps) {
  const capabilities = [
    {
      icon: Zap,
      title: "Automated Cloud Transcoding",
      desc: "Connect your Cloudflare Stream or AWS MediaConvert account. Master videos encode automatically into adaptive multi-bitrate HLS streams (1080p, 720p, 480p) with zero egress bandwidth markups.",
    },
    {
      icon: DollarSign,
      title: "Dynamic Episode Paywall Rules",
      desc: "Configure teaser rules per series in 1 click. Set free preview episodes (e.g., Ep 1–5 free) and lock subsequent cliffhangers behind recurring VIP subscription passes or rewarded video ads.",
    },
    {
      icon: ShieldCheck,
      title: "DRM Token Authorization",
      desc: "Signed token playback prevents hotlinking, stream ripping, and unauthorized redistribution. Google Widevine and Apple FairPlay DRM protection available.",
    },
    {
      icon: Server,
      title: "Real-Time Watch Time & MRR Analytics",
      desc: "Monitor viewer drop-off minute curves per episode, identify top-converting cliffhangers, track VIP subscription conversion velocity, and export financial subscriber reports.",
    },
  ];

  return (
    <Section
      id="video-cms"
      index={`${index} · Video CMS & Operations`}
      title="Video CMS & Cloud Transcoding Operations Console."
      intro="Your centralized administrative console. Manage your content catalog, configure automated cloud encoding pipelines, set episode monetization rules, and track real-time subscriber revenue without recurring SaaS fees."
      wide
    >
      <div className="wrap-wide group">
        <Screenshot
          src="/showcase/ott-video-cms.jpg"
          alt="Video CMS & Cloud Transcoding Operations Dashboard"
          caption={
            <span className="flex items-center justify-between text-xs font-mono text-ink-3">
              <span>Figure 1.0 — Centralized Cloud Video CMS &amp; Episode Paywall Management Console</span>
              <span className="text-accent flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>Self-hosted AWS / Cloudflare Stream</span>
              </span>
            </span>
          }
          className="transition-transform duration-300"
        />
      </div>

      <div className="wrap-wide mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-line">
        {capabilities.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="space-y-2">
              <div className="flex items-center gap-2 text-ink">
                <div className="h-7 w-7 rounded-md bg-wash border border-line flex items-center justify-center text-accent">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <h3 className="font-semibold text-sm tracking-tight">{c.title}</h3>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed">{c.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
