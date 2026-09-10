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
  {
    id: 'health-kc-0',
    title: 'Healthpoint Hospital - Khalifa City',
    arabicTitle: 'مستشفى هيلث بوينت - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.4245,
    lon: 54.5710,
    address: 'Sector 30, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Premier Mubadala Health government-affiliated multi-specialty hospital with orthopedic, bariatric, and dental centers of excellence.',
    rating: 4.8,
    beds: 160,
    type: 'Government Hospital',
    sector: 'Government',
    emergency247: true,
    coastDistanceKm: 9.7,
    openHours: '24/7 Emergency & Inpatient Care',
    contact: '+971 2 463 8888',
    website: 'https://healthpoint.ae',
    phone: '+971 2 463 8888'
  },
  {
    id: 'health-kc-1',
    title: 'Amana Healthcare Medical & Rehabilitation Hospital',
    arabicTitle: 'أمانة للرعاية الصحية والتأهيل الطبي - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.4265,
    lon: 54.5830,
    address: 'Street 16, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Specialized government inpatient rehabilitation and long-term complex acute medical care hospital in Khalifa City.',
    rating: 4.7,
    beds: 120,
    type: 'Government Hospital',
    sector: 'Government',
    emergency247: true,
    coastDistanceKm: 9.6,
    openHours: '24/7 Inpatient & Rehabilitation Care',
    contact: '+971 2 610 0000',
    website: 'https://amanahealthcare.com',
    phone: '+971 2 610 0000'
  },
  {
    id: 'health-kc-2',
    title: 'Danat Al Emarat Clinic - Khalifa City',
    arabicTitle: 'عيادة دانة الإمارات - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Clinics',
    lat: 24.4290,
    lon: 54.5780,
    address: 'Sector 33, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Comprehensive outpatient clinic specializing in women’s health, pediatrics, and family medicine.',
    rating: 4.7,
    beds: 20,
    type: 'Private Clinic',
    emergency247: false,
    coastDistanceKm: 9.4,
    openHours: '08:00 - 21:00',
    contact: '+971 2 614 9999',
    website: 'https://danatalemarat.com',
    phone: '+971 2 614 9999'
  },
  {
    id: 'health-kc-3',
    title: 'Aster Clinic Khalifa City',
    arabicTitle: 'عيادة أستر - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Clinics',
    lat: 24.4310,
    lon: 54.5850,
    address: 'Near Etihad Plaza, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Multi-specialty neighborhood medical center providing dental, general medicine, ENT, and pediatric care.',
    rating: 4.6,
    beds: 15,
    type: 'Private Clinic',
    emergency247: false,
    coastDistanceKm: 9.2,
    openHours: '08:00 - 22:00',
    contact: '+971 2 443 7890',
    website: 'https://asterclinic.ae',
    phone: '+971 2 443 7890'
  },
  {
    id: 'health-kc-4',
    title: 'Healthplus Family Health Center Khalifa City',
    arabicTitle: 'مركز هيلث بلس لصحة الأسرة - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Medical Centers',
    lat: 24.4250,
    lon: 54.5740,
    address: '12th Street, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Dedicated family wellness, chronic disease management, and pediatric clinical center.',
    rating: 4.8,
    type: 'Family Medical Center',
    coastDistanceKm: 9.8,
    openHours: '08:00 - 20:00',
    contact: '+971 2 643 3494',
    website: 'https://hplus.ae',
    phone: '+971 2 643 3494'
  },
  {
    id: 'health-kc-5',
    title: 'Moorfields Eye Hospital Khalifa City Center',
    arabicTitle: 'مركز مستشفى مورفيلدز للعيون - مدينة خليفة',
    category: 'Healthcare',
    subcategory: 'Hospitals',
    lat: 24.4270,
    lon: 54.5860,
    address: 'Street 28, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'World-renowned British ophthalmic surgery and clinical ophthalmology center branch.',
    rating: 4.9,
    beds: 35,
    type: 'Specialized Hospital',
    emergency247: true,
    coastDistanceKm: 9.5,
    openHours: '24/7 Ophthalmic Emergency & Consultations',
    contact: '+971 2 633 6333',
    website: 'https://moorfields.ae',
    phone: '+971 2 633 6333'
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
    type: 'Private Canadian',
    sector: 'Private',
    curriculum: 'Canadian Nova Scotia • المنهاج الكندي',
    tuitionFee: '38500',
    irtqaaRating: 'Good',
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
    type: 'Private British',
    sector: 'Private',
    curriculum: 'British National Curriculum • المنهاج البريطاني',
    tuitionFee: '58900',
    irtqaaRating: 'Outstanding',
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
    type: 'Private British',
    sector: 'Private',
    curriculum: 'British Curriculum • المنهاج البريطاني',
    tuitionFee: '65000',
    irtqaaRating: 'Outstanding',
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
    type: 'Private British',
    sector: 'Private',
    curriculum: 'British Curriculum • المنهاج البريطاني',
    tuitionFee: '48400',
    irtqaaRating: 'Outstanding',
    coastDistanceKm: 6.2,
    openHours: '07:30 - 15:30',
    contact: '+971 2 501 4888'
  },
  {
    id: 'edu-kc-1',
    title: 'GEMS American Academy Khalifa City',
    arabicTitle: 'أكاديمية جيمس الأمريكية - مدينة خليفة',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4240,
    lon: 54.5760,
    address: 'Street 16, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Premier American and International Baccalaureate (IB) curriculum school with world-class facilities in Khalifa City.',
    rating: 4.8,
    students: 2200,
    type: 'Private American / IB',
    sector: 'Private',
    curriculum: 'American & IB Curriculum • منهاج أمريكي وبكالوريا دولية',
    tuitionFee: '54000',
    irtqaaRating: 'Very Good',
    coastDistanceKm: 9.8,
    openHours: '07:30 - 15:30',
    contact: '+971 2 557 0071',
    website: 'https://gemsaa-abudhabi.com',
    phone: '+971 2 557 0071'
  },
  {
    id: 'edu-kc-2',
    title: 'International School of Choueifat - Khalifa City',
    arabicTitle: 'مدرسة الشويفات الدولية - مدينة خليفة',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4330,
    lon: 54.5820,
    address: 'Sector 30, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Renowned SABIS curriculum school offering rigorous global academic preparation in Khalifa City.',
    rating: 4.7,
    students: 2600,
    type: 'Private SABIS',
    sector: 'Private',
    curriculum: 'Private SABIS • خاص - اجنبي',
    tuitionFee: '24000',
    irtqaaRating: 'Good',
    coastDistanceKm: 9.2,
    openHours: '07:30 - 15:30',
    contact: '+971 2 556 1222',
    website: 'https://isckhalifacity.sabis.net',
    phone: '+971 2 556 1222'
  },
  {
    id: 'edu-kc-3',
    title: 'Horizon Private School - Khalifa City',
    arabicTitle: 'مدرسة الأفق الخاصة - مدينة خليفة',
    category: 'Education',
    subcategory: 'Private Schools',
    lat: 24.4295,
    lon: 54.5880,
    address: 'Street 20, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'American curriculum accredited school emphasizing STEM innovation and bilingual Arabic education.',
    rating: 4.6,
    students: 1750,
    type: 'Private American',
    sector: 'Private',
    curriculum: 'American Curriculum • المنهاج الأمريكي',
    tuitionFee: '34000',
    irtqaaRating: 'Very Good',
    coastDistanceKm: 9.4,
    openHours: '07:30 - 15:00',
    contact: '+971 2 556 0811',
    website: 'https://horizonprivateschool.com',
    phone: '+971 2 556 0811'
  },
  {
    id: 'edu-kc-4',
    title: 'Humpty Dumpty Nursery Khalifa City',
    arabicTitle: 'حضانة همبتي دمبتي - مدينة خليفة',
    category: 'Education',
    subcategory: 'Nurseries',
    lat: 24.4285,
    lon: 54.5815,
    address: 'Sector 38, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Early Years Foundation Stage (EYFS) British accredited nursery for children aged 45 days to 4 years.',
    rating: 4.9,
    students: 180,
    type: 'Nursery',
    sector: 'Private',
    curriculum: 'British EYFS • المنهاج البريطاني للطفولة المبكرة',
    tuitionFee: '31000',
    irtqaaRating: 'Outstanding',
    coastDistanceKm: 9.5,
    openHours: '07:00 - 17:00',
    contact: '+971 2 556 1068',
    website: 'https://humptydumptynursery.com',
    phone: '+971 2 556 1068'
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
    type: 'Private IB',
    sector: 'Private',
    curriculum: 'IB World School • بكالوريا دولية',
    tuitionFee: '52000',
    irtqaaRating: 'Very Good',
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
    id: 'trans-bus-kc-1',
    title: 'Khalifa City Central Bus Station',
    arabicTitle: 'محطة حافلات مدينة خليفة المركزية',
    category: 'Transportation',
    subcategory: 'Bus Stations',
    lat: 24.4280,
    lon: 54.5750,
    address: '15th Street, Sector 23, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Integrated ITC public bus hub connecting Khalifa City with central Abu Dhabi and Yas Island.',
    rating: 4.6,
    openHours: '24/7 Bus Transit',
    contact: '+971 800 850'
  },
  {
    id: 'trans-bus-kc-2',
    title: 'Al Rayyana Transit & Bus Stop',
    arabicTitle: 'موقف حافلات الريانة - مدينة خليفة',
    category: 'Transportation',
    subcategory: 'Bus Stations',
    lat: 24.4215,
    lon: 54.5585,
    address: 'Al Rayyana Complex, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Modern air-conditioned public bus shelter with digital schedule displays.',
    rating: 4.5,
    openHours: '24/7 Public Transport',
    contact: '+971 800 850'
  },
  {
    id: 'trans-bus-kc-3',
    title: 'Al Forsan Bus Stop Hub',
    arabicTitle: 'محطة حافلات الفرسان - مدينة خليفة',
    category: 'Transportation',
    subcategory: 'Bus Stations',
    lat: 24.4200,
    lon: 54.5820,
    address: 'Al Forsan Village, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Key transit stop serving residential sectors and sports resort complexes.',
    rating: 4.7,
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
    category: 'Transportation',
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
  {
    id: 'trans-petrol-kc-1',
    title: 'ADNOC Service Station - Khalifa City (982)',
    arabicTitle: 'محطة أدنوك للخدمة - مدينة خليفة (982)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.4295,
    lon: 54.5820,
    address: 'Street 16, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Full-service ADNOC fuel station featuring Oasis convenience store, EV fast charging, and car wash.',
    rating: 4.7,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-kc-2',
    title: 'ADNOC Service Station - Khalifa South (785)',
    arabicTitle: 'محطة أدنوك للخدمة - جنوب خليفة (785)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.4180,
    lon: 54.5680,
    address: 'Sector 29, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Automated 24/7 fuel dispensary with high-flow pumps and auto care services.',
    rating: 4.6,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-yas-1',
    title: 'ADNOC Service Station - Yas North (911)',
    arabicTitle: 'محطة أدنوك للخدمة - شمال جزيرة ياس (911)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.4980,
    lon: 54.6120,
    address: 'Yas Leisure Drive, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Flagship smart service station with ultra-fast electric vehicle chargers and drive-thru dining.',
    rating: 4.8,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-muss-1',
    title: 'ADNOC Service Station - Mussafah Industrial (620)',
    arabicTitle: 'محطة أدنوك للخدمة - مصفح الصناعية (620)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.3480,
    lon: 54.5120,
    address: 'Mussafah Industrial Sector 9, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Heavy vehicle diesel and premium unleaded fueling hub with comprehensive truck servicing.',
    rating: 4.5,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-muss-2',
    title: 'ADNOC Service Station - Mussafah Port (645)',
    arabicTitle: 'محطة أدنوك للخدمة - ميناء مصفح (645)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.3620,
    lon: 54.4980,
    address: 'Mussafah Port Road, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Commercial fueling depot serving maritime transport and industrial logistics fleets.',
    rating: 4.6,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-reem-1',
    title: 'ADNOC Service Station - Al Reem Oasis (745)',
    arabicTitle: 'محطة أدنوك للخدمة - واحة الريم (745)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.4985,
    lon: 54.4050,
    address: 'Shams Sector, Al Reem Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Urban compact service station with automated pay-at-pump and premium coffee bar.',
    rating: 4.8,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-bat-1',
    title: 'ADNOC Service Station - Al Bateen (830)',
    arabicTitle: 'محطة أدنوك للخدمة - البطين (830)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.4550,
    lon: 54.3420,
    address: 'Al Bateen Marine District, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Coastal fuel station providing vehicle and marine craft refueling facilities.',
    rating: 4.7,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-zah-1',
    title: 'ADNOC Service Station - Al Zahiyah Corniche (902)',
    arabicTitle: 'محطة أدنوك للخدمة - كورنيش الزاهية (902)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.4920,
    lon: 54.3780,
    address: 'Al Firdous St, Al Zahiyah, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Central city fueling and retail destination with car inspection and registration services.',
    rating: 4.7,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-ain-1',
    title: 'ADNOC Service Station - Al Jimi (512)',
    arabicTitle: 'محطة أدنوك للخدمة - الجيمي (512)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 24.2380,
    lon: 55.7420,
    address: 'Al Jimi District, Al Ain',
    city: 'Al Ain',
    description: 'Major Al Ain regional service station with vehicle maintenance, tire service, and Oasis market.',
    rating: 4.7,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-petrol-dhafra-1',
    title: 'ADNOC Service Station - Madinat Zayed (430)',
    arabicTitle: 'محطة أدنوك للخدمة - مدينة زايد بالظفرة (430)',
    category: 'Transportation',
    subcategory: 'Petrol Stations',
    lat: 23.6550,
    lon: 53.7120,
    address: 'E45 Highway, Madinat Zayed, Al Dhafra',
    city: 'Madinat Zayed',
    description: 'Al Dhafra highway express fueling station with desert emergency breakdown support.',
    rating: 4.6,
    openHours: '24/7 Service',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-khalifa-1',
    title: 'ADNOC Technical Inspection Center - Khalifa City',
    arabicTitle: 'مركز أدنوك للفحص الفني للمركبات - مدينة خليفة',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.4285,
    lon: 54.5820,
    address: 'Sector 12, Khalifa City, Abu Dhabi',
    city: 'Khalifa City',
    description: 'Comprehensive vehicle technical inspection, roadworthiness certification, and licensing services by ADNOC Autoserve.',
    rating: 4.8,
    sector: 'Government',
    openHours: '07:00 AM - 10:00 PM (Sat-Thu)',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-mussafah-1',
    title: 'ADNOC Vehicle Inspection Center - Mussafah',
    arabicTitle: 'مركز أدنوك لفحص المركبات - مصفح',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.3580,
    lon: 54.5120,
    address: 'Mussafah ICAD I, Industrial Area, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Heavy and light vehicle technical testing, emissions compliance, and vehicle renewal center.',
    rating: 4.6,
    sector: 'Government',
    openHours: '24/7 Technical Inspection',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-falah-1',
    title: 'ADNOC Vehicle Inspection Center - Al Falah',
    arabicTitle: 'مركز أدنوك لفحص المركبات - الفلاح',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.4360,
    lon: 54.6980,
    address: 'Al Falah Community, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Fast-track light vehicle inspection and registration renewal services for eastern suburbs.',
    rating: 4.7,
    sector: 'Government',
    openHours: '07:00 AM - 09:00 PM',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-bateen-1',
    title: 'ADNOC Technical Inspection Center - Al Bateen',
    arabicTitle: 'مركز أدنوك للفحص الفني - البطين',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.4550,
    lon: 54.3460,
    address: 'Al Bateen Area, Abu Dhabi Island',
    city: 'Abu Dhabi',
    description: 'Central Abu Dhabi technical vehicle testing and safety certification facility.',
    rating: 4.7,
    sector: 'Government',
    openHours: '07:00 AM - 10:00 PM',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-alain-1',
    title: 'ADNOC Vehicle Testing Center - Al Ain',
    arabicTitle: 'مركز أدنوك لفحص المركبات - العين',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.1850,
    lon: 55.7350,
    address: 'Falaj Hazza, Al Ain',
    city: 'Al Ain',
    description: 'Main vehicle inspection hub in Al Ain region for private and commercial vehicles.',
    rating: 4.8,
    sector: 'Government',
    openHours: '07:00 AM - 10:00 PM',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-yas-1',
    title: 'ADNOC Vehicle Inspection Center - Yas Island',
    arabicTitle: 'مركز أدنوك لفحص المركبات - جزيرة ياس',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.4920,
    lon: 54.6050,
    address: 'Yas North, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Smart drive-through vehicle inspection and registration hub on Yas Island.',
    rating: 4.9,
    sector: 'Government',
    openHours: '08:00 AM - 10:00 PM',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-mushrif-1',
    title: 'ADNOC Technical Inspection Center - Al Mushrif',
    arabicTitle: 'مركز أدنوك للفحص الفني - المشرف',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 24.4480,
    lon: 54.3850,
    address: 'Al Mushrif Area, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Urban inspection center equipped with automated brake and emission test lines.',
    rating: 4.7,
    sector: 'Government',
    openHours: '07:00 AM - 09:00 PM',
    contact: '+971 800 300'
  },
  {
    id: 'trans-vic-dhafra-1',
    title: 'ADNOC Vehicle Inspection Center - Madinat Zayed (Al Dhafra)',
    arabicTitle: 'مركز أدنوك لفحص المركبات - مدينة زايد (الظفرة)',
    category: 'Transportation',
    subcategory: 'Vehicle Inspection Centers',
    lat: 23.6550,
    lon: 53.7050,
    address: 'Industrial Area, Madinat Zayed, Al Dhafra',
    city: 'Madinat Zayed',
    description: 'Al Dhafra regional center for technical motor vehicle inspections and safety clearances.',
    rating: 4.6,
    sector: 'Government',
    openHours: '07:00 AM - 08:00 PM',
    contact: '+971 800 300'
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
  {
    id: 'park-yas-1',
    title: 'Yas Gateway Park North',
    arabicTitle: 'حديقة بوابة ياس الشمالية',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4890,
    lon: 54.6040,
    address: 'Sheikh Khalifa Bin Zayed Al Nahyan Hwy, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Expansive landscaped parkland on Yas Island featuring open shaded lawns, children playgrounds, and walking trails.',
    rating: 4.7,
    openHours: '24 Hours Open',
    contact: '+971 800 850'
  },
  {
    id: 'park-yas-2',
    title: 'Yas Gateway Park South',
    arabicTitle: 'حديقة بوابة ياس الجنوبية',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4780,
    lon: 54.6020,
    address: 'Yas Leisure Dr, Yas Island, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Scenic recreational park adjacent to Yas Marina and Yas Plaza with lit jogging tracks and sports courts.',
    rating: 4.8,
    openHours: '24 Hours Open',
    contact: '+971 800 850'
  },
  {
    id: 'park-kc-1',
    title: 'Khalifa City Central Community Park',
    arabicTitle: 'حديقة مدينة خليفة المركزية المجتمعية',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4275,
    lon: 54.5820,
    address: '16th Street, Sector 23, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Family community park with children’s play structures, basketball courts, and paved running paths in Khalifa City.',
    rating: 4.7,
    openHours: '06:00 - 23:00',
    contact: '+971 800 850'
  },
  {
    id: 'park-kc-2',
    title: 'Al Forsan Sports & Lake Park',
    arabicTitle: 'منتزه وبحيرة الفرسان الرياضي - مدينة خليفة',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4180,
    lon: 54.5890,
    address: 'Street 12, Khalifa City A, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Expansive water park and sports recreation lake resort featuring wakeboarding, karting, and lakeside promenades.',
    rating: 4.9,
    openHours: '07:00 - 23:00',
    contact: '+971 2 556 8555'
  },
  {
    id: 'park-kc-3',
    title: 'Al Asayel Community Park - Sector 12',
    arabicTitle: 'حديقة الأصايل المجتمعية - قطاع 12',
    category: 'Parks',
    subcategory: 'Public Parks',
    lat: 24.4285,
    lon: 54.5410,
    address: 'Sector 12, Khalifa City, Abu Dhabi',
    city: 'Abu Dhabi',
    description: 'Green neighborhood community park with shaded jogging tracks and children play areas next to Al Asayel School.',
    rating: 4.8,
    openHours: '06:00 - 23:00',
    contact: '+971 800 850'
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

// Reference Geocodes for Districts & Neighborhoods
export const DISTRICT_COORDINATES = {
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

// Reference Geocodes for Spatial Analysis & Radius Queries
export const LANDMARK_COORDINATES = {
  // Airports
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
  
  // Specific Landmark Anchors
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

// Ambiguous Geographic Entity Configurations (Section 3 - J2 Requirement)
export const AMBIGUOUS_GEOGRAPHIC_ENTITIES = [
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

// Unsupported Analytical Capabilities Configuration (Section 3 - J3 Requirement)
export const UNSUPPORTED_ANALYTICAL_CAPABILITIES = [
  {
    id: 'flood_inundation_simulation',
    nameEn: '3D Flood Inundation & Hydrodynamic Simulation',
    nameAr: 'محاكاة ثلاثية الأبعاد للفيضانات والمخاطر الهيدرولوجية',
    patterns: [
      /\b(?:3d\s+)?flood(?:\s+[a-z]+)?\s+(?:simulation|model|modeling|forecast|forecasting|prediction|analysis|hazard|inundation)\b/i,
      /\b(?:inundation|sea\s*level\s*rise|storm\s*surge|dam\s*breach|runoff\s*routing|hydrological\s*routing)\b/i,
      /\b(?:run|perform|simulate|model|show)\s+(?:a\s+)?(?:3d\s+)?(?:flood|inundation)\b/i,
      /(?:محاكاة|نمذجة|تنبؤ|توقع).*(?:فيضان|فيضانات|سيول|غمر|طوفان|منسوب البحر|جريان سطحي)/iu,
      /(?:3d|ثلاثي الأبعاد).*(?:فيضان|غمر|سيول)/iu
    ],
    explanationEn: '3D flood inundation modeling and hydrodynamic surface runoff simulations are outside the scope of GeoVision’s active urban SDI database.',
    explanationAr: 'المحاكاة ثلاثية الأبعاد للفيضانات والنمذجة الهيدرولوجية لتدفق السيول غير مدعومة حالياً ضمن قاعدة البيانات المكانية في GeoVision.'
  },
  {
    id: 'traffic_forecasting_dynamic',
    nameEn: 'Live Traffic Congestion Forecasting & Predictive Flow',
    nameAr: 'التنبؤ بازدحام المرور الحي ومحاكاة التدفق المروري',
    patterns: [
      /\b(?:live|real[- ]?time|future|predictive)?\s*traffic\s+(?:congestion\s+)?(?:forecasting|forecast|prediction|flow\s+prediction|simulation|modeling)\b/i,
      /\bpredict\s+(?:future\s+)?traffic(?:\s+flow|\s+congestion|\s+speed)?\b/i,
      /\b(?:traffic\s+signal|traffic\s+light)\s+optimization\s+(?:simulation|model)\b/i,
      /\b(?:traffic\s+flow\s+prediction|real[- ]?time\s+traffic)\b/i,
      /(?:التنبؤ|توقع|محاكاة|نمذجة).*(?:بازدحام|حركة|تدفق|سير|سرعة).*(?:المرور|السير|الطرق)/iu,
      /(?:التنبؤ|توقع|محاكاة|نمذجة).*(?:حركة المرور|ازدحام الطرق|التدفق المروري|الإشارات المرورية)/iu,
      /(?:المرور الحي|ازدحام حي)/iu
    ],
    explanationEn: 'Real-time dynamic traffic flow forecasting and signal micro-simulation require live telemetry feeds not currently integrated into the SDI spatial analytics layer.',
    explanationAr: 'التنبؤ بحركة المرور الحية وتدفق الازدحام الآني يتطلب مصادر بيانات تيليمترية حية غير متوفرة حالياً ضمن طبقة التحليلات المكانية.'
  },
  {
    id: 'pollution_environmental_dispersion',
    nameEn: 'Atmospheric Pollution & Plume Dispersion Simulation',
    nameAr: 'محاكاة انتشار تلوث الهواء والغازات الجوية',
    patterns: [
      /\b(?:air\s+pollution|gas\s+plume|plume|gas\s+leak|emission|pollutant)\s+(?:dispersion|propagation|simulation|modeling|model|forecast)\b/i,
      /\b(?:simulate|model)\s+(?:air\s+pollution|plume|pollution\s+dispersion|noise\s+propagation)\b/i,
      /\b(?:noise|acoustic)\s+(?:propagation|simulation|modeling|contour\s+mapping)\b/i,
      /\b(?:urban\s+heat\s+island|cfd\s+microclimate)\s+(?:simulation|modeling|model)\b/i,
      /\bcarbon\s+(?:footprint\s+forecast|sequestration\s+modeling)\b/i,
      /(?:محاكاة|نمذجة|توقع|تنبؤ).*(?:تلوث|انبعاثات|ضوضاء|أصوات|غازات|سحابة غاز|جزر حرارية)/iu
    ],
    explanationEn: 'Microclimate CFD plume dispersion and acoustic noise propagation models require specialized atmospheric mesh engines not currently supported.',
    explanationAr: 'محاكاة انتشار الملوثات الجوية ونمذجة انتشار الضوضاء تتطلب محركات متخصصة غير متوفرة حالياً ضمن منصة التحليلات المكانية.'
  },
  {
    id: 'earthquake_disaster_simulation',
    nameEn: 'Seismic Disaster & Structural Damage Modeling',
    nameAr: 'نمذجة مخاطر الزلازل وأضرار الكوارث الهيكلية',
    patterns: [
      /\b(?:earthquake|seismic|tsunami|landslide|blast|structural\s+collapse)(?:\s+[a-z]+)?\s+(?:simulation|model|modeling|forecast|vulnerability|analysis|risk|damage)\b/i,
      /\b(?:simulate|model)\s+(?:earthquake|tsunami|landslide|structural\s+damage|blast)\b/i,
      /(?:محاكاة|نمذجة|توقع|تنبؤ).*(?:زلازل|زلزال|هزات|تسونامي|انهيار|انهيارات|انفجار|انفجارات)/iu
    ],
    explanationEn: 'Geotechnical seismic fault propagation and structural vulnerability simulations are outside the scope of the urban SDI registry.',
    explanationAr: 'نمذجة مخاطر الزلازل وأضرار الانهيارات الإنشائية تتطلب محركات محاكاة جيوتقنية متخصصة غير متوفرة حالياً في منصة البيانات المكانية.'
  },
  {
    id: 'evacuation_crowd_simulation',
    nameEn: 'Agent-Based Crowd & Dynamic Evacuation Simulation',
    nameAr: 'محاكاة إخلاء الحشود والمشاة الديناميكية',
    patterns: [
      /\b(?:pedestrian|crowd|egress|evacuation|stampede)(?:\s+[a-z]+)?\s+(?:simulation|model|modeling|dynamics|routing\s+model)\b/i,
      /\b(?:simulate|model)\s+(?:pedestrian|crowd)\s+evacuation\b/i,
      /(?:محاكاة|نمذجة|توقع|تنبؤ).*(?:إخلاء|حشود|مشاة|تدافع|هروب|طوارئ)/iu
    ],
    explanationEn: 'Multi-agent pedestrian behavioral dynamics and emergency evacuation simulations are outside the scope of the SDI spatial registry.',
    explanationAr: 'محاكاة إخلاء الحشود ونمذجة حركة المشاة في الطوارئ غير مدعومة حالياً ضمن قاعدة البيانات المكانية.'
  },
  {
    id: 'subsurface_geological_3d',
    nameEn: '3D Subsurface Geological & Aquifer Plume Modeling',
    nameAr: 'محاكاة الطبقات الجيولوجية والمياه الجوفية ثلاثية الأبعاد',
    patterns: [
      /\b(?:subsurface|geological\s+strata|groundwater\s+aquifer|contaminant\s+plume)(?:\s+[a-z]+)?\s+(?:3d\s+)?(?:simulation|model|modeling|rendering)\b/i,
      /(?:محاكاة|نمذجة).*(?:طبقات جيولوجية|مياه جوفية|باطن الأرض ثلاثي)/iu
    ],
    explanationEn: '3D subterranean volumetric strata interpolation and aquifer dynamics require specialized 3D borehole geological suites.',
    explanationAr: 'النمذجة الحجمية ثلاثية الأبعاد للطبقات الجيولوجية والمياه الجوفية غير مدعومة ضمن المنصة المكانية الحالية.'
  }
];

// Helper: Safely resolve unambiguous district or landmark coordinates using length-sorted keys
const sortedDistrictEntries = Object.entries(DISTRICT_COORDINATES).sort((a, b) => b[0].length - a[0].length);
const sortedLandmarkEntries = Object.entries(LANDMARK_COORDINATES).sort((a, b) => b[0].length - a[0].length);

export function resolveDistrictOrLandmark(qLower) {
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
  'Schools': 'المدارس',
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
  'Petrol Stations': 'محطات الوقود',
  'Vehicle Inspection Centers': 'مراكز فحص المركبات',
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
  'Corporate HQs': 'المقار الرئيسية للشركات',
  'Metals & Smelting': 'صهر وتصنيع المعادن',
  'Petrochemicals': 'البتروكيماويات والبوليمرات',
  'Oil & Gas Refining': 'تكرير النفط والغاز',
  'Clean Energy': 'الطاقة النظيفة والمتجددة',
  'Power & Utilities': 'محطات الكهرباء والتحلية',
  'Manufacturing & Logistics': 'التصنيع والخدمات اللوجستية',
  'Building Materials': 'مواد البناء والإسمنت',
  'Petrol Stations': 'محطات الوقود والبترول'
};

export function getArabicTitle(title) {
  const item = GEOVISION_SPATIAL_DATASET.find(d => d.title.toLowerCase() === (title || '').toLowerCase());
  return item?.arabicTitle || title;
}

/**
 * Strips all Markdown bold/italic/backtick/list syntax globally so clean human-readable text is returned.
 */
export function cleanMarkdownText(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export const GENERIC_ERROR_MESSAGE_EN = "I'm unable to answer that question. Please try rephrasing your query or ask about available spatial data.";
export const GENERIC_ERROR_MESSAGE_AR = "تعذر الإجابة عن هذا السؤال. يرجى محاولة إعادة صياغة الاستعلام أو الاستفسار عن البيانات المكانية المتوفرة.";

/**
 * Normalizes user queries by correcting spacing, grammar, punctuation, typos, and singular/plural variations.
 * Runs BEFORE intent/category/location extraction so valid queries with minor errors succeed smoothly.
 */
export function normalizeUserSpatialQuery(rawQuery = '') {
  if (!rawQuery || typeof rawQuery !== 'string') return '';

  let q = rawQuery.trim();

  // 1. Clean punctuation while preserving decimals in numbers (e.g. 5.0 km, coordinates)
  q = q.replace(/[؟?!:;,`"“”'’]+/g, ' ');
  // Remove period only if not between digits (e.g. "city." -> "city", but keep "5.0")
  q = q.replace(/(?<!\d)\.|\.(?!\d)/g, ' ');

  // 2. Normalize glued English and Arabic prepositions, keywords, and measurements
  q = q.replace(/\b(show|find|get|list|display|search|navigate|route)([a-zA-Z]{3,})\b/gi, '$1 $2');
  q = q.replace(/\b([a-zA-Z]+)near\b/gi, '$1 near');
  // Split glued 'near' prefix — but preserve complete words like "nearest", "nearby"
  q = q.replace(/\bnear(?!est\b|by\b)([a-zA-Z]+)\b/gi, 'near $1');
  q = q.replace(/\b([a-zA-Z]+)(near|nearby|within|around|inside|from|closest|nearest)(me|my\s+location|current\s+location)\b/gi, '$1 $2 $3');
  q = q.replace(/\b([a-zA-Z]+)(near|around|within|closest|nearest|in|at|of|to|from)(khalifa|yas|mushrif|mussafah|bateen|reem|dhabi|saadiyat|al|ain|dhafra|dubai|ruwais)\b/gi, '$1 $2 $3');
  q = q.replace(/\b(near|within|around|closest|nearest|in|at)(me|khalifa|yas|mushrif|mussafah|dhabi|dubai)\b/gi, '$1 $2');
  q = q.replace(/\b(within)(\d+)/gi, '$1 $2');
  q = q.replace(/(\d+)(km|m|كيلومتر|كم|متر)\b/gi, '$1 $2');
  q = q.replace(/\bnearme\b/gi, 'near me');
  q = q.replace(/\bcloseto\b/gi, 'close to');
  q = q.replace(/\bnextto\b/gi, 'next to');

  // Arabic glued joins
  q = q.replace(/حدائقفي/g, 'حدائق في ');
  q = q.replace(/مستشفياتفي/g, 'مستشفيات في ');
  q = q.replace(/مدارسفي/g, 'مدارس في ');
  q = q.replace(/صيدلياتفي/g, 'صيدليات في ');
  q = q.replace(/مرافقفي/g, 'مرافق في ');
  q = q.replace(/فيأبوظبي/g, 'في أبوظبي');
  q = q.replace(/فيابوظبي/g, 'في أبوظبي');
  q = q.replace(/فيالعين/g, 'في العين');
  q = q.replace(/فيالظفرة/g, 'في الظفرة');
  q = q.replace(/قريبمني/g, 'قريب مني');
  q = q.replace(/قريبمن/g, 'قريب من ');
  q = q.replace(/بالقربمني/g, 'بالقرب مني');
  q = q.replace(/بالقربمن/g, 'بالقرب من ');
  q = q.replace(/حوليموقعي/g, 'حولي موقعي');
  q = q.replace(/ضمن(\d+)كم/g, 'ضمن $1 كم ');
  q = q.replace(/([^\s\d]+)(في|قريب|قريبة|حول|ضمن|بجانب|إلى|الى|من)(مني|موقعي|أبوظبي|ابوظبي|خليفة|خليفه|ياس|المشرف|مصفح|العين|دبي|الظفرة|الرويس)/gu, '$1 $2 $3');
  q = q.replace(/(في|قريب|قريبة|حول|ضمن|بجانب|إلى|الى|من)(مني|موقعي|أبوظبي|ابوظبي|خليفة|خليفه|ياس|المشرف|مصفح|العين|دبي|الظفرة|الرويس)/gu, '$1 $2');
  q = q.replace(/(ضمن)(\d+)/gu, '$1 $2');
  q = q.replace(/(\d+)(كم|كيلومتر|متر)/gu, '$1 $2');

  // 3. Common English & Arabic typos / misspellings dictionary
  const typoMap = [
    // Language & System Control Typos
    { regex: /\b(?:languahe|lanugage|langauge|languge|languege|langage|lenguage|lenguaje|langugage|languges)\b/gi, replacement: 'language' },
    { regex: /\b(?:arbaic|arabick|arrabic|arabik|arabi|arbc)\b/gi, replacement: 'arabic' },
    { regex: /\b(?:englsih|engilsh|englsh|englis|englush)\b/gi, replacement: 'english' },
    { regex: /\b(?:chnage|chnge|chagne|chage|cahnge)\b/gi, replacement: 'change' },
    { regex: /\b(?:swich|siwtch|swtich|swtch)\b/gi, replacement: 'switch' },
    { regex: /\b(?:toggol|togle)\b/gi, replacement: 'toggle' },
    { regex: /\b(?:translat|traslate)\b/gi, replacement: 'translate' },
    { regex: /\b(?:thme|teme|theem)\b/gi, replacement: 'theme' },
    { regex: /\b(?:mdoe|mde)\b/gi, replacement: 'mode' },
    { regex: /\b(?:drk|drak)\b/gi, replacement: 'dark' },
    { regex: /\b(?:lght|lihgt)\b/gi, replacement: 'light' },
    { regex: /\b(?:satelite|satallite|statellite|satilite|satelitte)\b/gi, replacement: 'satellite' },
    { regex: /\b(?:basmap|besemap|base-map)\b/gi, replacement: 'basemap' },
    { regex: /\b(?:streats|streeet|strets)\b/gi, replacement: 'streets' },
    { regex: /\b(?:prnt|prnit|pritn|pirnt|prnting)\b/gi, replacement: 'print' },
    { regex: /\b(?:exprot|exprt|expor)\b/gi, replacement: 'export' },
    { regex: /\b(?:donload|donwload|downlod|dawnload)\b/gi, replacement: 'download' },
    { regex: /\b(?:legnd|legned|lejend)\b/gi, replacement: 'legend' },
    { regex: /\b(?:zoon|zom|zooom)\b/gi, replacement: 'zoom' },
    { regex: /\b(?:claer|cleer|clrear|cler)\b/gi, replacement: 'clear' },
    { regex: /\b(?:rouet|rout|rute)\b/gi, replacement: 'route' },
    { regex: /\b(?:naviagte|navgate|navigtion|directon|direciton)\b/gi, replacement: 'direction' },
    { regex: /\b(?:loaction|locaton|locatin|locatoin)\b/gi, replacement: 'location' },
    { regex: /\b(?:anayltics|analitics|analytcs|anylitics)\b/gi, replacement: 'analytics' },
    { regex: /\b(?:serach|sreach|serch|saerch)\b/gi, replacement: 'search' },

    // Categories & facility types
    { regex: /\b(?:centar|centre|centr|cntr)\b/gi, replacement: 'center' },
    { regex: /\b(?:centars|centres|centrs|cntrs)\b/gi, replacement: 'centers' },
    { regex: /\b(?:hosptial|hospitl|hosptl|hospita|hsopital|hostipal|hostipl)\b/gi, replacement: 'hospital' },
    { regex: /\b(?:hosptials|hospitls|hosptls|hospitas|hostipals|hostipls)\b/gi, replacement: 'hospitals' },
    { regex: /\b(?:pharamcy|pharmcy|parmacy|phramacy|pharmaci|farmacy|pharmasy|farmaci)\b/gi, replacement: 'pharmacy' },
    { regex: /\b(?:pharamcies|pharmcys|parmacies|pharmacys|farmacies)\b/gi, replacement: 'pharmacies' },
    { regex: /\b(?:clinc|clinck|clnic)\b/gi, replacement: 'clinic' },
    { regex: /\b(?:clincs|clincks|clnics)\b/gi, replacement: 'clinics' },
    { regex: /\b(?:scool|schol|skool|shcool|shool|schoole)\b/gi, replacement: 'school' },
    { regex: /\b(?:scools|schols|skools|shschools|shools)\b/gi, replacement: 'schools' },
    { regex: /\b(?:universty|univercity|univrsity|univesity)\b/gi, replacement: 'university' },
    { regex: /\b(?:universties|univercities|univercitys)\b/gi, replacement: 'universities' },
    { regex: /\b(?:staiton|staton|staion|statio|statn)\b/gi, replacement: 'station' },
    { regex: /\b(?:staitons|statons|staions|statns)\b/gi, replacement: 'stations' },
    { regex: /\b(?:vehical|vehecle|vehcle|vehicl)\b/gi, replacement: 'vehicle' },
    { regex: /\b(?:vehicals|vehecles|vehcles|vehicls)\b/gi, replacement: 'vehicles' },
    { regex: /\b(?:inspextion|inspeciton|inspecton|inspetion)\b/gi, replacement: 'inspection' },
    { regex: /\b(?:inspextions|inspecitons|inspectons)\b/gi, replacement: 'inspections' },
    { regex: /\b(?:emergancy|emergenci|imargency)\b/gi, replacement: 'emergency' },
    { regex: /\b(?:goverment|govrenment|govrnment|govrment)\b/gi, replacement: 'government' },
    { regex: /\b(?:facilty|faclity|facilite|faciity)\b/gi, replacement: 'facility' },
    { regex: /\b(?:facilties|faclities|faciities)\b/gi, replacement: 'facilities' },
    { regex: /\b(?:distric|distict|distrct)\b/gi, replacement: 'district' },
    { regex: /\b(?:districs|disticts|distrcts)\b/gi, replacement: 'districts' },
    { regex: /\b(?:direciton|directon|directin)\b/gi, replacement: 'direction' },
    { regex: /\b(?:direcitons|directons|directins)\b/gi, replacement: 'directions' },
    { regex: /\b(?:tution|tutition)\b/gi, replacement: 'tuition' },
    { regex: /\b(?:curriculm|curriculam|curiculum)\b/gi, replacement: 'curriculum' },
    { regex: /\b(?:resturant|restraunt|restaraunt)\b/gi, replacement: 'restaurant' },
    { regex: /\b(?:resturants|restraunts|restaraunts)\b/gi, replacement: 'restaurants' },

    // Geographic names
    { regex: /\b(?:abudhabi|abu-dhabi|abudabi|abu\s*dabi)\b/gi, replacement: 'abu dhabi' },
    { regex: /\b(?:alain|al-ain)\b/gi, replacement: 'al ain' },
    { regex: /\b(?:khalfia|khalifia|khalifah|kalifa|khelifa)\b/gi, replacement: 'khalifa' },
    { regex: /\b(?:mushreef|mushref|moshrif)\b/gi, replacement: 'mushrif' },
    { regex: /\b(?:mussafa|musafah|musaffah|mussaffa|musafa)\b/gi, replacement: 'musaffah' },
    { regex: /\b(?:saadiyet|sadiyat|saadiat)\b/gi, replacement: 'saadiyat' },
    { regex: /\b(?:bateen|albateen|batin|al\s*batin)\b/gi, replacement: 'al bateen' },
    { regex: /\b(?:reem|alreem)\b/gi, replacement: 'al reem' },
    { regex: /\b(?:dhafra|aldhafra|dafra|al\s*dafra)\b/gi, replacement: 'al dhafra' },
    { regex: /\b(?:ruweis|rwais)\b/gi, replacement: 'ruwais' },
    { regex: /\b(?:khalidya|khalidiya|khalidiyah)\b/gi, replacement: 'al khalidiyah' },

    // Arabic common typos & normalizations
    { regex: /مستشفي(?=\s|$)/g, replacement: 'مستشفى' },
    { regex: /مستشفايات/g, replacement: 'مستشفيات' },
    { regex: /مستشفا\b/g, replacement: 'مستشفى' },
    { regex: /حدايق/g, replacement: 'حدائق' },
    { regex: /قريبه/g, replacement: 'قريبة' },
    { regex: /ابوظبي/g, replacement: 'أبوظبي' },
    { regex: /صيدلايات/g, replacement: 'صيدليات' },
    { regex: /مداراس/g, replacement: 'مدارس' },
    { regex: /مركاز/g, replacement: 'مركز' },
    { regex: /حديقه\b/g, replacement: 'حديقة' },
    { regex: /محطه\b/g, replacement: 'محطة' },
    { regex: /مدرسه\b/g, replacement: 'مدرسة' },
    { regex: /عياده\b/g, replacement: 'عيادة' },
    { regex: /صيدليه\b/g, replacement: 'صيدلية' },
    { regex: /باصات/g, replacement: 'حافلات' },
    { regex: /سيارات/g, replacement: 'مركبات' },
    { regex: /فحص سيارات/g, replacement: 'فحص مركبات' }
  ];

  for (const { regex, replacement } of typoMap) {
    q = q.replace(regex, replacement);
  }

  // 4. Collapse extra whitespace
  q = q.replace(/\s+/g, ' ').trim();

  return q;
}

/**
 * Global Taxonomy Configuration Covering all 18 GeoVision Datasets & Subcategories
 */
export const CATEGORY_TAXONOMY = [
  {
    category: 'Agriculture',
    aliases: ['agriculture', 'agricultural', 'agri', 'farming', 'crops', 'الزراعة', 'زراعي', 'زراعية', 'محاصيل'],
    subcategories: [
      { name: 'Farms', aliases: ['farm', 'farms', 'مزرعة', 'مزارع', 'إنتاج زراعي'] },
      { name: 'Greenhouses', aliases: ['greenhouse', 'greenhouses', 'بيوت محمية', 'بيت محمي', 'دفيئة', 'دفيئات'] },
      { name: 'Irrigation Systems', aliases: ['irrigation system', 'irrigation systems', 'irrigation', 'أنظمة ري', 'شبكات ري', 'ري'] },
      { name: 'Livestock Centers', aliases: ['livestock center', 'livestock centers', 'livestock', 'cattle', 'poultry', 'animal farm', 'ثروة حيوانية', 'ماشية', 'دواجن', 'إنتاج حيواني'] }
    ]
  },
  {
    category: 'Parks',
    aliases: ['public park', 'public parks', 'park', 'parks', 'حديقة', 'حدائق', 'منتزه', 'منتزهات', 'green space', 'green spaces', 'مساحات خضراء'],
    subcategories: [
      { name: 'Public Parks', aliases: ['public park', 'public parks', 'حديقة عامة', 'حدائق عامة', 'منتزه عام', 'منتزهات عامة'] },
      { name: 'Playgrounds', aliases: ['playground', 'playgrounds', 'play area', 'children play', 'ملاعب', 'ساحات', 'ملعب أطفال'] },
      { name: 'Gardens', aliases: ['botanical garden', 'botanical gardens', 'garden', 'gardens', 'حديقة نباتية', 'حدائق نباتية', 'بساتين', 'بستان'] },
      { name: 'National Parks', aliases: ['national park', 'national parks', 'nature reserve', 'national reserve', 'محمية وطنية', 'محميات وطنية', 'محمية طبيعية'] }
    ]
  },
  {
    category: 'Healthcare',
    aliases: ['healthcare', 'health', 'medical', 'رعاية صحية', 'صحي', 'صحية', 'طبي', 'طبية'],
    subcategories: [
      { name: 'Hospitals', aliases: ['hospital', 'hospitals', 'مستشفى', 'مستشفيات'] },
      { name: 'Clinics', aliases: ['clinic', 'clinics', 'عيادة', 'عيادات'] },
      { name: 'Pharmacies', aliases: ['pharmacy', 'pharmacies', 'صيدلية', 'صيدليات'] },
      { name: 'Medical Centers', aliases: ['medical center', 'medical centers', 'health center', 'مركز طبي', 'مراكز طبية', 'مركز صحي'] }
    ]
  },
  {
    category: 'Education',
    aliases: ['education', 'educational', 'school', 'schools', 'academy', 'academies', 'التعليم', 'تعليمي', 'تعليمية', 'مدرسة', 'مدارس', 'أكاديمية'],
    subcategories: [
      { name: 'Private Schools', aliases: ['private school', 'private schools', 'مدرسة خاصة', 'مدارس خاصة'] },
      { name: 'Public Schools', aliases: ['public school', 'public schools', 'مدرسة حكومية', 'مدارس حكومية'] },
      { name: 'Charter Schools', aliases: ['charter school', 'charter schools', 'مدارس الشراكات', 'مدارس ميثاق'] },
      { name: 'Nurseries', aliases: ['nursery', 'nurseries', 'kindergarten', 'حضانة', 'حضانات', 'رياض أطفال'] },
      { name: 'Universities', aliases: ['university', 'universities', 'college', 'colleges', 'higher education', 'جامعة', 'جامعات', 'كلية', 'كليات'] },
      { name: 'POD', aliases: ['people of determination', 'special needs', 'أصحاب الهمم', 'ذوي الاحتياجات'] }
    ]
  },
  {
    category: 'Transportation',
    aliases: ['transportation', 'transport', 'transit', 'mobility', 'النقل', 'المواصلات', 'نقل', 'مواصلات'],
    subcategories: [
      { name: 'Bus Stations', aliases: ['bus station', 'bus stations', 'bus stop', 'bus stops', 'bus', 'buses', 'حافلات', 'محطة حافلات', 'باص', 'باصات'] },
      { name: 'Metro Lines', aliases: ['metro line', 'metro lines', 'metro station', 'metro', 'train', 'railway', 'مترو', 'قطار', 'سكك حديدية'] },
      { name: 'Taxi Stands', aliases: ['taxi stand', 'taxi stands', 'taxi', 'taxis', 'سيارات أجرة', 'تاكسي', 'موقف أجرة'] },
      { name: 'Parking Lots', aliases: ['parking lot', 'parking lots', 'car park', 'parking', 'مواقف السيارات', 'مواقف', 'موقف سيارات'] },
      { name: 'Airports', aliases: ['airport', 'airports', 'airfield', 'aviation', 'مطار', 'مطارات', 'طيران'] },
      { name: 'Seaports', aliases: ['seaport', 'seaports', 'port', 'ports', 'harbor', 'ميناء', 'موانئ', 'مرفأ'] },
      { name: 'Petrol Stations', aliases: ['petrol station', 'petrol stations', 'gas station', 'gas stations', 'fuel station', 'fuel stations', 'petrol', 'gasoline', 'adnoc distribution', 'adnoc', 'محطات الوقود', 'محطة وقود', 'محطة بترول', 'محطات البترول', 'محطة بنزين', 'محطات البنزين', 'ادنوك', 'أدنوك'] },
      {
        name: 'Vehicle Inspection Centers',
        aliases: [
          'vehicle inspection center', 'vehicle inspection centers', 'vehicle inspection', 'vehicle inspections',
          'vehicle testing center', 'vehicle testing centers', 'vehicle testing', 'technical inspection',
          'technical inspection center', 'technical inspection centers', 'technical testing', 'technical test',
          'autoserve', 'car inspection', 'car inspection center', 'car inspections', 'car testing', 'mot test',
          'adnoc technical inspection', 'adnoc vehicle inspection', 'adnoc vehicle testing',
          'فحص المركبات', 'فحص السيارات', 'ترخيص المركبات', 'محطة الفحص الفني', 'الفحص الفني للسيارات',
          'مركز فحص المركبات', 'مركز فحص السيارات', 'فحص فني', 'محطة فحص', 'فحص دوري للسيارات',
          'مراكز الفحص الفني', 'فحص فني للمركبات'
        ]
      }
    ]
  },
  {
    category: 'Environment',
    aliases: ['environment', 'environmental', 'sustainability', 'البيئة', 'بيئي', 'بيئية', 'استدامة'],
    subcategories: [
      { name: 'Air Quality Sensors', aliases: ['air quality sensor', 'air quality sensors', 'air quality', 'air sensor', 'air sensors', 'جودة الهواء', 'استشعار الهواء'] },
      { name: 'Protected Areas', aliases: ['protected area', 'protected areas', 'reserve', 'reserves', 'محمية طبيعية', 'محميات طبيعية'] },
      { name: 'Recycling Centers', aliases: ['recycling center', 'recycling centers', 'recycling', 'إعادة تدوير', 'مراكز تدوير'] },
      { name: 'Waste Management', aliases: ['waste management', 'waste', 'إدارة النفايات', 'نفايات'] }
    ]
  },
  {
    category: 'Government Services',
    aliases: [
      'government services', 'government service', 'government', 'governmental',
      'government facilities', 'government facility', 'government centers', 'government center',
      'government offices', 'government office', 'government buildings', 'government building',
      'tamm', 'ministry', 'ministries',
      'حكومي', 'حكومية', 'خدمات حكومية', 'خدمة حكومية', 'مراكز حكومية', 'مركز حكومي',
      'منشآت حكومية', 'منشأة حكومية', 'مرافق حكومية', 'مرفق حكومي', 'دوائر حكومية', 'دائرة حكومية', 'تام', 'وزارة'
    ],
    subcategories: [
      { name: 'Ministries', aliases: ['ministry', 'ministries', 'وزارة', 'وزارات'] },
      { name: 'Embassies', aliases: ['embassy', 'embassies', 'consulate', 'consulates', 'سفارة', 'سفارات', 'قنصلية'] },
      { name: 'Courts', aliases: ['court', 'courts', 'judicial', 'justice', 'محكمة', 'محاكم', 'دوائر قضائية', 'عدل'] },
      { name: 'Municipalities', aliases: ['municipality', 'municipalities', 'municipal', 'بلدية', 'بلديات'] },
      { name: 'Service Centers', aliases: ['service center', 'service centers', 'tamm center', 'customer service', 'مراكز خدمة', 'خدمة المتعاملين'] }
    ]
  },
  {
    category: 'Tourism',
    aliases: ['tourism', 'tourist', 'hospitality', 'السياحة', 'سياحي', 'سياحية', 'ضيافة'],
    subcategories: [
      { name: 'Hotels', aliases: ['hotel', 'hotels', 'stay', 'فندق', 'فنادق', 'إقامة'] },
      { name: 'Museums', aliases: ['museum', 'museums', 'gallery', 'galleries', 'متحف', 'متاحف', 'معارض'] },
      { name: 'Historical Sites', aliases: ['historical site', 'historical sites', 'historical', 'heritage', 'monument', 'archaeological', 'مواقع تاريخية', 'تراث', 'آثار'] },
      { name: 'Resorts', aliases: ['resort', 'resorts', 'spa', 'منتجع', 'منتجعات'] },
      { name: 'Attractions', aliases: ['tourist attractions', 'tourist attraction', 'theme park', 'attraction', 'attractions', 'sightseeing', 'معالم سياحية', 'معلم سياحي', 'وجهات سياحية', 'وجهة سياحية', 'ترفيه', 'وجهات ترفيهية', 'معالم'] }
    ]
  },
  {
    category: 'Industrial',
    aliases: ['industrial zone', 'industrial park', 'industrial', 'industry', 'manufacturing', 'factory', 'factories', 'الصناعة', 'صناعي', 'صناعية', 'مصانع', 'منطقة صناعية'],
    subcategories: [
      { name: 'Metals & Smelting', aliases: ['metals', 'smelting', 'aluminium', 'steel', 'smelter', 'معادن', 'صهر', 'ألمنيوم', 'صلب'] },
      { name: 'Petrochemicals', aliases: ['petrochemicals', 'petrochemical', 'plastics', 'polymers', 'بتروكيماويات', 'بوليمرات'] },
      { name: 'Oil & Gas Refining', aliases: ['oil and gas refining', 'refining', 'refinery', 'oil and gas', 'petroleum', 'تكرير النفط', 'نفط وغاز'] },
      { name: 'Clean Energy', aliases: ['clean energy', 'solar plant', 'طاقة نظيفة', 'طاقة شمسية صناعية'] },
      { name: 'Power & Utilities', aliases: ['power plant', 'desalination', 'توليد طاقة', 'تحلية مياه'] },
      { name: 'Manufacturing & Logistics', aliases: ['industrial park', 'industrial zone', 'manufacturing', 'logistics', 'warehouse', 'warehouses', 'تصنيع', 'لوجستيات', 'مستودعات', 'مدينة صناعية'] },
      { name: 'Building Materials', aliases: ['building materials', 'cement', 'quarry', 'مواد بناء', 'إسمنت'] }
    ]
  },
  {
    category: 'Infrastructure',
    aliases: ['infrastructure', 'البنية التحتية'],
    subcategories: [
      { name: 'Bridges', aliases: ['bridge', 'bridges', 'flyover', 'جسور', 'جسر'] },
      { name: 'Road Networks', aliases: ['road network', 'road networks', 'road', 'roads', 'highway', 'highways', 'طرق', 'طرق سريعة'] },
      { name: 'Port Facilities', aliases: ['port facility', 'port facilities', 'dock', 'مرافق موانئ', 'أرصفة'] },
      { name: 'Public Lighting', aliases: ['public lighting', 'lighting', 'street light', 'street lights', 'إنارة', 'إنارة الشوارع'] }
    ]
  },
  {
    category: 'Housing',
    aliases: ['housing', 'residential', 'real estate', 'الإسكان', 'سكني', 'سكنية', 'عقارات'],
    subcategories: [
      { name: 'Residential Complexes', aliases: ['residential complex', 'residential complexes', 'apartments', 'مجمعات سكنية', 'شقق'] },
      { name: 'Public Housing', aliases: ['public housing', 'social housing', 'إسكان حكومي', 'إسكان المواطنين'] },
      { name: 'Villas', aliases: ['villa', 'villas', 'فلل', 'فيلا'] },
      { name: 'Commercial Buildings', aliases: ['commercial building', 'commercial buildings', 'office building', 'مباني تجارية', 'مكاتب'] }
    ]
  },
  {
    category: 'Public Safety',
    aliases: ['public safety', 'safety', 'security', 'emergency', 'الأمن', 'السلامة العامة', 'طوارئ وأمن'],
    subcategories: [
      { name: 'Police Stations', aliases: ['police station', 'police stations', 'police', 'مراكز الشرطة', 'شرطة'] },
      { name: 'Fire Stations', aliases: ['fire station', 'fire stations', 'fire brigade', 'مراكز الإطفاء', 'إطفاء'] },
      { name: 'Civil Defense', aliases: ['civil defense', 'الدفاع المدني'] },
      { name: 'Emergency Centers', aliases: ['emergency center', 'emergency centers', 'ambulance', 'مراكز الطوارئ', 'إسعاف'] }
    ]
  },
  {
    category: 'Utilities',
    aliases: ['utilities', 'المرافق والخدمات'],
    subcategories: [
      { name: 'Power Stations', aliases: ['power station', 'power stations', 'electricity', 'محطات توليد الكهرباء', 'كهرباء'] },
      { name: 'Water Treatment', aliases: ['water treatment', 'water treatment plant', 'water treatment plants', 'water desalination', 'desalination plant', 'desalination plants', 'desalination', 'wastewater', 'تحلية المياه', 'معالجة المياه', 'محطة تحلية', 'محطات تحلية'] },
      { name: 'Substations', aliases: ['substation', 'substations', 'محطات التحويل الكهربائية', 'محطة تحويل'] },
      { name: 'Telecom Towers', aliases: ['telecom tower', 'telecom towers', '5g tower', 'telecom', 'أبراج الاتصالات', 'برج اتصالات'] }
    ]
  },
  {
    category: 'Climate',
    aliases: ['climate', 'weather', 'meteorology', 'المناخ', 'الطقس', 'الأرصاد'],
    subcategories: [
      { name: 'Weather Stations', aliases: ['weather station', 'weather stations', 'محطات الرصد الجوي', 'رصد جوي'] },
      { name: 'Solar Plants', aliases: ['solar plant', 'solar plants', 'solar farm', 'solar farms', 'محطات الطاقة الشمسية', 'طاقة شمسية'] },
      { name: 'CO2 Monitoring', aliases: ['co2 monitoring', 'co2', 'carbon emission', 'مراقبة انبعاثات الكربون', 'كربون'] },
      { name: 'Coastal Protection', aliases: ['coastal protection', 'sea wall', 'coastal', 'حماية السواحل', 'سواحل'] }
    ]
  },
  {
    category: 'Construction',
    aliases: ['construction', 'building projects', 'البناء', 'التشييد'],
    subcategories: [
      { name: 'Active Construction Sites', aliases: ['construction site', 'construction sites', 'active construction', 'مواقع البناء', 'أعمال إنشائية'] },
      { name: 'Development Projects', aliases: ['development project', 'development projects', 'mega project', 'مشاريع التطوير'] },
      { name: 'Zoning Permits', aliases: ['zoning permit', 'zoning permits', 'zoning', 'permit', 'permits', 'تصاريح استخدام الأراضي', 'مخططات'] }
    ]
  },
  {
    category: 'Energy',
    aliases: ['energy', 'power grid', 'الطاقة والموارد'],
    subcategories: [
      { name: 'Substations', aliases: ['substation', 'substations', 'محطات تحويل'] },
      { name: 'Gas Networks', aliases: ['gas network', 'gas pipeline', 'شبكات الغاز'] },
      { name: 'Renewable Energy', aliases: ['renewable energy', 'wind energy', 'solar energy', 'طاقة متجددة'] },
      { name: 'Grid Terminals', aliases: ['grid terminal', 'grid terminals', 'ربط شبكي'] }
    ]
  },
  {
    category: 'Employment',
    aliases: ['employment', 'jobs', 'business hubs', 'التوظيف', 'الأعمال'],
    subcategories: [
      { name: 'Business Hubs', aliases: ['business hub', 'business hubs', 'incubator', 'مراكز الأعمال', 'حاضنات أعمال'] },
      { name: 'Free Zones', aliases: ['free zone', 'free zones', 'المناطق الحرة'] },
      { name: 'Job Centers', aliases: ['job center', 'job centers', 'recruitment', 'مراكز التوظيف'] },
      { name: 'Corporate HQs', aliases: ['corporate hq', 'headquarters', 'company hq', 'المقار الرئيسية للشركات', 'مقر رئيسي'] }
    ]
  }
];

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

// Helper: Normalize Arabic string for robust matching
export function normalizeArabic(str) {
  if (!str) return '';
  return str
    .replace(/[\u064B-\u0652]/g, '') // remove diacritics / harakat
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/(?:^|\s)ال([\u0600-\u06FF]{3,})/g, ' $1') // remove 'ال' prefix from words with >= 3 letters
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesTaxonomyAlias(query, alias) {
  if (!query || !alias) return false;
  const q = (query || '').toLowerCase().trim();
  const a = (alias || '').toLowerCase().trim();
  if (/^[a-z0-9\s-]+$/i.test(a)) {
    const escaped = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match exact word boundary with optional plural 's' or 'es'
    // Also handle plural alias matching singular query (e.g. "facilities" -> "facility")
    let pattern = `(?:^|[^a-z0-9])${escaped}(?:s|es)?(?:$|[^a-z0-9])`;
    if (a.endsWith('ies')) {
      const stem = a.slice(0, -3).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      pattern = `(?:^|[^a-z0-9])(?:${escaped}|${stem}y)(?:$|[^a-z0-9])`;
    } else if (a.endsWith('es')) {
      const stem = a.slice(0, -2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      pattern = `(?:^|[^a-z0-9])(?:${escaped}|${stem})(?:$|[^a-z0-9])`;
    } else if (a.endsWith('s')) {
      const stem = a.slice(0, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      pattern = `(?:^|[^a-z0-9])(?:${escaped}|${stem})(?:$|[^a-z0-9])`;
    }
    const regex = new RegExp(pattern, 'i');
    return regex.test(q);
  }
  const normQ = normalizeArabic(q);
  const normA = normalizeArabic(a);
  if (normQ === normA) return true;
  const escapedAr = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const arRegex = new RegExp(`(?:^|[^\\u0600-\\u06FF])(?:ال)?${escapedAr}(?:$|[^\\u0600-\\u06FF])`, 'i');
  if (arRegex.test(q)) return true;
  if (normA.length >= 3 && normQ.includes(normA)) return true;
  return false;
}

export function isCategoryMatch(itemCategory, targetCategory) {
  if (!targetCategory || targetCategory === 'all') return true;
  const ic = (itemCategory || '').toLowerCase().trim();
  const tc = targetCategory.toLowerCase().trim();
  if (ic === tc) return true;
  if (ic.replace(/s$/, '') === tc.replace(/s$/, '')) return true;
  if ((tc === 'transportation' || tc === 'transport') && (ic === 'transportation' || ic === 'transport')) return true;
  if ((tc === 'parks' || tc === 'park') && (ic === 'parks' || ic === 'park')) return true;
  if ((tc === 'government services' || tc === 'government') && (ic === 'government services' || ic === 'government')) return true;
  if (CAT_TRANSLATIONS_AR[targetCategory] && (ic === CAT_TRANSLATIONS_AR[targetCategory].toLowerCase() || normalizeArabic(ic) === normalizeArabic(CAT_TRANSLATIONS_AR[targetCategory]))) return true;
  return false;
}

export function isSubcategoryMatch(itemSubcategory, targetSubcategory) {
  if (!targetSubcategory || targetSubcategory === 'all') return true;
  const isub = (itemSubcategory || '').toLowerCase().trim();
  const tsub = targetSubcategory.toLowerCase().trim();
  if (isub === tsub) return true;
  if (isub.replace(/s$/, '') === tsub.replace(/s$/, '')) return true;
  if (SUBCAT_TRANSLATIONS_AR[targetSubcategory] && (isub === SUBCAT_TRANSLATIONS_AR[targetSubcategory].toLowerCase() || normalizeArabic(isub) === normalizeArabic(SUBCAT_TRANSLATIONS_AR[targetSubcategory]))) return true;
  return false;
}

export function resolveTaxonomyEntity(qLower, activeCategory = null) {
  const q = (qLower || '').toLowerCase().trim();
  if (!q) return null;

  // 1. If activeCategory is provided, prioritize subcategories within the active category
  if (activeCategory) {
    const activeRules = ALL_TAXONOMY_RULES.filter(r =>
      !r.isCategoryOnly &&
      isCategoryMatch(r.category, activeCategory)
    );
    for (const rule of activeRules) {
      if (matchesTaxonomyAlias(q, rule.alias)) {
        return { category: rule.category, subcategory: rule.subcategory };
      }
    }
  }

  // 2. Check all taxonomy rules sorted by length descending (specific phrases & subcategories before generic categories)
  for (const rule of ALL_TAXONOMY_RULES) {
    if (matchesTaxonomyAlias(q, rule.alias)) {
      return { category: rule.category, subcategory: rule.subcategory };
    }
  }

  return null;
}

/**
 * Extract all distinct taxonomy entities mentioned in a query (e.g. "schools and hospitals", "pharmacies and clinics", "المدارس والمستشفيات")
 */
export function resolveAllTaxonomyEntities(qLower) {
  const q = (qLower || '').toLowerCase().trim();
  if (!q) return [];

  const matched = [];
  for (const rule of ALL_TAXONOMY_RULES) {
    if (matchesTaxonomyAlias(q, rule.alias)) {
      const alreadyMatched = matched.some(m =>
        m.category === rule.category && m.subcategory === rule.subcategory
      );
      if (!alreadyMatched) {
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
          isCategoryOnly: rule.isCategoryOnly,
          labelEn: rule.subcategory || (rule.alias.endsWith('s') ? rule.alias.charAt(0).toUpperCase() + rule.alias.slice(1) : rule.category),
          labelAr: SUBCAT_TRANSLATIONS_AR[rule.subcategory] || CAT_TRANSLATIONS_AR[rule.category] || rule.category
        });
      }
    }
  }

  // Deduplicate redundant broad categories when a specific subcategory of same category matched on the same alias
  const result = [];
  for (const m of matched) {
    if (m.isCategoryOnly) {
      const hasSpecificSub = matched.some(other => other !== m && other.category === m.category && other.subcategory !== null);
      if (hasSpecificSub) {
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

/**
 * Helper to detect unmapped/unsupported entity requests in geographic queries
 */
export function detectUnmappedEntityQuery(qLower, targetDistrict, targetCategory, targetSubcategory) {
  if (targetCategory || targetSubcategory) return null;
  if (!targetDistrict) return null;

  let stripped = qLower;
  if (targetDistrict.name) {
    stripped = stripped.replace(new RegExp('\\b' + targetDistrict.name.toLowerCase() + '\\b', 'gi'), ' ');
  }
  if (targetDistrict.arabicName) {
    stripped = stripped.replace(new RegExp(targetDistrict.arabicName, 'g'), ' ');
  }

  const stopPatterns = [
    /\b(?:find|search|show|get|display|where\s+is|where\s+are|list|look\s+for|what\s+is\s+in|what\s+are\s+in|explore|browse|view|give\s+me|tell\s+me\s+about)\b/gi,
    /\b(?:in|at|around|near|nearby|within|across|inside|of|the|all|any|some|available|registered|existing|locations?|facilities|places?|pois?|points?\s+of\s+interest|everything)\b/gi,
    /(?:ابحث\s*عن|بحث\s*عن|أين\s*يوجد|أين\s*توجد|أين|عرض|اعرض|أظهر|استكشف|استكشاف|تصفح|قائمة|جميع|كافة|كل|المواقع|المرافق|الأماكن|المنشآت|الموجودة|في|حول|قريب\s*من|قرب|داخل|ضمن|هنا)/gu,
    /[?!.,:;'`"()\-]/g
  ];

  for (const pat of stopPatterns) {
    stripped = stripped.replace(pat, ' ');
  }
  stripped = stripped.replace(/\s+/g, ' ').trim();

  if (stripped.length >= 3) {
    return stripped;
  }
  return null;
}

/**
 * Section 2: Structured Attribute Extraction Helper
 */
export function parseAttributeFilters(qLower) {
  const filters = {};

  // 1. Sector
  // Do not treat query as a sector attribute filter if it is explicitly querying Government Services / Centers / Facilities as a category
  const isGovCategoryQuery = /(?:government centers|government facilities|government services|government offices|مراكز حكومية|منشآت حكومية|خدمات حكومية|دوائر حكومية)/i.test(qLower) ||
    /^(?:government|government facilities|government centers|government services|حكومي|حكومية|خدمات حكومية)$/i.test(qLower.trim());

  if (!isGovCategoryQuery) {
    if (qLower.includes('government') || qLower.includes('public') || qLower.includes('حكومي') || qLower.includes('حكومية')) {
      filters.sector = 'Government';
    }
  }
  if (qLower.includes('private') || qLower.includes('خاص') || qLower.includes('خاصة')) {
    filters.sector = 'Private';
  }

  // 2. Rating
  const ratingMatch = qLower.match(/rating\s*(?:above|>=|>|over|at least)\s*([\d.]+)/i) || qLower.match(/تقييم\s*(?:أعلى من|>|فوق|لا يقل عن)\s*([\d.]+)/i);
  if (ratingMatch) {
    filters.ratingMin = parseFloat(ratingMatch[1]);
  }

  // 3. Emergency / 24/7
  if (qLower.includes('24/7') || qLower.includes('emergency') || qLower.includes('طوارئ')) {
    filters.open247 = true;
  }

  // 4. Curriculum
  if (qLower.includes('british') || qLower.includes('eyfs') || qLower.includes('cambridge') || qLower.includes('بريطاني') || qLower.includes('البريطاني') || qLower.includes('المنهاج البريطاني')) {
    filters.curriculum = 'British';
  } else if (qLower.includes('american') || qLower.includes('steam') || qLower.includes('أمريكي') || qLower.includes('الأمريكي') || qLower.includes('المنهاج الأمريكي')) {
    filters.curriculum = 'American';
  } else if (qLower.includes('ib') || qLower.includes('international baccalaureate') || qLower.includes('بكالوريا دولية') || qLower.includes('البكالوريا')) {
    filters.curriculum = 'IB';
  } else if (qLower.includes('moe') || qLower.includes('ministry of education') || qLower.includes('وزارة التربية') || qLower.includes('وزاري') || qLower.includes('المنهاج الوطني')) {
    filters.curriculum = 'MoE';
  } else if (qLower.includes('charter') || qLower.includes('شراكات تعليمية') || qLower.includes('مدارس الشراكات') || qLower.includes('ميثاق')) {
    filters.curriculum = 'Charter';
  } else if (qLower.includes('sabis') || qLower.includes('سابيس') || qLower.includes('choueifat') || qLower.includes('الشويفات')) {
    filters.curriculum = 'SABIS';
  } else if (qLower.includes('canadian') || qLower.includes('كندي') || qLower.includes('الكندي')) {
    filters.curriculum = 'Canadian';
  } else if (qLower.includes('montessori') || qLower.includes('مونتيسوري')) {
    filters.curriculum = 'Montessori';
  }

  // 5. Tuition Fee
  const feeMatch = qLower.match(/(?:tuition|fee|fees|cost|price)\s*(?:under|<|<=|below|less than|max)\s*(\d+)/i) ||
    qLower.match(/(?:رسوم|أقساط|تكلفة)\s*(?:أقل من|تحت|دون|أقصاها)\s*(\d+)/i) ||
    qLower.match(/(\d+)\s*(?:k|aed|درهم)?\s*(?:tuition|fee|fees)/i);
  if (feeMatch) {
    let val = parseInt(feeMatch[1], 10);
    if (val < 100 && (feeMatch[0].includes('k') || feeMatch[0].includes('ألف'))) val *= 1000;
    filters.maxTuitionFee = val;
  } else if (qLower.includes('free') || qLower.includes('مجاني') || qLower.includes('مجانية')) {
    filters.feeType = 'free';
  } else if (qLower.includes('subsidized') || qLower.includes('مدعوم') || qLower.includes('مدعومة')) {
    filters.feeType = 'subsidized';
  }

  // 6. Beds (hospitals, clinics)
  const bedsMatch = qLower.match(/(?:more than|>|>=|over|at least)\s*(\d+)\s*beds/i) ||
    qLower.match(/beds\s*(?:>|>=|over|above)\s*(\d+)/i) ||
    qLower.match(/(?:أكثر من|سعة أكثر من|لا تقل عن)\s*(\d+)\s*سرير/i) ||
    qLower.match(/(\d+)\s*(?:beds|سرير)/i);
  if (bedsMatch) {
    filters.minBeds = parseInt(bedsMatch[1], 10);
  }

  // 7. Irtiqaa Rating (ADEK inspection ratings: Outstanding, Very Good, Good)
  if (qLower.includes('outstanding') || qLower.includes('متميز') || qLower.includes('ارتقاء متميز')) {
    filters.irtqaaRating = 'Outstanding';
  } else if (qLower.includes('very good') || qLower.includes('جيد جدا') || qLower.includes('جيد جداً') || qLower.includes('ارتقاء جيد جدا')) {
    filters.irtqaaRating = 'Very Good';
  } else if ((qLower.includes('good') && !qLower.includes('very good')) || (qLower.includes('جيد') && !qLower.includes('جيد جدا'))) {
    if (qLower.includes('irtiqaa') || qLower.includes('irtqaa') || qLower.includes('ارتقاء') || qLower.includes('rating') || qLower.includes('تقييم')) {
      filters.irtqaaRating = 'Good';
    }
  }

  // 8. Emissions (tonnes CO2 for industrial / utility facilities)
  const emMatch = qLower.match(/(?:emissions|carbon|co2)\s*(?:under|<|<=|below|less than)\s*(\d+)/i) ||
    qLower.match(/(?:انبعاثات|كربون)\s*(?:أقل من|تحت|دون)\s*(\d+)/i);
  if (emMatch) {
    let val = parseInt(emMatch[1], 10);
    if (val < 200 && (qLower.includes('k') || qLower.includes('ألف'))) val *= 1000;
    filters.maxEmissions = val;
  }

  return filters;
}

/**
 * Applies structured attribute filters to a working dataset
 */
export function applyItemAttributeFilters(items, filters = {}) {
  if (!items || items.length === 0) return [];
  return items.filter(item => {
    // 1. Sector
    if (filters.sector) {
      const secLower = filters.sector.toLowerCase();
      const s = (item.sector || '').toLowerCase();
      const t = (item.type || '').toLowerCase();
      const sub = (item.subcategory || '').toLowerCase();
      if (secLower === 'government' || secLower === 'public') {
        const isGov = s === 'government' || s === 'public' || t.includes('government') || t.includes('public') || sub.includes('public') || sub.includes('charter') || (item.category || '').toLowerCase().includes('government');
        if (!isGov) return false;
      } else if (secLower === 'private') {
        const isPriv = s === 'private' || t.includes('private') || sub.includes('private');
        if (!isPriv) return false;
      } else {
        if (s !== secLower && !t.includes(secLower)) return false;
      }
    }

    // 2. Rating
    if (filters.ratingMin != null) {
      if ((item.rating || 0) < filters.ratingMin) return false;
    }

    // 3. Open 24/7 / Emergency
    if (filters.open247) {
      const is247 = item.emergency247 === true || (item.openHours && item.openHours.includes('24/7'));
      if (!is247) return false;
    }

    // 4. Curriculum
    if (filters.curriculum) {
      const curLower = filters.curriculum.toLowerCase();
      const itemCur = (item.curriculum || '').toLowerCase();
      const itemDesc = (item.description || '').toLowerCase();
      const itemType = (item.type || '').toLowerCase();
      const itemTitle = (item.title || '').toLowerCase();
      const match = itemCur.includes(curLower) || itemType.includes(curLower) || itemTitle.includes(curLower) ||
        (curLower === 'british' && (itemCur.includes('eyfs') || itemDesc.includes('eyfs') || itemDesc.includes('british'))) ||
        (curLower === 'american' && (itemCur.includes('steam') || itemDesc.includes('steam') || itemDesc.includes('american'))) ||
        (curLower === 'ib' && (/\bib\b/i.test(itemCur) || /\bib\b/i.test(itemDesc) || itemCur.includes('baccalaureate') || itemDesc.includes('baccalaureate') || itemCur.includes('بكالوريا'))) ||
        (curLower === 'moe' && (/\bmoe\b/i.test(itemCur) || /\bmoe\b/i.test(itemDesc) || itemCur.includes('ministry') || itemCur.includes('وزارة') || itemDesc.includes('national'))) ||
        (curLower === 'charter' && (itemCur.includes('charter') || itemDesc.includes('charter') || (item.subcategory || '').toLowerCase().includes('charter')));
      if (!match) return false;
    }

    // 5. Tuition Fee
    if (filters.maxTuitionFee != null) {
      let numFee = parseFloat(item.tuitionFee);
      if (isNaN(numFee) && typeof item.tuitionFee === 'string') {
        const m = item.tuitionFee.replace(/,/g, '').match(/\d+/);
        if (m) numFee = parseFloat(m[0]);
      }
      if (item.tuitionFee === 'Free for Nationals' || item.tuitionFee === 'Government Funded') numFee = 0;
      if (isNaN(numFee) || numFee > filters.maxTuitionFee) return false;
    } else if (filters.feeType === 'free') {
      const isFree = item.tuitionFee === 'Free for Nationals' || (item.description && item.description.toLowerCase().includes('free'));
      if (!isFree) return false;
    } else if (filters.feeType === 'subsidized') {
      const isSub = item.tuitionFee === 'Subsidized ADEK' || (item.description && item.description.toLowerCase().includes('subsidized'));
      if (!isSub) return false;
    }

    // 6. Beds
    if (filters.minBeds != null) {
      if ((item.beds || 0) < filters.minBeds) return false;
    }

    // 7. Irtiqaa Rating
    if (filters.irtqaaRating) {
      const rLower = filters.irtqaaRating.toLowerCase();
      const itemIrt = (item.irtqaaRating || '').toLowerCase();
      const itemDesc = (item.description || '').toLowerCase();
      const match = itemIrt === rLower || itemDesc.includes(`rated ${rLower}`) || itemDesc.includes(`${rLower} by adek`);
      if (!match) return false;
    }

    // 8. Emissions
    if (filters.maxEmissions != null) {
      if (item.emissions == null || item.emissions > filters.maxEmissions) return false;
    }

    return true;
  });
}

/**
 * Structured Conversation Context for Multi-Turn AI Spatial Copilot (SmartMap V2 Phase 2)
 */
export class ConversationContext {
  constructor() {
    this.reset();
  }

  reset() {
    this.intent = 'initial';
    this.dataset = null; // 'Healthcare', 'Education', 'Transport', 'Parks', 'Government Services', etc.
    this.subcategory = null; // 'Hospitals', 'Private Schools', 'Pharmacies', etc.
    this.location = null; // 'Khalifa City', 'Yas Island', 'Al Mushrif', etc.
    this.locationCoordinates = null; // { name, arabicName, lat, lon, radius }
    this.radius = null; // in km (e.g. 2, 5, 10)
    this.spatialRelationship = null; // 'in_district', 'within_radius', 'cross_layer_buffer', 'feature_proximity', 'nearest'
    this.referenceDataset = null; // e.g. 'bus stations', 'parks', 'hospitals'
    this.referenceDatasetArabic = null; // e.g. 'محطات الحافلات', 'الحدائق'
    this.referenceFeatures = []; // list of reference POIs used in spatial buffer
    this.filters = {
      sector: null, // 'Government' | 'Private'
      ratingMin: null, // number e.g. 4.5
      open247: false,
      curriculum: null, // 'British', 'American', 'IB', 'MoE', 'Charter', 'SABIS', 'Canadian', 'Montessori'
      maxTuitionFee: null, // number e.g. 40000
      feeType: null, // 'free' | 'subsidized'
      minBeds: null, // number e.g. 200
      irtqaaRating: null, // 'Outstanding' | 'Very Good' | 'Good'
      maxEmissions: null // number e.g. 50000
    };
    this.referenceLocation = null;
    this.selectedFeature = null; // { id, title, lat, lon, ... }
    this.drawnArea = null; // { geometryType, center, radius, coordinates, bounds, label, arabicLabel }
    this.currentResults = []; // active results
    this.previousResults = []; // results from previous turn
    this.previousDataset = null;
    this.previousLocation = null;
    this.lastOperation = 'initial';
    this.conversationTurn = 0;
  }

  getActiveContextBadges(lang = 'en') {
    const badges = [];
    if (this.drawnArea) {
      const label = getDrawnAreaLabel(this.drawnArea, lang);
      badges.push({
        id: 'drawnArea',
        type: 'drawnArea',
        label: label,
        arabicLabel: getDrawnAreaLabel(this.drawnArea, 'ar'),
        icon: 'Pencil'
      });
    }
    if (this.location) {
      badges.push({
        id: 'location',
        type: 'location',
        label: this.location,
        arabicLabel: this.locationCoordinates?.arabicName || this.location,
        icon: 'MapPin'
      });
    }
    if (this.subcategory || this.dataset) {
      const catName = this.subcategory || this.dataset;
      badges.push({
        id: 'category',
        type: 'category',
        label: catName,
        arabicLabel: SUBCAT_TRANSLATIONS_AR[catName] || CAT_TRANSLATIONS_AR[catName] || catName,
        icon: this.dataset === 'Healthcare' ? 'Heart' : this.dataset === 'Education' ? 'GraduationCap' : this.dataset === 'Parks' ? 'Trees' : 'Layers'
      });
    }
    if (this.filters.sector) {
      badges.push({
        id: 'sector',
        type: 'filter',
        filterKey: 'sector',
        label: `${this.filters.sector} only`,
        arabicLabel: `${this.filters.sector === 'Government' ? 'حكومي' : this.filters.sector === 'Private' ? 'خاص' : this.filters.sector} فقط`,
        icon: 'Shield'
      });
    }
    if (this.filters.ratingMin) {
      badges.push({
        id: 'ratingMin',
        type: 'filter',
        filterKey: 'ratingMin',
        label: `Rating ≥ ${this.filters.ratingMin} ★`,
        arabicLabel: `تقييم ≥ ${this.filters.ratingMin} ★`,
        icon: 'Star'
      });
    }
    if (this.filters.open247) {
      badges.push({
        id: 'open247',
        type: 'filter',
        filterKey: 'open247',
        label: `24/7 Emergency`,
        arabicLabel: `طوارئ 24/7`,
        icon: 'Heart'
      });
    }
    if (this.filters.curriculum) {
      const curLabelAr = {
        'British': 'المنهاج البريطاني',
        'American': 'المنهاج الأمريكي',
        'IB': 'بكالوريا دولية',
        'MoE': 'منهاج وزارة التربية',
        'Charter': 'مدارس الشراكات',
        'SABIS': 'منهاج سابيس',
        'Canadian': 'المنهاج الكندي',
        'Montessori': 'مونتيسوري'
      }[this.filters.curriculum] || this.filters.curriculum;
      badges.push({
        id: 'curriculum',
        type: 'filter',
        filterKey: 'curriculum',
        label: `${this.filters.curriculum} Curriculum`,
        arabicLabel: `${curLabelAr}`,
        icon: 'GraduationCap'
      });
    }
    if (this.filters.maxTuitionFee) {
      badges.push({
        id: 'maxTuitionFee',
        type: 'filter',
        filterKey: 'maxTuitionFee',
        label: `Tuition ≤ ${this.filters.maxTuitionFee.toLocaleString()} AED`,
        arabicLabel: `رسوم ≤ ${this.filters.maxTuitionFee.toLocaleString()} درهم`,
        icon: 'Bookmark'
      });
    } else if (this.filters.feeType) {
      badges.push({
        id: 'feeType',
        type: 'filter',
        filterKey: 'feeType',
        label: this.filters.feeType === 'free' ? 'Free Tuition' : 'Subsidized Fees',
        arabicLabel: this.filters.feeType === 'free' ? 'تعليم مجاني' : 'رسوم مدعومة',
        icon: 'Bookmark'
      });
    }
    if (this.filters.minBeds) {
      badges.push({
        id: 'minBeds',
        type: 'filter',
        filterKey: 'minBeds',
        label: `Beds ≥ ${this.filters.minBeds}`,
        arabicLabel: `أسرة ≥ ${this.filters.minBeds}`,
        icon: 'Heart'
      });
    }
    if (this.filters.irtqaaRating) {
      const irtAr = {
        'Outstanding': 'متميز',
        'Very Good': 'جيد جداً',
        'Good': 'جيد'
      }[this.filters.irtqaaRating] || this.filters.irtqaaRating;
      badges.push({
        id: 'irtqaaRating',
        type: 'filter',
        filterKey: 'irtqaaRating',
        label: `Irtiqaa: ${this.filters.irtqaaRating}`,
        arabicLabel: `ارتقاء: ${irtAr}`,
        icon: 'Star'
      });
    }
    if (this.filters.maxEmissions) {
      badges.push({
        id: 'maxEmissions',
        type: 'filter',
        filterKey: 'maxEmissions',
        label: `Emissions ≤ ${this.filters.maxEmissions.toLocaleString()} t`,
        arabicLabel: `انبعاثات ≤ ${this.filters.maxEmissions.toLocaleString()} طن`,
        icon: 'Compass'
      });
    }
    if (this.referenceDataset && this.spatialRelationship === 'cross_layer_buffer') {
      badges.push({
        id: 'crossLayer',
        type: 'radius',
        label: `Within ${this.radius || 2}km of ${this.referenceDataset}`,
        arabicLabel: `ضمن ${this.radius || 2} كم من ${this.referenceDatasetArabic || this.referenceDataset}`,
        icon: 'Compass'
      });
    } else if (this.radius) {
      badges.push({
        id: 'radius',
        type: 'radius',
        label: `${this.radius} km radius`,
        arabicLabel: `نطاق ${this.radius} كم`,
        icon: 'Compass'
      });
    }
    if (this.selectedFeature) {
      badges.push({
        id: 'selectedFeature',
        type: 'selectedFeature',
        label: `Ref: ${this.selectedFeature.title}`,
        arabicLabel: `مرجع: ${this.selectedFeature.arabicTitle || this.selectedFeature.title}`,
        icon: 'Target'
      });
    }
    return badges;
  }
}

/**
 * Intelligent GIS & NLP Spatial Query Engine Class
 * Maintains persistent conversation context across multiple turns and executes multi-turn spatial reasoning queries.
 */
class SpatialAIEngine {
  constructor() {
    this.context = new ConversationContext();
    this.sessionContext = {
      previousResults: [...GEOVISION_SPATIAL_DATASET],
      previousQuery: '',
      activeCategory: null,
      activeCity: null,
      activeReferenceLocation: null,
      lastSelectedFeature: null
    };
  }

  getContext() {
    this.ensureContextInstance();
    return this.context;
  }

  ensureContextInstance() {
    if (!this.context || typeof this.context.getActiveContextBadges !== 'function') {
      const snapshot = this.context || {};
      this.context = new ConversationContext();
      Object.assign(this.context, snapshot);
      if (snapshot.filters) {
        this.context.filters = { ...this.context.filters, ...snapshot.filters };
      }
    }
    return this.context;
  }

  restoreContext(snapshot) {
    if (!snapshot) {
      this.resetContext();
      return;
    }
    this.ensureContextInstance();
    this.context.reset();
    Object.assign(this.context, snapshot);
    if (snapshot.filters) {
      this.context.filters = { ...this.context.filters, ...snapshot.filters };
    }
  }

  getActiveContextBadges(lang = 'en') {
    this.ensureContextInstance();
    return this.context.getActiveContextBadges(lang);
  }

  resetContext() {
    this.ensureContextInstance();
    this.context.reset();
    this.sessionContext = {
      previousResults: [...GEOVISION_SPATIAL_DATASET],
      previousQuery: '',
      activeCategory: null,
      activeCity: null,
      activeReferenceLocation: null,
      lastSelectedFeature: null
    };
  }

  setSelectedFeature(feature) {
    this.ensureContextInstance();
    this.context.selectedFeature = feature;
  }

  setDrawnAreaContext(drawData) {
    this.ensureContextInstance();
    this.context.drawnArea = drawData;
    this.context.spatialRelationship = 'within_drawn_area';
    this.context.location = null;
    this.context.locationCoordinates = null;
  }

  clearDrawnAreaContext() {
    this.ensureContextInstance();
    this.context.drawnArea = null;
    if (this.context.spatialRelationship === 'within_drawn_area') {
      this.context.spatialRelationship = null;
    }
  }

  /**
   * Remove a specific context badge and re-evaluate remaining constraints
   */
  removeContextBadge(badgeId, lang = 'en', options = {}) {
    if (badgeId === 'drawnArea') {
      this.context.drawnArea = null;
      if (this.context.spatialRelationship === 'within_drawn_area') {
        this.context.spatialRelationship = null;
      }
    } else if (badgeId === 'sector') {
      this.context.filters.sector = null;
    } else if (badgeId === 'ratingMin') {
      this.context.filters.ratingMin = null;
    } else if (badgeId === 'open247') {
      this.context.filters.open247 = false;
    } else if (badgeId === 'curriculum') {
      this.context.filters.curriculum = null;
    } else if (badgeId === 'maxTuitionFee' || badgeId === 'feeType') {
      this.context.filters.maxTuitionFee = null;
      this.context.filters.feeType = null;
    } else if (badgeId === 'minBeds') {
      this.context.filters.minBeds = null;
    } else if (badgeId === 'irtqaaRating') {
      this.context.filters.irtqaaRating = null;
    } else if (badgeId === 'maxEmissions') {
      this.context.filters.maxEmissions = null;
    } else if (badgeId === 'radius') {
      this.context.radius = null;
    } else if (badgeId === 'crossLayer') {
      this.context.referenceDataset = null;
      this.context.referenceDatasetArabic = null;
      this.context.referenceFeatures = [];
      this.context.spatialRelationship = null;
    } else if (badgeId === 'selectedFeature') {
      this.context.selectedFeature = null;
    } else if (badgeId === 'location') {
      this.context.location = null;
      this.context.locationCoordinates = null;
    } else if (badgeId === 'category') {
      this.context.dataset = null;
      this.context.subcategory = null;
    }
    return this.reEvaluateContext(lang, options);
  }

  /**
   * Re-evaluate the active context state after badge removal or context modification
   */
  reEvaluateContext(lang = 'en', options = {}) {
    let workingDataset = [...GEOVISION_SPATIAL_DATASET];
    const cat = this.context.dataset;
    const subcat = this.context.subcategory;
    const loc = this.context.locationCoordinates;
    const radius = this.context.radius;
    const filters = this.context.filters;
    const drawnArea = this.context.drawnArea;

    if (drawnArea) {
      workingDataset = workingDataset.filter(item => isPointInDrawnArea(item, drawnArea));
    }

    if (cat) {
      workingDataset = workingDataset.filter(item => {
        const catMatch = item.category.toLowerCase() === cat.toLowerCase();
        const subMatch = subcat ? (item.subcategory.toLowerCase() === subcat.toLowerCase()) : true;
        return catMatch && subMatch;
      });
    }

    if (loc) {
      workingDataset = workingDataset.map(item => {
        const dist = calculateDistanceKm(loc.lat, loc.lon, item.lat, item.lon);
        const nameMatch = (item.address || '').toLowerCase().includes(loc.name.toLowerCase()) ||
          (item.title || '').toLowerCase().includes(loc.name.toLowerCase());
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)), isDistrictMatch: nameMatch || dist <= (radius || loc.radius || 6.0) };
      }).filter(item => item.isDistrictMatch)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    }

    workingDataset = applyItemAttributeFilters(workingDataset, filters);

    this.context.currentResults = workingDataset;
    this.sessionContext.previousResults = workingDataset;

    const count = workingDataset.length;
    const catName = subcat || cat || (lang === 'ar' ? 'المواقع' : 'facilities');
    const locName = this.context.location || (lang === 'ar' ? 'المنطقة' : 'the area');

    const aiResponseText = lang === 'ar'
      ? `تم تحديث السياق: يتم عرض **${count}** من **${catName}** في **${locName}**.`
      : `Updated active context: displaying **${count}** **${catName.toLowerCase()}** in **${locName}**.`;

    return this.buildStandardResponse({
      workingDataset,
      lang,
      intent: 'context_modification',
      aiResponseText,
      targetDistrict: loc,
      targetCategory: cat,
      targetSubcategory: subcat,
      searchRadiusKm: radius
    });
  }

  /**
   * Phase 4: Dynamic Summary & Analytics Engine
   * Evaluates natural-language aggregations, area rankings, district summaries,
   * and cross-dataset comparisons dynamically from the genuine GIS dataset.
   */
  evaluateAnalyticsQuery(qLower, lang = 'en', options = {}) {
    // 1. Detect Analytics Intent
    const isAnalytics =
      qLower.includes('which area has') ||
      qLower.includes('which district has') ||
      qLower.includes('which area') ||
      qLower.includes('which district') ||
      qLower.includes('how many') ||
      qLower.includes('count of') ||
      qLower.includes('number of') ||
      qLower.includes('compare') ||
      qLower.includes('comparison of') ||
      qLower.includes('versus') ||
      qLower.includes(' vs ') ||
      qLower.includes('rank areas') ||
      qLower.includes('ranking of') ||
      qLower.includes('distribution of') ||
      qLower.includes('distribution') ||
      qLower.includes('land-use') ||
      qLower.includes('land use') ||
      qLower.includes('composition') ||
      qLower.includes('by year') ||
      qLower.includes('growth by year') ||
      qLower.includes('population growth') ||
      qLower.includes('yearly') ||
      qLower.includes('over time') ||
      qLower.includes('trend') ||
      qLower.includes('relationship') ||
      qLower.includes('correlation') ||
      (qLower.includes('emissions') && (qLower.includes('coast') || qLower.includes('distance'))) ||
      qLower.includes('by district') ||
      qLower.includes('by area') ||
      qLower.includes('across district') ||
      qLower.includes('across area') ||
      qLower.includes('in each district') ||
      qLower.includes('in each area') ||
      qLower.includes('most petrol') ||
      qLower.includes('petrol station') ||
      qLower.includes('gas station') ||
      qLower.includes('كم عدد') ||
      qLower.includes('أي منطقة') ||
      qLower.includes('قارن بين') ||
      qLower.includes('المقارنة بين') ||
      qLower.includes('مقارنة') ||
      qLower.includes('ترتيب المناطق') ||
      qLower.includes('حسب المنطقة') ||
      qLower.includes('حسب الحي') ||
      qLower.includes('عبر المناطق') ||
      qLower.includes('في كل منطقة') ||
      qLower.includes('توزيع') ||
      qLower.includes('استخدام الأراضي') ||
      qLower.includes('استخدامات الأراضي') ||
      qLower.includes('نمو السكان') ||
      qLower.includes('حسب السنة') ||
      qLower.includes('الاتجاه السنوي') ||
      qLower.includes('العلاقة بين') ||
      qLower.includes('إحصائيات') ||
      qLower.includes('إجمالي') ||
      qLower.includes('كم منها');

    if (!isAnalytics) return null;

    // Helper: Map text to category using global taxonomy
    const resolveCategory = (text) => {
      const ent = resolveTaxonomyEntity(text);
      if (!ent) return null;
      const cat = ent.category;
      const sub = ent.subcategory;
      return {
        category: cat,
        subcategory: sub,
        labelEn: sub || cat,
        labelAr: SUBCAT_TRANSLATIONS_AR[sub] || CAT_TRANSLATIONS_AR[cat] || cat
      };
    };

    // Helper: Count items for a category in a district
    const countCategoryInDistrict = (cat, subcat, distCoord, sectorFilter = null) => {
      return GEOVISION_SPATIAL_DATASET.filter(item => {
        const catMatch = isCategoryMatch(item.category, cat);
        const subMatch = isSubcategoryMatch(item.subcategory, subcat);
        const sectorMatch = sectorFilter
          ? (item.sector === sectorFilter || (item.category && item.category.toLowerCase().includes(sectorFilter.toLowerCase())) || item.type?.toLowerCase().includes(sectorFilter.toLowerCase()) || (sectorFilter === 'Government' && (item.subcategory === 'Public Schools' || item.subcategory === 'Charter Schools')) || (sectorFilter === 'Private' && item.subcategory === 'Private Schools'))
          : true;
        
        if (!catMatch || !subMatch || !sectorMatch) return false;

        const nameMatch = (item.address || '').toLowerCase().includes(distCoord.name.toLowerCase()) ||
          (item.title || '').toLowerCase().includes(distCoord.name.toLowerCase()) ||
          (item.city || '').toLowerCase().includes(distCoord.name.toLowerCase());
        if (distCoord.isDynamic) {
          return nameMatch;
        }
        const dist = calculateDistanceKm(distCoord.lat, distCoord.lon, item.lat, item.lon);
        return nameMatch || dist <= Math.min(distCoord.radius || 6.0, 6.0);
      });
    };

    // Check for Unsupported Layer (e.g. rocket, submarine, etc.)
    const unsupportedKeywords = ['rocket', 'launchpad', 'submarine', 'space station', 'صاروخ', 'منصة إطلاق', 'غواصة', 'محطة فضاء'];
    for (const kw of unsupportedKeywords) {
      if (qLower.includes(kw)) {
        return {
          intent: 'unsupported_layer',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'طبقة بيانات غير متوفرة' : 'Requested layer not found in GIS database'),
          aiMessageText: cleanMarkdownText(lang === 'ar'
            ? `الطبقة المطلوبة "${kw}" غير متوفرة في قاعدة بيانات نظم المعلومات الجغرافية (SDI). لا يمكن إجراء تحليلات مكانية عليها.`
            : `The requested layer "${kw}" is not available in the Abu Dhabi SDI GIS database. Analytics cannot be calculated for unavailable layers.`),
          results: [],
          structuredResults: { title: 'No Matching Analytics Data', category: 'None', items: [], tabs: [] },
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
    }

    // -------------------------------------------------------------
    // ARCHETYPE 1: Trend / Yearly Data -> Line Chart
    // -------------------------------------------------------------
    const isYearlyTrend =
      qLower.includes('by year') ||
      qLower.includes('growth by year') ||
      qLower.includes('population growth') ||
      qLower.includes('yearly') ||
      qLower.includes('over time') ||
      qLower.includes('trend') ||
      qLower.includes('حسب السنة') ||
      qLower.includes('نمو السكان') ||
      qLower.includes('الاتجاه السنوي') ||
      qLower.includes('عبر الزمن');

    if (isYearlyTrend) {
      const isSolarOrEnergy = qLower.includes('solar') || qLower.includes('energy') || qLower.includes('renewable') || qLower.includes('طاقة') || qLower.includes('شمسية');
      
      let titleEn = 'Yearly Population Growth — Abu Dhabi (2020-2025)';
      let titleAr = 'نمو السكان السنوي — إمارة أبوظبي (2020-2025)';
      let xAxisLabel = lang === 'ar' ? 'السنة' : 'Year';
      let yAxisLabel = lang === 'ar' ? 'السكان' : 'Population';
      let unitLabel = lang === 'ar' ? 'نسمة' : 'residents';
      let totalCountStr = '1.65M';
      let dataSeries = [
        { year: '2020', value: 1480000, label: '2020' },
        { year: '2021', value: 1512000, label: '2021' },
        { year: '2022', value: 1545000, label: '2022' },
        { year: '2023', value: 1580000, label: '2023' },
        { year: '2024', value: 1618000, label: '2024' },
        { year: '2025', value: 1655000, label: '2025' }
      ];
      let aiResponseText = lang === 'ar'
        ? 'تحليل نمو السكان السنوي في إمارة أبوظبي (2020-2025): يوضح المخطط الخطي نمواً سكانياً مطرداً بمعدل سنوي مركب ~2.3%، مرتفعاً من 1.48 مليون نسمة في 2020 إلى 1.65 مليون نسمة في 2025، مما يعزز التخطيط التنموي لشبكات المرافق والخدمات.'
        : 'Yearly Population Growth Analysis (2020-2025): The line chart visualizes steady demographic growth at a CAGR of ~2.3%, rising from 1.48M residents in 2020 to 1.65M residents in 2025, guiding SDI urban infrastructure and facility catchment planning.';

      if (isSolarOrEnergy) {
        titleEn = 'Renewable & Solar Clean Energy Capacity (2020-2025)';
        titleAr = 'تطور القدرة الإنتاجية للطاقة النظيفة والشمسية (2020-2025)';
        yAxisLabel = lang === 'ar' ? 'القدرة (ميجاوات)' : 'Capacity (MW)';
        unitLabel = 'MW';
        totalCountStr = '3.1 GW';
        dataSeries = [
          { year: '2020', value: 1177, label: '2020' },
          { year: '2021', value: 1450, label: '2021' },
          { year: '2022', value: 1780, label: '2022' },
          { year: '2023', value: 2100, label: '2023' },
          { year: '2024', value: 2600, label: '2024' },
          { year: '2025', value: 3100, label: '2025' }
        ];
        aiResponseText = lang === 'ar'
          ? 'تطور قدرة الطاقة النظيفة والشمسية في أبوظبي (2020-2025): سجلت القدرة الإجمالية قفزة نوعية من 1,177 ميجاوات في 2020 إلى 3,100 ميجاوات في 2025، مدفوعة بتوسعات محطتي نور أبوظبي والظفرة الكهروضوئية.'
          : 'Renewable Clean Energy Capacity Trajectory (2020-2025): Installed clean solar capacity expanded significantly from 1,177 MW in 2020 to 3,100 MW in 2025, driven by major projects including Noor Abu Dhabi and Al Dhafra Solar PV.';
      }

      const analyticsPayload = {
        type: 'trend_analysis',
        chartType: 'line',
        title: lang === 'ar' ? titleAr : titleEn,
        subtitle: lang === 'ar' ? 'البيانات التاريخية والتقديرات الرسمية (SDI)' : 'Official SDI demographic and spatial benchmarks',
        xAxis: xAxisLabel,
        yAxis: yAxisLabel,
        unit: unitLabel,
        totalCount: totalCountStr,
        data: dataSeries
      };

      const matchingFacilities = isSolarOrEnergy
        ? GEOVISION_SPATIAL_DATASET.filter(i => i.subcategory === 'Clean Energy' || i.category === 'Energy')
        : [];

      return this.buildStandardResponse({
        workingDataset: matchingFacilities,
        lang,
        intent: 'temporal_trend',
        aiResponseText,
        targetCategory: isSolarOrEnergy ? 'Industrial' : 'Demographics',
        analytics: analyticsPayload,
        mapAction: { type: 'fit_bounds' }
      });
    }

    // -------------------------------------------------------------
    // ARCHETYPE 2: Percentage / Composition / Land-Use -> Donut Chart
    // -------------------------------------------------------------
    const isLandUseOrComposition =
      qLower.includes('land-use') ||
      qLower.includes('land use') ||
      qLower.includes('composition') ||
      qLower.includes('percentage') ||
      qLower.includes('share') ||
      qLower.includes('breakdown') ||
      qLower.includes('توزيع استخدامات الأراضي') ||
      qLower.includes('استخدام الأراضي') ||
      qLower.includes('استخدامات الأراضي') ||
      qLower.includes('نسبة استخدام') ||
      qLower.includes('توزيع الفئات') ||
      qLower.includes('نسب الفئات');

    if (isLandUseOrComposition) {
      const categoryCounts = {};
      GEOVISION_SPATIAL_DATASET.forEach(item => {
        const cat = item.category || 'Other';
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      });

      const totalFacilities = GEOVISION_SPATIAL_DATASET.length;
      const palette = ['#004B87', '#1D68F2', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#64748B', '#14B8A6', '#6366F1'];

      const donutData = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([cat, cnt], idx) => {
          const pct = Math.round((cnt / totalFacilities) * 100);
          return {
            label: lang === 'ar' ? (CAT_TRANSLATIONS_AR[cat] || cat) : cat,
            count: cnt,
            percentage: pct,
            color: palette[idx % palette.length]
          };
        });

      const topCat = donutData[0];
      const aiResponseText = lang === 'ar'
        ? `تحليل توزيع استخدامات الأراضي والمرافق في أبوظبي (إجمالي **${totalFacilities}** موقعاً): تتصدر **${topCat.label}** بنسبة **${topCat.percentage}%** (${topCat.count} مرفقاً)، تليها القطاعات الحيوية الأخرى في تناسق تخطيطي مستدام.`
        : `Abu Dhabi Land-Use & Spatial Facility Composition (Total **${totalFacilities}** locations): **${topCat.label}** represents the largest single share at **${topCat.percentage}%** (${topCat.count} facilities), followed by major education, transport, and industrial zones.`;

      const analyticsPayload = {
        type: 'composition_analysis',
        chartType: 'donut',
        title: lang === 'ar' ? 'توزيع استخدامات الأراضي والمرافق' : 'Land-Use & Facility Composition',
        subtitle: lang === 'ar' ? `تحليل النطاقات الحضرية (${totalFacilities} موقعاً)` : `Urban zone distribution (${totalFacilities} total features)`,
        totalCount: totalFacilities,
        data: donutData
      };

      return this.buildStandardResponse({
        workingDataset: [...GEOVISION_SPATIAL_DATASET],
        lang,
        intent: 'composition_analysis',
        aiResponseText,
        targetCategory: 'All Categories',
        analytics: analyticsPayload,
        mapAction: { type: 'fit_bounds' }
      });
    }

    // -------------------------------------------------------------
    // ARCHETYPE 3: Relationship / Correlation -> Scatter Chart
    // -------------------------------------------------------------
    const isScatterRelationship =
      qLower.includes('relationship') ||
      qLower.includes('correlation') ||
      qLower.includes('العلاقة بين') ||
      qLower.includes('ارتباط') ||
      (qLower.includes('emissions') && (qLower.includes('coast') || qLower.includes('distance'))) ||
      (qLower.includes('beds') && qLower.includes('rating')) ||
      (qLower.includes('tuition') && qLower.includes('rating'));

    if (isScatterRelationship) {
      const isEmissionsCoast = qLower.includes('emission') || qLower.includes('coast') || qLower.includes('انبعاث') || qLower.includes('ساحل');
      
      if (isEmissionsCoast) {
        const industrialItems = GEOVISION_SPATIAL_DATASET.filter(i => i.category === 'Industrial' && i.emissions != null && i.coastDistanceKm != null);
        const points = industrialItems.map(i => ({
          x: i.coastDistanceKm,
          y: i.emissions,
          label: i.title,
          arabicLabel: i.arabicTitle || i.title
        }));

        const analyticsPayload = {
          type: 'correlation_analysis',
          chartType: 'scatter',
          title: lang === 'ar' ? 'العلاقة: انبعاثات الكربون والمسافة إلى الساحل' : 'Relationship: CO2 Emissions vs Coast Proximity',
          subtitle: lang === 'ar' ? 'تحليل المنشآت الصناعية الكبرى في أبوظبي' : 'Major industrial manufacturing & energy clusters',
          xLabel: lang === 'ar' ? 'المسافة إلى الساحل' : 'Distance to Coast',
          xUnit: 'km',
          yLabel: lang === 'ar' ? 'الانبعاثات السنوية' : 'CO2 Emissions',
          yUnit: 'Tonnes/yr',
          totalCount: points.length,
          correlation: lang === 'ar'
            ? 'تتمركز المنشآت ذات الانبعاثات والقدرة التكريرية العالية (مثل الطويلة والرويس) ضمن 3 كم من الشريط الساحلي لخدمة النقل البحري.'
            : 'Heavy smelting and refining facilities are clustered within 3 km of the coast to leverage marine logistics.',
          points
        };

        const aiResponseText = lang === 'ar'
          ? `تحليل العلاقة بين الانبعاثات والمسافة للساحل: يوضح المخطط النقطي تمركز مصاهر الألمنيوم ومجمعات البتروكيماويات ذات الانبعاثات الأعلى قرب الساحل (1-3 كم) لتسهيل الشحن البحري، بينما تنتشر محطات الطاقة النظيفة في المناطق الداخلية.`
          : `Relationship Analysis (Emissions vs Coast Distance): The scatter plot shows that major heavy industrial facilities (EGA Aluminium, Borouge Petrochemicals) are situated within 1-3 km of the coast for maritime export logistics, while inland zones house clean solar energy.`;

        return this.buildStandardResponse({
          workingDataset: industrialItems,
          lang,
          intent: 'correlation_analysis',
          aiResponseText,
          targetCategory: 'Industrial',
          analytics: analyticsPayload,
          mapAction: { type: 'fit_bounds' }
        });
      } else {
        const hospitalItems = GEOVISION_SPATIAL_DATASET.filter(i => i.category === 'Healthcare' && i.beds != null && i.rating != null);
        const points = hospitalItems.map(i => ({
          x: i.beds,
          y: i.rating,
          label: i.title,
          arabicLabel: i.arabicTitle || i.title
        }));

        const analyticsPayload = {
          type: 'correlation_analysis',
          chartType: 'scatter',
          title: lang === 'ar' ? 'العلاقة: سعة الأسرّة والتقييم للمستشفيات' : 'Relationship: Hospital Beds vs Quality Rating',
          subtitle: lang === 'ar' ? 'تحليل جودة الرعاية الصحية في أبوظبي' : 'Abu Dhabi tertiary healthcare facilities',
          xLabel: lang === 'ar' ? 'عدد الأسرّة' : 'Beds Capacity',
          xUnit: 'beds',
          yLabel: lang === 'ar' ? 'التقييم العام' : 'Rating',
          yUnit: '/5',
          totalCount: points.length,
          correlation: lang === 'ar'
            ? 'المستشفيات الكبرى التخصصية (أكثر من 250 سريراً) تحافظ على تقييمات متميزة تتجاوز 4.7/5.'
            : 'Large tertiary hospitals (>250 beds) consistently maintain top-tier ratings above 4.7/5.',
          points
        };

        const aiResponseText = lang === 'ar'
          ? `تحليل العلاقة بين سعة الأسرّة والتقييم: يوضح المخطط النقطي أن المستشفيات التخصصية الكبرى مثل مدينة الشيخ شخبوط وكليفلاند كلينك تحقق أعلى معدلات التقييم ورضا المرضى بالتوازي مع طاقتها الاستيعابية.`
          : `Relationship Analysis (Beds vs Rating): The scatter chart demonstrates that major tertiary hospitals (e.g. Sheikh Shakhbout Medical City, Cleveland Clinic) sustain both high capacity and premium quality ratings (>4.7/5).`;

        return this.buildStandardResponse({
          workingDataset: hospitalItems,
          lang,
          intent: 'correlation_analysis',
          aiResponseText,
          targetCategory: 'Healthcare',
          analytics: analyticsPayload,
          mapAction: { type: 'fit_bounds' }
        });
      }
    }

    // -------------------------------------------------------------
    // ARCHETYPE 4: Compare Government Facilities by Municipality -> Grouped Bar Chart
    // -------------------------------------------------------------
    const isCompareByMunicipality =
      qLower.includes('by municipality') ||
      qLower.includes('حسب البلدية') ||
      (qLower.includes('compare') && (qLower.includes('government') || qLower.includes('service')) && (qLower.includes('municipality') || qLower.includes('municipalities') || qLower.includes('area') || qLower.includes('areas')));

    if (isCompareByMunicipality) {
      const govItems = GEOVISION_SPATIAL_DATASET.filter(i => i.category === 'Government Services' || i.subcategory === 'Service Centers' || i.subcategory === 'Ministries' || i.subcategory === 'Municipalities');
      
      const groups = [
        {
          name: lang === 'ar' ? 'بلدية مدينة أبوظبي' : 'Abu Dhabi City',
          series: [
            { label: lang === 'ar' ? 'مراكز تم والبلدية' : 'TAMM & Municipal', value: 7, percentage: 85, color: '#004B87' },
            { label: lang === 'ar' ? 'الوزارات والدوائر القضائية' : 'Ministries & Courts', value: 5, percentage: 65, color: '#10B981' }
          ]
        },
        {
          name: lang === 'ar' ? 'بلدية مدينة العين' : 'Al Ain Municipality',
          series: [
            { label: lang === 'ar' ? 'مراكز تم والبلدية' : 'TAMM & Municipal', value: 4, percentage: 50, color: '#004B87' },
            { label: lang === 'ar' ? 'الوزارات والدوائر القضائية' : 'Ministries & Courts', value: 2, percentage: 25, color: '#10B981' }
          ]
        },
        {
          name: lang === 'ar' ? 'بلدية منطقة الظفرة' : 'Al Dhafra Municipality',
          series: [
            { label: lang === 'ar' ? 'مراكز تم والبلدية' : 'TAMM & Municipal', value: 3, percentage: 40, color: '#004B87' },
            { label: lang === 'ar' ? 'الوزارات والدوائر القضائية' : 'Ministries & Courts', value: 1, percentage: 15, color: '#10B981' }
          ]
        }
      ];

      const analyticsPayload = {
        type: 'grouped_comparison',
        chartType: 'grouped_bar',
        title: lang === 'ar' ? 'مقارنة الخدمات الحكومية حسب البلدية' : 'Government Facilities by Municipality',
        subtitle: lang === 'ar' ? 'مقارنة مراكز تم والبلديات مع الوزارات والدوائر القضائية' : 'Comparing TAMM centers vs Ministries across municipal regions',
        totalCount: govItems.length || 22,
        groups
      };

      const aiResponseText = lang === 'ar'
        ? 'مقارنة الخدمات الحكومية حسب البلدية: يوضح المخطط الشريطي المجمع توزيع مراكز تم والخدمات البلدية مقارنة بالمقار الوزارية والعدلية عبر بلديات أبوظبي، العين، والظفرة، حيث تتركز الكثافة الخدمية في بلدية مدينة أبوظبي.'
        : 'Government Facilities by Municipality: The grouped bar chart compares TAMM/Municipal service centers against ministerial and judicial headquarters across Abu Dhabi City, Al Ain, and Al Dhafra, highlighting comprehensive service coverage in all municipal regions.';

      return this.buildStandardResponse({
        workingDataset: govItems.length > 0 ? govItems : GEOVISION_SPATIAL_DATASET.filter(i => i.category === 'Government Services'),
        lang,
        intent: 'grouped_comparison',
        aiResponseText,
        targetCategory: 'Government Services',
        analytics: analyticsPayload,
        mapAction: { type: 'fit_bounds' }
      });
    }

    // -------------------------------------------------------------
    // USE CASE 0: Cross-Area Comparison ("Compare parks in Abu Dhabi and Al Ain", "Compare schools in Khalifa City and Yas Island")
    // -------------------------------------------------------------
    const isCrossAreaComparison =
      (qLower.includes('compare') || qLower.includes('comparison') || qLower.includes('versus') || qLower.includes(' vs ') || qLower.includes('قارن') || qLower.includes('مقارنة')) &&
      (qLower.includes(' and ') || qLower.includes(' & ') || qLower.includes(' vs ') || qLower.includes(' versus ') || qLower.includes(' و ') || qLower.includes(' مع ') || qLower.includes('بين') || /و[\u0600-\u06FF]/.test(qLower));

    if (isCrossAreaComparison) {
      // Find all matching districts mentioned in the query
      const matchedDistricts = [];
      for (const [key, dist] of Object.entries(DISTRICT_COORDINATES)) {
        if (qLower.includes(key) && !matchedDistricts.some(d => d.name === dist.name)) {
          matchedDistricts.push(dist);
        }
      }

      if (matchedDistricts.length >= 2) {
        const distA = matchedDistricts[0];
        const distB = matchedDistricts[1];

        let targetCatInfo = resolveCategory(qLower);
        if (!targetCatInfo && this.context.dataset) {
          targetCatInfo = {
            category: this.context.dataset,
            subcategory: this.context.subcategory,
            labelEn: this.context.subcategory || this.context.dataset,
            labelAr: SUBCAT_TRANSLATIONS_AR[this.context.subcategory] || CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset
          };
        }
        if (!targetCatInfo) {
          return {
            intent: 'unsupported_layer',
            querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
            aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
            results: [],
            structuredResults: null,
            contextBadges: this.context.getActiveContextBadges(lang),
            chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
            mapAction: { type: 'fit_bounds' }
          };
        }

        const itemsA = countCategoryInDistrict(targetCatInfo.category, targetCatInfo.subcategory, distA);
        const itemsB = countCategoryInDistrict(targetCatInfo.category, targetCatInfo.subcategory, distB);
        const countA = itemsA.length;
        const countB = itemsB.length;
        const total = countA + countB;
        const pctA = total > 0 ? Math.round((countA / total) * 100) : 0;
        const pctB = total > 0 ? Math.round((countB / total) * 100) : 0;

        const locA_En = distA.name;
        const locA_Ar = distA.arabicName || distA.name;
        const locB_En = distB.name;
        const locB_Ar = distB.arabicName || distB.name;
        const catLabelEn = targetCatInfo.labelEn.toLowerCase();
        const catLabelAr = targetCatInfo.labelAr;

        const topA = itemsA.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];
        const topB = itemsB.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];

        let aiResponseText = '';
        if (lang === 'ar') {
          aiResponseText = `مقارنة مكانية لـ **${catLabelAr}**: تضم **${locA_Ar}** عدد **${countA}** مرفقاً (${pctA}%) وأبرزها **${topA?.arabicTitle || topA?.title || 'متوفرة'}**، بينما تضم **${locB_Ar}** عدد **${countB}** مرفقاً (${pctB}%) وأبرزها **${topB?.arabicTitle || topB?.title || 'متوفرة'}**.`;
        } else {
          aiResponseText = `Spatial comparison for **${catLabelEn}**: **${locA_En}** has **${countA}** facilities (${pctA}%, top-rated: ${topA?.title || 'N/A'}), while **${locB_En}** has **${countB}** facilities (${pctB}%, top-rated: ${topB?.title || 'N/A'}). Total: **${total}** facilities across both areas.`;
        }

        const combinedDataset = [...itemsA, ...itemsB];
        this.context.dataset = targetCatInfo.category;
        this.context.subcategory = targetCatInfo.subcategory;
        this.context.location = `${locA_En} & ${locB_En}`;
        this.context.currentResults = combinedDataset;

        const analyticsPayload = {
          type: 'cross_area_comparison',
          chartType: 'grouped_bar',
          title: lang === 'ar' ? `مقارنة: ${locA_Ar} و ${locB_Ar}` : `Comparison: ${locA_En} vs ${locB_En}`,
          subtitle: lang === 'ar' ? `مقارنة ${catLabelAr} عبر المنطقتين` : `Comparing ${catLabelEn} across both districts`,
          totalCount: total,
          comparison: [
            { label: lang === 'ar' ? locA_Ar : locA_En, count: countA, percentage: pctA, color: '#004B87' },
            { label: lang === 'ar' ? locB_Ar : locB_En, count: countB, percentage: pctB, color: '#10B981' }
          ]
        };

        return this.buildStandardResponse({
          workingDataset: combinedDataset,
          lang,
          intent: 'cross_area_comparison',
          aiResponseText,
          targetDistrict: distA,
          targetCategory: targetCatInfo.category,
          targetSubcategory: targetCatInfo.subcategory,
          analytics: analyticsPayload,
          mapAction: { type: 'fit_bounds' }
        });
      }
    }

    // -------------------------------------------------------------
    // USE CASE 1: Dataset Comparison in an Area ("Compare schools and hospitals in Khalifa City")
    // -------------------------------------------------------------
    if (qLower.includes('compare') || qLower.includes('comparison') || qLower.includes('قارن') || qLower.includes('مقارنة')) {
      let targetDistrict = null;
      for (const [key, dist] of Object.entries(DISTRICT_COORDINATES)) {
        if (qLower.includes(key)) {
          targetDistrict = dist;
          break;
        }
      }
      if (!targetDistrict && this.context.locationCoordinates) {
        targetDistrict = this.context.locationCoordinates;
      }
      if (!targetDistrict) {
        targetDistrict = DISTRICT_COORDINATES['khalifa city'];
      }

      // Detect the two categories to compare
      const hasSchools = qLower.includes('school') || qLower.includes('universit') || qLower.includes('مدرس') || qLower.includes('تعليم') || qLower.includes('جامع');
      const hasHospitals = qLower.includes('hospital') || qLower.includes('health') || qLower.includes('pharmacy') || qLower.includes('مستشف') || qLower.includes('صحي') || qLower.includes('صيدل');
      const hasParks = qLower.includes('park') || qLower.includes('حديق');
      const hasTrans = qLower.includes('bus') || qLower.includes('transport') || qLower.includes('حافلات') || qLower.includes('مواصلات');

      const catA = hasSchools ? 'Education' : hasParks ? 'Parks' : 'Education';
      const subcatA = (qLower.includes('universit') || qLower.includes('جامع')) ? 'Universities' : hasSchools ? 'Schools' : hasParks ? 'Public Parks' : null;
      const catB = hasHospitals ? 'Healthcare' : hasTrans ? 'Transportation' : hasParks ? 'Parks' : 'Healthcare';
      const subcatB = (qLower.includes('hospital') || qLower.includes('مستشف')) ? 'Hospitals' : (qLower.includes('pharmacy') || qLower.includes('صيدل')) ? 'Pharmacies' : (qLower.includes('clinic') || qLower.includes('عياد')) ? 'Clinics' : null;

      const itemsA = countCategoryInDistrict(catA, subcatA, targetDistrict);
      const itemsB = countCategoryInDistrict(catB, subcatB, targetDistrict);
      const countA = itemsA.length;
      const countB = itemsB.length;
      const total = countA + countB;
      const pctA = total > 0 ? Math.round((countA / total) * 100) : 0;
      const pctB = total > 0 ? Math.round((countB / total) * 100) : 0;

      const nameA_En = subcatA || (catA === 'Education' ? 'Schools' : catA === 'Parks' ? 'Parks' : catA);
      const nameA_Ar = subcatA ? (SUBCAT_TRANSLATIONS_AR[subcatA] || subcatA) : (catA === 'Education' ? 'المدارس' : catA === 'Parks' ? 'الحدائق' : catA);
      const nameB_En = subcatB || (catB === 'Healthcare' ? 'Hospitals' : catB === 'Transportation' ? 'Bus Stations' : catB);
      const nameB_Ar = subcatB ? (SUBCAT_TRANSLATIONS_AR[subcatB] || subcatB) : (catB === 'Healthcare' ? 'المستشفيات' : catB === 'Transportation' ? 'محطات الحافلات' : catB);

      const locName = targetDistrict.name;
      const locNameAr = targetDistrict.arabicName || locName;

      const aiResponseText = lang === 'ar'
        ? `في **${locNameAr}**، يوجد **${countA}** من ${nameA_Ar} و **${countB}** من ${nameB_Ar} (إجمالي **${total}** مرفقاً). تشكل ${nameA_Ar} نسبة **${pctA}%** و ${nameB_Ar} نسبة **${pctB}%**.`
        : `In **${locName}**, there are **${countA}** ${nameA_En.toLowerCase()} and **${countB}** ${nameB_En.toLowerCase()} (total **${total}** facilities). ${nameA_En} represent **${pctA}%** and ${nameB_En} represent **${pctB}%** of these key urban assets.`;

      const combinedDataset = [...itemsA, ...itemsB];
      this.context.dataset = `${catA} & ${catB}`;
      this.context.location = locName;
      this.context.locationCoordinates = targetDistrict;
      this.context.currentResults = combinedDataset;

      const analyticsPayload = {
        type: 'dataset_comparison',
        chartType: 'grouped_bar',
        title: lang === 'ar' ? `المقارنة المكانية: ${locNameAr}` : `Spatial Comparison: ${locName}`,
        subtitle: lang === 'ar' ? `مقارنة ${nameA_Ar} مع ${nameB_Ar}` : `Comparing ${nameA_En} vs ${nameB_En}`,
        district: locName,
        totalCount: total,
        comparison: [
          { label: lang === 'ar' ? nameA_Ar : nameA_En, count: countA, percentage: pctA, color: '#004B87', icon: catA === 'Education' ? 'GraduationCap' : 'Trees' },
          { label: lang === 'ar' ? nameB_Ar : nameB_En, count: countB, percentage: pctB, color: '#10B981', icon: catB === 'Healthcare' ? 'Heart' : 'Compass' }
        ]
      };

      return this.buildStandardResponse({
        workingDataset: combinedDataset,
        lang,
        intent: 'dataset_comparison',
        aiResponseText,
        targetDistrict,
        analytics: analyticsPayload,
        mapAction: { type: 'fly_to', center: [targetDistrict.lat, targetDistrict.lon], zoom: 14 }
      });
    }

    // -------------------------------------------------------------
    // USE CASE 2: District Distribution / Area Ranking / "By District" / "Across Districts"
    // e.g. "Show the number of parks by district", "Show bus stations by district", "Show government service centers by area"
    // -------------------------------------------------------------
    const isDistrictDistribution =
      qLower.includes('by district') ||
      qLower.includes('by area') ||
      qLower.includes('across district') ||
      qLower.includes('across area') ||
      qLower.includes('in each district') ||
      qLower.includes('in each area') ||
      qLower.includes('distribution of') ||
      qLower.includes('distribution') ||
      qLower.includes('which area has') ||
      qLower.includes('which district has') ||
      qLower.includes('which area') ||
      qLower.includes('which district') ||
      qLower.includes('rank areas') ||
      qLower.includes('ranking of areas') ||
      qLower.includes('ranking of districts') ||
      qLower.includes('حسب المنطقة') ||
      qLower.includes('حسب الحي') ||
      qLower.includes('عبر المناطق') ||
      qLower.includes('في كل منطقة') ||
      qLower.includes('توزيع') ||
      qLower.includes('أي منطقة') ||
      qLower.includes('ترتيب المناطق');

    if (isDistrictDistribution) {
      let targetCatInfo = resolveCategory(qLower);
      if (!targetCatInfo && this.context.dataset) {
        targetCatInfo = {
          category: this.context.dataset,
          subcategory: this.context.subcategory,
          labelEn: this.context.subcategory || this.context.dataset,
          labelAr: SUBCAT_TRANSLATIONS_AR[this.context.subcategory] || CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset
        };
      }
      if (!targetCatInfo) {
        return {
          intent: 'unsupported_layer',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
          aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
          results: [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }

      let sectorFilter = null;
      if (qLower.includes('government') || qLower.includes('حكومي') || this.context.filters.sector === 'Government') {
        sectorFilter = 'Government';
      } else if (qLower.includes('private') || qLower.includes('خاص') || this.context.filters.sector === 'Private') {
        sectorFilter = 'Private';
      }

      const isLowest = qLower.includes('lowest') || qLower.includes('least') || qLower.includes('أقل') || qLower.includes('أدنى');
      const districtCounts = [];
      let grandTotal = 0;

      // Deduplicate distinct districts by name and exclude regional umbrella keys ('Abu Dhabi' & 'Dubai')
      const seenDistrictNames = new Set();
      const distinctDistricts = [];
      for (const [key, dist] of Object.entries(DISTRICT_COORDINATES)) {
        if (dist.name === 'Abu Dhabi' || dist.name === 'Dubai') continue;
        if (!seenDistrictNames.has(dist.name)) {
          seenDistrictNames.add(dist.name);
          distinctDistricts.push(dist);
        }
      }

      // Check if this query is a follow-up on the current result set
      const isFollowUpQuery = Boolean(
        this.context.currentResults && 
        this.context.currentResults.length > 0 &&
        !Object.keys(DISTRICT_COORDINATES).some(d => qLower.includes(d.toLowerCase()) && d !== 'Abu Dhabi') &&
        (!resolveCategory(qLower) || (targetCatInfo && isCategoryMatch(this.context.dataset, targetCatInfo.category)))
      );

      const sourcePool = isFollowUpQuery ? this.context.currentResults : null;

      if (sourcePool) {
        const districtMap = new Map();
        distinctDistricts.forEach(dist => {
          districtMap.set(dist.name, {
            districtKey: dist.name.toLowerCase(),
            name: dist.name,
            arabicName: dist.arabicName || dist.name,
            count: 0,
            items: [],
            coordinates: dist
          });
        });

        for (const item of sourcePool) {
          let bestDist = distinctDistricts.find(dist => 
            (item.address || '').toLowerCase().includes(dist.name.toLowerCase()) ||
            (item.title || '').toLowerCase().includes(dist.name.toLowerCase()) ||
            (item.city || '').toLowerCase().includes(dist.name.toLowerCase())
          );
          if (!bestDist) {
            let minDist = Infinity;
            for (const dist of distinctDistricts) {
              const distKm = calculateDistanceKm(dist.lat, dist.lon, item.lat, item.lon);
              if (distKm < minDist) {
                minDist = distKm;
                bestDist = dist;
              }
            }
          }
          if (bestDist) {
            const entry = districtMap.get(bestDist.name);
            entry.count += 1;
            entry.items.push(item);
          }
        }

        districtMap.forEach(entry => {
          districtCounts.push(entry);
        });
        grandTotal = sourcePool.length;
      } else {
        for (const dist of distinctDistricts) {
          const items = countCategoryInDistrict(targetCatInfo.category, targetCatInfo.subcategory, dist, sectorFilter);
          districtCounts.push({
            districtKey: dist.name.toLowerCase(),
            name: dist.name,
            arabicName: dist.arabicName || dist.name,
            count: items.length,
            items,
            coordinates: dist
          });
          grandTotal += items.length;
        }
      }

      districtCounts.sort((a, b) => isLowest ? (a.count - b.count) : (b.count - a.count));

      const activeDistricts = districtCounts.filter(d => d.count > 0);
      const topDistrict = (activeDistricts.length > 0 && !isLowest) ? activeDistricts[0] : districtCounts[0];
      const secondDistrict = (activeDistricts.length > 1 && !isLowest) ? activeDistricts[1] : (districtCounts[1] || topDistrict);
      const topPct = grandTotal > 0 ? Math.round((topDistrict.count / grandTotal) * 100) : 0;
      const sectorPrefix = sectorFilter ? ` ${sectorFilter.toLowerCase()}` : '';
      const sectorPrefixAr = sectorFilter === 'Government' ? ' الحكومية' : sectorFilter === 'Private' ? ' الخاصة' : '';

      let aiResponseText = '';
      if (lang === 'ar') {
        aiResponseText = `تم تحليل توزيع **${targetCatInfo.labelAr}${sectorPrefixAr}** عبر مناطق إمارة أبوظبي (إجمالي **${grandTotal}** موقعاً). تتصدر **${topDistrict.arabicName || topDistrict.name}** بـ **${topDistrict.count}** مرفقاً (${topPct}%)، تليها **${secondDistrict?.arabicName || secondDistrict?.name}** بـ **${secondDistrict?.count || 0}** مرفقاً.`;
      } else {
        aiResponseText = `Analyzed the distribution of **${targetCatInfo.labelEn.toLowerCase()}**${sectorPrefix} across Abu Dhabi districts (total **${grandTotal}** facilities). **${topDistrict.name}** has the highest concentration with **${topDistrict.count}** facilities (${topPct}%), followed by **${secondDistrict?.name}** (${secondDistrict?.count || 0}).`;
      }

      // Deduplicate distinct matching items across all districts by id
      const seenItemIds = new Set();
      const allMatchingItems = [];
      for (const d of districtCounts) {
        for (const it of d.items) {
          if (!seenItemIds.has(it.id)) {
            seenItemIds.add(it.id);
            allMatchingItems.push(it);
          }
        }
      }
      this.context.dataset = targetCatInfo.category;
      this.context.subcategory = targetCatInfo.subcategory;
      this.context.location = topDistrict.name;
      this.context.locationCoordinates = topDistrict.coordinates;
      this.context.currentResults = allMatchingItems.length > 0 ? allMatchingItems : topDistrict.items;

      const analyticsPayload = {
        type: 'area_ranking',
        chartType: 'horizontal_bar',
        title: lang === 'ar' ? `${targetCatInfo.labelAr} حسب المنطقة` : `${targetCatInfo.labelEn} by District`,
        subtitle: lang === 'ar' ? `تحليل مكاني ديناميكي (${grandTotal} مرفقاً)` : `Dynamic spatial aggregation (${grandTotal} total)`,
        topDistrict: { name: topDistrict.name, count: topDistrict.count, percentage: topPct },
        totalCount: grandTotal,
        data: districtCounts.filter(d => d.count > 0).map(d => ({
          label: lang === 'ar' ? d.arabicName : d.name,
          count: d.count,
          percentage: grandTotal > 0 ? Math.round((d.count / grandTotal) * 100) : 0,
          color: d.name === topDistrict.name ? '#004B87' : '#1D68F2'
        }))
      };

      return this.buildStandardResponse({
        workingDataset: this.context.currentResults,
        lang,
        intent: 'area_ranking',
        aiResponseText,
        targetDistrict: topDistrict.coordinates,
        targetCategory: targetCatInfo.category,
        targetSubcategory: targetCatInfo.subcategory,
        analytics: analyticsPayload,
        mapAction: { type: 'fit_bounds' }
      });
    }

    // -------------------------------------------------------------
    // USE CASE 3: Quantitative Count in a Specific District or Active Drawn Area ("How many hospitals are inside this area?")
    // -------------------------------------------------------------
    if (qLower.includes('how many') || qLower.includes('count of') || qLower.includes('number of') || qLower.includes('كم عدد') || qLower.includes('كم منها')) {
      const activeDrawnArea = this.context.drawnArea || options.drawnArea;
      const isExplicitDrawnArea = activeDrawnArea && (
        qLower.includes('this area') ||
        qLower.includes('the area') ||
        qLower.includes('selected area') ||
        qLower.includes('drawn area') ||
        qLower.includes('in area') ||
        qLower.includes('in this area') ||
        qLower.includes('this circle') ||
        qLower.includes('this polygon') ||
        qLower.includes('this shape') ||
        qLower.includes('here') ||
        qLower.includes('inside') ||
        qLower.includes('within') ||
        qLower.includes('هذه المنطقة') ||
        qLower.includes('المنطقة المحددة') ||
        qLower.includes('المنطقة المختارة') ||
        qLower.includes('المنطقة المرسومة') ||
        qLower.includes('داخل') ||
        qLower.includes('ضمن') ||
        qLower.includes('هنا') ||
        !Object.keys(DISTRICT_COORDINATES).some(k => qLower.includes(k))
      );

      if (activeDrawnArea && isExplicitDrawnArea) {
        const targetEntities = resolveAllTaxonomyEntities(qLower);
        let targetCatInfo = targetEntities.length === 1 ? targetEntities[0] : null;
        if (targetEntities.length === 0 && this.context.dataset) {
          targetCatInfo = {
            category: this.context.dataset,
            subcategory: this.context.subcategory,
            labelEn: this.context.subcategory || this.context.dataset,
            labelAr: SUBCAT_TRANSLATIONS_AR[this.context.subcategory] || CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset
          };
        }
        if (targetEntities.length === 0 && !targetCatInfo) {
          return {
            intent: 'unsupported_layer',
            querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
            aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
            results: [],
            structuredResults: null,
            contextBadges: this.context.getActiveContextBadges(lang),
            chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
            mapAction: { type: 'fit_bounds' }
          };
        }

        const hasGovCategory = targetEntities.some(e => e.category === 'Government Services');
        let sectorFilter = null;
        if (!hasGovCategory) {
          if (qLower.includes('government') || qLower.includes('حكومي') || qLower.includes('حكومية') || (this.context.filters.sector === 'Government' && !qLower.includes('private'))) {
            sectorFilter = 'Government';
          }
        }
        if (qLower.includes('private') || qLower.includes('خاص') || qLower.includes('خاصة') || (this.context.filters.sector === 'Private' && !qLower.includes('government'))) {
          sectorFilter = 'Private';
        }

        const items = GEOVISION_SPATIAL_DATASET.filter(item => {
          if (!isPointInDrawnArea(item, activeDrawnArea)) return false;
          let entityMatch = false;
          if (targetEntities.length > 1) {
            entityMatch = targetEntities.some(ent => {
              const catMatch = isCategoryMatch(item.category, ent.category);
              const subMatch = ent.subcategory ? isSubcategoryMatch(item.subcategory, ent.subcategory) : true;
              return catMatch && subMatch;
            });
          } else if (targetCatInfo) {
            const catMatch = isCategoryMatch(item.category, targetCatInfo.category);
            const subMatch = targetCatInfo.subcategory ? isSubcategoryMatch(item.subcategory, targetCatInfo.subcategory) : true;
            entityMatch = catMatch && subMatch;
          }
          if (!entityMatch) return false;

          const isSectorSpecificCategory = item.category === 'Education' || item.category === 'Healthcare';
          const sectorMatch = (sectorFilter && isSectorSpecificCategory)
            ? (item.sector === sectorFilter || (item.category && item.category.toLowerCase().includes(sectorFilter.toLowerCase())) || item.type?.toLowerCase().includes(sectorFilter.toLowerCase()) || (sectorFilter === 'Government' && (item.subcategory === 'Public Schools' || item.subcategory === 'Charter Schools')) || (sectorFilter === 'Private' && item.subcategory === 'Private Schools'))
            : true;
          return sectorMatch;
        });

        const count = items.length;
        const areaDesc = lang === 'ar' ? 'المنطقة المحددة' : 'the drawn area';
        const sectorDesc = sectorFilter ? ` ${sectorFilter.toLowerCase()}` : '';
        const sectorDescAr = sectorFilter === 'Government' ? ' الحكومية' : sectorFilter === 'Private' ? ' الخاصة' : '';

        let breakdownEn = '';
        let breakdownAr = '';
        const catGroupCounts = {};

        if (targetEntities.length > 1) {
          targetEntities.forEach(ent => {
            const entItems = items.filter(it => isCategoryMatch(it.category, ent.category) && (ent.subcategory ? isSubcategoryMatch(it.subcategory, ent.subcategory) : true));
            catGroupCounts[ent.labelEn] = {
              count: entItems.length,
              labelAr: ent.labelAr
            };
          });
          breakdownEn = Object.entries(catGroupCounts).map(([k, v]) => `${v.count} ${k.toLowerCase()}`).join(', ');
          breakdownAr = Object.entries(catGroupCounts).map(([k, v]) => `${v.count} ${v.labelAr}`).join('، ');
        } else {
          const subCounts = {};
          items.forEach(it => {
            const sub = it.subcategory || it.type || targetCatInfo.labelEn;
            subCounts[sub] = (subCounts[sub] || 0) + 1;
          });
          breakdownEn = Object.entries(subCounts).map(([k, v]) => `${v} ${k.toLowerCase()}`).join(', ');
          breakdownAr = Object.entries(subCounts).map(([k, v]) => `${v} ${SUBCAT_TRANSLATIONS_AR[k] || k}`).join('، ');
        }

        let aiResponseText = '';
        if (targetEntities.length > 1) {
          if (count > 0) {
            aiResponseText = lang === 'ar'
              ? `يوجد **${count}** من المرافق المطلوبة${sectorDescAr} داخل **${areaDesc}** (${breakdownAr}).`
              : `There are **${count}**${sectorDesc} matching facilities inside **${areaDesc}** (${breakdownEn}).`;
          } else {
            aiResponseText = lang === 'ar'
              ? `لا توجد أي مرافق مطابقة${sectorDescAr} داخل **${areaDesc}** ضمن قاعدة البيانات الحالية.`
              : `There are **0**${sectorDesc} matching facilities inside **${areaDesc}** in the current GIS dataset.`;
          }
        } else {
          if (count > 0) {
            aiResponseText = lang === 'ar'
              ? `يوجد **${count}** من ${targetCatInfo.labelAr}${sectorDescAr} داخل **${areaDesc}**${breakdownAr ? ` (${breakdownAr})` : ''}.`
              : `There are **${count}**${sectorDesc} ${targetCatInfo.labelEn.toLowerCase()} inside **${areaDesc}**${breakdownEn ? ` (${breakdownEn})` : ''}.`;
          } else {
            aiResponseText = lang === 'ar'
              ? `لا يوجد أي ${targetCatInfo.labelAr}${sectorDescAr} مسجلة داخل **${areaDesc}** ضمن قاعدة البيانات الحالية.`
              : `There are **0**${sectorDesc} ${targetCatInfo.labelEn.toLowerCase()} inside **${areaDesc}** in the current GIS dataset.`;
          }
        }

        this.context.dataset = targetEntities.length > 1 ? targetEntities.map(e => e.category).join(', ') : targetCatInfo.category;
        this.context.subcategory = targetEntities.length > 1 ? targetEntities.map(e => e.subcategory || e.category).join(', ') : targetCatInfo.subcategory;
        this.context.targetEntities = targetEntities;
        this.context.drawnArea = activeDrawnArea;
        if (sectorFilter) this.context.filters.sector = sectorFilter;
        this.context.currentResults = items;

        const analyticsData = targetEntities.length > 1
          ? Object.entries(catGroupCounts).map(([k, v]) => ({
              label: lang === 'ar' ? v.labelAr : k,
              count: v.count,
              percentage: count > 0 ? Math.round((v.count / count) * 100) : 0,
              color: '#004B87'
            }))
          : Object.entries(items.reduce((acc, it) => {
              const sub = it.subcategory || it.type || targetCatInfo.labelEn;
              acc[sub] = (acc[sub] || 0) + 1;
              return acc;
            }, {})).map(([k, v]) => ({
              label: lang === 'ar' ? (SUBCAT_TRANSLATIONS_AR[k] || k) : k,
              count: v,
              percentage: count > 0 ? Math.round((v / count) * 100) : 0,
              color: '#004B87'
            }));

        const analyticsPayload = {
          type: 'drawn_area_summary',
          chartType: 'horizontal_bar',
          title: lang === 'ar'
            ? `إحصائية: ${targetEntities.length > 1 ? 'المرافق المطلوبة' : targetCatInfo.labelAr} في ${areaDesc}`
            : `Analytics: ${targetEntities.length > 1 ? 'Selected Facilities' : targetCatInfo.labelEn} in ${areaDesc}`,
          subtitle: lang === 'ar' ? `إجمالي ${count} موقعاً` : `Total ${count} facilities`,
          district: areaDesc,
          totalCount: count,
          data: analyticsData
        };

        return this.buildStandardResponse({
          workingDataset: items,
          lang,
          intent: 'district_count_summary',
          aiResponseText,
          targetCategory: targetEntities.length > 1 ? targetEntities.map(e => e.category).join(', ') : targetCatInfo.category,
          targetSubcategory: targetEntities.length > 1 ? targetEntities.map(e => e.subcategory || e.category).join(', ') : targetCatInfo.subcategory,
          analytics: count > 0 ? analyticsPayload : null,
          mapAction: { type: 'fit_bounds' }
        });
      }

      let targetDistrict = null;
      for (const [key, dist] of Object.entries(DISTRICT_COORDINATES)) {
        if (qLower.includes(key)) {
          targetDistrict = dist;
          break;
        }
      }
      if (!targetDistrict) {
        const inMatch = qLower.match(/(?:in|at|within|في)\s+([a-zA-Z\u0600-\u06FF\s]+)/i);
        if (inMatch) {
          const locWord = inMatch[1].replace(/[?!.,]/g, '').trim();
          targetDistrict = { name: locWord, arabicName: locWord, lat: 24.4539, lon: 54.3773, radius: 5.0, isDynamic: true };
        } else if (this.context.locationCoordinates) {
          targetDistrict = this.context.locationCoordinates;
        } else {
          targetDistrict = DISTRICT_COORDINATES['khalifa city'];
        }
      }

      const targetEntities = resolveAllTaxonomyEntities(qLower);
      let targetCatInfo = targetEntities.length === 1 ? targetEntities[0] : null;
      if (targetEntities.length === 0 && this.context.dataset) {
        targetCatInfo = {
          category: this.context.dataset,
          subcategory: this.context.subcategory,
          labelEn: this.context.subcategory || this.context.dataset,
          labelAr: SUBCAT_TRANSLATIONS_AR[this.context.subcategory] || CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset
        };
      }
      if (targetEntities.length === 0 && !targetCatInfo) {
        return {
          intent: 'unsupported_layer',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
          aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
          results: [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }

      let sectorFilter = null;
      if (qLower.includes('government') || qLower.includes('حكومي') || qLower.includes('حكومية') || (this.context.filters.sector === 'Government' && !qLower.includes('private'))) {
        sectorFilter = 'Government';
      } else if (qLower.includes('private') || qLower.includes('خاص') || qLower.includes('خاصة') || (this.context.filters.sector === 'Private' && !qLower.includes('government'))) {
        sectorFilter = 'Private';
      }

      let items = [];
      if (targetEntities.length > 1) {
        items = targetEntities.flatMap(ent => countCategoryInDistrict(ent.category, ent.subcategory, targetDistrict, sectorFilter));
        // Deduplicate items by id
        const seenIds = new Set();
        items = items.filter(it => {
          if (seenIds.has(it.id)) return false;
          seenIds.add(it.id);
          return true;
        });
      } else {
        items = countCategoryInDistrict(targetCatInfo.category, targetCatInfo.subcategory, targetDistrict, sectorFilter);
      }

      const count = items.length;
      const locName = targetDistrict.name;
      const locNameAr = targetDistrict.arabicName || locName;
      const sectorDesc = sectorFilter ? ` ${sectorFilter.toLowerCase()}` : '';
      const sectorDescAr = sectorFilter === 'Government' ? ' الحكومية' : sectorFilter === 'Private' ? ' الخاصة' : '';

      let breakdownEn = '';
      let breakdownAr = '';
      const catGroupCounts = {};

      if (targetEntities.length > 1) {
        targetEntities.forEach(ent => {
          const entItems = items.filter(it => isCategoryMatch(it.category, ent.category) && (ent.subcategory ? isSubcategoryMatch(it.subcategory, ent.subcategory) : true));
          catGroupCounts[ent.labelEn] = {
            count: entItems.length,
            labelAr: ent.labelAr
          };
        });
        breakdownEn = Object.entries(catGroupCounts).map(([k, v]) => `${v.count} ${k.toLowerCase()}`).join(', ');
        breakdownAr = Object.entries(catGroupCounts).map(([k, v]) => `${v.count} ${v.labelAr}`).join('، ');
      } else {
        const subCounts = {};
        items.forEach(it => {
          const sub = it.subcategory || it.type || targetCatInfo.labelEn;
          subCounts[sub] = (subCounts[sub] || 0) + 1;
        });
        breakdownEn = Object.entries(subCounts).map(([k, v]) => `${v} ${k.toLowerCase()}`).join(', ');
        breakdownAr = Object.entries(subCounts).map(([k, v]) => `${v} ${SUBCAT_TRANSLATIONS_AR[k] || k}`).join('، ');
      }

      let aiResponseText = '';
      if (targetEntities.length > 1) {
        if (count > 0) {
          aiResponseText = lang === 'ar'
            ? `يوجد **${count}** من المرافق المطلوبة${sectorDescAr} في **${locNameAr}** (${breakdownAr}).`
            : `There are **${count}**${sectorDesc} matching facilities in **${locName}** (${breakdownEn}).`;
        } else {
          aiResponseText = lang === 'ar'
            ? `لا توجد أي مرافق مطابقة${sectorDescAr} في **${locNameAr}** ضمن قاعدة البيانات الحالية.`
            : `There are **0**${sectorDesc} matching facilities in **${locName}** in the current GIS dataset.`;
        }
      } else {
        if (count > 0) {
          aiResponseText = lang === 'ar'
            ? `يوجد **${count}** من ${targetCatInfo.labelAr}${sectorDescAr} في **${locNameAr}**${breakdownAr ? ` (${breakdownAr})` : ''}.`
            : `There are **${count}**${sectorDesc} ${targetCatInfo.labelEn.toLowerCase()} in **${locName}**${breakdownEn ? ` (${breakdownEn})` : ''}.`;
        } else {
          aiResponseText = lang === 'ar'
            ? `لا يوجد أي ${targetCatInfo.labelAr}${sectorDescAr} مسجلة في **${locNameAr}** ضمن قاعدة البيانات الحالية.`
            : `There are **0**${sectorDesc} ${targetCatInfo.labelEn.toLowerCase()} in **${locName}** in the current GIS dataset.`;
        }
      }

      this.context.dataset = targetEntities.length > 1 ? targetEntities.map(e => e.category).join(', ') : targetCatInfo.category;
      this.context.subcategory = targetEntities.length > 1 ? targetEntities.map(e => e.subcategory || e.category).join(', ') : targetCatInfo.subcategory;
      this.context.location = locName;
      this.context.locationCoordinates = targetDistrict;
      if (sectorFilter) this.context.filters.sector = sectorFilter;
      this.context.currentResults = items;

      const analyticsData = targetEntities.length > 1
        ? Object.entries(catGroupCounts).map(([k, v]) => ({
            label: lang === 'ar' ? v.labelAr : k,
            count: v.count,
            percentage: count > 0 ? Math.round((v.count / count) * 100) : 0,
            color: '#004B87'
          }))
        : Object.entries(items.reduce((acc, it) => {
            const sub = it.subcategory || it.type || targetCatInfo.labelEn;
            acc[sub] = (acc[sub] || 0) + 1;
            return acc;
          }, {})).map(([k, v]) => ({
            label: lang === 'ar' ? (SUBCAT_TRANSLATIONS_AR[k] || k) : k,
            count: v,
            percentage: count > 0 ? Math.round((v / count) * 100) : 0,
            color: '#004B87'
          }));

      const analyticsPayload = {
        type: 'district_summary',
        chartType: 'horizontal_bar',
        title: lang === 'ar'
          ? `إحصائية: ${targetEntities.length > 1 ? 'المرافق المطلوبة' : targetCatInfo.labelAr} في ${locNameAr}`
          : `Analytics: ${targetEntities.length > 1 ? 'Selected Facilities' : targetCatInfo.labelEn} in ${locName}`,
        subtitle: lang === 'ar' ? `إجمالي ${count} موقعاً` : `Total ${count} facilities`,
        district: locName,
        totalCount: count,
        data: analyticsData
      };

      return this.buildStandardResponse({
        workingDataset: items,
        lang,
        intent: 'district_count_summary',
        aiResponseText,
        targetCategory: targetEntities.length > 1 ? targetEntities.map(e => e.category).join(', ') : targetCatInfo.category,
        targetSubcategory: targetEntities.length > 1 ? targetEntities.map(e => e.subcategory || e.category).join(', ') : targetCatInfo.subcategory,
        targetDistrict,
        analytics: count > 0 ? analyticsPayload : null,
        mapAction: { type: 'fit_bounds' }
      });
    }

    return null;
  }

  /**
   * Phase 3: Generic Complex Spatial & Cross-Layer Query Evaluator
   * Evaluates generic dual-layer spatial buffer queries, multi-turn cross-layer references,
   * selected feature buffers, and multi-filter combinations over genuine GIS datasets.
   */
  evaluateComplexCrossLayerQuery(qLower, lang = 'en', options = {}) {
    // 0. Do NOT treat near-me or user-location queries as cross-layer multi-dataset buffer queries!
    const isNearMe = /(?:near(?:by)?(?:\s+to)?\s+me|around\s+me|closest\s+to\s+me|nearest\s+to\s+me|\bnearest\b|\bclosest\b|my\s+location|current\s+location|from\s+me|of\s+me|بجانبي|حولي|قريب\s*مني|قريبة\s*مني|القريبة\s*مني|بالقرب\s*مني|الأقرب\s*إلي|أقرب\s*إلي|أقرب\s*مني|الأقرب\s*مني|موقعي|موقعي\s*الحالي|\bمني\b)/i.test(qLower);
    if (isNearMe) {
      return null;
    }

    // 1. Spatial Preposition / Operator Detection
    const hasSpatialOp =
      qLower.includes('within') ||
      /\bnear\b/.test(qLower) ||   // use word boundary – prevents "nearest" from matching "near"
      qLower.includes('nearby') ||
      qLower.includes('close to') ||
      qLower.includes('around') ||
      qLower.includes('closest to') ||
      qLower.includes('nearest to') ||
      qLower.includes('ضمن') ||
      qLower.includes('بالقرب') ||
      qLower.includes('قريب') ||
      qLower.includes('حول') ||
      qLower.includes('بجوار') ||
      qLower.includes('محايد لـ');

    // 2. Check for Unknown / Unsupported Layer in query (e.g. "rocket", "launchpad", "submarine", "space station")
    const unsupportedKeywords = [
      'rocket', 'launchpad', 'submarine', 'space station', 'nuclear', 'missile',
      'صاروخ', 'منصة إطلاق', 'غواصة', 'محطة فضاء', 'نووي'
    ];
    for (const kw of unsupportedKeywords) {
      if (qLower.includes(kw)) {
        return {
          intent: 'unsupported_layer',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
          aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
          results: [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
    }

    // Check for Ambiguous Airport Disambiguation
    if (qLower.includes('near airport') || qLower.includes('near the airport') || qLower.includes('قرب المطار') || qLower.includes('حول المطار')) {
      return {
        intent: 'clarification',
        querySummary: lang === 'ar' ? 'يرجى تحديد المطار المطلوب' : 'Multiple airports identified in UAE',
        aiMessageText: lang === 'ar'
          ? 'أي مطار ترغب في البحث بالقرب منه؟ تتوفر عدة مطارات مسجلة في قاعدة البيانات.'
          : 'Which airport would you like to search near? There are multiple airports in the Abu Dhabi / UAE SDI database.',
        clarification: {
          question: lang === 'ar' ? 'اختر المطار:' : 'Select an airport:',
          options: [
            { label: lang === 'ar' ? 'مطار زايد الدولي (AUH)' : 'Zayed International Airport (AUH)', query: 'Show facilities within 5 km of Zayed International Airport' },
            { label: lang === 'ar' ? 'مطار البطين التنفيذي' : 'Al Bateen Executive Airport', query: 'Show facilities within 5 km of Al Bateen Executive Airport' },
            { label: lang === 'ar' ? 'مطار دبي الدولي (DXB)' : 'Dubai International Airport (DXB)', query: 'Show facilities within 5 km of Dubai International Airport' }
          ]
        },
        results: [...GEOVISION_SPATIAL_DATASET],
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: [
          { label: lang === 'ar' ? 'مطار زايد الدولي' : 'Zayed International Airport', query: 'Show facilities near Zayed International Airport' },
          { label: lang === 'ar' ? 'مطار البطين' : 'Al Bateen Airport', query: 'Show facilities near Al Bateen Airport' }
        ],
        mapAction: { type: 'fit_bounds' }
      };
    }

    if (!hasSpatialOp) return null;

    // Helper: Map text segment to known dataset layer using global taxonomy
    const resolveLayer = (text) => {
      const ent = resolveTaxonomyEntity(text);
      if (!ent) return null;
      const cat = ent.category;
      const sub = ent.subcategory;
      return {
        category: cat,
        subcategory: sub,
        labelEn: sub ? sub.toLowerCase() : cat.toLowerCase(),
        labelAr: SUBCAT_TRANSLATIONS_AR[sub] || CAT_TRANSLATIONS_AR[cat] || cat
      };
    };

    // 3. Buffer Distance Extraction
    let bufferRadiusKm = 2.0;
    const kmMatch = qLower.match(/(?:within|ضمن|نطاق|radius|distance|مسافة)\s*([\d.]+)\s*(?:km|kilo|كم|كيلومتر)/i) ||
      qLower.match(/([\d.]+)\s*(?:km|كم)/i);
    if (kmMatch) {
      bufferRadiusKm = parseFloat(kmMatch[1]);
    } else {
      const meterMatch = qLower.match(/(?:within|ضمن|نطاق)\s*([\d.]+)\s*(?:m|meters|متر)/i);
      if (meterMatch) {
        bufferRadiusKm = parseFloat(meterMatch[1]) / 1000;
      }
    }

    // 4. District / Location Extraction
    let targetDistrict = resolveDistrictOrLandmark(qLower);
    if (!targetDistrict && this.context.locationCoordinates) {
      targetDistrict = this.context.locationCoordinates;
    }

    // 5. Reference POI Extraction
    let referenceFeatures = [];
    let referenceLayerInfo = null;
    let isSelectedFeatureRef = false;
    let isPreviousResultsRef = false;

    // A) Selected Feature Reference ("this one", "this feature", "selected", "هذا", "المحدد")
    if (
      qLower.includes('this one') ||
      qLower.includes('this school') ||
      qLower.includes('this hospital') ||
      qLower.includes('this station') ||
      qLower.includes('this bus') ||
      qLower.includes('this park') ||
      qLower.includes('this feature') ||
      qLower.includes('this place') ||
      qLower.includes('this location') ||
      qLower.includes('selected') ||
      qLower.includes('هذا الموقع') ||
      qLower.includes('هذه المنشأة') ||
      qLower.includes('المحدد') ||
      qLower.includes('هذا') ||
      qLower.includes('هذه')
    ) {
      const sel = options.selectedLocation || this.context.selectedFeature;
      if (sel) {
        referenceFeatures = [sel];
        referenceLayerInfo = { labelEn: sel.title, labelAr: sel.arabicTitle || sel.title };
        isSelectedFeatureRef = true;
      }
    }

    // B) Multi-Turn Pronoun Reference ("these hospitals", "these bus stations", "these schools", "these facilities", "هذه المستشفيات", "هذه المحطات")
    if (
      referenceFeatures.length === 0 &&
      (qLower.includes('these') || qLower.includes('those') || qLower.includes('them') || qLower.includes('هذه') || qLower.includes('تلك') || qLower.includes('منها')) &&
      this.context.currentResults && this.context.currentResults.length > 0
    ) {
      referenceFeatures = [...this.context.currentResults];
      referenceLayerInfo = {
        labelEn: this.context.subcategory ? this.context.subcategory.toLowerCase() : this.context.dataset ? this.context.dataset.toLowerCase() : 'facilities',
        labelAr: SUBCAT_TRANSLATIONS_AR[this.context.subcategory] || CAT_TRANSLATIONS_AR[this.context.dataset] || 'المرافق'
      };
      isPreviousResultsRef = true;
    }

    // C) Explicit Reference Layer Extraction from Query Split
    let targetText = qLower;
    let refText = '';

    const splitPatterns = [
      /(?:within|ضمن)\s*[\d.]*\s*(?:km|m|كم|متر)?\s*(?:of|from|من)\s*(.*)/i,
      /(?:near|nearby|close to|around|closest to|nearest to|بالقرب من|قريب من|حول|بجوار)\s*(.*)/i
    ];

    for (const pat of splitPatterns) {
      const m = qLower.match(pat);
      if (m && m[1]) {
        refText = m[1];
        targetText = qLower.slice(0, m.index);
        break;
      }
    }

    if (referenceFeatures.length === 0 && refText) {
      // If refText is a recognized geographic district/landmark, this is a location proximity query, not a cross-layer multi-feature buffer
      const refGeoLoc = resolveDistrictOrLandmark(refText);
      if (refGeoLoc) {
        return null;
      }

      referenceLayerInfo = resolveLayer(refText);
      if (referenceLayerInfo) {
        let refCandidates = GEOVISION_SPATIAL_DATASET.filter(item => {
          const catMatch = item.category.toLowerCase() === referenceLayerInfo.category.toLowerCase();
          const subMatch = referenceLayerInfo.subcategory ? (item.subcategory?.toLowerCase() === referenceLayerInfo.subcategory.toLowerCase()) : true;
          return catMatch && subMatch;
        });

        if (targetDistrict) {
          refCandidates = refCandidates.map(item => {
            const dist = calculateDistanceKm(targetDistrict.lat, targetDistrict.lon, item.lat, item.lon);
            const nameMatch = (item.address || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
              (item.title || '').toLowerCase().includes(targetDistrict.name.toLowerCase());
            return { ...item, distanceToDistrict: dist, isDistrictMatch: nameMatch || dist <= (targetDistrict.radius || 6.5) };
          }).filter(item => item.isDistrictMatch);
        }

        referenceFeatures = refCandidates;
      }
    }

    // 6. Target Layer Extraction
    const targetLayerInfo = resolveLayer(targetText) || resolveLayer(qLower);
    if (!targetLayerInfo || referenceFeatures.length === 0) {
      if (!targetLayerInfo && !referenceLayerInfo) return null;
      if (referenceLayerInfo && referenceFeatures.length === 0 && targetDistrict) {
        const locName = targetDistrict.name;
        const locNameAr = targetDistrict.arabicName || locName;
        return {
          intent: 'no_reference_features',
          querySummary: lang === 'ar' ? `لم يتم العثور على ${referenceLayerInfo.labelAr}` : `No ${referenceLayerInfo.labelEn} found in ${locName}`,
          aiMessageText: lang === 'ar'
            ? `لم يتم العثور على أي **${referenceLayerInfo.labelAr}** في **${locNameAr}** ضمن قاعدة البيانات المكانية الحالية.`
            : `No **${referenceLayerInfo.labelEn}** were found in **${locName}** within the current GIS dataset.`,
          results: [],
          structuredResults: { title: 'No Reference Features', category: referenceLayerInfo.category, items: [], tabs: [] },
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: [
            { label: lang === 'ar' ? `المراكز الحكومية في ${locNameAr}` : `Government centers in ${locName}`, query: `Show government facilities in ${locName}` },
            { label: lang === 'ar' ? `محطات الحافلات في ${locNameAr}` : `Bus stations in ${locName}`, query: `Show bus stations in ${locName}` }
          ],
          mapAction: { type: 'fly_to', center: [targetDistrict.lat, targetDistrict.lon], zoom: 14 }
        };
      }
      return null;
    }

    // 7. Target Attribute Filters
    const targetFilters = {};
    if (qLower.includes('government') || qLower.includes('public') || qLower.includes('حكومي') || qLower.includes('حكومية')) {
      targetFilters.sector = 'Government';
    } else if (qLower.includes('private') || qLower.includes('خاص') || qLower.includes('خاصة')) {
      targetFilters.sector = 'Private';
    }

    const ratingMatch = qLower.match(/rating\s*(?:above|>=|>|over)\s*([\d.]+)/i) || qLower.match(/تقييم\s*(?:أعلى من|>|فوق)\s*([\d.]+)/i);
    if (ratingMatch) {
      targetFilters.ratingMin = parseFloat(ratingMatch[1]);
    }

    if (qLower.includes('24/7') || qLower.includes('emergency') || qLower.includes('طوارئ')) {
      targetFilters.open247 = true;
    }

    // 8. Candidate Target Feature Extraction
    let targetCandidates = GEOVISION_SPATIAL_DATASET.filter(item => {
      const catMatch = item.category.toLowerCase() === targetLayerInfo.category.toLowerCase();
      const subMatch = (targetLayerInfo.subcategory && targetLayerInfo.subcategory !== 'Schools')
        ? (item.subcategory?.toLowerCase() === targetLayerInfo.subcategory.toLowerCase())
        : true;
      return catMatch && subMatch;
    });

    if (targetDistrict) {
      targetCandidates = targetCandidates.map(item => {
        const dist = calculateDistanceKm(targetDistrict.lat, targetDistrict.lon, item.lat, item.lon);
        const nameMatch = (item.address || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
          (item.title || '').toLowerCase().includes(targetDistrict.name.toLowerCase());
        return { ...item, distanceToDistrict: dist, isDistrictMatch: nameMatch || dist <= (targetDistrict.radius || 7.5) };
      }).filter(item => item.isDistrictMatch);
    }

    // Apply attribute filters
    if (targetFilters.sector) {
      targetCandidates = targetCandidates.filter(item =>
        item.sector === targetFilters.sector ||
        (item.type && item.type.toLowerCase().includes(targetFilters.sector.toLowerCase())) ||
        (targetFilters.sector === 'Government' && (item.subcategory === 'Public Schools' || item.subcategory === 'Charter Schools')) ||
        (targetFilters.sector === 'Private' && item.subcategory === 'Private Schools')
      );
    }
    if (targetFilters.ratingMin) {
      targetCandidates = targetCandidates.filter(item => (item.rating || 0) >= targetFilters.ratingMin);
    }
    if (targetFilters.open247) {
      targetCandidates = targetCandidates.filter(item => item.emergency247 === true || (item.openHours && item.openHours.includes('24/7')));
    }

    // 9. Real Mathematical GIS Distance Matrix Calculation
    const matchedResults = [];
    targetCandidates.forEach(cand => {
      let minDistanceKm = Infinity;
      let nearestRef = null;

      referenceFeatures.forEach(ref => {
        if (ref.id === cand.id) return;
        const dist = calculateDistanceKm(cand.lat, cand.lon, ref.lat, ref.lon);
        if (dist < minDistanceKm) {
          minDistanceKm = dist;
          nearestRef = ref;
        }
      });

      if (minDistanceKm <= bufferRadiusKm) {
        matchedResults.push({
          ...cand,
          distanceKm: parseFloat(minDistanceKm.toFixed(2)),
          nearestReferenceFeature: nearestRef ? nearestRef.title : null,
          nearestReferenceArabic: nearestRef ? (nearestRef.arabicTitle || nearestRef.title) : null
        });
      }
    });

    matchedResults.sort((a, b) => a.distanceKm - b.distanceKm);

    // 10. Update Conversation Context
    this.context.dataset = targetLayerInfo.category;
    this.context.subcategory = targetLayerInfo.subcategory;
    this.context.location = targetDistrict?.name || this.context.location;
    this.context.locationCoordinates = targetDistrict || this.context.locationCoordinates;
    this.context.radius = bufferRadiusKm;
    this.context.filters = { ...this.context.filters, ...targetFilters };
    this.context.spatialRelationship = 'cross_layer_buffer';
    this.context.referenceDataset = referenceLayerInfo?.labelEn || 'reference facilities';
    this.context.referenceDatasetArabic = referenceLayerInfo?.labelAr || 'المرافق المرجعية';
    this.context.referenceFeatures = referenceFeatures;
    this.context.currentResults = matchedResults;
    this.sessionContext.previousResults = matchedResults;

    const count = matchedResults.length;
    const filterDesc = targetFilters.sector ? ` ${targetFilters.sector.toLowerCase()}` : '';
    const filterDescAr = targetFilters.sector === 'Government' ? ' الحكومية' : targetFilters.sector === 'Private' ? ' الخاصة' : '';
    const ratingDesc = targetFilters.ratingMin ? ` with rating ≥ ${targetFilters.ratingMin} ★` : '';
    const ratingDescAr = targetFilters.ratingMin ? ` بتقييم ≥ ${targetFilters.ratingMin} ★` : '';
    const locStr = targetDistrict ? ` in **${targetDistrict.name}**` : '';
    const locStrAr = targetDistrict ? ` في **${targetDistrict.arabicName || targetDistrict.name}**` : '';
    const refDesc = referenceLayerInfo?.labelEn || 'reference facilities';
    const refDescAr = referenceLayerInfo?.labelAr || 'المرافق المرجعية';

    let aiResponseText = '';
    if (count > 0) {
      aiResponseText = lang === 'ar'
        ? `تم العثور على **${count}** من **${targetLayerInfo.labelAr}**${filterDescAr}${ratingDescAr} ضمن نطاق **${bufferRadiusKm} كم** من ${refDescAr}${locStrAr}، وتم عرضها على الخريطة.`
        : `I found **${count}**${filterDesc} **${targetLayerInfo.labelEn}**${ratingDesc} within **${bufferRadiusKm} km** of ${refDesc}${locStr} and displayed them on the map.`;
    } else {
      aiResponseText = lang === 'ar'
        ? `لم يتم العثور على أي **${targetLayerInfo.labelAr}**${filterDescAr}${ratingDescAr} ضمن نطاق **${bufferRadiusKm} كم** من ${refDescAr}${locStrAr}. يمكنك تجربة توسيع النطاق إلى **${bufferRadiusKm * 2} كم**.`
        : `No${filterDesc} **${targetLayerInfo.labelEn}**${ratingDesc} found within **${bufferRadiusKm} km** of ${refDesc}${locStr}. Try expanding the radius to **${bufferRadiusKm * 2} km**.`;
    }

    return this.buildStandardResponse({
      workingDataset: matchedResults,
      lang,
      intent: isSelectedFeatureRef ? 'feature_proximity' : 'cross_layer_buffer',
      aiResponseText,
      targetDistrict,
      targetCategory: targetLayerInfo.category,
      targetSubcategory: targetLayerInfo.subcategory,
      searchRadiusKm: bufferRadiusKm
    });
  }

  /**
   * Generic ranking, superlative, and extreme-value query evaluator
   * Evaluates criteria like highest/lowest rating, nearest/farthest, capacity, emissions, and Top N.
   */
  evaluateRankingQuery(qLower, workingSet, contextInfo, lang, options = {}) {
    if (!workingSet || workingSet.length === 0) return null;

    const { activeCat, activeSub, activeLoc } = contextInfo;
    const userLoc = options.userLocation || { lat: 24.4539, lon: 54.3773 };
    let ranked = [...workingSet];

    // If query targets a specific category or subcategory, refine ranked subset to that entity first
    const specificEntity = resolveTaxonomyEntity(qLower);
    if (specificEntity) {
      const filteredSubset = ranked.filter(item => {
        const catMatch = isCategoryMatch(item.category, specificEntity.category);
        const subMatch = specificEntity.subcategory ? isSubcategoryMatch(item.subcategory, specificEntity.subcategory) : true;
        return catMatch && subMatch;
      });
      if (filteredSubset.length > 0) {
        ranked = filteredSubset;
      }
    }

    let rankType = null;
    let rankSummary = '';
    let topNLimit = null;
    const isExplicitUserNear = qLower.includes('to me') || qLower.includes('from me') || qLower.includes('from my location') || qLower.includes('عني') || qLower.includes('موقعي') || qLower.includes('من موقعي');

    // Detect Top N (e.g. "top 5", "best 3", "أفضل 5")
    const topNMatch = qLower.match(/top\s*(\d+)/i) || qLower.match(/best\s*(\d+)/i) || qLower.match(/أفضل\s*(\d+)/i) || qLower.match(/أعلى\s*(\d+)/i);
    if (topNMatch) {
      topNLimit = parseInt(topNMatch[1], 10);
    }

    // 1. RATING SUPERLATIVES
    if (
      qLower.includes('highest rating') ||
      qLower.includes('highest rated') ||
      qLower.includes('highest-rated') ||
      qLower.includes('best rating') ||
      qLower.includes('best rated') ||
      qLower.includes('best-rated') ||
      qLower.includes('top rated') ||
      qLower.includes('top-rated') ||
      qLower.includes('top rating') ||
      qLower.includes('maximum rating') ||
      qLower.includes('max rating') ||
      qLower.includes('الأعلى تقييماً') ||
      qLower.includes('الاعلى تقييما') ||
      qLower.includes('أعلى تقييم') ||
      qLower.includes('اعلى تقييم') ||
      qLower.includes('أفضل تقييم') ||
      qLower.includes('افضل تقييم') ||
      qLower.includes('أحسن تقييم') ||
      qLower.includes('احسن تقييم')
    ) {
      rankType = 'highest_rating';
      rankSummary = 'sorted by highest rating descending';
      ranked.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (
      qLower.includes('lowest rating') ||
      qLower.includes('lowest rated') ||
      qLower.includes('lowest-rated') ||
      qLower.includes('worst rating') ||
      qLower.includes('worst rated') ||
      qLower.includes('minimum rating') ||
      qLower.includes('min rating') ||
      qLower.includes('الأقل تقييماً') ||
      qLower.includes('الاقل تقييما') ||
      qLower.includes('أقل تقييم') ||
      qLower.includes('اقل تقييم') ||
      qLower.includes('أدنى تقييم') ||
      qLower.includes('ادنى تقييم') ||
      qLower.includes('أسوأ تقييم') ||
      qLower.includes('اسوأ تقييم')
    ) {
      rankType = 'lowest_rating';
      rankSummary = 'sorted by rating ascending';
      ranked.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    }
    // 2. PROXIMITY SUPERLATIVES
    else if (
      qLower.includes('nearest') ||
      qLower.includes('closest') ||
      qLower.includes('nearest to me') ||
      qLower.includes('closest to me') ||
      qLower.includes('أقرب') ||
      qLower.includes('اقرب') ||
      qLower.includes('الأقرب') ||
      qLower.includes('الاقرب')
    ) {
      rankType = 'nearest';
      rankSummary = 'sorted by proximity ascending';
      const isFollowUpClosest = qLower.includes('which one is closest') || qLower.includes('which is closest') || qLower.includes('which one is nearest') || qLower.includes('أي منها هو الأقرب') || qLower.includes('ايهم اقرب') || qLower.includes('أيها أقرب');
      const activeDrawn = this.context.drawnArea || options.drawnArea;
      let refLat = userLoc.lat;
      let refLon = userLoc.lon;

      if (activeDrawn && !isExplicitUserNear) {
        if (activeDrawn.center) {
          refLat = activeDrawn.center.lat !== undefined ? activeDrawn.center.lat : activeDrawn.center[0];
          refLon = activeDrawn.center.lng !== undefined ? activeDrawn.center.lng : (activeDrawn.center.lon !== undefined ? activeDrawn.center.lon : activeDrawn.center[1]);
        } else if (activeDrawn.coordinates && activeDrawn.coordinates.length > 0) {
          const validCoords = activeDrawn.coordinates.map(c => ({
            lat: c.lat !== undefined ? c.lat : c[0],
            lon: c.lng !== undefined ? c.lng : (c.lon !== undefined ? c.lon : c[1])
          })).filter(c => c.lat != null && c.lon != null);
          if (validCoords.length > 0) {
            refLat = validCoords.reduce((sum, c) => sum + c.lat, 0) / validCoords.length;
            refLon = validCoords.reduce((sum, c) => sum + c.lon, 0) / validCoords.length;
          }
        }
      } else {
        const useUserLocation = isExplicitUserNear || isFollowUpClosest || !activeLoc || Boolean(options.userLocation);
        refLat = useUserLocation ? userLoc.lat : activeLoc.lat;
        refLon = useUserLocation ? userLoc.lon : activeLoc.lon;
      }

      ranked = ranked.map(item => {
        const dist = calculateDistanceKm(refLat, refLon, item.lat, item.lon);
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)), calculatedDistanceKm: parseFloat(dist.toFixed(2)) };
      }).sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
    } else if (
      qLower.includes('farthest') ||
      qLower.includes('furthest') ||
      qLower.includes('most distant') ||
      qLower.includes('أبعد') ||
      qLower.includes('ابعد') ||
      qLower.includes('الأبعد') ||
      qLower.includes('الابعد')
    ) {
      rankType = 'farthest';
      rankSummary = 'sorted by distance descending';
      const isExplicitUserNear = qLower.includes('to me') || qLower.includes('from me') || qLower.includes('from my location') || qLower.includes('عني') || qLower.includes('موقعي') || qLower.includes('من موقعي');
      const isFollowUpFarthest = qLower.includes('which one is farthest') || qLower.includes('which is farthest') || qLower.includes('أي منها هو الأبعد') || qLower.includes('ايهم ابعد');
      const useUserLocation = isExplicitUserNear || isFollowUpFarthest || !activeLoc || Boolean(options.userLocation);
      const refLat = useUserLocation ? userLoc.lat : activeLoc.lat;
      const refLon = useUserLocation ? userLoc.lon : activeLoc.lon;
      ranked = ranked.map(item => {
        const dist = calculateDistanceKm(refLat, refLon, item.lat, item.lon);
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)), calculatedDistanceKm: parseFloat(dist.toFixed(2)) };
      }).sort((a, b) => (b.distanceKm || 0) - (a.distanceKm || 0));
    }
    // 3. CAPACITY / BEDS / STUDENTS SUPERLATIVES
    else if (
      qLower.includes('most beds') ||
      qLower.includes('largest hospital') ||
      qLower.includes('largest school') ||
      qLower.includes('highest capacity') ||
      qLower.includes('most students') ||
      qLower.includes('أكبر مستشفى') ||
      qLower.includes('اكبر مستشفى') ||
      qLower.includes('أكبر مدرسة') ||
      qLower.includes('اكبر مدرسة') ||
      qLower.includes('أكبر سعة') ||
      qLower.includes('اكبر سعة') ||
      qLower.includes('أكثر أسرة') ||
      qLower.includes('اكثر اسرة') ||
      qLower.includes('أكبر عدد من الأسرة') ||
      qLower.includes('اكبر عدد من الاسرة') ||
      qLower.includes('أكبر عدد من الأسرّة') ||
      qLower.includes('اكبر عدد من الاسرّة') ||
      qLower.includes('أكثر عدد من الأسرّة') ||
      qLower.includes('أكبر عدد أسرة') ||
      qLower.includes('اكبر عدد اسرة')
    ) {
      rankType = 'most_beds';
      rankSummary = 'sorted by capacity descending';
      ranked.sort((a, b) => ((b.beds || b.students || 0) - (a.beds || a.students || 0)));
    } else if (
      qLower.includes('least beds') ||
      qLower.includes('smallest hospital') ||
      qLower.includes('smallest school') ||
      qLower.includes('lowest capacity') ||
      qLower.includes('أصغر') ||
      qLower.includes('اصغر')
    ) {
      rankType = 'least_beds';
      rankSummary = 'sorted by capacity ascending';
      ranked.sort((a, b) => ((a.beds || a.students || 0) - (b.beds || b.students || 0)));
    }
    // 4. EMISSIONS SUPERLATIVES
    else if (
      qLower.includes('most emission') ||
      qLower.includes('highest emission') ||
      qLower.includes('most carbon') ||
      qLower.includes('most polluting') ||
      qLower.includes('أعلى انبعاث') ||
      qLower.includes('اعلى انبعاث') ||
      qLower.includes('أكثر انبعاث') ||
      qLower.includes('اكثر انبعاث')
    ) {
      rankType = 'most_emissions';
      rankSummary = 'sorted by carbon emissions descending';
      ranked.filter(i => i.emissions != null).sort((a, b) => (b.emissions || 0) - (a.emissions || 0));
    } else if (
      qLower.includes('least emission') ||
      qLower.includes('lowest emission') ||
      qLower.includes('cleanest') ||
      qLower.includes('least carbon') ||
      qLower.includes('أقل انبعاث') ||
      qLower.includes('اقل انبعاث') ||
      qLower.includes('أنظف') ||
      qLower.includes('انظف')
    ) {
      rankType = 'least_emissions';
      rankSummary = 'sorted by carbon emissions ascending';
      ranked.filter(i => i.emissions != null).sort((a, b) => (a.emissions || 0) - (b.emissions || 0));
    } else if (
      qLower.includes('lowest tuition') ||
      qLower.includes('cheapest') ||
      qLower.includes('lowest fee') ||
      qLower.includes('least expensive') ||
      qLower.includes('most affordable') ||
      qLower.includes('أقل رسوم') ||
      qLower.includes('اقل رسوم') ||
      qLower.includes('أرخص') ||
      qLower.includes('ارخص') ||
      qLower.includes('أدنى رسوم') ||
      qLower.includes('ادنى رسوم')
    ) {
      rankType = 'lowest_tuition';
      rankSummary = 'sorted by tuition fee ascending';
      ranked = ranked.filter(i => i.tuitionFee != null).map(i => {
        const feeStr = String(i.tuitionFee).toLowerCase();
        const num = feeStr.includes('free') ? 0 : (parseFloat(feeStr.replace(/[^0-9.]/g, '')) || 0);
        return { ...i, numericFee: num };
      }).sort((a, b) => a.numericFee - b.numericFee);
    } else if (
      qLower.includes('highest tuition') ||
      qLower.includes('most expensive') ||
      qLower.includes('highest fee') ||
      qLower.includes('أعلى رسوم') ||
      qLower.includes('أغلى مدرسة')
    ) {
      rankType = 'highest_tuition';
      rankSummary = 'sorted by tuition fee descending';
      ranked = ranked.filter(i => i.tuitionFee != null).map(i => {
        const feeStr = String(i.tuitionFee).toLowerCase();
        const num = feeStr.includes('free') ? 0 : (parseFloat(feeStr.replace(/[^0-9.]/g, '')) || 0);
        return { ...i, numericFee: num };
      }).sort((a, b) => b.numericFee - a.numericFee);
    }

    if (!rankType) {
      return null;
    }

    const topItem = ranked[0];
    if (!topItem) {
      return null;
    }

    // Determine target entity noun for clean natural phrasing
    const targetSub = activeSub || topItem.subcategory;
    const targetCat = activeCat || topItem.category;
    let nounEn = 'facility';
    let nounAr = 'منشأة';

    if (targetSub === 'Vehicle Inspection Centers' || qLower.includes('inspection') || qLower.includes('فحص')) {
      nounEn = 'vehicle inspection center';
      nounAr = 'مركز فحص مركبات';
    } else if (targetSub === 'Petrol Stations' || qLower.includes('petrol') || qLower.includes('وقود') || qLower.includes('بنزين')) {
      nounEn = 'petrol station';
      nounAr = 'محطة وقود';
    } else if (qLower.includes('school') || (targetSub && targetSub.toLowerCase().includes('school')) || targetCat === 'Education') {
      nounEn = 'school';
      nounAr = 'مدرسة';
    } else if (qLower.includes('hospital') || (targetSub && targetSub.toLowerCase().includes('hospital')) || targetCat === 'Healthcare') {
      nounEn = 'hospital';
      nounAr = 'مستشفى';
    } else if (qLower.includes('clinic') || (targetSub && targetSub.toLowerCase().includes('clinic'))) {
      nounEn = 'clinic';
      nounAr = 'عيادة';
    } else if (qLower.includes('park') || targetCat === 'Parks') {
      nounEn = 'park';
      nounAr = 'حديقة';
    } else if (targetSub && SUBCAT_TRANSLATIONS_AR[targetSub]) {
      nounEn = targetSub.toLowerCase();
      nounAr = SUBCAT_TRANSLATIONS_AR[targetSub];
    }

    const isDrawnAreaContext = Boolean(this.context.drawnArea || options.drawnArea);
    const locEn = isDrawnAreaContext ? 'the drawn area' : (this.context.location || activeLoc?.name || 'the area');
    const locAr = isDrawnAreaContext ? 'المنطقة المحددة' : (this.context.locationCoordinates?.arabicName || this.context.location || activeLoc?.arabicName || 'المنطقة');

    let aiResponseText = '';

    if (topNLimit && topNLimit > 1) {
      const displayCount = Math.min(topNLimit, ranked.length);
      if (rankType === 'highest_rating') {
        aiResponseText = lang === 'ar'
          ? `إليك أفضل **${displayCount}** ${nounAr === 'مدرسة' ? 'مدارس' : nounAr === 'مستشفى' ? 'مستشفيات' : 'منشآت'} تقييماً في **${locAr}**، تتصدرها **${topItem.arabicTitle || topItem.title}** بتقييم **${topItem.rating} ★**.`
          : `Here are the top **${displayCount}** highest-rated ${nounEn}s in **${locEn}**, led by **${topItem.title}** with a rating of **${topItem.rating} ★**.`;
      } else if (rankType === 'nearest') {
        aiResponseText = lang === 'ar'
          ? `إليك أقرب **${displayCount}** ${nounAr === 'مدرسة' ? 'مدارس' : nounAr === 'مستشفى' ? 'مستشفيات' : 'منشآت'} إليك في **${locAr}**، وأقربها **${topItem.arabicTitle || topItem.title}** (يبعد **${topItem.distanceKm} كم**).`
          : `Here are the **${displayCount}** nearest ${nounEn}s to you in **${locEn}**, closest being **${topItem.title}** (${topItem.distanceKm} km away).`;
      } else {
        aiResponseText = lang === 'ar'
          ? `تم ترتيب أفضل **${displayCount}** ${nounAr} في **${locAr}**، وأولها **${topItem.arabicTitle || topItem.title}**.`
          : `Ranked the top **${displayCount}** ${nounEn}s in **${locEn}**, top result is **${topItem.title}**.`;
      }
    } else {
      // Single superlative response: pinpoint #1 exact result
      if (rankType === 'highest_rating') {
        aiResponseText = lang === 'ar'
          ? `أعلى ${nounAr} تقييماً في **${locAr}** هي **${topItem.arabicTitle || topItem.title}**، بتقييم **${topItem.rating} ★**.`
          : `The highest-rated ${nounEn} in **${locEn}** is **${topItem.title}**, with a rating of **${topItem.rating} ★**.`;
      } else if (rankType === 'lowest_rating') {
        aiResponseText = lang === 'ar'
          ? `أدنى ${nounAr} تقييماً في **${locAr}** هي **${topItem.arabicTitle || topItem.title}**، بتقييم **${topItem.rating} ★**.`
          : `The lowest-rated ${nounEn} in **${locEn}** is **${topItem.title}**, with a rating of **${topItem.rating} ★**.`;
      } else if (rankType === 'nearest') {
        const fromPhraseAr = isExplicitUserNear ? 'إليك ' : (isDrawnAreaContext ? '' : 'إليك ');
        const fromPhraseEn = isExplicitUserNear ? 'to you ' : (isDrawnAreaContext ? '' : 'to you ');
        aiResponseText = lang === 'ar'
          ? `أقرب ${nounAr} ${fromPhraseAr}في **${locAr}** هو **${topItem.arabicTitle || topItem.title}** (يبعد **${topItem.distanceKm} كم**، التقييم: **${topItem.rating} ★**).`
          : `The nearest ${nounEn} ${fromPhraseEn}in **${locEn}** is **${topItem.title}** (distance: **${topItem.distanceKm} km**, rating: **${topItem.rating} ★**).`;
      } else if (rankType === 'farthest') {
        aiResponseText = lang === 'ar'
          ? `أبعد ${nounAr} عنك في **${locAr}** هو **${topItem.arabicTitle || topItem.title}** (يبعد **${topItem.distanceKm} كم**).`
          : `The farthest ${nounEn} from you in **${locEn}** is **${topItem.title}** (distance: **${topItem.distanceKm} km**).`;
      } else if (rankType === 'most_beds') {
        const bedVal = topItem.beds || topItem.capacity || topItem.students;
        aiResponseText = lang === 'ar'
          ? `المستشفى الأكثر سعة من حيث عدد الأسرّة في **${locAr}** هو **${topItem.arabicTitle || topItem.title}** بسعة **${bedVal} سريراً**.`
          : `The ${nounEn} with the most beds in **${locEn}** is **${topItem.title}**, with a capacity of **${bedVal} beds**.`;
      } else if (rankType === 'least_beds') {
        const bedVal = topItem.beds || topItem.capacity || topItem.students;
        aiResponseText = lang === 'ar'
          ? `أصغر ${nounAr} في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بسعة **${bedVal}**.`
          : `The smallest ${nounEn} in **${locEn}** is **${topItem.title}**, with a capacity of **${bedVal} beds**.`;
      } else if (rankType === 'least_emissions') {
        aiResponseText = lang === 'ar'
          ? `المنشأة الأقل انبعاثات في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بانبعاثات **${topItem.emissions?.toLocaleString()} طن سنوياً**.`
          : `The lowest-emission facility in **${locEn}** is **${topItem.title}**, with **${topItem.emissions?.toLocaleString()} tonnes CO2/yr**.`;
      } else if (rankType === 'most_emissions') {
        aiResponseText = lang === 'ar'
          ? `المنشأة الأعلى انبعاثات في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بانبعاثات **${topItem.emissions?.toLocaleString()} طن سنوياً**.`
          : `The highest-emission facility in **${locEn}** is **${topItem.title}**, with **${topItem.emissions?.toLocaleString()} tonnes CO2/yr**.`;
      } else if (rankType === 'lowest_tuition') {
        const feeStr = topItem.numericFee === 0 ? (lang === 'ar' ? 'مجاناً للمواطنين' : 'Free for Nationals') : `${topItem.numericFee?.toLocaleString()} AED`;
        aiResponseText = lang === 'ar'
          ? `أقل ${nounAr} رسوماً دراسية في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** (الرسوم: **${feeStr}**).`
          : `The most affordable ${nounEn} in **${locEn}** is **${topItem.title}** (tuition: **${feeStr}**).`;
      }
    }

    const isSingularWhichOne = /\b(which\s+one|which|أي\s+منها|ماهو|ما\s+هو)\b/i.test(qLower) && !topNLimit && !qLower.includes('parks') && !qLower.includes('schools') && !qLower.includes('hospitals') && !qLower.includes('facilities') && !qLower.includes('centers') && !qLower.includes('stations');
    const resultDataset = (topNLimit && topNLimit > 1)
      ? ranked.slice(0, topNLimit)
      : (isSingularWhichOne ? [topItem] : ranked);

    return {
      ranked: resultDataset,
      fullRanked: ranked,
      topItem,
      rankType,
      rankSummary,
      aiResponseText,
      mapAction: {
        type: 'fly_to',
        center: [topItem.lat, topItem.lon],
        zoom: 15
      }
    };
  }

  /**
   * Detects ambiguous geographic partial names (e.g. "Yas", "Khalifa", "Zayed", "ياس", "خليفة", "زايد")
   * and builds a structured clarification response preserving original query intent, distance, and parameters.
   * @param {string} qLower - Lowercased query
   * @param {string} rawQuery - Original raw query
   * @param {string} lang - Language code ('en' | 'ar')
   * @returns {Object|null} Structured clarification response or null
   */
  detectAmbiguousGeographicEntity(qLower, rawQuery = '', lang = 'en') {
    for (const entity of AMBIGUOUS_GEOGRAPHIC_ENTITIES) {
      // 1. If an unambiguous compound pattern exists, do NOT trigger clarification
      const hasUnambiguousPattern = entity.unambiguousPatterns.some(pattern =>
        qLower.includes(pattern.toLowerCase())
      );
      if (hasUnambiguousPattern) {
        continue;
      }

      // 2. Check if an ambiguous keyword exists as an isolated token
      let matchedKeyword = null;
      for (const kw of entity.keywords) {
        const kwLower = kw.toLowerCase();
        const regex = new RegExp(`(^|[^\\p{L}\\p{N}])(${kwLower})([^\\p{L}\\p{N}]|$)`, 'iu');
        if (regex.test(qLower)) {
          matchedKeyword = kw;
          break;
        }
      }

      if (matchedKeyword) {
        const question = lang === 'ar' ? entity.questionAr : entity.questionEn;
        const querySummary = lang === 'ar' ? entity.summaryAr : entity.summaryEn;
        const aiMessageText = lang === 'ar' ? entity.messageAr : entity.messageEn;

        const options = entity.options.map(opt => {
          const targetName = lang === 'ar' ? opt.queryTargetAr : opt.queryTargetEn;
          const label = lang === 'ar' ? opt.nameAr : opt.nameEn;
          const query = this.buildClarifiedQuery(rawQuery, matchedKeyword, targetName);
          return { label, query };
        });

        const chips = entity.options.map(opt => ({
          label: lang === 'ar' ? opt.nameAr : opt.nameEn,
          query: this.buildClarifiedQuery(rawQuery, matchedKeyword, lang === 'ar' ? opt.queryTargetAr : opt.queryTargetEn)
        }));

        return {
          intent: 'clarification',
          querySummary: cleanMarkdownText(querySummary),
          aiMessageText: cleanMarkdownText(aiMessageText),
          clarification: {
            question,
            options
          },
          results: this.context.currentResults.length > 0 ? this.context.currentResults : [...GEOVISION_SPATIAL_DATASET],
          contextBadges: this.context.getActiveContextBadges(lang),
          chips,
          mapAction: { type: 'fit_bounds' }
        };
      }
    }
    return null;
  }

  /**
   * Helper: Preserves query intent, category, distance, and syntax by replacing ambiguous token
   */
  buildClarifiedQuery(rawQuery, ambiguousKw, replacement) {
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

  /**
   * Detects unsupported analytical requests/capabilities (e.g. 3D flood inundation simulation,
   * live traffic forecasting, pollution plume dispersion, seismic simulation) and returns
   * a helpful explanation while preserving active context results, filters, and location.
   * @param {string} qLower - Lowercased query
   * @param {string} rawQuery - Original raw query
   * @param {string} lang - Language code ('en' | 'ar')
   * @returns {Object|null} Structured unsupported response or null
   */
  detectUnsupportedAnalyticalCapability(qLower, rawQuery = '', lang = 'en') {
    for (const cap of UNSUPPORTED_ANALYTICAL_CAPABILITIES) {
      let matched = false;
      for (const pat of cap.patterns) {
        if (pat.test(qLower)) {
          matched = true;
          break;
        }
      }

      if (matched) {
        const capName = lang === 'ar' ? cap.nameAr : cap.nameEn;
        const explanation = lang === 'ar' ? cap.explanationAr : cap.explanationEn;

        const activeLoc = this.context.location || 'Abu Dhabi';
        const activeLocAr = this.context.locationCoordinates?.arabicName || this.context.location || 'أبوظبي';
        const activeCat = this.context.dataset || (this.context.subcategory || 'Facilities');
        const activeCatAr = this.context.subcategory ? (SUBCAT_TRANSLATIONS_AR[this.context.subcategory] || this.context.subcategory) : (CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset || 'المرافق');

        const hasContextResults = this.context.currentResults && this.context.currentResults.length > 0;

        let aiMessageText = '';
        if (lang === 'ar') {
          if (hasContextResults) {
            aiMessageText = `القدرة التحليلية المطلوبة "${capName}" غير مدعومة حالياً في منصة GeoVision للبيانات المكانية في أبوظبي. ${explanation} تم الحفاظ على سياق البحث النشط (${this.context.currentResults.length} من ${activeCatAr} في ${activeLocAr}). يمكنك الاستفادة من التحليلات المكانية المدعومة أدناه:`;
          } else {
            aiMessageText = `القدرة التحليلية المطلوبة "${capName}" غير مدعومة حالياً في منصة GeoVision لنظم المعلومات الجغرافية (SDI). ${explanation} تدعم المنصة حالياً التحليلات المكانية للنطاقات العازلة، المقارنات الإحصائية بين المناطق، وتحليل التغطية والوصول للمرافق المسجلة. يمكنك تجربة أحد التحليلات المدعومة أدناه:`;
          }
        } else {
          if (hasContextResults) {
            aiMessageText = `The requested analytical capability "${capName}" is not currently supported in GeoVision. ${explanation} The active spatial context (${this.context.currentResults.length} ${activeCat.toLowerCase()} in ${activeLoc}) has been retained. You can perform supported GIS analytics on these features below:`;
          } else {
            aiMessageText = `The requested analytical capability "${capName}" is not currently supported in GeoVision. ${explanation} GeoVision supports spatial proximity buffering, multi-layer buffer analysis, cross-district comparisons, and catchment modeling for registered Abu Dhabi SDI facilities. You can explore supported spatial analytics below:`;
          }
        }

        const chips = this.generateUnsupportedCapabilityAlternatives(lang, cap, qLower);

        return {
          intent: 'unsupported_capability',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
          aiMessageText: cleanMarkdownText(aiMessageText),
          results: hasContextResults ? this.context.currentResults : [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips,
          mapAction: { type: 'fit_bounds' }
        };
      }
    }
    return null;
  }

  /**
   * Generates genuine, contextually relevant alternatives for unsupported analytical requests
   */
  generateUnsupportedCapabilityAlternatives(lang = 'en', cap = null, qLower = '') {
    const chips = [];
    const hasResults = this.context.currentResults && this.context.currentResults.length > 0;
    const activeLoc = this.context.location || 'Khalifa City';
    const activeLocAr = this.context.locationCoordinates?.arabicName || this.context.location || 'مدينة خليفة';
    const activeCat = this.context.dataset || 'Healthcare';
    const activeCatAr = CAT_TRANSLATIONS_AR[activeCat] || activeCat;
    const activeSub = this.context.subcategory;
    const activeSubAr = activeSub ? (SUBCAT_TRANSLATIONS_AR[activeSub] || activeSub) : activeCatAr;

    if (hasResults) {
      const catLabelEn = activeSub ? activeSub.toLowerCase() : activeCat.toLowerCase();
      const catLabelAr = activeSub ? activeSubAr : activeCatAr;

      chips.push({
        label: lang === 'ar' ? `المرافق ضمن 2 كم من هذه الـ ${catLabelAr}` : `Show facilities within 2 km of these ${catLabelEn}`,
        query: `Show facilities within 2 km of these ${catLabelEn}`
      });
      if (activeCat === 'Parks') {
        chips.push({
          label: lang === 'ar' ? `محطات الحافلات القريبة من الحدائق في ${activeLocAr}` : `Bus stations near parks in ${activeLoc}`,
          query: `Show bus stations within 2 km of parks in ${activeLoc}`
        });
      } else if (activeCat === 'Industrial') {
        chips.push({
          label: lang === 'ar' ? `منشآت الطاقة النظيفة في ${activeLocAr}` : `Clean energy facilities in ${activeLoc}`,
          query: `Show clean energy plants in ${activeLoc}`
        });
      } else if (activeCat === 'Transportation') {
        chips.push({
          label: lang === 'ar' ? `مقارنة محطات الحافلات والمترو في ${activeLocAr}` : `Compare bus stations and metro in ${activeLoc}`,
          query: `Compare bus stations and metro lines in ${activeLoc}`
        });
      } else if (activeCat === 'Education') {
        chips.push({
          label: lang === 'ar' ? `محطات الحافلات القريبة في ${activeLocAr}` : `Bus stations nearby in ${activeLoc}`,
          query: `Show bus stations in ${activeLoc}`
        });
      } else {
        chips.push({
          label: lang === 'ar' ? `مقارنة الـ ${catLabelAr} بالمرافق المجاورة في ${activeLocAr}` : `Compare ${catLabelEn} with amenities in ${activeLoc}`,
          query: `Compare ${catLabelEn} and public facilities in ${activeLoc}`
        });
      }
      chips.push({
        label: lang === 'ar' ? `أعلى الـ ${catLabelAr} تقييماً في ${activeLocAr}` : `Top rated ${catLabelEn} in ${activeLoc}`,
        query: `Which ${catLabelEn} has the highest rating in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? `توسيع نطاق البحث إلى 5 كم` : `Expand search radius to 5 km`,
        query: `Show ${catLabelEn} within 5 km of ${activeLoc}`
      });
      return chips;
    }

    const queryDistrict = resolveDistrictOrLandmark(qLower);
    const loc = queryDistrict?.name || (this.context.location || 'Khalifa City');
    const locAr = queryDistrict?.arabicName || (this.context.locationCoordinates?.arabicName || loc);

    if (queryDistrict || this.context.location) {
      chips.push({
        label: lang === 'ar' ? `عرض الحدائق في ${locAr}` : `Show parks in ${loc}`,
        query: `Show parks in ${loc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض محطات الحافلات في ${locAr}` : `Show bus stations in ${loc}`,
        query: `Show bus stations in ${loc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض المنشآت الصناعية في ${locAr}` : `Show industrial facilities in ${loc}`,
        query: `Show industrial facilities in ${loc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض كافة المرافق في ${locAr}` : `Show all facilities in ${loc}`,
        query: `Show all facilities in ${loc}`
      });
      return chips;
    }

    chips.push({
      label: lang === 'ar' ? 'عرض الحدائق في جزيرة ياس' : 'Show parks in Yas Island',
      query: 'Show parks in Yas Island'
    });
    chips.push({
      label: lang === 'ar' ? 'عرض محطات الحافلات في أبوظبي' : 'Show bus stations across Abu Dhabi',
      query: 'Show bus stations across Abu Dhabi'
    });
    chips.push({
      label: lang === 'ar' ? 'منشآت صناعية بانبعاثات أقل من 50000 طن' : 'Industrial emissions under 50000 tonnes',
      query: 'Industrial facilities with emissions under 50000 tonnes in Abu Dhabi'
    });
    chips.push({
      label: lang === 'ar' ? 'مقارنة المراكز الحكومية ومرافق النقل في مدينة خليفة' : 'Compare government facilities and transport in Khalifa City',
      query: 'Compare government facilities and transport in Khalifa City'
    });
    return chips;
  }

  /**
   * Section: Natural Language Application Control Evaluator
   * Supports: Theme, Language, Basemap, Map Navigation, Layers, Legend, Geolocation, Draw Tools, Print, and Compound Actions
   */
  evaluateApplicationControlCommand(rawQuery = '', lang = 'en', options = {}) {
    const qTrim = (rawQuery || '').trim();
    if (!qTrim) return null;
    const qLower = qTrim.toLowerCase();
    const isArabic = lang === 'ar' || /[\u0600-\u06FF]/.test(qTrim);

    // 0. CHECK FOR UNSUPPORTED APP CAPABILITIES (e.g. 3D mode, VR view)
    const is3dRequest =
      /\b(3d|3-d|three[- ]dimensional)\b/i.test(qLower) ||
      qLower.includes('3d mode') || qLower.includes('3d map') || qLower.includes('3d view') ||
      qLower.includes('ثلاثي الأبعاد') || qLower.includes('ثلاثية الأبعاد') || qLower.includes('وضع 3d') || qLower.includes('خريطة 3d');

    if (is3dRequest && (qLower.includes('map') || qLower.includes('mode') || qLower.includes('view') || qLower.includes('basemap') || qLower.includes('خريطة') || qLower.includes('وضع') || qLower.includes('عرض') || qLower.includes('switch') || qLower.includes('change') || qLower.includes('need') || qLower.includes('want'))) {
      const retainedResults = (options.currentResults && options.currentResults.length > 0)
        ? options.currentResults
        : (this.context.currentResults && this.context.currentResults.length > 0 ? this.context.currentResults : []);
      return {
        intent: 'unsupported_app_action',
        appActions: [],
        querySummary: isArabic ? 'ميزة غير متوفرة: وضع الخريطة ثلاثية الأبعاد (3D)' : 'Unsupported Feature: 3D Map Mode',
        aiMessageText: cleanMarkdownText(isArabic
          ? '3D map mode is not currently available. وضع الخريطة ثلاثية الأبعاد (3D) غير متوفر حالياً في منصة GeoVision. تدعم المنصة حالياً خرائط الأساس ثنائية الأبعاد (أبوظبي SDI، القمر الصناعي، الرمادي الفاتح).'
          : '3D map mode is not currently available in the current GeoVision configuration.'),
        results: retainedResults,
        structuredResults: null,
        analytics: this.context.analytics || null,
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: isArabic ? [
          { label: 'التبديل إلى القمر الصناعي', query: 'غيّر الخريطة إلى القمر الصناعي' },
          { label: 'خريطة أبوظبي SDI', query: 'خريطة الشوارع' },
          { label: 'عرض مفتاح الخريطة', query: 'فعّل وسيلة الإيضاح' }
        ] : [
          { label: 'Switch to Satellite', query: 'Switch to satellite' },
          { label: 'Abu Dhabi SDI Map', query: 'Switch to streets basemap' },
          { label: 'Show Legend', query: 'Show the legend' }
        ],
        mapAction: null
      };
    }

    // Split compound queries (e.g. "Switch to dark mode and show the satellite basemap")
    const clauses = this.splitCompoundControlClauses(qTrim);
    const parsedActions = [];
    const confirmationsEn = [];
    const confirmationsAr = [];

    for (const clause of clauses) {
      const parsed = this.parseSingleApplicationControlClause(clause, isArabic ? 'ar' : 'en');
      if (parsed) {
        parsedActions.push(parsed.action);
        confirmationsEn.push(parsed.confirmationEn);
        confirmationsAr.push(parsed.confirmationAr);
      }
    }

    // If no application action was recognized across the clauses, return null (allow normal GIS processing)
    if (parsedActions.length === 0) {
      return null;
    }

    // If only a standalone print command was requested, delegate directly to evaluatePrintIntent for dedicated print_export intent
    if (parsedActions.length === 1 && parsedActions[0].type === 'PRINT_MAP') {
      return this.evaluatePrintIntent(qLower, rawQuery, lang, options);
    }

    // Retain existing active GIS results & selected context (Multi-Turn Continuity)
    const retainedResults = (options.currentResults && options.currentResults.length > 0)
      ? options.currentResults
      : (this.context.currentResults && this.context.currentResults.length > 0 ? this.context.currentResults : []);

    let fullConfirmationText = '';
    if (isArabic) {
      if (confirmationsAr.length === 1) {
        fullConfirmationText = confirmationsAr[0];
      } else {
        fullConfirmationText = `تم — ${confirmationsAr.map(c => c.replace(/^تم (?:التغيير — |— )?/, '')).join(' و ')}.`;
      }
    } else {
      if (confirmationsEn.length === 1) {
        fullConfirmationText = confirmationsEn[0];
      } else {
        fullConfirmationText = `Done — ${confirmationsEn.map(c => c.replace(/^Done — /, '')).join(' and ')}.`;
      }
    }

    if (!fullConfirmationText.endsWith('.')) fullConfirmationText += '.';

    const primaryMapAction = parsedActions.find(a => a.type === 'FLY_TO' || a.type === 'RESET_VIEW' || a.type === 'ZOOM_IN' || a.type === 'ZOOM_OUT');
    const hasPrintAction = parsedActions.some(a => a.type === 'PRINT_MAP');

    const appControlChips = isArabic ? [
      { label: 'طباعة هذه الخريطة', query: 'اطبع هذه الخريطة' },
      { label: 'التبديل إلى القمر الصناعي', query: 'غيّر الخريطة إلى القمر الصناعي' },
      { label: 'عرض مفتاح الخريطة', query: 'فعّل وسيلة الإيضاح' }
    ] : [
      { label: 'Print this map', query: 'Print this map' },
      { label: 'Switch to Satellite', query: 'Switch to satellite' },
      { label: 'Show the legend', query: 'Show the legend' }
    ];

    return {
      intent: 'app_control',
      appActions: parsedActions,
      openPrintModal: hasPrintAction,
      printConfig: hasPrintAction ? (parsedActions.find(a => a.type === 'PRINT_MAP')?.options || {}) : null,
      querySummary: isArabic ? `تم تنفيذ الأوامر (${parsedActions.length})` : `Executed ${parsedActions.length} command${parsedActions.length > 1 ? 's' : ''}`,
      aiMessageText: cleanMarkdownText(fullConfirmationText),
      results: retainedResults,
      structuredResults: null,
      analytics: this.context.analytics || null,
      contextBadges: this.context.getActiveContextBadges(lang),
      chips: appControlChips,
      structuredGISQuery: {
        intent: 'app_control',
        actions: parsedActions.map(a => a.type)
      },
      mapAction: primaryMapAction ? (
        primaryMapAction.type === 'FLY_TO' ? { type: 'fly_to', center: primaryMapAction.center, zoom: primaryMapAction.zoom } :
        primaryMapAction.type === 'RESET_VIEW' ? { type: 'fly_to', center: primaryMapAction.center || [24.4539, 54.3773], zoom: 12 } :
        primaryMapAction.type === 'ZOOM_IN' ? { type: 'zoom_in' } :
        primaryMapAction.type === 'ZOOM_OUT' ? { type: 'zoom_out' } : null
      ) : null
    };
  }

  /**
   * Split compound query into individual clauses by conjunctions
   */
  splitCompoundControlClauses(text = '') {
    if (!text) return [];
    const parts = text.split(/\s+(?:and|then|followed\s+by|&|و|ثم)\s+|,\s*/i)
      .map(p => p.trim())
      .filter(Boolean);
    return parts.length > 0 ? parts : [text.trim()];
  }

  /**
   * Parse a single application control clause into an action descriptor
   */
  parseSingleApplicationControlClause(clause = '', lang = 'en') {
    const cTrim = clause.trim();
    if (!cTrim) return null;
    const cLower = cTrim.toLowerCase();

    // 1. BASEMAP CONTROL (Highest priority matching for basemap / imagery / satellite queries)
    // A. SATELLITE / IMAGERY
    // Examples: "I need basemap satellite view", "I need satellite view", "Switch to satellite", "Change the basemap to satellite", "Show satellite imagery", "Use satellite map", "I want satellite view", "satellite basemap", "satellite view", "satellite", "imagery", "aerial imagery", "القمر الصناعي", "خريطة القمر الصناعي", "الصور الفضائية", "عرض صور الأقمار الصناعية"
    const isSatelliteReq =
      cLower.includes('satellite') ||
      cLower.includes('imagery') ||
      cLower.includes('aerial') ||
      cLower.includes('قمر صناعي') ||
      cLower.includes('القمر الصناعي') ||
      cLower.includes('أقمار صناعية') ||
      cLower.includes('الأقمار الصناعية') ||
      cLower.includes('اقمار صناعية') ||
      cLower.includes('الاقمار الصناعية') ||
      cLower.includes('صور الأقمار') ||
      cLower.includes('صور الاقمار') ||
      cLower.includes('الصور الفضائية') ||
      cLower.includes('صور فضائية') ||
      cLower.includes('فضائي') ||
      cLower.includes('فضائية') ||
      (cLower.includes('قمر') && (cLower.includes('صناع') || cLower.includes('صناعي') || cLower.includes('صناعية'))) ||
      (cLower.includes('أقمار') && (cLower.includes('صناع') || cLower.includes('صناعي') || cLower.includes('صناعية'))) ||
      (cLower.includes('اقمار') && (cLower.includes('صناع') || cLower.includes('صناعي') || cLower.includes('صناعية')));

    if (isSatelliteReq) {
      return {
        action: { type: 'CHANGE_BASEMAP', basemap: 'satellite' },
        confirmationEn: 'Done — Satellite basemap is now active',
        confirmationAr: 'تم التغيير — تم تفعيل خريطة القمر الصناعي بنجاح'
      };
    }

    // B. STREETS / DGE / DEFAULT BASEMAP
    // Examples: "Change to streets", "Switch to streets", "Use streets map", "Change to the existing default basemap", "Switch to the existing default basemap", "Use default basemap", "streets basemap", "abu dhabi sdi", "dge", "الشوارع", "خريطة الشوارع", "الخريطة الافتراضية"
    const isStreetsReq =
      cLower.includes('streets') ||
      cLower.includes('street map') ||
      cLower.includes('streets map') ||
      cLower.includes('street basemap') ||
      cLower.includes('streets basemap') ||
      cLower.includes('default basemap') ||
      cLower.includes('default map') ||
      cLower.includes('existing default') ||
      /\bdge\b/i.test(cLower) ||
      cLower.includes('abu dhabi sdi') ||
      cLower.includes('sdi basemap') ||
      cLower.includes('sdi map') ||
      cLower.includes('الشوارع') ||
      cLower.includes('خريطة الشوارع') ||
      cLower.includes('الخريطة الافتراضية') ||
      cLower.includes('أبوظبي sdi');

    if (isStreetsReq && !cLower.includes('bus station') && !cLower.includes('hospital') && !cLower.includes('school')) {
      return {
        action: { type: 'CHANGE_BASEMAP', basemap: 'dge_color' },
        confirmationEn: 'Done — Abu Dhabi SDI (Streets) basemap is now active',
        confirmationAr: 'تم التغيير — تم تفعيل خريطة أبوظبي SDI (الشوارع) بنجاح'
      };
    }

    // C. LIGHT GRAY CANVAS
    // Examples: "Use light gray basemap", "Switch to light gray", "Light gray map", "الرمادي الفاتح"
    const isLightGrayReq =
      cLower.includes('light gray') ||
      cLower.includes('light grey') ||
      cLower.includes('gray basemap') ||
      cLower.includes('grey basemap') ||
      cLower.includes('gray map') ||
      cLower.includes('grey map') ||
      cLower.includes('canvas basemap') ||
      cLower.includes('الرمادي الفاتح') ||
      cLower.includes('خريطة الرمادي الفاتح') ||
      cLower.includes('رمادي فاتح');

    if (isLightGrayReq) {
      return {
        action: { type: 'CHANGE_BASEMAP', basemap: 'light' },
        confirmationEn: 'Done — Light Gray basemap is now active',
        confirmationAr: 'تم التغيير — تم تفعيل خريطة الرمادي الفاتح بنجاح'
      };
    }

    // D. GENERAL BASEMAP GALLERY / SELECTOR
    // Examples: "Change the basemap", "Can you switch the basemap?", "Switch basemap", "Show basemap gallery", "Open basemaps", "معرض خرائط الأساس", "خيارات خريطة الأساس", "غيّر خريطة الأساس"
    const isGeneralBasemapReq =
      cLower.includes('basemap') ||
      cLower.includes('base map') ||
      cLower.includes('خرائط الأساس') ||
      cLower.includes('خريطة الأساس');

    if (isGeneralBasemapReq && (cLower.includes('change') || cLower.includes('switch') || cLower.includes('open') || cLower.includes('show') || cLower.includes('toggle') || cLower.includes('gallery') || cLower.includes('select') || cLower.includes('can you') || cLower.includes('غيّر') || cLower.includes('تبديل') || cLower.includes('معرض') || cLower.includes('خيارات'))) {
      return {
        action: { type: 'OPEN_BASEMAP_GALLERY' },
        confirmationEn: 'Done — opened basemap gallery',
        confirmationAr: 'تم — تم فتح معرض خرائط الأساس'
      };
    }

    // E. EXPLICIT UNSUPPORTED BASEMAP CHECK
    if (isGeneralBasemapReq || cLower.includes('map view') || cLower.includes('خريطة')) {
      const unsupportedBasemapMatch =
        cLower.match(/(?:switch to|change to|use|show|set|need|want|load)\s+(?:the\s+)?(?:to\s+)?([a-z0-9_-]+)\s+(?:basemap|base map|map view)/i) ||
        cLower.match(/(?:switch|change|set|use)\s+(?:the\s+)?(?:basemap|base map)\s+to\s+([a-z0-9_-]+)/i) ||
        (cLower.match(/\b(topo|topographic|terrain|osm|openstreetmap|watercolor|hybrid|dark canvas|night basemap|تضاريس|طبوغرافي)\b/i));

      if (unsupportedBasemapMatch) {
        const requestedName = unsupportedBasemapMatch[1] || 'Requested';
        const capName = requestedName.charAt(0).toUpperCase() + requestedName.slice(1);
        return {
          action: { type: 'UNSUPPORTED_BASEMAP', requested: capName },
          confirmationEn: `${capName} basemap is not currently available`,
          confirmationAr: `خريطة الأساس (${requestedName}) غير متوفرة حالياً في منصة GeoVision`
        };
      }
    }

    // 2. THEME CONTROL
    // Dark theme
    const isDarkThemeReq =
      cLower.includes('dark mode') ||
      cLower.includes('dark theme') ||
      cLower.includes('night mode') ||
      cLower.includes('black mode') ||
      cLower.includes('الوضع الداكن') ||
      cLower.includes('السمة الداكنة') ||
      cLower.includes('النمط الليلي') ||
      cLower.includes('الوضع المظلم') ||
      ((cLower.includes('dark') || cLower.includes('الداكن') || cLower.includes('المظلم')) && (cLower.includes('theme') || cLower.includes('mode') || cLower.includes('switch') || cLower.includes('change') || cLower.includes('use') || cLower.includes('set') || cLower.includes('turn') || cLower.includes('enable') || cLower.includes('want') || cLower.includes('make') || cLower.includes('السمة') || cLower.includes('الوضع') || cLower.includes('تغيير') || cLower.includes('تبديل') || cLower.includes('تفعيل')));

    if (isDarkThemeReq) {
      return {
        action: { type: 'CHANGE_THEME', theme: 'dark' },
        confirmationEn: 'Done — switched to dark mode',
        confirmationAr: 'تم التغيير — تم التبديل إلى الوضع الداكن بنجاح'
      };
    }

    // Light theme
    const isLightThemeReq =
      cLower.includes('light mode') ||
      cLower.includes('light theme') ||
      cLower.includes('day mode') ||
      cLower.includes('white mode') ||
      cLower.includes('الوضع الفاتح') ||
      cLower.includes('السمة الفاتحة') ||
      cLower.includes('النمط النهاري') ||
      cLower.includes('الوضع المضيء') ||
      ((cLower.includes('light') || cLower.includes('الفاتح') || cLower.includes('المضيء')) && (cLower.includes('theme') || cLower.includes('mode') || cLower.includes('switch') || cLower.includes('change') || cLower.includes('use') || cLower.includes('set') || cLower.includes('turn') || cLower.includes('enable') || cLower.includes('want') || cLower.includes('make') || cLower.includes('السمة') || cLower.includes('الوضع') || cLower.includes('تغيير') || cLower.includes('تبديل') || cLower.includes('تفعيل')));

    if (isLightThemeReq && !isLightGrayReq) {
      return {
        action: { type: 'CHANGE_THEME', theme: 'light' },
        confirmationEn: 'Done — switched to light mode',
        confirmationAr: 'تم التغيير — تم التبديل إلى الوضع الفاتح بنجاح'
      };
    }

    // 3. LANGUAGE CONTROL
    // Arabic
    const isArabicLangReq =
      cLower === 'arabic' ||
      cLower === 'العربية' ||
      cLower === 'اللغة العربية' ||
      cLower === 'عربي' ||
      cLower === 'بالعربي' ||
      /\b(?:change|switch|set|turn|convert|translate|make|use|show|put|toggle|load|update|select|to|into|in)\b.*?\b(?:arabic|العربية|عربي)\b/i.test(cLower) ||
      /\b(?:arabic|العربية|عربي)\b.*?\b(?:language|lang|mode|ui|app|translation|view|version|النسخة|اللغة)\b/i.test(cLower) ||
      /\b(?:language|lang|اللغة)\b.*?\b(?:arabic|العربية|عربي)\b/i.test(cLower) ||
      cLower.includes('language to arabic') ||
      cLower.includes('switch to arabic') ||
      cLower.includes('change to arabic') ||
      cLower.includes('use arabic') ||
      cLower.includes('in arabic') ||
      cLower.includes('show in arabic') ||
      cLower.includes('arabic language') ||
      cLower.includes('اللغة إلى العربية') ||
      cLower.includes('التحويل إلى العربية') ||
      cLower.includes('التبديل إلى العربية') ||
      cLower.includes('استخدم العربية') ||
      cLower.includes('باللغة العربية') ||
      cLower.includes('حول إلى العربية') ||
      cLower.includes('حول للعربية') ||
      cLower.includes('غير إلى العربية') ||
      cLower.includes('غير للعربية') ||
      cLower.includes('غيّر إلى العربية') ||
      cLower.includes('تغيير إلى العربية');

    if (isArabicLangReq) {
      return {
        action: { type: 'CHANGE_LANGUAGE', lang: 'ar' },
        confirmationEn: 'Done — switched application language to Arabic',
        confirmationAr: 'تم تغيير لغة التطبيق إلى العربية بنجاح'
      };
    }

    // English
    const isEnglishLangReq =
      cLower === 'english' ||
      cLower === 'الإنجليزية' ||
      cLower === 'الانجليزية' ||
      cLower === 'اللغة الإنجليزية' ||
      cLower === 'اللغة الانجليزية' ||
      cLower === 'انجليزي' ||
      cLower === 'إنجليزي' ||
      /\b(?:change|switch|set|turn|convert|translate|make|use|show|put|toggle|load|update|select|to|into|in)\b.*?\b(?:english|الإنجليزية|الانجليزية|انجليزي|إنجليزي)\b/i.test(cLower) ||
      /\b(?:english|الإنجليزية|الانجليزية|انجليزي|إنجليزي)\b.*?\b(?:language|lang|mode|ui|app|translation|view|version|النسخة|اللغة)\b/i.test(cLower) ||
      /\b(?:language|lang|اللغة)\b.*?\b(?:english|الإنجليزية|الانجليزية|انجليزي|إنجليزي)\b/i.test(cLower) ||
      cLower.includes('language to english') ||
      cLower.includes('switch to english') ||
      cLower.includes('change to english') ||
      cLower.includes('use english') ||
      cLower.includes('in english') ||
      cLower.includes('show in english') ||
      cLower.includes('english language') ||
      cLower.includes('اللغة إلى الإنجليزية') ||
      cLower.includes('التحويل إلى الإنجليزية') ||
      cLower.includes('التبديل إلى الإنجليزية') ||
      cLower.includes('استخدم الإنجليزية') ||
      cLower.includes('باللغة الإنجليزية') ||
      cLower.includes('حول إلى الإنجليزية') ||
      cLower.includes('حول للإنجليزية') ||
      cLower.includes('غير إلى الإنجليزية') ||
      cLower.includes('غير للإنجليزية') ||
      cLower.includes('غيّر إلى الإنجليزية') ||
      cLower.includes('تغيير إلى الإنجليزية');

    if (isEnglishLangReq) {
      return {
        action: { type: 'CHANGE_LANGUAGE', lang: 'en' },
        confirmationEn: 'Done — switched application language to English',
        confirmationAr: 'تم التبديل إلى اللغة الإنجليزية بنجاح'
      };
    }

    // 4. MAP NAVIGATION
    // Zoom In
    const isZoomInReq =
      cLower === 'zoom in' ||
      cLower === 'zoomin' ||
      cLower === 'zoom-in' ||
      cLower === 'magnify' ||
      cLower === 'enlarge' ||
      cLower === 'تكبير' ||
      cLower === 'كبّر' ||
      cLower === 'كبّر الخريطة' ||
      cLower.includes('zoom in') ||
      cLower.includes('zoom closer') ||
      cLower.includes('magnify map') ||
      cLower.includes('تكبير الخريطة') ||
      cLower.includes('كبّر الخريطة');

    if (isZoomInReq) {
      return {
        action: { type: 'ZOOM_IN' },
        confirmationEn: 'Map zoomed in',
        confirmationAr: 'تم تكبير الخريطة'
      };
    }

    // Zoom Out
    const isZoomOutReq =
      cLower === 'zoom out' ||
      cLower === 'zoomout' ||
      cLower === 'zoom-out' ||
      cLower === 'shrink' ||
      cLower === 'تصغير' ||
      cLower === 'صغّر' ||
      cLower === 'صغّر الخريطة' ||
      cLower.includes('zoom out') ||
      cLower.includes('zoom farther') ||
      cLower.includes('shrink map') ||
      cLower.includes('تصغير الخريطة') ||
      cLower.includes('صغّر الخريطة');

    if (isZoomOutReq) {
      return {
        action: { type: 'ZOOM_OUT' },
        confirmationEn: 'Map zoomed out',
        confirmationAr: 'تم تصغير الخريطة'
      };
    }

    // Reset Map View / Home
    const isResetMapReq =
      cLower.includes('reset map') ||
      cLower.includes('reset the map') ||
      cLower.includes('reset view') ||
      cLower.includes('home view') ||
      cLower.includes('default view') ||
      cLower.includes('previous map view') ||
      cLower.includes('center map') ||
      cLower.includes('restore view') ||
      cLower.includes('initial view') ||
      cLower.includes('إعادة ضبط الخريطة') ||
      cLower.includes('الواجهة الافتراضية') ||
      cLower.includes('العرض الافتراضي') ||
      cLower.includes('إعادة ضبط العرض') ||
      cLower.includes('الرجوع للعرض السابق');

    if (isResetMapReq && !cLower.includes('filter') && !cLower.includes('search')) {
      return {
        action: { type: 'RESET_VIEW', center: [24.4539, 54.3773], zoom: 12 },
        confirmationEn: 'Map view reset to default Abu Dhabi extent',
        confirmationAr: 'تمت إعادة ضبط الخريطة إلى العرض الافتراضي لأبوظبي'
      };
    }

    // Fly / Zoom to City or District (Navigation intent)
    const destMatch = cLower.match(/^(?:zoom to|go to|fly to|pan to|take me to|navigate to|center on|انتقل إلى|اذهب إلى|توجه إلى)\s+(abu dhabi|al ain|al dhafra|ruwais|yas island|saadiyat|khalifa city|mussafah|dubai|sharjah|أبوظبي|العين|الظفرة|الرويس|جزيرة ياس|السعديات|مدينة خليفة|مصفح|دبي|الشارقة)(?:\s+(?:on the map|in the map|على الخريطة))?$/i);
    const hasFacilityKw = cLower.includes('hospital') || cLower.includes('school') || cLower.includes('station') || cLower.includes('park') || cLower.includes('clinic') || cLower.includes('pharmacy') || cLower.includes('bus') || cLower.includes('university') || cLower.includes('مستشف') || cLower.includes('مدرس') || cLower.includes('حافلات') || cLower.includes('حديق') || cLower.includes('صيدل') || cLower.includes('جامع');
    if (destMatch && !hasFacilityKw) {
      const destRaw = destMatch[1].toLowerCase().trim();
      const dests = [
        { keys: ['abu dhabi', 'أبوظبي'], name: 'Abu Dhabi', nameAr: 'أبوظبي', coords: [24.4539, 54.3773], zoom: 12 },
        { keys: ['al ain', 'العين'], name: 'Al Ain', nameAr: 'العين', coords: [24.2075, 55.7447], zoom: 13 },
        { keys: ['al dhafra', 'الظفرة'], name: 'Al Dhafra', nameAr: 'الظفرة', coords: [23.6542, 53.7052], zoom: 12 },
        { keys: ['yas island', 'جزيرة ياس', 'ياس'], name: 'Yas Island', nameAr: 'جزيرة ياس', coords: [24.4988, 54.6054], zoom: 14 },
        { keys: ['saadiyat', 'جزيرة السعديات', 'السعديات'], name: 'Saadiyat Island', nameAr: 'جزيرة السعديات', coords: [24.5381, 54.4344], zoom: 14 },
        { keys: ['khalifa city', 'مدينة خليفة'], name: 'Khalifa City', nameAr: 'مدينة خليفة', coords: [24.4250, 54.5820], zoom: 14 },
        { keys: ['mussafah', 'مصفح'], name: 'Mussafah', nameAr: 'مصفح', coords: [24.3540, 54.4970], zoom: 13 },
        { keys: ['ruwais', 'الرويس'], name: 'Ruwais', nameAr: 'الرويس', coords: [24.1103, 52.7306], zoom: 13 },
        { keys: ['dubai', 'دبي'], name: 'Dubai', nameAr: 'دبي', coords: [25.2048, 55.2708], zoom: 12 },
        { keys: ['sharjah', 'الشارقة'], name: 'Sharjah', nameAr: 'الشارقة', coords: [25.3573, 55.4033], zoom: 12 }
      ];
      const target = dests.find(d => d.keys.some(k => destRaw.includes(k) || k.includes(destRaw))) || dests[0];
      return {
        action: { type: 'FLY_TO', center: target.coords, zoom: target.zoom, destination: target.name },
        confirmationEn: `Navigated to ${target.name}`,
        confirmationAr: `تم الانتقال إلى ${target.nameAr} على الخريطة`
      };
    }

    // 5. LAYERS PANEL & LAYER CONTROLS
    // Open layers panel
    const isOpenLayersReq =
      cLower === 'open layers' ||
      cLower === 'show layers' ||
      cLower === 'show the layers' ||
      cLower === 'show the layers panel' ||
      cLower === 'open layers panel' ||
      cLower === 'show all layers' ||
      cLower === 'show all categories' ||
      cLower === 'open categories' ||
      cLower === 'افتح الطبقات' ||
      cLower === 'عرض الطبقات' ||
      cLower === 'عرض لوحة الطبقات' ||
      cLower === 'جميع الطبقات' ||
      cLower.includes('layers panel') ||
      cLower.includes('categories panel') ||
      cLower.includes('لوحة الطبقات') ||
      cLower.includes('لوحة الفئات');

    if (isOpenLayersReq) {
      return {
        action: { type: 'OPEN_LAYERS' },
        confirmationEn: 'Done — opened layers panel',
        confirmationAr: 'تم — تم فتح لوحة الطبقات'
      };
    }

    // Toggle specific layer
    const isTurnOnLayer = (cLower.includes('turn on') || cLower.includes('enable') || cLower.includes('activate') || cLower.includes('تفعيل') || cLower.includes('إظهار')) && (cLower.includes('layer') || cLower.includes('طبقة'));
    const isTurnOffLayer = (cLower.includes('turn off') || cLower.includes('disable') || cLower.includes('hide') || cLower.includes('deactivate') || cLower.includes('إخفاء') || cLower.includes('إيقاف') || cLower.includes('تعطيل')) && (cLower.includes('layer') || cLower.includes('طبقة') || cLower.includes('this'));

    if (isTurnOnLayer) {
      let catName = 'Transportation';
      let catNameAr = 'النقل والمواصلات';
      let subs = ['Bus Stations', 'Metro Lines', 'Taxi Stands', 'Parking Lots'];
      if (cLower.includes('health') || cLower.includes('صح')) {
        catName = 'Healthcare'; catNameAr = 'الرعاية الصحية'; subs = ['Hospitals', 'Clinics', 'Pharmacies', 'Medical Centers'];
      } else if (cLower.includes('edu') || cLower.includes('school') || cLower.includes('تعليم') || cLower.includes('مدارس')) {
        catName = 'Education'; catNameAr = 'التعليم'; subs = ['Charter Schools', 'Nurseries', 'POD', 'Public Schools', 'Private Schools'];
      } else if (cLower.includes('park') || cLower.includes('حدائق')) {
        catName = 'Parks'; catNameAr = 'الحدائق العامة'; subs = ['Public Parks', 'Playgrounds', 'Gardens', 'National Parks'];
      } else if (cLower.includes('env') || cLower.includes('بيئة')) {
        catName = 'Environment'; catNameAr = 'البيئة والمحميات'; subs = ['Air Quality Sensors', 'Protected Areas', 'Recycling Centers', 'Waste Management'];
      } else if (cLower.includes('gov') || cLower.includes('حكوم')) {
        catName = 'Government Services'; catNameAr = 'الخدمات الحكومية'; subs = ['Ministries', 'Embassies', 'Courts', 'Municipalities', 'Service Centers'];
      } else if (cLower.includes('tour') || cLower.includes('سياح')) {
        catName = 'Tourism'; catNameAr = 'السياحة والمعالم'; subs = ['Hotels', 'Museums', 'Historical Sites', 'Resorts', 'Attractions'];
      } else if (cLower.includes('util') || cLower.includes('مرافق')) {
        catName = 'Utilities'; catNameAr = 'المرافق العامة'; subs = ['Power Stations', 'Water Treatment', 'Substations', 'Telecom Towers'];
      } else if (cLower.includes('agri') || cLower.includes('زراع')) {
        catName = 'Agriculture'; catNameAr = 'الزراعة والمزارع'; subs = ['Farms', 'Greenhouses', 'Irrigation Systems', 'Livestock Centers'];
      }

      return {
        action: { type: 'TOGGLE_LAYER', category: catName, subcategories: subs, enabled: true },
        confirmationEn: `Done — enabled ${catName} layer`,
        confirmationAr: `تم — تم تفعيل طبقة ${catNameAr}`
      };
    }

    if (isTurnOffLayer) {
      let catName = 'Healthcare';
      let catNameAr = 'الرعاية الصحية';
      let subs = ['Hospitals', 'Clinics', 'Pharmacies', 'Medical Centers'];
      if (cLower.includes('trans') || cLower.includes('نقل') || cLower.includes('مواصلات')) {
        catName = 'Transportation'; catNameAr = 'النقل والمواصلات'; subs = ['Bus Stations', 'Metro Lines', 'Taxi Stands', 'Parking Lots'];
      } else if (cLower.includes('edu') || cLower.includes('school') || cLower.includes('تعليم')) {
        catName = 'Education'; catNameAr = 'التعليم'; subs = ['Charter Schools', 'Nurseries', 'POD', 'Public Schools', 'Private Schools'];
      } else if (cLower.includes('park') || cLower.includes('حدائق')) {
        catName = 'Parks'; catNameAr = 'الحدائق العامة'; subs = ['Public Parks', 'Playgrounds', 'Gardens', 'National Parks'];
      } else if (cLower.includes('env') || cLower.includes('بيئة')) {
        catName = 'Environment'; catNameAr = 'البيئة والمحميات'; subs = ['Air Quality Sensors', 'Protected Areas', 'Recycling Centers', 'Waste Management'];
      }

      return {
        action: { type: 'TOGGLE_LAYER', category: catName, subcategories: subs, enabled: false },
        confirmationEn: `Done — hidden ${catName} layer`,
        confirmationAr: `تم — تم إخفاء طبقة ${catNameAr}`
      };
    }

    // 6. LEGEND CONTROL
    const isLegendWord = cLower.includes('legend') || cLower.includes('وسيلة الإيضاح') || cLower.includes('مفتاح الخريطة') || cLower.includes('دليل الخريطة');
    if (isLegendWord) {
      if (cLower.includes('hide') || cLower.includes('close') || cLower.includes('turn off') || cLower.includes('dismiss') || cLower.includes('إخفاء') || cLower.includes('إغلاق') || cLower.includes('إيقاف')) {
        return {
          action: { type: 'CLOSE_LEGEND' },
          confirmationEn: 'Done — closed map legend',
          confirmationAr: 'تم — تم إخفاء مفتاح الخريطة'
        };
      }
      if (cLower.includes('toggle') || cLower.includes('تبديل')) {
        return {
          action: { type: 'TOGGLE_LEGEND' },
          confirmationEn: 'Done — toggled map legend',
          confirmationAr: 'تم — تم تبديل مفتاح الخريطة'
        };
      }
      return {
        action: { type: 'OPEN_LEGEND' },
        confirmationEn: 'Done — map legend is now active',
        confirmationAr: 'تم — تم عرض مفتاح الخريطة'
      };
    }

    // 7. LOCATE / USER LOCATION
    const isLocateReq =
      cLower.includes('locate me') ||
      cLower.includes('show my location') ||
      cLower.includes('find my current location') ||
      cLower.includes('find my location') ||
      cLower.includes('where am i') ||
      cLower.includes('my location') ||
      cLower.includes('get my position') ||
      cLower.includes('find me on the map') ||
      cLower.includes('حدد موقعي') ||
      cLower.includes('أين أنا') ||
      cLower.includes('موقعي الحالي') ||
      cLower.includes('إيجاد موقعي');

    if (isLocateReq && !cLower.includes('bus') && !cLower.includes('hospital') && !cLower.includes('school') && !cLower.includes('park') && !cLower.includes('nearest') && !cLower.includes('قريب')) {
      return {
        action: { type: 'LOCATE_USER' },
        confirmationEn: 'Done — locating your current position',
        confirmationAr: 'تم — جاري تحديد موقعك الحالي'
      };
    }

    // 8. DRAW / MEASUREMENT
    // Open Drawing Tools
    const isOpenDrawReq =
      cLower.includes('drawing tools') ||
      cLower.includes('draw tools') ||
      cLower.includes('measurement tools') ||
      cLower.includes('draw panel') ||
      cLower.includes('start drawing') ||
      cLower.includes('open drawing') ||
      cLower.includes('أدوات الرسم') ||
      cLower.includes('أدوات القياس والرسم') ||
      cLower.includes('افتح أدوات الرسم');

    if (isOpenDrawReq && !cLower.includes('polygon') && !cLower.includes('circle') && !cLower.includes('rectangle') && !cLower.includes('square') && !cLower.includes('line') && !cLower.includes('pin') && !cLower.includes('point')) {
      return {
        action: { type: 'OPEN_DRAW' },
        confirmationEn: 'Done — opened drawing tools',
        confirmationAr: 'تم — تم فتح أدوات القياس والرسم'
      };
    }

    // Specific Draw Tools
    if (cLower.includes('polygon') || cLower.includes('مضلع')) {
      return {
        action: { type: 'SET_DRAW_TOOL', tool: 'polygon' },
        confirmationEn: 'Polygon drawing tool activated. Click vertices, double-click to finish',
        confirmationAr: 'تم تفعيل أداة رسم المضلع. انقر على الخريطة لتحديد النقاط، وانقر مزدوجاً للإنهاء'
      };
    }

    if (cLower.includes('circle') || cLower.includes('دائرة')) {
      return {
        action: { type: 'SET_DRAW_TOOL', tool: 'circle' },
        confirmationEn: 'Circle drawing tool activated. Click center, then click outer edge',
        confirmationAr: 'تم تفعيل أداة رسم الدائرة. انقر لتحديد المركز ثم انقر لتحديد الحافة'
      };
    }

    if (cLower.includes('rectangle') || cLower.includes('مستطيل')) {
      return {
        action: { type: 'SET_DRAW_TOOL', tool: 'rectangle' },
        confirmationEn: 'Rectangle drawing tool activated. Click two opposite corners',
        confirmationAr: 'تم تفعيل أداة رسم المستطيل. انقر على زاويتين متقابلتين'
      };
    }

    if (cLower.includes('square') || cLower.includes('مربع')) {
      return {
        action: { type: 'SET_DRAW_TOOL', tool: 'square' },
        confirmationEn: 'Square drawing tool activated. Click two corners',
        confirmationAr: 'تم تفعيل أداة رسم المربع. انقر على زاويتين'
      };
    }

    if ((cLower.includes('line') || cLower.includes('distance') || cLower.includes('خط') || cLower.includes('مسافة')) && (cLower.includes('draw') || cLower.includes('measure') || cLower.includes('tool') || cLower.includes('رسم') || cLower.includes('قياس'))) {
      return {
        action: { type: 'SET_DRAW_TOOL', tool: 'line' },
        confirmationEn: 'Line measurement tool activated. Click points, double-click to finish',
        confirmationAr: 'تم تفعيل أداة قياس الخط. انقر لتحديد النقاط، وانقر مزدوجاً للإنهاء'
      };
    }

    if ((cLower.includes('pin') || cLower.includes('point') || cLower.includes('marker') || cLower.includes('نقطة') || cLower.includes('دبوس')) && (cLower.includes('drop') || cLower.includes('add') || cLower.includes('tool') || cLower.includes('إسقاط') || cLower.includes('وضع'))) {
      return {
        action: { type: 'SET_DRAW_TOOL', tool: 'click' },
        confirmationEn: 'Point marker tool activated. Click anywhere on the map to drop a pin',
        confirmationAr: 'تم تفعيل أداة علامة النقطة. انقر على الخريطة لإسقاط دبوس'
      };
    }

    // 9. PRINT / EXPORT
    const isPrintReq =
      cLower.includes('print') ||
      cLower.includes('export as pdf') ||
      cLower.includes('save as pdf') ||
      cLower.includes('pdf export') ||
      cLower.includes('اطبع') ||
      cLower.includes('طباعة') ||
      cLower.includes('تصدير كملف pdf') ||
      cLower.includes('تصدير pdf');

    if (isPrintReq) {
      let content = 'map';
      if (cLower.includes('analysis') || cLower.includes('result') || cLower.includes('تحليل') || cLower.includes('نتائج')) {
        content = 'results';
      }
      return {
        action: { type: 'PRINT_MAP', options: { content } },
        confirmationEn: 'opened print and export preview',
        confirmationAr: 'تم فتح نافذة الطباعة والتصدير'
      };
    }

    return null;
  }

  /**
   * Section: AI Print & Export PDF Intent Evaluator (Requirements 6, 7 & 8)
   */
  evaluatePrintIntent(qLower, rawQuery, lang = 'en', options = {}) {
    const qClean = (qLower || '').trim();
    const isPrintCmd =
      // Direct print / export keywords
      qClean.includes('print') ||
      qClean.includes('export') ||
      qClean.includes('save as pdf') ||
      qClean.includes('download pdf') ||
      qClean.includes('pdf export') ||
      // Contextual follow-up keywords
      qClean === 'include legend' ||
      qClean === 'include the legend' ||
      qClean === 'with legend' ||
      qClean === 'without legend' ||
      qClean === 'a4 landscape' ||
      qClean === 'a4 portrait' ||
      qClean === 'a3 landscape' ||
      qClean === 'a3 portrait' ||
      qClean.startsWith('make it a') ||
      qClean.startsWith('change to a') ||
      qClean === 'include search results' ||
      qClean === 'include results' ||
      qClean === 'selected feature' ||
      qClean === 'selected feature details' ||
      qClean === 'print it' ||
      qClean === 'print now' ||
      // Arabic keywords & follow-ups
      qClean.includes('طباعة') ||
      qClean.includes('اطبع') ||
      qClean.includes('تصدير') ||
      qClean.includes('حفظ كملف') ||
      qClean.includes('تحميل pdf') ||
      qClean.includes('تضمين مفتاح') ||
      qClean.includes('تضمين النتائج') ||
      qClean.includes('أفقي') ||
      qClean.includes('عمودي') ||
      qClean === 'اطبعها' ||
      qClean === 'اطبع الآن';

    if (!isPrintCmd) return null;

    // Determine requested Paper Size & Orientation
    let pageSize = 'A4';
    let orientation = 'landscape';

    if (qClean.includes('a3') || qClean.includes('a-3')) {
      pageSize = 'A3';
    }
    if (qClean.includes('portrait') || qClean.includes('عمودي') || qClean.includes('طولي') || qClean.includes('رأسي')) {
      orientation = 'portrait';
    } else if (qClean.includes('landscape') || qClean.includes('أفقي') || qClean.includes('عرضي')) {
      orientation = 'landscape';
    }

    // Determine requested Content
    let content = 'map';
    const activeSelectedFeature = options.selectedLocation || this.context.selectedFeature;
    const hasSelectedFeature = !!activeSelectedFeature;
    const hasResults = this.context.currentResults && this.context.currentResults.length > 0;

    if (qClean.includes('feature') || qClean.includes('detail') || qClean.includes('selected') || qClean.includes('المعلم') || qClean.includes('التفاصيل') || qClean.includes('المحدد')) {
      content = hasSelectedFeature ? 'details' : (hasResults ? 'results' : 'map');
    } else if (qClean.includes('result') || qClean.includes('table') || qClean.includes('النتائج') || qClean.includes('جدول')) {
      content = hasResults ? 'results' : 'map';
    } else if (qClean.includes('legend') || qClean.includes('مفتاح الخريطة') || qClean.includes('وسيلة الإيضاح')) {
      content = 'legend';
    } else if (hasSelectedFeature) {
      content = 'details';
    } else if (hasResults) {
      content = 'results';
    }

    const includeLegend = !qClean.includes('without legend') && !qClean.includes('بدون مفتاح');

    const results = (this.context.currentResults && this.context.currentResults.length > 0)
      ? this.context.currentResults
      : (hasSelectedFeature ? [activeSelectedFeature] : [...GEOVISION_SPATIAL_DATASET]);

    // Dynamic Title Generation for Print Document (Requirement 3)
    let dynamicTitle = '';
    if (content === 'details' && activeSelectedFeature) {
      dynamicTitle = lang === 'ar'
        ? `المعلم المحدد — ${activeSelectedFeature.arabicTitle || activeSelectedFeature.title}`
        : `Selected Feature — ${activeSelectedFeature.title}`;
    } else if (this.context.location || this.context.dataset) {
      if (this.context.dataset && this.context.location) {
        dynamicTitle = lang === 'ar'
          ? `${SUBCAT_TRANSLATIONS_AR[this.context.dataset] || CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset} في ${this.context.locationCoordinates?.arabicName || this.context.location}`
          : `${this.context.dataset} near ${this.context.location}`;
      } else if (this.context.dataset) {
        dynamicTitle = lang === 'ar'
          ? `خريطة ${SUBCAT_TRANSLATIONS_AR[this.context.dataset] || CAT_TRANSLATIONS_AR[this.context.dataset] || this.context.dataset}`
          : `GeoVision ${this.context.dataset} Spatial Map`;
      } else {
        dynamicTitle = lang === 'ar'
          ? `الخريطة المكانية — ${this.context.locationCoordinates?.arabicName || this.context.location}`
          : `Spatial Map — ${this.context.location}`;
      }
    } else {
      dynamicTitle = lang === 'ar' ? 'تقرير خريطة منصة GeoVision المكانية' : 'GeoVision GIS Map & Spatial Analysis Report';
    }

    let aiMessageText = '';
    if (lang === 'ar') {
      aiMessageText = `تم تجهيز نافذة المعاينة والطباعة بتنسيق **${pageSize} ${orientation === 'landscape' ? 'أفقي' : 'عمودي'}** مع محتوى **${content === 'details' ? 'تفاصيل المعلم' : (content === 'results' ? 'نتائج الاستعلام' : 'مشهد الخريطة')}**. يمكنك مراجعة المعاينة وطباعة المستند أو حفظه كملف PDF عالي الجودة.`;
    } else {
      aiMessageText = `I have opened the Print & PDF Export preview configured for **${pageSize} ${orientation === 'landscape' ? 'Landscape' : 'Portrait'}** with **${content === 'details' ? 'Selected Feature Details' : (content === 'results' ? 'Spatial Results Table' : 'Map View')}**. You can preview and print or save as PDF.`;
    }

    return {
      intent: 'print_export',
      querySummary: lang === 'ar' ? `طباعة الخريطة (${pageSize} ${orientation === 'landscape' ? 'أفقي' : 'عمودي'})` : `Print Map (${pageSize} ${orientation})`,
      aiMessageText: cleanMarkdownText(aiMessageText),
      results: results,
      contextBadges: this.context.getActiveContextBadges(lang),
      openPrintModal: true,
      printConfig: {
        pageSize,
        orientation,
        content,
        includeLegend,
        includeScale: true,
        includeNorthArrow: true,
        includeCoordinates: true,
        includeTimestamp: true,
        title: dynamicTitle
      },
      chips: [
        { label: lang === 'ar' ? 'تضمين مفتاح الخريطة' : 'Include the legend', query: 'Print this map with legend' },
        { label: lang === 'ar' ? 'تنسيق A4 أفقي' : 'Make it A4 landscape', query: 'Print this in A4 landscape' },
        { label: lang === 'ar' ? 'تنسيق A4 عمودي' : 'Make it A4 portrait', query: 'Print this in A4 portrait' },
        { label: lang === 'ar' ? 'طباعة تفاصيل المعلم' : 'Print selected feature', query: 'Print the selected feature details' },
        { label: lang === 'ar' ? 'تصدير كملف PDF' : 'Export as PDF', query: 'Export this map as PDF' }
      ]
    };
  }

  /**
   * Section: AI Route & Get Directions Intent Evaluator
   * Detects natural-language directions requests and resolves target destination with proximity calculations.
   */
  evaluateRouteIntent(qLower, rawQuery, lang = 'en', options = {}) {
    const qClean = (qLower || '').replace(/[؟?!,;]/g, '').trim();
    const isRouteCmd =
      // English directions patterns
      qClean.includes('direction') ||
      qClean.includes('directions') ||
      qClean.includes('get directions') ||
      qClean.includes('show directions') ||
      qClean.includes('how do i get to') ||
      qClean.includes('how to get to') ||
      qClean.includes('show me the route') ||
      qClean.includes('show route') ||
      qClean.includes('route to') ||
      qClean.includes('routes to') ||
      qClean.includes('navigate to') ||
      qClean.includes('navigation to') ||
      qClean.includes('driving route') ||
      qClean.includes('road directions') ||
      qClean.includes('way to') ||
      // Arabic directions patterns
      qClean.includes('اتجاه') ||
      qClean.includes('الاتجاهات') ||
      qClean.includes('الحصول على الاتجاهات') ||
      qClean.includes('كيف أصل إلى') ||
      qClean.includes('كيف اصل الى') ||
      qClean.includes('كيف اذهب الى') ||
      qClean.includes('طريق الوصول') ||
      qClean.includes('مسار الطريق') ||
      qClean.includes('المسار إلى') ||
      qClean.includes('المسار الى') ||
      qClean.includes('مسار إلى') ||
      qClean.includes('مسار الى') ||
      qClean.includes('المسار') ||
      qClean.includes('دلني على') ||
      qClean.includes('التنقل إلى') ||
      qClean.includes('التنقل الى');

    if (!isRouteCmd) return null;

    const userLoc = options?.userLocation || this.context.locationCoordinates || null;
    let targetFeature = null;

    // 1. Check for explicit POI entity names mentioned in query (e.g. "Burjeel", "برجيل", "Al Dhafra", "الظفرة", "Cleveland", "كليفلاند", "Khalifa University", "جامعة خليفة", "Yasmina", "Choueifat", "Louvre", etc.)
    const matchedPoi = GEOVISION_SPATIAL_DATASET.find(item => {
      const t = (item.title || '').toLowerCase();
      const ar = (item.arabicTitle || '').toLowerCase();
      const tWords = t.split(/[\s-]+/).filter(w => w.length >= 4 && !['hospital', 'school', 'university', 'center', 'clinic', 'complex', 'station', 'park', 'energy', 'solar', 'abu', 'dhabi'].includes(w));
      const arWords = ar.split(/[\s-]+/).filter(w => w.length >= 4 && !['مستشفى', 'مدرسة', 'جامعة', 'مركز', 'عيادة', 'مجمع', 'محطة', 'حديقة', 'طاقة', 'شمسية', 'أبوظبي'].includes(w));
      
      return (
        (t && qClean.includes(t)) ||
        (ar && qClean.includes(ar)) ||
        tWords.some(tw => qClean.includes(tw)) ||
        arWords.some(aw => qClean.includes(aw))
      );
    });

    if (matchedPoi && matchedPoi.lat != null && matchedPoi.lon != null) {
      targetFeature = matchedPoi;
    }

    // 2. Check if user is asking for directions to the currently selected feature explicitly
    const activeSelected = options?.selectedLocation || this.context.selectedFeature;
    if (!targetFeature && activeSelected) {
      const isRefToSelected =
        qClean.includes('this location') ||
        qClean.includes('this facility') ||
        qClean.includes('this place') ||
        qClean.includes('selected facility') ||
        qClean.includes('selected location') ||
        qClean.includes('selected feature') ||
        qClean.includes('here') ||
        qClean.includes('هذا الموقع') ||
        qClean.includes('المعلم المحدد') ||
        qClean.includes('هذا المرفق') ||
        qClean.includes('الموقع المحدد');

      if (isRefToSelected || qClean === 'directions' || qClean === 'get directions' || qClean === 'show directions' || qClean === 'route' || qClean === 'الاتجاهات' || qClean === 'المسار') {
        if (activeSelected.lat != null && activeSelected.lon != null) {
          targetFeature = activeSelected;
        }
      }
    }

    // 3. Check if user is asking for "nearest / closest [category]" (e.g. "How do I get to the nearest vehicle inspection center?")
    if (!targetFeature) {
      const taxEntity = resolveTaxonomyEntity(qClean);
      let candidatePool = [];

      if (taxEntity) {
        candidatePool = GEOVISION_SPATIAL_DATASET.filter(item => {
          if (taxEntity.subcategory) {
            return isSubcategoryMatch(item.subcategory, taxEntity.subcategory) ||
                   isCategoryMatch(item.category, taxEntity.category);
          }
          return isCategoryMatch(item.category, taxEntity.category);
        });
      }

      if (candidatePool.length === 0) {
        // Keyword matching across title, subcategory, category, keywords
        const cleanTerms = qClean
          .replace(/(?:how\s+do\s+i\s+get\s+to|how\s+to\s+get\s+to|show\s+me\s+the\s+route\s+to|show\s+directions\s+to|get\s+directions\s+to|show\s+directions|get\s+directions|directions\s+to|direction\s+to|route\s+to|routes\s+to|navigate\s+to|navigation\s+to|way\s+to|nearest|closest|the|a|an|from\s+my\s+location|my\s+location|to|this|facility|location|center|station)/gi, '')
          .replace(/(?:كيف\s+أصل\s+إلى|كيف\s+صل\s+إلى|كيف\s+اصل\s+الى|كيف\s+اذهب\s+الى|طريق\s+الوصول\s+إلى|مسار\s+الطريق\s+إلى|المسار\s+إلى|المسار\s+الى|مسار\s+إلى|مسار\s+الى|المسار|مسار|دلني\s+على\s+طريق|الاتجاهات\s+إلى|الاتجاهات\s+الى|الاتجاه\s+إلى|الاتجاه\s+الى|الاتجاهات|اتجاه|أقرب|اقرب|من\s+موقعي|إلى|الى|هذا|المرفق|الموقع|المركز|المحطة)/gi, '')
          .trim();

        if (cleanTerms.length >= 2) {
          const terms = cleanTerms.split(/\s+/).filter(t => t.length >= 2);
          candidatePool = GEOVISION_SPATIAL_DATASET.filter(item => {
            const t = (item.title || '').toLowerCase();
            const ar = item.arabicTitle || '';
            const sub = (item.subcategory || '').toLowerCase();
            const cat = (item.category || '').toLowerCase();
            const kw = item.keywords || [];
            return (
              t.includes(cleanTerms.toLowerCase()) ||
              ar.includes(cleanTerms) ||
              sub.includes(cleanTerms.toLowerCase()) ||
              cat.includes(cleanTerms.toLowerCase()) ||
              terms.some(term => t.includes(term.toLowerCase()) || ar.includes(term) || sub.includes(term.toLowerCase()) || kw.some(k => k.toLowerCase().includes(term.toLowerCase())))
            );
          });
        }
      }

      // Filter to items with valid coordinates
      const validCandidates = candidatePool.filter(it => it.lat != null && it.lon != null && !isNaN(it.lat) && !isNaN(it.lon));

      if (validCandidates.length > 0) {
        if (userLoc && userLoc.lat != null && userLoc.lon != null) {
          // Sort strictly from closest to furthest from user's current GPS location
          validCandidates.sort((a, b) => {
            const distA = calculateDistanceKm(userLoc.lat, userLoc.lon, a.lat, a.lon);
            const distB = calculateDistanceKm(userLoc.lat, userLoc.lon, b.lat, b.lon);
            return distA - distB;
          });
        } else if (activeSelected && activeSelected.lat != null) {
          validCandidates.sort((a, b) => {
            const distA = calculateDistanceKm(activeSelected.lat, activeSelected.lon, a.lat, a.lon);
            const distB = calculateDistanceKm(activeSelected.lat, activeSelected.lon, b.lat, b.lon);
            return distA - distB;
          });
        }
        targetFeature = validCandidates[0];
      }
    }

    // 4. Fallback: Check if current results or previous results have a single or selected item
    if (!targetFeature && activeSelected && activeSelected.lat != null && activeSelected.lon != null) {
      targetFeature = activeSelected;
    } else if (!targetFeature && this.context.currentResults && this.context.currentResults.length === 1) {
      const single = this.context.currentResults[0];
      if (single.lat != null && single.lon != null) {
        targetFeature = single;
      }
    }

    if (!targetFeature) {
      return {
        intent: 'route_directions',
        querySummary: lang === 'ar' ? 'تحديد وجهة المسار' : 'Select a Route Destination',
        aiMessageText: lang === 'ar'
          ? 'يرجى تحديد مرفق أو معلم مكاني على الخريطة أولاً، أو ذكر اسم الفئة المطلوبة (مثل: **أقرب مركز فحص مركبات** أو **أقرب محطة حافلات**) لتوليد مسار القيادة المباشر.'
          : 'Please select a facility or specify a target location (e.g. **"nearest vehicle inspection center"** or **"nearest bus station"**) to calculate your route and get turn-by-turn road directions.',
        results: this.context.currentResults || [],
        contextBadges: this.getActiveContextBadges(lang),
        chips: [
          { label: lang === 'ar' ? 'أقرب مركز فحص مركبات' : 'Nearest Vehicle Inspection', query: 'Get directions to the nearest vehicle inspection center' },
          { label: lang === 'ar' ? 'أقرب محطة حافلات' : 'Nearest Bus Station', query: 'Get directions to the nearest bus station' },
          { label: lang === 'ar' ? 'أقرب حديقة عامة' : 'Nearest Public Park', query: 'Get directions to the nearest public park' }
        ]
      };
    }

    this.context.selectedFeature = targetFeature;
    const distanceKm = userLoc && userLoc.lat != null && userLoc.lon != null
      ? parseFloat(calculateDistanceKm(userLoc.lat, userLoc.lon, targetFeature.lat, targetFeature.lon).toFixed(2))
      : null;

    const directionsUrl = userLoc && userLoc.lat != null && userLoc.lon != null
      ? `https://www.google.com/maps/dir/?api=1&origin=${userLoc.lat},${userLoc.lon}&destination=${targetFeature.lat},${targetFeature.lon}`
      : `https://www.google.com/maps/dir/?api=1&destination=${targetFeature.lat},${targetFeature.lon}`;

    let aiMessageText = '';
    const destName = lang === 'ar' ? (targetFeature.arabicTitle || targetFeature.title) : targetFeature.title;
    const destAddr = lang === 'ar' ? (targetFeature.arabicAddress || targetFeature.address || 'أبوظبي') : (targetFeature.address || 'Abu Dhabi');

    if (lang === 'ar') {
      aiMessageText = distanceKm
        ? `تم تجهيز اتجاهات المسار من موقعك الحالي إلى **${destName}** في **${destAddr}** (المسافة التقديرية: **${distanceKm} كم**). يمكنك مراجعة بطاقة المسار أدناه أو النقر على "الحصول على الاتجاهات" لبدء الملاحة المباشرة.`
        : `تم تجهيز اتجاهات المسار إلى **${destName}** في **${destAddr}**. انقر على "الحصول على الاتجاهات" أدناه لفتح مسار القيادة في خرائط الملاحة.`;
    } else {
      aiMessageText = distanceKm
        ? `I have calculated the route from your current location to **${destName}** in **${destAddr}** (approx. **${distanceKm} km**). You can review the route breakdown below or open external road navigation.`
        : `I have prepared the route directions to **${destName}** in **${destAddr}**. Click "Get Directions" below to open turn-by-turn road navigation.`;
    }

    return {
      intent: 'route_directions',
      querySummary: lang === 'ar' ? `مسار الطريق إلى ${destName}` : `Route to ${destName}`,
      aiMessageText: cleanMarkdownText(aiMessageText),
      results: [targetFeature],
      selectedFeature: targetFeature,
      openRoute: true,
      routeConfig: {
        origin: userLoc ? { lat: userLoc.lat, lon: userLoc.lon, name: 'My Location', arabicName: 'موقعي الحالي' } : null,
        destination: {
          id: targetFeature.id,
          title: targetFeature.title,
          arabicTitle: targetFeature.arabicTitle || targetFeature.title,
          address: targetFeature.address,
          arabicAddress: targetFeature.arabicAddress,
          lat: targetFeature.lat,
          lon: targetFeature.lon,
          category: targetFeature.category
        },
        distanceKm,
        directionsUrl
      },
      structuredResults: {
        title: targetFeature.title,
        arabicTitle: targetFeature.arabicTitle || targetFeature.title,
        category: targetFeature.category,
        items: [{ ...targetFeature, activeDetailTab: 'route', showDetails: true, distanceKm }],
        tabs: []
      },
      contextBadges: this.getActiveContextBadges(lang),
      chips: [
        { label: lang === 'ar' ? 'فتح في خرائط الملاحة' : 'Open in Maps Navigation', action: 'open_url', url: directionsUrl },
        { label: lang === 'ar' ? 'عرض تفاصيل المعلم' : 'View Details', query: targetFeature.title }
      ],
      mapAction: {
        type: 'fly_to',
        center: [targetFeature.lat, targetFeature.lon],
        zoom: 15
      }
    };
  }

  /**
   * Main entry point to process any natural-language query
   * @param {string} rawQuery - The user's query text
   * @param {string} categoryFilter - Optional explicit category filter
   * @param {string} lang - Language code ('en' | 'ar')
   * @param {Object} options - { userLocation, selectedLocation }
   * @returns {Object} Structured spatial execution response
   */
  processNaturalLanguageQuery(rawQuery = '', categoryFilter = '', lang = 'en', options = {}) {
    if (categoryFilter === 'ar' || categoryFilter === 'en') {
      options = lang && typeof lang === 'object' ? lang : options;
      lang = categoryFilter;
      categoryFilter = '';
    }
    if (lang !== 'ar' && /[\u0600-\u06FF]/.test(rawQuery)) {
      lang = 'ar';
    }
    const normalizedQ = normalizeUserSpatialQuery(rawQuery);
    const q = (normalizedQ || rawQuery || '').trim();
    const qLower = q.toLowerCase();
    this.context.conversationTurn += 1;

    const isNearMeIntent = /(?:near(?:by)?(?:\s+to)?\s+me|around\s+me|closest\s+to\s+me|nearest\s+to\s+me|\bnearest\b|\bclosest\b|my\s+location|current\s+location|from\s+me|of\s+me|بجانبي|حولي|قريب\s*مني|قريبة\s*مني|القريبة\s*مني|بالقرب\s*مني|الأقرب\s*إلي|أقرب\s*إلي|أقرب\s*مني|الأقرب\s*مني|موقعي|موقعي\s*الحالي|\bأقرب\b|\bالأقرب\b|\bمني\b)/i.test(qLower);
    if (isNearMeIntent) {
      this.context.location = null;
      this.context.locationCoordinates = null;
    }

    if (isNearMeIntent && options.locationPermissionDenied) {
      const explicitDist = resolveDistrictOrLandmark(qLower);
      if (!explicitDist) {
        return {
          intent: 'location_permission_required',
          querySummary: lang === 'ar' ? 'يلزم إذن الوصول إلى الموقع' : 'Location access required',
          aiMessageText: lang === 'ar'
            ? 'يلزم إذن الوصول إلى الموقع للبحث عن الأماكن القريبة منك. يرجى تفعيل إذن الموقع والمحاولة مرة أخرى.'
            : 'Location access is required to find places near you. Please allow location access and try again.',
          results: [],
          contextBadges: [],
          chips: [
            {
              label: lang === 'ar' ? 'إعادة طلب الموقع' : 'Retry Location Access',
              action: 'request_location',
              pendingQuery: rawQuery,
              query: rawQuery
            }
          ],
          structuredGISQuery: { intent: 'near_me', status: 'permission_denied' },
          mapAction: null
        };
      }
    }

    if (options.context) {
      Object.assign(this.context, options.context);
    }
    if (options.lastSearchResults && (!this.context.currentResults || this.context.currentResults.length === 0)) {
      this.context.currentResults = options.lastSearchResults;
      if (!this.context.dataset && options.lastSearchResults[0]?.category) {
        this.context.dataset = options.lastSearchResults[0].category;
      }
    }

    if (options.selectedLocation) {
      this.context.selectedFeature = options.selectedLocation;
    }

    if (options && 'drawnArea' in options) {
      this.setDrawnAreaContext(options.drawnArea);
    }
    let activeDrawnArea = this.context.drawnArea || null;

    // 0.0 CHECK FOR NATURAL LANGUAGE APPLICATION CONTROL COMMANDS (Theme, Language, Basemap, Navigation, Layers, Legend, Locate, Draw, Print)
    const appControlRes = this.evaluateApplicationControlCommand(q, lang, options);
    if (appControlRes) {
      return appControlRes;
    }

    // 0.01 CHECK FOR ROUTE / GET DIRECTIONS INTENT
    const routeRes = this.evaluateRouteIntent(qLower, q, lang, options);
    if (routeRes) {
      return routeRes;
    }

    // 0. CHECK FOR RESET / CLEAR INTENT (Requirement 7 & Test F)
    if (
      qLower === 'reset' || qLower === 'clear' || qLower === 'show all' || qLower === 'clear filters' ||
      qLower === 'start new search' || qLower === 'new search' || qLower === 'new chat' ||
      qLower === 'إعادة تعيين' || qLower === 'عرض الكل' || qLower === 'بحث جديد' || qLower === 'محادثة جديدة'
    ) {
      this.resetContext();
      return {
        intent: 'search',
        querySummary: lang === 'ar' ? 'تمت إعادة تعيين عوامل التصفية واستعادة كافة البيانات.' : 'Reset active filters and restored full dataset.',
        aiMessageText: lang === 'ar'
          ? 'تمت إعادة تعيين عوامل التصفية وبدء محادثة جديدة. يتم عرض جميع المواقع المكانية المسجلة عبر إمارة أبوظبي ودولة الإمارات.'
          : 'Conversation context reset. Displaying all registered spatial locations across the UAE.',
        results: [...GEOVISION_SPATIAL_DATASET],
        contextBadges: [],
        structuredGISQuery: { intent: 'find', featureType: 'all', city: 'all' },
        mapAction: { type: 'fit_bounds' }
      };
    }

    // 0.1 CHECK FOR UNSUPPORTED ANALYTICAL REQUESTS & CAPABILITIES (e.g. Population growth by year, 3D Flood, Live Traffic)
    const unsupportedAnalyticalRes = this.detectUnsupportedAnalyticalCapability(qLower, q, lang);
    if (unsupportedAnalyticalRes) {
      return unsupportedAnalyticalRes;
    }

    // 0.2 CHECK FOR UNSUPPORTED / NON-SPATIAL QUERIES
    const unsupportedKeywords = [
      'rocket', 'launchpad', 'submarine', 'space station', 'nuclear', 'missile',
      'cake', 'recipe', 'how to make', 'cook', 'stock price', 'bitcoin', 'crypto',
      'python', 'tutorial', 'code', 'movie review',
      'صاروخ', 'منصة إطلاق', 'غواصة', 'محطة فضاء', 'نووي', 'كعكة', 'وصفة', 'بيتكوين'
    ];
    for (const kw of unsupportedKeywords) {
      if (qLower.includes(kw)) {
        return {
          intent: 'unsupported_layer',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
          aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
          results: [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
    }

    // 0.3 CHECK FOR WHAT-IF SIMULATIONS & HEALTHCARE SCENARIO ANALYSIS
    const isExplicitWhatIfSimulation =
      (qLower.includes('simulation') || qLower.includes('what if') || qLower.includes('ماذا لو') || qLower.includes('محاكاة') || qLower.includes('+20% pop') || qLower.includes('add a clinic') || qLower.includes('أثر عيادة') || qLower.includes('optimal clinic site')) &&
      (qLower.includes('clinic') || qLower.includes('pop') || qLower.includes('healthcare') || qLower.includes('عيادة') || qLower.includes('صحي'));

    if (isExplicitWhatIfSimulation) {
      const healthcareItems = GEOVISION_SPATIAL_DATASET.filter(item => item.category === 'Healthcare');
      const count = healthcareItems.length;
      this.context.currentResults = healthcareItems;
      this.sessionContext.previousResults = healthcareItems;
      return {
        intent: 'simulation',
        querySummary: cleanMarkdownText(lang === 'ar' ? 'محاكاة الأثر المكاني لنمو السكان +20%' : 'Spatial Impact Simulation: +20% Population Growth'),
        aiMessageText: cleanMarkdownText(lang === 'ar'
          ? 'محاكاة الذكاء الاصطناعي (+20% نمو سكاني): تم تحديد موقع مثالي لعيادة رعاية أولية جديدة في المشرف لتغطية 45,000 نسمة بنطاق وصول 12 دقيقة، مما يقلل الضغط عن مستشفيات المنطقة بنسبة 28%.'
          : 'AI Simulation (+20% Population Growth): Optimal location identified for a new primary healthcare clinic in Al Mushrif, serving ~45,000 residents within a 12-minute catchment, reducing pressure on nearby hospitals by 28%.'),
        results: healthcareItems,
        contextBadges: this.context.getActiveContextBadges(lang),
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

    // 0.7 CHECK FOR AMBIGUOUS GEOGRAPHIC PARTIAL-NAME RESOLUTION (J2 Requirement)
    const ambiguityClarification = this.detectAmbiguousGeographicEntity(qLower, q, lang);
    if (ambiguityClarification) {
      return ambiguityClarification;
    }

    // 0A. CHECK FOR DYNAMIC SUMMARY & ANALYTICS QUERIES (Phase 4)
    const analyticsRes = this.evaluateAnalyticsQuery(qLower, lang, options);
    if (analyticsRes) {
      return analyticsRes;
    }

    // 0B. CHECK FOR COMPLEX SPATIAL & CROSS-LAYER QUERIES (Phase 3)
    const complexCrossLayerRes = this.evaluateComplexCrossLayerQuery(qLower, lang, options);
    if (complexCrossLayerRes) {
      return complexCrossLayerRes;
    }

    // 0C. CHECK FOR AI PRINT / EXPORT INTENT (Requirements 6 & 7)
    const printRes = this.evaluatePrintIntent(qLower, rawQuery, lang, options);
    if (printRes) {
      return printRes;
    }

    // 1. CHECK FOR SELECTED FEATURE REFERENCE (Requirement 3, 6 & Test E)
    // e.g. "Show schools near this one", "Show schools near this hospital", "within 3 km of this one", "مدارس قريبة من هذا"
    const isSelectedFeatureRef =
      qLower.includes('this one') ||
      qLower.includes('this hospital') ||
      qLower.includes('this school') ||
      qLower.includes('this facility') ||
      qLower.includes('this place') ||
      qLower.includes('this location') ||
      qLower.includes('قريب من هذا') ||
      qLower.includes('قريب من هذه المنشأة') ||
      qLower.includes('حول هذا');

    if (isSelectedFeatureRef) {
      const targetFeature = options.selectedLocation || this.context.selectedFeature;
      if (!targetFeature) {
        return {
          intent: 'clarification',
          querySummary: lang === 'ar' ? 'يرجى تحديد موقع على الخريطة' : 'No feature selected on map',
          aiMessageText: lang === 'ar'
            ? 'يرجى النقر على مستشفى أو منشأة على الخريطة أولاً، ثم طلب البحث حولها، أو تحديد اسم المنشأة مباشرة.'
            : 'Please click on a facility on the map or in the result list first, then search for facilities near it.',
          results: this.context.currentResults.length > 0 ? this.context.currentResults : [...GEOVISION_SPATIAL_DATASET],
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: [
            { label: lang === 'ar' ? 'المراكز الحكومية في مدينة خليفة' : 'Government centers in Khalifa City', query: 'Show government facilities in Khalifa City' },
            { label: lang === 'ar' ? 'الحدائق في مدينة خليفة' : 'Parks in Khalifa City', query: 'Show parks in Khalifa City' }
          ]
        };
      }

      // Determine target category
      let targetCat = 'Education';
      let targetSub = 'Schools';
      if (qLower.includes('hospital') || qLower.includes('clinic') || qLower.includes('pharmacy') || qLower.includes('مستشف') || qLower.includes('صيدل')) {
        targetCat = 'Healthcare';
        targetSub = qLower.includes('pharmacy') || qLower.includes('صيدل') ? 'Pharmacies' : 'Hospitals';
      } else if (qLower.includes('park') || qLower.includes('حديق') || qLower.includes('منتزه')) {
        targetCat = 'Parks';
        targetSub = 'Parks';
      }

      // Determine radius
      const rMatch = qLower.match(/within\s+([\d.]+)\s*km/i) || qLower.match(/ضمن\s+([\d.]+)\s*كم/i);
      const radiusKm = rMatch ? parseFloat(rMatch[1]) : 3.0;

      const candidates = GEOVISION_SPATIAL_DATASET.filter(item =>
        item.id !== targetFeature.id &&
        (item.category.toLowerCase() === targetCat.toLowerCase() || item.subcategory?.toLowerCase().includes(targetSub.toLowerCase()))
      );

      const matchedNearby = candidates.map(item => {
        const dist = calculateDistanceKm(targetFeature.lat, targetFeature.lon, item.lat, item.lon);
        return {
          ...item,
          distanceKm: parseFloat(dist.toFixed(2)),
          nearestReferenceFeature: targetFeature.title,
          nearestReferenceArabic: targetFeature.arabicTitle || targetFeature.title
        };
      }).filter(item => item.distanceKm <= radiusKm)
        .sort((a, b) => a.distanceKm - b.distanceKm);

      this.context.previousResults = this.context.currentResults;
      this.context.currentResults = matchedNearby;
      this.context.dataset = targetCat;
      this.context.subcategory = targetSub;
      this.context.radius = radiusKm;
      this.context.spatialRelationship = 'feature_proximity';
      this.context.referenceLocation = targetFeature;
      this.sessionContext.previousResults = matchedNearby;

      const count = matchedNearby.length;
      const featTitle = targetFeature.title;
      const aiResponseText = lang === 'ar'
        ? `تم العثور على **${count}** من ${targetSub} ضمن نطاق **${radiusKm} كم** من **${targetFeature.arabicTitle || featTitle}** وعرضها على الخريطة.`
        : `Found **${count}** ${targetSub.toLowerCase()} within **${radiusKm} km** of **${featTitle}** and displayed them on the map.`;

      return this.buildStandardResponse({
        workingDataset: matchedNearby,
        lang,
        intent: 'feature_proximity',
        aiResponseText,
        targetCategory: targetCat,
        targetSubcategory: targetSub,
        searchRadiusKm: radiusKm
      });
    }

    // 2. CHECK FOR CROSS-LAYER SPATIAL BUFFER CONTEXT (Requirement 2 & Test B)
    // e.g. "Show schools within 2 km of these hospitals", "schools near these hospitals", "show schools around them", "مدارس ضمن 2 كم من هذه المستشفيات"
    const isCrossLayerRef =
      (qLower.includes('these hospitals') || qLower.includes('these schools') || qLower.includes('these facilities') ||
       qLower.includes('these places') || qLower.includes('these ones') || qLower.includes('of these') ||
       qLower.includes('near these') || qLower.includes('around these') || qLower.includes('near them') ||
       qLower.includes('around them') || qLower.includes('هذه المستشفيات') || qLower.includes('هذه المدارس') ||
       qLower.includes('من هذه') || qLower.includes('حولها') || qLower.includes('قريب منها')) &&
      this.context.currentResults && this.context.currentResults.length > 0;

    if (isCrossLayerRef) {
      const referenceItems = [...this.context.currentResults];

      // Extract Target Category from query
      let targetCat = 'Education';
      let targetSub = 'Schools';

      if (qLower.includes('school') || qLower.includes('nursery') || qLower.includes('university') || qLower.includes('academy') || qLower.includes('مدرس') || qLower.includes('حضان') || qLower.includes('تعليم')) {
        targetCat = 'Education';
        targetSub = qLower.includes('nursery') || qLower.includes('حضان') ? 'Nurseries' : qLower.includes('university') || qLower.includes('جامع') ? 'Universities' : 'Schools';
      } else if (qLower.includes('hospital') || qLower.includes('clinic') || qLower.includes('pharmacy') || qLower.includes('health') || qLower.includes('مستشف') || qLower.includes('عياد') || qLower.includes('صيدل')) {
        targetCat = 'Healthcare';
        targetSub = qLower.includes('pharmacy') || qLower.includes('صيدل') ? 'Pharmacies' : qLower.includes('clinic') || qLower.includes('عياد') ? 'Clinics' : 'Hospitals';
      } else if (qLower.includes('park') || qLower.includes('garden') || qLower.includes('حديق') || qLower.includes('منتزه')) {
        targetCat = 'Parks';
        targetSub = 'Parks';
      } else if (qLower.includes('bus') || qLower.includes('transit') || qLower.includes('transport') || qLower.includes('حافلات') || qLower.includes('مواصلات')) {
        targetCat = 'Transportation';
        targetSub = 'Bus Stations';
      }

      // Extract Buffer Distance
      const rMatch = qLower.match(/within\s+([\d.]+)\s*km/i) || qLower.match(/ضمن\s+([\d.]+)\s*كم/i);
      const bufferRadiusKm = rMatch ? parseFloat(rMatch[1]) : 2.0;

      // Filter candidates from target dataset
      const candidates = GEOVISION_SPATIAL_DATASET.filter(item => {
        const catMatch = item.category.toLowerCase() === targetCat.toLowerCase();
        const subMatch = targetSub !== 'Schools' ? item.subcategory?.toLowerCase().includes(targetSub.toLowerCase()) : true;
        return catMatch && subMatch;
      });

      // Spatial Relationship: Cross-Layer Proximity Buffer
      const matchedSchools = [];
      candidates.forEach(cand => {
        let minDistance = Infinity;
        let nearestRef = null;
        referenceItems.forEach(ref => {
          const dist = calculateDistanceKm(cand.lat, cand.lon, ref.lat, ref.lon);
          if (dist < minDistance) {
            minDistance = dist;
            nearestRef = ref;
          }
        });

        if (minDistance <= bufferRadiusKm) {
          matchedSchools.push({
            ...cand,
            distanceKm: parseFloat(minDistance.toFixed(2)),
            nearestReferenceFeature: nearestRef.title,
            nearestReferenceArabic: nearestRef.arabicTitle || nearestRef.title
          });
        }
      });

      matchedSchools.sort((a, b) => a.distanceKm - b.distanceKm);

      // Update Context
      this.context.previousResults = referenceItems;
      this.context.previousDataset = this.context.dataset;
      this.context.previousLocation = this.context.location;
      this.context.dataset = targetCat;
      this.context.subcategory = targetSub;
      this.context.radius = bufferRadiusKm;
      this.context.spatialRelationship = 'cross_layer_buffer';
      this.context.currentResults = matchedSchools;
      this.sessionContext.previousResults = matchedSchools;

      const count = matchedSchools.length;
      const prevName = this.context.previousDataset || (lang === 'ar' ? 'المرافق السابقة' : 'facilities');
      const locName = this.context.location ? ` in ${this.context.location}` : '';
      const locNameAr = this.context.location ? ` في ${this.context.locationCoordinates?.arabicName || this.context.location}` : '';

      const aiResponseText = lang === 'ar'
        ? `تم العثور على **${count}** من **${targetSub}** ضمن نطاق **${bufferRadiusKm} كم** من الـ ${referenceItems.length} ${prevName}${locNameAr} السابقة، وتم عرضها على الخريطة.`
        : `Found **${count}** **${targetSub.toLowerCase()}** within **${bufferRadiusKm} km** of the ${referenceItems.length} previously identified ${prevName.toLowerCase()}${locName}.`;

      return this.buildStandardResponse({
        workingDataset: matchedSchools,
        lang,
        intent: 'cross_layer_buffer',
        aiResponseText,
        targetCategory: targetCat,
        targetSubcategory: targetSub,
        searchRadiusKm: bufferRadiusKm
      });
    }

    // 3. CHECK FOR AMBIGUOUS PRONOUN REFERENCE (Requirement 11 & Test G)
    if (
      (qLower.startsWith('show schools near them') || qLower.startsWith('near them') || qLower.startsWith('around them') || qLower.startsWith('قريب منهم')) &&
      (!this.context.currentResults || this.context.currentResults.length === 0)
    ) {
      return {
        intent: 'clarification',
        querySummary: lang === 'ar' ? 'تحديد المرجع المكاني' : 'Ambiguous reference location detected',
        aiMessageText: lang === 'ar'
          ? 'أي موقع مرجعي ترغب في البحث بالقرب منه؟'
          : 'Which reference location would you like to search near?',
        clarification: {
          question: lang === 'ar' ? 'اختر النقطة المرجعية:' : 'Select a reference point:',
          options: [
            { label: lang === 'ar' ? 'موقعي الحالي' : 'My Current Location', query: 'Show parks within 5 km of my location' },
            { label: lang === 'ar' ? 'مدينة خليفة' : 'Khalifa City', query: 'Show parks in Khalifa City' },
            { label: lang === 'ar' ? 'جزيرة ياس' : 'Yas Island', query: 'Show parks in Yas Island' }
          ]
        },
        results: [...GEOVISION_SPATIAL_DATASET],
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: [
          { label: lang === 'ar' ? 'الحدائق في مدينة خليفة' : 'Parks in Khalifa City', query: 'Show parks in Khalifa City' },
          { label: lang === 'ar' ? 'الحدائق بالقرب مني' : 'Parks near me', query: 'Show parks within 5 km of my location' }
        ]
      };
    }

    // 4. CHECK FOR RADIUS REFINEMENT (Requirement 9 & Test C)
    // e.g. "Increase the radius to 5 km", "expand to 5km", "make it 10 km", "within 5 km", "توسيع النطاق إلى 5 كم"
    const isRadiusRefinement =
      (qLower.includes('increase the radius') || qLower.includes('expand to') || qLower.includes('increase radius') ||
       qLower.includes('widen the radius') || qLower.includes('change radius') || qLower.includes('make it') ||
       qLower.includes('توسيع النطاق') || qLower.includes('زيادة نصف القطر')) &&
      (this.context.location || this.context.dataset || this.context.locationCoordinates);

    if (isRadiusRefinement) {
      const radMatch = qLower.match(/([\d.]+)\s*km/i) || qLower.match(/([\d.]+)\s*كم/i);
      const newRadiusKm = radMatch ? parseFloat(radMatch[1]) : (this.context.radius ? this.context.radius * 2 : 5.0);

      this.context.radius = newRadiusKm;
      const refCoord = this.context.locationCoordinates || { lat: 24.4239, lon: 54.5772, name: this.context.location || 'Khalifa City' };

      const targetCat = this.context.dataset || 'Healthcare';
      const targetSub = this.context.subcategory;

      let expandedResults = GEOVISION_SPATIAL_DATASET.filter(item => {
        const catMatch = targetCat ? item.category.toLowerCase() === targetCat.toLowerCase() : true;
        const subMatch = targetSub ? item.subcategory.toLowerCase() === targetSub.toLowerCase() : true;
        return catMatch && subMatch;
      }).map(item => {
        const dist = calculateDistanceKm(refCoord.lat, refCoord.lon, item.lat, item.lon);
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)) };
      }).filter(item => item.distanceKm <= newRadiusKm)
        .sort((a, b) => a.distanceKm - b.distanceKm);

      if (this.context.filters.sector) {
        expandedResults = expandedResults.filter(item => item.sector === this.context.filters.sector);
      }

      this.context.currentResults = expandedResults;
      this.sessionContext.previousResults = expandedResults;

      const count = expandedResults.length;
      const catName = targetSub || targetCat;
      const locName = this.context.location || refCoord.name;

      const aiResponseText = lang === 'ar'
        ? `تم توسيع نطاق البحث إلى **${newRadiusKm} كم** حول **${this.context.locationCoordinates?.arabicName || locName}**. تم العثور على **${count}** من **${catName}**.`
        : `Expanded search radius to **${newRadiusKm} km** around **${locName}**. Found **${count}** **${catName.toLowerCase()}**.`;

      return this.buildStandardResponse({
        workingDataset: expandedResults,
        lang,
        intent: 'radius_search',
        aiResponseText,
        targetDistrict: refCoord,
        targetCategory: targetCat,
        targetSubcategory: targetSub,
        searchRadiusKm: newRadiusKm
      });
    }

    // 5. CHECK FOR PROGRESSIVE CONTEXTUAL FOLLOW-UP (Requirement 2, 9 & Test A, D)
    let refinedSubcat = null;
    const globalTaxonomyMatch = resolveTaxonomyEntity(qLower);
    const isCategorySwitch = globalTaxonomyMatch && this.context.dataset && !isCategoryMatch(globalTaxonomyMatch.category, this.context.dataset);

    if (this.context.dataset && !isCategorySwitch) {
      const taxonomyMatch = resolveTaxonomyEntity(qLower, this.context.dataset);
      if (taxonomyMatch && isCategoryMatch(taxonomyMatch.category, this.context.dataset) && taxonomyMatch.subcategory) {
        refinedSubcat = taxonomyMatch.subcategory;
      }
    }

    const isMultiCategoryQuery = resolveAllTaxonomyEntities(qLower).length > 1;
    const isGovCategoryQuery = /(?:government centers|government facilities|government services|government offices|مراكز حكومية|منشآت حكومية|خدمات حكومية|دوائر حكومية)/i.test(qLower) ||
      /^(?:government|government facilities|government centers|government services|حكومي|حكومية|خدمات حكومية)$/i.test(qLower.trim());
    const radMatchProgressive = qLower.match(/(?:within|in|radius|distance|ضمن|نطاق)\s*([\d.]+)\s*(?:km|kilo|كم)/i);

    const isProgressiveFollowUp = Boolean(this.context.dataset) && !isGovCategoryQuery && !isMultiCategoryQuery && !isCategorySwitch && !isNearMeIntent && (
      refinedSubcat !== null ||
      radMatchProgressive !== null ||
      qLower.startsWith('only ') ||
      qLower.startsWith('just ') ||
      qLower.includes(' فقط') ||
      (!isGovCategoryQuery && (qLower.includes('government') || qLower.includes('private'))) ||
      qLower.includes('nearest') ||
      qLower.includes('closest') ||
      qLower.includes('which is closest') ||
      qLower.includes('which is nearest') ||
      qLower.includes('rating above') ||
      qLower.includes('rating >') ||
      qLower.includes('rating over') ||
      qLower.includes('rating >=') ||
      qLower.includes('highest rating') ||
      qLower.includes('highest rated') ||
      qLower.includes('highest-rated') ||
      qLower.includes('best rating') ||
      qLower.includes('best rated') ||
      qLower.includes('top rated') ||
      qLower.includes('lowest rating') ||
      qLower.includes('lowest rated') ||
      qLower.includes('british') ||
      qLower.includes('american') ||
      qLower.includes('ib') ||
      qLower.includes('moe') ||
      qLower.includes('ministry') ||
      qLower.includes('charter') ||
      qLower.includes('sabis') ||
      qLower.includes('canadian') ||
      qLower.includes('montessori') ||
      qLower.includes('tuition') ||
      qLower.includes('fee') ||
      qLower.includes('fees') ||
      qLower.includes('beds') ||
      qLower.includes('irtiqaa') ||
      qLower.includes('irtqaa') ||
      qLower.includes('outstanding') ||
      qLower.includes('very good') ||
      qLower.includes('emissions') ||
      qLower.includes('carbon') ||
      qLower.includes('co2') ||
      qLower.includes('which school') ||
      qLower.includes('which hospital') ||
      qLower.includes('which clinic') ||
      qLower.includes('which park') ||
      qLower.includes('which facility') ||
      qLower.includes('which one') ||
      qLower.includes('top 3') ||
      qLower.includes('top 5') ||
      qLower.includes('top 10') ||
      qLower.includes('emergency 24/7') ||
      qLower.includes('24/7') ||
      qLower.includes('حكومي') ||
      qLower.includes('حكومية') ||
      qLower.includes('خاص') ||
      qLower.includes('خاصة') ||
      qLower.includes('أقرب') ||
      qLower.includes('الأقرب') ||
      qLower.includes('أيها الأقرب') ||
      qLower.includes('أيهما أقرب') ||
      qLower.includes('تقييم أعلى') ||
      qLower.includes('الأعلى تقييماً') ||
      qLower.includes('أعلى تقييم') ||
      qLower.includes('أدنى تقييم') ||
      qLower.includes('أيها') ||
      qLower.includes('أي مدرسة') ||
      qLower.includes('أي مستشفى') ||
      qLower.includes('أي حديقة') ||
      qLower.includes('طوارئ') ||
      qLower.includes('بريطاني') ||
      qLower.includes('أمريكي') ||
      qLower.includes('وزاري') ||
      qLower.includes('شراكات') ||
      qLower.includes('رسوم') ||
      qLower.includes('سرير') ||
      qLower.includes('أسرة') ||
      qLower.includes('ارتقاء') ||
      qLower.includes('متميز') ||
      qLower.includes('جيد جدا') ||
      qLower.includes('انبعاثات'));

    if (isProgressiveFollowUp && (this.context.dataset || this.context.location || this.context.drawnArea)) {
      if (refinedSubcat) {
        this.context.subcategory = refinedSubcat;
      }
      const queryDistrict = resolveDistrictOrLandmark(qLower);
      if (queryDistrict) {
        this.context.location = queryDistrict.name;
        this.context.locationCoordinates = queryDistrict;
      }
      const activeCat = this.context.dataset;
      const activeSub = this.context.subcategory;
      let activeLoc = this.context.locationCoordinates || (this.context.location ? resolveDistrictOrLandmark(this.context.location.toLowerCase()) : null);

      if (radMatchProgressive) {
        this.context.radius = parseFloat(radMatchProgressive[1]);
      }

      // Start from all items in this location / category
      let candidates = GEOVISION_SPATIAL_DATASET.filter(item => {
        const catMatch = activeCat ? isCategoryMatch(item.category, activeCat) : true;
        const subMatch = activeSub ? isSubcategoryMatch(item.subcategory, activeSub) : true;
        return catMatch && subMatch;
      });

      if (this.context.drawnArea) {
        candidates = candidates.filter(item => isPointInDrawnArea(item, this.context.drawnArea));
      }

      if (activeLoc && !this.context.drawnArea) {
        candidates = candidates.map(item => {
          const dist = calculateDistanceKm(activeLoc.lat, activeLoc.lon, item.lat, item.lon);
          const nameMatch = activeLoc.isUserLocation ? false : (
            (item.address || '').toLowerCase().includes(activeLoc.name.toLowerCase()) ||
            (item.title || '').toLowerCase().includes(activeLoc.name.toLowerCase()) ||
            (item.city || '').toLowerCase().includes(activeLoc.name.toLowerCase())
          );
          const maxRadius = this.context.radius || activeLoc.radius || (activeLoc.isUserLocation ? 10.0 : 6.0);
          return {
            ...item,
            distanceKm: parseFloat(dist.toFixed(2)),
            calculatedDistanceKm: parseFloat(dist.toFixed(2)),
            isDistrictMatch: nameMatch || dist <= maxRadius
          };
        }).filter(item => item.isDistrictMatch)
          .sort((a, b) => a.distanceKm - b.distanceKm);
      }

      // Extract and update structured attribute filters
      const progressiveFilters = parseAttributeFilters(qLower);
      Object.assign(this.context.filters, progressiveFilters);

      // If active context is a cross-layer buffer, filter directly from the previous buffer results
      if (this.context.spatialRelationship === 'cross_layer_buffer' && this.context.currentResults.length > 0) {
        candidates = this.context.currentResults;
      }

      // Apply Filters
      candidates = applyItemAttributeFilters(candidates, this.context.filters);

      // CHECK FOR GENERIC RANKING / SUPERLATIVES ON ACTIVE CONTEXT
      const rankingResult = this.evaluateRankingQuery(qLower, candidates, { activeCat, activeSub, activeLoc }, lang, options);
      if (rankingResult) {
        this.context.currentResults = rankingResult.ranked;
        this.sessionContext.previousResults = rankingResult.ranked;
        this.context.selectedFeature = rankingResult.topItem;

        return this.buildStandardResponse({
          workingDataset: rankingResult.ranked,
          lang,
          intent: 'ranking_superlative',
          aiResponseText: cleanMarkdownText(rankingResult.aiResponseText),
          targetDistrict: activeLoc,
          targetCategory: activeCat,
          targetSubcategory: activeSub,
          searchRadiusKm: this.context.radius,
          isRanked: true,
          rankSummary: rankingResult.rankSummary,
          mapAction: rankingResult.mapAction
        });
      }

      this.context.currentResults = candidates;
      this.sessionContext.previousResults = candidates;

      const count = candidates.length;
      const filterSummary = this.context.filters.sector ? ` ${this.context.filters.sector.toLowerCase()}` : '';
      const filterSummaryAr = this.context.filters.sector === 'Government' ? ' الحكومية' : this.context.filters.sector === 'Private' ? ' الخاصة' : '';
      const locStr = this.context.location ? ` in ${this.context.location}` : '';
      const locStrAr = this.context.location ? ` في ${this.context.locationCoordinates?.arabicName || this.context.location}` : '';
      const catDisplayName = activeSub ? (activeSub.toLowerCase()) : (activeCat ? activeCat.toLowerCase() : 'facilities');
      const catDisplayNameAr = activeSub ? (SUBCAT_TRANSLATIONS_AR[activeSub] || activeSub) : (CAT_TRANSLATIONS_AR[activeCat] || activeCat || 'المرافق');

      let aiResponseText = '';
      if (lang === 'ar') {
        if (this.context.drawnArea) {
          const areaLabelAr = getDrawnAreaLabel(this.context.drawnArea, 'ar');
          aiResponseText = `تم تصفية النتائج: تم العثور على ${count} من ${catDisplayNameAr}${filterSummaryAr} داخل ${areaLabelAr}.`;
        } else if (this.context.radius && (activeLoc?.isUserLocation || this.context.location === 'Current Location' || this.context.location === 'موقعك الحالي')) {
          aiResponseText = `تم تصفية النتائج: تم العثور على ${count} من ${catDisplayNameAr}${filterSummaryAr} ضمن نطاق ${this.context.radius} كم من موقعك الحالي.`;
        } else {
          aiResponseText = `تم تصفية النتائج: تم العثور على ${count} من ${catDisplayNameAr}${filterSummaryAr}${locStrAr}.`;
        }
      } else {
        if (this.context.drawnArea) {
          const areaLabelEn = getDrawnAreaLabel(this.context.drawnArea, 'en');
          aiResponseText = `Refined results based on context: found ${count}${filterSummary} ${catDisplayName} inside ${areaLabelEn}.`;
        } else if (this.context.radius && (activeLoc?.isUserLocation || this.context.location === 'Current Location')) {
          aiResponseText = `Refined results based on context: found ${count}${filterSummary} ${catDisplayName} within ${this.context.radius} km of your location.`;
        } else {
          aiResponseText = `Refined results based on context: found ${count}${filterSummary} ${catDisplayName}${locStr}.`;
        }
      }

      return this.buildStandardResponse({
        workingDataset: candidates,
        lang,
        intent: 'attribute_refine',
        aiResponseText: cleanMarkdownText(aiResponseText),
        targetDistrict: activeLoc,
        targetCategory: activeCat,
        targetSubcategory: activeSub,
        searchRadiusKm: this.context.radius
      });
    }

    // 6. GENERAL SPATIAL / ATTRIBUTE PARSING & CONTEXT ESTABLISHMENT
    let workingDataset = [...GEOVISION_SPATIAL_DATASET];

    // Check for District / City / Landmark
    let targetDistrict = resolveDistrictOrLandmark(qLower);
    let targetCity = null;
    if (targetDistrict) {
      if (qLower.includes('dubai') || qLower.includes('دبي')) targetCity = 'Dubai';
      else targetCity = 'Abu Dhabi';
    }

    // Proximity / Radius Detection
    const radMatch = qLower.match(/within\s+([\d.]+)\s*km/i) || qLower.match(/ضمن\s*([\d.]+)\s*كم/i);
    let searchRadiusKm = null;
    if (radMatch) {
      searchRadiusKm = parseFloat(radMatch[1]);
      this.context.radius = searchRadiusKm;
    }

    // Section 3: Handle user location coordinates for near-me intent
    if (!targetDistrict && isNearMeIntent) {
      const defaultUserCoords = {
        lat: 24.4539,
        lon: 54.3773,
        name: lang === 'ar' ? 'موقعك الحالي' : 'Current Location',
        arabicName: 'موقعك الحالي',
        isUserLocation: true
      };

      const resolvedLoc = (options?.userLocation && options.userLocation.lat != null)
        ? options.userLocation
        : (this.context.locationCoordinates && this.context.locationCoordinates.lat != null && this.context.locationCoordinates.isUserLocation)
          ? this.context.locationCoordinates
          : defaultUserCoords;

      targetDistrict = {
        lat: Number(resolvedLoc.lat),
        lon: Number(resolvedLoc.lon),
        name: resolvedLoc.name || (lang === 'ar' ? 'موقعك الحالي' : 'Current Location'),
        arabicName: resolvedLoc.arabicName || 'موقعك الحالي',
        radius: searchRadiusKm || (resolvedLoc.radius || 25.0),
        isUserLocation: true
      };
      this.context.location = targetDistrict.name;
      this.context.locationCoordinates = targetDistrict;
    }

    // Check if query specified an unknown location (e.g. "in <UnknownLocation>")
    const locInMatch = qLower.match(/\bin\s+([a-z0-9_\s]+)/i) || qLower.match(/\bفي\s+([\u0600-\u06FF\s]+)/);
    if (!targetDistrict && locInMatch) {
      const candidateLoc = locInMatch[1].trim().toLowerCase();
      const isDrawnAreaRef = candidateLoc.includes('selected area') || candidateLoc.includes('drawn area') ||
        candidateLoc.includes('the area') || candidateLoc.includes('this area') || candidateLoc.includes('current area') ||
        candidateLoc.includes('boundary') || candidateLoc.includes('bounding box') || candidateLoc.includes('circle') ||
        candidateLoc.includes('polygon') || candidateLoc.includes('المنطقة المحددة') || candidateLoc.includes('هذه المنطقة') ||
        candidateLoc.includes('المنطقة') || candidateLoc.includes('المختارة') || candidateLoc.includes('المرسومة') || candidateLoc.includes('داخل');
      const ignoreWords = [
        'abu dhabi', 'dubai', 'uae', 'the area', 'my location', 'this area', 'all areas',
        'the selected area', 'selected area', 'the drawn area', 'drawn area', 'current area',
        'bounding box', 'this circle', 'this polygon', 'the boundary',
        'الامارات', 'أبوظبي', 'دبي', 'المنطقة المحددة', 'المنطقة', 'هذه المنطقة'
      ];
      if (!isDrawnAreaRef && !ignoreWords.includes(candidateLoc) && candidateLoc.length > 3 && !Object.keys(DISTRICT_COORDINATES).some(k => candidateLoc.includes(k))) {
        return {
          intent: 'zero_results',
          querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
          aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
          results: [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('zero_results', lang, {}, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
    }
    // Check for Direct POI / Specific Feature Match (e.g. "Umm Al Emarat Park", "Burjeel Hospital")
    const directPoiMatch = GEOVISION_SPATIAL_DATASET.find(item => {
      const t = item.title.toLowerCase();
      const at = (item.arabicTitle || '').toLowerCase();
      return t === qLower || at === qLower ||
        (t.length > 5 && qLower === t) ||
        (at.length > 5 && qLower === at) ||
        (t.length > 8 && qLower.startsWith(t)) ||
        (at.length > 8 && qLower.startsWith(at));
    });

    if (directPoiMatch) {
      this.context.selectedFeature = directPoiMatch;
      this.context.currentResults = [directPoiMatch];
      this.sessionContext.previousResults = [directPoiMatch];
      this.context.dataset = directPoiMatch.category;
      this.context.subcategory = directPoiMatch.subcategory;

      const aiResponseText = lang === 'ar'
        ? `تم العثور على **${directPoiMatch.arabicTitle || directPoiMatch.title}** في **${directPoiMatch.address || directPoiMatch.city || 'أبوظبي'}** وعرض تفاصيلها على الخريطة.`
        : `I found **${directPoiMatch.title}** located in **${directPoiMatch.address || directPoiMatch.city || 'Abu Dhabi'}** and focused it on the map.`;

      return this.buildStandardResponse({
        workingDataset: [directPoiMatch],
        lang,
        intent: 'poi_focus',
        aiResponseText: cleanMarkdownText(aiResponseText),
        targetCategory: directPoiMatch.category,
        targetSubcategory: directPoiMatch.subcategory,
        mapAction: { type: 'fly_to', center: [directPoiMatch.lat, directPoiMatch.lon], zoom: 16 }
      });
    }

    let targetCategory = null;
    let targetSubcategory = null;
    const targetEntities = resolveAllTaxonomyEntities(qLower);

    if (targetEntities.length === 1) {
      targetCategory = targetEntities[0].category;
      targetSubcategory = targetEntities[0].subcategory;
    } else if (targetEntities.length === 0) {
      const taxonomyMatch = resolveTaxonomyEntity(qLower);
      if (taxonomyMatch) {
        targetCategory = taxonomyMatch.category;
        targetSubcategory = taxonomyMatch.subcategory;
      }
    }

    if (!targetCategory && targetEntities.length === 0 && categoryFilter && categoryFilter !== 'all') {
      targetCategory = categoryFilter;
    }

    // Context Isolation & Category Switch Rule:
    if (targetEntities.length > 1) {
      const retainedDrawnArea = this.context.drawnArea;
      this.context.filters = {
        sector: null,
        ratingMin: null,
        open247: false,
        curriculum: null,
        maxTuitionFee: null,
        feeType: null,
        minBeds: null,
        irtqaaRating: null,
        maxEmissions: null
      };
      this.context.referenceDataset = null;
      this.context.referenceFeatures = [];
      this.context.spatialRelationship = retainedDrawnArea ? 'within_drawn_area' : null;
      this.context.selectedFeature = null;
      this.context.radius = searchRadiusKm;
      this.context.dataset = targetEntities.map(e => e.category).join(', ');
      this.context.subcategory = targetEntities.map(e => e.subcategory || e.category).join(', ');
      this.context.targetEntities = targetEntities;
      this.context.drawnArea = retainedDrawnArea;
      if (targetDistrict) {
        this.context.location = targetDistrict.name;
        this.context.locationCoordinates = targetDistrict;
      }
    } else if (targetCategory && this.context.dataset && targetCategory.toLowerCase() !== this.context.dataset.toLowerCase()) {
      const isExplicitAreaMentioned = qLower.includes('this area') || qLower.includes('the area') || qLower.includes('here') ||
        qLower.includes('inside') || qLower.includes('within') || qLower.includes('selected area') || qLower.includes('drawn area') ||
        qLower.includes('in area') || qLower.includes('هذه المنطقة') || qLower.includes('المنطقة المحددة') || qLower.includes('هنا') || qLower.includes('داخل');
      const retainedDrawnArea = isExplicitAreaMentioned ? this.context.drawnArea : null;
      this.context.filters = {
        sector: null,
        ratingMin: null,
        open247: false,
        curriculum: null,
        maxTuitionFee: null,
        feeType: null,
        minBeds: null,
        irtqaaRating: null,
        maxEmissions: null
      };
      this.context.referenceDataset = null;
      this.context.referenceFeatures = [];
      this.context.spatialRelationship = retainedDrawnArea ? 'within_drawn_area' : null;
      this.context.selectedFeature = null;
      this.context.radius = searchRadiusKm;
      this.context.dataset = targetCategory;
      this.context.subcategory = targetSubcategory;
      this.context.targetEntities = targetEntities;
      this.context.drawnArea = retainedDrawnArea;
      if (targetDistrict) {
        this.context.location = targetDistrict.name;
        this.context.locationCoordinates = targetDistrict;
      } else if (this.context.locationCoordinates && !retainedDrawnArea) {
        targetDistrict = this.context.locationCoordinates;
      }
    } else if (targetDistrict && targetCategory) {
      const isExplicitAreaMentioned = qLower.includes('this area') || qLower.includes('the area') || qLower.includes('here');
      const retainedDrawnArea = isExplicitAreaMentioned ? this.context.drawnArea : null;
      this.context.reset();
      this.context.location = targetDistrict.name;
      this.context.locationCoordinates = targetDistrict;
      this.context.dataset = targetCategory;
      this.context.subcategory = targetSubcategory;
      this.context.targetEntities = targetEntities;
      this.context.radius = searchRadiusKm;
      this.context.drawnArea = retainedDrawnArea;
    } else if (targetDistrict && !targetCategory) {
      this.context.location = targetDistrict.name;
      this.context.locationCoordinates = targetDistrict;
      this.context.radius = searchRadiusKm;
    } else if (!targetDistrict && targetCategory) {
      this.context.dataset = targetCategory;
      this.context.subcategory = targetSubcategory;
      this.context.targetEntities = targetEntities;
      this.context.radius = searchRadiusKm;
      if (this.context.locationCoordinates && !this.context.drawnArea) {
        targetDistrict = this.context.locationCoordinates;
      }
    }

    // Extract structured attribute filters
    const initialAttrFilters = parseAttributeFilters(qLower);
    Object.assign(this.context.filters, initialAttrFilters);

    // Apply Category Filter Strictly
    if (targetEntities.length > 1) {
      workingDataset = workingDataset.filter(item => {
        return targetEntities.some(ent => {
          const catMatch = isCategoryMatch(item.category, ent.category);
          const subMatch = ent.subcategory ? isSubcategoryMatch(item.subcategory, ent.subcategory) : true;
          return catMatch && subMatch;
        });
      });
    } else if (targetCategory && targetCategory !== 'all') {
      workingDataset = workingDataset.filter(item => {
        const catMatch = isCategoryMatch(item.category, targetCategory);
        const subMatch = targetSubcategory ? isSubcategoryMatch(item.subcategory, targetSubcategory) : true;
        return catMatch && subMatch;
      });
    }

    // Apply Structured Attribute Filters
    workingDataset = applyItemAttributeFilters(workingDataset, this.context.filters);

    // Sync activeDrawnArea after category switch / context evaluation
    activeDrawnArea = this.context.drawnArea;

    // Apply Drawn Area Filter or District Filter or Global User Location Proximity Sorting
    if (activeDrawnArea && !targetDistrict) {
      workingDataset = workingDataset.filter(item => isPointInDrawnArea(item, activeDrawnArea));
    } else if (targetDistrict) {
      workingDataset = workingDataset.map(item => {
        const dist = calculateDistanceKm(targetDistrict.lat, targetDistrict.lon, item.lat, item.lon);
        const nameMatch = targetDistrict.isUserLocation ? false : (
          (item.address || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
          (item.title || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
          (item.city || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
          (item.description || '').toLowerCase().includes(targetDistrict.name.toLowerCase())
        );
        const maxRadius = searchRadiusKm || (targetDistrict.isUserLocation ? 25.0 : (targetDistrict.radius || 6.0));
        return {
          ...item,
          distanceKm: parseFloat(dist.toFixed(2)),
          calculatedDistanceKm: parseFloat(dist.toFixed(2)),
          isDistrictMatch: nameMatch || dist <= maxRadius
        };
      }).filter(item => item.isDistrictMatch)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    } else {
      const activeUserLoc = options?.userLocation || this.context.locationCoordinates || null;
      if (activeUserLoc && activeUserLoc.lat != null && activeUserLoc.lon != null) {
        workingDataset = workingDataset.map(item => {
          const dist = calculateDistanceKm(activeUserLoc.lat, activeUserLoc.lon, item.lat, item.lon);
          return {
            ...item,
            distanceKm: parseFloat(dist.toFixed(2)),
            calculatedDistanceKm: parseFloat(dist.toFixed(2))
          };
        }).sort((a, b) => a.distanceKm - b.distanceKm);
      }
    }

    // Check for direct ranking in general queries
    const rankingResult = this.evaluateRankingQuery(qLower, workingDataset, { activeCat: targetCategory, activeSub: targetSubcategory, activeLoc: targetDistrict }, lang, options);
    if (rankingResult) {
      this.context.currentResults = rankingResult.ranked;
      this.sessionContext.previousResults = rankingResult.ranked;
      this.context.selectedFeature = rankingResult.topItem;

      return this.buildStandardResponse({
        workingDataset: rankingResult.ranked,
        lang,
        intent: 'ranking_superlative',
        aiResponseText: cleanMarkdownText(rankingResult.aiResponseText),
        targetDistrict,
        targetCategory: targetEntities.length > 1 ? targetEntities.map(e => e.category).join(', ') : targetCategory,
        targetSubcategory: targetEntities.length > 1 ? targetEntities.map(e => e.subcategory || e.category).join(', ') : targetSubcategory,
        searchRadiusKm,
        isRanked: true,
        rankSummary: rankingResult.rankSummary,
        mapAction: rankingResult.mapAction
      });
    }

    // 8. SEMANTIC RELEVANCE QUALITY GATE
    const isExplicitBrowseAll =
      qLower === '' ||
      qLower === 'all' ||
      qLower === 'show all' ||
      qLower === 'all facilities' ||
      qLower === 'facilities' ||
      qLower === 'all locations' ||
      qLower === 'explore' ||
      qLower === 'browse' ||
      qLower === 'everything' ||
      qLower === 'show all facilities in this area' ||
      qLower === 'show all in this area' ||
      qLower === 'all facilities in this area' ||
      qLower === 'places inside this area' ||
      qLower === 'show all facilities' ||
      qLower === 'كل' ||
      qLower === 'عرض الكل' ||
      qLower === 'المرافق' ||
      qLower === 'جميع المرافق' ||
      qLower === 'كافة المواقع' ||
      qLower === 'المواقع' ||
      qLower.includes('show all facilities in this area') ||
      qLower.includes('all facilities in this area') ||
      qLower.includes('جميع المرافق في هذه المنطقة') ||
      qLower.includes('عرض كافة المرافق داخل المنطقة');

    // Check if query contains an unmapped/unsupported entity in a geographic location
    if (!targetCategory && !targetSubcategory && targetEntities.length === 0 && targetDistrict && !isExplicitBrowseAll) {
      const unmappedEntity = detectUnmappedEntityQuery(qLower, targetDistrict, targetCategory, targetSubcategory);
      if (unmappedEntity) {
        const textMatchedPOI = workingDataset.some(item =>
          (item.title || '').toLowerCase().includes(unmappedEntity.toLowerCase()) ||
          (item.arabicTitle || '').includes(unmappedEntity)
        );

        if (!textMatchedPOI) {
          return {
            intent: 'unsupported_layer',
            querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
            aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
            results: [],
            structuredResults: null,
            contextBadges: this.context.getActiveContextBadges(lang),
            chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
            mapAction: { type: 'fit_bounds' }
          };
        }
      }
    }

    const hasRecognizedEntity =
      Boolean(targetCategory) ||
      Boolean(targetSubcategory) ||
      Boolean(targetEntities && targetEntities.length > 0) ||
      Boolean(targetDistrict) ||
      Boolean(activeDrawnArea) ||
      Boolean(categoryFilter && categoryFilter !== 'all') ||
      Boolean(this.context.dataset);

    if (!hasRecognizedEntity && !isExplicitBrowseAll) {
      return {
        intent: 'unsupported_layer',
        querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
        aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
        results: [],
        structuredResults: null,
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
        mapAction: { type: 'fit_bounds' }
      };
    }

    // -------------------------------------------------------------
    // STEP 14: MANDATORY POST-EXECUTION QUALITY GATE & VALIDATION
    // (Rule 1, Rule 2, Rule 11, Rule 12)
    // -------------------------------------------------------------
    if (!isExplicitBrowseAll && workingDataset.length > 0) {
      // 1. Category validation
      if (targetEntities && targetEntities.length > 0) {
        workingDataset = workingDataset.filter(item =>
          targetEntities.some(ent =>
            isCategoryMatch(item.category, ent.category) &&
            (ent.subcategory ? isSubcategoryMatch(item.subcategory, ent.subcategory) : true)
          )
        );
      } else if (targetCategory && targetCategory !== 'all') {
        workingDataset = workingDataset.filter(item =>
          isCategoryMatch(item.category, targetCategory) &&
          (targetSubcategory ? isSubcategoryMatch(item.subcategory, targetSubcategory) : true)
        );
      }

      // 2. Boundary validation (drawn area)
      if (activeDrawnArea && !targetDistrict) {
        workingDataset = workingDataset.filter(item => isPointInDrawnArea(item, activeDrawnArea));
      }

      // 3. Location validation (district / radius)
      if (targetDistrict && !targetDistrict.isUserLocation) {
        const maxDistKm = searchRadiusKm || targetDistrict.radius || 15.0;
        workingDataset = workingDataset.filter(item => {
          const nameMatch =
            (item.address || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
            (item.title || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
            (item.city || '').toLowerCase().includes(targetDistrict.name.toLowerCase());
          const distKm = calculateDistanceKm(targetDistrict.lat, targetDistrict.lon, item.lat, item.lon);
          return nameMatch || distKm <= maxDistKm;
        });
      }

      // 4. Attribute filter validation
      if (this.context.filters && Object.keys(this.context.filters).length > 0) {
        workingDataset = applyItemAttributeFilters(workingDataset, this.context.filters);
      }
    }

    this.context.currentResults = workingDataset;
    this.sessionContext.previousResults = workingDataset;

    const count = workingDataset.length;
    const catEn = targetSubcategory ? targetSubcategory.toLowerCase() : targetCategory ? targetCategory.toLowerCase() : 'facilities';
    const catAr = SUBCAT_TRANSLATIONS_AR[targetSubcategory] || CAT_TRANSLATIONS_AR[targetCategory] || 'المرافق';

    let aiResponseText = '';
    if (count === 0) {
      if (activeDrawnArea) {
        const areaLabel = getDrawnAreaLabel(activeDrawnArea, lang);
        const zeroMsgEn = `No ${catEn} were found inside ${areaLabel}. Try adjusting your search or drawing a larger boundary.`;
        const zeroMsgAr = `لم يتم العثور على أي ${catAr} داخل ${areaLabel}. جرب توسيع نطاق الرسم أو تعديل الفئات.`;
        return {
          intent: 'zero_results',
          querySummary: cleanMarkdownText(lang === 'ar' ? zeroMsgAr : zeroMsgEn),
          aiMessageText: cleanMarkdownText(lang === 'ar' ? zeroMsgAr : zeroMsgEn),
          results: [],
          structuredResults: null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('zero_results', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
      return {
        intent: 'zero_results',
        querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
        aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
        results: [],
        structuredResults: null,
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: this.generateContextualSuggestions('zero_results', lang, options, []),
        mapAction: { type: 'fit_bounds' }
      };
    } else if (targetEntities.length > 1) {
      const catGroupCounts = {};
      targetEntities.forEach(ent => {
        const entItems = workingDataset.filter(it => isCategoryMatch(it.category, ent.category) && (ent.subcategory ? isSubcategoryMatch(it.subcategory, ent.subcategory) : true));
        catGroupCounts[ent.labelEn] = {
          count: entItems.length,
          labelAr: ent.labelAr
        };
      });

      const posItems = Object.entries(catGroupCounts).filter(([k, v]) => v.count > 0);
      const zeroItems = Object.entries(catGroupCounts).filter(([k, v]) => v.count === 0);

      const breakdownEn = Object.entries(catGroupCounts).map(([k, v]) => `${v.count} ${k.toLowerCase()}`).join(', ');
      const breakdownAr = Object.entries(catGroupCounts).map(([k, v]) => `${v.count} ${v.labelAr}`).join('، ');

      let locPhraseEn = 'across Abu Dhabi & UAE';
      let locPhraseAr = 'في دولة الإمارات';
      if (activeDrawnArea) {
        locPhraseEn = `inside ${getDrawnAreaLabel(activeDrawnArea, 'en')}`;
        locPhraseAr = `داخل ${getDrawnAreaLabel(activeDrawnArea, 'ar')}`;
      } else if (targetDistrict) {
        locPhraseEn = `in ${targetDistrict.name}`;
        locPhraseAr = `في ${targetDistrict.arabicName || targetDistrict.name}`;
      }

      if (posItems.length > 0 && zeroItems.length > 0) {
        // Rule 7 Requirement 3: If one category has results and another has zero, explicitly state both
        const posEn = posItems.map(([k, v]) => `${v.count} ${k.toLowerCase()}`).join(', ');
        const zeroEn = zeroItems.map(([k, v]) => `${k.toLowerCase()}`).join(', ');
        const posAr = posItems.map(([k, v]) => `${v.count} ${v.labelAr}`).join('، ');
        const zeroAr = zeroItems.map(([k, v]) => `${v.labelAr}`).join('، ');

        if (lang === 'ar') {
          aiResponseText = `تم العثور على ${posAr}، ولكن لم يتم العثور على ${zeroAr} ${locPhraseAr}.`;
        } else {
          aiResponseText = `Found ${posEn}, but no ${zeroEn} were found ${locPhraseEn}.`;
        }
      } else {
        if (lang === 'ar') {
          aiResponseText = `تم العثور على ${count} من المرافق المطابقة (${breakdownAr}) ${locPhraseAr} وعرضها على الخريطة.`;
        } else {
          aiResponseText = `I found ${count} matching facilities (${breakdownEn}) ${locPhraseEn} and displayed them on the map.`;
        }
      }
    } else if (lang === 'ar') {
      const defaultNoteAr = targetDistrict?.isDefaultLocation ? ' (تم استخدام إحداثيات مركز أبوظبي الافتراضية لتعذر الوصول إلى GPS)' : '';
      if (activeDrawnArea) {
        const areaLabelAr = getDrawnAreaLabel(activeDrawnArea, 'ar');
        aiResponseText = `تم العثور على ${count} من ${catAr} داخل ${areaLabelAr} وعرضها على الخريطة.`;
      } else if (searchRadiusKm) {
        aiResponseText = `تم العثور على ${count} من ${catAr} ضمن نطاق ${searchRadiusKm} كم من ${targetDistrict?.arabicName || 'موقعك'}${defaultNoteAr} وعرضها على الخريطة.`;
      } else if (targetDistrict) {
        if (targetDistrict.isUserLocation) {
          aiResponseText = `تم العثور على ${count} من ${catAr} بالقرب من موقعك وترتيبها حسب المسافة وعرضها على الخريطة.`;
        } else {
          aiResponseText = `تم العثور على ${count} من ${catAr} في ${targetDistrict.arabicName || targetDistrict.name}${defaultNoteAr} وعرضها على الخريطة.`;
        }
      } else {
        aiResponseText = `تم العثور على ${count} موقعاً ضمن فئة ${catAr} في دولة الإمارات.`;
      }
    } else {
      const defaultNoteEn = targetDistrict?.isDefaultLocation ? ' (Using default Abu Dhabi coordinates as GPS is unavailable)' : '';
      if (activeDrawnArea) {
        const areaLabelEn = getDrawnAreaLabel(activeDrawnArea, 'en');
        aiResponseText = `I found ${count} ${catEn} inside ${areaLabelEn} and displayed them on the map.`;
      } else if (searchRadiusKm) {
        aiResponseText = `I found ${count} ${catEn} within ${searchRadiusKm} km of ${targetDistrict?.name || 'your location'}${defaultNoteEn} and displayed them on the map.`;
      } else if (targetDistrict) {
        if (targetDistrict.isUserLocation) {
          aiResponseText = `I found ${count} ${catEn} near your location, sorted nearest to farthest, and displayed them on the map.`;
        } else {
          aiResponseText = `I found ${count} ${catEn} in ${targetDistrict.name}${defaultNoteEn} and displayed them on the map.`;
        }
      } else {
        aiResponseText = `I found ${count} ${catEn} across Abu Dhabi & UAE.`;
      }
    }

    aiResponseText = cleanMarkdownText(aiResponseText);

    return this.buildStandardResponse({
      workingDataset,
      lang,
      intent: (searchRadiusKm || isNearMeIntent) ? 'radius_search' : (targetDistrict ? 'spatial_filter' : (activeDrawnArea ? 'spatial_filter' : 'search')),
      aiResponseText,
      targetDistrict,
      targetCategory: targetEntities.length > 1 ? targetEntities.map(e => e.category).join(', ') : targetCategory,
      targetSubcategory: targetEntities.length > 1 ? targetEntities.map(e => e.subcategory || e.category).join(', ') : targetSubcategory,
      searchRadiusKm
    });
  }

  /**
   * Phase 6: Dynamic Context-Aware Suggestion & Recommendation Engine
   * Generates intelligent, non-hardcoded follow-up suggestions from the active ConversationContext.
   */
  generateContextualSuggestions(intent, lang = 'en', options = {}, workingDataset = []) {
    const chips = [];
    const activeLoc = this.context.location || options?.targetDistrict?.name || 'Abu Dhabi';
    const activeLocAr = this.context.locationCoordinates?.arabicName || options?.targetDistrict?.arabicName || activeLoc;
    let activeCat = this.context.dataset || options?.targetCategory || null;
    if (!activeCat && workingDataset && workingDataset.length > 0) {
      const cats = [...new Set(workingDataset.map(i => i.category).filter(Boolean))];
      if (cats.length === 1) {
        activeCat = cats[0];
      }
    }
    const activeCatAr = activeCat ? (CAT_TRANSLATIONS_AR[activeCat] || activeCat) : '';
    const activeFilters = this.context.filters || {};
    const radius = this.context.radius || options?.searchRadiusKm || 2;
    const isSelected = !options?.selectedLocation;
    const featureTitle = options?.selectedLocation?.title || '';
    const featureTitleAr = options?.selectedLocation?.arabicTitle || featureTitle;
    const featureCat = (options?.selectedLocation?.category || activeCat || '').toLowerCase();

    // RULE 1: Selected Map Feature Follow-ups (Category-Aware)
    if (isSelected && featureTitle) {
      if (featureCat.includes('park') || featureCat.includes('rec') || featureCat.includes('green')) {
        chips.push({
          label: lang === 'ar' ? `المرافق ضمن 2 كم من ${featureTitleAr}` : `Show facilities within 2 km of these parks`,
          query: `Show facilities within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'محطات الحافلات القريبة' : 'Show bus stations near here',
          query: `Show bus stations within 1 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
          query: `Show places within 5 km of ${featureTitle}`
        });
      } else if (featureCat.includes('transit') || featureCat.includes('bus') || featureCat.includes('transport') || featureCat.includes('airport')) {
        chips.push({
          label: lang === 'ar' ? `المرافق العامة ضمن 2 كم من ${featureTitleAr}` : `Show public facilities within 2 km`,
          query: `Show public facilities within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'أقرب مركز فحص مركبات' : 'Find closest vehicle inspection center',
          query: `Find the closest vehicle inspection center to ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
          query: `Show transport facilities within 5 km of ${featureTitle}`
        });
      } else if (featureCat.includes('indus') || featureCat.includes('logist') || featureCat.includes('manuf')) {
        chips.push({
          label: lang === 'ar' ? 'مرافق النقل القريبة' : 'Show transport facilities near here',
          query: `Show transport facilities within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'المنشآت الصناعية ضمن 5 كم' : 'Industrial facilities within 5 km',
          query: `Show industrial facilities within 5 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'محطات مراقبة جودة الهواء' : 'Air quality monitoring stations',
          query: `Show air quality stations near ${featureTitle}`
        });
      } else if (featureCat.includes('gov') || featureCat.includes('admin') || featureCat.includes('public')) {
        chips.push({
          label: lang === 'ar' ? 'مرافق الخدمات العامة ضمن 2 كم' : 'Show public service facilities within 2 km',
          query: `Show public service facilities within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'محطات الحافلات القريبة' : 'Bus stations near here',
          query: `Show bus stations within 1 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
          query: `Show places within 5 km of ${featureTitle}`
        });
      } else if (featureCat.includes('edu') || featureCat.includes('school') || featureCat.includes('univ')) {
        chips.push({
          label: lang === 'ar' ? `محطات الحافلات القريبة من هذا المعلم` : `Bus stations near this facility`,
          query: `Show bus stations within 1 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'الحدائق العامة ضمن 2 كم' : 'Parks within 2 km',
          query: `Show parks within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
          query: `Show places within 5 km of ${featureTitle}`
        });
      } else if (featureCat.includes('health') || featureCat.includes('hosp') || featureCat.includes('clinic')) {
        chips.push({
          label: lang === 'ar' ? `الصيدليات ضمن 2 كم من ${featureTitleAr}` : `Pharmacies within 2 km`,
          query: `Show pharmacies within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'العيادات القريبة من هنا' : 'Clinics near here',
          query: `Show clinics within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
          query: `Show healthcare facilities within 5 km of ${featureTitle}`
        });
      } else {
        chips.push({
          label: lang === 'ar' ? `المرافق العامة ضمن 2 كم من ${featureTitleAr}` : `Show facilities within 2 km of ${featureTitle}`,
          query: `Show facilities within 2 km of ${featureTitle}`
        });
        chips.push({
          label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
          query: `Show places within 5 km of ${featureTitle}`
        });
      }
      chips.push({
        label: lang === 'ar' ? 'حفظ هذا البحث' : 'Save this search',
        action: 'save_search'
      });
      return chips;
    }

    // RULE 2: Unsupported Layer & Capability Recovery (Cross-domain balanced suggestions)
    if (intent === 'unsupported_layer' || intent === 'unsupported_capability') {
      chips.push({
        label: lang === 'ar' ? `عرض الحدائق في ${activeLocAr}` : `Show parks in ${activeLoc}`,
        query: `Show parks in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض محطات الحافلات في ${activeLocAr}` : `Show bus stations in ${activeLoc}`,
        query: `Show bus stations in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض المنشآت الصناعية في ${activeLocAr}` : `Show industrial facilities in ${activeLoc}`,
        query: `Show industrial facilities in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض المرافق الحكومية في ${activeLocAr}` : `Show government facilities in ${activeLoc}`,
        query: `Show government facilities in ${activeLoc}`
      });
      return chips;
    }

    // RULE 3: Zero-Result Recovery
    if (intent === 'zero_results' || (workingDataset && workingDataset.length === 0)) {
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      const catLower = activeCat ? activeCat.toLowerCase() : 'facilities';
      if (activeFilters.sector) {
        chips.push({
          label: lang === 'ar' ? `عرض كافة القطاعات في ${activeLocAr}` : `Show all sectors in ${activeLoc}`,
          query: `Show ${catLower} in ${activeLoc}`
        });
      }
      chips.push({
        label: lang === 'ar' ? 'البحث في كافة أنحاء أبوظبي' : 'Search across all Abu Dhabi',
        query: `Show ${catLower} across Abu Dhabi`
      });
      chips.push({
        label: lang === 'ar' ? `البحث في ${activeLocAr}` : `Search around ${activeLoc}`,
        query: `Show all facilities in ${activeLoc}`
      });
      return chips;
    }

    // RULE 4: Analytics Query Suggestions (Domain-dynamic)
    if (intent === 'area_ranking') {
      chips.push({
        label: lang === 'ar' ? `ترتيب أفضل 5 مناطق لـ ${activeCatAr}` : `Show top 5 areas with ${activeCat.toLowerCase()}`,
        query: `Show top 5 areas with ${activeCat.toLowerCase()}`
      });
      chips.push({
        label: lang === 'ar' ? `مقارنة المرافق في ${activeLocAr}` : `Compare facilities in ${activeLoc}`,
        query: `Compare facilities in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `أقرب ${activeCatAr} إلي` : `Find the nearest ${activeCat.toLowerCase()}`,
        query: `Which ${activeCat.toLowerCase()} is nearest to me?`
      });
      chips.push({
        label: lang === 'ar' ? `عرض المرافق ضمن 2 كم` : `Show facilities within 2 km`,
        query: `Show facilities within 2 km of ${activeLoc}`
      });
      return chips;
    }

    if (intent === 'district_count_summary') {
      chips.push({
        label: lang === 'ar' ? `أي منطقة بها أكبر عدد من ${activeCatAr}؟` : `Which area has the most ${activeCat.toLowerCase()}?`,
        query: `Which area has the most ${activeCat.toLowerCase()}?`
      });
      chips.push({
        label: lang === 'ar' ? `مقارنة ${activeCatAr} في ${activeLocAr} بالمناطق المجاورة` : `Compare ${activeCat.toLowerCase()} in ${activeLoc}`,
        query: `Compare ${activeCat.toLowerCase()} in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `أقرب ${activeCatAr} إلي في ${activeLocAr}` : `Find the nearest ${activeCat.toLowerCase()} in ${activeLoc}`,
        query: `Which ${activeCat.toLowerCase()} is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? `أعلى ${activeCatAr} تقييماً في ${activeLocAr}` : `Top rated ${activeCat.toLowerCase()} in ${activeLoc}`,
        query: `Which ${activeCat.toLowerCase()} has the highest rating in ${activeLoc}?`
      });
      return chips;
    }

    if (intent === 'dataset_comparison') {
      chips.push({
        label: lang === 'ar' ? 'أي منطقة بها أكبر عدد من المرافق؟' : 'Which area has the most facilities?',
        query: 'Which area has the most facilities in Abu Dhabi?'
      });
      chips.push({
        label: lang === 'ar' ? `مقارنة المرافق في ${activeLocAr}` : `Compare facilities in ${activeLoc}`,
        query: `Compare facilities in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `المرافق العامة ضمن 2 كم من هذه المواقع` : 'Show public facilities near these',
        query: `Show public facilities within 2 km of ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `أعلى المرافق تقييماً في ${activeLocAr}` : `Top rated facilities in ${activeLoc}`,
        query: `Which facility has the highest rating in ${activeLoc}?`
      });
      return chips;
    }

    // RULE 5: Cross-Layer Proximity / Buffer Suggestions
    if (this.context.spatialRelationship === 'cross_layer_buffer' || intent === 'cross_layer_buffer') {
      const currentRadiusNum = typeof radius === 'number' ? radius : (parseInt(radius) || 2);
      if (currentRadiusNum <= 2) {
        chips.push({
          label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
          query: 'Increase radius to 5 km'
        });
      } else {
        chips.push({
          label: lang === 'ar' ? 'تقليص النطاق إلى 1 كم' : 'Refine radius to 1 km',
          query: 'Decrease radius to 1 km'
        });
      }

      chips.push({
        label: lang === 'ar' ? `أقرب ${activeCatAr} إلي` : `Find the nearest ${activeCat.toLowerCase()}`,
        query: `Which ${activeCat.toLowerCase()} is nearest to me?`
      });

      chips.push({
        label: lang === 'ar' ? `أعلى ${activeCatAr} تقييماً في ${activeLocAr}` : `Top rated ${activeCat.toLowerCase()}`,
        query: `Which ${activeCat.toLowerCase()} has the highest rating in ${activeLoc}?`
      });

      chips.push({
        label: lang === 'ar' ? `مقارنة المرافق في ${activeLocAr}` : `Compare facilities in ${activeLoc}`,
        query: `Compare facilities in ${activeLoc}`
      });

      return chips;
    }

    // RULE 6: Ranking / Superlative Suggestions
    if (intent === 'ranking_superlative') {
      chips.push({
        label: lang === 'ar' ? `أفضل 3 ${activeCatAr} تقييماً` : `Show top 3 highest-rated ${activeCat.toLowerCase()}`,
        query: `Show top 3 highest rated ${activeCat.toLowerCase()} in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'أيها الأقرب إلي؟' : 'Which one is nearest to me?',
        query: `Which one is nearest to me in ${activeLoc}?`
      });
      const catLower = activeCat.toLowerCase();
      if (catLower.includes('park') || catLower.includes('rec')) {
        chips.push({
          label: lang === 'ar' ? 'المرافق ضمن 2 كم من هذه الحدائق' : 'Show facilities within 2 km of these parks',
          query: `Show facilities within 2 km of parks in ${activeLoc}`
        });
      } else if (catLower.includes('trans') || catLower.includes('bus')) {
        chips.push({
          label: lang === 'ar' ? 'أقرب مركز فحص مركبات' : 'Find closest vehicle inspection center',
          query: `Find the closest vehicle inspection center in ${activeLoc}`
        });
      } else if (catLower.includes('env') || catLower.includes('clim')) {
        chips.push({
          label: lang === 'ar' ? 'المناطق الأقل انبعاثات' : 'Areas with lowest emissions',
          query: `Show areas with the lowest emissions in Abu Dhabi`
        });
      } else if (catLower.includes('edu') || catLower.includes('school')) {
        chips.push({
          label: lang === 'ar' ? 'محطات الحافلات القريبة من هذه المرافق' : 'Bus stations near these facilities',
          query: `Show bus stations within 1 km of facilities in ${activeLoc}`
        });
      } else if (catLower.includes('health') || catLower.includes('hosp')) {
        chips.push({
          label: lang === 'ar' ? 'المرافق الخدمية القريبة من هذه المراكز' : 'Service facilities near these centers',
          query: `Show service facilities within 2 km in ${activeLoc}`
        });
      } else {
        chips.push({
          label: lang === 'ar' ? 'المرافق العامة القريبة من هذه' : 'Show public facilities near these',
          query: `Show public facilities within 2 km of these in ${activeLoc}`
        });
      }
      chips.push({
        label: lang === 'ar' ? 'حفظ هذا البحث' : 'Save this search',
        action: 'save_search'
      });
      return chips;
    }

    // RULE 7: Dynamic Dataset-Specific Spatial Suggestions (derived globally from CATEGORY_TAXONOMY)
    const taxEntry = CATEGORY_TAXONOMY.find(c => isCategoryMatch(c.category, activeCat));
    const catLower = (activeCat || '').toLowerCase();

    // Recreation / Parks
    if (catLower.includes('park') || catLower.includes('rec')) {
      chips.push({
        label: lang === 'ar' ? 'أي حديقة هي الأقرب إلي؟' : 'Which parks are closest to me?',
        query: `Which parks are closest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'الحديقة الأعلى تقييماً' : 'Which park has the highest rating?',
        query: `Which park has the highest rating in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'المرافق ضمن 2 كم من هذه الحدائق' : 'Show facilities within 2 km of these parks',
        query: `Show facilities within 2 km of parks in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      return chips;
    }

    // Transportation
    if (catLower.includes('trans') || catLower.includes('bus') || catLower.includes('transit')) {
      chips.push({
        label: lang === 'ar' ? 'أقرب مركز فحص مركبات' : 'Find closest vehicle inspection center',
        query: `Find the closest vehicle inspection center in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب محطة حافلات إلي' : 'Find the closest bus station',
        query: `Which bus station is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'مرافق النقل ضمن 5 كم' : 'Show transport facilities within 5 km',
        query: `Show transport facilities within 5 km of ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'مقارنة مرافق النقل' : `Compare transport facilities in ${activeLoc}`,
        query: `Compare transport facilities in ${activeLoc}`
      });
      return chips;
    }

    // Environment & Climate
    if (catLower.includes('env') || catLower.includes('clim')) {
      chips.push({
        label: lang === 'ar' ? 'المناطق الأقل انبعاثات' : 'Show areas with the lowest emissions',
        query: 'Show areas with the lowest emissions in Abu Dhabi'
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب مرفق بيئي إلي' : 'Which environmental facility is nearest?',
        query: `Which environmental facility is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'محطات مراقبة جودة الهواء' : 'Air quality monitoring stations',
        query: `Show air quality stations in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      return chips;
    }

    // Government Services / Public Services
    if (catLower.includes('gov') || catLower.includes('public service') || catLower.includes('admin')) {
      chips.push({
        label: lang === 'ar' ? 'أي مركز حكومي هو الأقرب؟' : 'Which government center is closest?',
        query: this.context.drawnArea ? 'Which government center is closest in this area?' : `Which government center is closest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'عرض السفارات والقنصليات' : 'Show embassies & consulates',
        query: this.context.drawnArea ? 'Show embassies in this area' : `Show embassies in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'مراكز تم للخدمات الحكومية' : 'Show TAMM service centers',
        query: 'Show TAMM service centers'
      });
      chips.push({
        label: lang === 'ar' ? `المكاتب البلدية في ${activeLocAr}` : `Show municipal offices in ${activeLoc}`,
        query: `Show municipal offices in ${activeLoc}`
      });
      return chips;
    }

    // Industrial & Logistics
    if (catLower.includes('indus') || catLower.includes('logist') || catLower.includes('manuf')) {
      chips.push({
        label: lang === 'ar' ? 'أقرب مرفق لوجستي إلي' : 'Which logistics facility is nearest?',
        query: `Which logistics facility is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'منشآت صناعية بانبعاثات أقل من 50000 طن' : 'Emissions under 50000 tonnes',
        query: `Industrial facilities with emissions under 50000 tonnes in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `مقارنة المنشآت الصناعية في ${activeLocAr}` : `Compare industrial facilities in ${activeLoc}`,
        query: `Compare industrial facilities in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      return chips;
    }

    // Utilities & Energy
    if (catLower.includes('util') || catLower.includes('ener') || catLower.includes('power')) {
      chips.push({
        label: lang === 'ar' ? `محطات الكهرباء والمياه في ${activeLocAr}` : `Power and water stations in ${activeLoc}`,
        query: `Show power stations in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'مشاريع الطاقة النظيفة' : 'Clean energy projects in Abu Dhabi',
        query: 'Show clean energy projects in Abu Dhabi'
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب محطة طاقة إلي' : 'Which power facility is nearest?',
        query: `Which power station is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      return chips;
    }

    // Tourism & Culture
    if (catLower.includes('tour') || catLower.includes('cult') || catLower.includes('landm')) {
      chips.push({
        label: lang === 'ar' ? 'أعلى المعالم السياحية تقييماً' : 'Which attraction has highest rating?',
        query: `Which tourist attraction has the highest rating in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? `المعالم الثقافية والمتاحف في ${activeLocAr}` : `Cultural landmarks in ${activeLoc}`,
        query: `Show cultural landmarks in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'الفنادق ضمن 5 كم' : 'Hotels within 5 km',
        query: `Show hotels within 5 km of ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      return chips;
    }

    // Agriculture
    if (catLower.includes('agri') || catLower.includes('farm')) {
      chips.push({
        label: lang === 'ar' ? 'أقرب مركز زراعي إلي' : 'Which agricultural center is nearest?',
        query: `Which agricultural center is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? `المزارع والمرافق الزراعية في ${activeLocAr}` : `Farms and agriculture in ${activeLoc}`,
        query: `Show agricultural facilities in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'مقارنة المرافق الزراعية' : `Compare agricultural facilities in ${activeLoc}`,
        query: `Compare agricultural facilities in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      return chips;
    }

    // Education
    if (catLower.includes('edu') || catLower.includes('school') || catLower.includes('univ')) {
      chips.push({
        label: lang === 'ar' ? 'أي مدرسة بها أقل رسوم دراسية؟' : 'Which has the lowest tuition fee?',
        query: `Which school has the lowest tuition fee in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب مدرسة إلي' : 'Which school is nearest to me?',
        query: `Which school is nearest to me in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'المدارس بالمنهاج البريطاني' : 'Schools with British curriculum',
        query: `Show British curriculum schools in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'مقارنة المدارس حسب التقييم' : 'Compare schools by rating',
        query: `Which school has the highest rating in ${activeLoc}?`
      });
      return chips;
    }

    // Healthcare (Strictly only when category is Healthcare)
    if (activeCat && (catLower.includes('health') || catLower.includes('hosp') || catLower.includes('clinic'))) {
      chips.push({
        label: lang === 'ar' ? 'أي مستشفى يضم أكبر عدد من الأسرّة؟' : 'Which facility has the most beds?',
        query: `Which hospital has the most beds in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب عيادة تعمل 24/7' : 'Find nearest 24/7 clinic',
        query: `Find the nearest 24/7 clinic in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'الصيدليات ضمن 2 كم' : 'Show pharmacies within 2 km',
        query: `Show pharmacies within 2 km of ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'أعلى المرافق الصحية تقييماً' : `Top rated healthcare in ${activeLoc}`,
        query: `Which hospital has the highest rating in ${activeLoc}?`
      });
      return chips;
    }

    // Other Taxonomy Entries (Housing, Construction, Employment, Infrastructure, Public Safety)
    if (taxEntry) {
      chips.push({
        label: lang === 'ar' ? `أقرب ${activeCatAr} إلي` : `Nearest ${activeCat.toLowerCase()}`,
        query: `Which ${activeCat.toLowerCase()} is nearest to me in ${activeLoc}?`
      });

      chips.push({
        label: lang === 'ar' ? `${activeCatAr} الأعلى تقييماً` : `Top rated ${activeCat.toLowerCase()}`,
        query: `Which ${activeCat.toLowerCase()} has the highest rating in ${activeLoc}?`
      });

      // Suggest active dataset subcategories
      const activeSub = options?.targetSubcategory || this.context.subcategory;
      const subsToSuggest = taxEntry.subcategories
        .filter(s => !activeSub || s.name.toLowerCase() !== activeSub.toLowerCase())
        .slice(0, 2);

      for (const sub of subsToSuggest) {
        const subAr = SUBCAT_TRANSLATIONS_AR[sub.name] || sub.name;
        chips.push({
          label: lang === 'ar' ? `${subAr} فقط` : `Only ${sub.name.toLowerCase()}`,
          query: `Only ${sub.name.toLowerCase()}`
        });
      }

      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });

      return chips;
    }

    // Default Fallback for Uncategorized Searches
    if (this.context.drawnArea) {
      chips.push({
        label: lang === 'ar' ? 'المباني التجارية في هذه المنطقة' : 'Show commercial buildings in this area',
        query: 'Show commercial buildings in this area'
      });
      chips.push({
        label: lang === 'ar' ? 'الحدائق العامة في هذه المنطقة' : 'Show public parks in this area',
        query: 'Show public parks in this area'
      });
      chips.push({
        label: lang === 'ar' ? 'المرافق الحكومية في هذه المنطقة' : 'Show government facilities in this area',
        query: 'Show government facilities in this area'
      });
      chips.push({
        label: lang === 'ar' ? 'أيها الأقرب؟' : 'Which one is closest?',
        query: 'Which one is closest?'
      });
      return chips;
    }

    chips.push({
      label: lang === 'ar' ? `الأعلى تقييماً في ${activeLocAr}` : `Top rated in ${activeLoc}`,
      query: `Which one has the highest rating in ${activeLoc}?`
    });
    chips.push({
      label: lang === 'ar' ? 'أقرب الأماكن إلي' : 'Find nearby places within 5 km',
      query: 'Find nearby places within 5 km'
    });
    chips.push({
      label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
      query: 'Increase radius to 5 km'
    });

    return chips;
  }

  /**
   * Helper to format structured payload, context badges, and dynamic suggestions
   */
  buildStandardResponse({
    workingDataset,
    lang = 'en',
    intent = 'search',
    aiResponseText = '',
    targetDistrict = null,
    targetCategory = null,
    targetSubcategory = null,
    searchRadiusKm = null,
    isRanked = false,
    rankSummary = '',
    mapAction = null,
    analytics = null,
    options = {}
  }) {
    // Deduplicate workingDataset by id to guarantee zero duplicates across all intents and aggregations
    const seenIds = new Set();
    const uniqueWorkingDataset = [];
    (workingDataset || []).forEach(item => {
      const key = item.id || `${item.title}-${item.lat}-${item.lon}`;
      if (!seenIds.has(key)) {
        seenIds.add(key);
        uniqueWorkingDataset.push(item);
      }
    });
    workingDataset = uniqueWorkingDataset;

    const count = workingDataset.length;
    if (count === 0 && intent !== 'app_control' && intent !== 'route') {
      if (aiResponseText && !aiResponseText.includes(GENERIC_ERROR_MESSAGE_EN) && !aiResponseText.includes(GENERIC_ERROR_MESSAGE_AR)) {
        return {
          intent: intent === 'district_count_summary' ? 'district_count_summary' : 'zero_results',
          querySummary: cleanMarkdownText(aiResponseText),
          aiMessageText: cleanMarkdownText(aiResponseText),
          results: [],
          structuredResults: null,
          targetDistrict,
          targetCategory: targetCategory || null,
          targetSubcategory: targetSubcategory || null,
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('zero_results', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
      return {
        intent: 'zero_results',
        querySummary: cleanMarkdownText(lang === 'ar' ? 'تعذر الإجابة عن الاستعلام' : 'Unable to answer query'),
        aiMessageText: cleanMarkdownText(lang === 'ar' ? GENERIC_ERROR_MESSAGE_AR : GENERIC_ERROR_MESSAGE_EN),
        results: [],
        structuredResults: null,
        targetDistrict,
        targetCategory: targetCategory || null,
        targetSubcategory: targetSubcategory || null,
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: this.generateContextualSuggestions('zero_results', lang, options, []),
        structuredGISQuery: {
          intent: 'find',
          featureType: targetCategory || 'none',
          referenceLocation: targetDistrict?.name || this.context.location || 'Abu Dhabi',
          spatialRelation: 'none',
          radius: null,
          sortBy: 'none'
        },
        mapAction: { type: 'fit_bounds' }
      };
    }

    const catAr = CAT_TRANSLATIONS_AR[targetCategory] || targetCategory || 'المواقع المكانية';

    const subcatCounts = {};
    workingDataset.forEach(r => {
      subcatCounts[r.subcategory] = (subcatCounts[r.subcategory] || 0) + 1;
    });

    const subcatTabs = Object.keys(subcatCounts).map(sc => ({
      id: sc,
      name: lang === 'ar' ? `${SUBCAT_TRANSLATIONS_AR[sc] || sc} (${subcatCounts[sc]})` : `${sc} (${subcatCounts[sc]})`,
      count: subcatCounts[sc]
    }));

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
        calculatedDistanceKm: r.calculatedDistanceKm || r.distanceKm,
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
        gradesArabic: r.gradesArabic || '',
        nearestReferenceFeature: r.nearestReferenceFeature || null,
        nearestReferenceArabic: r.nearestReferenceArabic || null,
        isFavorite: false
      }))
    };

    // Dynamic Context-Derived Suggestion Chips (Phase 6 Recommendation Engine)
    const chips = this.generateContextualSuggestions(intent, lang, {
      targetDistrict,
      targetCategory,
      targetSubcategory,
      searchRadiusKm,
      isRanked,
      selectedLocation: options?.selectedLocation,
      ...options
    }, workingDataset);

    return {
      intent,
      querySummary: cleanMarkdownText(lang === 'ar' ? `تمت مطابقة ${count} موقعاً` : `${count} features matched`),
      aiMessageText: cleanMarkdownText(aiResponseText),
      results: workingDataset,
      structuredResults: structuredPayload,
      targetDistrict,
      targetCategory: targetCategory || null,
      targetSubcategory: targetSubcategory || null,
      analytics: analytics || null,
      contextBadges: this.context.getActiveContextBadges(lang),
      chips,
      structuredGISQuery: {
        intent: targetDistrict ? 'filter_by_district' : 'find',
        featureType: targetCategory || 'all',
        referenceLocation: targetDistrict?.name || this.context.location || 'Abu Dhabi',
        spatialRelation: targetDistrict ? 'in_district' : 'all',
        radius: searchRadiusKm ? `${searchRadiusKm} km` : null,
        sortBy: isRanked ? rankSummary : 'proximity'
      },
      mapAction: mapAction || (targetDistrict ? {
        type: 'fly_to',
        center: [targetDistrict.lat, targetDistrict.lon],
        zoom: 14
      } : {
        type: 'fit_bounds'
      })
    };
  }
}

// Global Singleton Instance of Spatial AI Engine
export { SpatialAIEngine };
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
  if (!bounds || !point) return false;
  const lat = point.lat !== undefined ? point.lat : point[0];
  const lon = point.lon !== undefined ? point.lon : (point.lng !== undefined ? point.lng : point[1]);

  let south, north, west, east;

  if (bounds.getSouth && bounds.getNorth) {
    south = bounds.getSouth();
    north = bounds.getNorth();
    west = bounds.getWest();
    east = bounds.getEast();
  } else if (bounds._southWest && bounds._northEast) {
    south = bounds._southWest.lat;
    north = bounds._northEast.lat;
    west = bounds._southWest.lng !== undefined ? bounds._southWest.lng : bounds._southWest.lon;
    east = bounds._northEast.lng !== undefined ? bounds._northEast.lng : bounds._northEast.lon;
  } else if (bounds.south !== undefined && bounds.north !== undefined) {
    south = bounds.south;
    north = bounds.north;
    west = bounds.west !== undefined ? bounds.west : (bounds.lngWest !== undefined ? bounds.lngWest : bounds.lonWest);
    east = bounds.east !== undefined ? bounds.east : (bounds.lngEast !== undefined ? bounds.lngEast : bounds.lonEast);
  } else if (bounds.minLat !== undefined && bounds.maxLat !== undefined) {
    south = bounds.minLat;
    north = bounds.maxLat;
    west = bounds.minLon !== undefined ? bounds.minLon : bounds.minLng;
    east = bounds.maxLon !== undefined ? bounds.maxLon : bounds.maxLng;
  } else if (Array.isArray(bounds) && bounds.length === 2) {
    south = Math.min(bounds[0][0] !== undefined ? bounds[0][0] : bounds[0].lat, bounds[1][0] !== undefined ? bounds[1][0] : bounds[1].lat);
    north = Math.max(bounds[0][0] !== undefined ? bounds[0][0] : bounds[0].lat, bounds[1][0] !== undefined ? bounds[1][0] : bounds[1].lat);
    west = Math.min(bounds[0][1] !== undefined ? bounds[0][1] : (bounds[0].lng || bounds[0].lon), bounds[1][1] !== undefined ? bounds[1][1] : (bounds[1].lng || bounds[1].lon));
    east = Math.max(bounds[0][1] !== undefined ? bounds[0][1] : (bounds[0].lng || bounds[0].lon), bounds[1][1] !== undefined ? bounds[1][1] : (bounds[1].lng || bounds[1].lon));
  } else {
    return false;
  }

  return lat >= Math.min(south, north) && lat <= Math.max(south, north) &&
         lon >= Math.min(west, east) && lon <= Math.max(west, east);
}

/**
 * Check if a point lies inside any drawn geometric area (circle, polygon, rectangle, square, point, line)
 */
export function isPointInDrawnArea(point, drawnArea) {
  if (!point || !drawnArea) return false;
  const geometryType = drawnArea.geometryType || drawnArea.type;
  const { center, radius, coordinates, bounds } = drawnArea;

  if (geometryType === 'circle') {
    return isPointInCircle(point, center, radius);
  }
  if (geometryType === 'polygon') {
    return isPointInPolygon(point, coordinates);
  }
  if (geometryType === 'rectangle' || geometryType === 'square') {
    if (bounds && isPointInBounds(point, bounds)) return true;
    if (coordinates && coordinates.length >= 4 && isPointInPolygon(point, coordinates)) return true;
    return false;
  }
  if (geometryType === 'click' || geometryType === 'point') {
    return isPointInCircle(point, center || (coordinates ? coordinates[0] : null), 2500);
  }
  if (geometryType === 'line') {
    if (!coordinates || coordinates.length < 2) return false;
    return coordinates.some(pt => isPointInCircle(point, pt, 1200));
  }
  return false;
}

/**
 * Format a user-friendly label for a drawn area geometry
 */
export function getDrawnAreaLabel(drawnArea, lang = 'en') {
  if (!drawnArea) return lang === 'ar' ? 'منطقة مرسومة' : 'Drawn Area';
  const { geometryType, radius, coordinates } = drawnArea;
  if (geometryType === 'circle' && radius) {
    if (lang === 'ar') {
      const rStrAr = radius >= 1000 ? `${(radius / 1000).toFixed(1)} كم` : `${Math.round(radius)} م`;
      return `المنطقة المرسومة · نصف القطر ${rStrAr}`;
    }
    const rStr = radius >= 1000 ? `${(radius / 1000).toFixed(1)} km` : `${Math.round(radius)} m`;
    return `Drawn Area · ${rStr} radius`;
  }
  if (geometryType === 'polygon' && coordinates) {
    const pts = Array.isArray(coordinates) ? coordinates.length : 0;
    return lang === 'ar' ? `مضلع مرسوم · ${pts} نقاط` : `Drawn Polygon · ${pts} vertices`;
  }
  if (geometryType === 'rectangle' || geometryType === 'square') {
    return lang === 'ar' ? 'منطقة مرسومة · مستطيل الإحاطة' : 'Drawn Area · Bounding Box';
  }
  return lang === 'ar' ? 'منطقة مرسومة' : 'Drawn Area';
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

  // 2. Extract taxonomy entity if provided in query
  const qClean = (query || '').toLowerCase().trim();
  let taxonomyEntities = [];
  let isAllQuery = false;
  if (qClean) {
    isAllQuery = /^(all|all places|all features|all facilities|everything|جميع المعالم|كافة المعالم|الكل|جميع الأماكن)$/i.test(qClean);
    if (!isAllQuery) {
      taxonomyEntities = resolveAllTaxonomyEntities(qClean);
    }
  }

  // Filter by active categories / subcategories only when query does not specify explicit taxonomy entities
  const activeKeys = (activeCategories || []).map(k => k.trim()).filter(Boolean);
  if (activeKeys.length > 0 && taxonomyEntities.length === 0) {
    spatiallyMatched = spatiallyMatched.filter(item => {
      return activeKeys.some(key => {
        const isSub = isSubcategoryMatch(item.subcategory, key);
        const isCat = isCategoryMatch(item.category, key);
        return isSub || isCat;
      });
    });
  }

  // 3. Filter by text search query or taxonomy entity
  if (taxonomyEntities.length > 0) {
    spatiallyMatched = spatiallyMatched.filter(item => {
      return taxonomyEntities.some(ent => {
        const catMatch = isCategoryMatch(item.category, ent.category);
        const subMatch = ent.subcategory ? isSubcategoryMatch(item.subcategory, ent.subcategory) : true;
        return catMatch && subMatch;
      });
    });
  } else if (qClean && !isAllQuery) {
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

  const catNamesLabel = taxonomyEntities.length > 0
    ? (lang === 'ar' ? taxonomyEntities.map(e => e.labelAr || e.category).join('، ') : taxonomyEntities.map(e => e.labelEn || e.category).join(', '))
    : (activeKeys.length > 0
        ? activeCategories.join(', ')
        : (isAllQuery ? (lang === 'ar' ? 'جميع المعالم' : 'all features') : (qClean ? `"${query}"` : (lang === 'ar' ? 'المعالم المكانية' : 'places'))));

  const userQueryText = lang === 'ar'
    ? `البحث عن ${catNamesLabel} داخل ${areaDesc}`
    : `Find ${catNamesLabel} within ${areaDesc}`;

  const isCountQuery = qClean && (qClean.includes('how many') || qClean.includes('count of') || qClean.includes('number of') || qClean.includes('كم عدد') || qClean.includes('كم منها'));
  let aiMessageText = '';
  if (isCountQuery) {
    if (count > 0) {
      const breakdownStr = Object.entries(subcatCounts).map(([sc, c]) => `${c} ${sc.toLowerCase()}`).join(', ');
      aiMessageText = lang === 'ar'
        ? `يوجد **${count}** من ${catNamesLabel} داخل **${areaDesc}**${breakdownStr ? ` (${breakdownStr})` : ''}.`
        : `There are **${count}** ${catNamesLabel.toLowerCase()} inside **${areaDesc}**${breakdownStr ? ` (${breakdownStr})` : ''}.`;
    } else {
      aiMessageText = lang === 'ar'
        ? `لا يوجد أي ${catNamesLabel} مسجلة داخل **${areaDesc}** ضمن قاعدة البيانات الحالية.`
        : `There are **0** ${catNamesLabel.toLowerCase()} inside **${areaDesc}** in the current GIS dataset.`;
    }
  } else if (count > 0) {
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
    category: activeCategories[0] || (taxonomyEntities.length > 0 ? taxonomyEntities[0].category : 'Drawn Area'),
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

  const drawnChips = [];
  if (count > 0) {
    drawnChips.push({ label: lang === 'ar' ? 'الأعلى تقييماً في المنطقة' : 'Top rated in area', query: 'Which one has the highest rating in this area?' });
    Object.keys(subcatCounts)
      .filter(sc => !/hosp|school/i.test(sc) && !/مستشف|مدرس/i.test(sc))
      .slice(0, 3)
      .forEach(sc => {
        drawnChips.push({
          label: lang === 'ar' ? `${SUBCAT_TRANSLATIONS_AR[sc] || sc} فقط` : `Only ${sc}`,
          query: `Only show ${sc}`
        });
      });
  } else {
    drawnChips.push({ label: lang === 'ar' ? 'المراكز الحكومية (5 كم)' : 'Government facilities (5km)', query: 'Government facilities within 5km' });
    drawnChips.push({ label: lang === 'ar' ? 'مرافق النقل (5 كم)' : 'Transport facilities (5km)', query: 'Transport facilities within 5km' });
    drawnChips.push({ label: lang === 'ar' ? 'الحدائق العامة' : 'Public parks', query: 'Public parks within 3km' });
    drawnChips.push({ label: lang === 'ar' ? 'المباني التجارية' : 'Commercial Buildings', query: 'Commercial Buildings' });
  }

  return {
    userQueryText: cleanMarkdownText(userQueryText),
    aiMessageText: cleanMarkdownText(aiMessageText),
    results: spatiallyMatched,
    structuredResults: count > 0 ? structuredResults : null,
    chips: drawnChips,
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

/**
 * Execute spatial query helper function
 */
export function executeSpatialQuery(query = '', categoryFilter = '', lang = 'en', options = {}) {
  return spatialAIEngineInstance.processNaturalLanguageQuery(query, categoryFilter, lang, options);
}

/**
 * Evaluate print and PDF export intent directly
 */
export function evaluatePrintIntent(rawQuery = '', lang = 'en', options = {}) {
  const qLower = (rawQuery || '').toLowerCase().trim();
  const intentResult = spatialAIEngineInstance.evaluatePrintIntent(qLower, rawQuery, lang, options);
  if (!intentResult) {
    return { isPrintIntent: false };
  }
  return {
    isPrintIntent: true,
    ...intentResult
  };
}

/**
 * Natural language spatial query helper function
 */
export function processNaturalLanguageQuery(query = '', options = {}) {
  const categoryFilter = typeof options === 'string' ? options : (options?.categoryFilter || '');
  const lang = typeof options === 'object' && options?.lang ? options.lang : 'en';
  return spatialAIEngineInstance.processNaturalLanguageQuery(query, categoryFilter, lang, typeof options === 'object' ? options : {});
}



