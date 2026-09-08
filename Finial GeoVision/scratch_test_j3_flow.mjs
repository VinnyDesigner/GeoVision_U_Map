import { spatialAIEngineInstance } from './src/services/spatialSearchService.js';

console.log('=== TEST J3 MULTI-TURN FLOW ===\n');

// Turn 1: User searches for parks in Yas Island
spatialAIEngineInstance.resetContext();
console.log('Turn 1: "Show parks in Yas Island."');
const t1 = spatialAIEngineInstance.processNaturalLanguageQuery('Show parks in Yas Island');
console.log('Turn 1 Intent:', t1.intent);
console.log('Turn 1 Results count:', t1.results.length);
console.log('Turn 1 AI message:', t1.aiMessageText);

// Turn 2: User requests unsupported capability on the active context
console.log('\nTurn 2: "Run a 3D flood simulation for them."');
const t2 = spatialAIEngineInstance.processNaturalLanguageQuery('Run a 3D flood simulation for them');
console.log('Turn 2 Intent:', t2.intent);
console.log('Turn 2 Results count (preserved):', t2.results.length);
console.log('Turn 2 AI message:', t2.aiMessageText);
console.log('Turn 2 Chips:');
t2.chips?.forEach(c => console.log(`  - [${c.label}] -> "${c.query}"`));

// Turn 3: User clicks supported alternative chip
console.log('\nTurn 3: User clicks alternative chip: "Show facilities within 2 km of these parks"');
const t3 = spatialAIEngineInstance.processNaturalLanguageQuery('Show facilities within 2 km of these parks');
console.log('Turn 3 Intent:', t3.intent);
console.log('Turn 3 Results count:', t3.results.length);
console.log('Turn 3 AI message:', t3.aiMessageText);
