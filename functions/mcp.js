/**
 * Lightweight MCP-compatible HTTP endpoint for agent discovery / read-only tools.
 * Browser WebMCP remains the rich client-side surface; this gives a stable URL
 * for the MCP server card without inventing lead-submission side effects.
 */

const ORIGIN = "https://iroofercontractors.com";

const TOOLS = [
  {
    name: "get_company_info",
    description:
      "Contact details, business hours, service area and credentials for iRoofer Contractors.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_services",
    description: "List roofing and gutter services with page URLs.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_service_areas",
    description: "List Georgia cities/counties served with page URLs.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "find_service_page",
    description: "Find the best page for a service and/or city keyword.",
    inputSchema: {
      type: "object",
      properties: {
        service: { type: "string" },
        city: { type: "string" },
      },
    },
  },
  {
    name: "call_iroofer",
    description: "Phone number including 24/7 emergency storm response.",
    inputSchema: { type: "object", properties: {} },
  },
];

const SERVICES = [
  { name: "Roof Repair", url: `${ORIGIN}/services/roof-repair/` },
  { name: "Roof Replacement", url: `${ORIGIN}/services/roof-replacement/` },
  { name: "New Construction", url: `${ORIGIN}/services/new-construction/` },
  {
    name: "Storm & Hail Damage",
    url: `${ORIGIN}/services/storm-damage-roof-repair/`,
  },
  {
    name: "Gutter Repair & Replacement",
    url: `${ORIGIN}/services/gutter-repair-replacement/`,
  },
];

const CITIES = [
  "dallas-ga",
  "douglasville",
  "hiram",
  "powder-springs",
  "marietta",
  "kennesaw",
  "acworth",
  "austell",
  "roswell",
  "alpharetta",
  "canton",
].map((slug) => ({
  slug,
  url: `${ORIGIN}/service-areas/${slug}/`,
}));

function textResult(payload) {
  const body =
    typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
  return { content: [{ type: "text", text: body }] };
}

function callTool(name, args = {}) {
  switch (name) {
    case "get_company_info":
      return textResult({
        name: "iRoofer Contractors",
        phone: "(470) 236-1410",
        email: "iroofercontractors@gmail.com",
        website: ORIGIN,
        address: "152 Freedom Dr, Dallas, GA 30157",
        hours: "Mon–Sat by appointment; 24/7 emergency storm response",
        credentials: [
          "Licensed, bonded and insured",
          "Owens Corning Preferred Contractor",
          "Family-owned since 2019",
        ],
        freeInspections: true,
        note: "Pricing only after free on-site inspection.",
      });
    case "list_services":
      return textResult({ services: SERVICES });
    case "list_service_areas":
      return textResult({ basedIn: "Dallas, GA", cities: CITIES });
    case "find_service_page": {
      const service = String(args.service || "").toLowerCase();
      const city = String(args.city || "").toLowerCase().replace(/\s+/g, "-");
      const matches = [];
      for (const s of SERVICES) {
        if (!service || s.name.toLowerCase().includes(service) || service.includes("roof") || service.includes("gutter") || service.includes("storm")) {
          if (!service || s.name.toLowerCase().includes(service.split(" ")[0]) || service.includes(s.name.toLowerCase().split(" ")[0])) {
            matches.push(s);
          }
        }
      }
      const filteredServices = service
        ? SERVICES.filter((s) => {
            const n = s.name.toLowerCase();
            return (
              n.includes(service) ||
              service.includes("repair") && n.includes("repair") ||
              service.includes("replac") && n.includes("replac") ||
              service.includes("storm") && n.includes("storm") ||
              service.includes("hail") && n.includes("storm") ||
              service.includes("gutter") && n.includes("gutter") ||
              service.includes("new") && n.includes("new")
            );
          })
        : SERVICES;
      const citySlug = CITIES.find(
        (c) => c.slug.includes(city) || city.includes(c.slug.replace(/-ga$/, "")),
      );
      const pages = [];
      for (const s of filteredServices.length ? filteredServices : SERVICES) {
        pages.push(s);
      }
      if (citySlug) pages.push(citySlug);
      if (city && service.includes("repair")) {
        pages.push({
          name: `Roof repair ${city}`,
          url: `${ORIGIN}/roof-repair-${city.replace(/-ga$/, "")}${city.includes("dallas") ? "-ga" : ""}/`.replace(/--/g, "-"),
        });
      }
      return textResult({
        query: { service: args.service || null, city: args.city || null },
        pages: pages.slice(0, 8),
        contact: `${ORIGIN}/contact/`,
      });
    }
    case "call_iroofer":
      return textResult({
        phone: "(470) 236-1410",
        tel: "tel:+14702361410",
        emergency: "24/7 emergency storm response",
      });
    default:
      return {
        content: [{ type: "text", text: `Unknown or unsupported tool: ${name}` }],
        isError: true,
      };
  }
}

function corsHeaders(extra = {}) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Protocol-Version",
    ...extra,
  };
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function onRequestGet() {
  return Response.json(
    {
      name: "iroofer-contractors",
      version: "1.0.0",
      protocol: "mcp",
      endpoint: `${ORIGIN}/mcp`,
      serverCard: `${ORIGIN}/.well-known/mcp/server-card.json`,
      tools: TOOLS,
      note: "POST JSON-RPC methods: tools/list, tools/call. start_quote_request is browser WebMCP only (never auto-submits).",
    },
    { headers: corsHeaders({ "Content-Type": "application/json" }) },
  );
}

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return Response.json(
      { jsonrpc: "2.0", error: { code: -32700, message: "Parse error" }, id: null },
      { status: 400, headers: corsHeaders() },
    );
  }

  const id = body?.id ?? null;
  const method = body?.method;

  if (method === "initialize") {
    return Response.json(
      {
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: { name: "iroofer-contractors", version: "1.0.0" },
        },
      },
      { headers: corsHeaders() },
    );
  }

  if (method === "tools/list" || method === "list_tools") {
    return Response.json(
      { jsonrpc: "2.0", id, result: { tools: TOOLS } },
      { headers: corsHeaders() },
    );
  }

  if (method === "tools/call" || method === "call_tool") {
    const name = body?.params?.name;
    const args = body?.params?.arguments || {};
    if (!name) {
      return Response.json(
        {
          jsonrpc: "2.0",
          id,
          error: { code: -32602, message: "Missing tool name" },
        },
        { status: 400, headers: corsHeaders() },
      );
    }
    if (name === "start_quote_request") {
      return Response.json(
        {
          jsonrpc: "2.0",
          id,
          result: textResult(
            "start_quote_request is only available via browser WebMCP on iroofercontractors.com pages and never auto-submits. Ask the homeowner to submit, or call (470) 236-1410.",
          ),
        },
        { headers: corsHeaders() },
      );
    }
    return Response.json(
      { jsonrpc: "2.0", id, result: callTool(name, args) },
      { headers: corsHeaders() },
    );
  }

  if (method === "ping") {
    return Response.json(
      { jsonrpc: "2.0", id, result: {} },
      { headers: corsHeaders() },
    );
  }

  return Response.json(
    {
      jsonrpc: "2.0",
      id,
      error: { code: -32601, message: `Method not found: ${method}` },
    },
    { status: 404, headers: corsHeaders() },
  );
}
