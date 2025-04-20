import React from 'react'
import './KeyMetrics.css'

const KeyMetrics = () => {
  return (
    // <!-- KEY METRICS -->
    <article className='metrics-containner'>
      <section className="metrics-section">
        <div className="metric-box key-metric">KEY <br /> METRICS</div>
  
        <div className="metric-box details">
          <p className="number">500+</p>
          <p className="title">Successful Projects</p>
          <p className="description">
            Demonstrates our extensive experience and consistent delivery of high-quality work.
          </p>
        </div>
  
        <div className="metric-box empty"></div> 
        {/* <!-- Empty third column --> */}
      </section>
  
      <section className="metrics-section">
        {/* <!-- Row 1 --> */}
        <div className="metric-box details">
          <p className="number">10+</p>
          <p className="title">Years of Experience</p>
          <p className="description">
            Showcases our longevity and expertise in the industry.
          </p>
        </div>
  
        <div className="metric-box details">
          <p className="number">300+</p>
          <p className="title">Satisfied Clients</p>
          <p className="description">
            Highlights our broad client base and the strong relationships we’ve built.
          </p>
        </div>
  
        <div className="metric-box details">
          <p className="number">98%</p>
          <p className="title">Client Satisfaction Rate</p>
          <p className="description">
            Indicates our high level of client satisfaction and commitment to excellence.
          </p>
        </div>
      </section>
  
      <section className="metrics-section">
        {/* <!-- Row 2 --> */}
        <div className="metric-box empty"></div> 
        {/* <!-- Empty first column --> */}
  
        <div className="metric-box details">
          <p className="number">50+</p>
          <p className="title">Skilled Professionals</p>
          <p className="description">
            Emphasizes the strength and diversity of our expert team.
          </p>
        </div>
  
        <div className="metric-box details">
          <p className="number" id="col-3">45%</p>
          <p className="title">Average Increase in Sales</p>
          <p className="description">
            Demonstrates the tangible results our e-commerce solutions have achieved for clients.
          </p>
        </div>
      </section>
    </article>  )
}

export default KeyMetrics