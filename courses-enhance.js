/* ============================================================
   courses-enhance.js
   ------------------------------------------------------------
   Progressively enhances every <a class="course-card"> across
   the site (Home.html, Courses.html, related-courses grids, …):

   • Card click → still opens the internal course detail page
     (Optiiimum course.html?slug=…) for SEO + bilingual context.
   • A small secondary CTA pill is overlaid on the card thumb
     that opens the OFFICIAL external landing page (Teachable
     or YouTube) directly. target="_blank" rel="noopener
     noreferrer".
   • Kidia AI Creators (no landing page yet) gets a non-clickable
     "Coming Soon / قريبًا" pill.
   • Free YouTube course gets a "Watch free / شاهد مجانًا" pill.
   • Each external link carries a bilingual aria-label —
     "Official course enrollment link · رابط الاشتراك الرسمي
     في الكورس" — for accessibility and SEO semantics.

   No card markup needs editing. Add one <script> tag (after
   courses-data.js) and the site is consistent across pages.
   ============================================================ */
(function () {
  function slugFromHref(href) {
    if (!href) return '';
    var m = href.match(/[?&]slug=([^&#]+)/);
    return m ? decodeURIComponent(m[1]) : '';
  }

  function ctaCopy(course) {
    var status = course.purchaseLinkStatus;
    if (status === 'coming-soon' || !course.purchaseLink) {
      return {
        en: 'Coming Soon',
        ar: 'قريبًا',
        kind: 'soon'
      };
    }
    if (status === 'youtube-free') {
      return {
        en: 'Watch free',
        ar: 'شاهد مجانًا',
        kind: 'free',
        aria: 'Official free course on YouTube · رابط الكورس المجاني الرسمي على يوتيوب'
      };
    }
    return {
      en: 'Enroll Now',
      ar: 'اشترك الآن',
      kind: 'enrol',
      aria: 'Official course enrollment link · رابط الاشتراك الرسمي في الكورس'
    };
  }

  function buildPill(course) {
    var copy = ctaCopy(course);
    var pill = document.createElement('a');
    pill.className = 'course-card-enroll is-' + copy.kind;
    pill.setAttribute('data-course-cta', course.slug);

    if (copy.kind === 'soon') {
      // Non-actionable — keep on the card for visual parity but
      // block click + tab focus so it doesn't behave like a link.
      pill.setAttribute('role', 'button');
      pill.setAttribute('aria-disabled', 'true');
      pill.tabIndex = -1;
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
    } else {
      pill.href = course.purchaseLink;
      pill.target = '_blank';
      pill.rel = 'noopener noreferrer';
      pill.setAttribute('aria-label', copy.aria);
      // Defensive: prevent the parent card link (if anything funky
      // ever wraps the pill back inside the <a>) from also firing.
      pill.addEventListener('click', function (e) { e.stopPropagation(); });
    }

    pill.innerHTML =
      '<span class="i18n-en">' + copy.en + '</span>' +
      '<span class="i18n-ar">' + copy.ar + '</span>' +
      '<span class="course-card-enroll-arrow" aria-hidden="true">↗</span>';

    return pill;
  }

  function enhanceCard(card) {
    if (card.dataset.cceDone === '1') return;
    if (!card.matches('a.course-card')) return;

    var slug = slugFromHref(card.getAttribute('href'));
    if (!slug) return;

    var course = window.COURSES_BY_SLUG && window.COURSES_BY_SLUG[slug];
    if (!course) return;

    card.dataset.cceDone = '1';
    card.setAttribute('data-course-slug', slug);

    // Wrap the card so the enrol pill can sit absolutely over
    // its corner without breaking out of the grid cell.
    var wrap = document.createElement('div');
    wrap.className = 'course-card-wrap';

    // Preserve scroll-reveal staggering — transfer the attribute
    // and delay variable from the card to the wrap (which is now
    // the grid item the reveal observer sees).
    if (card.hasAttribute('data-reveal')) {
      wrap.setAttribute('data-reveal', '');
      var delay = card.style.getPropertyValue('--reveal-delay');
      if (delay) wrap.style.setProperty('--reveal-delay', delay);
      if (card.classList.contains('is-in')) wrap.classList.add('is-in');
      card.removeAttribute('data-reveal');
    }

    card.parentNode.insertBefore(wrap, card);
    wrap.appendChild(card);
    wrap.appendChild(buildPill(course));
  }

  function enhanceAll() {
    if (!window.COURSES_BY_SLUG) return;
    var cards = document.querySelectorAll('a.course-card[href*="course.html?slug="]');
    cards.forEach(enhanceCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceAll);
  } else {
    enhanceAll();
  }
})();
