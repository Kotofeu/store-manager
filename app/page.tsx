import { redirect } from 'next/navigation';
import { FC } from 'react';

const RootPage: FC = () => {
  redirect('/en');
};

export default RootPage;
