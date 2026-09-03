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
  Shield,
  Eye,
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
  Save
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { spatialAIEngineInstance, searchSpatialData, GEOVISION_SPATIAL_DATASET, executeDrawnAreaSpatialQuery } from './services/spatialSearchService.js';
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
import LandingPage from './pages/LandingPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [authState, setAuthState] = useState('login');
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState('villa-royale');
  const [activeTab, setActiveTab] = useState('history'); // 'history' | 'collections' | 'layers' | 'analysis' | 'projects'
  const [collectionsTab, setCollectionsTab] = useState('queries'); // 'queries' | 'favorites'
  const [collectionsFilterQuery, setCollectionsFilterQuery] = useState('');
  const DEFAULT_SAVED_QUERIES = [
    {
      id: 'sq-1',
      title: 'Schools within 2 km in Abu Dhabi',
      category: 'Education',
      resultsCount: 8,
      timestamp: 'Just now',
      createdAt: Date.now() - 60000,
      isFavorite: false,
      queryState: {
        query: 'Schools within 2 km in Abu Dhabi',
        category: 'Education',
        selectedSubcategories: { 'Public Schools': true, 'Private Schools': true },
        spatialType: 'text'
      }
    },
    {
      id: 'sq-2',
      title: 'Hospitals & Medical Centers near Khalifa City',
      category: 'Healthcare',
      resultsCount: 14,
      timestamp: '10 min ago',
      createdAt: Date.now() - 600000,
      isFavorite: false,
      queryState: {
        query: 'Hospitals & Medical Centers near Khalifa City',
        category: 'Healthcare',
        selectedSubcategories: { 'Hospitals': true, 'Medical Centers': true },
        spatialType: 'text'
      }
    },
    {
      id: 'sq-3',
      title: 'Healthcare facilities within drawn area',
      category: 'Healthcare',
      resultsCount: 13,
      timestamp: 'Yesterday',
      createdAt: Date.now() - 86400000,
      isFavorite: false,
      queryState: {
        query: '',
        category: 'Healthcare',
        selectedSubcategories: { 'Hospitals': true, 'Clinics': true, 'Pharmacies': true },
        spatialType: 'draw',
        drawnGeometry: {
          geometryType: 'polygon',
          coordinates: [
            [24.460, 54.340],
            [24.490, 54.360],
            [24.480, 54.410],
            [24.440, 54.390]
          ]
        }
      }
    },
    {
      id: 'sq-4',
      title: 'Commercial Development Zones - High Traffic',
      category: 'Industrial',
      resultsCount: 6,
      timestamp: '3 days ago',
      createdAt: Date.now() - 259200000,
      isFavorite: false,
      queryState: {
        query: 'Commercial Development Zones',
        category: 'Industrial',
        selectedSubcategories: {},
        spatialType: 'text'
      }
    },
    {
      id: 'sq-5',
      title: 'Public Parks & Recreation Facilities',
      category: 'Environment',
      resultsCount: 9,
      timestamp: 'May 12',
      createdAt: Date.now() - 500000000,
      isFavorite: false,
      queryState: {
        query: 'Public Parks & Recreation Facilities',
        category: 'Environment',
        selectedSubcategories: { 'Public Parks': true, 'Nature Reserves': true },
        spatialType: 'text'
      }
    }
  ];

  const DEFAULT_SEARCH_HISTORY = [
    { id: 1, text: 'Schools within 2 km', category: 'Education', resultsCount: 12, timestamp: 'Just now', queryState: { query: 'Schools within 2 km', category: 'Education' } },
    { id: 2, text: 'Hospitals Near Me', category: 'Healthcare', resultsCount: 18, timestamp: '12 min ago', queryState: { query: 'Hospitals Near Me', category: 'Healthcare' } },
    { id: 3, text: 'Government Offices', category: 'Government', resultsCount: 25, timestamp: '2 hours ago', queryState: { query: 'Government Offices', category: 'Government' } },
    { id: 4, text: 'Restaurants', category: 'Food & Dining', resultsCount: 32, timestamp: 'Yesterday', queryState: { query: 'Restaurants', category: 'Food & Dining' } },
    { id: 5, text: 'Hospitals Near Me', category: 'Healthcare', resultsCount: 18, timestamp: 'Yesterday', queryState: { query: 'Hospitals Near Me', category: 'Healthcare' } },
    { id: 6, text: 'Find Schools near Khalifa city', category: 'Education', resultsCount: 9, timestamp: 'Yesterday', queryState: { query: 'Find Schools near Khalifa city', category: 'Education' } },
    { id: 7, text: 'Commercial Development Zones', category: 'Industrial', resultsCount: 6, timestamp: '2 days ago', queryState: { query: 'Commercial Development Zones', category: 'Industrial' } },
    { id: 8, text: 'Public parks in abu dhabi', category: 'Environment', resultsCount: 14, timestamp: '3 days ago', queryState: { query: 'Public parks in abu dhabi', category: 'Environment' } }
  ];

  const DEFAULT_FAVORITE_PLACES = [
    {
      id: 'fav-1',
      title: 'Dubai Aluminium (DUBAL) Jebel Ali',
      category: 'Industrial',
      subcategory: 'Industrial Area',
      area: 'Jebel Ali Industrial Area',
      lat: 25.011,
      lon: 55.105,
      coords: [25.011, 55.105],
      timestamp: 'Just now',
      isFavorite: true
    },
    {
      id: 'fav-2',
      title: 'Emirates Global Aluminium (EGA) Taweelah',
      category: 'Industrial',
      subcategory: 'Industrial Zone',
      area: 'Al Taweelah Industrial Zone',
      lat: 24.786,
      lon: 54.712,
      coords: [24.786, 54.712],
      timestamp: 'Just now',
      isFavorite: true
    }
  ];

  const [savedQueries, setSavedQueries] = useState(() => {
    try {
      const saved = localStorage.getItem('geovision_saved_queries');
      return saved ? JSON.parse(saved) : DEFAULT_SAVED_QUERIES;
    } catch {
      return DEFAULT_SAVED_QUERIES;
    }
  });

  const [favoritePlaces, setFavoritePlaces] = useState(() => {
    try {
      const saved = localStorage.getItem('geovision_favorite_places');
      return saved ? JSON.parse(saved) : DEFAULT_FAVORITE_PLACES;
    } catch {
      return DEFAULT_FAVORITE_PLACES;
    }
  });

  const [searchHistory, setSearchHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('geovision_search_history');
      return saved ? JSON.parse(saved) : DEFAULT_SEARCH_HISTORY;
    } catch {
      return DEFAULT_SEARCH_HISTORY;
    }
  });

  // Persist collections & history changes across browser refresh
  useEffect(() => {
    try {
      localStorage.setItem('geovision_saved_queries', JSON.stringify(savedQueries));
    } catch (e) {
      console.warn('Could not persist saved queries to localStorage', e);
    }
  }, [savedQueries]);

  useEffect(() => {
    try {
      localStorage.setItem('geovision_favorite_places', JSON.stringify(favoritePlaces));
    } catch (e) {
      console.warn('Could not persist favorite places to localStorage', e);
    }
  }, [favoritePlaces]);

  useEffect(() => {
    try {
      localStorage.setItem('geovision_search_history', JSON.stringify(searchHistory));
    } catch (e) {
      console.warn('Could not persist search history to localStorage', e);
    }
  }, [searchHistory]);

  const [restoredDrawnGeometry, setRestoredDrawnGeometry] = useState(null);
  const [activeQueryMenuId, setActiveQueryMenuId] = useState(null);
  const [renamingQueryId, setRenamingQueryId] = useState(null);
  const [renameQueryText, setRenameQueryText] = useState('');
  const [isRecentAccordionOpen, setIsRecentAccordionOpen] = useState(true);
  const [historyFilterQuery, setHistoryFilterQuery] = useState('');
  const [activeHistoryId, setActiveHistoryId] = useState(1);
  const [activeHistoryMenuId, setActiveHistoryMenuId] = useState(null);
  const [historyMenuPos, setHistoryMenuPos] = useState({ top: 0, left: 0 });
  const [queryMenuPos, setQueryMenuPos] = useState({ top: 0, left: 0 });
  const [renamingHistoryId, setRenamingHistoryId] = useState(null);
  const [renameHistoryText, setRenameHistoryText] = useState('');

  // Left strip floating popovers & basemap selection
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
    const text = ((chip.label || '') + ' ' + (chip.query || '') + ' ' + (chip.category || '')).toLowerCase();
    
    if (text.includes('what if') || text.includes('suitab') || text.includes('ai') || text.includes('grow') || text.includes('simulat') || text.includes('score') || text.includes('ماذا لو') || text.includes('ذكاء') || text.includes('ملاءمة') || text.includes('أثر')) {
      return <Sparkles size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('school') || text.includes('edu') || text.includes('nursery') || text.includes('univ') || text.includes('college') || text.includes('student') || text.includes('مدارس') || text.includes('حضانة') || text.includes('تعليم')) {
      return <GraduationCap size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('clinic') || text.includes('hosp') || text.includes('pharm') || text.includes('health') || text.includes('med') || text.includes('doctor') || text.includes('مستشف') || text.includes('عياد') || text.includes('صيدل') || text.includes('طوارئ') || text.includes('emergency')) {
      return <Heart size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('power') || text.includes('energy') || text.includes('util') || text.includes('solar') || text.includes('electric') || text.includes('grid') || text.includes('طاقة') || text.includes('كهرباء')) {
      return <Zap size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('park') || text.includes('tree') || text.includes('green') || text.includes('env') || text.includes('mangrove') || text.includes('garden') || text.includes('حدائق') || text.includes('محميات') || text.includes('هواء') || text.includes('بيئة')) {
      return <Trees size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('bus') || text.includes('transit') || text.includes('metro') || text.includes('traffic') || text.includes('car') || text.includes('road') || text.includes('نقل') || text.includes('حافلات') || text.includes('مسارات')) {
      return <Car size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('gov') || text.includes('admin') || text.includes('police') || text.includes('safe') || text.includes('municip') || text.includes('حكوم') || text.includes('أمان')) {
      return <Shield size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    if (text.includes('build') || text.includes('plot') || text.includes('construct') || text.includes('real estate') || text.includes('villa') || text.includes('مبان') || text.includes('بناء')) {
      return <Building size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
    }
    return <Compass size={13} color="#004B87" strokeWidth={1.8} style={{ flexShrink: 0 }} />;
  };

  const getDynamicQuickStartChips = () => {
    if (lang === 'ar') {
      if (selectedLocation) {
        const cat = (selectedLocation.category || selectedLocation.matchType || '').toLowerCase();
        if (cat.includes('health') || cat.includes('hosp') || cat.includes('clinic')) {
          return [
            { label: 'صيدليات قريبة', query: `Pharmacies near ${selectedLocation.title}` },
            { label: 'نطاق طوارئ (5 كم)', query: 'Emergency response radius 5km' },
            { label: 'أثر عيادة (+20% سكان)', query: 'What if population grows 20% and we add a clinic?' },
            { label: 'زمن وصول المرضى', query: 'Compare patient access time in this district' },
            { label: 'العيادات (5 كم)', query: 'Clinics within 5km' }
          ];
        }
        if (cat.includes('edu') || cat.includes('school')) {
          return [
            { label: 'مسارات النقل', query: `Transit routes near ${selectedLocation.title}` },
            { label: 'المدارس (2 كم)', query: 'Schools within 2km' },
            { label: 'الحضانات (15 كم)', query: 'Nurseries within 15km' },
            { label: 'معابر المشاة الآمنة', query: 'Pedestrian safe zones near schools' },
            { label: 'مدارس الشراكة', query: 'Charter schools in Abu Dhabi' }
          ];
        }
        if (cat.includes('park') || cat.includes('env')) {
          return [
            { label: 'الحدائق (3 كم)', query: 'Public parks within 3km' },
            { label: 'المساحات الخضراء', query: 'Green space coverage analysis' },
            { label: 'المحميات الطبيعية', query: 'Protected areas and nature reserves' },
            { label: 'جودة الهواء', query: 'Air quality stations in Abu Dhabi' }
          ];
        }
      }

      const lastQuery = (searchQuery || '').toLowerCase();
      if (lastQuery.includes('health') || lastQuery.includes('clinic') || lastQuery.includes('hosp')) {
        return [
          { label: 'أقرب العيادات', query: 'Show me the nearest clinics' },
          { label: 'موقع عيادة جديد (15 د)', query: 'Find the best place for a new clinic within 15 minutes' },
          { label: 'ملاءمة الصيدليات ذكاء', query: 'Generate an AI suitability layer for pharmacies' },
          { label: 'أثر عيادة (+20% سكان)', query: 'What if population grows 20% and we add a clinic?' },
          { label: 'المستشفيات (5 كم)', query: 'Hospitals within 5km' }
        ];
      }
      if (lastQuery.includes('school') || lastQuery.includes('edu')) {
        return [
          { label: 'المدارس (2 كم)', query: 'Schools within 2km' },
          { label: 'الحضانات (15 كم)', query: 'Nurseries within 15km' },
          { label: 'مدارس الشراكة', query: 'Charter schools in Khalifa City' },
          { label: 'تعليم متصل بالنقل', query: 'Education hubs with high public transit access' }
        ];
      }

      return [
        { label: 'المدارس (2 كم)', query: 'Schools within 2km' },
        { label: 'أثر عيادة (+20% سكان)', query: 'What if population grows 20% and we add a clinic?' },
        { label: 'الحضانات (15 كم)', query: 'Nurseries within 15km' },
        { label: 'محطات الكهرباء (20 كم)', query: 'Power stations within 20km' },
        { label: 'موقع عيادة (15 د)', query: 'Find the best place for a new clinic within 15 minutes' },
        { label: 'أقرب العيادات', query: 'Show me the nearest clinics' },
        { label: 'ملاءمة الصيدليات ذكاء', query: 'Generate an AI suitability layer for pharmacies' }
      ];
    }

    // 1. If a specific location is selected
    if (selectedLocation) {
      const cat = (selectedLocation.category || selectedLocation.matchType || '').toLowerCase();
      if (cat.includes('health') || cat.includes('hosp') || cat.includes('clinic')) {
        return [
          { label: 'Pharmacies Nearby', query: `Pharmacies near ${selectedLocation.title}` },
          { label: 'Emergency Radius (5km)', query: 'Emergency response radius 5km' },
          { label: '+20% Pop. Clinic Impact', query: 'What if population grows 20% and we add a clinic?' },
          { label: 'Access Time Analysis', query: 'Compare patient access time in this district' },
          { label: 'Clinics (5km)', query: 'Clinics within 5km' }
        ];
      }
      if (cat.includes('edu') || cat.includes('school')) {
        return [
          { label: 'Transit Routes', query: `Transit routes near ${selectedLocation.title}` },
          { label: 'Schools (2km)', query: 'Schools within 2km' },
          { label: 'Nurseries (15km)', query: 'Nurseries within 15km' },
          { label: 'Pedestrian Safe Zones', query: 'Pedestrian safe zones near schools' },
          { label: 'Charter Schools', query: 'Charter schools in Abu Dhabi' }
        ];
      }
      if (cat.includes('park') || cat.includes('env')) {
        return [
          { label: 'Parks (3km)', query: 'Public parks within 3km' },
          { label: 'Green Space Coverage', query: 'Green space coverage analysis' },
          { label: 'Nature Reserves', query: 'Protected areas and nature reserves' },
          { label: 'Air Quality Stations', query: 'Air quality stations in Abu Dhabi' }
        ];
      }
    }

    // 2. If recent search query or search results are active
    const lastQuery = (searchQuery || '').toLowerCase();
    if (lastQuery.includes('health') || lastQuery.includes('clinic') || lastQuery.includes('hosp')) {
      return [
        { label: 'Nearest Clinics', query: 'Show me the nearest clinics' },
        { label: 'New Clinic Site (15m)', query: 'Find the best place for a new clinic within 15 minutes' },
        { label: 'Pharmacy Suitability', query: 'Generate an AI suitability layer for pharmacies' },
        { label: '+20% Pop. Clinic Impact', query: 'What if population grows 20% and we add a clinic?' },
        { label: 'Hospitals (5km)', query: 'Hospitals within 5km' }
      ];
    }
    if (lastQuery.includes('school') || lastQuery.includes('edu')) {
      return [
        { label: 'Schools (2km)', query: 'Schools within 2km' },
        { label: 'Nurseries (15km)', query: 'Nurseries within 15km' },
        { label: 'Charter Schools', query: 'Charter schools in Khalifa City' },
        { label: 'Transit-Linked Education', query: 'Education hubs with high public transit access' }
      ];
    }

    // 3. Default high-value multi-domain exploratory chips
    return [
      { label: 'Schools (2km)', query: 'Schools within 2km' },
      { label: '+20% Pop. Clinic Impact', query: 'What if population grows 20% and we add a clinic?' },
      { label: 'Nurseries (15km)', query: 'Nurseries within 15km' },
      { label: 'Power Stations (20km)', query: 'Power stations within 20km' },
      { label: 'New Clinic Site (15m)', query: 'Find the best place for a new clinic within 15 minutes' },
      { label: 'Nearest Clinics', query: 'Show me the nearest clinics' },
      { label: 'Pharmacy Suitability', query: 'Generate an AI suitability layer for pharmacies' }
    ];
  };

  const getDynamicLegendItems = () => {
    const items = [];

    // 1. Active Category selections
    const activeSubcatKeys = Object.keys(selectedSubcategories || {}).filter(k => selectedSubcategories[k]);
    if (activeSubcatKeys.length > 0) {
      const activeCatsMap = {};
      CATEGORY_TREE.forEach(cat => {
        const activeSubs = cat.subcategories.filter(s => !!selectedSubcategories[s]);
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

  const getInitialWelcomeMessage = () => ({
    id: 'welcome-init',
    sender: 'ai',
    text: lang === 'ar'
      ? 'مرحباً! يمكنني مساعدتك في العثور على الأماكن القريبة وتحليل البيانات المكانية في إمارة أبوظبي (المستشفيات، المدارس، العيادات، الحدائق، والمزيد). جرب كتابة استفسار أو النقر على الاقتراحات السريعة أدناه.'
      : 'Hi! I can find nearby places — hospitals, clinics, schools, pharmacies, parks, airports, and more — around your location. Ask for a full report on any category, or check layers in the category bar and say "generate a report". Try Quick Start or ask directly, e.g. "hospitals within 5km".'
  });

  const [isAIPanelExpanded, setIsAIPanelExpanded] = useState(false);
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [chatMessages, setChatMessages] = useState([getInitialWelcomeMessage()]);

  // Keep starting welcome message in sync when user toggles between Arabic and English
  useEffect(() => {
    setChatMessages(prev => {
      if (prev.length === 1 && (prev[0].id === 'welcome-init' || prev[0].text?.includes('Hi! I can find nearby') || prev[0].text?.includes('مرحباً! يمكنني مساعدتك'))) {
        return [getInitialWelcomeMessage()];
      }
      return prev;
    });
  }, [lang]);

  const handleNewChat = () => {
    setChatMessages([getInitialWelcomeMessage()]);
    setActiveSearchResults([]);
    setSelectedLocation(null);
    setAiSearchQuery('');
    setSearchQuery('');
    showToast(lang === 'ar' ? 'تم بدء محادثة جديدة' : 'New Chat Started');
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
        !event.target.closest('.map-controls-left-strip')
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

  // Spatial Search Results States
  const [activeSearchResults, setActiveSearchResults] = useState([]);
  const [activeSearchFilterTag, setActiveSearchFilterTag] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeDetailTab, setActiveDetailTab] = useState('overview');
  const [isDetailsMinimized, setIsDetailsMinimized] = useState(false);
  const [lastDrawnQuery, setLastDrawnQuery] = useState(null);

  const autoSaveSpatialQuery = ({
    title,
    category = 'Spatial Search',
    selectedSubcategories = {},
    spatialType = 'text',
    drawnGeometry = null,
    resultsCount = 0
  }) => {
    if (!title && !category) return;
    const cleanTitle = (title || category).trim();
    const newId = `sq-${Date.now()}`;

    setSavedQueries(prev => {
      const existing = prev.find(q => q.title.toLowerCase() === cleanTitle.toLowerCase());
      const isFav = existing ? existing.isFavorite : false;
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

    setSearchHistory(prev => [
      { id: Date.now(), text: cleanTitle, timestamp: 'Just now' },
      ...prev.filter(item => item.text.toLowerCase() !== cleanTitle.toLowerCase())
    ]);
  };

  const handleDrawnAreaSpatialQuery = (drawData) => {
    setLastDrawnQuery(drawData);
    setSelectedLocation(null);

    // Capture active subcategories / categories
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

    // Automatically open AI Spatial Search panel to display results
    setIsAISearchBarOpen(true);
    setAiState('panel');
    if (panelHeight <= 100) setPanelHeight(280);

    const searchId = Date.now() + Math.random();
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: queryResult.userQueryText },
      { sender: 'ai', isSearching: true, id: searchId }
    ]);

    // Automatically save drawn spatial query to Saved Queries & History
    autoSaveSpatialQuery({
      title: queryResult.userQueryText,
      category: activeKeys.length > 0 ? activeKeys.join(', ') : 'Drawn Area',
      selectedSubcategories: selectedSubcategories,
      spatialType: 'draw',
      drawnGeometry: drawData,
      resultsCount: queryResult.count
    });

    addLog('AI Spatial Engine', `[DRAWN AREA] Spatial query executed: ${queryResult.count} matched in drawn geometry`, 'success');
    showToast(`Drawn Area Query: Found ${queryResult.count} matching features`);

    setTimeout(() => {
      setChatMessages(prev => prev.map(msg =>
        msg.id === searchId
          ? {
            sender: 'ai',
            text: queryResult.aiMessageText,
            structuredResults: queryResult.structuredResults,
            isExpanded: true,
            id: searchId
          }
          : msg
      ));
    }, 400);
  };

  const handleClearDrawnArea = () => {
    setLastDrawnQuery(null);
    setRestoredDrawnGeometry(null);
    setActiveSearchResults([]);
    setActiveSearchFilterTag(null);
    setSelectedLocation(null);
    addLog('AI Spatial Engine', 'Spatial query area cleared', 'info');
  };

  const handleRunHistoryQuery = (item) => {
    if (!item) return;
    setActiveHistoryMenuId(null);
    setActiveHistoryId(item.id);
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

  const handleSaveHistoryToQueries = (item) => {
    setActiveHistoryMenuId(null);
    autoSaveSpatialQuery({
      title: item.text,
      category: item.category || 'Spatial Search',
      selectedSubcategories: {},
      spatialType: 'text',
      resultsCount: item.resultsCount || 12
    });
    showToast(`Saved "${item.text}" to Saved Queries`);
  };

  const handleRestoreSavedQuery = (item) => {
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
      handleDrawnAreaSpatialQuery(queryState.drawnGeometry);
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

  const handleToggleFavoriteQuery = (id) => {
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
    if (mapInstanceRef.current && (item.coords || (item.lat && item.lon))) {
      const targetCoords = item.coords || [item.lat, item.lon];
      mapInstanceRef.current.flyTo(targetCoords, 15);
    }
    setSelectedLocation({
      ...item,
      lat: item.lat || item.coords?.[0],
      lon: item.lon || item.coords?.[1],
      isFavorite: true,
      zoomTrigger: Date.now(),
      locateTrigger: Date.now()
    });
    showToast(`Navigated to ${item.title}`);
  };

  const getCategoryIconForHistory = (category = '', size = 11) => {
    const cat = (category || '').toLowerCase();
    if (cat.includes('educ') || cat.includes('school')) {
      return {
        icon: <GraduationCap size={size} color="#2563EB" />,
        bg: 'rgba(37, 99, 235, 0.10)',
        color: '#2563EB',
        badgeBg: 'rgba(37, 99, 235, 0.08)'
      };
    }
    if (cat.includes('health') || cat.includes('hosp') || cat.includes('medic') || cat.includes('clinic')) {
      return {
        icon: <Heart size={size} color="#0284C7" fill="none" strokeWidth={2} />,
        bg: 'rgba(2, 132, 199, 0.10)',
        color: '#0284C7',
        badgeBg: 'rgba(2, 132, 199, 0.08)'
      };
    }
    if (cat.includes('gov') || cat.includes('admin') || cat.includes('civic') || cat.includes('ministry')) {
      return {
        icon: <Building size={size} color="#7C3AED" />,
        bg: 'rgba(124, 58, 237, 0.10)',
        color: '#7C3AED',
        badgeBg: 'rgba(124, 58, 237, 0.08)'
      };
    }
    if (cat.includes('rest') || cat.includes('food') || cat.includes('din') || cat.includes('cafe')) {
      return {
        icon: <Utensils size={size} color="#EA580C" />,
        bg: 'rgba(234, 88, 12, 0.10)',
        color: '#EA580C',
        badgeBg: 'rgba(234, 88, 12, 0.08)'
      };
    }
    if (cat.includes('trans') || cat.includes('air') || cat.includes('port') || cat.includes('bus')) {
      return {
        icon: <Car size={size} color="#0D9488" />,
        bg: 'rgba(13, 148, 136, 0.10)',
        color: '#0D9488',
        badgeBg: 'rgba(13, 148, 136, 0.08)'
      };
    }
    if (cat.includes('park') || cat.includes('env') || cat.includes('green') || cat.includes('nature')) {
      return {
        icon: <Trees size={size} color="#16A34A" />,
        bg: 'rgba(22, 163, 74, 0.10)',
        color: '#16A34A',
        badgeBg: 'rgba(22, 163, 74, 0.08)'
      };
    }
    return {
      icon: <Search size={size} color="#1D68F2" />,
      bg: 'rgba(29, 104, 242, 0.10)',
      color: '#1D68F2',
      badgeBg: 'rgba(29, 104, 242, 0.08)'
    };
  };



  const handleUnifiedSearch = (searchOptions = {}) => {
    setSelectedLocation(null);
    if (panelHeight <= 100) setPanelHeight(200);
    const { query = searchQuery, category = '', displayLabel = '' } = searchOptions;
    const cleanQuery = typeof query === 'string' ? query.trim() : '';
    const cleanCategory = typeof category === 'string' ? category.trim() : '';

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

    // Spatial GIS NLP Engine Processing with active Language Context
    const engineRes = spatialAIEngineInstance.processNaturalLanguageQuery(cleanQuery, cleanCategory, lang);
    const results = engineRes.results || [];
    setSelectedLocation(null);
    setActiveSearchResults(results);

    const tagLabel = cleanCategory || cleanQuery || 'All Locations';
    setActiveSearchFilterTag({ query: cleanQuery, category: cleanCategory, label: tagLabel });
    setShowMap(true);

    const count = results.length;
    addLog('AI Spatial Engine', `[${engineRes.intent.toUpperCase()}] ${engineRes.querySummary || `${count} matched`}`, 'success');

    // Auto-save successful query to Saved Queries & History
    autoSaveSpatialQuery({
      title: cleanQuery || cleanCategory,
      category: cleanCategory || (results[0]?.category) || 'Spatial Search',
      selectedSubcategories: selectedSubcategories,
      spatialType: 'text',
      resultsCount: count
    });

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
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: userBubbleText },
      { sender: 'ai', isSearching: true, id: searchId }
    ]);

    setTimeout(() => {
      setChatMessages(prev => prev.map(msg =>
        msg.id === searchId
          ? {
            sender: 'ai',
            text: engineRes.aiMessageText,
            structuredResults: engineRes.structuredResults || null,
            clarification: engineRes.clarification || null,
            isExpanded: true,
            chips: engineRes.chips || [],
            id: searchId
          }
          : msg
      ));
    }, 450);
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

  // Synchronize category multi-selection directly with plotted map features & active drawn area query
  useEffect(() => {
    const activeKeys = Object.keys(selectedSubcategories).filter(k => selectedSubcategories[k]);

    // If an active drawn spatial query exists, re-filter the drawn area dynamically!
    if (lastDrawnQuery) {
      const queryResult = executeDrawnAreaSpatialQuery({
        ...lastDrawnQuery,
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

      const searchId = Date.now() + Math.random();
      setChatMessages(prev => [
        ...prev,
        { sender: 'user', text: queryResult.userQueryText },
        {
          sender: 'ai',
          text: queryResult.aiMessageText,
          structuredResults: queryResult.structuredResults,
          isExpanded: true,
          id: searchId
        }
      ]);
      return;
    }

    if (activeKeys.length === 0) {
      if (activeSearchFilterTag?.category) {
        setActiveSearchResults([]);
        setActiveSearchFilterTag(null);
      }
      return;
    }

    const matched = GEOVISION_SPATIAL_DATASET.filter(item => {
      return activeKeys.some(key => {
        const kLower = key.toLowerCase().trim();
        const itemSub = (item.subcategory || '').toLowerCase().trim();
        const itemCat = (item.category || '').toLowerCase().trim();
        return itemSub === kLower ||
          itemSub.includes(kLower) ||
          kLower.includes(itemSub) ||
          itemCat === kLower ||
          itemCat.includes(kLower);
      });
    });

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

    // 1. Highlight the selected feature on the map and open Detailed Information sidebar
    setSelectedLocation({ ...feature, locateTrigger: Date.now() });
    setActiveDetailTab('overview');

    // 2. Do NOT open AI panel on map click; close AI panel if open so only Detailed Information shows
    setIsAISearchBarOpen(false);
    setIsAiClosing(false);

    addLog('Map Feature Click', `Selected feature '${feature.title}' (${feature.category || 'GIS Record'})`, 'info');
    showToast(`Inspecting: ${feature.title}`);
  };

  const handleSearchSubmit = (query = searchQuery) => {
    handleUnifiedSearch({ query });
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

  if (!showMap) {
    if (isAboutUsOpen) {
      return (
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
          t={t}
          handleSearchSubmit={handleSearchSubmit}
          showToast={showToast}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveTab={setActiveTab}
        />
      );
    }

    return (
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
        isSignInOpen={isSignInOpen}
        setIsSignInOpen={setIsSignInOpen}
        authState={authState}
        setAuthState={setAuthState}
        isAboutUsOpen={isAboutUsOpen}
        setIsAboutUsOpen={setIsAboutUsOpen}
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
      />
    );
  }

  return (
    <div className="app-container">

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
        t={t}
        handleSearchSubmit={handleSearchSubmit}
        showToast={showToast}
        setIsSidebarOpen={setIsSidebarOpen}
        setActiveTab={setActiveTab}
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

        {/* SIDEBAR PANEL (TOGGLABLE - DOCKED TO LEFT SIDE IN LTR, RIGHT SIDE IN RTL) */}
        {isSidebarOpen && (
          <aside
            className="map-left-history-panel-wrapper"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: lang === 'ar' ? 'auto' : 0,
              right: lang === 'ar' ? 0 : 'auto',
              height: '100%',
              width: `${leftHistoryWidth}px`,
              minWidth: '260px',
              maxWidth: '550px',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              userSelect: isDraggingLeftResize ? 'none' : 'auto',
              transition: isDraggingLeftResize ? 'none' : 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* DRAGGABLE RESIZE DIVIDER / HANDLE ON INNER EDGE (RIGHT in LTR, LEFT in RTL) */}
            <div
              className={`left-panel-resize-handle ${isDraggingLeftResize ? 'dragging' : ''}`}
              onPointerDown={handleLeftResizePointerDown}
              title={lang === 'ar' ? 'اسحب لتغيير حجم اللوحة' : 'Drag left/right to resize Search History'}
              style={{
                left: lang === 'ar' ? 0 : 'auto',
                right: lang === 'ar' ? 'auto' : 0
              }}
            >
              <div className="resize-handle-grip" />
            </div>

            {/* DEDICATED PULSATING WHITE INNER GLOW OVERLAY */}
            <div className="category-drawer-inner-glow" style={{ borderRadius: 0, clipPath: 'none' }} />

            <div className="map-left-history-panel-container">
              {/* INDEPENDENT REDUCED OPACITY BACKGROUND IMAGE OVERLAY */}
              <div className="map-ai-panel-bg-img" style={{ opacity: 0.12 }} />

              {/* TAB 0: SEARCH HISTORY */}
              {activeTab === 'history' && (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                  {/* PANEL HEADER WITH TITLE & CLOSE BUTTON */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      minHeight: '36px',
                      marginBottom: '14px',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#0F172A',
                        margin: 0,
                        padding: 0,
                        lineHeight: '1.2',
                        fontFamily: 'Outfit, Inter, sans-serif',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {t.history || (lang === 'ar' ? 'سجل البحث' : 'Search History')}
                    </h2>

                    <button
                      className="search-history-toggle-btn"
                      onClick={() => setIsSidebarOpen(false)}
                      title={lang === 'ar' ? 'إغلاق اللوحة' : 'Close History Panel'}
                      style={{
                        background: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.85)',
                        borderRadius: '8px',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#004B87',
                        boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <X size={16} color="#004B87" strokeWidth={2.4} />
                    </button>
                  </div>

                  {/* SEARCH FILTER INPUT BAR */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      marginBottom: '12px',
                      zIndex: 2
                    }}
                  >
                    <input
                      type="text"
                      className="search-history-filter-input"
                      placeholder={t.filterHistoryPlaceholder || (lang === 'ar' ? 'البحث في سجل البحث...' : 'Search')}
                      value={historyFilterQuery}
                      onChange={(e) => setHistoryFilterQuery(e.target.value)}
                      style={{
                        width: '100%',
                        height: '38px',
                        padding: lang === 'ar' ? '0 12px 0 34px' : '0 34px 0 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        background: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '13px',
                        color: '#0F172A',
                        outline: 'none',
                        boxSizing: 'border-box',
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

                  {/* RECENT SEARCHES LIST */}
                  <div
                    className="search-history-list"
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      paddingRight: lang === 'ar' ? '0' : '2px',
                      paddingLeft: lang === 'ar' ? '2px' : '0',
                      zIndex: 2
                    }}
                  >
                    {searchHistory
                      .filter(item =>
                        !historyFilterQuery ||
                        item.text.toLowerCase().includes(historyFilterQuery.toLowerCase()) ||
                        (item.category && item.category.toLowerCase().includes(historyFilterQuery.toLowerCase()))
                      )
                      .map((item) => {
                        const isActive = activeHistoryId === item.id;
                        const iconConfig = getCategoryIconForHistory(item.category || item.text);

                        return (
                          <div
                            key={item.id}
                            className={`search-history-item ${isActive ? 'active-history-item' : ''}`}
                            onClick={() => {
                              setActiveHistoryId(item.id);
                              handleUnifiedSearch({ query: item.text, category: item.category });
                              setIsAISearchBarOpen(true);
                              setPanelHeight(200);
                            }}
                            style={{
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '10px 12px',
                              borderRadius: '10px',
                              background: isActive ? 'rgba(235, 243, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
                              border: isActive ? '1.5px solid #3B82F6' : '1px solid rgba(226, 232, 240, 0.85)',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              boxShadow: isActive ? '0 2px 8px rgba(29, 104, 242, 0.10)' : '0 1px 3px rgba(0, 43, 91, 0.03)',
                              gap: '5px',
                              textAlign: lang === 'ar' ? 'right' : 'left'
                            }}
                          >
                            {/* Top Row: Small Icon + Title on left, 3-Dot Button on right */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flex: 1, minWidth: 0 }}>
                                {/* Small Category Icon aligned with title */}
                                <div
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: iconConfig.bg,
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
                                        padding: '3px 6px',
                                        fontSize: '12px',
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
                                      style={{ padding: '3px 6px', background: '#1D68F2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
                                    >
                                      <Check size={12} />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setRenamingHistoryId(null)}
                                      style={{ padding: '3px 6px', background: '#E2E8F0', color: '#475569', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
                                    >
                                      <X size={12} />
                                    </button>
                                  </div>
                                ) : (
                                  <div
                                    style={{
                                      fontSize: '12.5px',
                                      fontWeight: 600,
                                      color: '#0F172A',
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      lineHeight: '1.3',
                                      textAlign: lang === 'ar' ? 'right' : 'left'
                                    }}
                                    title={lang === 'ar' ? getArabicTitle(item.text) : item.text}
                                  >
                                    {lang === 'ar' ? getArabicTitle(item.text) : item.text}
                                  </div>
                                )}
                              </div>

                              {/* Right: 3-Dot Menu Button Container */}
                              <div className="history-menu-container" style={{ position: 'relative', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                                <button
                                  type="button"
                                  title={lang === 'ar' ? 'خيارات الاستعلام' : "Query Options"}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (activeHistoryMenuId === item.id) {
                                      setActiveHistoryMenuId(null);
                                    } else {
                                      const rect = e.currentTarget.getBoundingClientRect();
                                      if (lang === 'ar') {
                                        setHistoryMenuPos({ top: rect.top - 4, left: Math.max(10, rect.left - 155) });
                                      } else {
                                        setHistoryMenuPos({ top: rect.top - 4, left: rect.right + 10 });
                                      }
                                      setActiveHistoryMenuId(item.id);
                                    }
                                  }}
                                  style={{
                                    width: '26px',
                                    height: '26px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(203, 213, 225, 0.8)',
                                    background: activeHistoryMenuId === item.id ? 'rgba(29, 104, 242, 0.08)' : '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#64748B',
                                    transition: 'all 0.15s ease'
                                  }}
                                >
                                  <MoreVertical size={13} />
                                </button>

                                {/* Floating Dropdown Menu (Rendered directly into Body to float outside all frames) */}
                                {activeHistoryMenuId === item.id && createPortal(
                                  <div
                                    className="floating-history-dropdown"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                      position: 'fixed',
                                      top: `${historyMenuPos.top}px`,
                                      left: `${historyMenuPos.left}px`,
                                      width: '150px',
                                      background: 'rgba(255, 255, 255, 0.98)',
                                      backdropFilter: 'blur(16px)',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(226, 232, 240, 0.95)',
                                      boxShadow: '0 8px 24px rgba(0, 43, 91, 0.16)',
                                      zIndex: 999999,
                                      padding: '4px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '2px',
                                      direction: lang === 'ar' ? 'rtl' : 'ltr'
                                    }}
                                  >
                                    {/* 1. Save Query */}
                                    <button
                                      type="button"
                                      onClick={() => handleSaveHistoryToQueries(item)}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '6px 8px',
                                        fontSize: '11.5px',
                                        color: '#002B5B',
                                        background: 'none',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        textAlign: lang === 'ar' ? 'right' : 'left',
                                        width: '100%',
                                        transition: 'background 0.15s ease'
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#EFF6FF')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Bookmark size={13} color="#004B87" strokeWidth={2} />
                                      <span style={{ fontWeight: 500, color: '#002B5B' }}>{t.saveQuery}</span>
                                    </button>

                                    {/* 2. Run Query */}
                                    <button
                                      type="button"
                                      onClick={() => handleRunHistoryQuery(item)}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '6px 8px',
                                        fontSize: '11.5px',
                                        color: '#002B5B',
                                        background: 'none',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        textAlign: lang === 'ar' ? 'right' : 'left',
                                        width: '100%',
                                        transition: 'background 0.15s ease'
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#EFF6FF')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Play size={13} color="#004B87" strokeWidth={2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                                      <span style={{ fontWeight: 500, color: '#002B5B' }}>{t.runQuery}</span>
                                    </button>

                                    {/* 3. Rename */}
                                    <button
                                      type="button"
                                      onClick={() => handleStartRenameHistory(item.id, item.text)}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '6px 8px',
                                        fontSize: '11.5px',
                                        color: '#002B5B',
                                        background: 'none',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        textAlign: lang === 'ar' ? 'right' : 'left',
                                        width: '100%',
                                        transition: 'background 0.15s ease'
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#EFF6FF')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Edit size={13} color="#004B87" strokeWidth={2} />
                                      <span style={{ fontWeight: 500, color: '#002B5B' }}>{t.rename}</span>
                                    </button>

                                    <div style={{ height: '1px', background: '#E2E8F0', margin: '2px 0' }} />

                                    {/* 5. Delete */}
                                    <button
                                      type="button"
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
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#FEF2F2')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Trash2 size={13} color="#EF4444" />
                                      <span style={{ fontWeight: 500, color: '#EF4444' }}>{t.delete}</span>
                                    </button>
                                  </div>,
                                  document.body
                                )}
                              </div>
                            </div>

                            {/* Middle Row: Category tag (totally left-aligned flush with results in LTR, right-aligned in RTL) */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', paddingLeft: 0, paddingRight: 0, margin: 0 }}>
                              <span
                                style={{
                                  fontSize: '10px',
                                  color: iconConfig.color,
                                  background: iconConfig.badgeBg,
                                  padding: '1.5px 7px',
                                  borderRadius: '4px',
                                  fontWeight: 600,
                                  display: 'inline-block',
                                  textAlign: lang === 'ar' ? 'right' : 'left'
                                }}
                              >
                                {t.getCatName(item.category || 'General')}
                              </span>
                            </div>

                            {/* Bottom Row: Results on left, Time on right */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '1px' }}>
                              <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                                {t.resultsCount(item.resultsCount || 12)}
                              </span>
                              <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>
                                {t.timeAgo(item.timestamp || 'Just now')}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

            {/* TAB: MY COLLECTIONS */}
            {activeTab === 'collections' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                {/* PANEL HEADER WITH TITLE & CLOSE BUTTON */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    minHeight: '36px',
                    marginBottom: '14px',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <h2
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: 0,
                      padding: 0,
                      lineHeight: '1.2',
                      fontFamily: 'Outfit, Inter, sans-serif',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {t.collections || (lang === 'ar' ? 'مجموعاتي' : 'My Collections')}
                  </h2>

                  <button
                    className="search-history-toggle-btn"
                    onClick={() => setIsSidebarOpen(false)}
                    title={lang === 'ar' ? 'إغلاق اللوحة' : 'Close Collections Panel'}
                    style={{
                      background: 'rgba(255, 255, 255, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.85)',
                      borderRadius: '8px',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#004B87',
                      boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <X size={16} color="#004B87" strokeWidth={2.4} />
                  </button>
                </div>

                {/* SUB-TABS: SAVED QUERIES & FAVORITES (Clean Underline Style) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    borderBottom: '1.5px solid rgba(226, 232, 240, 0.95)',
                    marginBottom: '14px',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    zIndex: 2,
                    width: '100%'
                  }}
                >
                  <button
                    type="button"
                    className={`collections-tab-btn ${collectionsTab === 'queries' ? 'active' : ''}`}
                    onClick={() => setCollectionsTab('queries')}
                  >
                    <span>{t.savedQueries || (lang === 'ar' ? 'الاستعلامات المحفوظة' : 'Saved Queries')}</span>
                    <span style={{ fontSize: '12px', fontWeight: collectionsTab === 'queries' ? 700 : 500 }}>
                      ({savedQueries.length})
                    </span>
                  </button>

                  <button
                    type="button"
                    className={`collections-tab-btn ${collectionsTab === 'favorites' ? 'active' : ''}`}
                    onClick={() => setCollectionsTab('favorites')}
                  >
                    <span>{t.favorites || (lang === 'ar' ? 'المفضلة' : 'Favorites')}</span>
                    <span style={{ fontSize: '12px', fontWeight: collectionsTab === 'favorites' ? 700 : 500 }}>
                      ({savedQueries.filter(q => q.isFavorite).length + favoritePlaces.length})
                    </span>
                  </button>
                </div>

                {/* SEARCH FILTER INPUT BAR */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    marginBottom: '12px',
                    zIndex: 2
                  }}
                >
                  <input
                    type="text"
                    className="search-history-filter-input"
                    placeholder={collectionsTab === 'queries' ? (t.filterSavedPlaceholder || (lang === 'ar' ? 'البحث في المحفوظات...' : "Search saved queries...")) : (t.filterFavPlaceholder || (lang === 'ar' ? 'البحث في المفضلة...' : "Search favorites..."))}
                    value={collectionsFilterQuery}
                    onChange={(e) => setCollectionsFilterQuery(e.target.value)}
                    style={{
                      width: '100%',
                      height: '38px',
                      padding: lang === 'ar' ? '0 12px 0 34px' : '0 34px 0 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      background: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '13px',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
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

                {/* SAVED QUERIES OR FAVORITES LIST */}
                <div
                  className="search-history-list"
                  style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    paddingRight: lang === 'ar' ? '0' : '2px',
                    paddingLeft: lang === 'ar' ? '2px' : '0',
                    zIndex: 2
                  }}
                >
                  {collectionsTab === 'queries' &&
                    savedQueries
                      .filter(item =>
                        !collectionsFilterQuery ||
                        item.title.toLowerCase().includes(collectionsFilterQuery.toLowerCase()) ||
                        (item.category && item.category.toLowerCase().includes(collectionsFilterQuery.toLowerCase()))
                      )
                      .map((item) => {
                        const iconConfig = getCategoryIconForHistory(item.category || item.title);
                        return (
                          <div
                            key={item.id}
                            className="search-history-item"
                            onClick={() => handleRestoreSavedQuery(item)}
                            style={{
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '10px 12px',
                              borderRadius: '10px',
                              background: 'rgba(255, 255, 255, 0.85)',
                              border: '1px solid rgba(226, 232, 240, 0.85)',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              boxShadow: '0 1px 3px rgba(0, 43, 91, 0.03)',
                              gap: '5px',
                              textAlign: lang === 'ar' ? 'right' : 'left'
                            }}
                          >
                            {/* Top Row: Small Category Icon + Title on left, 3-Dot Button on right */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flex: 1, minWidth: 0 }}>
                                {/* Small Category Icon aligned with title */}
                                <div
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: iconConfig.bg,
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
                                        padding: '3px 6px',
                                        fontSize: '12px',
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
                                      style={{ padding: '3px 6px', background: '#1D68F2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
                                    >
                                      <Check size={12} />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setRenamingQueryId(null)}
                                      style={{ padding: '3px 6px', background: '#E2E8F0', color: '#475569', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
                                    >
                                      <X size={12} />
                                    </button>
                                  </div>
                                ) : (
                                  <div
                                    style={{
                                      fontSize: '12.5px',
                                      fontWeight: 600,
                                      color: '#0F172A',
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
                                )}
                              </div>

                              {/* Right: 3-Dot Menu Button Container (No star button) */}
                              <div className="query-menu-container" style={{ position: 'relative', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                                <button
                                  type="button"
                                  title={lang === 'ar' ? 'خيارات الاستعلام' : "Query Options"}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (activeQueryMenuId === item.id) {
                                      setActiveQueryMenuId(null);
                                    } else {
                                      const rect = e.currentTarget.getBoundingClientRect();
                                      if (lang === 'ar') {
                                        setQueryMenuPos({ top: rect.top - 4, left: Math.max(10, rect.left - 155) });
                                      } else {
                                        setQueryMenuPos({ top: rect.top - 4, left: rect.right + 10 });
                                      }
                                      setActiveQueryMenuId(item.id);
                                    }
                                  }}
                                  style={{
                                    width: '26px',
                                    height: '26px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(203, 213, 225, 0.8)',
                                    background: activeQueryMenuId === item.id ? 'rgba(29, 104, 242, 0.08)' : '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#64748B',
                                    transition: 'all 0.15s ease'
                                  }}
                                >
                                  <MoreVertical size={13} />
                                </button>

                                {/* Dropdown Menu (Rendered directly into Body to float outside all frames) */}
                                {activeQueryMenuId === item.id && createPortal(
                                  <div
                                    className="floating-history-dropdown"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                      position: 'fixed',
                                      top: `${queryMenuPos.top}px`,
                                      left: `${queryMenuPos.left}px`,
                                      width: '150px',
                                      background: 'rgba(255, 255, 255, 0.98)',
                                      backdropFilter: 'blur(16px)',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(226, 232, 240, 0.95)',
                                      boxShadow: '0 8px 24px rgba(0, 43, 91, 0.16)',
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
                                      onClick={() => handleRestoreSavedQuery(item)}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '6px 8px',
                                        fontSize: '11.5px',
                                        color: '#002B5B',
                                        background: 'none',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        textAlign: lang === 'ar' ? 'right' : 'left',
                                        width: '100%',
                                        transition: 'background 0.15s ease'
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#EFF6FF')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Play size={13} color="#004B87" strokeWidth={2} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                                      <span style={{ fontWeight: 500, color: '#002B5B' }}>{t.runQuery}</span>
                                    </button>

                                    {/* 2. Rename */}
                                    <button
                                      type="button"
                                      onClick={() => handleStartRenameQuery(item.id, item.title)}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '6px 8px',
                                        fontSize: '11.5px',
                                        color: '#002B5B',
                                        background: 'none',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        textAlign: lang === 'ar' ? 'right' : 'left',
                                        width: '100%',
                                        transition: 'background 0.15s ease'
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#EFF6FF')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Edit size={13} color="#004B87" strokeWidth={2} />
                                      <span style={{ fontWeight: 500, color: '#002B5B' }}>{t.rename}</span>
                                    </button>

                                    <div style={{ height: '1px', background: '#E2E8F0', margin: '2px 0' }} />

                                    {/* 3. Delete */}
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteQuery(item.id)}
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
                                      onMouseEnter={(e) => (e.currentTarget.style.background = '#FEF2F2')}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                                    >
                                      <Trash2 size={13} color="#EF4444" />
                                      <span style={{ fontWeight: 500, color: '#EF4444' }}>{t.delete}</span>
                                    </button>
                                  </div>,
                                  document.body
                                )}
                              </div>
                            </div>

                            {/* Middle Row: Category tag (totally left-aligned in LTR, right in RTL) */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-start', width: '100%', paddingLeft: 0, paddingRight: 0, margin: 0 }}>
                              <span
                                style={{
                                  fontSize: '10px',
                                  color: iconConfig.color,
                                  background: iconConfig.badgeBg,
                                  padding: '1.5px 7px',
                                  borderRadius: '4px',
                                  fontWeight: 600,
                                  display: 'inline-block',
                                  textAlign: lang === 'ar' ? 'right' : 'left'
                                }}
                              >
                                {t.getCatName(item.category || 'General')}
                              </span>
                              {item.queryState?.spatialType === 'draw' && (
                                <span
                                  style={{
                                    fontSize: '9.5px',
                                    color: '#7C3AED',
                                    background: 'rgba(124, 58, 237, 0.09)',
                                    padding: '1.5px 6px',
                                    borderRadius: '4px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '2px'
                                  }}
                                >
                                  ⬟ {t.drawnArea || 'Drawn Area'}
                                </span>
                              )}
                            </div>

                            {/* Bottom Row: Results/Places on left, Time on right */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '1px' }}>
                              <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                                {t.places(item.resultsCount || 0)}
                              </span>
                              <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>
                                {t.timeAgo(item.timestamp || 'Recent')}
                              </span>
                            </div>
                          </div>
                        );
                      })}

                  {collectionsTab === 'favorites' && (
                    <>
                      {/* Favorited Spatial Queries */}
                      {savedQueries
                        .filter(q => q.isFavorite)
                        .filter(item =>
                          !collectionsFilterQuery ||
                          item.title.toLowerCase().includes(collectionsFilterQuery.toLowerCase()) ||
                          (item.category && item.category.toLowerCase().includes(collectionsFilterQuery.toLowerCase()))
                        )
                        .map((item) => {
                          const iconConfig = getCategoryIconForHistory(item.category || item.title);
                          return (
                            <div
                              key={`fav-q-${item.id}`}
                              className="search-history-item"
                              onClick={() => handleRestoreSavedQuery(item)}
                              style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: '100%',
                                boxSizing: 'border-box',
                                padding: '10px 12px',
                                borderRadius: '10px',
                                background: 'rgba(255, 255, 255, 0.85)',
                                border: '1px solid rgba(226, 232, 240, 0.85)',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                boxShadow: '0 1px 3px rgba(0, 43, 91, 0.03)',
                                gap: '5px',
                                textAlign: lang === 'ar' ? 'right' : 'left'
                              }}
                            >
                              {/* Top Row: Small Icon + Title on left, Delete on right */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flex: 1, minWidth: 0 }}>
                                  <div
                                    style={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      background: iconConfig.bg,
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
                                      color: '#0F172A',
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
                                    title={lang === 'ar' ? 'إزالة من المفضلة' : "Remove from Favorites"}
                                    onClick={() => handleToggleFavoriteQuery(item.id)}
                                    style={{
                                      width: '26px',
                                      height: '26px',
                                      borderRadius: '6px',
                                      border: '1px solid rgba(254, 226, 226, 0.8)',
                                      background: '#FEF2F2',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      color: '#EF4444',
                                      transition: 'all 0.15s ease'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = '#FEE2E2')}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = '#FEF2F2')}
                                  >
                                    <Trash2 size={13} color="#EF4444" />
                                  </button>
                                </div>
                              </div>

                              {/* Middle Row: Category tag */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', paddingLeft: 0, paddingRight: 0, margin: 0 }}>
                                <span
                                  style={{
                                    fontSize: '10px',
                                    color: iconConfig.color,
                                    background: iconConfig.badgeBg,
                                    padding: '1.5px 7px',
                                    borderRadius: '4px',
                                    fontWeight: 600,
                                    display: 'inline-block',
                                    textAlign: lang === 'ar' ? 'right' : 'left'
                                  }}
                                >
                                  {t.getCatName(item.category || 'Spatial Search')}
                                </span>
                              </div>

                              {/* Bottom Row: Places on left, Time on right */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '1px' }}>
                                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                                  {t.places(item.resultsCount || 0)}
                                </span>
                                <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>
                                  {t.timeAgo(item.timestamp || 'Recent')}
                                </span>
                              </div>
                            </div>
                          );
                        })}

                      {/* Favorited Locations / Features */}
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
                              key={`fav-place-${item.id}`}
                              className="search-history-item"
                              onClick={() => handleSelectFavoritePlace(item)}
                              style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: '100%',
                                boxSizing: 'border-box',
                                padding: '10px 12px',
                                borderRadius: '10px',
                                background: 'rgba(255, 255, 255, 0.85)',
                                border: '1px solid rgba(226, 232, 240, 0.85)',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                boxShadow: '0 1px 3px rgba(0, 43, 91, 0.03)',
                                gap: '5px',
                                textAlign: lang === 'ar' ? 'right' : 'left'
                              }}
                            >
                              {/* Top Row: Small Icon + Title on left, Delete Button on right */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flex: 1, minWidth: 0 }}>
                                  <div
                                    style={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      background: iconConfig.bg,
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
                                      color: '#0F172A',
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
                                    title={lang === 'ar' ? 'إزالة من المفضلة' : "Remove from Favorites"}
                                    onClick={() => handleToggleFavoritePlace(item)}
                                    style={{
                                      width: '26px',
                                      height: '26px',
                                      borderRadius: '6px',
                                      border: '1px solid rgba(254, 226, 226, 0.8)',
                                      background: '#FEF2F2',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      color: '#EF4444',
                                      transition: 'all 0.15s ease'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = '#FEE2E2')}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = '#FEF2F2')}
                                  >
                                    <Trash2 size={13} color="#EF4444" />
                                  </button>
                                </div>
                              </div>

                              {/* Middle Row: Category tag */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', paddingLeft: 0, paddingRight: 0, margin: 0 }}>
                                <span
                                  style={{
                                    fontSize: '10px',
                                    color: iconConfig.color,
                                    background: iconConfig.badgeBg,
                                    padding: '1.5px 7px',
                                    borderRadius: '4px',
                                    fontWeight: 600,
                                    display: 'inline-block',
                                    textAlign: lang === 'ar' ? 'right' : 'left'
                                  }}
                                >
                                  {t.getCatName(item.category || item.subcategory || 'Location')}
                                </span>
                              </div>

                              {/* Bottom Row: Area on left, Time on right */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '1px' }}>
                                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                                  {lang === 'ar' ? getArabicArea(item.area) : (item.area ? item.area.split(',')[0] : 'Abu Dhabi')}
                                </span>
                                <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>
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
            )}

            {/* TAB: ALL CATEGORIES */}
            {activeTab === 'categories' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                {/* PANEL HEADER WITH TITLE & CLOSE BUTTON */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    minHeight: '36px',
                    marginBottom: '14px',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <h2
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: 0,
                      padding: 0,
                      lineHeight: '1.2',
                      fontFamily: 'Outfit, Inter, sans-serif',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {t.allCategories || 'All Categories'}
                  </h2>

                  <button
                    className="search-history-toggle-btn"
                    onClick={() => setIsSidebarOpen(false)}
                    title={lang === 'ar' ? 'إغلاق اللوحة' : 'Close Categories Panel'}
                    style={{
                      background: 'rgba(255, 255, 255, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.85)',
                      borderRadius: '8px',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#004B87',
                      boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <X size={16} color="#004B87" strokeWidth={2.4} />
                  </button>
                </div>

                {/* SEARCH FILTER INPUT BAR */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    marginBottom: '12px',
                    zIndex: 2
                  }}
                >
                  <input
                    type="text"
                    className="search-history-filter-input"
                    placeholder={t.filterCategoriesPlaceholder || (lang === 'ar' ? 'البحث في الفئات...' : "Search categories...")}
                    value={categorySearchQuery}
                    onChange={(e) => setCategorySearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      height: '38px',
                      padding: lang === 'ar' ? '0 12px 0 34px' : '0 34px 0 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      background: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '13px',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
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

                {/* CATEGORIES CARD LIST */}
                <div
                  className="search-history-list"
                  style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    paddingRight: lang === 'ar' ? '0' : '2px',
                    paddingLeft: lang === 'ar' ? '2px' : '0',
                    zIndex: 2
                  }}
                >
                  {CATEGORY_TREE
                    .filter(cat =>
                      !categorySearchQuery ||
                      cat.name.toLowerCase().includes(categorySearchQuery.toLowerCase()) ||
                      cat.subcategories.some(sub => sub.toLowerCase().includes(categorySearchQuery.toLowerCase()))
                    )
                    .map(cat => {
                      const catColor = GIS_CATEGORY_COLORS[cat.name] || '#1D68F2';
                      const isExpanded = expandedCategory === cat.name;
                      const allSubSelected = cat.subcategories.length > 0 && cat.subcategories.every(sub => !!selectedSubcategories[sub]);
                      const someSubSelected = cat.subcategories.some(sub => !!selectedSubcategories[sub]);

                      return (
                        <div key={cat.id} className="categories-accordion-item" style={{ marginBottom: '2px' }}>
                          <div
                            className={`categories-accordion-header ${isExpanded ? 'expanded' : ''}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              height: '38px',
                              padding: '0 12px',
                              background: isExpanded ? `${catColor}12` : 'rgba(255, 255, 255, 0.75)',
                              border: isExpanded ? `1px solid ${catColor}40` : '1px solid rgba(226, 232, 240, 0.8)',
                              borderLeft: lang === 'ar' ? 'none' : (isExpanded ? `3px solid ${catColor}` : '3px solid transparent'),
                              borderRight: lang === 'ar' ? (isExpanded ? `3px solid ${catColor}` : '3px solid transparent') : 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: isExpanded ? `0 2px 6px ${catColor}20` : '0 1px 3px rgba(0, 0, 0, 0.02)'
                            }}
                            onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
                          >
                            <div className="categories-header-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              {isExpanded ? <ChevronDown size={14} color={catColor} /> : (lang === 'ar' ? <ChevronLeft size={14} color="#64748B" /> : <ChevronRight size={14} color="#64748B" />)}
                              <span style={{ fontSize: '12.5px', fontWeight: 600, color: isExpanded ? catColor : '#334155' }}>
                                {t.getCatName(cat.name)}
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} onClick={(e) => e.stopPropagation()}>
                              <span
                                className="categories-badge"
                                style={{
                                  fontSize: '11px',
                                  background: someSubSelected ? catColor : `${catColor}18`,
                                  color: someSubSelected ? '#FFFFFF' : catColor,
                                  padding: '2px 8px',
                                  borderRadius: '10px',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  border: `1px solid ${catColor}30`
                                }}
                                onClick={() => handleParentCategoryToggle(cat)}
                                title={`Toggle all ${cat.name} subcategories`}
                              >
                                {cat.subcategories.length}
                              </span>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="categories-subcategories-list" style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingLeft: lang === 'ar' ? '0' : '8px', paddingRight: lang === 'ar' ? '8px' : '0', marginTop: '3px', marginBottom: '4px' }}>
                              {cat.subcategories.map(subcat => {
                                const isSubSelected = !!selectedSubcategories[subcat];
                                return (
                                  <div
                                    key={subcat}
                                    className={`categories-subcat-item ${isSubSelected ? 'active' : ''}`}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      padding: '6px 10px',
                                      borderRadius: '6px',
                                      fontSize: '12px',
                                      color: isSubSelected ? catColor : '#334155',
                                      background: isSubSelected ? `${catColor}15` : 'rgba(255, 255, 255, 0.5)',
                                      border: isSubSelected ? `1px solid ${catColor}35` : '1px solid rgba(226, 232, 240, 0.6)',
                                      fontWeight: isSubSelected ? 600 : 450,
                                      cursor: 'pointer',
                                      transition: 'all 0.15s ease'
                                    }}
                                    onClick={() => {
                                      handleCategoryToggle(subcat);
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                      {/* Child Branch Subcategory Checkbox */}
                                      <div
                                        className={`categories-checkbox ${isSubSelected ? 'checked' : ''}`}
                                        style={{
                                          width: '16px',
                                          height: '16px',
                                          borderRadius: '4px',
                                          border: isSubSelected ? `1.5px solid ${catColor}` : '1.5px solid #94A3B8',
                                          background: isSubSelected ? catColor : '#FFFFFF',
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
                                      <span className="categories-subcat-text">
                                        {t.getSubcatName(subcat)}
                                      </span>
                                    </div>
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

            {/* PROJECT SELECTOR CARD (FOR OTHER TABS) */}
            {activeTab !== 'history' && activeTab !== 'collections' && activeTab !== 'categories' && (
              <div className="project-card">
                <span className="meta-label" style={{ marginBottom: '-4px' }}>Active WebScene Project</span>
                <select
                  className="project-select"
                  value={selectedProjectId}
                  onChange={handleProjectChange}
                >
                  {PROJECTS.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>

                <div className="meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Region</span>
                    <span className="meta-value">{activeProject.activeRegion}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">BIM Layers</span>
                    <span className="meta-value">{activeProject.buildingsCount} active</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Elev. Min</span>
                    <span className="meta-value">{activeProject.minElevation}m</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Elev. Max</span>
                    <span className="meta-value">{activeProject.maxElevation}m</span>
                  </div>
                </div>
              </div>
            )}

            <div className="section-divider"></div>

            {/* TAB 1: LAYERS MANAGER */}
            {activeTab === 'layers' && (
              <div className="sidebar-section">
                <span className="section-title">
                  Operational Layers
                  <Layers size={14} style={{ color: 'var(--text-muted)' }} />
                </span>

                <div className="layer-list">
                  <div className={`layer-item ${layers.elevationSurface ? 'active' : ''}`}>
                    <div className="layer-info">
                      <Map size={14} className="layer-icon" />
                      <span>Elevation Surface (Contours)</span>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={layers.elevationSurface}
                        onChange={() => toggleLayer('elevationSurface')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className={`layer-item ${layers.buildings3D ? 'active' : ''}`}>
                    <div className="layer-info">
                      <Database size={14} className="layer-icon" />
                      <span>Esri 3D Buildings (Multipatch)</span>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={layers.buildings3D}
                        onChange={() => toggleLayer('buildings3D')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className={`layer-item ${layers.bimSublayers ? 'active' : ''}`}>
                    <div className="layer-info">
                      <Sliders size={14} className="layer-icon" />
                      <span>BIM Architectural Sublayers</span>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        disabled={!layers.buildings3D}
                        checked={layers.bimSublayers && layers.buildings3D}
                        onChange={() => toggleLayer('bimSublayers')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className={`layer-item ${layers.projectBoundary ? 'active' : ''}`}>
                    <div className="layer-info">
                      <Shield size={14} className="layer-icon" />
                      <span>Project Boundaries</span>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={layers.projectBoundary}
                        onChange={() => toggleLayer('projectBoundary')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className={`layer-item ${layers.heatmapOverlay ? 'active' : ''}`}>
                    <div className="layer-info">
                      <Eye size={14} className="layer-icon" />
                      <span>Terrain slope Heatmap</span>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={layers.heatmapOverlay}
                        onChange={() => toggleLayer('heatmapOverlay')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="section-divider"></div>

                {/* BIM LEVEL SLICER */}
                <span className="section-title">BIM Building Floor Slicer</span>
                <p className="meta-label" style={{ padding: '0 16px', marginTop: '6px' }}>Filter visual rendering depth by active floor level</p>
                <div className="levels-grid" style={{ padding: '0 16px' }}>
                  <button
                    className={`level-btn ${selectedLevel === 'All' ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedLevel('All');
                      addLog('BIM', 'Slicer profile updated: Rendering all building levels.', 'system');
                    }}
                  >
                    All
                  </button>
                  {activeProject.levels.map(lvl => (
                    <button
                      key={lvl}
                      className={`level-btn ${selectedLevel === lvl ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        addLog('BIM', `Slicer profile updated: Isolating ${lvl} sublayers.`, 'warning');
                      }}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: ANALYSIS TOOLS */}
            {activeTab === 'analysis' && (
              <div className="sidebar-section">
                <span className="section-title">Volume Measurement Analysis</span>

                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '140%' }}>
                    Compute cut and fill volumes between coordinates on the current elevation surface.
                  </p>

                  <button
                    className={`tab-btn ${volumeToolActive ? 'active' : ''}`}
                    onClick={toggleVolumeTool}
                    style={{
                      backgroundColor: volumeToolActive ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-primary)',
                      border: '1px solid ' + (volumeToolActive ? 'var(--accent-cyan)' : 'var(--border-color)'),
                      color: volumeToolActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      padding: '12px',
                      borderRadius: '8px',
                      width: '100%',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    <Ruler size={16} />
                    {volumeToolActive ? 'Deactivate Volume Tool' : 'Activate Volume Tool'}
                  </button>

                  {volumeToolActive && clickPoints.length < 2 && (
                    <div style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(249, 115, 22, 0.05)',
                      border: '1px dashed var(--accent-orange)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-orange)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <span><strong>INSTRUCTIONS:</strong></span>
                      <span>1. Click anywhere on the map to set <strong>Point A</strong>.</span>
                      <span>2. Click a second location to set <strong>Point B</strong>.</span>
                      <span>Current points: {clickPoints.length} / 2</span>
                    </div>
                  )}

                  {volumeResult && (
                    <div className="glass-panel" style={{ padding: '14px', marginTop: '4px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Calculation Results</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Range: 2D Projection</span>
                      </div>
                      <div className="hud-card-body" style={{ gap: '6px' }}>
                        <div className="volume-stat-row">
                          <span style={{ color: 'var(--text-secondary)' }}>Distance:</span>
                          <span style={{ color: 'var(--text-primary)' }}>{volumeResult.distance} m</span>
                        </div>
                        <div className="volume-stat-row">
                          <span style={{ color: 'var(--text-secondary)' }}>Cut Volume:</span>
                          <span className="volume-val-positive">{volumeResult.cutVolume.toLocaleString()} m³</span>
                        </div>
                        <div className="volume-stat-row">
                          <span style={{ color: 'var(--text-secondary)' }}>Fill Volume:</span>
                          <span className="volume-val-negative">{volumeResult.fillVolume.toLocaleString()} m³</span>
                        </div>
                        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '6px 0' }} />
                        <div className="volume-stat-row" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
                          <span>Net Balance:</span>
                          <span style={{ color: volumeResult.netVolume >= 0 ? 'var(--accent-cyan)' : 'var(--accent-orange)' }}>
                            {volumeResult.netVolume >= 0 ? '+' : ''}{volumeResult.netVolume.toLocaleString()} m³
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="section-divider"></div>

                {/* DYNAMIC ELEVATION PROFILE */}
                <span className="section-title">Terrain Elevation Profile</span>
                <div style={{ padding: '0 16px' }}>
                  <div className="elevation-profile-container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      <span>Cross Section (W-E)</span>
                      <span style={{ color: 'var(--accent-cyan)' }}>Active</span>
                    </div>

                    {/* SVG graph dynamically plots elevation profile from min/max elevation */}
                    <svg className="elevation-graph-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {(() => {
                        const { minElevation, maxElevation } = activeProject;
                        const range = maxElevation - minElevation || 1;
                        // Generate 8 synthetic profile points using a sine curve
                        const syntheticPts = [0, 15, 30, 45, 60, 75, 90, 100].map((x, i) => {
                          const t = i / 7;
                          const elevation = minElevation + range * (0.3 + 0.7 * Math.sin(Math.PI * t));
                          const y = 40 - ((elevation - minElevation) / range) * 32;
                          return `${x === 0 ? 'M 0 40 L 0' : 'L ' + x} ${y.toFixed(1)}`;
                        });
                        const d = syntheticPts.join(' ') + ' L 100 40 Z';
                        return <path className="elevation-graph-path" d={d} />;
                      })()}
                    </svg>

                    <div className="elevation-profile-values">
                      <span>{activeProject.minElevation}m</span>
                      <span>{((activeProject.minElevation + activeProject.maxElevation) / 2).toFixed(1)}m</span>
                      <span>{activeProject.maxElevation}m</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REGISTRY & SYSTEM */}
            {activeTab === 'projects' && (
              <div className="sidebar-section" style={{ padding: '16px' }}>
                <span className="section-title" style={{ padding: 0, marginBottom: '12px' }}>Project Registry</span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '140%' }}>
                    Manage remote data endpoints and database connections for ArcGIS Server portal.
                  </p>

                  <button
                    className="tab-btn"
                    onClick={handleRefreshRegistry}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '10px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <RefreshCw size={14} /> Synchronize Registry
                  </button>
                </div>
              </div>
            )}
            </div>
          </aside>
        )}

        {/* MAP VIEWPORT SECTION (MATCHING REFERENCE UI) */}
        <section className="map-viewport-container">

          {/* MAIN MAP WORKSPACE (OCCUPIES REMAINING AREA NEXT TO RESIZABLE AI PANEL) */}
          <div className="map-workspace-area">

          {/* TOP-LEFT FLOATING CONTROLS: DYNAMIC SEARCH HISTORY / ALL CATEGORIES BUTTON */}
          <div
            className="map-controls-top-left"
            style={{
              position: 'absolute',
              top: '76px',
              left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 20}px` : '20px'),
              right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 20}px` : '20px') : 'auto',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Show History button only when History panel is NOT open */}
            {(!isSidebarOpen || activeTab !== 'history') && (
              <button
                className="map-glass-icon-btn"
                onClick={() => {
                  setIsSidebarOpen(true);
                  setActiveTab('history');
                  showToast(lang === 'ar' ? "تم فتح سجل البحث" : "Search History Opened");
                }}
                title={lang === 'ar' ? 'سجل البحث' : "Search History"}
                style={{ color: '#004B87' }}
              >
                <History size={16} color="#004B87" strokeWidth={2.2} />
              </button>
            )}

            {/* Show All Categories button only when Categories panel is NOT open */}
            {(!isSidebarOpen || activeTab !== 'categories') && (
              <button
                className="map-glass-pill-btn map-all-categories-btn"
                onClick={() => {
                  setIsSidebarOpen(true);
                  setActiveTab('categories');
                  showToast(lang === 'ar' ? "تم فتح جميع الفئات" : "All Categories Opened");
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0 14px',
                  height: '36px',
                  borderRadius: '10px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#002B5B',
                  cursor: 'pointer'
                }}
              >
                <span className="map-all-categories-text">{t.allCategories}</span>
                <GeoVisionGradientIcon src={categorySvg} size={13} alt="Categories" />
              </button>
            )}
          </div>

          {/* TOP-RIGHT FLOATING CONTROLS: ABU DHABI LOCATION BADGE */}
          <div
            className="map-controls-top-right"
            style={{
              position: 'absolute',
              top: '76px',
              right: lang === 'ar' ? 'auto' : '16px',
              left: lang === 'ar' ? '16px' : 'auto',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <button
              className="map-location-badge"
              onClick={() => {
                if (mapInstanceRef.current) mapInstanceRef.current.setView([24.4539, 54.3773], 12, { animate: true });
                showToast(lang === 'ar' ? "تم التمركز على أبوظبي" : "Centered on Abu Dhabi");
              }}
            >
              <GeoVisionGradientIcon src={locationSvg} size={12} alt="Location" />
              <span>{lang === 'ar' ? 'أبوظبي' : 'Abu Dhabi'}</span>
            </button>
          </div>

          {/* FLOATING VERTICAL & HORIZONTAL TOOLBAR STRIP (L-SHAPED LAYOUT) */}
          <div
            className="map-controls-left-strip map-controls-l-shape"
            style={{
              position: 'absolute',
              bottom: '24px',
              left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 20}px` : '20px'),
              right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 20}px` : '20px') : 'auto',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '6px',
              transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* VERTICAL ARM OF THE "L" (1. DRAW, 2. BASEMAP, 3. LEGENDS, 4 & 5. VERTICAL ZOOM) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <button
                className={`map-glass-icon-btn ${activeLeftPopover === 'draw' ? 'active' : ''}`}
                title={lang === 'ar' ? 'القياس والرسم' : "Measurement & Draw"}
                onClick={() => setActiveLeftPopover(prev => prev === 'draw' ? null : 'draw')}
              >
                <GeoVisionGradientIcon src={drawSvg} size={16} alt="Draw" />
              </button>
              <button
                className={`map-glass-icon-btn ${activeLeftPopover === 'basemap' ? 'active' : ''}`}
                title={lang === 'ar' ? 'معرض خرائط الأساس' : "Basemap Gallery"}
                onClick={() => setActiveLeftPopover(prev => prev === 'basemap' ? null : 'basemap')}
              >
                <GeoVisionGradientIcon src={basemapSvg} size={16} alt="Basemap" />
              </button>
              <button
                className={`map-glass-icon-btn ${activeLeftPopover === 'legend' ? 'active' : ''}`}
                title={lang === 'ar' ? 'مفتاح الخريطة والتحليل' : "Legend & Analysis"}
                onClick={() => setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend')}
              >
                <GeoVisionGradientIcon src={legendSvg} size={16} alt="Legend" />
              </button>

              {/* VERTICAL ZOOM IN / ZOOM OUT SEGMENTED GROUP BELOW LEGEND */}
              <div
                className="map-zoom-segmented-group-vertical"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '36px',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}
              >
                <button
                  className="map-glass-icon-btn-segmented"
                  title={lang === 'ar' ? 'تكبير' : "Zoom In"}
                  onClick={() => {
                    if (mapInstanceRef.current) mapInstanceRef.current.zoomIn();
                    showToast(lang === 'ar' ? "تم التكبير" : "Zoomed In");
                  }}
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 75, 135, 0.15)',
                    cursor: 'pointer',
                    color: '#004B87',
                    padding: 0,
                    transition: 'all 0.2s ease'
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
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#004B87',
                    padding: 0,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Minus size={16} color="#004B87" strokeWidth={2.2} />
                </button>
              </div>
            </div>

            {/* HORIZONTAL BASE ARM OF THE "L" (COMPASS, MY LOCATION, HOME, COORDINATES, SCALE) */}
            <div className="map-controls-horizontal-arm" style={{ display: 'flex', flexDirection: 'row', gap: '6px' }}>
              <div className="map-controls-icons-row" style={{ display: 'flex', flexDirection: 'row', gap: '6px' }}>
                <button
                  className="map-glass-icon-btn"
                  title={lang === 'ar' ? 'البوصلة / توجيه للشمال' : "Compass / Orient North"}
                  onClick={() => showToast(lang === 'ar' ? "تم توجيه الخريطة نحو الشمال" : "Map Oriented North")}
                >
                  <GeoVisionGradientIcon src={compassSvg} size={16} alt="Compass" />
                </button>
                <button
                  className="map-glass-icon-btn"
                  title={lang === 'ar' ? 'موقعي' : "My Location"}
                  onClick={() => {
                    if (mapInstanceRef.current) mapInstanceRef.current.flyTo([24.4539, 54.3773], 15);
                    showToast(lang === 'ar' ? "تم التمركز على موقعي (أبوظبي)" : "Centered to My Location (Abu Dhabi)");
                  }}
                >
                  <GeoVisionGradientIcon src={navigationSvg} size={16} alt="My Location" />
                </button>
                <button
                  className="map-glass-icon-btn"
                  title={lang === 'ar' ? 'العرض الافتراضي' : "Home View"}
                  onClick={() => {
                    if (mapInstanceRef.current) mapInstanceRef.current.flyTo([24.4539, 54.3773], 12);
                    showToast(lang === 'ar' ? "إعادة التعيين إلى العرض الافتراضي لأبوظبي" : "Reset to Abu Dhabi Home View");
                  }}
                >
                  <GeoVisionGradientIcon src={homeSvg} size={16} alt="Home" />
                </button>
              </div>
              <div
                className="map-glass-pill-static map-coordinates-pill"
                title={lang === 'ar' ? 'الإحداثيات' : "Coordinates"}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0 14px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  boxShadow: '0 4px 14px -1px rgba(0, 32, 74, 0.16), 0 2px 6px 0 rgba(0, 32, 74, 0.10), 0 0 0 1px rgba(0, 43, 91, 0.06)',
                  border: '1px solid rgba(0, 43, 91, 0.13)',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#002B5B',
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
                      if (showToast) showToast(lang === 'ar' ? "تم نسخ الإحداثيات إلى الحافظة" : "Coordinates copied to clipboard");
                      setTimeout(() => setIsCopiedCoords(false), 2000);
                    }}
                    title={lang === 'ar' ? 'نسخ الإحداثيات' : "Copy Coordinates"}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                      color: isCopiedCoords ? '#10B981' : '#004B87',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {isCopiedCoords ? <Check size={15} /> : <Copy size={15} color="#004B87" />}
                  </button>
                </div>
              </div>

              {/* GRAPHIC GIS SCALE BAR PILL */}
              <div
                className="map-glass-pill-static map-scale-pill"
                title={lang === 'ar' ? 'مقياس الرسم' : "Scale Bar"}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 16px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  boxShadow: '0 4px 14px -1px rgba(0, 32, 74, 0.16), 0 2px 6px 0 rgba(0, 32, 74, 0.10), 0 0 0 1px rgba(0, 43, 91, 0.06)',
                  border: '1px solid rgba(0, 43, 91, 0.13)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="130" height="11" viewBox="0 0 130 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="3.5" width="130" height="4" fill="#E2E8F0" rx="1" />
                    <rect x="0" y="1.5" width="20" height="4" fill="#004B87" rx="0.5" />
                    <rect x="20" y="5.5" width="20" height="4" fill="#002B5B" rx="0.5" />
                    <rect x="40" y="1.5" width="30" height="4" fill="#004B87" rx="0.5" />
                    <rect x="70" y="5.5" width="30" height="4" fill="#002B5B" rx="0.5" />
                    <rect x="100" y="1.5" width="30" height="4" fill="#004B87" rx="0.5" />
                    <line x1="0.5" y1="0.5" x2="0.5" y2="10.5" stroke="#002B5B" strokeWidth="1.2" />
                    <line x1="129.5" y1="0.5" x2="129.5" y2="10.5" stroke="#002B5B" strokeWidth="1.2" />
                  </svg>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '130px',
                    fontSize: '8.5px',
                    fontWeight: '600',
                    color: '#1E293B',
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
          </div>

          {/* FLOATING BASEMAP POPOVER CARD WITH 2 COLUMNS */}
          {activeLeftPopover === 'basemap' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card basemap-grid-popover"
              style={{
                bottom: '72px',
                left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 68}px` : '68px'),
                right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 68}px` : '68px') : 'auto',
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
                bottom: '72px',
                left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 68}px` : '68px'),
                right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 68}px` : '68px') : 'auto',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              <div className="popover-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#002B5B', margin: 0 }}>{lang === 'ar' ? 'القياس والرسم' : 'Measurement & Draw'}</h3>
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
                    setActiveDrawTool('circle');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "أداة الدائرة: انقر على المركز ثم انقر على الحافة" : "Circle Tool: Click center, then click outer edge");
                  }}
                >
                  <Circle size={15} color="#004B87" />
                  <span>{lang === 'ar' ? 'دائرة' : 'Circle'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'rectangle' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveDrawTool('rectangle');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "أداة المستطيل: انقر على زاويتين متقابلتين" : "Rectangle Tool: Click two opposite corners");
                  }}
                >
                  <Square size={15} color="#004B87" />
                  <span>{lang === 'ar' ? 'مستطيل' : 'Rectangle'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'polygon' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveDrawTool('polygon');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "أداة المضلع: انقر لتحديد النقاط، وانقر مزدوجاً للإنهاء" : "Polygon Tool: Click vertices, double-click to finish");
                  }}
                >
                  <Pentagon size={15} color="#004B87" />
                  <span>{lang === 'ar' ? 'مضلع' : 'Polygon'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'click' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveDrawTool('click');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "علامة النقطة: انقر في أي مكان على الخريطة لإسقاط دبوس" : "Point Marker: Click anywhere on map to drop pin");
                  }}
                >
                  <MousePointer size={15} color="#004B87" />
                  <span>{lang === 'ar' ? 'نقطة' : 'Click'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'line' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveDrawTool('line');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "قياس الخط: انقر لتحديد النقاط، وانقر مزدوجاً للإنهاء" : "Line Measure: Click points, double-click to finish");
                  }}
                >
                  <Minus size={15} color="#004B87" style={{ transform: 'rotate(-45deg)' }} />
                  <span>{lang === 'ar' ? 'خط' : 'Line'}</span>
                </button>
                <button
                  className={`popover-tile ${activeDrawTool === 'square' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveDrawTool('square');
                    setActiveLeftPopover(null);
                    showToast(lang === 'ar' ? "أداة المربع: انقر على زاويتين" : "Square Tool: Click two corners");
                  }}
                >
                  <Square size={15} color="#004B87" />
                  <span>{lang === 'ar' ? 'مربع' : 'Square'}</span>
                </button>
              </div>
            </div>
          )}

          {/* DYNAMIC MAP LEGEND POPOVER CARD */}
          {activeLeftPopover === 'legend' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card legend-popover-card"
              style={{
                bottom: '72px',
                left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 68}px` : '68px'),
                right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 68}px` : '68px') : 'auto',
                width: '235px',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              <div style={{ padding: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#002B5B', margin: 0, letterSpacing: '-0.01em' }}>{lang === 'ar' ? 'مفتاح الخريطة والطبقات' : 'Map Legend & Layers'}</h4>
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
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '11px',
                        padding: '4px 7px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.65)',
                        border: '1px solid rgba(226, 232, 240, 0.8)'
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
                        <span style={{ fontWeight: 600, color: '#002B5B' }}>{item.title}</span>
                        {item.detail && <span style={{ fontSize: '10px', color: '#64748B', lineHeight: '1.2' }}>{item.detail}</span>}
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
              activeSearchResults={activeSearchResults}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              onFeatureClick={handleFeatureClick}
              setMapScale={setMapScale}
              activeDrawTool={activeDrawTool}
              setActiveDrawTool={setActiveDrawTool}
              onDrawnAreaComplete={handleDrawnAreaSpatialQuery}
              onClearDrawnArea={handleClearDrawnArea}
              restoredDrawnGeometry={restoredDrawnGeometry}
            />
          </div>

          {/* STAGE 1: INITIAL MAP VIEW WITH GEOVISION AI BUTTON AT BOTTOM RIGHT (BOTTOM LEFT IN RTL) OF MAP WORKSPACE */}
          {(!isAISearchBarOpen && !isAiClosing) && (
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
                left: isSidebarOpen ? (lang === 'ar' ? 'calc(50% - 140px)' : 'calc(50% + 140px)') : '50%',
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
                  if (aiSearchQuery.trim()) {
                    handleUnifiedSearch({ query: aiSearchQuery });
                    setAiSearchQuery('');
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
                setIsAISearchBarOpen(false);
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
                background: '#FFFFFF',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                boxShadow: '-2px 0 10px rgba(0, 43, 91, 0.04)',
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
                background: `${GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2'}18`,
                border: `1.5px solid ${GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2'}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: GIS_CATEGORY_COLORS[selectedLocation.category] || '#1D68F2',
                boxShadow: '0 2px 6px rgba(0, 43, 91, 0.06)'
              }}>
                <Info size={16} strokeWidth={2.4} />
              </div>

              {/* Rotated Vertical Title */}
              <div style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                marginTop: '16px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#475569',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxHeight: '260px'
              }}>
                {selectedLocation.title}
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
                background: '#FFFFFF',
                borderLeft: lang === 'ar' ? 'none' : '1px solid #E2E8F0',
                borderRight: lang === 'ar' ? '1px solid #E2E8F0' : 'none',
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
                  background: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderBottom: '1px solid #E2E8F0',
                  boxSizing: 'border-box',
                  zIndex: 10
                }}
              >
                {/* TOP BAR: 'Detailed Information' on left, Minimize & Close on right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1D68F2' }}>
                    {lang === 'ar' ? 'المعلومات التفصيلية' : 'Detailed Information'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {/* Minimize Button */}
                    <button
                      type="button"
                      style={{
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        color: '#0F172A',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#F1F5F9'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
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
                        color: '#0F172A',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#F1F5F9'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                      title={lang === 'ar' ? 'إغلاق التفاصيل' : "Close Details"}
                      onClick={() => setSelectedLocation(null)}
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
                        color: '#0F172A',
                        lineHeight: '1.3',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                      title={lang === 'ar' ? (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)) : selectedLocation.title}
                    >
                      {lang === 'ar' ? (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)) : selectedLocation.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px', fontWeight: 500 }}>
                      {lang === 'ar' ? selectedLocation.title : (selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title))}
                    </div>
                  </div>

                  {/* Favorite & Zoom Icons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginTop: '2px' }}>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: '2px', color: (selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? '#EF4444' : '#64748B' }}
                      title={(selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? (lang === 'ar' ? 'إزالة من المفضلة' : "Remove from Favorites") : (lang === 'ar' ? 'إضافة إلى المفضلة' : "Add to Favorites")}
                      onClick={() => {
                        handleToggleFavoritePlace(selectedLocation);
                      }}
                    >
                      <Heart
                        size={16}
                        fill={(selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? "#EF4444" : "none"}
                        color={(selectedLocation.isFavorite || favoritePlaces.some(p => p.id === selectedLocation.id || p.title === selectedLocation.title)) ? "#EF4444" : "#64748B"}
                      />
                    </button>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: '2px', color: '#64748B' }}
                      title={lang === 'ar' ? 'تكبير إلى المعلم' : "Zoom to feature"}
                      onClick={() => {
                        setSelectedLocation(prev => ({ ...prev, zoomTrigger: Date.now() }));
                        showToast(lang === 'ar' ? `تم التكبير إلى ${selectedLocation.arabicTitle || getArabicTitle(selectedLocation.title)}` : `Zoomed to ${selectedLocation.title}`);
                      }}
                    >
                      <Search size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. MIDDLE SCROLLABLE AREA: Overview Details & Striped Table */}
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
                {/* OVERVIEW CONTENT (ADDRESS, WEBSITE, CONTACTS & WHY IT'S A GOOD OPTION) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Address Row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#334155', lineHeight: '1.45' }}>
                    <MapPin size={15} color="#475569" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{lang === 'ar' ? (selectedLocation.arabicAddress || selectedLocation.address || 'المشرف، أبوظبي، الإمارات العربية المتحدة') : (selectedLocation.address || 'W24_02, AL MUSHRIF, Abu Dhabi')}</span>
                  </div>

                  {/* Website Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: '#1D68F2' }}>
                    <Globe size={15} color="#1D68F2" style={{ flexShrink: 0 }} />
                    <a
                      href={selectedLocation.website || 'https://iscabudhabi.sabis.net'}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#1D68F2', textDecoration: 'none', wordBreak: 'break-all' }}
                    >
                      {selectedLocation.website || 'https://iscabudhabi.sabis.net'}
                    </a>
                  </div>

                  {/* Contact Info Row: Email & Phone Side by Side */}
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '12px', color: '#334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={15} color="#475569" style={{ flexShrink: 0 }} />
                      <a
                        href={`mailto:${selectedLocation.email || '9059@adek.gov.ae'}`}
                        style={{ color: '#334155', textDecoration: 'underline' }}
                      >
                        {selectedLocation.email || '9059@adek.gov.ae'}
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Phone size={15} color="#475569" style={{ flexShrink: 0 }} />
                      <a
                        href={`tel:${selectedLocation.phone || selectedLocation.contact || '24461444'}`}
                        style={{ color: '#334155', textDecoration: 'none' }}
                      >
                        {selectedLocation.phone || selectedLocation.contact || '24461444'}
                      </a>
                    </div>
                  </div>

                  {/* Horizontal Divider Line */}
                  <div style={{ height: '1px', background: '#E2E8F0', margin: '2px 0' }} />

                  {/* 'Here's why this is a good option for you' Section */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#334155' }}>
                    <Sparkles size={14} color="#1D68F2" />
                    <span>{lang === 'ar' ? 'لماذا يعتبر هذا خياراً مناسباً لك' : "Here's why this is a good option for you"}</span>
                  </div>

                  {/* Dynamic Category Pill Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {getLocationCategoryDetails(selectedLocation).chips.map((chip, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          background: '#F0F7FF',
                          border: '1px solid #DBEAFE',
                          color: '#1E293B',
                          borderRadius: '6px',
                          padding: '5px 12px',
                          fontSize: '11.5px',
                          fontWeight: 500
                        }}
                      >
                        {chip.label}: <span style={{ fontWeight: 600, color: '#0F172A' }}>{chip.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DETAILS SECTION (STRIPED BLUE & WHITE DYNAMIC ATTRIBUTE TABLE) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{
                    borderRadius: '8px',
                    border: '1px solid #E0F2FE',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {getLocationCategoryDetails(selectedLocation).rows.map((row, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          display: 'flex',
                          padding: '11px 14px',
                          background: rIdx % 2 === 0 ? '#F0F7FF' : '#FFFFFF',
                          fontSize: '12px',
                          alignItems: 'flex-start'
                        }}
                      >
                        <div style={{ width: '90px', color: '#64748B', fontWeight: 500, flexShrink: 0 }}>
                          {row.label}
                        </div>
                        <div style={{ width: '18px', color: '#94A3B8', flexShrink: 0 }}>:</div>
                        <div style={{ flex: 1, color: '#0F172A', fontWeight: 500, lineHeight: '1.5' }}>
                          <div>{row.value}</div>
                          {row.subValue && (
                            <div style={{ color: '#64748B', fontSize: '11px', marginTop: '4px' }}>
                              {row.subValue}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. BOTTOM STICKY AREA: Ask AI Assistant Section */}
              <div
                className="detailed-info-bottom-sticky"
                style={{
                  flexShrink: 0,
                  padding: '12px 20px 20px 20px',
                  background: '#FFFFFF',
                  borderTop: '1px solid #E2E8F0',
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
              className={`landing-search-card-wrapper map-ai-panel-wrapper ${isAiClosing ? 'mac-closing' : ''} ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}
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
                        <h2 style={{
                          fontSize: '15px',
                          fontWeight: '700',
                          color: '#0F172A',
                          margin: 0,
                          padding: 0,
                          lineHeight: '1.2',
                          fontFamily: lang === 'ar' ? 'Cairo, "IBM Plex Sans Arabic", Outfit, sans-serif' : 'Outfit, Inter, sans-serif',
                          letterSpacing: '-0.01em'
                        }}>
                          {t.aiSpatialSearch || (lang === 'ar' ? 'البحث المكاني الذكي' : 'AI Spatial Search')}
                        </h2>
                      </div>

                      {/* ACTION BUTTONS: HISTORY, NEW CHAT & CLOSE */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* 1. HISTORY BUTTON */}
                        <button
                          className={`search-history-toggle-btn ${isSidebarOpen ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsSidebarOpen(prev => !prev);
                            if (!isSidebarOpen) {
                              setActiveTab('history');
                              showToast(lang === 'ar' ? 'تم فتح سجل البحث' : 'Search History Opened');
                            }
                          }}
                          title={lang === 'ar' ? 'سجل البحث' : "Search History"}
                          style={{
                            background: isSidebarOpen ? 'rgba(0, 75, 135, 0.12)' : 'rgba(255, 255, 255, 0.75)',
                            border: isSidebarOpen ? '1px solid rgba(0, 75, 135, 0.35)' : '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <History size={16} color="#004B87" strokeWidth={2.2} />
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
                            background: 'rgba(255, 255, 255, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <SquarePen size={16} color="#004B87" strokeWidth={2.2} />
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
                            background: 'rgba(255, 255, 255, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <X size={16} color="#004B87" strokeWidth={2.4} />
                        </button>
                      </div>
                    </div>

                    {!isAiMinimized && (
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

                      <div className="map-ai-chat-stream" style={{ width: '100%', maxWidth: '100%', minWidth: 0, boxSizing: 'border-box' }}>
                        {chatMessages
                          .filter(msg => {
                            const isRedundantSpec = msg.text && msg.text.includes('Here are the detailed spatial specifications');
                            if (isRedundantSpec && !msg.structuredResults && (!msg.chips || msg.chips.length === 0)) {
                              return false;
                            }
                            return true;
                          })
                          .map((msg, idx) => (
                            <div key={idx} className="chat-bubble-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '100%' }}>
                              <div className={`chat-bubble ${msg.sender}`}>
                                <div className="chat-bubble-content" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                  {msg.isSearching ? (
                                    <div className="typing-indicator">
                                      <span className="typing-dot"></span>
                                      <span className="typing-dot"></span>
                                      <span className="typing-dot"></span>
                                    </div>
                                  ) : msg.text && !msg.text.includes('Here are the detailed spatial specifications') ? (
                                    <div style={{ lineHeight: '1.45' }}>{msg.text}</div>
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
                                      <div style={{ fontWeight: 600, fontSize: '12px', color: '#002B5B' }}>{msg.clarification.question}</div>
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

                                  {/* Structured Results Card Header & Body */}
                                  {msg.structuredResults && (
                                    <div className="structured-results-card">
                                      {/* Header Accordion */}
                                      <div
                                        className="structured-results-header"
                                        onClick={() => {
                                          setChatMessages(prev => prev.map((m, i) => i === idx ? { ...m, isExpanded: !m.isExpanded } : m));
                                        }}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        <div className="structured-results-title-group">
                                          <Sparkles size={15} className="structured-cat-icon" />
                                          <span className="structured-main-title">{msg.structuredResults.title}</span>
                                          <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>({msg.structuredResults.items.length})</span>
                                        </div>

                                        <button
                                          className="structured-expand-btn"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setChatMessages(prev => prev.map((m, i) => i === idx ? { ...m, isExpanded: !m.isExpanded } : m));
                                          }}
                                          title={msg.isExpanded ? (lang === 'ar' ? 'طي النتائج' : "Collapse Results") : (lang === 'ar' ? 'توسيع النتائج' : "Expand Results")}
                                        >
                                          {msg.isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
                                        </button>
                                      </div>

                                      {/* Expanded Body: Subcategory Tabs & Scrollable Item List */}
                                      {msg.isExpanded && (
                                        <div className="structured-results-body">
                                          {msg.structuredResults.tabs && msg.structuredResults.tabs.length > 1 && (
                                            <div className="structured-tabs-bar">
                                              {msg.structuredResults.tabs.map(tab => (
                                                <button
                                                  key={tab.id}
                                                  className={`structured-tab-btn ${msg.structuredResults.activeTabId === tab.id ? 'active' : ''}`}
                                                  onClick={() => {
                                                    setChatMessages(prev => prev.map((m, i) => {
                                                      if (i === idx) {
                                                        return {
                                                          ...m,
                                                          structuredResults: { ...m.structuredResults, activeTabId: tab.id }
                                                        };
                                                      }
                                                      return m;
                                                    }));
                                                  }}
                                                >
                                                  {lang === 'ar' ? (t.getSubcatName ? t.getSubcatName(tab.name) : tab.name) : tab.name}
                                                </button>
                                              ))}
                                            </div>
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
                                                            color={(item.isFavorite || favoritePlaces.some(p => p.id === item.id || p.title === item.title)) ? "#EF4444" : "#64748B"}
                                                          />
                                                        </button>

                                                        <button
                                                          className={`structured-action-icon ${item.showDetails ? 'active' : ''}`}
                                                          title={lang === 'ar' ? 'عرض التفاصيل' : "View Info"}
                                                          onClick={(e) => {
                                                            e.stopPropagation();
                                                            setChatMessages(prev => prev.map((m, i) => {
                                                              if (i === idx) {
                                                                const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, showDetails: !it.showDetails } : it);
                                                                return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                              }
                                                              return m;
                                                            }));
                                                          }}
                                                        >
                                                          <Info size={15} color={item.showDetails ? "#1D68F2" : "#64748B"} />
                                                        </button>

                                                        <button
                                                          className="structured-action-icon"
                                                          title={lang === 'ar' ? 'تكبير على الخريطة' : "Zoom to on Map"}
                                                          onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedLocation({ ...item, zoomTrigger: Date.now(), locateTrigger: Date.now() });
                                                            showToast(lang === 'ar' ? `تم التكبير إلى ${item.arabicTitle || getArabicTitle(item.title)}` : `Zoomed to ${item.title}`);
                                                          }}
                                                        >
                                                          <Search size={15} color="#64748B" />
                                                        </button>
                                                      </div>
                                                    </div>

                                                    {/* In-Card Details Expanded Section with Overview and Details Subtabs */}
                                                    {item.showDetails && (
                                                      <div
                                                        className="structured-item-expanded-details"
                                                        style={{
                                                          width: '100%',
                                                          marginTop: '8px',
                                                          borderTop: '1px solid #E2E8F0',
                                                          paddingTop: '6px',
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          gap: '8px'
                                                        }}
                                                        onClick={(e) => e.stopPropagation()}
                                                      >
                                                        {/* SUB-TABS: Overview | Details */}
                                                        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', gap: '16px', paddingBottom: '0' }}>
                                                          <button
                                                            type="button"
                                                            style={{
                                                              padding: '6px 4px 8px 4px',
                                                              background: 'none',
                                                              border: 'none',
                                                              borderBottom: (item.activeDetailTab || 'overview') === 'overview' ? '2px solid #1D68F2' : '2px solid transparent',
                                                              color: (item.activeDetailTab || 'overview') === 'overview' ? '#1D68F2' : '#64748B',
                                                              fontWeight: (item.activeDetailTab || 'overview') === 'overview' ? 600 : 500,
                                                              fontSize: '13px',
                                                              cursor: 'pointer',
                                                              transition: 'all 0.15s ease'
                                                            }}
                                                            onClick={(e) => {
                                                              e.stopPropagation();
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
                                                            style={{
                                                              padding: '6px 4px 8px 4px',
                                                              background: 'none',
                                                              border: 'none',
                                                              borderBottom: (item.activeDetailTab || 'overview') === 'details' ? '2px solid #1D68F2' : '2px solid transparent',
                                                              color: (item.activeDetailTab || 'overview') === 'details' ? '#1D68F2' : '#64748B',
                                                              fontWeight: (item.activeDetailTab || 'overview') === 'details' ? 600 : 500,
                                                              fontSize: '13px',
                                                              cursor: 'pointer',
                                                              transition: 'all 0.15s ease'
                                                            }}
                                                            onClick={(e) => {
                                                              e.stopPropagation();
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
                                                        </div>

                                                        {/* OVERVIEW TAB CONTENT */}
                                                        {(item.activeDetailTab || 'overview') === 'overview' && (
                                                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '4px' }}>
                                                            {/* Address */}
                                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#1E293B', lineHeight: '1.4' }}>
                                                              <MapPin size={15} color="#0F172A" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                              <span>{lang === 'ar' ? (item.arabicAddress || item.address || 'المشرف، أبوظبي، الإمارات العربية المتحدة') : item.address}</span>
                                                            </div>

                                                            {/* Website */}
                                                            {item.website && (
                                                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#1D68F2' }}>
                                                                <Globe size={15} color="#1D68F2" style={{ flexShrink: 0 }} />
                                                                <a
                                                                  href={item.website}
                                                                  target="_blank"
                                                                  rel="noreferrer"
                                                                  style={{ color: '#1D68F2', textDecoration: 'none', wordBreak: 'break-all' }}
                                                                  onClick={(e) => e.stopPropagation()}
                                                                >
                                                                  {item.website}
                                                                </a>
                                                              </div>
                                                            )}

                                                            {/* Contact Email & Phone */}
                                                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#1E293B' }}>
                                                              {item.email && (
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                  <Mail size={15} color="#0F172A" style={{ flexShrink: 0 }} />
                                                                  <a href={`mailto:${item.email}`} style={{ color: '#0F172A', textDecoration: 'underline' }} onClick={(e) => e.stopPropagation()}>
                                                                    {item.email}
                                                                  </a>
                                                                </div>
                                                             )}
                                                              {(item.phone || item.contact) && (
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                  <Phone size={15} color="#0F172A" style={{ flexShrink: 0 }} />
                                                                  <a href={`tel:${item.phone || item.contact}`} style={{ color: '#0F172A', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                                                                    {item.phone || item.contact}
                                                                  </a>
                                                                </div>
                                                              )}
                                                            </div>

                                                            {/* Horizontal Divider */}
                                                            <div style={{ height: '1px', background: '#E2E8F0', margin: '4px 0 2px 0' }} />

                                                            {/* AI Recommendation Header */}
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#334155', fontWeight: 500 }}>
                                                              <Sparkles size={14} color="#1D68F2" style={{ flexShrink: 0 }} />
                                                              <span>{lang === 'ar' ? 'لماذا يعتبر هذا خياراً مناسباً لك' : "Here's why this is a good option for you"}</span>
                                                            </div>

                                                            {/* Dynamic Category Highlight Chips */}
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
                                                              {getLocationCategoryDetails(item).chips.map((chip, cIdx) => (
                                                                <div
                                                                  key={cIdx}
                                                                  style={{
                                                                    background: '#F0F7FF',
                                                                    border: '1px solid rgba(29, 104, 242, 0.12)',
                                                                    borderRadius: '6px',
                                                                    padding: '5px 10px',
                                                                    fontSize: '11.5px',
                                                                    color: '#334155',
                                                                    fontWeight: 500
                                                                  }}
                                                                >
                                                                  {chip.label}: <span style={{ fontWeight: 600, color: '#0F172A' }}>{chip.value}</span>
                                                                </div>
                                                              ))}
                                                            </div>
                                                          </div>
                                                        )}

                                                        {/* DETAILS TAB CONTENT */}
                                                        {(item.activeDetailTab || 'overview') === 'details' && (
                                                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#E2E8F0', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E2E8F0', marginTop: '2px' }}>
                                                            {getLocationCategoryDetails(item).rows.map((row, rIdx) => (
                                                              <div
                                                                key={rIdx}
                                                                style={{
                                                                  display: 'flex',
                                                                  background: rIdx % 2 === 0 ? '#F0F7FF' : '#FFFFFF',
                                                                  padding: '8px 12px',
                                                                  fontSize: '12px',
                                                                  color: '#334155'
                                                                }}
                                                               >
                                                                <div style={{ width: '90px', fontWeight: 500, color: '#475569', flexShrink: 0 }}>
                                                                  {row.label}
                                                                </div>
                                                                <div style={{ marginRight: lang === 'ar' ? '0' : '8px', marginLeft: lang === 'ar' ? '8px' : '0', color: '#64748B' }}>:</div>
                                                                <div style={{ flex: 1, color: '#1E293B', fontWeight: 500, lineHeight: '1.4' }}>
                                                                  <div>{row.value}</div>
                                                                  {row.subValue && (
                                                                    <div style={{ color: '#64748B', fontSize: '11px', marginTop: '2px' }}>
                                                                      {row.subValue}
                                                                    </div>
                                                                  )}
                                                                </div>
                                                              </div>
                                                            ))}
                                                          </div>
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
                              </div>

                            </div>
                          ))}
                      </div>
                    </div>

                    {/* DYNAMIC QUICK START SUGGESTIONS STRIP DIRECTLY ABOVE BOTTOM SEARCH BAR (CENTER ALIGNED) */}
                    {chatMessages.length <= 1 && (
                      <div
                        className="quick-start-bottom-chips-container"
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 6px 8px 6px',
                          margin: '0 auto 2px auto',
                          width: '100%',
                          maxWidth: '100%',
                          boxSizing: 'border-box',
                          flexShrink: 0
                        }}
                      >
                        {getDynamicQuickStartChips().map((chip, cIdx) => (
                          <button
                            key={cIdx}
                            type="button"
                            className="structured-radius-chip-btn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '5px 10px',
                              background: 'rgba(255, 255, 255, 0.95)',
                              border: '1px solid rgba(226, 232, 240, 0.95)',
                              borderRadius: '8px',
                              boxShadow: '0 2px 5px rgba(0, 43, 91, 0.05)',
                              fontSize: '11.5px',
                              fontWeight: 500,
                              color: '#002B5B',
                              cursor: 'pointer',
                              transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
                              lineHeight: '1.3',
                              textAlign: lang === 'ar' ? 'right' : 'left',
                              whiteSpace: 'nowrap',
                              maxWidth: '100%'
                            }}
                            onClick={() => handleUnifiedSearch({ query: chip.query || chip.label })}
                          >
                            {getChipIcon(chip)}
                            <span>{chip.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* BOTTOM SEARCH INPUT BAR */}
                    <form
                      className="landing-search-container"
                      style={{
                        margin: '0 0 4px 0',
                        width: '100%',
                        maxWidth: '100%',
                        flex: '0 0 46px',
                        height: '46px',
                        minHeight: '46px',
                        maxHeight: '46px',
                        borderRadius: '12px',
                        position: 'relative',
                        padding: '0 6px 0 8px',
                        boxSizing: 'border-box'
                      }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (aiSearchQuery.trim()) {
                          handleUnifiedSearch({ query: aiSearchQuery });
                          setAiSearchQuery('');
                          setShowPlusMenu(false);
                        }
                      }}
                    >
                      {/* Animated AI Sparkle Orb Icon (Matching Home Page) */}
                      <div className="search-star-loader-wrapper" style={{ width: '28px', height: '28px', marginRight: lang === 'ar' ? '0' : '6px', marginLeft: lang === 'ar' ? '6px' : '0', flexShrink: 0 }}>
                        <div className="search-star-loader"></div>
                        <FourPointStar className="landing-search-sparkle" size={15} />
                      </div>

                      <div className="landing-search-separator" style={{ margin: '0 8px 0 4px', height: '20px' }} />
                      <input
                        type="text"
                        className="landing-search-input"
                        placeholder={t.searchPlaceholder || (lang === 'ar' ? 'اسأل الخريطة الذكية أي شيء...' : 'Ask Smart Map Anything...')}
                        value={aiSearchQuery}
                        onChange={(e) => setAiSearchQuery(e.target.value)}
                        onFocus={() => { if (panelHeight <= 100) setPanelHeight(200); }}
                        style={{ fontSize: '13px' }}
                      />
                      <div className="landing-search-btn-wrapper">
                        <button type="submit" className="landing-search-btn-pill" disabled={!aiSearchQuery.trim()}>
                          <span className="search-btn-text">{t.searchBtn || (lang === 'ar' ? 'بحث' : 'Search')}</span>
                          <Send size={15} className="search-btn-icon" style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </aside>
      )}
    </section>
  </main>

      <Toast toastMessage={toastMessage} />
    </div>
  );
}

export default App;
