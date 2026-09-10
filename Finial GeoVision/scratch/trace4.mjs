import { spatialAIEngineInstance, GEOVISION_SPATIAL_DATASET, resolveAllTaxonomyEntities, isCategoryMatch, isSubcategoryMatch } from '../src/services/spatialSearchService.js';

const userLoc = { lat: 24.4539, lon: 54.3773, name: 'Current Location', arabicName: 'test' };

spatialAIEngineInstance.resetContext();

// Patch buildStandardResponse to log inputs
const orig = spatialAIEngineInstance.buildStandardResponse.bind(spatialAIEngineInstance);
spatialAIEngineInstance.buildStandardResponse = function(args) {
  console.log('[buildStandardResponse] intent:', args.intent, 'count:', (args.workingDataset||[]).length);
  return orig(args);
};

const r = spatialAIEngineInstance.processNaturalLanguageQuery('nearest pharmacy','','en',{userLocation: userLoc});
console.log('Result:', r.intent, r.results.length, 'items');
