"use client";

import { useState, useCallback, useRef } from "react";

// Post to the Cloudflare Pages Function at /api/leads. On Cloudflare this is a
// real serverless Function (functions/api/leads.js) that emails the lead to
// iroofercontractors@gmail.com. NEXT_PUBLIC_API_URL can override the origin
// (e.g. a custom domain) but the path stays /api/leads.
const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")}/api/leads`
  : "/api/leads";

// Last-resort fallback only if the Function is unreachable (e.g. misconfigured
// deploy) — opens the visitor's mail client pre-filled so the lead isn't lost.
const API_FALLBACK = `mailto:${process.env.NEXT_PUBLIC_LEAD_EMAIL || "iroofercontractors@gmail.com"}`;

const DEFAULT_SUCCESS_MSG =
  "Request received! A member of our local team will reach out shortly.";
const DEFAULT_ERROR_MSG =
  "Something went wrong sending your request. Please call us directly — we’re local and happy to help.";

function useLeadForm({
  source,
  validate,
  successMsg = DEFAULT_SUCCESS_MSG,
  errorMsg = DEFAULT_ERROR_MSG,
}) {
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});
  const controllerRef = useRef(null);

  const clearError = useCallback((field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = null;
    setStatus("idle");
    setMsg("");
    setErrors({});
  }, []);

  const submit = useCallback(
    async (fd, extras = {}) => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      const controller = new AbortController();
      controllerRef.current = controller;
      // Hard client-side ceiling: if the endpoint ever stops responding again,
      // the visitor gets the mailto fallback instead of a spinner that never ends.
      const timeoutId = setTimeout(() => controller.abort("timeout"), 12000);

      const errs = validate(fd, extras);
      if (Object.keys(errs).length) {
        setErrors(errs);
        if (errs._form) {
          setStatus("error");
          setMsg(errs._form);
        }
        return false;
      }

      setErrors({});
      setStatus("sending");
      setMsg("");

      const payload = {
        fullName: fd.get("fullName")?.toString()?.trim() || "",
        phone: fd.get("phone")?.toString().trim() || "",
        email: fd.get("email")?.toString()?.trim() || undefined,
        address: fd.get("address")?.toString()?.trim() || undefined,
        city: fd.get("city")?.toString()?.trim() || undefined,
        zip: fd.get("zip")?.toString()?.trim() || undefined,
        service: fd.get("service")?.toString()?.trim() || undefined,
        howSoon: fd.get("howSoon")?.toString()?.trim() || undefined,
        message: fd.get("message")?.toString()?.trim() || undefined,
        estimateInfo: fd.get("estimateInfo")?.toString()?.trim() || undefined,
        _honeypot: fd.get("_honeypot")?.toString() || "",
        turnstileToken: extras.turnstileToken || "",
        source,
      };

      try {
        const res = await fetch(`${API_URL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        const body = await res.json().catch(() => ({}));

        // Hard 4xx = validation / spam / out-of-area — show the message, never mailto.
        if (res.status >= 400 && res.status < 500) {
          setStatus("error");
          const serverMsg =
            body.error ||
            (res.status === 403
              ? "Please complete the security check and try again."
              : errorMsg);
          setMsg(serverMsg);
          if (body.field) {
            setErrors({ [body.field]: serverMsg });
          }
          return false;
        }

        if (!res.ok) throw new Error("Request failed");

        setStatus("ok");
        setMsg(successMsg);
        return true;
      } catch (err) {
        // A caller-initiated abort (new submit) is a no-op; our own timeout is not.
        if (err.name === "AbortError" && controller.signal.reason !== "timeout") {
          return false;
        }
        // Fall back to mailto on static hosts where /api/leads isn't built.
        const mailto = `${API_FALLBACK}?subject=${encodeURIComponent(
          `New iRoofer lead: ${payload.fullName || "Unknown"} (${payload.phone || "No phone"})`
        )}&body=${encodeURIComponent(
          Object.entries(payload)
            .filter(([k, v]) => v && k !== "_honeypot" && k !== "turnstileToken")
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")
        )}`;
        window.location.href = mailto;
        setStatus("ok");
        setMsg(successMsg);
        return true;
      } finally {
        clearTimeout(timeoutId);
        if (controllerRef.current === controller) {
          controllerRef.current = null;
        }
      }
    },
    [source, validate, successMsg, errorMsg]
  );

  return { status, msg, errors, submit, clearError, reset };
}

export default useLeadForm;
