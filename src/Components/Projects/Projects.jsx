import React, { useRef } from 'react'
import './Projects.css'
import { PROJECTS } from '../../utils/data'
import ProjectsCardA from './ProjectsCardA/ProjectsCardA'
import Slider from "react-slick"

const Projects = () => {
    const slideRef = useRef()
    const sittings = {
        dots:false,
        infinit:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                sittings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    }
 const slideRight = () =>{
    slideRef.current.slickNext()
 }

 const slideLeft = () =>{
    slideRef.current.slickPrev()
 }
  return (
    <section id='Projects' className='project-container'>
        <h5>Projects</h5>

        <div className='project-content'>
             
                <div className='arrow-right' onClick={slideRight}>
                    <span className='material-symbols-outlined'>chevron_right</span>
                </div>

                <div className='arrow-left' onClick={slideLeft}>
                    <span className='material-symbols-outlined'>chevron_left</span>
                </div>
            
            <Slider ref={slideRef} {...sittings}>
            {PROJECTS.map((item)=>(
                <ProjectsCardA key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default Projects
