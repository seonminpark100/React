import './App.css'

function FrontComp(props) {
  const liRows = [];

  for (let i = 0; i < props.propData ; i++) {
    liRows.push(
      <li key={i}>{props.propData[i]}</li>
    );
  
  }
  return(<>
    <li>프론트앤드</li>
    <ul>
      {liRows}
    </ul>
    </>)
}
const BackComp = ({propData2}) => {
  const liRows = [];

  let keyCnt=0;
  for(let row of propData2){
    liRows.push(
      <li key={keyCnt++}>{row}</li>
    );
  }
  return(<>
    <li>백엔드</li>
    <ul>
      {liRows}
    </ul>
  </>)
}


function App() {
  const frontData = ['HTML5', 'CSS3', 'javascript', 'JQUERY', 'React추가'];
  const backData = ['java', 'oracle', 'jsp', 'springboot', 'Nextjs추가'];

  return (
    <>
      <div>
      <h2>React props</h2>
      <ol>
        <FrontComp propData>{frontData}</FrontComp>
        <BackComp propData2={backData} />
      </ol>
      </div>
    </>
  );
}

export default App
