import fs from 'fs';

const filePath = 'd:/GeoVision/Finial GeoVision/src/services/spatialSearchService.js';
let content = fs.readFileSync(filePath, 'utf8');
const isCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Expand typoMap in normalizeUserSpatialQuery
const typoOldStart = `  // 3. Common English & Arabic typos / misspellings dictionary
  const typoMap = [`;

const typoNewSection = `  // 3. Common English & Arabic typos / misspellings dictionary
  const typoMap = [
    // Language & System Control Typos
    { regex: /\\b(?:languahe|lanugage|langauge|languge|languege|langage|lenguage|lenguaje|langugage|languges)\\b/gi, replacement: 'language' },
    { regex: /\\b(?:arbaic|arabick|arrabic|arabik|arabi|arbc)\\b/gi, replacement: 'arabic' },
    { regex: /\\b(?:englsih|engilsh|englsh|englis|englush)\\b/gi, replacement: 'english' },
    { regex: /\\b(?:chnage|chnge|chagne|chage|cahnge)\\b/gi, replacement: 'change' },
    { regex: /\\b(?:swich|siwtch|swtich|swtch)\\b/gi, replacement: 'switch' },
    { regex: /\\b(?:toggol|togle)\\b/gi, replacement: 'toggle' },
    { regex: /\\b(?:translat|traslate)\\b/gi, replacement: 'translate' },
    { regex: /\\b(?:thme|teme|theem)\\b/gi, replacement: 'theme' },
    { regex: /\\b(?:mdoe|mde)\\b/gi, replacement: 'mode' },
    { regex: /\\b(?:drk|drak)\\b/gi, replacement: 'dark' },
    { regex: /\\b(?:lght|lihgt)\\b/gi, replacement: 'light' },
    { regex: /\\b(?:satelite|satallite|statellite|satilite|satelitte)\\b/gi, replacement: 'satellite' },
    { regex: /\\b(?:basmap|besemap|base-map)\\b/gi, replacement: 'basemap' },
    { regex: /\\b(?:streats|streeet|strets)\\b/gi, replacement: 'streets' },
    { regex: /\\b(?:prnt|prnit|pritn|pirnt|prnting)\\b/gi, replacement: 'print' },
    { regex: /\\b(?:exprot|exprt|expor)\\b/gi, replacement: 'export' },
    { regex: /\\b(?:donload|donwload|downlod|dawnload)\\b/gi, replacement: 'download' },
    { regex: /\\b(?:legnd|legned|lejend)\\b/gi, replacement: 'legend' },
    { regex: /\\b(?:zoon|zom|zooom)\\b/gi, replacement: 'zoom' },
    { regex: /\\b(?:claer|cleer|clrear|cler)\\b/gi, replacement: 'clear' },
    { regex: /\\b(?:rouet|rout|rute)\\b/gi, replacement: 'route' },
    { regex: /\\b(?:naviagte|navgate|navigtion|directon|direciton)\\b/gi, replacement: 'direction' },
    { regex: /\\b(?:loaction|locaton|locatin|locatoin)\\b/gi, replacement: 'location' },
    { regex: /\\b(?:anayltics|analitics|analytcs|anylitics)\\b/gi, replacement: 'analytics' },
    { regex: /\\b(?:serach|sreach|serch|saerch)\\b/gi, replacement: 'search' },
`;

if (content.includes(typoOldStart)) {
  content = content.replace(typoOldStart, typoNewSection);
  console.log('1. Updated typoMap in normalizeUserSpatialQuery');
} else {
  console.log('1. Could not find typoMap start');
}

// 2. Update Language, Theme and App Controls in parseSingleApplicationControlClause
const oldLangBlock = `    // 3. LANGUAGE CONTROL
    // Arabic
    const isArabicLangReq =
      cLower === 'arabic' ||
      cLower === 'العربية' ||
      cLower === 'اللغة العربية' ||
      cLower.includes('language to arabic') ||
      cLower.includes('switch to arabic') ||
      cLower.includes('change to arabic') ||
      cLower.includes('use arabic') ||
      cLower.includes('in arabic') ||
      cLower.includes('show in arabic') ||
      cLower.includes('arabic language') ||
      cLower.includes('اللغة إلى العربية') ||
      cLower.includes('التحويل إلى العربية') ||
      cLower.includes('التبديل إلى العربية') ||
      cLower.includes('استخدم العربية') ||
      cLower.includes('باللغة العربية');

    if (isArabicLangReq) {
      return {
        action: { type: 'CHANGE_LANGUAGE', lang: 'ar' },
        confirmationEn: 'Done — switched application language to Arabic',
        confirmationAr: 'تم تغيير لغة التطبيق إلى العربية بنجاح'
      };
    }

    // English
    const isEnglishLangReq =
      cLower === 'english' ||
      cLower === 'الإنجليزية' ||
      cLower === 'الانجليزية' ||
      cLower === 'اللغة الإنجليزية' ||
      cLower === 'اللغة الانجليزية' ||
      cLower.includes('language to english') ||
      cLower.includes('switch to english') ||
      cLower.includes('change to english') ||
      cLower.includes('use english') ||
      cLower.includes('in english') ||
      cLower.includes('show in english') ||
      cLower.includes('english language') ||
      cLower.includes('اللغة إلى الإنجليزية') ||
      cLower.includes('التحويل إلى الإنجليزية') ||
      cLower.includes('التبديل إلى الإنجليزية') ||
      cLower.includes('استخدم الإنجليزية') ||
      cLower.includes('باللغة الإنجليزية');

    if (isEnglishLangReq) {
      return {
        action: { type: 'CHANGE_LANGUAGE', lang: 'en' },
        confirmationEn: 'Done — switched application language to English',
        confirmationAr: 'تم التبديل إلى اللغة الإنجليزية بنجاح'
      };
    }`;

const newLangBlock = `    // 3. LANGUAGE CONTROL
    // Arabic
    const isArabicLangReq =
      cLower === 'arabic' ||
      cLower === 'العربية' ||
      cLower === 'اللغة العربية' ||
      cLower === 'عربي' ||
      cLower === 'بالعربي' ||
      /\\b(?:change|switch|set|turn|convert|translate|make|use|show|put|toggle|load|update|select|to|into|in)\\b.*?\\b(?:arabic|العربية|عربي)\\b/i.test(cLower) ||
      /\\b(?:arabic|العربية|عربي)\\b.*?\\b(?:language|lang|mode|ui|app|translation|view|version|النسخة|اللغة)\\b/i.test(cLower) ||
      /\\b(?:language|lang|اللغة)\\b.*?\\b(?:arabic|العربية|عربي)\\b/i.test(cLower) ||
      cLower.includes('language to arabic') ||
      cLower.includes('switch to arabic') ||
      cLower.includes('change to arabic') ||
      cLower.includes('use arabic') ||
      cLower.includes('in arabic') ||
      cLower.includes('show in arabic') ||
      cLower.includes('arabic language') ||
      cLower.includes('اللغة إلى العربية') ||
      cLower.includes('التحويل إلى العربية') ||
      cLower.includes('التبديل إلى العربية') ||
      cLower.includes('استخدم العربية') ||
      cLower.includes('باللغة العربية') ||
      cLower.includes('حول إلى العربية') ||
      cLower.includes('حول للعربية') ||
      cLower.includes('غير إلى العربية') ||
      cLower.includes('غير للعربية') ||
      cLower.includes('غيّر إلى العربية') ||
      cLower.includes('تغيير إلى العربية');

    if (isArabicLangReq) {
      return {
        action: { type: 'CHANGE_LANGUAGE', lang: 'ar' },
        confirmationEn: 'Done — switched application language to Arabic',
        confirmationAr: 'تم تغيير لغة التطبيق إلى العربية بنجاح'
      };
    }

    // English
    const isEnglishLangReq =
      cLower === 'english' ||
      cLower === 'الإنجليزية' ||
      cLower === 'الانجليزية' ||
      cLower === 'اللغة الإنجليزية' ||
      cLower === 'اللغة الانجليزية' ||
      cLower === 'انجليزي' ||
      cLower === 'إنجليزي' ||
      /\\b(?:change|switch|set|turn|convert|translate|make|use|show|put|toggle|load|update|select|to|into|in)\\b.*?\\b(?:english|الإنجليزية|الانجليزية|انجليزي|إنجليزي)\\b/i.test(cLower) ||
      /\\b(?:english|الإنجليزية|الانجليزية|انجليزي|إنجليزي)\\b.*?\\b(?:language|lang|mode|ui|app|translation|view|version|النسخة|اللغة)\\b/i.test(cLower) ||
      /\\b(?:language|lang|اللغة)\\b.*?\\b(?:english|الإنجليزية|الانجليزية|انجليزي|إنجليزي)\\b/i.test(cLower) ||
      cLower.includes('language to english') ||
      cLower.includes('switch to english') ||
      cLower.includes('change to english') ||
      cLower.includes('use english') ||
      cLower.includes('in english') ||
      cLower.includes('show in english') ||
      cLower.includes('english language') ||
      cLower.includes('اللغة إلى الإنجليزية') ||
      cLower.includes('التحويل إلى الإنجليزية') ||
      cLower.includes('التبديل إلى الإنجليزية') ||
      cLower.includes('استخدم الإنجليزية') ||
      cLower.includes('باللغة الإنجليزية') ||
      cLower.includes('حول إلى الإنجليزية') ||
      cLower.includes('حول للإنجليزية') ||
      cLower.includes('غير إلى الإنجليزية') ||
      cLower.includes('غير للإنجليزية') ||
      cLower.includes('غيّر إلى الإنجليزية') ||
      cLower.includes('تغيير إلى الإنجليزية');

    if (isEnglishLangReq) {
      return {
        action: { type: 'CHANGE_LANGUAGE', lang: 'en' },
        confirmationEn: 'Done — switched application language to English',
        confirmationAr: 'تم التبديل إلى اللغة الإنجليزية بنجاح'
      };
    }`;

if (content.includes(oldLangBlock)) {
  content = content.replace(oldLangBlock, newLangBlock);
  console.log('2. Updated Language Control in parseSingleApplicationControlClause');
} else {
  console.log('2. Could not find oldLangBlock');
}

if (isCRLF) {
  content = content.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully written updates to spatialSearchService.js');
