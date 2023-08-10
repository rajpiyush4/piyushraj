import React, { useState, useEffect } from 'react'
import './App.css'
import Loader from './Pages/Loader'
import About from './Pages/About'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Components from './Pages/Components/Components'
import { CarMatter, SearchTab } from './Pages/Components'
import Blog from './Pages/Blog/Blog'

const links = [
  { to: '/', label: 'home' },
  { to: '/components/', label: 'components' },
  { to: '/blog', label: 'blog' }
];

function App() {

  const [loader, setLoader] = useState(true)
  const [underline, setUnderline] = useState(null)

  const handleLine = (index) => {
    setUnderline(index)
  }

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
            {links.map((link, index) => (
              <li
                key={index}
                className={`${ underline === index ? 'underline-fix' : ''} underline`}
                onClick={() => handleLine(index)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <hr className='hrline' />
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path='/components/*'>
            <Route index element={<Components />} />
            <Route path='searchTab' element={<SearchTab />} />
            <Route path='car' element={<CarMatter />} />
          </Route>
          <Route path='/blog' element={<Blog />} />

        </Routes>


        <footer style={{ position: 'fixed', bottom: '0', left: '0', background: 'whitesmoke', height: '5rem', width: '100%' }}  >
          <ul className='nav2'>
          {links.map((link, index) => (
              <li
                key={index}
                className={`${ underline === index ? 'underline-fix' : ''} underline`}
                onClick={() => handleLine(index)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </footer>


      </div>

      }
    </>)
}

export default App