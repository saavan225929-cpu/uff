import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

// 5 Dedicated Masterpiece Pages
import MonaLisa from './pages/MonaLisa';
import StarryNight from './pages/StarryNight';
import PersistenceOfMemory from './pages/PersistenceOfMemory';
import TheScream from './pages/TheScream';
import GirlWithPearlEarring from './pages/GirlWithPearlEarring';

// General Masterpiece Detail
import ArtworkDetail from './pages/ArtworkDetail';

export default function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="gallery-app">
      {/* Universal Toast Notifications */}
      <Toast />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 5 Specific Individual Artwork Pages */}
          <Route path="/artwork/mona-lisa" element={<MonaLisa />} />
          <Route path="/mona-lisa" element={<MonaLisa />} />

          <Route path="/artwork/starry-night" element={<StarryNight />} />
          <Route path="/starry-night" element={<StarryNight />} />

          <Route path="/artwork/persistence-of-memory" element={<PersistenceOfMemory />} />
          <Route path="/persistence-of-memory" element={<PersistenceOfMemory />} />

          <Route path="/artwork/the-scream" element={<TheScream />} />
          <Route path="/the-scream" element={<TheScream />} />

          <Route path="/artwork/girl-with-pearl-earring" element={<GirlWithPearlEarring />} />
          <Route path="/girl-with-pearl-earring" element={<GirlWithPearlEarring />} />

          {/* Dynamic Route for Other Collection Items */}
          <Route path="/artwork/:id" element={<ArtworkDetail />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Museum Footer */}
      {!isAuthPage && <Footer />}
    </div>
  );
}
