import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marsley Mash — Web & Software Developer",
  description:
    "Marsley Mash is a web and software developer, founder of Munchify, Cyzora, Edyfra, and more. Building the future, one project at a time.",
  keywords: [
    "Marsley Mash",
    "Munchify",
    "Cyzora",
    "Edyfra",
    "web developer",
    "software developer",
    "Kenya",
    "entrepreneur",
  ],
  openGraph: {
    title: "Marsley Mash",
    description:
      "Web & software developer. Founder of Munchify, Cyzora, Edyfra & more.",
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
      className={`${inter.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
