import React from "react";
import pythonLogo from "@/assets/logo-python.svg";
import reactLogo from "@/assets/react.svg";
import githubLogo from "@/assets/github.svg";
import angularLogo from "@/assets/logo-angular.svg";
import jsLogo from "@/assets/logo-javascript.svg";
import htmlLogo from "@/assets/html-logo.svg";
import cssLogo from "@/assets/css-fill.svg";
import tsLogo from "@/assets/ts-logo.svg";
import gitLogo from "@/assets/git-branch.svg";
import figmaLogo from "@/assets/figma.svg";
import designLogo from "@/assets/graphic-design.svg";
import microsoftLogo from "@/assets/microsoft-fill.svg";
import './Skills.css'

interface SkillsProps {
  skillGroup?: "group1" | "group2" | "group3" | "all";
}

const Skills: React.FC<SkillsProps> = ({ skillGroup = "all" }) => {
  const allSkills = [
    { name: "Python", logo: pythonLogo },
    { name: "React", logo: reactLogo },
    { name: "Angular", logo: angularLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "TypeScript", logo: tsLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Microsoft Apps", logo: microsoftLogo },
    { name: "Figma", logo: figmaLogo },
    { name: "UI/UX Design", logo: designLogo },
  ];

  const getSkillsForGroup = (group: string) => {
    switch (group) {
      case "group1":
        return allSkills.slice(0, 4);
      case "group2":
        return allSkills.slice(4, 8);
      case "group3":
        return allSkills.slice(8, 12);
      default:
        return allSkills;
    }
  };

  const skills = getSkillsForGroup(skillGroup);

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
