import { spatialAIEngineInstance } from './src/services/spatialSearchService.js';

console.log('Testing Spatial AI Engine Ambiguity Handling...');

const tests = [
  { name: 'TEST 1: "Show parks near Yas"', query: 'Show parks near Yas' },
  { name: 'TEST 2: "Show parks near Yas Island"', query: 'Show parks near Yas Island' },
  { name: 'TEST 3: "Show facilities near Khalifa"', query: 'Show facilities near Khalifa' },
  { name: 'TEST 4: "Show facilities in Khalifa City"', query: 'Show facilities in Khalifa City' },
  { name: 'TEST 5: "Show facilities near Zayed"', query: 'Show facilities near Zayed' },
  { name: 'TEST 6: "Show facilities near Zayed International Airport"', query: 'Show facilities near Zayed International Airport' },
  { name: 'TEST 7: "Show parks within 5 km of Yas"', query: 'Show parks within 5 km of Yas' },
  { name: 'TEST 8: Airport ambiguity: "Show facilities near airport"', query: 'Show facilities near airport' },
  { name: 'TEST 9: Unambiguous: "Show schools in Al Reem Island"', query: 'Show schools in Al Reem Island' },
  { name: 'TEST 10: Arabic ambiguity: "عرض الحدائق قرب ياس"', query: 'عرض الحدائق قرب ياس', lang: 'ar' },
  { name: 'TEST 11: Arabic unambiguous: "عرض الحدائق في جزيرة ياس"', query: 'عرض الحدائق في جزيرة ياس', lang: 'ar' },
  { name: 'TEST 12: Arabic ambiguity: "عرض المرافق قرب خليفة"', query: 'عرض المرافق قرب خليفة', lang: 'ar' },
  { name: 'TEST 13: Arabic unambiguous: "عرض المرافق في مدينة خليفة"', query: 'عرض المرافق في مدينة خليفة', lang: 'ar' },
  { name: 'TEST 14: Arabic ambiguity: "عرض المرافق قرب زايد"', query: 'عرض المرافق قرب زايد', lang: 'ar' },
  { name: 'TEST 15: Arabic unambiguous: "عرض المرافق قرب مطار زايد الدولي"', query: 'عرض المرافق قرب مطار زايد الدولي', lang: 'ar' }
];

for (const t of tests) {
  spatialAIEngineInstance.resetContext();
  const res = spatialAIEngineInstance.processNaturalLanguageQuery(t.query, '', t.lang || 'en');
  console.log(`\n========================================`);
  console.log(`${t.name}`);
  console.log(`Query: "${t.query}"`);
  console.log(`Intent: ${res?.intent}`);
  console.log(`AI Message: ${res?.aiMessageText}`);
  if (res?.clarification) {
    console.log(`Clarification Question: ${res.clarification.question}`);
    console.log(`Options:`);
    res.clarification.options.forEach(o => console.log(`  - [${o.label}] -> "${o.query}"`));
  } else {
    console.log(`Results count: ${res?.results?.length}`);
    console.log(`Target District: ${res?.targetDistrict?.name || 'N/A'}`);
  }
}
