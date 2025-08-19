import React, { useState, useEffect } from 'react'
import './App.css'
import Loader from './Pages/Loader'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Components from './Pages/Components/Components'
import { CarMatter, SearchTab } from './Pages/Components'
import Blog from './Pages/Blog/Blog'

const links = [
  { to: '/', label: 'home' },
  { to: '/components', label: 'lab' },
  { to: '/blog', label: 'blog' }
];

function App() {
  const on = window.location.pathname || undefined
  const [loader, setLoader] = useState(true)
  const [underline, setUnderline] = useState(on)
  console.log(on, underline)

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
          </div>

          <ul className='nav1'>
            {links.map((link, index) => (
              <li
                key={index}
                className={`${underline === link?.to ? 'underline-fix' : ''} underline`}
                onClick={() => handleLine(link?.to)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href="/piyush_raj_25.pdf"
                download="piyush_raj.pdf"
                className="resume-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-file-user-icon lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
              </a>
            </li>
          </ul>
          <hr className='hrline' />
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components/*'>
            <Route index element={<Components />} />
            <Route path='searchTab' element={<SearchTab />} />
            <Route path='car' element={<CarMatter />} />
          </Route>
          <Route path='/blog' element={<Blog />} />

        </Routes>



        <footer style={{ position: 'fixed', bottom: '0', left: '0', background: 'whitesmoke', height: '5rem', width: '100%', borderTop: '1px solid rgba(0, 0, 0, .2) ' }}  >
          <ul className='nav2'>
            {links.map((link, index) => (
              <li
                key={index}
                className={`${underline === index ? 'underline-fix' : ''} underline`}
                onClick={() => handleLine(index)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}

            <li>
              <a
                href="/piyush_raj_25.pdf"
                download="piyush_raj.pdf"
                className="resume-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-file-user-icon lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
              </a>
            </li>
          </ul>
        </footer>


      </div>

      }
    </>)
}

export default App