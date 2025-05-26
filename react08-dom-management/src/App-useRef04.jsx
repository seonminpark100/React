import { useEffect, useRef } from 'react';
import './App.css'

function App() {
  
  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = ()=>{
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
      <div className='App'>
      <input type="text" placeholder='아이디' ref={inputRef} />
      <button onClick={login}>로그인</button>
	</div>
  );
}

export default App
