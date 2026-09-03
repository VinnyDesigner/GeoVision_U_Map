import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ABU_DHABI_SPATIAL_DATASET } from '../services/spatialSearchService.js';
import { GIS_CATEGORY_COLORS, getGisCategorySymbolSvg, getGisPinSvg } from '../utils/gisSymbols.js';

export default function LeafletMap({
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
  restoredDrawnGeometry = null
}) {
  const mapRef = useRef(null);
  const leafletInstance = useRef(null);
  const markersGroupRef = useRef(null);
  const boundaryGroupRef = useRef(null);
  const volumeGroupRef = useRef(null);
  const searchMarkersGroupRef = useRef(null);
  const selectedGraphicsLayerRef = useRef(null);
  const drawnShapesGroupRef = useRef(null);
  const markersMapRef = useRef({});

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

    markersGroupRef.current = L.layerGroup().addTo(map);
    boundaryGroupRef.current = L.layerGroup().addTo(map);
    volumeGroupRef.current = L.layerGroup().addTo(map);
    searchMarkersGroupRef.current = L.layerGroup().addTo(map);
    selectedGraphicsLayerRef.current = L.layerGroup().addTo(map);
    drawnShapesGroupRef.current = L.layerGroup().addTo(map);

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
      if (searchMarkersGroupRef.current) searchMarkersGroupRef.current.clearLayers();
      if (markersGroupRef.current) markersGroupRef.current.clearLayers();
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

    // Expose global cleanup handler for shape popups
    window.__geovision_clear_draw_query = () => {
      if (drawnShapesGroupRef.current) drawnShapesGroupRef.current.clearLayers();
      if (onClearDrawnArea) onClearDrawnArea();
      if (showToast) showToast("Spatial Query Area Cleared");
    };

    if (!activeDrawTool) {
      map.getContainer().style.cursor = '';
      return;
    }

    map.getContainer().style.cursor = 'crosshair';
    let drawPoints = [];
    let previewLayer = null;

    const clearPreview = () => {
      if (previewLayer && map.hasLayer(previewLayer)) {
        map.removeLayer(previewLayer);
        previewLayer = null;
      }
    };

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
          if (showToast) showToast("Click outer radius to finish Circle & execute query");
        } else {
          const center = drawPoints[0];
          const radius = map.distance(center, latlng);
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
        if (drawPoints.length === 1) {
          if (showToast) showToast("Click next point, or double-click to finish Line");
        } else if (drawPoints.length >= 2) {
          clearPreview();
          drawnGroup.clearLayers();

          const polyline = L.polyline(drawPoints, {
            color: '#004B87',
            weight: 3.5,
            dashArray: '6, 6'
          }).addTo(drawnGroup);

          let totalDist = 0;
          for (let i = 0; i < drawPoints.length - 1; i++) {
            totalDist += map.distance(drawPoints[i], drawPoints[i + 1]);
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
              coordinates: [...drawPoints]
            });
          }
          drawPoints = [];
          if (setActiveDrawTool) setActiveDrawTool(null);
        }
        return;
      }

      if (activeDrawTool === 'polygon') {
        drawPoints.push(latlng);
        if (drawPoints.length === 1) {
          if (showToast) showToast("Click next vertices. Double-click to close Polygon & query");
        } else if (drawPoints.length >= 3) {
          clearPreview();
          previewLayer = L.polygon(drawPoints, {
            color: '#004B87',
            fillColor: '#004B87',
            fillOpacity: 0.18,
            weight: 2
          }).addTo(map);
        }
      }
    };

    const handleMapDblClick = (e) => {
      L.DomEvent.stopPropagation(e);
      if (activeDrawTool === 'polygon' && drawPoints.length >= 3) {
        clearPreview();
        drawnGroup.clearLayers();

        const poly = L.polygon(drawPoints, {
          color: '#004B87',
          fillColor: '#004B87',
          fillOpacity: 0.20,
          weight: 2.5
        }).addTo(drawnGroup);

        poly.bindPopup(`
          <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
            <b style="color: #002B5B; font-size: 13px;">Drawn Query Polygon</b><br/>
            <span style="color: #475569; font-size: 11.5px;">Vertices: <b>${drawPoints.length} points</b></span><br/>
            <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
          </div>
        `);

        if (onDrawnAreaComplete) {
          onDrawnAreaComplete({
            geometryType: 'polygon',
            coordinates: [...drawPoints]
          });
        }
        drawPoints = [];
        if (setActiveDrawTool) setActiveDrawTool(null);
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
          dashArray: '4, 4'
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
          dashArray: '4, 4'
        }).addTo(map);
      } else if (activeDrawTool === 'line') {
        clearPreview();
        previewLayer = L.polyline([...drawPoints, latlng], {
          color: '#004B87',
          weight: 2.5,
          dashArray: '4, 4'
        }).addTo(map);
      } else if (activeDrawTool === 'polygon') {
        clearPreview();
        previewLayer = L.polyline([...drawPoints, latlng], {
          color: '#004B87',
          weight: 2,
          dashArray: '4, 4'
        }).addTo(map);
      }
    };

    map.on('click', handleMapClick);
    map.on('dblclick', handleMapDblClick);
    map.on('mousemove', handleMouseMove);

    return () => {
      clearPreview();
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
      const b = bounds || (coordinates && coordinates.length >= 3 ? L.latLngBounds(coordinates[0], coordinates[2]) : null);
      if (b) {
        const rect = L.rectangle(b, {
          color: '#004B87',
          fillColor: '#004B87',
          fillOpacity: 0.18,
          weight: 2.5
        }).addTo(drawnGroup);

        rect.bindPopup(`
          <div style="font-family: Outfit, Inter, sans-serif; font-size: 12.5px; min-width: 160px; padding: 4px;">
            <b style="color: #002B5B; font-size: 13px;">Restored Query Box</b><br/>
            <button onclick="window.__geovision_clear_draw_query();" style="margin-top: 8px; padding: 4px 10px; font-size: 11px; background: #EF4444; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Clear Query Area</button>
          </div>
        `);

        map.fitBounds(rect.getBounds(), { padding: [40, 40], maxZoom: 15 });
      }
    }
  }, [restoredDrawnGeometry]);

  // Fly to active project location in Abu Dhabi
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

    // 1. Initial Abu Dhabi placeholder marker (only when no search results and no operational layers active)
    markersGroup.clearLayers();
    if (!activeSearchResults?.length && !layers.buildings3D && !layers.projectBoundary && !layers.heatmapOverlay) {
      const redPinHtml = `
        <div style="
          position: relative;
          width: 28px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -100%);
        ">
          <div style="
            width: 26px;
            height: 26px;
            background: linear-gradient(135deg, #004B87 0%, #002B5B 100%);
            border: 2px solid #ffffff;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 4px 14px rgba(0,43,91,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="width: 8px; height: 8px; background: #ffffff; border-radius: 50%; transform: rotate(45deg);"></div>
          </div>
        </div>
      `;
      const redPinIcon = L.divIcon({
        html: redPinHtml,
        className: '',
        iconSize: [0, 0]
      });
      L.marker([24.4539, 54.3773], { icon: redPinIcon })
        .bindPopup("<b>Abu Dhabi, UAE</b><br>Capital Region")
        .addTo(markersGroup);
    }

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
        direction: 'top',
        offset: [0, -36],
        className: 'geovision-pin-tooltip'
      });

      markersMapRef.current[item.id] = marker;

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
      if (validLatLngs.length > 1) {
        const bounds = L.latLngBounds(validLatLngs);
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: 14.5, animate: true });
      } else if (validLatLngs.length === 1) {
        map.setView(validLatLngs[0], 14, { animate: true });
      }
    }
  }, [activeSearchResults]);

  // Handle Selected Location Focusing, Zoom To Animation & Active Pin Highlighting
  useEffect(() => {
    const map = leafletInstance.current;
    if (!map || !selectedLocation) return;

    // Parse selected feature coordinates
    const lat = parseFloat(selectedLocation?.lat);
    const lon = parseFloat(selectedLocation?.lon);

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

    // Only pan or zoom if it is an explicit selection or trigger change, not an unrelated re-render
    if (isNewZoomTrigger) {
      map.flyTo([lat, lon], 16, { duration: 1.2 });
    } else if (isNewSelection || isNewLocateTrigger) {
      const currentZoom = Math.max(map.getZoom(), 13.5);
      map.setView([lat, lon], currentZoom, { animate: true, duration: 0.6 });
    }

    // Toggle active pin DOM class highlight
    document.querySelectorAll('.geovision-pin-marker').forEach(el => el.classList.remove('active-pin'));
    const activeEl = document.getElementById(`spatial-pin-${selectedLocation.id}`);
    if (activeEl) {
      activeEl.classList.add('active-pin');
    }
  }, [selectedLocation]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '100%', zIndex: 1 }} />;
}
