import Funds from "@/components/sections/banner";
import Features from "@/components/sections/features";
import ForDevs from "@/components/sections/fordevs";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/sections/Navigation";
import Waitlist from "@/components/sections/waitlist";
import { Button } from "@/components/ui/button";
import { Banner, BannerIcon, BannerTitle, BannerAction, BannerClose } from "@/components/ui/shadcn-io/banner";
import { Squares } from "@/components/ui/squares-background";
import { ThemeToggle } from "@/components/ui/theme-toggler";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black customscroll w-screen relative text-white min-h-screen flex flex-col !overflow-x-hidden px-15 lg:px-0 items-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-30",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      <Image
        alt="Background"
        src={require("@/assets/spotlight.svg")}
        className="absolute inset-0 object-cover  z-10 overflow-hidden"
        priority
      />
      <Funds />

      <Navigation />
      <Hero />
      <Features />
      <ForDevs />
      <Waitlist />
    </div>
  );
}
