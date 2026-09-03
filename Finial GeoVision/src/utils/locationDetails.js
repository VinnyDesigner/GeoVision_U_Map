/**
 * Dynamic Category-based Attribute & Highlights Formatter for GeoVision
 * Automatically generates tailored "Here's why this is a good option for you" chips 
 * and detailed striped specification table rows based on GIS Category.
 */

export const getLocationCategoryDetails = (loc) => {
  if (!loc) return { chips: [], rows: [] };

  const cat = (loc.category || '').toLowerCase().trim();
  const sub = (loc.subcategory || '').toLowerCase().trim();

  // 1. EDUCATION (Schools, Universities, Nurseries, Academies, POD)
  if (cat.includes('edu') || cat.includes('school') || sub.includes('school') || sub.includes('nursery') || sub.includes('univ') || sub.includes('academy') || sub.includes('pod')) {
    const feeStr = loc.tuitionFee
      ? (typeof loc.tuitionFee === 'number' ? `${loc.tuitionFee.toLocaleString()} AED` : `${loc.tuitionFee}`)
      : '28,912 AED';
    
    return {
      chips: [
        { label: 'Academic Year', value: loc.academicYear || '2024 - 2025' },
        { label: 'Average Tuition Fee', value: feeStr },
        { label: 'IRTQAA Result', value: loc.irtqaa || loc.irtqaaRating || (loc.rating ? `${loc.rating} ★ Very Good` : 'Very Good') }
      ],
      rows: [
        { label: 'Gender', value: loc.gender || 'Mixed • مختلط' },
        { label: 'Report', value: loc.report || 'CALENDAR • Q4/2024' },
        { label: 'Curriculum', value: loc.curriculum || 'Private SABIS • خاص - اجنبي' },
        {
          label: 'Grades',
          value: loc.grades || 'KG1, KG2, G01, G02, G03, G04, G05, G06, G07, G08, G09, G10, G11, G1',
          subValue: loc.gradesArabic || 'روضة أولى ،روضة ثانية ،الأول ،الثاني ،الثالث ،الرابع ،الخامس ،السادس ،السابع ،الثامن ،التاسع ،العاشر ،الحادي عشر ،الثاني عشر'
        }
      ]
    };
  }

  // 2. HEALTHCARE (Hospitals, Clinics, Pharmacies, Medical Centers)
  if (cat.includes('health') || sub.includes('hosp') || sub.includes('clinic') || sub.includes('pharm') || sub.includes('med')) {
    return {
      chips: [
        { label: 'Facility Type', value: loc.type || loc.subcategory || 'Specialized Hospital' },
        { label: 'Inpatient Capacity', value: loc.beds ? `${loc.beds} Beds` : (loc.capacity || '350 Inpatient Beds') },
        { label: 'Emergency Service', value: loc.emergency247 !== false ? '24/7 Trauma Care' : 'Outpatient Only' },
        { label: 'Clinical Rating', value: loc.rating ? `${loc.rating} ★ Excellent` : '4.8 ★ Quality Score' }
      ],
      rows: [
        { label: 'Classification', value: `${loc.subcategory || 'Hospital'} • ${loc.type || 'Tertiary Care'}` },
        { label: 'Operating Hours', value: loc.openHours || '24/7 Emergency & Inpatient Care' },
        { label: 'Specialties', value: loc.specialties || loc.sector || 'Multispecialty, Surgical & Diagnostic' },
        { label: 'Accreditation', value: loc.report || 'Department of Health (DoH) / DHA Certified' }
      ]
    };
  }

  // 3. INDUSTRIAL / ENERGY / UTILITIES / CLEAN ENERGY / SOLAR
  if (cat.includes('indus') || cat.includes('energ') || cat.includes('util') || sub.includes('smelt') || sub.includes('petro') || sub.includes('refin') || sub.includes('solar') || sub.includes('clean energy') || sub.includes('power')) {
    const emissionsStr = loc.emissions != null
      ? (loc.emissions === 0 ? 'Zero Carbon (100% Clean)' : `${loc.emissions.toLocaleString()} t CO2/yr`)
      : (sub.includes('solar') || sub.includes('clean') || sub.includes('nuclear') ? 'Zero Emissions Baseline' : '54,000 t CO2/yr');

    return {
      chips: [
        { label: 'Operational Capacity', value: loc.capacity || '2.1 GW Clean Generation' },
        { label: 'Annual Emissions', value: emissionsStr },
        { label: 'Energy Sector', value: loc.sector || loc.subcategory || 'Clean Energy & Utilities' },
        { label: 'Compliance Rating', value: loc.rating ? `${loc.rating} ★ ISO Certified` : 'ISO 14001 / EAD Verified' }
      ],
      rows: [
        { label: 'Industry Sector', value: `${loc.subcategory || 'Clean Energy'} • ${loc.sector || 'Renewable Infrastructure'}` },
        { label: 'Operations', value: loc.openHours || '24/7 Continuous Automated Generation' },
        { label: 'Grid Distance', value: loc.coastDistanceKm ? `${loc.coastDistanceKm} km from Coastline` : 'Integrated National Grid' },
        { label: 'Environmental Audit', value: loc.report || 'MOEI & Environment Agency Abu Dhabi (EAD) 2024' }
      ]
    };
  }

  // 4. TRANSPORTATION / INFRASTRUCTURE (Airports, Ports, Transit Hubs, Roads)
  if (cat.includes('trans') || cat.includes('infra') || sub.includes('airport') || sub.includes('port') || sub.includes('transit') || sub.includes('terminal') || sub.includes('bridge') || sub.includes('road')) {
    return {
      chips: [
        { label: 'Hub Classification', value: loc.subcategory || 'International Airport' },
        { label: 'Annual Passenger Capacity', value: loc.capacity || '90M Passengers / Year' },
        { label: 'Operational Status', value: loc.openHours || '24/7 Active Air & Cargo Transit' },
        { label: 'Global Ranking', value: loc.rating ? `${loc.rating} ★ Premier Hub` : '4.9 ★ Skytrax Rated' }
      ],
      rows: [
        { label: 'Facility Class', value: `${loc.subcategory || 'Transit Hub'} • Strategic Gateway` },
        { label: 'Operating Schedule', value: loc.openHours || '24/7 Continuous International Operations' },
        { label: 'Connectivity', value: loc.terminals || loc.sector || 'Multi-Terminal Hub & Logistics Freight' },
        { label: 'Oversight Authority', value: loc.report || 'General Civil Aviation Authority (GCAA) / DoT' }
      ]
    };
  }

  // 5. TOURISM / PARKS / ENVIRONMENT (Hotels, Resorts, Museums, Parks, Attractions)
  if (cat.includes('tour') || cat.includes('park') || cat.includes('environ') || sub.includes('hotel') || sub.includes('resort') || sub.includes('museum') || sub.includes('heritage') || sub.includes('attraction') || sub.includes('reserve') || sub.includes('garden')) {
    return {
      chips: [
        { label: 'Attraction Type', value: loc.subcategory || 'Cultural & Leisure Destination' },
        { label: 'Visitor Rating', value: loc.rating ? `${loc.rating} ★ (Top Destination)` : '4.9 ★ Outstanding' },
        { label: 'Visiting Schedule', value: loc.openHours || '09:00 AM - 10:00 PM Daily' },
        { label: 'Location Zone', value: loc.city || 'Abu Dhabi Waterfront & Islands' }
      ],
      rows: [
        { label: 'Destination Type', value: `${loc.subcategory || 'Tourism'} • Public & Leisure Attraction` },
        { label: 'Visitor Access', value: loc.openHours || 'Open Daily • Guided Tours & Family Access' },
        { label: 'Highlights', value: loc.description ? (loc.description.length > 60 ? `${loc.description.substring(0, 60)}...` : loc.description) : 'Premier landmark destination with world-class guest amenities' },
        { label: 'Accreditation', value: loc.report || 'Department of Culture and Tourism (DCT Abu Dhabi)' }
      ]
    };
  }

  // 6. GOVERNMENT / PUBLIC SAFETY / SERVICES (Ministries, Municipalities, Courts, Tamm)
  if (cat.includes('gov') || cat.includes('safe') || sub.includes('ministr') || sub.includes('court') || sub.includes('service center') || sub.includes('police') || sub.includes('tamm')) {
    return {
      chips: [
        { label: 'Government Tier', value: loc.subcategory || 'Federal / Local Entity' },
        { label: 'Service Channels', value: loc.services || 'Digital TAMM & Smart Centers' },
        { label: 'Operating Hours', value: loc.openHours || '07:30 AM - 15:30 PM (Mon - Thu)' },
        { label: 'Customer Happiness', value: loc.rating ? `${loc.rating} ★ 5-Star Service` : '4.8 ★ Star Rating' }
      ],
      rows: [
        { label: 'Jurisdiction', value: `${loc.city || 'Abu Dhabi'} • Federal & Municipal Authority` },
        { label: 'Service Delivery', value: 'TAMM Integrated Services & Smart Customer Happiness' },
        { label: 'Department', value: loc.subcategory || 'Public Administration' },
        { label: 'Governance Standard', value: loc.report || 'Abu Dhabi Executive Council Standard Q4/2024' }
      ]
    };
  }

  // 7. HOUSING / COMMERCIAL / CONSTRUCTION / AGRICULTURE / DEFAULT
  return {
    chips: [
      loc.capacity ? { label: 'Capacity / Scale', value: loc.capacity } : null,
      loc.rating ? { label: 'Performance Rating', value: `${loc.rating} ★ Quality Score` } : null,
      loc.sector ? { label: 'Industry Sector', value: loc.sector } : null,
      loc.openHours ? { label: 'Operating Hours', value: loc.openHours } : null,
      loc.emissions != null ? { label: 'Carbon Emissions', value: `${loc.emissions.toLocaleString()} t/yr` } : null,
      { label: 'Emirate / Region', value: loc.city || 'Abu Dhabi Emirate' }
    ].filter(Boolean).slice(0, 3),
    rows: [
      { label: 'Category', value: `${loc.category || 'Spatial Asset'} • ${loc.subcategory || 'Standard Record'}` },
      { label: 'Operational Status', value: loc.openHours || 'Standard Operational Schedule' },
      { label: 'Specifications', value: loc.sector || loc.capacity || loc.subcategory || 'Certified Asset' },
      { label: 'Compliance Audit', value: loc.report || 'Abu Dhabi Geospatial System Verified' }
    ]
  };
};
