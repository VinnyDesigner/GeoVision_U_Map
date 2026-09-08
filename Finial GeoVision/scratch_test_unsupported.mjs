const UNSUPPORTED_ANALYTICAL_CAPABILITIES = [
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
    explanationEn: '3D flood inundation and hydrodynamic surface runoff simulations are outside the scope of GeoVision’s active urban SDI database.',
    explanationAr: 'المحاكاة ثلاثية الأبعاد للفيضانات والنمذجة الهيدرولوجية لتدفق السيول غير مدعومة حالياً ضمن قاعدة البيانات المكانية في GeoVision.'
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
    explanationEn: 'Real-time dynamic traffic flow forecasting and signal micro-simulation require live telemetry feeds not currently integrated into the SDI spatial analytics layer.',
    explanationAr: 'التنبؤ بحركة المرور الحية وتدفق الازدحام الآني يتطلب مصادر بيانات تيليمترية حية غير متوفرة حالياً ضمن طبقة التحليلات المكانية.'
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
    explanationEn: 'Microclimate CFD plume dispersion and acoustic noise propagation models require specialized atmospheric mesh engines not currently supported.',
    explanationAr: 'محاكاة انتشار الملوثات الجوية ونمذجة انتشار الضوضاء تتطلب محركات متخصصة غير متوفرة حالياً ضمن منصة التحليلات المكانية.'
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
    explanationEn: 'Geotechnical seismic fault propagation and structural vulnerability simulation require specialized FEM engineering suites not supported in the SDI registry.',
    explanationAr: 'نمذجة مخاطر الزلازل وأضرار الانهيارات الإنشائية تتطلب محركات محاكاة جيوتقنية متخصصة غير متوفرة حالياً في منصة البيانات المكانية.'
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
    explanationEn: 'Multi-agent pedestrian behavioral dynamics and emergency egress simulations are outside the scope of the SDI spatial registry.',
    explanationAr: 'محاكاة إخلاء الحشود ونمذجة حركة المشاة في الطوارئ غير مدعومة حالياً ضمن قاعدة البيانات المكانية.'
  },
  {
    id: 'subsurface_geological_3d',
    nameEn: '3D Subsurface Geological & Aquifer Plume Modeling',
    nameAr: 'محاكاة الطبقات الجيولوجية والمياه الجوفية ثلاثية الأبعاد',
    patterns: [
      /\b(?:subsurface|geological\s+strata|groundwater\s+aquifer|contaminant\s+plume)(?:\s+[a-z]+)?\s+(?:3d\s+)?(?:simulation|model|modeling|rendering)\b/i,
      /(?:محاكاة|نمذجة).*(?:طبقات جيولوجية|مياه جوفية|باطن الأرض ثلاثي)/iu
    ],
    explanationEn: '3D subterranean volumetric strata interpolation and aquifer dynamics require specialized 3D borehole geological suites.',
    explanationAr: 'النمذجة الحجمية ثلاثية الأبعاد للطبقات الجيولوجية والمياه الجوفية غير مدعومة ضمن المنصة المكانية الحالية.'
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

const testQueries = [
  'Run a 3D flood inundation simulation for this area.',
  'Show live traffic congestion forecasting.',
  'Predict future traffic flow for this road.',
  'Simulate air pollution dispersion around Khalifa City.',
  'Run earthquake damage simulation for these buildings.',
  'Pedestrian evacuation simulation for this stadium.',
  'Run a 3D flood simulation for them.',
  'محاكاة ثلاثية الأبعاد للفيضانات في هذه المنطقة',
  'التنبؤ بازدحام المرور الحي لشارع المطار',
  'محاكاة انتشار تلوث الهواء في المشرف',
  'نمذجة مخاطر الزلازل لهذه المباني',
  // SUPPORTED queries that must NOT match:
  'Show parks in Yas Island',
  'What if population grows by 20%?',
  'Generate an AI suitability layer for pharmacies',
  'Find the best place for a new clinic within 15 minutes',
  'Show schools within 2 km of hospitals',
  'How many schools in Khalifa City?',
  'Compare schools and hospitals in Khalifa City',
  'Show clinics in Al Mushrif',
  'Show universities in Abu Dhabi',
  'Show bus stations in Khalifa City',
  'Show vehicle inspection centers in Mussafah'
];

console.log('--- TESTING CAPABILITY DETECTION ---');
let allPassed = true;
for (const q of testQueries) {
  const match = detectUnsupportedAnalyticalCapability(q.toLowerCase());
  const isSupportedExpected = q.includes('Show ') || q.includes('What if') || q.includes('Generate ') || q.includes('Find ') || q.includes('How many') || q.includes('Compare ');
  const status = isSupportedExpected ? (!match ? '✅ OK (Supported)' : '❌ FALSE POSITIVE') : (match ? `✅ OK (Unsupported: ${match.id})` : '❌ MISSED DETECTION');
  if (status.includes('❌')) allPassed = false;
  console.log(`"${q}" -> ${status}`);
}
console.log('\nAll passed?', allPassed);
