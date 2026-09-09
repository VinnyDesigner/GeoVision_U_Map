import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

// Run query that triggers district distribution / area ranking
const res = spatialAIEngineInstance.processNaturalLanguageQuery('Which area has the most environment?');
console.log('Query: "Which area has the most environment?"');
console.log('Intent:', res.intent);
console.log('Count of items in structuredResults:', res.structuredResults?.items?.length);
console.log('Items:');
res.structuredResults?.items?.forEach((it, i) => {
  console.log(`  [${i}] ${it.id} - ${it.title}`);
});
