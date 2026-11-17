import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  Maximize, 
  Sparkles, 
  Info,
  Clock,
  Check
} from 'lucide-react';
import { artworks } from '../data/artworks';
import { useAuth } from '../context/AuthContext';
import ArtworkCard from './ArtworkCard';

export default function ArtworkDetailView({ artwork }) {
  const { toggleFavorite, isFavorite, showToast } = useAuth();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!artwork) {
    return (
      <div className="artwork-not-found-container">
        <h2>Artwork Not Found</h2>
        <p>The masterpiece you are looking for is currently in our vault or unavailable.</p>
        <Link to="/gallery" className="btn-gold-solid">
          <ArrowLeft size={16} /> Return to Exhibition
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(artwork.id);

  // Find 2-3 similar artworks
  const similarArtworks = artworks.filter(item => 
    item.id !== artwork.id && 
    (artwork.similarIds?.includes(item.id) || item.category === artwork.category)
  ).slice(0, 3);

  const fallbackUrl = artwork.fallbackImage || 
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80";

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    showToast('Exhibition URL copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleAudioGuideToggle = () => {
    setIsPlayingAudio(!isPlayingAudio);
    showToast(!isPlayingAudio ? `Simulated Audio Guide playing: "${artwork.title}" commentary` : 'Audio guide paused');
  };

  return (
    <div className="artwork-detail-page">
      {/* Lightbox / Zoom Modal */}
      {lightboxOpen && (
        <div className="artwork-lightbox" onClick={() => setLightboxOpen(false)}>
          <button 
            className="lightbox-close-btn"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close high-res viewer"
          >
            <X size={28} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageError ? fallbackUrl : artwork.image}
              alt={artwork.title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <strong>{artwork.title}</strong> — {artwork.artist} ({artwork.year})
            </div>
          </div>
        </div>
      )}

      {/* Top Back Navigation Bar */}
      <div className="detail-top-bar">
        <div className="detail-top-container">
          <Link to="/gallery" className="back-link">
            <ArrowLeft size={18} />
            <span>Back to Art Display & Gallery</span>
          </Link>
          <div className="detail-breadcrumbs">
            <span>Collections</span>
            <span className="crumb-sep">/</span>
            <span>{artwork.category}</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{artwork.title}</span>
          </div>
        </div>
      </div>

      {/* Main Artwork Showcase Section */}
      <section className="artwork-hero-showcase">
        <div className="artwork-hero-container">
          {/* Left / Top: Masterpiece Display with Zoom */}
          <div className="artwork-visual-container">
            <div className="masterpiece-frame">
              <img
                src={imageError ? fallbackUrl : artwork.image}
                alt={`${artwork.title} by ${artwork.artist}`}
                className="masterpiece-large-image"
                onError={() => setImageError(true)}
              />
              <button 
                className="zoom-overlay-btn"
                onClick={() => setLightboxOpen(true)}
                title="Expand to Full Resolution Viewer"
              >
                <Maximize2 size={18} />
                <span>Enlarge View</span>
              </button>
            </div>
            
            {/* Museum Location Tag */}
            {artwork.location && (
              <div className="current-location-tag">
                <MapPin size={16} className="text-gold" />
                <span>Currently on Exhibition: <strong>{artwork.location}</strong></span>
              </div>
            )}
          </div>

          {/* Right / Bottom: Artwork Information & Description */}
          <div className="artwork-meta-container">
            <div className="meta-category-badge">
              <Sparkles size={14} className="text-gold" />
              <span>{artwork.category} Masterpiece</span>
            </div>

            <h1 className="masterpiece-title">{artwork.title}</h1>

            <div className="artist-byline">
              <span className="artist-name">{artwork.artist}</span>
              {artwork.artistLife && <span className="artist-years">({artwork.artistLife})</span>}
            </div>

            <div className="creation-year-badge">
              <Calendar size={16} className="text-gold" />
              <span>Created in {artwork.year}</span>
            </div>

            {/* Quick Action Buttons */}
            <div className="artwork-action-strip">
              <button
                onClick={() => toggleFavorite(artwork.id)}
                className={`action-btn-pill ${favorited ? 'active' : ''}`}
              >
                <Heart size={18} fill={favorited ? "#C5A059" : "none"} color={favorited ? "#C5A059" : "currentColor"} />
                <span>{favorited ? 'Curated in Favorites' : 'Add to Curations'}</span>
              </button>

              <button
                onClick={handleShare}
                className="action-btn-pill"
                title="Share masterpiece"
              >
                {copied ? <Check size={18} className="text-gold" /> : <Share2 size={18} />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>

              <button
                onClick={handleAudioGuideToggle}
                className={`action-btn-pill audio-btn ${isPlayingAudio ? 'playing' : ''}`}
                title="Listen to Curatorial Audio Guide"
              >
                {isPlayingAudio ? <VolumeX size={18} /> : <Volume2 size={18} />}
                <span>{isPlayingAudio ? 'Pause Guide' : `Audio Tour (${artwork.audioDuration || '3 min'})`}</span>
              </button>
            </div>

            {/* Short Description */}
            <div className="artwork-description-block">
              <h3 className="section-small-title">Overview</h3>
              <p className="description-lead">{artwork.description}</p>
            </div>

            {/* Artwork Specifications Table */}
            <div className="artwork-spec-grid">
              <div className="spec-item">
                <div className="spec-label">
                  <Layers size={14} /> Medium
                </div>
                <div className="spec-value">{artwork.medium}</div>
              </div>

              <div className="spec-item">
                <div className="spec-label">
                  <Maximize size={14} /> Dimensions
                </div>
                <div className="spec-value">{artwork.dimensions}</div>
              </div>

              <div className="spec-item">
                <div className="spec-label">
                  <Calendar size={14} /> Period / Movement
                </div>
                <div className="spec-value">{artwork.category}</div>
              </div>

              <div className="spec-item">
                <div className="spec-label">
                  <MapPin size={14} /> Permanent Collection
                </div>
                <div className="spec-value">{artwork.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Background & Curatorial Deep Dive */}
      <section className="artwork-history-section">
        <div className="history-container">
          <div className="history-header">
            <span className="sub-badge">Curatorial Insights</span>
            <h2 className="history-heading">Historical Background & Artistic Legacy</h2>
            <div className="gold-ornament-divider">✦ ✦ ✦</div>
          </div>

          <div className="history-content-grid">
            <div className="history-card">
              <h3 className="history-card-title">Historical Genesis</h3>
              <p className="history-text">{artwork.history}</p>
            </div>

            <div className="history-card">
              <h3 className="history-card-title">Artistic Technique & Composition</h3>
              <p className="history-text">{artwork.analysis}</p>
            </div>
          </div>

          {artwork.curatorNotes && (
            <div className="curator-quote-box">
              <div className="curator-quote-icon">❝</div>
              <p className="curator-quote-text">{artwork.curatorNotes}</p>
              <div className="curator-signature">— Senior Curator, Department of European Paintings</div>
            </div>
          )}
        </div>
      </section>

      {/* 2–3 Similar Artworks from the Same Category */}
      {similarArtworks.length > 0 && (
        <section className="similar-artworks-section">
          <div className="similar-container">
            <div className="similar-header">
              <div>
                <span className="sub-badge">Echoes of the Movement</span>
                <h2 className="similar-title">Similar Works from {artwork.category}</h2>
              </div>
              <Link to="/gallery" className="view-more-link">
                View Entire Collection &rarr;
              </Link>
            </div>

            <div className="similar-artworks-grid">
              {similarArtworks.map(item => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Gallery Bottom CTA */}
      <div className="back-to-gallery-cta">
        <div className="cta-inner">
          <h3>Explore More Historic Treasures</h3>
          <p>Over a thousand years of visionary human expression awaits your discovery.</p>
          <Link to="/gallery" className="btn-gold-solid">
            <ArrowLeft size={16} /> Return to Art Display Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
