/* ============================================================
   nav-slider.js — primary nav paged slider, shared across pages.
   ------------------------------------------------------------
   · Targets .primary-nav-wrap containing
     .nav-slider > .nav-track > <a>
   · Auto-injects nav-arrow buttons if missing.
   · Pages tabs in groups of --nav-per-page (default 4, 3 on
     narrow desktops via the existing CSS breakpoint).
   · Auto-scrolls to the page containing the [aria-current] tab
     on load so the user sees themselves highlighted with the
     gradient pill that matches the home page.
   ============================================================ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  var ARROW_PREV =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' +
    'aria-hidden="true"><polyline points="14.5 6 8.5 12 14.5 18"/></svg>';
  var ARROW_NEXT =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' +
    'aria-hidden="true"><polyline points="9.5 6 15.5 12 9.5 18"/></svg>';

  function ensureArrows(wrap, slider) {
    var prev = wrap.querySelector('.nav-arrow.nav-prev');
    var next = wrap.querySelector('.nav-arrow.nav-next');
    if (!prev) {
      prev = document.createElement('button');
      prev.type = 'button';
      prev.className = 'nav-arrow nav-prev';
      prev.setAttribute('aria-label', 'Show previous navigation items');
      prev.dataset.ariaAr = 'إظهار التابات السابقة';
      prev.innerHTML = ARROW_PREV;
      wrap.insertBefore(prev, slider);
    }
    if (!next) {
      next = document.createElement('button');
      next.type = 'button';
      next.className = 'nav-arrow nav-next';
      next.setAttribute('aria-label', 'Show next navigation items');
      next.dataset.ariaAr = 'إظهار التابات التالية';
      next.innerHTML = ARROW_NEXT;
      slider.after
        ? slider.after(next)
        : wrap.insertBefore(next, slider.nextSibling);
    }
    return { prev: prev, next: next };
  }

  function initWrap(wrap) {
    if (!wrap || wrap.dataset.navSliderInit === '1') return;
    var slider = wrap.querySelector('.nav-slider');
    var track  = wrap.querySelector('.nav-track');
    if (!slider || !track) return;
    var tabs = Array.prototype.slice.call(track.querySelectorAll('a'));
    if (!tabs.length) return;

    wrap.dataset.navSliderInit = '1';

    var arrows = ensureArrows(wrap, slider);
    var prev = arrows.prev;
    var next = arrows.next;

    function perPage() {
      var v = getComputedStyle(wrap).getPropertyValue('--nav-per-page').trim();
      return parseInt(v, 10) || 4;
    }
    function maxPage() {
      return Math.max(0, Math.ceil(tabs.length / perPage()) - 1);
    }
    var page = 0;

    function apply() {
      var mp = maxPage();
      if (page > mp) page = mp;
      var stepPct = (perPage() / tabs.length) * 100;
      track.style.transform = 'translateX(' + (-page * stepPct) + '%)';
      prev.toggleAttribute('disabled', page === 0);
      next.toggleAttribute('disabled', page >= mp);
      prev.classList.toggle('is-disabled', page === 0);
      next.classList.toggle('is-disabled', page >= mp);
      tabs.forEach(function (a, i) {
        var pageOf = Math.floor(i / perPage());
        a.setAttribute('aria-hidden', pageOf === page ? 'false' : 'true');
        a.tabIndex = pageOf === page ? 0 : -1;
      });
    }

    var activeIdx = tabs.findIndex
      ? tabs.findIndex(function (a) { return a.hasAttribute('aria-current'); })
      : (function () {
          for (var i = 0; i < tabs.length; i++) if (tabs[i].hasAttribute('aria-current')) return i;
          return -1;
        })();
    if (activeIdx >= 0) page = Math.floor(activeIdx / perPage());

    prev.addEventListener('click', function () {
      page = Math.max(0, page - 1); apply();
    });
    next.addEventListener('click', function () {
      page = Math.min(maxPage(), page + 1); apply();
    });

    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') next.click();
      else if (e.key === 'ArrowLeft') prev.click();
    });

    // Swipe support
    var touchStartX = 0, touchEndX = 0;
    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var dx = touchEndX - touchStartX;
      if (Math.abs(dx) < 40) return;
      var rtl = document.documentElement.dir === 'rtl';
      if ((dx < 0 && !rtl) || (dx > 0 && rtl)) next.click();
      else prev.click();
    }, { passive: true });

    window.addEventListener('resize', apply);
    new MutationObserver(function () { apply(); }).observe(
      document.documentElement,
      { attributes: true, attributeFilter: ['dir', 'lang'] }
    );

    apply();
  }

  ready(function () {
    var wraps = document.querySelectorAll('.primary-nav-wrap');
    wraps.forEach(initWrap);
  });
})();
