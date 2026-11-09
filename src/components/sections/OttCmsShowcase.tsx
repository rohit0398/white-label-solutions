"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import React from "react";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { Server, Zap, ShieldCheck, DollarSign } from "lucide-react";

interface OttCmsShowcaseProps {
  index?: string;
  shortDramaCapture?: "series" | "episodes";
}

export function OttCmsShowcase({ index = "02", shortDramaCapture = "series" }: OttCmsShowcaseProps) {
  const translateCopy = useMessages();
  const captureLabel = englishMessage(`ShortDrama.media.${shortDramaCapture}`);

  const capabilities = [
    {
      icon: Zap,
      title: englishMessage("ott-streaming.automated.cloud.transcoding.6e545df"),
      desc: englishMessage("ott-streaming.connect.your.cloudflare.stream.or.aws.mediac.0d67b3b"),
    },
    {
      icon: DollarSign,
      title: englishMessage("OttCmsShowcase.dynamic.episode.paywall.rules.d14008c"),
      desc: englishMessage("OttCmsShowcase.configure.teaser.rules.per.series.in.1.click.d603a26"),
    },
    {
      icon: ShieldCheck,
      title: englishMessage("OttCmsShowcase.drm.token.authorization.4fa99b9"),
      desc: englishMessage("OttCmsShowcase.signed.token.playback.prevents.hotlinking.st.4ce3165"),
    },
    {
      icon: Server,
      title: englishMessage("OttCmsShowcase.real.time.watch.time.mrr.analytics.81c8a49"),
      desc: englishMessage("OttCmsShowcase.monitor.viewer.drop.off.minute.curves.per.ep.0d2309d"),
    },
  ];

  return (
    <Section
      id="video-cms"
      index={translateCopy.format("OttCmsShowcase..value0.video.cms.operations.42749f3", { value0: index })}
      title={translateCopy(englishMessage("OttCmsShowcase.video.cms.cloud.transcoding.operations.conso.45348a4"))}
      intro={translateCopy(englishMessage("OttCmsShowcase.your.centralized.administrative.console.mana.4035016"))}
      wide
    >
      <div className="max-w-3xl mx-auto w-full group">
        <Screenshot
          src={`/showcase/microdrama-admin-${shortDramaCapture}.webp`}
          sizes="(min-width: 816px) 768px, calc(100vw - 48px)"
          alt={captureLabel}
          caption={captureLabel}
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
                <h3 className="font-semibold text-sm tracking-tight">{translateCopy(c.title)}</h3>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed">{translateCopy(c.desc)}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
