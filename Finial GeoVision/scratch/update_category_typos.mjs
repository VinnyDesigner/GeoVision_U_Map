import fs from 'fs';

const filePath = 'd:/GeoVision/Finial GeoVision/src/services/spatialSearchService.js';
let content = fs.readFileSync(filePath, 'utf8');
const isCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

const typoOldCategoryBlock = `    // Categories & facility types
    { regex: /\\b(?:centar|centre|centr|cntr)\\b/gi, replacement: 'center' },
    { regex: /\\b(?:centars|centres|centrs|cntrs)\\b/gi, replacement: 'centers' },
    { regex: /\\b(?:hosptial|hospitl|hosptl|hospita|hsopital)\\b/gi, replacement: 'hospital' },
    { regex: /\\b(?:hosptials|hospitls|hosptls|hospitas)\\b/gi, replacement: 'hospitals' },
    { regex: /\\b(?:pharamcy|pharmcy|parmacy|phramacy|pharmaci|farmacy)\\b/gi, replacement: 'pharmacy' },
    { regex: /\\b(?:pharamcies|pharmcys|parmacies|pharmacys)\\b/gi, replacement: 'pharmacies' },
    { regex: /\\b(?:clinc|clinck)\\b/gi, replacement: 'clinic' },
    { regex: /\\b(?:clincs|clincks)\\b/gi, replacement: 'clinics' },
    { regex: /\\b(?:scool|schol|skool|shcool|shool)\\b/gi, replacement: 'school' },
    { regex: /\\b(?:scools|schols|skools|shschools)\\b/gi, replacement: 'schools' },
    { regex: /\\b(?:universty|univercity)\\b/gi, replacement: 'university' },
    { regex: /\\b(?:universties|univercities|univercitys)\\b/gi, replacement: 'universities' },
    { regex: /\\b(?:staiton|staton|staion|statio|statn)\\b/gi, replacement: 'station' },
    { regex: /\\b(?:staitons|statons|staions|statns)\\b/gi, replacement: 'stations' },
    { regex: /\\b(?:vehical|vehecle|vehcle|vehicl)\\b/gi, replacement: 'vehicle' },
    { regex: /\\b(?:vehicals|vehecles|vehcles|vehicls)\\b/gi, replacement: 'vehicles' },
    { regex: /\\b(?:inspextion|inspeciton|inspecton|inspetion)\\b/gi, replacement: 'inspection' },
    { regex: /\\b(?:inspextions|inspecitons|inspectons)\\b/gi, replacement: 'inspections' },
    { regex: /\\b(?:emergancy|emergenci|imargency)\\b/gi, replacement: 'emergency' },
    { regex: /\\b(?:goverment|govrenment|govrnment|govrment)\\b/gi, replacement: 'government' },
    { regex: /\\b(?:facilty|faclity)\\b/gi, replacement: 'facility' },
    { regex: /\\b(?:facilties|faclities)\\b/gi, replacement: 'facilities' },
    { regex: /\\b(?:distric|distict|distrct)\\b/gi, replacement: 'district' },
    { regex: /\\b(?:districs|disticts|distrcts)\\b/gi, replacement: 'districts' },
    { regex: /\\b(?:direciton|directon|directin)\\b/gi, replacement: 'direction' },
    { regex: /\\b(?:direcitons|directons|directins)\\b/gi, replacement: 'directions' },
    { regex: /\\b(?:tution|tutition)\\b/gi, replacement: 'tuition' },
    { regex: /\\b(?:curriculm|curriculam|curiculum)\\b/gi, replacement: 'curriculum' },
    { regex: /\\b(?:resturant|restraunt|restaraunt)\\b/gi, replacement: 'restaurant' },
    { regex: /\\b(?:resturants|restraunts|restaraunts)\\b/gi, replacement: 'restaurants' },

    // Geographic names
    { regex: /\\b(?:khalfia|khalifia|khalifah|kalifa|khelifa)\\b/gi, replacement: 'khalifa' },
    { regex: /\\b(?:mushreef|mushref|moshrif)\\b/gi, replacement: 'mushrif' },
    { regex: /\\b(?:mussafa|musafah|musaffah|mussaffa)\\b/gi, replacement: 'musaffah' },
    { regex: /\\b(?:saadiyet|sadiyat|saadiat)\\b/gi, replacement: 'saadiyat' },
    { regex: /\\b(?:bateen|albateen|batin|al\\s*batin)\\b/gi, replacement: 'al bateen' },
    { regex: /\\b(?:reem|alreem)\\b/gi, replacement: 'al reem' },
    { regex: /\\b(?:dhafra|aldhafra|dafra|al\\s*dafra)\\b/gi, replacement: 'al dhafra' },
    { regex: /\\b(?:ruweis|rwais)\\b/gi, replacement: 'ruwais' },
    { regex: /\\b(?:khalidya|khalidiya|khalidiyah)\\b/gi, replacement: 'al khalidiyah' },`;

const typoNewCategoryBlock = `    // Categories & facility types
    { regex: /\\b(?:centar|centre|centr|cntr)\\b/gi, replacement: 'center' },
    { regex: /\\b(?:centars|centres|centrs|cntrs)\\b/gi, replacement: 'centers' },
    { regex: /\\b(?:hosptial|hospitl|hosptl|hospita|hsopital|hostipal|hostipl)\\b/gi, replacement: 'hospital' },
    { regex: /\\b(?:hosptials|hospitls|hosptls|hospitas|hostipals|hostipls)\\b/gi, replacement: 'hospitals' },
    { regex: /\\b(?:pharamcy|pharmcy|parmacy|phramacy|pharmaci|farmacy|pharmasy|farmaci)\\b/gi, replacement: 'pharmacy' },
    { regex: /\\b(?:pharamcies|pharmcys|parmacies|pharmacys|farmacies)\\b/gi, replacement: 'pharmacies' },
    { regex: /\\b(?:clinc|clinck|clnic)\\b/gi, replacement: 'clinic' },
    { regex: /\\b(?:clincs|clincks|clnics)\\b/gi, replacement: 'clinics' },
    { regex: /\\b(?:scool|schol|skool|shcool|shool|schoole)\\b/gi, replacement: 'school' },
    { regex: /\\b(?:scools|schols|skools|shschools|shools)\\b/gi, replacement: 'schools' },
    { regex: /\\b(?:universty|univercity|univrsity|univesity)\\b/gi, replacement: 'university' },
    { regex: /\\b(?:universties|univercities|univercitys)\\b/gi, replacement: 'universities' },
    { regex: /\\b(?:staiton|staton|staion|statio|statn)\\b/gi, replacement: 'station' },
    { regex: /\\b(?:staitons|statons|staions|statns)\\b/gi, replacement: 'stations' },
    { regex: /\\b(?:vehical|vehecle|vehcle|vehicl)\\b/gi, replacement: 'vehicle' },
    { regex: /\\b(?:vehicals|vehecles|vehcles|vehicls)\\b/gi, replacement: 'vehicles' },
    { regex: /\\b(?:inspextion|inspeciton|inspecton|inspetion)\\b/gi, replacement: 'inspection' },
    { regex: /\\b(?:inspextions|inspecitons|inspectons)\\b/gi, replacement: 'inspections' },
    { regex: /\\b(?:emergancy|emergenci|imargency)\\b/gi, replacement: 'emergency' },
    { regex: /\\b(?:goverment|govrenment|govrnment|govrment)\\b/gi, replacement: 'government' },
    { regex: /\\b(?:facilty|faclity|facilite|faciity)\\b/gi, replacement: 'facility' },
    { regex: /\\b(?:facilties|faclities|faciities)\\b/gi, replacement: 'facilities' },
    { regex: /\\b(?:distric|distict|distrct)\\b/gi, replacement: 'district' },
    { regex: /\\b(?:districs|disticts|distrcts)\\b/gi, replacement: 'districts' },
    { regex: /\\b(?:direciton|directon|directin)\\b/gi, replacement: 'direction' },
    { regex: /\\b(?:direcitons|directons|directins)\\b/gi, replacement: 'directions' },
    { regex: /\\b(?:tution|tutition)\\b/gi, replacement: 'tuition' },
    { regex: /\\b(?:curriculm|curriculam|curiculum)\\b/gi, replacement: 'curriculum' },
    { regex: /\\b(?:resturant|restraunt|restaraunt)\\b/gi, replacement: 'restaurant' },
    { regex: /\\b(?:resturants|restraunts|restaraunts)\\b/gi, replacement: 'restaurants' },

    // Geographic names
    { regex: /\\b(?:abudhabi|abu-dhabi|abudabi|abu\\s*dabi)\\b/gi, replacement: 'abu dhabi' },
    { regex: /\\b(?:alain|al-ain)\\b/gi, replacement: 'al ain' },
    { regex: /\\b(?:khalfia|khalifia|khalifah|kalifa|khelifa)\\b/gi, replacement: 'khalifa' },
    { regex: /\\b(?:mushreef|mushref|moshrif)\\b/gi, replacement: 'mushrif' },
    { regex: /\\b(?:mussafa|musafah|musaffah|mussaffa|musafa)\\b/gi, replacement: 'musaffah' },
    { regex: /\\b(?:saadiyet|sadiyat|saadiat)\\b/gi, replacement: 'saadiyat' },
    { regex: /\\b(?:bateen|albateen|batin|al\\s*batin)\\b/gi, replacement: 'al bateen' },
    { regex: /\\b(?:reem|alreem)\\b/gi, replacement: 'al reem' },
    { regex: /\\b(?:dhafra|aldhafra|dafra|al\\s*dafra)\\b/gi, replacement: 'al dhafra' },
    { regex: /\\b(?:ruweis|rwais)\\b/gi, replacement: 'ruwais' },
    { regex: /\\b(?:khalidya|khalidiya|khalidiyah)\\b/gi, replacement: 'al khalidiyah' },`;

if (content.includes(typoOldCategoryBlock)) {
  content = content.replace(typoOldCategoryBlock, typoNewCategoryBlock);
  console.log('Updated category typo block in spatialSearchService.js');
} else {
  console.log('Could not find category typo block');
}

if (isCRLF) {
  content = content.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done writing updates to spatialSearchService.js');
