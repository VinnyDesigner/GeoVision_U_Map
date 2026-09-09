import {
  spatialAIEngineInstance,
  resolveAllTaxonomyEntities,
  resolveTaxonomyEntity,
  GEOVISION_SPATIAL_DATASET
} from '../src/services/spatialSearchService.js';

console.log('=== RUNNING MULTI-CATEGORY SPATIAL SUITE ===\n');

// Mock Drawn Area (Circle in Abu Dhabi with radius 6000m around Khalifa City / Musaffah)
const mockCircleDrawnArea = {
  geometryType: 'circle',
  center: { lat: 24.4239, lng: 54.5772 },
  radius: 8000,
  label: 'Drawn Area · 8.0 km radius',
  arabicLabel: 'المنطقة المرسومة · نصف القطر 8.0 كم'
};

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

// Test 1: "Can I get all schools and hospitals under this area?"
console.log('\n--- Test 1: "Can I get all schools and hospitals under this area?" ---');
spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.setDrawnAreaContext(mockCircleDrawnArea);

const res1 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Can I get all schools and hospitals under this area?',
  '',
  'en',
  { drawnArea: mockCircleDrawnArea }
);

assert(res1.intent !== 'unsupported_layer' && res1.intent !== 'zero_results', 'Query 1 is recognized as valid');
assert(res1.results && res1.results.length > 0, `Query 1 returned ${res1.results?.length} results`);
const cats1 = new Set(res1.results.map(r => r.category));
assert(cats1.has('Education') && cats1.has('Healthcare'), `Query 1 contains both Education and Healthcare categories: ${Array.from(cats1).join(', ')}`);
assert(!cats1.has('Industrial') && !cats1.has('Parks'), `Query 1 contains NO unrelated categories`);
assert(res1.aiMessageText.includes('matching facilities') || res1.aiMessageText.includes('inside Drawn Area'), `AI response message is descriptive: ${res1.aiMessageText}`);

// Test 2: "Show schools and hospitals in this area."
console.log('\n--- Test 2: "Show schools and hospitals in this area." ---');
const res2 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show schools and hospitals in this area.',
  '',
  'en',
  { drawnArea: mockCircleDrawnArea }
);
assert(res2.results && res2.results.length > 0, `Query 2 returned ${res2.results?.length} results`);
const cats2 = new Set(res2.results.map(r => r.category));
assert(cats2.has('Education') && cats2.has('Healthcare'), `Query 2 results contain both categories: ${Array.from(cats2).join(', ')}`);

// Test 3: "How many schools and hospitals are inside this area?"
console.log('\n--- Test 3: "How many schools and hospitals are inside this area?" ---');
const res3 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'How many schools and hospitals are inside this area?',
  '',
  'en',
  { drawnArea: mockCircleDrawnArea }
);
assert(res3.intent === 'district_count_summary', `Query 3 intent is district_count_summary (got ${res3.intent})`);
assert(res3.analytics && res3.analytics.data, 'Query 3 includes analytics grouped payload');
assert(res3.aiMessageText.includes('schools') && res3.aiMessageText.includes('hospitals'), `Query 3 message breaks down counts: ${res3.aiMessageText}`);

// Test 4: Follow-up ranking: "Which school has the highest rating?"
console.log('\n--- Test 4: "Which school has the highest rating?" ---');
const res4 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Which school has the highest rating?',
  '',
  'en',
  { drawnArea: mockCircleDrawnArea }
);
assert(res4.intent === 'ranking_superlative', `Query 4 intent is ranking_superlative (got ${res4.intent})`);
assert(res4.results && res4.results.length > 0, `Query 4 returned results`);
assert(res4.results[0].category === 'Education', `Query 4 refined specifically to Education / School: got ${res4.results[0].title} (${res4.results[0].category})`);
assert(res4.aiMessageText.includes('highest-rated school') || res4.aiMessageText.includes('rating of'), `AI response text describes top school: ${res4.aiMessageText}`);

// Test 5: "Show pharmacies and clinics in this area."
console.log('\n--- Test 5: "Show pharmacies and clinics in this area." ---');
const res5 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show pharmacies and clinics in this area.',
  '',
  'en',
  { drawnArea: mockCircleDrawnArea }
);
assert(res5.results && res5.results.length > 0, `Query 5 returned ${res5.results?.length} results`);
const subs5 = new Set(res5.results.map(r => r.subcategory));
assert(subs5.has('Pharmacies') || subs5.has('Clinics'), `Query 5 contains Pharmacies/Clinics: ${Array.from(subs5).join(', ')}`);
assert(!subs5.has('Public Parks') && !subs5.has('Metals & Smelting'), `Query 5 has no unrelated subcategories`);

// Test 6: "Show all facilities in this area."
console.log('\n--- Test 6: "Show all facilities in this area." ---');
const res6 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show all facilities in this area.',
  '',
  'en',
  { drawnArea: mockCircleDrawnArea }
);
assert(res6.results && res6.results.length > 0, `Query 6 returned ${res6.results?.length} facilities`);
const cats6 = new Set(res6.results.map(r => r.category));
assert(cats6.size > 2, `Query 6 returns full broad facility set: ${cats6.size} categories`);

// Test 7: Clear drawn area -> verify old spatial context is no longer used
console.log('\n--- Test 7: Clear drawn area context ---');
spatialAIEngineInstance.clearDrawnAreaContext();
assert(spatialAIEngineInstance.getContext().drawnArea === null, 'Drawn area context cleared in engine');

const res7 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show schools in Abu Dhabi',
  '',
  'en',
  {}
);
assert(res7.results && res7.results.length > 0, `Query 7 returned ${res7.results?.length} schools across Abu Dhabi`);
assert(!res7.aiMessageText.includes('inside Drawn Area'), 'Drawn area label is no longer in response text');

// Test 8: Arabic Multi-Category Queries
console.log('\n--- Test 8: Arabic Multi-Category Queries ---');
spatialAIEngineInstance.setDrawnAreaContext(mockCircleDrawnArea);

const resAr1 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'هل يمكنني الحصول على جميع المدارس والمستشفيات في هذه المنطقة؟',
  '',
  'ar',
  { drawnArea: mockCircleDrawnArea }
);
assert(resAr1.results && resAr1.results.length > 0, `Arabic Query 1 returned ${resAr1.results?.length} results`);
const catsAr1 = new Set(resAr1.results.map(r => r.category));
assert(catsAr1.has('Education') && catsAr1.has('Healthcare'), `Arabic Query 1 has Education and Healthcare`);
assert(resAr1.aiMessageText.includes('داخل'), `Arabic message formatted correctly: ${resAr1.aiMessageText}`);

const resAr2 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'كم عدد المدارس والمستشفيات في هذه المنطقة؟',
  '',
  'ar',
  { drawnArea: mockCircleDrawnArea }
);
assert(resAr2.intent === 'district_count_summary', `Arabic Count Query intent is district_count_summary (got ${resAr2.intent})`);
assert(resAr2.aiMessageText.includes('مدارس') || resAr2.aiMessageText.includes('مستشفيات') || resAr2.aiMessageText.includes('التعليم'), `Arabic count response: ${resAr2.aiMessageText}`);

// Test 9: Truly unsupported queries still return generic error
console.log('\n--- Test 9: Truly Unsupported Queries ---');
const resUnsup1 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'How to cook pizza at home',
  '',
  'en',
  {}
);
assert(resUnsup1.intent === 'unsupported_layer', `Unsupported Query 1 returns unsupported_layer (got ${resUnsup1.intent})`);

const resUnsup2 = spatialAIEngineInstance.processNaturalLanguageQuery(
  'Show rocket launchpads in Dubai',
  '',
  'en',
  {}
);
assert(resUnsup2.intent === 'unsupported_layer', `Unsupported Query 2 returns unsupported_layer (got ${resUnsup2.intent})`);

console.log(`\n========================================`);
console.log(`TOTAL PASSED: ${passed}, TOTAL FAILED: ${failed}`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
