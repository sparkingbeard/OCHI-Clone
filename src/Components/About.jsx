import React from 'react'

function About() {
    return (
        <div className='bg-[#CDEA68] w-full p-20 rounded-tr-3xl rounded-tl-3xl text-black'>
            <h2 className='font-[Neue_Montreal] text-[3.5vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell products, explain complex ideas</span>, and <span className='underline'>hire great people.</span></h2>
            <div className=" texthr1 w-full font-[Neue_Montreal] border-t-[1px] border-[#99a56a] mt-20 pt-5 grid grid-cols-3 gap-[12vw]">
                <div>
                    <p>What you can expect:</p>
                </div>
                <div className='flex flex-col gap-[2vw] ml-[7vw] w-[18vw]'>
                    <p>

                        We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants</p>
                    <p>
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='flex flex-col justify-end'>
                    <p className='mb-5'>S:</p>
                    <ul className='underline leading-[1.6vw]'>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className="texthr2 w-full border-t-[1px] border-[#99a56a] mt-[7vw] pt-3 flex ">
                <div className='w-1/2'>
                    <h1 className='text-[3.5vw] font-[Neue_Montreal] font-md '>Our approach:</h1>
                    <button className='bg-zinc-900 h-15 rounded-full w-48 text-white flex justify-center items-center gap-10 mt-2'>READ MORE
                        <div className='h-2.5 w-2.5 bg-white rounded-full'></div>
                    </button>
                </div>
                <div className="img w-1/2 bg-[#99a56a] h-[70vh] rounded-lg"></div>
            </div>
        </div>
    )
}

export default About