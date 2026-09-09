import fs from 'fs';

let currentApp = fs.readFileSync('src/App.jsx', 'utf8');

// Let's locate `<aside id="map-ai-panel"` up to `</aside>`
const asideStartStr = '<aside id="map-ai-panel"';
const asideEndStr = '</aside>';

const startIdx = currentApp.indexOf(asideStartStr);
const endIdx = currentApp.indexOf(asideEndStr, startIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not locate AI panel aside in src/App.jsx');
  process.exit(1);
}

console.log('AI panel aside bounds:', startIdx, endIdx);

const newAiPanelAside = `<aside id="map-ai-panel" className={\`map-ai-panel \${isAiExpanded ? 'expanded' : ''} \${isAiMinimized ? 'minimized' : ''}\`} style={{
          height: isAiMinimized ? '52px' : \`\${panelHeight}px\`,
          maxHeight: isAiMinimized ? '52px' : 'calc(100vh - 100px)',
          minHeight: isAiMinimized ? '52px' : '200px',
          transition: 'height 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease'
        }}>
          {/* TOP DRAG / RESIZE HANDLE BAR */}
          {!isAiMinimized && (
            <div
              className="map-ai-resize-handle"
              onMouseDown={handleMouseDownResize}
              title={lang === 'ar' ? 'اسحب لتغيير الحجم' : 'Drag to resize'}
            >
              <div className="map-ai-resize-pill" />
            </div>
          )}

          <div className="map-ai-panel-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, width: '100%', boxSizing: 'border-box' }}>
            <div className="map-ai-panel-main-col" style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, width: '100%', boxSizing: 'border-box' }}>
              <div className="map-ai-panel-inner" style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, width: '100%', boxSizing: 'border-box' }}>
                
                {/* HEADER ROW (TITLE + ACTION CONTROLS) */}
                <div className="map-ai-panel-header" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '2px 0 6px 0',
                  borderBottom: isAiMinimized ? 'none' : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 75, 135, 0.08)'),
                  flexShrink: 0
                }}>
                  {/* Left Title / Sub-view Title with Back Option */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                  </div>

                  {/* ACTION BUTTONS: FAVORITES, HISTORY, NEW CHAT & CLOSE */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {/* 0. FAVORITES BUTTON (FOR REGISTERED USERS) */}
                    {isLoggedIn && (
                      <button
                        type="button"
                        className={\`search-history-toggle-btn \${aiPanelSubView === 'favorites' ? 'active' : ''}\`}
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
                    </button>

                    {/* 2. NEW CHAT BUTTON */}
                    <button
                      className="search-history-toggle-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAiPanelSubView('chat');
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
                        setAiPanelSubView('chat');
                        handleCloseAiPanel();
                      }}
                      title={lang === 'ar' ? 'إغلاق لوحة الذكاء الاصطناعي' : "Close AI Panel"}
                      aria-label={lang === 'ar' ? 'إغلاق لوحة الذكاء الاصطناعي' : "Close AI Panel"}
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
                                    key={\`ai-fav-place-\${item.id}\`}
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
                                      alignSelf: lang === 'ar' ? 'flex-start' : 'flex-end'
                                    }}
                                  >
                                    <SquarePen size={11} strokeWidth={2.2} />
                                    <span>
                                      {lang === 'ar' ? 'نطاق جغرافي: ' : 'Spatial Boundary: '}
                                      {getDrawnAreaLabel(msg.drawnArea, lang)}
                                    </span>
                                  </div>
                                )}

                                <div className={\`chat-bubble \${msg.sender}\`}>
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
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '6px',
                                          position: 'relative'
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
                                        <div style={{ lineHeight: '1.45' }}>{cleanMarkdownText(msg.text)}</div>
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
                                        <div className="structured-analytics-card" style={{
                                          marginTop: '6px',
                                          padding: '10px 12px',
                                          borderRadius: '10px',
                                          background: 'rgba(255, 255, 255, 0.95)',
                                          border: '1px solid rgba(29, 104, 242, 0.22)',
                                          boxShadow: '0 4px 14px rgba(0, 43, 91, 0.08)',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '8px',
                                          boxSizing: 'border-box'
                                        }}>
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
                                          </div>

                                          {/* Expanded Body: Subcategory Tabs & Scrollable Item List */}
                                          {msg.isExpanded && (
                                            <div className="structured-results-body">
                                              {msg.structuredResults.tabs && msg.structuredResults.tabs.length > 1 && (
                                                <div className="structured-tabs-bar">
                                                  {msg.structuredResults.tabs.map(tab => (
                                                    <button
                                                      key={tab.id}
                                                      className={\`structured-tab-btn \${msg.structuredResults.activeTabId === tab.id ? 'active' : ''}\`}
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
                                                    <div key={item.id} id={\`structured-card-\${item.id}\`} className="structured-item-wrapper" style={{ width: '100%', marginBottom: '6px' }}>
                                                      <div
                                                        className={\`structured-item-card \${item.showDetails ? 'expanded-details' : ''} \${selectedLocation && selectedLocation.id === item.id ? 'active-selected' : ''}\`}
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
                                                              className={\`structured-action-icon \${(item.isFavorite || favoritePlaces.some(p => p.id === item.id || p.title === item.title)) ? 'fav' : ''}\`}
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
                                                              className={\`structured-action-icon \${item.showDetails ? 'active' : ''}\`}
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
                                                              <Info size={15} />
                                                            </button>

                                                            <button
                                                              className="structured-action-icon"
                                                              title={lang === 'ar' ? 'تكبير على الخريطة' : "Zoom to on Map"}
                                                              onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedLocation({ ...item, zoomTrigger: Date.now(), locateTrigger: Date.now() });
                                                                showToast(lang === 'ar' ? \`تم التكبير إلى \${item.arabicTitle || getArabicTitle(item.title)}\` : \`Zoomed to \${item.title}\`);
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
                                                                className={\`structured-subtab-btn \${(item.activeDetailTab || 'overview') === 'overview' ? 'active' : ''}\`}
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
                                                                className={\`structured-subtab-btn \${(item.activeDetailTab || 'overview') === 'details' ? 'active' : ''}\`}
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

                                                              {item.lat != null && item.lon != null && !isNaN(item.lat) && !isNaN(item.lon) && (
                                                                <button
                                                                  type="button"
                                                                  className={\`structured-subtab-btn \${(item.activeDetailTab || 'overview') === 'route' ? 'active' : ''}\`}
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
                                                                      <a href={\`mailto:\${item.email}\`} className="structured-contact-link email-link" onClick={(e) => e.stopPropagation()}>
                                                                        {item.email}
                                                                      </a>
                                                                    </div>
                                                                  )}
                                                                  {(item.phone || item.contact) && (
                                                                    <div className="structured-contact-item">
                                                                      <Phone size={15} className="structured-overview-icon" style={{ flexShrink: 0 }} />
                                                                      <a href={\`tel:\${item.phone || item.contact}\`} className="structured-contact-link phone-link" onClick={(e) => e.stopPropagation()}>
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
                                                                    className={\`structured-specs-row \${rIdx % 2 === 0 ? 'even' : 'odd'}\`}
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
                                        .replace(/[\\u{1F300}-\\u{1F9FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}\\u{1F600}-\\u{1F64F}\\u{1F680}-\\u{1F6FF}\\u{1F1E0}-\\u{1F1FF}\\u{2B50}\\u{2605}\\u{FE0F}\\u{200D}\\u{25A0}-\\u{25FF}\\u{2300}-\\u{23FF}★⭐✨]/gu, '')
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

                      {/* BOTTOM SEARCH INPUT BAR (WITH STACKED SPATIAL BOUNDARY ATTACHMENT CARD) */}
                      <form
                        className={\`landing-search-container \${searchBoxDrawnAttachment ? 'has-drawn-area' : ''}\`}
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
                          if (aiSearchQuery.trim()) {
                            handleUnifiedSearch({ query: aiSearchQuery });
                            setAiSearchQuery('');
                            setShowPlusMenu(false);
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
        </aside>`;

const updatedApp = currentApp.slice(0, startIdx) + newAiPanelAside + currentApp.slice(endIdx + asideEndStr.length);
fs.writeFileSync('src/App.jsx', updatedApp, 'utf8');
console.log('Successfully updated src/App.jsx with clean AI panel aside!');
