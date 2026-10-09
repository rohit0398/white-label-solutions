# White-Label E-Commerce Platform & Mobile Apps

> **Production-ready online storefront, native Flutter iOS & Android mobile apps, and an all-in-one Admin Panel & CRM deployed directly onto your private cloud.** 100% source code ownership. Zero recurring platform fees or revenue cuts.

Built by **Mechatron Lab Solutions**.

---

## ⚡ Overview

This platform provides growing retailers, enterprise merchants, and agencies with a complete, production-ready e-commerce infrastructure that runs entirely inside their own cloud accounts (AWS, Google Cloud, or Microsoft Azure).

### What's Included:
1. **High-Speed Storefront (Website)**: Next.js App Router storefront optimized for Core Web Vitals, sub-second page transitions, and built-in technical SEO.
2. **Native iOS & Android Apps**: Unified Flutter mobile apps published directly under your company developer accounts with push notification engine and biometric login.
3. **Admin Panel & CRM**: Unified command center with multi-warehouse routing, supplier cost tracking, profit margin calculations, and homepage visual editing.
4. **Private Cloud Deployment**: 100% data sovereignty, full database control, and standard infrastructure rates ($20–$50/mo) with **0% commissions on sales**.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: React 19, TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with pure semantic CSS variable tokens
- **Design Aesthetic**: Minimalist, high-density Linear-inspired design with tactile micro-interactions and dual-theme switching
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Processing & OG**: [Sharp](https://sharp.pixelplumbing.com/) & Next.js native Open Graph route handlers
- **Typography**: Geist Sans & Geist Mono via `next/font`

---

## ✨ Key Platform Features

### 🌓 Dual-Theme System (Neutral Dark Default)
- **Zero Blue Tint**: Crafted using pure neutral carbon tones (`#0A0A0A`, `#141414`, `#262626`) and emerald accents (`#34D399`).
- **Warm Light Mode**: Refined off-white palette (`#FAFAF9`, `#F1F0ED`, `#161616`).
- **Instant Toggling**: Smooth transition with persistent local preference (`localStorage`) and inline anti-FOUC protection in `<head>`.
- **Ultra-Thin Scrollbar**: Precision 4px scrollbar dynamically themed to the active color palette.

### 💰 Multi-Currency & Interactive Savings Calculator
- Dynamic currency toggle across **USD ($)**, **EUR (€)**, **GBP (£)**, and **INR (₹)**.
- Real-time 3-year TCO comparison showing true savings against Shopify Plus and percentage-cut platforms.

### 🌍 Global Lead Capture & Demo Booking Modal
- Unified full-width phone input paired with a comprehensive list of **130+ world country dial codes** (`+1`, `+91`, `+44`, `+49`, etc.).
- Integrated anti-bot honeypot field.
- Automated webhook forwarding to Slack, Discord, Zapier, or Make (`/api/lead`).

### 🚀 Complete SEO & Social Media Infrastructure
- **Dynamic `metadataBase`**: Works across custom domains and Vercel environments without broken relative links.
- **Dedicated 1200×630 Open Graph Images**: Lightweight (~48 KB) branded social share banners for WhatsApp, Twitter/X, LinkedIn, and iMessage.
- **Structured Data**: Complete JSON-LD schema graph for `Organization`, `WebSite`, `SoftwareApplication`, and `AggregateRating` (4.9 / 128 reviews).
- **Auto-Generated Sitemaps**: Dynamic [`/sitemap.xml`](/sitemap.xml) and [`/robots.txt`](/robots.txt).

---

## 📁 Repository Structure

```text
├── public/
│   ├── og-image.png             # 1200x630 social share card
│   ├── favicon.ico              # Platform favicon
│   └── showcase/                # High-res client showcase screenshots
├── scripts/
│   └── generate-og.js           # Sharp-based Open Graph image generator
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── lead/route.ts    # Lead capture & webhook dispatcher endpoint
│   │   ├── case-studies/
│   │   │   ├── estorealley/     # eStoreAlley marketplace case study
│   │   │   └── mechatron-lab/   # Mechatron Lab hardware store case study
│   │   ├── compare/
│   │   │   └── shopify-alternative/ # In-depth Shopify TCO comparison page
│   │   ├── solutions/
│   │   │   └── ecommerce/       # Complete solution architecture pillar page
│   │   ├── globals.css          # Design tokens & dynamic theme variables
│   │   ├── layout.tsx           # Root layout, anti-FOUC script, schema & metadata
│   │   ├── opengraph-image.png  # Next.js App Router root OG image
│   │   ├── page.tsx             # Main conversion landing page
│   │   ├── robots.ts            # Dynamic robots.txt route
│   │   ├── sitemap.ts           # Dynamic sitemap.xml route
│   │   └── twitter-image.png    # Twitter summary_large_image card
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ThemeSwitcher, LanguageSwitcher
│   │   ├── sections/            # Hero, Work, WhatYouGet, Pricing, Faq, Closing
│   │   ├── site/                # SiteProvider, LeadModal, DemoButton
│   │   └── ui/                  # Button, Section, Screenshot, Badge
│   ├── lib/
│   │   ├── constants.ts         # Brand metadata, pricing packages & case study data
│   │   ├── countryCodes.ts      # Comprehensive world country dial codes (130+)
│   │   └── translations.ts      # Multi-language localization dictionaries
│   └── types/
│       └── index.ts             # Core TypeScript interfaces & types
├── .env.example                 # Documented environment variables template
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18.0 or newer (Node.js 20+ recommended)
- **npm** or **pnpm**

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd white-label-solutions
npm install
```

### 3. Environment Configuration
Copy the sample environment file:
```bash
cp .env.example .env.local
```

Configure your variables inside `.env.local` (see [Environment Variables](#-environment-variables) below).

### 4. Running the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
Verify type safety and compile the optimized production bundle:
```bash
npm run build
npm start
```

---

## ⚙️ Environment Variables

| Variable | Required | Description |
|---|:---:|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical public URL used for metadata, sitemaps, and OG images (e.g. `https://solutions.mechatronlab.com`). Defaults to `https://white-label-solutions.vercel.app`. |
| `NEXT_PUBLIC_SITE_NAME` | Optional | Public brand name (`"Mechatron Lab Solutions"`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Contact email address (`contact@mechatronlab.com`). |
| `NEXT_PUBLIC_CONTACT_PHONE` | Optional | Formatted support telephone number (`"+91-98879-98663"`). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`| Optional | Raw WhatsApp phone digits for click-to-chat links (`"919887998663"`). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console verification token. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | Bing Webmaster Tools verification token. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). GA scripts only load when present. |
| `LEAD_WEBHOOK_URL` | Optional | Incoming Webhook URL to receive instant demo request notifications in Slack, Discord, Zapier, or Make. |
| `LEAD_NOTIFICATION_EMAIL` | Optional | Destination email address for sales lead alerts. |

---

## 🚢 Deployment

### Deploy on Vercel
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Set your Production Environment Variables (`NEXT_PUBLIC_SITE_URL`, `LEAD_WEBHOOK_URL`, etc.).
4. Click **Deploy**.

### Self-Hosted (AWS, GCP, Azure, or Docker)
Since this is a standard Next.js application, it can be run via Node.js (`npm start`) or containerized using the official Next.js Dockerfile on any VPS (EC2, DigitalOcean, Hetzner, Google Compute Engine).

---

## 📄 License & Commercial Rights

Copyright © 2026 Mechatron Lab. All rights reserved. Commercial licenses for full source code deployment, rebranding, and redistribution are provided under enterprise agreement.
