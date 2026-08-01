import { useState } from "react";

const skills = {
  languages: ['TypeScript', 'JavaScript', 'C++', 'Python', 'HTML5', 'CSS3', 'SQL'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'GSAP', 'Radix UI', 'Vite'],
  backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT', 'Passport'],
  databases: ['MongoDB', 'PostgreSQL', 'Prisma'],
  ai: ['LLM Orchestration', 'Tool Calling', 'Structured Outputs', 'Real-time Streaming', 'Prompt Engineering', 'AI SDK Integration', 'Voice AI'],
  tools: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code', 'Agile/Scrum', 'Linux'],
}

const tabLabels = {
  languages: 'languages',
  frontend: 'frontend',
  backend: 'backend',
  databases: 'databases',
  ai: 'ai eng.',
  tools: 'tools',
}

function Skills() {
  const [skillSelected, setSkillSelected] = useState('languages');
  const selected = skills[skillSelected];

  return (
    <section className="skills">
      <div className="skills-container">
        <div className="skills-menu">
          {Object.keys(skills).map(item => (
            <button
              key={item}
              type="button"
              onClick={() => setSkillSelected(item)}
              className={`menu-item ${skillSelected === item ? 'active' : ''}`}
            >
              {tabLabels[item]}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <h3>{tabLabels[skillSelected]}</h3>
          <div className="skill-tags">
            {selected.map(item => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills