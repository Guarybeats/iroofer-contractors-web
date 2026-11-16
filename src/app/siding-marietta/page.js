import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy.siding.marietta;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/siding-marietta',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
