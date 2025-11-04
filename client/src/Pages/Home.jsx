import { useRef } from 'react'
import Projects from './Project/Projects'
import Contact from './Contact'
import Skills from './Skills'
import Image from './Image'

function Home() {
  const imgContainerRef = useRef(null)

  return (
    <main className='about' >
      <section className='about-container'
        style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <i className='hello' style={{ textAlign: 'center' }}>Hello there</i>
        <div className='arrowd'>&darr;</div>
        <br />
        <div className='about-me'>
          <p ref={imgContainerRef}>
            I’m a web developer from India who loves bringing ideas to life on the web. A curious programmer at heart, I build websites and web apps with a blend of code, creativity, and a little design inspiration I shamelessly ‘borrow’ (okay fine, steal) from places like Awwwards            </p>
          <div className='imgWrapper3' >
            <Image ref={imgContainerRef} />
          </div>

        </div>
      </section>
      <Projects />
      <Skills />
      <Contact />

    </main>

  )
}

export default Home