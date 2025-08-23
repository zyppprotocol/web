'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Features() {

    const features = [
        {
            "heading": <h1 className="text-3xl font-bold text-white font-serif"><span className="text-primary">Offline-First</span><br />Design</h1>,
            "text": <p className="text-md tracking-wide font-sans">Stay reliable even when offline.<br /> Transactions sync seamlessly once you’re<br /> back online.</p>,
            "image": require("@/assets/f1.svg"),
            "link": "/docs/offline-first"
        },
        {
            "heading": <h1 className="text-3xl font-bold text-white font-serif"><span className="text-primary">Gesture-Driven</span><br />Interaction</h1>,
            "text": <p className="text-md tracking-wide font-sans">Turn natural movements into instant<br /> confirmations.</p>,
            "image": require("@/assets/f2.svg"),
            "link": "/docs/gestures"
        },
        {
            "heading": <h1 className="text-3xl font-bold text-white font-serif"><span className="text-primary">Fast and Secure</span><br />Transactions</h1>,
            "text": <p className="text-md tracking-wide font-sans">Move tokens in seconds, with security built<br /> in at every step.</p>,
            "image": require("@/assets/f3.svg"),
            "link": "/docs/speed-and-security"
        },
        {
            "heading": <h1 className="text-3xl font-bold text-white font-serif"><span className="text-primary">Durable</span>Nonces</h1>,
            "text": <p className="text-md tracking-wide font-sans">Transactions wait patiently until you’re back <br />online.</p>,
            "image": require("@/assets/f4.svg"),
            "link": "/docs/durable-nonces"
        },

    ]

    const opposite = (index: number) => index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'

    return (
        <div className="w-full flex flex-col items-center justify-center my-20 font-sans z-[5000]">
            <div className="max-w-6xl w-full flex flex-col items-center justify-center mx-auto px-4">
                {features.map((feature, index) => (
                    <div key={index} className={`w-full flex flex-col ${opposite(index)} items-center justify-between gap-10 mb-20 lg:gap-0 lg:mb-40`}>
                        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6">
                            {feature.heading}
                            {feature.text}
                             <Button
              asChild
              size="lg"
              className="bg-transparent hover:bg-neutral-950/60 border border-neutral-800 text-primary hover:text-primary/80 backdrop-blur-lg">
              <Link href={feature.link} className='flex gap-2 items-center justify-center'>
                <span className='font-medium text-primary'>Learn more</span>
              </Link>
            </Button>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <Image src={feature.image} alt="Feature Image" className="w-3/4" />
                        </div>
                    </div>
                ))}
        </div>
        </div>
    )
}