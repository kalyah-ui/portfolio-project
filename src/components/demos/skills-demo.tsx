import Skills from "../skills";

export default function SkillsDemo() {
  return (
    <div className="skills-marquee-container">
      <div className="marquee-row">
        <div className="marquee layer1">
          <Skills skillGroup="group1" />
          <Skills skillGroup="group1" />
          <Skills skillGroup="group1" />
        </div>
      </div>
      <div className="marquee-row">
        <div className="marquee layer2">
          <Skills skillGroup="group2" />
          <Skills skillGroup="group2" />
          <Skills skillGroup="group2" />
        </div>
      </div>
      <div className="marquee-row">
        <div className="marquee layer3">
          <Skills skillGroup="group3" />
          <Skills skillGroup="group3" />
          <Skills skillGroup="group3" />\
        </div>
      </div>
    </div>
  );
}
