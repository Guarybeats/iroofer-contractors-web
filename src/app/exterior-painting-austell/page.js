import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy['exterior-painting'].austell;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/exterior-painting-austell',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
