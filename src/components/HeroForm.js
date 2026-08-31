"use client";

import { useCallback, useRef } from "react";
import useLeadForm from "./useLeadForm";

export default function HeroForm({ source = "hero" }) {
  const formRef = useRef(null);
  const validate = useCallback((fd) => {
    const errs = {};
    const name = fd.get("fullName")?.toString()?.trim() || "";
    const phone = fd.get("phone")?.toString()?.trim() || "";

    if (!name) errs.fullName = "Please enter your name";
    if (!phone) errs.phone = "Please enter your phone number";
    else if (!/^[\d\s\-\(\)\+]{7,}$/.test(phone))
      errs.phone = "Please enter a valid phone number";

    return errs;
  }, []);

  const { status, msg, errors, submit, clearError } = useLeadForm({
    source,
    validate,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const ok = await submit(new FormData(e.currentTarget));
    if (ok && formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <form ref={formRef} className="hform" id="hform" onSubmit={onSubmit}>
      <div className="bar" />
      <div className="pad">
        <h2>Free estimate in 60 seconds</h2>
        <p className="sub">No spam. A real roofer calls you back.</p>
        <div className="field">
          <label htmlFor="hn">Your name</label>
          <input
            id="hn"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            minLength={2}
            maxLength={80}
            placeholder="Jane Doe"
            className={errors.fullName ? "err" : ""}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby="hn-error"
            onChange={() => clearError("fullName")}
          />
          <span className="field-error" id="hn-error" role="alert">
            {errors.fullName || ""}
          </span>
        </div>
        <div className="field">
          <label htmlFor="hp">Phone number</label>
          <input
            id="hp"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[\d\s\-()+]{7,}"
            minLength={7}
            maxLength={20}
            title="Enter a phone number, at least 7 digits"
            placeholder="(470) 236-1410"
            className={errors.phone ? "err" : ""}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby="hp-error"
            onChange={() => clearError("phone")}
          />
          <span className="field-error" id="hp-error" role="alert">
            {errors.phone || ""}
          </span>
        </div>
        {/* Honeypot — hidden from users, bots often fill it */}
        <input
          type="text"
          name="_honeypot"
          tabIndex={-1}
          autoComplete="off"
          style={{
            position: "absolute",
            opacity: 0,
            height: 0,
            width: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <button
          className="btn btn-solid"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending…"
            : (
                <>
                  Get My Free Quote{" "}
                  <span className="arr">→</span>
                </>
              )}
        </button>
        <div aria-live="polite">
          {status === "ok" && (
            <p className="form-status-ok">{msg}</p>
          )}
          {status === "error" && (
            <p className="form-status-error" role="alert">{msg}</p>
          )}
        </div>
      </div>
    </form>
  );
}
