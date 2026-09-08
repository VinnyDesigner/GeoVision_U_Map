function buildClarifiedQuery(rawQuery, ambiguousKw, replacement) {
  const trimmed = rawQuery.trim();
  // If query is just the ambiguous word alone
  if (trimmed.toLowerCase() === ambiguousKw.toLowerCase()) {
    return replacement;
  }
  
  // Replace the ambiguous word using unicode word boundary matching
  const regex = new RegExp(`(^|[^\\p{L}\\p{N}])(${ambiguousKw})([^\\p{L}\\p{N}]|$)`, 'iu');
  if (regex.test(rawQuery)) {
    return rawQuery.replace(regex, (match, p1, p2, p3) => `${p1}${replacement}${p3}`).trim();
  }
  
  // Fallback: append or replace
  return `${rawQuery} (${replacement})`;
}

const testCases = [
  { raw: "Show parks near Yas", kw: "Yas", rep: "Yas Island" },
  { raw: "Show parks within 5 km of Yas", kw: "Yas", rep: "Yas Island" },
  { raw: "parks in yas", kw: "yas", rep: "Bani Yas" },
  { raw: "Yas", kw: "Yas", rep: "Yas Island" },
  { raw: "Show facilities near Khalifa", kw: "Khalifa", rep: "Khalifa City" },
  { raw: "Show facilities near Zayed", kw: "Zayed", rep: "Zayed International Airport" },
  { raw: "عرض الحدائق قرب ياس", kw: "ياس", rep: "جزيرة ياس" },
  { raw: "عرض الحدائق ضمن 5 كم من ياس", kw: "ياس", rep: "جزيرة ياس" },
  { raw: "عرض المرافق قرب خليفة", kw: "خليفة", rep: "مدينة خليفة" },
  { raw: "عرض المرافق قرب زايد", kw: "زايد", rep: "مدينة زايد" },
  { raw: "ياس", kw: "ياس", rep: "جزيرة ياس" }
];

for (const t of testCases) {
  const result = buildClarifiedQuery(t.raw, t.kw, t.rep);
  console.log(`Original: "${t.raw}" -> Resolved: "${result}"`);
}
