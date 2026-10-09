"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { BRAND } from "@/lib/constants";
import { CheckCircle2, Send, MessageSquare, Shield, Clock } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [solution, setSolution] = useState("ecommerce");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          company: company.trim() || undefined,
          package: solution,
          message: message.trim() || undefined,
          honeypot,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to send inquiry. Please try again or WhatsApp us directly.");
      }

      // Track Google Ads Conversion AW-18503943905
      trackLeadSubmission(`ContactPage - ${solution}`, 4999);

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed. Please reach out via WhatsApp.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl border border-line bg-wash text-center space-y-4 animate-fade-in">
        <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          Inquiry Received Successfully!
        </h3>
        <p className="text-sm text-ink-2 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-ink">{name}</span>. An engineering lead will review your specifications and reply to <span className="font-semibold text-ink">{email}</span> within 2 hours.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("ContactSuccess")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent bg-accent/10 text-accent font-medium text-xs hover:bg-accent/20 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat Now on WhatsApp (Instant)</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setPhone("");
              setCompany("");
              setMessage("");
            }}
            className="text-xs font-mono text-ink-3 hover:text-ink underline cursor-pointer"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-line bg-wash space-y-5">
      {/* Honeypot anti-spam field */}
      <input
        type="text"
        name="website_url"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-ink">
          Request Architecture Demo &amp; Quote
        </h3>
        <p className="text-xs text-ink-3">
          Discuss your timeline, custom requirements, or schedule a live screen-share demonstration.
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 text-xs">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-mono text-ink-2">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex Morgan"
            className="w-full px-3 py-2 text-sm rounded-lg border border-line bg-paper text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-mono text-ink-2">
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            className="w-full px-3 py-2 text-sm rounded-lg border border-line bg-paper text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink transition-colors"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="block text-xs font-mono text-ink-2">
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 123 4567"
            className="w-full px-3 py-2 text-sm rounded-lg border border-line bg-paper text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-company" className="block text-xs font-mono text-ink-2">
            Company / Brand Name
          </label>
          <input
            id="contact-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your Brand or Startup"
            className="w-full px-3 py-2 text-sm rounded-lg border border-line bg-paper text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-solution" className="block text-xs font-mono text-ink-2">
          Platform of Interest
        </label>
        <select
          id="contact-solution"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          className="w-full px-3 py-2 text-sm rounded-lg border border-line bg-paper text-ink focus:outline-none focus:border-ink transition-colors"
        >
          <option value="ecommerce">E-Commerce Platform (Web, Apps &amp; Admin - $4,999)</option>
          <option value="ott-streaming">OTT &amp; Short Drama Platform (Reels &amp; Cinema - $4,999)</option>
          <option value="source-code">Full Unencrypted Source Code License ($1,999 Add-on)</option>
          <option value="developer-time">Dedicated Developer Support ($20 / hour)</option>
          <option value="custom">Custom Enterprise Architecture</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-mono text-ink-2">
          Project Notes / Specific Questions (Optional)
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your target launch date, existing customer database, or specific custom integrations..."
          className="w-full px-3 py-2 text-sm rounded-lg border border-line bg-paper text-ink placeholder:text-ink-4 focus:outline-none focus:border-ink transition-colors resize-none"
        />
      </div>

      <Button
        id="contact-submit-btn"
        type="submit"
        size="md"
        disabled={loading}
        className="w-full justify-center h-11 text-sm font-medium cursor-pointer"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-paper border-t-transparent animate-spin" />
            <span>Sending inquiry...</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            <span>Send Inquiry &amp; Request Demo</span>
          </span>
        )}
      </Button>

      {/* Mandatory Google Ads Policy Compliance Notice */}
      <div className="pt-2 text-center space-y-1">
        <p className="text-[11px] text-ink-3">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-ink">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline hover:text-ink">
            Terms of Service
          </Link>
          .
        </p>
        <p className="text-[10px] text-ink-4 flex items-center justify-center gap-1">
          <Shield className="h-3 w-3 text-accent" />
          <span>Zero spam. Direct engineer response within 2 hours.</span>
        </p>
      </div>
    </form>
  );
}
