import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Layers,
  Smartphone,
  Sliders,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles,
  Bot,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: Mechatron Lab Technical E-Commerce Store & Android App",
  description:
    "See how Mechatron Lab scaled to 1,000+ technical hardware SKUs with an AI shopping assistant, multi-warehouse fulfillment, and native Android app on their private cloud.",
  keywords: [
    "mechatron lab ecommerce case study",
    "technical hardware online store",
    "white label ecommerce case study",
    "multi warehouse inventory ecommerce",
    "self hosted ecommerce case study",
  ],
};

export default function MechatronLabCaseStudyPage() {
  const metrics = [
    { label: "Catalog Scale", value: "1,000+ SKUs", desc: "Technical robotics & electronic parts" },
    { label: "Page Speed", value: "0.9s", desc: "Sub-second load times worldwide" },
    { label: "Fulfillment", value: "Multi-Hub", desc: "Mohali & Shillong warehouses" },
    { label: "Platform Fee", value: "0%", desc: "Zero revenue cuts or per-order fees" },
  ];

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
              Back to Overview
            </Link>
            <Link
              href="/#pricing"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Breadcrumb & Intro */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <Link href="/#showcase" className="hover:text-cyan-400">Case Studies</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">Mechatron Lab</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="primary" size="md">
              Active Client Store
            </Badge>
            <span className="text-xs text-slate-400 font-mono">
              Industry: Hardware, Robotics & Technical Spares
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            How Mechatron Lab Scaled to 1,000+ Hardware SKUs with Multi-Warehouse Dispatch
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            A high-growth technical hardware distributor needed an e-commerce platform that could handle
            thousands of complex spare parts, real-time GST tax calculations, automated inventory dispatch
            across regional hubs, and a native mobile shopping app on Google Play—all running on their private cloud.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://mechatronlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Visit Live Store (mechatronlab.com)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
            >
              <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
              <span>Google Play Store App</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Live Visual Proof Frame */}
        <div className="rounded-3xl overflow-hidden border border-slate-700/80 bg-[#0b0f19] shadow-2xl">
          <div className="bg-[#111726] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400">
              https://mechatronlab.com — Active Client Store
            </span>
            <Badge variant="cyan" size="sm">
              Live Verified
            </Badge>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
            <img
              src="/showcase/mechatron-store.png"
              alt="Mechatron Lab Live Online Storefront"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-slate-800 bg-[#0a0f1c] text-center space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-white">{m.label}</div>
              <div className="text-[11px] text-slate-400">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* The Solution Architecture */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            The White-Label Solution Architecture
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Mechatron Lab was deployed directly onto the client&apos;s private cloud account.
            Instead of paying thousands in monthly SaaS subscriptions and 2% per-order commissions,
            the client maintains 100% control over their database, customer orders, and server keys.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <Bot className="h-4 w-4" />
                <span>AI Shopping Assistant</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                An embedded AI assistant that guides shoppers through technical parts, recommends compatible motor drivers,
                and configures complete DIY kits directly into the cart.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Building2 className="h-4 w-4" />
                <span>Multi-Warehouse Fulfillment</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Smart routing dispatches orders from either the Mohali or Shillong warehouse based on physical stock
                and customer delivery location to slash shipping times.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <Zap className="h-4 w-4" />
                <span>Automated GST Tax Invoicing</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated 18% GST invoice generation with clear base price and tax breakdowns,
                creating ready-to-print B2B and B2C tax invoices instantly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Smartphone className="h-4 w-4" />
                <span>Synchronized Android App</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A native Android application published on Google Play that synchronizes directly with the web catalog,
                allowing returning customers to reorder spares with biometric login.
              </p>
            </div>
          </div>
        </div>

        {/* Admin Dashboard Operations */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Behind the Scenes: The All-in-One Admin & CRM
            </h2>
            <Badge variant="live" size="sm">
              Live Operations
            </Badge>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            The Mechatron Lab operations team manages thousands of parts, low-stock reorder alerts,
            and warehouse packing slips from a single unified dashboard.
          </p>

          <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0b0f19] shadow-xl">
            <img
              src="/showcase/admin-dashboard.png"
              alt="Mechatron Lab Admin Panel and Inventory CRM"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-blue-500/30 bg-gradient-to-br from-[#091120] to-[#070a10] text-center space-y-6">
          <Badge variant="cyan" size="md">
            Launch Your Store on Your Cloud
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Want an Online Store & Mobile Apps Like Mechatron Lab?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get your complete online storefront, Android & iPhone mobile apps, and All-in-One Admin & CRM
            deployed directly to your private cloud in 14 to 21 days for a fixed $4,999 setup.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-xl shadow-cyan-500/20"
            >
              <span>Explore Launch Packages ($4,999)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies/estorealley"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-200 hover:text-white text-sm font-semibold"
            >
              <span>Next Case Study: eStoreAlley →</span>
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
