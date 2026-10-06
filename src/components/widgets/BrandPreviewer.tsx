"use client";

import React, { useState, useEffect } from "react";
import { BRAND_THEMES } from "@/lib/constants";
import { BrandTheme } from "@/types";
import { Badge } from "@/components/ui/Badge";
import {
  Smartphone,
  Monitor,
  Sparkles,
  ShoppingBag,
  Star,
  CheckCircle2,
  Bot,
  Cloud,
  Play,
  Pause,
} from "lucide-react";

export function BrandPreviewer() {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const selectedTheme = BRAND_THEMES[selectedThemeIndex] || BRAND_THEMES[0];

  // Auto-rotation timer: advances theme every 5 seconds if not paused by hover or manual toggle
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const intervalStep = 50; // update progress every 50ms
    const totalDuration = 5000; // 5 seconds per theme
    const stepIncrement = (intervalStep / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setSelectedThemeIndex((current) => (current + 1) % BRAND_THEMES.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered]);

  const handleSelectTheme = (index: number) => {
    setSelectedThemeIndex(index);
    setProgress(0);
  };

  return (
    <div id="brand-previewer" className="w-full py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="cyan" size="md" className="mb-3">
            <Sparkles className="h-3 w-3 mr-1 text-cyan-400" />
            Easily Configured For Any Brand
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See Your Brand Running on the Storefront & Mobile App
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Our pre-built solution adapts seamlessly to your industry. Switch between example
            business types below to preview how your website and mobile shopping app will look.
          </p>
        </div>

        {/* Theme Selector Pills + Auto-Play Control */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {BRAND_THEMES.map((theme, idx) => {
              const isActive = selectedThemeIndex === idx;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelectTheme(idx)}
                  className={`relative overflow-hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-800 text-white border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-105"
                      : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200 hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full transition-transform duration-300"
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <span>{theme.name}</span>

                  {/* Animated Progress Countdown Bar on Active Tab */}
                  {isActive && isAutoPlay && (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Play / Pause & Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:text-slate-200 transition-colors"
              title={isAutoPlay ? "Pause Auto-Preview" : "Resume Auto-Preview"}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="h-3 w-3 text-cyan-400" />
                  <span>Auto-Preview On</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-emerald-400" />
                  <span>Auto-Preview Paused</span>
                </>
              )}
            </button>
            {isHovered && isAutoPlay && (
              <span className="text-[11px] text-amber-400/90 font-sans">
                (Paused while inspecting)
              </span>
            )}
          </div>
        </div>

        {/* Dual Device Preview Canvas with Hover Pause */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 glow-cyan relative overflow-hidden transition-all duration-500 hover:border-slate-700"
        >
          {/* Subtle glow background */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: selectedTheme.primaryColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Desktop Web Storefront Mockup (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-slate-400 font-mono pb-2">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Monitor className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>
                    Online Storefront{" "}
                    <span className="text-slate-500 font-normal hidden sm:inline">
                      (Fast Responsive Website)
                    </span>
                  </span>
                </span>
                <span className="text-emerald-400 text-[11px] sm:text-xs">
                  ⚡ Loads in &lt; 1s
                </span>
              </div>

              {/* Browser Window Frame */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0b0f19] shadow-2xl">
                {/* Browser Chrome Header */}
                <div className="bg-[#111726] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-[#090d16] px-4 py-1 rounded-md text-[11px] font-mono text-slate-400 border border-slate-800/80 max-w-xs truncate">
                    https://store.{selectedTheme.id}.com
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* Simulated Storefront Content */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Store Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-6 w-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: selectedTheme.primaryColor }}
                      >
                        {selectedTheme.storeName.charAt(0)}
                      </span>
                      <span className="font-bold text-sm text-white">
                        {selectedTheme.storeName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-blue-500/10 text-cyan-300 border border-cyan-500/30">
                        <Bot className="h-3 w-3 text-cyan-400" />
                        Ask AI Assistant
                      </div>
                      <div className="h-7 w-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Hero Headline in Store */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-cyan-400">
                      {selectedTheme.industryName}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {selectedTheme.heroHeadline}
                    </h3>
                  </div>

                  {/* Sample Featured Product Card */}
                  <div className="bg-[#121929] rounded-xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:border-slate-700 hover:bg-[#151f33] hover:shadow-lg group/prod">
                    <div className="space-y-1 w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-medium">
                          {selectedTheme.sampleProduct.category}
                        </span>
                        <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-0.5">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          {selectedTheme.sampleProduct.rating}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-100 group-hover/prod:text-white transition-colors">
                        {selectedTheme.sampleProduct.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        In stock • Fast delivery • Automatic GST & Tax Invoicing
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3">
                      <span className="text-lg font-bold text-white">
                        {selectedTheme.sampleProduct.price}
                      </span>
                      <button
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 hover:brightness-115 hover:shadow-lg"
                        style={{ backgroundColor: selectedTheme.primaryColor }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Flutter Mobile App Mockup (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-slate-400 font-mono pb-2">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Smartphone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Mobile Shopping App{" "}
                    <span className="text-slate-500 font-normal hidden sm:inline">
                      (Android & iOS)
                    </span>
                  </span>
                </span>
                <span className="text-cyan-400 text-[11px] sm:text-xs">
                  Google Play & App Store
                </span>
              </div>

              {/* Smartphone Frame with Micro-Hover Tilt and Glow */}
              <div className="mx-auto max-w-[280px] rounded-[36px] p-3 bg-[#111726] border-2 border-slate-700 shadow-2xl relative transition-all duration-300 hover:border-slate-500 hover:shadow-cyan-500/10 hover:-translate-y-1">
                {/* Speaker Notch */}
                <div className="w-24 h-4 bg-[#07090e] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                </div>

                {/* Mobile Screen */}
                <div className="bg-[#090d16] rounded-[28px] overflow-hidden p-4 space-y-4 border border-slate-800">
                  {/* Mobile App Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-white truncate max-w-[150px]">
                      {selectedTheme.storeName}
                    </span>
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: selectedTheme.primaryColor }}
                    />
                  </div>

                  {/* App Hero Banner with Micro-Interactivity */}
                  <div
                    className="p-3 rounded-xl text-white space-y-1 shadow-md transition-all duration-200 hover:scale-[1.02] hover:brightness-110 cursor-pointer"
                    style={{ backgroundColor: selectedTheme.primaryColor }}
                  >
                    <span className="text-[10px] font-mono tracking-wider opacity-90 uppercase flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                      Push Notifications
                    </span>
                    <p className="text-xs font-bold leading-tight">
                      Alert Customers to Flash Sales & Order Updates
                    </p>
                  </div>

                  {/* Product Mini Tile */}
                  <div className="bg-[#121929] p-3 rounded-xl border border-slate-800 space-y-2 transition-colors hover:border-slate-700">
                    <div className="text-[11px] font-semibold text-slate-200 line-clamp-1">
                      {selectedTheme.sampleProduct.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {selectedTheme.sampleProduct.price}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        In Stock
                      </span>
                    </div>
                  </div>

                  {/* App Bottom Navigation Bar */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-around text-slate-500 text-[10px]">
                    <span className="text-cyan-400 font-bold">Shop</span>
                    <span>Categories</span>
                    <span>Orders</span>
                    <span>Account</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Key Guarantees */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Full branding: customize your logo, colors, and layout</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Smartphone className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Native mobile apps published for Android & Apple iOS</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Cloud className="h-4 w-4 text-blue-400 shrink-0" />
              <span>Deployed directly on your private cloud account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
