'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Features() {
    const featuresRef = useRef<HTMLDivElement>(null)
    const featureItemsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!featuresRef.current) return

        const ctx = gsap.context(() => {
            // Animate each feature item on scroll
            featureItemsRef.current.forEach((item, index) => {
                if (!item) return

                gsap.fromTo(item,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none none"
                        },
                        delay: index * 0.2
                    }
                )
            })
        }, featuresRef)

        return () => ctx.revert()
    }, [])

    const features = [
        {
            "id": 1,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left"><span className="text-primary">Offline-First </span>Design</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-left">Stay reliable even when offline. Transactions sync seamlessly once you're back online.</p>,
            "image": require("@/assets/f1.svg"),
            "link": "/docs/offline-first"
        },
        {
            "id": 2,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-right"><span className="text-primary">Gesture-Driven </span>Interaction</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-right">Turn natural movements into instant confirmations.</p>,
            "image": require("@/assets/f2.svg"),
            "link": "/docs/gestures"
        },
        {
            "id": 3,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left"><span className="text-primary">Fast and Secure </span>Transactions</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-left">Move tokens in seconds, with security built in at every step.</p>,
            "image": require("@/assets/f3.svg"),
            "link": "/docs/speed-and-security"
        },
        {
            "id": 4,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-right"><span className="text-primary">Durable </span>Nonces</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-right">Transactions wait patiently until you're back online.</p>,
            "image": require("@/assets/f4.svg"),
            "link": "/docs/durable-nonces"
        },
    ]

    return (
        <div ref={featuresRef} id="features" className="w-screen flex flex-col items-center justify-center tracking-wide mb-10 md:my-20 font-sans z-[100]">            <div className="max-w-6xl w-full mx-auto px-4 pr-1 md:px-6">
            <div className="grid grid-cols-1 gap-4 md:gap-1">
                {features.map((feature, index) => (
                    <div key={index} ref={el => featureItemsRef.current[index] = el as HTMLDivElement} className={cn(
                        "flex flex-col-reverse gap-2 mb-8 lg:mb-10 opacity-0",
                        "lg:flex-row lg:items-center lg:justify-between",
                        feature.id % 2 === 0 && "lg:flex-row-reverse"
                    )}>
                        <div className={cn(
                            "flex flex-col items-center gap-4",
                            "lg:w-1/2",
                            feature.id % 2 === 0 ? "lg:items-end" : "lg:items-start"
                        )}>
                            {feature.heading}
                            {feature.text}
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-transparent hover:bg-neutral-950/60 border border-neutral-600/30 text-primary hover:text-primary/80 backdrop-blur-lg hover:scale-105 transition-transform duration-300">
                                <Link href={feature.link} className='flex gap-2 items-center justify-center'>
                                    <span className='font-medium text-primary'>Learn more</span>
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-2 group">
                            <Image
                                src={feature.image}
                                alt="Feature Image"
                                className={cn(
                                    "w-full md:w-4/5 scale-50 lg:w-full transition-all duration-500 group-hover:scale-85",
                                    feature.id > 1 && "lg:w-3/4"
                                )}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}