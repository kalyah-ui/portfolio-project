import FadeInSection from "./fade-in-section";

const experiences = [
  { id: 1, name: "Department of National Defense",
    position: "Software Developer Co-op",
    description:  `• Worked on the dev-ops team to develop applications and tools to support the software development lifecycle of internal software products.
    • Designed and implemented a model-driven PowerApps application to streamline the process of managing software development projects, including task tracking, resource allocation, and progress monitoring, resulting in improved project visibility and team collaboration.
    • Collaborated and met with team members to gather requirements, design user interfaces, and implement applications using Microsoft Power Apps and Power Automate, enhancing internal workflows and increasing efficiency across departments.
    • Developed Power Automate flows to automate routine tasks and processes, such as data entry, notifications, and approvals, resulting in significant time savings and improved accuracy for end-users.`,
    tools: ["Microsoft Power Apps", "Microsoft Power Automate", "User Interface Design", "Dataverse", "Windows Software Development"], 
    duration: "March 2026 - Present"
  },
  {
    id: 2,
    name: "TechInsights",
    position: "Software Developer Co-op",
    description: `• Designed and worked on an internal KPI web application using Retool with Auth0 integration for secure SSO authentication, collaborating on front-end design specifications and API integration.
    • Contributed to the TechInsights web application by identifying, fixing, and testing UI/UX bugs to improve functionality and user experience.
    • Collaborated with cross-functional teams, including QA and UI/UX, to ensure reliable and user-friendly software delivery.`,
    tools: ["Angular", "TypeScript", "HTML/CSS", "Git", "Bitbucket", "Jira", "VS Code", "Retool", "Auth0"],
    duration: "May 2025 - August 2025"
  },
];

function ExperienceCard({
  experience,
}: {
  experience: {
    id: number;
    name: string;
    position: string;
    description: string;
    tools: string[];
    duration: string;
  };
}) {
  return (
    <div className="experience-container">
      <div className="experience-indicator" />
      <div className="experience-card">
      <div className="experience-content">
        <h3 className="project-title">{experience.name}</h3>
        <p className="experience-position">{experience.position}</p>
        <p className="project-description">{experience.description}</p>
        <p className="experience-duration">{experience.duration}</p>
        <div className="project-tools">
          {experience.tools.map((tool) => (
            <span key={tool} className="tool-badge">
              {tool}
            </span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default function ExperienceCatalog() {
  return (
    <div className="experience-grid">
      {experiences.map((experience) => (
        <FadeInSection key={experience.id} direction="down">
          <ExperienceCard experience={experience} />
        </FadeInSection>
      ))}
    </div>
  );
}
