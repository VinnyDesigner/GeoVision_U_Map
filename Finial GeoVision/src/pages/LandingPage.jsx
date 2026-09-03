import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, GraduationCap, Heart, Car, Trees, LayoutGrid, Plus, Map, Info, Brain, Send, ChevronLeft, ChevronRight, Zap, Compass, Trophy, Leaf, HardHat, Home, ShieldCheck, Sun, Hammer, Flame, Sprout, Briefcase, User, Lock, Eye, EyeOff, LogIn, Layers, Sparkles, Landmark, Mail, AlertCircle, CheckCircle, ArrowLeft, ArrowRight, Check, LogOut, X } from 'lucide-react';
import FourPointStar from '../components/FourPointStar.jsx';
import CommonHeader from '../components/CommonHeader.jsx';
import FoldText from '../components/FoldText.jsx';
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
          <div className="signin-card-container">
            {/* SVG ClipPath Definition for Exact Corner Radii and Bevel (No Sharp Artifacts) */}
            <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
              <defs>
                <clipPath id="signin-chamfer-clip-ltr" clipPathUnits="objectBoundingBox">
                  <path d="M 0.06,0 L 0.81,0 L 1,0.13 L 1,0.95 Q 1,1 0.94,1 L 0.06,1 Q 0,1 0,0.95 L 0,0.05 Q 0,0 0.06,0 Z" />
                </clipPath>
                <clipPath id="signin-chamfer-clip-rtl" clipPathUnits="objectBoundingBox">
                  <path d="M 0.94,0 L 0.19,0 L 0,0.13 L 0,0.95 Q 0,1 0.06,1 L 0.94,1 Q 1,1 1,0.95 L 1,0.05 Q 1,0 0.94,0 Z" />
                </clipPath>
              </defs>
            </svg>

            <div className={`signin-card ${authState === 'creatingAccount' ? 'signin-card--signup' : ''}`}>
              {/* Tech SVG Border Overlay with Animated Stroke */}
              <div className="tech-card-border-container">
                <svg width="100%" height="100%" viewBox="0 0 440 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  {/* Outer Glow & Border with 3 Rounded Corners and 1 Diagonal Beveled Corner */}
                  <path
                    d={lang === 'ar'
                      ? "M 414 2 L 84 2 L 2 68 L 2 494 Q 2 518 26 518 L 414 518 Q 438 518 438 494 L 438 26 Q 438 2 414 2 Z"
                      : "M 26 2 L 356 2 L 438 68 L 438 494 Q 438 518 414 518 L 26 518 Q 2 518 2 494 L 2 26 Q 2 2 26 2 Z"
                    }
                    stroke="rgba(59, 130, 246, 0.45)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Animated stroke running counter-clockwise */}
                  <path
                    d={lang === 'ar'
                      ? "M 438 260 L 438 26 Q 438 2 414 2 L 84 2 L 2 68 L 2 494 Q 2 518 26 518 L 414 518 Q 438 518 438 494 Z"
                      : "M 2 260 L 2 26 Q 2 2 26 2 L 356 2 L 438 68 L 438 494 Q 438 518 414 518 L 26 518 Q 2 518 2 494 Z"
                    }
                    className="tech-border-flow signin-border-flow flow-from-left"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Animated stroke running clockwise */}
                  <path
                    d={lang === 'ar'
                      ? "M 2 260 L 2 494 Q 2 518 26 518 L 414 518 Q 438 518 438 494 L 438 26 Q 438 2 414 2 L 84 2 L 2 68 Z"
                      : "M 438 260 L 438 494 Q 438 518 414 518 L 26 518 Q 2 518 2 494 L 2 26 Q 2 2 26 2 L 356 2 L 438 68 Z"
                    }
                    className="tech-border-flow signin-border-flow flow-from-right"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* ────────────────────────────────────────────────────────
                  VIEW 1: AUTHENTICATING / VALIDATING ACCESS SPINNER
                 ──────────────────────────────────────────────────────── */}
              {authState === 'authenticating' && (
                <div className="signin-loading-box">
                  <div className="signin-spinner" />
                  <h3 className="signin-loading-title">{authenticatingTitle}</h3>
                  <p className="signin-loading-subtitle">{authenticatingSubtitle}</p>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 2: WELCOME BACK / LOGIN SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'login' && (
                <>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'مرحباً بك مجدداً' : 'Welcome Back'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'سجل الدخول للوصول إلى تجربتك المخصصة في جيو فيجن.' : 'Sign in to access your personalized GeoVision experience.'}
                  </p>

                  {authError && (
                    <div className="signin-error-banner">
                      <AlertCircle size={15} style={{ flexShrink: 0 }} />
                      <span>{getErrorMessage(authError)}</span>
                    </div>
                  )}

                  <form onSubmit={handleFormSignIn} className="signin-form">
                    {/* Email / Username Field */}
                    <div className="signin-field-group">
                      <label className="signin-field-label">{lang === 'ar' ? 'البريد الإلكتروني / اسم المستخدم' : 'Email/ Username'}</label>
                      <div className="signin-input-wrapper">
                        <User size={15} className="signin-input-icon" />
                        <input
                          type="text"
                          className="signin-input"
                          placeholder={lang === 'ar' ? 'أدخل البريد الإلكتروني أو اسم المستخدم' : 'Enter email or username'}
                          value={authEmail}
                          onChange={(e) => { setAuthEmail(e.target.value); setAuthError(''); }}
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="signin-field-group">
                      <label className="signin-field-label">{lang === 'ar' ? 'كلمة المرور' : 'Password'}</label>
                      <div className="signin-input-wrapper">
                        <Lock size={15} className="signin-input-icon" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="signin-input"
                          placeholder={lang === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}
                          value={authPassword}
                          onChange={(e) => { setAuthPassword(e.target.value); setAuthError(''); }}
                        />
                        <button
                          type="button"
                          className="signin-eye-btn"
                          onClick={() => setShowPassword(!showPassword)}
                          title={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password Row */}
                    <div className="signin-options-row">
                      <label className="signin-checkbox-label">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>{lang === 'ar' ? 'تذكرني' : 'Remember me'}</span>
                      </label>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setAuthError('');
                          setAuthState('forgotPassword');
                        }}
                        className="signin-forgot-link"
                      >
                        {lang === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}
                      </a>
                    </div>

                    {/* Sign In Primary CTA */}
                    <button type="submit" className="signin-submit-btn">
                      <span>{lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}</span>
                      {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>

                    {/* Divider */}
                    <div className="signin-divider">
                      <div className="signin-divider-line" />
                      <span>{lang === 'ar' ? 'أو' : 'OR'}</span>
                      <div className="signin-divider-line" />
                    </div>

                    {/* Continue as Guest */}
                    <button
                      type="button"
                      className="signin-guest-btn"
                      onClick={handleContinueAsGuest}
                    >
                      <span>{lang === 'ar' ? 'المتابعة كضيف' : 'Continue as Guest'}</span>
                      <User size={15} />
                    </button>

                    {/* Sign Up Footer */}
                    <div className="signin-footer-text">
                      <span>{lang === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"} </span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setAuthError('');
                          setAuthState('creatingAccount');
                        }}
                        className="signin-signup-link"
                      >
                        {lang === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
                      </a>
                    </div>
                  </form>
                </>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 3: FORGOT PASSWORD / REQUEST OTP SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'forgotPassword' && (
                <>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'استعادة كلمة المرور' : 'Forgot Password'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'أدخل بريدك الإلكتروني أو اسم المستخدم المسجل لاستلام رمز التحقق.' : 'Enter your registered email or username to receive a verification code.'}
                  </p>

                  {authError && (
                    <div className="signin-error-banner">
                      <AlertCircle size={15} style={{ flexShrink: 0 }} />
                      <span>{getErrorMessage(authError)}</span>
                    </div>
                  )}

                  <form onSubmit={handleRequestOtp} className="signin-form">
                    <div className="signin-field-group">
                      <label className="signin-field-label">{lang === 'ar' ? 'البريد الإلكتروني / اسم المستخدم' : 'Email / Username'}</label>
                      <div className="signin-input-wrapper">
                        <Mail size={15} className="signin-input-icon" />
                        <input
                          type="text"
                          className="signin-input"
                          placeholder={lang === 'ar' ? 'أدخل البريد أو اسم المستخدم' : 'Enter email or username'}
                          value={authEmail}
                          onChange={(e) => { setAuthEmail(e.target.value); setAuthError(''); }}
                        />
                      </div>
                    </div>

                    <div className="signin-btn-row">
                      <button
                        type="button"
                        className="signin-guest-btn"
                        onClick={() => { setAuthError(''); setAuthState('login'); }}
                      >
                        {lang === 'ar' ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
                        <span>{lang === 'ar' ? 'العودة لتسجيل الدخول' : 'Back to Login'}</span>
                      </button>

                      <button type="submit" className="signin-submit-btn">
                        <span>{lang === 'ar' ? 'إرسال الطلب' : 'Send Request'}</span>
                        {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                      </button>
                    </div>
                  </form>
                </>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 4: OTP VERIFICATION SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'otpVerification' && (
                <>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'رمز التحقق' : 'Verification Code'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar'
                      ? `تم إرسال رمز التحقق المكون من 6 أرقام إلى ${activeOtpEmail || 'بريدك الإلكتروني'}.`
                      : `Enter the 6-digit code sent to ${activeOtpEmail || 'your email'}.`}
                  </p>

                  {authError && (
                    <div className="signin-error-banner">
                      <AlertCircle size={15} style={{ flexShrink: 0 }} />
                      <span>{getErrorMessage(authError)}</span>
                    </div>
                  )}

                  <form onSubmit={handleVerifyOtp} className="signin-form">
                    {/* 6-Digit OTP Inputs Grid */}
                    <div className="signin-otp-grid" onPaste={handleOtpPaste}>
                      {otpDigits.map((digit, idx) => (
                        <input
                          key={idx}
                          ref={(el) => (otpInputRefs.current[idx] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          className={`signin-otp-digit ${authError ? 'error' : ''}`}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                          autoFocus={idx === 0}
                        />
                      ))}
                    </div>

                    {/* Resend Timer Row */}
                    <div className="signin-timer-row">
                      <span>
                        {otpTimer > 0
                          ? (lang === 'ar' ? `إعادة الإرسال بعد ${otpTimer} ثانية` : `Resend code in ${otpTimer}s`)
                          : (lang === 'ar' ? 'انتهت صلاحية الرمز' : 'Code expired')}
                      </span>
                      <button
                        type="button"
                        className="signin-resend-btn"
                        onClick={handleResendOtp}
                        disabled={otpTimer > 0}
                      >
                        {lang === 'ar' ? 'إعادة إرسال الرمز' : 'Resend Code'}
                      </button>
                    </div>

                    <div className="signin-btn-row">
                      <button
                        type="button"
                        className="signin-guest-btn"
                        onClick={() => { setAuthError(''); setAuthState('forgotPassword'); }}
                      >
                        {lang === 'ar' ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
                        <span>{lang === 'ar' ? 'تغيير البريد الإلكتروني' : 'Change Email'}</span>
                      </button>

                      <button type="submit" className="signin-submit-btn">
                        <span>{lang === 'ar' ? 'تأكيد الرمز' : 'Verify Code'}</span>
                        {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                      </button>
                    </div>
                  </form>
                </>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 5: RESET PASSWORD SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'resettingPassword' && (
                <>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'كلمة المرور الجديدة' : 'Reset Password'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'أدخل كلمة مرور جديدة قوية لحسابك (6 أحرف على الأقل).' : 'Create a new secure password for your GeoVision account (min 6 characters).'}
                  </p>

                  {authError && (
                    <div className="signin-error-banner">
                      <AlertCircle size={15} style={{ flexShrink: 0 }} />
                      <span>{getErrorMessage(authError)}</span>
                    </div>
                  )}

                  <form onSubmit={handleResetPasswordSubmit} className="signin-form">
                    <div className="signin-field-group">
                      <label className="signin-field-label">{lang === 'ar' ? 'كلمة المرور الجديدة' : 'New Password'}</label>
                      <div className="signin-input-wrapper">
                        <Lock size={15} className="signin-input-icon" />
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          className="signin-input"
                          placeholder={lang === 'ar' ? 'أدخل كلمة المرور الجديدة' : 'Enter new password'}
                          value={newPassword}
                          onChange={(e) => { setNewPassword(e.target.value); setAuthError(''); }}
                        />
                        <button
                          type="button"
                          className="signin-eye-btn"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    <div className="signin-field-group">
                      <label className="signin-field-label">{lang === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}</label>
                      <div className="signin-input-wrapper">
                        <Lock size={15} className="signin-input-icon" />
                        <input
                          type={showConfirmNewPassword ? 'text' : 'password'}
                          className="signin-input"
                          placeholder={lang === 'ar' ? 'أعد إدخال كلمة المرور' : 'Confirm new password'}
                          value={confirmNewPassword}
                          onChange={(e) => { setConfirmNewPassword(e.target.value); setAuthError(''); }}
                        />
                        <button
                          type="button"
                          className="signin-eye-btn"
                          onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                        >
                          {showConfirmNewPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="signin-submit-btn">
                      <span>{lang === 'ar' ? 'حفظ كلمة المرور' : 'Confirm & Save'}</span>
                      {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                  </form>
                </>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 6: PASSWORD UPDATED SUCCESS SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'passwordUpdated' && (
                <div style={{ textAlign: 'center', padding: '12px 0 4px 0' }}>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'مرحباً بك مجدداً' : 'Welcome Back'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'سجل الدخول للوصول إلى ميزات جيو فيجن المخصصة.' : 'Sign in to access personalized GeoVision features.'}
                  </p>

                  <div style={{ margin: '18px auto 14px auto', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={passwordSuccessIcon}
                      alt="Password Updated"
                      style={{ width: '100px', height: 'auto', objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0, 43, 91, 0.16))' }}
                    />
                  </div>

                  <h3 className="signin-status-title">
                    {lang === 'ar' ? 'تم تحديث كلمة المرور بنجاح' : 'Password has been updated successfully'}
                  </h3>
                  <p className="signin-status-desc">
                    {lang === 'ar' ? 'حاول تسجيل الدخول للمتابعة' : 'Try to login for next step'}
                  </p>

                  <div className="signin-footer-text" style={{ marginTop: '14px' }}>
                    <span>{lang === 'ar' ? 'العودة إلى ' : 'Back to '}</span>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setAuthError('');
                        setAuthState('login');
                      }}
                      className="signin-signup-link"
                      style={{ fontWeight: '700', textDecoration: 'underline' }}
                    >
                      {lang === 'ar' ? 'تسجيل الدخول' : 'Login'}
                    </a>
                  </div>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 7: CREATE ACCOUNT / SIGN UP SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'creatingAccount' && (
                <>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'إنشاء حساب جديد' : 'Create account'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar'
                      ? 'أنشئ حسابك في جيو فيجن لحفظ المفضلة وعمليات البحث المخصصة.'
                      : 'Create your GeoVision account to save favourites and personalized searches.'}
                  </p>

                  {authError && (
                    <div className="signin-error-banner">
                      <AlertCircle size={15} style={{ flexShrink: 0 }} />
                      <span>{getErrorMessage(authError)}</span>
                    </div>
                  )}

                  <form onSubmit={handleRegisterSubmit} className="signin-form">
                    {/* Row 1: First Name & Last Name */}
                    <div className="signin-row-two-col">
                      <div className="signin-field-group">
                        <label className="signin-field-label">{lang === 'ar' ? 'الاسم الأول' : 'First Name'}</label>
                        <div className="signin-input-wrapper">
                          <User size={15} className="signin-input-icon" />
                          <input
                            type="text"
                            className="signin-input"
                            placeholder={lang === 'ar' ? 'أدخل الاسم الأول' : 'Enter first name'}
                            value={regData.firstName}
                            onChange={(e) => { setRegData({ ...regData, firstName: e.target.value }); setAuthError(''); }}
                          />
                        </div>
                      </div>
                      <div className="signin-field-group">
                        <label className="signin-field-label">{lang === 'ar' ? 'اسم العائلة' : 'Last Name'}</label>
                        <div className="signin-input-wrapper">
                          <User size={15} className="signin-input-icon" />
                          <input
                            type="text"
                            className="signin-input"
                            placeholder={lang === 'ar' ? 'أدخل اسم العائلة' : 'Enter last name'}
                            value={regData.lastName}
                            onChange={(e) => { setRegData({ ...regData, lastName: e.target.value }); setAuthError(''); }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Email Address & Username */}
                    <div className="signin-row-two-col">
                      <div className="signin-field-group">
                        <label className="signin-field-label">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                        <div className="signin-input-wrapper">
                          <Mail size={15} className="signin-input-icon" />
                          <input
                            type="email"
                            className="signin-input"
                            placeholder={lang === 'ar' ? 'أدخل البريد الإلكتروني' : 'Enter email address'}
                            value={regData.email}
                            onChange={(e) => { setRegData({ ...regData, email: e.target.value }); setAuthError(''); }}
                          />
                        </div>
                      </div>
                      <div className="signin-field-group">
                        <label className="signin-field-label">{lang === 'ar' ? 'اسم المستخدم' : 'Username'}</label>
                        <div className="signin-input-wrapper">
                          <User size={15} className="signin-input-icon" />
                          <input
                            type="text"
                            className="signin-input"
                            placeholder={lang === 'ar' ? 'أدخل اسم المستخدم' : 'Enter username'}
                            value={regData.username}
                            onChange={(e) => { setRegData({ ...regData, username: e.target.value }); setAuthError(''); }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Password & Confirm Password */}
                    <div className="signin-row-two-col">
                      <div className="signin-field-group">
                        <label className="signin-field-label">{lang === 'ar' ? 'كلمة المرور' : 'Password'}</label>
                        <div className="signin-input-wrapper">
                          <Lock size={15} className="signin-input-icon" />
                          <input
                            type={showRegPassword ? 'text' : 'password'}
                            className="signin-input"
                            placeholder={lang === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}
                            value={regData.password}
                            onChange={(e) => { setRegData({ ...regData, password: e.target.value }); setAuthError(''); }}
                          />
                          <button
                            type="button"
                            className="signin-eye-btn"
                            onClick={() => setShowRegPassword(!showRegPassword)}
                            title={showRegPassword ? 'Hide password' : 'Show password'}
                          >
                            {showRegPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                          </button>
                        </div>
                      </div>

                      <div className="signin-field-group">
                        <label className="signin-field-label">{lang === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}</label>
                        <div className="signin-input-wrapper">
                          <Lock size={15} className="signin-input-icon" />
                          <input
                            type={showRegConfirmPassword ? 'text' : 'password'}
                            className="signin-input"
                            placeholder={lang === 'ar' ? 'أدخل تأكيد كلمة المرور' : 'Enter confirm password'}
                            value={regData.confirmPassword}
                            onChange={(e) => { setRegData({ ...regData, confirmPassword: e.target.value }); setAuthError(''); }}
                          />
                          <button
                            type="button"
                            className="signin-eye-btn"
                            onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                            title={showRegConfirmPassword ? 'Hide password' : 'Show password'}
                          >
                            {showRegConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Primary CTA Submit Button */}
                    <button type="submit" className="signin-submit-btn" style={{ marginTop: '6px' }}>
                      <span>{lang === 'ar' ? 'إنشاء الحساب' : 'Sign Up'}</span>
                      {lang === 'ar' ? <ChevronLeft size={16} /> : <ArrowRight size={16} />}
                    </button>

                    {/* OR Divider */}
                    <div className="signin-divider">
                      <div className="signin-divider-line" />
                      <span>{lang === 'ar' ? 'أو' : 'OR'}</span>
                      <div className="signin-divider-line" />
                    </div>

                    {/* Continue as Guest Button */}
                    <button
                      type="button"
                      className="signin-guest-btn"
                      onClick={handleContinueAsGuest}
                    >
                      <span>{lang === 'ar' ? 'المتابعة كضيف' : 'Continue as Guest'}</span>
                      <User size={15} />
                    </button>

                    {/* Footer Link */}
                    <div className="signin-footer-text">
                      <span>{lang === 'ar' ? 'لديك حساب بالفعل؟' : "Don't have an account?"} </span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setAuthError('');
                          setAuthState('login');
                        }}
                        className="signin-signup-link"
                      >
                        {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                      </a>
                    </div>
                  </form>
                </>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 8: ACCOUNT CREATED SUCCESS SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'accountCreated' && (
                <div style={{ textAlign: 'center', padding: '12px 0' }}>
                  <div className="signin-success-check-badge" style={{ margin: '0 auto 16px auto' }}>
                    <Check size={42} strokeWidth={3} />
                  </div>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account Created!'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar'
                      ? `أهلاً بك في جيو فيجن. تم تسجيل حسابك (${authEmail}) بنجاح. يمكنك الآن تسجيل الدخول.`
                      : `Welcome to GeoVision! Your account (${authEmail}) is ready. Please sign in to proceed.`}
                  </p>

                  <button
                    type="button"
                    className="signin-submit-btn"
                    onClick={() => { setAuthError(''); setAuthState('login'); }}
                  >
                    <span>{lang === 'ar' ? 'تسجيل الدخول الآن' : 'Sign In Now'}</span>
                    {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                  </button>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 9: SESSION EXPIRED SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'sessionExpired' && (
                <div style={{ textAlign: 'center', padding: '12px 0' }}>
                  <div className="auth-dialog-icon-wrapper warning">
                    <AlertCircle size={30} />
                  </div>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'انتهت صلاحية الجلسة' : 'Session Expired'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar'
                      ? 'انتهت صلاحية جلستك السابقة لأسباب أمنية. يرجى تسجيل الدخول مجدداً أو المتابعة كضيف.'
                      : 'Your active session has expired due to security timeout. Please re-authenticate or continue as guest.'}
                  </p>

                  <div className="signin-btn-row">
                    <button
                      type="button"
                      className="signin-guest-btn"
                      onClick={handleContinueAsGuest}
                    >
                      <User size={15} />
                      <span>{lang === 'ar' ? 'المتابعة كضيف' : 'Continue as Guest'}</span>
                    </button>

                    <button
                      type="button"
                      className="signin-submit-btn"
                      onClick={() => { setAuthError(''); setAuthState('login'); }}
                    >
                      <span>{lang === 'ar' ? 'تسجيل الدخول مجدداً' : 'Sign In Again'}</span>
                      {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                  </div>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 10: LOGIN SUCCESS SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'loginSuccess' && (
                <div style={{ textAlign: 'center', padding: '12px 0 4px 0' }}>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'مرحباً بك مجدداً' : 'Welcome Back'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'سجل الدخول للوصول إلى ميزات جيو فيجن المخصصة.' : 'Sign in to access personalized GeoVision features.'}
                  </p>

                  <div className="signin-success-check-badge">
                    <Check size={42} strokeWidth={3} />
                  </div>

                  <h3 className="signin-status-title" style={{ maxWidth: '320px', margin: '0 auto 16px auto' }}>
                    {lang === 'ar' ? 'مرحباً بك مجدداً! لقد قمت بتسجيل الدخول بنجاح.' : 'Welcome back! You have successfully logged in.'}
                  </h3>

                  <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="signin-submit-btn"
                      onClick={() => {
                        if (setIsSignInOpen) setIsSignInOpen(false);
                        if (setShowMap) setShowMap(true);
                        setAuthState('login');
                      }}
                    >
                      <span>{lang === 'ar' ? 'متابعة البحث على الخريطة' : 'Continue Search on Map'}</span>
                      {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>

                    <div className="signin-footer-text">
                      <span>{lang === 'ar' ? 'أو العودة إلى ' : 'Or return to '}</span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (setIsSignInOpen) setIsSignInOpen(false);
                          if (setShowMap) setShowMap(false);
                          setAuthState('login');
                        }}
                        className="signin-signup-link"
                        style={{ fontWeight: '700', textDecoration: 'underline' }}
                      >
                        {lang === 'ar' ? 'الصفحة الرئيسية' : 'Home Page'}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 11: SIGN OUT CONFIRMATION SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'signOutConfirm' && (
                <div style={{ textAlign: 'center', padding: '12px 0 4px 0' }}>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'لقد قمت بتسجيل الخروج من حسابك بنجاح.' : 'You have successfully signed out your account.'}
                  </p>

                  <div className="signout-icon-box">
                    <LogOut size={36} strokeWidth={2.2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'translateX(2px)' }} />
                  </div>

                  <h3 className="signin-status-title" style={{ fontSize: '16.5px', margin: '0 auto 22px auto', maxWidth: '340px', lineHeight: 1.45 }}>
                    {lang === 'ar' ? 'هل أنت متأكد من رغبتك في تسجيل الخروج من حساب جيو فيجن الخاص بك؟' : 'Are you sure you want to sign out of your GeoVision account?'}
                  </h3>

                  <div className="signin-btn-row">
                    <button
                      type="button"
                      className="signin-guest-btn"
                      onClick={() => {
                        setAuthError('');
                        if (setIsSignInOpen) setIsSignInOpen(false);
                        setAuthState('login');
                      }}
                    >
                      <span>{lang === 'ar' ? 'إلغاء' : 'Cancel'}</span>
                      <X size={15} />
                    </button>

                    <button
                      type="button"
                      className="signin-submit-btn"
                      onClick={() => {
                        authService.signOut();
                        if (setIsLoggedIn) setIsLoggedIn(false);
                        if (setIsGuest) setIsGuest(true);
                        if (showToast) {
                          showToast(lang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'You have successfully signed out');
                        }
                        setAuthState('signOutSuccess');
                      }}
                    >
                      <span>{lang === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}</span>
                      <LogOut size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  VIEW 12: SIGN OUT SUCCESS SCREEN
                 ──────────────────────────────────────────────────────── */}
              {authState === 'signOutSuccess' && (
                <div style={{ textAlign: 'center', padding: '12px 0 4px 0' }}>
                  <h2 className="signin-card-title">{lang === 'ar' ? 'تم تسجيل الخروج' : 'Signed Out'}</h2>
                  <p className="signin-card-desc">
                    {lang === 'ar' ? 'لقد قمت بتسجيل الخروج من حسابك بنجاح.' : 'You have successfully signed out your account.'}
                  </p>

                  <div className="signin-success-check-badge">
                    <Check size={42} strokeWidth={3} />
                  </div>

                  <h3 className="signin-status-title" style={{ maxWidth: '320px', margin: '0 auto 16px auto' }}>
                    {lang === 'ar' ? 'تم إنهاء الجلسة بنجاح. شكراً لاستخدامك جيو فيجن!' : 'Session ended successfully. Thank you for using GeoVision!'}
                  </h3>

                  <div className="signin-btn-row" style={{ marginTop: '16px' }}>
                    <button
                      type="button"
                      className="signin-guest-btn"
                      onClick={() => {
                        if (setIsSignInOpen) setIsSignInOpen(false);
                        if (setShowMap) setShowMap(false);
                        setAuthState('login');
                      }}
                    >
                      <span>{lang === 'ar' ? 'الصفحة الرئيسية' : 'Home Page'}</span>
                    </button>

                    <button
                      type="button"
                      className="signin-submit-btn"
                      onClick={() => {
                        setAuthError('');
                        setAuthState('login');
                      }}
                    >
                      <span>{lang === 'ar' ? 'تسجيل الدخول مجدداً' : 'Sign In Again'}</span>
                      {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
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




