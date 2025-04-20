import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './OurProjectsButton.css';

const OurProjectsButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/projects'); // Navigate to Projects Section when clicked
  };

  return (
    <div className="join-container position">
      <h1 className='heading'>OUR</h1>
      <h2 className='title'>PROJECTS</h2>
      <p className='para'>Explore our diverse portfolio of innovative and impactful projects.</p>
      <p className="join-text">Discover the work we do and the impact we make.</p>
      <button className="join-btn" onClick={handleButtonClick}>
        Our Projects <span className="arrow2">→</span>
      </button>
    </div>
  );
};

export default OurProjectsButton;
