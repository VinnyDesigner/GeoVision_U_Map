import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const isCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// Replace overview subtab click in card
content = content.replace(
  `onClick={(e) => {
                                                              e.stopPropagation();
                                                              setChatMessages(prev => prev.map((m, i) => {
                                                                if (i === idx) {
                                                                  const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'overview' } : it);
                                                                  return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                }
                                                                return m;
                                                              }));
                                                            }}`,
  `onClick={(e) => {
                                                              e.stopPropagation();
                                                              setActiveRoute(null);
                                                              setIsNavigating(false);
                                                              setNavStepIndex(0);
                                                              setChatMessages(prev => prev.map((m, i) => {
                                                                if (i === idx) {
                                                                  const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'overview' } : it);
                                                                  return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                }
                                                                return m;
                                                              }));
                                                            }}`
);

// Replace details subtab click in card
content = content.replace(
  `onClick={(e) => {
                                                              e.stopPropagation();
                                                              setChatMessages(prev => prev.map((m, i) => {
                                                                if (i === idx) {
                                                                  const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'details' } : it);
                                                                  return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                }
                                                                return m;
                                                              }));
                                                            }}`,
  `onClick={(e) => {
                                                              e.stopPropagation();
                                                              setActiveRoute(null);
                                                              setIsNavigating(false);
                                                              setNavStepIndex(0);
                                                              setChatMessages(prev => prev.map((m, i) => {
                                                                if (i === idx) {
                                                                  const newItems = m.structuredResults.items.map(it => it.id === item.id ? { ...it, activeDetailTab: 'details' } : it);
                                                                  return { ...m, structuredResults: { ...m.structuredResults, items: newItems } };
                                                                }
                                                                return m;
                                                              }));
                                                            }}`
);

if (isCRLF) {
  content = content.replace(/\n/g, '\r\n');
}
fs.writeFileSync(filePath, content, 'utf8');
console.log('Done applying replacements to card subtabs!');
