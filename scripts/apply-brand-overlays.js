const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  // 1. Cinematic Web (1376 x 768)
  const cinematicWebSvg = `
    <svg width="245" height="54" xmlns="http://www.w3.org/2000/svg">
      <rect width="245" height="54" rx="12" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
      <g transform="translate(10, 10)">
        <rect width="34" height="34" rx="8" fill="#1a5276"/>
        <circle cx="17" cy="17" r="11.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M10.5 22.5V11.5h3.4l3 6.7 3-6.7h3.3v11h-2.9v-6l-2.6 5.8h-1.6l-2.6-5.8v6h-3z"/>
      </g>
      <text x="56" y="26" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="56" y="41" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="10" font-weight="700" letter-spacing="1">CINEMATIC OTT</text>
    </svg>
  `;
  const cinematicWebPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-cinematic-web.jpg');
  await sharp(cinematicWebPath)
    .composite([{ input: Buffer.from(cinematicWebSvg), top: 22, left: 50 }])
    .jpeg({ quality: 95 })
    .toFile(cinematicWebPath + '.tmp.jpg');
  fs.renameSync(cinematicWebPath + '.tmp.jpg', cinematicWebPath);
  console.log('Processed ott-cinematic-web.jpg');

  // 2. Drama App (768 x 1376)
  const dramaAppSvg = `
    <svg width="225" height="46" xmlns="http://www.w3.org/2000/svg">
      <rect width="225" height="46" rx="23" fill="#000000" stroke="#334155" stroke-width="1.5"/>
      <g transform="translate(8, 8)">
        <rect width="30" height="30" rx="7" fill="#1a5276"/>
        <circle cx="15" cy="15" r="10.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M9.5 20V10h2.9l2.5 5.8 2.5-5.8h2.8v10h-2.4v-5.4l-2.3 5.2h-1.7l-2.3-5.2V20H9.5z"/>
      </g>
      <text x="48" y="23" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="48" y="36" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="1">DRAMA REELS</text>
    </svg>
  `;
  const dramaAppPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-drama-app.jpg');
  await sharp(dramaAppPath)
    .composite([{ input: Buffer.from(dramaAppSvg), top: 145, left: 95 }])
    .jpeg({ quality: 95 })
    .toFile(dramaAppPath + '.tmp.jpg');
  fs.renameSync(dramaAppPath + '.tmp.jpg', dramaAppPath);
  console.log('Processed ott-drama-app.jpg');

  // 3. Drama Web (1200 x 896)
  const dramaWebSvg = `
    <svg width="235" height="52" xmlns="http://www.w3.org/2000/svg">
      <rect width="235" height="52" rx="12" fill="#181b26" stroke="#2d3548" stroke-width="1.5"/>
      <g transform="translate(10, 9)">
        <rect width="34" height="34" rx="8" fill="#1a5276"/>
        <circle cx="17" cy="17" r="11.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M10.5 22.5V11.5h3.4l3 6.7 3-6.7h3.3v11h-2.9v-6l-2.6 5.8h-1.6l-2.6-5.8v6h-3z"/>
      </g>
      <text x="54" y="25" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="54" y="39" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="10" font-weight="700" letter-spacing="1">DRAMA WEB</text>
    </svg>
  `;
  const dramaWebPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-drama-web.jpg');
  await sharp(dramaWebPath)
    .composite([{ input: Buffer.from(dramaWebSvg), top: 52, left: 48 }])
    .jpeg({ quality: 95 })
    .toFile(dramaWebPath + '.tmp.jpg');
  fs.renameSync(dramaWebPath + '.tmp.jpg', dramaWebPath);
  console.log('Processed ott-drama-web.jpg');

  // 4. Streaming App (1200 x 896)
  const streamingAppSvg = `
    <svg width="235" height="46" xmlns="http://www.w3.org/2000/svg">
      <rect width="235" height="46" rx="23" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
      <g transform="translate(8, 8)">
        <rect width="30" height="30" rx="7" fill="#1a5276"/>
        <circle cx="15" cy="15" r="10.5" fill="#d2aa68"/>
        <path fill="#ffffff" d="M9.5 20V10h2.9l2.5 5.8 2.5-5.8h2.8v10h-2.4v-5.4l-2.3 5.2h-1.7l-2.3-5.2V20H9.5z"/>
      </g>
      <text x="48" y="23" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">MECHATRON</text>
      <text x="48" y="35" fill="#38bdf8" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="1">STREAMING APP</text>
    </svg>
  `;
  const streamingAppPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-streaming-app.jpg');
  await sharp(streamingAppPath)
    .composite([{ input: Buffer.from(streamingAppSvg), top: 30, left: 30 }])
    .jpeg({ quality: 95 })
    .toFile(streamingAppPath + '.tmp.jpg');
  fs.renameSync(streamingAppPath + '.tmp.jpg', streamingAppPath);
  console.log('Processed ott-streaming-app.jpg');
}

main().catch(console.error);
