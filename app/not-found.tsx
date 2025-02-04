import { routing } from '@/shared/i18n';
import { MainProvider } from '@/app/providers/main-provider';

export default async function GlobalNotFound() {
  return <MainProvider locale={routing.defaultLocale}>404</MainProvider>;
}
