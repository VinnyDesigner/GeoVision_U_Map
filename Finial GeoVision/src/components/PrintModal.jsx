import React, { useState, useEffect, useRef } from 'react';
import { X, Printer, FileText, Check, Layout, Compass, MapPin, Calendar, Layers, ZoomIn, ZoomOut, Maximize2, Sparkles, ChevronDown } from 'lucide-react';
import L from 'leaflet';
import { GIS_CATEGORY_COLORS, getGisCategorySymbolSvg, getGisPinSvg } from '../utils/gisSymbols.js';
import GeoVisionAnalyticsChart from './GeoVisionAnalyticsChart.jsx';

export default function PrintModal({
  isOpen,
  onClose,
  config = {},
  activeSearchResults = [],
  selectedLocation = null,
  activeAnalytics = null,
  currentQuery = '',
  currentCategory = '',
  lang = 'en',
  mapInstanceRef = null,
  activeBasemap = 'light',
  legendItems = [],
  theme = 'light'
}) {
  // 1. Print Configuration State
  const [pageSize, setPageSize] = useState(config.pageSize || 'A4'); // 'A4' | 'A3'
  const [orientation, setOrientation] = useState(config.orientation || 'landscape'); // 'landscape' | 'portrait'
  const [contentMode, setContentMode] = useState(config.content || (activeAnalytics ? 'analytics' : (selectedLocation ? 'details' : (activeSearchResults.length > 0 ? 'results' : 'map')))); // 'map' | 'legend' | 'results' | 'details' | 'analytics'
  const [extentMode, setExtentMode] = useState(config.extent || 'current'); // 'current' | 'feature' | 'results'
  
  // Optional GIS Elements
  const [includeLegend, setIncludeLegend] = useState(config.includeLegend !== undefined ? config.includeLegend : true);
  const [includeScale, setIncludeScale] = useState(config.includeScale !== undefined ? config.includeScale : true);
  const [includeNorthArrow, setIncludeNorthArrow] = useState(config.includeNorthArrow !== undefined ? config.includeNorthArrow : true);
  const [includeCoordinates, setIncludeCoordinates] = useState(config.includeCoordinates !== undefined ? config.includeCoordinates : true);
  const [includeTimestamp, setIncludeTimestamp] = useState(config.includeTimestamp !== undefined ? config.includeTimestamp : true);
  // Helper function to generate contextual dynamic title
  const getContextualTitle = () => {
    if (config.title) return config.title;
    if (contentMode === 'analytics' && activeAnalytics) {
      return activeAnalytics.title || (lang === 'ar' ? 'التحليلات المكانية والإحصائية' : 'Spatial Analytics & Chart Report');
    }
    if ((contentMode === 'details' || (!config.content && selectedLocation)) && selectedLocation) {
      return lang === 'ar'
        ? `المعلم المحدد — ${selectedLocation.arabicTitle || selectedLocation.title}`
        : `Selected Feature — ${selectedLocation.title}`;
    }
    if (currentQuery && currentQuery.trim().length > 0) {
      // Capitalize first character if needed
      const q = currentQuery.trim();
      return q.charAt(0).toUpperCase() + q.slice(1);
    }
    if (currentCategory && currentCategory.trim().length > 0) {
      return lang === 'ar'
        ? `خريطة وتحليل بيانات: ${currentCategory}`
        : `GeoVision ${currentCategory} Spatial Analysis Map`;
    }
    return lang === 'ar' ? 'تقرير خريطة منصة GeoVision المكانية' : 'GeoVision GIS Map & Spatial Analysis Report';
  };

  const [customTitle, setCustomTitle] = useState(() => getContextualTitle());
  const [customSubtitle, setCustomSubtitle] = useState('');

  const previewMapRef = useRef(null);
  const previewLeafletInstance = useRef(null);
  const previewMarkersGroupRef = useRef(null);

  // Sync incoming config when opened
  useEffect(() => {
    if (isOpen) {
      if (config.pageSize) setPageSize(config.pageSize);
      if (config.orientation) setOrientation(config.orientation);
      if (config.content) {
        setContentMode(config.content);
      } else if (activeAnalytics) {
        setContentMode('analytics');
      } else if (selectedLocation) {
        setContentMode('details');
      } else if (activeSearchResults.length > 0) {
        setContentMode('results');
      } else {
        setContentMode('map');
      }
      if (config.extent) setExtentMode(config.extent);
      if (config.includeLegend !== undefined) setIncludeLegend(config.includeLegend);
      if (config.includeScale !== undefined) setIncludeScale(config.includeScale);
      if (config.includeNorthArrow !== undefined) setIncludeNorthArrow(config.includeNorthArrow);
      if (config.includeCoordinates !== undefined) setIncludeCoordinates(config.includeCoordinates);
      if (config.includeTimestamp !== undefined) setIncludeTimestamp(config.includeTimestamp);
      
      // Dynamic Title Generation from application context
      if (config.title) {
        setCustomTitle(config.title);
      } else if ((config.content === 'analytics' || (!config.content && activeAnalytics)) && activeAnalytics?.title) {
        setCustomTitle(activeAnalytics.title);
      } else if (config.content === 'details' && selectedLocation) {
        setCustomTitle(lang === 'ar' ? `المعلم المحدد — ${selectedLocation.arabicTitle || selectedLocation.title}` : `Selected Feature — ${selectedLocation.title}`);
      } else if (currentQuery && currentQuery.trim().length > 0) {
        const q = currentQuery.trim();
        setCustomTitle(q.charAt(0).toUpperCase() + q.slice(1));
      } else if (selectedLocation && !currentQuery) {
        setCustomTitle(lang === 'ar' ? `المعلم المحدد — ${selectedLocation.arabicTitle || selectedLocation.title}` : `Selected Feature — ${selectedLocation.title}`);
      } else if (currentCategory) {
        setCustomTitle(lang === 'ar' ? `خريطة وتحليل بيانات: ${currentCategory}` : `GeoVision ${currentCategory} Spatial Analysis Map`);
      } else {
        setCustomTitle(lang === 'ar' ? 'تقرير خريطة منصة GeoVision المكانية' : 'GeoVision GIS Map & Spatial Analysis Report');
      }
      
      if (activeAnalytics?.subtitle) {
        setCustomSubtitle(activeAnalytics.subtitle);
      } else if (currentQuery) {
        setCustomSubtitle(lang === 'ar' ? `استعلام البحث: "${currentQuery}"` : `Spatial Query: "${currentQuery}"`);
      } else if (selectedLocation) {
        setCustomSubtitle(`${selectedLocation.category} • ${selectedLocation.address || selectedLocation.city || (lang === 'ar' ? 'أبوظبي' : 'Abu Dhabi')}`);
      } else if (currentCategory) {
        setCustomSubtitle(lang === 'ar' ? `الفئة: ${currentCategory}` : `Category: ${currentCategory}`);
      } else {
        setCustomSubtitle(lang === 'ar' ? 'البنية التحتية للبيانات المكانية لإمارة أبوظبي (SDI)' : 'Abu Dhabi Spatial Data Infrastructure (SDI)');
      }
    }
  }, [isOpen, config, currentQuery, currentCategory, selectedLocation, activeAnalytics, lang]);


  // Initialize or update the Print Preview Map
  useEffect(() => {
    if (!isOpen || !previewMapRef.current) return;

    let center = [24.4539, 54.3773];
    let zoom = 12;

    if (mapInstanceRef && mapInstanceRef.current) {
      center = mapInstanceRef.current.getCenter();
      zoom = mapInstanceRef.current.getZoom();
    }

    if (!previewLeafletInstance.current) {
      const pMap = L.map(previewMapRef.current, {
        center: center,
        zoom: zoom,
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false
      });

      previewMarkersGroupRef.current = L.layerGroup().addTo(pMap);
      previewLeafletInstance.current = pMap;
    }

    const pMap = previewLeafletInstance.current;
    if (!pMap) return;

    // Tile Layer handling
    let tileUrl = 'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/Basemap/DGE_Color_Basemap_WM/MapServer/tile/{z}/{y}/{x}';
    if (activeBasemap === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    } else if (activeBasemap === 'light') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    } else if (activeBasemap === 'dark') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    } else if (activeBasemap === 'topo') {
      tileUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
    } else if (activeBasemap === 'dge_color' || activeBasemap === 'streets') {
      tileUrl = 'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/Basemap/DGE_Color_Basemap_WM/MapServer/tile/{z}/{y}/{x}';
    }

    if (!pMap._tileLayer) {
      pMap._tileLayer = L.tileLayer(tileUrl, { maxZoom: 19, subdomains: 'abc' }).addTo(pMap);
      pMap._currentTileUrl = tileUrl;
    } else if (pMap._currentTileUrl !== tileUrl) {
      pMap.removeLayer(pMap._tileLayer);
      pMap._tileLayer = L.tileLayer(tileUrl, { maxZoom: 19, subdomains: 'abc' }).addTo(pMap);
      pMap._currentTileUrl = tileUrl;
    }

    // Invalidate size in case container dimensions changed
    setTimeout(() => {
      pMap.invalidateSize();
    }, 100);

    // Plot Markers
    const mGroup = previewMarkersGroupRef.current;
    if (mGroup) {
      mGroup.clearLayers();
      const validPoints = [];

      const itemsToPlot = activeSearchResults.length > 0
        ? activeSearchResults
        : (selectedLocation ? [selectedLocation] : []);

      itemsToPlot.forEach(item => {
        const lat = parseFloat(item.lat);
        const lon = parseFloat(item.lon);
        if (isNaN(lat) || isNaN(lon)) return;

        validPoints.push([lat, lon]);
        const isSelected = selectedLocation && selectedLocation.id === item.id;

        const pinHtml = `
          <div class="geovision-pin-marker ${isSelected ? 'active-pin' : ''}">
            ${getGisPinSvg(item.category, isSelected)}
          </div>
        `;

        const icon = L.divIcon({
          html: pinHtml,
          className: 'geovision-map-div-icon',
          iconSize: [28, 36],
          iconAnchor: [14, 35]
        });

        L.marker([lat, lon], { icon }).addTo(mGroup);
      });

      // Adjust Extent according to extentMode
      if (extentMode === 'feature' && selectedLocation && selectedLocation.lat != null) {
        pMap.setView([selectedLocation.lat, selectedLocation.lon], 15);
      } else if (extentMode === 'results' && validPoints.length > 1) {
        pMap.fitBounds(L.latLngBounds(validPoints), { padding: [40, 40] });
      } else if (mapInstanceRef?.current && extentMode === 'current') {
        pMap.setView(mapInstanceRef.current.getCenter(), mapInstanceRef.current.getZoom());
      }
    }

    return () => {
      // Cleanup on unmount
    };
  }, [isOpen, pageSize, orientation, extentMode, activeSearchResults, selectedLocation, activeBasemap]);

  // Clean up Leaflet on modal close
  useEffect(() => {
    if (!isOpen && previewLeafletInstance.current) {
      previewLeafletInstance.current.remove();
      previewLeafletInstance.current = null;
      previewMarkersGroupRef.current = null;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrintTrigger = () => {
    if (previewLeafletInstance.current) {
      previewLeafletInstance.current.invalidateSize();
    }
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const centerCoords = mapInstanceRef?.current ? mapInstanceRef.current.getCenter() : { lat: 24.4539, lng: 54.3773 };
  const currentFormattedDate = new Date().toLocaleString(lang === 'ar' ? 'ar-AE' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <>
      {/* Dynamic @page print CSS matching selected page size and orientation */}
      <style type="text/css">{`
        @page {
          size: ${pageSize} ${orientation};
          margin: 6mm 8mm;
        }
      `}</style>

      {/* 1. INTERACTIVE PRINT CONFIGURATION & LIVE PREVIEW MODAL */}
      <div className="geovision-print-modal-overlay" onClick={onClose} data-theme={theme}>
        <div
          className={`geovision-print-modal-dialog ${theme === 'dark' ? 'dark-theme' : ''}`}
          onClick={(e) => e.stopPropagation()}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          data-theme={theme}
        >
          {/* Header */}
          <div className="print-modal-header no-print">
            <div className="print-modal-title-group">
              <div className="print-modal-icon-badge geovision-ai-badge">
                <Printer size={18} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="print-modal-title">
                  {lang === 'ar' ? 'تصدير وطباعة الخريطة والبيانات المكانية' : 'Print & Export Spatial Map'}
                </h3>
                <p className="print-modal-subtitle">
                  {lang === 'ar'
                    ? 'تخصيص تنسيق المستند ومحتوى الخريطة والبيانات الوصفية وحفظها كملف PDF عالي الدقة'
                    : 'Configure page layout, map extent, GIS legend, and export as high-resolution PDF or print.'}
                </p>
              </div>
            </div>
            <button className="print-modal-close-btn" onClick={onClose} title={lang === 'ar' ? 'إغلاق' : 'Close'}>
              <X size={18} />
            </button>
          </div>

          {/* Body: Configuration Left/Right + Preview Container */}
          <div className="print-modal-body">
            {/* Configuration Form Column */}
            <div className="print-modal-config-pane no-print">
              {/* 1. Page Size & Orientation (DROPDOWN) */}
              <div className="print-config-section">
                <label className="print-config-label">
                  <Layout size={14} />
                  <span>{lang === 'ar' ? 'تنسيق الصفحة والاتجاه' : 'Page Size & Orientation'}</span>
                </label>
                <div className="print-select-wrapper">
                  <select
                    className="print-dropdown-select"
                    value={`${pageSize}-${orientation}`}
                    onChange={(e) => {
                      const [ps, ori] = e.target.value.split('-');
                      setPageSize(ps);
                      setOrientation(ori);
                    }}
                  >
                    <option value="A4-landscape">A4 {lang === 'ar' ? 'أفقي (افتراضي)' : 'Landscape (Default)'}</option>
                    <option value="A4-portrait">A4 {lang === 'ar' ? 'عمودي' : 'Portrait'}</option>
                    <option value="A3-landscape">A3 {lang === 'ar' ? 'أفقي' : 'Landscape'}</option>
                    <option value="A3-portrait">A3 {lang === 'ar' ? 'عمودي' : 'Portrait'}</option>
                  </select>
                  <ChevronDown size={14} className="print-dropdown-chevron" />
                </div>
              </div>

              {/* 2. Document Content (DROPDOWN) */}
              <div className="print-config-section">
                <label className="print-config-label">
                  <FileText size={14} />
                  <span>{lang === 'ar' ? 'محتوى المستند' : 'Document Content'}</span>
                </label>
                <div className="print-select-wrapper">
                  <select
                    className="print-dropdown-select"
                    value={contentMode}
                    onChange={(e) => setContentMode(e.target.value)}
                  >
                    <option value="map">{lang === 'ar' ? 'الخريطة الحالية فقط' : 'Current Map Only'}</option>
                    <option value="legend">{lang === 'ar' ? 'الخريطة + مفتاح الطبقات (Legend)' : 'Current Map + Dynamic Legend'}</option>
                    {activeAnalytics && (
                      <option value="analytics">
                        {lang === 'ar' ? `الخريطة + التحليلات الإحصائية (${activeAnalytics.title || 'التحليلات'})` : `Current Map + Analytics (${activeAnalytics.title || 'Analytics'})`}
                      </option>
                    )}
                    <option value="results">
                      {lang === 'ar' ? `الخريطة + جدول نتائج البحث (${activeSearchResults.length} معلم)` : `Current Map + Search Results Table (${activeSearchResults.length} items)`}
                    </option>
                    {activeAnalytics && activeSearchResults.length > 0 && (
                      <option value="results_analytics">
                        {lang === 'ar' ? `الخريطة + التحليلات + نتائج البحث (${activeSearchResults.length} معلم)` : `Current Map + Analytics + Results Table (${activeSearchResults.length} items)`}
                      </option>
                    )}
                    {selectedLocation && (
                      <option value="details">
                        {lang === 'ar' ? `الخريطة + تفاصيل المعلم (${selectedLocation.arabicTitle || selectedLocation.title})` : `Current Map + Selected Feature (${selectedLocation.title})`}
                      </option>
                    )}
                  </select>
                  <ChevronDown size={14} className="print-dropdown-chevron" />
                </div>
              </div>

              {/* 3. Map Extent (DROPDOWN) */}
              <div className="print-config-section">
                <label className="print-config-label">
                  <Maximize2 size={14} />
                  <span>{lang === 'ar' ? 'نطاق الخريطة (Extent)' : 'Map Extent'}</span>
                </label>
                <div className="print-select-wrapper">
                  <select
                    className="print-dropdown-select"
                    value={extentMode}
                    onChange={(e) => setExtentMode(e.target.value)}
                  >
                    <option value="current">{lang === 'ar' ? 'الرؤية الحالية للخريطة' : 'Current Map View'}</option>
                    {selectedLocation && (
                      <option value="feature">
                        {lang === 'ar' ? `تركيز المعلم المحدد (${selectedLocation.arabicTitle || selectedLocation.title})` : `Selected Feature Focus (${selectedLocation.title})`}
                      </option>
                    )}
                    {activeSearchResults.length > 1 && (
                      <option value="results">
                        {lang === 'ar' ? `إحاطة كافة النتائج (${activeSearchResults.length} معلم)` : `Search Results Bounding Extent (${activeSearchResults.length} items)`}
                      </option>
                    )}
                  </select>
                  <ChevronDown size={14} className="print-dropdown-chevron" />
                </div>
              </div>

              {/* 4. Optional GIS Elements Checklist */}
              <div className="print-config-section">
                <label className="print-config-label">
                  <Layers size={14} />
                  <span>{lang === 'ar' ? 'العناصر المكانية الإضافية' : 'Map & Cartographic Elements'}</span>
                </label>
                <div className="print-checkboxes-grid">
                  <label className="print-check-item">
                    <input
                      type="checkbox"
                      checked={includeLegend}
                      onChange={(e) => setIncludeLegend(e.target.checked)}
                    />
                    <span>{lang === 'ar' ? 'مفتاح الخريطة' : 'Legend'}</span>
                  </label>
                  <label className="print-check-item">
                    <input
                      type="checkbox"
                      checked={includeScale}
                      onChange={(e) => setIncludeScale(e.target.checked)}
                    />
                    <span>{lang === 'ar' ? 'مقياس الرسم' : 'Scale Bar'}</span>
                  </label>
                  <label className="print-check-item">
                    <input
                      type="checkbox"
                      checked={includeNorthArrow}
                      onChange={(e) => setIncludeNorthArrow(e.target.checked)}
                    />
                    <span>{lang === 'ar' ? 'سهم الشمال' : 'North Arrow'}</span>
                  </label>
                  <label className="print-check-item">
                    <input
                      type="checkbox"
                      checked={includeCoordinates}
                      onChange={(e) => setIncludeCoordinates(e.target.checked)}
                    />
                    <span>{lang === 'ar' ? 'الإحداثيات الجغرافية' : 'Coordinates'}</span>
                  </label>
                  <label className="print-check-item">
                    <input
                      type="checkbox"
                      checked={includeTimestamp}
                      onChange={(e) => setIncludeTimestamp(e.target.checked)}
                    />
                    <span>{lang === 'ar' ? 'التاريخ والوقت' : 'Date / Timestamp'}</span>
                  </label>
                </div>
              </div>

              {/* 5. Title Customization */}
              <div className="print-config-section">
                <label className="print-config-label">
                  <span>{lang === 'ar' ? 'عنوان المستند' : 'Document Title'}</span>
                </label>
                <input
                  type="text"
                  className="print-input-text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="Report Title..."
                />
              </div>
            </div>

            {/* Live Document Preview & Printable Sheet */}
            <div className="print-modal-preview-pane">
              <div className="print-preview-toolbar no-print">
                <span className="print-preview-status">
                  {lang === 'ar' ? 'معاينة المستند المطبوع' : 'Live Print Preview'} &mdash; {pageSize} {orientation}
                </span>
              </div>

              <div id="geovision-print-document" className={`print-document print-sheet-wrapper aspect-${pageSize.toLowerCase()}-${orientation} print-page-${pageSize.toLowerCase()} print-page-${orientation} print-content-${contentMode}`}>
                <div className="print-sheet-content" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  {/* Branding Header */}
                  <div className="print-sheet-header">
                    <div className="print-header-brand">
                      <div className="print-logo-circle">GV</div>
                      <div>
                        <div className="print-brand-title">GeoVision &bull; {lang === 'ar' ? 'حكومة أبوظبي' : 'Abu Dhabi GIS'}</div>
                        <div className="print-brand-sub">Department of Government Enablement (DGE) &bull; Abu Dhabi Spatial Data Infrastructure (SDI)</div>
                      </div>
                    </div>
                    <div className="print-header-meta">
                      <div className="print-doc-title">{customTitle}</div>
                      {customSubtitle && <div className="print-doc-sub">{customSubtitle}</div>}
                    </div>
                  </div>

                  {/* Map Canvas Frame with Mounted Leaflet Container */}
                  <div className="print-map-frame">
                    <div ref={previewMapRef} className="print-leaflet-container" />

                    {/* North Arrow Inset */}
                    {includeNorthArrow && (
                      <div className="print-inset-north">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <polygon points="12,2 17,21 12,17 7,21" fill="#002B5B" stroke="#FFFFFF" strokeWidth="1" />
                          <text x="12" y="10" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">N</text>
                        </svg>
                      </div>
                    )}

                    {/* Scale Inset */}
                    {includeScale && (
                      <div className="print-inset-scale">
                        <div className="print-scale-bar-line" />
                        <span className="print-scale-text">1 : 50,000 &bull; 500 m</span>
                      </div>
                    )}

                    {/* Coordinates Inset */}
                    {includeCoordinates && (
                      <div className="print-inset-coords">
                        {centerCoords.lat.toFixed(4)}° N, {centerCoords.lng.toFixed(4)}° E | Zoom: {mapInstanceRef?.current?.getZoom() || 12}
                      </div>
                    )}

                    {/* Compact Legend Overlay in map */}
                    {includeLegend && (contentMode === 'legend' || contentMode === 'map') && legendItems.length > 0 && (
                      <div className="print-inset-legend">
                        <div className="print-legend-title">{lang === 'ar' ? 'مفتاح الخريطة' : 'Legend'}</div>
                        <div className="print-legend-list">
                          {legendItems.slice(0, 5).map((leg, i) => (
                            <div key={i} className="print-legend-row">
                              <span className="print-legend-swatch" style={{ background: leg.color || '#1D68F2' }} />
                              <span className="print-legend-label">{leg.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Selected Feature Card in Sheet */}
                  {contentMode === 'details' && selectedLocation && (
                    <div className="print-sheet-feature-card">
                      <div className="print-feature-card-header">
                        <div>
                          <h4 className="print-feature-name">{selectedLocation.title}</h4>
                          {selectedLocation.arabicTitle && (
                            <div className="print-feature-arabic">{selectedLocation.arabicTitle}</div>
                          )}
                        </div>
                        <div className="print-feature-badge" style={{ borderColor: GIS_CATEGORY_COLORS[selectedLocation.category] || '#10447C' }}>
                          {selectedLocation.category} / {selectedLocation.subcategory}
                        </div>
                      </div>

                      <div className="print-feature-attr-grid">
                        <div className="print-attr-col">
                          <span className="attr-key">{lang === 'ar' ? 'المنطقة / العنوان' : 'Address / District'}:</span>
                          <span className="attr-val">{selectedLocation.address || selectedLocation.city || 'Abu Dhabi'}</span>
                        </div>
                        {selectedLocation.sector && (
                          <div className="print-attr-col">
                            <span className="attr-key">{lang === 'ar' ? 'القطاع' : 'Sector'}:</span>
                            <span className="attr-val">{selectedLocation.sector}</span>
                          </div>
                        )}
                        {selectedLocation.rating && (
                          <div className="print-attr-col">
                            <span className="attr-key">{lang === 'ar' ? 'التقييم' : 'Rating'}:</span>
                            <span className="attr-val">&starf; {selectedLocation.rating} / 5.0</span>
                          </div>
                        )}
                        {selectedLocation.curriculum && (
                          <div className="print-attr-col">
                            <span className="attr-key">{lang === 'ar' ? 'المنهاج' : 'Curriculum'}:</span>
                            <span className="attr-val">{selectedLocation.curriculum}</span>
                          </div>
                        )}
                        {selectedLocation.beds && (
                          <div className="print-attr-col">
                            <span className="attr-key">{lang === 'ar' ? 'عدد الأسرّة' : 'Bed Capacity'}:</span>
                            <span className="attr-val">{selectedLocation.beds} {lang === 'ar' ? 'سرير' : 'beds'}</span>
                          </div>
                        )}
                        {selectedLocation.open247 && (
                          <div className="print-attr-col">
                            <span className="attr-key">{lang === 'ar' ? 'ساعات العمل' : 'Hours'}:</span>
                            <span className="attr-val">{lang === 'ar' ? 'طوارئ 24/7' : '24/7 Emergency'}</span>
                          </div>
                        )}
                        <div className="print-attr-col">
                          <span className="attr-key">{lang === 'ar' ? 'الإحداثيات' : 'Lat / Lon'}:</span>
                          <span className="attr-val">{selectedLocation.lat?.toFixed(5)}, {selectedLocation.lon?.toFixed(5)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Search Results Table in Sheet */}
                  {(contentMode === 'results' || contentMode === 'results_analytics') && activeSearchResults.length > 0 && (
                    <div className="print-sheet-results-table">
                      <div className="print-table-header">
                        <span>#</span>
                        <span>{lang === 'ar' ? 'اسم المنشأة' : 'Facility Name'}</span>
                        <span>{lang === 'ar' ? 'الفئة' : 'Category'}</span>
                        <span>{lang === 'ar' ? 'المنطقة' : 'District'}</span>
                        <span>{lang === 'ar' ? 'التقييم / المسافة' : 'Rating / Distance'}</span>
                      </div>
                      <div className="print-table-rows">
                        {activeSearchResults.slice(0, 8).map((res, idx) => (
                          <div key={res.id || idx} className="print-table-row">
                            <span className="row-num">{idx + 1}</span>
                            <span className="row-title"><strong>{res.title}</strong></span>
                            <span className="row-cat">{res.category}</span>
                            <span className="row-dist">{res.address || res.city || 'Abu Dhabi'}</span>
                            <span className="row-val">
                              {res.distanceKm ? `${res.distanceKm} km` : (res.rating ? `${res.rating} ★` : '-')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Analytics Chart in Sheet Preview */}
                  {(contentMode === 'analytics' || contentMode === 'results_analytics') && activeAnalytics && (
                    <div className="print-sheet-analytics-card" style={{
                      background: '#FFFFFF',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 75, 135, 0.15)',
                      marginTop: '8px'
                    }}>
                      <GeoVisionAnalyticsChart analytics={activeAnalytics} lang={lang} />
                    </div>
                  )}

                  {/* Sheet Footer */}
                  <div className="print-sheet-footer">
                    <div className="print-footer-attribution">
                      &copy; Department of Government Enablement (DGE) &bull; Abu Dhabi Spatial Data Infrastructure (SDI)
                    </div>
                    {includeTimestamp && (
                      <div className="print-footer-timestamp">
                        <Calendar size={11} /> {currentFormattedDate}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="print-modal-footer no-print">
            <button type="button" className="print-btn-secondary" onClick={onClose}>
              {lang === 'ar' ? 'إلغاء' : 'Cancel'}
            </button>
            <div className="geovision-ai-print-btn-wrapper">
              <button type="button" className="geovision-ai-print-btn" onClick={handlePrintTrigger}>
                <Printer size={15} strokeWidth={2.4} />
                <span>{lang === 'ar' ? 'طباعة / حفظ كملف PDF' : 'Print / Save as PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
