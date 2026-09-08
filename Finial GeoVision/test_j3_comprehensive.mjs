import { spatialAIEngineInstance } from './src/services/spatialSearchService.js';

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

console.log('=====================================================');
console.log('     GEOVISION J3 UNSUPPORTED CAPABILITY SUITE      ');
console.log('=====================================================\n');

// ------------------------------------------------------------------
// SECTION 1: Varied Datasets Multi-Turn Context Preservation Tests
// ------------------------------------------------------------------

console.log('--- SECTION 1: Varied Datasets Multi-Turn Tests ---');

// 1. Parks
spatialAIEngineInstance.resetContext();
let r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in Yas Island');
assert(r1.results.length === 2, 'Parks: Initial query returns 2 parks');
let r2 = spatialAIEngineInstance.processNaturalLanguageQuery('Run a 3D flood simulation for them');
assert(r2.intent === 'unsupported_capability', 'Parks: 3D flood simulation flagged as unsupported_capability');
assert(r2.results.length === 2, 'Parks: Context results (2 parks) preserved');
assert(spatialAIEngineInstance.context.location === 'Yas Island', 'Parks: Location context retained');
assert(r2.chips.length > 0 && r2.chips[0].query.includes('parks'), 'Parks: Alternative chips reference active parks dataset');

// 2. Pharmacies
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show pharmacies in Al Khalidiyah');
assert(r1.results.length > 0, 'Pharmacies: Initial query returns pharmacies');
const pharmCount = r1.results.length;
r2 = spatialAIEngineInstance.processNaturalLanguageQuery('Predict future traffic flow for this road');
assert(r2.intent === 'unsupported_capability', 'Pharmacies: Traffic prediction flagged as unsupported');
assert(r2.results.length === pharmCount, 'Pharmacies: Result count preserved');
assert(spatialAIEngineInstance.context.location === 'Al Khalidiyah', 'Pharmacies: Location retained');

// 3. Clinics
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show clinics in Khalifa City');
assert(r1.results.length > 0, 'Clinics: Initial query returns clinics');
const clinicCount = r1.results.length;
r2 = spatialAIEngineInstance.processNaturalLanguageQuery('Simulate air pollution dispersion around them');
assert(r2.intent === 'unsupported_capability', 'Clinics: Pollution dispersion flagged as unsupported');
assert(r2.results.length === clinicCount, 'Clinics: Result count preserved');

// 4. Universities
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show universities in Abu Dhabi');
assert(r1.results.length > 0, 'Universities: Initial query returns universities');
const uniCount = r1.results.length;
r2 = spatialAIEngineInstance.processNaturalLanguageQuery('Pedestrian evacuation simulation for this campus');
assert(r2.intent === 'unsupported_capability', 'Universities: Pedestrian evacuation flagged as unsupported');
assert(r2.results.length === uniCount, 'Universities: Result count preserved');

// 5. Bus Stations
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show bus stations in Khalifa City');
assert(r1.results.length > 0, 'Bus Stations: Initial query returns bus stations');
const busCount = r1.results.length;
r2 = spatialAIEngineInstance.processNaturalLanguageQuery('Show live traffic congestion forecasting');
assert(r2.intent === 'unsupported_capability', 'Bus Stations: Traffic forecasting flagged as unsupported');
assert(r2.results.length === busCount, 'Bus Stations: Result count preserved');

// 6. Vehicle Inspection Centers / Industrial
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show vehicle inspection centers in Mussafah');
assert(r1.results.length > 0, 'Vehicle Inspection: Initial query returns inspection centers');
const vehCount = r1.results.length;
r2 = spatialAIEngineInstance.processNaturalLanguageQuery('Run earthquake damage simulation for these buildings');
assert(r2.intent === 'unsupported_capability', 'Vehicle Inspection: Earthquake damage simulation flagged as unsupported');
assert(r2.results.length === vehCount, 'Vehicle Inspection: Result count preserved');

// ------------------------------------------------------------------
// SECTION 2: Cold-Start Unsupported Capability Tests (No Prior Context)
// ------------------------------------------------------------------

console.log('\n--- SECTION 2: Cold-Start Tests (No Context) ---');

spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Run a 3D flood inundation simulation for this area.');
assert(r1.intent === 'unsupported_capability', 'Cold-Start: 3D flood simulation detected');
assert(r1.chips.length >= 3, 'Cold-Start: Returns supported alternative chips');
assert(r1.aiMessageText.includes('3D flood inundation'), 'Cold-Start: Explains capability is unsupported');

spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show live traffic congestion forecasting.');
assert(r1.intent === 'unsupported_capability', 'Cold-Start: Live traffic forecasting detected');

spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Predict future traffic flow for this road.');
assert(r1.intent === 'unsupported_capability', 'Cold-Start: Traffic flow prediction detected');

// ------------------------------------------------------------------
// SECTION 3: Arabic Unsupported Capability Tests
// ------------------------------------------------------------------

console.log('\n--- SECTION 3: Arabic Unsupported Capability Tests ---');

spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('عرض الحدائق في جزيرة ياس', '', 'ar');
assert(r1.results.length === 2, 'Arabic: Initial parks query in Yas Island returns 2 results');
r2 = spatialAIEngineInstance.processNaturalLanguageQuery('محاكاة ثلاثية الأبعاد للفيضانات في هذه المنطقة', '', 'ar');
assert(r2.intent === 'unsupported_capability', 'Arabic: 3D flood simulation flagged as unsupported_capability');
assert(r2.results.length === 2, 'Arabic: Active results preserved');
assert(r2.aiMessageText.includes('غير مدعومة'), 'Arabic: AI explanation is in Arabic');
assert(r2.chips.some(c => /[\u0600-\u06FF]/.test(c.label)), 'Arabic: Alternative chips in Arabic');

spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('التنبؤ بازدحام المرور الحي لمدينة خليفة', '', 'ar');
assert(r1.intent === 'unsupported_capability', 'Arabic: Traffic congestion forecasting flagged as unsupported');
assert(r1.aiMessageText.includes('غير مدعومة'), 'Arabic: Explanation is in Arabic');

// ------------------------------------------------------------------
// SECTION 4: Regression Tests (J1, J2, GIS Searches)
// ------------------------------------------------------------------

console.log('\n--- SECTION 4: Regression Verification ---');

// J2 Ambiguity: Yas
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks near Yas');
assert(r1.intent === 'clarification', 'Regression: Ambiguous Yas query returns clarification');

// J2 Ambiguity: Khalifa
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near Khalifa');
assert(r1.intent === 'clarification', 'Regression: Ambiguous Khalifa query returns clarification');

// J2 Ambiguity: Zayed
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near Zayed');
assert(r1.intent === 'clarification', 'Regression: Ambiguous Zayed query returns clarification');

// Airport Ambiguity
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near airport');
assert(r1.intent === 'clarification', 'Regression: Airport ambiguity works');

// Supported Simulation
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('What if population grows by 20%?');
assert(r1.intent === 'simulation', 'Regression: Supported population growth simulation works');

// Supported Proximity / Buffer
spatialAIEngineInstance.resetContext();
r1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show schools within 2 km of hospitals');
assert(r1.intent === 'cross_layer_buffer', 'Regression: Supported cross-layer buffer works');

console.log('\n🎉 ALL TESTS PASSED WITH 100% SUCCESS! 🎉');
