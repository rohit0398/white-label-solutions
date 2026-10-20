"use client";

import React, { useState } from "react";
import { MICRODRAMA_DEMO } from "@/lib/constants";
import { Check, Copy, Download, Globe } from "lucide-react";

export function ShortDramaLiveAccess({
  emphasis = "both",
}: {
  emphasis?: "both" | "web" | "app";
}) {
  const [copied, setCopied] = useState<string | null>(null);
  const websiteFirst = emphasis !== "app";

  function copy(value: string, id: string) {
    const mark = () => {
      setCopied(id);
      window.setTimeout(() => {
        setCopied((current) => (current === id ? null : current));
      }, 1600);
    };

    const fallback = () => {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      return ok;
    };

    let copiedWithFallback = false;
    try {
      copiedWithFallback = fallback();
    } catch {
      copiedWithFallback = false;
    }

    if (copiedWithFallback) mark();

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(() => {
        if (!copiedWithFallback) mark();
      }).catch(() => {});
    }
  }

  const websiteCard = (
    <a
      href={MICRODRAMA_DEMO.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between gap-4 rounded-xl border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-18px_rgba(245,158,11,0.65)] ${
        websiteFirst
          ? "border-amber-500/45 bg-amber-500/[0.06] hover:border-amber-500/70"
          : "border-line bg-paper hover:border-amber-500/50"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-paper text-amber-600 dark:text-amber-300">
          <Globe className="h-4 w-4 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110" />
        </span>
        <LiveDot />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink">Open the website</p>
        <p className="mt-1 font-mono text-[11px] text-ink-3">{MICRODRAMA_DEMO.websiteLabel}</p>
        <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          <span>Launch player</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </p>
      </div>
    </a>
  );

  const apkCard = (
    <a
      href={MICRODRAMA_DEMO.apkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between gap-4 rounded-xl border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-18px_rgba(245,158,11,0.65)] ${
        websiteFirst
          ? "border-line bg-paper hover:border-amber-500/50"
          : "border-amber-500/45 bg-amber-500/[0.06] hover:border-amber-500/70"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-paper text-amber-600 dark:text-amber-300">
          <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
        </span>
        <span className="rounded-full border border-line bg-wash px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-3">
          Test APK
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold text-ink">Install on Android</p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-3">
          Hosted on our server for review, ahead of Google Play.
        </p>
        <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          <span>Download test APK</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </p>
      </div>
    </a>
  );

  return (
    <section id="live-demo" className="pb-8 sm:pb-12">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/35 bg-wash/40 shadow-[0_0_0_1px_rgba(245,158,11,0.06),0_20px_50px_-28px_rgba(245,158,11,0.55)]">
          <div className="shimmer-badge-drama absolute inset-x-0 top-0 h-0.5" aria-hidden="true" />

          <div className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-300">
                <LiveDot />
                Live test build
              </span>
            </div>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Try Micro Drama on the web and Android
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-2">
              Open the player, then sign in with Google or tap a test number. The OTP copies in one click.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {websiteFirst ? (
                <>
                  {websiteCard}
                  {apkCard}
                </>
              ) : (
                <>
                  {apkCard}
                  {websiteCard}
                </>
              )}
            </div>

            <div className="mt-5 rounded-xl border border-line bg-paper p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-medium text-ink">Sign in with Google, or use a test number</p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3">Tap to copy</span>
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-line bg-wash px-3 py-2 text-xs text-ink-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-line bg-paper text-[10px] font-semibold text-ink">
                  G
                </span>
                Sign in with Google on the website or in the app
              </div>

              <ul className="mt-3 flex flex-wrap gap-2">
                {MICRODRAMA_DEMO.phones.map((phone, index) => {
                  const id = `phone-${index}`;
                  const isCopied = copied === id;
                  return (
                    <li key={phone}>
                      <button
                        type="button"
                        onClick={() => copy(phone.replace(/\s/g, ""), id)}
                        className={`cursor-pointer rounded-lg border px-2.5 py-1.5 font-mono text-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                          isCopied
                            ? "border-amber-500/60 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                            : "border-line bg-wash text-ink hover:border-amber-500/45"
                        }`}
                      >
                        {isCopied ? "Copied" : phone}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-xs font-mono uppercase tracking-wider text-ink-3">OTP</p>
                <button
                  type="button"
                  onClick={() => copy(MICRODRAMA_DEMO.otp, "otp")}
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-wash px-2 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/50 active:scale-[0.98]"
                  aria-label={`Copy OTP ${MICRODRAMA_DEMO.otp}`}
                >
                  <span className="flex gap-1">
                    {MICRODRAMA_DEMO.otp.split("").map((digit, index) => (
                      <span
                        key={`${digit}-${index}`}
                        className="flex h-9 w-7 items-center justify-center rounded-md border border-line bg-paper font-mono text-base font-semibold text-ink transition-colors duration-200 group-hover:border-amber-500/40"
                      >
                        {digit}
                      </span>
                    ))}
                  </span>
                  <span className="inline-flex items-center gap-1 pr-1.5 text-xs font-medium text-ink-2 group-hover:text-ink">
                    {copied === "otp" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-amber-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </span>
                </button>
              </div>
              <p className="sr-only" aria-live="polite">
                {copied ? "Copied to clipboard" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
    </span>
  );
}
