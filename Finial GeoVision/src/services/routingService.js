/**
 * GeoVision In-App Routing Service
 * Computes road-network routes via OSRM (Open Source Routing Machine),
 * formats multi-modal travel metrics (Car, Walk, Cycle, Bike, Transit, Train),
 * and generates navigation links for turn-by-turn guidance.
 */

import { calculateDistanceKm } from './spatialSearchService.js';

export const TRAVEL_MODES = [
  { id: 'car', labelEn: 'Car', labelAr: 'سيارة', icon: 'Car', osrmProfile: 'driving', gmapsMode: 'driving', supported: true, speedKmh: 60 },
  { id: 'walk', labelEn: 'Walk', labelAr: 'مشي', icon: 'Footprints', osrmProfile: 'walking', gmapsMode: 'walking', supported: true, speedKmh: 4.8 },
  { id: 'cycle', labelEn: 'Cycle', labelAr: 'دراجة هوائية', icon: 'Bike', osrmProfile: 'cycling', gmapsMode: 'bicycling', supported: true, speedKmh: 15 },
  { id: 'bike', labelEn: 'Bike', labelAr: 'دراجة نارية', icon: 'Motorcycle', osrmProfile: 'driving', gmapsMode: 'two_wheeler', supported: true, speedKmh: 52 },
  { id: 'transit', labelEn: 'Public Transport', labelAr: 'نقل عام', icon: 'Bus', osrmProfile: 'driving', gmapsMode: 'transit', supported: true, speedKmh: 28 },
  { id: 'train', labelEn: 'Train', labelAr: 'قطار', icon: 'Train', osrmProfile: 'driving', gmapsMode: 'transit', supported: true, speedKmh: 75 }
];

/**
 * Format duration in seconds to human readable string in EN/AR
 */
export function formatDuration(seconds, lang = 'en') {
  if (!seconds || isNaN(seconds) || seconds <= 0) {
    return lang === 'ar' ? 'أقل من دقيقة' : '< 1 min';
  }
  const totalMinutes = Math.round(seconds / 60);
  if (totalMinutes < 60) {
    if (lang === 'ar') {
      return `${totalMinutes} ${totalMinutes === 1 ? 'دقيقة' : totalMinutes === 2 ? 'دقيقتان' : totalMinutes <= 10 ? 'دقائق' : 'دقيقة'}`;
    }
    return `${totalMinutes} ${totalMinutes === 1 ? 'min' : 'mins'}`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const remainingMins = totalMinutes % 60;

  if (lang === 'ar') {
    const hrText = hours === 1 ? 'ساعة' : hours === 2 ? 'ساعتان' : `${hours} ساعات`;
    if (remainingMins === 0) return hrText;
    const minText = remainingMins === 1 ? 'دقيقة' : remainingMins === 2 ? 'دقيقتان' : remainingMins <= 10 ? `${remainingMins} دقائق` : `${remainingMins} دقيقة`;
    return `${hrText} و ${minText}`;
  }

  if (remainingMins === 0) {
    return `${hours} ${hours === 1 ? 'hr' : 'hrs'}`;
  }
  return `${hours} ${hours === 1 ? 'hr' : 'hrs'} ${remainingMins} mins`;
}

/**
 * Format distance in meters or kilometers in EN/AR
 */
export function formatDistance(distanceMeters, lang = 'en') {
  if (!distanceMeters || isNaN(distanceMeters) || distanceMeters <= 0) {
    return lang === 'ar' ? '0 كم' : '0 km';
  }
  const km = distanceMeters / 1000;
  if (km < 1) {
    const meters = Math.round(distanceMeters);
    return lang === 'ar' ? `${meters} متر` : `${meters} m`;
  }
  return lang === 'ar' ? `${km.toFixed(1)} كم` : `${km.toFixed(1)} km`;
}

/**
 * Calculate road route between origin and destination coordinates
 * @param {Object} params
 * @param {Object} params.origin - { lat, lon }
 * @param {Object} params.destination - { lat, lon }
 * @param {string} params.mode - 'car' | 'walk' | 'cycle' | 'bike' | 'transit' | 'train'
 * @param {string} params.lang - 'en' | 'ar'
 * @returns {Promise<Object>}
 */
export async function calculateRoadRoute({ origin, destination, mode = 'car', lang = 'en' }) {
  if (!origin || typeof origin.lat !== 'number' || typeof origin.lon !== 'number') {
    throw new Error(lang === 'ar' ? 'موقع البداية غير محدد بدقة' : 'Origin location is invalid');
  }
  if (!destination || typeof destination.lat !== 'number' || typeof destination.lon !== 'number') {
    throw new Error(lang === 'ar' ? 'إحداثيات الوجهة غير صالحة' : 'Destination coordinates are invalid');
  }

  const travelModeObj = TRAVEL_MODES.find(m => m.id === mode) || TRAVEL_MODES[0];

  // If travel mode is unsupported in local OSRM (Transit / Train), return friendly status
  if (!travelModeObj.supported || !travelModeObj.osrmProfile) {
    const directDistKm = calculateDistanceKm(origin.lat, origin.lon, destination.lat, destination.lon);
    return {
      success: false,
      supported: false,
      mode: mode,
      modeObj: travelModeObj,
      origin,
      destination,
      distanceKm: directDistKm,
      distanceText: formatDistance(directDistKm * 1000, lang),
      durationText: null,
      coordinates: [],
      unsupportedMessage: lang === 'ar'
        ? `جداول ومسارات ${travelModeObj.labelAr} غير مدمجة حالياً في هذا النطاق الجغرافي. يمكنك عرض مسار القيادة أو المشي بدلاً من ذلك.`
        : `${travelModeObj.labelEn} schedule routing is not currently integrated in this area. You can view the Driving or Walking route instead.`
    };
  }

  const profile = travelModeObj.osrmProfile;
  const startCoords = `${origin.lon},${origin.lat}`;
  const endCoords = `${destination.lon},${destination.lat}`;
  const osrmUrl = `https://router.project-osrm.org/route/v1/${profile}/${startCoords};${endCoords}?overview=full&geometries=geojson&steps=true`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const res = await fetch(osrmUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`OSRM HTTP error ${res.status}`);
    }

    const data = await res.json();
    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
      throw new Error(data.message || 'No route found');
    }

    const primaryRoute = data.routes[0];
    const distanceMeters = primaryRoute.distance;
    const distanceKm = distanceMeters / 1000;

    // Calculate accurate mode-specific duration based on realistic speed
    let durationSeconds = primaryRoute.duration;
    if (mode === 'walk') {
      durationSeconds = (distanceKm / 4.8) * 3600;
    } else if (mode === 'cycle') {
      durationSeconds = (distanceKm / 15.0) * 3600;
    } else if (mode === 'bike') {
      durationSeconds = (distanceKm / 52.0) * 3600;
    } else if (mode === 'transit') {
      durationSeconds = (distanceKm / 28.0) * 3600 + 300;
    } else if (mode === 'train') {
      durationSeconds = (distanceKm / 75.0) * 3600 + 300;
    } else if (mode === 'car' && (!durationSeconds || durationSeconds <= 0)) {
      durationSeconds = (distanceKm / 60.0) * 3600;
    }

    // Convert GeoJSON [lon, lat] coordinates to Leaflet [lat, lon]
    const leafletCoordinates = (primaryRoute.geometry?.coordinates || []).map(([lon, lat]) => [lat, lon]);

    // Parse turn-by-turn navigation steps
    const rawSteps = primaryRoute.legs?.[0]?.steps || [];
    const destTitle = destination.title || destination.arabicTitle || 'Destination';
    const parsedSteps = parseNavigationSteps(rawSteps, destTitle, lang);

    return {
      success: true,
      supported: true,
      mode: mode,
      modeObj: travelModeObj,
      origin,
      destination,
      distanceKm: Number(distanceKm.toFixed(2)),
      distanceMeters,
      durationSeconds: Math.round(durationSeconds),
      distanceText: formatDistance(distanceMeters, lang),
      durationText: formatDuration(durationSeconds, lang),
      coordinates: leafletCoordinates,
      waypoints: data.waypoints || [],
      steps: parsedSteps,
      isRoadRoute: true
    };
  } catch (err) {
    console.warn('[RoutingService] OSRM fetch error, generating geodesic path fallback:', err.message);

    // Fallback approximation when external OSRM is offline or blocked
    const directDistKm = calculateDistanceKm(origin.lat, origin.lon, destination.lat, destination.lon);
    
    // Accurate speed based on mode (km/h)
    let estimatedSecs = 0;
    if (mode === 'walk') {
      estimatedSecs = (directDistKm / 4.8) * 3600;
    } else if (mode === 'cycle') {
      estimatedSecs = (directDistKm / 15.0) * 3600;
    } else if (mode === 'bike') {
      estimatedSecs = (directDistKm / 52.0) * 3600;
    } else if (mode === 'transit') {
      estimatedSecs = (directDistKm / 28.0) * 3600 + 300;
    } else if (mode === 'train') {
      estimatedSecs = (directDistKm / 75.0) * 3600 + 300;
    } else {
      estimatedSecs = (directDistKm / 60.0) * 3600;
    }

    // Generate smooth intermediate waypoints
    const stepCount = 12;
    const fallbackCoords = [];
    for (let i = 0; i <= stepCount; i++) {
      const frac = i / stepCount;
      const lat = origin.lat + (destination.lat - origin.lat) * frac;
      const lon = origin.lon + (destination.lon - origin.lon) * frac;
      fallbackCoords.push([lat, lon]);
    }

    const destTitle = destination.title || destination.arabicTitle || 'Destination';
    const fallbackSteps = [
      {
        index: 1,
        instruction: `Head toward ${destTitle}`,
        instructionAr: `انطلق نحو ${destTitle}`,
        distanceText: formatDistance(directDistKm * 1000, lang),
        durationText: formatDuration(estimatedSecs, lang),
        type: 'depart',
        modifier: 'straight',
        location: [origin.lat, origin.lon]
      },
      {
        index: 2,
        instruction: `Arrive at ${destTitle}`,
        instructionAr: `الوصول إلى ${destTitle}`,
        distanceText: '',
        durationText: '',
        type: 'arrive',
        modifier: 'straight',
        location: [destination.lat, destination.lon]
      }
    ];

    return {
      success: true,
      supported: true,
      mode: mode,
      modeObj: travelModeObj,
      origin,
      destination,
      distanceKm: Number(directDistKm.toFixed(2)),
      distanceMeters: directDistKm * 1000,
      durationSeconds: Math.round(estimatedSecs),
      distanceText: formatDistance(directDistKm * 1000, lang),
      durationText: formatDuration(estimatedSecs, lang),
      coordinates: fallbackCoords,
      steps: fallbackSteps,
      isFallback: true,
      fallbackNote: lang === 'ar' ? 'تم حساب المسار التقديري' : 'Estimated route'
    };
  }
}

/**
 * Helper to parse raw OSRM steps into user-friendly multilingual turn-by-turn guidance
 */
export function parseNavigationSteps(rawSteps, destinationTitle, lang = 'en') {
  if (!rawSteps || rawSteps.length === 0) {
    return [
      {
        index: 1,
        instruction: `Proceed along the route to ${destinationTitle || 'destination'}`,
        instructionAr: `اتجه على طول المسار نحو ${destinationTitle || 'الوجهة'}`,
        distanceText: '',
        durationText: '',
        type: 'depart',
        modifier: 'straight'
      }
    ];
  }

  return rawSteps.map((s, idx) => {
    const maneuver = s.maneuver || {};
    const type = maneuver.type || 'turn';
    const modifier = (maneuver.modifier || 'straight').toLowerCase();
    const rawName = (s.name || '').trim();
    const roadName = rawName || (lang === 'ar' ? 'المسار المحدد' : 'the route');
    const distText = formatDistance(s.distance, lang);
    const durText = formatDuration(s.duration, lang);
    const location = maneuver.location ? [maneuver.location[1], maneuver.location[0]] : null;

    let instructionEn = '';
    let instructionAr = '';

    if (type === 'depart' || idx === 0) {
      instructionEn = rawName ? `Head out on ${rawName}` : `Head along the route`;
      instructionAr = rawName ? `انطلق في ${rawName}` : `انطلق على طول المسار`;
    } else if (type === 'arrive' || idx === rawSteps.length - 1) {
      instructionEn = `Arrive at ${destinationTitle || 'your destination'}`;
      instructionAr = `الوصول إلى ${destinationTitle || 'وجهتك'}`;
    } else if (type === 'roundabout' || type === 'rotary') {
      instructionEn = rawName ? `At the roundabout, take exit onto ${rawName}` : `At the roundabout, take exit`;
      instructionAr = rawName ? `عند الدوار، اخرج نحو ${rawName}` : `عند الدوار، اسلك المخرج`;
    } else if (type === 'fork') {
      const dirEn = modifier.includes('left') ? 'left' : 'right';
      const dirAr = modifier.includes('left') ? 'الأيسر' : 'الأيمن';
      instructionEn = `Keep ${dirEn} at the fork onto ${roadName}`;
      instructionAr = `الزم المسار ${dirAr} عند المفترق نحو ${roadName}`;
    } else {
      const isLeft = modifier.includes('left');
      const isRight = modifier.includes('right');
      const isSlight = modifier.includes('slight');
      const isSharp = modifier.includes('sharp');

      if (isLeft) {
        const turnEn = isSlight ? 'slight left' : isSharp ? 'sharp left' : 'left';
        const turnAr = isSlight ? 'يساراً قليلاً' : isSharp ? 'يساراً حاداً' : 'يساراً';
        instructionEn = `Turn ${turnEn} onto ${roadName}`;
        instructionAr = `انعطف ${turnAr} إلى ${roadName}`;
      } else if (isRight) {
        const turnEn = isSlight ? 'slight right' : isSharp ? 'sharp right' : 'right';
        const turnAr = isSlight ? 'يميناً قليلاً' : isSharp ? 'يميناً حاداً' : 'يميناً';
        instructionEn = `Turn ${turnEn} onto ${roadName}`;
        instructionAr = `انعطف ${turnAr} إلى ${roadName}`;
      } else if (modifier.includes('uturn')) {
        instructionEn = `Make a U-turn onto ${roadName}`;
        instructionAr = `قم بالدوران للخلف في ${roadName}`;
      } else {
        instructionEn = `Continue straight on ${roadName}`;
        instructionAr = `تابع للأمام في ${roadName}`;
      }
    }

    return {
      index: idx + 1,
      instruction: instructionEn,
      instructionAr: instructionAr,
      distanceText: distText,
      durationText: durText,
      distanceMeters: s.distance,
      durationSeconds: s.duration,
      type,
      modifier,
      location,
      roadName
    };
  });
}

/**
 * Generate external navigation URL for turn-by-turn navigation handoff
 */
export function getStartNavigationUrl({ origin, destination, mode = 'car' }) {
  if (!destination || typeof destination.lat !== 'number' || typeof destination.lon !== 'number') {
    return 'https://maps.google.com';
  }
  const travelModeObj = TRAVEL_MODES.find(m => m.id === mode) || TRAVEL_MODES[0];
  const gmapsMode = travelModeObj.gmapsMode || 'driving';

  if (origin && typeof origin.lat === 'number' && typeof origin.lon === 'number') {
    return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lon}&destination=${destination.lat},${destination.lon}&travelmode=${gmapsMode}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lon}&travelmode=${gmapsMode}`;
}
