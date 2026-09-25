import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Edumeet Africa",
    default: "Edumeet Africa - Connecting Education and Opportunity",
  },
  description: "Edumeet Africa is the premier platform connecting educators, students, and institutions across the continent.",
  keywords: ["education", "africa", "edtech", "learning", "networking", "opportunities"],
  authors: [{ name: "Edumeet Africa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wacren.edumeet.africa",
    title: "eduMEET Africa",
    description: "The video platform built for African research and education communities.",
    siteName: "eduMEET Africa",
    images: [
      {
        url: "/interface.jpg",
        width: 1200,
        height: 630,
        alt: "eduMEET Africa Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eduMEET Africa",
    description: "The video platform built for African research and education communities.",
    images: ["/interface.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
