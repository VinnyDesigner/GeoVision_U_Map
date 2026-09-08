import { spatialAIEngineInstance } from '../src/services/spatialSearchService.js';

console.log('=== TESTING CRITICAL FIX: BASEMAP & APP CONTROL ROUTING ===\n');

const testQueries = [
  // Exact queries from prompt
  { query: 'I need basemap satellite view', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'Switch to satellite', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'Change the basemap to satellite', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'Show satellite imagery', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'Use satellite map', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'I want satellite view', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'Change to streets', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'dge_color' },
  { query: 'Switch to the existing default basemap', lang: 'en', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'dge_color' },
  { query: 'Can you switch the basemap?', lang: 'en', expectedAction: 'OPEN_BASEMAP_GALLERY' },
  // Arabic basemap commands
  { query: 'غيّر الخريطة إلى القمر الصناعي', lang: 'ar', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'أريد خريطة القمر الصناعي', lang: 'ar', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'التبديل إلى القمر الصناعي', lang: 'ar', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'عرض صور الأقمار الصناعية', lang: 'ar', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  { query: 'استخدم خريطة القمر الصناعي', lang: 'ar', expectedAction: 'CHANGE_BASEMAP', expectedBasemap: 'satellite' },
  // Other app controls
  { query: 'Switch to dark mode', lang: 'en', expectedAction: 'CHANGE_THEME' },
  { query: 'Change language to Arabic', lang: 'en', expectedAction: 'CHANGE_LANGUAGE' },
  { query: 'Show the legend', lang: 'en', expectedAction: 'OPEN_LEGEND' },
  { query: 'Open layers', lang: 'en', expectedAction: 'OPEN_LAYERS' },
  { query: 'Zoom in', lang: 'en', expectedAction: 'ZOOM_IN' },
  { query: 'Locate me', lang: 'en', expectedAction: 'LOCATE_USER' },
  { query: 'Print this map', lang: 'en', expectedIntent: 'print_export' }
];

let allPassed = true;

for (const t of testQueries) {
  const res = spatialAIEngineInstance.processNaturalLanguageQuery(t.query, '', t.lang);
  console.log(`Query: "${t.query}" (lang: ${t.lang})`);
  console.log(`  Intent: ${res.intent}`);
  console.log(`  AI Message: "${res.aiMessageText}"`);
  console.log(`  App Actions: ${JSON.stringify(res.appActions || [])}`);
  console.log(`  Structured Results: ${res.structuredResults ? 'PRESENT (SHOULD BE NULL)' : 'NULL (CORRECT)'}`);

  // Validations:
  // 1. Should not be no_results or unsupported_layer or standard find/search unless expected
  if (t.expectedAction) {
    const hasAction = res.appActions && res.appActions.some(a => a.type === t.expectedAction && (!t.expectedBasemap || a.basemap === t.expectedBasemap));
    if (!hasAction) {
      console.error(`  FAIL: Expected action ${t.expectedAction} ${t.expectedBasemap || ''}, but got ${JSON.stringify(res.appActions)}`);
      allPassed = false;
    } else {
      console.log(`  PASS: Found expected action ${t.expectedAction}`);
    }
  }

  if (t.expectedIntent) {
    if (res.intent !== t.expectedIntent) {
      console.error(`  FAIL: Expected intent ${t.expectedIntent}, but got ${res.intent}`);
      allPassed = false;
    } else {
      console.log(`  PASS: Found expected intent ${t.expectedIntent}`);
    }
  }

  if (res.structuredResults !== null && res.intent === 'app_control') {
    console.error(`  FAIL: structuredResults must be null for app_control commands`);
    allPassed = false;
  }

  if (res.aiMessageText && res.aiMessageText.includes('No matching spatial results')) {
    console.error(`  FAIL: Got "No matching spatial results" on an application control query`);
    allPassed = false;
  }
  console.log('--------------------------------------------------');
}

console.log('\n=== MULTI-TURN CONTEXT PRESERVATION TEST ===');
// Step 1: Search bus stations
const busRes = spatialAIEngineInstance.processNaturalLanguageQuery('Show bus stations in Abu Dhabi', '', 'en');
console.log(`Step 1 - Search Bus Stations: ${busRes.results?.length} results found. Intent: ${busRes.intent}`);

// Step 2: Switch to satellite
const satRes = spatialAIEngineInstance.processNaturalLanguageQuery('Switch to satellite', '', 'en', {
  currentResults: busRes.results
});
console.log(`Step 2 - Switch to Satellite:`);
console.log(`  Intent: ${satRes.intent}`);
console.log(`  Retained Results: ${satRes.results?.length}`);
console.log(`  AI Message: "${satRes.aiMessageText}"`);
if (satRes.results?.length === busRes.results?.length && satRes.appActions?.some(a => a.type === 'CHANGE_BASEMAP' && a.basemap === 'satellite')) {
  console.log(`  PASS: Bus station results preserved, satellite basemap activated.`);
} else {
  console.error(`  FAIL: Multi-turn result retention failed.`);
  allPassed = false;
}

// Step 3: Print this
const printRes = spatialAIEngineInstance.processNaturalLanguageQuery('Print this', '', 'en', {
  currentResults: satRes.results
});
console.log(`Step 3 - Print This:`);
console.log(`  Intent: ${printRes.intent}`);
console.log(`  Open Print Modal: ${printRes.openPrintModal}`);
console.log(`  Print Title: "${printRes.printConfig?.title}"`);
if (printRes.intent === 'print_export' && printRes.openPrintModal) {
  console.log(`  PASS: Print export triggered with current context.`);
} else {
  console.error(`  FAIL: Print flow failed.`);
  allPassed = false;
}

// Check GIS query separation
console.log('\n=== GIS QUERIES MUST STILL ROUTE TO GIS SEARCH ===');
const gisQueries = [
  'Show bus stations near Abu Dhabi',
  'How many bus stations are in each district?',
  'Compare bus stations across municipalities'
];

for (const gq of gisQueries) {
  const gres = spatialAIEngineInstance.processNaturalLanguageQuery(gq, '', 'en');
  console.log(`Query: "${gq}" -> Intent: ${gres.intent}, Results: ${gres.results?.length}`);
  if (gres.intent === 'app_control') {
    console.error(`  FAIL: GIS query classified as app_control!`);
    allPassed = false;
  } else {
    console.log(`  PASS: Correctly routed to GIS (${gres.intent})`);
  }
}

console.log(`\nOVERALL TEST RESULT: ${allPassed ? 'ALL TESTS PASSED' : 'TESTS FAILED'}`);
process.exit(allPassed ? 0 : 1);
