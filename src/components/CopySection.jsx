// One body section on a service × city page (data from lib/localCopy.js).
//
// Section shape: { h, p?, id?, blocks? }
//   p       — opening paragraph (string). May contain [anchor](/path/) links.
//   id      — optional anchor id (e.g. 'roof-inspection' → /roof-repair-hiram/#roof-inspection)
//   blocks  — optional extra content rendered after p, in order. Each block is either
//             a string (another paragraph) or { title?, items: [string], ordered? } (a list).
import { renderInline } from '@/components/InlineText';

const MUTED = '#52606b';

export default function CopySection({ sec }) {
  return (
    <div id={sec.id} className="rv" style={{ maxWidth: 780, marginBottom: 34, scrollMarginTop: 120 }}>
      <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15 }}>{sec.h}</h2>
      {sec.p ? (
        <p style={{ color: MUTED, fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>{renderInline(sec.p)}</p>
      ) : null}
      {(sec.blocks || []).map((b, i) =>
        typeof b === 'string' ? (
          <p key={i} style={{ color: MUTED, fontSize: '1.02rem', marginTop: 12, lineHeight: 1.75 }}>{renderInline(b)}</p>
        ) : (
          <div key={i} style={{ marginTop: 14 }}>
            {b.title ? <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--ink)' }}>{b.title}</h3> : null}
            {b.ordered ? (
              <ol style={{ color: MUTED, fontSize: '1.02rem', lineHeight: 1.75, marginTop: 6, paddingLeft: 22 }}>
                {b.items.map((it, k) => <li key={k}>{renderInline(it)}</li>)}
              </ol>
            ) : (
              <ul style={{ color: MUTED, fontSize: '1.02rem', lineHeight: 1.75, marginTop: 6, paddingLeft: 22 }}>
                {b.items.map((it, k) => <li key={k}>{renderInline(it)}</li>)}
              </ul>
            )}
          </div>
        )
      )}
    </div>
  );
}
