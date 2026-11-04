/**
 * @quatrocentavos / video editor — Swiss Brutalist Editorial Portfolio (English Version)
 * Palette: Black (#000000), Violet (#7D39EB), Lime (#C6FF33), White (#FFFFFF)
 */

const FEATURED_PROJECT = {
  id: 0,
  type: "vimeo",
  title: "Showreel // Editing & Montage",
  role: "MONTAGE & SOUND DESIGN",
  duration: "SHOWREEL",
  vimeoId: "1148539423",
  externalUrl: "https://vimeo.com/1148539423",
  thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&auto=format&fit=crop&q=80"
};

const PROJECTS = [
  {
    id: 1,
    index: "01",
    type: "youtube",
    title: "os caba tão sabido agora - Lethal Company",
    category: "GAMEPLAY & DYNAMIC CUT",
    role: "EDITING & SOUND DESIGN",
    duration: "YOUTUBE",
    youtubeId: "VUbfBQdJGzo"
  },
  {
    id: 2,
    index: "02",
    type: "youtube",
    title: "Editing Project // 02",
    category: "MONTAGE & PACING",
    role: "FULL EDITING",
    duration: "YOUTUBE",
    youtubeId: "MdmT3ZLkwlU"
  },
  {
    id: 3,
    index: "03",
    type: "youtube",
    title: "Editing Project // 03",
    category: "PACING & FINISHING",
    role: "CUT & SOUND FX",
    duration: "YOUTUBE",
    youtubeId: "_KZQR6jE6_E"
  },
  {
    id: 4,
    index: "04",
    type: "youtube",
    title: "Editing Project // 04",
    category: "MONTAGE & COLOR",
    role: "CUT & FINISHING",
    duration: "YOUTUBE",
    youtubeId: "16grkddQ55k"
  },
  {
    id: 5,
    index: "05",
    type: "youtube",
    title: "Editing Project // 05",
    category: "DYNAMIC PACING",
    role: "EDITING & MOTION",
    duration: "YOUTUBE",
    youtubeId: "fgFMVIgKmdo"
  },
  {
    id: 6,
    index: "06",
    type: "youtube",
    title: "Editing Project // 06",
    category: "SHOWCASE & PACING",
    role: "MONTAGE & RHYTHM",
    duration: "YOUTUBE",
    youtubeId: "ZlybsmR0I_g"
  }
];

const CONFIG = {
  email: "mathquatrocentavos@gmail.com"
};

// DOM References
const grid = document.getElementById('works-grid');
const modal = document.getElementById('video-modal');
const modalIframe = document.getElementById('modal-iframe');
const modalTitle = document.getElementById('modal-title');
const modalRole = document.getElementById('modal-role');
const modalExternalLink = document.getElementById('modal-external-link');
const closeModalBtn = document.getElementById('close-modal-btn');
const copyEmailBtn = document.getElementById('copy-email-btn');
const copyText = document.getElementById('copy-text');
const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

if (copyEmailBtn) {
  copyEmailBtn.dataset.email = CONFIG.email;
}

// Render Works Grid
function renderWorks() {
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(project => {
    const displayThumb = project.youtubeId && project.youtubeId !== "dQw4w9WgXcQ"
      ? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
      : project.thumb;

    return `
      <article 
        class="group relative bg-black dark:bg-black border border-neutral-800 dark:border-neutral-800 hover:border-brand-lime transition-all duration-300 flex flex-col cursor-pointer"
        onclick="openVideoModal(${project.id})"
      >
        <!-- Header Strip of each card -->
        <div class="card-strip px-4 py-2 border-b border-neutral-800 flex items-center justify-between font-mono text-[11px] text-neutral-400 bg-neutral-950">
          <span class="text-brand-lime font-bold font-mono">// ${project.index}</span>
          <span class="tracking-wider uppercase">${project.category}</span>
          <span>${project.duration}</span>
        </div>

        <!-- Video Thumbnail Container -->
        <div class="relative aspect-video w-full bg-neutral-900 overflow-hidden">
          <img 
            src="${displayThumb}" 
            alt="${project.title}"
            loading="lazy"
            class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100"
          />

          <!-- Play button overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="play-trigger w-12 h-12 flex items-center justify-center">
              <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
            </div>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between bg-brand-dark">
          <div>
            <h3 class="font-display font-bold text-lg text-white group-hover:text-brand-lime transition-colors tracking-tight line-clamp-1 mb-2">
              ${project.title}
            </h3>
            <p class="font-mono text-xs text-neutral-400">
              ${project.role}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between font-mono text-[11px] text-neutral-500">
            <span>24FPS / PRORES</span>
            <span class="text-neutral-400 group-hover:text-brand-lime transition-colors flex items-center gap-1">
              WATCH <span>→</span>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Open Video Modal
window.openVideoModal = function(projectId) {
  const project = projectId === 0 
    ? FEATURED_PROJECT 
    : PROJECTS.find(p => p.id === projectId);

  if (!project || !modal || !modalIframe) return;

  modalTitle.textContent = project.title;
  modalRole.textContent = `SPEC: ${project.role}`;
  
  if (project.type === "vimeo") {
    modalExternalLink.href = project.externalUrl || `https://vimeo.com/${project.vimeoId}`;
    modalExternalLink.innerHTML = `OPEN ON VIMEO <span>↗</span>`;
    modalIframe.src = `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
  } else {
    modalExternalLink.href = `https://www.youtube.com/watch?v=${project.youtubeId}`;
    modalExternalLink.innerHTML = `OPEN ON YOUTUBE <span>↗</span>`;
    modalIframe.src = `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0`;
  }

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
  }, 10);
  document.body.style.overflow = 'hidden';
};

window.openFeaturedVideo = function() {
  openVideoModal(0);
};

function closeVideoModal() {
  if (!modal || !modalIframe) return;

  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    modalIframe.src = '';
    document.body.style.overflow = '';
  }, 200);
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeVideoModal);

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

// Copy Email
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    const email = copyEmailBtn.dataset.email || CONFIG.email;
    navigator.clipboard.writeText(email).then(() => {
      if (copyText) {
        const originalText = copyText.textContent;
        copyText.textContent = 'COPIED!';
        copyEmailBtn.classList.add('bg-brand-lime', 'text-black');
        setTimeout(() => {
          copyText.textContent = originalText;
          copyEmailBtn.classList.remove('bg-brand-lime', 'text-black');
        }, 2000);
      }
    });
  });
}

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  
  if (isDark) {
    html.classList.remove('dark');
    document.body.classList.remove('bg-brand-dark', 'text-neutral-100');
    document.body.classList.add('bg-[#f3f3f5]', 'text-black');
    if (themeText) themeText.textContent = 'DARK';
  } else {
    html.classList.add('dark');
    document.body.classList.add('bg-brand-dark', 'text-neutral-100');
    document.body.classList.remove('bg-[#f3f3f5]', 'text-black');
    if (themeText) themeText.textContent = 'LIGHT';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
  if (window.lucide) {
    lucide.createIcons();
  }
});
