import React, {useEffect} from 'react'
import {RevealBox} from '../StyledElem'
import SplitType from 'split-type'
import gsap, { Power3 } from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function Start() {

    useEffect(() => {
        new SplitType(document.querySelectorAll('.words'))
        gsap.to('.char', {
          y: 0,
          stagger: .05,
          delay: .1,
          duration: .3,
          opacity:1
        //   ease: Power3.easeInOut
        })
      }, [])

    return (
        <section className='start'>
            <RevealBox>
                <div className='words'>So this is where i</div>
            </RevealBox>
            <RevealBox>

                <div className='words'> will tell you about something, what</div>
            </RevealBox>
            <RevealBox>
                <div className='words'> ...I don't know yet  </div>
            </RevealBox>
            <RevealBox>
                <div className='words'> But I like these words popping on the screen so....  </div>
            </RevealBox>


        </section>
    )
}

export default Start