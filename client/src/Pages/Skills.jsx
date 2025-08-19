import { useState } from "react";

const skills = {
  core: ['C++', 'Javascript', 'Typescript', 'SQL', 'HTML5', 'CSS3', 'Git/Github', 'RestAPI'],
  frontend: ['React', 'Next', 'GSAP', 'Framer-motion', 'Redux-Toolkit', 'Vite', 'Tailwind'],
  backend: ['Node', 'express', 'socket', 'jwt', 'passport', 'mongodb', 'postgres'],
  tools: ['vscode', 'figma', 'adobe-illustrator', 'linux', 'github'],
}

function Skills() {
  const [skillSelected, setSkillSelected] = useState('core');
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
              {item.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <h3>{skillSelected.toLowerCase()}</h3>
          <div className="skill-tags">
            {selected.map(item => (
              <span key={item} className="tag">
                {item.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills