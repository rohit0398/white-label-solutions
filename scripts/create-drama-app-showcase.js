const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const dramaAppPhonePath = path.join(__dirname, '..', 'public', 'showcase', 'ott-drama-app.jpg');
  const targetPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-drama-app-showcase.jpg');

  // We want a 1200 x 675 canvas (16:9).
  // The phone should be scaled to height 615px, with subtle shadow.
  // Phone aspect ratio is 768 / 1376 = 0.5581395.
  // Scaled width = Math.round(615 * (768 / 1376)) = 343px.

  const scaledPhone = await sharp(dramaAppPhonePath)
    .resize({ height: 615, width: 343, fit: 'fill' })
    .toBuffer();

  // Create SVG backdrop with dark studio lighting and Mechatron Drama Reels badge
  const backdropSvg = `
    <svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#141a29"/>
          <stop offset="50%" stop-color="#0b0e17"/>
          <stop offset="100%" stop-color="#06080d"/>
        </radialGradient>
        <radialGradient id="centerSpot" cx="50%" cy="45%" r="35%">
          <stop offset="0%" stop-color="#2a2012" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#06080d" stop-opacity="0"/>
        </radialGradient>
        <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="15" stdDeviation="25" flood-color="#000000" flood-opacity="0.85"/>
        </filter>
      </defs>
      <!-- Background -->
      <rect width="1200" height="675" fill="url(#bgGlow)"/>
      <rect width="1200" height="675" fill="url(#centerSpot)"/>

      <!-- Top Left Brand Badge -->
      <g transform="translate(36, 32)">
        <rect width="240" height="46" rx="12" fill="#090d16" fill-opacity="0.95" stroke="#1e293b" stroke-width="1.5"/>
        <g transform="translate(10, 8)">
          <rect width="30" height="30" rx="7" fill="#1a5276"/>
          <circle cx="15" cy="15" r="10.5" fill="#d2aa68"/>
          <path fill="#ffffff" d="M9.5 20V10h2.9l2.5 5.8 2.5-5.8h2.8v10h-2.4v-5.4l-2.3 5.2h-1.7l-2.3-5.2V20H9.5z"/>
        </g>
        <text x="50" y="23" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">MECHATRON</text>
        <text x="50" y="36" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="1">SHORT DRAMA APP</text>
      </g>
    </svg>
  `;

  const phoneLeft = Math.round((1200 - 343) / 2);
  const phoneTop = Math.round((675 - 615) / 2);

  await sharp(Buffer.from(backdropSvg))
    .composite([
      {
        input: scaledPhone,
        top: phoneTop,
        left: phoneLeft,
      }
    ])
    .jpeg({ quality: 95 })
    .toFile(targetPath);

  console.log('Generated:', targetPath);
}

main().catch(console.error);
