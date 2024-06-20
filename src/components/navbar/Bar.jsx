import React, { useState } from 'react'
import './Bar.css'
import { assets } from '../../assets/assets'



const Bar = () => {
  const[sidebar,setSidebar]=useState(false)

const handleSidebar =()=>{
  setSidebar(!sidebar)
}
  return (
    <div className='Bar-main'>
        <nav className='Bar'>
            <h1><img src={assets.Ida} style={{width:'20px', height:'20px' }} alt="" /></h1>
            <ul>
                <li className='hideitem'>Home </li>
                <li className='hideitem'>about </li>
                <li className='hideitem'>Services </li>
                <li className='hideitem'> Clients </li>
                <li className='hideitem'> Careers </li>
                <li className='hideitem'> Contact us </li>
                <li onClick={handleSidebar} className='showitem '> <img src={assets.Menu} alt="" style={{width:'30px', height:'30px' }} /> </li>
            </ul>
        </nav>

        {/* Slidbar */}
        <nav className='sidebar' style={{ display: sidebar ? 'flex' : 'none'}}>
          {/* <h1>X</h1> */}
          
            <ul>
                <li onClick={handleSidebar}>X </li>
                <li>Home </li>
                <li>about </li>
                <li>Services </li>
                <li> Clients </li>
                <li> Careers </li>
                <li> Contact us </li>
            </ul>
        </nav>


      
    </div>
  )
}

export default Bar
