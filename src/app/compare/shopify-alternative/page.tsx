import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, PRICING_TIERS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  XCircle,
  TrendingDown,
  ArrowRight,
  ShieldCheck,
  Cloud,
  Smartphone,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Alternative with No Monthly Fees & Mobile Apps Included | Mechatron Lab",
  description:
    "Looking for a self-hosted Shopify alternative? Launch an online store, native Android & iPhone apps, and all-in-one Admin & CRM deployed on your own cloud. Keep 100% of your sales with 0% platform cuts.",
  keywords: [
    "shopify alternative no monthly fees",
    "shopify alternative self hosted",
    "shopify alternative with mobile app",
    "white label ecommerce platform",
    "ecommerce website one time cost",
    "shopify alternative india us europe",
  ],
};

export default function ShopifyAlternativePage() {
  const comparisonRows = [
    {
      feature: "Monthly Software License Fees",
      mechatron: "$0 / month (Hosted on your private cloud)",
      shopify: "$39 to $2,300+ / month (Shopify Plus)",
      winner: "mechatron",
    },
    {
      feature: "Sales Commission / GMV Cut",
      mechatron: "0% (Keep 100% of your customer revenue)",
      shopify: "0.5% to 2.0% on non-Shopify payment gateways",
      winner: "mechatron",
    },
    {
      feature: "Native Android & iPhone Apps",
      mechatron: "Included in Launch Package (Flutter Single Codebase)",
      shopify: "Requires costly 3rd-party apps ($300–$1,500/mo)",
      winner: "mechatron",
    },
    {
      feature: "Full Source Code Ownership",
      mechatron: "100% Unrestricted Code License Available ($1,999)",
      shopify: "0% (Proprietary platform; you cannot own the code)",
      winner: "mechatron",
    },
    {
      feature: "Customer Data & Server Control",
      mechatron: "100% Private on your AWS, GCP, or Azure account",
      shopify: "Hosted on Shopify shared servers (Vendor Lock-in)",
      winner: "mechatron",
    },
    {
      feature: "Multi-Warehouse Stock Management",
      mechatron: "Built-in with automated dispatch routing by pincode",
      shopify: "Requires third-party app subscriptions",
      winner: "mechatron",
    },
    {
      feature: "Live Profit & Margin Tracking per Order",
      mechatron: "Built-in: matches supplier purchase costs against sales",
      shopify: "Requires third-party ERP or accounting app",
      winner: "mechatron",
    },
    {
      feature: "Custom Business Logic & Gateways",
      mechatron: "Unlimited customization (Direct code modification)",
      shopify: "Restricted by Shopify Liquid & Checkout API limits",
      winner: "mechatron",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation Header */}
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Hero Banner */}
        <div className="text-center space-y-6">
          <Badge variant="cyan" size="md">
            <Sparkles className="h-3 w-3 mr-1 text-cyan-400" />
            Comparison & Migration Guide
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            The Self-Hosted Shopify Alternative{" "}
            <span className="gradient-text-blue block sm:inline">
              With Zero Monthly Fees.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop giving away 2% of your revenue and hundreds every month in app subscriptions.
            Launch a customized online store, native mobile apps, and an all-in-one Admin & CRM
            deployed directly on <strong className="text-white">your private cloud</strong>.
          </p>
        </div>

        {/* Financial Comparison Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-3xl p-7 border border-slate-800 bg-[#0a0f1c] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-semibold text-rose-400">
                THE SHOPIFY TAX
              </span>
              <span className="text-xs text-slate-500">Traditional SaaS</span>
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              $24,000 – $90,000+
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              What an established store spends over 3 years on Shopify Plus fees ($2,000/mo),
              1%–2% gateway transaction cuts, and 3rd-party mobile app builders ($500/mo).
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0" />
                <span>You never own the source code or hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0" />
                <span>App store subscriptions compound every month</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-7 border border-cyan-500/50 bg-[#0d1627] space-y-4 shadow-xl shadow-cyan-500/10">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-semibold text-cyan-400">
                THE MECHATRON WHITE-LABEL MODEL
              </span>
              <Badge variant="live" size="sm">
                You Own Everything
              </Badge>
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">
              $4,999 One-Time
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete turnkey setup deployed directly onto your private AWS, Google Cloud,
              or Azure account. Your standard hosting costs run at just $20–$50/mo.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Keep 100% of your sales with 0% platform cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Android & iOS mobile apps included out-of-the-box</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Full source code ownership option available ($1,999)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Detailed Evaluation Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Feature-by-Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
                  <th className="py-4 px-4">Capability</th>
                  <th className="py-4 px-4 font-bold text-cyan-400">
                    Mechatron White-Label
                  </th>
                  <th className="py-4 px-4 text-slate-400">Shopify / SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20">
                    <td className="py-4 px-4 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-100 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{row.mechatron}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>{row.shopify}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Proof Callout - Mechatron Lab First, eStoreAlley Second */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6 bg-gradient-to-br from-[#0a121e] to-[#070a10]">
          <h3 className="text-xl font-bold text-white">
            Active Client Stores: Mechatron Lab & eStoreAlley
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our platform is not a prototype. It powers live, high-traffic commercial operations:
            <br />
            • <strong>Mechatron Lab:</strong> Technical hardware store handling 1,000+ SKUs with multi-warehouse fulfillment, AI shopping assistant, and native Android app.
            <br />
            • <strong>eStoreAlley:</strong> Global wholesale & retail directory and marketplace with Stripe checkout and Google Play app.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://mechatronlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600/20 text-cyan-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30"
            >
              Inspect Mechatron Lab Live →
            </a>
            <a
              href="https://estorealley.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30"
            >
              Inspect eStoreAlley Live →
            </a>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="text-center py-12 space-y-6">
          <h3 className="text-3xl font-bold text-white">
            Ready to Migrate Away from Recurring Platform Cuts?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Schedule a 30-minute technical walkthrough with our solution architects. We&apos;ll review your current catalog and explain the cloud setup step by step.
          </p>
          <div className="pt-2">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-xl shadow-cyan-500/20"
            >
              <span>Review Commercial Pricing & Packages</span>
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
