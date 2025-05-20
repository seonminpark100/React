import { useState } from 'react';
import './App.css'

function Top(props) {
  return(
    <h2><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.myModeChage('both');
    }}>React - State 변경하기</a></h2>
  );
}

function MyCont1(props) {
  return(
    <>
    <li><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.myModeChage('front');
    }}>프론트앤드</a></li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>JQuery</li>
    </ul>
    </>
  );
}

function MyCont2(props) {
  return(
    <>
    <li><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.myModeChage('back');
    }}>백앤드</a></li>
    <ul>
      <li>Java</li>
      <li>Oracle</li>
      <li>JSP</li>
      <li>Spring Boot</li>
    </ul>
    </>
  );
}

function App() {
  const [mode, setMode] = useState('both');
  let contents = '';
  if (mode === 'front') {
    contents = <>
    <MyCont1 myModeChage={(mode)=>{
      setMode(mode);
    }}></MyCont1>
    </>
  }else if (mode ==='back') {
    contents = <>
    <MyCont2 myModeChage={(mode)=>{
      setMode(mode);
    }}></MyCont2>
    </>
  }else{
    contents =<>
      <MyCont1 myModeChage={(mode)=>{
        setMode(mode);
      }}></MyCont1>
       <MyCont2 myModeChage={(mode)=>{
      setMode(mode);
    }}></MyCont2>
    </>
  }
  return (
      <div className='App'>
        <Top myModeChage={(mode)=>{
          setMode(mode);
        }}></Top>
        <OL>
          {contents}
        </OL>
      <h1>React 기본형</h1>
	</div>
  );
}
export default App
