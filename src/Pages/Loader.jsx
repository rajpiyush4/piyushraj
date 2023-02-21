import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
// import { RevealContainer } from './Components/StyledComp.jsx'

function Loader() {
    const splitRef1 = useRef(null)
    const splitRef2 = useRef(null)

    useEffect(() => {

        new SplitType(splitRef1.current, { charClass: 'im' })
        new SplitType(splitRef2.current)


        gsap.to('.char', {
            y: -7,
            stagger: .05,
            delay: .2,
            duration: .5,
            opacity: 1

        })

        setTimeout(() => {
            gsap.to('.char ', {
                y: -100,
                stagger: .05,
                delay: .3,
                duration: .4,
                opacity: 1

            })
            gsap.to('.im ', {
                y: -100,
                stagger: .05,
                delay: .3,
                duration: .5,
                opacity: 1

            })

        }, 1300);


    }, [])

    return (
        <div className='loader'>
            <div className='loader-container'>
                <div className='loader-animation-container'>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}><span style={{ fontFamily: '"Newsreader", serif', marginRight: '1.5rem', fontWeight: '600', fontSize: '5rem', color: '#6f2089' }} ref={splitRef1}><i>I'm</i> </span><span ref={splitRef2} style={{ fontSize: '2.5rem', fontFamily: '"Newsreader", serif', color: 'whitesmoke', fontWeight: '900' }}>Batman?</span></div>
                </div>
            </div>
        </div>
    )
}

export default Loader