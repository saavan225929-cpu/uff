import React, { useEffect } from 'react';
import { artworks } from '../data/artworks';
import ArtworkDetailView from '../components/ArtworkDetailView';

export default function MonaLisa() {
  const artwork = artworks.find(item => item.id === 'mona-lisa');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mona Lisa – Leonardo da Vinci | AURELIA Gallery";
  }, []);

  return <ArtworkDetailView artwork={artwork} />;
}
