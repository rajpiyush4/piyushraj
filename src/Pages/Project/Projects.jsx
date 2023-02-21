import React, { useEffect } from 'react'
import gsap from 'gsap'
import './Project.css'


let project = [
  {
    id: 1,
    title: 'Soul',
    img: 'src\assets\soul.jpeg',
  },
  {
    id: 2,
    title: 'Go For Everything',
    img: 'src\assets\goforeverything.png',
  },
  {
    id: 3,
    title: 'Portfolio',
    img: 'src\assets\portfolio1.jpeg',
  },
  {
    id: 4,
    title: 'cssPosition',
    img: 'src\assets\cssPositionViz.png',
  }
]

function Projects() {

  useEffect(() => {

    const projectWrapper = gsap.utils.toArray('.project-wrapper');
    projectWrapper.forEach(box => {
      gsap.to(box, {
        // x: 300,
        scrollTrigger: {
          trigger: box,
          start: 'center 100%',
          // scrub: true
        },
        duration: .3,
        clipPath: 'inset(0 0 0 0)',
      
      })
    });

  })


  return (
    <div className='Project' >

      {/* <div className='project-container'  > */}

        {/* {
        project.map((item) => {
          console.log()
          return (
            <div className='project-container project-wrapper project-wrapper2' key={item.id}>
              <img src={item.img} alt="project" />
            </div>
            )
        })
        } */}
            

      <div className=' project-wrapper project-wrapper1'>

        <img src="src\assets\soul.jpeg" alt="" />
      </div> 
      {/* <div className='project1-content'>
          <h1>Project 1</h1>
        </div> */}

      <div className='project-container project-wrapper project-wrapper2'>

        <img src="src\assets\goforeverything.png" alt="" />
      </div>
      <div className='project-container project-wrapper project-wrapper3'>

        <img src="src\assets\portfolio1.jpeg" alt="" />
      </div>

    </div>


  )
}

export default Projects