// import { useState, useEffect } from 'react'
import './Blog.css'
import { gql, useQuery } from '@apollo/client'


const GET_BLOGS = gql`
query getBlog {
  users {
    id
    name
  }
  blogs{
    id
    body
  }

}

`

function Blog() {
  const { loading, error, data } = useQuery(GET_BLOGS)

  if (loading) return <div className='Blog'>Loading...</div>;
  if (error) return <div className='Blog'>No Data!!</div>

  return (
    <div className='Blog'>
       {data.blogs.map((item, index)=>{
        return <div key={index}>{item.body} </div>
       })}
    </div>
  )
}

export default Blog