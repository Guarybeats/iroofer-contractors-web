import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy.siding.douglasville;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/siding-douglasville',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
