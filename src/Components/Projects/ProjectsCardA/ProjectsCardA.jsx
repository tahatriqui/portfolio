import React from 'react'
import "./ProjectsCardA.css"

const ProjectsCardA = ({details}) => {
  const [check ,setChek] = React.useState(true)
  return (
    <div className='project-card'>
        <h6>{details.title}</h6>
        <img src={details.img} alt="" />
        <h4 >Description : </h4>
        <div className='description'>{check?details.description?.slice(0,60):details.description}<button className='see-more' onClick={()=>{setChek(prev=>!prev)}} >{check?"...read more":" see less"}</button></div>
        <button className='visit'><a  target="_blank" href={details.link}> Visit the project </a></button>
        
    </div>
  )
}

export default ProjectsCardA