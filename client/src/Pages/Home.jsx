import React, { useEffect, useRef, useState } from 'react'
import Projects from './Project/Projects'
import Contact from './Contact'
import Skills from './Skills'
import Image from './Image'

function Home() {
  const ImgContainerRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    return () => {
      setShow(false)
    }
  }, [ImgContainerRef.current])

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
            <p ref={ImgContainerRef}>
              I'm a web developer based in India. A passionate programmer. I make websites, web applications with design ideas I steal from here and there (mostly from awwwards).
            </p>
              <div className='imgWrapper3' >
                {show && <Image container={ImgContainerRef.current} />}
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