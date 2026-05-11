import FadeInSection from "./fade-in-section";
import grayImg from "../assets/Profile_Image_Gray.png";
import colorImg from "../assets/Profile_Image.png";
import mapPin from "../assets/map-pin.svg";

export default function AboutMe() {
  return (
    <section id="about" className="about-container">

      <FadeInSection direction="left">
        <div className="about-image-wrapper">
          <div
            className="about-image"
            style={{
              "--gray-img": `url(${grayImg})`,
              "--color-img": `url(${colorImg})`,
            } as React.CSSProperties}
          />
        </div>
      </FadeInSection>

      <FadeInSection direction="right">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm Kalyah McKesey, an engineering student in my third year of university.
            I love learning new things and am currently orbiting between school,
            side projects, and co-op terms.
            <br /><br />
            I have real-world software development experience in app design, Angular,
            Microsoft apps, and Googling error messages at light speed.
            <br /><br />
            When I'm not coding, I'm probably redesigning something that didn't
            ask to be redesigned, or discussing the effects of entering a
            black hole with my friends.
            <br /><br />
          </p>

        </div>
        <div className="location-pill">
          <img src={mapPin} alt="Location Icon" className="location-icon" />
          <span>Ontario, Canada</span>
        </div>

      </FadeInSection>

    </section>
  );
}
