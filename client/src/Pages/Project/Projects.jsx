import React, { useEffect } from 'react'
import './Project.css'


let projects = [
  {
    id: "1",
    name: "The soul project",
    description: "A project to help the soul",
    tech: "html, css , vanilla js, html5 canvas",
    img: 'src/assets/soul.jpeg',
    link: "https://github.com/rajpiyush4/sound-env"
  },
  {
    id: "2",
    name: "The WeMatched! project",
    description: "A project (a dating website) that helps you to find your match: (worked as ui engineer)",
    img: "src/assets/wematched.jpeg",
    tech: "react.js, node.js, express.js, socket.io, mongodb, google-auth"
  },
  {
    id: "3",
    name: "The css-position project",
    description: "A project that helps you to visualise and understand css position",
    tech: "html, css, vanilla js",
    img: 'src/assets/cssPositionViz.png',
    link:"https://github.com/rajpiyush4/cssPositionVis"
  },
  {
    id: "4",
    name: "this portfolio",
    description: "to help me in my branding and to show my work",
    tech: "react.js, gsap, graphql, apollo-server, mongodb",
    img: "src/assets/pf.jpeg",
    link: "https://github.com/rajpiyush4/piyushraj"
  }

]


function Projects() {

  return (
    <section className='Projects' >

      {projects.map((item, i) => {
        return (
          <div key={i} className='project'>
            <div className='project-img'>
              <img src={item.img} alt="project" />
            </div>
            <h3 style={{cursor:'pointer', color:'rgba(0,0,0,.8)'}}><a href={item.link} target='_blank'>{item.name} ↗</a></h3>
            <p>{item.description}</p>
            <p>{item.tech}</p>

          </div>
        )
      })}
    </section>


  )
}

export default Projects