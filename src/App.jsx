import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
import About from './Components/About'
function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
    </div>

  )
}

export default App