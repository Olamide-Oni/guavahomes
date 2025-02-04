import React, { useState, useEffect, useRef } from 'react';

const CountUpClients = ({ stopCount, spanText }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      if (entry.isIntersecting) {
        const startCounting = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount >= stopCount) {
              clearInterval(startCounting);
              return stopCount;
            }
            return prevCount + 10;
          });
        }, 200);

        return () => clearInterval(startCounting);
      }
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, [stopCount]);

  return (
    <div ref={countRef} className="text-4xl font-bold md:flex flex-col text-slate-50">
      {count.toLocaleString()}+
      <span className="text-2xl"> {spanText}</span>
    </div>
  );
};

export default CountUpClients;