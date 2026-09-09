import { GEOVISION_SPATIAL_DATASET, ABU_DHABI_SPATIAL_DATASET, spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

console.log('Total items in GEOVISION_SPATIAL_DATASET:', GEOVISION_SPATIAL_DATASET.length);

const idCounts = {};
const titleCounts = {};

GEOVISION_SPATIAL_DATASET.forEach(item => {
  idCounts[item.id] = (idCounts[item.id] || 0) + 1;
  titleCounts[item.title] = (titleCounts[item.title] || 0) + 1;
});

const duplicateIds = Object.entries(idCounts).filter(([id, c]) => c > 1);
const duplicateTitles = Object.entries(titleCounts).filter(([title, c]) => c > 1);

console.log('Duplicate IDs:', duplicateIds);
console.log('Duplicate Titles:', duplicateTitles);

// Test querying "Show top 5 areas with environment"
const res1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show top 5 areas with environment');
console.log('\nQuery: "Show top 5 areas with environment"');
console.log('Intent:', res1.intent);
console.log('Results count:', res1.results?.length);
console.log('Results titles:', res1.results?.map(r => `${r.id}: ${r.title}`));
console.log('Structured items titles:', res1.structuredResults?.items?.map(r => `${r.id}: ${r.title}`));

const res2 = spatialAIEngineInstance.processNaturalLanguageQuery('environment');
console.log('\nQuery: "environment"');
console.log('Intent:', res2.intent);
console.log('Results count:', res2.results?.length);
console.log('Results titles:', res2.results?.map(r => `${r.id}: ${r.title}`));
console.log('Structured items titles:', res2.structuredResults?.items?.map(r => `${r.id}: ${r.title}`));
