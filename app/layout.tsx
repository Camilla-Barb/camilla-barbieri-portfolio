import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/components/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camilla Barbieri | Frontend Engineer — React, Next.js, Accessibility",
  description:
    "Frontend Engineer with 4 years of experience delivering enterprise-scale digital platforms using React, Next.js, and TypeScript. Specialized in web accessibility, performance optimization, and scalable frontend architectures.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Camilla Barbieri | Frontend Engineer",
    description:
      "Enterprise-scale React, Next.js, and accessibility engineering.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <main id="main" className="flex-1">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
