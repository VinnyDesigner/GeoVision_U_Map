import fs from 'fs';

const cssPath = 'd:/GeoVision/Finial GeoVision/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update .route-details-pane
const targetRoutePane = `.route-details-pane {
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  padding: 12px 14px !important;
  background: rgba(240, 246, 255, 0.5) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(29, 104, 242, 0.18) !important;
  box-sizing: border-box !important;
  font-family: inherit !important;
  transition: all 0.2s ease !important;
}`;

const replacementRoutePane = `.route-details-pane {
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  padding: 0 !important;
  background: transparent !important;
  border-radius: 0 !important;
  border: none !important;
  box-sizing: border-box !important;
  font-family: inherit !important;
  transition: all 0.2s ease !important;
}`;

// 2. Update .profile-dropdown width
const targetProfileDropdown = `.profile-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 200px;
  background: #FFFFFF;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(2, 46, 91, 0.16), 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(2, 46, 91, 0.08);
  padding: 8px 6px;
  z-index: 2002 !important;
  display: flex;
  flex-direction: column;
  gap: 3px;
  box-sizing: border-box;
  animation: profileDropdownFade 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-origin: top right;
}`;

const replacementProfileDropdown = `.profile-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 135px;
  width: auto;
  max-width: 155px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(2, 46, 91, 0.16), 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(2, 46, 91, 0.08);
  padding: 5px;
  z-index: 2002 !important;
  display: flex;
  flex-direction: column;
  gap: 3px;
  box-sizing: border-box;
  animation: profileDropdownFade 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-origin: top right;
}`;

let normalized = css.replace(/\r\n/g, '\n');

if (normalized.includes(targetRoutePane.replace(/\r\n/g, '\n'))) {
  normalized = normalized.replace(targetRoutePane.replace(/\r\n/g, '\n'), replacementRoutePane);
  console.log('Updated .route-details-pane successfully');
} else {
  console.warn('targetRoutePane not found');
}

if (normalized.includes(targetProfileDropdown.replace(/\r\n/g, '\n'))) {
  normalized = normalized.replace(targetProfileDropdown.replace(/\r\n/g, '\n'), replacementProfileDropdown);
  console.log('Updated .profile-dropdown successfully');
} else {
  console.warn('targetProfileDropdown not found');
}

fs.writeFileSync(cssPath, normalized, 'utf8');
