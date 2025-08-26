"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button';
import { ArrowUpRight, Github, Instagram, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Particles } from '../ui/sparkles';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// API function (you can also move this to a separate file)
const joinWaitlist = async (email: string) => {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to join waitlist");
  }

  return response.json();
}

const Waitlist = () => {
    const waitlistRef = useRef<HTMLDivElement>(null)
    const waitMarkRef = useRef<HTMLImageElement>(null)
    const eclipseRef = useRef<HTMLImageElement>(null)
    const dividerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLDivElement>(null)
    const avatarsRef = useRef<HTMLDivElement>(null)
    const socialsRef = useRef<HTMLDivElement>(null)
    
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!waitlistRef.current) return

        const ctx = gsap.context(() => {
            // Animate wait mark
            if (waitMarkRef.current) {
                gsap.fromTo(waitMarkRef.current,
                    { opacity: 0, y: -30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: waitMarkRef.current,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // Animate eclipse
            if (eclipseRef.current) {
                gsap.fromTo(eclipseRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.3,
                        scrollTrigger: {
                            trigger: eclipseRef.current,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // Animate divider
            if (dividerRef.current) {
                gsap.fromTo(dividerRef.current,
                    { opacity: 0, scaleX: 0 },
                    {
                        opacity: 1,
                        scaleX: 1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: dividerRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // Animate title
            if (titleRef.current) {
                gsap.fromTo(titleRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // Animate input
            if (inputRef.current) {
                gsap.fromTo(inputRef.current,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: inputRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // Animate avatars
            if (avatarsRef.current) {
                gsap.fromTo(avatarsRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: avatarsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // Animate socials
            if (socialsRef.current) {
                gsap.fromTo(socialsRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        // scrollTrigger: {
                        //     trigger: socialsRef.current,
                        //     start: "top 85%",
                        //     toggleActions: "play none none none"
                        // }
                    }
                )
            }

        }, waitlistRef)

        return () => ctx.revert()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || isLoading) return

        setIsLoading(true)
        setError(null)
        
        try {
            await joinWaitlist(email)
            setIsSuccess(true)
            setEmail('')
            // Reset success state after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to join waitlist')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div id="waitlist" ref={waitlistRef} className='mt-[6rem] bg-black p-[3rem] pb-[10rem] relative !w-screen flex flex-col items-center justify-center overflow-y-hidden h-screen z-[100000000] overflow-x-hidden text-white font-serif'>            <div
            className={cn(
                "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-40",
                "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            )}
        />

            {/* Wait mark image */}
            <Image
                ref={waitMarkRef}
                src={require("@/assets/wait-mark.svg")}
                alt="Background"
                className="w-15 z-[50000000] hidden lg:block absolute top-[10rem] opacity-0"
            />

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#858585"
        refresh
      />
            {/* Eclipse image */}
            <Image
                ref={eclipseRef}
                src={require("@/assets/eclipse.svg")}
                alt="Background"
                className="absolute z-[50000000] object-cover bottom-[-20rem] opacity-0"
                priority
            />

            <div ref={dividerRef} className='flex z-[50000000] items-center justify-center gap-4 mt-[3rem] mb-[1.3rem] opacity-0'>
                <div className='h-[2px] bg-gradient-to-l from-primary w-30 rounded-full' />
                <h2>Waitlist</h2>
                <div className='h-[3px] bg-gradient-to-r from-primary w-30 rounded-full' />
            </div>

            <div ref={titleRef} className='z-[5000000] opacity-0'>
                <h1 className='z-[50000000] font-serif text-9xl font-black bg-gradient-to-b mb-2 from-primary/20 via-primary/60 to-primary bg-clip-text text-transparent text-center'>Zypp</h1>
                <p className='z-[50000000] text-white text-sm lg:text-md my-10 text-center lg:w-md md:w-md'>Be in line to experience the future of on-chain transactions with Zypp Protocol! Join our waitlist for exclusive access</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <div ref={inputRef} className="z-[50000000] relative opacity-0 w-full max-w-md">
                    <input 
                        name="email" 
                        type="email" 
                        autoComplete="email" 
                        placeholder="info@zypp.fun" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading || isSuccess}
                        className="relative border flex border-zinc-700 bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 focus-within:border-primary/70 focus-within:bg-primary/10 w-full text-sm px-6 py-5 pr-12 rounded-full focus:outline-none text-white placeholder-zinc-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                    <Button
                        type="submit"
                        disabled={isLoading || isSuccess || !email}
                        size="lg"
                        className="absolute right-3 top-[6.5px] hover:scale-105 transition-transform duration-300 disabled:hover:scale-100 disabled:opacity-50">
                        {isLoading ? (
                            <Loader2 className="size-5 animate-spin" />
                        ) : isSuccess ? (
                            <CheckCircle className="size-5" />
                        ) : (
                            <ArrowUpRight className="size-5" />
                        )}
                    </Button>
                </div>

                {/* Status messages */}
                {(error || isSuccess) && (
                    <div className={cn(
                        "mt-4 p-3 rounded-lg text-sm text-center transition-all duration-300",
                        error ? "bg-red-500/20 text-red-200 border border-red-500/30" :
                        isSuccess ? "bg-green-500/20 text-green-200 border border-green-500/30" : ""
                    )}>
                        <div className="flex items-center justify-center gap-2">
                            {error ? (
                                <>
                                    <XCircle className="size-4" />
                                    {error}
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="size-4" />
                                    Success! You've joined the waitlist.
                                </>
                            )}
                        </div>
                    </div>
                )}
            </form>

            <div ref={avatarsRef} className='z-[50000000] mt-6 flex items-center justify-center gap-4 opacity-0'>
                <div className="z-[50000000] *:data-[slot=avatar]:ring-primary/50 flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </div>
                <h1 className='z-[50000000] text-white/80 text-sm'>Join 100+ already onboard</h1>
            </div>

            <div ref={socialsRef} className='flex items-center justify-center gap-5 absolute bottom-[5rem] z-[1000000000000000] scale-80 bg-neutral-950/20 border border-neutral-600/75 py-3 px-4 rounded-full opacity-0'>
                <Link href="https://x.com/use_zypp" className='hover:scale-115 transition duration-300' target='_blank'>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <path fill="#bbb" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                    </svg>
                </Link>
                <Link href="https://github.com/zyppprotocol" className='text-[#bbb] hover:text-primary/80 hover:scale-115 transition duration-300' target='_blank'>
                    <Github className='size-7' />
                </Link>
                <Link href="https://instagram.com/use_zypp" className='text-[#bbb] hover:text-primary/80 hover:scale-115 transition duration-300' target='_blank'>
                    <Instagram className='size-7' />
                </Link>
                <Link href="https://t.me/use_zypp" className='text-[#bbb] hover:text-primary/80 hover:scale-115 transition duration-300' target='_blank'>
                    <Send className='size-6' />
                </Link>
            </div>
            
        </div>
    )
}

export default Waitlist