import { useState, useEffect } from 'react'
import './App.css'
import Loader from './Pages/Loader'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Components from './Pages/Components/Components'
import { CarMatter } from './Pages/Components'

const links = [
  { to: '/', label: 'home' },
  { to: '/components', label: 'lab' },
];

function App() {
  const location = useLocation()
  const [loader, setLoader] = useState(true)
  const [underline, setUnderline] = useState(location.pathname)

  const handleLine = (path) => {
    setUnderline(path)
  }

  useEffect(() => {
    setUnderline(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  return (
    <>
      {loader ? <Loader /> : <div className='App'>
        <nav>
          <div className='logo'>piyushraj</div>

          <ul className='nav1'>
            {links.map((link) => (
              <li
                key={link.to}
                className={`${underline === link.to ? 'underline-fix' : ''} underline`}
                onClick={() => handleLine(link.to)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href="/piyush_raj_25.pdf"
                download="piyush_raj_25.pdf"
                className="resume-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
              </a>
            </li>
          </ul>
          <hr className='hrline' />
        </nav>

        <AnimatedRoutes />

        <footer style={{ position: 'fixed', bottom: '0', left: '0', background: 'whitesmoke', height: '5rem', width: '100%', borderTop: '1px solid rgba(0, 0, 0, .2)' }}>
          <ul className='nav2'>
            {links.map((link) => (
              <li
                key={link.to}
                className={`${underline === link.to ? 'underline-fix' : ''} underline`}
                onClick={() => handleLine(link.to)}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href="/piyush_raj_25.pdf"
                download="piyush_raj_25.pdf"
                className="resume-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
              </a>
            </li>
          </ul>
        </footer>

      </div>

      }
    </>)
}


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="fade-container" key={location.pathname}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components/*'>
          <Route index element={<Components />} />
          <Route path='car' element={<CarMatter />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;