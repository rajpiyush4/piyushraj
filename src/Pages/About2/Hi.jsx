import React, {useEffect} from 'react'
import {RevealBox} from '../StyledElem'
import SplitType from 'split-type'
import gsap from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function Hi() {

    useEffect(() => {
        new SplitType(document.querySelectorAll('.words'))
        gsap.to('.char', {
          y: 0,
          stagger: .05,
          delay: .1,
          duration: .5,
          opacity:1,
        })
      }, [])

    return (
        <section className='hi'>
            <RevealBox>
                <div className='words'>BONJOUR!</div>
            </RevealBox>
         


        </section>
    )
}

export default Hi