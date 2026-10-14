// Renders copy strings with clickable internal links (see lib/inlineLinks.js).
import Link from 'next/link';
import { inlineParts } from '@/lib/inlineLinks';

const LINK_STYLE = { color: 'var(--orange)', fontWeight: 700 };

export function renderInline(str) {
  if (typeof str !== 'string') return str;
  const parts = inlineParts(str);
  if (parts.length === 1 && parts[0].text !== undefined) return str;
  return parts.map((p, i) =>
    p.text !== undefined ? (
      p.text
    ) : p.href.startsWith('/') ? (
      <Link key={i} href={p.href} style={LINK_STYLE}>{p.label}</Link>
    ) : (
      <a key={i} href={p.href} style={LINK_STYLE}>{p.label}</a>
    )
  );
}

export default function InlineText({ children }) {
  return <>{renderInline(children)}</>;
}
