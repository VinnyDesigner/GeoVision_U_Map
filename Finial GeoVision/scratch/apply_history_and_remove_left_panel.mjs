import fs from 'fs';
import path from 'path';

const appPath = path.resolve('src/App.jsx');
let code = fs.readFileSync(appPath, 'utf8');

console.log('Original App.jsx size:', code.length);

// 1. In handleRunHistoryQuery, handleRestoreSavedQuery, handleSelectFavoritePlace, ensure setAiPanelSubView('chat') is called so executing any history/favorite switches view to chat.
if (code.includes('const handleRunHistoryQuery = (item) => {')) {
  code = code.replace(
    'const handleRunHistoryQuery = (item) => {',
    `const handleRunHistoryQuery = (item) => {\n    setAiPanelSubView('chat');`
  );
}

if (code.includes('const handleRestoreSavedQuery = (item) => {')) {
  code = code.replace(
    'const handleRestoreSavedQuery = (item) => {',
    `const handleRestoreSavedQuery = (item) => {\n    setAiPanelSubView('chat');`
  );
}

// 2. Remove the left panel <aside className="map-left-history-panel-wrapper" ...> ... </aside>
// We can locate the entire block from {/* SIDEBAR PANEL (TOGGLABLE ... */} or {isSidebarOpen && (\n <aside className="map-left-history-panel-wrapper" ... </aside>\n )}
const sidebarRegex = /\{\/\* SIDEBAR PANEL \(TOGGLABLE - DOCKED TO LEFT SIDE IN LTR, RIGHT SIDE IN RTL\) \*\/\}[\s\S]*?<\/aside>\s*\)\}/;

if (sidebarRegex.test(code)) {
  console.log('Found and removing left sidebar <aside>...');
  code = code.replace(sidebarRegex, '{/* LEFT SIDEBAR DRAWER COMPLETELY REMOVED - MAP EXTENDS ACROSS FULL VIEWPORT */}');
} else {
  console.error('Could not find sidebar regex! Attempting fallback replacement...');
  const asideStartStr = '{isSidebarOpen && (\n          <aside\n            className="map-left-history-panel-wrapper"';
  const asideEndStr = '          </aside>\n        )}';
  const startIdx = code.indexOf(asideStartStr);
  const endIdx = code.indexOf(asideEndStr, startIdx);
  if (startIdx !== -1 && endIdx !== -1) {
    code = code.slice(0, startIdx) + '{/* LEFT SIDEBAR DRAWER COMPLETELY REMOVED */}' + code.slice(endIdx + asideEndStr.length);
    console.log('Fallback removal successful!');
  } else {
    console.error('Fallback removal failed to find boundaries.');
  }
}

// 3. Fix map controls bottom bar and popovers positioning so they don't depend on isSidebarOpen / leftHistoryWidth
code = code.replace(
  /left:\s*lang === 'ar' \? 'auto' : \(isSidebarOpen \? `\$\{leftHistoryWidth \+ 20\}px` : '20px'\),/g,
  "left: lang === 'ar' ? 'auto' : '20px',"
);
code = code.replace(
  /right:\s*lang === 'ar' \? \(isSidebarOpen \? `\$\{leftHistoryWidth \+ 20\}px` : '20px'\) : 'auto',/g,
  "right: lang === 'ar' ? '20px' : 'auto',"
);

// Popovers left/right
code = code.replace(
  /left:\s*lang === 'ar' \? 'auto' : \(isSidebarOpen \? `\$\{leftHistoryWidth \+ 74\}px` : '74px'\),/g,
  "left: lang === 'ar' ? 'auto' : '74px',"
);
code = code.replace(
  /right:\s*lang === 'ar' \? \(isSidebarOpen \? `\$\{leftHistoryWidth \+ 74\}px` : '74px'\) : 'auto',/g,
  "right: lang === 'ar' ? '74px' : 'auto',"
);

// 4. Update the Layers tool dock button to toggle Legend/Analysis popover instead of sidebar
const layersBtnOld = `<button
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

const layersBtnNew = `<button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'legend' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'الطبقات ومفتاح الخريطة' : 'Layers & Legend'}
                    onClick={() => {
                      setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend');
                    }}
                  >
                    <Layers size={17} strokeWidth={2.2} />
                  </button>`;

if (code.includes('title={lang === \'ar\' ? \'الطبقات والفئات\' : \'Layers & Categories\'}')) {
  code = code.replace(layersBtnOld, layersBtnNew);
}

// 5. Update AI Panel Header to handle History subview & History toggle button
const headerTitleOld = `{aiPanelSubView === 'favorites' ? (
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
                        )}`;

const headerTitleNew = `{aiPanelSubView === 'favorites' ? (
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
                                {t.history || (lang === 'ar' ? 'سجل البحث' : 'History')}
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
                        )}`;

if (code.includes(headerTitleOld)) {
  code = code.replace(headerTitleOld, headerTitleNew);
  console.log('AI Panel Header title updated with History back button!');
} else {
  console.log('Could not find exact headerTitleOld string.');
}

// 6. Update History button in AI Panel header action buttons
const historyBtnOld = `{/* 1. HISTORY BUTTON */}
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

const historyBtnNew = `{/* 1. HISTORY BUTTON */}
                        <button
                          className={\`search-history-toggle-btn \${aiPanelSubView === 'history' ? 'active' : ''}\`}
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
                        </button>`;

if (code.includes(historyBtnOld)) {
  code = code.replace(historyBtnOld, historyBtnNew);
  console.log('AI Panel Header History button updated!');
} else {
  console.log('Could not find exact historyBtnOld string.');
}

// 7. Embed History View into AI Panel Body alongside Favorites View
const historyViewJSX = `aiPanelSubView === 'history' ? (
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
                                    background: 'linear-gradient(135deg, #1D68F2 0%, #004B87 100%)',
                                    color: '#FFFFFF',
                                    fontSize: '12.5px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px'
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
                                          return (
                                            <div
                                              key={item.id}
                                              className={\`search-history-item \${activeQueryMenuId === item.id ? 'has-active-menu' : ''}\`}
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
                                                      border: \`1px solid \${iconConfig.border || 'transparent'}\`,
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      flexShrink: 0
                                                    }}
                                                  >
                                                    {iconConfig.icon}
                                                  </div>
                                                  {renamingSavedQueryId === item.id ? (
                                                    <div
                                                      style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%' }}
                                                      onClick={(e) => e.stopPropagation()}
                                                    >
                                                      <input
                                                        type="text"
                                                        value={renameSavedQueryText}
                                                        onChange={(e) => setRenameSavedQueryText(e.target.value)}
                                                        onKeyDown={(e) => {
                                                          if (e.key === 'Enter') handleSaveRenameQuery(item.id);
                                                          if (e.key === 'Escape') setRenamingSavedQueryId(null);
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
                                                        onClick={() => setRenamingSavedQueryId(null)}
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
                                                          if (lang === 'ar') {
                                                            setQueryMenuPos({ top: rect.top - 4, left: Math.max(10, rect.left - 155) });
                                                          } else {
                                                            setQueryMenuPos({ top: rect.top - 4, left: rect.right + 10 });
                                                          }
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
                                                          top: \`\${queryMenuPos.top}px\`,
                                                          left: \`\${queryMenuPos.left}px\`,
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
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.runQuery}</span>
                                                        </button>

                                                        {/* 2. Add/Remove Favorite */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => {
                                                            handleToggleFavoriteQuery(item.id);
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
                                                          <Heart size={13} color={theme === 'dark' ? '#EF4444' : '#DC2626'} fill={item.isFavorite ? (theme === 'dark' ? '#EF4444' : '#DC2626') : 'none'} strokeWidth={2} />
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>
                                                            {item.isFavorite ? (t.removeFromFavorites || 'Remove Favorite') : (t.addToFavorites || 'Add to Favorites')}
                                                          </span>
                                                        </button>

                                                        {/* 3. Rename */}
                                                        <button
                                                          type="button"
                                                          className="floating-history-dropdown-item"
                                                          onClick={() => handleStartRenameSavedQuery(item.id, item.title)}
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
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.renameQuery}</span>
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
                                                          <span style={{ fontWeight: 500, color: '#EF4444' }}>{t.deleteQuery}</span>
                                                        </button>
                                                      </div>,
                                                      document.body
                                                    )}
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Bottom Row: Category badge on left, Time on right */}
                                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '8px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0, overflow: 'hidden' }}>
                                                  <span
                                                    className="history-category-badge"
                                                    style={{
                                                      fontSize: '9.5px',
                                                      color: iconConfig.color,
                                                      background: iconConfig.badgeBg,
                                                      border: \`1px solid \${iconConfig.border || 'transparent'}\`,
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
                                          return (
                                            <div
                                              key={item.id}
                                              className={\`search-history-item \${activeHistoryMenuId === item.id ? 'has-active-menu' : ''}\`}
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
                                                      border: \`1px solid \${iconConfig.border || 'transparent'}\`,
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
                                                          if (lang === 'ar') {
                                                            setHistoryMenuPos({ top: rect.top - 4, left: Math.max(10, rect.left - 155) });
                                                          } else {
                                                            setHistoryMenuPos({ top: rect.top - 4, left: rect.right + 10 });
                                                          }
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
                                                          top: \`\${historyMenuPos.top}px\`,
                                                          left: \`\${historyMenuPos.left}px\`,
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
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.runQuery}</span>
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
                                                          <span style={{ fontWeight: 500, color: theme === 'dark' ? '#F8FAFC' : '#002B5B' }}>{t.renameQuery}</span>
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
                                                          <span style={{ fontWeight: 500, color: '#EF4444' }}>{t.deleteQuery}</span>
                                                        </button>
                                                      </div>,
                                                      document.body
                                                    )}
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Bottom Row: Category badge on left, Time on right */}
                                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '8px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0, overflow: 'hidden' }}>
                                                  <span
                                                    className="history-category-badge"
                                                    style={{
                                                      fontSize: '9.5px',
                                                      color: iconConfig.color,
                                                      background: iconConfig.badgeBg,
                                                      border: \`1px solid \${iconConfig.border || 'transparent'}\`,
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
                      ) : (`;

const favTarget = "                      ) : (\n                        <>\n                          {/* MIDDLE CHAT / CONVERSATION STREAM AREA */}";
const favReplacement = "                      ) : " + historyViewJSX + "\n                        <>\n                          {/* MIDDLE CHAT / CONVERSATION STREAM AREA */}";

if (code.includes(favTarget)) {
  code = code.replace(favTarget, favReplacement);
  console.log('History view embedded cleanly into AI panel body!');
} else {
  console.error('Could not find favTarget string to embed historyViewJSX!');
}

fs.writeFileSync(appPath, code, 'utf8');
console.log('App.jsx updated successfully. New size:', code.length);
