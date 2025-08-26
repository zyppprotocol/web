"use client"

import React, { useEffect, useRef } from 'react'
import { TiltedScroll } from '../ui/tilted-scroll'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { BackgroundCells } from '../ui/grid'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const rightTextRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Animate badge
      gsap.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )

      // Animate heading
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
      )

      // Animate text (mobile)
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 }
      )

      // Animate buttons
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      )

      // Animate right text (desktop)
      gsap.fromTo(rightTextRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 1.0 }
      )

      // Animate image with floating effect
      gsap.fromTo(imageRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 1.2,
        }
      )

      // Add continuous floating animation
      gsap.to(imageRef.current, {
        y: 15,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="hero" ref={heroRef} className="min-h-screen w-full flex flex-col gap-[2rem] md:gap-[5rem] items-center justify-center tracking-wide font-sans mt-[6rem] lg:mt-[15rem] md:mt-[2rem] z-[100] px-4 overflow-hidden">      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start md:justify-between mx-auto gap-8 md:gap-0">
      <div className="text-center md:text-left">
        <div ref={badgeRef}>
          <Link href="https://x.com/use_zypp/status/1959235039503298640" target="_blank">
            <Badge className='bg-green-950/20 border hover:bg-green-950/40 hover:scale-[1.05] transition-all duration-500 cursor-pointer border-green-800/20 backdrop-blur-lg text-primary px-4 py-2 text-xs font-semibold mb-4 gap-3 max-w-full overflow-hidden'>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path fill="#fff" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
              <span className="hidden sm:inline">Introducing Zypp Protocol, the first DropFi Protocol on Solana...</span>
              <span className="sm:hidden">Introducing Zypp Protocol...</span>
              <ChevronRight className="inline h-4 w-4 text-primary" />
            </Badge>
          </Link>
        </div>

        <h1 ref={headingRef} className='font-serif mt-3 text-4xl md:text-4xl font-extrabold'>
          Payment infrastructure that<br className="hidden md:block" /> moves at <span className='text-primary'>Zypp speed</span>
        </h1>

        <div ref={textRef} className='block md:hidden my-[2rem] text-sm tracking-wide lg:text:md'>
          <p className='text-primary font-sans'>The first DropFi Protocol on Solana.</p>
          <p>Bringing the future of onchain <br className="hidden md:block" />transactions to the offline ecosystem</p>
        </div>

        <div ref={buttonsRef} className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full mt-6 md:mt-10'>
          <Button
            onClick={scrollToWaitlist}
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 group">
            <span className='font-medium'>Join the waitlist</span>
            <ArrowUpRight className='size-5 group-hover:rotate-45 transition-transform duration-300' />
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-transparent hover:bg-neutral-950/60 border border-neutral-800 text-primary hover:text-primary/80 backdrop-blur-lg hover:scale-105 transition-transform duration-300 group">
            <Link href="https://x.com/use_zypp/status/1959235039503298640" className='flex gap-2 items-center justify-center'>
              <span className='font-medium text-white'>Follow us on </span>
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path fill="#62F43E" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>

      <div ref={rightTextRef} className="hidden md:block text-center md:text-right">
        <p className='text-primary font-sans'>The first DropFi Protocol on Solana</p>
        <p>Bringing the future of onchain<br className="hidden md:block" />transactions to the offline ecosystem</p>
      </div>
    </div>

      <Image
        ref={imageRef}
        src={require("@/assets/hero.svg")}
        alt="Hero"
        className="lg:scale-75 md:scale-85 w-[100rem] scale-200 my-[7rem]"
      />
    </div>
  )
}

export default Hero