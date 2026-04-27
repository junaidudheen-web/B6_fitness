import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

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
            {/* Social links disabled temporarily due to lucide-react export issues */}
            <a href="#" target="_blank" rel="noopener noreferrer">Ig</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Fb</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Yt</a>
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
