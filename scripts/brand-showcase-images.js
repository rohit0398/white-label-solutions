const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function brandImages() {
  // 1. Brand Cinematic Web (1376 x 768)
  const cinematicWebSvg = `
    <svg width="220" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect width="220" height="48" rx="10" fill="#0b0f19" fill-opacity="0.95" stroke="#1e293b" stroke-width="1"/>
      <g transform="translate(10, 8)">
        <rect width="32" height="32" rx="7" fill="#1a5276"/>
        <circle cx="16" cy="16" r="11" fill="#d2aa68"/>
        <path fill="#ffffff" d="M10 21V11h3.1l2.7 6.1 2.7-6.1h3v10h-2.6v-5.6l-2.4 5.4h-1.8l-2.4-5.4V21H10z"/>
      </g>
      <text x="52" y="24" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="52" y="37" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="10" font-weight="700" letter-spacing="1">CINEMATIC OTT</text>
    </svg>
  `;

  const cinematicWebPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-cinematic-web.jpg');
  await sharp(cinematicWebPath)
    .composite([
      {
        input: Buffer.from(cinematicWebSvg),
        top: 25,
        left: 60,
      },
    ])
    .jpeg({ quality: 95 })
    .toFile(cinematicWebPath + '.tmp.jpg');
  fs.renameSync(cinematicWebPath + '.tmp.jpg', cinematicWebPath);
  console.log('Branded ott-cinematic-web.jpg successfully!');

  // 2. Brand Drama App (768 x 1376)
  const dramaAppSvg = `
    <svg width="230" height="44" xmlns="http://www.w3.org/2000/svg">
      <rect width="230" height="44" rx="22" fill="#000000" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1"/>
      <g transform="translate(8, 7)">
        <rect width="30" height="30" rx="7" fill="#1a5276"/>
        <circle cx="15" cy="15" r="10.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M9.5 20V10h2.9l2.5 5.8 2.5-5.8h2.8v10h-2.4v-5.4l-2.3 5.2h-1.7l-2.3-5.2V20H9.5z"/>
      </g>
      <text x="48" y="22" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="48" y="34" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="1">DRAMA REELS</text>
    </svg>
  `;

  const dramaAppPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-drama-app.jpg');
  await sharp(dramaAppPath)
    .composite([
      {
        input: Buffer.from(dramaAppSvg),
        top: 130,
        left: 80,
      },
    ])
    .jpeg({ quality: 95 })
    .toFile(dramaAppPath + '.tmp.jpg');
  fs.renameSync(dramaAppPath + '.tmp.jpg', dramaAppPath);
  console.log('Branded ott-drama-app.jpg successfully!');

  // 3. Brand Drama Web (1200 x 896)
  const dramaWebSvg = `
    <svg width="230" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect width="230" height="48" rx="10" fill="#141824" fill-opacity="0.95" stroke="#2a3347" stroke-width="1"/>
      <g transform="translate(10, 8)">
        <rect width="32" height="32" rx="7" fill="#1a5276"/>
        <circle cx="16" cy="16" r="11" fill="#d2aa68"/>
        <path fill="#ffffff" d="M10 21V11h3.1l2.7 6.1 2.7-6.1h3v10h-2.6v-5.6l-2.4 5.4h-1.8l-2.4-5.4V21H10z"/>
      </g>
      <text x="52" y="24" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="52" y="37" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="10" font-weight="700" letter-spacing="1">DRAMA WEB</text>
    </svg>
  `;

  const dramaWebPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-drama-web.jpg');
  await sharp(dramaWebPath)
    .composite([
      {
        input: Buffer.from(dramaWebSvg),
        top: 55,
        left: 55,
      },
    ])
    .jpeg({ quality: 95 })
    .toFile(dramaWebPath + '.tmp.jpg');
  fs.renameSync(dramaWebPath + '.tmp.jpg', dramaWebPath);
  console.log('Branded ott-drama-web.jpg successfully!');

  // 4. Brand Streaming App (1200 x 896)
  const streamingAppSvg = `
    <svg width="230" height="44" xmlns="http://www.w3.org/2000/svg">
      <rect width="230" height="44" rx="22" fill="#090d16" fill-opacity="0.9" stroke="#1e293b" stroke-width="1"/>
      <g transform="translate(8, 7)">
        <rect width="30" height="30" rx="7" fill="#1a5276"/>
        <circle cx="15" cy="15" r="10.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M9.5 20V10h2.9l2.5 5.8 2.5-5.8h2.8v10h-2.4v-5.4l-2.3 5.2h-1.7l-2.3-5.2V20H9.5z"/>
      </g>
      <text x="48" y="22" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="48" y="34" fill="#38bdf8" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="1">STREAMING APP</text>
    </svg>
  `;

  const streamingAppPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-streaming-app.jpg');
  await sharp(streamingAppPath)
    .composite([
      {
        input: Buffer.from(streamingAppSvg),
        top: 30,
        left: 30,
      },
    ])
    .jpeg({ quality: 95 })
    .toFile(streamingAppPath + '.tmp.jpg');
  fs.renameSync(streamingAppPath + '.tmp.jpg', streamingAppPath);
  console.log('Branded ott-streaming-app.jpg successfully!');
}

brandImages().catch(err => {
  console.error(err);
  process.exit(1);
});
