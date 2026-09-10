import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

const userLoc = { lat: 24.4539, lon: 54.3773, name: 'Current Location', arabicName: 'test' };

// Simulate hospitals near me
spatialAIEngineInstance.resetContext();
const r1 = spatialAIEngineInstance.processNaturalLanguageQuery('hospitals near me','','en',{userLocation: userLoc});
console.log('After hospitals near me:');
console.log('  context.dataset:', spatialAIEngineInstance.context.dataset);
console.log('  context.location:', spatialAIEngineInstance.context.location);
console.log('  context.locationCoordinates:', JSON.stringify(spatialAIEngineInstance.context.locationCoordinates));

// Now reset
spatialAIEngineInstance.resetContext();
console.log('\nAfter resetContext:');
console.log('  context.dataset:', spatialAIEngineInstance.context.dataset);
console.log('  context.location:', spatialAIEngineInstance.context.location);
console.log('  context.locationCoordinates:', JSON.stringify(spatialAIEngineInstance.context.locationCoordinates));

// Test nearest pharmacy - check what evaluateRankingQuery gets
console.log('\nisNearMeIntent for nearest pharmacy:', /(?:near(?:by)?(?:\s+to)?\s+me|around\s+me|closest\s+to\s+me|nearest\s+to\s+me|my\s+location|current\s+location|from\s+me|of\s+me)/i.test('nearest pharmacy'));
