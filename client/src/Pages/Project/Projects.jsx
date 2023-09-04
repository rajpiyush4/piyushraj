import React, { useEffect } from 'react'
import './Project.css'


let projects = [
  {
    id: "1",
    name: "The soul project",
    description: "A project to help the soul",
    tech: "html, css , vanilla js, html5 canvas",
    img: 'https://drive.google.com/uc?export=view&id=15LF0VBioAtpDuBE9s3zi21fe4kKdHs9K',
    link: "https://sound-env.vercel.app",
    git:'https://github.com/rajpiyush4/sound-env'
  },
  {
    id: "2",
    name: "The WeMatched! ",
    description: "Dating web app landing page",
    img: "https://drive.google.com/uc?export=view&id=15Ekwu46a_P3f8b5-PdND6MvFakl7JCS1",
    tech: "react.js, framer-motion, css",
    link: 'https://wematched.vercel.app', 
    git: "https://github.com/rajpiyush4/WeMatched-landingpage"
   
  },
  {
    id: "3",
    name: "The css-position project",
    description: "A project that helps you to visualise and understand css position",
    tech: "html, css, vanilla js",
    img: 'https://drive.google.com/uc?export=view&id=15LOib76U6xpNbhxU97g3bwpOjECDcmuM',
    link:"https://css-position.vercel.app",
    git:'https://github.com/rajpiyush4/cssPositionVis'
  },
  {
    id: "4",
    name: "Rick and Morty",
    description: "Used Deboucing to optimise network load",
    tech: "react.js, tailwind, rest-api, typescript",
    img: "https://drive.google.com/uc?export=view&id=179ba8vCJ9_IxX2C1OFMxb-FEXVXWVV2M",
    link: "https://rickmorty-pied.vercel.app/",
    git:'https://github.com/rajpiyush4/rickandmorty'
  },
   {
    id: "5",
    name: "The WeMatched! project",
    description: "A project (a dating website) that helps you to find your match: (worked as ui engineer)",
    img: "https://drive.google.com/uc?export=view&id=15Ekwu46a_P3f8b5-PdND6MvFakl7JCS1",
    tech: "react.js, node.js, express.js, socket.io, mongodb, google-auth",
    link:'',
    github:''

  }


]


function Projects() {

  return (
    <section className='Projects' >
      <div style={{position:'absolute', textAlign:'center', display:'block', width:'100%', fontWeight:'700'}}>Projects</div>

      {projects.map((item, i) => {
        return (
          <div key={i} className='project'>
            <div className='project-img'>
              <img src={item.img} alt="project" />
            </div>
            <h3 style={{ color:'rgba(0,0,0,.7)', fontWeight:'800'}}>{item.name}</h3>
       
            <p>{item.description}</p>
            <p>{item.tech}</p>

            <div style={{padding:'.3rem', fontWeight:'800'}}>

              <a href={item.link} style={{marginRight:'.5rem', cursor:'pointer'}} target='_blank'>link </a>
              <a href={item.github} style={{cursor:'pointer'}}  target='_blank'>github </a>
              </div>

          </div>
        )
      })}
    </section>


  )
}

export default Projects