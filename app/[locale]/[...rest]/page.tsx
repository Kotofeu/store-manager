import { notFound } from 'next/navigation';
import { FC } from 'react';

const CatchAllPage: FC = () => {
  notFound();
};

export default CatchAllPage;
