import React from 'react'
import './MainButton.css'

const MainButton = (props) => {
  return (
    // <!-- Our Project Button -->
    <div className="join-container position">
      <h1 className='heading'>{props.heading}</h1>
      <h2 className='title'>{props.title}</h2>
      <p className='para'>{props.description}</p>
      <p className="join-text">{props.text}</p>
      <button className="join-btn">{props.name}<span className="arrow2">→</span>
      </button>
    </div>  )
}

export default MainButton