export const getTranslations = (lang = 'en') => ({
  home: lang === 'ar' ? 'الرئيسية' : 'Home',
  aboutUs: lang === 'ar' ? 'من نحن' : 'About Us',
  allCategories: lang === 'ar' ? 'جميع الفئات' : 'All Categories',
  subTitle: lang === 'ar' ? 'اكتشف المزيد، اسأل بذكاء، استكشف أبوظبي' : 'Discover More, Ask Smarter, Explore Abu Dhabi',
  description: lang === 'ar' ? 'ابحث باستخدام اللغة الطبيعية أو استكشف الخرائط التفاعلية عبر أبوظبي — مع أكثر من 5,000 نقطة بيانات في متناول يدك.' : 'Search using natural language or explore interactive maps across Abu Dhabi — with 5K+ data points at your fingertips.',
  searchPlaceholder: lang === 'ar' ? 'اسأل الخريطة الذكية عن أي شيء...' : 'Ask Smart Map Anything...',
  searchBtn: lang === 'ar' ? 'بحث' : 'Search',
  exploreMap: lang === 'ar' ? 'استكشف الخريطة' : 'Explore Map View',
  categories: lang === 'ar' ? 'الفئات' : 'Categories',
  search: lang === 'ar' ? 'بحث' : 'Search',
  education: lang === 'ar' ? 'التعليم' : 'Education',
  healthcare: lang === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
  transportation: lang === 'ar' ? 'النقل' : 'Transport',
  environment: lang === 'ar' ? 'البيئة' : 'Environment',
  government: lang === 'ar' ? 'الخدمات الحكومية' : 'Government Services',
  tourism: lang === 'ar' ? 'السياحة' : 'Tourism',
  infrastructure: lang === 'ar' ? 'البنية التحتية' : 'Infrastructure',
  housing: lang === 'ar' ? 'الإسكان' : 'Housing',
  publicSafety: lang === 'ar' ? 'السلامة العامة' : 'Public Safety',
  utilities: lang === 'ar' ? 'المرافق' : 'Utilities',
  climate: lang === 'ar' ? 'المناخ' : 'Climate',
  construction: lang === 'ar' ? 'البناء والتشييد' : 'Construction',
  energy: lang === 'ar' ? 'الطاقة' : 'Energy',
  parks: lang === 'ar' ? 'الحدائق' : 'Parks',
  agriculture: lang === 'ar' ? 'الزراعة' : 'Agriculture',
  employment: lang === 'ar' ? 'التوظيف' : 'Employment',
  moreChips: lang === 'ar' ? '12 أكثر' : '12 More',
  history: lang === 'ar' ? 'سجل البحث' : 'Search History',
  collections: lang === 'ar' ? 'مجموعاتي' : 'My Collections',
  savedQueries: lang === 'ar' ? 'الاستعلامات المحفوظة' : 'Saved Queries',
  favorites: lang === 'ar' ? 'المفضلة' : 'Favorites',
  shareFeedback: lang === 'ar' ? 'ملاحظاتك وتقييمك' : 'Share Feedback',
  help: lang === 'ar' ? 'المساعدة والدعم' : 'Help & Support',
  signIn: lang === 'ar' ? 'تسجيل الدخول' : 'Sign In',
  signOut: lang === 'ar' ? 'تسجيل الخروج' : 'Sign Out',
  profile: lang === 'ar' ? 'الملف الشخصي' : 'Profile',
  navigation: lang === 'ar' ? 'التنقل' : 'Navigation',
  recentSearches: lang === 'ar' ? 'عمليات البحث الأخيرة' : 'Recent Searches',
  clearAll: lang === 'ar' ? 'مسح الكل' : 'Clear All',
  filterHistoryPlaceholder: lang === 'ar' ? 'البحث في سجل البحث...' : 'Search search history...',
  filterSavedPlaceholder: lang === 'ar' ? 'البحث في المحفوظات...' : 'Search saved queries...',
  filterFavPlaceholder: lang === 'ar' ? 'البحث في المفضلة...' : 'Search favorites...',
  filterCategoriesPlaceholder: lang === 'ar' ? 'البحث في الفئات...' : 'Search categories...',
  
  // 3-dot Dropdown Actions
  runQuery: lang === 'ar' ? 'تشغيل الاستعلام' : 'Run Query',
  saveQuery: lang === 'ar' ? 'حفظ الاستعلام' : 'Save Query',
  rename: lang === 'ar' ? 'إعادة تسمية' : 'Rename',
  delete: lang === 'ar' ? 'حذف' : 'Delete',
  addToFavorites: lang === 'ar' ? 'إضافة إلى المفضلة' : 'Add to Favorites',
  removeFromFavorites: lang === 'ar' ? 'إزالة من المفضلة' : 'Remove from Favorites',

  // Spatial Search & AI Panel
  aiSpatialSearch: lang === 'ar' ? 'البحث المكاني بالذكاء الاصطناعي' : 'AI Spatial Search',
  spatialQueryMatches: lang === 'ar' ? 'نتائج الاستعلام المكاني' : 'Spatial Query Matches',
  detailedInformation: lang === 'ar' ? 'المعلومات التفصيلية' : 'Detailed Information',
  whyGoodOption: lang === 'ar' ? 'إليك سبب ملاءمة هذا الخيار لك' : "Here's why this is a good option for you",
  findNearby: lang === 'ar' ? 'البحث عن أماكن قريبة هنا' : 'Find nearby places around here',
  askAiAssistant: lang === 'ar' ? 'اسأل المساعد الذكي' : 'Ask AI Assistant',
  matchedLocations: lang === 'ar' ? 'المواقع المتطابقة' : 'Matched Locations',
  drawnArea: lang === 'ar' ? 'منطقة مرسومة' : 'Drawn Area',
  allLocations: lang === 'ar' ? 'جميع المواقع' : 'All Locations',
  general: lang === 'ar' ? 'عام' : 'General',

  // Basemap & Draw Popovers
  basemapGallery: lang === 'ar' ? 'معرض خرائط الأساس' : 'Basemap Gallery',
  defaultColor: lang === 'ar' ? 'الوضع الملون' : 'Default Color',
  lightGray: lang === 'ar' ? 'رمادي فاتح' : 'Light Gray',
  darkMode: lang === 'ar' ? 'الوضع الداكن' : 'Dark Mode',
  satellite: lang === 'ar' ? 'صور الأقمار الصناعية' : 'Satellite',
  streets: lang === 'ar' ? 'شوارع' : 'Streets',
  measurementAndDraw: lang === 'ar' ? 'القياس والرسم' : 'Measurement & Draw',
  drawArea: lang === 'ar' ? 'رسم منطقة' : 'Draw Area',
  polygon: lang === 'ar' ? 'مضلع' : 'Polygon',
  rectangle: lang === 'ar' ? 'مستطيل' : 'Rectangle',
  square: lang === 'ar' ? 'مربع' : 'Square',
  circle: lang === 'ar' ? 'دائرة' : 'Circle',
  clearArea: lang === 'ar' ? 'مسح المنطقة' : 'Clear Area',
  mapLegendAndLayers: lang === 'ar' ? 'مفتاح الخريطة والطبقات' : 'Map Legend & Layers',
  operationalLayers: lang === 'ar' ? 'الطبقات التشغيلية' : 'Operational Layers',
  abuDhabi: lang === 'ar' ? 'أبوظبي' : 'Abu Dhabi',
  
  // Results & Counts
  places: (count) => {
    if (lang !== 'ar') return `${count} ${count === 1 ? 'place' : 'places'}`;
    if (count === 1) return 'مكان واحد';
    if (count === 2) return 'مكانان';
    if (count >= 3 && count <= 10) return `${count} أماكن`;
    return `${count} مكاناً`;
  },
  resultsCount: (count) => {
    if (lang !== 'ar') return `${count} ${count === 1 ? 'result' : 'results'}`;
    if (count === 1) return 'نتيجة واحدة';
    if (count === 2) return 'نتيجتان';
    if (count >= 3 && count <= 10) return `${count} نتائج`;
    return `${count} نتيجة`;
  },
  timeAgo: (timeStr) => {
    if (lang !== 'ar' || !timeStr) return timeStr || 'Just now';
    if (timeStr === 'Just now') return 'منذ قليل';
    if (timeStr.includes('min ago')) return `قبل ${timeStr.replace('min ago', '').trim()} دقيقة`;
    if (timeStr.includes('hours ago')) return `قبل ${timeStr.replace('hours ago', '').trim()} ساعة`;
    if (timeStr.includes('days ago')) return `قبل ${timeStr.replace('days ago', '').trim()} يوم`;
    if (timeStr === 'Yesterday') return 'أمس';
    if (timeStr === 'Recent') return 'حديثاً';
    return timeStr;
  },

  getCatName: (name) => {
    if (lang !== 'ar') return name;
    const dict = {
      'Education': 'التعليم',
      'Healthcare': 'الرعاية الصحية',
      'Transport': 'النقل والمواصلات',
      'Transportation': 'النقل والمواصلات',
      'Environment': 'البيئة والاستدامة',
      'Government Services': 'الخدمات الحكومية',
      'Government': 'الخدمات الحكومية',
      'Tourism': 'السياحة والترفيه',
      'Infrastructure': 'البنية التحتية',
      'Housing': 'الإسكان والمجتمعات',
      'Public Safety': 'السلامة العامة والأمن',
      'Utilities': 'المرافق والخدمات',
      'Climate': 'المناخ والطقس',
      'Construction': 'البناء والتشييد',
      'Energy': 'الطاقة والموارد',
      'Parks': 'الحدائق والمنتزهات',
      'Park': 'الحدائق والمنتزهات',
      'Agriculture': 'الزراعة والأغذية',
      'Employment': 'التوظيف والأعمال',
      'Industrial': 'الصناعة والتجارة',
      'Food & Dining': 'المطاعم والمقاهي',
      'Commercial': 'المراكز التجارية',
      'General': 'عام',
      'Spatial Search': 'استعلام مكاني'
    };
    return dict[name] || name;
  },

  getSubcatName: (name) => {
    if (lang !== 'ar') return name;
    const dict = {
      'Charter Schools': 'مدارس الشراكة التعليمية',
      'Nurseries': 'دور الحضانة ورياض الأطفال',
      'POD': 'مراكز أصحاب الهمم',
      'Public Schools': 'المدارس الحكومية',
      'Private Schools': 'المدارس الخاصة',
      'Hospitals': 'المستشفيات التخصصية',
      'Clinics': 'العيادات والمراكز الصحية',
      'Pharmacies': 'الصيدليات',
      'Medical Centers': 'المراكز الطبية الشاملة',
      'Bus Stations': 'محطات الحافلات العامة',
      'Metro Lines': 'خطوط المترو والسكك الحديدية',
      'Taxi Stands': 'مواقف سيارات الأجرة',
      'Parking Lots': 'مواقف السيارات',
      'Air Quality Sensors': 'أجهزة استشعار جودة الهواء',
      'Protected Areas': 'المحميات الطبيعية',
      'Recycling Centers': 'مراكز إعادة التدوير',
      'Waste Management': 'إدارة النفايات',
      'Ministries': 'الوزارات الاتحادية',
      'Embassies': 'السفارات والقنصليات',
      'Courts': 'المحاكم والدوائر القضائية',
      'Municipalities': 'مراكز البلديات',
      'Service Centers': 'مراكز خدمة المتعاملين',
      'Hotels': 'الفنادق والضيافة',
      'Museums': 'المتاحف والمعارض',
      'Historical Sites': 'المواقع التاريخية والأثرية',
      'Resorts': 'المنتجعات السياحية',
      'Attractions': 'الوجهات الترفيهية',
      'Bridges': 'الجسور والتقاطعات',
      'Road Networks': 'شبكات الطرق السريعة',
      'Port Facilities': 'مرافق الموانئ',
      'Public Lighting': 'الإنارة العامة',
      'Residential Complexes': 'المجمعات السكنية',
      'Public Housing': 'مشاريع الإسكان الحكومي',
      'Villas': 'الفلل السكنية',
      'Commercial Buildings': 'المباني التجارية',
      'Police Stations': 'مراكز الشرطة',
      'Fire Stations': 'مراكز الإطفاء والدفاع المدني',
      'Civil Defense': 'الدفاع المدني',
      'Emergency Centers': 'مراكز الطوارئ والإسعاف',
      'Power Stations': 'محطات توليد الكهرباء',
      'Water Treatment': 'محطات تحلية ومعالجة المياه',
      'Substations': 'محطات التحويل الكهربائية',
      'Telecom Towers': 'أبراج الاتصالات',
      'Weather Stations': 'محطات الرصد الجوي',
      'Solar Plants': 'محطات الطاقة الشمسية',
      'CO2 Monitoring': 'مراقبة انبعاثات الكربون',
      'Coastal Protection': 'حماية السواحل والشواطئ',
      'Active Construction Sites': 'مواقع البناء النشطة',
      'Development Projects': 'مشاريع التطوير الكبرى',
      'Zoning Permits': 'تصاريح استخدام الأراضي',
      'Gas Networks': 'شبكات الغاز الطبيعي',
      'Renewable Energy': 'الطاقة المتجددة',
      'Grid Terminals': 'محطات الربط الشبكي',
      'Public Parks': 'الحدائق والمنتزهات العامة',
      'Playgrounds': 'ملاعب الأطفال والساحات',
      'Gardens': 'الحدائق النباتية',
      'National Parks': 'المحميات الوطنية',
      'Farms': 'المزارع الإنتاجية',
      'Greenhouses': 'البيوت المحمية الحديثة',
      'Irrigation Systems': 'أنظمة الري الذكية',
      'Livestock Centers': 'مراكز الثروة الحيوانية',
      'Business Hubs': 'مراكز الأعمال وحاضنات المشاريع',
      'Free Zones': 'المناطق الحرة المتخصصة',
      'Job Centers': 'مراكز التوظيف وتنمية المهارات',
      'Corporate HQs': 'المقار الرئيسية للشركات'
    };
    return dict[name] || name;
  }
});

export const getArabicTitle = (title) => {
  if (!title) return '';
  if (title.includes('Choueifat')) return 'مدرسة الشويفات الدولية - المشرف';
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
  if (title.includes('DUBAL') || title.includes('Dubai Aluminium')) return 'دبي للألمنيوم (دوبال) جبل علي';
  if (title.includes('EGA') || title.includes('Emirates Global Aluminium')) return 'الإمارات العالمية للألمنيوم (الطويلة)';
  if (title.includes('Schools within 2 km')) return 'المدارس ضمن نطاق 2 كم في أبوظبي';
  if (title.includes('Hospitals Near Me')) return 'المستشفيات القريبة مني';
  if (title.includes('Government Offices') || title.includes('Government Service')) return 'المراكز والدوائر الحكومية في أبوظبي';
  if (title.includes('Restaurants')) return 'المطاعم والمقاهي';
  if (title.includes('Find Schools near Khalifa city')) return 'البحث عن مدارس قرب مدينة خليفة';
  if (title.includes('Commercial Development Zones')) return 'مناطق التطوير التجاري عالية الحركة';
  if (title.includes('Public parks in abu dhabi') || title.includes('Public Parks & Recreation')) return 'الحدائق والمرافق الترفيهية العامة';
  if (title.includes('Healthcare facilities within drawn area')) return 'مرافق الرعاية الصحية ضمن المنطقة المحددة';
  return title;
};

export const getArabicArea = (area) => {
  if (!area) return 'أبوظبي';
  if (area.includes('Jebel Ali')) return 'منطقة جبل علي الصناعية';
  if (area.includes('Taweelah')) return 'منطقة الطويلة الصناعية';
  if (area.includes('Khalifa City') || area.includes('Khalifa city')) return 'مدينة خليفة، أبوظبي';
  if (area.includes('Al Maryah')) return 'جزيرة المارية، أبوظبي';
  if (area.includes('Al Reem')) return 'جزيرة الريم، أبوظبي';
  if (area.includes('Yas Island')) return 'جزيرة ياس، أبوظبي';
  if (area.includes('Saadiyat')) return 'جزيرة السعديات، أبوظبي';
  if (area.includes('Al Mushrif')) return 'المشرف، أبوظبي';
  if (area.includes('Al Bateen')) return 'البطين، أبوظبي';
  if (area.includes('Corniche')) return 'كورنيش أبوظبي';
  if (area.includes('Musaffah')) return 'مصفح الصناعية، أبوظبي';
  if (area.includes('Abu Dhabi')) return 'أبوظبي، الإمارات';
  return area;
};
