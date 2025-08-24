import Devs from "@/components/sections/devs";
import Features from "@/components/sections/features";
import ForDevs from "@/components/sections/fordevs";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/sections/Navigation";
import { Button } from "@/components/ui/button";
import { Squares } from "@/components/ui/squares-background";
import { ThemeToggle } from "@/components/ui/theme-toggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black relative text-white min-h-screen flex flex-col overflow-x-hidden px-15 lg:px-0 items-center">
      <Image
        src={require("../assets/spotlight.svg")}
        alt="Background"
        fill
        className="absolute inset-0 object-cover hidden lg:block z-10 overflow-hidden"
        priority  
      />
      <Navigation/>
      <Hero/>
      <Features/>
      <ForDevs/>
    </div>
  );
}
