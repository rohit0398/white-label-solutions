import React from "react";
import { ShieldCheck, Lock, Code2, Server, CreditCard, Layers, Zap, Bell } from "lucide-react";

export interface TechStackStripProps {
  mode?: "all" | "web" | "app";
}

export function TechStackStrip({ mode = "all" }: TechStackStripProps = {}) {
  const webStack = [
    { name: "Next.js 16", desc: "React Server Components Storefront", icon: Layers },
    { name: "TypeScript 5.x", desc: "Type-Safe Enterprise Architecture", icon: Code2 },
    { name: "PostgreSQL", desc: "ACID Relational Database & Inventory", icon: Server },
    { name: "Cloudflare", desc: "Global Edge CDN & DDoS Shield", icon: ShieldCheck },
    { name: "Private AWS / GCP", desc: "100% Client-Owned Private VPC", icon: Lock },
    { name: "Stripe & PayPal", desc: "0% Commission Direct Payouts", icon: CreditCard },
  ];

  const appStack = [
    { name: "Flutter 3.x", desc: "Native iOS & Android Mobile Apps", icon: Code2 },
    { name: "Dart / Skia", desc: "60 FPS Hardware-Accelerated Rendering", icon: Zap },
    { name: "Firebase & APNs", desc: "Free Unlimited Push Notifications", icon: Bell },
    { name: "PostgreSQL API", desc: "ACID Central Cloud Synchronization", icon: Server },
    { name: "Private AWS / GCP", desc: "100% Client-Owned Private VPC", icon: Lock },
    { name: "Apple & Google Pay", desc: "0% Commission Direct Payouts", icon: CreditCard },
  ];

  const allStack = [
    { name: "Next.js 16", desc: "React Server Components Storefront", icon: Layers },
    { name: "Flutter 3.x", desc: "Native iOS & Android Mobile Apps", icon: Code2 },
    { name: "PostgreSQL", desc: "ACID Relational Database & Inventory", icon: Server },
    { name: "Cloudflare", desc: "Global Edge CDN & DDoS Shield", icon: ShieldCheck },
    { name: "Private AWS / GCP", desc: "100% Client-Owned Private VPC", icon: Lock },
    { name: "Stripe & PayPal", desc: "0% Commission Direct Payouts", icon: CreditCard },
  ];

  const stack = mode === "web" ? webStack : mode === "app" ? appStack : allStack;

  const assurances = [
    { label: "Mutual NDA on Request", icon: Lock },
    { label: "100% Private Cloud VPC (Zero Multi-Tenancy)", icon: Server },
    { label: "PCI-DSS Level 1 Tokenized Checkout", icon: ShieldCheck },
    { label: "Unencrypted Git Repositories Delivered", icon: Code2 },
  ];

  return (
    <section className="border-y border-line bg-wash py-10">
      <div className="wrap space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              Modern Engineering Stack
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-ink mt-0.5">
              Production-Tested Technologies. Zero Outdated Legacy Code.
            </h3>
          </div>
          <span className="text-xs font-mono text-ink-3 hidden sm:inline">
            Deployed to your corporate cloud in 2–4 weeks
          </span>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stack.map((item) => (
            <div
              key={item.name}
              className="p-3.5 rounded-xl border border-line bg-paper hover:border-ink/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="h-8 w-8 rounded-lg bg-wash border border-line flex items-center justify-center text-accent group-hover:scale-105 transition-transform mb-2">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink font-mono">{item.name}</p>
                <p className="text-[10px] text-ink-3 leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Strip */}
        <div className="pt-2 border-t border-line flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-ink-2 font-mono">
          {assurances.map((a) => (
            <div key={a.label} className="flex items-center gap-2">
              <a.icon className="h-3.5 w-3.5 text-accent shrink-0" />
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
