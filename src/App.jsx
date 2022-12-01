import React, { useState, useEffect} from 'react'
import './App.css'
import Loader from './Pages/Loader'
import About from './Pages/About'
import { Routes, Route, Link } from 'react-router-dom'
import { ImageWrapper } from './Pages/Components/StyledComp'
import Home from './Pages/Home'
import Projects from './Pages/Projects'



function App() {
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

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {
      setLoader(false)
    }, 3500);
  }, [])

  return (
    <>
      {loader ? <Loader /> : <div className='App'>

        <nav>

          <div className='logo'>piyushraj
            <div className='imgWrapper3' style={{ width: '50%',transform:'scale(.5, .5)' }}>
              <div className='imgWrapper-wrapper' style={{
                position: 'absolute',
                padding: "2rem",
                background: 'rgb(229 221 214)',
                zIndex:'-1',
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


                  }} src='./src\assets\me.jpeg' alt="" />
                </ImageWrapper>
              </div>

            </div>
            </div>
          <ul>
            <li className='underline'>
              <Link to='/'>Home</Link>
            </li>
            <li className='underline'>
              <Link to='/about'>About</Link>
            </li>
            <li className='underline'>
              <Link to='/project'>Project</Link>
            </li>
          </ul>
        <hr className='hrline'  />
        </nav>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Projects />} />
        </Routes>




      </div>

      }

    </>)
}

export default App
