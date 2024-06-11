// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = async (page, limit) => {
  const response = await axios.get('api/newsdata', {
    params: { page, limit },
  });
  return response.data;
};

export default function Home() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(page, limit);
      setData(result.data);
      setTotal(result.total);
    };

    getData();
  }, [page, limit]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <h1>Paginated Data</h1>
      <ul>
        {data.length?data.map((item) => (
          <li key={item.news_id}>{news_title_la}</li>
        )) : null}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
