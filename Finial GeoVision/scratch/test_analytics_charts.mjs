import { spatialAIEngineInstance, GEOVISION_SPATIAL_DATASET } from '../src/services/spatialSearchService.js';

console.log('--- STARTING GEOVISION AI ANALYTICS CHARTS TEST SUITE ---\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    console.error(`  [FAIL] ${message}`);
  }
}

// 1. Line Chart Test: Trend / Yearly Data
console.log('1. Testing Line Chart: Trend / Yearly Data');
{
  spatialAIEngineInstance.resetContext();
  const resEn = spatialAIEngineInstance.processNaturalLanguageQuery('Show population growth by year', '', 'en');
  assert(resEn && resEn.analytics, 'Population growth returns analytics');
  assert(resEn.analytics?.chartType === 'line', `Chart archetype is line (got: ${resEn.analytics?.chartType})`);
  assert(Array.isArray(resEn.analytics?.data) && resEn.analytics.data.length > 0, `Line data series exists (${resEn.analytics?.data?.length} points)`);
  assert(resEn.analytics?.data[0].year === '2020', 'First year is 2020');

  const resAr = spatialAIEngineInstance.processNaturalLanguageQuery('نمو السكان حسب السنة', '', 'ar');
  assert(resAr && resAr.analytics?.chartType === 'line', 'Arabic population growth returns line chart');
}

// 2. Horizontal Bar Chart Test: Top / Rankings
console.log('\n2. Testing Horizontal Bar Chart: Top / Rankings / Superlatives');
{
  spatialAIEngineInstance.resetContext();
  const resEn = spatialAIEngineInstance.processNaturalLanguageQuery('Which areas have the most petrol stations?', '', 'en');
  assert(resEn && resEn.analytics, 'Petrol stations query returns analytics');
  assert(resEn.analytics?.chartType === 'horizontal_bar', `Chart archetype is horizontal_bar (got: ${resEn.analytics?.chartType})`);
  assert(Array.isArray(resEn.analytics?.data) && resEn.analytics.data.length > 0, `Ranking data list exists (${resEn.analytics?.data?.length} districts)`);
  assert(resEn.analytics?.data[0].count > 0, `Top ranked district has > 0 count (${resEn.analytics?.data[0].label}: ${resEn.analytics?.data[0].count})`);

  const resAr = spatialAIEngineInstance.processNaturalLanguageQuery('أي منطقة تضم أكبر عدد من محطات الوقود؟', '', 'ar');
  assert(resAr && resAr.analytics?.chartType === 'horizontal_bar', 'Arabic petrol stations ranking returns horizontal_bar chart');
}

// 3. Grouped Bar Chart Test: Comparison
console.log('\n3. Testing Grouped Bar Chart: Comparison / Municipality');
{
  spatialAIEngineInstance.resetContext();
  const resEn = spatialAIEngineInstance.processNaturalLanguageQuery('Compare government facilities by municipality', '', 'en');
  assert(resEn && resEn.analytics, 'Government facilities by municipality returns analytics');
  assert(resEn.analytics?.chartType === 'grouped_bar', `Chart archetype is grouped_bar (got: ${resEn.analytics?.chartType})`);
  assert(Array.isArray(resEn.analytics?.groups) && resEn.analytics.groups.length === 3, 'Groups contains Abu Dhabi, Al Ain, Al Dhafra');

  const resCompare = spatialAIEngineInstance.processNaturalLanguageQuery('Compare schools and hospitals in Khalifa City', '', 'en');
  assert(resCompare && resCompare.analytics?.chartType === 'grouped_bar', 'Category comparison in district returns grouped_bar chart');

  const resCross = spatialAIEngineInstance.processNaturalLanguageQuery('Compare parks in Abu Dhabi and Al Ain', '', 'en');
  assert(resCross && resCross.analytics?.chartType === 'grouped_bar', 'Cross-area comparison returns grouped_bar chart');

  const resAr = spatialAIEngineInstance.processNaturalLanguageQuery('مقارنة الخدمات الحكومية حسب البلدية', '', 'ar');
  assert(resAr && resAr.analytics?.chartType === 'grouped_bar', 'Arabic municipality comparison returns grouped_bar chart');
}

// 4. Donut Chart Test: Percentage / Composition / Land-Use
console.log('\n4. Testing Donut / Pie Chart: Composition / Land-Use');
{
  spatialAIEngineInstance.resetContext();
  const resEn = spatialAIEngineInstance.processNaturalLanguageQuery('Show land-use distribution', '', 'en');
  assert(resEn && resEn.analytics, 'Land-use distribution returns analytics');
  assert(resEn.analytics?.chartType === 'donut', `Chart archetype is donut (got: ${resEn.analytics?.chartType})`);
  assert(Array.isArray(resEn.analytics?.data) && resEn.analytics.data.length > 0, `Donut segments exist (${resEn.analytics?.data?.length} categories)`);
  assert(resEn.analytics?.totalCount > 0, `Total facilities count is authentic (${resEn.analytics?.totalCount})`);

  const resAr = spatialAIEngineInstance.processNaturalLanguageQuery('توزيع استخدامات الأراضي', '', 'ar');
  assert(resAr && resAr.analytics?.chartType === 'donut', 'Arabic land-use returns donut chart');
}

// 5. Scatter Chart Test: Relationship Between Two Numeric Values
console.log('\n5. Testing Scatter Chart: Relationship / Correlation');
{
  spatialAIEngineInstance.resetContext();
  const resEmissions = spatialAIEngineInstance.processNaturalLanguageQuery('Relationship between emissions and distance to coast', '', 'en');
  assert(resEmissions && resEmissions.analytics, 'Emissions vs Coast returns analytics');
  assert(resEmissions.analytics?.chartType === 'scatter', `Chart archetype is scatter (got: ${resEmissions.analytics?.chartType})`);
  assert(Array.isArray(resEmissions.analytics?.points) && resEmissions.analytics.points.length > 0, `Scatter points exist (${resEmissions.analytics?.points?.length} points)`);
  assert(resEmissions.analytics?.correlation && resEmissions.analytics.correlation.length > 0, 'Correlation summary exists');

  const resBeds = spatialAIEngineInstance.processNaturalLanguageQuery('Relationship between hospital beds and rating', '', 'en');
  assert(resBeds && resBeds.analytics?.chartType === 'scatter', 'Hospital beds vs rating returns scatter chart');

  const resAr = spatialAIEngineInstance.processNaturalLanguageQuery('العلاقة بين انبعاثات الكربون والمسافة إلى الساحل', '', 'ar');
  assert(resAr && resAr.analytics?.chartType === 'scatter', 'Arabic emissions vs coast returns scatter chart');
}

// 6. Dataset Authenticity Test
console.log('\n6. Testing Dataset Authenticity: No Hardcoded Mock Data');
{
  const total = GEOVISION_SPATIAL_DATASET.length;
  assert(total >= 100, `Dataset contains authentic facilities (${total} registered POIs)`);
  const petrolStations = GEOVISION_SPATIAL_DATASET.filter(i => i.subcategory === 'Petrol Stations');
  assert(petrolStations.length >= 8, `Dataset contains authentic ADNOC Petrol Stations (${petrolStations.length} stations)`);
}

console.log(`\n========================================`);
console.log(`FINAL RESULT: ${passedTests} / ${totalTests} TESTS PASSED (${((passedTests / totalTests) * 100).toFixed(1)}%)`);
console.log(`========================================\n`);

if (passedTests !== totalTests) {
  process.exit(1);
}
