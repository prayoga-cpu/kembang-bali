import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Lexend, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "./site-config";

const headingFont = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-heading",
});

const bodyFont = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-body",
});

const title = `${siteName} | Home Spa Service in Bali`;
const description =
  "Premium massage and spa treatments delivered to villas, hotels, and homes across Bali. Book same-day, WhatsApp-only.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Bali home spa",
    "Bali massage delivery",
    "villa massage Bali",
    "mobile massage Bali",
    "home spa service Bali",
    "hotel massage Bali",
  ],
  authors: [{ name: siteName }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/images/hot-stone-massage.png",
        width: 1280,
        height: 827,
        alt: "Hot stone massage treatment by Kembang Bali Home Spa Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hot-stone-massage.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#11104a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
