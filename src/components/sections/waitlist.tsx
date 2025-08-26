import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { ArrowUpRight, Github, Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

const Waitlist = () => {
    return (
        <div className='mt-[6rem] bg-black p-[3rem] pb-[10rem] relative w-screen flex flex-col items-center justify-center overflow-y-hidden h-screen z-[50000000] overflow-x-hidden text-white font-serif'>
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-40",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
            />
            <Image
                src={require("@/assets/wait-mark.svg")}
                alt="Background"
                className="w-15 z-[50000000]  absolute top-[10rem]"
            />
            <Image
                src={require("@/assets/eclipse.svg")}
                alt="Background"

                className="absolute z-[50000000]  object-cover bottom-[-20rem] "
                priority
            />
            <div className='flex z-[50000000]  items-center justify-center gap-4 mt-[10rem] mb-[3rem]'>
                <div className='h-[2px] bg-gradient-to-l from-primary  w-30 rounded-full' />
                <h2>Waitlist</h2>
                <div className='h-[3px] bg-gradient-to-r from-primary  w-30 rounded-full' />
            </div>
            <div className='z-[5000000]'>
                <h1 className='z-[50000000] font-alt text-9xl font-bold bg-gradient-to-b from-primary/20 via-primary/60 to-primary bg-clip-text text-transparent text-center'>Zypp</h1>
                <p className='z-[50000000] text-white text-sm lg:text-md my-10 text-center lg:w-md md:w-md'>Be in line to experience the future of on-chain transactions with Zypp Protocol! Join our waitlist for exclusive access</p>
            </div>

            <div className="z-[50000000] relative">
                <input name="email" type="email" autoComplete="email" placeholder="info@zypp.fun" className="relative border flex border-zinc-700 bg-zinc-900/60 backdrop-blur-sm transition-colors focus-within:border-primary/70 focus-within:bg-primary/10 w-md lg:w-lg text-sm px-6 py-5 pr-12 rounded-full focus:outline-none text-white placeholder-zinc-500" />
                <Button
                    asChild
                    size="lg"
                    className="absolute right-3 top-[6.5px]">
                    <Link href="#waitlist" className='flex gap-2 items-center justify-center'>
                        <span className='font-medium'>Join the waitlist</span>
                        <ArrowUpRight className='size-5' />
                    </Link>
                </Button>
            </div>
            <div className='z-[50000000] mt-6 flex items-center justify-center gap-4'>

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
            <div className='flex items-center justify-center gap-5       absolute bottom-[10rem] z-[1000000000000] scale-80 bg-neutral-950/20 border border-neutral-600/75 py-3 px-4 rounded-full'>
                <Link href="https://x.com/use_zypp" className='hover:scale-115 transition duration-300' target='_blank'>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <path fill="#bbb" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                    </svg>
                </Link>
                <Link href="https://github.com/zyppprotocol" className='text-[#bbb] hover:text-primary/80 hover:scale-115 transition duration-300' target='_blank'>
                    <Github className='size-7'/>
                </Link>
                <Link href="https://instagram.com/use_zypp" className='text-[#bbb] hover:text-primary/80 hover:scale-115 transition duration-300' target='_blank'>
                    <Instagram className='size-7'/>
                </Link>
                <Link href="https://t.com/use_zypp" className='text-[#bbb] hover:text-primary/80 hover:scale-115 transition duration-300' target='_blank'>
                    <Send className='size-6' />
                </Link>
            </div>
        </div>
    )
}

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative rounded-full border flex border-zinc-700 bg-zinc-900/60 backdrop-blur-sm transition-colors focus-within:border-green-400/70 focus-within:bg-green-900/10 w-lg">
        {children}
    </div>
);

export default Waitlist