/**
 * Canonical host middleware.
 *
 * Google was indexing www.iroofercontractors.com and iroofercontractors.com as two
 * separate sites, splitting ranking signals (Search Console showed www pages earning
 * impressions independently of the apex). Self-referencing canonical tags are only a
 * hint; this issues a hard 301 so the apex is the single canonical host.
 *
 * Path and query string are preserved. Everything else falls through untouched.
 */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.hostname === "www.iroofercontractors.com") {
    const target = new URL(url.toString());
    target.hostname = "iroofercontractors.com";
    return Response.redirect(target.toString(), 301);
  }

  return next();
}
