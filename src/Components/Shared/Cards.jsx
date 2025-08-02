import React from 'react'
import Button from './button'

function Cards({image, imgUrl, bgcolor, width, btnText, btnStyle, btnTextColor, btnHeight, btnWidth}) {
  return (
    <div className={`h-[55vh] ${bgcolor} ${width} ${imgUrl} bg-center shadow-lg text-black flex justify-center items-center rounded-lg relative`}>
      <div>{image}</div>
      <Button 
      btnText = {btnText}
      btnTextColor = {btnTextColor}
      btnHeight = {btnHeight}
      btnWidth= {btnWidth}
      />
    </div>
  )
}

export default Cards