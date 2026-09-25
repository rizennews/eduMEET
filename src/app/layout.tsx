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
  metadataBase: new URL("https://edumeet.africa"),
  title: {
    template: "%s | eduMEET Africa",
    default: "eduMEET Africa - Open-Source Video Conferencing for Research & Education",
  },
  description: "The African eduMEET Federation provides a secure, open-source video conferencing platform built by and for the research and education community. Hosted on trusted NREN infrastructure across Africa.",
  keywords: [
    "eduMEET",
    "eduMEET Africa",
    "WACREN",
    "African eduMEET Federation",
    "video conferencing",
    "open source video platform",
    "NREN",
    "National Research and Education Network",
    "African research infrastructure",
    "secure academic collaboration",
    "WebRTC",
  ],
  authors: [
    { name: "WACREN", url: "https://wacren.net" },
    { name: "Padmore Aning", url: "https://padmoreaning.com" }
  ],
  creator: "Padmore Aning & African eduMEET Federation",
  publisher: "WACREN",
  openGraph: {
    type: "website",
    locale: "en_AF",
    url: "https://edumeet.africa",
    title: "eduMEET Africa - Trusted Academic Video Conferencing",
    description: "A secure, open-source video conferencing platform built by and for the African research and education community. Hosted on trusted NREN infrastructure.",
    siteName: "eduMEET Africa",
    images: [
      {
        url: "/social-share.jpg",
        width: 1200,
        height: 630,
        alt: "eduMEET Africa - Open-Source Video Conferencing for Research & Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eduMEET Africa - Trusted Academic Video Conferencing",
    description: "A secure, open-source video conferencing platform built by and for the African research and education community.",
    images: ["/social-share.jpg"],
    creator: "@wacren",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "eduMEET Africa",
    "url": "https://edumeet.africa",
    "description": "The African eduMEET Federation provides a secure, open-source video conferencing platform.",
    "publisher": {
      "@type": "Organization",
      "name": "WACREN",
      "url": "https://wacren.net"
    },
    "author": {
      "@type": "Person",
      "name": "Padmore Aning",
      "url": "https://padmoreaning.com"
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log("%cBuilt by Padmore Aning", "font-size: 24px; font-weight: bold; color: #F1921A; font-family: sans-serif;");
              console.log("%chttps://padmoreaning.com", "font-size: 14px; color: #003B5C; font-family: sans-serif;");
              console.log(\`
  _____          _____  __  __  ____  _____  ______ 
 |  __ \\   /\\   |  __ \\|  \\/  |/ __ \\|  __ \\|  ____|
 | |__) | /  \\  | |  | | \\  / | |  | | |__) | |__   
 |  ___/ / /\\ \\ | |  | | |\\/| | |  | |  _  /|  __|  
 | |    / ____ \\| |__| | |  | | |__| | | \\ \\| |____ 
 |_|   /_/    \\_\\_____/|_|  |_|\\____/|_|  \\_\\______|
              \`);
            `
          }}
        />
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
