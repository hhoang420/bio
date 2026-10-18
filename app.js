/**
 * Bio Link Studio (guns.lol style)
 * Pure Vanilla JS — Zero build step, GitHub Pages ready
 */

const STORAGE_KEY = 'biolink_studio_config_v1';

const DEFAULT_CONFIG = {
  profile: {
    name: 'linhmeooo',
    username: '@linhmeooo',
    bio: '✨ Welcome to my digital space | Developer & Creator ✨',
    badges: ['verified', 'developer', 'premium'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    statusText: 'Coding & listening to music 🎧',
    viewsCount: 1428
  },
  appearance: {
    backgroundType: 'image',
    backgroundUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    backgroundBlur: 4,
    backgroundDim: 45,
    accentColor: '#a855f7',
    cardOpacity: 35,
    particleEffect: 'snow',
    enable3DTilt: true,
    enableTypewriter: true,
    layoutStyle: 'both',
    enterScreenText: 'click to enter...'
  },
  audio: {
    enabled: true,
    title: 'Lofi Chill Night - Ambient',
    artist: 'Chillhop Music',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    volume: 0.5
  },
  links: [
    {
      id: 'link-1',
      url: 'https://github.com/linhmeooo',
      title: 'GitHub',
      subtitle: 'Xem các dự án mã nguồn mở của mình'
    },
    {
      id: 'link-2',
      url: 'https://facebook.com/linhmeooo',
      title: 'Facebook',
      subtitle: 'Kết nối qua trang cá nhân'
    },
    {
      id: 'link-3',
      url: 'https://instagram.com/linhmeooo',
      title: 'Instagram',
      subtitle: '@linhmeooo • Daily moments'
    },
    {
      id: 'link-4',
      url: 'https://tiktok.com/@linhmeooo',
      title: 'TikTok',
      subtitle: 'Video ngắn & chia sẻ thú vị'
    },
    {
      id: 'link-5',
      url: 'https://discord.gg/invite',
      title: 'Discord Server',
      subtitle: 'Tham gia cộng đồng trò chuyện'
    },
    {
      id: 'link-6',
      url: 'https://open.spotify.com',
      title: 'Spotify Playlist',
      subtitle: 'Nhạc mình hay nghe mỗi ngày'
    }
  ]
};

/**
 * Brand Catalog for Automatic URL -> Icon & Color Detection
 */
const BRAND_PATTERNS = [
  { match: /facebook\.com|fb\.com|fb\.watch/i, icon: 'fa-brands fa-facebook', color: '#1877F2', label: 'Facebook' },
  { match: /m\.me|messenger\.com/i, icon: 'fa-brands fa-facebook-messenger', color: '#00B2FF', label: 'Messenger' },
  { match: /instagram\.com|instagr\.am/i, icon: 'fa-brands fa-instagram', color: '#E4405F', label: 'Instagram' },
  { match: /threads\.net/i, icon: 'fa-brands fa-threads', color: '#ffffff', label: 'Threads' },
  { match: /tiktok\.com/i, icon: 'fa-brands fa-tiktok', color: '#00F2FE', label: 'TikTok' },
  { match: /youtube\.com|youtu\.be/i, icon: 'fa-brands fa-youtube', color: '#FF0000', label: 'YouTube' },
  { match: /discord\.gg|discord\.com/i, icon: 'fa-brands fa-discord', color: '#5865F2', label: 'Discord' },
  { match: /t\.me|telegram\.me|telegram\.org/i, icon: 'fa-brands fa-telegram', color: '#26A5E4', label: 'Telegram' },
  { match: /github\.com|github\.io/i, icon: 'fa-brands fa-github', color: '#f0f6fc', label: 'GitHub' },
  { match: /gitlab\.com/i, icon: 'fa-brands fa-gitlab', color: '#FC6D26', label: 'GitLab' },
  { match: /twitter\.com|x\.com/i, icon: 'fa-brands fa-x-twitter', color: '#ffffff', label: 'X (Twitter)' },
  { match: /spotify\.com/i, icon: 'fa-brands fa-spotify', color: '#1DB954', label: 'Spotify' },
  { match: /soundcloud\.com/i, icon: 'fa-brands fa-soundcloud', color: '#FF5500', label: 'SoundCloud' },
  { match: /steamcommunity\.com|steampowered\.com/i, icon: 'fa-brands fa-steam', color: '#66c0f4', label: 'Steam' },
  { match: /twitch\.tv/i, icon: 'fa-brands fa-twitch', color: '#9146FF', label: 'Twitch' },
  { match: /linkedin\.com/i, icon: 'fa-brands fa-linkedin', color: '#0A66C2', label: 'LinkedIn' },
  { match: /reddit\.com/i, icon: 'fa-brands fa-reddit-alien', color: '#FF4500', label: 'Reddit' },
  { match: /pinterest\.com|pin\.it/i, icon: 'fa-brands fa-pinterest', color: '#BD081C', label: 'Pinterest' },
  { match: /behance\.net/i, icon: 'fa-brands fa-behance', color: '#1769FF', label: 'Behance' },
  { match: /dribbble\.com/i, icon: 'fa-brands fa-dribbble', color: '#EA4C89', label: 'Dribbble' },
  { match: /figma\.com/i, icon: 'fa-brands fa-figma', color: '#F24E1E', label: 'Figma' },
  { match: /medium\.com/i, icon: 'fa-brands fa-medium', color: '#ffffff', label: 'Medium' },
  { match: /patreon\.com/i, icon: 'fa-brands fa-patreon', color: '#FF424D', label: 'Patreon' },
  { match: /paypal\.com|paypal\.me/i, icon: 'fa-brands fa-paypal', color: '#00457C', label: 'PayPal' },
  { match: /whatsapp\.com|wa\.me/i, icon: 'fa-brands fa-whatsapp', color: '#25D366', label: 'WhatsApp' },
  { match: /snapchat\.com/i, icon: 'fa-brands fa-snapchat', color: '#FFFC00', label: 'Snapchat' },
  { match: /roblox\.com/i, icon: 'fa-solid fa-cube', color: '#E2231A', label: 'Roblox' },
  { match: /zalo\.me/i, icon: 'fa-solid fa-comment-dots', color: '#0068FF', label: 'Zalo' },
  { match: /shopee\.vn|shopee\.com/i, icon: 'fa-solid fa-bag-shopping', color: '#EE4D2D', label: 'Shopee' },
  { match: /locket\.camera|locket\.link/i, icon: 'fa-solid fa-heart', color: '#FFB800', label: 'Locket' }
];

const BADGE_DEFINITIONS = {
  verified: { icon: 'fa-solid fa-circle-check', title: 'Verified Creator' },
  developer: { icon: 'fa-solid fa-code', title: 'Software Developer' },
  premium: { icon: 'fa-solid fa-gem', title: 'Premium Member' },
  gamer: { icon: 'fa-solid fa-gamepad', title: 'Pro Gamer' },
  music: { icon: 'fa-solid fa-headphones', title: 'Music Enthusiast' }
};

let state = structuredClone(DEFAULT_CONFIG);
let typewriterTimer = null;
let particleAnimFrame = null;
let particles = [];

/**
 * Normalize and validate user-provided URLs to prevent XSS (javascript: URIs)
 */
function normalizeSafeUrl(rawInput) {
  const trimmed = String(rawInput || '').trim();
  if (!trimmed) return '';
  if (/^(mailto:|tel:)/i.test(trimmed)) return trimmed;
  const withProtocol = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const parsed = new URL(withProtocol);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.href;
    }
  } catch {
    return '';
  }
  return '';
}

/**
 * Automatically detect platform icon, brand color, and suggested title from any URL
 */
function resolveLinkIcon(rawUrl) {
  const trimmed = String(rawUrl || '').trim();
  if (!trimmed) {
    return {
      iconClass: 'fa-solid fa-globe',
      brandColor: state.appearance.accentColor,
      label: 'Website',
      faviconUrl: null,
      isKnownBrand: false
    };
  }

  if (/^mailto:/i.test(trimmed)) {
    return {
      iconClass: 'fa-solid fa-envelope',
      brandColor: '#38bdf8',
      label: 'Email',
      faviconUrl: null,
      isKnownBrand: true
    };
  }

  if (/^tel:/i.test(trimmed)) {
    return {
      iconClass: 'fa-solid fa-phone',
      brandColor: '#4ade80',
      label: 'Điện thoại',
      faviconUrl: null,
      isKnownBrand: true
    };
  }

  const safeUrl = normalizeSafeUrl(trimmed);
  if (!safeUrl) {
    return {
      iconClass: 'fa-solid fa-link',
      brandColor: state.appearance.accentColor,
      label: 'Liên kết',
      faviconUrl: null,
      isKnownBrand: false
    };
  }

  const parsed = new URL(safeUrl);
  const fullTarget = `${parsed.hostname}${parsed.pathname}`;

  for (const brand of BRAND_PATTERNS) {
    if (brand.match.test(fullTarget)) {
      return {
        iconClass: brand.icon,
        brandColor: brand.color,
        label: brand.label,
        faviconUrl: null,
        isKnownBrand: true
      };
    }
  }

  // Fallback for any custom website: automatic high-res Favicon + domain title
  const cleanHost = parsed.hostname.replace(/^www\./i, '');
  const domainParts = cleanHost.split('.');
  const niceLabel = domainParts[0]
    ? domainParts[0].charAt(0).toUpperCase() + domainParts[0].slice(1)
    : cleanHost;

  return {
    iconClass: 'fa-solid fa-globe',
    brandColor: state.appearance.accentColor,
    label: niceLabel,
    faviconUrl: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(cleanHost)}&sz=64`,
    isKnownBrand: false
  };
}

/**
 * Create an icon DOM node (either FontAwesome icon or Website Favicon with fallback)
 */
function createIconElement(iconMeta) {
  if (iconMeta.faviconUrl && !iconMeta.isKnownBrand) {
    const img = document.createElement('img');
    img.className = 'favicon-img';
    img.src = iconMeta.faviconUrl;
    img.alt = iconMeta.label;
    img.loading = 'lazy';
    img.addEventListener('error', () => {
      const fallback = document.createElement('i');
      fallback.className = iconMeta.iconClass || 'fa-solid fa-globe';
      img.replaceWith(fallback);
    });
    return img;
  }
  const iconEl = document.createElement('i');
  iconEl.className = iconMeta.iconClass || 'fa-solid fa-globe';
  return iconEl;
}

/**
 * Convert HEX color (#a855f7) to RGB string ("168, 85, 247")
 */
function hexToRgbString(hex) {
  const sanitized = String(hex || '#a855f7').replace('#', '').trim();
  if (sanitized.length !== 6) return '168, 85, 247';
  const num = parseInt(sanitized, 16);
  if (Number.isNaN(num)) return '168, 85, 247';
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

/**
 * Load initial configuration:
 * 1. Check localStorage for user's live edits
 * 2. Otherwise fetch ./config.json (for GitHub Pages visitors)
 * 3. Fallback to DEFAULT_CONFIG
 */
async function loadConfig() {
  try {
    const savedLocal = localStorage.getItem(STORAGE_KEY);
    if (savedLocal) {
      const parsed = JSON.parse(savedLocal);
      state = mergeConfig(DEFAULT_CONFIG, parsed);
      return;
    }
  } catch (err) {
    console.warn('Could not read localStorage config:', err);
  }

  try {
    const response = await fetch('./config.json', { cache: 'no-store' });
    if (response.ok) {
      const remoteConfig = await response.json();
      state = mergeConfig(DEFAULT_CONFIG, remoteConfig);
    }
  } catch {
    // Running via file:// protocol or offline — use DEFAULT_CONFIG silently
    state = structuredClone(DEFAULT_CONFIG);
  }
}

function mergeConfig(base, incoming) {
  if (!incoming || typeof incoming !== 'object') return structuredClone(base);
  return {
    profile: { ...base.profile, ...(incoming.profile || {}) },
    appearance: { ...base.appearance, ...(incoming.appearance || {}) },
    audio: { ...base.audio, ...(incoming.audio || {}) },
    links: Array.isArray(incoming.links) ? incoming.links : structuredClone(base.links)
  };
}

function saveConfigToLocal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    showToast('⚠️ Ảnh quá lớn để lưu vào bộ nhớ trình duyệt, hãy dùng link ảnh hoặc ảnh nhẹ hơn.');
    console.error('Storage quota exceeded:', err);
  }
}

/**
 * Render the entire Bio Page from current state
 */
function renderAll() {
  renderAppearance();
  renderProfileHeader();
  renderLinks();
  renderAudioPlayer();
  syncEditorInputs();
}

function renderAppearance() {
  const {
    backgroundType,
    backgroundUrl,
    backgroundBlur,
    backgroundDim,
    accentColor,
    cardOpacity,
    enterScreenText
  } = state.appearance;

  const root = document.documentElement;
  root.style.setProperty('--accent-color', accentColor || '#a855f7');
  root.style.setProperty('--accent-rgb', hexToRgbString(accentColor || '#a855f7'));
  root.style.setProperty('--bg-blur', `${Number(backgroundBlur) || 0}px`);
  root.style.setProperty('--bg-dim', (Number(backgroundDim) || 45) / 100);
  root.style.setProperty('--card-opacity', (Number(cardOpacity) || 35) / 100);

  const bgImageEl = document.getElementById('bg-image');
  const bgVideoEl = document.getElementById('bg-video');

  if (backgroundType === 'video' && backgroundUrl) {
    bgImageEl.classList.add('hidden');
    bgVideoEl.classList.remove('hidden');
    if (bgVideoEl.getAttribute('src') !== backgroundUrl) {
      bgVideoEl.setAttribute('src', backgroundUrl);
      bgVideoEl.load();
      bgVideoEl.play().catch(() => {});
    }
  } else {
    bgVideoEl.pause();
    bgVideoEl.classList.add('hidden');
    bgImageEl.classList.remove('hidden');
    bgImageEl.style.backgroundImage = backgroundUrl ? `url("${backgroundUrl}")` : 'none';
  }

  const enterTextEl = document.getElementById('enter-text');
  if (enterTextEl) {
    enterTextEl.textContent = enterScreenText || 'click to enter...';
  }
}

function renderProfileHeader() {
  const { name, username, bio, badges, avatarUrl, statusText, viewsCount } = state.profile;

  document.title = `${name || 'Profile'} | Bio Link`;

  const nameEl = document.getElementById('profile-name');
  const usernameEl = document.getElementById('profile-username');
  const avatarEl = document.getElementById('profile-avatar');
  const viewsEl = document.getElementById('profile-views');
  const statusEl = document.getElementById('profile-status');
  const statusBox = document.getElementById('status-box');
  const badgesContainer = document.getElementById('profile-badges');

  nameEl.textContent = name || 'Anonymous';
  usernameEl.textContent = username || '';
  usernameEl.classList.toggle('hidden', !username);

  if (avatarUrl) {
    avatarEl.src = avatarUrl;
  }

  viewsEl.textContent = Number(viewsCount || 0).toLocaleString('en-US');

  if (statusText && statusText.trim()) {
    statusEl.textContent = statusText;
    statusBox.classList.remove('hidden');
  } else {
    statusBox.classList.add('hidden');
  }

  // Render Badges
  badgesContainer.replaceChildren();
  const activeBadges = Array.isArray(badges) ? badges : [];
  if (activeBadges.length === 0) {
    badgesContainer.classList.add('hidden');
  } else {
    badgesContainer.classList.remove('hidden');
    activeBadges.forEach((badgeKey) => {
      const def = BADGE_DEFINITIONS[badgeKey];
      if (!def) return;
      const span = document.createElement('span');
      span.className = 'badge-item';
      span.title = def.title;
      const icon = document.createElement('i');
      icon.className = def.icon;
      span.appendChild(icon);
      badgesContainer.appendChild(span);
    });
  }

  // Render Bio (Typewriter or Static)
  startBioTypewriter(bio || '');
}

function startBioTypewriter(text) {
  const bioEl = document.getElementById('profile-bio');
  const cursorEl = document.getElementById('typewriter-cursor');
  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
    typewriterTimer = null;
  }

  if (!state.appearance.enableTypewriter || !text) {
    bioEl.textContent = text;
    cursorEl.classList.toggle('hidden', !state.appearance.enableTypewriter);
    return;
  }

  cursorEl.classList.remove('hidden');
  let index = 0;
  let isDeleting = false;

  function tick() {
    if (!isDeleting) {
      index++;
      bioEl.textContent = text.slice(0, index);
      if (index >= text.length) {
        isDeleting = true;
        typewriterTimer = setTimeout(tick, 2800);
        return;
      }
      typewriterTimer = setTimeout(tick, 55);
    } else {
      index--;
      bioEl.textContent = text.slice(0, index);
      if (index <= 0) {
        isDeleting = false;
        typewriterTimer = setTimeout(tick, 500);
        return;
      }
      typewriterTimer = setTimeout(tick, 28);
    }
  }

  tick();
}

/**
 * Render both the Quick Social Icon Bar and the Detailed Link Cards
 * Automatically detects the correct icon for every link URL!
 */
function renderLinks() {
  const iconRowEl = document.getElementById('social-icon-row');
  const linksListEl = document.getElementById('links-list');
  const layoutStyle = state.appearance.layoutStyle || 'both';

  iconRowEl.replaceChildren();
  linksListEl.replaceChildren();

  const validLinks = Array.isArray(state.links) ? state.links : [];

  iconRowEl.classList.toggle('hidden', layoutStyle === 'cards' || validLinks.length === 0);
  linksListEl.classList.toggle('hidden', layoutStyle === 'icons' || validLinks.length === 0);

  validLinks.forEach((item) => {
    const safeHref = normalizeSafeUrl(item.url);
    if (!safeHref) return;

    const iconMeta = resolveLinkIcon(safeHref);
    const displayTitle = (item.title && item.title.trim()) ? item.title.trim() : iconMeta.label;

    // 1. Quick Social Icon Button
    const iconBtn = document.createElement('a');
    iconBtn.className = 'social-icon-btn';
    iconBtn.href = safeHref;
    iconBtn.target = '_blank';
    iconBtn.rel = 'noopener noreferrer';
    iconBtn.title = displayTitle;
    iconBtn.style.setProperty('--brand-color', iconMeta.brandColor);
    iconBtn.appendChild(createIconElement(iconMeta));
    iconRowEl.appendChild(iconBtn);

    // 2. Detailed Link Card
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = safeHref;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.setProperty('--brand-color', iconMeta.brandColor);

    const iconBox = document.createElement('div');
    iconBox.className = 'link-icon-box';
    iconBox.appendChild(createIconElement(iconMeta));

    const textContent = document.createElement('div');
    textContent.className = 'link-text-content';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'link-title';
    titleSpan.textContent = displayTitle;
    textContent.appendChild(titleSpan);

    if (item.subtitle && item.subtitle.trim()) {
      const subSpan = document.createElement('span');
      subSpan.className = 'link-subtitle';
      subSpan.textContent = item.subtitle.trim();
      textContent.appendChild(subSpan);
    }

    const arrow = document.createElement('i');
    arrow.className = 'fa-solid fa-arrow-up-right-from-square link-arrow';

    card.append(iconBox, textContent, arrow);
    linksListEl.appendChild(card);
  });

  renderEditorLinksList();
}

/**
 * Render the interactive link manager inside the Editor Drawer
 */
function renderEditorLinksList() {
  const container = document.getElementById('editor-links-list');
  const countEl = document.getElementById('links-count');
  if (!container) return;

  container.replaceChildren();
  const list = Array.isArray(state.links) ? state.links : [];
  countEl.textContent = String(list.length);

  list.forEach((item, idx) => {
    const iconMeta = resolveLinkIcon(item.url);
    const row = document.createElement('div');
    row.className = 'editor-link-item';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'editor-link-icon';
    iconWrap.style.color = iconMeta.brandColor;
    iconWrap.appendChild(createIconElement(iconMeta));

    const metaWrap = document.createElement('div');
    metaWrap.className = 'editor-link-meta';
    const titleEl = document.createElement('strong');
    titleEl.textContent = item.title || iconMeta.label;
    const urlEl = document.createElement('span');
    urlEl.textContent = item.url;
    metaWrap.append(titleEl, urlEl);

    const actions = document.createElement('div');
    actions.className = 'editor-link-actions';

    const upBtn = document.createElement('button');
    upBtn.className = 'mini-btn';
    upBtn.title = 'Lên trên';
    upBtn.disabled = idx === 0;
    upBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    upBtn.addEventListener('click', () => moveLink(idx, -1));

    const downBtn = document.createElement('button');
    downBtn.className = 'mini-btn';
    downBtn.title = 'Xuống dưới';
    downBtn.disabled = idx === list.length - 1;
    downBtn.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
    downBtn.addEventListener('click', () => moveLink(idx, 1));

    const delBtn = document.createElement('button');
    delBtn.className = 'mini-btn delete';
    delBtn.title = 'Xóa liên kết';
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.addEventListener('click', () => removeLink(idx));

    actions.append(upBtn, downBtn, delBtn);
    row.append(iconWrap, metaWrap, actions);
    container.appendChild(row);
  });
}

function moveLink(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= state.links.length) return;
  const temp = state.links[index];
  state.links[index] = state.links[target];
  state.links[target] = temp;
  saveConfigToLocal();
  renderLinks();
}

function removeLink(index) {
  state.links.splice(index, 1);
  saveConfigToLocal();
  renderLinks();
  showToast('Đã xóa liên kết');
}

/**
 * Hybrid Audio Player (Supports both MP3/Audio URLs and YouTube Links!)
 */
let ytPlayer = null;
let ytReady = false;
let ytCurrentVideoId = null;
let ytPendingPlay = false;
let ytProgressTimer = null;
let isAudioMuted = false;

function extractYouTubeId(rawUrl) {
  const str = String(rawUrl || '').trim();
  if (!str) return null;
  const match = str.match(
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/|live\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i
  );
  return match ? match[1] : null;
}

async function fetchYouTubeMetadata(videoId) {
  if (!videoId) return;
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  state.audio.coverUrl = thumbUrl;

  try {
    const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
    if (res.ok) {
      const data = await res.json();
      if (data.title) state.audio.title = data.title;
      if (data.author_name) state.audio.artist = data.author_name;
    }
  } catch {
    // Ignore metadata fetch errors offline
  }

  saveConfigToLocal();
  renderAudioPlayer();
  syncEditorInputs();
}

function loadYouTubeApiIfNeeded() {
  if (window.YT && window.YT.Player) return;
  if (document.getElementById('yt-iframe-api-script')) return;
  const tag = document.createElement('script');
  tag.id = 'yt-iframe-api-script';
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = function () {
  const videoId = extractYouTubeId(state.audio.audioUrl);
  createOrUpdateYtPlayer(videoId || 'jfKfPfyJRdk');
};

function createOrUpdateYtPlayer(videoId) {
  if (!window.YT || !window.YT.Player) {
    loadYouTubeApiIfNeeded();
    return;
  }

  if (ytPlayer && ytReady) {
    if (ytCurrentVideoId !== videoId) {
      ytCurrentVideoId = videoId;
      if (ytPendingPlay) {
        ytPlayer.loadVideoById(videoId);
      } else {
        ytPlayer.cueVideoById(videoId);
      }
    } else if (ytPendingPlay) {
      ytPlayer.playVideo();
      ytPendingPlay = false;
    }
    return;
  }

  if (ytPlayer) return;

  ytCurrentVideoId = videoId;
  ytPlayer = new window.YT.Player('yt-player', {
    height: '1',
    width: '1',
    videoId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      playlist: videoId,
      playsinline: 1
    },
    events: {
      onReady: () => {
        ytReady = true;
        const vol = Math.round((Number(state.audio.volume) || 0.5) * 100);
        ytPlayer.setVolume(vol);
        if (isAudioMuted) ytPlayer.mute();
        if (ytPendingPlay && extractYouTubeId(state.audio.audioUrl)) {
          ytPlayer.playVideo();
          ytPendingPlay = false;
        }
      },
      onStateChange: (event) => {
        const YTState = window.YT.PlayerState;
        const isPlaying = event.data === YTState.PLAYING || event.data === YTState.BUFFERING;
        updateAudioPlayButtonUI(isPlaying);

        if (event.data === YTState.PLAYING) {
          const dur = ytPlayer.getDuration();
          document.getElementById('audio-duration').textContent = formatSeconds(dur);
          startYtProgressLoop();
        } else {
          stopYtProgressLoop();
        }

        if (event.data === YTState.ENDED) {
          ytPlayer.seekTo(0, true);
          ytPlayer.playVideo();
        }
      },
      onError: () => {
        updateAudioPlayButtonUI(false);
        if (window.location.protocol === 'file:') {
          showToast('💡 Lưu ý: YouTube hạn chế phát một số nhạc bản quyền trên file://. Khi up lên GitHub Pages sẽ phát bình thường!');
        } else {
          showToast('⚠️ Video YouTube này bị chủ sở hữu chặn nhúng, hãy thử một link YouTube khác.');
        }
      }
    }
  });
}

function startYtProgressLoop() {
  stopYtProgressLoop();
  ytProgressTimer = setInterval(() => {
    if (!ytPlayer || !ytReady || typeof ytPlayer.getCurrentTime !== 'function') return;
    const cur = ytPlayer.getCurrentTime() || 0;
    const dur = ytPlayer.getDuration() || 0;
    document.getElementById('audio-current').textContent = formatSeconds(cur);
    if (dur > 0) {
      document.getElementById('audio-duration').textContent = formatSeconds(dur);
      document.getElementById('audio-seek').value = String((cur / dur) * 100);
    }
  }, 400);
}

function stopYtProgressLoop() {
  if (ytProgressTimer) {
    clearInterval(ytProgressTimer);
    ytProgressTimer = null;
  }
}

function updateAudioPlayButtonUI(isPlaying) {
  const widget = document.getElementById('audio-widget');
  const playBtn = document.getElementById('audio-play-btn');
  if (!widget || !playBtn) return;
  widget.classList.toggle('playing', Boolean(isPlaying));
  playBtn.innerHTML = isPlaying
    ? '<i class="fa-solid fa-pause"></i>'
    : '<i class="fa-solid fa-play"></i>';
}

function playActiveAudio() {
  if (!state.audio.enabled || !state.audio.audioUrl) return;
  const audioEl = document.getElementById('bg-audio');
  const ytId = extractYouTubeId(state.audio.audioUrl);

  if (ytId) {
    audioEl.pause();
    ytPendingPlay = true;
    if (ytPlayer && ytReady) {
      if (ytCurrentVideoId !== ytId) {
        ytCurrentVideoId = ytId;
        ytPlayer.loadVideoById(ytId);
      } else {
        ytPlayer.playVideo();
      }
      ytPendingPlay = false;
    } else {
      createOrUpdateYtPlayer(ytId);
    }
  } else {
    if (ytPlayer && ytReady && typeof ytPlayer.pauseVideo === 'function') {
      ytPlayer.pauseVideo();
    }
    audioEl.play().catch(() => {
      showToast('⚠️ Không thể phát nguồn nhạc này, hãy kiểm tra lại link.');
    });
  }
}

function pauseActiveAudio() {
  const audioEl = document.getElementById('bg-audio');
  audioEl.pause();
  ytPendingPlay = false;
  if (ytPlayer && ytReady && typeof ytPlayer.pauseVideo === 'function') {
    ytPlayer.pauseVideo();
  }
  updateAudioPlayButtonUI(false);
}

function isActiveAudioPlaying() {
  const ytId = extractYouTubeId(state.audio.audioUrl);
  if (ytId) {
    if (!ytPlayer || !ytReady || typeof ytPlayer.getPlayerState !== 'function') return false;
    const st = ytPlayer.getPlayerState();
    return st === window.YT?.PlayerState?.PLAYING || st === window.YT?.PlayerState?.BUFFERING;
  }
  const audioEl = document.getElementById('bg-audio');
  return !audioEl.paused && !audioEl.ended;
}

function renderAudioPlayer() {
  const widget = document.getElementById('audio-widget');
  const audioEl = document.getElementById('bg-audio');
  const titleEl = document.getElementById('audio-title');
  const artistEl = document.getElementById('audio-artist');
  const coverEl = document.getElementById('audio-cover');

  const { enabled, title, artist, audioUrl, coverUrl, volume } = state.audio;

  widget.classList.toggle('hidden', !enabled);
  if (!enabled) {
    pauseActiveAudio();
    return;
  }

  titleEl.textContent = title || 'Unknown Track';
  artistEl.textContent = artist ? `• ${artist}` : '';

  const ytId = extractYouTubeId(audioUrl);
  if (coverUrl) {
    coverEl.src = coverUrl;
  } else if (ytId) {
    coverEl.src = `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
  }

  const clampedVol = Math.min(1, Math.max(0, Number(volume) || 0.5));
  audioEl.volume = clampedVol;
  if (ytPlayer && ytReady && typeof ytPlayer.setVolume === 'function') {
    ytPlayer.setVolume(Math.round(clampedVol * 100));
  }

  if (ytId) {
    // Using YouTube source
    audioEl.pause();
    audioEl.removeAttribute('src');
    audioEl.setAttribute('data-src', '');
    createOrUpdateYtPlayer(ytId);
  } else if (audioUrl) {
    // Using direct MP3 / Audio URL
    if (ytPlayer && ytReady && typeof ytPlayer.pauseVideo === 'function') {
      ytPlayer.pauseVideo();
    }
    if (audioEl.getAttribute('data-src') !== audioUrl) {
      const wasPlaying = !audioEl.paused;
      audioEl.src = audioUrl;
      audioEl.setAttribute('data-src', audioUrl);
      if (wasPlaying && enabled) {
        audioEl.play().catch(() => {});
      }
    }
  }
}

function formatSeconds(sec) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function setupAudioEvents() {
  const audioEl = document.getElementById('bg-audio');
  const playBtn = document.getElementById('audio-play-btn');
  const muteBtn = document.getElementById('btn-mute');
  const seekInput = document.getElementById('audio-seek');
  const currentEl = document.getElementById('audio-current');
  const durationEl = document.getElementById('audio-duration');

  playBtn.addEventListener('click', () => {
    if (isActiveAudioPlaying()) {
      pauseActiveAudio();
    } else {
      playActiveAudio();
    }
  });

  audioEl.addEventListener('play', () => updateAudioPlayButtonUI(true));
  audioEl.addEventListener('pause', () => {
    if (!extractYouTubeId(state.audio.audioUrl)) {
      updateAudioPlayButtonUI(false);
    }
  });

  audioEl.addEventListener('loadedmetadata', () => {
    if (!extractYouTubeId(state.audio.audioUrl)) {
      durationEl.textContent = formatSeconds(audioEl.duration);
    }
  });

  audioEl.addEventListener('timeupdate', () => {
    if (extractYouTubeId(state.audio.audioUrl)) return;
    currentEl.textContent = formatSeconds(audioEl.currentTime);
    if (audioEl.duration > 0) {
      seekInput.value = String((audioEl.currentTime / audioEl.duration) * 100);
    }
  });

  seekInput.addEventListener('input', () => {
    const ytId = extractYouTubeId(state.audio.audioUrl);
    if (ytId && ytPlayer && ytReady && typeof ytPlayer.getDuration === 'function') {
      const dur = ytPlayer.getDuration();
      if (dur > 0) {
        ytPlayer.seekTo((Number(seekInput.value) / 100) * dur, true);
      }
    } else if (audioEl.duration > 0) {
      audioEl.currentTime = (Number(seekInput.value) / 100) * audioEl.duration;
    }
  });

  muteBtn.addEventListener('click', () => {
    isAudioMuted = !isAudioMuted;
    audioEl.muted = isAudioMuted;
    if (ytPlayer && ytReady) {
      if (isAudioMuted) ytPlayer.mute();
      else ytPlayer.unMute();
    }
    muteBtn.innerHTML = isAudioMuted
      ? '<i class="fa-solid fa-volume-xmark"></i>'
      : '<i class="fa-solid fa-volume-high"></i>';
  });
}

/**
 * 3D Perspective Card Tilt on Mouse Move (guns.lol signature)
 */
function setup3DTilt() {
  const card = document.getElementById('profile-card');
  const stage = document.querySelector('.main-stage');

  stage.addEventListener('mousemove', (e) => {
    if (!state.appearance.enable3DTilt || window.innerWidth < 768) {
      card.style.transform = '';
      return;
    }
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6.5;
    const rotateY = ((x - centerX) / centerX) * 6.5;

    card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  stage.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

/**
 * Particle Canvas Engine (Snow / Fireflies / Starfield)
 */
function setupParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.4 + 0.8,
      speedY: Math.random() * 0.9 + 0.35,
      speedX: (Math.random() - 0.5) * 0.6,
      alpha: Math.random() * 0.75 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005
    };
  }

  particles = Array.from({ length: 65 }, createParticle);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mode = state.appearance.particleEffect || 'snow';

    if (mode !== 'none') {
      const accent = state.appearance.accentColor || '#a855f7';

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (mode === 'fireflies') {
          p.alpha += p.pulseSpeed;
          if (p.alpha > 0.95 || p.alpha < 0.15) p.pulseSpeed *= -1;
          ctx.fillStyle = accent;
          ctx.shadowBlur = 12;
          ctx.shadowColor = accent;
          ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
          p.y -= p.speedY * 0.55;
          p.x += Math.sin(p.y * 0.02) * 0.45;
        } else if (mode === 'stars') {
          p.alpha += p.pulseSpeed;
          if (p.alpha > 0.95 || p.alpha < 0.2) p.pulseSpeed *= -1;
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#ffffff';
          ctx.globalAlpha = Math.max(0.15, Math.min(1, p.alpha));
        } else {
          // Snow
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 4;
          ctx.shadowColor = '#ffffff';
          ctx.globalAlpha = p.alpha;
          p.y += p.speedY;
          p.x += p.speedX;
        }

        ctx.fill();

        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        } else if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.x < -10) p.x = canvas.width + 10;
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    particleAnimFrame = requestAnimationFrame(animate);
  }

  if (particleAnimFrame) cancelAnimationFrame(particleAnimFrame);
  animate();
}

/**
 * Compress uploaded image via HTML5 Canvas so it can be saved in localStorage & config.json
 */
function readAndCompressImage(file, maxWidth = 1600, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Sync Editor Form Inputs with Current State
 */
function syncEditorInputs() {
  document.getElementById('input-name').value = state.profile.name || '';
  document.getElementById('input-username').value = state.profile.username || '';
  document.getElementById('input-bio').value = state.profile.bio || '';
  document.getElementById('input-views').value = state.profile.viewsCount ?? 1428;
  document.getElementById('input-status').value = state.profile.statusText || '';
  document.getElementById('input-avatar-url').value = state.profile.avatarUrl?.startsWith('data:')
    ? ''
    : (state.profile.avatarUrl || '');

  document.querySelectorAll('.badge-checkbox').forEach((cb) => {
    cb.checked = Array.isArray(state.profile.badges) && state.profile.badges.includes(cb.value);
  });

  document.getElementById('layout-style-select').value = state.appearance.layoutStyle || 'both';
  document.getElementById('select-bg-type').value = state.appearance.backgroundType || 'image';
  document.getElementById('input-bg-url').value = state.appearance.backgroundUrl?.startsWith('data:')
    ? ''
    : (state.appearance.backgroundUrl || '');

  document.getElementById('range-bg-blur').value = state.appearance.backgroundBlur ?? 4;
  document.getElementById('val-bg-blur').textContent = `${state.appearance.backgroundBlur ?? 4}px`;

  document.getElementById('range-bg-dim').value = state.appearance.backgroundDim ?? 45;
  document.getElementById('val-bg-dim').textContent = `${state.appearance.backgroundDim ?? 45}%`;

  document.getElementById('input-accent-color').value = state.appearance.accentColor || '#a855f7';
  document.getElementById('accent-color-hex').textContent = state.appearance.accentColor || '#a855f7';

  document.getElementById('range-card-opacity').value = state.appearance.cardOpacity ?? 35;
  document.getElementById('val-card-opacity').textContent = `${state.appearance.cardOpacity ?? 35}%`;

  document.getElementById('select-particles').value = state.appearance.particleEffect || 'snow';
  document.getElementById('input-enter-text').value = state.appearance.enterScreenText || 'click to enter...';
  document.getElementById('check-3d-tilt').checked = Boolean(state.appearance.enable3DTilt);
  document.getElementById('check-typewriter').checked = Boolean(state.appearance.enableTypewriter);

  document.getElementById('check-audio-enabled').checked = Boolean(state.audio.enabled);
  document.getElementById('input-audio-url').value = state.audio.audioUrl || '';
  document.getElementById('input-audio-title').value = state.audio.title || '';
  document.getElementById('input-audio-artist').value = state.audio.artist || '';
  document.getElementById('input-audio-cover').value = state.audio.coverUrl || '';

  const volPercent = Math.round((Number(state.audio.volume) || 0.5) * 100);
  document.getElementById('range-audio-volume').value = volPercent;
  document.getElementById('val-audio-volume').textContent = `${volPercent}%`;
}

/**
 * Setup Studio Editor Drawer & Real-time Auto-Icon Detection
 */
function setupEditorEvents() {
  const drawer = document.getElementById('editor-drawer');
  const openBtn = document.getElementById('btn-open-editor');
  const closeBtn = document.getElementById('btn-close-editor');
  const backdrop = document.getElementById('editor-backdrop');

  openBtn.addEventListener('click', () => drawer.classList.remove('hidden'));
  closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
  backdrop.addEventListener('click', () => drawer.classList.add('hidden'));

  // Tabs switching
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const pane = document.getElementById(btn.getAttribute('data-tab'));
      if (pane) pane.classList.add('active');
    });
  });

  // Live URL -> Auto Icon Preview as user pastes/types
  const newUrlInput = document.getElementById('new-link-url');
  const newTitleInput = document.getElementById('new-link-title');
  const newSubtitleInput = document.getElementById('new-link-subtitle');
  const previewBox = document.getElementById('detected-icon-preview');

  newUrlInput.addEventListener('input', () => {
    const meta = resolveLinkIcon(newUrlInput.value);
    previewBox.replaceChildren(createIconElement(meta));
    previewBox.style.color = meta.brandColor;
    previewBox.style.borderColor = meta.brandColor;
    newTitleInput.placeholder = `Tự động: ${meta.label}`;
  });

  // Add New Link
  document.getElementById('btn-add-link').addEventListener('click', () => {
    const rawUrl = newUrlInput.value.trim();
    const safeUrl = normalizeSafeUrl(rawUrl);
    if (!safeUrl) {
      showToast('⚠️ Vui lòng nhập đường dẫn URL hợp lệ (VD: https://facebook.com/...)');
      newUrlInput.focus();
      return;
    }

    const meta = resolveLinkIcon(safeUrl);
    const title = newTitleInput.value.trim() || meta.label;
    const subtitle = newSubtitleInput.value.trim();

    state.links.push({
      id: `link-${Date.now()}`,
      url: safeUrl,
      title,
      subtitle
    });

    newUrlInput.value = '';
    newTitleInput.value = '';
    newSubtitleInput.value = '';
    previewBox.innerHTML = '<i class="fa-solid fa-globe"></i>';

    saveConfigToLocal();
    renderLinks();
    showToast(`✨ Đã thêm ${title} kèm icon tự động!`);
  });

  // Allow pressing Enter in URL input to add immediately
  newUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('btn-add-link').click();
    }
  });

  document.getElementById('layout-style-select').addEventListener('change', (e) => {
    state.appearance.layoutStyle = e.target.value;
    saveConfigToLocal();
    renderLinks();
  });

  // Profile Inputs
  const bindProfileField = (id, key, isNumber = false) => {
    document.getElementById(id).addEventListener('input', (e) => {
      state.profile[key] = isNumber ? Number(e.target.value) : e.target.value;
      saveConfigToLocal();
      renderProfileHeader();
    });
  };

  bindProfileField('input-name', 'name');
  bindProfileField('input-username', 'username');
  bindProfileField('input-bio', 'bio');
  bindProfileField('input-views', 'viewsCount', true);
  bindProfileField('input-status', 'statusText');
  bindProfileField('input-avatar-url', 'avatarUrl');

  // Upload Avatar from computer
  document.getElementById('file-avatar').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await readAndCompressImage(file, 450, 0.85);
      state.profile.avatarUrl = dataUrl;
      saveConfigToLocal();
      renderProfileHeader();
      showToast('✅ Đã cập nhật ảnh đại diện!');
    } catch {
      showToast('⚠️ Không thể đọc file ảnh này.');
    }
  });

  // Badges checkboxes
  document.querySelectorAll('.badge-checkbox').forEach((cb) => {
    cb.addEventListener('change', () => {
      const selected = [];
      document.querySelectorAll('.badge-checkbox:checked').forEach((el) => selected.push(el.value));
      state.profile.badges = selected;
      saveConfigToLocal();
      renderProfileHeader();
    });
  });

  // Background & Appearance
  document.getElementById('select-bg-type').addEventListener('change', (e) => {
    state.appearance.backgroundType = e.target.value;
    saveConfigToLocal();
    renderAppearance();
  });

  document.getElementById('input-bg-url').addEventListener('input', (e) => {
    state.appearance.backgroundUrl = e.target.value.trim();
    saveConfigToLocal();
    renderAppearance();
  });

  document.getElementById('file-bg').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await readAndCompressImage(file, 1600, 0.8);
      state.appearance.backgroundType = 'image';
      state.appearance.backgroundUrl = dataUrl;
      document.getElementById('select-bg-type').value = 'image';
      saveConfigToLocal();
      renderAppearance();
      showToast('✅ Đã đổi ảnh nền thành công!');
    } catch {
      showToast('⚠️ Không thể tải ảnh nền.');
    }
  });

  // Preset Backgrounds
  document.querySelectorAll('.preset-thumb').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.appearance.backgroundType = btn.getAttribute('data-type') || 'image';
      state.appearance.backgroundUrl = btn.getAttribute('data-url');
      saveConfigToLocal();
      renderAppearance();
      syncEditorInputs();
      showToast('🎨 Đã áp dụng hình nền mẫu!');
    });
  });

  document.getElementById('range-bg-blur').addEventListener('input', (e) => {
    state.appearance.backgroundBlur = Number(e.target.value);
    document.getElementById('val-bg-blur').textContent = `${e.target.value}px`;
    saveConfigToLocal();
    renderAppearance();
  });

  document.getElementById('range-bg-dim').addEventListener('input', (e) => {
    state.appearance.backgroundDim = Number(e.target.value);
    document.getElementById('val-bg-dim').textContent = `${e.target.value}%`;
    saveConfigToLocal();
    renderAppearance();
  });

  document.getElementById('input-accent-color').addEventListener('input', (e) => {
    state.appearance.accentColor = e.target.value;
    document.getElementById('accent-color-hex').textContent = e.target.value;
    saveConfigToLocal();
    renderAppearance();
    renderLinks();
  });

  document.getElementById('range-card-opacity').addEventListener('input', (e) => {
    state.appearance.cardOpacity = Number(e.target.value);
    document.getElementById('val-card-opacity').textContent = `${e.target.value}%`;
    saveConfigToLocal();
    renderAppearance();
  });

  document.getElementById('select-particles').addEventListener('change', (e) => {
    state.appearance.particleEffect = e.target.value;
    saveConfigToLocal();
  });

  document.getElementById('input-enter-text').addEventListener('input', (e) => {
    state.appearance.enterScreenText = e.target.value;
    saveConfigToLocal();
    renderAppearance();
  });

  document.getElementById('check-3d-tilt').addEventListener('change', (e) => {
    state.appearance.enable3DTilt = e.target.checked;
    saveConfigToLocal();
  });

  document.getElementById('check-typewriter').addEventListener('change', (e) => {
    state.appearance.enableTypewriter = e.target.checked;
    saveConfigToLocal();
    renderProfileHeader();
  });

  // Audio Settings (Supports both YouTube Links & MP3 URLs)
  document.getElementById('check-audio-enabled').addEventListener('change', (e) => {
    state.audio.enabled = e.target.checked;
    saveConfigToLocal();
    renderAudioPlayer();
  });

  document.getElementById('input-audio-url').addEventListener('input', async (e) => {
    const val = e.target.value.trim();
    state.audio.audioUrl = val;
    const ytId = extractYouTubeId(val);
    if (ytId) {
      showToast('🎬 Đã nhận diện link nhạc YouTube! Đang tải thông tin bài hát...');
      await fetchYouTubeMetadata(ytId);
      playActiveAudio();
    } else {
      saveConfigToLocal();
      renderAudioPlayer();
    }
  });

  document.getElementById('file-audio').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    state.audio.audioUrl = objectUrl;
    state.audio.title = file.name.replace(/\.[^/.]+$/, '');
    saveConfigToLocal();
    renderAudioPlayer();
    syncEditorInputs();
    playActiveAudio();
    showToast(`🎵 Đang phát: ${state.audio.title}`);
  });

  document.querySelectorAll('.preset-music-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = btn.getAttribute('data-url');
      state.audio.title = btn.getAttribute('data-title');
      state.audio.artist = btn.getAttribute('data-artist');
      state.audio.audioUrl = url;
      state.audio.enabled = true;

      const ytId = extractYouTubeId(url);
      if (ytId) {
        state.audio.coverUrl = `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
      }

      saveConfigToLocal();
      renderAudioPlayer();
      syncEditorInputs();
      playActiveAudio();
      showToast(`🎵 Đã đổi nhạc: ${state.audio.title}`);
    });
  });

  document.getElementById('input-audio-title').addEventListener('input', (e) => {
    state.audio.title = e.target.value;
    saveConfigToLocal();
    renderAudioPlayer();
  });

  document.getElementById('input-audio-artist').addEventListener('input', (e) => {
    state.audio.artist = e.target.value;
    saveConfigToLocal();
    renderAudioPlayer();
  });

  document.getElementById('input-audio-cover').addEventListener('input', (e) => {
    state.audio.coverUrl = e.target.value.trim();
    saveConfigToLocal();
    renderAudioPlayer();
  });

  document.getElementById('range-audio-volume').addEventListener('input', (e) => {
    const val = Number(e.target.value);
    document.getElementById('val-audio-volume').textContent = `${val}%`;
    state.audio.volume = val / 100;
    document.getElementById('bg-audio').volume = state.audio.volume;
    if (ytPlayer && ytReady && typeof ytPlayer.setVolume === 'function') {
      ytPlayer.setVolume(val);
    }
    saveConfigToLocal();
  });

  // Export / Import / Reset for GitHub Pages
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const jsonString = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('📦 Đã tải xuống file config.json! Hãy đặt vào thư mục GitHub của bạn.');
  });

  document.getElementById('btn-copy-json').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(state, null, 2));
      showToast('📋 Đã copy toàn bộ cấu hình JSON vào bộ nhớ tạm!');
    } catch {
      showToast('⚠️ Trình duyệt không cho phép copy tự động.');
    }
  });

  document.getElementById('file-import-json').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(String(ev.target.result));
        state = mergeConfig(DEFAULT_CONFIG, imported);
        saveConfigToLocal();
        renderAll();
        showToast('✅ Đã nhập cấu hình config.json thành công!');
      } catch {
        showToast('⚠️ File JSON không hợp lệ.');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset-default').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(DEFAULT_CONFIG);
    renderAll();
    showToast('🔄 Đã khôi phục về giao diện mặc định.');
  });
}

/**
 * Splash Screen ("Click to Enter") & Share Button
 */
function setupSplashAndShare() {
  const overlay = document.getElementById('enter-overlay');

  function enterSite() {
    if (overlay.classList.contains('entered')) return;
    overlay.classList.add('entered');
    if (state.audio.enabled && state.audio.audioUrl) {
      playActiveAudio();
    }
  }

  overlay.addEventListener('click', enterSite);
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enterSite();
    }
  });

  document.getElementById('btn-share').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('🔗 Đã sao chép link trang Bio vào bộ nhớ tạm!');
    } catch {
      showToast('🔗 Hãy copy đường dẫn trên thanh địa chỉ trình duyệt.');
    }
  });
}

let toastTimeout = null;
function showToast(message) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.add('hidden');
  }, 3600);
}

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', async () => {
  loadYouTubeApiIfNeeded();
  await loadConfig();
  renderAll();
  setupAudioEvents();
  setup3DTilt();
  setupParticles();
  setupEditorEvents();
  setupSplashAndShare();
});

