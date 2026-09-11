import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Map,
  BarChart2,
  Bookmark,
  Search,
  X,
  ArrowRight,
  ArrowLeft,
  Play,
  FileText,
  MessageCircleQuestion,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Download
} from 'lucide-react';
import CommonHeader from '../components/CommonHeader.jsx';
import helpHeroBg from '../assets/help_support_hero_bg.png';
import aboutHeroBgDark from '../assets/about_hero_bg_dark.png';
import cardAiSearchImg from '../assets/help/card_ai_search_3d.png';
import cardMapToolsImg from '../assets/help/card_map_tools_3d.png';
import cardExploreAnalyzeImg from '../assets/help/card_explore_analyze_3d.png';
import cardHistoryFavoritesImg from '../assets/help/card_history_favorites_3d.png';
import cardQuickTutorialsImg from '../assets/help/card_quick_tutorials_3d.png';
import './HelpSupportPage.css';

const CARD_ILLUSTRATIONS = {
  'ai-search': cardAiSearchImg,
  'map-tools': cardMapToolsImg,
  'explore-analyze': cardExploreAnalyzeImg,
  'history-favorites': cardHistoryFavoritesImg,
  'quick-tutorials': cardQuickTutorialsImg
};

const HELP_DATA = {
  en: {
    heroTag: "Help & Support",
    heroTitle: "How can we help you?",
    heroDesc: "Explore step-by-step guides, interactive spatial tools, AI capabilities, and GIS documentation.",
    searchPlaceholder: "Search Help Topics (e.g. AI search, layers, draw, route, favorites)...",
    clearSearch: "Clear",
    noResultsTitle: "No matching help topics found",
    noResultsDesc: "Try adjusting your search terms or browse the main categories below.",
    resetSearch: "View all topics",
    learnMore: "Learn",
    backToTopics: "Back to all topics",
    tryOnMap: "Try on Map",
    quickTutorialsTitle: "Quick Tutorials",
    videoTutorialTitle: "Video Tutorial",
    videoTutorialDesc: "Step-by-step guidance for using GeoVision.",
    videoTutorialBtn: "Watch Video",
    userGuideTitle: "User Guide",
    userGuideDesc: "Detailed GeoVision user guide in PDF format.",
    userGuideBtn: "Open Guide",
    contactSupportTitle: "Still need help?",
    contactSupportDesc: "Our GIS specialists and support team are here to assist with spatial data inquiries, platform questions, and workflows.",
    contactSupportBtn: "Contact Support",

    cards: [
      {
        id: "ai-search",
        title: "AI Spatial Search",
        desc: "Ask questions in natural language, explore spatial information, and get intelligent answers. Draw an area on the map to refine your search and discover insights faster.",
        icon: "sparkles",
        items: [
          "Ask AI questions",
          "Follow-up queries",
          "Draw an area and ask AI",
          "Natural-language spatial search"
        ],
        overview: "GeoVision features an advanced spatial natural language processing engine that translates conversational queries into precise GIS spatial queries across Abu Dhabi.",
        steps: [
          {
            title: "Natural Language Spatial Queries",
            desc: "Type plain-language questions like 'Show public parks in Abu Dhabi' or 'Find hospitals near Al Reem Island' directly into the smart search bar."
          },
          {
            title: "Multi-Turn Conversational Follow-Ups",
            desc: "Ask contextual questions following any query, such as 'Which one is closest?' or 'How many are there?' without repeating the category."
          },
          {
            title: "Spatial Boundary Queries",
            desc: "Use the Draw tool to sketch a circle, rectangle, or polygon on the map, then ask: 'Show commercial buildings in this area'."
          },
          {
            title: "Quantitative & Comparative Analytics",
            desc: "Query counts, rankings, and attribute filters like 'Schools with highest rating' or 'Compare industrial facilities in ICAD'."
          }
        ],
        sampleQueries: [
          "Show parks in Abu Dhabi",
          "How many schools are in Khalifa City?",
          "Hospitals with more than 100 beds",
          "Which park is closest to Al Maryah Island?"
        ]
      },
      {
        id: "map-tools",
        title: "Map Tools",
        desc: "Explore and customize your map with layers, categories, basemaps, location tools, drawing, measurement, and intuitive zoom and navigation controls.",
        icon: "map",
        items: [
          "Explore the map",
          "Layers & Categories",
          "Basemap",
          "My Location",
          "Draw & Measure",
          "Zoom & Navigation"
        ],
        overview: "Interact with Abu Dhabi's official geospatial foundation through comprehensive map controls, layers, basemaps, and measurement tools.",
        steps: [
          {
            title: "Layers & Categories Panel",
            desc: "Toggle domain categories (Education, Healthcare, Parks, Energy, Transport, Government) to visualize specific spatial datasets with live counts."
          },
          {
            title: "High-Resolution Basemaps",
            desc: "Switch between Streets, Satellite Imagery, and Clean Light Gray topographic basemaps using the basemap selector on the left dock."
          },
          {
            title: "GPS & Current Location",
            desc: "Center the map on your exact GPS coordinates with one click using the My Location tool."
          },
          {
            title: "Draw & Measure Tools",
            desc: "Sketch polygons, rectangles, circles, or measure geodesic distances and areas across the emirate."
          },
          {
            title: "Smooth Navigation Controls",
            desc: "Pan, zoom, tilt, and reset bearings with dedicated on-screen navigation buttons and keyboard shortcuts."
          }
        ],
        sampleQueries: [
          "Open All Categories panel",
          "Switch to Satellite Basemap",
          "Locate my current position",
          "Measure distance between landmarks"
        ]
      },
      {
        id: "explore-analyze",
        title: "Explore & Analyze",
        desc: "Dive deeper into your search results with detailed feature information, routing, analytics, and GIS printing tools to understand and share your spatial insights.",
        icon: "analytics",
        items: [
          "Search Results",
          "Feature Details",
          "Route",
          "Analytics",
          "GIS Print"
        ],
        overview: "Analyze geospatial attributes, inspect feature metadata, calculate multimodal routes, and generate high-resolution GIS map prints.",
        steps: [
          {
            title: "Feature Inspection",
            desc: "Click any marker or POI on the map to open the Detailed Information panel with coordinates, contact info, ratings, and sector metrics."
          },
          {
            title: "Turn-by-Turn Routing",
            desc: "Calculate optimal driving and walking routes to any location with step-by-step directions and distance calculations."
          },
          {
            title: "Spatial Analytics & Charts",
            desc: "View aggregated statistics, sector breakdowns, emissions distributions, and district comparisons in the AI panel."
          },
          {
            title: "GIS Print & Export",
            desc: "Generate professional GIS map sheets with scale bar, north arrow, legend, metadata banner, and high-resolution export."
          }
        ],
        sampleQueries: [
          "Directions to Sheikh Zayed Grand Mosque",
          "Compare industrial emissions in ICAD",
          "Print high-resolution map view",
          "Inspect hospital bed capacity"
        ]
      },
      {
        id: "history-favorites",
        title: "History & Favorites",
        desc: "Easily revisit your previous searches, pin important queries, and save frequently used locations or results to quickly access them whenever you need.",
        icon: "bookmark",
        items: [
          "History",
          "Pin Query",
          "Favorites"
        ],
        overview: "Quickly access past spatial queries, bookmark important facilities, and pin recurring searches for instant retrieval.",
        steps: [
          {
            title: "Search History",
            desc: "Browse past queries and spatial results stored in your session. Re-run any past search with a single click."
          },
          {
            title: "Pin Queries",
            desc: "Pin key analytical queries to your dashboard for quick access during recurring workflows."
          },
          {
            title: "Saved Favorites",
            desc: "Bookmark specific schools, parks, hospitals, or government centers to your personal favorites collection."
          }
        ],
        sampleQueries: [
          "View recent search history",
          "Pin this query for later",
          "Open My Saved Favorites",
          "Manage bookmarked locations"
        ]
      },
      {
        id: "quick-tutorials",
        title: "Quick Tutorials",
        desc: "Get started with GeoVision through step-by-step video tutorials and a detailed user guide designed to help you quickly understand and use the platform.",
        icon: "play",
        items: [
          "Video Tutorial Masterclass",
          "Abu Dhabi SDI User Guide (PDF)",
          "Feature Walkthroughs",
          "Step-by-Step Quick Start"
        ],
        overview: "Get started with GeoVision through our comprehensive video masterclass and official Abu Dhabi SDI user manual covering map navigation, AI spatial searches, and analytics.",
        steps: [
          {
            title: "Video Tutorial Masterclass",
            desc: "Watch an in-depth video guide demonstrating core platform capabilities, geospatial tools, and practical use cases across Abu Dhabi."
          },
          {
            title: "Comprehensive User Guide (PDF)",
            desc: "Read our official documentation covering map layers, GIS printing, spatial query formats, and best practices."
          },
          {
            title: "Interactive Map Onboarding",
            desc: "Practice using real geospatial queries, category filters, and coordinate inspection directly on the interactive map."
          }
        ],
        sampleQueries: [
          "Open Video Masterclass",
          "Download User Guide (PDF)",
          "Show public parks in Abu Dhabi"
        ]
      }
    ]
  },

  ar: {
    heroTag: "المساعدة والدعم",
    heroTitle: "كيف يمكننا مساعدتك؟",
    heroDesc: "استكشف أدلة الاستخدام، وأدوات نظم المعلومات الجغرافية التفاعلية، والبحث الذكي، والتوثيق المكاني.",
    searchPlaceholder: "البحث في مواضيع المساعدة (مثل: البحث الذكي، الطبقات، رسم منطقة، المسار، المفضلة)...",
    clearSearch: "مسح",
    noResultsTitle: "لم يتم العثور على مواضيع مطابقة",
    noResultsDesc: "يرجى تجربة كلمات بحث أخرى أو تصفح الأقسام الرئيسية أدناه.",
    resetSearch: "عرض كافة المواضيع",
    learnMore: "تعلم المزيد",
    backToTopics: "العودة إلى كافة المواضيع",
    tryOnMap: "تجربة على الخريطة",
    quickTutorialsTitle: "دروس تعليمية سريعة",
    videoTutorialTitle: "فيديو توضيحي",
    videoTutorialDesc: "إرشادات خطوة بخطوة لاستخدام منصة جيو فيجن.",
    videoTutorialBtn: "مشاهدة الفيديو",
    userGuideTitle: "دليل المستخدم",
    userGuideDesc: "دليل مستخدم جيو فيجن المفصل بصيغة PDF.",
    userGuideBtn: "فتح الدليل",
    contactSupportTitle: "هل ما زلت بحاجة إلى مساعدة؟",
    contactSupportDesc: "فريق الدعم وأخصائيو نظم المعلومات الجغرافية متواجدون للإجابة عن استفسارات البيانات المكانية وسير العمل.",
    contactSupportBtn: "تواصل مع الدعم الفني",

    cards: [
      {
        id: "ai-search",
        title: "البحث المكاني بالذكاء الاصطناعي",
        desc: "اطرح أسئلتك بلغة طبيعية، واستكشف المعلومات المكانية، واحصل على إجابات ذكية. ارسم منطقة على الخريطة لتخصيص بحثك واكتشاف الرؤى بسرعة.",
        icon: "sparkles",
        items: [
          "طرح أسئلة على الذكاء الاصطناعي",
          "استعلامات المتابعة التفاعلية",
          "رسم منطقة جغرافية وسؤال الذكاء الاصطناعي",
          "بحث مكاني باللغة الطبيعية"
        ],
        overview: "تتميز منصة جيو فيجن بمحرك معالجة لغة طبيعية مكانية متقدم يترجم الأسئلة الشائعة إلى استعلامات جغرافية دقيقة عبر إمارة أبوظبي.",
        steps: [
          {
            title: "استعلامات مكانية باللغة الطبيعية",
            desc: "اطرح أسئلتك بلغة واضحة مثل 'اعرض الحدائق العامة في أبوظبي' أو 'المستشفيات القريبة من جزيرة الريم'."
          },
          {
            title: "متابعة الحوار متعدد الاستعلامات",
            desc: "اطرح أسئلة سياقية متابعة مثل 'ما هو الأقرب؟' أو 'كم عددها؟' دون الحاجة لتكرار الفئة."
          },
          {
            title: "استعلامات الحدود المرسومة",
            desc: "استخدم أداة الرسم لتحديد دائرة أو مستطيل أو مضلع على الخريطة، ثم اسأل: 'اعرض المباني التجارية في هذه المنطقة'."
          },
          {
            title: "التحليل الكمي والمقارن",
            desc: "استعلم عن الإحصائيات، الترتيب التفضيلي، والتصنيف مثل 'المدارس الأعلى تقييماً' أو 'قارن المنشآت الصناعية في أيكاد'."
          }
        ],
        sampleQueries: [
          "اعرض الحدائق في أبوظبي",
          "كم عدد المدارس في مدينة خليفة؟",
          "المستشفيات التي تحتوي على أكثر من 100 سرير",
          "ما هي أقرب حديقة لجزيرة المارية؟"
        ]
      },
      {
        id: "map-tools",
        title: "أدوات الخريطة",
        desc: "استكشف خريطتك وخصصها باستخدام الطبقات والفئات وخرائط الأساس وأدوات تحديد الموقع والرسم والقياس والتنقل السلس.",
        icon: "map",
        items: [
          "استكشاف الخريطة",
          "الطبقات والفئات",
          "خرائط الأساس",
          "موقعي الجغرافي",
          "الرسم والقياس",
          "التكبير والتنقل"
        ],
        overview: "تفاعل مع البنية التحتية الجيومكانية المعتمدة لإمارة أبوظبي عبر أدوات التحكم المتكاملة، الطبقات، خرائط الأساس، وأدوات القياس.",
        steps: [
          {
            title: "لوحة الطبقات والفئات",
            desc: "تفعيل وإيقاف فئات البيانات (التعليم، الصحة، الحدائق، الطاقة، النقل، الخدمات الحكومية) لعرض معالم محددة."
          },
          {
            title: "خرائط أساس عالية الدقة",
            desc: "التبديل بين خريطة الشوارع، صور الأقمار الصناعية، والخريطة الرمادية الفاتحة عبر مبدل خرائط الأساس."
          },
          {
            title: "تحديد الموقع الجغرافي الفعلي",
            desc: "تركيز الخريطة على موقع جهازك الجغرافي الفعلي بنقرة واحدة باستخدام أداة 'موقعي'."
          },
          {
            title: "أدوات الرسم والقياس الجيوديسي",
            desc: "رسم مضلعات، مستطيلات، ودوائر، وقياس المسافات والمساحات الجيوديسية عبر الإمارة بدقة."
          },
          {
            title: "أدوات التكبير والتدوير السلس",
            desc: "التحريك، التكبير والتصغير، وضبط الاتجاهات عبر عناصر التحكم المخصصة واختصارات لوحة المفاتيح."
          }
        ],
        sampleQueries: [
          "فتح لوحة كافة الفئات",
          "التبديل إلى صور الأقمار الصناعية",
          "تحديد موقعي الحالي على الخريطة",
          "قياس المسافة بين المعالم"
        ]
      },
      {
        id: "explore-analyze",
        title: "الاستكشاف والتحليل",
        desc: "تعمق في نتائج بحثك مع تفاصيل المعالم، وتوجيه المسارات، والتحليلات الجغرافية، وأدوات طباعة الخرائط الرسمية.",
        icon: "analytics",
        items: [
          "نتائج البحث",
          "تفاصيل المعالم",
          "المسارات والتوجيه",
          "التحليلات المكانية",
          "طباعة الخرائط"
        ],
        overview: "تحليل الخصائص الجيومكانية، فحص بيانات المعالم التفصيلية، حساب المسارات، وإصدار خرائط رسمية عالية الجودة.",
        steps: [
          {
            title: "فحص تفاصيل المعلم",
            desc: "انقر على أي نقطة أو معلم بالخريطة لفتح لوحة المعلومات التفصيلية متضمنة الإحداثيات، بيانات الاتصال، والتقييم."
          },
          {
            title: "التوجيه وحساب المسارات",
            desc: "حساب أفضل مسارات القيادة والمشي لأي موقع مع إرشادات تفصيلية خطوة بخطوة وتقدير المسافة والزمن."
          },
          {
            title: "التحليلات المكانية والرسوم البيانية",
            desc: "عرض الإحصائيات التجميعية، وتوزيع القطاعات، وتحليلات الانبعاثات في لوحة الذكاء الاصطناعي."
          },
          {
            title: "طباعة وتصدير الخرائط الرسمية",
            desc: "إنشاء لوحة خرائط احترافية مع مقياس الرسم، سهم الشمال، مفتاح الخريطة، وشريط البيانات الرسمي."
          }
        ],
        sampleQueries: [
          "مسار القيادة إلى جامع الشيخ زايد الكبير",
          "مقارنة الانبعاثات الصناعية في أيكاد",
          "طباعة لوحة الخريطة الحالية",
          "فحص الطاقة الاستيعابية لأسرة المستشفيات"
        ]
      },
      {
        id: "history-favorites",
        title: "السجل والمفضلة",
        desc: "أعد زيارة عمليات البحث السابقة بسهولة، وثبّت الاستعلامات المهمة، واحفظ المواقع والنتائج المفضلة للوصول السريع إليها.",
        icon: "bookmark",
        items: [
          "سجل البحث",
          "تثبيت الاستعلام",
          "المواقع المفضلة"
        ],
        overview: "الوصول السريع إلى الاستعلامات السابقة، وحفظ المعالم الحيوية، وتثبيت الأسئلة المتكررة لسهولة الرجوع إليها.",
        steps: [
          {
            title: "سجل عمليات البحث",
            desc: "استعراض الاستعلامات السابقة والنتائج المكانية المسجلة في جلستك وإعادة تشغيل أي استعلام بنقرة واحدة."
          },
          {
            title: "تثبيت الاستعلامات المهمة",
            desc: "تثبيت استعلاماتك التحليلية الدورية في القائمة المخصصة لسرعة الوصول إليها مستقبلاً."
          },
          {
            title: "المواقع المحفوظة في المفضلة",
            desc: "حفظ المدارس، الحدائق، المراكز الصحية، أو المقار الحكومية المفضلة لديك ضمن مجموعتك المكانية."
          }
        ],
        sampleQueries: [
          "عرض سجل البحث الأخير",
          "تثبيت هذا الاستعلام للرجوع إليه لاحقاً",
          "فتح قائمة المواقع المفضلة",
          "إدارة المعالم المحفوظة"
        ]
      },
      {
        id: "quick-tutorials",
        title: "دروس تعليمية سريعة",
        desc: "ابدأ استخدام جيو فيجن عبر مقاطع فيديو تفصيلية ودليل مستخدم شامل مصمم لمساعدتك على فهم واستخدام المنصة بسرعة.",
        icon: "play",
        items: [
          "فيديو توضيحي تفاعلي",
          "دليل مستخدم جيو فيجن (PDF)",
          "استكشاف المعالم والطبقات",
          "إرشادات البدء السريع"
        ],
        overview: "ابدأ رحلتك مع جيو فيجن عبر الفيديو التعليمي الشامل ودليل المستخدم الرسمي لإمارة أبوظبي الذي يغطي أدوات الخريطة واستعلامات الذكاء الاصطناعي.",
        steps: [
          {
            title: "فيديو تدريبي تفصيلي",
            desc: "شاهد دليلاً مصوراً خطوة بخطوة يوضح الإمكانات الأساسية للمنصة وأدوات نظم المعلومات الجغرافية وحالات الاستخدام."
          },
          {
            title: "دليل المستخدم الرسمي (PDF)",
            desc: "اقرأ وتصفح الدليل الشامل الذي يغطي طبقات الخريطة وطباعة الخرائط الجغرافية وصيغ الاستعلام وأفضل الممارسات."
          },
          {
            title: "جولة تفاعلية على الخريطة",
            desc: "تدرب على تنفيذ الاستعلامات المكانية الحقيقية وتصفية الفئات وفحص الإحداثيات مباشرة على الخريطة التفاعلية."
          }
        ],
        sampleQueries: [
          "مشاهدة الفيديو التعليمي",
          "فتح دليل المستخدم (PDF)",
          "اعرض الحدائق العامة في أبوظبي"
        ]
      }
    ]
  }
};

export default function HelpSupportPage({
  activeBasemap,
  showMap,
  setShowMap,
  isCategoryDrawerOpen,
  setIsCategoryDrawerOpen,
  lang = 'en',
  setLang,
  theme = 'light',
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
  isHelpOpen,
  setIsHelpOpen,
  isFeedbackOpen,
  setIsFeedbackOpen,
  currentUser,
  t,
  handleSearchSubmit,
  handleUnifiedSearch,
  showToast,
  setIsSidebarOpen,
  setActiveTab,
  setAiPanelSubView,
  setIsAISearchBarOpen,
  setIsAiMinimized
}) {
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const isRtl = lang === 'ar';
  const data = HELP_DATA[lang] || HELP_DATA.en;

  // Scroll to top on mount or when topic changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedTopicId]);

  // Handle ESC key to exit detail view or modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isVideoModalOpen) setIsVideoModalOpen(false);
        else if (isPdfModalOpen) setIsPdfModalOpen(false);
        else if (selectedTopicId) setSelectedTopicId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen, isPdfModalOpen, selectedTopicId]);

  // Filter cards based on search query
  const trimmedSearch = searchQuery.trim().toLowerCase();
  const filteredCards = data.cards.filter(card => {
    if (!trimmedSearch) return true;
    const titleMatch = card.title.toLowerCase().includes(trimmedSearch);
    const descMatch = card.desc && card.desc.toLowerCase().includes(trimmedSearch);
    const itemMatch = card.items && card.items.some(item => item.toLowerCase().includes(trimmedSearch));
    const stepMatch = card.steps && card.steps.some(step =>
      step.title.toLowerCase().includes(trimmedSearch) ||
      step.desc.toLowerCase().includes(trimmedSearch)
    );
    return titleMatch || descMatch || itemMatch || stepMatch;
  });

  const selectedTopic = data.cards.find(c => c.id === selectedTopicId);

  const getCardIcon = (iconType, size = 22) => {
    switch (iconType) {
      case 'sparkles':
        return <Sparkles size={size} strokeWidth={2.2} />;
      case 'map':
        return <Map size={size} strokeWidth={2.2} />;
      case 'analytics':
        return <BarChart2 size={size} strokeWidth={2.2} />;
      case 'bookmark':
        return <Bookmark size={size} strokeWidth={2.2} />;
      case 'play':
        return <Play size={size} strokeWidth={2.2} />;
      default:
        return <HelpCircle size={size} strokeWidth={2.2} />;
    }
  };

  const handleOpenMapWithQuery = (sampleQuery) => {
    if (setIsHelpOpen) setIsHelpOpen(false);
    if (setShowMap) setShowMap(true);
    if (handleUnifiedSearch && sampleQuery) {
      setTimeout(() => {
        handleUnifiedSearch({ query: sampleQuery });
      }, 200);
    }
    if (showToast) {
      showToast(isRtl ? `جاري البحث: ${sampleQuery}` : `Running query: "${sampleQuery}"`);
    }
  };

  const renderCard = (card, rowType = 'standard') => {
    const illustrationSrc = CARD_ILLUSTRATIONS[card.id];
    return (
      <div
        key={card.id}
        className={`help-card help-card-${rowType}`}
        onClick={() => setSelectedTopicId(card.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setSelectedTopicId(card.id);
          }
        }}
      >
        <div className={`help-card-illustration-wrap help-card-illustration-${rowType}`}>
          {illustrationSrc && (
            <img
              src={illustrationSrc}
              alt={card.title}
              className="help-card-illustration-img"
              loading="lazy"
            />
          )}
        </div>

        <div className="help-card-body">
          <h3 className="help-card-title">{card.title}</h3>
          <p className="help-card-desc">{card.desc}</p>

          <div className="help-card-footer">
            <button
              type="button"
              className="help-card-learn-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTopicId(card.id);
              }}
            >
              <span>{data.learnMore}</span>
              {isRtl ? (
                <ArrowLeft size={13} strokeWidth={2.4} className="help-card-learn-arrow" />
              ) : (
                <ArrowRight size={13} strokeWidth={2.4} className="help-card-learn-arrow" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`help-support-page-wrapper ${theme === 'dark' ? 'help-dark' : 'help-light'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
      data-theme={theme}
    >
      {/* ── 1. HEADER (Shared GeoVision Header with Branding & Controls) ── */}
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

      {/* ── 2. HERO SECTION ── */}
      <section className="help-hero-section">
        <div className="help-hero-bg-wrapper">
          <img
            src={helpHeroBg}
            alt="GeoVision Help & Support Abu Dhabi Skyline Background"
            className="help-hero-bg-img"
          />
        </div>

        <div className="help-hero-content">
          <div className="help-hero-tag">
            <HelpCircle size={13} strokeWidth={2.4} />
            <span>{data.heroTag}</span>
          </div>

          <h1 className="help-hero-title">{data.heroTitle}</h1>
          <p className="help-hero-desc">{data.heroDesc}</p>

          {/* Prominent Search Field */}
          <div className="help-search-container">
            <div className="help-search-input-wrap">
              <Search
                size={18}
                className="help-search-icon"
                style={{
                  left: isRtl ? 'auto' : '16px',
                  right: isRtl ? '16px' : 'auto'
                }}
              />
              <input
                type="text"
                className="help-search-input"
                placeholder={data.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  paddingLeft: isRtl ? '40px' : '48px',
                  paddingRight: isRtl ? '48px' : '40px',
                  textAlign: isRtl ? 'right' : 'left'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="help-search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title={data.clearSearch}
                  aria-label={data.clearSearch}
                >
                  <X size={16} strokeWidth={2.4} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MAIN HELP CONTENT CONTAINER ── */}
      <div className="help-container">
        {/* If a specific topic is selected, render the interactive detail view */}
        {selectedTopic ? (
          <div className="help-detail-view">
            <div className="help-detail-top-nav">
              <button
                type="button"
                className="help-detail-back-btn"
                onClick={() => setSelectedTopicId(null)}
              >
                {isRtl ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
                <span>{data.backToTopics}</span>
              </button>

              <button
                type="button"
                className="help-card-btn"
                onClick={() => {
                  if (setIsHelpOpen) setIsHelpOpen(false);
                  if (setShowMap) setShowMap(true);
                }}
              >
                <span>{data.tryOnMap}</span>
                {isRtl ? <ArrowLeft size={13} /> : <ArrowRight size={13} />}
              </button>
            </div>

            <div className="help-detail-title-row">
              <div className="help-card-icon-wrap">
                {getCardIcon(selectedTopic.icon, 22)}
              </div>
              <h2 className="help-detail-title">{selectedTopic.title}</h2>
            </div>

            <p className="help-detail-overview">{selectedTopic.overview}</p>

            {/* Quick Action Buttons for Quick Tutorials Topic */}
            {selectedTopic.id === 'quick-tutorials' && (
              <div className="help-detail-tutorials-actions">
                <button
                  type="button"
                  className="help-detail-action-btn video-action"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play size={16} fill="currentColor" />
                  <span>{data.videoTutorialBtn}</span>
                </button>
                <button
                  type="button"
                  className="help-detail-action-btn pdf-action"
                  onClick={() => setIsPdfModalOpen(true)}
                >
                  <FileText size={16} />
                  <span>{data.userGuideBtn}</span>
                </button>
              </div>
            )}

            <div className="help-detail-steps-grid">
              {selectedTopic.steps.map((step, idx) => (
                <div key={idx} className="help-detail-step-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle2 size={16} color="#0EA5E9" strokeWidth={2.4} />
                    <h3 className="help-detail-step-title">{step.title}</h3>
                  </div>
                  <p className="help-detail-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Sample Queries / Quick Actions */}
            {selectedTopic.sampleQueries && selectedTopic.sampleQueries.length > 0 && (
              <div className="help-detail-samples-wrap">
                <div className="help-detail-samples-title">
                  {isRtl ? 'أمثلة تجريبية على الخريطة' : 'Interactive Example Queries'}
                </div>
                <div className="help-detail-samples-chips">
                  {selectedTopic.sampleQueries.map((sample, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      className="help-sample-chip"
                      onClick={() => handleOpenMapWithQuery(sample)}
                      title={isRtl ? `تشغيل: "${sample}"` : `Run: "${sample}"`}
                    >
                      <Sparkles size={12} color="#0EA5E9" />
                      <span>{sample}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Main 5 Topic Cards matching Mockup: 2 on top row, 3 on bottom row */
          <section className="help-cards-section">
            {filteredCards.length > 0 ? (
              !trimmedSearch && filteredCards.length === data.cards.length ? (
                <div className="help-cards-layout">
                  <div className="help-cards-row-top">
                    {filteredCards.slice(0, 2).map((card) => renderCard(card, 'top'))}
                  </div>
                  <div className="help-cards-row-bottom">
                    {filteredCards.slice(2, 5).map((card) => renderCard(card, 'bottom'))}
                  </div>
                </div>
              ) : (
                <div className="help-cards-filtered-grid">
                  {filteredCards.map((card) => renderCard(card, 'standard'))}
                </div>
              )
            ) : (
              /* No Search Results */
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <MessageCircleQuestion size={40} color="#94A3B8" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px 0', color: theme === 'dark' ? '#FFFFFF' : '#002B5B' }}>
                  {data.noResultsTitle}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 16px 0' }}>
                  {data.noResultsDesc}
                </p>
                <button
                  type="button"
                  className="help-card-learn-btn"
                  onClick={() => setSearchQuery('')}
                  style={{ margin: '0 auto' }}
                >
                  <span>{data.resetSearch}</span>
                </button>
              </div>
            )}
          </section>
        )}
      </div>

      {/* ── VIDEO TUTORIAL MODAL ── */}
      {isVideoModalOpen && (
        <div className="help-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <div className="help-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="help-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Play size={18} color="#EF4444" fill="#EF4444" />
                <h3 className="help-modal-title">{data.videoTutorialTitle}</h3>
              </div>
              <button
                type="button"
                className="help-modal-close-btn"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#0F172A',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <img
                  src={aboutHeroBgDark}
                  alt="Video Thumbnail"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                />
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(239,68,68,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto', cursor: 'pointer', boxShadow: '0 4px 20px rgba(239,68,68,0.5)' }}>
                    <Play size={24} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: isRtl ? '0' : '3px' }} />
                  </div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>GeoVision Platform Masterclass</h4>
                  <p style={{ margin: 0, fontSize: '12.5px', color: '#CBD5E1' }}>12:45 min · HD Tutorial · Abu Dhabi SDI</p>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '13.5px', lineHeight: '1.6', color: theme === 'dark' ? '#CBD5E1' : '#475569' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 6px 0', color: theme === 'dark' ? '#38BDF8' : '#004B87' }}>
                {isRtl ? 'فصول الفيديو التعليمي:' : 'Tutorial Chapters:'}
              </h4>
              <ul style={{ margin: 0, paddingLeft: isRtl ? '0' : '20px', paddingRight: isRtl ? '20px' : '0' }}>
                <li>00:00 - Introduction to GeoVision & Abu Dhabi SDI</li>
                <li>02:15 - Natural Language AI Spatial Search</li>
                <li>05:30 - Map Layers, Basemaps & Boundary Drawing</li>
                <li>08:45 - Route Directions & Spatial Analytics</li>
                <li>11:20 - Exporting Official GIS Map Prints</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── PDF USER GUIDE MODAL ── */}
      {isPdfModalOpen && (
        <div className="help-modal-overlay" onClick={() => setIsPdfModalOpen(false)}>
          <div className="help-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="help-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} color="#0EA5E9" />
                <h3 className="help-modal-title">{data.userGuideTitle}</h3>
              </div>
              <button
                type="button"
                className="help-modal-close-btn"
                onClick={() => setIsPdfModalOpen(false)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ marginBottom: '18px', padding: '16px', background: theme === 'dark' ? 'rgba(30,41,59,0.5)' : '#F1F5F9', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}>
                  GeoVision User Manual v2.4 (Official)
                </div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>
                  PDF Document · 4.8 MB · Department of Government Enablement
                </div>
              </div>

              <button
                type="button"
                className="help-card-btn"
                onClick={() => {
                  if (showToast) showToast(isRtl ? 'جاري تحميل دليل المستخدم...' : 'Downloading GeoVision User Guide...');
                }}
              >
                <Download size={13} />
                <span>{isRtl ? 'تحميل' : 'Download'}</span>
              </button>
            </div>

            <div style={{ fontSize: '13.5px', lineHeight: '1.6', color: theme === 'dark' ? '#CBD5E1' : '#475569' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 8px 0', color: theme === 'dark' ? '#38BDF8' : '#004B87' }}>
                {isRtl ? 'فهرس محتويات الدليل:' : 'Table of Contents:'}
              </h4>
              <ol style={{ margin: 0, paddingLeft: isRtl ? '0' : '20px', paddingRight: isRtl ? '20px' : '0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li><strong>Chapter 1:</strong> System Overview, Architecture & Abu Dhabi Spatial Data SDI</li>
                <li><strong>Chapter 2:</strong> Spatial AI Conversational Engine & Multi-Turn Queries</li>
                <li><strong>Chapter 3:</strong> Layer Catalogs, Dynamic Categories & Taxonomy</li>
                <li><strong>Chapter 4:</strong> Spatial Drawing, Geodesic Measurement & Boundary Intersections</li>
                <li><strong>Chapter 5:</strong> Multimodal Routing, Analytics Summaries & GIS Print Generation</li>
                <li><strong>Chapter 6:</strong> Account Preferences, Security & Feedback Procedures</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
