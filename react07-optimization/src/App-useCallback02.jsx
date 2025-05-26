import { useCallback, useEffect, useState } from 'react';
import './App.css'

const Box = ({createBoxStyle}) =>{
  const[style, setStyle] = useState({});
  useEffect(() => {
    console.log('박스 키우기');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);
  return <div style={style}></div>
}

function App() {
  const[size, setSize] = useState(100);
  const[isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(()=>{
    return{
      backgroundColor : 'red',
      width : `${size}px`,
      height : `${size}px`,
    };
  }, [size]);
 /*  const createBoxStyle = ()=>{
    return{
      backgroundColor : 'grey',
      width : `${size}px`,
      height : `${size}px`,
    };
  } */
  return (
      <div className='App' style={{
        background : isDark ? 'black' : 'white',
      }}>
      <h2>useCallback()</h2>
      <input type="number" value={size} step={5}
      onChange={(e)=> setSize(e.target.value)} />
      <button onClick={()=>setIsDark(!isDark)}>테마변경</button>
      <Box createBoxStyle={createBoxStyle} />
	</div>
  );
}

export default App
