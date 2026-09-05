/**
 * Shared lead-form validation helpers (client + mirrored on the server).
 * North GA / Atlanta metro service area for iRoofer Contractors (Dallas GA).
 */

/** US ZIP: 5 digits or ZIP+4 */
export const US_ZIP_RE = /^\d{5}(-\d{4})?$/;

/**
 * Primary service-area ZIP prefixes (Dallas / Paulding / Cobb / Douglas /
 * Cherokee / north Fulton and nearby metro). Clear out-of-area (e.g. WY 307xx)
 * is rejected with a friendly message instead of emailing the owner.
 */
const SERVICE_ZIP_PREFIXES = [
  "300", // north Fulton / east Cobb / Atlanta metro
  "301", // Paulding, west Cobb, Douglas, Cherokee (Dallas 30132/30157, etc.)
  "302", // south/west metro fringe (Villa Rica, etc. — still GA metro)
  "303", // Atlanta proper
];

export function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

export function normalizeZip(value) {
  const raw = String(value || "").trim();
  const m = raw.match(/^(\d{5})(?:-\d{4})?$/);
  return m ? m[1] : "";
}

export function isValidUsZip(value) {
  return US_ZIP_RE.test(String(value || "").trim());
}

export function isInServiceArea(value) {
  const zip5 = normalizeZip(value);
  if (!zip5) return false;
  return SERVICE_ZIP_PREFIXES.some((p) => zip5.startsWith(p));
}

/** Fake / directory 555 numbers (exchange 555). */
export function isFake555Phone(phone) {
  const d = digitsOnly(phone);
  // Strip leading country code 1
  const national = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  if (national.length !== 10) return false;
  return national.slice(3, 6) === "555";
}

/** Bot template leftovers like {{business_name}}. */
export function hasTemplateTokens(...fields) {
  return fields.some((f) => typeof f === "string" && /\{\{[^}]+\}\}/.test(f));
}

/** Message body that is only a phone number (common spam). */
export function isPhoneOnlyMessage(message) {
  const trimmed = String(message || "").trim();
  if (!trimmed) return false;
  const digits = digitsOnly(trimmed);
  if (digits.length < 7 || digits.length > 15) return false;
  const leftover = trimmed.replace(/[\d\s\-().+/]/g, "");
  return leftover.length === 0;
}

const SPAM_EMAIL_DOMAINS = [
  "virtualhelpdesk.pro",
];

export function isSpamEmailDomain(email) {
  const e = String(email || "").trim().toLowerCase();
  if (!e || !e.includes("@")) return false;
  const domain = e.split("@").pop();
  return SPAM_EMAIL_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`));
}

/** Known recycled spam phones seen on this site. */
const BLOCKED_PHONES = new Set([
  "3072076448", // WY registered-agent / Gould St spam
]);

export function isBlockedPhone(phone) {
  const d = digitsOnly(phone);
  const national = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  return BLOCKED_PHONES.has(national);
}

export const OUT_OF_AREA_MSG =
  "We currently serve north Georgia and the Atlanta metro (Dallas, Paulding, Cobb, Douglas, and nearby). If you're just outside that area, call us at (470) 236-1410 — otherwise please check your ZIP.";

export const INVALID_ZIP_MSG = "Please enter a valid 5-digit US ZIP code.";
