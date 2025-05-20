import './App.css'

function MyBody() {
  return(
      <ol>
        <li>프론트엔드</li>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>JQuery</li>
        </ul>
        <li>백엔드</li>
        <ul>
          <li>Java</li>
          <li>Oracle</li>
          <li>JSP</li>
          <li>Spring Boot</li>
        </ul>
      </ol>
  )
}

function App() {
  
  return (
    <>
      <div className='App'>
      <h1>React 기본형</h1>
        <MyBody></MyBody>
      </div>
    </>
  );
}

export default App
