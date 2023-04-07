import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const result = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'EFksrx0o7WJjY2k4FvMs6A==Jx80OS03eWuEE1eC',
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
      setIsPending(false);
    };
    fetchData();
  }, [setData]);

  if (error) return <div className="quotes">Unable to fetch quotes!</div>;
  if (isPending) return <div className="quotes">Loading...</div>;
  return (
    <>
      {data.map((item) => (
        <div key={item.author} className="quotes">
          <p>{item.quote}</p>
          <span>
            &quot;
            {item.author}
            &quot;
          </span>
        </div>
      ))}
    </>
  );
}
