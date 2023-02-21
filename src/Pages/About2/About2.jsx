import React, {useEffect} from 'react'
import {Hi, Start, Part1} from './index'
import Multisteppages from '../Multisteppages'
import './About2.css'

function About2() {
  const {next, back, page, length, current} = Multisteppages([<Hi/>,<Start/>, <Part1/> ])

  useEffect(() => {
    window.addEventListener('wheel', detectScroll)
    return () => {
       window.removeEventListener('wheel', detectScroll)
    }
  }, [])
  
  function detectScroll(e) {
    if (e.deltaY > 0) {
      window.removeEventListener('wheel', detectScroll)
      next()
      setTimeout(() => {
        window.addEventListener('wheel', detectScroll)
      }, 2000);
    }

    if (e.deltaY < 0) {
      window.removeEventListener('wheel', detectScroll)
      back()
      setTimeout(() => {
        window.addEventListener('wheel', detectScroll)
      }, 2000);
    }
  }


  return (
    <div className='about2'>
     {page}
     {/* <button style={{position:'absolute',top:'0'}} onClick={next}>next</button>
     <button style={{position:'absolute',top:'2rem'}}  onClick={back}>back</button> */}
    </div>
  )
}

export default About2