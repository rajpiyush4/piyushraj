import { useState, useEffect } from 'react'
import { ImageWrapper } from './Custom-Component/StyledComp'


function Image({container}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    function useMousePos(e) {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }


    useEffect(() => {
        container?.addEventListener('mousemove', useMousePos)

        return () => {
            container?.removeEventListener('mousemove', useMousePos)
        };
    }, [])
    return (
        <>
            <div className='imgWrapper-wrapper' style={{
                position: 'absolute',
                padding: "2rem",
                background: 'rgb(229 221 214)',
                transform: `translate(${mousePosition.x+175}px, ${mousePosition.y-650}px)`,  //remove the magic numbers
                zIndex:'1'
 
            }}>
                
                {/* https://drive.google.com/file/d/14slZMEy_lD-meGfateaIXLKVcTam88O4/view?usp=sharing */}
                <ImageWrapper>
                    <img style={{
                        objectFit:'cover',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '350px',
                        height: '600px',
                        // https://drive.google.com/file/d/1WX2SohrKjLAPRZE5kVDf-f9m6ixzNx2W/view?usp=share_link
                    }} src='https://drive.google.com/uc?export=view&id=14slZMEy_lD-meGfateaIXLKVcTam88O4' alt="" />
                </ImageWrapper>
            </div>
        </>
    )
}

export default Image