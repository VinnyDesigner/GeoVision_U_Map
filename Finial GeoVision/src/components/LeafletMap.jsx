import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ABU_DHABI_SPATIAL_DATASET } from '../services/spatialSearchService.js';
import { GIS_CATEGORY_COLORS, getGisCategorySymbolSvg, getGisPinSvg } from '../utils/gisSymbols.js';

export default function LeafletMap({
  userLocation = null,
  activeProject,
  layers,
  selectedLevel,
  selectedBuilding,
  setSelectedBuilding,
  volumeToolActive,
  clickPoints,
  setClickPoints,
  theme,
  activeBasemap = 'light',
  setHoveredCoords,
  setIsHovered,
  addLog,
  showToast,
  mapInstanceRef,
  activeSearchResults = [],
  selectedLocation,
  setSelectedLocation,
  onFeatureClick,
  setMapScale,
  activeDrawTool = null,
  setActiveDrawTool,
  onDrawnAreaComplete,
  onClearDrawnArea,
  lastDrawnQuery = null,
  restoredDrawnGeometry = null,
  clearVisualDrawnTrigger = 0,
  activeRoute = null,
  isNavigating = false,
  navStepIndex = 0,
  lang = 'en'
}) {
  const mapRef = useRef(null);
  const leafletInstance = useRef(null);
  const userLocationGroupRef = useRef(null);
  const markersGroupRef = useRef(null);
  const boundaryGroupRef = useRef(null);
  const volumeGroupRef = useRef(null);
  const searchMarkersGroupRef = useRef(null);
  const selectedGraphicsLayerRef = useRef(null);
  const drawnShapesGroupRef = useRef(null);
  const routeLayerGroupRef = useRef(null);
  const markersMapRef = useRef({});
  const hasAutoCenteredUserLocRef = useRef(false);

  // Stable refs to prevent re-render re-triggering map animations
  const onFeatureClickRef = useRef(onFeatureClick);
  onFeatureClickRef.current = onFeatureClick;

  const setSelectedLocationRef = useRef(setSelectedLocation);
  setSelectedLocationRef.current = setSelectedLocation;

  const lastFittedResultsKeyRef = useRef('');
  const lastSelectedLocIdRef = useRef(null);
  const lastLocateTriggerRef = useRef(null);
  const lastZoomTriggerRef = useRef(null);

  // Initialize Leaflet map centered on Abu Dhabi
  useEffect(() => {
    if (!mapRef.current || leafletInstance.current) return;

    // Define generous bounds for UAE & surroundings so zoom out/in is completely smooth without snapping
    const regionalBounds = [
      [21.00, 49.50], // Southwest corner
      [27.50, 58.50]  // Northeast corner
    ];

    // Center initially on Abu Dhabi: Lat 24.4539, Lon 54.3773
    const map = L.map(mapRef.current, {
      center: [24.4539, 54.3773],
      zoom: 12,
      minZoom: 6,
      maxZoom: 19,
      zoomControl: false,
      maxBounds: regionalBounds,
      maxBoundsViscosity: 0.2
    });

    leafletInstance.current = map;
    if (mapInstanceRef) mapInstanceRef.current = map;

    userLocationGroupRef.current = L.layerGroup().addTo(map);
    markersGroupRef.current = L.layerGroup().addTo(map);
    boundaryGroupRef.current = L.layerGroup().addTo(map);
    volumeGroupRef.current = L.layerGroup().addTo(map);
    searchMarkersGroupRef.current = L.layerGroup().addTo(map);
    selectedGraphicsLayerRef.current = L.layerGroup().addTo(map);
    drawnShapesGroupRef.current = L.layerGroup().addTo(map);
    routeLayerGroupRef.current = L.layerGroup().addTo(map);

    map.on('mousemove', (e) => {
      setHoveredCoords({
        lat: Number(e.latlng.lat.toFixed(5)),
        lon: Number(e.latlng.lng.toFixed(5)),
        elevation: (Math.sin(e.latlng.lat * 80) * 15 + 42).toFixed(1)
      });
      setIsHovered(true);
    });

    map.on('zoomend', () => {
      if (!setMapScale) return;
      const z = map.getZoom();
      const scaleMap = {
        10: '1 : 200,000',
        11: '1 : 100,000',
        12: '1 : 50,000',
        13: '1 : 25,000',
        14: '1 : 10,000',
        15: '1 : 5,000',
        16: '1 : 2,500',
        17: '1 : 1,000',
        18: '1 : 500'
      };
      setMapScale(scaleMap[z] || `1 : ${Math.round(50000 / Math.pow(2, z - 12)).toLocaleString()}`);
    });

    map.on('mouseout', () => {
      setIsHovered(false);
    });

    map.on('click', (e) => {
      if (volumeToolActive) {
        setClickPoints(prev => {
          if (prev.length >= 2) {
            return [{ lat: e.latlng.lat, lon: e.latlng.lng, elevation: 42.5 }];
          }
          const next = [...prev, { lat: e.latlng.lat, lon: e.latlng.lng, elevation: 42.5 }];
          if (next.length === 2) {
            const dLat = (next[1].lat - next[0].lat) * 111000;
            const dLon = (next[1].lon - next[0].lon) * 111000 * Math.cos(next[0].lat * Math.PI / 180);
            const dist = Math.sqrt(dLat * dLat + dLon * dLon).toFixed(1);
            showToast(`Volumetric Cut/Fill Computed: ${dist} m span`);
            addLog('Volume Analysis', `Measured distance between anchor points: ${dist} meters`, 'success');
          }
          return next;
        });
      }
    });

    // Auto resize Leaflet viewport when AI sidebar opens/closes or width is dragged
    const resizeObserver = new ResizeObserver(() => {
      if (leafletInstance.current) {
        leafletInstance.current.invalidateSize({ debounceMoveend: true });
      }
    });
    if (mapRef.current) {
      resizeObserver.observe(mapRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (userLocationGroupRef.current) userLocationGroupRef.current.clearLayers();
      if (searchMarkersGroupRef.current) searchMarkersGroupRef.current.clearLayers();
      if (markersGroupRef.current) markersGroupRef.current.clearLayers();
      userLocationGroupRef.current = null;
      searchMarkersGroupRef.current = null;
      markersGroupRef.current = null;
      boundaryGroupRef.current = null;
      volumeGroupRef.current = null;
      selectedGraphicsLayerRef.current = null;
      map.remove();
      leafletInstance.current = null;
      if (mapInstanceRef) mapInstanceRef.current = null;
    };
  }, []);

  // Dedicated Effect: Render User Location Pulsing Marker & Center on map opening
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map) return;

    if (!userLocationGroupRef.current) {
      userLocationGroupRef.current = L.layerGroup().addTo(map);
    }
    const userGroup = userLocationGroupRef.current;
    userGroup.clearLayers();

    if (userLocation && userLocation.lat != null && userLocation.lon != null) {
      const lat = parseFloat(userLocation.lat);
      const lon = parseFloat(userLocation.lon);
      if (!isNaN(lat) && !isNaN(lon)) {
        const pulseHtml = `
          <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%); pointer-events: auto;">
            <div style="position: absolute; width: 28px; height: 28px; border-radius: 50%; background: rgba(29, 104, 242, 0.30); animation: geovisionPulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;"></div>
            <div style="position: absolute; width: 14px; height: 14px; border-radius: 50%; background: #1D68F2; border: 2.5px solid #FFFFFF; box-shadow: 0 0 10px rgba(29, 104, 242, 0.75);"></div>
          </div>
        `;
        const pulseIcon = L.divIcon({
          html: pulseHtml,
          className: 'geovision-user-pulse-container',
          iconSize: [0, 0]
        });

        const userMarker = L.marker([lat, lon], { icon: pulseIcon, zIndexOffset: 1000 }).addTo(userGroup);
        userMarker.bindTooltip(userLocation.name || userLocation.arabicName || "Current Location", {
          permanent: false,
          direction: 'top',
          offset: [0, -10]
        });

        if (!hasAutoCenteredUserLocRef.current) {
          hasAutoCenteredUserLocRef.current = true;
          map.flyTo([lat, lon], 15, { duration: 1.5 });
        }
      }
    }
  }, [userLocation]);

  // Update base tile layer on theme or activeBasemap change
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map) return;

    if (map._tileLayer) {
      map.removeLayer(map._tileLayer);
    }

    // Default Abu Dhabi SDI DGE Unified Color Basemap (Web Mercator endpoint for Leaflet)
    let tileUrl = 'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/Basemap/DGE_Color_Basemap_WM/MapServer/tile/{z}/{y}/{x}';
    let attribution = '&copy; Department of Government Enablement (DGE) - Abu Dhabi SDI';
    let subdomains = 'abc';
    let maxZoom = 19;

    if (activeBasemap === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = '&copy; Esri &mdash; World Imagery';
    } else if (activeBasemap === 'light') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
      attribution = '&copy; CARTO &copy; OpenStreetMap contributors';
    } else if (activeBasemap === 'dark') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
      attribution = '&copy; CARTO &copy; OpenStreetMap contributors';
    } else if (activeBasemap === 'topo') {
      tileUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      attribution = '&copy; OpenStreetMap contributors, SRTM &copy; OpenTopoMap';
    } else if (activeBasemap === 'osm') {
      tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      attribution = '&copy; OpenStreetMap contributors';
    } else if (activeBasemap === 'dge_color' || activeBasemap === 'streets' || activeBasemap === 'abudhabi') {
      tileUrl = 'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/Basemap/DGE_Color_Basemap_WM/MapServer/tile/{z}/{y}/{x}';
      attribution = '&copy; Department of Government Enablement (DGE) - Abu Dhabi SDI';
    }

    const tileLayer = L.tileLayer(tileUrl, {
      maxZoom: maxZoom,
      minZoom: 6,
      subdomains: subdomains,
      attribution: attribution
    }).addTo(map);

    map._tileLayer = tileLayer;
  }, [theme, activeBasemap]);

  // Interactive GIS Drawing System & AI Spatial Query Trigger
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map) return;

    if (!drawnShapesGroupRef.current) {
      drawnShapesGroupRef.current = L.layerGroup().addTo(map);
    }
    const drawnGroup = drawnShapesGroupRef.current;
    const vertexMarkersGroup = L.layerGroup().addTo(map);

    // Expose global cleanup handler for shape popups
    window.__geovision_clear_draw_query = () => {
      if (drawnShapesGroupRef.current) drawnShapesGroupRef.current.clearLayers();
      vertexMarkersGroup.clearLayers();
      if (onClearDrawnArea) onClearDrawnArea();
      if (showToast) showToast("Spatial Query Area Cleared");
    };

    if (!activeDrawTool) {
      map.getContainer().style.cursor = '';
      vertexMarkersGroup.clearLayers();
      return;
    }

    // Disable double-click zoom during drawing gestures
    map.doubleClickZoom.disable();
    map.getContainer().style.cursor = 'crosshair';
    let drawPoints = [];
    let previewLayer = null;

    const clearPreview = () => {
      if (previewLayer && map.hasLayer(previewLayer)) {
        map.removeLayer(previewLayer);
        previewLayer = null;
      }
    };

    const clearVertexMarkers = () => {
      vertexMarkersGroup.clearLayers();
    };

    const finishPolygon = () => {
      // Filter out duplicate / zero-distance consecutive points
      const cleanPoints = [];
      for (let i = 0; i < drawPoints.length; i++) {
        if (cleanPoints.length === 0) {
          cleanPoints.push(drawPoints[i]);
        } else {
          const prev = cleanPoints[cleanPoints.length - 1];
          if (map.distance(prev, drawPoints[i]) > 0.5) {
            cleanPoints.push(drawPoints[i]);
          }
        }
      }
      if (cleanPoints.length < 3) return;
      clearPreview();
      clearVertexMarkers();
      drawnGroup.clearLayers();

      const poly = L.polygon(cleanPoints, {
        color: '#004B87',
        fillColor: '#004B87',
        fillOpacity: 0.20,
        weight: 2.5
      }).addTo(drawnGroup);

      poly.bindPopup(`
        <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
          <b style="color: #002B5B; font-size: 13px;">Drawn Query Polygon</b><br/>
          <span style="color: #475569; font-size: 11.5px;">Vertices: <b>${cleanPoints.length} points</b></span><br/>
          <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
        </div>
      `);

      if (onDrawnAreaComplete) {
        onDrawnAreaComplete({
          geometryType: 'polygon',
          coordinates: [...cleanPoints]
        });
      }
      drawPoints = [];
      if (setActiveDrawTool) setActiveDrawTool(null);
    };

    const finishLine = () => {
      const cleanPoints = [];
      for (let i = 0; i < drawPoints.length; i++) {
        if (cleanPoints.length === 0) {
          cleanPoints.push(drawPoints[i]);
        } else {
          const prev = cleanPoints[cleanPoints.length - 1];
          if (map.distance(prev, drawPoints[i]) > 0.5) {
            cleanPoints.push(drawPoints[i]);
          }
        }
      }
      if (cleanPoints.length < 2) return;
      clearPreview();
      clearVertexMarkers();
      drawnGroup.clearLayers();

      const polyline = L.polyline(cleanPoints, {
        color: '#004B87',
        weight: 3.5,
        dashArray: '6, 6'
      }).addTo(drawnGroup);

      let totalDist = 0;
      for (let i = 0; i < cleanPoints.length - 1; i++) {
        totalDist += map.distance(cleanPoints[i], cleanPoints[i + 1]);
      }
      const distStr = totalDist >= 1000 ? `${(totalDist / 1000).toFixed(2)} km` : `${Math.round(totalDist)} m`;

      polyline.bindPopup(`
        <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 150px; padding: 4px;">
          <b style="color: #002B5B; font-size: 13px;">Drawn Query Corridor</b><br/>
          <span style="color: #475569; font-size: 11.5px;">Length: <b>${distStr}</b></span><br/>
          <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Line</button>
        </div>
      `);

      if (onDrawnAreaComplete) {
        onDrawnAreaComplete({
          geometryType: 'line',
          coordinates: [...cleanPoints]
        });
      }
      drawPoints = [];
      if (setActiveDrawTool) setActiveDrawTool(null);
    };

    const cancelDraw = () => {
      clearPreview();
      clearVertexMarkers();
      drawPoints = [];
      if (setActiveDrawTool) setActiveDrawTool(null);
      if (showToast) showToast("Drawing cancelled");
    };

    const updateVertexMarkers = () => {
      clearVertexMarkers();
      if (drawPoints.length === 0) return;

      if (activeDrawTool === 'polygon') {
        const isClosable = drawPoints.length >= 3;
        const startIcon = L.divIcon({
          className: 'geovision-draw-start-anchor',
          html: `
            <div class="draw-anchor-wrapper ${isClosable ? 'is-closable' : ''}">
              <div class="draw-anchor-ring ${isClosable ? 'pulse' : ''}"></div>
              <div class="draw-anchor-dot"></div>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const startMarker = L.marker(drawPoints[0], {
          icon: startIcon,
          zIndexOffset: 2500,
          interactive: true
        }).addTo(vertexMarkersGroup);

        const handleStartFinish = (ev) => {
          if (ev) L.DomEvent.stopPropagation(ev);
          if (drawPoints.length >= 3) {
            finishPolygon();
          }
        };
        startMarker.on('click', handleStartFinish);
        startMarker.on('dblclick', handleStartFinish);

        for (let i = 1; i < drawPoints.length; i++) {
          const vertexIcon = L.divIcon({
            className: 'geovision-draw-vertex-dot',
            html: `<div class="draw-vertex-point"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
          });
          L.marker(drawPoints[i], {
            icon: vertexIcon,
            zIndexOffset: 900,
            interactive: false
          }).addTo(vertexMarkersGroup);
        }
      } else if (activeDrawTool === 'line') {
        for (let i = 0; i < drawPoints.length; i++) {
          const vertexIcon = L.divIcon({
            className: 'geovision-draw-vertex-dot',
            html: `<div class="draw-vertex-point"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
          });
          L.marker(drawPoints[i], {
            icon: vertexIcon,
            zIndexOffset: 900,
            interactive: false
          }).addTo(vertexMarkersGroup);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        cancelDraw();
      } else if (e.key === 'Enter') {
        if (activeDrawTool === 'polygon' && drawPoints.length >= 3) {
          finishPolygon();
        } else if (activeDrawTool === 'line' && drawPoints.length >= 2) {
          finishLine();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleMapClick = (e) => {
      const latlng = e.latlng;

      if (activeDrawTool === 'click') {
        // Point / Pin Marker
        drawnGroup.clearLayers();
        const pinHtml = `
          <div style="position: relative; width: 24px; height: 32px; transform: translate(-50%, -100%); cursor: pointer;">
            <div style="width: 22px; height: 22px; background: linear-gradient(135deg, #004B87 0%, #002B5B 100%); border: 2px solid #ffffff; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 4px 10px rgba(0,43,91,0.35); display:flex; align-items:center; justify-content:center;">
              <div style="width: 6px; height: 6px; background: #ffffff; border-radius: 50%; transform: rotate(45deg);"></div>
            </div>
          </div>
        `;
        const marker = L.marker(latlng, {
          icon: L.divIcon({ html: pinHtml, className: '', iconSize: [0, 0] })
        }).addTo(drawnGroup);

        marker.bindPopup(`
          <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 150px; padding: 4px;">
            <b style="color: #002B5B; font-size: 13px;">Spatial Query Anchor</b><br/>
            <span style="color: #475569; font-size: 11.5px;">Radius: 2.5 km Buffer</span><br/>
            <span style="color: #475569; font-size: 11.5px;">Coords: ${latlng.lat.toFixed(4)}°, ${latlng.lng.toFixed(4)}°</span><br/>
            <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query</button>
          </div>
        `).openPopup();

        if (onDrawnAreaComplete) {
          onDrawnAreaComplete({
            geometryType: 'click',
            center: latlng,
            coordinates: [latlng]
          });
        }
        if (setActiveDrawTool) setActiveDrawTool(null);
        return;
      }

      if (activeDrawTool === 'circle') {
        if (drawPoints.length === 0) {
          drawPoints.push(latlng);
          if (showToast) showToast("Click outer radius to finish Circle boundary");
        } else {
          const center = drawPoints[0];
          const radius = map.distance(center, latlng);
          if (radius < 5) return; // Ignore accidental double-click / jitter at same spot
          clearPreview();
          drawnGroup.clearLayers();

          const circle = L.circle(center, {
            radius: radius,
            color: '#004B87',
            fillColor: '#004B87',
            fillOpacity: 0.18,
            weight: 2.5
          }).addTo(drawnGroup);

          const areaKm = (Math.PI * Math.pow(radius / 1000, 2)).toFixed(2);
          const radStr = radius >= 1000 ? `${(radius / 1000).toFixed(2)} km` : `${Math.round(radius)} m`;

          circle.bindPopup(`
            <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
              <b style="color: #002B5B; font-size: 13px;">Drawn Query Circle</b><br/>
              <span style="color: #475569; font-size: 11.5px;">Radius: <b>${radStr}</b></span><br/>
              <span style="color: #475569; font-size: 11.5px;">Area: <b>${areaKm} km²</b></span><br/>
              <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
            </div>
          `);

          if (onDrawnAreaComplete) {
            onDrawnAreaComplete({
              geometryType: 'circle',
              center: center,
              radius: radius
            });
          }
          drawPoints = [];
          if (setActiveDrawTool) setActiveDrawTool(null);
        }
        return;
      }

      if (activeDrawTool === 'rectangle' || activeDrawTool === 'square') {
        if (drawPoints.length === 0) {
          drawPoints.push(latlng);
          if (showToast) showToast(`Click opposite corner to finish ${activeDrawTool === 'square' ? 'Square' : 'Rectangle'}`);
        } else {
          const p1 = drawPoints[0];
          let p2 = latlng;
          if (activeDrawTool === 'square') {
            const dLat = Math.abs(p2.lat - p1.lat);
            const dLng = dLat * Math.cos(p1.lat * Math.PI / 180);
            p2 = L.latLng(
              p2.lat >= p1.lat ? p1.lat + dLat : p1.lat - dLat,
              p2.lng >= p1.lng ? p1.lng + dLng : p1.lng - dLng
            );
          }
          const bounds = L.latLngBounds(p1, p2);
          clearPreview();
          drawnGroup.clearLayers();

          const rect = L.rectangle(bounds, {
            color: '#004B87',
            fillColor: '#004B87',
            fillOpacity: 0.18,
            weight: 2.5
          }).addTo(drawnGroup);

          const widthM = map.distance(L.latLng(p1.lat, p1.lng), L.latLng(p1.lat, p2.lng));
          const heightM = map.distance(L.latLng(p1.lat, p1.lng), L.latLng(p2.lat, p1.lng));
          const areaKm = ((widthM * heightM) / 1000000).toFixed(2);

          rect.bindPopup(`
            <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
              <b style="color: #002B5B; font-size: 13px;">Drawn Query Box</b><br/>
              <span style="color: #475569; font-size: 11.5px;">Dimensions: <b>${Math.round(widthM)}m × ${Math.round(heightM)}m</b></span><br/>
              <span style="color: #475569; font-size: 11.5px;">Area: <b>${areaKm} km²</b></span><br/>
              <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
            </div>
          `);

          if (onDrawnAreaComplete) {
            onDrawnAreaComplete({
              geometryType: activeDrawTool,
              bounds: bounds,
              coordinates: [p1, L.latLng(p1.lat, p2.lng), p2, L.latLng(p2.lat, p1.lng)]
            });
          }
          drawPoints = [];
          if (setActiveDrawTool) setActiveDrawTool(null);
        }
        return;
      }

      if (activeDrawTool === 'line') {
        drawPoints.push(latlng);
        updateVertexMarkers();
        return;
      }

      if (activeDrawTool === 'polygon') {
        // If 3 or more points exist, check if clicking near the starting endpoint to close
        if (drawPoints.length >= 3) {
          const firstPt = drawPoints[0];
          const p1 = map.latLngToContainerPoint(firstPt);
          const p2 = map.latLngToContainerPoint(latlng);
          const pixelDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          const meterDist = map.distance(firstPt, latlng);

          if (pixelDist <= 35 || meterDist <= 45) {
            finishPolygon();
            return;
          }
        }

        // Avoid pushing identical coordinate if user accidentally clicked at exact same spot
        if (drawPoints.length > 0) {
          const prevPt = drawPoints[drawPoints.length - 1];
          if (map.distance(prevPt, latlng) < 1) {
            return;
          }
        }

        drawPoints.push(latlng);
        updateVertexMarkers();
      }
    };

    const handleMapDblClick = (e) => {
      L.DomEvent.stopPropagation(e);
      if (activeDrawTool === 'polygon' && drawPoints.length >= 3) {
        finishPolygon();
      } else if (activeDrawTool === 'line' && drawPoints.length >= 2) {
        finishLine();
      }
    };

    const handleMouseMove = (e) => {
      if (drawPoints.length === 0) return;
      const latlng = e.latlng;

      if (activeDrawTool === 'circle') {
        const center = drawPoints[0];
        const radius = map.distance(center, latlng);
        clearPreview();
        previewLayer = L.circle(center, {
          radius: radius,
          color: '#004B87',
          fillColor: '#004B87',
          fillOpacity: 0.15,
          weight: 2,
          dashArray: '4, 4',
          interactive: false
        }).addTo(map);
      } else if (activeDrawTool === 'rectangle' || activeDrawTool === 'square') {
        const p1 = drawPoints[0];
        let p2 = latlng;
        if (activeDrawTool === 'square') {
          const dLat = Math.abs(p2.lat - p1.lat);
          const dLng = dLat * Math.cos(p1.lat * Math.PI / 180);
          p2 = L.latLng(
            p2.lat >= p1.lat ? p1.lat + dLat : p1.lat - dLat,
            p2.lng >= p1.lng ? p1.lng + dLng : p1.lng - dLng
          );
        }
        clearPreview();
        previewLayer = L.rectangle(L.latLngBounds(p1, p2), {
          color: '#004B87',
          fillColor: '#004B87',
          fillOpacity: 0.15,
          weight: 2,
          dashArray: '4, 4',
          interactive: false
        }).addTo(map);
      } else if (activeDrawTool === 'line') {
        clearPreview();
        previewLayer = L.polyline([...drawPoints, latlng], {
          color: '#004B87',
          weight: 2.5,
          dashArray: '4, 4',
          interactive: false
        }).addTo(map);
      } else if (activeDrawTool === 'polygon') {
        clearPreview();
        if (drawPoints.length >= 2) {
          previewLayer = L.polygon([...drawPoints, latlng], {
            color: '#004B87',
            fillColor: '#004B87',
            fillOpacity: 0.16,
            weight: 2,
            dashArray: '4, 4',
            interactive: false
          }).addTo(map);
        } else {
          previewLayer = L.polyline([...drawPoints, latlng], {
            color: '#004B87',
            weight: 2,
            dashArray: '4, 4',
            interactive: false
          }).addTo(map);
        }
      }
    };

    map.on('click', handleMapClick);
    map.on('dblclick', handleMapDblClick);
    map.on('mousemove', handleMouseMove);

    return () => {
      clearPreview();
      clearVertexMarkers();
      drawPoints = [];
      if (map.hasLayer(vertexMarkersGroup)) {
        map.removeLayer(vertexMarkersGroup);
      }
      map.doubleClickZoom.enable();
      window.removeEventListener('keydown', handleKeyDown);
      map.off('click', handleMapClick);
      map.off('dblclick', handleMapDblClick);
      map.off('mousemove', handleMouseMove);
    };
  }, [activeDrawTool]);

  // Restore drawn geometry from saved queries
  useEffect(() => {
    if (!restoredDrawnGeometry || !leafletInstance.current || !drawnShapesGroupRef.current) return;
    const map = leafletInstance.current;
    const drawnGroup = drawnShapesGroupRef.current;
    drawnGroup.clearLayers();

    const { geometryType, coordinates, center, radius, bounds } = restoredDrawnGeometry;

    if (geometryType === 'polygon' && coordinates && coordinates.length >= 3) {
      const poly = L.polygon(coordinates, {
        color: '#004B87',
        fillColor: '#004B87',
        fillOpacity: 0.20,
        weight: 2.5
      }).addTo(drawnGroup);

      poly.bindPopup(`
        <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
          <b style="color: #002B5B; font-size: 13px;">Restored Query Polygon</b><br/>
          <span style="color: #475569; font-size: 11.5px;">Vertices: <b>${coordinates.length} points</b></span><br/>
          <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
        </div>
      `);

      map.fitBounds(poly.getBounds(), { padding: [40, 40], maxZoom: 15 });
    } else if (geometryType === 'circle' && center && radius) {
      const circle = L.circle(center, {
        radius: radius,
        color: '#004B87',
        fillColor: '#004B87',
        fillOpacity: 0.18,
        weight: 2.5
      }).addTo(drawnGroup);

      const areaKm = (Math.PI * Math.pow(radius / 1000, 2)).toFixed(2);
      const radStr = radius >= 1000 ? `${(radius / 1000).toFixed(2)} km` : `${Math.round(radius)} m`;

      circle.bindPopup(`
        <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
          <b style="color: #002B5B; font-size: 13px;">Restored Query Circle</b><br/>
          <span style="color: #475569; font-size: 11.5px;">Radius: <b>${radStr}</b></span><br/>
          <span style="color: #475569; font-size: 11.5px;">Area: <b>${areaKm} km²</b></span><br/>
          <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
        </div>
      `);

      map.fitBounds(circle.getBounds(), { padding: [40, 40], maxZoom: 15 });
    } else if ((geometryType === 'rectangle' || geometryType === 'square') && (bounds || coordinates)) {
      let b = null;
      if (bounds) {
        if (typeof bounds.getSouthWest === 'function') {
          b = bounds;
        } else if (bounds._southWest && bounds._northEast) {
          b = L.latLngBounds(
            [bounds._southWest.lat, bounds._southWest.lng],
            [bounds._northEast.lat, bounds._northEast.lng]
          );
        } else if (Array.isArray(bounds) && bounds.length >= 2) {
          b = L.latLngBounds(bounds);
        }
      }
      if (!b && coordinates && coordinates.length >= 2) {
        b = L.latLngBounds(coordinates);
      }
      if (b) {
        const rect = L.rectangle(b, {
          color: '#004B87',
          fillColor: '#004B87',
          fillOpacity: 0.18,
          weight: 2.5
        }).addTo(drawnGroup);

        rect.bindPopup(`
          <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
            <b style="color: #002B5B; font-size: 13px;">Drawn Query Area</b><br/>
            <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
          </div>
        `);

        map.fitBounds(rect.getBounds(), { padding: [40, 40], maxZoom: 15 });
      }
    } else if (geometryType === 'line' && coordinates && coordinates.length >= 2) {
      const polyline = L.polyline(coordinates, {
        color: '#004B87',
        weight: 3.5,
        dashArray: '6, 6'
      }).addTo(drawnGroup);
      map.fitBounds(polyline.getBounds(), { padding: [40, 40], maxZoom: 15 });
    } else if ((geometryType === 'click' || geometryType === 'point') && (center || coordinates)) {
      const pt = center || (coordinates && coordinates[0]);
      if (pt) {
        const pinHtml = `
          <div style="position: relative; width: 24px; height: 32px; transform: translate(-50%, -100%); cursor: pointer;">
            <div style="width: 22px; height: 22px; background: linear-gradient(135deg, #004B87 0%, #002B5B 100%); border: 2px solid #ffffff; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 4px 10px rgba(0,43,91,0.35); display:flex; align-items:center; justify-content:center;">
              <div style="width: 6px; height: 6px; background: #ffffff; border-radius: 50%; transform: rotate(45deg);"></div>
            </div>
          </div>
        `;
        L.marker(pt, {
          icon: L.divIcon({ html: pinHtml, className: '', iconSize: [0, 0] })
        }).addTo(drawnGroup);
        map.flyTo([pt.lat, pt.lng || pt.lon], 14);
      }
    }
  }, [restoredDrawnGeometry]);

  // Clear visual drawn layers when signaled (e.g. after search results returned, or on new chat)
  useEffect(() => {
    if (clearVisualDrawnTrigger && drawnShapesGroupRef.current) {
      drawnShapesGroupRef.current.clearLayers();
    }
  }, [clearVisualDrawnTrigger]);

  // Clear drawn layers when drawn area query is cleared
  useEffect(() => {
    if (!lastDrawnQuery && !restoredDrawnGeometry && drawnShapesGroupRef.current) {
      drawnShapesGroupRef.current.clearLayers();
    }
  }, [lastDrawnQuery, restoredDrawnGeometry]);

  // Handle Selected Location Focusing, Zoom To Animation & Active Pin Highlighting
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map || !activeProject) return;

    map.flyTo([activeProject.lat, activeProject.lon], 15, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }, [activeProject]);

  // Render project layers (Buildings, Boundaries, Markers)
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map || !activeProject) return;

    const markersGroup = markersGroupRef.current;
    const boundaryGroup = boundaryGroupRef.current;
    if (!markersGroup || !boundaryGroup) return;

    // Clear operational markers when project layers are updated
    markersGroup.clearLayers();


    // 2. Boundary geofence
    if (layers.projectBoundary && activeProject.boundaryCoords) {
      const polygon = L.polygon(activeProject.boundaryCoords, {
        color: '#ef4444',
        weight: 2,
        dashArray: '6, 6',
        fillColor: '#ef4444',
        fillOpacity: 0.12
      }).addTo(boundaryGroup);
      polygon.bindTooltip(`${activeProject.name} Boundary Geofence`, { permanent: false });
    }

    // 2. Slope Heatmap
    if (layers.heatmapOverlay && activeProject.boundaryCoords) {
      L.polygon(activeProject.boundaryCoords, {
        color: '#f97316',
        weight: 1,
        fillColor: '#f97316',
        fillOpacity: 0.35
      }).addTo(boundaryGroup);
    }

    // 3. 3D Buildings
    if (layers.buildings3D && activeProject.buildings) {
      activeProject.buildings.forEach(b => {
        const isSelected = selectedBuilding && selectedBuilding.id === b.id;

        const iconHtml = `
          <div style="
            background: ${isSelected ? '#10b981' : '#00f2fe'};
            color: #040d1a;
            border: 2px solid #ffffff;
            border-radius: 8px;
            padding: 4px 8px;
            font-family: Inter, sans-serif;
            font-size: 11px;
            font-weight: 700;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            transform: translate(-50%, -100%);
          ">
            <span>🏢 ${b.name}</span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: iconHtml,
          className: '',
          iconSize: [0, 0]
        });

        const marker = L.marker([b.lat, b.lon], { icon: customIcon }).addTo(markersGroup);

        marker.on('click', () => {
          setSelectedBuilding(b);
          addLog('BIM View', `Selected structure '${b.name}' (Floors: ${b.floors}, Height: ${b.heightM}m)`, 'info');
          showToast(`Building Selected: ${b.name}`);
        });

        if (b.footprint) {
          const poly = L.polygon(b.footprint, {
            color: isSelected ? '#10b981' : '#00f2fe',
            weight: isSelected ? 3 : 2,
            fillColor: isSelected ? '#10b981' : '#00f2fe',
            fillOpacity: isSelected ? 0.45 : 0.25
          }).addTo(markersGroup);

          poly.on('click', () => {
            setSelectedBuilding(b);
            showToast(`Building Selected: ${b.name}`);
          });
        }
      });
    }
  }, [activeProject, layers, selectedBuilding]);

  // Render Volumetric Tool Anchors & Line
  useEffect(() => {
    const volumeGroup = volumeGroupRef.current;
    if (!volumeGroup) return;

    volumeGroup.clearLayers();

    if (clickPoints.length > 0) {
      clickPoints.forEach((pt, idx) => {
        L.circleMarker([pt.lat, pt.lon], {
          radius: 8,
          color: idx === 0 ? '#00f2fe' : '#f97316',
          fillColor: idx === 0 ? '#00f2fe' : '#f97316',
          fillOpacity: 0.95
        }).addTo(volumeGroup);
      });

      if (clickPoints.length === 2) {
        L.polyline([
          [clickPoints[0].lat, clickPoints[0].lon],
          [clickPoints[1].lat, clickPoints[1].lon]
        ], {
          color: '#f97316',
          weight: 3,
          dashArray: '8, 8'
        }).addTo(volumeGroup);
      }
    }
  }, [clickPoints]);

  // Render Spatial Search Markers & Auto Fit Viewport Bounds
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map) return;

    if (!searchMarkersGroupRef.current) {
      searchMarkersGroupRef.current = L.layerGroup().addTo(map);
    } else if (!map.hasLayer(searchMarkersGroupRef.current)) {
      map.addLayer(searchMarkersGroupRef.current);
    }
    const searchGroup = searchMarkersGroupRef.current;
    searchGroup.clearLayers();
    markersMapRef.current = {};

    // Clear the default center red pin if category markers exist
    if (markersGroupRef.current && activeSearchResults && activeSearchResults.length > 0) {
      markersGroupRef.current.clearLayers();
    }

    const isFilteredSearch = activeSearchResults && activeSearchResults.length > 0;
    const displayResults = isFilteredSearch
      ? activeSearchResults
      : [];

    const validLatLngs = [];

    displayResults.forEach(item => {
      const lat = parseFloat(item.lat);
      const lon = parseFloat(item.lon);
      if (isNaN(lat) || isNaN(lon)) return;

      validLatLngs.push([lat, lon]);

      const isSelected = selectedLocation && selectedLocation.id === item.id;

      const pinHtml = `
        <div id="spatial-pin-${item.id}" class="geovision-pin-marker ${isSelected ? 'active-pin' : ''}">
          ${getGisPinSvg(item.category, isSelected)}
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'geovision-map-div-icon',
        iconSize: [34, 42],
        iconAnchor: [17, 41]
      });

      const marker = L.marker([lat, lon], {
        icon: customIcon,
        interactive: true,
        riseOnHover: true,
        zIndexOffset: isSelected ? 3000 : 1000
      }).addTo(searchGroup);

      marker.bindTooltip(item.title, {
        permanent: false,
        direction: 'top',
        offset: [0, -36],
        className: 'geovision-pin-tooltip'
      });

      markersMapRef.current[item.id] = marker;

      if (isSelected) {
        marker.openTooltip();
      } else {
        marker.closeTooltip();
      }

      marker.on('click', (e) => {
        if (e && e.originalEvent) {
          e.originalEvent.stopPropagation();
        }
        if (onFeatureClickRef.current) {
          onFeatureClickRef.current(item);
        } else if (setSelectedLocationRef.current) {
          setSelectedLocationRef.current({ ...item, locateTrigger: Date.now() });
        }
        const cardEl = document.getElementById(`structured-card-${item.id}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    // Make global feature click handler available
    window.__geoVisionFeatureClick = (id) => {
      const found = displayResults.find(it => it.id === id);
      if (found) {
        if (onFeatureClickRef.current) onFeatureClickRef.current(found);
        else if (setSelectedLocationRef.current) setSelectedLocationRef.current({ ...found, locateTrigger: Date.now() });
      }
    };

    // Auto fit map bounds ONLY when the search results SET actually changes
    const resultsKey = displayResults.map(it => it.id).join(',');
    if (isFilteredSearch && validLatLngs.length > 0 && resultsKey !== lastFittedResultsKeyRef.current) {
      lastFittedResultsKeyRef.current = resultsKey;

      // Check if all results are already comfortably in view within the current map extent
      const currentMapBounds = map.getBounds();
      let isAlreadyFullyVisible = false;
      if (currentMapBounds && typeof currentMapBounds.isValid === 'function' && currentMapBounds.isValid()) {
        const resultsBounds = L.latLngBounds(validLatLngs);
        const mapNorthEast = currentMapBounds.getNorthEast();
        const mapSouthWest = currentMapBounds.getSouthWest();
        const latBuffer = (mapNorthEast.lat - mapSouthWest.lat) * 0.08;
        const lngBuffer = (mapNorthEast.lng - mapSouthWest.lng) * 0.08;
        const safeMapBounds = L.latLngBounds(
          [mapSouthWest.lat + latBuffer, mapSouthWest.lng + lngBuffer],
          [mapNorthEast.lat - latBuffer, mapNorthEast.lng - lngBuffer]
        );
        isAlreadyFullyVisible = safeMapBounds.contains(resultsBounds);
      }

      if (!isAlreadyFullyVisible) {
        if (validLatLngs.length > 1) {
          const bounds = L.latLngBounds(validLatLngs);
          map.fitBounds(bounds, { padding: [70, 70], maxZoom: 15, animate: true });
        } else if (validLatLngs.length === 1) {
          const currentZoom = map.getZoom();
          const targetZoom = Math.max(currentZoom, 14.5);
          map.setView(validLatLngs[0], targetZoom, { animate: true });
        }
      }
    }
  }, [activeSearchResults]);

  // Handle Selected Location Focusing, Zoom To Animation & Active Pin Highlighting
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map) return;

    if (!selectedLocation) {
      if (selectedGraphicsLayerRef.current) {
        selectedGraphicsLayerRef.current.clearLayers();
      }
      document.querySelectorAll('.geovision-pin-marker').forEach(el => el.classList.remove('active-pin'));
      return;
    }

    // Parse selected feature coordinates
    const lat = parseFloat(selectedLocation?.lat ?? selectedLocation?.coords?.[0]);
    const lon = parseFloat(selectedLocation?.lon ?? selectedLocation?.coords?.[1]);

    if (isNaN(lat) || isNaN(lon)) return;

    if (selectedGraphicsLayerRef.current) {
      selectedGraphicsLayerRef.current.clearLayers();
    }

    const isNewSelection = selectedLocation.id !== lastSelectedLocIdRef.current;
    const isNewLocateTrigger = selectedLocation.locateTrigger && selectedLocation.locateTrigger !== lastLocateTriggerRef.current;
    const isNewZoomTrigger = selectedLocation.zoomTrigger && selectedLocation.zoomTrigger !== lastZoomTriggerRef.current;

    lastSelectedLocIdRef.current = selectedLocation.id;
    if (selectedLocation.locateTrigger) lastLocateTriggerRef.current = selectedLocation.locateTrigger;
    if (selectedLocation.zoomTrigger) lastZoomTriggerRef.current = selectedLocation.zoomTrigger;

    // Pan or zoom to the selected location
    if (isNewZoomTrigger) {
      map.flyTo([lat, lon], 16, { duration: 1.0 });
    } else if (isNewSelection || isNewLocateTrigger) {
      const currentZoom = Math.max(map.getZoom(), 14.5);
      map.flyTo([lat, lon], currentZoom, { duration: 0.8 });
    }

    // Check if this location is already rendered in searchMarkersGroupRef
    const isAlreadyInSearchResults = Array.isArray(activeSearchResults) && activeSearchResults.some(it => {
      if (it.id && selectedLocation.id && it.id === selectedLocation.id) return true;
      const itLat = parseFloat(it.lat ?? (Array.isArray(it.coords) ? it.coords[0] : NaN));
      const itLon = parseFloat(it.lon ?? (Array.isArray(it.coords) ? it.coords[1] : NaN));
      return !isNaN(itLat) && !isNaN(itLon) && Math.abs(itLat - lat) < 0.0001 && Math.abs(itLon - lon) < 0.0001;
    });

    // Only render a fallback marker in selectedGraphicsLayerRef if not already present in searchMarkersGroupRef
    if (selectedGraphicsLayerRef.current && !isAlreadyInSearchResults) {
      const category = selectedLocation.category || selectedLocation.subcategory || 'General';
      const pinHtml = `
        <div id="spatial-pin-${selectedLocation.id}" class="geovision-pin-marker active-pin selected-focus-pin">
          ${getGisPinSvg(category, true)}
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'geovision-map-div-icon',
        iconSize: [34, 42],
        iconAnchor: [17, 41]
      });

      const selectedMarker = L.marker([lat, lon], {
        icon: customIcon,
        interactive: true,
        riseOnHover: true,
        zIndexOffset: 9999
      }).addTo(selectedGraphicsLayerRef.current);

      const labelTitle = selectedLocation.title || selectedLocation.name || selectedLocation.arabicTitle || '';
      if (labelTitle) {
        selectedMarker.bindTooltip(labelTitle, {
          permanent: true,
          direction: 'top',
          offset: [0, -36],
          className: 'geovision-pin-tooltip geovision-selected-tooltip'
        });
      }
    }

    // Toggle active pin DOM class highlight for existing markers
    document.querySelectorAll('.geovision-pin-marker').forEach(el => el.classList.remove('active-pin'));
    
    // Close tooltips on all non-selected symbology markers
    if (markersMapRef.current) {
      Object.entries(markersMapRef.current).forEach(([id, markerInstance]) => {
        if (markerInstance && typeof markerInstance.closeTooltip === 'function') {
          if (!selectedLocation || String(id) !== String(selectedLocation.id)) {
            markerInstance.closeTooltip();
          }
        }
      });
    }

    if (selectedLocation) {
      const activeEl = document.getElementById(`spatial-pin-${selectedLocation.id}`);
      if (activeEl) {
        activeEl.classList.add('active-pin');
      }
      if (markersMapRef.current && markersMapRef.current[selectedLocation.id]) {
        markersMapRef.current[selectedLocation.id].openTooltip();
      }
    }
  }, [selectedLocation]);

  // Handle Active Road Route Polyline, Navigation Beacon & Bounds Fitting
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map || !routeLayerGroupRef.current) return;

    routeLayerGroupRef.current.clearLayers();

    if (!activeRoute || !activeRoute.coordinates || activeRoute.coordinates.length < 2) {
      return;
    }

    const { coordinates, origin, destination, distanceText, durationText, modeObj } = activeRoute;
    const isDark = theme === 'dark';

    // 1. Background Halo / Glow Line (Enhances readability over any basemap)
    const haloColor = isDark ? 'rgba(56, 189, 248, 0.40)' : 'rgba(29, 104, 242, 0.28)';
    L.polyline(coordinates, {
      color: haloColor,
      weight: 11,
      opacity: 0.85,
      lineCap: 'round',
      lineJoin: 'round',
      interactive: false
    }).addTo(routeLayerGroupRef.current);

    // 2. Main Crisp Road Route Line
    const mainColor = isDark ? '#38BDF8' : '#1D68F2';
    L.polyline(coordinates, {
      color: mainColor,
      weight: 5.5,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round',
      interactive: true,
      dashArray: activeRoute.isFallback ? '8, 8' : undefined
    }).addTo(routeLayerGroupRef.current);

    // 3. Interactive Route Badge near route center
    if (durationText || distanceText) {
      const midIdx = Math.floor(coordinates.length / 2);
      const midPoint = coordinates[midIdx];
      const summaryLabel = `${durationText ? `${durationText} ` : ''}(${distanceText})`;
      
      const badgeIcon = L.divIcon({
        className: 'geovision-route-badge-container',
        html: `
          <div class="geovision-map-route-badge ${isDark ? 'dark' : 'light'}">
            <span class="route-badge-icon">${modeObj?.id === 'walk' ? '🚶' : modeObj?.id === 'cycle' ? '🚲' : modeObj?.id === 'bike' ? '🏍️' : modeObj?.id === 'transit' ? '🚌' : modeObj?.id === 'train' ? '🚆' : '🚗'}</span>
            <span class="route-badge-text">${summaryLabel}</span>
          </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
      });

      L.marker(midPoint, { icon: badgeIcon, interactive: false, zIndexOffset: 2800 }).addTo(routeLayerGroupRef.current);
    }

    // 4. Origin Start Marker (Pulsing Green / Blue Dot)
    if (origin && typeof origin.lat === 'number' && typeof origin.lon === 'number') {
      const originIcon = L.divIcon({
        className: 'geovision-route-endpoint-icon origin',
        html: `
          <div class="route-endpoint-pin origin-pin">
            <div class="route-pin-pulse"></div>
            <div class="route-pin-core origin-core"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const originMarker = L.marker([origin.lat, origin.lon], {
        icon: originIcon,
        zIndexOffset: 2500
      }).addTo(routeLayerGroupRef.current);

      originMarker.bindTooltip(origin.name || 'Start / My Location', {
        direction: 'top',
        offset: [0, -14],
        className: 'geovision-pin-tooltip'
      });
    }

    // 5. Destination End Marker (Checkered Flag / Destination Pin)
    if (destination && typeof destination.lat === 'number' && typeof destination.lon === 'number') {
      const destIcon = L.divIcon({
        className: 'geovision-route-endpoint-icon dest',
        html: `
          <div class="route-endpoint-pin dest-pin">
            <div class="route-pin-flag">🏁</div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 24]
      });

      const destMarker = L.marker([destination.lat, destination.lon], {
        icon: destIcon,
        zIndexOffset: 2600
      }).addTo(routeLayerGroupRef.current);

      destMarker.bindTooltip(destination.title || 'Destination', {
        direction: 'top',
        offset: [0, -26],
        className: 'geovision-pin-tooltip'
      });
    }

    // Expose global route overview fitter
    window.__geoVisionFitRouteOverview = () => {
      if (leafletInstance.current && coordinates && coordinates.length > 1) {
        try {
          const routeBounds = L.latLngBounds(coordinates);
          leafletInstance.current.fitBounds(routeBounds, {
            padding: [90, 90],
            maxZoom: 15.5,
            animate: true,
            duration: 0.8
          });
        } catch (e) {
          console.warn('[LeafletMap] fitRouteOverview error:', e);
        }
      }
    };

    // 6. Camera & Active Step Marker handling
    if (isNavigating && activeRoute.steps && activeRoute.steps.length > 0) {
      const activeStep = activeRoute.steps[navStepIndex] || activeRoute.steps[0];
      const stepPos = activeStep.location || (origin ? [origin.lat, origin.lon] : null);

      if (stepPos) {
        const stepIcon = L.divIcon({
          className: 'geovision-nav-step-marker',
          html: `
            <div class="nav-step-beacon">
              <div class="nav-step-pulse"></div>
              <div class="nav-step-icon-core">📍</div>
            </div>
          `,
          iconSize: [34, 34],
          iconAnchor: [17, 17]
        });

        L.marker(stepPos, { icon: stepIcon, zIndexOffset: 3000 }).addTo(routeLayerGroupRef.current);

        // If user is on step 0 (initial route), fit bounds to overview; otherwise flyTo active step
        if (navStepIndex === 0) {
          try {
            const routeBounds = L.latLngBounds(coordinates);
            map.fitBounds(routeBounds, {
              padding: [90, 90],
              maxZoom: 15.5,
              animate: true,
              duration: 0.8
            });
          } catch (e) {
            console.warn('[LeafletMap] fitBounds error on initial navigation:', e);
          }
        } else {
          try {
            map.flyTo(stepPos, 16.2, {
              animate: true,
              duration: 0.8
            });
          } catch (e) {
            console.warn('[LeafletMap] flyTo navigation step error:', e);
          }
        }
      }
    } else {
      // Smoothly Fit Map Bounds to the Complete Route Overview
      try {
        const routeBounds = L.latLngBounds(coordinates);
        map.fitBounds(routeBounds, {
          padding: [90, 90],
          maxZoom: 15.5,
          animate: true,
          duration: 0.8
        });
      } catch (e) {
        console.warn('[LeafletMap] fitBounds error on route overview:', e);
      }
    }
  }, [activeRoute, theme, isNavigating, navStepIndex]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '100%' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '100%', zIndex: 1 }} />
    </div>
  );
}
