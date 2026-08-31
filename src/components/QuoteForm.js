"use client";

import { useCallback, useRef } from "react";
import useLeadForm from "./useLeadForm";

export default function QuoteForm({ id = "quote", source = "website", variant, estimateData, title = "Get Your Free Roof Quote" }) {
  const formRef = useRef(null);
  const formClass = variant === "contact" || variant === "detail" ? "cform" : "quote-card";

  const validate = useCallback((fd) => {
    const errs = {};
    const name = fd.get("fullName")?.toString()?.trim() || "";
    const phone = fd.get("phone")?.toString()?.trim() || "";
    const email = fd.get("email")?.toString()?.trim() || "";

    if (!name) errs.fullName = "Please enter your name";
    if (!phone) errs.phone = "Please enter your phone number";
    else if (!/^[\d\s\-\(\)\+]{7,}$/.test(phone))
      errs.phone = "Please enter a valid phone number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";

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
    <form ref={formRef} className={formClass} id={id} onSubmit={onSubmit}>
      <h2>{title}</h2>
      <p
        style={{
          color: "var(--steel, #8ea2b4)",
          marginTop: -6,
          marginBottom: 16,
          fontSize: ".92rem",
        }}
      >
        No pressure. No obligation. Just an honest local estimate.
      </p>
      <div className="field">
        <label htmlFor={`${id}-name`}>Full Name</label>
        <input
          id={`${id}-name`}
          name="fullName"
          type="text"
          required
          autoComplete="name"
          minLength={2}
          maxLength={80}
          placeholder="Jane Homeowner"
          className={errors.fullName ? "err" : ""}
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby={`${id}-name-error`}
          onChange={() => clearError("fullName")}
        />
        <span className="field-error" id={`${id}-name-error`} role="alert">
          {errors.fullName || ""}
        </span>
      </div>
      <div className="field">
        <label htmlFor={`${id}-phone`}>Phone</label>
        <input
          id={`${id}-phone`}
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          pattern="[\d\s\-()+]{7,}"
          minLength={7}
          maxLength={20}
          title="Enter a phone number, at least 7 digits"
          placeholder="(470) 000-0000"
          className={errors.phone ? "err" : ""}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={`${id}-phone-error`}
          onChange={() => clearError("phone")}
        />
        <span className="field-error" id={`${id}-phone-error`} role="alert">
          {errors.phone || ""}
        </span>
      </div>
      <div className="field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={120}
          placeholder="jane@email.com"
          className={errors.email ? "err" : ""}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={`${id}-email-error`}
          onChange={() => clearError("email")}
        />
        <span className="field-error" id={`${id}-email-error`} role="alert">
          {errors.email || ""}
        </span>
      </div>
      <div className="field">
        <label htmlFor={`${id}-address`}>Property Address</label>
        <input
          id={`${id}-address`}
          name="address"
          type="text"
          autoComplete="street-address"
          maxLength={160}
          placeholder="123 Main St, Dallas, GA"
        />
      </div>
      <div className="field">
        <label htmlFor={`${id}-service`}>Service Needed</label>
        <select id={`${id}-service`} name="service" defaultValue="">
          <option value="" disabled>
            Select a service…
          </option>
          <option>Roof Repair</option>
          <option>Roof Replacement</option>
          <option>New Construction</option>
          <option>Gutter Repair</option>
          <option>Gutter Replacement</option>
          <option>Gutter Cleaning</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${id}-soon`}>How Soon?</label>
        <select id={`${id}-soon`} name="howSoon" defaultValue="">
          <option value="" disabled>
            Select timing…
          </option>
          <option>Urgent / leaking now</option>
          <option>Within a week</option>
          <option>This month</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${id}-msg`}>Message</label>
        <textarea
          id={`${id}-msg`}
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="Tell us what you’re seeing…"
        />
      </div>
      {estimateData && (
        <input type="hidden" name="estimateInfo" value={JSON.stringify(estimateData)} />
      )}
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
        className="btn btn-block"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Get My Free Quote"}
      </button>
      <div aria-live="polite">
        {status === "ok" && (
          <p className="form-status-ok">{msg}</p>
        )}
        {status === "error" && (
          <p className="form-status-error" role="alert">{msg}</p>
        )}
      </div>
      <p className="form-note">
        By submitting you agree to be contacted by iRoofer Contractors about your
        roof.
      </p>
    </form>
  );
}
