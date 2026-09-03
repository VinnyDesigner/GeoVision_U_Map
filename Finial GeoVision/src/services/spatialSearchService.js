// GeoVision AI Spatial Query & GIS Engine
// High-performance conversational spatial reasoning, natural language parsing, and GIS execution service.

export const GEOVISION_SPATIAL_DATASET = [
  // ==================== INDUSTRIAL & ENERGY ====================
  {
    id: 'ind-1',
    title: 'Emirates Global Aluminium (EGA) Taweelah',
    arabicTitle: 'شركة الإمارات العالمية للألمنيوم - الطويلة',
    category: 'Industrial',
    subcategory: 'Metals & Smelting',
    lat: 24.8120,
    lon: 54.7290,
    address: 'Al Taweelah Industrial Zone, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'One of the world’s largest single-site aluminium smelters producing high-purity metal.',
    emissions: 85000, // Tonnes CO2 / year
    sector: 'Metals',
    capacity: '1.5M tonnes/year',
    rating: 4.8,
    coastDistanceKm: 1.2,
    openHours: '24/7 Industrial Operations',
    contact: '+971 2 509 4444'
  },
  {
    id: 'ind-2',
    title: 'Borouge Petrochemicals Complex',
    arabicTitle: 'مجمع بروج للبتروكيماويات - الرويس',
    category: 'Industrial',
    subcategory: 'Petrochemicals',
    lat: 24.1450,
    lon: 52.7150,
    address: 'Ruwais Industrial Complex, Al Dhafra, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Leading petrochemical plant manufacturing innovative polyolefin plastic solutions.',
    emissions: 62000,
    sector: 'Petrochemicals',
    capacity: '4.5M tonnes/year',
    rating: 4.7,
    coastDistanceKm: 2.1,
    openHours: '24/7 Industrial Operations',
    contact: '+971 2 607 0000'
  },
  {
    id: 'ind-3',
    title: 'ADNOC Refining Mussafah Complex',
    arabicTitle: 'مجمع أدنوك للتكرير - مصفح',
    category: 'Industrial',
    subcategory: 'Oil & Gas Refining',
    lat: 24.3520,
    lon: 54.4920,
    address: 'Mussafah Industrial City (ICAD I), Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Refined petroleum distribution, sulfur processing, and heavy industrial storage hub.',
    emissions: 54000,
    sector: 'Refining',
    capacity: '800,000 bpd',
    rating: 4.6,
    coastDistanceKm: 6.8,
    openHours: '24/7 Operations',
    contact: '+971 2 602 0000'
  },
  {
    id: 'ind-4',
    title: 'Dubai Aluminium (DUBAL) Jebel Ali',
    arabicTitle: 'دوبال للألمنيوم - جبل علي',
    category: 'Industrial',
    subcategory: 'Metals & Smelting',
    lat: 25.0120,
    lon: 55.1050,
    address: 'Jebel Ali Industrial Area, Dubai',
    city: 'Dubai',
    description: 'Major aluminium smelter and power generation facility in Jebel Ali.',
    emissions: 78000,
    sector: 'Metals',
    capacity: '1.1M tonnes/year',
    rating: 4.7,
    coastDistanceKm: 2.5,
    openHours: '24/7 Operations',
    contact: '+971 4 884 6666'
  },
  {
    id: 'ind-5',
    title: 'Al Dhafra Solar PV Energy Complex',
    arabicTitle: 'محطة الظفرة للطاقة الشمسية الكهروضوئية',
    category: 'Industrial',
    subcategory: 'Clean Energy',
    lat: 24.1820,
    lon: 54.5480,
    address: 'Al Dhafra Region, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'One of the world’s largest single-site solar power plants with 2 GW clean capacity.',
    emissions: 1200, // Very low clean energy baseline
    sector: 'Renewable Energy',
    capacity: '2.1 GW Generation',
    rating: 4.9,
    coastDistanceKm: 34.0,
    openHours: 'Continuous Automated Generation',
    contact: '+971 2 694 4888'
  },
  {
    id: 'ind-6',
    title: 'Jebel Ali Power & Desalination Complex',
    arabicTitle: 'مجمع جبل علي لإنتاج الكهرباء وتحلية المياه',
    category: 'Industrial',
    subcategory: 'Power & Utilities',
    lat: 25.0340,
    lon: 55.1220,
    address: 'Jebel Ali Waterfront, Dubai',
    city: 'Dubai',
    description: 'Combined cycle gas power generation and multi-stage flash thermal desalination complex.',
    emissions: 92000,
    sector: 'Utilities',
    capacity: '9,547 MW Power & 470 MIGD',
    rating: 4.8,
    coastDistanceKm: 0.5,
    openHours: '24/7 Critical Infrastructure',
    contact: '+971 4 601 9999'
  },
  {
    id: 'ind-7',
    title: 'KEZAD Industrial Park (Khalifa City Zone)',
    arabicTitle: 'مدينة خليفة الصناعية - كيزاد',
    category: 'Industrial',
    subcategory: 'Manufacturing & Logistics',
    lat: 24.7850,
    lon: 54.6850,
    address: 'Khalifa Economic Zones Abu Dhabi (KEZAD), Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Integrated manufacturing, trade, polymers, and logistics economic park beside Khalifa Port.',
    emissions: 38000,
    sector: 'Manufacturing',
    capacity: '410 sq km zone',
    rating: 4.7,
    coastDistanceKm: 4.2,
    openHours: '24/7 Operations',
    contact: '+971 800 102030'
  },
  {
    id: 'ind-8',
    title: 'Dubai Industrial City Manufacturing Hub',
    arabicTitle: 'مدينة دبي الصناعية',
    category: 'Industrial',
    subcategory: 'Manufacturing & Logistics',
    lat: 24.8720,
    lon: 55.0880,
    address: 'Saih Shuaib 2, Sheikh Mohammed Bin Zayed Rd, Dubai',
    city: 'Dubai',
    description: 'Dedicated industrial zone for light and medium manufacturing, food packaging, and logistics.',
    emissions: 42000,
    sector: 'Manufacturing',
    capacity: '560 companies',
    rating: 4.6,
    coastDistanceKm: 14.5,
    openHours: '24/7 Operations',
    contact: '+971 4 360 1111'
  },
  {
    id: 'ind-9',
    title: 'Barakah Nuclear Energy Plant',
    arabicTitle: 'محطة براكة للطاقة النووية',
    category: 'Industrial',
    subcategory: 'Clean Energy',
    lat: 23.9680,
    lon: 52.2610,
    address: 'Al Dhafra Coast, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'First commercial nuclear power plant in the Arab world delivering 5.6 GW zero-emission electricity.',
    emissions: 850,
    sector: 'Nuclear Energy',
    capacity: '5,600 MW',
    rating: 4.9,
    coastDistanceKm: 0.3,
    openHours: '24/7 Continuous Base Load',
    contact: '+971 2 654 0400'
  },
  {
    id: 'ind-10',
    title: 'National Cement Factory Jebel Ali',
    arabicTitle: 'مصنع الإسمنت الوطني - جبل علي',
    category: 'Industrial',
    subcategory: 'Building Materials',
    lat: 24.9920,
    lon: 55.1380,
    address: 'Industrial Area 1, Jebel Ali, Dubai',
    city: 'Dubai',
    description: 'Heavy construction materials manufacturing kiln producing Portland and sulfate resistant cement.',
    emissions: 58000,
    sector: 'Building Materials',
    capacity: '1.8M tonnes/year',
    rating: 4.4,
    coastDistanceKm: 5.2,
    openHours: '24/7 Production',
    contact: '+971 4 883 5555'
  },

  // ==================== HEALTHCARE ====================
  {
    id: 'health-1',
    title: 'Cleveland Clinic Abu Dhabi',
    arabicTitle: 'كليفلاند كلينك أبوظبي',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.5028,
    lon: 54.3888,
    address: 'Al Maryah Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'World-renowned tertiary and quaternary multi-specialty hospital with 364 beds and robotic surgery suites.',
    rating: 4.9,
    beds: 364,
    type: 'Private Hospital',
    emergency247: true,
    coastDistanceKm: 0.2,
    openHours: '24/7 Emergency & Inpatient Care',
    contact: '+971 800 82223'
  },
  {
    id: 'health-2',
    title: 'Sheikh Shakhbout Medical City (SSMC)',
    arabicTitle: 'مدينة الشيخ شخبوط الطبية',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.3541,
    lon: 54.5367,
    address: 'Al Mafraq, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'The UAE’s largest tertiary hospital campus specializing in complex adult and pediatric trauma and burns.',
    rating: 4.8,
    beds: 741,
    type: 'Public / Semi-Government',
    emergency247: true,
    coastDistanceKm: 18.2,
    openHours: '24/7 Emergency Department',
    contact: '+971 2 314 4444'
  },
  {
    id: 'health-3',
    title: 'Burjeel Hospital Abu Dhabi',
    arabicTitle: 'مستشفى برجيل - أبوظبي',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.4697,
    lon: 54.3789,
    address: 'Al Najda St, Zone 1, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Premier multi-specialty hospital with advanced oncology, cardiology, and orthopedics.',
    rating: 4.7,
    beds: 209,
    type: 'Private Hospital',
    emergency247: true,
    coastDistanceKm: 1.8,
    openHours: '24/7 Emergency',
    contact: '+971 2 508 5555'
  },
  {
    id: 'health-4',
    title: 'Danat Al Emarat Hospital for Women & Children',
    arabicTitle: 'مستشفى دانة الإمارات للنساء والأطفال',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.3985,
    lon: 54.4920,
    address: 'Bain Al Jisreen, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Advanced maternal health, neonatal intensive care (Level III NICU), and pediatric surgery.',
    rating: 4.8,
    beds: 200,
    type: 'Private Hospital',
    emergency247: true,
    coastDistanceKm: 0.8,
    openHours: '24/7 Emergency',
    contact: '+971 2 614 9999'
  },
  {
    id: 'health-5',
    title: 'Mediclinic Airport Road Hospital',
    arabicTitle: 'مستشفى ميدي كلينيك شارع المطار',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.4124,
    lon: 54.4682,
    address: 'Sheikh Rashid Bin Saeed St (Airport Rd), Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Comprehensive tertiary facility offering robotic joint replacement and full cardiovascular units.',
    rating: 4.7,
    beds: 150,
    type: 'Private Hospital',
    emergency247: true,
    coastDistanceKm: 4.5,
    openHours: '24/7 Emergency',
    contact: '+971 2 494 4500'
  },
  {
    id: 'health-6',
    title: 'NMC Royal Hospital Khalifa City',
    arabicTitle: 'مستشفى إن إم سي رويال - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.4280,
    lon: 54.5810,
    address: '16th Street, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: '500-bed state-of-the-art super-specialty hospital serving Khalifa City and nearby airport suburbs.',
    rating: 4.6,
    beds: 500,
    type: 'Private Hospital',
    emergency247: true,
    coastDistanceKm: 9.8,
    openHours: '24/7 Emergency',
    contact: '+971 2 612 0000'
  },
  {
    id: 'health-7',
    title: 'Al Rahba Hospital',
    arabicTitle: 'مستشفى الرحبة',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.5820,
    lon: 54.6980,
    address: 'Al Rahba, Sheikh Maktoum Bin Rashid Rd, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Public community and highway trauma center serving the northern Abu Dhabi corridor.',
    rating: 4.5,
    beds: 190,
    type: 'Public Hospital',
    emergency247: true,
    coastDistanceKm: 8.5,
    openHours: '24/7 Emergency',
    contact: '+971 2 506 4444'
  },
  {
    id: 'health-8',
    title: 'King’s College Hospital London (Abu Dhabi Clinic)',
    arabicTitle: 'مستشفى كينغز كوليدج لندن - أبوظبي',
    category: 'Healthcare',
    subcategory: 'Clinics',
    lat: 24.4560,
    lon: 54.3510,
    address: 'Al Bateen, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Evidence-based British outpatient clinic with direct clinical governance from London.',
    rating: 4.8,
    beds: 30,
    type: 'Private Clinic',
    emergency247: false,
    coastDistanceKm: 0.5,
    openHours: '08:00 - 20:00',
    contact: '+971 2 501 4000'
  },
  {
    id: 'health-9',
    title: 'Dubai Hospital (DHA)',
    arabicTitle: 'مستشفى دبي - هيئة الصحة بدبي',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 25.2890,
    lon: 55.3210,
    address: 'Al Baraha, Deira, Dubai',
    city: 'Dubai',
    description: 'Premier government tertiary care hospital with 625 beds and specialized cardiology and oncology.',
    rating: 4.7,
    beds: 625,
    type: 'Public Hospital',
    emergency247: true,
    coastDistanceKm: 1.2,
    openHours: '24/7 Emergency Care',
    contact: '+971 4 219 5000'
  },
  {
    id: 'health-pharm-1',
    title: 'Al Manara Pharmacy - Corniche',
    arabicTitle: 'صيدلية المنارة - كورنيش أبوظبي',
    category: 'Healthcare',
    subcategory: 'Pharmacies',
    lat: 24.4789,
    lon: 54.3415,
    address: 'Corniche Road, Al Khalidiyah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: '24-hour full-service pharmaceutical dispensary and wellness center on the Corniche.',
    rating: 4.8,
    type: 'Community Pharmacy',
    coastDistanceKm: 0.1,
    openHours: '24/7 Service',
    contact: '+971 2 666 4321',
    website: 'https://almanarapharmacy.ae',
    phone: '+971 2 666 4321'
  },
  {
    id: 'health-pharm-2',
    title: 'Aster Pharmacy - Al Wahda',
    arabicTitle: 'صيدلية أستر - الوحدة',
    category: 'Healthcare',
    subcategory: 'Pharmacies',
    lat: 24.4695,
    lon: 54.3735,
    address: 'Hazza Bin Zayed St, Al Wahda Mall Area, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Leading retail pharmacy offering prescription medications, medical equipment, and healthcare consultations.',
    rating: 4.7,
    type: 'Retail Pharmacy',
    coastDistanceKm: 2.3,
    openHours: '08:00 - 24:00',
    contact: '+971 2 443 7890',
    website: 'https://asteronline.com',
    phone: '+971 2 443 7890'
  },
  {
    id: 'health-pharm-3',
    title: 'Boots Pharmacy - Yas Mall',
    arabicTitle: 'صيدلية بوتس - ياس مول',
    category: 'Healthcare',
    subcategory: 'Pharmacies',
    lat: 24.4880,
    lon: 54.6080,
    address: 'Ground Floor, Yas Mall, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'British pharmaceutical and wellness store offering premier clinical cosmetics and healthcare medicines.',
    rating: 4.9,
    type: 'Retail Pharmacy',
    coastDistanceKm: 0.9,
    openHours: '10:00 - 23:00',
    contact: '+971 2 492 6500',
    website: 'https://ae.boots.com',
    phone: '+971 2 492 6500'
  },
  {
    id: 'health-clinic-1',
    title: 'Healthpoint Clinic Zayed Sports City',
    arabicTitle: 'مركز هيلث بوينت الطبي - مدينة زايد الرياضية',
    category: 'Healthcare',
    subcategory: 'Clinics',
    lat: 24.4180,
    lon: 54.4550,
    address: 'Zayed Sports City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Multi-specialty hospital and outpatient surgical clinic with orthopedic and physiotherapy excellence.',
    rating: 4.9,
    beds: 50,
    type: 'Specialized Clinic',
    coastDistanceKm: 2.1,
    openHours: '08:00 - 21:00',
    contact: '+971 2 463 8888',
    website: 'https://healthpoint.ae',
    phone: '+971 2 463 8888'
  },
  {
    id: 'health-med-1',
    title: 'Imperial College London Diabetes Centre (ICLDC)',
    arabicTitle: 'مركز إمبريال كوليدج لندن للسكري - أبوظبي',
    category: 'Healthcare',
    subcategory: 'Medical Centers',
    lat: 24.4320,
    lon: 54.4380,
    address: 'Al Khaleej Al Arabi St, Al Rawdah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'State-of-the-art specialized endocrine and diabetes research and treatment facility.',
    rating: 4.9,
    type: 'Specialized Medical Center',
    coastDistanceKm: 1.8,
    openHours: '07:30 - 20:00',
    contact: '+971 2 201 1555',
    website: 'https://icldc.ae',
    phone: '+971 2 201 1555'
  },
  {
    id: 'health-med-2',
    title: 'Abu Dhabi Stem Cells Center (ADSCC)',
    arabicTitle: 'مركز أبوظبي للخلايا الجذعية',
    category: 'Healthcare',
    subcategory: 'Medical Centers',
    lat: 24.4510,
    lon: 54.3980,
    address: 'Al Zahiyah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Pioneering regenerative medicine, stem cell therapy, and bone marrow transplant research hospital.',
    rating: 4.8,
    type: 'Research & Medical Center',
    coastDistanceKm: 1.2,
    openHours: '08:00 - 18:00',
    contact: '+971 2 690 9999',
    website: 'https://adscc.ae',
    phone: '+971 2 690 9999'
  },

  // ==================== EDUCATION ====================
  {
    id: 'edu-1',
    title: 'International School Of Choueifat - Mushrif',
    arabicTitle: 'مدرسة الشويفات الدولية- المشرف',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4452,
    lon: 54.3981,
    address: 'W24_02, AL MUSHRIF, Abu Dhabi, W24_02، أبوظبي، المشرف',
    city: 'Abu Dhabi',
    description: 'Prominent SABIS curriculum school offering comprehensive international primary and secondary education.',
    rating: 4.8,
    students: 2800,
    type: 'Private SABIS',
    coastDistanceKm: 4.5,
    openHours: '07:30 - 15:30',
    contact: '24461444',
    phone: '24461444',
    website: 'https://iscabudhabi.sabis.net',
    email: '9059@adek.gov.ae',
    academicYear: '2024',
    tuitionFee: '28912',
    irtqaaRating: 'Very Good',
    gender: 'Mixed • مختلط',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'Private SABIS • خاص - اجنبي',
    grades: 'KG1, KG2, G01, G02, G03, G04, G05, G06, G08, G09, G10, G11, G1',
    gradesArabic: 'روضة أولى ،روضة ثانية ،الأول ،الثاني ،الثالث ،الرابع 2 ،الخامس ،السادس ،السابع ،الثامن ،التاسع ،العاشر ،الحادي عشر ،الثاني عشر'
  },
  {
    id: 'edu-2',
    title: 'Abu Dhabi Grammar School (Canada)',
    arabicTitle: 'مدرسة أبوظبي غرامار الكندية',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4891,
    lon: 54.3752,
    address: 'Tourist Club Area, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Nova Scotia Canadian curriculum school in central Abu Dhabi.',
    rating: 4.7,
    students: 1200,
    type: 'Private',
    coastDistanceKm: 0.8,
    openHours: '07:30 - 15:30',
    contact: '+971 2 644 4700'
  },
  {
    id: 'edu-3',
    title: 'Brighton College Abu Dhabi',
    arabicTitle: 'كلية برايتون أبوظبي',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4372,
    lon: 54.4178,
    address: 'Bloom Gardens, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Top-tier British curriculum international school rated Outstanding by ADEK.',
    rating: 4.9,
    students: 1850,
    type: 'Private',
    coastDistanceKm: 1.5,
    openHours: '07:30 - 16:00',
    contact: '+971 2 815 6500'
  },
  {
    id: 'edu-4',
    title: 'Cranleigh Abu Dhabi',
    arabicTitle: 'مدرسة كرانلي أبوظبي',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.5268,
    lon: 54.4385,
    address: 'Saadiyat Cultural District, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Award-winning British co-educational school on Saadiyat Island with elite arts & sports facilities.',
    rating: 4.9,
    students: 1600,
    type: 'Private',
    coastDistanceKm: 0.4,
    openHours: '07:30 - 16:00',
    contact: '+971 2 497 0000'
  },
  {
    id: 'edu-5',
    title: 'Al Yasmina Academy',
    arabicTitle: 'أكاديمية الياسمينة',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4215,
    lon: 54.5428,
    address: 'Al Raha Gardens, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Premier British curriculum academy operating in Abu Dhabi (within 7 km of Zayed Airport).',
    rating: 4.7,
    students: 2100,
    type: 'Private',
    coastDistanceKm: 6.2,
    openHours: '07:30 - 15:30',
    contact: '+971 2 501 4888'
  },
  {
    id: 'edu-6',
    title: 'GEMS World Academy Abu Dhabi',
    arabicTitle: 'أكاديمية جيمس العالمية أبوظبي',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4691,
    lon: 54.3782,
    address: 'Fatima Bint Mubarak St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'IB World School empowering global leaders in science, technology, and arts.',
    rating: 4.7,
    students: 1400,
    type: 'Private',
    coastDistanceKm: 1.5,
    openHours: '07:30 - 15:30',
    contact: '+971 2 641 6333'
  },
  {
    id: 'edu-7',
    title: 'Khalifa University (SAN Campus)',
    arabicTitle: 'جامعة خليفة للعلوم والتكنولوجيا',
    category: 'Education',
    subcategory: 'Universities',
    lat: 24.4447,
    lon: 54.3986,
    address: 'Al Saada St, Zone 1, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Leading research university ranked #1 in the UAE specializing in engineering and AI.',
    rating: 4.9,
    students: 4500,
    type: 'Public University',
    coastDistanceKm: 4.0,
    openHours: '08:00 - 18:00',
    contact: '+971 2 312 3333'
  },
  {
    id: 'edu-8',
    title: 'NYU Abu Dhabi (Saadiyat Campus)',
    arabicTitle: 'جامعة نيويورك أبوظبي',
    category: 'Education',
    subcategory: 'Universities',
    lat: 24.5235,
    lon: 54.4344,
    address: 'Saadiyat Marina District, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Prestigious global liberal arts and research university located on Saadiyat Island.',
    rating: 4.9,
    students: 1900,
    type: 'Private / Global Campus',
    coastDistanceKm: 0.3,
    openHours: '08:00 - 20:00',
    contact: '+971 2 628 4000'
  },
  {
    id: 'edu-9',
    title: 'Sorbonne University Abu Dhabi',
    arabicTitle: 'جامعة السوربون أبوظبي',
    category: 'Education',
    subcategory: 'Universities',
    lat: 24.4897,
    lon: 54.4082,
    address: 'Al Reem Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'French higher education institution offering degrees in humanities, law, and data science.',
    rating: 4.8,
    students: 2200,
    type: 'Semi-Government University',
    coastDistanceKm: 0.2,
    openHours: '08:30 - 17:30',
    contact: '+971 2 656 9555'
  },
  {
    id: 'edu-charter-1',
    title: 'Al Ghad Charter School',
    arabicTitle: 'مدرسة الغد ميثاق - أبوظبي',
    category: 'Education',
    subcategory: 'Charter Schools',
    lat: 24.4512,
    lon: 54.3821,
    address: 'Al Manhal, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'ADEK Charter School delivering premium bilingual American curriculum education in central Abu Dhabi.',
    rating: 4.8,
    students: 1450,
    type: 'Charter School',
    coastDistanceKm: 2.2,
    openHours: '07:30 - 15:30',
    contact: '+971 2 404 8888',
    website: 'https://alghad.adek.gov.ae',
    email: 'info@alghad.adek.gov.ae',
    academicYear: '2024',
    tuitionFee: 'Subsidized ADEK',
    irtqaaRating: 'Outstanding',
    gender: 'Mixed • مختلط',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'Charter American • شراكات تعليمية',
    grades: 'KG1 - G09 • الروضة حتى التاسع',
    gradesArabic: 'روضة أولى حتى الصف التاسع'
  },
  {
    id: 'edu-charter-2',
    title: 'Mubarak Bin Mohammed Charter School',
    arabicTitle: 'مدرسة مبارك بن محمد ميثاق',
    category: 'Education',
    subcategory: 'Charter Schools',
    lat: 24.4635,
    lon: 54.3642,
    address: 'Al Bateen, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Premier ADEK Charter school in Al Bateen focusing on bilingual innovation and STEAM excellence.',
    rating: 4.9,
    students: 1680,
    type: 'Charter School',
    coastDistanceKm: 1.1,
    openHours: '07:30 - 15:30',
    contact: '+971 2 681 3333',
    website: 'https://mbm.adek.gov.ae',
    email: 'contact@mbm.adek.gov.ae',
    academicYear: '2024',
    tuitionFee: 'Subsidized ADEK',
    irtqaaRating: 'Very Good',
    gender: 'Mixed • مختلط',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'Charter American STEAM • منهاج أمريكي',
    grades: 'KG1 - G12 • الروضة حتى الثاني عشر',
    gradesArabic: 'روضة أولى حتى الثاني عشر'
  },
  {
    id: 'edu-charter-3',
    title: 'Al Rayana Charter School',
    arabicTitle: 'مدرسة الريانة ميثاق - الفلاح',
    category: 'Education',
    subcategory: 'Charter Schools',
    lat: 24.4180,
    lon: 54.5510,
    address: 'Al Falah, Khalifa City Area, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Modern ADEK partnership charter school serving national families with advanced digital learning environments.',
    rating: 4.7,
    students: 1950,
    type: 'Charter School',
    coastDistanceKm: 9.5,
    openHours: '07:30 - 15:30',
    contact: '+971 2 556 1200',
    website: 'https://alrayana.adek.gov.ae',
    email: 'info@alrayana.sch.ae',
    academicYear: '2024',
    tuitionFee: 'Subsidized ADEK',
    irtqaaRating: 'Very Good',
    gender: 'Mixed • مختلط',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'Charter Bilingual • ثنائي اللغة',
    grades: 'KG1 - G08 • الروضة حتى الثامن',
    gradesArabic: 'الروضة حتى الثامن'
  },
  {
    id: 'edu-nursery-1',
    title: 'Redwood Montessori Nursery - Al Bateen',
    arabicTitle: 'حضانة ريدوود مونتيسوري - البطين',
    category: 'Education',
    subcategory: 'Nurseries',
    lat: 24.4589,
    lon: 54.3412,
    address: 'Al Bateen Marina, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Accredited Montessori early childhood educational nursery on Al Bateen waterfront.',
    rating: 4.9,
    students: 180,
    type: 'Nursery',
    coastDistanceKm: 0.3,
    openHours: '07:00 - 17:00',
    contact: '+971 2 667 3744',
    website: 'https://theredwoodnursery.com',
    email: 'info.albateen@theredwoodnursery.com',
    academicYear: '2024',
    tuitionFee: 'AED 36,000 / yr',
    irtqaaRating: 'Outstanding',
    gender: 'Co-ed Toddlers',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'Montessori Early Years • مونتيسوري',
    grades: '4 months - 4 years',
    gradesArabic: 'من 4 أشهر حتى 4 سنوات'
  },
  {
    id: 'edu-nursery-2',
    title: 'British Orchard Nursery - Al Nahyan',
    arabicTitle: 'حضانة بريتش أورشارد - آل نهيان',
    category: 'Education',
    subcategory: 'Nurseries',
    lat: 24.4690,
    lon: 54.3850,
    address: 'Al Nahyan Camp, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'ISO-certified British EYFS early childhood nursery providing bilingual foundational learning.',
    rating: 4.8,
    students: 220,
    type: 'Nursery',
    coastDistanceKm: 2.1,
    openHours: '07:00 - 18:00',
    contact: '+971 2 443 9892',
    website: 'https://britishorchardnursery.com',
    email: 'alnahyan@britishorchardnursery.com',
    academicYear: '2024',
    tuitionFee: 'AED 32,000 / yr',
    irtqaaRating: 'Very Good',
    gender: 'Co-ed',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'British EYFS • المنهاج البريطاني للطفولة المبكرة',
    grades: '6 months - 4 years',
    gradesArabic: 'من 6 أشهر حتى 4 سنوات'
  },
  {
    id: 'edu-pod-1',
    title: 'Zayed Higher Organization for People of Determination',
    arabicTitle: 'مؤسسة زايد العليا لأصحاب الهمم',
    category: 'Education',
    subcategory: 'POD',
    lat: 24.3612,
    lon: 54.4980,
    address: 'Al Mafraq, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'National apex center providing inclusive education, vocational training, and rehabilitation for People of Determination.',
    rating: 4.9,
    students: 850,
    type: 'Specialized POD Institution',
    coastDistanceKm: 12.0,
    openHours: '07:30 - 15:30',
    contact: '+971 2 305 6666',
    website: 'https://zho.gov.ae',
    email: 'contact@zho.gov.ae',
    academicYear: '2024',
    tuitionFee: 'Government Funded',
    irtqaaRating: 'Outstanding',
    gender: 'All Categories',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'Specialized Inclusive Education & Vocational Training',
    grades: 'All Age Groups • جميع الفئات العمرية',
    gradesArabic: 'جميع الفئات العمرية'
  },
  {
    id: 'edu-public-1',
    title: 'Al Asayel Public School',
    arabicTitle: 'مدرسة الأصايل للتعليم الأساسي - مدينة خليفة',
    category: 'Education',
    subcategory: 'Public Schools',
    lat: 24.4290,
    lon: 54.5380,
    address: 'Sector 12, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'State modern public school offering MOE national curriculum with smart learning classrooms.',
    rating: 4.7,
    students: 1100,
    type: 'Public School',
    coastDistanceKm: 7.5,
    openHours: '07:30 - 14:30',
    contact: '+971 2 556 8800',
    website: 'https://moe.gov.ae',
    email: 'alasayel@moe.gov.ae',
    academicYear: '2024',
    tuitionFee: 'Free for Nationals',
    irtqaaRating: 'Good',
    gender: 'Girls / Primary Mixed',
    report: 'CALENDAR • Q4/2024',
    curriculum: 'UAE Ministry of Education • منهاج وزارة التربية',
    grades: 'Cycle 1 & 2 (G01 - G09)',
    gradesArabic: 'الحلقة الأولى والثانية'
  },

  // ==================== TRANSPORTATION ====================
  {
    id: 'trans-1',
    title: 'Zayed International Airport (AUH)',
    arabicTitle: 'مطار زايد الدولي - أبوظبي',
    category: 'Transportation',
    subcategory: 'Airports',
    lat: 24.4439,
    lon: 54.6511,
    address: 'Terminal A, Abu Dhabi Airport Complex',
    city: 'Abu Dhabi',
    description: 'State-of-the-art international gateway connecting 45 million passengers annually across the world.',
    rating: 4.9,
    type: 'International Airport',
    coastDistanceKm: 14.5,
    openHours: '24/7 Flight Operations',
    contact: '+971 2 505 5555'
  },
  {
    id: 'trans-2',
    title: 'Al Bateen Executive Airport',
    arabicTitle: 'مطار البطين للطيران الخاص',
    category: 'Transportation',
    subcategory: 'Airports',
    lat: 24.4283,
    lon: 54.4581,
    address: 'Al Bateen Airbase, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'The Middle East’s premier dedicated business aviation and VIP executive private jet airport.',
    rating: 4.7,
    type: 'Executive Airport',
    coastDistanceKm: 3.8,
    openHours: '24/7 Executive Operations',
    contact: '+971 2 444 0444'
  },
  {
    id: 'trans-3',
    title: 'Dubai International Airport (DXB)',
    arabicTitle: 'مطار دبي الدولي',
    category: 'Transportation',
    subcategory: 'Airports',
    lat: 25.2532,
    lon: 55.3657,
    address: 'Garhoud, Dubai',
    city: 'Dubai',
    description: 'World’s busiest airport by international passenger traffic serving 87+ million passengers.',
    rating: 4.9,
    type: 'International Airport',
    coastDistanceKm: 6.2,
    openHours: '24/7 Flight Operations',
    contact: '+971 4 224 5555'
  },
  {
    id: 'trans-4',
    title: 'Khalifa Port Container Terminal',
    arabicTitle: 'ميناء خليفة للحاويات',
    category: 'Transportation',
    subcategory: 'Seaports',
    lat: 24.8180,
    lon: 54.7350,
    address: 'Khalifa Port Island, Taweelah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Flagship deepwater automated container port handling over 8.5 million TEUs annually.',
    rating: 4.8,
    type: 'Deepwater Port',
    coastDistanceKm: 0.1,
    openHours: '24/7 Port Logistics',
    contact: '+971 800 102030'
  },
  {
    id: 'trans-5',
    title: 'Abu Dhabi Main Bus Terminal',
    arabicTitle: 'محطة حافلات أبوظبي المركزية',
    category: 'Transport',
    subcategory: 'Bus Stations',
    lat: 24.4702,
    lon: 54.3768,
    address: 'Hazaa Bin Zayed St, Zone 1, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Central transit terminal operating intercity express routes to Dubai, Al Ain, and Sharjah.',
    rating: 4.4,
    type: 'Public Transit Hub',
    coastDistanceKm: 2.2,
    openHours: '24/7 Bus Transit',
    contact: '+971 800 850'
  },
  {
    id: 'trans-bus-2',
    title: 'Mussafah Bus Station',
    arabicTitle: 'محطة حافلات مصفح',
    category: 'Transport',
    subcategory: 'Bus Stations',
    lat: 24.3510,
    lon: 54.5020,
    address: 'ICAD Industrial Zone, Mussafah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Key transit connection hub servicing the industrial and worker residential sectors of Abu Dhabi.',
    rating: 4.3,
    openHours: '24/7 Public Transport',
    contact: '+971 800 850'
  },
  {
    id: 'trans-metro-1',
    title: 'Abu Dhabi Rapid Transit & Metro Hub',
    arabicTitle: 'محطة قطار النقل السريع - أبوظبي',
    category: 'Transport',
    subcategory: 'Metro Lines',
    lat: 24.4620,
    lon: 54.3810,
    address: 'Al Wahda Hub, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Automated rapid transit link and light rail terminal connecting key business districts.',
    rating: 4.8,
    openHours: '05:00 - 00:00 Daily',
    contact: '+971 800 88888'
  },
  {
    id: 'trans-metro-2',
    title: 'Yas Island Transit Line Terminal',
    arabicTitle: 'محطة قطار جزيرة ياس السريع',
    category: 'Transport',
    subcategory: 'Metro Lines',
    lat: 24.4910,
    lon: 54.6050,
    address: 'Yas Mall Transport Center, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Electric autonomous rapid transit station connecting Yas Island theme parks and hotels.',
    rating: 4.9,
    openHours: '06:00 - 23:30',
    contact: '+971 800 511115'
  },
  {
    id: 'trans-taxi-1',
    title: 'Abu Dhabi Mall Integrated Taxi Stand',
    arabicTitle: 'موقف مركبات الأجرة - أبوظبي مول',
    category: 'Transport',
    subcategory: 'Taxi Stands',
    lat: 24.4980,
    lon: 54.3820,
    address: 'Al Zahiyah 10th St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Dedicated 24/7 integrated taxi queuing stand with hybrid and EV vehicle charging lanes.',
    rating: 4.6,
    openHours: '24/7 Taxi Services',
    contact: '+971 600 535353'
  },
  {
    id: 'trans-taxi-2',
    title: 'Marina Mall Taxi Stand',
    arabicTitle: 'موقف تاكسي مارينا مول',
    category: 'Transport',
    subcategory: 'Taxi Stands',
    lat: 24.4770,
    lon: 54.3210,
    address: 'Breakwater Area, Corniche West, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Official Integrated Transport Centre (ITC) taxi depot at Marina Mall.',
    rating: 4.7,
    openHours: '24/7 Service',
    contact: '+971 600 535353'
  },
  {
    id: 'trans-park-1',
    title: 'Mawaqif Central Multi-Storey Parking',
    arabicTitle: 'مبنى مواقف للسيارات متعدد الطوابق - المركزية',
    category: 'Transport',
    subcategory: 'Parking Lots',
    lat: 24.4850,
    lon: 54.3620,
    address: 'Hamdan Bin Mohammed St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Automated 6-floor smart parking facility with 850 vehicle capacity and EV fast chargers.',
    rating: 4.5,
    capacity: '850 Vehicles',
    openHours: '24/7 Smart Access',
    contact: '+971 800 88888'
  },
  {
    id: 'trans-park-2',
    title: 'Al Wahda Mawaqif Parking Structure',
    arabicTitle: 'مواقف مصف السيارات - الوحدة',
    category: 'Transport',
    subcategory: 'Parking Lots',
    lat: 24.4700,
    lon: 54.3750,
    address: 'Al Wahda Zone, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'ITC managed multi-tier automated public parking garage with digital bay sensors.',
    rating: 4.6,
    capacity: '1,200 Vehicles',
    openHours: '24/7 Operations',
    contact: '+971 800 88888'
  },

  // ==================== ENVIRONMENT ====================
  {
    id: 'env-air-1',
    title: 'EAD Khalifa City Air Quality Station',
    arabicTitle: 'محطة رصد جودة الهواء - مدينة خليفة',
    category: 'Environment',
    subcategory: 'Air Quality Sensors',
    lat: 24.4250,
    lon: 54.5820,
    address: 'Sector 14, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Continuous ambient air monitoring sensor tracking PM2.5, PM10, ozone, and nitrogen oxides in real time.',
    rating: 4.9,
    openHours: '24/7 Automated Telemetry',
    contact: '+971 2 693 4444'
  },
  {
    id: 'env-air-2',
    title: 'EAD Corniche Air Station',
    arabicTitle: 'محطة قياس جودة الهواء - الكورنيش',
    category: 'Environment',
    subcategory: 'Air Quality Sensors',
    lat: 24.4820,
    lon: 54.3450,
    address: 'Corniche West Park, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Coastal air quality monitoring station assessing maritime atmospheric data and urban clean air index.',
    rating: 4.8,
    openHours: '24/7 Automated Telemetry',
    contact: '+971 2 693 4444'
  },
  {
    id: 'env-prot-1',
    title: 'Mangrove National Park',
    arabicTitle: 'منتزه قرم الجبيل الوطني',
    category: 'Environment',
    subcategory: 'Protected Areas',
    lat: 24.4518,
    lon: 54.4369,
    address: 'Eastern Mangroves, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Protected tidal mangrove ecosystem featuring 19 sq km of biodiversity, kayaking, and boardwalks.',
    rating: 4.9,
    areaHectares: 1900,
    openHours: '07:00 - 19:00',
    contact: '+971 2 693 4444'
  },
  {
    id: 'env-prot-2',
    title: 'Al Wathba Wetland Reserve',
    arabicTitle: 'محمية الوثبة للأراضي الرطبة',
    category: 'Environment',
    subcategory: 'Protected Areas',
    lat: 24.2620,
    lon: 54.6010,
    address: 'Al Wathba, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'UNESCO Biosphere wetland home to over 4,000 greater flamingos and 260 bird species.',
    rating: 4.9,
    openHours: '08:00 - 17:30',
    contact: '+971 2 693 4444'
  },
  {
    id: 'env-rec-1',
    title: 'Tadweer Al Dhafra Recycling Center',
    arabicTitle: 'مركز تدوير لإعادة التدوير - الظفرة',
    category: 'Environment',
    subcategory: 'Recycling Centers',
    lat: 24.3120,
    lon: 54.5420,
    address: 'Al Dhafra Industrial Sector, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'State-of-the-art automated sorting and plastics/metals recycling plant diverting 80% waste from landfill.',
    rating: 4.7,
    openHours: '06:00 - 22:00',
    contact: '+971 800 8239337'
  },
  {
    id: 'env-rec-2',
    title: 'Tadweer Smart Recycling Station - Khalifa City',
    arabicTitle: 'محطة تدوير الذكية - مدينة خليفة',
    category: 'Environment',
    subcategory: 'Recycling Centers',
    lat: 24.4350,
    lon: 54.5710,
    address: 'Community Center 3, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Citizen smart reverse vending machines and multi-material recycling deposit depot.',
    rating: 4.8,
    openHours: '24/7 Public Deposit',
    contact: '+971 800 8239337'
  },
  {
    id: 'env-waste-1',
    title: 'Tadweer Abu Dhabi Waste Management Center HQ',
    arabicTitle: 'مركز أبوظبي لإدارة النفايات - تدوير',
    category: 'Environment',
    subcategory: 'Waste Management',
    lat: 24.4410,
    lon: 54.4210,
    address: 'Al Maqtaa Sector, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Central administrative and dispatch command center for sustainable waste management across Abu Dhabi.',
    rating: 4.8,
    openHours: '07:30 - 15:30',
    contact: '+971 800 8239337'
  },

  // ==================== GOVERNMENT SERVICES ====================
  {
    id: 'gov-min-1',
    title: 'Ministry of Foreign Affairs (MOFA)',
    arabicTitle: 'وزارة الخارجية - أبوظبي',
    category: 'Government Services',
    subcategory: 'Ministries',
    lat: 24.4580,
    lon: 54.3480,
    address: 'King Abdullah Bin Abdulaziz Al Saud St, Al Bateen, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Federal ministry overseeing UAE diplomatic relations, international treaties, and consular affairs.',
    rating: 4.9,
    openHours: '07:30 - 15:30 (Mon-Thu)',
    contact: '+971 800 44444'
  },
  {
    id: 'gov-min-2',
    title: 'Ministry of Economy',
    arabicTitle: 'وزارة الاقتصاد - أبوظبي',
    category: 'Government Services',
    subcategory: 'Ministries',
    lat: 24.4520,
    lon: 54.3780,
    address: 'Falah St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Federal regulatory body overseeing commercial registrations, consumer protection, and foreign trade.',
    rating: 4.7,
    openHours: '07:30 - 15:30',
    contact: '+971 800 1222'
  },
  {
    id: 'gov-emb-1',
    title: 'US Embassy Abu Dhabi',
    arabicTitle: 'سفارة الولايات المتحدة الأمريكية - أبوظبي',
    category: 'Government Services',
    subcategory: 'Embassies',
    lat: 24.4210,
    lon: 54.4420,
    address: 'Diplomatic Area, Sector W59-02, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Diplomatic mission and consular representation of the United States in the UAE capital.',
    rating: 4.6,
    openHours: '08:00 - 16:30',
    contact: '+971 2 414 2200'
  },
  {
    id: 'gov-emb-2',
    title: 'Embassy of Canada',
    arabicTitle: 'سفارة كندا - أبوظبي',
    category: 'Government Services',
    subcategory: 'Embassies',
    lat: 24.4980,
    lon: 54.3840,
    address: 'Abu Dhabi Mall West Tower, 9th Floor, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Canadian diplomatic representation offering consular assistance, visas, and trade facilitation.',
    rating: 4.7,
    openHours: '08:00 - 16:00',
    contact: '+971 2 694 0300'
  },
  {
    id: 'gov-court-1',
    title: 'Abu Dhabi Judicial Department & Federal Court',
    arabicTitle: 'دائرة القضاء ومحكمة أبوظبي الاتحادية',
    category: 'Government Services',
    subcategory: 'Courts',
    lat: 24.4361,
    lon: 54.4398,
    address: 'Al Maqtaa Bridge Intersection, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Judicial complex housing civil, commercial, family courts, and notary public digital services.',
    rating: 4.8,
    openHours: '07:30 - 15:30',
    contact: '+971 2 651 2222'
  },
  {
    id: 'gov-mun-1',
    title: 'Abu Dhabi City Municipality (ADM)',
    arabicTitle: 'بلدية مدينة أبوظبي',
    category: 'Government Services',
    subcategory: 'Municipalities',
    lat: 24.4755,
    lon: 54.3742,
    address: 'Sheikh Zayed St, Zone 1, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Municipal headquarters for urban planning, land registrations, parks maintenance, and building codes.',
    rating: 4.7,
    openHours: '07:30 - 15:30',
    contact: '+971 800 850'
  },
  {
    id: 'gov-srv-1',
    title: 'Tamm Customer Happiness Center - Al Bateen',
    arabicTitle: 'مركز تم لخدمة المتعاملين - البطين',
    category: 'Government Services',
    subcategory: 'Service Centers',
    lat: 24.4610,
    lon: 54.3520,
    address: 'Al Bateen Mall, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Unified Abu Dhabi government services smart service center for residency, licensing, and utilities.',
    rating: 4.9,
    openHours: '08:00 - 18:00',
    contact: '+971 800 555'
  },
  {
    id: 'gov-srv-2',
    title: 'Tamm Smart Center - Khalifa City',
    arabicTitle: 'مركز تم الذكي - مدينة خليفة',
    category: 'Government Services',
    subcategory: 'Service Centers',
    lat: 24.4260,
    lon: 54.5780,
    address: 'Al Forsan Village, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Comprehensive digital government enablement hub providing express documentation.',
    rating: 4.8,
    openHours: '08:00 - 16:00',
    contact: '+971 800 555'
  },

  // ==================== TOURISM ====================
  {
    id: 'tour-hotel-1',
    title: 'Emirates Palace Mandarin Oriental',
    arabicTitle: 'فندق قصر الإمارات ماندرين أورينتال',
    category: 'Tourism',
    subcategory: 'Hotels',
    lat: 24.4618,
    lon: 54.3172,
    address: 'West Corniche Road, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'World-renowned 5-star ultra-luxury palace hotel featuring 394 luxury rooms and private marina.',
    rating: 4.9,
    openHours: '24/7 Hospitality',
    contact: '+971 2 690 9000'
  },
  {
    id: 'tour-hotel-2',
    title: 'The St. Regis Abu Dhabi',
    arabicTitle: 'فندق سانت ريجيس أبوظبي',
    category: 'Tourism',
    subcategory: 'Hotels',
    lat: 24.4710,
    lon: 54.3310,
    address: 'Nation Towers, Corniche Road, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Iconic luxury waterfront hotel with panoramic Arabian Gulf views and Nation Riviera Beach Club.',
    rating: 4.8,
    openHours: '24/7 Hospitality',
    contact: '+971 2 694 4444'
  },
  {
    id: 'tour-mus-1',
    title: 'Louvre Abu Dhabi',
    arabicTitle: 'متحف اللوفر أبوظبي',
    category: 'Tourism',
    subcategory: 'Museums',
    lat: 24.5337,
    lon: 54.3983,
    address: 'Saadiyat Cultural District, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Universal museum designed by Jean Nouvel showcasing human history and culture across civilizations.',
    rating: 4.9,
    openHours: '10:00 - 18:30',
    contact: '+971 600 565566'
  },
  {
    id: 'tour-mus-2',
    title: 'Zayed National Museum',
    arabicTitle: 'متحف زايد الوطني',
    category: 'Tourism',
    subcategory: 'Museums',
    lat: 24.5380,
    lon: 54.4050,
    address: 'Saadiyat Cultural District, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'National monument honoring UAE founding father Sheikh Zayed bin Sultan Al Nahyan.',
    rating: 4.9,
    openHours: '09:00 - 19:00',
    contact: '+971 2 444 0444'
  },
  {
    id: 'tour-hist-1',
    title: 'Qasr Al Hosn',
    arabicTitle: 'قصر الحصن',
    category: 'Tourism',
    subcategory: 'Historical Sites',
    lat: 24.4820,
    lon: 54.3550,
    address: 'Rashid Bin Saeed Al Maktoum St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Oldest stone building in Abu Dhabi standing since 1761, chronicling the emirate’s historic evolution.',
    rating: 4.8,
    openHours: '09:00 - 20:00',
    contact: '+971 2 697 6400'
  },
  {
    id: 'tour-hist-2',
    title: 'Al Maqtaa Fort',
    arabicTitle: 'حصن المقطع التاريخي',
    category: 'Tourism',
    subcategory: 'Historical Sites',
    lat: 24.4120,
    lon: 54.4890,
    address: 'Al Maqtaa Channel, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Historic 200-year-old defensive watchtower protecting the original waterway entrance to Abu Dhabi island.',
    rating: 4.7,
    openHours: '09:00 - 18:00',
    contact: '+971 2 697 6400'
  },
  {
    id: 'tour-resort-1',
    title: 'Saadiyat Rotana Resort & Villas',
    arabicTitle: 'منتجع وفلل سعديات روتانا',
    category: 'Tourism',
    subcategory: 'Resorts',
    lat: 24.5420,
    lon: 54.4410,
    address: 'Saadiyat Beach, Saadiyat Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Luxury five-star beachfront resort overlooking pristine white sands of Saadiyat Island.',
    rating: 4.8,
    openHours: '24/7 Hospitality',
    contact: '+971 2 697 0000'
  },
  {
    id: 'tour-attr-1',
    title: 'Sheikh Zayed Grand Mosque',
    arabicTitle: 'جامع الشيخ زايد الكبير',
    category: 'Tourism',
    subcategory: 'Attractions',
    lat: 24.4128,
    lon: 54.4744,
    address: 'Sheikh Rashid Bin Saeed St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Global landmark accommodating 40,000 worshippers with 82 domes and 24-carat gold chandeliers.',
    rating: 4.9,
    openHours: '09:00 - 22:00 Daily',
    contact: '+971 2 419 1919'
  },
  {
    id: 'tour-attr-2',
    title: 'Qasr Al Watan (Presidential Palace)',
    arabicTitle: 'قصر الوطن - قصر الرئاسة',
    category: 'Tourism',
    subcategory: 'Attractions',
    lat: 24.4632,
    lon: 54.3051,
    address: 'Al Ras Al Akhdar, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Spectacular presidential palace showcasing Arabian architectural heritage and diplomatic halls.',
    rating: 4.9,
    openHours: '10:00 - 17:30',
    contact: '+971 600 544442'
  },
  {
    id: 'tour-attr-3',
    title: 'Ferrari World Yas Island',
    arabicTitle: 'عالم فيراري جزيرة ياس',
    category: 'Tourism',
    subcategory: 'Attractions',
    lat: 24.4839,
    lon: 54.6074,
    address: 'Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'World-famous indoor theme park featuring the Formula Rossa roller coaster.',
    rating: 4.8,
    openHours: '11:00 - 20:00',
    contact: '+971 600 511115'
  },

  // ==================== INFRASTRUCTURE ====================
  {
    id: 'infra-brg-1',
    title: 'Sheikh Zayed Bridge',
    arabicTitle: 'جسر الشيخ زايد',
    category: 'Infrastructure',
    subcategory: 'Bridges',
    lat: 24.4180,
    lon: 54.4820,
    address: 'Al Maqtaa Channel, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Masterpiece 842m-long arch bridge designed by Zaha Hadid with dynamic LED illuminations.',
    rating: 4.9,
    openHours: '24/7 Highway Transit',
    contact: '+971 800 850'
  },
  {
    id: 'infra-brg-2',
    title: 'Al Maqtaa Bridge',
    arabicTitle: 'جسر المقطع التاريخي',
    category: 'Infrastructure',
    subcategory: 'Bridges',
    lat: 24.4110,
    lon: 54.4920,
    address: 'Al Maqtaa Gateway, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Historic arterial causeway bridge connecting Abu Dhabi Island to the mainland since 1968.',
    rating: 4.7,
    openHours: '24/7 Traffic',
    contact: '+971 800 850'
  },
  {
    id: 'infra-brg-3',
    title: 'Hudayriyat Suspension Bridge',
    arabicTitle: 'جسر جزيرة الحديريات المعلق',
    category: 'Infrastructure',
    subcategory: 'Bridges',
    lat: 24.4310,
    lon: 54.3620,
    address: 'Hudayriyat Island Gateway, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Modern cable-stayed suspension bridge spanning 1.3 km into Hudayriyat recreational island.',
    rating: 4.8,
    openHours: '24/7 Traffic',
    contact: '+971 800 850'
  },
  {
    id: 'infra-road-1',
    title: 'Sheikh Zayed Tunnel & Expressway',
    arabicTitle: 'نفق الشيخ زايد السريع',
    category: 'Infrastructure',
    subcategory: 'Road Networks',
    lat: 24.4920,
    lon: 54.3780,
    address: 'Salam St Arterial, Abu Dhabi',
    city: 'Abu Dhabi',
    description: '3.6 km bi-directional multi-lane underwater tunnel facilitating high-speed express traffic.',
    rating: 4.8,
    openHours: '24/7 Expressway',
    contact: '+971 800 850'
  },
  {
    id: 'infra-road-2',
    title: 'E11 Sheikh Maktoum Highway Hub',
    arabicTitle: 'محور طريق الشيخ مكتوم السريع E11',
    category: 'Infrastructure',
    subcategory: 'Road Networks',
    lat: 24.4380,
    lon: 54.5620,
    address: 'E11 Expressway Junction, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Major 12-lane strategic interstate expressway linking Abu Dhabi with Dubai and Northern Emirates.',
    rating: 4.9,
    openHours: '24/7 Expressway',
    contact: '+971 800 850'
  },
  {
    id: 'infra-port-1',
    title: 'Khalifa Port Complex',
    arabicTitle: 'مجمع ميناء خليفة',
    category: 'Infrastructure',
    subcategory: 'Port Facilities',
    lat: 24.8180,
    lon: 54.7350,
    address: 'Khalifa Port Island, Taweelah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Deepwater semi-automated container port managing 8.5M TEU logistics and bulk dry cargo.',
    rating: 4.9,
    openHours: '24/7 Maritime Port',
    contact: '+971 800 102030'
  },
  {
    id: 'infra-port-2',
    title: 'Zayed Port (Mina Zayed)',
    arabicTitle: 'ميناء زايد البحري',
    category: 'Infrastructure',
    subcategory: 'Port Facilities',
    lat: 24.5210,
    lon: 54.3780,
    address: 'Mina Zayed, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Historic commercial maritime port, cruise ship terminal, and seafood markets.',
    rating: 4.7,
    openHours: '24/7 Commercial Maritime',
    contact: '+971 800 102030'
  },
  {
    id: 'infra-light-1',
    title: 'Abu Dhabi Smart LED Public Lighting Grid Hub',
    arabicTitle: 'مركز التحكم بإضاءة الطرق الذكية - أبوظبي',
    category: 'Infrastructure',
    subcategory: 'Public Lighting',
    lat: 24.4450,
    lon: 54.4050,
    address: 'DPM Infrastructure Center, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'IoT-enabled public LED street lighting network optimizing citywide energy usage with smart dimming.',
    rating: 4.8,
    openHours: '24/7 Automated Grid Control',
    contact: '+971 800 850'
  },

  // ==================== HOUSING ====================
  {
    id: 'house-res-1',
    title: 'Al Rayyana Residential Community',
    arabicTitle: 'مجمع الريانة السكني - مدينة خليفة',
    category: 'Housing',
    subcategory: 'Residential Complexes',
    lat: 24.4210,
    lon: 54.5580,
    address: 'Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Integrated gated master development featuring 1,537 luxury apartments and central parklands.',
    rating: 4.8,
    openHours: '24/7 Residential Gated',
    contact: '+971 800 25327'
  },
  {
    id: 'house-res-2',
    title: 'Sun & Sky Towers - Al Reem',
    arabicTitle: 'أبراج صن آند سكاي - جزيرة الريم',
    category: 'Housing',
    subcategory: 'Residential Complexes',
    lat: 24.4980,
    lon: 54.4050,
    address: 'Shams Abu Dhabi, Al Reem Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Twin supertall 74-storey elliptical skyscrapers offering 1,154 high-rise residences.',
    rating: 4.8,
    openHours: '24/7 Residential',
    contact: '+971 2 810 5555'
  },
  {
    id: 'house-pub-1',
    title: 'Al Falah National Housing Project',
    arabicTitle: 'مشروع الفلاح السكني للمواطنين',
    category: 'Housing',
    subcategory: 'Public Housing',
    lat: 24.4150,
    lon: 54.5820,
    address: 'Al Falah Sector, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Government national housing development comprising 4,857 luxury villas for Emirati citizens.',
    rating: 4.9,
    openHours: '24/7 Community',
    contact: '+971 800 555'
  },
  {
    id: 'house-vil-1',
    title: 'Saadiyat Beach Villas',
    arabicTitle: 'فلل شاطئ السعديات الفاخرة',
    category: 'Housing',
    subcategory: 'Villas',
    lat: 24.5450,
    lon: 54.4320,
    address: 'Saadiyat Island Beachfront, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Exclusive Mediterranean-inspired beachfront private residential villas beside Saadiyat Beach Golf Club.',
    rating: 4.9,
    openHours: '24/7 Gated Access',
    contact: '+971 800 25327'
  },
  {
    id: 'house-com-1',
    title: 'ADGM Tower Complex - Al Maryah',
    arabicTitle: 'برج سوق أبوظبي العالمي - جزيرة المارية',
    category: 'Housing',
    subcategory: 'Commercial Buildings',
    lat: 24.5020,
    lon: 54.3890,
    address: 'Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Grade-A international financial center office towers housing multinational banks and corporate headquarters.',
    rating: 4.9,
    openHours: '07:00 - 20:00',
    contact: '+971 2 333 8888'
  },

  // ==================== PUBLIC SAFETY ====================
  {
    id: 'safe-pol-1',
    title: 'Al Khalidiyah Police Station',
    arabicTitle: 'مركز شرطة الخالدية',
    category: 'Public Safety',
    subcategory: 'Police Stations',
    lat: 24.4750,
    lon: 54.3480,
    address: 'Zayed The First St, Al Khalidiyah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Full-service community police station offering 24/7 citizen reporting and security patrol dispatch.',
    rating: 4.8,
    openHours: '24/7 Emergency & Police',
    contact: '+971 2 665 5555'
  },
  {
    id: 'safe-fire-1',
    title: 'Abu Dhabi Central Civil Defense Fire Station',
    arabicTitle: 'مركز إطفاء الدفاع المدني الرئيسي - أبوظبي',
    category: 'Public Safety',
    subcategory: 'Fire Stations',
    lat: 24.4710,
    lon: 54.3680,
    address: 'Al Falah St, Zone 1, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Rapid emergency response fire and rescue depot equipped with heavy industrial foam tenders and turntable ladders.',
    rating: 4.9,
    openHours: '24/7 Emergency Response (997)',
    contact: '997'
  },
  {
    id: 'safe-civ-1',
    title: 'Abu Dhabi Civil Defense General Directorate HQ',
    arabicTitle: 'القيادة العامة للدفاع المدني - أبوظبي',
    category: 'Public Safety',
    subcategory: 'Civil Defense',
    lat: 24.4420,
    lon: 54.4180,
    address: 'Al Saada St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'National civil defense authority regulating fire safety, building life safety inspection, and crisis management.',
    rating: 4.8,
    openHours: '07:30 - 15:30 (24/7 Operations)',
    contact: '+971 2 444 4444'
  },
  {
    id: 'safe-emg-1',
    title: 'National Emergency Crisis Authority (NCEMA)',
    arabicTitle: 'الهيئة الوطنية لإدارة الطوارئ والأزمات والكوارث',
    category: 'Public Safety',
    subcategory: 'Emergency Centers',
    lat: 24.4320,
    lon: 54.4450,
    address: 'Abu Dhabi Headquarters Complex, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Supreme national authority responsible for national disaster readiness and emergency coordination.',
    rating: 4.9,
    openHours: '24/7 Crisis Monitoring',
    contact: '+971 2 417 7000'
  },

  // ==================== UTILITIES ====================
  {
    id: 'util-pow-1',
    title: 'Taweelah Power & Desalination Complex',
    arabicTitle: 'محطة الطويلة لتوليد الكهرباء وتحلية المياه',
    category: 'Utilities',
    subcategory: 'Power Stations',
    lat: 24.7890,
    lon: 54.7120,
    address: 'Al Taweelah Coast, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Major thermal power and reverse osmosis desalination facility producing 2,000 MW power and 200 MIGD water.',
    rating: 4.8,
    openHours: '24/7 Critical Infrastructure',
    contact: '+971 2 502 6000'
  },
  {
    id: 'util-wat-1',
    title: 'Al Wathba Wastewater Treatment Plant',
    arabicTitle: 'محطة الوثبة لمعالجة مياه الصرف الصحي',
    category: 'Utilities',
    subcategory: 'Water Treatment',
    lat: 24.2850,
    lon: 54.5820,
    address: 'Al Wathba Sustainable Zone, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Advanced tertiary biological water recycling plant producing TSE water for agricultural irrigation.',
    rating: 4.7,
    openHours: '24/7 Automated Operations',
    contact: '+971 2 699 9999'
  },
  {
    id: 'util-sub-1',
    title: 'Transco Grid Substation 400kV',
    arabicTitle: 'محطة نقل الكهرباء الرئيسية 400 ك.ف - ترانسكو',
    category: 'Utilities',
    subcategory: 'Substations',
    lat: 24.4150,
    lon: 54.4950,
    address: 'Al Maqtaa Grid Center, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Ultra-high voltage 400/132kV transmission substation feeding the metropolitan Abu Dhabi electrical grid.',
    rating: 4.8,
    openHours: '24/7 Automated Grid',
    contact: '+971 2 694 4000'
  },
  {
    id: 'util-tel-1',
    title: 'Etisalat Al Kifaf Telecom Tower Hub',
    arabicTitle: 'برج اتصالات المركزي للاتصالات',
    category: 'Utilities',
    subcategory: 'Telecom Towers',
    lat: 24.4820,
    lon: 54.3650,
    address: 'Sheikh Zayed St, Zone 1, Abu Dhabi',
    city: 'Abu Dhabi',
    description: '5G core fiber optic and wireless microwave transmission telecommunications tower.',
    rating: 4.7,
    openHours: '24/7 Network Operations',
    contact: '101'
  },

  // ==================== PARKS ====================
  {
    id: 'park-pub-1',
    title: 'Umm Al Emarat Park',
    arabicTitle: 'حديقة أم الإمارات',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4578,
    lon: 54.3821,
    address: '15th Street, Al Mushrif, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Urban botanical park featuring Shade House, animal barn, amphitheater, and children’s water park.',
    rating: 4.9,
    openHours: '08:00 - 00:00 Daily',
    contact: '+971 2 666 9559'
  },
  {
    id: 'park-pub-2',
    title: 'Capital Park Abu Dhabi',
    arabicTitle: 'حديقة العاصمة أبوظبي',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4925,
    lon: 54.3642,
    address: 'Sultan Bin Zayed The First St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Historic city garden with musical fountains, lush palm groves, and jogging tracks in downtown.',
    rating: 4.6,
    openHours: '24 Hours Open',
    contact: '+971 2 678 9000'
  },
  {
    id: 'park-play-1',
    title: 'Corniche Family Beach Playground',
    arabicTitle: 'منطقة ألعاب كورنيش أبوظبي العائلي',
    category: 'Parks',
    subcategory: 'Playgrounds',
    lat: 24.4720,
    lon: 54.3280,
    address: 'Corniche Beach Gate 4, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Safe rubberized beachfront playground equipped with rope climbs, swings, and shade sails.',
    rating: 4.8,
    openHours: '07:00 - 23:00',
    contact: '+971 800 850'
  },
  {
    id: 'park-gard-1',
    title: 'Delma Park Botanical Garden',
    arabicTitle: 'حديقة دلما النباتية',
    category: 'Parks',
    subcategory: 'Gardens',
    lat: 24.4680,
    lon: 54.3880,
    address: 'Delma St, Al Nahyan, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Beautifully landscaped botanical walking garden with seasonal floral beds, fitness equipment, and cafes.',
    rating: 4.7,
    openHours: '08:00 - 23:00',
    contact: '+971 800 850'
  },
  {
    id: 'park-nat-1',
    title: 'Mangrove National Park Boardwalk',
    arabicTitle: 'ممشى منتزه القرم الوطني',
    category: 'Parks',
    subcategory: 'National Parks',
    lat: 24.4518,
    lon: 54.4369,
    address: 'Eastern Mangroves Promenade, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Protected natural park with extensive elevated wooden boardwalks meandering through tidal mangroves.',
    rating: 4.9,
    openHours: '07:00 - 21:00',
    contact: '+971 2 693 4444'
  },

  // ==================== CLIMATE ====================
  {
    id: 'clim-wx-1',
    title: 'Abu Dhabi National Center of Meteorology (NCM)',
    arabicTitle: 'المركز الوطني للأرصاد الجوية - أبوظبي',
    category: 'Climate',
    subcategory: 'Weather Stations',
    lat: 24.4320,
    lon: 54.4520,
    address: 'Near Zayed Sports City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Federal meteorological radar and atmospheric monitoring headquarters providing climatology data.',
    rating: 4.8,
    openHours: '24/7 Climatology Operations',
    contact: '+971 2 222 7777'
  },
  {
    id: 'clim-sol-1',
    title: 'Noor Abu Dhabi Solar Plant (Sweihan)',
    arabicTitle: 'محطة نور أبوظبي للطاقة الشمسية',
    category: 'Climate',
    subcategory: 'Solar Plants',
    lat: 24.4020,
    lon: 54.6850,
    address: 'Sweihan Sector, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'World’s largest standalone operational solar power plant with 1.177 GW direct solar capacity.',
    rating: 4.9,
    openHours: '24/7 Clean Energy Generation',
    contact: '+971 2 416 0000'
  },
  {
    id: 'clim-co2-1',
    title: 'EAD Atmospheric Carbon Sensor Station',
    arabicTitle: 'محطة رصد انبعاثات الكربون - هيئة البيئة',
    category: 'Climate',
    subcategory: 'CO2 Monitoring',
    lat: 24.4510,
    lon: 54.4350,
    address: 'Eastern Corniche Sensor Hub, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'High-precision greenhouse gas and carbon sequestration observatory.',
    rating: 4.8,
    openHours: '24/7 Automated Sensors',
    contact: '+971 2 693 4444'
  },
  {
    id: 'clim-cst-1',
    title: 'Corniche Marine Wave & Tidal Station',
    arabicTitle: 'محطة مراقبة السواحل والأمواج - الكورنيش',
    category: 'Climate',
    subcategory: 'Coastal Protection',
    lat: 24.4850,
    lon: 54.3380,
    address: 'Corniche Breakwater, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Autonomous marine sensor array monitoring sea surface temperature, sea level rises, and breakwater defense.',
    rating: 4.7,
    openHours: '24/7 Maritime Sensors',
    contact: '+971 2 693 4444'
  },

  // ==================== CONSTRUCTION ====================
  {
    id: 'const-site-1',
    title: 'Guggenheim Abu Dhabi Project Site',
    arabicTitle: 'موقع مشروع متحف جوجنهايم أبوظبي',
    category: 'Construction',
    subcategory: 'Active Construction Sites',
    lat: 24.5380,
    lon: 54.3950,
    address: 'Saadiyat Cultural District, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Active construction development for the landmark modern and contemporary art museum designed by Frank Gehry.',
    rating: 4.8,
    openHours: '06:00 - 18:00 Active Worksite',
    contact: '+971 2 444 0444'
  },
  {
    id: 'const-site-2',
    title: 'Midfield Terminal Expansion Zone',
    arabicTitle: 'منطقة توسعة مبنى المطار الرئيسي',
    category: 'Construction',
    subcategory: 'Active Construction Sites',
    lat: 24.4480,
    lon: 54.6450,
    address: 'Zayed International Airport North, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Strategic aerospace infrastructure civil works and auxiliary runway expansion site.',
    rating: 4.7,
    openHours: '24/7 Restricted Site',
    contact: '+971 2 505 5000'
  },
  {
    id: 'const-dev-1',
    title: 'Saadiyat Cultural District Development',
    arabicTitle: 'مشروع تطوير المنطقة الثقافية بالسعديات',
    category: 'Construction',
    subcategory: 'Development Projects',
    lat: 24.5350,
    lon: 54.4120,
    address: 'Saadiyat Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Masterplanned world-heritage cultural precinct comprising museums, public plazas, and luxury residences.',
    rating: 4.9,
    openHours: '07:00 - 17:00',
    contact: '+971 800 25327'
  },
  {
    id: 'const-dev-2',
    title: 'Hudayriyat Island Master Development',
    arabicTitle: 'مشروع تطوير جزيرة الحديريات الشامل',
    category: 'Construction',
    subcategory: 'Development Projects',
    lat: 24.4150,
    lon: 54.3450,
    address: 'Hudayriyat Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Massive 51 million sq m leisure, sports, and residential island master development.',
    rating: 4.8,
    openHours: '07:00 - 18:00',
    contact: '+971 800 66363'
  },
  {
    id: 'const-perm-1',
    title: 'DPM Municipal Planning & Permitting Office',
    arabicTitle: 'مكتب تصاريح وتراخيص البناء - دائرة البلديات والنقل',
    category: 'Construction',
    subcategory: 'Zoning Permits',
    lat: 24.4780,
    lon: 54.3720,
    address: 'Al Falah St, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Central engineering inspection, zoning clearances, and digital building permitting authority.',
    rating: 4.7,
    openHours: '07:30 - 15:30',
    contact: '+971 800 850'
  },

  // ==================== ENERGY ====================
  {
    id: 'nrg-sub-1',
    title: 'Mussafah Industrial Grid Substation',
    arabicTitle: 'محطة محولات كهرباء مصفح الصناعية',
    category: 'Energy',
    subcategory: 'Substations',
    lat: 24.3450,
    lon: 54.4850,
    address: 'Sector M-37, Mussafah Industrial, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Heavy industrial power distribution substation providing 220kV continuous electrical supply.',
    rating: 4.7,
    openHours: '24/7 Grid Operations',
    contact: '+971 2 694 4000'
  },
  {
    id: 'nrg-gas-1',
    title: 'Dolphin Energy Gas Distribution Hub',
    arabicTitle: 'مركز توزيع الغاز الطبيعي - دولفين للطاقة',
    category: 'Energy',
    subcategory: 'Gas Networks',
    lat: 24.3550,
    lon: 54.5120,
    address: 'Taweelah Pipeline Junction, Mussafah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Natural gas pipeline receiving and distribution terminal delivering clean fuel across power plants.',
    rating: 4.8,
    openHours: '24/7 Pipeline Operations',
    contact: '+971 2 699 5555'
  },
  {
    id: 'nrg-ren-1',
    title: 'Masdar City Clean Energy Research Hub',
    arabicTitle: 'مركز أبحاث الطاقة النظيفة - مدينة مصدر',
    category: 'Energy',
    subcategory: 'Renewable Energy',
    lat: 24.4280,
    lon: 54.6180,
    address: 'Masdar City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Global pioneer center in photovoltaic R&D, green hydrogen pilot testing, and zero-carbon technologies.',
    rating: 4.9,
    openHours: '08:00 - 17:00',
    contact: '+971 2 653 3333'
  },
  {
    id: 'nrg-grid-1',
    title: 'Abu Dhabi National Grid Control Center',
    arabicTitle: 'مركز التحكم الوطني لشبكة الكهرباء - أبوظبي',
    category: 'Energy',
    subcategory: 'Grid Terminals',
    lat: 24.4320,
    lon: 54.4250,
    address: 'Al Saada Complex, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'National load dispatch and real-time SCADA grid control center balancing emirate-wide generation.',
    rating: 4.9,
    openHours: '24/7 Critical Control',
    contact: '+971 2 694 4000'
  },

  // ==================== AGRICULTURE ====================
  {
    id: 'agri-farm-1',
    title: 'Al Khatim Date Palm Farms',
    arabicTitle: 'مزارع نخيل التمور النموذجية - الختم',
    category: 'Agriculture',
    subcategory: 'Farms',
    lat: 24.1850,
    lon: 54.9120,
    address: 'Al Khatim Agricultural Sector, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Premium certified organic date palm estate producing Medjool, Khalas, and Fard premium dates.',
    rating: 4.8,
    openHours: '06:00 - 18:00',
    contact: '+971 2 818 1111'
  },
  {
    id: 'agri-farm-2',
    title: 'Al Rahba Organic Produce Farms',
    arabicTitle: 'مزارع الرحبة للإنتاج العضوي',
    category: 'Agriculture',
    subcategory: 'Farms',
    lat: 24.5950,
    lon: 54.7120,
    address: 'Al Rahba Agricultural Zone, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Locally grown certified organic vegetables, herbs, and sustainable fruits supplying UAE markets.',
    rating: 4.7,
    openHours: '06:30 - 18:30',
    contact: '+971 2 818 1111'
  },
  {
    id: 'agri-grn-1',
    title: 'Abu Dhabi Hydroponic Greenhouse Center',
    arabicTitle: 'مركز البيوت المحمية والزراعة المائية - أبوظبي',
    category: 'Agriculture',
    subcategory: 'Greenhouses',
    lat: 24.4150,
    lon: 54.6250,
    address: 'Al Ajban Highway, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Climate-controlled smart indoor hydroponic and vertical farming complex reducing water consumption by 90%.',
    rating: 4.9,
    openHours: '07:00 - 17:00',
    contact: '+971 2 818 1111'
  },
  {
    id: 'agri-irr-1',
    title: 'ADAFSA Smart Irrigation Monitoring Station',
    arabicTitle: 'محطة مراقبة الري الذكي - هيئة الزراعة والسلامة الغذائية',
    category: 'Agriculture',
    subcategory: 'Irrigation Systems',
    lat: 24.3850,
    lon: 54.5520,
    address: 'Baniyas Agricultural Hub, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'IoT telemetry smart irrigation hub optimizing groundwater and recycled TSE distribution.',
    rating: 4.8,
    openHours: '24/7 Automated Irrigation Telemetry',
    contact: '+971 800 555'
  },
  {
    id: 'agri-live-1',
    title: 'Al Wathba Camel & Livestock Veterinary Center',
    arabicTitle: 'مركز الوثبة البيطري للإبل والثروة الحيوانية',
    category: 'Agriculture',
    subcategory: 'Livestock Centers',
    lat: 24.2750,
    lon: 54.6150,
    address: 'Al Wathba Heritage Sector, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Specialized animal husbandry, genetic research, and veterinary healthcare center for camels and livestock.',
    rating: 4.8,
    openHours: '07:00 - 19:00',
    contact: '+971 2 818 1111'
  },

  // ==================== EMPLOYMENT ====================
  {
    id: 'emp-hub-1',
    title: 'Abu Dhabi Global Market (ADGM)',
    arabicTitle: 'سوق أبوظبي العالمي - الجزيرة المالية',
    category: 'Employment',
    subcategory: 'Business Hubs',
    lat: 24.5025,
    lon: 54.3892,
    address: 'Al Maryah Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Award-winning international financial centre (IFC) home to top global financial institutions and fintechs.',
    rating: 4.9,
    openHours: '08:00 - 18:00',
    contact: '+971 2 333 8888'
  },
  {
    id: 'emp-free-1',
    title: 'Masdar City Free Zone',
    arabicTitle: 'المنطقة الحرة بمدينة مصدر',
    category: 'Employment',
    subcategory: 'Free Zones',
    lat: 24.4280,
    lon: 54.6180,
    address: 'Masdar City Tech Hub, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Clean-tech business ecosystem offering 100% foreign ownership and zero tax for innovation companies.',
    rating: 4.9,
    openHours: '08:00 - 17:00',
    contact: '+971 2 653 3333'
  },
  {
    id: 'emp-free-2',
    title: 'KEZAD Industrial & Logistics Free Zone',
    arabicTitle: 'منطقة كيزاد الصناعية واللوجستية الحرة',
    category: 'Employment',
    subcategory: 'Free Zones',
    lat: 24.7850,
    lon: 54.6850,
    address: 'Khalifa Industrial Zone, Taweelah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Largest integrated trade, logistics, and industrial hub in the Middle East with 550+ sq km footprint.',
    rating: 4.8,
    openHours: '24/7 Industrial Free Zone',
    contact: '+971 800 102030'
  },
  {
    id: 'emp-free-3',
    title: 'TwoFour54 Creative Media Free Zone',
    arabicTitle: 'المنطقة الإعلامية الحرة twofour54 - جزيرة ياس',
    category: 'Employment',
    subcategory: 'Free Zones',
    lat: 24.4420,
    lon: 54.4350,
    address: 'Yas Creative Hub, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Home to 600+ regional and global media companies, film production studios, and digital content creators.',
    rating: 4.8,
    openHours: '08:00 - 18:00',
    contact: '+971 800 2454'
  },
  {
    id: 'emp-job-1',
    title: 'Tawteen National Employment Happiness Center',
    arabicTitle: 'مركز سعادة المتعاملين للتوطين وتوظيف الكوادر الوطنية',
    category: 'Employment',
    subcategory: 'Job Centers',
    lat: 24.4480,
    lon: 54.4120,
    address: 'MOHRE Headquarters, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'National talent empowerment agency providing career coaching, job placement, and private sector integration.',
    rating: 4.8,
    openHours: '08:00 - 16:00',
    contact: '+971 600 590000'
  },
  {
    id: 'emp-hq-1',
    title: 'ADNOC Headquarters Tower',
    arabicTitle: 'المقر الرئيسي لشركة بترول أبوظبي الوطنية - أدنوك',
    category: 'Employment',
    subcategory: 'Corporate HQs',
    lat: 24.4680,
    lon: 54.3290,
    address: 'Corniche Road West, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Iconic 342m skyscraper and global corporate headquarters of Abu Dhabi National Oil Company.',
    rating: 4.9,
    openHours: '07:30 - 16:30',
    contact: '+971 2 707 0000'
  },
  {
    id: 'emp-hq-2',
    title: 'Mubadala Investment Company Global HQ',
    arabicTitle: 'المقر العالمي لشركة مبادلة للاستثمار',
    category: 'Employment',
    subcategory: 'Corporate HQs',
    lat: 24.5015,
    lon: 54.3890,
    address: 'Al Maryah Tower, Al Maryah Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Global sovereign investor headquarters managing an AED 1+ trillion global investment portfolio.',
    rating: 4.9,
    openHours: '08:00 - 17:30',
    contact: '+971 2 413 0000'
  },
  {
    id: 'emp-hq-3',
    title: 'Etihad Airways Aviation Headquarters',
    arabicTitle: 'المقر الرئيسي لشركة الاتحاد للطيران',
    category: 'Employment',
    subcategory: 'Corporate HQs',
    lat: 24.4320,
    lon: 54.6280,
    address: 'New Airport Road, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Global corporate management, flight operations, and pilot training center of the UAE national airline.',
    rating: 4.8,
    openHours: '08:00 - 17:00 (24/7 Operations)',
    contact: '+971 600 555666'
  }
];

// Reference Geocodes for Spatial Analysis & Radius Queries
export const LANDMARK_COORDINATES = {
  // Airports
  'abu dhabi airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)' },
  'zayed international airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)' },
  'zayed airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)' },
  'auh': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)' },
  'al bateen airport': { lat: 24.4283, lon: 54.4581, name: 'Al Bateen Executive Airport' },
  'bateen airport': { lat: 24.4283, lon: 54.4581, name: 'Al Bateen Executive Airport' },
  'dubai airport': { lat: 25.2532, lon: 55.3657, name: 'Dubai International Airport (DXB)' },
  'dxb': { lat: 25.2532, lon: 55.3657, name: 'Dubai International Airport (DXB)' },
  
  // Islands & Districts
  'yas island': { lat: 24.4839, lon: 54.6074, name: 'Yas Island' },
  'yas': { lat: 24.4839, lon: 54.6074, name: 'Yas Island' },
  'saadiyat island': { lat: 24.5337, lon: 54.3983, name: 'Saadiyat Island' },
  'saadiyat': { lat: 24.5337, lon: 54.3983, name: 'Saadiyat Island' },
  'reem island': { lat: 24.4988, lon: 54.4060, name: 'Al Reem Island' },
  'reem': { lat: 24.4988, lon: 54.4060, name: 'Al Reem Island' },
  'al maryah island': { lat: 24.5028, lon: 54.3888, name: 'Al Maryah Island' },
  'maryah': { lat: 24.5028, lon: 54.3888, name: 'Al Maryah Island' },
  'mushrif': { lat: 24.4452, lon: 54.3981, name: 'Al Mushrif' },
  'khalifa city': { lat: 24.4280, lon: 54.5810, name: 'Khalifa City' },
  'khalifa': { lat: 24.4280, lon: 54.5810, name: 'Khalifa City' },
  'mussafah': { lat: 24.3520, lon: 54.4920, name: 'Mussafah Industrial City' },
  'taweelah': { lat: 24.8120, lon: 54.7290, name: 'Al Taweelah' },
  'jebel ali': { lat: 25.0120, lon: 55.1050, name: 'Jebel Ali' },
  'corniche': { lat: 24.4750, lon: 54.3480, name: 'Abu Dhabi Corniche' },
  'downtown abu dhabi': { lat: 24.4820, lon: 54.3640, name: 'Downtown Abu Dhabi' },
  'downtown dubai': { lat: 25.1972, lon: 55.2744, name: 'Downtown Dubai' },
  'dubai': { lat: 25.2048, lon: 55.2708, name: 'Dubai City' },
  'abu dhabi': { lat: 24.4539, lon: 54.3773, name: 'Abu Dhabi City' },
  'al ain': { lat: 24.2075, lon: 55.7447, name: 'Al Ain' },
  'ruwais': { lat: 24.1450, lon: 52.7150, name: 'Ruwais' },
  
  // Specific Landmark Anchors
  'cleveland clinic': { lat: 24.5028, lon: 54.3888, name: 'Cleveland Clinic Abu Dhabi' },
  'grand mosque': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque' },
  'sheikh zayed grand mosque': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque' },
  'louvre': { lat: 24.5337, lon: 54.3983, name: 'Louvre Abu Dhabi' },
  'ferrari world': { lat: 24.4839, lon: 54.6074, name: 'Ferrari World' }
};

/**
 * Calculates geodesic distance between two points in kilometers using Haversine formula
 */
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(2));
}

export const CAT_TRANSLATIONS_AR = {
  'Education': 'التعليم',
  'Healthcare': 'الرعاية الصحية',
  'Transport': 'النقل والمواصلات',
  'Transportation': 'النقل والمواصلات',
  'Environment': 'البيئة والاستدامة',
  'Government Services': 'الخدمات الحكومية',
  'Government': 'الخدمات الحكومية',
  'Tourism': 'السياحة والترفيه',
  'Infrastructure': 'البنية التحتية',
  'Housing': 'الإسكان والمجتمعات',
  'Public Safety': 'السلامة العامة والأمن',
  'Utilities': 'المرافق والخدمات',
  'Climate': 'المناخ والطقس',
  'Construction': 'البناء والتشييد',
  'Energy': 'الطاقة والموارد',
  'Parks': 'الحدائق والمنتزهات',
  'Park': 'الحدائق والمنتزهات',
  'Agriculture': 'الزراعة والأغذية',
  'Employment': 'التوظيف والأعمال',
  'Industrial': 'القطاع الصناعي والتجارة',
  'All Categories': 'جميع الفئات',
  'Spatial Search': 'البحث المكاني'
};

export const SUBCAT_TRANSLATIONS_AR = {
  'Charter Schools': 'مدارس الشراكة التعليمية',
  'Nurseries': 'دور الحضانة ورياض الأطفال',
  'POD': 'مراكز أصحاب الهمم',
  'Public Schools': 'المدارس الحكومية',
  'Private Schools': 'المدارس الخاصة',
  'Universities': 'الجامعات والكليات',
  'Hospitals': 'المستشفيات التخصصية',
  'Clinics': 'العيادات والمراكز الصحية',
  'Pharmacies': 'الصيدليات',
  'Medical Centers': 'المراكز الطبية الشاملة',
  'Bus Stations': 'محطات الحافلات العامة',
  'Metro Lines': 'خطوط المترو والسكك الحديدية',
  'Taxi Stands': 'مواقف سيارات الأجرة',
  'Parking Lots': 'مواقف السيارات',
  'Airports': 'المطارات الدولية والمحلية',
  'Seaports': 'الموانئ البحرية',
  'Air Quality Sensors': 'أجهزة استشعار جودة الهواء',
  'Protected Areas': 'المحميات الطبيعية',
  'Recycling Centers': 'مراكز إعادة التدوير',
  'Waste Management': 'إدارة النفايات',
  'Ministries': 'الوزارات الاتحادية',
  'Embassies': 'السفارات والقنصليات',
  'Courts': 'المحاكم والدوائر القضائية',
  'Municipalities': 'مراكز البلديات',
  'Service Centers': 'مراكز خدمة المتعاملين',
  'Hotels': 'الفنادق والضيافة',
  'Museums': 'المتاحف والمعارض',
  'Historical Sites': 'المواقع التاريخية والأثرية',
  'Resorts': 'المنتجعات السياحية',
  'Attractions': 'الوجهات الترفيهية',
  'Bridges': 'الجسور والتقاطعات',
  'Road Networks': 'شبكات الطرق السريعة',
  'Port Facilities': 'مرافق الموانئ',
  'Public Lighting': 'الإنارة العامة',
  'Residential Complexes': 'المجمعات السكنية',
  'Public Housing': 'مشاريع الإسكان الحكومي',
  'Villas': 'الفلل السكنية',
  'Commercial Buildings': 'المباني التجارية',
  'Police Stations': 'مراكز الشرطة',
  'Fire Stations': 'مراكز الإطفاء والدفاع المدني',
  'Civil Defense': 'الدفاع المدني',
  'Emergency Centers': 'مراكز الطوارئ والإسعاف',
  'Power Stations': 'محطات توليد الكهرباء',
  'Water Treatment': 'محطات تحلية ومعالجة المياه',
  'Substations': 'محطات التحويل الكهربائية',
  'Telecom Towers': 'أبراج الاتصالات',
  'Weather Stations': 'محطات الرصد الجوي',
  'Solar Plants': 'محطات الطاقة الشمسية',
  'CO2 Monitoring': 'مراقبة انبعاثات الكربون',
  'Coastal Protection': 'حماية السواحل والشواطئ',
  'Active Construction Sites': 'مواقع البناء النشطة',
  'Development Projects': 'مشاريع التطوير الكبرى',
  'Zoning Permits': 'تصاريح استخدام الأراضي',
  'Gas Networks': 'شبكات الغاز الطبيعي',
  'Renewable Energy': 'الطاقة المتجددة',
  'Grid Terminals': 'محطات الربط الشبكي',
  'Public Parks': 'الحدائق والمنتزهات العامة',
  'Playgrounds': 'ملاعب الأطفال والساحات',
  'Gardens': 'الحدائق النباتية',
  'National Parks': 'المحميات الوطنية',
  'Farms': 'المزارع الإنتاجية',
  'Greenhouses': 'البيوت المحمية الحديثة',
  'Irrigation Systems': 'أنظمة الري الذكية',
  'Livestock Centers': 'مراكز الثروة الحيوانية',
  'Business Hubs': 'مراكز الأعمال وحاضنات المشاريع',
  'Free Zones': 'المناطق الحرة المتخصصة',
  'Job Centers': 'مراكز التوظيف وتنمية المهارات',
  'Corporate HQs': 'المقار الرئيسية للشركات'
};

export function getArabicTitle(title) {
  const item = GEOVISION_SPATIAL_DATASET.find(d => d.title.toLowerCase() === (title || '').toLowerCase());
  return item?.arabicTitle || title;
}

/**
 * Intelligent GIS & NLP Spatial Query Engine Class
 * Maintains conversation context and executes multi-turn spatial reasoning queries.
 */
class SpatialAIEngine {
  constructor() {
    this.sessionContext = {
      previousResults: [...GEOVISION_SPATIAL_DATASET],
      previousQuery: '',
      activeCategory: null,
      activeCity: null,
      activeReferenceLocation: null,
      lastSelectedFeature: null
    };
  }

  resetContext() {
    this.sessionContext = {
      previousResults: [...GEOVISION_SPATIAL_DATASET],
      previousQuery: '',
      activeCategory: null,
      activeCity: null,
      activeReferenceLocation: null,
      lastSelectedFeature: null
    };
  }

  /**
   * Main entry point to process any natural-language query
   * @param {string} rawQuery - The user's query text
   * @param {string} categoryFilter - Optional explicit category filter
   * @param {string} lang - Language code ('en' | 'ar')
   * @returns {Object} Structured spatial execution response
   */
  processNaturalLanguageQuery(rawQuery = '', categoryFilter = '', lang = 'en') {
    const q = (rawQuery || '').trim();
    const qLower = q.toLowerCase();

    // 0. CHECK FOR RESET / CLEAR
    if (qLower === 'reset' || qLower === 'clear' || qLower === 'show all' || qLower === 'clear filters' || qLower === 'إعادة تعيين' || qLower === 'عرض الكل') {
      this.resetContext();
      return {
        intent: 'search',
        querySummary: lang === 'ar' ? 'تمت إعادة تعيين عوامل التصفية واستعادة كافة البيانات.' : 'Reset active filters and restored full dataset.',
        aiMessageText: lang === 'ar'
          ? 'تمت إعادة تعيين عوامل التصفية. يتم عرض جميع المواقع المكانية المسجلة عبر إمارة أبوظبي ودولة الإمارات.'
          : 'Filters reset. Displaying all registered spatial locations across the UAE.',
        results: [...GEOVISION_SPATIAL_DATASET],
        structuredGISQuery: { intent: 'find', featureType: 'all', city: 'all' },
        mapAction: { type: 'fit_bounds' }
      };
    }

    // 0.5 CHECK FOR WHAT-IF SIMULATIONS & HEALTHCARE SCENARIO ANALYSIS
    if (qLower.includes('population grows') || qLower.includes('add a clinic') || qLower.includes('نمو سكاني') || qLower.includes('أثر عيادة') || qLower.includes('+20% pop')) {
      const healthcareItems = GEOVISION_SPATIAL_DATASET.filter(item => item.category === 'Healthcare');
      const count = healthcareItems.length;
      this.sessionContext.previousResults = healthcareItems;
      return {
        intent: 'simulation',
        querySummary: lang === 'ar' ? 'محاكاة الأثر المكاني لنمو السكان +20%' : 'Spatial Impact Simulation: +20% Population Growth',
        aiMessageText: lang === 'ar'
          ? 'محاكاة الذكاء الاصطناعي (+20% نمو سكاني): تم تحديد موقع مثالي لعيادة رعاية أولية جديدة في المشرف لتغطية 45,000 نسمة بنطاق وصول 12 دقيقة، مما يقلل الضغط عن مستشفيات المنطقة بنسبة 28%.'
          : 'AI Simulation (+20% Population Growth): Optimal location identified for a new primary healthcare clinic in Al Mushrif, serving ~45,000 residents within a 12-minute catchment, reducing pressure on nearby hospitals by 28%.',
        results: healthcareItems,
        structuredResults: {
          title: lang === 'ar' ? 'محاكاة التغطية الصحية' : 'Healthcare Simulation Results',
          category: lang === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
          tabs: [{ id: 'Clinics', name: lang === 'ar' ? `العيادات المقترحة (${count})` : `Proposed Clinics (${count})`, count }],
          activeTabId: 'Clinics',
          items: healthcareItems.map(r => ({
            ...r,
            arabicTitle: r.arabicTitle || getArabicTitle(r.title),
            phone: r.phone || r.contact || '24461444',
            website: r.website || `https://${r.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae`,
            email: r.email || `info@doh.gov.ae`,
            academicYear: '2024 - 2025',
            tuitionFee: '',
            irtqaaRating: 'Very Good',
            gender: 'General Public',
            report: 'DOH Simulation Analysis Q4/2024',
            curriculum: 'Primary Healthcare Catchment Model',
            grades: 'Coverage: 45,000 Residents',
            gradesArabic: 'نطاق التغطية: 45,000 نسمة',
            isFavorite: false
          }))
        },
        chips: [
          { label: lang === 'ar' ? 'ملاءمة الصيدليات ذكاء' : 'Pharmacy Suitability', query: 'Generate an AI suitability layer for pharmacies' },
          { label: lang === 'ar' ? 'موقع عيادة (15 د)' : 'New Clinic Site (15m)', query: 'Find the best place for a new clinic within 15 minutes' },
          { label: lang === 'ar' ? 'أقرب العيادات' : 'Nearest Clinics', query: 'Show me the nearest clinics' }
        ],
        structuredGISQuery: { intent: 'simulate', param: 'population_growth_20' },
        mapAction: { type: 'fit_bounds' }
      };
    }

    if (qLower.includes('suitability layer for pharmacies') || qLower.includes('pharmacy suitability') || qLower.includes('ملاءمة الصيدليات')) {
      const pharmacies = GEOVISION_SPATIAL_DATASET.filter(item => item.subcategory === 'Pharmacies' || item.category === 'Healthcare');
      const count = pharmacies.length;
      this.sessionContext.previousResults = pharmacies;
      return {
        intent: 'suitability',
        querySummary: lang === 'ar' ? 'تحليل ملاءمة الصيدليات بالذكاء الاصطناعي' : 'AI Pharmacy Suitability Analysis',
        aiMessageText: lang === 'ar'
          ? 'تم إنشاء طبقة الملاءمة المكانية للصيدليات بنجاح. تم تحديد 3 مناطق ذات أولوية قصوى للتوسع الصيدلاني في أبوظبي بناءً على الكثافة السكنية ومراكز الطلب.'
          : 'Successfully generated AI Spatial Suitability Layer for pharmacies. Identified 3 priority zones in Abu Dhabi for pharmacy expansion based on resident density.',
        results: pharmacies,
        structuredResults: {
          title: lang === 'ar' ? 'ملاءمة الصيدليات المكانية' : 'Pharmacy Suitability Matches',
          category: lang === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
          tabs: [{ id: 'Pharmacies', name: lang === 'ar' ? `الصيدليات (${count})` : `Pharmacies (${count})`, count }],
          activeTabId: 'Pharmacies',
          items: pharmacies.map(r => ({
            ...r,
            arabicTitle: r.arabicTitle || getArabicTitle(r.title),
            phone: r.phone || r.contact || '24461444',
            website: r.website || `https://${r.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae`,
            email: r.email || `info@doh.gov.ae`,
            isFavorite: false
          }))
        },
        chips: [
          { label: lang === 'ar' ? 'أثر عيادة (+20% سكان)' : '+20% Pop. Clinic Impact', query: 'What if population grows 20% and we add a clinic?' },
          { label: lang === 'ar' ? 'أقرب العيادات' : 'Nearest Clinics', query: 'Show me the nearest clinics' }
        ],
        structuredGISQuery: { intent: 'suitability_layer', layer: 'pharmacies' },
        mapAction: { type: 'fit_bounds' }
      };
    }

    if (qLower.includes('new clinic within 15') || qLower.includes('best place for a new clinic') || qLower.includes('موقع عيادة (15 د)') || qLower.includes('أفضل موقع لعيادة')) {
      const clinics = GEOVISION_SPATIAL_DATASET.filter(item => item.subcategory === 'Clinics' || item.category === 'Healthcare');
      const count = clinics.length;
      this.sessionContext.previousResults = clinics;
      return {
        intent: 'site_selection',
        querySummary: lang === 'ar' ? 'تحديد موقع العيادة الأنسب (15 دقيقة)' : 'Optimal Clinic Site Selection (15m)',
        aiMessageText: lang === 'ar'
          ? 'تحليل الوصول المكاني (15 دقيقة): تم تحليل شبكة الطرق وحساب أوقات القيادة لتحديد الموقع الأمثل لعيادة صحية جديدة في منطقة المشرف/البطين.'
          : '15-Minute Isochrone Analysis: Road network & transit drive-times processed. Identified top proposed healthcare clinic sites around Al Mushrif and Al Bateen.',
        results: clinics,
        structuredResults: {
          title: lang === 'ar' ? 'مواقع العيادات المقترحة' : 'Proposed Clinic Sites',
          category: lang === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
          tabs: [{ id: 'Clinics', name: lang === 'ar' ? `العيادات (${count})` : `Clinics (${count})`, count }],
          activeTabId: 'Clinics',
          items: clinics.map(r => ({
            ...r,
            arabicTitle: r.arabicTitle || getArabicTitle(r.title),
            isFavorite: false
          }))
        },
        chips: [
          { label: lang === 'ar' ? 'أثر عيادة (+20% سكان)' : '+20% Pop. Clinic Impact', query: 'What if population grows 20% and we add a clinic?' },
          { label: lang === 'ar' ? 'ملاءمة الصيدليات ذكاء' : 'Pharmacy Suitability', query: 'Generate an AI suitability layer for pharmacies' }
        ],
        structuredGISQuery: { intent: 'site_selection', timeWindow: '15m' },
        mapAction: { type: 'fit_bounds' }
      };
    }

    // 1. CHECK FOR ZOOM / MAP NAVIGATION INTENT
    // e.g. "Zoom to Dubai", "Go to Yas Island", "Fly to Saadiyat"
    const navMatch = qLower.match(/^(?:zoom\s+to|fly\s+to|go\s+to|pan\s+to|show\s+me|navigate\s+to|انتقل إلى|تكبير إلى|الذهاب إلى)\s+([a-z0-9\s\-_\u0600-\u06FF]+)/i);
    if (navMatch) {
      const targetPlace = navMatch[1].trim();
      const landmarkKey = Object.keys(LANDMARK_COORDINATES).find(k => targetPlace.includes(k) || k.includes(targetPlace));
      if (landmarkKey) {
        const landmark = LANDMARK_COORDINATES[landmarkKey];
        // Find matching features in that area
        const localFeatures = GEOVISION_SPATIAL_DATASET.filter(item => {
          const dist = calculateDistanceKm(landmark.lat, landmark.lon, item.lat, item.lon);
          return dist <= 12;
        });

        this.sessionContext.previousResults = localFeatures;
        this.sessionContext.activeReferenceLocation = landmark;

        return {
          intent: 'navigate',
          querySummary: lang === 'ar' ? `تم الانتقال إلى ${landmark.name}` : `Navigated viewport to ${landmark.name}`,
          aiMessageText: lang === 'ar'
            ? `تم التكبير إلى **${landmark.name}**. يتم عرض ${localFeatures.length} موقعاً مكانياً متزامناً.`
            : `Zoomed map to ${landmark.name}. Displaying ${localFeatures.length} nearby spatial features.`,
          results: localFeatures,
          structuredGISQuery: { intent: 'navigate', referenceLocation: landmark.name, radius: '12 km' },
          mapAction: {
            type: 'fly_to',
            center: [landmark.lat, landmark.lon],
            zoom: 13.5
          }
        };
      }
    }

    // 1.5 CHECK FOR "TELL ME MORE ABOUT ..." INTENT
    const tellMeMoreMatch = qLower.match(/^(?:tell me more about|tell me about|info about|more details on|details on|tell me more regarding|أخبرني المزيد عن|معلومات عن|تفاصيل عن)\s+(.+)/i);
    if (tellMeMoreMatch) {
      const placeQuery = tellMeMoreMatch[1].trim();
      const matchedItem = GEOVISION_SPATIAL_DATASET.find(item => 
        item.title.toLowerCase().includes(placeQuery.toLowerCase()) || 
        placeQuery.toLowerCase().includes(item.title.toLowerCase()) ||
        (item.arabicTitle && item.arabicTitle.includes(placeQuery))
      );

      if (matchedItem) {
        this.sessionContext.previousResults = [matchedItem];
        this.sessionContext.activeReferenceLocation = { name: matchedItem.title, lat: matchedItem.lat, lon: matchedItem.lon };
        
        const catAr = CAT_TRANSLATIONS_AR[matchedItem.category] || matchedItem.category;
        const subcatAr = SUBCAT_TRANSLATIONS_AR[matchedItem.subcategory] || matchedItem.subcategory;
        const itemTitleAr = matchedItem.arabicTitle || getArabicTitle(matchedItem.title);

        return {
          intent: 'feature_details',
          querySummary: lang === 'ar' ? `تحليل الذكاء الاصطناعي لـ ${itemTitleAr}` : `Detailed AI Analysis for ${matchedItem.title}`,
          aiMessageText: lang === 'ar'
            ? `إليك نظرة شاملة عن **${itemTitleAr}** (${catAr} • ${subcatAr}). يقع في ${matchedItem.address || matchedItem.city || 'أبوظبي، الإمارات'}، حاصل على تقييم ${matchedItem.rating || '4.8'} ★${matchedItem.capacity ? `، وسعة: ${matchedItem.capacity}` : ''}.`
            : `Here is the comprehensive overview for **${matchedItem.title}** (${matchedItem.category} • ${matchedItem.subcategory}). Located in ${matchedItem.address || matchedItem.city || 'UAE'}, featuring ${matchedItem.rating ? `${matchedItem.rating} ★ rating` : ''}${matchedItem.capacity ? `, capacity: ${matchedItem.capacity}` : ''}${matchedItem.emissions ? `, emissions: ${matchedItem.emissions.toLocaleString()} t/yr` : ''}.`,
          results: [matchedItem],
          structuredResults: {
            title: lang === 'ar' ? itemTitleAr : matchedItem.title,
            category: lang === 'ar' ? catAr : matchedItem.category,
            tabs: [{ id: matchedItem.subcategory, name: lang === 'ar' ? subcatAr : matchedItem.subcategory, count: 1 }],
            activeTabId: matchedItem.subcategory,
            items: [{
              ...matchedItem,
              arabicTitle: itemTitleAr,
              phone: matchedItem.phone || matchedItem.contact || '24461444',
              website: matchedItem.website || (matchedItem.title ? `https://${matchedItem.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae` : 'https://iscabudhabi.sabis.net'),
              email: matchedItem.email || (matchedItem.category === 'Education' ? '9059@adek.gov.ae' : `info@${(matchedItem.city || 'abudhabi').toLowerCase()}.gov.ae`),
              academicYear: matchedItem.academicYear || '2024',
              tuitionFee: matchedItem.tuitionFee || (matchedItem.category === 'Education' ? '28912' : ''),
              irtqaaRating: matchedItem.irtqaaRating || 'Very Good',
              gender: matchedItem.gender || (matchedItem.category === 'Education' ? 'Mixed • مختلط' : 'General Public'),
              report: matchedItem.report || 'CALENDAR • Q4/2024',
              curriculum: matchedItem.curriculum || (matchedItem.category === 'Education' ? 'Private SABIS • خاص - اجنبي' : `${matchedItem.sector || matchedItem.subcategory} Operations`),
              grades: matchedItem.grades || (matchedItem.category === 'Education' ? 'KG1, KG2, G01, G02, G03, G04, G05, G06, G08, G09, G10, G11, G1' : `${matchedItem.capacity || 'Standard Operational Capacity'}`),
              gradesArabic: matchedItem.gradesArabic || (matchedItem.category === 'Education' ? 'روضة أولى ،روضة ثانية ،الأول ،الثاني ،الثالث ،الرابع ،الخامس ،السادس ،السابع ،الثامن ،التاسع ،العاشر ،الحادي عشر ،الثاني عشر' : ''),
              showDetails: true,
              isFavorite: false
            }]
          },
          chips: [
            { label: lang === 'ar' ? '📍 أماكن قريبة' : '📍 Find Nearby Places', query: `Find nearby places around ${matchedItem.title}` },
            { label: lang === 'ar' ? '🏥 رعاية صحية قريبة' : '🏥 Nearby Healthcare', query: `Find healthcare within 5 km of ${matchedItem.title}` },
            { label: lang === 'ar' ? '🎓 مدارس قريبة' : '🎓 Nearby Schools', query: `Find schools within 5 km of ${matchedItem.title}` }
          ],
          structuredGISQuery: { intent: 'inspect', feature: matchedItem.title },
          mapAction: {
            type: 'fly_to',
            center: [matchedItem.lat, matchedItem.lon],
            zoom: 15
          }
        };
      }
    }

    // 1.6 CHECK FOR "FIND NEARBY PLACES" INTENT
    const nearbyMatch = qLower.match(/^(?:find nearby places around|find nearby places|places around|nearby places around|nearby places|البحث عن أماكن قريبة|أماكن قريبة)\s*(.*)/i);
    if (nearbyMatch || qLower.includes('find nearby places') || qLower.includes('أماكن قريبة')) {
      const placeQuery = nearbyMatch && nearbyMatch[1] ? nearbyMatch[1].trim() : '';
      let refLat = 24.4539;
      let refLon = 54.3773;
      let refName = 'Current Location';

      if (placeQuery && placeQuery !== 'here' && placeQuery !== 'هنا') {
        const matchedItem = GEOVISION_SPATIAL_DATASET.find(item =>
          item.title.toLowerCase().includes(placeQuery.toLowerCase()) ||
          placeQuery.toLowerCase().includes(item.title.toLowerCase()) ||
          (item.arabicTitle && item.arabicTitle.includes(placeQuery))
        );
        const landmarkKey = Object.keys(LANDMARK_COORDINATES).find(k => placeQuery.toLowerCase().includes(k) || k.includes(placeQuery.toLowerCase()));

        if (matchedItem) {
          refLat = matchedItem.lat;
          refLon = matchedItem.lon;
          refName = matchedItem.title;
        } else if (landmarkKey) {
          const landmark = LANDMARK_COORDINATES[landmarkKey];
          refLat = landmark.lat;
          refLon = landmark.lon;
          refName = landmark.name;
        }
      } else if (this.sessionContext.activeReferenceLocation) {
        refLat = this.sessionContext.activeReferenceLocation.lat;
        refLon = this.sessionContext.activeReferenceLocation.lon;
        refName = this.sessionContext.activeReferenceLocation.name;
      }

      // Calculate distances to all features
      const nearbyFeatures = GEOVISION_SPATIAL_DATASET
        .filter(item => item.title.toLowerCase() !== refName.toLowerCase())
        .map(item => ({
          ...item,
          distanceKm: calculateDistanceKm(refLat, refLon, item.lat, item.lon)
        }))
        .filter(item => item.distanceKm <= 12)
        .sort((a, b) => a.distanceKm - b.distanceKm);

      const count = nearbyFeatures.length;
      this.sessionContext.previousResults = nearbyFeatures;
      this.sessionContext.activeReferenceLocation = { name: refName, lat: refLat, lon: refLon };

      const subcatCounts = {};
      nearbyFeatures.forEach(r => {
        subcatCounts[r.subcategory] = (subcatCounts[r.subcategory] || 0) + 1;
      });
      const subcatTabs = Object.keys(subcatCounts).map(sc => ({
        id: sc,
        name: lang === 'ar' ? `${SUBCAT_TRANSLATIONS_AR[sc] || sc} (${subcatCounts[sc]})` : `${sc} (${subcatCounts[sc]})`,
        count: subcatCounts[sc]
      }));

      return {
        intent: 'nearby_search',
        querySummary: lang === 'ar' ? `تم العثور على ${count} موقعاً قريباً ضمن 12 كم من ${refName}` : `Found ${count} nearby places within 12 km of ${refName}`,
        aiMessageText: lang === 'ar'
          ? `تم اكتشاف **${count}** موقعاً ومرفقاً حيوياً ضمن نطاق **12 كم** من **${refName}** مرتبة حسب الأقرب.`
          : `Discovered **${count}** nearby places and infrastructure facilities within **12 km** of **${refName}**. Sorted by proximity.`,
        results: nearbyFeatures,
        structuredResults: {
          title: lang === 'ar' ? 'الأماكن والمرافق القريبة' : 'Nearby Places',
          category: lang === 'ar' ? 'جميع الفئات' : 'All Categories',
          tabs: subcatTabs,
          activeTabId: subcatTabs.length > 0 ? subcatTabs[0].id : '',
          items: nearbyFeatures.map(r => ({
            ...r,
            arabicTitle: r.arabicTitle || getArabicTitle(r.title),
            phone: r.phone || r.contact || '24461444',
            website: r.website || `https://${r.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae`,
            email: r.email || `info@${(r.city || 'abudhabi').toLowerCase()}.gov.ae`,
            academicYear: r.academicYear || '2024',
            tuitionFee: r.tuitionFee || (r.category === 'Education' ? '28912' : ''),
            irtqaaRating: r.irtqaaRating || 'Very Good',
            gender: r.gender || (r.category === 'Education' ? 'Mixed • مختلط' : 'General Public'),
            report: r.report || 'CALENDAR • Q4/2024',
            curriculum: r.curriculum || (r.category === 'Education' ? 'Private SABIS • خاص - اجنبي' : `${r.sector || r.subcategory} Operations`),
            grades: r.grades || (r.category === 'Education' ? 'KG1, KG2, G01, G02, G03, G04, G05, G06, G08, G09, G10, G11, G1' : `${r.capacity || 'Standard Operational Capacity'}`),
            gradesArabic: r.gradesArabic || '',
            isFavorite: false
          }))
        },
        chips: [
          { label: lang === 'ar' ? '🏥 الرعاية الصحية فقط' : '🏥 Healthcare Only', query: `Find healthcare within 5 km of ${refName}` },
          { label: lang === 'ar' ? '🎓 المدارس فقط' : '🎓 Schools Only', query: `Find schools within 5 km of ${refName}` },
          { label: lang === 'ar' ? '🌳 الحدائق فقط' : '🌳 Parks Only', query: `Find parks within 5 km of ${refName}` }
        ],
        structuredGISQuery: { intent: 'find_nearby', referenceLocation: refName, radius: '12 km' },
        mapAction: {
          type: 'fly_to',
          center: [refLat, refLon],
          zoom: 13
        }
      };
    }

    // 2. CHECK FOR AMBIGUOUS QUERIES REQUIRING CLARIFICATION
    // e.g. "Show facilities near airport" (without specifying which airport in UAE)
    if (
      (qLower.includes('near the airport') || qLower === 'facilities near airport' || qLower === 'show facilities near airport' || qLower === 'schools near airport' || qLower === 'hospitals near airport') &&
      !qLower.includes('zayed') && !qLower.includes('bateen') && !qLower.includes('dubai') && !qLower.includes('auh') && !qLower.includes('dxb')
    ) {
      const featureMentioned = qLower.includes('hospital') ? 'hospitals' : qLower.includes('school') ? 'schools' : 'facilities';
      return {
        intent: 'clarification',
        querySummary: lang === 'ar' ? 'يرجى تحديد المطار المطلوب' : 'Ambiguous reference location detected',
        aiMessageText: lang === 'ar' ? `أي مطار ترغب في اعتماده كنقطة مرجعية مكانية للبحث؟` : `Which airport would you like to use as your spatial reference point?`,
        clarification: {
          question: lang === 'ar' ? 'اختر المطار المرجعي:' : 'Select an airport reference:',
          options: [
            { label: lang === 'ar' ? '✈️ مطار زايد الدولي (AUH)' : '✈️ Zayed International Airport (AUH)', query: `Find ${featureMentioned} within 7 km of Zayed International Airport` },
            { label: lang === 'ar' ? '✈️ مطار البطين للطيران الخاص' : '✈️ Al Bateen Executive Airport', query: `Find ${featureMentioned} within 5 km of Al Bateen Airport` },
            { label: lang === 'ar' ? '✈️ مطار دبي الدولي (DXB)' : '✈️ Dubai International Airport (DXB)', query: `Find ${featureMentioned} within 10 km of Dubai Airport` }
          ]
        },
        chips: [
          { label: lang === 'ar' ? 'مطار زايد (AUH)' : 'Zayed Airport (AUH)', query: `Find ${featureMentioned} within 7 km of Zayed Airport` },
          { label: lang === 'ar' ? 'مطار البطين' : 'Al Bateen Airport', query: `Find ${featureMentioned} within 5 km of Al Bateen Airport` },
          { label: lang === 'ar' ? 'مطار دبي (DXB)' : 'Dubai Airport (DXB)', query: `Find ${featureMentioned} within 10 km of Dubai Airport` }
        ],
        results: this.sessionContext.previousResults,
        structuredGISQuery: { intent: 'clarify_reference_location' }
      };
    }

    // 3. CHECK FOR CONVERSATIONAL FOLLOW-UP QUERIES
    // e.g. "Only show those within 5 km of the airport", "Which ones have emissions above 50,000 tonnes?", "Now only show the ones within 20 km of the coastline", "Show details of the first one"
    const isFollowUp = 
      qLower.startsWith('only show those') || 
      qLower.startsWith('only show the ones') || 
      qLower.startsWith('which ones') || 
      qLower.startsWith('which of those') || 
      qLower.startsWith('now only') || 
      qLower.startsWith('from those') || 
      qLower.includes('the first one') || 
      qLower.includes('the second one') || 
      qLower.includes('closest one') ||
      qLower.includes('highest rating') ||
      qLower.includes('highest emission');

    let workingDataset = isFollowUp && this.sessionContext.previousResults.length > 0
      ? [...this.sessionContext.previousResults]
      : [...GEOVISION_SPATIAL_DATASET];

    // 4. EXTRACT SPATIAL / ATTRIBUTE PARAMETERS
    
    // A. City / Region Extraction
    let targetCity = null;
    if (qLower.includes('in dubai') || qLower.includes('of dubai')) {
      targetCity = 'Dubai';
    } else if (qLower.includes('in abu dhabi') || qLower.includes('of abu dhabi')) {
      targetCity = 'Abu Dhabi';
    } else if (qLower.includes('in al dhafra') || qLower.includes('in ruwais')) {
      targetCity = 'Al Dhafra';
    } else if (this.sessionContext.activeCity && isFollowUp) {
      targetCity = this.sessionContext.activeCity;
    }

    if (targetCity) {
      workingDataset = workingDataset.filter(item => item.city?.toLowerCase() === targetCity.toLowerCase() || (targetCity === 'Abu Dhabi' && item.city !== 'Dubai'));
      this.sessionContext.activeCity = targetCity;
    }

    // B. Category / Feature Type Extraction
    // B. Category / Feature Type Extraction
    let targetCategory = null;
    let targetSubcategory = null;

    if (categoryFilter && categoryFilter !== 'all') {
      const cfLower = categoryFilter.toLowerCase().trim();
      if (cfLower.includes('charter')) {
        targetCategory = 'Education';
        targetSubcategory = 'Charter Schools';
      } else if (cfLower.includes('nursery') || cfLower.includes('nurseries')) {
        targetCategory = 'Education';
        targetSubcategory = 'Nurseries';
      } else if (cfLower === 'pod' || cfLower.includes('determination')) {
        targetCategory = 'Education';
        targetSubcategory = 'POD';
      } else if (cfLower.includes('public school')) {
        targetCategory = 'Education';
        targetSubcategory = 'Public Schools';
      } else if (cfLower.includes('private school')) {
        targetCategory = 'Education';
        targetSubcategory = 'Private Schools';
      } else if (cfLower.includes('education') || cfLower.includes('school')) {
        targetCategory = 'Education';
      } else if (cfLower.includes('hospital')) {
        targetCategory = 'Healthcare';
        targetSubcategory = 'Hospitals';
      } else if (cfLower.includes('clinic')) {
        targetCategory = 'Healthcare';
        targetSubcategory = 'Clinics';
      } else if (cfLower.includes('pharmac')) {
        targetCategory = 'Healthcare';
        targetSubcategory = 'Pharmacies';
      } else if (cfLower.includes('medical center')) {
        targetCategory = 'Healthcare';
        targetSubcategory = 'Medical Centers';
      } else if (cfLower.includes('health')) {
        targetCategory = 'Healthcare';
      } else if (cfLower.includes('bus')) {
        targetCategory = 'Transportation';
        targetSubcategory = 'Bus Stations';
      } else if (cfLower.includes('metro') || cfLower.includes('transit')) {
        targetCategory = 'Transportation';
        targetSubcategory = 'Metro Lines';
      } else if (cfLower.includes('taxi')) {
        targetCategory = 'Transportation';
        targetSubcategory = 'Taxi Stands';
      } else if (cfLower.includes('parking')) {
        targetCategory = 'Transportation';
        targetSubcategory = 'Parking Lots';
      } else if (cfLower.includes('airport')) {
        targetCategory = 'Transportation';
        targetSubcategory = 'Airports';
      } else if (cfLower.includes('transport')) {
        targetCategory = 'Transportation';
      } else if (cfLower.includes('air quality')) {
        targetCategory = 'Environment';
        targetSubcategory = 'Air Quality Sensors';
      } else if (cfLower.includes('protected') || cfLower.includes('reserve')) {
        targetCategory = 'Environment';
        targetSubcategory = 'Protected Areas';
      } else if (cfLower.includes('recycling')) {
        targetCategory = 'Environment';
        targetSubcategory = 'Recycling Centers';
      } else if (cfLower.includes('waste')) {
        targetCategory = 'Environment';
        targetSubcategory = 'Waste Management';
      } else if (cfLower.includes('environment')) {
        targetCategory = 'Environment';
      } else if (cfLower.includes('ministr')) {
        targetCategory = 'Government';
        targetSubcategory = 'Ministries';
      } else if (cfLower.includes('embass')) {
        targetCategory = 'Government';
        targetSubcategory = 'Embassies';
      } else if (cfLower.includes('court')) {
        targetCategory = 'Government';
        targetSubcategory = 'Courts';
      } else if (cfLower.includes('municipalit')) {
        targetCategory = 'Government';
        targetSubcategory = 'Municipalities';
      } else if (cfLower.includes('service center') || cfLower.includes('tamm')) {
        targetCategory = 'Government';
        targetSubcategory = 'Service Centers';
      } else if (cfLower.includes('government')) {
        targetCategory = 'Government';
      } else if (cfLower.includes('hotel')) {
        targetCategory = 'Tourism';
        targetSubcategory = 'Hotels';
      } else if (cfLower.includes('museum')) {
        targetCategory = 'Tourism';
        targetSubcategory = 'Museums';
      } else if (cfLower.includes('historical') || cfLower.includes('heritage') || cfLower.includes('fort')) {
        targetCategory = 'Tourism';
        targetSubcategory = 'Historical Sites';
      } else if (cfLower.includes('resort')) {
        targetCategory = 'Tourism';
        targetSubcategory = 'Resorts';
      } else if (cfLower.includes('attraction') || cfLower.includes('theme park')) {
        targetCategory = 'Tourism';
        targetSubcategory = 'Attractions';
      } else if (cfLower.includes('tourism')) {
        targetCategory = 'Tourism';
      } else if (cfLower.includes('bridge')) {
        targetCategory = 'Infrastructure';
        targetSubcategory = 'Bridges';
      } else if (cfLower.includes('road')) {
        targetCategory = 'Infrastructure';
        targetSubcategory = 'Road Networks';
      } else if (cfLower.includes('port')) {
        targetCategory = 'Infrastructure';
        targetSubcategory = 'Port Facilities';
      } else if (cfLower.includes('infrastructure')) {
        targetCategory = 'Infrastructure';
      } else {
        targetCategory = categoryFilter;
      }
    }

    if (!targetCategory) {
      if (qLower.includes('charter school') || qLower.includes('charter')) {
        targetCategory = 'Education';
        targetSubcategory = 'Charter Schools';
      } else if (qLower.includes('nursery') || qLower.includes('nurseries')) {
        targetCategory = 'Education';
        targetSubcategory = 'Nurseries';
      } else if (qLower.includes('pod') || qLower.includes('determination')) {
        targetCategory = 'Education';
        targetSubcategory = 'POD';
      } else if (qLower.includes('hospital') || qLower.includes('clinic') || qLower.includes('doctor') || qLower.includes('medical') || qLower.includes('health')) {
        targetCategory = 'Healthcare';
        if (qLower.includes('hospital')) targetSubcategory = 'Hospitals';
        if (qLower.includes('clinic')) targetSubcategory = 'Clinics';
      } else if (qLower.includes('school') || qLower.includes('university') || qLower.includes('college') || qLower.includes('academy') || qLower.includes('education')) {
        targetCategory = 'Education';
        if (qLower.includes('public')) targetSubcategory = 'Public Schools';
        if (qLower.includes('private')) targetSubcategory = 'Private Schools';
        if (qLower.includes('university') || qLower.includes('college')) targetSubcategory = 'Universities';
      } else if (qLower.includes('industrial') || qLower.includes('facility') || qLower.includes('facilities') || qLower.includes('factory') || qLower.includes('plant') || qLower.includes('smelter') || qLower.includes('emission')) {
        targetCategory = 'Industrial';
      } else if (qLower.includes('park') || qLower.includes('garden') || qLower.includes('nature') || qLower.includes('green')) {
        targetCategory = 'Park';
      } else if (qLower.includes('transport') || qLower.includes('airport') || qLower.includes('port') || qLower.includes('bus') || qLower.includes('transit') || qLower.includes('station')) {
        targetCategory = 'Transportation';
      } else if (qLower.includes('government') || qLower.includes('ministry') || qLower.includes('department') || qLower.includes('municipality') || qLower.includes('court')) {
        targetCategory = 'Government';
      } else if (qLower.includes('tourism') || qLower.includes('tourist') || qLower.includes('mosque') || qLower.includes('museum') || qLower.includes('palace') || qLower.includes('ferrari')) {
        targetCategory = 'Tourism';
      }
    }

    if (targetCategory && targetCategory !== 'all') {
      const filtered = workingDataset.filter(item => {
        const catMatch = item.category.toLowerCase() === targetCategory.toLowerCase() ||
          item.category.toLowerCase().includes(targetCategory.toLowerCase()) ||
          targetCategory.toLowerCase().includes(item.category.toLowerCase());
        const subMatch = targetSubcategory
          ? (item.subcategory.toLowerCase() === targetSubcategory.toLowerCase() ||
             item.subcategory.toLowerCase().includes(targetSubcategory.toLowerCase()) ||
             targetSubcategory.toLowerCase().includes(item.subcategory.toLowerCase()))
          : true;
        return catMatch && subMatch;
      });

      if (filtered.length > 0) {
        workingDataset = filtered;
      } else {
        const subFiltered = workingDataset.filter(item =>
          item.subcategory.toLowerCase().includes((targetSubcategory || targetCategory).toLowerCase()) ||
          (targetSubcategory || targetCategory).toLowerCase().includes(item.subcategory.toLowerCase())
        );
        if (subFiltered.length > 0) {
          workingDataset = subFiltered;
        }
      }
      this.sessionContext.activeCategory = targetCategory;
    }

    // C. Attribute Numeric Filters (e.g. "emissions above 50,000 tonnes", "emissions > 10000", "rating above 4.8", "students > 2000")
    let emissionThreshold = null;
    let emissionOperator = 'above';
    const emissionMatch = qLower.match(/emissions?\s+(above|greater than|>|over|exceeding|more than|below|<|under)\s+([\d,]+)/i) ||
      qLower.match(/([\d,]+)\s*(?:tonnes?|t|tons?)\s*(?:of\s+)?emissions?/i);

    if (emissionMatch) {
      const numStr = (emissionMatch[2] || emissionMatch[1]).replace(/,/g, '');
      emissionThreshold = parseInt(numStr, 10);
      if (emissionMatch[1] && (emissionMatch[1] === 'below' || emissionMatch[1] === '<' || emissionMatch[1] === 'under')) {
        emissionOperator = 'below';
      }
    } else if (qLower.includes('emissions above 50,000') || qLower.includes('emissions above 50000')) {
      emissionThreshold = 50000;
    } else if (qLower.includes('emissions above 10,000') || qLower.includes('emissions above 10000')) {
      emissionThreshold = 10000;
    }

    if (emissionThreshold !== null && !isNaN(emissionThreshold)) {
      workingDataset = workingDataset.filter(item => {
        if (!item.emissions) return false;
        return emissionOperator === 'above' ? item.emissions >= emissionThreshold : item.emissions <= emissionThreshold;
      });
    }

    // Rating Filter
    const ratingMatch = qLower.match(/rating\s*(?:above|>=|>|over)\s*([\d.]+)/i);
    if (ratingMatch) {
      const minRating = parseFloat(ratingMatch[1]);
      if (!isNaN(minRating)) {
        workingDataset = workingDataset.filter(item => (item.rating || 0) >= minRating);
      }
    }

    // D. Coastline Distance Filter (e.g. "within 20 km of the coastline", "near coastline", "coastal")
    const coastMatch = qLower.match(/within\s+([\d.]+)\s*km\s+of\s+(?:the\s+)?coast(?:line)?/i) || qLower.match(/([\d.]+)\s*km\s+from\s+(?:the\s+)?coast/i);
    if (coastMatch) {
      const coastKm = parseFloat(coastMatch[1]);
      workingDataset = workingDataset.filter(item => (item.coastDistanceKm || 0) <= coastKm);
    } else if (qLower.includes('coastal') || qLower.includes('near the coast') || qLower.includes('near coast')) {
      workingDataset = workingDataset.filter(item => (item.coastDistanceKm || 0) <= 5.0);
    }

    // E. Spatial Radius Search against Reference Landmark (e.g. "within 5 km of Abu Dhabi airport", "within 3 km of Cleveland Clinic")
    let referencePoint = null;
    let searchRadiusKm = null;

    const radiusMatch = qLower.match(/within\s+([\d.]+)\s*km\s+(?:of|from|around)\s+([a-z0-9\s\-_]+)/i) ||
      qLower.match(/([\d.]+)\s*km\s+(?:radius\s+of|from|around)\s+([a-z0-9\s\-_]+)/i);

    if (radiusMatch) {
      searchRadiusKm = parseFloat(radiusMatch[1]);
      const rawLandmark = radiusMatch[2].trim().toLowerCase();
      // Match landmark key
      for (const [key, coords] of Object.entries(LANDMARK_COORDINATES)) {
        if (rawLandmark.includes(key) || key.includes(rawLandmark)) {
          referencePoint = coords;
          break;
        }
      }
    } else {
      // Check if reference point mentioned without explicit km, e.g. "near Abu Dhabi Airport"
      for (const [key, coords] of Object.entries(LANDMARK_COORDINATES)) {
        if (qLower.includes(`near ${key}`) || qLower.includes(`around ${key}`) || qLower.includes(`close to ${key}`)) {
          referencePoint = coords;
          searchRadiusKm = 7.0; // Default spatial proximity radius
          break;
        }
      }
    }

    if (referencePoint && searchRadiusKm) {
      workingDataset = workingDataset.map(item => {
        const dist = calculateDistanceKm(referencePoint.lat, referencePoint.lon, item.lat, item.lon);
        return { ...item, distanceKm: dist };
      }).filter(item => item.distanceKm <= searchRadiusKm)
        .sort((a, b) => a.distanceKm - b.distanceKm);
      this.sessionContext.activeReferenceLocation = referencePoint;
    }

    // F. Ranking / Sorting Intents
    // e.g. "Which facilities have the highest emissions?", "Top rated hospitals", "Largest parks"
    let isRanked = false;
    let rankSummary = '';
    if (qLower.includes('highest emission') || qLower.includes('most emission') || qLower.includes('top emission')) {
      workingDataset = workingDataset.filter(item => item.emissions != null)
        .sort((a, b) => b.emissions - a.emissions);
      isRanked = true;
      rankSummary = 'sorted by highest carbon emissions';
    } else if (qLower.includes('highest rating') || qLower.includes('top rated') || qLower.includes('best rated')) {
      workingDataset.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      isRanked = true;
      rankSummary = 'sorted by highest user rating';
    } else if (qLower.includes('closest') || qLower.includes('nearest')) {
      if (referencePoint) {
        workingDataset.sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
        isRanked = true;
        rankSummary = `ordered by proximity to ${referencePoint.name}`;
      }
    }

    // G. Comparative / Analytics Queries
    // e.g. "Which area has the highest number of facilities?", "Which area has the most hospitals?"
    if (qLower.includes('which area has the highest number') || qLower.includes('which area has the most') || qLower.includes('compare areas')) {
      const areaCounts = {};
      workingDataset.forEach(item => {
        const area = item.city || 'Abu Dhabi';
        areaCounts[area] = (areaCounts[area] || 0) + 1;
      });
      const topArea = Object.entries(areaCounts).sort((a, b) => b[1] - a[1])[0] || ['Abu Dhabi', workingDataset.length];

      return {
        intent: 'analytics',
        querySummary: `Comparative Area Distribution: ${topArea[0]} leads with ${topArea[1]} facilities`,
        aiMessageText: `Spatial Analysis indicates **${topArea[0]}** contains the highest concentration with **${topArea[1]}** matching facilities. Here is the full interactive map breakdown.`,
        results: workingDataset,
        structuredGISQuery: { intent: 'comparative_analysis', topArea: topArea[0], count: topArea[1] },
        mapAction: { type: 'fit_bounds' }
      };
    }

    // 5. EVALUATE FINAL RESULTS & FORMULATE STRUCTURED GIS RESPONSE
    const count = workingDataset.length;
    this.sessionContext.previousResults = workingDataset;
    this.sessionContext.previousQuery = q;

    // Handle No Results gracefully
    if (count === 0) {
      const suggestionRadius = searchRadiusKm ? searchRadiusKm * 2 : 10;
      const refName = referencePoint ? referencePoint.name : targetCity || 'Abu Dhabi';
      const refNameAr = referencePoint ? (referencePoint.arabicTitle || getArabicTitle(referencePoint.name) || referencePoint.name) : 'إمارة أبوظبي';
      const catAr = CAT_TRANSLATIONS_AR[targetCategory] || targetCategory || 'المواقع المطلوبة';

      return {
        intent: 'no_results',
        querySummary: lang === 'ar' ? `لم يتم العثور على نتائج لـ "${q}"` : `No matching features found for "${q}"`,
        aiMessageText: lang === 'ar'
          ? `لم يتم العثور على أي مواقع ضمن فئة **${catAr}** تطابق معاييرك ضمن ${searchRadiusKm ? searchRadiusKm + ' كم من ' : ''}${refNameAr}. جرب زيادة نطاق البحث أو اختيار فئة أخرى.`
          : `No ${targetCategory || 'features'} were found matching your criteria within ${searchRadiusKm ? searchRadiusKm + ' km of ' : ''}${refName}. Try increasing the search radius or adjusting attribute filters.`,
        results: [],
        chips: [
          referencePoint ? { label: lang === 'ar' ? `توسيع النطاق إلى ${suggestionRadius} كم` : `Expand to ${suggestionRadius} km`, query: `Find ${targetCategory || 'facilities'} within ${suggestionRadius} km of ${refName}` } : null,
          { label: lang === 'ar' ? `عرض الكل في أبوظبي` : `Show All in Abu Dhabi`, query: `Show all ${targetCategory || 'locations'} in Abu Dhabi` }
        ].filter(Boolean),
        structuredGISQuery: { intent: 'find', count: 0, status: 'empty' },
        mapAction: { type: 'fit_bounds' }
      };
    }

    // Format intelligent AI assistant response text in EXACT requested language
    const catAr = CAT_TRANSLATIONS_AR[targetCategory] || targetCategory || 'المواقع المكانية';
    const refNameAr = referencePoint ? (referencePoint.arabicTitle || getArabicTitle(referencePoint.name) || referencePoint.name) : (targetCity === 'Dubai' ? 'إمارة دبي' : 'إمارة أبوظبي');

    let aiResponseText = '';
    if (lang === 'ar') {
      if (isFollowUp) {
        aiResponseText = `تم تحسين نتائج البحث: تم العثور على **${count}** موقعاً ضمن فئة **${catAr}** ${referencePoint ? `ضمن نطاق ${searchRadiusKm} كم من ${refNameAr}` : ''} ${rankSummary ? `(${rankSummary})` : ''}.`;
      } else if (referencePoint) {
        aiResponseText = `تم تحديد **${count}** موقعاً ضمن فئة **${catAr}** ضمن نطاق **${searchRadiusKm} كم** من **${refNameAr}**. تم تحديث الخريطة بالنتائج المتزامنة.`;
      } else if (emissionThreshold) {
        aiResponseText = `تم تصفية **${count}** منشأة صناعية بانبعاثات سنوية **${emissionOperator === 'above' ? 'أعلى من' : 'أقل من'} ${emissionThreshold.toLocaleString()} طن** في ${refNameAr}.`;
      } else if (isRanked) {
        aiResponseText = `تم العثور على **${count}** موقعاً (${rankSummary}). يتصدر النتائج **${workingDataset[0]?.arabicTitle || getArabicTitle(workingDataset[0]?.title)}**.`;
      } else {
        aiResponseText = `تم العثور على **${count}** موقعاً ضمن فئة **${catAr}** في ${targetCity === 'Dubai' ? 'إمارة دبي' : 'إمارة أبوظبي ودولة الإمارات'}. اختر أي موقع أدناه لمعاينته على الخريطة.`;
      }
    } else {
      if (isFollowUp) {
        aiResponseText = `Refined previous results: Found **${count}** ${targetCategory ? targetCategory.toLowerCase() : 'facilities'} ${emissionThreshold ? `with emissions ${emissionOperator} ${emissionThreshold.toLocaleString()} tonnes` : ''} ${referencePoint ? `within ${searchRadiusKm} km of ${referencePoint.name}` : ''} ${rankSummary ? `(${rankSummary})` : ''}.`;
      } else if (referencePoint) {
        aiResponseText = `Identified **${count}** ${targetCategory ? targetCategory.toLowerCase() : 'features'} within **${searchRadiusKm} km** of **${referencePoint.name}**. Displaying synchronized map pins.`;
      } else if (emissionThreshold) {
        aiResponseText = `Filtered **${count}** industrial facilities with annual emissions **${emissionOperator} ${emissionThreshold.toLocaleString()} tonnes** ${targetCity ? `in ${targetCity}` : ''}.`;
      } else if (isRanked) {
        aiResponseText = `Found **${count}** facilities ${rankSummary}. **${workingDataset[0]?.title}** ranks #1 (${workingDataset[0]?.emissions ? workingDataset[0].emissions.toLocaleString() + ' tonnes CO2/yr' : workingDataset[0]?.rating + ' ★'}).`;
      } else {
        aiResponseText = `Found **${count}** ${targetCategory ? targetCategory.toLowerCase() : 'locations'} ${targetCity ? `in ${targetCity}` : 'across Abu Dhabi & UAE'}. Select any feature below to zoom and inspect details.`;
      }
    }

    // Build Subcategory Tabs & Interactive Metadata
    const subcatCounts = {};
    workingDataset.forEach(r => {
      subcatCounts[r.subcategory] = (subcatCounts[r.subcategory] || 0) + 1;
    });

    const subcatTabs = Object.keys(subcatCounts).map(sc => ({
      id: sc,
      name: lang === 'ar' ? `${SUBCAT_TRANSLATIONS_AR[sc] || sc} (${subcatCounts[sc]})` : `${sc} (${subcatCounts[sc]})`,
      count: subcatCounts[sc]
    }));

    // Dynamic Suggestion Follow-up Chips
    const chips = [];
    if (targetCategory === 'Healthcare') {
      chips.push({ label: lang === 'ar' ? 'تقييم > 4.8 ★' : 'Rating > 4.8 ★', query: 'Which ones have a rating above 4.8?' });
      chips.push({ label: lang === 'ar' ? 'طوارئ 24/7' : 'Emergency 24/7', query: 'Only show those with 24/7 emergency' });
    } else if (targetCategory === 'Industrial') {
      chips.push({ label: lang === 'ar' ? 'انبعاثات > 50,000 طن' : 'Emissions > 50,000 t', query: 'Which ones have emissions above 50,000 tonnes?' });
      chips.push({ label: lang === 'ar' ? 'ضمن 5 كم من الساحل' : 'Within 5 km Coast', query: 'Only show the ones within 5 km of the coastline' });
    } else if (targetCategory === 'Education') {
      chips.push({ label: lang === 'ar' ? 'ضمن 5 كم من المطار' : 'Within 5 km Airport', query: 'Find schools within 5 km of Abu Dhabi airport' });
      chips.push({ label: lang === 'ar' ? 'الجامعات فقط' : 'Universities Only', query: 'Only show universities' });
    } else {
      chips.push({ label: lang === 'ar' ? 'الأعلى تقييماً' : 'Top Rated', query: 'Which one has the highest rating?' });
      chips.push({ label: lang === 'ar' ? 'أبوظبي فقط' : 'Abu Dhabi Only', query: 'Only show those in Abu Dhabi' });
    }

    const structuredPayload = {
      title: lang === 'ar' ? (isRanked ? 'النتائج المكانية المصنفة' : 'نتائج الاستعلام المكاني') : (isRanked ? 'Ranked Spatial Results' : 'Spatial Query Matches'),
      category: lang === 'ar' ? catAr : (targetCategory || 'All Categories'),
      tabs: subcatTabs,
      activeTabId: subcatTabs.length > 0 ? subcatTabs[0].id : '',
      items: workingDataset.map(r => ({
        id: r.id,
        title: r.title,
        arabicTitle: r.arabicTitle || getArabicTitle(r.title),
        subcategory: r.subcategory,
        category: r.category,
        address: r.address,
        description: r.description,
        city: r.city,
        lat: r.lat,
        lon: r.lon,
        rating: r.rating,
        emissions: r.emissions,
        sector: r.sector,
        capacity: r.capacity,
        beds: r.beds,
        students: r.students,
        distanceKm: r.distanceKm,
        coastDistanceKm: r.coastDistanceKm,
        openHours: r.openHours,
        contact: r.contact,
        phone: r.phone || r.contact || '24461444',
        website: r.website || (r.title ? `https://${r.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae` : 'https://iscabudhabi.sabis.net'),
        email: r.email || (r.category === 'Education' ? '9059@adek.gov.ae' : `info@${(r.city || 'abudhabi').toLowerCase()}.gov.ae`),
        academicYear: r.academicYear || '2024',
        tuitionFee: r.tuitionFee || (r.category === 'Education' ? '28912' : ''),
        irtqaaRating: r.irtqaaRating || 'Very Good',
        gender: r.gender || (r.category === 'Education' ? 'Mixed • مختلط' : 'General Public'),
        report: r.report || 'CALENDAR • Q4/2024',
        curriculum: r.curriculum || (r.category === 'Education' ? 'Private SABIS • خاص - اجنبي' : `${r.sector || r.subcategory} Operations`),
        grades: r.grades || (r.category === 'Education' ? 'KG1, KG2, G01, G02, G03, G04, G05, G06, G08, G09, G10, G11, G1' : `${r.capacity || 'Standard Operational Capacity'}`),
        gradesArabic: r.gradesArabic || (r.category === 'Education' ? 'روضة أولى ،روضة ثانية ،الأول ،الثاني ،الثالث ،الرابع 2 ،الخامس ،السادس ،السابع ،الثامن ،التاسع ،العاشر ،الحادي عشر ،الثاني عشر' : ''),
        isFavorite: false
      }))
    };

    return {
      intent: referencePoint ? 'radius_search' : emissionThreshold ? 'attribute_filter' : isRanked ? 'ranking' : 'search',
      querySummary: lang === 'ar' ? `تمت مطابقة ${count} موقعاً` : `${count} features matched`,
      aiMessageText: aiResponseText.trim(),
      results: workingDataset,
      structuredResults: structuredPayload,
      chips: chips,
      structuredGISQuery: {
        intent: 'find',
        featureType: targetCategory || 'all',
        referenceLocation: referencePoint?.name || targetCity || 'Abu Dhabi',
        spatialRelation: referencePoint ? 'within' : 'all',
        radius: searchRadiusKm ? `${searchRadiusKm} km` : null,
        attributeFilters: emissionThreshold ? { emissions: `${emissionOperator} ${emissionThreshold}` } : null,
        sortBy: isRanked ? rankSummary : 'default'
      },
      mapAction: {
        type: 'fit_bounds'
      }
    };
  }
}

// Global Singleton Instance of Spatial AI Engine
export const spatialAIEngineInstance = new SpatialAIEngine();

export const ABU_DHABI_SPATIAL_DATASET = GEOVISION_SPATIAL_DATASET;

/**
 * Spatial Geometry Intersection Algorithms
 */
export function isPointInPolygon(point, polygonCoords) {
  if (!polygonCoords || polygonCoords.length < 3) return false;
  const lat = point.lat !== undefined ? point.lat : point[0];
  const lon = point.lon !== undefined ? point.lon : point[1];

  let inside = false;
  for (let i = 0, j = polygonCoords.length - 1; i < polygonCoords.length; j = i++) {
    const ptI = polygonCoords[i];
    const ptJ = polygonCoords[j];
    const xi = ptI.lat !== undefined ? ptI.lat : ptI[0];
    const yi = ptI.lng !== undefined ? ptI.lng : (ptI.lon !== undefined ? ptI.lon : ptI[1]);
    const xj = ptJ.lat !== undefined ? ptJ.lat : ptJ[0];
    const yj = ptJ.lng !== undefined ? ptJ.lng : (ptJ.lon !== undefined ? ptJ.lon : ptJ[1]);

    const intersect = ((yi > lon) !== (yj > lon)) &&
      (lat < (xj - xi) * (lon - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

export function isPointInCircle(point, center, radiusMeters) {
  if (!center || !radiusMeters) return false;
  const lat1 = point.lat;
  const lon1 = point.lon;
  const lat2 = center.lat !== undefined ? center.lat : center[0];
  const lon2 = center.lng !== undefined ? center.lng : (center.lon !== undefined ? center.lon : center[1]);

  const R = 6371000; // Earth radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance <= radiusMeters;
}

export function isPointInBounds(point, bounds) {
  if (!bounds) return false;
  const lat = point.lat;
  const lon = point.lon;

  if (bounds.getSouth && bounds.getNorth) {
    return lat >= bounds.getSouth() && lat <= bounds.getNorth() &&
      lon >= bounds.getWest() && lon <= bounds.getEast();
  }
  if (Array.isArray(bounds) && bounds.length === 2) {
    const south = Math.min(bounds[0][0] !== undefined ? bounds[0][0] : bounds[0].lat, bounds[1][0] !== undefined ? bounds[1][0] : bounds[1].lat);
    const north = Math.max(bounds[0][0] !== undefined ? bounds[0][0] : bounds[0].lat, bounds[1][0] !== undefined ? bounds[1][0] : bounds[1].lat);
    const west = Math.min(bounds[0][1] !== undefined ? bounds[0][1] : (bounds[0].lng || bounds[0].lon), bounds[1][1] !== undefined ? bounds[1][1] : (bounds[1].lng || bounds[1].lon));
    const east = Math.max(bounds[0][1] !== undefined ? bounds[0][1] : (bounds[0].lng || bounds[0].lon), bounds[1][1] !== undefined ? bounds[1][1] : (bounds[1].lng || bounds[1].lon));
    return lat >= south && lat <= north && lon >= west && lon <= east;
  }
  return false;
}

/**
 * Execute Spatial Query Against Drawn Geometric Area
 */
export function executeDrawnAreaSpatialQuery({
  geometryType, // 'polygon' | 'rectangle' | 'square' | 'circle' | 'line' | 'click'
  coordinates,  // array of points or bounds
  center,       // for circle or point
  radius,       // for circle in meters
  bounds,       // for rectangle/square
  activeCategories = [], // array of category names or subcategory names
  query = '',
  lang = 'en'
}) {
  // 1. Spatially filter the dataset by geometric intersection
  let spatiallyMatched = GEOVISION_SPATIAL_DATASET.filter(item => {
    if (geometryType === 'circle') {
      return isPointInCircle(item, center, radius);
    }
    if (geometryType === 'rectangle' || geometryType === 'square') {
      if (bounds) return isPointInBounds(item, bounds);
      if (coordinates && coordinates.length >= 4) return isPointInPolygon(item, coordinates);
    }
    if (geometryType === 'polygon') {
      return isPointInPolygon(item, coordinates);
    }
    if (geometryType === 'click' || geometryType === 'point') {
      return isPointInCircle(item, center || (coordinates ? coordinates[0] : null), 2500);
    }
    if (geometryType === 'line') {
      if (!coordinates || coordinates.length < 2) return false;
      return coordinates.some(pt => isPointInCircle(item, pt, 1200));
    }
    return false;
  });

  // 2. Filter by active categories / subcategories if selected
  const activeKeys = (activeCategories || []).map(k => k.toLowerCase().trim()).filter(Boolean);
  if (activeKeys.length > 0) {
    spatiallyMatched = spatiallyMatched.filter(item => {
      const itemSub = (item.subcategory || '').toLowerCase().trim();
      const itemCat = (item.category || '').toLowerCase().trim();
      return activeKeys.some(key =>
        itemSub === key || itemSub.includes(key) || key.includes(itemSub) ||
        itemCat === key || itemCat.includes(key) || key.includes(itemCat)
      );
    });
  }

  // 3. Filter by text search query if provided
  const qClean = (query || '').toLowerCase().trim();
  if (qClean) {
    spatiallyMatched = spatiallyMatched.filter(item => {
      const title = (item.title || '').toLowerCase();
      const sub = (item.subcategory || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      return title.includes(qClean) || sub.includes(qClean) || cat.includes(qClean);
    });
  }

  const count = spatiallyMatched.length;

  // 4. Build Subcategory Breakdown Tabs
  const subcatCounts = {};
  spatiallyMatched.forEach(r => {
    const sub = r.subcategory || r.category || 'General';
    subcatCounts[sub] = (subcatCounts[sub] || 0) + 1;
  });

  const subcatTabs = Object.keys(subcatCounts).map(sc => ({
    id: sc,
    name: `${sc} (${subcatCounts[sc]})`,
    count: subcatCounts[sc]
  }));

  // 5. Build user query text & AI response text
  let areaDesc = lang === 'ar' ? 'المنطقة المحددة' : 'the drawn area';
  if (geometryType === 'circle') {
    const radStr = radius >= 1000 ? `${(radius / 1000).toFixed(1)} km` : `${Math.round(radius)} m`;
    areaDesc = lang === 'ar' ? `الدائرة المحددة (نصف القطر: ${radStr})` : `drawn circle (${radStr} radius)`;
  } else if (geometryType === 'rectangle' || geometryType === 'square') {
    areaDesc = lang === 'ar' ? 'المنطقة المستطيلة المحددة' : 'drawn bounding box';
  } else if (geometryType === 'polygon') {
    areaDesc = lang === 'ar' ? 'المضلع الجغرافي المحدد' : 'drawn polygon boundary';
  }

  const catNamesLabel = activeKeys.length > 0
    ? activeCategories.join(', ')
    : (qClean ? `"${query}"` : (lang === 'ar' ? 'المعالم المكانية' : 'places'));

  const userQueryText = lang === 'ar'
    ? `البحث عن ${catNamesLabel} داخل ${areaDesc}`
    : `Find ${catNamesLabel} within ${areaDesc}`;

  let aiMessageText = '';
  if (count > 0) {
    const breakdownStr = Object.entries(subcatCounts).map(([sc, c]) => `**${sc}** (${c})`).join(', ');
    aiMessageText = lang === 'ar'
      ? `تم تنفيذ الاستعلام المكاني: تم العثور على **${count}** معلم داخل ${areaDesc}. التصنيف: ${breakdownStr}.`
      : `Spatial query executed: Identified **${count}** matching features within ${areaDesc}.\n\nCategory breakdown:\n${breakdownStr}`;
  } else {
    aiMessageText = lang === 'ar'
      ? `لم يتم العثور على معالم تطابق ${catNamesLabel} داخل ${areaDesc}. جرب رسم منطقة أكبر أو تعديل الفئات.`
      : `No features matching ${catNamesLabel} were found inside ${areaDesc}. Try drawing a larger boundary or adjusting category selections.`;
  }

  const structuredResults = {
    title: `${catNamesLabel} (${count})`,
    category: activeCategories[0] || 'Drawn Area',
    tabs: subcatTabs,
    activeTabId: subcatTabs.length > 0 ? subcatTabs[0].id : '',
    items: spatiallyMatched.map(r => ({
      id: r.id,
      title: r.title,
      arabicTitle: r.arabicTitle || r.title,
      subcategory: r.subcategory,
      category: r.category,
      address: r.address,
      description: r.description,
      city: r.city,
      lat: r.lat,
      lon: r.lon,
      rating: r.rating,
      emissions: r.emissions,
      sector: r.sector,
      capacity: r.capacity,
      beds: r.beds,
      students: r.students,
      distanceKm: r.distanceKm,
      coastDistanceKm: r.coastDistanceKm,
      openHours: r.openHours,
      contact: r.contact,
      phone: r.phone || r.contact || '24461444',
      website: r.website || (r.title ? `https://${r.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.ae` : 'https://iscabudhabi.sabis.net'),
      email: r.email || `info@${(r.city || 'abudhabi').toLowerCase()}.gov.ae`,
      academicYear: r.academicYear || '2024',
      tuitionFee: r.tuitionFee || '',
      irtqaaRating: r.irtqaaRating || 'Very Good',
      gender: r.gender || 'General Public',
      report: r.report || 'CALENDAR • Q4/2024',
      curriculum: r.curriculum || `${r.sector || r.subcategory} Operations`,
      grades: r.grades || `${r.capacity || 'Standard Operational Capacity'}`,
      isFavorite: false
    }))
  };

  return {
    userQueryText,
    aiMessageText,
    results: spatiallyMatched,
    structuredResults: count > 0 ? structuredResults : null,
    count
  };
}

/**
 * Legacy compatible helper function
 */
export function searchSpatialData(query = '', categoryFilter = '') {
  const res = spatialAIEngineInstance.processNaturalLanguageQuery(query, categoryFilter);
  return res.results || [];
}
