import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomCTA.css';

const CustomCTA = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
      console.log('Button clicked! Navigating to /project-gallery');
      navigate('/project-gallery'); // Make sure this matches the path in App.jsx
    };
  
  

  return (
    <div className="cta-container cta-position">
      <h1 className='cta-heading'>{props.heading}</h1>
      <h2 className='cta-title'>{props.title}</h2>
      <p className='cta-para'>{props.description}</p>
      <p className="cta-text">{props.text}</p>
      <button className="cta-btn" onClick={handleClick}>
        {props.name}
        <span className="cta-arrow">→</span>
      </button>
    </div>
  );
}

export default CustomCTA;
