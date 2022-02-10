import { useRef, useEffect } from "react";

const useInterval = (callback = () => {}, delay = null) => {
  let savedCallback = useRef();
  // const intervalId = 0;
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
