import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Remove the entire left panel aside block
const leftAsideStart = `{/* SIDEBAR PANEL (TOGGLABLE - DOCKED TO LEFT SIDE IN LTR, RIGHT SIDE IN RTL) */}`;
const leftAsideEnd = `{/* MAP VIEWPORT SECTION (MATCHING REFERENCE UI) */}`;

const startIdx = content.indexOf(leftAsideStart);
const endIdx = content.indexOf(leftAsideEnd);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find left aside block markers');
  process.exit(1);
}

content = content.slice(0, startIdx) + content.slice(endIdx);
console.log('Removed left sidebar aside block');

// 2. Clean up map-controls-bottom-bar left/right style
content = content.replace(
  "left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 20}px` : '20px'),\n              right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 20}px` : '20px') : 'auto',",
  "left: lang === 'ar' ? 'auto' : '20px',\n              right: lang === 'ar' ? '20px' : 'auto',"
);

// 3. Clean up popovers positioning
content = content.replaceAll(
  "left: lang === 'ar' ? 'auto' : (isSidebarOpen ? `${leftHistoryWidth + 74}px` : '74px'),\n                right: lang === 'ar' ? (isSidebarOpen ? `${leftHistoryWidth + 74}px` : '74px') : 'auto',",
  "left: lang === 'ar' ? 'auto' : '74px',\n                right: lang === 'ar' ? '74px' : 'auto',"
);

// 4. Clean up Layers dock button to toggle legend/layers popover
const oldLayersDockBtn = `<button
                    className={\`map-tool-dock-btn \${isSidebarOpen && activeTab === 'categories' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'الطبقات والفئات' : 'Layers & Categories'}
                    onClick={() => {
                      setActiveLeftPopover(null);
                      if (isSidebarOpen && activeTab === 'categories') {
                        setIsSidebarOpen(false);
                      } else {
                        setIsSidebarOpen(true);
                        setActiveTab('categories');
                      }
                    }}
                  >
                    <Layers size={17} strokeWidth={2.2} />
                  </button>`;

const newLayersDockBtn = `<button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'legend' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'الطبقات والفئات' : 'Layers & Categories'}
                    onClick={() => {
                      setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend');
                    }}
                  >
                    <Layers size={17} strokeWidth={2.2} />
                  </button>`;

if (content.includes(oldLayersDockBtn)) {
  content = content.replace(oldLayersDockBtn, newLayersDockBtn);
  console.log('Updated layers dock button');
}

// 5. Update AI Panel Header Title area to support 'history' sub-view
const oldHeaderTitleArea = `<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {aiPanelSubView === 'favorites' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          type="button"
                          className="search-history-toggle-btn"
                          onClick={() => setAiPanelSubView('chat')}
                          title={lang === 'ar' ? 'العودة إلى المحادثة' : 'Back to Chat'}
                          style={{
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <ChevronLeft size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.4} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Heart size={16} color="#EF4444" fill="#EF4444" />
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
                  </div>`;

const newHeaderTitleArea = `<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {aiPanelSubView === 'favorites' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          type="button"
                          className="search-history-toggle-btn"
                          onClick={() => setAiPanelSubView('chat')}
                          title={lang === 'ar' ? 'العودة إلى المحادثة' : 'Back to Chat'}
                          style={{
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <ChevronLeft size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.4} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Heart size={16} color="#EF4444" fill="#EF4444" />
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
                      </div>
                    ) : aiPanelSubView === 'history' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          type="button"
                          className="search-history-toggle-btn"
                          onClick={() => setAiPanelSubView('chat')}
                          title={lang === 'ar' ? 'العودة إلى المحادثة' : 'Back to Chat'}
                          style={{
                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)',
                            borderRadius: '8px',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: theme === 'dark' ? '#FFFFFF' : '#004B87',
                            boxShadow: '0 2px 6px rgba(0, 43, 91, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <ChevronLeft size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.4} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <History size={16} color={theme === 'dark' ? '#38bdf8' : '#004B87'} strokeWidth={2.2} />
                          <h2 style={{
                            fontSize: '15px',
                            fontWeight: '700',
                            color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                            margin: 0,
                            padding: 0,
                            lineHeight: '1.2',
                            fontFamily: lang === 'ar' ? 'Cairo, "IBM Plex Sans Arabic", Outfit, sans-serif' : 'Outfit, Inter, sans-serif'
                          }}>
                            {lang === 'ar' ? 'سجل البحث' : 'Search History'}
                          </h2>
                        </div>
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
                  </div>`;

if (content.includes(oldHeaderTitleArea)) {
  content = content.replace(oldHeaderTitleArea, newHeaderTitleArea);
  console.log('Updated AI panel header title area for History view');
}

// 6. Update History button in AI panel header to toggle history sub-view
const oldHistoryBtn = `{/* 1. HISTORY BUTTON */}
                    <button
                      className={\`search-history-toggle-btn \${isSidebarOpen ? 'active' : ''}\`}
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
                        background: isSidebarOpen ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(0, 75, 135, 0.12)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)'),
                        border: isSidebarOpen ? (theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(0, 75, 135, 0.35)') : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.85)'),
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
                    </button>`;

const newHistoryBtn = `{/* 1. HISTORY BUTTON */}
                    <button
                      className={\`search-history-toggle-btn \${aiPanelSubView === 'history' ? 'active' : ''}\`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setAiPanelSubView(prev => prev === 'history' ? 'chat' : 'history');
                      }}
                      title={lang === 'ar' ? 'سجل البحث' : "Search History"}
                      style={{
                        background: aiPanelSubView === 'history'
                          ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(0, 75, 135, 0.12)')
                          : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.75)'),
                        border: aiPanelSubView === 'history'
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
                      <History size={16} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} strokeWidth={2.2} />
                    </button>`;

if (content.includes(oldHistoryBtn)) {
  content = content.replace(oldHistoryBtn, newHistoryBtn);
  console.log('Updated History button in AI header');
}

// 7. Insert History Sub-view into AI Panel Body
const historySubViewJSX = `aiPanelSubView === 'history' ? (
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

                      {/* History Content List */}
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '36px 16px',
                            textAlign: 'center',
                            gap: '12px',
                            background: theme === 'dark' ? 'rgba(14, 38, 77, 0.40)' : 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: theme === 'dark' ? 'blur(12px)' : 'none',
                            WebkitBackdropFilter: theme === 'dark' ? 'blur(12px)' : 'none',
                            borderRadius: '12px',
                            border: theme === 'dark' ? '1px dashed rgba(56, 189, 248, 0.35)' : '1px dashed rgba(29, 104, 242, 0.3)',
                            margin: '12px 0'
                          }}>
                            <div style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '50%',
                              background: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(0, 75, 135, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: theme === 'dark' ? '#38bdf8' : '#004B87'
                            }}>
                              <User size={20} />
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: theme === 'dark' ? '#FFFFFF' : '#002B5B' }}>
                              {lang === 'ar' ? 'سجل الدخول لعرض السجل' : 'Sign in to access history'}
                            </div>
                            <div style={{ fontSize: '12px', color: theme === 'dark' ? '#94A3B8' : '#64748B', maxWidth: '240px', lineHeight: 1.4 }}>
                              {lang === 'ar'
                                ? 'احفظ نتائج البحث السابقة واستعد جلسات المحادثة والاستعلامات المكانية.'
                                : 'Save previous search queries, restore conversation sessions, and access past results.'}
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setIsSignInOpen(true);
                                setAuthState('login');
                              }}
                              style={{
                                marginTop: '4px',
                                padding: '8px 18px',
                                background: 'linear-gradient(135deg, #004B87 0%, #1D68F2 100%)',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '12.5px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px rgba(0, 75, 135, 0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                            >
                              <LogIn size={14} />
                              <span>{lang === 'ar' ? 'تسجيل الدخول الآن' : 'Sign In Now'}</span>
                            </button>
                          </div>
                        ) : savedQueries.length === 0 && searchHistory.length === 0 ? (
                          <div style={{ textAlign: 'center', padding: '36px 16px', color: '#64748B', fontSize: '13px' }}>
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
                                  {savedQueries.length > 0 && (
                                    <span style={{
                                      fontSize: '10.5px',
                                      fontWeight: 600,
                                      padding: '1px 6px',
                                      borderRadius: '10px',
                                      background: theme === 'dark' ? 'rgba(56, 189, 248, 0.20)' : 'rgba(0, 75, 135, 0.10)',
                                      color: theme === 'dark' ? '#38bdf8' : '#004B87'
                                    }}>
                                      {savedQueries.length}
                                    </span>
                                  )}
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
                                    marginTop: '6px'
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
                                      return (
                                        <div
                                          key={item.id}
                                          className={\`search-history-item \${activeQueryMenuId === item.id ? 'has-active-menu' : ''}\`}
                                          onClick={() => {
                                            setAiPanelSubView('chat');
                                            handleRestoreSavedQuery(item);
                                          }}
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
                                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '6px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, minWidth: 0 }}>
                                              <div
                                                className="history-cat-icon-circle"
                                                style={{
                                                  width: '22px',
                                                  height: '22px',
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
                                            </div>

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
                                              <button
                                                type="button"
                                                title={lang === 'ar' ? 'حذف' : 'Delete'}
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleDeleteSavedQuery(item.id);
                                                }}
                                                style={{
                                                  width: '22px',
                                                  height: '22px',
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
                                              >
                                                <Trash2 size={11} color={theme === 'dark' ? '#F87171' : '#EF4444'} />
                                              </button>
                                            </div>
                                          </div>

                                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0, overflow: 'hidden' }}>
                                              <span style={{ fontSize: '10.5px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.75)' : '#64748B', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                                {t.places(item.resultsCount || 0)}
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
                                                {t.getCatName(item.category || 'General')}
                                              </span>
                                            </div>
                                            <span style={{ fontSize: '10px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : '#94A3B8', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                              {t.timeAgo(item.timestamp || 'Recent')}
                                            </span>
                                          </div>
                                        </div>
                                      );
                                    })}
                                </div>
                              )}
                            </div>

                            {/* 2. RECENTS SECTION */}
                            <div
                              className="recents-queries-section"
                              style={{
                                flex: 1,
                                minHeight: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                paddingTop: '2px'
                              }}
                            >
                              {/* Recents Accordion Header */}
                              <div
                                onClick={() => setIsRecentAccordionOpen(prev => !prev)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '6px 8px',
                                  marginBottom: isRecentAccordionOpen ? '6px' : '0',
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
                                  {searchHistory.length > 0 && (
                                    <span style={{
                                      fontSize: '10.5px',
                                      fontWeight: 600,
                                      padding: '1px 6px',
                                      borderRadius: '10px',
                                      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(100, 116, 139, 0.12)',
                                      color: theme === 'dark' ? '#E2E8F0' : '#475569'
                                    }}>
                                      {searchHistory.length}
                                    </span>
                                  )}
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
                                    gap: '6px'
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
                                      return (
                                        <div
                                          key={item.id}
                                          className={\`search-history-item \${activeHistoryMenuId === item.id ? 'has-active-menu' : ''}\`}
                                          onClick={() => {
                                            setAiPanelSubView('chat');
                                            handleRunHistoryQuery(item);
                                          }}
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
                                            </div>

                                            {/* Action Buttons: Pin + Delete */}
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
                                                <Pin size={11} color={theme === 'dark' ? '#FFFFFF' : '#004B87'} />
                                              </button>
                                              <button
                                                type="button"
                                                title={lang === 'ar' ? 'حذف من السجل' : 'Delete from history'}
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleDeleteSearchHistory(item.id);
                                                }}
                                                style={{
                                                  width: '22px',
                                                  height: '22px',
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
                                              >
                                                <Trash2 size={11} color={theme === 'dark' ? '#F87171' : '#EF4444'} />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Bottom Row: Results count + Category chip on left, Time on right */}
                                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0, overflow: 'hidden' }}>
                                              <span style={{ fontSize: '10.5px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.75)' : '#64748B', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                                {t.results(item.resultsCount || 12)}
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
                  ) : `;

// Replace embedded favorites view start to chain history subview
const favoritesStartMarker = `aiPanelSubView === 'favorites' ? (`;
const favoritesEndMarker = `) : (
                    <>
                      {/* MIDDLE CHAT / CONVERSATION STREAM AREA */}`;

const favEndIdx = content.indexOf(favoritesEndMarker);
if (favEndIdx !== -1) {
  content = content.slice(0, favEndIdx + 1) + ' : ' + historySubViewJSX + content.slice(favEndIdx + 4);
  console.log('Inserted History subview into AI panel body');
} else {
  console.error('Could not find favoritesEndMarker in content');
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('Successfully updated src/App.jsx!');
