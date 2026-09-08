import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log('================================================================');
console.log('🧪 TEST SUITE: GeoVision AI Accuracy & Correct Answer Enforcement');
console.log('================================================================\n');

// 1. TEMPORAL & UNSUPPORTED CAPABILITIES
console.log('--- 1. Temporal & Unsupported Dataset Handling ---');
spatialAIEngineInstance.resetContext();

const q1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show population growth by year', '', 'en');
assert(q1.intent === 'unsupported_capability', 'Query "Show population growth by year" routes to unsupported_capability');
assert(q1.results.length === 0, 'Query "Show population growth by year" returns 0 unrelated facility results');
assert(q1.aiMessageText.toLowerCase().includes('population growth') || q1.aiMessageText.toLowerCase().includes('not currently supported'), 'AI message explains population growth is unsupported');

const q2 = spatialAIEngineInstance.processNaturalLanguageQuery('Show population trends over time', '', 'en');
assert(q2.intent === 'unsupported_capability', 'Query "Show population trends over time" routes to unsupported_capability');
assert(q2.results.length === 0, 'Returns 0 results for population trends');

const q3 = spatialAIEngineInstance.processNaturalLanguageQuery('اعرض نمو السكان حسب السنة', '', 'ar');
assert(q3.intent === 'unsupported_capability', 'Arabic query "اعرض نمو السكان حسب السنة" routes to unsupported_capability');
assert(q3.results.length === 0, 'Arabic population temporal query returns 0 results');
assert(q3.aiMessageText.includes('نمو السكان') || q3.aiMessageText.includes('غير مدعومة'), 'Arabic AI message contains clear explanation');

// 2. DISTRICT DISTRIBUTION ANALYTICS
console.log('\n--- 2. District Distribution Analytics ---');
spatialAIEngineInstance.resetContext();

const q4 = spatialAIEngineInstance.processNaturalLanguageQuery('Show the number of parks by district', '', 'en');
assert(q4.intent === 'area_ranking', 'Query "Show the number of parks by district" routes to area_ranking');
assert(q4.targetCategory === 'Parks', 'Target category is Parks');
assert(q4.analytics && q4.analytics.type === 'area_ranking', 'Analytics payload contains area_ranking');
assert(q4.results.length > 0, 'Returns matching park items across districts');

const q5 = spatialAIEngineInstance.processNaturalLanguageQuery('Show bus stations by district', '', 'en');
assert(q5.intent === 'area_ranking', 'Query "Show bus stations by district" routes to area_ranking');
assert(q5.targetCategory === 'Transportation', 'Target category is Transportation');
assert(q5.results.length > 0, 'Returns bus station items');

const q6 = spatialAIEngineInstance.processNaturalLanguageQuery('Show government service centers by area', '', 'en');
assert(q6.intent === 'area_ranking', 'Query "Show government service centers by area" routes to area_ranking');
assert(q6.targetCategory === 'Government Services', 'Target category is Government Services');

const q7 = spatialAIEngineInstance.processNaturalLanguageQuery('Universities across districts', '', 'en');
assert(q7.intent === 'area_ranking', 'Query "Universities across districts" routes to area_ranking');
assert(q7.targetCategory === 'Education', 'Target category is Education');

const q8 = spatialAIEngineInstance.processNaturalLanguageQuery('توزيع الحدائق حسب المنطقة', '', 'ar');
assert(q8.intent === 'area_ranking', 'Arabic query "توزيع الحدائق حسب المنطقة" routes to area_ranking');
assert(q8.targetCategory === 'Parks', 'Target category is Parks in Arabic');

// 3. CROSS-AREA COMPARISON
console.log('\n--- 3. Cross-Area Comparisons ---');
spatialAIEngineInstance.resetContext();

const q9 = spatialAIEngineInstance.processNaturalLanguageQuery('Compare parks in Abu Dhabi and Al Ain', '', 'en');
assert(q9.intent === 'cross_area_comparison', 'Query "Compare parks in Abu Dhabi and Al Ain" routes to cross_area_comparison');
assert(q9.analytics && q9.analytics.type === 'cross_area_comparison', 'Analytics payload is cross_area_comparison');
assert(q9.results.length > 0, 'Results contain parks in both areas');

const q10 = spatialAIEngineInstance.processNaturalLanguageQuery('قارن بين الحدائق في أبوظبي والعين', '', 'ar');
assert(q10.intent === 'cross_area_comparison', 'Arabic query "قارن بين الحدائق في أبوظبي والعين" routes to cross_area_comparison');
assert(q10.analytics && q10.analytics.type === 'cross_area_comparison', 'Arabic analytics payload is cross_area_comparison');

// 4. ATTRIBUTE RANKINGS & SUPERLATIVES
console.log('\n--- 4. Attribute Rankings & Superlatives ---');
spatialAIEngineInstance.resetContext();

const q11 = spatialAIEngineInstance.processNaturalLanguageQuery('Which hospital has the most beds in Abu Dhabi?', '', 'en');
assert(q11.intent === 'ranking_superlative', 'Query "Which hospital has the most beds in Abu Dhabi?" routes to ranking_superlative');
assert(q11.results.length > 0, 'Hospital results returned');
assert(q11.results[0].beds >= q11.results[1].beds, 'Ranked descending by beds');
assert(q11.aiMessageText.includes('beds') || q11.aiMessageText.includes('capacity'), 'AI response mentions beds/capacity');

const q12 = spatialAIEngineInstance.processNaturalLanguageQuery('Which school has the lowest tuition in Khalifa City?', '', 'en');
assert(q12.intent === 'ranking_superlative', 'Query "Which school has the lowest tuition in Khalifa City?" routes to ranking_superlative');
assert(q12.results.length > 0, 'School results returned');

const q13 = spatialAIEngineInstance.processNaturalLanguageQuery('Which attraction has the highest rating in Abu Dhabi?', '', 'en');
assert(q13.intent === 'ranking_superlative', 'Query "Which attraction has the highest rating in Abu Dhabi?" routes to ranking_superlative');
assert(q13.results[0].rating >= (q13.results[1]?.rating || 0), 'Ranked descending by rating');

// 5. UNRECOGNIZED / NON-GIS QUALITY GATE
console.log('\n--- 5. Semantic Relevance Quality Gate (Non-GIS Queries) ---');
spatialAIEngineInstance.resetContext();

const q14 = spatialAIEngineInstance.processNaturalLanguageQuery('What is the stock price of Apple?', '', 'en');
assert(q14.intent === 'unsupported_layer', 'Query "What is the stock price of Apple?" routes to unsupported_layer');
assert(q14.results.length === 0, 'Returns 0 results (no unrelated fallback)');

const q15 = spatialAIEngineInstance.processNaturalLanguageQuery('How to make chocolate cake?', '', 'en');
assert(q15.intent === 'unsupported_layer', 'Query "How to make chocolate cake?" routes to unsupported_layer');
assert(q15.results.length === 0, 'Returns 0 results');

const q16 = spatialAIEngineInstance.processNaturalLanguageQuery('Where can I buy a horse?', '', 'en');
assert(q16.intent === 'unsupported_layer', 'Query "Where can I buy a horse?" routes to unsupported_layer');
assert(q16.results.length === 0, 'Returns 0 results');

// 6. ZERO-RESULTS WITHOUT CATEGORY SUBSTITUTION
console.log('\n--- 6. Zero Results Without Category Substitution ---');
spatialAIEngineInstance.resetContext();

const q17 = spatialAIEngineInstance.processNaturalLanguageQuery('Show ports in Al Ain', '', 'en');
assert(q17.targetCategory === 'Transportation', 'Target category remains Transportation');
assert(q17.results.length === 0, 'Returns 0 ports in inland Al Ain (never substitutes another category)');
assert(q17.aiMessageText.toLowerCase().includes('no') && q17.aiMessageText.toLowerCase().includes('found'), 'Clear zero-match message');

// 7. CONTEXT SWITCHING VS PRONOUN FOLLOW-UP
console.log('\n--- 7. Context Switching vs Follow-up Logic ---');
spatialAIEngineInstance.resetContext();

// Step A: Search Parks in Abu Dhabi
const stepA = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in Abu Dhabi', '', 'en');
assert(stepA.targetCategory === 'Parks', 'Step A category is Parks');
assert(spatialAIEngineInstance.context.dataset === 'Parks', 'Context dataset is Parks');

// Step B: Explicit New Query for Pharmacies in Al Ain
const stepB = spatialAIEngineInstance.processNaturalLanguageQuery('Show pharmacies in Al Ain', '', 'en');
assert(stepB.targetCategory === 'Healthcare', 'Step B category switched to Healthcare');
assert(spatialAIEngineInstance.context.dataset === 'Healthcare', 'Context dataset updated to Healthcare');
assert(spatialAIEngineInstance.context.subcategory === 'Pharmacies', 'Context subcategory is Pharmacies');
assert(spatialAIEngineInstance.context.location === 'Al Ain', 'Context location updated to Al Ain');

// Step C: Pronoun Query "How many are there?"
const stepC = spatialAIEngineInstance.processNaturalLanguageQuery('How many are there?', '', 'en');
assert(stepC.targetCategory === 'Healthcare', 'Step C pronoun retains Healthcare');
assert(spatialAIEngineInstance.context.location === 'Al Ain', 'Step C pronoun retains Al Ain');

console.log('\n================================================================');
console.log(`📊 FINAL RESULT: ${passedTests} / ${totalTests} tests passed`);
console.log('================================================================\n');

if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
