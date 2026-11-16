import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy['exterior-painting']['dallas-ga'];

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/exterior-painting-dallas-ga',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
