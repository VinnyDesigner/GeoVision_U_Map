import { getTranslations } from '../src/utils/translations.js';
import { spatialAIEngineInstance, calculateDistanceKm, GEOVISION_SPATIAL_DATASET } from '../src/services/spatialSearchService.js';

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

console.log('--- 1. Testing Translations for Route & Directions ---');
const tEn = getTranslations('en');
const tAr = getTranslations('ar');

assert(tEn.route === 'Route', 'tEn.route is "Route"');
assert(tAr.route === 'المسار', 'tAr.route is "المسار"');
assert(tEn.getDirections === 'Get Directions', 'tEn.getDirections is "Get Directions"');
assert(tAr.getDirections === 'الحصول على الاتجاهات', 'tAr.getDirections is "الحصول على الاتجاهات"');
assert(tEn.fromMyLocation === 'My Current Location', 'tEn.fromMyLocation is "My Current Location"');
assert(tAr.fromMyLocation === 'موقعي الحالي', 'tAr.fromMyLocation is "موقعي الحالي"');
assert(tEn.detectMyLocation === 'Detect My Location', 'tEn.detectMyLocation is "Detect My Location"');
assert(tAr.detectMyLocation === 'تحديد موقعي الآن', 'tAr.detectMyLocation is "تحديد موقعي الآن"');

console.log('\n--- 2. Testing Haversine Distance Calculation ---');
// User in Abu Dhabi downtown: 24.4539, 54.3773
// Al Dhafra Solar PV: 24.1610, 54.5450
const dist = calculateDistanceKm(24.4539, 54.3773, 24.1610, 54.5450);
assert(dist > 30 && dist < 45, `Distance calculated accurately: ${dist.toFixed(2)} km`);

console.log('\n--- 3. Testing Route Intent with Context Selection ---');
// Set context feature to Al Dhafra Solar PV
const solarFeature = GEOVISION_SPATIAL_DATASET.find(f => f.title && f.title.includes('Al Dhafra Solar'));
assert(!!solarFeature, 'Al Dhafra Solar feature exists in dataset');

spatialAIEngineInstance.context.selectedFeature = solarFeature;
spatialAIEngineInstance.context.dataset = 'Energy';

const routeRes1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show directions to this location', 'en');
assert(routeRes1.intent === 'route_directions', 'Intent is route_directions');
assert(routeRes1.selectedFeature && routeRes1.selectedFeature.title === solarFeature.title, 'Selected feature is Al Dhafra Solar');
assert(routeRes1.aiMessageText.includes('Directions') || routeRes1.aiMessageText.includes('Route'), 'AI response mentions Directions/Route');
assert(routeRes1.chips && routeRes1.chips.some(c => c.action === 'open_url'), 'Contains open_url action chip');

console.log('\n--- 4. Testing Nearest Vehicle Inspection Center Route Intent ---');
const routeRes2 = spatialAIEngineInstance.processNaturalLanguageQuery('How do I get to the nearest vehicle inspection center?', 'en', {
  userLocation: { lat: 24.4539, lon: 54.3773 }
});
assert(routeRes2.intent === 'route_directions', 'Nearest query intent is route_directions');
assert(routeRes2.selectedFeature && (routeRes2.selectedFeature.title.toLowerCase().includes('vehicle') || routeRes2.selectedFeature.title.toLowerCase().includes('inspection')), 'Selected nearest vehicle inspection center');
assert(routeRes2.results && routeRes2.results.length > 0, 'Returns candidate POIs');

console.log('\n--- 5. Testing Arabic Route Intent ---');
const routeRes3 = spatialAIEngineInstance.processNaturalLanguageQuery('كيف أصل إلى أقرب محطة حافلات؟', 'ar', {
  userLocation: { lat: 24.4539, lon: 54.3773 }
});
assert(routeRes3.intent === 'route_directions', 'Arabic nearest bus query intent is route_directions');
assert(routeRes3.selectedFeature && (routeRes3.selectedFeature.title.toLowerCase().includes('bus') || (routeRes3.selectedFeature.arabicTitle && routeRes3.selectedFeature.arabicTitle.includes('حافلات'))), 'Selected nearest bus station in Arabic');

console.log('\n--- 6. Testing Specific Named Facility Route in Arabic ---');
const burjeelFeature = GEOVISION_SPATIAL_DATASET.find(f => f.title && f.title.includes('Burjeel'));
const routeRes4 = spatialAIEngineInstance.processNaturalLanguageQuery('المسار إلى مستشفى برجيل', 'ar');
assert(routeRes4.intent === 'route_directions', 'Arabic specific facility intent is route_directions');
assert(routeRes4.selectedFeature && routeRes4.selectedFeature.title.includes('Burjeel'), 'Selected Burjeel hospital');

console.log(`\n========================================`);
console.log(`Total tests: ${passed + failed}, Passed: ${passed}, Failed: ${failed}`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL ROUTE TESTS PASSED SUCCESSFULLY! 🚀');
}
