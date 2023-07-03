import React, {useEffect} from 'react'
import {RevealBox} from '../StyledElem'
import SplitType from 'split-type'
import gsap, { Power3 } from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function Part1() {

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
        <section className='part1'>
            <RevealBox>
                <div className='words'>Let's keep them popping!</div>
            </RevealBox>

        </section>
    )
}

export default Part1