"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import { priceText } from "@/lib/pricing-catalog";
import React from "react";
import { Section } from "@/components/ui/Section";
import { Check, X, ShieldCheck } from "lucide-react";

export function HomeComparison() {
  const translateCopy = useMessages();

  const comparisonRows = [
    {
      metric: englishMessage("HomeComparison.deployment.timeline.073864d"),
      mechatron: englishMessage("HomeComparison.2.4.weeks.production.tested.57cfd8f"),
      agency: englishMessage("HomeComparison.depends.on.scope.and.integrations.30a2389"),
      saas: englishMessage("HomeComparison.depends.on.configuration.and.integrations.31674bd"),
    },
    {
      metric: englishMessage("HomeComparison.software.license.cost.1037c50"),
      mechatron: priceText(englishMessage("HomeComparison..price.launch.flat.one.time.0.recurring.rent.258d690")),
      agency: englishMessage("HomeComparison.project.quote.based.on.scope.974c163"),
      saas: englishMessage("HomeComparison.plan.usage.and.add.on.fees.vary.a383523"),
    },
    {
      metric: englishMessage("HomeComparison.platform.gmv.sales.commission.8b2ad0a"),
      mechatron: englishMessage("HomeComparison.0.commission.you.keep.100.909ee79"),
      agency: englishMessage("HomeComparison.0.commission.163a1d4"),
      saas: englishMessage("HomeComparison.depends.on.provider.and.payment.setup.54c23d2"),
    },
    {
      metric: englishMessage("HomeComparison.cloud.infrastructure.custody.1972555"),
      mechatron: englishMessage("HomeComparison.100.your.private.aws.cloudflare.vpc.805d3f9"),
      agency: englishMessage("HomeComparison.varies.940a179"),
      saas: englishMessage("HomeComparison.provider.managed.hosting.e2efe83"),
    },
    {
      metric: englishMessage("HomeComparison.unencrypted.source.code.rights.da43dec"),
      mechatron: englishMessage("HomeComparison.full.git.repository.ownership.available.8f43975"),
      agency: englishMessage("HomeComparison.rights.depend.on.the.contract.43a8825"),
      saas: englishMessage("HomeComparison.check.licensing.and.export.options.502fb0f"),
    },
    {
      metric: englishMessage("HomeComparison.dedicated.developer.support.0323c28"),
      mechatron: englishMessage("HomeComparison..15.20.hr.on.demand.525b10c"),
      agency: englishMessage("HomeComparison.rate.and.support.terms.vary.3ef5858"),
      saas: englishMessage("HomeComparison.depends.on.plan.and.support.agreement.359da1c"),
    },
  ];

  return (
    <Section
      wide
      id="comparison"
      index={translateCopy(englishMessage("HomeComparison.02.the.ownership.advantage.a105070"))}
      title={translateCopy(englishMessage("HomeComparison.why.deploy.on.your.own.private.cloud.a7dfbad"))}
      intro={translateCopy(englishMessage("HomeComparison.compare.deployment.scope.ongoing.costs.and.i.f53552a"))}
    >
      <div className="overflow-x-auto border border-line rounded-2xl bg-paper shadow-2xs">
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-line bg-wash/60 text-xs font-mono text-ink-3">
              <th className="py-4 px-6 font-medium">{translateCopy(englishMessage("HomeComparison.evaluation.metric.a000412"))}</th>
              <th className="py-4 px-6 font-semibold text-accent bg-accent/5 border-x border-accent/20">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{translateCopy(englishMessage("HomeComparison.mechatron.lab.foundation.9a954bf"))}</span>
                </span>
              </th>
              <th className="py-4 px-6 font-medium">{translateCopy(englishMessage("HomeComparison.from.scratch.agency.4a3de4a"))}</th>
              <th className="py-4 px-6 font-medium">{translateCopy(englishMessage("HomeComparison.saas.platforms.shopify.ott.saas.2dfe30e"))}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-xs">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-wash/30 transition-colors">
                <td className="py-4 px-6 font-medium text-ink">{translateCopy(row.metric)}</td>
                <td className="py-4 px-6 font-semibold text-ink bg-accent/5 border-x border-accent/20">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    <span>{translateCopy(row.mechatron)}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-ink-2">
                  <div className="flex items-center gap-2">
                    <span className="text-ink-3">—</span>
                    <span>{translateCopy(row.agency)}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-ink-2">
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-rose-500/70 shrink-0" />
                    <span>{translateCopy(row.saas)}</span>
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
