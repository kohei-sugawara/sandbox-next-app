import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

interface Data {
  useId: number;
  id: number;
  title: string;
  body: string;
}

const useSampleSWR = () => {
  const { data }: { data: Data[] } = useSWR('http://jsonplaceholder.typicode.com/posts', fetcher, {
    suspense: true,
    fallbackData: [], // SSRではfallback指定がないとerror
  });
  console.log(data);
  return data;
};
export default useSampleSWR;
