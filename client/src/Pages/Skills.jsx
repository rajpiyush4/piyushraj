import React from 'react'

const skills = ['javascript', 'c++', 'react', 'next','gsap','css', 'node', 'express','graphql','apollo', 'mongoDB', 'git', 'github']

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