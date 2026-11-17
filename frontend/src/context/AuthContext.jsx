import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('aurelia_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('aurelia_favorites');
      return saved ? JSON.parse(saved) : ['mona-lisa', 'starry-night'];
    } catch {
      return ['mona-lisa', 'starry-night'];
    }
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('aurelia_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('aurelia_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('aurelia_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const login = (email, password) => {
    // Check if user exists in registered users or authenticate demo
    const registeredUsers = JSON.parse(localStorage.getItem('aurelia_registered_users') || '[]');
    const foundUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    const loggedUser = {
      name: foundUser ? foundUser.name : (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)),
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Member Patron',
      joinedDate: foundUser?.joinedDate || 'November 2024'
    };

    setUser(loggedUser);
    showToast(`Welcome back, ${loggedUser.name}!`);
    return { success: true };
  };

  const signup = (name, email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem('aurelia_registered_users') || '[]');
    if (registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email address already exists.' };
    }

    const newUser = {
      name,
      email,
      password,
      joinedDate: 'November 2024',
      role: 'Gallery Member'
    };

    registeredUsers.push(newUser);
    localStorage.setItem('aurelia_registered_users', JSON.stringify(registeredUsers));

    const loggedUser = {
      name: newUser.name,
      email: newUser.email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Gallery Member',
      joinedDate: 'November 2024'
    };

    setUser(loggedUser);
    showToast(`Account created successfully! Welcome to Aurelia, ${name}.`);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    showToast('You have been signed out.');
  };

  const toggleFavorite = (artworkId) => {
    setFavorites(prev => {
      const exists = prev.includes(artworkId);
      const updated = exists ? prev.filter(id => id !== artworkId) : [...prev, artworkId];
      showToast(exists ? 'Removed from your curations' : 'Added to your curations ✨');
      return updated;
    });
  };

  const isFavorite = (artworkId) => favorites.includes(artworkId);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      favorites,
      toggleFavorite,
      isFavorite,
      toast,
      showToast
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
