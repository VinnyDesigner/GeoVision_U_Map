import fs from 'fs';

const appPath = 'd:/GeoVision/Finial GeoVision/src/App.jsx';
let content = fs.readFileSync(appPath, 'utf8');

// Replace using regex that handles both CRLF and LF
const oldBottomRowRegex = /\{\/\*\s*Bottom Row: Category badge on left, Time on right\s*\*\/\}[\r\n\s]*<div style=\{\{\s*display:\s*'flex',\s*alignItems:\s*'center',\s*justifyContent:\s*'space-between',\s*width:\s*'100%',\s*margin:\s*0,\s*gap:\s*'8px'\s*\}\}>[\r\n\s]*<div style=\{\{\s*display:\s*'flex',\s*alignItems:\s*'center',\s*gap:\s*'7px',\s*minWidth:\s*0,\s*overflow:\s*'hidden'\s*\}\}>[\r\n\s]*<span[\r\n\s]*className="history-category-badge"[\r\n\s]*style=\{\{[\s\S]*?\}\}[\r\n\s]*>[\r\n\s]*\{t\.getCatName\(item\.category\s*\|\|\s*'General'\)\}[\r\n\s]*<\/span>[\r\n\s]*<\/div>[\r\n\s]*<span style=\{\{\s*fontSize:\s*'10px',\s*color:\s*theme === 'dark' \? 'rgba\(255, 255, 255, 0\.55\)' : '#94A3B8',\s*flexShrink:\s*0,\s*whiteSpace:\s*'nowrap'\s*\}\}>[\r\n\s]*\{t\.timeAgo\(item\.timestamp\s*\|\|\s*'Just now'\)\}[\r\n\s]*<\/span>[\r\n\s]*<\/div>/g;

const newBottomRow = `{/* Bottom Row: Places match badge + Category badge on left, Time on right */}
                                               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: 0, gap: '6px' }}>
                                                 <div style={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0, overflow: 'hidden', flexWrap: 'nowrap' }}>
                                                   <span
                                                     className="history-places-badge"
                                                     style={{
                                                       fontSize: '9.5px',
                                                       color: theme === 'dark' ? '#38bdf8' : '#004B87',
                                                       background: theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(0, 75, 135, 0.08)',
                                                       border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(0, 75, 135, 0.18)',
                                                       padding: '1.5px 5.5px',
                                                       borderRadius: '4px',
                                                       fontWeight: 600,
                                                       display: 'inline-block',
                                                       whiteSpace: 'nowrap',
                                                       textAlign: lang === 'ar' ? 'right' : 'left'
                                                     }}
                                                   >
                                                     {t.placesMatch ? t.placesMatch(matchCount) : \`\${matchCount} \${lang === 'ar' ? 'أماكن متطابقة' : 'places match'}\`}
                                                   </span>
                                                   <span
                                                     className="history-category-badge"
                                                     style={{
                                                       fontSize: '9.5px',
                                                       color: iconConfig.color,
                                                       background: iconConfig.badgeBg,
                                                       border: \`1px solid \${iconConfig.border || 'transparent'}\`,
                                                       padding: '1.5px 5.5px',
                                                       borderRadius: '4px',
                                                       fontWeight: 600,
                                                       display: 'inline-block',
                                                       whiteSpace: 'nowrap',
                                                       textAlign: lang === 'ar' ? 'right' : 'left'
                                                     }}
                                                   >
                                                     {t.getCatName(item.category || 'General')}
                                                   </span>
                                                 </div>
                                                 <span style={{ fontSize: '10px', color: theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : '#94A3B8', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                                   {t.timeAgo(item.timestamp || 'Just now')}
                                                 </span>
                                               </div>`;

const matches = content.match(oldBottomRowRegex);
console.log(`Found ${matches ? matches.length : 0} matches for oldBottomRow`);

if (matches && matches.length > 0) {
  content = content.replaceAll(oldBottomRowRegex, newBottomRow);
  fs.writeFileSync(appPath, content, 'utf8');
  console.log("Successfully replaced all matches!");
}
