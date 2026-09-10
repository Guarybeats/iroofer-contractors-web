# iRoofer Contractors — API docs for agents

## Discovery
- OpenAPI: https://iroofercontractors.com/openapi.json
- API catalog: https://iroofercontractors.com/.well-known/api-catalog
- MCP server card: https://iroofercontractors.com/.well-known/mcp/server-card.json
- WebMCP: https://iroofercontractors.com/.well-known/webmcp.json
- Health: `GET /api/health`

## MCP
`GET` or JSON-RPC `POST` https://iroofercontractors.com/mcp — list/call read-only tools (`get_company_info`, `list_services`, `list_service_areas`, `find_service_page`, `call_iroofer`). Quote form fill is browser WebMCP only and never auto-submits.

## Leads
`POST /api/leads` powers the website form (Turnstile). Agents must not create leads without homeowner confirmation. Prefer `(470) 236-1410`.
