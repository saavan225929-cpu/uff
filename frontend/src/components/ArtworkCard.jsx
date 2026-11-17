import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ArtworkCard({ artwork }) {
  const { toggleFavorite, isFavorite } = useAuth();
  const [imageError, setImageError] = useState(false);
  const favorited = isFavorite(artwork.id);

  // Fallback if image fails to load
  const fallbackUrl = artwork.fallbackImage || 
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80";

  return (
    <article className="artwork-card">
      {/* Image Container with Framing and Hover Zoom */}
      <div className="artwork-card-frame">
        <Link to={artwork.route} className="artwork-image-link" tabIndex={-1}>
          <img
            src={imageError ? fallbackUrl : artwork.image}
            alt={`${artwork.title} by ${artwork.artist}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="artwork-image"
          />
          <div className="artwork-overlay">
            <span className="view-curator-prompt">
              Explore Masterpiece <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>

        {/* Category Badge */}
        <span className="artwork-category-badge">
          {artwork.category}
        </span>

        {/* Favorite / Bookmark Action */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(artwork.id);
          }}
          className={`artwork-fav-btn ${favorited ? 'active' : ''}`}
          aria-label={favorited ? `Remove ${artwork.title} from favorites` : `Save ${artwork.title} to favorites`}
          title={favorited ? "Saved in your curations" : "Save to your curations"}
        >
          <Heart size={18} fill={favorited ? "#C5A059" : "none"} color={favorited ? "#C5A059" : "currentColor"} />
        </button>
      </div>

      {/* Artwork Metadata */}
      <div className="artwork-card-info">
        <div className="artwork-header-row">
          <h3 className="artwork-card-title">
            <Link to={artwork.route} title={artwork.title}>
              {artwork.title}
            </Link>
          </h3>
          <span className="artwork-year">{artwork.year}</span>
        </div>

        <p className="artwork-artist">
          <span className="artist-by">By</span> {artwork.artist}
        </p>

        {artwork.location && (
          <div className="artwork-card-location">
            <MapPin size={13} className="text-gold" />
            <span>{artwork.location.split(',')[0]}</span>
          </div>
        )}

        <div className="artwork-card-footer">
          <Link to={artwork.route} className="btn-view-details">
            <span>View Details</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
