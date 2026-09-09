import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

const testQueries = [
  'Show top 5 areas with environment',
  'top 5 environment',
  'environment in Abu Dhabi',
  'Air Quality Sensors',
  'EAD',
  'EAD Corniche Air Station',
  'EAD Khalifa City Air Quality Station',
  'Air Quality',
  'environmental stations',
  'sensors in Abu Dhabi',
  'Show top 5 areas with environmental monitoring',
  'Show top 5 areas with air quality',
  'air quality stations near corniche',
  'air quality near me',
  'air quality sensors near corniche',
  'top 5 air quality'
];

testQueries.forEach(q => {
  const res = spatialAIEngineInstance.processNaturalLanguageQuery(q);
  const titles = res.results?.map(r => r.title) || [];
  const uniqueTitles = new Set(titles);
  console.log(`\nQuery: "${q}"`);
  console.log(`Intent: ${res.intent}, Count: ${res.results?.length}, Unique: ${uniqueTitles.size}`);
  if (titles.length !== uniqueTitles.size) {
    console.log('>>> DUPLICATE FOUND in results:', titles);
  }
  const structTitles = res.structuredResults?.items?.map(r => r.title) || [];
  const uniqueStruct = new Set(structTitles);
  if (structTitles.length !== uniqueStruct.size) {
    console.log('>>> DUPLICATE FOUND in structuredResults:', structTitles);
  }
});
