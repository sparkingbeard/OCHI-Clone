import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
    return (
        <div className='bg-zinc-900 h-screen w-full pt-1'>
            <div className="textStructure mt-40 px-16">
                {["We create", "eye-opening", "presentations"].map((item, index) => (
                    <div key={item} className="masker">
                        <div className='w-fit flex h-full'>
                            {index === 1 && (<div className="img w-[9vw] bg-amber-600 h-[5vw] mr-[1vw] rounded-md"></div>)}
                            <h1 className="flex items-center font-['Founders_Grotesk'] font-semibold text-[7.5vw] uppercase leading-[6vw] relative top-[0.8vw]">{item}</h1>
                        </div>
                    </div>
                ))}

            </div>

            <div className="hrLine border-t-[2px] mt-30 border-zinc-600 flex justify-between items-center px-15 py-5">
                {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                    <p key={index} className='font-[Neue_Montreal] '>{item}</p>
                ))}
                <div className="start flex items-center justify-between w-[14.5rem]">
                    <div className='border-[1px] border-zinc-400 py-1 px-4 rounded-3xl font-[Neue_Montreal] font-light uppercase text-md'>START THE PROJECT</div>
                    <div className="circle w-8 h-8 rounded-full border-zinc-400 border-[1px] flex justify-center items-center rotate-[45deg]">
                        <FaArrowUpLong />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage