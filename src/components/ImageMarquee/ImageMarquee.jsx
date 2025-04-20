import React from "react";
import "./ImageMarquee.css";

const ImageMarquee = ({ images }) => {
  return (
    <div className="marquee-wrapper">
      {[...Array(3)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`marquee-row ${
            rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
          }`}
        >
          <div className="marquee-track">
            {images.map((src, idx) => (
              <img key={idx} src={src} alt={`Slide ${idx}`} />
            ))}
            {/* Duplicate for infinite effect */}
            {images.map((src, idx) => (
              <img key={`copy-${idx}`} src={src} alt={`Slide ${idx}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageMarquee;
