import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Mail,
  AlertCircle,
  Check,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X
} from 'lucide-react';
import { authService } from '../services/authService.js';
import passwordSuccessIcon from '../assets/password_success_icon.svg';
import loginBg from '../assets/login_bg.png';
import loginBgDark from '../assets/login_bg_dark.jpg';

export default function AuthModal({
  isOpen,
  onClose,
  lang = 'en',
  theme = 'light',
  isLoggedIn,
  setIsLoggedIn,
  currentUser,
  setCurrentUser,
  setIsGuest,
  setIsSignInOpen,
  authState: propAuthState,
  setAuthState: propSetAuthState,
  showToast,
  onSuccess,
  isOverlay = false
}) {
  const [internalAuthState, setInternalAuthState] = useState('login');
  const authState = propAuthState !== undefined ? propAuthState : internalAuthState;
  const setAuthState = propSetAuthState || setInternalAuthState;
  const [authError, setAuthError] = useState('');
  const [authenticatingTitle, setAuthenticatingTitle] = useState('');
  const [authenticatingSubtitle, setAuthenticatingSubtitle] = useState('');

  // Login form fields
  const [authEmail, setAuthEmail] = useState('test@geovision.com');
  const [authPassword, setAuthPassword] = useState('Test@12345');
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

  const handleCloseModal = () => {
    setAuthError('');
    if (setIsSignInOpen) setIsSignInOpen(false);
    if (onClose) onClose();
    setAuthState('login');
  };

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
        if (onSuccess) onSuccess(result.user);
        if (onClose) onClose();
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
    handleCloseModal();
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
      setActiveOtpEmail(authEmail);
      setOtpTimer(60);
      setOtpDigits(['', '', '', '', '', '']);
      setAuthState('otpVerification');
      if (showToast) {
        showToast(lang === 'ar' ? `تم إرسال رمز التحقق (رمز تجريبي: ${result.code})` : `Verification code dispatched (Demo: ${result.code})`);
      }
    } else {
      setAuthError(result.error);
      setAuthState('forgotPassword');
    }
  };

  // ── 4. RESEND OTP HANDLER ──
  const handleResendOtp = async () => {
    if (otpTimer > 0) return;
    setAuthError('');
    const result = await authService.requestOtp(authEmail);
    if (result.success) {
      setOtpTimer(60);
      setOtpDigits(['', '', '', '', '', '']);
      if (showToast) {
        showToast(lang === 'ar' ? `تمت إعادة إرسال رمز التحقق (${result.code})` : `Code resent successfully (Demo: ${result.code})`);
      }
    } else {
      setAuthError(result.error);
    }
  };

  // ── 5. OTP INPUT CONTROLS ──
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newDigits = [...otpDigits];
    newDigits[index] = value.slice(-1);
    setOtpDigits(newDigits);
    setAuthError('');

    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pasted)) {
      const digits = pasted.split('');
      setOtpDigits(digits);
      otpInputRefs.current[5]?.focus();
    }
  };

  // ── 6. VERIFY OTP HANDLER ──
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setAuthError('');
    const code = otpDigits.join('');

    if (code.length < 6) {
      setAuthError('otp_incomplete');
      return;
    }

    setAuthenticatingTitle(lang === 'ar' ? 'جاري التحقق من الرمز...' : 'Verifying Code...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري مطابقة رمز التحقق وتأكيد الجلسة' : 'Matching verification code and validating one-time session');
    setAuthState('authenticating');

    const result = authService.verifyOtp(code);

    if (result.success) {
      setNewPassword('');
      setConfirmNewPassword('');
      setAuthState('resettingPassword');
      if (showToast) {
        showToast(lang === 'ar' ? 'تم تأكيد الرمز بنجاح. يرجى إدخال كلمة المرور الجديدة' : 'Verification code verified. Set new password.');
      }
    } else {
      setAuthError(result.error);
      setAuthState('otpVerification');
    }
  };

  // ── 7. RESET PASSWORD SUBMIT HANDLER ──
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

    setAuthenticatingTitle(lang === 'ar' ? 'جاري حفظ كلمة المرور...' : 'Updating Password...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري تشفير وتحديث بيانات الدخول' : 'Encrypting and updating your credentials securely');
    setAuthState('authenticating');

    const result = await authService.resetPassword(authEmail, newPassword, confirmNewPassword);

    if (result.success) {
      setAuthPassword(newPassword);
      setAuthState('passwordUpdated');
      if (showToast) {
        showToast(lang === 'ar' ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!');
      }
    } else {
      setAuthError(result.error);
      setAuthState('resettingPassword');
    }
  };

  // ── 8. REGISTER SUBMIT HANDLER ──
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');

    if (!regData.firstName.trim()) {
      setAuthError('firstname_required');
      return;
    }
    if (!regData.lastName.trim()) {
      setAuthError('lastname_required');
      return;
    }
    if (!regData.email.trim()) {
      setAuthError('email_required');
      return;
    }
    if (!regData.username.trim()) {
      setAuthError('username_required');
      return;
    }
    if (!regData.password) {
      setAuthError('password_required');
      return;
    }
    if (regData.password.length < 6) {
      setAuthError('password_too_short');
      return;
    }
    if (regData.password !== regData.confirmPassword) {
      setAuthError('password_mismatch');
      return;
    }

    setAuthenticatingTitle(lang === 'ar' ? 'جاري إنشاء الحساب...' : 'Creating Account...');
    setAuthenticatingSubtitle(lang === 'ar' ? 'جاري إعداد مساحة العمل الخاصة بك' : 'Configuring your personal workspace and security profile');
    setAuthState('authenticating');

    const result = await authService.register(regData);

    if (result.success) {
      setAuthEmail(regData.email);
      setAuthPassword(regData.password);
      setAuthState('accountCreated');
      if (showToast) {
        showToast(lang === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
      }
    } else {
      setAuthError(result.error);
      setAuthState('creatingAccount');
    }
  };

  if (!isOpen) return null;

  const cardContent = (
    <div className="signin-card-container" style={{ margin: 0, position: 'relative' }}>
      {/* SVG ClipPath Definition for Exact Corner Radii and Bevel */}
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

      <div className={`signin-card ${authState === 'creatingAccount' ? 'signin-card--signup' : ''}`} style={{ position: 'relative' }}>
        {/* Tech SVG Border Overlay with Animated Stroke */}
        <div className="tech-card-border-container">
          <svg width="100%" height="100%" viewBox="0 0 440 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d={lang === 'ar'
                ? "M 414 2 L 84 2 L 2 68 L 2 494 Q 2 518 26 518 L 414 518 Q 438 518 438 494 L 438 26 Q 438 2 414 2 Z"
                : "M 26 2 L 356 2 L 438 68 L 438 494 Q 438 518 414 518 L 26 518 Q 2 518 2 494 L 2 26 Q 2 2 26 2 Z"
              }
              stroke="rgba(56, 189, 248, 0.40)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={lang === 'ar'
                ? "M 438 260 L 438 26 Q 438 2 414 2 L 84 2 L 2 68 L 2 494 Q 2 518 26 518 L 414 518 Q 438 518 438 494 Z"
                : "M 2 260 L 2 26 Q 2 2 26 2 L 356 2 L 438 68 L 438 494 Q 438 518 414 518 L 26 518 Q 2 518 2 494 Z"
              }
              className="tech-border-flow signin-border-flow flow-from-left"
              vectorEffect="non-scaling-stroke"
            />
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

        {/* ── VIEW 1: AUTHENTICATING SPINNER ── */}
        {authState === 'authenticating' && (
          <div className="signin-loading-box">
            <div className="signin-spinner" />
            <h3 className="signin-loading-title">{authenticatingTitle}</h3>
            <p className="signin-loading-subtitle">{authenticatingSubtitle}</p>
          </div>
        )}

        {/* ── VIEW 2: LOGIN SCREEN ── */}
        {authState === 'login' && (
          <>
            <h2 className="signin-card-title">{lang === 'ar' ? 'مرحباً بك مجدداً' : 'Welcome Back'}</h2>
            <p className="signin-card-desc">
              {lang === 'ar' ? 'سجل الدخول للوصول إلى تجربتك المخصصة في جيو فيجن.' : 'Sign in to access your personalized GeoVision workspace.'}
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
                <label className="signin-field-label">{lang === 'ar' ? 'البريد الإلكتروني / اسم المستخدم' : 'Email / Username'}</label>
                <div className="signin-input-wrapper">
                  <User size={15} className="signin-input-icon" />
                  <input
                    type="text"
                    className="signin-input"
                    placeholder={lang === 'ar' ? 'أدخل البريد أو اسم المستخدم' : 'Enter email or username'}
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

              {/* Remember Me & Forgot Password */}
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

        {/* ── VIEW 3: FORGOT PASSWORD ── */}
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

        {/* ── VIEW 4: OTP VERIFICATION ── */}
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
                  <span>{lang === 'ar' ? 'تغيير البريد' : 'Change Email'}</span>
                </button>

                <button type="submit" className="signin-submit-btn">
                  <span>{lang === 'ar' ? 'تأكيد الرمز' : 'Verify Code'}</span>
                  {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
              </div>
            </form>
          </>
        )}

        {/* ── VIEW 5: RESET PASSWORD ── */}
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

        {/* ── VIEW 6: PASSWORD UPDATED SUCCESS ── */}
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

        {/* ── VIEW 7: CREATE ACCOUNT ── */}
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

              <button type="submit" className="signin-submit-btn" style={{ marginTop: '6px' }}>
                <span>{lang === 'ar' ? 'إنشاء الحساب' : 'Sign Up'}</span>
                {lang === 'ar' ? <ChevronLeft size={16} /> : <ArrowRight size={16} />}
              </button>

              <div className="signin-divider">
                <div className="signin-divider-line" />
                <span>{lang === 'ar' ? 'أو' : 'OR'}</span>
                <div className="signin-divider-line" />
              </div>

              <button
                type="button"
                className="signin-guest-btn"
                onClick={handleContinueAsGuest}
              >
                <span>{lang === 'ar' ? 'المتابعة كضيف' : 'Continue as Guest'}</span>
                <User size={15} />
              </button>

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

        {/* ── VIEW 8: ACCOUNT CREATED ── */}
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

        {/* ── VIEW 9: SESSION EXPIRED ── */}
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

        {/* ── VIEW 10: LOGIN SUCCESS ── */}
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
                  handleCloseModal();
                  if (onSuccess) onSuccess();
                }}
              >
                <span>{lang === 'ar' ? 'متابعة العمل على الخريطة' : 'Continue on Map'}</span>
                {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        )}

        {/* ── VIEW 11: SIGN OUT CONFIRM ── */}
        {authState === 'signOutConfirm' && (
          <div style={{ textAlign: 'center', padding: '12px 0 4px 0' }}>
            <h2 className="signin-card-title">{lang === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}</h2>
            <p className="signin-card-desc">
              {lang === 'ar' ? 'تأكيد تسجيل الخروج من جلسة العمل الحالية.' : 'Confirm sign out from your active workspace.'}
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
                onClick={handleCloseModal}
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

        {/* ── VIEW 12: SIGN OUT SUCCESS ── */}
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
                className="signin-submit-btn"
                onClick={handleCloseModal}
              >
                <span>{lang === 'ar' ? 'المتابعة كضيف على الخريطة' : 'Continue as Guest on Map'}</span>
                {lang === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isOverlay) {
    return (
      <div
        className="auth-modal-overlay-backdrop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme === 'dark'
            ? `#020B18 url(${loginBgDark}) no-repeat center center / cover`
            : `#011E3D url(${loginBg}) no-repeat center center / cover`,
          padding: '20px',
          boxSizing: 'border-box'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCloseModal();
          }
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: theme === 'dark'
              ? 'radial-gradient(circle at center, rgba(2, 11, 24, 0.35) 0%, rgba(1, 7, 16, 0.70) 100%)'
              : 'radial-gradient(circle at center, rgba(1, 30, 61, 0.45) 0%, rgba(2, 20, 44, 0.75) 100%)',
            pointerEvents: 'none'
          }}
        />
        {cardContent}
      </div>
    );
  }

  return cardContent;
}
