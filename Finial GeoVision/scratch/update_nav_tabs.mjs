import fs from 'fs';

const cssPath = 'd:/GeoVision/Finial GeoVision/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

const target2 = `.landing-nav-item:hover .geovision-gradient-icon-wrapper,
.landing-lang-btn:hover .geovision-gradient-icon-wrapper,`;

const replacement2 = `.landing-nav-item.active .geovision-gradient-icon-wrapper,
.landing-nav-item:hover .geovision-gradient-icon-wrapper,
.landing-lang-btn:hover .geovision-gradient-icon-wrapper,`;

const target3 = `.map-glass-icon-btn.active img {
  filter: brightness(0) invert(1) !important;
}`;

const replacement3 = `.map-glass-icon-btn.active img,
.landing-nav-item.active img {
  filter: brightness(0) invert(1) !important;
}`;

let normalized = css.replace(/\r\n/g, '\n');
if (normalized.includes(target2.replace(/\r\n/g, '\n'))) {
  normalized = normalized.replace(target2.replace(/\r\n/g, '\n'), replacement2);
}
if (normalized.includes(target3.replace(/\r\n/g, '\n'))) {
  normalized = normalized.replace(target3.replace(/\r\n/g, '\n'), replacement3);
}

fs.writeFileSync(cssPath, normalized, 'utf8');
console.log('Icon states updated successfully');
