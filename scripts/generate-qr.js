// Simple script to generate a QR code image for a given URL
// Usage: `node scripts/generate-qr.js [outputPath] [url]`
// Defaults: outputPath=public/qr-india.png, url=https://krxlab.com/india

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

(async () => {
  try {
    const outputPath = process.argv[2] || path.join('public', 'qr-india.png');
    const url = process.argv[3] || 'https://krxlab.com/india';

    // Ensure output directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Generate QR code as PNG buffer with high error correction for better readability
    const buffer = await QRCode.toBuffer(url, {
      errorCorrectionLevel: 'H',
      type: 'png',
      color: {
        dark: '#000000', // QR code color
        light: '#ffffff', // background
      },
      margin: 2,
      scale: 8, // controls final image size
    });

    fs.writeFileSync(outputPath, buffer);
    console.log(`QR code generated: ${outputPath}`);
    console.log(`URL: ${url}`);
  } catch (err) {
    console.error('Failed to generate QR code:', err);
    process.exit(1);
  }
})();
