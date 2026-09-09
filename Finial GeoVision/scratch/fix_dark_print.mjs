import fs from 'fs';
import path from 'path';

const filePath = 'd:/GeoVision/Finial GeoVision/src/index.css';
let content = fs.readFileSync(filePath, 'utf8');

const target = `[data-theme="dark"] .print-config-label,
.dark-theme .print-config-label,
.dark .print-config-label {
  color: #f8fafc !important;

  color: #e2e8f0 !important;
}`;

const replacement = `[data-theme="dark"] .print-config-label,
.dark-theme .print-config-label,
.dark .print-config-label {
  color: #f8fafc !important;
}

[data-theme="dark"] .print-dropdown-select,
.dark-theme .print-dropdown-select,
.dark .print-dropdown-select {
  background: rgba(15, 23, 42, 0.85) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  color: #f8fafc !important;
}

[data-theme="dark"] .print-dropdown-select:hover,
.dark-theme .print-dropdown-select:hover,
.dark .print-dropdown-select:hover {
  border-color: #38bdf8 !important;
  background: rgba(30, 41, 59, 0.9) !important;
}

[data-theme="dark"] .print-dropdown-select:focus,
.dark-theme .print-dropdown-select:focus,
.dark .print-dropdown-select:focus {
  border-color: #38bdf8 !important;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25) !important;
}

[data-theme="dark"] .print-dropdown-select option,
.dark-theme .print-dropdown-select option,
.dark .print-dropdown-select option {
  background: #0f172a !important;
  color: #f8fafc !important;
}

[data-theme="dark"] .print-dropdown-chevron,
.dark-theme .print-dropdown-chevron,
.dark .print-dropdown-chevron {
  color: #cbd5e1 !important;
}

[data-theme="dark"] .print-check-item,
.dark-theme .print-check-item,
.dark .print-check-item {
  color: #e2e8f0 !important;
}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('SUCCESS: Dark theme print dropdown styles updated');
} else {
  console.log('FAILED: Target not found');
}
