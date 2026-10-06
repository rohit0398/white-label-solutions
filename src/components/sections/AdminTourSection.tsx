"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export function AdminTourSection() {
  const [activeTab, setActiveTab] = useState(ADMIN_FEATURES[0].id);

  const activeFeature =
    ADMIN_FEATURES.find((f) => f.id === activeTab) || ADMIN_FEATURES[0];

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
        </div>

        {/* Tabbed Interactive Control */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {ADMIN_FEATURES.map((feature) => {
              const isActive = feature.id === activeTab;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-slate-800/90 border-cyan-400/80 shadow-lg shadow-cyan-500/10 text-white"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 shrink-0">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {feature.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Deep Dive Canvas (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 glow-card">
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
                    className="flex items-start gap-2.5 text-xs text-slate-200 bg-[#090d16] p-3 rounded-xl border border-slate-800/80"
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
