/**
 * Placeholder OAuth token endpoint.
 * Discovery compliance only — grants are not issued.
 */
const BODY = {
  error: "unsupported_grant_type",
  error_description:
    "iRoofer Contractors does not currently issue OAuth access tokens for protected write APIs. Use anonymous public reads; see https://iroofercontractors.com/auth.md",
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
