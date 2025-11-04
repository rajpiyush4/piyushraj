import './Project.css'


let projects = [
  {
    id: "1",
    name: "The soul project",
    description: "Mixed natural sound environment.",
    tech: "html, css , vanilla js, html5 canvas",
    img: 'sound.jpg',
    link: "https://sound-env.vercel.app",
    git: 'https://github.com/rajpiyush4/sound-env'
  },
  {
    id: "2",
    name: "The WeMatched! ",
    description: "Dating web app landing page",
    img: "wematched.jpg",
    tech: "react.js, framer-motion, css",
    link: 'https://wematched.vercel.app',
    git: "https://github.com/rajpiyush4/WeMatched-landingpage"

  },
  {
    id: "3",
    name: 'gratify',
    description: "Share your daily moments of thankfulness",
    tech: "nextjs, typescript, tailwind, mongodb, next-auth",
    img: 'gratify.png',
    // link: '',
    git: "https://github.com/rajpiyush4/gratify"
  },
  {
    id: "4",
    name: "The css-position project",
    description: "A project that helps you to visualise and understand css position",
    tech: "html, css, vanilla js",
    img: 'position.jpg',
    link: "https://css-position.vercel.app",
    git: 'https://github.com/rajpiyush4/cssPositionVis'
  },
  {
    id: "5",
    name: "Rick and Morty",
    description: "Used Deboucing to optimise network load",
    tech: "react.js, tailwind, rest-api, typescript",
    img: "rickandmorty.jpeg",
    link: "https://rickmorty-pied.vercel.app/",
    git: 'https://github.com/rajpiyush4/rickandmorty'
  },
  {
    id: "6",
    name: "Insight Dashboard",
    description: "Dynamically added data from spreadsheet and made charts",
    tech: "react.js, tailwind, typescript, xlsx lib",
    img: "insight-dashboard.jpeg",
    link: "https://innsight-iota.vercel.app",
    git: "https://github.com/rajpiyush4/insight-dashboard"
  },
  {
    id: '7',
    name: 'e-commerce',
    description: "simple ui clone",
    tech: 'nextjs, typescript, tailwind api',
    img: "commerce.jpeg",
    link: "https://aecommerce.vercel.app/",
    git: "https://github.com/rajpiyush4/e-commerce"

  },
  // {
  //   id: "8",
  //   name: ""
  // }


]

function Projects() {

  return (<section className="Projects">
    <div className="section-title">Projects</div>

    {projects.map((item, i) => (
      <div key={i} className="project">
        <div className="project-img">
          <img src={item?.img} alt="project" />
        </div>

        <h3 className="project-title">{item?.name}</h3>
        <p className="project-desc">{item?.description}</p>
        <p className="project-tech">{item?.tech}</p>

        <div className="project-links">
          <a href={item?.link} target="_blank" rel="noreferrer">link</a>
          <a href={item?.git} target="_blank" rel="noreferrer">github</a>
        </div>
      </div>
    ))}
  </section>

  )
}

export default Projects;
