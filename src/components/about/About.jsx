import React from 'react'
import { assets } from '../../assets/assets'
import './About.css'
const About = () => {
  return (
    <div className='about-whole'>
        <h1>About Us</h1>
        <div className='about-main'>
            <div className='about-image'>
                <img src={assets.aboutimg} alt="" />

            </div>
            <div className='about-content'>
                <h3 className='content-head'>who we are</h3>
                <p className='first'>We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible.

</p>

<br />
<br />

<p className='second'>
We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.
</p>
<br />
<br />
<div className='learn'>

    <p>Join Us into the Immersive Future</p>

    <button>Learn more</button>

</div>

            </div>
        </div>
      
    </div>
  )
}

export default About
