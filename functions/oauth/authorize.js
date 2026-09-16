/**
 * Placeholder OAuth authorization endpoint.
 * Published for discovery compliance only — this site does not run an
 * interactive login that issues authorization codes or access tokens.
 */
const BODY = {
  error: "unauthorized_client",
  error_description:
    "iRoofer Contractors does not currently issue OAuth authorizations or access tokens. Public discovery and read-only agent endpoints are anonymous; see https://iroofercontractors.com/auth.md",
};

export async function onRequest() {
  return Response.json(BODY, {
    status: 400,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
