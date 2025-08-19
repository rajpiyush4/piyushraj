
import './Components.css'
import { Link } from 'react-router-dom'

function Components() {


  return (
    <section className="components">
      <h2 className="components-title">Components</h2>
      <ul className="components-list">
        <li>
          <Link to="/components/searchTab" className="component-card">
            <span className="component-name">Search Tab</span>
          </Link>
        </li>
        <li>
          <Link to="/components/car" className="component-card">
            <span className="component-name">Car Game</span>
          </Link>
        </li>
      </ul>
    </section>

  )
}

export default Components