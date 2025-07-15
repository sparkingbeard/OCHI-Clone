import React from 'react'

function Marquee() {
  return (
    <div className='marquee bg-[#004D43] w-full rounded-tl-3xl rounded-tr-3xl py-20'>
      <div className="text flex gap-10 whitespace-nowrap border-t-2 border-b-2 border-zinc-300 overflow-hidden">
        <h1 className='text-[17vw] leading-none font-[Founders_Grotesk] font-semibold uppercase mb-[-10vw] pt-10'>We are ochi</h1>
        <h1 className='text-[17vw] leading-none font-[Founders_Grotesk] font-semibold uppercase mb-[-1vw]'>We are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee