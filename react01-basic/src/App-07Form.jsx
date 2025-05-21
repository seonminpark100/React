import { useState } from 'react';
import './App.css'

function WriteForm(props) {
  return(
    <form onSubmit={(e) =>{
      e.preventDefault();
      let write = e.target.write.value;
      let title = e.target.title.value;
      let contents = e.target.content.value;
      props.writeAction(title, write, contents);
    }}>
      <table border='1'>
      <tbody>
        <tr>
          <th>작성자</th>
          <td><input type="text" name='write' /></td>
        </tr>
        <tr>
          <th>제목</th>
          <td><input type="text" name='title' /></td>
        </tr>
        <tr>
          <th>내용</th>
          <td><textarea name="contents" cols='22' rows='3'></textarea></td>
        </tr>
      </tbody>
      </table>
      <input type="submit" value="전송" />
    </form>
  );
}

function App() {
  const [message, setMessage] = useState('폼값 검증 진행중');
  return (
      <div className='App'>
      <h1>React - Form값 처리</h1>
      <writeForm writeAction={(wr,ti,con)=>{
        console.log("폼값", wr,ti,con);
        if(wr !== '' && ti !=='' && con!==''){
          setMessage('폼값 검증 완료');
        }
      }}></writeForm>
      <p>{message}</p>
	</div>
  );
}

export default App
