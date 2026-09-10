import { GEOVISION_SPATIAL_DATASET, spatialAIEngineInstance, resolveAllTaxonomyEntities, isCategoryMatch, isSubcategoryMatch } from '../src/services/spatialSearchService.js';

// Manual trace of the path
const qLower = 'nearest pharmacy';
const entities = resolveAllTaxonomyEntities(qLower);
console.log('1. Entities:', JSON.stringify(entities));

const targetCategory = entities[0]?.category;
const targetSubcategory = entities[0]?.subcategory;
console.log('2. targetCategory:', targetCategory, '/ targetSubcategory:', targetSubcategory);

let workingDataset = [...GEOVISION_SPATIAL_DATASET];
workingDataset = workingDataset.filter(item => {
  const catMatch = isCategoryMatch(item.category, targetCategory);
  const subMatch = targetSubcategory ? isSubcategoryMatch(item.subcategory, targetSubcategory) : true;
  return catMatch && subMatch;
});
console.log('3. After category filter:', workingDataset.length, 'items');
workingDataset.forEach(p => console.log('   -', p.title, '|', p.subcategory));

const userLoc = { lat: 24.4539, lon: 54.3773, name: 'Current Location', arabicName: 'test' };
const eng = spatialAIEngineInstance;
eng.resetContext();
const rankRes = eng.evaluateRankingQuery(qLower, workingDataset, {activeCat: targetCategory, activeSub: targetSubcategory, activeLoc: null}, 'en', {userLocation: userLoc});
console.log('4. rankingResult:', rankRes ? (rankRes.ranked.length + ' items') : 'null');
