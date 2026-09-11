/**
 * Canonical host + Markdown for Agents content negotiation.
 *
 * 1) www → apex 301 (ranking signal consolidation).
 * 2) Accept: text/markdown → HTML→Markdown response for HTML pages so
 *    agents / isitagentready Level 3 pass without a paid CF Content Converter plan.
 *
 * Static assets and /api stay untouched.
 */

const SKIP_EXT =
  /\.(js|css|map|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|eot|pdf|xml|txt|json|webmanifest)$/i;

function prefersMarkdown(accept) {
  if (!accept) return false;
  // Explicit markdown preference (scanner + agents typically send this alone).
  if (/text\/markdown/i.test(accept) && !/text\/html\s*;\s*q=1/i.test(accept)) {
    // If both present, honor markdown when q(markdown) >= q(html) or html omitted.
    const md = accept.match(/text\/markdown\s*(?:;\s*q=([0-9.]+))?/i);
    const html = accept.match(/text\/html\s*(?:;\s*q=([0-9.]+))?/i);
    if (!html) return true;
    const mdQ = md && md[1] != null ? parseFloat(md[1]) : 1;
    const htmlQ = html[1] != null ? parseFloat(html[1]) : 1;
    return mdQ >= htmlQ;
  }
  return false;
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCharCode(parseInt(h, 16)),
    );
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

function metaContent(html, nameOrProp) {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${nameOrProp}["'][^>]+content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${nameOrProp}["']`,
    "i",
  );
  const m = html.match(re);
  return m ? decodeEntities(m[1] || m[2] || "").trim() : "";
}

function extractTitle(html) {
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (t) return stripTags(t[1]);
  return metaContent(html, "og:title") || "";
}

function extractJsonLd(html) {
  const blocks = [];
  const re =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const raw = m[1].trim();
    if (raw) blocks.push(raw);
  }
  return blocks;
}

function htmlToMarkdown(html) {
  let body = html;

  // Drop non-content chrome early.
  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const title = extractTitle(html);
  const description =
    metaContent(html, "description") || metaContent(html, "og:description");
  const image = metaContent(html, "og:image");
  const jsonLd = extractJsonLd(html);

  // Prefer <main> / <article> when present.
  const main =
    body.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ||
    body.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  let content = main ? main[1] : body;

  content = content
    .replace(/<(header|nav|footer|aside)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<h1[^>]*>/gi, "\n# ")
    .replace(/<\/h1>/gi, "\n\n")
    .replace(/<h2[^>]*>/gi, "\n## ")
    .replace(/<\/h2>/gi, "\n\n")
    .replace(/<h3[^>]*>/gi, "\n### ")
    .replace(/<\/h3>/gi, "\n\n")
    .replace(/<h4[^>]*>/gi, "\n#### ")
    .replace(/<\/h4>/gi, "\n\n")
    .replace(/<h5[^>]*>/gi, "\n##### ")
    .replace(/<\/h5>/gi, "\n\n")
    .replace(/<h6[^>]*>/gi, "\n###### ")
    .replace(/<\/h6>/gi, "\n\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(
      /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
      (_, href, text) => `[${stripTags(text)}](${href})`,
    )
    .replace(
      /<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi,
      (_, __, t) => `**${stripTags(t)}**`,
    )
    .replace(
      /<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi,
      (_, __, t) => `*${stripTags(t)}*`,
    )
    .replace(/<img[^>]+alt=["']([^"']*)["'][^>]*>/gi, (_, alt) =>
      alt ? `![${decodeEntities(alt)}]()` : "",
    )
    .replace(/<[^>]+>/g, "")
    .replace(/\r/g, "");

  content = decodeEntities(content)
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const front = [];
  if (title) front.push(`title: ${JSON.stringify(title)}`);
  if (description) front.push(`description: ${JSON.stringify(description)}`);
  if (image) front.push(`image: ${JSON.stringify(image)}`);

  let md = "";
  if (front.length) {
    md += `---\n${front.join("\n")}\n---\n\n`;
  }
  if (title && !content.startsWith("# ")) {
    md += `# ${title}\n\n`;
  }
  md += content;

  if (jsonLd.length) {
    md += "\n\n```json\n" + jsonLd.join("\n") + "\n```\n";
  }

  return md.trim() + "\n";
}

function estimateTokens(text) {
  // Rough GPT-style estimate (~4 chars/token) for x-markdown-tokens.
  return Math.max(1, Math.ceil(text.length / 4));
}

const AGENT_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/markdown"',
  '</.well-known/ai-catalog.json>; rel="describedby"; type="application/json"',
  '</.well-known/mcp/server-card.json>; rel="describedby"; type="application/json"',
  '</.well-known/agent-card.json>; rel="describedby"; type="application/json"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
].join(", ");

function withAgentLinkHeaders(res) {
  const headers = new Headers(res.headers);
  const existing = headers.get("Link");
  headers.set(
    "Link",
    existing ? `${existing}, ${AGENT_LINK_HEADER}` : AGENT_LINK_HEADER,
  );
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.hostname === "www.iroofercontractors.com") {
    const target = new URL(url.toString());
    target.hostname = "iroofercontractors.com";
    return Response.redirect(target.toString(), 301);
  }

  // Strip Yahoo/legacy tracking params so Google consolidates on the clean URL
  // (audit found indexed homepage variants with ?y_source=).
  const STRIP_QUERY = ["y_source", "y_source_siteid"];
  let stripped = false;
  for (const key of STRIP_QUERY) {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      stripped = true;
    }
  }
  if (stripped) {
    const clean = url.pathname + (url.searchParams.toString() ? `?${url.searchParams}` : "") + url.hash;
    return Response.redirect(new URL(clean, url.origin).toString(), 301);
  }

  const path = url.pathname;
  if (
    path.startsWith("/api/") ||
    path.startsWith("/_next/") ||
    SKIP_EXT.test(path)
  ) {
    return next();
  }

  const wantsMd = prefersMarkdown(request.headers.get("accept") || "");
  const res = await next();
  const ct = (res.headers.get("content-type") || "").toLowerCase();

  // Agent discovery Link headers on HTML document responses (RFC 8288 / 9727).
  if (ct.includes("text/html") && res.status === 200 && !wantsMd) {
    return withAgentLinkHeaders(res);
  }

  if (!wantsMd) {
    return res;
  }

  if (!ct.includes("text/html") || res.status !== 200) {
    return res;
  }

  const html = await res.text();
  const markdown = htmlToMarkdown(html);
  const headers = new Headers();

  // Preserve useful origin headers; rewrite body-related ones.
  for (const [k, v] of res.headers) {
    const key = k.toLowerCase();
    if (
      [
        "content-type",
        "content-length",
        "content-encoding",
        "etag",
        "last-modified",
        "transfer-encoding",
        "content-range",
      ].includes(key)
    ) {
      continue;
    }
    headers.set(k, v);
  }

  const vary = headers.get("Vary");
  headers.set(
    "Vary",
    vary && !/\bAccept\b/i.test(vary) ? `${vary}, Accept` : vary || "Accept",
  );
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("x-markdown-tokens", String(estimateTokens(markdown)));
  headers.set(
    "x-original-tokens",
    String(estimateTokens(html)),
  );

  headers.set(
    "Link",
    headers.get("Link")
      ? `${headers.get("Link")}, ${AGENT_LINK_HEADER}`
      : AGENT_LINK_HEADER,
  );

  return new Response(markdown, { status: 200, headers });
}
