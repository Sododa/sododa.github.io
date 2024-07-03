import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      <h1>Empowering Minds, Shaping Futures</h1>
        <p>At Edupath, we are dedicated to empowering minds and shaping futures. Our world-class education and innovative programs inspire students to achieve their fullest potential. By fostering critical thinking and creativity, we prepare our graduates to become leaders and change makers in their chosen fields, ready to make a global impact.</p>
        <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
      </div>
    </div>


  )
}

export default Hero
