import { 
  SpatialAIEngine,
  spatialAIEngineInstance,
  GEOVISION_SPATIAL_DATASET,
  DISTRICT_COORDINATES,
  LANDMARK_COORDINATES,
  resolveDistrictOrLandmark,
  cleanMarkdownText,
  CAT_TRANSLATIONS_AR,
  SUBCAT_TRANSLATIONS_AR
} from './src/services/spatialSearchService.js';

export const UNSUPPORTED_ANALYTICAL_CAPABILITIES = [
  {
    id: 'flood_inundation_simulation',
    nameEn: '3D Flood Inundation & Hydrodynamic Simulation',
    nameAr: 'محاكاة ثلاثية الأبعاد للفيضانات والمخاطر الهيدرولوجية',
    patterns: [
      /\b(?:3d\s+)?flood(?:\s+[a-z]+)?\s+(?:simulation|model|modeling|forecast|forecasting|prediction|analysis|hazard|inundation)\b/i,
      /\b(?:inundation|sea\s*level\s*rise|storm\s*surge|dam\s*breach|runoff\s*routing|hydrological\s*routing)\b/i,
      /\b(?:run|perform|simulate|model|show)\s+(?:a\s+)?(?:3d\s+)?(?:flood|inundation)\b/i,
      /(?:محاكاة|نمذجة|تنبؤ|توقع).*(?:فيضان|فيضانات|سيول|غمر|طوفان|منسوب البحر|جريان سطحي)/iu,
      /(?:3d|ثلاثي الأبعاد).*(?:فيضان|غمر|سيول)/iu
    ],
    explanationEn: '3D flood inundation modeling and hydrodynamic surface runoff simulations are not supported in GeoVision.',
    explanationAr: 'المحاكاة ثلاثية الأبعاد للفيضانات والنمذجة الهيدرولوجية لتدفق السيول غير مدعومة حالياً في GeoVision.'
  },
  {
    id: 'traffic_forecasting_dynamic',
    nameEn: 'Live Traffic Congestion Forecasting & Predictive Flow',
    nameAr: 'التنبؤ بازدحام المرور الحي ومحاكاة التدفق المروري',
    patterns: [
      /\b(?:live|real[- ]?time|future|predictive)?\s*traffic\s+(?:congestion\s+)?(?:forecasting|forecast|prediction|flow\s+prediction|simulation|modeling)\b/i,
      /\bpredict\s+(?:future\s+)?traffic(?:\s+flow|\s+congestion|\s+speed)?\b/i,
      /\b(?:traffic\s+signal|traffic\s+light)\s+optimization\s+(?:simulation|model)\b/i,
      /\b(?:traffic\s+flow\s+prediction|real[- ]?time\s+traffic)\b/i,
      /(?:التنبؤ|توقع|محاكاة|نمذجة).*(?:بازدحام|حركة|تدفق|سير|سرعة).*(?:المرور|السير|الطرق)/iu,
      /(?:التنبؤ|توقع|محاكاة|نمذجة).*(?:حركة المرور|ازدحام الطرق|التدفق المروري|الإشارات المرورية)/iu,
      /(?:المرور الحي|ازدحام حي)/iu
    ],
    explanationEn: 'Real-time dynamic traffic congestion forecasting and signal micro-simulation require live telemetry feeds not supported in GeoVision.',
    explanationAr: 'التنبؤ بحركة المرور الحية وتدفق الازدحام الآني يتطلب مصادر بيانات تيليمترية حية غير متوفرة في GeoVision.'
  },
  {
    id: 'pollution_environmental_dispersion',
    nameEn: 'Atmospheric Pollution & Plume Dispersion Simulation',
    nameAr: 'محاكاة انتشار تلوث الهواء والغازات الجوية',
    patterns: [
      /\b(?:air\s+pollution|gas\s+plume|plume|gas\s+leak|emission|pollutant)\s+(?:dispersion|propagation|simulation|modeling|model|forecast)\b/i,
      /\b(?:simulate|model)\s+(?:air\s+pollution|plume|pollution\s+dispersion|noise\s+propagation)\b/i,
      /\b(?:noise|acoustic)\s+(?:propagation|simulation|modeling|contour\s+mapping)\b/i,
      /\b(?:urban\s+heat\s+island|cfd\s+microclimate)\s+(?:simulation|modeling|model)\b/i,
      /\bcarbon\s+(?:footprint\s+forecast|sequestration\s+modeling)\b/i,
      /(?:محاكاة|نمذجة|توقع|تنبؤ).*(?:تلوث|انبعاثات|ضوضاء|أصوات|غازات|سحابة غاز|جزر حرارية)/iu
    ],
    explanationEn: 'Atmospheric plume dispersion and acoustic noise propagation models require specialized meteorological mesh engines not supported in GeoVision.',
    explanationAr: 'محاكاة انتشار الملوثات الجوية ونمذجة انتشار الضوضاء تتطلب محركات متخصصة غير متوفرة في GeoVision.'
  },
  {
    id: 'earthquake_disaster_simulation',
    nameEn: 'Seismic Disaster & Structural Damage Modeling',
    nameAr: 'نمذجة مخاطر الزلازل وأضرار الكوارث الهيكلية',
    patterns: [
      /\b(?:earthquake|seismic|tsunami|landslide|blast|structural\s+collapse)(?:\s+[a-z]+)?\s+(?:simulation|model|modeling|forecast|vulnerability|analysis|risk|damage)\b/i,
      /\b(?:simulate|model)\s+(?:earthquake|tsunami|landslide|structural\s+damage|blast)\b/i,
      /(?:محاكاة|نمذجة|توقع|تنبؤ).*(?:زلازل|زلزال|هزات|تسونامي|انهيار|انهيارات|انفجار|انفجارات)/iu
    ],
    explanationEn: 'Geotechnical seismic fault propagation and structural vulnerability simulations are not supported in GeoVision.',
    explanationAr: 'نمذجة مخاطر الزلازل وأضرار الانهيارات الإنشائية غير مدعومة حالياً في GeoVision.'
  },
  {
    id: 'evacuation_crowd_simulation',
    nameEn: 'Agent-Based Crowd & Dynamic Evacuation Simulation',
    nameAr: 'محاكاة إخلاء الحشود والمشاة الديناميكية',
    patterns: [
      /\b(?:pedestrian|crowd|egress|evacuation|stampede)(?:\s+[a-z]+)?\s+(?:simulation|model|modeling|dynamics|routing\s+model)\b/i,
      /\b(?:simulate|model)\s+(?:pedestrian|crowd)\s+evacuation\b/i,
      /(?:محاكاة|نمذجة|توقع|تنبؤ).*(?:إخلاء|حشود|مشاة|تدافع|هروب|طوارئ)/iu
    ],
    explanationEn: 'Multi-agent pedestrian behavioral dynamics and emergency evacuation simulations are not supported in GeoVision.',
    explanationAr: 'محاكاة إخلاء الحشود ونمذجة حركة المشاة في الطوارئ غير مدعومة في GeoVision.'
  },
  {
    id: 'subsurface_geological_3d',
    nameEn: '3D Subsurface Geological & Aquifer Plume Modeling',
    nameAr: 'محاكاة الطبقات الجيولوجية والمياه الجوفية ثلاثية الأبعاد',
    patterns: [
      /\b(?:subsurface|geological\s+strata|groundwater\s+aquifer|contaminant\s+plume)(?:\s+[a-z]+)?\s+(?:3d\s+)?(?:simulation|model|modeling|rendering)\b/i,
      /(?:محاكاة|نمذجة).*(?:طبقات جيولوجية|مياه جوفية|باطن الأرض ثلاثي)/iu
    ],
    explanationEn: '3D subterranean volumetric strata interpolation and aquifer dynamics are not supported in GeoVision.',
    explanationAr: 'النمذجة الحجمية ثلاثية الأبعاد للطبقات الجيولوجية والمياه الجوفية غير مدعومة في GeoVision.'
  }
];

function detectUnsupportedAnalyticalCapability(qLower) {
  for (const cap of UNSUPPORTED_ANALYTICAL_CAPABILITIES) {
    for (const pat of cap.patterns) {
      if (pat.test(qLower)) {
        return cap;
      }
    }
  }
  return null;
}

function generateUnsupportedCapabilityAlternatives(context, lang = 'en', cap = null, qLower = '') {
  const chips = [];
  const activeLoc = context.location || 'Khalifa City';
  const activeLocAr = context.locationCoordinates?.arabicName || context.location || 'مدينة خليفة';
  const activeCat = context.dataset || 'Healthcare';
  const activeCatAr = CAT_TRANSLATIONS_AR[activeCat] || activeCat;
  const activeSub = context.subcategory;
  const activeSubAr = activeSub ? (SUBCAT_TRANSLATIONS_AR[activeSub] || activeSub) : activeCatAr;
  const hasResults = context.currentResults && context.currentResults.length > 0;

  if (hasResults) {
    const catLabel = activeSub ? activeSub.toLowerCase() : activeCat.toLowerCase();
    const catLabelAr = activeSub ? activeSubAr : activeCatAr;

    chips.push({
      label: lang === 'ar' ? `المرافق ضمن 2 كم من هذه ${catLabelAr}` : `Show facilities within 2 km of these ${catLabel}`,
      query: `Show facilities within 2 km of these ${catLabel}`
    });
    chips.push({
      label: lang === 'ar' ? `مقارنة ${catLabelAr} بالمرافق في ${activeLocAr}` : `Compare ${catLabel} in ${activeLoc}`,
      query: `Compare ${catLabel} and hospitals in ${activeLoc}`
    });
    chips.push({
      label: lang === 'ar' ? `أعلى ${catLabelAr} تقييماً في ${activeLocAr}` : `Top rated ${catLabel} in ${activeLoc}`,
      query: `Which ${catLabel} has the highest rating in ${activeLoc}?`
    });
    chips.push({
      label: lang === 'ar' ? `توسيع النطاق إلى 5 كم حول ${activeLocAr}` : `Expand search radius to 5 km`,
      query: `Show ${catLabel} within 5 km of ${activeLoc}`
    });
    return chips;
  }

  const queryDistrict = resolveDistrictOrLandmark(qLower);
  const loc = queryDistrict?.name || activeLoc;
  const locAr = queryDistrict?.arabicName || activeLocAr;

  chips.push({
    label: lang === 'ar' ? `عرض محطات الحافلات في ${locAr}` : `Show bus stations in ${loc}`,
    query: `Show bus stations in ${loc}`
  });
  chips.push({
    label: lang === 'ar' ? `عرض كافة المرافق في ${locAr}` : `Show all facilities in ${loc}`,
    query: `Show all facilities in ${loc}`
  });
  chips.push({
    label: lang === 'ar' ? `مقارنة المدارس والمستشفيات في ${locAr}` : `Compare schools and hospitals in ${loc}`,
    query: `Compare schools and hospitals in ${loc}`
  });
  chips.push({
    label: lang === 'ar' ? `أثر نمو السكان (+20%) على العيادات` : `What if population grows by 20%?`,
    query: `What if population grows by 20%?`
  });

  return chips;
}

console.log('Testing Alternative Generation with Context...');
const dummyContextWithParks = {
  dataset: 'Parks',
  subcategory: 'Parks',
  location: 'Yas Island',
  currentResults: [{ id: 1, title: 'Yas Gateway Park' }]
};

console.log('With Parks in Yas Island context:', generateUnsupportedCapabilityAlternatives(dummyContextWithParks, 'en'));
console.log('Arabic with Parks context:', generateUnsupportedCapabilityAlternatives(dummyContextWithParks, 'ar'));
