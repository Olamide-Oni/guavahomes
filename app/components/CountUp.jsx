import React, { useState, useEffect } from 'react';

const CountUpClients = ({ stopCount, spanText }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= stopCount) {
          clearInterval(interval);
          return stopCount;
        }
        return prevCount + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [stopCount]);

  return (
    <div className="text-4xl font-bold flex flex-col justify-center items-center">
      <p>{count.toLocaleString()}+</p>
      <span className="text-2xl"> {spanText}</span>
    </div>
  );
};

export default CountUpClients;