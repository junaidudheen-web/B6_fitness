import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Programs.css';

const Programs = () => {
  const programsData = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
      desc: "A comprehensive program combining high-intensity interval training, cardio, and nutrition planning to shed unwanted fat effectively and sustainably.",
      benefits: ["Increased metabolic rate", "Improved cardiovascular health", "Enhanced stamina and endurance", "Tailored diet plan"],
      audience: "Individuals looking to reduce body fat, improve overall fitness, and build a leaner physique."
    },
    {
      id: "muscle-gain",
      title: "Muscle Gain",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      desc: "Focused on progressive overload and hypertrophy. This program uses free weights and resistance machines to build strength and muscle mass.",
      benefits: ["Increased muscle mass and strength", "Improved bone density", "Better posture and joint stability", "Boosted confidence"],
      audience: "Beginners to advanced lifters wanting to build serious muscle and strength."
    },
    {
      id: "personal-training",
      title: "Personal Training",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
      desc: "One-on-one coaching with our certified trainers. Get a custom workout and nutrition plan tailored specifically to your unique goals and body type.",
      benefits: ["Personalized attention", "Faster, targeted results", "Injury prevention", "Constant motivation and accountability"],
      audience: "Anyone who wants the fastest results with expert guidance and a structured plan."
    },
    {
      id: "group-classes",
      title: "Group Classes (Zumba & More)",
      img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1470&auto=format&fit=crop",
      desc: "Energetic and fun group workouts ranging from Zumba to HIIT. A great way to stay motivated and burn calories in a community setting.",
      benefits: ["High calorie burn", "Fun and engaging atmosphere", "Social interaction", "Stress relief"],
      audience: "Those who enjoy working out with others and prefer rhythmic or high-energy classes."
    },
    {
      id: "outdoor-fitness",
      title: "Outdoor Fitness",
      img: "/programs/outdoor_fitness.png",
      desc: "Take your workout outside. Utilizing functional movements, cardio, and the natural environment to improve stamina and cardiovascular health.",
      benefits: ["Improved agility and stamina", "Fresh air and vitamin D", "Dynamic terrain challenges", "Mental health boost"],
      audience: "Fitness enthusiasts who prefer training in nature rather than indoors."
    },
    {
      id: "calisthenics",
      title: "Calisthenics",
      img: "/programs/calisthenics.png",
      desc: "Master your own bodyweight with our dedicated calisthenics area. Develop incredible core strength, flexibility, and muscle control.",
      benefits: ["Mastery of bodyweight", "Incredible core strength", "Increased flexibility", "No equipment dependency"],
      audience: "Individuals looking to build functional strength and perform advanced bodyweight movements."
    }
  ];

  return (
    <div className="programs-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop')` }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-primary">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tailored fitness solutions for every goal.
          </motion.p>
        </div>
      </section>

      {/* Programs List */}
      <section className="programs-list section-padding">
        <div className="container">
          {programsData.map((prog, index) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`program-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="prog-image">
                <img src={prog.img} alt={prog.title} />
              </div>
              <div className="prog-content">
                <h2>{prog.title}</h2>
                <p className="prog-desc">{prog.desc}</p>
                
                <div className="prog-details">
                  <div className="benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {prog.benefits.map((benefit, i) => (
                        <li key={i}><CheckCircle2 className="text-primary" size={18} /> {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="audience">
                    <h4>Target Audience:</h4>
                    <p>{prog.audience}</p>
                  </div>
                </div>
                
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4">
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
