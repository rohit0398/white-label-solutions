"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { ADMIN_FEATURES } from "@/lib/constants";
import { Layers, FileText, TrendingUp, Users, Sliders } from "lucide-react";

export interface AdminCrmShowcaseProps {
  id?: string;
  index?: string;
  title?: string;
  intro?: string;
}

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  "multi-warehouse": <Layers className="h-4 w-4 text-accent" />,
  "reorder-alerts": <FileText className="h-4 w-4 text-accent" />,
  profit: <TrendingUp className="h-4 w-4 text-accent" />,
  orders: <Users className="h-4 w-4 text-accent" />,
  layout: <Sliders className="h-4 w-4 text-accent" />,
};

export function AdminCrmShowcase({
  id = "admin-crm",
  index = "03",
  title = "Central Operations CRM & Multi-Warehouse Panel",
  intro = "Manage stock across multiple locations, dispatch orders, generate automatic GST/VAT tax invoices, and track profit margins per SKU from one unified private cloud dashboard.",
}: AdminCrmShowcaseProps = {}) {
  return (
    <Section id={id} index={index} title={title} intro={intro} bare>
      {/* Operations Features Grid */}
      <div className="wrap mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ADMIN_FEATURES.slice(0, 3).map((f) => (
            <div
              key={f.id}
              className="p-5 rounded-xl border border-line bg-paper hover:border-ink/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                {FEATURE_ICONS[f.id] || <Layers className="h-4 w-4 text-accent" />}
                <h4 className="text-sm font-semibold text-ink">{f.title}</h4>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Strip for remaining items */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADMIN_FEATURES.slice(3, 5).map((f) => (
            <div
              key={f.id}
              className="p-4 rounded-xl border border-line/60 bg-wash/30 hover:border-line hover:bg-wash/60 transition-colors flex items-start gap-3"
            >
              <div className="mt-0.5 shrink-0">
                {FEATURE_ICONS[f.id] || <Layers className="h-4 w-4 text-accent" />}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-ink">{f.title}</h4>
                <p className="text-xs text-ink-3 leading-relaxed mt-0.5">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Dashboard Screenshot */}
      <div className="wrap-wide group">
        <Screenshot
          src="/showcase/admin-dashboard.png"
          alt="Central Operations CRM and Admin Panel"
          caption="Mechatron Lab central operations panel running on the client's own private cloud account."
          className="transition-transform duration-300 group-hover:scale-[1.008]"
        />
      </div>
    </Section>
  );
}
