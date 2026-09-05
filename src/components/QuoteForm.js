"use client";

import { useCallback, useRef, useState } from "react";
import useLeadForm from "./useLeadForm";
import TurnstileWidget, { turnstileConfigured } from "./TurnstileWidget";
import {
  isValidUsZip,
  isInServiceArea,
  isFake555Phone,
  hasTemplateTokens,
  isPhoneOnlyMessage,
  OUT_OF_AREA_MSG,
  INVALID_ZIP_MSG,
} from "@/lib/leadValidation";

export default function QuoteForm({
  id = "quote",
  source = "website",
  variant,
  estimateData,
  title = "Get Your Free Roof Quote",
}) {
  const formRef = useRef(null);
  const formClass =
    variant === "contact" || variant === "detail" ? "cform" : "quote-card";
  const [turnstileToken, setTurnstileToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);

  const validate = useCallback((fd, extras = {}) => {
    const errs = {};
    const name = fd.get("fullName")?.toString()?.trim() || "";
    const phone = fd.get("phone")?.toString()?.trim() || "";
    const email = fd.get("email")?.toString()?.trim() || "";
    const address = fd.get("address")?.toString()?.trim() || "";
    const city = fd.get("city")?.toString()?.trim() || "";
    const zip = fd.get("zip")?.toString()?.trim() || "";
    const message = fd.get("message")?.toString()?.trim() || "";

    if (!name) errs.fullName = "Please enter your name";
    if (!phone) errs.phone = "Please enter your phone number";
    else if (!/^[\d\s\-\(\)\+]{7,}$/.test(phone))
      errs.phone = "Please enter a valid phone number";
    else if (isFake555Phone(phone))
      errs.phone = "Please enter a real phone number";

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";

    if (!address || address.length < 5)
      errs.address = "Please enter your property street address";
    if (!city) errs.city = "Please enter your city";

    if (!zip) errs.zip = "Please enter your ZIP code";
    else if (!isValidUsZip(zip)) errs.zip = INVALID_ZIP_MSG;
    else if (!isInServiceArea(zip)) errs.zip = OUT_OF_AREA_MSG;

    if (isPhoneOnlyMessage(message))
      errs.message = "Please tell us a bit about the roof issue (not just a phone number).";

    if (hasTemplateTokens(name, phone, email, address, city, zip, message)) {
      errs._form = "Please check your information and try again.";
    }

    if (turnstileConfigured() && !extras.turnstileToken) {
      errs._form = "Please complete the security check below.";
    }

    return errs;
  }, []);

  const { status, msg, errors, submit, clearError } = useLeadForm({
    source,
    validate,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const ok = await submit(new FormData(e.currentTarget), { turnstileToken });
    if (ok && formRef.current) {
      formRef.current.reset();
      setTurnstileToken("");
      setResetSignal((n) => n + 1);
    } else {
      setResetSignal((n) => n + 1);
      setTurnstileToken("");
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
          required
          autoComplete="street-address"
          minLength={5}
          maxLength={160}
          placeholder="123 Main St"
          className={errors.address ? "err" : ""}
          aria-invalid={errors.address ? "true" : "false"}
          aria-describedby={`${id}-address-error`}
          onChange={() => clearError("address")}
        />
        <span className="field-error" id={`${id}-address-error`} role="alert">
          {errors.address || ""}
        </span>
      </div>
      <div className="grid2">
        <div className="field">
          <label htmlFor={`${id}-city`}>City</label>
          <input
            id={`${id}-city`}
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            minLength={2}
            maxLength={80}
            placeholder="Dallas"
            className={errors.city ? "err" : ""}
            aria-invalid={errors.city ? "true" : "false"}
            aria-describedby={`${id}-city-error`}
            onChange={() => clearError("city")}
          />
          <span className="field-error" id={`${id}-city-error`} role="alert">
            {errors.city || ""}
          </span>
        </div>
        <div className="field">
          <label htmlFor={`${id}-zip`}>ZIP</label>
          <input
            id={`${id}-zip`}
            name="zip"
            type="text"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="\d{5}(-\d{4})?"
            minLength={5}
            maxLength={10}
            placeholder="30132"
            className={errors.zip ? "err" : ""}
            aria-invalid={errors.zip ? "true" : "false"}
            aria-describedby={`${id}-zip-error`}
            onChange={() => clearError("zip")}
          />
          <span className="field-error" id={`${id}-zip-error`} role="alert">
            {errors.zip || ""}
          </span>
        </div>
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
          className={errors.message ? "err" : ""}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={`${id}-msg-error`}
          onChange={() => clearError("message")}
        />
        <span className="field-error" id={`${id}-msg-error`} role="alert">
          {errors.message || ""}
        </span>
      </div>
      {estimateData && (
        <input
          type="hidden"
          name="estimateInfo"
          value={JSON.stringify(estimateData)}
        />
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
      <TurnstileWidget
        onToken={setTurnstileToken}
        resetSignal={resetSignal}
      />
      <button
        className="btn btn-block"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Get My Free Quote"}
      </button>
      <div aria-live="polite">
        {status === "ok" && <p className="form-status-ok">{msg}</p>}
        {status === "error" && (
          <p className="form-status-error" role="alert">
            {msg}
          </p>
        )}
      </div>
      <p className="form-note">
        By submitting you agree to be contacted by iRoofer Contractors about
        your roof.
      </p>
    </form>
  );
}
