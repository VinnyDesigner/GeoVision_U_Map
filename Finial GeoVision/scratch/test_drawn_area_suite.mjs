import {
  spatialAIEngineInstance,
  GEOVISION_SPATIAL_DATASET,
  isPointInDrawnArea,
  getDrawnAreaLabel
} from '../src/services/spatialSearchService.js';

console.log('--- STARTING COMPREHENSIVE DRAWN-AREA SPATIAL CONTEXT TEST SUITE ---');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
}

// 1. Setup a test circle in an area with known facilities (around Central Abu Dhabi / Al Maryah Island)
const centerPoint = { lat: 24.4900, lon: 54.3900 };
const circleArea = {
  geometryType: 'circle',
  center: centerPoint,
  radius: 6000 // 6km radius
};

// Count how many total facilities, hospitals, and healthcare fall inside circle
const itemsInCircle = GEOVISION_SPATIAL_DATASET.filter(item => isPointInDrawnArea(item, circleArea));
const healthInCircle = itemsInCircle.filter(item => item.category.toLowerCase() === 'healthcare');
const hospitalsInCircle = healthInCircle.filter(item => (item.subcategory || '').toLowerCase().includes('hospital'));

console.log(`\nGround truth inside 6km test circle at (${centerPoint.lat}, ${centerPoint.lon}):`);
console.log(`- Total facilities: ${itemsInCircle.length}`);
console.log(`- Healthcare facilities: ${healthInCircle.length}`);
console.log(`- Hospitals: ${hospitalsInCircle.length}`);

assert(itemsInCircle.length > 0, 'Ground truth has items in circle');
assert(healthInCircle.length > 0, 'Ground truth has healthcare in circle');

// TEST 1: Setting Drawn Area Context (Decoupled from Auto-Search)
console.log('\n--- TEST 1: Setting Drawn Area Context ---');
spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.setDrawnAreaContext(circleArea);

assert(spatialAIEngineInstance.context.drawnArea !== null, 'Drawn area stored in context');
assert(spatialAIEngineInstance.context.drawnArea.radius === 6000, 'Radius stored correctly as 6000m');

const badges = spatialAIEngineInstance.getActiveContextBadges('en');
assert(badges.some(b => b.type === 'drawnArea' && b.id === 'drawnArea'), 'Active context badge for drawnArea generated');
console.log('Generated badge:', badges.find(b => b.type === 'drawnArea'));

const arabicLabel = getDrawnAreaLabel(circleArea, 'ar');
const englishLabel = getDrawnAreaLabel(circleArea, 'en');
assert(englishLabel.includes('6.0 km') || englishLabel.includes('6000 m'), `English label correct: ${englishLabel}`);
assert(arabicLabel.includes('6.0 كم') || arabicLabel.includes('6000 م'), `Arabic label correct: ${arabicLabel}`);

// TEST 2: Intent Query: "How many hospitals are inside this area?"
console.log('\n--- TEST 2: Query "How many hospitals are inside this area?" ---');
const q2Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'How many hospitals are inside this area?',
  '',
  'en',
  { drawnArea: circleArea }
);

console.log('Query 2 Response AI Text:\n', q2Res.aiMessageText);
console.log('Query 2 Results Count:', q2Res.results ? q2Res.results.length : 0);
assert(q2Res.results && q2Res.results.length === hospitalsInCircle.length, `Results return only hospitals inside circle (${q2Res.results.length} vs expected ${hospitalsInCircle.length})`);
assert(q2Res.results.every(item => isPointInDrawnArea(item, circleArea)), 'All returned results are strictly within the drawn area');
assert(q2Res.results.every(item => item.category.toLowerCase() === 'healthcare'), 'All returned results belong to Healthcare category (no schools or police stations)');
assert(q2Res.analytics !== null, 'Analytics object generated for count/breakdown query');

// TEST 3: Multi-turn Follow-up: "Which one has the highest rating?"
console.log('\n--- TEST 3: Follow-up "Which one has the highest rating?" ---');
const q3Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Which one has the highest rating?',
  '',
  'en',
  {}
);

console.log('Query 3 Response AI Text:\n', q3Res.aiMessageText);
assert(q3Res.results && q3Res.results.length > 0, 'Follow-up returned ranked results');
assert(q3Res.results.every(item => isPointInDrawnArea(item, circleArea)), 'Ranked results are still strictly inside the drawn area');
assert(q3Res.results.every(item => item.category.toLowerCase() === 'healthcare'), 'Ranked results maintain Healthcare category context');
if (q3Res.results.length >= 2) {
  assert((q3Res.results[0].rating || 0) >= (q3Res.results[1].rating || 0), 'Results are sorted in descending rating order');
}

// TEST 4: Multi-turn Follow-up / Category Switch: "Show schools in this area"
console.log('\n--- TEST 4: Category switch "Show schools in this area" ---');
const schoolsInCircle = itemsInCircle.filter(item => item.category.toLowerCase() === 'education');
const q4Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show schools in this area',
  '',
  'en',
  {}
);

console.log('Query 4 Response AI Text:\n', q4Res.aiMessageText);
console.log('Query 4 Results Count:', q4Res.results.length);
assert(q4Res.results.length === schoolsInCircle.length, `Returned exact schools inside circle (${q4Res.results.length} vs expected ${schoolsInCircle.length})`);
assert(q4Res.results.every(item => item.category.toLowerCase() === 'education'), 'Returned results are strictly Education');
assert(q4Res.results.every(item => isPointInDrawnArea(item, circleArea)), 'Returned results are strictly within drawn boundary');

// TEST 5: Explicit Browse All: "Show all facilities in this area"
console.log('\n--- TEST 5: Explicit Browse All "Show all facilities in this area" ---');
const q5Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show all facilities in this area',
  '',
  'en',
  {}
);

console.log('Query 5 Response AI Text:\n', q5Res.aiMessageText);
console.log('Query 5 Results Count:', q5Res.results.length);
assert(q5Res.results.length === itemsInCircle.length, `Returned all facilities inside drawn circle (${q5Res.results.length} vs expected ${itemsInCircle.length})`);
assert(q5Res.results.every(item => isPointInDrawnArea(item, circleArea)), 'All facilities are strictly inside circle');

// TEST 6: Polygon Geometry Query
console.log('\n--- TEST 6: Polygon Geometry Query ---');
// Define a polygon around Central Abu Dhabi
const polygonArea = {
  geometryType: 'polygon',
  coordinates: [
    [24.4500, 54.3300],
    [24.5300, 54.3300],
    [24.5300, 54.4200],
    [24.4500, 54.4200]
  ]
};
const itemsInPoly = GEOVISION_SPATIAL_DATASET.filter(item => isPointInDrawnArea(item, polygonArea));
console.log(`Items inside polygon: ${itemsInPoly.length}`);

spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.setDrawnAreaContext(polygonArea);

const q6Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show schools inside this area',
  '',
  'en',
  {}
);
console.log('Query 6 Results Count:', q6Res.results.length);
assert(q6Res.results.every(item => isPointInDrawnArea(item, polygonArea)), 'Polygon results are strictly inside polygon vertices');

// TEST 7: Clear Drawn Area Context
console.log('\n--- TEST 7: Clear Drawn Area Context ---');
spatialAIEngineInstance.removeContextBadge('drawnArea', 'en');
assert(spatialAIEngineInstance.context.drawnArea === null, 'Drawn area context is cleared');

const q7Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show hospitals in Abu Dhabi',
  '',
  'en',
  {}
);
console.log('Query 7 Results Count (full dataset search):', q7Res.results.length);
assert(q7Res.results.length > healthInCircle.length, 'After clearing drawn area, search searches the broader dataset');

// TEST 8: Arabic Natural Language Queries
console.log('\n--- TEST 8: Arabic Natural Language Queries ---');
spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.setDrawnAreaContext(circleArea);

const q8Res = spatialAIEngineInstance.processNaturalLanguageQuery(
  'كم عدد المستشفيات داخل هذه المنطقة؟',
  '',
  'ar',
  {}
);
console.log('Query 8 (Arabic count) Response AI Text:\n', q8Res.aiMessageText);
assert(q8Res.results && q8Res.results.length === hospitalsInCircle.length, 'Arabic count query returns exact hospitals in drawn area');
assert(q8Res.results.every(item => isPointInDrawnArea(item, circleArea)), 'Arabic query results are inside circle');
assert(q8Res.aiMessageText.includes('مستشف') || q8Res.aiMessageText.includes('الرعاية الصحية') || q8Res.aiMessageText.includes('مرفق'), 'Arabic response text uses appropriate Arabic terminology');

const q8bRes = spatialAIEngineInstance.processNaturalLanguageQuery(
  'عرض جميع المرافق في هذه المنطقة',
  '',
  'ar',
  {}
);
console.log('Query 8b (Arabic browse all) Results Count:', q8bRes.results.length);
assert(q8bRes.results.length === itemsInCircle.length, 'Arabic browse all returns all facilities in drawn area');

console.log(`\n🎉 ALL ${passedTests}/${totalTests} TESTS PASSED SUCCESSFULLY!`);
