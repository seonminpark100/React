import { useCallback, useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const[countNumber, setCountNumber] = useState(0);
  const[randomNumber, setRandomNumber] = useState(0);

/*   const somethingGood = () =>{
    console.log('somethingGood호출 :${countNumber}, ${randomNumber}');
    return;
  } */

    const somethingGood = useCallback(()=>{
      console.log(`somethingGood호출 :${countNumber}, ${randomNumber}`);
      return;
    }, [countNumber]);

  useEffect(()=>{
    console.log('somethingGood() or randomGood() 변경됨');
  }, [somethingGood]);

  return (
      <div className='App'>
      <h2>useCallback()</h2>
      <input type="number" value={countNumber}
      onChange={(e)=> setCountNumber(e.target.value)} />
      <button onClick={()=>{
        setRandomNumber(Math.random());
      }}>난수: ${randomNumber}</button><br />
      <button onClick={somethingGood}>somethingGood호출</button>
	</div>
  );
}

export default App
