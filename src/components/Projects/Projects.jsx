import React from 'react'
import './Projects.css'
import { assets } from '../../assets/assets'

const Projects = () => {

    const projects =[
        {image:assets.cpu, name :'game development'},
        {image:assets.Pgame,name:'Game Development'},
        {image:assets.Pthree,name:"2d and 3d development"},
        {image:assets.PthreeD,name:'3d development'},
        {image:assets.Pui,name:'UI/UX Development'},
        {image:assets.Pvfx,name:'VFX services'},
        {image:assets.Pvideo,name:'Video Editing'},
        {image:assets.PShock,name:'Shock'},
        {image:assets.Pcg,name:'CG works'},
        {image:assets.Pmotion,name:'Motion Works'},
        {image:assets.Pacadamic,name:'Acadamic works'},
        {image:assets.Pvr,name:'VR games '}

    ]


  return (
    <div className='Project-whole'>
        <div className='project-head'>
            <h1>Our Services</h1>
            <p>Reinvent your industry with our industrial solutions</p>
        </div>

        <div  className="project-items">
        {projects.map((x,index)=>(
            <div key={index}  className="project-item">
                <img src={x.image} alt="" />
                <p>{x.name}</p>
            </div>
         ))}

        </div>
       
      
    </div>
  )
}

export default Projects
