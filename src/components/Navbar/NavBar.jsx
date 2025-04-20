import React, { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = ({ navItems, contactText }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    document.querySelector('.nav-links').classList.toggle('active');
  };

  return (
    <header id="home">
      <nav className="nav-bar">
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`nav-item ${activeSection === item.href.substring(1) ? 'border-active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="contact-us">
          <a href="#contact">{contactText}</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
