import { Footer } from "@/components/sections/Footer";
import { ForDevs } from "@/components/sections/ForDevs";
import { Hero } from "@/components/sections/Hero";
import { Illustration } from "@/components/sections/illustration";
import { NavBar } from "@/components/sections/NavBar";
import { Waitlist } from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen font-sans items-center justify-center bg-[#000604] text-white">
      <NavBar />
      {/* <HeroStack /> */}
      <Hero/>
      <Illustration/>
      <ForDevs/>
      <Waitlist/>
      <Footer/>
    </div>
  );
}
