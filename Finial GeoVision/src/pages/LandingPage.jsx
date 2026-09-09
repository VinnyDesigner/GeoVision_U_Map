import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, GraduationCap, Heart, Car, Trees, LayoutGrid, Plus, Map, Info, Brain, Send, ChevronLeft, ChevronRight, Zap, Compass, Trophy, Leaf, HardHat, Home, ShieldCheck, Sun, Hammer, Flame, Sprout, Briefcase, User, Lock, Eye, EyeOff, LogIn, Layers, Sparkles, Landmark, Mail, AlertCircle, CheckCircle, ArrowLeft, ArrowRight, Check, LogOut, X } from 'lucide-react';
import FourPointStar from '../components/FourPointStar.jsx';
import CommonHeader from '../components/CommonHeader.jsx';
import FoldText from '../components/FoldText.jsx';
import AuthModal from '../components/AuthModal.jsx';
import { authService } from '../services/authService.js';
import passwordSuccessIcon from '../assets/password_success_icon.svg';

export default function LandingPage({
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
  currentUser,
  setCurrentUser,
  isGuest,
  setIsGuest,
  isSignInOpen,
  setIsSignInOpen,
  authState: propAuthState,
  setAuthState: propSetAuthState,
  isAboutUsOpen,
  setIsAboutUsOpen,
  isFeedbackOpen,
  setIsFeedbackOpen,
  t,
  handleSearchSubmit,
  handleUnifiedSearch,
  searchQuery,
  setSearchQuery,
  categorySearchQuery,
  setCategorySearchQuery,
  expandedCategory,
  setExpandedCategory,
  selectedSubcategories,
  setSelectedSubcategories,
  showToast,
  toastMessage,
  setIsSidebarOpen,
  setActiveTab
}) {
  const [chipPage, setChipPage] = useState(0);
  const [isMobileDragActive, setIsMobileDragActive] = useState(false);

  // ── AUTHENTICATION FLOW STATE ──
  // States: 'login' | 'forgotPassword' | 'otpVerification' | 'resettingPassword' | 'passwordUpdated' | 'creatingAccount' | 'accountCreated' | 'authenticating' | 'sessionExpired' | 'signOutConfirm' | 'signOutSuccess'
  const [internalAuthState, setInternalAuthState] = useState('login');
  const authState = propAuthState !== undefined ? propAuthState : internalAuthState;
  const setAuthState = propSetAuthState || setInternalAuthState;
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');
  const [authenticatingTitle, setAuthenticatingTitle] = useState('');
  const [authenticatingSubtitle, setAuthenticatingSubtitle] = useState('');

  // Login form fields
  const [authEmail, setAuthEmail] = useState('admin@geovision.ae');
  const [authPassword, setAuthPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Registration form fields
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  // Password reset fields
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // OTP Verification fields
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(60);
  const [activeOtpEmail, setActiveOtpEmail] = useState('');
  const otpInputRefs = useRef([]);

  // OTP Countdown Timer
  useEffect(() => {
    let timer;
    if (authState === 'otpVerification' && otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [authState, otpTimer]);

  // Error message dictionary
  const getErrorMessage = (errCode) => {
    if (!errCode) return '';
    const messages = {
      email_required: lang === 'ar' ? 'يرجى إدخال البريد الإلكتروني أو اسم المستخدم' : 'Email or Username is required',
      password_required: lang === 'ar' ? 'يرجى إدخال كلمة المرور' : 'Password is required',
      user_not_found: lang === 'ar' ? 'لم يتم العثور على حساب بهذا البريد أو اسم المستخدم' : 'No account found with this email/username',
      invalid_credentials: lang === 'ar' ? 'اسم المستخدم أو كلمة المرور غير صحيحة' : 'Invalid username/email or password',
      firstname_required: lang === 'ar' ? 'الاسم الأول مطلوب' : 'First name is required',
      lastname_required: lang === 'ar' ? 'اسم العائلة مطلوب' : 'Last name is required',
      username_required: lang === 'ar' ? 'اسم المستخدم مطلوب' : 'Username is required',
      invalid_email_format: lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address',
      password_too_short: lang === 'ar' ? 'يجب ألا تقل كلمة المرور عن 6 أحرف' : 'Password must be at least 6 characters',
      password_mismatch: lang === 'ar' ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match',
      email_already_exists: lang === 'ar' ? 'البريد الإلكتروني مسجل بالفعل' : 'An account with this email already exists',
      username_already_exists: lang === 'ar' ? 'اسم المستخدم مسجل بالفعل' : 'Username is already registered',
      identifier_required: lang === 'ar' ? 'يرجى إدخال البريد الإلكتروني أو اسم المستخدم' : 'Please enter email or username',
      otp_expired: lang === 'ar' ? 'انتهت صلاحية رمز التحقق. يرجى طلب رمز جديد' : 'Verification code has expired. Please click Resend Code',
      otp_incorrect: lang === 'ar' ? 'رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى' : 'Incorrect verification code. Please check and try again',
      otp_incomplete: lang === 'ar' ? 'يرجى إدخال رمز التحقق المكون من 6 أرقام' : 'Please enter the complete 6-digit code'
    };
    return messages[errCode] || errCode;
  };

  // ── 1. LOGIN SUBMIT HANDLER ──
  const handleFormSignIn = async (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authEmail.trim()) {
      setAuthError('email_required');
      return;
    }
    if (!authPassword.trim()) {
      setAuthError('password_required');
      return;
    }

    setAuthenticatingTitle(lang === 'ar' ? 'جاري التحقق...' : 'Authenticating...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري التحقق من بيانات الاعتماد وتصاريح الدخول' : 'Validating your credentials and access permissions');
    setAuthState('authenticating');

    const result = await authService.login(authEmail, authPassword, rememberMe);

    if (result.success) {
      if (setIsLoggedIn) setIsLoggedIn(true);
      if (setIsGuest) setIsGuest(false);
      if (setCurrentUser) setCurrentUser(result.user);
      setAuthState('loginSuccess');
      if (showToast) {
        showToast(lang === 'ar' ? `مرحباً بك مجدداً، ${result.user.firstName || 'مستخدم جيو فيجن'}!` : `Welcome back, ${result.user.firstName || 'GeoVision User'}!`);
      }
      setTimeout(() => {
        if (setIsSignInOpen) setIsSignInOpen(false);
        if (setShowMap) setShowMap(true);
        setAuthState('login');
      }, 750);
    } else {
      setAuthError(result.error);
      setAuthState('login');
    }
  };

  // ── 2. CONTINUE AS GUEST HANDLER ──
  const handleContinueAsGuest = () => {
    if (setIsLoggedIn) setIsLoggedIn(false);
    if (setIsGuest) setIsGuest(true);
    if (setCurrentUser) setCurrentUser({ firstName: 'Guest', lastName: '', role: 'guest', username: 'guest' });
    if (setIsSignInOpen) setIsSignInOpen(false);
    setAuthState('login');
    if (showToast) {
      showToast(lang === 'ar' ? 'المتابعة كضيف مع إمكانية استكشاف الخريطة والبيانات' : 'Continuing as Guest with public GIS access');
    }
  };

  // ── 3. FORGOT PASSWORD / REQUEST OTP HANDLER ──
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authEmail.trim()) {
      setAuthError('identifier_required');
      return;
    }

    setAuthenticatingTitle(lang === 'ar' ? 'جاري إرسال الرمز...' : 'Sending Request...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري إنشاء وتوجيه رمز التحقق الآمن' : 'Generating and dispatching secure verification code');
    setAuthState('authenticating');

    const result = await authService.requestOtp(authEmail);

    if (result.success) {
      setActiveOtpEmail(result.email);
      setOtpTimer(60);
      setOtpDigits(['', '', '', '', '', '']);
      setAuthState('otpVerification');
      if (showToast) {
        showToast(lang === 'ar' ? `تم إرسال رمز التحقق: ${result.otp}` : `Verification code sent: ${result.otp}`);
      }
    } else {
      setAuthError(result.error);
      setAuthState('forgotPassword');
    }
  };

  // ── RESEND OTP HANDLER ──
  const handleResendOtp = async () => {
    setAuthError('');
    const result = await authService.requestOtp(authEmail);
    if (result.success) {
      setOtpTimer(60);
      setOtpDigits(['', '', '', '', '', '']);
      if (showToast) {
        showToast(lang === 'ar' ? `تم إرسال رمز تحقق جديد: ${result.otp}` : `New verification code sent: ${result.otp}`);
      }
    } else {
      setAuthError(result.error);
    }
  };

  // ── OTP INPUT CHANGE HANDLER ──
  const handleOtpChange = (index, value) => {
    const val = value.replace(/\D/g, '').slice(-1);
    const updated = [...otpDigits];
    updated[index] = val;
    setOtpDigits(updated);
    setAuthError('');

    if (val && index < 5 && otpInputRefs.current[index + 1]) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0 && otpInputRefs.current[index - 1]) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted) {
      const updated = ['', '', '', '', '', ''];
      for (let i = 0; i < pasted.length; i++) {
        updated[i] = pasted[i];
      }
      setOtpDigits(updated);
      const nextIdx = Math.min(pasted.length, 5);
      if (otpInputRefs.current[nextIdx]) {
        otpInputRefs.current[nextIdx].focus();
      }
    }
  };

  // ── 4. VERIFY OTP SUBMIT HANDLER ──
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setAuthError('');

    const code = otpDigits.join('');
    if (code.length < 6) {
      setAuthError('otp_incomplete');
      return;
    }

    const result = authService.verifyOtp(code);
    if (result.success) {
      setNewPassword('');
      setConfirmNewPassword('');
      setAuthState('resettingPassword');
      if (showToast) {
        showToast(lang === 'ar' ? 'تم التحقق من الرمز بنجاح! قم بتعيين كلمة مرور جديدة' : 'Code verified! Set your new password');
      }
    } else {
      setAuthError(result.error);
    }
  };

  // ── 5. RESET PASSWORD SUBMIT HANDLER ──
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');

    if (!newPassword) {
      setAuthError('password_required');
      return;
    }
    if (newPassword.length < 6) {
      setAuthError('password_too_short');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setAuthError('password_mismatch');
      return;
    }

    setAuthenticatingTitle(lang === 'ar' ? 'جاري التحديث...' : 'Updating Password...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري حفظ كلمة المرور وتأمين الحساب' : 'Saving new password and securing your credentials');
    setAuthState('authenticating');

    const result = await authService.resetPassword(authEmail, newPassword, confirmNewPassword);

    if (result.success) {
      setAuthPassword(newPassword);
      setAuthState('passwordUpdated');
      if (showToast) {
        showToast(lang === 'ar' ? 'تم تحديث كلمة المرور بنجاح' : 'Password updated successfully');
      }
    } else {
      setAuthError(result.error);
      setAuthState('resettingPassword');
    }
  };

  // ── 6. CREATE ACCOUNT / SIGN UP SUBMIT HANDLER ──
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');

    setAuthenticatingTitle(lang === 'ar' ? 'جاري إنشاء الحساب...' : 'Creating Account...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري تسجيل بياناتك وإعداد الحساب المكاني' : 'Setting up your spatial access credentials');
    setAuthState('authenticating');

    const result = await authService.register(regData);

    if (result.success) {
      setAuthEmail(regData.email || regData.username);
      setAuthPassword(regData.password);
      setAuthState('accountCreated');
      if (showToast) {
        showToast(lang === 'ar' ? 'تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول' : 'Account created successfully! Please sign in');
      }
    } else {
      setAuthError(result.error);
      setAuthState('creatingAccount');
    }
  };

  return (
    <div className={`hero-landing ${isSignInOpen ? 'signin-bg-active' : ''}`}>

      <div className="hero-overlay" />

      {/* TOP FLOATING PORTAL HEADER */}
      <CommonHeader
        activeBasemap={activeBasemap}
        showMap={showMap}
        setShowMap={setShowMap}
        isCategoryDrawerOpen={isCategoryDrawerOpen}
        setIsCategoryDrawerOpen={setIsCategoryDrawerOpen}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        isProfileOpen={isProfileOpen}
        setIsProfileOpen={setIsProfileOpen}
        profileMenuRef={profileMenuRef}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isSignInOpen={isSignInOpen}
        setIsSignInOpen={setIsSignInOpen}
        authState={authState}
        setAuthState={setAuthState}
        isAboutUsOpen={isAboutUsOpen}
        setIsAboutUsOpen={setIsAboutUsOpen}
        isFeedbackOpen={isFeedbackOpen}
        setIsFeedbackOpen={setIsFeedbackOpen}
        t={t}
        handleSearchSubmit={handleSearchSubmit}
        showToast={showToast}
        setIsSidebarOpen={setIsSidebarOpen}
        setActiveTab={setActiveTab}
      />

      {isSignInOpen ? (
        /* ── DEDICATED SIGN IN VIEW ── */
        <div className="signin-view-wrapper">
          {/* Top Left Hero Text */}
          <div className="signin-left-hero">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h2 className="signin-hero-title">
                {lang === 'ar' ? (
                  <>
                    تمكين العمل الحكومي.
                    <span className="signin-hero-star-wrapper">
                      <svg width="34" height="34" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg" className="signin-animated-star">
                        {/* Big Primary 4-point Diamond Star */}
                        <path d="M 40 2 L 47 43 L 80 50 L 47 57 L 40 98 L 33 57 L 0 50 L 33 43 Z" fill="#FFFFFF" />
                        {/* Small Secondary 4-point Diamond Star on top-right */}
                        <path d="M 84 4 L 88 24 L 100 28 L 88 32 L 84 52 L 80 32 L 68 28 L 80 24 Z" fill="#FFFFFF" />
                      </svg>
                    </span>
                    <br />
                    من خلال رؤى مكانية ذكية
                  </>
                ) : (
                  <>
                    Empowering Government.
                    <span className="signin-hero-star-wrapper">
                      <svg width="34" height="34" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg" className="signin-animated-star">
                        {/* Big Primary 4-point Diamond Star */}
                        <path d="M 40 2 L 47 43 L 80 50 L 47 57 L 40 98 L 33 57 L 0 50 L 33 43 Z" fill="#FFFFFF" />
                        {/* Small Secondary 4-point Diamond Star on top-right */}
                        <path d="M 84 4 L 88 24 L 100 28 L 88 32 L 84 52 L 80 32 L 68 28 L 80 24 Z" fill="#FFFFFF" />
                      </svg>
                    </span>
                    <br />
                    Through Intelligent Spatial Insights
                  </>
                )}
              </h2>
            </div>
            <p className="signin-hero-subtitle">
              {lang === 'ar'
                ? 'استكشف البيانات المكانية العامة الموثوقة والرؤى المدعومة بالذكاء الاصطناعي في إمارة أبوظبي.'
                : 'Explore trusted public spatial data and AI-powered spatial insights across Abu Dhabi.'}
            </p>
          </div>

          {/* Bottom Left 3 Feature Glass Cards */}
          <div className="signin-bottom-features">
            <div className="signin-feature-card">
              <div className="signin-feature-icon-wrapper">
                <Layers size={24} strokeWidth={1.8} />
              </div>
              <span className="signin-feature-text">
                {lang === 'ar' ? <>بيانات مكانية<br />عامة موثوقة</> : <>Trusted Public<br />Spatial Data</>}
              </span>
            </div>
            <div className="signin-feature-divider" />
            <div className="signin-feature-card">
              <div className="signin-feature-icon-wrapper">
                <Sparkles size={24} strokeWidth={1.8} />
              </div>
              <span className="signin-feature-text">
                {lang === 'ar' ? <>بحث مكاني<br />بالذكاء الاصطناعي</> : <>AI-Powered<br />Spatial Search</>}
              </span>
            </div>
            <div className="signin-feature-divider" />
            <div className="signin-feature-card">
              <div className="signin-feature-icon-wrapper">
                <Landmark size={24} strokeWidth={1.8} />
              </div>
              <span className="signin-feature-text">
                {lang === 'ar' ? <>منصة حكومية<br />لنظم المعلومات</> : <>Government<br />GIS Platform</>}
              </span>
            </div>
          </div>

          {/* Center Glassmorphic Sign In Card */}
          <AuthModal
            isOpen={isSignInOpen}
            onClose={() => {
              if (setIsSignInOpen) setIsSignInOpen(false);
              setAuthState('login');
            }}
            lang={lang}
            theme={theme}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setIsGuest={setIsGuest}
            setIsSignInOpen={setIsSignInOpen}
            authState={authState}
            setAuthState={setAuthState}
            showToast={showToast}
            onSuccess={() => {
              if (setShowMap) setShowMap(true);
            }}
            isOverlay={false}
          />
        </div>
      ) : (
        /* ── DEFAULT HERO SEARCH VIEW ── */
        <div className="landing-hero">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <h1 className="landing-main-title">Geo Vision</h1>
            <FourPointStar className="sparkle-decor-1" size={26} />
            <FourPointStar className="sparkle-decor-2" size={16} />
          </div>

          <h2 className="landing-sub-title">{t.subTitle}</h2>
          <p className="landing-description">{t.description}</p>

          {/* ── HIGH FIDELITY GLASSMORPHIC SEARCH CARD ── */}
          <div className="landing-search-card-wrapper">
            <div className="landing-search-card">
              {/* Tech SVG Border Overlay */}
              <div className="tech-card-border-container">
                <svg width="100%" height="100%" viewBox="0 0 800 170" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  {/* Outer Glow & Border */}
                  <path
                    d="M 35 6 
                     L 240 6 
                     L 255 14 
                     L 545 14 
                     L 560 6 
                     L 765 6 
                     L 794 35 
                     L 794 135 
                     L 765 164 
                     L 560 164 
                     L 545 156 
                     L 255 156 
                     L 240 164 
                     L 35 164 
                     L 6 135 
                     L 6 35 Z"
                    stroke="rgba(59, 130, 246, 0.4)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Animated stroke running from the left edge (top/bottom) */}
                  <path
                    d="M 6 85 L 6 35 L 35 6 L 240 6 L 255 14 L 545 14 L 560 6 L 765 6 L 794 35 L 794 85"
                    className="tech-border-flow flow-from-left"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 6 85 L 6 135 L 35 164 L 240 164 L 255 156 L 545 156 L 560 164 L 765 164 L 794 135 L 794 85"
                    className="tech-border-flow flow-from-left"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Animated stroke running from the right edge (top/bottom) */}
                  <path
                    d="M 794 85 L 794 35 L 765 6 L 560 6 L 545 14 L 255 14 L 240 6 L 35 6 L 6 35 L 6 85"
                    className="tech-border-flow flow-from-right"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 794 85 L 794 135 L 765 164 L 560 164 L 545 156 L 255 156 L 240 164 L 35 164 L 6 135 L 6 85"
                    className="tech-border-flow flow-from-right"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Inner Accent Line */}
                  <path
                    d="M 40 10 
                   L 236 10 
                   L 251 18 
                   L 549 18 
                   L 564 10 
                   L 760 10 
                   L 790 40 
                   L 790 130 
                   L 760 160 
                   L 564 160 
                   L 549 152 
                   L 251 152 
                   L 236 160 
                   L 40 160 
                   L 10 130 
                   L 10 40 Z"
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Neon Cyan Highlights */}
                  <path
                    d="M 25 6 L 6 25 L 6 60"
                    stroke="#06B6D4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 775 164 L 794 145 L 794 110"
                    stroke="#06B6D4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 60 164 L 35 164 L 6 135 L 6 100"
                    stroke="#06B6D4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 740 6 L 765 6 L 794 35 L 794 70"
                    stroke="#06B6D4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* Search Row Layout: Input Container */}
              <div className="landing-search-row">
                {/* Input Form Box */}
                <form
                  className="landing-search-container"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearchSubmit();
                  }}
                >
                  {/* Sparkle Icon with spinning loader effect */}
                  <div className="search-star-loader-wrapper">
                    <div className="search-star-loader"></div>
                    <FourPointStar className="landing-search-sparkle" size={16} />
                  </div>

                  {/* Vertical Separator */}
                  <div className="landing-search-separator" />

                  <input
                    type="text"
                    className="landing-search-input"
                    placeholder={t.searchPlaceholder || 'Ask Smart Map Anything...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  {/* Pill-shaped Search Button */}
                  <div className="landing-search-btn-wrapper">
                    <button
                      type="submit"
                      className="landing-search-btn-pill"
                      disabled={!searchQuery.trim()}
                    >
                      <span className="search-btn-text">Search</span>
                      <Send size={15} className="search-btn-icon" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Category chips */}
              <div className="landing-chips-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginTop: '4px', width: '100%' }}>
                {isMobileDragActive ? (
                  <div className="landing-chips-wrapper mobile-drag-active">
                    <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setIsMobileDragActive(false)} title="Collapse">
                      <ChevronLeft size={16} /> <span>Back</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Education' })}>
                      <GraduationCap size={15} /> <span>{t.education}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Healthcare' })}>
                      <Heart size={15} /> <span>{t.healthcare}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Transport' })}>
                      <Car size={15} /> <span>{t.transportation}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Environment' })}>
                      <Leaf size={15} /> <span>{t.environment}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Government Services' })}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 22V11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11" />
                        <path d="M12 2v4" />
                        <path d="M8 6h8" />
                        <path d="M10 18h4" />
                        <path d="M10 14h4" />
                      </svg>
                      <span>{t.government}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Tourism' })}>
                      <Compass size={15} /> <span>{t.tourism}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Infrastructure' })}>
                      <HardHat size={15} /> <span>{t.infrastructure}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Housing' })}>
                      <Home size={15} /> <span>{t.housing}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Public Safety' })}>
                      <ShieldCheck size={15} /> <span>{t.publicSafety}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Utilities' })}>
                      <Zap size={15} /> <span>{t.utilities}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Climate' })}>
                      <Sun size={15} /> <span>{t.climate}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Construction' })}>
                      <Hammer size={15} /> <span>{t.construction}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Energy' })}>
                      <Flame size={15} /> <span>{t.energy}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Parks' })}>
                      <Trees size={15} /> <span>{t.parks}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Agriculture' })}>
                      <Sprout size={15} /> <span>{t.agriculture}</span>
                    </button>
                    <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Employment' })}>
                      <Briefcase size={15} /> <span>{t.employment}</span>
                    </button>
                  </div>
                ) : (
                  <div className="landing-chips-wrapper">
                    {chipPage === 0 && (
                      <>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Education' })}>
                          <GraduationCap size={15} /> <span>{t.education}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Healthcare' })}>
                          <Heart size={15} /> <span>{t.healthcare}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Transport' })}>
                          <Car size={15} /> <span>{t.transportation}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Environment' })}>
                          <Leaf size={15} /> <span>{t.environment}</span>
                        </button>
                        <button className="landing-chip-btn landing-chip-more-btn" onClick={() => {
                          if (window.innerWidth <= 767) {
                            setIsMobileDragActive(true);
                            if (setIsCategoryDrawerOpen) setIsCategoryDrawerOpen(true);
                          } else {
                            setChipPage(1);
                          }
                        }}>
                          <span>{t.moreChips || '12 More'}</span> <LayoutGrid size={15} />
                        </button>
                      </>
                    )}

                    {chipPage === 1 && (
                      <>
                        <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setChipPage(0)} title="Previous Page">
                          <ChevronLeft size={16} />
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Government Services' })}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 22V11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11" />
                            <path d="M12 2v4" />
                            <path d="M8 6h8" />
                            <path d="M10 18h4" />
                            <path d="M10 14h4" />
                          </svg>
                          <span>{t.government}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Tourism' })}>
                          <Compass size={15} /> <span>{t.tourism}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Infrastructure' })}>
                          <HardHat size={15} /> <span>{t.infrastructure}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Housing' })}>
                          <Home size={15} /> <span>{t.housing}</span>
                        </button>
                        <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setChipPage(2)} title="Next Page">
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {chipPage === 2 && (
                      <>
                        <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setChipPage(1)} title="Previous Page">
                          <ChevronLeft size={16} />
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Public Safety' })}>
                          <ShieldCheck size={15} /> <span>{t.publicSafety}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Utilities' })}>
                          <Zap size={15} /> <span>{t.utilities}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Climate' })}>
                          <Sun size={15} /> <span>{t.climate}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Construction' })}>
                          <Hammer size={15} /> <span>{t.construction}</span>
                        </button>
                        <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setChipPage(3)} title="Next Page">
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {chipPage === 3 && (
                      <>
                        <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setChipPage(2)} title="Previous Page">
                          <ChevronLeft size={16} />
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Energy' })}>
                          <Flame size={15} /> <span>{t.energy}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Parks' })}>
                          <Trees size={15} /> <span>{t.parks}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Agriculture' })}>
                          <Sprout size={15} /> <span>{t.agriculture}</span>
                        </button>
                        <button className="landing-chip-btn" onClick={() => handleUnifiedSearch({ category: 'Employment' })}>
                          <Briefcase size={15} /> <span>{t.employment}</span>
                        </button>
                        <button className="landing-chip-btn landing-chip-toggle-btn" onClick={() => setChipPage(0)} title="Next Page">
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>
                )}

                {/* Stepper Dots */}
                <div className="landing-chips-stepper">
                  <button
                    className={`stepper-dot ${chipPage === 0 ? 'active' : ''}`}
                    onClick={() => setChipPage(0)}
                    title="Page 1"
                  />
                  <button
                    className={`stepper-dot ${chipPage === 1 ? 'active' : ''}`}
                    onClick={() => setChipPage(1)}
                    title="Page 2"
                  />
                  <button
                    className={`stepper-dot ${chipPage === 2 ? 'active' : ''}`}
                    onClick={() => setChipPage(2)}
                    title="Page 3"
                  />
                  <button
                    className={`stepper-dot ${chipPage === 3 ? 'active' : ''}`}
                    onClick={() => setChipPage(3)}
                    title="Page 4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Explore Map Button */}
          <div className="landing-explore-btn-wrapper">
            <button className="landing-explore-btn" onClick={() => handleSearchSubmit('')}>
              {t.exploreMap} <Map size={18} />
            </button>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast-notification">
          <Info size={16} style={{ color: 'var(--accent-cyan)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}




