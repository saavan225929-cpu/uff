import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Compass, 
  Heart, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Sparkles,
  Palette
} from 'lucide-react';

export default function Navbar() {
  const { user, logout, favorites } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/');
  };

  return (
    <header className={`gallery-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-mark">
            <Palette className="brand-icon" size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-name">AURELIA</span>
            <span className="brand-sub">FINE ART GALLERY</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Exhibition
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar-actions">
          {/* Favorites / Collection link */}
          <Link 
            to="/gallery?favorites=true" 
            className="action-pill action-favorites"
            title="Saved Masterpieces"
            onClick={closeMenu}
          >
            <Heart size={18} className="heart-icon" />
            <span className="favorites-badge">{favorites.length}</span>
          </Link>

          {/* User Account / Auth buttons */}
          {user ? (
            <div className="user-menu-wrapper">
              <button 
                className="user-profile-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                aria-expanded={userDropdownOpen}
              >
                <div className="user-avatar-initial">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="user-display-name">{user.name}</span>
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-header">
                    <p className="dropdown-name">{user.name}</p>
                    <p className="dropdown-email">{user.email}</p>
                    <span className="dropdown-role">{user.role || 'Gallery Member'}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link 
                    to="/gallery?favorites=true" 
                    className="dropdown-item"
                    onClick={() => { setUserDropdownOpen(false); }}
                  >
                    <Heart size={16} />
                    <span>My Curated List ({favorites.length})</span>
                  </Link>
                  <Link 
                    to="/gallery" 
                    className="dropdown-item"
                    onClick={() => { setUserDropdownOpen(false); }}
                  >
                    <Compass size={16} />
                    <span>Browse Collection</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button 
                    onClick={handleLogout}
                    className="dropdown-item text-danger"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons-group">
              <Link to="/login" className="nav-login-link">
                Sign In
              </Link>
              <Link to="/signup" className="nav-signup-btn">
                <span>Join Patron</span>
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Art Display & Gallery
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About The Gallery
            </NavLink>
            
            <div className="mobile-divider"></div>

            {/* Individual Masterpiece Shortcuts */}
            <div className="mobile-masterpieces-title">Featured Masterpieces</div>
            <Link to="/artwork/mona-lisa" className="mobile-sublink" onClick={closeMenu}>
              Mona Lisa — Leonardo da Vinci
            </Link>
            <Link to="/artwork/starry-night" className="mobile-sublink" onClick={closeMenu}>
              The Starry Night — Vincent van Gogh
            </Link>
            <Link to="/artwork/persistence-of-memory" className="mobile-sublink" onClick={closeMenu}>
              The Persistence of Memory — Salvador Dalí
            </Link>
            <Link to="/artwork/the-scream" className="mobile-sublink" onClick={closeMenu}>
              The Scream — Edvard Munch
            </Link>
            <Link to="/artwork/girl-with-pearl-earring" className="mobile-sublink" onClick={closeMenu}>
              Girl with a Pearl Earring — Vermeer
            </Link>

            <div className="mobile-divider"></div>

            {user ? (
              <div className="mobile-user-section">
                <div className="mobile-user-info">
                  <div className="user-avatar-initial">{user.name.charAt(0)}</div>
                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                  </div>
                </div>
                <button onClick={handleLogout} className="mobile-logout-btn">
                  <LogOut size={18} /> Sign Out
                </button>
              </div>
            ) : (
              <div className="mobile-auth-actions">
                <Link to="/login" className="mobile-btn-outline" onClick={closeMenu}>
                  Sign In
                </Link>
                <Link to="/signup" className="mobile-btn-solid" onClick={closeMenu}>
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
