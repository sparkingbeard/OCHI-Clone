import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='marquee bg-[#004D43] w-full rounded-tl-3xl rounded-tr-3xl py-20'>
      <div className="text flex gap-10 whitespace-nowrap border-t-2 border-b-2 border-zinc-300 overflow-hidden">
        <motion.h1 className='text-[17vw] leading-none font-[Founders_Grotesk] font-semibold uppercase mb-[-3vw] pt-10'>We are ochi</motion.h1>
        <motion.h1 className='text-[17vw] leading-none font-[Founders_Grotesk] font-semibold uppercase mb-[-3vw] pt-10'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee