const sharp = require('sharp');
const fs = require('fs');
const inPath = 'assets/logo_gam3ya.svg';
const outPath = 'assets/favicon.png';

if (!fs.existsSync(inPath)) {
  console.error('Source SVG not found:', inPath);
  process.exit(1);
}

sharp(inPath)
  .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90 })
  .toFile(outPath)
  .then(() => console.log('favicon generated at', outPath))
  .catch(err => {
    console.error('Error generating favicon:', err);
    process.exit(1);
  });
