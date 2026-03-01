import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mettle | Athlete Mental Performance Coaching",
  description:
    "Mettle helps athletes build the mental performance edge — clarity, confidence, and consistency under pressure.",
  openGraph: {
    title: "Mettle | Athlete Mental Performance Coaching",
    description:
      "Mettle helps athletes build the mental performance edge — clarity, confidence, and consistency under pressure.",
    url: "https://mettle.coach",
    siteName: "Mettle",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mettle — Athlete Mental Performance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mettle | Athlete Mental Performance Coaching",
    description:
      "Mettle helps athletes build the mental performance edge.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://mettle.coach"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-inter bg-black text-white antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
