import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/\r\n/g, '\n');

const pos = content.indexOf('className="structured-subtabs-bar"', 336000);
console.log('Pos:', pos);
if (pos !== -1) {
  console.log(content.slice(pos - 50, pos + 800));
}
