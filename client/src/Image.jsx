import { useState, useEffect } from 'react'
import { ImageWrapper } from './Pages/Components/StyledComp'


function Image() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    function useMousePos(e) {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }


    useEffect(() => {
        window.addEventListener('mousemove', useMousePos)

        return () => {
            window.removeEventListener('mousemove', useMousePos)
        };
    }, [])
    return (
        <>
            <div className='imgWrapper-wrapper' style={{
                position: 'absolute',
                padding: "2rem",
                background: 'rgb(229 221 214)',
                transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 40}px)`

            }}>
                <ImageWrapper>
                    <img style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '350px',
                        height: '600px',

                        // https://drive.google.com/file/d/1WX2SohrKjLAPRZE5kVDf-f9m6ixzNx2W/view?usp=share_link
                    }} src='https://drive.google.com/uc?export=view&id=1WX2SohrKjLAPRZE5kVDf-f9m6ixzNx2W' alt="" />
                </ImageWrapper>
            </div>
        </>
    )
}

export default Image