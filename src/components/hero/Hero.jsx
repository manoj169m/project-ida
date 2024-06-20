import React, { useEffect, useState } from 'react'

import { assets } from '../../assets/assets'
import './hero.css'
import Bar from '../navbar/Bar'
import About from '../about/About'


const Hero = () => {
    const images =[

        `url(${assets.hero1})`,
        `url(${assets.hero2})`,
        `url(${assets.hero3})`
    ]

    const [currentImage,setCurrentImage] =useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImage((prev)=>(prev+1)% images.length)
        },5000)

        return ()=> clearInterval(interval)
    },[images.length])
    
  return (
    <>  
     
    <div className='Hero' style={{backgroundImage:images[currentImage]}}>
    <Bar/> 
        <div className='content'>
            <h1>Discover Your Gaming Style and
            <br />   Play Your Favorite Games,
           
                 Seamlessly, Anywhere.</h1>
                 <p>Connect with friends, challenge rivals, and conquer new worlds. Your gaming adventure starts here, across all platforms.

pen_spark
</p>
<button>EXPLORE</button>
        </div>
      
    </div>
  
    </>
    

  )
}

export default Hero
