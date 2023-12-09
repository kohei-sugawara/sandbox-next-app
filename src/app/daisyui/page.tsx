import Link from '@/components/ui/Link';
import { FC, Suspense } from 'react';
import PostsList from './_components/ServerComponent';

const DaisyUi: FC = () => {
  return (
    <>
      <div className='flex items-end'>
        <article className='prose lg:prose-xl'>
          <h1>Json Placeholder</h1>
        </article>
        <Link label='戻る' />
      </div>
      <div className='divider' />
      <Suspense fallback={<h1 style={{ fontSize: '50px' }}>Loading...</h1>}>
        <PostsList />
      </Suspense>
    </>
  );
};
export default DaisyUi;
