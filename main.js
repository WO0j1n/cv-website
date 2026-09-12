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
