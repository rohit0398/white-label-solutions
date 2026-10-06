"use client";

import React, { useState } from "react";
import { Currency, Language } from "@/types";
import { BRAND } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandPreviewer } from "@/components/widgets/BrandPreviewer";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { AdminTourSection } from "@/components/sections/AdminTourSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CostCalculator } from "@/components/widgets/CostCalculator";
import { LeadModal } from "@/components/widgets/LeadModal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Lock,
  Cloud,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>("USD");
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>("turnkey-setup");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenModal = (tierId: string = "turnkey-setup") => {
    setSelectedTierId(tierId);
    setIsBookModalOpen(true);
  };

  const faqs = [
    {
      q: "Is this hosted on our own cloud/servers, or on your servers?",
      a: "It is 100% deployed on YOUR private infrastructure. Our engineering team sets up the complete website, backend database, and APIs inside your personal or company AWS, Google Cloud (GCP), Microsoft Azure, or private server account. You hold all master administrator passwords, database keys, and domain settings. We do not host your customer records or store data on our servers.",
    },
    {
      q: "Do I truly own the complete source code, or is there a monthly subscription?",
      a: "With our Source Code License package, you receive 100% full, unencrypted access to the clean Git repositories for the web store, the Flutter mobile apps, and the Admin Panel & CRM. There are no ongoing monthly software subscriptions, and no platform commissions on your sales. You can customize the code forever or even resell it to your own agency clients.",
    },
    {
      q: "How does the mobile app work for both Android and iPhone (iOS)?",
      a: "The mobile app is built using Flutter, which compiles directly to native applications for both Apple iOS (App Store) and Google Android (Play Store). You get 60fps smooth scrolling, push notifications for flash sales, and biometric login—while maintaining a single shared codebase that cuts your future mobile maintenance costs in half.",
    },
    {
      q: "What can our staff do inside the All-in-One Admin Panel & CRM?",
      a: "The admin dashboard is your central command center: add products and variants, manage inventory across multiple warehouses, monitor low-stock reorder alerts, process incoming orders, generate automatic GST/VAT/sales tax PDF invoices, manage customer CRM history, and visually customize your homepage banners without touching code.",
    },
    {
      q: "Can you migrate our existing products and customer data from Shopify or WooCommerce?",
      a: "Yes. Our team provides complete data migration assistance. We seamlessly transfer all your existing products, categories, photos, and customer records, plus set up 301 URL redirects so you don't lose any existing Google search rankings.",
    },
    {
      q: "What payment options and tax rules are supported out of the box?",
      a: "The platform comes integrated with Stripe and PayPal for international US/European orders, as well as Razorpay, Cashfree, UPI, and Cash on Delivery (COD) for Indian commerce. Automated tax invoices (GST with 18% breakdowns, EU VAT, or US sales tax) are generated automatically on every completed purchase.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100">
      {/* FAQPage Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Sticky Global Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onOpenBookModal={() => handleOpenModal("turnkey-setup")}
      />

      <main className="flex-1">
        {/* Hero Section with High-Intent Layman Copy & CTAs */}
        <HeroSection
          currentLanguage={currentLanguage}
          onOpenBookModal={() => handleOpenModal("turnkey-setup")}
        />

        {/* Interactive Brand Previewer (Dual Device Mockups) */}
        <BrandPreviewer />

        {/* Showcase of Active Client Stores */}
        <ShowcaseSection />

        {/* Interactive All-in-One Admin Panel & CRM Walkthrough */}
        <AdminTourSection />

        {/* Architecture & Client Cloud Grid */}
        <ArchitectureSection />

        {/* Pricing Tiers & 3-Year TCO Comparison */}
        <PricingSection
          currentCurrency={currentCurrency}
          onOpenBookModal={handleOpenModal}
        />

        {/* Interactive Cost & Savings Calculator */}
        <CostCalculator onOpenBookModal={() => handleOpenModal("turnkey-setup")} />

        {/* FAQ Section */}
        <section className="py-20 bg-[#06080d] border-t border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="cyan" size="md" className="mb-3">
                <HelpCircle className="h-3 w-3 mr-1 text-cyan-400" />
                Frequently Answered
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Everything You Need to Know Before Launching
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Clear answers regarding cloud hosting, code ownership, mobile apps, and migration.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl border border-slate-800/80 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-100">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Conversion Banner */}
        <section className="py-20 bg-gradient-to-b from-[#06080d] to-[#0a0e1a] border-t border-slate-900 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <Badge variant="live" size="md">
              Fast-Track Launch on Your Cloud
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Own Your E-Commerce Store & Apps?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Stop paying monthly platform fees and revenue cuts. Schedule a live store & app demo
              with our team and review our live sandbox today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="glow"
                size="lg"
                onClick={() => handleOpenModal("turnkey-setup")}
                className="w-full sm:w-auto shadow-2xl"
              >
                <span>Schedule a Live Store & App Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-emerald-500/30 text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 text-sm font-semibold transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Booking / Consultation Lead Modal */}
      <LeadModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
