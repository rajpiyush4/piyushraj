import React, { useEffect } from 'react'
import './Project.css'


let projects = [
  {
    id: "1",
    name: "The soul project",
    description: "Mixed natural sound environment.",
    tech: "html, css , vanilla js, html5 canvas",
    img: 'sound.jpg',
    link: "https://sound-env.vercel.app",
    git:'https://github.com/rajpiyush4/sound-env'
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
    name: "The css-position project",
    description: "A project that helps you to visualise and understand css position",
    tech: "html, css, vanilla js",
    img: 'position.jpg',
    link:"https://css-position.vercel.app",
    git:'https://github.com/rajpiyush4/cssPositionVis'
  },
  {
    id: "4",
    name: "Rick and Morty",
    description: "Used Deboucing to optimise network load",
    tech: "react.js, tailwind, rest-api, typescript",
    img: "rickandmorty.jpeg",
    link: "https://rickmorty-pied.vercel.app/",
    git:'https://github.com/rajpiyush4/rickandmorty'
  },
  {
    id: "5",
    name: "Insight Dashboard",
    description: "Dynamically added data from spreadsheet and made charts",
    tech: "react.js, tailwind, typescript, xlsx lib",
    img: "insight-dashboard.jpeg", 
    link: "https://innsight-iota.vercel.app",
    git: "https://github.com/rajpiyush4/insight-dashboard"
  },
  {
    id: '6',
    name: 'e-commerce',
    description:"simple ui clone",
    tech: 'nextjs, typescript, tailwind api',
    img:"commerce.jpeg",
    link: "https://aecommerce.vercel.app/",
    git: "https://github.com/rajpiyush4/e-commerce"

  },
  {
    id: "7",
    name: 'gratify',
    description: "Share your daily moments of thankfulness", 
    tech: "nextjs, typescript, tailwind, mongodb, next-auth",
    img:'gratify.png',
    link: '',
    git: "https://github.com/rajpiyush4/gratify"
  },
  // {
  //   id: "8",
  //   name: ""
  // }
  

]


function Projects() {

  return (
    <section className='Projects' >
      <div style={{position:'absolute', textAlign:'center', display:'block', width:'100%', fontWeight:'700', top:"2rem"}}>Projects</div>

      {projects.map((item, i) => {
        return (
          <div key={i} className='project'>
            <div className='project-img'>
              <img src={item?.img} alt="project" />
            </div>
            <h3 style={{ color:'rgba(0,0,0,.7)', fontWeight:'800'}}>{item?.name}</h3>
       
            <p style={{wordBreak: 'break-word'}}>{item?.description}</p>
            <p>{item?.tech}</p>

            <div style={{padding:'.3rem', fontWeight:'800'}}>

              <a href={item?.link} style={{marginRight:'.5rem', cursor:'pointer'}} target='_blank'>link </a>
              <a href={item?.github} style={{cursor:'pointer'}}  target='_blank'>github </a>
              </div>

          </div>
        )
      })}
    </section>


  )
}

export default Projects
