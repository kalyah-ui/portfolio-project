import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/stars-background-demo";
import Navbar from './Navbar'
import './index.css'

function App() {
  return (
    <>
      {/* Full-screen star background */}
      <ShootingStarsAndStarsBackgroundDemo />

      {/* All app content sits ABOVE the stars */}
      <div className="relative z-10">
        <Navbar />
        <section id="center">
          <div>
            <h1>Hello World!</h1>
            <p>
              I’m Kalyah, a computer systems engineering student with a passion for software development and space systems. 
              Welcome to my portfolio! I love exploring new technologies and turning creative ideas into reality.
            </p>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="next-steps">
          {/* your next-steps content unchanged */}
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>

      </div>
    </>
  )
}

export default App
