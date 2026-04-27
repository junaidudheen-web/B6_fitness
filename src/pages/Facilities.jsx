import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Droplets, Coffee } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const facilityCategories = [
    {
      id: "training",
      title: "Advanced Training Zones",
      icon: <Dumbbell size={40} className="text-primary" />,
      desc: "Our training floors are equipped with biomechanically advanced machines and extensive free weights to cater to all levels of fitness enthusiasts.",
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
      ],
      features: ["Cardio Theater", "Free Weight Area", "Functional Training Zone", "Resistance Machines"]
    },
    {
      id: "recovery",
      title: "Recovery & Wellness",
      icon: <Droplets size={40} className="text-primary" />,
      desc: "True fitness requires proper recovery. Our premium wellness facilities ensure your body repairs efficiently after every session.",
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop"
      ],
      features: ["Steam Bath", "Sauna Bath", "Ice Bath", "Jacuzzi"]
    },
    {
      id: "lifestyle",
      title: "Lifestyle Amenities",
      icon: <Coffee size={40} className="text-primary" />,
      desc: "We believe the gym should fit seamlessly into your daily life. Our lifestyle amenities provide comfort before and after your workout.",
      images: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560205001-a7eb20c6a2c2?q=80&w=1449&auto=format&fit=crop"
      ],
      features: ["Children's Play Area", "Coffee Shop & Nutrition Bar", "Prayer Hall", "Meeting Room"]
    }
  ];

  return (
    <div className="facilities-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')` }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium <span className="text-primary">Facilities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience a new standard of fitness and wellness.
          </motion.p>
        </div>
      </section>

      {/* Facilities Categories */}
      <div className="facilities-sections section-padding">
        <div className="container">
          {facilityCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="facility-category"
            >
              <div className="fac-cat-header text-center">
                <div className="cat-icon-wrap">{category.icon}</div>
                <h2>{category.title}</h2>
                <p>{category.desc}</p>
              </div>

              <div className="fac-cat-content">
                <div className="fac-image-grid">
                  {category.images.map((img, i) => (
                    <div key={i} className="fac-img-card">
                      <img src={img} alt={`${category.title} ${i + 1}`} />
                    </div>
                  ))}
                </div>
                
                <div className="fac-features glass-card">
                  <h3>Included Amenities</h3>
                  <ul className="fac-feature-list">
                    {category.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
