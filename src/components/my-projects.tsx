import FadeInSection from "./fade-in-section";

const projects = [
  { id: 1, name: "Portfolio", description: "A responsive portfolio website built with React and TypeScript.", tools: ["React", "TypeScript", "HTML", "CSS", "Figma"] },
  { id: 2, name: "Temperature & Humidity Sensor", description: "A simple sensor that uses a Raspberry Pi for monitoring environmental conditions.", tools: ["Raspberry Pi", "Android Studio"] },
  { id: 3, name: "Password Security Checker", description: "A program that uses a cracked password database to evaluate the strength of passwords.", tools: ["Python", "Java"] },
];

function ProjectCard({ project }: { project: { id: number; name: string; description: string; tools: string[] } }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tools">
        {project.tools.map((tool) => (
          <span key={tool} className="tool-badge">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCatalog() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <FadeInSection key={project.id} direction="down">
          <ProjectCard project={project} />
        </FadeInSection>
      ))}
    </div>

  );
}
