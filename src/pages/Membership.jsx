import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import './Membership.css';

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: billingCycle === 'monthly' ? "1,500" : "15,000",
      period: billingCycle === 'monthly' ? "/ month" : "/ year",
      desc: "Perfect for beginners starting their fitness journey.",
      features: [
        { name: "Access to Gym Floor", included: true },
        { name: "Basic Equipment Usage", included: true },
        { name: "General Trainer Guidance", included: true },
        { name: "Group Classes", included: false },
        { name: "Steam & Sauna Bath", included: false },
        { name: "Personalised Diet Plan", included: false }
      ],
      recommended: false
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: billingCycle === 'monthly' ? "2,500" : "25,000",
      period: billingCycle === 'monthly' ? "/ month" : "/ year",
      desc: "The full B6 Fitness 360 experience with recovery options.",
      features: [
        { name: "Access to Gym Floor", included: true },
        { name: "Premium Equipment Usage", included: true },
        { name: "General Trainer Guidance", included: true },
        { name: "Group Classes (Zumba/HIIT)", included: true },
        { name: "Steam & Sauna Bath", included: true },
        { name: "Personalised Diet Plan", included: false }
      ],
      recommended: true
    },
    {
      id: "elite",
      name: "Elite VIP",
      price: billingCycle === 'monthly' ? "5,000" : "50,000",
      period: billingCycle === 'monthly' ? "/ month" : "/ year",
      desc: "Ultimate luxury fitness with personal coaching.",
      features: [
        { name: "Access to Gym Floor", included: true },
        { name: "Premium Equipment Usage", included: true },
        { name: "Dedicated Personal Trainer", included: true },
        { name: "All Group Classes", included: true },
        { name: "All Recovery Options (Ice Bath)", included: true },
        { name: "Personalised Diet & Supplement Plan", included: true }
      ],
      recommended: false
    }
  ];

  return (
    <div className="membership-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop')` }}>
        <div className="header-overlay"></div>
        <div className="container header-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Membership <span className="text-primary">Plans</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Invest in yourself with our flexible pricing options.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={billingCycle === 'yearly'}
                onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              />
              <span className="slider round"></span>
            </label>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly <span className="save-badge">Save 16%</span></span>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`pricing-card glass-card ${plan.recommended ? 'recommended' : ''}`}
              >
                {plan.recommended && <div className="recommend-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <p>{plan.desc}</p>
                </div>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <div className="plan-features">
                  <ul>
                    {plan.features.map((feat, i) => (
                      <li key={i} className={!feat.included ? 'disabled' : ''}>
                        {feat.included ? <Check size={20} className="text-primary" /> : <X size={20} className="text-muted" />}
                        <span>{feat.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} w-100 mt-4`}>
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>

          <div className="offers-banner glass-card text-center mt-5">
            <h3>🔥 Special Student Offer 🔥</h3>
            <p>Show your valid student ID and get an additional <strong>10% OFF</strong> on all monthly and yearly plans.</p>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-3">Claim Offer</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
