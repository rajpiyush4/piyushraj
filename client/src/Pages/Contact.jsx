import React from 'react'

function Contact() {
    return (
        <section className='contact'>

            <div className='connect'>
                <span></span>
                <div className='email'><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=piyushraj.me4@gmail.com" target="_blank">Send an email </a>
                </div>
            </div>

             <div className='socials-container'>
            <h3>socials:</h3>
            <div className='socials'>
           <ul>
                <li> <span className='underline'> <a href="https://www.linkedin.com/in/piyush-raj-4469671a7" target='_blank'>linkedin</a> </span> ↗</li> 
                <li> <span className='underline'><a href="https://twitter.com/piyushr001" target='_blank'>twitter</a> </span> ↗</li>
                <li>  <span className='underline' ><a href="https://github.com/rajpiyush4" target='_blank'>github</a> </span> ↗</li>
                <li>  <span className='underline' ><a href="https://www.dropbox.com/scl/fi/9dz1xxh13fd59lr63562a/Resume-1.pdf?rlkey=dp9zb5p9d2frnsovm2m22po12&dl=0" target='_blank'>resume</a> </span> ↗</li>
           </ul>
           </div>
        </div>
        </section>
    )
}

export default Contact
