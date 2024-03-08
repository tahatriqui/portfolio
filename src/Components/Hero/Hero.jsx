import React from 'react'
import "./Hero.css"
import js from './logos/js1.svg'
import css from './logos/css.png'
import html from './logos/html.png'
import react from './logos/logo192.png'
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
                <img src={react} alt=""/>
                </div>
                <img  src='taha.png' alt=''/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img  src={html} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img  src={css} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img  src={js} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero