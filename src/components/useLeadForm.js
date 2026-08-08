"use client";

import { useState, useCallback, useRef } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/leads`
  : "/api/leads/";

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
    async (fd) => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      const controller = new AbortController();
      controllerRef.current = controller;

      const errs = validate(fd);
      if (Object.keys(errs).length) {
        setErrors(errs);
        return false;
      }

      setErrors({});
      setStatus("sending");

      const payload = {
        fullName: fd.get("fullName")?.toString()?.trim() || "",
        phone: fd.get("phone")?.toString().trim() || "",
        email: fd.get("email")?.toString()?.trim() || undefined,
        address: fd.get("address")?.toString()?.trim() || undefined,
        service: fd.get("service")?.toString()?.trim() || undefined,
        howSoon: fd.get("howSoon")?.toString()?.trim() || undefined,
        message: fd.get("message")?.toString()?.trim() || undefined,
        estimateInfo: fd.get("estimateInfo")?.toString()?.trim() || undefined,
        source,
      };

      try {
        const res = await fetch(`${API_URL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("ok");
        setMsg(successMsg);
        return true;
      } catch (err) {
        if (err.name === "AbortError") return false;
        // Fall back to mailto on static hosts where /api/leads isn't built.
        const mailto = `${API_FALLBACK}?subject=${encodeURIComponent(
          `New iRoofer lead: ${payload.fullName || "Unknown"} (${payload.phone || "No phone"})`
        )}&body=${encodeURIComponent(
          Object.entries(payload)
            .filter(([, v]) => v)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")
        )}`;
        window.location.href = mailto;
        setStatus("ok");
        setMsg(successMsg);
        return true;
      } finally {
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
