import fs from 'fs';
import { getDrawnAreaLabel } from '../src/services/spatialSearchService.js';

console.log('Testing getDrawnAreaLabel:');
console.log('En:', getDrawnAreaLabel({ type: 'circle', radiusKm: 2.2 }, 'en'));
console.log('Ar:', getDrawnAreaLabel({ type: 'circle', radiusKm: 2.2 }, 'ar'));

const appJsx = fs.readFileSync('src/App.jsx', 'utf8');

const checks = [
  'searchBoxDrawnAttachment',
  'getDrawnAreaLabel',
  'aiPanelSubView',
  'handleSelectFavoritePlace',
  'handleToggleFavoritePlace'
];

for (const check of checks) {
  if (!appJsx.includes(check)) {
    console.error(`Missing check: ${check}`);
    process.exit(1);
  } else {
    console.log(`✓ Contains ${check}`);
  }
}

console.log('All verification checks passed successfully!');
