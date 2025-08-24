import Image from 'next/image'
import React from 'react'

const ForDevs = () => {
    const points = [
      {
        "id": 1,
        "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Offline Functionality</h1>,
        "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Enable your users to transfer assets, files, and data even without an active internet connection, drastically expanding the reach and utility of your dApp.</p>,
        "image": require("@/assets/p1.svg"),
      },
      {
        "id": 2,
        "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Intuitive User Experience</h1>,
        "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Leverage gesture-driven interactions (like swiping and tapping) to make digital transfers feel as natural as a handshake.</p>,
        "image": require("@/assets/p2.svg"),
      },
      {
        "id": 3,
        "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Solana-Native Efficiency</h1>,
        "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Benefit from Solana's high-speed, low-cost blockchain for on-chain settlement, ensuring efficient and scalable transactions.</p>,
        "image": require("@/assets/p3.svg"),
      },
      {
        "id": 4,
        "heading": <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif text-center lg:text-left">Enhanced Security</h1>,
        "text": <p className="text-xs sm:text-sm md:text-md text-white/60 tracking-wide font-sans text-center lg:text-left">Integrate with a protocol built with end-to-end encryption, local signing, and replay protection, ensuring user assets and data remain secure.</p>,
        "image": require("@/assets/p4.svg"),
      },
    ]

  return (
    <div className='bg-[#090f07] rounded-t-4xl w-screen flex relative z-[5000] sm:px-10 md:px-8'>
        <Image
            alt="code"
            src={require("@/assets/code.svg")}
            className='absolute right-0 top-0 pointer-events-none select-none w-1/2 sm:w-2/5 md:w-2/6 opacity-50 sm:opacity-100'
        />
        <div className='max-w-6xl mx-auto flex flex-col items-start justify-start pb-8 pt-[3.5rem] sm:py-12 md:py-[5rem] px-9 lg:px-0'>
            <div className='text-left gap-4 sm:gap-7 flex flex-col w-full'>
                <h1 className='text-2xl sm:text-3xl font-serif font-bold text-center lg:text-left'>
                    <span className='text-primary'>For Developers:</span><br/>
                    Build with Zypp Protocol
                </h1>
                <p className='text-xs sm:text-sm font-sans tracking-wide text-white/70 text-center lg:text-left'>
                    Zypp Protocol offers a foundational SDK to integrate DropFi capabilities into your dApps, enabling instant,{' '}
                    <br className="hidden md:block" /> offline, peer-to-peer transfers of on-chain and off-chain assets.
                </p>
            </div>
            <div className='flex flex-col items-center lg:items-start justify-center mt-8 sm:mt-12 md:mt-[3rem] w-full'>
                <h1 className='text-2xl sm:text-3xl font-serif font-bold text-center lg:text-left'>
                    Why Integrate<span className='text-primary'> Zypp:</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-13 w-full'>
                    {points.map((point, index) => (
                        <div 
                            key={index} 
                            className='bg-neutral-950/40 rounded-xl flex flex-col text-left items-center lg:items-start 
                            py-6 sm:py-8 md:py-[3rem] px-4 sm:px-6 md:px-[3rem] gap-4 
                            transition-all duration-300 ease-out cursor-pointer border border-primary/5 backdrop-blur-lg
                            hover:scale-[1.02] hover:bg-primary/10 hover:shadow-primary hover:shadow-lg
                            hover:border-primary/30 group'
                        >
                            <div className='flex flex-col items-center lg:items-start space-y-4'>
                                <Image 
                                    src={point.image} 
                                    alt={`Point ${point.id}`} 
                                    className='w-8 sm:w-10 h-auto transition-transform duration-300 group-hover:transform group-hover:-translate-y-1'
                                />
                                <div className='flex flex-col gap-3'>
                                    <div className='text-center lg:text-left'>{point.heading}</div>
                                    <div className='text-center lg:text-left group-hover:text-primary/90 transition-colors duration-300'>{point.text}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForDevs