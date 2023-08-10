import styled from 'styled-components'

const RevealContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    display: inline-block;
`

const ImageWrapper = styled.div`
    position:relative;
    width: clamp(300px, 3.5vw, 400px);
    height:400px;
    background-color:rgb(181 190 204);
    overflow: hidden;
    mix-blend-mode: multiply;
    box-shadow: 10px 6px 20px rgba(0,0,0,.15)
`
export { RevealContainer, ImageWrapper };