import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy.siding['dallas-ga'];

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/siding-dallas-ga',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
