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
