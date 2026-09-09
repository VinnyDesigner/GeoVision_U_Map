import {
  spatialAIEngineInstance,
  GEOVISION_SPATIAL_DATASET
} from '../src/services/spatialSearchService.js';

const centerPoint = { lat: 24.4900, lon: 54.3900 };
const circleArea = {
  geometryType: 'circle',
  center: centerPoint,
  radius: 6000
};

spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.setDrawnAreaContext(circleArea);

const queries = [
  'Can I get all schools and hospitals under this area?',
  'Show schools and hospitals in this area',
  'Find all schools and hospitals inside the drawn area',
  'How many schools and hospitals are within this boundary?',
  'Which schools and hospitals are in this area?',
  'Show pharmacies and clinics in this area.',
  'Show all facilities in this area.'
];

for (const q of queries) {
  console.log(`\n========================================`);
  console.log(`QUERY: "${q}"`);
  const res = spatialAIEngineInstance.processNaturalLanguageQuery(q, '', 'en', { drawnArea: circleArea });
  console.log(`INTENT: ${res.intent}`);
  console.log(`RESULTS COUNT: ${res.results ? res.results.length : 0}`);
  console.log(`AI MESSAGE:\n${res.aiMessageText}`);
  if (res.results && res.results.length > 0) {
    const cats = [...new Set(res.results.map(r => `${r.category} > ${r.subcategory}`))];
    console.log(`CATEGORIES RETURNED:`, cats);
  }
}
