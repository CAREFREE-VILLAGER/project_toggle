
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaQuora } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-heading">
          <h3>Contact us</h3>
          <p>
            <FaMapMarkerAlt /> 123 Main St, City, Delhi
          </p>
          <p>
            <FaPhone /> +91 999 999 9999
          </p>
          <p>
            <FaEnvelope /> info@example.com
          </p>
        </div>
        <div className="footer-heading">
          <h3 style={{textAlign:'left'}}>Follow us</h3>
          <div className="social-icons">
            <FaFacebook size={30} />
            <FaTwitter size={30}/>
            <FaLinkedin size={30} /> 
            <FaInstagram size={30} />
            <FaYoutube size={30} />
            <FaQuora size={30} />
          </div>
        </div>
        <div className="footer-heading">
          <h3>Head Office</h3>
          <p>
            <FaMapMarkerAlt /> 456 Head St, City, Delhi
          </p>
          <p>
            <FaPhone /> +91 999 999 9999
          </p>
          <p>
            <FaEnvelope /> headoffice@example.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
