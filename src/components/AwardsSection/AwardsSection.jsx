import React, { useEffect, useRef } from 'react';
import './AwardsSection.css';

const AwardsSection = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    let lastScrollY = window.scrollY; // Store last scroll position
    let scrollSpeed = 0; // To control the speed of the transition

    // Function to apply the scroll effect gradually
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate change in scroll value
      const deltaY = scrollY - lastScrollY;

      // Gradually increase the speed of the scroll effect
      scrollSpeed += deltaY * 0.1;

      // Cap the scroll speed to prevent sudden jumps
      scrollSpeed = Math.max(Math.min(scrollSpeed, 10), -10);

      const translateY = scrollY * 0.3 + scrollSpeed;
      const rotateDeg = scrollY * 0.05 + scrollSpeed * 0.02;

      // Apply the CSS transformation
      heading.style.setProperty('--scroll-translate', `${translateY}px`);
      heading.style.setProperty('--rotate-degree', `${rotateDeg}deg`);

      lastScrollY = scrollY; // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="award-section">
      <section className="table-container">
        <table>
          <tbody>
            <tr>
              <td className="bold-text">CSS Nectar - Site of the Day</td>
              <td className="definition">
                Design*Cube's website was recognized as the "Site of the Day" by CSS Nectar, highlighting our commitment to excellence in web design.
              </td>
            </tr>
            <tr>
              <td className="date">Nov 16, 2023</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="bold-text">Web Guru Awards</td>
              <td className="definition">
                Design*Cube received the Web Guru Award for outstanding achievement in web design, showcasing our design expertise.
              </td>
            </tr>
            <tr>
              <td className="date">Oct 11, 2023</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="bold-text">Mobile Excellence Awards</td>
              <td className="definition">
                Design*Cube’s dedication to providing the best mobile user experiences was acknowledged with a Mobile Excellence Award.
              </td>
            </tr>
            <tr>
              <td className="date">Sep 28, 2023</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="bold-text">The Drum Awards</td>
              <td className="definition">
                Design*Cube was honored with The Drum Award for Creative Technology, recognizing our innovative approaches to digital creativity.
              </td>
            </tr>
            <tr>
              <td className="date">May 21, 2023</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="bold-text">International Design Awards</td>
              <td className="definition">
                Design*Cube received an International Design Award for excellence in interactive media and web design.
              </td>
            </tr>
            <tr>
              <td className="date">Mar 15, 2023</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="awards">
        <h1 ref={headingRef}>AWARDS</h1>
      </div>
    </section>
  );
};

export default AwardsSection;
