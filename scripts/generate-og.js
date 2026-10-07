const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="60%" stop-color="#121214"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="20%" r="55%">
      <stop offset="0%" stop-color="rgba(52, 211, 153, 0.18)"/>
      <stop offset="100%" stop-color="rgba(10, 10, 10, 0)"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Subtle grid lines -->
  <line x1="0" y1="80" x2="1200" y2="80" stroke="#1f1f23" stroke-width="1" stroke-dasharray="4 8"/>
  <line x1="0" y1="530" x2="1200" y2="530" stroke="#1f1f23" stroke-width="1" stroke-dasharray="4 8"/>
  <line x1="90" y1="0" x2="90" y2="630" stroke="#1f1f23" stroke-width="1" stroke-dasharray="4 8"/>
  <line x1="1110" y1="0" x2="1110" y2="630" stroke="#1f1f23" stroke-width="1" stroke-dasharray="4 8"/>

  <!-- Outer frame border -->
  <rect x="36" y="36" width="1128" height="558" rx="16" fill="none" stroke="#27272a" stroke-width="1.5"/>

  <!-- Category badge -->
  <g transform="translate(90, 80)">
    <rect width="450" height="38" rx="19" fill="#18181b" stroke="#27272a" stroke-width="1"/>
    <circle cx="20" cy="19" r="5" fill="#34d399"/>
    <text x="36" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#a1a1aa" letter-spacing="1.2">PRIVATE CLOUD DEPLOYED • AWS • GCP • AZURE</text>
  </g>

  <!-- Title -->
  <text x="90" y="185" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="#f4f4f5" letter-spacing="-1.5">White-Label E-Commerce Platform</text>
  <text x="90" y="248" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="url(#accentGrad)" letter-spacing="-1.5">&amp; Native Mobile Apps</text>

  <!-- Description -->
  <text x="90" y="315" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="#a1a1aa">High-speed web storefront, Flutter iOS &amp; Android shopping apps,</text>
  <text x="90" y="348" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="#a1a1aa">and all-in-one Admin Panel &amp; CRM deployed on your own private cloud.</text>

  <!-- Feature pills -->
  <g transform="translate(90, 400)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="225" height="46" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
    <text x="20" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#f4f4f5">100% Code Ownership</text>

    <!-- Pill 2 -->
    <rect x="240" y="0" width="210" height="46" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
    <text x="260" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#f4f4f5">0% Commission Cuts</text>

    <!-- Pill 3 -->
    <rect x="465" y="0" width="215" height="46" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
    <text x="485" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#f4f4f5">Flutter iOS &amp; Android</text>

    <!-- Pill 4 -->
    <rect x="695" y="0" width="195" height="46" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
    <text x="715" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#f4f4f5">Live in 2–4 Weeks</text>
  </g>

  <!-- Bottom brand footer -->
  <g transform="translate(90, 515)">
    <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="800" fill="#f4f4f5">Mechatron Lab <tspan font-weight="400" fill="#71717a">Solutions</tspan></text>
    <text x="930" y="24" text-anchor="end" font-family="ui-monospace, SFMono-Regular, monospace" font-size="15" font-weight="500" fill="#71717a">solutions.mechatronlab.com</text>
  </g>
</svg>
`;

async function main() {
  const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully written:', outPath);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
