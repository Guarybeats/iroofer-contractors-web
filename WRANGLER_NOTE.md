# Cloudflare Pages build config (if you connect the repo directly instead of GitHub Actions)
# Build command: npm run build
# Build output directory: out
#
# Required environment variables (set in Cloudflare Pages dashboard → Settings → Environment variables):
#   NEXT_PUBLIC_API_URL   = https://<your-cloud-run-url>   (your deployed FastAPI service)

## Turnstile (lead spam)

Also set on the Pages project (Functions see these at runtime; site key is needed at **build** time for Next):

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (plaintext)
- `TURNSTILE_SECRET_KEY` (encrypted / secret)
