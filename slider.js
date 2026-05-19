/* ============================================================
   slider.js — Optiiimum nav slider + homepage content carousels
   ------------------------------------------------------------
   · Converts .primary-nav into a horizontal-scroll rail with
     small left/right arrow buttons that appear only on overflow.
   · Converts homepage content grids (services, cases, courses,
     ambassadors preview, blog) into premium swipe carousels.
   · No content is hidden — every item stays in the DOM and is
     reachable by scroll, drag, swipe, keyboard, or arrow click.
   · Bilingual & RTL-aware. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Arrow SVGs (thin, premium) -------------------------
  var ARROW_PREV =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" ' +
    'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="14.5 6 8.5 12 14.5 18"/></svg>';
  var ARROW_NEXT =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" ' +
    'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="9.5 6 15.5 12 9.5 18"/></svg>';

  function makeArrow(dir, labelEn, labelAr) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'rail-arrow rail-arrow-' + dir;
    var lang = document.documentElement.getAttribute('lang') || 'en';
    b.setAttribute('aria-label', lang === 'ar' ? labelAr : labelEn);
    b.dataset.labelEn = labelEn;
    b.dataset.labelAr = labelAr;
    b.innerHTML = dir === 'prev' ? ARROW_PREV : ARROW_NEXT;
    return b;
  }

  function isRTL() {
    return document.documentElement.getAttribute('dir') === 'rtl';
  }

  // ---- Generic rail attach -------------------------------
  function attachRail(scroller, opts) {
    opts = opts || {};
    if (!scroller || scroller.dataset.railInit === '1') return null;
    scroller.dataset.railInit = '1';

    var parent = scroller.parentNode;
    var wrap = document.createElement('div');
    wrap.className = 'rail-wrap' + (opts.wrapClass ? ' ' + opts.wrapClass : '');
    parent.insertBefore(wrap, scroller);
    wrap.appendChild(scroller);
    scroller.classList.add('rail-scroller');

    var prev = makeArrow('prev', opts.labelPrevEn || 'Previous', opts.labelPrevAr || 'السابق');
    var next = makeArrow('next', opts.labelNextEn || 'Next', opts.labelNextAr || 'التالي');
    wrap.appendChild(prev);
    wrap.appendChild(next);

    function step(dir) {
      var w = scroller.clientWidth;
      var stepPx = Math.max(220, w * (opts.pageRatio || 0.8));
      var rtl = isRTL();
      // 'next' should always move in reading direction (right in LTR, left in RTL)
      var sign = (dir === 'next' ? 1 : -1) * (rtl ? -1 : 1);
      scroller.scrollBy({
        left: stepPx * sign,
        behavior: REDUCED ? 'auto' : 'smooth'
      });
    }

    prev.addEventListener('click', function () { step('prev'); });
    next.addEventListener('click', function () { step('next'); });

    function update() {
      var maxScroll = scroller.scrollWidth - scroller.clientWidth;
      var hasOverflow = maxScroll > 4;
      wrap.classList.toggle('has-overflow', hasOverflow);
      if (!hasOverflow) {
        prev.classList.add('is-disabled');
        next.classList.add('is-disabled');
        return;
      }
      // scrollLeft may be negative in RTL on some browsers
      var sl = scroller.scrollLeft;
      var rtl = isRTL();
      var atStart, atEnd;
      if (rtl) {
        // Modern browsers: RTL scrollLeft starts at 0 and goes negative,
        // OR starts at maxScroll and decreases. Normalise by abs().
        var abs = Math.abs(sl);
        atStart = abs <= 2;
        atEnd = abs >= maxScroll - 2;
      } else {
        atStart = sl <= 2;
        atEnd = sl >= maxScroll - 2;
      }
      prev.classList.toggle('is-disabled', atStart);
      next.classList.toggle('is-disabled', atEnd);
    }

    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Initial + after fonts/images settle
    requestAnimationFrame(update);
    setTimeout(update, 200);
    setTimeout(update, 800);

    // Re-evaluate after language toggle (label + direction may flip)
    var langObs = new MutationObserver(function () {
      var lang = document.documentElement.getAttribute('lang') || 'en';
      prev.setAttribute('aria-label', lang === 'ar' ? prev.dataset.labelAr : prev.dataset.labelEn);
      next.setAttribute('aria-label', lang === 'ar' ? next.dataset.labelAr : next.dataset.labelEn);
      requestAnimationFrame(update);
    });
    langObs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir']
    });

    return { update: update, prev: prev, next: next, wrap: wrap };
  }

  // ---- Nav slider ---------------------------------------
  function initNavSlider() {
    var nav = document.querySelector('.primary-nav');
    if (!nav) return;
    var ctl = attachRail(nav, {
      labelPrevEn: 'Scroll navigation left',
      labelPrevAr: 'تحريك القائمة للسابق',
      labelNextEn: 'Scroll navigation right',
      labelNextAr: 'تحريك القائمة للتالي',
      wrapClass: 'rail-nav',
      pageRatio: 0.7
    });
    if (!ctl) return;
    // Scroll the active tab into view on load
    var active = nav.querySelector('[aria-current="page"]');
    if (active) {
      setTimeout(function () {
        try {
          active.scrollIntoView({
            behavior: 'auto',
            inline: 'center',
            block: 'nearest'
          });
        } catch (e) {}
        ctl.update();
      }, 80);
    }
  }

  // ---- Content carousels (Home only) -------------------
  function initContentCarousels() {
    var targets = [
      { sel: '#services .svc-grid',        kind: 'svc',     pageRatio: 0.85 },
      { sel: '#cases .cases-grid',         kind: 'cases',   pageRatio: 0.9  },
      { sel: '#courses .courses-grid',     kind: 'courses', pageRatio: 0.85 },
      { sel: '#blog .blog-grid',           kind: 'blog',    pageRatio: 0.9  },
      { sel: '#ambassadors .amb-page-grid',kind: 'amb',     pageRatio: 0.85 }
    ];
    targets.forEach(function (t) {
      var el = document.querySelector(t.sel);
      if (!el) return;
      // Allow opt-out for sections that ship their own slider
      if (el.dataset.skipRail === '1') return;
      el.classList.add('opt-carousel', 'opt-carousel-' + t.kind);
      attachRail(el, {
        labelPrevEn: 'Previous',
        labelPrevAr: 'السابق',
        labelNextEn: 'Next',
        labelNextAr: 'التالي',
        wrapClass: 'rail-content rail-content-' + t.kind,
        pageRatio: t.pageRatio
      });
    });
  }

  ready(function () {
    initNavSlider();
    initContentCarousels();
  });
})();
