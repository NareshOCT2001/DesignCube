import React from 'react'
import './Marquee.css'
import vector from '../../assets/Vector.png'

const Marquee = () => {
  const style = {
    listStyleImage: `url(${vector})`,
    listStylePosition: 'inside', // optional: can be 'inside' or 'outside'
    paddingLeft: '20px' // add space for the image if needed
  };

  return (
    <section id="home" className="marquee-container">
      <div className="marquee">
        <ul style={style}>
          <li>Social Media Management</li>
          <li>Video Production</li>
          <li>Consulting Services</li>
          <li>Web Design</li>
          <li>Branding</li>
          <li>SEO Optimization</li>
          <li>UX/UI Design</li>
          <li>Graphic Design</li>
          <li>E-commerce Solutions</li>
          <li>Mobile App Design</li>
          <li>Digital Marketing</li>
          <li>Content Creation</li>

          {/* Duplicate for smooth loop */}
          <li>Social Media Management</li>
          <li>Video Production</li>
          <li>Consulting Services</li>
          <li>Web Design</li>
          <li>Branding</li>
          <li>SEO Optimization</li>
          <li>UX/UI Design</li>
          <li>Graphic Design</li>
          <li>E-commerce Solutions</li>
          <li>Mobile App Design</li>
          <li>Digital Marketing</li>
          <li>Content Creation</li>
        </ul>
      </div>
    </section>
  )
}

export default Marquee
