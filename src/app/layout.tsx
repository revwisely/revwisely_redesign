import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Using Inter as fallback until Neue Montreal font files are acquired.
// When ready, swap to next/font/local with Neue Montreal .woff2 files —
// the CSS variable name stays the same so nothing else changes.
const inter = Inter({
  variable: "--font-neue-montreal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RevWisely | AI-Enabled Revenue Systems",
  description:
    "RevWisely designs AI-native revenue systems that scale on structure, not headcount. Creators of the Maestro AI Revenue System.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
