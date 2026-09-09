import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/services/spatialSearchService.js');
const code = fs.readFileSync(filePath, 'utf8');

// Let's search for "slice(0, 5)" or any place returning 5 items or padding items
const regex = /(slice\(0,\s*5\)|top\s*5|count\s*===\s*5|\.fill\(|\.map\(.*id:)/g;
let match;
while ((match = regex.exec(code)) !== null) {
  console.log(`Match at index ${match.index}:`, code.slice(match.index - 50, match.index + 100));
}
