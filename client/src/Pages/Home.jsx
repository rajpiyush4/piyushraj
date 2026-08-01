import { useRef } from 'react'
import Projects from './Project/Projects'
import Contact from './Contact'
import Skills from './Skills'
import Image from './Image'
import Experience from './Experience'
import Education from './Education'

function Home() {
  const imgContainerRef = useRef(null)

  return (
    <main className='about'>
      <section className='about-container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <i className='hello' style={{ textAlign: 'center' }}>Hello there 👋</i>
        <div className='arrowd'>&darr;</div>

        <div className='about-me'>
          <h1 className='hero-name'>Piyush Raj</h1>
          <p className='hero-role'>Software Engineer &middot; AI & Real-time Systems</p>
          <p ref={imgContainerRef} className='hero-bio'>
            I'm a web developer from India who loves bringing ideas to life on the web. A curious programmer at heart, I build websites and web apps with a blend of code, creativity, and a little design inspiration I shamelessly 'borrow' (okay fine, steal) from places like Awwwards.
          </p>
          {/* <div className='hero-cta'>
            <a href="#projects" className='cta-btn'>View my work</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=piyushraj.me4@gmail.com" target="_blank" rel="noreferrer" className='cta-btn cta-btn--outline'>Get in touch</a>
          </div> */}
          <div className='imgWrapper3'>
            <Image ref={imgContainerRef} />
          </div>
        </div>
      </section>

      <section id="projects">
        <Projects />
      </section>
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
}

export default Home