import { GEOVISION_SPATIAL_DATASET, DISTRICT_COORDINATES, LANDMARK_COORDINATES } from './src/services/spatialSearchService.js';

console.log('--- DISTRICT COORDINATES ---');
for (const [k, v] of Object.entries(DISTRICT_COORDINATES)) {
  console.log(`${k} -> ${v.name} (${v.arabicName}) [${v.lat}, ${v.lon}]`);
}

console.log('\n--- LANDMARK COORDINATES ---');
for (const [k, v] of Object.entries(LANDMARK_COORDINATES)) {
  console.log(`${k} -> ${v.name} (${v.arabicName}) [${v.lat}, ${v.lon}]`);
}

console.log('\n--- DATASET MATCHES FOR YAS ---');
const yasItems = GEOVISION_SPATIAL_DATASET.filter(i => 
  i.title?.toLowerCase().includes('yas') || i.address?.toLowerCase().includes('yas') || i.city?.toLowerCase().includes('yas') ||
  i.title?.includes('ياس') || i.address?.includes('ياس')
);
yasItems.forEach(i => console.log(`  ${i.title} | ${i.address} | [${i.lat}, ${i.lon}]`));

console.log('\n--- DATASET MATCHES FOR KHALIFA ---');
const khalifaItems = GEOVISION_SPATIAL_DATASET.filter(i => 
  i.title?.toLowerCase().includes('khalifa') || i.address?.toLowerCase().includes('khalifa') || i.city?.toLowerCase().includes('khalifa') ||
  i.title?.includes('خليفة') || i.address?.includes('خليفة')
);
khalifaItems.forEach(i => console.log(`  ${i.title} | ${i.address} | [${i.lat}, ${i.lon}]`));

console.log('\n--- DATASET MATCHES FOR ZAYED ---');
const zayedItems = GEOVISION_SPATIAL_DATASET.filter(i => 
  i.title?.toLowerCase().includes('zayed') || i.address?.toLowerCase().includes('zayed') || i.city?.toLowerCase().includes('zayed') ||
  i.title?.includes('زايد') || i.address?.includes('زايد')
);
zayedItems.forEach(i => console.log(`  ${i.title} | ${i.address} | [${i.lat}, ${i.lon}]`));
