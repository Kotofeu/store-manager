import { redirect } from '@/shared/i18n';

export default function RootPage() {
  redirect({ href: '/', locale: '/en' });
}
