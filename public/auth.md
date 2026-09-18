# auth.md

You are an AI agent or assistant helping a homeowner find accurate facts about **iRoofer Contractors** (Dallas, GA roofing). This file explains how authentication works on https://iroofercontractors.com today.

**Honest model (read this first):** public discovery and read-only agent endpoints are **anonymous**. No account registration is required for the current public agent APIs. This site does **not** issue API keys or OAuth access tokens for protected write APIs. Quote forms and other human actions stay **human-confirmed** (agents must not invent or auto-submit leads).

## Audience

- AI agents / assistants helping homeowners find iRoofer company facts, services, service areas, and how to request a free inspection
- Machine scanners that check agent-ready auth discovery (`auth.md` + OAuth well-known documents)

Humans who want a quote should call **(470) 236-1410** or use the website contact form at https://iroofercontractors.com/contact/

## Identity

- **Public reads:** anonymous
- **Credentials:** none required for public discovery and read tools
- **Registration:** not offered for agents today — visiting `/auth.md` or `/contact/` does **not** create an account and does **not** mint tokens

## Public endpoints (no token)

Use these without credentials:

| Path | Purpose |
| --- | --- |
| https://iroofercontractors.com/.well-known/ai-catalog.json | AI resource catalog |
| https://iroofercontractors.com/.well-known/agent-card.json | Agent card / skills summary |
| https://iroofercontractors.com/.well-known/mcp/server-card.json | MCP server card |
| https://iroofercontractors.com/.well-known/api-catalog | RFC 9727-style API catalog (linkset) |
| https://iroofercontractors.com/openapi.json | OpenAPI for public health / MCP / lead form |
| https://iroofercontractors.com/llms.txt | Site summary for LLMs |
| https://iroofercontractors.com/mcp | Read-only MCP HTTP tools |
| https://iroofercontractors.com/docs/api | Short API notes for agents |

## Step 1 — Discover OAuth well-known docs

Structured discovery (for scanners / future protected APIs) lives next to this prose:

```http
GET /.well-known/oauth-protected-resource
```

```http
GET /.well-known/oauth-authorization-server
```

Canonical URLs:

- Protected Resource Metadata (PRM): https://iroofercontractors.com/.well-known/oauth-protected-resource
- Authorization Server metadata: https://iroofercontractors.com/.well-known/oauth-authorization-server

The PRM is authoritative for `resource`, `authorization_servers`, `scopes_supported`, and `bearer_methods_supported`. This `auth.md` is the human/agent-readable companion.

### What the PRM says today

- `resource`: `https://iroofercontractors.com/`
- `authorization_servers`: `["https://iroofercontractors.com"]`
- `scopes_supported`: includes `public:read` (anonymous public reads)
- `bearer_methods_supported`: `["header"]` (if a bearer token were ever issued, it would use `Authorization: Bearer …`)
- `resource_documentation`: this file (`/auth.md`)

### What the AS metadata says today

- `issuer`: `https://iroofercontractors.com` (must match the PRM authorization server)
- Minimal RFC 8414 fields are published for **discovery compliance**
- `agent_auth` documents **anonymous** identity with **no credentials**
- **OAuth token endpoints are published for discovery compliance, but this site does not currently issue access tokens for protected write APIs**

If you call `authorization_endpoint` or `token_endpoint`, expect a clear JSON error stating that grants / tokens are not issued. Do **not** invent a login flow or assume a successful token response.

## Step 2 — How to call public APIs

No registration step. No `Authorization` header needed for public reads.

```http
GET /openapi.json
Accept: application/json
```

```http
GET /.well-known/mcp/server-card.json
Accept: application/json
```

```http
GET /api/health
Accept: application/json
```

MCP read tools (`get_company_info`, `list_services`, `list_service_areas`, `find_service_page`, `call_iroofer`) are available at https://iroofercontractors.com/mcp without credentials. The quote-form fill path (WebMCP / browser) never auto-submits — a human must confirm.

## Step 3 — Human actions (not agent-authenticated)

- Free inspection / quote: phone **(470) 236-1410** or https://iroofercontractors.com/contact/
- `POST /api/leads` powers the website form (Turnstile when configured). Agents must not create leads without homeowner confirmation.

## Credentials summary

| Surface | Auth today |
| --- | --- |
| Discovery files (well-known, OpenAPI, llms.txt, auth.md) | Anonymous — none |
| MCP read tools | Anonymous — none |
| Lead form POST | Website form + Turnstile; not an agent OAuth product |
| Protected write APIs / issued API keys | **Not available** — no tokens issued |

## Related links

- Company site: https://iroofercontractors.com/
- Contact: https://iroofercontractors.com/contact/
- API notes: https://iroofercontractors.com/docs/api
- PRM: https://iroofercontractors.com/.well-known/oauth-protected-resource
- AS metadata: https://iroofercontractors.com/.well-known/oauth-authorization-server
