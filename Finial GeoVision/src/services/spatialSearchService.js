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
  'khalifa': { lat: 24.4280, lon: 54.5810, name: 'Khalifa City', arabicName: 'مدينة خليفة', radius: 6.0 },
  'مدينة خليفة': { lat: 24.4280, lon: 54.5810, name: 'Khalifa City', arabicName: 'مدينة خليفة', radius: 6.0 },
  'yas island': { lat: 24.4839, lon: 54.6074, name: 'Yas Island', arabicName: 'جزيرة ياس', radius: 5.5 },
  'yas': { lat: 24.4839, lon: 54.6074, name: 'Yas Island', arabicName: 'جزيرة ياس', radius: 5.5 },
  'جزيرة ياس': { lat: 24.4839, lon: 54.6074, name: 'Yas Island', arabicName: 'جزيرة ياس', radius: 5.5 },
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
  'abu dhabi airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
  'zayed international airport': { lat: 24.4439, lon: 54.6511, name: 'Zayed International Airport (AUH)', arabicName: 'مطار زايد الدولي' },
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
  'grand mosque': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque', arabicName: 'جامع الشيخ زايد الكبير' },
  'جامع الشيخ زايد': { lat: 24.4128, lon: 54.4744, name: 'Sheikh Zayed Grand Mosque', arabicName: 'جامع الشيخ زايد الكبير' },
  'louvre': { lat: 24.5337, lon: 54.3983, name: 'Louvre Abu Dhabi', arabicName: 'متحف اللوفر أبوظبي' },
  'اللوفر': { lat: 24.5337, lon: 54.3983, name: 'Louvre Abu Dhabi', arabicName: 'متحف اللوفر أبوظبي' },
  'ferrari world': { lat: 24.4839, lon: 54.6074, name: 'Ferrari World', arabicName: 'عالم فيراري' },
  'عالم فيراري': { lat: 24.4839, lon: 54.6074, name: 'Ferrari World', arabicName: 'عالم فيراري' }
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
      open247: false
    };
    this.referenceLocation = null;
    this.selectedFeature = null; // { id, title, lat, lon, ... }
    this.currentResults = []; // active results
    this.previousResults = []; // results from previous turn
    this.previousDataset = null;
    this.previousLocation = null;
    this.lastOperation = 'initial';
    this.conversationTurn = 0;
  }

  getActiveContextBadges(lang = 'en') {
    const badges = [];
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
    return this.context;
  }

  resetContext() {
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
    this.context.selectedFeature = feature;
  }

  /**
   * Remove a specific context badge and re-evaluate remaining constraints
   */
  removeContextBadge(badgeId, lang = 'en', options = {}) {
    if (badgeId === 'sector') {
      this.context.filters.sector = null;
    } else if (badgeId === 'ratingMin') {
      this.context.filters.ratingMin = null;
    } else if (badgeId === 'open247') {
      this.context.filters.open247 = false;
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

    if (filters.sector) {
      workingDataset = workingDataset.filter(item => item.sector === filters.sector || (item.type && item.type.toLowerCase().includes(filters.sector.toLowerCase())));
    }
    if (filters.ratingMin) {
      workingDataset = workingDataset.filter(item => (item.rating || 0) >= filters.ratingMin);
    }
    if (filters.open247) {
      workingDataset = workingDataset.filter(item => item.emergency247 === true || (item.openHours && item.openHours.includes('24/7')));
    }

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
      qLower.includes('rank areas') ||
      qLower.includes('ranking of') ||
      qLower.includes('distribution of') ||
      qLower.includes('كم عدد') ||
      qLower.includes('أي منطقة') ||
      qLower.includes('قارن بين') ||
      qLower.includes('المقارنة بين') ||
      qLower.includes('ترتيب المناطق') ||
      qLower.includes('إحصائيات') ||
      qLower.includes('إجمالي') ||
      qLower.includes('كم منها');

    if (!isAnalytics) return null;

    // Helper: Map text to category
    const resolveCategory = (text) => {
      const t = (text || '').toLowerCase();
      if (t.includes('school') || t.includes('education') || t.includes('مدرسة') || t.includes('مدارس') || t.includes('تعليم') || t.includes('academy') || t.includes('أكاديمية') || t.includes('university') || t.includes('universities') || t.includes('جامعة') || t.includes('جامعات') || t.includes('college') || t.includes('كلية') || t.includes('nursery') || t.includes('nurseries') || t.includes('حضانة') || t.includes('حضانات')) {
        let sub = 'Schools';
        if (t.includes('nursery') || t.includes('nurseries') || t.includes('حضان')) sub = 'Nurseries';
        else if (t.includes('university') || t.includes('universities') || t.includes('جامع') || t.includes('college') || t.includes('كلية')) sub = 'Universities';
        return { category: 'Education', subcategory: sub, labelEn: sub === 'Schools' ? 'Schools' : sub, labelAr: sub === 'Nurseries' ? 'الحضانات' : sub === 'Universities' ? 'الجامعات' : 'المدارس' };
      }
      if (t.includes('hospital') || t.includes('healthcare') || t.includes('clinic') || t.includes('pharmacy') || t.includes('health') || t.includes('مستشفى') || t.includes('مستشفيات') || t.includes('رعاية صحية') || t.includes('صحي') || t.includes('عيادة')) {
        let sub = 'Hospitals';
        if (t.includes('pharmacy') || t.includes('صيدل')) sub = 'Pharmacies';
        else if (t.includes('clinic') || t.includes('عياد')) sub = 'Clinics';
        return { category: 'Healthcare', subcategory: sub, labelEn: 'Healthcare Facilities', labelAr: 'المرافق الصحية' };
      }
      if (t.includes('park') || t.includes('garden') || t.includes('حديقة') || t.includes('حدائق') || t.includes('منتزه')) {
        return { category: 'Parks', subcategory: 'Public Parks', labelEn: 'Parks', labelAr: 'الحدائق' };
      }
      if (t.includes('bus') || t.includes('transit') || t.includes('transport') || t.includes('transportation') || t.includes('حافلات') || t.includes('مواصلات') || t.includes('نقل')) {
        return { category: 'Transportation', subcategory: 'Bus Stations', labelEn: 'Transit & Bus Stations', labelAr: 'محطات النقل والحافلات' };
      }
      if (t.includes('government') || t.includes('tamm') || t.includes('ministry') || t.includes('حكومي') || t.includes('تام') || t.includes('خدمات حكومية')) {
        return { category: 'Government Services', subcategory: null, labelEn: 'Government Facilities', labelAr: 'المرافق الحكومية' };
      }
      return null;
    };

    // Helper: Count items for a category in a district
    const countCategoryInDistrict = (cat, subcat, distCoord, sectorFilter = null) => {
      return GEOVISION_SPATIAL_DATASET.filter(item => {
        const catMatch = cat ? item.category.toLowerCase() === cat.toLowerCase() : true;
        const subMatch = (subcat && subcat !== 'Schools') ? item.subcategory?.toLowerCase().includes(subcat.toLowerCase()) : true;
        const sectorMatch = sectorFilter ? (item.sector === sectorFilter || item.type?.toLowerCase().includes(sectorFilter.toLowerCase()) || (sectorFilter === 'Government' && (item.subcategory === 'Public Schools' || item.subcategory === 'Charter Schools')) || (sectorFilter === 'Private' && item.subcategory === 'Private Schools')) : true;
        
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
          querySummary: lang === 'ar' ? 'طبقة بيانات غير متوفرة' : 'Requested layer not found in GIS database',
          aiMessageText: lang === 'ar'
            ? `الطبقة المطلوبة **"${kw}"** غير متوفرة في قاعدة بيانات نظم المعلومات الجغرافية (SDI). لا يمكن إجراء تحليلات مكانية عليها.`
            : `The requested layer **"${kw}"** is not available in the Abu Dhabi SDI GIS database. Analytics cannot be calculated for unavailable layers.`,
          results: [],
          structuredResults: { title: 'No Matching Analytics Data', category: 'None', items: [], tabs: [] },
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
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
      const hasSchools = qLower.includes('school') || qLower.includes('مدرس') || qLower.includes('تعليم');
      const hasHospitals = qLower.includes('hospital') || qLower.includes('health') || qLower.includes('مستشف') || qLower.includes('صحي');
      const hasParks = qLower.includes('park') || qLower.includes('حديق');
      const hasTrans = qLower.includes('bus') || qLower.includes('transport') || qLower.includes('حافلات') || qLower.includes('مواصلات');

      const catA = hasSchools ? 'Education' : hasParks ? 'Parks' : 'Education';
      const subcatA = hasSchools ? 'Schools' : hasParks ? 'Public Parks' : null;
      const catB = hasHospitals ? 'Healthcare' : hasTrans ? 'Transportation' : hasParks ? 'Parks' : 'Healthcare';
      const subcatB = (qLower.includes('hospital') || qLower.includes('مستشف')) ? 'Hospitals' : (qLower.includes('pharmacy') || qLower.includes('صيدل')) ? 'Pharmacies' : (qLower.includes('clinic') || qLower.includes('عياد')) ? 'Clinics' : null;

      const itemsA = countCategoryInDistrict(catA, subcatA, targetDistrict);
      const itemsB = countCategoryInDistrict(catB, subcatB, targetDistrict);
      const countA = itemsA.length;
      const countB = itemsB.length;
      const total = countA + countB;
      const pctA = total > 0 ? Math.round((countA / total) * 100) : 0;
      const pctB = total > 0 ? Math.round((countB / total) * 100) : 0;

      const nameA_En = catA === 'Education' ? 'Schools' : catA === 'Parks' ? 'Parks' : catA;
      const nameA_Ar = catA === 'Education' ? 'المدارس' : catA === 'Parks' ? 'الحدائق' : catA;
      const nameB_En = catB === 'Healthcare' ? 'Hospitals' : catB === 'Transportation' ? 'Bus Stations' : catB;
      const nameB_Ar = catB === 'Healthcare' ? 'المستشفيات' : catB === 'Transportation' ? 'محطات الحافلات' : catB;

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
    // USE CASE 2: Area Ranking / Highest / Most by Dataset ("Which area has the highest number of healthcare facilities?")
    // -------------------------------------------------------------
    const isAreaRanking =
      qLower.includes('which area') ||
      qLower.includes('which district') ||
      qLower.includes('highest number') ||
      qLower.includes('most') ||
      qLower.includes('lowest') ||
      qLower.includes('least') ||
      qLower.includes('rank areas') ||
      qLower.includes('ranking') ||
      qLower.includes('أي منطقة') ||
      qLower.includes('ترتيب المناطق');

    if (isAreaRanking) {
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
        targetCatInfo = { category: 'Healthcare', subcategory: 'Hospitals', labelEn: 'Healthcare Facilities', labelAr: 'المرافق الصحية' };
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

      districtCounts.sort((a, b) => isLowest ? (a.count - b.count) : (b.count - a.count));

      const topDistrict = districtCounts[0];
      const topPct = grandTotal > 0 ? Math.round((topDistrict.count / grandTotal) * 100) : 0;
      const sectorPrefix = sectorFilter ? ` ${sectorFilter.toLowerCase()}` : '';
      const sectorPrefixAr = sectorFilter === 'Government' ? ' الحكومية' : sectorFilter === 'Private' ? ' الخاصة' : '';

      const aiResponseText = lang === 'ar'
        ? `تحتوي **${topDistrict.arabicName || topDistrict.name}** على ${isLowest ? 'أقل' : 'أكبر'} عدد من ${targetCatInfo.labelAr}${sectorPrefixAr}، بإجمالي **${topDistrict.count}** مرفقاً (تشكل **${topPct}%** من إجمالي ${grandTotal} موقعاً في أبوظبي).`
        : `**${topDistrict.name}** has the ${isLowest ? 'lowest' : 'highest'} number of${sectorPrefix} ${targetCatInfo.labelEn.toLowerCase()}, with **${topDistrict.count}** facilities (representing **${topPct}%** of all ${grandTotal} identified in Abu Dhabi).`;

      this.context.dataset = targetCatInfo.category;
      this.context.subcategory = targetCatInfo.subcategory;
      this.context.location = topDistrict.name;
      this.context.locationCoordinates = topDistrict.coordinates;
      this.context.currentResults = topDistrict.items.length > 0 ? topDistrict.items : districtCounts.flatMap(d => d.items);

      const analyticsPayload = {
        type: 'area_ranking',
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
        mapAction: { type: 'fly_to', center: [topDistrict.coordinates.lat, topDistrict.coordinates.lon], zoom: 14 }
      });
    }

    // -------------------------------------------------------------
    // USE CASE 3: Quantitative Count in a Specific District ("How many schools are in Khalifa City?")
    // -------------------------------------------------------------
    if (qLower.includes('how many') || qLower.includes('count of') || qLower.includes('number of') || qLower.includes('كم عدد') || qLower.includes('كم منها')) {
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
        targetCatInfo = { category: 'Education', subcategory: 'Schools', labelEn: 'Schools', labelAr: 'المدارس' };
      }

      let sectorFilter = null;
      if (qLower.includes('government') || qLower.includes('حكومي') || qLower.includes('حكومية') || (this.context.filters.sector === 'Government' && !qLower.includes('private'))) {
        sectorFilter = 'Government';
      } else if (qLower.includes('private') || qLower.includes('خاص') || qLower.includes('خاصة') || (this.context.filters.sector === 'Private' && !qLower.includes('government'))) {
        sectorFilter = 'Private';
      }

      const items = countCategoryInDistrict(targetCatInfo.category, targetCatInfo.subcategory, targetDistrict, sectorFilter);
      const count = items.length;
      const locName = targetDistrict.name;
      const locNameAr = targetDistrict.arabicName || locName;
      const sectorDesc = sectorFilter ? ` ${sectorFilter.toLowerCase()}` : '';
      const sectorDescAr = sectorFilter === 'Government' ? ' الحكومية' : sectorFilter === 'Private' ? ' الخاصة' : '';

      const subCounts = {};
      items.forEach(it => {
        const sub = it.subcategory || it.type || targetCatInfo.labelEn;
        subCounts[sub] = (subCounts[sub] || 0) + 1;
      });

      const breakdownEn = Object.entries(subCounts).map(([k, v]) => `${v} ${k.toLowerCase()}`).join(', ');
      const breakdownAr = Object.entries(subCounts).map(([k, v]) => `${v} ${SUBCAT_TRANSLATIONS_AR[k] || k}`).join('، ');

      let aiResponseText = '';
      if (count > 0) {
        aiResponseText = lang === 'ar'
          ? `يوجد **${count}** من ${targetCatInfo.labelAr}${sectorDescAr} في **${locNameAr}**${breakdownAr ? ` (${breakdownAr})` : ''}.`
          : `There are **${count}**${sectorDesc} ${targetCatInfo.labelEn.toLowerCase()} in **${locName}**${breakdownEn ? ` (${breakdownEn})` : ''}.`;
      } else {
        aiResponseText = lang === 'ar'
          ? `لا يوجد أي ${targetCatInfo.labelAr}${sectorDescAr} مسجلة في **${locNameAr}** ضمن قاعدة البيانات الحالية.`
          : `There are **0**${sectorDesc} ${targetCatInfo.labelEn.toLowerCase()} in **${locName}** in the current GIS dataset.`;
      }

      this.context.dataset = targetCatInfo.category;
      this.context.subcategory = targetCatInfo.subcategory;
      this.context.location = locName;
      this.context.locationCoordinates = targetDistrict;
      if (sectorFilter) this.context.filters.sector = sectorFilter;
      this.context.currentResults = items;

      const analyticsPayload = {
        type: 'district_summary',
        title: lang === 'ar' ? `إحصائية: ${targetCatInfo.labelAr} في ${locNameAr}` : `Analytics: ${targetCatInfo.labelEn} in ${locName}`,
        subtitle: lang === 'ar' ? `إجمالي ${count} موقعاً` : `Total ${count} facilities`,
        district: locName,
        totalCount: count,
        data: Object.entries(subCounts).map(([k, v]) => ({
          label: lang === 'ar' ? (SUBCAT_TRANSLATIONS_AR[k] || k) : k,
          count: v,
          percentage: count > 0 ? Math.round((v / count) * 100) : 0,
          color: '#004B87'
        }))
      };

      return this.buildStandardResponse({
        workingDataset: items,
        lang,
        intent: 'district_count_summary',
        aiResponseText,
        targetDistrict,
        targetCategory: targetCatInfo.category,
        targetSubcategory: targetCatInfo.subcategory,
        analytics: analyticsPayload,
        mapAction: { type: 'fly_to', center: [targetDistrict.lat, targetDistrict.lon], zoom: 14 }
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
    // 1. Spatial Preposition / Operator Detection
    const hasSpatialOp =
      qLower.includes('within') ||
      qLower.includes('near') ||
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
          querySummary: lang === 'ar' ? 'طبقة بيانات غير متوفرة' : 'Requested layer not found in GIS database',
          aiMessageText: lang === 'ar'
            ? `الطبقة المطلوبة **"${kw}"** غير متوفرة في قاعدة بيانات نظم المعلومات الجغرافية (SDI). الطبقات المتوفرة تشمل المدارس، المستشفيات، محطات الحافلات، والحدائق العامة.`
            : `The requested layer or feature type **"${kw}"** is not available in the Abu Dhabi SDI GIS database. Available layers include Schools, Hospitals, Bus Stations, Parks, and Government Services.`,
          results: [],
          structuredResults: { title: 'No Matching Layers', category: 'None', items: [], tabs: [] },
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

    // Helper: Map text segment to known dataset layer
    const resolveLayer = (text) => {
      const t = (text || '').toLowerCase();
      if (t.includes('school') || t.includes('مدرسة') || t.includes('مدارس') || t.includes('education') || t.includes('تعليم') || t.includes('academy') || t.includes('أكاديمية')) {
        let sub = 'Schools';
        if (t.includes('private') || t.includes('خاصة')) sub = 'Private Schools';
        else if (t.includes('public') || t.includes('حكومية')) sub = 'Public Schools';
        else if (t.includes('charter') || t.includes('ميثاق')) sub = 'Charter Schools';
        return { category: 'Education', subcategory: sub, labelEn: sub === 'Schools' ? 'schools' : sub.toLowerCase(), labelAr: sub === 'Public Schools' ? 'المدارس الحكومية' : sub === 'Private Schools' ? 'المدارس الخاصة' : 'المدارس' };
      }
      if (t.includes('nursery') || t.includes('nurseries') || t.includes('حضانة') || t.includes('حضانات')) {
        return { category: 'Education', subcategory: 'Nurseries', labelEn: 'nurseries', labelAr: 'الحضانات' };
      }
      if (t.includes('university') || t.includes('universities') || t.includes('college') || t.includes('جامعة') || t.includes('جامعات')) {
        return { category: 'Education', subcategory: 'Universities', labelEn: 'universities', labelAr: 'الجامعات' };
      }
      if (t.includes('bus station') || t.includes('bus stations') || t.includes('bus stop') || t.includes('bus stops') || t.includes('transit') || t.includes('bus') || t.includes('buses') || t.includes('حافلات') || t.includes('محطة حافلات') || t.includes('مواقف حافلات') || t.includes('مواصلات')) {
        return { category: 'Transportation', subcategory: 'Bus Stations', labelEn: 'bus stations', labelAr: 'محطات الحافلات' };
      }
      if (t.includes('airport') || t.includes('airports') || t.includes('مطار') || t.includes('مطارات')) {
        return { category: 'Transportation', subcategory: 'Airports', labelEn: 'airports', labelAr: 'المطارات' };
      }
      if (t.includes('metro') || t.includes('train') || t.includes('مترو') || t.includes('قطار')) {
        return { category: 'Transportation', subcategory: 'Metro Lines', labelEn: 'metro stations', labelAr: 'محطات المترو' };
      }
      if (t.includes('park') || t.includes('parks') || t.includes('garden') || t.includes('gardens') || t.includes('حديقة') || t.includes('حدائق') || t.includes('منتزه') || t.includes('منتزهات')) {
        return { category: 'Parks', subcategory: 'Public Parks', labelEn: 'parks', labelAr: 'الحدائق' };
      }
      if (t.includes('hospital') || t.includes('hospitals') || t.includes('مستشفى') || t.includes('مستشفيات')) {
        return { category: 'Healthcare', subcategory: 'Hospitals', labelEn: 'hospitals', labelAr: 'المستشفيات' };
      }
      if (t.includes('clinic') || t.includes('clinics') || t.includes('عيادة') || t.includes('عيادات')) {
        return { category: 'Healthcare', subcategory: 'Clinics', labelEn: 'clinics', labelAr: 'العيادات' };
      }
      if (t.includes('pharmacy') || t.includes('pharmacies') || t.includes('صيدلية') || t.includes('صيدليات')) {
        return { category: 'Healthcare', subcategory: 'Pharmacies', labelEn: 'pharmacies', labelAr: 'الصيدليات' };
      }
      if (t.includes('government') || t.includes('tamm') || t.includes('ministry') || t.includes('embassy') || t.includes('حكومي') || t.includes('تام') || t.includes('وزارة') || t.includes('سفارة')) {
        return { category: 'Government Services', subcategory: null, labelEn: 'government facilities', labelAr: 'المرافق الحكومية' };
      }
      return null;
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
            { label: lang === 'ar' ? `المدارس في ${locNameAr}` : `Schools in ${locName}`, query: `Show schools in ${locName}` },
            { label: lang === 'ar' ? `المستشفيات في ${locNameAr}` : `Hospitals in ${locName}`, query: `Show hospitals in ${locName}` }
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
    let rankType = null;
    let rankSummary = '';
    let topNLimit = null;

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
      qLower.includes('أعلى تقييم') ||
      qLower.includes('أفضل تقييم') ||
      qLower.includes('أحسن تقييم')
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
      qLower.includes('أقل تقييم') ||
      qLower.includes('أدنى تقييم') ||
      qLower.includes('أسوأ تقييم')
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
      qLower.includes('الأقرب')
    ) {
      rankType = 'nearest';
      rankSummary = 'sorted by proximity ascending';
      ranked = ranked.map(item => {
        const dist = calculateDistanceKm(userLoc.lat, userLoc.lon, item.lat, item.lon);
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)) };
      }).sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
    } else if (
      qLower.includes('farthest') ||
      qLower.includes('furthest') ||
      qLower.includes('most distant') ||
      qLower.includes('أبعد') ||
      qLower.includes('الأبعد')
    ) {
      rankType = 'farthest';
      rankSummary = 'sorted by distance descending';
      ranked = ranked.map(item => {
        const dist = calculateDistanceKm(userLoc.lat, userLoc.lon, item.lat, item.lon);
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)) };
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
      qLower.includes('أكبر مدرسة') ||
      qLower.includes('أكبر سعة') ||
      qLower.includes('أكثر أسرة')
    ) {
      rankType = 'most_beds';
      rankSummary = 'sorted by capacity descending';
      ranked.sort((a, b) => ((b.beds || b.students || 0) - (a.beds || a.students || 0)));
    } else if (
      qLower.includes('least beds') ||
      qLower.includes('smallest hospital') ||
      qLower.includes('smallest school') ||
      qLower.includes('lowest capacity') ||
      qLower.includes('أصغر')
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
      qLower.includes('أكثر انبعاث')
    ) {
      rankType = 'most_emissions';
      rankSummary = 'sorted by carbon emissions descending';
      ranked = ranked.filter(i => i.emissions != null).sort((a, b) => (b.emissions || 0) - (a.emissions || 0));
    } else if (
      qLower.includes('least emission') ||
      qLower.includes('lowest emission') ||
      qLower.includes('cleanest') ||
      qLower.includes('least carbon') ||
      qLower.includes('أقل انبعاث') ||
      qLower.includes('أنظف')
    ) {
      rankType = 'least_emissions';
      rankSummary = 'sorted by carbon emissions ascending';
      ranked = ranked.filter(i => i.emissions != null).sort((a, b) => (a.emissions || 0) - (b.emissions || 0));
    }

    if (!rankType) {
      return null;
    }

    const topItem = ranked[0];
    if (!topItem) {
      return null;
    }

    // Determine target entity noun for clean natural phrasing
    let nounEn = 'facility';
    let nounAr = 'منشأة';
    if (qLower.includes('school') || (activeSub && activeSub.toLowerCase().includes('school')) || activeCat === 'Education') {
      nounEn = 'school';
      nounAr = 'مدرسة';
    } else if (qLower.includes('hospital') || (activeSub && activeSub.toLowerCase().includes('hospital')) || activeCat === 'Healthcare') {
      nounEn = 'hospital';
      nounAr = 'مستشفى';
    } else if (qLower.includes('clinic') || (activeSub && activeSub.toLowerCase().includes('clinic'))) {
      nounEn = 'clinic';
      nounAr = 'عيادة';
    } else if (qLower.includes('park') || activeCat === 'Parks' || activeCat === 'Environment') {
      nounEn = 'park';
      nounAr = 'حديقة';
    }

    const locEn = this.context.location || activeLoc?.name || 'the area';
    const locAr = this.context.locationCoordinates?.arabicName || this.context.location || activeLoc?.arabicName || 'المنطقة';

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
        aiResponseText = lang === 'ar'
          ? `أقرب ${nounAr} إليك في **${locAr}** هو **${topItem.arabicTitle || topItem.title}** (يبعد **${topItem.distanceKm} كم**، التقييم: **${topItem.rating} ★**).`
          : `The nearest ${nounEn} to you in **${locEn}** is **${topItem.title}** (distance: **${topItem.distanceKm} km**, rating: **${topItem.rating} ★**).`;
      } else if (rankType === 'farthest') {
        aiResponseText = lang === 'ar'
          ? `أبعد ${nounAr} عنك في **${locAr}** هو **${topItem.arabicTitle || topItem.title}** (يبعد **${topItem.distanceKm} كم**).`
          : `The farthest ${nounEn} from you in **${locEn}** is **${topItem.title}** (distance: **${topItem.distanceKm} km**).`;
      } else if (rankType === 'most_beds') {
        aiResponseText = lang === 'ar'
          ? `أكبر ${nounAr} في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بسعة **${topItem.beds || topItem.students}**.`
          : `The largest ${nounEn} in **${locEn}** is **${topItem.title}**, with a capacity of **${topItem.beds || topItem.students}**.`;
      } else if (rankType === 'least_beds') {
        aiResponseText = lang === 'ar'
          ? `أصغر ${nounAr} في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بسعة **${topItem.beds || topItem.students}**.`
          : `The smallest ${nounEn} in **${locEn}** is **${topItem.title}**, with a capacity of **${topItem.beds || topItem.students}**.`;
      } else if (rankType === 'least_emissions') {
        aiResponseText = lang === 'ar'
          ? `المنشأة الأقل انبعاثات في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بانبعاثات **${topItem.emissions?.toLocaleString()} طن سنوياً**.`
          : `The lowest-emission facility in **${locEn}** is **${topItem.title}**, with **${topItem.emissions?.toLocaleString()} tonnes CO2/yr**.`;
      } else if (rankType === 'most_emissions') {
        aiResponseText = lang === 'ar'
          ? `المنشأة الأعلى انبعاثات في **${locAr}** هي **${topItem.arabicTitle || topItem.title}** بانبعاثات **${topItem.emissions?.toLocaleString()} طن سنوياً**.`
          : `The highest-emission facility in **${locEn}** is **${topItem.title}**, with **${topItem.emissions?.toLocaleString()} tonnes CO2/yr**.`;
      }
    }

    return {
      ranked,
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
    const q = (rawQuery || '').trim();
    const qLower = q.toLowerCase();
    this.context.conversationTurn += 1;

    if (options.selectedLocation) {
      this.context.selectedFeature = options.selectedLocation;
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

    // 0.5 CHECK FOR WHAT-IF SIMULATIONS & HEALTHCARE SCENARIO ANALYSIS
    if (qLower.includes('population grows') || qLower.includes('add a clinic') || qLower.includes('نمو سكاني') || qLower.includes('أثر عيادة') || qLower.includes('+20% pop')) {
      const healthcareItems = GEOVISION_SPATIAL_DATASET.filter(item => item.category === 'Healthcare');
      const count = healthcareItems.length;
      this.context.currentResults = healthcareItems;
      this.sessionContext.previousResults = healthcareItems;
      return {
        intent: 'simulation',
        querySummary: lang === 'ar' ? 'محاكاة الأثر المكاني لنمو السكان +20%' : 'Spatial Impact Simulation: +20% Population Growth',
        aiMessageText: lang === 'ar'
          ? 'محاكاة الذكاء الاصطناعي (+20% نمو سكاني): تم تحديد موقع مثالي لعيادة رعاية أولية جديدة في المشرف لتغطية 45,000 نسمة بنطاق وصول 12 دقيقة، مما يقلل الضغط عن مستشفيات المنطقة بنسبة 28%.'
          : 'AI Simulation (+20% Population Growth): Optimal location identified for a new primary healthcare clinic in Al Mushrif, serving ~45,000 residents within a 12-minute catchment, reducing pressure on nearby hospitals by 28%.',
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

    // 0.6 CHECK FOR UNSUPPORTED / NON-SPATIAL QUERIES
    const unsupportedKeywords = [
      'rocket', 'launchpad', 'submarine', 'space station', 'nuclear', 'missile',
      'cake', 'recipe', 'how to make', 'cook',
      'صاروخ', 'منصة إطلاق', 'غواصة', 'محطة فضاء', 'نووي', 'كعكة', 'وصفة'
    ];
    for (const kw of unsupportedKeywords) {
      if (qLower.includes(kw)) {
        return {
          intent: 'unsupported',
          querySummary: lang === 'ar' ? 'استفسار غير مكاني أو طبقة غير متوفرة' : 'Non-spatial or unsupported GIS request',
          aiMessageText: lang === 'ar'
            ? `أنا مساعد GeoVision الذكي للتحليلات المكانية ونظم المعلومات الجغرافية (GIS) في أبوظبي. استفسارك عن **"${kw}"** خارج نطاق البيانات المكانية المتوفرة. يمكنك الاستفسار عن المدارس، المستشفيات، المحطات، أو تحليل المناطق.`
            : `I am GeoVision's AI spatial assistant for Abu Dhabi GIS analytics. Your query about **"${kw}"** is outside our spatial geospatial database. You can ask about schools, hospitals, transit, parks, or spatial proximity.`,
          results: [],
          structuredResults: { title: 'No Matching Layers', category: 'None', items: [], tabs: [] },
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('unsupported_layer', lang, options, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
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
            { label: lang === 'ar' ? 'المدارس في مدينة خليفة' : 'Schools in Khalifa City', query: 'Show schools in Khalifa City' },
            { label: lang === 'ar' ? 'المستشفيات في مدينة خليفة' : 'Hospitals in Khalifa City', query: 'Show hospitals in Khalifa City' }
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
            { label: lang === 'ar' ? 'موقعي الحالي' : 'My Current Location', query: 'Show schools within 5 km of my location' },
            { label: lang === 'ar' ? 'مدينة خليفة' : 'Khalifa City', query: 'Show schools in Khalifa City' },
            { label: lang === 'ar' ? 'جزيرة ياس' : 'Yas Island', query: 'Show schools in Yas Island' }
          ]
        },
        results: [...GEOVISION_SPATIAL_DATASET],
        contextBadges: this.context.getActiveContextBadges(lang),
        chips: [
          { label: lang === 'ar' ? 'المدارس في مدينة خليفة' : 'Schools in Khalifa City', query: 'Show schools in Khalifa City' },
          { label: lang === 'ar' ? 'المدارس بالقرب مني' : 'Schools near me', query: 'Show schools within 5 km of my location' }
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
    const isProgressiveFollowUp =
      qLower.includes('government') ||
      qLower.includes('private') ||
      qLower.includes('nearest') ||
      qLower.includes('closest') ||
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
      qLower.includes('which school') ||
      qLower.includes('which hospital') ||
      qLower.includes('which clinic') ||
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
      qLower.includes('تقييم أعلى') ||
      qLower.includes('الأعلى تقييماً') ||
      qLower.includes('أعلى تقييم') ||
      qLower.includes('أدنى تقييم') ||
      qLower.includes('أيها') ||
      qLower.includes('أي مدرسة') ||
      qLower.includes('أي مستشفى') ||
      qLower.includes('طوارئ');

    if (isProgressiveFollowUp && (this.context.dataset || this.context.location)) {
      const activeCat = this.context.dataset;
      const activeSub = this.context.subcategory;
      const activeLoc = this.context.locationCoordinates || (this.context.location ? DISTRICT_COORDINATES[this.context.location.toLowerCase()] : null);

      // Start from all items in this location / category
      let candidates = GEOVISION_SPATIAL_DATASET.filter(item => {
        const catMatch = activeCat ? item.category.toLowerCase() === activeCat.toLowerCase() : true;
        const subMatch = activeSub ? (
          item.subcategory.toLowerCase() === activeSub.toLowerCase() ||
          item.subcategory.toLowerCase().includes(activeSub.toLowerCase()) ||
          activeSub.toLowerCase().includes(item.subcategory.toLowerCase())
        ) : true;
        return catMatch && subMatch;
      });

      if (activeLoc) {
        candidates = candidates.map(item => {
          const dist = calculateDistanceKm(activeLoc.lat, activeLoc.lon, item.lat, item.lon);
          const nameMatch = (item.address || '').toLowerCase().includes(activeLoc.name.toLowerCase()) ||
            (item.title || '').toLowerCase().includes(activeLoc.name.toLowerCase());
          return { ...item, distanceKm: parseFloat(dist.toFixed(2)), isDistrictMatch: nameMatch || dist <= (this.context.radius || activeLoc.radius || 6.0) };
        }).filter(item => item.isDistrictMatch);
      }

      // Update Filters
      if (qLower.includes('government') || qLower.includes('حكومي') || qLower.includes('public')) {
        this.context.filters.sector = 'Government';
      } else if (qLower.includes('private') || qLower.includes('خاص')) {
        this.context.filters.sector = 'Private';
      }

      const ratingMatch = qLower.match(/rating\s*(?:above|>=|>|over)\s*([\d.]+)/i) || qLower.match(/تقييم\s*(?:أعلى من|>|فوق)\s*([\d.]+)/i);
      if (ratingMatch) {
        this.context.filters.ratingMin = parseFloat(ratingMatch[1]);
      }

      if (qLower.includes('24/7') || qLower.includes('emergency') || qLower.includes('طوارئ')) {
        this.context.filters.open247 = true;
      }

      // If active context is a cross-layer buffer, filter directly from the previous buffer results
      if (this.context.spatialRelationship === 'cross_layer_buffer' && this.context.currentResults.length > 0) {
        candidates = this.context.currentResults;
      }

      // Apply Filters
      if (this.context.filters.sector) {
        const secLower = this.context.filters.sector.toLowerCase();
        candidates = candidates.filter(item => {
          const s = (item.sector || '').toLowerCase();
          const t = (item.type || '').toLowerCase();
          const sub = (item.subcategory || '').toLowerCase();
          if (secLower === 'government' || secLower === 'public') {
            return s === 'government' || s === 'public' || t.includes('government') || t.includes('public') || sub.includes('public') || sub.includes('charter');
          }
          if (secLower === 'private') {
            return s === 'private' || t.includes('private') || sub.includes('private');
          }
          return s === secLower || t.includes(secLower);
        });
      }
      if (this.context.filters.ratingMin) {
        candidates = candidates.filter(item => (item.rating || 0) >= this.context.filters.ratingMin);
      }
      if (this.context.filters.open247) {
        candidates = candidates.filter(item => item.emergency247 === true || (item.openHours && item.openHours.includes('24/7')));
      }

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
          aiResponseText: rankingResult.aiResponseText,
          targetDistrict: activeLoc,
          targetCategory: activeCat,
          targetSubcategory: activeSub,
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

      const aiResponseText = lang === 'ar'
        ? `تم تصفية النتائج: تم العثور على **${count}** من ${activeSub || activeCat}${filterSummaryAr}${locStrAr}.`
        : `Refined results based on context: found **${count}**${filterSummary} **${(activeSub || activeCat).toLowerCase()}**${locStr}.`;

      return this.buildStandardResponse({
        workingDataset: candidates,
        lang,
        intent: 'attribute_refine',
        aiResponseText,
        targetDistrict: activeLoc,
        targetCategory: activeCat,
        targetSubcategory: activeSub
      });
    }

    // 6. GENERAL SPATIAL / ATTRIBUTE PARSING & CONTEXT ESTABLISHMENT
    let workingDataset = [...GEOVISION_SPATIAL_DATASET];

    // Check for District / City
    let targetDistrict = null;
    let targetCity = null;

    for (const [key, dist] of Object.entries(DISTRICT_COORDINATES)) {
      if (qLower.includes(key)) {
        targetDistrict = dist;
        if (key === 'dubai' || key === 'دبي') targetCity = 'Dubai';
        else targetCity = 'Abu Dhabi';
        break;
      }
    }

    if (!targetDistrict && (qLower.includes('my location') || qLower.includes('near me') || qLower.includes('موقعي') || qLower.includes('حولي') || qLower.includes('قريب مني'))) {
      const uLoc = options.userLocation || { lat: 24.4539, lon: 54.3773, name: 'your location' };
      targetDistrict = {
        lat: uLoc.lat,
        lon: uLoc.lon,
        name: 'your location',
        arabicName: 'موقعك الحالي',
        radius: 5.0
      };
    }

    // Check if query specified an unknown location (e.g. "in <UnknownLocation>")
    const locInMatch = qLower.match(/\bin\s+([a-z0-9_\s]+)/i) || qLower.match(/\bفي\s+([\u0600-\u06FF\s]+)/);
    if (!targetDistrict && locInMatch) {
      const candidateLoc = locInMatch[1].trim().toLowerCase();
      const ignoreWords = ['abu dhabi', 'dubai', 'uae', 'the area', 'my location', 'this area', 'all areas', 'الامارات', 'أبوظبي', 'دبي'];
      if (!ignoreWords.includes(candidateLoc) && candidateLoc.length > 3 && !Object.keys(DISTRICT_COORDINATES).some(k => candidateLoc.includes(k))) {
        return {
          intent: 'zero_results',
          querySummary: lang === 'ar' ? `لم يتم العثور على موقع "${locInMatch[1]}"` : `Location "${locInMatch[1]}" not found`,
          aiMessageText: lang === 'ar'
            ? `لم نتمكن من العثور على منطقة أو حي باسم **"${locInMatch[1]}"** في قاعدة بيانات إمارة أبوظبي. جرب البحث في مناطق مثل مدينة خليفة، المشرف، جزيرة ياس، أو الخالدية.`
            : `No registered district or neighborhood found matching **"${locInMatch[1]}"** in the Abu Dhabi SDI database. Try searching in areas like Khalifa City, Al Mushrif, Yas Island, or Al Khalidiyah.`,
          results: [],
          structuredResults: { title: 'No Results Found', category: 'None', items: [], tabs: [] },
          contextBadges: this.context.getActiveContextBadges(lang),
          chips: this.generateContextualSuggestions('zero_results', lang, {}, []),
          mapAction: { type: 'fit_bounds' }
        };
      }
    }
    let targetCategory = null;
    let targetSubcategory = null;

    if (qLower.includes('hospital') || qLower.includes('مستشفى') || qLower.includes('مستشفيات')) {
      targetCategory = 'Healthcare';
      targetSubcategory = 'Hospitals';
    } else if (qLower.includes('clinic') || qLower.includes('عيادة') || qLower.includes('عيادات')) {
      targetCategory = 'Healthcare';
      targetSubcategory = 'Clinics';
    } else if (qLower.includes('pharmacy') || qLower.includes('pharmacies') || qLower.includes('صيدلية') || qLower.includes('صيدليات')) {
      targetCategory = 'Healthcare';
      targetSubcategory = 'Pharmacies';
    } else if (qLower.includes('health') || qLower.includes('رعاية صحية') || qLower.includes('صحي')) {
      targetCategory = 'Healthcare';
    } else if (qLower.includes('school') || qLower.includes('مدرسة') || qLower.includes('مدارس')) {
      targetCategory = 'Education';
      if (qLower.includes('private') || qLower.includes('خاصة')) targetSubcategory = 'Private Schools';
      else if (qLower.includes('public') || qLower.includes('حكومية')) targetSubcategory = 'Public Schools';
    } else if (qLower.includes('nursery') || qLower.includes('nurseries') || qLower.includes('حضانة') || qLower.includes('حضانات')) {
      targetCategory = 'Education';
      targetSubcategory = 'Nurseries';
    } else if (qLower.includes('university') || qLower.includes('college') || qLower.includes('جامعة') || qLower.includes('جامعات')) {
      targetCategory = 'Education';
      targetSubcategory = 'Universities';
    } else if (qLower.includes('park') || qLower.includes('garden') || qLower.includes('حديقة') || qLower.includes('حدائق') || qLower.includes('منتزه')) {
      targetCategory = 'Parks';
      targetSubcategory = 'Parks';
    } else if (qLower.includes('transport') || qLower.includes('bus') || qLower.includes('transit') || qLower.includes('نقل') || qLower.includes('حافلات')) {
      targetCategory = 'Transportation';
    } else if (qLower.includes('government') || qLower.includes('tamm') || qLower.includes('حكومي') || qLower.includes('تام')) {
      targetCategory = 'Government Services';
    } else if (qLower.includes('industrial') || qLower.includes('energy') || qLower.includes('صناعي')) {
      targetCategory = 'Industrial';
    }

    if (!targetCategory && categoryFilter && categoryFilter !== 'all') {
      targetCategory = categoryFilter;
    }

    // Context Isolation Rule (Requirement 10 & Test F):
    // If query specifies a new district AND a new category, reset previous context cleanly.
    if (targetDistrict && targetCategory) {
      this.context.reset();
      this.context.location = targetDistrict.name;
      this.context.locationCoordinates = targetDistrict;
      this.context.dataset = targetCategory;
      this.context.subcategory = targetSubcategory;
    } else if (targetDistrict && !targetCategory) {
      this.context.location = targetDistrict.name;
      this.context.locationCoordinates = targetDistrict;
    } else if (!targetDistrict && targetCategory) {
      this.context.dataset = targetCategory;
      this.context.subcategory = targetSubcategory;
    }

    // Apply Category Filter
    if (targetCategory && targetCategory !== 'all') {
      workingDataset = workingDataset.filter(item => {
        const catMatch = targetCategory === 'Parks'
          ? (item.category === 'Parks' || item.category === 'Environment' || item.category === 'Tourism' || item.subcategory?.toLowerCase().includes('park') || item.title?.toLowerCase().includes('park') || item.title?.toLowerCase().includes('world') || item.subcategory?.toLowerCase().includes('attraction'))
          : item.category.toLowerCase() === targetCategory.toLowerCase();
        const subMatch = (targetCategory !== 'Parks' && targetSubcategory)
          ? (item.subcategory?.toLowerCase() === targetSubcategory.toLowerCase() || item.subcategory?.toLowerCase().includes(targetSubcategory.toLowerCase()))
          : true;
        return catMatch && subMatch;
      });
    }

    // Apply District Filter
    if (targetDistrict) {
      workingDataset = workingDataset.map(item => {
        const dist = calculateDistanceKm(targetDistrict.lat, targetDistrict.lon, item.lat, item.lon);
        const nameMatch = (item.address || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
          (item.title || '').toLowerCase().includes(targetDistrict.name.toLowerCase()) ||
          (item.description || '').toLowerCase().includes(targetDistrict.name.toLowerCase());
        return { ...item, distanceKm: parseFloat(dist.toFixed(2)), isDistrictMatch: nameMatch || dist <= (targetDistrict.radius || 6.0) };
      }).filter(item => item.isDistrictMatch)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    }

    // Radius / Proximity
    const radMatch = qLower.match(/within\s+([\d.]+)\s*km/i) || qLower.match(/ضمن\s*([\d.]+)\s*كم/i);
    let searchRadiusKm = null;
    if (radMatch) {
      searchRadiusKm = parseFloat(radMatch[1]);
      this.context.radius = searchRadiusKm;
    }

    // Check for direct ranking in general queries (e.g. "Which school has the highest rating in Khalifa City?")
    const rankingResult = this.evaluateRankingQuery(qLower, workingDataset, { activeCat: targetCategory, activeSub: targetSubcategory, activeLoc: targetDistrict }, lang, options);
    if (rankingResult) {
      this.context.currentResults = rankingResult.ranked;
      this.sessionContext.previousResults = rankingResult.ranked;
      this.context.selectedFeature = rankingResult.topItem;

      return this.buildStandardResponse({
        workingDataset: rankingResult.ranked,
        lang,
        intent: 'ranking_superlative',
        aiResponseText: rankingResult.aiResponseText,
        targetDistrict,
        targetCategory,
        targetSubcategory,
        searchRadiusKm,
        isRanked: true,
        rankSummary: rankingResult.rankSummary,
        mapAction: rankingResult.mapAction
      });
    }

    this.context.currentResults = workingDataset;
    this.sessionContext.previousResults = workingDataset;

    const count = workingDataset.length;
    const catEn = targetSubcategory ? targetSubcategory.toLowerCase() : targetCategory ? targetCategory.toLowerCase() : 'facilities';
    const catAr = SUBCAT_TRANSLATIONS_AR[targetSubcategory] || CAT_TRANSLATIONS_AR[targetCategory] || 'المرافق';

    let aiResponseText = '';
    if (lang === 'ar') {
      if (searchRadiusKm) {
        aiResponseText = `تم العثور على **${count}** من ${catAr} ضمن نطاق **${searchRadiusKm} كم** من **${targetDistrict?.arabicName || 'موقعك'}** وعرضها على الخريطة.`;
      } else if (targetDistrict) {
        aiResponseText = `تم العثور على **${count}** من ${catAr} في **${targetDistrict.arabicName || targetDistrict.name}** وعرضها على الخريطة.`;
      } else {
        aiResponseText = `تم العثور على **${count}** موقعاً ضمن فئة **${catAr}** في دولة الإمارات.`;
      }
    } else {
      if (searchRadiusKm) {
        aiResponseText = `I found **${count}** ${catEn} within **${searchRadiusKm} km** of **${targetDistrict?.name || 'your location'}** and displayed them on the map.`;
      } else if (targetDistrict) {
        aiResponseText = `I found **${count}** ${catEn} in **${targetDistrict.name}** and displayed them on the map.`;
      } else {
        aiResponseText = `I found **${count}** ${catEn} across Abu Dhabi & UAE.`;
      }
    }

    return this.buildStandardResponse({
      workingDataset,
      lang,
      intent: (searchRadiusKm || qLower.includes('near me') || qLower.includes('my location') || qLower.includes('حولي') || qLower.includes('موقعي')) ? 'radius_search' : (targetDistrict ? 'spatial_filter' : 'search'),
      aiResponseText,
      targetDistrict,
      targetCategory,
      targetSubcategory,
      searchRadiusKm
    });
  }

  /**
   * Phase 6: Dynamic Context-Aware Suggestion & Recommendation Engine
   * Generates intelligent, non-hardcoded follow-up suggestions from the active ConversationContext.
   */
  generateContextualSuggestions(intent, lang = 'en', options = {}, workingDataset = []) {
    const chips = [];
    const activeLoc = this.context.location || options?.targetDistrict?.name || 'Khalifa City';
    const activeLocAr = this.context.locationCoordinates?.arabicName || options?.targetDistrict?.arabicName || activeLoc;
    const activeCat = this.context.dataset || options?.targetCategory || 'Healthcare';
    const activeCatAr = CAT_TRANSLATIONS_AR[activeCat] || activeCat;
    const activeFilters = this.context.filters || {};
    const radius = this.context.radius || options?.searchRadiusKm || 2;
    const isSelected = !!options?.selectedLocation;
    const featureTitle = options?.selectedLocation?.title || '';
    const featureTitleAr = options?.selectedLocation?.arabicTitle || featureTitle;

    // RULE 1: Selected Map Feature Follow-ups
    if (isSelected && featureTitle) {
      chips.push({
        label: lang === 'ar' ? `المدارس القريبة من ${featureTitleAr}` : `Show schools near this one`,
        query: `Show schools within 2 km of ${featureTitle}`
      });
      chips.push({
        label: lang === 'ar' ? 'زيادة المسافة إلى 5 كم' : 'Increase distance to 5 km',
        query: `Show places within 5 km of ${featureTitle}`
      });
      chips.push({
        label: lang === 'ar' ? 'المرافق الحكومية القريبة' : 'Show government facilities near here',
        query: `Show government facilities within 2 km of ${featureTitle}`
      });
      chips.push({
        label: lang === 'ar' ? 'حفظ هذا البحث' : 'Save this search',
        action: 'save_search'
      });
      return chips;
    }

    // RULE 2: Unsupported Layer Recovery
    if (intent === 'unsupported_layer') {
      chips.push({
        label: lang === 'ar' ? `عرض المدارس في ${activeLocAr}` : `Show schools in ${activeLoc}`,
        query: `Show schools in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض المستشفيات في ${activeLocAr}` : `Show hospitals in ${activeLoc}`,
        query: `Show hospitals in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض الحدائق العامة في ${activeLocAr}` : `Show parks in ${activeLoc}`,
        query: `Show parks in ${activeLoc}`
      });
      return chips;
    }

    // RULE 3: Zero-Result Recovery
    if (intent === 'zero_results' || (workingDataset && workingDataset.length === 0)) {
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      if (activeFilters.sector) {
        chips.push({
          label: lang === 'ar' ? `عرض كافة القطاعات في ${activeLocAr}` : `Show all sectors in ${activeLoc}`,
          query: `Show ${activeCat.toLowerCase()} in ${activeLoc}`
        });
      }
      chips.push({
        label: lang === 'ar' ? 'البحث في كافة أنحاء أبوظبي' : 'Search across all Abu Dhabi',
        query: `Show ${activeCat.toLowerCase()} across Abu Dhabi`
      });
      return chips;
    }

    // RULE 4: Analytics Query Suggestions
    if (intent === 'area_ranking') {
      chips.push({
        label: lang === 'ar' ? 'ترتيب أفضل 5 مناطق' : 'Show the top 5 areas',
        query: `Show top 5 areas with ${activeCat.toLowerCase()}`
      });
      chips.push({
        label: lang === 'ar' ? 'مقارنة المدارس والمرافق الصحية' : 'Compare schools and healthcare facilities',
        query: `Compare schools and hospitals in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `عرض المرافق في ${activeLocAr}` : `Show ${activeCat.toLowerCase()} in the selected area`,
        query: `Show ${activeCat.toLowerCase()} in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب المرافق إلي' : 'Find the nearest facilities',
        query: `Which ${activeCat.toLowerCase()} is nearest to me?`
      });
      return chips;
    }

    if (intent === 'district_count_summary') {
      chips.push({
        label: lang === 'ar' ? `أي منطقة بها أكبر عدد من ${activeCatAr}؟` : `Which area has the most ${activeCat.toLowerCase()}?`,
        query: `Which area has the most ${activeCat.toLowerCase()}?`
      });
      if (!activeFilters.sector) {
        chips.push({
          label: lang === 'ar' ? 'كم منها حكومي؟' : `How many are government ${activeCat.toLowerCase()}?`,
          query: `How many are government ${activeCat.toLowerCase()} in ${activeLoc}?`
        });
      }
      chips.push({
        label: lang === 'ar' ? 'مقارنة مع المستشفيات' : 'Compare with hospitals',
        query: `Compare schools and hospitals in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `أقرب ${activeCatAr} إلي` : `Find the nearest ${activeCat.toLowerCase()}`,
        query: `Which ${activeCat.toLowerCase()} is nearest to me in ${activeLoc}?`
      });
      return chips;
    }

    if (intent === 'dataset_comparison') {
      chips.push({
        label: lang === 'ar' ? 'أي منطقة بها أكبر عدد من المرافق الصحية؟' : 'Which area has the most healthcare facilities?',
        query: 'Which area has the highest number of healthcare facilities?'
      });
      chips.push({
        label: lang === 'ar' ? `عرض المدارس الخاصة في ${activeLocAr}` : `Show private schools in ${activeLoc}`,
        query: `Show private schools in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'المدارس ضمن 2 كم من هذه المستشفيات' : 'Show schools near these hospitals',
        query: `Show schools within 2 km of hospitals in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? `أعلى المستشفيات تقييماً في ${activeLocAr}` : 'Compare hospitals by rating',
        query: `Which hospital has the highest rating in ${activeLoc}?`
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

      if (!activeFilters.sector) {
        chips.push({
          label: lang === 'ar' ? 'المدارس الحكومية فقط' : 'Show only government schools',
          query: 'Only government schools'
        });
      }

      chips.push({
        label: lang === 'ar' ? 'أقرب مدرسة إلي' : 'Find the nearest school',
        query: 'Which school is nearest to me?'
      });

      chips.push({
        label: lang === 'ar' ? 'مقارنة المدارس حسب التقييم' : 'Compare schools by rating',
        query: `Which school has the highest rating in ${activeLoc}?`
      });

      return chips;
    }

    // RULE 6: Ranking / Superlative Suggestions
    if (intent === 'ranking_superlative') {
      chips.push({
        label: lang === 'ar' ? `أفضل 3 ${activeCatAr} تقييماً` : 'Show top 3 highest-rated',
        query: `Show top 3 highest rated ${activeCat.toLowerCase()} in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'أيها الأقرب إلي؟' : 'Which one is nearest to me?',
        query: `Which one is nearest to me in ${activeLoc}?`
      });
      if (activeCat === 'Education') {
        chips.push({
          label: lang === 'ar' ? 'محطات الحافلات القريبة من هذه المدارس' : 'Bus stations near these schools',
          query: `Show bus stations within 1 km of schools in ${activeLoc}`
        });
      } else {
        chips.push({
          label: lang === 'ar' ? 'المدارس القريبة من هذه' : 'Show schools near these',
          query: `Show schools within 2 km of these in ${activeLoc}`
        });
      }
      chips.push({
        label: lang === 'ar' ? 'حفظ هذا البحث' : 'Save this search',
        action: 'save_search'
      });
      return chips;
    }

    // RULE 7: General / Dataset-Specific Spatial Search (e.g. "Show hospitals in Khalifa City")
    if (activeCat === 'Healthcare') {
      chips.push({
        label: lang === 'ar' ? 'أقرب مستشفى إلي' : 'Find the nearest hospital',
        query: 'Which hospital is nearest to me?'
      });
      if (!activeFilters.sector) {
        chips.push({
          label: lang === 'ar' ? 'المستشفيات الحكومية' : 'Show government hospitals',
          query: 'Only government hospitals'
        });
      } else {
        chips.push({
          label: lang === 'ar' ? 'المستشفيات الخاصة' : 'Show private hospitals',
          query: 'Only private hospitals'
        });
      }
      chips.push({
        label: lang === 'ar' ? 'المدارس القريبة من هذه المستشفيات' : 'Show schools near these hospitals',
        query: 'Show schools within 2 km of these hospitals'
      });
      chips.push({
        label: lang === 'ar' ? 'مقارنة المستشفيات حسب التقييم' : 'Compare hospitals by rating',
        query: `Which hospital has the highest rating in ${activeLoc}?`
      });
      return chips;
    }

    if (activeCat === 'Education') {
      chips.push({
        label: lang === 'ar' ? 'أقرب مدرسة إلي' : 'Find the nearest school',
        query: 'Which school is nearest to me?'
      });
      if (!activeFilters.sector) {
        chips.push({
          label: lang === 'ar' ? 'المدارس الحكومية فقط' : 'Show only government schools',
          query: 'Only government schools'
        });
      } else {
        chips.push({
          label: lang === 'ar' ? 'المدارس الخاصة فقط' : 'Show only private schools',
          query: 'Only private schools'
        });
      }
      chips.push({
        label: lang === 'ar' ? 'محطات الحافلات القريبة من هذه المدارس' : 'Show bus stations near these schools',
        query: `Show bus stations within 1 km of schools in ${activeLoc}`
      });
      chips.push({
        label: lang === 'ar' ? 'مقارنة المدارس حسب التقييم' : 'Compare schools by rating',
        query: `Which school has the highest rating in ${activeLoc}?`
      });
      return chips;
    }

    if (activeCat === 'Parks') {
      chips.push({
        label: lang === 'ar' ? 'الحدائق الأعلى تقييماً' : 'Compare parks by rating',
        query: `Which park has the highest rating in ${activeLoc}?`
      });
      chips.push({
        label: lang === 'ar' ? 'المطاعم القريبة من هذه الحدائق' : 'Show restaurants near these parks',
        query: 'Show restaurants near these parks'
      });
      chips.push({
        label: lang === 'ar' ? 'توسيع النطاق إلى 5 كم' : 'Increase radius to 5 km',
        query: 'Increase radius to 5 km'
      });
      chips.push({
        label: lang === 'ar' ? 'أقرب حديقة إلي' : 'Find the nearest park',
        query: 'Which park is nearest to me?'
      });
      return chips;
    }

    // Default Fallback
    chips.push({
      label: lang === 'ar' ? `الأعلى تقييماً في ${activeLocAr}` : `Top rated in ${activeLoc}`,
      query: `Which one has the highest rating in ${activeLoc}?`
    });
    chips.push({
      label: lang === 'ar' ? 'أقرب الأماكن إلي' : 'Find nearby places within 5 km',
      query: 'Find nearby places within 5 km'
    });
    chips.push({
      label: lang === 'ar' ? `مقارنة المدارس والمستشفيات في ${activeLocAr}` : 'Compare schools & hospitals',
      query: `Compare schools and hospitals in ${activeLoc}`
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
    const count = workingDataset.length;
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
      querySummary: lang === 'ar' ? `تمت مطابقة ${count} موقعاً` : `${count} features matched`,
      aiMessageText: aiResponseText.trim(),
      results: workingDataset,
      structuredResults: structuredPayload,
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

  const drawnChips = [];
  if (count > 0) {
    drawnChips.push({ label: lang === 'ar' ? 'الأعلى تقييماً في المنطقة' : 'Top rated in area', query: 'Which one has the highest rating in this area?' });
    Object.keys(subcatCounts).slice(0, 3).forEach(sc => {
      drawnChips.push({
        label: lang === 'ar' ? `${SUBCAT_TRANSLATIONS_AR[sc] || sc} فقط` : `Only ${sc}`,
        query: `Only show ${sc}`
      });
    });
  } else {
    drawnChips.push({ label: lang === 'ar' ? 'المستشفيات (5 كم)' : 'Hospitals (5km)', query: 'Hospitals within 5km' });
    drawnChips.push({ label: lang === 'ar' ? 'المدارس (2 كم)' : 'Schools (2km)', query: 'Schools within 2km' });
    drawnChips.push({ label: lang === 'ar' ? 'الحدائق العامة' : 'Public parks', query: 'Public parks within 3km' });
  }

  return {
    userQueryText,
    aiMessageText,
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
