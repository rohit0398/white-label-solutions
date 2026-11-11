import { getLocaleMessages } from "@/lib/locale-messages";
import { SITE_URL } from "@/lib/site-config";
import type { Language } from "@/types";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { SiteProvider } from "@/components/site/SiteProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = SITE_URL;

const googleTagId =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ||
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ||
  "AW-18503943905";

const tagIds = [...new Set([googleTagId, process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, process.env.NEXT_PUBLIC_GOOGLE_ADS_ID].filter((id): id is string => Boolean(id)))];

export const viewport: Viewport = { themeColor: [
  { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
] };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "White-Label Software Platforms | Mechatron Lab Solutions",
  description:
    "Production-ready white-label software platforms for e-commerce, short drama, and OTT video streaming. Deployed to your private cloud with zero revenue share.",
  keywords: [
    "white label software platforms",
    "pre-built ecommerce store",
    "short drama platform",
    "white label ott platform",
    "reelshort clone app",
    "netflix clone app",
    "self hosted ecommerce platform",
    "private cloud software deployment",
    "flutter app development",
    "nextjs web development",
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
    title: "White-Label Software Platforms | Mechatron Lab Solutions",
    description:
      "Production-ready white-label software platforms for e-commerce, short drama, and OTT video streaming. Deployed to your private cloud with zero revenue share.",
    siteName: "Mechatron Lab Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Mechatron Lab White-Label Software Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label Software Platforms | Mechatron Lab Solutions",
    description:
      "Production-ready white-label software platforms for e-commerce, short drama, and OTT video streaming deployed to your private cloud with zero platform fees.",
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

export default function SiteDocument({
  children,
  language = "en",
}: {
  children: React.ReactNode;
  language?: Language;
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
        sameAs: ["https://mechatronlab.com"],
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
    ],
  };

  return (
    <html
      lang={language}
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans dark`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("site_theme")||"dark";document.documentElement.setAttribute("data-theme",t);if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c"),
          }}
        />
        {/* Google Consent Mode v2 Default State Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500});(function(){try{var c=localStorage.getItem("cookie_consent");if(c==="granted"){gtag('consent','update',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});}}catch(e){}})();`,
          }}
        />

        {/* Google tag (gtag.js) - Google Ads & Measurement */}
        <Script
          id="google-tag-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${tagIds.map(id => `gtag('config',${JSON.stringify(id)});`).join("")}`,
          }}
        />

        <SiteProvider initialLanguage={language} messages={getLocaleMessages(language)}>{children}</SiteProvider>
        {process.env.VERCEL === "1" && <>
          <Analytics />
          <SpeedInsights />
        </>}
      </body>
    </html>
  );
}
