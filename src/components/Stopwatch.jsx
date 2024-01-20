import React from 'react'
import { useState, useEffect } from "react";

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false); 


    useEffect(() => {
      let timer;
      if (running) {
        timer = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [running]);
  

  return (
    <div>
      <div className="stopwatch">
        <h2 className="subheading2">Record your hike</h2>
        <div className="nums">
          <div className="timer">Hours: {("0" + Math.floor(time / 3600000)).slice(-2)}</div>
          <div className="timer">Minutes: {("0" + Math.floor((time / 60000) % 60)).slice(-2)}</div>
          <div className="timer">Seconds: {("0" + Math.floor((time / 1000) % 60)).slice(-2)}</div>
        </div>
        <br/>
        <div>
          <button className="stopwatch-btn" onClick={() => setRunning(true)}>
            Start
          </button>
          <button className="stopwatch-btn" onClick={() => setRunning(false)}>
            Stop
          </button>
          <button className="stopwatch-btn" onClick={() => setTime(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch