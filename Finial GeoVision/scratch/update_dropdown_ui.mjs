import fs from 'fs';
import path from 'path';

const appPath = 'd:/GeoVision/Finial GeoVision/src/App.jsx';
let content = fs.readFileSync(appPath, 'utf8');

// 1. Replace query menu positioning
const oldQueryPos = `const rect = e.currentTarget.getBoundingClientRect();
                                                          const menuWidth = 160;
                                                          if (lang === 'ar') {
                                                            setQueryMenuPos({ top: Math.max(10, rect.top - 4), left: Math.min(window.innerWidth - menuWidth - 10, rect.right + 10) });
                                                          } else {
                                                            setQueryMenuPos({ top: Math.max(10, rect.top - 4), left: Math.max(10, rect.left - menuWidth - 5) });
                                                          }
                                                          setActiveQueryMenuId(item.id);`;

const newQueryPos = `const rect = e.currentTarget.getBoundingClientRect();
                                                          const menuWidth = 155;
                                                          const menuHeight = 145;
                                                          let top = rect.bottom + 4;
                                                          if (top + menuHeight > window.innerHeight - 10) {
                                                            top = Math.max(10, rect.top - menuHeight - 4);
                                                          }
                                                          let left;
                                                          if (lang === 'ar') {
                                                            left = Math.min(window.innerWidth - menuWidth - 10, Math.max(10, rect.left));
                                                          } else {
                                                            left = Math.max(10, Math.min(window.innerWidth - menuWidth - 10, rect.right - menuWidth));
                                                          }
                                                          setQueryMenuPos({ top, left });
                                                          setActiveQueryMenuId(item.id);`;

if (!content.includes(oldQueryPos)) {
  console.error("Could not find oldQueryPos in App.jsx");
} else {
  content = content.replace(oldQueryPos, newQueryPos);
  console.log("Replaced oldQueryPos successfully");
}

// 2. Replace history menu positioning
const oldHistoryPos = `const rect = e.currentTarget.getBoundingClientRect();
                                                          const menuWidth = 160;
                                                          if (lang === 'ar') {
                                                            setHistoryMenuPos({ top: Math.max(10, rect.top - 4), left: Math.min(window.innerWidth - menuWidth - 10, rect.right + 10) });
                                                          } else {
                                                            setHistoryMenuPos({ top: Math.max(10, rect.top - 4), left: Math.max(10, rect.left - menuWidth - 5) });
                                                          }
                                                          setActiveHistoryMenuId(item.id);`;

const newHistoryPos = `const rect = e.currentTarget.getBoundingClientRect();
                                                          const menuWidth = 155;
                                                          const menuHeight = 145;
                                                          let top = rect.bottom + 4;
                                                          if (top + menuHeight > window.innerHeight - 10) {
                                                            top = Math.max(10, rect.top - menuHeight - 4);
                                                          }
                                                          let left;
                                                          if (lang === 'ar') {
                                                            left = Math.min(window.innerWidth - menuWidth - 10, Math.max(10, rect.left));
                                                          } else {
                                                            left = Math.max(10, Math.min(window.innerWidth - menuWidth - 10, rect.right - menuWidth));
                                                          }
                                                          setHistoryMenuPos({ top, left });
                                                          setActiveHistoryMenuId(item.id);`;

if (!content.includes(oldHistoryPos)) {
  console.error("Could not find oldHistoryPos in App.jsx");
} else {
  content = content.replace(oldHistoryPos, newHistoryPos);
  console.log("Replaced oldHistoryPos successfully");
}

// 3. Replace favorite icon color in saved queries dropdown
const oldHeart = `<Heart size={13} color={theme === 'dark' ? '#EF4444' : '#DC2626'} fill={item.isFavorite ? (theme === 'dark' ? '#EF4444' : '#DC2626') : 'none'} strokeWidth={2} />`;
const newHeart = `<Heart size={13} color={theme === 'dark' ? '#38bdf8' : '#004B87'} fill={item.isFavorite ? (theme === 'dark' ? '#38bdf8' : '#004B87') : 'none'} strokeWidth={2} />`;

if (!content.includes(oldHeart)) {
  console.error("Could not find oldHeart in App.jsx");
} else {
  content = content.replace(oldHeart, newHeart);
  console.log("Replaced oldHeart successfully");
}

// 4. Update rename and delete in both dropdowns
content = content.replaceAll('{t.renameQuery}', "{t.renameQuery || t.rename || 'Rename'}");
content = content.replaceAll('{t.deleteQuery}', "{t.deleteQuery || t.delete || 'Delete'}");
content = content.replaceAll('{t.runQuery}', "{t.runQuery || 'Run Query'}");

fs.writeFileSync(appPath, content, 'utf8');
console.log("App.jsx updated successfully!");
