import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section id='Home' className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That inspire</h2>
            <p>
                Pasionate Frontend Devlopper | transfom Ideas
                 into sameless and visually stunnig Web solutions
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                <img src="logos/logo192.png" alt=""/>
                </div>
                <img  src='' alt=''/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img  src='logos/html.png' alt=''/>
                </div>
                <div className='tech-icon'>
                    <img  src='logos/css.png' alt=''/>
                </div>
                <div className='tech-icon'>
                    <img  src='logos/js1.svg' alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero