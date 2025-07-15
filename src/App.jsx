import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
    </div>

  )
}

export default App