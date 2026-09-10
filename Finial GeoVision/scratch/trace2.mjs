import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

// Simulate exact test sequence
const userLoc = { lat: 24.4539, lon: 54.3773, name: 'Current Location', arabicName: 'test' };

// From "hospitals near me"
spatialAIEngineInstance.resetContext();
const r1 = spatialAIEngineInstance.processNaturalLanguageQuery('hospitals near me','','en',{userLocation: userLoc});
console.log('hospitals near me:', r1.intent, r1.results.length, 'items');

// Explicit reset as in test
spatialAIEngineInstance.resetContext();
const r2 = spatialAIEngineInstance.processNaturalLanguageQuery('nearest pharmacy','','en',{userLocation: userLoc});
console.log('nearest pharmacy (after reset):', r2.intent, r2.results.length, 'items');
console.log('Context dataset:', spatialAIEngineInstance.context.dataset);
console.log('Context location:', spatialAIEngineInstance.context.location);
