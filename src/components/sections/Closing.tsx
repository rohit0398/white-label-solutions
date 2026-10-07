import React from "react";
import { BRAND } from "@/lib/constants";
import { DemoButton } from "@/components/site/DemoButton";

export function Closing() {
  return (
    <section className="border-t border-line py-20 sm:py-28 bg-wash">
      <div className="wrap text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          Ready to launch on your own cloud?
        </h2>
        <p className="text-base text-ink-2 max-w-lg mx-auto leading-relaxed">
          Schedule a 30-minute walkthrough with our engineering team to review the architecture, live apps and sandbox.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <DemoButton size="md">Book a demo</DemoButton>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-2 hover:text-ink underline underline-offset-4 decoration-line hover:decoration-ink"
          >
            Or message on WhatsApp ({BRAND.contact.whatsappDisplay})
          </a>
        </div>
      </div>
    </section>
  );
}
