import fs from 'fs';

// 1. Update App.jsx
const appPath = 'd:/GeoVision/Finial GeoVision/src/App.jsx';
let appContent = fs.readFileSync(appPath, 'utf8');

// Update getChipIcon to use currentColor
appContent = appContent.replace(
  "const chipIconColor = theme === 'dark' ? '#ffffff' : '#004B87';",
  "const chipIconColor = 'currentColor';"
);

// Update history places badge from chip style to plain text style
const oldPlacesBadgeRegex = /<span[\r\n\s]*className="history-places-badge"[\r\n\s]*style=\{\{[\s\S]*?\}\}[\r\n\s]*>[\r\n\s]*(\{t\.placesMatch \? t\.placesMatch\(matchCount\) : `\$\{matchCount\} \$\{lang === 'ar' \? 'أماكن متطابقة' : 'places match'\}`\})[\r\n\s]*<\/span>/g;

const newPlacesText = `<span
                                                      className="history-places-text"
                                                      style={{
                                                        fontSize: '10px',
                                                        fontWeight: 500,
                                                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.65)' : '#64748B',
                                                        whiteSpace: 'nowrap',
                                                        textAlign: lang === 'ar' ? 'right' : 'left'
                                                      }}
                                                    >
                                                      $1
                                                    </span>`;

appContent = appContent.replaceAll(oldPlacesBadgeRegex, newPlacesText);
fs.writeFileSync(appPath, appContent, 'utf8');
console.log("App.jsx updated successfully!");

// 2. Update index.css for hover SVG colors
const cssPath = 'd:/GeoVision/Finial GeoVision/src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const hoverRules = `
.structured-radius-chip-btn:hover svg,
.structured-radius-chip-btn:hover svg path,
.structured-radius-chip-btn:hover svg polygon,
.structured-radius-chip-btn:hover svg polyline,
.structured-radius-chip-btn:hover svg line,
.structured-radius-chip-btn:hover svg circle,
.structured-radius-chip-btn:hover .structured-chip-icon,
.structured-chip-btn:hover svg,
.structured-chip-btn:hover svg path {
  color: #FFFFFF !important;
  stroke: #FFFFFF !important;
}
`;

if (!cssContent.includes('.structured-radius-chip-btn:hover svg')) {
  cssContent += '\n' + hoverRules;
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log("index.css updated with hover SVG rules!");
} else {
  // Replace or append to ensure it covers all selectors
  cssContent = cssContent.replace(
    `.structured-radius-chip-btn:hover {
  background: #002B5B !important;
  color: #FFFFFF !important;
  border-color: #002B5B !important;
}`,
    `.structured-radius-chip-btn:hover {
  background: #002B5B !important;
  color: #FFFFFF !important;
  border-color: #002B5B !important;
}

.structured-radius-chip-btn:hover svg,
.structured-radius-chip-btn:hover svg path,
.structured-radius-chip-btn:hover svg polygon,
.structured-radius-chip-btn:hover svg polyline,
.structured-radius-chip-btn:hover svg line,
.structured-radius-chip-btn:hover svg circle,
.structured-radius-chip-btn:hover .structured-chip-icon {
  color: #FFFFFF !important;
  stroke: #FFFFFF !important;
}`
  );
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log("index.css updated successfully!");
}
