import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { ArrowUpRight, Github, Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        setSubmitted(true);
    };

    return (
        <motion.div 
            className='mt-[6rem] bg-black p-[3rem] pb-[10rem] relative w-screen flex flex-col items-center justify-center overflow-y-hidden h-screen z-[50000000] overflow-x-hidden text-white font-serif'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-40",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1, delay: 0.2 }}
            />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <Image
                    src={require("@/assets/wait-mark.svg")}
                    alt="Background"
                    className="w-15 z-[50000000] absolute top-[10rem]"
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <Image
                    src={require("@/assets/eclipse.svg")}
                    alt="Background"
                    className="absolute z-[50000000] object-cover bottom-[-20rem]"
                    priority
                />
            </motion.div>
            
            <motion.div 
                className='flex z-[50000000] items-center justify-center gap-4 mt-[3rem] mb-[1.3rem]'
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                <div className='h-[2px] bg-gradient-to-l from-primary w-30 rounded-full' />
                <h2>Waitlist</h2>
                <div className='h-[3px] bg-gradient-to-r from-primary w-30 rounded-full' />
            </motion.div>
            
            <motion.div 
                className='z-[5000000]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <motion.h1 
                    className='z-[50000000] font-serif text-9xl font-black bg-gradient-to-b mb-2 from-primary/20 via-primary/60 to-primary bg-clip-text text-transparent text-center'
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                >
                    Zypp
                </motion.h1>
                
                <motion.p 
                    className='z-[50000000] text-white text-sm lg:text-md my-10 text-center lg:w-md md:w-md'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                >
                    Be in line to experience the future of on-chain transactions with Zypp Protocol! Join our waitlist for exclusive access
                </motion.p>
            </motion.div>

            <motion.form 
                className="z-[50000000] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                onSubmit={handleSubmit}
            >
                <input 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    placeholder="info@zypp.fun" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="relative border flex border-zinc-700 bg-zinc-900/60 backdrop-blur-sm transition-colors focus-within:border-primary/70 focus-within:bg-primary/10 w-md lg:w-lg text-sm px-6 py-5 pr-12 rounded-full focus:outline-none text-white placeholder-zinc-500" 
                />
                
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        type="submit"
                        size="lg"
                        className="absolute right-3 top-[6.5px]">
                        <span className='font-medium'>Join the waitlist</span>
                        <ArrowUpRight className='size-5 ml-2' />
                    </Button>
                </motion.div>
            </motion.form>
            
            <motion.div 
                className='z-[50000000] mt-6 flex items-center justify-center gap-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
            >
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
            </motion.div>
            
            <motion.div 
                className='flex items-center justify-center gap-5 absolute bottom-[5rem] z-[1000000000000] scale-80 bg-neutral-950/20 border border-neutral-600/75 py-3 px-4 rounded-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
            >
                {[
                    { href: "https://x.com/use_zypp", icon: <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path fill="#bbb" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" /></svg> },
                    { href: "https://github.com/zyppprotocol", icon: <Github className='size-7'/> },
                    { href: "https://instagram.com/use_zypp", icon: <Instagram className='size-7'/> },
                    { href: "https://t.me/use_zypp", icon: <Send className='size-6' /> }
                ].map((social, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            href={social.href} 
                            className='text-[#bbb] hover:text-primary/80 transition duration-300' 
                            target='_blank'
                        >
                            {social.icon}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Success message */}
            {submitted && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/10 backdrop-blur-md p-8 rounded-2xl border border-primary/30 z-50"
                >
                    <h3 className="text-2xl font-bold text-primary mb-4">Thank you!</h3>
                    <p className="text-white">You've been added to our waitlist.</p>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Waitlist