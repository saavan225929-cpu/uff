import React, { useEffect } from 'react';
import { artworks } from '../data/artworks';
import ArtworkDetailView from '../components/ArtworkDetailView';

export default function StarryNight() {
  const artwork = artworks.find(item => item.id === 'starry-night');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Starry Night – Vincent van Gogh | AURELIA Gallery";
  }, []);

  return <ArtworkDetailView artwork={artwork} />;
}
