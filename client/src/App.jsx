import React, { useState, useEffect } from 'react'
import './App.css'
import Loader from './Pages/Loader'
import About from './Pages/About'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About2 from './Pages/About2/About2'
import Blog from './Pages/Blog/Blog'
// import Image from './Image'

function App() {

  console.log("app")

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
            <div className='imgWrapper3' style={{ width: '50%', transform: 'scale(.5, .5)' }}>
              {/* <Image /> */}
            </div>
          </div>

          <ul className='nav1'>
            <li className='underline'>
              <Link to='/'>home</Link>
            </li>
            <li className='underline'>
              <Link to='/about'>about</Link>
            </li>
            <li className='underline'>
              <Link to='/components'>components</Link>
            </li>
            <li className='underline'>
              <Link to='/blog'>blog</Link>
            </li>
          </ul>
          <hr className='hrline' />
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/components' element={<About2 />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>


        <footer style={{ position: 'fixed', bottom: '0', left: '0', background: 'whitesmoke', height: '5rem', width: '100%' }}  >
          <ul className='nav2'>
            <li className='underline'>
              <Link to='/'>home</Link>
            </li>
            <li className='underline'>
              <Link to='/about'>about</Link>
            </li>
            <li className='underline'>
              <Link to='/about2'>components</Link>
            </li>
            <li className='underline'>
              <Link to='/blog'>blog</Link>
            </li>
          </ul>
        </footer>


      </div>

      }
    </>)
}

export default App