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
        <header className="fixed left-0 right-0 z-[5000000] px-2">
            <nav className="flex justify-center w-full max-w-[1920px] mx-auto">
                <div className={cn(
                    'w-full max-w-6xl mt-6 font-sans pl-3 pr-9 transition-all duration-300 lg:px-4 rounded-full',
                    isScrolled
                        ? 'bg-[#D9FFCF]/8 backdrop-blur-md'
                        : 'bg-transparent'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-3">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image
                                    src={require("@/assets/logo.svg")}
                                    alt="Background"
                                    width={100}
                                    className="scale-65 lg:scale-70"
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

                        {/* Mobile menu with fixed backdrop blur */}
                        <div className={cn(
                            "fixed inset-0 top-20 bg-black/30 backdrop-blur-md", // Full screen backdrop
                            "lg:relative lg:top-0 lg:inset-auto lg:bg-transparent lg:backdrop-blur-0",
                            "transition-all duration-300 ease-in-out",
                            menuState
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none",
                            "lg:opacity-100 lg:pointer-events-auto"
                        )}>
                            <div className={cn(
                                "absolute top-0 left-0 right-0 mx-4 mt-2",
                                "bg-neutral-950/80 backdrop-blur-lg p-6",
                                "rounded-xl border border-neutral-800/90",
                                "shadow-2xl shadow-zinc-300/20",
                                "lg:relative lg:top-0 lg:mx-0 lg:flex lg:w-fit lg:gap-6",
                                "lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                                "transition-all duration-300 ease-in-out",
                                "transform",
                                menuState
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-[-10px]",
                                "lg:opacity-100 lg:translate-y-0"
                            )}>
                                <div className="lg:hidden">
                                    <ul className="space-y-6 text-base">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    className="text-white/80 text-sm hover:text-primary transition block duration-150"
                                                    onClick={() => setMenuState(false)}
                                                >
                                                    <span>{item.name}</span>
                                                    {item.name === 'For Developers' && (
                                                        <Badge variant="default" className="ml-2 px-2 py-[0.5px] text-xs">Beta</Badge>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={cn('flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit', menuState ? 'mt-6' : '')}>
                                    <Link href="https://x.com/use_zypp/status/1959235039503298640" className='flex gap-2 items-center justify-center' onClick={() => setMenuState(false)}>
                                        <Button

                                            size="lg"
                                            className="bg-primary hover:bg-primary/90">
                                            <span className='font-medium'>Join the waitlist</span>
                                            <ArrowUpRight className='size-5' />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation