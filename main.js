(function () {
  document.documentElement.classList.replace('no-js', 'js');
})();

(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'theme';

  var ICONS = {
    moon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>'
  };

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
    toggle.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
  }

  // Dark is this site's identity (matching the lesgmstudios.com reference),
  // not just a system-preference fallback — default to it regardless of OS
  // theme, and only defer to what the visitor explicitly chose before.
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored || 'dark';
  applyTheme(initial);

  toggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });
})();

(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('nav-mobile-overlay');
  if (!hamburger || !overlay) return;

  function closeOverlay() {
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openOverlay() {
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeOverlay();
    else openOverlay();
  });

  overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeOverlay);
  });
})();

(function () {
  // Types out the hero positioning statement character by character, with a
  // blinking cursor — a nod to "restoring signal" one character at a time.
  const target = document.getElementById('typewriter-target');
  if (!target) return;

  const textEl = target.querySelector('.typewriter-text');
  const cursorEl = target.querySelector('.typewriter-cursor');
  const fullText = target.getAttribute('data-full-text') || '';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    textEl.textContent = fullText;
    cursorEl.classList.add('is-done');
    return;
  }

  const SPEED_MS = 35;
  const START_DELAY_MS = 400;
  let i = 0;

  function tick() {
    i += 1;
    textEl.textContent = fullText.slice(0, i);
    if (i < fullText.length) {
      setTimeout(tick, SPEED_MS);
    } else {
      cursorEl.classList.add('is-done');
    }
  }

  setTimeout(tick, START_DELAY_MS);
})();

(function () {
  // Hero CTA pills fade in on their own short delay, independent of the
  // typewriter's pace — they shouldn't wait on it to finish.
  const ctaRow = document.getElementById('hero-cta-row');
  if (!ctaRow) return;
  setTimeout(function () {
    ctaRow.classList.add('is-visible');
  }, 400);
})();

(function () {
  const copyBtn = document.getElementById('email-copy-btn');
  if (!copyBtn) return;

  const label = copyBtn.querySelector('.pill__label');
  const email = copyBtn.getAttribute('data-email') || '';
  const originalLabel = label.textContent;
  let resetTimer = null;

  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(email).then(function () {
      label.textContent = '복사됨! · ' + email;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        label.textContent = originalLabel;
      }, 2000);
    });
  });
})();

(function () {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  // Stagger cards that reveal together (same parent) so groups cascade in
  // rather than popping in simultaneously — mirrors the cascading entrance
  // used on lesgmstudios.com's grid sections.
  const groups = new Map();
  revealEls.forEach(function (el) {
    const key = el.parentElement;
    const index = groups.get(key) || 0;
    el.style.setProperty('--reveal-delay', Math.min(index * 0.1, 0.4) + 's');
    groups.set(key, index + 1);
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
