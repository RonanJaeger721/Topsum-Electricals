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
    "Topsum Electricals provides flood lights, solar lighting, solar inverters, plumbing, geysers, fencing, ceilings, aluminium frames, construction finishes, bakery equipment, BOQs, and plan drawing support.",
  icons: {
    icon: "/assets/topsum-logo.png",
    shortcut: "/assets/topsum-logo.png",
    apple: "/assets/topsum-logo.png"
  },
  openGraph: {
    title: "Topsum Electricals",
    description:
      "Flood lights, solar lighting, solar inverters, plumbing, fencing, ceilings, aluminium frames, bakery equipment, BOQs, and plan drawing.",
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
