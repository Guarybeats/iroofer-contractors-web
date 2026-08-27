import Link from 'next/link';
import { getGuides } from '@/lib/relatedGuides';

export default function RelatedGuides({ slug, heading = 'Local roofing guides' }) {
  const guides = getGuides(slug);
  if (!guides.length) return null;
  return (
    <div className="rv" style={{ marginTop: 34, borderTop: '1px solid rgba(22,29,37,.12)', paddingTop: 22 }}>
      <span className="eyebrow dark">{heading}</span>
      <ul style={{ lineHeight: 2, marginTop: 10, color: '#52606b' }}>
        {guides.map((g) => (
          <li key={g.href}>
            <Link href={g.href} style={{ color: 'var(--orange)', fontWeight: 700 }}>{g.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
