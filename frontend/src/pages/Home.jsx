import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Award, 
  Volume2, 
  Palette, 
  Layers, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { artworks, categories } from '../data/artworks';
import ArtworkCard from '../components/ArtworkCard';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AURELIA | Grand Museum & Online Art Gallery";
  }, []);

  // Filter 4 featured artworks for the highlights section
  const featuredArtworks = artworks.filter(item => item.featured).slice(0, 4);

  // The 5 iconic masterworks
  const iconicFive = [
    { id: 'mona-lisa', title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: '1503', route: '/artwork/mona-lisa', tag: 'Renaissance' },
    { id: 'starry-night', title: 'The Starry Night', artist: 'Vincent van Gogh', year: '1889', route: '/artwork/starry-night', tag: 'Post-Impressionism' },
    { id: 'persistence-of-memory', title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: '1931', route: '/artwork/persistence-of-memory', tag: 'Surrealism' },
    { id: 'the-scream', title: 'The Scream', artist: 'Edvard Munch', year: '1893', route: '/artwork/the-scream', tag: 'Expressionism' },
    { id: 'girl-with-pearl-earring', title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', year: '1665', route: '/artwork/girl-with-pearl-earring', tag: 'Baroque' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-background-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-crest">
            <span className="crest-line"></span>
            <span className="crest-text">✦ EST. 1892 • THE VIRTUAL COLLECTION ✦</span>
            <span className="crest-line"></span>
          </div>

          <h1 className="hero-headline">
            Where Human Genius <br />
            <span className="gold-italic">Echoes Through Eternity</span>
          </h1>

          <p className="hero-subtext">
            Welcome to <strong>AURELIA</strong>, an internationally curated digital sanctuary housing humanity's most transcendent artistic achievements. Explore masterpieces from Leonardo da Vinci, Vincent van Gogh, Salvador Dalí, and world masters in breath-taking fidelity.
          </p>

          <div className="hero-action-buttons">
            <Link to="/gallery" className="btn-hero-primary">
              <span>Explore Gallery Exhibition</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-hero-secondary">
              <span>Our Curatorial Mission</span>
            </Link>
          </div>

          {/* Museum Quick Stats Bar */}
          <div className="hero-stats-bar">
            <div className="stat-unit">
              <span className="stat-number">6+</span>
              <span className="stat-label">Art Movements</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <span className="stat-number">100%</span>
              <span className="stat-label">Public Domain Heritage</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <span className="stat-number">Ultra-HD</span>
              <span className="stat-label">Restored Canvases</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Global Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Five Dedicated Masterpiece Portals Strip */}
      <section className="iconic-strip-section">
        <div className="iconic-strip-container">
          <div className="iconic-strip-header">
            <span className="sub-badge">Hall of Masterpieces</span>
            <h2 className="iconic-strip-title">Five Legendary Works of Western Art</h2>
            <p className="iconic-strip-subtitle">Direct access to our dedicated deep-dive exhibition chambers</p>
          </div>

          <div className="iconic-strip-grid">
            {iconicFive.map((item, idx) => (
              <Link key={item.id} to={item.route} className="iconic-chamber-card">
                <div className="chamber-number">0{idx + 1}</div>
                <div className="chamber-info">
                  <span className="chamber-category">{item.tag}</span>
                  <h3 className="chamber-title">{item.title}</h3>
                  <p className="chamber-artist">{item.artist} • {item.year}</p>
                </div>
                <div className="chamber-arrow">
                  <ChevronRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="featured-artworks-section">
        <div className="featured-container">
          <div className="section-head-centered">
            <span className="sub-badge">
              <Sparkles size={14} className="text-gold" />
              Curator’s Selection
            </span>
            <h2 className="section-title">Featured Highlights</h2>
            <div className="gold-ornament-divider">✦ ✦ ✦</div>
            <p className="section-subtitle">
              Pivotal milestones in visual culture hand-selected by our advisory board for their enduring composition, emotional gravity, and technical daring.
            </p>
          </div>

          <div className="artworks-grid">
            {featuredArtworks.map(artwork => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>

          <div className="featured-footer-cta">
            <Link to="/gallery" className="btn-gold-solid">
              <span>View All Masterpieces in Collection</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Art Categories Section */}
      <section className="categories-showcase-section">
        <div className="categories-container">
          <div className="section-head-centered">
            <span className="sub-badge">Chambers of Style</span>
            <h2 className="section-title">Popular Art Categories</h2>
            <div className="gold-ornament-divider">✦ ✦ ✦</div>
            <p className="section-subtitle">
              Traverse the epochal stylistic movements that redefined human visual language across the centuries.
            </p>
          </div>

          <div className="categories-cards-grid">
            <Link to="/gallery?category=Renaissance" className="movement-card">
              <div className="movement-card-bg movement-renaissance"></div>
              <div className="movement-card-content">
                <span className="movement-era">14th – 17th Century</span>
                <h3 className="movement-name">High Renaissance</h3>
                <p className="movement-summary">
                  A rebirth of classical antiquity, anatomical precision, linear perspective, and sublime human harmony spearheaded by da Vinci, Botticelli, and Michelangelo.
                </p>
                <span className="movement-explore">Explore Category &rarr;</span>
              </div>
            </Link>

            <Link to="/gallery?category=Post-Impressionism" className="movement-card">
              <div className="movement-card-bg movement-post-imp"></div>
              <div className="movement-card-content">
                <span className="movement-era">Late 19th Century</span>
                <h3 className="movement-name">Post-Impressionism</h3>
                <p className="movement-summary">
                  Transcending natural light to channel subjective emotional states, vibrant structural color, and psychological symbolism, led by Vincent van Gogh and Cézanne.
                </p>
                <span className="movement-explore">Explore Category &rarr;</span>
              </div>
            </Link>

            <Link to="/gallery?category=Surrealism" className="movement-card">
              <div className="movement-card-bg movement-surrealism"></div>
              <div className="movement-card-content">
                <span className="movement-era">Early 20th Century</span>
                <h3 className="movement-name">Surrealism</h3>
                <p className="movement-summary">
                  Liberating the unconscious mind through dream logic, irrational juxtapositions, and the paranoiac-critical vision of Salvador Dalí and René Magritte.
                </p>
                <span className="movement-explore">Explore Category &rarr;</span>
              </div>
            </Link>

            <Link to="/gallery?category=Baroque" className="movement-card">
              <div className="movement-card-bg movement-baroque"></div>
              <div className="movement-card-content">
                <span className="movement-era">17th – 18th Century</span>
                <h3 className="movement-name">Baroque</h3>
                <p className="movement-summary">
                  Grand theatricality, profound psychological chiaroscuro, and breathtaking optical realism exemplified by Vermeer, Rembrandt, and Caravaggio.
                </p>
                <span className="movement-explore">Explore Category &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Museum Experience Highlights */}
      <section className="experience-highlight-section">
        <div className="experience-container">
          <div className="experience-grid">
            <div className="experience-text-col">
              <span className="sub-badge">The Digital Museum Advantage</span>
              <h2 className="experience-title">A Curated Gallery Built for True Appreciation</h2>
              <p className="experience-paragraph">
                Traditional museums separate you from canvases by ropes, crowded galleries, and glass glare. <strong>AURELIA</strong> brings museum-quality fine art to your screen with granular historical documentation, high-resolution zoom, and synchronized scholarly commentary.
              </p>

              <div className="experience-points-list">
                <div className="point-item">
                  <div className="point-icon"><Volume2 size={20} /></div>
                  <div>
                    <h4>Interactive Audio Tours</h4>
                    <p>Listen to scholarly curator audio guides covering compositional geometry and historical context for every masterwork.</p>
                  </div>
                </div>

                <div className="point-item">
                  <div className="point-icon"><Layers size={20} /></div>
                  <div>
                    <h4>Similar Masterpiece Connections</h4>
                    <p>Discover contextual relationships between works of the same era, medium, and aesthetic tradition.</p>
                  </div>
                </div>

                <div className="point-item">
                  <div className="point-icon"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Preserved Public Heritage</h4>
                    <p>Committed to open culture, educational accessibility, and democratizing art history for scholars and enthusiasts worldwide.</p>
                  </div>
                </div>
              </div>

              <div className="experience-cta-wrap">
                <Link to="/gallery" className="btn-gold-solid">
                  <span>Enter the Exhibition</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="experience-quote-col">
              <div className="grand-quote-card">
                <div className="quote-decorative-mark">“</div>
                <blockquote className="master-quote">
                  Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.
                </blockquote>
                <div className="quote-author-row">
                  <div className="author-avatar-leonardo"></div>
                  <div>
                    <div className="author-name">Leonardo da Vinci</div>
                    <div className="author-role">Renaissance Polymath & Painter (1452 – 1519)</div>
                  </div>
                </div>
              </div>

              <div className="grand-quote-card quote-secondary">
                <div className="quote-decorative-mark">“</div>
                <blockquote className="master-quote">
                  I feel that there is nothing more truly artistic than to love people.
                </blockquote>
                <div className="quote-author-row">
                  <div className="author-avatar-vangogh"></div>
                  <div>
                    <div className="author-name">Vincent van Gogh</div>
                    <div className="author-role">Post-Impressionist Visionary (1853 – 1890)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patron Invitation CTA */}
      <section className="patron-cta-section">
        <div className="patron-cta-container">
          <div className="patron-cta-box">
            <span className="sub-badge text-gold">Exclusive Membership</span>
            <h2 className="patron-cta-heading">Join the Aurelia Circle of Patrons</h2>
            <p className="patron-cta-text">
              Create your complimentary member profile to curate personal galleries, save favorite masterworks, and gain priority invitations to digital salon discussions.
            </p>
            <div className="patron-cta-buttons">
              <Link to="/signup" className="btn-hero-primary">
                <span>Create Patron Account</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-hero-secondary">
                <span>Learn About Our Foundation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
