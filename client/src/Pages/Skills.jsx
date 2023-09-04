import React from 'react'

const skills = ['javascript', 'canvas', 'c++', 'oops', 'react', 'next','gsap', 'tailwind','css', 'node', 'express','graphql','apollo', 'mongoDB', 'rest-api', 'git', 'github']

function Skills() {
  return (
    <section className='skills'>
        <div className='skills-container' >
         {skills.map((skill, i) => {
            return(
                <span key={i} className='skill'>{skill}</span>
            )
         })}
</div>
    </section>
  )
}

export default Skills