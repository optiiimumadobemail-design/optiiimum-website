/* =====================================================================
   Optiiimum site loader
   Drop <script src="loader.js"></script> into <head> on any page.
   - Shows the logo-mark animation full-screen on initial load
   - Matches active theme (light/dark) and inverts the GIF on dark
   - Fades out shortly after window.load (min ~500ms to avoid flicker)
   - Self-contained: injects its own CSS and DOM
   ===================================================================== */
(function () {
  if (window.__optLoaderInit) return;
  window.__optLoaderInit = true;

  var MIN_SHOW_MS = 500;   // don't flash off too fast
  var FADE_MS = 420;       // fade-out duration
  var SHOW_AFTER_MS = 60;  // delay before showing (skip the loader entirely if page renders instantly)
  var startedAt = Date.now();

  // ---- CSS (injected into <head> as soon as parsing reaches the script tag) ----
  var css =
    '#opt-loader{position:fixed;inset:0;z-index:2147483647;' +
    'display:flex;align-items:center;justify-content:center;' +
    'background:#F5F2EC;transition:opacity ' + FADE_MS + 'ms ease;' +
    'opacity:1;pointer-events:auto}' +
    'html[data-theme="dark"] #opt-loader{background:#0B0B0B}' +
    '#opt-loader img{width:clamp(120px,16vw,200px);height:auto;display:block;' +
    'image-rendering:auto}' +
    'html[data-theme="dark"] #opt-loader img{filter:invert(1)}' +
    '#opt-loader.is-hidden{opacity:0;pointer-events:none}' +
    'html.opt-loading,html.opt-loading body{overflow:hidden}';

  var style = document.createElement('style');
  style.setAttribute('data-opt-loader', '');
  style.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(style);
  document.documentElement.classList.add('opt-loading');

  // ---- Inject the loader element as soon as body exists ----
  function inject() {
    if (document.getElementById('opt-loader')) return;
    if (!document.body) return;
    var el = document.createElement('div');
    el.id = 'opt-loader';
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('role', 'presentation');
    var img = document.createElement('img');
    img.src = 'assets/logo-loading.gif';
    img.alt = '';
    img.decoding = 'async';
    el.appendChild(img);
    document.body.appendChild(el);
  }

  // Try right away (in case the script is at end of body or body is already there),
  // otherwise wait for DOM parsing to expose body.
  if (document.body) {
    inject();
  } else {
    // poll briefly until body shows up, then inject; also listen for DOMContentLoaded as fallback
    var iv = setInterval(function () {
      if (document.body) {
        clearInterval(iv);
        inject();
      }
    }, 10);
    document.addEventListener('DOMContentLoaded', function () {
      clearInterval(iv);
      inject();
    });
  }

  // ---- Hide on window load (or DOM ready as a fallback if load never fires fast) ----
  function hide() {
    var el = document.getElementById('opt-loader');
    document.documentElement.classList.remove('opt-loading');
    if (!el) return;
    el.classList.add('is-hidden');
    setTimeout(function () {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }, FADE_MS + 50);
  }

  function scheduleHide() {
    var elapsed = Date.now() - startedAt;
    var wait = Math.max(0, MIN_SHOW_MS - elapsed);
    setTimeout(hide, wait);
  }

  if (document.readyState === 'complete') {
    scheduleHide();
  } else {
    window.addEventListener('load', scheduleHide, { once: true });
  }

  // Safety net: never let the loader stick around longer than 8 seconds
  setTimeout(hide, 8000);
})();
