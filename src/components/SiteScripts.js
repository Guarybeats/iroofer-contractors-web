'use client';
import { useEffect } from 'react';

export default function SiteScripts() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const head = document.getElementById('head');
    const prog = document.getElementById('prog');
    const toTop = document.getElementById('toTop');
    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (head) head.classList.toggle('scrolled', y > 40);
      if (toTop) toTop.classList.toggle('show', y > 700);
      if (prog) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

    const burger = document.getElementById('burger');
    const mnav = document.getElementById('mnav');
    function closeMenu() { mnav?.classList.remove('open'); burger?.classList.remove('open'); burger?.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
    if (burger && mnav) {
      burger.addEventListener('click', () => {
        const open = mnav.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    }

    // reveal
    const rvEls = document.querySelectorAll('.rv');
    if (reduce || !('IntersectionObserver' in window)) {
      rvEls.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      rvEls.forEach((el) => io.observe(el));
    }

    // counters — run immediately on mount (hero is in view on load)
    function fmt(el, val) {
      const dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const nogroup = el.hasAttribute('data-nogroup');
      if (nogroup) {
        return dec ? val.toFixed(dec) : String(Math.round(val));
      }
      return val.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    }
    function animateCount(el) {
      const target = parseFloat(el.getAttribute('data-count'));
      const dur = 1500, t0 = performance.now();
      function step(t) {
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(el, target * e);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    const cntEls = document.querySelectorAll('.cnt');
    if (reduce) {
      cntEls.forEach((el) => {
        el.textContent = fmt(el, parseFloat(el.getAttribute('data-count')));
      });
    } else {
      cntEls.forEach((el) => animateCount(el));
    }

    // services accordion (only toggle <button> heads — link heads navigate instead)
    document.querySelectorAll('.svc').forEach((svc) => {
      const btn = svc.querySelector('.svc-head');
      if (!btn || btn.tagName !== 'BUTTON') return;
      btn.addEventListener('click', () => {
        const isOpen = svc.classList.contains('open');
        document.querySelectorAll('.svc').forEach((s) => {
          s.classList.remove('open');
          const h = s.querySelector('.svc-head');
          if (h && h.tagName === 'BUTTON') h.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { svc.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });

    // faq accordion
    document.querySelectorAll('.faq-item').forEach((item) => {
      const q = item.querySelector('.faq-q');
      q?.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach((i) => {
          i.classList.remove('open');
          i.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
      });
    });

    // before/after slider
    const ba = document.getElementById('ba');
    if (ba) {
      const range = ba.querySelector('.range');
      const hint = ba.querySelector('.hint');
      function setPos(v) { ba.style.setProperty('--pos', v + '%'); }
      range?.addEventListener('input', function () { setPos(this.value); if (hint) hint.style.opacity = '0'; });
      let dragging = false;
      function fromX(clientX) {
        const r = ba.getBoundingClientRect();
        const v = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
        if (range) range.value = Math.round(v);
        setPos(v); if (hint) hint.style.opacity = '0';
      }
      ba.addEventListener('pointerdown', (e) => { if (e.target === range) return; dragging = true; fromX(e.clientX); });
      window.addEventListener('pointermove', (e) => { if (dragging) fromX(e.clientX); });
      window.addEventListener('pointerup', () => { dragging = false; });
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div id="prog" aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, height: 3, width: 0, background: 'var(--orange)', zIndex: 1500, transition: 'width .1s linear' }} />
    </>
  );
}
