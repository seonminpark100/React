import './App.css'
import {BrowserRouter} from 'react-router-dom';
import { Link, Route, Routes} from 'react-router-dom';
import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';



function App() {
  const boardData = [
    {no:1, title:'오늘은 공부하는날', write:'홍길동', date:'2025-03-31'},
    {no:2, title:'어제는 자바스크립트공부', write:'카리나', date:'2025-05-21', contents:'카리나는 이뿌'},
    {no:3, title:'내일도 카리나 사랑해', write:'선민이', date:'2025-07-21', contents:'카리나는 섹시미녀'}
  ];
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route path='/' element={<List boardData={boardData} />} />
            <Route path='/list'  element={<List boardData={boardData} />} />
            <Route path='/view' element={<View></View>} />
            <Route path='/write' element={<Write></Write>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
	      </div>
    </BrowserRouter>
  );
}

export default App
