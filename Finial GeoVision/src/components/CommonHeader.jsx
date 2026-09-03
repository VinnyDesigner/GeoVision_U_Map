import React, { useState } from 'react';
import { Bookmark, Menu, X, LogOut } from 'lucide-react';
import leftLogo from '../assets/left.png';
import rightLogo from '../assets/right.png';
import lagIcon from '../assets/lag.svg';
import historyIcon from '../assets/History.svg';
import feedbackIcon from '../assets/share feedback.svg';
import helpIcon from '../assets/help.svg';
import signInIcon from '../assets/sign in.svg';

import GeoVisionGradientIcon from './GeoVisionGradientIcon.jsx';
import { authService } from '../services/authService.js';

import homeSvg from '../assets/Icons 1/Icons/home.svg';
import aboutUsSvg from '../assets/Icons 1/Icons/about us.svg';
import arabicSvg from '../assets/Icons 1/Icons/Arabic.svg';
import lightThemeSvg from '../assets/Icons 1/Icons/Light theme.svg';
import darkThemeSvg from '../assets/Icons 1/Icons/Dark theme.svg';
import profileSvg from '../assets/Icons 1/Icons/profile.svg';
import collectionsSvg from '../assets/Icons 1/Icons/My Collections.svg';

export default function CommonHeader({
  activeBasemap,
  showMap,
  setShowMap,
  isCategoryDrawerOpen,
  setIsCategoryDrawerOpen,
  lang,
  setLang,
  theme,
  setTheme,
  isProfileOpen,
  setIsProfileOpen,
  profileMenuRef,
  isLoggedIn,
  setIsLoggedIn,
  isSignInOpen,
  setIsSignInOpen,
  authState,
  setAuthState,
  isAboutUsOpen,
  setIsAboutUsOpen,
  t,
  handleSearchSubmit,
  showToast,
  setIsSidebarOpen,
  setActiveTab
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isGreyBasemap = activeBasemap === 'light';

  const handleSignOutClick = () => {
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    setShowMap(false);
    if (setIsAboutUsOpen) setIsAboutUsOpen(false);
    if (setIsSignInOpen) setIsSignInOpen(true);
    if (setAuthState) {
      setAuthState(isLoggedIn ? 'signOutConfirm' : 'login');
    }
  };

  const handleToggleLanguage = (e) => {
    e.preventDefault();
    if (setLang) {
      const nextLang = lang === 'en' ? 'ar' : 'en';
      setLang(nextLang);
      if (showToast) {
        showToast(nextLang === 'ar' ? 'تم التبديل إلى اللغة العربية' : 'Switched to English');
      }
    }
  };

  const handleToggleTheme = (e) => {
    e.preventDefault();
    if (setTheme) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      if (showToast) {
        showToast(nextTheme === 'dark' ? (lang === 'ar' ? 'تم تفعيل الوضع الداكن' : 'Dark Mode Enabled') : (lang === 'ar' ? 'تم تفعيل الوضع الفاتح' : 'Light Mode Enabled'));
      }
    }
  };

  return (
    <header className={`landing-header ${isGreyBasemap ? 'basemap-grey-header' : ''} ${isSignInOpen ? 'signin-transparent-header' : ''}`}>
      {/* Primary Left/Right Logo based on RTL */}
      <a 
        href="#" 
        className="landing-logo-left" 
        onClick={(e) => { 
          e.preventDefault(); 
          setShowMap(false); 
          if (setIsAboutUsOpen) setIsAboutUsOpen(false);
          if (setIsSignInOpen) setIsSignInOpen(false); 
          if (setAuthState) setAuthState('login'); 
          if (setIsCategoryDrawerOpen) setIsCategoryDrawerOpen(false); 
        }}
      >
        <img src={leftLogo} alt="Department of Government Enablement" style={{ height: '38px', objectFit: 'contain' }} />
      </a>

      {/* Center Navigation (Desktop) */}
      <nav className="landing-nav-center desktop-only-nav">
        <button 
          className={`landing-nav-item ${!showMap && !isSignInOpen && !isAboutUsOpen ? 'active' : ''}`} 
          onClick={() => { 
            setShowMap(false); 
            if (setIsAboutUsOpen) setIsAboutUsOpen(false);
            if (setIsSignInOpen) setIsSignInOpen(false); 
            if (setAuthState) setAuthState('login'); 
            if (setIsCategoryDrawerOpen) setIsCategoryDrawerOpen(false); 
          }}
        >
          <GeoVisionGradientIcon src={homeSvg} size={13} alt="Home" /> {t.home}
        </button>
        <button 
          className={`landing-nav-item ${!showMap && isAboutUsOpen ? 'active' : ''}`} 
          onClick={() => { 
            setShowMap(false); 
            if (setIsAboutUsOpen) setIsAboutUsOpen(true);
            if (setIsSignInOpen) setIsSignInOpen(false); 
            if (setAuthState) setAuthState('login'); 
            if (setIsCategoryDrawerOpen) setIsCategoryDrawerOpen(false); 
          }}
        >
          <GeoVisionGradientIcon src={aboutUsSvg} size={13} alt="About Us" /> {t.aboutUs}
        </button>
      </nav>

      {/* Right Controls (Desktop) */}
      <div className="landing-controls-right desktop-only-controls">
        <button className="landing-lang-btn" onClick={handleToggleLanguage} title={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}>
          {lang === 'en' ? (
            <GeoVisionGradientIcon src={arabicSvg} size={16} alt="Arabic" />
          ) : (
            <span className="lang-en-text" style={{ fontWeight: 700, fontSize: '12.5px' }}>En</span>
          )}
        </button>
        
        <button className="landing-icon-control" onClick={handleToggleTheme} title={lang === 'ar' ? 'تبديل المظهر' : 'Toggle Theme'}>
          <GeoVisionGradientIcon src={theme === 'dark' ? lightThemeSvg : darkThemeSvg} size={16} alt="Theme" />
        </button>
        
        <div className="profile-menu-wrapper" ref={profileMenuRef}>
          <button 
            className={`landing-icon-control ${isProfileOpen ? 'landing-icon-control--active' : ''}`} 
            onClick={() => setIsProfileOpen(prev => !prev)}
            title={t.profile || 'Profile'}
          >
            <GeoVisionGradientIcon src={profileSvg} size={16} alt="Profile" />
          </button>

          {isProfileOpen && (
            <div className="profile-dropdown">
              <button 
                className="profile-item" 
                onClick={() => { 
                  setIsProfileOpen(false); 
                  setShowMap(true);
                  if (setIsSidebarOpen) setIsSidebarOpen(true);
                  if (setActiveTab) setActiveTab('history');
                  showToast(lang === 'ar' ? 'تم فتح سجل البحث' : "Search History Opened"); 
                }}
              >
                <img src={historyIcon} alt="History" className="profile-item-icon" />
                <span>{t.history}</span>
              </button>
              {isLoggedIn && (
                <button 
                  className="profile-item" 
                  onClick={() => { 
                    setIsProfileOpen(false); 
                    setShowMap(true);
                    if (setIsSidebarOpen) setIsSidebarOpen(true);
                    if (setActiveTab) setActiveTab('collections');
                    showToast(lang === 'ar' ? 'تم فتح مجموعاتي' : "My Collections Opened"); 
                  }}
                >
                  <Bookmark size={16} style={{ color: '#022E5B', flexShrink: 0 }} />
                  <span>{t.collections}</span>
                </button>
              )}
              <button className="profile-item" onClick={() => { setIsProfileOpen(false); showToast(lang === 'ar' ? 'تم فتح نافذة الملاحظات والتقييم' : "Share Feedback modal opened"); }}>
                <img src={feedbackIcon} alt="Feedback" className="profile-item-icon" />
                <span>{t.shareFeedback}</span>
              </button>
              <button className="profile-item" onClick={() => { setIsProfileOpen(false); showToast(lang === 'ar' ? 'وثائق المساعدة والدعم' : "Help & Support documentation"); }}>
                <img src={helpIcon} alt="Help" className="profile-item-icon" />
                <span>{t.help}</span>
              </button>
              <button 
                className="profile-item profile-item--signin" 
                onClick={handleSignOutClick}
              >
                <img src={signInIcon} alt="Sign In" className="profile-item-icon" />
                <span>{isLoggedIn ? (t.signOut || 'Sign Out') : (t.signIn || 'Sign In')}</span>
              </button>
            </div>
          )}
        </div>

        <div className="landing-spatial-logo">
          <img src={rightLogo} alt="Abu Dhabi Spatial Data" style={{ height: '42px', objectFit: 'contain' }} />
        </div>
      </div>

      {/* Right Side Group for Mobile: Abu Dhabi Spatial Data Logo + Hamburger Button */}
      <div className="mobile-header-right-group">
        <a href="#" className="landing-logo-right mobile-only-logo" onClick={(e) => { e.preventDefault(); setShowMap(false); }}>
          <img src={rightLogo} alt="Abu Dhabi Spatial Data" style={{ height: '28px', objectFit: 'contain' }} />
        </a>

        <button 
          className="landing-hamburger-btn mobile-tablet-only-btn" 
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={14} style={{ color: '#063360' }} /> : <Menu size={14} style={{ color: '#063360' }} />}
        </button>
      </div>

      {/* Glassmorphic Mobile/Tablet Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-header-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-header-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">{t.navigation || 'Navigation'}</span>
              <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mobile-menu-items">
              <button 
                className={`mobile-menu-btn ${!showMap && !isAboutUsOpen ? 'active' : ''}`}
                onClick={() => { 
                  setShowMap(false); 
                  if (setIsAboutUsOpen) setIsAboutUsOpen(false);
                  if (setIsSignInOpen) setIsSignInOpen(false);
                  setIsMobileMenuOpen(false); 
                }}
              >
                <GeoVisionGradientIcon src={homeSvg} size={18} alt="Home" />
                <span>{t.home}</span>
              </button>

              <button 
                className={`mobile-menu-btn ${!showMap && isAboutUsOpen ? 'active' : ''}`}
                onClick={() => { 
                  setShowMap(false); 
                  if (setIsAboutUsOpen) setIsAboutUsOpen(true);
                  if (setIsSignInOpen) setIsSignInOpen(false);
                  setIsMobileMenuOpen(false); 
                }}
              >
                <GeoVisionGradientIcon src={aboutUsSvg} size={18} alt="About Us" />
                <span>{t.aboutUs}</span>
              </button>

              <div className="mobile-menu-divider" />

              <div className="mobile-menu-row">
                <button 
                  className="mobile-menu-btn mobile-menu-half-btn"
                  onClick={(e) => { handleToggleLanguage(e); setIsMobileMenuOpen(false); }}
                >
                  <GeoVisionGradientIcon src={arabicSvg} size={18} alt="Language" />
                  <span>{lang === 'en' ? 'العربية' : 'English'}</span>
                </button>

                <button 
                  className="mobile-menu-btn mobile-menu-half-btn"
                  onClick={(e) => { handleToggleTheme(e); setIsMobileMenuOpen(false); }}
                >
                  <GeoVisionGradientIcon src={theme === 'dark' ? lightThemeSvg : darkThemeSvg} size={18} alt="Theme" />
                  <span>{theme === 'dark' ? (lang === 'ar' ? 'الوضع الفاتح' : 'Light Mode') : (lang === 'ar' ? 'الوضع الداكن' : 'Dark Mode')}</span>
                </button>
              </div>

              <div className="mobile-menu-divider" />

              <button 
                className="mobile-menu-btn"
                onClick={() => { 
                  setIsMobileMenuOpen(false); 
                  setShowMap(true); 
                  if (setIsSidebarOpen) setIsSidebarOpen(true);
                  if (setActiveTab) setActiveTab('history');
                  showToast(lang === 'ar' ? 'تم فتح سجل البحث' : "Search History Opened"); 
                }}
              >
                <img src={historyIcon} alt="History" className="profile-item-icon" />
                <span>{t.history}</span>
              </button>

              {isLoggedIn && (
                <button 
                  className="mobile-menu-btn"
                  onClick={() => { 
                    setIsMobileMenuOpen(false); 
                    setShowMap(true); 
                    if (setIsSidebarOpen) setIsSidebarOpen(true);
                    if (setActiveTab) setActiveTab('collections');
                    showToast(lang === 'ar' ? 'تم فتح مجموعاتي' : "My Collections Opened"); 
                  }}
                >
                  <Bookmark size={18} style={{ color: '#022E5B' }} />
                  <span>{t.collections}</span>
                </button>
              )}

              <button 
                className="mobile-menu-btn"
                onClick={() => { setIsMobileMenuOpen(false); showToast(lang === 'ar' ? 'تم فتح نافذة الملاحظات والتقييم' : "Share Feedback modal opened"); }}
              >
                <img src={feedbackIcon} alt="Feedback" className="profile-item-icon" />
                <span>{t.shareFeedback}</span>
              </button>

              <button 
                className="mobile-menu-btn"
                onClick={() => { setIsMobileMenuOpen(false); showToast(lang === 'ar' ? 'وثائق المساعدة والدعم' : "Help & Support documentation"); }}
              >
                <img src={helpIcon} alt="Help" className="profile-item-icon" />
                <span>{t.help}</span>
              </button>

              <button 
                className="mobile-menu-btn mobile-menu-signin" 
                onClick={handleSignOutClick}
              >
                <img src={signInIcon} alt="Sign In" className="profile-item-icon" />
                <span>{isLoggedIn ? (t.signOut || 'Sign Out') : (t.signIn || 'Sign In')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Bottom Tech Border (Hidden on Sign In) */}
      {!isSignInOpen && (
        <div className="header-bottom-border-container">
          <svg width="100%" height="64" viewBox="0 0 1000 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              d="M 0 48 L 20 64 L 300 64 L 315 54 L 685 54 L 700 64 L 980 64 L 1000 48" 
              stroke="rgba(59, 130, 246, 0.4)" 
              strokeWidth="1.5" 
              vectorEffect="non-scaling-stroke"
              fill="none"
            />
          </svg>
        </div>
      )}
    </header>
  );
}
