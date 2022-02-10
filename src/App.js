import "./styles.css";
import { useEffect, useState } from "react";
import useInterval from "./useInterval";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isPlaying, setPlaying] = useState(false);

  useInterval(
    () => {
      setSeconds(seconds + 1);
    },
    isPlaying ? delay : null
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{seconds}</p>
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? "pause" : "play"}
      </button>
      <button onClick={() => setSeconds(0)}>Refresh</button>
      <p>
        <label htmlFor="delay">Delay: </label>
        <input
          type="number"
          name="delay"
          onChange={(e) => setDelay(e.target.value)}
          value={delay}
        />
      </p>
    </div>
  );
}
