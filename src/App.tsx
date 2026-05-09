import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/stars-background-demo";
import Navbar from './Navbar'
import './index.css'
import FadeInSection from './components/fade-in-section';
import Button from "./components/button";
import MyProjects from './components/my-projects';
import AboutMe from './components/about-me';
import {NebulaClouds} from "@/components/demos/dust-cloud.tsx";

function App() {
  return (
    <>
      {/* Full-screen star background */}
      <ShootingStarsAndStarsBackgroundDemo />
      <NebulaClouds />

      {/* So app content sits above the stars */}
      <div className="relative z-10">
        <Navbar />
          <section id="home">
            <div>
              <FadeInSection direction="down">
              <h1>Hello World!</h1>
              </FadeInSection>
              <FadeInSection direction="down">
                <p>
                  I'm Kalyah, a computer systems engineering student with a passion for software development and space systems. 
                  Welcome to my portfolio! I love exploring new technologies and turning creative ideas into reality.
                </p>
              </FadeInSection>
              <FadeInSection direction="down">
                <a href="/Resume-Kalyah-McKesey.pdf" download>
                  <Button>Download Resume</Button>
                </a>
              </FadeInSection>
            </div>
          </section>

          <section id="projects">
            <div>
              <FadeInSection direction="down">
              <h1>My Projects</h1>
              </FadeInSection>
              <MyProjects />
            </div>
          </section>
          <section id="about-me"> 
            <div>
              <AboutMe />
            </div>
          </section>
      </div>
    </>
  )
}

export default App
