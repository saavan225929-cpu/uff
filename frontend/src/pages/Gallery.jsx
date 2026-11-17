import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  Heart, 
  Sparkles, 
  Compass, 
  X, 
  Grid3X3,
  Filter
} from 'lucide-react';
import { artworks, categories } from '../data/artworks';
import ArtworkCard from '../components/ArtworkCard';
import { useAuth } from '../context/AuthContext';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites } = useAuth();

  const initialCategory = searchParams.get('category') || 'All';
  const showFavoritesOnly = searchParams.get('favorites') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [favoritesFilter, setFavoritesFilter] = useState(showFavoritesOnly);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Art Display & Permanent Collection | AURELIA Gallery";
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    const favParam = searchParams.get('favorites');
    if (favParam === 'true') {
      setFavoritesFilter(true);
    }
  }, [searchParams]);

  // Filter and sort logic
  const filteredArtworks = useMemo(() => {
    let list = [...artworks];

    // Filter by favorites
    if (favoritesFilter) {
      list = list.filter(item => favorites.includes(item.id));
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      list = list.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.artist.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.year.toLowerCase().includes(q) ||
        item.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Sorting
    list.sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'year-asc') {
        const yearA = parseInt(a.year) || 0;
        const yearB = parseInt(b.year) || 0;
        return yearA - yearB;
      }
      if (sortBy === 'year-desc') {
        const yearA = parseInt(a.year) || 0;
        const yearB = parseInt(b.year) || 0;
        return yearB - yearA;
      }
      // 'featured'
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    return list;
  }, [selectedCategory, searchQuery, sortBy, favoritesFilter, favorites]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleFavoritesToggle = (active) => {
    setFavoritesFilter(active);
    if (active) {
      searchParams.set('favorites', 'true');
    } else {
      searchParams.delete('favorites');
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setFavoritesFilter(false);
    setSearchParams({});
  };

  return (
    <div className="gallery-display-page">
      {/* Header Banner */}
      <section className="gallery-header-banner">
        <div className="gallery-header-content">
          <div className="curator-badge">
            <Sparkles size={14} className="text-gold" />
            <span>Permanent Collection & Virtual Salons</span>
          </div>
          <h1 className="gallery-page-title">The Masterpiece Display</h1>
          <p className="gallery-page-subtitle">
            Immerse yourself in six centuries of artistic genius. From Renaissance realism to 20th-century Surrealism, explore authenticated digital exhibitions of humankind's greatest masterworks.
          </p>
        </div>
      </section>

      {/* Control Bar: Search, Category Pills, View Mode, Sorting */}
      <section className="gallery-controls-section">
        <div className="controls-container">
          {/* Top Search & Filter Strip */}
          <div className="search-sort-row">
            {/* Search Input */}
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search by artwork title, artist, movement, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gallery-search-input"
                aria-label="Search artworks"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* View Mode & Filter Tabs (All vs Saved) */}
            <div className="filter-mode-tabs">
              <button 
                onClick={() => handleFavoritesToggle(false)}
                className={`mode-tab ${!favoritesFilter ? 'active' : ''}`}
              >
                <Grid3X3 size={16} />
                <span>All Artworks ({artworks.length})</span>
              </button>
              <button 
                onClick={() => handleFavoritesToggle(true)}
                className={`mode-tab ${favoritesFilter ? 'active' : ''}`}
              >
                <Heart size={16} fill={favoritesFilter ? "#C5A059" : "none"} />
                <span>My Curated ({favorites.length})</span>
              </button>
            </div>

            {/* Sorting Dropdown */}
            <div className="sort-dropdown-wrapper">
              <label htmlFor="sort-select" className="sort-label">Sort By:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="gallery-sort-select"
              >
                <option value="featured">Curator’s Highlights</option>
                <option value="year-asc">Chronological: Oldest First</option>
                <option value="year-desc">Chronological: Most Recent</option>
                <option value="title-asc">Alphabetical: Title A – Z</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills-scroll">
            <div className="category-pills-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Status & Count */}
          <div className="active-filter-status">
            <div className="status-text">
              Showing <strong>{filteredArtworks.length}</strong> {filteredArtworks.length === 1 ? 'Masterpiece' : 'Masterpieces'}
              {selectedCategory !== 'All' && <span> in <em>{selectedCategory}</em></span>}
              {favoritesFilter && <span> (Curated Favorites)</span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </div>

            {(selectedCategory !== 'All' || searchQuery || favoritesFilter) && (
              <button onClick={clearAllFilters} className="clear-filters-link">
                Reset all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Artwork Grid Collection */}
      <section className="gallery-grid-section">
        <div className="gallery-grid-container">
          {filteredArtworks.length > 0 ? (
            <div className="artworks-grid">
              {filteredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          ) : (
            <div className="empty-gallery-state">
              <div className="empty-icon-wrap">
                <Compass size={40} className="text-gold" />
              </div>
              <h3 className="empty-title">No Masterpieces Found</h3>
              <p className="empty-desc">
                {favoritesFilter 
                  ? "You have not curated any artworks yet. Click the heart icon on any masterpiece card to save it here."
                  : "We couldn't find any artwork matching your current search or category filter."}
              </p>
              <button onClick={clearAllFilters} className="btn-gold-solid">
                Reset Filters & View All
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
