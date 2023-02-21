import React, { useRef, useEffect } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { RevealContainer } from './Components/StyledComp'

function About() {
  const introRef = useRef(null)

  useEffect(() => {

    new SplitType(document.querySelectorAll('.intro'), { wordClass: 'intro-words', types: 'words' })


    gsap.to('.intro-words', {
      y: 0,
      stagger: .05,
      delay: .1,
      duration: .5,

    })


  }, [])

  return (
    <div className='about' style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center',color:'whitesmoke', background:'#6f2089' }}>

      <section style={{ display: 'flex', flexDirection: 'column', height: '65vh' }}>
        <i style={{textAlign:'center'}}>Hello there</i>
        <br />
        <div style={{width:'fit-content'}}>
        <RevealContainer><span className='intro'> I'm <i>Piyush Raj</i>, CSE undergrad '24 </span></RevealContainer>
        <RevealContainer><span className='intro'><i></i>  Love to create and code websites with  </span></RevealContainer>
        <RevealContainer><span className='intro'><i></i>delightful and userfriendly   </span></RevealContainer>
        <RevealContainer><span className='intro'><i></i>animations</span></RevealContainer>
        </div>
      </section>

      <footer style={{ position: 'absolute', bottom: '1rem', height: '8rem', width: '100%' }}>
        <div></div>
        <div>

        </div>
      </footer>

    </div>

  )
}

export default About