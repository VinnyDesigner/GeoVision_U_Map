import {
  spatialAIEngineInstance,
  CATEGORY_TAXONOMY,
  GEOVISION_SPATIAL_DATASET,
  GENERIC_ERROR_MESSAGE_EN,
  GENERIC_ERROR_MESSAGE_AR,
  normalizeUserSpatialQuery
} from '../src/services/spatialSearchService.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  } else {
    passedTests++;
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('====================================================');
console.log('🧪 GEOVISION AI – STRICT ACCURACY & CONTEXT TEST SUITE');
console.log('====================================================\n');

// ----------------------------------------------------
// RULE 4: Grammar & Spelling Normalization
// ----------------------------------------------------
console.log('--- Test Rule 4: Normalization ---');
const n1 = normalizeUserSpatialQuery('parksnear me');
assert(n1.includes('parks near me'), `parksnear me normalized -> got: "${n1}"`);

const n2 = normalizeUserSpatialQuery('centar in khalifa city.');
assert(n2.includes('center in khalifa city'), `centar normalized -> got: "${n2}"`);

const n3 = normalizeUserSpatialQuery('hosptial in abu dhabi');
assert(n3.includes('hospital in abu dhabi'), `hosptial normalized -> got: "${n3}"`);

const n4 = normalizeUserSpatialQuery('حدائقفيأبوظبي');
assert(n4.includes('حدائق في أبوظبي'), `Arabic glued query normalized -> got: "${n4}"`);


// ----------------------------------------------------
// RULE 2 & 11: Vehicle Inspection Centers in Khalifa City
// ----------------------------------------------------
console.log('\n--- Test Rule 2 & 11: Exact Category & Location ---');
spatialAIEngineInstance.resetContext();
const resVIC = spatialAIEngineInstance.processNaturalLanguageQuery('Find vehicle inspection centers in Khalifa City');
assert(resVIC.results.length > 0, `Returned results for vehicle inspection centers in Khalifa City (count: ${resVIC.results.length})`);
assert(resVIC.results.every(r => r.subcategory === 'Vehicle Inspection Centers'), 'All results are strictly Vehicle Inspection Centers');
assert(resVIC.results.every(r => (r.city || '').toLowerCase().includes('khalifa') || (r.address || '').toLowerCase().includes('khalifa')), 'All results are in Khalifa City');


// ----------------------------------------------------
// RULE 3 & 12: Unsupported & Zero Results Return Exact Generic Error
// ----------------------------------------------------
console.log('\n--- Test Rule 3 & 12: Generic Error Handling ---');
spatialAIEngineInstance.resetContext();
const resUnsup = spatialAIEngineInstance.processNaturalLanguageQuery('How to bake a chocolate cake');
assert(resUnsup.aiMessageText === GENERIC_ERROR_MESSAGE_EN, `Unsupported query returns exact generic error -> got: "${resUnsup.aiMessageText}"`);
assert(resUnsup.results.length === 0, 'Unsupported query returns zero results');

const resUnsupAr = spatialAIEngineInstance.processNaturalLanguageQuery('صاروخ فضاء في أبوظبي', '', 'ar');
assert(resUnsupAr.aiMessageText === GENERIC_ERROR_MESSAGE_AR, `Arabic unsupported query returns exact generic error -> got: "${resUnsupAr.aiMessageText}"`);
assert(resUnsupAr.results.length === 0, 'Arabic unsupported query returns zero results');

const resUnknownLoc = spatialAIEngineInstance.processNaturalLanguageQuery('Show schools in AtlantisCityXY');
assert(resUnknownLoc.aiMessageText === GENERIC_ERROR_MESSAGE_EN, `Unknown location query returns exact generic error -> got: "${resUnknownLoc.aiMessageText}"`);
assert(resUnknownLoc.results.length === 0, 'Unknown location returns zero results');


// ----------------------------------------------------
// RULE 5: Follow-up Context Retention
// ----------------------------------------------------
console.log('\n--- Test Rule 5: Follow-Up Context Retention ---');

// Case A: Hospitals near me -> Which one has the most beds?
spatialAIEngineInstance.resetContext();
const userLoc = { lat: 24.4539, lon: 54.3773 };
const q1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals near me', '', 'en', { userLocation: userLoc });
assert(q1.results.length > 0, `Initial hospitals query returned ${q1.results.length} items`);
assert(q1.results.every(r => r.category === 'Healthcare'), 'Initial query returned only Healthcare');

const q1_followup = spatialAIEngineInstance.processNaturalLanguageQuery('Which one has the most beds?', '', 'en', { userLocation: userLoc });
assert(q1_followup.results.length > 0, `Follow-up beds query returned ${q1_followup.results.length} items`);
assert(q1_followup.results[0].beds >= (q1_followup.results[1]?.beds || 0), `Top result has the most beds: ${q1_followup.results[0].beds}`);

// Case B: Vehicle inspection centers in Khalifa City -> Which one is closest?
spatialAIEngineInstance.resetContext();
const q2 = spatialAIEngineInstance.processNaturalLanguageQuery('Show vehicle inspection centers in Khalifa City', '', 'en', { userLocation: userLoc });
assert(q2.results.length > 0, `Initial Khalifa City VIC query returned ${q2.results.length} items`);

const q2_followup = spatialAIEngineInstance.processNaturalLanguageQuery('Which one is closest?', '', 'en', { userLocation: userLoc });
assert(q2_followup.results.length > 0, `Follow-up closest query returned ${q2_followup.results.length} items`);
assert(q2_followup.results.every(r => r.subcategory === 'Vehicle Inspection Centers'), 'Follow-up retained Vehicle Inspection Centers subcategory');
if (q2_followup.results.length > 1) {
  assert(q2_followup.results[0].distanceKm <= q2_followup.results[1].distanceKm, 'Results are strictly sorted ascending by distance from user');
}

// Case C: Government facilities in Abu Dhabi -> How many are there in each district?
spatialAIEngineInstance.resetContext();
const q3 = spatialAIEngineInstance.processNaturalLanguageQuery('Show government facilities in Abu Dhabi');
assert(q3.results.length > 0, `Initial government facilities query returned ${q3.results.length} items`);
const initialCount = q3.results.length;

const q3_followup = spatialAIEngineInstance.processNaturalLanguageQuery('How many are there in each district?');
assert(q3_followup.intent === 'area_ranking' || q3_followup.intent === 'analytics', `Intent recognized as analytics/area_ranking -> got: ${q3_followup.intent}`);
assert(q3_followup.aiMessageText.includes(`total ${initialCount} facilities`), `Analytics grouped exactly the ${initialCount} facilities from previous query -> msg: "${q3_followup.aiMessageText}"`);


// ----------------------------------------------------
// RULE 6: Continuous Drawn Area Context
// ----------------------------------------------------
console.log('\n--- Test Rule 6: Drawn Area Continuous Context ---');
spatialAIEngineInstance.resetContext();
const sampleDrawnPolygon = {
  geometryType: 'polygon',
  name: 'Test Polygon in Central Abu Dhabi',
  coordinates: [
    [24.50, 54.30],
    [24.50, 54.45],
    [24.40, 54.45],
    [24.40, 54.30],
    [24.50, 54.30]
  ]
};

const drawnQuery1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in this area', '', 'en', { drawnArea: sampleDrawnPolygon });
assert(drawnQuery1.results.length > 0, `Drawn area query returned ${drawnQuery1.results.length} parks`);
assert(drawnQuery1.results.every(r => r.category === 'Parks'), 'Drawn query returned only parks');

// Follow-up inside drawn area without passing drawnArea explicitly (testing retention)
const drawnFollowup = spatialAIEngineInstance.processNaturalLanguageQuery('Show schools here too');
assert(drawnFollowup.results.length > 0, `Follow-up in drawn area returned ${drawnFollowup.results.length} schools`);
assert(drawnFollowup.results.every(r => r.category === 'Education'), 'Follow-up returned only schools');
assert(drawnFollowup.aiMessageText.includes('inside') || drawnFollowup.aiMessageText.includes('Polygon') || drawnFollowup.aiMessageText.includes('Area'), `Message retained drawn area context -> got: "${drawnFollowup.aiMessageText}"`);


// ----------------------------------------------------
// RULE 7: Multi-Category Queries
// ----------------------------------------------------
console.log('\n--- Test Rule 7: Multi-Category Queries ---');
spatialAIEngineInstance.resetContext();
const multiRes = spatialAIEngineInstance.processNaturalLanguageQuery('Show schools and hospitals in Abu Dhabi');
assert(multiRes.results.length > 0, `Multi-category returned ${multiRes.results.length} items`);
const hasSchools = multiRes.results.some(r => r.category === 'Education');
const hasHospitals = multiRes.results.some(r => r.category === 'Healthcare');
assert(hasSchools && hasHospitals, 'Multi-category returned both Education and Healthcare items');
assert(multiRes.aiMessageText.includes('schools') && multiRes.aiMessageText.includes('hospitals'), `Breakdown text contains both categories -> got: "${multiRes.aiMessageText}"`);


// ----------------------------------------------------
// RULE 9: Distance Sorting (Nearest vs Farthest)
// ----------------------------------------------------
console.log('\n--- Test Rule 9: Distance Sorting ---');
spatialAIEngineInstance.resetContext();
const nearestParks = spatialAIEngineInstance.processNaturalLanguageQuery('Show closest parks near me', '', 'en', { userLocation: userLoc });
assert(nearestParks.results.length > 1, `Nearest parks returned ${nearestParks.results.length} items`);
assert(nearestParks.results[0].distanceKm <= nearestParks.results[1].distanceKm, `Nearest sorted ascending: ${nearestParks.results[0].distanceKm} km <= ${nearestParks.results[1].distanceKm} km`);

const farthestParks = spatialAIEngineInstance.processNaturalLanguageQuery('Show farthest parks from me', '', 'en', { userLocation: userLoc });
assert(farthestParks.results.length > 1, `Farthest parks returned ${farthestParks.results.length} items`);
assert(farthestParks.results[0].distanceKm >= farthestParks.results[1].distanceKm, `Farthest sorted descending: ${farthestParks.results[0].distanceKm} km >= ${farthestParks.results[1].distanceKm} km`);

const singleFarthest = spatialAIEngineInstance.processNaturalLanguageQuery('Which park is farthest from me?', '', 'en', { userLocation: userLoc });
assert(singleFarthest.results.length === 1, `Which park is farthest returned top single item`);
assert(singleFarthest.results[0].title === farthestParks.results[0].title, `Top farthest item matches: ${singleFarthest.results[0].title}`);


// ----------------------------------------------------
// RULE 10: Application Commands
// ----------------------------------------------------
console.log('\n--- Test Rule 10: Application Commands ---');
spatialAIEngineInstance.resetContext();
const cmdBasemap = spatialAIEngineInstance.processNaturalLanguageQuery('Switch to satellite');
assert(cmdBasemap.intent === 'app_control', `Satellite basemap intent -> ${cmdBasemap.intent}`);
assert(cmdBasemap.appActions.some(a => a.type === 'CHANGE_BASEMAP' && a.basemap === 'satellite'), 'Basemap action is satellite');

const cmdTheme = spatialAIEngineInstance.processNaturalLanguageQuery('Switch to dark mode');
assert(cmdTheme.intent === 'app_control', `Theme intent -> ${cmdTheme.intent}`);
assert(cmdTheme.appActions.some(a => a.type === 'CHANGE_THEME' && a.theme === 'dark'), 'Theme action is dark');

const cmdLang = spatialAIEngineInstance.processNaturalLanguageQuery('بالعربي');
assert(cmdLang.intent === 'app_control', `Language command intent -> ${cmdLang.intent}`);
assert(cmdLang.appActions.some(a => a.type === 'CHANGE_LANGUAGE' && a.lang === 'ar'), 'Language action is ar');


// ----------------------------------------------------
// RULE 15: Coverage Across All 12 GIS Domains
// ----------------------------------------------------
console.log('\n--- Test Rule 15: All 12 GIS Domains ---');
const domains = [
  { domain: 'Agriculture', query: 'Show farms in Abu Dhabi' },
  { domain: 'Parks', query: 'Show public parks in Abu Dhabi' },
  { domain: 'Healthcare', query: 'Show clinics in Abu Dhabi' },
  { domain: 'Education', query: 'Show private schools in Abu Dhabi' },
  { domain: 'Transportation', query: 'Show bus stations in Abu Dhabi' },
  { domain: 'Environment', query: 'Show air quality sensors in Abu Dhabi' },
  { domain: 'Government Services', query: 'Show ministries in Abu Dhabi' },
  { domain: 'Tourism', query: 'Show hotels in Abu Dhabi' },
  { domain: 'Industrial', query: 'Show power utilities in Abu Dhabi' },
  { domain: 'Infrastructure', query: 'Show bridges in Abu Dhabi' },
  { domain: 'Utilities', query: 'Show desalination plants in Abu Dhabi' },
  { domain: 'Public Safety', query: 'Show police stations in Abu Dhabi' },
  { domain: 'Housing', query: 'Show residential communities in Abu Dhabi' }
];

for (const { domain, query } of domains) {
  spatialAIEngineInstance.resetContext();
  const res = spatialAIEngineInstance.processNaturalLanguageQuery(query);
  assert(res.results.length > 0, `Domain [${domain}] query "${query}" returned ${res.results.length} results`);
}

console.log('\n====================================================');
console.log(`🎉 ALL ${passedTests}/${totalTests} TESTS PASSED SUCCESSFULLY!`);
console.log('====================================================');
