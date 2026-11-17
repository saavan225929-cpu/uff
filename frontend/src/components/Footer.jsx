import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="gallery-footer">
      {/* Top Banner */}
      <div className="footer-top-accent">
        <div className="accent-line"></div>
        <div className="accent-crest">
          <span>✦ AURELIA VIRTUAL SALON ✦</span>
        </div>
        <div className="accent-line"></div>
      </div>

      <div className="footer-main-container">
        {/* Column 1: Brand & Philosophy */}
        <div className="footer-column brand-col">
          <div className="footer-brand">
            <Palette className="footer-logo-icon" size={28} />
            <span className="footer-brand-title">AURELIA</span>
          </div>
          <p className="footer-motto">
            Dedicated to the immortal preservation and accessible celebration of civilization's greatest fine art treasures.
          </p>
          <div className="footer-visiting-hours">
            <Clock size={16} className="text-gold" />
            <div>
              <strong>Digital Galleries:</strong> Open 24/7 Worldwide<br/>
              <strong>Curator Hours:</strong> Mon – Sat, 10:00 – 18:00 CET
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-link">
              <Twitter size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-link">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home Salons</Link></li>
            <li><Link to="/gallery">All Collections</Link></li>
            <li><Link to="/about">About Aurelia</Link></li>
            <li><Link to="/login">Patron Access</Link></li>
            <li><Link to="/signup">Become a Member</Link></li>
          </ul>
        </div>

        {/* Column 3: The 5 Masterpieces */}
        <div className="footer-column">
          <h4 className="footer-heading">Iconic Masterpieces</h4>
          <ul className="footer-links-list">
            <li><Link to="/artwork/mona-lisa">Mona Lisa (da Vinci)</Link></li>
            <li><Link to="/artwork/starry-night">The Starry Night (van Gogh)</Link></li>
            <li><Link to="/artwork/persistence-of-memory">The Persistence of Memory (Dalí)</Link></li>
            <li><Link to="/artwork/the-scream">The Scream (Munch)</Link></li>
            <li><Link to="/artwork/girl-with-pearl-earring">Girl with a Pearl Earring (Vermeer)</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Contact */}
        <div className="footer-column contact-col">
          <h4 className="footer-heading">The Curator’s Dispatch</h4>
          <p className="newsletter-desc">
            Receive private exhibition invitations, art historical essays, and new acquisition alerts.
          </p>
          <form onSubmit={handleSubscribe} className="footer-newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                aria-label="Email for art dispatch newsletter"
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
          {subscribed && (
            <div className="subscribe-success-msg">
              <CheckCircle2 size={16} /> Thank you for subscribing to The Curator’s Dispatch.
            </div>
          )}

          <div className="footer-direct-contact">
            <div className="contact-item">
              <MapPin size={16} className="text-gold" />
              <span>Palais des Beaux-Arts, 14 Avenue Montaigne, 75008 Paris</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="text-gold" />
              <span>+33 (0)1 42 68 55 00</span>
            </div>
            <div className="contact-item">
              <Mail size={16} className="text-gold" />
              <span>curator@aurelia-gallery.art</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Aurelia Fine Art Gallery & Museum. All rights reserved. Built with React & Vite.
          </p>
          <div className="footer-bottom-badges">
            <span>High-Fidelity Virtual Preservation</span>
            <span className="dot-sep">•</span>
            <span>Public Domain Art Heritage</span>
            <span className="dot-sep">•</span>
            <span>Accessible Culture Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
