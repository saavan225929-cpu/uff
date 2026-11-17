import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { artworks } from '../data/artworks';
import ArtworkDetailView from '../components/ArtworkDetailView';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = artworks.find(item => item.id === id || item.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (artwork) {
      document.title = `${artwork.title} – ${artwork.artist} | AURELIA Gallery`;
    }
  }, [artwork]);

  if (!artwork) {
    return <Navigate to="/gallery" replace />;
  }

  return <ArtworkDetailView artwork={artwork} />;
}
