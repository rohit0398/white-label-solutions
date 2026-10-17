import React from "react";
import { Section } from "@/components/ui/Section";
import { Check, X, ShieldCheck } from "lucide-react";

export function HomeComparison() {
  const comparisonRows = [
    {
      metric: "Deployment Timeline",
      mechatron: "2–4 weeks (production-tested)",
      agency: "6–12 months",
      saas: "1–2 weeks (template only)",
    },
    {
      metric: "Software License Cost",
      mechatron: "$4,999 flat one-time (0 recurring rent)",
      agency: "$50,000 – $150,000+",
      saas: "$24,000 – $60,000/year (forever)",
    },
    {
      metric: "Platform GMV / Sales Commission",
      mechatron: "0% commission (you keep 100%)",
      agency: "0% commission",
      saas: "1.5% – 30% recurring platform cut",
    },
    {
      metric: "Cloud Infrastructure Custody",
      mechatron: "100% your private AWS / Cloudflare VPC",
      agency: "Varies",
      saas: "0% (shared multi-tenant lock-in)",
    },
    {
      metric: "Unencrypted Source Code Rights",
      mechatron: "Full Git repository ownership available",
      agency: "Negotiated at extra cost",
      saas: "0% (proprietary black-box)",
    },
    {
      metric: "Dedicated Developer Support",
      mechatron: "$15 – $20/hr on demand",
      agency: "$75 – $150/hr retainer minimum",
      saas: "Limited ticketing support",
    },
  ];

  return (
    <Section
      wide
      id="comparison"
      index="02 · The Ownership Advantage"
      title="Why Deploy on Your Own Private Cloud?"
      intro="Avoid endless monthly software rent and 6-month custom development cycles. Get a verified production codebase deployed directly onto your corporate cloud."
    >
      <div className="overflow-x-auto border border-line rounded-2xl bg-paper shadow-2xs">
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-line bg-wash/60 text-xs font-mono text-ink-3">
              <th className="py-4 px-6 font-medium">Evaluation Metric</th>
              <th className="py-4 px-6 font-semibold text-accent bg-accent/5 border-x border-accent/20">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Mechatron Lab Foundation</span>
                </span>
              </th>
              <th className="py-4 px-6 font-medium">From-Scratch Agency</th>
              <th className="py-4 px-6 font-medium">SaaS Platforms (Shopify / OTT SaaS)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-xs">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-wash/30 transition-colors">
                <td className="py-4 px-6 font-medium text-ink">{row.metric}</td>
                <td className="py-4 px-6 font-semibold text-ink bg-accent/5 border-x border-accent/20">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    <span>{row.mechatron}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-ink-2">
                  <div className="flex items-center gap-2">
                    <span className="text-ink-3">—</span>
                    <span>{row.agency}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-ink-2">
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-rose-500/70 shrink-0" />
                    <span>{row.saas}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
