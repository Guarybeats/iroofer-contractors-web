// Loads the Cloudflare Turnstile API script at most once per page, on demand.
// Uses explicit render + the documented `onload` query-param callback so the
// promise resolves only when `window.turnstile` is ready.
const SCRIPT_ID = "cf-turnstile-api";
const ONLOAD_CB = "__irTurnstileOnload";
const SRC = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=${ONLOAD_CB}`;

let loadPromise = null;

export function loadTurnstile() {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    window[ONLOAD_CB] = () => resolve(window.turnstile);
    if (document.getElementById(SCRIPT_ID)) return; // already injected; wait for onload
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = SRC;
    s.async = true;
    s.defer = true;
    s.onerror = () => {
      loadPromise = null; // allow a retry on the next interaction
      s.remove();
      reject(new Error("Turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
  return loadPromise;
}
