import { Link } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <div>
      <h1>{locale}</h1>
      <Link href="/about">{locale}</Link>
    </div>
  );
}
