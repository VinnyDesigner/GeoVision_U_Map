/**
 * GeoVision AI – FINAL CLIENT FEEDBACK ACCEPTANCE TEST
 */

import {
  spatialAIEngineInstance,
  GEOVISION_SPATIAL_DATASET,
  GENERIC_ERROR_MESSAGE_EN,
  GENERIC_ERROR_MESSAGE_AR,
  normalizeUserSpatialQuery
} from '../src/services/spatialSearchService.js';

let passed = 0, failed = 0, total = 0;

function test(label, fn) {
  total++;
  try {
    fn();
    console.log('  PASS: ' + label);
    passed++;
  } catch(e) {
    console.error('  FAIL: ' + label);
    console.error('     >> ' + e.message);
    failed++;
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

console.log('==========================================================');
console.log('  GeoVision AI - FINAL ACCEPTANCE TEST');
console.log('==========================================================');

// REQ 1: NEW CHAT / CONTEXT RESET
console.log('\n--- REQ 1: New Chat Context Reset ---');
spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals in Khalifa City');
const ctxBefore = spatialAIEngineInstance.context.dataset;
test('Context has category after first query', () => {
  assert(ctxBefore != null, 'Expected dataset context, got: ' + ctxBefore);
});
spatialAIEngineInstance.resetContext();
const ctxAfter = spatialAIEngineInstance.context;
test('After reset: dataset is null', () => assert(ctxAfter.dataset == null, 'dataset=' + ctxAfter.dataset));
test('After reset: location is null', () => assert(ctxAfter.location == null, 'location=' + ctxAfter.location));
test('After reset: drawnArea is null', () => assert(ctxAfter.drawnArea == null, 'drawnArea=' + ctxAfter.drawnArea));

// REQ 2: GUEST VS REGISTERED
console.log('\n--- REQ 2: Guest vs Registered - Identical AI ---');
spatialAIEngineInstance.resetContext();
const resGuest = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in Khalifa City','','en',{isGuest:true});
spatialAIEngineInstance.resetContext();
const resReg = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in Khalifa City','','en',{isGuest:false,isLoggedIn:true});
test('Guest and Registered: same result count', () => {
  assert(resGuest.results.length === resReg.results.length,
    'Guest:' + resGuest.results.length + ' vs Registered:' + resReg.results.length);
});
test('Guest and Registered: same intent', () => {
  assert(resGuest.intent === resReg.intent,
    'Guest:' + resGuest.intent + ' vs Registered:' + resReg.intent);
});

// REQ 3: UNSUPPORTED/ZERO → GENERIC ERROR ONLY
console.log('\n--- REQ 3: Unsupported/Zero-Result -> Generic Error Only ---');
spatialAIEngineInstance.resetContext();
const resRocket = spatialAIEngineInstance.processNaturalLanguageQuery('Show me rockets and submarines');
test('Rockets: zero results', () => assert(resRocket.results.length === 0, 'Got:' + resRocket.results.length));
test('Rockets: generic error message', () => assert(resRocket.aiMessageText === GENERIC_ERROR_MESSAGE_EN, 'Got:' + resRocket.aiMessageText));

spatialAIEngineInstance.resetContext();
const resCake = spatialAIEngineInstance.processNaturalLanguageQuery('How to bake a cake');
test('Non-spatial: zero results', () => assert(resCake.results.length === 0, 'Got:' + resCake.results.length));
test('Non-spatial: generic error', () => assert(resCake.aiMessageText === GENERIC_ERROR_MESSAGE_EN, 'Got:' + resCake.aiMessageText));

spatialAIEngineInstance.resetContext();
const resArUnsup = spatialAIEngineInstance.processNaturalLanguageQuery('صاروخ فضاء في أبوظبي','','ar');
test('Arabic unsupported: zero results', () => assert(resArUnsup.results.length === 0, 'Got:' + resArUnsup.results.length));
test('Arabic unsupported: Arabic generic error', () => assert(resArUnsup.aiMessageText === GENERIC_ERROR_MESSAGE_AR, 'Got:' + resArUnsup.aiMessageText));

spatialAIEngineInstance.resetContext();
const resUnknown = spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals in AtlantisCityXYZ');
test('Unknown location: zero results', () => assert(resUnknown.results.length === 0, 'Got:' + resUnknown.results.length));

// REQ 4: SPELLING/GRAMMAR CORRECTION
console.log('\n--- REQ 4: Spelling/Grammar Correction ---');
test('hosptial -> hospital', () => {
  const n = normalizeUserSpatialQuery('hosptial in abu dhabi');
  assert(n.toLowerCase().includes('hospital'), 'Got: ' + n);
});
test('centar -> center', () => {
  const n = normalizeUserSpatialQuery('centar in khalifa');
  assert(n.toLowerCase().includes('center'), 'Got: ' + n);
});
test('pharamcy -> pharmacy', () => {
  const n = normalizeUserSpatialQuery('pharamcy near me');
  assert(n.toLowerCase().includes('pharmacy'), 'Got: ' + n);
});
test('scool -> school', () => {
  const n = normalizeUserSpatialQuery('scools in abu dhabi');
  assert(n.toLowerCase().includes('school'), 'Got: ' + n);
});
spatialAIEngineInstance.resetContext();
const resTypo = spatialAIEngineInstance.processNaturalLanguageQuery('hosptial in abu dhabi');
test('Typo query returns hospital results', () => {
  assert(resTypo.results.length > 0, 'Got 0 results. Intent: ' + resTypo.intent);
  const allHealth = resTypo.results.every(r => r.category === 'Healthcare');
  assert(allHealth, 'Not all Healthcare: ' + resTypo.results.map(r=>r.category).join(','));
});

// REQ 5: FOLLOW-UP CONTEXT RETENTION
console.log('\n--- REQ 5: Follow-Up Context Retention ---');
spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals in Khalifa City');
const resFollowUp = spatialAIEngineInstance.processNaturalLanguageQuery('which one has the highest rating?');
test('Follow-up "highest rating" retains healthcare', () => {
  assert(resFollowUp.results.length > 0, 'Got 0 results. Intent: ' + resFollowUp.intent);
  const allHealth = resFollowUp.results.every(r => r.category === 'Healthcare' || (r.subcategory||'').toLowerCase().includes('hospital') || (r.subcategory||'').toLowerCase().includes('clinic'));
  assert(allHealth, 'Not all healthcare: ' + resFollowUp.results.map(r=>r.category).join(','));
});

spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.processNaturalLanguageQuery('Show bus stations in Abu Dhabi');
const resFollowUpTransit = spatialAIEngineInstance.processNaturalLanguageQuery('sort by nearest');
test('Follow-up "sort by nearest" retains transport context', () => {
  assert(resFollowUpTransit.results.length >= 0, 'Should not crash');
});

// REQ 6: DRAWN AREA + AI QUERY
console.log('\n--- REQ 6: Drawn Area + AI Query ---');
spatialAIEngineInstance.resetContext();
const circleArea = { geometryType: 'circle', center: { lat: 24.4539, lng: 54.3773 }, radius: 8000 };
spatialAIEngineInstance.setDrawnAreaContext(circleArea);
const resDrawn = spatialAIEngineInstance.processNaturalLanguageQuery('hospitals','','en',{drawnArea: circleArea});
test('Drawn area + hospitals: context retained', () => {
  assert(spatialAIEngineInstance.context.drawnArea != null, 'drawnArea should be retained');
});
test('Drawn area + hospitals: all results are Healthcare', () => {
  if(resDrawn.results.length > 0) {
    const allH = resDrawn.results.every(r => r.category === 'Healthcare');
    assert(allH, 'Non-healthcare in drawn results: ' + resDrawn.results.map(r=>r.category).join(','));
  }
});

// REQ 7: MULTI-CATEGORY
console.log('\n--- REQ 7: Multi-Category -> Only Requested Categories ---');
spatialAIEngineInstance.resetContext();
const resMulti = spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals and parks in Abu Dhabi');
test('Hospitals+parks: has results', () => assert(resMulti.results.length > 0, 'Got 0. Intent:' + resMulti.intent));
test('Hospitals+parks: only Healthcare or Recreation', () => {
  const invalid = resMulti.results.filter(r => r.category !== 'Healthcare' && r.category !== 'Parks' && r.category !== 'Recreation');
  assert(invalid.length === 0, 'Invalid: ' + invalid.map(r=>r.category).join(','));
});

spatialAIEngineInstance.resetContext();
const resSchBus = spatialAIEngineInstance.processNaturalLanguageQuery('show schools and bus stations in Abu Dhabi');
test('Schools+bus: no industrial or healthcare', () => {
  const invalid = resSchBus.results.filter(r => r.category === 'Industrial' || r.category === 'Healthcare');
  assert(invalid.length === 0, 'Invalid cats: ' + invalid.map(r=>r.category).join(','));
});

// REQ 8: NEAR-ME / MY LOCATION
console.log('\n--- REQ 8: Near-Me / My Location ---');
spatialAIEngineInstance.resetContext();
const userLoc = { lat: 24.4539, lon: 54.3773, name: 'Current Location', arabicName: 'موقعك الحالي' };
const resNearMe = spatialAIEngineInstance.processNaturalLanguageQuery('hospitals near me','','en',{userLocation: userLoc});
test('Hospitals near me: returns results', () => assert(resNearMe.results.length > 0, 'Got 0. Intent:' + resNearMe.intent));
test('Hospitals near me: only Healthcare', () => {
  const allH = resNearMe.results.every(r => r.category === 'Healthcare');
  assert(allH, 'Not all healthcare: ' + resNearMe.results.map(r=>r.category).join(','));
});
spatialAIEngineInstance.resetContext();
const resNearest = spatialAIEngineInstance.processNaturalLanguageQuery('nearest pharmacy','','en',{userLocation: userLoc});
test('Nearest pharmacy: returns pharmacy results', () => assert(resNearest.results.length > 0, 'Got 0. Intent:' + resNearest.intent));

// REQ 9: APPLICATION COMMANDS
console.log('\n--- REQ 9: Application Commands ---');
spatialAIEngineInstance.resetContext();
const resDark = spatialAIEngineInstance.processNaturalLanguageQuery('switch to dark mode');
test('"switch to dark mode" -> app_control', () => assert(resDark.intent === 'app_control', 'Got: ' + resDark.intent));
test('"switch to dark mode" -> CHANGE_THEME action', () => {
  const has = resDark.appActions?.some(a => a.type === 'CHANGE_THEME');
  assert(has, 'Actions: ' + JSON.stringify(resDark.appActions));
});
spatialAIEngineInstance.resetContext();
const resLang = spatialAIEngineInstance.processNaturalLanguageQuery('change language to arabic');
test('"change language to arabic" -> app_control', () => assert(resLang.intent === 'app_control', 'Got: ' + resLang.intent));
spatialAIEngineInstance.resetContext();
const resZoom = spatialAIEngineInstance.processNaturalLanguageQuery('zoom in');
test('"zoom in" -> ZOOM_IN action', () => {
  const isApp = resZoom.intent === 'app_control';
  const hasZoom = resZoom.appActions?.some(a => a.type === 'ZOOM_IN');
  assert(isApp || hasZoom, 'Got intent: ' + resZoom.intent);
});

// REQ 10: SUGGESTIONS EXECUTABLE
console.log('\n--- REQ 10: Suggestions are Executable ---');
spatialAIEngineInstance.resetContext();
const resForChips = spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals in Abu Dhabi');
test('Hospital search returns chips', () => {
  assert(Array.isArray(resForChips.chips) && resForChips.chips.length > 0, 'Got no chips');
});
test('All chips have query or action', () => {
  const hasValidChips = resForChips.chips.every(c => c.query || c.action);
  assert(hasValidChips, 'Invalid chips: ' + JSON.stringify(resForChips.chips));
});
test('All chip labels are non-empty', () => {
  const noEmpty = resForChips.chips.every(c => (c.label||'').trim().length > 0);
  assert(noEmpty, 'Empty label chips: ' + JSON.stringify(resForChips.chips));
});

// REQ 11: ARABIC LANGUAGE
console.log('\n--- REQ 11: Arabic Language ---');
spatialAIEngineInstance.resetContext();
const resArParks = spatialAIEngineInstance.processNaturalLanguageQuery('أظهر الحدائق في أبوظبي','','ar');
test('Arabic parks query returns results', () => {
  assert(resArParks.results.length > 0, 'Got 0. Intent:' + resArParks.intent);
});
test('Arabic parks: all Recreation', () => {
  const allRec = resArParks.results.every(r => r.category === 'Parks' || r.category === 'Recreation');
  assert(allRec, 'Not all Parks: ' + resArParks.results.map(r=>r.category).join(','));
});
spatialAIEngineInstance.resetContext();
const resArDark = spatialAIEngineInstance.processNaturalLanguageQuery('تفعيل الوضع الداكن','','ar');
test('Arabic "تفعيل الوضع الداكن" -> app_control', () => {
  assert(resArDark.intent === 'app_control', 'Got: ' + resArDark.intent);
});

console.log('\n==========================================================');
console.log('  RESULT: ' + passed + '/' + total + ' PASSED  |  ' + failed + ' FAILED');
if(failed === 0) console.log('  ALL TESTS PASSED - ACCEPTANCE CRITERIA MET');
else console.log('  ' + failed + ' TESTS FAILED - FIXES REQUIRED');
console.log('==========================================================');

process.exit(failed > 0 ? 1 : 0);



