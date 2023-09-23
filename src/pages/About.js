import React from 'react'
import BannerImage from '../assets/1beef.jpg'
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage}` }}></div>
      
      <div className='aboutBottom'></div>
      <h1>About Us</h1>
      <p>lorem</p>
    </div>
  )
}

export default About
