import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fig Tim Tam | Indigenous Australian Heritage Meets Iconic Biscuit",
  description: "Discover the Fig Tim Tam - celebrating 65,000 years of Indigenous heritage with native figs and premium ingredients.",
  keywords: ["Tim Tam", "Australian snacks", "Indigenous food", "native figs", "Australia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:p-4 focus:bg-aussie-gold focus:text-charcoal focus:rounded-md focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
