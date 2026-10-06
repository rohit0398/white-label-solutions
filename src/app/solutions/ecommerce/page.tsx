import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, SHOWCASE_PROJECTS, ADMIN_FEATURES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import {
  Layers,
  Smartphone,
  Sliders,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Complete White-Label E-Commerce Platform | Online Store, Mobile Apps & Admin CRM",
  description:
    "Pre-built, easily customized white-label e-commerce solution. High-speed web store, Flutter Android & iOS mobile apps, and an all-in-one Admin Panel & CRM deployed on your own cloud.",
  keywords: [
    "white label ecommerce platform",
    "custom ecommerce development with mobile app",
    "ready made online store with android ios app",
    "ecommerce admin panel and crm",
    "self hosted ecommerce solution",
  ],
};

export default function EcommerceSolutionPillarPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-md">
              <div className="h-full w-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <Layers className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Mechatron<span className="text-cyan-400">Lab</span> Solutions
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/50"
            >
              Overview
            </Link>
            <Link
              href="/#pricing"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Hero */}
        <div className="text-center space-y-6">
          <Badge variant="cyan" size="md">
            <Sparkles className="h-3 w-3 mr-1 text-cyan-400" />
            Core Solution Pillar
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            The Complete White-Label E-Commerce Platform
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything your business needs to sell online at scale. Web storefront,
            native mobile apps, and an all-in-one operations dashboard—pre-built and
            deployed onto <strong className="text-white">your private cloud</strong> in 14 to 21 days.
          </p>
        </div>

        {/* The 4 Core Building Blocks */}
        <div className="space-y-12">
          {/* Block 1: The Storefront */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  1. High-Speed Online Storefront (Website)
                </h2>
                <span className="text-xs text-cyan-400 font-mono">
                  Fast, Responsive Design Tailored to Your Brand Colors
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Fast, conversion-focused online store designed for any catalog size. Supports
              instant variant switching, high-resolution product lookbooks, automated tax calculation
              breakdowns, and seamless checkout supporting cards, UPI, COD, and PayPal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sub-second page loads that maximize conversion</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Built-in Google search engine optimization (SEO)</span>
              </div>
            </div>
          </div>

          {/* Block 2: Mobile Apps */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  2. Ready-to-Publish Android & iPhone Mobile Apps
                </h2>
                <span className="text-xs text-emerald-400 font-mono">
                  One Unified Mobile App for Both Apple iPhone & Android
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Give your shoppers a branded shopping app on the Google Play Store and Apple App Store.
              Includes push notifications for flash sales and order updates, offline cart caching,
              and fast biometric fingerprint/face login.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Published under your company developer accounts</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Free, unlimited promotional push notifications</span>
              </div>
            </div>
          </div>

          {/* Block 3: Admin & CRM */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Sliders className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  3. All-in-One E-Commerce Admin Panel & CRM
                </h2>
                <span className="text-xs text-cyan-400 font-mono">
                  Your Central Business Operations Dashboard
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Manage inventory across multiple store locations and regional warehouses with automated
              dispatch routing. Monitor stock velocity with smart &quot;Days of Stock&quot; reorder alerts,
              track true gross and net profit margins per order after supplier costs, and visually customize
              your homepage layout without code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Multi-warehouse routing and stock allocation</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Real-time profit tracking linked to supplier costs</span>
              </div>
            </div>
          </div>

          {/* Block 4: Private Cloud Deployment */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Cloud className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  4. 100% Deployed on Your Private Cloud
                </h2>
                <span className="text-xs text-indigo-400 font-mono">
                  AWS, Google Cloud (GCP), Azure, or VPS
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              We never host your store on our shared servers. The complete system is deployed inside
              your company cloud account. You hold the master server keys, your customer records stay
              completely private, and you pay standard cloud hosting rates ($20–$50/mo) with zero platform cuts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero percentage cuts on your sales volume</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% full source code license available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Proof Callout - Mechatron Lab First, eStoreAlley Second */}
        <div className="glass-panel rounded-3xl p-8 border border-blue-500/30 space-y-6 bg-gradient-to-br from-[#091120] to-[#070a10]">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              Active Client Stores: Mechatron Lab & eStoreAlley
            </h3>
            <Badge variant="live" size="sm">
              Live Today
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            See the platform running in real active businesses across different business models:
            <br />
            • <strong>Mechatron Lab:</strong> High-volume technical store with 1,000+ SKUs, multi-warehouse routing, and AI shopping assistant.
            <br />
            • <strong>eStoreAlley:</strong> Global retail & wholesale marketplace directory with Stripe checkout and Google Play app.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://mechatronlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600/20 text-cyan-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30"
            >
              Visit Mechatron Lab Store →
            </a>
            <a
              href="https://estorealley.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30"
            >
              Visit eStoreAlley Store →
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 space-y-6">
          <h3 className="text-3xl font-bold text-white">
            Ready to Launch Your White-Label E-Commerce Platform?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Get your store and mobile apps launched in 2 to 3 weeks with fixed, transparent pricing.
          </p>
          <div className="pt-2">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-xl shadow-cyan-500/20"
            >
              <span>View Pricing Packages ($4,999 Setup)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        © 2026 Mechatron Lab Solutions. Deployed on Client-Owned Infrastructure.
      </footer>
    </div>
  );
}
