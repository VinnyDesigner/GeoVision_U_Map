import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Star, User, Mail, Send, Loader2 } from 'lucide-react';
import './FeedbackModal.css';

export default function FeedbackModal({
  isOpen,
  onClose,
  lang = 'en',
  theme = 'light',
  showToast,
  currentUser = null
}) {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardRef = useRef(null);

  // Sync user info when opened
  useEffect(() => {
    if (isOpen) {
      if (currentUser?.name || currentUser?.username) {
        setName(currentUser.name || currentUser.username);
      }
      if (currentUser?.email) {
        setEmail(currentUser.email);
      }
      // Reset submitting status
      setIsSubmitting(false);
    }
  }, [isOpen, currentUser]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isRtl = lang === 'ar';
  const effectiveRating = hoverRating || rating;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (showToast) {
        showToast(
          isRtl
            ? 'شكراً لك! تم استلام ملاحظاتك بنجاح.'
            : 'Thank you! Your feedback has been received successfully.'
        );
      }
      // Reset message
      setMessage('');
      onClose();
    }, 600);
  };

  const handleBackdropClick = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      onClose();
    }
  };

  const modalContent = (
    <div 
      className={`feedback-modal-backdrop feedback-theme-${theme} ${isRtl ? 'feedback-rtl' : ''}`}
      onClick={handleBackdropClick}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div 
        ref={cardRef} 
        className="feedback-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Close Button */}
        <button 
          type="button" 
          className="feedback-close-btn" 
          onClick={onClose}
          aria-label={isRtl ? 'إغلاق' : 'Close'}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="feedback-modal-header">
          <h2 className="feedback-modal-title">
            {isRtl ? 'شاركنا ملاحظاتك' : 'Share Your Feedback'}
          </h2>
          <p className="feedback-modal-subtitle">
            {isRtl 
              ? 'قيّم تجربتك وشاركنا ملاحظاتك واقتراحاتك.' 
              : 'Rate Your Experience And Share Your Feedback.'}
          </p>
        </div>

        {/* Interactive 5-Star Rating */}
        <div className="feedback-rating-container">
          {[1, 2, 3, 4, 5].map((starIndex) => {
            const isFilled = starIndex <= effectiveRating;
            return (
              <button
                key={starIndex}
                type="button"
                className="feedback-star-btn"
                onMouseEnter={() => setHoverRating(starIndex)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(starIndex)}
                aria-label={`${starIndex} Star`}
              >
                <Star 
                  className={`feedback-star-icon ${isFilled ? 'feedback-star-filled' : 'feedback-star-empty'}`}
                  size={28}
                  strokeWidth={isFilled ? 0 : 1.8}
                />
              </button>
            );
          })}
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="feedback-form">
          {/* Name Field */}
          <div className="feedback-form-group">
            <label className="feedback-label">
              {isRtl ? 'الاسم' : 'Name'}
            </label>
            <div className="feedback-input-wrapper">
              <input
                type="text"
                className="feedback-input"
                placeholder={isRtl ? 'أدخل اسمك' : 'Enter your name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <User size={18} className="feedback-input-icon" />
            </div>
          </div>

          {/* Email Field */}
          <div className="feedback-form-group">
            <label className="feedback-label">
              {isRtl ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <div className="feedback-input-wrapper">
              <input
                type="email"
                className="feedback-input"
                placeholder={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail size={18} className="feedback-input-icon" />
            </div>
          </div>

          {/* Message Field */}
          <div className="feedback-form-group">
            <label className="feedback-label">
              {isRtl ? 'الرسالة' : 'Message'}
            </label>
            <textarea
              className="feedback-textarea"
              placeholder={isRtl ? 'شاركنا ملاحظاتك أو اقتراحاتك...' : 'Share your feedback or suggestions...'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="feedback-actions">
            <button
              type="button"
              className="feedback-btn feedback-btn-cancel"
              onClick={onClose}
            >
              <span>{isRtl ? 'إلغاء' : 'Cancel'}</span>
              <X size={16} />
            </button>
            <button
              type="submit"
              className="feedback-btn feedback-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <span>{isRtl ? 'إرسال' : 'Submit'}</span>
                  <Send size={16} className="feedback-send-icon" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : modalContent;
}
