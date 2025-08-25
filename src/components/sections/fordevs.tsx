import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { ArrowUpRight, Github, Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ForDevs = () => {
    const points = [
        {
            "id": 1,
            "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Offline Functionality</h1>,
            "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Enable your users to transfer assets, files, and data even without an active internet connection, drastically expanding the reach and utility of your dApp.</p>,
            "image": "/p1.svg",
        },
        {   
            "id": 2,
            "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Intuitive User Experience</h1>,
            "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Leverage gesture-driven interactions (like swiping and tapping) to make digital transfers feel as natural as a handshake.</p>,
            "image": "/p2.svg",
        },
        {
            "id": 3,
            "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Solana-Native Efficiency</h1>,
            "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Benefit from Solana's high-speed, low-cost blockchain for on-chain settlement, ensuring efficient and scalable transactions.</p>,
            "image": "/p3.svg",
        },
        {
            "id": 4,
            "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Enhanced Security</h1>,
            "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Integrate with a protocol built with end-to-end encryption, local signing, and replay protection, ensuring user assets and data remain secure.</p>,
            "image": "/p4.svg",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div 
            className='bg-[#090f07] rounded-4xl w-full flex relative z-[5000] px-4 sm:px-6 md:px-8 lg:px-10 tracking-wide overflow-hidden'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <Image
                alt="code"
                src="/code.svg"
                width={300}
                height={200}
                className='absolute right-0 top-0 pointer-events-none select-none w-1/2 sm:w-2/5 md:w-2/6 opacity-50 sm:opacity-100'
            />
            <div className='max-w-6xl mx-auto flex flex-col items-start justify-start pb-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 w-full'>
                <motion.div 
                    className='text-left gap-4 sm:gap-5 md:gap-7 flex flex-col w-full'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center lg:text-left'>
                        <span className='text-primary'>For Developers:</span><br className='' />
                        Build with Zypp Protocol
                    </h1>
                    <p className='text-xs sm:text-sm md:text-base font-sans tracking-wide text-white/70 text-center lg:text-left'>
                        Zypp Protocol offers a foundational SDK to integrate DropFi capabilities into your dApps, enabling instant,{' '}
                        <br className="hidden md:block" /> offline, peer-to-peer transfers of on-chain and off-chain assets.
                    </p>
                </motion.div>
                
                <div className='flex flex-col items-center lg:items-start justify-center mt-8 sm:mt-10 md:mt-12 w-full'>
                    <motion.h1 
                        className='text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center lg:text-left w-full'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Why Integrate<span className='text-primary'> Zypp:</span>
                    </motion.h1>
                    
                    <motion.div 
                        className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10 w-full'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                className='bg-neutral-950/40 rounded-xl flex flex-col text-left items-center lg:items-start 
                                py-5 sm:py-6 md:py-10 px-9 sm:px-5 md:px-12 gap-3 md:gap-4
                                transition-all duration-300 ease-out cursor-pointer border border-primary/5 backdrop-blur-lg
                                hover:scale-[1.02] hover:bg-primary/10 hover:shadow-primary hover:shadow-lg
                                hover:border-primary/30 group'
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                <div className='flex flex-col items-center lg:items-start space-y-3 md:space-y-4'>
                                    <motion.div
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Image
                                            src={point.image}
                                            alt={`Point ${point.id}`}
                                            width={40}
                                            height={40}
                                            className='w-8 sm:w-9 md:w-10 h-auto'
                                        />
                                    </motion.div>
                                    <div className='flex flex-col gap-2 md:gap-3'>
                                        <div className='text-center lg:text-left'>{point.heading}</div>
                                        <div className='text-center lg:text-left tracking-wide group-hover:text-primary/90 transition-colors duration-300'>{point.text}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                <motion.div 
                    className='w-full mt-12 sm:mt-16 md:mt-20'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center lg:text-left'>
                        What You Can <span className='text-primary'>Build</span>
                    </h1>
                    <div className='flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-5 md:mt-6 w-full'>
                        <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
                            {["Offline NFT Marketplaces", "P2P Token Swaps", "Local Content Sharing"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary/40 text-white/90 font-sans tracking-wide hover:border-primary hover:bg-primary/10 hover:text-primary transition text-xs sm:text-sm"
                                    >
                                        {item}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                        <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
                            {["In-Game Item Trading", "Decentralized File Sharing"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary/40 text-white/90 font-sans tracking-wide hover:border-primary hover:bg-primary/10 hover:text-primary transition text-xs sm:text-sm"
                                    >
                                        {item}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <motion.div 
                        className='mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start w-full'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto">
                                <Link href="/docs" className='flex gap-2 items-center justify-center'>
                                    <span className='font-medium font-sans tracking-wide'>Read Developer Docs</span>
                                    <ArrowUpRight className='size-4 sm:size-5' />
                                </Link>
                            </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                asChild
                                size="icon"
                                className="relative px-3 w-full sm:w-auto">
                                <Link href="https://github.com/zyppprotocol" className='flex gap-2 items-center justify-center'>
                                    <Github className='size-5 sm:size-6 md:size-7' fill='black' />
                                    <span className='sm:hidden'>GitHub</span>
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ForDevs