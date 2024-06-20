import React from 'react'
import './Progress.css'
import { assets } from '../../assets/assets'

const Progress = () => {
  return (
    <div className='Progress-whole'>
         <div className='Progress-head'>
            <h1>Our Wroking Progress</h1>
            <p>A well-structured workflow with great design execution</p>
        </div>

        <div className="Progress-main">
            <div className="progress-text">
                <div className='text one'>
            <h1>Discussion</h1>
            <p>Under the client's business,goals and challenges for building relationship.</p>
            </div>
            <div className='text two'>
            <h1>Ideate</h1>
            <p>Gather ideas and create the first concept for the future product.</p>
            </div>
            <div className='text three'>
            <h1>Execution   </h1>
            <p>Provide the first draft of a project,accept minor and major revisions.</p>
            </div>

            </div>
            <div className='progress-image'>
                <img src={assets.team} alt="" />
            </div>
        </div>

   

    </div>
  )
}

export default Progress
