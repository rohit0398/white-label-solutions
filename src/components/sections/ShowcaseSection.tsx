"use client";

import React from "react";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import {
  ExternalLink,
  CheckCircle2,
  Smartphone,
  Eye,
} from "lucide-react";

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 bg-[#06080d] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" size="md" className="mb-3">
            <CheckCircle2 className="h-3 w-3 mr-1 text-cyan-400" />
            Verified Client Stores
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Online Stores Powered by Our Platform
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Don&apos;t settle for unverified templates or risky freelance code. Our white-label e-commerce platform
            powers high-volume technical catalogs, international wholesale directories, and modern D2C apparel.
          </p>
        </div>

        {/* Showcase Grid - Mechatron Lab First, eStoreAlley Second */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SHOWCASE_PROJECTS.map((project, pIndex) => (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl p-6 sm:p-7 border flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1.5 ${
                pIndex === 0
                  ? "border-blue-500/50 shadow-2xl shadow-blue-500/10 bg-[#091120]"
                  : pIndex === 1
                  ? "border-emerald-500/40 shadow-xl shadow-emerald-500/10 bg-[#08131d]"
                  : "border-slate-800 bg-[#0a0e18]"
              }`}
            >
              <div className="space-y-5">
                {/* Header Tag & Industry */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                    {project.industry}
                  </span>
                  <Badge
                    variant={pIndex === 0 ? "primary" : pIndex === 1 ? "emerald" : "live"}
                    size="sm"
                  >
                    {project.badge}
                  </Badge>
                </div>

                {/* Screenshot Visual Window Frame */}
                {project.screenshotUrl && (
                  <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0b0f19] shadow-xl relative group/img">
                    {/* Simulated Mini Browser Bar */}
                    <div className="bg-[#111726] px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 truncate max-w-[140px]">
                        {project.url.replace("https://", "")}
                      </span>
                      <div className="w-5" />
                    </div>

                    {/* Screenshot Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={project.screenshotUrl}
                        alt={`${project.title} active client store screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-40" />
                    </div>
                  </div>
                )}

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0b101c] rounded-xl p-2.5 border border-slate-800 text-center"
                    >
                      <div className="text-sm sm:text-base font-bold text-white font-mono">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Feature Bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techTags.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 border border-blue-500/30 text-xs font-semibold transition-colors"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Visit Live Store</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                    title="View on Google Play Store"
                  >
                    <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                    <span>App</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
