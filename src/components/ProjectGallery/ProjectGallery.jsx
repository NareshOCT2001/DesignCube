// ProjectGallery.jsx
import React from 'react';
import './ProjectGallery.css';

import img1 from '../../assets/1.avif';
import img1_1 from '../../assets/1.1avif.avif';
import img1_2 from '../../assets/1.2.avif';
import img2 from '../../assets/2.avif';
import img3 from '../../assets/3.avif';
import img4 from '../../assets/4.avif';
import img5 from '../../assets/5.avif';
import img6 from '../../assets/6.avif';
import img7 from '../../assets/7.avif';
import img8 from '../../assets/8.avif';
import img9 from '../../assets/9.avif';
import img10 from '../../assets/10.avif';
import img11 from '../../assets/11.avif';
import img12 from '../../assets/12.avif';
import img13 from '../../assets/13.avif';
import img14 from '../../assets/14.avif';
import img15 from '../../assets/15.avif';
import img16 from '../../assets/16.avif';
import img17 from '../../assets/17.avif';
import img18 from '../../assets/18.avif';
import img19 from '../../assets/19.avif';
import img20 from '../../assets/20.avif';
import img21 from '../../assets/21.avif';
import img22 from '../../assets/22.avif';
import img23 from '../../assets/23.avif';
import img24 from '../../assets/24.avif';
import img25 from '../../assets/25.avif';
import img26 from '../../assets/26.avif';
import img27 from '../../assets/27.avif';
import img28 from '../../assets/28.avif';
import img29 from '../../assets/29.avif';
import img30 from '../../assets/30.avif';
import img31 from '../../assets/31.avif';
import img32 from '../../assets/32.avif';

const ProjectImage = ({ src, caption }) => (
  <figure className="grid-image-container">
    <img src={src} alt={caption} />
    <div className="hover-caption">{caption}</div>
  </figure>
);

const ProjectGallery = () => {
  const projects = [
    { src: img1, caption: "Plywood Artist Portfolio made in Framer" },
    { src: img1_1, caption: "Huggl 1.0 Website made in Framer" },
    { src: img2, caption: "Charmant Website made in Framer" },
    { src: img3, caption: "Predict Website made in Framer" },
    { src: img4, caption: "Huggl 2.0 Website made in Framer" },
    { src: img5, caption: "Pepper Website made in Framer" },
    { src: img6, caption: "Payble Website made in Framer" },
    { src: img7, caption: "BrightSites Website made in Framer" },
    { src: img8, caption: "HealthWell Website made in Framer" },
    { src: img9, caption: "Reify Website made in Framer" },
    { src: img10, caption: "Cohesion Website made in Framer" },
    { src: img11, caption: "Thelist Website made in Framer" },
    { src: img12, caption: "Agentic Website made in Framer" },
    { src: img13, caption: "Bento Vibe Website made in Framer" },
    { src: img14, caption: "ZenZap Website made in Framer" },
    { src: img15, caption: "Vervedent Website made in Framer" },
    { src: img16, caption: "Learny Website made in Framer" },
    { src: img17, caption: "Apex Wallet Website made in Framer" },
    { src: img18, caption: "Teameave Website made in Framer" },
    { src: img19, caption: "Wanted Website made in Framer" },
    { src: img20, caption: "Device Website made in Framer" },
    { src: img21, caption: "Device Website made in Framer" },
    { src: img22, caption: "Darko Website made in Framer" },
    { src: img23, caption: "Kombo Website made in Framer" },
    { src: img24, caption: "Roco Website made in Framer" },
    { src: img25, caption: "Kong Website made in Framer" },
    { src: img26, caption: "Spendly Website made in Framer" },
    { src: img27, caption: "Kong Website made in Framer" },
    { src: img28, caption: "Vector Website made in Framer" },
    { src: img29, caption: "ArtSpotter Website made in Framer" },
    { src: img30, caption: "The Decor Website made in Framer" },
    { src: img31, caption: "Feedo Website made in Framer" },
    { src: img32, caption: "Bookease Website made in Framer" },
  ];



  
    return (
      <div className="projects-container"> {/* Changed from header to div */}
        <section className="projects-content">
          <aside className="projects-heading">
            <span id="OUR">OUR</span>
            <span id="PROJECTS">PROJECTS</span>
          </aside>
  
          <div className="projects-description">
            <aside className="description-spans">
              <span id="line1">Explore our diverse portfolio of</span>
              <span id="line2">innovative and impactful projects.</span>
            </aside>
          </div>
        </section>
  
        <main className="project-images-gallery">
          {projects.map((project, index) => (
            <ProjectImage 
              key={index}
              src={project.src}
              caption={project.caption}
            />
          ))}
        </main>
      </div>
    );
  };
  
  export default ProjectGallery;