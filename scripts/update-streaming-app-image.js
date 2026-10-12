const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const sourcePath = 'C:/Users/rohit/.gemini/antigravity-ide/brain/05485459-4982-4371-9dda-cc54f27b31df/ott_mobile_streaming_1791834554851.jpg';
  const targetPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-streaming-app.jpg');

  // Brand Overlay SVG
  const overlaySvg = `
    <svg width="250" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="250" height="50" rx="12" fill="#090d16" fill-opacity="0.95" stroke="#1e293b" stroke-width="1.5"/>
      <g transform="translate(10, 8)">
        <rect width="34" height="34" rx="8" fill="#1a5276"/>
        <circle cx="17" cy="17" r="11.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M10.5 22.5V11.5h3.4l3 6.7 3-6.7h3.3v11h-2.9v-6l-2.6 5.8h-1.6l-2.6-5.8v6h-3z"/>
      </g>
      <text x="56" y="24" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="56" y="38" fill="#38bdf8" font-family="Inter, -apple-system, sans-serif" font-size="9.5" font-weight="700" letter-spacing="1">CINEMATIC OTT APP</text>
    </svg>
  `;

  await sharp(sourcePath)
    .composite([
      {
        input: Buffer.from(overlaySvg),
        top: 36,
        left: 36
      }
    ])
    .jpeg({ quality: 95 })
    .toFile(targetPath);

  console.log('Successfully updated public/showcase/ott-streaming-app.jpg');
}

main().catch(console.error);
