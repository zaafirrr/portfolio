/* =====================================================================
   motion.js — motion layer + skills search
   · Nav responds to scroll (translucent material gets denser)
   · Section hairlines draw in as sections enter view
   · Layered scroll depth on the hero tiles (transform-free: uses `translate`)
   · Skills search (combines with the existing source filter)
   Everything here is progressive: with JS off or reduced motion on, the
   page is fully visible and usable.
   ===================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── 1. Nav material: denser once the page has scrolled ─────────── */
  var nav = $('.topbar');
  function navState() {
    if (nav) nav.classList.toggle('stuck', window.scrollY > 24);
  }

  /* ── 2. Section hairlines + heading settle ───────────────────────── */
  function initSections() {
    var secs = $$('main > section');
    if (!secs.length) return;
    if (!('IntersectionObserver' in window)) { secs.forEach(function (s) { s.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    secs.forEach(function (s) { io.observe(s); });
  }

  /* ── 3. Hero depth: tiles drift at different rates while scrolling ─ */
  var bento = $('.hero');
  var ticking = false;
  function depth() {
    ticking = false;
    if (!bento || reduce.matches) return;
    var y = Math.min(window.scrollY, 700);
    bento.style.setProperty('--sy', y.toFixed(1));
  }
  function onScroll() {
    navState();
    if (!ticking) { ticking = true; requestAnimationFrame(depth); }
  }

  /* ── 4. Skills search ────────────────────────────────────────────── */
  function initSkillSearch() {
    var input = $('#skSearch');
    var grid = $('#skillGrid');
    if (!input || !grid) return;
    var status = $('#skStatus');
    var empty = $('#skEmpty');

    function apply() {
      var q = input.value.trim().toLowerCase();
      var chips = $$('.c', grid);
      var shown = 0;
      chips.forEach(function (c) {
        var hit = !q || c.textContent.toLowerCase().indexOf(q) !== -1;
        c.classList.toggle('sk-miss', !hit);
        if (hit) shown++;
      });
      $$('.sk-card', grid).forEach(function (card) {
        var any = card.querySelector('.c:not(.sk-miss)');
        card.classList.toggle('sk-card--none', !any);
      });
      grid.classList.toggle('searching', !!q);
      if (empty) empty.hidden = shown !== 0;
      if (status) status.textContent = q ? shown + ' / ' + chips.length : '';
    }

    input.addEventListener('input', apply);
    // Skills are re-rendered when the language changes, so re-apply afterwards.
    document.addEventListener('langchange', function () { setTimeout(apply, 0); });
    apply();
  }

  /* ── Init ────────────────────────────────────────────────────────── */
  function init() {
    navState();
    initSections();
    initSkillSearch();
    window.addEventListener('scroll', onScroll, { passive: true });
    depth();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
