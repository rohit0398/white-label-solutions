const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG template for Video CMS Dashboard at 1376 x 768
const width = 1376;
const height = 768;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0e17"/>
      <stop offset="50%" stop-color="#0d1322"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>

    <linearGradient id="sidebarBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b101c"/>
      <stop offset="100%" stop-color="#080c14"/>
    </linearGradient>

    <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121929"/>
      <stop offset="100%" stop-color="#0e1422"/>
    </linearGradient>

    <linearGradient id="activeItemBg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#162032"/>
    </linearGradient>

    <linearGradient id="accentGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>

    <linearGradient id="goldGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d2aa68"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>

    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Subtle glow accents -->
  <circle cx="300" cy="150" r="220" fill="#0ea5e9" opacity="0.04" filter="blur(60px)"/>
  <circle cx="1100" cy="400" r="260" fill="#d2aa68" opacity="0.03" filter="blur(80px)"/>

  <!-- SIDEBAR (x: 0, w: 260) -->
  <rect x="0" y="0" width="250" height="${height}" fill="url(#sidebarBg)"/>
  <line x1="250" y1="0" x2="250" y2="${height}" stroke="#1e293b" stroke-width="1"/>

  <!-- Top Logo in Sidebar: Mechatron Short Logo -->
  <g transform="translate(24, 24)">
    <!-- Mechatron Logo Rounded Square (#1a5276) -->
    <rect width="40" height="40" rx="9" fill="#1a5276"/>
    <!-- Amber Circle (#d2aa68) -->
    <circle cx="20" cy="20" r="14" fill="#d2aa68"/>
    <!-- White 'M' -->
    <path fill="#ffffff" d="M12.5 26.5V13.5h3.9l3.4 7.7 3.4-7.7h3.8v13h-3.3V19.5l-3 6.8h-2.3l-3-6.8v7h-2.9z"/>

    <!-- App Title -->
    <text x="52" y="19" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="-0.2">MECHATRON</text>
    <text x="52" y="34" fill="#94a3b8" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="500">Video CMS Console</text>
  </g>

  <!-- Sidebar Navigation Items -->
  <g transform="translate(16, 95)" font-family="Inter, -apple-system, sans-serif" font-size="13">
    <!-- 1. Overview -->
    <g transform="translate(0, 0)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Grid icon -->
      <path d="M16 14h5v5h-5zm7 0h5v5h-5zm-7 7h5v5h-5zm7 7h5v5h-5z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Overview</text>
    </g>

    <!-- 2. Video Library -->
    <g transform="translate(0, 48)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Film icon -->
      <path d="M16 13h12v14H16zm2 2v2h2v-2zm0 4v2h2v-2zm0 4v2h2v-2zm6-8v2h2v-2zm0 4v2h2v-2zm0 4v2h2v-2z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Video Library</text>
    </g>

    <!-- 3. Encoding Queue (ACTIVE) -->
    <g transform="translate(0, 96)">
      <rect width="218" height="40" rx="8" fill="url(#activeItemBg)" stroke="#334155" stroke-width="1"/>
      <line x1="0" y1="8" x2="0" y2="32" stroke="#0ea5e9" stroke-width="3"/>
      <!-- Refresh/Sync icon -->
      <path d="M17 19a5 5 0 0 1 8.5-3.5L27 14v5h-5l1.8-1.8A3 3 0 0 0 19 19zm10 2a5 5 0 0 1-8.5 3.5L17 26v-5h5l-1.8 1.8A3 3 0 0 0 25 21z" fill="#38bdf8"/>
      <text x="38" y="25" fill="#ffffff" font-weight="600">Encoding Queue</text>
      <circle cx="198" cy="20" r="4" fill="#38bdf8"/>
    </g>

    <!-- 4. VIP Subscription Tiers -->
    <g transform="translate(0, 144)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Crown / VIP icon -->
      <path d="M16 24l2-8 3 4 3-6 3 6 3-4 2 8z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">VIP Subscriptions</text>
    </g>

    <!-- 5. Episode Paywalls -->
    <g transform="translate(0, 192)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Lock icon -->
      <path d="M18 18v-2a4 4 0 0 1 8 0v2h1v7H17v-7zm2-2a2 2 0 0 1 4 0v2h-4z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Episode Paywalls</text>
    </g>

    <!-- 6. Ad Monetization (AVOD) -->
    <g transform="translate(0, 240)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Megaphone/TV ad icon -->
      <path d="M16 18v4h3l4 3V15l-4 3zm9-1a3 3 0 0 1 0 4v2a5 5 0 0 0 0-8z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Ad Monetization (AVOD)</text>
    </g>

    <!-- 7. Viewer Retention -->
    <g transform="translate(0, 288)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Chart icon -->
      <path d="M16 26h12v-2H16zm0-5h3v-4h-3zm5 0h3v-8h-3zm5 0h3v-6h-3z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Viewer Retention</text>
    </g>

    <!-- 8. Cloud Storage & CDN -->
    <g transform="translate(0, 336)">
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Cloud icon -->
      <path d="M25 19a4 4 0 0 0-7.5-1.5A3.5 3.5 0 0 0 15 24h10a3 3 0 0 0 0-5z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Cloud &amp; CDN Storage</text>
    </g>

    <!-- Settings at bottom -->
    <g transform="translate(0, 580)">
      <line x1="4" y1="-15" x2="214" y2="-15" stroke="#1e293b" stroke-width="1"/>
      <rect width="218" height="40" rx="8" fill="transparent"/>
      <!-- Gear icon -->
      <path d="M22 14l1 2 2 .5 1-1.5 2 1-.5 2 1.5 1.5 2-.5.5 2-1.5 1.5.5 2-2 1-1.5-1.5-2 .5-1 2-2-1 .5-2-1.5-1.5-2 .5-.5-2 1.5-1.5-.5-2 2-1 1.5 1.5 2-.5z" fill="#94a3b8"/>
      <text x="38" y="25" fill="#94a3b8" font-weight="500">Platform Settings</text>
    </g>
  </g>

  <!-- MAIN CONTENT AREA (x: 275, w: 1075) -->

  <!-- Top Header Bar -->
  <g transform="translate(275, 20)">
    <text x="0" y="26" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="20" font-weight="700">Video Operations Dashboard</text>
    <text x="0" y="44" fill="#64748b" font-family="Inter, -apple-system, sans-serif" font-size="12">Cloudflare Stream &amp; AWS MediaConvert Ingest Pipeline</text>

    <!-- Top Right Controls -->
    <g transform="translate(720, 5)">
      <!-- Search bar -->
      <rect width="180" height="34" rx="8" fill="#131c2e" stroke="#1e293b" stroke-width="1"/>
      <text x="32" y="22" fill="#64748b" font-family="Inter, -apple-system, sans-serif" font-size="11">Search video catalog...</text>
      <circle cx="18" cy="17" r="4" fill="none" stroke="#64748b" stroke-width="1.5"/>
      <line x1="21" y1="20" x2="24" y2="23" stroke="#64748b" stroke-width="1.5"/>

      <!-- Notification bell -->
      <rect x="190" y="0" width="34" height="34" rx="8" fill="#131c2e" stroke="#1e293b" stroke-width="1"/>
      <path d="M207 10a4 4 0 0 0-4 4v4l-1 2h10l-1-2v-4a4 4 0 0 0-4-4z" fill="#94a3b8"/>
      <circle cx="213" cy="10" r="3" fill="#0ea5e9"/>

      <!-- Admin Profile with VIP Badge -->
      <g transform="translate(235, 0)">
        <rect width="115" height="34" rx="8" fill="#131c2e" stroke="#1e293b" stroke-width="1"/>
        <circle cx="17" cy="17" r="10" fill="#1a5276"/>
        <text x="14" y="21" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="10" font-weight="700">A</text>
        <text x="33" y="17" fill="#ffffff" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="600">Admin</text>
        <text x="33" y="28" fill="#d2aa68" font-family="Inter, -apple-system, sans-serif" font-size="9" font-weight="700">OWNER</text>
      </g>
    </g>
  </g>

  <!-- ROW 1: 4 TOP STAT CARDS (y: 85, h: 105) -->
  <g transform="translate(275, 85)" font-family="Inter, -apple-system, sans-serif">
    <!-- Card 1: Total Watch Time -->
    <g transform="translate(0, 0)">
      <rect width="255" height="100" rx="12" fill="url(#cardBg)" stroke="#1e293b" stroke-width="1"/>
      <circle cx="34" cy="38" r="16" fill="#0ea5e9" opacity="0.15"/>
      <!-- Play icon -->
      <path d="M31 31l8 7-8 7z" fill="#38bdf8"/>
      <text x="58" y="34" fill="#94a3b8" font-size="11" font-weight="500">Total Watch Time</text>
      <text x="58" y="58" fill="#ffffff" font-size="20" font-weight="700">1,421,800</text>
      <text x="165" y="58" fill="#64748b" font-size="12">mins</text>
      <rect x="58" y="68" width="52" height="18" rx="4" fill="#0284c7" opacity="0.15"/>
      <text x="64" y="81" fill="#38bdf8" font-size="10" font-weight="600">+12.5%</text>
      <text x="116" y="81" fill="#64748b" font-size="10">vs last week</text>
    </g>

    <!-- Card 2: Active VIP Subscribers (SVOD) -->
    <g transform="translate(270, 0)">
      <rect width="255" height="100" rx="12" fill="url(#cardBg)" stroke="#1e293b" stroke-width="1"/>
      <circle cx="34" cy="38" r="16" fill="#d2aa68" opacity="0.15"/>
      <!-- Crown icon -->
      <path d="M26 44l3-9 4 4 4-7 4 7 4-4 3 9z" fill="#d2aa68"/>
      <text x="58" y="34" fill="#94a3b8" font-size="11" font-weight="500">Active VIP Subscribers</text>
      <text x="58" y="58" fill="#ffffff" font-size="20" font-weight="700">$48,250</text>
      <text x="148" y="58" fill="#64748b" font-size="12">MRR</text>
      <rect x="58" y="68" width="85" height="18" rx="4" fill="#d2aa68" opacity="0.15"/>
      <text x="64" y="81" fill="#d2aa68" font-size="10" font-weight="600">1,980 Subscribers</text>
      <text x="150" y="81" fill="#64748b" font-size="10">Active SVOD</text>
    </g>

    <!-- Card 3: Ad Monetization Revenue (AVOD) - CLEAN NO COINS! -->
    <g transform="translate(540, 0)">
      <rect width="255" height="100" rx="12" fill="url(#cardBg)" stroke="#1e293b" stroke-width="1"/>
      <circle cx="34" cy="38" r="16" fill="#10b981" opacity="0.15"/>
      <!-- Dollar / Ad stats icon -->
      <path d="M34 29v18m-5-14a3 3 0 0 1 5-1h2a3 3 0 0 1 0 6h-6a3 3 0 0 0 0 6h3a3 3 0 0 0 3-2" fill="none" stroke="#34d399" stroke-width="2"/>
      <text x="58" y="34" fill="#94a3b8" font-size="11" font-weight="500">Ad Revenue (AVOD)</text>
      <text x="58" y="58" fill="#ffffff" font-size="20" font-weight="700">$18,450</text>
      <text x="148" y="58" fill="#64748b" font-size="12">/ mo</text>
      <rect x="58" y="68" width="52" height="18" rx="4" fill="#10b981" opacity="0.15"/>
      <text x="64" y="81" fill="#34d399" font-size="10" font-weight="600">+14.2%</text>
      <text x="116" y="81" fill="#64748b" font-size="10">Rewarded ads</text>
    </g>

    <!-- Card 4: CDN Egress & Bandwidth -->
    <g transform="translate(810, 0)">
      <rect width="255" height="100" rx="12" fill="url(#cardBg)" stroke="#1e293b" stroke-width="1"/>
      <circle cx="34" cy="38" r="16" fill="#6366f1" opacity="0.15"/>
      <!-- Cloud icon -->
      <path d="M38 37a4 4 0 0 0-7.5-1.5A3.5 3.5 0 0 0 28 42h10a3 3 0 0 0 0-5z" fill="#818cf8"/>
      <text x="58" y="34" fill="#94a3b8" font-size="11" font-weight="500">CDN Bandwidth Cost</text>
      <text x="58" y="58" fill="#ffffff" font-size="20" font-weight="700">$0</text>
      <text x="85" y="58" fill="#10b981" font-size="14" font-weight="600">Egress Fee</text>
      <text x="58" y="81" fill="#94a3b8" font-size="10">4.2 PB delivered · Cloudflare Stream</text>
    </g>
  </g>

  <!-- ROW 2: ACTIVE UPLOAD & ENCODING QUEUE (y: 205, h: 220) -->
  <g transform="translate(275, 205)" font-family="Inter, -apple-system, sans-serif">
    <rect width="1065" height="235" rx="14" fill="url(#cardBg)" stroke="#1e293b" stroke-width="1" filter="url(#shadow)"/>

    <!-- Section Header -->
    <g transform="translate(20, 20)">
      <text x="0" y="14" fill="#ffffff" font-size="15" font-weight="700">Active Multi-Bitrate Encoding Queue</text>
      <text x="0" y="30" fill="#64748b" font-size="11">Automated HLS Transcoding (4K, 1080p, 720p, 480p) &amp; DRM Token Signing</text>

      <!-- Upload New Video CTA -->
      <g transform="translate(900, -5)">
        <rect width="125" height="32" rx="7" fill="url(#accentGlow)"/>
        <text x="22" y="20" fill="#ffffff" font-size="11" font-weight="700">+ Upload Master</text>
      </g>
    </g>

    <!-- Encoding Job 1: Cyber Horizon S2:E1 -->
    <g transform="translate(20, 70)">
      <rect width="1025" height="68" rx="10" fill="#0b101c" stroke="#1e293b" stroke-width="1"/>
      <!-- Thumbnail with play icon -->
      <rect x="12" y="12" width="76" height="44" rx="6" fill="#1a2538"/>
      <circle cx="50" cy="34" r="10" fill="#0ea5e9"/>
      <path d="M48 30l6 4-6 4z" fill="#ffffff"/>

      <text x="100" y="28" fill="#ffffff" font-size="13" font-weight="600">Cyber Horizon (Season 2: Episode 1 &#8220;Neo-Terra&#8221;)</text>
      <text x="100" y="46" fill="#64748b" font-size="11">Cloudflare Stream · 4K HDR &amp; 1080p ABR · Ingest ID: cf-stream-883a</text>

      <!-- Progress bar -->
      <rect x="470" y="24" width="320" height="8" rx="4" fill="#1e293b"/>
      <rect x="470" y="24" width="315" height="8" rx="4" fill="url(#accentGlow)"/>
      <text x="800" y="32" fill="#38bdf8" font-size="11" font-weight="600">98.4%</text>

      <!-- Status badge -->
      <rect x="860" y="18" width="90" height="24" rx="6" fill="#0284c7" opacity="0.2"/>
      <text x="874" y="34" fill="#38bdf8" font-size="10" font-weight="600">Transcoding</text>

      <text x="965" y="34" fill="#64748b" font-size="11">1m left</text>
    </g>

    <!-- Encoding Job 2: Echoes of Betrayal S1:E18 -->
    <g transform="translate(20, 150)">
      <rect width="1025" height="68" rx="10" fill="#0b101c" stroke="#1e293b" stroke-width="1"/>
      <!-- Thumbnail with play icon -->
      <rect x="12" y="12" width="76" height="44" rx="6" fill="#2d1c24"/>
      <circle cx="50" cy="34" r="10" fill="#f43f5e"/>
      <path d="M48 30l6 4-6 4z" fill="#ffffff"/>

      <text x="100" y="28" fill="#ffffff" font-size="13" font-weight="600">Echoes of Betrayal (Episode 18 &#8220;The Will Discovered&#8221;)</text>
      <text x="100" y="46" fill="#64748b" font-size="11">9:16 Vertical Video · DRM Encryption Signed · Token Authorization Active</text>

      <!-- Progress bar -->
      <rect x="470" y="24" width="320" height="8" rx="4" fill="#1e293b"/>
      <rect x="470" y="24" width="320" height="8" rx="4" fill="#10b981"/>
      <text x="800" y="32" fill="#34d399" font-size="11" font-weight="600">100%</text>

      <!-- Status badge -->
      <rect x="860" y="18" width="90" height="24" rx="6" fill="#059669" opacity="0.2"/>
      <text x="880" y="34" fill="#34d399" font-size="10" font-weight="600">Signed &amp; Live</text>

      <text x="965" y="34" fill="#34d399" font-size="11">Ready</text>
    </g>
  </g>

  <!-- ROW 3: EPISODE PAYWALL & GATING RULES TABLE (y: 460, h: 285) - ZERO COINS! -->
  <g transform="translate(275, 460)" font-family="Inter, -apple-system, sans-serif">
    <rect width="1065" height="285" rx="14" fill="url(#cardBg)" stroke="#1e293b" stroke-width="1" filter="url(#shadow)"/>

    <!-- Section Header -->
    <g transform="translate(20, 20)">
      <text x="0" y="14" fill="#ffffff" font-size="15" font-weight="700">Episode Paywall &amp; Access Gating Rules</text>
      <text x="0" y="30" fill="#64748b" font-size="11">Configure Teaser Episodes, SVOD VIP Pass Gating, and AVOD Rewarded Ad Unlocks</text>

      <!-- Select Series Dropdown -->
      <g transform="translate(860, -5)">
        <rect width="165" height="32" rx="7" fill="#131c2e" stroke="#1e293b" stroke-width="1"/>
        <text x="14" y="20" fill="#ffffff" font-size="11" font-weight="600">The Midnight Club (S1)</text>
        <path d="M145 18l4 4 4-4" stroke="#94a3b8" stroke-width="1.5" fill="none"/>
      </g>
    </g>

    <!-- Table Header (y: 65) -->
    <g transform="translate(20, 65)">
      <rect width="1025" height="32" rx="6" fill="#090e18"/>
      <text x="20" y="20" fill="#64748b" font-size="10" font-weight="700" letter-spacing="0.5">EPISODES</text>
      <text x="160" y="20" fill="#64748b" font-size="10" font-weight="700" letter-spacing="0.5">ACCESS TYPE</text>
      <text x="360" y="20" fill="#64748b" font-size="10" font-weight="700" letter-spacing="0.5">MONETIZATION RULE</text>
      <text x="680" y="20" fill="#64748b" font-size="10" font-weight="700" letter-spacing="0.5">DRM SECURITY</text>
      <text x="910" y="20" fill="#64748b" font-size="10" font-weight="700" letter-spacing="0.5">ACTION</text>
    </g>

    <!-- Table Row 1: Ep 1-5 Free Preview -->
    <g transform="translate(20, 105)">
      <rect width="1025" height="48" rx="8" fill="#0b101c" stroke="#1e293b" stroke-width="1"/>
      <text x="20" y="28" fill="#ffffff" font-size="12" font-weight="600">Episodes 1 – 5</text>

      <rect x="160" y="14" width="115" height="22" rx="5" fill="#0284c7" opacity="0.15"/>
      <text x="174" y="29" fill="#38bdf8" font-size="10" font-weight="600">Free Teaser Preview</text>

      <text x="360" y="29" fill="#94a3b8" font-size="12">Publicly Accessible · No Login Required</text>

      <rect x="680" y="14" width="95" height="22" rx="5" fill="#10b981" opacity="0.15"/>
      <text x="692" y="29" fill="#34d399" font-size="10" font-weight="600">Public CDN</text>

      <!-- Edit Button -->
      <rect x="910" y="12" width="80" height="24" rx="5" fill="#1e293b"/>
      <text x="930" y="28" fill="#ffffff" font-size="11" font-weight="500">Edit Rule</text>
    </g>

    <!-- Table Row 2: Ep 6-15 VIP Pass Required -->
    <g transform="translate(20, 160)">
      <rect width="1025" height="48" rx="8" fill="#0b101c" stroke="#1e293b" stroke-width="1"/>
      <text x="20" y="28" fill="#ffffff" font-size="12" font-weight="600">Episodes 6 – 15</text>

      <rect x="160" y="14" width="125" height="22" rx="5" fill="#d2aa68" opacity="0.15"/>
      <text x="174" y="29" fill="#d2aa68" font-size="10" font-weight="600">VIP Pass Required</text>

      <text x="360" y="29" fill="#e2e8f0" font-size="12" font-weight="500">Weekly, Monthly or Annual VIP Pass (Stripe / In-App)</text>

      <rect x="680" y="14" width="120" height="22" rx="5" fill="#6366f1" opacity="0.15"/>
      <text x="692" y="29" fill="#818cf8" font-size="10" font-weight="600">Signed URL Token</text>

      <!-- Edit Button -->
      <rect x="910" y="12" width="80" height="24" rx="5" fill="#1e293b"/>
      <text x="930" y="28" fill="#ffffff" font-size="11" font-weight="500">Edit Rule</text>
    </g>

    <!-- Table Row 3: Ep 16-80 VIP or Rewarded Ad Unlock -->
    <g transform="translate(20, 215)">
      <rect width="1025" height="48" rx="8" fill="#0b101c" stroke="#1e293b" stroke-width="1"/>
      <text x="20" y="28" fill="#ffffff" font-size="12" font-weight="600">Episodes 16 – 80</text>

      <rect x="160" y="14" width="165" height="22" rx="5" fill="#10b981" opacity="0.15"/>
      <text x="174" y="29" fill="#34d399" font-size="10" font-weight="600">VIP Pass or 30s Ad Unlock</text>

      <text x="360" y="29" fill="#e2e8f0" font-size="12" font-weight="500">VIP Instant Access OR Rewarded Ad Completion (AVOD)</text>

      <rect x="680" y="14" width="120" height="22" rx="5" fill="#6366f1" opacity="0.15"/>
      <text x="692" y="29" fill="#818cf8" font-size="10" font-weight="600">Signed URL Token</text>

      <!-- Edit Button -->
      <rect x="910" y="12" width="80" height="24" rx="5" fill="#1e293b"/>
      <text x="930" y="28" fill="#ffffff" font-size="11" font-weight="500">Edit Rule</text>
    </g>
  </g>
</svg>
`;

async function main() {
  const targetPath = path.join(__dirname, '..', 'public', 'showcase', 'ott-video-cms.jpg');
  console.log('Rendering new Mechatron Video CMS image to:', targetPath);

  const buffer = await sharp(Buffer.from(svg))
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(targetPath);

  console.log('Successfully generated new ott-video-cms.jpg:', buffer);
}

main().catch(err => {
  console.error('Error generating image:', err);
  process.exit(1);
});
