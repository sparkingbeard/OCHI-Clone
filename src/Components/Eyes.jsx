import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    //side effect here
    window.addEventListener('mousemove', (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX =   mouseX - window.innerWidth/2;
      let deltaY =  mouseY - window.innerHeight/2 ;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI); // getting angle in radiance

      setRotate(angle - 180);
    })
  });
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='bgimg relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] w-full h-full'>
        <div className="eye-container flex gap-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="eye w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="eyeball relative w-2/3 h-2/3 bg-zinc-950 rounded-full">
              <div style={{transform: `rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-10 flex items-center">
                <div className="whiteminiball h-5 w-5 bg-zinc-50 rounded-full"></div>
              </div>

            </div>
          </div>
          <div className="eye w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="eyeball relative w-2/3 h-2/3 bg-zinc-950 rounded-full">
               <div style={{transform: `rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-10 flex items-center">
                <div className="whiteminiball h-5 w-5 bg-zinc-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes