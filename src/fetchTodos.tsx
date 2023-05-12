import axios from 'axios';
import { useState, useEffect } from 'react';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface State<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
}

const FetchTodos = <T extends ITodo>(url: string, _page: number): State<T> => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios
        .get(url, {
          params: {
            _page,
            _limit: 25,
          },
        })
        .then((res) => {
          setData(res.data);
          setTotalCount(res.headers['x-total-count']);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    }, 1800);
  }, [url, _page]);

  return { data, loading, error, totalCount };
};

export default FetchTodos;
