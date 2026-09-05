"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

/**
 * Cloudflare Turnstile widget (explicit render).
 * Each form instance gets its own widget; pass resetSignal to reset after submit.
 */
export default function TurnstileWidget({
  onToken,
  resetSignal = 0,
  className = "turnstile-wrap",
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  const renderWidget = useCallback(() => {
    if (!SITE_KEY || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current != null) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: (token) => onTokenRef.current?.(token || ""),
      "expired-callback": () => onTokenRef.current?.(""),
      "error-callback": () => onTokenRef.current?.(""),
      theme: "light",
      size: "flexible",
    });
  }, []);

  useEffect(() => {
    if (window.turnstile) renderWidget();
  }, [renderWidget]);

  useEffect(() => {
    if (widgetIdRef.current == null || !window.turnstile) return;
    window.turnstile.reset(widgetIdRef.current);
    onTokenRef.current?.("");
  }, [resetSignal]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current != null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* ignore */
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div className={className} ref={containerRef} />
    </>
  );
}

export function turnstileConfigured() {
  return Boolean(SITE_KEY);
}
