import './App.css'
import { Route, Routes } from 'react-router-dom';
import Write from './components/board/Write';
import View from './components/board/View';
import List from './components/board/List';
import NotFound from './components/common/NotFound';

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<List></List>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/view'>
            <Route path=':idx' element={<View></View>} />
          </Route>
          <Route path='/write' element={<Write></Write>} />
          <Route path='/edit'>
          <Route path=':idx' element={<Edit></Edit>}/>
          </Route> 
          <Route path='*' element={<NotFound />} />
        </Routes>
	</div>
  );
}

export default App
