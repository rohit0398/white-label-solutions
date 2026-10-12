const sharp = require('sharp');
const path = require('path');

async function main() {
  const src = 'C:/Users/rohit/.gemini/antigravity-ide/brain/05485459-4982-4371-9dda-cc54f27b31df/ott_mobile_streaming_1791834554851.jpg';
  const target = path.join(__dirname, '..', 'public', 'showcase', 'ott-streaming-app.jpg');

  // Scale height to 645px
  // Width will be 1200 * (645 / 896) = 864px
  const resizedPhone = await sharp(src)
    .resize({ height: 645, width: 864, fit: 'fill' })
    .toBuffer();

  const backdropSvg = `
    <svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#141c2c"/>
          <stop offset="50%" stop-color="#090d16"/>
          <stop offset="100%" stop-color="#05070c"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#bg)"/>
      <g transform="translate(36, 32)">
        <rect width="245" height="46" rx="12" fill="#090d16" fill-opacity="0.95" stroke="#1e293b" stroke-width="1.5"/>
        <g transform="translate(10, 8)">
          <rect width="30" height="30" rx="7" fill="#1a5276"/>
          <circle cx="15" cy="15" r="10.5" fill="#d2aa68"/>
          <path fill="#ffffff" d="M9.5 20V10h2.9l2.5 5.8 2.5-5.8h2.8v10h-2.4v-5.4l-2.3 5.2h-1.7l-2.3-5.2V20H9.5z"/>
        </g>
        <text x="50" y="23" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">MECHATRON</text>
        <text x="50" y="36" fill="#38bdf8" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="1">CINEMATIC OTT APP</text>
      </g>
    </svg>
  `;

  const left = Math.round((1200 - 864) / 2);
  const top = Math.round((675 - 645) / 2);

  await sharp(Buffer.from(backdropSvg))
    .composite([
      {
        input: resizedPhone,
        top,
        left,
      }
    ])
    .jpeg({ quality: 95 })
    .toFile(target);

  console.log('Successfully updated ott-streaming-app.jpg to 1200x675 16:9 widescreen');
}

main().catch(console.error);
