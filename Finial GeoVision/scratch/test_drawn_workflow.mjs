import {
  spatialAIEngineInstance,
  resolveAllTaxonomyEntities,
  resolveTaxonomyEntity,
  GEOVISION_SPATIAL_DATASET
} from '../src/services/spatialSearchService.js';

console.log('=== TESTING DRAWN AREA WORKFLOW ===\n');

// Mock Drawn Circle Area in Abu Dhabi (e.g. around Khalifa City / Musaffah)
const mockCircleDrawnArea = {
  geometryType: 'circle',
  center: { lat: 24.4239, lng: 54.5772 },
  radius: 8000,
  label: 'Drawn Area · 8.0 km radius',
  arabicLabel: 'المنطقة المرسومة · نصف القطر 8.0 كم'
};

// Step 1: Draw circle -> user asks "Can I know how many schools are there in the selected area?"
console.log('--- Step 1: "Can I know how many schools are there in the selected area?" ---');
spatialAIEngineInstance.resetContext();
spatialAIEngineInstance.setDrawnAreaContext(mockCircleDrawnArea);

const q1 = 'Can I know how many schools are there in the selected area?';
const res1 = spatialAIEngineInstance.processNaturalLanguageQuery(q1, '', 'en', { drawnArea: mockCircleDrawnArea });

console.log('Intent:', res1.intent);
console.log('Summary:', res1.querySummary);
console.log('AI Text:', res1.aiMessageText);
console.log('Results Count:', res1.results?.length);
console.log('Map Action:', res1.mapAction);
console.log('Analytics:', res1.analytics ? 'YES' : 'NO');
console.log('Context Badges:', res1.contextBadges);

// Step 1b: "How many schools are in the selected area?"
console.log('\n--- Step 1b: "How many schools are in the selected area?" ---');
const q1b = 'How many schools are in the selected area?';
const res1b = spatialAIEngineInstance.processNaturalLanguageQuery(q1b, '', 'en', { drawnArea: mockCircleDrawnArea });
console.log('Intent:', res1b.intent);
console.log('AI Text:', res1b.aiMessageText);
console.log('Results Count:', res1b.results?.length);

// Step 2: "Show hospitals in this area."
console.log('\n--- Step 2: "Show hospitals in this area." ---');
const q2 = 'Show hospitals in this area.';
const res2 = spatialAIEngineInstance.processNaturalLanguageQuery(q2, '', 'en', { drawnArea: mockCircleDrawnArea });
console.log('Intent:', res2.intent);
console.log('AI Text:', res2.aiMessageText);
console.log('Results Count:', res2.results?.length);
console.log('Results Categories:', Array.from(new Set(res2.results?.map(r => r.category))));

// Step 3: "Which school has the highest rating?"
console.log('\n--- Step 3: "Which school has the highest rating?" ---');
const q3 = 'Which school has the highest rating?';
const res3 = spatialAIEngineInstance.processNaturalLanguageQuery(q3, '', 'en', { drawnArea: mockCircleDrawnArea });
console.log('Intent:', res3.intent);
console.log('AI Text:', res3.aiMessageText);
console.log('Results Count:', res3.results?.length);
console.log('Top Result:', res3.results?.[0]?.title, res3.results?.[0]?.rating);

// Step 4: "Show pharmacies also."
console.log('\n--- Step 4: "Show pharmacies also." ---');
const q4 = 'Show pharmacies also.';
const res4 = spatialAIEngineInstance.processNaturalLanguageQuery(q4, '', 'en', { drawnArea: mockCircleDrawnArea });
console.log('Intent:', res4.intent);
console.log('AI Text:', res4.aiMessageText);
console.log('Results Count:', res4.results?.length);
console.log('Results Subcategories:', Array.from(new Set(res4.results?.map(r => r.subcategory))));

// Step 5: "How many schools and hospitals are in this area?"
console.log('\n--- Step 5: "How many schools and hospitals are in this area?" ---');
const q5 = 'How many schools and hospitals are in this area?';
const res5 = spatialAIEngineInstance.processNaturalLanguageQuery(q5, '', 'en', { drawnArea: mockCircleDrawnArea });
console.log('Intent:', res5.intent);
console.log('AI Text:', res5.aiMessageText);
console.log('Results Count:', res5.results?.length);
console.log('Analytics:', res5.analytics ? 'YES' : 'NO');
