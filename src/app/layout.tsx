import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/components/site/SiteProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://white-label-solutions.vercel.app");

const googleTagId =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ||
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ||
  "AW-18503943905";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
  description:
    "Production-ready white-label e-commerce platform & mobile apps. Fast online store, iOS & Android apps, and Admin CRM deployed on your cloud with 0% revenue cuts.",
  keywords: [
    "buy readymade ecommerce website and mobile app",
    "white label ecommerce platform with mobile app",
    "self hosted ecommerce platform one time payment",
    "shopify alternative with no monthly fees",
    "ready made online store with android and ios app",
    "ecommerce platform you own without revenue cut",
    "ecommerce admin panel with crm and multi warehouse",
    "custom ecommerce website development US Europe India",
    "mechatron lab ecommerce solutions",
  ],
  authors: [{ name: "Mechatron Lab Solutions" }],
  creator: "Mechatron Lab",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      de: "/de",
      fr: "/fr",
      hi: "/hi",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
    description:
      "Pre-built online store, ready-to-publish Android & iPhone apps, and all-in-one Admin Panel & CRM. 100% source code ownership. Deployed on your private cloud.",
    siteName: "Mechatron Lab Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Mechatron Lab White-Label E-Commerce Platform & Mobile Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
    description:
      "Production-ready online store, Android & iOS mobile apps, and all-in-one Admin Panel & CRM deployed on your cloud. Zero platform cuts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Mechatron Lab",
        url: siteUrl,
        logo: `${siteUrl}/brand/icon-192.png`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-98879-98663",
            contactType: "sales",
            areaServed: ["US", "GB", "EU", "IN"],
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: ["https://mechatronlab.com", "https://estorealley.web.app"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Mechatron Lab Solutions",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "White-Label E-Commerce Platform & Mobile Apps",
        operatingSystem: "Web, iOS, Android, Cloud (AWS/GCP/Azure)",
        applicationCategory: "BusinessApplication",
        description:
          "Complete pre-built white-label e-commerce solution including high-speed online store, native Android and iOS mobile apps, and all-in-one Admin Panel & CRM deployed directly onto client-owned cloud infrastructure.",
        offers: {
          "@type": "Offer",
          price: "4999.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans dark`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf9" media="(prefers-color-scheme: light)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("site_theme")||"dark";document.documentElement.setAttribute("data-theme",t);if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
        {/* Google Consent Mode v2 Default State Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500});(function(){try{var c=localStorage.getItem("cookie_consent");if(c==="granted"){gtag('consent','update',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});}}catch(e){}})();`,
          }}
        />

        {/* Google tag (gtag.js) - Google Ads & Measurement */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleTagId}');${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== googleTagId ? `gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');` : ""}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
