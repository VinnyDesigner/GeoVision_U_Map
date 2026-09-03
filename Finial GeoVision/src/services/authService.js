/**
 * GeoVision Authentication Service
 * Provides robust stateful authentication, session persistence, OTP generation,
 * account registration, password recovery, and role management.
 */

const STORAGE_KEYS = {
  SESSION: 'geovision_auth_session',
  USERS: 'geovision_registered_users',
  ACTIVE_OTP: 'geovision_active_otp',
  REMEMBER_ME: 'geovision_remember_me'
};

// Default pre-seeded accounts for immediate testing
const DEFAULT_USERS = [
  {
    firstName: 'Admin',
    lastName: 'User',
    username: 'admin',
    email: 'admin@geovision.ae',
    password: 'password123',
    role: 'admin',
    department: 'Department of Government Enablement'
  },
  {
    firstName: 'Spatial',
    lastName: 'Analyst',
    username: 'analyst',
    email: 'user@geovision.gov.ae',
    password: 'password123',
    role: 'user',
    department: 'Abu Dhabi Spatial Data Center'
  },
  {
    firstName: 'Demo',
    lastName: 'Guest',
    username: 'demo',
    email: 'demo@geovision.ae',
    password: 'password123',
    role: 'user',
    department: 'Public Portal'
  }
];

/**
 * Initialize registered users list
 */
function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading users:', e);
    return DEFAULT_USERS;
  }
}

/**
 * Save user to registered users repository
 */
function saveUser(user) {
  const users = getRegisteredUsers();
  const index = users.findIndex(
    u => u.username.toLowerCase() === user.username.toLowerCase() ||
         u.email.toLowerCase() === user.email.toLowerCase()
  );
  if (index >= 0) {
    users[index] = { ...users[index], ...user };
  } else {
    users.push(user);
  }
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

export const authService = {
  /**
   * Load active session on application startup
   */
  getInitialSession() {
    try {
      // Check local storage first (Remember Me)
      const local = localStorage.getItem(STORAGE_KEYS.SESSION);
      if (local) {
        const parsed = JSON.parse(local);
        return { user: parsed, isLoggedIn: true, isGuest: false };
      }
      // Check session storage
      const session = sessionStorage.getItem(STORAGE_KEYS.SESSION);
      if (session) {
        const parsed = JSON.parse(session);
        return { user: parsed, isLoggedIn: true, isGuest: false };
      }
    } catch (e) {
      console.error('Failed to read session:', e);
    }
    // Default unauthenticated / guest fallback
    return {
      user: null,
      isLoggedIn: false,
      isGuest: true
    };
  },

  /**
   * Sign In with Email/Username + Password
   */
  async login(identifier, password, rememberMe = true) {
    // Artificial latency for authenticating transition
    await new Promise(resolve => setTimeout(resolve, 850));

    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    if (!cleanId) {
      return { success: false, error: 'email_required' };
    }
    if (!cleanPass) {
      return { success: false, error: 'password_required' };
    }

    const users = getRegisteredUsers();
    const matchedUser = users.find(
      u => u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );

    if (!matchedUser) {
      return { success: false, error: 'user_not_found' };
    }

    if (matchedUser.password !== cleanPass) {
      return { success: false, error: 'invalid_credentials' };
    }

    const sessionUser = {
      firstName: matchedUser.firstName,
      lastName: matchedUser.lastName,
      username: matchedUser.username,
      email: matchedUser.email,
      role: matchedUser.role || 'user',
      department: matchedUser.department || 'GeoVision User',
      rememberMe
    };

    if (rememberMe) {
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionUser));
      sessionStorage.removeItem(STORAGE_KEYS.SESSION);
    } else {
      sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionUser));
      localStorage.removeItem(STORAGE_KEYS.SESSION);
    }

    return { success: true, user: sessionUser };
  },

  /**
   * Register a new user account
   */
  async register({ firstName, lastName, email, username, password, confirmPassword }) {
    await new Promise(resolve => setTimeout(resolve, 750));

    if (!firstName?.trim()) return { success: false, error: 'firstname_required' };
    if (!lastName?.trim()) return { success: false, error: 'lastname_required' };
    if (!email?.trim()) return { success: false, error: 'email_required' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return { success: false, error: 'invalid_email_format' };
    }
    if (!username?.trim()) return { success: false, error: 'username_required' };
    if (!password) return { success: false, error: 'password_required' };
    if (password.length < 6) return { success: false, error: 'password_too_short' };
    if (password !== confirmPassword) return { success: false, error: 'password_mismatch' };

    const users = getRegisteredUsers();
    const emailTaken = users.some(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (emailTaken) return { success: false, error: 'email_already_exists' };

    const usernameTaken = users.some(u => u.username.toLowerCase() === username.trim().toLowerCase());
    if (usernameTaken) return { success: false, error: 'username_already_exists' };

    const newUser = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      username: username.trim().toLowerCase(),
      password: password,
      role: 'user',
      department: 'Abu Dhabi Citizen / Spatial User'
    };

    saveUser(newUser);

    return { success: true, user: newUser };
  },

  /**
   * Request OTP for password recovery
   */
  async requestOtp(identifier) {
    await new Promise(resolve => setTimeout(resolve, 600));

    const cleanId = (identifier || '').trim().toLowerCase();
    if (!cleanId) return { success: false, error: 'identifier_required' };

    const users = getRegisteredUsers();
    const user = users.find(
      u => u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );

    // Generate clean 6-digit test OTP (456789)
    const generatedOtp = '456789';
    const expiresAt = Date.now() + 60 * 1000; // 60 seconds valid

    const otpData = {
      identifier: cleanId,
      email: user ? user.email : (cleanId.includes('@') ? cleanId : `${cleanId}@geovision.ae`),
      otp: generatedOtp,
      expiresAt
    };

    localStorage.setItem(STORAGE_KEYS.ACTIVE_OTP, JSON.stringify(otpData));

    return {
      success: true,
      otp: generatedOtp,
      email: otpData.email,
      expiresAt
    };
  },

  /**
   * Verify entered OTP code
   */
  verifyOtp(enteredCode) {
    const cleanEntered = String(enteredCode || '').trim();

    // Dedicated test bypass OTP codes (456789, 123456)
    const TEST_OTP_CODES = ['456789', '123456'];
    if (TEST_OTP_CODES.includes(cleanEntered)) {
      const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_OTP);
      if (raw) {
        try {
          const otpData = JSON.parse(raw);
          return { success: true, identifier: otpData.identifier, email: otpData.email };
        } catch (e) {
          // ignore parse error and fallback
        }
      }
      return { success: true, identifier: 'admin@geovision.ae', email: 'admin@geovision.ae' };
    }

    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_OTP);
    if (!raw) {
      return { success: false, error: 'otp_not_found', expired: true };
    }

    const otpData = JSON.parse(raw);

    if (Date.now() > otpData.expiresAt) {
      return { success: false, error: 'otp_expired', expired: true };
    }

    if (cleanEntered !== String(otpData.otp).trim()) {
      return { success: false, error: 'otp_incorrect' };
    }

    return { success: true, identifier: otpData.identifier, email: otpData.email };
  },

  /**
   * Reset Password
   */
  async resetPassword(identifier, newPassword, confirmPassword) {
    await new Promise(resolve => setTimeout(resolve, 650));

    if (!newPassword) return { success: false, error: 'password_required' };
    if (newPassword.length < 6) return { success: false, error: 'password_too_short' };
    if (newPassword !== confirmPassword) return { success: false, error: 'password_mismatch' };

    const cleanId = (identifier || '').trim().toLowerCase();
    const users = getRegisteredUsers();
    const userIndex = users.findIndex(
      u => u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );

    if (userIndex >= 0) {
      users[userIndex].password = newPassword;
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    } else {
      // Create user if not present
      users.push({
        firstName: 'GeoVision',
        lastName: 'User',
        username: cleanId.includes('@') ? cleanId.split('@')[0] : cleanId,
        email: cleanId.includes('@') ? cleanId : `${cleanId}@geovision.ae`,
        password: newPassword,
        role: 'user'
      });
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }

    localStorage.removeItem(STORAGE_KEYS.ACTIVE_OTP);
    return { success: true };
  },

  /**
   * Sign Out: Clears active storage session without erasing users
   */
  signOut() {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
    return { success: true };
  }
};
