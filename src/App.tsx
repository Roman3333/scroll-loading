import { useState, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import FetchTodos, { ITodo } from './fetchTodos';

function App() {
  const [data, setData] = useState<ITodo[]>([]);
  const [page, setPage] = useState<number>(1);
  const {
    data: resData,
    loading,
    totalCount,
  } = FetchTodos('https://jsonplaceholder.typicode.com/todos', page);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const isFetching = useMemo<boolean>(() => +totalCount > data.length, [totalCount, data]);

  useEffect(() => {
    if (data && inView) setPage((prev) => (prev += 1));
  }, [inView]);

  useEffect(() => {
    if (resData && isFetching) setData((prev) => [...prev, ...resData]);
  }, [resData]);

  return (
    <main className="bg-slate-900">
      <section className="min-h-screen w-[600px] mx-auto flex flex-col">
        {data &&
          data.map(({ id, title }) => {
            return (
              <div className="w-[400px] border text-[#e2e8f0] text-[18px] mb-2" key={id}>
                <strong>({id})</strong> - {title}
              </div>
            );
          })}
        {loading && isFetching && <h4 className="text-red-500 text-center">Loading...</h4>}
        {!loading && isFetching && (
          <div ref={ref} className="h-[40px] bg-red-950">
            Test
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
