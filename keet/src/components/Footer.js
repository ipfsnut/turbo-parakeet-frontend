import React from 'react';
import CAZLabLogo from '../assets/CAZLabLogo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={CAZLabLogo} alt="CAZ Lab Logo" className="logo" />
        <p>&copy; {new Date().getFullYear()} Texas Tech University CAZ Lab</p>
      </div>
    </footer>
  );
};

export default Footer;
