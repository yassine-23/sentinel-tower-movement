import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Earth's Immune System | Raise the Blades — Wind Blades to Fire Sentinels",
  description: "An open founding coalition repurposing retired wind turbine blades into wildfire response infrastructure. Seeking technical validation, institutional partners, blade suppliers, and a first measurable pilot.",
  keywords: ["wildfire detection", "AI prevention", "environmental monitoring", "wind turbine recycling", "sentinel towers", "thermal imaging", "edge AI", "flood monitoring"],
  authors: [{ name: "Earth's Immune System" }],
  creator: "Earth's Immune System",
  publisher: "Earth's Immune System",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://earthsimmunesystem.com',
    siteName: "Earth's Immune System",
    title: "Earth's Immune System | Raise the Blades",
    description: "Turn the waste of one climate solution into infrastructure that protects another. An open blueprint seeking validators, partners, blade suppliers, and a first measurable pilot.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Earth's Immune System - Wildfire Detection Network",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Earth's Immune System | Raise the Blades",
    description: "Retired wind blades, reborn as wildfire response infrastructure. Open blueprint — join the founding coalition.",
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#060d09" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <StructuredData />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
