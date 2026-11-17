import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useAuth();

  if (!toast) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className={`toast-card toast-${toast.type || 'info'}`}>
        <div className="toast-icon">
          {toast.type === 'error' ? (
            <AlertCircle size={20} className="text-error" />
          ) : (
            <CheckCircle size={20} className="text-gold" />
          )}
        </div>
        <p className="toast-message">{toast.message}</p>
      </div>
    </div>
  );
}
