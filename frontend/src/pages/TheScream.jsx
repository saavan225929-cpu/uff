import React, { useEffect } from 'react';
import { artworks } from '../data/artworks';
import ArtworkDetailView from '../components/ArtworkDetailView';

export default function TheScream() {
  const artwork = artworks.find(item => item.id === 'the-scream');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Scream – Edvard Munch | AURELIA Gallery";
  }, []);

  return <ArtworkDetailView artwork={artwork} />;
}
