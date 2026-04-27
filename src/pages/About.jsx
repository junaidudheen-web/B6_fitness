import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')` }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the story behind Kondotty's most premium fitness destination.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section-padding">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-image glass-card"
            >
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" alt="Gym interior" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-text"
            >
              <h2>The <span className="text-primary">B6 Fitness 360</span> Story</h2>
              <p>Founded with a passion for transforming lives, B6 Fitness 360 was established to fill the gap for a truly premium fitness and wellness center in Kondotty. We realized that fitness is not just about lifting weights; it's a 360-degree approach encompassing training, nutrition, recovery, and a supportive community.</p>
              <p>Our facility is meticulously designed to provide an inspiring environment where members can push their limits while enjoying luxurious amenities. From our high-end equipment to our dedicated recovery zones, every detail is crafted to elevate your fitness journey.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv-section section-padding">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mv-grid"
          >
            <motion.div variants={itemVariants} className="mv-card glass-card text-center">
              <Target size={48} className="text-primary mb-4" />
              <h3>Our Mission</h3>
              <p>To empower individuals in Kondotty and beyond to lead healthier, stronger, and more fulfilling lives by providing state-of-the-art facilities, expert guidance, and a supportive community.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="mv-card glass-card text-center">
              <Eye size={48} className="text-primary mb-4" />
              <h3>Our Vision</h3>
              <p>To be the leading premium fitness and wellness brand in the region, recognized for our commitment to excellence, innovation in training, and holistic approach to health.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose <span className="text-primary">B6 Fitness 360</span></h2>
            <p>We redefine what a gym experience should be.</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="why-us-grid"
          >
            <motion.div variants={itemVariants} className="why-card">
              <Award className="text-primary mb-3" size={36} />
              <h4>Premium Facilities</h4>
              <p>Experience unmatched luxury with our top-tier equipment and meticulously maintained environment.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="why-card">
              <Shield className="text-primary mb-3" size={36} />
              <h4>Holistic Recovery</h4>
              <p>Access our exclusive steam, sauna, and ice baths to ensure your body recovers optimally.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="why-card">
              <Target className="text-primary mb-3" size={36} />
              <h4>Expert Guidance</h4>
              <p>Train with certified professionals who are dedicated to helping you achieve specific results.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
