import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
        <ShopProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
