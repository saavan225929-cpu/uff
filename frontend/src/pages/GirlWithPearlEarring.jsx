import React, { useEffect } from 'react';
import { artworks } from '../data/artworks';
import ArtworkDetailView from '../components/ArtworkDetailView';

export default function GirlWithPearlEarring() {
  const artwork = artworks.find(item => item.id === 'girl-with-pearl-earring');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Girl with a Pearl Earring – Johannes Vermeer | AURELIA Gallery";
  }, []);

  return <ArtworkDetailView artwork={artwork} />;
}
