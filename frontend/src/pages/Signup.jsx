import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Sparkles, 
  Palette, 
  AlertCircle, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const { user, signup } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/gallery');
    }
  }, [user, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Join Patron Circle | AURELIA Fine Art Gallery";
  }, []);

  const validate = () => {
    const errs = {};
    if (!fullName.trim()) {
      errs.fullName = 'Full name is required.';
    } else if (fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    if (!confirmPassword) {
      errs.confirmPassword = 'Please confirm your password.';
    } else if (confirmPassword !== password) {
      errs.confirmPassword = 'Passwords do not match.';
    }

    if (!agreeTerms) {
      errs.terms = 'You must agree to the patron terms and code of ethics.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      const res = signup(fullName.trim(), email.trim(), password);
      setIsLoading(false);
      if (res.success) {
        navigate('/gallery');
      } else {
        setErrors({ general: res.error });
      }
    }, 600);
  };

  return (
    <div className="auth-page-wrapper">
      {/* Background artwork backdrop */}
      <div className="auth-art-backdrop signup-backdrop"></div>
      <div className="auth-art-overlay"></div>

      <div className="auth-container">
        <div className="auth-card signup-card">
          {/* Card Header */}
          <div className="auth-card-header">
            <Link to="/" className="auth-brand-link" title="Return to Home">
              <Palette className="auth-brand-icon" size={24} />
              <span>AURELIA</span>
            </Link>
            <h1 className="auth-title">Become a Gallery Patron</h1>
            <p className="auth-subtitle">
              Join thousands of scholars, connoisseurs, and art lovers exploring centuries of human genius.
            </p>
          </div>

          {errors.general && (
            <div className="general-error-banner">
              <AlertCircle size={18} />
              <span>{errors.general}</span>
            </div>
          )}

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="signup-name" className="form-label">
                Full Name
              </label>
              <div className={`input-field-wrapper ${errors.fullName ? 'has-error' : ''}`}>
                <User size={18} className="field-icon" />
                <input
                  id="signup-name"
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: null });
                  }}
                  className="auth-input"
                  autoComplete="name"
                />
              </div>
              {errors.fullName && (
                <div className="field-error-msg">
                  <AlertCircle size={14} />
                  <span>{errors.fullName}</span>
                </div>
              )}
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="signup-email" className="form-label">
                Email Address
              </label>
              <div className={`input-field-wrapper ${errors.email ? 'has-error' : ''}`}>
                <Mail size={18} className="field-icon" />
                <input
                  id="signup-email"
                  type="email"
                  placeholder="patron@gallery.com"
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

            {/* Password */}
            <div className="form-group">
              <label htmlFor="signup-password" className="form-label">
                Password
              </label>
              <div className={`input-field-wrapper ${errors.password ? 'has-error' : ''}`}>
                <Lock size={18} className="field-icon" />
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password (min 6 chars)"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: null });
                  }}
                  className="auth-input"
                  autoComplete="new-password"
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

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="signup-confirm-password" className="form-label">
                Confirm Password
              </label>
              <div className={`input-field-wrapper ${errors.confirmPassword ? 'has-error' : ''}`}>
                <Lock size={18} className="field-icon" />
                <input
                  id="signup-confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                  }}
                  className="auth-input"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="password-toggle-btn"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="field-error-msg">
                  <AlertCircle size={14} />
                  <span>{errors.confirmPassword}</span>
                </div>
              )}
            </div>

            {/* Terms checkbox */}
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span>
                  I agree to the <span className="text-gold">Public Heritage Guidelines</span> and digital visitor charter.
                </span>
              </label>
              {errors.terms && (
                <div className="field-error-msg">
                  <AlertCircle size={14} />
                  <span>{errors.terms}</span>
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
                <span>Creating Your Patron Credentials...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Switch to Login */}
          <div className="auth-card-footer">
            <p>
              Already a patron member?{' '}
              <Link to="/login" className="auth-switch-link">
                Sign In to Your Account
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
