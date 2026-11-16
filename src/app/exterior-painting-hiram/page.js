import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy['exterior-painting'].hiram;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/exterior-painting-hiram',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
