import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteData.meta.title,
  description: siteData.meta.description,
  keywords: siteData.meta.keywords,
  openGraph: {
    title: siteData.meta.title,
    description: siteData.meta.description,
    url: siteData.meta.url,
    siteName: "Maha Behavioral Health",
    images: [
      {
        url: siteData.meta.image,
        width: 1200,
        height: 630,
        alt: siteData.meta.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.meta.title,
    description: siteData.meta.description,
    images: [siteData.meta.image],
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
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={siteData.meta.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.mahabehavioralhealth.com/images/mahalogo_v1_small.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Maha Behavioral Health",
              description: siteData.meta.description,
              url: siteData.meta.url,
              telephone: siteData.contact.phone,
              email: siteData.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteData.contact.address.street,
                addressLocality: siteData.contact.address.city,
                addressRegion: siteData.contact.address.state,
                postalCode: siteData.contact.address.zip,
              },
              medicalSpecialty: "Behavioral Health",
              serviceType: "Mental Health Services",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
