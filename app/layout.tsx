import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SkipLink from "@/components/skip-link";
import ScrollRestore from "@/components/scroll-restore";
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
        <SkipLink />
        <ScrollRestore />
        <main id="main" className="flex-1">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
