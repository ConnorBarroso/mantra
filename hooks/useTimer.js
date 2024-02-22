import { useState, useEffect } from "react";

const useTimer = (isPaused, initial = 0) => {
  let defaultState = 0;
  if (initial) defaultState = initial;
  const [count, setCount] = useState(defaultState);

  const minutes = Math.floor(count / 60);
  const seconds = count - minutes * 60;
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, [isPaused]);

  return `${minutes}:${seconds}`;
};

export default useTimer;
