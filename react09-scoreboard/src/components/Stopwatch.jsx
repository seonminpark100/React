import React, { useRef, useState } from "react";

export default function Stopwatch(props) {

  const [timerFlag, setTimerFlag] = useState(false);

  let [ticker, setTicker] = useState(0);

  let timeRef = useRef(0);

  const startTimer = ()=>{
    ticker++;
    timeRef.current = setInterval(()=>{
      console.log('틱톡');
      setTicker(ticker++);
    }, 1000);
  }
  const stopTimer = ()=>{
    clearInterval(timeRef.current);
  }
  console.log('timerRef', timeRef);

  return (<>
    <div className="stopwatch">
      <h1 className="h1">StopWatch</h1>
      <span className="stopwatch-time">{ticker}</span>
      <button onClick={()=>{
        setTimerFlag(!timerFlag);
        (timerFlag===true) ? stopTimer() : startTimer();
       }}>{(timerFlag===false) ? 'Start' : 'Stop'}</button>
      <button onClick={()=>{ 
        if (timerFlag===true) {
          alert('StopWatch가 동작중입니다.');
        }else{
          setTicker(0);
        }
       }}>Reset</button>
    </div>
  </>);
}