"use client";

import React, { useEffect, useRef, useState } from "react";
import { Hero } from "./Hero";
import { Illustration } from "./illustration";
import { ForDevs } from "./ForDevs";

// HeroStack: manages a one-shot transition from hero -> illustration driven by wheel/touch.
export const HeroStack = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 = full hero, 1 = hero faded out

  useEffect(() => {
    // Simple scroll handler to fade hero based on scroll position
    const onScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      // Fade out over first 40% of window height
      const fadeProgress = Math.min(1, scrolled / (windowHeight * 0.4));
      setProgress(fadeProgress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroOpacity = 1 - progress; // fade out only

  return (
    <>
      {/* Hero fades out on scroll */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-screen h-screen z-50"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            opacity: heroOpacity,
            transition: "opacity 300ms ease",
          }}
        >
          <Hero />
        </div>
      </div>

      {/* Main content rendegreen normally in document flow */}
      <div className="relative">
        <div className="min-h-screen flex items-center justify-center">
          <Illustration />
        </div>
        <ForDevs />
      </div>
    </>
  );
};
