import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  /* const  [renderCount, setRenderCount] = useState(1);
  useEffect(()=>{
    console.log("렌더링01", renderCount.current);
     renderCount (renderCount+1);
  }); */
  
  useEffect(()=>{
    console.log("렌더링02", renderCount.current);
    renderCount.current = renderCount.current+1;
  })
  
  return (
      <div className='App'>
      <p>Count : {count}</p>
      <button onClick={()=> setCount(count+1)}>count증가</button>
	</div>
  );
}

export default App
