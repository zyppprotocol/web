'use client'
import Link from 'next/link'
import { ArrowUpRight, Menu, Twitter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import Image from 'next/image'

const menuItems = [
    { name: 'Home', href: '#link' },
    { name: 'Features', href: '#link' },
    { name: 'For Developers', href: '#link' },
    { name: 'Blog', href: '#link' },
]

const Navigation = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav className="fixed z-[50000] w-full px-2">
                <div className={cn('mx-auto mt-6 max-w-6xl py-[0.50px] font-sans pl-3 pr-9 transition-all duration-300 lg:px-4 bg-transparent lg:bg-[#D9FFCF]/8 rounded-full backdrop-blur-md')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image
                                    src={require("@/assets/logo.svg")}
                                    alt="Background"
                                    width={100}
                                    className   ="scale-65 lg:scale-70"
                                    priority
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                {menuState ? (
                                    <X className="m-auto size-6 duration-500" />
                                ) : (
                                    <Menu className="m-auto size-6 duration-500" />
                                )}
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/80 text-sm hover:text-primary transition block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile menu: conditional rendering */}
<div className={cn(
    "fixed top-[60px] left-0 right-0 mx-2", // Position it below the header
    "fixed top-[60px] left-0 right-0 mx-2", // Position it below the header
    "bg-neutral-950/5 backdrop-blur-md p-6",
    "rounded-xl border border-neutral-800/90",
    "shadow-2xl shadow-zinc-300/20 dark:shadow-none",
    "lg:relative lg:top-0 lg:mx-0 lg:flex lg:w-fit lg:gap-6",
    "lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
    "transition-all duration-300 ease-in-out", // Added smooth transition
    "transform",
    menuState 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-[-10px] pointer-events-none",
    "lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:flex"
)}>                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/80 text-sm hover:text-primary transition block duration-150">
                                                <span>{item.name}</span>
                                                {item.name === 'For Developers' && (
                                                    <Badge variant="default" className="ml-2 px-2 py-[0.5px] text-xs">Beta</Badge>)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cn('flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit', menuState ? 'mt-6' : '')}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="">
                                    <Link href="#waitlist" className='flex gap-2 items-center justify-center'>
                                        <span className='font-medium'>Join the waitlist</span>
                                        <ArrowUpRight className='size-5' />     
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation