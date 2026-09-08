import { GEOVISION_SPATIAL_DATASET } from './src/services/spatialSearchService.js';

const mushrifItems = GEOVISION_SPATIAL_DATASET.filter(i => 
  (i.address?.toLowerCase().includes('mushrif') || i.title?.toLowerCase().includes('mushrif'))
);
console.log('Mushrif items:');
mushrifItems.forEach(i => console.log(`  ${i.title} (${i.category} / ${i.subcategory})`));
