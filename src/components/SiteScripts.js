'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteScripts() {
  const pathname = usePathname();

  // --- Global UI bindings (run once on mount; elements live in the persistent layout) ---
  useEffect(() => {
    const head = document.getElementById('head');
    const prog = document.getElementById('prog');
    const toTop = document.getElementById('toTop');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    const onTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    if (toTop) toTop.addEventListener('click', onTop);

    const burger = document.getElementById('burger');
    const mnav = document.getElementById('mnav');
    function closeMenu() {
      mnav?.classList.remove('open');
      burger?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    function onBurger() {
      const open = mnav.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    if (burger && mnav) {
      burger.addEventListener('click', onBurger);
      mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (toTop) toTop.removeEventListener('click', onTop);
      if (burger) burger.removeEventListener('click', onBurger);
    };
  }, []);

  // --- Page-content bindings (re-run on every route change so client-navigated pages work) ---
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Opt the page into the hide-then-reveal animation. Content is visible by
    // default (CSS), so if this line never runs the page is still readable.
    document.documentElement.classList.add('reveal-ready');

    // reveal
    const rvEls = document.querySelectorAll('.rv');
    let io;
    if (reduce || !('IntersectionObserver' in window)) {
      rvEls.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      rvEls.forEach((el) => io.observe(el));
    }

    // counters
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
      cntEls.forEach((el) => {
        // Set final value immediately so a counter can never get stuck at 0
        // if the animation frame is interrupted.
        const target = parseFloat(el.getAttribute('data-count'));
        el.textContent = fmt(el, target);
        el.dataset._final = String(target);
        animateCount(el);
      });
    }

    // services accordion
    const svcHandlers = [];
    document.querySelectorAll('.svc').forEach((svc) => {
      const btn = svc.querySelector('.svc-head');
      const handler = () => {
        const isOpen = svc.classList.contains('open');
        document.querySelectorAll('.svc').forEach((s) => {
          s.classList.remove('open');
          s.querySelector('.svc-head')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          svc.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      };
      btn?.addEventListener('click', handler);
      svcHandlers.push([svc, btn, handler]);
    });

    // faq accordion
    const faqHandlers = [];
    document.querySelectorAll('.faq-item').forEach((item) => {
      const q = item.querySelector('.faq-q');
      const handler = () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach((i) => {
          i.classList.remove('open');
          i.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          q.setAttribute('aria-expanded', 'true');
        }
      };
      q?.addEventListener('click', handler);
      faqHandlers.push([item, q, handler]);
    });

    // before/after slider
    const ba = document.getElementById('ba');
    let baCleanup = () => {};
    if (ba) {
      const range = ba.querySelector('.range');
      const hint = ba.querySelector('.hint');
      const setPos = (v) => ba.style.setProperty('--pos', v + '%');
      const onRange = function () { setPos(this.value); if (hint) hint.style.opacity = '0'; };
      let dragging = false;
      const fromX = (clientX) => {
        const r = ba.getBoundingClientRect();
        const v = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
        if (range) range.value = Math.round(v);
        setPos(v);
        if (hint) hint.style.opacity = '0';
      };
      const onDown = (e) => { if (e.target === range) return; dragging = true; fromX(e.clientX); };
      const onMove = (e) => { if (dragging) fromX(e.clientX); };
      const onUp = () => { dragging = false; };
      range?.addEventListener('input', onRange);
      ba.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      baCleanup = () => {
        range?.removeEventListener('input', onRange);
        ba.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };
    }

    return () => {
      if (io) io.disconnect();
      svcHandlers.forEach(([svc, btn, handler]) => btn?.removeEventListener('click', handler));
      faqHandlers.forEach(([item, q, handler]) => q?.removeEventListener('click', handler));
      baCleanup();
    };
  }, [pathname]);

  return (
    <>
      <div id="prog" aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, height: 3, width: 0, background: 'var(--orange)', zIndex: 1500, transition: 'width .1s linear' }} />
    </>
  );
}
