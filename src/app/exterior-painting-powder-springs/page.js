import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy['exterior-painting']['powder-springs'];

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/exterior-painting-powder-springs',
});

export default function Page() {
  return <TradeCityPage copy={copy} />;
}
