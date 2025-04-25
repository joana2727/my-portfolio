import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mikks Garcia</h1>
        <span className="footer__copy">
          mikks.work@gmail.com
        </span>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/by_mikks/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer" 
            alt="Mikks' Instagram"
            aria-label="View Mikks' Instagram Profile"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.tiktok.com/@by_mikks"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            alt="Mikks' Tiktok"
            aria-label="View Mikks' Tiktok Profile"
          >
            <i className="uil uil-music-note"></i>
          </a>

          <a
            href="https://www.facebook.com/mikksgarcia27"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            alt="Mikks' Facebook"
            aria-label="View Mikks' Facebook Profile"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.raket.ph/by_mikks/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            alt="Mikks' Raket PH"
            aria-label="View Mikks' Raket Profile"
          >
            <i className="uil uil-rocket"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
