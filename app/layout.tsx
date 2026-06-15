import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topsum-electricals.vercel.app"),
  title: "Topsum Electricals | Construction, Renovations & Lighting",
  description:
    "Topsum Electricals provides premium construction, tiling, renovations, solar lights installation, and flood lights services.",
  openGraph: {
    title: "Topsum Electricals",
    description:
      "Construction, tiling, renovations, solar lights installation, and flood lights.",
    images: ["/assets/generated-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
