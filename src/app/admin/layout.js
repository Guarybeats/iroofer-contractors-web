import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Lead Inbox — iRoofer Contractors',
  description: 'Private lead inbox. Not for public indexing.',
  path: '/admin',
  noIndex: true,
});

export default function AdminLayout({ children }) {
  return children;
}
