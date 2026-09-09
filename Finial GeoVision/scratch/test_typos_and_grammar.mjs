import { executeSpatialQuery, normalizeUserSpatialQuery } from '../src/services/spatialSearchService.js';

console.log('=== TESTING TYPO & GRAMMAR HANDLING ===\n');

const testQueries = [
  // User's exact prompt with typo:
  'change the languahe to arabic',
  'swich language to arabic',
  'chnage the languge to english',
  'translat to arbaic',
  'turn to arabic',
  'make it arabic',
  'arabic language',
  'change theme to drk mdoe',
  'swich to statellite basemap',
  'prnt this map',
  'hostipals in khalifia city',
  'scools in abu dhabi',
  'pharamcy in abu dhabi'
];

let allPassed = true;

for (const query of testQueries) {
  const norm = normalizeUserSpatialQuery(query);
  const res = executeSpatialQuery(query, '', 'en', {});
  console.log(`Query: "${query}"`);
  console.log(`  -> Normalized: "${norm}"`);
  console.log(`  -> Intent: ${res.intent}`);
  console.log(`  -> Actions: ${JSON.stringify(res.appActions || res.action || res.mapAction)}`);
  console.log(`  -> Query Summary: ${res.querySummary}`);
  console.log(`  -> Total Results Count: ${res.results ? res.results.length : 0}`);
  
  if (query.includes('arabic') && (!res.appActions || !res.appActions.some(a => a.type === 'CHANGE_LANGUAGE' && a.lang === 'ar'))) {
    console.error(`  FAIL: Expected CHANGE_LANGUAGE ar for "${query}"`);
    allPassed = false;
  }
  if (query.includes('english') && (!res.appActions || !res.appActions.some(a => a.type === 'CHANGE_LANGUAGE' && a.lang === 'en'))) {
    console.error(`  FAIL: Expected CHANGE_LANGUAGE en for "${query}"`);
    allPassed = false;
  }
  if (query.includes('drk') && (!res.appActions || !res.appActions.some(a => a.type === 'CHANGE_THEME' && a.theme === 'dark'))) {
    console.error(`  FAIL: Expected CHANGE_THEME dark for "${query}"`);
    allPassed = false;
  }
  if (query.includes('statellite') && (!res.appActions || !res.appActions.some(a => a.type === 'CHANGE_BASEMAP' && a.basemap === 'satellite'))) {
    console.error(`  FAIL: Expected CHANGE_BASEMAP satellite for "${query}"`);
    allPassed = false;
  }
  if (query.includes('prnt') && !res.openPrintModal && (!res.appActions || !res.appActions.some(a => a.type === 'PRINT_MAP'))) {
    console.error(`  FAIL: Expected print modal for "${query}"`);
    allPassed = false;
  }
  if (query.includes('hostipals') && (res.results.length === 0 || res.results.length === 166)) {
    console.error(`  FAIL: Expected filtered hospitals for "${query}"`);
    allPassed = false;
  }
  console.log('--------------------------------------------------');
}

if (allPassed) {
  console.log('\n ALL TYPO & GRAMMAR TESTS PASSED PERFECTLY!');
} else {
  console.log('\n SOME TESTS FAILED');
}
