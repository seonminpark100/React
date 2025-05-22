import './App.css'
import { Route, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';

const nowDate = ()=>{
  let dateObj = new Date();
  var year = dateObj.getFullYear();
  var month = ("0" + (1 + dateObj.getMonth())).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

function App() {
  const [boardData, setBoardData] = useState([
    {no:1, title:'오늘은 공부하는날', write:'홍길동', date:'2025-03-31'},
    {no:2, title:'어제는 자바스크립트공부', write:'카리나', date:'2025-05-21', contents:'카리나는 이뿌'},
    {no:3, title:'내일도 카리나 사랑해', write:'선민이', date:'2025-07-21', contents:'카리나는 섹시미녀'}
  ]);

  const [nextNo, setNextNo] = useState(4);
  const navigate = useNavigate();
  return (
    
      <div className='App'>
        <Routes>
            <Route path='/' element={<List boardData={boardData} />} />
            <Route path='/list'  element={<List boardData={boardData} />} />
            <Route path='/view'>
              <Route path=':no' element={<View boardData={boardData} />} />
            </Route>
            <Route path='/write' element={<Write boardData={boardData} setBoardData={setBoardData} nextNo={nextNo} setNextNo={setNextNo} navigate={navigate} nowDate={nowDate} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
	      </div>
    
  );
}

export default App
