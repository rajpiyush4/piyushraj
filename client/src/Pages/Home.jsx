import React, { useRef, useEffect } from 'react'
import Projects from './Project/Projects'
import Contact from './Contact'
import Skills from './Skills'

function Home() {

  return (
    <main className='about' >
      <section className='about-container' style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <i style={{ textAlign: 'center' }}>Hello there</i>
        <div className='arrowd'>&darr;</div>
        <br />
        <div style={{ width: 'fit-content' }}>
          <div className='about-me'> I'm a passionate programmer who has been actively exploring front-end development. I've gained valuable experience in this field and have been enjoying the process of creating user interfaces and interactive web experiences and solving problems.
          </div>
        </div>
      </section>
       <Skills />
      <Projects />
      <Contact />

    </main>

  )
}

export default Home