
import './Components.css'
import { Link } from 'react-router-dom'

function Components() {


  return (
    <div className='components'>
      <ul className='components-list'>
        <li><Link to='/components/searchTab'>Search Tab</Link></li>
        <li> <Link to='/components/car'>Car Game</Link></li>
      </ul>
    </div>
  )
}

export default Components