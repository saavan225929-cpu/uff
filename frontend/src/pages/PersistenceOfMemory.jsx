import React, { useEffect } from 'react';
import { artworks } from '../data/artworks';
import ArtworkDetailView from '../components/ArtworkDetailView';

export default function PersistenceOfMemory() {
  const artwork = artworks.find(item => item.id === 'persistence-of-memory');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Persistence of Memory – Salvador Dalí | AURELIA Gallery";
  }, []);

  return <ArtworkDetailView artwork={artwork} />;
}
