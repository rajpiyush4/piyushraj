import { Link } from 'react-router-dom'

function Back() {
  return (
    <div style={{width:'30px', height:'30px',display:'grid', placeContent:'center', margin:'1rem',padding:'1rem', background:"whitesmoke", borderRadius:'50%', position:'absolute'}}>
        <Link to='/components'>	&larr; </Link>
    </div>
  )
}

export default Back