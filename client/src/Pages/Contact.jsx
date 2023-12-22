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
                <li>  <span className='underline' ><a href="https://www.dropbox.com/scl/fi/9n67u2cdw2mr409za1a49/piyush.raj.pdf?rlkey=4pbmzmmad4d0zbuqtoyobz5hz&dl=0" target='_blank'>resume</a> </span> ↗</li>
           </ul>
           </div>
        </div>
        </section>
    )
}

export default Contact
