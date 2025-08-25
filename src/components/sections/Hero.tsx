import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-[2rem] md:gap-[5rem] items-center justify-center tracking-wide font-sans mt-[6rem] lg:mt-[15rem] md:mt-[2rem] z-[5000] px-4 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start md:justify-between mx-auto gap-8 md:gap-0">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="https://x.com/use_zypp/status/1959235039503298640" target="_blank">
              <Badge className='bg-green-950/20 border hover:bg-green-950/40 hover:scale-[1.05] transition duration-300 cursor-pointer border-green-800/20 backdrop-blur-lg text-primary px-4 py-2 text-xs font-semibold mb-4 gap-3 max-w-full overflow-hidden'>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                  <path fill="#fff" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                </svg>
                <span className="hidden sm:inline">Introducing Zypp Protocol, the first DropFi Protocol on Solana...</span>
                <span className="sm:hidden">Introducing Zypp Protocol...</span>
                <ChevronRight className="inline h-4 w-4 text-primary" />
              </Badge>
            </Link>
          </motion.div>
          
          <motion.h1 
            className='font-serif mt-3 text-4xl md:text-4xl font-extrabold'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Payment infrastructure that<br className="hidden md:block" /> moves at <span className='text-primary'>Zypp speed</span>
          </motion.h1>
          
          <motion.div 
            className='block md:hidden my-[2rem] text-sm tracking-wide lg:text:md'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className='text-primary font-sans'>The first DropFi Protocol on Solana.</p>
            <p>Bringing the future of onchain <br className="hidden md:block" />transactions to the offline ecosystem</p>
          </motion.div>
          
          <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full mt-6 md:mt-10'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto">
                <Link href="#waitlist" className='flex gap-2 items-center justify-center'>
                  <span className='font-medium'>Join the waitlist</span>
                  <ArrowUpRight className='size-5' />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-transparent hover:bg-neutral-950/60 border border-neutral-800 text-primary hover:text-primary/80 backdrop-blur-lg">
                <Link href="https://x.com/use_zypp/status/1959235039503298640" className='flex gap-2 items-center justify-center'>
                  <span className='font-medium text-white'>Follow us on </span>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                    <path fill="#62F43E" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block text-center md:text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <p className='text-primary font-sans'>The first DropFi Protocol on Solana</p>
          <p>Bringing the future of onchain<br className="hidden md:block" />transactions to the offline ecosystem</p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="lg:scale-75 md:scale-85 w-[100rem] scale-200 my-[7rem]"
      >
        <Image
          src="/hero.svg" // Use public path instead of require
          alt="Hero"
          width={1000}
          height={600}
          className="w-full"
        />
      </motion.div>
    </div>
  )
}

export default Hero