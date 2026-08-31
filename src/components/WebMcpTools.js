"use client";

/**
 * WebMCP tool registration (W3C webmachinelearning/webmcp).
 *
 * Exposes iRoofer's site actions to AI agents/browsers that implement the
 * Model Context API, so an agent can read our service info and start a quote
 * request without scraping the DOM.
 *
 * Implemented natively against the spec with feature detection — no third-party
 * runtime is loaded, so visitors without an agent download nothing extra.
 * `document.modelContext` is canonical; `navigator.modelContext` is the older
 * Chromium surface and is used only as a fallback.
 *
 * Deliberate policy: no tool auto-submits a lead. `start_quote_request` fills
 * the visible form and asks the human to press the button, so an agent can
 * never generate a contact request the homeowner did not approve.
 */

import { useEffect } from "react";
import { brand, services, cities } from "@/lib/brand";

const ORIGIN = "https://iroofercontractors.com";

function text(payload) {
  const body = typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
  return { content: [{ type: "text", text: body }] };
}

function setNativeValue(el, value) {
  const proto = el instanceof HTMLTextAreaElement
    ? window.HTMLTextAreaElement.prototype
    : window.HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  if (setter) setter.call(el, value);
  else el.value = value;
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

function buildTools() {
  const serviceList = services.map((s) => ({
    name: s.title,
    slug: s.slug,
    summary: s.summary,
    url: `${ORIGIN}/services/${s.slug}/`,
  }));

  const areaList = cities.map((c) => ({
    city: `${c.name}, ${c.state}`,
    slug: c.slug,
    county: c.county,
    url: `${ORIGIN}/service-areas/${c.slug}/`,
  }));

  return [
    {
      name: "get_company_info",
      description:
        "Get iRoofer Contractors' contact details, business hours, service area and credentials. Use this to answer 'who are they / how do I reach them / are they open' questions.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () =>
        text({
          name: brand.name,
          owner: brand.owner,
          phone: brand.phone,
          email: brand.email,
          website: ORIGIN,
          basedIn: brand.location,
          hours: brand.hours.full,
          emergency: "24/7 emergency storm response",
          credentials: [
            "Licensed, bonded and insured",
            "Owens Corning Preferred Contractor",
            `Family-owned since ${brand.founded}`,
            `${brand.reviewCount} Google reviews, ${brand.rating} average`,
          ],
          freeInspections: true,
          serviceArea: brand.serviceArea,
          note: "Pricing is quoted only after a free on-site inspection. No prices are published on this site.",
        }),
    },
    {
      name: "list_services",
      description:
        "List the roofing and gutter services iRoofer Contractors offers, with a summary and the page URL for each.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => text({ services: serviceList }),
    },
    {
      name: "list_service_areas",
      description:
        "List the Georgia cities and counties iRoofer Contractors serves, with the local page URL for each city.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => text({ basedIn: brand.location, cities: areaList }),
    },
    {
      name: "find_service_page",
      description:
        "Find the best page on iroofercontractors.com for a given service and/or city — for example roof repair in Kennesaw. Returns matching page URLs.",
      inputSchema: {
        type: "object",
        properties: {
          service: {
            type: "string",
            description: "Service keyword, e.g. 'roof repair', 'replacement', 'gutters', 'storm damage'.",
          },
          city: {
            type: "string",
            description: "City name in the Atlanta metro, e.g. 'Dallas', 'Marietta', 'Kennesaw'.",
          },
        },
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => {
        const q = (input?.service || "").toLowerCase().trim();
        const cityQ = (input?.city || "").toLowerCase().trim();

        const svcMatches = q
          ? serviceList.filter(
              (s) =>
                s.slug.includes(q.replace(/\s+/g, "-")) ||
                s.name.toLowerCase().includes(q) ||
                q.split(/\s+/).some((w) => w.length > 3 && s.slug.includes(w))
            )
          : serviceList;

        const cityMatch = cityQ
          ? areaList.find(
              (c) => c.city.toLowerCase().includes(cityQ) || c.slug.includes(cityQ.replace(/\s+/g, "-"))
            )
          : null;

        if (cityQ && !cityMatch) {
          return text({
            found: false,
            message: `We do not have a dedicated page for "${input.city}". Nearest coverage is listed below — call ${brand.phone} to confirm we serve that address.`,
            cities: areaList.map((c) => c.city),
          });
        }

        return text({
          found: true,
          services: svcMatches.length ? svcMatches : serviceList,
          cityPage: cityMatch || null,
          quotePage: `${ORIGIN}/contact/`,
        });
      },
    },
    {
      name: "start_quote_request",
      description:
        "Fill the free-quote form on the current page with the homeowner's details and scroll to it. This does NOT submit the request — the homeowner must review the form and press the submit button themselves. Use it to save them typing.",
      inputSchema: {
        type: "object",
        properties: {
          fullName: { type: "string", description: "Homeowner's full name." },
          phone: { type: "string", description: "Best contact phone number." },
          email: { type: "string", description: "Email address (optional)." },
          address: { type: "string", description: "Property address (optional)." },
          service: {
            type: "string",
            description: "Service needed, e.g. 'Roof Repair', 'Roof Replacement', 'Gutter Cleaning'.",
          },
          message: { type: "string", description: "What they are seeing — leak, missing shingles, storm damage." },
        },
        required: ["fullName", "phone"],
      },
      execute: async (input) => {
        const form =
          document.querySelector("form.cform") ||
          document.querySelector("form.quote-card") ||
          document.querySelector("form.hform");

        if (!form) {
          return text({
            filled: false,
            message: `No quote form on this page. Go to ${ORIGIN}/contact/ or call ${brand.phone}.`,
          });
        }

        const filled = [];
        const map = {
          fullName: input?.fullName,
          phone: input?.phone,
          email: input?.email,
          address: input?.address,
          message: input?.message,
        };
        for (const [name, value] of Object.entries(map)) {
          if (!value) continue;
          const el = form.querySelector(`[name="${name}"]`);
          if (el) {
            setNativeValue(el, String(value));
            filled.push(name);
          }
        }

        if (input?.service) {
          const sel = form.querySelector('select[name="service"]');
          if (sel) {
            const wanted = String(input.service).toLowerCase();
            const opt = Array.from(sel.options).find((o) => o.text.toLowerCase().includes(wanted));
            if (opt) {
              setNativeValue(sel, opt.value || opt.text);
              filled.push("service");
            }
          }
        }

        form.scrollIntoView({ behavior: "smooth", block: "center" });

        return text({
          filled: true,
          fields: filled,
          submitted: false,
          nextStep:
            "The form is filled in and on screen. Ask the homeowner to review it and press \"Get My Free Quote\" to send it. Nothing has been sent yet.",
          phone: brand.phone,
        });
      },
    },
    {
      name: "call_iroofer",
      description:
        "Get the phone number to reach iRoofer Contractors, including for 24/7 emergency storm response, and open the dialer on a mobile device.",
      inputSchema: {
        type: "object",
        properties: {
          urgent: { type: "boolean", description: "True if this is an active leak or storm emergency." },
        },
      },
      execute: async (input) => {
        const tel = brand.phone.replace(/[^\d+]/g, "");
        return text({
          phone: brand.phone,
          dial: `tel:${tel}`,
          hours: brand.hours.full,
          emergency: input?.urgent
            ? "Active leak or storm damage: call now — we run 24/7 emergency response and can tarp same day."
            : "Standard hours above; emergency line is answered 24/7.",
        });
      },
    },
  ];
}

export default function WebMcpTools() {
  useEffect(() => {
    const ctx =
      (typeof document !== "undefined" && document.modelContext) ||
      (typeof navigator !== "undefined" && navigator.modelContext);

    if (!ctx || typeof ctx.registerTool !== "function") return;

    const controller = new AbortController();
    for (const tool of buildTools()) {
      try {
        const result = ctx.registerTool(tool, { signal: controller.signal });
        if (result && typeof result.catch === "function") result.catch(() => {});
      } catch {
        /* duplicate or unsupported schema — ignore, the page still works */
      }
    }

    return () => controller.abort();
  }, []);

  return null;
}
