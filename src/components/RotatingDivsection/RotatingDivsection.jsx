import React from 'react'
import './RotatingDivsection.css'

const RotatingDivsection = () => {
  return (
    // <!-- Rotating Div box animation on scroll -->
    <main className="section-container">
      <div className="left-border"></div>
      <div className="right-border"></div>
  
      <div className="cube-box">
        {/* <!-- Repeat for each side of the cube --> */}
        <article className="skills-section front-side">
          <div className="extended-border left-border"></div>
          <div className="extended-border right-border"></div>
          <section className="description1">
            <p className="green-text">Innovative Solutions, Timeless Design</p>
            <p className="instruction">We blend creativity and technology to deliver designs that stand the test of time.</p>
          </section>
          <section className="number-logo">01</section>
        </article>
  
        <article className="skills-section back-side">
          <div className="left-border"></div>
          <div className="right-border"></div>
  
          <div className="extended-border left-border"></div>
          <div className="extended-border right-border"></div>
          <section className="description1">
            <p className="green-text">Crafting Digital Experiences</p>
            <p className="instruction">We Create engaging and intuitive digital experiences tailored to audience.</p>
          </section>
          <section className="number-logo">03</section>
        </article>
  
        <article className="skills-section right-side">
          <div className="left-border"></div>
          <div className="right-border"></div>
  
          <div className="extended-border left-border"></div>
          <div className="extended-border right-border"></div>
          <section className="description1">
            <p className="green-text">Your Vision, Our Expertise</p>
            <p className="instruction">Partner with us to bring your ideas to life with precision and creativity.</p>
          </section>
          <section className="number-logo">02</section>
        </article>
  
        <article className="skills-section left-side">
          <div className="left-border"></div>
          <div className="right-border"></div>
  
          <div className="extended-border left-border"></div>
          <div className="extended-border right-border"></div>
          <section className="description1">
            <p className="green-text">Client-Focused Approach</p>
            <p className="instruction">We prioritize understanding our clients' needs to deliver tailored and effective
              solutions.</p>
          </section>
          <section className="number-logo">06</section>
        </article>
  
        <article className="skills-section top-side">
          <div className="left-border"></div>
          <div className="right-border"></div>
  
          <div className="extended-border left-border"></div>
          <div className="extended-border right-border"></div>
          <section className="description1">
            <p className="green-text">Continuous Innovation</p>
            <p className="instruction">We stay ahead of the curve, embracing new technologies to provide cutting-edge
              solutions.</p>
          </section>
          <section className="number-logo">04</section>
        </article>
  
        <article className="skills-section bottom-side">
          <div className="left-border"></div>
          <div className="right-border"></div>
  
          <div className="extended-border left-border"></div>
          <div className="extended-border right-border"></div>
          <section className="description1">
            <p className="green-text">Client-Focused Approach</p>
            <p className="instruction">We prioritize understanding our clients' needs to deliver tailored and effective
              solutions.</p>
          </section>
          <section className="number-logo">02</section>
        </article>
      </div>
    </main>  )
}

export default RotatingDivsection