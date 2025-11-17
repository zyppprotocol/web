"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MainBtn } from "../custom/MainBtn";
import logoNav from "@/assets/logo-nav.svg";
import { Badge } from "../ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/developers", label: "For Developers" },
  {
    href: "/contest",
    label: "Leaderboard",
    disabled: true,
    badge: "Coming Soon",
  },
];

const NavLinks = () => (
  <>
    {navLinks.map((link, idx) => (
      <Link
        key={idx}
        href={link.href}
        className={`text-md font-medium tracking-tighter text-white hover:text-primary/70 transition-colors duration-300 text-shadow-lg ${
          link.disabled
            ? "opacity-50 pointer-events-none cursor-not-allowed"
            : ""
        }`}
        aria-disabled={link.disabled}
      >
        <span className="flex items-center">
          {link.label}
          {link.badge && (
            <Badge className="ml-2 bg-primary text-black px-2 py-1 rounded-full text-xs font-semibold">
              {link.badge}
            </Badge>
          )}
        </span>
      </Link>
    ))}
  </>
);

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 mx-auto flex items-center justify-between z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/10 backdrop-blur-sm py-3 w-full md:px-30 px-7 rounded-b-2xl shadow-xl mt-0 h-19"
          : "bg-transparent pt-6 w-full px-4 md:px-40 h-19"
      }`}
    >
      <Image
        src={logoNav}
        alt="coin"
        width={isMobile ? 150 : 150}
        className="relative z-10 transition-transform duration-500 ease-in-out"
      />

      {isMobile ? (
        <div className="flex items-center gap-2">
          <MainBtn className="relative z-10 scale-90">
            <p className="font-semibold text-black text-sm">Get access</p>
          </MainBtn>
          <Sheet>
            <SheetTrigger className="p-1">
              <Menu className="h-5 w-5 text-white" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-black/90 p-10 border-neutral-800"
            >
              <nav className="flex flex-col gap-6 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <>
          <nav className="hidden md:flex items-center justify-center gap-8 relative z-10">
            <NavLinks />
          </nav>
          <MainBtn className="relative z-10 hidden md:block">
            <p className="font-semibold text-black">Get early access</p>
          </MainBtn>
        </>
      )}
    </div>
  );
};
