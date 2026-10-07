"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { loadTurnstile } from "@/lib/turnstileLoader";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const INTERACTION_EVENTS = ["focusin", "pointerdown", "input"];
const DEFAULT_TOKEN_WAIT_MS = 20000;

/**
 * Cloudflare Turnstile widget, lazy-loaded.
 *
 * The Turnstile script is NOT fetched on page view. It loads (once per page,
 * shared by every form) the first time the visitor interacts with the
 * surrounding <form> — focus, pointerdown, or input — and the widget is then
 * rendered with explicit render. The container keeps its reserved height
 * (.turnstile-wrap min-height) so nothing shifts when the widget appears.
 *
 * Imperative handle (via ref):
 *   activate()          → start loading/rendering (idempotent)
 *   getToken(timeoutMs) → Promise<string>; activates if needed and resolves
 *                         with a fresh token ("" on timeout/error)
 * Pass resetSignal to reset after submit (tokens are single-use).
 */
const TurnstileWidget = forwardRef(function TurnstileWidget(
  { onToken, resetSignal = 0, className = "turnstile-wrap" },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const tokenRef = useRef("");
  const waitersRef = useRef([]);
  const activatedRef = useRef(false);
  const mountedRef = useRef(true);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  const setToken = useCallback((token) => {
    tokenRef.current = token || "";
    onTokenRef.current?.(tokenRef.current);
    if (tokenRef.current) {
      const waiters = waitersRef.current;
      waitersRef.current = [];
      waiters.forEach((w) => w(tokenRef.current));
    }
  }, []);

  const renderWidget = useCallback(
    (turnstile) => {
      if (!mountedRef.current || !containerRef.current || !turnstile) return;
      if (widgetIdRef.current != null) return;
      widgetIdRef.current = turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token) => setToken(token),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
        theme: "light",
        size: "flexible",
      });
    },
    [setToken]
  );

  const activate = useCallback(() => {
    if (!SITE_KEY || activatedRef.current) return;
    activatedRef.current = true;
    loadTurnstile()
      .then(renderWidget)
      .catch(() => {
        activatedRef.current = false; // let the next interaction retry
      });
  }, [renderWidget]);

  const getToken = useCallback(
    (timeoutMs = DEFAULT_TOKEN_WAIT_MS) => {
      if (!SITE_KEY) return Promise.resolve("");
      if (tokenRef.current) return Promise.resolve(tokenRef.current);
      activate();
      return new Promise((resolve) => {
        let done = false;
        const finish = (t) => {
          if (done) return;
          done = true;
          clearTimeout(timer);
          waitersRef.current = waitersRef.current.filter((w) => w !== finish);
          resolve(t || "");
        };
        const timer = setTimeout(() => finish(tokenRef.current), timeoutMs);
        waitersRef.current.push(finish);
      });
    },
    [activate]
  );

  useImperativeHandle(ref, () => ({ activate, getToken }), [activate, getToken]);

  // Load on first interaction with the parent form (or the container itself).
  useEffect(() => {
    if (!SITE_KEY) return undefined;
    const target = containerRef.current?.closest("form") || containerRef.current;
    if (!target) return undefined;
    const onInteract = () => {
      activate();
      INTERACTION_EVENTS.forEach((ev) => target.removeEventListener(ev, onInteract, true));
    };
    INTERACTION_EVENTS.forEach((ev) =>
      target.addEventListener(ev, onInteract, { capture: true, passive: true })
    );
    return () => {
      INTERACTION_EVENTS.forEach((ev) => target.removeEventListener(ev, onInteract, true));
    };
  }, [activate]);

  // Reset after submit (only if the widget has been rendered).
  useEffect(() => {
    if (widgetIdRef.current == null || !window.turnstile) return;
    tokenRef.current = "";
    window.turnstile.reset(widgetIdRef.current);
    onTokenRef.current?.("");
  }, [resetSignal]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (widgetIdRef.current != null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* ignore */
        }
      }
      widgetIdRef.current = null;
      activatedRef.current = false;
    };
  }, []);

  if (!SITE_KEY) return null;

  return <div className={className} ref={containerRef} />;
});

export default TurnstileWidget;

export function turnstileConfigured() {
  return Boolean(SITE_KEY);
}
