import React from "react";
import "./FooterSection.css";
import MainButton from "../MainButton/MainButton";

const FooterSection = () => {
  return (
    <footer className="footer-section" id="contact">
      <h1 className="footer-watermark">DESIGN*CUBE</h1>

      <div className="footer-content">

        <div className="footer-left">
          
          <div className="footer-contact">
            <h3 className="footer-heading">CONTACT</h3>
            <p className="footer-address">
              Guvi Certified Full Stack Developer
            </p>
            <p className="footer-email">knareshkumar1910@gmail.com</p>
            <p className="footer-call">Phone: +91 82200 07797</p>
            <button className="price-quote">
              Get a Price Quote <span className="arrow2">→</span>
            </button>{" "}
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <div className="links-column">
              <h3 className="footer-heading">MENU</h3>
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Services
              </a>
              <a href="#" className="footer-link">
                Projects
              </a>
            </div>

            <div className="links-column">
              <h3 className="footer-heading">USEFUL LINKS</h3>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Cookie Policy
              </a>
              <a href="#" className="footer-link">
                Licensing
              </a>
              <a href="#" className="footer-link">
                404
              </a>
            </div>

            <div className="links-column">
              <h3 className="footer-heading">SOCIAL MEDIA</h3>
              <a
                href="https://www.linkedin.com/in/knareshkumar"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/NareshOCT2001"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/nxreshkumxr"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/918220007797"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/knareshkumar"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>

            <div className="links-column">
              <h3 className="footer-heading">FRAMER AFFILIATE</h3>
              <a href="#" className="footer-link">
                Framer Website
              </a>
              <a href="#" className="footer-link">
                Framer - Site Pricing
              </a>
              <a href="#" className="footer-link">
                Framer Marketplace
              </a>
              <a href="#" className="footer-link">
                Framer Templates
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
