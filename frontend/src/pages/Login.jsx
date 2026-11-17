import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  Palette, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // If already logged in, redirect to home or destination
  useEffect(() => {
    if (user) {
      navigate('/gallery');
    }
  }, [user, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Patron Sign In | AURELIA Fine Art Gallery";
  }, []);

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please provide a valid email format (e.g., patron@gallery.com).';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      navigate('/gallery');
    }, 600);
  };

  const handleDemoLogin = () => {
    setEmail('curator@aurelia-gallery.art');
    setPassword('Masterpiece2024!');
    setIsLoading(true);
    setTimeout(() => {
      login('curator@aurelia-gallery.art', 'Masterpiece2024!');
      setIsLoading(false);
      navigate('/gallery');
    }, 400);
  };

  return (
    <div className="auth-page-wrapper">
      {/* Background artwork backdrop */}
      <div className="auth-art-backdrop"></div>
      <div className="auth-art-overlay"></div>

      <div className="auth-container">
        <div className="auth-card">
          {/* Card Header */}
          <div className="auth-card-header">
            <Link to="/" className="auth-brand-link" title="Return to Home">
              <Palette className="auth-brand-icon" size={24} />
              <span>AURELIA</span>
            </Link>
            <h1 className="auth-title">Welcome to the Salon</h1>
            <p className="auth-subtitle">
              Sign in to access your curated collections, exhibition guides, and patron privileges.
            </p>
          </div>

          {/* Quick Demo Fill Button */}
          <div className="demo-credentials-banner">
            <button 
              type="button" 
              onClick={handleDemoLogin}
              className="demo-autofill-btn"
            >
              <Sparkles size={14} className="text-gold" />
              <span>Click for Instant Demo Sign In</span>
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="login-email" className="form-label">
                Email Address
              </label>
              <div className={`input-field-wrapper ${errors.email ? 'has-error' : ''}`}>
                <Mail size={18} className="field-icon" />
                <input
                  id="login-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  className="auth-input"
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <div className="field-error-msg">
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <div className="label-with-aside">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
              </div>
              <div className={`input-field-wrapper ${errors.password ? 'has-error' : ''}`}>
                <Lock size={18} className="field-icon" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your account password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: null });
                  }}
                  className="auth-input"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-btn"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <div className="field-error-msg">
                  <AlertCircle size={14} />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-auth-submit"
            >
              {isLoading ? (
                <span>Entering Gallery...</span>
              ) : (
                <>
                  <span>Sign In to Exhibition</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Card Footer / Switch to SignUp */}
          <div className="auth-card-footer">
            <p>
              New to Aurelia Gallery?{' '}
              <Link to="/signup" className="auth-switch-link">
                Create a Free Account
              </Link>
            </p>
            <div className="auth-home-return">
              <Link to="/">← Return to Gallery Homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
