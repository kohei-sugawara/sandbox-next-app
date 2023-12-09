'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

type Props = {
  label: string;
  next?: string;
};
const Link: FC<Props> = ({ label, next = '/' }) => {
  const router = useRouter();

  return (
    <button type='button' className='btn btn-link' onClick={() => router.push(next)}>
      {label}
    </button>
  );
};
export default Link;
