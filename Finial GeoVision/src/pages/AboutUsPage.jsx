import React, { useEffect, useRef } from 'react';
import { 
  Layers, 
  Sparkles, 
  Landmark, 
  Globe, 
  MapPin, 
  Users, 
  Building2, 
  Laptop, 
  Database, 
  Lightbulb,
  Lock
} from 'lucide-react';
import CommonHeader from '../components/CommonHeader.jsx';
import FourPointStar from '../components/FourPointStar.jsx';
import aboutHeroBg from '../assets/about_hero_bg.png';
import aboutTeamImg from '../assets/about_team.png';
import aboutBuildingImg from '../assets/about_building.png';
import adsdiIconLayers from '../assets/adsdi_icon_layers.png';
import adsdiIconGlobe from '../assets/adsdi_icon_globe.png';
import adsdiIconTerrain from '../assets/adsdi_icon_terrain.png';
import aboutMissionBg from '../assets/about_mission_bg.png';
import missionAccessIcon from '../assets/about_mission_access.png';
import missionOpenDataIcon from '../assets/about_mission_open_data.png';
import missionSmartGovIcon from '../assets/about_mission_smart_gov.png';
import homeBgImg from '../assets/home_bg.jpg';
import gisBgImg from '../assets/gis_bg.png';
import dgeBgImg from '../assets/dge_bg.png';

export default function AboutUsPage({
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
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleOpenGeoVision = () => {
    if (setIsAboutUsOpen) setIsAboutUsOpen(false);
    if (setShowMap) setShowMap(true);
    if (showToast) {
      showToast(lang === 'ar' ? 'تم فتح منصة الخرائط جيو فيجن' : 'Opening GeoVision Map Platform');
    }
  };

  return (
    <div ref={containerRef} className={`about-us-page-wrapper ${theme === 'dark' ? 'about-dark' : 'about-light'}`}>
      
      {/* ── HEADER ── */}
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

      {/* ── 1. HERO SECTION (With Topographic Wave Background) ── */}
      <section className="about-hero-section">
        {/* Topographic Contour Wave Banner Image */}
        <div className="about-hero-bg-wrapper">
          <img src={aboutHeroBg} alt="About Us Background" className="about-hero-bg-img" />
        </div>
        
        <div className="about-hero-content">
          <div className="about-title-wrapper">
            <h1 className="about-hero-title">
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <FourPointStar className="about-sparkle-star sparkle-1" size={26} />
            <FourPointStar className="about-sparkle-star sparkle-2" size={16} />
          </div>

          <p className="about-hero-desc">
            {lang === 'ar'
              ? 'تتيح البنية التحتية للبيانات المكانية لإمارة أبوظبي (AD SDI) المشاركة الآمنة وتكامل واستخدام البيانات الجيومكانية لدعم اتخاذ القرارات المستنيرة والتحول الرقمي والخدمات العامة المبتكرة.'
              : 'Abu Dhabi Spatial Data Infrastructure (AD SDI) enables the secure sharing, integration, and use of geospatial data to support informed decision-making, digital transformation, and innovative public services.'}
          </p>
        </div>
      </section>

      {/* ── 2. DEPARTMENT OF GOVERNMENT ENABLEMENT SECTION ── */}
      <section className="about-section about-dge-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2 className="about-section-title">
              {lang === 'ar' ? 'دائرة التمكين الحكومي' : 'Department of Government Enablement'}
            </h2>
            <p className="about-section-desc">
              {lang === 'ar'
                ? 'تقود دائرة التمكين الحكومي (DGE) التحول الرقمي في أبوظبي من خلال توفير منصات مشتركة وخدمات مبتكرة وحلول رقمية للجهات الحكومية والمواطنين وقطاع الأعمال.'
                : 'The Department of Government Enablement (DGE) drives Abu Dhabi’s digital transformation by delivering shared platforms, innovative services, and digital solutions for government entities, citizens, and businesses.'}
            </p>
          </div>

          {/* 3 Pillars Cards */}
          <div className="about-dge-cards-grid">
            {/* Card 1 */}
            <div className="about-pillar-card">
              <div className="about-card-image-wrapper">
                <img 
                  src={aboutTeamImg || dgeBgImg} 
                  alt="Team Behind the Teams" 
                  className="about-card-img"
                />
              </div>
              <div className="about-card-body">
                <h3 className="about-card-title">
                  {lang === 'ar' ? 'فريق وراء الفرق' : 'Team Behind the Teams'}
                </h3>
                <p className="about-card-desc">
                  {lang === 'ar'
                    ? 'القوة الدافعة وراء تحول أبوظبي إلى حكومة رقمية جاهزة للمستقبل ومتمحورة حول خدمة وسعادة المتعاملين.'
                    : 'The driving force behind Abu Dhabi\'s transformation into a future-ready, digitally advanced government.'}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="about-pillar-card">
              <div className="about-card-image-wrapper">
                <img 
                  src={homeBgImg} 
                  alt="Centralised Government Enabler" 
                  className="about-card-img"
                />
              </div>
              <div className="about-card-body">
                <h3 className="about-card-title">
                  {lang === 'ar' ? 'المُمكّن الحكومي المركزي' : 'Centralised Government Enabler'}
                </h3>
                <p className="about-card-desc">
                  {lang === 'ar'
                    ? 'تقديم خدمات وبنى تحتية رقمية عالية الجودة للجهات الحكومية في أبوظبي والموظفين والمواطنين والمقيمين.'
                    : 'Delivers high-quality services to Abu Dhabi government entities, employees, citizens, and residents.'}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="about-pillar-card">
              <div className="about-card-image-wrapper">
                <img 
                  src={gisBgImg || homeBgImg} 
                  alt="Smart Digital Government" 
                  className="about-card-img"
                />
              </div>
              <div className="about-card-body">
                <h3 className="about-card-title">
                  {lang === 'ar' ? 'حكومة رقمية ذكية' : 'Smart Digital Government'}
                </h3>
                <p className="about-card-desc">
                  {lang === 'ar'
                    ? 'قيادة تنفيذ استراتيجية أبوظبي الرقمية 2023-2027، ودفع عجلة التحول الرقمي والأتمتة.'
                    : 'Leads the implementation of the Abu Dhabi Government Digital Strategy 2023–2027, driving digital transformation and automation.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABU DHABI SPATIAL DATA INFRASTRUCTURE (ADSDI) TECH FRAME ── */}
      <section className="about-section about-adsdi-section">
        <div className="about-container">
          <div className="about-tech-frame">
            <div className="about-section-header">
              <h2 className="about-section-title">
                {lang === 'ar' ? 'البنية التحتية للبيانات المكانية لإمارة أبوظبي' : 'Abu Dhabi Spatial Data Infrastructure'}
              </h2>
              <p className="about-section-desc">
                {lang === 'ar'
                  ? 'تتيح البنية التحتية للبيانات المكانية لإمارة أبوظبي (AD-SDI)، بإدارة دائرة التمكين الحكومي (DGE)، المشاركة الآمنة وتكامل البيانات الجيومكانية عبر الإمارة. ومن خلالها، توفر معلومات مكانية دقيقة لدعم التعاون، واتخاذ قرارات مستنيرة، والخدمات الحكومية الرقمية الذكية.'
                  : 'Abu Dhabi Spatial Data Infrastructure (AD-SDI), managed by the Department of Government Enablement (DGE), enables the secure sharing and integration of geospatial data across Abu Dhabi. Through AD SDI, it provides accurate, timely spatial information to support collaboration, informed decision-making, and smart digital government services.'}
              </p>
            </div>

            {/* ADSDI Showcase (Building + Overlapping Floating Feature Card) */}
            <div className="about-adsdi-showcase">
              {/* Left Architectural Building Showcase */}
              <div className="about-adsdi-media-box">
                <img 
                  src={aboutBuildingImg} 
                  alt="Abu Dhabi Spatial Data Infrastructure Building" 
                  className="about-adsdi-media-img"
                />
                {/* Blue Tech Corner Badge */}
                <div className="about-building-corner-badge" />
              </div>

              {/* Right Floating Glass Features Card (Overlapping Building) */}
              <div className="about-adsdi-feature-card">
                {/* Feature 1 */}
                <div className="about-adsdi-item">
                  <div className="about-adsdi-icon-img-box">
                    <img src={adsdiIconLayers} alt="Geospatial Data Viewer" className="about-adsdi-icon-img" />
                  </div>
                  <div className="about-adsdi-item-text">
                    <h3 className="about-adsdi-item-title">
                      {lang === 'ar' ? 'مستعرض البيانات الجيومكانية' : 'Geospatial Data Viewer'}
                    </h3>
                    <p className="about-adsdi-item-desc">
                      {lang === 'ar'
                        ? 'يوفر وصولاً سهلاً لعرض الخرائط وتحليل البيانات المكانية عبر إمارة أبوظبي.'
                        : 'Provides easy access to view maps and analyze spatial data across Abu Dhabi.'}
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="about-adsdi-item">
                  <div className="about-adsdi-icon-img-box">
                    <img src={adsdiIconGlobe} alt="Open Data Sharing" className="about-adsdi-icon-img" />
                  </div>
                  <div className="about-adsdi-item-text">
                    <h3 className="about-adsdi-item-title">
                      {lang === 'ar' ? 'مشاركة البيانات المفتوحة' : 'Open Data Sharing'}
                    </h3>
                    <p className="about-adsdi-item-desc">
                      {lang === 'ar'
                        ? 'تسهيل مشاركة وتبادل البيانات المكانية بين الجهات الحكومية والشركاء والمطورين.'
                        : 'Facilitates the sharing and exchange of geospatial data among government entities and stakeholders.'}
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="about-adsdi-item">
                  <div className="about-adsdi-icon-img-box">
                    <img src={adsdiIconTerrain} alt="Spatially Enabled Services" className="about-adsdi-icon-img" />
                  </div>
                  <div className="about-adsdi-item-text">
                    <h3 className="about-adsdi-item-title">
                      {lang === 'ar' ? 'خدمات مكانية متقدمة' : 'Spatially Enabled Services'}
                    </h3>
                    <p className="about-adsdi-item-desc">
                      {lang === 'ar'
                        ? 'يوفر إمكانات نظم المعلومات الجغرافية المعيارية مع وصول مفتوح وسريع إلى بيانات مكانية عالية الدقة.'
                        : 'Provides standardized GIS capabilities with open and timely access to highly accurate spatial data.'}
                    </p>
                  </div>
                </div>

                {/* Bottom Right Blue Corner Accent */}
                <div className="about-adsdi-corner-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR MISSION (DEEP OCEAN BLUE WITH PANORAMA SKYLINE) ── */}
      <section className="about-mission-section">
        {/* Panorama Waterfront Skyline Background Image */}
        <div className="about-mission-bg-wrapper">
          <img src={aboutMissionBg} alt="Abu Dhabi Waterfront Skyline" className="about-mission-bg-img" />
          <div className="about-mission-bg-overlay" />
        </div>

        <div className="about-container about-mission-content-box" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-section-header light-text">
            <h2 className="about-section-title">
              {lang === 'ar' ? 'مهمتنا' : 'Our Mission'}
            </h2>
            <p className="about-section-desc">
              {lang === 'ar'
                ? 'تمكين الخدمات العامة الذكية في جميع أنحاء إمارة أبوظبي من خلال دمج ابتكارات التمكين الحكومي مع الذكاء الجغرافي المكاني.'
                : 'Smart Map empowers smarter public services across Abu Dhabi by combining digital government innovation with geospatial intelligence.'}
            </p>
          </div>

          {/* 3 Mission Glass Cards */}
          <div className="about-mission-cards-grid">
            {/* Mission 1 */}
            <div className="about-mission-glass-card">
              <div className="about-mission-icon-wrap">
                <img 
                  src={missionAccessIcon} 
                  alt="Accessible Services" 
                  className="about-mission-card-icon-img" 
                />
              </div>
              <h3 className="about-mission-card-title">
                {lang === 'ar' ? 'خدمات سهلة الوصول' : 'Accessible Services'}
              </h3>
              <p className="about-mission-card-desc">
                {lang === 'ar'
                  ? 'العثور على المرافق الصحية والتعليمية بسهولة عبر واجهة الخريطة التفاعلية والبديهية.'
                  : 'Find healthcare and education facilities easily with our intuitive map interface.'}
              </p>
            </div>

            {/* Mission 2 */}
            <div className="about-mission-glass-card">
              <div className="about-mission-icon-wrap">
                <img 
                  src={missionOpenDataIcon} 
                  alt="Open Data" 
                  className="about-mission-card-icon-img" 
                />
              </div>
              <h3 className="about-mission-card-title">
                {lang === 'ar' ? 'بيانات مفتوحة وموثوقة' : 'Open Data'}
              </h3>
              <p className="about-mission-card-desc">
                {lang === 'ar'
                  ? 'الاستفادة من البيانات الجيومكانية الحكومية لتوفير معلومات دقيقة ومحدثة باستمرار.'
                  : 'Leverages government geospatial data to provide accurate, up-to-date information.'}
              </p>
            </div>

            {/* Mission 3 */}
            <div className="about-mission-glass-card">
              <div className="about-mission-icon-wrap">
                <img 
                  src={missionSmartGovIcon} 
                  alt="Smart Government" 
                  className="about-mission-card-icon-img" 
                />
              </div>
              <h3 className="about-mission-card-title">
                {lang === 'ar' ? 'حكومة رقمية ذكية' : 'Smart Government'}
              </h3>
              <p className="about-mission-card-desc">
                {lang === 'ar'
                  ? 'دعم مسيرة أبوظبي نحو حكومة ذكية ومترابطة رقمياً تركز على تمكين المجتمع.'
                  : 'Supports Abu Dhabi\'s journey toward a digitally transformed, intelligent government.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. READY TO EXPLORE CALL TO ACTION ── */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-banner">
            <div className="about-cta-glow-circle" />
            
            <h2 className="about-cta-title">
              {lang === 'ar' ? 'جاهز للاستكشاف؟' : 'Ready to Explore?'}
            </h2>
            <p className="about-cta-desc">
              {lang === 'ar'
                ? 'اكتشف كيف يعمل الذكاء المكاني والتكامل السلس للبيانات عبر منصة خرائط جيو فيجن.'
                : 'Discover how spatial intelligence and seamless integration operate through our GeoVision map platform.'}
            </p>

            <button 
              className="about-cta-btn"
              onClick={handleOpenGeoVision}
            >
              <span>{lang === 'ar' ? 'افتح جيو فيجن' : 'Open GeoVision'}</span>
              <Sparkles size={16} className="about-cta-btn-star" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. FOOTER ── */}
      <footer className="about-page-footer">
        <div className="about-container about-footer-content">
          <div className="about-footer-center">
            <span>© 2026 Smart Map, Abu Dhabi Public Data</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
