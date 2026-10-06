"use client";

import React, { useState } from "react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  X,
  Sparkles,
  MessageSquare,
  Mail,
  CheckCircle2,
  Calendar,
  Building,
  User,
  Phone,
} from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: string;
}

export function LeadModal({
  isOpen,
  onClose,
  selectedTierId = "turnkey-setup",
}: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: selectedTierId,
    cloud: "AWS",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl bg-[#090d16]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <Badge variant="cyan" size="sm" className="mb-2">
                <Sparkles className="h-3 w-3 mr-1 text-cyan-400" />
                White-Label Solution Consultation
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Schedule Technical Walkthrough
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Discuss custom requirements, architecture deployment, and source code rights with our engineering team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="h-3.5 w-3.5 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Chen"
                      className="w-full bg-[#0e1422] border border-slate-700/80 rounded-xl px-3 py-2 pl-9 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="h-3.5 w-3.5 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@brand.com"
                      className="w-full bg-[#0e1422] border border-slate-700/80 rounded-xl px-3 py-2 pl-9 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="h-3.5 w-3.5 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0e1422] border border-slate-700/80 rounded-xl px-3 py-2 pl-9 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Company / Brand Name
                  </label>
                  <div className="relative">
                    <Building className="h-3.5 w-3.5 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Retail"
                      className="w-full bg-[#0e1422] border border-slate-700/80 rounded-xl px-3 py-2 pl-9 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Primary Package
                  </label>
                  <select
                    value={formData.package}
                    onChange={(e) =>
                      setFormData({ ...formData, package: e.target.value })
                    }
                    className="w-full bg-[#0e1422] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="turnkey-setup">Turnkey Launch ($4,999)</option>
                    <option value="source-code-license">
                      Source Code & IP License ($1,999)
                    </option>
                    <option value="dedicated-support">
                      Hourly Dedicated Support ($20/hr)
                    </option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Target Cloud Provider
                  </label>
                  <select
                    value={formData.cloud}
                    onChange={(e) =>
                      setFormData({ ...formData, cloud: e.target.value })
                    }
                    className="w-full bg-[#0e1422] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="AWS">Amazon Web Services (AWS)</option>
                    <option value="GCP">Google Cloud Platform (GCP)</option>
                    <option value="Azure">Microsoft Azure</option>
                    <option value="Unsure">Recommend For Me</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="glow" className="w-full py-3">
                  Confirm Walkthrough Request
                </Button>
              </div>
            </form>

            <div className="pt-3 border-t border-slate-800 text-center">
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageSquare className="h-4 w-4" />
                Prefer instant chat? Connect on WhatsApp (+91 98879 98663)
              </a>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="h-14 w-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Walkthrough Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our senior solution architect will reach out to <strong className="text-cyan-300">{formData.email}</strong> within 4 business hours to share sandbox access and schedule the call.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Close Window
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
