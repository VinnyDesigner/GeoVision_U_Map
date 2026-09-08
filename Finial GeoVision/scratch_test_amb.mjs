import { 
  SpatialAIEngine,
  spatialAIEngineInstance,
  GEOVISION_SPATIAL_DATASET,
  DISTRICT_COORDINATES,
  LANDMARK_COORDINATES
} from './src/services/spatialSearchService.js';

// Let's create our test implementation of SpatialAIEngine with the new methods to test before editing the main file

const AMBIGUOUS_GEOGRAPHIC_ENTITIES = [
  {
    id: 'yas',
    keywords: ['yas', 'ياس'],
    unambiguousPatterns: [
      'yas island', 'جزيرة ياس',
      'bani yas', 'بني ياس', 'baniyas', 'بنياس',
      'yas mall', 'yas marina', 'yas gateway', 'yas acres', 'yas creative', 'yas leisure', 'ferrari world yas',
      'yas waterworld', 'yas beach', 'yas clinic', 'yas hotel', 'al yasmina', 'الياسمينة', 'ياسمينا'
    ],
    questionEn: 'Which location do you mean by Yas?',
    questionAr: 'أي موقع تقصد بـ ياس؟',
    summaryEn: 'Clarification required for "Yas"',
    summaryAr: 'يرجى تحديد الموقع المقصود بـ "ياس"',
    messageEn: 'Which location do you mean by "Yas"? There are multiple valid locations in Abu Dhabi.',
    messageAr: 'أي موقع تقصد بـ "ياس"؟ تتوفر عدة مواقع مطابقة في قاعدة بيانات إمارة أبوظبي.',
    options: [
      {
        nameEn: 'Yas Island',
        nameAr: 'جزيرة ياس',
        queryTargetEn: 'Yas Island',
        queryTargetAr: 'جزيرة ياس'
      },
      {
        nameEn: 'Bani Yas',
        nameAr: 'بني ياس',
        queryTargetEn: 'Bani Yas',
        queryTargetAr: 'بني ياس'
      }
    ]
  },
  {
    id: 'khalifa',
    keywords: ['khalifa', 'خليفة'],
    unambiguousPatterns: [
      'khalifa city', 'مدينة خليفة',
      'khalifa port', 'ميناء خليفة',
      'khalifa university', 'جامعة خليفة',
      'kezad', 'كيزاد',
      'khalifa park', 'حديقة خليفة',
      'khalifa industrial', 'منطقة خليفة الصناعية',
      'sheikh khalifa bin zayed', 'شارع الشيخ خليفة',
      'khalifa hospital', 'مستشفى خليفة'
    ],
    questionEn: 'Which location do you mean by Khalifa?',
    questionAr: 'أي موقع تقصد بـ خليفة؟',
    summaryEn: 'Clarification required for "Khalifa"',
    summaryAr: 'يرجى تحديد الموقع المقصود بـ "خليفة"',
    messageEn: 'Which location do you mean by "Khalifa"? There are multiple valid locations in Abu Dhabi.',
    messageAr: 'أي موقع تقصد بـ "خليفة"؟ تتوفر عدة مواقع مطابقة في قاعدة بيانات إمارة أبوظبي.',
    options: [
      {
        nameEn: 'Khalifa City',
        nameAr: 'مدينة خليفة',
        queryTargetEn: 'Khalifa City',
        queryTargetAr: 'مدينة خليفة'
      },
      {
        nameEn: 'Khalifa Port / KEZAD',
        nameAr: 'ميناء خليفة / كيزاد',
        queryTargetEn: 'Khalifa Port',
        queryTargetAr: 'ميناء خليفة'
      }
    ]
  },
  {
    id: 'zayed',
    keywords: ['zayed', 'زايد'],
    unambiguousPatterns: [
      'zayed international airport', 'مطار زايد الدولي', 'مطار زايد', 'zayed airport',
      'zayed city', 'مدينة زايد', 'madinat zayed',
      'sheikh zayed grand mosque', 'جامع الشيخ زايد الكبير', 'جامع الشيخ زايد', 'zayed grand mosque',
      'zayed port', 'ميناء زايد', 'mina zayed',
      'zayed sports city', 'مدينة زايد الرياضية',
      'zayed higher organization', 'مؤسسة زايد العليا',
      'zayed national museum', 'متحف زايد الوطني',
      'sheikh zayed bridge', 'جسر الشيخ زايد',
      'sheikh zayed tunnel', 'نفق الشيخ زايد',
      'sheikh zayed street', 'شارع الشيخ زايد',
      'sheikh zayed road', 'طريق الشيخ زايد',
      'sheikh zayed bin sultan', 'الشيخ زايد بن سلطان',
      'capital park abu dhabi', 'sultan bin zayed', 'سلطان بن زايد',
      'hazza bin zayed', 'هزاع بن زايد'
    ],
    questionEn: 'Which location do you mean by Zayed?',
    questionAr: 'أي موقع تقصد بـ زايد؟',
    summaryEn: 'Clarification required for "Zayed"',
    summaryAr: 'يرجى تحديد الموقع المقصود بـ "زايد"',
    messageEn: 'Which location do you mean by "Zayed"? There are multiple valid locations in Abu Dhabi.',
    messageAr: 'أي موقع تقصد بـ "زايد"؟ تتوفر عدة مواقع مطابقة في قاعدة بيانات إمارة أبوظبي.',
    options: [
      {
        nameEn: 'Zayed City',
        nameAr: 'مدينة زايد',
        queryTargetEn: 'Zayed City',
        queryTargetAr: 'مدينة زايد'
      },
      {
        nameEn: 'Zayed International Airport',
        nameAr: 'مطار زايد الدولي',
        queryTargetEn: 'Zayed International Airport',
        queryTargetAr: 'مطار زايد الدولي'
      },
      {
        nameEn: 'Sheikh Zayed Grand Mosque',
        nameAr: 'جامع الشيخ زايد الكبير',
        queryTargetEn: 'Sheikh Zayed Grand Mosque',
        queryTargetAr: 'جامع الشيخ زايد الكبير'
      },
      {
        nameEn: 'Zayed Port (Mina Zayed)',
        nameAr: 'ميناء زايد',
        queryTargetEn: 'Zayed Port',
        queryTargetAr: 'ميناء زايد'
      }
    ]
  }
];

function buildClarifiedQuery(rawQuery, ambiguousKw, replacement) {
  const trimmed = (rawQuery || '').trim();
  if (!trimmed || trimmed.toLowerCase() === ambiguousKw.toLowerCase()) {
    return replacement;
  }
  const regex = new RegExp(`(^|[^\\p{L}\\p{N}])(${ambiguousKw})([^\\p{L}\\p{N}]|$)`, 'iu');
  if (regex.test(rawQuery)) {
    return rawQuery.replace(regex, (match, p1, p2, p3) => `${p1}${replacement}${p3}`).trim();
  }
  return `${trimmed} (${replacement})`;
}

function detectAmbiguousGeographicEntity(qLower, rawQuery, lang = 'en', contextBadges = []) {
  for (const entity of AMBIGUOUS_GEOGRAPHIC_ENTITIES) {
    const hasUnambiguous = entity.unambiguousPatterns.some(p => qLower.includes(p.toLowerCase()));
    if (hasUnambiguous) continue;

    let matchedKw = null;
    for (const kw of entity.keywords) {
      const regex = new RegExp(`(^|[^\\p{L}\\p{N}])(${kw.toLowerCase()})([^\\p{L}\\p{N}]|$)`, 'iu');
      if (regex.test(qLower)) {
        matchedKw = kw;
        break;
      }
    }

    if (matchedKw) {
      const question = lang === 'ar' ? entity.questionAr : entity.questionEn;
      const querySummary = lang === 'ar' ? entity.summaryAr : entity.summaryEn;
      const aiMessageText = lang === 'ar' ? entity.messageAr : entity.messageEn;

      const options = entity.options.map(opt => {
        const targetName = lang === 'ar' ? opt.queryTargetAr : opt.queryTargetEn;
        const label = lang === 'ar' ? opt.nameAr : opt.nameEn;
        const query = buildClarifiedQuery(rawQuery, matchedKw, targetName);
        return { label, query };
      });

      const chips = entity.options.map(opt => ({
        label: lang === 'ar' ? opt.nameAr : opt.nameEn,
        query: buildClarifiedQuery(rawQuery, matchedKw, lang === 'ar' ? opt.queryTargetAr : opt.queryTargetEn)
      }));

      return {
        intent: 'clarification',
        querySummary,
        aiMessageText,
        clarification: {
          question,
          options
        },
        results: [...GEOVISION_SPATIAL_DATASET],
        contextBadges,
        chips,
        mapAction: { type: 'fit_bounds' }
      };
    }
  }
  return null;
}

console.log('Testing Ambiguity Detector...');
console.log('1. "Show parks near Yas" ->', detectAmbiguousGeographicEntity('show parks near yas', 'Show parks near Yas')?.clarification);
console.log('2. "Show parks near Yas Island" ->', detectAmbiguousGeographicEntity('show parks near yas island', 'Show parks near Yas Island'));
console.log('3. "Show facilities near Khalifa" ->', detectAmbiguousGeographicEntity('show facilities near khalifa', 'Show facilities near Khalifa')?.clarification);
console.log('4. "Show facilities in Khalifa City" ->', detectAmbiguousGeographicEntity('show facilities in khalifa city', 'Show facilities in Khalifa City'));
console.log('5. "Show facilities near Zayed" ->', detectAmbiguousGeographicEntity('show facilities near zayed', 'Show facilities near Zayed')?.clarification);
console.log('6. "Show facilities near Zayed International Airport" ->', detectAmbiguousGeographicEntity('show facilities near zayed international airport', 'Show facilities near Zayed International Airport'));
console.log('7. "Show parks within 5 km of Yas" ->', detectAmbiguousGeographicEntity('show parks within 5 km of yas', 'Show parks within 5 km of Yas')?.clarification);
console.log('8. "عرض الحدائق قرب ياس" ->', detectAmbiguousGeographicEntity('عرض الحدائق قرب ياس', 'عرض الحدائق قرب ياس', 'ar')?.clarification);
console.log('9. "عرض المرافق قرب خليفة" ->', detectAmbiguousGeographicEntity('عرض المرافق قرب خليفة', 'عرض المرافق قرب خليفة', 'ar')?.clarification);
console.log('10. "عرض المرافق قرب زايد" ->', detectAmbiguousGeographicEntity('عرض المرافق قرب زايد', 'عرض المرافق قرب زايد', 'ar')?.clarification);
