import { useState, useEffect } from "react";
export default function Timer() {
  const [time, setTime] = useState(0);
  const [runing, setRuning] = useState(true);
  useEffect(() => {
    let intervale;
    if (runing) {
      intervale = setInterval(() => {
        setTime((prevTime)=>prevTime + 1);
      }, 1000);
    }else{
        clearInterval(intervale);
    }
    return () => {
      clearInterval(intervale);
    };
  });

  const initTime = () => {
    setTime(0);
  };

  const TogleHundleBtn = () => {
    setRuning((prev) => !prev);
  };
  return (
    <>
      <p>Time:{time}</p>
      <button onClick={TogleHundleBtn}>{runing ? "Stop" : "Run"}</button>
      <button onClick={initTime}>init</button>
    </>
  );
}
