import { useState, useEffect } from "react";
import "./count.css";

function CountDown() {
  const [countdown, setCountdown] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const input = parseInt(event.target.value);
      const count = Number.isInteger(input) ? Math.floor(input) : 0;
      setCountdown(count);
    }
  };

  useEffect(() => {
    if (countdown > 0) {
      clearInterval(timer);
      setTimer(setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000));
    } else {
      clearInterval(timer);
      setTimer(null);
    }
    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  return (
    <div id="timer">
        <h2>CountDown Timer</h2>
      <input type="text" id="timeCount" onKeyDown={handleKeyDown} placeholder="Enter number" />
      <div id="current-time">{countdown}</div>
    </div>
  );
}
export default CountDown;
