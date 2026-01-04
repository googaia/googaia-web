import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleAdSense from "@/components/analytics/GoogleAdSense";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GooGaia | Modern Parenting Platform",
  description: "GooGaia helps new and modern parents feel calmer, more informed, and more supported.",
};

import { ShopProvider } from "@/context/shop-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased flex min-h-screen flex-col`}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
          <GoogleAdSense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID.replace("ca-pub-", "")} />
        )}

        <ShopProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
