import React, { useEffect, useRef, useState } from 'react';
import './TestinonialSlide.css';

const TestinonialSlide = () => {
  const sliderRef = useRef(null);
  const testimonialsRef = useRef([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonialsRef.current.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonialsRef.current.length) % testimonialsRef.current.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  const testimonialsData = [
    {
      img: 'https://framerusercontent.com/images/0E6LuVBVdiV0dbIF0qhgZtM4JQ.png?scale-down-to=1024',
      name: 'Sarah Thompson',
      role: 'Marketing Director, Bright Ideas Inc.',
      text: `"Working with DesignCube was a game-changer for our brand. Their innovative design solutions and attention to detail helped us create a stunning website that truly represents our values. We’ve seen a significant boost in user engagement and conversions since the redesign."`
    },
    {
      img: 'https://framerusercontent.com/images/CgDIctvTDOFyPeSfU5OGrX0dHSk.png?scale-down-to=1024',
      name: 'James Williams',
      role: 'CEO, TechWorld Solutions',
      text: `"DesignCube's expertise in SEO optimization and digital marketing has dramatically improved our online presence. Their strategic approach and deep understanding of our industry have driven more traffic to our site and increased our sales by 25%."`
    },
    {
      img: 'https://framerusercontent.com/images/2hKtvu97mgKLaifFbclYx3C64.png?scale-down-to=1024',
      name: 'Emily Davis',
      role: 'Founder, Artisan Crafts',
      text: `"The team at DesignCube exceeded our expectations with their creative branding and graphic design services. They captured the essence of our brand perfectly and delivered beautiful, cohesive visuals that have received fantastic feedback from our customers."`
    },
    {
      img: 'https://framerusercontent.com/images/wYHEdCwM2EtawA0fIzu2egzayU.png?scale-down-to=1024',
      name: 'Michael Brown',
      role: 'Product Manager, Innovatech',
      text: `"DesignCube’s UX/UI design expertise transformed our app into a user-friendly and engaging platform. Their collaborative approach and commitment to excellence were evident in every stage of the project. We couldn't be happier with the results."`
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <button className="nav prev" onClick={handlePrev}>&#8249;</button>

        <div className="testimonial-slider" ref={sliderRef}>
          {testimonialsData.map((testimonial, i) => (
            <div
              className="testimonial"
              key={i}
              ref={(el) => (testimonialsRef.current[i] = el)}
            >
              <img src={testimonial.img} alt={testimonial.name} />
              <h1 className="testimonial-text">{testimonial.name}</h1>
              <p className="testimonial-text">{testimonial.role}</p>
              <p className="p2">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <button className="nav next" onClick={handleNext}>&#8250;</button>
      </div>
    </section>
  );
};

export default TestinonialSlide;
