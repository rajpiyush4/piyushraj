import React, { useEffect } from 'react'
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll();

function Projects() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }, [])


  return (
    // <div className='projects'>
    <div data-scroll-container>
      
    </div>

  )
}

export default Projects