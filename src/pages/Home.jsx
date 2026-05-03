import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Users, Flame, Heart, ArrowRight, CheckCircle2, Droplets, Coffee, Star } from 'lucide-react';
import { useInView } from 'framer-motion';
import './Home.css';

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const facilities = [
    { icon: <Activity size={32} />, title: "Modern Equipment", desc: "State-of-the-art machines for all muscle groups." },
    { icon: <Users size={32} />, title: "Certified Trainers", desc: "Expert guidance to reach your fitness goals." },
    { icon: <Droplets size={32} />, title: "Recovery Area", desc: "Steam, sauna, and ice baths for optimal recovery." },
    { icon: <Heart size={32} />, title: "Family Friendly", desc: "A welcoming environment for all fitness levels." }
  ];

  const programs = [
    { title: "Strength Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" },
    { title: "Personal Training", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" },
    { title: "Group Classes", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" },
    { title: "Zumba", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1470&auto=format&fit=crop" }
  ];

  const testimonials = [
    { name: "Rahul S.", review: "Best gym in Kondotty! The facilities are top-notch and the trainers are very helpful.", rating: 5 },
    { name: "Anjali K.", review: "Love the steam bath and recovery options after a heavy workout.", rating: 5 },
    { name: "Mohammed F.", review: "Premium equipment and a great atmosphere. Highly recommended.", rating: 5 }
  ];

  const canvasRef = React.useRef(null);
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const context = canvas.getContext('2d');
    const frameCount = 240;
    
    // Set fixed dimensions for drawing to match standard 16:9 aspect ratio
    canvas.width = 1920;
    canvas.height = 1080;

    const currentFrame = index => (
      `https://res.cloudinary.com/daqnnlvlm/image/upload/f_auto,q_auto,w_960/v1777801438/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`
    );

    let lastFrameIndex = 0;
    let ticking = false;

    const images = new Array(frameCount);

    const loadImage = (i) => {
      if (images[i]) return;
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        if (i === lastFrameIndex) {
          requestAnimationFrame(() => {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          });
        }
      };
      images[i] = img;
    };

    // Preload first 20 frames immediately for performance
    for (let i = 0; i < 20; i++) {
      loadImage(i);
    }

    // Load remaining frames in small batches so we don't freeze the main thread
    let currentLoadIndex = 20;
    const loadRemaining = setInterval(() => {
      if (currentLoadIndex >= frameCount) {
        clearInterval(loadRemaining);
        return;
      }
      for (let j = 0; j < 10 && currentLoadIndex < frameCount; j++, currentLoadIndex++) {
        loadImage(currentLoadIndex);
      }
    }, 50);

    if (images[0] && images[0].complete) {
      context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    }

    const updateCanvas = (frameIndex) => {
      // Dynamically load the frame if it hasn't started loading yet
      if (!images[frameIndex]) {
        loadImage(frameIndex);
      }
      if (images[frameIndex] && images[frameIndex].complete) {
        context.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const heroRect = hero.getBoundingClientRect();
          const scrollPos = -heroRect.top;
          const scrollMax = heroRect.height - window.innerHeight;
          
          if (scrollPos < 0) {
             if (lastFrameIndex !== 0) {
                lastFrameIndex = 0;
                updateCanvas(0);
             }
             ticking = false;
             return;
          }
          
          if (scrollPos > scrollMax) {
             const lastIdx = frameCount - 1;
             if (lastFrameIndex !== lastIdx) {
                lastFrameIndex = lastIdx;
                updateCanvas(lastIdx);
             }
             ticking = false;
             return;
          }
          
          const scrollFraction = scrollMax > 0 ? Math.max(0, Math.min(1, scrollPos / scrollMax)) : 0;
          const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
          
          if (frameIndex !== lastFrameIndex) {
            lastFrameIndex = frameIndex;
            updateCanvas(frameIndex);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set the first frame
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(loadRemaining);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-sticky">
          <canvas 
            ref={canvasRef}
            className="hero-canvas"
          ></canvas>
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Transform Your Body.<br />
              <span className="text-primary">Elevate Your Lifestyle.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle"
            >
              Experience complete fitness, recovery, and wellness at B6 Fitness 360, Kondotty.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-buttons"
            >
              <Link to="/membership" className="btn btn-primary">Join Now</Link>
              <Link to="/contact" className="btn btn-outline">Book Free Trial</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-padding">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="about-grid"
          >
            <motion.div variants={itemVariants} className="about-text">
              <h2>Welcome to <span className="text-primary">B6 Fitness 360</span></h2>
              <p>B6 Fitness 360 is a premium fitness destination offering advanced training, recovery, and lifestyle facilities under one roof. Our state-of-the-art center in Kondotty is designed to provide you with an unparalleled fitness experience.</p>
              <Link to="/about" className="about-link">Read Our Story <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div variants={itemVariants} className="about-stats">
              <div className="stat-box glass-card">
                <h3><AnimatedCounter value="1000" suffix="+" /></h3>
                <p>Happy Members</p>
              </div>
              <div className="stat-box glass-card">
                <h3><AnimatedCounter value="50" suffix="+" /></h3>
                <p>Premium Machines</p>
              </div>
              <div className="stat-box glass-card">
                <h3><AnimatedCounter value="15" suffix="+" /></h3>
                <p>Expert Trainers</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose <span className="text-primary">Us</span></h2>
            <p>We provide everything you need to achieve your fitness goals</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="features-grid"
          >
            {facilities.map((feat, index) => (
              <motion.div key={index} variants={itemVariants} className="feature-card glass-card">
                <div className="feature-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="programs-preview section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="text-primary">Programs</span></h2>
            <Link to="/programs" className="btn btn-outline">View All Programs</Link>
          </div>
          
          <div className="programs-grid">
            {programs.map((prog, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="program-card"
              >
                <div className="program-img" style={{ backgroundImage: `url(${prog.img})` }}></div>
                <div className="program-overlay">
                  <h3>{prog.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="facilities-preview section-padding">
        <div className="container">
          <div className="facilities-content">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="facilities-text"
            >
              <h2>Ultimate <span className="text-primary">Recovery</span> & Wellness</h2>
              <p>Experience our dedicated recovery and wellness zones designed to rejuvenate your body after intense workouts.</p>
              <ul className="facilities-list">
                <li><CheckCircle2 className="text-primary" size={20} /> Steam & Sauna Bath</li>
                <li><CheckCircle2 className="text-primary" size={20} /> Ice Bath & Jacuzzi</li>
                <li><CheckCircle2 className="text-primary" size={20} /> Children's Play Area</li>
                <li><CheckCircle2 className="text-primary" size={20} /> Coffee Shop & Nutrition Bar</li>
              </ul>
              <Link to="/facilities" className="btn btn-primary mt-4">Explore Facilities</Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="facilities-images"
            >
              <div className="fac-img img-1" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop')` }}></div>
              <div className="fac-img img-2" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')` }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Success <span className="text-primary">Stories</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card glass-card"
              >
                <div className="stars">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-primary" fill="var(--primary-color)" />
                  ))}
                </div>
                <p className="review-text">"{test.review}"</p>
                <h4 className="reviewer-name">- {test.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Start Your Fitness Journey Today</h2>
            <p>Join B6 Fitness 360 and transform your life.</p>
            <div className="cta-buttons">
              <Link to="/membership" className="btn btn-primary">Join Now</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
