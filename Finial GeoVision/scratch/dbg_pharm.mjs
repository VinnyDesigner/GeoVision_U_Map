import { resolveAllTaxonomyEntities, normalizeUserSpatialQuery, GEOVISION_SPATIAL_DATASET, spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

const entities = resolveAllTaxonomyEntities('nearest pharmacy');
console.log('Entities:', JSON.stringify(entities));

const norm = normalizeUserSpatialQuery('nearest pharmacy');
console.log('Normalized:', norm);

const pharmData = GEOVISION_SPATIAL_DATASET.filter(r => r.subcategory === 'Pharmacies');
console.log('Pharmacies in dataset:', pharmData.length);

const eng = spatialAIEngineInstance;
eng.resetContext();
const userLoc = { lat: 24.4539, lon: 54.3773, name: 'Current Location', arabicName: 'test' };
const r = eng.processNaturalLanguageQuery('nearest pharmacy', '', 'en', { userLocation: userLoc });
console.log('Intent:', r.intent, 'Count:', r.results.length);
console.log('Msg:', r.aiMessageText?.substring(0,120));
