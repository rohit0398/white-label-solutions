import React from "react";
import { ADMIN_FEATURES, SHOWCASE_PROJECTS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";

const appLinks = SHOWCASE_PROJECTS.filter((p) => p.playStoreUrl);

function Part({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid sm:grid-cols-[4rem_1fr] gap-2 sm:gap-0">
      <span className="font-mono text-sm text-ink-3 pt-1">{n}</span>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <div className="mt-3 text-ink-2 leading-relaxed space-y-4">{children}</div>
      </div>
    </li>
  );
}

export function WhatYouGet() {
  return (
    <Section
      id="what-you-get"
      index="01"
      title="What you get"
      intro="Three parts sharing one backend, all running in your cloud account."
      bare
    >
      <ol className="wrap space-y-14">
        <Part n="1" title="Online store">
          <p>
            A fast storefront in your colours and fonts. Search, product variants, tax-correct
            checkout and SEO are built in. Customers pay by card, UPI, PayPal or cash on delivery.
          </p>
        </Part>

        <Part n="2" title="Android and iOS apps">
          <p>
            Built from one Flutter codebase and published under your own developer accounts. Push
            notifications and fingerprint or face login are included.
          </p>
          <p className="text-sm">
            Live examples:{" "}
            {appLinks.map((p, i) => (
              <React.Fragment key={p.id}>
                {i > 0 && ", "}
                <a
                  href={p.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink"
                >
                  {p.title}
                </a>
              </React.Fragment>
            ))}{" "}
            on Google Play.
          </p>
        </Part>

        <Part n="3" title="Admin panel and CRM">
          <p>This is where your team runs the business every day.</p>
          <dl className="divide-y divide-line border-y border-line">
            {ADMIN_FEATURES.map((f) => (
              <div key={f.id} className="py-4 grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-6">
                <dt className="text-ink font-medium">{f.title}</dt>
                <dd className="text-ink-2">{f.description}</dd>
              </div>
            ))}
          </dl>
        </Part>
      </ol>

      <div className="wrap-wide mt-16">
        <Screenshot
          src="/showcase/admin-dashboard.png"
          alt="Admin panel showing orders, stock and profit"
          caption="The admin panel used by Mechatron Lab's operations team."
        />
      </div>
    </Section>
  );
}
