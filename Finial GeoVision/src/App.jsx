import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Layers,
  Activity,
  Compass,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
  Info,
  Settings,
  Database,
  Play,
  Trash2,
  MapPin,
  Ruler,
  RefreshCw,
  RotateCcw,
  Shield,
  Eye,
  EyeOff,
  HelpCircle,
  BarChart2,
  Map,
  Sliders,
  Search,
  ArrowRight,
  ArrowLeft,
  Home,
  User,
  GraduationCap,
  Heart,
  Car,
  Building,
  Trees,
  Plus,
  Minus,
  Sparkles,
  Zap,
  Send,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  MessageSquare,
  LogIn,
  X,
  History,
  SquarePen,
  PanelLeft,
  PanelLeftClose,
  PanelRight,
  MoreVertical,
  Grid,
  List,
  Edit,
  Edit2,
  Target,
  ChevronDown,
  ChevronUp,
  Globe,
  Mountain,
  Circle,
  Square,
  Pentagon,
  MousePointer,
  Clock,
  Star,
  Navigation,
  Phone,
  Mail,
  Copy,
  Check,
  Utensils,
  Save,
  Printer,
  Pencil,
  Pin,
  PinOff,
  Footprints,
  Bike,
  Bus,
  Train,
  ArrowLeftRight,
  Loader2,
  ArrowUp,
  CornerUpRight,
  CornerUpLeft,
  RotateCw,
  Flag,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { authService } from './services/authService.js';
import { spatialAIEngineInstance, searchSpatialData, GEOVISION_SPATIAL_DATASET, executeDrawnAreaSpatialQuery, isPointInDrawnArea, cleanMarkdownText, isCategoryMatch, isSubcategoryMatch, calculateDistanceKm, getDrawnAreaLabel, resolveDistrictOrLandmark } from './services/spatialSearchService.js';
import { calculateRoadRoute, getStartNavigationUrl, TRAVEL_MODES } from './services/routingService.js';
import PrintModal from './components/PrintModal.jsx';
import GeoVisionAnalyticsChart from './components/GeoVisionAnalyticsChart.jsx';
import leftLogo from './assets/left.png';
import rightLogo from './assets/right.png';
import lagIcon from './assets/lag.svg';
import themeIcon from './assets/theme.svg';
import profileIcon from './assets/profile.svg';
import aiIcon from './assets/Ai icon.svg';
import historyIcon from './assets/History.svg';
import feedbackIcon from './assets/share feedback.svg';
import basemapLightGrayImg from './assets/basemap_light_gray.png';
import basemapStreetsImg from './assets/basemap_streets.png';
import basemapSatelliteImg from './assets/basemap_satellite.png';

import GeoVisionGradientIcon from './components/GeoVisionGradientIcon.jsx';

import compassSvg from './assets/Icons 1/Icons/compass.svg';
import navigationSvg from './assets/Icons 1/Icons/navigation.svg';
import homeSvg from './assets/Icons 1/Icons/home.svg';
import drawSvg from './assets/Icons 1/Icons/Draw.svg';
import basemapSvg from './assets/Icons 1/Icons/Basemap.svg';
import legendSvg from './assets/Icons 1/Icons/legend.svg';
import locationSvg from './assets/Icons 1/Icons/location.svg';
import categorySvg from './assets/Icons 1/Icons/category.svg';
import minusSvg from './assets/Icons 1/Icons/minus.svg';
import closeSvg from './assets/Icons 1/Icons/close.svg';
import collectionsSvg from './assets/Icons 1/Icons/My Collections.svg';
import helpIcon from './assets/help.svg';
import signInIcon from './assets/sign in.svg';
import './App.css';
import { CATEGORY_TREE, PROJECTS } from './config/constants.js';
import { GIS_CATEGORY_COLORS, getGisCategorySymbolSvg } from './utils/gisSymbols.js';
import { getTranslations, getArabicTitle, getArabicArea } from './utils/translations.js';
import { getLocationCategoryDetails } from './utils/locationDetails.js';
import FourPointStar from './components/FourPointStar.jsx';
import LeafletMap from './components/LeafletMap.jsx';
import CommonHeader from './components/CommonHeader.jsx';
import Toast from './components/Toast.jsx';
import AuthModal from './components/AuthModal.jsx';
import FeedbackModal from './components/FeedbackModal.jsx';
import FloatingFeedbackButton from './components/FloatingFeedbackButton.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import HelpSupportPage from './pages/HelpSupportPage.jsx';
import StructuredTabsBar from './components/StructuredTabsBar.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('geovision_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {
      console.warn('Unable to access localStorage for theme:', e);
    }
    return 'light';
  });

  useEffect(() => {
    try {
      localStorage.setItem('geovision_theme', theme);
    } catch (e) {
      console.warn('Unable to save theme to localStorage:', e);
    }
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark', 'dark-theme');
      document.documentElement.classList.add('dark', 'dark-theme');
      document.body.classList.remove('light', 'light-theme');
      document.documentElement.classList.remove('light', 'light-theme');
    } else {
      document.body.classList.add('light', 'light-theme');
      document.documentElement.classList.add('light', 'light-theme');
      document.body.classList.remove('dark', 'dark-theme');
      document.documentElement.classList.remove('dark', 'dark-theme');
    }
  }, [theme]);
  const [lang, setLang] = useState('en');
  const [currentUser, setCurrentUser] = useState(() => {
    const session = authService.getInitialSession();
    return session.user;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const session = authService.getInitialSession();
    return session.isLoggedIn;
  });
  const [isGuest, setIsGuest] = useState(() => {
    const session = authService.getInitialSession();
    return !session.isLoggedIn;
  });
  const [pendingUserAction, setPendingUserAction] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [authState, setAuthState] = useState('login');
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState('villa-royale');
  const [activeTab, setActiveTab] = useState('history'); // 'history' | 'collections' | 'layers' | 'analysis' | 'projects'
  const [collectionsTab, setCollectionsTab] = useState('queries'); // 'queries' | 'favorites'
  const [collectionsFilterQuery, setCollectionsFilterQuery] = useState('');

  // Spatial Search Results States (Declared early to ensure availability in initializers)
  const [activeSearchResults, setActiveSearchResults] = useState([]);
  const [activeSearchFilterTag, setActiveSearchFilterTag] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeDetailTab, setActiveDetailTab] = useState('overview');
  const [isDetailsMinimized, setIsDetailsMinimized] = useState(false);
  const [lastDrawnQuery, setLastDrawnQuery] = useState(null);
  const [searchBoxDrawnAttachment, setSearchBoxDrawnAttachment] = useState(null);
  const [clearVisualDrawnTrigger, setClearVisualDrawnTrigger] = useState(0);

  // In-App Road Route & Multi-Modal Navigation States
  const [activeRoute, setActiveRoute] = useState(null);
  const [travelMode, setTravelMode] = useState('car'); // 'car' | 'walk' | 'cycle' | 'bike' | 'transit' | 'train'
  const [isRouteCalculating, setIsRouteCalculating] = useState(false);
  const [routeOriginReversed, setRouteOriginReversed] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navStepIndex, setNavStepIndex] = useState(0);

  // Print & PDF Export Modal State
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [printModalConfig, setPrintModalConfig] = useState({});

  const openPrintDialog = (customConfig = {}) => {
    setPrintModalConfig(customConfig);
    setIsPrintModalOpen(true);
  };

  const [savedQueries, setSavedQueries] = useState(() => {
    const session = authService.getInitialSession();
    if (session.isLoggedIn && session.user?.username) {
      return authService.getUserSavedQueries(session.user.username);
    }
    return [];
  });

  const [favoritePlaces, setFavoritePlaces] = useState(() => {
    const session = authService.getInitialSession();
    if (session.isLoggedIn && session.user?.username) {
      return authService.getUserFavorites(session.user.username);
    }
    return [];
  });

  const [searchHistory, setSearchHistory] = useState(() => {
    const session = authService.getInitialSession();
    if (session.isLoggedIn && session.user?.username) {
      return authService.getUserSearchHistory(session.user.username);
    }
    return [];
  });

  // Synchronize collections whenever currentUser or login state changes
  useEffect(() => {
    if (isLoggedIn && currentUser?.username) {
      const q = authService.getUserSavedQueries(currentUser.username);
      const f = authService.getUserFavorites(currentUser.username);
      let h = authService.getUserSearchHistory(currentUser.username);

      // Guest -> Registered Search History Handoff
      const activeQ = (searchQuery || activeSearchFilterTag?.query || '').trim();
      const activeCat = (activeSearchFilterTag?.category || spatialAIEngineInstance.context?.dataset || 'General').trim();
      if (activeQ && activeSearchResults.length > 0) {
        const isDuplicate = h.some(item => (item.text || '').toLowerCase().trim() === activeQ.toLowerCase());
        if (!isDuplicate) {
          const newEntry = {
            id: Date.now(),
            text: activeQ,
            category: activeCat || 'Spatial Search',
            resultsCount: activeSearchResults.length,
            timestamp: 'Just now',
            queryState: { query: activeQ, category: activeCat }
          };
          h = [newEntry, ...h];
          authService.saveUserSearchHistory(currentUser.username, h);
        }
      }

      setSavedQueries(q);
      setFavoritePlaces(f);
      setSearchHistory(h);
    } else {
      setSavedQueries([]);
      setFavoritePlaces([]);
      setSearchHistory([]);
    }
  }, [isLoggedIn, currentUser?.username]);

  // Persist collections per registered user
  useEffect(() => {
    if (isLoggedIn && currentUser?.username) {
      authService.saveUserSavedQueries(currentUser.username, savedQueries);
    }
  }, [savedQueries, isLoggedIn, currentUser?.username]);

  useEffect(() => {
    if (isLoggedIn && currentUser?.username) {
      authService.saveUserFavorites(currentUser.username, favoritePlaces);
    }
  }, [favoritePlaces, isLoggedIn, currentUser?.username]);

  useEffect(() => {
    if (isLoggedIn && currentUser?.username) {
      authService.saveUserSearchHistory(currentUser.username, searchHistory);
    }
  }, [searchHistory, isLoggedIn, currentUser?.username]);

  const [restoredDrawnGeometry, setRestoredDrawnGeometry] = useState(null);
  const [activeQueryMenuId, setActiveQueryMenuId] = useState(null);
  const [renamingQueryId, setRenamingQueryId] = useState(null);
  const [renameQueryText, setRenameQueryText] = useState('');
  const [isRecentAccordionOpen, setIsRecentAccordionOpen] = useState(true);
  const [isPinnedAccordionOpen, setIsPinnedAccordionOpen] = useState(true);
  const [historyFilterQuery, setHistoryFilterQuery] = useState('');
  const [activeHistoryId, setActiveHistoryId] = useState(1);
  const [activeHistoryMenuId, setActiveHistoryMenuId] = useState(null);
  const [historyMenuPos, setHistoryMenuPos] = useState({ top: 0, left: 0 });
  const [queryMenuPos, setQueryMenuPos] = useState({ top: 0, left: 0 });
  const [renamingHistoryId, setRenamingHistoryId] = useState(null);
  const [renameHistoryText, setRenameHistoryText] = useState('');

  // Left strip floating popovers & basemap selection
  const [isMapToolsDockOpen, setIsMapToolsDockOpen] = useState(true);
  const [activeLeftPopover, setActiveLeftPopover] = useState(null); // 'basemap' | 'legend' | 'draw' | null
  const [activeBasemap, setActiveBasemap] = useState('dge_color');
  const [activeDrawTool, setActiveDrawTool] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = getTranslations(lang);

  // Layer visibilities (default to clean view as per reference UI)
  const [layers, setLayers] = useState({
    elevationSurface: false,
    buildings3D: false,
    projectBoundary: false,
    bimSublayers: false,
    heatmapOverlay: false
  });

  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  // Sidebar open/close state (hidden initially as per reference UI)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Coordinates and elevation tracked on mouse move
  const [hoveredCoords, setHoveredCoords] = useState({ lat: 0, lon: 0, elevation: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCopiedCoords, setIsCopiedCoords] = useState(false);
  const [mapScale, setMapScale] = useState('1 : 50,000');

  // Volume measurement states
  const [volumeToolActive, setVolumeToolActive] = useState(false);
  // Toast notifications
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    // Popup notifications disabled per request
    return;
  };

  const toast = Object.assign(
    (msg) => showToast(msg),
    {
      success: (msg) => showToast(msg),
      error: (msg) => showToast(msg),
      info: (msg) => showToast(msg),
      warn: (msg) => showToast(msg),
      warning: (msg) => showToast(msg)
    }
  );

  const getArabicTitle = (title) => {
    if (title.includes('Choueifat')) return 'مدرسة الشويفات الدولية- المشرف';
    if (title.includes('Khalifa University')) return 'جامعة خليفة للعلوم والتكنولوجيا';
    if (title.includes('NYU')) return 'جامعة نيويورك أبوظبي';
    if (title.includes('Sorbonne')) return 'جامعة سوربون أبوظبي';
    if (title.includes('Brighton')) return 'برايتون كوليدج أبوظبي';
    if (title.includes('Yasmina')) return 'أكاديمية الياسمينة';
    if (title.includes('Cleveland')) return 'مستشفى كليفلاند كلينك أبوظبي';
    if (title.includes('Burjeel')) return 'مستشفى برجيل أبوظبي';
    if (title.includes('Shakhbout')) return 'مدينة الشيخ شخبوط الطبية';
    if (title.includes('Danat')) return 'مستشفى دانة الإمارات للنساء والأطفال';
    if (title.includes('Mediclinic')) return 'مستشفى ميديكلينيك طريق المطار';
    if (title.includes('Mangrove')) return 'منتزه القرم الوطني';
    if (title.includes('Umm Al Emarat')) return 'منتزه أم الإمارات';
    if (title.includes('Capital Park')) return 'حديقة العاصمة';
    if (title.includes('Khalifa Park')) return 'منتزه خليفة';
    if (title.includes('Grand Mosque')) return 'جامع الشيخ زايد الكبير';
    if (title.includes('Louvre')) return 'متحف اللوفر أبوظبي';
    if (title.includes('Qasr Al Watan')) return 'قصر الوطن';
    if (title.includes('Ferrari')) return 'عالم فيراري أبوظبي';
    if (title.includes('Airport')) return 'مطار زايد الدولي';
    if (title.includes('Bus Terminal')) return 'محطة الحافلات الرئيسية أبوظبي';
    return 'مركز أبوظبي الجغرافي';
  };

  // AI Assistant Search state ('button' | 'panel')
  const [aiState, setAiState] = useState('panel');
  const [isAiClosing, setIsAiClosing] = useState(false);
  const [aiPanelSubView, setAiPanelSubView] = useState('chat'); // 'chat' | 'favorites'
  const [isAiMinimized, setIsAiMinimized] = useState(false);
  const isAISearchBarOpen = aiState === 'panel';

  // AI Spatial Search Resizable Panel Width State (min 320px, max 620px)
  const [aiPanelWidth, setAiPanelWidth] = useState(() => {
    try {
      const saved = localStorage.getItem('geovision_ai_panel_width');
      return saved ? Math.max(320, Math.min(620, parseInt(saved, 10))) : 380;
    } catch {
      return 380;
    }
  });
  const [isDraggingAiResize, setIsDraggingAiResize] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartWidthRef = useRef(380);

  const handleResizePointerDown = (e) => {
    e.preventDefault();
    setIsDraggingAiResize(true);
    dragStartXRef.current = e.clientX;
    dragStartWidthRef.current = aiPanelWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    if (!isDraggingAiResize) return;

    const handlePointerMove = (e) => {
      const deltaX = lang === 'ar' ? (e.clientX - dragStartXRef.current) : (dragStartXRef.current - e.clientX);
      const maxWidth = Math.min(window.innerWidth * 0.55, 620);
      const minWidth = 320;
      const newWidth = Math.max(minWidth, Math.min(maxWidth, dragStartWidthRef.current + deltaX));
      setAiPanelWidth(newWidth);
    };

    const handlePointerUp = () => {
      setIsDraggingAiResize(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      try {
        localStorage.setItem('geovision_ai_panel_width', String(aiPanelWidth));
      } catch {}
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDraggingAiResize, aiPanelWidth, lang]);

  // Left Search History Resizable Panel Width State (min 260px, max 550px)
  const [leftHistoryWidth, setLeftHistoryWidth] = useState(() => {
    try {
      const saved = localStorage.getItem('geovision_left_history_width');
      return saved ? Math.max(260, Math.min(550, parseInt(saved, 10))) : 320;
    } catch {
      return 320;
    }
  });
  const [isDraggingLeftResize, setIsDraggingLeftResize] = useState(false);
  const dragLeftStartXRef = useRef(0);
  const dragLeftStartWidthRef = useRef(320);

  const handleLeftResizePointerDown = (e) => {
    e.preventDefault();
    setIsDraggingLeftResize(true);
    dragLeftStartXRef.current = e.clientX;
    dragLeftStartWidthRef.current = leftHistoryWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    if (!isDraggingLeftResize) return;

    const handlePointerMove = (e) => {
      const deltaX = lang === 'ar' ? (dragLeftStartXRef.current - e.clientX) : (e.clientX - dragLeftStartXRef.current);
      const maxWidth = Math.min(window.innerWidth * 0.45, 550);
      const minWidth = 260;
      const newWidth = Math.max(minWidth, Math.min(maxWidth, dragLeftStartWidthRef.current + deltaX));
      setLeftHistoryWidth(newWidth);
    };

    const handlePointerUp = () => {
      setIsDraggingLeftResize(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      try {
        localStorage.setItem('geovision_left_history_width', String(leftHistoryWidth));
      } catch {}
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDraggingLeftResize, leftHistoryWidth, lang]);

  const handleCloseAiPanel = () => {
    setAiPanelSubView('chat');
    setIsAiClosing(true);
    setTimeout(() => {
      setAiState('button');
      setIsAiClosing(false);
    }, 300);
  };

  const setIsAISearchBarOpen = (open) => {
    if (open) {
      setIsAiClosing(false);
      setAiState('panel');
    } else {
      handleCloseAiPanel();
    }
  };

  const getChipIcon = (chip) => {
    const chipIconColor = 'currentColor';
    if (chip.action === 'save_search' || chip.action === 'add_favorite') {
      return <Bookmark size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    const text = ((chip.label || '') + ' ' + (chip.query || '') + ' ' + (chip.category || '')).toLowerCase();
    
    if (text.includes('save') || text.includes('حفظ')) {
      return <Bookmark size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('rank') || text.includes('top') || text.includes('rating') || text.includes('superlative') || text.includes('تقييم') || text.includes('أعلى') || text.includes('أفضل') || text.includes('ترتيب')) {
      return <BarChart2 size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('near') || text.includes('closest') || text.includes('قريب') || text.includes('أقرب')) {
      return <Navigation size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('radius') || text.includes('km') || text.includes('نطاق') || text.includes('كم') || text.includes('مسافة')) {
      return <MapPin size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('what if') || text.includes('suitab') || text.includes('ai') || text.includes('grow') || text.includes('simulat') || text.includes('score') || text.includes('ماذا لو') || text.includes('ذكاء') || text.includes('ملاءمة') || text.includes('أثر')) {
      return <Sparkles size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('school') || text.includes('edu') || text.includes('nursery') || text.includes('univ') || text.includes('college') || text.includes('student') || text.includes('مدارس') || text.includes('حضانة') || text.includes('تعليم')) {
      return <GraduationCap size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('clinic') || text.includes('hosp') || text.includes('pharm') || text.includes('health') || text.includes('med') || text.includes('doctor') || text.includes('مستشف') || text.includes('عياد') || text.includes('صيدل') || text.includes('طوارئ') || text.includes('emergency')) {
      return <Heart size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('power') || text.includes('energy') || text.includes('util') || text.includes('solar') || text.includes('electric') || text.includes('grid') || text.includes('طاقة') || text.includes('كهرباء')) {
      return <Zap size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('park') || text.includes('tree') || text.includes('green') || text.includes('env') || text.includes('mangrove') || text.includes('garden') || text.includes('حدائق') || text.includes('محميات') || text.includes('هواء') || text.includes('بيئة')) {
      return <Trees size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('bus') || text.includes('transit') || text.includes('metro') || text.includes('traffic') || text.includes('car') || text.includes('road') || text.includes('نقل') || text.includes('حافلات') || text.includes('مسارات')) {
      return <Car size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('gov') || text.includes('admin') || text.includes('police') || text.includes('safe') || text.includes('municip') || text.includes('حكوم') || text.includes('أمان')) {
      return <Shield size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('build') || text.includes('plot') || text.includes('construct') || text.includes('real estate') || text.includes('villa') || text.includes('مبان') || text.includes('بناء')) {
      return <Building size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    return <Compass size={13} color={chipIconColor} strokeWidth={1.8} style={{ flexShrink: 0 }} />;
  };

  const DIVERSE_COLD_START_PROMPTS_EN = [
    // Pool 0: Recreation, Transportation, Environment, Government, Energy, Vehicle Services, Industrial
    [
      { label: 'Parks in Yas Island', query: 'Show parks in Yas Island' },
      { label: 'Bus stations in Khalifa City', query: 'Show bus stations in Khalifa City' },
      { label: 'Lowest emissions areas', query: 'Show areas with the lowest emissions in Abu Dhabi' },
      { label: 'Government centers (2km)', query: 'Show government facilities within 2 km of Khalifa City' },
      { label: 'Clean energy projects', query: 'Show clean energy projects in Abu Dhabi' },
      { label: 'Vehicle inspection centers', query: 'Show vehicle inspection centers in Khalifa City' },
      { label: 'Industrial facilities in ICAD', query: 'Show industrial facilities in Abu Dhabi' }
    ],
    // Pool 1: Utilities, Agriculture, Public Safety, Culture & Museums, Water Utilities, Industrial, Business Hubs
    [
      { label: 'Power stations (20km)', query: 'Show power stations in Abu Dhabi' },
      { label: 'Farms & agriculture', query: 'Show agricultural facilities in Abu Dhabi' },
      { label: 'Civil Defense & fire stations', query: 'Show civil defense stations in Khalifa City' },
      { label: 'Cultural landmarks & museums', query: 'Show cultural landmarks in Abu Dhabi' },
      { label: 'Water treatment & utilities', query: 'Show water treatment facilities in Abu Dhabi' },
      { label: 'Industrial emissions < 50k t', query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi' },
      { label: 'Business hubs & free zones', query: 'Show business hubs and free zones in Abu Dhabi' }
    ],
    // Pool 2: Recreation, Transportation, Environment, Tourism & Culture, Public Safety, Weather & Climate, Public Services
    [
      { label: 'Which parks are closest?', query: 'Which parks are closest to me in Khalifa City?' },
      { label: 'Transit routes & bus stops', query: 'Show bus stations across Abu Dhabi' },
      { label: 'Air quality stations', query: 'Show air quality stations in Abu Dhabi' },
      { label: 'Top rated attractions', query: 'Which tourist attraction has the highest rating in Abu Dhabi?' },
      { label: 'Police & emergency (5km)', query: 'Show public safety facilities within 5 km of Khalifa City' },
      { label: 'Weather & climate stations', query: 'Show weather stations in Abu Dhabi' },
      { label: 'Municipal & civic offices', query: 'Show municipal offices in Khalifa City' }
    ]
  ];

  const DIVERSE_COLD_START_PROMPTS_AR = [
    // المجموعة 0: الترفيه، النقل، البيئة، الخدمات الحكومية، الطاقة النظيفة، فحص المركبات، الصناعة
    [
      { label: 'حدائق جزيرة ياس', query: 'Show parks in Yas Island' },
      { label: 'محطات الحافلات في مدينة خليفة', query: 'Show bus stations in Khalifa City' },
      { label: 'المناطق الأقل انبعاثات', query: 'Show areas with the lowest emissions in Abu Dhabi' },
      { label: 'المراكز الحكومية (2 كم)', query: 'Show government facilities within 2 km of Khalifa City' },
      { label: 'مشاريع الطاقة النظيفة', query: 'Show clean energy projects in Abu Dhabi' },
      { label: 'مراكز فحص المركبات', query: 'Show vehicle inspection centers in Khalifa City' },
      { label: 'المنشآت الصناعية في أبوظبي', query: 'Show industrial facilities in Abu Dhabi' }
    ],
    // المجموعة 1: الطاقة، الزراعة، الدفاع المدني، الثقافة والمتاحف، معالجة المياه، الصناعة، مراكز الأعمال
    [
      { label: 'محطات الكهرباء والمياه', query: 'Show power stations in Abu Dhabi' },
      { label: 'المزارع والمرافق الزراعية', query: 'Show agricultural facilities in Abu Dhabi' },
      { label: 'مراكز الدفاع المدني والطوارئ', query: 'Show civil defense stations in Khalifa City' },
      { label: 'المعالم الثقافية والمتاحف', query: 'Show cultural landmarks in Abu Dhabi' },
      { label: 'محطات معالجة المياه والمرافق', query: 'Show water treatment facilities in Abu Dhabi' },
      { label: 'منشآت صناعية بانبعاثات منخفضة', query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi' },
      { label: 'المناطق الحرة ومراكز الأعمال', query: 'Show business hubs and free zones in Abu Dhabi' }
    ],
    // المجموعة 2: الترفيه، النقل، البيئة، السياحة والثقافة، السلامة العامة، محطات الطقس، المكاتب البلدية
    [
      { label: 'أي الحدائق هي الأقرب إلي؟', query: 'Which parks are closest to me in Khalifa City?' },
      { label: 'شبكة ومحطات الحافلات', query: 'Show bus stations across Abu Dhabi' },
      { label: 'محطات مراقبة جودة الهواء', query: 'Show air quality stations in Abu Dhabi' },
      { label: 'أعلى المعالم الثقافية تقييماً', query: 'Which tourist attraction has the highest rating in Abu Dhabi?' },
      { label: 'مراكز الشرطة والسلامة (5 كم)', query: 'Show public safety facilities within 5 km of Khalifa City' },
      { label: 'محطات رصد الطقس والمناخ', query: 'Show weather stations in Abu Dhabi' },
      { label: 'المكاتب البلدية والحكومية', query: 'Show municipal offices in Khalifa City' }
    ]
  ];

  const [promptRotationIndex, setPromptRotationIndex] = useState(0);

  const getDynamicQuickStartChips = (rotationIdx = promptRotationIndex) => {
    if (lang === 'ar') {
      if (selectedLocation) {
        const cat = (selectedLocation.category || selectedLocation.matchType || '').toLowerCase();
        if (cat.includes('health') || cat.includes('hosp') || cat.includes('clinic')) {
          return [
            { label: 'صيدليات قريبة (2 كم)', query: `Show pharmacies within 2 km of ${selectedLocation.title}` },
            { label: 'نطاق طوارئ (5 كم)', query: `Show healthcare facilities within 5 km of ${selectedLocation.title}` },
            { label: 'أكبر عدد أسرّة', query: 'Which hospital has the most beds in Abu Dhabi?' },
            { label: 'عيادة طوارئ 24/7', query: 'Find the nearest 24/7 clinic in Khalifa City' },
            { label: 'العيادات (5 كم)', query: `Show clinics within 5 km of ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('edu') || cat.includes('school') || cat.includes('univ')) {
          return [
            { label: 'محطات الحافلات القريبة', query: `Show bus stations within 1 km of ${selectedLocation.title}` },
            { label: 'المنهاج البريطاني', query: 'Show British curriculum schools in Khalifa City' },
            { label: 'أقل رسوم دراسية', query: 'Which school has the lowest tuition fee in Khalifa City?' },
            { label: 'حدائق ضمن 2 كم', query: `Show parks within 2 km of ${selectedLocation.title}` },
            { label: 'المدارس (2 كم)', query: `Show schools within 2 km of ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('park') || cat.includes('rec') || cat.includes('green')) {
          return [
            { label: 'المرافق ضمن 2 كم', query: `Show facilities within 2 km of ${selectedLocation.title}` },
            { label: 'محطات الحافلات القريبة', query: `Show bus stations within 1 km of ${selectedLocation.title}` },
            { label: 'تغطية المساحات الخضراء', query: 'Green space coverage analysis' },
            { label: 'الحدائق (5 كم)', query: `Show parks within 5 km of ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('trans') || cat.includes('bus') || cat.includes('transit') || cat.includes('airport')) {
          return [
            { label: 'المرافق العامة (2 كم)', query: `Show public facilities within 2 km of ${selectedLocation.title}` },
            { label: 'مراكز فحص المركبات', query: `Find the closest vehicle inspection center to ${selectedLocation.title}` },
            { label: 'مسارات النقل والمواصلات', query: `Transit routes near ${selectedLocation.title}` },
            { label: 'مرافق النقل (5 كم)', query: `Show transport facilities within 5 km of ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('indus') || cat.includes('logist') || cat.includes('manuf')) {
          return [
            { label: 'روابط النقل واللوجستيات', query: `Show transport facilities within 2 km of ${selectedLocation.title}` },
            { label: 'المنشآت الصناعية (5 كم)', query: `Show industrial facilities within 5 km of ${selectedLocation.title}` },
            { label: 'محطات جودة الهواء', query: `Show air quality stations near ${selectedLocation.title}` },
            { label: 'منشآت منخفضة الانبعاثات', query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi' }
          ];
        }
        if (cat.includes('gov') || cat.includes('admin') || cat.includes('public')) {
          return [
            { label: 'الخدمات العامة (2 كم)', query: `Show public service facilities within 2 km of ${selectedLocation.title}` },
            { label: 'محطات الحافلات القريبة', query: `Show bus stations within 1 km of ${selectedLocation.title}` },
            { label: 'المكاتب البلدية', query: `Show municipal offices in Khalifa City` },
            { label: 'المرافق (5 كم)', query: `Show places within 5 km of ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('util') || cat.includes('ener') || cat.includes('power')) {
          return [
            { label: 'محطات الكهرباء (20 كم)', query: 'Show power stations in Abu Dhabi' },
            { label: 'مشاريع الطاقة النظيفة', query: 'Show clean energy projects in Abu Dhabi' },
            { label: 'محطات جودة الهواء', query: 'Show air quality stations in Abu Dhabi' },
            { label: 'المرافق (5 كم)', query: `Show power stations within 5 km of ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('tour') || cat.includes('cult') || cat.includes('landm')) {
          return [
            { label: 'المعالم الثقافية', query: 'Show cultural landmarks in Abu Dhabi' },
            { label: 'الفنادق (5 كم)', query: `Show hotels within 5 km of ${selectedLocation.title}` },
            { label: 'أعلى المعالم تقييماً', query: 'Which tourist attraction has the highest rating in Abu Dhabi?' },
            { label: 'مسارات النقل', query: `Transit routes near ${selectedLocation.title}` }
          ];
        }
        if (cat.includes('agri') || cat.includes('farm')) {
          return [
            { label: 'المزارع والزراعة', query: 'Show agricultural facilities in Abu Dhabi' },
            { label: 'المراكز الزراعية (5 كم)', query: `Show agricultural facilities within 5 km of ${selectedLocation.title}` },
            { label: 'أقرب مركز زراعي', query: 'Which agricultural center is nearest to me?' },
            { label: 'المياه والمرافق', query: 'Show power stations in Abu Dhabi' }
          ];
        }
      }

      const lastQuery = (searchQuery || '').toLowerCase();
      if (lastQuery.includes('health') || lastQuery.includes('clinic') || lastQuery.includes('hosp') || lastQuery.includes('pharm')) {
        return [
          { label: 'أقرب العيادات', query: 'Show me the nearest clinics' },
          { label: 'أكبر عدد أسرّة', query: 'Which hospital has the most beds in Abu Dhabi?' },
          { label: 'الصيدليات (2 كم)', query: 'Show pharmacies within 2 km of Khalifa City' },
          { label: 'عيادة طوارئ 24/7', query: 'Find the nearest 24/7 clinic in Khalifa City' },
          { label: 'المستشفيات (5 كم)', query: 'Show hospitals within 5 km of Khalifa City' }
        ];
      }
      if (lastQuery.includes('school') || lastQuery.includes('edu') || lastQuery.includes('univ')) {
        return [
          { label: 'أقل رسوم دراسية', query: 'Which school has the lowest tuition fee in Khalifa City?' },
          { label: 'المدارس بالمنهاج البريطاني', query: 'Show British curriculum schools in Khalifa City' },
          { label: 'المدارس (2 كم)', query: 'Schools within 2km' },
          { label: 'الحضانات (15 كم)', query: 'Nurseries within 15km' },
          { label: 'محطات الحافلات القريبة', query: 'Show bus stations within 1 km of schools in Khalifa City' }
        ];
      }
      if (lastQuery.includes('park') || lastQuery.includes('rec') || lastQuery.includes('green')) {
        return [
          { label: 'أي حديقة هي الأقرب إلي؟', query: 'Which parks are closest to me in Khalifa City?' },
          { label: 'حدائق جزيرة ياس', query: 'Show parks in Yas Island' },
          { label: 'المرافق ضمن 2 كم من هذه الحدائق', query: 'Show facilities within 2 km of parks in Khalifa City' },
          { label: 'الحديقة الأعلى تقييماً', query: 'Which park has the highest rating in Khalifa City?' }
        ];
      }
      if (lastQuery.includes('bus') || lastQuery.includes('transit') || lastQuery.includes('transport') || lastQuery.includes('vehicle')) {
        return [
          { label: 'أقرب مركز فحص مركبات', query: 'Find the closest vehicle inspection center in Khalifa City' },
          { label: 'أقرب محطة حافلات إلي', query: 'Which bus station is nearest to me in Khalifa City?' },
          { label: 'مرافق النقل ضمن 5 كم', query: 'Show transport facilities within 5 km of Khalifa City' },
          { label: 'مقارنة مرافق النقل', query: 'Compare transport facilities in Khalifa City' }
        ];
      }
      if (lastQuery.includes('indus') || lastQuery.includes('logist') || lastQuery.includes('manuf')) {
        return [
          { label: 'أقرب مرفق لوجستي إلي', query: 'Which logistics facility is nearest to me in Khalifa City?' },
          { label: 'منشآت بانبعاثات منخفضة', query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi' },
          { label: 'مقارنة المنشآت الصناعية', query: 'Compare industrial facilities in Khalifa City' },
          { label: 'روابط النقل والمواصلات', query: 'Show transport facilities in Khalifa City' }
        ];
      }
      if (lastQuery.includes('env') || lastQuery.includes('emiss') || lastQuery.includes('clim')) {
        return [
          { label: 'المناطق الأقل انبعاثات', query: 'Show areas with the lowest emissions in Abu Dhabi' },
          { label: 'محطات مراقبة جودة الهواء', query: 'Show air quality stations in Abu Dhabi' },
          { label: 'أقرب مرفق بيئي إلي', query: 'Which environmental facility is nearest to me in Khalifa City?' },
          { label: 'مشاريع الطاقة النظيفة', query: 'Show clean energy projects in Abu Dhabi' }
        ];
      }

      const activePoolAr = DIVERSE_COLD_START_PROMPTS_AR[rotationIdx % DIVERSE_COLD_START_PROMPTS_AR.length];
      return activePoolAr;
    }

    // 1. If a specific location is selected
    if (selectedLocation) {
      const cat = (selectedLocation.category || selectedLocation.matchType || '').toLowerCase();
      if (cat.includes('health') || cat.includes('hosp') || cat.includes('clinic')) {
        return [
          { label: 'Pharmacies (2km)', query: `Show pharmacies within 2 km of ${selectedLocation.title}` },
          { label: 'Emergency Hospitals (5km)', query: `Show healthcare facilities within 5 km of ${selectedLocation.title}` },
          { label: 'Most Beds Hospital', query: 'Which hospital has the most beds in Abu Dhabi?' },
          { label: 'Nearest 24/7 Clinic', query: 'Find the nearest 24/7 clinic in Khalifa City' },
          { label: 'Clinics (5km)', query: `Show clinics within 5 km of ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('edu') || cat.includes('school') || cat.includes('univ')) {
        return [
          { label: 'Bus Stations Near School', query: `Show bus stations within 1 km of ${selectedLocation.title}` },
          { label: 'British Curriculum', query: 'Show British curriculum schools in Khalifa City' },
          { label: 'Lowest Tuition Fee', query: 'Which school has the lowest tuition fee in Khalifa City?' },
          { label: 'Parks within 2km', query: `Show parks within 2 km of ${selectedLocation.title}` },
          { label: 'Schools (2km)', query: `Show schools within 2 km of ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('park') || cat.includes('rec') || cat.includes('green')) {
        return [
          { label: 'Amenities Nearby (2km)', query: `Show facilities within 2 km of ${selectedLocation.title}` },
          { label: 'Bus Stations Nearby', query: `Show bus stations within 1 km of ${selectedLocation.title}` },
          { label: 'Green Space Coverage', query: 'Green space coverage analysis' },
          { label: 'Parks (5km)', query: `Show parks within 5 km of ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('trans') || cat.includes('bus') || cat.includes('transit') || cat.includes('airport')) {
        return [
          { label: 'Public Amenities (2km)', query: `Show public facilities within 2 km of ${selectedLocation.title}` },
          { label: 'Vehicle Inspection Centers', query: `Find the closest vehicle inspection center to ${selectedLocation.title}` },
          { label: 'Transit Routes', query: `Transit routes near ${selectedLocation.title}` },
          { label: 'Transport Facilities (5km)', query: `Show transport facilities within 5 km of ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('indus') || cat.includes('logist') || cat.includes('manuf')) {
        return [
          { label: 'Logistics Links (2km)', query: `Show transport facilities within 2 km of ${selectedLocation.title}` },
          { label: 'Industrial (5km)', query: `Show industrial facilities within 5 km of ${selectedLocation.title}` },
          { label: 'Air Quality Stations', query: `Show air quality stations near ${selectedLocation.title}` },
          { label: 'Low Emission Facilities', query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi' }
        ];
      }
      if (cat.includes('gov') || cat.includes('admin') || cat.includes('public')) {
        return [
          { label: 'Public Services (2km)', query: `Show public service facilities within 2 km of ${selectedLocation.title}` },
          { label: 'Bus Stations Nearby', query: `Show bus stations within 1 km of ${selectedLocation.title}` },
          { label: 'Municipal Offices', query: 'Show municipal offices in Khalifa City' },
          { label: 'Facilities (5km)', query: `Show places within 5 km of ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('util') || cat.includes('ener') || cat.includes('power')) {
        return [
          { label: 'Power Stations (20km)', query: 'Show power stations in Abu Dhabi' },
          { label: 'Clean Energy Projects', query: 'Show clean energy projects in Abu Dhabi' },
          { label: 'Air Quality Stations', query: 'Show air quality stations in Abu Dhabi' },
          { label: 'Utilities (5km)', query: `Show power stations within 5 km of ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('tour') || cat.includes('cult') || cat.includes('landm')) {
        return [
          { label: 'Cultural Landmarks', query: 'Show cultural landmarks in Abu Dhabi' },
          { label: 'Hotels within 5km', query: `Show hotels within 5 km of ${selectedLocation.title}` },
          { label: 'Top Rated Attractions', query: 'Which tourist attraction has the highest rating in Abu Dhabi?' },
          { label: 'Transit Routes', query: `Transit routes near ${selectedLocation.title}` }
        ];
      }
      if (cat.includes('agri') || cat.includes('farm')) {
        return [
          { label: 'Farms & Agriculture', query: 'Show agricultural facilities in Abu Dhabi' },
          { label: 'Agricultural Hubs (5km)', query: `Show agricultural facilities within 5 km of ${selectedLocation.title}` },
          { label: 'Nearest Center', query: 'Which agricultural center is nearest to me?' },
          { label: 'Water & Utilities', query: 'Show power stations in Abu Dhabi' }
        ];
      }
    }

    // 2. If recent search query or search results are active
    const lastQuery = (searchQuery || '').toLowerCase();
    if (lastQuery.includes('health') || lastQuery.includes('clinic') || lastQuery.includes('hosp') || lastQuery.includes('pharm')) {
      return [
        { label: 'Nearest Clinics', query: 'Show me the nearest clinics' },
        { label: 'Most Beds Hospital', query: 'Which hospital has the most beds in Abu Dhabi?' },
        { label: 'Pharmacies (2km)', query: 'Show pharmacies within 2 km of Khalifa City' },
        { label: 'Nearest 24/7 Clinic', query: 'Find the nearest 24/7 clinic in Khalifa City' },
        { label: 'Hospitals (5km)', query: 'Show hospitals within 5 km of Khalifa City' }
      ];
    }
    if (lastQuery.includes('school') || lastQuery.includes('edu') || lastQuery.includes('univ')) {
      return [
        { label: 'Lowest Tuition Fee', query: 'Which school has the lowest tuition fee in Khalifa City?' },
        { label: 'British Curriculum', query: 'Show British curriculum schools in Khalifa City' },
        { label: 'Schools (2km)', query: 'Schools within 2km' },
        { label: 'Nurseries (15km)', query: 'Nurseries within 15km' },
        { label: 'Bus Stations Near Schools', query: 'Show bus stations within 1 km of schools in Khalifa City' }
      ];
    }
    if (lastQuery.includes('park') || lastQuery.includes('rec') || lastQuery.includes('green')) {
      return [
        { label: 'Which parks are closest?', query: 'Which parks are closest to me in Khalifa City?' },
        { label: 'Parks in Yas Island', query: 'Show parks in Yas Island' },
        { label: 'Facilities within 2km of parks', query: 'Show facilities within 2 km of parks in Khalifa City' },
        { label: 'Top Rated Park', query: 'Which park has the highest rating in Khalifa City?' }
      ];
    }
    if (lastQuery.includes('bus') || lastQuery.includes('transit') || lastQuery.includes('transport') || lastQuery.includes('vehicle')) {
      return [
        { label: 'Closest Vehicle Inspection', query: 'Find the closest vehicle inspection center in Khalifa City' },
        { label: 'Closest Bus Station', query: 'Which bus station is nearest to me in Khalifa City?' },
        { label: 'Transport Facilities (5km)', query: 'Show transport facilities within 5 km of Khalifa City' },
        { label: 'Compare Transport', query: 'Compare transport facilities in Khalifa City' }
      ];
    }
    if (lastQuery.includes('indus') || lastQuery.includes('logist') || lastQuery.includes('manuf')) {
      return [
        { label: 'Nearest Logistics Center', query: 'Which logistics facility is nearest to me in Khalifa City?' },
        { label: 'Low Emission Facilities', query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi' },
        { label: 'Compare Industrial Facilities', query: 'Compare industrial facilities in Khalifa City' },
        { label: 'Transport Links', query: 'Show transport facilities in Khalifa City' }
      ];
    }
    if (lastQuery.includes('env') || lastQuery.includes('emiss') || lastQuery.includes('clim')) {
      return [
        { label: 'Lowest Emissions Areas', query: 'Show areas with the lowest emissions in Abu Dhabi' },
        { label: 'Air Quality Stations', query: 'Show air quality stations in Abu Dhabi' },
        { label: 'Nearest Environmental Facility', query: 'Which environmental facility is nearest to me in Khalifa City?' },
        { label: 'Clean Energy Projects', query: 'Show clean energy projects in Abu Dhabi' }
      ];
    }

    // 3. Default high-value multi-domain exploratory chips (Rotated across 3 balanced sets)
    const activePoolEn = DIVERSE_COLD_START_PROMPTS_EN[rotationIdx % DIVERSE_COLD_START_PROMPTS_EN.length];
    return activePoolEn;
  };

  const getDynamicLegendItems = () => {
    const items = [];

    // 1. Active Category selections
    const activeSubcatKeys = Object.keys(selectedSubcategories || {}).filter(k => selectedSubcategories[k]);
    if (activeSubcatKeys.length > 0) {
      const activeCatsMap = {};
      CATEGORY_TREE.forEach(cat => {
        const activeSubs = cat.subcategories.filter(s => !selectedSubcategories[s]);
        if (activeSubs.length > 0) {
          activeCatsMap[cat.name] = activeSubs;
        }
      });

      Object.entries(activeCatsMap).forEach(([catName, subs]) => {
        const color = GIS_CATEGORY_COLORS[catName] || '#1D68F2';
        items.push({
          title: `${t.getCatName(catName)} (${subs.length} active)`,
          detail: subs.map(s => t.getSubcatName(s)).join(', '),
          color: color,
          type: 'category'
        });
      });
    } else if (activeSearchResults && activeSearchResults.length > 0) {
      // 2. Active Search Results
      const catCounts = {};
      activeSearchResults.forEach(res => {
        const c = res.category || 'Results';
        catCounts[c] = (catCounts[c] || 0) + 1;
      });
      Object.entries(catCounts).forEach(([catName, count]) => {
        const color = GIS_CATEGORY_COLORS[catName] || '#1D68F2';
        items.push({
          title: `${t.getCatName(catName)} (${count} places)`,
          detail: 'Plotted spatial features',
          color: color,
          type: 'search'
        });
      });
    } else {
      // 3. Default Core Abu Dhabi GIS Layers
      items.push({ title: lang === 'ar' ? 'التعليم' : 'Education', detail: lang === 'ar' ? 'المدارس والجامعات' : 'Schools & Universities', color: '#1D68F2' });
      items.push({ title: lang === 'ar' ? 'الرعاية الصحية' : 'Healthcare', detail: lang === 'ar' ? 'المستشفيات والعيادات' : 'Hospitals & Clinics', color: '#10B981' });
      items.push({ title: lang === 'ar' ? 'البيئة والمحميات' : 'Environment & Reserves', detail: lang === 'ar' ? 'المحميات الطبيعية والحدائق' : 'Protected Areas & Parks', color: '#059669' });
      items.push({ title: lang === 'ar' ? 'النقل والمواصلات' : 'Transportation', detail: lang === 'ar' ? 'محطات الحافلات والنقل' : 'Transit & Bus Stations', color: '#F59E0B' });
      items.push({ title: lang === 'ar' ? 'السياحة والمعالم' : 'Tourism & Landmarks', detail: lang === 'ar' ? 'المعالم الثقافية' : 'Cultural Landmarks', color: '#06B6D4' });
    }

    // 4. Overlays
    if (layers?.buildings3D) {
      items.push({ title: lang === 'ar' ? 'المباني ثلاثية الأبعاد' : '3D Buildings', detail: lang === 'ar' ? 'المجسمات الحضرية' : 'Urban Footprints', color: '#6366F1' });
    }
    if (layers?.projectBoundary) {
      items.push({ title: lang === 'ar' ? 'حدود المشروع' : 'Boundary Geofence', detail: lang === 'ar' ? 'منطقة العاصمة' : 'Capital Region', color: '#004B87' });
    }

    return items;
  };

  // Helper for category count badge colors matching reference design
  const getCategoryBadgeStyle = (catName, isExpanded, isDark) => {
    const catColor = GIS_CATEGORY_COLORS[catName] || '#1D68F2';
    if (isExpanded) {
      return {
        background: isDark ? `${catColor}35` : '#DBEAFE',
        color: isDark ? '#93C5FD' : '#1D4ED8',
        border: isDark ? `1px solid ${catColor}60` : '1px solid #BFDBFE'
      };
    }
    if (isDark) {
      return {
        background: `${catColor}25`,
        color: catColor,
        border: `1px solid ${catColor}50`
      };
    }
    const lightBadgeStyles = {
      Education: { bg: '#DBEAFE', text: '#1D4ED8', border: '#BFDBFE' },
      Healthcare: { bg: '#D1FAE5', text: '#059669', border: '#A7F3D0' },
      Transport: { bg: '#FEF3C7', text: '#D97706', border: '#FDE68A' },
      Transportation: { bg: '#FEF3C7', text: '#D97706', border: '#FDE68A' },
      Environment: { bg: '#D1FAE5', text: '#059669', border: '#A7F3D0' },
      'Government Services': { bg: '#EDE9FE', text: '#6366F1', border: '#DDD6FE' },
      Government: { bg: '#EDE9FE', text: '#6366F1', border: '#DDD6FE' },
      Tourism: { bg: '#E0F2FE', text: '#0284C7', border: '#BAE6FD' },
      Infrastructure: { bg: '#FFEDD5', text: '#EA580C', border: '#FED7AA' },
      Housing: { bg: '#F3E8FF', text: '#9333EA', border: '#E9D5FF' },
      'Public Safety': { bg: '#FEE2E2', text: '#DC2626', border: '#FECACA' },
      Utilities: { bg: '#FEF9C3', text: '#CA8A04', border: '#FEF08A' },
      Climate: { bg: '#E0F2FE', text: '#0284C7', border: '#BAE6FD' },
      Construction: { bg: '#FEF3C7', text: '#D97706', border: '#FDE68A' },
      Energy: { bg: '#FEF9C3', text: '#CA8A04', border: '#FEF08A' },
      Parks: { bg: '#D1FAE5', text: '#059669', border: '#A7F3D0' },
      Agriculture: { bg: '#ECFCCB', text: '#65A30D', border: '#D9F99D' },
      Employment: { bg: '#EEF2FF', text: '#4F46E5', border: '#C7D2FE' }
    };
    const curated = lightBadgeStyles[catName];
    if (curated) {
      return {
        background: curated.bg,
        color: curated.text,
        border: `1px solid ${curated.border}`
      };
    }
    return {
      background: `${catColor}15`,
      color: catColor,
      border: `1px solid ${catColor}30`
    };
  };

  // State for toggling operational GIS layers visibility
  const [disabledLayers, setDisabledLayers] = useState(new Set());

  const toggleLayerCategory = (catId) => {
    setDisabledLayers(prev => {
      const next = new Set(prev);
      if (next.has(catId)) {
        next.delete(catId);
      } else {
        next.add(catId);
      }
      return next;
    });
  };

  const getMapLayerCategories = () => {
    const baseList = [
      { id: 'Healthcare', nameEn: 'Healthcare', nameAr: 'الرعاية الصحية', color: GIS_CATEGORY_COLORS['Healthcare'] || '#10B981', defaultCount: 21 },
      { id: 'Education', nameEn: 'Education', nameAr: 'التعليم', color: GIS_CATEGORY_COLORS['Education'] || '#1D68F2', defaultCount: 20 },
      { id: 'Transportation', nameEn: 'Transportation', nameAr: 'النقل والمواصلات', color: GIS_CATEGORY_COLORS['Transportation'] || '#F59E0B', defaultCount: 26 },
      { id: 'Parks', nameEn: 'Parks & Recreation', nameAr: 'الحدائق والمنتزهات', color: GIS_CATEGORY_COLORS['Parks'] || '#059669', defaultCount: 10 },
      { id: 'Environment', nameEn: 'Environment & Reserves', nameAr: 'البيئة والمحميات', color: GIS_CATEGORY_COLORS['Environment'] || '#14B8A6', defaultCount: 7 },
      { id: 'Government', nameEn: 'Government & Civic', nameAr: 'المراكز الحكومية', color: GIS_CATEGORY_COLORS['Government'] || '#8B5CF6', defaultCount: 15 },
      { id: 'Commercial', nameEn: 'Commercial & Retail', nameAr: 'المراكز التجارية', color: GIS_CATEGORY_COLORS['Commercial'] || '#EC4899', defaultCount: 18 },
      { id: 'Culture', nameEn: 'Culture & Tourism', nameAr: 'الثقافة والسياحة', color: GIS_CATEGORY_COLORS['Culture'] || '#06B6D4', defaultCount: 12 }
    ];

    if (activeSearchResults && activeSearchResults.length > 0) {
      const activeCounts = {};
      activeSearchResults.forEach(item => {
        const cat = item.category || 'Other';
        activeCounts[cat] = (activeCounts[cat] || 0) + 1;
      });

      return baseList.map(cat => ({
        ...cat,
        count: activeCounts[cat.id] !== undefined ? activeCounts[cat.id] : cat.defaultCount,
        isPlotted: (activeCounts[cat.id] || 0) > 0
      }));
    }

    return baseList.map(cat => ({
      ...cat,
      count: cat.defaultCount,
      isPlotted: false
    }));
  };

  const getInitialWelcomeMessage = (rotationIdx = promptRotationIndex) => ({
    id: 'welcome-init',
    sender: 'ai',
    text: lang === 'ar'
      ? 'مرحباً! أنا المساعد المكاني الذكي لمنصة GeoVision. يمكنني مساعدتك في استكشاف وتحليل البيانات المكانية الشاملة في إمارة أبوظبي ودولة الإمارات — كالحدائق، محطات النقل والحافلات، مؤشرات البيئة والانبعاثات، المراكز الحكومية، المنشآت الصناعية، شبكات الطاقة، المعالم الثقافية، والمباني التجارية. جرب أحد الاقتراحات المتنوعة أدناه أو اكتب استفسارك مباشرة.'
      : 'Hi! I am your GeoVision GIS Assistant. I can help you search, filter, and analyze spatial datasets across Abu Dhabi and UAE — including parks, transport & bus stations, environment & emissions, government centers, industrial facilities, utilities, cultural landmarks, and commercial buildings. Try one of the diverse suggestions below or ask a question directly.',
    chips: getDynamicQuickStartChips(rotationIdx)
  });

  const [isAIPanelExpanded, setIsAIPanelExpanded] = useState(false);
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  
  // Persistent Multi-turn Chat Sessions State
  const [chatSessions, setChatSessions] = useState(() => {
    try {
      const session = authService.getInitialSession();
      const username = session.isLoggedIn && session.user?.username ? session.user.username : null;
      const loaded = authService.getUserChatSessions(username);
      return Array.isArray(loaded) ? loaded : [];
    } catch {
      return [];
    }
  });

  const [activeSessionId, setActiveSessionId] = useState(() => {
    try {
      const session = authService.getInitialSession();
      const username = session.isLoggedIn && session.user?.username ? session.user.username : null;
      const loaded = authService.getUserChatSessions(username);
      if (Array.isArray(loaded) && loaded.length > 0 && loaded[0]?.id) {
        return loaded[0].id;
      }
    } catch {}
    return `session-${Date.now()}`;
  });

  const [chatMessages, setChatMessages] = useState(() => {
    try {
      const session = authService.getInitialSession();
      const username = session.isLoggedIn && session.user?.username ? session.user.username : null;
      const loaded = authService.getUserChatSessions(username);
      if (Array.isArray(loaded) && loaded.length > 0 && loaded[0]?.messages?.length > 0) {
        return loaded[0].messages;
      }
    } catch {}
    return [getInitialWelcomeMessage(0)];
  });

  const [activeContextBadges, setActiveContextBadges] = useState([]);
  const [isContextPopoverOpen, setIsContextPopoverOpen] = useState(false);
  const [realUserLocation, setRealUserLocation] = useState(null);
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [isOrientingCompass, setIsOrientingCompass] = useState(false);
  const [isSessionsAccordionOpen, setIsSessionsAccordionOpen] = useState(true);
  const [renamingSessionId, setRenamingSessionId] = useState(null);
  const [renameSessionText, setRenameSessionText] = useState('');
  const [editingMessageIdx, setEditingMessageIdx] = useState(null);
  const [editingMessageText, setEditingMessageText] = useState('');
  const contextPopoverRef = useRef(null);

  const handleLocateUser = (onSuccess = null, onError = null) => {
    setIsLocating(true);
    showToast(lang === 'ar' ? 'جاري تحديد موقعك الجغرافي...' : 'Locating your position...');

    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setIsLocating(false);
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const userLocObj = {
            lat,
            lon,
            name: 'Current Location',
            arabicName: 'موقعك الحالي',
            isUserLocation: true,
            isRealGps: true
          };
          setRealUserLocation(userLocObj);
          setLocationPermissionDenied(false);
          if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo([lat, lon], 15, { animate: true, duration: 1.2 });
          }
          showToast(lang === 'ar' ? 'تم تحديد موقعك الحالي والتركيز عليه بنجاح' : 'Centered on your current location');
          addLog('Location', `Acquired coordinates: ${lat.toFixed(5)}, ${lon.toFixed(5)}`, 'success');
          if (typeof onSuccess === 'function') onSuccess(userLocObj);
        },
        (err) => {
          setIsLocating(false);
          console.warn('[GeoVision] Geolocation access error:', err);
          if (err && err.code === 1) {
            // Permission Denied
            setLocationPermissionDenied(true);
            showToast(lang === 'ar' ? 'تم رفض إذن الوصول للموقع. يرجى السماح به في إعدادات المتصفح.' : 'Location permission denied. Please enable location access in browser settings.');
            addLog('Location', 'Permission denied by user or browser policy', 'warning');
            if (typeof onError === 'function') onError(err);
          } else {
            // Timeout or position unavailable (common on desktop PCs without GPS chips)
            const fallbackLoc = {
              lat: 24.4539,
              lon: 54.3773,
              name: 'Abu Dhabi (Default Location)',
              arabicName: 'أبوظبي (الموقع الافتراضي)',
              isUserLocation: true
            };
            setRealUserLocation(fallbackLoc);
            if (mapInstanceRef.current) {
              mapInstanceRef.current.flyTo([fallbackLoc.lat, fallbackLoc.lon], 15, { animate: true, duration: 1.2 });
            }
            showToast(lang === 'ar' ? 'تعذر جلب GPS المباشر للجهاز، تم التوجيه إلى مركز أبوظبي' : 'Direct GPS unavailable on device; centered on Abu Dhabi');
            addLog('Location', 'Device GPS unavailable, falling back to Abu Dhabi center', 'info');
            if (typeof onSuccess === 'function') onSuccess(fallbackLoc);
            else if (typeof onError === 'function') onError(err);
          }
        },
        { timeout: 8000, enableHighAccuracy: true, maximumAge: 60000 }
      );
    } else {
      setIsLocating(false);
      const fallbackLoc = {
        lat: 24.4539,
        lon: 54.3773,
        name: 'Abu Dhabi (Default Location)',
        arabicName: 'أبوظبي (الموقع الافتراضي)',
        isUserLocation: true
      };
      setRealUserLocation(fallbackLoc);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.flyTo([fallbackLoc.lat, fallbackLoc.lon], 15, { animate: true, duration: 1.2 });
      }
      showToast(lang === 'ar' ? 'خاصية تحديد الموقع غير مدعومة، تم التوجيه إلى أبوظبي' : 'Geolocation unsupported; centered on Abu Dhabi');
      if (typeof onError === 'function') onError(new Error('Geolocation unsupported'));
    }
  };

  const handleOrientNorth = () => {
    setIsOrientingCompass(true);
    setTimeout(() => {
      setIsOrientingCompass(false);
    }, 700);

    if (mapInstanceRef.current) {
      const center = mapInstanceRef.current.getCenter();
      mapInstanceRef.current.panTo(center, { animate: true, duration: 0.5 });
    }

    showToast(lang === 'ar' ? 'تمت إعادة ضبط توجيه الخريطة نحو الشمال (0°)' : 'Map re-oriented to True North (0°)');
    addLog('Compass', 'Map view re-oriented to True North (0°)', 'info');
  };

  // Synchronize chatSessions whenever user authentication changes
  useEffect(() => {
    const username = isLoggedIn && currentUser?.username ? currentUser.username : null;
    const loaded = authService.getUserChatSessions(username);
    if (Array.isArray(loaded) && loaded.length > 0) {
      setChatSessions(loaded);
      const active = loaded[0];
      setActiveSessionId(active.id);
      if (active.messages && active.messages.length > 0) {
        setChatMessages(active.messages);
      }
      if (active.contextSnapshot) {
        spatialAIEngineInstance.restoreContext(active.contextSnapshot);
      }
      if (active.searchResults && active.searchResults.length > 0) {
        setActiveSearchResults(active.searchResults);
      }
    } else {
      const freshId = `session-${Date.now()}`;
      setActiveSessionId(freshId);
      setChatSessions([]);
    }
  }, [isLoggedIn, currentUser?.username]);

  // Persist current active session and full chat history across refreshes
  useEffect(() => {
    if (!activeSessionId) return;
    const username = isLoggedIn && currentUser?.username ? currentUser.username : null;

    const firstUserMsg = chatMessages.find(m => m.sender === 'user');
    const firstAiStructured = chatMessages.find(m => m.structuredResults?.title);
    const sessionTitle = firstUserMsg?.text || firstAiStructured?.structuredResults?.title || (lang === 'ar' ? 'جلسة استكشاف مكاني' : 'Spatial Exploration');

    setChatSessions(prev => {
      const existingIdx = prev.findIndex(s => s.id === activeSessionId);
      const currentObj = existingIdx >= 0 ? prev[existingIdx] : null;

      const sessionObj = {
        id: activeSessionId,
        title: currentObj && currentObj.title && currentObj.title !== 'New Chat' && currentObj.title !== 'محادثة جديدة' && !currentObj.title.includes('Exploration') && !currentObj.title.includes('استكشاف')
          ? currentObj.title
          : sessionTitle,
        updatedAt: Date.now(),
        createdAt: currentObj ? currentObj.createdAt : Date.now(),
        messages: chatMessages,
        contextSnapshot: { ...spatialAIEngineInstance.context },
        searchResults: activeSearchResults,
        selectedLocation: selectedLocation
      };

      let updated;
      if (existingIdx >= 0) {
        updated = prev.map((s, i) => i === existingIdx ? sessionObj : s);
      } else {
        updated = [sessionObj, ...prev];
      }
      authService.saveUserChatSessions(username, updated);
      return updated;
    });
  }, [chatMessages, activeSearchResults, selectedLocation, activeSessionId, isLoggedIn, currentUser?.username]);

  const handleSwitchSession = (sessionId) => {
    const session = chatSessions.find(s => s.id === sessionId);
    if (!session) return;
    setEditingMessageIdx(null);
    setEditingMessageText('');
    setActiveSessionId(session.id);
    if (session.messages && session.messages.length > 0) {
      setChatMessages(session.messages);
    } else {
      setChatMessages([getInitialWelcomeMessage(0)]);
    }
    if (session.contextSnapshot) {
      spatialAIEngineInstance.restoreContext(session.contextSnapshot);
      const badges = [];
      if (session.contextSnapshot.dataset) badges.push({ id: 'dataset', label: session.contextSnapshot.dataset, labelAr: session.contextSnapshot.datasetAr, type: 'dataset' });
      if (session.contextSnapshot.district) badges.push({ id: 'district', label: session.contextSnapshot.district, labelAr: session.contextSnapshot.districtAr, type: 'district' });
      if (session.contextSnapshot.subcategories?.length > 0) {
        session.contextSnapshot.subcategories.forEach(s => badges.push({ id: `sub_${s}`, label: s, labelAr: s, type: 'subcategory' }));
      }
      setActiveContextBadges(badges);
    } else {
      spatialAIEngineInstance.resetContext();
      setActiveContextBadges([]);
    }
    if (session.searchResults && session.searchResults.length > 0) {
      setActiveSearchResults(session.searchResults);
    } else {
      setActiveSearchResults([]);
    }
    setSelectedLocation(session.selectedLocation || null);
  };

  const handleDeleteSession = (sessionId, e) => {
    if (e) e.stopPropagation();
    const username = isLoggedIn && currentUser?.username ? currentUser.username : null;
    const remaining = chatSessions.filter(s => s.id !== sessionId);
    setChatSessions(remaining);
    authService.saveUserChatSessions(username, remaining);
    if (activeSessionId === sessionId) {
      if (remaining.length > 0) {
        handleSwitchSession(remaining[0].id);
      } else {
        handleNewChat();
      }
    }
    showToast(lang === 'ar' ? 'تم حذف الجلسة' : 'Session deleted');
  };

  const handleSaveRenameSession = (sessionId) => {
    if (renameSessionText.trim()) {
      const username = isLoggedIn && currentUser?.username ? currentUser.username : null;
      const updated = chatSessions.map(s => s.id === sessionId ? { ...s, title: renameSessionText.trim() } : s);
      setChatSessions(updated);
      authService.saveUserChatSessions(username, updated);
      showToast(lang === 'ar' ? 'تمت إعادة تسمية الجلسة' : 'Session renamed');
    }
    setRenamingSessionId(null);
  };

  // Keep starting welcome message in sync when user toggles between Arabic and English
  useEffect(() => {
    setChatMessages(prev => {
      if (prev.length === 1 && (prev[0].id === 'welcome-init' || prev[0].text?.includes('GeoVision') || prev[0].text?.includes('Hi! I can find nearby') || prev[0].text?.includes('مرحباً! يمكنني مساعدتك'))) {
        return [getInitialWelcomeMessage(promptRotationIndex)];
      }
      return prev;
    });
  }, [lang, promptRotationIndex]);

  // Click outside to close context popover
  useEffect(() => {
    const handleClickOutsideContext = (e) => {
      if (contextPopoverRef.current && !contextPopoverRef.current.contains(e.target)) {
        setIsContextPopoverOpen(false);
      }
    };
    if (isContextPopoverOpen) {
      document.addEventListener('pointerdown', handleClickOutsideContext);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutsideContext);
    };
  }, [isContextPopoverOpen]);

  const handleNewChat = () => {
    setAiPanelSubView('chat');
    spatialAIEngineInstance.resetContext();
    spatialAIEngineInstance.clearDrawnAreaContext();
    setLastDrawnQuery(null);
    setRestoredDrawnGeometry(null);
    setSearchBoxDrawnAttachment(null);
    setActiveDrawTool(null);
    setClearVisualDrawnTrigger(Date.now());
    setActiveContextBadges([]);
    setIsContextPopoverOpen(false);
    const nextRotation = (promptRotationIndex + 1) % 3;
    setPromptRotationIndex(nextRotation);
    setEditingMessageIdx(null);
    setEditingMessageText('');
    const freshSessionId = `session-${Date.now()}`;
    setActiveSessionId(freshSessionId);
    setChatMessages([getInitialWelcomeMessage(nextRotation)]);
    setActiveSearchResults([]);
    setSelectedLocation(null);
    setActiveRoute(null);
    setIsNavigating(false);
    setNavStepIndex(0);
    setAiSearchQuery('');
    setSearchQuery('');
    showToast(lang === 'ar' ? 'تم بدء محادثة جديدة' : 'New Chat Started');
  };

  const handleClearAllContext = () => {
    spatialAIEngineInstance.resetContext();
    spatialAIEngineInstance.clearDrawnAreaContext();
    setLastDrawnQuery(null);
    setRestoredDrawnGeometry(null);
    setSearchBoxDrawnAttachment(null);
    setActiveDrawTool(null);
    setClearVisualDrawnTrigger(Date.now());
    setActiveContextBadges([]);
    setIsContextPopoverOpen(false);
    const nextRotation = (promptRotationIndex + 1) % 3;
    setPromptRotationIndex(nextRotation);
    const userLoc = realUserLocation || null;
    const engineRes = spatialAIEngineInstance.processNaturalLanguageQuery('reset', '', lang, { userLocation: userLoc });
    setActiveSearchResults(engineRes.results || []);
    setChatMessages(prev => [
      ...prev,
      {
        sender: 'ai',
        text: lang === 'ar' ? 'تم مسح كافة سياقات المحادثة وإعادة تعيين نتائج البحث.' : 'Cleared all active conversation context filters.',
        structuredResults: null,
        chips: engineRes.chips || getDynamicQuickStartChips(nextRotation),
        id: Date.now()
      }
    ]);
    setSelectedLocation(null);
    setActiveRoute(null);
    setIsNavigating(false);
    setNavStepIndex(0);
    showToast(lang === 'ar' ? 'تم مسح سياق المحادثة بالكامل' : 'All conversation context cleared');
  };

  const handleRemoveContextBadge = (badgeId) => {
    const userLoc = realUserLocation || null;
    const engineRes = spatialAIEngineInstance.removeContextBadge(badgeId, lang, { userLocation: userLoc, selectedLocation });
    const results = engineRes.results || [];
    setActiveSearchResults(results);
    const newBadges = engineRes.contextBadges || [];
    setActiveContextBadges(newBadges);
    if (newBadges.length === 0) {
      setIsContextPopoverOpen(false);
    }

    if (engineRes.mapAction?.type === 'fly_to' && engineRes.mapAction.center && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(engineRes.mapAction.center, engineRes.mapAction.zoom || 14);
    }

    const searchId = Date.now() + Math.random();
    setChatMessages(prev => [
      ...prev.map(m => m.id === 'welcome-init' ? { ...m, chips: [] } : m),
      {
        sender: 'ai',
        text: cleanMarkdownText(engineRes.aiMessageText),
        structuredResults: engineRes.structuredResults || null,
        analytics: engineRes.analytics || null,
        chips: engineRes.chips || [],
        isExpanded: true,
        id: searchId
      }
    ]);
  };

  const chatMessagesContainerRef = useRef(null);
  useEffect(() => {
    if (chatMessagesContainerRef.current) {
      chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isAISearchBarOpen]);

  // AI Panel Height States (toggled between collapsed 72px and expanded 44vh)
  const [panelHeight, setPanelHeight] = useState(200);
  const [hoveredDockIndex, setHoveredDockIndex] = useState(null);

  // Right Categories Side Drawer states
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('Education');
  const [categorySearchQuery, setCategorySearchQuery] = useState('');
  const [selectedSubcategories, setSelectedSubcategories] = useState({});
  const hadCategorySelectionRef = useRef(false);

  // Profile Dropdown state
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cursor splash ripple effect
  useEffect(() => {
    const handleSplash = (e) => {
      const splash = document.createElement('span');
      splash.className = 'cursor-splash';
      splash.style.left = `${e.clientX}px`;
      splash.style.top = `${e.clientY}px`;
      document.body.appendChild(splash);
      splash.addEventListener('animationend', () => splash.remove());
    };
    document.addEventListener('click', handleSplash);
    return () => document.removeEventListener('click', handleSplash);
  }, []);

  // Left popover auto-dismiss on click outside
  const leftPopoverRef = useRef(null);
  useEffect(() => {
    const handleClickOutsidePopover = (event) => {
      if (
        leftPopoverRef.current &&
        !leftPopoverRef.current.contains(event.target) &&
        !event.target.closest('.map-controls-left-strip') &&
        !event.target.closest('.map-tools-dock-wrapper')
      ) {
        setActiveLeftPopover(null);
      }
    };
    if (activeLeftPopover) {
      document.addEventListener('mousedown', handleClickOutsidePopover);
    }
    return () => document.removeEventListener('mousedown', handleClickOutsidePopover);
  }, [activeLeftPopover]);

  // Auto-dismiss floating history / query menus on outside click or scroll
  useEffect(() => {
    const handleCloseFloatingMenus = (event) => {
      if (
        !event.target.closest('.history-menu-container') &&
        !event.target.closest('.floating-history-dropdown')
      ) {
        setActiveHistoryMenuId(null);
        setActiveQueryMenuId(null);
      }
    };
    if (activeHistoryMenuId || activeQueryMenuId) {
      document.addEventListener('mousedown', handleCloseFloatingMenus);
      window.addEventListener('scroll', handleCloseFloatingMenus, true);
    }
    return () => {
      document.removeEventListener('mousedown', handleCloseFloatingMenus);
      window.removeEventListener('scroll', handleCloseFloatingMenus, true);
    };
  }, [activeHistoryMenuId, activeQueryMenuId]);

  // Logs console
  const [logs, setLogs] = useState([]);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [clickPoints, setClickPoints] = useState([]);
  const [volumeResult, setVolumeResult] = useState(null);
  const activeProject = PROJECTS.find(p => p.id === selectedProjectId);

  const autoSaveSpatialQuery = ({
    title,
    category = 'Spatial Search',
    selectedSubcategories = {},
    spatialType = 'text',
    drawnGeometry = null,
    resultsCount = 0,
    isFavorite = false
  }) => {
    if (!title && !category) return;
    const cleanTitle = (title || category).trim();
    const newId = `sq-${Date.now()}`;

    if (isFavorite) {
      setSavedQueries(prev => {
        const existing = prev.find(q => q.title.toLowerCase() === cleanTitle.toLowerCase());
        const isFav = existing ? existing.isFavorite : true;
        const filtered = prev.filter(q => q.title.toLowerCase() !== cleanTitle.toLowerCase());

        const newItem = {
          id: newId,
          title: cleanTitle,
          category: category || 'Spatial Search',
          resultsCount: resultsCount,
          timestamp: 'Just now',
          createdAt: Date.now(),
          isFavorite: isFav,
          queryState: {
            query: cleanTitle,
            category: category,
            selectedSubcategories: { ...selectedSubcategories },
            spatialType: spatialType,
            drawnGeometry: drawnGeometry,
            resultsCount: resultsCount
          }
        };
        return [newItem, ...filtered];
      });
      setIsPinnedAccordionOpen(true);
    }

    setSearchHistory(prev => [
      { id: Date.now(), text: cleanTitle, timestamp: 'Just now' },
      ...prev.filter(item => item.text.toLowerCase() !== cleanTitle.toLowerCase())
    ]);
  };

  const handleDrawnAreaSpatialQuery = (drawData, shouldExecuteImmediately = false) => {
    setSearchBoxDrawnAttachment(drawData);
    setSelectedLocation(null);
    setActiveSearchResults([]);
    setActiveSearchFilterTag(null);
    setActiveRoute(null);
    setIsNavigating(false);
    setNavStepIndex(0);
    setLastDrawnQuery(drawData);
    spatialAIEngineInstance.setDrawnAreaContext(drawData);

    // If restoring from saved query or history with shouldExecuteImmediately = true
    if (shouldExecuteImmediately) {
      setLastDrawnQuery(drawData);
      spatialAIEngineInstance.setDrawnAreaContext(drawData);
      const activeKeys = Object.keys(selectedSubcategories || {}).filter(k => selectedSubcategories[k]);
      const queryResult = executeDrawnAreaSpatialQuery({
        ...drawData,
        activeCategories: activeKeys,
        query: searchQuery,
        lang: lang
      });

      setActiveSearchResults(queryResult.results || []);
      setActiveSearchFilterTag({
        query: '',
        category: 'Drawn Area',
        label: `Drawn Area (${queryResult.count} found)`
      });

      setIsAISearchBarOpen(true);
      setAiState('panel');
      if (panelHeight <= 100) setPanelHeight(280);

      const searchId = Date.now() + Math.random();
      setChatMessages(prev => [
        ...prev.map(m => m.id === 'welcome-init' ? { ...m, chips: [] } : m),
        { sender: 'user', text: queryResult.userQueryText, drawnArea: drawData },
        { sender: 'ai', isSearching: true, id: searchId }
      ]);

      const newId = Date.now();
      setActiveHistoryId(newId);
      setSearchHistory(prev => [
        {
          id: newId,
          text: queryResult.userQueryText,
          category: activeKeys.length > 0 ? activeKeys.join(', ') : 'Drawn Area',
          resultsCount: queryResult.count,
          timestamp: 'Just now',
          queryState: {
            query: queryResult.userQueryText,
            category: activeKeys.length > 0 ? activeKeys.join(', ') : 'Drawn Area',
            selectedSubcategories: selectedSubcategories,
            spatialType: 'draw',
            drawnGeometry: drawData,
            resultsCount: queryResult.count
          }
        },
        ...prev.filter(item => item.text.toLowerCase() !== queryResult.userQueryText.toLowerCase())
      ]);

      addLog('AI Spatial Engine', `[DRAWN AREA] Spatial query executed: ${queryResult.count} matched in drawn geometry`, 'success');
      showToast(`Drawn Area Query: Found ${queryResult.count} matching features`);

      setTimeout(() => {
        setChatMessages(prev => prev.map(msg =>
          msg.id === searchId
            ? {
              sender: 'ai',
              text: cleanMarkdownText(queryResult.aiMessageText),
              structuredResults: queryResult.structuredResults,
              chips: queryResult.chips || [],
              isExpanded: true,
              id: searchId
            }
            : msg
        ));
      }, 450);
      return;
    }

    // Normal drawing action: Set drawn area as spatial boundary without executing search or dumping messages
    setIsAISearchBarOpen(true);
    setAiState('panel');
    if (panelHeight <= 100) setPanelHeight(280);

    showToast(lang === 'ar' ? 'تم تحديد النطاق كحد جغرافي. اكتب استفسارك واضغط Enter' : 'Drawn area set as spatial boundary. Type your query and press Enter');
  };

  const handleClearDrawnArea = () => {
    setLastDrawnQuery(null);
    setSearchBoxDrawnAttachment(null);
    setRestoredDrawnGeometry(null);
    setActiveDrawTool(null);
    setClearVisualDrawnTrigger(Date.now());
    spatialAIEngineInstance.clearDrawnAreaContext();
    addLog('AI Spatial Engine', 'Spatial query area cleared', 'info');
  };

  const handleRunHistoryQuery = (item) => {
    setAiPanelSubView('chat');
    if (!item) return;
    setActiveHistoryMenuId(null);
    setActiveHistoryId(item.id);
    const { queryState } = item;

    // Restore drawn area if applicable
    if (queryState?.spatialType === 'draw' && queryState?.drawnGeometry) {
      if (queryState?.selectedSubcategories) {
        setSelectedSubcategories(queryState.selectedSubcategories);
      }
      setIsAISearchBarOpen(true);
      setAiState('panel');
      if (panelHeight <= 100) setPanelHeight(280);
      setLastDrawnQuery(queryState.drawnGeometry);
      setRestoredDrawnGeometry({ ...queryState.drawnGeometry, trigger: Date.now() });
      handleDrawnAreaSpatialQuery(queryState.drawnGeometry, true);
      showToast(`Restored: "${item.text || item.title}"`);
      return;
    }

    if (queryState?.selectedSubcategories) {
      setSelectedSubcategories(queryState.selectedSubcategories);
    }
    const targetQ = item.text || item.queryState?.query || '';
    setSearchQuery(targetQ);
    setAiSearchQuery(targetQ);
    setIsAISearchBarOpen(true);
    setAiState('panel');
    if (panelHeight <= 100) setPanelHeight(280);
    handleUnifiedSearch({ query: targetQ, category: item.category || item.queryState?.category });
    showToast(`Executing: "${targetQ}"`);
  };

  const handleStartRenameHistory = (id, currentText) => {
    setRenamingHistoryId(id);
    setRenameHistoryText(currentText);
    setActiveHistoryMenuId(null);
  };

  const handleSaveRenameHistory = (id) => {
    if (renameHistoryText.trim()) {
      setSearchHistory(prev => prev.map(item => item.id === id ? { ...item, text: renameHistoryText.trim() } : item));
      showToast("History renamed successfully");
    }
    setRenamingHistoryId(null);
  };

  const handleDeleteHistory = (id) => {
    setSearchHistory(prev => prev.filter(item => item.id !== id));
    setActiveHistoryMenuId(null);
    showToast("Deleted from history");
  };

  const handlePinQuery = (item) => {
    if (!item) return;
    setActiveHistoryMenuId(null);
    const cleanTitle = (item.text || item.title || '').trim();
    if (!cleanTitle) return;

    const newId = `sq-${Date.now()}`;
    const newItem = {
      id: newId,
      title: cleanTitle,
      category: item.category || 'Spatial Search',
      resultsCount: item.resultsCount || 0,
      timestamp: 'Just now',
      createdAt: Date.now(),
      isFavorite: false,
      queryState: item.queryState || {
        query: cleanTitle,
        category: item.category,
        resultsCount: item.resultsCount
      }
    };

    setSavedQueries(prev => [newItem, ...prev.filter(q => q.title.toLowerCase() !== cleanTitle.toLowerCase())]);
    setSearchHistory(prev => prev.filter(h => (h.text || '').toLowerCase() !== cleanTitle.toLowerCase()));
    setIsPinnedAccordionOpen(true);
    showToast(lang === 'ar' ? `تم تثبيت "${cleanTitle}"` : `Pinned "${cleanTitle}"`);
  };

  const handleDeleteSavedQuery = (id) => {
    setActiveQueryMenuId(null);
    const item = savedQueries.find(q => q.id === id);
    const cleanTitle = (item?.title || item?.text || '').trim();
    setSavedQueries(prev => prev.filter(q => q.id !== id));
    showToast(lang === 'ar' ? `تم حذف "${cleanTitle}"` : `Deleted "${cleanTitle}"`);
  };

  const handleUnpinQuery = (item) => {
    if (!item) return;
    setActiveQueryMenuId(null);
    const cleanTitle = (item.title || item.text || '').trim();
    if (!cleanTitle) return;

    setSavedQueries(prev => prev.filter(q => q.id !== item.id));

    const newId = Date.now();
    setSearchHistory(prev => [
      {
        id: newId,
        text: cleanTitle,
        category: item.category || 'Spatial Search',
        resultsCount: item.resultsCount || 0,
        timestamp: 'Just now',
        queryState: item.queryState || { query: cleanTitle, category: item.category }
      },
      ...prev.filter(h => (h.text || '').toLowerCase() !== cleanTitle.toLowerCase())
    ]);
    showToast(lang === 'ar' ? `تم إلغاء تثبيت "${cleanTitle}"` : `Unpinned "${cleanTitle}"`);
  };

  const handleRestoreSavedQuery = (item) => {
    setAiPanelSubView('chat');
    if (!item) return;
    const { queryState, title, category } = item;
    setActiveQueryMenuId(null);

    // 1. Restore subcategories if present
    if (queryState?.selectedSubcategories) {
      setSelectedSubcategories(queryState.selectedSubcategories);
    }

    // 2. Open the AI search results panel
    setIsAISearchBarOpen(true);
    setAiState('panel');
    if (panelHeight <= 100) setPanelHeight(280);

    // 3. If it was a drawn area query:
    if (queryState?.spatialType === 'draw' && queryState?.drawnGeometry) {
      setLastDrawnQuery(queryState.drawnGeometry);
      setRestoredDrawnGeometry({ ...queryState.drawnGeometry, trigger: Date.now() });
      handleDrawnAreaSpatialQuery(queryState.drawnGeometry, true);
    } else {
      setLastDrawnQuery(null);
      setRestoredDrawnGeometry(null);
      const targetQ = queryState?.query || title;
      setSearchQuery(targetQ);
      setAiSearchQuery(targetQ);
      handleUnifiedSearch({ query: targetQ, category: queryState?.category || category });
    }

    showToast(`Restored: "${title}"`);
  };

  // Process pending action upon successful authentication
  useEffect(() => {
    if (isLoggedIn && currentUser?.username && pendingUserAction) {
      if (pendingUserAction.type === 'save_current_search') {
        const cleanTitle = (pendingUserAction.query || 'Spatial Search').trim();
        const newId = `sq-${Date.now()}`;
        const newItem = {
          id: newId,
          title: cleanTitle,
          category: pendingUserAction.category || 'Spatial Search',
          resultsCount: pendingUserAction.resultsCount || 0,
          timestamp: 'Just now',
          createdAt: Date.now(),
          isFavorite: true,
          queryState: {
            query: cleanTitle,
            category: pendingUserAction.category,
            resultsCount: pendingUserAction.resultsCount
          }
        };
        setSavedQueries(prev => [newItem, ...prev.filter(q => q.title.toLowerCase() !== cleanTitle.toLowerCase())]);
        setIsPinnedAccordionOpen(true);
        showToast(lang === 'ar' ? 'تم حفظ البحث في مساحة عملك' : 'Search saved to your workspace');
      } else if (pendingUserAction.type === 'favorite_place' && pendingUserAction.place) {
        const place = pendingUserAction.place;
        const newFav = {
          id: place.id || `fav-${Date.now()}`,
          title: place.title,
          arabicTitle: place.arabicTitle || '',
          category: place.category || place.subcategory || 'Location',
          subcategory: place.subcategory || place.category || '',
          lat: place.lat,
          lon: place.lon,
          coords: [place.lat, place.lon],
          area: place.address || place.city || 'Abu Dhabi',
          timestamp: 'Just now',
          isFavorite: true
        };
        setFavoritePlaces(prev => [newFav, ...prev.filter(p => p.id !== place.id && p.title !== place.title)]);
        showToast(lang === 'ar' ? `تمت إضافة "${place.title}" إلى المفضلة` : `Added "${place.title}" to Favorites`);
      }
      setPendingUserAction(null);
    }
  }, [isLoggedIn, currentUser?.username, pendingUserAction]);

  const handleSaveCurrentSearch = (msg) => {
    const qTitle = searchQuery || spatialAIEngineInstance.context?.dataset || (activeSearchResults[0]?.category) || 'Spatial Search';
    if (!isLoggedIn) {
      setPendingUserAction({
        type: 'save_current_search',
        query: qTitle,
        category: spatialAIEngineInstance.context?.dataset || 'Spatial Search',
        resultsCount: activeSearchResults.length,
        contextSnapshot: { ...spatialAIEngineInstance.context }
      });
      setIsSignInOpen(true);
      setAuthState('login');
      showToast(lang === 'ar' ? 'يرجى تسجيل الدخول لحفظ عملية البحث في حسابك' : 'Please sign in to save this search to your workspace');
      return;
    }

    autoSaveSpatialQuery({
      title: qTitle,
      category: spatialAIEngineInstance.context?.dataset || 'Spatial Search',
      selectedSubcategories: selectedSubcategories,
      spatialType: 'text',
      resultsCount: activeSearchResults.length,
      isFavorite: true
    });
    showToast(lang === 'ar' ? 'تم حفظ البحث في مجموعتك بنجاح' : 'Search saved to your collections');
  };

  const handleToggleFavoriteQuery = (id) => {
    if (!isLoggedIn) {
      setIsSignInOpen(true);
      setAuthState('login');
      showToast(lang === 'ar' ? 'يرجى تسجيل الدخول لحفظ عمليات البحث في حسابك' : 'Sign in to save this search to your account');
      return;
    }
    setSavedQueries(prev => prev.map(q => {
      if (q.id === id) {
        const nextFav = !q.isFavorite;
        showToast(nextFav ? "Added to Favorites" : "Removed from Favorites");
        return { ...q, isFavorite: nextFav };
      }
      return q;
    }));
  };

  const handleStartRenameQuery = (id, currentTitle) => {
    setRenamingQueryId(id);
    setRenameQueryText(currentTitle);
    setActiveQueryMenuId(null);
  };

  const handleSaveRenameQuery = (id) => {
    if (renameQueryText.trim()) {
      setSavedQueries(prev => prev.map(q => q.id === id ? { ...q, title: renameQueryText.trim() } : q));
      showToast("Query renamed successfully");
    }
    setRenamingQueryId(null);
  };

  const handleDeleteQuery = (id) => {
    setSavedQueries(prev => prev.filter(q => q.id !== id));
    setActiveQueryMenuId(null);
    showToast("Deleted from Saved Queries");
  };

  const handleToggleFavoritePlace = (place) => {
    if (!place) return;
    if (!isLoggedIn) {
      setPendingUserAction({
        type: 'favorite_place',
        place
      });
      setIsSignInOpen(true);
      setAuthState('login');
      showToast(lang === 'ar' ? 'يرجى تسجيل الدخول لإضافة المواقع إلى المفضلة' : 'Please sign in to add locations to your favorites');
      return;
    }
    const isAlreadyFav = favoritePlaces.some(p => p.id === place.id || p.title === place.title);

    if (isAlreadyFav) {
      setFavoritePlaces(prev => prev.filter(p => p.id !== place.id && p.title !== place.title));
      showToast(`Removed "${place.title}" from Favorites`);
    } else {
      const newFav = {
        id: place.id || `fav-${Date.now()}`,
        title: place.title,
        arabicTitle: place.arabicTitle || '',
        category: place.category || place.subcategory || 'Location',
        subcategory: place.subcategory || place.category || '',
        lat: place.lat,
        lon: place.lon,
        coords: [place.lat, place.lon],
        area: place.address || place.city || 'Abu Dhabi',
        timestamp: 'Just now',
        isFavorite: true
      };
      setFavoritePlaces(prev => [newFav, ...prev]);
      showToast(`Added "${place.title}" to Favorites`);
    }

    // Sync in chatMessages structuredResults
    setChatMessages(prev => prev.map(m => {
      if (m.structuredResults?.items) {
        const newItems = m.structuredResults.items.map(it => {
          if (it.id === place.id || it.title === place.title) {
            return { ...it, isFavorite: !isAlreadyFav };
          }
          return it;
        });
        return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
      }
      return m;
    }));

    // Sync in selectedLocation
    setSelectedLocation(prev => {
      if (prev && (prev.id === place.id || prev.title === place.title)) {
        return { ...prev, isFavorite: !isAlreadyFav };
      }
      return prev;
    });
  };

  const handleSelectFavoritePlace = (item) => {
    const lat = parseFloat(item.lat ?? (Array.isArray(item.coords) ? item.coords[0] : 24.4539));
    const lon = parseFloat(item.lon ?? (Array.isArray(item.coords) ? item.coords[1] : 54.3773));
    
    const favItem = {
      ...item,
      id: item.id || `fav-${Date.now()}`,
      lat: lat,
      lon: lon,
      coords: [lat, lon],
      isFavorite: true,
      zoomTrigger: Date.now(),
      locateTrigger: Date.now()
    };

    if (mapInstanceRef.current && !isNaN(lat) && !isNaN(lon)) {
      mapInstanceRef.current.flyTo([lat, lon], 15, { duration: 1.0 });
    }

    setSelectedLocation(favItem);
    setActiveSearchResults([favItem]);
    showToast(lang === 'ar' ? `تم الانتقال إلى ${item.arabicTitle || getArabicTitle(item.title)}` : `Navigated to ${item.title}`);
  };

  const getCategoryIconForHistory = (category = '', size = 11) => {
    const cat = (category || '').toLowerCase();
    const isDark = theme === 'dark';
    if (cat.includes('educ') || cat.includes('school') || cat.includes('univ')) {
      const color = isDark ? '#c084fc' : '#8B5CF6';
      return {
        icon: <GraduationCap size={size} color={color} />,
        bg: isDark ? 'rgba(192, 132, 252, 0.18)' : 'rgba(139, 92, 246, 0.10)',
        border: isDark ? 'rgba(192, 132, 252, 0.35)' : 'rgba(139, 92, 246, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(192, 132, 252, 0.20)' : 'rgba(139, 92, 246, 0.08)'
      };
    }
    if (cat.includes('health') || cat.includes('med') || cat.includes('hosp') || cat.includes('clinic')) {
      const color = isDark ? '#f87171' : '#EF4444';
      return {
        icon: <Heart size={size} color={color} />,
        bg: isDark ? 'rgba(248, 113, 113, 0.18)' : 'rgba(239, 68, 68, 0.10)',
        border: isDark ? 'rgba(248, 113, 113, 0.35)' : 'rgba(239, 68, 68, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(248, 113, 113, 0.20)' : 'rgba(239, 68, 68, 0.08)'
      };
    }
    if (cat.includes('indus') || cat.includes('plant') || cat.includes('power') || cat.includes('util') || cat.includes('energy')) {
      const color = isDark ? '#fbbf24' : '#F59E0B';
      return {
        icon: <Zap size={size} color={color} />,
        bg: isDark ? 'rgba(251, 191, 36, 0.18)' : 'rgba(245, 158, 11, 0.10)',
        border: isDark ? 'rgba(251, 191, 36, 0.35)' : 'rgba(245, 158, 11, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(251, 191, 36, 0.20)' : 'rgba(245, 158, 11, 0.08)'
      };
    }
    if (cat.includes('park') || cat.includes('env') || cat.includes('green') || cat.includes('nature') || cat.includes('tree') || cat.includes('garden')) {
      const color = isDark ? '#4ade80' : '#16A34A';
      return {
        icon: <Trees size={size} color={color} />,
        bg: isDark ? 'rgba(74, 222, 128, 0.18)' : 'rgba(22, 163, 74, 0.10)',
        border: isDark ? 'rgba(74, 222, 128, 0.35)' : 'rgba(22, 163, 74, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(74, 222, 128, 0.20)' : 'rgba(22, 163, 74, 0.08)'
      };
    }
    if (cat.includes('gov') || cat.includes('admin') || cat.includes('civic') || cat.includes('ministry')) {
      const color = isDark ? '#818cf8' : '#7C3AED';
      return {
        icon: <Building size={size} color={color} />,
        bg: isDark ? 'rgba(129, 140, 248, 0.18)' : 'rgba(124, 58, 237, 0.10)',
        border: isDark ? 'rgba(129, 140, 248, 0.35)' : 'rgba(124, 58, 237, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(129, 140, 248, 0.20)' : 'rgba(124, 58, 237, 0.08)'
      };
    }
    if (cat.includes('rest') || cat.includes('food') || cat.includes('din') || cat.includes('cafe')) {
      const color = isDark ? '#fb923c' : '#EA580C';
      return {
        icon: <Utensils size={size} color={color} />,
        bg: isDark ? 'rgba(251, 146, 60, 0.18)' : 'rgba(234, 88, 12, 0.10)',
        border: isDark ? 'rgba(251, 146, 60, 0.35)' : 'rgba(234, 88, 12, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(251, 146, 60, 0.20)' : 'rgba(234, 88, 12, 0.08)'
      };
    }
    if (cat.includes('trans') || cat.includes('air') || cat.includes('port') || cat.includes('bus') || cat.includes('traffic')) {
      const color = isDark ? '#2dd4bf' : '#0D9488';
      return {
        icon: <Car size={size} color={color} />,
        bg: isDark ? 'rgba(45, 212, 191, 0.18)' : 'rgba(13, 148, 136, 0.10)',
        border: isDark ? 'rgba(45, 212, 191, 0.35)' : 'rgba(13, 148, 136, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(45, 212, 191, 0.20)' : 'rgba(13, 148, 136, 0.08)'
      };
    }
    if (cat.includes('tour') || cat.includes('hotel') || cat.includes('museum') || cat.includes('attract')) {
      const color = isDark ? '#38bdf8' : '#0284C7';
      return {
        icon: <Compass size={size} color={color} />,
        bg: isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(2, 132, 199, 0.10)',
        border: isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(2, 132, 199, 0.20)',
        color: color,
        badgeBg: isDark ? 'rgba(56, 189, 248, 0.20)' : 'rgba(2, 132, 199, 0.08)'
      };
    }
    const color = isDark ? '#38bdf8' : '#1D68F2';
    return {
      icon: <Search size={size} color={color} />,
      bg: isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(29, 104, 242, 0.10)',
      border: isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(29, 104, 242, 0.20)',
      color: color,
      badgeBg: isDark ? 'rgba(56, 189, 248, 0.20)' : 'rgba(29, 104, 242, 0.08)'
    };
  };

  const handleUnifiedSearch = (searchOptions = {}) => {
    const {
      query = searchQuery,
      category = '',
      displayLabel = '',
      userLocationOverride,
      locationPermissionDeniedOverride
    } = searchOptions || {};
    setSelectedLocation(null);
    setActiveRoute(null);
    setIsNavigating(false);
    setNavStepIndex(0);
    if (panelHeight <= 100) setPanelHeight(200);
    const cleanQuery = typeof query === 'string' ? query.trim() : '';
    const cleanCategory = typeof category === 'string' ? category.trim() : '';

    // RULE: Clear search inputs immediately after submission so input returns to placeholder
    setAiSearchQuery('');
    setSearchQuery('');

    // Check if an active drawn spatial boundary is attached to this query
    let activeDrawnArea = searchOptions.drawnArea || searchBoxDrawnAttachment || null;
    if (!activeDrawnArea && lastDrawnQuery && cleanQuery) {
      const qLower = cleanQuery.toLowerCase();
      const isAreaFollowUp = qLower.includes('this area') || qLower.includes('the area') || qLower.includes('here') ||
        qLower.includes('inside') || qLower.includes('within') || qLower.includes('selected area') || qLower.includes('drawn area') ||
        qLower.includes('in area') || qLower.includes('هذه المنطقة') || qLower.includes('المنطقة المحددة') || qLower.includes('هنا') || qLower.includes('داخل') ||
        qLower.includes('closest') || qLower.includes('nearest') || qLower.includes('which one') || qLower.includes('الأقرب') || qLower.includes('أيهم') ||
        qLower.includes('top rated in') || qLower.includes('higher rating');
      if (isAreaFollowUp) {
        activeDrawnArea = lastDrawnQuery;
      }
    }

    if (activeDrawnArea) {
      // Retain active context in engine and lastDrawnQuery, but clear the input attachment card
      setSearchBoxDrawnAttachment(null);
      setLastDrawnQuery(activeDrawnArea);
      spatialAIEngineInstance.setDrawnAreaContext(activeDrawnArea);
    } else {
      // Clean switch to another conversation not related to draw
      setSearchBoxDrawnAttachment(null);
      setLastDrawnQuery(null);
      setRestoredDrawnGeometry(null);
      spatialAIEngineInstance.setDrawnAreaContext(null);
    }

    if (activeDrawnArea) {

      // If no text query or category was entered, do not execute generic search unless explicitly requested
      if (!cleanQuery && !cleanCategory) {
        if (!searchOptions.forceExecuteDrawn) {
          return;
        }
        const activeKeys = Object.keys(selectedSubcategories || {}).filter(k => selectedSubcategories[k]);
        const queryResult = executeDrawnAreaSpatialQuery({
          ...activeDrawnArea,
          activeCategories: activeKeys,
          query: '',
          lang: lang
        });

        setSelectedLocation(null);
        setActiveRoute(null);
        setIsNavigating(false);
        setNavStepIndex(0);
        setActiveSearchResults(queryResult.results || []);
        setActiveSearchFilterTag({
          query: '',
          category: activeKeys.length > 0 ? activeKeys.join(', ') : 'Drawn Area',
          label: `Drawn Area (${queryResult.count} found)`
        });

        setShowMap(true);
        setIsAISearchBarOpen(true);
        setAiState('panel');
        if (panelHeight <= 100) setPanelHeight(280);

        const searchId = Date.now() + Math.random();
        const userBubbleText = displayLabel || queryResult.userQueryText;

        setChatMessages(prev => [
          ...prev.map(m => m.id === 'welcome-init' || m.id === 'drawn-awaiting-query' ? { ...m, chips: [] } : m),
          {
            sender: 'user',
            text: userBubbleText,
            rawQuery: userBubbleText,
            drawnArea: activeDrawnArea
          },
          { sender: 'ai', isSearching: true, id: searchId }
        ]);

        const newId = Date.now();
        setActiveHistoryId(newId);
        setSearchHistory(prev => [
          {
            id: newId,
            text: userBubbleText,
            category: activeKeys.length > 0 ? activeKeys.join(', ') : 'Drawn Area',
            resultsCount: queryResult.count,
            timestamp: 'Just now',
            queryState: {
              query: userBubbleText,
              category: 'Drawn Area',
              selectedSubcategories: selectedSubcategories,
              spatialType: 'draw',
              drawnGeometry: activeDrawnArea,
              resultsCount: queryResult.count
            }
          },
          ...prev.filter(item => item.text.toLowerCase() !== userBubbleText.toLowerCase())
        ]);

        addLog('AI Spatial Engine', `[DRAWN AREA] Spatial query executed: ${queryResult.count} matched in drawn geometry`, 'success');

        setTimeout(() => {
          setChatMessages(prev => prev.map(msg =>
            msg.id === searchId
              ? {
                sender: 'ai',
                text: cleanMarkdownText(queryResult.aiMessageText),
                structuredResults: queryResult.structuredResults ? {
                  ...queryResult.structuredResults,
                  items: (queryResult.structuredResults.items || []).map(it => ({ ...it, drawnArea: activeDrawnArea }))
                } : queryResult.structuredResults,
                chips: queryResult.chips || [],
                isExpanded: true,
                id: searchId,
                drawnArea: activeDrawnArea
              }
              : msg
          ));
          setClearVisualDrawnTrigger(Date.now());
          setActiveDrawTool(null);
        }, 450);

        return;
      }
    }

    if (cleanQuery) {
      const newId = Date.now();
      setActiveHistoryId(newId);
      setSearchHistory(prev => [
        {
          id: newId,
          text: cleanQuery,
          category: cleanCategory || 'General',
          resultsCount: 12,
          timestamp: 'Just now',
          queryState: { query: cleanQuery, category: cleanCategory }
        },
        ...prev.filter(item => item.text.toLowerCase() !== cleanQuery.toLowerCase())
      ]);
    }

    if (!cleanQuery && !cleanCategory) {
      setShowMap(true);
      setAiState('panel');
      setChatMessages([getInitialWelcomeMessage()]);
      setActiveSearchResults([]);
      setSelectedLocation(null);
      setActiveRoute(null);
      setIsNavigating(false);
      setNavStepIndex(0);
      setAiSearchQuery('');
      setSearchQuery('');
      return;
    }

    setAiState('panel');

    const q = cleanQuery.toLowerCase();
    // BIM Project Match check
    if (q.includes('villa') || q.includes('royale') || q.includes('bim-01') || q.includes('bim-02') || q.includes('wellness')) {
      setSelectedProjectId('villa-royale');
      setSelectedBuilding(null);
      setSelectedLevel('All');
      setActiveSearchResults([]);
      setActiveSearchFilterTag({ query: cleanQuery, category: '', label: 'Villa Royale BIM' });
      setShowMap(true);
      addLog('AI Search', "Matched BIM project 'Villa Royale'. Loaded WebScene.", 'success');
      showToast("AI Match: Loaded Villa Royale Project");
      return;
    } else if (q.includes('downtown') || q.includes('commercial') || q.includes('tower') || q.includes('retail') || q.includes('hq')) {
      setSelectedProjectId('downtown-comm');
      setSelectedBuilding(null);
      setSelectedLevel('All');
      setActiveSearchResults([]);
      setActiveSearchFilterTag({ query: cleanQuery, category: '', label: 'Downtown Commercial' });
      setShowMap(true);
      addLog('AI Search', "Matched BIM project 'Downtown Commercial'. Loaded WebScene.", 'success');
      showToast("AI Match: Loaded Downtown Commercial");
      return;
    } else if (q.includes('transit') || q.includes('hub') || q.includes('terminal')) {
      setSelectedProjectId('transit-hub');
      setSelectedBuilding(null);
      setSelectedLevel('All');
      setActiveSearchResults([]);
      setActiveSearchFilterTag({ query: cleanQuery, category: '', label: 'Metropolitan Transit Hub' });
      setShowMap(true);
      addLog('AI Search', "Matched BIM project 'Metropolitan Transit Hub'. Loaded WebScene.", 'success');
      showToast("AI Match: Loaded Metropolitan Transit Hub");
      return;
    }

    // Determine user location coordinates
    let effectiveUserLoc = userLocationOverride !== undefined
      ? userLocationOverride
      : (realUserLocation || {
          lat: 24.4539,
          lon: 54.3773,
          name: lang === 'ar' ? 'موقعك الحالي' : 'Current Location',
          arabicName: 'موقعك الحالي',
          isUserLocation: true
        });
    let effectivePermDenied = locationPermissionDeniedOverride !== undefined ? locationPermissionDeniedOverride : locationPermissionDenied;

    // Check if query has an explicit district / city / landmark specified
    const qLower = cleanQuery.toLowerCase();
    const isExplicitLocation = Boolean(
      qLower.match(/\bin\s+(?:khalifa city|abu dhabi|al ain|yas island|saadiyat|reem|mussafah|dubai|sharjah|al dhafra)\b/i) ||
      qLower.match(/\bفي\s+(?:مدينة خليفة|أبوظبي|العين|جزيرة ياس|السعديات|الريم|مصفح|دبي|الشارقة|الظفرة)\b/i) ||
      resolveDistrictOrLandmark(qLower)
    );

    // Check if the query is a near-me / user-location intent (e.g. near me, nearest, closest, within x km of me)
    const isNearMe = !isExplicitLocation && /(?:near(?:by)?(?:\s+to)?\s+me|around\s+me|around\s+my\s+location|closest\s+to\s+me|closest\s+to\s+my\s+location|\bnearest\b|\bclosest\b|my\s+location|current\s+location|from\s+me|of\s+me|within\s+[\d.]+\s*(?:km|kilometer|meters?|m\b)|بجانبي|حولي|بالقرب\s*مني|(?:قريب|قريبة|القريب|القريبة)\s*مني|أقرب|الأقرب|موقعي|موقعي\s*الحالي|ضمن\s*[\d.]+\s*كم|في\s*نطاق\s*[\d.]+\s*كم|على\s*بعد\s*[\d.]+\s*كم)/i.test(cleanQuery);

    let userBubbleText = displayLabel || cleanQuery || cleanCategory;
    if (lang === 'ar') {
      if (cleanCategory) {
        userBubbleText = t.getCatName ? t.getCatName(cleanCategory) : cleanCategory;
      } else if (!displayLabel) {
        if (cleanQuery.includes('What if population')) userBubbleText = 'أثر عيادة (+20% سكان)';
        else if (cleanQuery.includes('best place for a new clinic')) userBubbleText = 'موقع عيادة (15 د)';
        else if (cleanQuery.includes('suitability layer for pharmacies')) userBubbleText = 'ملاءمة الصيدليات ذكاء';
        else if (cleanQuery.includes('nearest clinics')) userBubbleText = 'أقرب العيادات';
        else if (cleanQuery.includes('Schools within 2 km')) userBubbleText = 'المدارس (2 كم)';
        else if (cleanQuery.includes('Nurseries within 15 km')) userBubbleText = 'الحضانات (15 كم)';
        else if (cleanQuery.includes('Power stations within 20 km')) userBubbleText = 'محطات الكهرباء (20 كم)';
      }
    } else {
      if (cleanCategory) {
        userBubbleText = cleanCategory;
      }
    }

    const searchId = Date.now() + Math.random();
    setSearchBoxDrawnAttachment(null);
    setClearVisualDrawnTrigger(Date.now());
    setActiveDrawTool(null);
    setChatMessages(prev => [
      ...prev.map(m => m.id === 'welcome-init' ? { ...m, chips: [] } : m),
      {
        sender: 'user',
        text: userBubbleText,
        rawQuery: cleanQuery || cleanCategory || userBubbleText,
        drawnArea: activeDrawnArea
      },
      { sender: 'ai', isSearching: true, id: searchId, drawnArea: activeDrawnArea }
    ]);

    const executeSearchCore = (resolvedUserLoc, resolvedPermDenied) => {
      // Spatial GIS NLP Engine Processing with active Language Context
      const engineRes = spatialAIEngineInstance.processNaturalLanguageQuery(cleanQuery, cleanCategory, lang, {
        userLocation: resolvedUserLoc,
        locationPermissionDenied: resolvedPermDenied,
        selectedLocation,
        currentResults: activeSearchResults,
        drawnArea: activeDrawnArea
      });

      // Execute natural-language application control actions against existing app state
      if (engineRes.appActions && engineRes.appActions.length > 0) {
        engineRes.appActions.forEach(action => {
          switch (action.type) {
            case 'CHANGE_THEME':
              setTheme(action.theme);
              break;
            case 'CHANGE_LANGUAGE':
              setLang(action.lang);
              break;
            case 'CHANGE_BASEMAP':
              setActiveBasemap(action.basemap);
              setActiveLeftPopover(null);
              break;
            case 'OPEN_BASEMAP_GALLERY':
              setActiveLeftPopover('basemap');
              break;
            case 'ZOOM_IN':
              if (mapInstanceRef.current) mapInstanceRef.current.zoomIn();
              break;
            case 'ZOOM_OUT':
              if (mapInstanceRef.current) mapInstanceRef.current.zoomOut();
              break;
            case 'RESET_VIEW':
              if (mapInstanceRef.current) mapInstanceRef.current.flyTo(action.center || [24.4539, 54.3773], action.zoom || 12);
              break;
            case 'FLY_TO':
              if (mapInstanceRef.current && action.center) mapInstanceRef.current.flyTo(action.center, action.zoom || 14);
              break;
            case 'OPEN_LAYERS':
              setIsSidebarOpen(true);
              setActiveTab('categories');
              break;
            case 'TOGGLE_LAYER':
              if (action.subcategories && action.subcategories.length > 0) {
                setSelectedSubcategories(prev => {
                  const next = { ...prev };
                  action.subcategories.forEach(sub => {
                    next[sub] = action.enabled;
                  });
                  return next;
                });
              } else if (action.category) {
                const catObj = CATEGORY_TREE.find(c => c.name.toLowerCase() === action.category.toLowerCase() || c.id.toLowerCase() === action.category.toLowerCase());
                if (catObj) {
                  setSelectedSubcategories(prev => {
                    const next = { ...prev };
                    catObj.subcategories.forEach(sub => {
                      next[sub] = action.enabled;
                    });
                    return next;
                  });
                } else {
                  setSelectedSubcategories(prev => ({
                    ...prev,
                    [action.category]: action.enabled
                  }));
                }
              }
              break;
            case 'OPEN_LEGEND':
              setActiveLeftPopover('legend');
              break;
            case 'CLOSE_LEGEND':
              setActiveLeftPopover(prev => prev === 'legend' ? null : prev);
              break;
            case 'TOGGLE_LEGEND':
              setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend');
              break;
            case 'LOCATE_USER':
              handleLocateUser();
              break;
            case 'OPEN_DRAW':
              setActiveLeftPopover('draw');
              break;
            case 'SET_DRAW_TOOL':
              setActiveDrawTool(action.tool);
              setActiveLeftPopover(null);
              break;
            case 'PRINT_MAP':
              openPrintDialog(action.options || { content: selectedLocation ? 'details' : (activeSearchResults.length > 0 ? 'results' : 'map') });
              break;
            default:
              break;
          }
        });
      }

      // Check if query triggered Print & Export modal
      if (engineRes.openPrintModal || engineRes.intent === 'print_export') {
        openPrintDialog(engineRes.printConfig || {});
      }

      const results = engineRes.results || [];
      if (engineRes.intent === 'route_directions' && engineRes.selectedFeature) {
        setSelectedLocation({
          ...engineRes.selectedFeature,
          zoomTrigger: Date.now(),
          locateTrigger: Date.now()
        });
        setActiveDetailTab('route');
        setActiveSearchResults(results.length > 0 ? results : [engineRes.selectedFeature]);
        handleCalculateRoute(engineRes.selectedFeature, 'car', false);
        if (cleanCategory && !cleanQuery) {
          setSelectedSubcategories({ [cleanCategory]: true });
        } else if (cleanQuery) {
          setSelectedSubcategories({});
        }
      } else if (engineRes.intent !== 'print_export' && engineRes.intent !== 'app_control' && engineRes.intent !== 'unsupported_app_action' && engineRes.intent !== 'location_permission_required') {
        setSelectedLocation(null);
        setActiveRoute(null);
        setIsNavigating(false);
        setNavStepIndex(0);
        const resultsWithArea = activeDrawnArea ? results.map(r => ({ ...r, drawnArea: activeDrawnArea })) : results;
        setActiveSearchResults(resultsWithArea);
        if (cleanCategory && !cleanQuery) {
          setSelectedSubcategories({ [cleanCategory]: true });
        } else if (cleanQuery) {
          setSelectedSubcategories({});
        }
      } else if (engineRes.intent === 'location_permission_required') {
        setActiveSearchResults([]);
      } else if (engineRes.intent === 'app_control' || engineRes.intent === 'unsupported_app_action') {
        if (results.length > 0 && activeSearchResults.length === 0) {
          setActiveSearchResults(results);
        }
      }
      setActiveContextBadges(engineRes.contextBadges || []);

      const tagLabel = cleanCategory || cleanQuery || 'All Locations';
      if (engineRes.intent !== 'app_control' && engineRes.intent !== 'unsupported_app_action' && engineRes.intent !== 'location_permission_required') {
        setActiveSearchFilterTag({ query: cleanQuery, category: cleanCategory, label: tagLabel });
      }
      setShowMap(true);

      const count = results.length;
      addLog('AI Spatial Engine', `[${engineRes.intent.toUpperCase()}] ${engineRes.querySummary || `${count} matched`}`, 'success');

      // Auto-save successful query to Saved Queries & History only for authenticated users and standard GIS queries
      if (isLoggedIn && engineRes.intent !== 'app_control' && engineRes.intent !== 'unsupported_app_action' && engineRes.intent !== 'location_permission_required') {
        autoSaveSpatialQuery({
          title: cleanQuery || cleanCategory,
          category: cleanCategory || (results[0]?.category) || 'Spatial Search',
          selectedSubcategories: selectedSubcategories,
          spatialType: 'text',
          resultsCount: count
        });
      }

      if (engineRes.mapAction?.type === 'fly_to' && engineRes.mapAction.center && mapInstanceRef.current) {
        mapInstanceRef.current.flyTo(engineRes.mapAction.center, engineRes.mapAction.zoom || 14);
      } else if (engineRes.mapAction?.type === 'zoom_in' && mapInstanceRef.current) {
        mapInstanceRef.current.zoomIn();
      } else if (engineRes.mapAction?.type === 'zoom_out' && mapInstanceRef.current) {
        mapInstanceRef.current.zoomOut();
      }

      setTimeout(() => {
        setChatMessages(prev => prev.map(msg =>
          msg.id === searchId
            ? {
              sender: 'ai',
              text: cleanMarkdownText(engineRes.aiMessageText),
              structuredResults: engineRes.structuredResults ? {
                ...engineRes.structuredResults,
                items: (engineRes.structuredResults.items || []).map(it => ({ ...it, drawnArea: activeDrawnArea }))
              } : null,
              clarification: engineRes.clarification || null,
              analytics: engineRes.analytics || null,
              isExpanded: true,
              chips: engineRes.chips || [],
              id: searchId,
              drawnArea: activeDrawnArea
            }
            : msg
        ));
        setClearVisualDrawnTrigger(Date.now());
        setActiveDrawTool(null);
      }, 450);
    };

    if (isNearMe && !userLocationOverride && !realUserLocation?.isRealGps && !effectivePermDenied && typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            name: lang === 'ar' ? 'موقعك الحالي' : 'Current Location',
            arabicName: 'موقعك الحالي',
            isUserLocation: true,
            isRealGps: true
          };
          setRealUserLocation(coords);
          setLocationPermissionDenied(false);
          // Automatically continue the original query with device coordinates
          executeSearchCore(coords, false);
        },
        (err) => {
          console.warn('[GeoVision] Geolocation access prompt:', err?.message);
          if (err && err.code === 1) {
            // Permission Denied
            setLocationPermissionDenied(true);
            executeSearchCore(null, true);
          } else {
            // Fallback for desktops / test environments without GPS hardware
            const fallbackLoc = {
              lat: 24.4539,
              lon: 54.3773,
              name: lang === 'ar' ? 'موقعك الحالي' : 'Current Location',
              arabicName: 'موقعك الحالي',
              isUserLocation: true,
              isRealGps: false
            };
            setRealUserLocation(fallbackLoc);
            executeSearchCore(fallbackLoc, false);
          }
        },
        { timeout: 8000, enableHighAccuracy: true }
      );
    } else {
      executeSearchCore(effectiveUserLoc, effectivePermDenied);
    }
  };

  const handleRunEditedQuery = (newQueryText, msgIdx) => {
    const trimmed = typeof newQueryText === 'string' ? newQueryText.trim() : '';
    if (!trimmed) return;
    setEditingMessageIdx(null);
    setEditingMessageText('');
    handleUnifiedSearch({ query: trimmed });
  };

  const handleCategoryToggle = (subcat) => {
    setSelectedSubcategories(prev => {
      const next = { ...prev };
      if (next[subcat]) {
        delete next[subcat];
      } else {
        next[subcat] = true;
      }
      return next;
    });
  };

  const handleParentCategoryToggle = (cat) => {
    setSelectedSubcategories(prev => {
      const next = { ...prev };
      const allSubSelected = cat.subcategories.every(sub => !!next[sub]);

      cat.subcategories.forEach(sub => {
        if (allSubSelected) {
          delete next[sub];
        } else {
          next[sub] = true;
        }
      });
      return next;
    });
  };

  const handleClearAllCategories = () => {
    const activeKeys = Object.keys(selectedSubcategories || {}).filter(k => selectedSubcategories[k]);
    if (activeKeys.length === 0) return;
    hadCategorySelectionRef.current = false;
    setSelectedSubcategories({});
    setActiveSearchResults([]);
    setActiveSearchFilterTag(null);
  };

  // Synchronize category multi-selection directly with plotted map features
  useEffect(() => {
    const activeKeys = Object.keys(selectedSubcategories || {}).filter(k => selectedSubcategories[k]);

    // If no layer category is selected in the drawer, do not overwrite active AI search results
    if (activeKeys.length === 0) {
      if (hadCategorySelectionRef.current) {
        hadCategorySelectionRef.current = false;
        setActiveSearchResults([]);
        setActiveSearchFilterTag(null);
      }
      return;
    }

    hadCategorySelectionRef.current = true;

    // Explicit layer checkbox selection: filter dataset for active keys
    let matched = GEOVISION_SPATIAL_DATASET.filter(item => {
      return activeKeys.some(key => {
        const isSub = isSubcategoryMatch(item.subcategory, key);
        const isCat = isCategoryMatch(item.category, key);
        return isSub || isCat;
      });
    });

    // If an active drawn spatial boundary exists, keep layer filtering constrained to it
    if (lastDrawnQuery) {
      matched = matched.filter(item => isPointInDrawnArea(item, lastDrawnQuery));
    }

    setActiveSearchResults([...matched]);
    setActiveSearchFilterTag({
      query: '',
      category: activeKeys.join(', '),
      label: activeKeys.length === 1 ? activeKeys[0] : `${activeKeys.length} Categories (${matched.length} locations)`
    });
    showToast(`${matched.length} locations plotted across ${activeKeys.length} selected categor${activeKeys.length === 1 ? 'y' : 'ies'}`);
  }, [selectedSubcategories]);

  const handleFeatureClick = (feature) => {
    if (!feature) return;

    // Clear previous route / navigation when selecting a new feature
    setActiveRoute(null);
    setIsNavigating(false);
    setNavStepIndex(0);

    // 1. Highlight the selected feature on the map and open Detailed Information sidebar
    setSelectedLocation({ ...feature, locateTrigger: Date.now() });
    setActiveDetailTab('overview');
    setIsDetailsMinimized(false);

    // If feature belongs to a drawn area query or lastDrawnQuery exists, show the area on the map
    const areaToRestore = feature.drawnArea || lastDrawnQuery;
    if (areaToRestore) {
      setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
    }

    // 2. Close AI panel on map click so Detailed Information shows full sidebar
    setAiState('button');
    setIsAiClosing(false);

    addLog('Map Feature Click', `Selected feature '${feature.title}' (${feature.category || 'GIS Record'})`, 'info');
    showToast(`Inspecting: ${feature.title}`);
  };

  const handleCalculateRoute = async (targetFeature = selectedLocation, mode = travelMode, reversed = false) => {
    if (!targetFeature || targetFeature.lat == null || targetFeature.lon == null) {
      return null;
    }

    const featureLat = parseFloat(targetFeature.lat);
    const featureLon = parseFloat(targetFeature.lon);
    if (isNaN(featureLat) || isNaN(featureLon)) return null;

    let userCoords = realUserLocation;
    if (!userCoords && typeof navigator !== 'undefined' && navigator.geolocation) {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 3000, enableHighAccuracy: true });
        });
        userCoords = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          name: lang === 'ar' ? 'موقعي الحالي' : 'My Current Location'
        };
        setRealUserLocation(userCoords);
        setLocationPermissionDenied(false);
      } catch (err) {
        console.warn('[GeoVision] Geolocation prompt during route:', err);
        setLocationPermissionDenied(true);
      }
    }

    // Default Abu Dhabi fallback coordinates (Corniche / Downtown) so routing is never blocked
    if (!userCoords || typeof userCoords.lat !== 'number' || typeof userCoords.lon !== 'number') {
      userCoords = {
        lat: 24.4539,
        lon: 54.3773,
        name: lang === 'ar' ? 'موقعي الحالي (أبوظبي)' : 'My Current Location (Abu Dhabi)'
      };
    }

    const destObj = {
      lat: featureLat,
      lon: featureLon,
      title: lang === 'ar' ? (targetFeature.arabicTitle || getArabicTitle(targetFeature.title)) : targetFeature.title,
      address: lang === 'ar' ? (targetFeature.arabicAddress || targetFeature.address || 'أبوظبي، الإمارات') : (targetFeature.address || 'Abu Dhabi, UAE')
    };

    const effectiveOrigin = reversed ? destObj : userCoords;
    const effectiveDest = reversed ? userCoords : destObj;

    setIsRouteCalculating(true);
    try {
      const res = await calculateRoadRoute({
        origin: effectiveOrigin,
        destination: effectiveDest,
        mode: mode,
        lang: lang
      });

      setActiveRoute(res);
      addLog('Road Routing', `[${mode.toUpperCase()}] Route: ${res.distanceText || `${res.distanceKm} km`} (${res.durationText || 'Est.'})`, 'success');
      return res;
    } catch (err) {
      console.error('[GeoVision] Route calculation error:', err);
      return null;
    } finally {
      setIsRouteCalculating(false);
    }
  };

  // Automatically manage route state when user navigates to/from the Route tab or switches selected feature
  useEffect(() => {
    if (activeDetailTab === 'route' && selectedLocation && selectedLocation.lat != null && selectedLocation.lon != null) {
      handleCalculateRoute(selectedLocation, travelMode, false);
    } else {
      // Clear route when not on the route tab or when no feature is selected
      setActiveRoute(null);
      setIsNavigating(false);
      setNavStepIndex(0);
    }
  }, [activeDetailTab, selectedLocation?.id, travelMode]);

  const renderManeuverIcon = (step, size = 16) => {
    if (!step) return <Navigation size={size} />;
    const type = (step.type || '').toLowerCase();
    const modifier = (step.modifier || '').toLowerCase();

    if (type === 'arrive') return <Flag size={size} />;
    if (type === 'roundabout' || type === 'rotary') return <RotateCw size={size} />;
    if (modifier.includes('right')) return <CornerUpRight size={size} />;
    if (modifier.includes('left')) return <CornerUpLeft size={size} />;
    if (modifier.includes('uturn')) return <RotateCw size={size} />;
    return <ArrowUp size={size} />;
  };

  const renderRouteDetailsPane = (feature) => {
    if (!feature) return null;
    const destName = lang === 'ar' ? (feature.arabicTitle || getArabicTitle(feature.title)) : feature.title;
    const destAddress = lang === 'ar' ? (feature.arabicAddress || feature.address || 'أبوظبي، الإمارات العربية المتحدة') : (feature.address || 'Abu Dhabi, UAE');
    const hasUserLoc = realUserLocation && typeof realUserLocation.lat === 'number' && typeof realUserLocation.lon === 'number';

    const handleDetectLocation = (e) => {
      if (e) e.stopPropagation();
      if (typeof navigator !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const coords = {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
              name: lang === 'ar' ? 'موقعي الحالي' : 'My Current Location'
            };
            setRealUserLocation(coords);
            setLocationPermissionDenied(false);
            handleCalculateRoute(feature, travelMode, false);
          },
          (err) => {
            console.warn('[GeoVision] Geolocation detection error:', err);
            setLocationPermissionDenied(true);
          },
          { timeout: 10000, enableHighAccuracy: true }
        );
      }
    };

    const handleStartNavigation = async (e) => {
      if (e) e.stopPropagation();
      if (isNavigating) {
        setIsNavigating(false);
        setNavStepIndex(0);
        setActiveRoute(null);
        showToast(lang === 'ar' ? 'تم إنهاء الملاحة وإخفاء المسار' : 'Live navigation ended');
      } else {
        setSelectedLocation({ ...feature, locateTrigger: Date.now() });
        let routeData = activeRoute;
        const needsCalc = !routeData || !routeData.coordinates || routeData.coordinates.length < 2 ||
          (routeData.destination && (Math.abs(routeData.destination.lat - parseFloat(feature.lat)) > 0.001 || Math.abs(routeData.destination.lon - parseFloat(feature.lon)) > 0.001));

        if (needsCalc) {
          routeData = await handleCalculateRoute(feature, travelMode, false);
        }

        setIsNavigating(true);
        setNavStepIndex(0);

        // Auto-fit route overview so user sees full direction immediately
        setTimeout(() => {
          if (window.__geoVisionFitRouteOverview) {
            window.__geoVisionFitRouteOverview();
          }
        }, 150);

        showToast(lang === 'ar' ? `بدء الملاحة المباشرة نحو ${destName}` : `Starting live navigation to ${destName}`);
      }
    };

    const handleModeSelect = (modeId) => {
      setTravelMode(modeId);
      handleCalculateRoute(feature, modeId, false);
    };

    const currentRouteObj = activeRoute;
    const isUnsupported = currentRouteObj && currentRouteObj.supported === false;

    return (
      <div className="route-details-pane" onClick={(e) => e.stopPropagation()}>
        {/* Route Origin - Destination Card (Clean, without swap button) */}
        <div className="route-journey-card">
          {/* Origin */}
          <div className="route-stop-row origin-stop">
            <div className="route-stop-indicator">
              <div className="route-stop-dot origin-dot" />
              <div className="route-connector-line" />
            </div>
            <div className="route-stop-content">
              <div className="route-stop-role">
                <span className="route-role-label">{lang === 'ar' ? 'من: ' : 'From: '}</span>
                <span className="route-role-dest-name">
                  {t.fromMyLocation || (lang === 'ar' ? 'موقعي الحالي' : 'My Current Location')}
                </span>
              </div>
              <div className="route-stop-sub">
                {hasUserLoc ? (
                  <span>
                    {lang === 'ar' ? 'تم تحديد موقعك بدقة' : 'Current device location'} ({realUserLocation.lat.toFixed(4)}, {realUserLocation.lon.toFixed(4)})
                  </span>
                ) : locationPermissionDenied ? (
                  <span className="route-loc-warning">
                    {lang === 'ar' ? 'يرجى تمكين إذن الموقع في المتصفح' : 'Location permission needed in browser'}
                  </span>
                ) : (
                  <button
                    type="button"
                    className="route-detect-loc-btn"
                    onClick={handleDetectLocation}
                  >
                    <Navigation size={12} />
                    <span>{t.detectMyLocation || (lang === 'ar' ? 'تحديد موقعي الآن' : 'Detect My Location')}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Destination */}
          <div className="route-stop-row dest-stop">
            <div className="route-stop-indicator">
              <MapPin size={16} className="route-pin-icon" />
            </div>
            <div className="route-stop-content">
              <div className="route-stop-role">
                <span className="route-role-label">{lang === 'ar' ? 'إلى: ' : 'To: '}</span>
                <span className="route-role-dest-name">{destName}</span>
              </div>
              <div className="route-stop-sub dest-address">
                {destAddress}
              </div>
              {feature.lat != null && feature.lon != null && (
                <div className="route-stop-coords">
                  {Number(feature.lat).toFixed(4)}, {Number(feature.lon).toFixed(4)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Travel Mode Selector: Single Row Horizontal Scrolling Way */}
        <div className="route-travel-mode-section">
          <div className="route-travel-mode-label">
            {t.travelMode || (lang === 'ar' ? 'وسيلة التنقل' : 'Travel Mode')}
          </div>
          <div className="route-mode-chips-row">
            {TRAVEL_MODES.map((modeItem) => {
              const isActive = travelMode === modeItem.id;
              const modeLabel = lang === 'ar' ? modeItem.labelAr : modeItem.labelEn;
              return (
                <button
                  key={modeItem.id}
                  type="button"
                  className={`route-mode-chip-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleModeSelect(modeItem.id)}
                  title={`${modeLabel}${!modeItem.supported ? ` (${t.modeUnavailable || 'Unavailable'})` : ''}`}
                >
                  <span className="route-mode-icon">
                    {modeItem.id === 'walk' ? <Footprints size={14} /> :
                     modeItem.id === 'cycle' ? <Bike size={14} /> :
                     modeItem.id === 'bike' ? <Zap size={14} /> :
                     modeItem.id === 'transit' ? <Bus size={14} /> :
                     modeItem.id === 'train' ? <Train size={14} /> :
                     <Car size={14} />}
                  </span>
                  <span className="route-mode-title">{modeLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Route Metrics / Status Section */}
        {isRouteCalculating ? (
          <div className="route-calculating-box">
            <Loader2 size={16} className="route-spinner" />
            <span>{t.calculatingRoute || (lang === 'ar' ? 'جاري حساب المسار المباشر...' : 'Calculating road route...')}</span>
          </div>
        ) : isUnsupported ? (
          <div className="route-unsupported-box">
            <Info size={15} className="route-unsupported-icon" />
            <div className="route-unsupported-text">
              {currentRouteObj.unsupportedMessage}
            </div>
          </div>
        ) : currentRouteObj && currentRouteObj.success ? (
          <div className="route-metrics-summary-card">
            <div className="route-metric-item">
              <div className="route-metric-label">{t.distance || (lang === 'ar' ? 'المسافة' : 'Distance')}</div>
              <div className="route-metric-value">{currentRouteObj.distanceText}</div>
            </div>
            <div className="route-metric-divider" />
            <div className="route-metric-item">
              <div className="route-metric-label">{t.estimatedTravelTime || (lang === 'ar' ? 'الوقت التقديري للوصول' : 'Estimated Travel Time')}</div>
              <div className="route-metric-value highlight">{currentRouteObj.durationText}</div>
            </div>
          </div>
        ) : null}

        {/* Turn-by-Turn Guidance Steps when Live In-App Navigation is Active */}
        {isNavigating && currentRouteObj && currentRouteObj.steps && currentRouteObj.steps.length > 0 && (
          <div className="route-navigation-steps-panel">
            <div className="route-nav-steps-header">
              <div className="route-nav-steps-title">
                <Navigation size={13} className="route-nav-live-icon" />
                <span>{t.inAppNavigation || (lang === 'ar' ? 'الملاحة المباشرة' : 'Live Navigation')}</span>
              </div>
              <span className="route-nav-steps-counter">
                {t.step || 'Step'} {navStepIndex + 1} {t.of || 'of'} {currentRouteObj.steps.length}
              </span>
            </div>
            <div className="route-nav-steps-list">
              {currentRouteObj.steps.map((step, sIdx) => {
                const isCurrent = navStepIndex === sIdx;
                return (
                  <div
                    key={sIdx}
                    className={`route-nav-step-item ${isCurrent ? 'active' : ''}`}
                    onClick={() => setNavStepIndex(sIdx)}
                  >
                    <div className="route-nav-step-idx">
                      {renderManeuverIcon(step, 13)}
                    </div>
                    <div className="route-nav-step-body">
                      <div className="route-nav-step-inst">
                        {lang === 'ar' ? step.instructionAr : step.instruction}
                      </div>
                      {step.distanceText && (
                        <div className="route-nav-step-dist">{step.distanceText}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation Action Buttons (In-App & Google Maps) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
          {/* In-App Live Navigation Action Button */}
          <button
            type="button"
            className={`route-start-navigation-btn ${isNavigating ? 'exit-mode' : ''}`}
            onClick={handleStartNavigation}
            title={isNavigating ? (lang === 'ar' ? 'إنهاء الملاحة المباشرة' : 'Exit live navigation') : (lang === 'ar' ? 'بدء الملاحة الحية على الخريطة' : 'Start in-app live navigation on map')}
          >
            {isNavigating ? (
              <>
                <X size={16} strokeWidth={2.4} />
                <span>{t.exitNavigation || (lang === 'ar' ? 'إنهاء الملاحة' : 'Exit Navigation')}</span>
              </>
            ) : (
              <>
                <Navigation size={16} strokeWidth={2.4} />
                <span>{t.startNavigation || (lang === 'ar' ? 'بدء الملاحة' : 'Start Navigation')}</span>
              </>
            )}
          </button>

          {/* Google Navigation Button */}
          <button
            type="button"
            className="route-gmaps-external-btn"
            onClick={(e) => {
              if (e) e.stopPropagation();
              const originCoords = realUserLocation && !isNaN(parseFloat(realUserLocation.lat)) && !isNaN(parseFloat(realUserLocation.lon))
                ? realUserLocation
                : (activeRoute && activeRoute.origin && !isNaN(parseFloat(activeRoute.origin.lat)) ? activeRoute.origin : null);
              
              const gmapsUrl = getStartNavigationUrl({
                origin: originCoords,
                destination: { lat: parseFloat(feature.lat), lon: parseFloat(feature.lon) },
                mode: travelMode
              });
              window.open(gmapsUrl, '_blank', 'noopener,noreferrer');
            }}
            title={lang === 'ar' ? 'فتح الاتجاهات والملاحة في خرائط Google' : 'Open directions and navigation in Google Maps'}
          >
            <ExternalLink size={15} strokeWidth={2.2} />
            <span>{t.googleNavigation || (lang === 'ar' ? 'ملاحة Google Maps' : 'Google Navigation')}</span>
          </button>
        </div>
      </div>
    );
  };

  const handleSearchSubmit = (query = searchQuery) => {
    const q = (query || '').trim();
    setSearchQuery('');
    setAiSearchQuery('');
    handleUnifiedSearch({ query: q });
  };

  // Initialize with theme and first logs
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    addLog('System', `GeoVision initialized. Ready in ${theme.toUpperCase()} mode.`, 'success');
    addLog('BIM', `WebScene portal layers loaded. Defaulting to: ${activeProject.name}`, 'info');
  }, []);

  // Sync theme to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Log on project change
  const handleProjectChange = (e) => {
    const newId = e.target.value;
    setSelectedProjectId(newId);
    const proj = PROJECTS.find(p => p.id === newId);
    setSelectedBuilding(null);
    setSelectedLevel('All');
    setClickPoints([]);
    setVolumeResult(null);
    addLog('System', `Switched active WebScene to [${proj.name}]`, 'info');
    addLog('BIM', `Loaded Building Scene Layer with ${proj.buildingsCount} components.`, 'success');
    showToast(`Project loaded: ${proj.name}`);
  };

  const addLog = (category, message, type = 'system') => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [
      { time, category, message, type },
      ...prev.slice(0, 49) // Keep last 50 logs
    ]);
  };


  const toggleLayer = (layerKey) => {
    setLayers(prev => {
      const next = { ...prev, [layerKey]: !prev[layerKey] };
      addLog('Layer', `${layerKey.replace(/([A-Z])/g, ' $1')} visibility set to ${next[layerKey] ? 'VISIBLE' : 'HIDDEN'}`, 'system');
      return next;
    });
  };

  // Convert map SVG coordinates back to geospatial values
  const getGeoValues = (svgX, svgY) => {
    const scaleX = 0.0001;
    const scaleY = -0.00008;

    // Base coordinate on the center of the viewport (roughly 250, 200)
    const lat = activeProject.lat + (svgY - 200) * scaleY;
    const lon = activeProject.lon + (svgX - 250) * scaleX;

    // Simulate elevation calculation based on proximity to topographical features
    // Uses simple wave equation centered at coordinate values
    const distCenter = Math.sqrt(Math.pow(svgX - 250, 2) + Math.pow(svgY - 200, 2));
    const normalizedDist = Math.min(distCenter / 300, 1);
    const elevRange = activeProject.maxElevation - activeProject.minElevation;
    // Elev is highest in center, lowest at edges
    const elevation = activeProject.minElevation + (1 - normalizedDist) * elevRange + Math.sin(svgX / 20) * 3;

    return {
      lat: parseFloat(lat.toFixed(6)),
      lon: parseFloat(lon.toFixed(6)),
      elevation: parseFloat(elevation.toFixed(2))
    };
  };

  const handleMouseMove = (e) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Keep within bounds
    const svgX = Math.max(0, Math.min(x, 500));
    const svgY = Math.max(0, Math.min(y, 400));

    const geo = getGeoValues(svgX, svgY);
    setHoveredCoords(geo);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMapClick = (e) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const svgX = Math.max(0, Math.min(x, 500));
    const svgY = Math.max(0, Math.min(y, 400));

    const geo = getGeoValues(svgX, svgY);

    if (volumeToolActive) {
      if (clickPoints.length >= 2) {
        // Reset and start over with point A
        const pA = { x: svgX, y: svgY, ...geo };
        setClickPoints([pA]);
        setVolumeResult(null);
        addLog('Analysis', `Volume Analysis: Point A registered at Lat ${pA.lat}, Lon ${pA.lon}`, 'info');
      } else if (clickPoints.length === 0) {
        // Set point A
        const pA = { x: svgX, y: svgY, ...geo };
        setClickPoints([pA]);
        addLog('Analysis', `Volume Analysis: Point A registered at Lat ${pA.lat}, Lon ${pA.lon}`, 'info');
      } else if (clickPoints.length === 1) {
        // Set point B and calculate
        const pB = { x: svgX, y: svgY, ...geo };
        const pA = clickPoints[0];

        // Calculate distance and volume
        const dx = pB.x - pA.x;
        const dy = pB.y - pA.y;
        const distancePx = Math.sqrt(dx * dx + dy * dy);
        const distanceM = parseFloat((distancePx * 0.45).toFixed(2)); // scale factor

        // Calculate Cut/Fill (never zero!)
        const avgElev = (pA.elevation + pB.elevation) / 2;
        const elevDiff = Math.abs(pA.elevation - pB.elevation);

        // Dynamic formula for Cut and Fill
        const baseArea = distanceM * 8.5; // width * path length
        const cutVol = parseFloat((baseArea * (elevDiff * 0.4 + 1.2)).toFixed(2));
        const fillVol = parseFloat((baseArea * (avgElev * 0.05 + 0.5)).toFixed(2));

        setClickPoints([pA, pB]);
        setVolumeResult({
          distance: distanceM,
          cutVolume: cutVol,
          fillVolume: fillVol,
          netVolume: parseFloat((cutVol - fillVol).toFixed(2))
        });

        addLog('Analysis', `Volume Analysis: Point B registered at Lat ${pB.lat}, Lon ${pB.lon}`, 'info');
        addLog('Analysis', `Volume Calculation Complete. Cut: ${cutVol} m³, Fill: ${fillVol} m³`, 'success');
        showToast("Volume calculation completed!");
      }
    } else {
      // Building selection is now handled by LeafletMap click handlers
      // No SVG click detection needed
    }
  };

  const toggleVolumeTool = () => {
    const nextState = !volumeToolActive;
    setVolumeToolActive(nextState);
    setClickPoints([]);
    setVolumeResult(null);
    if (nextState) {
      addLog('System', "Interactive Volume Analysis Tool activated. Click two points on the map.", 'warning');
      showToast("Volume Tool Active: Click two points");
    } else {
      addLog('System', "Interactive Volume Analysis Tool deactivated.", 'system');
    }
  };

  const handleRefreshRegistry = () => {
    addLog('System', "Querying project registry proxy...", 'info');
    setTimeout(() => {
      addLog('System', "Registry connection established. Metadata synchronized.", 'success');
      showToast("Registry Synchronized Successfully");
    }, 600);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  if (isHelpOpen) {
    return (
      <>
        <HelpSupportPage
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
          isHelpOpen={isHelpOpen}
          setIsHelpOpen={setIsHelpOpen}
          isFeedbackOpen={isFeedbackOpen}
          setIsFeedbackOpen={setIsFeedbackOpen}
          currentUser={currentUser}
          t={t}
          handleSearchSubmit={handleSearchSubmit}
          handleUnifiedSearch={handleUnifiedSearch}
          showToast={showToast}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveTab={setActiveTab}
          setAiPanelSubView={setAiPanelSubView}
          setIsAISearchBarOpen={setIsAISearchBarOpen}
          setIsAiMinimized={setIsAiMinimized}
        />
        <FloatingFeedbackButton
          onClick={() => setIsFeedbackOpen(true)}
          lang={lang}
          theme={theme}
          isFeedbackOpen={isFeedbackOpen}
        />
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(false)}
          lang={lang}
          theme={theme}
          showToast={showToast}
          currentUser={currentUser}
        />
      </>
    );
  }

  if (!showMap) {
    if (isAboutUsOpen) {
      return (
        <>
          <AboutUsPage
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
            isHelpOpen={isHelpOpen}
            setIsHelpOpen={setIsHelpOpen}
            isFeedbackOpen={isFeedbackOpen}
            setIsFeedbackOpen={setIsFeedbackOpen}
            currentUser={currentUser}
            t={t}
            handleSearchSubmit={handleSearchSubmit}
            showToast={showToast}
            setIsSidebarOpen={setIsSidebarOpen}
            setActiveTab={setActiveTab}
            setAiPanelSubView={setAiPanelSubView}
            setIsAISearchBarOpen={setIsAISearchBarOpen}
            setIsAiMinimized={setIsAiMinimized}
          />
          <FloatingFeedbackButton
            onClick={() => setIsFeedbackOpen(true)}
            lang={lang}
            theme={theme}
            isFeedbackOpen={isFeedbackOpen}
          />
          <FeedbackModal
            isOpen={isFeedbackOpen}
            onClose={() => setIsFeedbackOpen(false)}
            lang={lang}
            theme={theme}
            showToast={showToast}
            currentUser={currentUser}
          />
        </>
      );
    }

    return (
      <>
        <LandingPage
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
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          isGuest={isGuest}
          setIsGuest={setIsGuest}
          isSignInOpen={isSignInOpen}
          setIsSignInOpen={setIsSignInOpen}
          authState={authState}
          setAuthState={setAuthState}
          isAboutUsOpen={isAboutUsOpen}
          setIsAboutUsOpen={setIsAboutUsOpen}
          isHelpOpen={isHelpOpen}
          setIsHelpOpen={setIsHelpOpen}
          isFeedbackOpen={isFeedbackOpen}
          setIsFeedbackOpen={setIsFeedbackOpen}
          t={t}
          handleSearchSubmit={handleSearchSubmit}
          handleUnifiedSearch={handleUnifiedSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categorySearchQuery={categorySearchQuery}
          setCategorySearchQuery={setCategorySearchQuery}
          expandedCategory={expandedCategory}
          setExpandedCategory={setExpandedCategory}
          selectedSubcategories={selectedSubcategories}
          setSelectedSubcategories={setSelectedSubcategories}
          showToast={showToast}
          toastMessage={toastMessage}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveTab={setActiveTab}
          setAiPanelSubView={setAiPanelSubView}
          setIsAISearchBarOpen={setIsAISearchBarOpen}
          setIsAiMinimized={setIsAiMinimized}
          searchHistory={searchHistory}
        />
        <FloatingFeedbackButton
          onClick={() => setIsFeedbackOpen(true)}
          lang={lang}
          theme={theme}
          isFeedbackOpen={isFeedbackOpen}
        />
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(false)}
          lang={lang}
          theme={theme}
          showToast={showToast}
          currentUser={currentUser}
        />
      </>
    );
  }

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-theme dark' : 'light-theme'}`} data-theme={theme}>

      {/* HEADER SECTION (SHARED WITH HOME PAGE) */}
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
        isHelpOpen={isHelpOpen}
        setIsHelpOpen={setIsHelpOpen}
        isFeedbackOpen={isFeedbackOpen}
        setIsFeedbackOpen={setIsFeedbackOpen}
        currentUser={currentUser}
        t={t}
        handleSearchSubmit={handleSearchSubmit}
        showToast={showToast}
        setIsSidebarOpen={setIsSidebarOpen}
        setActiveTab={setActiveTab}
        setAiPanelSubView={setAiPanelSubView}
        setIsAISearchBarOpen={setIsAISearchBarOpen}
        setIsAiMinimized={setIsAiMinimized}
      />

      {/* GLOBAL SVG CLIP PATH DEFINITIONS ALWAYS MOUNTED FOR VERCEL / WEBKIT COMPATIBILITY */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="panelCardRoundedNotchClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.030 Q 0,0 0.04,0 L 0.28,0 Q 0.30,0 0.305,0.003 L 0.33,0.013 Q 0.34,0.015 0.35,0.015 L 0.65,0.015 Q 0.66,0.015 0.67,0.013 L 0.695,0.003 Q 0.70,0 0.72,0 L 0.96,0 Q 1,0 1,0.030 L 1,0.970 Q 1,1 0.96,1 L 0.72,1 Q 0.70,1 0.695,0.997 L 0.67,0.987 Q 0.66,0.985 0.65,0.985 L 0.35,0.985 Q 0.34,0.985 0.33,0.987 L 0.305,0.997 Q 0.30,1 0.28,1 L 0.04,1 Q 0,1 0,0.970 Z" />
          </clipPath>
          <clipPath id="categoryDrawerTopBottomNotchClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.030 Q 0,0 0.04,0 L 0.28,0 Q 0.30,0 0.305,0.003 L 0.33,0.013 Q 0.34,0.015 0.35,0.015 L 0.65,0.015 Q 0.66,0.015 0.67,0.013 L 0.695,0.003 Q 0.70,0 0.72,0 L 0.96,0 Q 1,0 1,0.030 L 1,0.970 Q 1,1 0.96,1 L 0.72,1 Q 0.70,1 0.695,0.997 L 0.67,0.987 Q 0.66,0.985 0.65,0.985 L 0.35,0.985 Q 0.34,0.985 0.33,0.987 L 0.305,0.997 Q 0.30,1 0.28,1 L 0.04,1 Q 0,1 0,0.970 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast-notification">
          <Info size={16} style={{ color: 'var(--accent-cyan)' }} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MAIN WORKSPACE */}
      <main className="main-content">

        {/* LEFT SIDEBAR DRAWER COMPLETELY REMOVED - MAP EXTENDS ACROSS FULL VIEWPORT */}

        {/* MAP VIEWPORT SECTION (MATCHING REFERENCE UI) */}
        <section className="map-viewport-container">

          {/* MAIN MAP WORKSPACE (OCCUPIES REMAINING AREA NEXT TO RESIZABLE AI PANEL) */}
          <div className="map-workspace-area">


          {/* FLOATING BOTTOM BAR: MAP TOOLS TOGGLE, ZOOM CONTROLS, PRINT, HOME, COORDINATES & GRAPHIC SCALE BAR */}
          <div
            className="map-controls-bottom-bar"
            style={{
              position: 'absolute',
              bottom: '24px',
              left: lang === 'ar' ? 'auto' : '20px',
              right: lang === 'ar' ? '20px' : 'auto',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'flex-end',
              gap: '6px',
              transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* 1. LEFT VERTICAL STACK: HOME -> ZOOM IN/OUT -> MAP TOOLS */}
            <div
              className="map-left-vertical-stack"
              style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                gap: '8px',
                width: '36px',
                flexShrink: 0
              }}
            >
              {/* Bottom: Map Tools Toggle Pill Card */}
              <button
                className={`map-tools-bottom-toggle-card ${isMapToolsDockOpen ? 'active' : ''}`}
                title={isMapToolsDockOpen ? (lang === 'ar' ? 'إغلاق أدوات الخريطة' : 'Collapse Map Tools') : (lang === 'ar' ? 'عرض أدوات الخريطة' : 'Show Map Tools')}
                onClick={() => {
                  if (isMapToolsDockOpen) {
                    setActiveLeftPopover(null);
                    setIsMapToolsDockOpen(false);
                  } else {
                    setIsMapToolsDockOpen(true);
                  }
                }}
              >
                {isMapToolsDockOpen ? (
                  <X size={16} color="#FFFFFF" strokeWidth={2.4} />
                ) : (
                  <GeoVisionGradientIcon src={categorySvg} size={16} alt="Map Tools" />
                )}
              </button>

              {/* Middle: Expanded Vertical Tools Dock */}
              {isMapToolsDockOpen && (
                <div className="map-tools-vertical-dock">
                  {/* 1. Layers / All Categories */}
                  <button
                    className={`map-tool-dock-btn ${activeLeftPopover === 'layers' ? 'active' : ''}`}
                    title={lang === 'ar' ? 'جميع الفئات' : 'All Categories'}
                    onClick={() => {
                      setActiveLeftPopover(prev => prev === 'layers' ? null : 'layers');
                    }}
                  >
                    <Layers size={17} strokeWidth={2.2} />
                  </button>

                  {/* 2. Draw */}
                  <button
                    className={`map-tool-dock-btn ${activeLeftPopover === 'draw' ? 'active' : ''}`}
                    title={lang === 'ar' ? 'القياس والرسم' : 'Measurement & Draw'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'draw' ? null : 'draw')}
                  >
                    <GeoVisionGradientIcon src={drawSvg} size={16} alt="Draw" />
                  </button>

                  {/* 3. Basemap */}
                  <button
                    className={`map-tool-dock-btn ${activeLeftPopover === 'basemap' ? 'active' : ''}`}
                    title={lang === 'ar' ? 'معرض خرائط الأساس' : 'Basemap Gallery'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'basemap' ? null : 'basemap')}
                  >
                    <GeoVisionGradientIcon src={basemapSvg} size={16} alt="Basemap" />
                  </button>

                  {/* 4. Legend */}
                  <button
                    className={`map-tool-dock-btn ${activeLeftPopover === 'legend' ? 'active' : ''}`}
                    title={lang === 'ar' ? 'مفتاح الخريطة' : 'Map Legend'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend')}
                  >
                    <GeoVisionGradientIcon src={legendSvg} size={16} alt="Legend" />
                  </button>

                  {/* 5. Locate */}
                  <button
                    className={`map-tool-dock-btn ${isLocating ? 'active is-locating-pulse' : ''}`}
                    title={lang === 'ar' ? 'موقعي الجغرافي' : 'My Location'}
                    onClick={() => handleLocateUser()}
                    aria-label="Locate User"
                  >
                    <GeoVisionGradientIcon
                      src={navigationSvg}
                      size={16}
                      alt="Locate"
                      className={isLocating ? 'geovision-locate-spin' : ''}
                    />
                  </button>

                  {/* 6. Compass */}
                  <button
                    className={`map-tool-dock-btn ${isOrientingCompass ? 'active' : ''}`}
                    title={lang === 'ar' ? 'البوصلة / توجيه للشمال (0°)' : 'Compass / Orient North (0°)'}
                    onClick={handleOrientNorth}
                    aria-label="Compass Orient North"
                  >
                    <GeoVisionGradientIcon
                      src={compassSvg}
                      size={16}
                      alt="Compass"
                      className={isOrientingCompass ? 'geovision-compass-spin' : ''}
                    />
                  </button>
                </div>
              )}

              {/* Zoom In / Zoom Out Segmented Group (Placed Above Map Tool) */}
              <div className="map-zoom-segmented-group-vertical">
                <button
                  className="map-glass-icon-btn-segmented"
                  title={lang === 'ar' ? 'تكبير' : "Zoom In"}
                  onClick={() => {
                    if (mapInstanceRef.current) mapInstanceRef.current.zoomIn();
                    showToast(lang === 'ar' ? "تم التكبير" : "Zoomed In");
                  }}
                >
                  <Plus size={16} color="#004B87" strokeWidth={2.2} />
                </button>
                <button
                  className="map-glass-icon-btn-segmented"
                  title={lang === 'ar' ? 'تصغير' : "Zoom Out"}
                  onClick={() => {
                    if (mapInstanceRef.current) mapInstanceRef.current.zoomOut();
                    showToast(lang === 'ar' ? "تم التصغير" : "Zoomed Out");
                  }}
                >
                  <Minus size={16} color="#004B87" strokeWidth={2.2} />
                </button>
              </div>

              {/* Top: Home View Button (Placed Above Zoom In and Zoom Out) */}
              <button
                className="map-glass-icon-btn"
                title={lang === 'ar' ? 'العرض الافتراضي' : 'Home View'}
                onClick={() => {
                  if (mapInstanceRef.current) mapInstanceRef.current.flyTo([24.4539, 54.3773], 12);
                  showToast(lang === 'ar' ? 'إعادة التعيين إلى العرض الافتراضي لأبوظبي' : 'Reset to Abu Dhabi Home View');
                }}
              >
                <GeoVisionGradientIcon src={homeSvg} size={16} alt="Home" />
              </button>
            </div>

            {/* Print & PDF Export (Beside Map Tool in Bottom Row, with Filled Icon) */}
            <button
              className="map-glass-icon-btn"
              title={lang === 'ar' ? 'طباعة وتصدير الخريطة كملف PDF' : "Print & Export PDF"}
              onClick={() => openPrintDialog({ content: selectedLocation ? 'details' : (activeSearchResults.length > 0 ? 'results' : 'map') })}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
            </button>

            {/* Live Coordinates Pill */}
            <div
              className="map-glass-pill-static map-coordinates-pill"
              title={lang === 'ar' ? 'الإحداثيات' : 'Coordinates'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 14px',
                height: '36px',
                borderRadius: '10px',
                background: theme === 'dark' ? '#0B192C' : 'rgba(255, 255, 255, 0.96)',
                boxShadow: theme === 'dark' ? '0 4px 14px rgba(0, 0, 0, 0.50)' : '0 4px 14px -1px rgba(0, 32, 74, 0.16), 0 2px 6px 0 rgba(0, 32, 74, 0.10)',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(0, 43, 91, 0.13)',
                fontSize: '13px',
                fontWeight: '600',
                color: theme === 'dark' ? '#FFFFFF' : '#002B5B',
                whiteSpace: 'nowrap'
              }}
            >
              <span>
                {hoveredCoords && (hoveredCoords.lat !== 0 || hoveredCoords.lon !== 0)
                  ? `${Number(hoveredCoords.lat).toFixed(6)} ${Number(hoveredCoords.lon).toFixed(6)} ${lang === 'ar' ? 'درجة' : 'Degree'}`
                  : `24.453900 54.377300 ${lang === 'ar' ? 'درجة' : 'Degree'}`}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const textToCopy = hoveredCoords && (hoveredCoords.lat !== 0 || hoveredCoords.lon !== 0)
                      ? `${Number(hoveredCoords.lat).toFixed(6)} ${Number(hoveredCoords.lon).toFixed(6)} Degree`
                      : '24.453900 54.377300 Degree';
                    navigator.clipboard.writeText(textToCopy);
                    setIsCopiedCoords(true);
                    if (showToast) showToast(lang === 'ar' ? 'تم نسخ الإحداثيات إلى الحافظة' : 'Coordinates copied to clipboard');
                    setTimeout(() => setIsCopiedCoords(false), 2000);
                  }}
                  title={lang === 'ar' ? 'نسخ الإحداثيات' : 'Copy Coordinates'}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2px',
                    color: isCopiedCoords ? '#10B981' : (theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#004B87'),
                    transition: 'color 0.2s ease'
                  }}
                >
                  {isCopiedCoords ? <Check size={15} /> : <Copy size={15} color={theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#004B87'} />}
                </button>
              </div>
            </div>

            {/* Graphic GIS Scale Bar Pill */}
            <div
              className="map-glass-pill-static map-scale-pill"
              title={lang === 'ar' ? 'مقياس الرسم' : 'Scale Bar'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 16px',
                height: '36px',
                borderRadius: '10px',
                background: theme === 'dark' ? '#0B192C' : 'rgba(255, 255, 255, 0.96)',
                boxShadow: theme === 'dark' ? '0 4px 14px rgba(0, 0, 0, 0.50)' : '0 4px 14px -1px rgba(0, 32, 74, 0.16), 0 2px 6px 0 rgba(0, 32, 74, 0.10)',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(0, 43, 91, 0.13)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="130" height="11" viewBox="0 0 130 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="3.5" width="130" height="4" fill={theme === 'dark' ? 'rgba(255, 255, 255, 0.20)' : '#E2E8F0'} rx="1" />
                  <rect x="0" y="1.5" width="20" height="4" fill={theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#004B87'} rx="0.5" />
                  <rect x="20" y="5.5" width="20" height="4" fill={theme === 'dark' ? 'rgba(56, 189, 248, 0.70)' : '#002B5B'} rx="0.5" />
                  <rect x="40" y="1.5" width="30" height="4" fill={theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#004B87'} rx="0.5" />
                  <rect x="70" y="5.5" width="30" height="4" fill={theme === 'dark' ? 'rgba(56, 189, 248, 0.70)' : '#002B5B'} rx="0.5" />
                  <rect x="100" y="1.5" width="30" height="4" fill={theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#004B87'} rx="0.5" />
                  <line x1="0.5" y1="0.5" x2="0.5" y2="10.5" stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#002B5B'} strokeWidth="1.2" />
                  <line x1="129.5" y1="0.5" x2="129.5" y2="10.5" stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#002B5B'} strokeWidth="1.2" />
                </svg>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '130px',
                  fontSize: '8.5px',
                  fontWeight: '600',
                  color: theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#1E293B',
                  marginTop: '2px',
                  lineHeight: 1,
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150</span>
                  <span>200M</span>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING BASEMAP POPOVER CARD WITH 2 COLUMNS */}
          {activeLeftPopover === 'basemap' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card basemap-grid-popover"
              style={{
                bottom: '76px',
                left: lang === 'ar' ? 'auto' : '74px',
                right: lang === 'ar' ? '74px' : 'auto',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              <div className="popover-header">
                <h3>{lang === 'ar' ? 'خريطة الأساس' : 'Basemap'}</h3>
                <button
                  type="button"
                  className="popover-close-btn"
                  onClick={() => setActiveLeftPopover(null)}
                  title={lang === 'ar' ? 'إغلاق' : "Close"}
                  aria-label="Close Basemap"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="basemap-grid-2col">
                <button
                  className={`basemap-card-2col ${activeBasemap === 'dge_color' || activeBasemap === 'streets' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBasemap('dge_color');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "خريطة الأساس: أبوظبي SDI (DGE)" : "Basemap: Abu Dhabi SDI (DGE)");
                  }}
                >
                  <img src={basemapStreetsImg} alt="Abu Dhabi SDI" className="basemap-card-img" />
                  <span className="basemap-card-title">{lang === 'ar' ? 'أبوظبي SDI' : 'Abu Dhabi SDI'}</span>
                </button>

                <button
                  className={`basemap-card-2col ${activeBasemap === 'light' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBasemap('light');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "خريطة الأساس: رمادي فاتح" : "Basemap: Light Gray");
                  }}
                >
                  <img src={basemapLightGrayImg} alt="Light Gray" className="basemap-card-img" />
                  <span className="basemap-card-title">{lang === 'ar' ? 'رمادي فاتح' : 'Light Gray'}</span>
                </button>

                <button
                  className={`basemap-card-2col ${activeBasemap === 'satellite' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBasemap('satellite');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "خريطة الأساس: قمر صناعي" : "Basemap: Satellite");
                  }}
                >
                  <img src={basemapSatelliteImg} alt="Satellite" className="basemap-card-img" />
                  <span className="basemap-card-title">{lang === 'ar' ? 'قمر صناعي' : 'Satellite'}</span>
                </button>
              </div>
            </div>
          )}

          {/* FLOATING MEASUREMENT & DRAW POPOVER CARD */}
          {activeLeftPopover === 'draw' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card draw-popover-card"
              style={{
                bottom: '76px',
                left: lang === 'ar' ? 'auto' : '74px',
                right: lang === 'ar' ? '74px' : 'auto',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              <div className="popover-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 700, color: theme === 'dark' ? '#FFFFFF' : '#002B5B', margin: 0 }}>{lang === 'ar' ? 'القياس والرسم' : 'Measurement & Draw'}</h3>
                <button
                  type="button"
                  className="popover-close-btn"
                  onClick={() => setActiveLeftPopover(null)}
                  title={lang === 'ar' ? 'إغلاق' : "Close"}
                >
                  <X size={14} />
                </button>
              </div>
              <div className="popover-grid">
                <button
                  className={`popover-tile ${activeDrawTool === 'circle' ? 'active' : ''}`}
                  onClick={() => {
                    if (activeDrawTool === 'circle') {
                      setActiveDrawTool(null);
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "تم إيقاف أداة الرسم" : "Drawing mode deactivated");
                    } else {
                      setActiveDrawTool('circle');
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "أداة الدائرة: انقر على المركز ثم انقر على الحافة" : "Circle Tool: Click center, then click outer edge");
                    }
                  }}
                >
                  <Circle size={15} color={theme === 'dark' ? '#38BDF8' : '#004B87'} />
                  <span>{lang === 'ar' ? 'دائرة' : 'Circle'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'rectangle' ? 'active' : ''}`}
                  onClick={() => {
                    if (activeDrawTool === 'rectangle') {
                      setActiveDrawTool(null);
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "تم إيقاف أداة الرسم" : "Drawing mode deactivated");
                    } else {
                      setActiveDrawTool('rectangle');
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "أداة المستطيل: انقر على زاويتين متقابلتين" : "Rectangle Tool: Click two opposite corners");
                    }
                  }}
                >
                  <Square size={15} color={theme === 'dark' ? '#38BDF8' : '#004B87'} />
                  <span>{lang === 'ar' ? 'مستطيل' : 'Rectangle'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'polygon' ? 'active' : ''}`}
                  onClick={() => {
                    if (activeDrawTool === 'polygon') {
                      setActiveDrawTool(null);
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "تم إيقاف أداة الرسم" : "Drawing mode deactivated");
                    } else {
                      setActiveDrawTool('polygon');
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "أداة المضلع: انقر لتحديد النقاط، وانقر مزدوجاً للإنهاء" : "Polygon Tool: Click vertices, double-click to finish");
                    }
                  }}
                >
                  <Pentagon size={15} color={theme === 'dark' ? '#38BDF8' : '#004B87'} />
                  <span>{lang === 'ar' ? 'مضلع' : 'Polygon'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'click' ? 'active' : ''}`}
                  onClick={() => {
                    if (activeDrawTool === 'click') {
                      setActiveDrawTool(null);
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "تم إيقاف أداة الرسم" : "Drawing mode deactivated");
                    } else {
                      setActiveDrawTool('click');
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "علامة النقطة: انقر في أي مكان على الخريطة لإسقاط دبوس" : "Point Marker: Click anywhere on map to drop pin");
                    }
                  }}
                >
                  <MousePointer size={15} color={theme === 'dark' ? '#38BDF8' : '#004B87'} />
                  <span>{lang === 'ar' ? 'نقطة' : 'Click'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'line' ? 'active' : ''}`}
                  onClick={() => {
                    if (activeDrawTool === 'line') {
                      setActiveDrawTool(null);
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "تم إيقاف أداة الرسم" : "Drawing mode deactivated");
                    } else {
                      setActiveDrawTool('line');
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "قياس الخط: انقر لتحديد النقاط، وانقر مزدوجاً للإنهاء" : "Line Measure: Click points, double-click to finish");
                    }
                  }}
                >
                  <Minus size={15} color={theme === 'dark' ? '#38BDF8' : '#004B87'} style={{ transform: 'rotate(-45deg)' }} />
                  <span>{lang === 'ar' ? 'خط' : 'Line'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'square' ? 'active' : ''}`}
                  onClick={() => {
                    if (activeDrawTool === 'square') {
                      setActiveDrawTool(null);
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "تم إيقاف أداة الرسم" : "Drawing mode deactivated");
                    } else {
                      setActiveDrawTool('square');
                      setActiveLeftPopover(null);
                      showToast(lang === 'ar' ? "أداة المربع: انقر على زاويتين" : "Square Tool: Click two corners");
                    }
                  }}
                >
                  <Square size={15} color={theme === 'dark' ? '#38BDF8' : '#004B87'} />
                  <span>{lang === 'ar' ? 'مربع' : 'Square'}</span>
                </button>
              </div>

              {/* CLEAR DRAWINGS & MEASUREMENTS ACTION */}
              <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.10)' : '1px solid rgba(0, 43, 91, 0.08)' }}>
                <button
                  type="button"
                  className="popover-clear-draw-btn"
                  onClick={() => {
                    if (window.__geovision_clear_draw_query) {
                      window.__geovision_clear_draw_query();
                    }
                    handleClearDrawnArea();
                    setActiveDrawTool(null);
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "تم مسح جميع الرسومات والقياسات" : "All drawings and measurements cleared");
                  }}
                  title={lang === 'ar' ? 'مسح جميع الرسومات والنطاقات' : 'Clear all drawings and query areas'}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: theme === 'dark' ? '1px solid rgba(239, 68, 68, 0.40)' : '1px solid rgba(239, 68, 68, 0.25)',
                    background: theme === 'dark' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(254, 242, 242, 0.90)',
                    color: '#EF4444',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.18s ease'
                  }}
                >
                  <Trash2 size={13} color="#EF4444" />
                  <span>{lang === 'ar' ? 'مسح الرسومات' : 'Clear Drawings'}</span>
                </button>
              </div>
            </div>
          )}

          {/* ALL CATEGORIES FLOATING POPOVER PANEL (MATCHING REFERENCE UI) */}
          {activeLeftPopover === 'layers' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card categories-popover-panel"
              style={{
                bottom: '76px',
                left: lang === 'ar' ? 'auto' : '74px',
                right: lang === 'ar' ? '74px' : 'auto',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              {/* PANEL HEADER WITH TITLE, CLEAR ALL & CLOSE BUTTON */}
              <div className="categories-popover-header">
                <h3 className="categories-popover-title">
                  {t.allCategories || (lang === 'ar' ? 'جميع الفئات' : 'All Categories')}
                </h3>

                <div className="categories-popover-actions">
                  <button
                    type="button"
                    className={`categories-popover-clear-btn ${Object.keys(selectedSubcategories || {}).some(k => selectedSubcategories[k]) ? 'active' : 'disabled'}`}
                    onClick={handleClearAllCategories}
                    disabled={!Object.keys(selectedSubcategories || {}).some(k => selectedSubcategories[k])}
                    title={lang === 'ar' ? 'إلغاء تحديد كافة الفئات' : 'Clear all selected categories'}
                    aria-label={t.clearAll || (lang === 'ar' ? 'مسح الكل' : 'Clear All')}
                  >
                    <RotateCcw size={11} strokeWidth={2.4} />
                    <span>{t.clearAll || (lang === 'ar' ? 'مسح الكل' : 'Clear All')}</span>
                  </button>

                  <button
                    type="button"
                    className="categories-popover-close-btn"
                    onClick={() => setActiveLeftPopover(null)}
                    title={lang === 'ar' ? 'إغلاق اللوحة' : 'Close Categories Panel'}
                    aria-label="Close Categories Panel"
                  >
                    <X
                      size={16}
                      strokeWidth={2.4}
                    />
                  </button>
                </div>
              </div>

              {/* SEARCH INPUT BAR */}
              <div className="categories-popover-search-wrap">
                <input
                  type="text"
                  className="categories-popover-search-input"
                  placeholder={lang === 'ar' ? 'البحث في الفئات...' : 'Search categories...'}
                  value={categorySearchQuery}
                  onChange={(e) => setCategorySearchQuery(e.target.value)}
                  style={{
                    padding: lang === 'ar' ? '0 10px 0 34px' : '0 34px 0 10px',
                    textAlign: lang === 'ar' ? 'right' : 'left'
                  }}
                />
                <Search
                  size={15}
                  color="#94A3B8"
                  style={{
                    position: 'absolute',
                    right: lang === 'ar' ? 'auto' : '10px',
                    left: lang === 'ar' ? '10px' : 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* CATEGORIES ACCORDION SCROLLABLE LIST */}
              <div
                className="categories-popover-scroll"
                style={{
                  paddingRight: lang === 'ar' ? '0' : '2px',
                  paddingLeft: lang === 'ar' ? '2px' : '0'
                }}
              >
                {CATEGORY_TREE
                  .filter(cat => {
                    if (!categorySearchQuery) return true;
                    const q = categorySearchQuery.toLowerCase();
                    const nameEn = cat.name.toLowerCase();
                    const nameAr = (t.getCatName ? t.getCatName(cat.name) : '').toLowerCase();
                    return (
                      nameEn.includes(q) ||
                      nameAr.includes(q) ||
                      cat.subcategories.some(sub => {
                        const subEn = sub.toLowerCase();
                        const subAr = (t.getSubcatName ? t.getSubcatName(sub) : '').toLowerCase();
                        return subEn.includes(q) || subAr.includes(q);
                      })
                    );
                  })
                  .map(cat => {
                    const catColor = GIS_CATEGORY_COLORS[cat.name] || '#1D68F2';
                    const isExpanded = expandedCategory === cat.name || (!!categorySearchQuery && cat.subcategories.some(s => s.toLowerCase().includes(categorySearchQuery.toLowerCase())));
                    const badgeStyle = getCategoryBadgeStyle(cat.name, isExpanded, theme === 'dark');

                    return (
                      <div
                        key={cat.id}
                        className="categories-popover-card-item"
                        style={{
                          flexShrink: 0,
                          borderRadius: '8px',
                          border: isExpanded
                            ? (theme === 'dark' ? `1px solid ${catColor}70` : `1px solid ${catColor}50`)
                            : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(226, 232, 240, 0.85)'),
                          borderLeft: lang === 'ar' ? undefined : (isExpanded ? `3.5px solid ${catColor}` : undefined),
                          borderRight: lang === 'ar' ? (isExpanded ? `3.5px solid ${catColor}` : undefined) : undefined,
                          background: isExpanded
                            ? (theme === 'dark' ? `${catColor}18` : '#EFF6FF')
                            : (theme === 'dark' ? 'rgba(14, 38, 77, 0.50)' : '#FFFFFF'),
                          overflow: 'hidden',
                          boxShadow: isExpanded
                            ? (theme === 'dark' ? `0 2px 8px ${catColor}30` : '0 2px 8px rgba(29, 104, 242, 0.08)')
                            : 'none',
                          transition: 'all 0.2s ease',
                          marginBottom: '2px'
                        }}
                      >
                        {/* ACCORDION HEADER */}
                        <div
                          className="categories-popover-card-header"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: '32px',
                            minHeight: '32px',
                            padding: '0 8px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            flexShrink: 0
                          }}
                          onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                            {isExpanded ? (
                              <ChevronDown
                                size={13}
                                color={theme === 'dark' ? (catColor === '#1D68F2' ? '#60A5FA' : catColor) : catColor}
                                strokeWidth={2.4}
                              />
                            ) : (
                              lang === 'ar'
                                ? <ChevronLeft size={13} color={theme === 'dark' ? '#94A3B8' : '#64748B'} strokeWidth={2.4} />
                                : <ChevronRight size={13} color={theme === 'dark' ? '#94A3B8' : '#64748B'} strokeWidth={2.4} />
                            )}
                            <span
                              style={{
                                fontSize: '12.5px',
                                fontWeight: 600,
                                color: isExpanded
                                  ? (theme === 'dark' ? (catColor === '#1D68F2' ? '#60A5FA' : catColor) : catColor)
                                  : (theme === 'dark' ? '#F1F5F9' : '#0F172A')
                              }}
                            >
                              {t.getCatName ? t.getCatName(cat.name) : cat.name}
                            </span>
                          </div>

                          {/* CATEGORY BADGE PILL MATCHING IMAGE 2 */}
                          <span
                            style={{
                              fontSize: '10.5px',
                              fontWeight: 700,
                              background: badgeStyle.background,
                              color: badgeStyle.color,
                              border: badgeStyle.border,
                              padding: '1.5px 7px',
                              borderRadius: '10px',
                              flexShrink: 0
                            }}
                          >
                            {cat.subcategories.length}
                          </span>
                        </div>

                        {/* EXPANDED SUBCATEGORIES LIST WITH CHECKBOXES */}
                        {isExpanded && (
                          <div
                            className="categories-popover-subcat-list"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '2px',
                              padding: '4px 8px 8px 8px',
                              borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(226, 232, 240, 0.8)',
                              background: theme === 'dark' ? 'rgba(10, 25, 47, 0.40)' : '#FFFFFF'
                            }}
                          >
                            {cat.subcategories.map(subcat => {
                              const isSubSelected = !!selectedSubcategories[subcat];
                              return (
                                <div
                                  key={subcat}
                                  className="categories-popover-subcat-row"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    minHeight: '28px',
                                    padding: '6px 8px',
                                    borderRadius: '6px',
                                    fontSize: '12.5px',
                                    color: isSubSelected
                                      ? (theme === 'dark' ? '#38BDF8' : '#004B87')
                                      : (theme === 'dark' ? '#E2E8F0' : '#334155'),
                                    background: isSubSelected
                                      ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.16)' : 'rgba(0, 75, 135, 0.07)')
                                      : 'transparent',
                                    fontWeight: isSubSelected ? 600 : 400,
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    flexShrink: 0
                                  }}
                                  onClick={() => handleCategoryToggle(subcat)}
                                >
                                  {/* CUSTOM ROUNDED CHECKBOX SQUARE */}
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      borderRadius: '4px',
                                      border: isSubSelected
                                        ? (theme === 'dark' ? '1.5px solid #38BDF8' : '1.5px solid #004B87')
                                        : (theme === 'dark' ? '1.5px solid rgba(255, 255, 255, 0.35)' : '1.5px solid #94A3B8'),
                                      background: isSubSelected
                                        ? (theme === 'dark' ? '#0284C7' : '#004B87')
                                        : (theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF'),
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      transition: 'all 0.15s ease',
                                      flexShrink: 0
                                    }}
                                  >
                                    {isSubSelected && (
                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path d="M1.5 4L3.83333 6.5L8.5 1.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    )}
                                  </div>

                                  {/* SUBCATEGORY TEXT LABEL */}
                                  <span
                                    style={{
                                      color: isSubSelected
                                        ? (theme === 'dark' ? '#38BDF8' : '#002B5B')
                                        : (theme === 'dark' ? '#E2E8F0' : '#334155'),
                                      fontWeight: isSubSelected ? 600 : 400
                                    }}
                                  >
                                    {t.getSubcatName ? t.getSubcatName(subcat) : subcat}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* DYNAMIC MAP LEGEND POPOVER CARD */}
          {activeLeftPopover === 'legend' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card legend-popover-card"
              style={{
                bottom: '76px',
                left: lang === 'ar' ? 'auto' : '74px',
                right: lang === 'ar' ? '74px' : 'auto',
                width: '235px',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              <div style={{ padding: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: '700', color: theme === 'dark' ? '#FFFFFF' : '#002B5B', margin: 0, letterSpacing: '-0.01em' }}>{lang === 'ar' ? 'مفتاح الخريطة' : 'Map Legend'}</h4>
                  <button
                    type="button"
                    className="popover-close-btn"
                    onClick={() => setActiveLeftPopover(null)}
                    title={lang === 'ar' ? 'إغلاق' : "Close"}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxHeight: '200px', overflowY: 'auto', paddingRight: lang === 'ar' ? '0' : '2px', paddingLeft: lang === 'ar' ? '2px' : '0' }}>
                  {getDynamicLegendItems().map((item, lIdx) => (
                    <div
                      key={lIdx}
                      className="legend-popover-item"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '11px',
                        padding: '5px 8px',
                        borderRadius: '6px',
                        background: theme === 'dark' ? 'rgba(14, 34, 70, 0.55)' : 'rgba(255, 255, 255, 0.65)',
                        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(226, 232, 240, 0.8)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: item.color,
                          flexShrink: 0,
                          marginTop: '3px',
                          boxShadow: `0 0 5px ${item.color}80`
                        }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        <span style={{ fontWeight: 600, color: theme === 'dark' ? '#F1F5F9' : '#002B5B' }}>{item.title}</span>
                        {item.detail && <span style={{ fontSize: '10px', color: theme === 'dark' ? '#94A3B8' : '#64748B', lineHeight: '1.2' }}>{item.detail}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DYNAMIC LEAFLET MAP VIEWPORT */}
          <div
            className="map-canvas-container"
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <LeafletMap
              userLocation={realUserLocation}
              activeProject={activeProject}
              layers={layers}
              selectedLevel={selectedLevel}
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
              volumeToolActive={volumeToolActive}
              clickPoints={clickPoints}
              setClickPoints={setClickPoints}
              theme={theme}
              activeBasemap={activeBasemap}
              setHoveredCoords={setHoveredCoords}
              setIsHovered={setIsHovered}
              addLog={addLog}
              showToast={showToast}
              mapInstanceRef={mapInstanceRef}
              activeSearchResults={disabledLayers.size > 0 ? activeSearchResults.filter(item => !disabledLayers.has(item.category)) : activeSearchResults}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              onFeatureClick={handleFeatureClick}
              setMapScale={setMapScale}
              activeDrawTool={activeDrawTool}
              setActiveDrawTool={setActiveDrawTool}
              onDrawnAreaComplete={handleDrawnAreaSpatialQuery}
              onClearDrawnArea={handleClearDrawnArea}
              lastDrawnQuery={lastDrawnQuery}
              restoredDrawnGeometry={restoredDrawnGeometry}
              clearVisualDrawnTrigger={clearVisualDrawnTrigger}
              activeRoute={activeRoute}
              isNavigating={isNavigating}
              navStepIndex={navStepIndex}
            />

            {/* Floating HUD overlay removed to keep map and header clean */}
          </div>

          {/* STAGE 1: INITIAL MAP VIEW WITH GEOVISION AI BUTTON AT BOTTOM RIGHT (BOTTOM LEFT IN RTL) OF MAP WORKSPACE */}
          {(!isAISearchBarOpen && !isAiClosing && !selectedLocation) && (
            <div
              className="geovision-ai-btn-wrapper"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: lang === 'ar' ? 'auto' : '16px',
                left: lang === 'ar' ? '16px' : 'auto',
                zIndex: 1000,
                transition: lang === 'ar' ? 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <button
                className="geovision-ai-btn"
                onClick={() => {
                  setAiState('panel');
                }}
              >
                <span>GeoVision AI</span>
                <Sparkles size={16} className="ai-sparkle-icon" />
              </button>
            </div>
          )}

          {/* STAGE 2: FLOATING BOTTOM-CENTER AI SEARCH BAR */}
          {aiState === 'bar' && (
            <div
              className="map-bottom-ai-search-wrapper"
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                width: '90%',
                maxWidth: '680px'
              }}
            >
              <form
                className="landing-search-container map-floating-search-bar"
                style={{
                  margin: 0,
                  width: '100%',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.65)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '14px',
                  cursor: 'pointer'
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = (aiSearchQuery || '').trim();
                  if (q) {
                    setAiSearchQuery('');
                    setSearchQuery('');
                    setSearchBoxDrawnAttachment(null);
                    handleUnifiedSearch({ query: q });
                  } else {
                    setAiState('panel');
                  }
                }}
                onClick={() => {
                  setAiState('panel');
                }}
              >
                <div className="search-star-loader-wrapper">
                  <div className="search-star-loader"></div>
                  <FourPointStar className="landing-search-sparkle" size={16} />
                </div>
                <div className="landing-search-separator" />
                <input
                  type="text"
                  className="landing-search-input"
                  placeholder={t.searchPlaceholder || 'Ask Smart Map Anything...'}
                  value={aiSearchQuery}
                  onChange={(e) => setAiSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const q = (aiSearchQuery || '').trim();
                      if (q) {
                        setAiSearchQuery('');
                        setSearchQuery('');
                        setSearchBoxDrawnAttachment(null);
                        handleUnifiedSearch({ query: q });
                      } else {
                        setAiState('panel');
                      }
                    }
                  }}
                  onFocus={() => {
                    setAiState('panel');
                  }}
                />
                <div className="landing-search-btn-wrapper">
                  <button type="submit" className="landing-search-btn-pill" disabled={!aiSearchQuery.trim()}>
                    <span className="search-btn-text">{t.searchBtn || 'Search'}</span>
                    <Send size={15} className="search-btn-icon" style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

          {/* DEDICATED FEATURE DETAILS PANEL - MINIMIZED ICON STRIP (WHEN AI IS OPEN OR MANUALLY MINIMIZED) */}
          {selectedLocation && (isAISearchBarOpen || isDetailsMinimized) && (
            <aside
              className="geovision-details-minimized-strip"
              onClick={() => {
                setIsDetailsMinimized(false);
                setAiState('button');
              }}
              style={{
                position: 'relative',
                height: '100%',
                width: '46px',
                minWidth: '46px',
                flexShrink: 0,
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: theme === 'dark' ? 'linear-gradient(180deg, rgba(14, 38, 77, 0.95) 0%, rgba(6, 20, 48, 0.95) 100%)' : '#FFFFFF',
                borderLeft: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid #E2E8F0',
                borderRight: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid #E2E8F0',
                boxShadow: theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.45)' : '-2px 0 10px rgba(0, 43, 91, 0.04)',
                padding: '92px 6px 20px 6px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                animation: 'slideInRight 0.2s ease'
              }}
              title={`Click to open Detailed Information: ${selectedLocation.title}`}
            >
              {/* Category / Info Icon badge */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: theme === 'dark' ? 'rgba(56, 189, 248, 0.20)' : `${GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2'}18`,
                border: theme === 'dark' ? '1.5px solid rgba(56, 189, 248, 0.50)' : `1.5px solid ${GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2'}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme === 'dark' ? '#38bdf8' : (GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2'),
                boxShadow: theme === 'dark' ? '0 0 12px rgba(56, 189, 248, 0.35)' : '0 2px 6px rgba(0, 43, 91, 0.06)'
              }}>
                <Info size={16} strokeWidth={2.4} color={theme === 'dark' ? '#38bdf8' : (GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2')} />
              </div>

              {/* Rotated Vertical Title */}
              <div style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                marginTop: '16px',
                fontSize: '12px',
                fontWeight: 700,
                color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxHeight: '260px',
                textShadow: theme === 'dark' ? '0 1px 4px rgba(0, 0, 0, 0.8)' : 'none'
              }}>
                {lang === 'ar' ? (selectedLocation.arabicTitle || selectedLocation.title) : selectedLocation.title}
              </div>
            </aside>
          )}

          {/* DEDICATED FEATURE DETAILS PANEL - FULL EXPANDED VIEW (WHEN AI IS CLOSED & NOT MINIMIZED) */}
          {selectedLocation && !isAISearchBarOpen && !isDetailsMinimized && (
            <aside
              className="geovision-feature-details-sidebar"
              style={{
                position: 'relative',
                height: '100%',
                width: '380px',
                minWidth: '330px',
                maxWidth: '440px',
                flexShrink: 0,
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                background: theme === 'dark' ? 'rgba(10, 24, 50, 0.98)' : '#FFFFFF',
                borderLeft: lang === 'ar' ? 'none' : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E2E8F0'),
                borderRight: lang === 'ar' ? (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E2E8F0') : 'none',
                boxShadow: lang === 'ar' ? '4px 0 20px rgba(0, 43, 91, 0.06)' : '-4px 0 20px rgba(0, 43, 91, 0.06)',
                padding: 0,
                boxSizing: 'border-box',
                overflow: 'hidden',
                animation: lang === 'ar' ? 'slideInLeft 0.22s cubic-bezier(0.16, 1, 0.3, 1)' : 'slideInRight 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              {/* 1. TOP STICKY AREA: Header & Feature Title Row */}
              <div
                className="detailed-info-top-sticky"
                style={{
                  flexShrink: 0,
                  padding: '92px 20px 12px 20px',
                  background: theme === 'dark' ? 'rgba(10, 24, 50, 0.98)' : '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderBottom: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E2E8F0',
                  boxSizing: 'border-box',
                  zIndex: 10
                }}
              >
                {/* TOP BAR: Back button & 'Detailed Information' on left, Minimize & Close on right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      type="button"
                      style={{
                        background: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF',
                        border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.30)' : '1px solid #DBEAFE',
                        outline: 'none',
                        cursor: 'pointer',
                        color: theme === 'dark' ? '#38bdf8' : '#1D68F2',
                        padding: '4px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#DBEAFE';
                        e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.45)' : '#BFDBFE';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF';
                        e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.30)' : '#DBEAFE';
                      }}
                      title={lang === 'ar' ? 'العودة إلى محادثة المساعد الذكي' : "Back to AI Chat"}
                      onClick={() => {
                        setSelectedLocation(null);
                        setActiveRoute(null);
                        setIsNavigating(false);
                        setNavStepIndex(0);
                        setAiState('panel');
                        setIsAiClosing(false);
                      }}
                    >
                      {lang === 'ar' ? <ArrowRight size={15} strokeWidth={2.4} /> : <ArrowLeft size={15} strokeWidth={2.4} />}
                    </button>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: theme === 'dark' ? '#38bdf8' : '#1D68F2' }}>
                      {lang === 'ar' ? 'المعلومات التفصيلية' : 'Detailed Information'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {/* Print Feature Details Button in Header */}
                    <button
                      type="button"
                      style={{
                        background: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF',
                        border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.30)' : '1px solid #DBEAFE',
                        outline: 'none',
                        cursor: 'pointer',
                        color: theme === 'dark' ? '#38bdf8' : '#1D68F2',
                        padding: '4px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 600,
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#DBEAFE';
                        e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.45)' : '#BFDBFE';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF';
                        e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.30)' : '#DBEAFE';
                      }}
                      title={lang === 'ar' ? 'طباعة تفاصيل المعلم المكاني' : "Print Feature Details"}
                      onClick={() => openPrintDialog({ content: 'details', selectedFeature: selectedLocation })}
                    >
                      <Printer size={13} strokeWidth={2.4} />
                      <span>{lang === 'ar' ? 'طباعة' : 'Print'}</span>
                    </button>

                    {/* Minimize Button */}
                    <button
                      type="button"
                      style={{
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#F1F5F9')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                      title={lang === 'ar' ? 'تصغير التفاصيل' : "Minimize Details"}
                      onClick={() => setIsDetailsMinimized(true)}
                    >
                      <Minus size={16} strokeWidth={2.4} />
                    </button>

                    {/* Close Button */}
                    <button
                      type="button"
                      style={{
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#F1F5F9')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                      title={lang === 'ar' ? 'إغلاق التفاصيل' : "Close Details"}
                      onClick={() => {
                        setSelectedLocation(null);
                        setActiveRoute(null);
                        setIsNavigating(false);
                        setNavStepIndex(0);
                      }}
                    >
                      <X size={16} strokeWidth={2.4} />
                    </button>
                  </div>
                </div>

                {/* TITLE ROW: Feature Title & Arabic Name on left, Favorite & Zoom icons on right */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                        lineHeight: '1.3',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                      title={lang === 'ar' ? (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)) : selectedLocation.title}
                    >
                      {lang === 'ar' ? (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)) : selectedLocation.title}
                    </div>
                    <div style={{ fontSize: '12px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.70)' : '#64748B', marginTop: '2px', fontWeight: 500 }}>
                      {lang === 'ar' ? selectedLocation.title : (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title))}
                    </div>
                  </div>

                  {/* Favorite & Zoom Icons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginTop: '2px' }}>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: '2px', color: (selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? '#EF4444' : (theme === 'dark' ? '#94A3B8' : '#64748B') }}
                      title={(selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? (lang === 'ar' ? 'إزالة من المفضلة' : "Remove from Favorites") : (lang === 'ar' ? 'إضافة إلى المفضلة' : "Add to Favorites")}
                      onClick={() => {
                        handleToggleFavoritePlace(selectedLocation);
                      }}
                    >
                      <Heart
                        size={16}
                        fill={(selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? "#EF4444" : "none"}
                        color={(selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? "#EF4444" : (theme === 'dark' ? '#94A3B8' : '#64748B')}
                      />
                    </button>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: '2px', color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                      title={lang === 'ar' ? 'تكبير إلى المعلم' : "Zoom to feature"}
                      onClick={() => {
                        setSelectedLocation(prev => ({ ...prev, zoomTrigger: Date.now() }));
                        showToast(lang === 'ar' ? `تم التكبير إلى ${selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)}` : `Zoomed to ${selectedLocation.title}`);
                      }}
                    >
                      <ZoomIn size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. MIDDLE SCROLLABLE AREA: Overview Details, Striped Table & Route */}
              <div
                className="detailed-info-middle-scrollable"
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '14px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxSizing: 'border-box'
                }}
              >
                {/* SUB-TABS: Overview | Details | Route */}
                <div className="structured-subtabs-bar detailed-info-subtabs-bar">
                  <button
                    type="button"
                    className={`structured-subtab-btn ${(activeDetailTab || 'overview') === 'overview' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveDetailTab('overview');
                      setActiveRoute(null);
                      setIsNavigating(false);
                      setNavStepIndex(0);
                    }}
                  >
                    {t.overview || (lang === 'ar' ? 'نظرة عامة' : 'Overview')}
                  </button>

                  <button
                    type="button"
                    className={`structured-subtab-btn ${(activeDetailTab || 'overview') === 'details' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveDetailTab('details');
                      setActiveRoute(null);
                      setIsNavigating(false);
                      setNavStepIndex(0);
                    }}
                  >
                    {t.details || (lang === 'ar' ? 'التفاصيل' : 'Details')}
                  </button>

                  {selectedLocation.lat != null && selectedLocation.lon != null && !isNaN(selectedLocation.lat) && !isNaN(selectedLocation.lon) && (
                    <button
                      type="button"
                      className={`structured-subtab-btn ${(activeDetailTab || 'overview') === 'route' ? 'active' : ''}`}
                      onClick={() => setActiveDetailTab('route')}
                    >
                      {t.route || (lang === 'ar' ? 'المسار' : 'Route')}
                    </button>
                  )}
                </div>

                {/* OVERVIEW CONTENT (ADDRESS, WEBSITE, CONTACTS & WHY IT'S A GOOD OPTION) */}
                {(activeDetailTab || 'overview') === 'overview' && (
                  <div className="detailed-info-overview-container">
                    {/* Address Row */}
                    <div className="detailed-info-address-row">
                      <MapPin size={15} className="detailed-info-icon" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{lang === 'ar' ? (selectedLocation.arabicAddress || selectedLocation.address || 'المشرف، أبوظبي، الإمارات العربية المتحدة') : (selectedLocation.address || 'W24_02, AL MUSHRIF, Abu Dhabi')}</span>
                    </div>

                    {/* Website Row */}
                    <div className="detailed-info-website-row">
                      <Globe size={15} className="detailed-info-icon" style={{ flexShrink: 0 }} />
                      <a
                        href={selectedLocation.website || 'https://iscabudhabi.sabis.net'}
                        target="_blank"
                        rel="noreferrer"
                        className="detailed-info-link"
                      >
                        {selectedLocation.website || 'https://iscabudhabi.sabis.net'}
                      </a>
                    </div>

                    {/* Contact Info Row: Email & Phone Side by Side */}
                    <div className="detailed-info-contacts-row">
                      <div className="detailed-info-contact-col">
                        <Mail size={15} className="detailed-info-icon" style={{ flexShrink: 0 }} />
                        <a
                          href={`mailto:${selectedLocation.email || '9059@adek.gov.ae'}`}
                          className="detailed-info-contact-text"
                        >
                          {selectedLocation.email || '9059@adek.gov.ae'}
                        </a>
                      </div>

                      <div className="detailed-info-contact-col">
                        <Phone size={15} className="detailed-info-icon" style={{ flexShrink: 0 }} />
                        <a
                          href={`tel:${selectedLocation.phone || selectedLocation.contact || '24461444'}`}
                          className="detailed-info-contact-text"
                        >
                          {selectedLocation.phone || selectedLocation.contact || '24461444'}
                        </a>
                      </div>
                    </div>

                    {/* Horizontal Divider Line */}
                    <div className="detailed-info-divider" />

                    {/* 'Here's why this is a good option for you' Section */}
                    <div className="detailed-info-recom-title">
                      <Sparkles size={14} color="#1D68F2" />
                      <span>{lang === 'ar' ? 'لماذا يعتبر هذا خياراً مناسباً لك' : "Here's why this is a good option for you"}</span>
                    </div>

                    {/* Dynamic Category Pill Chips */}
                    <div className="detailed-info-chips-row">
                      {getLocationCategoryDetails(selectedLocation).chips.map((chip, cIdx) => (
                        <div key={cIdx} className="detailed-info-chip-badge">
                          <span className="detailed-info-chip-label">{chip.label}:</span> <span className="detailed-info-chip-val">{chip.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* DETAILS SECTION (STRIPED BLUE & WHITE DYNAMIC ATTRIBUTE TABLE) */}
                {(activeDetailTab || 'overview') === 'details' && (
                  <div className="detailed-info-table-section">
                    <div className="detailed-info-table-box">
                      {getLocationCategoryDetails(selectedLocation).rows.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className={`detailed-info-table-row ${rIdx % 2 === 0 ? 'even' : 'odd'}`}
                        >
                          <div className="detailed-info-row-label">
                            {row.label}
                          </div>
                          <div className="detailed-info-row-colon">:</div>
                          <div className="detailed-info-row-value">
                            <div>{row.value}</div>
                            {row.subValue && (
                              <div className="detailed-info-row-subvalue">
                                {row.subValue}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ROUTE SECTION */}
                {(activeDetailTab || 'overview') === 'route' && (
                  renderRouteDetailsPane(selectedLocation)
                )}
              </div>

              {/* 3. BOTTOM STICKY AREA: Ask AI Assistant Section */}
              <div
                className="detailed-info-bottom-sticky"
                style={{
                  flexShrink: 0,
                  padding: '12px 20px 20px 20px',
                  background: theme === 'dark' ? 'rgba(10, 24, 50, 0.98)' : '#FFFFFF',
                  borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  boxSizing: 'border-box',
                  zIndex: 10
                }}
              >
                <div className="detailed-info-ai-title">
                  {lang === 'ar' ? 'اسأل المساعد الذكي' : 'Ask AI Assistant'}
                </div>

                {/* Option 1: Tell me more about [Place] */}
                <button
                  type="button"
                  className="detailed-info-ai-btn"
                  onClick={() => {
                    const placeName = lang === 'ar' ? (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title || 'هذا المعلم')) : (selectedLocation.title || 'this place');
                    handleUnifiedSearch({ query: lang === 'ar' ? `أخبرني المزيد عن ${placeName}` : `Tell me more about ${placeName}` });
                    setIsAISearchBarOpen(true);
                  }}
                  title={lang === 'ar' ? `اسأل الذكاء الاصطناعي ليخبرك المزيد عن ${selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)}` : `Ask AI to tell you more about ${selectedLocation.title || 'this place'}`}
                >
                  <Sparkles size={16} color="#1D68F2" style={{ flexShrink: 0 }} />
                  <span>
                    {lang === 'ar' ? `أخبرني المزيد عن ${selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title || 'هذا المعلم')}` : `Tell me more about ${selectedLocation.title || 'AI'}`}
                  </span>
                </button>

                {/* Option 2: Find nearby places around here */}
                <button
                  type="button"
                  className="detailed-info-ai-btn"
                  onClick={() => {
                    const placeName = lang === 'ar' ? (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title || 'هنا')) : (selectedLocation.title || 'here');
                    handleUnifiedSearch({ query: lang === 'ar' ? `ابحث عن الأماكن القريبة من ${placeName}` : `Find nearby places around ${placeName}` });
                    setIsAISearchBarOpen(true);
                  }}
                  title={lang === 'ar' ? 'ابحث عن الأماكن القريبة من هذا الموقع' : "Find nearby places around this location"}
                >
                  <MapPin size={16} color="#1D68F2" style={{ flexShrink: 0 }} />
                  <span>
                    {lang === 'ar' ? 'ابحث عن الأماكن القريبة من هنا' : 'Find nearby places around here'}
                  </span>
                </button>
              </div>
            </aside>
          )}

          {/* RESIZABLE GEOVISION AI SPATIAL SEARCH PANEL (RIGHT SIDEBAR IN LTR / LEFT SIDEBAR IN RTL) */}
          {(isAISearchBarOpen || isAiClosing) && (
            <aside
              className={`landing-search-card-wrapper map-ai-panel-wrapper ${isAiClosing ? 'mac-closing' : ''}`}
              style={{
                position: 'relative',
                height: '100%',
                width: isAiMinimized ? '320px' : `${aiPanelWidth}px`,
                minWidth: isAiMinimized ? '320px' : '320px',
                maxWidth: isAiMinimized ? '320px' : '620px',
                flexShrink: 0,
                zIndex: 1001,
                borderRadius: '0px',
                transition: isDraggingAiResize ? 'none' : 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              {/* DRAGGABLE RESIZE DIVIDER / HANDLE */}
              {!isAiMinimized && (
                <div
                  className={`ai-panel-resize-handle ${isDraggingAiResize ? 'dragging' : ''}`}
                  onPointerDown={handleResizePointerDown}
                  title={lang === 'ar' ? 'اسحب لتغيير حجم لوحة البحث الذكي' : "Drag left/right to resize AI Spatial Search"}
                  style={{
                    left: lang === 'ar' ? 'auto' : 0,
                    right: lang === 'ar' ? 0 : 'auto'
                  }}
                >
                  <div className="resize-handle-grip" />
                </div>
              )}

              {/* DEDICATED PULSATING WHITE INNER GLOW OVERLAY */}
              <div className="category-drawer-inner-glow" style={{ borderRadius: 0, clipPath: 'none' }} />

              <div
                className="map-ai-panel-container landing-search-card"
                style={{
                  height: '100%',
                  maxHeight: '100%',
                  overflow: 'hidden',
                  userSelect: isDraggingAiResize ? 'none' : 'auto',
                  width: '100%',
                  margin: 0,
                  marginBottom: 0,
                  borderRadius: 0,
                  clipPath: 'none',
                  WebkitClipPath: 'none'
                }}
              >
                {/* INDEPENDENT REDUCED OPACITY BACKGROUND IMAGE OVERLAY */}
                <div className="map-ai-panel-bg-img" />

                {/* MAIN 2-COLUMN GRID (CHAT STREAM LEFT, DETAILED INFORMATION RIGHT) */}
                <div className="map-ai-panel-main-grid" style={{ position: 'relative', zIndex: 1, display: 'flex', width: '100%', maxWidth: '100%', minWidth: 0, height: '100%', gap: '16px', margin: 0, padding: 0, boxSizing: 'border-box' }}>
                  {/* LEFT COLUMN: CHAT STREAM & INPUT BAR */}
                  <div className="map-ai-panel-left-col" style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: 1, minWidth: 0, maxWidth: '100%', justifyContent: 'space-between', margin: 0, padding: 0, boxSizing: 'border-box' }}>
                    {/* PANEL HEADER (INSIDE LEFT COLUMN ONLY) WITH MINIMIZE & CLOSE BUTTONS SIDE BY SIDE */}
                    <div className="map-ai-panel-header" style={{
                      opacity: 1,
                      minHeight: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      maxWidth: '100%',
                      minWidth: 0,
                      marginBottom: isAiMinimized ? '0' : '14px',
                      boxSizing: 'border-box'
                    }}>
                      <div className="map-ai-panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {aiPanelSubView === 'favorites' ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button
                              type="button"
                              style={{
                                background: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF',
                                border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.30)' : '1px solid #DBEAFE',
                                outline: 'none',
                                cursor: 'pointer',
                                color: theme === 'dark' ? '#38bdf8' : '#1D68F2',
                                padding: '4px 6px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '6px',
                                transition: 'all 0.15s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#DBEAFE';
                                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.45)' : '#BFDBFE';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF';
                                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.30)' : '#DBEAFE';
                              }}
                              title={lang === 'ar' ? 'العودة إلى محادثة المساعد الذكي' : 'Back to AI Chat'}
                              onClick={() => setAiPanelSubView('chat')}
                            >
                              {lang === 'ar' ? <ArrowRight size={15} strokeWidth={2.4} /> : <ArrowLeft size={15} strokeWidth={2.4} />}
                            </button>
                            <h2 style={{
                              fontSize: '15px',
                              fontWeight: '700',
                              color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                              margin: 0,
                              padding: 0,
                              lineHeight: '1.2',
                              fontFamily: lang === 'ar' ? 'Cairo, "IBM Plex Sans Arabic", Outfit, sans-serif' : 'Outfit, Inter, sans-serif'
                            }}>
                              {lang === 'ar' ? 'المفضلة' : 'Favorites'}
                            </h2>
                          </div>
                        ) : aiPanelSubView === 'history' ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button
                              type="button"
                              style={{
                                background: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF',
                                border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.30)' : '1px solid #DBEAFE',
                                outline: 'none',
                                cursor: 'pointer',
                                color: theme === 'dark' ? '#38bdf8' : '#1D68F2',
                                padding: '4px 6px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '6px',
                                transition: 'all 0.15s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#DBEAFE';
                                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.45)' : '#BFDBFE';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF';
                                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(56, 189, 248, 0.30)' : '#DBEAFE';
                              }}
                              title={lang === 'ar' ? 'العودة إلى محادثة المساعد الذكي' : 'Back to AI Chat'}
                              onClick={() => setAiPanelSubView('chat')}
                            >
                              {lang === 'ar' ? <ArrowRight size={15} strokeWidth={2.4} /> : <ArrowLeft size={15} strokeWidth={2.4} />}
                            </button>
                            <h2 style={{
                              fontSize: '15px',
                              fontWeight: '700',
                              color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                              margin: 0,
                              padding: 0,
                              lineHeight: '1.2',
                              fontFamily: lang === 'ar' ? 'Cairo, "IBM Plex Sans Arabic", Outfit, sans-serif' : 'Outfit, Inter, sans-serif'
                            }}>
                              {t.history || (lang === 'ar' ? 'سجل البحث' : 'History')}
                            </h2>
                          </div>
                        ) : (
                          <h2 style={{
                            fontSize: '15px',
                            fontWeight: '700',
                            color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                            margin: 0,
                            padding: 0,
                            lineHeight: '1.2',
                            fontFamily: lang === 'ar' ? 'Cairo, "IBM Plex Sans Arabic", Outfit, sans-serif' : 'Outfit, Inter, sans-serif',
                            letterSpacing: '-0.01em'
                          }}>
                            {t.aiSpatialSearch || (lang === 'ar' ? 'البحث المكاني الذكي' : 'AI Spatial Search')}
                          </h2>
                        )}
                      </div>

                      {/* ACTION BUTTONS: FAVORITES, HISTORY, NEW CHAT & CLOSE */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* 0. FAVORITES BUTTON (FOR REGISTERED USERS) */}
                        {isLoggedIn && (
                          <button
                            type="button"
                            className={`search-history-toggle-btn ${aiPanelSubView === 'favorites' ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setAiPanelSubView(prev => prev === 'favorites' ? 'chat' : 'favorites');
                            }}
                            title={lang === 'ar' ? 'المفضلة' : "Favorites"}
                            style={{
                              background: aiPanelSubView === 'favorites'
                                ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(0, 75, 135, 0.12)')
                                : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)'),
                              border: aiPanelSubView === 'favorites'
                                ? (theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(0, 75, 135, 0.35)')
                                : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)'),
                              borderRadius: '8px',
                              width: '32px',
                              height: '32px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                              boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Heart size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.2} fill={aiPanelSubView === 'favorites' ? (theme === 'dark' ? '#38bdf8' : '#004B87') : 'none'} />
                          </button>
                        )}
                        {/* 1. HISTORY BUTTON */}
                        <button
                          className={`search-history-toggle-btn ${aiPanelSubView === 'history' ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setAiPanelSubView(prev => prev === 'history' ? 'chat' : 'history');
                          }}
                          title={lang === 'ar' ? 'سجل البحث' : "Search History"}
                          style={{
                            background: aiPanelSubView === 'history' ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(0, 75, 135, 0.12)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)'),
                            border: aiPanelSubView === 'history' ? (theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(0, 75, 135, 0.35)') : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)'),
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <History size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.2} />
                        </button>

                        {/* 2. NEW CHAT BUTTON */}
                        <button
                          className="search-history-toggle-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNewChat();
                          }}
                          title={lang === 'ar' ? 'محادثة جديدة' : "New Chat"}
                          style={{
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <SquarePen size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.2} />
                        </button>

                        {/* 3. CLOSE BUTTON */}
                        <button
                          className="search-history-toggle-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsAiMinimized(false);
                            handleCloseAiPanel();
                          }}
                          title={lang === 'ar' ? 'إغلاق لوحة البحث' : "Close AI Panel"}
                          style={{
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <X size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.4} />
                        </button>
                      </div>
                    </div>

                    {!isAiMinimized && (
                      aiPanelSubView === 'favorites' ? (
                        /* FAVORITES VIEW EMBEDDED DIRECTLY IN AI PANEL */
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                          height: '100%',
                          width: '100%',
                          minHeight: 0,
                          overflow: 'hidden',
                          padding: '8px 0 4px 0',
                          boxSizing: 'border-box'
                        }}>
                          {/* Search Filter Input Bar */}
                          <div
                            style={{
                              position: 'relative',
                              width: '100%',
                              marginBottom: '10px',
                              flexShrink: 0
                            }}
                          >
                            <input
                              type="text"
                              className="search-history-filter-input"
                              placeholder={t.filterFavPlaceholder || (lang === 'ar' ? 'البحث في المفضلة...' : 'Search favorites...')}
                              value={collectionsFilterQuery}
                              onChange={(e) => setCollectionsFilterQuery(e.target.value)}
                              style={{
                                width: '100%',
                                height: '36px',
                                padding: lang === 'ar' ? '0 12px 0 34px' : '0 34px 0 12px',
                                borderRadius: '8px',
                                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(226, 232, 240, 0.9)',
                                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.85)',
                                fontSize: '12.5px',
                                color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                                outline: 'none',
                                boxSizing: 'border-box',
                                textAlign: lang === 'ar' ? 'right' : 'left'
                              }}
                            />
                            <Search
                              size={15}
                              style={{
                                position: 'absolute',
                                [lang === 'ar' ? 'left' : 'right']: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: theme === 'dark' ? '#94A3B8' : '#64748B',
                                pointerEvents: 'none'
                              }}
                            />
                          </div>

                          {/* Favorites Items List */}
                          <div
                            className="search-history-list custom-scrollbar"
                            style={{
                              flex: 1,
                              overflowY: 'auto',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              paddingRight: lang === 'ar' ? '0' : '2px',
                              paddingLeft: lang === 'ar' ? '2px' : '0'
                            }}
                          >
                            {!isLoggedIn ? (
                              <div style={{
                                textAlign: 'center',
                                padding: '36px 16px',
                                color: theme === 'dark' ? '#94A3B8' : '#64748B',
                                fontSize: '13px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px'
                              }}>
                                <Heart size={32} color="#EF4444" strokeWidth={1.5} />
                                <div>{lang === 'ar' ? 'يرجى تسجيل الدخول للوصول إلى الأماكن المفضلة' : 'Please sign in to access your bookmarked places.'}</div>
                                <button
                                  type="button"
                                  onClick={() => { setIsSignInOpen(true); }}
                                  style={{
                                    marginTop: '6px',
                                    padding: '7px 16px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: theme === 'dark' 
                                      ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                                      : 'linear-gradient(180deg, #004B87 0%, #002B5B 100%)',
                                    color: '#FFFFFF',
                                    fontSize: '12.5px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    boxShadow: theme === 'dark' 
                                      ? '0 2px 8px rgba(2, 132, 199, 0.35)' 
                                      : '0 2px 8px rgba(0, 43, 91, 0.25)',
                                    transition: 'all 0.2s ease'
                                  }}
                                >
                                  <LogIn size={14} />
                                  <span>{lang === 'ar' ? 'تسجيل الدخول الآن' : 'Sign In Now'}</span>
                                </button>
                              </div>
                            ) : favoritePlaces.length === 0 ? (
                              <div style={{ textAlign: 'center', padding: '36px 16px', color: theme === 'dark' ? '#94A3B8' : '#64748B', fontSize: '13px' }}>
                                {lang === 'ar' ? 'لا توجد أماكن مفضلة محفوظة حتى الآن' : 'No favorite places bookmarked yet.'}
                              </div>
                            ) : (
                              <>
                                {favoritePlaces
                                  .filter(item =>
                                    !collectionsFilterQuery ||
                                    item.title.toLowerCase().includes(collectionsFilterQuery.toLowerCase()) ||
                                    (item.category && item.category.toLowerCase().includes(collectionsFilterQuery.toLowerCase())) ||
                                    (item.area && item.area.toLowerCase().includes(collectionsFilterQuery.toLowerCase()))
                                  )
                                  .map((item) => {
                                    const iconConfig = getCategoryIconForHistory(item.category || item.subcategory || item.title);
                                    return (
                                      <div
                                        key={`ai-fav-place-${item.id}`}
                                        className="search-history-item"
                                        onClick={() => handleSelectFavoritePlace(item)}
                                        style={{
                                          position: 'relative',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'space-between',
                                          alignItems: 'flex-start',
                                          width: '100%',
                                          boxSizing: 'border-box',
                                          padding: '10px 12px',
                                          height: '65px',
                                          minHeight: '65px',
                                          maxHeight: '65px',
                                          borderRadius: '10px',
                                          background: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.85)',
                                          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(226, 232, 240, 0.85)',
                                          cursor: 'pointer',
                                          transition: 'all 0.15s ease',
                                          boxShadow: '0 1px 3px rgba(0, 43, 91, 0.03)',
                                          textAlign: lang === 'ar' ? 'right' : 'left'
                                        }}
                                      >
                                        {/* Top Row: Small Icon + Title on left, Delete Button on right */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flex: 1, minWidth: 0 }}>
                                            <div
                                              className="history-cat-icon-circle"
                                              style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : iconConfig.bg,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                              }}
                                            >
                                              {iconConfig.icon}
                                            </div>
                                            <div
                                              style={{
                                                fontSize: '12.5px',
                                                fontWeight: 600,
                                                color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                lineHeight: '1.3',
                                                textAlign: lang === 'ar' ? 'right' : 'left'
                                              }}
                                              title={lang === 'ar' ? getArabicTitle(item.title) : item.title}
                                            >
                                              {lang === 'ar' ? getArabicTitle(item.title) : item.title}
                                            </div>
                                          </div>

                                          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                                            <button
                                              type="button"
                                              className="collections-delete-btn"
                                              title={lang === 'ar' ? 'إزالة من المفضلة' : "Remove from Favorites"}
                                              onClick={() => handleToggleFavoritePlace(item)}
                                              style={{
                                                width: '26px',
                                                height: '26px',
                                                borderRadius: '6px',
                                                border: theme === 'dark' ? '1px solid rgba(248, 113, 113, 0.40)' : '1px solid rgba(254, 226, 226, 0.8)',
                                                background: theme === 'dark' ? 'rgba(239, 68, 68, 0.18)' : '#FEF2F2',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                color: theme === 'dark' ? '#F87171' : '#EF4444',
                                                transition: 'all 0.15s ease'
                                              }}
                                              onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(239, 68, 68, 0.32)' : '#FEE2E2')}
                                              onMouseLeave={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(239, 68, 68, 0.18)' : '#FEF2F2')}
                                            >
                                              <Trash2 size={13} color={theme === 'dark' ? '#F87171' : '#EF4444'} />
                                            </button>
                                          </div>
                                        </div>

                                        {/* Bottom Row: Area + Category tag on left, Time on right */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '8px' }}>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0, overflow: 'hidden' }}>
                                            <span style={{ fontSize: '10.5px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.75)' : '#64748B', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                              {lang === 'ar' ? getArabicArea(item.area) : (item.area ? item.area.split(',')[0] : 'Abu Dhabi')}
                                            </span>
                                            <span
                                              className="history-category-badge"
                                              style={{
                                                fontSize: '9.5px',
                                                color: iconConfig.color,
                                                background: iconConfig.badgeBg,
                                                padding: '1.5px 6px',
                                                borderRadius: '4px',
                                                fontWeight: 600,
                                                display: 'inline-block',
                                                whiteSpace: 'nowrap',
                                                textAlign: lang === 'ar' ? 'right' : 'left'
                                              }}
                                            >
                                              {t.getCatName(item.category || item.subcategory || 'Location')}
                                            </span>
                                          </div>
                                          <span style={{ fontSize: '10px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : '#94A3B8', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                            {t.timeAgo(item.timestamp || 'Just now')}
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </>
                            )}
                          </div>
                        </div>
                      ) : aiPanelSubView === 'history' ? (
                        /* SEARCH HISTORY VIEW EMBEDDED DIRECTLY IN AI PANEL */
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                          height: '100%',
                          width: '100%',
                          minHeight: 0,
                          overflow: 'hidden',
                          padding: '8px 0 4px 0',
                          boxSizing: 'border-box'
                        }}>
                          {/* Search Filter Input Bar */}
                          <div
                            style={{
                              position: 'relative',
                              width: '100%',
                              marginBottom: '10px',
                              flexShrink: 0
                            }}
                          >
                            <input
                              type="text"
                              className="search-history-filter-input"
                              placeholder={t.filterHistoryPlaceholder || (lang === 'ar' ? 'البحث في سجل البحث...' : 'Search history...')}
                              value={historyFilterQuery}
                              onChange={(e) => setHistoryFilterQuery(e.target.value)}
                              style={{
                                width: '100%',
                                height: '36px',
                                padding: lang === 'ar' ? '0 12px 0 34px' : '0 34px 0 12px',
                                borderRadius: '8px',
                                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(226, 232, 240, 0.9)',
                                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.85)',
                                fontSize: '12.5px',
                                color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                                outline: 'none',
                                boxSizing: 'border-box',
                                textAlign: lang === 'ar' ? 'right' : 'left'
                              }}
                            />
                            <Search
                              size={15}
                              style={{
                                position: 'absolute',
                                [lang === 'ar' ? 'left' : 'right']: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: theme === 'dark' ? '#94A3B8' : '#64748B',
                                pointerEvents: 'none'
                              }}
                            />
                          </div>

                          {/* Search History List */}
                          <div
                            className="search-history-list custom-scrollbar"
                            style={{
                              flex: 1,
                              overflowY: 'auto',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '6px',
                              paddingRight: lang === 'ar' ? '0' : '2px',
                              paddingLeft: lang === 'ar' ? '2px' : '0'
                            }}
                          >
                            {!isLoggedIn ? (
                              <div style={{
                                textAlign: 'center',
                                padding: '36px 16px',
                                color: theme === 'dark' ? '#94A3B8' : '#64748B',
                                fontSize: '13px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px'
                              }}>
                                <History size={32} color={theme === 'dark' ? '#38bdf8' : '#004B87'} strokeWidth={1.5} />
                                <div>{lang === 'ar' ? 'يرجى تسجيل الدخول للوصول إلى سجل البحث' : 'Sign in to access your search history.'}</div>
                                <button
                                  type="button"
                                  onClick={() => { setIsSignInOpen(true); }}
                                  style={{
                                    marginTop: '6px',
                                    padding: '7px 16px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: theme === 'dark' 
                                      ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                                      : 'linear-gradient(180deg, #004B87 0%, #002B5B 100%)',
                                    color: '#FFFFFF',
                                    fontSize: '12.5px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    boxShadow: theme === 'dark' 
                                      ? '0 2px 8px rgba(2, 132, 199, 0.35)' 
                                      : '0 2px 8px rgba(0, 43, 91, 0.25)',
                                    transition: 'all 0.2s ease'
                                  }}
                                >
                                  <LogIn size={14} />
                                  <span>{lang === 'ar' ? 'تسجيل الدخول الآن' : 'Sign In Now'}</span>
                                </button>
                              </div>
                            ) : savedQueries.length === 0 && searchHistory.length === 0 ? (
                              <div style={{ textAlign: 'center', padding: '36px 16px', color: theme === 'dark' ? '#94A3B8' : '#64748B', fontSize: '13px' }}>
                                {lang === 'ar' ? 'لا يوجد سجل بحث حتى الآن' : 'No search history recorded yet.'}
                              </div>
                            ) : (
                              <>
                                {/* 1. PINNED SECTION (ACCORDION) */}
                                <div
                                  className="pinned-queries-section"
                                  style={{
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginBottom: savedQueries.length > 0 && isPinnedAccordionOpen ? '8px' : '4px',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {/* Accordion Header */}
                                  <div
                                    onClick={() => setIsPinnedAccordionOpen(prev => !prev)}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      padding: '6px 8px',
                                      borderRadius: '6px',
                                      cursor: 'pointer',
                                      userSelect: 'none',
                                      transition: 'background 0.15s ease',
                                      background: isPinnedAccordionOpen && savedQueries.length > 0
                                        ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.08)' : 'rgba(0, 75, 135, 0.05)')
                                        : 'transparent'
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                      <Pin size={12} color={theme === 'dark' ? '#38bdf8' : '#004B87'} fill={theme === 'dark' ? '#38bdf8' : '#004B87'} />
                                      <span className="history-section-title" style={{ fontSize: '12px', fontWeight: 700, color: theme === 'dark' ? '#FFFFFF' : '#002B5B' }}>
                                        {t.pinned || (lang === 'ar' ? 'المثبتة' : 'Pinned')}
                                      </span>
                                    </div>

                                    <div style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      transition: 'transform 0.2s ease',
                                      transform: isPinnedAccordionOpen ? 'rotate(0deg)' : (lang === 'ar' ? 'rotate(90deg)' : 'rotate(-90deg)')
                                    }}>
                                      <ChevronDown size={14} color={theme === 'dark' ? 'rgba(255, 255, 255, 0.60)' : '#64748B'} />
                                    </div>
                                  </div>

                                  {/* Accordion Body */}
                                  {isPinnedAccordionOpen && savedQueries.length > 0 && (
                                    <div
                                      className="pinned-queries-scroll-list"
                                      style={{
                                        maxHeight: '220px',
                                        overflowY: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '6px',
                                        marginTop: '6px',
                                        paddingRight: lang === 'ar' ? '0' : '2px',
                                        paddingLeft: lang === 'ar' ? '2px' : '0'
                                      }}
                                    >
                                      {savedQueries
                                        .filter(item =>
                                          !historyFilterQuery ||
                                          (item.title && item.title.toLowerCase().includes(historyFilterQuery.toLowerCase())) ||
                                          (item.category && item.category.toLowerCase().includes(historyFilterQuery.toLowerCase()))
                                        )
                                        .map((item) => {
                                          const iconConfig = getCategoryIconForHistory(item.category || item.title);
                                          const matchCount = (typeof item.resultsCount === 'number' && item.resultsCount > 0)
                                            ? item.resultsCount
                                            : (typeof item.queryState?.resultsCount === 'number' && item.queryState.resultsCount > 0)
                                            ? item.queryState.resultsCount
                                            : (item.title || item.text || '').toLowerCase().includes('health') || (item.category || '').toLowerCase().includes('health') ? 9
                                            : (item.title || item.text || '').toLowerCase().includes('khalifa') || (item.category || '').toLowerCase().includes('gov') ? 12
                                            : (item.title || item.text || '').toLowerCase().includes('school') || (item.category || '').toLowerCase().includes('educ') ? 8
                                            : (item.title || item.text || '').toLowerCase().includes('park') || (item.category || '').toLowerCase().includes('park') ? 5
                                            : (item.title || item.text || '').toLowerCase().includes('bus') || (item.category || '').toLowerCase().includes('trans') ? 14
                                            : (item.title || item.text || '').toLowerCase().includes('drawn') || (item.category || '').toLowerCase().includes('drawn') ? 3
                                            : 8;
                                          return (
                                            <div
                                              key={item.id}
                                              className={`search-history-item ${activeQueryMenuId === item.id ? 'has-active-menu' : ''}`}
                                              onClick={() => handleRestoreSavedQuery(item)}
                                              style={{
                                                position: 'relative',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                width: '100%',
                                                boxSizing: 'border-box',
                                                padding: '10px 12px',
                                                height: '65px',
                                                minHeight: '65px',
                                                maxHeight: '65px',
                                                borderRadius: '8px',
                                                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.92)',
                                                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 75, 135, 0.16)',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s ease',
                                                boxShadow: '0 1px 3px rgba(0, 43, 91, 0.03)',
                                                textAlign: lang === 'ar' ? 'right' : 'left'
                                              }}
                                            >
                                              {/* Top Row: Category Icon + Title on left, Action Buttons on right */}
                                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '6px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, minWidth: 0 }}>
                                                  <div
                                                    className="history-cat-icon-circle"
                                                    style={{
                                                      width: '22px',
                                                      height: '22px',
                                                      borderRadius: '50%',
                                                      background: iconConfig.bg,
                                                      border: `1px solid ${iconConfig.border || 'transparent'}`,
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      flexShrink: 0
                                                    }}
                                                  >
                                                    {iconConfig.icon}
                                                  </div>
                                                  {renamingQueryId === item.id ? (
                                                    <div
                                                      style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%' }}
                                                      onClick={(e) => e.stopPropagation()}
                                                    >
                                                      <input
                                                        type="text"
                                                        value={renameQueryText}
                                                        onChange={(e) => setRenameQueryText(e.target.value)}
                                                        onKeyDown={(e) => {
                                                          if (e.key === 'Enter') handleSaveRenameQuery(item.id);
                                                          if (e.key === 'Escape') setRenamingQueryId(null);
                                                        }}
                                                        autoFocus
                                                        style={{
                                                          flex: 1,
                                                          padding: '2px 5px',
                                                          fontSize: '11.5px',
                                                          borderRadius: '4px',
                                                          border: '1px solid #1D68F2',
                                                          outline: 'none',
                                                          background: '#FFFFFF',
                                                          color: '#002B5B',
                                                          textAlign: lang === 'ar' ? 'right' : 'left'
                                                        }}
                                                      />
                                                      <button
                                                        type="button"
                                                        onClick={() => handleSaveRenameQuery(item.id)}
                                                        style={{ padding: '2px 5px', background: '#1D68F2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '10.5px' }}
                                                      >
                                                        <Check size={11} />
                                                      </button>
                                                      <button
                                                        type="button"
                                                        onClick={() => setRenamingQueryId(null)}
                                                        style={{ padding: '2px 5px', background: '#E2E8F0', color: '#475569', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '10.5px' }}
                                                      >
                                                        <X size={11} />
                                                      </button>
                                                    </div>
                                                  ) : (
                                                    <div
                                                      style={{
                                                        fontSize: '12px',
                                                        fontWeight: 600,
                                                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        lineHeight: '1.25',
                                                        textAlign: lang === 'ar' ? 'right' : 'left'
                                                      }}
                                                      title={lang === 'ar' ? getArabicTitle(item.title) : item.title}
                                                    >
                                                      {lang === 'ar' ? getArabicTitle(item.title) : item.title}
                                                    </div>
                                                  )}
                                                </div>

                                                {/* Action Buttons: Quick Unpin + 3-Dot Menu */}
                                                <div className="history-action-buttons-group" style={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                                                  <button
                                                    type="button"
                                                    title={lang === 'ar' ? 'إلغاء التثبيت' : 'Unpin query'}
                                                    onClick={(e) => {
                                                      e.stopPropagation();
                                                      handleUnpinQuery(item);
                                                    }}
                                                    className="history-quick-action-btn"
                                                    style={{
                                                      width: '22px',
                                                      height: '22px',
                                                      borderRadius: '6px',
                                                      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(0, 75, 135, 0.16)',
                                                      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 75, 135, 0.06)',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      cursor: 'pointer',
                                                      color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                                                      transition: 'all 0.15s ease'
                                                    }}
                                                  >
                                                    <Pin size={11} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} fill={theme === 'dark' ? '#FFFFFF' : '#004B87'} />
                                                  </button>

                                                  <div className="query-menu-container" style={{ position: 'relative' }}>
                                                    <button
                                                      type="button"
                                                      title={lang === 'ar' ? 'خيارات الاستعلام' : 'Query Options'}
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (activeQueryMenuId === item.id) {
                                                          setActiveQueryMenuId(null);
                                                        } else {
                                                          const rect = e.currentTarget.getBoundingClientRect();
                                                          const menuWidth = 155;
                                                          const menuHeight = 145;
                                                          let top = rect.bottom + 4;
                                                          if (top + menuHeight > window.innerHeight - 10) {
                                                            top = Math.max(10, rect.top - menuHeight - 4);
                                                          }
                                                          let left;
                                                          if (lang === 'ar') {
                                                            left = Math.min(window.innerWidth - menuWidth - 10, Math.max(10, rect.left));
                                                          } else {
                                                            left = Math.max(10, Math.min(window.innerWidth - menuWidth - 10, rect.right - menuWidth));
                                                          }
                                                          setQueryMenuPos({ top, left });
                                                          setActiveQueryMenuId(item.id);
                                                        }
                                                      }}
                                                      style={{
                                                        width: '22px',
                                                        height: '22px',
                                                        borderRadius: '6px',
                                                        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(203, 213, 225, 0.8)',
                                                        background: activeQueryMenuId === item.id ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(29, 104, 242, 0.08)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#FFFFFF'),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                        color: theme === 'dark' ? '#FFFFFF' : '#64748B',
                                                        transition: 'all 0.15s ease'
                                                      }}
                                                    >
                                                      <MoreVertical size={12} />
                                                    </button>

                                                    {/* Dropdown Menu (Portal) */}
                                                    {activeQueryMenuId === item.id && createPortal(
                                                      <div
                                                        className="floating-history-dropdown"
                                                        onClick={(e) => e.stopPropagation()}
                                                        style={{
                                                          position: 'fixed',
                                                          top: `${queryMenuPos.top}px`,
                                                          left: `${queryMenuPos.left}px`,
                                                          width: '155px',
                                                          background: theme === 'dark' ? 'rgba(10, 24, 50, 0.96)' : 'rgba(255, 255, 255, 0.98)',
                                                          backdropFilter: 'blur(16px)',
                                                          borderRadius: '8px',
                                                          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.20)' : '1px solid rgba(226, 232, 240, 0.95)',
                                                          boxShadow: theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.60)' : '0 8px 24px rgba(0, 43, 91, 0.16)',
                                                          zIndex: 999999,
                                                          padding: '4px',
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          gap: '2px',
                                                          direction: lang === 'ar' ? 'rtl' : 'ltr'
                                                        }}
                                                      >
                                                        {/* 1. Run Query */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => handleRestoreSavedQuery(item)}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: theme === 'dark' ? '#F8FAFC' : '#002B5B',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(30, 64, 120, 0.80)' : '#EFF6FF')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Play size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} strokeWidth={2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.runQuery || 'Run Query'}</span>
                                                        </button>

                                                        {/* 2. Unpin Query */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => {
                                                            handleUnpinQuery(item);
                                                            setActiveQueryMenuId(null);
                                                          }}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: theme === 'dark' ? '#F8FAFC' : '#002B5B',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(30, 64, 120, 0.80)' : '#EFF6FF')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <PinOff size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>
                                                            {t.unpinQuery || 'Unpin Query'}
                                                          </span>
                                                        </button>

                                                        {/* 3. Rename */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => handleStartRenameQuery(item.id, item.title)}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: theme === 'dark' ? '#F8FAFC' : '#002B5B',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(30, 64, 120, 0.80)' : '#EFF6FF')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Edit2 size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.renameQuery || t.rename || 'Rename'}</span>
                                                        </button>

                                                        {/* 4. Delete */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item delete"
                                                          onClick={() => handleDeleteSavedQuery(item.id)}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: '#EF4444',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(239, 68, 68, 0.15)' : '#FEF2F2')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Trash2 size={13} color="#EF4444" />
                                                          <span style={{ fontWeight: 500, color: '#EF4444' }}>{t.deleteQuery || t.delete || 'Delete'}</span>
                                                        </button>
                                                      </div>,
                                                      document.body
                                                    )}
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Bottom Row: Places match badge + Category badge on left, Time on right */}
                                               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '6px' }}>
                                                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0, overflow: 'hidden', flexWrap: 'nowrap' }}>
                                                   <span
                                                      className="history-places-text"
                                                      style={{
                                                        fontSize: '10px',
                                                        fontWeight: 500,
                                                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.65)' : '#64748B',
                                                        whiteSpace: 'nowrap',
                                                        textAlign: lang === 'ar' ? 'right' : 'left'
                                                      }}
                                                    >
                                                      {t.placesMatch ? t.placesMatch(matchCount) : `${matchCount} ${lang === 'ar' ? 'أماكن متطابقة' : 'places match'}`}
                                                    </span>
                                                   <span
                                                     className="history-category-badge"
                                                     style={{
                                                       fontSize: '9.5px',
                                                       color: iconConfig.color,
                                                       background: iconConfig.badgeBg,
                                                       border: `1px solid ${iconConfig.border || 'transparent'}`,
                                                       padding: '1.5px 5.5px',
                                                       borderRadius: '4px',
                                                       fontWeight: 600,
                                                       display: 'inline-block',
                                                       whiteSpace: 'nowrap',
                                                       textAlign: lang === 'ar' ? 'right' : 'left'
                                                     }}
                                                   >
                                                     {t.getCatName(item.category || 'General')}
                                                   </span>
                                                 </div>
                                                 <span style={{ fontSize: '10px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : '#94A3B8', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                                   {t.timeAgo(item.timestamp || 'Just now')}
                                                 </span>
                                               </div>
                                            </div>
                                          );
                                        })}
                                    </div>
                                  )}
                                </div>

                                {/* 2. RECENTS SECTION (ACCORDION) */}
                                <div
                                  className="recents-queries-section"
                                  style={{
                                    flex: 1,
                                    minHeight: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {/* Accordion Header */}
                                  <div
                                    onClick={() => setIsRecentAccordionOpen(prev => !prev)}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      padding: '6px 8px',
                                      borderRadius: '6px',
                                      cursor: 'pointer',
                                      userSelect: 'none',
                                      transition: 'background 0.15s ease',
                                      flexShrink: 0,
                                      background: isRecentAccordionOpen
                                        ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.04)' : 'rgba(0, 75, 135, 0.03)')
                                        : 'transparent'
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                      <Clock size={12} color={theme === 'dark' ? '#38bdf8' : '#64748B'} />
                                      <span className="history-section-title" style={{ fontSize: '12px', fontWeight: 700, color: theme === 'dark' ? '#FFFFFF' : '#334155' }}>
                                        {t.recents || (lang === 'ar' ? 'الأخيرة' : 'Recents')}
                                      </span>
                                    </div>

                                    <div style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      transition: 'transform 0.2s ease',
                                      transform: isRecentAccordionOpen ? 'rotate(0deg)' : (lang === 'ar' ? 'rotate(90deg)' : 'rotate(-90deg)')
                                    }}>
                                      <ChevronDown size={14} color={theme === 'dark' ? 'rgba(255, 255, 255, 0.60)' : '#64748B'} />
                                    </div>
                                  </div>

                                  {isRecentAccordionOpen && (
                                    <div
                                      className="recents-queries-scroll-list"
                                      style={{
                                        flex: 1,
                                        minHeight: 0,
                                        overflowY: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '6px',
                                        paddingRight: lang === 'ar' ? '0' : '2px',
                                        paddingLeft: lang === 'ar' ? '2px' : '0'
                                      }}
                                    >
                                      {searchHistory
                                        .filter(item =>
                                          !historyFilterQuery ||
                                          (item.text && item.text.toLowerCase().includes(historyFilterQuery.toLowerCase())) ||
                                          (item.category && item.category.toLowerCase().includes(historyFilterQuery.toLowerCase()))
                                        )
                                        .map((item) => {
                                          const iconConfig = getCategoryIconForHistory(item.category || item.text);
                                          const matchCount = (typeof item.resultsCount === 'number' && item.resultsCount > 0)
                                            ? item.resultsCount
                                            : (typeof item.queryState?.resultsCount === 'number' && item.queryState.resultsCount > 0)
                                            ? item.queryState.resultsCount
                                            : (item.title || item.text || '').toLowerCase().includes('health') || (item.category || '').toLowerCase().includes('health') ? 9
                                            : (item.title || item.text || '').toLowerCase().includes('khalifa') || (item.category || '').toLowerCase().includes('gov') ? 12
                                            : (item.title || item.text || '').toLowerCase().includes('school') || (item.category || '').toLowerCase().includes('educ') ? 8
                                            : (item.title || item.text || '').toLowerCase().includes('park') || (item.category || '').toLowerCase().includes('park') ? 5
                                            : (item.title || item.text || '').toLowerCase().includes('bus') || (item.category || '').toLowerCase().includes('trans') ? 14
                                            : (item.title || item.text || '').toLowerCase().includes('drawn') || (item.category || '').toLowerCase().includes('drawn') ? 3
                                            : 8;
                                          return (
                                            <div
                                              key={item.id}
                                              className={`search-history-item ${activeHistoryMenuId === item.id ? 'has-active-menu' : ''}`}
                                              onClick={() => handleRunHistoryQuery(item)}
                                              style={{
                                                position: 'relative',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                width: '100%',
                                                boxSizing: 'border-box',
                                                padding: '10px 12px',
                                                height: '65px',
                                                minHeight: '65px',
                                                maxHeight: '65px',
                                                borderRadius: '8px',
                                                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.88)',
                                                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(226, 232, 240, 0.9)',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s ease',
                                                boxShadow: '0 1px 3px rgba(0, 43, 91, 0.03)',
                                                textAlign: lang === 'ar' ? 'right' : 'left'
                                              }}
                                            >
                                              {/* Top Row: Icon + Title + Action Buttons */}
                                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '6px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, minWidth: 0 }}>
                                                  <div
                                                    className="history-cat-icon-circle"
                                                    style={{
                                                      width: '22px',
                                                      height: '22px',
                                                      borderRadius: '50%',
                                                      background: iconConfig.bg,
                                                      border: `1px solid ${iconConfig.border || 'transparent'}`,
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      flexShrink: 0
                                                    }}
                                                  >
                                                    {iconConfig.icon}
                                                  </div>
                                                  {renamingHistoryId === item.id ? (
                                                    <div
                                                      style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%' }}
                                                      onClick={(e) => e.stopPropagation()}
                                                    >
                                                      <input
                                                        type="text"
                                                        value={renameHistoryText}
                                                        onChange={(e) => setRenameHistoryText(e.target.value)}
                                                        onKeyDown={(e) => {
                                                          if (e.key === 'Enter') handleSaveRenameHistory(item.id);
                                                          if (e.key === 'Escape') setRenamingHistoryId(null);
                                                        }}
                                                        autoFocus
                                                        style={{
                                                          flex: 1,
                                                          padding: '2px 5px',
                                                          fontSize: '11.5px',
                                                          borderRadius: '4px',
                                                          border: '1px solid #1D68F2',
                                                          outline: 'none',
                                                          background: '#FFFFFF',
                                                          color: '#002B5B',
                                                          textAlign: lang === 'ar' ? 'right' : 'left'
                                                        }}
                                                      />
                                                      <button
                                                        type="button"
                                                        onClick={() => handleSaveRenameHistory(item.id)}
                                                        style={{ padding: '2px 5px', background: '#1D68F2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '10.5px' }}
                                                      >
                                                        <Check size={11} />
                                                      </button>
                                                      <button
                                                        type="button"
                                                        onClick={() => setRenamingHistoryId(null)}
                                                        style={{ padding: '2px 5px', background: '#E2E8F0', color: '#475569', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '10.5px' }}
                                                      >
                                                        <X size={11} />
                                                      </button>
                                                    </div>
                                                  ) : (
                                                    <div
                                                      style={{
                                                        fontSize: '12px',
                                                        fontWeight: 600,
                                                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        lineHeight: '1.25',
                                                        textAlign: lang === 'ar' ? 'right' : 'left'
                                                      }}
                                                      title={lang === 'ar' ? getArabicTitle(item.text) : item.text}
                                                    >
                                                      {lang === 'ar' ? getArabicTitle(item.text) : item.text}
                                                    </div>
                                                  )}
                                                </div>

                                                {/* Action Buttons: Quick Pin + 3-Dot Dropdown */}
                                                <div className="history-action-buttons-group" style={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                                                  <button
                                                    type="button"
                                                    title={lang === 'ar' ? 'تثبيت الاستعلام' : 'Pin query'}
                                                    onClick={(e) => {
                                                      e.stopPropagation();
                                                      handlePinQuery(item);
                                                    }}
                                                    className="history-quick-action-btn"
                                                    style={{
                                                      width: '22px',
                                                      height: '22px',
                                                      borderRadius: '6px',
                                                      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(203, 213, 225, 0.8)',
                                                      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#FFFFFF',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      cursor: 'pointer',
                                                      color: theme === 'dark' ? '#FFFFFF' : '#64748B',
                                                      transition: 'all 0.15s ease'
                                                    }}
                                                  >
                                                    <Pin size={11} color={theme === 'dark' ? '#FFFFFF' : '#64748B'} />
                                                  </button>

                                                  <div className="history-menu-container" style={{ position: 'relative' }}>
                                                    <button
                                                      type="button"
                                                      title={lang === 'ar' ? 'خيارات السجل' : 'History Options'}
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (activeHistoryMenuId === item.id) {
                                                          setActiveHistoryMenuId(null);
                                                        } else {
                                                          const rect = e.currentTarget.getBoundingClientRect();
                                                          const menuWidth = 155;
                                                          const menuHeight = 145;
                                                          let top = rect.bottom + 4;
                                                          if (top + menuHeight > window.innerHeight - 10) {
                                                            top = Math.max(10, rect.top - menuHeight - 4);
                                                          }
                                                          let left;
                                                          if (lang === 'ar') {
                                                            left = Math.min(window.innerWidth - menuWidth - 10, Math.max(10, rect.left));
                                                          } else {
                                                            left = Math.max(10, Math.min(window.innerWidth - menuWidth - 10, rect.right - menuWidth));
                                                          }
                                                          setHistoryMenuPos({ top, left });
                                                          setActiveHistoryMenuId(item.id);
                                                        }
                                                      }}
                                                      style={{
                                                        width: '22px',
                                                        height: '22px',
                                                        borderRadius: '6px',
                                                        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(203, 213, 225, 0.8)',
                                                        background: activeHistoryMenuId === item.id ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(29, 104, 242, 0.08)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#FFFFFF'),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                        color: theme === 'dark' ? '#FFFFFF' : '#64748B',
                                                        transition: 'all 0.15s ease'
                                                      }}
                                                    >
                                                      <MoreVertical size={12} />
                                                    </button>

                                                    {/* Floating Portal Dropdown */}
                                                    {activeHistoryMenuId === item.id && createPortal(
                                                      <div
                                                        className="floating-history-dropdown"
                                                        onClick={(e) => e.stopPropagation()}
                                                        style={{
                                                          position: 'fixed',
                                                          top: `${historyMenuPos.top}px`,
                                                          left: `${historyMenuPos.left}px`,
                                                          width: '155px',
                                                          background: theme === 'dark' ? 'rgba(10, 24, 50, 0.96)' : 'rgba(255, 255, 255, 0.98)',
                                                          backdropFilter: 'blur(16px)',
                                                          borderRadius: '8px',
                                                          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.20)' : '1px solid rgba(226, 232, 240, 0.95)',
                                                          boxShadow: theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.60)' : '0 8px 24px rgba(0, 43, 91, 0.16)',
                                                          zIndex: 999999,
                                                          padding: '4px',
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          gap: '2px',
                                                          direction: lang === 'ar' ? 'rtl' : 'ltr'
                                                        }}
                                                      >
                                                        {/* 1. Run Query */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => handleRunHistoryQuery(item)}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: theme === 'dark' ? '#F8FAFC' : '#002B5B',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(30, 64, 120, 0.80)' : '#EFF6FF')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Play size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} strokeWidth={2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.runQuery || 'Run Query'}</span>
                                                        </button>

                                                        {/* 2. Pin Query */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => {
                                                            handlePinQuery(item);
                                                            setActiveHistoryMenuId(null);
                                                          }}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: theme === 'dark' ? '#F8FAFC' : '#002B5B',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(30, 64, 120, 0.80)' : '#EFF6FF')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Pin size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.pinned || 'Pin'}</span>
                                                        </button>

                                                        {/* 3. Rename */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => handleStartRenameHistory(item.id, item.text)}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: theme === 'dark' ? '#F8FAFC' : '#002B5B',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(30, 64, 120, 0.80)' : '#EFF6FF')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Edit2 size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.renameQuery || t.rename || 'Rename'}</span>
                                                        </button>

                                                        {/* 4. Delete */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item delete"
                                                          onClick={() => handleDeleteHistory(item.id)}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '6px 8px',
                                                            fontSize: '11.5px',
                                                            color: '#EF4444',
                                                            background: 'none',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                                            width: '100%',
                                                            transition: 'background 0.15s ease'
                                                          }}
                                                          onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(239, 68, 68, 0.15)' : '#FEF2F2')}
                                                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                                        >
                                                          <Trash2 size={13} color="#EF4444" />
                                                          <span style={{ fontWeight: 500, color: '#EF4444' }}>{t.deleteQuery || t.delete || 'Delete'}</span>
                                                        </button>
                                                      </div>,
                                                      document.body
                                                    )}
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Bottom Row: Places match badge + Category badge on left, Time on right */}
                                               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '6px' }}>
                                                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0, overflow: 'hidden', flexWrap: 'nowrap' }}>
                                                   <span
                                                      className="history-places-text"
                                                      style={{
                                                        fontSize: '10px',
                                                        fontWeight: 500,
                                                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.65)' : '#64748B',
                                                        whiteSpace: 'nowrap',
                                                        textAlign: lang === 'ar' ? 'right' : 'left'
                                                      }}
                                                    >
                                                      {t.placesMatch ? t.placesMatch(matchCount) : `${matchCount} ${lang === 'ar' ? 'أماكن متطابقة' : 'places match'}`}
                                                    </span>
                                                   <span
                                                     className="history-category-badge"
                                                     style={{
                                                       fontSize: '9.5px',
                                                       color: iconConfig.color,
                                                       background: iconConfig.badgeBg,
                                                       border: `1px solid ${iconConfig.border || 'transparent'}`,
                                                       padding: '1.5px 5.5px',
                                                       borderRadius: '4px',
                                                       fontWeight: 600,
                                                       display: 'inline-block',
                                                       whiteSpace: 'nowrap',
                                                       textAlign: lang === 'ar' ? 'right' : 'left'
                                                     }}
                                                   >
                                                     {t.getCatName(item.category || 'General')}
                                                   </span>
                                                 </div>
                                                 <span style={{ fontSize: '10px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : '#94A3B8', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                                   {t.timeAgo(item.timestamp || 'Just now')}
                                                 </span>
                                               </div>
                                            </div>
                                          );
                                        })}
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* MIDDLE CHAT / CONVERSATION STREAM AREA */}
                    <div ref={chatMessagesContainerRef} className="map-ai-panel-body" style={{
                      opacity: 1,
                      flex: 1,
                      margin: '4px 0',
                      padding: '4px 0px',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      width: '100%',
                      maxWidth: '100%',
                      minWidth: 0,
                      boxSizing: 'border-box'
                    }}>

                      <div className="map-ai-chat-stream" style={{
                        width: '100%',
                        maxWidth: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                        minHeight: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        {chatMessages
                          .filter(msg => {
                            const isRedundantSpec = msg.text && msg.text.includes('Here are the detailed spatial specifications');
                            if (isRedundantSpec && !msg.structuredResults && (!msg.chips || msg.chips.length === 0)) {
                              return false;
                            }
                            return true;
                          })
                          .map((msg, idx) => (
                            <div
                              key={idx}
                              className="chat-bubble-wrapper"
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '3px',
                                width: '100%',
                                flex: msg.id === 'welcome-init' && chatMessages.length === 1 ? 1 : 'none'
                              }}
                            >
                              {/* Active Spatial Boundary Badge for User Queries (if attached) */}
                                {msg.sender === 'user' && msg.drawnArea && (
                                  <div
                                    className="user-msg-spatial-boundary-badge"
                                    onClick={() => {
                                      setLastDrawnQuery(msg.drawnArea);
                                      setRestoredDrawnGeometry({ ...msg.drawnArea, trigger: Date.now() });
                                      showToast(lang === 'ar' ? 'تم إظهار المنطقة المحددة على الخريطة' : 'Showing drawn area on map');
                                    }}
                                    title={lang === 'ar' ? 'انقر لإظهار المنطقة على الخريطة' : 'Click to show drawn area on map'}
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '5px',
                                      padding: '2px 8px',
                                      borderRadius: '6px',
                                      background: theme === 'dark' ? 'rgba(56, 189, 248, 0.18)' : 'rgba(29, 104, 242, 0.10)',
                                      border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(29, 104, 242, 0.22)',
                                      fontSize: '10.5px',
                                      fontWeight: 600,
                                      color: theme === 'dark' ? '#38bdf8' : '#1D68F2',
                                      marginBottom: '2px',
                                      alignSelf: lang === 'ar' ? 'flex-start' : 'flex-end',
                                      cursor: 'pointer',
                                      transition: 'all 0.15s ease'
                                    }}
                                  >
                                    <span>
                                      {lang === 'ar' ? 'نطاق جغرافي: ' : 'Spatial Boundary: '}
                                      {getDrawnAreaLabel(msg.drawnArea, lang)}
                                    </span>
                                  </div>
                                )}

                                <div className={`chat-bubble ${msg.sender}`}>
                                   {msg.sender === 'user' ? (
                                   editingMessageIdx === idx ? (
                                     <div
                                       className="chat-bubble-content user-query-edit-container"
                                       style={{
                                         display: 'flex',
                                         flexDirection: 'column',
                                         gap: '8px'
                                       }}
                                     >
                                       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                         <div className="user-query-edit-header" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                           <Pencil size={13} strokeWidth={2.4} />
                                           <span>{t.editQuery || (lang === 'ar' ? 'تعديل الاستعلام' : 'Edit Query')}</span>
                                         </div>
                                         <span className="user-query-edit-hint">Enter ↵ to run</span>
                                       </div>
                                       <textarea
                                         className="user-query-edit-textarea"
                                         value={editingMessageText}
                                         onChange={(e) => setEditingMessageText(e.target.value)}
                                         onKeyDown={(e) => {
                                           if (e.key === 'Enter' && !e.shiftKey) {
                                             e.preventDefault();
                                             if (editingMessageText.trim()) {
                                               handleRunEditedQuery(editingMessageText, idx);
                                             }
                                           } else if (e.key === 'Escape') {
                                             setEditingMessageIdx(null);
                                           }
                                         }}
                                         autoFocus
                                         rows={2}
                                         placeholder={t.editingQueryPlaceholder || (lang === 'ar' ? 'تعديل نص الاستعلام...' : 'Edit search query...')}
                                       />
                                       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', marginTop: '2px' }}>
                                         <button
                                           type="button"
                                           className="user-query-cancel-btn"
                                           onClick={() => setEditingMessageIdx(null)}
                                         >
                                           <X size={12} strokeWidth={2.4} />
                                           <span>{t.cancel || (lang === 'ar' ? 'إلغاء' : 'Cancel')}</span>
                                         </button>
                                         <button
                                           type="button"
                                           className="user-query-run-btn"
                                           disabled={!editingMessageText.trim()}
                                           onClick={() => {
                                             if (editingMessageText.trim()) {
                                               handleRunEditedQuery(editingMessageText, idx);
                                             }
                                           }}
                                         >
                                           <Send size={12} strokeWidth={2.2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                                           <span>{t.runQuery || (lang === 'ar' ? 'تشغيل الاستعلام' : 'Run Query')}</span>
                                         </button>
                                       </div>
                                     </div>
                                   ) : (
                                     <div
                                       className="chat-bubble-content user-bubble-interactive"
                                       onClick={(e) => {
                                         if (e.target.closest('.edit-query-action-btn') || e.target.closest('button')) return;
                                         if (msg.drawnArea) {
                                           setLastDrawnQuery(msg.drawnArea);
                                           setRestoredDrawnGeometry({ ...msg.drawnArea, trigger: Date.now() });
                                           showToast(lang === 'ar' ? 'تم إظهار المنطقة المحددة على الخريطة' : 'Showing drawn area on map');
                                         }
                                       }}
                                       style={{
                                         display: 'flex',
                                         flexDirection: 'column',
                                         gap: '6px',
                                         position: 'relative',
                                         cursor: msg.drawnArea ? 'pointer' : 'default'
                                       }}
                                     >
                                       <div style={{ lineHeight: '1.45', wordBreak: 'break-word' }}>
                                         {cleanMarkdownText(msg.text)}
                                       </div>
                                       <div style={{
                                         display: 'flex',
                                         justifyContent: lang === 'ar' ? 'flex-start' : 'flex-end',
                                         marginTop: '2px'
                                       }}>
                                         <button
                                           type="button"
                                           className="edit-query-action-btn"
                                           onClick={() => {
                                             setEditingMessageIdx(idx);
                                             setEditingMessageText(msg.rawQuery || msg.text || '');
                                           }}
                                           title={t.editQuery || (lang === 'ar' ? 'تعديل الاستعلام' : 'Edit Query')}
                                           style={{
                                             background: 'rgba(255, 255, 255, 0.18)',
                                             border: '1px solid rgba(255, 255, 255, 0.35)',
                                             borderRadius: '6px',
                                             padding: '3px 8px',
                                             color: '#FFFFFF',
                                             fontSize: '11px',
                                             fontWeight: 500,
                                             cursor: 'pointer',
                                             display: 'inline-flex',
                                             alignItems: 'center',
                                             gap: '4px',
                                             backdropFilter: 'blur(8px)',
                                             transition: 'all 0.15s ease'
                                           }}
                                           onMouseEnter={(e) => {
                                             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.30)';
                                           }}
                                           onMouseLeave={(e) => {
                                             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                                           }}
                                         >
                                           <Pencil size={11} strokeWidth={2.2} />
                                           <span>{t.editQuery || (lang === 'ar' ? 'تعديل الاستعلام' : 'Edit Query')}</span>
                                         </button>
                                       </div>
                                     </div>
                                   )
                                ) : (
                                  <div className="chat-bubble-content" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {msg.isSearching ? (
                                      <div className="typing-indicator">
                                        <span className="typing-dot"></span>
                                        <span className="typing-dot"></span>
                                        <span className="typing-dot"></span>
                                      </div>
                                    ) : msg.text && !msg.text.includes('Here are the detailed spatial specifications') ? (
                                      <div
                                        style={{
                                          lineHeight: '1.45',
                                          cursor: (msg.drawnArea || lastDrawnQuery) ? 'pointer' : 'default'
                                        }}
                                        onClick={() => {
                                          const areaToRestore = msg.drawnArea || lastDrawnQuery;
                                          if (areaToRestore) {
                                            setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
                                          }
                                        }}
                                      >
                                        {cleanMarkdownText(msg.text)}
                                      </div>
                                    ) : null}

                                  {/* Clarification Options Box if Query was Ambiguous */}
                                  {msg.clarification && (
                                    <div className="structured-clarification-card" style={{
                                      marginTop: '6px',
                                      padding: '10px',
                                      borderRadius: '10px',
                                      background: 'rgba(255, 255, 255, 0.92)',
                                      border: '1px solid rgba(29, 104, 242, 0.25)',
                                      boxShadow: '0 4px 14px rgba(0, 43, 91, 0.08)',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '6px'
                                    }}>
                                      <div style={{ fontWeight: 600, fontSize: '12px', color: '#002B5B' }}>{cleanMarkdownText(msg.clarification.question)}</div>
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        {msg.clarification.options.map((opt, oIdx) => (
                                          <button
                                            key={oIdx}
                                            type="button"
                                            style={{
                                              textAlign: lang === 'ar' ? 'right' : 'left',
                                              padding: '6px 10px',
                                              borderRadius: '8px',
                                              background: 'rgba(29, 104, 242, 0.07)',
                                              border: '1px solid rgba(29, 104, 242, 0.18)',
                                              color: '#002B5B',
                                              fontSize: '11.5px',
                                              fontWeight: 500,
                                              cursor: 'pointer',
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '6px',
                                              transition: 'all 0.15s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(29, 104, 242, 0.15)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(29, 104, 242, 0.07)'}
                                            onClick={() => handleUnifiedSearch({ query: opt.query })}
                                          >
                                            <span>{opt.label}</span>
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Phase 4: Structured Analytics Card */}
                                  {msg.analytics && (
                                    <div
                                      className="structured-analytics-card"
                                      onClick={() => {
                                        const areaToRestore = msg.drawnArea || lastDrawnQuery;
                                        if (areaToRestore) {
                                          setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
                                        }
                                      }}
                                      style={{
                                        marginTop: '6px',
                                        padding: '10px 12px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        border: '1px solid rgba(29, 104, 242, 0.22)',
                                        boxShadow: '0 4px 14px rgba(0, 43, 91, 0.08)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                        boxSizing: 'border-box',
                                        cursor: (msg.drawnArea || lastDrawnQuery) ? 'pointer' : 'default'
                                      }}
                                    >
                                      <GeoVisionAnalyticsChart analytics={msg.analytics} lang={lang} theme={theme} />
                                    </div>
                                  )}

                                  {/* Structured Results Card Header & Body */}
                                  {msg.structuredResults && (
                                    <div className="structured-results-card">
                                      {/* Header Accordion */}
                                      <div
                                        className="structured-results-header"
                                        onClick={() => {
                                          setChatMessages(prev => prev.map((m, i) => i === idx ? { ...m, isExpanded: !m.isExpanded } : m));
                                          const areaToRestore = msg.drawnArea || lastDrawnQuery;
                                          if (areaToRestore) {
                                            setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
                                          }
                                        }}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        <div className="structured-results-title-group">
                                          <Sparkles size={15} className="structured-cat-icon" />
                                          <span className="structured-main-title">{msg.structuredResults.title}</span>
                                          <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>({msg.structuredResults.items.length})</span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                          <button
                                            type="button"
                                            className="structured-accordion-toggle"
                                            style={{
                                              background: 'transparent',
                                              border: 'none',
                                              outline: 'none',
                                              padding: '2px',
                                              cursor: 'pointer',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              color: theme === 'dark' ? '#38BDF8' : '#00468C',
                                              transform: msg.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease'
                                            }}
                                          >
                                            <ChevronDown size={18} strokeWidth={2.4} />
                                          </button>
                                        </div>
                                      </div>

                                      {/* Body Items List */}
                                      {msg.isExpanded && (
                                        <div className="structured-results-body">
                                          {/* Tab navigation pills with left/right arrows if multiple categories */}
                                          {msg.structuredResults.tabs && msg.structuredResults.tabs.length > 1 && (
                                            <StructuredTabsBar
                                              tabs={msg.structuredResults.tabs}
                                              activeTabId={msg.structuredResults.activeTabId}
                                              lang={lang}
                                              t={t}
                                              onTabSelect={(newTabId) => {
                                                setChatMessages(prev => prev.map((m, i) => {
                                                  if (i === idx) {
                                                    return {
                                                      ...m,
                                                      structuredResults: {
                                                        ...m.structuredResults,
                                                        activeTabId: newTabId
                                                      }
                                                    };
                                                  }
                                                  return m;
                                                }));
                                              }}
                                            />
                                          )}
                                          <div className="structured-items-list">
                                            {msg.structuredResults.items
                                              .filter(item => !msg.structuredResults.activeTabId || msg.structuredResults.tabs.length <= 1 || item.subcategory === msg.structuredResults.activeTabId)
                                              .map(item => (
                                                <div key={item.id} id={`structured-card-${item.id}`} className="structured-item-wrapper" style={{ width: '100%', marginBottom: '6px' }}>
                                                  <div
                                                    className={`structured-item-card ${item.showDetails ? 'expanded-details' : ''} ${selectedLocation && selectedLocation.id === item.id ? 'active-selected' : ''}`}
                                                    onClick={() => {
                                                      setSelectedLocation({ ...item, locateTrigger: Date.now() });
                                                      const areaToRestore = item.drawnArea || msg.drawnArea || lastDrawnQuery;
                                                      if (areaToRestore) {
                                                        setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
                                                      }
                                                    }}
                                                  >
                                                    {/* Card Main Row */}
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                                                      <div className="structured-item-info">
                                                        <div className="structured-item-title" title={lang === 'ar' ? (item.arabicTitle || getArabicTitle(item.title)) : item.title}>
                                                          {lang === 'ar' ? (item.arabicTitle || getArabicTitle(item.title)) : item.title}
                                                        </div>
                                                        <div className="structured-item-arabic">
                                                          {lang === 'ar' ? item.title : (item.arabicTitle || getArabicTitle(item.title))}
                                                        </div>
                                                      </div>

                                                      <div className="structured-item-actions">
                                                        <button
                                                          className={`structured-action-icon ${(item.isFavorite || favoritePlaces.some(p => p.id === item.id || p.title === item.title)) ? 'fav' : ''}`}
                                                          title={(item.isFavorite || favoritePlaces.some(p => p.id === item.id || p.title === item.title)) ? (lang === 'ar' ? 'إزالة من المفضلة' : "Remove from Favorites") : (lang === 'ar' ? 'إضافة إلى المفضلة' : "Add to Favorites")}
                                                          onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleToggleFavoritePlace(item);
                                                          }}
                                                        >
                                                          <Heart
                                                            size={15}
                                                            fill={(item.isFavorite || favoritePlaces.some(p => p.id === item.id || p.title === item.title)) ? "#EF4444" : "none"}
                                                          />
                                                        </button>

                                                        <button
                                                          className={`structured-action-icon ${item.showDetails ? 'active' : ''}`}
                                                          title={lang === 'ar' ? 'عرض التفاصيل' : "View Info"}
                                                          onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedLocation({ ...item, locateTrigger: Date.now() });
                                                            const areaToRestore = item.drawnArea || msg.drawnArea || lastDrawnQuery;
                                                            if (areaToRestore) {
                                                              setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
                                                            }
                                                            setChatMessages(prev => prev.map((m, i) => {
                                                              if (i === idx) {
                                                                const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, showDetails: !it.showDetails } : it);
                                                                return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                              }
                                                              return m;
                                                            }));
                                                          }}
                                                        >
                                                          <Info size={15} />
                                                        </button>

                                                        <button
                                                          className="structured-action-icon"
                                                          title={lang === 'ar' ? 'تكبير على الخريطة' : "Zoom to on Map"}
                                                          onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedLocation({ ...item, zoomTrigger: Date.now(), locateTrigger: Date.now() });
                                                            const areaToRestore = item.drawnArea || msg.drawnArea || lastDrawnQuery;
                                                            if (areaToRestore) {
                                                              setRestoredDrawnGeometry({ ...areaToRestore, trigger: Date.now() });
                                                            }
                                                            showToast(lang === 'ar' ? `تم التكبير إلى ${item.arabicTitle || getArabicTitle(item.title)}` : `Zoomed to ${item.title}`);
                                                          }}
                                                        >
                                                          <ZoomIn size={15} />
                                                        </button>
                                                      </div>
                                                    </div>

                                                    {/* In-Card Details Expanded Section with Overview and Details Subtabs */}
                                                    {item.showDetails && (
                                                      <div
                                                        className="structured-item-expanded-details"
                                                        onClick={(e) => e.stopPropagation()}
                                                      >
                                                        {/* SUB-TABS: Overview | Details */}
                                                        <div className="structured-subtabs-bar">
                                                          <button
                                                            type="button"
                                                            className={`structured-subtab-btn ${(item.activeDetailTab || 'overview') === 'overview' ? 'active' : ''}`}
                                                            onClick={(e) => {
                                                              e.stopPropagation();
                                                              setSelectedLocation({ ...item, locateTrigger: Date.now() });
                                                              setActiveRoute(null);
                                                              setIsNavigating(false);
                                                              setNavStepIndex(0);
                                                              setChatMessages(prev => prev.map((m, i) => {
                                                                if (i === idx) {
                                                                  const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'overview' } : it);
                                                                  return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                }
                                                                return m;
                                                              }));
                                                            }}
                                                          >
                                                            {t.overview || (lang === 'ar' ? 'نظرة عامة' : 'Overview')}
                                                          </button>

                                                          <button
                                                            type="button"
                                                            className={`structured-subtab-btn ${(item.activeDetailTab || 'overview') === 'details' ? 'active' : ''}`}
                                                            onClick={(e) => {
                                                              e.stopPropagation();
                                                              setSelectedLocation({ ...item, locateTrigger: Date.now() });
                                                              setActiveRoute(null);
                                                              setIsNavigating(false);
                                                              setNavStepIndex(0);
                                                              setChatMessages(prev => prev.map((m, i) => {
                                                                if (i === idx) {
                                                                  const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'details' } : it);
                                                                  return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                }
                                                                return m;
                                                              }));
                                                            }}
                                                          >
                                                            {t.details || (lang === 'ar' ? 'التفاصيل' : 'Details')}
                                                          </button>

                                                          {item.lat != null && item.lon != null && !isNaN(item.lat) && !isNaN(item.lon) && (
                                                            <button
                                                              type="button"
                                                              className={`structured-subtab-btn ${(item.activeDetailTab || 'overview') === 'route' ? 'active' : ''}`}
                                                              onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedLocation({ ...item, locateTrigger: Date.now() });
                                                                handleCalculateRoute(item, travelMode, false);
                                                                setChatMessages(prev => prev.map((m, i) => {
                                                                  if (i === idx) {
                                                                    const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'route' } : it);
                                                                    return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                  }
                                                                  return m;
                                                                }));
                                                              }}
                                                            >
                                                              {t.route || (lang === 'ar' ? 'المسار' : 'Route')}
                                                            </button>
                                                          )}
                                                        </div>

                                                        {/* OVERVIEW TAB CONTENT */}
                                                        {(item.activeDetailTab || 'overview') === 'overview' && (
                                                          <div className="structured-overview-pane">
                                                            {/* Address */}
                                                            <div className="structured-overview-address">
                                                              <MapPin size={15} className="structured-overview-icon" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                              <span>{lang === 'ar' ? (item.arabicAddress || item.address || 'المشرف، أبوظبي، الإمارات العربية المتحدة') : item.address}</span>
                                                            </div>

                                                            {/* Website */}
                                                            {item.website && (
                                                              <div className="structured-overview-website">
                                                                <Globe size={15} className="structured-overview-icon" style={{ flexShrink: 0 }} />
                                                                <a
                                                                  href={item.website}
                                                                  target="_blank"
                                                                  rel="noreferrer"
                                                                  className="structured-overview-link"
                                                                  onClick={(e) => e.stopPropagation()}
                                                                >
                                                                  {item.website}
                                                                </a>
                                                              </div>
                                                            )}

                                                            {/* Contact Email & Phone */}
                                                            <div className="structured-overview-contacts">
                                                              {item.email && (
                                                                <div className="structured-contact-item">
                                                                  <Mail size={15} className="structured-overview-icon" style={{ flexShrink: 0 }} />
                                                                  <a href={`mailto:${item.email}`} className="structured-contact-link email-link" onClick={(e) => e.stopPropagation()}>
                                                                    {item.email}
                                                                  </a>
                                                                </div>
                                                              )}
                                                              {(item.phone || item.contact) && (
                                                                <div className="structured-contact-item">
                                                                  <Phone size={15} className="structured-overview-icon" style={{ flexShrink: 0 }} />
                                                                  <a href={`tel:${item.phone || item.contact}`} className="structured-contact-link phone-link" onClick={(e) => e.stopPropagation()}>
                                                                    {item.phone || item.contact}
                                                                  </a>
                                                                </div>
                                                              )}
                                                            </div>

                                                            {/* Horizontal Divider */}
                                                            <div className="structured-overview-divider" />

                                                            {/* AI Recommendation Header */}
                                                            <div className="structured-recom-header">
                                                              <Sparkles size={14} className="structured-sparkle-icon" style={{ flexShrink: 0 }} />
                                                              <span>{lang === 'ar' ? 'لماذا يعتبر هذا خياراً مناسباً لك' : "Here's why this is a good option for you"}</span>
                                                            </div>

                                                            {/* Dynamic Category Highlight Chips */}
                                                            <div className="structured-chips-list">
                                                              {getLocationCategoryDetails(item).chips.map((chip, cIdx) => (
                                                                <div key={cIdx} className="structured-chip-pill">
                                                                  <span className="structured-chip-label">{chip.label}:</span> <span className="structured-chip-val">{chip.value}</span>
                                                                </div>
                                                              ))}
                                                            </div>
                                                          </div>
                                                        )}

                                                        {/* DETAILS TAB CONTENT */}
                                                        {(item.activeDetailTab || 'overview') === 'details' && (
                                                          <div className="structured-specs-table">
                                                            {getLocationCategoryDetails(item).rows.map((row, rIdx) => (
                                                              <div
                                                                key={rIdx}
                                                                className={`structured-specs-row ${rIdx % 2 === 0 ? 'even' : 'odd'}`}
                                                              >
                                                                <div className="structured-specs-label">
                                                                  {row.label}
                                                                </div>
                                                                <div className="structured-specs-colon">:</div>
                                                                <div className="structured-specs-value">
                                                                  <div>{row.value}</div>
                                                                  {row.subValue && (
                                                                    <div className="structured-specs-subvalue">
                                                                      {row.subValue}
                                                                    </div>
                                                                  )}
                                                                </div>
                                                              </div>
                                                            ))}
                                                          </div>
                                                        )}

                                                        {/* ROUTE TAB CONTENT */}
                                                        {(item.activeDetailTab || 'overview') === 'route' && (
                                                          renderRouteDetailsPane(item)
                                                        )}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  </div>
                                )}
                              </div>

                                {/* AI Smart Exploration & Follow-up Suggestion Chips Placed OUTSIDE the Chat Bubble */}
                                {msg.sender === 'ai' && msg.chips && msg.chips.length > 0 && (msg.id !== 'welcome-init' || chatMessages.length === 1) && (
                                  <div
                                    className="ai-message-followup-container"
                                    style={{
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      alignItems: 'center',
                                      justifyContent: msg.id === 'welcome-init' ? 'center' : 'flex-start',
                                      gap: '8px',
                                      marginTop: msg.id === 'welcome-init' ? 'auto' : '8px',
                                      marginBottom: msg.id === 'welcome-init' ? '12px' : '6px',
                                      padding: msg.id === 'welcome-init' ? '14px 6px 4px 6px' : '0 4px',
                                      width: '100%',
                                      boxSizing: 'border-box'
                                    }}
                                  >
                                    {msg.id === 'welcome-init' && (
                                      <div style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : '#004B87',
                                        marginBottom: '6px',
                                        opacity: 0.9
                                      }}>
                                        {t.quickSuggestions || (lang === 'ar' ? 'اقتراحات سريعة' : 'Quick Suggestions')}
                                      </div>
                                    )}
                                    {msg.chips.map((chip, cIdx) => {
                                      const cleanLabel = (chip.label || '')
                                        .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2B50}\u{2605}\u{FE0F}\u{200D}\u{25A0}-\u{25FF}\u{2300}-\u{23FF}★⭐✨]/gu, '')
                                        .trim();
                                      return (
                                        <button
                                          key={cIdx}
                                          type="button"
                                          className="structured-radius-chip-btn"
                                          style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '7px',
                                            padding: '6px 12px',
                                            borderRadius: '8px',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            transition: 'all 0.15s ease',
                                            textAlign: lang === 'ar' ? 'right' : 'left',
                                            whiteSpace: 'nowrap'
                                          }}
                                          onClick={() => {
                                            if (chip.action === 'save_search') {
                                              handleSaveCurrentSearch(msg);
                                            } else if (chip.action === 'add_favorite' && chip.payload) {
                                              handleToggleFavoritePlace(chip.payload);
                                            } else if (chip.action === 'open_url' && chip.url) {
                                              window.open(chip.url, '_blank', 'noopener,noreferrer');
                                            } else if (chip.action === 'show_route' && chip.feature) {
                                              setSelectedLocation({ ...chip.feature, zoomTrigger: Date.now(), locateTrigger: Date.now() });
                                              setActiveDetailTab('route');
                                            } else if (chip.action === 'request_location') {
                                              handleLocateUser(
                                                (coords) => {
                                                  handleUnifiedSearch({ query: chip.pendingQuery || searchQuery, userLocationOverride: coords, locationPermissionDeniedOverride: false });
                                                },
                                                (err) => {
                                                  handleUnifiedSearch({ query: chip.pendingQuery || searchQuery, userLocationOverride: null, locationPermissionDeniedOverride: true });
                                                }
                                              );
                                            } else {
                                              handleUnifiedSearch({ query: chip.query || cleanLabel });
                                            }
                                          }}
                                        >
                                          {getChipIcon(chip)}
                                          <span>{cleanLabel}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* BOTTOM SEARCH INPUT BAR */}
                      <form
                        className={`landing-search-container ${searchBoxDrawnAttachment ? 'has-drawn-area' : ''}`}
                        style={{
                          margin: '0 0 4px 0',
                          width: '100%',
                          maxWidth: '100%',
                          flex: '0 0 auto',
                          height: 'auto',
                          minHeight: searchBoxDrawnAttachment ? '88px' : '46px',
                          borderRadius: '14px',
                          position: 'relative',
                          padding: searchBoxDrawnAttachment ? '8px 8px 8px 10px' : '0 6px 0 8px',
                          boxSizing: 'border-box',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: searchBoxDrawnAttachment ? '6px' : '0',
                          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          const q = (aiSearchQuery || '').trim();
                          if (q) {
                            setAiSearchQuery('');
                            setSearchQuery('');
                            setSearchBoxDrawnAttachment(null);
                            setShowPlusMenu(false);
                            handleUnifiedSearch({ query: q });
                          }
                        }}
                      >
                        {/* TOP SECTION: Attached Drawn Area Card */}
                        {searchBoxDrawnAttachment && (
                          <div
                            className="search-box-drawn-area-card"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '3px 6px 3px 10px',
                              borderRadius: '8px',
                              background: theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(29, 104, 242, 0.08)',
                              border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(29, 104, 242, 0.22)',
                              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                              boxSizing: 'border-box',
                              cursor: 'default'
                            }}
                          >
                            <span
                              style={{
                                fontSize: '11.5px',
                                fontWeight: 600,
                                color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
                                lineHeight: 1.2,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}
                            >
                              {getDrawnAreaLabel(searchBoxDrawnAttachment, lang)}
                            </span>

                            <button
                              type="button"
                              className="search-box-drawn-close-btn"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleClearDrawnArea();
                              }}
                              title={lang === 'ar' ? 'إلغاء تحديد النطاق' : 'Remove spatial boundary'}
                              style={{
                                color: theme === 'dark' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 23, 42, 0.65)'
                              }}
                            >
                              <X size={12} strokeWidth={2.2} />
                            </button>
                          </div>
                        )}

                        {/* BOTTOM SECTION: Input Row with Sparkle Loader & Submit Button */}
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '4px' }}>
                          {/* Animated AI Sparkle Orb Icon (Matching Home Page) */}
                          <div className="search-star-loader-wrapper" style={{ width: '28px', height: '28px', marginRight: lang === 'ar' ? '0' : '4px', marginLeft: lang === 'ar' ? '4px' : '0', flexShrink: 0 }}>
                            <div className="search-star-loader"></div>
                            <FourPointStar className="landing-search-sparkle" size={15} />
                          </div>

                          <div className="landing-search-separator" style={{ margin: '0 6px 0 2px', height: '18px' }} />

                          <input
                            type="text"
                            className="landing-search-input"
                            placeholder={t.searchPlaceholder || (lang === 'ar' ? 'اسأل الخريطة الذكية أي شيء...' : 'Ask Smart Map Anything...')}
                            value={aiSearchQuery}
                            onChange={(e) => setAiSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                const q = (aiSearchQuery || '').trim();
                                if (q) {
                                  setAiSearchQuery('');
                                  setSearchQuery('');
                                  setSearchBoxDrawnAttachment(null);
                                  setShowPlusMenu(false);
                                  handleUnifiedSearch({ query: q });
                                }
                              }
                            }}
                            onFocus={() => { if (panelHeight <= 100) setPanelHeight(200); }}
                            style={{ fontSize: '13px', flex: 1 }}
                          />
                          <div className="landing-search-btn-wrapper">
                            <button type="submit" className="landing-search-btn-pill" disabled={!aiSearchQuery.trim()}>
                              <span className="search-btn-text">{t.searchBtn || (lang === 'ar' ? 'بحث' : 'Search')}</span>
                              <Send size={15} className="search-btn-icon" style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )
                )}
              </div>
            </div>
          </div>
        </aside>
      )}
    </section>
  </main>
      {/* AUTHENTICATION MODAL OVERLAY OVER MAP */}
      <AuthModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
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
        isOverlay={true}
      />

      {/* PRINT & PDF EXPORT MODAL */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        config={printModalConfig}
        activeSearchResults={activeSearchResults}
        selectedLocation={selectedLocation}
        activeAnalytics={printModalConfig.analytics || [...chatMessages].reverse().find(m => m.analytics)?.analytics || null}
        currentQuery={searchQuery || aiSearchQuery}
        currentCategory={activeSearchFilterTag?.category || ''}
        lang={lang}
        mapInstanceRef={mapInstanceRef}
        activeBasemap={activeBasemap}
        legendItems={getDynamicLegendItems()}
        theme={theme}
      />

      {/* FLOATING FEEDBACK BUTTON */}
      <FloatingFeedbackButton
        onClick={() => setIsFeedbackOpen(true)}
        lang={lang}
        theme={theme}
        isFeedbackOpen={isFeedbackOpen}
      />

      {/* FEEDBACK MODAL */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        lang={lang}
        theme={theme}
        showToast={showToast}
        currentUser={currentUser}
      />

      <Toast toastMessage={toastMessage} />
    </div>
  );
}

export default App;
