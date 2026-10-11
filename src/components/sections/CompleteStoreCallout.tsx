import React from "react";
import Link from "next/link";
import { Store, Globe, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

export function CompleteStoreCallout() {
  return (
    <section className="py-14 border-y border-line bg-wash">
      <div className="wrap">
        <div className="p-8 sm:p-10 rounded-2xl border border-line bg-paper shadow-xs transition-all duration-300 hover:border-ink/40">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
                <Store className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider">All-in-One Package</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                Looking for the Complete E-Commerce Solution?
              </h3>
              <p className="text-sm text-ink-2 max-w-2xl leading-relaxed">
                Need both the web storefront and mobile shopping apps? Launch the unified stack on your private cloud with shared real-time inventory and zero recurring platform cuts.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <span className="font-bold text-accent font-mono">$4,999</span>
              <span className="text-ink-3">one-time investment</span>
            </div>
          </div>

          {/* Horizontal 3-Pillar Grid */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-xl border border-line/60 bg-wash/30 hover:border-line hover:bg-wash/60 transition-colors">
              <div className="flex items-center gap-2 text-ink text-sm font-semibold mb-1.5">
                <Globe className="h-4 w-4 text-accent" />
                <span>Next.js 16 Web Storefront</span>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed">
                Sub-second page speeds, headless checkout, dynamic SEO metadata, and custom domain branding.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-line/60 bg-wash/30 hover:border-line hover:bg-wash/60 transition-colors">
              <div className="flex items-center gap-2 text-ink text-sm font-semibold mb-1.5">
                <Smartphone className="h-4 w-4 text-accent" />
                <span>Native iOS &amp; Android Apps</span>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed">
                Flutter 3.x native binaries published under your developer accounts with push notification engine.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-line/60 bg-wash/30 hover:border-line hover:bg-wash/60 transition-colors">
              <div className="flex items-center gap-2 text-ink text-sm font-semibold mb-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Central Operations CRM</span>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed">
                Multi-warehouse stock, automated GST/VAT tax invoices, order routing, and customer analytics.
              </p>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-xs text-ink-3 font-mono">
              <span className="inline-flex items-center gap-1">✓ Deployed to your AWS / GCP / Azure</span>
              <span className="inline-flex items-center gap-1">✓ 100% Data &amp; User Ownership</span>
              <span className="inline-flex items-center gap-1">✓ 0% Platform Commission</span>
            </div>

            <Link
              href="/solutions/ecommerce"
              className="w-full md:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2.5 px-7 h-12 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-sm transition-all shadow-sm cursor-pointer active:scale-[0.99]"
            >
              <span>Explore Complete Store Package ($4,999)</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

