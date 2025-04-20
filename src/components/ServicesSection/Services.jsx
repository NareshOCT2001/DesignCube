import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    const heading = document.getElementById("scroll-heading");
    const tableContainer = document.querySelector(".table-container");
  
    const handleScroll = () => {
      const containerTop = tableContainer.getBoundingClientRect().top;
      const containerHeight = tableContainer.offsetHeight;
      const windowHeight = window.innerHeight;
  
      // How much of the container has been scrolled through
      const scrollDistance = Math.min(Math.max(-containerTop, 0), containerHeight - windowHeight);
  
      const progress = scrollDistance / (containerHeight - windowHeight); // 0 to 1
  
      heading.style.transform = `translateY(${progress * 100}%)`;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <section className="award-section" id="awardSection">
      <div className="awards" id="services">
        <h1 id="scroll-heading">SERVICES</h1>
      </div>

      <section className="table-container">
        <>
          {[ 
            { num: 1, title: "Web Design", desc: "Crafting visually stunning and user-friendly websites tailored to your brand’s identity and goals." },
            { num: 2, title: "SEO Optimization", desc: "Enhancing your website’s visibility and ranking on search engines through strategic keyword integration and technical optimization." },
            { num: 3, title: "UX/UI Design", desc: "Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use." },
            { num: 4, title: "Branding", desc: "Building a cohesive and strong brand identity that resonates with your target audience and sets you apart from the competition." },
            { num: 5, title: "Graphic Design", desc: "Designing compelling and creative visuals for print and digital media to communicate your message effectively." },
            { num: 6, title: "E-commerce Solutions", desc: "Developing robust and scalable online stores that drive sales and provide seamless shopping experiences for your customers." },
            { num: 7, title: "Mobile App Design", desc: "Creating mobile app experiences that are fast, fluid, and functional across all devices and platforms." },
            { num: 8, title: "Digital Marketing", desc: "Leveraging digital channels and strategies to grow your audience and drive measurable results." },
            { num: 9, title: "Content Creation", desc: "Producing engaging and relevant content that connects with your audience and supports your marketing goals." },
            { num: 10, title: "Social Media Management", desc: "Managing your brand’s presence across social media platforms to build community and increase engagement." },
            { num: 11, title: "Video Production", desc: "Capturing your brand’s story through high-quality video content that engages and inspires your audience." },
            { num: 12, title: "Consulting Services", desc: "Offering expert guidance to help you navigate your digital strategy, technology choices, and business challenges." }
          ].map((service, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td className="num">{service.num}</td>
                  <td className="definition" rowSpan="2">{service.desc}</td>
                </tr>
                <tr>
                  <td className="bold-text">{service.title}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </>
      </section>
    </section>
  );
};

export default Services;

