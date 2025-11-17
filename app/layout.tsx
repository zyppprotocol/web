import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import fractal from "@/assets/fractal.svg";
import coinHero from "@/assets/coin-hero.svg";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  // weight: ["400", "500", "700"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const mono = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zypp Protocol - The Offline-First Payment Layer for Solana.",
  description:
    "Zypp Protocol is the first offline protocol on Solana, powering P2P transactions offline.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Zypp Protocol - The Offline-First Payment Layer for Solana",
    description:
      "Zypp Protocol is the first offline protocol on Solana, powering P2P transactions offline.",
    url: "https://zypp.fun",
    siteName: "Zypp Protocol",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zypp Protocol",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zypp Protocol - The Offline-First Payment Layer for Solana",
    description:
      "Zypp Protocol is the first offline protocol on Solana, powering P2P transactions offline.",
    images: "/og.png",
    creator: "@use_zypp",
  },
  metadataBase: new URL("https://zypp.fun"),
  authors: [{ name: "Zypp Protocol", url: "https://zypp.fun" }],
  keywords: [
    "Zypp",
    "Zypp Protocol",
    "DropFi",
    "Solana",
    "Cryptocurrency",
    "Blockchain",
    "P2P Transactions",
    "Offline Transactions",
    "Crypto Wallet",
    "Decentralized Finance",
    "DeFi",
    "Digital Assets",
    "Crypto Payments",
    "Crypto Transfers",
    "Crypto Exchange",
    "Crypto Trading",
    "Crypto Security",
    "Crypto Innovation",
    "Crypto Technology",
    "Crypto Solutions",
    "Crypto Development",
    "Crypto Integration",
    "Crypto SDK",
    "Crypto API",
    "Crypto Infrastructure",
    "Crypto Ecosystem",
    "Crypto Community",
    "Crypto Future",
    "Crypto Revolution",
    "Crypto Adoption",
    "Crypto Growth",
    "Crypto Trends",
    "Crypto News",
    "Crypto Insights",
    "Crypto Analysis",
    "Crypto Research",
    "Crypto Education",
    "Crypto Resources",
    "Crypto Tools",
    "Crypto Services",
    "Crypto Support",
    "Crypto Partnerships",
    "Crypto Collaborations",
    "Crypto Opportunities",
    "Crypto Challenges",
    "Crypto Solutions",
    "Crypto Vision",
    "Crypto Mission",
    "Crypto Values",
    "Crypto Goals",
    "Crypto Objectives",
    "Crypto Strategies",
    "Crypto Plans",
    "Crypto Roadmap",
    "Crypto Milestones",
    "Crypto Achievements",
    "Crypto Success",
    "Crypto Impact",
    "Crypto Legacy",
    "Crypto Future",
    "Crypto Innovation",
    "Crypto Technology",
    "Crypto Development",
    "developer",
    "SDK",
    "API",
    "integration",
    "dApp",
    "decentralized application",
    "instant transfers",
    "offline transfers",
    "peer-to-peer",
    "on-chain assets",
    "off-chain assets",
    "blockchain",
    "smart contracts",
    "cryptography",
    "digital identity",
    "secure transactions",
    "user experience",
    "mobile payments",
    "financial inclusion",
    "global payments",
    "remittances",
    "microtransactions",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  category: "Blockchain",
  publisher: "Zypp Protocol",
  creator: "Zypp Protocol",
  applicationName: "Zypp Protocol",
  referrer: "no-referrer-when-downgrade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href={fractal.src}
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href={coinHero.src}
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
