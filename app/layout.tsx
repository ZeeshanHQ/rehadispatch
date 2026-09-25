import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const viewport: Viewport = {
  themeColor: "#0284C7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rehadispatch.com"),
  title: {
    default: "Reha Dispatch | Premier US Truck Dispatch & High-RPM Logistics",
    template: "%s | Reha Dispatch",
  },
  description:
    "Reha Dispatch is an elite US truck dispatching and freight management agency for owner-operators and fleets. Top-dollar rate negotiation, 100% no forced dispatch, broker packet processing, and dedicated 24/7 dispatchers. Contact: contact@rehadispatch.com | Phone: +1 925 504 0101.",
  keywords: [
    "Reha Dispatch",
    "truck dispatch service",
    "freight dispatch company",
    "independent truck dispatcher",
    "owner operator dispatch services",
    "semi truck dispatch",
    "dry van dispatching",
    "reefer dispatch services",
    "flatbed truck dispatchers",
    "best dispatch company USA",
    "no forced dispatch",
    "rate per mile optimization",
    "freight broker rate negotiation",
    "factoring invoicing support",
    "Texas truck dispatch",
    "Midwest freight dispatch",
    "Dallas freight dispatch",
    "contact@rehadispatch.com"
  ],
  authors: [{ name: "Reha Dispatch LLC", url: "https://rehadispatch.com" }],
  creator: "Reha Dispatch LLC",
  publisher: "Reha Dispatch LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rehadispatch.com",
    siteName: "Reha Dispatch",
    title: "Reha Dispatch | Premier US Truck Dispatch & Freight Logistics",
    description:
      "Maximize gross revenue with dedicated US truck dispatching. 100% no forced dispatch, top-tier broker negotiation, and 24/7 back-office support.",
    images: [
      {
        url: "/hero_truck.jpg",
        width: 1200,
        height: 630,
        alt: "Reha Dispatch - Premium US Truck Fleet Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reha Dispatch | Premier US Truck Dispatch & Freight Logistics",
    description:
      "High-RPM freight orchestration and dedicated truck dispatching across the United States. Call +1 925 504 0101.",
    images: ["/hero_truck.jpg"],
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
  alternates: {
    canonical: "https://rehadispatch.com",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Dallas",
    "geo.position": "32.7885;-96.8090",
    ICBM: "32.7885, -96.8090",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
