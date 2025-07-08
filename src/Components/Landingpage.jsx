import React from 'react'

function Landingpage() {
    return (
        <div className='bg-zinc-900 h-screen w-full pt-1'>
            <div className="textStructure mt-32 px-20">
                {["We create", "eye-opening", "presentations"].map((item, index) => (
                    <h1 key={index} className="masker font-['FoundersGrotesk, sans-serif'] font-medium text-[10vw] md:text-[7vw] uppercase leading-[12vw] md:leading-[6vw] tracking-tighter">{item}</h1>
                ))}
            </div>

            <div className="hrLine border-t-[2px] mt-32 border-zinc-600 flex justify-between items-center px-20 py-5">
                {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                    <p key={index} className='font-[Neue Montreal] '>{item}</p>
                ))}

                
            </div>
        </div>
    )
}

export default Landingpage