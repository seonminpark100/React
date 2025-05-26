import { useRef, useState } from 'react';
import './App.css'

function App() {
  
  console.log("렌더링됨..!!");

  const [count, setCount]= useState(0);
  const countRef = useRef(0);

  const increaseCountState = () =>{
    setCount(count + 1);
  }
  const increaseCountRef = () =>{
    countRef.current = countRef.current + 1;
    console.log('Ref', countRef.current);
  }
  return (
      <div className='App'>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State증가</button>
      <button onClick={increaseCountRef}>Ref증가</button>
	</div>
  );
}

export default App
