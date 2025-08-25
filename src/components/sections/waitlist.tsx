import Image from 'next/image'
import React from 'react'

const Waitlist = () => {
  return (
     <div className='mt-[3rem] w-screen min-h-screen overflow-x-hidden text-white font-serif'>
            <div className='max-w-6xl relative'>
                      <Image
                        src={require("@/assets/waitlist.jpeg")}  
                        alt="Background"
                        fill
                        className="absolute inset-0 object-cover w-full  z-10 overflow-hidden"
                        priority
                      />
            </div>
        </div>
  )
}

export default Waitlist