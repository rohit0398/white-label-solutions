import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solutions.mechatronlab.com"),
  title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
  description:
    "Pre-built, easily configured white-label e-commerce solution. Fast online store, Android & iPhone mobile apps, and all-in-one Admin Panel & CRM deployed directly onto your private cloud (AWS, GCP, Azure). 100% source code ownership with zero platform fees or revenue cuts.",
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
    canonical: "https://solutions.mechatronlab.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solutions.mechatronlab.com",
    title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
    description:
      "Pre-built online store, ready-to-publish Android & iPhone apps, and all-in-one Admin Panel & CRM. 100% source code ownership. Deployed on your private cloud.",
    siteName: "Mechatron Lab Solutions",
    images: [
      {
        url: "/showcase/desktop_navbar_fixed.png",
        width: 1200,
        height: 630,
        alt: "Mechatron Lab White-Label E-Commerce Platform & Mobile Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
    description:
      "Turnkey online store, Android & iOS mobile apps, and all-in-one Admin Panel & CRM deployed on your cloud. Zero platform cuts.",
    images: ["/showcase/desktop_navbar_fixed.png"],
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
        "@id": "https://solutions.mechatronlab.com/#organization",
        name: "Mechatron Lab",
        url: "https://solutions.mechatronlab.com",
        logo: "https://solutions.mechatronlab.com/favicon.ico",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-98879-98663",
            contactType: "sales",
            areaServed: ["US", "GB", "EU", "IN"],
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: [
          "https://mechatronlab.com",
          "https://estorealley.web.app",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://solutions.mechatronlab.com/#website",
        url: "https://solutions.mechatronlab.com",
        name: "Mechatron Lab Solutions",
        publisher: {
          "@id": "https://solutions.mechatronlab.com/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://solutions.mechatronlab.com/#software",
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
          "@id": "https://solutions.mechatronlab.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
