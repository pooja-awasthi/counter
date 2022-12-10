import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const startPauseRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [startCounter, setStartCounter] = useState(false);

  const incrementCounter = (event) => {
    setStartCounter(true);
    if (startPauseRef.current.innerText === "Pause") setStartCounter(false);
    if (startPauseRef.current.innerText !== "Pause")
      startPauseRef.current.innerText = "Pause";
  };

  const resetCounter = () => {
    setCounter(0);
    setStartCounter(false);
    if (startPauseRef.current.innerText === "Pause") {
      startPauseRef.current.innerText = "Start";
    }
  };

  useEffect(() => {
    let timer;
    if (startCounter) {
      timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [startCounter, counter]);

  return (
    <div className="App">
      <span>{counter}</span>
      <button ref={startPauseRef} onClick={incrementCounter}>
        Start
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
