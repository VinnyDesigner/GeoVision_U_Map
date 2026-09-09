import fs from 'fs';
import { execSync } from 'child_process';

const content = execSync('git show "HEAD:Finial GeoVision/src/App.jsx"', { maxBuffer: 10 * 1024 * 1024 }).toString('utf8');
fs.writeFileSync('scratch/head_app.jsx', content, 'utf8');
console.log('Saved head_app.jsx successfully, bytes:', content.length);
