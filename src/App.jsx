import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import ThreeCards from './Components/ThreeCards'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <ThreeCards/>
      <Footer/>
    </div>

  )
}

export default App