import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy['exterior-painting'].douglasville;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/exterior-painting-douglasville',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
