'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight, Github, Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

const Waitlist = () => {
    return (
        <div className='relative w-full min-h-screen bg-black text-white font-serif overflow-hidden z-[500000000] px-6 py-20 flex flex-col items-center justify-center'>
            {/* Grid background overlay */}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-40",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
                )}
            />

            {/* Floating SVGs */}
            <Image
                src={require("@/assets/wait-mark.svg")}
                alt="Mark"
                className="absolute top-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
            />
            <Image
                src={require("@/assets/eclipse.svg")}
                alt="Eclipse"
                className="absolute bottom-[-10rem] md:bottom-[-15rem] w-full object-cover z-10"
                priority
            />

            {/* Title */}
            <div className='relative z-20 flex items-center justify-center gap-4 mt-8 mb-4'>
                <div className='h-[2px] bg-gradient-to-l from-primary w-20 sm:w-32 rounded-full' />
                <h2 className='text-base sm:text-lg'>Waitlist</h2>
                <div className='h-[2px] bg-gradient-to-r from-primary w-20 sm:w-32 rounded-full' />
            </div>

            {/* Hero Text */}
            <div className='relative z-20 text-center px-4 max-w-4xl'>
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black bg-gradient-to-b from-primary/20 via-primary/60 to-primary bg-clip-text text-transparent mb-4'>
                    Zypp
                </h1>
                <p className='text-sm sm:text-base md:text-md text-white/90 mt-4'>
                    Be in line to experience the future of on-chain transactions with Zypp Protocol! Join our waitlist for exclusive access.
                </p>
            </div>

            {/* Email Input */}``
            <div className="relative z-20 mt-10 w-full max-w-lg">
                <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="info@zypp.fun"
                    className="w-full border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm transition-colors focus:border-primary/70 focus:bg-primary/10 text-sm px-6 py-5 pr-36 rounded-full focus:outline-none text-white placeholder-zinc-500"
                />
                <Button
                    asChild
                    size="lg"
                    className="absolute right-2 top-2 sm:top-[6px] px-4 py-2 sm:px-5 sm:py-3">
                    <Link href="#waitlist" className='flex items-center gap-2'>
                        <span className='text-sm sm:text-base'>Join the waitlist</span>
                        <ArrowUpRight className='size-4 sm:size-5' />
                    </Link>
                </Button>
            </div>

            {/* Avatars */}
            <div className='relative z-20 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3'>
                <div className="flex -space-x-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </div>
                <p className='text-sm text-white/80 mt-2 sm:mt-0'>Join 100+ already onboard</p>
            </div>

            {/* Social Icons */}
            <div className='relative z-30 flex items-center justify-center gap-5 mt-10 sm:mt-16 px-6 py-3 bg-neutral-950/20 border border-neutral-600/75 rounded-full'>
                <Link href="https://x.com/use_zypp" target='_blank' className='transition hover:scale-110'>
                    <svg className="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <path fill="#bbb" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                    </svg>
                </Link>
                <Link href="https://github.com/zyppprotocol" target='_blank' className='text-[#bbb] hover:text-primary/80 hover:scale-110 transition'>
                    <Github className='size-6 sm:size-7' />
                </Link>
                <Link href="https://instagram.com/use_zypp" target='_blank' className='text-[#bbb] hover:text-primary/80 hover:scale-110 transition'>
                    <Instagram className='size-6 sm:size-7' />
                </Link>
                <Link href="https://t.me/use_zypp" target='_blank' className='text-[#bbb] hover:text-primary/80 hover:scale-110 transition'>
                    <Send className='size-5 sm:size-6' />
                </Link>
            </div>
        </div>
    )
}

export default Waitlist;
