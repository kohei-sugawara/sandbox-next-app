import axios from 'axios';
import { FC } from 'react';

interface Data {
  useId: number;
  id: number;
  title: string;
  body: string;
}

/** https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch */
/**
 * 従来のServerSideProps()といった方法を使わずに、直接関数コンポーネント内でawaitやSuspenseを使用した非同期処理が可能
 * https://zenn.dev/waarrk/articles/23732d8c4102d0
 */
const ServerComponent: FC = async () => {
  const { data }: { data: Data[] } = await axios.get('http://jsonplaceholder.typicode.com/posts');
  console.log(data);
  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>
          <h1>Title: {item.title}</h1>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
};
export default ServerComponent;
