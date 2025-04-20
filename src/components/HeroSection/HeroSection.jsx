import React from 'react'
import './Herosection.css'
import CubeImage from '../../assets/Screenshot 2025-03-21 231111.png'
import cubeImage from '../../assets/Predict Screen.png'

const HeroSection = () => {
  return (
    <main className="cube-container">
    <div className="cube">
      <div className="face front" style={{ backgroundImage: `url(${CubeImage})` }}></div>
      <div className="face back" style={ {background: `url(${cubeImage})`} }></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  </main>  )
}

export default HeroSection