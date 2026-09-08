import { spatialAIEngineInstance } from './src/services/spatialSearchService.js';

console.log('Simulating End-to-End User Clarification Selection Flow:\n');

const testFlows = [
  {
    initialQuery: 'Show parks within 5 km of Yas',
    expectedOptions: ['Show parks within 5 km of Yas Island', 'Show parks within 5 km of Bani Yas']
  },
  {
    initialQuery: 'Show facilities near Khalifa',
    expectedOptions: ['Show facilities near Khalifa City', 'Show facilities near Khalifa Port']
  },
  {
    initialQuery: 'Show facilities near Zayed',
    expectedOptions: [
      'Show facilities near Zayed City',
      'Show facilities near Zayed International Airport',
      'Show facilities near Sheikh Zayed Grand Mosque',
      'Show facilities near Zayed Port'
    ]
  },
  {
    initialQuery: 'عرض الحدائق ضمن 5 كم من ياس',
    lang: 'ar',
    expectedOptions: ['عرض الحدائق ضمن 5 كم من جزيرة ياس', 'عرض الحدائق ضمن 5 كم من بني ياس']
  }
];

for (const flow of testFlows) {
  console.log(`=======================================================`);
  console.log(`Step 1: User submits ambiguous query: "${flow.initialQuery}"`);
  spatialAIEngineInstance.resetContext();
  const clarRes = spatialAIEngineInstance.processNaturalLanguageQuery(flow.initialQuery, '', flow.lang || 'en');
  console.log(`-> Intent: ${clarRes.intent}`);
  console.log(`-> Question: ${clarRes.clarification.question}`);
  
  for (const opt of clarRes.clarification.options) {
    console.log(`\nStep 2: User clicks option: [${opt.label}] -> Query: "${opt.query}"`);
    const resolvedRes = spatialAIEngineInstance.processNaturalLanguageQuery(opt.query, '', flow.lang || 'en');
    console.log(`   -> Resolved Intent: ${resolvedRes.intent}`);
    console.log(`   -> AI Response: ${resolvedRes.aiMessageText}`);
    console.log(`   -> Results count: ${resolvedRes.results.length}`);
    console.log(`   -> Has clarification? ${!!resolvedRes.clarification}`);
  }
}
