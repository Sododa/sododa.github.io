import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon'/>
    </div>
    <div className='about-right'>
        <h3>About University</h3>
        <h2>Pioneering Research and Innovation</h2>
        <p>At Edupath, we pride ourselves on being at the forefront of pioneering research and innovation. Our commitment to advancing knowledge and driving technological breakthroughs is embedded in every aspect of our academic community. Our distinguished faculty and talented students collaborate on cutting-edge projects that address the worlds most pressing challenges, from sustainable energy solutions to groundbreaking medical discoveries. </p>
        <p>Our state-of-the-art research facilities and interdisciplinary approach foster an environment where creativity and critical thinking thrive. We believe in the transformational power of research to improve lives and shape the future. By partnering with industry leaders and securing substantial research grants, we ensure that our findings have a real-world impact.</p>
        <p>Through our innovative programs, we equip our students with the skills and knowledge to become leaders in their fields. At Edupath, we are not just keeping pace with the future; we are actively shaping it through relentless research and innovation. Our dedication to pushing the boundaries of what is possible sets us apart as a hub of academic excellence and groundbreaking discovery.</p>
    </div>
      
    </div>
  )
}

export default About
