import './App.css'

function App() {
  const Mystyle ={
    color : "white",
    backgroundColor : "DodgerBlue",
    padding:  "10PX",
    fontFamily: "verdana"

  };
  return (
      <div className='App'>
      <h1>React 기본형</h1>
      <ol>
        <li style={{color : "red"}}>프론트엔드</li>
        <ul style={Mystyle}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>JQuery</li>
        </ul>
        <li className='backEnd'>백엔드</li>
        <ul >
          <li id='backEndSub'>Java</li>
          <li className='warnings'>Oracle</li>
          <li>JSP</li>
          <li>Spring Boot</li>
        </ul>

      </ol>
	</div>
  );
}

export default App
