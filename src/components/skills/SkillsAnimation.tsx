import Skills from "../skills/Skills";

export default function SkillsAnimation() {
  return (
    <div className="skills-marquee-container">
      <div className="marquee-row">
        <div className="marquee layer1">
          <div className="marquee-inner">
            <Skills skillGroup="group1" />
            <Skills skillGroup="group1" />
            <Skills skillGroup="group1" />
          </div>

          <div className="marquee-inner">
            <Skills skillGroup="group1" />
            <Skills skillGroup="group1" />
            <Skills skillGroup="group1" />
          </div>
        </div>
      </div>

      <div className="marquee-row">
        <div className="marquee layer2">
          <div className="marquee-inner">
            <Skills skillGroup="group2" />
            <Skills skillGroup="group2" />
            <Skills skillGroup="group2" />
          </div>

          <div className="marquee-inner">
            <Skills skillGroup="group2" />
            <Skills skillGroup="group2" />
            <Skills skillGroup="group2" />
          </div>
        </div>
      </div>

      <div className="marquee-row">
        <div className="marquee layer3">
          <div className="marquee-inner">
            <Skills skillGroup="group3" />
            <Skills skillGroup="group3" />
            <Skills skillGroup="group3" />
          </div>

          <div className="marquee-inner">
            <Skills skillGroup="group3" />
            <Skills skillGroup="group3" />
            <Skills skillGroup="group3" />
          </div>
        </div>
      </div>

    </div>
  );
}
