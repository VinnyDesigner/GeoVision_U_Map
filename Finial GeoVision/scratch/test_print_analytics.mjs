import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';
import assert from 'assert';

console.log('=== TEST SUITE: GeoVision GIS Print & Analytics Support ===\n');

let passCount = 0;
let failCount = 0;

function it(name, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
    passCount++;
  } catch (err) {
    console.error(`❌ FAIL: ${name}`);
    console.error(`   Error: ${err.message}`);
    failCount++;
  }
}

// Test A: Normal spatial search does NOT generate chart
it('Test A: "Show government facilities in Abu Dhabi" -> returns normal search results without chart', () => {
  spatialAIEngineInstance.context.reset();
  const res = spatialAIEngineInstance.processNaturalLanguageQuery('Show government facilities in Abu Dhabi', 'en');
  
  assert.ok(res, 'Response should exist');
  assert.ok(res.results && res.results.length > 0, 'Should return results');
  assert.strictEqual(res.analytics, null, 'Normal search must NOT automatically generate analytics/chart (Rule 1)');
  assert.strictEqual(spatialAIEngineInstance.context.analytics, null, 'Context analytics must remain null');
  assert.notStrictEqual(res.intent, 'print_export', 'Intent should be normal search');
});

// Test B: Analytics query generates analytics
it('Test B: "How many government facilities are in each district?" -> generates analytics chart', () => {
  spatialAIEngineInstance.context.reset();
  const res = spatialAIEngineInstance.processNaturalLanguageQuery('How many government facilities are in each district?', 'en');
  
  assert.ok(res, 'Response should exist');
  assert.ok(res.analytics, 'Analytics payload must be generated (Rule 2)');
  assert.ok(res.analytics.data && res.analytics.data.length > 0, 'Analytics data must have breakdown');
  assert.ok(spatialAIEngineInstance.context.analytics, 'Context analytics must be populated');
});

// Test C: AI Print with Analytics
it('Test C: "Print map with analytics" after analytics query -> configures analytics print mode', () => {
  // context still has analytics from Test B
  const res = spatialAIEngineInstance.processNaturalLanguageQuery('Print map with analytics', 'en');
  
  assert.ok(res, 'Response should exist');
  assert.strictEqual(res.intent, 'print_export', 'Intent should be print_export');
  assert.ok(res.openPrintModal, 'openPrintModal should be true');
  assert.strictEqual(res.printConfig.content, 'analytics', 'Print content should be analytics (Rule 3)');
  assert.ok(res.printConfig.analytics, 'Print config should include analytics payload');
  assert.strictEqual(res.printConfig.includeScale, true, 'Proper GIS scale bar enabled (Rule 6)');
  assert.strictEqual(res.printConfig.includeNorthArrow, true, 'Proper GIS north arrow enabled (Rule 6)');
});

// Test D: AI Print with Search Results + Analytics
it('Test D: "Print map with results and analytics" -> configures results_analytics print mode', () => {
  const res = spatialAIEngineInstance.processNaturalLanguageQuery('Print map with results and analytics', 'en');
  
  assert.ok(res, 'Response should exist');
  assert.strictEqual(res.intent, 'print_export', 'Intent should be print_export');
  assert.ok(res.openPrintModal, 'openPrintModal should be true');
  assert.strictEqual(res.printConfig.content, 'results_analytics', 'Print content should be results_analytics (Rule 4)');
  assert.ok(res.printConfig.analytics, 'Print config should include analytics payload');
});

// Test E: Arabic Analytics & Print
it('Test E: Arabic query "كم عدد المرافق الحكومية في كل منطقة؟" -> generates analytics chart and handles print', () => {
  spatialAIEngineInstance.context.reset();
  const res = spatialAIEngineInstance.processNaturalLanguageQuery('كم عدد المرافق الحكومية في كل منطقة؟', 'ar');
  
  assert.ok(res, 'Response should exist');
  assert.ok(res.analytics, 'Arabic analytics must be generated');
  assert.ok(spatialAIEngineInstance.context.analytics, 'Context analytics must be populated for Arabic');
  
  const printRes = spatialAIEngineInstance.processNaturalLanguageQuery('اطبع الخريطة مع التحليلات', 'ar');
  assert.ok(printRes, 'Print response should exist');
  assert.strictEqual(printRes.intent, 'print_export');
  assert.strictEqual(printRes.printConfig.content, 'analytics');
  assert.ok(printRes.printConfig.analytics);
});

// Test F: Normal search after analytics resets analytics to null
it('Test F: New normal search resets analytics context so subsequent print does NOT include chart', () => {
  const res = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in Khalifa City', 'en');
  
  assert.ok(res, 'Response should exist');
  assert.strictEqual(res.analytics, null, 'Normal search analytics must be null');
  assert.strictEqual(spatialAIEngineInstance.context.analytics, null, 'Context analytics must be reset to null');
  
  const printRes = spatialAIEngineInstance.processNaturalLanguageQuery('Print this map', 'en');
  assert.ok(printRes, 'Print response should exist');
  assert.notStrictEqual(printRes.printConfig.content, 'analytics', 'Default print must not be analytics');
  assert.strictEqual(printRes.printConfig.analytics, null, 'Print config analytics must be null');
});

console.log('\n========================================');
console.log(`TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('========================================\n');

if (failCount > 0) {
  process.exit(1);
}
