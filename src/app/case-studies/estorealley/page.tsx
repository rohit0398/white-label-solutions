import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
  Layers,
  Smartphone,
  Sliders,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Building2,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: eStoreAlley Wholesale Directory & Global Marketplace",
  description:
    "See how eStoreAlley built an international wholesale directory and marketplace with Stripe checkout, multi-vendor merchant listings, and a Google Play Android app.",
  keywords: [
    "estorealley ecommerce case study",
    "wholesale directory marketplace",
    "white label marketplace solution",
    "stripe multi currency ecommerce",
    "readymade marketplace app",
  ],
};

export default function EStoreAlleyCaseStudyPage() {
  const metrics = [
    { label: "Platform Model", value: "Wholesale + Retail", desc: "Dual B2B & B2C merchant listings" },
    { label: "Global Gateway", value: "Stripe v3", desc: "Multi-currency checkout worldwide" },
    { label: "Mobile Channel", value: "Google Play", desc: "Dedicated Android marketplace app" },
    { label: "Platform Fee", value: "0%", desc: "Zero percentage fees on merchant volume" },
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
            <span className="text-emerald-400 font-semibold">eStoreAlley</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="emerald" size="md">
              Active Client Store
            </Badge>
            <span className="text-xs text-slate-400 font-mono">
              Industry: Retail & Wholesale Marketplace Directory
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            How eStoreAlley Created an International Wholesale Directory & Marketplace
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            eStoreAlley required a modern commercial platform capable of serving both retail shoppers
            and verified wholesale suppliers. They needed tiered pricing visibility, international Stripe payments,
            verified merchant profiles, and a published mobile application on Google Play.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://estorealley.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span>Visit Live Store (estorealley.web.app)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.estorealley.app&hl=en_IN"
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
        <div className="rounded-3xl overflow-hidden border border-emerald-500/30 bg-[#0b0f19] shadow-2xl">
          <div className="bg-[#111726] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400">
              https://estorealley.web.app — Active Client Store
            </span>
            <Badge variant="emerald" size="sm">
              Live Verified
            </Badge>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
            <img
              src="/showcase/estorealley-store.png"
              alt="eStoreAlley Live Marketplace Directory Storefront"
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
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-white">{m.label}</div>
              <div className="text-[11px] text-slate-400">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Platform Highlights */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Key Marketplace & Directory Capabilities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            By avoiding proprietary SaaS marketplace tools that charge hefty monthly fees plus 5% transaction cuts,
            eStoreAlley launched on client-owned cloud servers with full source code flexibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Users className="h-4 w-4" />
                <span>Tiered B2B & B2C Pricing</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wholesale buyers see volume price breaks, minimum order quantities (MOQ),
                and credit terms, while retail shoppers see standard consumer pricing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <CreditCard className="h-4 w-4" />
                <span>Global Stripe Integration</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Seamless multi-currency processing supporting Visa, Mastercard, Apple Pay,
                and European payment methods directly to the merchant&apos;s bank account.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <Building2 className="h-4 w-4" />
                <span>Verified Merchant Profiles</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Directory storefront with structured business information, store locations,
                and direct inquiry links for B2B buyers looking for wholesale partners.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090d16] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Smartphone className="h-4 w-4" />
                <span>Google Play Marketplace App</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A dedicated mobile application on Google Play Store giving buyers an app experience
                with instant catalog search and order tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-emerald-500/30 bg-gradient-to-br from-[#08141d] to-[#070a10] text-center space-y-6">
          <Badge variant="emerald" size="md">
            Turnkey Marketplace Setup
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Launch Your Marketplace or Directory on Your Cloud
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Own 100% of your platform, database, and merchant relationships. Deployed directly to
            your private AWS, GCP, or Azure account in 2 to 3 weeks.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-sm font-semibold shadow-xl shadow-emerald-500/20"
            >
              <span>View Pricing Packages ($4,999)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies/mechatron-lab"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-200 hover:text-white text-sm font-semibold"
            >
              <span>← View Mechatron Lab Case Study</span>
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
