import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')` }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our team for any inquiries.
          </motion.p>
        </div>
      </section>

      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-info-container"
            >
              <h2>Get In <span className="text-primary">Touch</span></h2>
              <p className="contact-desc">Have questions about our memberships, facilities, or personal training? We are here to help!</p>
              
              <div className="info-cards">
                <div className="info-card glass-card">
                  <div className="icon-wrap"><MapPin size={24} /></div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <p>B6 Fitness 360 Building, Main Road, Kondotty, Kerala 673638</p>
                  </div>
                </div>
                
                <div className="info-card glass-card">
                  <div className="icon-wrap"><Phone size={24} /></div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <p>+91 98765 43210<br />+91 87654 32109</p>
                  </div>
                </div>

                <div className="info-card glass-card">
                  <div className="icon-wrap"><Mail size={24} /></div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <p>info@b6fitness360.com<br />support@b6fitness360.com</p>
                  </div>
                </div>

                <div className="info-card glass-card">
                  <div className="icon-wrap"><Clock size={24} /></div>
                  <div className="info-text">
                    <h4>Working Hours</h4>
                    <p>Mon-Sat: 5:00 AM - 11:00 PM<br />Sunday: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form-container glass-card"
            >
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="B6 Fitness Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.3838421869854!2d75.9610214!3d11.1416418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee202611a51%3A0xc3c5f4b52e3e578!2sKondotty%2C%20Kerala!5e0!3m2!1sen!2sin!4v1683100000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
