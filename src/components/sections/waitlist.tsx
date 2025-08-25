import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Waitlist = () => {
    return (
        <div className='mt-[6rem] p-[3rem] relative w-screen flex flex-col items-center justify-center min-h-screen z-[500000] overflow-x-hidden text-white font-serif'>
            <Image
                src={require("@/assets/wait-mark.svg")}
                alt="Background"
                className="w-15 absolute top-[10rem]"
            />
            <div className='flex items-center justify-center gap-4 mt-[10rem] mb-[3rem]'>
                <div className='h-[2px] bg-gradient-to-l from-primary  w-30 rounded-full'/>
                <h2>Waitlist</h2>
                <div className='h-[3px] bg-gradient-to-r from-primary  w-30 rounded-full'/>
            </div>
            <div>
                <h1 className='font-alt text-9xl font-bold bg-gradient-to-b from-primary/5 via-primary/60 to-primary bg-clip-text text-transparent text-center'>Zypp</h1>
                <p className='text-white text-sm lg:text-md my-10 text-center lg:w-md md:w-md'>Be in line to experience the future of on-chain transactions with Zypp Protocol! Join our waitlist for exclusive access</p>
            </div>

                  <div className="relative">
                    <input name="email" type="email" autoComplete="email" placeholder="info@zypp.fun" className="relative border flex border-zinc-700 bg-zinc-900/60 backdrop-blur-sm transition-colors focus-within:border-primary/70 focus-within:bg-primary/10 w-md lg:w-lg text-sm px-4 py-5 pr-12 rounded-full focus:outline-none text-white placeholder-zinc-500" />
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
                  <div className='mt-6 flex items-center justify-center gap-4'>
                    <div></div>
                    <h1 className='text-white/80 text-sm'>Join 100+ already onboard</h1>
                    <div className="*:data-[slot=avatar]:ring-primary/50 flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
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