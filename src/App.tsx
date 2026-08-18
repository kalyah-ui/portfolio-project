import { StarsBackgroundAnimation } from "@/components/animations/stars-background-animation";
import Navbar from './Navbar'
import './index.css'
import FadeInSection from './components/fade-in-section';
import Button from "./components/button";
import MyProjects from './components/my-projects';
import AboutMe from './components/about-me';
import { NebulaClouds } from "@/components/ui/dust-cloud.tsx";
import SkillsAnimation from "./components/animations/skills-animation";
import ExperienceCatalog from "./components/experience";
import ContactMe from "./components/contact-me";

function App() {
  return (
    <>
      {/* Full-screen star background */}
      <StarsBackgroundAnimation />
      <NebulaClouds />

      {/* So app content sits above the stars */}
      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <div className="home-container">
            <FadeInSection direction="down">
              <h1>Hello World!</h1>
            </FadeInSection>
            <FadeInSection direction="down">
              <p>
                I'm Kalyah, a computer systems engineering student with a passion for software development.
                Welcome to my portfolio! I love exploring new technologies and turning creative ideas into reality.
              </p>
            </FadeInSection>
            <FadeInSection direction="down">
              <a href="/Resume.pdf" download>
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

        <section id="skills">
          <div>
            <FadeInSection direction="down">
              <h1>Skills</h1>
            </FadeInSection>
            <FadeInSection direction="down">
              <SkillsAnimation />
            </FadeInSection>
          </div>
        </section>

        <section id="experience">
          <div>
            <FadeInSection direction="down">
              <h1>Experience</h1>
            </FadeInSection>
            <FadeInSection direction="down">
              <ExperienceCatalog />
            </FadeInSection>
          </div>
        </section>

        <section id="contact">
          <div>
            <FadeInSection direction="down">
              <h1>Let's Connect</h1>
            </FadeInSection>
            <FadeInSection direction="down">
              <ContactMe />
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
