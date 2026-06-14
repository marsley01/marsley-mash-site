import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marsley Mash — Builder of Brands & Digital Experiences",
  description:
    "Marsley Mash is a Gen Z entrepreneur, web developer, and founder of Munchify, Cyzora, Edyfra, and more. Building the future, one project at a time.",
  keywords: [
    "Marsley Mash",
    "Munchify",
    "Cyzora",
    "Edyfra",
    "web developer",
    "Kenya",
    "entrepreneur",
    "Trivo Kenya",
    "Belloria Beauty",
    "Inshot AI",
  ],
  openGraph: {
    title: "Marsley Mash",
    description:
      "Builder of brands & digital experiences. Founder of Munchify, Cyzora, Edyfra & more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
