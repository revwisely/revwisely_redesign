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
  metadataBase: new URL("https://www.revwisely.com"),
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w3xzth359i");`}
        </Script>
        <Script id="reb2b" strategy="afterInteractive">
          {`!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("W7N850HV9EN1");`}
        </Script>
      </body>
    </html>
  );
}
