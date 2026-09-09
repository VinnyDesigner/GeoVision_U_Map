import fs from 'fs';

const app = fs.readFileSync('src/App.jsx', 'utf8');

console.log('1. Aside left history panel wrapper present:', app.includes('map-left-history-panel-wrapper'));
console.log('2. aiPanelSubView history title present:', app.includes("aiPanelSubView === 'history'"));
console.log('3. Back button in history header present:', app.includes("onClick={() => setAiPanelSubView('chat')}"));
console.log('4. Pinned accordion in history present:', app.includes('isPinnedAccordionOpen'));
console.log('5. Recents accordion in history present:', app.includes('isRecentAccordionOpen'));
console.log('6. Search filter input present:', app.includes('historyFilterQuery'));
console.log('7. Map controls bottom bar fixed left 20px:', app.includes("left: lang === 'ar' ? 'auto' : '20px'"));
console.log('8. Layers popovers fixed left 74px:', app.includes("left: lang === 'ar' ? 'auto' : '74px'"));
