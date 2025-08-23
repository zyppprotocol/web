import React from 'react'
import { TiltedScroll } from '../ui/tilted-scroll'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { BackgroundCells } from '../ui/grid'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-[5rem] items-center justify-center font-sans mt-[2rem] z-[5000]">
      <div className="max-w-6xl w-full flex items-center justify-between mx-auto">
        <div>
          <Link href="https://x.com/use_zypp/status/1959235039503298640" target="_blank">
            <Badge className='bg-lime-950/20 border hover:bg-lime-950/40 hover:scale-[1.05] transition duration-300 cursor-pointer border-lime-800/20 backdrop-blur-lg text-primary px-4 py-2 text-xs font-semibold mb-4 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path fill="#fff" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
              Introducing Zypp Protocol, the first DropFi Protocol on Solana...
              <ChevronRight className="inline h-4 w-4 text-primary" />
            </Badge>
          </Link>
          <h1 className='font-serif mt-3 text-4xl font-extrabold'>Payment infrastructure that<br /> moves at <span className='text-primary'>Zypp speed</span></h1>
          <div className='flex items-center justify-start gap-4 w-full mt-10'>
            <Button
              asChild
              size="lg"
              className="">
              <Link href="#waitlist" className='flex gap-2 items-center justify-center'>
                <span className='font-medium'>Join the waitlist</span>
                <ArrowUpRight className='size-5' />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent hover:bg-neutral-950/60 border border-neutral-800 text-primary hover:text-primary/80 backdrop-blur-lg">
              <Link href="#waitlist" className='flex gap-2 items-center justify-center'>
                <span className='font-medium text-white'>Follow us on </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                  <path fill="#62F43E" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <p className='text-primary font-sans'>The first DropFi Protocol on Solana</p>
          <p>Bringing the future of onchain<br />transactions to the offline ecosystem</p>
        </div>
      </div>
      <Image
        src={require("@/assets/hero.svg")}
        alt="Hero"
        className="scale-85"
      />
    </div>
  )
}

export default Hero
