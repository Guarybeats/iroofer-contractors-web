import TradeCityPage from '@/components/TradeCityPage';
import { tradeCopy } from '@/lib/tradeCopy';
import { seo } from '@/lib/seo';

const copy = tradeCopy.siding.kennesaw;

export const metadata = seo({
  title: copy.title,
  description: copy.description,
  path: '/siding-kennesaw',
});

export default function Page() {
  return <TradeCityPage copy={copy} photoSet="siding" />;
}
