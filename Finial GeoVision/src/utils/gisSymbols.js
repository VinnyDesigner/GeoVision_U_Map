export const GIS_CATEGORY_COLORS = {
  Education: '#1D68F2',
  Healthcare: '#10B981',
  Emergency: '#EF4444',
  'Public Safety': '#EF4444',
  Government: '#6366F1',
  'Government Services': '#6366F1',
  Park: '#059669',
  Parks: '#059669',
  Environment: '#059669',
  Transport: '#F59E0B',
  Transportation: '#F59E0B',
  Tourism: '#06B6D4',
  Infrastructure: '#F97316',
  Housing: '#8B5CF6',
  Utilities: '#EAB308',
  Energy: '#EAB308',
  Climate: '#0284C7',
  Construction: '#D97706',
  Agriculture: '#84CC16',
  Employment: '#4F46E5',
  Commercial: '#8B5CF6',
  Industrial: '#F97316'
};

export const getGisPinSvg = (category, isSelected = false) => {
  const pinColor = GIS_CATEGORY_COLORS[category] || '#1D68F2';
  const c = (category || '').toLowerCase();

  let iconContent = '';
  if (c.includes('edu') || c.includes('school') || c.includes('charter') || c.includes('nursery') || c.includes('pod') || c.includes('univ')) {
    // Graduation Cap
    iconContent = `
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    `;
  } else if (c.includes('health') || c.includes('hosp') || c.includes('clinic') || c.includes('pharm') || c.includes('med')) {
    // Medical Heart / Cross
    iconContent = `
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="${pinColor}" stroke="${pinColor}" stroke-width="1.2"/>
    `;
  } else if (c.includes('trans') || c.includes('bus') || c.includes('metro') || c.includes('taxi') || c.includes('park') || c.includes('airport') || c.includes('flight')) {
    // Bus / Transit
    iconContent = `
      <rect width="16" height="14" x="4" y="4" rx="2" stroke="${pinColor}" stroke-width="2.6" fill="none"/>
      <path d="M4 10h16" stroke="${pinColor}" stroke-width="2.6"/>
      <circle cx="8" cy="14" r="1.5" fill="${pinColor}"/>
      <circle cx="16" cy="14" r="1.5" fill="${pinColor}"/>
      <path d="M6 18v2M18 18v2" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
    `;
  } else if (c.includes('env') || c.includes('park') || c.includes('protect') || c.includes('air') || c.includes('tree') || c.includes('garden') || c.includes('climat')) {
    // Leaf
    iconContent = `
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    `;
  } else if (c.includes('gov') || c.includes('ministr') || c.includes('court') || c.includes('embass') || c.includes('munici') || c.includes('service center')) {
    // Landmark / Court
    iconContent = `
      <line x1="2" x2="22" y1="20" y2="20" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
      <line x1="12" x2="12" y1="4" y2="10" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="m18 10 3-6-3-4-3 4 3 6Z" stroke="${pinColor}" stroke-width="2.6" stroke-linejoin="round" fill="none"/>
      <path d="m6 10 3-6-3-4-3 4 3 6Z" stroke="${pinColor}" stroke-width="2.6" stroke-linejoin="round" fill="none"/>
      <path d="M4 10h16" stroke="${pinColor}" stroke-width="2.6"/>
    `;
  } else if (c.includes('tour') || c.includes('hotel') || c.includes('museum') || c.includes('attract') || c.includes('mosque') || c.includes('palace') || c.includes('resort')) {
    // Star / Landmark
    iconContent = `
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="${pinColor}" stroke="${pinColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  } else if (c.includes('infra') || c.includes('bridge') || c.includes('road') || c.includes('port') || c.includes('light') || c.includes('construct')) {
    // Infrastructure
    iconContent = `
      <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      <path d="M4 15h16" stroke="${pinColor}" stroke-width="2.6"/>
      <path d="M10 3v16M14 3v16" stroke="${pinColor}" stroke-width="2.6"/>
    `;
  } else if (c.includes('safe') || c.includes('police') || c.includes('fire') || c.includes('defense') || c.includes('emerg')) {
    // Shield
    iconContent = `
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="${pinColor}" stroke="${pinColor}" stroke-width="1.5" stroke-linejoin="round"/>
    `;
  } else if (c.includes('util') || c.includes('power') || c.includes('water') || c.includes('solar') || c.includes('energ') || c.includes('telecom')) {
    // Zap / Energy
    iconContent = `
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="${pinColor}" stroke="${pinColor}" stroke-width="1.5" stroke-linejoin="round"/>
    `;
  } else if (c.includes('hous') || c.includes('resident') || c.includes('villa') || c.includes('build') || c.includes('employ') || c.includes('hq') || c.includes('free zone')) {
    // House
    iconContent = `
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <polyline points="9 22 9 12 15 12 15 22" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    `;
  } else if (c.includes('agri') || c.includes('farm') || c.includes('greenhouse') || c.includes('livestock')) {
    // Sprout
    iconContent = `
      <path d="M7 20h10" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M10 20c5.5-2.5.8-6.4 3-10" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" stroke="${pinColor}" stroke-width="2.6" stroke-linecap="round"/>
    `;
  } else {
    iconContent = `
      <circle cx="12" cy="12" r="10" stroke="${pinColor}" stroke-width="2.6" fill="none"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" stroke="${pinColor}" stroke-width="2.6"/>
      <path d="M2 12h20" stroke="${pinColor}" stroke-width="2.6"/>
    `;
  }

  return `
    <svg class="geovision-pin-svg" width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 40.5C17 40.5 31.5 25.5 31.5 15.5C31.5 7.49 25.01 1 17 1C8.99 1 2.5 7.49 2.5 15.5C2.5 25.5 17 40.5 17 40.5Z" 
            fill="${pinColor}" 
            stroke="#FFFFFF" 
            stroke-width="1.8" />
      <circle cx="17" cy="15.5" r="9.5" fill="#FFFFFF" />
      <g transform="translate(10.28, 8.78) scale(0.56)">
        ${iconContent}
      </g>
    </svg>
  `;
};

export const getGisCategorySymbolSvg = (cat, color = '#1d68f2') => {
  const c = (cat || '').toLowerCase();
  if (c.includes('edu') || c.includes('school') || c.includes('charter') || c.includes('nursery') || c.includes('pod') || c.includes('univ')) {
    // Graduation Cap
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
  }
  if (c.includes('health') || c.includes('hosp') || c.includes('clinic') || c.includes('pharm') || c.includes('med')) {
    // Medical Cross / Heart
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
  }
  if (c.includes('trans') || c.includes('bus') || c.includes('metro') || c.includes('taxi') || c.includes('park') || c.includes('airport') || c.includes('flight')) {
    // Vehicle / Transit / Bus
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="14" x="4" y="4" rx="2"/><path d="M4 10h16"/><circle cx="8" cy="14" r="1.2" fill="${color}" stroke="${color}"/><circle cx="16" cy="14" r="1.2" fill="${color}" stroke="${color}"/><path d="M6 18v2M18 18v2"/></svg>`;
  }
  if (c.includes('env') || c.includes('park') || c.includes('protect') || c.includes('air') || c.includes('tree') || c.includes('garden') || c.includes('climat')) {
    // Leaf / Ecological
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
  }
  if (c.includes('gov') || c.includes('ministr') || c.includes('court') || c.includes('embass') || c.includes('munici') || c.includes('service center')) {
    // Landmark / Court / Government
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="10"/><path d="m18 10 3-6-3-4-3 4 3 6Z"/><path d="m6 10 3-6-3-4-3 4 3 6Z"/><path d="M4 10h16"/></svg>`;
  }
  if (c.includes('tour') || c.includes('hotel') || c.includes('museum') || c.includes('attract') || c.includes('mosque') || c.includes('palace') || c.includes('resort')) {
    // Star / Compass / Landmark
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  if (c.includes('infra') || c.includes('bridge') || c.includes('road') || c.includes('port') || c.includes('light') || c.includes('construct')) {
    // Infrastructure Bridge / Anchor
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M4 15h16"/><path d="M10 3v16M14 3v16"/></svg>`;
  }
  if (c.includes('safe') || c.includes('police') || c.includes('fire') || c.includes('defense') || c.includes('emerg')) {
    // Shield
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
  }
  if (c.includes('util') || c.includes('power') || c.includes('water') || c.includes('solar') || c.includes('energ') || c.includes('telecom')) {
    // Zap / Energy
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  }
  if (c.includes('hous') || c.includes('resident') || c.includes('villa') || c.includes('build') || c.includes('employ') || c.includes('hq') || c.includes('free zone')) {
    // House / Office
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
  }
  if (c.includes('agri') || c.includes('farm') || c.includes('greenhouse') || c.includes('livestock')) {
    // Sprout / Agriculture
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;
};
