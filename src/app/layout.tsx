import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Geist, Geist_Mono, Instrument_Sans, Instrument_Serif, Sora, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Sora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const mono = Space_Grotesk({
  variable: "--font-mono",  
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zypp Protocol - The first DropFi Protocol on Solana",
  description: "Zypp Protocol is the first DropFi protocol on Solana, powering P2P transactions offline.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Zypp Protocol - The first DropFi Protocol on Solana",
    description: "Zypp Protocol is the first DropFi protocol on Solana, powering P2P transactions offline.",
    url: "https://zypp.fun",
    siteName: "Zypp Protocol",
    images: [
      {
        url: "/og.png",
        width: 3423,
        height: 2000,
        alt: "Zypp Protocol",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zypp Protocol - The first DropFi Protocol on Solana",
    description: "Zypp Protocol is the first DropFi protocol on Solana, powering P2P transactions offline.",
    images: "/og.png",
    creator: "@use_zypp",
  },
  metadataBase: new URL("https://zypp.fun"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
    "microtransactions"
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
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <ThemeProvider defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
