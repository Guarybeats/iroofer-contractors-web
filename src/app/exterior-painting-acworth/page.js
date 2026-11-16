import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy['exterior-painting'].acworth;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/exterior-painting-acworth',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
