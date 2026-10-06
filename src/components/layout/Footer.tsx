import React from "react";
import Link from "next/link";
import { BRAND, SHOWCASE_PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import {
  Layers,
  ShieldCheck,
  Globe2,
  Mail,
  MessageSquare,
  ExternalLink,
  Smartphone,
  Cloud,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#05070a] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Parent Company */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-md">
                <div className="h-full w-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Layers className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Mechatron<span className="text-cyan-400">Lab</span> Solutions
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Custom white-label e-commerce platform. We deliver turnkey online
              storefronts, mobile apps (Android & iOS), and the All-in-One
              Admin Panel & CRM with full source code ownership.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge variant="live" size="sm">
                Production Tested
              </Badge>
              <Badge variant="outline" size="sm">
                Zero Platform Cut
              </Badge>
              <Badge variant="outline" size="sm">
                GCP · AWS · Azure
              </Badge>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                {BRAND.contact.email}
              </span>
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Column 2: Platform Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Core Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                Next.js App Router Web
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Flutter Cross-Platform (iOS/Android)
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                MongoDB & Firebase Microservices
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                All-in-One Admin Panel & CRM
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                Multi-Warehouse Dispatch
              </li>
            </ul>
          </div>

          {/* Column 3: Live Showcase */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Live Showcase Proof
            </h4>
            <ul className="space-y-2 text-xs">
              {SHOWCASE_PROJECTS.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{project.title}</span>
                    <ExternalLink className="h-3 w-3 text-slate-500" />
                  </a>
                  <span className="text-[11px] text-slate-400 block">
                    {project.industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subdomains & Regions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Mechatron Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-300 font-mono">solutions.</span>
                <span className="text-slate-400">mechatronlab.com</span>
                <span className="text-[10px] text-cyan-400 block">B2B Portal (Current)</span>
              </li>
              <li>
                <span className="text-slate-300 font-mono">express.</span>
                <span className="text-slate-400">mechatronlab.com</span>
                <span className="text-[10px] text-emerald-400 block">14-Day Launch</span>
              </li>
              <li>
                <span className="text-slate-300 font-mono">white-label-solution.</span>
                <span className="text-slate-400">mechatronlab.com</span>
                <span className="text-[10px] text-indigo-400 block">Direct Inquiries</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Compliance & Legal Subfooter */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span>© 2026 Mechatron Lab. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              GDPR & India DPDP Act Compliant
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>United States</span>
            <span>•</span>
            <span>Europe / UK</span>
            <span>•</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
