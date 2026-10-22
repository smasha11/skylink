/* Skylink Global Network — site script (no dependencies). */
(function () {
  'use strict';

  var CONFIG = {
    whatsappNumber: '254757710635',
  };

  /* ------------------------------------------------------------------
   * Lead delivery.
   * Every form calls sendLead(lead). Today it hands off to WhatsApp.
   * To use a backend / form service later, replace the body of this
   * function (e.g. fetch('/api/lead', { method: 'POST', body: JSON.stringify(lead) }))
   * and return a Promise. Nothing else needs to change.
   *   lead = { type: 'New TRUCK availability', fields: [{ label, value }], text: '...' }
   * ------------------------------------------------------------------ */
  function sendLead(lead) {
    var url = 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(lead.text);
    window.open(url, '_blank', 'noopener');
    return Promise.resolve({ channel: 'whatsapp', url: url });
  }

  /* ---------- Header: transparent over the hero, solid after scrolling ---------- */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.querySelector('.js-icon-open').classList.toggle('hidden', open);
      toggle.querySelector('.js-icon-close').classList.toggle('hidden', !open);
      document.body.classList.toggle('overflow-hidden', open);
      if (header) header.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
      if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });
  }

  /* ---------- Tabs (Transport page) ---------- */
  var tablist = document.querySelector('[data-tabs]');
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });

    var select = function (id, focus) {
      tabs.forEach(function (t, i) {
        var on = t.dataset.tab === id;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        panels[i].hidden = !on;
        if (on && focus) t.focus();
      });
    };

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () {
        select(t.dataset.tab);
        history.replaceState(null, '', '#' + t.dataset.tab);
      });
      t.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next.dataset.tab, true); }
      });
    });

    var fromHash = function () {
      var id = location.hash.slice(1);
      if (!tabs.some(function (t) { return t.dataset.tab === id; })) return false;
      select(id);
      tablist.scrollIntoView({ block: 'start' });
      return true;
    };
    select(tabs[0].dataset.tab);
    // Coming from another page (e.g. Home "Have a load?" → #cargo): open that tab and
    // scroll to it once layout and fonts have settled.
    if (fromHash()) window.addEventListener('load', function () { setTimeout(fromHash, 50); });
    window.addEventListener('hashchange', fromHash);
  }

  /* ---------- Scroll reveal ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Forms ---------- */
  // Kenyan: 07xx/01xx (10 digits) or +254/254 + 9 digits. International: + or 00, then 7–15 digits.
  var KE_PHONE = /^(?:\+?254|0)[17]\d{8}$/;
  var INTL_PHONE = /^(?:\+|00)[1-9]\d{6,14}$/;
  function isValidPhone(v) {
    var s = v.replace(/[\s\-().]/g, '');
    return KE_PHONE.test(s) || INTL_PHONE.test(s);
  }

  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }
  function prettyDate(iso) {
    var p = iso.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  }

  document.querySelectorAll('[data-min-today]').forEach(function (el) { el.min = todayISO(); });

  function errorFor(field) {
    var v = field.value.trim();
    if (field.type === 'checkbox') return '';
    if (field.required && !v) {
      return field.tagName === 'SELECT' ? 'Please choose an option.' : 'Please fill in this field.';
    }
    if (!v) return '';
    if (field.dataset.validate === 'phone' && !isValidPhone(v)) {
      return 'Enter a valid phone number, e.g. 0712 345 678 or +254 712 345 678.';
    }
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address.';
    if (field.type === 'number') {
      var n = Number(v);
      if (isNaN(n)) return 'Enter a number.';
      if (field.min && n < Number(field.min)) return 'Must be at least ' + field.min + '.';
      if (field.max && n > Number(field.max)) return 'Must be ' + field.max + ' or less.';
    }
    if (field.type === 'date' && field.min && v < field.min) return 'Choose today or a later date.';
    if (field.minLength > 0 && v.length < field.minLength) return 'Please add a bit more detail.';
    return '';
  }

  function showError(field, msg) {
    var errId = (field.getAttribute('aria-describedby') || '').split(' ').filter(function (id) { return /-err$/.test(id); })[0];
    var errEl = errId && document.getElementById(errId);
    if (msg) field.setAttribute('aria-invalid', 'true'); else field.removeAttribute('aria-invalid');
    if (errEl) errEl.textContent = msg;
  }

  function valueFor(field) {
    if (field.type === 'checkbox') return field.checked ? (field.dataset.yes || 'Yes') : (field.dataset.no || 'No');
    var v = field.value.trim();
    if (field.type === 'date' && v) return prettyDate(v);
    if (v && field.dataset.suffix) return v + field.dataset.suffix;
    return v;
  }

  function buildLead(form) {
    var type = form.dataset.waForm;
    var fields = [];
    form.querySelectorAll('[data-label]').forEach(function (f) {
      var v = valueFor(f);
      if (v) fields.push({ label: f.dataset.label, value: v });
    });
    var lines = [type].concat(fields.map(function (f) { return f.label + ': ' + f.value; }));
    lines.push('', '(Sent from the Skylink website)');
    return { type: type, fields: fields, text: lines.join('\n') };
  }

  document.querySelectorAll('form[data-wa-form]').forEach(function (form) {
    var inputs = form.querySelectorAll('input, select, textarea');
    var note = form.querySelector('[data-form-note]');

    inputs.forEach(function (f) {
      // Validate on blur; once a field has shown an error, re-check as the user types.
      f.addEventListener('blur', function () { if (f.value.trim() || f.hasAttribute('aria-invalid')) showError(f, errorFor(f)); });
      f.addEventListener('input', function () { if (f.hasAttribute('aria-invalid')) showError(f, errorFor(f)); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      inputs.forEach(function (f) {
        var msg = errorFor(f);
        showError(f, msg);
        if (msg && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); return; }

      var lead = buildLead(form);
      sendLead(lead).then(function (res) {
        if (!note) return;
        note.innerHTML = '';
        note.insertAdjacentHTML('beforeend',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>');
        var body = document.createElement('div');
        body.innerHTML = '<p class="font-semibold">Thank you! WhatsApp should now be open with your details.</p>' +
          '<p class="mt-1">Press <strong>send</strong> in WhatsApp and we\'ll get back to you as soon as possible. ' +
          'WhatsApp didn\'t open? <a target="_blank" rel="noopener">Tap here to try again</a>.</p>';
        body.querySelector('a').href = res.url;
        note.appendChild(body);
        note.hidden = false;
        note.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
      });
    });
  });
})();
