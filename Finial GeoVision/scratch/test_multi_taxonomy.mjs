import {
  CATEGORY_TAXONOMY,
  normalizeArabic
} from '../src/services/spatialSearchService.js';

// Pre-compiled taxonomy rules sorted by alias length descending
const ALL_TAXONOMY_RULES = [];
for (const catEntry of CATEGORY_TAXONOMY) {
  for (const sub of catEntry.subcategories) {
    for (const alias of sub.aliases) {
      ALL_TAXONOMY_RULES.push({
        alias: alias.trim().toLowerCase(),
        category: catEntry.category,
        subcategory: sub.name,
        isCategoryOnly: false,
        length: alias.trim().length
      });
    }
  }
  for (const alias of catEntry.aliases) {
    ALL_TAXONOMY_RULES.push({
      alias: alias.trim().toLowerCase(),
      category: catEntry.category,
      subcategory: null,
      isCategoryOnly: true,
      length: alias.trim().length
    });
  }
}
ALL_TAXONOMY_RULES.sort((a, b) => b.length - a.length);

function matchesTaxonomyAlias(query, alias) {
  if (!query || !alias) return false;
  const q = (query || '').toLowerCase().trim();
  const a = (alias || '').toLowerCase().trim();
  if (/^[a-z0-9\s-]+$/i.test(a)) {
    const escaped = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?:^|[^a-z0-9])${escaped}(?:s|es)?(?:$|[^a-z0-9])`, 'i');
    return regex.test(q);
  }
  const normQ = normalizeArabic(q);
  const normA = normalizeArabic(a);
  if (normQ.includes(normA) || normA.includes(normQ)) return true;
  const escapedAr = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const arRegex = new RegExp(`(?:^|[^\\u0600-\\u06FF])(?:ال)?${escapedAr}(?:$|[^\\u0600-\\u06FF])`, 'i');
  return arRegex.test(q) || q.includes(a);
}

function resolveAllTaxonomyEntities(qLower) {
  const q = (qLower || '').toLowerCase().trim();
  if (!q) return [];

  const matched = [];
  // Tokenize / split by conjunctions or check distinct alias occurrences
  // Let's find all rules where rule.alias matches
  for (const rule of ALL_TAXONOMY_RULES) {
    if (matchesTaxonomyAlias(q, rule.alias)) {
      const alreadyMatched = matched.some(m =>
        m.category === rule.category && m.subcategory === rule.subcategory
      );
      if (!alreadyMatched) {
        // If a specific subcategory already matched for this category, don't add category-only match unless distinct
        // e.g. if 'Hospitals' was matched, and rule is category-only 'Healthcare', check if 'healthcare'/'health' is separately in q
        if (rule.isCategoryOnly) {
          const hasSubcatForSameCat = matched.some(m => m.category === rule.category && m.subcategory !== null);
          if (hasSubcatForSameCat && !matchesTaxonomyAlias(q, rule.alias)) {
            continue;
          }
        }
        matched.push({
          category: rule.category,
          subcategory: rule.subcategory,
          aliasMatched: rule.alias,
          isCategoryOnly: rule.isCategoryOnly
        });
      }
    }
  }

  // If both subcategory and category-only of the SAME category matched, check if rule.alias is the reason
  // E.g. 'schools' matches category Education (alias 'schools') AND subcategories...
  // Clean up: if an entity has subcategory null, but all other matches in same category have subcategories, and the text didn't contain general category words
  const result = [];
  for (const m of matched) {
    if (m.isCategoryOnly) {
      // Check if subcategories of same category also matched
      const hasSpecificSub = matched.some(other => other !== m && other.category === m.category && other.subcategory !== null);
      if (hasSpecificSub) {
        // Only keep if the alias was distinctly the category name
        if (m.aliasMatched === m.category.toLowerCase() || m.aliasMatched === 'education' || m.aliasMatched === 'healthcare' || m.aliasMatched === 'التعليم' || m.aliasMatched === 'الرعاية الصحية') {
          result.push(m);
        }
      } else {
        result.push(m);
      }
    } else {
      result.push(m);
    }
  }

  return result;
}

const testQueries = [
  'Can I get all schools and hospitals under this area?',
  'Show schools and hospitals in this area',
  'Find all schools and hospitals inside the drawn area',
  'How many schools and hospitals are within this boundary?',
  'Which schools and hospitals are in this area?',
  'Show pharmacies and clinics in this area.',
  'المدارس والمستشفيات في هذه المنطقة',
  'كم عدد المدارس والمستشفيات في هذه المنطقة؟',
  'عرض الصيدليات والعيادات داخل هذه المنطقة',
  'How many hospitals are inside this area?',
  'Show all facilities in this area.'
];

for (const tq of testQueries) {
  console.log(`\nQUERY: "${tq}"`);
  console.log(resolveAllTaxonomyEntities(tq));
}
