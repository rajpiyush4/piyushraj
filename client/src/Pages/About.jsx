import React, { useRef, useEffect } from 'react'
// import SplitType from 'split-type'
// import gsap from 'gsap'
// import { RevealContainer } from './Components/StyledComp'
import Projects from './Project/Projects'

function About() {
  // const introRef = useRef(null)

  // useEffect(() => {

  //   new SplitType(document.querySelectorAll('.intro'), { wordClass: 'intro-words', types: 'words' })

  //   gsap.to('.intro-words', {
  //     y: 0,
  //     stagger: .05,
  //     delay: .1,
  //     duration: .5,

  //   })


  // }, [])

  return (
    <main className='about' >
      <section className='about-container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <i style={{ textAlign: 'center' }}>Hello there</i>
        <div className='arrowd'>&darr;</div>
        <br />
        <div style={{ width: 'fit-content' }}>
          <div className='about-me'> I'm a passionate programmer who has been actively exploring front-end development. I've gained valuable experience in this field and have been enjoying the process of creating user interfaces and interactive web experiences and solving problems.
          </div>
        </div>
      </section>

      <Projects />


    </main>

  )
}

export default About