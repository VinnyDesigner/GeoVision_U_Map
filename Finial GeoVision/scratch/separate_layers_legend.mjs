import fs from 'fs';

const filePath = 'd:/GeoVision/Finial GeoVision/src/App.jsx';
let content = fs.readFileSync(filePath, 'utf8');
const isCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Add EyeOff import
if (!content.includes('EyeOff,')) {
  content = content.replace('  Eye,', '  Eye,\n  EyeOff,');
  console.log('1. Added EyeOff import');
}

// 2. Add disabledLayers, toggleLayerCategory and getMapLayerCategories
const targetAfterLegendHelper = `    return items;
  };`;

const replacementAfterLegendHelper = `    return items;
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
  };`;

if (content.includes(targetAfterLegendHelper)) {
  content = content.replace(targetAfterLegendHelper, replacementAfterLegendHelper);
  console.log('2. Added layer helper functions');
} else {
  console.log('2. Could not find targetAfterLegendHelper');
}

// 3. Update left dock buttons for Layers (Button 1) and Legend (Button 4)
const oldDockButtons = `                  {/* 1. Layers */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'legend' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'الطبقات ومفتاح الخريطة' : 'Layers & Legend'}
                    onClick={() => {
                      setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend');
                    }}
                  >
                    <Layers size={17} strokeWidth={2.2} />
                  </button>

                  {/* 2. Draw */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'draw' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'القياس والرسم' : 'Measurement & Draw'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'draw' ? null : 'draw')}
                  >
                    <GeoVisionGradientIcon src={drawSvg} size={16} alt="Draw" />
                  </button>

                  {/* 3. Basemap */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'basemap' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'معرض خرائط الأساس' : 'Basemap Gallery'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'basemap' ? null : 'basemap')}
                  >
                    <GeoVisionGradientIcon src={basemapSvg} size={16} alt="Basemap" />
                  </button>

                  {/* 4. Legend */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'legend' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'مفتاح الخريطة والتحليل' : 'Legend & Analysis'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend')}
                  >
                    <GeoVisionGradientIcon src={legendSvg} size={16} alt="Legend" />
                  </button>`;

const newDockButtons = `                  {/* 1. Layers */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'layers' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'طبقات الخريطة' : 'Map Layers'}
                    onClick={() => {
                      setActiveLeftPopover(prev => prev === 'layers' ? null : 'layers');
                    }}
                  >
                    <Layers size={17} strokeWidth={2.2} />
                  </button>

                  {/* 2. Draw */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'draw' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'القياس والرسم' : 'Measurement & Draw'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'draw' ? null : 'draw')}
                  >
                    <GeoVisionGradientIcon src={drawSvg} size={16} alt="Draw" />
                  </button>

                  {/* 3. Basemap */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'basemap' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'معرض خرائط الأساس' : 'Basemap Gallery'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'basemap' ? null : 'basemap')}
                  >
                    <GeoVisionGradientIcon src={basemapSvg} size={16} alt="Basemap" />
                  </button>

                  {/* 4. Legend */}
                  <button
                    className={\`map-tool-dock-btn \${activeLeftPopover === 'legend' ? 'active' : ''}\`}
                    title={lang === 'ar' ? 'مفتاح الخريطة' : 'Map Legend'}
                    onClick={() => setActiveLeftPopover(prev => prev === 'legend' ? null : 'legend')}
                  >
                    <GeoVisionGradientIcon src={legendSvg} size={16} alt="Legend" />
                  </button>`;

if (content.includes(oldDockButtons)) {
  content = content.replace(oldDockButtons, newDockButtons);
  console.log('3. Updated dock buttons for Layers and Legend');
} else {
  console.log('3. Could not find oldDockButtons');
}

// 4. Add Map Layers Popover and Update Legend Popover
const oldLegendPopover = `          {/* DYNAMIC MAP LEGEND POPOVER CARD */}
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
                  <h4 style={{ fontSize: '12px', fontWeight: '700', color: theme === 'dark' ? '#FFFFFF' : '#002B5B', margin: 0, letterSpacing: '-0.01em' }}>{lang === 'ar' ? 'مفتاح الخريطة والطبقات' : 'Map Legend & Layers'}</h4>
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
                          boxShadow: \`0 0 5px \${item.color}80\`
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
          )}`;

const newPopoversBlock = `          {/* DYNAMIC MAP LAYERS POPOVER CARD */}
          {activeLeftPopover === 'layers' && (
            <div
              ref={leftPopoverRef}
              className="map-popover-card layers-popover-card"
              style={{
                bottom: '76px',
                left: lang === 'ar' ? 'auto' : '74px',
                right: lang === 'ar' ? '74px' : 'auto',
                width: '260px',
                transition: lang === 'ar' ? 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: lang === 'ar' ? 'rtl' : 'ltr'
              }}
            >
              <div style={{ padding: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Layers size={14} color={theme === 'dark' ? '#38BDF8' : '#004B87'} />
                    <h4 style={{ fontSize: '12px', fontWeight: '700', color: theme === 'dark' ? '#FFFFFF' : '#002B5B', margin: 0, letterSpacing: '-0.01em' }}>
                      {lang === 'ar' ? 'طبقات الخريطة' : 'Map Layers'}
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="popover-close-btn"
                    onClick={() => setActiveLeftPopover(null)}
                    title={lang === 'ar' ? 'إغلاق' : "Close"}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxHeight: '230px', overflowY: 'auto', paddingRight: lang === 'ar' ? '0' : '2px', paddingLeft: lang === 'ar' ? '2px' : '0' }}>
                  {getMapLayerCategories().map((cat, idx) => {
                    const isHidden = disabledLayers.has(cat.id);
                    return (
                      <div
                        key={idx}
                        className="layer-popover-row"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          background: isHidden
                            ? (theme === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(241, 245, 249, 0.6)')
                            : (theme === 'dark' ? 'rgba(14, 34, 70, 0.55)' : 'rgba(255, 255, 255, 0.75)'),
                          border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(226, 232, 240, 0.8)',
                          opacity: isHidden ? 0.65 : 1,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer'
                        }}
                        onClick={() => toggleLayerCategory(cat.id)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: 1 }}>
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: isHidden ? '#94A3B8' : cat.color,
                              flexShrink: 0,
                              boxShadow: isHidden ? 'none' : \`0 0 5px \${cat.color}80\`
                            }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                            <span style={{ fontSize: '11px', fontWeight: 600, color: theme === 'dark' ? '#F1F5F9' : '#002B5B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {lang === 'ar' ? cat.nameAr : cat.nameEn}
                            </span>
                            <span style={{ fontSize: '10px', color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                              {cat.count} {lang === 'ar' ? 'معلم' : 'features'}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          style={{
                            background: 'transparent',
                            border: 'none',
                            padding: '4px',
                            cursor: 'pointer',
                            color: isHidden ? (theme === 'dark' ? '#64748B' : '#94A3B8') : (theme === 'dark' ? '#38BDF8' : '#004B87'),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLayerCategory(cat.id);
                          }}
                          title={isHidden ? (lang === 'ar' ? 'إظهار الطبقة' : 'Show Layer') : (lang === 'ar' ? 'إخفاء الطبقة' : 'Hide Layer')}
                        >
                          {isHidden ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    style={{
                      flex: 1,
                      padding: '5px 8px',
                      fontSize: '11px',
                      fontWeight: 500,
                      borderRadius: '6px',
                      border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(0, 75, 135, 0.2)',
                      background: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(0, 75, 135, 0.05)',
                      color: theme === 'dark' ? '#38BDF8' : '#004B87',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onClick={() => {
                      setIsCategoryDrawerOpen(true);
                      setActiveLeftPopover(null);
                    }}
                  >
                    {lang === 'ar' ? 'جميع فئات الطبقات' : 'All Category Layers'}
                  </button>
                </div>
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
                          boxShadow: \`0 0 5px \${item.color}80\`
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
          )}`;

if (content.includes(oldLegendPopover)) {
  content = content.replace(oldLegendPopover, newPopoversBlock);
  console.log('4. Replaced Legend popover and added Layers popover');
} else {
  console.log('4. Could not find oldLegendPopover');
}

// 5. Connect LeafletMap activeSearchResults with disabledLayers filter
const oldLeafletSearch = `activeSearchResults={activeSearchResults}`;
const newLeafletSearch = `activeSearchResults={disabledLayers.size > 0 ? activeSearchResults.filter(item => !disabledLayers.has(item.category)) : activeSearchResults}`;

if (content.includes(oldLeafletSearch)) {
  content = content.replace(oldLeafletSearch, newLeafletSearch);
  console.log('5. Connected LeafletMap with layer filtering');
} else {
  console.log('5. Could not find oldLeafletSearch');
}

if (isCRLF) {
  content = content.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated App.jsx');
