import fs from 'fs';

const headContent = fs.readFileSync('scratch/head_app.jsx', 'utf8');

// 1. In headContent, find the AI Panel header title area
const oldHeaderTitle = `<div className="map-ai-panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                      </div>`;

const newHeaderTitle = `<div className="map-ai-panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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

// 2. In headContent, find the action buttons to replace context button with Favorites button
const oldActionButtonsStart = `{/* ACTION BUTTONS: CONTEXT, HISTORY, NEW CHAT & CLOSE */}`;
const oldActionButtonsEnd = `{/* 1. HISTORY BUTTON */}`;

const newFavoritesBtn = `{/* ACTION BUTTONS: FAVORITES, HISTORY, NEW CHAT & CLOSE */}
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
                        `;

// 3. In headContent, the AI Panel Body:
const oldBodyStart = `                    {!isAiMinimized && (
                      <>
                        {/* MIDDLE CHAT / CONVERSATION STREAM AREA */}`;

const embeddedFavoritesView = `                    {!isAiMinimized && (
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
                          {/* MIDDLE CHAT / CONVERSATION STREAM AREA */}`;

// 4. In headContent, also add the active spatial boundary badge to user messages and the spatial boundary card to the search form
const oldUserMsgStart = `<div className={\`chat-bubble \${msg.sender}\`}>
                                {msg.sender === 'user' ? (`;

const newUserMsgStart = `{/* Active Spatial Boundary Badge for User Queries (if attached) */}
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
                                  {msg.sender === 'user' ? (`;

// 5. Search form replacement:
const oldSearchForm = `<form
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
                    </form>`;

const newSearchForm = `<form
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
                      </form>`;

// 6. Add `aiPanelSubView` state and handlers
let result = headContent;

// Add state if not present
if (!result.includes('aiPanelSubView, setAiPanelSubView')) {
  result = result.replace(
    'const [isAiClosing, setIsAiClosing] = useState(false);',
    `const [isAiClosing, setIsAiClosing] = useState(false);\n  const [aiPanelSubView, setAiPanelSubView] = useState('chat'); // 'chat' | 'favorites'`
  );
}

// Update new chat & close AI panel handlers to reset aiPanelSubView
result = result.replace(
  'const handleNewChat = () => {',
  `const handleNewChat = () => {\n    setAiPanelSubView('chat');`
);

result = result.replace(
  'const handleCloseAiPanel = () => {',
  `const handleCloseAiPanel = () => {\n    setAiPanelSubView('chat');`
);

// Apply replacements
if (!result.includes(newHeaderTitle)) {
  if (result.includes(oldHeaderTitle)) {
    result = result.replace(oldHeaderTitle, newHeaderTitle);
    console.log('Replaced header title');
  } else {
    console.error('oldHeaderTitle not found');
  }
}

// Replace context button with Favorites button
const contextBtnStart = result.indexOf(oldActionButtonsStart);
const historyBtnStart = result.indexOf(oldActionButtonsEnd);
if (contextBtnStart !== -1 && historyBtnStart !== -1) {
  result = result.slice(0, contextBtnStart) + newFavoritesBtn + result.slice(historyBtnStart);
  console.log('Replaced context button with favorites button');
} else {
  console.error('Action buttons markers not found');
}

// Replace AI panel body
if (result.includes(oldBodyStart)) {
  result = result.replace(oldBodyStart, embeddedFavoritesView);
  console.log('Replaced AI panel body start with embedded favorites');
} else {
  console.error('oldBodyStart not found');
}

// Replace user message start
if (result.includes(oldUserMsgStart)) {
  result = result.replace(oldUserMsgStart, newUserMsgStart);
  console.log('Replaced user msg start with spatial boundary badge');
} else {
  console.error('oldUserMsgStart not found');
}

// Replace search form
if (result.includes(oldSearchForm)) {
  result = result.replace(oldSearchForm, newSearchForm);
  console.log('Replaced search form');
} else {
  console.error('oldSearchForm not found');
}

fs.writeFileSync('src/App.jsx', result, 'utf8');
console.log('Generated clean src/App.jsx!');
