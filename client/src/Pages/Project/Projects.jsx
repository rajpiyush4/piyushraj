import './Project.css'

let projects = [
  {
    id: "0",
    name: "Voxa — Voice AI Assistant",
    description: "Real-time voice-first AI assistant. Modular STT/TTS pipelines, Groq LLM with dynamic tool calling (weather, stocks, math, search), live audio visualizer, multi-session history & transcript export.",
    tech: "next.js 14, typescript, groq ai, smallest.ai, framer motion, zustand, radix ui",
    img: 'voxa.png',
    link: "https://voxa-beta.vercel.app",
    git: "https://github.com/rajpiyush4/Voxa"
  },
  {
    id: "1",
    name: "The soul project",
    description: "Mixed natural sound environment — ambient soundscapes layered on an HTML5 canvas.",
    tech: "html, css, vanilla js, html5 canvas",
    img: 'sound.jpg',
    link: "https://sound-env.vercel.app",
    git: 'https://github.com/rajpiyush4/sound-env'
  },
  {
    id: "2",
    name: "WeMatched!",
    description: "Dating web app landing page — smooth animations and scroll-driven storytelling.",
    img: "wematched.jpg",
    tech: "react.js, framer motion, css",
    link: 'https://wematched.vercel.app',
    git: "https://github.com/rajpiyush4/WeMatched-landingpage"
  },
  {
    id: "3",
    name: 'Gratify',
    description: "Mindfulness journaling app with streak tracking and accessibility through text and voice input support.",
    tech: "next.js, typescript, tailwind, mongodb, next-auth",
    img: 'gratify.png',
    git: "https://github.com/rajpiyush4/gratify"
  },
  {
    id: "4",
    name: "CSS Position Visualiser",
    description: "Interactive tool that helps you visualise and understand CSS position — built to scratch my own itch while learning.",
    tech: "html, css, vanilla js",
    img: 'position.jpg',
    link: "https://css-position.vercel.app",
    git: 'https://github.com/rajpiyush4/cssPositionVis'
  },
  {
    id: "5",
    name: "Rick and Morty",
    description: "Character browser with debounced search to keep API calls sane. Classic side project, classic show.",
    tech: "react.js, tailwind, rest api, typescript",
    img: "rickandmorty.jpeg",
    link: "https://rickmorty-pied.vercel.app/",
    git: 'https://github.com/rajpiyush4/rickandmorty'
  },
  {
    id: "6",
    name: "Insight Dashboard",
    description: "Upload a spreadsheet and watch it turn into interactive charts. Dynamic data ingestion with xlsx.",
    tech: "react.js, tailwind, typescript, xlsx",
    img: "insight-dashboard.jpeg",
    link: "https://innsight-iota.vercel.app",
    git: "https://github.com/rajpiyush4/insight-dashboard"
  },
  {
    id: '7',
    name: 'E-commerce UI',
    description: "Clean e-commerce UI clone — an exercise in layout, component structure, and type safety.",
    tech: 'next.js, typescript, tailwind',
    img: "commerce.jpeg",
    link: "https://aecommerce.vercel.app/",
    git: "https://github.com/rajpiyush4/e-commerce"
  },
]

function Projects() {
  return (<section className="Projects" id="projects">
    <div className="section-title">Projects</div>

    {projects.map((item, i) => (
      <div key={item.id} className="project">
        <div className="project-img">
          <img src={item?.img} alt={item?.name} />
        </div>

        <h3 className="project-title">{item?.name}</h3>
        <p className="project-desc">{item?.description}</p>
        <p className="project-tech">{item?.tech}</p>

        <div className="project-links">
          {item?.link && <a href={item?.link} target="_blank" rel="noreferrer">live ↗</a>}
          <a href={item?.git} target="_blank" rel="noreferrer">github ↗</a>
        </div>
      </div>
    ))}
  </section>)
}

export default Projects;
