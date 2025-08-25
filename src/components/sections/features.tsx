'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Features() {
    const features = [
        {
            "id": 1,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left"><span className="text-primary">Offline-First </span>Design</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-left">Stay reliable even when offline. Transactions sync seamlessly once you're back online.</p>,
            "image": "/f1.svg",
            "link": "/docs/offline-first"
        },
        {
            "id": 2,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-right"><span className="text-primary">Gesture-Driven </span>Interaction</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-right">Turn natural movements into instant confirmations.</p>,
            "image": "/f2.svg",
            "link": "/docs/gestures"
        },
        {
            "id": 3,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left"><span className="text-primary">Fast and Secure </span>Transactions</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-left">Move tokens in seconds, with security built in at every step.</p>,
            "image": "/f3.svg",
            "link": "/docs/speed-and-security"
        },
        {
            "id": 4,
            "heading": <h1 className="text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-right"><span className="text-primary">Durable </span>Nonces</h1>,
            "text": <p className="text-sm md:text-md tracking-wide font-sans text-center lg:text-right">Transactions wait patiently until you're back online.</p>,
            "image": "/f4.svg",
            "link": "/docs/durable-nonces"
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center tracking-wide mb-10 md:my-20 font-sans z-[50000]">
            <div className="max-w-6xl w-full mx-auto px-4 pr-1 md:px-6">
                <motion.div 
                    className="grid grid-cols-1 gap-4 md:gap-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className={cn(
                                "flex flex-col-reverse gap-4 mb-8 lg:mb-10",
                                "lg:flex-row lg:items-center lg:justify-between",
                                feature.id % 2 === 0 && "lg:flex-row-reverse"
                            )}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={cn(
                                "flex flex-col items-center gap-4",
                                "lg:w-1/2",
                                feature.id % 2 === 0 ? "lg:items-end" : "lg:items-start"
                            )}>
                                {feature.heading}
                                {feature.text}
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full sm:w-auto bg-transparent hover:bg-neutral-950/60 border border-neutral-600/30 text-primary hover:text-primary/80 backdrop-blur-lg">
                                        <Link href={feature.link} className='flex gap-2 items-center justify-center'>
                                            <span className='font-medium text-primary'>Learn more</span>
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image 
                                    src={feature.image} 
                                    alt="Feature Image" 
                                    width={400}
                                    height={300}
                                    className={cn("w-full md:w-4/5 scale-75 lg:w-full", feature.id > 1 && "lg:w-3/4")} 
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}