import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Users, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  Award,
  Globe2,
  Send
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function About() {
  const { showToast } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Curatorial Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About The Museum | AURELIA Fine Art Gallery";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      showToast('Thank you! Your message has been dispatched to our curatorial board.');
      setFormData({
        name: '',
        email: '',
        subject: 'General Curatorial Inquiry',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const curators = [
    {
      name: "Dr. Henriette de Montcalm",
      role: "Senior Chief Curator",
      specialty: "High Renaissance & Florentine Masters",
      bio: "Former Fellow of the École du Louvre, leading scholarly research on Leonardo's sfumato and Botticelli's mythological compositions for over 22 years.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Prof. Alistair Sterling",
      role: "Director of Modernist Studies",
      specialty: "Post-Impressionism & Expressionism",
      bio: "Author of 'Color and Existential Anguish', focusing on the mental states and pigment technologies of Van Gogh, Munch, and the early European Avant-Garde.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sofia Calderón, PhD",
      role: "Head of Digital Preservation",
      specialty: "Surrealism & Dutch Golden Age",
      bio: "Pioneering multispectral color preservation techniques that bring public domain masterpieces to global screens with zero degradation in chromatic truth.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="curator-badge">
            <Sparkles size={14} className="text-gold" />
            <span>Founded in 1892 • Digitally Reborn</span>
          </div>
          <h1 className="about-hero-title">Custodians of Human Expression</h1>
          <p className="about-hero-subtitle">
            Aurelia Fine Art Gallery is an international institution committed to the scholarly preservation, philosophical study, and worldwide democratization of historic fine art masterpieces.
          </p>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="about-mission-section">
        <div className="about-container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-icon-wrap">
                <Target size={28} className="text-gold" />
              </div>
              <h2 className="mission-card-title">Our Sacred Purpose</h2>
              <p className="mission-card-text">
                Fine art is not a luxury for the privileged few; it is the visual diary of the human soul. Our mission is to dismantle geographical, socioeconomic, and institutional barriers by providing museum-grade digital access to mankind's supreme aesthetic achievements.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon-wrap">
                <Globe2 size={28} className="text-gold" />
              </div>
              <h2 className="mission-card-title">Open Culture Heritage</h2>
              <p className="mission-card-text">
                Every masterpiece housed in our digital salon belongs to the global public domain. We utilize uncompressed scans, authentic provenance documentation, and scholarly historical annotations to preserve these works against decay and cultural amnesia.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon-wrap">
                <BookOpen size={28} className="text-gold" />
              </div>
              <h2 className="mission-card-title">Deep Art Literacy</h2>
              <p className="mission-card-text">
                Rather than treating artworks as passive decorative items, Aurelia equips patrons with analytical frameworks—examining brushstroke impasto, symbolic iconography, chiaroscuro lighting, and social conditions surrounding each canvas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History and Evolution Narrative */}
      <section className="about-narrative-section">
        <div className="about-container">
          <div className="narrative-split">
            <div className="narrative-text">
              <span className="sub-badge">Centuries of Heritage</span>
              <h2 className="narrative-heading">From a Grand Salon to a Global Digital Sanctuary</h2>
              <p className="narrative-body">
                Established in Paris in 1892 by the Aurelia Cultural Trust, the gallery initially served as an intimate salon where scholars debated the tectonic shift from academic Neoclassicism to the burgeoning revolutions of Impressionism and Modernism.
              </p>
              <p className="narrative-body">
                Over the past century, as the world moved into the digital epoch, Aurelia spearheaded the transition toward virtual exhibitions. Today, visitors from Tokyo to Toronto, from São Paulo to Sydney can examine Leonardo's enigmatic sfumato and Van Gogh's turbulent celestial vortexes as if standing alone before the original easel in quiet reflection.
              </p>

              <div className="narrative-stats">
                <div className="stat-box">
                  <span className="stat-big">130+</span>
                  <span className="stat-desc">Years of Institutional Heritage</span>
                </div>
                <div className="stat-box">
                  <span className="stat-big">180+</span>
                  <span className="stat-desc">Countries Reached Annually</span>
                </div>
                <div className="stat-box">
                  <span className="stat-big">100%</span>
                  <span className="stat-desc">Scholarly Verified Metadata</span>
                </div>
              </div>
            </div>

            <div className="narrative-visual">
              <div className="curator-framed-image">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80"
                  alt="Historic museum grand gallery interior"
                  className="historic-museum-photo"
                />
                <div className="image-gold-border"></div>
                <div className="image-caption">
                  Palais des Beaux-Arts, Paris — The historic architectural home of the Aurelia Permanent Trust.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curatorial Board */}
      <section className="curators-section">
        <div className="about-container">
          <div className="section-head-centered">
            <span className="sub-badge">Scholarly Leadership</span>
            <h2 className="section-title">The Curatorial Board</h2>
            <div className="gold-ornament-divider">✦ ✦ ✦</div>
            <p className="section-subtitle">
              Meet the art historians, conservators, and researchers responsible for contextualizing every masterpiece in our digital salons.
            </p>
          </div>

          <div className="curators-grid">
            {curators.map((curator, idx) => (
              <div key={idx} className="curator-card">
                <div className="curator-avatar-wrap">
                  <img src={curator.avatar} alt={curator.name} className="curator-avatar-img" />
                </div>
                <div className="curator-info">
                  <h3 className="curator-name">{curator.name}</h3>
                  <div className="curator-role-tag">{curator.role}</div>
                  <div className="curator-specialty">Focus: {curator.specialty}</div>
                  <p className="curator-bio">{curator.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Curatorial Inquiry Section */}
      <section className="about-contact-section">
        <div className="about-container">
          <div className="contact-split-grid">
            {/* Left: Contact Info & Museum Visiting Details */}
            <div className="contact-details-col">
              <span className="sub-badge">Connect With Us</span>
              <h2 className="contact-details-heading">Inquiries & Curatorial Office</h2>
              <p className="contact-details-desc">
                Whether you are an academic researcher requesting provenance archives, an educator planning a virtual class visit, or a patron seeking membership assistance, our curatorial staff is at your disposal.
              </p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon"><MapPin size={22} className="text-gold" /></div>
                  <div>
                    <h4>Museum Location</h4>
                    <p>Palais des Beaux-Arts<br/>14 Avenue Montaigne, 75008 Paris, France</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Clock size={22} className="text-gold" /></div>
                  <div>
                    <h4>Virtual & Physical Hours</h4>
                    <p>Digital Galleries: Always Accessible (24/7)<br/>Curatorial Inquiries: Mon – Fri, 09:00 – 17:30 CET</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Mail size={22} className="text-gold" /></div>
                  <div>
                    <h4>Electronic Correspondence</h4>
                    <p>Curatorial: curator@aurelia-gallery.art<br/>Membership: patrons@aurelia-gallery.art</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Phone size={22} className="text-gold" /></div>
                  <div>
                    <h4>Direct Telephone</h4>
                    <p>+33 (0)1 42 68 55 00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h3 className="form-card-title">Send a Curatorial Message</h3>
                <p className="form-card-desc">
                  Our academic correspondence team responds to verified inquiries within 24 business hours.
                </p>

                {submitted ? (
                  <div className="inquiry-success-box">
                    <CheckCircle size={36} className="text-gold" />
                    <h4>Message Dispatched</h4>
                    <p>
                      Your transmission has been logged with the Curatorial Office. A senior researcher will review your correspondence shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="inquiry-form">
                    <div className="form-group">
                      <label className="form-label">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Dr. Arthur Pendelton"
                        className="auth-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="patron@institution.edu"
                        className="auth-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject of Correspondence</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="gallery-sort-select"
                        style={{ width: '100%', padding: '0.75rem 1rem' }}
                      >
                        <option value="General Curatorial Inquiry">General Curatorial Inquiry</option>
                        <option value="Academic & Educational Access">Academic & Educational Access</option>
                        <option value="Provenance & Historical Archives">Provenance & Historical Archives</option>
                        <option value="Patron Circle Membership">Patron Circle Membership</option>
                        <option value="Press & Media Relations">Press & Media Relations</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message / Inquiry Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Detail your inquiry, requested artwork references, or research questions here..."
                        className="auth-input"
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-auth-submit">
                      <span>Dispatch Message</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA to Gallery */}
      <section className="about-bottom-cta">
        <div className="about-container text-center">
          <h2 className="cta-heading">Ready to Experience the Collection?</h2>
          <p className="cta-sub">
            Walk among the timeless strokes of humanity's finest creators.
          </p>
          <Link to="/gallery" className="btn-hero-primary">
            <span>Explore All Masterpieces</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
