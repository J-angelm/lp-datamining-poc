import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(65410); // Valor inicial en segundos (1 hora)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div>
      <span  style={{ marginLeft:'30px', fontSize:'25px', color: 'ffffff', textDecoration: 'underline', opacity: '0.75' }}>{formatTime(countdown)}</span>
    </div>
  );
};

export default CountdownTimer;
