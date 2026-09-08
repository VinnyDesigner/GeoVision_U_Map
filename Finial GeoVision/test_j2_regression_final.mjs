import { spatialAIEngineInstance } from './src/services/spatialSearchService.js';

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

console.log('=== RUNNING J2 REGRESSION TESTS ===\n');

// TEST 1: "Show parks near Yas"
spatialAIEngineInstance.resetContext();
let res = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks near Yas');
assert(res.intent === 'clarification', 'TEST 1: Intent is clarification');
assert(res.clarification && res.clarification.options.length >= 2, 'TEST 1: Clarification card has valid options');
assert(res.clarification.question.includes('Yas'), 'TEST 1: Clarification asks about Yas');
assert(res.clarification.options.some(o => o.label === 'Yas Island'), 'TEST 1: Contains Yas Island option');
assert(res.clarification.options.some(o => o.label === 'Bani Yas'), 'TEST 1: Contains Bani Yas option');

// TEST 2: "Show parks near Yas Island"
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks near Yas Island');
assert(res.intent !== 'clarification', 'TEST 2: Intent is NOT clarification');
assert(!res.clarification, 'TEST 2: No clarification card');
assert(res.results && res.results.length > 0, 'TEST 2: Search executed directly and returned results');

// TEST 3: "Show facilities near Khalifa"
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near Khalifa');
assert(res.intent === 'clarification', 'TEST 3: Intent is clarification');
assert(res.clarification && res.clarification.options.some(o => o.label.includes('Khalifa City')), 'TEST 3: Has Khalifa City option');
assert(res.clarification.options.some(o => o.label.includes('Khalifa Port')), 'TEST 3: Has Khalifa Port option');

// TEST 4: "Show facilities in Khalifa City"
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities in Khalifa City');
assert(res.intent !== 'clarification', 'TEST 4: Intent is NOT clarification');
assert(!res.clarification, 'TEST 4: No clarification card');
assert(res.results && res.results.length > 0, 'TEST 4: Search executes directly in Khalifa City');

// TEST 5: "Show facilities near Zayed"
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near Zayed');
assert(res.intent === 'clarification', 'TEST 5: Intent is clarification');
assert(res.clarification.options.some(o => o.label.includes('Zayed City')), 'TEST 5: Has Zayed City option');
assert(res.clarification.options.some(o => o.label.includes('Zayed International Airport')), 'TEST 5: Has Zayed Airport option');
assert(res.clarification.options.some(o => o.label.includes('Sheikh Zayed Grand Mosque')), 'TEST 5: Has Grand Mosque option');

// TEST 6: "Show facilities near Zayed International Airport"
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near Zayed International Airport');
assert(res.intent !== 'clarification', 'TEST 6: Intent is NOT clarification');
assert(!res.clarification, 'TEST 6: Direct search executes');

// TEST 7: "Show parks within 5 km of Yas"
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks within 5 km of Yas');
assert(res.intent === 'clarification', 'TEST 7: Clarification appears for "Show parks within 5 km of Yas"');
const yasOpt = res.clarification.options.find(o => o.label === 'Yas Island');
assert(yasOpt && yasOpt.query.includes('5 km of Yas Island'), `TEST 7: 5 km distance preserved in option query: "${yasOpt?.query}"`);
const execRes = spatialAIEngineInstance.processNaturalLanguageQuery(yasOpt.query);
assert(execRes.intent === 'radius_search', 'TEST 7: Executing option executes radius_search directly');
assert(execRes.results.length > 0, 'TEST 7: Returns results for 5 km radius search in Yas Island');

// TEST 8: Verify airport ambiguity works
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities near airport');
assert(res.intent === 'clarification', 'TEST 8: Airport ambiguity clarification works');
assert(res.clarification.options.some(o => o.label.includes('Zayed International Airport')), 'TEST 8: Contains Zayed Airport');
assert(res.clarification.options.some(o => o.label.includes('Al Bateen')), 'TEST 8: Contains Al Bateen');

// TEST 9: Unambiguous location searches work
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show schools in Al Reem Island');
assert(res.intent !== 'clarification' && res.results.length > 0, 'TEST 9: Al Reem Island search works');

spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('Show hospitals in Al Mushrif');
assert(res.intent !== 'clarification' && res.results.length > 0, 'TEST 9: Al Mushrif search works');

// TEST 10: Arabic ambiguity handling
spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('عرض الحدائق قرب ياس', '', 'ar');
assert(res.intent === 'clarification', 'TEST 10: Arabic Yas ambiguity clarification');
assert(res.clarification.options.some(o => o.label === 'جزيرة ياس'), 'TEST 10: Arabic Yas Island option');
assert(res.clarification.options.some(o => o.label === 'بني ياس'), 'TEST 10: Arabic Bani Yas option');

spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('عرض المرافق قرب خليفة', '', 'ar');
assert(res.intent === 'clarification', 'TEST 10: Arabic Khalifa ambiguity clarification');
assert(res.clarification.options.some(o => o.label.includes('مدينة خليفة')), 'TEST 10: Arabic Khalifa City option');

spatialAIEngineInstance.resetContext();
res = spatialAIEngineInstance.processNaturalLanguageQuery('عرض المرافق قرب زايد', '', 'ar');
assert(res.intent === 'clarification', 'TEST 10: Arabic Zayed ambiguity clarification');
assert(res.clarification.options.some(o => o.label.includes('مدينة زايد')), 'TEST 10: Arabic Zayed City option');
assert(res.clarification.options.some(o => o.label.includes('مطار زايد الدولي')), 'TEST 10: Arabic Zayed Airport option');

console.log('\n🎉 ALL 10 TESTS PASSED SUCCESSFULLY! 🎉');
