import React from 'react';
import './HomePage.css';
import cctvHero from '../../assets/cctv_hero.png';

interface HomePageProps {
  onNavigate: (view: 'home' | 'products' | 'about' | 'cart' | 'favorites' | 'contact') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-chip">PROFESSIONAL SECURITY SOLUTIONS</span>
          <h1 className="hero-title">Advanced CCTV & Surveillance Systems</h1>
          <p className="hero-description">
            Professional-grade security hardware and AI-driven monitoring for total peace of mind.
            Protecting your assets with next-generation automated intelligence.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => onNavigate('products')}>
              View Our Products
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('about')}>
              About Us
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img src={cctvHero} alt="CCTV Monitoring" className="hero-img" />
            <div className="hero-kpis">
              <div className="hero-kpi">
                <strong>99.998%</strong>
                <span>SYSTEM PERFORMANCE</span>
              </div>
              <div className="hero-kpi">
                <strong>24/7</strong>
                <span>ACTIVE MONITORING</span>
              </div>
              <div className="hero-kpi">
                <strong>Global</strong>
                <span>SUPPORT NETWORK</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="category-section" id="products">
        <div className="category-header">
          <div>
            <h2>Shop by Category</h2>
            <p>Precision engineered components for every security architecture.</p>
          </div>
          <button className="category-link" onClick={() => onNavigate('products')}>
            See All Categories →
          </button>
        </div>
        <div className="card-grid-top">
          <div className="category-card card-large" onClick={() => onNavigate('products')}>
            <div className="card-heading"><span>PROFESSIONAL CAMERAS</span></div>
            <p>4K resolution, night vision, and thermal sensing capabilities for high-security environments.</p>
            <span className="card-cta">Explore →</span>
          </div>
          <div className="category-card card-large" onClick={() => onNavigate('products')}>
            <div className="card-heading"><span>DVR & NVR UNITS</span></div>
            <p>Edge-recording solutions with massive storage capacity and cloud sync.</p>
            <span className="card-cta">Explore →</span>
          </div>
        </div>
        <div className="card-grid-bottom">
          <div className="category-card card-small" onClick={() => onNavigate('products')}>
            <div className="card-heading"><span>NETWORKING HARDWARE</span></div>
            <p>High-speed switches and PoE injectors for stable transmission.</p>
            <span className="card-cta">Explore →</span>
          </div>
          <div className="category-card card-small" onClick={() => onNavigate('products')}>
            <div className="card-heading"><span>POWER SUPPLY</span></div>
            <p>Uninterrupted power backup and distribution units for uptime.</p>
            <span className="card-cta">Explore →</span>
          </div>
          <div className="category-card card-small" onClick={() => onNavigate('products')}>
            <div className="card-heading"><span>ACCESSORIES</span></div>
            <p>Mounts, cables, connectors, and specialized installation tools.</p>
            <span className="card-cta">Explore →</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-left">
          <span className="cta-chip">Secure Your Premises Today</span>
          <h2>Our security engineers provide end-to-end consulting for residential, commercial, and industrial sites.</h2>
          <p>Get a tailored blueprint that ensures maximum coverage and zero blind spots.</p>
          <button className="btn-primary btn-cta" onClick={() => onNavigate('contact')}>
            Contact Security Experts
          </button>
          <div className="expert-banner">12 Active Experts Online</div>
        </div>
        <div className="cta-right">
          <div className="cta-visual" />
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>TN Automation</h3>
            <p>Leading provider of automated security solutions and professional surveillance hardware since 2012.</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#services">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#support">Support Center</a>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#">CCTV Cameras</a>
            <a href="#">Storage Solutions</a>
            <a href="#">Networking</a>
            <a href="#">AI Analytics</a>
            <a href="#">New Arrivals</a>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>33F, Sai Complex, Erode - 638003</p>
            <p>9876543210</p>
            <p>tnautomation@yahoo.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TN Automation. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
