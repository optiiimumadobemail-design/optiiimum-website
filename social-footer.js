/* ============================================================
   social-footer.js
   ------------------------------------------------------------
   Premium social-links band injected into every page footer
   (<footer class="foot">). Single source of truth: edit links
   here and the entire site updates.

   · Bilingual (English / Arabic) — toggles with the existing
     .i18n-en / .i18n-ar / [lang] mechanism.
   · Auto-inserts above .foot-bottom inside the .foot container
     so it lands above the © line on every page.
   · Skips pages that already have a [data-social-band] block.
   · Light + dark mode aware via prefers-color-scheme + a
     fallback dark gradient that matches the footer chrome.
   ============================================================ */
(function () {
  'use strict';

  var SOCIALS = [
    {
      id: 'instagram',
      name: { en: 'Instagram', ar: 'إنستجرام' },
      handle: '@optiiimumsolutions',
      url: 'https://www.instagram.com/optiiimumsolutions',
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/>' +
          '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>' +
          '<circle cx="17.4" cy="6.6" r="1.05" fill="currentColor"/>' +
        '</svg>'
    },
    {
      id: 'tiktok',
      name: { en: 'TikTok', ar: 'تيك توك' },
      handle: '@optiiimumsolutionsegy',
      url: 'https://www.tiktok.com/@optiiimumsolutionsegy',
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<path d="M14.2 3h2.6c.18 1.55.96 2.84 2.2 3.62.78.5 1.7.78 2.5.83v2.7c-1.78-.04-3.4-.62-4.7-1.6v6.65c0 3.42-2.78 6.2-6.2 6.2A6.2 6.2 0 0 1 4.4 15.2c0-3.42 2.78-6.2 6.2-6.2.34 0 .67.03 1 .08v2.78a3.5 3.5 0 1 0 2.6 3.34V3Z" fill="currentColor"/>' +
        '</svg>'
    },
    {
      id: 'facebook',
      name: { en: 'Facebook', ar: 'فيسبوك' },
      handle: 'Optiiimum',
      url: 'https://www.facebook.com/Optiiimum',
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<path d="M14.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.4H8.6V13h2.8v8h3.1Z" fill="currentColor"/>' +
        '</svg>'
    },
    {
      id: 'youtube',
      name: { en: 'YouTube', ar: 'يوتيوب' },
      handle: '@optimumsolutions851',
      url: 'https://www.youtube.com/@optimumsolutions851',
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<rect x="2.3" y="5.3" width="19.4" height="13.4" rx="3.4" stroke="currentColor" stroke-width="1.6"/>' +
          '<path d="M10.4 9.3v5.4L15 12l-4.6-2.7Z" fill="currentColor"/>' +
        '</svg>'
    },
    {
      id: 'linkedin',
      name: { en: 'LinkedIn', ar: 'لينكدإن' },
      handle: 'company/optiiimum',
      url: 'https://www.linkedin.com/company/optiiimum/',
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6"/>' +
          '<path d="M7.2 10.2v6.8M7.2 7.6v.05M10.6 17v-4.1c0-1.4 1-2.2 2.1-2.2 1.1 0 2.1.8 2.1 2.2V17M10.6 17v-6.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
        '</svg>'
    }
  ];

  function injectStyles() {
    if (document.getElementById('social-band-css')) return;
    var css =
      /* Scoped to .social-band so it doesn't fight site CSS */
      '.social-band{margin-top:48px;padding:36px 0 28px;border-top:1px solid var(--line,#E6E3DB);border-bottom:1px solid var(--line,#E6E3DB);position:relative;}' +
      '.social-band-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:22px;}' +
      '.social-band-eyebrow{font-family:var(--font-mono,ui-monospace,monospace);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3,#7A7770);}' +
      '.social-band-title{margin:6px 0 0;font-size:clamp(22px,2.4vw,30px);font-weight:600;letter-spacing:-.01em;line-height:1.15;color:var(--ink,#0A0A0A);}' +
      '.social-band-sub{max-width:42ch;color:var(--ink-2,#3D3D3A);font-size:14.5px;line-height:1.55;}' +

      /* grid of cards */
      '.social-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;}' +
      '@media (max-width:1080px){.social-grid{grid-template-columns:repeat(3,1fr);}}' +
      '@media (max-width:640px){.social-grid{grid-template-columns:repeat(2,1fr);}}' +
      '@media (max-width:380px){.social-grid{grid-template-columns:1fr;}}' +

      '.social-tile{position:relative;display:flex;align-items:center;gap:12px;padding:14px 14px;border-radius:14px;border:1px solid var(--line,#E6E3DB);background:var(--bg-elev,#fff);color:inherit;text-decoration:none;border-bottom:1px solid var(--line,#E6E3DB);transition:transform .35s cubic-bezier(.2,.7,.1,1),border-color .25s ease,box-shadow .3s ease,background .25s ease;overflow:hidden;isolation:isolate;}' +
      '.social-tile::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(135deg,#54B3EC,#7C5CFF 45%,#E555C8);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s ease;pointer-events:none;z-index:1;}' +
      '.social-tile:hover{transform:translateY(-3px);border-color:transparent;box-shadow:0 16px 38px -20px rgba(84,179,236,.55),0 4px 14px -10px rgba(229,85,200,.35);}' +
      '.social-tile:hover::before{opacity:1;}' +
      '.social-tile:hover .social-icon{background:linear-gradient(135deg,#54B3EC,#7C5CFF 60%,#E555C8);color:#fff;border-color:transparent;}' +
      '.social-tile:hover .social-arrow{color:#7C5CFF;transform:translate(2px,-2px);}' +
      '[dir="rtl"] .social-tile:hover .social-arrow{transform:translate(-2px,-2px);}' +

      '.social-icon{flex:0 0 auto;width:38px;height:38px;border-radius:11px;display:grid;place-items:center;border:1px solid var(--line,#E6E3DB);background:var(--bg-band,#F1EFE9);color:var(--ink,#0A0A0A);transition:background .3s ease,color .3s ease,border-color .3s ease;}' +
      '.social-icon svg{width:18px;height:18px;}' +

      '.social-meta{display:flex;flex-direction:column;min-width:0;flex:1 1 auto;}' +
      '.social-name{font-weight:600;font-size:13.5px;line-height:1.15;color:var(--ink,#0A0A0A);}' +
      '.social-handle{font-family:var(--font-mono,ui-monospace,monospace);font-size:11.5px;line-height:1.2;color:var(--ink-3,#7A7770);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;direction:ltr;text-align:start;}' +
      '[dir="rtl"] .social-handle{text-align:end;}' +

      '.social-arrow{flex:0 0 auto;color:var(--ink-3,#7A7770);transition:transform .25s ease,color .25s ease;font-size:14px;line-height:1;}' +

      /* Dark mode polish (matches footer) */
      '@media (prefers-color-scheme:dark){' +
        '.social-tile{background:rgba(255,255,255,.03);border-color:rgba(255,255,255,.1);}' +
        '.social-icon{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);color:#fff;}' +
        '.social-band{border-color:rgba(255,255,255,.1);}' +
        '.social-name{color:#fff;}' +
        '.social-band-title{color:#fff;}' +
      '}' +
      'body.is-dark .social-tile{background:rgba(255,255,255,.03);border-color:rgba(255,255,255,.1);}' +
      'body.is-dark .social-icon{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);color:#fff;}' +
      'body.is-dark .social-band{border-color:rgba(255,255,255,.1);}' +
      'body.is-dark .social-name,body.is-dark .social-band-title{color:#fff;}' +

      /* Reduced motion */
      '@media (prefers-reduced-motion:reduce){.social-tile,.social-icon,.social-arrow{transition:none;}.social-tile:hover{transform:none;}}';

    var s = document.createElement('style');
    s.id = 'social-band-css';
    s.textContent = css;
    document.head.appendChild(s);
  }

  function buildBand() {
    var wrap = document.createElement('div');
    wrap.className = 'social-band';
    wrap.setAttribute('data-social-band', '');

    var head = document.createElement('div');
    head.className = 'social-band-head';
    head.innerHTML =
      '<div>' +
        '<span class="social-band-eyebrow">' +
          '<span class="i18n-en">Optiiimum · Social</span>' +
          '<span class="i18n-ar">أوبتيموم · السوشيال</span>' +
        '</span>' +
        '<h3 class="social-band-title">' +
          '<span class="i18n-en">Connect with Optiiimum</span>' +
          '<span class="i18n-ar">تابع Optiiimum على المنصات</span>' +
        '</h3>' +
      '</div>' +
      '<p class="social-band-sub">' +
        '<span class="i18n-en">Same playbooks. Different feeds. Follow the work in real time.</span>' +
        '<span class="i18n-ar">نفس النظام. على كل المنصات. تابع شغلنا أوّل بأوّل.</span>' +
      '</p>';

    var grid = document.createElement('div');
    grid.className = 'social-grid';

    SOCIALS.forEach(function (s) {
      var a = document.createElement('a');
      a.className = 'social-tile';
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('data-platform', s.id);
      a.setAttribute(
        'aria-label',
        'Open Optiiimum on ' + s.name.en + ' (' + s.handle + ') — opens in a new tab'
      );

      a.innerHTML =
        '<span class="social-icon" aria-hidden="true">' + s.icon + '</span>' +
        '<span class="social-meta">' +
          '<span class="social-name">' +
            '<span class="i18n-en">' + s.name.en + '</span>' +
            '<span class="i18n-ar">' + s.name.ar + '</span>' +
          '</span>' +
          '<span class="social-handle">' + s.handle + '</span>' +
        '</span>' +
        '<span class="social-arrow" aria-hidden="true">↗</span>';

      grid.appendChild(a);
    });

    wrap.appendChild(head);
    wrap.appendChild(grid);
    return wrap;
  }

  function inject() {
    var footer = document.querySelector('footer.foot');
    if (!footer) return;
    if (footer.querySelector('[data-social-band]')) return; // already injected

    var container = footer.querySelector('.container') || footer;
    var band = buildBand();

    // Prefer to land above the © row when it exists; otherwise prepend.
    var bottom = container.querySelector('.foot-bottom');
    if (bottom) {
      container.insertBefore(band, bottom);
    } else {
      container.appendChild(band);
    }
  }

  function init() {
    injectStyles();
    inject();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
