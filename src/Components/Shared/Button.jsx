import React from 'react'

function Button({btnText, btnTextColor, onclick,  btnWidth, btnHeight}) {
  return (
    <div className = {`h-[4.5vh] w-[7.5vw] font-[Neue_Montreal] rounded-full border-[1px] ${btnTextColor} ${btnHeight} ${btnWidth} flex justify-center items-center absolute bottom-8 left-8`}>{btnText}</div>
  )
}

export default Button