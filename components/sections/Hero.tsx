import fractal from "@/assets/fractal.svg";
import coinHero from "@/assets/coin-hero.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Twitter, X } from "lucide-react";
import { MainBtn } from "../custom/MainBtn";
import { OutBtn } from "../custom/OutBtn";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen font-sans relative overflow-hidden">
      {/* full-screen background behind everything */}
      <Image
        src={fractal}
        alt="fractal background"
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="absolute -top-20 sm:-top-40 inset-0 object-cover z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-[-1rem] items-center justify-center">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.2rem] sm:tracking-[-0.29rem] sm:mb-4 font-sans text-shadow-lg text-shadow-neutral-600/35">
              Send and Receive
            </h1>
            <div className="flex items-center justify-center -gap-2 sm:-gap-4 md:-mt-15">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-[-0.2rem] sm:tracking-[-0.29rem] mb-4 md:-mr-15 -mr-5">
                Crypto
              </h1>

              <Image
                src={coinHero}
                alt="coin"
                width={120}
                height={120}
                className="w-full h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-77 md:h-48 lg:w-82 scale-70 lg:h-52 shadow-lg relative z-10 -mt-2 select-none"
                priority
                loading="eager"
                fetchPriority="high"
              />

              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-serif italic font-semibold text-primary mb-4 text-shadow-lg text-shadow-black/50 md:-ml-15 -ml-5">
                Offline
              </h1>
            </div>
          </div>
          <p className="font-sans font-medium text-lg xs:text-xl sm:text-2xl tracking-tighter px-2 sm:px-0">
            Unlock the fastest way to move your digital assets.
          </p>
          <div className="mt-6 sm:mt-8 flex w-full max-w-xs xs:max-w-sm sm:max-w-md mx-auto flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4">
            <MainBtn className="w-full sm:w-auto">
              <p className="relative z-10 font-semibold text-black text-sm sm:text-base">
                Get early access
              </p>
            </MainBtn>
            <OutBtn className="w-full sm:w-auto">
              <p className="relative z-10 font-semibold text-white text-sm sm:text-base">
                Check us out on
              </p>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="X--Streamline-Simple-Icons"
                height="18"
                width="18"
                className="sm:h-5 sm:w-5"
              >
                <desc>X Streamline Icon: https://streamlinehq.com</desc>
                <title>X</title>
                <path
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  fill="#fff"
                  strokeWidth="1"
                ></path>
              </svg>
            </OutBtn>
          </div>
        </div>
      </div>
    </div>
  );
};