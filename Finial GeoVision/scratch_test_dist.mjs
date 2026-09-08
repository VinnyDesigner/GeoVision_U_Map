const DISTRICT_COORDINATES = {
  'khalifa city': { lat: 24.4280, lon: 54.5810, name: 'Khalifa City', arabicName: 'مدينة خليفة', radius: 6.0 },
  'مدينة خليفة': { lat: 24.4280, lon: 54.5810, name: 'Khalifa City', arabicName: 'مدينة خليفة', radius: 6.0 },
  'khalifa port': { lat: 24.8180, lon: 54.7350, name: 'Khalifa Port', arabicName: 'ميناء خليفة', radius: 6.0 },
  'ميناء خليفة': { lat: 24.8180, lon: 54.7350, name: 'Khalifa Port', arabicName: 'ميناء خليفة', radius: 6.0 },
  'kezad': { lat: 24.7850, lon: 54.6850, name: 'KEZAD Industrial Zone', arabicName: 'كيزاد', radius: 8.0 },
  'كيزاد': { lat: 24.7850, lon: 54.6850, name: 'KEZAD Industrial Zone', arabicName: 'كيزاد', radius: 8.0 },
  'yas island': { lat: 24.4839, lon: 54.6074, name: 'Yas Island', arabicName: 'جزيرة ياس', radius: 5.5 },
  'جزيرة ياس': { lat: 24.4839, lon: 54.6074, name: 'Yas Island', arabicName: 'جزيرة ياس', radius: 5.5 },
  'bani yas': { lat: 24.3120, lon: 54.6300, name: 'Bani Yas', arabicName: 'بني ياس', radius: 6.0 },
  'baniyas': { lat: 24.3120, lon: 54.6300, name: 'Bani Yas', arabicName: 'بني ياس', radius: 6.0 },
  'بني ياس': { lat: 24.3120, lon: 54.6300, name: 'Bani Yas', arabicName: 'بني ياس', radius: 6.0 },
  'بنياس': { lat: 24.3120, lon: 54.6300, name: 'Bani Yas', arabicName: 'بني ياس', radius: 6.0 },
  'zayed city': { lat: 24.3300, lon: 54.5400, name: 'Zayed City', arabicName: 'مدينة زايد', radius: 6.0 },
  'مدينة زايد': { lat: 24.3300, lon: 54.5400, name: 'Zayed City', arabicName: 'مدينة زايد', radius: 6.0 },
  'madinat zayed': { lat: 24.3300, lon: 54.5400, name: 'Zayed City', arabicName: 'مدينة زايد', radius: 6.0 },
  'zayed port': { lat: 24.5210, lon: 54.3780, name: 'Zayed Port (Mina Zayed)', arabicName: 'ميناء زايد', radius: 5.0 },
  'mina zayed': { lat: 24.5210, lon: 54.3780, name: 'Zayed Port (Mina Zayed)', arabicName: 'ميناء زايد', radius: 5.0 },
  'ميناء زايد': { lat: 24.5210, lon: 54.3780, name: 'Zayed Port (Mina Zayed)', arabicName: 'ميناء زايد', radius: 5.0 },
  'saadiyat island': { lat: 24.5337, lon: 54.4337, name: 'Saadiyat Island', arabicName: 'جزيرة السعديات', radius: 5.5 },
  'saadiyat': { lat: 24.5337, lon: 54.4337, name: 'Saadiyat Island', arabicName: 'جزيرة السعديات', radius: 5.5 },
  'جزيرة السعديات': { lat: 24.5337, lon: 54.4337, name: 'Saadiyat Island', arabicName: 'جزيرة السعديات', radius: 5.5 },
  'reem island': { lat: 24.4988, lon: 54.4060, name: 'Al Reem Island', arabicName: 'جزيرة الريم', radius: 4.5 },
  'al reem island': { lat: 24.4988, lon: 54.4060, name: 'Al Reem Island', arabicName: 'جزيرة الريم', radius: 4.5 },
  'reem': { lat: 24.4988, lon: 54.4060, name: 'Al Reem Island', arabicName: 'جزيرة الريم', radius: 4.5 },
  'جزيرة الريم': { lat: 24.4988, lon: 54.4060, name: 'Al Reem Island', arabicName: 'جزيرة الريم', radius: 4.5 },
  'al maryah island': { lat: 24.5028, lon: 54.3888, name: 'Al Maryah Island', arabicName: 'جزيرة المارية', radius: 3.5 },
  'maryah': { lat: 24.5028, lon: 54.3888, name: 'Al Maryah Island', arabicName: 'جزيرة المارية', radius: 3.5 },
  'جزيرة المارية': { lat: 24.5028, lon: 54.3888, name: 'Al Maryah Island', arabicName: 'جزيرة المارية', radius: 3.5 },
  'al mushrif': { lat: 24.4452, lon: 54.3981, name: 'Al Mushrif', arabicName: 'المشرف', radius: 4.5 },
  'mushrif': { lat: 24.4452, lon: 54.3981, name: 'Al Mushrif', arabicName: 'المشرف', radius: 4.5 },
  'المشرف': { lat: 24.4452, lon: 54.3981, name: 'Al Mushrif', arabicName: 'المشرف', radius: 4.5 },
  'mussafah': { lat: 24.3520, lon: 54.4920, name: 'Mussafah Industrial City', arabicName: 'مصفح', radius: 7.5 },
  'مصفح': { lat: 24.3520, lon: 54.4920, name: 'Mussafah Industrial City', arabicName: 'مصفح', radius: 7.5 },
  'al taweelah': { lat: 24.8120, lon: 54.7290, name: 'Al Taweelah', arabicName: 'الطويلة', radius: 6.5 },
  'taweelah': { lat: 24.8120, lon: 54.7290, name: 'Al Taweelah', arabicName: 'الطويلة', radius: 6.5 },
  'corniche': { lat: 24.4750, lon: 54.3480, name: 'Abu Dhabi Corniche', arabicName: 'كورنيش أبوظبي', radius: 4.5 },
  'الكورنيش': { lat: 24.4750, lon: 54.3480, name: 'Abu Dhabi Corniche', arabicName: 'كورنيش أبوظبي', radius: 4.5 },
  'al khalidiyah': { lat: 24.4710, lon: 54.3520, name: 'Al Khalidiyah', arabicName: 'الخالدية', radius: 4.0 },
  'الخالدية': { lat: 24.4710, lon: 54.3520, name: 'Al Khalidiyah', arabicName: 'الخالدية', radius: 4.0 },
  'al bateen': { lat: 24.4560, lon: 54.3510, name: 'Al Bateen', arabicName: 'البطين', radius: 4.0 },
  'البطين': { lat: 24.4560, lon: 54.3510, name: 'Al Bateen', arabicName: 'البطين', radius: 4.0 },
  'downtown abu dhabi': { lat: 24.4820, lon: 54.3640, name: 'Downtown Abu Dhabi', arabicName: 'وسط أبوظبي', radius: 4.5 },
  'al zahiyah': { lat: 24.4920, lon: 54.3780, name: 'Al Zahiyah', arabicName: 'الزاهية', radius: 3.5 },
  'al ain': { lat: 24.2075, lon: 55.7447, name: 'Al Ain', arabicName: 'مدينة العين', radius: 15.0 },
  'العين': { lat: 24.2075, lon: 55.7447, name: 'Al Ain', arabicName: 'مدينة العين', radius: 15.0 },
  'al dhafra': { lat: 24.1820, lon: 54.5480, name: 'Al Dhafra', arabicName: 'منطقة الظفرة', radius: 30.0 },
  'الظفرة': { lat: 24.1820, lon: 54.5480, name: 'Al Dhafra', arabicName: 'منطقة الظفرة', radius: 30.0 },
  'ruwais': { lat: 24.1450, lon: 52.7150, name: 'Ruwais', arabicName: 'الرويس', radius: 12.0 },
  'الرويس': { lat: 24.1450, lon: 52.7150, name: 'Ruwais', arabicName: 'الرويس', radius: 12.0 },
  'jebel ali': { lat: 25.0120, lon: 55.1050, name: 'Jebel Ali', arabicName: 'جبل علي', radius: 12.0 },
  'dubai': { lat: 25.2048, lon: 55.2708, name: 'Dubai', arabicName: 'دبي', radius: 25.0 },
  'دبي': { lat: 25.2048, lon: 55.2708, name: 'Dubai', arabicName: 'دبي', radius: 25.0 },
  'abu dhabi': { lat: 24.4539, lon: 54.3773, name: 'Abu Dhabi', arabicName: 'أبوظبي', radius: 25.0 },
  'أبوظبي': { lat: 24.4539, lon: 54.3773, name: 'Abu Dhabi', arabicName: 'أبوظبي', radius: 25.0 }
};

const LANDMARK_COORDINATES = {
  'zayed international airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'مطار زايد الدولي': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'abu dhabi airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'zayed airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'مطار زايد': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'auh': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'al bateen airport': { lat: 24.4283, lon: 54.4581, name: 'Al Bateen Executive Airport', arabicName: 'مطار البطين للطيران الخاص' },
  'bateen airport': { lat: 24.4283, lon: 54.4581, name: 'Al Bateen Executive Airport', arabicName: 'مطار البطين للطيران الخاص' },
  'مطار البطين': { lat: 24.4283, lon: 54.4581, name: 'Al Bateen Executive Airport', arabicName: 'مطار البطين للطيران الخاص' },
  'dubai airport': { lat: 25.2532, lon: 55.3657, name: 'Dubai International Airport (DXB)', arabicName: 'مطار دبي الدولي' },
  'dxb': { lat: 25.2532, lon: 55.3657, name: 'Dubai International Airport (DXB)', arabicName: 'مطار دبي الدولي' },
  'مطار دبي': { lat: 25.2532, lon: 55.3657, name: 'Dubai International Airport (DXB)', arabicName: 'مطار دبي الدولي' },
  'cleveland clinic': { lat: 24.5028, lon: 54.3888, name: 'Cleveland Clinic Abu Dhabi', arabicName: 'كليفلاند كلينك أبوظبي' },
  'كليفلاند كلينك': { lat: 24.5028, lon: 54.3888, name: 'Cleveland Clinic Abu Dhabi', arabicName: 'كليفلاند كلينك أبوظبي' },
  'sheikh zayed grand mosque': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque', arabicName: 'جامع الشيخ زايد الكبير' },
  'grand mosque': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque', arabicName: 'جامع الشيخ زايد الكبير' },
  'جامع الشيخ زايد': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque', arabicName: 'جامع الشيخ زايد الكبير' },
  'جامع الشيخ زايد الكبير': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque', arabicName: 'جامع الشيخ زايد الكبير' },
  'louvre': { lat: 24.5337, lon: 54.3983, name: 'Louvre Abu Dhabi', arabicName: 'متحف اللوفر أبوظبي' },
  'اللوفر': { lat: 24.5337, lon: 54.3983, name: 'Louvre Abu Dhabi', arabicName: 'متحف اللوفر أبوظبي' },
  'ferrari world': { lat: 24.4839, lon: 54.6074, name: 'Ferrari World', arabicName: 'عالم فيراري' },
  'عالم فيراري': { lat: 24.4839, lon: 54.6074, name: 'Ferrari World', arabicName: 'عالم فيراري' }
};

// Sort entries by key length descending to guarantee longer specific names match before sub-words
const sortedDistrictEntries = Object.entries(DISTRICT_COORDINATES).sort((a, b) => b[0].length - a[0].length);
const sortedLandmarkEntries = Object.entries(LANDMARK_COORDINATES).sort((a, b) => b[0].length - a[0].length);

function resolveDistrictOrLandmark(qLower) {
  if (!qLower) return null;
  for (const [key, dist] of sortedDistrictEntries) {
    if (qLower.includes(key)) {
      return dist;
    }
  }
  for (const [key, lmk] of sortedLandmarkEntries) {
    if (qLower.includes(key)) {
      return { ...lmk, radius: lmk.radius || 5.0 };
    }
  }
  return null;
}

console.log('Testing resolveDistrictOrLandmark with sorted keys:');
console.log('Yas Island ->', resolveDistrictOrLandmark('show parks near yas island')?.name);
console.log('Bani Yas ->', resolveDistrictOrLandmark('show parks near bani yas')?.name);
console.log('Khalifa City ->', resolveDistrictOrLandmark('show facilities in khalifa city')?.name);
console.log('Khalifa Port ->', resolveDistrictOrLandmark('show facilities near khalifa port')?.name);
console.log('Zayed Airport ->', resolveDistrictOrLandmark('show facilities near zayed international airport')?.name);
console.log('Zayed City ->', resolveDistrictOrLandmark('show facilities in zayed city')?.name);
console.log('Grand Mosque ->', resolveDistrictOrLandmark('show facilities near sheikh zayed grand mosque')?.name);
console.log('Zayed Port ->', resolveDistrictOrLandmark('show facilities near zayed port')?.name);
console.log('Arabic Bani Yas ->', resolveDistrictOrLandmark('عرض الحدائق في بني ياس')?.name);
console.log('Arabic Yas Island ->', resolveDistrictOrLandmark('عرض الحدائق في جزيرة ياس')?.name);
console.log('Arabic Khalifa City ->', resolveDistrictOrLandmark('عرض المرافق في مدينة خليفة')?.name);
console.log('Arabic Zayed City ->', resolveDistrictOrLandmark('عرض المرافق في مدينة زايد')?.name);
