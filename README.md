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
