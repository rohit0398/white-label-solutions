"use client";

import React, { useState, useEffect } from "react";
import { ADMIN_FEATURES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import {
  Building2,
  TrendingUp,
  DollarSign,
  LayoutGrid,
  ShoppingBag,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Database,
  Sliders,
  Play,
  Pause,
  Activity,
} from "lucide-react";

const LIVE_EVENTS = [
  "📦 Wholesale Order #8942 received & dispatched via Primary Hub (Just now)",
  "🔔 Low stock alert: 8 units remaining for Arduino Mega 2560 (1m ago)",
  "📄 Automated GST tax invoice generated & emailed for Order #8941 (3m ago)",
  "📊 Live gross profit margin calculated: +34.2% on Order #8940 (4m ago)",
  "📱 Flash sale push notification campaign sent to 3,840 active app users (6m ago)",
];

export function AdminTourSection() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [eventIndex, setEventIndex] = useState<number>(0);

  const activeFeature = ADMIN_FEATURES[activeTabIndex] || ADMIN_FEATURES[0];

  // Auto-tour timer: advances tab every 6 seconds if not paused by hover or user toggle
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const intervalStep = 50;
    const totalDuration = 6000; // 6 seconds per feature
    const stepIncrement = (intervalStep / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTabIndex((current) => (current + 1) % ADMIN_FEATURES.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered]);

  // Live telemetry ticker auto-cycling every 3.5 seconds
  useEffect(() => {
    const ticker = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % LIVE_EVENTS.length);
    }, 3500);
    return () => clearInterval(ticker);
  }, []);

  const handleSelectTab = (index: number) => {
    setActiveTabIndex(index);
    setProgress(0);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="h-5 w-5 text-cyan-400" />;
      case "TrendingUp":
        return <TrendingUp className="h-5 w-5 text-emerald-400" />;
      case "DollarSign":
        return <DollarSign className="h-5 w-5 text-amber-400" />;
      case "LayoutGrid":
        return <LayoutGrid className="h-5 w-5 text-blue-400" />;
      case "ShoppingBag":
      default:
        return <ShoppingBag className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <section id="admin-tour" className="py-20 bg-[#07090e] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" size="md" className="mb-3">
            <Sliders className="h-3 w-3 mr-1 text-cyan-400" />
            All-in-One Business Command Center
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            All-in-One E-Commerce Admin Panel & CRM
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Most basic e-commerce templates only give you a simple product form. Our white-label
            solution includes a comprehensive business dashboard and CRM: multi-warehouse stock control,
            smart reorder alerts, true order profit tracking, and visual no-code page customizer.
          </p>

          {/* Interactive Guided Auto-Tour Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 text-xs font-mono text-slate-300 transition-colors"
              title={isAutoPlay ? "Pause Guided Tour" : "Resume Guided Tour"}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Auto-Tour Active</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Auto-Tour Paused</span>
                </>
              )}
            </button>
            {isHovered && isAutoPlay && (
              <span className="text-xs text-amber-400/90 font-mono">
                (Paused while mouse is hovering)
              </span>
            )}
          </div>
        </div>

        {/* Tabbed Interactive Control */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Navigation Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {ADMIN_FEATURES.map((feature, idx) => {
              const isActive = activeTabIndex === idx;
              return (
                <button
                  key={feature.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`relative overflow-hidden w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-slate-800/90 border-cyan-400/80 shadow-lg shadow-cyan-500/10 text-white"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 shrink-0">
                    {getIcon(feature.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-100 flex items-center justify-between">
                      <span>{feature.title}</span>
                      {isActive && (
                        <span className="text-[10px] text-cyan-400 font-mono font-normal">
                          Active
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Animated Progress Bar under the Active Tab */}
                  {isActive && isAutoPlay && (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feature Deep Dive Canvas (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 glow-card transition-all duration-500 hover:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0 mt-0.5 sm:mt-0">
                  {getIcon(activeFeature.icon)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {activeFeature.title}
                    </h3>
                    <Badge variant="live" size="sm" className="sm:hidden">
                      Active Client Store
                    </Badge>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono block mt-0.5">
                    White-Label Core Module • 100% Rebrandable
                  </span>
                </div>
              </div>
              <Badge variant="live" size="sm" className="hidden sm:inline-flex shrink-0">
                Active Client Store
              </Badge>
            </div>

            {/* Real Dashboard Screenshot Preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0b0f19] shadow-xl relative group/admin">
              <div className="bg-[#111726] px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px] sm:max-w-none">
                  Commerce Operations & CRM
                </span>
                <Badge variant="cyan" size="sm" className="shrink-0">
                  Live System
                </Badge>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <img
                  src="/showcase/admin-dashboard.png"
                  alt="Live E-Commerce Admin Panel & CRM Dashboard Interface"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/admin:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-30" />
              </div>
            </div>

            {/* Live Telemetry Strip - Auto-Updating Activity */}
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#080d17] border border-cyan-500/30 text-xs shadow-inner">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-bold shrink-0">
                Live Feed:
              </span>
              <span className="text-[11px] text-slate-300 truncate font-mono">
                {LIVE_EVENTS[eventIndex]}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeFeature.description}
            </p>

            {/* Key Capabilities */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400">
                What You Can Do
              </h5>
              <div className="space-y-2">
                {activeFeature.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-200 bg-[#090d16] p-3 rounded-xl border border-slate-800/80 transition-all duration-200 hover:border-cyan-500/40 hover:bg-[#0c1424] hover:text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Proof Stamp */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 flex items-start gap-3">
              <ShieldAlert className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="text-slate-200 block font-mono">
                  TESTED & PROVEN IN ACTIVE STORES
                </strong>
                <span className="text-slate-400">
                  {activeFeature.auditProof}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
