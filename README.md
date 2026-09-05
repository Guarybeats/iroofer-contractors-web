# iRoofer Contractors — Web + Lead Capture

Open-source marketing site and lead-capture system for **iRoofer Contractors**
(local, family-owned roofer, Dallas GA). Built as a free/OSS alternative to the
paid "Claude Design + Higsfield + Netlify" stack shown in the tutorial.

## Stack
- **Frontend:** Next.js (App Router, static export) — deploys to Cloudflare Pages (free)
- **Backend:** FastAPI lead-capture API (SQLite) — deploys to GCP Cloud Run (free tier)
- **Design system:** `design-system/` (brand.md, tokens.json, logo.svg) — the single
  source of truth, regenerated/extended by Hermes
- **Images:** generated with free/OSS image models (Pollinations / local SDXL)

## Brand rules
- Public brand is **iRoofer Contractors** — never "Guary" in customer-facing copy.
- Palette = slate + rust (see `design-system/tokens.json`).

## Local dev
```bash
# frontend
npm install
npm run dev          # http://localhost:3002

# backend (separate terminal)
cd api
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --port 8100 --reload
```

Set `NEXT_PUBLIC_API_URL` to your deployed API before building for production.

## Deploy
- Frontend: connect repo to Cloudflare Pages, build `npm run build`, output `out/`.
- Backend: `gcloud run deploy` (see `api/Dockerfile`). Enable CORS for the Pages domain.
- Admin leads view: `/admin` (protect with `ADMIN_USER` / `ADMIN_PASS` env vars).

## Lead form spam hardening

Lead POSTs go to the Cloudflare Pages Function at `/api/leads` (`functions/api/leads.js`).
Protection layers:

1. **Cloudflare Turnstile** — widget on every lead form; server-side `siteverify` in `/api/leads`
2. **Honeypot** — silent 201, no email if `_honeypot` / `website` is filled
3. **Heuristics** — reject 555 phones, known spam numbers, `{{template}}` tokens, phone-only messages, spam email domains
4. **Service-area ZIP** — require a valid US ZIP in north GA / Atlanta metro (`300`–`303` prefixes); out-of-area gets a friendly 400 (no owner email)

### Environment variables

Set these in **Cloudflare Pages → Settings → Environment variables** (and locally in `.env.local` for `next` builds). **Do not commit secrets.**

| Variable | Where | Required | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Build + runtime (public) | Yes (prod) | Turnstile site key — embed in the widget |
| `TURNSTILE_SECRET_KEY` | Pages Function only (secret) | Yes (prod) | Turnstile secret — server `siteverify` |
| `TURNSTILE_OPTIONAL` | Pages Function | No | Set `1` to allow missing Turnstile in production (not recommended) |
| `RESEND_API_KEY` | Pages Function | No | Email delivery via Resend |
| `LEAD_FROM` / `LEAD_TO` | Pages Function | No | Override sender / recipient |
| `NEXT_PUBLIC_API_URL` | Build | No | Override API origin if not same-origin |

**Fail-closed:** if `TURNSTILE_SECRET_KEY` is missing on a Cloudflare Pages deploy (`CF_PAGES=1`) and `TURNSTILE_OPTIONAL` is not `1`, `/api/leads` returns **503** and does not email.

Create keys in the [Cloudflare Turnstile dashboard](https://dash.cloudflare.com/?to=/:account/turnstile) for `iroofercontractors.com` (and localhost for local testing).
