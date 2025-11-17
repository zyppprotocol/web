// app/developers/page.tsx
"use client";

import { MainBtn } from "@/components/custom/MainBtn";
import { OrbitingCircles } from "@/components/custom/orbiting-cirlces";
import { Spotlight } from "@/components/custom/spotlight";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";
import {
  Code2,
  GitBranch,
  BookOpen,
  Terminal,
  Zap,
  Shield,
  Globe,
  Cpu,
  Coins,
  WifiOff,
  Share,
  ArrowUpRight,
  Download,
  Play,
  Github,
  FileCode,
  Server,
  Smartphone,
  Lock,
  Rocket,
  CheckCircle2,
  Copy,
  ExternalLink,
  Ticket,
  Clock,
} from "lucide-react";
import oneImg from "@/assets/one.png";
import speedImg from "@/assets/speed.png";
import securityImg from "@/assets/security.png";
import userImg from "@/assets/user-x.png";
import { useState } from "react";
import { OutBtn } from "@/components/custom/OutBtn";
import Link from "next/link";

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState("sdk");
  const [activeDisTab, setActiveDisTab] = useState("javascript");
  const [copiedCode, setCopiedCode] = useState("");

  const features = [
    {
      title: "Offline Functionality",
      description:
        "Enable your users to transfer assets, files, and data even without an active internet connection, drastically expanding the reach and utility of your dApp.",
      image: oneImg,
    },
    {
      title: "Solana-Native Efficiency",
      description:
        "Benefit from Solana's high-speed, low-cost blockchain for on-chain settlement, ensuring efficient and scalable transactions.",
      image: speedImg,
    },
    {
      title: "Enhanced Security",
      description:
        "Integrate with a protocol built with end-to-end encryption, local signing, and replay protection, ensuring user assets and data remain secure.",
      image: securityImg,
    },
    {
      title: "Intuitive User Experience",
      description:
        "Leverage gesture-driven interactions (like swiping and tapping) to make digital transfers feel as natural as a handshake.",
      image: userImg,
    },
  ];

  const sdks = [
    {
      platform: "JavaScript/TypeScript",
      icon: FileCode,
      version: "v1.2.0",
      description: "Full SDK for web and Node.js applications",
      install: "npm install @zypp/sdk",
      docs: "/docs/javascript",
    },
    {
      platform: "React Native",
      icon: Smartphone,
      version: "v1.1.5",
      description: "Mobile SDK for iOS and Android applications",
      install: "npm install @zypp/react-native",
      docs: "/docs/react-native",
    },
    {
      platform: "Python",
      icon: Server,
      version: "v1.0.8",
      description: "Python SDK for backend services and scripts",
      install: "pip install zypp-protocol",
      docs: "/docs/python",
    },
    {
      platform: "Rust",
      icon: Cpu,
      version: "v1.3.2",
      description: "High-performance Rust implementation",
      install: "cargo add zypp-protocol",
      docs: "/docs/rust",
    },
  ];

  const codeExamples = {
    javascript: `// Initialize Zypp SDK
import { Zypp } from '@zypp/sdk';

const zypp = new Zypp({
  network: 'mainnet-beta',
  offlineMode: true
});

// Create an offline transaction
const transaction = await zypp.createTransaction({
  recipient: 'user123',
  amount: '1.0',
  token: 'SOL'
});

// Send via Bluetooth or WiFi Direct
await transaction.sendOffline();`,

    react: `// React Hook Example
import { useZypp } from '@zypp/react-sdk';

function SendCrypto() {
  const { sendPayment, isConnected } = useZypp();
  
  const handleSend = async () => {
    const result = await sendPayment({
      to: 'user456',
      amount: 0.5,
      currency: 'USDC'
    });
    
    console.log('Transaction completed:', result);
  };
  
  return (
    <button 
      onClick={handleSend}
      disabled={!isConnected}
    >
      Send Crypto Offline
    </button>
  );
}`,

    mobile: `// React Native Example
import { ZyppMobile } from '@zypp/react-native';

const discovery = new ZyppMobile.Discovery();

// Discover nearby devices
discovery.on('deviceFound', (device) => {
  console.log('Found device:', device.name);
});

// Start discovery
await discovery.start();`,
  };

  const tutorials = [
    {
      title: "Build Your First Offline dApp",
      duration: "15 min",
      level: "Beginner",
      steps: ["Setup SDK", "Create Transaction", "Test Offline", "Deploy"],
      category: "Getting Started",
    },
    {
      title: "Integrate with Solana Wallet",
      duration: "25 min",
      level: "Intermediate",
      steps: ["Wallet Connection", "Transaction Signing", "State Management"],
      category: "Integration",
    },
    {
      title: "Advanced: Custom Protocol Extensions",
      duration: "45 min",
      level: "Advanced",
      steps: ["Protocol Design", "Security Implementation", "Testing"],
      category: "Advanced",
    },
  ];

  const useCases = [
    {
      title: "Offline NFT Marketplaces",
      description: "Enable NFT trading in areas with limited connectivity",
      icon: Share,
      complexity: "Medium",
    },
    {
      title: "P2P Token Swaps",
      description: "Direct token exchanges without internet dependency",
      icon: Coins,
      complexity: "Easy",
    },
    {
      title: "In-Game Asset Trading",
      description: "Trade game items and assets peer-to-peer",
      icon: Zap,
      complexity: "Medium",
    },
    {
      title: "Decentralized File Sharing",
      description: "Share files directly between devices securely",
      icon: Globe,
      complexity: "Hard",
    },
    {
      title: "Event Ticketing Systems",
      description: "Sell and transfer tickets without internet",
      icon: Ticket,
      complexity: "Medium",
    },
    {
      title: "Local Payment Networks",
      description: "Create community payment networks",
      icon: Shield,
      complexity: "Hard",
    },
  ];

  const copyToClipboard = (text: string, lang: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(lang);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans px-4 flex flex-col items-center justify-center">
      <NavBar />
      <Spotlight />

      {/* Hero Section */}
      <section className="relative pt-60 pb-20 px-10 sm:px-10 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Build with{" "}
              <span className="text-primary font-serif italic">Zypp</span>
            </h1>
            <p className="text-md md:text-2xl text-white/70 max-w-3xl mx-auto font-medium tracking-tight mb-8">
              Powerful SDKs and tools to integrate offline crypto transactions
              into your applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MainBtn>
                <p className="font-semibold text-black">Get Started</p>
                <Rocket className="text-primary-foreground" size={16} />
              </MainBtn>
              <Link href="https://github.com/zyppprotocol">
                <OutBtn>
                  <Github className="w-5 h-5 text-white" />
                  View on GitHub
                </OutBtn>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "5+", label: "SDKs" },
              { number: "100+", label: "API Endpoints" },
              { number: "24/7", label: "Support" },
              { number: "0ms", label: "Offline Latency" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <h2 className="text-4xl md:text-5xl font-semibold text-center mt-16 mb-5 tracking-tight">
        Developer <span className="text-primary">Features</span>
      </h2>

      <div className="md:grid md:grid-cols-2 md:gap-7 space-y-7 flex items-center justify-center flex-col mt-12 mb-10 z-10 md:px-12">
        {features.slice(0, 4).map((feature, idx) => (
          <div
            key={idx}
            className="cursor-pointer hover:scale-101 transition-transform duration-300 bg-black/5 rounded-3xl flex flex-col items-start gap-3 h-[400px] md:h-[350px] mx-11 md:mx-0 md:w-[400px] shadow-[inset_0px_-11px_33px_0px_#00E35B]/10"
          >
            {feature.image && (
              <Image
                src={feature.image}
                alt={feature.title}
                // width={48}
                // height={48}
                className="w-full object-contain"
              />
            )}
            <div className="flex flex-col self-end bottom-0 py-3 px-7 gap-2">
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-md text-white/50">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SDKs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-disabled={false}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            SDKs & <span className="text-primary">Libraries</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sdks.map((sdk, idx) => {
              const IconComponent = sdk.icon;
              return (
                <div
                  key={idx}
                  className="cursor-pointer hover:scale-101 transition-transform duration-300 bg-black/5 rounded-3xl flex flex-col items-start h-[280px] shadow-[inset_0px_-11px_33px_0px_#00E35B]/5 border border-white/10"
                >
                  <div className="w-full h-24 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-t-3xl flex items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {sdk.platform}
                        </h3>
                        <p className="text-primary text-sm">{sdk.version}</p>
                      </div>
                    </div>
                    <BookOpen className="w-5 h-5 text-white/50" />
                  </div>

                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <p className="text-white/70 text-sm flex-1">
                      {sdk.description}
                    </p>

                    {/* Install Command */}
                    <div className="relative">
                      <code className="block bg-black/20 rounded-xl px-4 py-3 text-sm font-mono text-white/80 overflow-x-auto">
                        {sdk.install}
                      </code>
                      <button
                        onClick={() =>
                          copyToClipboard(sdk.install, sdk.platform)
                        }
                        className="absolute right-2 top-2 p-1 bg-white/10 rounded hover:bg-primary/20 transition-colors"
                      >
                        {copiedCode === sdk.platform ? (
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        ) : (
                          <Copy className="w-4 h-4 text-white/60" />
                        )}
                      </button>
                    </div>

                    <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
                      View Documentation
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-disabled={false}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            Code <span className="text-primary">Examples</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveDisTab(lang)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeDisTab === lang
                    ? "bg-primary text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {lang === "javascript"
                  ? "JavaScript"
                  : lang === "react"
                  ? "React"
                  : "React Native"}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-black/20 rounded-3xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileCode className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-white">
                  {activeDisTab}.{activeDisTab === "javascript" ? "js" : "jsx"}
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples[activeDisTab as keyof typeof codeExamples],
                    "code"
                  )
                }
                className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                {copiedCode === "code" ? (
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                ) : (
                  <Copy className="w-4 h-4 text-white/60" />
                )}
                <span className="text-sm">Copy</span>
              </button>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono text-white/80 bg-gradient-to-br from-black/40 to-black/20">
              <code>
                {codeExamples[activeDisTab as keyof typeof codeExamples]}
              </code>
            </pre>
          </div>

          {/* Run Button */}
          <div className="text-center mt-8">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 mx-auto">
              <Play className="w-5 h-5" />
              Run this Example
            </button>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-disabled={false}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            Quick <span className="text-primary">Start</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {tutorials.map((tutorial, idx) => (
              <div
                key={idx}
                className="cursor-pointer hover:scale-101 transition-transform duration-300 bg-black/5 rounded-3xl flex flex-col items-start h-[320px] shadow-[inset_0px_-11px_33px_0px_#00E35B]/5 border border-white/10"
              >
                <div className="w-full h-20 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-t-3xl flex items-center justify-between px-6">
                  <div>
                    <span className="text-xs text-primary font-semibold bg-primary/20 px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-white/60" />
                      <span className="text-xs text-white/60">
                        {tutorial.duration}
                      </span>
                      <span className="text-xs text-white/60">•</span>
                      <span className="text-xs text-white/60">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  <BookOpen className="w-5 h-5 text-white/50" />
                </div>

                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {tutorial.title}
                  </h3>

                  <div className="space-y-2 flex-1">
                    {tutorial.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs font-bold">
                            {stepIdx + 1}
                          </span>
                        </div>
                        <span className="text-white/70 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 mt-auto">
                    Start Tutorial
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-disabled={false}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            Build <span className="text-primary">Anything</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={idx}
                  className="cursor-pointer hover:scale-101 transition-transform duration-300 bg-black/5 rounded-3xl flex flex-col items-start h-[240px] shadow-[inset_0px_-11px_33px_0px_#00E35B]/5 border border-white/10"
                >
                  <div className="w-full h-20 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-t-3xl flex items-center justify-between px-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        useCase.complexity === "Easy"
                          ? "bg-green-500/20 text-green-400"
                          : useCase.complexity === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {useCase.complexity}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-white/70 text-sm flex-1">
                      {useCase.description}
                    </p>
                    <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
                      Explore Use Case
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-disabled={false}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-[inset_0px_-11px_33px_0px_#00E35B]/5">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Ready to <span className="text-primary">Build</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto font-medium tracking-tight">
              Join thousands of developers building the future of offline crypto
              transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MainBtn>
                <p className="font-semibold text-black">Get Started Guide</p>
                <Rocket className="text-primary-foreground" size={16} />
              </MainBtn>
              <OutBtn>
                <Github className="w-5 h-5 text-white" />
                GitHub Repository
              </OutBtn>
              <OutBtn>
                <BookOpen className="w-5 h-5 text-white" />
                Full Documentation
              </OutBtn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
