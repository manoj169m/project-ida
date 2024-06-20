import React from 'react'
import './Services.css'
import { assets } from '../../assets/assets'
const Services = () => {

    




  return (
    <div className='services-whole'>
        <div className='services-head'>
        <h1>Our Projects</h1>
        <p>Have a sneak peak at the Arts we Crafted</p>


        </div>
        <div className='service-items'>
            <div className='service-item'>
                <img src={assets.shoot} alt="" />
               <h1> Precision Strike  </h1>
            </div>

            <div className='service-item two'>
                <img src={assets.car} alt="" />
               <h1>Turbo Thurst </h1>
            </div>

            <div className='service-item'>
                <img src={assets.expo} alt="" />
               <h1> Startup Fest Expo  </h1>
            </div>
        </div>

      
    </div>
  )
}

export default Services
