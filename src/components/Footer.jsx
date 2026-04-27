import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <Dumbbell className="logo-icon" />
            <span>B6 FITNESS <span className="text-primary">360</span></span>
          </Link>
          <p className="footer-desc">
            Experience complete fitness, recovery, and wellness at B6 Fitness 360, Kondotty. We are a premium fitness destination offering advanced training under one roof.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/membership">Membership</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <MapPin className="text-primary" size={20} />
              <span>Kondotty, Kerala, India</span>
            </li>
            <li>
              <Phone className="text-primary" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail className="text-primary" size={20} />
              <span>info@b6fitness360.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Working Hours</h3>
          <ul className="hours-list">
            <li>
              <span>Mon - Sat</span>
              <span>5:00 AM - 11:00 PM</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>6:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} B6 Fitness 360. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
