import { span } from 'framer-motion/client'
import React from 'react'

function Featured() {
  return (
    <div className='featured bg-zinc-900 w-full py-20'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-5xl font-[Neue_Montreal] '>Featured projects</h1>
      </div>
      <div className=' mt-20 px-20 flex gap-10'>
        <div className="cardContainer relative h-[80vh] w-1/2 flex flex-col gap-2">
          <div className="headings flex items-center gap-2">
            <span className='bg-white h-3 w-3 rounded-full inline-block'></span>
            <span><h2 className='text-white uppercase font-[Neue_Montreal]'>Salience Labs</h2></span>
          </div>
          <h1 className='absolute z-[9]  text-[15vh] font-[Neue_Montreal] uppercase tracking-tighter leading-none text-[#CDEA68] font-bold left-full -translate-x-1/2 -translate-y-1/2 top-1/2 w-[80vw] text-center'>
           {"salience labs".split().map((item, index)=>{
            return <span key={index}>{item}</span>
           })}
           </h1>
          <div className="card h-full w-full ">
            <img className='h-full w-full rounded-xl' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="Salience labs" />
          </div>
        </div>
        <div className="cardContainer relative h-[80vh] w-1/2 flex flex-col gap-2">
          <div className="headings flex items-center gap-2">
            <span className='bg-white h-3 w-3 rounded-full inline-block'></span>
            <span><h2 className='text-white uppercase font-[Neue_Montreal]'>Cardboard Spaceship</h2></span>
          </div>
           <h1 className='absolute z-[9]  text-[15vh] font-[Neue_Montreal] uppercase tracking-tighter leading-none text-[#CDEA68] font-bold right-full translate-x-1/2 -translate-y-1/2 top-1/2 w-[80vw] text-center'>
           {"Cardboard Spaceship".split().map((item, index)=>{
            return <span key={index}>{item}</span>
           })}
           </h1>
          <div className="card h-full w-full ">
            <img className='h-full w-full rounded-xl' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="Cardboard Spaceship" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured